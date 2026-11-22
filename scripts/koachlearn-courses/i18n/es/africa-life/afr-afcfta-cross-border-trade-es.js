"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-afcfta-cross-border-trade.js). See scripts/koachlearn-courses/README.md, "Translations".

const AFCFTA = { name: "Secretaría de la AfCFTA: acerca de la AfCFTA (55 países de la UA, comercio desde el 1 de enero de 2021, Secretaría en Acra)", url: "https://au-afcfta.org/about/" };
const GTI = { name: "Secretaría de la AfCFTA: Iniciativa de Comercio Guiado (lanzada el 7 de octubre de 2022)", url: "https://au-afcfta.org/operational-instruments/guided-trade-initiative/" };
const ROO = { name: "Secretaría de la AfCFTA: Reglas de origen (Anexo 2 y Manual de Reglas de Origen)", url: "https://au-afcfta.org/operational-instruments/rules-of-origin/" };
const NTB = { name: "Mecanismo de la AfCFTA para denunciar, vigilar y eliminar las barreras no arancelarias", url: "https://www.tradebarriers.africa/" };
const PAPSS = { name: "Sistema Panafricano de Pagos y Liquidación (PAPSS)", url: "https://papss.com/" };
const ETLS = { name: "Esquema de Liberalización del Comercio de la CEDEAO (ETLS), Comisión de la CEDEAO", url: "https://etls.ecowas.int/" };
const COMESA = { name: "COMESA: comercio y aduanas (incluido el Régimen Comercial Simplificado para pequeños comerciantes)", url: "https://www.comesa.int/trade-customs-division-2/" };

module.exports = {
  id: "afr-afcfta-cross-border-trade-es",
  lang: "es",
  translationOf: "afr-afcfta-cross-border-trade",
  category: "Africa: Life and Work",
  name: "Vender más allá de la frontera: los pequeños comerciantes y la AfCFTA",
  skills: "Explicar la AfCFTA y los acuerdos comerciales regionales, Preparar los papeles para un paso fronterizo oficial, Calcular el costo de un lote en dos monedas, Cobrar de forma segura desde otro país, Denunciar cobros no oficiales y barreras comerciales",
  outcome: "planear una venta legal, segura y rentable en otro país: revisar las reglas que se aplican a tu mercancía, preparar los papeles correctos, calcular el costo total y el precio en las dos monedas, elegir una forma segura de cobrar y saber qué hacer si alguien te pide un pago no oficial.",
  about: [
    "Este curso es para pequeños comerciantes, vendedoras de mercado, artesanos y pequeños fabricantes de toda África que venden, o quieren vender, a un país vecino: manteca de karité de Tamale a Uagadugú, telas de Lagos a Cotonú, zapatos de Nairobi a Kampala o cosméticos de Dakar a Bamako.",
    "El capítulo 1 explica la Zona de Libre Comercio Continental Africana (AfCFTA, por sus siglas en inglés) y los acuerdos regionales que ya ayudan a los pequeños comerciantes, y los papeles que necesitas en un paso fronterizo oficial. El capítulo 2 trata del dinero: el costo total de un lote, cómo cobrar de forma segura y qué hacer ante cobros no oficiales y retrasos.",
    "Los aranceles, las tarifas, los formularios y los límites cambian de un país a otro y con el tiempo. Este curso no da cifras de aranceles ni de tarifas. Te dice a qué oficina preguntar, y tú lo compruebas antes de viajar. Todas las cantidades de dinero son solo ejemplos. Cada lección dura unos cinco minutos y termina con una tarea. Después de cada lección hay una comprobación rápida, una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de comercio transfronterizo de una página para un producto y una ruta (la tuya, o un ejemplo como manteca de karité de Tamale, Ghana, a Uagadugú, Burkina Faso): el producto y el paso fronterizo oficial, las reglas que revisaste y dónde, la lista de papeles que llevarás, el costo total y tu precio de venta en las dos monedas, cómo te van a pagar y cómo te protegerás de las estafas, y qué harás y ante quién lo denunciarás si alguien te pide un pago no oficial.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños comerciantes, vendedoras de mercado, artesanos y pequeños fabricantes de pueblos y zonas fronterizas de toda África (Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Burkina Faso, Camerún y otros países) que venden o quieren vender a un país vecino.",
    startingPoint: "Muchos ya comercian con otros países, a menudo de manera informal, llevando mercancía por los pasos fronterizos o usando transportistas. Pocos conocen la AfCFTA o su acuerdo regional, qué papeles les dan aranceles más bajos, cómo calcular el costo de un lote en dos monedas o dónde denunciar los cobros no oficiales.",
    gap: "Los comerciantes informales suelen pagar cobros no oficiales, pierden mercancía en la frontera, venden con pérdida después de pagar el cambio y el transporte, y caen en estafas de pago. Conocer las reglas, llevar los papeles correctos, calcular bien los costos y denunciar las barreras les permite comerciar legalmente, ganar más y crecer.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; se explica cada término de comercio",
      "Dispositivos: un teléfono Android sencillo con datos caros; una calculadora y un cuaderno",
      "Las reglas, los aranceles, las tarifas y los límites cambian según el país y con el tiempo: los participantes consultan a las oficinas de aduanas y de comercio; el curso no da cifras de aranceles ni de tarifas",
      "Seguridad del dinero: no se comparten PIN ni contraseñas; no hay consejos de inversión",
      "El curso también se traduce al francés y al árabe, por eso los ejemplos incluyen comerciantes francófonos y del norte de África"
    ],
    prerequisites: "Saber leer lo básico y usar un teléfono. Los cursos \"Usar el dinero móvil de forma segura\" y \"Registrar y llevar un pequeño negocio en África\" ayudan, pero no son obligatorios."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con tu producto y el país donde quieres vender", action: "explicar lo que la AfCFTA y tu acuerdo comercial regional pueden hacer por un pequeño comerciante y nombrar las oficinas donde revisar las reglas vigentes", standard: "nombrando al menos dos oficinas o sitios web oficiales" },
    { id: "O2", condition: "Antes de llevar mercancía por un paso fronterizo oficial", action: "hacer la lista de papeles y pasos que necesita tu mercancía, como recibos, una factura, una declaración de aduana y un certificado de origen", standard: "con cada papel de la lista confirmado con la aduana o una oficina de información comercial" },
    { id: "O3", condition: "Con los costos de un lote y un tipo de cambio", action: "calcular el costo total por artículo y un precio de venta en las dos monedas", standard: "incluyendo todos los costos y una ganancia, con las cuentas correctas" },
    { id: "O4", condition: "Cuando un comprador de otro país te paga", action: "elegir una forma segura de recibir el dinero y reconocer las señales de alerta de una estafa de pago", standard: "sin compartir nunca un PIN ni enviar la mercancía antes de confirmar el dinero" },
    { id: "O5", condition: "Cuando alguien en la frontera o cerca de ella te pide un pago no oficial o retiene tu mercancía", action: "describir los pasos seguros que debes seguir y denunciar el problema como una barrera no arancelaria", standard: "nombrando el canal oficial de denuncia y los datos que hay que anotar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Las reglas y los papeles",
      lessons: [
        {
          title: "Lo que la AfCFTA significa para un pequeño comerciante",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar con tus propias palabras qué es la AfCFTA y cómo puede ayudar a tu negocio.",
          text: [
            "La Zona de Libre Comercio Continental Africana (AfCFTA, por sus siglas en inglés) es un acuerdo entre los 55 países de la Unión Africana para crear un gran mercado de unos 1,300 millones de personas. El comercio bajo este acuerdo empezó el 1 de enero de 2021. Su Secretaría está en Acra, Ghana.",
            "La idea principal: con el tiempo, los países que se han unido bajan o quitan los aranceles de importación a los productos hechos en otros países miembros, y trabajan para quitar otras barreras, como los retrasos largos y los papeles de más. Para obtener el arancel más bajo, tu mercancía debe \"ser originaria\" de un país miembro según las reglas de origen. Los productos que solo se compran fuera de África y se revenden no califican.",
            "No todos los países lo aplican de la misma manera ni a la misma velocidad, y todavía no se cubren todos los productos. La Iniciativa de Comercio Guiado, lanzada el 7 de octubre de 2022, inició el comercio real con las reglas de la AfCFTA en un grupo de países. Por eso, antes de contar con un arancel más bajo, pregunta a tu autoridad de aduanas, a tu ministerio de comercio o cámara de comercio, y revisa el sitio web de la AfCFTA.",
            "Aunque la AfCFTA todavía no funcione para tu producto, los acuerdos regionales quizá ya te ayuden. Eso es la siguiente lección."
          ],
          words: [["AfCFTA", "la Zona de Libre Comercio Continental Africana: un acuerdo para hacer de África un gran mercado con aranceles más bajos y menos barreras."], ["Arancel de importación", "un impuesto que cobra un país sobre los productos que entran desde otro país."], ["Reglas de origen", "las reglas que deciden de qué país \"es originario\" un producto, para que pueda obtener el arancel más bajo."]],
          slides: [
            { title: "Qué es la AfCFTA", bullets: ["55 países de la Unión Africana, un gran mercado", "Unos 1,300 millones de personas", "Comercio desde el 1 de enero de 2021; Secretaría en Acra"] },
            { title: "Lo que puede hacer por ti", bullets: ["Aranceles más bajos o nulos para productos de países miembros", "Menos retrasos y papeles de más con el tiempo", "Mercados más grandes al lado"] },
            { title: "La condición", bullets: ["La mercancía debe cumplir las reglas de origen", "Los países lo aplican a distintas velocidades", "Todavía no se cubren todos los productos"] },
            { title: "Compruébalo antes de contar con ello", bullets: ["Tu autoridad de aduanas", "Ministerio de comercio o cámara de comercio", "au-afcfta.org"] }
          ],
          sources: [AFCFTA, GTI, ROO],
          tryIt: "Escribe un producto que vendes o podrías vender, y un país vecino donde podrías venderlo. Luego escribe dos lugares donde comprobarás si la AfCFTA baja el arancel de ese producto.",
          youCanNow: "decir qué es la AfCFTA, cómo puede ayudar a un pequeño comerciante y dónde comprobar si se aplica a tu mercancía.",
          quickCheck: [
            { objective: "O1", q: "¿Qué busca principalmente la AfCFTA para los comerciantes?", options: ["Fijar los precios de todos los productos en África", "Bajar los aranceles y las barreras para los productos hechos en países miembros", "Crear una sola moneda para toda África", "Acabar con todos los controles en la frontera"], answer: 1, why: "La AfCFTA busca bajar los aranceles y las barreras para los productos originarios de países miembros; no fija precios, no crea una moneda única y no acaba con los controles." },
            { objective: "O1", q: "Un comerciante compra fundas de teléfono hechas fuera de África y quiere revenderlas en el país vecino con la AfCFTA. ¿Qué es cierto?", options: ["Siempre pagará cero arancel", "La AfCFTA solo cubre alimentos", "Probablemente no califica, porque la mercancía no se hizo en un país miembro", "No necesita ningún papel"], answer: 2, why: "Según las reglas de origen, los productos que solo se compran fuera de África y se revenden no son originarios de un país miembro." }
          ]
        },
        {
          title: "Acuerdos regionales que ya ayudan a los pequeños comerciantes",
          objectives: ["O1"],
          minutes: 5,
          goal: "Encontrar el acuerdo comercial regional de tu ruta y la oficina que lo explica.",
          text: [
            "Antes de la AfCFTA, las comunidades económicas regionales de África ya facilitaban el comercio. En África occidental, el Esquema de Liberalización del Comercio de la CEDEAO (ETLS, por sus siglas en inglés) permite que los productos aprobados de los países de la CEDEAO (Comunidad Económica de los Estados de África Occidental) circulen entre los países miembros con aranceles más bajos o sin aranceles. Senegal, Malí, Costa de Marfil, Ghana y Nigeria son miembros de la CEDEAO.",
            "En África oriental y austral, la Comunidad de África Oriental (EAC) y el COMESA (Mercado Común de África Oriental y Austral) tienen Regímenes Comerciales Simplificados para pequeños comerciantes. Permiten que pequeños envíos de productos de una lista crucen con papeles más sencillos, como un certificado de origen simplificado. Algunos puestos fronterizos tienen oficinas de información comercial donde los funcionarios explican las reglas a los pequeños comerciantes, sin costo.",
            "Cada acuerdo fija sus límites de valor, su lista de productos y sus formularios, y pueden cambiar. Pregunta en la oficina de aduanas de tu paso fronterizo, en la oficina de información comercial o en tu asociación de comerciantes transfronterizos. Anota lo que te digan, con la fecha y el nombre del funcionario.",
            "África central (por ejemplo Camerún) y el norte de África (por ejemplo Marruecos, Egipto y Túnez) también tienen sus propios acuerdos regionales. Pregunta a tu autoridad de aduanas cuáles se aplican a tu ruta."
          ],
          steps: ["Escribe tu ruta: desde qué país, por qué paso fronterizo y hacia qué país.", "Busca la comunidad regional a la que pertenecen los dos países (por ejemplo CEDEAO, EAC o COMESA).", "Pregunta en la aduana, la oficina de información comercial o la asociación de comerciantes qué acuerdo puede usar tu mercancía.", "Pregunta: qué productos califican, qué límite de valor se aplica y qué formulario o certificado necesitas.", "Anota las respuestas con la fecha y el nombre del funcionario."],
          words: [["Comunidad económica regional", "un grupo de países vecinos que trabajan juntos en el comercio, por ejemplo la CEDEAO, la EAC o el COMESA."], ["Régimen Comercial Simplificado", "un arreglo de la EAC o del COMESA que permite a los pequeños comerciantes cruzar con pequeñas cargas de productos de una lista y con papeles más sencillos."], ["Envío", "una carga o lote de mercancía que mandas o llevas."]],
          slides: [
            { title: "Los acuerdos regionales ayudan ya", bullets: ["África occidental: Esquema de Liberalización del Comercio de la CEDEAO (ETLS)", "África oriental y austral: Regímenes Comerciales Simplificados de la EAC y el COMESA", "África central y del norte: sus propios acuerdos"] },
            { title: "Reglas simplificadas para pequeños comerciantes", bullets: ["Pequeñas cargas de productos de una lista", "Papeles más sencillos, como un certificado de origen simplificado", "Oficinas de información comercial en algunos puestos fronterizos"] },
            { title: "Pregunta y anótalo", bullets: ["¿Qué productos califican? ¿Qué límite de valor?", "¿Qué formulario o certificado?", "Anota la fecha y el nombre del funcionario"] }
          ],
          sources: [ETLS, COMESA],
          tryIt: "Para tu ruta de la lección 1, escribe la comunidad regional a la que pertenecen los dos países y tres preguntas que harás en la oficina de aduanas o de información comercial.",
          youCanNow: "encontrar el acuerdo regional de tu ruta y hacer las preguntas correctas en la oficina correcta.",
          quickCheck: [
            { objective: "O1", q: "¿Qué acuerdo es más probable que se aplique a una comerciante que lleva manteca de karité de Ghana a Burkina Faso?", options: ["El Régimen Comercial Simplificado del COMESA", "La Unión Aduanera de la EAC", "Ningún acuerdo", "El Esquema de Liberalización del Comercio de la CEDEAO"], answer: 3, why: "Ghana y Burkina Faso están en la región de la CEDEAO, en África occidental, así que hay que preguntar por el ETLS." },
            { objective: "O1", q: "Quieres saber el límite de valor para un certificado simplificado en tu ruta. ¿Qué haces?", options: ["Preguntar en la oficina de aduanas o de información comercial del paso fronterizo y anotar la respuesta", "Adivinar, porque es igual en todas partes", "Preguntar al chofer del autobús", "Usar la cifra del paso fronterizo de un amigo el año pasado"], answer: 0, why: "Los límites cambian según el acuerdo y con el tiempo, así que hay que preguntar en la aduana o en la oficina de información comercial." }
          ]
        },
        {
          title: "Los papeles que llevas en un paso fronterizo oficial",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hacer la lista de papeles y pasos para llevar tu mercancía por un paso fronterizo oficial.",
          text: [
            "Usar un paso fronterizo oficial te protege. Tu mercancía queda registrada, puedes pedir aranceles más bajos con los acuerdos y tienes pruebas si algo sale mal. La mercancía pasada de contrabando por caminos no oficiales puede ser decomisada, y no tienes ninguna protección.",
            "Los papeles más comunes son: tu documento de identidad o pasaporte; un recibo o factura que muestre lo que compraste o hiciste y su valor; una lista de tu mercancía (lista de empaque); una declaración de aduana, que el funcionario o un agente aduanal te ayuda a llenar; y un certificado de origen cuando quieres un arancel más bajo. Los alimentos, las plantas, los animales, los medicamentos y los cosméticos también pueden necesitar un certificado sanitario, fitosanitario (de sanidad vegetal) o de aprobación del producto.",
            "Algunos productos están restringidos o prohibidos. Pregunta antes de comprar la mercancía. Un agente aduanal puede ayudarte con cargas más grandes, pero pide siempre un recibo por cada pago oficial, y guarda copias de todos los papeles en tu teléfono y en papel.",
            "Ejemplo: Awa vende jabón hecho a mano de Dakar a Bamako. Pregunta en la oficina de aduanas qué papeles necesita, consigue su factura y un certificado de origen, y guarda una foto de cada papel. En la frontera paga solo lo que aparece en el recibo oficial."
          ],
          steps: ["Pregunta en la aduana qué papeles necesita tu mercancía y si alguna está restringida.", "Consigue recibos o facturas de tu mercancía y haz una lista de empaque.", "Consigue un certificado de origen si quieres un arancel más bajo con un acuerdo.", "Pregunta por certificados sanitarios, fitosanitarios o de producto para alimentos, plantas, animales y cosméticos.", "Usa el paso fronterizo oficial, llena la declaración de aduana y guarda un recibo de cada pago.", "Guarda copias de cada papel en papel y como fotos en tu teléfono."],
          words: [["Declaración de aduana", "un formulario que le dice a la aduana qué mercancía llevas y cuál es su valor."], ["Certificado de origen", "un papel que muestra de qué país viene tu mercancía, para que puedas obtener un arancel más bajo."], ["Agente aduanal", "una persona o empresa con licencia que ayuda a los comerciantes a completar los papeles de aduana, a cambio de un pago."], ["Certificado fitosanitario", "un certificado de sanidad vegetal para plantas, semillas, granos, frutas y verduras."]],
          slides: [
            { title: "Por qué usar el paso oficial", bullets: ["Mercancía registrada; puedes pedir aranceles más bajos", "Pruebas si algo sale mal", "La mercancía de contrabando puede ser decomisada"] },
            { title: "Papeles comunes", bullets: ["Identificación o pasaporte; recibo o factura", "Lista de empaque; declaración de aduana", "Certificado de origen para un arancel más bajo"] },
            { title: "Papeles extra para algunos productos", bullets: ["Alimentos, plantas, animales: certificados sanitarios o fitosanitarios", "Cosméticos y medicamentos: aprobación del producto", "Algunos productos están restringidos: pregunta antes de comprar"] },
            { title: "Protégete", bullets: ["Un recibo por cada pago oficial", "Copias en papel y fotos en tu teléfono", "Agente aduanal para cargas más grandes"] }
          ],
          sources: [ROO, ETLS],
          tryIt: "Haz una lista de control de papeles para tu producto y tu ruta: cada papel que crees que necesitas, con una casilla para marcar cuando la aduana o la oficina de información comercial lo confirme.",
          youCanNow: "hacer la lista de papeles y pasos para llevar tu mercancía por un paso fronterizo oficial y guardar pruebas de cada pago.",
          quickCheck: [
            { objective: "O2", q: "¿Qué papel te ayuda a pedir un arancel más bajo con un acuerdo comercial?", options: ["Un boleto de autobús", "Un certificado de origen", "Un recibo del teléfono", "Un certificado escolar"], answer: 1, why: "Un certificado de origen muestra que la mercancía viene de un país miembro, y de eso depende el arancel más bajo." },
            { objective: "O2", q: "Pagas una tarifa en la aduana. ¿Qué debes recibir?", options: ["Nada; las tarifas siempre son informales", "Un apretón de manos", "Un recibo oficial, que guardas", "La promesa de verte la próxima vez"], answer: 2, why: "Un recibo oficial prueba que la tarifa es real y te protege si algo sale mal." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Las reglas y los papeles",
        questions: [
          { objective: "O1", q: "¿Dónde debes comprobar si la AfCFTA baja el arancel de tu producto?", options: ["En una publicación de redes sociales", "Con el primo del comprador", "En tu autoridad de aduanas y en el sitio web de la AfCFTA", "Con cualquier comerciante del mercado"], answer: 2, why: "La aduana y la Secretaría de la AfCFTA dan la respuesta oficial y actual." },
          { objective: "O1", q: "Una comerciante lleva zapatos de Nairobi a Kampala. ¿Por qué régimen simplificado debe preguntar?", options: ["El Esquema de Liberalización del Comercio de la CEDEAO", "No existe ninguno en África oriental", "Un régimen europeo", "El Régimen Comercial Simplificado de la EAC o del COMESA"], answer: 3, why: "Kenia y Uganda están en África oriental, donde la EAC y el COMESA tienen regímenes simplificados para pequeños comerciantes." },
          { objective: "O2", q: "¿Por qué un paso fronterizo oficial es mejor que un camino por el monte?", options: ["Tu mercancía queda registrada y puedes pedir aranceles más bajos y protección", "Siempre es más rápido", "Nadie revisa nada", "Siempre es gratis"], answer: 0, why: "Los pasos oficiales registran la mercancía, te permiten usar los acuerdos comerciales y te dan pruebas y protección." },
          { objective: "O2", q: "Kofi llevará pescado seco a Togo. ¿Qué papel extra podría necesitar?", options: ["Una licencia para un camión que él no maneja", "Un certificado sanitario para alimentos", "Una boleta de calificaciones", "Nada extra para alimentos"], answer: 1, why: "Los alimentos y los productos animales y vegetales suelen necesitar un certificado sanitario o fitosanitario; debe preguntar en la aduana." },
          { objective: "O2", q: "¿Cuál es la mejor forma de guardar tus papeles?", options: ["Solo en tu memoria", "Dárselos al transportista", "Tirarlos después de la frontera", "En papel y como fotos en tu teléfono"], answer: 3, why: "Con las dos copias, todavía tienes pruebas si una se pierde." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dinero, pagos y problemas en la frontera",
      lessons: [
        {
          title: "Calcular el costo de un lote en dos monedas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular el costo total por artículo y un precio de venta en las dos monedas.",
          text: [
            "Muchos comerciantes pierden dinero al vender en otro país porque solo cuentan el costo de la mercancía. Cuéntalo todo: la mercancía, el empaque, el transporte hasta la frontera y más allá, la carga, los aranceles y las tarifas oficiales (confirmados con la aduana), el agente aduanal, el almacenamiento, tu teléfono y tus datos, tu comida y tu alojamiento durante el viaje, y un poco más para las pérdidas.",
            "Suma todos los costos y divide entre el número de artículos que de verdad puedes vender. Ese es tu costo por artículo. Súmale tu ganancia para obtener un precio de venta. Luego conviértelo a la moneda del comprador con el tipo de cambio del día, y revisa el precio de productos parecidos en ese mercado.",
            "Ejemplo (las cifras son solo ejemplos): Ama compra y empaca 100 botes de manteca de karité en Tamale por GHS 2,000 en total. El transporte, la carga y el alojamiento cuestan GHS 600. Tarifas oficiales confirmadas en la aduana: GHS 200. Total GHS 2,800, o sea GHS 28 por bote. Suma GHS 7 de ganancia: GHS 35. Si el cambio del día fuera 1 GHS = 40 XOF, eso es 1,400 XOF por bote. Ella comprueba que las tiendas de Uagadugú venden botes parecidos a más o menos ese precio.",
            "Los tipos de cambio se mueven todos los días. Revisa el tipo de cambio el día que vendes y el día que cambias dinero, y acuerda con tu comprador en qué moneda está el precio."
          ],
          steps: ["Haz la lista de todos los costos del lote, desde la compra hasta la venta.", "Súmalos para obtener el costo total.", "Divide entre el número de artículos que de verdad puedes vender: costo por artículo.", "Suma tu ganancia: precio de venta en tu moneda.", "Conviértelo a la moneda del comprador con el tipo de cambio del día, y compáralo con el precio del mercado allí."],
          words: [["Tipo de cambio", "cuánto recibes de una moneda por una unidad de otra, por ejemplo cuántos XOF por 1 GHS."], ["Costo por artículo", "el costo total de un lote dividido entre el número de artículos que puedes vender."], ["Costo puesto en destino", "el costo total de la mercancía cuando llega al mercado del comprador, incluidos el transporte y los aranceles."]],
          slides: [
            { title: "Cuenta todos los costos", bullets: ["Mercancía, empaque, transporte, carga", "Aranceles y tarifas oficiales, agente, almacenamiento", "Teléfono, comida, alojamiento y algo para pérdidas"] },
            { title: "Del costo al precio", bullets: ["Costo total / artículos que puedes vender = costo por artículo", "Costo por artículo + ganancia = precio de venta", "Luego conviértelo a la moneda del comprador"] },
            { title: "Ejemplo (las cifras son solo ejemplos)", bullets: ["100 botes: GHS 2,800 en total = GHS 28 cada uno", "Suma GHS 7 de ganancia = GHS 35", "A 1 GHS = 40 XOF: 1,400 XOF por bote"] },
            { title: "Vigila el tipo de cambio", bullets: ["El cambio varía todos los días", "Revísalo el día que vendes y cambias dinero", "Acuerda con el comprador en qué moneda"] }
          ],
          tryIt: "Calcula el costo de un lote de tu producto para tu ruta: haz la lista de todos los costos, saca el costo por artículo, suma tu ganancia y escribe el precio en las dos monedas con el tipo de cambio de hoy.",
          youCanNow: "calcular el costo total por artículo de un lote para otro país y un precio de venta en las dos monedas.",
          quickCheck: [
            { objective: "O3", q: "Un lote de 50 bolsas cuesta NGN 250,000 en total, con transporte y tarifas incluidos. ¿Cuál es el costo por bolsa?", options: ["NGN 500", "NGN 50,000", "NGN 2,500", "NGN 5,000"], answer: 3, why: "250,000 entre 50 bolsas da 5,000 por bolsa." },
            { objective: "O3", q: "¿Qué costo olvidan más a menudo los comerciantes?", options: ["Su propio alojamiento, su comida y las pérdidas del viaje", "El precio de la mercancía", "El precio de venta", "El número de artículos"], answer: 0, why: "Los costos del viaje, como el alojamiento, la comida y las pérdidas, se olvidan con facilidad y se comen la ganancia." }
          ]
        },
        {
          title: "Cobrar de forma segura desde otro país",
          objectives: ["O4"],
          minutes: 5,
          goal: "Elegir una forma segura de recibir el pago de un comprador de otro país y reconocer una estafa de pago.",
          text: [
            "El efectivo en la frontera es arriesgado: te pueden robar, y cambiar dinero en la calle te puede dar un mal cambio o billetes falsos. Hay formas más seguras: una transferencia bancaria, un servicio de dinero móvil que envíe entre los países de tu ruta, y sistemas de pago como el PAPSS (Sistema Panafricano de Pagos y Liquidación), que permite que quien paga en un país africano pague en su moneda local y quien recibe reciba en la suya, a través de los bancos y proveedores de pago que se han unido. Pregunta a tu banco o a tu proveedor de dinero móvil qué funciona en tu ruta y cuánto cuesta.",
            "Con un comprador nuevo, pide un anticipo antes de enviar, o el pago completo antes de entregar la mercancía. Comprueba que el dinero de verdad llegó a tu cuenta revisando tú mismo tu saldo, no confiando en un mensaje que te manda el comprador.",
            "Señales de alerta de una estafa: un comprador que manda un mensaje o una captura de pantalla falsa de \"pago recibido\"; alguien que dice que te envió de más por error y te pide que le devuelvas la diferencia; cualquiera que te pida tu PIN, tu contraseña o un código enviado a tu teléfono; y un comprador que te apura para que entregues la mercancía antes de revisar. Un banco o un proveedor de dinero móvil de verdad nunca te pide tu PIN."
          ],
          steps: ["Acuerda por escrito el precio, la moneda y la forma de pago.", "Pide a un comprador nuevo un anticipo o el pago completo primero.", "Revisa tú mismo tu saldo para confirmar que el dinero llegó.", "Solo entonces entrega la mercancía y da un recibo.", "Nunca compartas tu PIN, tu contraseña ni un código enviado a tu teléfono."],
          words: [["PAPSS", "el Sistema Panafricano de Pagos y Liquidación: permite hacer pagos entre países africanos en monedas locales, a través de los bancos y proveedores de pago que se han unido."], ["Anticipo", "una parte del precio que se paga antes de enviar la mercancía."], ["PIN", "el número secreto de tu tarjeta bancaria o de tu cuenta de dinero móvil. Nunca lo compartas."]],
          slides: [
            { title: "Más seguro que el efectivo en la frontera", bullets: ["Transferencia bancaria", "Dinero móvil entre los países de tu ruta", "PAPSS: pagar y recibir en monedas locales a través de bancos"] },
            { title: "Cobra antes de entregar", bullets: ["Comprador nuevo: anticipo o pago completo primero", "Revisa tú mismo tu saldo", "Luego entrega la mercancía y da un recibo"] },
            { title: "Señales de estafa", bullets: ["Mensaje o captura falsa de \"pago recibido\"", "\"Te envié de más, devuélvemelo\"", "Te pide tu PIN o un código; te apura"] },
            { title: "Recuerda", bullets: ["Un proveedor de verdad nunca te pide tu PIN", "Nunca compartas un código enviado a tu teléfono"] }
          ],
          sources: [PAPSS],
          tryIt: "Escribe en tres líneas la regla de pago de tu negocio: qué forma de pago aceptas, cuándo entregas la mercancía y cómo compruebas que llegó el dinero. Pregunta a tu banco o a tu proveedor de dinero móvil qué servicio entre países funciona en tu ruta.",
          youCanNow: "elegir una forma segura de cobrar a un comprador de otro país y reconocer las señales de una estafa de pago.",
          quickCheck: [
            { objective: "O4", q: "Un comprador nuevo de Abiyán te manda una captura de pantalla que dice que pagó. ¿Qué haces antes de enviar la mercancía?", options: ["Enviar la mercancía enseguida", "Revisar tu propio saldo para confirmar que el dinero llegó", "Pedirle otra captura de pantalla", "Mandarle tu PIN para que lo compruebe"], answer: 1, why: "Las capturas de pantalla pueden ser falsas; solo tu propio saldo prueba que el dinero llegó." },
            { objective: "O4", q: "Un comprador dice que te envió de más y te pide que le devuelvas la diferencia. ¿Qué es lo más probable?", options: ["Un reembolso normal", "Un error del banco que debes arreglar rápido", "Una estafa común: revisa tu saldo y habla con tu proveedor", "Un impuesto"], answer: 2, why: "\"Te envié de más, devuélvemelo\" es una estafa muy conocida; revisa tu saldo y llama al número oficial de tu proveedor." }
          ]
        },
        {
          title: "Cobros no oficiales, retrasos y tu plan de comercio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Describir los pasos seguros cuando te piden un pago no oficial, y denunciarlo como una barrera no arancelaria.",
          text: [
            "Una barrera no arancelaria (BNA) es todo lo que, aparte de un arancel, hace más difícil el comercio: cobros no oficiales en los retenes, retrasos largos, papeles que no están en las reglas o mercancía retenida sin motivo. La AfCFTA tiene un sistema en línea, tradebarriers.africa, donde cualquier comerciante, incluidos los comerciantes informales, las mujeres y los jóvenes, puede denunciar una BNA. Las denuncias llegan a los puntos focales nacionales y a la Secretaría de la AfCFTA para darles seguimiento.",
            "Si alguien te pide dinero sin recibo: mantén la calma y la cortesía, y pon tu seguridad primero. Pide la tarifa oficial y un recibo. Pide hablar con el funcionario a cargo o con la oficina de información comercial. No discutas de una forma que te ponga en peligro.",
            "Después, anota los hechos: fecha, hora, lugar, lo que te pidieron, la cantidad y cualquier nombre o número de placa que hayas visto. Denúncialo en tradebarriers.africa (en línea o con su opción por teléfono móvil), en la línea de quejas de tu autoridad de aduanas o a través de tu asociación de comerciantes. Las comerciantes que sufren acoso también pueden pedir apoyo a su asociación o a un grupo de mujeres comerciantes.",
            "Ahora júntalo todo. Tu plan de comercio transfronterizo tiene: el producto y el paso fronterizo, las reglas que revisaste, tus papeles, tu costo y tu precio en dos monedas, cómo te pagan y qué harás ante los cobros no oficiales."
          ],
          steps: ["Mantén la calma y la cortesía; tu seguridad va primero.", "Pide la tarifa oficial y un recibo, o al funcionario a cargo o la oficina de información comercial.", "Anota los hechos: fecha, hora, lugar, cantidad, nombre o número de placa.", "Denúncialo en tradebarriers.africa, en la aduana o a través de tu asociación de comerciantes.", "Agrega estos pasos a tu plan de comercio transfronterizo."],
          words: [["Barrera no arancelaria (BNA)", "todo lo que, aparte de un arancel, hace más difícil el comercio, como cobros no oficiales, retrasos largos o papeles de más."], ["Punto focal", "la persona u oficina de cada país que da seguimiento a las denuncias de BNA."]],
          slides: [
            { title: "¿Qué es una barrera no arancelaria?", bullets: ["Cobros no oficiales en retenes o fronteras", "Retrasos largos; papeles que no están en las reglas", "Mercancía retenida sin motivo"] },
            { title: "Si te piden dinero sin recibo", bullets: ["Calma y cortesía: la seguridad primero", "Pide la tarifa oficial y un recibo", "Pide al funcionario a cargo o la oficina de información comercial"] },
            { title: "Anótalo y luego denúncialo", bullets: ["Fecha, hora, lugar, cantidad, nombre o placa", "tradebarriers.africa: en línea o por teléfono", "Línea de quejas de la aduana o asociación de comerciantes"] },
            { title: "Tu plan de comercio transfronterizo", bullets: ["Producto, ruta, reglas revisadas; papeles", "Costo y precio en dos monedas", "Forma de pago; qué hacer ante cobros no oficiales"] }
          ],
          sources: [NTB, AFCFTA],
          tryIt: "Escribe tu plan de comercio transfronterizo de una página, como se describe en la tarea final. Agrega los hechos que anotarías y dónde denunciarías un cobro no oficial.",
          youCanNow: "manejar con seguridad un cobro no oficial, denunciarlo como una barrera no arancelaria y escribir un plan completo de comercio transfronterizo.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde puede un pequeño comerciante denunciar un cobro no oficial en una frontera africana?", options: ["En tradebarriers.africa, en la aduana o en una asociación de comerciantes", "Solo en redes sociales", "En ningún lugar; no se puede denunciar", "A la persona que pidió el dinero"], answer: 0, why: "El sistema de BNA de la AfCFTA, las líneas de quejas de la aduana y las asociaciones de comerciantes son los canales oficiales." },
            { objective: "O5", q: "¿Qué debes anotar después de un cobro no oficial?", options: ["Solo cómo te sentiste", "La fecha, la hora, el lugar, la cantidad y cualquier nombre o número de placa", "Nada; olvídalo", "Solo el precio de tu mercancía"], answer: 1, why: "Con hechos claros se hace una denuncia a la que se le puede dar seguimiento." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Dinero, pagos y problemas",
        questions: [
          { objective: "O3", q: "El costo total del lote es XAF 300,000 por 60 artículos. Sumas XAF 1,000 de ganancia por artículo. ¿Cuál es el precio de venta?", options: ["XAF 6,000", "XAF 5,000", "XAF 1,000", "XAF 7,000"], answer: 0, why: "300,000 / 60 = 5,000 de costo por artículo; más 1,000 de ganancia = 6,000." },
          { objective: "O3", q: "¿Por qué revisar el tipo de cambio el día que vendes?", options: ["El cambio nunca varía", "Lo fija el comprador", "El cambio varía todos los días y puede borrar tu ganancia", "Solo sirve para los bancos"], answer: 2, why: "Los tipos de cambio se mueven cada día, así que un cambio viejo puede convertir una ganancia en una pérdida." },
          { objective: "O4", q: "¿Qué pedido debe hacerte parar enseguida?", options: ["\"¿Puedo pagar por transferencia bancaria?\"", "\"Mándame un recibo.\"", "\"¿Cuál es tu precio en XOF?\"", "\"Dime el código que acabamos de enviar a tu teléfono.\""], answer: 3, why: "Ningún comprador ni proveedor de verdad necesita tu código ni tu PIN; pedirlo es una señal de estafa." },
          { objective: "O4", q: "¿Qué es el PAPSS?", options: ["Un formulario de aduana", "Un sistema para pagar entre países africanos en monedas locales a través de bancos y proveedores", "Un tipo de teléfono móvil", "Un puesto fronterizo"], answer: 1, why: "El PAPSS permite que quien paga pague en su moneda local y quien recibe reciba en la suya, entre países africanos." },
          { objective: "O5", q: "Un funcionario te pide dinero sin recibo. ¿Cuál es el primer paso más seguro?", options: ["Mantener la calma, pedir la tarifa oficial y un recibo o al funcionario a cargo", "Gritar y negarte a moverte", "Cruzar la frontera corriendo", "Pagar el doble para ir más rápido"], answer: 0, why: "Mantener la calma te protege, y pedir el recibo o al funcionario a cargo sigue el camino oficial." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Vender más allá de la frontera: los pequeños comerciantes y la AfCFTA",
    questions: [
      { objective: "O1", q: "¿Cuántos países de la Unión Africana forman parte de la AfCFTA?", options: ["15", "55", "8", "100"], answer: 1, why: "La AfCFTA reúne a los 55 países de la Unión Africana." },
      { objective: "O1", q: "¿Cuándo empezó el comercio con la AfCFTA?", options: ["El 1 de enero de 2021", "El 1 de enero de 2000", "Todavía no ha empezado", "El 1 de enero de 2030"], answer: 0, why: "El comercio con la AfCFTA empezó el 1 de enero de 2021." },
      { objective: "O1", q: "¿Qué decide si tu mercancía puede obtener el arancel más bajo de la AfCFTA?", options: ["El color del empaque", "La distancia que viajas", "Las reglas de origen", "El día de la semana"], answer: 2, why: "La mercancía debe cumplir las reglas de origen, que muestran que viene de un país miembro." },
      { objective: "O1", q: "Moussa vende cosméticos de Dakar a Bamako. ¿Por qué acuerdo debe preguntar primero?", options: ["El Régimen Comercial Simplificado de la EAC", "El Régimen Comercial Simplificado del COMESA", "Un acuerdo de Asia", "El Esquema de Liberalización del Comercio de la CEDEAO"], answer: 3, why: "Senegal y Malí son miembros de la CEDEAO, así que hay que preguntar por el ETLS." },
      { objective: "O1", q: "¿Quién puede explicar las reglas simplificadas para pequeños comerciantes en algunos puestos fronterizos?", options: ["Un funcionario de la oficina de información comercial", "Cualquier cambista", "El cobrador del autobús", "Un desconocido por teléfono"], answer: 0, why: "Las oficinas de información comercial de algunos puestos fronterizos explican las reglas a los pequeños comerciantes." },
      { objective: "O2", q: "¿Qué lista muestra papeles comunes para un paso fronterizo oficial?", options: ["Fotos de boda y un diario", "Solo un número de teléfono", "Identificación, factura o recibo, lista de empaque, declaración de aduana", "Una carta de un amigo"], answer: 2, why: "La identificación, una factura o recibo, una lista de empaque y una declaración de aduana son los papeles comunes." },
      { objective: "O2", q: "Antes de comprar la mercancía que vas a llevar, ¿qué debes preguntar en la aduana?", options: ["De qué color debe ser la mercancía", "Si tu mercancía está restringida y qué papeles necesita", "Si quieren comprar un poco", "Nada"], answer: 1, why: "Algunos productos están restringidos y los papeles cambian según el producto, así que pregunta primero." },
      { objective: "O2", q: "Grace lleva tomates frescos de Kenia a Tanzania. ¿Qué certificado podría necesitar?", options: ["Un título universitario", "Un acta de matrimonio", "Un permiso de conducir", "Un certificado fitosanitario (de sanidad vegetal)"], answer: 3, why: "Los productos vegetales frescos suelen necesitar un certificado fitosanitario; debe preguntar en la aduana." },
      { objective: "O2", q: "¿Qué hace un agente aduanal?", options: ["Te ayuda a completar los papeles de aduana, a cambio de un pago", "Vende tu mercancía por ti", "Cambia dinero en la calle", "Fija el arancel"], answer: 0, why: "Un agente aduanal tiene licencia para ayudar con los papeles de aduana a cambio de un pago." },
      { objective: "O3", q: "¿Cuál es el primer paso para calcular el costo de un lote?", options: ["Elegir un precio que te guste", "Hacer la lista de todos los costos, desde la compra hasta la venta", "Copiar el precio de un vecino", "Cambiar dinero"], answer: 1, why: "No puedes poner un precio justo hasta que conoces todos los costos." },
      { objective: "O3", q: "Costo total KES 36,000 por 120 pares de sandalias. ¿Cuál es el costo por par?", options: ["KES 30", "KES 3,000", "KES 300", "KES 120"], answer: 2, why: "36,000 entre 120 da 300." },
      { objective: "O3", q: "El costo por artículo es GHS 20 y la ganancia es GHS 5. Con un tipo de cambio de ejemplo de 1 GHS = 40 XOF, ¿cuál es el precio en XOF?", options: ["800 XOF", "200 XOF", "1,000 XOF", "25 XOF"], answer: 2, why: "GHS 20 + GHS 5 = GHS 25; 25 x 40 = 1,000 XOF." },
      { objective: "O3", q: "Después de calcular tu precio, ¿qué más debes revisar?", options: ["El clima", "El precio de productos parecidos en el mercado del comprador", "Nada", "El teléfono de tu vecino"], answer: 1, why: "Comparar con el mercado muestra si los compradores pagarán tu precio." },
      { objective: "O4", q: "Un comprador nuevo quiere la mercancía ya y promete pagar la próxima semana. ¿Qué es lo más seguro?", options: ["Pedir un anticipo o el pago completo primero", "Enviar todo ahora", "Darle tu PIN como señal de confianza", "Enviar el doble"], answer: 0, why: "Con un comprador nuevo, un anticipo o el pago completo primero protege tu mercancía." },
      { objective: "O4", q: "¿Cómo sabes que un pago de verdad llegó?", options: ["El comprador lo dice", "Una captura de pantalla", "Un mensaje de un número desconocido", "Revisas tu propio saldo"], answer: 3, why: "Solo tu propio saldo confirma que el dinero de verdad está ahí." },
      { objective: "O4", q: "¿Quién te va a pedir el PIN de tu dinero móvil?", options: ["Tu proveedor de dinero móvil", "Tu banco", "Ningún proveedor de verdad: solo los estafadores", "La aduana"], answer: 2, why: "Un proveedor de verdad nunca te pide tu PIN; quien lo pide es un estafador." },
      { objective: "O4", q: "¿Por qué es arriesgado llevar mucho efectivo al cruzar la frontera?", options: ["El efectivo siempre es ilegal", "Robos, mal cambio en la calle y billetes falsos", "El efectivo no se puede contar", "Los bancos lo prohíben"], answer: 1, why: "El efectivo se puede robar, y los cambistas de la calle pueden dar un mal cambio o billetes falsos." },
      { objective: "O5", q: "¿Cuál es una barrera no arancelaria?", options: ["El arancel oficial de importación", "Cobros no oficiales en un retén", "El precio de tu mercancía", "Tu ganancia"], answer: 1, why: "Una BNA es todo lo que, aparte de un arancel, hace más difícil el comercio, como los cobros no oficiales." },
      { objective: "O5", q: "¿Quién puede hacer una denuncia en tradebarriers.africa?", options: ["Solo las grandes empresas", "Solo los gobiernos", "Solo los hombres", "Cualquier comerciante, incluidos los comerciantes informales, las mujeres y los jóvenes"], answer: 3, why: "El sistema está abierto a empresas de todos los tamaños, a comerciantes informales, a mujeres y a jóvenes." },
      { objective: "O5", q: "Un funcionario retiene tu mercancía y te pide efectivo sin recibo. ¿Cuál es el mejor plan?", options: ["Mantener la calma, pedir el recibo o al funcionario a cargo, anotar los hechos y denunciarlo", "Dejar tu mercancía e irte a casa", "Discutir en voz alta hasta que se rinda", "Pagar y no decir nada nunca"], answer: 0, why: "Mantenerte seguro, pedir el camino oficial, anotar los hechos y denunciar es el plan correcto." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿qué sabes ya?", from: [0, 3, 5, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, corrige esa parte de tu plan e inténtalo de nuevo.",
    criteria: [
      { name: "Reglas revisadas", objective: "O1", notYet: "El plan no dice qué reglas se aplican, o se basa en un rumor.", meets: "El plan nombra el acuerdo regional o la regla de la AfCFTA para la ruta y al menos dos oficinas o sitios web donde comprobarlo.", exceeds: "Además anota lo que dijo una oficina, con la fecha y el nombre del funcionario." },
      { name: "Papeles en la lista", objective: "O2", notYet: "No hay lista de papeles, o solo una identificación.", meets: "Una lista de los papeles para este producto y esta ruta, con una factura y una declaración de aduana, y un certificado de origen si se quiere un arancel más bajo.", exceeds: "Además anota cualquier certificado sanitario, fitosanitario o de producto y cómo se guardan las copias." },
      { name: "Costo total y precio", objective: "O3", notYet: "Solo se cuenta el costo de la mercancía, o las cuentas están mal.", meets: "Están todos los costos, el costo por artículo y el precio de venta son correctos, y el precio aparece en las dos monedas.", exceeds: "Además compara el precio con el mercado del comprador y deja margen para un cambio en el tipo de cambio." },
      { name: "Pago seguro", objective: "O4", notYet: "La mercancía se entrega antes de revisar el pago, o el plan comparte un PIN.", meets: "Nombra una forma de pago segura, la mercancía se entrega solo después de revisar el saldo y nunca se comparte un PIN.", exceeds: "Además hace la lista de las señales de estafa que el comerciante va a vigilar." },
      { name: "Cobros no oficiales", objective: "O5", notYet: "No hay plan, o el plan es pagar y no decir nada.", meets: "Nombra los pasos seguros, los hechos que hay que anotar y un canal oficial de denuncia.", exceeds: "Nombra dos canales de denuncia y una asociación de comerciantes que puede dar apoyo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen haber usado un paso fronterizo oficial y los papeles correctos en 30 días (encuesta de seguimiento)",
      "Participantes que dicen pagar menos cobros no oficiales, o que hacen una denuncia de BNA, en 90 días",
      "Participantes que dicen haber hecho una venta a otro país con la ganancia planeada en 90 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono sencillo con calculadora; internet para au-afcfta.org y tradebarriers.africa si es posible",
      "Papel y bolígrafo para la lista de control de papeles, el cálculo de costos y el plan de comercio",
      "El tipo de cambio del día para la ruta del participante (de un banco o del banco central)",
      "Entre 60 y 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Antes de la sesión, pregunta en la oficina de aduanas local o en la oficina de información comercial qué acuerdos y papeles se aplican a las rutas de tus participantes, para poder responder preguntas; nunca des cifras de aranceles de memoria.",
      "En una asociación de comerciantes o un grupo de mercado: hagan la prueba inicial juntos, luego un capítulo por sesión, con los participantes calculando el costo de sus propios lotes reales.",
      "Trata con respeto a los comerciantes informales: el objetivo es un comercio más seguro, legal y rentable, no culpar a nadie.",
      "Nunca pidas a los participantes que compartan su PIN, sus contraseñas o sus números de cuenta en clase.",
      "Califica la tarea final con la rúbrica, y da comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
