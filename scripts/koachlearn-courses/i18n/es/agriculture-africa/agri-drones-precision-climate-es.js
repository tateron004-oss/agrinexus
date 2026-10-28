"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-precision-climate.js. See scripts/koachlearn-courses/README.md, "Translations".

const FAO_CSA = { name: "FAO: Manual de agricultura climáticamente inteligente (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO y UIT: E-agriculture in Action: drones para la agricultura (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO y OMS: Guía para la aplicación aérea de plaguicidas (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate-es",
  lang: "es",
  translationOf: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Drones para el monitoreo agrícola 4: precisión, clima y monitoreo del ganado",
  skills: "Dividir un campo en zonas de manejo, Dirigir los insumos por zona, Evaluar la población de plantas y estimar la cosecha, Vigilar la erosión, las inundaciones y la sequía, Vigilar el ganado y los pastos, Inspeccionar la infraestructura de la finca",
  outcome: "usar mapas de dron para manejar una finca mixta por zonas y escribir un plan de monitoreo para toda la temporada que cubra cultivos, riesgos climáticos, ganado e infraestructura de la finca.",
  about: [
    "Este es el Curso 4 del itinerario de monitoreo con drones, para agricultores, administradores de fincas, personal de cooperativas y de extensión, y proveedores de servicios con drones de Kenia, Nigeria y toda África. Debes saber hacer y leer un mapa de dron (Cursos 2 y 3).",
    "El Capítulo 1 es la agricultura de precisión: tratar cada parte de un campo según lo que necesita, en lugar de tratar todo el campo igual. Vas a dividir un campo en zonas, dirigir la semilla, el fertilizante y la mano de obra, y usar conteos de plantas para estimar la cosecha. El Capítulo 2 amplía la vista a toda la finca: riesgos climáticos y ambientales como la erosión, las inundaciones y la sequía, el ganado y los pastos, y las presas, jagüeyes, cercas, canales e invernaderos que mantienen funcionando una finca.",
    "Los ejemplos incluyen maíz y frijol en el Valle del Rift, yuca y ñame en el suroeste de Nigeria, té en Kericho y fincas mixtas de cultivos y ganado. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un plan de monitoreo con dron para toda la temporada de una finca mixta (real o de ejemplo, como 10 hectáreas con maíz, frijol, un potrero, 30 vacas, un jagüey y una cerca perimetral): las zonas del campo principal y lo que recibe cada una, qué vuelos harás y cuándo (cultivo, riesgo climático, ganado, infraestructura), qué buscarás cada vez y a qué acción podría llevar cada hallazgo.",
  chapters: [
    {
      name: "Capítulo 1: Agricultura de precisión",
      lessons: [
        {
          title: "Zonas de manejo: un campo, distintas necesidades",
          minutes: 5,
          goal: "Dividir un campo en dos a cuatro zonas de manejo con un mapa de dron y lo que se sabe de la finca.",
          text: [
            "La mayoría de los campos no son parejos. La profundidad del suelo, la pendiente, los hormigueros viejos, el estiércol de años pasados, el encharcamiento y la sombra hacen que algunas partes crezcan mejor que otras. La agricultura de precisión significa manejar cada parte según lo que necesita.",
            "Una zona de manejo es un área de un campo que se comporta igual temporada tras temporada. Para dibujar las zonas, combina varios mapas de dron (NDVI o en color, de más de una fecha o temporada) con lo que sabe el agricultor: dónde se estanca el agua, dónde el suelo es poco profundo, dónde el cultivo siempre sale bien.",
            "Hazlo sencillo. De dos a cuatro zonas bastan para la mayoría de las fincas pequeñas y medianas: por ejemplo, una zona fuerte, una zona promedio y una zona débil y húmeda. Ponles nombre y márcalas con estacas o puntos GPS para que los trabajadores las encuentren."
          ],
          steps: ["Reúne mapas del campo de dos o más fechas si se puede.", "Pregunta al agricultor dónde el cultivo siempre sale fuerte o débil, y por qué.", "Dibuja de dos a cuatro zonas que coincidan con los mapas y con lo que sabe el agricultor.", "Ponle nombre a cada zona y márcala en el terreno con estacas o puntos GPS."],
          words: [["Agricultura de precisión", "manejar cada parte de un campo según lo que necesita."], ["Zona de manejo", "una parte de un campo que se comporta igual temporada tras temporada y se maneja como una unidad."]],
          slides: [
            { title: "Los campos no son parejos", bullets: ["Suelo, pendiente, agua, sombra, estiércol viejo", "Algunas partes siempre crecen mejor"] },
            { title: "Dibujar las zonas", bullets: ["Mapas de más de una fecha", "Más lo que sabe el agricultor", "Áreas que se comportan igual cada temporada"] },
            { title: "Hazlo sencillo", bullets: ["De dos a cuatro zonas", "Fuerte, promedio, débil o húmeda", "Márcalas en el terreno"] }
          ],
          tryIt: "Dibuja un campo que conozcas (o usa un mapa de ejemplo). Traza de dos a cuatro zonas, ponles nombre y escribe por qué cada zona es distinta.",
          youCanNow: "dividir un campo en zonas de manejo sencillas usando mapas y lo que sabe el agricultor."
        },
        {
          title: "Dirigir los insumos por zona",
          minutes: 6,
          goal: "Decidir qué recibe cada zona: semilla, fertilizante, mano de obra o un arreglo.",
          text: [
            "Cuando ya tienes las zonas, pregúntate qué necesita cada una. Una zona débil con suelo poco profundo puede no pagar el fertilizante extra; una zona encharcada puede necesitar un drenaje, no fertilizante; una zona promedio puede dar el mejor retorno a los insumos extra. Esto es el manejo de dosis variable: dosis distintas en lugares distintos.",
            "En las fincas grandes, las máquinas pueden aplicar dosis variables a partir de un mapa de prescripción. En las fincas pequeñas la misma idea funciona a mano: los trabajadores ponen más o menos fertilizante o estiércol por hoyo según la zona, resiembran los huecos solo donde el dron los muestra, y deshierban o revisan primero las zonas con problemas.",
            "Algunos drones pueden fumigar o esparcir. Fumigar plaguicidas con dron necesita sus propias aprobaciones de tu autoridad de aviación y del regulador de plaguicidas de tu país, operadores formados y con licencia, y prácticas seguras como las de la guía de la FAO y la OMS sobre la aplicación aérea. Nunca fumigues, ni aconsejes fumigar, sin ellas."
          ],
          steps: ["Para cada zona, escribe por qué es débil o fuerte.", "Elige la acción que resuelve la causa: drenaje, resiembra, más o menos fertilizante, deshierbe.", "Escribe la dosis o la tarea de cada zona para que los trabajadores la sigan.", "Fumigar con dron: solo con las aprobaciones de aviación y de plaguicidas necesarias."],
          words: [["Dosis variable", "aplicar cantidades distintas de semilla, fertilizante o agua en distintas partes de un campo."], ["Mapa de prescripción", "un mapa que le dice a una persona o a una máquina cuánto aplicar en cada zona."]],
          slides: [
            { title: "Resuelve la causa", bullets: ["Suelo poco profundo: el fertilizante extra puede no pagar", "Encharcada: drenaje, no fertilizante", "Zona promedio: a menudo el mejor retorno"] },
            { title: "Dosis variable a mano", bullets: ["Más o menos por hoyo según la zona", "Resiembra los huecos solo donde hace falta", "Deshierba y revisa primero las zonas con problemas"] },
            { title: "Drones de fumigación", bullets: ["Necesitan aprobación de aviación Y de plaguicidas", "Operadores formados y con licencia", "Sigue la guía de aplicación aérea de la FAO/OMS"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Con tus zonas de la Lección 1, escribe una instrucción de una línea para cada zona que pueda seguir un trabajador de la finca (por ejemplo: Zona C, esquina húmeda: cava un drenaje antes de abonar; nada de fertilizante extra).",
          youCanNow: "decidir y escribir lo que debe recibir cada zona de manejo, y saber cuándo fumigar necesita una aprobación especial."
        },
        {
          title: "Conteo de plantas y primeras estimaciones de cosecha",
          minutes: 5,
          goal: "Estimar la población de plantas y un rango aproximado de cosecha con un mapa de dron y conteos de muestra.",
          text: [
            "La población de plantas es cuántas plantas nacieron comparado con cuántas se sembraron. Un mapa de dron con mucho detalle muestra claramente los huecos. Algunos programas cuentan las plantas solos; también puedes contar a mano en cuadros de muestra sobre el mapa.",
            "Para estimar la población: marca unas cuantas áreas de muestra de tamaño conocido en cada zona, cuenta las plantas y compara con la distancia de siembra deseada. Si un campo de maíz se sembró a 75 cm por 25 cm, la meta es de unas 53,000 plantas por hectárea; si cuentas 40,000, la población es de alrededor del 75 por ciento.",
            "Una estimación aproximada de la cosecha multiplica las plantas por hectárea por la cosecha esperada por planta, según la experiencia local o las cifras de extensión, zona por zona. Tómala como un rango, no como una promesa: el clima, las plagas y las pérdidas en la cosecha cambian el número final. Aun así, ayuda a planear desde temprano el almacenamiento, las ventas y el transporte."
          ],
          steps: ["Marca en el mapa cuadros de muestra de tamaño conocido en cada zona.", "Cuenta las plantas de cada cuadro (a ojo o con software).", "Calcula las plantas por hectárea y compara con la meta.", "Multiplica por la cosecha esperada por planta según cifras locales para obtener un rango.", "Escribe el rango y lo que podría cambiarlo."],
          words: [["Población de plantas", "el número de plantas que nacieron comparado con el número sembrado."], ["Estimación de cosecha", "un cálculo temprano de cuánto producirá el campo."]],
          slides: [
            { title: "Población de plantas", bullets: ["Plantas que nacieron vs plantas sembradas", "Los huecos se ven claros en mapas con detalle"] },
            { title: "Cuenta por muestra", bullets: ["Cuadros de muestra en cada zona", "Cuenta plantas, lleva a una hectárea", "Maíz a 75 cm x 25 cm: unas 53,000 plantas por ha"] },
            { title: "Primera estimación de cosecha", bullets: ["Plantas por ha x cosecha esperada por planta", "Da un rango, no una promesa", "Ayuda a planear almacenamiento, ventas y transporte"] }
          ],
          tryIt: "Una zona de maíz de 1 hectárea se sembró a 75 cm por 25 cm. Tus conteos de muestra indican 44,000 plantas por hectárea. Calcula el porcentaje de población y luego escribe qué podría explicar los huecos y qué revisarías.",
          youCanNow: "estimar por zona la población de plantas y un rango aproximado de cosecha con un mapa de dron y conteos de muestra."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Agricultura de precisión",
        questions: [
          { q: "¿Qué es una zona de manejo?", options: ["Cualquier cuadro al azar", "Una parte de un campo que se comporta igual temporada tras temporada", "La oficina de la finca", "Un área de no vuelo"], answer: 1, why: "Las zonas agrupan áreas que responden igual, para manejarlas igual." },
          { q: "¿Cuál es la mejor forma de dibujar las zonas?", options: ["Usar un solo mapa de un solo día", "Copiar las zonas de un vecino", "Combinar mapas de más de una fecha con lo que sabe el agricultor", "Dibujar cuadros iguales"], answer: 2, why: "Varios mapas más el conocimiento local muestran patrones estables." },
          { q: "Una zona es débil porque se estanca el agua después de llover. La mejor acción es:", options: ["Mejorar el drenaje", "Poner el doble de fertilizante", "Fumigar plaguicida", "Sembrar más semilla"], answer: 0, why: "Resuelve la causa; el fertilizante no resuelve el encharcamiento." },
          { q: "Un servicio de drones ofrece fumigar plaguicida en el maíz de un cliente. ¿Qué debe estar en orden?", options: ["Solo el permiso del agricultor", "Nada extra", "Una buena cámara", "Aprobaciones de aviación y de plaguicidas y operadores con licencia"], answer: 3, why: "Fumigar con dron es una operación regulada y de mayor riesgo." },
          { q: "El maíz sembrado a 75 cm x 25 cm tiene una meta de unas:", options: ["5,300 plantas por hectárea", "53,000 plantas por hectárea", "530,000 plantas por hectárea", "530 plantas por hectárea"], answer: 1, why: "10,000 m2 divididos entre 0.1875 m2 por planta dan unas 53,000." }
        ]
      }
    },
    {
      name: "Capítulo 2: Clima, ganado e infraestructura",
      lessons: [
        {
          title: "Vigilar el riesgo climático y ambiental",
          minutes: 6,
          goal: "Usar vuelos de dron para detectar el riesgo de erosión, inundación y sequía y seguir las prácticas climáticamente inteligentes.",
          text: [
            "El cambio climático trae lluvias más fuertes, temporadas secas más largas y más calor a muchas zonas agrícolas. La FAO describe la agricultura climáticamente inteligente como la que aumenta la productividad y los ingresos, ayuda a las fincas a adaptarse y a ser más resistentes, y reduce o elimina las emisiones de gases de efecto invernadero cuando se puede.",
            "Los drones ayudan en la parte de la adaptación. Después de una lluvia fuerte, un vuelo muestra cárcavas, terrazas deslavadas, drenajes azolvados y parcelas inundadas; los modelos de elevación muestran por dónde correrá el agua la próxima vez. En las temporadas secas, los mapas térmicos y NDVI muestran qué áreas se secan primero. Con las temporadas, los mapas muestran si funcionan las terrazas, los cultivos de cobertura, el acolchado, la siembra de árboles y la cosecha de agua.",
            "Vuela la misma área en fechas fijas (por ejemplo, antes de las lluvias largas, después de la primera tormenta fuerte, a mitad de temporada y después de la cosecha) y compara. Comparte los mapas con el grupo de agricultores o con los funcionarios del condado o del estado: le muestran a toda la comunidad dónde actuar primero."
          ],
          steps: ["Elige fechas fijas de vuelo ligadas a las temporadas.", "Después de una lluvia fuerte: mapea cárcavas, deslaves, drenajes azolvados, parcelas inundadas.", "En temporadas secas: mapea con NDVI o térmica qué áreas se secan primero.", "Cada temporada: revisa terrazas, cultivos de cobertura, acolchado, árboles, cosecha de agua.", "Compara los mapas en el tiempo y compártelos."],
          words: [["Agricultura climáticamente inteligente (ACI)", "agricultura que aumenta la productividad, ayuda a las fincas a adaptarse al cambio climático y reduce las emisiones cuando se puede."], ["Erosión", "suelo que se lleva el agua o el viento."], ["Cárcava", "un canal profundo que abre en la tierra el agua que corre."]],
          slides: [
            { title: "Agricultura climáticamente inteligente", bullets: ["Aumentar la productividad y los ingresos", "Adaptarse y ser más resistentes", "Reducir emisiones cuando se pueda"] },
            { title: "Lo que muestran los drones", bullets: ["Tras la lluvia: cárcavas, deslaves, parcelas inundadas", "Temporada seca: qué áreas se secan primero", "Si funcionan las terrazas, el acolchado, los árboles"] },
            { title: "Vuela en fechas fijas", bullets: ["Antes de lluvias, tras tormentas, a mitad, tras cosecha", "Compara en el tiempo", "Comparte con grupos de agricultores y funcionarios"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Escribe un calendario anual de cuatro vuelos climáticos para una finca que conozcas, ligado a sus temporadas de lluvia y secas. Para cada vuelo, anota dos cosas que vas a buscar.",
          youCanNow: "planear vuelos de dron que sigan el riesgo de erosión, inundación y sequía y revisen si funcionan las prácticas climáticamente inteligentes."
        },
        {
          title: "Vigilar el ganado y los pastos",
          minutes: 5,
          goal: "Planear un vuelo de dron tranquilo y seguro para contar animales y revisar los pastos y los puntos de agua.",
          text: [
            "En ranchos y grandes zonas de pastoreo, un dron puede contar vacas, cabras o camellos, encontrar animales perdidos o enfermos y revisar que funcionen los puntos de agua y los bebederos, ahorrando horas de caminar o manejar. Las cámaras térmicas encuentran animales al amanecer o en el monte espeso.",
            "Los drones pueden asustar a los animales, sobre todo a poca altura. Vuela lo bastante alto para no espantarlos, acércate despacio desde un lado, nunca persigas ni arrees animales con un dron a menos que tengas formación y esté permitido, y detente si empiezan a correr. Pide permiso al pastor antes de volar.",
            "Los mapas de pastos (NDVI o en color) muestran dónde el pasto está fuerte, sobrepastoreado o pelón. A lo largo de una temporada ayudan a planear el pastoreo rotativo y a detectar tierras que necesitan descanso. Nunca grabes a personas ni viviendas sin permiso."
          ],
          steps: ["Pide permiso al pastor o al dueño; acuerden hora y área.", "Vuela alto y acércate despacio desde un lado.", "Cuenta los animales en las fotos, no dando vueltas a poca altura.", "De paso, revisa puntos de agua, bebederos y cercas.", "Mapea el pasto: fuerte, sobrepastoreado, pelón.", "Detente si los animales empiezan a correr."],
          words: [["Pastoreo rotativo", "mover a los animales entre potreros para que el pasto descanse y vuelva a crecer."], ["Sobrepastoreo", "cuando los animales comen el pasto más rápido de lo que vuelve a crecer y dejan el suelo pelón."]],
          slides: [
            { title: "Lo que hacen los drones en un rancho", bullets: ["Contar animales, encontrar perdidos o enfermos", "Revisar puntos de agua y bebederos", "Térmica al amanecer o en el monte espeso"] },
            { title: "Primero el bienestar animal", bullets: ["Pide permiso al pastor", "Vuela alto, acércate despacio desde un lado", "Nunca persigas; detente si corren"] },
            { title: "Mapas de pastos", bullets: ["Pasto fuerte, sobrepastoreado o pelón", "Planea el pastoreo rotativo", "Detecta tierras que necesitan descanso"] }
          ],
          tryIt: "Escribe un plan de vuelo corto para contar 60 vacas en un potrero de 40 hectáreas: hora del día, altura, forma de acercarte, qué más vas a revisar y cuándo te detendrías.",
          youCanNow: "planear un vuelo tranquilo y seguro sobre el ganado y los pastos y usarlo para apoyar las decisiones de pastoreo."
        },
        {
          title: "Inspeccionar la infraestructura de la finca",
          minutes: 5,
          goal: "Inspeccionar desde el aire presas, canales, cercas, invernaderos y bodegas y hacer una lista de reparaciones.",
          text: [
            "La infraestructura de la finca es cara y fácil de olvidar hasta que falla. Un vuelo corto de dron puede revisar si el bordo de un jagüey o de una presa pequeña tiene grietas y filtraciones, si los canales y tuberías de riego tienen fugas u obstrucciones, si las cercas perimetrales están rotas, si los techos y mallas de los invernaderos están rasgados y si los techos de las bodegas tienen daños.",
            "Vuela despacio a lo largo de la estructura con la cámara inclinada, no solo apuntando hacia abajo. Mantén una distancia segura de los cables eléctricos y los edificios, y quédate dentro de tus aprobaciones. Toma fotos en los mismos puntos cada vez para poder comparar.",
            "Convierte las fotos en una lista de reparaciones: elemento, ubicación, problema, urgencia y quién lo arreglará. Vuela otra vez después de las reparaciones, y antes de las lluvias, cuando una falla haría más daño."
          ],
          steps: ["Haz una lista de las estructuras que revisarás y dónde están.", "Vuela despacio a lo largo de cada una con la cámara inclinada.", "Fotografía los mismos puntos cada vez.", "Escribe una lista de reparaciones: elemento, ubicación, problema, urgencia, quién lo arregla.", "Vuela otra vez después de las reparaciones y antes de las lluvias."],
          words: [["Jagüey", "un estanque excavado que junta agua de lluvia para los animales o el riego."], ["Filtración", "agua que se escapa poco a poco a través del bordo de una presa o de la orilla de un canal."]],
          slides: [
            { title: "Qué inspeccionar", bullets: ["Jagüeyes y bordos de presas pequeñas", "Canales y tuberías", "Cercas, techos de invernaderos y de bodegas"] },
            { title: "Cómo volarlo", bullets: ["Despacio a lo largo de la estructura", "Cámara inclinada, no solo hacia abajo", "Los mismos puntos de foto cada vez"] },
            { title: "De las fotos a las reparaciones", bullets: ["Elemento, ubicación, problema, urgencia, quién", "Vuela otra vez tras reparar y antes de las lluvias"] }
          ],
          tryIt: "Tarea final: escribe tu plan de monitoreo para toda la temporada de una finca mixta: zonas y lo que recibe cada una, vuelos de cultivo, vuelos climáticos, un vuelo de ganado y pastos, un vuelo de infraestructura, qué buscas cada vez y a qué acción podría llevar cada hallazgo.",
          youCanNow: "inspeccionar con dron la infraestructura de la finca y planear el monitoreo de toda la finca durante una temporada."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Clima, ganado e infraestructura",
        questions: [
          { q: "La agricultura climáticamente inteligente de la FAO tiene tres fines. ¿Cuál es uno de ellos?", options: ["Ayudar a las fincas a adaptarse y a ser más resistentes", "Usar todo el fertilizante posible", "Talar todos los árboles", "Sembrar un solo cultivo"], answer: 0, why: "La ACI busca productividad, adaptación y resistencia, y menos emisiones." },
          { q: "¿Cuándo es un buen momento para un vuelo climático que encuentre cárcavas y deslaves?", options: ["Solo a medianoche", "Nunca", "Después de la primera tormenta fuerte de la temporada", "Durante una exhibición de drones"], answer: 2, why: "El daño reciente se ve claro justo después de una lluvia fuerte." },
          { q: "Las vacas empiezan a correr mientras el dron está encima. Debes:", options: ["Volar más bajo para calmarlas", "Perseguirlas para que regresen", "Seguir dando vueltas", "Detenerte y alejar el dron"], answer: 3, why: "El bienestar de los animales y la seguridad van primero." },
          { q: "Un mapa de pastos muestra un potrero con mucho suelo pelón. Esto sugiere:", options: ["Sobrepastoreo; el potrero puede necesitar descanso", "Que el dron está roto", "Solo demasiada lluvia", "Un pasto perfecto"], answer: 0, why: "El suelo pelón en un pasto suele significar que los animales comieron más rápido de lo que volvió a crecer el pasto." },
          { q: "Al inspeccionar el bordo de un jagüey, debes:", options: ["Volar solo apuntando hacia abajo, muy rápido", "Volar despacio a lo largo del bordo con la cámara inclinada", "Volar sobre las personas cercanas", "Saltártelo"], answer: 1, why: "Una cámara inclinada muestra las grietas y filtraciones del bordo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones para el monitoreo agrícola 4: precisión, clima y monitoreo del ganado",
    questions: [
      { q: "La agricultura de precisión significa:", options: ["Tratar igual cada parte de un campo", "Manejar cada parte de un campo según lo que necesita", "Usar solo drones", "Trabajar la tierra de noche"], answer: 1, why: "Ajusta los insumos y el trabajo a lo que necesita cada área." },
      { q: "¿Por qué la mayoría de los campos no son parejos?", options: ["Los drones los vuelven disparejos", "Sí son parejos", "El suelo, la pendiente, el agua, la sombra y el uso pasado son distintos", "Las semillas siempre son malas"], answer: 2, why: "La naturaleza y la historia de cultivo hacen que algunas áreas crezcan mejor." },
      { q: "¿Cuántas zonas suelen bastar en una finca pequeña?", options: ["De dos a cuatro", "Cincuenta", "Cien", "Ninguna"], answer: 0, why: "Pocas zonas sencillas son fáciles de manejar y de marcar." },
      { q: "¿Por qué marcar las zonas en el terreno?", options: ["Para decorar la finca", "La ley exige estacas", "Para espantar a los pájaros", "Para que los trabajadores encuentren y traten cada zona"], answer: 3, why: "Los trabajadores necesitan ver dónde empieza y termina cada zona." },
      { q: "Dosis variable significa:", options: ["Cantidades distintas en lugares distintos", "La misma cantidad en todas partes", "Cambiar la velocidad del dron", "Cambiar los precios de los cultivos"], answer: 0, why: "Las dosis cambian por zona según la necesidad." },
      { q: "En una finca pequeña, la dosis variable se puede aplicar:", options: ["Solo con máquinas grandes", "Con trabajadores que ponen más o menos fertilizante por hoyo según la zona", "Con satélites", "De ninguna forma"], answer: 1, why: "La idea funciona a mano con instrucciones claras por zona." },
      { q: "Una zona débil con suelo poco profundo y pedregoso puede:", options: ["Necesitar siempre el doble de fertilizante", "Ser el mejor lugar para más semilla", "No pagar el fertilizante extra", "Necesitar fumigación"], answer: 2, why: "El suelo limita el crecimiento; el insumo extra se puede desperdiciar." },
      { q: "¿Quién debe aprobar la fumigación de plaguicidas con dron?", options: ["Solo el vendedor del dron", "Solo el agricultor", "Solo un vecino", "La autoridad de aviación y el regulador de plaguicidas"], answer: 3, why: "A los drones de fumigación les aplican las normas de aviación y de plaguicidas." },
      { q: "La población de plantas es:", options: ["Las plantas que nacieron vs las sembradas", "La altura del dron", "El letrero de la finca", "El precio de la semilla"], answer: 0, why: "Muestra qué tan bien se estableció el cultivo." },
      { q: "Cuentas 40,000 plantas de maíz por hectárea frente a una meta de unas 53,000. La población es de alrededor del:", options: ["25 por ciento", "50 por ciento", "75 por ciento", "100 por ciento"], answer: 2, why: "40,000 dividido entre 53,000 da alrededor de 0.75." },
      { q: "Una primera estimación de cosecha se debe dar como:", options: ["Una promesa exacta", "Un secreto", "Un rango que puede cambiar", "El monto de un préstamo"], answer: 2, why: "El clima, las plagas y las pérdidas cambian la cosecha final." },
      { q: "¿Cuál es una práctica climáticamente inteligente que los drones ayudan a seguir?", options: ["Quemar los rastrojos", "Arar a favor de la pendiente", "Quitar todos los árboles", "Terrazas, acolchado y siembra de árboles"], answer: 3, why: "Los mapas muestran si estas prácticas funcionan con el tiempo." },
      { q: "En una temporada seca, ¿qué mapas muestran qué áreas se secan primero?", options: ["Los mapas NDVI o térmicos", "Un mapa de carreteras", "Una lista de precios", "Un cartel de lluvias"], answer: 0, why: "El NDVI y la térmica muestran el vigor de las plantas y el estrés por calor." },
      { q: "¿Por qué volar la misma área en fechas fijas?", options: ["Para gastar más baterías", "Para comparar los cambios en el tiempo", "Porque los drones necesitan rutina", "Para grabar a los vecinos"], answer: 1, why: "Los mapas repetidos muestran tendencias y el efecto de las acciones." },
      { q: "Antes de un vuelo sobre el ganado debes:", options: ["Volar bajo sobre el hato", "Arrear a los animales a un solo lugar", "Pedir permiso al pastor y acordar hora y área", "Volar a la máxima velocidad"], answer: 2, why: "El permiso y un acercamiento tranquilo protegen a los animales y a las personas." },
      { q: "En un rancho, las cámaras térmicas ayudan a:", options: ["Hacer crecer el pasto", "Reparar cercas", "Leer los aretes de las orejas", "Encontrar animales al amanecer o en el monte espeso"], answer: 3, why: "Los animales se ven como puntos calientes." },
      { q: "El pastoreo rotativo significa:", options: ["Mover a los animales entre potreros para que el pasto vuelva a crecer", "Tener a los animales en un solo lugar todo el año", "Pastorear solo de noche", "Dar solo heno"], answer: 0, why: "Dejar descansar los potreros permite que el pasto se recupere." },
      { q: "Una filtración en el bordo de una presa significa:", options: ["Que la presa está llena de peces", "Que el agua se escapa poco a poco", "Que el bordo es nuevo", "Que está lloviendo"], answer: 1, why: "La filtración puede debilitar el bordo y hay que repararla." },
      { q: "Una buena lista de reparaciones de infraestructura incluye:", options: ["Solo fotos", "El modelo del dron", "Elemento, ubicación, problema, urgencia y quién lo arreglará", "Precios de mercado"], answer: 2, why: "Los detalles claros hacen que las reparaciones se hagan." },
      { q: "¿Cuándo es más útil una revisión de la infraestructura?", options: ["Nunca", "Solo después de una falla", "Durante una tormenta", "Antes de las lluvias y después de las reparaciones"], answer: 3, why: "Arreglar los problemas antes de las lluvias evita fallas." }
    ]
  }
};
