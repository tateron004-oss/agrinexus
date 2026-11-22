"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-housing-jobs.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-housing-jobs-es",
  lang: "es",
  translationOf: "reentry-housing-jobs",
  category: "Re-Entry",
  name: "Encontrar vivienda y empleos de segunda oportunidad",
  skills: "Buscar ayuda de vivienda con el 211, Solicitar vivienda con antecedentes, Armar un paquete para rentar, Usar los American Job Centers, Encontrar empleadores de segunda oportunidad, Explicarle a un empleador el WOTC y la fianza federal",
  outcome: "encontrar vivienda que puedes solicitar con antecedentes, armar un paquete para rentar, encontrar empleadores de segunda oportunidad y ayuda para buscar trabajo cerca de ti, y contarle a un empleador los incentivos para contratar que vienen contigo.",
  about: [
    "Un lugar seguro donde vivir y un trabajo estable son las dos cosas que más ayudan después de salir. Las dos pueden parecer difíciles de alcanzar cuando tienes antecedentes, pero hay programas, reglas y empleadores pensados para ayudarte.",
    "En este curso vas a usar el 211 para encontrar ayuda de vivienda en tu zona, aprender las reglas de la vivienda pública sobre antecedentes, armar un paquete para rentar que responda a las preocupaciones de un arrendador, encontrar un American Job Center, buscar empleadores de segunda oportunidad y aprender cómo el Work Opportunity Tax Credit y el Federal Bonding Program pueden hacer que un empleador tenga más ganas de contratarte.",
    "Las reglas cambian y son distintas en cada estado y ciudad. Cada lección te muestra dónde revisar las reglas actuales. Para preguntas legales, consulta a una oficina de asistencia legal o a un consejero de reinserción.",
    "Cada lección dura unos cinco minutos y termina con una tarea que haces enseguida. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un plan de vivienda y empleo de una página: dos opciones de vivienda con sus datos de contacto y qué llevar, la lista de tu paquete para rentar, tu American Job Center más cercano, tres empleadores de segunda oportunidad o pistas de trabajo, y una presentación de dos oraciones para contarle a un empleador sobre el Work Opportunity Tax Credit y el Federal Bonding Program.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas adultas que regresan a casa después de estar en prisión (reinserción) y necesitan un lugar seguro donde vivir y un trabajo estable, muchas veces con antecedentes que hacen más difícil conseguir las dos cosas. Algunas están en libertad condicional o probatoria.",
    startingPoint: "Saben hacer llamadas y usar un teléfono básico. La mayoría no conoce el 211, las reglas sobre antecedentes en la vivienda pública, los paquetes para rentar, los American Job Centers, el Work Opportunity Tax Credit ni el Federal Bonding Program.",
    gap: "La vivienda y el trabajo son las dos cosas que más ayudan después de salir, pero muchas personas se rinden tras los primeros rechazos o caen en estafas de renta. Necesitan encontrar los programas, las reglas y los empleadores que existen para ayudar, y presentarse con confianza y honestidad.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Dispositivos: un teléfono básico o inteligente y, a veces, una computadora de la biblioteca",
      "Tiempo: lecciones de unos 5 minutos que caben entre citas y trabajo",
      "Las reglas cambian según el estado, la ciudad y el tiempo; las preguntas legales se hacen a la asistencia legal o a un consejero de reinserción",
      "Las condiciones de libertad condicional o probatoria pueden limitar dónde vivir; privacidad: ningún número de caso en herramientas de IA"
    ],
    prerequisites: "Ninguno. \"Herramientas de IA para el día a día\" ayuda a quienes quieren usar mapas y recordatorios para llegar a sus citas."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando el 211 y los programas de reinserción", action: "hacer una lista de opciones de vivienda que puedes solicitar", standard: "con número de teléfono, costo, reglas y qué llevar para cada una" },
    { id: "O2", condition: "Con un proveedor de vivienda y las reglas sobre antecedentes", action: "explicar qué dicen las reglas sobre los antecedentes y pedir que revisen tu solicitud de forma justa", standard: "preguntando si hay una política por escrito y si puedes dar pruebas de rehabilitación" },
    { id: "O3", condition: "Con los papeles que tienes", action: "armar un paquete para rentar y detectar estafas de renta", standard: "con una lista de papeles y una carta corta sobre lo que has hecho desde entonces, y sin pagar nada antes de ver el lugar" },
    { id: "O4", condition: "Usando CareerOneStop o el 211", action: "encontrar tu American Job Center más cercano y opciones de trabajo de segunda oportunidad", standard: "con dirección, teléfono, horario y preguntas para tu primera visita" },
    { id: "O5", condition: "Con el Work Opportunity Tax Credit y el Federal Bonding Program", action: "explicarle a un empleador cómo estos programas le ayudan a contratarte", standard: "en una presentación de dos oraciones, revisando en irs.gov si el WOTC está vigente" },
    { id: "O6", condition: "Ante una pregunta sobre tus antecedentes en una entrevista", action: "responder de forma breve y honesta", standard: "diciendo qué pasó, lo que has hecho desde entonces y por qué estás listo, sin escribir números de caso en la IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar un lugar donde vivir",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tus opciones de vivienda y por dónde empezar",
          minutes: 5,
          goal: "Usar el 211 y los programas de reinserción para hacer una lista de tres opciones de vivienda que puedes solicitar.",
          text: [
            "La mayoría de las personas que regresan a la comunidad pasan por más de un tipo de vivienda: quedarse con la familia, un albergue, una vivienda de transición o de reinserción, una casa de vida sobria, rentar un cuarto y, más adelante, un apartamento propio. Cada paso está bien. La meta es un lugar seguro ahora y un lugar mejor después.",
            "El 211 es el lugar más fácil para empezar. Puedes llamar al 211 o entrar a 211.org para hablar con alguien de tu zona que te conecta con vivienda, comida, ayuda para pagar servicios, atención médica y más. Las llamadas son confidenciales. Diles que vienes saliendo de la prisión o de la cárcel y pregunta por vivienda de reinserción.",
            "La vivienda pública y los Housing Choice Vouchers (vales de vivienda, muchas veces llamados Section 8) los maneja tu Public Housing Agency (PHA, agencia local de vivienda pública). Las listas de espera pueden ser largas o estar cerradas, así que anótate pronto y mantén tus datos de contacto al día.",
            "Si estás en libertad condicional (parole o probation), puede que tu oficial tenga que aprobar dónde vives. Pregunta antes de firmar cualquier cosa."
          ],
          steps: ["Llama al 211 o entra a 211.org y pregunta por vivienda de reinserción y de transición.", "Pídele listas de vivienda a un programa de reinserción o a tu oficial de libertad condicional o de libertad a prueba.", "Busca tu Public Housing Agency local y pregunta cómo anotarte en sus listas de espera.", "Anota tres opciones: nombre, teléfono, costo, reglas y qué llevar.", "Confirma con tu oficial que la dirección está permitida."],
          words: [["211", "un servicio gratis y confidencial, por teléfono y por internet, que te conecta con ayuda en tu zona."], ["Vivienda de transición", "vivienda por poco tiempo con apoyo, muchas veces para personas que regresan a la comunidad."], ["Public Housing Agency (PHA)", "la oficina local que maneja la vivienda pública y los vales de vivienda."], ["Housing Choice Voucher", "ayuda para pagar la renta a un arrendador privado, muchas veces llamada Section 8."]],
          slides: [
            { title: "La vivienda es una escalera", bullets: ["Familia, albergue, reinserción o vida sobria", "Un cuarto y después un apartamento", "Seguro ahora, mejor después"] },
            { title: "Empieza con el 211", bullets: ["Llama al 211 o entra a 211.org", "Ayuda local y confidencial", "Pregunta por vivienda de reinserción"] },
            { title: "Vivienda pública y vales", bullets: ["Los maneja tu Public Housing Agency local", "Las listas de espera pueden ser largas: anótate pronto", "Mantén tus datos de contacto al día"] },
            { title: "¿Estás en libertad condicional?", bullets: ["Puede que tu oficial tenga que aprobar la dirección", "Pregunta antes de firmar"] }
          ],
          sources: [
            { name: "211: Encuentra ayuda local", url: "https://www.211.org/" },
            { name: "HUD: Programa de vivienda pública", url: "https://www.hud.gov/topics/rental_assistance/phprog" }
          ],
          tryIt: "Llama al 211 o entra a 211.org y pide vivienda de reinserción o de transición cerca de ti. Anota tres opciones con el teléfono, el costo, las reglas y lo que cada una te pide llevar.",
          youCanNow: "usar el 211 y tu Public Housing Agency local para encontrar opciones de vivienda y anotar lo que pide cada una.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la vivienda de transición?", options: ["Un hotel que pagas por noche", "Vivienda por un tiempo corto con apoyo, muchas veces para personas que regresan a casa", "Una casa que compras", "Un albergue que solo abre en invierno"], answer: 1, why: "La vivienda de transición es vivienda por un tiempo corto con apoyo mientras te estableces." },
            { objective: "O1", q: "Estás en libertad condicional y un amigo te ofrece un cuarto. ¿Qué harías antes de mudarte?", options: ["Mudarte esta misma noche", "Firmar un contrato de renta de inmediato", "Confirmar que tu oficial aprueba la dirección", "No decirle a nadie"], answer: 2, why: "Las condiciones de la libertad condicional pueden limitar dónde vivir, así que primero lo confirmas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Solicitar vivienda con antecedentes",
          minutes: 6,
          goal: "Explicar qué dicen las reglas de vivienda sobre los antecedentes y cómo pedir que revisen tu solicitud de forma justa.",
          text: [
            "Las reglas federales obligan a las agencias de vivienda pública a rechazar a unos pocos grupos: a quien tenga que registrarse de por vida como agresor sexual; a quien haya sido condenado alguna vez por fabricar metanfetamina en una vivienda con ayuda federal; y, por tres años, a un hogar desalojado de una vivienda con ayuda federal por actividad de drogas, a menos que la persona haya terminado un programa de rehabilitación aprobado o la situación haya cambiado. También pueden rechazar a quien use drogas ilegales en este momento.",
            "Para la mayoría de los demás antecedentes, la agencia de vivienda decide con su propia política escrita. Antes de rechazarte por tus antecedentes penales, tiene que avisarte, darte una copia de los antecedentes y darte la oportunidad de reclamar. No te puede cobrar por revisar tus antecedentes. Pide su política y pide una revisión si te rechazan.",
            "Los arrendadores privados normalmente pueden mirar los antecedentes penales. Tener antecedentes no es una clase protegida según la Fair Housing Act (ley federal de vivienda justa), y el HUD (Departamento de Vivienda y Desarrollo Urbano) dijo que va a dejar de usar una guía federal anterior que limitaba las revisiones de antecedentes. Las leyes de tu estado y de tu ciudad pueden protegerte más. En California, los arrendadores no pueden usar arrestos que no terminaron en condena, antecedentes sellados o borrados ni antecedentes de menores; no pueden rechazar a todos los que tienen antecedentes, y tienen que mostrar que una condena tiene relación directa con ser un buen inquilino.",
            "Si crees que un arrendador en California violó estas reglas, puedes contactar al California Civil Rights Department (Departamento de Derechos Civiles de California), en general dentro de un año. En otros estados, pregunta a una oficina de asistencia legal o a la oficina de derechos civiles de tu estado."
          ],
          steps: ["Pídele a cada lugar de vivienda su política escrita sobre antecedentes penales.", "Lee primero tus propios antecedentes para que nada te tome por sorpresa.", "Lleva pruebas de rehabilitación con tu solicitud.", "Si te rechazan, pide por escrito el motivo, una copia de los antecedentes que usaron y una revisión.", "Si crees que violaron la ley, contacta a asistencia legal o a la oficina de derechos civiles de tu estado."],
          words: [["Fair Housing Act", "la ley federal contra la discriminación en la vivienda por raza, color, origen nacional, religión, sexo, situación familiar o discapacidad."], ["Clase protegida", "un grupo que la ley protege contra la discriminación."], ["Vivienda con ayuda federal", "vivienda pagada en parte por programas federales, como la vivienda pública."], ["Revisión informal", "una reunión para pedirle a una agencia de vivienda que vuelva a mirar un rechazo."]],
          slides: [
            { title: "Vivienda pública: rechazos obligatorios", bullets: ["Registro de por vida como agresor sexual", "Fabricar metanfetamina en vivienda con ayuda federal", "Desalojo por drogas: 3 años, con excepciones"] },
            { title: "La mayoría de los demás antecedentes: decide la PHA", bullets: ["Pide la política escrita", "Tienen que mostrarte los antecedentes y dejarte reclamar", "Pide una revisión si te rechazan"] },
            { title: "Arrendadores privados", bullets: ["Normalmente pueden revisar antecedentes", "La guía federal cambió: revisa hud.gov", "Las leyes de tu estado y ciudad pueden protegerte más"] },
            { title: "Protecciones en California", bullets: ["No: arrestos sin condena, antecedentes sellados ni de menores", "No pueden rechazar a todos los que tienen antecedentes", "Quejas: California Civil Rights Department"] }
          ],
          sources: [
            { name: "24 CFR 960.204: Rechazo de admisión por actividad delictiva o abuso de drogas (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/24/960.204" },
            { name: "HUD: Resumen de la Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
            { name: "California Civil Rights Department: Vivienda", url: "https://calcivilrights.ca.gov/housing/" }
          ],
          tryIt: "Llama o entra al sitio web de un lugar de vivienda de tu lista y pregunta: ¿Tienen una política escrita sobre antecedentes penales? ¿Puedo darles pruebas de rehabilitación con mi solicitud? Anota las respuestas.",
          youCanNow: "explicar las principales reglas de vivienda sobre antecedentes, pedirle su política a un lugar de vivienda y pedir una revisión si te rechazan.",
          quickCheck: [
            { objective: "O2", q: "¿Quién maneja la vivienda pública y los Housing Choice Vouchers en tu zona?", options: ["La Public Housing Agency (PHA) local", "El departamento de policía", "Tu oficial de libertad condicional", "El IRS"], answer: 0, why: "Tu Public Housing Agency local maneja estos programas y fija su propia política." },
            { objective: "O2", q: "Quieres solicitar vivienda con un proveedor, pero te preocupan tus antecedentes. ¿Qué harías?", options: ["No mencionar los antecedentes y esperar lo mejor", "Rendirte y no solicitar", "Pagar de más para saltarte la revisión", "Pedir su política por escrito y preguntar si puedes agregar pruebas de rehabilitación"], answer: 3, why: "Preguntar por la política y ofrecer pruebas ayuda a que revisen tu solicitud de forma justa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Armar un paquete para rentar",
          minutes: 5,
          goal: "Armar un paquete para rentar que responda a las preocupaciones de un arrendador antes de que pregunte.",
          text: [
            "Un arrendador quiere saber tres cosas: si vas a pagar a tiempo, si vas a cuidar el lugar y si te vas a llevar bien con los vecinos. Un paquete para rentar responde las tres en una sola carpeta.",
            "Incluye: una identificación con foto; pruebas de ingresos, como talones de pago, una carta de oferta de trabajo o una carta de beneficios; referencias de un empleador, un administrador de caso, el personal de un programa o un líder religioso; certificados de los programas que terminaste, y una carta corta sobre tus antecedentes que diga qué pasó, qué has hecho desde entonces y por qué vas a ser un buen inquilino.",
            "Cuidado con las estafas de renta. Nunca mandes dinero por transferencia, tarjeta de regalo o aplicación de pagos antes de ver el lugar en persona y firmar un contrato. Ten cuidado con cualquier trato que parezca demasiado barato o que te apure.",
            "Sabe cuánto puedes pagar. Muchos programas usan una regla práctica: la renta debe ser más o menos un tercio de tus ingresos o menos. Pregunta por todos los costos para mudarte: depósito, primer mes y cargos de solicitud."
          ],
          steps: ["Consigue una carpeta y saca copias de tu identificación y de tus pruebas de ingresos.", "Pídeles cartas de referencia a dos o tres personas.", "Agrega los certificados de los programas que terminaste.", "Escribe una carta corta sobre tus antecedentes que termine con por qué vas a ser un buen inquilino.", "Antes de pagar nada, ve el lugar en persona y consigue un contrato por escrito."],
          words: [["Paquete para rentar", "una carpeta de papeles que le muestra a un arrendador que eres un buen inquilino."], ["Referencia", "una persona que puede hablar bien de ti."], ["Depósito de garantía", "dinero que pagas antes de mudarte y que el arrendador guarda por si hay daños."], ["Contrato de arrendamiento", "el acuerdo de renta por escrito. En inglés se dice lease."]],
          slides: [
            { title: "Lo que le preocupa a un arrendador", bullets: ["¿Vas a pagar a tiempo?", "¿Vas a cuidar el lugar?", "¿Te vas a llevar bien con los vecinos?"] },
            { title: "Tu paquete para rentar", bullets: ["Identificación con foto y pruebas de ingresos", "Referencias y certificados de programas", "Una carta corta sobre tus antecedentes"] },
            { title: "Señales de estafa de renta", bullets: ["Pagar antes de ver el lugar", "Solo transferencia, tarjeta de regalo o aplicación de pagos", "Demasiado barato, demasiado rápido"] },
            { title: "Conoce tus números", bullets: ["Renta de un tercio de tus ingresos o menos", "Pregunta por depósito, primer mes y cargos"] }
          ],
          tryIt: "Empieza tu paquete para rentar. Haz una lista de los papeles que tienes y los que todavía te faltan. Escribe el primer borrador de tu carta corta: una oración sobre qué pasó, dos sobre lo que has hecho desde entonces y una sobre por qué vas a ser un buen inquilino.",
          youCanNow: "armar un paquete para rentar que le muestre a un arrendador que vas a pagar, cuidar el lugar y ser buen vecino, y reconocer las estafas de renta.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en un paquete para rentar?", options: ["Comprobantes de ingresos y cartas de recomendación", "Todo el expediente de tu caso", "La contraseña de tu banco", "Una copia de tu tarjeta del Seguro Social para cualquiera"], answer: 0, why: "Los comprobantes de ingresos y las recomendaciones responden a las principales preocupaciones del arrendador." },
            { objective: "O3", q: "Un arrendador quiere un depósito por transferencia antes de que veas el departamento. ¿Qué harías?", options: ["Mandarlo rápido antes de que alguien más lo haga", "Mandar la mitad", "Negarte y buscar otro lugar", "Mandarlo mejor con una tarjeta de regalo"], answer: 2, why: "Pedir un pago antes de que veas el lugar es una señal de estafa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar un lugar donde vivir",
        questions: [
          { objective: "O1", q: "Acabas de llegar y necesitas ayuda de vivienda esta noche. ¿Cuál es un buen primer paso?", options: ["Esperar un mes", "Llamar al 211 o entrar a 211.org", "Firmar cualquier contrato que veas en internet", "Mandar un depósito con tarjeta de regalo"], answer: 1, why: "El 211 te conecta con vivienda y otra ayuda en tu zona." },
          { objective: "O2", q: "¿Quién maneja la vivienda pública y los Housing Choice Vouchers en tu zona?", options: ["La Public Housing Agency local", "El correo", "Tu banco", "La oficina de licencias de manejo (DMV)"], answer: 0, why: "Tu Public Housing Agency local maneja estos programas y sus listas de espera." },
          { objective: "O2", q: "Antes de rechazarte por tus antecedentes penales, una agencia de vivienda pública tiene que:", options: ["Cobrarte por la revisión", "Publicarlo en internet", "Avisarte y darte una copia de los antecedentes y la oportunidad de reclamar", "Llamar a tu familia"], answer: 2, why: "Las reglas exigen aviso, una copia de los antecedentes y la oportunidad de reclamar." },
          { objective: "O2", q: "En California, ¿qué NO puede usar un arrendador en tu contra?", options: ["Tus ingresos", "Tus referencias", "Tu historial de renta", "Antecedentes sellados"], answer: 3, why: "California no deja que los arrendadores usen antecedentes sellados o borrados, arrestos sin condena ni antecedentes de menores." },
          { objective: "O3", q: "Un arrendador te pide pagar un depósito con tarjeta de regalo antes de ver el apartamento. ¿Qué haces?", options: ["Pagar rápido para no perderlo", "Pagar la mitad", "Negarte; es una señal de estafa", "Mandar la contraseña de tu banco"], answer: 2, why: "Pagar con tarjetas de regalo antes de ver el lugar es una estafa de renta clásica." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar trabajo de segunda oportunidad",
      lessons: [
        {
          objectives: ["O4"],
          title: "American Job Centers y programas de empleo para la reinserción",
          minutes: 5,
          goal: "Encontrar tu American Job Center más cercano y un programa de empleo para la reinserción, y saber qué preguntarles.",
          text: [
            "Los American Job Centers son oficinas públicas de empleo que hay en todo el país. Ayudan a buscar trabajo, hacer currículums, conseguir capacitación y, a veces, capacitación pagada o ayuda con ropa y herramientas de trabajo. Puedes encontrar el más cercano en CareerOneStop (careeronestop.org), un sitio web del Departamento de Trabajo de Estados Unidos, o llamando al 211.",
            "El Departamento de Trabajo también paga programas de empleo para la reinserción de adultos y jóvenes que estuvieron en prisión. Las organizaciones de reinserción, los colegios comunitarios y algunos sindicatos también dan capacitación y programas de aprendiz.",
            "Cuando vayas, pregunta: ¿Qué capacitación es gratis para mí? ¿Trabajan con empleadores que contratan a personas con antecedentes? ¿Me pueden ayudar con una carta de fianza o con los papeles del Work Opportunity Tax Credit? ¿Me pueden ayudar con ropa de trabajo, herramientas o un pase de autobús?"
          ],
          steps: ["Entra a careeronestop.org y busca un American Job Center cerca de ti, o llama al 211.", "Pregúntale a un programa de reinserción con qué programas de empleo trabaja.", "Lleva tu identificación, tu currículum si tienes uno y tus certificados.", "Haz las cuatro preguntas de esta lección y anota las respuestas.", "Pon una fecha para tu próxima visita."],
          words: [["American Job Center", "una oficina pública gratis que ayuda a la gente a encontrar trabajo y capacitación."], ["CareerOneStop", "un sitio web del Departamento de Trabajo de Estados Unidos para buscar trabajo, capacitación y centros de empleo."], ["Programa de aprendiz", "un trabajo pagado donde aprendes un oficio mientras trabajas. En inglés se dice apprenticeship."]],
          slides: [
            { title: "American Job Centers", bullets: ["Oficinas públicas de empleo en todo el país", "Búsqueda de trabajo, currículums, capacitación", "Encuentra uno en careeronestop.org o llama al 211"] },
            { title: "Programas de empleo para la reinserción", bullets: ["Programas del Departamento de Trabajo", "Organizaciones de reinserción y colegios", "Sindicatos y programas de aprendiz"] },
            { title: "Pregúntales", bullets: ["¿Qué capacitación es gratis para mí?", "¿Qué empleadores contratan a personas con antecedentes?", "¿Ayuda con papeles de fianza o del crédito fiscal?", "¿Ayuda con ropa, herramientas o pase de autobús?"] }
          ],
          sources: [
            { name: "CareerOneStop: Encuentra American Job Centers", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Departamento de Trabajo de EE. UU.: Empleo para la reinserción", url: "https://www.dol.gov/agencies/eta/reentry" }
          ],
          tryIt: "Encuentra tu American Job Center más cercano. Anota su dirección, su teléfono y su horario, y las cuatro preguntas que vas a hacer en tu primera visita.",
          youCanNow: "encontrar un American Job Center y un programa de empleo para la reinserción y pedirles la ayuda que necesitas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué ofrece un American Job Center?", options: ["Solo trabajos pagados en el mismo centro", "Ayuda gratis para buscar trabajo, hacer el currículum y capacitarte", "Vales de vivienda", "Préstamos para autos"], answer: 1, why: "Los American Job Centers dan ayuda gratis para buscar trabajo, hacer el currículum y capacitarte." },
            { objective: "O4", q: "Vas por primera vez a un centro de empleo. ¿Qué pregunta harías?", options: ["¿Me pueden borrar los antecedentes?", "¿Cuánto cobran?", "¿Me puedo saltar la solicitud?", "¿Qué empleadores de aquí contratan a personas con antecedentes?"], answer: 3, why: "El personal de los centros de empleo muchas veces conoce a los empleadores locales de segunda oportunidad." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Empleadores de segunda oportunidad, WOTC y fianza federal",
          minutes: 6,
          goal: "Explicarle a un empleador cómo el Work Opportunity Tax Credit y el Federal Bonding Program pueden ayudarle a contratarte.",
          text: [
            "Un empleador de segunda oportunidad es un negocio dispuesto a contratar a personas con antecedentes. Búscalos en los centros de empleo, los programas de reinserción, las agencias de empleo que trabajan con la reinserción, los sindicatos y los anuncios de trabajo que dicen fair chance (oportunidad justa) o second chance (segunda oportunidad).",
            "El Work Opportunity Tax Credit (WOTC) es un crédito fiscal federal para los empleadores, no dinero que te pagan a ti. Uno de los grupos que cubre se llama qualified ex-felons en la ley: personas contratadas dentro del año siguiente a una condena por delito grave o a su salida de prisión. El empleador y tú llenan el Form 8850 del IRS (la agencia de impuestos de Estados Unidos) el día de la oferta de trabajo o antes, y el empleador lo manda al estado dentro de los 28 días después de que empiezas. La página del IRS decía que el crédito cubría a las personas que empezaron a trabajar hasta el 31 de diciembre de 2025. Revisa irs.gov para ver si lo renovaron antes de mencionarlo.",
            "El Federal Bonding Program (programa federal de fianzas) les da a los empleadores una fianza de fidelidad gratis, un tipo de seguro contra robos de empleados, durante los primeros seis meses de un trabajo. Cada fianza cubre hasta $5,000 sin deducible, y tú no tienes que llenar ningún formulario. Las personas con antecedentes son uno de los grupos a los que sirve. Lo organiza el coordinador de fianzas de tu estado, que aparece en bonds4jobs.com.",
            "Muchos empleadores nunca han oído de estos programas. Contárselos muestra que hiciste tu tarea y les baja el riesgo."
          ],
          steps: ["Haz una lista de empleadores de segunda oportunidad con datos de centros de empleo, programas de reinserción y anuncios de trabajo.", "Revisa irs.gov para ver si el WOTC está vigente ahora.", "Busca al coordinador de fianzas de tu estado en bonds4jobs.com.", "Practica una presentación de dos oraciones sobre el WOTC y la fianza.", "Lleva el Form 8850 y la información de la fianza a las entrevistas."],
          words: [["Empleador de segunda oportunidad", "un negocio dispuesto a contratar a personas con antecedentes."], ["Work Opportunity Tax Credit (WOTC)", "un crédito fiscal federal para empleadores que contratan a personas de ciertos grupos."], ["Fianza de fidelidad", "un seguro que protege a un empleador de pérdidas por robos de empleados. En inglés se dice fidelity bond."], ["Form 8850", "el formulario del IRS que se usa para empezar el trámite del WOTC."]],
          slides: [
            { title: "Empleadores de segunda oportunidad", bullets: ["Dispuestos a contratar a personas con antecedentes", "Búscalos en centros de empleo y programas de reinserción", "Busca fair chance o second chance en los anuncios"] },
            { title: "Work Opportunity Tax Credit", bullets: ["Un crédito fiscal para el empleador, no un pago para ti", "Cubre a quien contratan dentro de un año de su condena o salida", "Form 8850 el día de la oferta o antes; revisa irs.gov"] },
            { title: "Federal Bonding Program", bullets: ["Fianza gratis por los primeros seis meses", "Hasta $5,000, sin deducible", "La organiza el coordinador de fianzas de tu estado"] },
            { title: "Por qué contárselo al empleador", bullets: ["Muchos nunca han oído de esto", "Les baja el riesgo", "Muestra que hiciste tu tarea"] }
          ],
          sources: [
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "Departamento de Trabajo de EE. UU.: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" },
            { name: "Federal Bonding Program: Quiénes somos", url: "https://bonds4jobs.com/about-us" }
          ],
          tryIt: "Escribe tu presentación de dos oraciones para un empleador. Por ejemplo: Si me contrata, tal vez pueda pedir el Work Opportunity Tax Credit. También puedo venir con una fianza gratis del Federal Bonding Program que cubre mis primeros seis meses. Luego busca al coordinador de fianzas de tu estado en bonds4jobs.com.",
          youCanNow: "encontrar empleadores de segunda oportunidad y explicarle a un empleador el WOTC y la fianza federal con palabras sencillas.",
          quickCheck: [
            { objective: "O5", q: "¿Quién recibe el Work Opportunity Tax Credit?", options: ["El trabajador", "La oficina de libertad condicional", "El empleador", "El centro de empleo"], answer: 2, why: "El WOTC es un crédito de impuestos que el empleador puede pedir por contratarte." },
            { objective: "O5", q: "Piensas hablarle a un empleador del WOTC en una entrevista. ¿Qué harías primero?", options: ["Revisar en irs.gov si está vigente ahora", "Prometerle una cantidad fija de dinero", "Pedirle a la IA que llene el Form 8850 con tus datos", "No mencionarlo porque a los empleadores nunca les importa"], answer: 0, why: "Las reglas del WOTC pueden cambiar, así que revisas irs.gov antes de mencionarlo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Presentar solicitudes y responder preguntas sobre tus antecedentes",
          minutes: 6,
          goal: "Solicitar un trabajo de segunda oportunidad y responder con confianza las preguntas sobre tus antecedentes.",
          text: [
            "Solicita varios trabajos cada semana. Lleva una lista sencilla con el empleador, el puesto, la fecha en que lo solicitaste y lo que sigue. Si no te responden, vuelve a contactarlos después de más o menos una semana.",
            "Muchos estados y ciudades tienen leyes de contratación justa o de ban the box (quitar la casilla) que dejan las preguntas sobre antecedentes para más tarde en el proceso. Aprende la regla de tu zona. Cuando llegue la pregunta, sé honesto. Mentir sobre los antecedentes es una razón común para perder un trabajo después.",
            "Responde en tres partes cortas: qué pasó, en una oración y sin excusas; qué has hecho desde entonces, como programas, trabajo, estudios y mantenerte en buen camino; y por qué estás listo para este trabajo. Luego vuelve a hablar de tus habilidades. Practícalo en voz alta hasta que te sientas tranquilo.",
            "Lleva pruebas: certificados, una carta de referencia y tu información del WOTC y de la fianza. Un asistente de IA puede ayudarte a practicar preguntas de entrevista, pero nunca escribas en él tus números de caso ni otros datos privados."
          ],
          steps: ["Solicita varios trabajos cada semana y anótalos en una lista.", "Aprende la regla de contratación justa de tu estado o ciudad.", "Escribe tu respuesta de tres partes sobre tus antecedentes.", "Practícala en voz alta con una persona o con un asistente de IA, sin datos privados.", "Lleva certificados, referencias e información del WOTC y de la fianza a la entrevista."],
          words: [["Dar seguimiento", "volver a contactar a un empleador para preguntar por tu solicitud."], ["Ley de contratación justa", "una ley que limita cuándo los empleadores pueden preguntar por tus antecedentes."], ["Carta de referencia", "una carta de alguien que puede hablar bien de tu trabajo o de tu carácter."]],
          slides: [
            { title: "Solicita con constancia", bullets: ["Varias solicitudes cada semana", "Anota empleador, puesto, fecha y siguiente paso", "Da seguimiento después de una semana más o menos"] },
            { title: "Cuando llegue la pregunta sobre antecedentes", bullets: ["Conoce la regla de contratación justa de tu zona", "Sé honesto: mentir te puede costar el trabajo después"] },
            { title: "Tu respuesta de tres partes", bullets: ["Qué pasó: una oración, sin excusas", "Qué has hecho desde entonces", "Por qué estás listo para este trabajo"] },
            { title: "Lleva pruebas", bullets: ["Certificados y una carta de referencia", "Información del WOTC y de la fianza", "Practica con IA, pero sin datos privados"] }
          ],
          tryIt: "Tarea final: haz tu plan de vivienda y empleo de una página con dos opciones de vivienda, la lista de tu paquete para rentar, tu American Job Center más cercano, tres empleadores de segunda oportunidad o pistas de trabajo y tu presentación de dos oraciones sobre el WOTC y la fianza. Luego di una vez en voz alta tu respuesta de tres partes sobre tus antecedentes.",
          youCanNow: "solicitar trabajos de segunda oportunidad, llevar el control de tus solicitudes y responder las preguntas sobre tus antecedentes con honestidad y calma.",
          quickCheck: [
            { objective: "O6", q: "¿Cuáles son las tres partes de una buena respuesta sobre tus antecedentes?", options: ["Tu número de caso, tu sentencia y tu fecha de salida", "Qué pasó, lo que has hecho desde entonces y por qué estás listo", "Quién tuvo la culpa, qué tan injusto fue y hace cuánto tiempo", "Nada, porque no deberías responder"], answer: 1, why: "Una respuesta breve y honesta de tres partes muestra que creciste y que estás listo." },
            { objective: "O6", q: "Quieres que la IA te ayude a practicar respuestas para entrevistas. ¿Qué harías?", options: ["Escribir tus números de caso para que conozca tu historia", "Pegar tus antecedentes completos", "Usar palabras generales y dejar fuera los números de caso", "Pedirle que invente unos antecedentes limpios"], answer: 2, why: "Puedes practicar con la IA sin compartir los detalles privados de tus casos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar trabajo de segunda oportunidad",
        questions: [
          { objective: "O4", q: "¿Dónde puedes encontrar tu American Job Center más cercano?", options: ["En un centro comercial", "Con tu arrendador", "En CareerOneStop (careeronestop.org) o con el 211", "En un mensaje de un desconocido"], answer: 2, why: "CareerOneStop, un sitio web del Departamento de Trabajo, y el 211 te pueden indicar un centro de empleo." },
          { objective: "O5", q: "¿Quién recibe el Work Opportunity Tax Credit?", options: ["El empleador", "La persona que busca trabajo, en efectivo", "La oficina de libertad condicional", "El arrendador"], answer: 0, why: "El WOTC es un crédito fiscal para los empleadores que contratan a personas de ciertos grupos." },
          { objective: "O5", q: "¿Qué le da el Federal Bonding Program a un empleador?", options: ["Un carro gratis", "Un préstamo", "Una cuenta de impuestos", "Una fianza gratis por los primeros seis meses del trabajo"], answer: 3, why: "El programa da una fianza de fidelidad gratis que cubre los primeros seis meses." },
          { objective: "O6", q: "En una entrevista te preguntan por tus antecedentes. ¿Qué es lo mejor?", options: ["Negarlo", "Ser honesto: qué pasó, qué has hecho desde entonces, por qué estás listo", "Enojarte", "Irte de la entrevista"], answer: 1, why: "Una respuesta corta y honesta, centrada en el cambio y en que estás listo, genera confianza." },
          { objective: "O6", q: "¿Qué NUNCA debes escribir en un asistente de IA mientras practicas para entrevistas?", options: ["\"Hazme una pregunta común de entrevista\"", "\"Haz más corta mi respuesta\"", "Tus números de caso", "\"Dame tu opinión\""], answer: 2, why: "Los números de caso y otros datos privados deben quedar fuera de las herramientas de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Encontrar vivienda y empleos de segunda oportunidad",
    questions: [
      { objective: "O1", q: "¿Qué es el 211?", options: ["Un servicio gratis y confidencial que te conecta con ayuda en tu zona", "Una línea de la policía", "Un banco", "Un sitio web de anuncios de trabajo"], answer: 0, why: "El 211 conecta a la gente con vivienda, comida y otra ayuda en su zona." },
      { objective: "O1", q: "La vivienda de transición es:", options: ["Un hotel para turistas", "Vivienda por poco tiempo con apoyo, muchas veces para personas que regresan a la comunidad", "Una bodega para guardar cosas", "Un carro"], answer: 1, why: "La vivienda de transición es un paso por poco tiempo, con apoyo." },
      { objective: "O1", q: "Estás en libertad condicional y encontraste un cuarto para rentar. ¿Qué debes hacer antes de firmar?", options: ["Firmar enseguida", "Mantenerlo en secreto", "Confirmar que tu oficial aprueba la dirección", "Pagarle en efectivo a un desconocido"], answer: 2, why: "La libertad condicional o a prueba puede exigir que tu oficial apruebe dónde vives." },
      { objective: "O1", q: "Las listas de espera de la vivienda pública pueden ser largas. ¿Qué es lo inteligente?", options: ["No solicitar nunca", "Solicitar solo cuando ya no tengas dónde vivir", "Solicitar una vez y cambiar tu número de teléfono", "Solicitar pronto y mantener tus datos de contacto al día"], answer: 3, why: "Anotarte pronto y que te puedan localizar te guarda el lugar." },
      { objective: "O2", q: "¿Cuál es un rechazo obligatorio en la vivienda pública federal?", options: ["Registro de por vida como agresor sexual", "Cualquier multa de tránsito", "No tener trabajo", "Tener hijos"], answer: 0, why: "Las reglas federales exigen rechazar a quien tenga que registrarse de por vida como agresor sexual." },
      { objective: "O2", q: "Para la mayoría de los demás antecedentes, ¿quién decide sobre una solicitud de vivienda pública?", options: ["El FBI", "La Public Housing Agency local, con su propia política", "Tus vecinos", "La persona que solicita"], answer: 1, why: "Fuera de los rechazos obligatorios, la agencia de vivienda decide con su propia política escrita." },
      { objective: "O2", q: "¿Puede una agencia de vivienda pública cobrarte por revisar tus antecedentes penales?", options: ["Sí, lo que quiera", "Solo los fines de semana", "No, no te puede cobrar", "Solo en efectivo"], answer: 2, why: "La regla dice que la agencia no le puede cobrar a la persona por revisar sus antecedentes." },
      { objective: "O2", q: "¿Tener antecedentes penales es una clase protegida según la Fair Housing Act federal?", options: ["Sí, siempre", "Solo para los vales", "Solo en verano", "No; las leyes de tu estado y ciudad pueden darte más protección"], answer: 3, why: "La Fair Housing Act federal no incluye los antecedentes penales como clase protegida." },
      { objective: "O2", q: "En California, un arrendador quiere rechazar a todos los que tienen cualquier antecedente. Esto:", options: ["No está permitido: no se permiten los rechazos para todos", "Lo exige la ley", "Es una buena política", "Solo se permite para apartamentos"], answer: 0, why: "California no permite rechazar a todas las personas con antecedentes penales." },
      { objective: "O3", q: "¿Qué va en un paquete para rentar?", options: ["Tu número de Seguro Social escrito en la portada", "Pruebas de ingresos y cartas de referencia", "La contraseña de tu banco", "Nada"], answer: 1, why: "Las pruebas de ingresos y las referencias responden las principales preocupaciones de un arrendador." },
      { objective: "O3", q: "Una regla práctica que usan muchos programas para la renta es:", options: ["Todos tus ingresos", "El doble de tus ingresos", "Más o menos un tercio de tus ingresos o menos", "La renta no importa"], answer: 2, why: "Mantener la renta cerca de un tercio de tus ingresos o menos deja dinero para otras necesidades." },
      { objective: "O3", q: "¿Cuál es una señal de estafa de renta?", options: ["Ves el lugar en persona primero", "Te dan un contrato por escrito", "El arrendador te da un recibo", "Quieren que pagues por transferencia antes de ver el lugar"], answer: 3, why: "Pagar por transferencia o con tarjeta de regalo antes de ver el lugar es una estafa común." },
      { objective: "O4", q: "¿Qué ofrece un American Job Center?", options: ["Ayuda gratis para buscar trabajo, hacer currículums y capacitarte", "Carros gratis", "Préstamos para vacaciones", "Escrituras de casas"], answer: 0, why: "Los American Job Centers son oficinas públicas que ayudan con empleo y capacitación." },
      { objective: "O4", q: "¿Qué pregunta es buena para hacer en un centro de empleo?", options: ["¿Pueden mentirles a los empleadores por mí?", "¿Qué empleadores de aquí contratan a personas con antecedentes?", "¿Puedo faltar al trabajo?", "¿Pueden pagar mi renta para siempre?"], answer: 1, why: "Los centros de empleo muchas veces conocen a los empleadores de segunda oportunidad de la zona." },
      { objective: "O4", q: "Un empleador de segunda oportunidad es:", options: ["Un empleador que contrata solo una vez", "Una cárcel del gobierno", "Un negocio dispuesto a contratar a personas con antecedentes", "Un trabajo temporal que nunca paga"], answer: 2, why: "Los empleadores de segunda oportunidad están dispuestos a contratar a personas con antecedentes." },
      { objective: "O5", q: "¿Qué formulario del IRS empieza el trámite del WOTC?", options: ["Form 1040", "Form W-2", "Form 1099", "Form 8850"], answer: 3, why: "El Form 8850 se llena el día de la oferta de trabajo o antes." },
      { objective: "O5", q: "Antes de contarle a un empleador sobre el WOTC, debes:", options: ["Revisar irs.gov para ver si está vigente ahora", "Prometerle una cantidad exacta de dinero", "Hacerle sus impuestos", "No mencionarlo"], answer: 0, why: "El crédito tiene fecha de vencimiento y la ley tiene que renovarlo, así que revisa cómo está ahora." },
      { objective: "O5", q: "¿Cuánto le cuesta al empleador una fianza del Federal Bonding Program?", options: ["$500", "Nada; es gratis", "La mitad de tu sueldo", "$5,000"], answer: 1, why: "La fianza es gratis para el empleador y para quien busca trabajo; $5,000 es el límite de la cobertura." },
      { objective: "O5", q: "¿Quién organiza una fianza federal en tu estado?", options: ["Tu arrendador", "El banco", "El coordinador de fianzas de tu estado", "Tu médico"], answer: 2, why: "Los coordinadores de fianzas de cada estado, que aparecen en bonds4jobs.com, organizan las fianzas." },
      { objective: "O6", q: "La mejor manera de responder una pregunta sobre tus antecedentes es:", options: ["Decir que nunca pasó", "Contar toda la historia de tu vida", "Cambiar de tema", "Decir brevemente qué pasó, qué has hecho desde entonces y por qué estás listo"], answer: 3, why: "Una respuesta corta y honesta de tres partes genera confianza y te lleva de vuelta a tus habilidades." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      7,
      9,
      11,
      12,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Opciones de vivienda",
        objective: "O1",
        notYet: "Menos de dos opciones, o faltan los datos de contacto.",
        meets: "Dos opciones de vivienda con datos de contacto y qué llevar.",
        exceeds: "También anota el costo y las reglas, y que la dirección se confirmó con el oficial de libertad condicional si hace falta."
      },
      {
        name: "Lista del paquete para rentar",
        objective: "O3",
        notYet: "No hay lista.",
        meets: "Una lista de los papeles que tienes y los que todavía te faltan.",
        exceeds: "Incluye un primer borrador de la carta corta sobre lo que has hecho desde entonces."
      },
      {
        name: "Ayuda y opciones de trabajo",
        objective: "O4",
        notYet: "No hay centro de empleo o hay menos de tres opciones de trabajo.",
        meets: "El American Job Center más cercano y tres empleadores u opciones de trabajo de segunda oportunidad.",
        exceeds: "Incluye las preguntas que harás en tu primera visita."
      },
      {
        name: "Presentación al empleador",
        objective: "O5",
        notYet: "No hay presentación, o promete una cantidad fija de dinero.",
        meets: "Una presentación de dos oraciones sobre el WOTC y el Federal Bonding Program.",
        exceeds: "También nombra al coordinador de fianzas del estado y anota que el WOTC se revisó en irs.gov."
      },
      {
        name: "Respuesta sobre tus antecedentes",
        objective: "O6",
        notYet: "No la practicó, o es larga, culpa a otros o no es verdad.",
        meets: "La dijo en voz alta una vez: qué pasó, lo que has hecho desde entonces y por qué estás listo.",
        exceeds: "Es corta, tranquila y la practicó más de una vez."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se mudan a una vivienda estable o de transición en 90 días (encuesta de seguimiento)",
      "Personas que visitan un American Job Center o consiguen trabajo en 90 días",
      "Empleadores que usan el WOTC o una fianza federal para contratar a una persona del curso, según reportan las organizaciones aliadas"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono para llamar al 211 y a los centros de empleo, o una computadora con internet",
      "Papel y lápiz, o una carpeta, para el plan y el paquete para rentar",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Antes de la sesión, ten listos tu número local del 211, el American Job Center más cercano y el coordinador de fianzas de tu estado.",
      "Practiquen en parejas la respuesta de tres partes sobre los antecedentes; eso da confianza rápido.",
      "Las reglas cambian según el estado y la ciudad; manda las preguntas legales a la asistencia legal o a un consejero de reinserción.",
      "Recuerda a quienes están en libertad condicional o probatoria que primero confirmen cualquier dirección nueva con su oficial.",
      "Califica el plan con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
