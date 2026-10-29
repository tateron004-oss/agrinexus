"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-estate-planning-wills.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-estate-planning-wills-es",
  lang: "es",
  translationOf: "seniors-estate-planning-wills",
  category: "Seniors and Technology",
  name: "Planificación patrimonial y testamentos",
  skills: "Saber para qué sirve un testamento, Revisar tus beneficiarios, Entender el poder notarial y las directivas de atención médica, Hacer una lista de lo que tienes y lo que debes, Prepararte para ver a un abogado o a asistencia legal, Organizar y guardar tus documentos",
  outcome: "preparar y organizar tu plan patrimonial: una lista de lo que tienes y lo que debes, una revisión de tus beneficiarios, las personas que quieres nombrar, tus preguntas para un abogado o para asistencia legal, y una nota clara que le diga a tu familia dónde están tus documentos importantes.",
  about: [
    "Este curso es para personas mayores que quieren hacerle las cosas más fáciles a su familia, y para los hijos adultos y nietos que las ayudan. No necesitas ser rico: cualquier persona con una cuenta bancaria, una casa, un auto, una pensión, una mascota o nietos pequeños a su cargo puede beneficiarse de un plan.",
    "Aprenderás para qué sirven un testamento, los beneficiarios, un poder notarial y una directiva de atención médica. Luego harás las listas y tomarás las decisiones que un abogado te va a pedir, y lo organizarás todo para que las personas indicadas puedan encontrarlo.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las leyes sobre testamentos y estos documentos son distintas en cada estado de EE. UU. y en cada país. Este curso te ayuda a prepararte; para que los documentos sean válidos, consulta a un abogado o a la asistencia legal gratuita del lugar donde vives."
  ],
  finalTask: "Arma tu carpeta de planificación patrimonial: (1) una lista de lo que tienes y lo que debes; (2) una revisión de beneficiarios de cada cuenta o póliza que tenga uno; (3) las personas que nombrarías como albacea, apoderado para asuntos financieros y representante para atención médica, con un suplente para cada una; (4) al menos cinco preguntas para un abogado o para asistencia legal; (5) una nota de una página que diga \"dónde están mis documentos\" para tu familia. Después, busca un lugar cerca de ti que ofrezca ayuda legal.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores, y los familiares que las ayudan, que no han hecho un plan patrimonial o tienen uno desactualizado. Algunas están criando a sus nietos; muchas tienen un seguro de vida, cuentas de jubilación o una casa.",
    startingPoint: "Saben que existen los testamentos, pero muchas no tienen uno, nunca han revisado sus formularios de beneficiarios y no saben para qué sirve un poder notarial o una directiva de atención médica. Los papeles suelen estar repartidos por toda la casa.",
    gap: "Sin un plan, la ley decide quién hereda, los formularios de beneficiarios viejos pueden mandar el dinero a la persona equivocada, y las familias pueden tener que ir a la corte si una persona no puede decidir por sí misma. Preparar las listas, las personas y las preguntas, y ordenar los papeles, le ahorra a la familia estrés y dinero, y hace que la visita al abogado sea más rápida y barata.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: basta con papel y una carpeta; un teléfono o una computadora ayuda a encontrar ayuda legal",
      "Tiempo: unos 5 minutos por lección, sin prisa, más tiempo para juntar los papeles",
      "Las leyes cambian según el estado y el país; el curso prepara, y un abogado o la asistencia legal hace que los documentos sean válidos",
      "Privacidad: solo los últimos cuatro dígitos de los números de cuenta, nada de contraseñas y nada de datos privados en herramientas de IA"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las palabras básicas de la planificación patrimonial", action: "explicar para qué sirve un testamento, qué hace un albacea y qué puede pasar sin testamento", standard: "con tus propias palabras, acertando al menos 4 de 5 preguntas" },
    { id: "O2", condition: "Con tu seguro de vida, tus cuentas de jubilación y tus cuentas del banco", action: "revisar quién está nombrado como beneficiario y como suplente en cada una", standard: "marcando cada formulario que esté desactualizado" },
    { id: "O3", condition: "Con las personas de tu vida", action: "elegir un albacea, un apoderado para asuntos financieros y un representante para atención médica, con un suplente para cada uno", standard: "eligiendo personas de confianza, fáciles de localizar y que vayan a seguir tus deseos" },
    { id: "O4", condition: "Usando papel o un archivo privado", action: "hacer una lista de lo que tienes y lo que debes", standard: "mostrando solo los últimos cuatro dígitos de cualquier número y sin contraseñas" },
    { id: "O5", condition: "Antes de ver a un abogado o a la asistencia legal", action: "encontrar ayuda legal cerca de ti y escribir al menos cinco preguntas claras", standard: "incluyendo cuánto va a costar y qué incluye" },
    { id: "O6", condition: "Con tus papeles importantes", action: "ordenarlos en una sola carpeta y escribir para tu familia una nota de \"dónde están mis documentos\"", standard: "compartida con las personas que nombraste" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conoce los documentos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la planificación patrimonial y para qué sirve un testamento",
          minutes: 5,
          goal: "Explicar para qué sirve un testamento y qué puede pasar si no tienes uno.",
          text: [
            "Planificar tu patrimonio significa decidir con tiempo qué pasará con tu dinero y tus pertenencias cuando mueras, y quién tomará decisiones por ti si te enfermas tanto que no puedes decidir. Tu patrimonio es todo lo que tienes, menos lo que debes.",
            "Un testamento es un documento legal que dice quién recibe tus pertenencias y nombra a un albacea: la persona que cumple tus deseos, paga las últimas cuentas y reparte lo que queda. En muchos lugares, un testamento también puede nombrar a un tutor para los menores de 18 años que tienes a tu cargo, como nietos que estás criando.",
            "Si mueres sin testamento, la ley del lugar donde vives decide quién hereda, y un juez elige quién administra tu patrimonio. El resultado puede no ser lo que tú querías.",
            "Cada estado y cada país tiene sus propias reglas para que un testamento sea válido, por ejemplo cómo se firma y quiénes son los testigos. Un testamento que no sigue esas reglas puede no valer. Por eso este curso te ayuda a prepararte, y un abogado o la asistencia legal te ayuda a hacerlo válido."
          ],
          words: [["Patrimonio", "todo lo que tienes, como dinero, una casa, un auto y tus pertenencias, menos lo que debes."], ["Testamento", "un documento legal que dice quién recibe tus pertenencias cuando mueras y quién cumple tus deseos."], ["Albacea", "la persona nombrada en un testamento para cumplir tus deseos y cerrar los asuntos de tu patrimonio."], ["Tutor", "una persona nombrada para cuidar a un menor de 18 años."]],
          slides: [
            { title: "Planificar es decidir con tiempo", bullets: ["Qué pasa con tus cosas cuando mueras", "Quién decide por ti si estás muy enfermo"] },
            { title: "Un testamento", bullets: ["Dice quién recibe tus pertenencias", "Nombra a un albacea", "Puede nombrar a un tutor para los menores a tu cargo"] },
            { title: "Sin testamento", bullets: ["Decide la ley del lugar donde vives", "Un juez elige quién lo administra", "Puede no ser lo que tú querías"] },
            { title: "Las reglas cambian según el lugar", bullets: ["Cada estado y país tiene sus propias reglas", "Prepárate aquí; hazlo válido con un abogado o con asistencia legal"] }
          ],
          sources: [{ name: "LawHelp.org: ayuda legal gratuita e información en tu estado", url: "https://www.lawhelp.org/" }],
          tryIt: "Escribe tres cosas que más te importa dejar, como una casa, tus ahorros, la Biblia de la familia, un auto o el cuidado de una mascota, y a quién te gustaría dejarle cada una. Es una lista privada para ti, no un documento legal.",
          youCanNow: "explicar qué son un testamento y un albacea, y por qué un testamento debe seguir las reglas del lugar donde vives.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un albacea?", options: ["La persona que cumple los deseos de tu testamento", "Un juez", "Una cuenta del banco", "Tu médico"], answer: 0, why: "El albacea cumple tus deseos, paga las últimas cuentas y reparte lo que queda." },
            { objective: "O1", q: "Tu amiga dice: \"No necesito testamento; mi familia lo va a resolver\". ¿Qué podría pasar sin uno?", options: ["Nada cambia", "La familia vota", "La ley del lugar donde vive decide quién hereda, y puede que no sea lo que ella quería", "El banco se queda con todo"], answer: 2, why: "Sin testamento, la ley decide quién hereda y una corte elige quién maneja el patrimonio." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Revisar tus beneficiarios",
          minutes: 5,
          goal: "Encontrar cada cuenta o póliza que tiene un beneficiario y revisar quién está nombrado.",
          text: [
            "Parte de tu dinero no pasa por tu testamento. Los seguros de vida, muchas cuentas de jubilación y pensiones, y algunas cuentas bancarias te dejan nombrar a un beneficiario: la persona que recibe ese dinero cuando mueres. Normalmente, estos formularios deciden quién recibe ese dinero, aunque tu testamento diga otra cosa.",
            "Por eso los formularios viejos causan problemas. Una póliza de seguro de vida puede seguir nombrando a un excónyuge, a un padre o una madre que ya murió, o a un hijo de antes de que nacieran los nietos.",
            "Haz una lista de todas tus cuentas y pólizas. En cada una, pregunta a la compañía o revisa tu cuenta en línea para ver quién está nombrado como beneficiario y como suplente (a menudo llamado beneficiario contingente). Corrige los que estén mal con el formulario de la propia compañía.",
            "Revisa tus beneficiarios después de cambios grandes en tu vida: un matrimonio, un divorcio, una muerte, un nacimiento o un nuevo nieto. Pregunta a un abogado antes de nombrar a un menor de edad o a una persona que recibe beneficios por discapacidad, porque puede haber reglas especiales."
          ],
          steps: ["Haz una lista de cada seguro de vida, cuenta de jubilación, pensión y cuenta bancaria.", "En cada una, averigua quién está nombrado como beneficiario y como suplente.", "Marca los que estén desactualizados.", "Actualízalos con el formulario de la propia compañía.", "Vuelve a revisar después de un matrimonio, divorcio, muerte o nacimiento."],
          words: [["Beneficiario", "la persona que nombras para recibir el dinero de una cuenta o póliza cuando mueras."], ["Beneficiario contingente", "el suplente que recibe el dinero si el primer beneficiario ya murió."], ["Cambio de vida", "un cambio grande como un matrimonio, un divorcio, una muerte o un nacimiento."]],
          slides: [
            { title: "Parte del dinero no pasa por el testamento", bullets: ["Seguros de vida, muchas cuentas de jubilación", "Algunas cuentas bancarias", "Normalmente decide el formulario de beneficiario"] },
            { title: "Los formularios viejos causan problemas", bullets: ["Todavía nombran a un excónyuge", "Nombran a una persona que ya murió", "Dejan fuera a los nietos nuevos"] },
            { title: "Revisa cada uno", bullets: ["Haz una lista de tus cuentas y pólizas", "Busca el beneficiario nombrado y el suplente", "Actualiza con el formulario de la compañía"] },
            { title: "Revisa después de cambios de vida", bullets: ["Matrimonio, divorcio, muerte, nacimiento", "Pregunta a un abogado por menores o beneficios por discapacidad"] }
          ],
          sources: [{ name: "CFPB (Oficina para la Protección Financiera del Consumidor): Cómo administrar el dinero de otra persona (guías para familias)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }],
          tryIt: "Haz una lista de todas las cuentas o pólizas que tienes que podrían tener un beneficiario. Elige una, revisa quién está nombrado (en línea, en tus papeles o llamando a la compañía) y anota si todavía es correcto.",
          youCanNow: "encontrar tus cuentas que tienen beneficiarios, revisar quién está nombrado y saber cuándo actualizarlas.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un beneficiario?", options: ["La persona que escribe tu testamento", "La persona nombrada para recibir el dinero de una cuenta o una póliza cuando mueras", "Tu abogado", "El gerente de tu banco"], answer: 1, why: "Un beneficiario es la persona nombrada en una cuenta o una póliza para recibir ese dinero." },
            { objective: "O2", q: "El formulario de tu pensión todavía nombra como beneficiario a tu esposo, que ya falleció. ¿Qué haces?", options: ["Dejarlo así; el testamento lo cubre", "Tachar su nombre en tu copia", "Contárselo a un amigo", "Actualizarlo con el formulario de la propia compañía"], answer: 3, why: "Los formularios de beneficiarios casi siempre deciden quién recibe ese dinero, así que actualízalos con el formulario de la compañía." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Poder notarial y directivas de atención médica",
          minutes: 6,
          goal: "Explicar quién decidiría por ti sobre el dinero y sobre tu salud si tú no pudieras.",
          text: [
            "Un testamento solo funciona después de que mueres. Otros documentos te protegen mientras estás vivo, si una enfermedad o un accidente te deja sin poder decidir por ti mismo.",
            "Un poder notarial para asuntos financieros (financial power of attorney) nombra a un apoderado: una persona de confianza que maneja tu dinero y tus bienes por ti, por ejemplo pagar cuentas o hablar con el banco. La Consumer Financial Protection Bureau (CFPB, la oficina federal que protege a los consumidores en asuntos de dinero) tiene guías gratuitas para las personas nombradas como apoderados. Sin este poder, tu familia podría tener que ir a un juez para que nombre a un tutor o curador, lo que cuesta tiempo y dinero.",
            "Una directiva de atención médica, también llamada directiva anticipada, cubre las decisiones médicas. Un poder para atención médica (o representante para atención médica) nombra a una persona de confianza que toma decisiones de salud si tú no puedes. Un testamento vital deja por escrito qué tratamientos querrías o no querrías si te estuvieras muriendo o quedaras inconsciente para siempre, como máquinas para respirar o alimentación por sonda.",
            "Elige personas confiables, que vivan cerca o a las que se pueda localizar, y que vayan a seguir tus deseos, no los suyos. Nombra un suplente para cada una. Luego habla con ellas, y con tu médico, sobre lo que quieres. Los formularios y las reglas cambian según el estado y el país, así que consíguelos con un abogado, la asistencia legal, el consultorio de tu médico o el hospital, y pregunta cómo firmarlos correctamente."
          ],
          words: [["Poder notarial", "un documento legal que permite que una persona que eliges actúe por ti."], ["Apoderado", "la persona que nombras en un poder notarial."], ["Directiva anticipada", "documentos que dicen a los médicos y a tu familia tus deseos de atención médica y quién decide por ti."], ["Testamento vital", "un documento que dice qué tratamientos quieres o no quieres cerca del final de la vida."], ["Representante para atención médica", "la persona que nombras para tomar decisiones de salud si tú no puedes."]],
          slides: [
            { title: "Planes para mientras estás vivo", bullets: ["Un testamento funciona solo después de la muerte", "Estos cubren una enfermedad o un accidente"] },
            { title: "Poder notarial para asuntos financieros", bullets: ["Nombra a un apoderado para tu dinero y tus bienes", "Paga cuentas, habla con el banco", "Sin él, tu familia podría tener que ir a un juez"] },
            { title: "Directivas de atención médica", bullets: ["Representante para atención médica: quién decide", "Testamento vital: qué tratamientos quieres", "Habla de ellas con tu médico"] },
            { title: "Elige bien", bullets: ["Confiable y fácil de localizar", "Que siga tus deseos", "Nombra un suplente; los formularios cambian según el estado"] }
          ],
          sources: [
            { name: "MedlinePlus: Directivas anticipadas", url: "https://medlineplus.gov/advancedirectives.html" },
            { name: "CFPB: Cómo administrar el dinero de otra persona", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }
          ],
          tryIt: "Escribe el nombre de la persona que elegirías como apoderado para asuntos financieros y como representante para atención médica, y un suplente para cada una. Junto a cada nombre, escribe una razón por la que confías en esa persona.",
          youCanNow: "explicar qué son un poder notarial para asuntos financieros, un representante para atención médica y un testamento vital, y elegir en quién confías para cada uno.",
          quickCheck: [
            { objective: "O3", q: "¿Para qué sirve un poder notarial para asuntos financieros?", options: ["Nombra a alguien para manejar tu dinero y tus bienes si tú no puedes", "Dice quién recibe tu casa cuando mueras", "Enumera tus medicinas", "Cierra tu cuenta del banco"], answer: 0, why: "Un poder notarial para asuntos financieros nombra a un apoderado que maneja el dinero por ti mientras vives." },
            { objective: "O3", q: "Estás eligiendo a tu representante para atención médica. ¿Quién es la mejor opción?", options: ["El pariente que más discute", "Alguien a quien no ves hace años", "Una persona de confianza, fácil de localizar, que va a seguir tus deseos, con un suplente", "El primero que lo pida"], answer: 2, why: "Elige a alguien de confianza, fácil de localizar y dispuesto a seguir tus deseos, y nombra un suplente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conoce los documentos",
        questions: [
          { objective: "O1", q: "¿Qué hace un albacea?", options: ["Cumple los deseos de tu testamento y cierra los asuntos de tu patrimonio", "Escribe tu historial médico", "Te vende seguros", "Decide tu plan de Medicare"], answer: 0, why: "El albacea es nombrado en el testamento para cumplir tus deseos." },
          { objective: "O1", q: "¿Qué puede pasar si mueres sin testamento?", options: ["No pasa nada con tus pertenencias", "Tu banco se queda con todo", "La ley del lugar donde vives decide quién hereda", "Tu vecino elige"], answer: 2, why: "Sin testamento, deciden la ley del estado o del país y un juez." },
          { objective: "O2", q: "Tu testamento le deja todo a tu hija, pero tu formulario de seguro de vida todavía nombra a tu exesposo. ¿Quién recibe normalmente el seguro?", options: ["Tu hija", "El juez", "El agente de seguros", "La persona nombrada en el formulario de beneficiario"], answer: 3, why: "Los formularios de beneficiario normalmente deciden sobre ese dinero, aunque el testamento diga otra cosa." },
          { objective: "O3", q: "¿Qué documento nombra a alguien para tomar decisiones médicas si tú no puedes?", options: ["Un estado de cuenta bancario", "Un poder para atención médica (representante para atención médica)", "Un formulario de beneficiario", "Una lista de compras"], answer: 1, why: "El representante para atención médica es la persona que nombras para las decisiones de salud." },
          { objective: "O1", q: "¿Por qué necesitas un abogado o asistencia legal para terminar estos documentos?", options: ["Porque las herramientas de IA no pueden leerlos", "Porque tienen que estar escritos a máquina", "Porque las reglas para que sean válidos cambian según el estado y el país", "Porque solo los abogados pueden tener una casa"], answer: 2, why: "Un documento que no sigue las reglas del lugar puede no valer." }
        ]
      }
    },
    {
      name: "Capítulo 2: Prepárate y organízate",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hacer una lista de lo que tienes y lo que debes",
          minutes: 5,
          goal: "Hacer una lista sencilla de tus bienes y deudas que tu abogado y tu familia puedan usar.",
          text: [
            "Antes de ver a un abogado, haz una lista de lo que tienes y lo que debes. Esta lista ayuda al abogado a aconsejarte bien, y más adelante ayuda a tu albacea a encontrarlo todo.",
            "Lo que tienes (bienes): cuentas en bancos y cooperativas de crédito, cuentas de jubilación y pensiones, seguros de vida, tu casa o terreno, vehículos, objetos de valor y cosas con valor familiar como joyas o fotos. Anota también cuentas en línea, como el correo electrónico y el almacenamiento de fotos, y las mascotas que necesitarán un nuevo hogar.",
            "Lo que debes (deudas): una hipoteca, un préstamo del auto, tarjetas de crédito, cuentas médicas y cualquier préstamo personal.",
            "En cada cosa, escribe la compañía y el tipo de cuenta, pero no los números de cuenta completos ni las contraseñas. Escribe \"termina en 1234\" en su lugar. Guarda esta lista en un lugar seguro. No la escribas en un asistente de IA ni la mandes por correo a nadie que no hayas elegido para ayudarte."
          ],
          steps: ["Escribe un título: Lo que tengo. Anota cuentas, pólizas, propiedades, vehículos y objetos de valor.", "Agrega las cuentas en línea y las mascotas.", "Escribe un título: Lo que debo. Anota cada deuda y con quién es.", "Usa solo los últimos cuatro dígitos de cualquier número, y nunca escribas contraseñas en esta lista.", "Guárdala en un lugar seguro."],
          words: [["Bien", "algo que tienes y que tiene valor, como dinero, una casa o un auto."], ["Deuda", "dinero que debes, como una hipoteca o una tarjeta de crédito."], ["Inventario", "una lista completa de lo que tienes."]],
          slides: [
            { title: "Para qué sirve la lista", bullets: ["Ayuda a tu abogado a aconsejarte", "Ayuda a tu albacea a encontrarlo todo"] },
            { title: "Lo que tienes", bullets: ["Cuentas, pensiones, seguros de vida", "Casa, terreno, vehículos, objetos de valor", "Cuentas en línea y mascotas"] },
            { title: "Lo que debes", bullets: ["Hipoteca, préstamo del auto, tarjetas de crédito", "Cuentas médicas, préstamos personales"] },
            { title: "Mantenla privada", bullets: ["Solo los últimos cuatro dígitos", "Nada de contraseñas en la lista", "Nunca la pegues en una herramienta de IA"] }
          ],
          tryIt: "Empieza tu lista ahora en papel: escribe al menos cinco cosas que tienes y todas tus deudas, con el nombre de la compañía y solo los últimos cuatro dígitos de cualquier número.",
          youCanNow: "hacer una lista privada y ordenada de lo que tienes y lo que debes para tu abogado y tu familia.",
          quickCheck: [
            { objective: "O4", q: "¿Qué son tus bienes?", options: ["Tus deudas", "Tus médicos", "Tus preguntas para un abogado", "Lo que tienes, como cuentas, propiedades y objetos de valor"], answer: 3, why: "Los bienes son lo que tienes; las deudas son lo que debes." },
            { objective: "O4", q: "Estás anotando tu cuenta de ahorros en tu lista. ¿Cómo escribes el número?", options: ["El número completo y la contraseña", "\"Termina en 1234\"", "Solo el número completo", "No anotas la cuenta"], answer: 1, why: "Escribe solo los últimos cuatro dígitos, y nunca pongas contraseñas en la lista." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Prepararte para ver a un abogado o a asistencia legal",
          minutes: 5,
          goal: "Encontrar ayuda legal cerca de ti y preparar las decisiones y preguntas que vas a llevar.",
          text: [
            "La ayuda para planificar tu patrimonio no tiene que ser cara. Puedes encontrar ayuda gratis o de bajo costo en grupos de asistencia legal, servicios legales para personas mayores, clínicas de facultades de derecho y programas de abogados voluntarios. En LawHelp.org eliges tu estado y encuentras ayuda legal gratuita de organizaciones sin fines de lucro. El Eldercare Locator (1-800-677-1116), un servicio nacional para personas mayores, conecta a los adultos mayores y sus familias con servicios locales; pregúntales por ayuda legal para personas mayores cerca de ti. El colegio de abogados (bar association) de tu estado o tu zona también puede tener un servicio de referencia de abogados.",
            "Existen formularios y kits de testamento en línea, pero un formulario que no se ajusta a las reglas de tu estado, o a la situación de tu familia, puede fallar. Un abogado o la asistencia legal puede decirte si un formulario sencillo te basta o no.",
            "Lleva lo que preparaste: tu lista de lo que tienes y lo que debes, tu revisión de beneficiarios, y las personas que elegiste como albacea, tutor, apoderado para asuntos financieros y representante para atención médica, con sus suplentes. Lleva también preguntas.",
            "Buenas preguntas: ¿Necesito un testamento, un fideicomiso o los dos? ¿Cómo se firma mi testamento aquí y con qué testigos? ¿Qué pasa con mi casa? ¿Qué debo hacer con un nieto que tengo a mi cargo? ¿Cuánto costará y qué incluye? Un asistente de IA puede ayudarte a escribir tus preguntas con palabras claras, pero deja fuera nombres y números, y deja que el abogado dé las respuestas legales."
          ],
          steps: ["Entra en LawHelp.org y elige tu estado, o llama al Eldercare Locator.", "Pregunta por planificación patrimonial gratis o de bajo costo para personas mayores.", "Reúne tus listas y las personas que elegiste.", "Escribe al menos cinco preguntas.", "Pregunta cuánto costará y qué incluye antes de empezar."],
          words: [["Asistencia legal", "ayuda legal gratuita de organizaciones sin fines de lucro para las personas que califican."], ["Servicio de referencia de abogados", "un servicio, a menudo de un colegio de abogados, que te pone en contacto con un abogado."], ["Fideicomiso", "un acuerdo legal en el que una persona administra bienes para otras; un abogado puede decirte si necesitas uno."]],
          slides: [
            { title: "Dónde encontrar ayuda", bullets: ["LawHelp.org: elige tu estado", "Eldercare Locator: 1-800-677-1116", "Servicio de referencia del colegio de abogados"] },
            { title: "Cuidado con los kits", bullets: ["El formulario debe ajustarse a las reglas de tu estado", "Pregunta a un abogado si un formulario sencillo te basta"] },
            { title: "Lleva lo que preparaste", bullets: ["Lo que tienes y lo que debes", "La revisión de beneficiarios", "Las personas que elegiste, con suplentes"] },
            { title: "Lleva preguntas", bullets: ["¿Testamento, fideicomiso o los dos?", "¿Cómo se firma aquí y con qué testigos?", "¿Cuánto costará?"] }
          ],
          sources: [
            { name: "LawHelp.org: ayuda legal gratuita", url: "https://www.lawhelp.org/" },
            { name: "Eldercare Locator (Administration for Community Living)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Entra en LawHelp.org, elige tu estado y busca un grupo de asistencia legal o un servicio legal para personas mayores cerca de ti. Escribe su nombre y su número de teléfono, y escribe cinco preguntas que le harías.",
          youCanNow: "encontrar ayuda legal gratis o de bajo costo cerca de ti y llegar a la cita bien preparado.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es LawHelp.org?", options: ["Un sitio para encontrar ayuda legal gratis de la asistencia legal sin fines de lucro de tu estado", "Un paquete para hacer testamentos en línea", "Un banco", "Una oficina de beneficios del gobierno"], answer: 0, why: "LawHelp.org te deja elegir tu estado para encontrar ayuda legal gratis." },
            { objective: "O5", q: "Quieres que la IA te ayude a escribir tus preguntas para el abogado. ¿Qué dejas fuera?", options: ["La palabra \"testamento\"", "Tus preguntas", "Los nombres y los números de cuenta", "La palabra \"costo\""], answer: 2, why: "La IA puede ayudarte con palabras claras, pero deja fuera los nombres y los números, y deja que el abogado responda." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Organizar y guardar tus documentos importantes",
          minutes: 5,
          goal: "Poner tus documentos en un solo lugar seguro y decirles a las personas indicadas dónde están.",
          text: [
            "Un plan solo sirve si la gente puede encontrarlo. Muchas familias pasan días buscando un testamento, una póliza de seguro o la escritura de una casa. Tú puedes ahorrarles eso.",
            "Prepara una sola carpeta o archivador. Pon dentro, o anota dónde encontrar: tu testamento y otros documentos legales, tu poder notarial y tu directiva de atención médica, tu lista de lo que tienes y lo que debes, las pólizas de seguro, las escrituras y los títulos, tus tarjetas de Medicare (el seguro médico federal de EE. UU. para mayores de 65 años) u otras tarjetas de salud (copias), y una lista de contactos: tu abogado, tu médico, tu banco y las personas que nombraste.",
            "Pregunta a tu abogado dónde se debe guardar el original firmado de tu testamento, porque las reglas y las opciones cambian. Dale una copia de tu directiva de atención médica a tu representante para atención médica y a tu médico, para que la tengan a mano en una emergencia. Guarda el archivador en un lugar seguro de tu casa que tu albacea conozca.",
            "Escribe una nota de una página que diga \"dónde están mis documentos\" y dásela a las personas que nombraste. Revisa todo cada pocos años y después de cambios grandes en tu vida. Cuando cambies algo, avísale a tu familia y retira las versiones viejas para que nadie use la equivocada."
          ],
          steps: ["Prepara una carpeta o archivador para tus documentos importantes.", "Agrega cada documento, o una nota que diga dónde está.", "Pregunta a tu abogado dónde guardar el testamento original.", "Dale tu directiva de atención médica a tu representante y a tu médico.", "Escribe una nota que diga \"dónde están mis documentos\" y compártela con las personas que nombraste.", "Revisa después de cambios grandes en tu vida y retira las versiones viejas."],
          words: [["Original", "el documento firmado en sí, no una copia."], ["Escritura", "el documento legal que muestra quién es dueño de una casa o un terreno."], ["Título", "el documento que muestra quién es dueño de un vehículo."]],
          slides: [
            { title: "La gente tiene que poder encontrarlo", bullets: ["Las familias pueden buscar durante días", "Un solo archivador se lo evita"] },
            { title: "Qué va en el archivador", bullets: ["Testamento, poder notarial, directiva médica", "Tu lista de lo que tienes y lo que debes", "Pólizas, escrituras, títulos, contactos"] },
            { title: "Dónde guardar las cosas", bullets: ["Pregunta a tu abogado por el testamento original", "Directiva médica: a tu representante y a tu médico", "Archivador: un lugar seguro que tu albacea conozca"] },
            { title: "Avisa y revisa", bullets: ["Comparte una nota de \"dónde están mis documentos\"", "Revisa después de cambios de vida", "Retira las versiones viejas"] }
          ],
          sources: [{ name: "MedlinePlus: Directivas anticipadas", url: "https://medlineplus.gov/advancedirectives.html" }],
          tryIt: "Tarea final: arma tu carpeta de planificación patrimonial con tu lista de lo que tienes y lo que debes, tu revisión de beneficiarios, las personas que nombrarías con sus suplentes, al menos cinco preguntas para un abogado o para asistencia legal, y una nota de una página que diga \"dónde están mis documentos\". Después, busca una oficina de ayuda legal cerca de ti y anota cómo comunicarte con ella.",
          youCanNow: "organizar tus documentos importantes, guardarlos de forma segura y decirles a las personas indicadas dónde están.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué darle a tu médico una copia de tu directiva de atención médica?", options: ["Para que esté disponible en una emergencia", "Para que el médico la pueda cambiar", "Para pagar menos por la atención", "No hace falta"], answer: 0, why: "Tu representante y tu médico necesitan una copia para que esté disponible cuando importa." },
            { objective: "O6", q: "Actualizaste tu testamento. ¿Qué haces con la versión vieja?", options: ["Guardar las dos en la carpeta", "Enviarle la vieja por correo a un pariente", "Esconder la nueva", "Seguir el consejo de tu abogado y asegurarte de que nadie use la vieja"], answer: 3, why: "Quita las versiones viejas para que nadie use la equivocada, y avísale a tu familia del cambio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Prepárate y organízate",
        questions: [
          { objective: "O4", q: "¿Cómo deben aparecer los números de cuenta en tu lista de lo que tienes?", options: ["El número completo y la contraseña", "Solo los últimos cuatro dígitos, sin contraseñas", "Escritos por fuera de la carpeta", "Publicados en internet para tu familia"], answer: 1, why: "Los últimos cuatro dígitos identifican la cuenta sin dejarla expuesta." },
          { objective: "O4", q: "¿Cuál de estas es una deuda?", options: ["Tu cuenta de ahorros", "Tu auto", "Una póliza de seguro de vida", "El saldo de una tarjeta de crédito"], answer: 3, why: "Una deuda es dinero que debes." },
          { objective: "O5", q: "¿Dónde puedes buscar ayuda legal gratuita en tu estado?", options: ["LawHelp.org", "Un anuncio cualquiera en internet", "Un enlace en un mensaje de texto", "Un comentario en redes sociales"], answer: 0, why: "LawHelp.org muestra la asistencia legal sin fines de lucro de cada estado." },
          { objective: "O6", q: "¿Quién debe recibir una copia de tu directiva de atención médica?", options: ["Nadie", "El cajero de tu banco", "Tu representante para atención médica y tu médico", "Un desconocido en internet"], answer: 2, why: "La necesitan para seguir tus deseos en una emergencia." },
          { objective: "O6", q: "Cambiaste tu testamento. ¿Qué haces con la versión vieja?", options: ["Guardar las dos en el archivador sin ninguna nota", "Dársela a un vecino", "Esconderla en otro cuarto", "Seguir el consejo de tu abogado y asegurarte de que nadie use la vieja"], answer: 3, why: "Las versiones viejas pueden confundir a tu familia; tu abogado puede decirte qué hacer con ellas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Planificación patrimonial y testamentos",
    questions: [
      { objective: "O1", q: "Tu patrimonio es:", options: ["Solo tu casa", "Solo tu cuenta bancaria", "Tu jardín", "Todo lo que tienes, menos lo que debes"], answer: 3, why: "El patrimonio incluye todos tus bienes, menos las deudas." },
      { objective: "O1", q: "Un testamento dice sobre todo:", options: ["A qué médico vas", "Quién recibe tus pertenencias y quién cumple tus deseos", "Tu presupuesto del mes", "Tu plan de Medicare"], answer: 1, why: "Un testamento nombra a quién hereda y a un albacea." },
      { objective: "O1", q: "Una abuela está criando a sus dos nietos. ¿Qué puede hacer a menudo un testamento por ellos?", options: ["Nada", "Pagar su escuela automáticamente", "Nombrarles un tutor", "Cambiar sus actas de nacimiento"], answer: 2, why: "En muchos lugares, un testamento puede nombrar a un tutor para los menores de 18 años." },
      { objective: "O1", q: "¿Por qué podría fallar un testamento hecho con un formulario gratis?", options: ["Puede no seguir las reglas de firma y testigos del lugar donde vives", "Los formularios gratis siempre son ilegales", "Los testamentos tienen que ser a color", "Es demasiado corto"], answer: 0, why: "Cada estado y país tiene sus propias reglas para que un testamento sea válido." },
      { objective: "O2", q: "El seguro de vida normalmente va a:", options: ["Quien nombre el testamento", "El albacea", "La persona nombrada en el formulario de beneficiario", "El gobierno"], answer: 2, why: "Los formularios de beneficiario normalmente deciden sobre ese dinero." },
      { objective: "O2", q: "¿Cuándo debes revisar tus beneficiarios?", options: ["Nunca", "Solo una vez, al abrir la cuenta", "Solo cuando llama la compañía", "Después de un matrimonio, divorcio, muerte o nacimiento"], answer: 3, why: "Los cambios de vida son cuando los formularios quedan desactualizados." },
      { objective: "O2", q: "Un beneficiario contingente es:", options: ["El suplente si el primer beneficiario ya murió", "Tu abogado", "Tu médico", "El gerente del banco"], answer: 0, why: "El beneficiario contingente es el suplente." },
      { objective: "O3", q: "Un poder notarial para asuntos financieros nombra a alguien para:", options: ["Tomar decisiones médicas", "Manejar tu dinero y tus bienes si tú no puedes", "Leer tu testamento en voz alta", "Elegir tu iglesia"], answer: 1, why: "El apoderado actúa por ti en asuntos de dinero." },
      { objective: "O3", q: "Sin un poder notarial para asuntos financieros, si no puedes manejar tu dinero, tu familia podría tener que:", options: ["No hacer nada", "Ir a un juez para que nombre a un tutor o curador", "Llamar a una estación de radio", "Cerrar todas tus cuentas"], answer: 1, why: "Ir a un juez puede ser lento y caro; un poder notarial lo evita." },
      { objective: "O3", q: "Un testamento vital dice:", options: ["Quién recibe tu casa", "El saldo de tu banco", "Qué tratamientos quieres o no quieres cerca del final de la vida", "Tu lista de compras"], answer: 2, why: "Un testamento vital deja por escrito tus deseos sobre los tratamientos." },
      { objective: "O3", q: "¿Quién es una buena elección como representante para atención médica?", options: ["Alguien que seguirá sus propios deseos", "Un desconocido que te llama", "Cualquiera que lo pida", "Una persona de confianza, fácil de localizar, que seguirá tus deseos"], answer: 3, why: "Tu representante debe hablar por ti, no por sí mismo." },
      { objective: "O3", q: "Además de tu abogado, ¿con quién debes hablar sobre tus deseos de atención médica?", options: ["Con tu médico y tu representante para atención médica", "Con un vendedor que te llama", "Con nadie", "Con un grupo de redes sociales"], answer: 0, why: "Son quienes van a actuar según tus deseos." },
      { objective: "O4", q: "¿Qué va en tu lista de lo que tienes?", options: ["Tu contraseña completa", "El auto de tu vecino", "Tu PIN", "Tu casa, tus cuentas, tus vehículos y tus objetos de valor"], answer: 3, why: "Anota tus bienes con la compañía y los últimos cuatro dígitos, no contraseñas." },
      { objective: "O4", q: "¿Debes pegar la lista completa de tus cuentas en un asistente de IA?", options: ["Sí, para ahorrar tiempo", "No; deja los datos privados fuera de las herramientas de IA", "Sí, si la IA lo pide", "Solo en una computadora de la biblioteca"], answer: 1, why: "Nunca escribas números privados ni datos de cuentas en herramientas de IA." },
      { objective: "O5", q: "¿Qué número de teléfono te comunica con el Eldercare Locator?", options: ["1-800-677-1116", "911", "1-800-MEDICARE", "411"], answer: 0, why: "El Eldercare Locator conecta a los adultos mayores con servicios locales." },
      { objective: "O5", q: "Antes de contratar a un abogado, una pregunta inteligente es:", options: ["¿Cuál es su color favorito?", "¿Puede adivinar mis deseos?", "¿Cuánto costará y qué incluye?", "¿Puedo no firmar?"], answer: 2, why: "Saber el costo desde el principio evita sorpresas." },
      { objective: "O5", q: "¿Cuál es un buen uso de un asistente de IA en la planificación patrimonial?", options: ["Escribir tu testamento legal tú solo", "Ayudarte a escribir tus preguntas con palabras claras, sin nombres ni números", "Guardar tus contraseñas", "Decidir quién hereda"], answer: 1, why: "La IA puede ayudar con la redacción, pero las respuestas legales vienen de un abogado." },
      { objective: "O6", q: "¿Dónde se debe guardar el original firmado del testamento?", options: ["Donde sea, no importa", "En el auto", "Se tira después de sacar una copia", "Donde te aconseje tu abogado, y tu albacea debe saberlo"], answer: 3, why: "Las reglas y las opciones cambian; pregunta a tu abogado." },
      { objective: "O6", q: "Una nota de \"dónde están mis documentos\" debe ir a:", options: ["Todo el mundo en internet", "Nadie", "Las personas que nombraste en tu plan", "Un vendedor que te llama"], answer: 2, why: "Las personas que actuarán por ti necesitan encontrar tus documentos." },
      { objective: "O1", q: "Las leyes de planificación patrimonial:", options: ["Son distintas en cada estado y país", "Son iguales en todo el mundo", "Nunca cambian", "Solo se aplican a los ricos"], answer: 0, why: "Las reglas cambian según el lugar, así que consulta a un abogado o a la asistencia legal de donde vives." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      7,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Lo que tengo y lo que debo",
        objective: "O4",
        notYet: "A la lista le faltan cosas importantes, o muestra números de cuenta completos o contraseñas.",
        meets: "Una lista de bienes y deudas con la compañía y el tipo de cuenta, usando solo los últimos cuatro dígitos.",
        exceeds: "También anota las cuentas en línea y las mascotas, y está guardada en un lugar seguro."
      },
      {
        name: "Revisión de beneficiarios",
        objective: "O2",
        notYet: "No se revisaron algunas cuentas o pólizas.",
        meets: "Cada cuenta o póliza con beneficiario está en la lista, con la persona nombrada y el suplente.",
        exceeds: "Los formularios desactualizados están marcados y ya se pidió el formulario para actualizarlos."
      },
      {
        name: "Personas nombradas",
        objective: "O3",
        notYet: "Falta uno o más papeles, o no hay suplentes.",
        meets: "Un albacea, un apoderado para asuntos financieros y un representante para atención médica, cada uno con un suplente.",
        exceeds: "Habló con las personas elegidas sobre su papel y sus deseos."
      },
      {
        name: "Preguntas para un abogado",
        objective: "O5",
        notYet: "Menos de cinco preguntas, o no hay dónde buscar ayuda legal.",
        meets: "Al menos cinco preguntas claras, incluido el costo, y un lugar cercano que ofrece ayuda legal.",
        exceeds: "Ya se comunicó con la ayuda legal o pidió una cita."
      },
      {
        name: "Dónde están mis documentos",
        objective: "O6",
        notYet: "No hay nota, o no dice dónde están los papeles clave.",
        meets: "Una nota de una página que dice dónde está cada papel importante.",
        exceeds: "La nota ya se entregó a las personas nombradas en el plan."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que actualizan al menos un formulario de beneficiarios dentro de 60 días (encuesta de seguimiento)",
      "Personas que se reúnen con un abogado o con la asistencia legal y firman un testamento, un poder notarial o una directiva de atención médica",
      "Personas que comparten con su familia una nota de \"dónde están mis documentos\""
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una carpeta o un archivador, papel y lápiz",
      "Las pólizas de seguro, los estados de cuenta y cualquier testamento o directiva que ya tenga cada persona (guardados en privado)",
      "Un teléfono o una computadora para buscar ayuda legal en LawHelp.org o llamar al Eldercare Locator",
      "Unos 60 minutos en total, en sesiones cortas y sin prisa, más tiempo en casa para juntar los papeles"
    ],
    facilitatorNotes: [
      "No des consejos legales ni ayudes a escribir un testamento; el curso prepara a las personas para ver a un abogado o a la asistencia legal.",
      "Cada persona guarda sus propios papeles en privado; nunca recojas números de cuenta ni documentos.",
      "Algunas personas pueden estar en duelo o sentirse incómodas al hablar de la muerte; mantén un tono suave y práctico.",
      "Antes de la sesión, busca la asistencia legal local o los servicios legales para personas mayores, para que cada persona se vaya con un contacto real.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
