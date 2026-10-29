"use strict";

// Koach Learn course (Spanish translation of shared/critical-thinking-misinformation.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "critical-thinking-misinformation-es",
  lang: "es",
  translationOf: "critical-thinking-misinformation",
  category: "Seniors and Technology",
  name: "Pensamiento crítico y cómo detectar la desinformación",
  skills: "Hacer una pausa antes de creer o compartir, Lectura lateral, Revisar una fuente, Búsqueda inversa de imágenes, Detectar falsificaciones con IA y deepfakes, Darte cuenta de tu propio sesgo",
  outcome: "revisar una publicación, una foto, un video o un mensaje antes de creerlo o compartirlo: hacer una pausa, leer \"de lado\" para revisar la fuente, rastrear una foto con una búsqueda inversa de imágenes, detectar señales de falsificaciones con IA y de estafas, y notar cuándo tus propios sentimientos te están guiando.",
  about: [
    "Todos los días vemos publicaciones, videos, mensajes reenviados y titulares. Algunos son verdad, otros son errores y otros se inventan a propósito para ganar dinero, vender algo, asustarnos o dividirnos. Hoy las herramientas de inteligencia artificial (IA) hacen fácil crear fotos, videos y voces falsas. Saber revisar es una habilidad para la vida de todas las personas.",
    "Este curso es para todos: personas mayores que reciben mensajes reenviados de la familia, jóvenes en las redes sociales, personal de organizaciones sin fines de lucro que comparte noticias con sus seguidores, trabajadores y personas que buscan empleo, y personas que regresan a casa y se están poniendo al día con lo que ha cambiado en internet. No necesitas ser experto. Necesitas unos pocos hábitos rápidos.",
    "Vas a aprender a detenerte antes de compartir, a leer \"de lado\" para revisar una fuente, a hacer una búsqueda inversa de imágenes, a detectar falsificaciones con IA y estafas disfrazadas de noticias, y a notar tu propio sesgo. Cada lección dura unos cinco minutos y termina con una práctica sobre una publicación real. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Busca una publicación, una foto o un mensaje reenviado real que te haya sorprendido o te haya hecho sentir algo fuerte. Revísalo con los pasos de este curso: haz una pausa, lee \"de lado\" sobre la fuente, busca otras noticias confiables sobre el tema, haz una búsqueda inversa de cualquier foto y busca señales de estafa. Escribe un veredicto de tres oraciones (verdadero, falso, engañoso o todavía no estoy seguro) con las pruebas, y decide si lo vas a compartir.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Todas las personas que ven publicaciones y mensajes: personas mayores que reciben mensajes reenviados por su familia, jóvenes en las redes sociales, personal de organizaciones sin fines de lucro que comparte noticias, trabajadores y personas que buscan empleo, y personas que vuelven a casa y se están poniendo al día con lo que cambió en internet.",
    startingPoint: "Usan un teléfono o una computadora para leer publicaciones, ver videos y compartir mensajes. La mayoría nunca ha revisado una fuente leyendo otros sitios, nunca ha hecho una búsqueda inversa de imágenes ni ha usado una palabra clave familiar contra las estafas con voz.",
    gap: "Las publicaciones falsas, las falsificaciones con IA y las estafas se difunden rápido y les cuestan a las personas dinero, salud y confianza. Necesitan unas cuantas costumbres rápidas de revisión para decidir qué creer y qué compartir, proteger a su familia de las estafas y notar cuándo sus propios sentimientos las están guiando.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: un teléfono o una computadora con navegador web",
      "Los menús de las herramientas cambian; las lecciones describen la acción cuando los nombres exactos de los menús pueden variar",
      "Las afirmaciones sobre salud, dinero y temas legales se comprueban con fuentes oficiales o con un profesional",
      "Privacidad: no se comparten en clase mensajes privados de la familia"
    ],
    prerequisites: "Ninguno. Quienes no conocen bien los teléfonos o los navegadores pueden tomar primero \"Usar un teléfono inteligente y una tableta\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Cuando una publicación te hace sentir algo fuerte", action: "hacer una pausa y preguntarte quién la hizo, qué pruebas tiene y qué dicen otros", standard: "antes de creerla o compartirla" },
    { id: "O2", condition: "Con un sitio web o una cuenta", action: "revisar quién está detrás leyendo lo que dicen de él otras fuentes confiables", standard: "encontrando al menos otras dos fuentes antes de decidir" },
    { id: "O3", condition: "Con una foto impactante", action: "hacer una búsqueda inversa de imágenes para encontrar dónde y cuándo apareció por primera vez", standard: "anotando la fecha más antigua que encuentres y si coincide con la publicación" },
    { id: "O4", condition: "Con un video, una foto o una voz que podría estar hecho con IA", action: "comprobarlo con la cuenta oficial de la persona y con noticias confiables, y usar una palabra clave familiar para las llamadas", standard: "sin fiarte solo de cómo se ve o cómo suena" },
    { id: "O5", condition: "Con un anuncio o una publicación que promete dinero, una cura o una gran oferta", action: "anotar las señales de estafa y denunciarlo", standard: "encontrando todas las señales de alerta antes de hacer clic, pagar o inscribirte" },
    { id: "O6", condition: "Después de revisar una publicación sorprendente", action: "escribir un veredicto corto con pruebas y anotar cómo tus propios sentimientos o creencias pudieron influirte", standard: "en tres oraciones con un claro verdadero, falso, engañoso o todavía no estoy seguro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Revisar lo que ves",
      lessons: [
        {
          objectives: ["O1"],
          title: "Detente y revisa una afirmación",
          minutes: 5,
          goal: "Hacer una pausa antes de creer o compartir, y hacerte tres preguntas rápidas.",
          text: [
            "Las publicaciones falsas se difunden más rápido cuando nos hacen sentir algo fuerte: enojo, miedo, orgullo o emoción. Ese sentimiento es tu señal para detenerte. Unos segundos de revisión pueden evitar que pases algo falso a personas que confían en ti.",
            "Hazte tres preguntas. ¿Quién está detrás de esto? (¿Un medio de noticias real, una oficina del gobierno, un médico o una cuenta de la que nunca has oído hablar?) ¿Cuáles son las pruebas? (¿Un enlace a un estudio, un documento, un video del evento completo o solo lo que alguien dice?) ¿Qué dicen otras fuentes confiables? (¿Alguien más está informando sobre esto?)",
            "Un conjunto útil de pasos se llama SIFT, por sus siglas en inglés: S de Stop (detente); I de Investigate (investiga la fuente); F de Find (busca mejor cobertura en otros medios); T de Trace (rastrea afirmaciones, citas y fotos hasta donde aparecieron por primera vez). Vas a practicar cada parte en este curso. Si no estás seguro, está bien esperar. No compartir siempre es una opción."
          ],
          steps: ["Nota un sentimiento fuerte: esa es tu señal para detenerte.", "Pregunta: ¿quién está detrás de esto?", "Pregunta: ¿cuáles son las pruebas?", "Pregunta: ¿qué dicen otras fuentes confiables?", "¿No estás seguro? Todavía no lo compartas."],
          words: [["Información errónea", "información falsa que comparten personas que tal vez creen que es verdad."], ["Desinformación", "información falsa creada y difundida a propósito para engañar a la gente."], ["Afirmación", "algo que una publicación dice que es verdad."]],
          slides: [
            { title: "Sentimiento fuerte = detente", bullets: ["Lo falso se difunde con enojo, miedo y emoción", "Unos segundos de revisión protegen a quienes confían en ti"] },
            { title: "Tres preguntas rápidas", bullets: ["¿Quién está detrás de esto?", "¿Cuáles son las pruebas?", "¿Qué dicen otras fuentes confiables?"] },
            { title: "SIFT", bullets: ["S (Stop): detente", "I (Investigate): investiga la fuente", "F (Find): busca mejor cobertura", "T (Trace): rastréalo hasta el original"] },
            { title: "¿No estás seguro?", bullets: ["Espera", "No compartir siempre es una opción"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Civic Online Reasoning (lecciones gratis en inglés para evaluar información en internet)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Abre tus redes sociales, tu aplicación de noticias o un chat familiar. Busca una publicación que te haya hecho sentir algo fuerte. Escribe las respuestas a las tres preguntas: quién, qué pruebas, qué dicen otros.",
          youCanNow: "hacer una pausa cuando una publicación te despierta sentimientos fuertes y preguntar quién está detrás, cuáles son las pruebas y qué dicen otros.",
          quickCheck: [
            { objective: "O1", q: "¿Qué pregunta te ayuda a revisar una afirmación?", options: ["¿Cuántos \"me gusta\" tiene?", "¿Quién hizo esto y qué pruebas tiene?", "¿La foto tiene muchos colores?", "¿La compartió mi amigo?"], answer: 1, why: "Preguntar quién la hizo y qué pruebas tiene es parte de detenerte a revisar." },
            { objective: "O1", q: "En el chat de tu familia reenvían una advertencia alarmante. ¿Qué harías primero?", options: ["Reenviarla a todos enseguida", "Borrar el chat de grupo", "Hacer una pausa y revisar antes de compartir", "Responder todo en mayúsculas"], answer: 2, why: "Los sentimientos fuertes son una señal para detenerte y revisar primero." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Lectura lateral: revisar la fuente",
          minutes: 5,
          goal: "Revisar quién está detrás de un sitio web o una cuenta leyendo otros sitios sobre él.",
          text: [
            "Los sitios falsos pueden verse muy profesionales, con logotipos, páginas de \"Quiénes somos\" y nombres que suenan oficiales. Leer el propio sitio no te dirá si puedes confiar en él. Los verificadores de datos profesionales hacen otra cosa: salen del sitio y leen \"de lado\". Esto se llama lectura lateral.",
            "Abre una pestaña nueva y busca el nombre del sitio, de la organización o de la persona, junto con palabras como \"quién lo financia\" o \"confiable\". Mira lo que otros dicen de ellos: medios de noticias, el artículo de Wikipedia sobre ellos o sitios de verificación de datos como AP Fact Check, Reuters Fact Check, PolitiFact, FactCheck.org o Snopes (en inglés; en español existen, por ejemplo, AFP Factual y Maldita.es). ¿Una afirmación sobre salud? Revisa lo que dicen tu médico o los sitios oficiales de salud. ¿Una afirmación sobre un programa del gobierno? Ve al sitio oficial, que en Estados Unidos suele terminar en .gov.",
            "Busca también la misma noticia en al menos dos fuentes confiables que ya conozcas. Si solo un sitio desconocido informa algo enorme, ten cuidado."
          ],
          steps: ["No juzgues un sitio por su apariencia ni por su página de \"Quiénes somos\".", "Abre una pestaña nueva.", "Busca el nombre del sitio, grupo o persona junto con \"confiable\" o \"quién lo financia\".", "Lee lo que dicen de ellos los medios de noticias, Wikipedia o los verificadores de datos.", "Busca la misma noticia en dos fuentes confiables."],
          words: [["Lectura lateral", "revisar una fuente saliendo de ella y leyendo lo que otros sitios dicen sobre ella."], ["Verificador de datos", "una persona o un grupo cuyo trabajo es revisar si las afirmaciones son verdad."]],
          slides: [
            { title: "Los sitios falsos pueden parecer reales", bullets: ["Logotipos, páginas de \"Quiénes somos\", nombres oficiales", "Leer solo el propio sitio no basta"] },
            { title: "Lee \"de lado\"", bullets: ["Abre una pestaña nueva", "Busca el nombre junto con \"confiable\" o \"quién lo financia\"", "Mira lo que otros dicen de ellos"] },
            { title: "Dónde buscar", bullets: ["Medios de noticias y Wikipedia", "Verificadores: AP, Reuters, PolitiFact, FactCheck.org, Snopes", "Sitios oficiales; en EE. UU. suelen terminar en .gov"] },
            { title: "Dos fuentes confiables", bullets: ["¿Solo un sitio desconocido informa una gran noticia?", "Ten cuidado"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Introducción a la lectura lateral (Civic Online Reasoning, en inglés)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Toma la publicación de la Lección 1. Abre una pestaña nueva y busca el nombre del sitio o de la cuenta que la publicó. Escribe una oración sobre lo que otras fuentes dicen de ella, y si algún medio confiable informa la misma noticia.",
          youCanNow: "revisar un sitio web o una cuenta leyendo lo que otras fuentes confiables dicen sobre él.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es la lectura lateral?", options: ["Abrir pestañas nuevas para ver lo que otras fuentes dicen de un sitio", "Leer una página despacio de arriba abajo", "Leer solo el titular", "Leer la página \"Quiénes somos\" del sitio"], answer: 0, why: "La lectura lateral revisa una fuente saliendo de ella y leyendo lo que otros dicen de ella." },
            { objective: "O2", q: "Encuentras un sitio de noticias del que nunca has oído hablar con una noticia enorme. ¿Qué harías?", options: ["Confiar en él porque se ve profesional", "Compartirla para que otros decidan", "Leer solo su página \"Quiénes somos\"", "Buscar el nombre del sitio y ver qué dicen las fuentes confiables"], answer: 3, why: "Lo que otros dicen de un sitio te dice más que lo que el sitio dice de sí mismo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Búsqueda inversa de imágenes: ¿de dónde viene esta foto?",
          minutes: 5,
          goal: "Usar una búsqueda inversa de imágenes para encontrar dónde apareció una foto por primera vez.",
          text: [
            "Muchas publicaciones falsas usan una foto real con una historia falsa: una foto de una inundación de hace años compartida como si fuera de \"hoy\", o una foto de otro país. Una búsqueda inversa de imágenes encuentra en qué otros lugares de internet aparece una foto, y muchas veces muestra su fecha y su historia reales.",
            "En una computadora: ve a google.com y haz clic en el ícono de la cámara (\"Buscar por imagen\"), luego sube la foto o arrástrala al cuadro de búsqueda. En el navegador Chrome también puedes hacer clic derecho en una foto de un sitio web y elegir \"Buscar con Google Lens\" (Google Lens es la herramienta de Google para buscar con imágenes). En un teléfono, la aplicación de Google y Google Lens te dejan buscar con una foto o una captura de pantalla. TinEye (tineye.com) es otro sitio gratis de búsqueda inversa de imágenes.",
            "Mira los resultados para encontrar la versión más antigua, el lugar donde apareció primero y noticias o verificaciones sobre ella. Si la foto es de otro momento, otro lugar u otro evento distinto del que dice la publicación, la publicación es engañosa aunque la foto sea real."
          ],
          steps: ["Guarda la foto o toma una captura de pantalla.", "Abre la búsqueda de imágenes de Google (ícono de la cámara), Google Lens o tineye.com.", "Sube la foto.", "Busca la copia más antigua, dónde apareció primero y cualquier verificación.", "Compara: ¿la historia real coincide con lo que dice la publicación?"],
          words: [["Búsqueda inversa de imágenes", "buscar con una foto para encontrar en qué otros lugares de internet aparece."], ["Captura de pantalla", "una imagen de lo que hay en tu pantalla."], ["Engañoso", "que usa algo real de una manera que da una idea falsa."]],
          slides: [
            { title: "Foto real, historia falsa", bullets: ["Fotos viejas compartidas como de \"hoy\"", "Fotos de otro lugar o de otro evento"] },
            { title: "Cómo buscar con una foto", bullets: ["google.com: haz clic en el ícono de la cámara y sube la foto", "Chrome: clic derecho, \"Buscar con Google Lens\"", "Teléfono: aplicación de Google o Lens; también tineye.com"] },
            { title: "Lee los resultados", bullets: ["Encuentra la copia más antigua", "¿Dónde apareció primero?", "¿Hay alguna verificación?"] },
            { title: "Compara", bullets: ["¿Otro momento, otro lugar u otro evento?", "Entonces la publicación es engañosa"] }
          ],
          sources: [
            { name: "Ayuda de la Búsqueda de Google: Buscar con una imagen", url: "https://support.google.com/websearch/answer/1325808" }
          ],
          tryIt: "Busca una foto impactante en una publicación o en tus noticias. Toma una captura de pantalla y haz una búsqueda inversa de imágenes. Escribe la fecha más antigua que encuentres y si coincide con la historia de la publicación.",
          youCanNow: "hacer una búsqueda inversa de imágenes y saber si una foto real se está usando con una historia falsa.",
          quickCheck: [
            { objective: "O3", q: "¿Qué usa una búsqueda inversa de imágenes para buscar?", options: ["Una palabra que escribes", "Un número de teléfono", "Una grabación de voz", "Una foto"], answer: 3, why: "Una búsqueda inversa de imágenes busca otras copias de una foto." },
            { objective: "O3", q: "Una búsqueda inversa muestra que una foto de la \"tormenta de hoy\" apareció por primera vez hace cinco años. ¿Qué decidirías?", options: ["La publicación es engañosa", "La publicación es verdadera", "La foto es falsa", "La búsqueda inversa no funciona"], answer: 0, why: "Una foto real y vieja compartida como nueva es engañosa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Revisar lo que ves",
        questions: [
          { objective: "O1", q: "Una publicación te hace enojar mucho. ¿Cuál es el mejor primer paso?", options: ["Compartirla enseguida", "Detenerte y revisar antes de compartir", "Comentar todo en mayúsculas", "Reenviarla a toda tu familia"], answer: 1, why: "Los sentimientos fuertes son la señal para detenerte y revisar." },
          { objective: "O2", q: "¿Qué significa la lectura lateral?", options: ["Leer con cuidado la página \"Quiénes somos\" del sitio", "Leer solo los titulares", "Leer los comentarios", "Salir del sitio para ver lo que otras fuentes dicen de él"], answer: 3, why: "Los verificadores de datos leen \"de lado\" en pestañas nuevas." },
          { objective: "O2", q: "Un sitio web nuevo con un logotipo profesional informa una noticia enorme que nadie más tiene. ¿Qué debes hacer?", options: ["Buscar la noticia en dos fuentes confiables", "Creerla; el logotipo parece oficial", "Compartirla para que otros decidan", "Pagar para leer más"], answer: 0, why: "Las grandes noticias deben confirmarse con fuentes confiables." },
          { objective: "O3", q: "¿Qué te ayuda a encontrar una búsqueda inversa de imágenes?", options: ["La contraseña del fotógrafo", "Quién le dio \"me gusta\" a la foto", "En qué otros lugares de internet aparece una foto y cuándo apareció por primera vez", "Una cámara mejor"], answer: 2, why: "Rastrea una foto hasta su origen." },
          { objective: "O3", q: "Una foto real de una inundación de 2015 se comparte como si fuera de \"hoy\". La publicación es:", options: ["Verdadera, porque la foto es real", "Engañosa", "Un deepfake", "Una verificación de datos"], answer: 1, why: "Una foto real con una historia falsa es engañosa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Falsificaciones con IA, estafas y tu propia mente",
      lessons: [
        {
          objectives: ["O4"],
          title: "Detectar deepfakes y falsificaciones con IA",
          minutes: 5,
          goal: "Revisar una foto, un video o una voz que podría estar hecho con IA.",
          text: [
            "Hoy las herramientas de IA pueden crear fotos, videos y voces que se ven y suenan reales. Un deepfake (un video, una foto o un audio falso hecho con IA) puede mostrar a una persona famosa diciendo algo que nunca dijo. Una voz clonada puede copiar a un familiar a partir de una grabación corta de su voz.",
            "Los trucos de antes, como contar los dedos o buscar orejas borrosas, todavía descubren algunas falsificaciones, pero las herramientas nuevas cometen menos errores, así que no te fíes solo de la apariencia. Revisa mejor el contexto. ¿Quién lo publicó primero? ¿Está en la cuenta real y oficial de la persona o de la organización? ¿Lo informan medios de noticias confiables? Algunas plataformas y herramientas de IA ponen etiquetas o marcas ocultas al contenido hecho con IA, pero muchas falsificaciones no tienen ninguna, así que la falta de etiqueta no prueba que algo sea real.",
            "Para llamadas y mensajes de voz, el consejo de la FTC (la Comisión Federal de Comercio de Estados Unidos, que protege a los consumidores) es sencillo: no confíes en la voz. Si un \"nieto\" o un \"jefe\" te llama para pedirte dinero o secretos, cuelga y devuélvele la llamada a un número que ya conozcas. Algunas familias acuerdan una palabra clave para emergencias."
          ],
          steps: ["Ten mucho cuidado con videos impactantes, clips de famosos y mensajes de voz urgentes.", "No te fíes solo de la apariencia.", "Revisa quién lo publicó primero y si está en la cuenta oficial real.", "Busca si lo informan medios de noticias confiables.", "Para voces: cuelga y llama tú a un número que conozcas."],
          words: [["Deepfake", "un video, una foto o un audio falso hecho con IA para que parezca o suene como una persona real."], ["Voz clonada", "una copia de la voz de alguien hecha con IA."], ["Generado por IA", "hecho por una herramienta de IA en lugar de grabado de la vida real."]],
          slides: [
            { title: "La IA puede falsificarlo", bullets: ["Fotos, videos y voces", "Personas famosas diciendo cosas que nunca dijeron", "Voces copiadas de una grabación corta"] },
            { title: "No te fíes solo de la apariencia", bullets: ["Manos raras o partes borrosas delatan algunas falsificaciones", "Las herramientas nuevas cometen menos errores", "Sin etiqueta no significa que sea real"] },
            { title: "Revisa el contexto", bullets: ["¿Quién lo publicó primero?", "¿Está en la cuenta oficial real?", "¿Lo informan medios confiables?"] },
            { title: "Voces: no confíes en la voz", bullets: ["Cuelga", "Llama tú a un número que conozcas", "Piensa en una palabra clave familiar"] }
          ],
          sources: [
            { name: "Alerta de la FTC para consumidores: los estafadores usan IA en sus engaños de emergencias familiares (en inglés)", url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" }
          ],
          tryIt: "Busca un video o una foto viral de una persona famosa. Revisa quién lo publicó primero, si aparece en la cuenta oficial de esa persona y si los medios de noticias confiables lo mencionan. Luego acuerda una palabra clave familiar con alguien que quieras.",
          youCanNow: "revisar una posible falsificación con IA por su contexto y protegerte de las voces clonadas.",
          quickCheck: [
            { objective: "O4", q: "¿Para qué sirve una palabra clave familiar?", options: ["Para entrar a tu banco", "Para comprobar que quien llama de verdad es tu familiar", "Para unirte a un chat de grupo", "Para crear voces con IA"], answer: 1, why: "Una palabra clave te ayuda a comprobar quién llama cuando una voz se puede falsificar." },
            { objective: "O4", q: "Un video muestra a una persona famosa diciendo algo impactante. ¿Qué harías?", options: ["Compartirlo porque se ve real", "Decidir mirando de cerca la cara", "Dar por hecho que es falso y compartir eso", "Revisar primero su cuenta oficial y las noticias confiables"], answer: 3, why: "Revisa la fuente y lo que informan los medios confiables; la apariencia sola no basta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Estafas que usan noticias falsas",
          minutes: 5,
          goal: "Detectar noticias y anuncios falsos que en realidad son estafas.",
          text: [
            "Muchas estafas se disfrazan de noticias. Un artículo falso muestra a una persona famosa \"revelando\" una inversión para hacerse rico rápido, una cura milagrosa o un pago gratis del gobierno, con un enlace para inscribirse. Justo después de un desastre aparecen pedidos falsos de organizaciones benéficas. Anuncios falsos en las redes sociales prometen descuentos enormes \"por tiempo limitado\". Algunas noticias falsas usan videos hechos con IA de famosos o de presentadores de noticias.",
            "Señales de alerta: te apura; promete mucho dinero, una cura o un premio; te pide pagar con tarjetas de regalo, transferencias bancarias o criptomonedas; te pide contraseñas, códigos o números de identificación; o el enlace lleva a un sitio web que no es el verdadero. La FTC dice que solo los estafadores te piden comprar una tarjeta de regalo para pagarles.",
            "Qué hacer: no hagas clic en el enlace. Ve al sitio web de la organización real escribiendo tú mismo la dirección, o llama a un número que ya conozcas. Dona a organizaciones benéficas que puedas investigar. Si tú o un ser querido perdieron dinero, comunícate con tu banco de inmediato y denuncia la estafa a la FTC en ReportFraud.ftc.gov (en Estados Unidos)."
          ],
          steps: ["Ten cuidado con publicaciones con aspecto de noticia que venden algo o piden dinero.", "Busca señales de alerta: prisa, grandes promesas, tarjetas de regalo, transferencias o criptomonedas, códigos.", "No hagas clic en el enlace.", "Escribe tú mismo el sitio web real o llama a un número que conozcas.", "¿Perdiste dinero? Llama a tu banco y luego denuncia en ReportFraud.ftc.gov."],
          words: [["Estafa", "un engaño para robar dinero o información."], ["Phishing", "mensajes falsos que intentan que hagas clic en un enlace o compartas datos privados."], ["Publicación patrocinada", "un anuncio pagado en las redes sociales; puede que nadie lo haya revisado."]],
          slides: [
            { title: "Estafas disfrazadas de noticias", bullets: ["Un famoso \"revela\" una inversión o una cura", "Organizaciones benéficas falsas tras un desastre", "Videos con IA de famosos o presentadores"] },
            { title: "Señales de alerta", bullets: ["Te apura", "Mucho dinero, una cura o un premio", "Tarjetas de regalo, transferencias o criptomonedas", "Pide contraseñas, códigos o números de identificación"] },
            { title: "Qué hacer", bullets: ["No hagas clic en el enlace", "Escribe tú mismo el sitio web real", "Llama a un número que ya conozcas"] },
            { title: "¿Perdiste dinero?", bullets: ["Llama a tu banco de inmediato", "Denuncia en ReportFraud.ftc.gov (EE. UU.)"] }
          ],
          sources: [
            { name: "FTC: Cómo evitar y denunciar estafas con tarjetas de regalo (en inglés)", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" },
            { name: "FTC: Impostores que se hacen pasar por el gobierno o por empresas (en inglés)", url: "https://consumer.ftc.gov/government-business-impersonators" },
            { name: "FTC: ReportFraud (sitio para denunciar fraudes)", url: "https://reportfraud.ftc.gov/" }
          ],
          tryIt: "Revisa tus redes sociales o tus mensajes y busca un anuncio o una publicación que prometa dinero, una cura o un gran descuento. Haz una lista de todas las señales de alerta que veas. Si es una estafa, usa el menú de la plataforma para denunciarla.",
          youCanNow: "detectar estafas que parecen noticias, evitar sus enlaces y saber dónde denunciarlas.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es una señal de que una publicación es una estafa?", options: ["Te pide pagar con tarjetas de regalo", "Enlaza a una dirección .gov real que escribiste tú mismo", "Te da tiempo para pensarlo", "Viene de una organización benéfica que conoces y en la que confías"], answer: 0, why: "Pedir pagos con tarjetas de regalo es una señal clara de estafa." },
            { objective: "O5", q: "Un anuncio dice que un médico famoso encontró una cura milagrosa y que debes comprarla hoy. ¿Qué harías?", options: ["Comprarla antes de que se agote", "Compartirla con amigos enfermos", "Consultarlo con tu médico o con fuentes oficiales de salud y denunciar el anuncio", "Dar el número de tu tarjeta para saber más"], answer: 2, why: "Las afirmaciones de salud se consultan con un médico o una fuente oficial, y las estafas se denuncian." }
          ]
        },
        {
          objectives: ["O6"],
          title: "El sesgo en tu propia forma de pensar",
          minutes: 5,
          goal: "Notar cuándo tus propias creencias o sentimientos guían lo que aceptas como verdad.",
          text: [
            "Las falsificaciones más difíciles de descubrir son las que queremos creer. El sesgo de confirmación significa que aceptamos rápido lo que encaja con lo que ya pensamos y buscamos con mucho cuidado fallas en lo que no encaja. Todos lo hacemos, sin importar la edad, el origen o las ideas políticas.",
            "Las redes sociales pueden hacerlo más fuerte. Nos muestran más de lo que ya solemos ver, así que podemos terminar viendo solo un lado. Una publicación compartida por un amigo parece confiable, pero puede que tu amigo tampoco la haya revisado.",
            "Tres hábitos ayudan. Pregúntate: \"¿Me lo creería si fuera sobre el otro lado?\" Pregúntate: \"¿Qué prueba me haría cambiar de opinión?\" Y busca una fuente confiable que tal vez no esté de acuerdo. Cambiar de opinión cuando cambian los hechos es una fortaleza, no una debilidad. Antes de compartir, échale un último vistazo: ¿es verdad, es útil y es justo?"
          ],
          steps: ["Nota cuando una publicación te parece \"justo lo que pensabas\".", "Pregúntate: ¿me lo creería si fuera sobre el otro lado?", "Pregúntate: ¿qué prueba me haría cambiar de opinión?", "Busca una fuente confiable que tal vez no esté de acuerdo.", "Antes de compartir: ¿es verdad, útil y justo?"],
          words: [["Sesgo", "una inclinación que puede empujar nuestro pensamiento hacia un lado sin que nos demos cuenta."], ["Sesgo de confirmación", "aceptar lo que encaja con nuestras creencias y dudar de lo que no encaja."], ["Cámara de eco", "un lugar donde solo oyes opiniones que coinciden con las tuyas."]],
          slides: [
            { title: "Creemos lo que queremos creer", bullets: ["Sesgo de confirmación: un sí fácil a lo que encaja", "Una mirada dura a lo que no encaja", "Todos lo hacemos"] },
            { title: "Las redes lo hacen más fuerte", bullets: ["Nos muestran más de lo que ya vemos", "Podemos ver solo un lado", "Los amigos también comparten sin revisar"] },
            { title: "Tres hábitos", bullets: ["\"¿Me lo creería si fuera sobre el otro lado?\"", "\"¿Qué prueba me haría cambiar de opinión?\"", "Busca una fuente confiable que no esté de acuerdo"] },
            { title: "Antes de compartir", bullets: ["¿Es verdad?", "¿Es útil?", "¿Es justo?"] }
          ],
          tryIt: "Tarea final: toma una publicación sorprendente y revísala con cada paso de este curso. Escribe un veredicto de tres oraciones (verdadero, falso, engañoso o todavía no estoy seguro) con tus pruebas, y anota una forma en que tus propios sentimientos podrían haberte influido.",
          youCanNow: "revisar una publicación de principio a fin y notar cuándo tu propio sesgo te está influyendo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una cámara de eco?", options: ["Un lugar donde solo oyes opiniones como las tuyas", "Un cuarto con mucho ruido", "Un sitio web de verificación de datos", "Un tipo de herramienta de IA"], answer: 0, why: "En una cámara de eco oyes sobre todo lo que ya piensas." },
            { objective: "O6", q: "Una publicación sobre un político que no te cae bien te alegra y quieres compartirla. ¿Qué harías?", options: ["Compartirla porque encaja con lo que piensas", "Compartirla con un chiste", "Preguntarte si te la creerías si fuera sobre el otro lado, y revisarla", "No volver a leer noticias nunca"], answer: 2, why: "Hacerte esa pregunta te ayuda a detectar tu propio sesgo antes de compartir." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Falsificaciones con IA, estafas y tu propia mente",
        questions: [
          { objective: "O4", q: "Recibes una llamada con la voz de tu nieto pidiéndote dinero ahora mismo. ¿Qué debes hacer?", options: ["Enviar el dinero rápido", "Pedirle sus datos bancarios", "Colgar y llamarlo tú a un número que conozcas", "Comprar tarjetas de regalo como te pide"], answer: 2, why: "Las voces se pueden clonar; llama tú a un número conocido." },
          { objective: "O4", q: "Un video impactante de un famoso no tiene la etiqueta \"IA\". Eso significa:", options: ["Que es real con seguridad", "Que es falso con seguridad", "Que el famoso lo aprobó", "Nada todavía; revisa quién lo publicó primero y si lo informan medios confiables"], answer: 3, why: "Muchas falsificaciones no tienen etiqueta; revisa el contexto." },
          { objective: "O5", q: "Una publicación con aspecto de noticia dice que una persona famosa encontró una inversión secreta y te pide inscribirte. Lo más probable es que sea:", options: ["Una estafa", "Un programa del gobierno", "Una verificación de datos", "Una noticia de última hora"], answer: 0, why: "Las historias falsas de famosos con inversiones son una estafa común." },
          { objective: "O5", q: "¿Dónde pueden denunciar una estafa las personas en Estados Unidos?", options: ["En los comentarios del estafador", "En ReportFraud.ftc.gov", "Respondiendo al mensaje de la estafa", "En ningún lugar"], answer: 1, why: "La FTC recibe denuncias de estafas en ReportFraud.ftc.gov." },
          { objective: "O6", q: "El sesgo de confirmación significa:", options: ["Revisar cada dato", "Dudar de todo", "Aceptar lo que encaja con lo que ya pensamos", "Leer solo las noticias"], answer: 2, why: "Aceptamos más fácilmente lo que encaja con nuestras creencias." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Pensamiento crítico y cómo detectar la desinformación",
    questions: [
      { objective: "O1", q: "La información errónea es:", options: ["Siempre creada a propósito", "Información falsa que la gente puede compartir creyendo que es verdad", "Solo la que sale en la televisión", "Noticias verdaderas"], answer: 1, why: "La información errónea se puede compartir por un error honesto." },
      { objective: "O1", q: "¿Qué sentimiento es una señal para detenerte y revisar?", options: ["Sentir aburrimiento", "Sentir sueño", "Sentir hambre", "Sentir enojo o mucha emoción por una publicación"], answer: 3, why: "Las publicaciones falsas se difunden con emociones fuertes." },
      { objective: "O1", q: "¿Qué significa la S de SIFT?", options: ["Stop (detente)", "Share (comparte)", "Search (busca)", "Save (guarda)"], answer: 0, why: "SIFT empieza con Stop: detente." },
      { objective: "O1", q: "No estás seguro de que una publicación sea verdad. La opción más segura es:", options: ["Compartirla con una advertencia", "Compartirla dos veces", "Esperar y todavía no compartirla", "Agregar tu propia suposición"], answer: 2, why: "No compartir siempre es una opción." },
      { objective: "O2", q: "¿Por qué la página \"Quiénes somos\" de un sitio no basta para confiar en él?", options: ["Siempre es demasiado larga", "Los sitios falsos pueden escribir cualquier cosa sobre sí mismos", "Está en letra pequeña", "Cuesta dinero leerla"], answer: 1, why: "Necesitas saber lo que otros dicen del sitio." },
      { objective: "O2", q: "¿Cuál es una organización de verificación de datos?", options: ["Un blog cualquiera", "Un anuncio emergente", "Reuters Fact Check", "Una cadena de correos"], answer: 2, why: "Reuters Fact Check es un verificador de datos conocido." },
      { objective: "O2", q: "Los sitios web oficiales del gobierno de Estados Unidos suelen terminar en:", options: [".gov", ".win", ".xyz", ".shop"], answer: 0, why: "Los sitios del gobierno de EE. UU. usan .gov." },
      { objective: "O2", q: "Una publicación sobre salud dice que una fruta cura la diabetes. ¿Con quién debes consultarlo?", options: ["Con los comentarios de la publicación", "Con la persona que vende la fruta", "Con un amigo que la compartió", "Con tu médico o con fuentes oficiales de salud"], answer: 3, why: "Las afirmaciones sobre salud necesitan un médico o una fuente oficial." },
      { objective: "O3", q: "En google.com, ¿cómo empiezas una búsqueda con una foto?", options: ["Escribes la palabra foto", "Haces clic en el ícono de la cámara y subes la imagen", "Llamas a Google", "Imprimes la foto"], answer: 1, why: "El ícono de la cámara abre la búsqueda por imagen." },
      { objective: "O3", q: "En Chrome, al hacer clic derecho en una foto puedes elegir:", options: ["Buscar con Google Lens", "Borrar internet", "Comprar la foto", "Enviarla a todos"], answer: 0, why: "Chrome ofrece Buscar con Google Lens en las imágenes." },
      { objective: "O3", q: "En los resultados de una búsqueda inversa de imágenes, ¿qué buscas principalmente?", options: ["La que tiene más \"me gusta\"", "La versión más bonita", "La copia más antigua y dónde apareció primero", "El tamaño más grande"], answer: 2, why: "La primera aparición muestra la historia real." },
      { objective: "O4", q: "Un deepfake es:", options: ["Una pantalla rota", "Una foto del fondo del mar", "Una etiqueta de verificación", "Un video, una foto o un audio falso hecho con IA"], answer: 3, why: "Los deepfakes usan IA para imitar a personas reales." },
      { objective: "O4", q: "¿Por qué no debes fiarte solo de la apariencia para detectar falsificaciones con IA?", options: ["Las herramientas de IA nuevas cometen menos errores visibles", "Las falsificaciones con IA siempre son obvias", "La apariencia nunca importa", "Solo los expertos pueden ver fotos"], answer: 0, why: "Revisar el contexto funciona mejor a medida que las falsificaciones mejoran." },
      { objective: "O4", q: "Una palabra clave familiar te ayuda a:", options: ["Entrar a las redes sociales", "Comprobar que quien llama de verdad es tu familiar", "Pagar cuentas", "Desbloquear tu teléfono"], answer: 1, why: "Una voz clonada no sabrá la palabra clave." },
      { objective: "O5", q: "¿Qué pedido de pago es una señal clara de estafa?", options: ["Pagar a tu compañía de luz conocida en su sitio oficial", "Pagar en la caja de una tienda", "\"Compra tarjetas de regalo y mándame los números\"", "Una factura del consultorio de tu médico que puedes comprobar"], answer: 2, why: "La FTC dice que solo los estafadores piden pagos con tarjetas de regalo." },
      { objective: "O5", q: "Acaba de ocurrir un desastre y una página nueva de una organización benéfica pide donaciones. ¿Qué es lo más prudente?", options: ["Donar a una organización benéfica que puedas investigar y en la que confíes", "Enviar dinero a la página enseguida", "Dar la contraseña de tu banco", "Compartir la página sin revisarla"], answer: 0, why: "Después de los desastres aparecen organizaciones benéficas falsas." },
      { objective: "O5", q: "Una publicación tiene un enlace para inscribirse a un \"pago del gobierno\". El paso más seguro es:", options: ["Hacer clic y escribir tus datos", "Enviarles tu número de identificación", "Responder preguntando si es real", "Escribir tú mismo la dirección .gov real para comprobarlo"], answer: 3, why: "Ir tú mismo al sitio oficial evita los enlaces falsos." },
      { objective: "O6", q: "¿Qué pregunta ayuda a descubrir tu propio sesgo?", options: ["\"¿Quién está de acuerdo conmigo?\"", "\"¿Me lo creería si fuera sobre el otro lado?\"", "\"¿Qué tan rápido puedo compartir esto?\"", "\"¿Es gracioso?\""], answer: 1, why: "Cambiar de lado muestra si tus sentimientos te están guiando." },
      { objective: "O6", q: "Una cámara de eco es:", options: ["Un cuarto ruidoso", "Un sitio de verificación de datos", "Un lugar donde solo oyes opiniones como las tuyas", "Un tipo de micrófono"], answer: 2, why: "Las cámaras de eco esconden otras opiniones." },
      { objective: "O6", q: "Cambiar de opinión cuando cambian los hechos es:", options: ["Una debilidad", "Una fortaleza del buen pensamiento", "Algo prohibido", "Una señal de sesgo"], answer: 1, why: "Quien piensa bien sigue las pruebas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      4,
      7,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Pausa y preguntas",
        objective: "O1",
        notYet: "La compartió o la creyó sin revisarla.",
        meets: "Escribió quién la hizo, las pruebas y lo que dicen otros.",
        exceeds: "Anotó el sentimiento que le dio ganas de compartirla."
      },
      {
        name: "Fuente revisada",
        objective: "O2",
        notYet: "Se fió de la propia página del sitio o solo de la publicación.",
        meets: "Leyó lo que dicen del sitio o de la cuenta al menos otras dos fuentes.",
        exceeds: "Encontró la noticia, o vio que no aparece, en medios confiables y verificadores de datos."
      },
      {
        name: "Origen de la foto",
        objective: "O3",
        notYet: "No hizo búsqueda inversa de una foto de la publicación.",
        meets: "Hizo una búsqueda inversa de imágenes y anotó la fecha más antigua que encontró.",
        exceeds: "Explicó si la foto coincide con el momento y el lugar de la publicación."
      },
      {
        name: "Señales de estafa",
        objective: "O5",
        notYet: "No vio señales claras de estafa, como la presión o el pago con tarjetas de regalo.",
        meets: "Anotó todas las señales de estafa, o confirmó que no había ninguna.",
        exceeds: "Si era una estafa, la denunció en la plataforma."
      },
      {
        name: "Veredicto y sesgo",
        objective: "O6",
        notYet: "No hay un veredicto claro, o no da pruebas.",
        meets: "Un veredicto de tres oraciones con pruebas y una decisión sobre si compartir.",
        exceeds: "Además anota cómo sus propios sentimientos o creencias pudieron influirle."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que cuentan que revisaron una publicación antes de compartirla en 30 días (encuesta de seguimiento)",
      "Participantes que crean una palabra clave familiar",
      "Participantes que cuentan que evitaron o denunciaron una estafa",
      "Participantes que empiezan otro curso de seguridad digital de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con navegador web",
      "Acceso a una búsqueda inversa de imágenes, como Google Lens",
      "Una publicación, una foto o un mensaje reenviado real para revisar",
      "Papel o una app de notas para el veredicto",
      "Unos 60 minutos en total"
    ],
    facilitatorNotes: [
      "Lleva algunas publicaciones de ejemplo seguras (una foto vieja compartida como nueva, un anuncio falso) para quienes no quieran usar sus propias redes.",
      "Evita las discusiones políticas en clase; enfócate en los pasos para revisar, no en quién tiene la razón.",
      "Recuerda que durante la práctica nunca deben hacer clic en enlaces ni pagar en publicaciones sospechosas.",
      "Ayuda a las personas mayores a crear una palabra clave familiar con un pariente durante la clase o después.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
