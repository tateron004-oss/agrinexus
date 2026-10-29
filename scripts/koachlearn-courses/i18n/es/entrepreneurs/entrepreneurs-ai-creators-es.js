"use strict";

// Koach Learn course (Spanish translation of entrepreneurs/entrepreneurs-ai-creators.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-creators-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-creators",
  category: "Entrepreneurs",
  name: "IA para creadores de contenido e influencers",
  skills: "Definir tu nicho y tus pilares de contenido, Escribir guiones con IA, Editar y reutilizar contenido, Etiquetar contenido de IA en las plataformas, Avisar de los acuerdos con marcas, Proteger tus derechos y los de los demás",
  outcome: "planear, escribir y producir una semana de contenido con ayuda de la IA, convertir un video en varias publicaciones, etiquetar bien el contenido realista hecho con IA, avisar de los acuerdos con marcas como lo espera la FTC y respetar los derechos de autor y la voz y la cara de otras personas.",
  about: [
    "Los creadores de contenido y los influencers manejan pequeños negocios de medios: hacen contenido, hacen crecer un público y ganan con acuerdos con marcas, enlaces de afiliado, productos y programas de las plataformas. La IA puede ayudar con ideas, guiones, edición, subtítulos y reutilización de contenido, para que una sola persona haga el trabajo de un equipo pequeño.",
    "Este curso es para creadores de cualquier tamaño que quieren trabajar más rápido sin perder su voz ni la confianza de su público. En el Capítulo 1 vas a definir tu nicho y tus pilares de contenido, escribir guiones con IA, y editar y reutilizar. En el Capítulo 2 vas a aprender cuándo etiquetar el contenido de IA en las plataformas, cómo avisar de los acuerdos con marcas según la guía de la FTC (la Comisión Federal de Comercio de Estados Unidos) y cómo proteger tus derechos y respetar los de los demás.",
    "Cada lección dura unos cinco minutos e incluye una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las reglas de las plataformas cambian seguido; revisa las páginas de ayuda de cada una. Esto no es asesoría legal; habla con un abogado sobre contratos y derechos."
  ],
  finalTask: "Produce un kit de contenido de creador: tu frase de nicho y tres pilares de contenido, un plan de contenido de 7 días, un guion completo de video con un gancho fuerte (escrito con IA, con tu voz), un video o publicación larga convertido en al menos tres piezas cortas con subtítulos, una lista para etiquetar contenido de IA en tus plataformas y una publicación patrocinada de ejemplo con un aviso correcto y claro.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Creadores de contenido e influencers, nuevos o en crecimiento, que manejan un pequeño negocio de medios en plataformas como YouTube, TikTok o Instagram y ganan dinero con acuerdos con marcas, enlaces de afiliados, productos o programas de las plataformas.",
    startingPoint: "Saben grabar con el teléfono, publicar contenido y usar redes sociales. Algunos han probado herramientas de IA para subtítulos o ideas, pero sin un plan, sin una voz definida y sin tener claras las reglas de etiquetado, avisos y derechos de autor.",
    gap: "Los creadores que publican sin plan se agotan, y quienes usan la IA sin cuidado pueden perder su voz, publicar datos falsos, romper las reglas de etiquetado de las plataformas o no cumplir las reglas de avisos de la FTC. Necesitan una forma de trabajar con ayuda de la IA, que puedan repetir, y que mantenga su contenido honesto, legal y propio.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: un teléfono o una computadora con internet y un asistente de IA gratuito",
      "Tiempo: lecciones de unos 5 minutos que caben entre las publicaciones",
      "Reglas: se aplican las reglas de etiquetado de IA de cada plataforma, las reglas de recomendaciones de la FTC y los derechos de autor, y pueden cambiar",
      "Privacidad y derechos: nunca clones la voz ni la cara de otra persona, y no pongas datos privados en herramientas de IA"
    ],
    prerequisites: "Ninguno. Quienes no conocen las herramientas de IA pueden tomar primero \"Introducción a la IA y a la confianza digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando un asistente de IA para buscar ideas", action: "escribir una frase de nicho, tres pilares de contenido y un plan de contenido de 7 días", standard: "de modo que cada publicación del plan encaje en uno de los pilares" },
    { id: "O2", condition: "Con ejemplos de tus propios textos o de tu forma de hablar", action: "escribir con ayuda de la IA un guion de video corto con un gancho fuerte", standard: "de modo que suene a ti al leerlo en voz alta y con cada dato revisado" },
    { id: "O3", condition: "Con un video o una publicación larga", action: "reutilizarlo en al menos tres piezas cortas con subtítulos", standard: "con cada error de subtítulos corregido y cada pieza con sentido por sí sola" },
    { id: "O4", condition: "Con una lista de publicaciones y las reglas de tu plataforma", action: "decidir qué publicaciones necesitan una etiqueta de IA y escribir una lista de control para etiquetar", standard: "etiquetando cada publicación realista hecha con IA, y etiquetando cuando tengas dudas" },
    { id: "O5", condition: "Con un acuerdo con una marca o un producto gratis", action: "escribir una publicación patrocinada con un aviso claro al principio", standard: "con el aviso mostrado y dicho desde el principio y cada afirmación honesta" },
    { id: "O6", condition: "Usando herramientas de IA y contratos con marcas", action: "hacer una lista de reglas para usar el trabajo de otros y proteger tu propio contenido y tu imagen", standard: "con al menos tres reglas, incluida la de no copiar voces ni caras sin permiso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Crea más rápido con IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tu nicho y tus pilares de contenido",
          minutes: 5,
          goal: "Escribir una frase de nicho y tres pilares de contenido para tu canal.",
          text: [
            "El público sigue a los creadores que tienen claro de qué tratan. Una frase de nicho dice para quién haces contenido y qué recibe: \"Cocina casera económica para universitarios\", \"Pesas para principiantes, mujeres de más de 40\", \"Consejos de negocio para barberos\".",
            "Los pilares de contenido son los tres o cuatro temas a los que vuelves una y otra vez. Para la cocina económica: recetas baratas, trucos para el súper, lo básico de la cocina y un día en mi vida. Los pilares facilitan planear y ayudan al público a saber qué esperar.",
            "Pregúntale a la IA: \"Mi nicho es [nicho]. Sugiere cinco pilares de contenido y diez ideas de video para cada uno.\" Quédate con las ideas que encajen con tu experiencia real y tu personalidad; tu voz es lo que la IA no puede copiar."
          ],
          steps: ["Escribe para quién haces contenido y qué recibe.", "Pídele a la IA cinco posibles pilares e ideas para cada uno.", "Elige tres pilares que encajen con tu experiencia real.", "Haz un plan de 7 días con las ideas."],
          words: [["Nicho", "el tema y el público específicos a los que sirve tu contenido."], ["Pilar de contenido", "un tema principal del que publicas una y otra vez."]],
          slides: [
            { title: "Ten claro de qué tratas", bullets: ["Para quién es", "Qué recibe", "\"Cocina económica para universitarios\""] },
            { title: "Pilares de contenido", bullets: ["Tres o cuatro temas que se repiten", "Planear es fácil", "El público sabe qué esperar"] },
            { title: "La IA para ideas", bullets: ["Pilares y diez ideas para cada uno", "Quédate con lo que encaja con tu experiencia", "Tu voz es tuya"] }
          ],
          tryIt: "Escribe tu frase de nicho, elige tres pilares con ayuda de la IA y arma un plan de contenido de 7 días.",
          youCanNow: "definir tu nicho y planear contenido alrededor de pilares claros.",
          quickCheck: [
            { objective: "O1", q: "¿Qué le dice a la gente una frase de nicho?", options: ["Cuántos seguidores tienes", "Qué aplicaciones usas", "Para quién haces contenido y qué recibe", "Con qué frecuencia publicas"], answer: 2, why: "Una frase de nicho nombra a tu público y lo que recibe de ti." },
            { objective: "O1", q: "La IA te sugiere una idea que no encaja en ninguno de tus tres pilares. ¿Qué harías?", options: ["Publicarla de todos modos porque la sugirió la IA", "Descartarla o adaptarla para que encaje en un pilar", "Agregar un pilar nuevo por cada idea", "Borrar tus pilares y empezar de nuevo"], answer: 1, why: "Los pilares mantienen tu plan enfocado, así que las ideas deben encajar en uno de ellos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir guiones con IA y con tu propia voz",
          minutes: 5,
          goal: "Escribir con ayuda de la IA un guion de video corto con un gancho fuerte y que suene a ti.",
          text: [
            "Los videos cortos viven o mueren en los primeros segundos. El gancho es la frase inicial que hace que la gente se quede: un dato sorprendente, una promesa atrevida que puedas cumplir o una pregunta que tu público ya se está haciendo.",
            "Ayuda a la IA a sonar como tú: pega dos de tus propios textos de publicaciones o la transcripción de cuando hablas y dile \"Imita esta voz.\" Luego pídele: \"Escribe un guion de 45 segundos sobre [idea]. Dame cinco opciones de gancho y después el guion con una idea clara y una llamada a la acción.\" Elige un gancho y edita el guion leyéndolo en voz alta.",
            "Revisa los datos, sobre todo en temas de salud, dinero, ejercicio o leyes. La IA puede inventar estudios y cifras. Si no puedes confirmar un dato, quítalo o di dónde pueden revisarlo los espectadores."
          ],
          steps: ["Dale a la IA muestras de tu voz real.", "Pídele cinco ganchos y un guion corto.", "Elige un gancho y lee el guion en voz alta.", "Edítalo hasta que suene a ti.", "Revisa cada dato; quita lo que no puedas confirmar."],
          words: [["Gancho", "la frase inicial que hace que la gente siga viendo."], ["Llamada a la acción", "lo que pides a los espectadores que hagan después, como seguirte o comentar."], ["Transcripción", "las palabras escritas de algo que se dijo en voz alta."]],
          slides: [
            { title: "Los primeros segundos importan", bullets: ["Un dato sorprendente", "Una promesa que puedas cumplir", "Una pregunta que ya se hacen"] },
            { title: "Haz que la IA suene como tú", bullets: ["Pega tus textos o una transcripción", "\"Imita esta voz\"", "Cinco ganchos y luego el guion"] },
            { title: "Revisa los datos", bullets: ["La IA puede inventar estudios y cifras", "Salud, dinero, ejercicio, leyes: confirma", "¿No lo puedes confirmar? Quítalo"] }
          ],
          tryIt: "Escribe con ayuda de la IA un guion de 45 segundos usando muestras de tu propia voz. Elige un gancho, léelo en voz alta, edítalo y revisa cada dato.",
          youCanNow: "escribir guiones con IA que atrapan la atención y suenan a ti.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué sirve el gancho de un guion?", options: ["Para que la gente siga viendo desde la primera línea", "Para nombrar a tus patrocinadores", "Para terminar el video", "Para mostrar el nombre de tu canal"], answer: 0, why: "El gancho es la primera línea, la que hace que la gente se quede." },
            { objective: "O2", q: "El guion de la IA suena rígido y nada parecido a ti. ¿Qué harías?", options: ["Publicarlo tal como está", "Pedirle a la IA que lo haga más largo", "Darle a la IA ejemplos de tus propias palabras, y luego leerlo en voz alta y editarlo", "Cambiar de tema"], answer: 2, why: "Tus propios ejemplos y una edición leyendo en voz alta hacen que el guion suene a ti." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Editar y reutilizar contenido con IA",
          minutes: 5,
          goal: "Convertir un video o publicación larga en varias piezas cortas con subtítulos.",
          text: [
            "Reutilizar significa convertir una pieza de contenido en muchas. Un video de 10 minutos puede convertirse en tres clips cortos, una publicación tipo carrusel, un párrafo para un boletín y algunas frases. Las herramientas de IA pueden encontrar los mejores momentos, cortar clips, agregar subtítulos y ajustar el tamaño para cada plataforma.",
            "Muchas aplicaciones de edición (por ejemplo CapCut, Canva, Descript o el editor de tu plataforma) ya traen funciones de IA como subtítulos automáticos, quitar el fondo y sugerencias de clips. Las funciones y los planes cambian; revisa las páginas de ayuda de cada aplicación.",
            "Revisa siempre los subtítulos de la IA para corregir errores, sobre todo en nombres, números y modismos, y comprueba que cada clip tenga sentido por sí solo y no tergiverse lo que dijiste tú o un invitado."
          ],
          steps: ["Elige un video o una publicación larga.", "Usa la IA para encontrar de tres a cinco mejores momentos.", "Corta los clips y agrega subtítulos automáticos.", "Corrige los errores de los subtítulos y ajusta el tamaño para cada plataforma.", "Escribe un texto para cada uno con ayuda de la IA."],
          words: [["Reutilizar", "convertir una pieza de contenido en varias otras."], ["Subtítulos automáticos", "subtítulos hechos automáticamente a partir del audio."], ["Carrusel", "una publicación con varias imágenes que la gente desliza."]],
          slides: [
            { title: "Una pieza, muchas publicaciones", bullets: ["Clips cortos", "Carrusel y frases", "Párrafo para un boletín"] },
            { title: "Funciones de edición con IA", bullets: ["Encontrar momentos y cortar clips", "Subtítulos automáticos y cambio de tamaño", "Revisa las páginas de ayuda de cada aplicación"] },
            { title: "Revisa todo", bullets: ["Corrige nombres, números, modismos", "Los clips deben tener sentido solos", "Nunca tergiverses lo que alguien dijo"] }
          ],
          tryIt: "Convierte un video o una publicación larga en al menos tres piezas cortas con subtítulos. Corrige cada error de los subtítulos.",
          youCanNow: "reutilizar contenido con herramientas de IA sin perder la exactitud.",
          quickCheck: [
            { objective: "O3", q: "¿Qué significa reutilizar contenido?", options: ["Borrar publicaciones viejas", "Copiar el video de otro creador", "Publicar el mismo clip muchas veces en un día", "Convertir una pieza de contenido en varias piezas"], answer: 3, why: "Reutilizar es sacar varias piezas, como clips cortos, de una pieza larga." },
            { objective: "O3", q: "Cortaste un clip corto, pero solo hace parecer que el invitado dice lo contrario de lo que quiso decir. ¿Qué harías?", options: ["Publicarlo porque tendrá vistas", "Elegir otro corte que mantenga lo que de verdad quiso decir", "Agregar un subtítulo que diga que fue editado", "Publicarlo solo en una plataforma"], answer: 1, why: "Un clip corto debe tener sentido por sí solo y no torcer lo que se dijo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Crea más rápido con IA",
        questions: [
          { objective: "O1", q: "¿Cuál es una frase de nicho clara?", options: ["Contenido", "Cocina casera económica para universitarios", "Videos sobre cosas", "Todo para todos"], answer: 1, why: "Dice para quién es y qué recibe." },
          { objective: "O1", q: "¿Qué son los pilares de contenido?", options: ["Tu equipo de cámara", "Las columnas de tu cuarto de grabación", "Tu número de seguidores", "Tres o cuatro temas de los que publicas una y otra vez"], answer: 3, why: "Los pilares guían la planeación." },
          { objective: "O2", q: "¿Cómo puedes ayudar a la IA a escribir con tu voz?", options: ["Pegando muestras de tus propios textos o de cómo hablas", "Pidiéndole que copie a otro creador", "Dándole tu contraseña", "Usando más emojis"], answer: 0, why: "Las muestras le enseñan tu estilo a la IA." },
          { objective: "O2", q: "El guion de ejercicio de la IA cita un estudio que no encuentras. ¿Qué haces?", options: ["Inventar un enlace", "Dejarlo", "Quitarlo o decir a los espectadores dónde pueden revisarlo", "Decirlo más fuerte"], answer: 2, why: "La IA puede inventar estudios; no compartas datos sin confirmar." },
          { objective: "O3", q: "Los subtítulos automáticos escribieron mal el nombre de un invitado. ¿Qué haces?", options: ["Quitar al invitado", "Publicarlo de todos modos", "Corregirlo antes de publicar", "Quitar el sonido"], answer: 2, why: "Revisa los subtítulos de la IA para corregir errores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cuida la confianza de tu público",
      lessons: [
        {
          objectives: ["O4"],
          title: "Etiquetar contenido de IA en las plataformas",
          minutes: 5,
          goal: "Decidir cuándo una plataforma exige etiquetar contenido realista hecho con IA, y etiquetarlo.",
          text: [
            "Las plataformas están agregando reglas para el contenido de IA. YouTube, por ejemplo, exige que los creadores avisen cuando el contenido parece realista y fue hecho o alterado de forma importante con IA: hacer que una persona real parezca decir o hacer algo que no hizo, alterar imágenes de un evento o lugar real, o generar una escena realista que no ocurrió. El aviso se hace con la opción de uso de IA al subir el video.",
            "YouTube no exige avisar en el contenido claramente irreal, en ediciones menores como corregir el color, filtros de belleza o fondo desenfocado, ni al usar la IA para ideas, guiones, títulos o miniaturas. Los creadores que una y otra vez no avisan pueden recibir etiquetas, que les quiten contenido o perder el acceso al programa de socios.",
            "Otras plataformas, como TikTok y las aplicaciones de Meta, tienen sus propias reglas de etiquetado; revisa las páginas de ayuda de cada una. Si tienes dudas, etiquétalo: la honestidad mantiene la confianza de tu público."
          ],
          steps: ["Pregúntate: ¿se ve realista y la IA lo hizo o lo cambió de forma importante?", "Si es así, usa la etiqueta de IA o la opción de aviso de la plataforma.", "Revisa la página de ayuda de cada plataforma para conocer sus reglas.", "Si tienes dudas, etiquétalo."],
          words: [["Contenido sintético", "imágenes, video o audio hechos o cambiados con IA."], ["Opción de aviso", "una opción al publicar que etiqueta el contenido como hecho o alterado con IA."]],
          slides: [
            { title: "YouTube: avisa cuando sea realista", bullets: ["Una persona real diciendo lo que no dijo", "Eventos o lugares reales alterados", "Escenas realistas que no ocurrieron"] },
            { title: "YouTube: no hace falta", bullets: ["Contenido claramente irreal", "Corrección de color, filtros, fondo desenfocado", "IA para ideas, guiones, títulos, miniaturas"] },
            { title: "Cada plataforma es distinta", bullets: ["Revisa las páginas de ayuda de TikTok y Meta", "Si tienes dudas, etiquétalo"] }
          ],
          sources: [{ name: "Ayuda de YouTube: Cómo divulgar el uso de contenido alterado o sintético", url: "https://support.google.com/youtube/answer/14328491" }],
          tryIt: "Mira tus últimas cinco publicaciones o tu plan de la próxima semana. Para cada una, decide si necesita una etiqueta de IA en tu plataforma y por qué. Escribe una lista corta para etiquetar.",
          youCanNow: "etiquetar bien el contenido realista hecho con IA en tus plataformas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué tipo de publicación es más probable que necesite una etiqueta de IA?", options: ["Un video realista hecho con IA de un lugar real que parece verdadero", "Un guion que la IA te ayudó a escribir", "Un video con subtítulos automáticos", "Una foto con un filtro de color sencillo"], answer: 0, why: "Las plataformas piden etiquetar el contenido realista hecho con IA que la gente podría confundir con algo real." },
            { objective: "O4", q: "No estás seguro de si una publicación necesita una etiqueta de IA. ¿Qué harías?", options: ["Dejarla sin etiqueta", "Borrar la publicación", "Etiquetarla", "Preguntar a tus seguidores en los comentarios"], answer: 2, why: "Cuando tienes dudas, etiquetar es la opción segura." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Avisar de los acuerdos con marcas como pide la FTC",
          minutes: 5,
          goal: "Escribir una publicación patrocinada con un aviso claro y correcto.",
          text: [
            "Si una marca te paga, te da productos gratis, una comisión o un viaje, y tu público no esperaría esa relación, debes avisarlo, aunque te quedes con un producto gratis e incluso con regalos pequeños. Avisa en cada publicación patrocinada; no puedes suponer que los espectadores vieron las anteriores.",
            "La guía de la FTC sobre recomendaciones dice que los avisos deben ser fáciles de notar y de entender. \"#publicidad\" o \"Publicidad:\" al principio, o \"Patrocinado por XYZ\", funcionan bien. Las etiquetas vagas como \"#partner\", \"#embajador\" o \"#sp\", o los avisos escondidos en los comentarios, al final de textos largos o detrás de \"ver más\", muchas veces no sirven. En los videos, avisa dentro del video, idealmente diciéndolo y mostrándolo, y al principio; repítelo durante las transmisiones en vivo.",
            "Di solo lo que honestamente crees por haberlo usado de verdad, y nunca publiques reseñas falsas. Las herramientas de aviso de las plataformas ayudan, pero pueden no ser suficientes por sí solas; agrega tu propio aviso. La IA puede redactar textos patrocinados, pero tú eres responsable del aviso y de cada afirmación."
          ],
          steps: ["Revisa si tienes una relación importante: pago, producto gratis, comisión, viaje.", "Pon \"#publicidad\" o \"Patrocinado\" al principio del texto.", "En los videos, dilo y muéstralo al principio; repítelo en los en vivo.", "Haz solo afirmaciones basadas en tu experiencia honesta.", "Usa las herramientas de la plataforma Y tu propio aviso."],
          words: [["Relación importante", "una relación, como un pago o productos gratis, que los espectadores podrían no esperar."], ["Recomendación", "un mensaje que los espectadores creen que muestra tu opinión honesta sobre un producto."]],
          slides: [
            { title: "Cuándo avisar", bullets: ["Pagos, productos gratis, comisiones, viajes", "Incluso regalos pequeños", "En cada publicación patrocinada"] },
            { title: "Cómo avisar", bullets: ["\"#publicidad\" o \"Publicidad:\" al principio", "\"Patrocinado por XYZ\"", "No escondido en comentarios ni tras \"ver más\""] },
            { title: "En videos y en vivo", bullets: ["Dilo y muéstralo", "Al principio del video", "Repítelo durante las transmisiones en vivo"] },
            { title: "Afirmaciones honestas", bullets: ["Solo tu experiencia real", "Agrega también tu propio aviso"] }
          ],
          sources: [{ name: "FTC: Guías sobre recomendaciones, lo que la gente pregunta (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Escribe con ayuda de la IA una publicación patrocinada de ejemplo para un producto que de verdad usas. Pon un aviso claro al principio, escribe el aviso hablado para el video y revisa que cada afirmación sea honesta.",
          youCanNow: "avisar de los acuerdos con marcas de forma clara y honesta, como lo espera la FTC.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde debe ir el aviso de un acuerdo con una marca en el texto de una publicación?", options: ["Al final de todo, después de los hashtags", "Solo en la biografía de tu perfil", "En un comentario debajo de la publicación", "Al principio, donde la gente lo ve primero"], answer: 3, why: "Un aviso claro va donde la gente lo ve enseguida." },
            { objective: "O5", q: "Te pagan por mencionar un producto en un video. ¿Qué harías?", options: ["Mencionar el acuerdo solo en la descripción", "Decir y mostrar el aviso al principio del video", "No avisar porque la marca es muy conocida", "Avisar solo si alguien pregunta"], answer: 1, why: "En un video, el aviso se debe decir y mostrar desde el principio." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger tus derechos y respetar los de los demás",
          minutes: 5,
          goal: "Usar la IA sin copiar a otros, y proteger tu propio contenido y tu imagen.",
          text: [
            "No uses la IA para copiar los videos de otro creador, el logotipo de una marca ni la voz o la cara de alguien sin permiso. Hacer que una persona real parezca decir o hacer cosas que no hizo puede engañar a los espectadores, romper las reglas de las plataformas y traer demandas. Usa música y clips de los que tengas los derechos, o la biblioteca con licencia de la plataforma.",
            "Propiedad: la Oficina de Derechos de Autor de Estados Unidos dice que el material generado solo por IA no está protegido por derechos de autor, pero tu propio trabajo creativo, incluidas tus ediciones y tu forma de organizarlo, sí puede estarlo. Mientras más de tu contenido sea tu propia voz, tus imágenes y tus ideas, más tuyo es.",
            "Protégete: lee los contratos con marcas para saber de quién es el contenido, por cuánto tiempo pueden usarlo y si pueden usar tu cara o tu voz con IA. Guarda los originales de tu trabajo. Pide a un abogado que revise cualquier contrato que ceda derechos sobre tu contenido o tu imagen."
          ],
          steps: ["Nunca uses la IA para copiar a otro creador, una marca o la voz o la cara de una persona sin permiso.", "Usa música y clips con licencia.", "Pon tu propia voz, tus imágenes y tus ideas en el centro.", "Lee los contratos: propiedad, tiempo de uso y uso de tu imagen con IA.", "Pide a un abogado que revise los contratos que cedan derechos."],
          words: [["Imagen", "tu cara, tu voz y tu identidad."], ["Licencia", "permiso para usar algo bajo ciertas condiciones."], ["Derechos de uso", "lo que una marca puede hacer con tu contenido y por cuánto tiempo."]],
          slides: [
            { title: "Respeta a los demás", bullets: ["No copies creadores, logotipos, voces ni caras", "Usa música y clips con licencia"] },
            { title: "Derechos de autor e IA", bullets: ["Lo hecho solo por IA: no está protegido", "Tu trabajo creativo humano sí puede estarlo", "Tu voz y tus imágenes = tuyas"] },
            { title: "Protégete", bullets: ["¿De quién es el contenido? ¿Por cuánto tiempo?", "¿Pueden usar tu cara o tu voz con IA?", "Revisión de un abogado si cedes derechos"] }
          ],
          sources: [{ name: "Oficina de Derechos de Autor de EE. UU.: Derechos de autor e inteligencia artificial (en inglés)", url: "https://www.copyright.gov/ai/" }, { name: "Oficina de Derechos de Autor de EE. UU.: anuncio del informe Parte 2 sobre registrabilidad (en inglés)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Tarea final: escribe tres reglas que vas a seguir sobre el uso del trabajo de otros y tus propios derechos; luego arma tu kit de contenido de creador: nicho y pilares, plan de 7 días, guion, piezas reutilizadas, lista para etiquetar IA y publicación patrocinada de ejemplo.",
          youCanNow: "crear con IA como creador de contenido manteniendo la confianza de tu público y protegiendo los derechos de todos.",
          quickCheck: [
            { objective: "O6", q: "¿Qué debes revisar en un contrato con una marca?", options: ["Quién es dueño del contenido, por cuánto tiempo y el uso de tu imagen con IA", "Solo cuánto te pagan", "Solo la fecha de publicación", "Los colores del logo de la marca"], answer: 0, why: "La propiedad, los plazos y los derechos sobre tu imagen te protegen a ti y a tu trabajo." },
            { objective: "O6", q: "Un fan te pide usar la IA para copiar la voz de un creador famoso en un video de broma. ¿Qué harías?", options: ["Hacerlo, porque es solo una broma", "Hacerlo, pero agregar una nota pequeña", "Hacerlo solo en una plataforma", "Decir que no, a menos que tengas el permiso de ese creador"], answer: 3, why: "Copiar la voz de otra persona sin permiso no está bien." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Cuida la confianza de tu público",
        questions: [
          { objective: "O4", q: "En YouTube, ¿qué necesita un aviso de IA?", options: ["Un video realista de una persona real diciendo algo que nunca dijo", "Una corrección de color", "Usar la IA para generar ideas de títulos", "Un dragón de caricatura"], answer: 0, why: "El contenido realista alterado que muestra a una persona real necesita aviso." },
          { objective: "O4", q: "¿YouTube exige avisar cuando la IA solo te ayudó a escribir el guion?", options: ["Solo en videos largos", "Sí, siempre", "Solo los domingos", "No"], answer: 3, why: "Usar la IA para ideas o guiones no requiere aviso." },
          { objective: "O5", q: "Una marca te mandó tenis gratis y publicas sobre ellos. ¿Qué deberías hacer?", options: ["Nada, te los quedaste", "Avisarlo con claridad, como \"Regalo de XYZ\" o \"#publicidad\" al principio", "Esconderlo en los comentarios", "Usar \"#sp\" al final"], answer: 1, why: "Los productos gratis son una relación importante que requiere un aviso claro." },
          { objective: "O5", q: "En un video patrocinado, el aviso debe estar:", options: ["Dentro del video, dicho y mostrado, al principio", "Solo en la descripción", "Solo en un enlace", "Solo al final de todo"], answer: 0, why: "La guía de la FTC dice que avises en el video, idealmente de las dos formas." },
          { objective: "O6", q: "¿Puedes usar la IA para clonar la voz de otro creador en tu video sin permiso?", options: ["Solo si es corto", "Sí", "No", "Solo para bromas"], answer: 2, why: "Copiar la voz de alguien sin permiso puede engañar y violar sus derechos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para creadores de contenido e influencers",
    questions: [
      { objective: "O1", q: "Los creadores muchas veces ganan con:", options: ["Solo premios de lotería", "Acuerdos con marcas, enlaces de afiliado, productos y programas de las plataformas", "Solo becas del gobierno", "Nada"], answer: 1, why: "Estas son fuentes comunes de ingresos de los creadores." },
      { objective: "O1", q: "Una frase de nicho dice:", options: ["Tu número de seguidores", "La marca de tu cámara", "Tu contraseña", "Para quién haces contenido y qué recibe"], answer: 3, why: "Define tu público y tu valor." },
      { objective: "O1", q: "¿Por qué tener pilares de contenido?", options: ["Esconden los anuncios", "Lo exige la ley", "Reemplazan los guiones", "Facilitan planear y marcan lo que el público espera"], answer: 3, why: "Los pilares dan estructura." },
      { objective: "O2", q: "El gancho es:", options: ["El último cuadro", "La frase inicial que hace que la gente se quede", "El logotipo de un patrocinador", "El tamaño de la miniatura"], answer: 1, why: "Los primeros segundos deciden si la gente se queda." },
      { objective: "O2", q: "Después de que la IA redacta un guion, deberías:", options: ["Copiárselo a otro creador", "Publicarlo sin leerlo", "Leerlo en voz alta y editarlo para que suene a ti", "Agregar datos inventados"], answer: 2, why: "Tu voz mantiene a tu público." },
      { objective: "O2", q: "En temas de salud o dinero, los datos de la IA deben:", options: ["Confirmarse antes de compartirlos", "Creerse por completo", "Exagerarse", "Esconderse"], answer: 0, why: "La IA puede inventar datos y estudios." },
      { objective: "O3", q: "Reutilizar significa:", options: ["Comprar seguidores", "Borrar videos viejos", "Convertir una pieza de contenido en varias", "Volver a publicar el video de otra persona"], answer: 2, why: "Un video puede convertirse en muchas publicaciones." },
      { objective: "O3", q: "Antes de publicar subtítulos de la IA, revisa:", options: ["Nombres, números y modismos", "Nada", "Solo el tipo de letra", "Solo los emojis"], answer: 0, why: "Los subtítulos automáticos suelen equivocarse ahí." },
      { objective: "O3", q: "Un clip corto debe:", options: ["Impactar a cualquier costo", "Tener sentido solo y no tergiversar lo que se dijo", "Quitar todo el contexto", "Cambiar las palabras de un invitado"], answer: 1, why: "La exactitud mantiene la confianza." },
      { objective: "O4", q: "En YouTube, el aviso de IA se hace:", options: ["De ninguna forma", "Solo en los comentarios", "Por correo a YouTube", "Con la opción de uso de IA al subir el video"], answer: 3, why: "YouTube Studio tiene una opción de uso de IA al subir." },
      { objective: "O4", q: "¿Qué NO necesita aviso en YouTube?", options: ["Un filtro de belleza", "Un evento noticioso falso y realista", "Una persona real a la que se le hace decir cosas falsas", "Una escena realista que nunca ocurrió"], answer: 0, why: "Las ediciones estéticas menores están exentas." },
      { objective: "O4", q: "No avisar una y otra vez en YouTube puede llevar a:", options: ["Nada", "Más vistas", "Un bono", "Etiquetas, que quiten contenido o perder el acceso al programa de socios"], answer: 3, why: "La página de ayuda de YouTube menciona estas consecuencias." },
      { objective: "O4", q: "Si no estás seguro de si etiquetar contenido de IA, deberías:", options: ["Borrar tu cuenta", "Esconderlo", "Etiquetarlo", "Pedir a los espectadores que adivinen"], answer: 2, why: "La honestidad protege la confianza." },
      { objective: "O5", q: "Una relación importante es:", options: ["Tu cable de internet", "Una relación, como un pago o productos gratis, que los espectadores podrían no esperar", "El comentario de un amigo", "Tu programa de edición"], answer: 1, why: "Eso es lo que debes avisar." },
      { objective: "O5", q: "¿Qué aviso es claro?", options: ["\"#partner\" después de \"ver más\"", "\"#sp\" al final", "Una nota en los comentarios", "\"#publicidad\" al principio del texto"], answer: 3, why: "La FTC menciona un aviso como \"#ad\" al principio como probablemente eficaz." },
      { objective: "O5", q: "Durante una transmisión en vivo con un patrocinador, deberías:", options: ["No mencionarlo nunca", "Decirlo una vez antes de empezar", "Repetir el aviso durante la transmisión", "Ponerlo en una publicación vieja"], answer: 2, why: "La gente se une a las transmisiones en vivo en distintos momentos." },
      { objective: "O5", q: "¿La herramienta de colaboración pagada de la plataforma siempre es suficiente por sí sola?", options: ["No siempre; agrega también tu propio aviso", "Sí, siempre", "No está permitida", "Solo para creadores grandes"], answer: 0, why: "La guía de la FTC dice que las herramientas de las plataformas no son una garantía." },
      { objective: "O6", q: "Según la Oficina de Derechos de Autor, el material generado solo por IA:", options: ["Es propiedad de la plataforma", "No está protegido por derechos de autor", "Es tuyo automáticamente", "Es propiedad pública de la marca"], answer: 1, why: "Los derechos de autor protegen la autoría humana." },
      { objective: "O6", q: "En un contrato con una marca, deberías revisar:", options: ["Solo el logotipo", "De quién es el contenido, por cuánto tiempo y el uso de tu imagen con IA", "Nada", "Solo el estilo de los emojis"], answer: 1, why: "Estas condiciones afectan tus derechos." },
      { objective: "O6", q: "¿Quién debería revisar un contrato que cede derechos sobre tu cara o tu voz?", options: ["Un abogado", "Solo la IA", "Tus seguidores", "Nadie"], answer: 0, why: "Un abogado puede proteger tus derechos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      5,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Nicho, pilares y plan",
        objective: "O1",
        notYet: "El nicho es vago, o el plan tiene publicaciones que no encajan en ningún pilar.",
        meets: "Una frase de nicho clara, tres pilares y un plan de 7 días donde cada publicación encaja en un pilar.",
        exceeds: "El plan también combina formatos y dice qué recibe el público de cada publicación."
      },
      {
        name: "Guion con tu voz",
        objective: "O2",
        notYet: "El guion no tiene gancho, no suena a ti o tiene datos sin revisar.",
        meets: "Un guion corto con un gancho fuerte que suena a ti, con los datos revisados.",
        exceeds: "Probaste más de un gancho y puedes explicar por qué elegiste este."
      },
      {
        name: "Piezas reutilizadas",
        objective: "O3",
        notYet: "Menos de tres piezas, o subtítulos con errores.",
        meets: "Al menos tres piezas cortas con subtítulos correctos y cada una con sentido por sí sola.",
        exceeds: "Cada pieza está adaptada a la plataforma donde se publicará."
      },
      {
        name: "Lista de control para etiquetar IA",
        objective: "O4",
        notYet: "No hay lista, o hay contenido realista hecho con IA sin etiqueta.",
        meets: "Una lista que dice cuándo etiquetar contenido de IA en tus plataformas, incluso cuando tienes dudas.",
        exceeds: "También dice dónde encontrar la regla de cada plataforma para revisar si cambia."
      },
      {
        name: "Aviso en la publicación patrocinada",
        objective: "O5",
        notYet: "Falta el aviso, está escondido o aparece tarde.",
        meets: "Un aviso claro al principio, más un aviso dicho en voz alta en los videos, y afirmaciones honestas.",
        exceeds: "También planea repetir el aviso en transmisiones en vivo o videos largos."
      },
      {
        name: "Reglas de derechos",
        objective: "O6",
        notYet: "Menos de tres reglas, o una regla que permite copiar el trabajo o la imagen de otros.",
        meets: "Tres reglas claras sobre usar el trabajo de otros y proteger el tuyo.",
        exceeds: "Las reglas también cubren qué revisar en un contrato con una marca antes de firmarlo."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que publican según su plan de 7 días durante al menos una semana completa (encuesta de seguimiento)",
      "Personas que consiguen un acuerdo con una marca o ingresos de afiliados en 90 días, con el aviso correcto",
      "Personas que empiezan otro curso de negocios de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet y la cámara de un teléfono",
      "Un asistente de IA gratuito (como ChatGPT, Microsoft Copilot o Google Gemini) y un editor de video gratuito con subtítulos automáticos",
      "Un video o una publicación larga tuya para reutilizar",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Pide a cada participante que traiga ejemplos de sus propios textos o un clip grabado, para que los borradores de la IA se parezcan a su voz.",
      "Abran juntos la página de ayuda sobre etiquetado de IA de cada plataforma, porque las reglas cambian; no confíen en resúmenes de la IA.",
      "En las tareas de práctica usen solo contenido que la persona haya hecho o que tenga permiso para usar.",
      "Recuerda a los participantes que un abogado debe revisar los contratos que ceden derechos sobre su cara o su voz.",
      "Califica el kit de contenido con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
