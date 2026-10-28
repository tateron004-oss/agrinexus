"use strict";

// Koach Learn course (Spanish translation of youth-ai-video). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-video-es",
  lang: "es",
  translationOf: "youth-ai-video",
  category: "Youth",
  name: "Creación de videos con IA",
  skills: "Escribir un guion corto con IA, Hacer un guion gráfico, Grabar con un teléfono, Editar en un editor gratuito, Agregar subtítulos y música de forma responsable, Compartir de forma segura",
  outcome: "planear, grabar y editar un video de 30 a 60 segundos (como la promoción de un club o evento de la escuela) usando la IA para ayudarte con el guion, el guion gráfico y los subtítulos, con permiso de todas las personas que salen en cámara, música que tienes permiso de usar y una etiqueta honesta en todo lo que hizo la IA.",
  about: [
    "Este curso es para adolescentes que quieren hacer mejores videos para proyectos escolares, clubes, equipos, una banda o su propio canal. Un teléfono y un editor de video gratuito son suficientes.",
    "Vas a usar un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini para generar ideas y escribir un guion corto, convertirlo en un guion gráfico, grabarlo con buena luz y buen sonido, editarlo en un editor gratuito como CapCut o Canva, agregar subtítulos y compartirlo de forma segura.",
    "Las apps de video y las herramientas de IA tienen edades mínimas y algunas piden una cuenta, así que lee los términos de cada herramienta, sigue las reglas de tu escuela sobre la IA y las grabaciones, y pide a tu madre, padre o tutor que participe cuando te registres. Cada lección termina con una tarea \"Pruébalo ahora\", una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz un video de 30 a 60 segundos que promocione un club, equipo, evento o causa de tu escuela que te importe. Usa la IA para ayudarte a escribir el guion y el guion gráfico, graba al menos cuatro tomas con permiso de todas las personas en cámara, edítalo en un editor gratuito, agrega subtítulos y música que tengas permiso de usar, etiqueta todo lo generado con IA y expórtalo.",
  chapters: [
    {
      name: "Capítulo 1: Planear y grabar",
      lessons: [
        {
          title: "Cómo ayuda la IA con el video y las reglas básicas",
          minutes: 4,
          goal: "Nombrar formas en que la IA ayuda con el video y las reglas que vas a seguir.",
          text: [
            "La IA aparece en todas partes al hacer videos: asistentes que ayudan a generar ideas y escribir guiones, editores que hacen subtítulos automáticos o quitan el ruido de fondo, y generadores que crean imágenes o clips a partir de una instrucción escrita.",
            "La IA también se puede usar mal. Un deepfake es un video o una voz falsos que hacen parecer que una persona real dijo o hizo algo que no hizo. Hacer deepfakes de compañeros, maestros o celebridades puede lastimar a las personas, romper las reglas de la escuela y, en algunos lugares, la ley.",
            "Tus reglas básicas: pide permiso a todas las personas que grabes, usa solo música y clips que tengas permiso de usar, etiqueta todo lo generado con IA, revisa la edad mínima de cada app y sigue las reglas de tu escuela."
          ],
          words: [["Guion", "las palabras y acciones planeadas para un video."], ["Deepfake", "un video o una voz falsos que hacen parecer que una persona real dijo o hizo algo que no hizo."], ["Generado con IA", "hecho por una herramienta de IA en vez de grabado o dibujado por una persona."]],
          slides: [
            { title: "La IA al hacer videos", bullets: ["Ideas y guiones", "Subtítulos automáticos y quitar ruido", "Imágenes o clips a partir de una instrucción"] },
            { title: "Mal uso: deepfakes", bullets: ["Hacer que una persona real parezca decir o hacer cosas", "Lastima a las personas y rompe las reglas de la escuela", "Nunca los hagas"] },
            { title: "Reglas básicas", bullets: ["Permiso de todos los que salen en cámara", "Música y clips que puedes usar", "Etiqueta lo que hizo la IA", "Revisa las edades de las apps y las reglas de la escuela"] }
          ],
          tryIt: "Elige el tema de tu video final: un club, equipo, evento o causa de tu escuela o tu comunidad. Escribe una oración sobre para quién es el video y qué quieres que hagan después de verlo.",
          youCanNow: "nombrar formas en que la IA ayuda con el video y explicar las reglas para usarla de forma justa."
        },
        {
          title: "Escribir un guion y un guion gráfico con IA",
          minutes: 5,
          goal: "Usar la IA para escribir el borrador de un guion corto y convertirlo en un guion gráfico toma por toma.",
          text: [
            "Los videos cortos necesitan un gancho en los primeros 3 segundos, una parte media clara y un final que le diga a la gente qué hacer, como \"Únete el jueves en el salón 12\".",
            "Pídele un borrador a la IA: \"Escribe un guion de 45 segundos para un video que invite a los estudiantes de primer año a unirse a nuestro club de robótica. Incluye un gancho, 3 escenas cortas y una llamada a la acción. Usa palabras relajadas para adolescentes.\" Luego reescríbelo para que suene como tú y tu club.",
            "Un guion gráfico es el plan de cada toma: qué vemos, qué oímos y cuánto dura. Pídele a la IA que convierta tu guion en una tabla con esas columnas. También puedes dibujar monitos."
          ],
          steps: ["Dile a la IA el tema, el público, la duración y el tono.", "Pide un gancho, 3 escenas cortas y una llamada a la acción.", "Reescríbelo con tu propia voz y revisa los datos (fechas, salón, horarios).", "Pídele a la IA que lo convierta en una tabla de guion gráfico: toma, qué vemos, qué oímos, segundos.", "Asegúrate de que el tiempo total encaje con la duración."],
          words: [["Gancho", "los primeros segundos que atrapan la atención."], ["Llamada a la acción", "la línea que les dice a los espectadores qué hacer después."], ["Guion gráfico", "un plan toma por toma de un video."], ["Toma", "un fragmento de grabación continuo."]],
          slides: [
            { title: "La forma de un video corto", bullets: ["Gancho en los primeros 3 segundos", "Parte media clara", "Llamada a la acción al final"] },
            { title: "Pídele un borrador a la IA", bullets: ["Tema, público, duración, tono", "Luego reescríbelo con tu voz", "Revisa fechas, horarios y lugares"] },
            { title: "Guion gráfico", bullets: ["Número de toma", "Qué vemos y qué oímos", "Cuántos segundos"] }
          ],
          tryIt: "Usa un asistente de IA para escribir un borrador de guion sobre el tema de tu video, reescríbelo con tu voz y conviértelo en un guion gráfico de 4 a 6 tomas que encaje con tu tiempo.",
          youCanNow: "escribir un guion corto de video y un guion gráfico con ayuda de la IA."
        },
        {
          title: "Grabar con un teléfono",
          minutes: 5,
          goal: "Grabar tomas estables y bien iluminadas, con sonido claro y con permiso.",
          text: [
            "Luz: ponte de cara a la luz, como una ventana, para que la luz caiga en la cara de la persona y no quede detrás de ella. Estabilidad: sostén el teléfono con las dos manos, apóyate en algo o usa un soporte. Pon el teléfono de lado o déjalo vertical según dónde lo vayas a publicar.",
            "El sonido importa más de lo que la gente cree. Graba cerca de quien habla, en un lugar tranquilo, lejos de ventiladores y pasillos. Graba una prueba de 3 segundos y escúchala antes de la toma real.",
            "Pregúntales a todas las personas que grabes si está bien y diles dónde se va a mostrar el video. Según las reglas de la escuela, a algunos estudiantes no se les puede grabar ni publicar, así que revisa con tu maestro o con el asesor del club. No grabes a personas en lugares privados ni a nadie que diga que no."
          ],
          steps: ["Pon la luz de frente a la persona.", "Sostén el teléfono firme con las dos manos o un soporte.", "Elige de lado o vertical según dónde vayas a publicar.", "Graba una prueba corta de sonido y escúchala.", "Pide permiso a todos los que salen en cámara y sigue las reglas de grabación de la escuela."],
          words: [["Intento", "un intento de grabar una toma."], ["Encuadre", "lo que queda dentro de los bordes de la imagen."]],
          slides: [
            { title: "Luz y estabilidad", bullets: ["De cara a la luz", "Dos manos o un soporte", "De lado o vertical según la plataforma"] },
            { title: "Sonido", bullets: ["Acércate a quien habla", "Lugar tranquilo, sin ventiladores ni pasillos", "Haz una prueba de 3 segundos"] },
            { title: "Permiso", bullets: ["Pregunta a todos los que salen en cámara", "Di dónde se va a mostrar", "Sigue las reglas de grabación de la escuela"] }
          ],
          tryIt: "Graba las dos primeras tomas de tu guion gráfico. Haz primero una prueba de sonido, pide permiso a quien salga en cámara y graba cada toma al menos dos veces.",
          youCanNow: "grabar tomas estables y bien iluminadas, con sonido claro, con permiso de las personas en cámara."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear y grabar",
        questions: [
          { q: "¿Qué es un deepfake?", options: ["Un video o una voz falsos que hacen parecer que una persona real dijo o hizo algo que no hizo", "Un tipo de cámara", "Una app de edición gratuita", "El final de un video"], answer: 0, why: "Los deepfakes ponen en personas reales palabras o acciones que nunca pasaron." },
          { q: "¿Qué deben hacer los primeros 3 segundos de un video corto?", options: ["Mostrar los créditos", "Quedarse en silencio", "Atrapar la atención con un gancho", "Mostrar una pantalla en blanco"], answer: 2, why: "Un gancho hace que la gente siga viendo." },
          { q: "La IA escribe el borrador de tu guion. ¿Qué haces después?", options: ["Publicarlo sin cambios", "Reescribirlo con tu voz y revisar los datos", "Borrarlo", "Agregar la dirección de tu casa"], answer: 1, why: "Lo haces tuyo y te aseguras de que las fechas y los lugares estén bien." },
          { q: "¿Dónde debe estar la luz cuando grabas a una persona?", options: ["Detrás de ella", "En ningún lado", "Solo en el piso", "En su cara, como de frente a una ventana"], answer: 3, why: "La luz en la cara hace que se vea bien." },
          { q: "Un compañero dice que no quiere salir en tu video. ¿Qué haces?", options: ["Grabarlo de todos modos", "Grabarlo de lejos", "No grabarlo", "Difuminarlo después sin preguntar"], answer: 2, why: "Solo graba a personas que estén de acuerdo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Editar y compartir",
      lessons: [
        {
          title: "Editar en un editor de video gratuito",
          minutes: 6,
          goal: "Importar clips, cortarlos, ponerlos en orden y agregar texto.",
          text: [
            "Los editores gratuitos como CapCut y Canva funcionan en teléfonos y en navegadores web. Los menús cambian seguido, así que busca estas acciones: empezar un proyecto nuevo, importar o subir tus clips, recortar (quitar el inicio y el final), dividir un clip, arrastrar los clips en orden y agregar texto.",
            "Sigue tu guion gráfico. Recorta cada toma al justo: empieza justo antes de la acción y termina justo después. El tiempo muerto hace que la gente siga deslizando.",
            "Agrega un título al inicio y tu llamada a la acción como texto al final. Mantén el texto grande, corto y en pantalla el tiempo suficiente para leerlo dos veces."
          ],
          steps: ["Empieza un proyecto nuevo e importa tus clips.", "Pon los clips en el orden del guion gráfico.", "Recorta el inicio y el final de cada clip.", "Agrega un título y una llamada a la acción como texto.", "Míralo completo y arregla lo que se sienta lento."],
          words: [["Importar", "traer tus clips al editor."], ["Recortar", "quitar el inicio o el final de un clip."], ["Línea de tiempo", "la fila del editor donde los clips quedan en orden."]],
          slides: [
            { title: "Editores gratuitos", bullets: ["CapCut o Canva en el teléfono o la web", "Busca: importar, recortar, dividir, texto"] },
            { title: "Recorta al justo", bullets: ["Empieza justo antes de la acción", "Termina justo después", "Sin tiempo muerto"] },
            { title: "Texto en pantalla", bullets: ["Título al inicio", "Llamada a la acción al final", "Grande, corto, fácil de leer"] }
          ],
          tryIt: "Importa todas tus tomas, ponlas en el orden del guion gráfico, recorta cada una y agrega un título y una llamada a la acción al final.",
          youCanNow: "editar clips en un video ágil y ordenado, con un título y una llamada a la acción."
        },
        {
          title: "Subtítulos, música e imágenes con IA, bien hechos",
          minutes: 5,
          goal: "Agregar subtítulos correctos, música que puedes usar y etiquetas honestas para el contenido hecho con IA.",
          text: [
            "Mucha gente ve los videos sin sonido, y los subtítulos ayudan a las personas sordas o con problemas de audición. Muchos editores pueden hacer subtítulos automáticos con IA. Léelos siempre y corrige las palabras equivocadas, sobre todo los nombres.",
            "La música está protegida por derechos de autor. Según la Oficina de Derechos de Autor de EE. UU. (U.S. Copyright Office), una obra está protegida desde que se crea y se fija, así que la mayoría de las canciones que oyes están protegidas. Usa música de la biblioteca del propio editor según sus reglas, música que tú hiciste o música con permiso claro. Las plataformas pueden silenciar o quitar los videos que usan música sin permiso.",
            "Si agregas una imagen o un clip generados con IA, etiquétalos, por ejemplo con \"Imagen generada con IA\" en pantalla o en la descripción. Nunca uses la IA para poner la cara o la voz de una persona real en tu video sin su permiso claro."
          ],
          steps: ["Activa los subtítulos automáticos si tu editor los tiene.", "Lee cada subtítulo y corrige los errores, sobre todo los nombres.", "Elige música de la biblioteca del editor, tuya o con permiso.", "Etiqueta cualquier imagen o clip generados con IA.", "No uses la cara ni la voz de una persona real hechas con IA sin permiso."],
          words: [["Subtítulos", "palabras en pantalla que muestran lo que se dice."], ["Derechos de autor", "el derecho legal de un creador a controlar las copias de su obra."], ["Etiqueta", "una nota corta que dice que algo se hizo con IA."]],
          slides: [
            { title: "Subtítulos", bullets: ["Muchos ven sin sonido", "Ayudan a espectadores sordos o con problemas de audición", "Corrige los errores de los subtítulos automáticos"] },
            { title: "Música que puedes usar", bullets: ["La biblioteca del editor según sus reglas", "Música que tú hiciste", "Música con permiso claro"] },
            { title: "Imágenes con IA", bullets: ["Etiquétalas", "Nada de caras ni voces de personas reales hechas con IA sin permiso"] }
          ],
          sources: [{ name: "Oficina de Derechos de Autor de EE. UU.: preguntas frecuentes básicas", url: "https://www.copyright.gov/help/faq/faq-general.html" }],
          tryIt: "Agrega subtítulos a tu video y corrige cada error. Agrega música que tengas permiso de usar. Si usaste alguna imagen o clip generados con IA, agrega una etiqueta.",
          youCanNow: "agregar subtítulos correctos, elegir música que puedes usar y etiquetar con honestidad el contenido generado con IA."
        },
        {
          title: "Revisar, exportar y compartir de forma segura",
          minutes: 5,
          goal: "Recibir comentarios, exportar tu video y compartirlo de forma segura.",
          text: [
            "Antes de terminar, muéstrale tu video a una o dos personas y pregúntales: ¿El gancho fue fuerte? ¿Algo fue confuso? ¿Supiste qué hacer al final? También puedes describirle tu video a un asistente de IA y pedirle tres formas de mejorarlo.",
            "Exporta el video con la opción de exportar o guardar del editor. Mira una vez más el archivo exportado para revisar el sonido, los subtítulos y el final.",
            "Compártelo donde tu club, tu escuela y tu familia estén de acuerdo. Deja fuera de las publicaciones abiertas tu nombre completo, la dirección de tu escuela y tu horario. Si es un proyecto escolar, sigue las reglas de IA de tu maestro y di cómo usaste la IA."
          ],
          steps: ["Muéstrale el video a una o dos personas y hazles tres preguntas.", "Haz una o dos mejoras.", "Exporta el video y mira el archivo una vez más.", "Compártelo donde tu club, tu escuela y tu familia estén de acuerdo.", "Mantén privados tus datos personales y di cómo usaste la IA en los trabajos escolares."],
          words: [["Comentarios", "opiniones de otras personas que te ayudan a mejorar."], ["Exportar", "guardar tu proyecto como archivo de video."]],
          slides: [
            { title: "Pide comentarios", bullets: ["¿El gancho fue fuerte?", "¿Algo fue confuso?", "¿Supiste qué hacer al final?"] },
            { title: "Exporta y revisa", bullets: ["Usa exportar o guardar", "Mira el archivo una vez más"] },
            { title: "Comparte de forma segura", bullets: ["Donde la escuela y la familia estén de acuerdo", "Mantén privados tus datos personales", "Di cómo usaste la IA en trabajos escolares"] }
          ],
          tryIt: "Tarea final: termina tu video de 30 a 60 segundos con guion y guion gráfico hechos con ayuda de la IA, al menos cuatro tomas grabadas con permiso, subtítulos, música que puedes usar y etiquetas para el contenido con IA. Pide comentarios, expórtalo y compártelo de forma segura.",
          youCanNow: "planear, grabar, editar, revisar y compartir un video corto de forma responsable con ayuda de la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Editar y compartir",
        questions: [
          { q: "¿Qué significa recortar en un editor de video?", options: ["Agregar música", "Quitar el inicio o el final de un clip", "Compartir el video", "Hacer subtítulos"], answer: 1, why: "Recortar quita el tiempo de más al inicio o al final." },
          { q: "Los subtítulos automáticos escribieron mal el nombre de la líder de tu club. ¿Qué haces?", options: ["Dejarlo así", "Quitar el sonido", "Borrar el video", "Corregir el subtítulo"], answer: 3, why: "Siempre lee y corrige los subtítulos automáticos." },
          { q: "¿Qué música es segura de usar?", options: ["Música de la biblioteca del editor según sus reglas", "Un éxito de la radio", "Una canción sacada de un sitio de videos", "Cualquier canción si le das crédito al cantante"], answer: 0, why: "La música de la biblioteca según sus reglas, tu propia música o música con permiso están bien." },
          { q: "Agregaste una imagen generada con IA. ¿Qué debes hacer?", options: ["Ocultarlo", "Decir que la dibujaste tú", "Etiquetarla como generada con IA", "Quitar los subtítulos"], answer: 2, why: "Las etiquetas honestas les dicen a los espectadores lo que hizo la IA." },
          { q: "¿Qué debes hacer antes de compartir el video de un proyecto escolar?", options: ["Publicar la dirección de tu escuela", "Ocultar cómo usaste la IA", "No mirar el archivo exportado", "Seguir las reglas de IA de tu maestro y decir cómo usaste la IA"], answer: 3, why: "Importa seguir las reglas de la escuela y ser honesto sobre el uso de la IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Creación de videos con IA",
    questions: [
      { q: "¿Cuál es una forma útil de usar la IA en el video?", options: ["Hacer subtítulos automáticos", "Hacer videos falsos de compañeros", "Copiar películas", "Robar cuentas"], answer: 0, why: "Los subtítulos automáticos son una función de IA común y útil." },
      { q: "¿Por qué los deepfakes de personas reales son un problema?", options: ["Son demasiado cortos", "Pueden lastimar a las personas y romper las reglas de la escuela o la ley", "No tienen sonido", "Necesitan un tripié"], answer: 1, why: "Los deepfakes hacen parecer que personas reales hicieron cosas que no hicieron." },
      { q: "Antes de registrarse en una app de video o de IA, un adolescente debe:", options: ["Usar la cuenta de un amigo mayor", "Saltarse los términos", "Revisar la edad mínima y pedir a su madre, padre o tutor que participe", "Usar una fecha de nacimiento falsa"], answer: 2, why: "Las apps tienen límites de edad, y la madre o el padre debe participar." },
      { q: "Una llamada a la acción es:", options: ["La música de fondo", "Un ajuste de la cámara", "El nombre del archivo de un video", "La línea que les dice a los espectadores qué hacer después"], answer: 3, why: "Les dice a los espectadores qué hacer, como unirse o asistir." },
      { q: "¿Qué petición a la IA dará el mejor borrador de guion?", options: ["\"Video de 45 segundos que invite a estudiantes de primer año al club de robótica; gancho, 3 escenas, llamada a la acción; palabras relajadas\"", "\"video\"", "\"haz algo\"", "\"robots\""], answer: 0, why: "Da el tema, el público, la duración, la forma y el tono." },
      { q: "Un guion gráfico muestra:", options: ["Solo la música", "Cada toma: qué vemos, qué oímos y cuánto dura", "El precio del editor", "Los comentarios de los espectadores"], answer: 1, why: "Un guion gráfico es un plan toma por toma." },
      { q: "¿Por qué revisar los datos de un guion escrito por la IA?", options: ["La IA nunca se equivoca", "Los datos no importan en los videos", "La IA puede equivocarse con fechas, horarios o lugares", "Hace el video más largo"], answer: 2, why: "La IA puede equivocarse; tú revisas los detalles." },
      { q: "Para mantener firme tu teléfono puedes:", options: ["Moverlo de un lado a otro", "Sostenerlo con un dedo", "Grabar mientras corres", "Usar las dos manos, apoyarte en algo o usar un soporte"], answer: 3, why: "Las tomas estables se ven más profesionales." },
      { q: "El mejor lugar para grabar a alguien hablando es:", options: ["Un lugar tranquilo, cerca de quien habla", "Junto a un ventilador ruidoso", "Un pasillo lleno de gente", "Al otro lado de un gimnasio"], answer: 0, why: "Los lugares tranquilos y la cercanía dan un sonido claro." },
      { q: "Antes de grabar a personas para el video de un club escolar, deberías:", options: ["Grabar en secreto", "Pedir permiso y revisar las reglas de grabación de la escuela", "Preguntar solo después de publicar", "Grabar en lugares privados"], answer: 1, why: "El permiso y las reglas de la escuela van primero." },
      { q: "Importar en un editor de video significa:", options: ["Publicar el video", "Borrar clips", "Traer tus clips al editor", "Agregar subtítulos"], answer: 2, why: "Importar trae los clips para editarlos." },
      { q: "¿Por qué recortar cada toma al justo?", options: ["Para usar más espacio", "Para hacer el video más largo", "Para esconder los subtítulos", "El tiempo muerto hace que los espectadores sigan deslizando"], answer: 3, why: "Los cortes ágiles mantienen la atención." },
      { q: "El texto en pantalla debe ser:", options: ["Grande, corto y estar en pantalla el tiempo suficiente para leerlo", "Pequeño y rápido", "Párrafos muy largos", "Oculto"], answer: 0, why: "El texto fácil de leer transmite tu mensaje." },
      { q: "¿Por qué agregar subtítulos?", options: ["Son obligatorios en todos los teléfonos", "Muchos ven sin sonido, y ayudan a espectadores sordos o con problemas de audición", "Reemplazan la edición", "Hacen el archivo más pequeño"], answer: 1, why: "Los subtítulos hacen los videos más claros y accesibles." },
      { q: "Según la Oficina de Derechos de Autor de EE. UU., los derechos de autor protegen una obra:", options: ["Solo después de registrarla", "Solo durante 1 año", "Desde que se crea y se fija en una forma que la gente puede ver u oír", "Solo para videos"], answer: 2, why: "La protección empieza cuando la obra se crea y se fija." },
      { q: "¿Qué puede pasar si usas un éxito sin permiso?", options: ["Nunca pasa nada", "Ganas dinero", "La canción mejora", "La plataforma puede silenciar o quitar tu video"], answer: 3, why: "Las plataformas actúan contra la música usada sin permiso." },
      { q: "Un amigo te dice que pongas en tu video la cara de una celebridad hecha con IA para dar risa. Tú:", options: ["Dices que no; no uses la cara de una persona real sin permiso", "Lo haces y lo etiquetas", "Lo haces en una cuenta privada", "Lo haces pero la difuminas"], answer: 0, why: "No uses copias con IA de personas reales sin su permiso." },
      { q: "¿Qué pregunta para pedir comentarios es la más útil?", options: ["\"¿Está perfecto?\"", "\"¿Supiste qué hacer al final?\"", "\"¿Te caigo bien?\"", "\"¿Está bonito mi teléfono?\""], answer: 1, why: "Revisa si la llamada a la acción funciona." },
      { q: "Después de exportar, deberías:", options: ["Borrar el proyecto de inmediato", "Publicar sin mirarlo", "Mirar el archivo una vez más para revisar el sonido y los subtítulos", "Ponerle de nombre tu dirección"], answer: 2, why: "Los archivos exportados pueden tener problemas; revisa antes de compartir." },
      { q: "Al compartir en abierto, mantén privados:", options: ["El nombre del club", "La fecha del evento", "El título del video", "Tu nombre completo, la dirección de tu escuela y tu horario"], answer: 3, why: "Los datos personales se quedan privados en internet." }
    ]
  }
};
