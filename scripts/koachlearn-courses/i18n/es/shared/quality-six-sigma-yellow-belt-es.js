"use strict";

// Koach Learn course (Spanish translation of shared/quality-six-sigma-yellow-belt.js). See scripts/koachlearn-courses/README.md, "Translations".

const ASQ = { name: "ASQ: Certified Six Sigma Yellow Belt (requisitos, examen y Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC: Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt-es",
  lang: "es",
  translationOf: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Fundamentos de calidad (preparación para Six Sigma Yellow Belt)",
  skills: "Usar los pasos DMAIC, Escribir un enunciado del problema, Recoger datos en una hoja de verificación, Encontrar causas raíz con Pareto y los 5 porqués, Eliminar desperdicios y mantener la mejora, Planear un examen Yellow Belt",
  outcome: "hacer una pequeña mejora de calidad en un proceso real con los cinco pasos DMAIC (Definir, Medir, Analizar, Mejorar y Controlar), mostrarla en una sola página y seguir un plan con fechas para prepararte para un examen Six Sigma Yellow Belt.",
  about: [
    "En todo lugar de trabajo hay procesos que fallan: pedidos tarde, facturas equivocadas, esperas largas, piezas que no encajan. Six Sigma es una forma de arreglarlos con datos en lugar de suposiciones, y Lean es una forma de quitar pasos que desperdician tiempo. Las empresas de manufactura, almacenes, salud, gobierno, hoteles y oficinas buscan personas que sepan lo básico.",
    "Este curso es para quienes buscan trabajo, trabajadores de primera línea que quieren ascender, veteranos que pasan a trabajos civiles de operaciones y dueños de pequeños negocios. No necesitas más matemáticas que sumar, dividir y sacar porcentajes.",
    "Vas a elegir un proceso real de tu trabajo, tu negocio o tu casa y mejorarlo paso a paso, un paso DMAIC por lección. El curso te PREPARA para un examen Yellow Belt, como el ASQ Certified Six Sigma Yellow Belt o el IASSC Certified Lean Six Sigma Yellow Belt; no otorga ningún certificado. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" y una comprobación rápida de dos preguntas; hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un proyecto de mejora de una página para un proceso real: un enunciado del problema y una meta, un mapa sencillo del proceso, una hoja de verificación con al menos 20 datos y la tasa de defectos, un diagrama de Pareto y unos 5 porqués para el problema más grande, un arreglo pequeño que hayas probado y un control para mantener la mejora. Agrega un plan de estudio y examen con fechas para el examen Yellow Belt que elijas, con la página oficial donde revisaste sus reglas actuales.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes que buscan trabajo o un ascenso en operaciones, manufactura, almacenes, oficinas de salud, hotelería y gobierno; veteranos que pasan a puestos civiles de operaciones y calidad; dueños de pequeños negocios que quieren menos errores y menos desperdicio.",
    startingPoint: "La mayoría ha visto problemas que se repiten en el trabajo y tiene ideas para arreglarlos, pero no ha usado un método ordenado, no ha recogido datos a propósito ni ha usado palabras de calidad como defecto, causa raíz o DMAIC. Las matemáticas son del día a día: contar, dividir y sacar porcentajes.",
    gap: "Las habilidades de calidad y mejora continua aparecen en muchas ofertas de empleo, y un Yellow Belt es una primera credencial común. Los participantes necesitan hacer una pequeña mejora con datos y mostrarla en una página, de la que puedan hablar en una entrevista, y conocer los pasos reales hacia un examen reconocido.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada término de calidad se explica la primera vez",
      "Dispositivos: basta con papel y lápiz; una hoja de cálculo gratis (Google Sheets o Excel) ayuda con los gráficos",
      "Tiempo: lecciones de 5 minutos, más una o dos semanas de recogida de datos para la tarea final",
      "Las reglas, formatos y costos de los exámenes cambian y varían según el organismo certificador; los participantes revisan la página oficial",
      "Nada de nombres de clientes, datos de pacientes ni secretos de la empresa en los datos de práctica"
    ],
    prerequisites: "Ninguno. Quienes no se sientan cómodos con los porcentajes pueden tomar primero \"Matemáticas para el día a día\", y \"Excel y hojas de cálculo\" ayuda con los gráficos."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con la descripción de un proyecto de mejora", action: "nombrar en orden los cinco pasos DMAIC y decir qué se hace en cada uno", standard: "con los cinco correctos" },
    { id: "O2", condition: "Con un proceso que tiene un problema que se repite", action: "escribir un enunciado del problema y una meta medible, y dibujar un mapa sencillo del proceso", standard: "con qué, dónde, cuándo y de qué tamaño, y sin causa ni solución en el enunciado" },
    { id: "O3", condition: "Con un proceso que observas durante una o dos semanas", action: "recoger datos en una hoja de verificación y calcular una tasa de defectos", standard: "con al menos 20 datos y las cuentas a la vista" },
    { id: "O4", condition: "Con los datos de tu hoja de verificación", action: "encontrar el problema más grande con un diagrama de Pareto y llegar a su causa raíz con los 5 porqués", standard: "de modo que el equipo pueda actuar sobre la causa encontrada" },
    { id: "O5", condition: "Con una causa raíz", action: "elegir un arreglo que quite desperdicios o errores, probarlo a pequeña escala y establecer un control", standard: "con datos de antes y después del arreglo" },
    { id: "O6", condition: "Usando la página oficial de ASQ o IASSC", action: "hacer un plan de estudio y examen con fechas para un examen Yellow Belt", standard: "con el formato y las reglas del examen revisados en esa página" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Definir y medir el problema",
      lessons: [
        {
          title: "La calidad, Six Sigma y los cinco pasos DMAIC",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar los cinco pasos DMAIC y decir qué hace un Yellow Belt en cada uno.",
          text: [
            "Calidad es darle al cliente lo que necesita, de la misma forma, cada vez. Un defecto es cualquier cosa que el cliente no aceptaría: un pedido equivocado, una entrega tarde, una pieza que falta, un error en la factura.",
            "Six Sigma es un método para reducir los defectos usando datos en lugar de suposiciones. Lean es un método para reducir el desperdicio, es decir, los pasos que añaden tiempo pero no valor. Muchas empresas los enseñan juntos como Lean Six Sigma.",
            "Los proyectos siguen cinco pasos llamados DMAIC (por sus iniciales en inglés): Definir el problema, Medir qué tan grande es, Analizar para encontrar la causa raíz, Mejorar probando un arreglo y Controlar para mantener la mejora. Los cinturones (belts) muestran el nivel de formación: un Yellow Belt (cinturón amarillo) sabe lo básico y ayuda en los proyectos, muchas veces recogiendo datos y dibujando los pasos; los Green Belt y Black Belt dirigen proyectos más grandes.",
            "Dos credenciales Yellow Belt muy conocidas son el ASQ Certified Six Sigma Yellow Belt y el IASSC Certified Lean Six Sigma Yellow Belt. ASQ e IASSC son organismos que certifican en calidad. Este curso te prepara; solo el organismo certificador otorga la credencial."
          ],
          steps: ["Definir: ¿cuál es el problema y cuál es la meta?", "Medir: ¿con qué frecuencia pasa ahora?", "Analizar: ¿cuál es la causa raíz?", "Mejorar: ¿qué arreglo funciona cuando lo pruebas?", "Controlar: ¿cómo mantienes la mejora?"],
          words: [["Defecto", "cualquier cosa que el cliente no aceptaría, como un artículo equivocado, tarde o roto."], ["Six Sigma", "un método para reducir defectos usando datos; una calidad muy alta significa unos 3.4 defectos por cada millón de oportunidades."], ["Lean", "un método para quitar pasos que desperdician tiempo o materiales."], ["DMAIC", "Definir, Medir, Analizar, Mejorar, Controlar: los cinco pasos de un proyecto Six Sigma."], ["Yellow Belt", "una persona formada en lo básico que ayuda en proyectos de mejora."]],
          slides: [
            { title: "Calidad y defectos", bullets: ["Calidad: lo que el cliente necesita, igual cada vez", "Defecto: cualquier cosa que el cliente no aceptaría"] },
            { title: "Six Sigma y Lean", bullets: ["Six Sigma: menos defectos, con datos", "Lean: menos pasos desperdiciados", "Juntos: Lean Six Sigma"] },
            { title: "DMAIC en orden", bullets: ["Definir el problema", "Medir qué tan grande es", "Analizar la causa raíz", "Mejorar con un arreglo probado y luego Controlar para mantenerlo"] },
            { title: "Cinturones y credenciales", bullets: ["Yellow Belt: sabe lo básico, ayuda en los proyectos", "ASQ e IASSC ofrecen exámenes Yellow Belt", "Este curso te prepara; no te certifica"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Elige un proceso que conozcas y que falle demasiado, en el trabajo, en un negocio o en casa (por ejemplo, pedidos enviados tarde, almuerzos equivocados o facturas con errores). Escríbelo arriba de una hoja y luego escribe D, M, A, I, C hacia abajo, con una pregunta que harías en cada paso.",
          youCanNow: "nombrar en orden los cinco pasos DMAIC, decir qué hace un Yellow Belt y elegir un proceso para mejorar.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es el orden correcto de los pasos DMAIC?", options: ["Diseñar, Hacer, Evaluar, Inspeccionar, Cerrar", "Medir, Definir, Mejorar, Analizar, Controlar", "Definir, Medir, Analizar, Mejorar, Controlar", "Definir, Gestionar, Actuar, Mejorar, Revisar"], answer: 2, why: "DMAIC significa Definir, Medir, Analizar, Mejorar y Controlar, en ese orden." },
            { objective: "O1", q: "Tu equipo está probando una nueva forma de empacar pedidos para ver si bajan los errores. ¿Qué paso es este?", options: ["Mejorar", "Definir", "Medir", "Controlar"], answer: 0, why: "Probar un arreglo para ver si funciona se hace en el paso Mejorar." }
          ]
        },
        {
          title: "Definir: el enunciado del problema y el mapa del proceso",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escribir un enunciado del problema y una meta, y dibujar un mapa sencillo del proceso.",
          text: [
            "Un buen proyecto empieza con un enunciado del problema claro. Dice qué está mal, dónde, desde cuándo, qué tan grande es y por qué importa. Todavía NO nombra una causa ni una solución, porque aún no las has encontrado. Ejemplo: \"Desde junio, 12 de cada 100 almuerzos de la cafetería del centro salen equivocados, lo que causa reembolsos y quejas.\"",
            "La meta dice cuánto mejor y para cuándo: \"Bajar los almuerzos equivocados a 3 de cada 100 para finales de septiembre.\"",
            "Luego haz el mapa del proceso. Escribe cada paso en un cuadro, de principio a fin, y únelos con flechas. Un SIPOC es una tabla rápida del panorama general: Proveedores (Suppliers), Entradas (Inputs), Pasos del proceso (Process), Salidas (Outputs) y Clientes (Customers). La voz del cliente (VOC) es lo que los clientes dicen que necesitan; lo que más les importa se llama crítico para la calidad (CTQ)."
          ],
          steps: ["Escribe qué está mal, dónde, desde cuándo y qué tan grande es.", "Agrega por qué importa (costo, tiempo, clientes, seguridad).", "Revisa: sin causa y sin solución en el enunciado.", "Escribe una meta con un número y una fecha.", "Dibuja el proceso en 5 a 8 cuadros, de principio a fin."],
          words: [["Enunciado del problema", "una descripción corta y basada en hechos de qué está mal, dónde, cuándo y qué tan grande es."], ["Mapa del proceso", "un dibujo de los pasos de un proceso en orden, con cuadros y flechas."], ["SIPOC", "una tabla de una página con Proveedores, Entradas, Proceso, Salidas y Clientes."], ["Voz del cliente (VOC)", "lo que los clientes dicen que necesitan o de lo que se quejan."], ["Crítico para la calidad (CTQ)", "una característica que es lo que más le importa al cliente, como llegar a tiempo o estar correcto."]],
          slides: [
            { title: "Un buen enunciado del problema", bullets: ["Qué, dónde, desde cuándo, qué tan grande", "Por qué importa", "Todavía sin causa ni solución"] },
            { title: "Una buena meta", bullets: ["Cuánto mejor y para cuándo", "Ejemplo: pedidos equivocados de 12 a 3 por cada 100 a fines de septiembre"] },
            { title: "Haz el mapa del proceso", bullets: ["De 5 a 8 cuadros, de principio a fin", "Las flechas muestran el orden", "SIPOC: Proveedores, Entradas, Proceso, Salidas, Clientes"] },
            { title: "Escucha al cliente", bullets: ["Voz del cliente: lo que necesita", "Crítico para la calidad: lo que más le importa"] }
          ],
          tryIt: "Para el proceso que elegiste, escribe un enunciado del problema con qué, dónde, desde cuándo y qué tan grande es (por ahora usa tu mejor cálculo), una meta con un número y una fecha, y un mapa del proceso de 5 a 8 cuadros en papel.",
          youCanNow: "escribir un enunciado del problema y una meta, y dibujar un mapa sencillo del proceso.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es el mejor enunciado del problema?", options: ["\"El cocinero nuevo es descuidado.\"", "\"Desde marzo, 8 de cada 50 envíos del almacén del este llegan tarde, lo que causa reembolsos a clientes.\"", "\"Necesitamos un sistema de computación nuevo.\"", "\"Los envíos están mal.\""], answer: 1, why: "Dice qué, dónde, desde cuándo y qué tan grande es, y no culpa a una causa ni nombra una solución." },
            { objective: "O2", q: "¿Qué significa la P de SIPOC?", options: ["Precio", "Personas", "Plan", "Proceso"], answer: 3, why: "SIPOC es Proveedores, Entradas, Proceso, Salidas y Clientes." }
          ]
        },
        {
          title: "Medir: hojas de verificación y tasas de defectos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Recoger datos en una hoja de verificación y calcular una tasa de defectos.",
          text: [
            "En el paso Medir averiguas con qué frecuencia pasa el problema de verdad. Las suposiciones a menudo fallan, así que cuentas.",
            "Una hoja de verificación es un formulario sencillo en papel o en una hoja de cálculo. Hacia abajo, anota los tipos de defectos (artículo equivocado, artículo que falta, tarde). Arriba, anota los días. Haz una marca cada vez que pase uno y cuenta también el total de unidades que revisaste.",
            "La tasa de defectos es el número de unidades con defecto dividido entre el total de unidades, por 100. Si 15 de 200 pedidos salieron mal: 15 / 200 = 0.075, o sea 7.5%. Six Sigma también usa DPMO, defectos por millón de oportunidades: defectos divididos entre (unidades por oportunidades por unidad), por 1,000,000. Si 500 facturas tienen 4 posibilidades de error cada una y encuentras 10 errores: 10 / (500 x 4) = 0.005, por 1,000,000 = 5,000 DPMO.",
            "Mide siempre de la misma forma: la misma definición de defecto, la misma hora del día, la misma persona o reglas claras. Esta es tu línea base, el número de \"antes\" con el que compararás después."
          ],
          steps: ["Escribe una definición clara de cada defecto.", "Haz una hoja de verificación: tipos de defecto hacia abajo, días arriba.", "Marca cada defecto y cuenta el total de unidades revisadas.", "Tasa de defectos = unidades con defecto / total de unidades x 100.", "Anota esto como tu línea base."],
          words: [["Hoja de verificación", "un formulario sencillo para marcar cuántas veces pasa cada tipo de problema."], ["Tasa de defectos", "la parte de las unidades que tienen un defecto, en porcentaje."], ["DPMO", "defectos por millón de oportunidades: defectos / (unidades x posibilidades por unidad) x 1,000,000."], ["Línea base", "cómo funciona el proceso antes de cambiarlo."]],
          slides: [
            { title: "Cuenta, no adivines", bullets: ["Mide con qué frecuencia pasa el problema", "Usa una sola definición clara de defecto"] },
            { title: "La hoja de verificación", bullets: ["Tipos de defecto hacia abajo", "Días arriba", "Marcas de conteo, más el total de unidades revisadas"] },
            { title: "Las cuentas", bullets: ["Tasa de defectos = con defecto / total x 100", "15 malos de 200 = 7.5%", "DPMO = defectos / (unidades x posibilidades) x 1,000,000"] },
            { title: "Tu línea base", bullets: ["El número de \"antes\"", "Mide siempre de la misma forma", "La compararás después del arreglo"] }
          ],
          tryIt: "Haz una hoja de verificación para tu proceso en papel o en una hoja de cálculo. Recoge al menos 20 datos durante la próxima semana (empieza hoy), luego calcula tu tasa de defectos y muestra las cuentas. Practica ahora: ¿9 entregas tarde de 150 es qué porcentaje? (Respuesta: 9 / 150 = 0.06 = 6%.)",
          youCanNow: "recoger datos en una hoja de verificación, calcular una tasa de defectos y fijar tu línea base.",
          quickCheck: [
            { objective: "O3", q: "Revisaste 80 pedidos y 4 estaban mal. ¿Cuál es la tasa de defectos?", options: ["5%", "4%", "20%", "8%"], answer: 0, why: "4 / 80 = 0.05, que es 5%." },
            { objective: "O3", q: "¿Por qué escribes una definición clara de cada defecto antes de contar?", options: ["Para que el gráfico se vea más bonito", "Para que el jefe pueda firmarlo", "Para que todos cuenten igual y se pueda confiar en los números", "Para necesitar menos datos"], answer: 2, why: "Si cada persona cuenta cosas distintas, los datos no se pueden comparar ni son confiables." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Definir y medir el problema",
        questions: [
          { objective: "O1", q: "¿En qué paso DMAIC buscas la causa raíz?", options: ["Definir", "Analizar", "Controlar", "Medir"], answer: 1, why: "En Analizar usas datos y herramientas para encontrar la causa raíz." },
          { objective: "O1", q: "¿Qué hace normalmente un Yellow Belt en un proyecto?", options: ["Es dueño de la empresa", "Otorga los certificados", "Aprueba el presupuesto solo", "Ayuda con tareas como recoger datos y dibujar los pasos"], answer: 3, why: "Los Yellow Belt saben lo básico y apoyan los proyectos, muchas veces recogiendo datos y haciendo el mapa del proceso." },
          { objective: "O2", q: "Un enunciado del problema dice: \"Hay errores porque al personal no le importa.\" ¿Qué tiene de malo?", options: ["Culpa a una causa antes de recoger datos", "Es demasiado corto para leerlo", "Usa números", "No tiene nada de malo"], answer: 0, why: "Un enunciado del problema describe el problema con hechos; la causa se encuentra después, en Analizar." },
          { objective: "O3", q: "Revisaste 250 formularios y 10 tenían errores. ¿Cuál es la tasa de defectos?", options: ["10%", "2.5%", "4%", "25%"], answer: 2, why: "10 / 250 = 0.04, que es 4%." },
          { objective: "O3", q: "¿Qué es una línea base?", options: ["La meta que quieres alcanzar", "La línea de abajo de un gráfico", "El informe final", "Cómo funciona el proceso antes de cambiarlo"], answer: 3, why: "La línea base es el número de \"antes\" que comparas después del arreglo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Analizar, mejorar y controlar",
      lessons: [
        {
          title: "Analizar: diagramas de Pareto, espinas de pescado y 5 porqués",
          objectives: ["O4"],
          minutes: 6,
          goal: "Encontrar el problema más grande con un diagrama de Pareto y su causa raíz con los 5 porqués.",
          text: [
            "Un diagrama de Pareto es un gráfico de barras ordenado de la barra más grande a la más pequeña. Muestra que unas pocas causas suelen provocar la mayoría de los problemas, lo que muchas veces se llama la regla 80/20. Empieza por la barra más grande.",
            "Un diagrama de espina de pescado (también llamado de causa y efecto o de Ishikawa) ayuda a un equipo a hacer una lista de posibles causas. Escribe el problema en la \"cabeza\" y luego dibuja espinas para grupos de causas, como Métodos, Máquinas, Materiales, Personas, Medición y Entorno.",
            "Después pregunta \"¿Por qué?\" unas cinco veces para ir del síntoma a una causa raíz que puedas arreglar. Ejemplo: Los pedidos salen mal. ¿Por qué? El cocinero leyó mal el ticket. ¿Por qué? El ticket estaba escrito a mano. ¿Por qué? La impresora está rota. ¿Por qué? Nadie está a cargo de arreglarla. ¿Por qué? No hay revisión de mantenimiento. Causa raíz: no hay revisión de mantenimiento de la impresora.",
            "Culpar a alguien no es una causa raíz. Si la respuesta es \"alguien fue descuidado\", sigue preguntando por qué el proceso permitió el error."
          ],
          steps: ["Suma cada tipo de defecto de tu hoja de verificación.", "Ordénalos de mayor a menor y dibuja las barras.", "Elige la barra más grande.", "Haz una lista de posibles causas en una espina de pescado.", "Pregunta \"¿Por qué?\" unas cinco veces hasta llegar a una causa sobre la que puedas actuar."],
          words: [["Diagrama de Pareto", "un gráfico de barras ordenado de mayor a menor, para ver qué pocos problemas importan más."], ["Regla 80/20", "el patrón de que unas pocas causas suelen provocar la mayoría de los problemas."], ["Diagrama de espina de pescado", "un dibujo que agrupa las posibles causas de un problema; también se llama diagrama de Ishikawa."], ["Causa raíz", "la verdadera razón por la que pasa un problema; si la arreglas, el problema para o baja."], ["5 porqués", "preguntar \"¿Por qué?\" una y otra vez, unas cinco veces, para llegar a la causa raíz."]],
          slides: [
            { title: "Diagrama de Pareto", bullets: ["Barras ordenadas de mayor a menor", "Pocas causas provocan la mayoría de los problemas (80/20)", "Empieza por la barra más grande"] },
            { title: "Diagrama de espina de pescado", bullets: ["El problema en la cabeza", "Espinas: Métodos, Máquinas, Materiales, Personas, Medición, Entorno"] },
            { title: "5 porqués", bullets: ["Pregunta \"¿Por qué?\" unas cinco veces", "Pedidos mal, luego tickets a mano, luego impresora rota, luego sin revisión"] },
            { title: "Culpar no es una causa raíz", bullets: ["Pregunta por qué el proceso permitió el error", "Busca una causa sobre la que puedas actuar"] }
          ],
          tryIt: "Suma cada tipo de defecto de tu hoja de verificación, ordénalos y dibuja un diagrama de Pareto en papel o en una hoja de cálculo. Luego escribe los 5 porqués de la barra más grande. Detente cuando llegues a una causa que puedas arreglar y que no culpe a una persona.",
          youCanNow: "dibujar un diagrama de Pareto, elegir el problema más grande y llegar a su causa raíz con los 5 porqués.",
          quickCheck: [
            { objective: "O4", q: "Tu diagrama de Pareto muestra: talla equivocada 40, artículo que falta 25, tarde 10, dañado 5. ¿Por dónde empiezas?", options: ["Dañado, porque es lo más fácil", "Los cuatro a la vez", "Tarde, porque a los clientes no les gusta esperar", "Talla equivocada, la barra más grande"], answer: 3, why: "Un diagrama de Pareto te dice que empieces por la barra más grande, donde un arreglo ayuda más." },
            { objective: "O4", q: "Tus 5 porqués terminan en \"el trabajador fue descuidado\". ¿Qué debes hacer?", options: ["Quedarte ahí y reportar al trabajador", "Seguir preguntando por qué el proceso permitió el error", "Empezar un proyecto nuevo", "Quitar al trabajador del gráfico"], answer: 1, why: "Culpar no es una causa raíz; busca qué parte del proceso permitió el error." }
          ]
        },
        {
          title: "Mejorar: quitar desperdicios y hacer el trabajo a prueba de errores",
          objectives: ["O5"],
          minutes: 5,
          goal: "Elegir un arreglo que quite desperdicios o errores y probarlo a pequeña escala.",
          text: [
            "Lean nombra ocho tipos de desperdicio. Una forma fácil de recordarlos es la palabra inglesa DOWNTIME: Defectos, Sobreproducción (Overproduction), Esperas (Waiting), Talento no usado (Non-used talent), Transporte, Inventario (demasiadas existencias), Movimiento (caminar o estirarse de más) y Procesamiento extra (Extra processing).",
            "Los buenos arreglos muchas veces hacen que la forma correcta sea la más fácil. Las 5S organizan un área de trabajo: Clasificar (Sort), Ordenar (Set in order), Limpiar (Shine), Estandarizar (Standardize) y Mantener (Sustain). La prueba de errores (poka-yoke, en japonés) hace que los errores sean difíciles o imposibles, como un enchufe que solo entra de una forma, un formulario que no se envía si hay una casilla vacía o un recipiente con código de colores.",
            "Prueba primero el arreglo a pequeña escala: un turno, un escritorio o una semana. Esto es un piloto. Mide de la misma forma que tu línea base y compara. Si los números mejoraron, extiéndelo; si no, prueba la siguiente idea."
          ],
          steps: ["Haz una lista de arreglos que ataquen la causa raíz.", "Prefiere arreglos que quiten desperdicios o hagan difíciles los errores.", "Haz un piloto pequeño: un turno, un escritorio o una semana.", "Mide de la misma forma que la línea base.", "Compara el antes y el después."],
          words: [["Desperdicio", "cualquier paso que usa tiempo o materiales pero no añade valor para el cliente."], ["DOWNTIME", "una ayuda para recordar los ocho desperdicios: Defectos, Sobreproducción, Esperas, Talento no usado, Transporte, Inventario, Movimiento, Procesamiento extra."], ["5S", "Clasificar, Ordenar, Limpiar, Estandarizar, Mantener: una forma de organizar un área de trabajo."], ["Prueba de errores (poka-yoke)", "un diseño que hace que los errores sean difíciles o imposibles."], ["Piloto", "una prueba pequeña y corta de un arreglo antes de usarlo en todas partes."]],
          slides: [
            { title: "Los ocho desperdicios: DOWNTIME", bullets: ["Defectos, Sobreproducción, Esperas, Talento no usado", "Transporte, Inventario, Movimiento, Procesamiento extra"] },
            { title: "5S", bullets: ["Clasificar, Ordenar, Limpiar", "Estandarizar, Mantener"] },
            { title: "Prueba de errores", bullets: ["Haz que la forma correcta sea la más fácil", "Un enchufe que entra de una sola forma; un formulario que no acepta casillas vacías"] },
            { title: "Primero un piloto", bullets: ["Un turno, un escritorio o una semana", "Mide como en la línea base", "¿Mejoró? Extiéndelo. ¿No mejoró? Prueba la siguiente idea"] }
          ],
          tryIt: "Escribe tres arreglos posibles para tu causa raíz. Marca qué desperdicio quita cada uno o cómo hace el trabajo a prueba de errores. Elige uno, planea un piloto pequeño (dónde, cuánto tiempo, quién) y empieza a medirlo de la misma forma que tu línea base.",
          youCanNow: "reconocer los ocho desperdicios, elegir un arreglo que quite desperdicios o errores y probarlo con un piloto pequeño.",
          quickCheck: [
            { objective: "O5", q: "Los trabajadores cruzan el almacén muchas veces al día para buscar cinta. ¿Qué desperdicio es este?", options: ["Sobreproducción", "Defectos", "Movimiento", "Inventario"], answer: 2, why: "Caminar y estirarse de más es el desperdicio de movimiento." },
            { objective: "O5", q: "Tienes un arreglo que crees que va a funcionar. ¿Cuál es el mejor paso siguiente?", options: ["Probarlo a pequeña escala y compararlo con la línea base", "Extenderlo a todos los lugares a la vez", "No medir, porque estás seguro", "Esperar un año para ver"], answer: 0, why: "Un piloto pequeño medido como la línea base muestra si el arreglo funciona de verdad." }
          ]
        },
        {
          title: "Controlar la mejora y planear tu examen Yellow Belt",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Establecer un control para el arreglo y hacer un plan de estudio y examen con fechas.",
          text: [
            "Muchos arreglos se pierden cuando la gente vuelve a sus viejas costumbres. En el paso Controlar mantienes la mejora: escribe la nueva forma como trabajo estándar (una lista corta o una imagen de los pasos correctos), capacita a la gente y sigue midiendo. Un gráfico de corrida muestra tus números a lo largo del tiempo con una línea central; un gráfico de control agrega límites que muestran cuándo el proceso cambió más de lo normal. Escribe un plan de control sencillo: qué revisar, cada cuánto, quién revisa y qué hacer si el número empeora.",
            "Ahora planea tu credencial. El ASQ Certified Six Sigma Yellow Belt no pide experiencia ni estudios, y sus exámenes son a libro abierto con tus propios materiales de consulta encuadernados, según asq.org. El IASSC Certified Lean Six Sigma Yellow Belt no tiene requisitos previos, y su examen es a libro cerrado y supervisado, según iassc.org. Los formatos, costos y reglas cambian, así que lee la página oficial antes de inscribirte. Algunas empresas también dan su propia formación Yellow Belt interna.",
            "Descarga el Body of Knowledge del organismo certificador (la lista de temas que puede cubrir el examen), marca cada tema que ya sabes y planea tiempo de estudio para los demás. Pon fechas reales en el calendario y reserva el examen solo cuando tus resultados de práctica sean estables."
          ],
          steps: ["Escribe la nueva forma como trabajo estándar.", "Haz un plan de control: qué, cada cuánto, quién y qué hacer si empeora.", "Mantén un gráfico de corrida al menos unas semanas.", "Elige un examen y lee su página oficial.", "Usa el Body of Knowledge para planear fechas de estudio y una fecha meta para el examen."],
          words: [["Trabajo estándar", "la mejor forma acordada de hacer una tarea, escrita en pasos sencillos o imágenes."], ["Gráfico de corrida", "un gráfico de líneas de una medida a lo largo del tiempo, para ver tendencias."], ["Gráfico de control", "un gráfico de corrida con límites que muestran cuándo un proceso cambia más de lo normal."], ["Plan de control", "un plan corto que dice qué revisar, cada cuánto, quién revisa y qué hacer si se empeora."], ["Body of Knowledge", "la lista oficial de temas que puede cubrir un examen."]],
          slides: [
            { title: "Mantén la mejora", bullets: ["Escribe la nueva forma como trabajo estándar", "Capacita a la gente", "Sigue midiendo"] },
            { title: "Gráficos que vigilan el proceso", bullets: ["Gráfico de corrida: números en el tiempo con una línea central", "Gráfico de control: agrega límites de variación normal"] },
            { title: "Dos exámenes Yellow Belt", bullets: ["ASQ CSSYB: a libro abierto, sin experiencia requerida", "IASSC ICYB: a libro cerrado, supervisado, sin requisitos previos", "Revisa la página oficial: las reglas cambian"] },
            { title: "Tu plan de estudio y examen", bullets: ["Descarga el Body of Knowledge", "Marca lo que sabes; planea el resto", "Fechas reales; reserva cuando tus prácticas se mantengan"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Tarea final: termina tu proyecto de una página (enunciado del problema y meta, mapa del proceso, hoja de verificación y tasa de defectos, diagrama de Pareto y 5 porqués, el arreglo que probaste con números de antes y después, y un plan de control). Luego abre la página Yellow Belt de ASQ o IASSC, escribe el formato del examen que encontraste ahí y haz un plan de estudio con al menos cuatro sesiones de estudio con fecha y una fecha meta para el examen.",
          youCanNow: "mantener una mejora con trabajo estándar y un plan de control, y seguir un plan con fechas hacia un examen Yellow Belt.",
          quickCheck: [
            { objective: "O5", q: "Tres meses después de un arreglo, los errores están volviendo a subir. ¿Qué paso faltó?", options: ["Definir", "Controlar", "Medir", "Analizar"], answer: 1, why: "Controlar mantiene la mejora con trabajo estándar, capacitación y revisiones continuas." },
            { objective: "O6", q: "¿Dónde debes revisar las reglas y el formato actuales de un examen Yellow Belt?", options: ["En una publicación de redes sociales", "Con un amigo que aprobó hace años", "En un anuncio de un curso barato", "En la página oficial del organismo certificador, como asq.org o iassc.org"], answer: 3, why: "Las reglas, formatos y costos de los exámenes cambian; la página del propio organismo certificador es la fuente confiable." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Analizar, mejorar y controlar",
        questions: [
          { objective: "O4", q: "¿Qué muestra un diagrama de Pareto?", options: ["Qué pocos problemas causan la mayor parte de los fallos", "Los pasos de un proceso en orden", "El presupuesto de un proyecto", "A quién culpar"], answer: 0, why: "Un diagrama de Pareto ordena los problemas de mayor a menor para que veas los pocos vitales." },
          { objective: "O4", q: "¿Qué herramienta agrupa las posibles causas en espinas como Métodos, Máquinas y Materiales?", options: ["Una hoja de verificación", "Un gráfico de corrida", "Un diagrama de espina de pescado", "Un SIPOC"], answer: 2, why: "El diagrama de espina de pescado (Ishikawa) agrupa las posibles causas de un problema." },
          { objective: "O5", q: "Un formulario no se envía hasta que se llenan todas las casillas obligatorias. Esto es un ejemplo de:", options: ["Sobreproducción", "Prueba de errores", "Inventario", "Un gráfico de control"], answer: 1, why: "La prueba de errores (poka-yoke) hace que el error sea difícil o imposible." },
          { objective: "O5", q: "¿Cuáles son los pasos de las 5S?", options: ["Vender, Enviar, Ahorrar, Servir, Sonreír", "Ver, Decir, Parar, Empezar, Firmar", "Escanear, Puntuar, Resolver, Ordenar, Enviar", "Clasificar, Ordenar, Limpiar, Estandarizar, Mantener"], answer: 3, why: "Las 5S son Clasificar, Ordenar, Limpiar, Estandarizar y Mantener." },
          { objective: "O6", q: "¿Qué es un Body of Knowledge?", options: ["La lista oficial de temas que puede cubrir un examen", "Un libro de medicina", "El manual de la empresa", "Una lista de respuestas de exámenes pasados"], answer: 0, why: "El organismo certificador publica el Body of Knowledge para que sepas qué estudiar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de calidad (preparación para Six Sigma Yellow Belt)",
    questions: [
      { objective: "O1", q: "¿Qué significa DMAIC?", options: ["Hacer, Fabricar, Preguntar, Inspeccionar, Cerrar", "Diseñar, Monitorear, Actuar, Informar, Revisar", "Definir, Medir, Analizar, Mejorar, Controlar", "Decidir, Medir, Aprobar, Instalar, Contar"], answer: 2, why: "Los cinco pasos de un proyecto Six Sigma son Definir, Medir, Analizar, Mejorar y Controlar." },
      { objective: "O1", q: "¿En qué paso se escriben el enunciado del problema y la meta?", options: ["Definir", "Mejorar", "Controlar", "Analizar"], answer: 0, why: "En Definir se plantean el problema, la meta y el proceso." },
      { objective: "O1", q: "¿Qué afirmación sobre un curso Yellow Belt como este es verdadera?", options: ["Al terminarlo recibes el certificado de ASQ", "Reemplaza cualquier examen", "Solo los Black Belt pueden tomarlo", "Te prepara; el organismo certificador otorga la credencial"], answer: 3, why: "Un curso te prepara; solo el organismo certificador, como ASQ o IASSC, otorga la credencial." },
      { objective: "O2", q: "¿Qué incluye un buen enunciado del problema?", options: ["La solución que prefieres", "Qué, dónde, desde cuándo y qué tan grande", "El nombre del trabajador al que culpar", "Solo la palabra \"problema\""], answer: 1, why: "Da los hechos del problema sin nombrar una causa ni una solución." },
      { objective: "O2", q: "¿Cuál es una meta medible?", options: ["\"Hacerlo mejor con los pedidos\"", "\"Esforzarse más\"", "\"Bajar las entregas tarde del 10% al 3% para el 31 de diciembre\"", "\"Hacer más felices a los clientes algún día\""], answer: 2, why: "Tiene un número y una fecha, así que puedes saber si la alcanzaste." },
      { objective: "O2", q: "Un mapa del proceso muestra:", options: ["Los pasos de un proceso en orden, con cuadros y flechas", "Las ganancias de la empresa", "Dónde está la oficina en un mapa de calles", "Qué trabajador es el más rápido"], answer: 0, why: "Un mapa del proceso dibuja cada paso de principio a fin." },
      { objective: "O3", q: "¿Para qué sirve una hoja de verificación?", options: ["Para pagar a los trabajadores", "Para firmar contratos", "Para escribir la meta", "Para marcar cuántas veces pasa cada tipo de problema"], answer: 3, why: "Una hoja de verificación es un formulario sencillo para contar defectos por tipo." },
      { objective: "O3", q: "Revisaste 400 facturas y 12 tenían errores. ¿Cuál es la tasa de defectos?", options: ["12%", "3%", "4%", "0.3%"], answer: 1, why: "12 / 400 = 0.03, que es 3%." },
      { objective: "O3", q: "100 unidades, cada una con 5 posibilidades de error, tienen 2 errores en total. ¿Cuál es el DPMO?", options: ["2,000", "400", "4,000", "20,000"], answer: 2, why: "2 / (100 x 5) = 0.004, y 0.004 x 1,000,000 = 4,000." },
      { objective: "O4", q: "La regla 80/20 en un diagrama de Pareto significa:", options: ["Unas pocas causas suelen provocar la mayoría de los problemas", "80 trabajadores cometen 20 errores", "Arreglar 20 problemas al día", "Todas las causas importan igual"], answer: 0, why: "Pareto muestra las pocas causas vitales, así que empiezas por la barra más grande." },
      { objective: "O4", q: "¿Por qué preguntas \"¿Por qué?\" unas cinco veces?", options: ["Para hacer más lenta la reunión", "Para encontrar a quién culpar", "Porque el examen exige exactamente cinco", "Para ir más allá del síntoma hasta una causa raíz que puedas arreglar"], answer: 3, why: "Cada \"por qué\" baja un nivel más hasta llegar a una causa sobre la que puedes actuar." },
      { objective: "O4", q: "¿Qué respuesta es una causa raíz sobre la que puedes actuar?", options: ["\"La gente es floja\"", "\"No hay revisión de mantenimiento de la impresora de tickets\"", "\"Mala suerte\"", "\"Los clientes son difíciles\""], answer: 1, why: "Una causa raíz es una falla del proceso que puedes arreglar, no una culpa ni la suerte." },
      { objective: "O5", q: "Cajas con existencias de más llenan el cuarto del fondo y algunas se vencen. ¿Qué desperdicio es este?", options: ["Movimiento", "Esperas", "Inventario", "Talento no usado"], answer: 2, why: "Tener demasiadas existencias es el desperdicio de inventario." },
      { objective: "O5", q: "Antes de extender un arreglo a todas partes, debes:", options: ["Probarlo en un piloto pequeño y compararlo con la línea base", "No medir", "Cambiar cinco cosas a la vez", "Pedir a los clientes que esperen"], answer: 0, why: "Un piloto muestra si el arreglo funciona antes de gastar tiempo y dinero en extenderlo." },
      { objective: "O5", q: "¿Qué dice un plan de control?", options: ["Quién recibe un bono", "Solo la fecha de inicio del proyecto", "Cómo escribir un enunciado del problema", "Qué revisar, cada cuánto, quién revisa y qué hacer si se empeora"], answer: 3, why: "Un plan de control mantiene la mejora con revisiones regulares y una respuesta clara." },
      { objective: "O5", q: "Un gráfico de corrida es:", options: ["Una lista de los ocho desperdicios", "Un gráfico de líneas de una medida a lo largo del tiempo", "Un dibujo de causas", "Un plano del edificio"], answer: 1, why: "Un gráfico de corrida muestra los datos en el tiempo para ver si la mejora se mantiene." },
      { objective: "O6", q: "Según asq.org, el examen ASQ Certified Six Sigma Yellow Belt es:", options: ["Solo para personas con cinco años de experiencia", "Dado solo en un aula por tu empleador", "A libro abierto, sin requisito de experiencia ni de estudios", "A libro cerrado y sin notas"], answer: 2, why: "ASQ dice que el CSSYB no pide experiencia ni estudios y que sus exámenes son a libro abierto." },
      { objective: "O6", q: "Según iassc.org, el examen Yellow Belt de IASSC es:", options: ["A libro cerrado y supervisado", "A libro abierto con cualquier nota", "Sin límite de tiempo", "Solo para miembros de ASQ"], answer: 0, why: "IASSC indica que el examen ICYB es a libro cerrado y supervisado." },
      { objective: "O6", q: "¿Cuál es el mejor primer paso para armar tu plan de estudio?", options: ["Reservar el examen para mañana", "Comprar el curso más caro", "Memorizar respuestas viejas de un sitio web", "Descargar el Body of Knowledge y marcar los temas que necesitas estudiar"], answer: 3, why: "El Body of Knowledge muestra lo que cubre el examen, así puedes planear tiempo de estudio para lo que te falta." },
      { objective: "O6", q: "¿Cuándo debes reservar la fecha de tu examen?", options: ["Antes de estudiar nada", "Cuando tus resultados de práctica sean estables y hayas revisado las reglas oficiales", "Nunca; los certificados no hacen falta", "Solo cuando tu empleador te lo diga"], answer: 1, why: "Resultados de práctica estables y reglas al día significan que estás listo para el examen." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Problema y meta", objective: "O2", notYet: "El enunciado es vago o nombra una causa o una solución; la meta no tiene número ni fecha.", meets: "El enunciado dice qué, dónde, desde cuándo y qué tan grande; la meta tiene un número y una fecha; incluye un mapa del proceso de 5 a 8 pasos.", exceeds: "Además incluye un SIPOC o nombra lo que más le importa al cliente (CTQ)." },
      { name: "Datos y tasa de defectos", objective: "O3", notYet: "Menos de 20 datos, o no hay una definición clara de defecto.", meets: "Una hoja de verificación con al menos 20 datos y la tasa de defectos con las cuentas a la vista.", exceeds: "Además da el DPMO, o muestra que se usaron las mismas reglas de conteo todos los días." },
      { name: "Causa raíz", objective: "O4", notYet: "No hay diagrama de Pareto, o los 5 porqués terminan en una culpa.", meets: "Un diagrama de Pareto ordenado de mayor a menor y unos 5 porqués que terminan en una causa del proceso sobre la que alguien puede actuar.", exceeds: "Además usa una espina de pescado para mostrar otras causas que el equipo descartó." },
      { name: "Arreglo y control", objective: "O5", notYet: "El arreglo no se probó, o no hay números de antes y después.", meets: "Un arreglo probado en piloto con números de antes y después y un plan de control (qué, cada cuánto, quién, qué hacer si empeora).", exceeds: "Además incluye trabajo estándar o un gráfico de corrida de varias semanas." },
      { name: "La historia DMAIC", objective: "O1", notYet: "La página salta de un tema a otro y faltan pasos o están en desorden.", meets: "La página sigue Definir, Medir, Analizar, Mejorar y Controlar en orden.", exceeds: "La persona puede explicar el proyecto en menos de dos minutos, como en una entrevista de trabajo." },
      { name: "Plan de estudio y examen", objective: "O6", notYet: "No hay fechas, o no se revisó ninguna página oficial.", meets: "Nombra un examen, el formato revisado en su página oficial, al menos cuatro sesiones de estudio con fecha y una fecha meta para el examen.", exceeds: "Además relaciona las sesiones de estudio con temas del Body of Knowledge e incluye fechas de exámenes de práctica." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que presentan y aprueban un examen Yellow Belt en 6 meses (encuesta de seguimiento)",
      "Participantes que usan su proyecto de una página en una entrevista, o consiguen un trabajo, un ascenso o un lugar en un equipo de mejora (encuesta de seguimiento)",
      "Participantes y dueños de pequeños negocios que reportan una tasa de defectos más baja o menos desperdicio en el proceso elegido 30 días después"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y una regla para las hojas de verificación, los gráficos y los mapas del proceso",
      "Opcional: una hoja de cálculo gratis (Google Sheets o Microsoft Excel) para los diagramas de Pareto y los gráficos de corrida",
      "Un proceso real para observar durante una o dos semanas (en el trabajo, en un negocio o en casa)",
      "Acceso a internet para leer la página oficial Yellow Belt de ASQ o IASSC",
      "Unos 60 minutos de lecciones y comprobaciones, más una o dos semanas de recogida de datos para la tarea final"
    ],
    facilitatorNotes: [
      "En grupo: hagan juntos la prueba inicial y luego un capítulo por sesión. Pide que cada persona elija su proceso en la primera sesión para que la recogida de datos empiece pronto.",
      "Practiquen en grupo un diagrama de Pareto y unos 5 porqués con un ejemplo común (como los pedidos equivocados de una cafetería) antes de que cada persona haga el suyo.",
      "Detén cualquier serie de 5 porqués que termine en una culpa y pregunta qué parte del proceso permitió el error.",
      "Recuerda a los participantes que no anoten nombres de clientes, datos de pacientes ni secretos de la empresa en sus datos.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila de Todavía no a la vez; pide que practiquen explicar su proyecto como respuesta de entrevista.",
      "No digas de memoria costos de exámenes ni puntajes para aprobar; envía a los participantes a asq.org o iassc.org para ver las reglas actuales."
    ]
  }
};
