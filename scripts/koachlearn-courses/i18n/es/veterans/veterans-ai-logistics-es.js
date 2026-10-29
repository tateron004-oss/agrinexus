"use strict";

// Koach Learn course (Spanish translation of veterans-ai-logistics). Shape and translation rules: scripts/koachlearn-courses/README.md.
// US agency names (VA, VETS, TAP) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-logistics-es",
  lang: "es",
  translationOf: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "IA para la logística y las operaciones",
  skills: "Hablar el lenguaje civil de la cadena de suministro, Saber dónde entra la IA en la logística, Armar una hoja de reabastecimiento de inventario, Hacer el borrador de un calendario de entregas con IA, Presentar un plan de operaciones",
  outcome: "armar una hoja sencilla de reabastecimiento de inventario y un calendario de entregas con ayuda de un asistente de IA y una hoja de cálculo gratuita, revisar tú mismo las cuentas y presentar el plan con términos civiles de logística.",
  about: [
    "Si moviste personas, piezas, combustible, comida o vehículos en el servicio militar, ya hiciste logística. Los almacenes, las empresas de transporte, los hospitales y las tiendas en línea civiles necesitan las mismas habilidades, y ahora usan herramientas de IA para planear.",
    "En este curso vas a aprender las palabras civiles para lo que hacías, ver dónde entra la IA en la logística hoy y armar dos herramientas reales: una hoja de reabastecimiento de inventario y un calendario de entregas. Terminarás presentando el plan, igual que se lo presentarías a un comandante, pero con términos civiles.",
    "Cada lección toma unos cinco minutos. Necesitas una hoja de cálculo gratuita (Google Sheets o Microsoft Excel en la web) y un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz una presentación de operaciones de una página para un negocio pequeño inventado (por ejemplo un banco de alimentos o una tienda de refacciones): una hoja de inventario con un punto de reorden para cinco artículos, un calendario de entregas de una semana hecho con IA y revisado por ti, tres riesgos con un plan de respaldo para cada uno, y dos líneas de currículum que describan tu trabajo de logística militar con palabras civiles.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos y militares en transición que movieron personas, repuestos, combustible, comida o vehículos en el servicio y quieren trabajo civil en almacenes, transporte de carga, hospitales, bancos de alimentos o tiendas en línea.",
    startingPoint: "Conocen bien el trabajo de abastecimiento, transporte y mantenimiento, y saben usar un teléfono o una computadora. La mayoría usa términos militares, no ha armado una hoja de reabastecimiento en una hoja de cálculo gratuita y no ha usado la IA para planear calendarios o leer datos.",
    gap: "Los empleadores civiles de logística usan sus propios términos y herramientas de planeación con IA, y necesitan personas que puedan revisar los planes de la IA contra los límites reales. Necesitan hablar el lenguaje civil de la cadena de suministro, armar y revisar una hoja de reabastecimiento y un calendario con ayuda de la IA, y presentar un plan con claridad.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; los pasos de la hoja de cálculo se muestran uno a la vez",
      "Dispositivos: lo mejor es una computadora para las hojas de cálculo; una herramienta gratuita como Google Sheets o Microsoft Excel en línea",
      "Privacidad: solo negocios inventados; ningún nombre de cliente ni dirección de casa en herramientas de IA públicas",
      "Revisión de cuentas: se revisan a mano las fórmulas y los tiempos de la IA, con una calculadora y una app de mapas",
      "Tiempo: lecciones de unos 5 minutos más práctica con la hoja de cálculo"
    ],
    prerequisites: "Ninguno. Algo de práctica con hojas de cálculo ayuda, pero no es obligatoria."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tareas de logística de tu servicio", action: "traducir términos de logística militar a las palabras civiles que usan los empleadores", standard: "con cinco términos traducidos y dos puestos civiles que coinciden" },
    { id: "O2", condition: "Con ejemplos de IA en almacenes y transporte de carga", action: "describir cuatro formas en que se usa la IA en la logística y la decisión que sigue tomando una persona en cada una", standard: "nombrando una cosa que una persona debe revisar en cada una" },
    { id: "O3", condition: "Con el uso diario, el tiempo de entrega y las existencias de seguridad de cinco artículos", action: "armar una hoja de cálculo que calcule cuándo volver a pedir cada artículo", standard: "con una fila revisada a mano en una calculadora" },
    { id: "O4", condition: "Con paradas, horarios, vehículos y choferes", action: "usar un asistente de IA para hacer el borrador de un calendario de entregas de una semana y revisarlo contra los límites reales", standard: "corrigiendo cada problema que encuentres con una app de mapas y los horarios de las paradas" },
    { id: "O5", condition: "Con una tabla pequeña de datos de entregas", action: "usar la IA para encontrar patrones y confirmar tú mismo uno con un filtro de la hoja de cálculo", standard: "y escribir la causa, un arreglo y cómo lo vas a medir" },
    { id: "O6", condition: "Con tu hoja, tu calendario y tus riesgos", action: "presentar un plan de operaciones con términos civiles y escribir dos líneas de currículum sobre tu trabajo de logística", standard: "con la situación, el plan, tres riesgos y un respaldo para cada uno" }
  ],
  chapters: [
    {
      name: "Capítulo 1: De la logística militar a las cadenas de suministro civiles",
      lessons: [
        {
          objectives: ["O1"],
          title: "Hablar el lenguaje civil de la cadena de suministro",
          minutes: 5,
          goal: "Traducir cinco términos de logística militar a las palabras civiles que usan los empleadores.",
          text: [
            "Una cadena de suministro es cada paso que lleva un producto desde donde se fabrica hasta la persona que lo usa. La logística es la parte de planear y mover dentro de esa cadena.",
            "Muchos términos militares tienen un gemelo civil. Un cuarto de suministros o almacén es la gestión de inventario. Un convoy es el transporte o los fletes. El taller de vehículos es el mantenimiento de flota. La planeación de suministros de las clases I a IX es la planeación de la demanda. El último tramo hasta el usuario se llama \"entrega de última milla\".",
            "My Next Move for Veterans (mynextmove.org/vets), del Departamento de Trabajo de EE. UU., te deja escribir tu puesto militar y ver carreras civiles parecidas, como especialista en logística, supervisor de almacén o despachador."
          ],
          steps: ["Haz una lista de cinco tareas de logística que hiciste en el servicio.", "Pregúntale a un asistente de IA: \"Traduce estas tareas de logística militar a términos civiles de cadena de suministro.\"", "Busca tu puesto militar en mynextmove.org/vets.", "Anota los puestos civiles que mejor encajan."],
          words: [["Cadena de suministro", "cada paso desde que se fabrica un producto hasta la persona que lo usa."], ["Inventario", "los artículos que un negocio tiene en existencia."], ["Entrega de última milla", "el viaje final que lleva un artículo al cliente."], ["3PL", "logística de terceros: una empresa contratada para guardar y enviar mercancía de otro negocio."]],
          slides: [
            { title: "Cadena de suministro y logística", bullets: ["Cadena de suministro: cada paso hasta el usuario", "Logística: la parte de planear y mover"] },
            { title: "De militar a civil", bullets: ["Cuarto de suministros = gestión de inventario", "Convoy = transporte o fletes", "Taller de vehículos = mantenimiento de flota", "Planeación de suministros = planeación de la demanda"] },
            { title: "Encuentra empleos que coincidan", bullets: ["mynextmove.org/vets (Departamento de Trabajo)", "Especialista en logística, supervisor de almacén, despachador"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Departamento de Trabajo de EE. UU.)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Escribe cinco tareas de logística de tu servicio. Pídele a un asistente de IA que las traduzca a términos civiles, luego busca tu puesto militar en mynextmove.org/vets y escribe dos puestos que coincidan.",
          youCanNow: "describir tu trabajo de logística militar con las palabras que usan los empleadores civiles.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es una cadena de suministro?", options: ["Solo los camiones que tiene una empresa", "Cada paso desde que se fabrica un producto hasta la persona que lo usa", "La puerta principal de un almacén", "Una lista de teléfonos de proveedores"], answer: 1, why: "La cadena de suministro cubre cada paso desde la producción hasta quien usa el producto." },
            { objective: "O1", q: "Tu currículum dice \"Manejé el motor pool\". ¿Qué palabras civiles usas?", options: ["Dejarlo como \"motor pool\"", "\"Manejé carros\"", "\"Hice cosas de vehículos\"", "\"Administré el mantenimiento de flota\""], answer: 3, why: "Un taller de vehículos militar se parece más al mantenimiento de flota civil." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dónde entra la IA en la logística",
          minutes: 4,
          goal: "Nombrar cuatro formas en que se usa la IA en la logística y las decisiones que siguen tomando las personas.",
          text: [
            "Las empresas usan la IA para prever la demanda (calcular cuánto de un artículo va a necesitar la gente), planear rutas que ahorran combustible y tiempo, detectar envíos atrasados a tiempo y responder preguntas de los clientes sobre las entregas.",
            "La IA solo sabe lo que dicen los datos que le dan. Si los datos son viejos, están mal o faltan, el plan también estará mal. Una tormenta, un camino cerrado o la temporada alta de las fiestas pueden no estar en los datos.",
            "Las personas siguen tomando las decisiones: revisar que el plan tenga sentido, atender las excepciones, mantener seguros a los choferes y trabajadores, y hablar con los clientes. Ese criterio es justo lo que te enseñó la logística militar."
          ],
          words: [["Pronóstico", "un cálculo cuidadoso de lo que va a pasar, como cuántas existencias vas a necesitar."], ["Optimización de rutas", "encontrar el mejor orden y camino para las entregas."], ["Excepción", "algo que no sale según el plan, como un camión atrasado."]],
          slides: [
            { title: "La IA en la logística", bullets: ["Prever la demanda", "Planear rutas", "Detectar envíos atrasados", "Responder preguntas sobre entregas"] },
            { title: "El punto débil de la IA", bullets: ["Solo sabe lo que dicen sus datos", "Datos viejos o incompletos = plan equivocado", "Las tormentas y los caminos cerrados pueden faltar"] },
            { title: "Las personas siguen decidiendo", bullets: ["¿Tiene sentido el plan?", "Atender las excepciones", "La seguridad y los clientes"] }
          ],
          tryIt: "Pregúntale a un asistente de IA: \"¿Cómo usan hoy la IA los almacenes y las empresas de transporte? Da cuatro ejemplos con palabras sencillas.\" Junto a cada uno, escribe algo que una persona todavía tiene que revisar.",
          youCanNow: "explicar dónde ayuda la IA en la logística y dónde todavía se necesita el criterio humano.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es prever la demanda?", options: ["Pedir todo de una vez", "Contar las existencias al final del año", "Un cálculo cuidadoso de cuánto se va a necesitar", "Un reporte del clima para los choferes"], answer: 2, why: "Prever la demanda es calcular cuánto se va a necesitar, y la IA a menudo ayuda a hacerlo." },
            { objective: "O2", q: "Un plan de rutas de la IA manda un camión por un camino que cerraron esta mañana. ¿Quién lo arregla?", options: ["Una persona que sabe del cierre", "La IA se arreglará sola después", "El cliente", "Nadie; se sigue el plan"], answer: 0, why: "La IA solo sabe lo que dicen sus datos, así que las personas atienden las excepciones como los cierres." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Armar una hoja de reabastecimiento de inventario",
          minutes: 6,
          goal: "Armar una hoja de cálculo que muestre cuándo volver a pedir cada artículo.",
          text: [
            "Un punto de reorden es el nivel de existencias que te dice que pidas más antes de que se acabe. Una fórmula sencilla es: uso diario por tiempo de entrega (los días que tarda en llegar un pedido), más existencias de seguridad (un extra para sorpresas).",
            "Ejemplo: un banco de alimentos usa 20 latas de frijoles al día, la entrega tarda 5 días y guarda 40 de más. Punto de reorden = 20 x 5 + 40 = 140. Cuando las existencias bajan a 140, pide más.",
            "Un asistente de IA te puede ayudar a armar las columnas y la fórmula de la hoja de cálculo. Prueba siempre la fórmula a mano en una fila para asegurarte de que esté bien."
          ],
          steps: ["Abre una hoja de Google Sheets o un libro de Excel en blanco.", "Haz columnas: Artículo, En existencia, Uso diario, Tiempo de entrega (días), Existencias de seguridad, Punto de reorden, ¿Pedir ya?", "Pídele a un asistente de IA la fórmula del Punto de reorden y de una columna sí/no de \"¿Pedir ya?\".", "Agrega cinco artículos con números inventados.", "Revisa una fila a mano con una calculadora."],
          words: [["Punto de reorden", "el nivel de existencias que te dice que pidas más."], ["Tiempo de entrega", "cuántos días tarda en llegar un pedido."], ["Existencias de seguridad", "existencias de más que se guardan para sorpresas."], ["Fórmula", "un cálculo que la hoja de cálculo hace por ti."]],
          slides: [
            { title: "Punto de reorden", bullets: ["Uso diario x tiempo de entrega + existencias de seguridad", "Cuando las existencias llegan ahí, pide más"] },
            { title: "Ejemplo: frijoles del banco de alimentos", bullets: ["20 al día x 5 días + 40 de más = 140", "Con 140 latas, haz el pedido"] },
            { title: "Ármala con ayuda de la IA", bullets: ["Pídele a la IA las fórmulas de las columnas", "Agrega cinco artículos", "Revisa una fila a mano"] }
          ],
          tryIt: "Arma la hoja de reabastecimiento con cinco artículos. Pídele a un asistente de IA las fórmulas, luego revisa una fila con una calculadora y arregla lo que esté mal.",
          youCanNow: "armar una hoja de cálculo que muestre cuándo hay que volver a pedir cada artículo.",
          quickCheck: [
            { objective: "O3", q: "¿Qué son las existencias de seguridad?", options: ["Existencias que están rotas", "Existencias vendidas con descuento", "Existencias guardadas bajo llave en una caja fuerte", "Existencias de más que se guardan para sorpresas"], answer: 3, why: "Las existencias de seguridad cubren sorpresas como entregas atrasadas o más demanda." },
            { objective: "O3", q: "Uso diario 5, tiempo de entrega 6 días, existencias de seguridad 10. ¿Cuál es el punto de reorden?", options: ["21", "40", "60", "11"], answer: 1, why: "El uso diario por el tiempo de entrega (5 x 6 = 30) más las existencias de seguridad (10) da 40." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: De la logística militar a las cadenas de suministro civiles",
        questions: [
          { objective: "O1", q: "¿A qué término civil se parece más un convoy militar?", options: ["Nómina", "Mercadotecnia", "Transporte o fletes", "Recursos humanos"], answer: 2, why: "Mover mercancía en vehículos es transporte o fletes." },
          { objective: "O1", q: "¿Qué es la entrega de última milla?", options: ["El viaje final hasta el cliente", "La primera milla de una ruta", "Una carrera a pie", "Una fábrica"], answer: 0, why: "Es el último tramo hasta la persona que usa el artículo." },
          { objective: "O2", q: "¿Por qué un plan de rutas de la IA puede estar mal?", options: ["Los camiones nunca se descomponen", "La IA siempre tiene razón", "Los mapas nunca cambian", "La IA solo sabe lo que dicen sus datos"], answer: 3, why: "Los datos incompletos o viejos llevan a planes equivocados." },
          { objective: "O3", q: "Uso diario 10, tiempo de entrega 4 días, existencias de seguridad 20. ¿Cuál es el punto de reorden?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { objective: "O3", q: "Después de que una IA te escribe una fórmula de hoja de cálculo, deberías:", options: ["No mirarla nunca", "Revisar una fila a mano", "Borrar la hoja", "Compartirla sin revisar"], answer: 1, why: "Una revisión a mano prueba que la fórmula está bien." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear y presentar las operaciones",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hacer el borrador de un calendario de entregas con IA",
          minutes: 5,
          goal: "Usar un asistente de IA para hacer el borrador de un calendario de entregas de una semana y revisarlo contra los límites reales.",
          text: [
            "Un calendario de entregas dice quién va a dónde, cuándo y con qué. La IA puede hacer un borrador rápido si le das los datos: las paradas, los horarios de atención, el número de vehículos y choferes, las horas de los choferes y lo que necesita cada parada.",
            "Luego lo revisas como un plan de convoy. ¿Los tiempos de viaje son realistas en un mapa real? ¿Los choferes tienen descansos? ¿Alguna parada recibe una entrega cuando está cerrada?",
            "Usa solo datos inventados o seguros para el negocio. No pegues nombres de clientes, direcciones de casas ni nada que tu empleador no haya aprobado para herramientas de IA."
          ],
          steps: ["Haz una lista de paradas, horarios, vehículos, choferes y lo que necesita cada parada.", "Pregúntale a un asistente de IA: \"Haz un calendario de entregas de una semana en forma de tabla con estos límites.\"", "Revisa los tiempos de viaje en una app de mapas.", "Revisa los descansos, los horarios de atención y el espacio en los vehículos.", "Arregla el calendario y guárdalo junto a tu hoja de inventario."],
          words: [["Calendario de entregas", "un plan de quién entrega qué, dónde y cuándo."], ["Restricción", "un límite que el plan debe respetar, como los horarios de atención o las horas de los choferes."]],
          slides: [
            { title: "Dale los datos a la IA", bullets: ["Paradas y horarios de atención", "Vehículos y choferes", "Lo que necesita cada parada"] },
            { title: "Revísalo como un plan de convoy", bullets: ["Tiempos de viaje reales en un mapa", "Descansos de los choferes", "Nada de entregas en paradas cerradas"] },
            { title: "Protege los datos", bullets: ["Solo datos inventados o aprobados", "Nada de nombres de clientes ni direcciones de casas"] }
          ],
          tryIt: "Para un banco de alimentos inventado con tres despensas y una camioneta, pídele a un asistente de IA un calendario de entregas de una semana en forma de tabla. Revísalo en una app de mapas y arregla un problema que encuentres.",
          youCanNow: "hacer el borrador de un calendario de entregas con IA y revisarlo contra los límites del mundo real.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es una restricción en un calendario de entregas?", options: ["Un límite que el plan debe respetar, como el horario de atención", "Un bono para los choferes", "Una parada extra", "Un tipo de camión"], answer: 0, why: "Las restricciones son límites, como los horarios, los vehículos y los choferes, que el calendario debe respetar." },
            { objective: "O4", q: "El calendario de la IA dice que un viaje de 40 millas tarda 15 minutos. ¿Qué haces?", options: ["Confiar en él", "Quitar la parada", "Revisar el tiempo en una app de mapas y corregir el calendario", "Decirle al chofer que vaya más rápido"], answer: 2, why: "Revisas los tiempos de viaje de la IA con una app de mapas y corriges lo que no sea realista." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Detectar problemas en los datos de operaciones",
          minutes: 5,
          goal: "Usar la IA para resumir una tabla de datos pequeña y confirmar tú mismo lo que encuentra.",
          text: [
            "Los equipos de operaciones revisan datos todos los días: entregas atrasadas, artículos que se están acabando, mercancía dañada. La IA puede resumir una tabla y señalar patrones, como \"las entregas del martes son las que más se atrasan\".",
            "Trata lo que encuentra la IA como inteligencia: útil, pero confírmalo antes de actuar. Ordena o filtra tú mismo la hoja de cálculo para ver si el patrón es real.",
            "Cuando encuentres un problema real, escribe la causa que crees que tiene, un arreglo y cómo vas a saber que el arreglo funcionó."
          ],
          steps: ["Haz una tabla pequeña: fecha, parada, a tiempo (sí/no), razón si se atrasó.", "Pregúntale a un asistente de IA: \"¿Qué patrones ves en esta tabla?\"", "Ordena o filtra tú mismo la hoja para confirmarlo.", "Escribe: problema, causa probable, arreglo, cómo lo vas a medir."],
          words: [["Patrón", "algo que pasa una y otra vez en los datos."], ["Filtro", "una herramienta de la hoja de cálculo que muestra solo las filas que eliges."]],
          slides: [
            { title: "La IA puede resumir datos", bullets: ["Entregas atrasadas, existencias bajas, daños", "Señala patrones"] },
            { title: "Trátalo como inteligencia", bullets: ["Útil, pero confírmalo antes de actuar", "Ordena o filtra tú mismo la hoja"] },
            { title: "Escribe el arreglo", bullets: ["Problema y causa probable", "El arreglo", "Cómo lo vas a medir"] }
          ],
          tryIt: "Haz una tabla de entregas de 10 filas con algunas entregas atrasadas. Pídele a un asistente de IA que busque patrones, luego filtra tú la hoja para confirmar uno y escribe un arreglo.",
          youCanNow: "usar la IA para encontrar un patrón en los datos de operaciones y confirmarlo antes de actuar.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace un filtro de hoja de cálculo?", options: ["Borra filas para siempre", "Muestra solo las filas que eliges", "Hace los números más grandes", "Envía la hoja por correo"], answer: 1, why: "Un filtro esconde las filas que no necesitas para que revises tú mismo un patrón." },
            { objective: "O5", q: "La IA dice que la mayoría de las entregas atrasadas son de un chofer. ¿Qué haces?", options: ["Decírselo al chofer de inmediato", "Ignorarlo", "Borrar las filas de ese chofer", "Filtrar tú los datos para confirmarlo antes de actuar"], answer: 3, why: "Trata lo que encuentra la IA como inteligencia: útil, pero confírmalo antes de actuar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Presentar el plan y buscar trabajo",
          minutes: 5,
          goal: "Presentar un plan de operaciones con términos civiles y relacionarlo con tu siguiente paso laboral.",
          text: [
            "A los gerentes civiles les gustan las presentaciones cortas, igual que a los comandantes: la situación, el plan, los riesgos y los planes de respaldo, y lo que necesitas de ellos. Usa palabras civiles: \"inventario\", \"calendario de entregas\", \"tasa de entregas a tiempo\".",
            "Convierte tu servicio en líneas de currículum con números, por ejemplo: \"Manejé un inventario de 1,200 artículos con valor de $2 millones y cero pérdidas en la auditoría.\" Usa solo números que puedas respaldar.",
            "Para ayuda con el empleo, el Veterans' Employment and Training Service (VETS, el servicio de empleo y formación para veteranos) del Departamento de Trabajo maneja el Transition Assistance Program y orienta hacia aprendizajes. Si tienes el GI Bill, el beneficio de formación en el trabajo y aprendizajes del VA (el Departamento de Asuntos de Veteranos) puede pagarte una cantidad mensual mientras te formas con un empleador aprobado. Revisa en las páginas oficiales quién califica."
          ],
          steps: ["Escribe la presentación: situación, plan, riesgos, respaldos, lo que necesitas.", "Usa términos civiles en todo momento.", "Escribe dos líneas de currículum con números reales.", "Revisa dol.gov/agencies/vets y la página de formación en el trabajo de va.gov para tus siguientes pasos."],
          words: [["Presentación", "un resumen corto, hablado o escrito, de un plan para quien toma la decisión."], ["Tasa de entregas a tiempo", "la parte de las entregas que llegan cuando se prometió."]],
          slides: [
            { title: "Preséntalo como en el servicio", bullets: ["Situación, plan, riesgos, respaldos", "Lo que necesitas de ellos", "Con palabras civiles"] },
            { title: "Líneas de currículum con números", bullets: ["\"Manejé 1,200 artículos con valor de $2M, cero pérdidas\"", "Solo números que puedas respaldar"] },
            { title: "Ayuda oficial", bullets: ["VETS del Departamento de Trabajo: TAP y aprendizajes", "Formación en el trabajo del VA (GI Bill)", "Revisa quién califica en las páginas oficiales"] }
          ],
          sources: [
            { name: "Departamento de Trabajo de EE. UU.: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA: formación en el trabajo y aprendizajes", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Tarea final: junta tu hoja de reabastecimiento, tu calendario de entregas revisado, tres riesgos con respaldos y dos líneas de currículum en una presentación de operaciones de una página.",
          youCanNow: "planear el inventario y las entregas con ayuda de la IA, revisar tú mismo el plan y presentarlo con términos civiles.",
          quickCheck: [
            { objective: "O6", q: "¿Qué va en una buena presentación de operaciones?", options: ["Solo las buenas noticias", "Una larga historia de tu carrera", "La situación, el plan, los riesgos y los respaldos", "Cada fila de tu hoja de cálculo"], answer: 2, why: "Una presentación da la situación, el plan y los riesgos con sus respaldos, de forma corta y clara." },
            { objective: "O6", q: "¿Qué línea de currículum describe mejor el trabajo de logística militar para un empleador civil?", options: ["\"Manejé 800 artículos con valor de $1M y cero pérdidas en la auditoría.\"", "\"Fui NCOIC del taller S4.\"", "\"Hice abastecimiento.\"", "\"Manejé CL IX.\""], answer: 0, why: "Usa palabras civiles, un tamaño y un resultado." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear y presentar las operaciones",
        questions: [
          { objective: "O4", q: "¿Qué debes darle a la IA para que haga el borrador de un calendario de entregas?", options: ["Tus datos de acceso al banco", "Solo la palabra \"calendario\"", "Las direcciones de las casas de los clientes", "Paradas, horarios, vehículos, choferes y necesidades"], answer: 3, why: "Los límites reales le permiten a la IA hacer un plan que sirva." },
          { objective: "O4", q: "El calendario de la IA manda una camioneta a una parada cuando está cerrada. Deberías:", options: ["Arreglar el calendario", "Dejarlo así", "Despedir al chofer", "Cerrar el negocio"], answer: 0, why: "Revisar contra los límites es tu trabajo." },
          { objective: "O5", q: "La IA dice que los martes son los que más se atrasan. ¿Qué sigue?", options: ["Ignorarlo", "Cancelar los martes", "Filtrar tú mismo los datos para confirmarlo", "Publicarlo en internet"], answer: 2, why: "Confirma antes de actuar, como cuando revisas inteligencia." },
          { objective: "O6", q: "Una buena presentación de operaciones incluye:", options: ["Ningún plan", "Solo chistes", "Solo códigos militares", "Situación, plan, riesgos y respaldos"], answer: 3, why: "Eso es lo que necesita quien toma las decisiones." },
          { objective: "O6", q: "¿Qué beneficio del VA puede pagarte una cantidad mensual mientras te formas con un empleador aprobado?", options: ["Seguro de vida", "Préstamo para vivienda", "Formación en el trabajo y aprendizajes", "Beneficio de entierro"], answer: 2, why: "va.gov describe un pago mensual durante la formación en el trabajo o el aprendizaje aprobados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la logística y las operaciones",
    questions: [
      { objective: "O1", q: "Una cadena de suministro es:", options: ["Una cadena en un camión", "Cada paso desde que se fabrica un producto hasta la persona que lo usa", "Un tipo de contrato", "La puerta de un almacén"], answer: 1, why: "Cubre todo el camino hasta el usuario." },
      { objective: "O1", q: "¿A qué se parece más un taller de vehículos militar?", options: ["Mantenimiento de flota", "Contabilidad", "Mercadotecnia", "Asuntos legales"], answer: 0, why: "Los dos dan mantenimiento a los vehículos." },
      { objective: "O1", q: "¿Qué es una 3PL?", options: ["Un rango militar", "Un tipo de camión", "Una empresa contratada para guardar y enviar mercancía de otro negocio", "Una hoja de cálculo"], answer: 2, why: "Las empresas de logística de terceros se encargan del almacenamiento y los envíos." },
      { objective: "O1", q: "¿Qué sitio gratuito relaciona puestos militares con carreras civiles?", options: ["My Next Move for Veterans", "Una app de música", "Un sitio de compras", "Un juego"], answer: 0, why: "mynextmove.org/vets se administra para el Departamento de Trabajo." },
      { objective: "O2", q: "Prever la demanda significa:", options: ["Contratar choferes", "Entregar más rápido", "Pintar camiones", "Hacer un cálculo cuidadoso de cuánto se va a necesitar"], answer: 3, why: "Un pronóstico estima la necesidad futura." },
      { objective: "O2", q: "¿Qué podría pasar por alto un planificador de rutas con IA?", options: ["El número de paradas que le diste", "Un camino que cerraron esta mañana", "El mapa", "La palabra \"ruta\""], answer: 1, why: "Los hechos nuevos pueden no estar en sus datos." },
      { objective: "O2", q: "¿Quién atiende las excepciones, como un camión atrasado?", options: ["Nadie", "Las personas", "Solo la IA", "El cliente"], answer: 1, why: "El criterio humano atiende las excepciones." },
      { objective: "O3", q: "El tiempo de entrega es:", options: ["Las horas que abre una tienda", "El tiempo que un chofer dirige un convoy", "La hora de la comida", "Los días que tarda en llegar un pedido"], answer: 3, why: "El tiempo de entrega es la espera de un pedido." },
      { objective: "O3", q: "Las existencias de seguridad son:", options: ["Existencias de más que se guardan para sorpresas", "Existencias bajo llave", "Mercancía dañada", "Existencias vendidas hoy"], answer: 0, why: "Cubren la demanda o los retrasos inesperados." },
      { objective: "O3", q: "Uso diario 20, tiempo de entrega 5, existencias de seguridad 40. ¿Punto de reorden?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { objective: "O3", q: "¿Cómo sabes que una fórmula escrita por la IA está bien?", options: ["Borrándola", "Confiando en ella", "Preguntándole solo a otra IA", "Revisando una fila a mano"], answer: 3, why: "Una revisión a mano confirma las cuentas." },
      { objective: "O4", q: "Una restricción en un calendario es:", options: ["Una entrega", "Un tipo de camión", "Un límite que el plan debe respetar", "Un cliente"], answer: 2, why: "Los horarios de atención y las horas de los choferes son restricciones." },
      { objective: "O4", q: "¿Cómo revisas los tiempos de viaje de la IA?", options: ["Adivinando", "Comparándolos con una app de mapas", "Pidiéndole al chofer que se apure", "Ignorándolos"], answer: 1, why: "Una app de mapas da tiempos realistas." },
      { objective: "O4", q: "¿Qué NO debe ir en una herramienta de IA pública?", options: ["Nombres de clientes y direcciones de casas", "Paradas inventadas", "Horarios de una tienda inventada", "El número de camionetas"], answer: 0, why: "Los datos de los clientes son privados." },
      { objective: "O5", q: "Lo que encuentra la IA en los datos debe tratarse como:", options: ["Chistes", "Órdenes que debes cumplir", "Inteligencia: útil pero confírmala antes de actuar", "La verdad final"], answer: 2, why: "Confirmar evita actuar sobre un error." },
      { objective: "O5", q: "Un filtro de hoja de cálculo te permite:", options: ["Mostrar solo las filas que eliges", "Borrar la hoja", "Imprimir más rápido", "Cambiar las fuentes"], answer: 0, why: "Los filtros te ayudan a revisar patrones." },
      { objective: "O5", q: "Después de encontrar un problema real, escribe:", options: ["Una contraseña nueva", "Solo a quién culpar", "Nada", "La causa, un arreglo y cómo lo vas a medir"], answer: 3, why: "Un arreglo medido prueba que funcionó." },
      { objective: "O5", q: "La tasa de entregas a tiempo significa:", options: ["La velocidad del chofer", "La parte de las entregas que llegan cuando se prometió", "El costo del combustible", "El número de camiones"], answer: 1, why: "Mide las promesas cumplidas." },
      { objective: "O6", q: "¿Qué línea de currículum es más fuerte?", options: ["\"Hice cosas de suministros.\"", "\"Manejé 1,200 artículos con valor de $2M y cero pérdidas en la auditoría.\"", "\"Trabajé duro.\"", "\"Ejército.\""], answer: 1, why: "Los números y los resultados muestran tu impacto." },
      { objective: "O6", q: "La agencia del Departamento de Trabajo que maneja los programas de empleo para veteranos, incluido TAP, es:", options: ["EPA", "IRS", "FAA", "VETS"], answer: 3, why: "El Veterans' Employment and Training Service maneja TAP para el Departamento de Trabajo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      5,
      9,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Hoja de reabastecimiento",
        objective: "O3",
        notYet: "Menos de cinco artículos, o los puntos de reorden están mal.",
        meets: "Cinco artículos con los puntos de reorden correctos y una fila revisada a mano.",
        exceeds: "La hoja marca los artículos que están en el punto de reorden o por debajo."
      },
      {
        name: "Calendario de entregas revisado",
        objective: "O4",
        notYet: "Se usó el calendario de la IA sin revisarlo, o rompe un límite.",
        meets: "Un calendario de una semana que respeta los horarios de las paradas, los vehículos y los choferes, con los tiempos de viaje revisados en una app de mapas.",
        exceeds: "Nombra el problema que encontró y cómo lo corrigió."
      },
      {
        name: "Riesgos y respaldos",
        objective: "O6",
        notYet: "Menos de tres riesgos, o riesgos sin respaldo.",
        meets: "Tres riesgos, cada uno con un plan de respaldo.",
        exceeds: "Cada respaldo dice quién actúa y cuándo."
      },
      {
        name: "Líneas de currículum civiles",
        objective: "O1",
        notYet: "Las líneas usan términos militares o no tienen resultado.",
        meets: "Dos líneas con palabras civiles de logística, con un tamaño o un resultado.",
        exceeds: "Las líneas coinciden con un puesto civil de My Next Move for Veterans."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se postulan a un empleo civil de logística, almacén o transporte dentro de 30 días (encuesta de seguimiento)",
      "Personas que consiguen un empleo de logística, un aprendizaje o un lugar de formación en el trabajo dentro de 90 días",
      "Bancos de alimentos o negocios pequeños aliados que usan la hoja de reabastecimiento o el calendario de una persona del curso"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Una hoja de cálculo gratuita: Google Sheets o Microsoft Excel en línea",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini, y una app de mapas",
      "Una calculadora",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Da a todas las personas el mismo banco de alimentos o la misma tienda de refacciones inventada para que puedan comparar hojas y calendarios.",
      "Haz en el pizarrón el cálculo de un punto de reorden antes de que armen sus hojas.",
      "Usa solo paradas y datos inventados; nunca pongas nombres reales de clientes ni direcciones de casas en una IA pública.",
      "Pide que presenten su plan en voz alta en dos minutos, como lo harían ante un gerente civil.",
      "Califica la presentación de operaciones con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
