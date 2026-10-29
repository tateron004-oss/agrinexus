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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes que usan teléfonos, redes sociales, chats de grupo y juegos en línea, y las madres, padres, entrenadores, mentores y trabajadores juveniles que los apoyan.",
    startingPoint: "Usan apps y juegos todos los días y han visto o vivido mensajes crueles en internet. Muchos responden con enojo, reenvían publicaciones hirientes, borran los mensajes antes de guardar pruebas o no se lo cuentan a un adulto.",
    gap: "El ciberacoso puede seguir a los jóvenes hasta su casa, difundirse rápido y dañar su ánimo, su seguridad y sus estudios. Saber responder con calma, guardar pruebas, bloquear y denunciar, contárselo al adulto correcto, reconocer cuándo es un asunto de la policía y apoyar a un amigo les ayuda a estar seguros y a no enfrentarlo solos.",
    constraints: [
      "Tema emocionalmente sensible: a quienes se sienten en peligro o sin esperanza se les orienta hacia un adulto de confianza, la línea 988 en Estados Unidos o el 911 en una emergencia",
      "Las imágenes sexuales de personas jóvenes nunca se guardan ni se reenvían, ni siquiera como prueba",
      "Los menús de las apps cambian; se busca en el centro de ayuda o de seguridad de cada app",
      "Privacidad: en clase no se comparte contenido hiriente real",
      "Lecciones cortas y palabras sencillas para adolescentes y los adultos que los apoyan"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con situaciones en internet", action: "identificar cuáles son ciberacoso y cuáles son un conflicto normal", standard: "explicando por qué con la intención, la repetición y el poder" },
    { id: "O2", condition: "Cuando alguien te manda un mensaje hiriente", action: "alejarte en lugar de responder, devolver el golpe o reenviar la publicación", standard: "nombrando tres cosas que no vas a hacer y los siguientes pasos que vas a dar" },
    { id: "O3", condition: "Cuando hay ciberacoso", action: "guardar pruebas con capturas de pantalla y un registro sencillo antes de bloquear nada", standard: "mostrando el nombre de usuario, la fecha y la hora, y sin guardar ni reenviar nunca imágenes sexuales de una persona joven" },
    { id: "O4", condition: "En las dos apps que más usas", action: "encontrar las opciones de bloquear y denunciar y revisar tu configuración de privacidad", standard: "sin ayuda" },
    { id: "O5", condition: "Cuando a ti o a un amigo lo están acosando en internet", action: "contárselo a un adulto de confianza con tus pruebas y decidir cuándo va a la escuela o a la policía", standard: "nombrando a dos adultos de confianza y a una persona de la escuela" },
    { id: "O6", condition: "Cuando están atacando a otra persona", action: "apoyarla como defensor y escribir tu propio plan de seguridad", standard: "con todas las partes del plan" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Reconocer el ciberacoso y responder de forma segura",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "reconocer el ciberacoso y distinguirlo de un desacuerdo normal.",
          quickCheck: [
            { objective: "O1", q: "¿Qué suele hacer que algo sea ciberacoso y no un conflicto?", options: ["Busca lastimar, suele repetirse y muchas veces hay una diferencia de poder", "Dos amigos no están de acuerdo una vez", "Alguien publica una opinión que no te gusta", "Una partida termina en derrota"], answer: 0, why: "El acoso se trata de lastimar a alguien a propósito, muchas veces una y otra vez, y muchas veces con una diferencia de poder." },
            { objective: "O1", q: "A un compañero de clase lo dejan fuera de un chat de grupo a propósito, cada semana, para lastimarlo. ¿Cómo lo llamas?", options: ["Un conflicto normal", "Nada de qué preocuparse", "Ciberacoso", "Un juego"], answer: 2, why: "Dejar fuera a alguien a propósito para lastimarlo, una y otra vez, es una forma de ciberacoso." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "mantener la calma, no devolver el golpe ni extender el ataque, y pasar a un plan seguro.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué es mala idea responder con insultos?", options: ["Siempre termina con el acoso", "Casi siempre lo empeora y te puede hacer ver como parte del problema", "Las apps prohíben los insultos automáticamente", "Guarda pruebas"], answer: 1, why: "Devolver el golpe casi siempre empeora las cosas." },
            { objective: "O2", q: "Una publicación hiriente sobre ti está circulando. Un amigo te pide que se la reenvíes para verla. ¿Qué haces?", options: ["Se la reenvías a unos pocos amigos", "La publicas en tu propia página", "Creas una cuenta falsa para responder", "No la reenvías; guardas pruebas y sigues tu plan"], answer: 3, why: "Reenviar una publicación hiriente la difunde todavía más." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "hacer capturas que prueben lo que pasó, llevar un registro y manejar las imágenes sexuales de forma segura contándoselo a un adulto en lugar de guardarlas.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un buen registro de pruebas?", options: ["Una lista con la fecha, la app, lo que pasó y quién lo vio", "El historial de llamadas de tu teléfono", "Una lista de tus contraseñas", "Una copia de la dirección de quien te acosa"], answer: 0, why: "Un registro sencillo ayuda a que los adultos, la escuela, las apps y la policía puedan actuar." },
            { objective: "O3", q: "Estás por bloquear a alguien que te mandó amenazas. ¿Qué haces primero?", options: ["Borras todos los mensajes", "Respondes una última vez", "Haces capturas de pantalla de los mensajes que muestren el nombre de usuario, la fecha y la hora", "Se los reenvías a toda la clase"], answer: 2, why: "Guarda pruebas antes de bloquear o borrar cualquier cosa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Reconocer el ciberacoso y responder de forma segura",
        questions: [
          { objective: "O1", q: "¿Cuál es un ejemplo de ciberacoso?", options: ["Un amigo no está de acuerdo contigo una vez sobre una película", "Un grupo sigue publicando en una cuenta falsa para burlarse de un compañero", "Alguien se olvida de responder un mensaje", "Un maestro publica la tarea en línea"], answer: 1, why: "Se repite, busca lastimar y tiene a un grupo detrás." },
          { objective: "O2", q: "Alguien publica un comentario cruel sobre ti. ¿Cuál es el mejor primer paso?", options: ["Insultarlo de vuelta", "Reenviárselo a todos", "Crear una cuenta falsa para vengarte", "No responder; alejarte y seguir tu plan de seguridad"], answer: 3, why: "Devolver el golpe casi siempre empeora las cosas; alejarte te mantiene en control." },
          { objective: "O3", q: "¿Cuándo debes guardar pruebas?", options: ["Antes de bloquear o borrar cualquier cosa", "Nunca", "Solo después de un mes", "Solo si pasa diez veces"], answer: 0, why: "Cuando bloqueas o borras, las pruebas pueden desaparecer." },
          { objective: "O3", q: "¿Qué debe mostrar una buena captura de pantalla?", options: ["Solo tu propia respuesta", "Tu pantalla de inicio", "El mensaje, el nombre de usuario y la fecha y la hora", "Tu contraseña"], answer: 2, why: "Esos detalles prueban quién mandó qué y cuándo." },
          { objective: "O3", q: "Alguien te manda una imagen sexual de un compañero de clase. ¿Qué debes hacer?", options: ["Hacerle captura y compartirla como prueba", "Reenviársela a los amigos del compañero", "Publicarla para advertir a otros", "No guardar ni compartir la imagen; anotar el nombre de usuario y contárselo de inmediato a un adulto de confianza"], answer: 3, why: "Guardar o compartir esas imágenes puede ser ilegal; los adultos y los servicios de denuncia pueden actuar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Actuar y buscar apoyo",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "encontrar y usar bloquear, silenciar y denunciar en tus apps y reforzar tus ajustes de privacidad.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace silenciar a alguien?", options: ["Borra su cuenta", "Esconde sus publicaciones sin avisarle", "Lo denuncia a la policía", "Le deja ver más de tus publicaciones"], answer: 1, why: "Silenciar esconde a la persona sin avisarle; bloquear hace que no te pueda contactar." },
            { objective: "O4", q: "Unos desconocidos siguen comentando tus publicaciones. ¿Qué paso de privacidad ayuda más?", options: ["Compartir tu contraseña con un amigo", "Publicar el nombre de tu escuela", "Activar que se comparta tu ubicación", "Limitar quién puede comentar o mandarte mensajes"], answer: 3, why: "Limitar quién te puede mandar mensajes o comentar te protege." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "contárselo a un adulto de confianza con tus pruebas, involucrar a la escuela y saber cuándo es un asunto para la policía o para ayuda de emergencia.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál de estas personas es un adulto de confianza?", options: ["Un orientador escolar con quien te sientes seguro", "Un desconocido en internet que te ofrece ayuda", "La persona que te está acosando", "Cualquiera en una sección de comentarios"], answer: 0, why: "Los adultos de confianza incluyen a tu madre, padre o tutor, un familiar, un maestro, un orientador, un entrenador, un mentor o un líder juvenil." },
            { objective: "O5", q: "Alguien te manda mensajes amenazando con lastimarte después de clases. ¿Qué haces?", options: ["Esperas a ver si para", "Respondes con una amenaza", "Se lo cuentas ya a un adulto de confianza y van juntos a la policía", "Borras los mensajes"], answer: 2, why: "Las amenazas de violencia se llevan a la policía, con un adulto." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "apoyar a un amigo al que están atacando y seguir tu propio plan de seguridad contra el ciberacoso.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es la diferencia entre un espectador y un defensor?", options: ["No hay diferencia", "Un espectador mira; un defensor ayuda", "Un defensor se une al acoso", "Un espectador denuncia"], answer: 1, why: "Casi todo el ciberacoso tiene público; los defensores ayudan a la persona atacada." },
            { objective: "O6", q: "La publicación de un amigo dice que tiene ganas de hacerse daño después de que lo acosaron. ¿Qué haces?", options: ["Le das me gusta a la publicación", "Esperas hasta mañana", "Lo guardas en secreto", "Se lo cuentas de inmediato a un adulto de confianza"], answer: 3, why: "Las señales de que alguien podría hacerse daño necesitan a un adulto de inmediato." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Actuar y buscar apoyo",
        questions: [
          { objective: "O4", q: "¿Qué hace bloquear a alguien?", options: ["Impide que te contacte o vea tus publicaciones", "Borra su cuenta", "Le manda una advertencia de la policía", "Comparte tus capturas de pantalla"], answer: 0, why: "Bloquear corta su contacto contigo." },
          { objective: "O4", q: "No encuentras el botón de denunciar en una app. ¿Qué haces?", options: ["Te rindes", "Publicas tu contraseña", "Buscas \"denunciar\" en la ayuda o el centro de seguridad de la app", "Le preguntas al acosador"], answer: 2, why: "Los nombres de los menús cambian; la ayuda o el centro de seguridad te muestra dónde están." },
          { objective: "O5", q: "El primer adulto al que se lo cuentas no te ayuda. ¿Y ahora?", options: ["No volver a contárselo a nadie", "Contárselo a otro adulto de confianza", "Vengarte tú mismo del acosador", "Borrar tus pruebas"], answer: 1, why: "Sigue hablando hasta que alguien te ayude." },
          { objective: "O5", q: "¿Qué situación debe ir a la policía, con un adulto?", options: ["Alguien dejó de seguirte", "Un amigo no respondió", "Un compañero no estuvo de acuerdo en un chat de grupo", "Alguien amenaza con hacerte daño"], answer: 3, why: "Las amenazas de violencia son un asunto para la policía." },
          { objective: "O6", q: "Ves que se burlan de un compañero en los comentarios. ¿Qué es una buena forma de defenderlo?", options: ["Darle me gusta a la publicación para encajar", "Denunciarla y mandarle al compañero un mensaje privado de apoyo", "Compartirla con más gente", "Agregar tu propio chiste"], answer: 1, why: "Denunciar y dar apoyo discreto ayuda sin extender el ataque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Mantenerte a salvo del ciberacoso",
    questions: [
      { objective: "O1", q: "El ciberacoso es:", options: ["Cualquier desacuerdo en línea", "Usar la tecnología para lastimar, avergonzar, amenazar o atacar a alguien", "Olvidarte de responder un mensaje", "Publicar sobre tu fin de semana"], answer: 1, why: "Se trata de lastimar o atacar a alguien por medio de la tecnología." },
      { objective: "O1", q: "¿Qué hace que algo sea más probablemente acoso que conflicto?", options: ["Se repite y busca lastimar", "Pasa una vez entre iguales", "Las dos personas están bromeando juntas", "Es sobre resultados deportivos"], answer: 0, why: "El acoso casi siempre es a propósito, se repite y hay una diferencia de poder." },
      { objective: "O1", q: "¿Por qué puede sentirse tan difícil escapar del acoso en línea?", options: ["Los teléfonos pesan mucho", "Solo pasa en la escuela", "Puede seguirte hasta tu casa y extenderse rápido", "Siempre es anónimo"], answer: 2, why: "Las publicaciones en línea te alcanzan en cualquier lugar y pueden llegar a mucha gente." },
      { objective: "O1", q: "¿Cuál es una diferencia de poder en el acoso?", options: ["Las dos personas tienen la misma edad", "Ninguna conoce a la otra", "Las dos son amigas", "Un grupo que ataca a una sola persona"], answer: 3, why: "Más personas, popularidad o información privada le dan poder al acosador." },
      { objective: "O2", q: "Responder con insultos casi siempre:", options: ["Acaba con el acoso", "Empeora las cosas", "Hace que se borre la publicación", "Lo exige la app"], answer: 1, why: "Devolver el golpe muchas veces hace que todo crezca." },
      { objective: "O2", q: "¿Por qué no debes reenviarles a tus amigos una publicación hiriente?", options: ["La extiende todavía más", "Cuesta dinero", "Daña tu teléfono", "Es muy lento"], answer: 0, why: "Reenviar pone el contenido hiriente delante de más personas." },
      { objective: "O2", q: "Cuando te atacan, ayuda recordar que:", options: ["Te lo merecías", "Nadie puede ayudar", "No es tu culpa", "Debes resolverlo solo"], answer: 2, why: "El acoso habla del comportamiento del acosador, no de tu valor." },
      { objective: "O3", q: "¿Qué debes hacer antes de bloquear a alguien?", options: ["Borrar todos los mensajes", "Mandarle tu dirección", "Publicar sobre esa persona", "Guardar pruebas con capturas de pantalla"], answer: 3, why: "Bloquear puede hacer más difícil conseguir las pruebas." },
      { objective: "O3", q: "¿Qué detalle es el más importante en una captura de pantalla?", options: ["El nombre de usuario y la fecha y la hora", "El nivel de tu batería", "Tu fondo de pantalla", "El clima"], answer: 0, why: "Quién lo mandó y cuándo prueba lo que pasó." },
      { objective: "O3", q: "Alguien amenaza con compartir tus imágenes privadas a menos que le mandes dinero. ¿Qué debes hacer?", options: ["Pagar de inmediato", "Mandar más imágenes", "No pagar; guardar los mensajes, bloquearlo, contárselo a un adulto de confianza y denunciarlo", "Borrar todo y no decir nada"], answer: 2, why: "El NCMEC dice que pagar casi nunca lo detiene; guarda las pruebas y busca ayuda." },
      { objective: "O3", q: "En Estados Unidos, ¿dónde puedes denunciar la explotación sexual en línea de una persona joven?", options: ["report.cybertip.org", "Una sección de comentarios cualquiera", "Los mensajes directos del acosador", "En ningún lado"], answer: 0, why: "La CyberTipline, del NCMEC, recibe estas denuncias." },
      { objective: "O3", q: "¿Para qué sirve Take It Down (takeitdown.ncmec.org)?", options: ["Para borrar todo tu teléfono", "Para conocer amigos nuevos", "Para pagarle a un chantajista", "Para ayudar a que se borren imágenes sexuales tomadas cuando tenías menos de 18 años"], answer: 3, why: "Es el servicio gratuito del NCMEC para ayudar a borrar ese tipo de imágenes." },
      { objective: "O4", q: "Denunciar a alguien en una app significa:", options: ["Llamarlo por teléfono", "Avisarle a la empresa que rompió sus reglas", "Seguirlo de vuelta", "Compartir su publicación"], answer: 1, why: "La empresa puede borrar publicaciones o cerrar la cuenta." },
      { objective: "O4", q: "¿Qué paso de privacidad te ayuda a protegerte?", options: ["Compartir tu contraseña con tu mejor amigo", "Publicar la dirección de tu casa", "Limitar quién puede escribirte o comentar tus publicaciones", "Hacer públicas todas tus cuentas"], answer: 2, why: "Limitar el contacto deja fuera a muchos acosadores." },
      { objective: "O5", q: "¿Quién es un adulto de confianza?", options: ["Un desconocido que conociste en un juego", "Tu mamá o tu papá, un maestro, un consejero escolar o un entrenador con quien te sientes seguro", "La persona que te acosa", "Una cuenta anónima"], answer: 1, why: "Los adultos de confianza pueden contactar a la escuela, la app o la policía." },
      { objective: "O5", q: "¿Qué debes llevar cuando se lo cuentas a un adulto?", options: ["Nada", "Tu contraseña", "Tus pruebas: las capturas de pantalla y tu registro", "Un regalo"], answer: 2, why: "Las pruebas le ayudan a actuar rápido." },
      { objective: "O5", q: "¿Cuándo debe ir el ciberacoso a la policía?", options: ["Cuando alguien sale de un chat de grupo", "Cuando alguien publica una mala reseña de un juego", "Cuando alguien no está de acuerdo contigo", "Cuando hay amenazas, imágenes sexuales, acecho u odio"], answer: 3, why: "Pueden ser delitos; StopBullying.gov explica cuándo denunciar a la policía." },
      { objective: "O5", q: "En Estados Unidos, si el acoso te deja sin esperanza, puedes llamar o enviar un mensaje de texto al:", options: ["988", "411", "611", "211 solo los fines de semana"], answer: 0, why: "El 988 es la Línea de Prevención del Suicidio y Crisis, gratis, abierta las 24 horas y con ayuda en español. Fuera de Estados Unidos, usa la línea de crisis o el número de emergencias de tu país." },
      { objective: "O6", q: "Un defensor es alguien que:", options: ["Mira y no hace nada", "Ayuda de forma segura a la persona atacada", "Se une al ataque", "Lo graba para tener vistas"], answer: 1, why: "Los defensores ayudan, muchas veces de forma discreta." },
      { objective: "O6", q: "¿Cuál es una forma discreta y segura de ayudar a un amigo al que acosan en línea?", options: ["Publicar sus mensajes privados", "Comentar algo más cruel", "Darle me gusta a la publicación", "Escribirle en privado y ayudarlo a contárselo a un adulto"], answer: 3, why: "El apoyo en privado y buscar a un adulto ayudan sin extender el ataque." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      4,
      7,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Guardar pruebas",
        objective: "O3",
        notYet: "No hay pasos para hacer capturas de pantalla, o no hay dónde guardarlas.",
        meets: "Pasos para hacer capturas que muestren el nombre de usuario, la fecha y la hora, y un lugar privado para guardarlas.",
        exceeds: "Además incluye un registro sencillo y la regla de nunca guardar imágenes sexuales."
      },
      {
        name: "Bloquear y denunciar",
        objective: "O4",
        notYet: "No encontró las opciones de bloquear y denunciar en las dos apps principales.",
        meets: "Dónde están bloquear y denunciar en las dos apps, y una opción de privacidad revisada.",
        exceeds: "Además dice cuándo silenciar en lugar de bloquear."
      },
      {
        name: "A quién contárselo",
        objective: "O5",
        notYet: "No nombra adultos, o no sabe qué decir.",
        meets: "Dos adultos de confianza y una persona de la escuela, con las palabras para empezar la conversación.",
        exceeds: "Además dice qué hacer si el primer adulto no ayuda."
      },
      {
        name: "Cuándo ir a la policía",
        objective: "O5",
        notYet: "Falta o está mal.",
        meets: "Las amenazas, las imágenes sexuales, el acecho o el odio van a la policía con un adulto; el peligro inmediato significa llamar al 911.",
        exceeds: "Además nombra la línea 988 para cuando alguien se siente sin esperanza y dónde denunciar la explotación en internet."
      },
      {
        name: "Apoyar a un amigo",
        objective: "O6",
        notYet: "No hay acción de defensor, o la acción difunde la publicación.",
        meets: "Una forma segura de apoyar a un amigo, como un mensaje privado y ayudarle a contárselo a un adulto.",
        exceeds: "Dos o más acciones seguras, incluida denunciar la publicación."
      }
    ]
  },
  evaluation: {
    results: [
      "Jóvenes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Jóvenes que en el seguimiento a los 30 días dicen haber bloqueado, denunciado o contado a un adulto un caso de acoso en internet",
      "Jóvenes que dicen haber apoyado a un amigo que fue atacado (encuesta de seguimiento)",
      "Escuelas o programas juveniles que informan que más estudiantes se acercan con pruebas guardadas"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "El teléfono o dispositivo propio de la persona para encontrar las opciones de bloquear, denunciar y privacidad",
      "Papel o una app de notas privada para el plan de seguridad",
      "Una lista de contactos de confianza locales: orientador escolar, personal del programa, líneas de crisis",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Nunca pidas que compartan en clase mensajes o imágenes hirientes reales; usa los ejemplos inventados del curso.",
      "Antes de empezar, di con quién pueden hablar en privado, y comparte la línea 988 y los números de emergencia locales.",
      "Prepárate para seguir las reglas de denuncia y protección de tu organización si alguien cuenta que sufre acoso, amenazas o que hay imágenes sexuales.",
      "Insiste en que las imágenes sexuales de personas jóvenes nunca se guardan ni se reenvían, ni siquiera como prueba.",
      "Deja que cada persona mantenga privado su plan de seguridad; revísalo uno a uno con la rúbrica si está de acuerdo."
    ]
  }
};
