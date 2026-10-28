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
  chapters: [
    {
      name: "Capítulo 1: Conocer tus hábitos con las pantallas",
      lessons: [
        {
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
          youCanNow: "encontrar en tu propio teléfono tu tiempo real frente a la pantalla, tus apps más usadas y cuántas veces lo tomas."
        },
        {
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
          youCanNow: "reconocer las funciones que usan las apps para que sigas deslizando y poner tus propios puntos de parada."
        },
        {
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
          youCanNow: "proteger tu sueño con una hora para apagar las pantallas, un lugar para estacionar el teléfono y el modo No molestar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocer tus hábitos con las pantallas",
        questions: [
          { q: "¿Dónde sueles encontrar tu tiempo frente a la pantalla en un iPhone?", options: ["En la app de la cámara", "En Ajustes y luego Tiempo de uso", "En la calculadora", "En la App Store"], answer: 1, why: "Los iPhone lo miden en Tiempo de uso, dentro de Ajustes." },
          { q: "¿Qué te dice un número alto de veces que tomas el teléfono?", options: ["Que tu batería es vieja", "Que tu teléfono te hace volver muy seguido", "Que tienes un teléfono rápido", "Nada"], answer: 1, why: "Las veces que lo tomas muestran con qué frecuencia vuelves a tu teléfono." },
          { q: "¿Por qué muchas apps usan el deslizamiento infinito y la reproducción automática?", options: ["Para que te quedes más tiempo en la app", "Para ahorrar tu batería", "Para ayudarte a dormir", "Porque la ley lo exige"], answer: 0, why: "Más tiempo en la app significa más anuncios y más dinero para la app." },
          { q: "¿Cuántas horas de sueño dicen los CDC que necesitan los adolescentes de 13 a 17 años?", options: ["De 4 a 5", "De 5 a 6", "De 12 a 14", "De 8 a 10"], answer: 3, why: "Los CDC indican de 8 a 10 horas para los adolescentes de 13 a 17 años." },
          { q: "¿Qué hábito protege tu sueño?", options: ["Deslizar en la cama hasta quedarte dormido", "Dejar las notificaciones con sonido fuerte", "Dejar las pantallas unos 30 minutos antes de dormir", "Jugar hasta las 2 de la mañana en noches de escuela"], answer: 2, why: "Los CDC sugieren dejar las pantallas antes de dormir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tomar el control",
      lessons: [
        {
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
          youCanNow: "controlar qué apps pueden interrumpirte, poner límites a las apps y usar modos de concentración."
        },
        {
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
          youCanNow: "darle forma a tu feed para que apoye tu ánimo y tus metas en lugar de hacerte compararte."
        },
        {
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
          youCanNow: "hacer, seguir y ajustar un plan personal de pantallas que protege tu sueño, tu concentración y tu ánimo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Tomar el control",
        questions: [
          { q: "¿Qué notificaciones suele valer la pena dejar activadas?", options: ["Los mensajes de tu familia y los avisos de la escuela o del trabajo", "Las de todos los juegos", "Las ofertas de compras", "Todos los me gusta de las redes sociales"], answer: 0, why: "Deja los avisos que importan y desactiva el resto." },
          { q: "¿Qué pasa cuando llegas a un límite de app que pusiste?", options: ["Tu teléfono se bloquea para siempre", "Se borra la app", "Tu teléfono te avisa y te da la oportunidad de elegir", "Te cierran la cuenta"], answer: 2, why: "El límite agrega una pausa para que puedas elegir." },
          { q: "¿Por qué compararte con las publicaciones de las redes sociales es injusto contigo?", options: ["Las publicaciones siempre son falsas", "Los teléfonos son demasiado pequeños", "Nadie publica nada real", "Las publicaciones suelen ser solo los mejores momentos, elegidos y editados"], answer: 3, why: "Estás comparando tu día a día con los mejores momentos de otra persona." },
          { q: "Una cuenta muchas veces te hace sentir peor contigo mismo. ¿Qué puedes hacer?", options: ["Verla más", "Silenciarla o dejar de seguirla", "Enviarle tu contraseña", "Borrar tu teléfono"], answer: 1, why: "Silenciar o dejar de seguir cambia lo que te muestra tu feed." },
          { q: "No cumpliste tu plan de pantallas el tercer día. ¿Y ahora?", options: ["Rendirte para siempre", "Borrar todas tus apps", "Volver a empezar al día siguiente y ajustar el plan si hace falta", "Ocultárselo a todos"], answer: 2, why: "Fallar es normal; sigue adelante y ajusta el plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Bienestar digital y uso sano de las pantallas",
    questions: [
      { q: "El bienestar digital significa:", options: ["No usar nunca un teléfono", "Usar las pantallas de una forma que apoye tu salud, tus metas y tu ánimo", "Tener el teléfono más nuevo", "Tener la mayor cantidad de seguidores"], answer: 1, why: "Se trata de que las pantallas te ayuden, no de que se adueñen de tu vida." },
      { q: "En muchos teléfonos Android, el tiempo de uso está en Ajustes, en:", options: ["Bienestar digital", "Cámara", "Fondo de pantalla", "Bluetooth"], answer: 0, why: "Muchos Android lo llaman Bienestar digital; el nombre puede variar." },
      { q: "¿Qué tres números conviene revisar primero?", options: ["Batería, almacenamiento, brillo", "Seguidores, me gusta, comentarios", "Promedio diario, apps más usadas, veces que lo tomas o notificaciones", "Precio, antigüedad y color del teléfono"], answer: 2, why: "Muestran cuánto y con qué frecuencia usas el teléfono." },
      { q: "¿Hay un número perfecto de tiempo frente a la pantalla para todos?", options: ["Sí, exactamente 1 hora", "Sí, exactamente 3 horas", "Sí, cero", "No; lo que importa es si encaja con tus metas"], answer: 3, why: "Tu tiempo frente a la pantalla debe encajar con tu sueño, la escuela, el trabajo y tu vida." },
      { q: "El deslizamiento infinito es un gancho porque:", options: ["No hay un punto natural para parar", "Ahorra datos", "Lo exige la ley", "Hace la pantalla más brillante"], answer: 0, why: "Sin un final, es fácil seguir y seguir." },
      { q: "Un \"algoritmo\" en una app es:", options: ["Un tipo de funda para el teléfono", "Una persona que lee tus mensajes", "Las reglas de computadora que eligen qué mostrarte después", "Un nivel de un juego"], answer: 2, why: "Los algoritmos aprenden qué te mantiene mirando." },
      { q: "¿Cuál es un buen punto de parada para agregar?", options: ["Activar la reproducción automática", "Desactivar la reproducción automática", "Agregar más notificaciones", "Quitar todos los límites"], answer: 1, why: "Desactivar la reproducción automática evita que el siguiente video empiece solo." },
      { q: "Antes de abrir una app, un hábito útil es:", options: ["Subir el volumen al máximo", "Abrir otras cinco apps", "Revisar todas las notificaciones", "Decidir para qué la vas a abrir"], answer: 3, why: "Tener un propósito claro hace más fácil cerrar la app." },
      { q: "¿Cuántas horas de sueño dicen los CDC que necesitan los adultos de 18 años en adelante?", options: ["7 o más", "4", "5", "De 3 a 4"], answer: 0, why: "Los CDC dicen que los adultos necesitan 7 horas o más." },
      { q: "De noche, el lugar para estacionar el teléfono debe estar:", options: ["Debajo de tu almohada", "En tu mano", "Lejos de tu cama", "Con el sonido fuerte"], answer: 2, why: "La distancia de tu cama protege tu sueño." },
      { q: "Muchas veces te sientes decaído y no puedes dormir. En Estados Unidos, ¿a dónde puedes acudir a cualquier hora?", options: ["Publicarlo en una sección de comentarios", "Llamar o enviar un mensaje de texto al 988", "Esperar y no decírselo a nadie", "Preguntarle a una app cualquiera"], answer: 1, why: "El 988 es gratis, abre las 24 horas y tiene ayuda en español; habla también con un adulto de confianza o un médico. Fuera de Estados Unidos, usa la línea de crisis de tu país." },
      { q: "¿Qué notificación es mejor desactivar?", options: ["Llegó tu transporte", "Un mensaje de tu mamá o tu papá", "Un aviso de la escuela", "Un juego que te pide que vuelvas"], answer: 3, why: "Los avisos de juegos y compras casi nunca necesitan interrumpirte." },
      { q: "¿Qué es un modo de concentración?", options: ["Un ajuste que silencia las distracciones mientras estudias, trabajas o descansas", "Un filtro de la cámara", "Una app de pago", "Un juego"], answer: 0, why: "Los modos de concentración silencian los avisos durante un tiempo." },
      { q: "Sacar una app que te tienta de la pantalla de inicio ayuda porque:", options: ["Borra tu cuenta", "Hace que abrirla cueste un poco más", "Hace la app más rápida", "Te da puntos"], answer: 1, why: "Un pequeño paso extra te da tiempo para elegir." },
      { q: "\"Los mejores momentos\" en redes sociales son:", options: ["Una herramienta de pesca", "Una transmisión en vivo sin editar", "Tu informe de tiempo de uso", "Solo los mejores momentos, elegidos y editados"], answer: 3, why: "Las redes sociales suelen mostrar solo los mejores momentos, editados." },
      { q: "¿Qué hace silenciar una cuenta?", options: ["La denuncia a la policía", "Borra su cuenta", "Oculta sus publicaciones sin dejar de seguirla y sin avisarle", "Le envía un mensaje"], answer: 2, why: "Silenciar oculta sus publicaciones sin hacer ruido." },
      { q: "Una buena pregunta para revisar cómo estás después de usar una app es:", options: ["¿Cuántos me gusta tuve?", "¿Cómo me siento después de 10 minutos en esta app?", "¿Quién tiene más seguidores?", "¿Qué debería comprar?"], answer: 1, why: "Notar cómo te sientes te ayuda a cambiar lo que usas." },
      { q: "¿Qué va en tu plan de pantallas?", options: ["Tus contraseñas", "Una lista de personas con quienes discutir", "Activar todas las notificaciones", "Dos cosas para hacer en vez de deslizar"], answer: 3, why: "Tener otras actividades listas hace más fácil dejar el teléfono." },
      { q: "¿Cuánto tiempo debes probar tu plan de pantallas antes de juzgarlo?", options: ["Un minuto", "Una hora", "Siete días", "No hay que probarlo nunca"], answer: 2, why: "Una semana te da números reales para comparar." },
      { q: "¿Qué hace más fácil cumplir un plan de pantallas?", options: ["Contárselo a un amigo o a tu familia, o hacerlo juntos", "Mantenerlo en secreto", "Hacerlo lo más estricto posible", "Cambiarlo cada hora"], answer: 0, why: "El apoyo de otros te ayuda a seguir adelante." }
    ]
  }
};
