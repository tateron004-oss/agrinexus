"use strict";

// Koach Learn course (Spanish translation of entrepreneurs/entrepreneurs-scaling-ai-business.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-scaling-ai-business-es",
  lang: "es",
  translationOf: "entrepreneurs-scaling-ai-business",
  category: "Entrepreneurs",
  name: "Cómo hacer crecer un negocio impulsado por IA",
  skills: "Conocer tus números clave, Encontrar el cuello de botella, Convertir el trabajo en sistemas, Sumar ayuda, Ganar clientes paso a paso, Cuidar la calidad mientras creces",
  outcome: "usar la IA para leer los números clave de tu negocio, encontrar lo que frena el crecimiento, convertir tu trabajo en sistemas que otros puedan seguir y escribir un plan realista de crecimiento a 90 días con controles de calidad.",
  about: [
    "Escalar significa aumentar las ventas sin que tus costos, tus horas y tus errores crezcan al mismo ritmo. Este curso es para dueños cuyo negocio ya funciona y que están listos para hacerlo crecer, con la IA haciendo más del trabajo de rutina.",
    "En el Capítulo 1 usarás la IA para entender tus números, encontrar el único cuello de botella que te frena y convertir tu trabajo en sistemas escritos. En el Capítulo 2 planearás la ayuda que necesitas (contratistas, empleados y herramientas de IA), elegirás canales de crecimiento y fijarás controles de calidad y de riesgo para que el crecimiento no rompa lo que a tus clientes les encanta.",
    "Cada lección dura unos cinco minutos e incluye una tarea sobre tu propio negocio. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los temas de impuestos, empleo y leyes enlazan a fuentes oficiales; consulta con un contador o un abogado para tu caso."
  ],
  finalTask: "Escribe un plan de crecimiento a 90 días de una página: tus cinco números clave de hoy y tus metas, tu principal cuello de botella y cómo lo vas a eliminar, dos sistemas que vas a documentar, la ayuda que vas a sumar (una persona o una herramienta de IA) y su costo, un canal de crecimiento para probar y tres controles de calidad que revisarás cada semana.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños en EE. UU. de pequeños negocios que ya funcionan y tienen clientes constantes, que están listos para crecer y quieren que la IA haga más del trabajo de rutina.",
    startingPoint: "Venden, atienden a los clientes y hacen ellos mismos casi todos los trabajos clave. Muchos no siguen sus números clave cada mes, tienen pocos sistemas por escrito y no han planeado contrataciones ni pruebas de crecimiento.",
    gap: "Hacer crecer un negocio que pierde dinero en cada venta, o que depende del tiempo del dueño para cada trabajo, agranda los problemas en vez de achicarlos. Necesitan leer sus números, resolver el cuello de botella principal, escribir sistemas, sumar la ayuda correcta y probar el crecimiento con controles de calidad, para que el negocio crezca sin romperse.",
    constraints: [
      "Palabras sencillas y cuentas básicas en una hoja de cálculo",
      "Dispositivos: una computadora con una hoja de cálculo y un asistente de IA gratuito",
      "Tiempo: unos cinco minutos por lección más trabajo con los números y los sistemas propios del dueño",
      "Los puntos de impuestos y de empleo (como la clasificación de trabajadores) enlazan a fuentes oficiales; los dueños lo consultan con un contador o un abogado",
      "Se quitan los nombres de los clientes antes de que cualquier dato del negocio entre en la IA"
    ],
    prerequisites: "Se recomienda \"IA para la productividad del negocio\", y un negocio con al menos seis meses de ventas."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con seis meses de números del negocio sin nombres de clientes", action: "seguir cinco números clave en una hoja de cálculo y usar la IA para explicar las tendencias", standard: "revisando las cuentas de la IA y diciendo si cada venta deja ganancia" },
    { id: "O2", condition: "Con los pasos de tu proceso principal y sus tiempos", action: "identificar el cuello de botella y elegir un arreglo: quitarlo, automatizarlo o pasarlo a otra persona", standard: "con el arreglo listo para probar este mes" },
    { id: "O3", condition: "Con dos trabajos clave que haces tú", action: "escribir cada uno como un sistema con pasos, una lista de verificación y un estándar de calidad", standard: "para que otra persona pueda seguirlo sin hacer preguntas" },
    { id: "O4", condition: "Con la ayuda que más necesita tu negocio", action: "elegir entre una herramienta de IA y una persona y preparar una descripción del puesto justa", standard: "con palabras relacionadas con el trabajo y una nota sobre la clasificación del trabajador según los tres tipos de evidencia del IRS" },
    { id: "O5", condition: "Con los posibles canales de crecimiento", action: "planear una prueba de 30 días de un canal con una meta, una medida y un límite de gasto", standard: "comparando el costo por cliente nuevo con tus números clave" },
    { id: "O6", condition: "Para tu plan de crecimiento de 90 días", action: "fijar tres controles de calidad semanales y una revisión de las herramientas de IA y los datos de clientes", standard: "revisando el plan cada dos semanas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepárate para crecer",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conocer tus números clave",
          minutes: 5,
          goal: "Seguir cinco números clave y usar la IA para explicar qué significan.",
          text: [
            "No puedes hacer crecer lo que no mides. Para la mayoría de los pequeños negocios importan cinco números: los ingresos mensuales (el dinero que entra), los costos, la ganancia (lo que queda), el número de clientes y cuánto vale cada cliente con el tiempo comparado con lo que cuesta conseguirlo.",
            "Pon los últimos seis meses en una hoja de cálculo. Luego pídele a la IA que te ayude a leerla: \"Estos son mis ingresos, costos y número de clientes por mes (sin nombres). ¿Qué tendencias ves? ¿Qué número me debería preocupar?\" Revisa tú mismo sus cálculos.",
            "Un negocio está listo para escalar cuando cada venta deja ganancia y los clientes vuelven o te recomiendan. Si cada venta pierde dinero, crecer solo hace más grande la pérdida."
          ],
          steps: ["Haz una hoja de cálculo con seis meses de ingresos, costos, ganancia y número de clientes.", "Calcula la venta promedio y el costo de conseguir un cliente.", "Pídele a la IA que describa tendencias y riesgos (sin nombres de clientes).", "Vuelve a hacer tú cualquier cálculo.", "Escribe una oración: ¿cada venta deja ganancia?"],
          words: [["Ingresos", "todo el dinero que entra por ventas."], ["Ganancia", "los ingresos menos los costos."], ["Costo de adquisición de clientes", "lo que gastas, en promedio, para conseguir un cliente nuevo."], ["Escalar", "hacer crecer las ventas más rápido que los costos y el esfuerzo."]],
          slides: [
            { title: "Cinco números clave", bullets: ["Ingresos y costos", "Ganancia", "Número de clientes", "Valor del cliente frente a lo que cuesta conseguirlo"] },
            { title: "La IA lee las tendencias", bullets: ["Seis meses en una hoja de cálculo", "Pide a la IA tendencias y riesgos", "Revisa tú mismo los cálculos"] },
            { title: "¿Listo para escalar?", bullets: ["Cada venta deja ganancia", "Los clientes vuelven o te recomiendan", "Si una venta pierde dinero, crecer agranda la pérdida"] }
          ],
          tryIt: "Arma tu hoja con los números de seis meses, pídele a la IA que señale tendencias y un riesgo, revisa sus cálculos y escribe si cada venta deja ganancia.",
          youCanNow: "seguir tus números clave y juzgar si tu negocio está listo para escalar.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es el costo de adquisición de clientes?", options: ["Lo que gastas en promedio para conseguir un cliente nuevo", "El precio que paga un cliente", "Tu renta", "El número de clientes que tienes"], answer: 0, why: "Muestra cuánto te cuesta ganar cada cliente nuevo." },
            { objective: "O1", q: "La IA dice que tu ganancia se duplicó el mes pasado, pero algo no te cuadra. ¿Qué haces?", options: ["Celebrar y contratar de inmediato", "Revisar tú mismo las cuentas en la hoja de cálculo", "Pedirle a la IA que lo repita", "Ignorar tus números"], answer: 1, why: "Revisa siempre las cuentas de la IA antes de actuar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar el cuello de botella",
          minutes: 5,
          goal: "Encontrar el paso que más limita cuánto trabajo puede manejar tu negocio.",
          text: [
            "Un cuello de botella es el punto más estrecho, el que limita todo lo demás. En un negocio de pasteles puede ser el espacio en el horno; en un negocio de servicios suele ser el tiempo del dueño para cotizaciones, seguimiento o revisiones de calidad.",
            "Haz una lista de los pasos desde el primer contacto hasta el cliente satisfecho y cuánto tarda cada uno por cliente. Pregúntale a la IA: \"Estos son mis pasos y tiempos. ¿Dónde está el cuello de botella y cuáles son tres formas de arreglarlo: quitar el paso, automatizarlo o pasárselo a otra persona?\"",
            "Arregla primero el cuello de botella. Acelerar cualquier otro paso no ayuda, porque el trabajo se sigue acumulando en el punto estrecho."
          ],
          steps: ["Haz una lista de cada paso, desde el primer contacto hasta el trabajo terminado.", "Escribe cuánto tarda cada paso por cliente y quién lo hace.", "Pídele a la IA que encuentre el cuello de botella y sugiera soluciones.", "Elige quitar, automatizar o delegar.", "Planea una solución para probar el próximo mes."],
          words: [["Cuello de botella", "el paso más lento, que limita cuánto puede hacer todo el negocio."], ["Delegar", "darle una tarea a otra persona para que la haga."]],
          slides: [
            { title: "El punto más estrecho", bullets: ["Limita todo lo demás", "Muchas veces es el tiempo del dueño"] },
            { title: "Encuéntralo", bullets: ["Lista de pasos y tiempo por cliente", "Pregunta a la IA dónde se acumula el trabajo"] },
            { title: "Arréglalo primero", bullets: ["Quitar, automatizar o delegar", "Acelerar otros pasos no ayuda"] }
          ],
          tryIt: "Escribe tus pasos con sus tiempos, pídele a la IA que encuentre el cuello de botella y elige una solución (quitar, automatizar o delegar) para probar este mes.",
          youCanNow: "encontrar el paso que limita tu crecimiento y elegir una solución.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un cuello de botella?", options: ["Tu paso más rápido", "Un tipo de botella", "El paso más lento que limita todo lo demás", "Un cliente nuevo"], answer: 2, why: "El trabajo se acumula en el cuello de botella, así que limita el crecimiento." },
            { objective: "O2", q: "Cada cotización espera a que tú la escribas, y los pedidos se acumulan. ¿Qué arreglo podrías elegir?", options: ["Acelerar la entrega en su lugar", "Aceptar más pedidos", "Dejar de enviar cotizaciones", "Usar una plantilla de cotización o pasarle las cotizaciones a un ayudante capacitado"], answer: 3, why: "Automatizar o pasar a otra persona el paso del cuello de botella libera el flujo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Convertir tu trabajo en sistemas",
          minutes: 5,
          goal: "Documentar dos trabajos clave como sistemas que otra persona (o una herramienta de IA) pueda seguir.",
          text: [
            "Si todo vive en tu cabeza, el negocio no puede crecer más allá de ti. Un sistema es una forma escrita de hacer un trabajo: los pasos, las herramientas, la lista de control y cómo se ve un trabajo \"bien hecho\".",
            "Grábate haciendo un trabajo, o escribe notas rápidas, y pídele a la IA que las convierta en un procedimiento operativo estándar (SOP, por sus siglas en inglés) con una lista de control y un estándar de calidad. Marca qué pasos pueden hacer las herramientas de IA y dónde debe revisar una persona.",
            "Prueba cada sistema pidiendo a otra persona que lo siga mientras tú observas en silencio. Cada pregunta que haga muestra un paso que falta. Guarda todos los sistemas en un solo lugar compartido."
          ],
          steps: ["Elige los dos trabajos que más tiempo te quitan.", "Grábate o toma notas mientras haces cada uno.", "Pídele a la IA que convierta las notas en un SOP con lista de control y estándar de calidad.", "Marca los pasos de IA y las revisiones humanas.", "Pruébalo con otra persona y completa lo que falte."],
          words: [["Sistema", "una forma escrita y repetible de hacer un trabajo."], ["SOP", "procedimiento operativo estándar: los pasos escritos de un trabajo."], ["Estándar de calidad", "una descripción clara de cómo se ve un buen trabajo."]],
          slides: [
            { title: "Sácalo de tu cabeza", bullets: ["Un sistema = pasos, herramientas, lista de control, estándar", "El negocio puede crecer más allá de ti"] },
            { title: "Constrúyelo con IA", bullets: ["Graba o escribe notas rápidas", "La IA las convierte en un SOP", "Marca pasos de IA y revisiones humanas"] },
            { title: "Pruébalo", bullets: ["Otra persona lo sigue", "Cada pregunta = un paso que falta", "Guarda todos los sistemas en un lugar"] }
          ],
          tryIt: "Convierte uno de tus dos trabajos más grandes en un SOP con ayuda de la IA, con una lista de control y un estándar de calidad. Si puedes, pide a alguien que lo pruebe.",
          youCanNow: "convertir lo que sabes en sistemas que otras personas o herramientas de IA pueden seguir.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un estándar de calidad en un procedimiento operativo estándar (SOP)?", options: ["Una descripción clara de cómo se ve un buen resultado", "El precio de la herramienta", "La firma del dueño", "Una lista de clientes"], answer: 0, why: "Un estándar de calidad le dice a la persona qué significa un trabajo bien hecho." },
            { objective: "O3", q: "Un ayudante te sigue llamando con preguntas mientras sigue tu SOP. ¿Qué haces?", options: ["Volver a hacer tú el trabajo", "Agregar al SOP los detalles que faltan y volver a probarlo", "Despedir al ayudante", "Tirar el SOP"], answer: 1, why: "Las preguntas muestran dónde el SOP todavía no está completo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepárate para crecer",
        questions: [
          { objective: "O1", q: "Cada venta pierde un poco de dinero. ¿Qué pasa si escalas?", options: ["La ganancia aparece sola", "Las pérdidas crecen", "No cambia nada", "Los costos desaparecen"], answer: 1, why: "El crecimiento multiplica lo que hace cada venta." },
          { objective: "O1", q: "¿Qué es la ganancia?", options: ["El número de clientes", "Todo el dinero que entra", "Tu precio", "Los ingresos menos los costos"], answer: 3, why: "La ganancia es lo que queda después de los costos." },
          { objective: "O1", q: "La IA dice que tus costos subieron 40%. ¿Qué deberías hacer?", options: ["Revisar tú mismo el cálculo en la hoja", "Creerle y entrar en pánico", "Borrar la hoja de cálculo", "Ignorarlo"], answer: 0, why: "Los cálculos de la IA pueden estar mal; verifícalos." },
          { objective: "O2", q: "¿Qué es un cuello de botella?", options: ["Tu mejor cliente", "Un tipo de botella", "El paso más lento, que limita todo lo demás", "Un canal de marketing"], answer: 2, why: "Es el punto más estrecho de tu proceso." },
          { objective: "O3", q: "¿Cómo sabes que un SOP está completo?", options: ["Lo escribió la IA", "Es muy largo", "Otra persona puede seguirlo sin hacer preguntas", "Tiene un título bonito"], answer: 2, why: "Las preguntas durante la prueba muestran los pasos que faltan." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crece sin romper nada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sumar ayuda: personas y herramientas de IA",
          minutes: 6,
          goal: "Decidir qué ayuda sumar y preparar una descripción del puesto.",
          text: [
            "Algunos trabajos es mejor pasarlos a una herramienta de IA o a una automatización (ordenar, redactar borradores, agendar). Otros necesitan a una persona (criterio, trabajo manual, relación con los clientes). Usa tu cuello de botella y tus sistemas para decidir.",
            "Si contratas a una persona, la IA puede redactar una descripción clara del puesto a partir de tus SOP: tareas, habilidades, horario y rango de pago. Revisa que el lenguaje sea justo e inclusivo y quita todo lo que no tenga que ver con el trabajo.",
            "¿Contratista o empleado? El IRS (la agencia de impuestos de Estados Unidos) mira tres tipos de evidencia: control del comportamiento (¿controlas cómo se hace el trabajo?), control financiero (¿quién controla el pago, los gastos y las herramientas?) y el tipo de relación (contratos, beneficios, trabajo continuo y central). Equivocarte puede costarte impuestos y multas; lee la página del IRS y consulta con un contador o un abogado. Las reglas de cada estado pueden ser más estrictas."
          ],
          steps: ["Haz una lista del trabajo que quieres quitarte de encima.", "Marca cada uno: herramienta de IA, contratista o empleado.", "Pídele a la IA que redacte una descripción del puesto a partir de tus SOP.", "Revisa que el lenguaje sea justo y quita requisitos que no tengan que ver con el trabajo.", "Lee la página del IRS sobre la clasificación de trabajadores y consulta con un contador antes de contratar."],
          words: [["Contratista", "alguien con su propio negocio que hace un trabajo para ti y que, por lo general, decide cómo hacerlo."], ["Empleado", "alguien cuyo trabajo tú controlas; tú retienes y pagas los impuestos de empleo."], ["Descripción del puesto", "un resumen escrito de las tareas, habilidades, horario y pago de un trabajo."]],
          slides: [
            { title: "¿Persona o herramienta de IA?", bullets: ["IA: ordenar, redactar, agendar", "Personas: criterio, trabajo manual, relaciones"] },
            { title: "Descripción del puesto con IA", bullets: ["Redáctala a partir de tus SOP", "Tareas, habilidades, horario, rango de pago", "Revisa que el lenguaje sea justo y relacionado con el trabajo"] },
            { title: "¿Contratista o empleado? (IRS)", bullets: ["Control del comportamiento", "Control financiero", "Tipo de relación", "Consulta a un contador; las reglas estatales pueden ser más estrictas"] }
          ],
          sources: [{ name: "IRS: ¿Contratista independiente (trabajador por cuenta propia) o empleado? (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" }],
          tryIt: "Elige la ayuda que más necesitas. Si es una persona, pídele a la IA que redacte una descripción del puesto a partir de tu SOP y revisa que sea justa; anota si crees que es un puesto de contratista o de empleado y por qué, usando las tres categorías del IRS.",
          youCanNow: "decidir entre herramientas de IA y personas para crecer, y preparar una descripción del puesto justa.",
          quickCheck: [
            { objective: "O4", q: "¿Qué trabajo suele necesitar a una persona en vez de la IA?", options: ["Ordenar correos", "Hacer el borrador de una plantilla", "Crear relaciones con los clientes clave", "Resumir notas"], answer: 2, why: "Las relaciones necesitan el criterio y la confianza de una persona." },
            { objective: "O4", q: "La descripción del puesto que hizo la IA dice \"miembro del equipo joven y con energía\". ¿Qué haces?", options: ["Dejarla así", "Agregar más adjetivos", "Publicarla tal cual", "Cambiarla por palabras justas y relacionadas con el trabajo"], answer: 3, why: "Las descripciones de puestos deben ser justas y tratar sobre el trabajo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ganar clientes paso a paso",
          minutes: 5,
          goal: "Elegir un canal de crecimiento y diseñar una prueba pequeña y medible.",
          text: [
            "Los canales de crecimiento son las formas en que los clientes nuevos te encuentran: recomendaciones, alianzas, búsquedas locales y fichas en mapas, redes sociales, correo electrónico, anuncios pagados, tiendas en línea. La mayoría de los pequeños negocios crecen mejor con uno o dos canales bien trabajados.",
            "Pregúntale a la IA: \"Mi negocio es [tipo] y atiende a [cliente]. Sugiere cinco canales de crecimiento, cómo funcionaría cada uno para mí, cuánto costaría y cómo lo mediría.\" Elige el que encaje con tu cliente y tu presupuesto.",
            "Haz una prueba pequeña de 30 días con una meta clara: \"Pedir recomendaciones a 20 clientes anteriores; meta: 5 contactos nuevos.\" Mide el resultado, compara el costo por cliente nuevo con tus números de la Lección 1 y solo entonces gasta más."
          ],
          steps: ["Pídele a la IA cinco posibles canales de crecimiento con costos y formas de medirlos.", "Elige uno que encaje con tu cliente y tu presupuesto.", "Fija una prueba de 30 días con una meta clara.", "Registra los resultados y el costo por cliente nuevo.", "Decide: ampliarlo, cambiarlo o detenerlo."],
          words: [["Canal de crecimiento", "una forma en que los clientes nuevos te encuentran y te compran."], ["Recomendación", "cuando un cliente le habla de ti a otra persona."], ["Prueba", "un intento pequeño, con tiempo limitado y una meta clara."]],
          slides: [
            { title: "Cómo te encuentran los clientes", bullets: ["Recomendaciones y alianzas", "Búsqueda local, redes sociales, correo", "Anuncios pagados y tiendas en línea"] },
            { title: "Elige uno o dos", bullets: ["Pide a la IA opciones, costos y formas de medir", "Elige lo que encaje con tu cliente y presupuesto"] },
            { title: "Primero prueba en pequeño", bullets: ["30 días, meta clara", "Registra el costo por cliente nuevo", "Ampliar, cambiar o detener"] }
          ],
          tryIt: "Elige un canal de crecimiento con ayuda de la IA y escribe una prueba de 30 días: qué vas a hacer, la meta, cómo lo vas a medir y cuánto es lo máximo que vas a gastar.",
          youCanNow: "elegir un canal de crecimiento y probarlo antes de gastar más.",
          quickCheck: [
            { objective: "O5", q: "¿Qué incluye una buena prueba de crecimiento de 30 días?", options: ["Una meta clara y un límite de gasto", "Gastar lo más posible", "Ninguna forma de medirla", "Todos los canales a la vez"], answer: 0, why: "Una meta y un límite te dicen si el canal funciona sin un gran riesgo." },
            { objective: "O5", q: "Tu prueba trae clientes, pero cada uno cuesta más de lo que vale para ti. ¿Qué haces?", options: ["Gastar más en ella", "Parar o cambiar el canal antes de gastar más", "Ignorar los números", "Bajar tus precios"], answer: 1, why: "Compara el costo por cliente nuevo con lo que vale un cliente antes de hacer crecer un canal." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cuidar la calidad mientras creces",
          minutes: 5,
          goal: "Fijar controles de calidad semanales y un plan para los riesgos de la IA y los datos a medida que creces.",
          text: [
            "El crecimiento muchas veces rompe la calidad: trabajo apurado, respuestas más lentas, borradores de IA que nadie revisa. Elige tres números de calidad para revisar cada semana, como la calificación promedio en reseñas, el tiempo de respuesta y la tasa de trabajos repetidos o reembolsos.",
            "A medida que más trabajo pasa por herramientas de IA, los riesgos también crecen: más datos de clientes en más herramientas, más contenido de IA que sale. Revisa qué herramientas guardan datos de clientes, quién tiene acceso, y que una persona siga revisando todo lo que ven los clientes.",
            "Júntalo todo en un plan de 90 días. Pídele a la IA que te ayude a organizarlo, pero cada número y cada fecha deben ser algo en lo que tú creas. Revísalo cada dos semanas y ajústalo."
          ],
          steps: ["Elige tres números de calidad para seguir cada semana.", "Haz una lista de las herramientas que guardan datos de clientes y de quién puede entrar a ellas.", "Confirma que una persona revise todo lo que ven los clientes.", "Pídele a la IA que organice tu plan de 90 días a partir de tus notas.", "Fija una revisión cada dos semanas."],
          words: [["Control de calidad", "una revisión regular de un número o de una muestra de trabajo para asegurar que se mantengan los estándares."], ["Tasa de reembolsos", "la parte de las ventas en las que tuviste que devolver el dinero."]],
          slides: [
            { title: "Crecer puede romper la calidad", bullets: ["Trabajo apurado, respuestas lentas", "Borradores de IA que nadie revisa"] },
            { title: "Revisa tres números cada semana", bullets: ["Calificación en reseñas", "Tiempo de respuesta", "Tasa de trabajos repetidos o reembolsos"] },
            { title: "Los riesgos de IA y datos también crecen", bullets: ["¿Qué herramientas guardan datos de clientes?", "¿Quién tiene acceso?", "Una persona revisa lo que ven los clientes"] },
            { title: "Tu plan de 90 días", bullets: ["La IA lo organiza; tú pones números reales", "Revísalo cada dos semanas"] }
          ],
          tryIt: "Tarea final: escribe tu plan de crecimiento a 90 días en una página: números clave y metas, la solución al cuello de botella, dos sistemas, la ayuda que vas a sumar, una prueba de crecimiento y tres controles de calidad semanales.",
          youCanNow: "planear y manejar el crecimiento con IA mientras proteges la calidad y los datos de tus clientes.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es un número de calidad semanal?", options: ["Tu color favorito", "El número de seguidores en redes sociales", "La tasa de trabajos repetidos o reembolsos", "El tamaño de la oficina"], answer: 2, why: "Las tasas de trabajos repetidos y de reembolsos muestran si la calidad está bajando." },
            { objective: "O6", q: "Las ventas crecen, pero las quejas se duplicaron este mes. ¿Qué te dice tu plan que hagas?", options: ["Seguir creciendo más rápido", "Ignorarlo hasta el próximo trimestre", "Quitar los controles de calidad", "Encontrar la causa y arreglarla antes de sumar más clientes"], answer: 3, why: "Los controles de calidad existen para que el crecimiento no rompa lo que les encanta a los clientes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crece sin romper nada",
        questions: [
          { objective: "O4", q: "¿Qué trabajo conviene más pasarle a una herramienta de IA?", options: ["Ordenar las solicitudes que llegan", "Ganarte la confianza de tu cliente más grande", "Trabajo manual de reparación", "Decidir a quién contratar"], answer: 0, why: "Ordenar tareas de rutina va bien con la IA; el criterio y las relaciones necesitan personas." },
          { objective: "O4", q: "¿Cuál es una de las tres categorías del IRS para clasificar a un trabajador?", options: ["Tipo de teléfono", "Color favorito", "Años de estudio", "Control del comportamiento"], answer: 3, why: "Las tres son control del comportamiento, control financiero y tipo de relación." },
          { objective: "O5", q: "Antes de gastar más en un canal de crecimiento, deberías:", options: ["Gastar todo tu presupuesto", "Hacer una prueba pequeña y medida", "Copiar a un competidor", "No medir nada"], answer: 1, why: "Las pruebas muestran si funciona antes de invertir." },
          { objective: "O6", q: "¿Cuál es un buen número de calidad para revisar cada semana?", options: ["El tiempo promedio de respuesta a los clientes", "El número de aplicaciones que usas", "El tamaño de tu logotipo", "El largo de tu biografía en redes"], answer: 0, why: "El tiempo de respuesta muestra si el servicio está empeorando." },
          { objective: "O6", q: "A medida que más trabajo pasa por herramientas de IA, deberías:", options: ["Darle todos tus datos a cada herramienta", "Dejar de revisar el trabajo de la IA", "Revisar qué herramientas guardan datos de clientes y quién puede entrar a ellas", "Quitar las revisiones humanas"], answer: 2, why: "Los riesgos de datos y de calidad crecen con el tamaño." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo hacer crecer un negocio impulsado por IA",
    questions: [
      { objective: "O1", q: "Escalar significa:", options: ["Solo subir precios", "Hacer crecer las ventas más rápido que los costos y el esfuerzo", "Trabajar más horas", "Comprar más herramientas"], answer: 1, why: "Esa es la definición que usa el curso." },
      { objective: "O1", q: "Los ingresos son:", options: ["Tu número de clientes", "Lo que queda después de los costos", "Lo que pagas por tus herramientas", "Todo el dinero que entra por ventas"], answer: 3, why: "Los ingresos son el dinero que entra." },
      { objective: "O1", q: "El costo de adquisición de clientes es:", options: ["Un impuesto", "Tu precio", "Tu renta", "Lo que gastas en promedio para conseguir un cliente nuevo"], answer: 3, why: "Esa es la definición." },
      { objective: "O1", q: "Antes de pedirle a la IA que analice tus números, deberías:", options: ["Agregar números de tarjeta", "Quitar los nombres de los clientes", "Agregar contraseñas", "Publicarlos en internet"], answer: 1, why: "No pongas datos privados en herramientas de IA." },
      { objective: "O1", q: "Un negocio está listo para escalar cuando:", options: ["Tiene muchas aplicaciones", "Tiene un logotipo nuevo", "Cada venta deja ganancia y los clientes vuelven o recomiendan", "El dueño trabaja 80 horas"], answer: 2, why: "Las ventas rentables y repetibles pueden crecer." },
      { objective: "O2", q: "En un negocio de servicios, el cuello de botella suele ser:", options: ["El tiempo del dueño", "El color de la camioneta", "La letra del sitio web", "El número de seguidores"], answer: 0, why: "Muchas veces el dueño hace él mismo las cotizaciones, el seguimiento y las revisiones." },
      { objective: "O2", q: "Las tres formas de arreglar un cuello de botella son:", options: ["Subir, bajar o congelar precios", "Ignorar, esconder o retrasar", "Quitar, automatizar o delegar", "Comprar, vender o rentar"], answer: 2, why: "Estas eliminan el límite." },
      { objective: "O2", q: "¿Por qué arreglar primero el cuello de botella?", options: ["Acelerar otros pasos no ayuda mientras el trabajo se acumula ahí", "Es el paso más barato", "Es el más divertido", "Porque lo dice la IA"], answer: 0, why: "El punto más estrecho limita todo el proceso." },
      { objective: "O3", q: "Un sistema es:", options: ["Una marca de computadoras", "Una forma escrita y repetible de hacer un trabajo", "Un canal de ventas", "Un formulario de impuestos"], answer: 1, why: "Esa es la definición." },
      { objective: "O3", q: "Un SOP debe incluir:", options: ["Números de tarjeta de los clientes", "Solo un título", "Tus contraseñas", "Pasos, una lista de control y un estándar de calidad"], answer: 3, why: "Esto hace que el trabajo se pueda repetir y revisar." },
      { objective: "O3", q: "En un SOP marcas los pasos de IA y:", options: ["Dónde debe revisar una persona", "Tus canciones favoritas", "Los precios de la competencia", "Nada más"], answer: 0, why: "Las revisiones humanas mantienen la calidad." },
      { objective: "O4", q: "¿Qué trabajo necesita una persona en lugar de la IA?", options: ["Resumir notas", "Ordenar correos", "Redactar un horario", "Construir relaciones con los clientes"], answer: 3, why: "Las relaciones y el criterio necesitan personas." },
      { objective: "O4", q: "Cuando la IA redacta una descripción del puesto, deberías:", options: ["Agregar límites de edad", "Publicarla sin cambios", "Revisar que el lenguaje sea justo y relacionado con el trabajo", "Quitar el rango de pago"], answer: 2, why: "Un lenguaje justo evita problemas de discriminación." },
      { objective: "O4", q: "Para pedirle al IRS que decida la clasificación de un trabajador, cualquiera de las dos partes puede presentar:", options: ["El formulario 1040-ES", "El formulario SS-8", "Un W-2", "Un plan de negocios"], answer: 1, why: "La página del IRS menciona el formulario SS-8." },
      { objective: "O4", q: "Clasificar mal a un trabajador puede traer:", options: ["Nada", "Publicidad gratis", "Costos más bajos para siempre", "Impuestos y multas"], answer: 3, why: "Una mala clasificación tiene consecuencias fiscales." },
      { objective: "O5", q: "¿Cuál es un canal de crecimiento?", options: ["Tu SOP", "Tu hoja de cálculo", "Las recomendaciones de clientes", "Tu cuello de botella"], answer: 2, why: "Las recomendaciones traen clientes nuevos." },
      { objective: "O5", q: "Una buena prueba de 30 días tiene:", options: ["Una meta clara y un límite de gasto", "Ninguna medida", "Presupuesto ilimitado", "Ninguna fecha de fin"], answer: 0, why: "Las metas y los límites hacen útiles las pruebas." },
      { objective: "O5", q: "Después de una prueba de crecimiento, comparas el costo por cliente nuevo con:", options: ["El logotipo de tu competidor", "Tus números clave, como el valor del cliente", "El clima", "Tu cuenta de teléfono"], answer: 1, why: "Un canal vale la pena si los clientes valen más de lo que cuestan." },
      { objective: "O6", q: "¿Cuál es un número de calidad que debes vigilar al crecer?", options: ["El número de tipos de letra", "La tasa de trabajos repetidos o reembolsos", "La cantidad de plantas en la oficina", "El largo de tu firma de correo"], answer: 1, why: "Los trabajos repetidos y los reembolsos muestran que la calidad baja." },
      { objective: "O6", q: "¿Cada cuánto deberías revisar tu plan de 90 días?", options: ["Cada dos semanas", "Nunca", "Solo una vez al final", "Cada hora"], answer: 0, why: "Las revisiones regulares te permiten ajustar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Números clave",
        objective: "O1",
        notYet: "Menos de cinco números, sin metas, o sin revisar las cuentas de la IA.",
        meets: "Cinco números clave de hoy con metas a 90 días, con las cuentas revisadas.",
        exceeds: "Dice con claridad si cada venta deja ganancia y por qué."
      },
      {
        name: "Arreglo del cuello de botella",
        objective: "O2",
        notYet: "No se nombra un cuello de botella, o el arreglo es vago.",
        meets: "El cuello de botella principal y un arreglo: quitarlo, automatizarlo o pasarlo a otra persona.",
        exceeds: "Muestra los tiempos de los pasos que prueban que es el cuello de botella."
      },
      {
        name: "Sistemas",
        objective: "O3",
        notYet: "Menos de dos sistemas, o faltan pasos o un estándar de calidad.",
        meets: "Dos sistemas con nombre, cada uno con pasos, una lista de verificación y un estándar de calidad.",
        exceeds: "Otra persona probó al menos uno."
      },
      {
        name: "Ayuda y prueba de crecimiento",
        objective: "O5",
        notYet: "Sin el costo de la ayuda, o la prueba de crecimiento no tiene meta ni límite.",
        meets: "La ayuda que se va a sumar con su costo, y una prueba de crecimiento con meta, medida y límite.",
        exceeds: "Anota la clasificación del trabajador con los tipos del IRS y un plan para comparar el costo por cliente nuevo."
      },
      {
        name: "Controles de calidad",
        objective: "O6",
        notYet: "Menos de tres controles, o sin fecha de revisión.",
        meets: "Tres controles de calidad semanales y una revisión cada dos semanas.",
        exceeds: "También incluye un control de qué herramientas de IA guardan datos de clientes."
      }
    ]
  },
  evaluation: {
    results: [
      "Dueños que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que completan el arreglo de su cuello de botella y una prueba de crecimiento en 90 días (encuesta de seguimiento)",
      "Cambio en los ingresos y en la ganancia por venta que reportan los dueños después de 90 días",
      "Dueños que suman ayuda (una persona o una herramienta de IA) con un sistema escrito para seguir"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con una hoja de cálculo y un asistente de IA gratuito",
      "Seis meses de cifras de ventas y costos sin nombres de clientes",
      "Una plantilla de una página para el plan de 90 días",
      "Unos 75 minutos para las lecciones y las comprobaciones, más tiempo con los números propios del dueño"
    ],
    facilitatorNotes: [
      "Pide a los dueños que traigan seis meses de números antes de la primera sesión.",
      "Revisa que se quiten los nombres de los clientes antes de que cualquier dato entre en la IA.",
      "Envía las preguntas sobre clasificación de trabajadores, impuestos y empleo a las páginas del IRS y a un contador o un abogado.",
      "Pide a los dueños que presenten su plan de 90 días en grupos pequeños para recibir comentarios.",
      "Califica el plan con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};
