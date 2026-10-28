"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-ai-training-performance.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-training-performance-es",
  lang: "es",
  translationOf: "athletes-ai-training-performance",
  category: "Athletes",
  name: "IA para el entrenamiento y el rendimiento",
  skills: "Fijar una meta de entrenamiento medible, Registrar datos de entrenamiento, Leer una tendencia sencilla de entrenamiento, Preparar con IA una pregunta para tu entrenador sobre tu semana de entrenamiento, Detectar consejos de entrenamiento peligrosos de la IA",
  outcome: "fijar una meta de rendimiento medible, registrar cuatro semanas de datos de entrenamiento en una hoja, usar un asistente de IA para resumir la tendencia y llevarle a tu entrenador una pregunta clara y segura sobre tu entrenamiento.",
  about: [
    "Este curso es para deportistas que quieren entrenar de forma más inteligente y para entrenadores que quieren que sus deportistas entiendan sus propios números. Es educación general, no un programa de entrenamiento: tu entrenador y tu preparador físico definen tu entrenamiento.",
    "Fijarás una meta que puedas medir, registrarás los números correctos, verás lo que dicen y usarás un asistente de IA para ordenar tus datos y preparar mejores conversaciones con tu entrenador.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Elige una meta medible, registra al menos cuatro sesiones de datos de entrenamiento en una hoja de Google Sheets (fecha, lo que hiciste, esfuerzo del 1 al 10, resultado), pídele a un asistente de IA que describa la tendencia con palabras sencillas y escribe tres preguntas sobre tu próximo bloque de entrenamiento para llevárselas a tu entrenador.",
  chapters: [
    {
      name: "Capítulo 1: Metas y datos",
      lessons: [
        {
          title: "Fijar una meta que puedas medir",
          minutes: 5,
          goal: "Convertir una meta vaga en una meta medible con fecha.",
          text: [
            "“Ser más rápido” es un deseo. “Correr las 40 yardas 0.1 segundos más rápido al final de la pretemporada, cronometrado siempre de la misma manera” es una meta que puedes medir.",
            "Una buena meta de entrenamiento nombra una sola cosa, un número, una fecha y cómo se va a medir. Debe acordarse con tu entrenador para que encaje en el plan del equipo.",
            "Un asistente de IA puede ayudarte a reescribir una meta vaga. Prueba: “Convierte mi meta ‘estar más fuerte para el fútbol’ en una meta medible con fecha. Hazme preguntas si necesitas más información.”"
          ],
          steps: ["Escribe tu meta con tus propias palabras.", "Agrega un número para medir.", "Agrega una fecha.", "Di cómo y cuándo se va a probar.", "Acuérdala con tu entrenador."],
          words: [["Medible", "algo que puedes contar o cronometrar, para saber si cambió."], ["Línea de base", "tu número de partida antes de entrenar para la meta."]],
          slides: [
            { title: "Deseo frente a meta", bullets: ["Deseo: “ser más rápido”", "Meta: “40 yardas 0.1 s más rápido al final de la pretemporada”"] },
            { title: "Una meta tiene", bullets: ["Una sola cosa", "Un número y una fecha", "Cómo se va a probar"] },
            { title: "Usa la IA para afinarla", bullets: ["“Convierte mi meta en una medible”", "Luego acuérdala con tu entrenador"] }
          ],
          tryIt: "Escribe una meta vaga. Pídele a un asistente de IA que la haga medible con una fecha. Edítala para que sea fiel a ti y luego anota tu línea de base si la sabes.",
          youCanNow: "escribir una meta de entrenamiento medible con un número, una fecha y una prueba."
        },
        {
          title: "Registrar los datos de entrenamiento correctos",
          minutes: 5,
          goal: "Preparar un registro de entrenamiento sencillo que de verdad vayas a llevar.",
          text: [
            "Los datos solo sirven si los reúnes siempre de la misma manera. Un registro sencillo es mejor que una aplicación sofisticada que dejas de usar a la semana.",
            "Cuatro columnas alcanzan para empezar: Fecha, Sesión (lo que hiciste), Esfuerzo (qué tan duro se sintió, del 1 al 10) y Resultado (el número de tu meta). Algunos deportistas agregan las horas de sueño o una nota corta.",
            "Los aparatos que se llevan puestos, como relojes y bandas de ritmo cardíaco, pueden sumar datos, pero no son perfectos. Toma sus números como pistas, no como hechos, y mantén privados tus datos de salud."
          ],
          steps: ["Abre Google Sheets.", "Haz las columnas: Fecha, Sesión, Esfuerzo (1-10), Resultado.", "Llena una fila después de cada sesión.", "Tenla siempre en el mismo lugar de tu teléfono para que te lleve un minuto."],
          words: [["Escala de esfuerzo", "una puntuación del 1 al 10 de qué tan dura se sintió una sesión; los entrenadores a menudo la llaman RPE (por sus siglas en inglés, escala de esfuerzo percibido)."], ["Aparato que se lleva puesto", "un aparato que usas en el cuerpo, como un reloj, que mide cosas como el ritmo cardíaco o los pasos."]],
          slides: [
            { title: "Lo sencillo gana a lo sofisticado", bullets: ["Siempre de la misma manera", "Un minuto después de cada sesión"] },
            { title: "Cuatro columnas", bullets: ["Fecha", "Sesión", "Esfuerzo 1-10", "Resultado"] },
            { title: "Sobre los relojes y bandas", bullets: ["Pistas útiles, no hechos perfectos", "Mantén privados los datos de salud"] }
          ],
          tryIt: "Crea tu registro de entrenamiento en Google Sheets con las cuatro columnas. Llena tus dos o tres últimas sesiones de memoria o con tus notas.",
          youCanNow: "llevar un registro de entrenamiento sencillo y constante."
        },
        {
          title: "Leer la tendencia de tu entrenamiento",
          minutes: 5,
          goal: "Leer un gráfico de tus datos y describir lo que muestra en una o dos frases.",
          text: [
            "Después de algunas semanas, haz un gráfico de tu columna Resultado por fecha. Mira la dirección: hacia arriba, hacia abajo o plana. Un mal día no significa mucho; mira la línea en general.",
            "Compara el Esfuerzo con el Resultado. Si el esfuerzo sigue subiendo pero los resultados se quedan igual o bajan, puede que estés cansado, y eso es algo que debes contarle a tu entrenador.",
            "Puedes pegar tu tabla (sin nombres ni historial médico) en un asistente de IA y preguntar: “Describe con palabras sencillas la tendencia de estos datos de entrenamiento. ¿Qué preguntas debería hacerle a mi entrenador?” Revisa tú mismo sus cálculos."
          ],
          steps: ["Selecciona Fecha y Resultado e inserta un gráfico de líneas.", "Di la dirección: hacia arriba, hacia abajo o plana.", "Compara el Esfuerzo con el Resultado.", "Escribe un resumen de una frase."],
          words: [["Tendencia", "la dirección general de tus números con el tiempo."], ["Estancamiento", "cuando los resultados dejan de mejorar por un tiempo."]],
          slides: [
            { title: "Mira la línea", bullets: ["¿Hacia arriba, hacia abajo o plana?", "Un mal día no es una tendencia"] },
            { title: "Esfuerzo frente a resultado", bullets: ["¿Esfuerzo arriba, resultado igual o abajo?", "Puede que estés cansado: díselo a tu entrenador"] },
            { title: "La IA puede describirla", bullets: ["Pega la tabla, sin nombres ni historial médico", "Revisa tú mismo sus cálculos"] }
          ],
          tryIt: "Haz un gráfico de tu columna Resultado. Escribe una frase que describa la tendencia. Luego pídele a un asistente de IA que la describa y compara su frase con la tuya.",
          youCanNow: "hacer un gráfico de tus datos de entrenamiento y describir la tendencia con palabras sencillas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Metas y datos",
        questions: [
          { q: "¿Cuál es una meta medible?", options: ["Mejorar", "Ser una bestia", "Encestar 16 de 20 tiros libres para el 15 de enero, probado en el entrenamiento", "Trabajar duro"], answer: 2, why: "Tiene un número, una fecha y una prueba." },
          { q: "¿Qué es una línea de base?", options: ["Tu número de partida antes de entrenar para la meta", "La línea de fondo de la cancha", "Tu mejor día de la historia", "El promedio del equipo"], answer: 0, why: "La línea de base muestra dónde empezaste." },
          { q: "¿Qué registro de entrenamiento es el más útil?", options: ["Uno sofisticado que dejas a la semana", "Uno que llenas una vez por temporada", "Uno que adivinas", "Uno sencillo que llenas siempre"], answer: 3, why: "Los datos constantes son los que hacen que las tendencias tengan sentido." },
          { q: "¿Cómo debes tomar los números de un reloj o una banda?", options: ["Como hechos perfectos", "Como pistas útiles que no son perfectas", "Como consejo médico", "Como algo para publicar"], answer: 1, why: "Estos aparatos ayudan, pero pueden fallar." },
          { q: "Tu esfuerzo sigue subiendo pero tus tiempos son cada vez más lentos. ¿Qué debes hacer?", options: ["Entrenar el doble de duro", "Decírselo a tu entrenador; puede que estés cansado", "Dejar de registrar", "No hacerle caso"], answer: 1, why: "Más esfuerzo con peores resultados puede ser señal de cansancio, y tu entrenador debe saberlo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA con tu entrenador",
      lessons: [
        {
          title: "Lo que la IA puede y no puede hacer por tu entrenamiento",
          minutes: 4,
          goal: "Separar las tareas de entrenamiento en las que la IA puede ayudar de las que le tocan a tu entrenador o a tu preparador físico.",
          text: [
            "Los asistentes de IA son buenos para ordenar: convertir notas en una tabla, explicar un término de entrenamiento, resumir tu registro o escribir preguntas para tu entrenador.",
            "No son buenos para conocer tu cuerpo. No pueden ver tu técnica, tu historial de lesiones ni cómo dormiste, y los planes generales de internet pueden no ajustarse a tu edad, tu nivel o tu temporada.",
            "Así que usa la IA para entender y prepararte, y deja que tu entrenador y tu preparador físico decidan tus entrenamientos, tus cargas y tu vuelta después de una lesión."
          ],
          words: [["Carga de entrenamiento", "cuánto y qué tan duro entrenas con el tiempo."], ["Preparador físico (athletic trainer)", "un profesional de la salud con licencia que previene y trata lesiones y ayuda a los deportistas a recuperarse."]],
          slides: [
            { title: "La IA es buena para", bullets: ["Ordenar notas en tablas", "Explicar palabras de entrenamiento", "Resumir tu registro", "Escribir preguntas para tu entrenador"] },
            { title: "La IA no puede", bullets: ["Ver tu técnica", "Conocer tu historial de lesiones", "Saber cómo te sientes hoy"] },
            { title: "Quién decide", bullets: ["Entrenador: entrenamientos y cargas", "Preparador físico: lesiones y vuelta al juego"] }
          ],
          tryIt: "Pídele a un asistente de IA que te explique con palabras sencillas un término de entrenamiento que hayas oído (por ejemplo “periodización” o “semana de descarga”). Escribe una pregunta sobre ese tema para tu entrenador.",
          youCanNow: "decir en qué tareas de entrenamiento puede ayudar la IA y cuáles le tocan a tu entrenador o a tu preparador físico."
        },
        {
          title: "Detectar consejos de entrenamiento peligrosos de la IA",
          minutes: 5,
          goal: "Reconocer las señales de alerta en los consejos de entrenamiento de la IA o de internet.",
          text: [
            "La IA y los planes de internet pueden dar consejos que son demasiado, demasiado rápido o equivocados para deportistas jóvenes o lesionados. Tienes que saber detectarlos.",
            "Señales de alerta: entrenar con dolor agudo; grandes saltos en el entrenamiento de golpe; dejar de comer o de beber agua para dar el peso; suplementos que prometen resultados rápidos; “sin días de descanso”; y cualquier plan que no respete lo que escribió tu entrenador.",
            "Los suplementos son un riesgo especial: la FDA (la agencia de alimentos y medicamentos de Estados Unidos) no los revisa antes de que se vendan, y algunos contienen sustancias prohibidas. Habla con tu preparador físico o con un dietista certificado antes de tomar cualquiera."
          ],
          steps: ["Lee el consejo despacio.", "Compáralo con la lista de señales de alerta.", "Si aparece alguna señal de alerta, no lo sigas.", "Llévaselo a tu entrenador o a tu preparador físico."],
          words: [["Señal de alerta", "un aviso de que algo es peligroso o está mal."], ["Suplemento", "una pastilla, un polvo o una bebida que se vende para agregarle algo a tu alimentación."]],
          slides: [
            { title: "Señales de alerta", bullets: ["Entrenar con dolor agudo", "Grandes saltos de golpe", "Dejar de comer o de beber agua para dar el peso", "“Sin días de descanso”"] },
            { title: "Suplementos", bullets: ["La FDA no los revisa antes de la venta", "Algunos contienen sustancias prohibidas", "Pregúntale primero a tu preparador físico o a un dietista"] },
            { title: "Cuando veas una", bullets: ["No lo sigas", "Llévaselo a tu entrenador o a tu preparador físico"] }
          ],
          sources: [{ name: "USADA: Supplement Connect (riesgos de los suplementos para deportistas, en inglés)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Pídele a un asistente de IA “un plan para ser más rápido en dos semanas”. Léelo y marca cualquier señal de alerta. Escribe lo que le preguntarías a tu entrenador sobre él.",
          youCanNow: "detectar consejos de entrenamiento peligrosos y llevárselos a la persona correcta."
        },
        {
          title: "Preparar una conversación sobre entrenamiento con tu entrenador",
          minutes: 5,
          goal: "Usar la IA para preparar un resumen corto y claro y tres preguntas para tu entrenador.",
          text: [
            "Los entrenadores están ocupados. Un resumen corto y claro con tus números mejora la conversación: cuál es tu meta, qué muestran tus datos y qué quieres preguntar.",
            "Pídele a un asistente de IA: “Esta es mi meta y mi registro de entrenamiento. Escribe un resumen de tres frases para mi entrenador y sugiere tres preguntas que podría hacerle sobre mi próximo bloque de entrenamiento.” Luego edítalo para que suene como tú.",
            "Llévale el resumen a tu entrenador en persona o de la forma que prefiera tu equipo. Escucha, toma notas y actualiza tu plan con lo que diga tu entrenador, no con lo que dijo la IA."
          ],
          steps: ["Pega tu meta y tu registro (sin historial médico).", "Pide un resumen de tres frases y tres preguntas.", "Edítalo con tus propias palabras.", "Compártelo con tu entrenador de la forma que prefiera tu equipo.", "Actualiza tu plan con la respuesta de tu entrenador."],
          words: [["Bloque de entrenamiento", "un grupo de semanas con un enfoque de entrenamiento principal."], ["Resumen de situación", "un mensaje corto que dice dónde estás ahora."]],
          slides: [
            { title: "Un buen resumen", bullets: ["Mi meta", "Lo que muestran mis datos", "Mis preguntas"] },
            { title: "Usa la IA para el borrador", bullets: ["Resumen de tres frases", "Tres preguntas", "Edítalo con tus propias palabras"] },
            { title: "Después", bullets: ["Habla con tu entrenador", "Toma notas", "Sigue el plan de tu entrenador"] }
          ],
          tryIt: "Tarea final: registra al menos cuatro sesiones, pídele a un asistente de IA que describa tu tendencia y escribe un resumen de tres frases con tres preguntas para tu entrenador.",
          youCanNow: "convertir tus datos de entrenamiento en un resumen claro y en preguntas para tu entrenador."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA con tu entrenador",
        questions: [
          { q: "¿En qué tarea de entrenamiento es buena la IA?", options: ["Ver tu técnica en persona", "Darte el alta para volver de una lesión", "Saber cómo dormiste", "Resumir tu registro de entrenamiento"], answer: 3, why: "Ordenar y resumir es uno de los puntos fuertes de la IA." },
          { q: "¿Quién decide cuándo vuelves después de una lesión?", options: ["Tu preparador físico o tu médico", "Un asistente de IA", "Un compañero de equipo", "Un influencer de ejercicio"], answer: 0, why: "Volver al juego es una decisión de salud para profesionales calificados." },
          { q: "¿Cuál es una señal de alerta en un consejo de entrenamiento?", options: ["Días de descanso cada semana", "Calentar primero", "Entrenar con dolor agudo", "Preguntarle a tu entrenador"], answer: 2, why: "El dolor agudo es una señal para parar y hacerte revisar." },
          { q: "¿Por qué los suplementos son riesgosos para los deportistas?", options: ["Siempre están prohibidos", "Los prueba tu entrenador", "Saben mal", "La FDA no los revisa antes de la venta, y algunos contienen sustancias prohibidas"], answer: 3, why: "La USADA (la agencia antidopaje de Estados Unidos) advierte que los suplementos pueden estar contaminados o mal etiquetados." },
          { q: "Después de hablar con tu entrenador, ¿qué plan sigues?", options: ["El de la IA", "El de tu entrenador", "El de un video cualquiera", "El de tu rival"], answer: 1, why: "El entrenador define el entrenamiento; la IA te ayuda a prepararte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para el entrenamiento y el rendimiento",
    questions: [
      { q: "“Ser más rápido” es:", options: ["Una meta perfecta", "Un registro de entrenamiento", "Un deseo, no una meta medible", "Un ejercicio"], answer: 2, why: "No tiene número, fecha ni prueba." },
      { q: "Una buena meta de entrenamiento incluye:", options: ["Una sola cosa, un número, una fecha y una prueba", "Solo un sentimiento", "Tu contraseña", "Diez metas a la vez"], answer: 0, why: "Esas partes la hacen medible." },
      { q: "¿Quién debe acordar tu meta contigo?", options: ["Tu entrenador", "Un desconocido en internet", "Solo una IA", "Nadie"], answer: 0, why: "Tu meta debe encajar en el plan del equipo." },
      { q: "¿Qué debe tener tu primer registro de entrenamiento?", options: ["Cincuenta columnas", "Tu historial médico", "Fecha, Sesión, Esfuerzo y Resultado", "Solo fotos"], answer: 2, why: "Cuatro columnas sencillas alcanzan para empezar." },
      { q: "Una escala de esfuerzo del 1 al 10 mide:", options: ["Tu estatura", "Qué tan dura se sintió una sesión", "Tus calificaciones", "Tus seguidores"], answer: 1, why: "Es una puntuación rápida del esfuerzo percibido." },
      { q: "Los números de un reloj o una banda son:", options: ["Siempre exactos", "Diagnósticos médicos", "Inútiles", "Pistas útiles que pueden fallar"], answer: 3, why: "Estos aparatos ayudan, pero tómalos como pistas." },
      { q: "Al leer tu gráfico, debes fijarte en:", options: ["Tu peor día", "El color del gráfico", "La dirección general de la línea", "Los gráficos de otros deportistas"], answer: 2, why: "La tendencia importa más que un solo día." },
      { q: "Los resultados se quedan iguales durante semanas. Esto se llama:", options: ["Un sprint", "Una línea de base", "Un aparato que se lleva puesto", "Un estancamiento"], answer: 3, why: "Un estancamiento es un periodo sin mejoras." },
      { q: "Antes de pegar tu registro en la IA, quita:", options: ["Los nombres y el historial médico", "Las fechas", "Las escalas de esfuerzo", "Los resultados"], answer: 0, why: "Deja fuera de las herramientas de IA los datos privados y de salud." },
      { q: "La IA dice que tu promedio mejoró 2 segundos. Debes:", options: ["Publicarlo", "Revisar tú mismo el cálculo", "Confiar del todo", "Borrar tu registro"], answer: 1, why: "La IA puede equivocarse en los cálculos." },
      { q: "¿Qué NO puede hacer la IA por ti?", options: ["Explicar un término de entrenamiento", "Convertir notas en una tabla", "Ver tu técnica en el entrenamiento", "Escribir preguntas para tu entrenador"], answer: 2, why: "No puede verte entrenar." },
      { q: "¿Qué hace un preparador físico?", options: ["Previene y trata lesiones y ayuda a la recuperación", "Vende zapatillas", "Maneja las redes sociales", "Escribe el calendario del equipo"], answer: 0, why: "Los preparadores físicos son profesionales de la salud con licencia." },
      { q: "Un plan de internet dice que dejes de beber agua para dar el peso. Esto es:", options: ["Seguro para todos", "Obligatorio", "Una buena idea antes de los partidos", "Una señal de alerta"], answer: 3, why: "Dejar de comer o de beber para dar el peso puede ser peligroso." },
      { q: "Un plan “sin días de descanso” es:", options: ["Lo mejor para crecer", "Una señal de alerta", "Obligatorio según la NCAA", "Normal para principiantes"], answer: 1, why: "El descanso es parte del entrenamiento; no descansar es una señal de alerta." },
      { q: "Antes de tomar cualquier suplemento, habla con:", options: ["Un anuncio", "Tu preparador físico o un dietista certificado", "Un compañero de equipo", "Nadie"], answer: 1, why: "Pueden explicarte los riesgos, incluidas las sustancias prohibidas." },
      { q: "Si un consejo de la IA choca con el plan de tu entrenador, tú:", options: ["Sigues a la IA", "Dejas el equipo", "Sigues a tu entrenador y le preguntas", "Haces las dos cosas"], answer: 2, why: "Tu entrenador te conoce a ti y el plan del equipo." },
      { q: "Un buen resumen para tu entrenador incluye:", options: ["Tu meta, lo que muestran tus datos y tus preguntas", "Solo quejas", "Un ensayo largo", "Tu contraseña"], answer: 0, why: "Lo corto y claro ayuda a los entrenadores ocupados." },
      { q: "Después de que la IA escribe el borrador de tu resumen, debes:", options: ["Enviarlo sin leerlo", "Publicarlo", "Editarlo con tus propias palabras", "Enviárselo a un rival"], answer: 2, why: "Debe sonar como tú y ser cierto." },
      { q: "Un bloque de entrenamiento es:", options: ["Un bloque de madera", "Un tiro bloqueado", "Un día de descanso", "Un grupo de semanas con un enfoque principal"], answer: 3, why: "Los entrenadores planean el entrenamiento por bloques." },
      { q: "El mejor uso de la IA para entrenar es:", options: ["Reemplazar a tu entrenador", "Entender tus datos y preparar mejores preguntas", "Diagnosticar lesiones", "Elegir tus suplementos"], answer: 1, why: "La IA te ayuda a entender y a prepararte; las personas deciden." }
    ]
  }
};
