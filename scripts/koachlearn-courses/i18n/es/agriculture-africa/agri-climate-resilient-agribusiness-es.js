"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-climate-resilient-agribusiness.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_CSA = { name: "FAO: Libro de consulta sobre la agricultura climáticamente inteligente", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR: Maíz climáticamente inteligente (tolerante a la sequía)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Central Bank of Kenya, Banco Central de Kenia (listas de bancos y bancos de microfinanzas con licencia)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria, Banco Central de Nigeria (instituciones con licencia y protección al consumidor)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Bank of Agriculture, banco agrícola de Nigeria", url: "https://www.boanig.com" };
const ADB_GH = { name: "Agricultural Development Bank, banco de desarrollo agrícola de Ghana", url: "https://agricbank.com" };
const GCF = { name: "Green Climate Fund, Fondo Verde para el Clima (trabaja con gobiernos, bancos y agencias acreditadas, no directamente con los agricultores)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Insurance Regulatory Authority, autoridad reguladora de seguros de Kenia (comprueba que una aseguradora tenga licencia)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos: ficha del Africa Biogas Partnership Programme (biodigestores familiares y bioabono líquido)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO: Agroforestería", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Kenia: The Climate Change (Carbon Markets) Regulations, 2024, reglamento de mercados de carbono (resumen y texto completo)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Registro de Verra (busca un proyecto de carbono por nombre o ID)", url: "https://registry.verra.org" };
const GOLD = { name: "Registro de Gold Standard (busca un proyecto de carbono por nombre o ID)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness-es",
  lang: "es",
  translationOf: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Agronegocio resiliente al clima",
  skills: "Evaluar el riesgo climático en dinero, Calcular el costo de las inversiones de adaptación, Encontrar y revisar financiamiento climático, Reducir costos y emisiones a la vez, Detectar estafas de créditos de carbono, Escribir un plan de resiliencia climática",
  outcome: "escribir un plan de resiliencia climática de una página para el negocio de tu finca: los riesgos climáticos que más te cuestan, las inversiones de adaptación que harás y lo que cuestan, cómo las pagarás, qué prácticas para ahorrar dinero agregarás y cómo juzgarás cualquier oferta de créditos de carbono.",
  about: [
    "Este curso es para pequeños productores y agricultores comerciales en crecimiento, jóvenes emprendedores agrícolas, líderes de grupos de productores y extensionistas de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil y toda África que ya ven el cambio climático en sus fincas y quieren tratarlo como un problema de negocio, con un plan de negocio.",
    "El capítulo 1 pone el riesgo climático en dinero: evalúas los riesgos para el negocio de tu finca, eliges y calculas el costo de inversiones de adaptación como semilla tolerante a la sequía, almacenamiento de agua, sombra y nuevas actividades, y conoces los tipos de financiamiento climático y préstamos verdes y cómo revisarlos. El capítulo 2 trata de las prácticas que reducen emisiones y costos al mismo tiempo, los programas de créditos de carbono y cómo evitar estafas y contratos injustos, y cómo agregar todo esto a tu plan de negocio.",
    "El curso \"Agricultura climáticamente inteligente\" trata los pronósticos estacionales y el calendario de riesgos climáticos; tómalo primero si puedes. Todas las cifras de dinero aquí son ejemplos inventados: usa tus propios precios locales. Este curso explica cómo funcionan el financiamiento y los contratos; no te dice en qué invertir. Lee todo contrato completo y habla con un asesor de confianza antes de firmar. Cada lección dura unos cinco minutos y termina con una tarea para tu propia finca."
  ],
  finalTask: "Escribe un plan de resiliencia climática de una página para el negocio de tu finca (o una finca de ejemplo, como 3 acres de maíz y frijol con 6 cabras lecheras en Makueni, 4 hectáreas de cacao en la Región Occidental de Ghana, o 2 hectáreas de arroz y maní cerca de Kaolack, Senegal): tus tres principales riesgos climáticos con un costo estimado para cada uno; dos o tres inversiones de adaptación con su costo, su beneficio anual y su periodo de recuperación; cómo pagarás (ahorros, grupo, préstamo, subvención) con las preguntas que le harás al prestamista; al menos dos prácticas que reducen costos y emisiones; tus reglas para juzgar cualquier oferta de créditos de carbono; y la fecha en que revisarás el plan.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes emprendedores agrícolas y extensionistas de toda África (Kenia, Nigeria, Ghana y África Occidental francófona). Muchos tienen fincas mixtas de cultivos y animales y venden parte de lo que producen. Algunos llevan registros sencillos; muchos no.",
    startingPoint: "Pueden nombrar los cambios del clima que ven (lluvias tardías, periodos secos, calor, inundaciones) y muchos conocen algunas prácticas climáticamente inteligentes. Pocos le ponen un valor en dinero al riesgo climático, comparan inversiones de adaptación por su periodo de recuperación o saben revisar un préstamo verde o un contrato de créditos de carbono.",
    gap: "Los golpes del clima afectan los ingresos y el pago de los préstamos, pero muchos agricultores gastan en adaptación sin calcular el costo, piden prestado sin comparar el costo total o firman contratos de carbono que no entienden. Los participantes necesitan planear la resiliencia climática como una decisión de negocio, protegerse de las estafas y presentar un plan creíble a prestamistas, compradores y programas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes usan el inglés como segunda lengua y el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono básico o inteligente, papel y una calculadora; internet puede ser lento o caro",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre las tareas de la finca",
      "Dinero: todas las cifras son ejemplos; no se dan precios, tasas de interés ni subsidios como hechos",
      "Seguridad financiera: ningún consejo de inversión; los participantes nunca comparten PIN, documentos de identidad ni números de cuenta en las tareas de práctica"
    ],
    prerequisites: "Ayudan los registros sencillos de la finca y el margen bruto (\"Agronegocio y gestión de la finca\"). Se recomienda tomar primero \"Agricultura climáticamente inteligente\" (pronósticos y calendario de riesgos climáticos)."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con las actividades de tu finca y lo que pasó en las últimas cinco temporadas", action: "calificar los principales riesgos climáticos para el negocio de tu finca según lo probables que son y cuánto dinero podrían costar", standard: "anotando al menos tres riesgos, cada uno con un costo estimado en moneda local" },
    { id: "O2", condition: "Con dos o tres posibles inversiones de adaptación", action: "calcular el costo de cada inversión y comparar su beneficio anual con su costo", standard: "usando tus propios precios locales y mostrando la recuperación en temporadas o años" },
    { id: "O3", condition: "Antes de solicitar un préstamo, una subvención o un programa climático o verde", action: "anotar las preguntas que le harás al prestamista y comprobar que tiene licencia", standard: "cubriendo el costo total, las fechas de pago, las condiciones y quién lo regula" },
    { id: "O4", condition: "Con las prácticas que usas hoy", action: "identificar dos prácticas que reducen las emisiones de gases de efecto invernadero y también tus costos", standard: "nombrando el insumo o el dinero que ahorra cada una" },
    { id: "O5", condition: "Ante una oferta o un contrato de créditos de carbono", action: "revisar la oferta en busca de señales de estafa o de un trato injusto", standard: "respondiendo al menos cuatro preguntas de control antes de firmar o pagar algo" },
    { id: "O6", condition: "Con tu trabajo de este curso", action: "escribir un plan de resiliencia climática de una página para el negocio de tu finca", standard: "con riesgos, inversiones, costos, financiamiento, prácticas de ahorro y una fecha de revisión" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El riesgo climático es un riesgo de negocio",
      lessons: [
        {
          title: "Una evaluación de riesgos climáticos para el negocio de tu finca",
          objectives: ["O1"],
          minutes: 5,
          goal: "Calificar los riesgos climáticos para el negocio de tu finca según su probabilidad y su impacto en dinero.",
          text: [
            "Un calendario de riesgos climáticos muestra cuándo el clima daña tu finca. Una evaluación de riesgos climáticos va un paso más allá: pregunta cuánto podría costarle cada riesgo a tu negocio, para que sepas en cuáles gastar dinero primero.",
            "Para cada actividad (maíz, tomate, cabras, cacao, tilapia), anota los peligros climáticos: un inicio tardío de las lluvias, un periodo seco en la floración, estrés por calor en los animales, inundaciones, vientos fuertes, plagas nuevas. Hazte dos preguntas sobre cada uno: ¿qué tan probable es en las próximas cinco temporadas (baja, media o alta)? Y si pasa, ¿cuánto ingreso perderías? Usa tus registros y pregunta a los agricultores mayores qué pasó en los malos años.",
            "Luego piensa en todo el negocio, no solo en el campo: ¿puedes pagar un préstamo en un mal año? ¿Los compradores seguirán aceptando tu producto si baja la calidad? ¿Los trabajadores pueden llegar a la finca con inundaciones? Un periodo seco que baja el maíz de 40 costales a 25 no es solo un problema de rendimiento; es un problema de flujo de caja.",
            "Pon los riesgos en una tabla sencilla y ordénalos. Los riesgos que son probables y costosos a la vez van arriba en tu plan."
          ],
          steps: ["Anota tus actividades.", "Debajo de cada una, anota los peligros climáticos según tu experiencia y tu calendario de riesgos.", "Marca la probabilidad de cada peligro: baja, media o alta.", "Estima el dinero que perderías si pasa, en tu moneda.", "Ordena: primero los riesgos probables y costosos.", "Agrega los efectos en el negocio: pago de préstamos, contratos con compradores, mano de obra, transporte."],
          words: [["Evaluación de riesgos climáticos", "una lista de los peligros climáticos que enfrenta tu negocio, qué tan probable es cada uno y cuánto podría costar."], ["Peligro", "un evento que puede causar daño, como sequía, inundación o calor."], ["Probabilidad", "qué tan posible es que algo pase."], ["Impacto", "cuánto daño o pérdida de dinero causa un evento."]],
          slides: [
            { title: "Del calendario al costo", bullets: ["Calendario: cuándo daña el clima", "Evaluación: cuánto le cuesta a tu negocio", "Gasta primero en los riesgos más grandes"] },
            { title: "Dos preguntas por peligro", bullets: ["¿Qué tan probable en las próximas cinco temporadas?", "¿Cuánto ingreso pierdes si pasa?", "Usa registros y la memoria de los agricultores mayores"] },
            { title: "Piensa más allá del campo", bullets: ["Pago de préstamos en un mal año", "Contratos con compradores y calidad", "Mano de obra, transporte, almacenamiento"] },
            { title: "Ordena los riesgos", bullets: ["Probable + costoso = arriba en el plan", "Ejemplo: un periodo seco baja 40 costales a 25", "También es un problema de flujo de caja"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Haz una tabla con cuatro columnas: peligro, probabilidad (baja, media, alta), dinero perdido estimado y efecto en el negocio. Llena al menos tres peligros de tu propia finca y encierra en un círculo el más importante.",
          youCanNow: "calificar los riesgos climáticos para el negocio de tu finca según lo probables que son y cuánto podrían costar.",
          quickCheck: [
            { objective: "O1", q: "¿Qué riesgo va arriba en el plan de riesgos climáticos de una finca?", options: ["Uno poco probable y barato", "Uno probable que costaría mucho", "Uno que solo afecta al vecino", "Uno que pasó una vez hace 40 años"], answer: 1, why: "Los riesgos probables y costosos a la vez son los que más dañan el negocio, así que van primero." },
            { objective: "O1", q: "Un periodo seco baja la cosecha de maíz de una agricultora y no puede pagar su préstamo a tiempo. ¿Qué muestra esto?", options: ["El riesgo climático solo afecta el rendimiento", "El clima nunca afecta los préstamos", "El riesgo climático también golpea el flujo de caja y los pagos", "La agricultora debería dejar de llevar registros"], answer: 2, why: "Una evaluación de riesgos climáticos mira todo el negocio, incluidos el flujo de caja y las deudas." }
          ]
        },
        {
          title: "Elegir y calcular el costo de las inversiones de adaptación",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular el costo de dos inversiones de adaptación y comparar su recuperación.",
          text: [
            "Una inversión de adaptación es dinero o trabajo que gastas ahora para perder menos en los malos años. Las más comunes en África son la semilla tolerante a la sequía o de ciclo corto (centros del CGIAR, la red internacional de investigación agrícola, como el CIMMYT han desarrollado maíz tolerante a la sequía), el almacenamiento de agua (tanques, estanques con forro), árboles de sombra para cacao, café o animales, mejores corrales y la diversificación: agregar un segundo cultivo, cabras, aves o peces para que una mala temporada no te arruine.",
            "Para cada opción, anota el costo (compra, construcción, mano de obra, mantenimiento) y el beneficio anual (cosecha extra en un mal año, menos alimento comprado, un ingreso nuevo). Luego calcula la recuperación: el costo dividido entre el beneficio anual da más o menos cuántos años tarda en pagarse sola. Recuerda que algunos beneficios solo llegan en los malos años, así que promédialos en varias temporadas.",
            "Ejemplo con cifras inventadas: un agricultor de Machakos compara un tanque de agua de KES 60,000 que ahorra unos KES 20,000 al año en agua comprada y hortalizas perdidas (recuperación de unos 3 años), con semilla tolerante a la sequía que cuesta KES 2,000 más por acre y ahorra unos KES 8,000 en un año seco que llega un año de cada dos (promedio de KES 4,000 al año, recuperación en la primera temporada). Puede que valga la pena hacer las dos; la semilla es más barata para empezar.",
            "Revisa también: ¿puedes darle mantenimiento? ¿Se ajusta a tu mano de obra y a tu tierra? ¿Funciona también en un buen año? Pregunta a tu extensionista qué variedades y diseños sirven en tu zona."
          ],
          steps: ["Elige tu riesgo principal de la lección 1.", "Anota dos o tres inversiones que lo reducen.", "Escribe el costo completo de cada una: compra, construcción, mano de obra, mantenimiento.", "Estima el beneficio anual, promediado entre años buenos y malos.", "Recuperación = costo ÷ beneficio anual.", "Revisa la mano de obra, el mantenimiento y si se ajusta, con consejo del extensionista."],
          words: [["Inversión de adaptación", "dinero o trabajo que gastas ahora para perder menos cuando el clima golpea."], ["Recuperación", "el tiempo que tarda el dinero que ahorra o gana una inversión en cubrir su costo."], ["Diversificación", "tener más de una fuente de ingresos para que un fracaso no arruine el negocio."]],
          slides: [
            { title: "Inversiones de adaptación comunes", bullets: ["Semilla tolerante a la sequía o de ciclo corto", "Almacenar agua: tanques, estanques con forro", "Árboles de sombra, mejores corrales", "Actividades nuevas: cabras, aves, peces"] },
            { title: "Costo y beneficio", bullets: ["Costo: compra, construcción, mano de obra, mantenimiento", "Beneficio: pérdidas evitadas, ingresos nuevos", "Promedia los beneficios de los malos años"] },
            { title: "Recuperación (ejemplo inventado en KES)", bullets: ["Tanque 60,000 ÷ 20,000 al año = unos 3 años", "Semilla +2,000 por acre ÷ 4,000 al año = primera temporada", "Usa tus propios precios locales"] },
            { title: "Antes de elegir", bullets: ["¿Puedes darle mantenimiento?", "¿Se ajusta a tu tierra y tu mano de obra?", "Pregunta al extensionista qué sirve en tu zona"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "Para tu riesgo principal, calcula el costo de dos inversiones de adaptación con tus propios precios locales. Escribe el costo, el beneficio anual promedio y la recuperación de cada una; luego encierra en un círculo la que harías primero y di por qué.",
          youCanNow: "calcular el costo de las inversiones de adaptación y compararlas por su recuperación.",
          quickCheck: [
            { objective: "O2", q: "Una malla de sombra cuesta GHS 3,000 y ahorra unos GHS 1,000 al año en tomates perdidos. ¿Cuál es la recuperación aproximada?", options: ["3 meses", "1 año", "10 años", "Unos 3 años"], answer: 3, why: "La recuperación es el costo dividido entre el beneficio anual: 3,000 ÷ 1,000 = unos 3 años (cifras de ejemplo)." },
            { objective: "O2", q: "La semilla tolerante a la sequía solo ayuda en los años secos, que llegan más o menos un año de cada tres. ¿Cómo cuentas su beneficio?", options: ["Promediando el ahorro del año seco entre todos los años", "Contando el ahorro del año seco todos los años", "Sin contar ningún beneficio", "Contándolo solo en los años lluviosos"], answer: 0, why: "Los beneficios que solo llegan en los malos años se promedian entre años buenos y malos." }
          ]
        },
        {
          title: "Financiamiento climático y préstamos verdes",
          objectives: ["O3"],
          minutes: 5,
          goal: "Anotar las preguntas que harás antes de tomar un préstamo climático o verde y comprobar que el prestamista tiene licencia.",
          text: [
            "El financiamiento climático es dinero destinado a adaptarse al cambio climático o a reducir emisiones. Los grandes fondos, como el Green Climate Fund (Fondo Verde para el Clima), no prestan directamente a los agricultores; trabajan con gobiernos, bancos y agencias. Lo que llega a los agricultores suele venir como: préstamos verdes o climáticos de bancos, bancos de microfinanzas y SACCO (para tanques, bombas solares, kits de riego por goteo, biogás); planes de pago por uso de los proveedores de equipos; programas del gobierno o de ONG que comparten el costo de semilla, tanques o árboles; y subvenciones o fondos de contrapartida para grupos y cooperativas.",
            "Dónde preguntar: tu banco o SACCO, tu cooperativa, la oficina de agricultura de tu condado o estado y tu extensionista, y los bancos agrícolas como el Bank of Agriculture en Nigeria o el Agricultural Development Bank en Ghana. Los programas cambian a menudo, así que pregunta qué está abierto ahora y pide los detalles por escrito.",
            "Una etiqueta verde no hace que un préstamo sea barato ni seguro. Compara el costo total (intereses, comisiones, seguro), cuándo caen los pagos (¿coinciden con tu cosecha?), qué pasa si la cosecha fracasa y cualquier condición (proveedores aprobados, capacitación, seguro). Comprueba que el prestamista tenga licencia: en Kenia en las listas del Central Bank of Kenya, en Nigeria con el Central Bank of Nigeria, y en otros países con tu banco central o el regulador de cooperativas.",
            "Nunca pagues una \"comisión de trámite\" a un agente para conseguir una subvención o un préstamo, y nunca compartas tu PIN ni tu código de dinero móvil."
          ],
          steps: ["Decide qué comprará el dinero y su recuperación (lección 2).", "Pregunta a tu banco, SACCO, cooperativa y oficina de agricultura qué está abierto ahora.", "Pide por escrito el costo total, las fechas de pago y las condiciones.", "Busca al prestamista en la lista del banco central o del regulador.", "Pregunta: ¿qué pasa si mi cosecha fracasa?", "Habla con un asesor de confianza antes de firmar."],
          words: [["Financiamiento climático", "dinero para adaptarse al cambio climático o reducir emisiones."], ["Préstamo verde", "un préstamo para algo que ayuda al medio ambiente, como una bomba solar o un biodigestor."], ["SACCO", "una cooperativa de ahorro y crédito que pertenece a sus socios."], ["Pago por uso", "pagar un equipo en cantidades pequeñas y regulares, a menudo con dinero móvil."]],
          slides: [
            { title: "Cómo llega el dinero climático al agricultor", bullets: ["Préstamos verdes: bancos, microfinanzas, SACCO", "Planes de pago por uso para equipos", "Programas de costo compartido y subvenciones a grupos"] },
            { title: "Dónde preguntar", bullets: ["Tu banco, SACCO o cooperativa", "Oficina de agricultura y extensionista", "Bancos agrícolas, p. ej. Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Verde no quiere decir barato", bullets: ["Costo total: intereses + comisiones + seguro", "¿Los pagos coinciden con tu cosecha?", "¿Y si la cosecha fracasa?"] },
            { title: "Protégete", bullets: ["¿Prestamista con licencia? Revisa las listas del banco central", "Nunca pagues a un agente una \"comisión de trámite\"", "Nunca compartas tu PIN ni tu código"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Escribe cinco preguntas que le harás a un prestamista o programa sobre la inversión que elegiste en la lección 2. Incluye el costo total, las fechas de pago, las condiciones, qué pasa si la cosecha fracasa y cómo comprobarás que tienen licencia.",
          youCanNow: "anotar las preguntas que debes hacer sobre un préstamo climático o verde y comprobar que el prestamista tiene licencia.",
          quickCheck: [
            { objective: "O3", q: "Un agente dice que recibirás una subvención climática si primero envías KES 3,000 como comisión de trámite. ¿Qué debes hacer?", options: ["Pagar rápido antes de que cierre la subvención", "Enviar la mitad ahora y la mitad después", "Negarte; los programas reales no piden a agentes que cobren comisiones así", "Darle al agente tu PIN de dinero móvil en su lugar"], answer: 2, why: "Las \"comisiones de trámite\" por adelantado a agentes son una estafa común; verifica el programa con la oficina oficial." },
            { objective: "O3", q: "¿Qué pregunta importa más al comparar dos préstamos verdes para una bomba solar?", options: ["Cuál tiene el logotipo más bonito", "El costo total y si los pagos coinciden con tu cosecha", "Qué agente es más amable", "Cuál se llama verde"], answer: 1, why: "El costo total y las fechas de pago deciden si puedes pagar el préstamo, sea cual sea su etiqueta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El riesgo climático es un riesgo de negocio",
        questions: [
          { objective: "O1", q: "¿Qué le agrega una evaluación de riesgos climáticos a un calendario de riesgos climáticos?", options: ["Los nombres de los meses", "El pronóstico de lluvia", "Qué tan probable es cada riesgo y cuánto podría costarle al negocio", "Una lista de cultivos que hay que dejar"], answer: 2, why: "La evaluación pone probabilidad e impacto en dinero a cada riesgo para que puedas ordenarlos." },
          { objective: "O1", q: "Las inundaciones cortan el camino hacia tu comprador durante dos semanas cada año. ¿Dónde va esto?", options: ["En ningún lado; no tiene que ver con el rendimiento", "En los efectos en el negocio de tu evaluación de riesgos climáticos", "Solo en tu diario", "En el plan del comprador, no en el tuyo"], answer: 1, why: "Los riesgos climáticos para el transporte, los compradores y la mano de obra son riesgos de negocio y van en la evaluación." },
          { objective: "O2", q: "Un productor de tilapia en Nigeria evalúa un forro para estanque de NGN 400,000 que ahorra NGN 200,000 al año. ¿Cuál es la recuperación?", options: ["Unos 2 años", "Unos 20 años", "Unos 2 meses", "Nunca se recupera"], answer: 0, why: "400,000 ÷ 200,000 = unos 2 años (cifras de ejemplo)." },
          { objective: "O2", q: "¿Cuál es un ejemplo de diversificación como inversión de adaptación?", options: ["Sembrar la misma variedad de maíz en más tierra", "Vender todas tus cabras", "Pedir más prestado para el mismo cultivo", "Agregar aves a una finca de maíz para que una mala temporada no te arruine"], answer: 3, why: "Una segunda fuente de ingresos reparte el riesgo climático en el negocio." },
          { objective: "O3", q: "¿Cómo puede un agricultor de Kenia comprobar que un prestamista que ofrece un préstamo verde tiene licencia?", options: ["Preguntándole al agente del prestamista", "Revisando las listas de instituciones con licencia del Central Bank of Kenya", "Mirando sus \"me gusta\" en redes sociales", "Confiando si dice \"verde\""], answer: 1, why: "El banco central publica listas de bancos y bancos de microfinanzas con licencia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Reducir costos, carbono y planificación",
      lessons: [
        {
          title: "Mitigación que también ahorra dinero",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identificar dos prácticas de tu finca que reducen emisiones y costos al mismo tiempo.",
          text: [
            "Mitigación quiere decir reducir los gases de efecto invernadero que suelta una finca, o guardar más carbono en el suelo y en los árboles. Para un agricultor, la mejor mitigación es la que también ahorra dinero, porque ganas aunque nadie te pague por el carbono.",
            "Menos fertilizante desperdiciado: el fertilizante que se pierde con la lluvia, el viento o en el momento equivocado es dinero perdido y además suelta gases. Ponerlo cerca de las raíces en el momento justo, y agregar estiércol y compost, saca más cosecha de cada costal. Biogás: un biodigestor familiar convierte el estiércol de vaca o de cerdo en gas para cocinar, reduce lo que gastas en leña o carbón, y el bioabono líquido que sobra es un fertilizante. El Africa Biogas Partnership Programme (programa de biogás para África) ha ayudado a instalar biodigestores familiares en Kenia, Burkina Faso y otros países.",
            "Agroforestería: los árboles en la finca guardan carbono y pueden dar fruta, forraje, leña, madera y sombra (por ejemplo, árboles de sombra en el cacao de Costa de Marfil y Ghana), y reducen lo que compras. Otros ahorros: no quemar los residuos de cosecha (guarda nutrientes y ahorra fertilizante), mejor alimentación de los animales (más leche por animal) y bombas solares en lugar de diésel (menor costo de funcionamiento).",
            "Escribe el ahorro en dinero. Si un biodigestor cuesta XOF 500,000 y ahorra XOF 120,000 al año en carbón y fertilizante (cifras inventadas), puedes calcular su recuperación como la de cualquier otra inversión."
          ],
          steps: ["Anota los insumos que más compras: fertilizante, combustible, alimento, leña.", "Para cada uno, busca una práctica que use menos o lo reemplace.", "Estima el dinero ahorrado por año.", "Revisa el costo y la recuperación.", "Elige dos para empezar."],
          words: [["Mitigación", "reducir las emisiones de gases de efecto invernadero, o guardar más carbono en el suelo y los árboles."], ["Biodigestor", "un tanque cerrado donde el estiércol se descompone y produce biogás para cocinar o alumbrar."], ["Bioabono líquido", "el líquido que queda después de producir biogás; se puede usar como fertilizante."], ["Agroforestería", "cultivar árboles junto con cultivos o animales en la misma tierra."]],
          slides: [
            { title: "Mitigación que paga", bullets: ["Reduce emisiones o guarda carbono", "También reduce tus costos", "Ganas aunque no haya pagos por carbono"] },
            { title: "Tres formas de ahorrar", bullets: ["Menos fertilizante perdido: lugar y momento justos", "Biogás: gas para cocinar + bioabono", "Agroforestería: fruta, forraje, leña, sombra"] },
            { title: "Más ahorros", bullets: ["No quemes los residuos", "Mejor alimento: más leche por animal", "Bombeo solar en lugar de diésel"] },
            { title: "Ponlo en dinero", bullets: ["Ejemplo: biodigestor de XOF 500,000", "Ahorra XOF 120,000 al año (inventado)", "Recuperación de unos 4 años"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "Anota los tres insumos en los que más gastas. Para cada uno, escribe una práctica que use menos y estima el dinero ahorrado por año. Elige dos para poner en tu plan.",
          youCanNow: "identificar prácticas que reducen emisiones y costos, y poner el ahorro en dinero.",
          quickCheck: [
            { objective: "O4", q: "¿Qué práctica reduce emisiones y además le ahorra dinero a un criador de cerdos?", options: ["Quemar el estiércol al aire libre", "Comprar más carbón", "Dejar el estiércol amontonado junto al río", "Un biodigestor que produce gas para cocinar y bioabono"], answer: 3, why: "El biogás reemplaza el combustible comprado y el bioabono reemplaza parte del fertilizante." },
            { objective: "O4", q: "¿Por qué reducir el fertilizante desperdiciado es una buena opción de mitigación para un agricultor?", options: ["Ahorra dinero además de reducir emisiones", "Endurece el suelo", "Quiere decir que nunca más hay que fertilizar", "Lo exigen todos los compradores"], answer: 0, why: "Menos desperdicio es más cosecha por costal, así que el agricultor ahorra dinero y emite menos." }
          ]
        },
        {
          title: "Créditos de carbono: oportunidades, estafas y contratos injustos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Revisar una oferta de créditos de carbono en busca de señales de alerta antes de firmar o pagar algo.",
          text: [
            "Un crédito de carbono es un certificado que dice que una tonelada de dióxido de carbono se mantuvo fuera del aire o se guardó, por ejemplo plantando árboles, restaurando tierras o usando estufas limpias. Las empresas compran créditos. Algunos proyectos pagan a agricultores o comunidades por prácticas que guardan carbono. Los proyectos reales están registrados con un estándar como Verra o Gold Standard, y en sus registros se puede buscar por el nombre del proyecto.",
            "Ten mucho cuidado. Los pagos por carbono suelen ser pequeños, lentos (a veces años después de empezar) e inciertos, y primero se descuentan los costos de medición y verificación. Las estafas y los tratos injustos son comunes: gente que pide a los agricultores una cuota para \"unirse\", promete pagos grandes y rápidos o pide firmar contratos largos que entregan los derechos sobre tu tierra, tus árboles o tu carbono por 20 años o más.",
            "Señales de alerta: tienes que pagar para unirte; prometen pagos grandes y rápidos; no puedes llevarte el contrato para leerlo; no está en un idioma que entiendes; le da a alguien derechos sobre tu tierra o tus árboles, o te prohíbe cortarlos o venderlos; no dice cuánto recibes, cuándo y qué parte se queda el desarrollador; el proyecto no está en ningún registro.",
            "Algunos países ya tienen reglas. En Kenia, The Climate Change (Carbon Markets) Regulations, 2024 (el reglamento de mercados de carbono) exige que se aprueben los proyectos de carbono y, para los proyectos en tierras comunitarias, un acuerdo de desarrollo comunitario sobre cómo se reparten los beneficios. Consulta las reglas de tu país con el ministerio del ambiente. Nunca firmes el mismo día; léelo todo, pregunta a tu cooperativa, a un abogado o a un asesor de confianza, y guarda una copia."
          ],
          steps: ["Pregunta: ¿cuál es el nombre del proyecto y su ID de registro?", "Búscalo en el registro (Verra, Gold Standard u otros).", "Pregunta cuánto te pagarán, cuándo y qué parte se queda el desarrollador.", "Lee qué derechos sobre tierra, árboles o carbono entregas y por cuánto tiempo.", "Rechaza cualquier cuota para unirte.", "Llévate el contrato; pide consejo antes de firmar; guarda una copia."],
          words: [["Crédito de carbono", "un certificado por una tonelada de dióxido de carbono que se mantuvo fuera del aire o se guardó."], ["Desarrollador del proyecto de carbono", "la empresa que maneja un proyecto de carbono y vende los créditos."], ["Registro", "una lista pública oficial de proyectos de carbono y sus créditos."], ["Reparto de beneficios", "cómo se divide el dinero de los créditos entre el desarrollador, los agricultores y la comunidad."]],
          slides: [
            { title: "Qué es un crédito de carbono", bullets: ["1 tonelada de CO2 fuera del aire o guardada", "Las empresas los compran", "Los proyectos reales están en un registro (Verra, Gold Standard)"] },
            { title: "La realidad", bullets: ["Pagos a menudo pequeños, lentos e inciertos", "Primero se descuentan los costos de medición", "Algunas ofertas son estafas"] },
            { title: "Señales de alerta", bullets: ["Cuota para unirse; dinero grande y rápido", "No te dejan llevarte el contrato para leerlo", "Derechos sobre tu tierra o tus árboles por décadas", "Sin ID de registro; sin reparto de pagos claro"] },
            { title: "Protégete", bullets: ["Kenia: Carbon Markets Regulations 2024", "Consulta al ministerio del ambiente de tu país", "Nunca firmes el mismo día; pide consejo; guarda copia"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Escribe una lista de al menos cinco preguntas que harás antes de unirte a cualquier programa de créditos de carbono. Luego imagina que un agente le ofrece a tu grupo XOF 50,000 por agricultor si firman hoy y pagan XOF 5,000 para inscribirse: marca qué señales de alerta muestra esta oferta.",
          youCanNow: "revisar una oferta de créditos de carbono en busca de señales de estafa o de un contrato injusto.",
          quickCheck: [
            { objective: "O5", q: "Un agente de carbono pide a cada agricultor NGN 10,000 para unirse y promete el pago el mes que viene. ¿Qué es esto, lo más probable?", options: ["Un proyecto registrado normal", "Un subsidio del gobierno", "Una estafa o una oferta muy injusta", "Una capacitación gratis"], answer: 2, why: "Las cuotas para unirse y las promesas grandes y rápidas son señales clásicas de estafa de carbono." },
            { objective: "O5", q: "¿Qué debes buscar en un contrato de carbono antes de firmar?", options: ["Cuánto recibes, cuándo, y qué derechos sobre tierra o árboles entregas y por cuánto tiempo", "Solo el color del logotipo", "Si el agente es amable", "Nada, si el proyecto es de árboles"], answer: 0, why: "El pago, las fechas y los derechos sobre tu tierra o tus árboles deciden si el trato es justo." }
          ]
        },
        {
          title: "Agregar el riesgo climático a tu plan de negocio",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Escribir un plan de resiliencia climática de una página para el negocio de tu finca.",
          text: [
            "Cada vez más, los prestamistas, los compradores y los programas preguntan cómo hará frente una finca a los golpes del clima. Una sección corta sobre el clima en tu plan de negocio muestra que lo has pensado y te ayuda a decidir a dónde va primero tu propio dinero.",
            "Tu plan de una página tiene seis partes: 1. tus tres principales riesgos climáticos con su probabilidad y costo (lección 1); 2. dos o tres inversiones de adaptación con costo, beneficio y recuperación (lección 2); 3. cómo pagarás: ahorros, grupo, préstamo o programa, y tus preguntas para el prestamista (lección 3); 4. dos prácticas que reducen costos y emisiones (lección 4); 5. tus reglas para cualquier oferta de carbono (lección 5); 6. una fecha de revisión después de cada temporada.",
            "Agrega una línea de \"mal año\" a tu flujo de caja: qué ingreso esperas si golpea el riesgo principal y cómo seguirás pagando préstamos, colegiaturas e insumos, por ejemplo con ahorros, una segunda actividad o un seguro. Si usas un seguro agrícola o ganadero, comprueba que la aseguradora tenga licencia (en Kenia, con la Insurance Regulatory Authority, la autoridad reguladora de seguros) y lee el detonante de pago.",
            "Puedes pedirle a un asistente de IA en el teléfono que convierta tus notas en una tabla ordenada o que te haga preguntas sobre los huecos de tu plan, pero los números deben salir de tus propios registros y precios locales. No escribas números de identificación, números de cuenta ni PIN."
          ],
          steps: ["Copia tu tabla de riesgos de la lección 1: los tres principales.", "Agrega tus dos o tres inversiones con su costo.", "Escribe cómo pagarás y tus preguntas para el prestamista.", "Agrega dos prácticas de mitigación que ahorran dinero.", "Escribe tus reglas para ofertas de carbono.", "Agrega una línea de mal año al flujo de caja y una fecha de revisión."],
          words: [["Plan de negocio", "un plan corto por escrito de lo que hace tu finca, sus costos, ingresos y metas."], ["Escenario de mal año", "un plan de lo que pasa con los ingresos y los pagos si golpea el riesgo principal."], ["Detonante de pago", "el evento, como poca lluvia medida en una estación, que hace que una póliza de seguro pague."]],
          slides: [
            { title: "Por qué agregar el clima al plan", bullets: ["Prestamistas y compradores preguntan cómo harás frente", "Muestra a dónde va primero tu dinero"] },
            { title: "Seis partes, una página", bullets: ["Riesgos, inversiones y recuperación", "Cómo pagarás", "Prácticas de ahorro, reglas de carbono", "Fecha de revisión"] },
            { title: "Planea para un mal año", bullets: ["Ingreso si golpea el riesgo principal", "Cómo se siguen pagando préstamos y colegiaturas", "Seguro: aseguradora con licencia, detonante claro"] },
            { title: "La IA ordena, no decide", bullets: ["Pídele una tabla o que encuentre huecos", "Los números salen de tus registros", "Nada de identificaciones, números de cuenta ni PIN"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Tarea final: escribe tu plan de resiliencia climática de una página con las seis partes y una línea de mal año en el flujo de caja. Léeselo a un familiar, a un miembro del grupo o al extensionista y pídele una pregunta que no hayas respondido.",
          youCanNow: "escribir un plan de resiliencia climática de una página para el negocio de tu finca que un prestamista, un comprador o un programa pueda leer.",
          quickCheck: [
            { objective: "O6", q: "¿Qué parte FALTA en este plan: riesgos, inversiones con costo, cómo pagar, prácticas de mitigación, reglas de carbono?", options: ["El cultivo favorito del agricultor", "Una lista de vecinos", "El clima de mañana", "Una fecha de revisión"], answer: 3, why: "Un plan necesita una fecha de revisión para actualizarlo después de cada temporada." },
            { objective: "O6", q: "¿Qué muestra una línea de mal año en tu flujo de caja?", options: ["Cuánto ganarás en el mejor año", "Cómo seguirás pagando préstamos y costos si golpea el riesgo principal", "El precio del fertilizante el año pasado", "Cuántos trabajadores conoces"], answer: 1, why: "Pone a prueba si el negocio sobrevive al golpe que calificaste como más probable y costoso." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Reducir costos, carbono y planificación",
        questions: [
          { objective: "O4", q: "Un caficultor siembra árboles de sombra que también dan fruta y leña. ¿Qué es esto?", options: ["Agroforestería que ahorra dinero y guarda carbono", "Quema de residuos", "Una estafa de carbono", "Exceso de fertilizante"], answer: 0, why: "Los árboles con cultivos guardan carbono y dan productos que el agricultor tendría que comprar." },
          { objective: "O4", q: "¿Cuál NO es una práctica de mitigación que ahorra dinero?", options: ["Poner el fertilizante cerca de las raíces en el momento justo", "Quemar los residuos de cosecha después de cosechar", "Usar un biodigestor para tener gas de cocina", "Mejor alimento para más leche por vaca"], answer: 1, why: "Quemar residuos desperdicia nutrientes y suelta gases; las demás reducen costos y emisiones." },
          { objective: "O5", q: "¿Cómo puedes comprobar que un proyecto de carbono es real?", options: ["Preguntándole al agente si es real", "Contando la gente en la reunión", "Buscándolo por nombre o ID en un registro como Verra o Gold Standard", "Mirando el carro del agente"], answer: 2, why: "Los proyectos reales están en registros públicos que llevan los estándares de carbono." },
          { objective: "O5", q: "Un contrato de carbono te prohíbe cortar o vender tus propios árboles durante 30 años. ¿Qué debes hacer?", options: ["Firmar; los árboles son dinero gratis", "Firmar ahora y leer después", "Pedirle al agente que lea las partes buenas", "Llevártelo, pedir consejo y solo firmar si entiendes y aceptas esas condiciones"], answer: 3, why: "Los límites largos sobre tu tierra y tus árboles son serios; lee todo y pide consejo de confianza primero." },
          { objective: "O6", q: "¿Por qué un plan de resiliencia climática debe tener una fecha de revisión?", options: ["A los prestamistas les gustan las fechas", "Los riesgos, los precios y los resultados cambian, así que el plan se actualiza cada temporada", "Hace la página más larga", "La ley exige revisiones"], answer: 1, why: "Revisar después de cada temporada mantiene el plan de acuerdo con lo que de verdad pasó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agronegocio resiliente al clima",
    questions: [
      { objective: "O1", q: "Una evaluación de riesgos climáticos hace dos preguntas sobre cada peligro. ¿Cuáles?", options: ["¿Qué tan probable es y cuánto costaría?", "¿Quién lo causó y cuándo empezó?", "¿Qué radio lo anunció y a qué hora?", "¿Es buena noticia y es justo?"], answer: 0, why: "La probabilidad y el impacto en dinero te dejan ordenar los riesgos." },
      { objective: "O1", q: "¿Dónde encuentras las pérdidas pasadas para estimar el costo de un riesgo?", options: ["Solo con un agente de carbono", "En el resultado de una lotería", "En los registros de tu finca y en lo que recuerdan los agricultores mayores de los malos años", "En el precio de un teléfono"], answer: 2, why: "Los registros y la memoria local muestran lo que de verdad costaron los malos años." },
      { objective: "O1", q: "El estrés por calor baja la postura de huevos en tu galpón de ponedoras casi todos los años. ¿Cómo lo calificas?", options: ["Baja probabilidad, sin costo", "No es un riesgo climático", "Solo un problema de alimento", "Alta probabilidad con un costo en dinero por los huevos perdidos"], answer: 3, why: "Pasa casi todos los años y cuesta huevos, así que es probable y costoso." },
      { objective: "O2", q: "¿Qué es la recuperación?", options: ["Los intereses de un préstamo", "El tiempo hasta que los ahorros o las ganancias de una inversión cubren su costo", "El precio de la semilla", "Un reembolso de la tienda"], answer: 1, why: "Recuperación = costo ÷ beneficio anual." },
      { objective: "O2", q: "¿Qué cuenta como parte del costo de un tanque de agua?", options: ["Compra, construcción, mano de obra y mantenimiento", "Solo el precio en la tienda", "Solo el transporte", "Nada, si es un regalo"], answer: 0, why: "El costo completo incluye todo lo necesario para construirlo y mantenerlo funcionando." },
      { objective: "O2", q: "¿Cuál es una inversión de adaptación contra los periodos secos?", options: ["Vender la bomba de agua", "Sembrar más tarde cada año sin razón", "Semilla tolerante a la sequía o de ciclo corto", "Quemar los residuos"], answer: 2, why: "Las variedades tolerantes a la sequía y de ciclo corto reducen las pérdidas en los periodos secos." },
      { objective: "O2", q: "Dos inversiones dan el mismo beneficio. Una cuesta menos y es fácil de mantener. ¿Con cuál sueles empezar?", options: ["La cara", "Ninguna", "Las dos a crédito al mismo tiempo", "La más barata que puedes mantener"], answer: 3, why: "Un costo más bajo y un mantenimiento fácil dan una recuperación más rápida y segura." },
      { objective: "O3", q: "¿Cómo suelen llegar los grandes fondos climáticos a los agricultores?", options: ["A través de bancos, gobiernos y agencias, como préstamos y programas", "Mandando efectivo al teléfono de cada agricultor", "Por medio de agentes de carbono que cobran una cuota", "Nunca llegan a los agricultores"], answer: 0, why: "Fondos como el Green Climate Fund trabajan con gobiernos, bancos y agencias acreditadas." },
      { objective: "O3", q: "Antes de tomar un préstamo verde, ¿cuál es la pregunta clave?", options: ["¿El oficial de crédito es amable?", "¿Cuál es el costo total y los pagos coinciden con mi cosecha?", "¿Tiene \"verde\" en el nombre?", "¿La oficina está cerca del mercado?"], answer: 1, why: "El costo total y las fechas de pago deciden si lo puedes pagar." },
      { objective: "O3", q: "En Nigeria, ¿dónde puedes comprobar que un prestamista tiene licencia?", options: ["En un grupo de WhatsApp", "Con el agente del prestamista", "Con el Central Bank of Nigeria", "En un cartel del mercado"], answer: 2, why: "El Central Bank of Nigeria regula y publica la lista de instituciones con licencia." },
      { objective: "O3", q: "Alguien ofrece \"acelerar\" tu subvención climática a cambio de una cuota pagada a su número de dinero móvil. ¿Qué es esto?", options: ["Una señal de alerta de estafa", "Un paso normal", "Una regla del gobierno", "Una cuota de la cooperativa"], answer: 0, why: "Los programas reales no te piden pagar a agentes para acelerar subvenciones." },
      { objective: "O4", q: "¿Qué es la mitigación?", options: ["Mudarse a una finca nueva", "Un seguro contra la sequía", "Vender la cosecha antes", "Reducir las emisiones de gases de efecto invernadero o guardar más carbono"], answer: 3, why: "La mitigación reduce emisiones o guarda carbono en el suelo y los árboles." },
      { objective: "O4", q: "¿Qué es el bioabono líquido?", options: ["Un pesticida", "El líquido que queda después de producir biogás, usado como fertilizante", "Un combustible que se vende en las tiendas", "Una enfermedad del ganado"], answer: 1, why: "El bioabono de un biodigestor puede alimentar el suelo." },
      { objective: "O4", q: "¿Qué práctica ahorra dinero Y reduce emisiones en una finca lechera?", options: ["Mejor alimento para que cada vaca dé más leche", "Quemar el estiércol", "Comprar más vacas de las que el alimento permite", "Dejar el potrero pelado"], answer: 0, why: "Más leche por animal gracias a mejor alimento quiere decir menos costos y emisiones por litro." },
      { objective: "O5", q: "¿Qué es un crédito de carbono?", options: ["Un préstamo para semilla", "Un descuento en fertilizante", "Un certificado por una tonelada de CO2 que se mantuvo fuera del aire o se guardó", "Un bono de dinero móvil"], answer: 2, why: "Cada crédito representa una tonelada de dióxido de carbono evitada o guardada." },
      { objective: "O5", q: "¿Cuál es una señal de alerta en una oferta de carbono?", options: ["El proyecto tiene un ID de registro que puedes buscar", "Puedes llevarte el contrato a casa para leerlo", "Los pagos y las partes están escritos con claridad", "Tienes que pagar una cuota para unirte"], answer: 3, why: "Las cuotas para unirse son una señal clásica de estafa." },
      { objective: "O5", q: "En Kenia, ¿qué necesitan los proyectos de carbono en tierras comunitarias?", options: ["Nada", "Un acuerdo de desarrollo comunitario sobre cómo se reparten los beneficios", "Solo una promesa de palabra", "Un préstamo del agente"], answer: 1, why: "El reglamento Carbon Markets Regulations, 2024 de Kenia exige acuerdos de desarrollo comunitario para esos proyectos." },
      { objective: "O6", q: "¿Qué va en un plan de resiliencia climática de una página?", options: ["Riesgos principales, inversiones con costo, cómo pagar, prácticas de ahorro, reglas de carbono y una fecha de revisión", "Solo el nombre de la finca", "Tu PIN de dinero móvil", "Una lista de todos los días de lluvia del año pasado"], answer: 0, why: "Esas seis partes forman un plan completo y útil." },
      { objective: "O6", q: "¿Cómo puede ayudarte un asistente de IA en el teléfono con tu plan?", options: ["Puede inventar tus precios", "Debe guardar tu PIN del banco", "Puede ordenar tus notas en una tabla y señalar huecos", "Firma por ti los formularios del préstamo"], answer: 2, why: "La IA puede organizar y hacer preguntas, pero los números salen de tus registros." },
      { objective: "O6", q: "Tu plan muestra que no puedes pagar un préstamo si llega un periodo seco. ¿Qué haces?", options: ["Ignorarlo", "Ocultárselo al prestamista", "Pedir más prestado", "Cambiar el plan: un préstamo más pequeño, ahorros, una segunda actividad o un seguro"], answer: 3, why: "La línea de mal año está para cambiar el plan antes del golpe, no después." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y vuelve a intentarlo.",
    criteria: [
      { name: "Riesgos climáticos en dinero", objective: "O1", notYet: "Los riesgos aparecen sin probabilidad ni costo, o son menos de tres.", meets: "Tres riesgos, cada uno con probabilidad y un costo estimado en moneda local.", exceeds: "También muestra los efectos en el negocio (préstamos, compradores, mano de obra) y de dónde salieron las estimaciones." },
      { name: "Inversiones con costo", objective: "O2", notYet: "Las inversiones tienen nombre pero no costo.", meets: "Dos o tres inversiones con costo completo, beneficio anual promedio y recuperación.", exceeds: "Usa cotizaciones locales reales y explica por qué empieza con una." },
      { name: "Financiamiento y revisión del prestamista", objective: "O3", notYet: "No hay plan de pago, o hay un prestamista sin revisar.", meets: "Dice cómo se pagará y anota preguntas sobre costo total, fechas de pago, condiciones y licencia.", exceeds: "Ha comparado dos opciones de financiamiento y buscó al prestamista en la lista del regulador." },
      { name: "Prácticas que ahorran dinero", objective: "O4", notYet: "No hay práctica de mitigación, o hay una sin ahorro mostrado.", meets: "Dos prácticas que reducen emisiones, cada una con el insumo o el dinero ahorrado.", exceeds: "Incluye la recuperación de cualquier práctica que requiera gasto, como un biodigestor." },
      { name: "Reglas para ofertas de carbono", objective: "O5", notYet: "No hay reglas, o firmaría o pagaría el mismo día.", meets: "Al menos cuatro controles: registro, pago y reparto, derechos sobre tierra y árboles, sin cuotas, consejo antes de firmar.", exceeds: "Nombra las reglas o la oficina nacional que hay que consultar, como el Carbon Markets Regulations de Kenia." },
      { name: "Plan completo de una página", objective: "O6", notYet: "Faltan partes o no hay fecha de revisión.", meets: "Las seis partes, una línea de mal año en el flujo de caja y una fecha de revisión en una página.", exceeds: "Lo leyó un miembro del grupo, el extensionista o un asesor, y se actualizó con su pregunta." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que hacen al menos una inversión de adaptación con costo calculado durante la próxima temporada (encuesta de seguimiento)",
      "Participantes o grupos que solicitan financiamiento con un plan escrito y preguntas para el prestamista",
      "Estafas de carbono o de financiamiento evitadas según los reportes, y menos contratos firmados sin consejo (reportes de extensión o de cooperativas)",
      "Pérdida de ingresos en la próxima mala temporada comparada con la mala temporada anterior (según el propio participante, por actividad)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y una calculadora sencilla (o la calculadora del teléfono)",
      "Tus registros de la finca, o una finca de ejemplo de la tarea final",
      "Precios locales de semilla, tanques, insumos y combustible (de las tiendas agropecuarias o la cooperativa)",
      "Un teléfono para buscar prestamistas y registros (opcional)",
      "Unos 90 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Funciona mejor con un grupo de productores, una cooperativa o una Farmer Business School (escuela de negocios para agricultores): hagan las lecciones 1 y 2 con registros reales de dos o tres miembros.",
      "Reúna cotizaciones locales reales antes de la sesión; nunca presente los precios de ejemplo como hechos.",
      "Invite a un oficial de crédito de un banco, banco de microfinanzas o SACCO con licencia a responder las preguntas de la lección 3, y revise su licencia frente al grupo.",
      "Para la lección 5, lleve un contrato u oferta de carbono de muestra (sin nombres) y marquen juntos las señales de alerta. No respalde ningún proyecto de carbono.",
      "No dé consejos de inversión; recuerde a los participantes leer los contratos completos y hablar con un asesor de confianza.",
      "Califique el plan final con la rúbrica y dé retroalimentación sobre una fila de Todavía no a la vez."
    ]
  }
};
