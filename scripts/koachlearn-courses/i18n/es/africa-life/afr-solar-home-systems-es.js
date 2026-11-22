"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-solar-home-systems.js). See scripts/koachlearn-courses/README.md, "Translations".
// Small home systems only, exactly as in the English: no grid or mains wiring work; sizing figures and prices are examples, not design values.

const VERASOL = { name: "VeraSol: garantía de calidad independiente para la energía solar fuera de la red (sucesor de Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "Base de datos de productos de VeraSol: buscar kits solares certificados", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA (asociación de prevención de incendios de EE. UU.): seguridad de las baterías de iones de litio (señales de alerta; no tirarlas a la basura, reciclarlas)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA: Protección del consumidor en la energía solar fuera de la red (venta responsable, transparencia, trato justo, buen servicio, calidad)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Autoridad Reguladora de Energía y Petróleo (EPRA), Kenia: energías renovables y licencias", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "OMS, nota descriptiva: Residuos electrónicos, incluidos los peligros de quemarlos y tirarlos", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems-es",
  lang: "es",
  translationOf: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Sistemas solares domésticos: instalar, vender y crear un negocio de energía fuera de la red",
  skills: "Nombrar las partes de un sistema solar doméstico y comprobar su calidad, Dimensionar un sistema según el consumo diario de energía, Instalar con seguridad un sistema pequeño de CC, Mantener un sistema y encontrar fallas, Vender con honestidad al contado o con pago por uso",
  outcome: "ayudar a un hogar a elegir, instalar y cuidar un sistema solar doméstico pequeño: comprobar que el kit está certificado, dimensionarlo según el consumo diario de energía del hogar, instalarlo con seguridad, mantenerlo funcionando y venderlo con honestidad, con precios y condiciones claros.",
  about: [
    "Este curso es para jóvenes, ayudantes de electricista, tenderos y agentes de ventas de toda África que quieren ganar dinero con la energía solar pequeña fuera de la red: luces, carga de teléfonos, radio, un televisor pequeño o un ventilador para casas y quioscos sin una conexión fiable a la red, en la Kenia rural, el norte de Nigeria, el Alto Este de Ghana, la Casamance de Senegal o el Extremo Norte de Camerún.",
    "El capítulo 1 explica cómo funciona un sistema solar doméstico: sus partes y cómo comprobar la calidad, cómo dimensionar un sistema según lo que una familia usa cada día y cómo instalar un sistema pequeño con seguridad. El capítulo 2 trata de mantenerlo funcionando y de llevar un negocio: mantenimiento y búsqueda de fallas, venta al contado o con pago por uso, y cómo escribir un presupuesto honesto.",
    "Este curso es solo para sistemas domésticos pequeños. No enseña trabajos en la red eléctrica, en el cableado eléctrico de la casa ni en sistemas grandes; eso necesita un electricista con licencia. Algunos países dan licencias a los técnicos solares, así que consulta a tu regulador de energía. Todas las cifras de dimensionamiento y los precios son ejemplos. Cada lección dura unos cinco minutos y termina con una tarea. Después de cada lección hay preguntas rápidas, una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un presupuesto para un hogar real o de ejemplo (por ejemplo, una familia de cinco personas en Kitui, Kenia, o un quiosco en Kaolack, Senegal): una tabla de lo que quieren alimentar, con vatios y horas por día; el total de energía diaria; el tamaño de panel y batería que elegiste y cómo lo calculaste; un kit certificado de la base de datos de VeraSol o un kit con una garantía clara; una lista de seguridad para la instalación; el precio al contado y las condiciones de pago por uso, si las hay, con el total que pagará el cliente; y una tarjeta de mantenimiento y garantía para el cliente.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes, ayudantes de electricista, tenderos y agentes de ventas de energía solar en pueblos y aldeas de toda África (Kenia, Nigeria, Ghana, Senegal, Camerún, Marruecos y otros países) que venden o instalan equipos solares, o quieren empezar un pequeño negocio solar.",
    startingPoint: "Muchos han visto lámparas y kits solares, y algunos los venden. Pocos saben dimensionar un sistema según el consumo de energía de un hogar, comprobar si un kit está certificado, instalar un sistema pequeño con seguridad, encontrar fallas sencillas o explicar con honestidad las condiciones del pago por uso.",
    gap: "Los kits demasiado pequeños o falsos fallan pronto y los clientes pierden dinero y confianza; una mala instalación causa incendios de baterías y descargas eléctricas; las condiciones poco claras del pago por uso atrapan a las familias en deudas. Un instalador y vendedor capacitado y honesto gana clientes que vuelven y ayuda a las familias a tener luz y energía limpias y fiables.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; aritmética simple (multiplicar, sumar, dividir) y cada palabra técnica explicada",
      "Dispositivos: un teléfono básico con calculadora; los datos móviles son caros, así que las búsquedas en la base de datos son cortas",
      "Alcance y seguridad: solo sistemas domésticos pequeños; nada de red eléctrica, cableado de la casa ni sistemas grandes; las licencias cambian según el país y los participantes consultan a su regulador de energía",
      "Dinero: los precios y las cifras de dimensionamiento son ejemplos; no hay consejos de inversión; las condiciones del pago por uso se explican con honestidad",
      "El curso también está traducido al francés y al árabe, así que los ejemplos incluyen clientes francófonos y del norte de África"
    ],
    prerequisites: "Aritmética básica. No hace falta formación eléctrica para empezar; la instalación práctica debe hacerse junto a un instalador con experiencia."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un kit solar doméstico delante", action: "nombrar cada parte (panel, controlador de carga, batería, inversor, luces y aparatos) y comprobar si el kit está certificado en la base de datos de VeraSol", standard: "nombrando todas las partes correctamente y anotando el resultado de la certificación" },
    { id: "O2", condition: "Con una lista de lo que un hogar quiere alimentar", action: "calcular la necesidad diaria de energía en vatios-hora y elegir el tamaño del panel y de la batería", standard: "con la aritmética correcta y un margen para las pérdidas" },
    { id: "O3", condition: "Al instalar un sistema solar doméstico pequeño de CC", action: "seguir una lista de seguridad para colocar el panel, hacer el cableado, poner los fusibles y ubicar la batería", standard: "sin saltarte ningún paso y sin trabajar en la red ni en el cableado eléctrico de la casa" },
    { id: "O4", condition: "Cuando un sistema no funciona bien", action: "hacer el mantenimiento de rutina y encontrar fallas sencillas paso a paso", standard: "revisando el panel, las conexiones, el controlador y la batería en ese orden" },
    { id: "O5", condition: "Cuando vendes un sistema a un cliente", action: "escribir un presupuesto honesto con el precio al contado, las condiciones de pago por uso si las hay, el costo total y la garantía", standard: "de modo que el cliente pueda decir el total que pagará antes de firmar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona un sistema solar doméstico",
      lessons: [
        {
          title: "Las partes de un sistema solar doméstico y su calidad",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar las partes de un sistema solar doméstico y comprobar si un kit está certificado.",
          text: [
            "Un sistema solar doméstico convierte la luz del sol en electricidad para una casa o una tienda pequeña. Tiene cinco partes principales. El panel solar produce electricidad con la luz del sol durante el día. El controlador de carga lleva esa electricidad a la batería con seguridad y evita que se sobrecargue o se descargue demasiado. La batería guarda la energía para la noche. Las luces y los aparatos (las cargas) usan la energía. Algunos sistemas tienen un inversor, que cambia la corriente continua (CC) de la batería en corriente alterna (CA) para los enchufes normales.",
            "Muchos kits pequeños vienen en una sola caja con el controlador y la batería incluidos, más luces de CC, un puerto para cargar teléfonos y, a veces, una radio, un televisor o un ventilador de CC. Los aparatos de CC usan menos energía que los de CA con inversor, así que hacen rendir más un sistema pequeño.",
            "Los kits falsos y de mala calidad son comunes. Antes de vender o instalar un kit, comprueba si está certificado por VeraSol, un programa de calidad independiente que nació de Lighting Global. Su base de datos gratuita en internet (data.verasol.org) lista los kits solares certificados. Un kit certificado ha sido probado en su rendimiento real, su duración y la honestidad de lo que promete. Si un kit no aparece en la lista, pide su garantía por escrito y los resultados de sus pruebas.",
            "Ejemplo: Fatou, en Kaolack, Senegal, compara dos kits del mismo tamaño. Uno está en la base de datos de VeraSol y tiene garantía por escrito; el otro no tiene etiqueta ni garantía. Ella elige el kit certificado para sus clientes."
          ],
          words: [["Panel solar", "una placa plana que produce electricidad con la luz del sol."], ["Controlador de carga", "una caja pequeña que carga la batería con seguridad y la protege."], ["Inversor", "un aparato que cambia la corriente continua de la batería en corriente alterna para los enchufes normales."], ["CC y CA", "la CC (corriente continua) es la corriente estable de las baterías y los paneles; la CA (corriente alterna) es la de la red y la mayoría de los enchufes normales."]],
          slides: [
            { title: "Cinco partes principales", bullets: ["Panel: produce energía con la luz del sol", "Controlador de carga: carga la batería con seguridad", "Batería: guarda energía para la noche; las cargas la usan"] },
            { title: "Inversor y aparatos de CC", bullets: ["Inversor: de CC de la batería a CA para enchufes normales", "Luces, radio, televisor y ventilador de CC usan menos energía", "Muchos kits vienen en una sola caja"] },
            { title: "Comprueba la calidad: VeraSol", bullets: ["Programa de calidad independiente (nacido de Lighting Global)", "Base de datos gratuita: data.verasol.org", "¿No aparece? Pide garantía por escrito y resultados de pruebas"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Mira un kit solar (en una tienda, en casa o en una foto en internet) y escribe el nombre de cada parte. Si tienes datos, busca un kit en la base de datos de VeraSol y anota si aparece.",
          youCanNow: "nombrar cada parte de un sistema solar doméstico y comprobar si un kit está certificado.",
          quickCheck: [
            { objective: "O1", q: "¿Qué parte evita que la batería se sobrecargue?", options: ["La bombilla", "El marco del panel", "El controlador de carga", "El cable del cargador del teléfono"], answer: 2, why: "El controlador de carga carga la batería con seguridad y la protege de la sobrecarga y de la descarga excesiva." },
            { objective: "O1", q: "¿Dónde puedes comprobar si un kit solar está certificado?", options: ["En la base de datos de productos de VeraSol", "En el color de la caja", "Solo en la palabra del vendedor", "En el peso del panel"], answer: 0, why: "La base de datos gratuita de VeraSol lista los kits probados de forma independiente y certificados." }
          ]
        },
        {
          title: "Dimensionar un sistema según lo que usa un hogar",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular la necesidad diaria de energía de un hogar y elegir el tamaño del panel y de la batería.",
          text: [
            "Dimensiona el sistema según lo que la familia de verdad quiere alimentar. Para cada aparato, multiplica su potencia en vatios (W) por las horas que se usa cada día. Eso da los vatios-hora (Wh) por día. Súmalos todos.",
            "Ejemplo (las cifras son solo ejemplos): 3 bombillas LED de 3 W durante 5 horas = 45 Wh. Cargar 2 teléfonos, unos 10 Wh cada uno = 20 Wh. Una radio de 5 W durante 4 horas = 20 Wh. Un televisor de CC de 20 W durante 3 horas = 60 Wh. Total: 145 Wh por día. Suma alrededor de un 30% por las pérdidas en los cables, el controlador y la batería: unos 190 Wh por día.",
            "Panel: divide la necesidad diaria entre las horas de sol pico del lugar donde vive el cliente (las horas de sol a plena fuerza en un día). Si hay unas 5 horas de sol pico: 190 / 5 = 38 W. Redondea hacia arriba al siguiente tamaño de panel, por ejemplo un panel de 50 W. Las horas de sol pico cambian según el lugar y la estación; consulta datos locales o pregunta a un instalador con experiencia, y dimensiona para los meses más nublados.",
            "Batería: debe guardar al menos lo que se necesita en una noche. La mayoría de las baterías no deben vaciarse del todo. Una batería de litio se suele usar hasta un 80%; una de plomo-ácido, hasta un 50% (revisa la cifra del fabricante). Para 190 Wh con litio: 190 / 0.8 = unos 238 Wh. Para una batería de 12 V, divide entre 12: unos 20 Ah. Agrega más si la familia quiere energía en los días nublados."
          ],
          steps: ["Haz una lista de cada aparato, sus vatios y sus horas por día.", "Multiplica vatios por horas en cada uno y suma: Wh por día.", "Suma alrededor de un 30% por las pérdidas.", "Panel: necesidad diaria / horas de sol pico, y redondea hacia arriba.", "Batería: necesidad diaria / parte utilizable (por ejemplo 0.8), y luego / 12 para los amperios-hora a 12 V."],
          words: [["Vatio (W)", "cuánta potencia usa un aparato en un momento."], ["Vatio-hora (Wh)", "energía usada: vatios multiplicados por horas."], ["Horas de sol pico", "el número de horas de sol a plena fuerza en un día en un lugar."], ["Amperio-hora (Ah)", "cuánta carga guarda una batería; Wh = Ah x voltios."]],
          slides: [
            { title: "Necesidad diaria de energía", bullets: ["Vatios x horas = Wh de cada aparato", "Súmalos todos", "Ejemplo: 145 Wh; +30% de pérdidas = unos 190 Wh"] },
            { title: "Tamaño del panel", bullets: ["Wh diarios / horas de sol pico", "Ejemplo: 190 / 5 = 38 W: elige 50 W", "Dimensiona para los meses más nublados"] },
            { title: "Tamaño de la batería", bullets: ["No la vacíes del todo: litio, un 80%; plomo-ácido, un 50%", "Ejemplo: 190 / 0.8 = unos 238 Wh", "A 12 V: 238 / 12 = unos 20 Ah"] },
            { title: "Las cifras son ejemplos", bullets: ["Revisa los vatios en la etiqueta de cada aparato", "Revisa las horas de sol de tu zona", "Revisa las cifras del fabricante de la batería"] }
          ],
          tryIt: "Haz una tabla de energía para tu casa o la de un vecino: cada aparato, vatios, horas y Wh. Saca el total, suma un 30% y calcula el tamaño del panel y de la batería siguiendo los pasos.",
          youCanNow: "calcular la necesidad diaria de energía de un hogar y elegir el tamaño del panel y de la batería.",
          quickCheck: [
            { objective: "O2", q: "Una bombilla de 4 W se usa 6 horas al día. ¿Cuántos vatios-hora son?", options: ["10 Wh", "2 Wh", "46 Wh", "24 Wh"], answer: 3, why: "4 W x 6 horas = 24 Wh." },
            { objective: "O2", q: "Un hogar necesita 200 Wh al día y hay 5 horas de sol pico. ¿Cuál es el panel más pequeño según el cálculo?", options: ["40 W", "1,000 W", "5 W", "200 W"], answer: 0, why: "200 / 5 = 40 W; luego redondea hacia arriba al siguiente tamaño de panel disponible." }
          ]
        },
        {
          title: "Instalar un sistema pequeño con seguridad",
          objectives: ["O3"],
          minutes: 6,
          goal: "Instalar un sistema solar doméstico pequeño de CC siguiendo una lista de seguridad.",
          text: [
            "Panel: ponlo donde reciba pleno sol la mayor parte del día, sin sombra de árboles, paredes ni cables. Oriéntalo hacia el ecuador: en los países al norte del ecuador, hacia el sur; al sur del ecuador, hacia el norte. Inclínalo al menos un poco, para que la lluvia lave el polvo. Fíjalo bien para que el viento no lo levante. En un techo, usa una escalera segura, pide a un ayudante que la sostenga y nunca trabajes con lluvia o viento.",
            "Batería: mantenla dentro de la casa, en un lugar seco, a la sombra y ventilado, sin tocar el suelo, fuera del alcance de los niños y lejos del fuego de la cocina. Las baterías de plomo-ácido sueltan un gas inflamable al cargarse y contienen ácido: ventílalas, usa protección para los ojos y guantes, y mantén lejos las llamas. Un cortocircuito entre los bornes de una batería puede derretir cables y provocar un incendio.",
            "Cableado: usa el calibre de cable que indica el fabricante del kit, el rojo al positivo (+) y el negro al negativo (-), y pon el fusible o el interruptor que indica el fabricante, cerca de la batería. En la mayoría de los kits con controlador separado, conecta primero la batería al controlador, luego el panel y después las cargas; sigue el manual del fabricante si dice otra cosa. Sujeta los cables para que nadie los jale ni los muerdan los animales.",
            "Límites: este curso cubre solo sistemas pequeños de CC. Nunca conectes un sistema solar a la red ni al cableado eléctrico de la casa, y nunca abras un inversor. Esos trabajos necesitan un electricista con licencia. Algunos países dan licencias a los técnicos solares; en Kenia, consulta a la EPRA, y en otros países, a tu regulador de energía."
          ],
          steps: ["Elige un lugar soleado y sin sombra; orienta el panel hacia el ecuador con una pequeña inclinación; fíjalo bien.", "Trabaja en altura solo con una escalera segura y un ayudante; nunca con lluvia o viento.", "Pon la batería dentro de la casa: seca, a la sombra, ventilada, sin tocar el suelo, lejos de los niños y del fuego.", "Usa el cable correcto, el rojo al +, el negro al -, y pon el fusible cerca de la batería.", "Conecta primero la batería al controlador, luego el panel y después las cargas, salvo que el manual diga otra cosa.", "Nada de conexión a la red ni al cableado de la casa; no abras el inversor."],
          words: [["Polaridad", "qué cable es el positivo (+) y cuál el negativo (-). Si te equivocas, puedes dañar las piezas."], ["Fusible", "una pequeña pieza de seguridad que corta el circuito si pasa demasiada corriente."], ["Ventilado", "con aire fresco que circula, para que los gases no se acumulen."]],
          slides: [
            { title: "Dónde poner el panel", bullets: ["Pleno sol, sin sombra", "Hacia el ecuador: al sur si estás al norte, al norte si estás al sur", "Pequeña inclinación; bien fijo; escalera segura y un ayudante"] },
            { title: "Dónde poner la batería", bullets: ["Dentro: seca, a la sombra, ventilada, sin tocar el suelo", "Lejos de los niños y del fuego de la cocina", "Plomo-ácido: ácido y gas; gafas, guantes, nada de llamas"] },
            { title: "Cableado", bullets: ["Cable correcto; rojo +, negro -", "Fusible cerca de la batería", "Primero batería al controlador, luego panel y cargas (o según el manual)"] },
            { title: "Tus límites", bullets: ["Solo sistemas pequeños de CC", "Nunca la red ni el cableado de la casa; nunca abras un inversor", "Licencias: en Kenia, la EPRA; en otros países, tu regulador de energía"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Escribe tu lista de seguridad para la instalación con al menos ocho líneas de esta lección. Si puedes, recorre una casa, elige el mejor lugar para el panel y la batería, y escribe por qué.",
          youCanNow: "instalar con seguridad un sistema solar doméstico pequeño de CC siguiendo una lista, y saber qué trabajos dejar a un electricista con licencia.",
          quickCheck: [
            { objective: "O3", q: "La casa de un cliente está en Nairobi, un poco al sur del ecuador. ¿Hacia dónde debe mirar el panel?", options: ["Hacia el sur", "Hacia abajo", "Hacia el norte, hacia el ecuador", "Hacia la sombra"], answer: 2, why: "Los paneles miran hacia el ecuador; al sur de él, eso significa mirar al norte." },
            { objective: "O3", q: "Un cliente te pide conectar su kit solar al cableado de la red de su casa. ¿Qué haces?", options: ["Hacerlo rápido", "Negarte: el trabajo en la red y en el cableado de la casa necesita un electricista con licencia", "Hacerlo de noche", "Abrir primero el inversor"], answer: 1, why: "Este curso cubre solo sistemas pequeños de CC; el trabajo en la red y en el cableado de la casa necesita un electricista con licencia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona un sistema solar doméstico",
        questions: [
          { objective: "O1", q: "¿Qué hace un inversor?", options: ["Guarda energía", "Produce energía con la luz del sol", "Mide la luz del sol", "Cambia la CC de la batería en CA para los enchufes normales"], answer: 3, why: "Un inversor convierte la CC en CA." },
          { objective: "O1", q: "¿Por qué elegir un kit que aparece en la base de datos de VeraSol?", options: ["Ha sido probado de forma independiente en rendimiento, duración y honestidad de lo que promete", "Siempre es el más barato", "Nunca necesita mantenimiento", "Funciona sin sol"], answer: 0, why: "VeraSol certifica los kits después de pruebas independientes." },
          { objective: "O2", q: "Un hogar necesita 120 Wh al día antes de las pérdidas. ¿Cuánto es, más o menos, con un 30% añadido?", options: ["90 Wh", "150 Wh", "156 Wh", "360 Wh"], answer: 2, why: "120 x 1.3 = 156 Wh." },
          { objective: "O2", q: "¿Por qué no se debe vaciar del todo una batería de litio cada noche?", options: ["Hace que las luces brillen más", "Solo es para el día", "Es ilegal", "Vaciarla del todo acorta su vida, así que se dimensiona para usar un 80%"], answer: 3, why: "Dejar algo de carga en la batería la protege, por eso el dimensionamiento cuenta solo con una parte utilizable." },
          { objective: "O3", q: "¿Dónde debe ir un fusible?", options: ["Cerca de la batería, como indica el fabricante", "En el techo", "Dentro de la bombilla", "En cualquier lugar, o en ninguno"], answer: 0, why: "Un fusible cerca de la batería protege el cableado de un cortocircuito en la batería." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantenerlo funcionando y llevar un negocio solar",
      lessons: [
        {
          title: "Mantenimiento y búsqueda de fallas sencillas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hacer el mantenimiento de rutina y encontrar fallas sencillas paso a paso.",
          text: [
            "Un sistema bien cuidado dura años. Enseña al cliente: limpiar el panel con agua y un paño suave cuando tenga polvo, temprano por la mañana o al atardecer, cuando está fresco (nunca con jabón que deje una capa, y nunca pararse encima). Cortar las ramas que den sombra nueva. Mantener la batería limpia y seca. Apagar los aparatos que no se necesitan.",
            "Cuando un cliente dice \"las luces se apagan temprano\", revisa en este orden: (1) Panel: ¿está sucio o tiene sombra ahora? (2) Conexiones: ¿hay cables o enchufes flojos, rotos o con corrosión? (3) Controlador: ¿qué muestran sus luces o su pantalla? Lee el manual para saber qué significan. (4) Batería: ¿está vieja, hinchada, caliente o goteando? (5) Cargas: ¿la familia agregó un televisor más grande o más bombillas de las previstas al dimensionar el sistema?",
            "Muchas fallas son suciedad, sombra, enchufes flojos o cargas de más. Una batería hinchada, muy caliente o que gotea debe reemplazarse; nunca la cargues ni la abras. Las baterías viejas son residuos electrónicos: nunca las quemes, entierres ni tires; entrégalas a un recolector autorizado o al programa de devolución de la empresa del kit.",
            "Ejemplo: Chinedu, en Kano, recibe una llamada: las luces se apagan a las 8 de la noche. Encuentra una rama nueva que da sombra al panel y un segundo televisor conectado. Corta la rama con permiso del dueño y explica el tamaño del sistema; la familia decide agregar un segundo panel."
          ],
          steps: ["Revisa el panel: ¿limpio y sin sombra?", "Revisa las conexiones: ¿flojas, rotas o con corrosión?", "Compara las luces o la pantalla del controlador con el manual.", "Revisa la batería: ¿vieja, hinchada, caliente o goteando?", "Revisa las cargas: ¿más aparatos o más grandes de lo previsto?"],
          words: [["Corrosión", "una costra verde o blanca en las conexiones de metal que no deja pasar bien la corriente."], ["Programa de devolución", "un programa de una empresa para recoger sus productos viejos y reciclarlos con seguridad."]],
          slides: [
            { title: "Cuidados de rutina", bullets: ["Limpia el panel con agua y un paño suave cuando esté fresco", "Corta la sombra nueva; batería limpia y seca", "Apaga lo que no se necesita"] },
            { title: "Buscar fallas en orden", bullets: ["1. Panel: ¿sucio o con sombra?", "2. Conexiones: ¿flojas o con corrosión?", "3. Luces del controlador; 4. Batería; 5. Cargas de más"] },
            { title: "Alerta con la batería", bullets: ["Hinchada, muy caliente o goteando: reemplázala", "Nunca cargues ni abras una batería dañada", "Baterías viejas: recolector autorizado o devolución"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Escribe una tarjeta de mantenimiento para un cliente (cuatro líneas de cuidados de rutina) y una lista de cinco pasos para buscar fallas que llevarás a cada visita.",
          youCanNow: "enseñar a un cliente a cuidar su sistema y encontrar fallas sencillas en el orden correcto.",
          quickCheck: [
            { objective: "O4", q: "Las luces se apagan temprano. ¿Qué revisas primero?", options: ["El color de la batería", "Si el panel está sucio o tiene sombra", "El teléfono del cliente", "El precio del kit"], answer: 1, why: "Empieza por el panel: la suciedad y la sombra nueva son causas comunes y fáciles." },
            { objective: "O4", q: "Encuentras una batería hinchada y caliente. ¿Qué haces?", options: ["Reemplazarla; no cargarla ni abrirla", "Cargarla más tiempo", "Abrirla para ver por dentro", "Quemarla"], answer: 0, why: "Una batería hinchada y caliente es peligrosa y debe reemplazarse con seguridad." }
          ]
        },
        {
          title: "Vender con honestidad: al contado y con pago por uso",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar el precio al contado y las condiciones del pago por uso para que el cliente pueda decir el total que pagará.",
          text: [
            "Muchas familias no pueden pagar todo el precio de una vez, así que muchas empresas venden kits con pago por uso (PAYGo, del inglés pay-as-you-go). El cliente paga un anticipo y luego pagos pequeños, a menudo diarios, semanales o mensuales, con dinero móvil. Si deja de pagar, el kit se bloquea hasta que pague otra vez. Después del último pago, el kit es del cliente.",
            "El PAYGo ayuda a las familias a tener energía solar antes, pero el total suele ser mayor que el precio al contado. Un vendedor honesto muestra los dos. Ejemplo (las cifras son solo ejemplos): precio al contado KES 20,000. PAYGo: anticipo de KES 2,000 y luego KES 1,500 al mes durante 18 meses: 2,000 + (1,500 x 18) = KES 29,000 en total. El cliente debe poder decir ese total antes de firmar.",
            "GOGLA, la asociación de la industria solar fuera de la red, tiene un código de protección del consumidor basado en la venta y los precios responsables (no vender más de lo que la familia puede pagar), la transparencia (información clara y honesta), un trato justo y respetuoso, un buen servicio y la calidad del producto. Síguelo aunque tu empresa no lo haya firmado.",
            "Nunca prometas más de lo que el sistema puede alimentar. Nunca pidas a un cliente el PIN de su dinero móvil; los pagos van al número oficial o a la caja de la empresa, y una empresa real nunca pide un PIN."
          ],
          steps: ["Muestra el precio al contado.", "Muestra el anticipo del PAYGo, el monto de cada pago, cada cuánto y durante cuánto tiempo.", "Calcula con el cliente el costo total del PAYGo.", "Explica qué pasa si se atrasa un pago, y la garantía.", "Comprueba que el cliente puede hacer los pagos; nunca pidas un PIN."],
          words: [["PAYGo (pago por uso)", "comprar un kit con un anticipo y pagos pequeños; se bloquea si dejas de pagar y es tuyo después del último pago."], ["Anticipo", "el primer pago, antes de que el cliente se lleve el kit."], ["Protección del consumidor", "reglas y costumbres para tratar a los clientes con justicia y honestidad."]],
          slides: [
            { title: "Cómo funciona el PAYGo", bullets: ["Anticipo y luego pagos pequeños con dinero móvil", "El kit se bloquea si se dejan de hacer los pagos", "El cliente es dueño después del último pago"] },
            { title: "Muestra el total", bullets: ["El total del PAYGo suele ser mayor que al contado", "Ejemplo: 2,000 + 1,500 x 18 = KES 29,000 frente a KES 20,000 al contado", "El cliente puede decir el total antes de firmar"] },
            { title: "Vende con justicia (código GOGLA)", bullets: ["Venta responsable: solo lo que pueden pagar", "Transparencia; trato justo y respetuoso", "Buen servicio y calidad"] },
            { title: "Nunca", bullets: ["Prometas más de lo que el sistema puede alimentar", "Pidas un PIN de dinero móvil"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "Para un kit que conozcas (o el del ejemplo), escribe el precio al contado y las condiciones del PAYGo lado a lado, y calcula el costo total del PAYGo. Practica explicarlo en voz alta en menos de un minuto.",
          youCanNow: "explicar con honestidad los precios al contado y con pago por uso para que el cliente sepa el total antes de firmar.",
          quickCheck: [
            { objective: "O5", q: "Anticipo PAYGo de XOF 10,000 y luego XOF 5,000 al mes durante 12 meses. ¿Cuál es el total?", options: ["XOF 15,000", "XOF 60,000", "XOF 50,000", "XOF 70,000"], answer: 3, why: "10,000 + (5,000 x 12) = 70,000." },
            { objective: "O5", q: "¿Cuál es una venta honesta?", options: ["Ocultar el costo total del PAYGo", "Prometer que el kit hará funcionar un refrigerador cuando no puede", "Mostrar el precio al contado y el costo total del PAYGo lado a lado", "Vender a una familia más de lo que puede pagar"], answer: 2, why: "La transparencia significa mostrar los dos precios con claridad." }
          ]
        },
        {
          title: "Escribir un presupuesto y llevar tu negocio solar",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Escribir un presupuesto completo y honesto para un hogar.",
          text: [
            "Un buen presupuesto gana confianza. Muestra al cliente lo que pidió alimentar, la tabla de energía, el sistema que elegiste y por qué, el precio, las condiciones de pago y la garantía. También lleva tu nombre, tu número de teléfono y la fecha.",
            "Tu propio precio por una instalación debe cubrir el kit, los cables y accesorios, el transporte hasta la casa, tu tiempo y una ganancia. Ejemplo (las cifras son solo ejemplos): kit MAD 2,500, cables y accesorios MAD 300, transporte MAD 150, mano de obra MAD 400: costo MAD 3,350. Suma MAD 400 de ganancia: MAD 3,750.",
            "Después de la instalación, da al cliente una tarjeta: los pasos de mantenimiento, qué significan las luces del controlador, la garantía y tu número para cualquier problema. Vuelve al mes para revisar. Los clientes contentos te mandan a sus vecinos; así crecen los negocios solares en los pueblos, de Kitui a Kaolack.",
            "Lleva un registro sencillo de cada trabajo: el cliente, el kit y su número de serie, la fecha, el precio y las visitas de reparación. Te ayuda a cumplir las garantías y a ver qué kits fallan."
          ],
          steps: ["Escribe la tabla de energía y el dimensionamiento que hiciste.", "Nombra el kit y di si está certificado o tiene garantía por escrito.", "Agrega tu lista de seguridad.", "Muestra el precio al contado y las condiciones del PAYGo, si las hay, con el total.", "Adjunta la tarjeta de mantenimiento y garantía, con tu nombre, tu número y la fecha."],
          words: [["Presupuesto", "una oferta por escrito que muestra lo que vas a dar y hacer, y el precio."], ["Número de serie", "el número único de un producto, que se usa para su garantía."], ["Visita de reparación", "una visita de vuelta para arreglar un problema después de la instalación."]],
          slides: [
            { title: "Qué muestra un presupuesto", bullets: ["Lo que quieren alimentar: tabla de energía", "El sistema y por qué; certificado o con garantía", "Precio, condiciones, garantía; tu nombre, número y fecha"] },
            { title: "El precio de tu instalación", bullets: ["Kit + cables + transporte + mano de obra + ganancia", "Ejemplo: costo MAD 3,350 + MAD 400 = MAD 3,750", "Las cifras son solo ejemplos"] },
            { title: "Después del trabajo", bullets: ["Tarjeta de mantenimiento y garantía", "Vuelve a visitar al mes", "Registro: cliente, kit, número de serie, fecha, precio"] }
          ],
          tryIt: "Escribe tu presupuesto completo para un hogar, como se describe en la tarea final. Léeselo a un amigo y pídele que te diga el total que pagaría.",
          youCanNow: "escribir un presupuesto completo y honesto para un sistema solar doméstico y llevar un buen registro de cada trabajo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debe aparecer en todo presupuesto?", options: ["El PIN de dinero móvil del cliente", "El total que pagará el cliente y la garantía", "La promesa de energía gratis para siempre", "Solo los precios de tu competencia"], answer: 1, why: "El costo total y la garantía permiten al cliente decidir con justicia." },
            { objective: "O2", q: "¿Por qué poner la tabla de energía en el presupuesto?", options: ["Muestra cómo dimensionaste el sistema según el uso real de la familia", "Para que el presupuesto sea más largo", "A los clientes les gustan los números", "No hace falta"], answer: 0, why: "La tabla muestra que el sistema corresponde a lo que la familia va a alimentar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantenerlo funcionando y vender",
        questions: [
          { objective: "O4", q: "¿Cómo debe limpiar un cliente un panel con polvo?", options: ["Con jabón al mediodía", "Parándose encima y tallando", "Con agua y un paño suave cuando está fresco", "Con arena"], answer: 2, why: "El agua y un paño suave, con el panel fresco, limpian sin dañarlo." },
          { objective: "O4", q: "Las luces se apagan temprano y el panel está limpio y sin sombra. ¿Qué revisas después?", options: ["El canal de televisión del cliente", "Las conexiones: cables flojos, rotos o con corrosión", "El pronóstico del tiempo", "Nada más"], answer: 1, why: "Las conexiones son lo siguiente en el orden de búsqueda de fallas." },
          { objective: "O4", q: "¿Qué debe pasar con una batería solar vieja?", options: ["Quemarla", "Enterrarla", "Tirarla al río", "Entregarla a un recolector autorizado o a un programa de devolución"], answer: 3, why: "Las baterías viejas son residuos electrónicos y necesitan un reciclaje seguro." },
          { objective: "O5", q: "¿Qué pasa en el PAYGo cuando se dejan de hacer los pagos?", options: ["El kit se bloquea hasta que el cliente vuelva a pagar", "El cliente es dueño de inmediato", "El panel se rompe", "No pasa nada"], answer: 0, why: "Los kits PAYGo se bloquean cuando se dejan de hacer los pagos y se desbloquean al pagar." },
          { objective: "O5", q: "Un cliente solo puede pagar la mitad de la cuota mensual. ¿Qué significa vender de forma responsable?", options: ["Venderle el kit grande de todos modos", "Ocultar el monto de los pagos", "Ofrecerle un kit más pequeño o un plan que pueda pagar", "Pedirle su PIN"], answer: 2, why: "La venta responsable significa no vender más de lo que la familia puede pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Sistemas solares domésticos: instalar, vender y crear un negocio de energía fuera de la red",
    questions: [
      { objective: "O1", q: "¿Qué parte guarda la energía para la noche?", options: ["El panel", "La batería", "El fusible", "La luz"], answer: 1, why: "La batería guarda la energía para usarla cuando no hay sol." },
      { objective: "O1", q: "¿Qué es VeraSol?", options: ["Una marca de baterías", "Una empresa solar que vende con PAYGo", "Un programa de calidad independiente que certifica kits solares fuera de la red", "Un impuesto del gobierno"], answer: 2, why: "VeraSol es un programa independiente de garantía de calidad para la energía solar fuera de la red." },
      { objective: "O1", q: "Un kit no tiene etiqueta, ni certificación, ni garantía. ¿Qué haces?", options: ["Pedir una garantía por escrito y resultados de pruebas, o elegir un kit certificado", "Venderlo como certificado", "Venderlo más caro", "Instalarlo sin decírselo a nadie"], answer: 0, why: "Sin prueba de calidad, pide una garantía y resultados de pruebas, o elige un kit certificado." },
      { objective: "O1", q: "¿Por qué los kits pequeños suelen usar aparatos de CC?", options: ["Suenan más fuerte", "Necesitan la red", "Siempre son gratis", "Usan menos energía que los aparatos de CA con inversor"], answer: 3, why: "Los aparatos de CC evitan las pérdidas del inversor y usan menos energía." },
      { objective: "O2", q: "Una radio usa 5 W durante 6 horas al día. ¿Cuántos Wh son?", options: ["11 Wh", "30 Wh", "56 Wh", "1 Wh"], answer: 1, why: "5 x 6 = 30 Wh." },
      { objective: "O2", q: "¿Por qué sumar alrededor de un 30% al total diario?", options: ["Por las pérdidas en los cables, el controlador y la batería", "Por la ganancia", "Por los impuestos", "Por el saldo del teléfono del cliente"], answer: 0, why: "Se pierde energía en el camino, así que el sistema debe producir más de lo que usan las cargas." },
      { objective: "O2", q: "Necesidad diaria de 300 Wh y 5 horas de sol pico. ¿Cuál es el panel más pequeño según el cálculo?", options: ["1,500 W", "30 W", "6 W", "60 W"], answer: 3, why: "300 / 5 = 60 W; luego redondea hacia arriba al siguiente tamaño de panel." },
      { objective: "O2", q: "Necesidad diaria de 240 Wh, batería de litio usada hasta un 80%, 12 V. ¿Cuántos amperios-hora, más o menos?", options: ["Unos 25 Ah", "Unos 12 Ah", "Unos 300 Ah", "Unos 2 Ah"], answer: 0, why: "240 / 0.8 = 300 Wh; 300 / 12 = 25 Ah." },
      { objective: "O3", q: "Un cliente vive en el norte de Ghana, al norte del ecuador. ¿Hacia dónde debe mirar el panel?", options: ["Hacia el norte", "Hacia arriba, sin ninguna inclinación", "Hacia el sur, hacia el ecuador", "Solo hacia el este"], answer: 2, why: "Al norte del ecuador, los paneles miran al sur, hacia el ecuador, con una pequeña inclinación." },
      { objective: "O3", q: "¿Dónde debe ir la batería?", options: ["En el techo, al sol", "Junto al fuego de la cocina", "Dentro de la casa, seca, a la sombra, ventilada, sin tocar el suelo y lejos de los niños", "En una caja cerrada sin aire"], answer: 2, why: "Lo más seguro es un lugar seco, a la sombra y ventilado, lejos de los niños y del fuego." },
      { objective: "O3", q: "En la mayoría de los kits con controlador separado, ¿qué conectas primero?", options: ["El panel a las cargas", "La batería al controlador", "Las cargas a la red", "El panel directo a la batería"], answer: 1, why: "Conectar primero la batería al controlador permite que el controlador se configure; luego el panel y después las cargas, salvo que el manual diga otra cosa." },
      { objective: "O3", q: "¿Qué trabajo queda fuera de este curso y necesita un electricista con licencia?", options: ["Limpiar el panel", "Colocar la batería", "Poner el fusible del fabricante", "Conectar el sistema a la red o al cableado eléctrico de la casa"], answer: 3, why: "El trabajo en la red y en el cableado de la casa es solo para electricistas con licencia." },
      { objective: "O3", q: "¿Por qué mantener las baterías de plomo-ácido ventiladas y lejos de las llamas?", options: ["Sueltan un gas inflamable al cargarse", "Se enfrían demasiado", "Atraen insectos", "Necesitan luz del sol"], answer: 0, why: "Al cargarse, las baterías de plomo-ácido sueltan un gas inflamable." },
      { objective: "O4", q: "¿Cuál es el mejor momento para limpiar un panel?", options: ["Al mediodía, a pleno sol", "Temprano por la mañana o al atardecer, cuando está fresco", "Durante una tormenta", "Nunca"], answer: 1, why: "Un panel fresco es más seguro de tocar y limpiar que uno caliente a pleno sol." },
      { objective: "O4", q: "¿Cuál es el orden correcto para buscar fallas?", options: ["La batería, y luego adivinar", "Las cargas, y luego comprar un kit nuevo", "Panel, conexiones, controlador, batería, cargas", "Solo el controlador"], answer: 2, why: "Revisar en este orden encuentra primero las causas comunes y fáciles." },
      { objective: "O4", q: "Una familia agregó un televisor grande y ahora las luces se apagan temprano. ¿Cuál es la causa probable?", options: ["El panel está al revés", "El sol es más débil", "El fusible es demasiado fuerte", "Más carga de la prevista al dimensionar el sistema"], answer: 3, why: "Las cargas de más usan más energía de la que el sistema produce y guarda." },
      { objective: "O5", q: "Precio al contado NGN 150,000. PAYGo: anticipo de NGN 20,000 y luego NGN 12,000 al mes durante 12 meses. ¿Cuál es el total del PAYGo?", options: ["NGN 164,000", "NGN 144,000", "NGN 32,000", "NGN 150,000"], answer: 0, why: "20,000 + (12,000 x 12) = 164,000." },
      { objective: "O5", q: "¿Quién le pedirá a un cliente el PIN de su dinero móvil?", options: ["La empresa solar", "Tu jefe", "Ninguna empresa real: solo los estafadores", "El instalador"], answer: 2, why: "Una empresa real nunca pide un PIN." },
      { objective: "O5", q: "¿Qué forma parte del código de protección del consumidor de GOGLA?", options: ["Vender el kit más grande a todos", "Transparencia: información clara y honesta", "Ocultar el precio total", "Ningún servicio después de la venta"], answer: 1, why: "La transparencia y la venta responsable son principios centrales." },
      { objective: "O5", q: "Kit EGP 4,000, cables EGP 500, transporte EGP 300, mano de obra EGP 700, ganancia EGP 500. ¿Cuál es tu precio?", options: ["EGP 5,500", "EGP 4,500", "EGP 5,000", "EGP 6,000"], answer: 3, why: "4,000 + 500 + 300 + 700 + 500 = 6,000." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte de tu presupuesto y vuelve a intentarlo.",
    criteria: [
      { name: "Calidad comprobada", objective: "O1", notYet: "No se nombra el kit, o no se comprueba la calidad.", meets: "Se nombran el kit y sus partes, y el presupuesto anota si está en la base de datos de VeraSol o tiene garantía por escrito.", exceeds: "Además explica al cliente por qué importa un kit certificado." },
      { name: "Bien dimensionado", objective: "O2", notYet: "No hay tabla de energía, o la aritmética está mal.", meets: "La tabla de energía, el margen del 30% y los tamaños del panel y la batería están bien calculados.", exceeds: "Además tiene en cuenta los días nublados o los meses más nublados, y dice de dónde salió la cifra de horas de sol." },
      { name: "Instalación segura", objective: "O3", notYet: "No hay lista de seguridad, o incluye trabajo en la red o en el cableado de la casa.", meets: "La lista cubre dónde poner el panel, la seguridad con la escalera, dónde poner la batería, la polaridad, el fusible y el orden de conexión, sin trabajo en la red.", exceeds: "Además nombra el regulador de energía al que consultar sobre licencias." },
      { name: "Cuidados y fallas", objective: "O4", notYet: "No hay tarjeta de mantenimiento, o da consejos peligrosos.", meets: "La tarjeta da los cuidados de rutina y el orden de cinco pasos para buscar fallas, y dice qué hacer con las baterías viejas.", exceeds: "Además explica las luces del controlador de este kit." },
      { name: "Precio y condiciones honestos", objective: "O5", notYet: "Falta el costo total del PAYGo o la garantía, o la aritmética está mal.", meets: "El precio al contado, las condiciones del PAYGo si las hay y el total correcto aparecen lado a lado, con la garantía y el contacto del instalador.", exceeds: "Además comprueba que los pagos caben en el presupuesto de la familia y dice qué pasa si se atrasa un pago." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen haber escrito un presupuesto con tabla de energía para un cliente real en 30 días (encuesta de seguimiento)",
      "Participantes que dicen haber vendido o instalado un kit certificado en 90 días",
      "Participantes que no reportan incendios de baterías, descargas eléctricas ni quejas de clientes por costos ocultos en 90 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono básico con calculadora; datos para una búsqueda corta en la base de datos de VeraSol, si es posible",
      "Papel y lápiz para la tabla de energía, la lista de seguridad, la tarjeta de mantenimiento y el presupuesto",
      "Si es posible, un kit solar pequeño certificado para mirarlo y nombrar sus partes",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "En un grupo de jóvenes, de formación profesional o de mujeres: hagan juntos la prueba inicial y luego un capítulo por sesión, con los participantes dimensionando un sistema para una casa real que conozcan.",
      "La instalación práctica solo debe hacerse bajo la guía de un instalador con experiencia, con kits pequeños de CC; nunca dejes que los participantes trabajen en la red, en el cableado de la casa ni en inversores.",
      "Antes del curso, averigua si tu país da licencias a los técnicos solares y qué recolectores de residuos electrónicos o programas de devolución hay en tu zona.",
      "Nunca pidas a los participantes que compartan PIN ni contraseñas en clase.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila Todavía no a la vez."
    ]
  }
};
