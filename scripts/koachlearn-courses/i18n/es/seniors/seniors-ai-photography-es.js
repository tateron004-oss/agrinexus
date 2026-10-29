"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-photography.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-photography-es",
  lang: "es",
  translationOf: "seniors-ai-photography",
  category: "Seniors and Technology",
  name: "IA para la fotografía",
  skills: "Tomar fotos claras con el teléfono, Usar la mejora automática y la edición, Quitar pequeñas distracciones con herramientas de IA, Encontrar fotos buscando, Hacer un álbum para compartir con la familia",
  outcome: "tomar una foto clara con tu teléfono, mejorarla con herramientas de edición automáticas y de IA, encontrar fotos viejas buscando y compartir un álbum pequeño con tu familia.",
  about: [
    "Este curso es para personas mayores a las que les encanta tomar fotos de los nietos, el jardín, las mascotas, los viajes y las reuniones familiares, y quieren que se vean lo mejor posible sin aprender a usar una cámara complicada.",
    "La cámara y la aplicación de fotos de tu teléfono ya traen funciones de IA: mejora automática, herramientas que quitan pequeñas distracciones y una búsqueda que puede encontrar “perro” o “playa” entre miles de fotos. Aprenderás a usarlas, y también cuándo hay que ser honesto sobre las fotos editadas.",
    "Cada lección dura unos cinco minutos. Ten a mano tu teléfono o tableta y practica con tus propias fotos. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Toma tres fotos de algo que quieras mucho (una persona con su permiso, una mascota, una planta o una comida). Mejora la mejor con la mejora automática y otra edición, encuentra dos fotos más viejas buscando en tu aplicación de fotos y comparte las tres en un álbum pequeño o en un mensaje con un familiar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores a las que les encanta tomar y compartir fotos de sus nietos, mascotas, jardines, comidas y viajes, y que muchas veces tienen cajas de fotos familiares impresas.",
    startingPoint: "Saben tomar una foto con la cámara del teléfono. A muchas las fotos les salen borrosas u oscuras, nunca han abierto la pantalla de Editar, pasan mucho tiempo deslizando para encontrar fotos viejas y no saben bien cómo compartir un álbum.",
    gap: "Las fotos son una de las formas principales en que las familias se mantienen cerca. Fotos claras, ediciones sencillas con IA, búsquedas rápidas, álbumes compartidos y copias digitales de las fotos impresas ayudan a las personas mayores a compartir y guardar recuerdos, y pedir permiso y ser honestas sobre las ediciones con IA mantiene la confianza en la familia.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: un teléfono inteligente con cámara; las aplicaciones de fotos y las herramientas de IA cambian según el teléfono, y algunos no tienen borrador de IA",
      "Tiempo: unos 5 minutos por lección, sin prisa, con práctica",
      "Permiso: preguntar a las personas, y a los padres de los niños, antes de compartir sus fotos",
      "Honestidad: las ediciones con IA y las fotos coloreadas se marcan, y se guardan los originales"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando la cámara de tu teléfono", action: "tomar una foto nítida y bien iluminada limpiando el lente, sosteniendo el teléfono firme, usando buena luz y tocando para enfocar", standard: "y quedarte con la mejor de varias tomas" },
    { id: "O2", condition: "Con una foto en tu teléfono", action: "mejorarla con la mejora automática, el recorte y el enderezado", standard: "y deshacer los cambios con Revertir si cambias de idea" },
    { id: "O3", condition: "Con una foto que tiene una pequeña distracción", action: "quitarla con un borrador de IA y ser honesto sobre cómo se editó la foto", standard: "sin cambiar lo que de verdad pasó de una forma que engañe" },
    { id: "O4", condition: "Con una galería de fotos con muchas imágenes", action: "encontrar fotos buscando una cosa, un lugar o una fecha, y marcar favoritas", standard: "encontrando dos fotos viejas sin deslizar" },
    { id: "O5", condition: "Con varias fotos para compartir", action: "crear un álbum o un mensaje y compartirlo con un familiar", standard: "después de pedir permiso para las fotos de otras personas" },
    { id: "O6", condition: "Con una foto impresa vieja", action: "hacer una copia digital y mejorarla, marcando cualquier versión coloreada con IA", standard: "con los bordes rectos, poco reflejo y el original guardado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tomar y mejorar fotos",
      lessons: [
        {
          objectives: ["O1","O5"],
          title: "Tomar una foto clara con tu teléfono",
          minutes: 5,
          goal: "Tomar una foto nítida y bien iluminada con tu teléfono.",
          text: [
            "Las buenas fotos empiezan con algunas costumbres sencillas. Limpia con cuidado el lente de la cámara con un paño suave; las huellas de los dedos hacen que las fotos salgan borrosas. Sostén el teléfono con las dos manos y mantén los codos cerca del cuerpo para que las fotos salgan firmes.",
            "La luz es lo más importante. Pon a tu modelo de cara a una ventana o a la luz del día, con la luz detrás de ti y no detrás de la persona. Toca la pantalla sobre la cara de la persona o la flor que quieres nítida; la cámara enfoca ahí.",
            "Acércate y llena la foto con lo que importa. Toma varias fotos en vez de una; puedes quedarte con la mejor y borrar las demás. Pide siempre permiso a las personas, sobre todo a los padres de tus nietos, antes de compartir sus fotos."
          ],
          steps: ["Limpia el lente con un paño suave.", "Sostén el teléfono con las dos manos.", "Pon la luz detrás de ti, de cara a tu modelo.", "Toca la pantalla donde quieres que salga nítido.", "Toma varias fotos y quédate con la mejor."],
          words: [["Lente", "el pequeño vidrio redondo en la parte de atrás del teléfono a través del cual ve la cámara."], ["Enfocar", "hacer que una parte de la foto salga nítida y clara."]],
          slides: [
            { title: "Antes de tomar la foto", bullets: ["Limpia el lente con cuidado", "Sostén con las dos manos, codos pegados"] },
            { title: "Luz y enfoque", bullets: ["Luz detrás de ti, sobre tu modelo", "Toca la pantalla para enfocar"] },
            { title: "Consigue la mejor foto", bullets: ["Acércate", "Toma varias y quédate con la mejor", "Pide permiso antes de compartir fotos de personas"] }
          ],
          tryIt: "Limpia tu lente y luego toma tres fotos de una flor, una mascota o un objeto cerca de una ventana. Toca para enfocar en cada una. Míralas y elige tu favorita.",
          youCanNow: "tomar una foto clara y bien iluminada con tu teléfono.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué tocar la pantalla sobre una cara antes de tomar la foto?", options: ["Para alejar la imagen", "Para que la cámara enfoque ese punto", "Para borrar la foto", "Para prender el flash"], answer: 1, why: "Tocar la pantalla le dice a la cámara dónde enfocar para que ese punto salga nítido." },
            { objective: "O1", q: "Le estás tomando una foto a tu amiga adentro de la casa. ¿Dónde te pones?", options: ["Con la ventana detrás de tu amiga", "En un rincón oscuro", "Con la ventana detrás de ti, para que la luz le dé a tu amiga", "Lejos, al otro lado del cuarto"], answer: 2, why: "La luz debe darle de frente a lo que fotografías, con la luz detrás de ti, no detrás de la persona." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mejora automática y ediciones sencillas",
          minutes: 5,
          goal: "Mejorar una foto con la mejora de un toque, el recorte y el enderezado.",
          text: [
            "Tu aplicación de fotos tiene un botón Editar. Abre una foto y toca Editar. La mayoría de las aplicaciones tienen un botón automático de un solo toque, a menudo con forma de varita mágica, que usa IA para arreglar el brillo, el color y el contraste en un segundo.",
            "Después, recorta para quitar el espacio vacío y endereza un horizonte torcido. Busca la herramienta de recorte (a menudo un cuadrado con flechas), arrastra las esquinas hacia dentro y gira un poco si hace falta.",
            "Las ediciones por lo general no destruyen tu original. La mayoría de las aplicaciones te dejan volver atrás con Revertir o Deshacer. Toca Listo o Guardar cuando estés contento."
          ],
          steps: ["Abre la foto y toca Editar.", "Toca el botón automático o de varita mágica.", "Usa la herramienta de recorte para quitar el espacio vacío.", "Endereza la foto si está torcida.", "Toca Listo o Guardar; usa Revertir si cambias de idea."],
          words: [["Mejorar", "arreglar automáticamente el brillo y el color de una foto."], ["Recortar", "quitar los bordes de una foto."]],
          slides: [
            { title: "Un toque para mejorar", bullets: ["Abre la foto y toca Editar", "Toca el botón automático o de varita mágica"] },
            { title: "Recorta y endereza", bullets: ["Quita el espacio vacío", "Endereza los horizontes torcidos"] },
            { title: "Sin riesgo", bullets: ["La mayoría de las aplicaciones guardan tu original", "Usa Revertir o Deshacer", "Toca Listo o Guardar"] }
          ],
          tryIt: "Abre tu foto favorita de la Lección 1. Usa la mejora automática, recórtala un poco y guárdala. Luego compárala con la original.",
          youCanNow: "mejorar una foto con la mejora automática, el recorte y el enderezado.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace recortar una foto?", options: ["Corta los bordes y el espacio vacío", "Hace los colores más vivos", "Comparte la foto", "Borra la foto"], answer: 0, why: "Recortar quita el espacio vacío para que la imagen se llene con lo que importa." },
            { objective: "O2", q: "Hiciste ediciones y ahora la foto se ve peor. ¿Qué haces?", options: ["Borrar la foto", "Tomar una captura de pantalla", "Hacer más ediciones", "Tocar Revertir o Deshacer para volver atrás"], answer: 3, why: "Las ediciones casi nunca destruyen el original; Revertir o Deshacer lo trae de vuelta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Herramientas de IA que quitan distracciones",
          minutes: 5,
          goal: "Quitar una pequeña distracción de una foto con un borrador de IA, y saber cuándo hay que contar con honestidad que una foto fue editada.",
          text: [
            "Muchos teléfonos y aplicaciones de fotos nuevos traen un borrador de IA: rodeas o pintas encima de algo pequeño que no quieres, como un bote de basura, un desconocido al fondo o un cable de luz, y la IA rellena el espacio.",
            "Busca en la pantalla de Editar una herramienta con un nombre parecido a Borrador mágico, Limpiar o Borrador de objetos. Los nombres cambian según el teléfono, y algunos teléfonos no la tienen. Si el tuyo no la tiene, pregúntale a un asistente de IA: “¿Cómo quito un objeto de una foto en mi teléfono?” y dile el modelo de tu teléfono.",
            "Las pequeñas limpiezas están bien para las fotos familiares. Pero no uses la IA para cambiar lo que de verdad pasó en una foto de una manera que pueda engañar a la gente, y sé honesto si alguien te pregunta si una foto fue editada."
          ],
          steps: ["Abre la foto y toca Editar.", "Busca una herramienta de borrador o de limpieza.", "Pinta o rodea la pequeña distracción.", "Revisa el resultado y guarda, o deshaz.", "Sé honesto sobre las fotos editadas."],
          words: [["Borrador de IA", "una herramienta que quita un objeto de una foto y rellena el fondo."], ["Engañar", "hacer que alguien crea algo que no es cierto."]],
          slides: [
            { title: "Borra pequeñas distracciones", bullets: ["Botes de basura, desconocidos, cables de luz", "Píntalos o rodéalos", "La IA rellena el espacio"] },
            { title: "Encuentra la herramienta", bullets: ["Los nombres cambian según el teléfono", "Busca en Editar un borrador o herramienta de limpieza", "Pregúntale a la IA con el modelo de tu teléfono"] },
            { title: "Sé honesto", bullets: ["Las limpiezas están bien", "No cambies lo que de verdad pasó", "Dilo si una foto fue editada"] }
          ],
          tryIt: "Busca una foto con una pequeña distracción. Busca en Editar una herramienta de borrador o de limpieza y prueba a quitarla. Si tu teléfono no la tiene, pregúntale a un asistente de IA cómo hacerlo en tu modelo.",
          youCanNow: "usar un borrador de IA para limpiar una foto, y usarlo con honestidad.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace un borrador de IA?", options: ["Borra toda la foto", "Quita una cosa pequeña que pintas con el dedo y rellena el espacio", "Agrega personas a una foto", "Pone la foto en blanco y negro"], answer: 1, why: "Pintas o encierras en un círculo una pequeña distracción y la IA rellena el espacio." },
            { objective: "O3", q: "Tu nieto te pregunta si editaste la foto de la playa. Quitaste un bote de basura. ¿Qué le dices?", options: ["Que no, que nunca se editó", "Cambias de tema", "Borras la foto", "Le dices con honestidad que quitaste un bote de basura"], answer: 3, why: "Las pequeñas limpiezas están bien, pero sé honesto si alguien pregunta si una foto fue editada." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tomar y mejorar fotos",
        questions: [
          { objective: "O1", q: "Tus fotos salen borrosas. ¿Qué cosa sencilla debes probar primero?", options: ["Sacudir el teléfono", "Comprar un teléfono nuevo", "Limpiar el lente con un paño suave", "Apagar la pantalla"], answer: 2, why: "Las huellas en el lente hacen que las fotos salgan borrosas." },
          { objective: "O1", q: "¿Dónde debe estar la luz para un buen retrato?", options: ["Sobre tu modelo, detrás de ti", "Detrás de tu modelo", "En ninguna parte", "Debajo de la mesa"], answer: 0, why: "La luz sobre la cara la muestra con claridad." },
          { objective: "O1", q: "¿Qué hace tocar la pantalla antes de tomar la foto?", options: ["Envía la foto", "Borra la foto", "Pone música", "Enfoca en ese punto"], answer: 3, why: "Tocar le dice a la cámara dónde enfocar." },
          { objective: "O2", q: "¿Qué hace por lo general el botón de varita mágica o automático?", options: ["Borra la foto", "Arregla el brillo y el color con un toque", "La comparte en público", "La imprime"], answer: 1, why: "Es una mejora con IA de un solo toque." },
          { objective: "O3", q: "¿Cuándo NO está bien usar un borrador de IA?", options: ["Para quitar un bote de basura", "Para cambiar lo que de verdad pasó de una manera engañosa", "Para quitar un cable de luz", "Para ordenar una foto familiar"], answer: 1, why: "Las ediciones no deben engañar a la gente." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar, ordenar y compartir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar fotos buscando",
          minutes: 5,
          goal: "Encontrar fotos viejas escribiendo una palabra en la búsqueda de tu aplicación de fotos.",
          text: [
            "Si tienes miles de fotos, desplazarte por todas cansa. Las aplicaciones de fotos como Apple Fotos y Google Fotos usan IA para reconocer lo que hay en tus fotos, así que puedes buscar “perro”, “playa”, “pastel de cumpleaños” o “nieve”.",
            "Abre tu aplicación de fotos, toca Buscar (a menudo una lupa) y escribe una palabra. También puedes buscar por lugar (“Florida”) o por mes y año (“julio 2019”). Muchas aplicaciones pueden agrupar las fotos de una misma cara para que pongas nombre a las personas; esto es opcional y puedes desactivarlo en los ajustes.",
            "Usa los favoritos para tener juntas tus mejores fotos: toca el corazón en una foto y luego encuentra todas las favoritas en un solo álbum."
          ],
          steps: ["Abre tu aplicación de fotos.", "Toca Buscar o la lupa.", "Escribe una cosa, un lugar o una fecha.", "Toca el corazón en las fotos que te encantan para marcarlas como favoritas."],
          words: [["Álbum", "un grupo de fotos guardadas juntas, como una página de un libro de fotos."], ["Favoritos", "fotos que marcas con un corazón para encontrarlas rápido."]],
          slides: [
            { title: "Deja que la IA encuentre tus fotos", bullets: ["Busca “perro”, “playa”, “pastel de cumpleaños”", "O un lugar, o un mes y un año"] },
            { title: "Cómo buscar", bullets: ["Abre tu aplicación de fotos", "Toca la lupa", "Escribe una palabra"] },
            { title: "Guarda las mejores", bullets: ["Toca el corazón para los favoritos", "Agrupar caras es opcional"] }
          ],
          tryIt: "Busca dos cosas en tu aplicación de fotos, como “flor” y un lugar que visitaste. Marca como favorita una foto de cada búsqueda.",
          youCanNow: "encontrar fotos viejas buscando y guardar las mejores como favoritas.",
          quickCheck: [
            { objective: "O4", q: "¿Cómo puede una aplicación de fotos encontrar todas tus fotos de nieve?", options: ["La IA reconoce lo que hay en tus fotos, así que puedes buscar \"nieve\"", "Le pregunta a tu familia", "Lee los nombres de archivo que escribiste", "No puede; tienes que deslizar"], answer: 0, why: "Las aplicaciones de fotos usan IA para reconocer cosas en las imágenes, así puedes buscar con una palabra." },
            { objective: "O4", q: "Quieres encontrar las fotos de tu viaje de julio de 2019. ¿Qué escribes en Buscar?", options: ["\"Fotos\"", "\"Julio 2019\"", "\"Cámara\"", "Nada; mejor deslizas"], answer: 1, why: "Puedes buscar por mes y año, por lugar o por una cosa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer y compartir un álbum",
          minutes: 6,
          goal: "Crear un álbum y compartirlo con tu familia.",
          text: [
            "Un álbum es una colección de fotos sobre un tema, como “Verano en el lago” o “El primer año de Emma”. Hacer uno es una forma muy bonita de compartir recuerdos.",
            "En la mayoría de las aplicaciones de fotos: elige varias fotos tocando Seleccionar y luego cada foto, toca el botón Compartir o el signo más, y elige agregarlas a un álbum nuevo o a un álbum compartido. Ponle un nombre. Un álbum compartido deja que los familiares que invites vean las fotos, y a menudo que agreguen las suyas.",
            "También puedes simplemente enviar algunas fotos por mensaje de texto o por correo. Antes de compartir fotos de tus nietos, pregúntales a sus padres si está bien y con quién compartirlas."
          ],
          steps: ["Toca Seleccionar y elige varias fotos.", "Toca Compartir o el signo más.", "Elige un álbum nuevo o un álbum compartido y ponle nombre.", "Invita a tus familiares por nombre, número de teléfono o correo.", "Pregúntales a los padres antes de compartir fotos de niños."],
          words: [["Álbum compartido", "un álbum que las personas que invitas pueden ver y al que a menudo pueden agregar fotos."], ["Seleccionar", "elegir varias cosas a la vez."]],
          slides: [
            { title: "Un álbum cuenta una historia", bullets: ["“Verano en el lago”", "“El primer año de Emma”"] },
            { title: "Haz uno", bullets: ["Toca Seleccionar y elige fotos", "Toca Compartir o +", "Álbum nuevo o compartido, y ponle nombre"] },
            { title: "Comparte con cuidado", bullets: ["Invita a tus familiares", "O envía algunas por mensaje o correo", "Pregunta a los padres antes de compartir fotos de niños"] }
          ],
          tryIt: "Haz un álbum con cinco fotos favoritas y un nombre claro. Compártelo, o envía dos de las fotos, con un familiar.",
          youCanNow: "hacer un álbum de fotos y compartirlo con tu familia.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un álbum compartido?", options: ["Un libro de fotos de papel", "Fotos que solo tú puedes ver", "Un álbum que los familiares que invitas pueden ver y muchas veces completar", "Una lista de favoritas"], answer: 2, why: "Un álbum compartido deja que las personas que invitas vean las fotos, y muchas veces agreguen las suyas." },
            { objective: "O5", q: "Quieres compartir fotos de tu nieta en un álbum familiar. ¿Qué haces primero?", options: ["Preguntarles a sus padres si está bien y con quiénes compartirlas", "Publicarlas para todo el mundo", "Compartirlas con todos tus contactos", "Borrar su cara con la edición"], answer: 0, why: "Pregunta a los padres antes de compartir fotos de niños." }
          ]
        },
        {
          objectives: ["O6","O2"],
          title: "Pasar fotos impresas viejas a tu teléfono",
          minutes: 5,
          goal: "Convertir una foto impresa vieja en una copia digital y mejorarla.",
          text: [
            "Muchas familias tienen cajas de fotos impresas viejas. Puedes hacer copias digitales para compartirlas y guardarlas seguras, usando solo tu teléfono.",
            "Pon la foto plana cerca de una ventana, sin sol directo, y tómale una foto justo desde arriba para que los bordes se vean rectos. Las aplicaciones gratuitas para escanear, como PhotoScan de Google, están hechas para esto y reducen los reflejos. Luego usa la mejora automática y el recorte, como en la Lección 2.",
            "Algunas aplicaciones usan IA para colorear o reparar fotos viejas. Pueden ser divertidas, pero los colores son una suposición de la IA, no lo que de verdad hubo. Guarda también el escaneo original y marca como coloreadas esas copias cuando las compartas. Puedes pedirle a un asistente de IA que te ayude a escribir un pie de foto corto con los nombres y el año."
          ],
          steps: ["Pon la foto impresa plana con luz de día suave.", "Sostén el teléfono justo encima.", "Toma la foto, o usa una aplicación para escanear que reduzca los reflejos.", "Mejora y recorta.", "Guarda el original; marca cualquier copia coloreada con IA."],
          words: [["Escanear", "hacer una copia digital de una foto o un documento en papel."], ["Reflejo", "un brillo sobre una foto causado por la luz que rebota en ella."], ["Colorear", "agregar color a una foto en blanco y negro."]],
          slides: [
            { title: "Salva tus fotos impresas", bullets: ["Haz copias digitales para compartir y guardar seguras"] },
            { title: "Cómo copiarlas", bullets: ["Plana, con luz de día suave", "Teléfono justo encima", "Una aplicación para escanear reduce los reflejos"] },
            { title: "Colorear con IA", bullets: ["Los colores son una suposición", "Guarda el escaneo original", "Marca las copias coloreadas"] }
          ],
          tryIt: "Tarea final: toma tres fotos nuevas de algo que quieras mucho, mejora la mejor con la mejora automática y otra edición, encuentra dos fotos más viejas buscando y comparte las tres en un álbum pequeño o en un mensaje con tu familia. Si tienes una foto impresa vieja, agrega también una copia escaneada.",
          youCanNow: "tomar, mejorar, encontrar, ordenar y compartir fotos, incluidas copias de viejas fotos familiares impresas.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es el reflejo en una foto de una foto impresa?", options: ["Una cara borrosa", "Un brillo fuerte de la luz sobre la foto", "Una marca de recorte", "Una esquina que falta"], answer: 1, why: "El reflejo es un brillo fuerte; las aplicaciones para escanear, como PhotoScan, ayudan a reducirlo." },
            { objective: "O6", q: "Una aplicación coloreó la foto de la boda de tus padres. ¿Cómo la compartes?", options: ["Diciendo que siempre fue a color", "Borrando el original en blanco y negro", "Marcándola como coloreada y guardando el original escaneado", "Sin decirle nada a nadie"], answer: 2, why: "Los colores de la IA son una suposición, así que marca las copias coloreadas y guarda el original." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar, ordenar y compartir",
        questions: [
          { objective: "O4", q: "¿Cómo encuentras rápido todas tus fotos de la playa?", options: ["Le preguntas a un desconocido", "Te desplazas durante una hora", "Borras las demás fotos", "Buscas “playa” en tu aplicación de fotos"], answer: 3, why: "La búsqueda con IA reconoce lo que hay en las fotos." },
          { objective: "O4", q: "¿Qué hace tocar el corazón en una foto?", options: ["La marca como favorita", "La borra", "La publica para todos", "La imprime"], answer: 0, why: "Los favoritos se guardan juntos para encontrarlos fácilmente." },
          { objective: "O5", q: "¿Qué es un álbum compartido?", options: ["Un libro de papel", "Un álbum borrado", "Un álbum que pueden ver las personas que invitas", "Una lista de contraseñas"], answer: 2, why: "Los álbumes compartidos dejan que la familia vea y agregue fotos." },
          { objective: "O5", q: "Antes de compartir fotos de tus nietos, debes:", options: ["Nada", "Publicarlas en todas partes", "Imprimirlas para desconocidos", "Preguntarles a sus padres"], answer: 3, why: "Los padres deciden con quién se comparten las fotos de sus hijos." },
          { objective: "O6", q: "Una aplicación de IA colorea una foto vieja en blanco y negro. Los colores son:", options: ["Tomados de la película original", "Exactamente lo que hubo", "Una suposición de la IA", "Siempre correctos"], answer: 2, why: "Colorear es una suposición; guarda y marca el original." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la fotografía",
    questions: [
      { objective: "O1", q: "El lente es:", options: ["La pantalla", "El pequeño vidrio a través del cual ve la cámara", "La batería", "El cargador"], answer: 1, why: "El lente capta la imagen." },
      { objective: "O1", q: "Para que las fotos salgan firmes, sostén el teléfono:", options: ["Con las dos manos, codos pegados", "Con un dedo", "Por encima de tu cabeza", "Al revés"], answer: 0, why: "Las dos manos lo mantienen firme." },
      { objective: "O1", q: "Para un retrato, la luz debe estar:", options: ["Sobre la cara de la persona", "Detrás de la persona", "Apagada", "Debajo de la persona"], answer: 0, why: "La luz sobre la cara la muestra con claridad." },
      { objective: "O1", q: "Tomar varias fotos ayuda porque:", options: ["Los teléfonos necesitan práctica", "Puedes quedarte con la mejor", "Ahorra batería", "Borra las fotos viejas"], answer: 1, why: "Más fotos, más oportunidades de una muy buena." },
      { objective: "O2", q: "Para empezar a editar una foto, toca:", options: ["Compartir", "Eliminar", "Editar", "Ajustes"], answer: 2, why: "Editar abre las herramientas de edición." },
      { objective: "O2", q: "“Recortar” significa:", options: ["Borrar", "Agregar color", "Compartir", "Quitar los bordes"], answer: 3, why: "Recortar ajusta el tamaño de la foto." },
      { objective: "O2", q: "Si no te gustan tus ediciones, por lo general puedes:", options: ["Comprar el original", "No volver atrás nunca", "Revertir o Deshacer", "Reiniciar el teléfono"], answer: 2, why: "La mayoría de las aplicaciones guardan el original." },
      { objective: "O3", q: "Un borrador de IA se usa para:", options: ["Quitar una pequeña distracción de una foto", "Borrar toda tu biblioteca", "Imprimir fotos", "Llamar a la familia"], answer: 0, why: "Quita objetos y rellena el espacio." },
      { objective: "O3", q: "Tu teléfono parece no tener borrador de IA. Un buen paso es:", options: ["Borrar la aplicación de fotos", "Dejar la fotografía", "Compartir tu contraseña", "Preguntarle a un asistente de IA cómo hacerlo en el modelo de tu teléfono"], answer: 3, why: "Los nombres de las herramientas cambian; la IA puede guiarte." },
      { objective: "O3", q: "Usar la IA para cambiar lo que de verdad pasó en una foto y engañar a la gente es:", options: ["Siempre aceptable", "Engañoso y hay que evitarlo", "Obligatorio", "Una función de seguridad"], answer: 1, why: "Las ediciones no deben engañar." },
      { objective: "O4", q: "La búsqueda de la aplicación de fotos puede encontrar imágenes por:", options: ["Solo números de archivo", "Cosas, lugares y fechas", "Solo el color", "Nada"], answer: 1, why: "La IA reconoce el contenido, los lugares y las fechas." },
      { objective: "O4", q: "Agrupar caras en una aplicación de fotos es:", options: ["Una contraseña", "Obligatorio", "Un virus", "Opcional y se puede desactivar"], answer: 3, why: "Tú eliges si lo usas." },
      { objective: "O5", q: "Un álbum es:", options: ["Un grupo de fotos guardadas juntas", "Una sola foto", "Una cámara", "Un filtro"], answer: 0, why: "Los álbumes reúnen fotos relacionadas." },
      { objective: "O5", q: "Para elegir varias fotos a la vez, toca:", options: ["Cámara", "Eliminar", "Seleccionar", "Ajustes"], answer: 2, why: "Seleccionar te deja elegir muchas fotos." },
      { objective: "O5", q: "Una forma sencilla de compartir algunas fotos es:", options: ["Publicarlas en la página de un desconocido", "Enviar el teléfono por correo", "Imprimirlas y mandarlas por fax", "Enviarlas por mensaje de texto o correo"], answer: 3, why: "Los mensajes y los correos comparten con facilidad." },
      { objective: "O6", q: "Para copiar una foto impresa vieja, sostén el teléfono:", options: ["Detrás de la foto", "Muy inclinado", "Justo encima de la foto", "Lejos, al otro lado de la habitación"], answer: 2, why: "Justo encima mantiene rectos los bordes." },
      { objective: "O6", q: "El reflejo es:", options: ["Un tipo de álbum", "Un brillo causado por la luz sobre la foto", "Un filtro", "Una contraseña"], answer: 1, why: "El reflejo tapa partes de la imagen." },
      { objective: "O6", q: "Las aplicaciones para escanear como PhotoScan de Google ayudan porque:", options: ["Reducen los reflejos", "Agregan contraseñas", "Borran las fotos impresas", "Hacen llamadas"], answer: 0, why: "Están hechas para copiar bien las fotos impresas." },
      { objective: "O6", q: "Cuando compartes una foto coloreada con IA, debes:", options: ["Marcarla como coloreada y guardar el original", "Decir que es la original", "Borrar la original", "Esconderla"], answer: 0, why: "Los colores son una suposición; la honestidad importa." },
      { objective: "O6", q: "La IA puede ayudarte con el pie de foto de una foto vieja:", options: ["Sabiendo quién sale en ella", "Ayudándote a escribirlo cuando le das los nombres y el año", "Encontrando sus direcciones", "Adivinando bien sus cumpleaños"], answer: 1, why: "Tú das los datos; la IA ayuda con las palabras." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      7,
      9,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Fotos claras",
        objective: "O1",
        notYet: "Las fotos están borrosas u oscuras, o se fotografió a una persona sin preguntarle.",
        meets: "Tres fotos nítidas y bien iluminadas, con permiso de cualquier persona que aparezca.",
        exceeds: "Lo que se fotografía llena la imagen y se eligió la mejor de varias tomas."
      },
      {
        name: "Foto mejorada",
        objective: "O2",
        notYet: "No hay ediciones, o las ediciones empeoraron la foto.",
        meets: "La mejor foto, mejorada con la mejora automática y otra edición, como un recorte.",
        exceeds: "Puede mostrar cómo revertir la edición y explicar por qué la eligió."
      },
      {
        name: "Fotos viejas encontradas",
        objective: "O4",
        notYet: "Encontró las fotos solo deslizando mucho tiempo, o no las encontró.",
        meets: "Encontró dos fotos viejas usando Buscar con una cosa, un lugar o una fecha.",
        exceeds: "Marcó favoritas para encontrarlas fácil otra vez."
      },
      {
        name: "Compartidas con la familia",
        objective: "O5",
        notYet: "Las fotos no se compartieron, o se compartieron sin permiso.",
        meets: "Las tres fotos compartidas con un familiar en un álbum pequeño o un mensaje.",
        exceeds: "Le puso al álbum un nombre claro e invitó a la familia a agregar fotos."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que comparten un álbum de fotos con su familia dentro de 30 días (encuesta de seguimiento)",
      "Personas que pasan a digital fotos familiares impresas viejas y las comparten",
      "Personas que empiezan otro curso de tecnología para personas mayores dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con cámara y una aplicación de fotos como Apple Fotos o Google Fotos",
      "Un paño suave para el lente, y una o dos fotos impresas viejas",
      "Una aplicación gratuita para escanear, como PhotoScan de Google (opcional)",
      "Unos 60 minutos en total, en sesiones cortas y sin prisa: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Agrupa a las personas por tipo de teléfono; las herramientas de Editar y de borrador tienen nombres distintos en cada teléfono.",
      "Pide a cada persona que traiga una foto impresa vieja para practicar cómo hacer una copia digital.",
      "Muestra con el ejemplo cómo pedir permiso antes de fotografiar o compartir fotos de otras personas, sobre todo de niños.",
      "Hablen de la honestidad con las ediciones de IA y las fotos coloreadas, y de guardar los originales.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
