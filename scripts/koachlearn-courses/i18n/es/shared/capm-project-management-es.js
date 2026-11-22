"use strict";

// Koach Learn course (Spanish translation of shared/capm-project-management.js). See scripts/koachlearn-courses/README.md, "Translations".
// No PMI fee, hour, question count or pass mark is stated; learners are sent to pmi.org, as in the English.

module.exports = {
  id: "capm-project-management-es",
  lang: "es",
  translationOf: "capm-project-management",
  category: "Workforce Development",
  name: "Fundamentos de gestión de proyectos (preparación para el CAPM)",
  skills: "Definir un proyecto y sus restricciones, Escribir un acta de constitución del proyecto, Crear una EDT y encontrar la ruta crítica, Gestionar riesgos y cambios, Elegir un enfoque predictivo o ágil, Planificar el examen CAPM",
  outcome: "planificar un proyecto real y pequeño como lo espera el examen CAPM: escribir un acta de constitución, dividir el trabajo, encontrar la ruta crítica, dar seguimiento a riesgos y cambios, elegir un enfoque adecuado y armar tu propio plan con fechas para prepararte para el CAPM.",
  about: [
    "Este curso es para personas que buscan trabajo, veteranos, jóvenes adultos, dueños de pequeños negocios y cualquiera que quiera un puesto inicial en proyectos, como coordinador de proyectos, asistente de proyectos o líder de equipo. También es un primer paso hacia el Certified Associate in Project Management (CAPM), una credencial de nivel inicial del Project Management Institute (PMI), la organización internacional de gestión de proyectos.",
    "Vas a aprender las herramientas básicas: el acta de constitución del proyecto, la lista de interesados, la estructura de desglose del trabajo, el cronograma con la ruta crítica, el registro de riesgos y el registro de cambios. Vas a practicar cada una en papel o en una hoja de cálculo gratis, con un proyecto pequeño de tu vida o de tu trabajo.",
    "Este curso te PREPARA. No te da el CAPM. Solo el PMI lo otorga, y el PMI pone las reglas: quién puede solicitarlo, las horas de formación que necesitas, la tarifa, el examen y cómo renovarlo. Eso puede cambiar, así que lo vas a revisar tú mismo en pmi.org.",
    "Cada lección dura unos cinco minutos, seguida de una tarea de \"Pruébalo ahora\" y dos preguntas rápidas. Hay una prueba inicial al comienzo, una comprobación de conocimientos después de cada capítulo y un examen final de 20 preguntas."
  ],
  finalTask: "Maneja tu propia preparación para el CAPM como un proyecto. Haz un acta de constitución de una página (meta, alcance, patrocinador, medida de éxito), una estructura de desglose del trabajo de tu estudio, un cronograma con fechas e hitos que termine en una fecha meta para el examen y muestre la ruta crítica, un registro de riesgos con al menos tres riesgos (cada uno con un puntaje, una respuesta y un responsable) y una lista de las páginas oficiales del PMI que revisaste para conocer los requisitos, las tarifas y el esquema de contenido del examen actuales.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos en Estados Unidos y en otros países que quieren un puesto inicial en proyectos o el CAPM: personas que buscan trabajo, veteranos que pasan a la vida civil, personas que regresan a casa después de estar en prisión, dueños de pequeños negocios, personal de organizaciones sin fines de lucro y trabajadores que ya coordinan tareas sin tener el título.",
    startingPoint: "La mayoría ha organizado trabajo de manera informal (un evento, una mudanza, un horario de turnos, una misión militar, un programa de la iglesia), pero no ha usado herramientas ni vocabulario formales de proyectos. Algunos saben usar una hoja de cálculo básica; pocos han visto un diagrama de Gantt o un registro de riesgos.",
    gap: "Los empleadores piden coordinación de proyectos y el CAPM en sus anuncios de empleo, y el examen usa el vocabulario del PMI. Los participantes necesitan convertir lo que ya hacen de manera informal en las herramientas y palabras estándar, y necesitan un plan realista para cumplir los requisitos del PMI y aprobar el examen.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada término del PMI se explica",
      "Dispositivos: todas las tareas se pueden hacer con papel y lápiz; una hoja de cálculo gratis (Google Sheets o Excel en línea) ayuda",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo y la familia",
      "Las reglas, las tarifas y el esquema del examen del PMI cambian: los participantes los confirman en pmi.org, no en este curso",
      "El curso prepara; no otorga el CAPM ni cuenta automáticamente para las horas de formación del PMI"
    ],
    prerequisites: "Ninguno. Quien sea nuevo en las hojas de cálculo puede tomar primero \"Excel y hojas de cálculo\"; \"Gestión ágil de proyectos\" es un buen curso para después."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con la descripción de un trabajo", action: "identificar si es un proyecto y nombrar sus fases del ciclo de vida y sus principales restricciones", standard: "acertando al menos 4 de 5 ejemplos" },
    { id: "O2", condition: "Para un proyecto real y pequeño", action: "escribir un acta de constitución de una página y una lista de interesados con el interés y la influencia de cada persona", standard: "con meta, lo que entra y lo que no entra en el alcance, patrocinador, fecha límite y una medida de éxito que se pueda medir" },
    { id: "O3", condition: "Con la meta de un proyecto y una lista de tareas con su duración", action: "crear una estructura de desglose del trabajo y un cronograma que marque la ruta crítica", standard: "mostrando cada dependencia y calculando bien la duración de la ruta crítica" },
    { id: "O4", condition: "Para el mismo proyecto", action: "anotar los riesgos en un registro de riesgos y tramitar una solicitud de cambio por el control de cambios", standard: "con un puntaje, una respuesta y un solo responsable para cada riesgo, y sin hacer ningún cambio sin aprobación" },
    { id: "O5", condition: "Con un caso corto de un proyecto", action: "elegir un enfoque predictivo, ágil o híbrido y explicar la elección", standard: "dando al menos dos razones tomadas del caso" },
    { id: "O6", condition: "Usando las páginas oficiales del PMI", action: "armar un plan con fechas para estudiar y presentar el CAPM", standard: "con los requisitos revisados, el esquema de contenido del examen anotado y una fecha meta para el examen" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Empezar bien un proyecto",
      lessons: [
        {
          title: "Qué hace que un trabajo sea un proyecto",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar si un trabajo es un proyecto y nombrar sus fases y restricciones.",
          text: [
            "Un proyecto es un trabajo temporal para crear algo nuevo: tiene un inicio, un final y un resultado único. Abrir un food truck, mudar una oficina, organizar una campaña de registro de votantes o crear un sitio web son proyectos. Cocinar el mismo menú de almuerzo todos los días, o contestar los teléfonos en cada turno, son operaciones continuas, no un proyecto.",
            "La mayoría de los proyectos pasan por fases. Una forma sencilla de verlas: inicio (acordar por qué y qué), planificación (cómo, cuándo, quién, cuánto), ejecución del trabajo, monitoreo y control, y cierre (entregar y anotar las lecciones aprendidas). El PMI llama \"gestión de proyectos\" a las personas y prácticas que guían todo esto.",
            "Todo proyecto tiene límites llamados restricciones. Las tres clásicas son el alcance (lo que vas a entregar), el cronograma (el tiempo) y el costo (el dinero). La calidad, los recursos y el riesgo también cuentan. Si una cambia, las otras lo sienten: si agregas alcance con la misma fecha límite, necesitas más personas o dinero, o baja la calidad."
          ],
          steps: ["Pregunta: ¿este trabajo tiene un inicio y un final claros?", "Pregunta: ¿crea algo nuevo o diferente?", "Si las dos respuestas son sí, es un proyecto. Si se repite todos los días, son operaciones.", "Nombra la fase en la que está ahora y su restricción más ajustada."],
          words: [["Proyecto", "trabajo temporal con un inicio, un final y un resultado único."], ["Operaciones", "trabajo continuo y repetido que mantiene funcionando un negocio."], ["Restricción", "un límite del proyecto, como el tiempo, el dinero o el alcance."], ["Alcance", "todo el trabajo y los resultados que el proyecto va a entregar, y nada más."], ["Ciclo de vida", "las fases por las que pasa un proyecto desde el inicio hasta el cierre."]],
          slides: [
            { title: "¿Proyecto u operaciones?", bullets: ["Proyecto: temporal, con un inicio, un final y un resultado único", "Operaciones: el mismo trabajo repetido todos los días"] },
            { title: "Cinco fases sencillas", bullets: ["Inicio: por qué y qué", "Planificación: cómo, cuándo, quién, cuánto", "Ejecución, luego monitoreo y control", "Cierre: entregar y anotar las lecciones aprendidas"] },
            { title: "Las restricciones", bullets: ["Alcance, cronograma y costo", "También calidad, recursos y riesgo", "Si cambias una, las otras lo sienten"] }
          ],
          sources: [{ name: "Project Management Institute: ¿Qué es la gestión de proyectos?", url: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management" }],
          tryIt: "Escribe cinco trabajos de tu vida, de tu empleo o de tu servicio militar. Marca cada uno con P (proyecto) u O (operaciones). Para cada proyecto, escribe su restricción más ajustada: alcance, tiempo o dinero.",
          youCanNow: "distinguir un proyecto de las operaciones continuas, nombrar sus fases y decir cuál restricción es la más ajustada.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estos es un proyecto?", options: ["Reponer los estantes todas las noches", "Contestar las llamadas de clientes en cada turno", "Abrir una segunda tienda para junio", "Pagar la nómina cada dos semanas"], answer: 2, why: "Abrir una nueva tienda es temporal, tiene fecha de fin y crea algo nuevo." },
            { objective: "O1", q: "El patrocinador agrega tres funciones nuevas pero mantiene la misma fecha límite y el mismo presupuesto. ¿Qué es lo más probable que sufra?", options: ["Nada; el alcance no afecta a las otras restricciones", "La calidad, a menos que se agregue más tiempo, personas o dinero", "Solo el nombre del proyecto", "La lista de interesados"], answer: 1, why: "El alcance, el cronograma y el costo están unidos; más alcance con el mismo tiempo y dinero presiona la calidad." }
          ]
        },
        {
          title: "El acta de constitución y los interesados",
          objectives: ["O2"],
          minutes: 6,
          goal: "Escribir un acta de constitución de una página y una lista de interesados para un proyecto pequeño.",
          text: [
            "El acta de constitución del proyecto es el documento que inicia oficialmente un proyecto. Nombra al patrocinador (la persona que lo aprueba y lo financia) y le da al director del proyecto la autoridad para usar personas y dinero. Piensa en ella como la orden de misión: sin acta, no hay proyecto.",
            "Una buena acta de una página tiene: el propósito (por qué), una meta con una medida (\"abrir la inscripción en línea del banco de alimentos para el 1 de marzo, con 50 familias inscritas en el primer mes\"), lo que entra y lo que no entra en el alcance, la fecha límite y los hitos principales, el presupuesto, los riesgos principales y el nombre del patrocinador.",
            "Los interesados son todas las personas que afectan al proyecto o que se ven afectadas por él: el patrocinador, el equipo, los clientes, los vecinos, los inspectores, los proveedores. Haz una lista y coloca a cada uno en una cuadrícula sencilla de influencia (alta o baja) e interés (alto o bajo). Mucha influencia y mucho interés: gestionarlos de cerca. Mucha influencia y poco interés: mantenerlos satisfechos. Poca influencia y mucho interés: mantenerlos informados. Poca y poco: consultarlos de vez en cuando."
          ],
          steps: ["Escribe el propósito en una oración.", "Escribe la meta con un número y una fecha.", "Anota lo que entra y lo que no entra en el alcance.", "Agrega la fecha límite, los hitos, el presupuesto y el patrocinador.", "Haz la lista de interesados y coloca a cada uno en la cuadrícula de influencia e interés."],
          words: [["Acta de constitución del proyecto", "el documento que inicia oficialmente el proyecto y le da autoridad al director del proyecto."], ["Patrocinador", "la persona o el grupo que aprueba, financia y apoya el proyecto."], ["Interesado", "cualquier persona que afecta al proyecto o que se ve afectada por él."], ["Hito", "un punto importante del cronograma, sin duración propia, como \"permiso aprobado\"."]],
          slides: [
            { title: "El acta inicia el proyecto", bullets: ["Nombra al patrocinador", "Le da autoridad al director del proyecto", "Sin acta, no hay proyecto"] },
            { title: "Qué va en una página", bullets: ["Propósito y una meta que se pueda medir", "Lo que entra y lo que no entra en el alcance", "Fecha límite, hitos, presupuesto, riesgos principales"] },
            { title: "Cuadrícula de interesados", bullets: ["Mucha influencia, mucho interés: gestionarlos de cerca", "Mucha influencia, poco interés: mantenerlos satisfechos", "Poca influencia, mucho interés: mantenerlos informados"] }
          ],
          tryIt: "Elige un proyecto real y pequeño, como una reunión familiar, una recaudación de fondos de la iglesia, una venta de garaje o limpiar una bodega en el trabajo. Escribe un acta de una página con todas las partes de arriba y luego haz una lista de al menos cinco interesados y coloca a cada uno en la cuadrícula.",
          youCanNow: "escribir un acta de constitución de una página y decidir cómo trabajar con cada interesado.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la mejor meta para un acta de constitución?", options: ["\"Mejorar el sitio web\"", "\"Hacer un gran trabajo con las inscripciones\"", "\"Tratar de terminar pronto\"", "\"Abrir la inscripción en línea para el 1 de marzo con 50 familias inscritas en el primer mes\""], answer: 3, why: "Una buena meta tiene un número y una fecha, así todos pueden saber si se cumplió." },
            { objective: "O2", q: "El inspector de la ciudad tiene mucha influencia pero poco interés en tu proyecto. ¿Cómo lo tratas?", options: ["Mantenerlo satisfecho: cumplir lo que necesita sin llenarlo de informes", "Ignorarlo hasta el final", "Mandarle todos los informes diarios", "Hacerlo patrocinador"], answer: 0, why: "A los interesados con mucha influencia y poco interés se les mantiene satisfechos para que no frenen el proyecto." }
          ]
        },
        {
          title: "Desglosar el trabajo y encontrar la ruta crítica",
          objectives: ["O3"],
          minutes: 6,
          goal: "Crear una estructura de desglose del trabajo y un cronograma, y marcar la ruta crítica.",
          text: [
            "Una estructura de desglose del trabajo (EDT, en inglés WBS) divide todo el proyecto en partes más pequeñas de los entregables, nivel por nivel, hasta que cada parte es lo bastante pequeña para estimarla y dársela a una persona. La parte más pequeña es un paquete de trabajo. Si no está en la EDT, no está en el proyecto.",
            "Luego, haz la lista de tareas, cuánto dura cada una (duración) y cuál tiene que terminar antes de que otra pueda empezar (dependencias). Dibújalas como cajas con flechas, de izquierda a derecha. Ejemplo: A, conseguir el permiso (2 días); B, construir el puesto (3 días, después de A); C, pedir los letreros (1 día, después de A); D, montar el puesto en la feria (2 días, después de B y C).",
            "Suma cada ruta del inicio al final. A-B-D dura 2 + 3 + 2 = 7 días. A-C-D dura 2 + 1 + 2 = 5 días. La ruta más larga es la ruta crítica: marca el final más corto posible, 7 días. Un retraso en A, B o D retrasa todo el proyecto. C tiene una holgura de 7 - 5 = 2 días: puede atrasarse 2 días sin mover el final."
          ],
          steps: ["Escribe los entregables principales del proyecto como el primer nivel de la EDT.", "Divide cada uno hasta que una parte sea lo bastante pequeña para que una persona la estime.", "Haz la lista de tareas con su duración y lo que cada una tiene que esperar.", "Dibuja cajas y flechas, y luego suma cada ruta.", "La ruta más larga es la ruta crítica; las demás tienen holgura."],
          words: [["Estructura de desglose del trabajo (EDT o WBS)", "un árbol que divide los entregables del proyecto en partes más pequeñas."], ["Paquete de trabajo", "la parte más pequeña de la EDT, lo bastante pequeña para estimarla y asignarla."], ["Dependencia", "un vínculo que indica que una tarea tiene que terminar (o empezar) antes que otra."], ["Ruta crítica", "la cadena más larga de tareas unidas; marca lo más pronto que puede terminar el proyecto."], ["Holgura", "cuánto puede atrasarse una tarea sin retrasar el final del proyecto."], ["Diagrama de Gantt", "un gráfico de barras que muestra cada tarea en un calendario."]],
          slides: [
            { title: "Estructura de desglose del trabajo", bullets: ["Todo el proyecto, luego entregables, luego paquetes de trabajo", "Cada paquete de trabajo: un responsable, fácil de estimar", "Si no está en la EDT, no está en el proyecto"] },
            { title: "Duraciones y dependencias", bullets: ["Cuánto dura cada tarea", "Qué tiene que terminar antes de que empiece", "Dibuja cajas y flechas, de izquierda a derecha"] },
            { title: "Encontrar la ruta crítica", bullets: ["Suma cada ruta del inicio al final", "Ejemplo: A-B-D = 7 días, A-C-D = 5 días", "Ruta más larga = ruta crítica = 7 días"] },
            { title: "Holgura", bullets: ["La tarea C puede atrasarse 2 días sin mover el final", "Las tareas de la ruta crítica tienen holgura cero", "Vigila más de cerca las tareas críticas"] }
          ],
          tryIt: "Toma el proyecto de tu acta. Dibuja en papel una EDT con al menos dos niveles. Luego haz una lista de cinco a ocho tareas con su duración y sus dependencias, dibújalas como cajas y flechas, suma cada ruta y encierra en un círculo la ruta crítica. Escribe la holgura de una tarea que no esté en ella.",
          youCanNow: "dividir un proyecto en una EDT, armar un cronograma sencillo y encontrar la ruta crítica y la holgura.",
          quickCheck: [
            { objective: "O3", q: "La ruta 1 dura 9 días y la ruta 2 dura 6 días. ¿Cuál es la ruta crítica y cuánto dura el proyecto?", options: ["La ruta 2, 6 días", "Las dos rutas, 15 días", "La ruta 1, 9 días", "La ruta 1, 3 días"], answer: 2, why: "La ruta más larga es la ruta crítica y marca el final más corto: 9 días." },
            { objective: "O3", q: "Una tarea tiene 2 días de holgura y se atrasa 1 día. ¿Qué pasa con la fecha de fin?", options: ["No se mueve", "Se mueve 1 día más tarde", "Se mueve 2 días más tarde", "Se cancela el proyecto"], answer: 0, why: "Una tarea puede atrasarse hasta su holgura sin retrasar el final." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Empezar bien un proyecto",
        questions: [
          { objective: "O1", q: "¿Qué hace que un proyecto sea diferente de las operaciones?", options: ["Un proyecto cuesta más", "Un proyecto es temporal y crea un resultado único", "Las operaciones nunca usan un cronograma", "Un proyecto no tiene presupuesto"], answer: 1, why: "Los proyectos tienen un inicio, un final y un resultado único; las operaciones se repiten." },
          { objective: "O2", q: "¿Qué documento inicia oficialmente un proyecto y le da autoridad al director del proyecto?", options: ["El registro de riesgos", "El diagrama de Gantt", "El informe de lecciones aprendidas", "El acta de constitución del proyecto"], answer: 3, why: "El acta autoriza el proyecto y nombra al patrocinador." },
          { objective: "O2", q: "A los vecinos les importa mucho tu limpieza del parque, pero no pueden detenerla. ¿Qué es lo mejor?", options: ["Mantenerlos informados", "Gestionarlos tan de cerca como al patrocinador", "Dejarlos fuera de la lista", "Pedirles que lo financien"], answer: 0, why: "A los interesados con poca influencia y mucho interés se les mantiene informados." },
          { objective: "O3", q: "¿Qué es un paquete de trabajo?", options: ["La caja en la que llegan los materiales del proyecto", "El informe final", "La parte más pequeña de la EDT, lo bastante pequeña para estimarla y asignarla", "El presupuesto del patrocinador"], answer: 2, why: "Un paquete de trabajo es el nivel más bajo de la estructura de desglose del trabajo." },
          { objective: "O3", q: "Tareas: A (3 días); luego B (4 días) y C (2 días), las dos después de A; luego D (1 día) después de B y C. ¿Cuánto dura la ruta crítica?", options: ["6 días", "10 días", "7 días", "8 días"], answer: 3, why: "A-B-D = 3 + 4 + 1 = 8 días, más que A-C-D = 6 días." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantener el proyecto en marcha y prepararse para el CAPM",
      lessons: [
        {
          title: "Riesgos, problemas y control de cambios",
          objectives: ["O4"],
          minutes: 6,
          goal: "Anotar los riesgos en un registro de riesgos y tramitar una solicitud de cambio por el control de cambios.",
          text: [
            "Un riesgo es algo que PODRÍA pasar y que afectaría al proyecto. Un problema (en inglés, issue) es algo que está pasando AHORA. Anota los riesgos temprano en un registro de riesgos: el riesgo, su probabilidad (qué tan probable es, de 1 a 5), su impacto (qué tan grave sería, de 1 a 5), un puntaje (probabilidad por impacto), una respuesta y un solo responsable.",
            "Hay cuatro respuestas principales a una amenaza. Evitarla (cambiar el plan para que no pueda pasar). Transferirla (pasársela a otro, por ejemplo con un seguro o un contrato). Mitigarla (hacerla menos probable o menos dañina). Aceptarla (no hacer nada ahora, pero vigilarla y quizás guardar algo de tiempo o dinero de reserva). Ejemplo: lluvia en un evento al aire libre, probabilidad 3, impacto 4, puntaje 12; respuesta: mitigar alquilando una carpa; responsable: María.",
            "Los cambios van a llegar. El aumento no controlado del alcance (scope creep) es cuando se agrega trabajo sin aprobación. Para frenarlo, usa el control de cambios: escribe una solicitud de cambio, revisa su efecto en el alcance, el tiempo, el costo, la calidad y el riesgo, haz que la persona indicada (a menudo el patrocinador o un comité de cambios) lo apruebe o lo rechace, y luego actualiza el plan y el registro de cambios. Sin aprobación, no hay cambio."
          ],
          steps: ["Haz una lista de lo que podría salir mal (y de lo que podría salir mejor de lo planeado).", "Dale un puntaje a cada riesgo: probabilidad x impacto.", "Elige una respuesta: evitar, transferir, mitigar o aceptar.", "Dale a cada riesgo un solo responsable.", "Para cualquier cambio: escríbelo, revisa el impacto, consigue la aprobación y luego actualiza el plan."],
          words: [["Riesgo", "algo incierto que podría pasar y que afectaría al proyecto."], ["Problema", "una dificultad que ya está pasando."], ["Registro de riesgos", "una tabla de riesgos con puntajes, respuestas y responsables."], ["Mitigar", "hacer que un riesgo sea menos probable o menos dañino."], ["Aumento no controlado del alcance", "trabajo agregado al proyecto sin aprobación (en inglés, scope creep)."], ["Control de cambios", "el proceso para revisar, aprobar o rechazar los cambios antes de hacerlos."]],
          slides: [
            { title: "¿Riesgo o problema?", bullets: ["Riesgo: podría pasar", "Problema: está pasando ahora", "Anota los riesgos temprano"] },
            { title: "El registro de riesgos", bullets: ["Probabilidad x impacto = puntaje", "Una respuesta y un responsable por riesgo", "Revísalo en cada reunión del equipo"] },
            { title: "Cuatro respuestas a una amenaza", bullets: ["Evitar, transferir, mitigar, aceptar", "Ejemplo: riesgo de lluvia, puntaje 12, mitigar con una carpa"] },
            { title: "Control de cambios", bullets: ["Escribe la solicitud", "Revisa el efecto en alcance, tiempo, costo, calidad y riesgo", "Aprueba o rechaza, y luego actualiza el plan"] }
          ],
          tryIt: "Haz un registro de riesgos para tu proyecto en una hoja de cálculo o en papel, con estas columnas: riesgo, probabilidad, impacto, puntaje, respuesta, responsable. Agrega al menos tres riesgos. Luego escribe una solicitud de cambio que alguien podría pedir, y anota su efecto en el tiempo y el costo y quién tiene que aprobarla.",
          youCanNow: "llevar un registro de riesgos y frenar el aumento no controlado del alcance con el control de cambios.",
          quickCheck: [
            { objective: "O4", q: "Un riesgo tiene probabilidad 4 e impacto 3. ¿Cuál es su puntaje?", options: ["7", "12", "1", "43"], answer: 1, why: "Puntaje = probabilidad x impacto = 4 x 3 = 12." },
            { objective: "O4", q: "Un miembro del equipo agrega una función nueva porque un cliente se la pidió en el pasillo. ¿Qué salió mal?", options: ["Nada; los clientes son primero", "El registro de riesgos era demasiado largo", "El acta era demasiado corta", "Aumento no controlado del alcance: el cambio se saltó el control de cambios"], answer: 3, why: "Los cambios se tienen que escribir, revisar por su impacto y aprobar antes de empezar el trabajo." }
          ]
        },
        {
          title: "Predictivo, ágil o híbrido: elegir el enfoque",
          objectives: ["O5"],
          minutes: 5,
          goal: "Elegir un enfoque predictivo, ágil o híbrido para un proyecto y dar las razones.",
          text: [
            "Un enfoque predictivo (a veces llamado en cascada o basado en un plan) planifica el alcance, el cronograma y el costo desde el principio y sigue el plan; los cambios pasan por el control de cambios. Sirve para trabajos en los que los requisitos son claros y estables y los cambios salen caros, como construir una rampa, mudar un almacén o una obra de construcción con permisos.",
            "Un enfoque ágil entrega en ciclos cortos (iteraciones o sprints), recibe comentarios cada vez y ajusta el plan. Sirve para trabajos en los que las necesidades no están claras o van a cambiar, como una aplicación nueva o un servicio nuevo en el que tienes que descubrir qué quieren los clientes. Scrum y Kanban son métodos ágiles comunes.",
            "Un enfoque híbrido mezcla los dos: por ejemplo, un plan predictivo para comprar el equipo y una fecha fija de apertura, con sprints ágiles para el sitio web y el marketing. Sea cual sea el enfoque, alguien tiene que entender los requisitos: lo que el cliente de verdad necesita. Reunir, escribir y revisar los requisitos se llama análisis de negocios, y es parte de lo que cubre el CAPM."
          ],
          steps: ["Pregunta: ¿los requisitos son claros y estables?", "Pregunta: ¿qué tan caro es un cambio al final del proyecto?", "Pregunta: ¿podemos entregar por partes pequeñas y recibir comentarios?", "Claros y caros de cambiar: predictivo. Poco claros y fáciles de entregar por partes: ágil. Una mezcla: híbrido."],
          words: [["Enfoque predictivo", "planificar el alcance, el tiempo y el costo desde el principio y luego seguir el plan; también se llama en cascada."], ["Enfoque ágil", "entregar en ciclos cortos, recibir comentarios y ajustar el plan."], ["Enfoque híbrido", "una mezcla de partes predictivas y ágiles en un mismo proyecto."], ["Requisito", "una necesidad que el resultado tiene que cumplir, como \"los clientes pueden pagar por teléfono\"."], ["Análisis de negocios", "descubrir, escribir y revisar lo que el cliente de verdad necesita."]],
          slides: [
            { title: "Predictivo (basado en un plan)", bullets: ["Planificar alcance, cronograma y costo desde el principio", "Mejor cuando los requisitos son claros y estables", "Ejemplo: construir una rampa para sillas de ruedas"] },
            { title: "Ágil", bullets: ["Ciclos cortos con comentarios cada vez", "Mejor cuando las necesidades no están claras o van a cambiar", "Ejemplo: una aplicación nueva para los clientes"] },
            { title: "Híbrido y requisitos", bullets: ["Mezclar los dos en un mismo proyecto", "Descubrir siempre lo que el cliente de verdad necesita", "Ese trabajo es el análisis de negocios"] }
          ],
          sources: [{ name: "Manifiesto por el Desarrollo Ágil de Software", url: "https://agilemanifesto.org/" }, { name: "La Guía de Scrum", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Lee estos tres casos: (1) pavimentar el estacionamiento de una iglesia con un permiso y un presupuesto fijos; (2) una nueva aplicación de entregas en la que los clientes piden cambios todo el tiempo; (3) abrir un restaurante con una fecha fija y un nuevo sitio para pedidos en línea. Escribe predictivo, ágil o híbrido para cada uno, con dos razones. Luego decide qué enfoque le queda a tu propio proyecto y por qué.",
          youCanNow: "elegir un enfoque predictivo, ágil o híbrido y explicar por qué es el adecuado.",
          quickCheck: [
            { objective: "O5", q: "Un equipo está creando una aplicación nueva y todavía no sabe qué funciones usarán los clientes. ¿Qué enfoque sirve mejor?", options: ["Predictivo, con todas las funciones fijadas desde ahora", "Ningún enfoque", "Ágil, entregando partes pequeñas y recibiendo comentarios", "Esperar a que los clientes manden una lista completa"], answer: 2, why: "Las necesidades poco claras van con ágil: los ciclos cortos y los comentarios muestran lo que quieren los clientes." },
            { objective: "O5", q: "Pavimentar un estacionamiento con un permiso fijo, un presupuesto fijo y especificaciones claras: ¿con qué enfoque va?", options: ["Predictivo", "Ágil", "Solo Kanban", "Ninguno, porque son operaciones"], answer: 0, why: "Los requisitos claros y estables y los cambios tardíos caros van con un plan predictivo." }
          ]
        },
        {
          title: "El CAPM: revisar las reglas y planificar tu examen",
          objectives: ["O6"],
          minutes: 6,
          goal: "Armar un plan con fechas para estudiar y presentar el CAPM a partir de las páginas oficiales del PMI.",
          text: [
            "El Certified Associate in Project Management (CAPM) es una credencial de nivel inicial que solo otorga el Project Management Institute (PMI). Está pensada para quienes empiezan, así que no pide años de experiencia en proyectos como sí lo hace la credencial Project Management Professional (PMP) del PMI. El PMI sí exige algo de formación en gestión de proyectos antes de presentar el examen. Este curso te prepara; no es la credencial, y puede contar o no para las horas de formación del PMI, así que revisa pmi.org.",
            "Antes de planificar, lee la página oficial del CAPM en el sitio del PMI, y el manual del CAPM y el esquema de contenido del examen (Exam Content Outline) que enlaza. Anota: quién puede presentarlo, cuántas horas de formación necesitas y qué cuenta, la tarifa actual (los miembros del PMI y quienes no lo son pueden pagar montos distintos), cómo y dónde puedes presentar el examen, y cómo mantener la credencial (hay que renovarla). Los esquemas recientes han cubierto los fundamentos de gestión de proyectos, los métodos predictivos, los métodos ágiles y el análisis de negocios, pero usa el esquema que muestra el PMI hoy.",
            "Veteranos: el GI Bill (los beneficios educativos para veteranos de Estados Unidos) puede reembolsar las tarifas de exámenes de licencia y certificación. Revisa la página de tarifas de exámenes del VA (el Departamento de Asuntos de Veteranos) y su GI Bill Comparison Tool para ver si un examen está aprobado. Fuera de Estados Unidos, el PMI tiene capítulos locales en muchos países; busca uno en pmi.org para encontrar grupos de estudio. Cuidado con quien venda un \"aprobado garantizado\" o preguntas reales del examen: eso rompe las reglas del PMI y te puede costar la credencial."
          ],
          steps: ["Abre pmi.org y busca la página del CAPM, el manual y el esquema de contenido del examen.", "Anota los requisitos, las horas de formación, la tarifa, el formato del examen y las reglas de renovación.", "Elige una fecha meta para el examen dentro de 8 a 12 semanas (o la que le quede a tu vida).", "Divide tu estudio en una EDT por tema del examen, con hitos y exámenes de práctica.", "Agrega un registro de riesgos: horas de trabajo, familia, nervios ante el examen, costo."],
          words: [["CAPM", "Certified Associate in Project Management, una credencial de nivel inicial del PMI."], ["PMI", "Project Management Institute, la organización que otorga el CAPM y el PMP."], ["Esquema de contenido del examen", "la lista oficial del PMI de los temas que cubre un examen (Exam Content Outline)."], ["PMP", "Project Management Professional, la credencial del PMI para directores de proyecto con experiencia."], ["Requisitos de elegibilidad", "lo que tienes que cumplir antes de poder solicitar el examen."]],
          slides: [
            { title: "Qué es el CAPM", bullets: ["Credencial de nivel inicial, que solo otorga el PMI", "No pide años de experiencia en proyectos, a diferencia del PMP", "Este curso te prepara; no es la credencial"] },
            { title: "Revisa en pmi.org", bullets: ["Requisitos y horas de formación", "Tarifa actual, para miembros y no miembros", "Formato del examen, esquema de contenido, renovación"] },
            { title: "Ayuda con los costos", bullets: ["Veteranos: el GI Bill puede reembolsar tarifas de exámenes de certificación", "Revisa va.gov y la GI Bill Comparison Tool", "En otros países: busca un capítulo local del PMI"] },
            { title: "Planifica tu examen como un proyecto", bullets: ["Acta: meta y fecha meta para el examen", "EDT por tema del examen, con hitos", "Registro de riesgos; nunca compres \"preguntas reales del examen\""] }
          ],
          sources: [{ name: "PMI: Certified Associate in Project Management (CAPM)", url: "https://www.pmi.org/certifications/certified-associate-capm" }, { name: "PMI: Certificaciones", url: "https://www.pmi.org/certifications" }, { name: "Departamento de Asuntos de Veteranos de EE. UU.: Reembolso de tarifas de exámenes de licencia o certificación", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" }],
          tryIt: "Tarea final: abre la página del CAPM en el sitio del PMI y anota los requisitos, las horas de formación, la tarifa y los temas del examen. Luego planifica tu preparación para el CAPM como un proyecto: un acta de una página con una fecha meta para el examen, una EDT de tu estudio por tema, un cronograma con fechas, hitos y la ruta crítica marcada, y un registro de riesgos con al menos tres riesgos. Agrega la lista de páginas del PMI que revisaste.",
          youCanNow: "revisar las reglas actuales del CAPM en el sitio del PMI y armar tu propio plan con fechas para estudiar y presentar el examen.",
          quickCheck: [
            { objective: "O6", q: "¿Quién otorga el CAPM?", options: ["Este curso", "La junta de licencias de tu estado", "Cualquier empresa de capacitación", "El Project Management Institute (PMI)"], answer: 3, why: "Solo el PMI otorga el CAPM; los cursos solo te preparan." },
            { objective: "O6", q: "¿Dónde debes revisar la tarifa actual del CAPM y las horas de formación?", options: ["En una publicación de redes sociales", "En la página oficial del CAPM y el manual en pmi.org", "Con un vendedor de exámenes de práctica", "En la respuesta de un chatbot de IA"], answer: 1, why: "Las tarifas y los requisitos cambian; las páginas del propio PMI son la fuente oficial." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantener el proyecto en marcha y prepararse para el CAPM",
        questions: [
          { objective: "O4", q: "Tu proveedor podría llegar tarde. Consigues un segundo proveedor por si acaso. ¿Qué respuesta es esta?", options: ["Aceptar", "Evitar", "Mitigar", "Ignorar"], answer: 2, why: "Un proveedor de respaldo hace que la amenaza sea menos dañina, y eso es mitigar." },
          { objective: "O4", q: "El patrocinador pide un escenario más grande. ¿Qué debe pasar primero?", options: ["Construirlo de inmediato", "Escribir una solicitud de cambio y revisar su efecto en el tiempo y el costo", "Decir que no a todos los cambios", "Quitar otra tarea sin decirle a nadie"], answer: 1, why: "El control de cambios revisa el impacto y consigue la aprobación antes de cualquier cambio." },
          { objective: "O5", q: "¿Qué situación va con un enfoque híbrido?", options: ["Un restaurante nuevo con una fecha fija de apertura más un sitio nuevo de pedidos creado en sprints", "Pavimentar una calle con un diseño fijo", "Contestar teléfonos todos los días", "Pintar una habitación"], answer: 0, why: "El híbrido mezcla un plan predictivo para las partes fijas con ágil para las partes que van a cambiar." },
          { objective: "O6", q: "¿En qué se diferencia el CAPM del PMP?", options: ["El CAPM lo otorga tu estado", "No hay ninguna diferencia", "El PMP es para principiantes", "El CAPM es de nivel inicial y no exige años de experiencia en proyectos"], answer: 3, why: "El CAPM es la credencial de nivel inicial del PMI; el PMP es para directores de proyecto con experiencia." },
          { objective: "O6", q: "Alguien en internet vende \"las preguntas reales del examen CAPM\". ¿Qué haces?", options: ["Comprarlas para aprobar más rápido", "Compartirlas con tu grupo de estudio", "Negarte: rompe las reglas del PMI y te puede costar la credencial", "Usarlas solo una vez"], answer: 2, why: "Usar contenido filtrado del examen rompe las reglas del PMI; estudia con el esquema y con exámenes de práctica honestos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de gestión de proyectos (preparación para el CAPM)",
    questions: [
      { objective: "O1", q: "¿Cuál es operaciones continuas y no un proyecto?", options: ["Crear un sitio web nuevo", "Procesar los pedidos de clientes todos los días", "Mudar una oficina a otra ciudad", "Organizar una feria de empleo una sola vez"], answer: 1, why: "Procesar pedidos todos los días se repite; los demás son temporales y tienen un resultado único." },
      { objective: "O1", q: "¿Cuáles son las tres restricciones de la clásica triple restricción?", options: ["Papel, lápices e impresoras", "Patrocinador, equipo y cliente", "Riesgo, problema y cambio", "Alcance, cronograma y costo"], answer: 3, why: "El alcance, el cronograma y el costo son las tres clásicas, y se afectan entre sí." },
      { objective: "O1", q: "¿En qué fase entregas el resultado y anotas las lecciones aprendidas?", options: ["Cierre", "Inicio", "Planificación", "Ejecución del trabajo"], answer: 0, why: "En el cierre se entrega el resultado y se guardan las lecciones para la próxima vez." },
      { objective: "O2", q: "¿Quién aprueba y financia el proyecto?", options: ["El miembro más nuevo del equipo", "Todos los interesados por igual", "El patrocinador", "El proveedor"], answer: 2, why: "El patrocinador aprueba, financia y apoya el proyecto." },
      { objective: "O2", q: "¿Qué va en un acta de constitución del proyecto?", options: ["Una meta con una medida y una fecha, más lo que entra y lo que no entra en el alcance", "El pedido de almuerzo de cada miembro del equipo", "La lista detallada de tareas diarias", "La declaración de impuestos del año pasado"], answer: 0, why: "El acta da el propósito, una meta que se puede medir, el alcance, la fecha límite, el presupuesto y el patrocinador." },
      { objective: "O2", q: "Un miembro del concejo municipal tiene mucha influencia y mucho interés en tu huerto comunitario. ¿Cómo lo tratas?", options: ["Mantenerlo informado con una nota al año", "Consultarlo de vez en cuando", "Dejarlo fuera de la lista", "Gestionarlo de cerca"], answer: 3, why: "A los interesados con mucha influencia y mucho interés se les gestiona de cerca." },
      { objective: "O3", q: "¿Para qué sirve una estructura de desglose del trabajo?", options: ["Para hacer la lista de riesgos del proyecto", "Para dividir los entregables en partes más pequeñas que puedas estimar y asignar", "Para aprobar cambios", "Para pagarle al equipo"], answer: 1, why: "La EDT divide todo el proyecto en paquetes de trabajo." },
      { objective: "O3", q: "¿Qué es la ruta crítica?", options: ["La cadena de tareas más corta", "Las tareas que más le gustan al patrocinador", "La cadena más larga de tareas unidas, que marca el final más pronto posible", "La lista de riesgos"], answer: 2, why: "La ruta más larga marca la duración más corta posible del proyecto." },
      { objective: "O3", q: "Rutas: A-B-E = 10 días, A-C-E = 7 días, A-D-E = 9 días. ¿Cuál es la holgura de la ruta A-D-E?", options: ["0 días", "3 días", "9 días", "1 día"], answer: 3, why: "La ruta crítica dura 10 días, así que A-D-E puede atrasarse 10 - 9 = 1 día." },
      { objective: "O3", q: "Una tarea de la ruta crítica se atrasa 2 días. ¿Qué pasa?", options: ["El final del proyecto se mueve 2 días más tarde, a menos que recuperes el tiempo", "Nada, porque tiene holgura", "Solo cambia el presupuesto", "La tarea sale de la EDT"], answer: 0, why: "Las tareas de la ruta crítica tienen holgura cero, así que su retraso mueve el final." },
      { objective: "O4", q: "¿Cuál es la diferencia entre un riesgo y un problema?", options: ["No hay ninguna", "Un problema podría pasar; un riesgo está pasando ahora", "Un riesgo podría pasar; un problema está pasando ahora", "Los riesgos solo tienen que ver con dinero"], answer: 2, why: "Un riesgo es incierto y está en el futuro; un problema es una dificultad actual." },
      { objective: "O4", q: "Compras un seguro para el evento por si el lugar cancela. ¿Qué respuesta es esta?", options: ["Evitar", "Transferir", "Aceptar", "Mitigar"], answer: 1, why: "El seguro pasa el impacto económico a otro, y eso es transferir." },
      { objective: "O4", q: "¿Qué es el aumento no controlado del alcance (scope creep)?", options: ["Una herramienta del cronograma", "Una forma de dar puntaje a los riesgos", "Un tipo de interesado", "Trabajo agregado al proyecto sin aprobación"], answer: 3, why: "Es trabajo agregado sin aprobación; el control de cambios lo frena." },
      { objective: "O5", q: "Los requisitos son claros y estables, y los cambios tardíos son muy caros. ¿Qué enfoque sirve?", options: ["Predictivo", "Ágil", "Sin plan", "Cambiar cada semana"], answer: 0, why: "Las necesidades claras y estables y los cambios caros van con un enfoque basado en un plan." },
      { objective: "O5", q: "¿Qué es el análisis de negocios?", options: ["Contar el dinero al final", "Elegir el almuerzo del equipo", "Descubrir, escribir y revisar lo que el cliente de verdad necesita", "Firmar el acta"], answer: 2, why: "El análisis de negocios aclara los requisitos reales." },
      { objective: "O5", q: "Una organización sin fines de lucro está creando una aplicación nueva para voluntarios y espera que los comentarios cambien las funciones. ¿Qué enfoque sirve mejor?", options: ["Predictivo, con todas las funciones fijadas desde ahora", "Ágil, entregando partes pequeñas con comentarios", "Ningún enfoque", "Crearla completa y mostrarla solo al final"], answer: 1, why: "Las necesidades que cambian van con los ciclos cortos y los comentarios de ágil." },
      { objective: "O6", q: "¿Qué te da este curso para el CAPM?", options: ["La credencial CAPM en sí", "Un aprobado garantizado", "Una membresía del PMI", "Preparación en las ideas básicas; solo el PMI otorga el CAPM"], answer: 3, why: "El curso te prepara; solo el PMI otorga la credencial." },
      { objective: "O6", q: "¿Qué documento oficial enumera los temas que cubre el examen CAPM?", options: ["El esquema de contenido del examen del PMI (Exam Content Outline)", "Una publicación de un foro", "La descripción de tu puesto", "Un anuncio en redes sociales"], answer: 0, why: "El PMI publica el esquema de contenido de cada examen." },
      { objective: "O6", q: "Una veterana quiere ayuda para pagar la tarifa del examen CAPM. ¿Dónde debe revisar?", options: ["Con un vendedor de exámenes de práctica", "En su banco", "En la página del VA sobre tarifas de exámenes de licencia y certificación y en la GI Bill Comparison Tool", "En un foro cualquiera"], answer: 2, why: "El GI Bill puede reembolsar tarifas de exámenes de certificación aprobados; las páginas del VA explican cómo." },
      { objective: "O6", q: "¿Cuál es la mejor manera de planificar el examen CAPM?", options: ["Estudiar cuando te acuerdes", "Tratarlo como un proyecto: acta, EDT por tema, cronograma con fechas y registro de riesgos", "Comprar preguntas reales del examen", "Presentar el examen sin revisar los requisitos"], answer: 1, why: "Un plan con fechas basado en el esquema oficial del PMI es el camino confiable." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a entregarla.",
    criteria: [
      { name: "Acta de constitución", objective: "O2", notYet: "La meta es vaga o no tiene fecha, o falta lo que entra y lo que no entra en el alcance.", meets: "Una página con el propósito, una meta con un número y una fecha, lo que entra y lo que no entra en el alcance, el patrocinador y los hitos.", exceeds: "También incluye a los interesados con su influencia e interés y cómo se mantendrá informado a cada uno." },
      { name: "EDT y cronograma", objective: "O3", notYet: "Las tareas están en una lista sin desglose, duraciones ni dependencias.", meets: "Una EDT con al menos dos niveles y un cronograma con fechas, hitos, dependencias y la ruta crítica marcada.", exceeds: "Muestra la holgura de las tareas no críticas y la duración de la ruta crítica está bien calculada." },
      { name: "Registro de riesgos", objective: "O4", notYet: "Menos de tres riesgos, o riesgos sin respuesta o sin responsable.", meets: "Al menos tres riesgos, cada uno con probabilidad, impacto, puntaje, una respuesta y un solo responsable.", exceeds: "Usa más de un tipo de respuesta e incluye una nota de control de cambios sobre cómo se cambiará el plan." },
      { name: "Enfoque", objective: "O5", notYet: "No se eligió un enfoque o no se dio ninguna razón.", meets: "Nombra predictivo, ágil o híbrido para el plan de estudio y da dos razones.", exceeds: "Muestra cómo se usa el enfoque, por ejemplo ciclos semanales de estudio con un repaso." },
      { name: "Reglas oficiales del CAPM revisadas", objective: "O6", notYet: "Las tarifas, las horas o los temas del examen se copiaron de una fuente no oficial o faltan.", meets: "Anota los requisitos, las horas de formación, la tarifa y los temas del examen tomados de las páginas del PMI, con los nombres de las páginas.", exceeds: "También anota ayudas con los costos (por ejemplo, el GI Bill o el apoyo del empleador) y un capítulo local del PMI o un grupo de estudio." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que solicitan el CAPM o terminan la formación que exige el PMI en un plazo de 90 días (encuesta de seguimiento)",
      "Participantes que aprueban el CAPM o que son contratados o ascendidos a un puesto de coordinador, asistente o líder de equipo de proyectos",
      "Participantes que dicen usar un acta, un cronograma o un registro de riesgos en el trabajo o en su comunidad en un plazo de 30 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel y lápiz, o una hoja de cálculo gratis (Google Sheets o Excel en línea)",
      "Acceso a internet para leer la página del CAPM, el manual y el esquema de contenido del examen en pmi.org",
      "Un proyecto real y pequeño para planificar (de la familia, el trabajo, la iglesia, la comunidad o una unidad militar)",
      "Unos 75 a 90 minutos en total, en sesiones cortas, más tiempo para la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; resuelvan el ejemplo de la ruta crítica en una pizarra antes de que los participantes hagan el suyo.",
      "Deje que los participantes usen un proyecto de su propia vida; los veteranos pueden pasar un plan de misión al acta, la EDT y el registro de riesgos.",
      "Abran pmi.org juntos en la última sesión para que los participantes vean los requisitos, las tarifas y el esquema de contenido del examen actuales; no cite números de memoria.",
      "Deje claro que el curso prepara a los participantes y no otorga el CAPM; dígales que consulten con el PMI si cuenta para las horas de formación exigidas.",
      "Advierta contra quienes venden preguntas reales del examen o aprobados garantizados, y califique la tarea final con la rúbrica."
    ]
  }
};
