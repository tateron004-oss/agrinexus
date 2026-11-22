"use strict";

// Koach Learn course (Spanish translation of shared/video-editing-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "video-editing-basics-es",
  lang: "es",
  translationOf: "video-editing-basics",
  category: "Workforce Development",
  name: "Fundamentos de edición de video",
  skills: "Leer un encargo y organizar el material, Configurar un proyecto, Armar un primer montaje, Usar B-roll y cortes más limpios, Arreglar el sonido y agregar subtítulos, Exportar y armar un portafolio",
  outcome: "tomar tus propios clips sin editar y un encargo corto, editarlos en un editor de video gratis hasta lograr un video limpio de 30 a 60 segundos con sonido claro y subtítulos, exportarlo en la forma correcta para donde se va a ver y usarlo como la primera pieza de un portafolio de trabajo.",
  about: [
    "Este curso es para cualquier persona que quiera editar video como trabajo: jóvenes que buscan su primer empleo creativo, adultos que cambian de carrera, atletas y entrenadores que hacen clips con las mejores jugadas, y dueños de pequeños negocios que quieren videos para su propio local. No necesitas haber editado antes.",
    "Vas a trabajar como un editor de verdad: leer un encargo, organizar tus archivos, armar un primer montaje, hacerlo más fluido con B-roll (tomas de apoyo) y mejores cortes, arreglar el sonido, agregar subtítulos y exportar el archivo terminado. Todo funciona con editores gratis como DaVinci Resolve, Microsoft Clipchamp, CapCut o el editor que trae tu teléfono.",
    "Cada lección dura unos cinco minutos y luego viene una tarea de \"Pruébalo ahora\" con tus propios clips. Hay una comprobación rápida de dos preguntas después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tu producto final es un video corto terminado y una nota de portafolio que puedes mostrar a un empleador o a un cliente.",
    "Este curso te prepara. No otorga ningún certificado. Si más adelante quieres una credencial, la Lección 6 te muestra dos reales y dónde consultarlas."
  ],
  finalTask: "Edita un video de 30 a 60 segundos con tu propio material para un encargo real o de práctica (por ejemplo, las mejores jugadas de un equipo, un anuncio para un negocio local o la historia de un programa de empleo). Entrega: una carpeta de proyecto con nombre, el video terminado exportado en la forma correcta para donde se va a ver, con B-roll, sonido limpio, subtítulos y solo música que tengas permiso de usar, y una nota corta de portafolio que diga el encargo, tu papel y las herramientas que usaste.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes y adultos en programas de empleo, atletas y entrenadores, y dueños de pequeños negocios en Estados Unidos y en otros países. La mayoría ha grabado video con el teléfono; pocos han editado algo más que poner un filtro en una aplicación de redes sociales.",
    startingPoint: "Pueden grabar video con el teléfono y publicarlo en redes sociales. No han usado una línea de tiempo, no saben qué es la relación de aspecto ni la velocidad de fotogramas y nunca han exportado un archivo para otra persona.",
    gap: "Negocios, escuelas, equipos y organizaciones sin fines de lucro necesitan videos cortos, y muchos empleos de entrada y trabajos independientes (asistente de redes sociales, creador de contenido, editor junior) piden habilidades básicas de edición y una muestra de tu trabajo. Los participantes necesitan una forma repetible de convertir clips y un encargo en un video limpio y terminado, y una pieza terminada para mostrar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada término de edición",
      "Dispositivos: un teléfono, o una computadora en casa, en una biblioteca o en un centro de empleo; solo editores gratis",
      "Los menús de los editores cambian seguido, así que las lecciones enseñan acciones, no nombres exactos de menús",
      "Tiempo: lecciones de 4 a 6 minutos más una hora, más o menos, de edición práctica para la tarea final",
      "Reglas: permiso de las personas que salen en cámara (y de un padre o madre para cualquier menor de 18 años) y música que el participante tenga permiso de usar"
    ],
    prerequisites: "Saber grabar video con un teléfono y pasar archivos a una computadora o entre aplicaciones. Quien sea nuevo con teléfonos o computadoras puede tomar primero \"Habilidades básicas de computación\" o \"Usar un teléfono inteligente y una tableta\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un encargo corto y un conjunto de clips sin editar", action: "organizar el material en una carpeta de proyecto con nombre y configurar la relación de aspecto y la velocidad de fotogramas del proyecto según dónde se verá el video", standard: "con cada clip fácil de encontrar y ningún clip estirado o recortado por error" },
    { id: "O2", condition: "Usando un editor de video gratis", action: "armar un primer montaje recortando, dividiendo y ordenando clips en la línea de tiempo en un inicio, un desarrollo y un final", standard: "que cuente la historia del encargo en la duración pedida y sin tiempo muerto" },
    { id: "O3", condition: "Con un primer montaje", action: "agregar B-roll, tomas de corte y transiciones sencillas para ocultar los saltos y mantener el ritmo del video", standard: "usando no más de uno o dos tipos de transición" },
    { id: "O4", condition: "Con un montaje que tiene voz y música", action: "equilibrar los niveles de sonido y agregar subtítulos correctos y texto en pantalla", standard: "de modo que cada palabra se oiga y se lea, el medidor nunca llegue al tope y toda la música se use con permiso" },
    { id: "O5", condition: "Con una edición terminada", action: "exportar el video con una configuración adecuada para la plataforma, revisarlo contra el encargo y escribir una nota corta de portafolio", standard: "de modo que el archivo se reproduzca bien al primer intento y la nota diga el encargo, tu papel y tus herramientas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: De los clips sin editar al primer montaje",
      lessons: [
        {
          title: "Lee el encargo y organiza tu material",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escribir un encargo y preparar una carpeta de proyecto con nombre y con tus clips ordenados.",
          text: [
            "Todo trabajo de edición empieza con un encargo: una descripción corta de para qué es el video. Un buen encargo responde cinco preguntas: quién lo va a ver, dónde se va a ver (por ejemplo YouTube, Instagram Reels, TikTok o una pantalla en la vitrina de un local), cuánto debe durar, cuál es el único mensaje que tiene que transmitir y para cuándo se entrega.",
            "Después, organiza. Los editores pierden horas buscando clips. Crea una carpeta de proyecto con un nombre claro, como \"2026-11 Anuncio panadería\". Adentro, crea carpetas para video, audio, música, gráficos y exportaciones. Copia tus clips ahí y ponles nombres cortos a los mejores, como \"horno-primer-plano\" o \"entrevista-duena\".",
            "Guarda una segunda copia de tus clips sin editar en otro lugar, como una memoria USB o el almacenamiento en la nube. Si un teléfono se rompe o se borra un archivo, el trabajo no se pierde.",
            "Revisa los permisos ahora, no después de publicar. Toda persona que se vea o se oiga con claridad debe aceptar salir en el video, y cualquier menor de 18 años necesita también que su padre, madre o tutor acepte."
          ],
          steps: ["Escribe el encargo: público, plataforma, duración, un mensaje y fecha de entrega.", "Crea una carpeta de proyecto con un nombre claro y la fecha.", "Agrega carpetas para video, audio, música, gráficos y exportaciones.", "Copia tus clips adentro y cambia el nombre de los mejores.", "Haz una copia de seguridad de los clips sin editar en un segundo lugar.", "Confirma que todas las personas en cámara dieron su permiso."],
          words: [["Encargo", "una descripción corta de para qué es un video: para quién es, dónde se ve, cuánto dura, el mensaje y la fecha de entrega."], ["Material", "los clips de video sin editar que grabaste antes de editar."], ["Copia de seguridad", "una segunda copia de tus archivos guardada en otro lugar."], ["Cliente", "la persona o el negocio para quien haces el video."]],
          slides: [
            { title: "Un encargo responde cinco preguntas", bullets: ["¿Quién lo va a ver?", "¿Dónde se va a ver?", "¿Cuánto dura? ¿Cuál es el único mensaje?", "¿Para cuándo es?"] },
            { title: "Una carpeta de proyecto clara", bullets: ["Ponle la fecha y el nombre del trabajo", "Carpetas: video, audio, música, gráficos, exportaciones", "Cambia el nombre de tus mejores clips"] },
            { title: "Protege el trabajo", bullets: ["Copia de seguridad de los clips en un segundo lugar", "Permiso de todas las personas en cámara", "Padre, madre o tutor para cualquier menor de 18 años"] }
          ],
          tryIt: "Elige el video que harás para la tarea final (las mejores jugadas de un equipo, un anuncio de un negocio, la historia de un programa de empleo o tu propia idea). Escribe en papel un encargo de cinco líneas. Luego crea la carpeta de proyecto con sus cinco carpetas internas, copia de 8 a 15 clips que hayas grabado y cambia el nombre de los cinco mejores.",
          youCanNow: "escribir un encargo corto y preparar una carpeta de proyecto donde cada clip es fácil de encontrar.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estas cosas va en un encargo de video?", options: ["Tu color favorito", "Dónde se va a ver el video y cuánto debe durar", "El precio de tu teléfono", "Una lista de todas tus aplicaciones"], answer: 1, why: "Dónde se ve y cuánto dura definen todas las decisiones de edición que vienen después." },
            { objective: "O1", q: "Tu teléfono tiene la única copia de los clips de un cliente. ¿Qué haces primero?", options: ["Empezar a editar de inmediato", "Borrar los clips que no te gustan", "Publicar los clips para que queden guardados en internet", "Copiarlos a un segundo lugar, como una memoria USB o la nube"], answer: 3, why: "Una copia de seguridad en otro lugar hace que un teléfono roto o un archivo borrado no te hagan perder el trabajo." }
          ]
        },
        {
          title: "Configura el proyecto: forma, tamaño y velocidad",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir la relación de aspecto, la resolución y la velocidad de fotogramas de un proyecto antes de editar.",
          text: [
            "Antes de editar, dile al editor la forma y el tamaño del video terminado. La relación de aspecto es la forma. El formato ancho 16:9 sirve para YouTube, laptops y televisores. El formato vertical 9:16 sirve para aplicaciones de teléfono como TikTok, Instagram Reels y YouTube Shorts. El cuadrado 1:1 sirve para algunos feeds. Elige la forma según tu encargo.",
            "La resolución es cuántos puntos (píxeles) forman la imagen. 1920 por 1080, que muchas veces se llama 1080p o Full HD, es una opción segura para la mayoría de los trabajos. Para un video vertical es 1080 de ancho por 1920 de alto.",
            "La velocidad de fotogramas es cuántas imágenes fijas se reproducen por segundo, y se escribe fps. Las velocidades comunes son 24, 30 y 60. Configura el proyecto a la velocidad con la que grabaste la mayoría de tus clips. Puedes ver los datos de un clip en el editor o en la información del archivo en tu computadora o teléfono.",
            "Si la forma está mal, el editor agregará franjas negras o cortará los lados. Si mezclas velocidades de fotogramas, el movimiento puede verse a saltos. Configurar esto primero te ahorra muchos arreglos después."
          ],
          steps: ["Lee el encargo: ¿dónde se va a ver el video?", "Elige la forma: 16:9 ancho, 9:16 vertical o 1:1 cuadrado.", "Elige el tamaño: 1920 x 1080 ancho, o 1080 x 1920 vertical.", "Revisa la velocidad de fotogramas de tus clips y configura el proyecto igual.", "Crea el proyecto e importa tus clips."],
          words: [["Relación de aspecto", "la forma del video, escrita como ancho a alto, por ejemplo 16:9 (ancho) o 9:16 (vertical)."], ["Resolución", "cuántos píxeles forman la imagen, por ejemplo 1920 x 1080."], ["Píxel", "un puntito de color en una pantalla."], ["Velocidad de fotogramas (fps)", "cuántas imágenes fijas se reproducen por segundo, por ejemplo 24, 30 o 60."], ["Importar", "meter tus clips en el programa de edición."]],
          slides: [
            { title: "Forma: relación de aspecto", bullets: ["16:9 ancho: YouTube, laptops, televisores", "9:16 vertical: TikTok, Reels, Shorts", "1:1 cuadrado: algunos feeds"] },
            { title: "Tamaño: resolución", bullets: ["1920 x 1080 (1080p) es seguro para la mayoría de los trabajos", "Vertical: 1080 de ancho x 1920 de alto"] },
            { title: "Velocidad: fotogramas por segundo", bullets: ["24, 30 o 60 fotogramas por segundo", "Usa la velocidad con la que grabaste la mayoría de los clips"] },
            { title: "Por qué configurarlo primero", bullets: ["Forma equivocada = franjas negras o lados cortados", "Velocidades mezcladas = movimiento a saltos"] }
          ],
          sources: [
            { name: "Blackmagic Design: DaVinci Resolve (versión gratis para Mac, Windows y Linux)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
            { name: "Microsoft Clipchamp: planes, incluido el plan gratis", url: "https://clipchamp.com/en/pricing/" }
          ],
          tryIt: "Abre un editor gratis: DaVinci Resolve o Clipchamp en una computadora, o CapCut o el editor que trae tu teléfono. Busca la velocidad de fotogramas de tres de tus clips. Crea un proyecto nuevo con la forma y la velocidad de fotogramas que pide tu encargo e importa tus clips.",
          youCanNow: "configurar un proyecto con la forma, el tamaño y la velocidad de fotogramas correctos para donde se verá el video.",
          quickCheck: [
            { objective: "O1", q: "Tu encargo dice que el video será un Reel de Instagram. ¿Qué forma eliges?", options: ["16:9 ancho", "4:3 televisor antiguo", "9:16 vertical", "21:9 cine"], answer: 2, why: "Los Reels, TikTok y Shorts se ven en vertical en el teléfono, así que 9:16 llena la pantalla." },
            { objective: "O1", q: "Grabaste la mayoría de tus clips a 30 fps. ¿Qué velocidad de fotogramas debe usar el proyecto?", options: ["30 fps, igual que los clips", "60 fps, porque más alto siempre es mejor", "Cualquiera; no hay diferencia", "24 fps, porque es la que usa el cine"], answer: 0, why: "Usar la misma velocidad que la mayoría de tus clips mantiene el movimiento fluido." }
          ]
        },
        {
          title: "Arma un primer montaje en la línea de tiempo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Recortar, dividir y ordenar clips en la línea de tiempo para contar una historia en la duración pedida.",
          text: [
            "La línea de tiempo es la franja donde colocas los clips en orden, de izquierda a derecha. El cabezal de reproducción es la línea que muestra dónde estás. Un primer montaje es tu primera versión completa: los clips correctos, en el orden correcto y con más o menos la duración correcta. Todavía no tiene que verse bonito.",
            "Ármalo en tres partes. El inicio llama la atención en los primeros segundos. El desarrollo muestra el mensaje principal. El final le dice al espectador qué hacer o qué recordar. Para una panadería: pan recién salido del horno, la dueña contando por qué empezó y luego el letrero del local con su horario.",
            "Dos herramientas hacen casi todo el trabajo. Recortar quita el inicio o el final de un clip. Dividir corta un clip en dos en el cabezal de reproducción, para que puedas quitar una parte del medio. Empieza cada toma justo antes de la acción y termínala justo después. Quita el tiempo muerto: esperas, miradas a la cámara, los \"eh\" y las pausas largas.",
            "Mira todo el primer montaje desde el inicio. Si dura más de lo que permite el encargo, quita tomas completas antes de acortar las buenas. Guarda seguido, y guarda una copia con número de versión (v1, v2) antes de hacer cambios grandes."
          ],
          steps: ["Arrastra tus mejores clips a la línea de tiempo en el orden de la historia: inicio, desarrollo, final.", "Recorta el inicio y el final de cada clip para que empiece justo antes de la acción.", "Divide los clips para quitar pausas, errores y tiempo muerto.", "Mira desde el inicio y compara la duración con el encargo.", "Si dura demasiado, quita tomas débiles completas.", "Guarda como v1."],
          words: [["Línea de tiempo", "la franja de un editor donde se colocan los clips en orden, de izquierda a derecha."], ["Cabezal de reproducción", "la línea en la línea de tiempo que muestra el momento que estás viendo."], ["Recortar", "acortar un clip quitándole el inicio o el final."], ["Dividir", "cortar un clip en dos partes en el cabezal de reproducción."], ["Primer montaje", "la primera versión completa de una edición, con los clips correctos en orden pero sin pulir."], ["Tiempo muerto", "partes donde no pasa nada útil, como esperas o pausas largas."]],
          slides: [
            { title: "La línea de tiempo", bullets: ["Clips en orden, de izquierda a derecha", "El cabezal de reproducción muestra dónde estás", "Primer montaje = primera versión completa"] },
            { title: "Inicio, desarrollo, final", bullets: ["Llama la atención en los primeros segundos", "Muestra el mensaje principal", "Termina con qué hacer o qué recordar"] },
            { title: "Recortar y dividir", bullets: ["Recortar: quitar el inicio o el final", "Dividir: cortar un clip en dos en el cabezal", "Quita esperas, pausas y los \"eh\""] },
            { title: "Revisa y guarda", bullets: ["Mira desde el inicio", "¿Dura demasiado? Primero quita tomas completas", "Guarda versiones: v1, v2"] }
          ],
          tryIt: "En tu proyecto, arma un primer montaje del video de tu tarea final. Pon los clips en orden de inicio, desarrollo y final, recorta cada uno, quita con la herramienta de dividir al menos dos pausas o errores y quédate a 10 segundos o menos de tu duración meta. Guárdalo como v1 y anota cuánto dura.",
          youCanNow: "armar un primer montaje que cuenta una historia en la duración pedida y sin tiempo muerto.",
          quickCheck: [
            { objective: "O2", q: "Necesitas quitar una pausa larga en medio de un clip de entrevista. ¿Qué herramienta usas?", options: ["Cambiar la relación de aspecto", "Exportar el clip", "Agregar una transición", "Dividir el clip en los dos extremos de la pausa y borrar el medio"], answer: 3, why: "Dividir en los dos extremos de la pausa te deja sacar solo la parte del medio." },
            { objective: "O2", q: "Tu primer montaje dura 20 segundos de más. ¿Qué intentas primero?", options: ["Acelerar todo el video", "Quitar tomas débiles completas", "Acortar cada clip un segundo", "Cambiar la velocidad de fotogramas"], answer: 1, why: "Quitar tomas débiles deja completas las buenas y mantiene clara la historia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: De los clips sin editar al primer montaje",
        questions: [
          { objective: "O1", q: "La dueña de una tienda pide un video para la pantalla de su vitrina. ¿Qué forma sirve para un televisor?", options: ["9:16 vertical", "16:9 ancho", "1:1 cuadrado", "Cualquiera; los televisores se ajustan"], answer: 1, why: "Los televisores son pantallas anchas, así que 16:9 las llena sin franjas negras." },
          { objective: "O1", q: "¿Qué nombre de carpeta de proyecto es el más útil?", options: ["\"cosas\"", "\"Nueva carpeta (3)\"", "\"video final final\"", "\"2026-11 Anuncio panadería\""], answer: 3, why: "La fecha y el nombre del trabajo hacen que la carpeta sea fácil de encontrar después." },
          { objective: "O2", q: "¿Qué es un primer montaje?", options: ["La primera versión completa con los clips correctos en orden", "Un video con un rayón en el lente", "El archivo terminado y exportado", "Un clip mal grabado"], answer: 0, why: "Un primer montaje tiene la historia en su lugar; el pulido viene después." },
          { objective: "O2", q: "¿Dónde debe empezar normalmente una toma?", options: ["Apenas presionaste grabar", "Después de que termina la acción", "Justo antes de la acción", "A la mitad de la acción"], answer: 2, why: "Empezar justo antes de la acción quita el tiempo muerto y mantiene el ritmo del video." },
          { objective: "O2", q: "Antes de hacer un cambio grande en tu edición, ¿qué es un buen hábito?", options: ["Borrar la versión anterior para ahorrar espacio", "Cerrar el editor sin guardar", "Cambiar la relación de aspecto", "Guardar una copia con número de versión, como v2"], answer: 3, why: "Las copias por versión te dejan volver atrás si el cambio no funciona." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pulir y entregar",
      lessons: [
        {
          title: "Suaviza la edición con B-roll y mejores cortes",
          objectives: ["O3"],
          minutes: 5,
          goal: "Agregar B-roll, una toma de corte y un corte L o un corte J para suavizar tu primer montaje.",
          text: [
            "Cuando cortas una parte de una entrevista, la cara da un salto. Esto se llama corte de salto (jump cut). Los editores lo ocultan con B-roll: tomas que muestran aquello de lo que habla la persona. Un entrenador habla de la práctica y vemos a los jugadores haciendo ejercicios. La voz sigue mientras cambia la imagen.",
            "Una toma de corte (cutaway) es una toma corta de algo cercano, como unas manos, el público o un marcador, que se coloca entre dos tomas de lo mismo. Mezcla planos generales, medios y primeros planos para que el espectador vea el lugar, las personas y los detalles.",
            "Dos trucos de profesionales son fáciles. En un corte L, la imagen cambia a la siguiente toma mientras el sonido de la primera sigue sonando. En un corte J, oyes la siguiente toma antes de verla. Los dos hacen que la edición se sienta fluida y natural. La mayoría de los editores te dejan desvincular o separar el sonido de la imagen para hacerlo.",
            "No abuses de las transiciones. Los profesionales usan un corte simple casi siempre. Usa una o dos transiciones sencillas, como un fundido corto al inicio y al final. Muchas cortinillas y giros llamativos hacen que un video parezca hecho por un principiante."
          ],
          steps: ["Mira tu primer montaje y marca cada corte de salto.", "Coloca B-roll en la pista de arriba de la entrevista para tapar cada salto.", "Agrega al menos una toma de corte (manos, público, letrero, marcador).", "Prueba un corte L o un corte J desvinculando el sonido de la imagen.", "Usa cortes simples, con una o dos transiciones sencillas como máximo.", "Guarda como v2."],
          words: [["B-roll", "tomas de apoyo que muestran aquello de lo que alguien habla, colocadas sobre su voz."], ["Corte de salto", "un salto repentino en la imagen cuando se quita una parte de una toma (en inglés, jump cut)."], ["Toma de corte", "una toma corta de algo cercano colocada entre dos tomas del mismo tema (en inglés, cutaway)."], ["Corte L y corte J", "cortes donde el sonido y la imagen cambian en momentos distintos, para que el corte se sienta fluido."], ["Transición", "un efecto entre dos clips, como un fundido."]],
          slides: [
            { title: "Oculta los saltos", bullets: ["Cortar una entrevista hace que la cara salte", "Tápalo con B-roll que muestre el tema", "La voz sigue sonando debajo"] },
            { title: "Mezcla tus tomas", bullets: ["Plano general: el lugar", "Plano medio: las personas", "Primer plano: los detalles", "Tomas de corte: manos, público, letrero"] },
            { title: "Corte L y corte J", bullets: ["Corte L: cambia la imagen, el sonido sigue", "Corte J: oyes la siguiente toma antes de verla", "Desvincula el sonido de la imagen para hacerlo"] },
            { title: "Transiciones: menos es más", bullets: ["Cortes simples casi siempre", "Uno o dos fundidos sencillos como máximo"] }
          ],
          tryIt: "Abre tu v1. Tapa cada corte de salto con B-roll, agrega al menos una toma de corte y haz un corte L o un corte J. Quita las transiciones llamativas para no usar más de dos tipos. Guarda como v2 y mira v1 y v2 una al lado de la otra.",
          youCanNow: "usar B-roll, tomas de corte y cortes L o J para que una edición sea fluida y fácil de ver.",
          quickCheck: [
            { objective: "O3", q: "Una entrevista tiene un corte de salto donde quitaste una oración. ¿Cómo lo ocultas?", options: ["Colocas B-roll sobre el salto mientras la voz sigue sonando", "Agregas una transición que gira", "Subes el volumen del video", "Cambias la velocidad de fotogramas"], answer: 0, why: "El B-roll tapa el salto en la imagen mientras la voz sigue fluyendo." },
            { objective: "O3", q: "Oyes al público aplaudir antes de que la imagen cambie al público. ¿Cómo se llama esto?", options: ["Un corte de salto", "Un corte L", "Un primer montaje", "Un corte J"], answer: 3, why: "En un corte J, el sonido de la siguiente toma empieza antes que su imagen." }
          ]
        },
        {
          title: "Arregla el sonido, agrega música y subtítulos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Equilibrar los niveles de voz y música, agregar música que tengas permiso de usar y agregar subtítulos correctos.",
          text: [
            "Los espectadores perdonan una imagen regular, pero no un mal sonido. Usa el medidor de audio: muestra qué tan fuerte es el sonido. Si llega al tope y se pone rojo, el sonido se va a distorsionar. Una meta común es que las voces lleguen a unos -6 en el medidor, con la música mucho más baja debajo de la voz, y que nada llegue a 0.",
            "Usa solo música que tengas permiso de usar: música que hiciste tú, música con permiso por escrito, o la biblioteca gratis de tu editor o plataforma, siguiendo sus reglas. La Biblioteca de audio de YouTube ofrece música para videos de YouTube; algunas pistas piden dar crédito al artista. Dar crédito no te da permiso para usar la canción de otra persona, y no hay una cantidad de segundos que sea segura.",
            "Mucha gente ve los videos sin sonido, y los subtítulos también ayudan a las personas sordas o con dificultades para oír. La mayoría de los editores pueden hacer subtítulos automáticos. Léelos siempre y corrige cada error, sobre todo nombres, lugares y números.",
            "Agrega texto en pantalla con cuidado: un título corto, el nombre y el cargo de una persona la primera vez que habla, y una tarjeta final con el mensaje o el llamado a la acción. Usa letras grandes y sencillas, y deja el texto lejos de los bordes, donde las aplicaciones ponen sus botones."
          ],
          steps: ["Reproduce la edición y mira el medidor de audio.", "Baja cualquier clip que se ponga rojo; sube las voces que estén muy bajas.", "Agrega música que puedas usar y bájala debajo de la voz.", "Activa los subtítulos automáticos, luego lee y corrige cada palabra.", "Agrega un título, una etiqueta con nombre y una tarjeta final en letras grandes y sencillas.", "Guarda como v3."],
          words: [["Medidor de audio", "la barra que muestra qué tan fuerte es el sonido."], ["Saturación", "sonido distorsionado o crujiente que aparece cuando el nivel llega al tope del medidor (en inglés, clipping)."], ["Libre de regalías", "música que puedes usar sin pagar cada vez que suena, según las reglas de la biblioteca; igual tiene reglas."], ["Subtítulos", "las palabras habladas que aparecen como texto en la pantalla."], ["Llamado a la acción", "lo que quieres que el espectador haga después, como \"Visítanos el sábado\"."]],
          slides: [
            { title: "Mira el medidor", bullets: ["Rojo en el tope = sonido distorsionado", "Las voces llegan a unos -6", "La música mucho más baja debajo de la voz"] },
            { title: "Música que puedes usar", bullets: ["Tu propia música o un permiso por escrito", "La biblioteca de tu editor o plataforma, según sus reglas", "Dar crédito no es tener permiso"] },
            { title: "Subtítulos", bullets: ["Mucha gente ve los videos sin sonido", "Ayudan a personas sordas o con dificultades para oír", "Lee y corrige cada subtítulo automático"] },
            { title: "Texto en pantalla", bullets: ["Título corto y etiquetas con nombres", "Tarjeta final con el llamado a la acción", "Letras grandes y sencillas, lejos de los bordes"] }
          ],
          sources: [
            { name: "Oficina de Derechos de Autor de EE. UU. (U.S. Copyright Office): preguntas frecuentes sobre uso justo", url: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
            { name: "Ayuda de YouTube: usar música y efectos de sonido de la Biblioteca de audio", url: "https://support.google.com/youtube/answer/3376882" }
          ],
          tryIt: "Abre tu v2. Mira el medidor y arregla cualquier clip que se ponga rojo. Agrega música que tengas permiso de usar y bájala debajo de la voz. Activa los subtítulos automáticos y corrige cada error. Agrega un título, una etiqueta con nombre y una tarjeta final. Guarda como v3 y luego míralo una vez sin sonido para comprobar que los subtítulos cuentan la historia.",
          youCanNow: "equilibrar los niveles de sonido, agregar música de la forma correcta y agregar subtítulos y texto que la gente puede leer.",
          quickCheck: [
            { objective: "O4", q: "El medidor de audio se pone rojo en el tope cuando el entrenador grita. ¿Qué haces?", options: ["Subes el volumen de ese clip", "Lo dejas así; rojo significa bien", "Bajas el nivel de ese clip para que no llegue al rojo", "Borras los subtítulos"], answer: 2, why: "Rojo en el tope significa saturación; bajar el nivel quita la distorsión." },
            { objective: "O4", q: "Un cliente quiere una canción famosa en su anuncio. No tienes permiso. ¿Qué es cierto?", options: ["Está bien si usas solo 10 segundos", "Dar crédito al artista lo hace legal", "Los anuncios pueden usar cualquier canción de la radio", "Necesitas permiso, o usar música de una biblioteca según sus reglas"], answer: 3, why: "No hay una cantidad de segundos segura y dar crédito no es tener permiso, así que consigue permiso o usa música con licencia de una biblioteca." }
          ]
        },
        {
          title: "Exporta, revisa y arma tu portafolio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Exportar un video terminado, revisarlo contra el encargo y escribir una nota de portafolio.",
          text: [
            "Exportar convierte tu proyecto en un solo archivo de video. Para la mayoría de los usos en internet, elige un archivo MP4 con video H.264, con la misma forma, tamaño y velocidad de fotogramas que tu proyecto. Ponle al archivo un nombre claro, como \"anuncio-panaderia-v3-9x16.mp4\", y guárdalo en tu carpeta de exportaciones. En DaVinci Resolve esto se hace en la página llamada Deliver; otros editores usan un botón como Exportar o Guardar.",
            "Nunca envíes un archivo que no hayas visto. Reproduce el archivo exportado de principio a fin en el dispositivo donde se va a ver. Revisa el encargo: duración correcta, forma correcta, un mensaje claro, sonido limpio, subtítulos y nombres correctos. Después envíalo, pide comentarios y haz los cambios en una versión nueva. Los clientes piden cambios con frecuencia; es una parte normal del trabajo.",
            "Tu portafolio es una pequeña colección de tus mejores trabajos. Sube el video a internet donde tengas permiso (con permiso del cliente y de todas las personas que salen) y escribe una nota corta: el encargo, lo que hiciste, las herramientas que usaste y el resultado. Los empleadores que contratan editores junior, asistentes de redes sociales y creadores de contenido muchas veces piden muestras como esta.",
            "Las credenciales pueden ayudar más adelante. Certiport, una empresa de Pearson VUE, aplica el examen Adobe Certified Professional in Digital Video Using Adobe Premiere (certificación profesional de Adobe en video digital con Premiere). Blackmagic Design ofrece capacitación y exámenes en línea para certificarse como editor de DaVinci Resolve. Consulta la página oficial de cada una para ver los requisitos y costos actuales. Este curso te prepara para seguir aprendiendo; no otorga ninguna de esas credenciales."
          ],
          steps: ["Exporta un MP4 (H.264) con la forma, el tamaño y la velocidad de fotogramas del proyecto.", "Ponle al archivo un nombre claro y guárdalo en tu carpeta de exportaciones.", "Mira el archivo completo en el dispositivo donde se va a ver.", "Revísalo contra cada línea del encargo.", "Envíalo, pide comentarios y haz los cambios en una versión nueva.", "Escribe una nota de portafolio: encargo, tu papel, herramientas y resultado."],
          words: [["Exportar", "convertir tu edición en un solo archivo de video terminado."], ["MP4 y H.264", "un tipo de archivo y un formato de video comunes que se reproducen en la mayoría de los teléfonos, computadoras y sitios web."], ["Portafolio", "una pequeña colección de tus mejores trabajos para mostrar a empleadores o clientes."], ["Revisión", "un cambio que pide un cliente después de ver una versión."], ["Credencial", "un comprobante de una organización reconocida de que aprobaste un examen de tus habilidades."]],
          slides: [
            { title: "Exporta el archivo", bullets: ["MP4 con H.264 para la mayoría de los usos en internet", "La misma forma, tamaño y velocidad de fotogramas que el proyecto", "Nombre claro, guardado en tu carpeta de exportaciones"] },
            { title: "Revisa antes de enviar", bullets: ["Mira el archivo completo en el dispositivo real", "Revisa cada línea del encargo", "Los cambios van en una versión nueva"] },
            { title: "Tu nota de portafolio", bullets: ["El encargo", "Lo que hiciste y las herramientas que usaste", "El resultado; compártelo solo con permiso"] },
            { title: "Credenciales para explorar más adelante", bullets: ["Adobe Certified Professional en Premiere (Certiport)", "Certificación de DaVinci Resolve (Blackmagic Design)", "Consulta las páginas oficiales; este curso solo prepara"] }
          ],
          sources: [
            { name: "Certiport: exámenes Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Certify" },
            { name: "Blackmagic Design: capacitación y certificación de DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): editores de cine y video y operadores de cámara", url: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm" }
          ],
          tryIt: "Tarea final: exporta tu v3 como MP4 en la forma correcta, ponle un nombre claro y míralo en el dispositivo donde se va a ver. Revísalo contra tu encargo y arregla lo que no coincida. Después escribe tu nota de portafolio en cuatro líneas: el encargo, lo que hiciste, las herramientas que usaste y el resultado.",
          youCanNow: "exportar un video terminado, revisarlo contra un encargo y presentarlo como pieza de portafolio.",
          quickCheck: [
            { objective: "O5", q: "¿Qué nombre de archivo es el mejor para el video terminado?", options: ["\"final.mp4\"", "\"anuncio-panaderia-v3-9x16.mp4\"", "\"sin titulo (2).mp4\"", "\"video.mp4\""], answer: 1, why: "Dice el trabajo, la versión y la forma, así nadie envía el archivo equivocado." },
            { objective: "O5", q: "Acabas de exportar el video. ¿Qué haces antes de enviarlo?", options: ["Lo envías de inmediato para ahorrar tiempo", "Borras el proyecto para ahorrar espacio", "Miras el archivo completo en el dispositivo donde se va a ver y lo revisas contra el encargo", "Cambias la velocidad de fotogramas"], answer: 2, why: "Ver el archivo real detecta errores antes de que los vea el cliente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Pulir y entregar",
        questions: [
          { objective: "O3", q: "¿Qué es el B-roll?", options: ["El primer clip de la línea de tiempo", "Un tipo de cámara", "Tomas de apoyo que muestran aquello de lo que alguien habla", "Un archivo de música"], answer: 2, why: "El B-roll se coloca sobre una voz para mostrar el tema y ocultar los saltos." },
          { objective: "O3", q: "¿Cuántos tipos de transición suele usar el video de trabajo de un principiante?", options: ["Uno o dos sencillos, con cortes simples casi siempre", "Uno distinto entre cada clip", "Al menos diez", "Solo efectos de giro y cortinilla"], answer: 0, why: "Los profesionales usan sobre todo cortes simples; muchas transiciones llamativas se ven poco profesionales." },
          { objective: "O4", q: "¿Por qué debes leer los subtítulos automáticos antes de exportar?", options: ["Los subtítulos hacen más lento el video", "Los subtítulos cambian la relación de aspecto", "Los subtítulos automáticos siempre son perfectos", "Muchas veces se equivocan en nombres, lugares y números"], answer: 3, why: "Los subtítulos automáticos cometen errores, así que revisas y corriges cada palabra." },
          { objective: "O4", q: "¿Dónde debe estar la música cuando alguien habla?", options: ["Más fuerte que la voz", "Mucho más baja que la voz", "En el tope del medidor", "Silenciada y borrada"], answer: 1, why: "La música baja debajo de la voz mantiene clara cada palabra." },
          { objective: "O5", q: "Un cliente pide dos cambios después de ver la v3. ¿Cuál es la respuesta profesional?", options: ["Hacer los cambios en una versión nueva, v4", "Negarte; el video ya está terminado", "Borrar la v3 y empezar de nuevo", "Enviar otra vez el mismo archivo"], answer: 0, why: "Las revisiones son una parte normal del trabajo, y una versión nueva mantiene segura la anterior." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de edición de video",
    questions: [
      { objective: "O1", q: "Un encargo dice: \"TikTok de 30 segundos para nuestro food truck, para el viernes\". ¿Qué forma tiene el proyecto?", options: ["16:9 ancho", "1:1 cuadrado", "9:16 vertical", "4:3"], answer: 2, why: "TikTok se ve en vertical en el teléfono, así que 9:16 llena la pantalla." },
      { objective: "O1", q: "¿Cuál es la razón principal para crear una carpeta de proyecto con nombre y con carpetas internas?", options: ["Para que cada clip y archivo sea fácil de encontrar", "Hace que el video se reproduzca más rápido", "Los editores no abren archivos sin ella", "Agrega subtítulos automáticamente"], answer: 0, why: "Las carpetas ordenadas ahorran tiempo y evitan archivos perdidos o equivocados." },
      { objective: "O1", q: "¿Qué describe \"1920 x 1080\"?", options: ["La velocidad de fotogramas", "Solo la relación de aspecto", "La duración en segundos", "La resolución, en píxeles"], answer: 3, why: "1920 x 1080 es el ancho y el alto en píxeles, que muchas veces se llama 1080p." },
      { objective: "O1", q: "Quieres grabar a un jugador de 15 años para un video de las mejores jugadas del equipo. ¿Quién tiene que estar de acuerdo?", options: ["Solo el entrenador", "El jugador y su padre, madre o tutor", "Nadie, si es un partido público", "Solo el otro equipo"], answer: 1, why: "Cualquier menor de 18 años necesita que su padre, madre o tutor esté de acuerdo, además del jugador." },
      { objective: "O2", q: "¿Qué hace la herramienta de recortar?", options: ["Cambia los colores", "Quita el inicio o el final de un clip", "Agrega música", "Exporta el archivo"], answer: 1, why: "Recortar acorta un clip desde su inicio o su final." },
      { objective: "O2", q: "¿Qué es el cabezal de reproducción?", options: ["El primer clip del proyecto", "El logo del editor", "El medidor de audio", "La línea en la línea de tiempo que muestra dónde estás"], answer: 3, why: "El cabezal marca el momento que estás viendo; las divisiones se hacen ahí." },
      { objective: "O2", q: "¿Qué orden sirve para un anuncio de 45 segundos de una barbería?", options: ["Un corte de pelo terminándose, el barbero diciendo qué hace especial al local y luego la dirección y el horario", "El horario, luego una toma larga de una silla vacía y luego el logo", "Diez minutos del corte de pelo completo", "El barbero mirando a la cámara esperando para empezar"], answer: 0, why: "Llama la atención, da el mensaje y termina con qué hacer." },
      { objective: "O2", q: "¿Cuál es tiempo muerto que debes quitar?", options: ["El momento en que un jugador anota", "La dueña explicando su mejor producto", "Una pausa larga donde quien habla dice \"eh\" y mira para otro lado", "El letrero del local al final"], answer: 2, why: "Las pausas y las esperas alargan el video sin agregar nada." },
      { objective: "O3", q: "¿Qué pasa en un corte L?", options: ["El video se pone negro", "La imagen y el sonido se detienen", "El sonido empieza antes que la imagen", "La imagen cambia mientras el sonido de la primera toma sigue sonando"], answer: 3, why: "En un corte L, el sonido anterior continúa debajo de la imagen nueva." },
      { objective: "O3", q: "¿Qué toma sirve como toma de corte en una entrevista con una panadera?", options: ["La misma toma de la entrevista otra vez", "Una pantalla negra", "Un primer plano de sus manos amasando", "Una toma de otro video sobre carros"], answer: 2, why: "Una toma de corte muestra algo cercano y relacionado, y así oculta un corte." },
      { objective: "O3", q: "¿Por qué mezclar planos generales, medios y primeros planos?", options: ["Para mostrar el lugar, las personas y los detalles", "Para que el archivo sea más pequeño", "Para cambiar la velocidad de fotogramas", "Los editores exigen tres tamaños de plano"], answer: 0, why: "Los distintos tamaños de plano le dan al espectador la imagen completa y mantienen el interés." },
      { objective: "O3", q: "Tu edición tiene una transición llamativa distinta entre cada clip. ¿Qué deberías cambiar?", options: ["Agregar más transiciones", "Usar cortes simples y dejar una o dos transiciones sencillas", "Hacer las transiciones más largas", "Acelerar todo el video"], answer: 1, why: "Los cortes simples con pocas transiciones sencillas se ven profesionales." },
      { objective: "O4", q: "¿Qué significa que el medidor de audio llegue al tope y se ponga rojo?", options: ["El sonido es perfecto", "Los subtítulos están activados", "El sonido está demasiado fuerte y puede distorsionarse", "La música tiene permiso"], answer: 2, why: "Rojo en el tope es saturación, lo que hace que el sonido se distorsione." },
      { objective: "O4", q: "¿Qué música puedes usar en el video de un cliente?", options: ["Cualquier canción si das crédito", "Una canción de la radio si dura menos de 15 segundos", "Una canción que un amigo subió a internet", "Música de la biblioteca de tu editor, siguiendo sus reglas"], answer: 3, why: "La música de una biblioteca según sus reglas, tu propia música o un permiso por escrito son las opciones seguras." },
      { objective: "O4", q: "¿Por qué agregar subtítulos a un video de trabajo?", options: ["Mucha gente ve los videos sin sonido, y los subtítulos ayudan a las personas sordas o con dificultades para oír", "Los subtítulos hacen el archivo más pequeño", "Los subtítulos son solo para películas", "Las plataformas borran los videos sin subtítulos"], answer: 0, why: "Los subtítulos llegan a más espectadores y dejan claro el mensaje sin sonido." },
      { objective: "O4", q: "¿Dónde debe ir el texto en pantalla en un video vertical para teléfono?", options: ["Justo en los bordes", "Lejos de los bordes, en letras grandes y sencillas", "Solo en el último fotograma, muy pequeño", "Debajo de los botones de la aplicación"], answer: 1, why: "Las aplicaciones ponen botones cerca de los bordes, así que el texto ahí puede quedar tapado." },
      { objective: "O5", q: "Para la mayoría de los usos en internet, ¿qué opción de exportación es segura?", options: ["Cualquier tipo de archivo de cualquier tamaño", "Una imagen fija", "Un MP4 con H.264, con la misma forma, tamaño y velocidad de fotogramas del proyecto", "Solo el archivo del proyecto"], answer: 2, why: "Un MP4 con H.264 se reproduce en la mayoría de los teléfonos, computadoras y sitios web." },
      { objective: "O5", q: "¿Qué va en una nota corta de portafolio?", options: ["El encargo, lo que hiciste, las herramientas que usaste y el resultado", "Tu dirección y tu número de teléfono", "La contraseña de tu editor", "Solo el tamaño del archivo del video"], answer: 0, why: "Esas cuatro líneas le muestran a un empleador lo que sabes hacer." },
      { objective: "O5", q: "¿Quién aplica el examen Adobe Certified Professional in Digital Video Using Adobe Premiere?", options: ["El Departamento de Trabajo de EE. UU.", "YouTube", "Cualquier aplicación de edición de video", "Certiport, una empresa de Pearson VUE"], answer: 3, why: "Certiport aplica los exámenes Adobe Certified Professional; consulta su página para ver los datos actuales." },
      { objective: "O5", q: "¿Qué te da este curso?", options: ["Un certificado de Adobe", "Una certificación de DaVinci Resolve", "Una licencia estatal para editar video", "Preparación y una pieza de portafolio, no una credencial"], answer: 3, why: "El curso te prepara; las credenciales las dan Adobe a través de Certiport o Blackmagic Design." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 7, 8, 11, 12, 13, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte, exporta una versión nueva y vuelve a intentarlo.",
    criteria: [
      { name: "Organización y configuración", objective: "O1", notYet: "Los clips están desordenados o la forma no coincide con la plataforma (franjas negras o lados cortados).", meets: "Una carpeta de proyecto con nombre y carpetas internas, una copia de seguridad, y la forma y la velocidad de fotogramas del proyecto coinciden con el encargo.", exceeds: "Los mejores clips tienen nombre nuevo y el participante puede explicar por qué eligió esa forma y esa velocidad de fotogramas." },
      { name: "Historia y duración", objective: "O2", notYet: "Los clips están fuera de orden, tienen tiempo muerto o el video está muy lejos de la duración meta.", meets: "Inicio, desarrollo y final claros; sin tiempo muerto; a 5 segundos o menos de la duración meta.", exceeds: "Los primeros segundos llaman la atención y cada toma se gana su lugar." },
      { name: "Edición fluida", objective: "O3", notYet: "Se ven cortes de salto o se usan muchas transiciones llamativas.", meets: "El B-roll o las tomas de corte ocultan los saltos; no más de dos tipos de transición.", exceeds: "Incluye un corte L o J limpio y una buena mezcla de planos generales, medios y primeros planos." },
      { name: "Sonido y subtítulos", objective: "O4", notYet: "El sonido se distorsiona o se oye mal, los subtítulos tienen errores o la música no tiene permiso.", meets: "Voces claras, música debajo de la voz, subtítulos correctos y solo música que el participante puede usar.", exceeds: "Las etiquetas con nombres y la tarjeta final se leen bien en un teléfono, y se da crédito a la música cuando la biblioteca lo pide." },
      { name: "Entrega y presentación", objective: "O5", notYet: "El archivo tiene un nombre equivocado, no se reproduce o falta la nota de portafolio.", meets: "Un MP4 con nombre claro que se reproduce en el dispositivo de destino, revisado contra el encargo, con una nota de portafolio de cuatro líneas.", exceeds: "El participante recibió comentarios y entregó una versión revisada, y la nota dice qué cambió." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que agregan el video terminado a un portafolio o a una solicitud de empleo en 30 días (encuesta de seguimiento)",
      "Participantes que completan un trabajo de edición pagado o voluntario para un negocio, equipo, escuela u organización sin fines de lucro en 90 días",
      "Participantes que siguen con otro curso de edición o con una credencial como Adobe Certified Professional o la certificación de DaVinci Resolve"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono que grabe video, y de 8 a 15 clips cortos grabados por el propio participante",
      "Un editor gratis: DaVinci Resolve o Microsoft Clipchamp en una computadora, o CapCut o el editor que trae el teléfono",
      "Una memoria USB o almacenamiento en la nube para la copia de seguridad",
      "Audífonos para revisar el sonido",
      "Unas 2 horas en total: lecciones, comprobaciones y tiempo de edición para la tarea final"
    ],
    facilitatorNotes: [
      "En un laboratorio, antes del curso, confirma que el editor elegido se instala y funciona en las computadoras del programa; DaVinci Resolve necesita una computadora más potente que un editor web como Clipchamp.",
      "A los participantes que no tengan material, dales un encargo de práctica corto y déjalos grabar alrededor del edificio, con permiso de todas las personas que salgan en cámara.",
      "Revisa las reglas de edad de cada editor para participantes jóvenes, y consigue el permiso del padre, madre o tutor de cualquier menor de 18 años que salga en un video.",
      "Los menús cambian seguido: muestra en vivo las acciones (importar, recortar, dividir, desvincular el audio, subtítulos, exportar) en el editor que usa el grupo.",
      "Organiza una proyección corta donde los participantes muestren sus videos y den comentarios usando las filas de la rúbrica, una fila a la vez."
    ]
  }
};
