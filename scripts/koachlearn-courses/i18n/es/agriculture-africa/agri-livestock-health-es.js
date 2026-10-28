"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-livestock-health.js). See scripts/koachlearn-courses/README.md, "Translations".

const WOAH_ND = { name: "Organización Mundial de Sanidad Animal (WOAH): enfermedad de Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO: La enfermedad de Newcastle en las gallinas de traspatio", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO: Buenas prácticas de bioseguridad en la producción avícola comercial a pequeña escala y de traspatio en Kenia", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO: Uso prudente y eficiente de los antimicrobianos en cerdos y aves (veterinarios, planes de salud, periodos de retiro)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Veterinary Council of Nigeria (registro de médicos veterinarios)", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health-es",
  lang: "es",
  translationOf: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Salud y manejo del ganado",
  skills: "Distinguir un animal sano de uno enfermo, Dar buen alimento y agua, Mantener los corrales limpios y seguros, Planear las vacunas con un veterinario, Proteger a las aves de la enfermedad de Newcastle, Controlar los parásitos y llevar registros de salud",
  outcome: "manejar un plan de salud sencillo para tus vacas, cabras o gallinas: revisar cada día a todos los animales por si hay señales de enfermedad, darles buen alimento y agua, mantener limpios los corrales, seguir un calendario de vacunas hecho con tu veterinario local, mantener fuera la enfermedad de Newcastle y los parásitos, registrar cada tratamiento y saber cuándo llamar al veterinario.",
  about: [
    "Este curso es para pequeños ganaderos y ganaderos en crecimiento, pastores, avicultores, trabajadores del campo y agricultores jóvenes en Kenia, Nigeria, Ghana y en toda África que crían vacas, cabras, ovejas o gallinas. Los animales sanos crecen más rápido, dan más leche y huevos, y valen más en el mercado; un solo brote de enfermedad puede acabar con años de ahorros.",
    "El capítulo 1 trata del cuidado de todos los días: distinguir un animal sano de uno enfermo, el alimento y el agua, y los corrales y la higiene. El capítulo 2 trata de la prevención y el tratamiento: los calendarios de vacunas con un veterinario, la bioseguridad de las aves y la enfermedad de Newcastle, y los parásitos, los registros y cuándo llamar al veterinario.",
    "Este curso no da dosis de medicamentos ni de vacunas. Las enfermedades, las vacunas y los medicamentos aprobados cambian según el país y la zona, así que sigue siempre a tu veterinario local o a tu técnico de sanidad animal y la etiqueta del producto. Cada lección dura unos cinco minutos y termina con una tarea con tus propios animales. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de salud de una página para tus animales (los tuyos, o un ejemplo como 3 vacas lecheras en Kiambu, 15 cabras en Kano o 200 gallinas ponedoras cerca de Kumasi): tu revisión diaria de salud, tu plan de alimento y agua incluida la temporada seca, dos reglas de corrales e higiene, el calendario de vacunas acordado con tu veterinario, tus reglas de bioseguridad (para aves: enfermedad de Newcastle), cómo vas a controlar las lombrices y las garrapatas, los registros que vas a llevar y las señales que significan que llamas de inmediato al veterinario, con su nombre y su número.",
  chapters: [
    {
      name: "Capítulo 1: El cuidado de todos los días",
      lessons: [
        {
          title: "Señales de un animal sano y de uno enfermo",
          minutes: 5,
          goal: "Hacer una revisión rápida de salud cada día y detectar un animal que puede estar enfermo.",
          text: [
            "Tú conoces mejor que nadie a tus animales. Una mirada diaria, a la hora de dar de comer o de ordeñar, detecta la enfermedad temprano, cuando tratarla es más barato y antes de que se contagie.",
            "Un animal sano está atento y curioso, se para y camina normal, come y bebe bien, y las vacas, las cabras y las ovejas rumian cuando descansan. Los ojos están brillantes y limpios, la nariz está limpia, el pelo o las plumas están lisos y brillantes, respira tranquilo, y el estiércol y la orina se ven normales. Una gallina sana está activa, tiene la cresta roja y brillante, y pone como siempre.",
            "Señales de alerta: se aparta del grupo, tiene la cabeza baja, no come o no rumia, tiene los ojos apagados o llorosos, le escurre la nariz, tose o respira rápido, tiene diarrea o sangre en el estiércol, cojea, tiene hinchazones o heridas, baja de golpe la leche o los huevos, tiene las plumas erizadas, las aves tuercen el cuello, o hay muertes repentinas. Separa al animal enfermo de los demás y llama a tu veterinario o a tu técnico de sanidad animal."
          ],
          steps: ["Revisa a todos los animales una vez al día, a la hora de dar de comer o de ordeñar.", "Mira: atento, se para y camina normal, come, rumia.", "Mira más de cerca: ojos, nariz, pelo o plumas, respiración, estiércol.", "Anota si baja la leche o los huevos.", "Separa a cualquier animal con señales de alerta.", "Escribe lo que viste y llama a tu veterinario o a tu técnico de sanidad animal."],
          words: [["Rumiar", "cuando las vacas, las cabras y las ovejas regresan la comida a la boca y la vuelven a masticar; es señal de buena salud."], ["Aislar", "mantener a un animal enfermo apartado de los demás."], ["Técnico de sanidad animal", "un trabajador capacitado, del gobierno o privado, que ayuda a los productores con la salud de sus animales."]],
          slides: [
            { title: "Sano", bullets: ["Atento, camina normal, come y bebe", "Rumia; ojos brillantes, nariz limpia", "Pelo o plumas lisos; estiércol normal"] },
            { title: "Señales de alerta", bullets: ["Solo, cabeza baja, no come", "Ojos o nariz que escurren, tos, diarrea", "Cojera, hinchazones, menos leche o huevos"] },
            { title: "Actúa temprano", bullets: ["Revisa a todos los animales cada día", "Separa a cualquier animal enfermo", "Llama a tu veterinario o técnico de sanidad animal"] }
          ],
          tryIt: "Mañana, a la hora de dar de comer, revisa a cada animal con la lista: atento, come, rumia, ojos, nariz, pelo, respiración, estiércol. Escribe una línea por animal (o por corral, si son aves). Marca los que vigilarías o por los que llamarías al veterinario.",
          youCanNow: "hacer una revisión de salud diaria y detectar las señales de un animal enfermo."
        },
        {
          title: "Alimento y agua",
          minutes: 5,
          goal: "Planear el alimento y el agua limpia de tus animales durante todo el año, incluida la temporada seca.",
          text: [
            "El agua va primero. Los animales necesitan agua limpia todos los días, y más cuando hace calor; una vaca en ordeña bebe mucho más que una vaca seca, y la leche baja rápido si no tiene suficiente agua. Mantén limpios los bebederos y bajo la sombra, y nunca dejes que las aves beban agua sucia y estancada.",
            "Las vacas, las cabras y las ovejas necesitan forraje voluminoso (pasto; forrajes como el pasto Napier, el pasto Rhodes, el desmodium o la alfalfa; y rastrojos como el rastrojo de maíz y la paja de frijol), más energía y proteína para los animales que están en ordeña, preñados o creciendo. Las cabras también ramonean arbustos y hojas de árboles. Da bloques de minerales o sal como te indique tu veterinario o tu extensionista. Las gallinas para huevo o para carne necesitan un alimento balanceado; las gallinas de traspatio buscan su comida, pero ponen y crecen mejor con algo de grano extra, hojas verdes y agua limpia.",
            "Planea la temporada seca: siembra forraje y guarda heno, ensilaje o rastrojo seco cuando hay de sobra. Nunca des alimento con moho: el moho puede traer aflatoxina, que daña a los animales y pasa a la leche y los huevos. Cambia de alimento poco a poco durante varios días para evitar problemas de estómago."
          ],
          steps: ["Da agua limpia todos los días; más con calor y a los animales en ordeña.", "Limpia los bebederos; tenlos en la sombra.", "Planea el forraje voluminoso: pasto, forraje sembrado y rastrojo.", "Agrega energía y proteína para los animales en ordeña, preñados y en crecimiento.", "Guarda heno, ensilaje o rastrojo para la temporada seca.", "Tira el alimento con moho; cambia de alimento poco a poco."],
          words: [["Forraje voluminoso", "alimento de mucho volumen como el pasto, el heno y el rastrojo."], ["Forraje", "cultivos que se siembran para alimentar a los animales, como el pasto Napier o la alfalfa."], ["Ensilaje", "forraje verde guardado sin aire para que se conserve por meses."], ["Bloque de minerales", "un bloque de sal y minerales que lamen los animales."]],
          slides: [
            { title: "El agua primero", bullets: ["Agua limpia todos los días", "Más con calor y para animales en ordeña", "Bebederos limpios, en la sombra"] },
            { title: "Alimento", bullets: ["Voluminoso: pasto, forraje, rastrojo", "Energía y proteína extra para ordeña y crecimiento", "Minerales como indique tu veterinario"] },
            { title: "Planea y protege", bullets: ["Guarda heno, ensilaje o rastrojo para la temporada seca", "Nunca des alimento con moho", "Cambia de alimento poco a poco"] }
          ],
          tryIt: "Haz la lista de los alimentos que reciben ahora tus animales y de dónde sale cada uno. Marca cuáles se acaban en la temporada seca y escribe una forma de guardar o sembrar más antes de esa fecha. Revisa hoy cada bebedero y limpia los que estén sucios.",
          youCanNow: "planear el alimento y el agua limpia de tus animales durante todo el año."
        },
        {
          title: "Corrales e higiene",
          minutes: 5,
          goal: "Revisar los corrales de tus animales y fijar tres reglas de higiene para tu finca.",
          text: [
            "Un buen corral mantiene a los animales secos, con sombra, a salvo de ladrones y depredadores, y sin amontonarse. Necesita aire fresco sin corrientes frías, un piso seco que drene y espacio suficiente para que cada animal se eche, coma y beba. Los corrales amontonados, húmedos y sucios contagian enfermedades, lombrices y problemas de patas.",
            "Mantenlo limpio: saca seguido el estiércol y la cama mojada (sirven para hacer buena composta), limpia comederos y bebederos, y controla las moscas, las ratas y los pájaros silvestres. Para las aves, usa una cama seca y cámbiala cuando se moje. Lávate las manos después de tocar a los animales, sobre todo a los enfermos.",
            "Que la enfermedad no entre ni salga: mantén a los animales nuevos apartados de tu hato o de tu parvada durante el tiempo que indique tu veterinario antes de juntarlos, y ten a los animales enfermos en un corral aparte. Algunas enfermedades de los animales también contagian a las personas, como la brucelosis y el ántrax. Si un animal muere de repente con sangre que le sale por la nariz o por otros orificios, no abras el cadáver; mantén lejos a las personas y a los animales, y llama de inmediato al veterinario. Deshazte de los animales muertos como te diga tu veterinario o tu técnico de sanidad animal."
          ],
          steps: ["Revisa el corral: seco, con sombra, ventilado, que drene, sin amontonar.", "Saca seguido el estiércol y la cama mojada.", "Limpia comederos y bebederos; controla moscas y ratas.", "Mantén apartados a los animales nuevos antes de juntarlos, como indique tu veterinario.", "Ten un corral aparte para los animales enfermos.", "Lávate las manos después de tocar a los animales; llama al veterinario si hay muertes repentinas."],
          words: [["Cama", "material seco, como viruta de madera, en el piso de un gallinero."], ["Cuarentena", "mantener apartados a los animales nuevos o enfermos para que no se contagie una enfermedad."], ["Zoonosis", "una enfermedad que puede pasar de los animales a las personas y al revés."], ["Cadáver", "el cuerpo de un animal muerto."]],
          slides: [
            { title: "Buen corral", bullets: ["Seco, con sombra, ventilado, sin corrientes", "Piso que drena", "Espacio para echarse, comer y beber; seguro contra ladrones"] },
            { title: "Mantenlo limpio", bullets: ["Saca seguido el estiércol y la cama mojada", "Limpia comederos y bebederos", "Controla moscas, ratas y pájaros silvestres"] },
            { title: "Que la enfermedad no entre", bullets: ["Animales nuevos apartados antes de juntarlos", "Corral aparte para animales enfermos", "Lávate las manos después de tocarlos"] },
            { title: "Muerte repentina", bullets: ["No abras el cadáver", "Mantén lejos a personas y animales", "Llama de inmediato al veterinario"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Recorre tu corral o gallinero con la lista: seco, con sombra, ventilado, que drene, sin amontonar, bebederos limpios. Escribe una cosa que vas a arreglar esta semana y tres reglas de higiene para todos los que trabajan con tus animales.",
          youCanNow: "revisar los corrales y mantenerlos limpios, mantener apartados a los animales enfermos y nuevos, y actuar con seguridad ante una muerte repentina."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El cuidado de todos los días",
        questions: [
          { q: "¿Cuál es una señal de una vaca o una cabra sana?", options: ["Está sola con la cabeza baja", "Rumia mientras descansa", "Le escurren los ojos y la nariz", "No bebe"], answer: 1, why: "Rumiar muestra que el estómago funciona normal." },
          { q: "Una cabra no come y se aparta del rebaño. ¿Qué haces primero?", options: ["Esperas una semana", "La vendes de inmediato", "La separas y llamas a tu veterinario o a tu técnico de sanidad animal", "Le das cualquier medicina de la tienda"], answer: 2, why: "Aislarla protege al rebaño, y el veterinario puede encontrar la causa." },
          { q: "Tu salvado de maíz se enmoheció. ¿Qué debes hacer?", options: ["Tirarlo; no dárselo a los animales", "Dárselo a las gallinas", "Mezclarlo con alimento bueno", "Dárselo solo a las vacas en ordeña"], answer: 0, why: "El moho puede traer aflatoxina, que daña a los animales y pasa a la leche y los huevos." },
          { q: "¿Cómo debes prepararte para la temporada seca?", options: ["Vender todos los bebederos", "Dar heno con moho", "Dejar de dar agua", "Sembrar forraje y guardar heno, ensilaje o rastrojo"], answer: 3, why: "El alimento guardado ayuda a los animales a pasar la temporada seca." },
          { q: "Una vaca muere de repente con sangre que le sale de la nariz. ¿Qué haces?", options: ["La abres para ver la causa", "No la abres; mantienes lejos a la gente y llamas de inmediato al veterinario", "Vendes la carne rápido", "Se la dejas a los perros"], answer: 1, why: "La muerte repentina con sangrado puede ser ántrax, que puede contagiar a las personas; el cadáver no se debe abrir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Prevenir y tratar las enfermedades",
      lessons: [
        {
          title: "Calendarios de vacunas con tu veterinario local",
          minutes: 5,
          goal: "Acordar por escrito un calendario de vacunas con un veterinario registrado y mantener las vacunas en buen estado.",
          text: [
            "Las vacunas previenen muchas enfermedades graves del ganado y cuestan mucho menos que el tratamiento. Qué vacunas necesitan tus animales, y cuándo, depende de tu país, de tu zona y de qué enfermedades hay ahí. Ejemplos comunes son la fiebre aftosa, la dermatosis nodular contagiosa, el ántrax y el carbón sintomático en las vacas; la peste de los pequeños rumiantes (PPR) en las cabras y las ovejas; y la enfermedad de Newcastle, la enfermedad de Gumboro y la viruela aviar en las aves. Solo un veterinario o un técnico de sanidad animal que conozca tu zona puede darte el calendario correcto.",
            "Pide a tu veterinario que te escriba un calendario del año: cada vacuna, para qué animales, a qué edad y cuándo repetirla. Acude a un médico veterinario registrado o a un trabajador de sanidad animal capacitado. En Nigeria, el Veterinary Council of Nigeria (consejo veterinario) lleva el registro de médicos veterinarios; en Kenia, la Kenya Veterinary Board (junta veterinaria) registra a los veterinarios y a los paraveterinarios; en Ghana, la Veterinary Services Directorate (dirección de servicios veterinarios) del Ministerio de Alimentación y Agricultura maneja los servicios de sanidad animal y las campañas de vacunación. Las campañas del gobierno a veces son gratis o de bajo costo, así que pon atención a los anuncios.",
            "Las vacunas son productos vivos o delicados. Cómpralas solo en agroveterinarias con licencia, revisa la fecha de caducidad, mantenlas frías (en una hielera o en el refrigerador, lejos del sol) desde la tienda hasta el animal, y úsalas como digan la etiqueta y el veterinario. Una vacuna que se calentó puede no proteger a tus animales."
          ],
          steps: ["Pregunta a un veterinario registrado o a un técnico de sanidad animal qué enfermedades son un riesgo en tu zona.", "Pide un calendario del año por escrito: vacuna, animales, edad, fechas para repetir.", "Compra las vacunas solo en agroveterinarias con licencia; revisa la fecha de caducidad.", "Mantén las vacunas frías desde la tienda hasta el animal.", "Úsalas tal como digan la etiqueta y el veterinario.", "Registra cada vacunación: fecha, animales, vacuna, lote, quién la puso."],
          words: [["Vacuna", "un producto que enseña al cuerpo del animal a combatir una enfermedad antes de que se enferme."], ["Calendario de vacunas", "un calendario de qué vacunas poner, a qué animales y cuándo."], ["Cadena de frío", "mantener frías las vacunas todo el camino, desde el fabricante hasta el animal."], ["PPR", "peste de los pequeños rumiantes, una enfermedad viral mortal de las cabras y las ovejas."]],
          slides: [
            { title: "Por qué vacunar", bullets: ["Prevenir es mucho más barato que tratar", "Las vacunas dependen de tu zona", "Solo un veterinario local puede fijar el calendario"] },
            { title: "Ejemplos comunes", bullets: ["Vacas: fiebre aftosa, dermatosis nodular, ántrax, carbón sintomático", "Cabras y ovejas: PPR", "Aves: Newcastle, Gumboro, viruela aviar"] },
            { title: "Busca ayuda registrada", bullets: ["Nigeria: Veterinary Council of Nigeria", "Kenia: Kenya Veterinary Board", "Ghana: Veterinary Services Directorate (MoFA)"] },
            { title: "Que las vacunas sirvan", bullets: ["Agroveterinarias con licencia; revisa la caducidad", "Frías desde la tienda hasta el animal", "Sigue la etiqueta y al veterinario"] }
          ],
          sources: [VCN],
          tryIt: "Llama o visita a tu veterinario local o a tu técnico de sanidad animal y pregúntale: ¿contra qué enfermedades debo vacunar aquí a mis animales, y cuándo? Escribe su respuesta como un calendario de 12 meses y guarda en tu teléfono el número del veterinario.",
          youCanNow: "conseguir un calendario de vacunas con un veterinario registrado y mantener las vacunas frías y eficaces."
        },
        {
          title: "Bioseguridad de las aves y enfermedad de Newcastle",
          minutes: 5,
          goal: "Fijar reglas de bioseguridad que mantengan fuera de tu parvada la enfermedad de Newcastle y otras infecciones.",
          text: [
            "La enfermedad de Newcastle es una de las enfermedades más graves de las aves en África. La Organización Mundial de Sanidad Animal (WOAH) describe señales como boquear, toser y estornudar; señales nerviosas como temblores, parálisis y cuello torcido; diarrea; y una baja en la postura. Las muertes pueden llegar al 100 por ciento de una parvada, y casi todas las aves de una parvada se pueden infectar en pocos días.",
            "La WOAH explica que se contagia por contacto con aves enfermas y su excremento, y por medio de alimento, agua, equipo y ropa contaminados. Por eso la bioseguridad, los pasos sencillos de todos los días que mantienen fuera los gérmenes, importa tanto como la vacunación. La guía de la FAO para parvadas pequeñas en Kenia insiste en que muchos de estos pasos cuestan poco o nada.",
            "Vacuna a toda la parvada contra la enfermedad de Newcastle según el calendario que te dé tu veterinario. Para las gallinas de traspatio, la FAO describe vacunas que aguantan el calor (como la I-2) y que se pueden poner con gotas en el ojo; pregunta a tu técnico de sanidad animal cuáles hay. Si muchas aves se enferman o mueren de repente, mantén encerrada la parvada, avisa de inmediato al veterinario o al técnico de sanidad animal, y no vendas ni muevas aves. La WOAH aconseja dejar un gallinero limpio sin aves durante 21 días antes de volver a poblarlo después de un brote."
          ],
          steps: ["No dejes entrar visitas al gallinero; lávate las manos y usa un tapete sanitario o zapatos aparte.", "Compra aves solo de fuentes sanas y de confianza; mantén apartadas primero las aves nuevas.", "Mantén los pájaros silvestres, las ratas y las aves de otras personas lejos del alimento y el agua.", "Limpia y desinfecta seguido los bebederos, los comederos y las cajas.", "Vacuna a toda la parvada según el calendario del veterinario.", "Si las aves se enferman o mueren de repente: encierra la parvada, llama al veterinario, no vendas ni muevas aves."],
          words: [["Bioseguridad", "pasos sencillos de todos los días que mantienen los gérmenes fuera de una finca y evitan que se contagien."], ["Enfermedad de Newcastle", "una enfermedad viral de las aves que se contagia rápido y puede matar a toda una parvada."], ["Tapete sanitario", "una charola con desinfectante que las personas pisan antes de entrar a un corral o gallinero."], ["Vacuna termoestable", "una vacuna que aguanta mejor el calor, útil en las comunidades rurales; aun así hay que mantenerla lo más fría posible."]],
          slides: [
            { title: "Enfermedad de Newcastle (WOAH)", bullets: ["Boquean, tosen, cuello torcido, diarrea", "Baja la postura; muertes de hasta el 100 por ciento", "Toda la parvada infectada en días"] },
            { title: "Cómo se contagia", bullets: ["Aves enfermas y su excremento", "Alimento, agua, equipo y ropa contaminados", "La bioseguridad lo frena; casi toda es gratis"] },
            { title: "Reglas de bioseguridad", bullets: ["Pocas visitas; lavarse las manos; tapete sanitario", "Aves nuevas apartadas primero", "Lejos pájaros silvestres y ratas; bebederos limpios"] },
            { title: "Vacuna y actúa rápido", bullets: ["Toda la parvada, según el calendario del veterinario", "Gallinas de traspatio: pregunta por vacunas en gotas para el ojo", "Muertes repentinas: encierra, llama al veterinario, no vendas"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Escribe cinco reglas de bioseguridad para tus aves y pégalas en la puerta del gallinero. Luego pregunta a tu veterinario o a tu técnico de sanidad animal cuándo toca vacunar otra vez a tu parvada contra la enfermedad de Newcastle y agrégalo a tu calendario.",
          youCanNow: "proteger una parvada de la enfermedad de Newcastle con bioseguridad y vacunación, y actuar rápido si mueren aves."
        },
        {
          title: "Parásitos, registros y cuándo llamar al veterinario",
          minutes: 6,
          goal: "Planear el control de parásitos con tu veterinario, llevar un registro de tratamientos y conocer las señales que necesitan un veterinario de inmediato.",
          text: [
            "Las lombrices dentro del intestino y las garrapatas, los ácaros y las pulgas por fuera chupan sangre, frenan el crecimiento y contagian enfermedades; en el este de África, las garrapatas transmiten la fiebre de la Costa Este a las vacas. Las señales de lombrices incluyen poco crecimiento, pelo áspero, panza abultada, diarrea y párpados o encías pálidos. Reduce los parásitos con corrales limpios y secos, moviendo a los animales que pastorean a potreros frescos y sin amontonarlos. Tu veterinario te puede decir cuándo desparasitar, bañar o fumigar, y con qué producto. Usa siempre la dosis de la etiqueta o la que te dé el veterinario: si das muy poco, las lombrices y las garrapatas se vuelven resistentes, y si das demasiado, puedes dañar al animal.",
            "Los medicamentos dejan residuos. Cada medicamento tiene un periodo de retiro: el tiempo después del tratamiento antes de que se pueda vender o consumir la leche, los huevos o la carne de ese animal. La FAO insiste en trabajar con tu veterinario en un plan de salud y en registrar cada tratamiento con su periodo de retiro. Nunca uses antibióticos para que los animales crezcan más rápido ni sin el consejo de un veterinario.",
            "Los registros cambian las adivinanzas por certezas. Para cada animal o parvada, escribe: identificación, nacimientos, vacunas, tratamientos (fecha, producto, quién lo puso, cuándo termina el periodo de retiro), pesos o producción, y muertes. Sirve un cuaderno, y también una hoja de cálculo en el teléfono. Llama de inmediato al veterinario si hay: muertes repentinas, varios animales enfermos al mismo tiempo, un animal que no come por más de un día, un parto difícil, un sangrado fuerte, señales nerviosas o cualquier enfermedad que tu gobierno diga que se debe reportar."
          ],
          steps: ["Pide a tu veterinario un plan contra parásitos: cuándo desparasitar y bañar o fumigar, y con qué.", "Usa la dosis de la etiqueta o la del veterinario, nunca a ojo.", "Mueve a los animales que pastorean a potreros frescos; mantén secos los corrales.", "Registra cada tratamiento con la fecha en que termina el periodo de retiro.", "No vendas leche, huevos ni carne antes de que termine el periodo de retiro.", "Llama de inmediato al veterinario si hay muertes repentinas, varios enfermos, un parto difícil o señales nerviosas."],
          words: [["Parásito", "una lombriz, garrapata, ácaro o pulga que vive en un animal o dentro de él y le hace daño."], ["Desparasitar", "dar un medicamento para matar las lombrices dentro de un animal."], ["Periodo de retiro", "el tiempo después de un tratamiento antes de que se pueda vender o consumir la leche, los huevos o la carne."], ["Resistencia", "cuando las lombrices, las garrapatas o los gérmenes sobreviven a un medicamento que antes los mataba."]],
          slides: [
            { title: "Parásitos", bullets: ["Lombrices: poco crecimiento, panza abultada, párpados pálidos", "Garrapatas contagian enfermedades, p. ej. fiebre de la Costa Este", "Corrales limpios, potreros frescos, sin amontonar"] },
            { title: "Trata de la forma correcta", bullets: ["Plan del veterinario para desparasitar y bañar", "Dosis de la etiqueta o del veterinario; nunca a ojo", "Las dosis equivocadas crean resistencia"] },
            { title: "Periodos de retiro", bullets: ["Tiempo antes de vender leche, huevos o carne", "Anota la fecha final de cada tratamiento", "Nada de antibióticos sin consejo del veterinario"] },
            { title: "Llama de inmediato al veterinario", bullets: ["Muertes repentinas; varios enfermos a la vez", "No come por más de un día; parto difícil", "Sangrado, señales nerviosas, enfermedades que se reportan"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Tarea final: escribe tu plan de salud de una página. Incluye tu revisión diaria, tu plan de alimento y agua, las reglas del corral, el calendario de vacunas de tu veterinario, las reglas de bioseguridad, el plan contra parásitos, los registros que vas a llevar y las señales que significan que llamas al veterinario, con su nombre y su número arriba.",
          youCanNow: "controlar los parásitos con tu veterinario, llevar registros de tratamientos con sus periodos de retiro y saber cuándo llamar al veterinario."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Prevenir y tratar las enfermedades",
        questions: [
          { q: "¿Quién debe fijar el calendario de vacunas de tus animales?", options: ["Un vecino de otro país", "El cartel de la tienda de alimento", "Un veterinario registrado o un técnico de sanidad animal que conozca tu zona", "Cualquiera en internet"], answer: 2, why: "Qué vacunas se necesitan, y cuándo, depende de las enfermedades que hay en tu zona." },
          { q: "Compras una vacuna y viajas tres horas al sol hasta tu casa. ¿Cuál es el riesgo?", options: ["El calor puede dañar la vacuna y que no proteja a tus animales", "Se vuelve más fuerte", "No hay ningún riesgo", "Se convierte en desparasitante"], answer: 0, why: "Las vacunas se deben mantener frías desde la tienda hasta el animal." },
          { q: "¿Cuál es una señal de la enfermedad de Newcastle en las gallinas?", options: ["Crestas más brillantes", "Más huevos", "Crecimiento más rápido", "Cuello torcido, boquear y muertes repentinas"], answer: 3, why: "La WOAH menciona señales respiratorias y nerviosas, baja en la postura y muchas muertes." },
          { q: "Muchas de tus aves mueren de repente. ¿Qué debes hacer?", options: ["Vender rápido las demás en el mercado", "Encerrar la parvada, llamar al veterinario y no mover ni vender aves", "Regalar las aves muertas a los vecinos", "Comprar aves nuevas ese mismo día"], answer: 1, why: "Mover o vender aves contagia la enfermedad; el veterinario tiene que encontrar la causa." },
          { q: "¿Qué es un periodo de retiro?", options: ["El tiempo antes de que se pueda vender o consumir la leche, los huevos o la carne de un animal tratado", "Unas vacaciones para los productores", "El tiempo que dura una vacuna", "El tiempo para secar el grano"], answer: 0, why: "Mantiene los residuos de medicamentos fuera de los alimentos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Salud y manejo del ganado",
    questions: [
      { q: "¿Cuándo es un buen momento para la revisión diaria de salud?", options: ["Una vez al mes", "Solo cuando muere un animal", "A la hora de dar de comer o de ordeñar", "Nunca; los animales se cuidan solos"], answer: 2, why: "A la hora de dar de comer o de ordeñar, los animales están juntos y activos." },
      { q: "Una gallina sana normalmente tiene:", options: ["La cresta pálida y encogida", "Las plumas erizadas", "El cuello torcido", "La cresta roja y brillante, y está activa"], answer: 3, why: "La cresta brillante y la actividad son señales de buena salud." },
      { q: "¿Cuál es una señal de alerta en una vaca lechera?", options: ["Una baja repentina de la leche", "Que rumie", "Ojos brillantes", "Que coma bien"], answer: 0, why: "Una baja repentina de la leche muchas veces quiere decir enfermedad." },
      { q: "¿Qué va primero al alimentar a los animales?", options: ["Suplementos caros", "Agua limpia todos los días", "Solo bloques de minerales", "Heno con moho"], answer: 1, why: "Sin suficiente agua limpia, la salud y la producción bajan rápido." },
      { q: "El pasto Napier y la alfalfa son ejemplos de:", options: ["Vacunas", "Desparasitantes", "Forraje", "Cama"], answer: 2, why: "Son cultivos de forraje que se siembran para alimentar a los animales." },
      { q: "¿Por qué cambiar el alimento de los animales poco a poco durante varios días?", options: ["Para evitar problemas de estómago", "Porque el alimento nuevo siempre es malo", "Para ahorrar agua", "No importa"], answer: 0, why: "Los cambios bruscos de alimento alteran la digestión." },
      { q: "Un buen corral es:", options: ["Amontonado y caliente", "Húmedo y oscuro", "Seco, con sombra, ventilado y sin amontonar", "Abierto a los ladrones"], answer: 2, why: "Un corral seco, ventilado y sin amontonar reduce las enfermedades." },
      { q: "Compras tres cabras nuevas. ¿Qué debes hacer antes de juntarlas con tu rebaño?", options: ["Juntarlas de inmediato", "Mantenerlas apartadas durante el tiempo que indique tu veterinario", "Vender tus cabras viejas", "Darles antibióticos por si acaso"], answer: 1, why: "Mantener apartados a los animales nuevos evita que traigan enfermedades." },
      { q: "Una zoonosis es:", options: ["Un tipo de forraje", "Una vacuna", "Una enfermedad que puede pasar de los animales a las personas y al revés", "Un gallinero"], answer: 2, why: "La brucelosis y el ántrax son ejemplos." },
      { q: "La PPR es una enfermedad grave de:", options: ["Las cabras y las ovejas", "Las gallinas", "El maíz", "Los peces"], answer: 0, why: "La peste de los pequeños rumiantes afecta a las cabras y las ovejas." },
      { q: "En Nigeria, ¿qué organismo lleva el registro de médicos veterinarios?", options: ["La Agencia Meteorológica de Nigeria", "El Veterinary Council of Nigeria", "El Banco Central", "Una empresa de alimento"], answer: 1, why: "El VCN registra a los médicos veterinarios." },
      { q: "¿Dónde debes comprar las vacunas?", options: ["Con cualquiera a la orilla del camino", "En internet, con vendedores desconocidos", "Del refrigerador viejo de un vecino", "En una agroveterinaria con licencia, revisando la fecha de caducidad"], answer: 3, why: "Es más probable que funcionen las vacunas de vendedores con licencia y que no estén caducadas." },
      { q: "Según la WOAH, la enfermedad de Newcastle se contagia por:", options: ["Solo la luz del sol", "El agua limpia", "Solo las aves vacunadas", "Las aves enfermas, el excremento, y el alimento, el agua, el equipo y la ropa contaminados"], answer: 3, why: "El contacto directo y los objetos contaminados contagian el virus." },
      { q: "¿Cuál es un paso de bioseguridad de bajo costo?", options: ["Dejar que las visitas caminen por el gallinero", "Compartir cajas con otras fincas sin limpiarlas", "Lavarse las manos y usar un tapete sanitario antes de entrar", "Dejar que los pájaros silvestres coman del comedero"], answer: 2, why: "La higiene sencilla mantiene fuera los gérmenes." },
      { q: "Para las gallinas de traspatio, la FAO describe vacunas contra Newcastle que:", options: ["Se mezclan en el concreto", "Son solo para vacas", "Nunca hacen falta", "Se ponen con gotas en el ojo y aguantan mejor el calor"], answer: 3, why: "Las vacunas termoestables como la I-2 sirven para las parvadas de traspatio." },
      { q: "Después de un brote de Newcastle, la WOAH aconseja dejar el gallinero limpio sin aves durante:", options: ["1 día", "21 días", "2 horas", "Se puede volver a poblar de inmediato"], answer: 1, why: "La WOAH indica 21 días vacío antes de volver a poblarlo." },
      { q: "¿Cuál es una señal de lombrices en las cabras?", options: ["Crecimiento rápido y pelo brillante", "Párpados rojos y brillantes", "Comer más de lo normal y subir de peso", "Poco crecimiento, panza abultada y párpados pálidos"], answer: 3, why: "Las lombrices les quitan sangre y nutrientes, y causan estas señales." },
      { q: "¿Cómo decides la dosis de un desparasitante?", options: ["A ojo", "Usas la mitad para ahorrar", "Sigues la etiqueta o a tu veterinario", "Usas el doble para estar seguro"], answer: 2, why: "Las dosis equivocadas dañan a los animales o crean resistencia." },
      { q: "Una vaca recibió un tratamiento ayer y el periodo de retiro no ha terminado. ¿Qué pasa con su leche?", options: ["La vendes como siempre", "No la vendas ni la tomes hasta que termine el periodo de retiro", "La mezclas con otra leche", "La hierves y la vendes"], answer: 1, why: "La leche durante el periodo de retiro puede traer residuos de medicamentos." },
      { q: "¿Qué situación quiere decir que debes llamar de inmediato al veterinario?", options: ["Varios animales enfermos al mismo tiempo", "Un animal que rumia", "Gallinas que ponen como siempre", "Un becerro que bebe bien"], answer: 0, why: "Varios animales enfermos pueden indicar una enfermedad que se está contagiando." }
    ]
  }
};
