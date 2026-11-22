"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-phone-repair-business.js). See scripts/koachlearn-courses/README.md, "Translations".
// Money figures are examples only, exactly as in the English. No added prices, fees or facts.

const NFPA = { name: "NFPA (Asociación Nacional de Protección contra Incendios de EE. UU.): seguridad de las baterías de iones de litio (señales de alerta; no tirarlas a la basura, reciclarlas)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "Nota descriptiva de la OMS (WHO): Residuos electrónicos: 62 millones de toneladas en 2022, 22.3% reciclado de forma documentada; peligros de quemarlos", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Comisión de Protección de Datos de Nigeria (NDPC; Ley de Protección de Datos de Nigeria de 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Comisión de Protección de Datos de Ghana (Ley de Protección de Datos de 2012, Ley 843; los responsables de datos deben registrarse)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Oficina del Comisionado de Protección de Datos de Kenia (ODPC)", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business-es",
  lang: "es",
  translationOf: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Cómo empezar un negocio de reparación de teléfonos",
  skills: "Preparar una mesa de reparación segura, Manejar baterías de litio con seguridad, Encontrar fallas y llenar órdenes de trabajo, Proteger los datos de los clientes, Poner precio a las reparaciones con garantía, Manejar los residuos electrónicos con seguridad",
  outcome: "manejar un pequeño negocio de reparación de teléfonos seguro y honesto: trabajar en una mesa segura, manejar baterías de litio sin riesgo de incendio, encontrar las fallas más comunes y anotar cada trabajo en una orden de trabajo, proteger los datos de cada cliente, poner precio a las reparaciones con una garantía clara y deshacerte de baterías muertas y piezas rotas de forma segura.",
  about: [
    "Este curso es para jóvenes, artesanos y dueños de pequeños negocios de toda África que reparan teléfonos, o quieren hacerlo, en un quiosco, un puesto de mercado o una tienda pequeña: en la avenida Luthuli de Nairobi, el Computer Village de Lagos, el Circle de Acra, Adjamé en Abiyán o Akwa en Duala.",
    "El capítulo 1 trata del trabajo seguro: tu mesa y tus herramientas, los peligros de las baterías de litio y cómo encontrar una falla paso a paso y anotarla en una orden de trabajo. El capítulo 2 trata del negocio: proteger los datos de los clientes, precios y garantías, rechazar teléfonos robados y manejar los residuos electrónicos.",
    "Este no es un curso completo de electrónica. Te da los hábitos de seguridad y las habilidades de negocio que te protegen a ti, a tus clientes y a tu tienda, para que tus habilidades técnicas te den buena fama. Las cifras de dinero son solo ejemplos. Cada lección dura unos cinco minutos y termina con una tarea. Después de cada lección hay preguntas rápidas, cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Prepara el paquete inicial de tu tienda: (1) una lista de precios de al menos cinco reparaciones comunes (por ejemplo pantalla, puerto de carga, batería, altavoz, restablecimiento de software), cada una con el costo de la pieza, la mano de obra, el precio y los días de garantía; (2) una orden de trabajo de una página que usarás con cada teléfono; (3) una promesa de datos para los clientes de al menos cuatro líneas; y (4) una tarjeta de seguridad para la pared con tus reglas para las baterías y el lugar adonde irán tus baterías muertas y piezas rotas.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes, artesanos y dueños de pequeños negocios de pueblos y ciudades de toda África (Kenia, Nigeria, Ghana, Costa de Marfil, Camerún, Senegal, Egipto y más) que reparan teléfonos o quieren empezar, muchas veces en un quiosco o un puesto de mercado.",
    startingPoint: "Muchos aprendieron algunas reparaciones de un amigo o como aprendices, o todavía no saben ninguna. Pocos tienen una rutina segura en la mesa, saben lo peligrosa que es una batería de litio dañada, llenan una orden de trabajo, protegen los datos de los clientes, ponen precios con garantía o saben adónde deben ir los residuos electrónicos.",
    gap: "Los incendios de baterías queman tiendas y hieren a personas; los datos de clientes perdidos o filtrados destruyen la confianza; adivinar los precios hace perder dinero; comprar teléfonos robados trae problemas con la policía; quemar residuos electrónicos envenena a las familias. Los hábitos seguros y unas herramientas de negocio sencillas convierten una habilidad en un negocio confiable y duradero.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra técnica",
      "Dispositivos: un teléfono Android básico; un espacio pequeño y compartido, muchas veces sin extintor",
      "Las leyes de protección de datos, permisos de negocio y residuos electrónicos cambian según el país y con el tiempo: los participantes consultan con las oficinas nombradas",
      "Seguridad: no se trabaja con baterías hinchadas o dañadas más allá de sacarlas de forma segura; no se queman residuos electrónicos",
      "El curso también está traducido al francés y al árabe, así que los ejemplos incluyen tiendas francófonas y del norte de África"
    ],
    prerequisites: "Ninguno para las habilidades de seguridad y de negocio. Las habilidades prácticas de reparación vienen de la práctica o de un aprendizaje con un técnico."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Antes y durante cualquier reparación", action: "preparar una mesa segura y manejar las baterías de litio con seguridad, detectando una batería hinchada, caliente o dañada", standard: "siguiendo todas las reglas de tu tarjeta de seguridad de baterías" },
    { id: "O2", condition: "Con un teléfono que trae un cliente", action: "encontrar la falla probable con una revisión paso a paso y anotar el trabajo en una orden de trabajo", standard: "con la falla, el precio acordado y el consentimiento del cliente por escrito antes de empezar" },
    { id: "O3", condition: "Cuando un cliente te deja su teléfono", action: "proteger los datos del cliente pidiéndole una copia de seguridad y sin copiar, mirar ni compartir nunca sus archivos", standard: "sin pedir nunca un PIN o una contraseña que no necesitas" },
    { id: "O4", condition: "Con el costo de las piezas y el tiempo que toma una reparación", action: "calcular el precio de una reparación y escribir una lista de precios con las condiciones de garantía", standard: "cubriendo las piezas, la mano de obra y los costos de la tienda con una ganancia, y con una garantía clara" },
    { id: "O5", condition: "Cuando tienes baterías muertas, pantallas rotas o un teléfono que sospechas que es robado", action: "elegir la acción segura y legal: guardar los residuos electrónicos y entregarlos a un recolector, y rechazar un teléfono sin prueba de propiedad", standard: "sin quemar, sin tirar residuos y sin comprar teléfonos sin prueba" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Trabajo seguro y cómo encontrar la falla",
      lessons: [
        {
          title: "Una mesa de reparación segura",
          objectives: ["O1"],
          minutes: 4,
          goal: "Preparar una mesa de reparación segura, ordenada y lista para trabajar.",
          text: [
            "Tu mesa es donde los accidentes ocurren o se evitan. Una buena mesa está seca, bien iluminada y lejos de fogones, combustible y agua. Tiene una alfombrilla resistente al calor, una bandeja pequeña para los tornillos y un espacio despejado para que las piezas pequeñas no se pierdan.",
            "Herramientas: los destornilladores correctos, herramientas de apertura de plástico (spudgers), pinzas, una ventosa, un multímetro y una pistola de aire caliente o un cautín si te han enseñado a usarlos. Las herramientas de calor deben estar en su soporte, nunca sobre papel o tela, y apagadas cuando te alejas de la mesa.",
            "Protégete tú y protege el teléfono: usa gafas de seguridad cuando abras pantallas o trabajes con vidrio, usa una pulsera antiestática o toca metal sin pintar para descargar la estática antes de tocar la placa, y ten una lata de metal con arena seca cerca de la mesa para una batería dañada. Conoce la salida de tu tienda y mantenla despejada."
          ],
          steps: ["Elige un lugar seco y bien iluminado, lejos de fogones, combustible y agua.", "Pon una alfombrilla resistente al calor y una bandeja para tornillos.", "Deja las herramientas de calor en su soporte y apágalas cuando te alejes.", "Usa gafas de seguridad; descarga la estática antes de tocar la placa.", "Ten una lata de metal con arena seca cerca de la mesa y una salida despejada."],
          words: [["Spudger", "una herramienta de plástico para abrir un teléfono y levantar piezas sin rayarlas ni causar un cortocircuito."], ["Multímetro", "un probador que mide el voltaje, la corriente y la resistencia."], ["Estática", "una pequeña carga eléctrica en tu cuerpo que puede dañar la placa de un teléfono."]],
          slides: [
            { title: "Dónde poner tu mesa", bullets: ["Seca y bien iluminada", "Lejos de fogones, combustible y agua", "Con una salida despejada de la tienda"] },
            { title: "Herramientas básicas", bullets: ["Destornilladores, spudgers de plástico, pinzas, ventosa", "Multímetro", "Herramientas de calor solo si sabes usarlas; siempre en su soporte"] },
            { title: "Protégete tú y protege el teléfono", bullets: ["Gafas de seguridad para vidrio y pantallas", "Descarga la estática antes de tocar la placa", "Lata de metal con arena seca para una batería dañada"] }
          ],
          tryIt: "Dibuja un plano sencillo de tu mesa (o de la mesa que quieres): dónde va cada herramienta, dónde está el soporte de la herramienta de calor, dónde está la lata de arena y por dónde se sale. Anota lo que todavía necesitas comprar.",
          youCanNow: "preparar una mesa de reparación segura y ordenada, con las herramientas y los elementos de seguridad correctos.",
          quickCheck: [
            { objective: "O1", q: "¿Dónde debe quedar una pistola de aire caliente cuando la dejas?", options: ["Sobre una pila de papeles", "Sobre el teléfono del cliente", "En su soporte, lejos de telas y papeles", "En el suelo"], answer: 2, why: "El soporte mantiene la punta caliente lejos de lo que puede quemarse." },
            { objective: "O1", q: "¿Por qué tener una lata de metal con arena seca cerca de la mesa?", options: ["Para guardar tornillos", "Para poner una batería dañada de forma segura", "Para limpiar pantallas", "Para pesar piezas"], answer: 1, why: "Una lata de metal con arena es un lugar más seguro para una batería dañada que la mesa o un bote de basura." }
          ]
        },
        {
          title: "Los peligros de las baterías de litio",
          objectives: ["O1"],
          minutes: 5,
          goal: "Detectar una batería hinchada, caliente o dañada y manejarla sin causar un incendio.",
          text: [
            "Casi todos los teléfonos tienen una batería de iones de litio. Guarda mucha energía. Si se perfora, se dobla, se aplasta, se calienta demasiado o hace cortocircuito, puede prenderse fuego muy rápido, soltar humo venenoso y volver a arder después de parecer apagada.",
            "Señales de alerta: hinchazón (la tapa trasera o la pantalla se levanta), calor, un olor extraño, silbidos o chasquidos, o humo. Una batería hinchada se debe cambiar; nunca se aplasta, se perfora ni se carga.",
            "Hábitos seguros: desconecta primero el conector de la batería, antes de trabajar en la placa. Nunca saques una batería haciendo palanca con una herramienta de metal; usa herramientas de plástico y el removedor de adhesivo adecuado, y ve despacio. Nunca uses la pistola de aire caliente cerca de una batería. Carga los teléfonos solo con buenos cargadores, sobre una superficie dura y donde puedas verlos.",
            "Si una batería empieza a echar humo o a silbar: aleja a la gente y no respires el humo. Solo si puedes hacerlo sin peligro, usa unas pinzas largas para ponerla en tu lata de metal con arena, afuera. Si hay un fuego que no puedes controlar, saca a todos y llama a los bomberos."
          ],
          steps: ["Busca hinchazón, calor, olor, ruido o humo antes de abrir cualquier teléfono.", "Desconecta la batería antes de trabajar en la placa.", "Usa herramientas de plástico, nunca de metal, para sacar una batería; nunca la dobles ni la perfores.", "Mantén las herramientas de calor lejos de la batería.", "Si echa humo: aleja a la gente, usa pinzas y la lata de arena solo si es seguro, y llama a los bomberos si hay fuego."],
          words: [["Batería de iones de litio", "la batería recargable de los teléfonos; guarda mucha energía y puede arder si se daña."], ["Batería hinchada", "una batería que se ha inflado porque se acumula gas adentro; es peligrosa."], ["Cortocircuito", "cuando la electricidad toma un camino equivocado, por ejemplo a través de una herramienta de metal, y causa calor o fuego."]],
          slides: [
            { title: "Por qué las baterías de litio son peligrosas", bullets: ["Guardan mucha energía", "Un daño, el calor o un cortocircuito pueden causar fuego rápido", "El humo es venenoso; el fuego puede volver"] },
            { title: "Señales de alerta", bullets: ["Hinchazón: la tapa o la pantalla se levanta", "Calor, olor extraño", "Silbidos, chasquidos o humo"] },
            { title: "Hábitos seguros", bullets: ["Desconecta primero la batería", "Solo herramientas de plástico; nunca la dobles ni la perfores", "Nada de herramientas de calor cerca de la batería"] },
            { title: "Si echa humo", bullets: ["Aleja a la gente; no respires el humo", "Solo si es seguro: con pinzas, a la lata de arena, afuera", "Fuego que no controlas: sal y llama a los bomberos"] }
          ],
          sources: [NFPA],
          tryIt: "Escribe tu tarjeta de seguridad de baterías en cinco líneas para la pared de tu tienda: las señales de alerta, los hábitos seguros y qué hacer si una batería echa humo. Averigua el número de teléfono de los bomberos más cercanos.",
          youCanNow: "detectar una batería peligrosa, manejar las baterías con seguridad durante una reparación y actuar de forma segura si una empieza a echar humo.",
          quickCheck: [
            { objective: "O1", q: "La tapa trasera de un teléfono está levantada porque la batería se infló. ¿Qué haces?", options: ["La aplastas y cierras el teléfono", "La cargas para probarla", "La perforas para que salga el gas", "La cambias, manejándola con cuidado sin doblarla ni perforarla"], answer: 3, why: "Una batería hinchada es peligrosa; hay que sacarla con cuidado y cambiarla, nunca aplastarla, perforarla ni cargarla." },
            { objective: "O1", q: "¿Qué debes hacer primero antes de trabajar en la placa de un teléfono?", options: ["Desconectar la batería", "Calentar la placa", "Cargar el teléfono", "Sacar solo la bandeja de la SIM"], answer: 0, why: "Desconectar la batería evita cortocircuitos que pueden dañar la placa o causar un incendio." }
          ]
        },
        {
          title: "Encontrar la falla y llenar una orden de trabajo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Encontrar la falla probable con una revisión paso a paso y anotar el trabajo en una orden de trabajo.",
          text: [
            "Empieza escuchando. Pregúntale al cliente qué pasó: ¿se cayó, se mojó, está lento, no carga, no tiene sonido? ¿Cuándo empezó? Luego revisa de la causa más sencilla a la más difícil. Muchos teléfonos \"muertos\" solo necesitan un buen cargador, un puerto de carga limpio o reiniciar el software.",
            "Un orden sencillo: (1) busca daños, hinchazón o marcas de agua; (2) prueba un cargador y un cable que sabes que funcionan; (3) limpia el puerto de carga con cuidado con un palillo de plástico o de madera; (4) reinicia y revisa si el problema es de software; (5) solo entonces abre el teléfono y prueba las piezas.",
            "Antes de empezar cualquier trabajo pagado, llena una orden de trabajo y muéstrasela al cliente. En ella se anota: la fecha, el nombre y el número de teléfono del cliente, el modelo del teléfono y el IMEI, qué falla, los daños que ves (grietas, golpes), lo que vas a hacer, el precio acordado, la fecha de entrega y la firma del cliente o un \"sí\" grabado. Dale al cliente una copia o un número de ticket. Esto los protege a los dos.",
            "Ejemplo: a Kwame, en Acra, le traen un teléfono que \"no carga\". Prueba un buen cable, quita la pelusa del puerto y el teléfono carga. Cobra solo una pequeña tarifa por la limpieza, y desde entonces el cliente vuelve con él para cada reparación."
          ],
          steps: ["Pregunta qué pasó y cuándo empezó.", "Busca daños, hinchazón o marcas de agua.", "Prueba un cargador y un cable que funcionan; limpia el puerto con cuidado.", "Reinicia y revisa si hay un problema de software.", "Llena la orden de trabajo con la falla, los daños vistos, el precio y la fecha, y consigue el sí del cliente antes de abrir el teléfono."],
          words: [["Orden de trabajo", "un registro escrito de una reparación: el teléfono, la falla, el precio, la fecha y el acuerdo del cliente."], ["IMEI", "el número único de 15 dígitos del teléfono; marca *#06# para verlo."], ["Falla de software", "un problema en los programas del teléfono, no en sus piezas; muchas veces se arregla reiniciando o actualizando."]],
          slides: [
            { title: "Primero escucha", bullets: ["¿Qué pasó? ¿Se cayó, se mojó, está lento, no carga?", "¿Cuándo empezó?", "Muchos teléfonos \"muertos\" solo necesitan un arreglo sencillo"] },
            { title: "De lo más sencillo a lo más difícil", bullets: ["Mira: daños, hinchazón, marcas de agua", "Buen cargador; limpia el puerto con cuidado", "Reinicia por el software; luego abre y prueba las piezas"] },
            { title: "La orden de trabajo", bullets: ["Cliente, modelo del teléfono, IMEI (marca *#06#)", "Falla, daños vistos, trabajo a hacer", "Precio, fecha, el sí del cliente; da una copia o un ticket"] }
          ],
          tryIt: "Dibuja tu propia orden de trabajo en una página con todas las casillas de esta lección. Llénala para un teléfono de práctica (el tuyo o el de un amigo) con una falla inventada.",
          youCanNow: "revisar un teléfono de la causa más sencilla a la más difícil y anotar cada trabajo en una orden de trabajo antes de empezar.",
          quickCheck: [
            { objective: "O2", q: "Un cliente dice que el teléfono no carga. ¿Qué revisas primero?", options: ["Cambiar la placa", "Un cargador y un cable que funcionan, y un puerto limpio", "Cambiar la pantalla", "Venderle un teléfono nuevo"], answer: 1, why: "Empieza por las causas más sencillas; un cable malo o un puerto sucio son comunes." },
            { objective: "O2", q: "¿Por qué anotar en la orden de trabajo los daños que ves, como una esquina rajada, antes de empezar?", options: ["Para que el cliente pague más", "No hace falta", "Para llenar espacio", "Para que nadie te culpe después por un daño que ya estaba"], answer: 3, why: "Anotar los daños que ya existen te protege a ti y al cliente de discusiones." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Trabajo seguro y cómo encontrar la falla",
        questions: [
          { objective: "O1", q: "¿Cuál es una señal de alerta de una batería peligrosa?", options: ["El teléfono es nuevo", "Hinchazón, calor, olor, silbidos o humo", "La batería es negra", "El teléfono tiene funda"], answer: 1, why: "La hinchazón, el calor, el olor, el ruido y el humo son las señales de alerta." },
          { objective: "O1", q: "¿Con qué herramienta debes sacar una batería haciendo palanca?", options: ["Con una herramienta de plástico, despacio", "Con un destornillador de metal", "Con un cuchillo de cocina", "Con los dientes"], answer: 0, why: "El metal puede perforar la batería o causar un cortocircuito; las herramientas de plástico son más seguras." },
          { objective: "O1", q: "Una batería en tu mesa empieza a silbar y a echar humo. ¿Cuál es el primer paso correcto?", options: ["Soplarle", "Guardarla en el bolsillo", "Alejar a la gente y evitar el humo", "Seguir trabajando"], answer: 2, why: "La seguridad de las personas va primero; el humo es venenoso." },
          { objective: "O2", q: "¿Dónde encuentras rápido el IMEI de un teléfono?", options: ["En el cargador", "En la tarjeta SIM", "En la bolsa del cliente", "Marcando *#06#"], answer: 3, why: "Marcar *#06# muestra el IMEI en casi todos los teléfonos." },
          { objective: "O2", q: "¿Cuándo debe aceptar el precio el cliente?", options: ["Antes de empezar, por escrito en la orden de trabajo", "Después de terminar", "Nunca", "Cuando se queje"], answer: 0, why: "Ponerse de acuerdo primero, por escrito, evita discusiones." }
        ]
      }
    },
    {
      name: "Capítulo 2: Un negocio honesto y seguro",
      lessons: [
        {
          title: "Proteger los datos de tus clientes",
          objectives: ["O3"],
          minutes: 5,
          goal: "Proteger los datos de cada cliente mientras su teléfono está en tu tienda.",
          text: [
            "Un teléfono guarda la vida de una persona: fotos, mensajes, dinero móvil, aplicaciones del banco y contactos. Los clientes te lo confían. Una sola foto filtrada o un saldo de dinero móvil robado puede destruir la fama de tu tienda, y en muchos países puede ir contra la ley.",
            "Antes de la reparación: pídele al cliente que haga una copia de seguridad de su teléfono si puede, y que cierre sesión en las aplicaciones de dinero móvil y del banco o saque la tarjeta SIM. La mayoría de las reparaciones no necesitan el código de bloqueo. Si de verdad lo necesitas para probar el teléfono, pídele al cliente que lo desbloquee delante de ti, o que ponga un código temporal y lo cambie después. Nunca pidas un PIN de dinero móvil o del banco. Ninguna reparación lo necesita jamás.",
            "Durante y después: no abras fotos, mensajes ni aplicaciones que no sean parte de la reparación. No copies nada y no dejes que otras personas toquen los teléfonos. Guarda los teléfonos en un cajón con llave. Destruye las órdenes de trabajo o guárdalas en un lugar seguro, porque tienen nombres y números.",
            "Los países tienen leyes y oficinas de protección de datos, por ejemplo la Oficina del Comisionado de Protección de Datos de Kenia, la Comisión de Protección de Datos de Nigeria y la Comisión de Protección de Datos de Ghana, donde deben registrarse los negocios que guardan datos personales. Averigua qué espera la oficina de tu país de un negocio pequeño como el tuyo."
          ],
          steps: ["Pídele al cliente que haga una copia de seguridad y cierre sesión en las aplicaciones de dinero, o que saque la SIM.", "No pidas el código de bloqueo salvo que de verdad lo necesites; deja que el cliente desbloquee el teléfono delante de ti.", "Nunca pidas un PIN de dinero móvil o del banco.", "Abre solo lo que la reparación necesita; no copies nada.", "Guarda con llave los teléfonos y las órdenes de trabajo; revisa las reglas de protección de datos de tu país."],
          words: [["Datos personales", "información sobre una persona, como su nombre, su número, sus fotos y sus mensajes."], ["Copia de seguridad", "una copia de los datos del teléfono guardada en otro lugar, para que no se pierda nada si la reparación sale mal."], ["Ley de protección de datos", "una ley que dice cómo deben los negocios reunir, guardar y proteger los datos personales de la gente."]],
          slides: [
            { title: "Un teléfono guarda una vida", bullets: ["Fotos, mensajes, contactos", "Aplicaciones de dinero móvil y del banco", "Una filtración puede acabar con la fama de tu tienda"] },
            { title: "Antes de la reparación", bullets: ["El cliente hace una copia de seguridad", "Cierra sesión en las apps de dinero, o saca la SIM", "Código de bloqueo solo si de verdad hace falta; nunca un PIN"] },
            { title: "Durante y después", bullets: ["Abre solo lo que la reparación necesita", "No copies nada; nadie más toca los teléfonos", "Guarda con llave los teléfonos y las órdenes de trabajo"] },
            { title: "Conoce la ley", bullets: ["Kenia: Oficina del Comisionado de Protección de Datos", "Nigeria: Comisión de Protección de Datos de Nigeria", "Ghana: Comisión de Protección de Datos; otros: la oficina de tu país"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Escribe tu promesa de datos para los clientes: al menos cuatro líneas cortas que mostrarás a cada cliente, como \"Nunca te pedimos tu PIN de dinero móvil.\" Escribe el nombre de la oficina de protección de datos de tu país.",
          youCanNow: "proteger los datos de tus clientes antes, durante y después de una reparación, y saber qué oficina pone las reglas en tu país.",
          quickCheck: [
            { objective: "O3", q: "Un técnico pide el PIN de dinero móvil del cliente para \"probar el teléfono\". ¿Qué es cierto?", options: ["Se necesita en todas las reparaciones", "Está bien si es honesto", "Ninguna reparación lo necesita; nunca lo pidas", "Solo para reparar pantallas"], answer: 2, why: "Ninguna reparación necesita jamás un PIN de dinero móvil o del banco." },
            { objective: "O3", q: "¿Qué debe hacer el cliente antes de dejar el teléfono, si puede?", options: ["Darte todas sus contraseñas", "Hacer una copia de seguridad y cerrar sesión en las aplicaciones de dinero", "Dejar el teléfono desbloqueado para siempre", "Borrar todos sus contactos"], answer: 1, why: "Una copia de seguridad y cerrar sesión en las aplicaciones de dinero lo protegen si algo sale mal." }
          ]
        },
        {
          title: "Precios, garantías y cómo rechazar teléfonos robados",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Calcular el precio de una reparación y escribir una lista de precios con las condiciones de garantía.",
          text: [
            "Un precio justo cubre tres cosas y deja una ganancia: la pieza, tu tiempo (mano de obra) y una parte de los costos de tu tienda, como el alquiler, la electricidad, las herramientas y los datos. Ejemplo (las cifras son solo ejemplos): una pantalla cuesta NGN 15,000. Tu mano de obra es NGN 4,000 y tu parte de los costos de la tienda NGN 1,000. Costo: NGN 20,000. Súmale NGN 3,000 de ganancia: precio NGN 23,000.",
            "Las piezas vienen en distintas calidades. Dile al cliente con honestidad qué pieza vas a usar (original, copia buena o copia barata) y el precio de cada una. Una pieza barata que falla en una semana te cuesta tu buena fama.",
            "Una garantía es tu promesa: si la misma reparación falla dentro de un número de días por culpa de tu trabajo o de la pieza, la arreglas gratis. Escribe cuántos días y qué no cubre (caídas nuevas, agua, que otra persona abra el teléfono). Pon la lista de precios y la garantía donde los clientes puedan verlas.",
            "Rechaza los teléfonos que pueden ser robados. No compres, desbloquees ni desarmes un teléfono si el vendedor no muestra una prueba de que es suyo, como la caja con el mismo IMEI o un recibo. Si un teléfono parece robado, no discutas; recházalo con amabilidad. En muchos países, comprar objetos robados es un delito."
          ],
          steps: ["Suma el costo de la pieza, tu mano de obra y una parte de los costos de la tienda.", "Agrega tu ganancia para obtener el precio.", "Ofrece las opciones de piezas con honestidad, con un precio para cada una.", "Escribe los días de garantía y lo que no cubre.", "Muestra la lista de precios; rechaza los teléfonos sin prueba de propiedad."],
          words: [["Mano de obra", "el pago por tu tiempo y tu habilidad."], ["Gastos generales (costos de la tienda)", "lo que cuesta mantener la tienda, como el alquiler, la luz, las herramientas y los datos, repartido entre los trabajos."], ["Garantía", "una promesa por escrito de arreglar gratis la misma falla durante un tiempo fijo."]],
          slides: [
            { title: "Qué cubre un precio", bullets: ["Pieza + mano de obra + parte de los costos de la tienda", "Luego suma tu ganancia", "Ejemplo: costo NGN 20,000 + NGN 3,000 = NGN 23,000"] },
            { title: "Piezas honestas", bullets: ["Original, copia buena o copia barata", "Dile al cliente cuál, y el precio de cada una", "Las piezas baratas que fallan te cuestan la fama"] },
            { title: "Tu garantía", bullets: ["La misma falla se arregla gratis por días fijos", "No cubre: caídas nuevas, agua, que otros lo abran", "Muestra la lista de precios y la garantía"] },
            { title: "Rechaza los teléfonos robados", bullets: ["Prueba: caja con el mismo IMEI, o recibo", "Sin prueba: recházalo con amabilidad", "Comprar objetos robados puede ser un delito"] }
          ],
          tryIt: "Escribe tu lista de precios para cinco reparaciones comunes: para cada una, el costo de la pieza, la mano de obra, la parte de los costos de la tienda, la ganancia, el precio y los días de garantía. Usa la moneda de tu país.",
          youCanNow: "poner a una reparación un precio que cubra todos tus costos y deje ganancia, escribir una garantía y rechazar un teléfono que puede ser robado.",
          quickCheck: [
            { objective: "O4", q: "Pieza GHS 150, mano de obra GHS 60, parte de los costos de la tienda GHS 20, ganancia GHS 40. ¿Cuál es el precio?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "Un joven quiere venderte un teléfono barato, pero no tiene caja ni recibo. ¿Qué haces?", options: ["Lo rechazas con amabilidad", "Lo compras rápido antes que otros", "Primero se lo desbloqueas", "Lo desarmas para piezas"], answer: 0, why: "Sin prueba de propiedad, el teléfono puede ser robado; recházalo." }
          ]
        },
        {
          title: "Residuos electrónicos, baterías muertas y el paquete inicial de tu tienda",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Guardar con seguridad las baterías muertas y las piezas rotas y entregarlas a un recolector autorizado.",
          text: [
            "Los teléfonos viejos, las pantallas, las placas y las baterías son residuos electrónicos. Contienen plomo, mercurio y otros venenos. La OMS (Organización Mundial de la Salud) dice que quemar residuos electrónicos es la forma más peligrosa de manejarlos, y que daña sobre todo a los niños y a las mujeres embarazadas. En 2022 el mundo produjo unos 62 millones de toneladas de residuos electrónicos, y solo el 22.3% quedó documentado como recogido y reciclado correctamente.",
            "Nunca quemes residuos electrónicos para sacar cobre, y nunca tires baterías a la basura, al fuego o a un desagüe. Cubre con cinta los extremos (terminales) de las baterías muertas, guárdalas en una lata de metal cerrada con arena seca, lejos del calor, y guarda las pantallas y placas rotas en una caja aparte con etiqueta.",
            "Entrégalas a un recolector o reciclador de residuos electrónicos. Pregunta al consejo del condado o a la municipalidad, a la agencia del medio ambiente o a las tiendas de teléfonos y de las compañías de telefonía qué recolectores están autorizados donde vives. Anota qué entregaste y cuándo.",
            "Ahora prepara tu paquete inicial: tu lista de precios, tu orden de trabajo, tu promesa de datos y tu tarjeta de seguridad con las reglas para las baterías y adónde van tus residuos electrónicos."
          ],
          steps: ["Cubre con cinta las terminales de las baterías muertas.", "Guárdalas en una lata de metal cerrada con arena seca, lejos del calor.", "Guarda las pantallas y placas rotas en una caja con etiqueta.", "Pide a la municipalidad o a la agencia del medio ambiente un recolector autorizado.", "Entrégalos y anota qué y cuándo. Nunca quemes ni tires residuos electrónicos."],
          words: [["Residuos electrónicos", "aparatos y piezas electrónicas viejas o rotas, como teléfonos, pantallas, placas y baterías."], ["Terminales", "los extremos de metal de una batería por donde se conecta; cubrirlos con cinta evita cortocircuitos."], ["Reciclador", "un negocio que desarma los residuos electrónicos de forma segura y recupera los materiales."]],
          slides: [
            { title: "Los residuos electrónicos son venenosos", bullets: ["Plomo, mercurio y otros venenos", "Quemarlos es lo más peligroso (OMS)", "Dañan sobre todo a niños y mujeres embarazadas"] },
            { title: "Guárdalos con seguridad", bullets: ["Cubre con cinta las terminales de las baterías muertas", "Lata de metal cerrada con arena seca, lejos del calor", "Pantallas y placas en una caja con etiqueta"] },
            { title: "Entrégalos", bullets: ["Pregunta a la municipalidad o a la agencia del medio ambiente", "Usa un recolector o reciclador autorizado", "Anota qué entregaste y cuándo"] },
            { title: "El paquete inicial de tu tienda", bullets: ["Lista de precios con garantía", "Orden de trabajo; promesa de datos para los clientes", "Tarjeta de seguridad: reglas de baterías y plan de residuos"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Prepara el paquete inicial de tu tienda, como se describe en la tarea final. Agrega una línea a tu tarjeta de seguridad con el nombre de quien recogerá tus residuos electrónicos, o de la oficina a la que vas a preguntar.",
          youCanNow: "guardar y entregar los residuos electrónicos con seguridad y armar un paquete inicial para una tienda de reparación de teléfonos honesta y segura.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es la forma más segura de deshacerte de las baterías muertas de los teléfonos?", options: ["Quemarlas", "Tirarlas a la basura", "Cubrir las terminales con cinta, guardarlas en una lata con arena y dárselas a un recolector autorizado", "Enterrarlas en el patio"], answer: 2, why: "La cinta, el almacenamiento seguro y un recolector autorizado evitan incendios y contaminación." },
            { objective: "O5", q: "Según la OMS, ¿cuál es la forma más peligrosa de manejar los residuos electrónicos?", options: ["Guardarlos en una caja", "Llevarlos a un reciclador", "Anotarlos", "Quemarlos"], answer: 3, why: "La OMS dice que quemar residuos electrónicos es la práctica más peligrosa por sus humos tóxicos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Un negocio honesto y seguro",
        questions: [
          { objective: "O3", q: "Una reparación de verdad necesita el teléfono desbloqueado para probarlo. ¿Cuál es la mejor forma?", options: ["Pedir al cliente que lo desbloquee delante de ti, o que ponga un código temporal", "Pedir su PIN del banco", "Adivinar el código", "Restablecer el teléfono sin preguntar"], answer: 0, why: "El cliente sigue controlando su código, y nunca hay un PIN de dinero de por medio." },
          { objective: "O3", q: "¿Qué debes hacer con las órdenes de trabajo que tienen nombres y números de clientes?", options: ["Tirarlas a la calle", "Publicarlas en internet", "Guardarlas con llave o destruirlas cuando ya no hagan falta", "Dárselas a otras tiendas"], answer: 2, why: "Las órdenes de trabajo tienen datos personales, así que hay que guardarlas con seguridad." },
          { objective: "O4", q: "¿Qué costo olvidan más seguido en el precio quienes empiezan a reparar?", options: ["La pieza", "Su parte de los costos de la tienda, como el alquiler y la luz", "La pantalla", "El nombre del cliente"], answer: 1, why: "Los costos de la tienda, como el alquiler, la luz y los datos, deben repartirse entre los trabajos, o pierdes dinero." },
          { objective: "O4", q: "¿Qué debe decir una garantía?", options: ["Nada; solo sonríe", "Que todo problema es gratis para siempre", "Solo el precio", "Cuántos días dura y qué no cubre"], answer: 3, why: "Una garantía clara dice los días y las exclusiones." },
          { objective: "O5", q: "¿Por qué es un problema comprar un teléfono sin prueba de propiedad?", options: ["Puede ser robado, y comprar objetos robados puede ser un delito", "Siempre es demasiado caro", "Los teléfonos sin caja no funcionan", "No es un problema"], answer: 0, why: "Sin prueba, el teléfono puede ser robado, y eso trae problemas legales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo empezar un negocio de reparación de teléfonos",
    questions: [
      { objective: "O1", q: "¿Cuál es el mejor lugar para tu mesa de reparación?", options: ["Junto al fogón", "Seco, bien iluminado, lejos del combustible y del agua", "Afuera bajo la lluvia", "Encima de un recipiente de combustible"], answer: 1, why: "Una mesa seca y bien iluminada, lejos del combustible y del agua, es lo más seguro." },
      { objective: "O1", q: "¿Qué debes usar al abrir una pantalla rajada?", options: ["Gafas de seguridad", "Nada especial", "Guantes de metal", "Gafas de sol solo de noche"], answer: 0, why: "Las gafas de seguridad protegen tus ojos de los trozos de vidrio." },
      { objective: "O1", q: "¿Por qué nunca debes usar una pistola de aire caliente cerca de una batería?", options: ["Gasta electricidad", "Ensucia la pantalla", "El calor puede hacer que la batería se prenda fuego", "Es demasiado lenta"], answer: 2, why: "Calentar demasiado una batería de litio puede causar un incendio." },
      { objective: "O1", q: "¿Qué NUNCA debes hacerle a una batería hinchada?", options: ["Sacarla con cuidado", "Guardarla en una lata con arena", "Avisarle al cliente", "Aplastarla o perforarla"], answer: 3, why: "Aplastar o perforar una batería hinchada puede hacer que arda." },
      { objective: "O2", q: "¿Cuál es el orden correcto de las revisiones?", options: ["Abrir primero el teléfono y luego hacer preguntas", "Primero las causas más sencillas: mirar, cargador, puerto, reiniciar, y luego abrir", "Cambiar primero la placa", "Cobrar primero al cliente"], answer: 1, why: "Empezar por lo sencillo ahorra tiempo y dinero y evita abrir el teléfono sin necesidad." },
      { objective: "O2", q: "¿Qué dato va en una orden de trabajo?", options: ["El PIN de dinero móvil del cliente", "La contraseña del banco del cliente", "El modelo del teléfono, el IMEI, la falla, los daños vistos, el precio y la fecha", "Las llaves de la casa del cliente"], answer: 2, why: "Una orden de trabajo registra el trabajo, no secretos como PIN o contraseñas." },
      { objective: "O2", q: "Un teléfono \"no carga\". Quitas la pelusa del puerto y carga. ¿Cuánto cobras?", options: ["El precio de una placa nueva", "Una pequeña tarifa justa por el trabajo que hiciste", "Nada, y rechazas trabajos futuros", "El precio de un teléfono nuevo"], answer: 1, why: "Cobrar con honestidad por el trabajo real crea confianza y clientes que vuelven." },
      { objective: "O2", q: "¿Por qué conseguir el sí del cliente antes de abrir el teléfono?", options: ["Para que acepte el trabajo y el precio, y así evitar discusiones", "No hace falta", "Para poder cobrar más después", "Para saber su PIN"], answer: 0, why: "Un acuerdo por escrito protege a los dos." },
      { objective: "O3", q: "¿Qué no necesita nunca una reparación de teléfono?", options: ["El modelo del teléfono", "La descripción de la falla", "El número de teléfono del cliente", "El PIN de dinero móvil del cliente"], answer: 3, why: "Ninguna reparación necesita jamás un PIN de dinero móvil o del banco." },
      { objective: "O3", q: "Mientras arreglas una pantalla, ves la galería de fotos del cliente. ¿Qué haces?", options: ["Abres solo lo que la reparación necesita y no miras nada más", "Miras las fotos", "Las copias a tu teléfono", "Se las enseñas a un amigo"], answer: 0, why: "Respetar la privacidad significa abrir solo lo que la reparación necesita." },
      { objective: "O3", q: "¿Qué oficina pone las reglas de protección de datos en Nigeria?", options: ["Los bomberos", "La Comisión de Protección de Datos de Nigeria", "La federación de fútbol", "Ninguna oficina"], answer: 1, why: "La Comisión de Protección de Datos de Nigeria se creó con la Ley de Protección de Datos de Nigeria de 2023." },
      { objective: "O3", q: "¿Dónde deben guardarse los teléfonos que esperan reparación?", options: ["En el mostrador, al alcance de cualquiera", "En un cajón con llave", "Con un vecino", "Fuera de la tienda"], answer: 1, why: "Guardar los teléfonos con llave los protege a ellos y a sus datos." },
      { objective: "O4", q: "Pieza KES 2,500, mano de obra KES 800, parte de los costos de la tienda KES 200, ganancia KES 500. ¿Cuál es el precio?", options: ["KES 3,300", "KES 3,500", "KES 4,000", "KES 2,500"], answer: 2, why: "2,500 + 800 + 200 + 500 = 4,000." },
      { objective: "O4", q: "Un cliente puede pagar una pantalla copia barata o una original. ¿Qué es lo honesto?", options: ["Decirle qué pieza es y el precio de cada una, y dejarlo elegir", "Decir que la copia es original", "Poner la más barata y cobrar la original", "No decir nada"], answer: 0, why: "Ofrecer las piezas con honestidad crea confianza y evita quejas." },
      { objective: "O4", q: "¿Qué NO cubre normalmente una garantía de reparación?", options: ["La misma pieza que falla por tu trabajo", "Una falla en la pieza que pusiste", "Tu error al instalarla", "Una caída nueva o un daño por agua"], answer: 3, why: "Un daño nuevo después de la reparación normalmente no está cubierto; escríbelo en tu garantía." },
      { objective: "O5", q: "Un vendedor tiene una caja con un IMEI igual al del teléfono (marca *#06#) y un recibo. ¿Qué muestra esto?", options: ["Una prueba de que el teléfono probablemente es suyo", "Que el teléfono es robado", "Nada", "Que está roto"], answer: 0, why: "Un IMEI que coincide y un recibo son prueba de propiedad." },
      { objective: "O5", q: "¿Por qué nunca debes quemar placas viejas para sacar cobre?", options: ["El cobre no vale nada", "Tarda demasiado", "Los humos son venenosos y dañan sobre todo a niños y mujeres embarazadas", "Hace muy poco ruido"], answer: 2, why: "Quemar residuos electrónicos suelta humos tóxicos; según la OMS, es la práctica más peligrosa." },
      { objective: "O5", q: "¿Cómo debes guardar las baterías muertas antes de que las recojan?", options: ["Sueltas en un cajón con herramientas", "Con las terminales cubiertas con cinta, en una lata de metal cerrada con arena seca, lejos del calor", "En un balde con agua al sol", "En tu bolsillo"], answer: 1, why: "La cinta y la lata con arena evitan cortocircuitos e incendios." },
      { objective: "O5", q: "¿Quién te puede informar sobre los recolectores autorizados de residuos electrónicos?", options: ["Solo tus clientes", "Nadie", "Cualquiera que quema basura al borde del camino", "La municipalidad o la agencia del medio ambiente"], answer: 3, why: "Las municipalidades y las agencias del medio ambiente conocen a los recolectores autorizados." },
      { objective: "O1", q: "Una batería empieza a arder y no puedes controlar el fuego. ¿Qué haces?", options: ["Sacas a todos y llamas a los bomberos", "Sigues reparando", "Le echas combustible", "La agarras con las manos"], answer: 0, why: "Un fuego sin control significa salir y llamar a los bomberos." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte de tu paquete inicial y vuelve a intentarlo.",
    criteria: [
      { name: "Tarjeta de seguridad de baterías", objective: "O1", notYet: "No hay tarjeta, o le faltan las señales de alerta o qué hacer si una batería echa humo.", meets: "La tarjeta incluye las señales de alerta, los hábitos seguros y qué hacer si una batería echa humo o arde.", exceeds: "También muestra el número de los bomberos y dónde está la lata de arena." },
      { name: "Orden de trabajo", objective: "O2", notYet: "A la orden de trabajo le falta la falla, el precio o el acuerdo del cliente.", meets: "Anota el cliente, el modelo del teléfono, el IMEI, la falla, los daños vistos, el trabajo, el precio, la fecha y el sí del cliente.", exceeds: "También tiene un número de ticket y una casilla para la fecha en que termina la garantía." },
      { name: "Promesa de datos para los clientes", objective: "O3", notYet: "No hay promesa, o pide un PIN o una contraseña.", meets: "Al menos cuatro líneas claras, que incluyen no pedir nunca un PIN de dinero y no copiar nada.", exceeds: "También nombra la oficina de protección de datos del país y cómo se guardan con seguridad las órdenes de trabajo." },
      { name: "Lista de precios", objective: "O4", notYet: "Los precios son adivinados, o las cuentas están mal.", meets: "Al menos cinco reparaciones, cada una con pieza, mano de obra, costos de la tienda, ganancia, precio y días de garantía, con las sumas correctas.", exceeds: "También muestra las opciones de piezas (original o copia) y lo que la garantía no cubre." },
      { name: "Residuos electrónicos y teléfonos robados", objective: "O5", notYet: "No hay plan, o el plan incluye quemar o tirar residuos.", meets: "Las baterías y piezas se guardan con seguridad y se entregan a un recolector u oficina con nombre; se rechazan los teléfonos sin prueba.", exceeds: "También lleva un registro de qué se entregó y cuándo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen usar una orden de trabajo y una lista de precios en su tienda dentro de 30 días (encuesta de seguimiento)",
      "Participantes que dicen no haber tenido incendios de baterías ni quejas por datos en su tienda durante 90 días",
      "Participantes que dicen entregar los residuos electrónicos a un recolector en lugar de quemarlos o tirarlos dentro de 90 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono básico con calculadora",
      "Papel y lápiz para el plano de la mesa, la orden de trabajo, la lista de precios, la promesa de datos y la tarjeta de seguridad",
      "Si es posible, un teléfono viejo (al que un instructor ya le sacó la batería de forma segura) para practicar con una orden de trabajo",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "En un programa juvenil o de formación profesional: hagan juntos la prueba inicial y luego un capítulo por sesión; acompañen el curso con práctica guiada por un técnico calificado.",
      "Nunca dejes que los participantes practiquen con baterías hinchadas o dañadas; muestra fotos en su lugar.",
      "Antes del curso, averigua qué recolectores autorizados de residuos electrónicos y qué oficina de protección de datos atienden tu zona, para que los participantes puedan escribir nombres reales.",
      "Nunca pidas a los participantes que compartan PIN o contraseñas en clase.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
