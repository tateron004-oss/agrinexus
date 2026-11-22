"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-sports-management-marketing.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-sports-management-marketing-es",
  lang: "es",
  translationOf: "athletes-sports-management-marketing",
  category: "Athletes",
  name: "Marketing para la gestión deportiva",
  skills: "Definir la oferta y el público de un evento, Escribir un plan de promoción del evento en una página, Armar un paquete de patrocinio local, Escribir con IA un correo para proponer un patrocinio, Registrar la asistencia y los resultados para los patrocinadores",
  outcome: "planear el marketing de un evento deportivo, un campamento o la temporada de un equipo de verdad: un plan de promoción en una página, un paquete de patrocinio local de tres niveles, un correo de propuesta a un patrocinador hecho con IA y un informe sencillo de resultados para los patrocinadores.",
  about: [
    "Este curso es para entrenadores, encargados de equipo, personal deportivo, organizadores de clubes y deportistas que organizan campamentos, torneos, actividades para recaudar fondos o la temporada de un equipo, y necesitan que la gente vaya y que los negocios los apoyen.",
    "Aprenderás lo básico del marketing deportivo desde el lado de quien organiza: para quién es el evento, cómo llegar a esas personas, cómo armar un paquete de patrocinio al que un negocio local pueda decir que sí y cómo informar los resultados para que los patrocinadores vuelvan.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Las escuelas y las ligas tienen sus propias reglas sobre patrocinadores, logotipos y recaudación de fondos, así que consulta con tu director deportivo o tu liga antes de empezar."
  ],
  finalTask: "Elige un evento real o planeado (un campamento, un torneo, una actividad para recaudar fondos o un partido de local). Escribe un plan de promoción en una página, un paquete de patrocinio de tres niveles y un correo de propuesta para un negocio local hecho con IA y editado con tus propias palabras. Consigue la aprobación de tu director deportivo o de tu liga, y luego haz la lista de los tres números que les informarás a los patrocinadores después.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Entrenadores, encargados de equipos, personal deportivo, organizadores de clubes y deportistas que organizan campamentos, torneos, eventos para recaudar fondos o la temporada de un equipo, y necesitan que la gente vaya y que los negocios apoyen.",
    startingPoint: "Conocen su deporte y su comunidad y usan redes sociales y correo electrónico. La mayoría promociona los eventos con una publicación o un volante de último momento, nunca ha escrito un paquete de patrocinio y no les informa los resultados a los patrocinadores.",
    gap: "Sin un plan, a los eventos va poca gente y a los patrocinadores locales se les pide de una forma a la que es fácil decir que no, o nunca se les vuelve a pedir. Un plan de promoción sencillo, un paquete de patrocinio claro, una propuesta personal y un informe de resultados honesto atraen a las familias y hacen que los patrocinadores vuelvan.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Un teléfono o una computadora con un asistente de IA gratuito y Canva; solo herramientas gratuitas",
      "Unos 60 minutos de lecciones más tiempo para planear un evento real",
      "Aprobación de la escuela, la liga o el club para las fechas, los patrocinadores, los logotipos y las fotos; autorización de imagen de los padres para menores de edad",
      "El dinero de los patrocinadores pasa solo por el proceso oficial de la escuela o el club"
    ],
    prerequisites: "Ninguno. \"Herramientas de IA para deportistas\" ayuda si nunca has usado Canva."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante un evento deportivo real o planeado", action: "escribir una oferta en una frase y nombrar al público que decide ir o pagar", standard: "con la fecha, el lugar, el costo y las aprobaciones confirmados con tu director deportivo o tu liga" },
    { id: "O2", condition: "Usando tu oferta y un asistente de IA", action: "escribir un plan de promoción de una página con canales, un mensaje principal y un calendario", standard: "con tres a cinco canales, un calendario para anunciar, recordar, la última semana y agradecer, y una persona asignada a cada tarea" },
    { id: "O3", condition: "Usando un asistente de IA y una plantilla de Canva", action: "crear un volante y una publicación para redes con los cinco datos del evento", standard: "revisados por otra persona y siguiendo las reglas de tu escuela sobre logotipos y fotos de menores de edad" },
    { id: "O4", condition: "Según lo que tu escuela te permite ofrecer", action: "armar un paquete de patrocinio local de tres niveles", standard: "con los precios revisados con tu director deportivo, solo promesas que puedes cumplir y el dinero por el proceso oficial" },
    { id: "O5", condition: "Usando un borrador de la IA", action: "escribir un correo de propuesta de patrocinio para un negocio local", standard: "de menos de 150 palabras, con una razón verdadera y concreta por la que lo elegiste, enviado desde una cuenta oficial y con un solo seguimiento" },
    { id: "O6", condition: "Después de tu evento", action: "crear un informe de agradecimiento de una página para los patrocinadores con tres números, una foto y una cita", standard: "con cada número revisado y el informe enviado en un plazo de dos semanas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Hacer marketing del evento",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué ofreces y a quién",
          minutes: 5,
          goal: "Escribir en una frase la oferta y el público de tu evento.",
          text: [
            "Todo evento es una oferta: algo que la gente recibe a cambio de su tiempo o su dinero. Un campamento para niños ofrece habilidades y diversión en un lugar seguro. Un partido de local ofrece entretenimiento y comunidad. Un torneo ofrece competencia para los equipos.",
            "Escribe tu oferta en una frase: “Un campamento de fútbol de dos días para principiantes de 6 a 10 años, dirigido por los jugadores de nuestro equipo principal, con camiseta y meriendas, el 12 y 13 de junio.” Luego nombra al público: ¿quién decide ir o pagar? En un campamento para niños, son los padres.",
            "Antes de promocionar cualquier cosa, confirma lo básico con tu director deportivo o tu liga: fecha, lugar, costo, seguro, seguridad y cualquier aprobación necesaria."
          ],
          steps: ["Nombra el evento.", "Escribe lo que recibe la gente.", "Nombra quién decide ir o pagar.", "Confirma la fecha, el lugar, el costo y las aprobaciones con tu director deportivo o tu liga."],
          words: [["Oferta", "lo que la gente recibe a cambio de su tiempo o su dinero."], ["Director deportivo", "la persona que dirige el programa deportivo de una escuela y aprueba los eventos."]],
          slides: [
            { title: "Todo evento es una oferta", bullets: ["Campamento: habilidades y diversión, con seguridad", "Partido de local: entretenimiento y comunidad", "Torneo: competencia"] },
            { title: "Oferta en una frase", bullets: ["Para quién es y qué recibe", "Cuándo y dónde"] },
            { title: "Comprueba primero", bullets: ["Fecha, lugar, costo", "Seguro, seguridad, aprobaciones"] }
          ],
          tryIt: "Elige un evento real o planeado. Escribe su oferta en una frase y nombra al público que decide ir o pagar.",
          youCanNow: "describir en una frase la oferta de un evento y el público que decide.",
          quickCheck: [
            { objective: "O1", q: "¿Qué les ofrece un partido de local a las personas que van?", options: ["Entretenimiento y comunidad", "Un paquete de patrocinio", "Un seguro gratis", "Un plan de entrenamiento"], answer: 0, why: "Cada evento es una oferta; un partido de local ofrece entretenimiento y comunidad." },
            { objective: "O1", q: "Quieres organizar un torneo el mes que viene. ¿Qué haces antes de cualquier promoción?", options: ["Publicar la fecha en redes sociales", "Imprimir volantes", "Confirmar la fecha, el lugar, el costo, el seguro y las aprobaciones con tu director deportivo o tu liga", "Escribirles a los patrocinadores"], answer: 2, why: "Confirma lo básico y las aprobaciones antes de promocionar cualquier cosa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "El plan de promoción en una página",
          minutes: 5,
          goal: "Escribir un plan de una página con canales, mensajes y un calendario.",
          text: [
            "Un plan de promoción responde: ¿dónde se va a enterar el público, qué vamos a decir y cuándo? Mantenlo en una sola página.",
            "A los eventos deportivos locales suele irles mejor con una mezcla: boletines de la escuela o el club, las redes sociales del equipo, grupos locales de Facebook, volantes en escuelas, gimnasios y tiendas, el boca a boca de jugadores y familias, y las noticias locales o los calendarios de la comunidad.",
            "Usa un calendario sencillo: anuncia unas cuatro a seis semanas antes, recuerda dos semanas antes, insiste fuerte la última semana y publica agradecimientos después. Un asistente de IA puede convertir tus notas en una tabla ordenada."
          ],
          steps: ["Haz una lista de tres a cinco canales.", "Escribe un mensaje principal.", "Haz un calendario: anuncio, recordatorio, última semana, agradecimiento.", "Pídele a la IA que lo ponga en una tabla de una página.", "Asigna quién hace cada tarea."],
          words: [["Promoción", "contarle a la gente sobre tu evento para que vaya."], ["Calendario", "lo que pasa en cada fecha."]],
          slides: [
            { title: "Tres preguntas", bullets: ["¿Dónde se van a enterar?", "¿Qué vamos a decir?", "¿Cuándo?"] },
            { title: "Canales locales", bullets: ["Boletines y redes sociales del equipo", "Grupos locales de Facebook y volantes", "Boca a boca y calendarios de la comunidad"] },
            { title: "Calendario", bullets: ["Anuncia 4 a 6 semanas antes", "Recuerda a las 2 semanas", "Insiste la última semana", "Agradece después"] }
          ],
          tryIt: "Pídele a un asistente de IA: “Convierte estas notas en una tabla de plan de promoción de una página con canal, mensaje, fecha y responsable.” Pega las notas de tu evento y edita el resultado.",
          youCanNow: "escribir un plan de promoción de una página con canales, un mensaje, un calendario y responsables.",
          quickCheck: [
            { objective: "O2", q: "¿Qué tres preguntas responde un plan de promoción?", options: ["Quién juega, quién gana, quién anota", "Dónde se entera el público, qué decimos y cuándo", "Cuánto cuesta, cuánto dura, qué tan lejos", "Qué logotipo, qué color, qué letra"], answer: 1, why: "Un plan de promoción cubre los canales, el mensaje y los tiempos." },
            { objective: "O2", q: "Tu evento es la próxima semana y nadie está encargado de publicar los recordatorios. ¿Qué haces?", options: ["Esperar que funcione el boca a boca", "Cancelar el evento", "Esperar hasta el día anterior", "Asignar ahora a una persona para cada tarea de promoción"], answer: 3, why: "Cada tarea del plan necesita una persona responsable." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer materiales de promoción con IA y Canva",
          minutes: 5,
          goal: "Hacer un volante y una publicación para redes de tu evento que respeten las reglas de tu escuela.",
          text: [
            "Toda pieza de promoción necesita los mismos cinco datos: qué es, para quién es, cuándo, dónde y cómo inscribirse o conseguir entradas. Agrega una foto y una razón para ir.",
            "Usa un asistente de IA para hacer el borrador de un texto corto, y luego una herramienta de diseño gratuita como Canva para armar un volante y una publicación cuadrada para redes a partir de una plantilla.",
            "Respeta las reglas de tu escuela o tu liga sobre logotipos, nombres de equipos y fotos de menores. Usa fotos solo con permiso; muchas escuelas exigen una autorización de imagen firmada por los padres antes de publicar fotos de estudiantes."
          ],
          steps: ["Haz la lista de los cinco datos.", "Pídele a la IA un título y dos líneas cortas.", "Arma un volante y una publicación para redes en Canva.", "Revisa los logotipos y las fotos según las reglas de tu escuela.", "Pide a otra persona que revise la fecha, la hora y el enlace."],
          words: [["Autorización de imagen", "un permiso firmado para usar la foto o el video de alguien."], ["Revisar el texto", "leer con cuidado buscando errores antes de compartir."]],
          slides: [
            { title: "Cinco datos en cada pieza", bullets: ["Qué es y para quién", "Cuándo y dónde", "Cómo inscribirse o conseguir entradas"] },
            { title: "Hazlo", bullets: ["La IA hace el borrador del texto", "Plantilla de Canva para el volante y la publicación"] },
            { title: "Antes de compartir", bullets: ["Logotipos y nombres del equipo: respeta las reglas de la escuela", "Fotos de menores: permiso y autorización de imagen", "Otra persona revisa el texto"] }
          ],
          tryIt: "Haz un volante y una publicación para redes de tu evento. Pídele a otra persona que revise los cinco datos y el enlace de inscripción.",
          youCanNow: "hacer materiales de promoción claros que respeten las reglas de la escuela y de las fotos.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál de estos es uno de los cinco datos que necesita toda pieza de promoción?", options: ["Cómo inscribirse o conseguir entradas", "El teléfono del entrenador", "El marcador del año pasado", "La lista de precios para patrocinadores"], answer: 0, why: "Qué es, para quién es, cuándo, dónde y cómo inscribirse van en toda pieza." },
            { objective: "O3", q: "Terminaste tu volante. ¿Qué haces antes de compartirlo?", options: ["Compartirlo de inmediato", "Agregar más fotos de estudiantes sin preguntar", "Pedirle a otra persona que revise la fecha, la hora y el enlace", "Quitar el enlace de inscripción"], answer: 2, why: "Otra persona encuentra errores en los datos clave." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Hacer marketing del evento",
        questions: [
          { objective: "O1", q: "En un campamento para niños, ¿quién suele ser el público que decide?", options: ["El árbitro", "Los entrenadores rivales", "Los padres de los niños", "El chofer del autobús"], answer: 2, why: "Los padres deciden y pagan los campamentos para niños." },
          { objective: "O1", q: "Antes de promocionar un evento, debes confirmar:", options: ["La fecha, el lugar, el costo y las aprobaciones", "Solo el color de la camiseta", "Tu cantidad de seguidores", "Nada"], answer: 0, why: "No puedes promocionar un evento que no está aprobado ni definido." },
          { objective: "O2", q: "¿Cuándo sueles anunciar un evento local?", options: ["El día anterior", "Después de que pase", "Un año después", "Unas cuatro a seis semanas antes"], answer: 3, why: "Eso le da tiempo a la gente para organizarse, con recordatorios después." },
          { objective: "O3", q: "¿Qué cinco datos van en todo volante?", options: ["Marcador, clima, mascota, color, canción", "Qué, para quién, cuándo, dónde, cómo inscribirse", "Tu contraseña y tu dirección", "Solo el logotipo"], answer: 1, why: "Esos datos le permiten a la gente decidir y actuar." },
          { objective: "O3", q: "Quieres publicar fotos de los niños del campamento. ¿Qué necesitas?", options: ["Nada", "Permiso y muchas veces una autorización de imagen de los padres", "Un filtro", "Más hashtags"], answer: 1, why: "Según la mayoría de las reglas escolares, las fotos de menores necesitan permiso." }
        ]
      }
    },
    {
      name: "Capítulo 2: Patrocinadores y resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Armar un paquete de patrocinio local",
          minutes: 6,
          goal: "Armar un paquete de patrocinio de tres niveles al que un negocio local pueda decir que sí.",
          text: [
            "Un patrocinador es un negocio que da dinero, productos o servicios a cambio de que tu público lo vea. Los negocios locales, como pizzerías, concesionarias de autos, gimnasios y dentistas, suelen patrocinar el deporte escolar y de clubes.",
            "Hazlo fácil con tres niveles, por ejemplo Bronce, Plata y Oro. Cada nivel dice qué da el patrocinador y qué recibe: su nombre en la pancarta, su logotipo en la camiseta, una publicación en redes para agradecerle, anuncios en los partidos o una mesa en el evento. Promete solo lo que puedas cumplir y lo que tu escuela permite.",
            "Fija los precios preguntándole a tu director deportivo cuánto han pagado otros patrocinadores y cuáles son tus costos. No adivines cifras grandes, y maneja el dinero dentro del proceso oficial de tu escuela o tu club."
          ],
          steps: ["Haz una lista de lo que puedes ofrecer a los patrocinadores y que tu escuela permite.", "Agrupa las ofertas en tres niveles.", "Pregúntale a tu director deportivo por los precios anteriores y tus costos.", "Pon el paquete en una página.", "Haz pasar el dinero por el proceso oficial de la escuela o el club."],
          words: [["Patrocinador", "un negocio que apoya tu evento a cambio de que lo vean."], ["Paquete de patrocinio", "una lista de una página con los niveles de patrocinio, lo que dan y lo que reciben."]],
          slides: [
            { title: "Lo que quiere un patrocinador", bullets: ["Que tu público lo vea", "Buena imagen en la comunidad"] },
            { title: "Tres niveles", bullets: ["Bronce, Plata, Oro", "Lo que dan y lo que reciben", "Promete solo lo que puedas cumplir"] },
            { title: "Dinero", bullets: ["Pregunta por los precios anteriores y tus costos", "Usa el proceso oficial de la escuela o el club"] }
          ],
          tryIt: "Pídele a un asistente de IA que te ayude a organizar un paquete de patrocinio de tres niveles para tu evento usando solo los beneficios de tu lista. Pon los precios solo después de hablar con tu director deportivo.",
          youCanNow: "armar un paquete de patrocinio local de tres niveles con lo que se da y se recibe bien claro.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un patrocinador?", options: ["Un padre de un jugador que ayuda como voluntario", "Un negocio que da dinero, productos o servicios para que tu público lo vea", "La oficina de la liga", "Alguien que compra una entrada"], answer: 1, why: "Los patrocinadores dan apoyo a cambio de que tu público los vea." },
            { objective: "O4", q: "Un patrocinador te pide poner su logotipo en las camisetas de los jugadores, pero tu escuela no lo permite. ¿Qué haces?", options: ["Prometerlo igual", "Hacerlo sin decirle a la escuela", "Cobrarle más", "Ofrecer solo lo que tu escuela permite, como un cartel o una publicación de agradecimiento"], answer: 3, why: "Promete solo lo que puedes cumplir y lo que tu escuela permite." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proponer un patrocinio con un correo hecho con IA",
          minutes: 5,
          goal: "Escribir y enviar un correo corto y personal para proponer un patrocinio.",
          text: [
            "Un correo de propuesta es corto y personal. Dice quién eres, qué es el evento, por qué su negocio encaja, qué le pides y cómo se beneficia. Adjunta o enlaza el paquete de una página.",
            "Pídele a un asistente de IA: “Escribe un correo corto y amable a [tipo de negocio] para pedirle que patrocine nuestro campamento de básquetbol para niños. Menciona nuestro público de 80 familias de la zona y nuestro nivel Plata. Menos de 150 palabras.” Luego edítalo: agrega algo cierto y concreto sobre ese negocio y por qué lo elegiste.",
            "Si no recibes respuesta, haz un solo seguimiento después de más o menos una semana. Con los negocios locales, ir en persona con un jugador o un padre suele funcionar mejor que el correo. Da siempre las gracias, aunque digan que no."
          ],
          steps: ["Elige un negocio local que encaje con tu público.", "Pídele a la IA un borrador corto de menos de 150 palabras.", "Agrega una razón cierta y concreta por la que lo elegiste.", "Adjunta el paquete y envíalo desde una cuenta oficial.", "Haz un seguimiento después de una semana; agradece en cualquier caso."],
          words: [["Propuesta", "un pedido corto que explica lo que quieres y por qué le ayuda a la otra parte."], ["Seguimiento", "un segundo mensaje amable si no te respondieron."]],
          slides: [
            { title: "Un buen correo de propuesta", bullets: ["Quién eres y cuál es el evento", "Por qué encaja su negocio", "Qué pides y cómo se beneficia"] },
            { title: "La IA hace el borrador, tú lo personalizas", bullets: ["Menos de 150 palabras", "Agrega una razón cierta y concreta"] },
            { title: "Después de enviarlo", bullets: ["Haz un seguimiento después de una semana", "Ve en persona si puedes", "Agradece, digan que sí o que no"] }
          ],
          tryIt: "Elige un negocio local. Usa la IA para hacer el borrador de un correo de propuesta, personalízalo y pídele a tu entrenador o a tu director deportivo que lo lea antes de enviarlo.",
          youCanNow: "escribir un correo corto y personal para proponer un patrocinio y hacer un seguimiento amable.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debe incluir un correo de propuesta?", options: ["Quién eres, el evento, por qué su negocio encaja, lo que pides y cómo se benefician", "Todo el calendario de tu temporada", "Una historia larga del equipo", "Solo el precio"], answer: 0, why: "Una propuesta corta y personal cubre esos cinco puntos y enlaza el paquete." },
            { objective: "O5", q: "Una pizzería de tu zona no ha respondido a tu propuesta después de una semana. ¿Qué haces?", options: ["Escribirles todos los días", "Publicar sobre ellos en internet", "Hacer un solo seguimiento, o visitarlos con un jugador o un padre", "Rendirte y no volver a pedirles nunca"], answer: 2, why: "Haz un solo seguimiento después de más o menos una semana; ir en persona muchas veces funciona mejor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Informar los resultados para que los patrocinadores vuelvan",
          minutes: 5,
          goal: "Registrar los números del evento y enviarles a los patrocinadores un informe corto de agradecimiento.",
          text: [
            "Los patrocinadores vuelven cuando ven lo que recibieron. Registra algunos números durante y después del evento: asistencia o inscripciones, alcance e interacción de las publicaciones en redes, y lo que sea propio de cada patrocinador, como cupones usados o visitas a su mesa.",
            "Envía un informe de agradecimiento de una página en menos de dos semanas: una foto de su pancarta o su logotipo en el evento, los números, una frase de una familia o un jugador y un agradecimiento del equipo.",
            "Pídele a un asistente de IA que convierta tus números y notas en un informe amable, y luego revisa tú mismo cada número. Nunca infles los números; la confianza es lo que hace que los patrocinadores vuelvan el año siguiente."
          ],
          steps: ["Elige tres números antes del evento.", "Reúnelos durante y después.", "Toma fotos de la publicidad del patrocinador.", "Haz con IA el borrador de un informe de una página.", "Revisa cada número y envíalo en menos de dos semanas."],
          words: [["Alcance", "cuántas personas vieron una publicación."], ["Informe de agradecimiento", "un resumen corto para los patrocinadores con fotos y resultados."]],
          slides: [
            { title: "Registra tres números", bullets: ["Asistencia o inscripciones", "Alcance e interacción de las publicaciones", "Propios del patrocinador: cupones, visitas"] },
            { title: "Informe de agradecimiento", bullets: ["Foto de su logotipo en el evento", "Los números y una frase", "Envíalo en menos de dos semanas"] },
            { title: "Confianza", bullets: ["Revisa cada número", "Nunca los infles"] }
          ],
          tryIt: "Tarea final: para tu evento, termina el plan de promoción, el paquete de patrocinio y el correo de propuesta, consigue la aprobación de tu director deportivo o tu liga, y escribe los tres números que les informarás a los patrocinadores.",
          youCanNow: "informar resultados honestos a los patrocinadores para que quieran volver.",
          quickCheck: [
            { objective: "O6", q: "¿Qué hace que los patrocinadores vuelvan al año siguiente?", options: ["Un logotipo más grande la próxima vez", "Ver lo que recibieron, con números honestos", "Un correo más largo", "Un precio más bajo"], answer: 1, why: "Los patrocinadores vuelven cuando un informe muestra resultados reales." },
            { objective: "O6", q: "La IA escribió tu informe y dice que fueron 200 personas, pero tú contaste 150. ¿Qué haces?", options: ["Enviarlo; más grande se ve mejor", "Sacar el promedio de los dos números", "No poner el número", "Corregirlo a 150 antes de enviarlo"], answer: 3, why: "Revisa tú mismo cada número y nunca los infles." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Patrocinadores y resultados",
        questions: [
          { objective: "O4", q: "¿Qué suele querer un patrocinador?", options: ["Entrenar al equipo", "Solo entradas gratis", "Tus contraseñas", "Que tu público lo vea y ganar buena imagen"], answer: 3, why: "Los patrocinadores te apoyan para que tu público los vea." },
          { objective: "O4", q: "¿Cómo debes fijar los precios del patrocinio?", options: ["Preguntándole a tu director deportivo por los precios anteriores y tus costos", "Adivinando una cifra grande", "Copiando a un equipo profesional", "Dejando que decida la IA"], answer: 0, why: "Los precios reales anteriores y los costos lo mantienen justo y realista." },
          { objective: "O5", q: "¿Qué hace que un correo de propuesta sea personal?", options: ["Un correo muy largo", "Muchos emojis", "Una razón cierta y concreta por la que elegiste ese negocio", "Enviarlo a 500 negocios a la vez"], answer: 2, why: "Las razones concretas muestran que los conoces." },
          { objective: "O5", q: "Un negocio no responde. ¿Qué haces?", options: ["Le escribes todos los días", "Publicas sobre él", "Te rindes de inmediato", "Haces un solo seguimiento después de más o menos una semana"], answer: 3, why: "Un seguimiento amable es lo profesional." },
          { objective: "O6", q: "A tu evento fueron 140 personas. ¿Qué informas?", options: ["250, para que se vea mejor", "140", "Unas 200", "Nada"], answer: 1, why: "Los números honestos generan confianza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Marketing para la gestión deportiva",
    questions: [
      { objective: "O1", q: "La oferta de un evento es:", options: ["Solo el precio de la entrada", "El logotipo del equipo", "Lo que la gente recibe a cambio de su tiempo o su dinero", "El estadio"], answer: 2, why: "La oferta es el valor para el público." },
      { objective: "O1", q: "¿Quién aprueba los eventos y los patrocinadores de la escuela?", options: ["Por lo general el director deportivo", "Un aficionado", "Un patrocinador", "El entrenador rival"], answer: 0, why: "El director deportivo dirige el programa deportivo de la escuela." },
      { objective: "O2", q: "Un buen plan de promoción cabe en:", options: ["Una página", "Cincuenta páginas", "Una servilleta sin fechas", "Nada"], answer: 0, why: "Una página lo mantiene claro y fácil de usar." },
      { objective: "O2", q: "¿Cuál es un buen canal local?", options: ["El vestuario de un rival", "Mensajes privados a desconocidos", "Grupos locales de Facebook y boletines de la escuela", "Ninguno"], answer: 2, why: "Esos llegan a las familias de la zona." },
      { objective: "O2", q: "¿Cuándo debes publicar los agradecimientos?", options: ["Nunca", "Después del evento", "Antes de anunciarlo", "Solo si ganas"], answer: 1, why: "Los agradecimientos generan buena imagen para la próxima vez." },
      { objective: "O2", q: "Cada tarea de promoción debe tener:", options: ["Ningún responsable", "Diez responsables", "Una IA como responsable", "Una persona responsable"], answer: 3, why: "Alguien tiene que encargarse de cada tarea." },
      { objective: "O3", q: "¿Qué dato falta en “Campamento de fútbol, 12 de junio, Lincoln Park”?", options: ["Cuándo", "Dónde", "Cómo inscribirse", "Qué es"], answer: 2, why: "La gente necesita saber cómo inscribirse." },
      { objective: "O3", q: "Una autorización de imagen es:", options: ["Una conferencia de prensa", "Un artículo de noticias", "Una entrada", "Un permiso firmado para usar la foto o el video de alguien"], answer: 3, why: "Da permiso para compartir imágenes." },
      { objective: "O3", q: "Antes de compartir un volante, debes:", options: ["Pedirle a otra persona que lo revise", "Agregarle más colores", "Publicarlo a medianoche", "Quitar la fecha"], answer: 0, why: "Una segunda persona encuentra los errores." },
      { objective: "O4", q: "Un paquete de patrocinio suele tener:", options: ["Un solo precio enorme", "Tres niveles de lo que se da y se recibe", "Ningún beneficio", "Solo un logotipo"], answer: 1, why: "Los niveles hacen fácil decir que sí." },
      { objective: "O4", q: "¿Cuál es un beneficio para un patrocinador?", options: ["Entrenar al equipo", "Elegir la alineación", "Su nombre en la pancarta", "Datos gratis de los jugadores"], answer: 2, why: "Que lo vean es el beneficio principal." },
      { objective: "O4", q: "El dinero de los patrocinadores debe pasar por:", options: ["El proceso oficial de la escuela o el club", "Tu cuenta personal", "Efectivo en una bolsa", "Un amigo"], answer: 0, why: "Los procesos oficiales protegen a todos." },
      { objective: "O4", q: "A los patrocinadores solo debes prometerles:", options: ["Lo que quieran", "Campeonatos", "Tiempo de los jugadores sin preguntar", "Lo que puedas cumplir y lo que tu escuela permite"], answer: 3, why: "Las promesas rotas hacen perder patrocinadores." },
      { objective: "O5", q: "Un correo de propuesta debe tener más o menos:", options: ["Dos páginas", "Menos de 150 palabras", "Una palabra", "Lo más largo posible"], answer: 1, why: "Los correos cortos se leen." },
      { objective: "O5", q: "La IA hace el borrador de tu propuesta. Después tú:", options: ["Lo envías a todos sin cambios", "Agregas una razón cierta y concreta por la que elegiste ese negocio", "Agregas números falsos", "Lo borras"], answer: 1, why: "Los toques personales consiguen respuestas." },
      { objective: "O5", q: "Con los negocios locales, muchas veces funciona mejor que el correo:", options: ["Enviar 10 correos", "Llamar a medianoche", "Publicar comentarios enojados", "Ir en persona con un jugador o un padre"], answer: 3, why: "Los negocios locales responden a personas reales." },
      { objective: "O5", q: "Un negocio dice que no. Tú:", options: ["Le agradeces igual", "Discutes", "Publicas sobre él", "Sigues escribiéndole"], answer: 0, why: "La buena imagen puede llevar a un sí más adelante." },
      { objective: "O6", q: "¿Qué número es propio de un patrocinador?", options: ["Tu talla de zapatos", "El clima", "Los cupones usados de su oferta", "Solo el resultado final"], answer: 2, why: "Muestra directamente lo que recibió." },
      { objective: "O6", q: "¿Cuándo debes enviar el informe de agradecimiento?", options: ["El año siguiente", "Nunca", "Antes del evento", "En menos de dos semanas"], answer: 3, why: "Los resultados recientes causan la mejor impresión." },
      { objective: "O6", q: "La IA escribe tu informe. Antes de enviarlo, tú:", options: ["Redondeas los números hacia arriba", "Revisas tú mismo cada número", "Quitas las fotos", "Lo envías sin leerlo"], answer: 1, why: "La IA puede equivocarse; la confianza depende de la exactitud." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      6,
      9,
      11,
      14,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Plan de promoción",
        objective: "O2",
        notYet: "No hay calendario, hay muy pocos canales o nadie está asignado a las tareas.",
        meets: "Una página con tres a cinco canales, un mensaje principal, un calendario para anunciar, recordar, la última semana y agradecer, y un responsable para cada tarea.",
        exceeds: "Los canales se eligieron según el público que decide, nombrado en la oferta."
      },
      {
        name: "Paquete de patrocinio",
        objective: "O4",
        notYet: "Hay menos de tres niveles, los precios son adivinados o hay promesas que la escuela no permite.",
        meets: "Tres niveles con lo que se da y se recibe claro, los precios revisados con el director deportivo y el dinero por el proceso oficial.",
        exceeds: "Cada nivel encaja con un tamaño distinto de negocio local e incluye un número propio de cada patrocinador para informar."
      },
      {
        name: "Correo de propuesta",
        objective: "O5",
        notYet: "Parece texto copiado de la IA, es largo o no tiene una razón concreta para ese negocio.",
        meets: "Menos de 150 palabras, con las propias palabras de quien escribe, una razón verdadera para elegir el negocio y el paquete adjunto.",
        exceeds: "Incluye un plan de seguimiento y la opción de una visita en persona."
      },
      {
        name: "Aprobación y plan de resultados",
        objective: "O6",
        notYet: "No hay aprobación, o no se eligieron números para el informe a los patrocinadores.",
        meets: "Aprobado por el director deportivo o la liga, con tres números elegidos para informar a los patrocinadores.",
        exceeds: "Dice cómo se va a reunir cada número y cuándo se va a enviar el informe."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan la tarea final y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Eventos que alcanzan su meta de asistencia o de inscripciones",
      "Patrocinadores locales conseguidos, y patrocinadores que vuelven para el siguiente evento o temporada",
      "Participantes que dicen haber enviado un informe de resultados a los patrocinadores en un plazo de dos semanas después del evento"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Una cuenta gratuita de Canva",
      "Las reglas de tu escuela, liga o club sobre patrocinadores, logotipos y autorizaciones de imagen",
      "Unos 60 minutos de lecciones más tiempo para planear un evento real"
    ],
    facilitatorNotes: [
      "Invita al director deportivo o al contacto de la liga a la primera sesión para que las aprobaciones, los precios y el manejo del dinero queden claros desde el principio.",
      "Ten listos los formularios de autorización de imagen de los padres antes de que alguien publique fotos de menores de edad.",
      "Haz que los deportistas vayan acompañados de un adulto para las visitas y los correos a patrocinadores; envía las propuestas desde cuentas oficiales.",
      "Nunca dejes que los participantes manejen el dinero de los patrocinadores fuera del proceso oficial de la escuela o el club.",
      "Después del evento, revisen en grupo los informes para los patrocinadores y comprueben cada número antes de enviarlos."
    ]
  }
};
