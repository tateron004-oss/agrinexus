"use strict";

// Koach Learn course (Spanish translation of youth/youth-cyberbullying-safety.js). See scripts/koachlearn-courses/README.md, "Translations".
// Every number and URL is kept exactly as in the English. The 988 Lifeline offers help in Spanish by call, text and chat.

module.exports = {
  id: "youth-cyberbullying-safety-es",
  lang: "es",
  translationOf: "youth-cyberbullying-safety",
  category: "Youth",
  name: "Mantenerte a salvo del ciberacoso",
  skills: "Reconocer el ciberacoso, Mantener la calma y no vengarte, Guardar pruebas, Bloquear y denunciar en las apps, Contarle a un adulto de confianza y a la escuela, Ayudar a otra persona sin quedarte mirando",
  outcome: "reconocer el ciberacoso, responder sin empeorarlo, guardar pruebas, bloquear y denunciar a la persona en la app, contárselo a un adulto de confianza y a la escuela, saber cuándo es un asunto para la policía y ayudar a un amigo al que están atacando.",
  about: [
    "El ciberacoso es acoso que pasa a través de teléfonos, computadoras y juegos: mensajes de texto, chats de grupo, redes sociales, comentarios, foros y juegos en línea. Como puede seguirte hasta tu casa y extenderse rápido, puede parecer que no hay escapatoria. Hay mucho que puedes hacer, y no tienes que enfrentarlo solo.",
    "Este curso es para jóvenes, y para los padres, entrenadores, mentores y trabajadores juveniles que los apoyan. Vas a aprender qué es el ciberacoso, cómo responder de forma segura, cómo guardar pruebas, cómo bloquear y denunciar, a quién contárselo y cómo ayudar a otra persona.",
    "Si alguna vez te sientes en peligro o piensas en hacerte daño, díselo de inmediato a un adulto de confianza. En Estados Unidos puedes llamar o enviar un mensaje de texto al 988 a cualquier hora, con ayuda en español por llamada, texto y chat. Si alguien está en peligro inmediato, llama al 911 (o al número de emergencias de tu país).",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu plan personal de seguridad contra el ciberacoso: cómo guardar pruebas en tu teléfono (los pasos para hacer capturas de pantalla y dónde las vas a guardar), dónde están los botones de bloquear y denunciar en las dos apps que más usas, los nombres de dos adultos de confianza a quienes se lo contarías (y una persona de la escuela), lo que les dirías, cuándo irías a la policía y una cosa que harías para apoyar a un amigo al que están atacando.",
  chapters: [
    {
      name: "Capítulo 1: Reconocer el ciberacoso y responder de forma segura",
      lessons: [
        {
          title: "Qué es el ciberacoso (y qué no es)",
          minutes: 5,
          goal: "Distinguir el ciberacoso de un desacuerdo normal.",
          text: [
            "El ciberacoso es usar la tecnología para lastimar, avergonzar, amenazar o atacar a alguien, casi siempre más de una vez. Ejemplos: mensajes crueles o amenazantes, difundir chismes, publicar fotos o videos vergonzosos, crear cuentas falsas para burlarse de alguien, dejar a alguien fuera de un chat de grupo a propósito para lastimarlo, o compartir mensajes o imágenes privadas sin permiso.",
            "Muchas veces pasa por mensajes de texto, redes sociales, comentarios, mensajes directos, foros y juegos. Lo que se publica en línea puede quedarse para siempre y ser público, a menos que se denuncie y se borre, y puede llegar a mucha gente muy rápido.",
            "No toda discusión en línea es acoso. Un desacuerdo de una sola vez entre iguales es un conflicto. El acoso busca lastimar a alguien a propósito, muchas veces una y otra vez, y muchas veces con una diferencia de poder: más personas, más popularidad o información privada para usar en su contra. Algunos casos de ciberacoso, como las amenazas o el acoso por raza, religión, género, orientación sexual o discapacidad, pueden ir contra la ley."
          ],
          steps: ["Pregúntate: ¿esto busca lastimar, avergonzar o amenazar?", "Pregúntate: ¿está pasando más de una vez o se está extendiendo?", "Pregúntate: ¿hay una diferencia de poder (un grupo, popularidad, información privada)?", "Si la respuesta es sí, trátalo como ciberacoso y usa los pasos de este curso."],
          words: [["Ciberacoso", "usar teléfonos, computadoras o juegos para lastimar, avergonzar, amenazar o atacar a alguien."], ["Hostigamiento", "conducta repetida que molesta, asusta o amenaza a alguien."], ["Conflicto", "un desacuerdo entre personas; no es lo mismo que el acoso."]],
          slides: [
            { title: "Cómo se ve el ciberacoso", bullets: ["Mensajes crueles o amenazantes, chismes", "Fotos o videos vergonzosos publicados", "Cuentas falsas, dejar fuera a propósito", "Compartir mensajes o imágenes privadas"] },
            { title: "Dónde pasa", bullets: ["Mensajes de texto y chats de grupo", "Redes sociales, comentarios, mensajes directos", "Foros y juegos en línea"] },
            { title: "¿Acoso o conflicto?", bullets: ["¿Busca lastimar?", "¿Se repite o se extiende?", "¿Hay diferencia de poder?"] },
            { title: "Parte de esto es ilegal", bullets: ["Las amenazas", "El acoso por raza, religión, género, orientación sexual o discapacidad"] }
          ],
          sources: [
            { name: "MedlinePlus: Acoso escolar (en inglés)", url: "https://medlineplus.gov/bullying.html" },
            { name: "StopBullying.gov: Qué es el ciberacoso (en inglés)", url: "https://www.stopbullying.gov/cyberbullying/what-is-it" }
          ],
          tryIt: "Lee estas tres situaciones y marca cada una como acoso o conflicto: (1) un amigo no está de acuerdo una vez con tu opinión sobre un juego; (2) un grupo sigue publicando en una cuenta falsa para burlarse de un compañero de clase; (3) alguien te sigue mandando amenazas después de que le dijiste que parara. Escribe por qué en cada caso.",
          youCanNow: "reconocer el ciberacoso y distinguirlo de un desacuerdo normal."
        },
        {
          title: "Responder sin empeorar las cosas",
          minutes: 5,
          goal: "Responder a un mensaje hiriente alejándote en lugar de devolver el golpe.",
          text: [
            "Cuando alguien te ataca en línea, es natural querer devolver el golpe. Pero responder con rabia, insultar de vuelta o publicar sobre esa persona casi siempre empeora las cosas, y puede hacerte parecer parte del problema. KidsHealth aconseja no responder ni vengarte, alejarte y no reenviar el mensaje.",
            "Primero, aléjate de la pantalla. Respira despacio unas cuantas veces. Recuérdate: esto habla de su comportamiento, no de tu valor, y no es tu culpa. Luego sigue el plan: guarda pruebas, bloquea, denuncia y cuéntaselo a alguien. Vas a aprender cada paso en este curso.",
            "No reenvíes ni compartas la publicación hiriente, ni siquiera para mostrarles a tus amigos lo mala que es; eso la extiende todavía más. Y no te hagas pasar por otra persona ni crees cuentas falsas para vengarte."
          ],
          steps: ["No respondas ni devuelvas el golpe.", "Aléjate y respira.", "Recuérdate que no es tu culpa.", "No reenvíes ni compartas la publicación.", "Después: guarda pruebas, bloquea, denuncia y cuéntaselo a un adulto."],
          words: [["Vengarse", "lastimar a alguien de vuelta después de que te lastimó."], ["Reenviar", "mandar un mensaje o una publicación a otras personas."]],
          slides: [
            { title: "No devuelvas el golpe", bullets: ["Responder con rabia casi siempre lo empeora", "Puede hacerte parecer parte del problema"] },
            { title: "Aléjate", bullets: ["Deja el teléfono", "Respira despacio", "No es tu culpa"] },
            { title: "No lo extiendas", bullets: ["No reenvíes ni compartas la publicación", "Nada de cuentas falsas para vengarte"] },
            { title: "Luego sigue el plan", bullets: ["Guarda pruebas", "Bloquea y denuncia", "Cuéntaselo a un adulto de confianza"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Ciberacoso, para adolescentes (en inglés)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Alguien comenta \"eres un chiste, todos te odian\" debajo de tu publicación. Escribe lo que NO vas a hacer (tres cosas) y lo que SÍ vas a hacer en los próximos cinco minutos.",
          youCanNow: "mantener la calma, no devolver el golpe ni extender el ataque, y pasar a un plan seguro."
        },
        {
          title: "Guardar pruebas",
          minutes: 5,
          goal: "Hacer y guardar capturas de pantalla que prueben lo que pasó.",
          text: [
            "Las pruebas ayudan a que los adultos, las escuelas, las apps y la policía actúen. Antes de bloquear o borrar cualquier cosa, guarda pruebas. KidsHealth sugiere hacer capturas de pantalla o pedirle a tu mamá o tu papá que copie o guarde los mensajes.",
            "Una buena captura de pantalla muestra: el mensaje o la publicación, el nombre de usuario o de la cuenta (y la página del perfil o el enlace, si puedes), y la fecha y la hora. Guarda cada incidente, no solo el peor. Lleva un registro sencillo: fecha, app, qué pasó, quién lo vio. Guarda las capturas en una carpeta privada o envíaselas a un adulto de confianza.",
            "Una excepción importante: si alguien envía o comparte una imagen sexual de una persona joven, NO hagas captura, no guardes ni reenvíes la imagen; eso puede ser ilegal incluso para ti. Guarda el nombre de usuario, el enlace y los mensajes de alrededor, y cuéntaselo de inmediato a un adulto de confianza. Si alguien amenaza con compartir imágenes sexuales a menos que pagues o mandes más, no pagues ni mandes nada; bloquéalo pero no borres los mensajes, y busca ayuda. En Estados Unidos, denúncialo en report.cybertip.org, y usa el servicio gratuito Take It Down (takeitdown.ncmec.org) para ayudar a que se borren imágenes tomadas cuando tenías menos de 18 años."
          ],
          steps: ["Antes de bloquear, haz una captura de cada mensaje o publicación.", "Asegúrate de que muestre el nombre de usuario, la fecha y la hora.", "Guarda el enlace del perfil si puedes.", "Escribe un registro corto: fecha, app, qué pasó.", "Guárdalo en privado o envíaselo a un adulto de confianza."],
          words: [["Pruebas", "lo que demuestra lo que pasó, como capturas de pantalla y mensajes guardados."], ["Captura de pantalla", "una imagen de lo que hay en tu pantalla."], ["Sextorsión", "amenazar con compartir imágenes sexuales de alguien a menos que pague o mande más; es un delito."]],
          slides: [
            { title: "Primero guarda pruebas", bullets: ["Antes de bloquear o borrar", "Las pruebas ayudan a que adultos, escuelas, apps y policía actúen"] },
            { title: "Una buena captura muestra", bullets: ["El mensaje o la publicación", "El nombre de usuario o la cuenta", "La fecha y la hora"] },
            { title: "Lleva un registro", bullets: ["Fecha, app, qué pasó, quién lo vio", "Guárdalo en privado o dáselo a un adulto"] },
            { title: "Imágenes sexuales: otras reglas", bullets: ["No hagas captura ni compartas la imagen", "Guarda usuario, enlace y mensajes; avisa a un adulto", "Denuncia: report.cybertip.org; Take It Down"] }
          ],
          sources: [
            { name: "KidsHealth (Nemours): Ciberacoso, para adolescentes (en inglés)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "NCMEC (Centro Nacional para Niños Desaparecidos y Explotados): Sextorsión (en inglés)", url: "https://www.missingkids.org/theissues/sextortion" },
            { name: "NCMEC: Take It Down", url: "https://takeitdown.ncmec.org/" }
          ],
          tryIt: "Practica hacer una captura de pantalla en tu teléfono de cualquier pantalla inofensiva (como tu app del clima). Busca dónde se guardó. Crea una carpeta o álbum privado llamado \"pruebas\" y anota los pasos para que no se te olviden.",
          youCanNow: "hacer capturas que prueben lo que pasó, llevar un registro y manejar las imágenes sexuales de forma segura contándoselo a un adulto en lugar de guardarlas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Reconocer el ciberacoso y responder de forma segura",
        questions: [
          { q: "¿Cuál es un ejemplo de ciberacoso?", options: ["Un amigo no está de acuerdo contigo una vez sobre una película", "Un grupo sigue publicando en una cuenta falsa para burlarse de un compañero", "Alguien se olvida de responder un mensaje", "Un maestro publica la tarea en línea"], answer: 1, why: "Se repite, busca lastimar y tiene a un grupo detrás." },
          { q: "Alguien publica un comentario cruel sobre ti. ¿Cuál es el mejor primer paso?", options: ["Insultarlo de vuelta", "Reenviárselo a todos", "Crear una cuenta falsa para vengarte", "No responder; alejarte y seguir tu plan de seguridad"], answer: 3, why: "Devolver el golpe casi siempre empeora las cosas; alejarte te mantiene en control." },
          { q: "¿Cuándo debes guardar pruebas?", options: ["Antes de bloquear o borrar cualquier cosa", "Nunca", "Solo después de un mes", "Solo si pasa diez veces"], answer: 0, why: "Cuando bloqueas o borras, las pruebas pueden desaparecer." },
          { q: "¿Qué debe mostrar una buena captura de pantalla?", options: ["Solo tu propia respuesta", "Tu pantalla de inicio", "El mensaje, el nombre de usuario y la fecha y la hora", "Tu contraseña"], answer: 2, why: "Esos detalles prueban quién mandó qué y cuándo." },
          { q: "Alguien te manda una imagen sexual de un compañero de clase. ¿Qué debes hacer?", options: ["Hacerle captura y compartirla como prueba", "Reenviársela a los amigos del compañero", "Publicarla para advertir a otros", "No guardar ni compartir la imagen; anotar el nombre de usuario y contárselo de inmediato a un adulto de confianza"], answer: 3, why: "Guardar o compartir esas imágenes puede ser ilegal; los adultos y los servicios de denuncia pueden actuar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Actuar y buscar apoyo",
      lessons: [
        {
          title: "Bloquear y denunciar en las apps",
          minutes: 5,
          goal: "Encontrar y usar las opciones de bloquear y denunciar en las apps que usas.",
          text: [
            "Casi todas las redes sociales, apps de mensajes y juegos en línea te dejan bloquear, silenciar y denunciar. Bloquear impide que la persona te contacte o vea tus publicaciones. Silenciar la oculta sin que lo sepa. Denunciar le avisa a la empresa que la persona rompió sus reglas; la empresa puede borrar publicaciones o cerrar la cuenta. KidsHealth también sugiere avisarle a tu compañía de teléfono o de correo electrónico cuando el acoso llega por ahí.",
            "Las opciones casi siempre se encuentran tocando los tres puntos o el nombre o perfil de la persona, o manteniendo presionado el mensaje. Los nombres de los menús cambian, así que si no las encuentras, busca \"bloquear\" y \"denunciar\" en la ayuda o el centro de seguridad de la app.",
            "Protege también tu privacidad: haz privadas tus cuentas si puedes, limita quién puede comentarte o escribirte, nunca compartas tus contraseñas (ni con amigos) y piénsalo antes de publicar datos personales como tu escuela, tu dirección o dónde estás en este momento."
          ],
          steps: ["Primero guarda pruebas.", "Abre el perfil de la persona o el mensaje, y luego el menú (muchas veces tres puntos).", "Elige Denunciar y escoge el motivo que corresponda.", "Elige Bloquear (o Silenciar si bloquear empeoraría las cosas).", "Revisa tus ajustes de privacidad: quién puede escribirte, comentarte o ver tus publicaciones."],
          words: [["Bloquear", "impedir que alguien te contacte o vea tus publicaciones."], ["Denunciar", "avisarle a la app o a la empresa que alguien rompió sus reglas."], ["Ajustes de privacidad", "opciones que controlan quién puede ver tus publicaciones y contactarte."]],
          slides: [
            { title: "Tres herramientas", bullets: ["Bloquear: no puede contactarte", "Silenciar: ocultarlo sin que lo sepa", "Denunciar: avisar a la empresa que rompió las reglas"] },
            { title: "Dónde encontrarlas", bullets: ["Toca los tres puntos, el nombre o el perfil", "O mantén presionado el mensaje", "¿No las encuentras? Busca en el centro de seguridad"] },
            { title: "Protege tu privacidad", bullets: ["Cuenta privada si puedes", "Limita quién puede escribirte o comentarte", "Nunca compartas contraseñas, ni con amigos"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Ciberacoso, para adolescentes (en inglés)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "En las dos apps que más usas, encuentra (pero no uses) las opciones de bloquear y denunciar una cuenta. Luego revisa un ajuste de privacidad en cada app, como quién puede escribirte, y cámbialo si quieres.",
          youCanNow: "encontrar y usar bloquear, silenciar y denunciar en tus apps y reforzar tus ajustes de privacidad."
        },
        {
          title: "Contarle a un adulto de confianza, a la escuela y cuándo llamar a la policía",
          minutes: 6,
          goal: "Contarle a un adulto de confianza lo que pasa y saber cuándo va a la escuela o a la policía.",
          text: [
            "Muchos jóvenes no se lo cuentan a nadie porque temen que las cosas empeoren, que les quiten el teléfono, o porque sienten vergüenza. Pero los adultos pueden hacer cosas que tú no puedes: hablar con la escuela, contactar a la app o ir a la policía. KidsHealth dice que sigas hablando hasta encontrar a alguien que te ayude.",
            "Los adultos de confianza incluyen a tu mamá, tu papá o tu tutor, otro familiar, un maestro, un consejero escolar, un entrenador, un mentor o un líder juvenil. Empieza de forma sencilla: \"Alguien me sigue mandando mensajes crueles y no sé qué hacer. ¿Me puedes ayudar? Guardé capturas de pantalla.\" Si el primer adulto no te ayuda, cuéntaselo a otro. La mayoría de las escuelas tienen reglas contra el acoso, sobre todo cuando hay estudiantes involucrados; un consejero escolar o el director pueden actuar.",
            "Ve a la policía, con un adulto, cuando haya amenazas de violencia, imágenes o mensajes sexuales, fotos o videos tomados en un lugar privado (como un baño o un vestuario), acecho, u odio por quién eres. StopBullying.gov explica cuándo denunciar a la policía y las leyes sobre acoso de tu estado. Si alguien está en peligro inmediato, llama al 911 (o al número de emergencias de tu país). Si el acoso te deja sin esperanza o pensando en hacerte daño, díselo ahora a un adulto; en Estados Unidos, llama o envía un mensaje de texto al 988, donde también hay ayuda en español."
          ],
          steps: ["Elige a un adulto de confianza.", "Cuéntale lo que pasó y muéstrale tus pruebas.", "Pídele que te ayude a contactar a la escuela si hay estudiantes involucrados.", "Ve a la policía con un adulto si hay amenazas, imágenes sexuales, acecho u odio.", "Peligro ahora: llama al 911. Sin esperanza: llama o envía un texto al 988."],
          words: [["Adulto de confianza", "una persona adulta con quien te sientes seguro y que puede ayudarte, como tu mamá o tu papá, un maestro, un consejero o un entrenador."], ["Acecho", "seguir, vigilar o contactar a alguien una y otra vez de una forma que le da miedo."]],
          slides: [
            { title: "Por qué contárselo a un adulto", bullets: ["Puede contactar a la escuela, la app o la policía", "Sigue hablando hasta que alguien te ayude"] },
            { title: "A quién y cómo", bullets: ["Mamá o papá, maestro, consejero, entrenador, mentor", "\"Alguien me sigue mandando mensajes crueles.\"", "Muestra tus capturas de pantalla"] },
            { title: "Cuándo llamar a la policía", bullets: ["Amenazas de violencia", "Imágenes o mensajes sexuales", "Fotos en lugares privados, acecho, odio"] },
            { title: "Ayuda urgente", bullets: ["Peligro ahora: llama al 911", "Sin esperanza: llama o envía un texto al 988 (EE. UU., en español)"] }
          ],
          sources: [
            { name: "StopBullying.gov: Cómo denunciar el ciberacoso (en inglés)", url: "https://www.stopbullying.gov/cyberbullying/how-to-report" },
            { name: "StopBullying.gov: Leyes, políticas y reglamentos (en inglés)", url: "https://www.stopbullying.gov/resources/laws" },
            { name: "KidsHealth (Nemours): Ciberacoso, para adolescentes (en inglés)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "Línea 988 de Prevención del Suicidio y Crisis", url: "https://988lifeline.org/" }
          ],
          tryIt: "Escribe los nombres de dos adultos de confianza y de una persona de la escuela a quienes podrías contárselo. Luego escribe las dos o tres frases exactas que dirías para empezar la conversación.",
          youCanNow: "contárselo a un adulto de confianza con tus pruebas, involucrar a la escuela y saber cuándo es un asunto para la policía o para ayuda de emergencia."
        },
        {
          title: "Defender a otros y hacer tu plan de seguridad",
          minutes: 5,
          goal: "Apoyar a alguien a quien están atacando y escribir tu propio plan de seguridad.",
          text: [
            "La mayoría del ciberacoso tiene público. Un espectador solo mira. Alguien que defiende ayuda. No tienes que enfrentar al acosador en público para ayudar; muchas veces la ayuda más segura es discreta.",
            "Formas de defender: no le des me gusta, no compartas ni comentes la publicación hiriente; denúnciala; mándale a la persona atacada un mensaje privado (\"Vi eso. No está bien. ¿Estás bien?\"); invítala a salir o a sentarse contigo; ayúdala a guardar pruebas y a contárselo a un adulto de confianza. Si ves amenazas o señales de que podría hacerse daño, díselo de inmediato a un adulto.",
            "Ahora junta todo en tu propio plan, para que sepas exactamente qué hacer si te pasa a ti o a un amigo."
          ],
          steps: ["No le des me gusta, no compartas ni comentes la publicación.", "Denúnciala en la app.", "Mándale a la persona atacada un mensaje privado de apoyo.", "Ayúdala a guardar pruebas y a contárselo a un adulto de confianza.", "Escribe tu propio plan de seguridad."],
          words: [["Espectador", "alguien que ve el acoso pero no hace nada."], ["Defensor", "alguien que ve el acoso y ayuda de forma segura a la persona atacada."]],
          slides: [
            { title: "¿Espectador o defensor?", bullets: ["Espectador: solo mira", "Defensor: ayuda de forma segura"] },
            { title: "Formas discretas de ayudar", bullets: ["No le des me gusta ni compartas; denúncialo", "Escríbele: \"No está bien. ¿Estás bien?\"", "Ayúdala a guardar pruebas y avisar a un adulto"] },
            { title: "Tu plan de seguridad", bullets: ["Cómo hacer capturas y dónde guardarlas", "Bloquear y denunciar en tus dos apps principales", "Dos adultos de confianza y qué les dirías"] }
          ],
          tryIt: "Tarea final: escribe tu plan de seguridad contra el ciberacoso: los pasos para hacer capturas y dónde las guardarás, dónde están bloquear y denunciar en tus dos apps principales, dos adultos de confianza y una persona de la escuela con lo que les dirías, cuándo irías a la policía y una forma en que apoyarías a un amigo.",
          youCanNow: "apoyar a un amigo al que están atacando y seguir tu propio plan de seguridad contra el ciberacoso."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Actuar y buscar apoyo",
        questions: [
          { q: "¿Qué hace bloquear a alguien?", options: ["Impide que te contacte o vea tus publicaciones", "Borra su cuenta", "Le manda una advertencia de la policía", "Comparte tus capturas de pantalla"], answer: 0, why: "Bloquear corta su contacto contigo." },
          { q: "No encuentras el botón de denunciar en una app. ¿Qué haces?", options: ["Te rindes", "Publicas tu contraseña", "Buscas \"denunciar\" en la ayuda o el centro de seguridad de la app", "Le preguntas al acosador"], answer: 2, why: "Los nombres de los menús cambian; la ayuda o el centro de seguridad te muestra dónde están." },
          { q: "El primer adulto al que se lo cuentas no te ayuda. ¿Y ahora?", options: ["No volver a contárselo a nadie", "Contárselo a otro adulto de confianza", "Vengarte tú mismo del acosador", "Borrar tus pruebas"], answer: 1, why: "Sigue hablando hasta que alguien te ayude." },
          { q: "¿Qué situación debe ir a la policía, con un adulto?", options: ["Alguien dejó de seguirte", "Un amigo no respondió", "Un compañero no estuvo de acuerdo en un chat de grupo", "Alguien amenaza con hacerte daño"], answer: 3, why: "Las amenazas de violencia son un asunto para la policía." },
          { q: "Ves que se burlan de un compañero en los comentarios. ¿Qué es una buena forma de defenderlo?", options: ["Darle me gusta a la publicación para encajar", "Denunciarla y mandarle al compañero un mensaje privado de apoyo", "Compartirla con más gente", "Agregar tu propio chiste"], answer: 1, why: "Denunciar y dar apoyo discreto ayuda sin extender el ataque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Mantenerte a salvo del ciberacoso",
    questions: [
      { q: "El ciberacoso es:", options: ["Cualquier desacuerdo en línea", "Usar la tecnología para lastimar, avergonzar, amenazar o atacar a alguien", "Olvidarte de responder un mensaje", "Publicar sobre tu fin de semana"], answer: 1, why: "Se trata de lastimar o atacar a alguien por medio de la tecnología." },
      { q: "¿Qué hace que algo sea más probablemente acoso que conflicto?", options: ["Se repite y busca lastimar", "Pasa una vez entre iguales", "Las dos personas están bromeando juntas", "Es sobre resultados deportivos"], answer: 0, why: "El acoso casi siempre es a propósito, se repite y hay una diferencia de poder." },
      { q: "¿Por qué puede sentirse tan difícil escapar del acoso en línea?", options: ["Los teléfonos pesan mucho", "Solo pasa en la escuela", "Puede seguirte hasta tu casa y extenderse rápido", "Siempre es anónimo"], answer: 2, why: "Las publicaciones en línea te alcanzan en cualquier lugar y pueden llegar a mucha gente." },
      { q: "¿Cuál es una diferencia de poder en el acoso?", options: ["Las dos personas tienen la misma edad", "Ninguna conoce a la otra", "Las dos son amigas", "Un grupo que ataca a una sola persona"], answer: 3, why: "Más personas, popularidad o información privada le dan poder al acosador." },
      { q: "Responder con insultos casi siempre:", options: ["Acaba con el acoso", "Empeora las cosas", "Hace que se borre la publicación", "Lo exige la app"], answer: 1, why: "Devolver el golpe muchas veces hace que todo crezca." },
      { q: "¿Por qué no debes reenviarles a tus amigos una publicación hiriente?", options: ["La extiende todavía más", "Cuesta dinero", "Daña tu teléfono", "Es muy lento"], answer: 0, why: "Reenviar pone el contenido hiriente delante de más personas." },
      { q: "Cuando te atacan, ayuda recordar que:", options: ["Te lo merecías", "Nadie puede ayudar", "No es tu culpa", "Debes resolverlo solo"], answer: 2, why: "El acoso habla del comportamiento del acosador, no de tu valor." },
      { q: "¿Qué debes hacer antes de bloquear a alguien?", options: ["Borrar todos los mensajes", "Mandarle tu dirección", "Publicar sobre esa persona", "Guardar pruebas con capturas de pantalla"], answer: 3, why: "Bloquear puede hacer más difícil conseguir las pruebas." },
      { q: "¿Qué detalle es el más importante en una captura de pantalla?", options: ["El nombre de usuario y la fecha y la hora", "El nivel de tu batería", "Tu fondo de pantalla", "El clima"], answer: 0, why: "Quién lo mandó y cuándo prueba lo que pasó." },
      { q: "Alguien amenaza con compartir tus imágenes privadas a menos que le mandes dinero. ¿Qué debes hacer?", options: ["Pagar de inmediato", "Mandar más imágenes", "No pagar; guardar los mensajes, bloquearlo, contárselo a un adulto de confianza y denunciarlo", "Borrar todo y no decir nada"], answer: 2, why: "El NCMEC dice que pagar casi nunca lo detiene; guarda las pruebas y busca ayuda." },
      { q: "En Estados Unidos, ¿dónde puedes denunciar la explotación sexual en línea de una persona joven?", options: ["report.cybertip.org", "Una sección de comentarios cualquiera", "Los mensajes directos del acosador", "En ningún lado"], answer: 0, why: "La CyberTipline, del NCMEC, recibe estas denuncias." },
      { q: "¿Para qué sirve Take It Down (takeitdown.ncmec.org)?", options: ["Para borrar todo tu teléfono", "Para conocer amigos nuevos", "Para pagarle a un chantajista", "Para ayudar a que se borren imágenes sexuales tomadas cuando tenías menos de 18 años"], answer: 3, why: "Es el servicio gratuito del NCMEC para ayudar a borrar ese tipo de imágenes." },
      { q: "Denunciar a alguien en una app significa:", options: ["Llamarlo por teléfono", "Avisarle a la empresa que rompió sus reglas", "Seguirlo de vuelta", "Compartir su publicación"], answer: 1, why: "La empresa puede borrar publicaciones o cerrar la cuenta." },
      { q: "¿Qué paso de privacidad te ayuda a protegerte?", options: ["Compartir tu contraseña con tu mejor amigo", "Publicar la dirección de tu casa", "Limitar quién puede escribirte o comentar tus publicaciones", "Hacer públicas todas tus cuentas"], answer: 2, why: "Limitar el contacto deja fuera a muchos acosadores." },
      { q: "¿Quién es un adulto de confianza?", options: ["Un desconocido que conociste en un juego", "Tu mamá o tu papá, un maestro, un consejero escolar o un entrenador con quien te sientes seguro", "La persona que te acosa", "Una cuenta anónima"], answer: 1, why: "Los adultos de confianza pueden contactar a la escuela, la app o la policía." },
      { q: "¿Qué debes llevar cuando se lo cuentas a un adulto?", options: ["Nada", "Tu contraseña", "Tus pruebas: las capturas de pantalla y tu registro", "Un regalo"], answer: 2, why: "Las pruebas le ayudan a actuar rápido." },
      { q: "¿Cuándo debe ir el ciberacoso a la policía?", options: ["Cuando alguien sale de un chat de grupo", "Cuando alguien publica una mala reseña de un juego", "Cuando alguien no está de acuerdo contigo", "Cuando hay amenazas, imágenes sexuales, acecho u odio"], answer: 3, why: "Pueden ser delitos; StopBullying.gov explica cuándo denunciar a la policía." },
      { q: "En Estados Unidos, si el acoso te deja sin esperanza, puedes llamar o enviar un mensaje de texto al:", options: ["988", "411", "611", "211 solo los fines de semana"], answer: 0, why: "El 988 es la Línea de Prevención del Suicidio y Crisis, gratis, abierta las 24 horas y con ayuda en español. Fuera de Estados Unidos, usa la línea de crisis o el número de emergencias de tu país." },
      { q: "Un defensor es alguien que:", options: ["Mira y no hace nada", "Ayuda de forma segura a la persona atacada", "Se une al ataque", "Lo graba para tener vistas"], answer: 1, why: "Los defensores ayudan, muchas veces de forma discreta." },
      { q: "¿Cuál es una forma discreta y segura de ayudar a un amigo al que acosan en línea?", options: ["Publicar sus mensajes privados", "Comentar algo más cruel", "Darle me gusta a la publicación", "Escribirle en privado y ayudarlo a contárselo a un adulto"], answer: 3, why: "El apoyo en privado y buscar a un adulto ayudan sin extender el ataque." }
    ]
  }
};
