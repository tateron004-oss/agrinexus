"use strict";

// Koach Learn course (Spanish translation of youth/youth-digital-wellbeing.js). See scripts/koachlearn-courses/README.md, "Translations".
// Phone menus are given with their usual Spanish names (Ajustes, Tiempo de uso, Bienestar digital) and a "search Settings" fallback, as in the English.
// The 988 Lifeline offers help in Spanish by call, text and chat.

module.exports = {
  id: "youth-digital-wellbeing-es",
  lang: "es",
  translationOf: "youth-digital-wellbeing",
  category: "Youth",
  name: "Bienestar digital y uso sano de las pantallas",
  skills: "Revisar tu tiempo real frente a la pantalla, Reconocer las funciones hechas para que sigas deslizando, Proteger tu sueño de las pantallas, Controlar las notificaciones y poner límites a las apps, Crear un feed más sano, Hacer y probar un plan de pantallas",
  outcome: "revisar cómo usas de verdad tu teléfono, reconocer las funciones que te hacen volver, cambiar tus ajustes y tus hábitos para proteger tu sueño, tu concentración y tu ánimo, y seguir un plan personal de pantallas durante una semana.",
  about: [
    "Los teléfonos, los juegos y las redes sociales pueden ser geniales: amigos, música, aprender, crear, pedir ayuda. Pero también están diseñados para mantenerte en ellos el mayor tiempo posible. El bienestar digital significa usar las pantallas de una forma que te ayude, no de una forma que se adueñe de tu sueño, tus tareas, tus deportes, tu trabajo o tu ánimo.",
    "Este curso es para jóvenes que quieren más control, no un sermón. Nadie te va a decir que tires tu teléfono. Vas a mirar tus propios números, aprender los trucos que usan las apps, cambiar algunos ajustes y armar un plan que encaje con tu vida.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\" en tu propio teléfono o dispositivo. Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe tu plan personal de pantallas y pruébalo durante siete días: tu meta de tiempo frente a la pantalla, tus dos apps principales para limitar (con los límites puestos en tu teléfono), tus cambios en las notificaciones, una hora para apagar las pantallas antes de dormir y un lugar donde estacionar el teléfono de noche, dos cosas para hacer en vez de deslizar y un cambio en tu feed. Al final de la semana, compara tu tiempo frente a la pantalla y tu sueño con los de la semana anterior.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes, sobre todo adolescentes, que usan teléfonos, videojuegos y redes sociales todos los días y quieren más control sobre su tiempo frente a la pantalla sin que les den sermones.",
    startingPoint: "Usan su teléfono con confianza para apps, juegos y mensajes. La mayoría cree que pasa menos tiempo frente a la pantalla del que pasa, tiene casi todas las notificaciones activadas, desliza hasta tarde en la noche y nunca ha puesto límites a las apps ni cambiado su feed a propósito.",
    gap: "Las apps están diseñadas para mantener a la gente en ellas, y eso puede quitarle tiempo al sueño, las tareas, los deportes, el trabajo y el ánimo. Los jóvenes necesitan ver sus números reales, detectar los ganchos, cambiar su configuración y sus hábitos, y probar un plan, para que las pantallas les ayuden en lugar de tomar el control.",
    constraints: [
      "Se necesita su propio teléfono o dispositivo para las tareas de práctica; los menús cambian según el teléfono",
      "Sin sermones: cada persona escoge sus propias metas",
      "Salud mental: a quienes se sienten mal con frecuencia se les orienta hacia un adulto de confianza, un médico o una línea de crisis; el curso no los trata",
      "Privacidad: cada persona guarda sus números y notas para sí, a menos que decida compartirlos",
      "Lecciones cortas y palabras sencillas"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando la configuración de tu propio teléfono", action: "encontrar tu tiempo diario frente a la pantalla, tus apps más usadas y las veces que lo tomas o las notificaciones, y compararlos con tus metas", standard: "anotando los tres números" },
    { id: "O2", condition: "En una app que usas seguido", action: "identificar los ganchos de diseño que te hacen volver y desactivar o esquivar uno", standard: "nombrando al menos tres ganchos" },
    { id: "O3", condition: "Para tus noches", action: "fijar una hora para apagar las pantallas, un lugar donde estacionar el teléfono lejos de tu cama y un modo de sueño", standard: "con las pantallas guardadas unos 30 minutos antes de tu hora de dormir" },
    { id: "O4", condition: "Usando la configuración de tu teléfono", action: "desactivar las notificaciones que no son esenciales y poner un límite diario a tu app más usada", standard: "desactivando las notificaciones de al menos tres apps" },
    { id: "O5", condition: "En tu red social principal", action: "cambiar tu feed silenciando o dejando de seguir cuentas que te hacen sentir peor y siguiendo cuentas que te ayudan a crecer", standard: "cambiando al menos dos cuentas de cada tipo" },
    { id: "O6", condition: "Usando lo que configuraste en este curso", action: "escribir un plan de pantallas personal, seguirlo durante siete días y comparar tus resultados con tus números de inicio", standard: "con todas las partes del plan y una comparación de antes y después" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conocer tus hábitos con las pantallas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Revisar tu tiempo real frente a la pantalla",
          minutes: 4,
          goal: "Encontrar en tu propio teléfono tu tiempo diario frente a la pantalla y tus apps más usadas.",
          text: [
            "La mayoría de la gente cree que usa la pantalla menos de lo que la usa. Tu teléfono ya lo mide. En un iPhone, abre Ajustes y busca Tiempo de uso. En muchos teléfonos Android, abre Ajustes (o Configuración) y busca Bienestar digital. Los nombres pueden cambiar según el teléfono; si no lo encuentras, escribe \"tiempo de uso\" en el buscador de Ajustes.",
            "Mira tres números: tu promedio diario, tus apps más usadas y cuántas veces tomas el teléfono o recibes notificaciones. Las veces que lo tomas y las notificaciones muestran con qué frecuencia el teléfono te hace volver.",
            "No hay un número perfecto. Lo que importa es si tu tiempo frente a la pantalla encaja con tus metas: dormir lo suficiente, hacer las tareas o el trabajo, ver a tus amigos en persona, hacer deporte, descansar y tener pasatiempos. Tus números son un punto de partida, no una calificación."
          ],
          steps: ["Abre Ajustes en tu teléfono.", "Busca Tiempo de uso (iPhone) o Bienestar digital (muchos Android), o escribe \"tiempo de uso\" en el buscador de Ajustes.", "Anota tu promedio diario, tus tres apps más usadas y cuántas veces lo tomas o cuántas notificaciones recibes.", "Pregúntate: ¿esto encaja con mis metas?"],
          words: [["Tiempo frente a la pantalla", "el tiempo que pasas mirando una pantalla."], ["Veces que lo tomas", "cada vez que levantas o desbloqueas tu teléfono."], ["Bienestar digital", "usar la tecnología de una forma que apoye tu salud, tus metas y tu ánimo."]],
          slides: [
            { title: "Tu teléfono ya lo mide", bullets: ["iPhone: Ajustes y luego Tiempo de uso", "Muchos Android: Ajustes y luego Bienestar digital", "¿No lo encuentras? Busca \"tiempo de uso\" en Ajustes"] },
            { title: "Tres números para revisar", bullets: ["Promedio diario", "Apps más usadas", "Veces que lo tomas y notificaciones"] },
            { title: "No hay un número perfecto", bullets: ["¿Encaja con tus metas?", "Sueño, escuela o trabajo, amigos, deporte, descanso", "Un punto de partida, no una calificación"] }
          ],
          tryIt: "Abre la página de tiempo de uso de tu teléfono. Anota tu promedio diario, tus tres apps más usadas y cuántas veces al día lo tomas o cuántas notificaciones recibes. Luego escribe una meta con la que las pantallas se estén metiendo, si hay alguna.",
          youCanNow: "encontrar en tu propio teléfono tu tiempo real frente a la pantalla, tus apps más usadas y cuántas veces lo tomas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué muestra el número de \"veces que lo tomas\" de tu teléfono?", options: ["Cuánto pesa tu teléfono", "Cuántas apps tienes", "Con qué frecuencia tu teléfono te hace volver", "El nivel de tu batería"], answer: 2, why: "Las veces que lo tomas y las notificaciones muestran con qué frecuencia tu teléfono te hace volver." },
            { objective: "O1", q: "No encuentras Tiempo en pantalla ni Bienestar digital en tu teléfono. ¿Qué haces?", options: ["Buscas \"tiempo en pantalla\" en Configuración", "Adivinas el número", "Te rindes", "Descargas una app cualquiera de un anuncio emergente"], answer: 0, why: "Los nombres cambian según el teléfono, así que busca \"tiempo en pantalla\" en Configuración." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Cómo las apps te mantienen deslizando",
          minutes: 5,
          goal: "Reconocer las funciones de diseño que te hacen volver.",
          text: [
            "Muchas apps ganan dinero con tu atención: mientras más tiempo te quedas, más anuncios te muestran. Por eso están hechas para que cueste soltarlas. Conocer los trucos te hace más fácil decidir por ti mismo.",
            "Ganchos comunes: el deslizamiento infinito (nunca hay un final), la reproducción automática (el siguiente video empieza solo), las notificaciones y los globos rojos (te hacen revisar), las rachas (miedo a perderlas), los me gusta y las vistas (sigues revisando si hay más) y los feeds \"para ti\" que aprenden exactamente qué te mantiene mirando.",
            "Nada de esto significa que seas débil. Estas funciones las diseñan equipos de expertos. La respuesta es poner tus propios puntos de parada: desactiva la reproducción automática, pon límites de tiempo y decide antes de abrir una app para qué la vas a abrir."
          ],
          steps: ["Abre tu app más usada de la lección 1.", "Encuentra cada gancho: deslizamiento infinito, reproducción automática, notificaciones, rachas, me gusta.", "Elige un gancho para desactivar o esquivar.", "Antes de abrir una app, di para qué la vas a abrir."],
          words: [["Deslizamiento infinito", "un feed que sigue cargando más contenido, así que no hay un punto natural para parar."], ["Reproducción automática", "cuando el siguiente video empieza solo."], ["Algoritmo", "las reglas de computadora que usa una app para elegir qué mostrarte después."]],
          slides: [
            { title: "Tu atención es el producto", bullets: ["Más tiempo en la app = más anuncios", "Por eso las apps están hechas para que cueste soltarlas"] },
            { title: "Ganchos comunes", bullets: ["Deslizamiento infinito y reproducción automática", "Notificaciones y globos rojos", "Rachas, me gusta y vistas", "Feeds \"para ti\""] },
            { title: "Pon tus propios puntos de parada", bullets: ["Desactiva la reproducción automática", "Pon límites de tiempo", "Decide primero para qué entras"] }
          ],
          tryIt: "Abre la app que más usas y haz una lista de todos los ganchos que encuentres. Desactiva uno (por ejemplo la reproducción automática o un tipo de notificación) si la app te deja. Escribe cuál cambiaste.",
          youCanNow: "reconocer las funciones que usan las apps para que sigas deslizando y poner tus propios puntos de parada.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es la reproducción automática?", options: ["Un modo de juego", "Que el siguiente video empiece solo", "Un ahorro de batería", "Una opción de privacidad"], answer: 1, why: "La reproducción automática empieza el siguiente video sin que tú lo escojas, y eso hace difícil parar." },
            { objective: "O2", q: "Abres una app para responder un mensaje y terminas deslizando una hora. ¿Qué hábito te ayuda la próxima vez?", options: ["Activar más notificaciones", "Abrir más apps a la vez", "Mantener una racha", "Decidir a qué vas antes de abrir la app"], answer: 3, why: "Decidir a qué vas te da tu propio punto para parar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Las pantallas, el sueño y tu ánimo",
          minutes: 5,
          goal: "Fijar una hora para apagar las pantallas y un lugar donde estacionar el teléfono de noche.",
          text: [
            "El sueño es cuando tu cuerpo y tu cerebro se recuperan. Los CDC (la agencia de salud pública de Estados Unidos) dicen que los adolescentes de 13 a 17 años necesitan de 8 a 10 horas por noche, y los adultos de 18 años en adelante, 7 horas o más. Deslizar, jugar y mandar mensajes tarde en la noche son de los mayores ladrones del sueño: te acuestas más tarde y te despiertas con notificaciones.",
            "Los consejos de sueño de los CDC incluyen acostarte y levantarte a la misma hora, mantener tu cuarto oscuro, tranquilo y fresco, y dejar las pantallas unos 30 minutos antes de dormir. Un lugar para estacionar el teléfono fuera de tu cama, o al otro lado del cuarto, lo hace más fácil. Usa un despertador barato si tu teléfono es tu alarma.",
            "Fíjate también en cómo las pantallas afectan tu ánimo. Si ciertas apps te dejan ansioso, enojado o sintiéndote peor contigo mismo, esa es información útil. Si muchas veces te sientes decaído, no puedes dormir o sientes que no hay esperanza, habla con un adulto de confianza o con un médico. En Estados Unidos puedes llamar o enviar un mensaje de texto al 988 a cualquier hora, con ayuda en español por llamada, texto y chat; fuera de Estados Unidos, llama a la línea de crisis o al número de emergencias de tu país."
          ],
          steps: ["Elige tu hora de dormir y cuenta 30 minutos hacia atrás: esa es tu hora de apagar las pantallas.", "Elige un lugar para estacionar el teléfono lejos de tu cama.", "Activa el modo de sueño o No molestar de tu teléfono para la noche.", "Fíjate qué apps cambian tu ánimo, y cómo."],
          words: [["No molestar", "un ajuste del teléfono que silencia llamadas y notificaciones durante un tiempo."], ["Horario de sueño", "acostarte y levantarte más o menos a la misma hora todos los días."]],
          slides: [
            { title: "Cuánto dormir (CDC)", bullets: ["Adolescentes de 13 a 17: de 8 a 10 horas", "Adultos de 18 en adelante: 7 horas o más"] },
            { title: "Protege tu sueño", bullets: ["Misma hora para acostarte y levantarte", "Cuarto oscuro, tranquilo y fresco", "Deja las pantallas unos 30 minutos antes de dormir"] },
            { title: "Estaciona tu teléfono", bullets: ["Lejos de tu cama", "Modo de sueño o No molestar activado", "Usa un despertador si hace falta"] },
            { title: "Revisa tu ánimo", bullets: ["¿Qué apps te dejan peor?", "¿Decaído o sin dormir seguido? Habla con alguien", "EE. UU.: llama o envía un texto al 988 (hay español); fuera: tu línea de crisis"] }
          ],
          sources: [{ name: "CDC: Acerca del sueño (en inglés)", url: "https://www.cdc.gov/sleep/about/index.html" }, { name: "Línea 988 de Prevención del Suicidio y Crisis", url: "https://988lifeline.org/" }],
          tryIt: "Fija tu hora de apagar las pantallas y tu lugar para estacionar el teléfono para esta noche. Activa el modo de sueño o No molestar. Mañana, escribe cómo dormiste y cómo te sentiste en la mañana.",
          youCanNow: "proteger tu sueño con una hora para apagar las pantallas, un lugar para estacionar el teléfono y el modo No molestar.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un lugar donde estacionar el teléfono?", options: ["Una funda para tu teléfono", "Un cable para cargarlo", "Una opción de una app", "Un lugar lejos de tu cama donde el teléfono se queda en la noche"], answer: 3, why: "Dejar el teléfono lejos de tu cama hace más difícil deslizar hasta tarde." },
            { objective: "O3", q: "Tu hora de dormir es a las 10:30 pm. ¿Cuándo guardas las pantallas?", options: ["A las 10:30 pm", "Más o menos a las 10 pm", "Cuando te sientas cansado", "Después de un video más"], answer: 1, why: "Guardar las pantallas unos 30 minutos antes de dormir te ayuda a dormir." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocer tus hábitos con las pantallas",
        questions: [
          { objective: "O1", q: "¿Dónde sueles encontrar tu tiempo frente a la pantalla en un iPhone?", options: ["En la app de la cámara", "En Ajustes y luego Tiempo de uso", "En la calculadora", "En la App Store"], answer: 1, why: "Los iPhone lo miden en Tiempo de uso, dentro de Ajustes." },
          { objective: "O1", q: "¿Qué te dice un número alto de veces que tomas el teléfono?", options: ["Que tu batería es vieja", "Que tu teléfono te hace volver muy seguido", "Que tienes un teléfono rápido", "Nada"], answer: 1, why: "Las veces que lo tomas muestran con qué frecuencia vuelves a tu teléfono." },
          { objective: "O2", q: "¿Por qué muchas apps usan el deslizamiento infinito y la reproducción automática?", options: ["Para que te quedes más tiempo en la app", "Para ahorrar tu batería", "Para ayudarte a dormir", "Porque la ley lo exige"], answer: 0, why: "Más tiempo en la app significa más anuncios y más dinero para la app." },
          { objective: "O3", q: "¿Cuántas horas de sueño dicen los CDC que necesitan los adolescentes de 13 a 17 años?", options: ["De 4 a 5", "De 5 a 6", "De 12 a 14", "De 8 a 10"], answer: 3, why: "Los CDC indican de 8 a 10 horas para los adolescentes de 13 a 17 años." },
          { objective: "O3", q: "¿Qué hábito protege tu sueño?", options: ["Deslizar en la cama hasta quedarte dormido", "Dejar las notificaciones con sonido fuerte", "Dejar las pantallas unos 30 minutos antes de dormir", "Jugar hasta las 2 de la mañana en noches de escuela"], answer: 2, why: "Los CDC sugieren dejar las pantallas antes de dormir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tomar el control",
      lessons: [
        {
          objectives: ["O4"],
          title: "Controlar las notificaciones y poner límites a las apps",
          minutes: 5,
          goal: "Desactivar las notificaciones que no son esenciales y poner un límite a una app.",
          text: [
            "Cada notificación es una interrupción. Puede tomar un buen rato recuperar la concentración después de revisar el teléfono, y eso hace más lentas las tareas, los entrenamientos, el estudio o el trabajo. Tú decides qué apps pueden interrumpirte.",
            "Deja las notificaciones de las personas y las cosas que importan (llamadas y mensajes de tu familia, avisos de la escuela o del trabajo, tu transporte). Desactívalas para juegos, compras y la mayoría de las redes sociales. Casi siempre puedes hacerlo en Ajustes, en Notificaciones, app por app.",
            "Tanto iPhone como Android te dejan poner límites diarios de tiempo a las apps, y modos de concentración o No molestar para la escuela, el trabajo o el entrenamiento. Cuando llegas a un límite, el teléfono te avisa. Puedes saltártelo, pero esa pausa te da la oportunidad de elegir. Algunas personas también sacan las apps que más las tientan de la pantalla de inicio o cierran la sesión después de usarlas, así abrirlas cuesta un poco más."
          ],
          steps: ["Abre Ajustes y luego Notificaciones.", "Deja las personas y los avisos importantes; desactiva juegos, compras y la mayoría de las redes sociales.", "Pon un límite diario a tu app más usada (en Tiempo de uso o Bienestar digital).", "Activa un modo de concentración o No molestar durante la escuela, el trabajo o el entrenamiento.", "Saca de tu pantalla de inicio una app que te tiente."],
          words: [["Notificación", "un mensaje o aviso de una app que aparece en tu teléfono."], ["Límite de app", "un límite de tiempo diario que pones a una app."], ["Modo de concentración", "un ajuste que silencia las distracciones mientras trabajas, estudias o descansas."]],
          slides: [
            { title: "Tú eliges quién te interrumpe", bullets: ["Cada aviso rompe tu concentración", "Deja las personas y los avisos importantes", "Desactiva juegos, compras y casi todas las redes"] },
            { title: "Pon límites a las apps", bullets: ["Límite diario a tu app más usada", "El aviso te da la oportunidad de elegir"] },
            { title: "Modos de concentración", bullets: ["Escuela, trabajo o entrenamiento", "Silencia el ruido"] },
            { title: "Agrega un poco de esfuerzo", bullets: ["Saca de la pantalla de inicio las apps que te tientan", "Cierra la sesión después de usarlas"] }
          ],
          tryIt: "Revisa tus notificaciones y desactiva al menos tres apps que no necesitan interrumpirte. Luego pon un límite de tiempo diario a tu app más usada de la lección 1.",
          youCanNow: "controlar qué apps pueden interrumpirte, poner límites a las apps y usar modos de concentración.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué las notificaciones pueden hacer más lenta tu tarea?", options: ["Cada una te interrumpe, y toma tiempo volver a concentrarte", "Gastan almacenamiento", "Oscurecen la pantalla", "Cambian tus calificaciones"], answer: 0, why: "Cada notificación es una interrupción que te quita la concentración." },
            { objective: "O4", q: "Una app de compras te manda avisos de ofertas todo el día. ¿Qué haces?", options: ["Los dejas; te podrías perder una oferta", "Revisas cada uno de inmediato", "Desactivas las notificaciones de esa app en Configuración", "Mejor desactivas tus llamadas y mensajes"], answer: 2, why: "Deja las notificaciones de personas y avisos importantes; desactiva las de compras y juegos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Un feed más sano y menos comparaciones",
          minutes: 5,
          goal: "Cambiar tu feed para que te deje sintiéndote mejor, no peor.",
          text: [
            "Las redes sociales muestran solo los mejores momentos: las mejores fotos, filtros y ediciones. Comparar tu vida de todos los días con los mejores momentos de otra persona puede hacerte sentir que no eres suficiente. Recuerda que lo que ves fue elegido y editado.",
            "Puedes entrenar tu feed. Deja de seguir o silencia las cuentas que te hacen sentir mal con tu cuerpo, tu dinero o tu vida. Sigue a personas que te enseñan algo, te hacen reír o apoyan tus metas: tu deporte, música, arte, una carrera que te interesa, tu cultura. Usa la opción \"no me interesa\" cuando la app la ofrezca. El algoritmo aprende de lo que miras, así que mira a propósito.",
            "Revisa cómo estás: \"¿Cómo me siento después de 10 minutos en esta app?\" Si muchas veces la respuesta es peor, cambia lo que sigues o cuánto tiempo te quedas. Si alguien en línea está siendo cruel contigo, díselo a un adulto de confianza; el curso de Koach Learn Mantenerte a salvo del ciberacoso te enseña qué hacer."
          ],
          steps: ["Desliza tu feed durante dos minutos y fíjate cómo te hace sentir cada cuenta.", "Deja de seguir o silencia dos cuentas que te hacen sentir peor.", "Sigue dos cuentas que te enseñen, te inspiren o te hagan reír.", "Usa \"no me interesa\" en el contenido que no quieres."],
          words: [["Mejores momentos", "solo los mejores momentos, elegidos y editados para verse bien."], ["Silenciar", "ocultar las publicaciones de alguien sin dejar de seguirlo y sin que lo sepa."]],
          slides: [
            { title: "Son solo los mejores momentos", bullets: ["Las mejores fotos, filtros y ediciones", "No compares tu día a día con lo mejor de otros"] },
            { title: "Entrena tu feed", bullets: ["Deja de seguir o silencia lo que te hace sentir peor", "Sigue lo que te enseña, inspira o hace reír", "Usa \"no me interesa\""] },
            { title: "Revisa cómo estás", bullets: ["¿Cómo me siento después de 10 minutos?", "¿Muchas veces peor? Cambia lo que sigues"] }
          ],
          tryIt: "Pasa dos minutos en tu app principal y califica cómo te hace sentir cada una de las primeras diez publicaciones (mejor, igual, peor). Silencia o deja de seguir dos cuentas \"peor\" y sigue dos que te ayuden a crecer.",
          youCanNow: "darle forma a tu feed para que apoye tu ánimo y tus metas en lugar de hacerte compararte.",
          quickCheck: [
            { objective: "O5", q: "¿De qué aprende el algoritmo de una app?", options: ["De lo que ves y haces en la app", "De tus calificaciones escolares", "Del clima", "De nada; los feeds son al azar"], answer: 0, why: "El algoritmo aprende de lo que ves, así que ver contenido a propósito le da forma a tu feed." },
            { objective: "O5", q: "Casi todos los días te sientes peor después de 10 minutos en una app. ¿Qué intentas?", options: ["Deslizar más tiempo para sentirte mejor", "Seguir más cuentas como las que te molestan", "Ignorar cómo te sientes", "Cambiar a quién sigues o cuánto tiempo te quedas"], answer: 3, why: "Si una app seguido te deja sintiéndote peor, cambia tu feed o tu tiempo en ella." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hacer y probar tu plan de pantallas",
          minutes: 6,
          goal: "Escribir un plan de pantallas y probarlo durante siete días.",
          text: [
            "Un plan convierte las buenas ideas en hábitos. Tu plan de pantallas es corto y concreto, y es tuyo: tú eliges las metas.",
            "Incluye: tu meta diaria de tiempo frente a la pantalla, tus dos apps principales para limitar (con los límites puestos en tu teléfono), tus cambios en las notificaciones, tu hora de apagar las pantallas y tu lugar para estacionar el teléfono, dos cosas para hacer en vez de deslizar cuando estés aburrido (caminar, practicar tu deporte, dibujar, llamar a un amigo, leer, cocinar) y un cambio en tu feed.",
            "Pruébalo durante siete días y luego compara tu tiempo frente a la pantalla, las veces que tomas el teléfono y tu sueño con tus números de la lección 1. Quédate con lo que funcionó y cambia lo que no. Fallar un día es normal; solo vuelve a empezar al día siguiente. Contarle tu plan a un amigo o a alguien de tu familia, o hacerlo juntos, lo hace más fácil."
          ],
          steps: ["Escribe tu meta de tiempo frente a la pantalla.", "Pon límites a tus dos apps principales.", "Anota tus cambios en las notificaciones y tu hora de apagar las pantallas.", "Escribe dos cosas para hacer en vez de deslizar.", "Pruébalo siete días y compáralo con la lección 1."],
          words: [["Plan de pantallas", "tus propias reglas por escrito sobre cuándo, dónde y cuánto usas las pantallas."]],
          slides: [
            { title: "Tu plan de pantallas", bullets: ["Meta de tiempo y dos límites de apps", "Cambios en las notificaciones", "Hora de apagar las pantallas y lugar para el teléfono"] },
            { title: "En vez de deslizar", bullets: ["Caminar, practicar, dibujar, leer, cocinar", "Llamar o ver a un amigo"] },
            { title: "Pruébalo siete días", bullets: ["Compara con tus números de la lección 1", "Quédate con lo que funciona, cambia lo que no", "¿Fallaste? Vuelve a empezar mañana"] }
          ],
          tryIt: "Tarea final: escribe tu plan de pantallas con todas sus partes, pon los límites en tu teléfono y síguelo durante siete días. El séptimo día, compara tu tiempo frente a la pantalla, las veces que tomas el teléfono y tu sueño con tus números de la lección 1.",
          youCanNow: "hacer, seguir y ajustar un plan personal de pantallas que protege tu sueño, tu concentración y tu ánimo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué comparas al final de tu prueba de siete días?", options: ["Tu tiempo frente a la pantalla, las veces que lo tomas y tu sueño con tus números de la Lección 1", "El tiempo frente a la pantalla de tus amigos", "El precio de tu teléfono", "Tu número de seguidores"], answer: 0, why: "Comparar con tus números de inicio muestra qué funcionó." },
            { objective: "O6", q: "Te aburres y agarras el teléfono. ¿Qué dice tu plan que hagas?", options: ["Abrir tu app más usada", "Quitar los límites de las apps", "Hacer una de tus dos actividades en lugar de deslizar, como salir a caminar o llamar a alguien", "Quedarte despierto más tarde"], answer: 2, why: "Tu plan enumera dos cosas para hacer en lugar de deslizar cuando te aburres." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Tomar el control",
        questions: [
          { objective: "O4", q: "¿Qué notificaciones suele valer la pena dejar activadas?", options: ["Los mensajes de tu familia y los avisos de la escuela o del trabajo", "Las de todos los juegos", "Las ofertas de compras", "Todos los me gusta de las redes sociales"], answer: 0, why: "Deja los avisos que importan y desactiva el resto." },
          { objective: "O4", q: "¿Qué pasa cuando llegas a un límite de app que pusiste?", options: ["Tu teléfono se bloquea para siempre", "Se borra la app", "Tu teléfono te avisa y te da la oportunidad de elegir", "Te cierran la cuenta"], answer: 2, why: "El límite agrega una pausa para que puedas elegir." },
          { objective: "O5", q: "¿Por qué compararte con las publicaciones de las redes sociales es injusto contigo?", options: ["Las publicaciones siempre son falsas", "Los teléfonos son demasiado pequeños", "Nadie publica nada real", "Las publicaciones suelen ser solo los mejores momentos, elegidos y editados"], answer: 3, why: "Estás comparando tu día a día con los mejores momentos de otra persona." },
          { objective: "O5", q: "Una cuenta muchas veces te hace sentir peor contigo mismo. ¿Qué puedes hacer?", options: ["Verla más", "Silenciarla o dejar de seguirla", "Enviarle tu contraseña", "Borrar tu teléfono"], answer: 1, why: "Silenciar o dejar de seguir cambia lo que te muestra tu feed." },
          { objective: "O6", q: "No cumpliste tu plan de pantallas el tercer día. ¿Y ahora?", options: ["Rendirte para siempre", "Borrar todas tus apps", "Volver a empezar al día siguiente y ajustar el plan si hace falta", "Ocultárselo a todos"], answer: 2, why: "Fallar es normal; sigue adelante y ajusta el plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Bienestar digital y uso sano de las pantallas",
    questions: [
      { objective: "O1", q: "El bienestar digital significa:", options: ["No usar nunca un teléfono", "Usar las pantallas de una forma que apoye tu salud, tus metas y tu ánimo", "Tener el teléfono más nuevo", "Tener la mayor cantidad de seguidores"], answer: 1, why: "Se trata de que las pantallas te ayuden, no de que se adueñen de tu vida." },
      { objective: "O1", q: "En muchos teléfonos Android, el tiempo de uso está en Ajustes, en:", options: ["Bienestar digital", "Cámara", "Fondo de pantalla", "Bluetooth"], answer: 0, why: "Muchos Android lo llaman Bienestar digital; el nombre puede variar." },
      { objective: "O1", q: "¿Qué tres números conviene revisar primero?", options: ["Batería, almacenamiento, brillo", "Seguidores, me gusta, comentarios", "Promedio diario, apps más usadas, veces que lo tomas o notificaciones", "Precio, antigüedad y color del teléfono"], answer: 2, why: "Muestran cuánto y con qué frecuencia usas el teléfono." },
      { objective: "O1", q: "¿Hay un número perfecto de tiempo frente a la pantalla para todos?", options: ["Sí, exactamente 1 hora", "Sí, exactamente 3 horas", "Sí, cero", "No; lo que importa es si encaja con tus metas"], answer: 3, why: "Tu tiempo frente a la pantalla debe encajar con tu sueño, la escuela, el trabajo y tu vida." },
      { objective: "O2", q: "El deslizamiento infinito es un gancho porque:", options: ["No hay un punto natural para parar", "Ahorra datos", "Lo exige la ley", "Hace la pantalla más brillante"], answer: 0, why: "Sin un final, es fácil seguir y seguir." },
      { objective: "O2", q: "Un \"algoritmo\" en una app es:", options: ["Un tipo de funda para el teléfono", "Una persona que lee tus mensajes", "Las reglas de computadora que eligen qué mostrarte después", "Un nivel de un juego"], answer: 2, why: "Los algoritmos aprenden qué te mantiene mirando." },
      { objective: "O2", q: "¿Cuál es un buen punto de parada para agregar?", options: ["Activar la reproducción automática", "Desactivar la reproducción automática", "Agregar más notificaciones", "Quitar todos los límites"], answer: 1, why: "Desactivar la reproducción automática evita que el siguiente video empiece solo." },
      { objective: "O2", q: "Antes de abrir una app, un hábito útil es:", options: ["Subir el volumen al máximo", "Abrir otras cinco apps", "Revisar todas las notificaciones", "Decidir para qué la vas a abrir"], answer: 3, why: "Tener un propósito claro hace más fácil cerrar la app." },
      { objective: "O3", q: "¿Cuántas horas de sueño dicen los CDC que necesitan los adultos de 18 años en adelante?", options: ["7 o más", "4", "5", "De 3 a 4"], answer: 0, why: "Los CDC dicen que los adultos necesitan 7 horas o más." },
      { objective: "O3", q: "De noche, el lugar para estacionar el teléfono debe estar:", options: ["Debajo de tu almohada", "En tu mano", "Lejos de tu cama", "Con el sonido fuerte"], answer: 2, why: "La distancia de tu cama protege tu sueño." },
      { objective: "O3", q: "Muchas veces te sientes decaído y no puedes dormir. En Estados Unidos, ¿a dónde puedes acudir a cualquier hora?", options: ["Publicarlo en una sección de comentarios", "Llamar o enviar un mensaje de texto al 988", "Esperar y no decírselo a nadie", "Preguntarle a una app cualquiera"], answer: 1, why: "El 988 es gratis, abre las 24 horas y tiene ayuda en español; habla también con un adulto de confianza o un médico. Fuera de Estados Unidos, usa la línea de crisis de tu país." },
      { objective: "O4", q: "¿Qué notificación es mejor desactivar?", options: ["Llegó tu transporte", "Un mensaje de tu mamá o tu papá", "Un aviso de la escuela", "Un juego que te pide que vuelvas"], answer: 3, why: "Los avisos de juegos y compras casi nunca necesitan interrumpirte." },
      { objective: "O4", q: "¿Qué es un modo de concentración?", options: ["Un ajuste que silencia las distracciones mientras estudias, trabajas o descansas", "Un filtro de la cámara", "Una app de pago", "Un juego"], answer: 0, why: "Los modos de concentración silencian los avisos durante un tiempo." },
      { objective: "O4", q: "Sacar una app que te tienta de la pantalla de inicio ayuda porque:", options: ["Borra tu cuenta", "Hace que abrirla cueste un poco más", "Hace la app más rápida", "Te da puntos"], answer: 1, why: "Un pequeño paso extra te da tiempo para elegir." },
      { objective: "O5", q: "\"Los mejores momentos\" en redes sociales son:", options: ["Una herramienta de pesca", "Una transmisión en vivo sin editar", "Tu informe de tiempo de uso", "Solo los mejores momentos, elegidos y editados"], answer: 3, why: "Las redes sociales suelen mostrar solo los mejores momentos, editados." },
      { objective: "O5", q: "¿Qué hace silenciar una cuenta?", options: ["La denuncia a la policía", "Borra su cuenta", "Oculta sus publicaciones sin dejar de seguirla y sin avisarle", "Le envía un mensaje"], answer: 2, why: "Silenciar oculta sus publicaciones sin hacer ruido." },
      { objective: "O5", q: "Una buena pregunta para revisar cómo estás después de usar una app es:", options: ["¿Cuántos me gusta tuve?", "¿Cómo me siento después de 10 minutos en esta app?", "¿Quién tiene más seguidores?", "¿Qué debería comprar?"], answer: 1, why: "Notar cómo te sientes te ayuda a cambiar lo que usas." },
      { objective: "O6", q: "¿Qué va en tu plan de pantallas?", options: ["Tus contraseñas", "Una lista de personas con quienes discutir", "Activar todas las notificaciones", "Dos cosas para hacer en vez de deslizar"], answer: 3, why: "Tener otras actividades listas hace más fácil dejar el teléfono." },
      { objective: "O6", q: "¿Cuánto tiempo debes probar tu plan de pantallas antes de juzgarlo?", options: ["Un minuto", "Una hora", "Siete días", "No hay que probarlo nunca"], answer: 2, why: "Una semana te da números reales para comparar." },
      { objective: "O6", q: "¿Qué hace más fácil cumplir un plan de pantallas?", options: ["Contárselo a un amigo o a tu familia, o hacerlo juntos", "Mantenerlo en secreto", "Hacerlo lo más estricto posible", "Cambiarlo cada hora"], answer: 0, why: "El apoyo de otros te ayuda a seguir adelante." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Meta y límites de apps",
        objective: "O4",
        notYet: "No hay meta de tiempo frente a la pantalla, o los límites no están puestos en el teléfono.",
        meets: "Una meta diaria de tiempo frente a la pantalla y límites puestos en las dos apps más usadas.",
        exceeds: "Además usa un modo de concentración para la escuela, el trabajo o los entrenamientos."
      },
      {
        name: "Notificaciones",
        objective: "O4",
        notYet: "No hay cambios en las notificaciones.",
        meets: "Notificaciones desactivadas en al menos tres apps no esenciales, dejando las de personas y los avisos importantes.",
        exceeds: "Además quitó de la pantalla de inicio una app que le tienta."
      },
      {
        name: "Plan de sueño",
        objective: "O3",
        notYet: "No hay hora para apagar las pantallas ni lugar donde estacionar el teléfono.",
        meets: "Una hora para apagar las pantallas unos 30 minutos antes de dormir y un lugar donde estacionar el teléfono lejos de la cama.",
        exceeds: "El modo de sueño o No molestar está activado todas las noches de la prueba."
      },
      {
        name: "Feed y alternativas",
        objective: "O5",
        notYet: "No hay cambios en el feed, o no hay alternativas a deslizar.",
        meets: "Un cambio en el feed y dos cosas para hacer en lugar de deslizar.",
        exceeds: "Anota cómo afectó a su ánimo el cambio en el feed."
      },
      {
        name: "Prueba de siete días",
        objective: "O6",
        notYet: "El plan no se probó, o no se compararon los resultados.",
        meets: "Seguido durante siete días, con el tiempo frente a la pantalla, las veces que lo toma y el sueño comparados con la Lección 1.",
        exceeds: "Dice qué mantener y qué cambiar para la próxima semana."
      }
    ]
  },
  evaluation: {
    results: [
      "Jóvenes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Jóvenes cuyo tiempo frente a la pantalla o veces que toman el teléfono bajan después de la prueba de siete días (según lo que informan)",
      "Jóvenes que informan más horas de sueño en el seguimiento a los 30 días",
      "Jóvenes que siguen usando su plan de pantallas después de 30 días (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "El teléfono o dispositivo propio de la persona",
      "Papel o una app de notas para el plan de pantallas y las notas diarias",
      "Un despertador barato si el teléfono se usa como alarma (opcional)",
      "Unos 60 minutos en total, más una prueba de siete días"
    ],
    facilitatorNotes: [
      "Que sea una decisión y no un sermón: cada persona fija sus propias metas y guarda sus números en privado, a menos que quiera compartirlos.",
      "Ayuda a quienes tienen teléfonos distintos a encontrar la configuración correcta; los menús cambian según el dispositivo.",
      "Comparte recursos locales de salud mental y de crisis, incluida la línea 988 en Estados Unidos, y diles con quién hablar si se sienten mal con frecuencia.",
      "Haz la prueba de siete días como un reto de grupo, con una revisión al final de la semana.",
      "Califica el plan de pantallas con la rúbrica y da retroalimentación sobre una fila en Todavía no a la vez."
    ]
  }
};
