"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-digital-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations".

const KOBO = { name: "KoboToolbox (formularios gratuitos de recolección de datos que funcionan sin conexión)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Oficina del Comisionado de Protección de Datos, Kenia)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC, Comisión de Protección de Datos de Nigeria)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Data Protection Commission, Ghana (Comisión de Protección de Datos; Ley de Protección de Datos de 2012, Ley 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO: Trabajo infantil en la agricultura", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management-es",
  lang: "es",
  translationOf: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Gestión de la finca con datos y aplicaciones móviles",
  skills: "Elegir una aplicación agrícola o una hoja compartida, Crear un registro de la finca y del inventario de insumos, Pagar a los trabajadores con dinero móvil y llevar registros, Proteger los datos de la finca y de los trabajadores, Dirigir a un encargado a distancia, Revisar cada semana un tablero de cinco números",
  outcome: "dirigir tu finca desde el teléfono: llevar un solo registro de parcelas, animales, trabajos, trabajadores e inventario de insumos, pagar a los trabajadores con dinero móvil con un comprobante de cada pago, recibir de tu encargado un informe diario que puedas verificar, y mirar cinco números cada semana para decidir qué hacer después.",
  about: [
    "Este curso es para agricultores que están creciendo: tienes trabajadores, varias parcelas o un hato o una parvada, y quizás vives en la ciudad mientras un encargado maneja la finca. Sirve para pequeños productores comerciales, jóvenes emprendedores agrícolas, dueños de fincas que viven en Nairobi, Lagos, Acra o Dakar, y los encargados que les rinden cuentas.",
    "Va más allá de llevar registros básicos. Vas a elegir una aplicación de gestión agrícola o una hoja de cálculo compartida, crear un registro de parcelas, animales, actividades e inventario de insumos, pagar y registrar a los trabajadores con dinero móvil, proteger los datos de la finca y de los trabajadores, acordar con un encargado una rutina de informes diarios que puedas verificar y armar un tablero semanal de cinco números.",
    "El curso no recomienda ninguna aplicación. Te muestra las funciones que debes buscar para que puedas juzgar cualquier aplicación o montar el mismo sistema en una hoja de cálculo gratuita. Las cifras de dinero son solo ejemplos. Cada lección termina con una tarea en tu propia finca; una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Si nunca has llevado registros de la finca, toma primero \"Datos y tecnología agrícola\"."
  ],
  finalTask: "Arma un tablero semanal para tu propia finca (con números reales o de ejemplo): cinco números, cada uno con su fuente en tu registro, una meta o un rango normal y la acción que tomas si se sale. Luego escribe en una página la rutina de informes para quien maneja la finca día a día: qué lleva el informe diario por WhatsApp (fotos, números, problemas), a qué hora se envía, la reunión semanal, cómo lo verificas (revisiones por sorpresa, conteos de inventario, estados de cuenta de dinero móvil) y quién puede ver qué datos.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, jóvenes emprendedores agrícolas, dueños de fincas que viven lejos y encargados de finca en Kenia, Nigeria, Ghana, Senegal, Costa de Marfil y toda África. Muchos combinan cultivos y animales (maíz, tomate, aves, cabras, cerdos, tilapia) y emplean trabajadores eventuales o permanentes.",
    startingPoint: "Usan a diario un teléfono inteligente para llamadas, WhatsApp y dinero móvil. Algunos anotan en un cuaderno o en una hoja sencilla. Pocos tienen un solo sistema que una parcelas, animales, trabajadores, dinero e inventario, y muchos dueños dependen de llamadas para saber qué pasa en la finca.",
    gap: "Cuando una finca crece, el dinero se escapa por días de trabajo sin registrar, insumos que faltan, animales muertos que se descubren tarde y decisiones tomadas a ojo. Los participantes necesitan un sistema sencillo que una registros, pagos e informes, y la costumbre de revisar unos pocos números cada semana, para poder dirigir a distancia y ver los problemas a tiempo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono Android económico; una computadora ayuda pero no es necesaria",
      "Conexión: señal débil en muchas fincas, así que las herramientas deben funcionar sin conexión o por WhatsApp",
      "Dinero: primero herramientas gratuitas; no se respalda ninguna aplicación; todas las cifras de dinero son ejemplos",
      "Las leyes de privacidad se aplican a los datos de los trabajadores (Kenia, Nigeria, Ghana y otros países tienen leyes de protección de datos)",
      "Ningún PIN, contraseña ni número de identificación en ninguna tarea de práctica"
    ],
    prerequisites: "Manejar con soltura un teléfono inteligente, WhatsApp y el dinero móvil. Se recomienda tomar antes \"Datos y tecnología agrícola\" (registros básicos y hojas de cálculo)."
  },
  // ---- ADDIE: Diseño (objetivos) ----
  objectives: [
    { id: "O1", condition: "Con una lista de lo que tu finca necesita registrar", action: "comparar aplicaciones de gestión agrícola o una hoja de cálculo compartida con una lista de funciones y elegir una", standard: "puntuando al menos dos opciones y escribiendo el motivo de tu elección" },
    { id: "O2", condition: "Usando la herramienta que elegiste", action: "crear un registro de la finca con parcelas, animales, actividades e inventario de insumos, con nombres y unidades fijos", standard: "de modo que cada anotación se pueda sumar por parcela, grupo de animales o insumo" },
    { id: "O3", condition: "Con una semana de trabajo de trabajadores eventuales y permanentes", action: "registrar los días y las tareas de cada trabajador y pagarle con dinero móvil con un registro que coincida", standard: "de modo que cada pago tenga fecha, trabajador, tarea, monto y código de transacción" },
    { id: "O4", condition: "Cuando un encargado o un familiar maneja la finca mientras no estás", action: "escribir una rutina de informes diarios con fotos y mensajes de WhatsApp, una reunión semanal y revisiones por sorpresa", standard: "diciendo qué informar, para cuándo y cómo lo vas a verificar" },
    { id: "O5", condition: "Usando el registro de tu finca", action: "armar un tablero semanal de cinco números y la acción que provoca cada uno", standard: "actualizado cada semana a partir de los registros, no de memoria" },
    { id: "O6", condition: "Cuando recoges datos sobre tu finca y tus trabajadores", action: "decidir qué recoger, quién puede verlo y cómo protegerlo", standard: "recogiendo solo lo necesario y sin compartir PIN, contraseñas ni números de identificación" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Montar el sistema de tu finca",
      lessons: [
        {
          title: "Elegir una aplicación agrícola o una hoja de cálculo compartida",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir una aplicación de gestión agrícola o una hoja de cálculo compartida puntuándola con una lista de funciones.",
          text: [
            "Una aplicación de gestión agrícola guarda en tu teléfono, en un solo lugar, tus parcelas, animales, trabajos, inventario y dinero. Hay muchas y cambian a menudo, así que este curso no recomienda ninguna. Una hoja de cálculo compartida gratuita (Google Sheets o Microsoft Excel) puede hacer el mismo trabajo si la preparas bien. Lo que importa es que tú y tus trabajadores de verdad la usen todos los días.",
            "Empieza por lo que necesitas registrar y luego puntúa cada opción. Funciones que debes buscar: funciona sin conexión y sincroniza después (muchas fincas tienen poca señal); parcelas y grupos de animales como registros separados; una forma sencilla de anotar actividades e insumos; un inventario que baja cuando se usan los insumos; registros de trabajadores y pagos; fotos; varios usuarios con distintos permisos (un trabajador puede anotar datos pero no ver la nómina); exportar a una hoja de cálculo para que tus datos nunca queden atrapados; tu idioma; y un precio y una política de privacidad claros.",
            "Ten cuidado con las aplicaciones que son gratis porque venden tus datos, que necesitan una conexión rápida o de las que no puedes salir con tus datos. Pregunta a otros agricultores de tu zona qué usan, prueba cualquier aplicación durante dos semanas con anotaciones reales y revisa el precio después de la prueba gratuita antes de meter ahí todos tus registros."
          ],
          steps: ["Haz la lista de lo que debes registrar: parcelas, animales, trabajos, trabajadores, inventario, ventas.", "Escoge dos o tres opciones, incluida una hoja de cálculo compartida gratuita.", "Puntúa cada una con la lista: sin conexión, usuarios y permisos, inventario, trabajadores, fotos, exportar, idioma, precio, privacidad.", "Prueba la mejor durante dos semanas con anotaciones reales.", "Escribe tu elección y el motivo."],
          words: [["Aplicación de gestión agrícola", "un programa de teléfono o de internet para anotar y organizar las parcelas, los animales, los trabajos, el inventario y el dinero de una finca."], ["Sincronizar", "cuando una aplicación envía a internet los datos guardados en el teléfono en cuanto hay señal."], ["Exportar", "sacar tus datos de una aplicación, por ejemplo como un archivo de hoja de cálculo."]],
          slides: [
            { title: "¿Aplicación u hoja compartida?", bullets: ["Las dos pueden servir", "Lo que importa: que tú y tus trabajadores la usen a diario", "Aquí no se respalda ninguna aplicación: júzgala por sus funciones"] },
            { title: "Funciones que debes buscar", bullets: ["Funciona sin conexión y sincroniza después", "Parcelas, animales, actividades, inventario, trabajadores", "Varios usuarios con distintos permisos", "Exportar a una hoja de cálculo"] },
            { title: "Señales de alerta", bullets: ["Es gratis porque vende tus datos", "Necesita una conexión rápida", "No puedes sacar tus datos", "El precio no está claro después de la prueba"] },
            { title: "Decide", bullets: ["Puntúa dos o tres opciones", "Prueba una durante dos semanas", "Escribe tu elección y el motivo"] }
          ],
          tryIt: "Escribe la lista de lo que tu finca debe registrar. Haz una tabla de puntuación con las funciones de la lista hacia abajo y dos o tres opciones arriba (una puede ser una hoja de cálculo compartida gratuita). Puntúa cada una y escribe tu elección y tu motivo.",
          youCanNow: "juzgar cualquier aplicación agrícola u hoja de cálculo por sus funciones y elegir una con un motivo claro.",
          quickCheck: [
            { objective: "O1", q: "Tu finca en Kakamega muchas veces no tiene señal. ¿Qué función importa más?", options: ["Colores vivos", "Funciona sin conexión y sincroniza después", "Muchas descargas", "Videollamadas"], answer: 1, why: "Si la aplicación no puede guardar anotaciones sin señal, los trabajadores dejarán de usarla." },
            { objective: "O1", q: "¿Por qué revisar que una aplicación pueda exportar tus datos?", options: ["Para que tus registros nunca queden atrapados en una sola aplicación", "Para que el teléfono vaya más rápido", "Porque la ley obliga a todo agricultor a exportar", "Para conseguir un descuento"], answer: 0, why: "Exportar te permite pasar tus registros a una hoja de cálculo o a otra aplicación en cualquier momento." }
          ]
        },
        {
          title: "Crear las parcelas, los animales, las actividades y el inventario de insumos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Crear un registro de la finca con nombres y unidades fijos y una lista de inventario de insumos.",
          text: [
            "El registro es la columna vertebral del sistema. Dale a cada parcela un nombre corto fijo y su tamaño (por ejemplo \"P1 Tomate 0.5 acre\"), y a cada grupo de animales o estanque un nombre y un número (\"Ponedoras Galpón A, 500 aves\", \"Cabras 24\", \"Estanque 2 tilapia\"). Usa los mismos nombres en todos los registros para poder sumar costos y producción por parcela o por grupo.",
            "Luego haz un registro de actividades: fecha, parcela o grupo, actividad (siembra, deshierbe, fumigación, alimentación, vacunación por el veterinario, cosecha, venta), cantidad, unidad, costo, quién lo hizo y una foto si sirve. Fija las unidades: kilogramos, litros, sacos de 50 kg, cajas, bandejas de 30 huevos. Mezclar unidades da totales equivocados.",
            "Agrega una lista de inventario de insumos: cada insumo con su unidad, entradas, lo usado y lo que queda. Cuando un trabajador anota \"2 sacos de NPK usados en P1\", lo que queda debe bajar en dos. Cuenta la bodega contra la lista cada semana. Si el conteo y el registro no coinciden, encontraste una fuga, un error de anotación o un robo, y puedes preguntar por qué esa misma semana."
          ],
          steps: ["Nombra cada parcela con su tamaño, y cada grupo de animales, estanque o galpón con su número.", "Fija la unidad de cada cosa: kg, litros, sacos de 50 kg, cajas, bandejas.", "Haz el registro de actividades: fecha, parcela o grupo, actividad, cantidad, unidad, costo, quién, foto.", "Haz la lista de inventario: insumo, unidad, entradas, usado, queda.", "Cuenta la bodega cada semana y compárala con la lista."],
          words: [["Registro", "la lista maestra de tus parcelas, grupos de animales e insumos a la que se refiere cada anotación."], ["Unidad", "en qué mides, como kilogramos, litros o sacos de 50 kg."], ["Conteo de inventario", "contar con tus propios ojos lo que hay en la bodega y compararlo con los registros."]],
          slides: [
            { title: "Nombres fijos", bullets: ["Parcelas con tamaño: P1 Tomate 0.5 acre", "Grupos de animales con número: Ponedoras Galpón A, 500", "Los mismos nombres en cada registro"] },
            { title: "El registro de actividades", bullets: ["Fecha, parcela o grupo, actividad", "Cantidad, unidad, costo", "Quién lo hizo, foto"] },
            { title: "Inventario de insumos", bullets: ["Entradas, usado y queda de cada insumo", "Unidades fijas: kg, litros, sacos de 50 kg"] },
            { title: "Conteo semanal", bullets: ["Cuenta la bodega", "Compárala con la lista", "¿No coincide? Pregunta por qué esta semana"] }
          ],
          tryIt: "En la herramienta que elegiste, crea el registro de tu finca: cada parcela o grupo de animales con su tamaño o número, un registro de actividades con al menos cinco anotaciones reales de esta semana y una lista de inventario de al menos cuatro insumos. Luego cuenta un insumo en tu bodega y compáralo con la lista.",
          youCanNow: "crear un registro de la finca que suma por parcela, grupo de animales e insumo, y revisar tu inventario con él.",
          quickCheck: [
            { objective: "O2", q: "Un trabajador escribe \"2 sacos\" y otro escribe \"100 kg\" para el mismo fertilizante. ¿Cuál es la solución?", options: ["Ignorarlo; el total será bastante parecido", "Borrar los dos registros", "Fijar una unidad para ese insumo y usarla siempre", "Dejar de registrar el fertilizante"], answer: 2, why: "Las unidades fijas permiten sumar bien los registros." },
            { objective: "O2", q: "La lista de inventario dice 6 sacos de alimento para ponedoras, pero en la bodega hay 4. ¿Qué haces?", options: ["Volver a poner 6 en la lista", "Esperar al final de la temporada", "Comprar 2 sacos más y no decir nada", "Preguntar esta semana por qué no coinciden: error de anotación, fuga o robo"], answer: 3, why: "Un conteo semanal detecta las diferencias cuando todavía son pequeñas y fáciles de explicar." }
          ]
        },
        {
          title: "Registrar el trabajo y pagar a los trabajadores con dinero móvil",
          objectives: ["O3"],
          minutes: 6,
          goal: "Registrar los días y las tareas de cada trabajador y pagarle con dinero móvil con un registro que coincida.",
          text: [
            "La mano de obra suele ser el mayor costo de una finca en crecimiento y el que menos se registra. Lleva una lista de trabajadores (nombre, número de teléfono para dinero móvil, pago por día o por mes, fecha de inicio) y un registro diario de asistencia y tareas: fecha, trabajador, parcela o grupo, tarea, días u horas. Un capataz puede enviarlo cada tarde como foto de la hoja de asistencia por WhatsApp o llenar un formulario compartido.",
            "Paga con dinero móvil cuando puedas: M-Pesa en Kenia, MTN MoMo en Ghana, Orange Money o Wave en Senegal y Costa de Marfil, o una transferencia bancaria o de dinero móvil en Nigeria. Así cada pago tiene un código de transacción. Copia la fecha, el trabajador, el monto y el código de transacción en tu registro de pagos, junto a los días trabajados. Al final de la semana, los días por el pago diario deben dar lo que pagaste. Solo como ejemplo: 6 días x KES 500 = KES 3,000, o 5 días x NGN 4,000 = NGN 20,000.",
            "Paga de forma justa y a tiempo, y consulta el salario mínimo legal y las reglas laborales con el ministerio de trabajo de tu país. No dejes que niños hagan trabajos peligrosos en la finca, como fumigar, manejar químicos o usar máquinas. Explica a los trabajadores qué registras y por qué, y confirma cada pago con ellos, para que el registro proteja a las dos partes."
          ],
          steps: ["Lleva una lista de trabajadores: nombre, número de dinero móvil, pago, fecha de inicio.", "Anota la asistencia y las tareas todos los días.", "Paga con dinero móvil y copia el código de transacción en el registro de pagos.", "Cada semana revisa: días x pago diario = monto pagado.", "Confirma cada pago con el trabajador."],
          words: [["Trabajador eventual", "un trabajador al que se le paga por día o por tarea, no con un contrato mensual."], ["Código de transacción", "el código único del mensaje de dinero móvil que prueba que se hizo un pago."], ["Nómina", "el registro de a quién se le paga, cuánto y cuándo."]],
          slides: [
            { title: "Mano de obra: gran costo, pocos registros", bullets: ["Lista de trabajadores: nombre, número, pago", "Registro diario: fecha, trabajador, parcela, tarea, días"] },
            { title: "Paga dejando rastro", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Copia el código de transacción en el registro", "Solo como ejemplo: 6 días x KES 500 = KES 3,000"] },
            { title: "Revisión semanal", bullets: ["Días x pago diario = monto pagado", "Confírmalo con cada trabajador"] },
            { title: "Paga de forma justa y legal", bullets: ["Consulta el salario mínimo con el ministerio de trabajo", "Ningún trabajo peligroso para niños", "Explica a los trabajadores qué registras"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Haz una lista de trabajadores y un registro de asistencia y tareas de una semana para tu finca (real o de ejemplo). Llena un registro de pagos con fecha, trabajador, días, pago diario, monto y una columna para el código de transacción, y revisa que los días por el pago diario den el monto de cada trabajador.",
          youCanNow: "registrar quién trabajó, en qué y cuánto tiempo, y pagar a los trabajadores con dinero móvil con un registro que coincide.",
          quickCheck: [
            { objective: "O3", q: "¿Qué registro de pago está completo?", options: ["\"Se pagó a Juma\"", "\"12 de mayo, Juma, 6 días deshierbe P2, KES 3,000 (ejemplo), código QX7...\"", "\"Trabajadores pagados esta semana\"", "\"KES 3,000\""], answer: 1, why: "Tiene la fecha, el trabajador, la tarea, los días, el monto y el código de transacción." },
            { objective: "O3", q: "Una trabajadora dice que trabajó 6 días; el registro muestra 5. ¿Qué ayuda más?", options: ["El registro diario de asistencia y una conversación con ella y el capataz", "No pagar nada hasta el mes que viene", "Tomar el número más alto sin preguntar", "Borrar el registro"], answer: 0, why: "Un registro diario da a las dos partes algo que revisar juntas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Montar el sistema de tu finca",
        questions: [
          { objective: "O1", q: "¿Cuál es una señal de alerta al elegir una aplicación agrícola?", options: ["Funciona sin conexión", "Puedes exportar tus datos", "Es gratis porque vende tus datos", "Los trabajadores pueden anotar datos sin ver la nómina"], answer: 2, why: "Pierdes el control de los datos de tu finca y de tus trabajadores." },
          { objective: "O1", q: "Antes de meter todos tus registros en una aplicación, deberías:", options: ["Probarla dos semanas con anotaciones reales y revisar el precio después de la prueba", "Pagar un año completo de una vez", "Elegir la que tiene más anuncios", "Pedirle a la aplicación que elija por ti"], answer: 0, why: "Una prueba real muestra si tú y tus trabajadores la van a usar y cuánto costará." },
          { objective: "O2", q: "¿Por qué darle a cada parcela un nombre fijo como \"P1 Tomate 0.5 acre\"?", options: ["Si no, la aplicación no abre", "Para que los costos y la producción se sumen por parcela", "Los compradores lo piden", "Lo exige la ley"], answer: 1, why: "El mismo nombre en cada registro te permite sacar el total de cada parcela." },
          { objective: "O2", q: "Tu lista de inventario dice que quedan 10 sacos de NPK. El conteo de la bodega da 7. Esto muestra:", options: ["Que la lista de inventario siempre tiene razón", "Nada importante", "Que necesitas una aplicación nueva", "Un error, una fuga o un robo que debes revisar esta semana"], answer: 3, why: "Una diferencia es una señal para preguntar por qué mientras todavía es pequeña." },
          { objective: "O3", q: "¿Por qué pagar a los trabajadores con dinero móvil cuando puedas?", options: ["Siempre es gratis", "Los trabajadores prefieren efectivo", "Cada pago tiene un código de transacción que puedes registrar", "Evita pagar el salario mínimo"], answer: 2, why: "El código de transacción es la prueba del pago para ti y para el trabajador." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dirigir con datos, de cerca o de lejos",
      lessons: [
        {
          title: "Proteger los datos de la finca y de los trabajadores",
          objectives: ["O6"],
          minutes: 5,
          goal: "Decidir qué datos recoger, quién puede verlos y cómo protegerlos.",
          text: [
            "Tu sistema ahora guarda información valiosa y privada: los nombres y teléfonos de los trabajadores, los pagos, tus ventas y tu inventario. Kenia (Office of the Data Protection Commissioner, la oficina de protección de datos), Nigeria (Nigeria Data Protection Commission) y Ghana (Data Protection Commission) tienen leyes de protección de datos y autoridades que las vigilan, y lo mismo pasa en muchos otros países africanos. Las fincas y empresas más grandes quizás tengan que registrarse; revisa el sitio web de tu autoridad.",
            "Recoge solo lo que necesitas. Necesitas el nombre del trabajador, su número de dinero móvil, sus días y su pago. No necesitas su número de identificación en una hoja compartida ni una foto de su documento en un grupo de WhatsApp. Explica a los trabajadores qué guardas y por qué. Nunca pongas PIN de dinero móvil, contraseñas ni números de identificación en la hoja, en la aplicación ni en una herramienta de IA.",
            "Da permisos según el papel de cada uno: los trabajadores anotan actividades; el encargado ve el inventario y la asistencia; solo tú (y tu contador) ven los pagos y las ventas. Usa bloqueo de pantalla y verificación en dos pasos, quita el acceso a quien se va de la finca el mismo día y guarda una copia de seguridad. Si compartes datos con un comprador, un prestamista o un proyecto, comparte solo lo que necesitan y pregunta cómo los van a usar."
          ],
          steps: ["Haz la lista de los datos que guardas y tacha lo que no necesitas.", "Explica a los trabajadores qué registras y por qué.", "Da permisos según el papel: trabajador, encargado, dueño.", "Bloquea los teléfonos, activa la verificación en dos pasos, guarda una copia de seguridad.", "Quita el acceso a quien se va, el mismo día."],
          words: [["Datos personales", "información sobre una persona, como su nombre, su número de teléfono o su pago."], ["Acceso", "quién puede ver o cambiar qué datos."], ["Verificación en dos pasos", "un segundo control, como un código enviado a tu teléfono, al iniciar sesión."]],
          slides: [
            { title: "Ahora guardas datos privados", bullets: ["Nombres, números y pagos de los trabajadores", "Tus ventas y tu inventario", "Se aplican las leyes de protección de datos"] },
            { title: "Recoge solo lo que necesitas", bullets: ["Nombre, número de dinero móvil, días, pago", "Nada de fotos de documentos en grupos de WhatsApp", "Nunca PIN ni contraseñas"] },
            { title: "Acceso según el papel", bullets: ["Trabajadores: anotan actividades", "Encargado: inventario y asistencia", "Dueño: pagos y ventas"] },
            { title: "Mantenlo seguro", bullets: ["Bloqueo de pantalla, verificación en dos pasos, copia de seguridad", "Quita el acceso a quien se va el mismo día", "Comparte solo lo que otros necesitan"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "Haz la lista de todos los tipos de datos de tu sistema. Tacha lo que no necesitas. Escribe una tabla de accesos: para cada papel (trabajador, encargado, dueño, contador), qué puede ver y qué puede anotar.",
          youCanNow: "recoger solo los datos que tu finca necesita y controlar quién puede verlos.",
          quickCheck: [
            { objective: "O6", q: "¿Qué NO debe ir en la hoja compartida de la finca?", options: ["Los nombres de los trabajadores", "Los días trabajados", "Los nombres de las parcelas", "Los PIN de dinero móvil de los trabajadores"], answer: 3, why: "Los PIN son secretos; nadie más debe tenerlos nunca." },
            { objective: "O6", q: "Tu encargado deja la finca. ¿Cuándo le quitas el acceso a la hoja y a la aplicación de la finca?", options: ["Al final de la temporada", "El mismo día", "Solo si él lo pide", "Nunca; quizás vuelva"], answer: 1, why: "Quitar el acceso el mismo día protege tus datos y los de tus trabajadores." }
          ]
        },
        {
          title: "Dirigir la finca a distancia",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escribir una rutina de informes diarios que puedas verificar.",
          text: [
            "Muchos dueños dirigen su finca desde la ciudad a través de un encargado o un familiar. Funciona cuando los informes son una rutina, no cuando llamas cuando se te ocurre para preguntar \"¿Cómo va todo?\". Acuerden un informe diario por WhatsApp a una hora fija, por ejemplo a las 6 pm: qué se hizo en cada parcela o galpón, números (huevos recogidos, aves muertas, alimento usado, litros de leche, cajas vendidas, trabajadores presentes), problemas y tres fotos de los mismos lugares cada día (el cultivo, los animales, la bodega).",
            "Hagan una reunión semanal corta por teléfono o videollamada a una hora fija: repasen los números de la semana, el conteo de inventario y el plan de la semana siguiente. Decidan juntos y escriban las decisiones en el grupo. A un buen encargado también hay que pagarle y confiarle decisiones pequeñas sin ti.",
            "Confía, pero verifica. Compara los informes con cosas difíciles de falsificar: estados de cuenta de dinero móvil, recibos de los compradores, el conteo semanal de inventario y fotos con fecha y ubicación. Visita de vez en cuando sin avisar con mucho tiempo y, a veces, pide a un vecino de confianza, al veterinario o al extensionista una segunda opinión. Cuando un número parece raro, pregunta con calma y pronto. La mayoría de las diferencias son errores, y revisar con regularidad ayuda a que la gente honesta siga siéndolo."
          ],
          steps: ["Acuerden el informe diario: hora, números, problemas, tres fotos fijas.", "Fijen una reunión semanal a una hora fija.", "Escriban las decisiones en el grupo.", "Verifica con estados de cuenta, recibos, conteos de inventario y fotos con fecha.", "Visita a veces sin avisar con mucho tiempo; pregunta pronto y con calma por los números raros."],
          words: [["Dueño ausente", "un dueño de finca que vive lejos y la maneja a través de otra persona."], ["Verificar", "comprobar que un informe es cierto usando una segunda fuente."], ["Reunión de seguimiento", "una reunión corta y regular para repasar números y planes."]],
          slides: [
            { title: "La rutina gana a las llamadas al azar", bullets: ["Informe diario por WhatsApp a una hora fija", "Números, problemas, tres fotos fijas"] },
            { title: "Reunión semanal", bullets: ["A la misma hora cada semana", "Números, conteo de inventario, plan de la semana siguiente", "Escriban las decisiones en el grupo"] },
            { title: "Confía, pero verifica", bullets: ["Estados de cuenta de dinero móvil y recibos", "Conteo semanal de inventario, fotos con fecha", "Visitas y una segunda opinión de confianza"] },
            { title: "Cuando un número parece raro", bullets: ["Pregunta pronto y con calma", "La mayoría de las diferencias son errores", "Las revisiones regulares mantienen a todos honestos"] }
          ],
          tryIt: "Escribe la plantilla del informe diario que te enviará tu encargado (los números, la línea de problemas y los tres lugares de las fotos). Luego haz la lista de tres formas en que verificarás los informes, y el día y la hora de tu reunión semanal.",
          youCanNow: "acordar un informe diario y una reunión semanal con un encargado y verificar lo que te dice.",
          quickCheck: [
            { objective: "O4", q: "¿Qué informe diario de un encargado de aves es más útil?", options: ["\"Todo bien.\"", "Una nota de voz a cualquier hora del día", "\"6 pm: 412 huevos, 2 aves muertas, 3 sacos de alimento usados, 4 trabajadores, fotos del Galpón A, las aves y la bodega\"", "Solo una llamada semanal"], answer: 2, why: "Números fijos y fotos a una hora fija se pueden comparar de un día a otro." },
            { objective: "O4", q: "¿Cuál es la mejor forma de verificar las ventas de huevos informadas?", options: ["Compararlas con los estados de cuenta de dinero móvil y los recibos de los compradores", "Preguntarle al encargado si está seguro", "Contar los huevos en la foto de WhatsApp", "Creerle porque es de la familia"], answer: 0, why: "Los pagos y los recibos son una segunda fuente difícil de falsificar." }
          ]
        },
        {
          title: "Tu tablero semanal: cinco números que vigilar",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Armar un tablero semanal de cinco números, cada uno con un rango normal y una acción.",
          text: [
            "Un tablero es una página corta con los pocos números que te dicen si la finca va bien. Cinco bastan para leerlos en dos minutos cada semana. Escoge números que salgan directamente de tu registro, para que nadie tenga que recordarlos.",
            "Buenas opciones para la mayoría de las fincas: (1) dinero que entró y dinero que salió esta semana; (2) producción, como kg cosechados, huevos por día, litros de leche o crecimiento de los peces; (3) pérdidas, como aves muertas, animales enfermos o cajas rechazadas; (4) inventario de insumos que queda frente a lo que se necesita en las próximas dos semanas; (5) días o costo de mano de obra por parcela o grupo. Una granja de ponedoras en Ghana podría vigilar huevos por día, aves muertas, alimento usado, dinero de la venta de huevos e inventario de alimento. Un productor de tomate en Senegal podría vigilar cajas cosechadas, cajas rechazadas, días de trabajo, dinero de las ventas en XOF e inventario de plaguicidas y fertilizantes.",
            "Para cada número escribe un rango normal y una acción. Ejemplo: \"Más de 3 aves muertas al día: llamar al veterinario ese mismo día.\" \"Alimento para menos de 10 días: pedir alimento.\" Pon los cinco números en una tabla pequeña con una columna por semana, para ver la tendencia. Repásala en la reunión semanal y cambia un número si nunca lleva a una decisión."
          ],
          steps: ["Escoge cinco números que salgan de tu registro.", "Escribe un rango normal o una meta para cada uno.", "Escribe la acción si un número se sale del rango.", "Haz una tabla con una columna por semana.", "Repásala en la reunión semanal y actúa."],
          words: [["Tablero", "un resumen corto de los números clave que muestran cómo va la finca."], ["Tendencia", "la dirección en que se mueve un número a lo largo de varias semanas."], ["Rango normal", "los valores que esperas cuando las cosas van bien."]],
          slides: [
            { title: "Cinco números, dos minutos", bullets: ["Directamente de tu registro", "Léelos cada semana"] },
            { title: "Buenas opciones", bullets: ["Dinero que entra y que sale", "Producción: kg, huevos, litros", "Pérdidas, inventario que queda, costo de mano de obra"] },
            { title: "Rango y acción", bullets: ["Aves muertas por encima de lo normal: llama al veterinario", "Alimento para menos de 10 días: pide alimento"] },
            { title: "Mira la tendencia", bullets: ["Una columna por semana", "Repásala en la reunión", "Quita los números que nunca llevan a una acción"] }
          ],
          tryIt: "Tarea final: arma el tablero semanal de tu finca con cinco números, cada uno con su fuente en tu registro, un rango normal y la acción que tomas si se sale, y llena al menos dos semanas. Luego escribe en una página tu rutina de informes: el informe diario, la reunión semanal, cómo verificas y quién ve qué datos.",
          youCanNow: "dirigir tu finca con un tablero semanal de cinco números y una rutina de informes que puedes verificar.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué los números del tablero deben salir directamente del registro?", options: ["Para que se vean más profesionales", "Para que nadie tenga que recordarlos o adivinarlos", "Porque las aplicaciones lo exigen", "Para que los trabajadores no los vean"], answer: 1, why: "Los números de los registros son confiables; los de memoria no." },
            { objective: "O5", q: "Tu tablero dice \"alimento para menos de 10 días: pedir alimento\". Queda para 6 días. ¿Y ahora?", options: ["Esperar a la revisión mensual", "Quitar ese número del tablero", "Pedir a los trabajadores que den menos alimento", "Pedir alimento esta semana"], answer: 3, why: "Cada número tiene una acción; cuando se sale del rango, actúas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Dirigir con datos, de cerca o de lejos",
        questions: [
          { objective: "O6", q: "¿Quién debe ver los pagos de los trabajadores en el sistema de la finca?", options: ["Todos los trabajadores", "Cualquiera en el grupo de WhatsApp de la finca", "El dueño y, si hace falta, el contador", "Los compradores"], answer: 2, why: "Los pagos son privados; dar acceso según el papel los protege." },
          { objective: "O4", q: "¿Qué hace que un informe diario de la finca sea fácil de verificar?", options: ["Números fijos y los mismos lugares de las fotos a una hora fija", "Notas de voz largas", "Llamar cuando te acuerdes", "Informar solo de los problemas"], answer: 0, why: "El mismo contenido cada día te permite comparar y notar los cambios." },
          { objective: "O4", q: "Las ventas que informa un encargado son menores que los recibos del comprador. ¿Qué haces primero?", options: ["Despedirlo de inmediato", "Ignorarlo", "Publicarlo en el grupo de los trabajadores", "Preguntar con calma y pronto, y comparar juntos los registros"], answer: 3, why: "La mayoría de las diferencias son errores; preguntar pronto con los registros muestra qué pasó." },
          { objective: "O5", q: "¿Cuál es un buen número de tablero para una finca lechera?", options: ["El color del establo", "Litros de leche por día", "La cantidad de mensajes de WhatsApp", "La vaca favorita del encargado"], answer: 1, why: "Los números de producción, como los litros por día, muestran si la finca va bien." },
          { objective: "O5", q: "Un número del tablero nunca lleva a ninguna decisión. Deberías:", options: ["Cambiarlo por uno que sí lleve a decisiones", "Dejarlo para siempre", "Agregar cinco más como ese", "Esconder el tablero"], answer: 0, why: "Un tablero sirve para decidir; quita los números que no ayudan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Gestión de la finca con datos y aplicaciones móviles",
    questions: [
      { objective: "O1", q: "¿Cuál es la prueba más importante de una aplicación agrícola?", options: ["Tiene la mayor cantidad de funciones", "Es la más cara", "La anunciaron en la radio", "Tú y tus trabajadores la usan todos los días"], answer: 3, why: "Una herramienta que nadie usa no te da datos." },
      { objective: "O1", q: "¿Qué función permite a un trabajador anotar su trabajo sin ver la nómina?", options: ["Varios usuarios con distintos permisos", "Modo oscuro", "Videollamadas", "Fotos ilimitadas"], answer: 0, why: "Los permisos según el papel mantienen privados los datos privados." },
      { objective: "O1", q: "¿Una hoja de cálculo compartida gratuita puede reemplazar a una aplicación agrícola?", options: ["No, nunca", "Sí, si está bien preparada y se usa todos los días", "Solo en fincas muy grandes", "Solo si se imprime"], answer: 1, why: "Una hoja compartida bien preparada puede llevar parcelas, trabajos, inventario y pagos." },
      { objective: "O2", q: "¿Cuál es un buen nombre de parcela en un registro?", options: ["\"La que está cerca de la carretera\"", "\"Tomates\"", "\"P1 Tomate 0.5 acre\"", "Un nombre distinto cada semana"], answer: 2, why: "Un nombre corto fijo con el tamaño permite que los registros se sumen." },
      { objective: "O2", q: "¿Por qué fijar unidades como \"sacos de 50 kg\" para cada insumo?", options: ["Para que los totales y lo que queda en inventario sean correctos", "Porque los proveedores lo exigen", "Para que los trabajadores escriban menos", "No importa"], answer: 0, why: "Mezclar unidades da totales equivocados." },
      { objective: "O2", q: "Cuando un trabajador anota \"2 sacos de NPK usados en P1\", la lista de inventario debe:", options: ["Quedar igual", "Subir en dos", "Borrarse", "Bajar en dos"], answer: 3, why: "Lo que queda = lo que entró menos lo que se usó." },
      { objective: "O2", q: "¿Cada cuánto debes contar la bodega de insumos contra la lista?", options: ["Una vez al año", "Solo después de un robo", "Cada semana", "Nunca"], answer: 2, why: "Los conteos semanales detectan las diferencias a tiempo." },
      { objective: "O3", q: "¿Qué une un pago de dinero móvil con el registro de un trabajador?", options: ["El código de transacción", "El color del teléfono", "La foto del documento del trabajador en WhatsApp", "El clima"], answer: 0, why: "El código prueba el pago y lo conecta con el registro." },
      { objective: "O3", q: "Un trabajador hizo 5 días con un pago de ejemplo de NGN 4,000 al día. El registro debe mostrar:", options: ["NGN 4,000", "NGN 20,000", "NGN 9,000", "NGN 45,000"], answer: 1, why: "5 x 4,000 = 20,000; los días por el pago diario deben dar el monto pagado." },
      { objective: "O3", q: "¿Dónde consultas el salario mínimo legal?", options: ["En un grupo de WhatsApp", "Con el vendedor de insumos", "Solo con un asistente de IA", "En el ministerio de trabajo de tu país"], answer: 3, why: "Las reglas de salarios vienen de la autoridad laboral oficial y cambian con el tiempo." },
      { objective: "O6", q: "¿Qué datos necesita una finca sobre un trabajador eventual?", options: ["Nombre, número de dinero móvil, días y pago", "Su PIN", "Una foto de su documento en el chat del grupo", "La contraseña de su banco"], answer: 0, why: "Recoge solo lo que necesitas." },
      { objective: "O6", q: "¿Qué oficina vigila los datos personales en Kenia?", options: ["El Servicio Meteorológico de Kenia", "La Junta de Productos para el Control de Plagas (PCPB)", "La Office of the Data Protection Commissioner (ODPC)", "KALRO"], answer: 2, why: "La ODPC es la autoridad de protección de datos de Kenia." },
      { objective: "O6", q: "Un comprador te pide los registros de tu finca. Deberías:", options: ["Enviar todo, incluidos los pagos", "Compartir solo lo que necesita y preguntar cómo lo va a usar", "Negarte a venderle", "Enviar la contraseña de tu teléfono"], answer: 1, why: "Comparte lo mínimo y sabe cómo se va a usar." },
      { objective: "O4", q: "¿Qué debe incluir un informe diario de la finca?", options: ["Solo buenas noticias", "Historias largas", "Nada; los informes no hacen falta", "Números, problemas y fotos de los mismos lugares"], answer: 3, why: "Un contenido fijo te permite comparar de un día a otro." },
      { objective: "O4", q: "¿Qué es lo más difícil de falsificar cuando verificas un informe?", options: ["Un estado de cuenta de dinero móvil", "Una nota de voz", "Una promesa", "Un mensaje que dice \"todo bien\""], answer: 0, why: "Los estados de cuenta y los recibos son registros independientes." },
      { objective: "O4", q: "¿Para qué sirve la reunión semanal?", options: ["Para regañar al encargado", "Para repasar juntos los números, el inventario y el plan de la semana siguiente", "Para reemplazar todos los registros", "Para pagar a los proveedores"], answer: 1, why: "Convierte los números en decisiones." },
      { objective: "O5", q: "¿Cuántos números sugiere este curso para un tablero semanal?", options: ["Uno", "Veinte", "Cinco", "Cincuenta"], answer: 2, why: "Cinco números se pueden leer y usar para actuar en dos minutos." },
      { objective: "O5", q: "¿Cuál es un número de pérdidas para una granja de ponedoras?", options: ["Huevos vendidos", "Alimento entregado", "Trabajadores presentes", "Aves muertas esta semana"], answer: 3, why: "Las pérdidas, como las aves muertas, te avisan a tiempo." },
      { objective: "O5", q: "\"Más de 3 aves muertas al día: llamar al veterinario ese mismo día\" es un ejemplo de:", options: ["Un rango normal con una acción", "Una regla de protección de datos", "Un código de dinero móvil", "Un conteo de inventario"], answer: 0, why: "Cada número del tablero tiene un rango y la acción que tomas." },
      { objective: "O5", q: "¿Por qué poner una columna por semana en el tablero?", options: ["Para llenar la página", "Para ver la tendencia con el tiempo", "Porque las aplicaciones lo exigen", "Para esconder las semanas malas"], answer: 1, why: "Las tendencias muestran los problemas antes de que crezcan." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Cinco números útiles", objective: "O5", notYet: "Menos de cinco números, o números que no llevan a ninguna decisión.", meets: "Cinco números que cubren dinero, producción, pérdidas, inventario y mano de obra, cada uno con un rango normal y una acción.", exceeds: "Al menos dos semanas llenas y una decisión ya tomada gracias a un número." },
      { name: "Los números salen de los registros", objective: "O2", notYet: "Los números se adivinan o se recuerdan.", meets: "Cada número dice cuál es su fuente en el registro (registro de actividades, lista de inventario, registro de pagos).", exceeds: "El registro usa nombres y unidades fijos, y el conteo de inventario coincide con la lista." },
      { name: "Mano de obra y pagos registrados", objective: "O3", notYet: "Falta la mano de obra o se paga sin registro.", meets: "Los días de trabajo salen del registro de asistencia y los pagos tienen códigos de transacción.", exceeds: "Cada semana se revisa días x pago diario contra los pagos." },
      { name: "Rutina de informes", objective: "O4", notYet: "No hay informe fijo, o solo \"llamar cuando haga falta\".", meets: "Están escritos el contenido y la hora del informe diario, la reunión semanal y al menos dos formas de verificar.", exceeds: "Incluye visitas sin aviso o una segunda opinión de confianza, y cómo se plantean los números raros." },
      { name: "Datos protegidos", objective: "O6", notYet: "Los PIN, los números de identificación o los pagos están a la vista de todos.", meets: "Solo se recogen los datos necesarios y el acceso se da según el papel.", exceeds: "Incluye copia de seguridad, verificación en dos pasos y quitar el acceso a quien se va el mismo día." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que siguen revisando su tablero semanal 30 días después (encuesta de seguimiento)",
      "Participantes que encontraron y corrigieron una diferencia de inventario, mano de obra o ventas en los 60 días siguientes",
      "Proporción de pagos a trabajadores hechos con un código de transacción registrado",
      "Grupos de agricultores o programas que reportan menos pérdidas o menos disputas por pagos después del curso"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono inteligente con WhatsApp y dinero móvil",
      "Una aplicación gratuita de hoja de cálculo (Google Sheets o Microsoft Excel) o una aplicación agrícola que el participante esté probando",
      "Los datos de la finca del participante, o los números de ejemplo de las lecciones",
      "Papel y lápiz para la tabla de puntuación y la tabla de accesos",
      "Unos 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Funciona bien con grupos de agricultores, programas de jóvenes emprendedores agrícolas y asociaciones de dueños que viven lejos de su finca; un capítulo por sesión.",
      "No respalde ni venda ninguna aplicación en la sesión; deje que los participantes puntúen las opciones con la lista.",
      "Nunca pida a los participantes que muestren en grupo PIN, contraseñas, números de identificación reales ni los pagos de otras personas.",
      "Cuando pueda, junte a los dueños con sus encargados para la tarea de la Lección 5, para que los dos acuerden la rutina.",
      "Recuerde a los participantes que las reglas de salarios, trabajo y protección de datos cambian según el país y con el tiempo; consulten las fuentes oficiales.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};
