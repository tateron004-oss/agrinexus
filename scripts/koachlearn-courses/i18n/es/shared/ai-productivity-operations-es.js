"use strict";

// Koach Learn course (shared), Spanish translation of "AI for Productivity and Operations". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-productivity-operations-es",
  lang: "es",
  translationOf: "ai-productivity-operations",
  category: "Small Business",
  name: "IA para la productividad y las operaciones",
  skills: "Planificar la semana con IA, Escribir un procedimiento estándar de operación, Convertir reuniones en tareas, Armar un horario de personal o voluntarios, Llevar el control de insumos y pedidos, Escribir una revisión semanal de operaciones",
  outcome: "usar un asistente de IA gratuito para planificar la semana, convertir una tarea desordenada en un procedimiento claro paso a paso, sacar tareas de las reuniones, armar un horario, llevar el control de los insumos y revisar la semana, para que la organización funcione mejor con menos de tu tiempo.",
  about: [
    "Las operaciones son el trabajo de todos los días que mantiene funcionando una organización: horarios, insumos, procedimientos, reuniones y seguimientos. Cuando están desordenadas, los dueños y directores pasan las noches poniéndose al día. La IA puede quitarte buena parte de esa carga.",
    "Este curso es para dueños y gerentes de pequeños negocios, directores de organizaciones sin fines de lucro y coordinadores de voluntarios. Algunos ejemplos: un restaurante, una guardería, un equipo de jardinería, una tienda de segunda mano y un banco de alimentos.",
    "Usarás ChatGPT, Microsoft Copilot o Google Gemini con Google Docs y Sheets o con Microsoft 365. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Arma un kit semanal de operaciones para una organización real o de práctica: un plan semanal con prioridades, un procedimiento estándar de operación para una tarea repetida, notas de una reunión con tareas, responsables y fechas límite, un horario de personal o voluntarios de una semana, una hoja de insumos con puntos de pedido y una revisión corta de fin de semana con una mejora para la semana siguiente.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios, jefes de turno y gerentes de oficina, y coordinadores de organizaciones sin fines de lucro, iglesias y programas comunitarios que hacen malabares con tareas, personal o voluntarios, reuniones e insumos.",
    startingPoint: "Mantienen todo funcionando de memoria, con listas en papel, mensajes de texto y un calendario; puede que usen una hoja de cálculo y que hayan probado un asistente de IA. Pocos han escrito procedimientos, notas de reunión ordenadas o puntos de pedido.",
    gap: "Cuando todo vive en la cabeza de una persona, las tareas se olvidan, las personas nuevas aprenden despacio y los insumos se acaban. Las personas necesitan herramientas sencillas, con ayuda de la IA, para planificar, escribir procedimientos, hacer reuniones, armar horarios, controlar insumos y revisar la semana, para que la operación funcione mejor y les quite menos tiempo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Aparatos: un teléfono o una computadora; una computadora es más fácil para las hojas de cálculo",
      "Privacidad: solo nombres de pila o etiquetas; nada de datos de salud, sueldo o privados del personal en las herramientas de IA",
      "Reglas: las leyes laborales sobre descansos y horas de los menores varían; las personas revisan el departamento de trabajo de su estado",
      "Tiempo: lecciones de 5 minutos, unos 60 minutos en total más el tiempo para armar el kit"
    ],
    prerequisites: "Ninguno. Quienes no hayan usado asistentes de IA pueden tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de pendientes desordenada y tus horas disponibles reales", action: "crear con la IA un plan semanal día por día con prioridades", standard: "con las tres tareas principales apartadas en tu calendario" },
    { id: "O2", condition: "Para una tarea que tu organización repite", action: "escribir un procedimiento estándar de operación (POE) numerado con propósito, materiales, pasos, notas de seguridad y una lista de verificación", standard: "de modo que una persona nueva pueda seguirlo sin detenerse" },
    { id: "O3", condition: "Después de una reunión corta", action: "hacer la lista de las decisiones, las tareas y las preguntas abiertas de las notas", standard: "con un responsable acordado y una fecha límite para cada tarea, enviada en menos de un día" },
    { id: "O4", condition: "Con los turnos, la disponibilidad y las reglas", action: "crear un horario de personal o voluntarios de una semana que cubra todos los turnos", standard: "respetando tus límites de horas, las habilidades necesarias y las reglas laborales" },
    { id: "O5", condition: "Con tus insumos y qué tan rápido los usas", action: "armar una hoja de insumos con puntos de pedido y una fórmula que marque PEDIR (REORDER)", standard: "con un punto de pedido para cada artículo" },
    { id: "O6", condition: "Al final de la semana", action: "escribir una revisión corta de logros, pendientes y problemas, y elegir una mejora", standard: "en unos 15 minutos, con la mejora agregada al plan de la semana siguiente" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Organizarse",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planificar tu semana con IA",
          minutes: 5,
          goal: "Convertir una lista de pendientes desordenada en un plan semanal con prioridades.",
          text: [
            "Una lista de pendientes larga y revuelta hace que todo parezca urgente. La IA la puede ordenar rápido. Escribe todas las tareas en el chat y luego pídele que las ordene y haga un plan.",
            "Un pedido útil: “Esta es mi lista de pendientes de la semana. Ordénala en: hacer sí o sí esta semana, conviene hacer, puede esperar y se puede delegar. Luego haz un plan día por día. Tengo unas 3 horas al día para trabajo de oficina y el martes estoy ocupado con entregas”.",
            "Tú mandas en el plan. Mueve lo que la IA haya puesto mal, reserva tiempo en tu calendario para las tres tareas principales y deja espacio para imprevistos."
          ],
          steps: ["Escribe todas las tareas, grandes y pequeñas, en una sola lista.", "Pide a la IA que las ordene en: sí o sí, conviene, puede esperar y delegar.", "Dile tus horas disponibles reales y tus días ocupados.", "Corrige el plan y reserva tiempo en tu calendario para las tres principales."],
          words: [["Priorizar", "decidir qué importa más y hacerlo primero."], ["Delegar", "pasarle una tarea a otra persona."]],
          slides: [
            { title: "Vacía la lista", bullets: ["Todas las tareas, grandes y pequeñas", "Un solo lugar, una sola lista"] },
            { title: "Pide a la IA que la ordene", bullets: ["Sí o sí, conviene hacer", "Puede esperar, se puede delegar", "Dile tus horas reales"] },
            { title: "El plan es tuyo", bullets: ["Corrige lo que la IA puso mal", "Reserva tiempo para las tres principales", "Deja espacio para imprevistos"] }
          ],
          tryIt: "Escribe tu lista completa de pendientes de esta semana. Pide a un asistente de IA que la ordene y haga un plan día por día con tus horas reales; luego corrígelo y reserva en un calendario tus tres tareas principales.",
          youCanNow: "convertir con IA una lista de pendientes desordenada en un plan semanal con prioridades.",
          quickCheck: [
            { objective: "O1", q: "En el plan semanal de este curso, ¿qué significa \"delegar\"?", options: ["Las tareas que haces primero", "Las tareas que puede hacer otra persona", "Las tareas que borras", "Las tareas que se deben hacer hoy"], answer: 1, why: "Las tareas para delegar son las que puede hacer otra persona." },
            { objective: "O1", q: "El plan de la IA pone tu tarea más grande el martes, tu día con más entregas. ¿Qué haces?", options: ["Seguirlo; la IA sabe más", "Borrar la tarea", "Pedirle a la IA una lista nueva de tareas", "Mover la tarea a un día más tranquilo y apartar ese tiempo en tu calendario"], answer: 3, why: "Tú mandas en el plan; corrige lo que la IA hizo mal." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir un procedimiento estándar de operación",
          minutes: 6,
          goal: "Convertir la forma en que haces una tarea en un procedimiento claro, paso a paso, que cualquiera pueda seguir.",
          text: [
            "Un procedimiento estándar de operación (POE, o SOP en inglés) son los pasos escritos de una tarea repetida: abrir la tienda, limpiar la cocina, recibir a un cliente, contar la caja. Con un POE, el personal o los voluntarios nuevos aprenden más rápido y las cosas se hacen igual cada vez.",
            "La forma más rápida: dilo en voz alta o escríbelo como se lo explicarías a una persona nueva, aunque quede desordenado. Luego pide a la IA: “Convierte esto en un POE numerado con un título, el propósito, los materiales necesarios, pasos de una sola acción cada uno, notas de seguridad y una lista de verificación final. Usa palabras sencillas”.",
            "Pruébalo: pide a alguien que nunca ha hecho la tarea que siga el POE mientras tú observas en silencio. Cada vez que dude, el POE necesita un paso más claro. Ponle fecha y di quién es el responsable."
          ],
          steps: ["Explica la tarea en voz alta o por escrito; desordenado está bien.", "Pide a la IA que lo convierta en un POE numerado con propósito, materiales, pasos, notas de seguridad y una lista de verificación.", "Revisa que cada paso sea correcto.", "Pide a una persona nueva que lo pruebe.", "Corrige los pasos poco claros, ponle fecha y nombra a un responsable."],
          words: [["POE", "procedimiento estándar de operación: los pasos escritos de una tarea repetida."], ["Lista de verificación", "una lista de cosas que se van marcando para no olvidar nada."]],
          slides: [
            { title: "Por qué tener POE", bullets: ["Las personas nuevas aprenden más rápido", "Se hace igual cada vez"] },
            { title: "De notas desordenadas a POE", bullets: ["Explícalo como a una persona nueva", "La IA le da forma: propósito, materiales, pasos", "Agrega notas de seguridad y una lista de verificación"] },
            { title: "Pruébalo", bullets: ["Una persona nueva lo sigue", "Cada pausa = un paso que aclarar", "Ponle fecha y nombra a un responsable"] }
          ],
          tryIt: "Elige una tarea que hagas cada semana. Explícala con tus palabras, pide a la IA que la convierta en un POE, revísalo y pide a alguien que intente seguirlo.",
          youCanNow: "escribir y probar con ayuda de la IA un procedimiento estándar de operación claro.",
          quickCheck: [
            { objective: "O2", q: "¿Qué significa POE?", options: ["Procedimiento estándar de operación", "Plan de horas extra del personal", "Proceso de pedido de insumos", "Programa de personas"], answer: 0, why: "Un POE es un procedimiento estándar de operación: los pasos escritos de una tarea repetida." },
            { objective: "O2", q: "El POE que hizo la IA para cerrar la tienda dice \"cerrar con llave\", pero se salta la puerta de atrás. ¿Qué haces?", options: ["Usarlo de todos modos", "Tirar el POE", "Revisar que cada paso sea correcto y agregar el paso que falta", "Dejar que el personal nuevo lo descubra"], answer: 2, why: "Revisa que cada paso sea correcto antes de que alguien use el POE." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Convertir las reuniones en tareas",
          minutes: 5,
          goal: "Hacer una reunión corta y usar la IA para convertir las notas en decisiones y tareas.",
          text: [
            "Muchas reuniones terminan con todos asintiendo y sin que pase nada. La solución es sencilla: toda reunión termina con tareas, cada una con un responsable y una fecha límite.",
            "Usa una agenda con tiempos. Toma notas rápidas, o usa las notas con IA que trae la herramienta de reuniones si tu organización lo permite y todos fueron avisados. Luego pega las notas en la IA: “De estas notas, haz una lista de las decisiones tomadas, las tareas con responsable y fecha límite, y las preguntas pendientes”.",
            "Revisa la lista antes de enviarla, porque la IA puede inventar un responsable o una fecha que nunca se acordó. Quita todo lo privado, como datos de salud o de sueldo del personal, antes de compartirla. Envíala en menos de un día."
          ],
          steps: ["Escribe una agenda corta con tiempos.", "Toma notas o usa notas con IA aprobadas, con todos avisados.", "Pide a la IA que saque las decisiones, las tareas y las preguntas pendientes.", "Revisa responsables y fechas; quita los datos privados.", "Envía la lista de tareas en menos de un día."],
          words: [["Agenda", "la lista de temas de una reunión, en orden."], ["Tarea", "algo que sale de una reunión con un responsable y una fecha límite."]],
          slides: [
            { title: "Termina con acciones", bullets: ["Cada tarea tiene un responsable", "Cada tarea tiene una fecha límite"] },
            { title: "Deja que la IA las saque", bullets: ["Decisiones tomadas", "Tareas", "Preguntas pendientes"] },
            { title: "Antes de enviar", bullets: ["Revisa responsables y fechas", "Quita los datos privados", "Envíala en menos de un día"] }
          ],
          tryIt: "Toma notas en tu próxima reunión, o escribe las notas de una reciente. Usa la IA para sacar las decisiones y las tareas con responsables y fechas, revísalas y escribe el mensaje que enviarías.",
          youCanNow: "convertir notas de reunión en tareas revisadas con responsables y fechas límite.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace que una reunión termine con un seguimiento real?", options: ["Una conversación larga", "Que todos asientan con la cabeza", "Una reunión al día siguiente", "Tareas, cada una con un responsable y una fecha límite"], answer: 3, why: "Las tareas con responsables y fechas convierten la conversación en trabajo." },
            { objective: "O3", q: "Tus notas de la reunión mencionan la licencia médica de una persona del personal. ¿Qué haces antes de compartir el resumen de la IA?", options: ["Compartirlo tal como está", "Quitar los datos privados de salud", "Agregar más detalles", "Ponerlo en el tablero de avisos"], answer: 1, why: "Quita los datos privados, como la salud o el sueldo, antes de compartir las notas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Organizarse",
        questions: [
          { objective: "O1", q: "Cuando le pides a la IA que planifique tu semana, ¿qué debes decirle?", options: ["La contraseña de tu banco", "Nada; que adivine", "Tus horas disponibles reales y tus días ocupados", "Las direcciones de casa de tu personal"], answer: 2, why: "Los límites reales hacen realista el plan." },
          { objective: "O2", q: "¿Qué es un POE?", options: ["Los pasos escritos de una tarea repetida", "Un tipo de impuesto sobre la nómina", "Una publicación en redes sociales", "Un informe de ventas"], answer: 0, why: "Los procedimientos estándar de operación hacen que las tareas se puedan repetir igual." },
          { objective: "O2", q: "Un voluntario nuevo duda en el paso 4 de tu POE. ¿Qué te dice eso?", options: ["Que el voluntario no es listo", "Que los POE nunca funcionan", "Que hay que borrar el POE", "Que el paso 4 necesita ser más claro"], answer: 3, why: "La duda muestra dónde los pasos no están claros." },
          { objective: "O3", q: "Toda tarea debe tener:", options: ["Una historia larga", "Un responsable y una fecha límite", "Un código secreto", "Ningún detalle"], answer: 1, why: "Los responsables y las fechas hacen que las tareas se cumplan." },
          { objective: "O3", q: "La IA pone “María terminará el presupuesto para el viernes”, pero nadie lo acordó. ¿Qué haces?", options: ["Enviarlo igual", "Corregirlo antes de enviar", "Asignárselo a María sin preguntarle", "Borrar todas las notas"], answer: 1, why: "La IA puede adivinar; revisa responsables y fechas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer que las operaciones funcionen mejor",
      lessons: [
        {
          objectives: ["O4"],
          title: "Armar un horario de personal o voluntarios",
          minutes: 5,
          goal: "Usar la IA y una hoja de cálculo para armar un horario justo de una semana que cubra todos los turnos.",
          text: [
            "Hacer horarios es un rompecabezas: quién está disponible, cuántas personas necesita cada turno y quién tiene qué habilidades. La IA puede redactar una primera versión en segundos.",
            "Dale las reglas sin datos privados: “Haz una tabla de horario de una semana. Turnos: lunes a viernes de 8 a 12 y de 12 a 4, dos personas cada uno. Sábado de 9 a 1, tres personas. Disponibilidad: Persona A solo entre semana, Persona B no los lunes... Nadie más de 20 horas. Al menos una persona con capacitación en manejo de alimentos por turno”.",
            "Compara el borrador con tus reglas y con las leyes laborales que apliquen, como los descansos y las horas de los menores de edad; el departamento de trabajo de tu estado las publica. Pon el horario final en una hoja de cálculo compartida para que todos vean los cambios."
          ],
          steps: ["Haz la lista de turnos y cuántas personas necesita cada uno.", "Escribe la disponibilidad de cada persona con su nombre de pila o una etiqueta.", "Escribe las reglas: máximo de horas, habilidades necesarias.", "Pide a la IA una tabla de horario.", "Revisa las reglas y las leyes laborales, y luego compártelo en una hoja de cálculo."],
          words: [["Turno", "un bloque fijo de tiempo de trabajo."], ["Disponibilidad", "los horarios en que una persona puede trabajar o ser voluntaria."]],
          slides: [
            { title: "Hacer horarios es un rompecabezas", bullets: ["Disponibilidad, turnos, habilidades"] },
            { title: "Dale las reglas a la IA", bullets: ["Turnos y personas necesarias", "Disponibilidad por nombre de pila o etiqueta", "Máximo de horas y habilidades necesarias"] },
            { title: "Revisa y comparte", bullets: ["Que cumpla tus reglas", "Revisa las reglas laborales del estado: descansos, menores", "Compártelo en una hoja de cálculo"] }
          ],
          tryIt: "Escribe los turnos, la disponibilidad y las reglas de un equipo real o de práctica de al menos cuatro personas. Pide a la IA un borrador del horario de la semana, revisa cada regla y corrige los problemas.",
          youCanNow: "armar y revisar con ayuda de la IA un horario semanal justo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué le debes dar a la IA cuando le pides un horario?", options: ["La dirección y el teléfono de todos", "Solo la palabra \"horario\"", "Los turnos, los nombres de pila o etiquetas, la disponibilidad y las reglas", "Lo que gana cada persona del personal"], answer: 2, why: "La IA necesita los turnos, la disponibilidad y las reglas, pero ningún dato privado." },
            { objective: "O4", q: "El horario de la IA deja el sábado sin nadie con capacitación en manejo de alimentos. ¿Qué haces?", options: ["Cambiarlo para que cada turno tenga a una persona capacitada", "Dejarlo así; es solo un día", "Cancelar el sábado", "Pedirle al personal sin capacitación que adivine"], answer: 0, why: "Revisa el borrador contra cada regla, incluidas las habilidades necesarias." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Llevar el control de insumos y pedidos",
          minutes: 5,
          goal: "Armar una hoja de insumos con puntos de pedido para que nunca te quedes sin nada.",
          text: [
            "Quedarse sin vasos, guantes, harina o pañales detiene el trabajo. Una hoja de insumos sencilla lo evita. Columnas: artículo, unidad, cantidad disponible, uso semanal, punto de pedido, cantidad a pedir y proveedor.",
            "El punto de pedido es la cantidad que te avisa que hay que pedir ya. Una regla sencilla: uso semanal por las semanas que tarda la entrega, más un poco extra. Si usas 10 cajas por semana y la entrega tarda 1 semana, pide cuando te queden unas 12 cajas.",
            "Pide a la IA una fórmula que marque lo que hay que pedir: “En Google Sheets, escribe una fórmula que muestre REORDER cuando la cantidad disponible sea igual o menor al punto de pedido”. Puedes pedir que muestre PEDIR en su lugar. Cuenta los insumos el mismo día cada semana y actualiza la hoja."
          ],
          steps: ["Haz la lista de artículos con su unidad y su proveedor.", "Calcula el uso semanal de cada uno.", "Fija un punto de pedido: uso semanal x semanas de entrega + un poco extra.", "Pide a la IA una fórmula que marque PEDIR.", "Cuenta cada semana el mismo día."],
          words: [["Inventario", "los insumos o productos que tienes disponibles."], ["Punto de pedido", "la cantidad que te dice que es hora de pedir más."]],
          slides: [
            { title: "Columnas de la hoja de insumos", bullets: ["Artículo, unidad, disponible", "Uso semanal, punto de pedido", "Cantidad a pedir, proveedor"] },
            { title: "Punto de pedido", bullets: ["Uso semanal x semanas de entrega + extra", "10 por semana, entrega de 1 semana: unas 12"] },
            { title: "Que la hoja te avise", bullets: ["Una fórmula muestra PEDIR", "Cuenta el mismo día cada semana"] }
          ],
          tryIt: "Arma una hoja de insumos con al menos ocho artículos, fija los puntos de pedido y agrega una fórmula escrita por la IA que marque los artículos que hay que pedir.",
          youCanNow: "llevar el control de insumos con puntos de pedido y un aviso automático para pedir.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un punto de pedido?", options: ["La dirección del proveedor", "La cantidad disponible que te avisa que debes pedir ya", "El precio de un artículo", "El día en que abre la tienda"], answer: 1, why: "El punto de pedido es la cantidad que te avisa que hay que pedir más." },
            { objective: "O5", q: "Usas 20 paquetes de guantes por semana y la entrega tarda 1 semana. ¿Más o menos cuándo debes pedir?", options: ["Cuando tengas 0 paquetes", "Cuando tengas 2 paquetes", "Cuando tengas 100 paquetes", "Cuando tengas unos 22 a 24 paquetes"], answer: 3, why: "El uso semanal por las semanas de entrega, más un poco extra, da unos 22 a 24 paquetes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Revisar la semana y mejorar",
          minutes: 5,
          goal: "Escribir una revisión corta de fin de semana y elegir una mejora.",
          text: [
            "Una revisión de 15 minutos al final de cada semana evita que los problemas pequeños crezcan. Mira qué se hizo, qué no, qué salió mal y qué cambiar.",
            "Dale a la IA tu plan, tus tareas terminadas y algunas notas, y pide: “Escribe una revisión semanal corta de operaciones: logros, pendientes, problemas y una mejora para la semana que viene”. Edítala para que sea cierta y justa con tu equipo.",
            "Elige solo una mejora por semana, como un POE nuevo, un ajuste al horario o un cambio en los pedidos. Las pequeñas mejoras semanales suman una operación mucho más fluida en pocos meses."
          ],
          steps: ["Junta tu plan semanal, tus tareas y tus notas.", "Pide a la IA una revisión corta: logros, pendientes, problemas, una mejora.", "Edítala para que sea cierta y justa.", "Elige una mejora y agrégala al plan de la semana siguiente."],
          words: [["Revisión", "una mirada hacia atrás para aprender qué funcionó y qué no."], ["Mejora continua", "hacer cambios pequeños con regularidad para mejorar con el tiempo."]],
          slides: [
            { title: "15 minutos por semana", bullets: ["Qué se hizo", "Qué no", "Qué salió mal"] },
            { title: "La IA redacta la revisión", bullets: ["Logros, pendientes, problemas", "Una mejora", "Tú la editas para que sea cierta y justa"] },
            { title: "Una mejora por semana", bullets: ["POE nuevo, ajuste de horario o cambio de pedidos", "Las mejoras pequeñas suman"] }
          ],
          tryIt: "Tarea final: escribe tu revisión de fin de semana con ayuda de la IA y elige una mejora. Junto con tu plan semanal, tu POE, tus tareas, tu horario y tu hoja de insumos, esto completa tu kit semanal de operaciones.",
          youCanNow: "llevar una semana de operaciones con ayuda de la IA y seguir mejorándola.",
          quickCheck: [
            { objective: "O6", q: "¿Qué cubre una revisión de fin de semana?", options: ["Logros, pendientes, problemas y una mejora", "Solo lo que salió mal", "Los errores de cada persona del personal", "El presupuesto del año que viene"], answer: 0, why: "Una revisión corta cubre los logros, los pendientes, los problemas y una mejora." },
            { objective: "O6", q: "La revisión de la IA culpa a un voluntario por una entrega tardía que fue culpa del proveedor. ¿Qué haces?", options: ["Enviarla tal como está", "Elegir cinco mejoras en su lugar", "Editarla para que sea cierta y justa con el equipo", "Saltarte la revisión esta semana"], answer: 2, why: "Edita el borrador de la IA para que sea cierto y justo antes de compartirlo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer que las operaciones funcionen mejor",
        questions: [
          { objective: "O4", q: "Al darle a la IA información para un horario, ¿qué debes usar para las personas?", options: ["Números completos del Seguro Social", "Direcciones de casa", "Expedientes médicos", "Nombres de pila o etiquetas, sin datos privados"], answer: 3, why: "Para un horario se necesita la disponibilidad, no datos privados." },
          { objective: "O4", q: "¿Dónde puedes revisar las reglas sobre descansos y horas de trabajo de los menores?", options: ["En el departamento de trabajo de tu estado", "En un blog cualquiera", "Solo en un chat de IA", "Con un competidor"], answer: 0, why: "Las reglas laborales vienen de las agencias de trabajo oficiales." },
          { objective: "O5", q: "Usas 10 cajas por semana y la entrega tarda 1 semana. Un punto de pedido sensato es de unas:", options: ["0 cajas", "1 caja", "12 cajas", "100 cajas"], answer: 2, why: "Uso semanal x semanas de entrega más un poco extra." },
          { objective: "O6", q: "¿Cuánto dura la revisión semanal en este curso?", options: ["Un día completo", "Tres horas", "Nada; sáltatela", "Unos 15 minutos"], answer: 3, why: "Una revisión semanal corta mantiene pequeños los problemas." },
          { objective: "O6", q: "¿Cuántas mejoras debes elegir cada semana?", options: ["Veinte", "Ninguna", "Una", "Todo a la vez"], answer: 2, why: "Una mejora por semana se puede cumplir y va sumando." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la productividad y las operaciones",
    questions: [
      { objective: "O1", q: "Las operaciones son:", options: ["Solo cirugías", "El trabajo de todos los días que mantiene funcionando una organización", "Solo las ventas", "Solo el marketing"], answer: 1, why: "Horarios, insumos, procedimientos y seguimientos." },
      { objective: "O1", q: "Cuando la IA ordena tu lista de pendientes, ¿qué grupo es “se puede delegar”?", options: ["Tareas que otra persona puede hacer", "Tareas que debes hacer hoy", "Tareas para borrar", "Tareas que la IA hará sola"], answer: 0, why: "Delegar es pasarle la tarea a otra persona." },
      { objective: "O1", q: "¿Quién tiene la última palabra sobre tu plan semanal?", options: ["La IA", "Nadie", "Tú", "Tu proveedor"], answer: 2, why: "Tú corriges el plan y es tuyo." },
      { objective: "O2", q: "Un POE ayuda porque:", options: ["Las tareas se hacen igual y las personas nuevas aprenden más rápido", "Reemplaza a todo el personal", "Es obligatorio para cada correo", "Hace las tareas más lentas"], answer: 0, why: "Ese es el propósito de los POE." },
      { objective: "O2", q: "La forma más rápida de empezar un POE es:", options: ["Copiar el POE de otra empresa", "Esperar a un consultor", "No escribirlo", "Explicar la tarea con tus palabras y que la IA le dé forma"], answer: 3, why: "Tu conocimiento más el formato de la IA es rápido." },
      { objective: "O2", q: "Un buen POE incluye:", options: ["Solo un título", "Propósito, materiales, pasos numerados, notas de seguridad y una lista de verificación", "Los sueldos del personal", "Los teléfonos de los clientes"], answer: 1, why: "Esas partes lo hacen completo." },
      { objective: "O2", q: "¿Cómo pruebas un POE?", options: ["Lo lees una vez tú solo", "Pides a alguien nuevo que lo siga mientras observas", "Le preguntas a la IA si está bien", "No lo pruebas"], answer: 1, why: "Una persona nueva revela los pasos poco claros." },
      { objective: "O3", q: "Una agenda es:", options: ["La lista de bocadillos de una reunión", "Un formulario de nómina", "Un tipo de POE", "La lista de temas de una reunión, en orden"], answer: 3, why: "Las agendas mantienen enfocadas las reuniones." },
      { objective: "O3", q: "Antes de usar notas de reunión con IA, debes:", options: ["Asegurarte de que está permitido y de que todos fueron avisados", "Grabar en secreto", "Compartir los sueldos del personal", "Saltarte la agenda"], answer: 0, why: "La gente debe saber cuando una reunión se graba o se transcribe." },
      { objective: "O3", q: "Antes de enviar notas de reunión hechas con IA, quita:", options: ["Todas las tareas", "La fecha de la reunión", "Los datos privados, como la salud o el sueldo del personal", "Las decisiones"], answer: 2, why: "La información privada no se debe compartir con todos." },
      { objective: "O3", q: "Las tareas se deben enviar:", options: ["Un mes después", "Nunca", "Solo si las piden", "En menos de un día"], answer: 3, why: "Un seguimiento rápido mantiene el impulso." },
      { objective: "O4", q: "Un turno es:", options: ["Solo una tecla del teclado", "Un tipo de insumo", "Un bloque fijo de tiempo de trabajo", "Una reunión"], answer: 2, why: "Los horarios se arman con turnos." },
      { objective: "O4", q: "El borrador de horario de la IA le da 30 horas a una persona, pero tu límite es 20. Debes:", options: ["Dejarlo así", "Corregir el horario para cumplir tu regla", "Ignorar la regla", "Quitar a esa persona"], answer: 1, why: "Compara siempre los borradores de la IA con tus reglas." },
      { objective: "O4", q: "¿Por qué compartir el horario final en una hoja de cálculo?", options: ["Todos ven los últimos cambios", "Para esconderlo", "La ley exige hojas de cálculo", "Para que nadie lo vea"], answer: 0, why: "Una hoja compartida mantiene a todos al día." },
      { objective: "O5", q: "Inventario significa:", options: ["La lista del personal", "Las notas de una reunión", "Los insumos o productos que tienes disponibles", "Las reseñas de los clientes"], answer: 2, why: "El inventario es lo que tienes en existencia." },
      { objective: "O5", q: "Un punto de pedido te dice:", options: ["Cuándo es hora de pedir más", "El precio de un artículo", "Quién es el proveedor", "Cómo cocinarlo"], answer: 0, why: "Hace que se haga un pedido nuevo." },
      { objective: "O5", q: "Una fórmula que muestra PEDIR ayuda porque:", options: ["Hace pedidos con tu tarjeta automáticamente", "Borra la hoja", "Cambia de proveedor", "Marca automáticamente lo que está bajo"], answer: 3, why: "La hoja te avisa cuando queda poco." },
      { objective: "O5", q: "¿Cada cuánto debes contar los insumos?", options: ["Una vez al año", "Cada semana el mismo día", "Nunca", "Solo cuando se acaban"], answer: 1, why: "Contar con regularidad mantiene correcta la hoja." },
      { objective: "O6", q: "Una revisión semanal cubre:", options: ["Solo los logros", "Logros, pendientes, problemas y una mejora", "Solo culpas", "Nada por escrito"], answer: 1, why: "Una revisión equilibrada lleva a mejorar." },
      { objective: "O6", q: "Hacer cambios pequeños con regularidad para mejorar se llama:", options: ["Delegar", "Inventario", "Hacer horarios", "Mejora continua"], answer: 3, why: "Las mejoras pequeñas y regulares van sumando." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      2,
      3,
      6,
      8,
      9,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Plan semanal",
        objective: "O1",
        notYet: "Las tareas no están ordenadas, o el plan no toma en cuenta las horas disponibles reales.",
        meets: "Tareas ordenadas en sí o sí, conviene hacer, puede esperar y delegar, con un plan día por día que cabe en las horas reales.",
        exceeds: "Las tres tareas principales están apartadas en un calendario, con espacio libre para imprevistos."
      },
      {
        name: "Procedimiento estándar de operación",
        objective: "O2",
        notYet: "Los pasos son vagos o están desordenados, o no hay lista de verificación.",
        meets: "Título, propósito, materiales, pasos numerados de una acción cada uno, notas de seguridad, lista de verificación, fecha y responsable.",
        exceeds: "Una persona nueva lo probó y se corrigieron los pasos poco claros."
      },
      {
        name: "Tareas de la reunión",
        objective: "O3",
        notYet: "Las tareas no tienen responsable ni fecha límite.",
        meets: "Decisiones, tareas con responsables y fechas acordados, y preguntas abiertas, sin datos privados.",
        exceeds: "Se envió en menos de un día, revisando que se corrigieran los responsables o fechas que la IA adivinó."
      },
      {
        name: "Horario",
        objective: "O4",
        notYet: "Un turno queda sin cubrir o se rompe una regla.",
        meets: "Todos los turnos cubiertos, límites de horas y habilidades respetados, compartido en una hoja de cálculo.",
        exceeds: "Anota las reglas laborales revisadas con el departamento de trabajo del estado."
      },
      {
        name: "Hoja de insumos",
        objective: "O5",
        notYet: "No hay puntos de pedido.",
        meets: "Cada artículo tiene uso semanal, un punto de pedido y una fórmula que marca PEDIR.",
        exceeds: "Incluye el proveedor y un día fijo cada semana para contar."
      },
      {
        name: "Revisión semanal",
        objective: "O6",
        notYet: "No hay revisión, o no se eligió ninguna mejora.",
        meets: "Una revisión corta y justa de logros, pendientes y problemas, con una mejora.",
        exceeds: "La mejora ya está en el plan de la semana siguiente."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones con al menos tres POE escritos y en uso en un plazo de 60 días (encuesta de seguimiento)",
      "Menos veces sin insumos clave en los 60 días después del curso",
      "Dueños y gerentes que dicen ahorrar horas por semana en planificación y coordinación"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Un calendario y una hoja de cálculo (Google Sheets o Excel)",
      "Una lista real de pendientes, una tarea repetida y una lista de insumos de la organización de la persona",
      "Unos 60 minutos para las lecciones y las comprobaciones, más el tiempo para armar el kit"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; arma la fórmula del punto de pedido en una pantalla compartida.",
      "Pide a las personas que intercambien sus POE y sigan los pasos de la otra para encontrar los que no son claros.",
      "Recuerda a las personas que usen solo nombres de pila o etiquetas, y que nunca pongan datos de salud o sueldo del personal en la IA.",
      "Envía a las personas al departamento de trabajo de su estado para las reglas sobre descansos y horas de los menores; no des consejos legales.",
      "Califica el kit final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
