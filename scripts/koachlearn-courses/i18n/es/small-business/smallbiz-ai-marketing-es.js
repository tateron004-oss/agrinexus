"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-marketing.js). See scripts/koachlearn-courses/README.md, "Translations".

const FTC_ADS = { name: "FTC: Conceptos básicos de publicidad y marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC: Regla sobre reseñas y testimonios de consumidores, preguntas y respuestas (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC: Ley CAN-SPAM, guía de cumplimiento para negocios (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing-es",
  lang: "es",
  translationOf: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "La IA en el marketing para pequeños negocios",
  skills: "Escribir un mensaje de marketing, Hacer publicaciones para redes con IA, Diseñar un volante, Planear un calendario de contenido, Mantener honestas las afirmaciones, Revisar qué funciona",
  outcome: "planear y hacer un mes de marketing para tu negocio con ayuda de la IA: un mensaje central claro, un calendario de contenido de cuatro semanas, un grupo de publicaciones para redes y un volante, todo con afirmaciones honestas, y una forma sencilla de ver qué publicaciones trajeron clientes.",
  about: [
    "Este curso es para dueños de pequeños negocios que hacen su propio marketing: restaurantes y food trucks, salones de belleza y barberías, tiendas, servicios de limpieza y reparación, y negocios desde casa. Muchos de nuestros estudiantes tienen negocios de dueños de comunidades minoritarias que hacen marketing para sus barrios y comunidades.",
    "Vas a usar herramientas de IA gratis para encontrar tu mensaje central, escribir publicaciones y textos, diseñar un volante, planear un mes de contenido, mantener honestas tus afirmaciones según las reglas de la FTC (la Comisión Federal de Comercio de Estados Unidos) y llevar la cuenta de lo que de verdad trae clientes.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las tareas se van sumando en un mes de marketing listo para publicar."
  ],
  finalTask: "Haz un mes de marketing: escribe tu mensaje central, un calendario de contenido de cuatro semanas con al menos ocho publicaciones, los textos terminados de cuatro de ellas, un volante hecho en una herramienta de diseño y una tabla de seguimiento que muestre cómo vas a saber qué publicaciones trajeron clientes. Revisa que cada afirmación sea cierta y que tengas derecho a usar cada imagen.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios que hacen su propio marketing: restaurantes y camiones de comida, salones de belleza y barberías, tiendas, servicios de limpieza y reparación, y negocios en casa. Muchos son negocios de dueños de grupos minoritarios que hacen marketing en sus barrios y comunidades.",
    startingPoint: "Publican en redes sociales de vez en cuando y tal vez han hecho un volante. No tienen un mensaje central, un calendario de contenido ni un registro de resultados, y usan poco la IA para el marketing.",
    gap: "Las publicaciones al azar toman tiempo y casi nunca traen clientes, y la IA puede agregar afirmaciones o imágenes que no son verdad, lo que puede romper las reglas de la FTC y dañar la confianza. Los dueños necesitan un mensaje claro, un mes de contenido planeado y honesto, y una forma sencilla de ver qué trae clientes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: un teléfono inteligente con cámara; una computadora ayuda para el volante y la tabla",
      "Tiempo: lecciones de unos 5 minutos que caben en un día de trabajo ocupado",
      "Reglas: las reglas de la FTC sobre publicidad veraz, la regla de reseñas de la FTC y la ley CAN-SPAM para los correos de marketing",
      "Privacidad y derechos: permiso antes de publicar la foto de un cliente, y los nombres de los clientes fuera de la IA"
    ],
    prerequisites: "\"Introducción a la IA para pequeños negocios\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando la fórmula del mensaje central y un asistente de IA", action: "escribir un mensaje central que diga a quién atiendes, qué haces y por qué eres diferente", standard: "en una o dos oraciones verdaderas que suenen a ti" },
    { id: "O2", condition: "Con tu mensaje central", action: "escribir publicaciones y textos para redes con ayuda de la IA", standard: "con un detalle real agregado a cada uno, nada falso y permiso para cualquier foto de un cliente" },
    { id: "O3", condition: "Usando una herramienta de diseño gratis", action: "hacer un volante para una oferta o un evento", standard: "con un título, una imagen real, tres detalles y una llamada a la acción, todo revisado" },
    { id: "O4", condition: "Usando un asistente de IA y una tabla", action: "planear un calendario de contenido de cuatro semanas", standard: "con un número de publicaciones que puedas sostener, una mezcla de tipos de publicación y cada fecha revisada" },
    { id: "O5", condition: "Con tus textos para redes y tu volante", action: "revisar tu marketing en busca de afirmaciones que no puedes probar, reseñas falsas y reglas del correo electrónico", standard: "con cada afirmación sin prueba cambiada o quitada" },
    { id: "O6", condition: "Con tus publicaciones y tu volante", action: "crear una tabla de seguimiento que muestre qué marketing trae clientes", standard: "con un código promocional en una oferta y cualquier patrón que encuentre la IA confirmado en la tabla" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tu mensaje y tus publicaciones",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar tu mensaje central de marketing",
          minutes: 5,
          goal: "Escribir una o dos oraciones que digan a quién atiendes, qué haces y por qué eres diferente.",
          text: [
            "Tu mensaje central es la respuesta corta a \"¿Por qué debería elegirte?\" Cada publicación, volante y letrero debe repetirlo con otras palabras.",
            "Una fórmula sencilla: Ayudamos a [quién] a conseguir [qué] con [lo que nos hace diferentes]. Ejemplo: \"Ayudamos a familias ocupadas del sur de Sacramento a conseguir comida filipina casera, lista en 10 minutos, hecha por la misma familia desde 2009.\"",
            "Pídele a la IA que te ayude a encontrarlo: \"Esto es lo que dicen los clientes de mi negocio y lo que hago diferente. Escribe cinco versiones de un mensaje central de una oración.\" Elige la que suene cierta y a ti."
          ],
          steps: ["Escribe a quién atiendes.", "Escribe qué reciben.", "Escribe lo que te hace diferente (cierto y específico).", "Pídele a la IA cinco versiones y elige una."],
          words: [["Mensaje central", "la frase corta de por qué los clientes deberían elegirte."], ["Diferenciador", "algo cierto que te hace diferente de la competencia."]],
          slides: [
            { title: "¿Por qué debería elegirte?", bullets: ["Tu mensaje central lo responde", "Repítelo en cada publicación y volante"] },
            { title: "La fórmula", bullets: ["Ayudamos a [quién]", "a conseguir [qué]", "con [lo que nos hace diferentes]"] },
            { title: "Usa la IA para explorar", bullets: ["Comparte lo que dicen los clientes de ti", "Pide cinco versiones", "Elige la que sea cierta y suene a ti"] }
          ],
          tryIt: "Llena la fórmula para tu negocio. Luego pídele a un asistente de IA cinco versiones y elige la mejor.",
          youCanNow: "escribir un mensaje central claro para tu negocio.",
          quickCheck: [
            { objective: "O1", q: "¿Qué pregunta les responde a los clientes un mensaje central?", options: ["¿A qué hora cierran?", "¿Cuántos empleados tienen?", "¿Por qué debería elegirte?", "¿Dónde compraste tu equipo?"], answer: 2, why: "Un mensaje central les dice a los clientes por qué elegirte." },
            { objective: "O1", q: "La IA te da cinco versiones de tu mensaje central, y la mejor dice que eres \"el salón número 1 de la ciudad\". ¿Qué harías?", options: ["Usarla porque suena fuerte", "Elegir una versión que sea verdad y suene a ti", "Usar las cinco", "Agregarle \"tal vez\""], answer: 1, why: "Tu mensaje central debe ser verdad y sonar a ti." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir publicaciones y textos para redes con IA",
          minutes: 5,
          goal: "Convertir tu mensaje central en varias publicaciones para redes con tu propia voz.",
          text: [
            "Las buenas publicaciones de pequeños negocios muestran cosas reales: el especial del día, un corte de cabello antes y después, un cliente contento (con permiso), tu equipo, lo que pasa detrás de escena, un consejo, un evento. La gente sigue a personas.",
            "Pídele borradores a la IA: \"Escribe cuatro textos cortos para Instagram para mi barbería. Mensaje central: [tu mensaje]. Uno sobre el horario del sábado, uno sobre un degradado, uno presentando a nuestro nuevo barbero Marcos y uno con un consejo para el cuidado del cabello. Amable, 2 oraciones cada uno, 3 hashtags.\"",
            "Luego edítalos. Agrega detalles reales que solo tú conoces. Quita todo lo que suene falso o exagerado. Pide siempre permiso antes de publicar la foto o el nombre de un cliente."
          ],
          steps: ["Elige cuatro tipos de publicación: oferta, detrás de escena, equipo, consejo.", "Pídele a la IA textos con tu mensaje central y tu voz.", "Agrega detalles reales y quita todo lo falso.", "Pide permiso para cualquier foto o nombre de un cliente."],
          words: [["Texto de la publicación", "el texto que acompaña una foto o un video en redes sociales."], ["Hashtag", "una palabra con # adelante que se usa para agrupar publicaciones sobre un tema."]],
          slides: [
            { title: "Publica cosas reales", bullets: ["El especial del día o un antes y después", "Tu equipo y lo que pasa detrás de escena", "Consejos y eventos"] },
            { title: "Pídele borradores a la IA", bullets: ["Dale tu mensaje central y tu voz", "Di los tipos de publicación y el largo", "Pide algunos hashtags"] },
            { title: "Luego hazlo real", bullets: ["Agrega detalles que solo tú conoces", "Quita lo falso o exagerado", "Permiso antes de fotos o nombres de clientes"] }
          ],
          tryIt: "Pídele a la IA cuatro textos para tu negocio con tu mensaje central. Edita cada uno para agregar un detalle real y quitar lo que no sea cierto.",
          youCanNow: "escribir publicaciones para redes con ayuda de la IA que suenan reales y a tu negocio.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un texto para redes?", options: ["El texto que acompaña una foto o un video en redes", "Una licencia de negocio", "Un tipo de volante", "La reseña de un cliente"], answer: 0, why: "El texto para redes es lo que va junto a tu publicación de foto o video." },
            { objective: "O2", q: "Quieres publicar una foto genial del corte de pelo nuevo de un cliente. ¿Qué harías primero?", options: ["Publicarla y etiquetarlo", "Difuminarla y publicarla", "Preguntarle a la IA si está bien", "Pedirle permiso al cliente"], answer: 3, why: "Necesitas el permiso del cliente antes de publicar su foto." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Diseñar un volante o un gráfico promocional",
          minutes: 5,
          goal: "Hacer un volante o un gráfico claro para una oferta o un evento.",
          text: [
            "Un volante sirve en un mostrador, un tablero comunitario, el boletín de una iglesia o como publicación en redes. Usa una herramienta de diseño gratis como Canva o Adobe Express, empezando con una plantilla.",
            "Mantén claras las partes: un título grande (la oferta), una imagen, tres detalles cortos (qué, cuándo, dónde) y una llamada a la acción (\"Llama para reservar\", \"Pide en línea\"). Pon tu mensaje central en letras pequeñas abajo.",
            "Si usas imágenes hechas con IA, asegúrate de que no muestren comida, trabajos o resultados que no ofreces de verdad. Usa tus propias fotos cuando puedas; los clientes confían en las imágenes reales."
          ],
          steps: ["Abre una herramienta de diseño y elige una plantilla.", "Escribe un título grande con la oferta.", "Agrega una imagen, tres detalles y una llamada a la acción.", "Revisa la ortografía, el teléfono, la fecha y la dirección.", "Descárgalo o compártelo."],
          words: [["Llamada a la acción", "las palabras que le dicen a la gente qué hacer después, como \"Llama para reservar\"."], ["Título", "las palabras más grandes de un volante o un anuncio."]],
          slides: [
            { title: "Partes de un volante claro", bullets: ["Título grande: la oferta", "Una imagen", "Qué, cuándo, dónde", "Llamada a la acción"] },
            { title: "Herramientas de diseño gratis", bullets: ["Canva o Adobe Express", "Empieza con una plantilla"] },
            { title: "Imágenes en las que confían los clientes", bullets: ["Usa tus propias fotos cuando puedas", "Las imágenes de IA no deben mostrar lo que no ofreces"] }
          ],
          tryIt: "Haz un volante para una oferta o un evento real con un título, una imagen, tres detalles y una llamada a la acción. Revisa cada detalle antes de guardarlo.",
          youCanNow: "diseñar un volante o un gráfico promocional claro para tu negocio.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una llamada a la acción?", options: ["Una llamada por teléfono a un cliente", "Un título grande", "Palabras que le dicen a la gente qué hacer después", "Una lista de precios"], answer: 2, why: "Una llamada a la acción le dice a la gente el siguiente paso, como \"Llama para reservar\"." },
            { objective: "O3", q: "Tu volante tiene una imagen hecha con IA de un pastel que tú no haces. ¿Qué harías?", options: ["Dejarla porque se ve bonita", "Hacerla más pequeña", "Agregar una nota que diga que es de IA", "Cambiarla por una foto real de lo que vendes"], answer: 3, why: "Las imágenes deben mostrar lo que de verdad vendes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu mensaje y tus publicaciones",
        questions: [
          { objective: "O1", q: "¿Qué responde un mensaje central?", options: ["¿Cuál es tu contraseña?", "¿Por qué debería elegirte?", "¿Dónde está el banco?", "¿Cuántos años tiene el dueño?"], answer: 1, why: "El mensaje central dice por qué los clientes deberían elegirte." },
          { objective: "O1", q: "¿Cuál es un mensaje central fuerte?", options: ["\"Somos los mejores.\"", "\"Pasa.\"", "\"Comida.\"", "\"Ayudamos a familias ocupadas del sur de Sacramento a conseguir comida filipina casera en 10 minutos.\""], answer: 3, why: "Dice quién, qué y qué es diferente." },
          { objective: "O2", q: "Antes de publicar la foto de un cliente debes:", options: ["Pedirle permiso", "Ponerle un filtro", "Preguntarle a la IA", "Publicarla de noche"], answer: 0, why: "El permiso respeta a los clientes y evita problemas." },
          { objective: "O3", q: "¿Qué es una llamada a la acción?", options: ["Un hashtag", "Una cuenta de teléfono", "Palabras que le dicen a la gente qué hacer después", "Un logotipo"], answer: 2, why: "Le dice a la gente el siguiente paso, como \"Llama para reservar\"." },
          { objective: "O3", q: "Una imagen de IA muestra un platillo que no vendes. ¿Qué haces?", options: ["Usarla de todos modos", "Agregar más platillos falsos", "Cambiarla por una foto real o por una imagen de lo que sí vendes", "Publicarla dos veces"], answer: 2, why: "Las imágenes no deben engañar a los clientes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planeación, honestidad y resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planear un calendario de contenido mensual",
          minutes: 5,
          goal: "Planear cuatro semanas de publicaciones en un calendario sencillo.",
          text: [
            "Un calendario de contenido es una tabla que dice qué vas a publicar y cuándo. Acaba con el pánico de \"¿qué publico hoy?\".",
            "Haz columnas: Fecha, Plataforma, Tipo de publicación, Idea, ¿Texto listo?, ¿Imagen lista?. Planea dos o tres publicaciones por semana que de verdad puedas mantener. Mezcla tipos: ofertas, consejos, equipo, clientes (con permiso) y eventos de la comunidad.",
            "Pregúntale a la IA: \"Haz un calendario de publicaciones de cuatro semanas para mi negocio de limpieza, dos publicaciones por semana, mezclando ofertas, consejos y publicaciones del equipo. Nuestro mensaje central es [...]. Incluye días festivos y eventos locales en [ciudad] en [mes] que debería revisar.\" Luego revisa tú cada fecha y cada evento."
          ],
          steps: ["Haz una tabla de calendario con seis columnas.", "Elige cuántas publicaciones por semana puedes mantener.", "Pídele a la IA ideas para cuatro semanas.", "Revisa tú las fechas y los eventos locales.", "Marca las publicaciones hechas a medida que avanzas."],
          words: [["Calendario de contenido", "un horario de lo que vas a publicar y cuándo."], ["Plataforma", "un sitio o una aplicación de redes sociales, como Instagram, Facebook o TikTok."]],
          slides: [
            { title: "Por qué un calendario", bullets: ["Se acabó el \"¿qué publico hoy?\"", "Una tabla de qué y cuándo"] },
            { title: "Columnas", bullets: ["Fecha, Plataforma, Tipo de publicación", "Idea, ¿Texto listo?, ¿Imagen lista?"] },
            { title: "Planea con la IA", bullets: ["Dos o tres publicaciones por semana que puedas mantener", "Mezcla ofertas, consejos, equipo, comunidad", "Revisa tú cada fecha y evento"] }
          ],
          tryIt: "Pídele a la IA un calendario de cuatro semanas, con dos publicaciones por semana, para tu negocio. Ponlo en una tabla y revisa cada fecha.",
          youCanNow: "planear un mes de publicaciones en un calendario de contenido.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un calendario de contenido?", options: ["Un horario de qué publicas y cuándo", "Una lista de días festivos", "Un informe de ventas", "Tu horario de atención"], answer: 0, why: "Un calendario de contenido planea tus publicaciones por fecha." },
            { objective: "O4", q: "El calendario de la IA planea dos publicaciones al día, pero solo tienes tiempo para dos por semana. ¿Qué harías?", options: ["Tratar de publicar todos los días de todos modos", "Recortarlo a un número que de verdad puedas sostener", "No usar el calendario", "Contratar una agencia de marketing"], answer: 1, why: "Planea un número de publicaciones que de verdad puedas sostener." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mantener tu marketing honesto y legal",
          minutes: 5,
          goal: "Revisar tu marketing en busca de afirmaciones que no puedes respaldar, reseñas falsas y reglas del correo electrónico.",
          text: [
            "La Comisión Federal de Comercio (FTC) dice que la publicidad debe ser verdadera y no engañosa, y que necesitas pruebas de lo que afirmas. \"Los mejores tacos de Los Ángeles\" se lee como una opinión, pero \"Nuestra limpieza elimina el 99% de los gérmenes\" o \"Baja 10 libras\" son afirmaciones que tienes que poder respaldar.",
            "A la IA le gustan las palabras grandes: \"garantizado\", \"premiado\", \"número uno\". Quita las que no puedas demostrar. Nunca publiques reseñas ni testimonios falsos; la regla de la FTC sobre reseñas los prohíbe, incluidos los escritos con IA.",
            "Los correos de marketing deben cumplir la ley CAN-SPAM: remitente y asunto honestos, decir que es publicidad, incluir tu dirección postal y una forma fácil de darse de baja, y respetar las bajas en un plazo de 10 días hábiles."
          ],
          steps: ["Subraya cada afirmación de tu publicación o volante.", "Pregúntate: ¿puedo demostrar esto?", "Quita o cambia las afirmaciones que no puedas demostrar.", "Nada de reseñas ni testimonios falsos.", "Revisa lo básico de CAN-SPAM en los correos de marketing."],
          words: [["Afirmación", "una frase que presenta un hecho en un anuncio, como \"elimina el 99% de los gérmenes\"."], ["Engañoso", "que probablemente le dé a la gente una idea equivocada."], ["Testimonio", "lo que dice un cliente elogiando tu negocio, usado en tu publicidad."]],
          slides: [
            { title: "FTC: anuncios verdaderos", bullets: ["Los anuncios no deben engañar", "Necesitas pruebas de tus afirmaciones"] },
            { title: "Quita las palabras grandes que no puedes demostrar", bullets: ["\"Garantizado\", \"premiado\", \"número uno\"", "Nada de reseñas falsas, ni siquiera escritas por IA"] },
            { title: "Correos de marketing (CAN-SPAM)", bullets: ["Remitente y asunto honestos; di que es publicidad", "Dirección postal y forma fácil de darse de baja", "Respeta las bajas en 10 días hábiles"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Toma tus cuatro textos y tu volante. Subraya cada afirmación y cambia o quita las que no puedas demostrar.",
          youCanNow: "revisar tu marketing en busca de afirmaciones que no se pueden demostrar, reseñas falsas y problemas con las reglas del correo.",
          quickCheck: [
            { objective: "O5", q: "Según la FTC, ¿cómo deben ser los anuncios?", options: ["Chistosos", "Cortos", "Verdaderos y sin engañar", "Publicados todos los días"], answer: 2, why: "Las reglas de la FTC dicen que los anuncios deben ser verdaderos y no engañar." },
            { objective: "O5", q: "La IA escribió \"Votados los mejores tacos de LA\" en tu texto, pero nunca hubo una votación. ¿Qué harías?", options: ["Quitarlo", "Dejarlo; todos dicen eso", "Cambiarlo a \"Votados los mejores tacos del barrio\"", "Pedirles a tus amigos que voten ahora"], answer: 0, why: "Las afirmaciones que no puedes probar se deben quitar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ver qué funciona",
          minutes: 5,
          goal: "Llevar la cuenta de qué publicaciones y volantes traen clientes.",
          text: [
            "Los \"me gusta\" son bonitos, pero los clientes importan más. Lleva la cuenta de señales sencillas: mensajes y llamadas, reservas, personas que mencionan una publicación y el uso de un código especial (\"Di VOLANTE10 y recibe 10% de descuento\").",
            "La mayoría de las plataformas de redes muestran números gratis para las cuentas de negocio, como el alcance y las visitas al perfil; busca la sección de estadísticas. Escribe los números clave en una tabla de seguimiento cada semana.",
            "Una vez al mes, pega tu tabla (sin nombres de clientes) en un asistente de IA y pregúntale: \"¿Qué tipos de publicaciones trajeron más reservas? ¿Qué debería hacer más?\" Confírmalo en tu tabla y luego planea el próximo mes."
          ],
          steps: ["Elige señales: mensajes, reservas, menciones, uso del código.", "Agrega un código especial a una oferta.", "Anota los números cada semana en una tabla.", "Pídele patrones a la IA una vez al mes y confírmalos."],
          words: [["Alcance", "cuántas personas vieron una publicación."], ["Estadísticas", "los números que muestra una plataforma sobre cómo les fue a tus publicaciones."], ["Código promocional", "una palabra que los clientes dicen o escriben para recibir una oferta, y que te ayuda a llevar la cuenta."]],
          slides: [
            { title: "Clientes antes que \"me gusta\"", bullets: ["Mensajes, llamadas y reservas", "Gente que menciona una publicación", "Códigos especiales como VOLANTE10"] },
            { title: "Números gratis", bullets: ["Las cuentas de negocio muestran estadísticas", "Alcance y visitas al perfil", "Escríbelos en una tabla semanal"] },
            { title: "Revisión mensual con la IA", bullets: ["Pega la tabla, sin nombres", "Pregunta qué trajo más reservas", "Confirma y luego planea el próximo mes"] }
          ],
          tryIt: "Tarea final: termina tu mes de marketing: mensaje central, calendario de cuatro semanas, cuatro textos terminados, un volante y una tabla de seguimiento con un código promocional en una oferta. Revisa cada afirmación y cada imagen.",
          youCanNow: "planear, hacer y medir un mes de marketing honesto para tu negocio.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa alcance?", options: ["Cuántas personas compraron algo", "Cuántas personas vieron una publicación", "Qué tan lejos viajan los clientes", "Cuántas publicaciones hiciste"], answer: 1, why: "El alcance es el número de personas que vieron una publicación." },
            { objective: "O6", q: "Quieres saber si tu volante trajo clientes. ¿Qué harías?", options: ["Adivinar por lo ocupado que se siente", "Pedirle a la IA que adivine", "Contar tus \"me gusta\"", "Poner un código promocional especial en el volante y llevar la cuenta"], answer: 3, why: "Un código especial muestra qué marketing trajo a cada cliente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planeación, honestidad y resultados",
        questions: [
          { objective: "O4", q: "¿Qué es un calendario de contenido?", options: ["Un horario de lo que publicas y cuándo", "Un calendario de impuestos", "Un horario del personal", "Un reloj de pared"], answer: 0, why: "Planea tus publicaciones." },
          { objective: "O4", q: "El calendario de la IA menciona un festival local en cierta fecha. ¿Qué haces?", options: ["Borrar el calendario", "Creerle", "Publicar sobre él sin revisar", "Revisar tú la fecha"], answer: 3, why: "La IA puede equivocarse en fechas y eventos." },
          { objective: "O5", q: "¿Qué afirmación necesita pruebas?", options: ["\"Ven a saludarnos\"", "\"Nuestra limpieza elimina el 99% de los gérmenes\"", "\"Queremos a nuestro barrio\"", "\"Abierto el sábado\""], answer: 1, why: "Las afirmaciones concretas sobre hechos necesitan pruebas." },
          { objective: "O6", q: "¿Cuál es la mejor señal de que una publicación funcionó?", options: ["Reservas nuevas de gente que la menciona", "Un \"me gusta\" más", "Un color bonito", "Un texto largo"], answer: 0, why: "Los clientes importan más que los \"me gusta\"." },
          { objective: "O6", q: "¿Por qué agregar un código especial como VOLANTE10?", options: ["Lo exige la ley", "Para confundir a los clientes", "Para saber qué marketing trajo clientes", "Para esconder el precio"], answer: 2, why: "Los códigos muestran qué pieza funcionó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA en el marketing para pequeños negocios",
    questions: [
      { objective: "O1", q: "La fórmula del mensaje central es: Ayudamos a [quién] a conseguir [qué] con...", options: ["Nuestra contraseña", "Lo que nos hace diferentes", "Siempre un descuento", "El nombre de nuestro competidor"], answer: 1, why: "El diferenciador la completa." },
      { objective: "O1", q: "Tu mensaje central debe ser:", options: ["Secreto", "Lo más exagerado posible", "Copiado de un competidor", "Cierto y sonar a ti"], answer: 3, why: "Los clientes confían en los mensajes ciertos." },
      { objective: "O1", q: "¿Dónde debe aparecer tu mensaje central?", options: ["En ningún lado", "Solo en tu cabeza", "Solo en los impuestos", "En tus publicaciones, volantes y letreros"], answer: 3, why: "Repetirlo hace que te reconozcan." },
      { objective: "O2", q: "¿Cuál es una buena publicación de un pequeño negocio?", options: ["Una foto de archivo de una playa", "Un corte de cabello antes y después, con permiso", "Una reseña falsa", "La foto de un competidor"], answer: 1, why: "El trabajo real genera confianza." },
      { objective: "O2", q: "Después de que la IA escribe los textos, deberías:", options: ["Agregar más afirmaciones exageradas", "Publicarlos sin cambios", "Agregar detalles reales y quitar todo lo falso", "Borrar tu página"], answer: 2, why: "Editarlos los hace reales y exactos." },
      { objective: "O2", q: "¿Qué es el texto de una publicación?", options: ["El texto que acompaña una foto o un video en redes", "Un recibo", "Una etiqueta de precio", "Un logotipo"], answer: 0, why: "El texto describe la publicación." },
      { objective: "O3", q: "¿Qué herramientas gratis pueden hacer volantes?", options: ["Una caja registradora", "Una calculadora", "Canva o Adobe Express", "Un cargador de teléfono"], answer: 2, why: "Son herramientas de diseño con plantillas." },
      { objective: "O3", q: "El título de un volante debe ser:", options: ["Grande y sobre la oferta", "Diminuto", "Inexistente", "Tu contraseña"], answer: 0, why: "El título llama la atención." },
      { objective: "O3", q: "¿En qué imagen confían más los clientes?", options: ["Imágenes de IA de cosas que no vendes", "Tus propias fotos reales", "Fotos cualquiera de internet", "Fotos de la competencia"], answer: 1, why: "Las imágenes reales generan confianza." },
      { objective: "O4", q: "¿Cuántas publicaciones por semana deberías planear?", options: ["Las que sugiera la IA", "Cincuenta", "Ninguna", "Un número que de verdad puedas mantener"], answer: 3, why: "La constancia le gana al agotamiento." },
      { objective: "O4", q: "¿Cuál es una columna del calendario de contenido?", options: ["Tipo de publicación", "Número de tarjeta del cliente", "Contraseña", "PIN del banco"], answer: 0, why: "El tipo de publicación ayuda a mezclar tu contenido." },
      { objective: "O4", q: "Mezclar tipos de publicación significa:", options: ["Solo volver a publicar", "Solo descuentos", "Solo selfis", "Publicaciones de ofertas, consejos, equipo y comunidad"], answer: 3, why: "La variedad mantiene interesados a los seguidores." },
      { objective: "O5", q: "Según la FTC, los anuncios deben ser:", options: ["Largos", "Graciosos", "Verdaderos y no engañosos", "A color"], answer: 2, why: "Esa es la regla básica de la FTC." },
      { objective: "O5", q: "La IA agregó \"premiado\", pero no tienes ningún premio. Tú:", options: ["Lo dejas", "Lo quitas", "Inventas un premio", "Agregas \"garantizado\""], answer: 1, why: "Las afirmaciones que no se pueden demostrar engañan." },
      { objective: "O5", q: "Las reseñas falsas escritas por IA:", options: ["Son obligatorias", "Están bien si son cortas", "Están bien los fines de semana", "Están prohibidas por la regla de reseñas de la FTC"], answer: 3, why: "La regla cubre las falsas hechas con IA." },
      { objective: "O5", q: "Un correo de marketing según CAN-SPAM debe incluir:", options: ["Un remitente falso", "El número de tarjeta del cliente", "Tu dirección postal y una opción para darse de baja", "Ningún asunto"], answer: 2, why: "Las dos cosas son obligatorias." },
      { objective: "O6", q: "El alcance significa:", options: ["Cuántas personas vieron una publicación", "Cuántos compraron", "Cuánto personal tienes", "La fuerza de tu wifi"], answer: 0, why: "El alcance cuenta las vistas." },
      { objective: "O6", q: "¿Dónde encuentras números gratis de tus publicaciones en una cuenta de negocio?", options: ["En tu impresora de recibos", "En la sección de estadísticas", "En tu banco", "En ningún lado"], answer: 1, why: "Las plataformas muestran estadísticas a las cuentas de negocio." },
      { objective: "O6", q: "Antes de pegar los números de seguimiento en la IA, quita:", options: ["Las fechas", "Los nombres de los clientes", "Los tipos de publicación", "Los totales"], answer: 1, why: "Los nombres de los clientes son privados." },
      { objective: "O6", q: "Después de que la IA dice que las publicaciones de consejos traen más reservas, tú:", options: ["Lo confirmas en tu tabla y luego planeas más", "Dejas de publicar consejos", "Lo ignoras", "Borras tu cuenta"], answer: 0, why: "Confirma y luego actúa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      4,
      5,
      7,
      8,
      9,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Mensaje central",
        objective: "O1",
        notYet: "Es vago, o dice algo falso.",
        meets: "Una o dos oraciones verdaderas: a quién atiendes, qué haces y por qué eres diferente.",
        exceeds: "Aparece en las publicaciones y en el volante."
      },
      {
        name: "Calendario de contenido",
        objective: "O4",
        notYet: "Menos de ocho publicaciones, o fechas sin revisar.",
        meets: "Cuatro semanas con al menos ocho publicaciones y las fechas revisadas.",
        exceeds: "Mezcla ofertas, consejos, el equipo y la comunidad."
      },
      {
        name: "Textos para redes",
        objective: "O2",
        notYet: "Menos de cuatro, o tienen detalles falsos.",
        meets: "Cuatro textos terminados con un detalle real en cada uno.",
        exceeds: "Cada uno tiene una llamada a la acción clara y suena al dueño."
      },
      {
        name: "Volante",
        objective: "O3",
        notYet: "Le falta el título, los detalles o la llamada a la acción.",
        meets: "Título, una imagen real, tres detalles y una llamada a la acción, todo revisado.",
        exceeds: "Incluye un código promocional para el seguimiento."
      },
      {
        name: "Afirmaciones e imágenes honestas",
        objective: "O5",
        notYet: "Hay una afirmación que no se puede probar, o una imagen que no es tuya para usar.",
        meets: "Cada afirmación se puede probar y cada imagen es tuya o se usa con permiso.",
        exceeds: "El dueño puede decir cómo respalda cada afirmación."
      },
      {
        name: "Tabla de seguimiento",
        objective: "O6",
        notYet: "No hay forma de saber qué publicaciones funcionaron.",
        meets: "Una tabla para anotar resultados, con un código promocional en una oferta.",
        exceeds: "Usa los números de las estadísticas gratis y planea revisar los resultados al final del mes."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que publican según su calendario durante todo el mes (encuesta de seguimiento a 30 días)",
      "Dueños que pueden decir qué publicación o volante trajo clientes nuevos, según su tabla de seguimiento",
      "Dueños que reportan más reservas o ventas después del mes"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con cámara e internet; una computadora ayuda para el volante y la tabla",
      "Un asistente de IA gratuito y una herramienta de diseño gratis, como Canva o Adobe Express",
      "Fotos reales de tu negocio, tus productos o tu trabajo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Pide a los dueños que traigan a la sesión algunas fotos reales y una oferta o un evento que tengan pronto.",
      "Recuerda a los dueños que pidan permiso antes de publicar la foto de cualquier cliente.",
      "Haz que los dueños subrayen juntos cada afirmación de sus textos y su volante, y que cuenten cómo probarían cada una.",
      "Los nombres de los clientes se quedan fuera de las herramientas de IA al pegar los números de seguimiento.",
      "Califica el mes de marketing con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
