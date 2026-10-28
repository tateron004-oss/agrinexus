"use strict";

// Koach Learn course (shared), Spanish translation of shared/azure-fundamentals.js. See scripts/koachlearn-courses/README.md, "Translations".
// Exam facts as in the English course (checked 27 October 2026 on learn.microsoft.com). Azure product names stay in English, as on the exam.

const CERT = { name: "Microsoft Learn: Microsoft Certified: Azure Fundamentals", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn: Guía de estudio del examen AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure: Servicios gratuitos", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure: Calculadora de precios", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals-es",
  lang: "es",
  translationOf: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Fundamentos de Microsoft Azure",
  skills: "Explicar los conceptos de la nube, Distinguir IaaS, PaaS y SaaS, Organizar los recursos de Azure, Relacionar necesidades con los servicios básicos de Azure, Calcular y controlar los costos de la nube, Planear el examen AZ-900",
  outcome: "planear una pequeña configuración de Azure para una necesidad real de la comunidad: elegir los servicios correctos, explicar cómo se organizan y se protegen, calcular el costo mensual con la calculadora de precios de Azure y trazar tu propio camino hacia la certificación Azure Fundamentals (AZ-900).",
  about: [
    "Microsoft Azure es una de las plataformas de nube más grandes del mundo, y las habilidades de la nube abren puertas a empleos de soporte informático, mesa de ayuda y nube. Este curso es un comienzo gratuito y con lenguaje sencillo para personas nuevas en la tecnología, personas que cambian de carrera y miembros de la comunidad que quieren una primera certificación reconocida.",
    "Vas a aprender las ideas que cubre el examen Microsoft Azure Fundamentals (AZ-900): los conceptos de la nube, las piezas y los servicios básicos de Azure, y cómo se administra, se protege y se paga Azure. No necesitas una cuenta de Azure: las partes prácticas usan las herramientas públicas y gratuitas de Microsoft, como la calculadora de precios y la evaluación de práctica gratuita.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Este curso te ayuda a prepararte; no es el examen oficial, y las páginas de Microsoft tienen la última palabra sobre los detalles del examen. El examen se puede presentar en varios idiomas; revisa en la página oficial si está en español."
  ],
  finalTask: "Escribe un plan de Azure de una página para el sitio web y el almacenamiento de archivos de una pequeña organización comunitaria: nombra el tipo de servicio (IaaS, PaaS o SaaS) y los servicios de Azure que usarías, la región y el grupo de recursos, cómo iniciarán sesión las personas con seguridad, cómo controlarás los costos (presupuesto, etiquetas) y el costo mensual estimado con la calculadora de precios de Azure. Luego haz la evaluación de práctica gratuita del AZ-900 de Microsoft y anota tus dos áreas más débiles para estudiar después.",
  chapters: [
    {
      name: "Capítulo 1: Conceptos de la nube y las piezas de Azure",
      lessons: [
        {
          title: "Qué es la nube y por qué la usan las organizaciones",
          minutes: 5,
          goal: "Explicar la computación en la nube y sus principales beneficios con un ejemplo de todos los días.",
          text: [
            "La computación en la nube significa alquilar potencia de cálculo, almacenamiento y programas por internet en lugar de comprar y mantener tus propios servidores. Microsoft Azure, Amazon Web Services y Google Cloud son los proveedores de nube más grandes.",
            "Es como la electricidad: no construyes una planta eléctrica, conectas y pagas lo que usas. Esto se llama modelo basado en el consumo o de pago por uso. En lugar de una gran compra por adelantado (gasto de capital, CapEx), pagas un costo continuo (gasto operativo, OpEx).",
            "Principales beneficios: escalabilidad (agregar más potencia cuando la página de inscripción de un banco de alimentos se llena, y luego reducirla), alta disponibilidad (sigue funcionando si una máquina falla), confiabilidad, herramientas de seguridad y una administración más fácil. Hay tres modelos de nube: pública (un proveedor compartido como Azure), privada (la usa una sola organización) e híbrida (una mezcla de las dos)."
          ],
          words: [["Computación en la nube", "alquilar potencia de cálculo, almacenamiento y programas por internet."], ["Modelo basado en el consumo", "pagas solo lo que usas."], ["CapEx / OpEx", "el gasto de capital es una gran compra por adelantado; el gasto operativo es un costo continuo."], ["Escalabilidad", "agregar o quitar recursos según cambia la demanda."], ["Alta disponibilidad", "un servicio sigue funcionando aunque fallen algunas partes."], ["Nube híbrida", "una mezcla de nube pública y los sistemas privados propios de una organización."]],
          slides: [
            { title: "La computación en la nube es", bullets: ["Alquilar computación por internet", "Como la electricidad: conectas y pagas lo que usas", "Azure, AWS y Google Cloud son los tres grandes"] },
            { title: "Cómo se paga", bullets: ["Basado en el consumo: pagas lo que usas", "CapEx: gran compra por adelantado", "OpEx: costo continuo de funcionamiento"] },
            { title: "Principales beneficios", bullets: ["Escalabilidad y alta disponibilidad", "Confiabilidad y herramientas de seguridad", "Administración más fácil"] },
            { title: "Tres modelos de nube", bullets: ["Pública: proveedor compartido", "Privada: una sola organización", "Híbrida: una mezcla de las dos"] }
          ],
          sources: [STUDY],
          tryIt: "Elige una organización local que conozcas (una iglesia, una clínica, una escuela, un banco de alimentos o una tienda pequeña). Escribe dos formas en que podría usar la nube y qué beneficio (escalabilidad, disponibilidad, pago por uso) le da cada una.",
          youCanNow: "explicar la computación en la nube, el modelo de pago por uso, sus beneficios y los tres modelos de nube."
        },
        {
          title: "IaaS, PaaS, SaaS y quién es responsable de qué",
          minutes: 5,
          goal: "Clasificar un servicio como IaaS, PaaS o SaaS y decir quién se encarga de qué.",
          text: [
            "Los servicios en la nube vienen en tres tipos. IaaS (infraestructura como servicio): alquilas máquinas virtuales y redes y manejas tú mismo casi todo lo que hay en ellas, como alquilar un departamento vacío. PaaS (plataforma como servicio): el proveedor maneja los servidores y el software del sistema; tú pones tu aplicación o tus datos, como un departamento amueblado. SaaS (software como servicio): solo usas programas terminados, como el correo de Outlook o Microsoft Teams, como un cuarto de hotel.",
            "Sin servidor (serverless) es un tipo de PaaS en el que tu código se ejecuta solo cuando algo lo activa y pagas por uso, sin ningún servidor que manejar (Azure Functions es un ejemplo).",
            "El modelo de responsabilidad compartida dice quién protege qué. El proveedor siempre protege los centros de datos físicos. Tú siempre eres responsable de tus datos, tus cuentas y quién tiene acceso. En medio, cuanto más pasas de IaaS a SaaS, más se encarga el proveedor."
          ],
          steps: ["Pregúntate: ¿manejamos el sistema operativo? Si es así, es IaaS.", "¿Solo ponemos nuestra aplicación o nuestros datos? Entonces es PaaS.", "¿Solo iniciamos sesión y usamos el programa? Entonces es SaaS.", "Recuerda: tus datos y tus cuentas siempre son tu trabajo."],
          words: [["IaaS", "infraestructura como servicio: alquilas máquinas virtuales y las manejas."], ["PaaS", "plataforma como servicio: el proveedor maneja la plataforma; tú pones tu aplicación."], ["SaaS", "software como servicio: programas listos para usar por internet."], ["Sin servidor (serverless)", "código que se ejecuta solo cuando se activa, sin servidor que tengas que manejar."], ["Modelo de responsabilidad compartida", "cómo se reparten las tareas de seguridad entre el proveedor de nube y tú."]],
          slides: [
            { title: "Tres tipos de servicio", bullets: ["IaaS: departamento vacío, tú manejas casi todo", "PaaS: amueblado, tú pones tu aplicación", "SaaS: cuarto de hotel, solo lo usas"] },
            { title: "Sin servidor (serverless)", bullets: ["El código se ejecuta solo cuando se activa", "Pagas por uso, sin servidor que manejar", "Ejemplo: Azure Functions"] },
            { title: "Responsabilidad compartida", bullets: ["Proveedor: siempre el centro de datos físico", "Tú: siempre tus datos, cuentas y accesos", "De IaaS a SaaS: el proveedor hace más"] }
          ],
          sources: [STUDY],
          tryIt: "Clasifica estos en IaaS, PaaS o SaaS: el correo de Microsoft Outlook, una máquina virtual de Azure, Azure App Service para un sitio web, Microsoft Teams, Azure Functions. Luego escribe una cosa de la que siempre eres responsable, sin importar el tipo.",
          youCanNow: "distinguir IaaS, PaaS y SaaS y explicar el modelo de responsabilidad compartida."
        },
        {
          title: "Cómo se organiza Azure: regiones, zonas y grupos de recursos",
          minutes: 6,
          goal: "Describir dónde funciona Azure y cómo se organizan y se encuentran los recursos en el portal de Azure.",
          text: [
            "Azure funciona en centros de datos de todo el mundo agrupados en regiones, como East US o South Africa North. Eliges una región para cada cosa que construyes: más cerca de tus usuarios suele ser más rápido, y algunos datos tienen reglas sobre en qué país deben quedarse. Muchas regiones tienen zonas de disponibilidad: centros de datos separados con su propia electricidad y refrigeración, así que si uno falla, otro sigue funcionando. Las regiones también se emparejan con otra región de la misma zona geográfica para la recuperación ante desastres.",
            "Todo lo que creas (una máquina virtual, una base de datos, una cuenta de almacenamiento) es un recurso. Los recursos van en grupos de recursos, carpetas para las cosas que van juntas, como todo lo de un sitio web. Los grupos de recursos están dentro de una suscripción, que es la cuenta de facturación. Las organizaciones grandes agrupan las suscripciones con grupos de administración.",
            "Todo esto lo administras en el portal de Azure, un sitio web en portal.azure.com. También puedes usar Azure Cloud Shell, la CLI de Azure o Azure PowerShell para administrarlo escribiendo órdenes."
          ],
          steps: ["Elige una región cerca de tus usuarios que cumpla las reglas sobre los datos.", "Usa zonas de disponibilidad cuando el servicio no pueda caerse.", "Pon los recursos relacionados en un grupo de recursos.", "Sabe qué suscripción los paga.", "Adminístralo todo en el portal de Azure o con herramientas de línea de comandos."],
          words: [["Región", "una zona geográfica con uno o más centros de datos de Azure."], ["Zona de disponibilidad", "un centro de datos separado dentro de una región, con su propia electricidad, refrigeración y red."], ["Recurso", "cualquier cosa que creas en Azure, como una máquina virtual o una base de datos."], ["Grupo de recursos", "una carpeta que guarda recursos relacionados."], ["Suscripción", "la cuenta a la que se cobran los cargos de Azure."], ["Grupo de administración", "una forma de agrupar varias suscripciones con reglas comunes."], ["Portal de Azure", "el sitio web para administrar Azure."]],
          slides: [
            { title: "Dónde funciona Azure", bullets: ["Centros de datos agrupados en regiones", "Elige una región cerca de tus usuarios y que cumpla las reglas", "Zonas de disponibilidad: centros de datos separados"] },
            { title: "Cómo se organiza", bullets: ["Recurso: una cosa que creas", "Grupo de recursos: recursos relacionados", "Suscripción: facturación", "Grupo de administración: muchas suscripciones"] },
            { title: "Cómo lo administras", bullets: ["Portal de Azure en portal.azure.com", "Cloud Shell, CLI de Azure, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Planea la estructura para un centro comunitario que quiere un sitio web y un lugar para guardar formularios de inscripción: nombra un grupo de recursos, haz una lista de dos recursos que van en él y elige una región cerca de ti. Escribe una razón para tu elección de región.",
          youCanNow: "explicar las regiones, las zonas de disponibilidad, los recursos, los grupos de recursos, las suscripciones y los grupos de administración."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conceptos de la nube y las piezas de Azure",
        questions: [
          { q: "¿Qué es el modelo basado en el consumo?", options: ["Compras todos los servidores por adelantado", "Todo es siempre gratis", "Pagas solo lo que usas", "Pagas un precio fijo para siempre"], answer: 2, why: "Los servicios en la nube suelen ser de pago por uso." },
          { q: "El sitio web de un banco de alimentos se llena mucho una vez al mes. ¿Qué beneficio de la nube ayuda más?", options: ["Escalabilidad", "Nube privada", "CapEx", "SaaS"], answer: 0, why: "La escalabilidad agrega recursos cuando sube la demanda y los quita después." },
          { q: "Microsoft Teams usado desde un navegador web es un ejemplo de:", options: ["IaaS", "PaaS", "Una región", "SaaS"], answer: 3, why: "Es un programa listo para usar que se entrega por internet." },
          { q: "Según el modelo de responsabilidad compartida, ¿qué es SIEMPRE tu trabajo?", options: ["Construir el centro de datos", "Tus datos y quién tiene acceso a ellos", "Refrigerar los servidores", "Cambiar los discos duros rotos"], answer: 1, why: "Los clientes siempre son dueños de sus datos, cuentas y accesos." },
          { q: "¿Qué guarda los recursos de Azure relacionados, como todo lo de un sitio web?", options: ["Una región", "Un grupo de recursos", "Una zona de disponibilidad", "Una contraseña"], answer: 1, why: "Los grupos de recursos organizan los recursos que van juntos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Servicios básicos, costos y tu certificación",
      lessons: [
        {
          title: "Servicios básicos de Azure: cómputo, redes, almacenamiento y bases de datos",
          minutes: 6,
          goal: "Relacionar una necesidad común con el servicio básico de Azure correcto.",
          text: [
            "El cómputo ejecuta tus programas. Azure Virtual Machines te da una computadora completa en la nube (IaaS). Azure App Service aloja sitios y aplicaciones web sin manejar servidores (PaaS). Los contenedores empaquetan una aplicación con todo lo que necesita para que funcione igual en cualquier lugar. Azure Functions ejecuta pequeños trozos de código cuando algo los activa (sin servidor). Azure Virtual Desktop da a las personas un escritorio de Windows al que pueden llegar desde cualquier aparato.",
            "Las redes conectan las cosas. Una red virtual de Azure es tu red privada en la nube. Un VPN Gateway la une con tu oficina por internet; ExpressRoute es una conexión privada que no pasa por el internet público. Azure DNS convierte nombres en direcciones.",
            "El almacenamiento guarda archivos y datos. Una cuenta de almacenamiento contiene Blob Storage (fotos, videos, copias de seguridad), Azure Files (carpetas compartidas), colas y tablas. Los niveles de almacenamiento (frecuente, esporádico, poco frecuente y de archivo; en inglés hot, cool, cold y archive) cuestan menos cuanto menos seguido abres los archivos. Las opciones de redundancia guardan copias extra para que una falla no haga perder datos. Para bases de datos, Azure tiene opciones administradas como Azure SQL Database y Azure Cosmos DB."
          ],
          steps: ["¿Necesitas un sitio web? Mira Azure App Service.", "¿Necesitas control total de un servidor? Azure Virtual Machines.", "¿Necesitas que un código se ejecute ante un evento? Azure Functions.", "¿Necesitas guardar archivos o copias de seguridad? Una cuenta de almacenamiento con Blob Storage.", "¿Archivos que casi no se abren? Usa un nivel más frío y más barato."],
          words: [["Máquina virtual (VM)", "una computadora que funciona como software en la nube."], ["Azure App Service", "un servicio PaaS para alojar sitios y aplicaciones web."], ["Contenedor", "un paquete con una aplicación y todo lo que necesita para funcionar."], ["Red virtual", "una red privada para tus recursos de Azure."], ["Blob Storage", "almacenamiento para archivos grandes como fotos, videos y copias de seguridad."], ["Nivel de almacenamiento", "un nivel de precio según qué tan seguido abres los datos: frecuente, esporádico, poco frecuente o de archivo."], ["Redundancia", "guardar copias extra para que los datos sobrevivan a una falla."]],
          slides: [
            { title: "Cómputo", bullets: ["Virtual Machines: computadora completa (IaaS)", "App Service: sitios web (PaaS)", "Functions: código que se activa con un evento", "Contenedores y Virtual Desktop"] },
            { title: "Redes", bullets: ["Red virtual: tu red privada en la nube", "VPN Gateway: une con tu oficina", "ExpressRoute: conexión privada", "Azure DNS: de nombres a direcciones"] },
            { title: "Almacenamiento y bases de datos", bullets: ["Cuenta de almacenamiento: Blob, Files, colas, tablas", "Niveles: frecuente, esporádico, poco frecuente, archivo", "La redundancia guarda copias extra", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "Para el centro comunitario de la Lección 3, elige un servicio para cada necesidad: un sitio web público, un lugar para guardar los formularios de inscripción escaneados y unas fotos viejas que casi nunca se abren. Escribe qué servicio y, para las fotos, qué nivel de almacenamiento.",
          youCanNow: "relacionar necesidades comunes con los servicios de cómputo, redes, almacenamiento y bases de datos de Azure."
        },
        {
          title: "Seguridad, gobernanza y control de costos",
          minutes: 6,
          goal: "Nombrar las herramientas de Azure que protegen las cuentas, aplican reglas y evitan facturas sorpresa.",
          text: [
            "Identidad: Microsoft Entra ID es el servicio de inicio de sesión y directorio de Azure. Activa la autenticación multifactor (MFA), que pide una segunda prueba, como un código en una aplicación, para que una contraseña robada no baste. El inicio de sesión único (SSO) permite usar una sola cuenta para muchas aplicaciones. El control de acceso basado en roles (RBAC) da a cada persona solo el acceso que necesita su trabajo. Confianza cero (Zero Trust) significa no suponer nunca que una solicitud es segura; siempre verificar.",
            "Gobernanza: Azure Policy fija reglas, como \"crear recursos solo en estas regiones\". Los bloqueos de recursos evitan que los recursos importantes se borren o cambien por accidente. Las etiquetas son rótulos como departamento=jovenes o proyecto=sitioweb que ayudan a ordenar y seguir los costos. Microsoft Defender for Cloud revisa tu configuración buscando problemas de seguridad.",
            "Costos: lo que pagas depende del servicio, su tamaño, la región, cuánto tiempo funciona y cuántos datos salen de Azure. La calculadora de precios de Azure, gratuita, estima un costo mensual antes de construir nada. Cost Management te permite fijar presupuestos y alertas. Una regla sencilla: borra lo que no uses."
          ],
          steps: ["Activa la MFA en todas las cuentas.", "Da a las personas solo el acceso que necesita su trabajo (RBAC).", "Agrega etiquetas a todos los recursos.", "Usa Azure Policy y bloqueos de recursos para las reglas importantes.", "Calcula primero los costos en la calculadora de precios y luego fija una alerta de presupuesto."],
          words: [["Microsoft Entra ID", "el servicio de inicio de sesión y directorio en la nube de Microsoft."], ["Autenticación multifactor (MFA)", "iniciar sesión con una contraseña más una segunda prueba."], ["RBAC", "control de acceso basado en roles: acceso según el trabajo de cada persona."], ["Confianza cero (Zero Trust)", "un enfoque de seguridad: no suponer nunca la confianza, verificar siempre."], ["Azure Policy", "una herramienta que aplica reglas sobre lo que se puede crear."], ["Bloqueo de recurso", "evita que un recurso se borre o se cambie por error."], ["Etiqueta", "un rótulo en un recurso que sirve para ordenarlo y seguir los costos."]],
          slides: [
            { title: "Identidad y acceso", bullets: ["Microsoft Entra ID para iniciar sesión", "MFA: una segunda prueba", "RBAC: solo el acceso que necesita un trabajo", "Confianza cero: verificar siempre"] },
            { title: "Gobernanza", bullets: ["Azure Policy: aplicar reglas", "Bloqueos de recursos: evitar accidentes", "Etiquetas: ordenar y seguir costos", "Defender for Cloud: encontrar puntos débiles"] },
            { title: "Controla los costos", bullets: ["El costo depende del servicio, tamaño, región y tiempo", "Calculadora de precios: estima primero", "Presupuestos y alertas en Cost Management", "Borra lo que no uses"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Escribe tres reglas de seguridad y costos para la configuración de Azure del centro comunitario, una para el inicio de sesión, una para los accesos y una para los gastos. Ejemplo: \"Toda cuenta de voluntario usa MFA.\" Luego escribe dos etiquetas que pondrías en todos los recursos.",
          youCanNow: "describir cómo Azure protege las cuentas, aplica reglas y mantiene los costos bajo control."
        },
        {
          title: "Calcular costos y planear tu camino al AZ-900",
          minutes: 6,
          goal: "Calcular un costo mensual en la calculadora de precios y hacer un plan de estudio para el AZ-900.",
          text: [
            "La calculadora de precios es gratuita en el sitio web de Microsoft. Agregas los servicios que piensas usar, eliges una región y opciones como el tamaño y las horas, y te muestra un costo mensual estimado. Los precios cambian y dependen de la región, así que usa siempre la calculadora en lugar de un número que leíste en algún lugar.",
            "Si quieres practicar en Azure mismo, Microsoft ofrece a los clientes nuevos una cuenta gratuita con algunos servicios gratis durante 12 meses y más de 65 servicios gratis cada mes hasta ciertas cantidades. Lee las condiciones actuales en la página de servicios gratuitos de Microsoft antes de registrarte, fija una alerta de presupuesto y borra los recursos de práctica al terminar. Los estudiantes pueden calificar para una oferta aparte, Azure for Students, con un correo académico.",
            "El examen de la certificación Microsoft Certified: Azure Fundamentals es el AZ-900. La guía de estudio de Microsoft enumera tres áreas: conceptos de la nube (25-30%), arquitectura y servicios de Azure (35-40%) y administración y gobernanza de Azure (30-35%). Necesitas una puntuación de 700 o más para aprobar. La página del examen indica 45 minutos para la evaluación, y el precio depende del país donde lo presentes, así que revísalo allí. Microsoft Learn tiene capacitación gratuita y una evaluación de práctica gratuita."
          ],
          steps: ["Abre la calculadora de precios de Azure.", "Agrega los servicios de tu plan y elige tu región y los tamaños.", "Anota el total mensual estimado.", "Abre la página del AZ-900 en Microsoft Learn y haz la evaluación de práctica gratuita.", "Anota tus dos áreas más débiles y los módulos gratuitos de Microsoft Learn para ellas."],
          words: [["Calculadora de precios", "la herramienta gratuita de Microsoft para estimar los costos de Azure antes de construir."], ["AZ-900", "el código del examen de Microsoft Certified: Azure Fundamentals."], ["Evaluación de práctica", "preguntas de práctica gratuitas en Microsoft Learn que muestran qué tan preparado estás."], ["Microsoft Learn", "el sitio web gratuito de capacitación y certificación de Microsoft."]],
          slides: [
            { title: "Estima antes de construir", bullets: ["Calculadora de precios de Azure gratuita", "Agrega servicios, región y tamaños", "Los precios cambian: vuelve a revisar siempre"] },
            { title: "Practicar con seguridad", bullets: ["Lee primero las condiciones de la cuenta gratuita", "Fija una alerta de presupuesto", "Borra los recursos de práctica al terminar"] },
            { title: "El examen AZ-900", bullets: ["Conceptos de la nube: 25-30%", "Arquitectura y servicios: 35-40%", "Administración y gobernanza: 30-35%", "Nota para aprobar: 700; el precio cambia según el país"] },
            { title: "Tu siguiente paso", bullets: ["Evaluación de práctica gratuita en Microsoft Learn", "Estudia tus dos áreas más débiles"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Tarea final: escribe el plan de Azure de una página para el sitio web y el almacenamiento de archivos de una organización comunitaria (servicios y tipo, región, grupo de recursos, inicio de sesión seguro, etiquetas y presupuesto), agrega el estimado mensual de la calculadora de precios y luego haz la evaluación de práctica gratuita del AZ-900 y anota tus dos áreas más débiles.",
          youCanNow: "planear y ponerle precio a una pequeña configuración de Azure y seguir un camino claro hacia la certificación AZ-900."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Servicios básicos, costos y tu certificación",
        questions: [
          { q: "¿Qué servicio de Azure aloja un sitio web sin que tengas que manejar servidores?", options: ["Azure Virtual Machines", "ExpressRoute", "Bloqueos de recursos", "Azure App Service"], answer: 3, why: "App Service es alojamiento web PaaS." },
          { q: "Unas fotos viejas casi nunca se abren. ¿Qué opción de almacenamiento ahorra dinero?", options: ["Un nivel más frío, como esporádico, poco frecuente o de archivo", "El nivel frecuente", "Una máquina virtual más grande", "Una segunda suscripción"], answer: 0, why: "Los niveles más fríos cuestan menos para los datos que casi no abres." },
          { q: "¿Qué herramienta evita que un recurso importante se borre por error?", options: ["Una etiqueta", "La calculadora de precios", "Un bloqueo de recurso", "Una región"], answer: 2, why: "Los bloqueos evitan que se borre o se cambie por accidente." },
          { q: "¿Qué agrega la MFA al inicio de sesión?", options: ["Un nombre de usuario más largo", "Una suscripción gratuita", "Una región nueva", "Una segunda prueba, como un código en una aplicación"], answer: 3, why: "Con MFA, una contraseña robada no basta." },
          { q: "¿Dónde debes consultar el precio actual del examen AZ-900?", options: ["En lo que adivine un amigo", "En una publicación vieja de un blog", "En la página oficial del examen de Microsoft para tu país", "En cualquier chatbot de IA"], answer: 2, why: "El precio depende del país, y la página oficial está al día." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de Microsoft Azure",
    questions: [
      { q: "La computación en la nube significa:", options: ["Guardar archivos solo en una memoria USB", "Alquilar potencia de cálculo y servicios por internet", "Pronosticar el clima", "Comprar una computadora portátil nueva"], answer: 1, why: "La nube significa usar las computadoras de un proveedor por internet." },
      { q: "Pagar una gran cantidad por adelantado para comprar servidores es:", options: ["CapEx", "OpEx", "SaaS", "Sin servidor"], answer: 0, why: "El gasto de capital es una compra por adelantado." },
      { q: "Un servicio sigue funcionando aunque una máquina falle. Esto es:", options: ["Una etiqueta", "Un grupo de administración", "Alta disponibilidad", "CapEx"], answer: 2, why: "La alta disponibilidad mantiene los servicios funcionando a pesar de las fallas." },
      { q: "Una organización usa sus propios servidores junto con Azure. Eso es:", options: ["Nube híbrida", "Solo nube privada", "Solo nube pública", "SaaS"], answer: 0, why: "La híbrida mezcla la privada y la pública." },
      { q: "Alquilas una máquina virtual y manejas su sistema operativo. Eso es:", options: ["SaaS", "PaaS", "Una región", "IaaS"], answer: 3, why: "Manejar el sistema operativo de máquinas alquiladas es IaaS." },
      { q: "El código que se ejecuta solo cuando se activa, sin servidor que manejar, se llama:", options: ["Un bloqueo de recurso", "Sin servidor (serverless)", "Almacenamiento de archivo", "Una VPN"], answer: 1, why: "Sin servidor se ejecuta bajo demanda; Azure Functions es un ejemplo." },
      { q: "¿Quién protege siempre el centro de datos físico?", options: ["El cliente", "El proveedor de nube", "El banco del usuario", "Nadie"], answer: 1, why: "La seguridad física siempre es trabajo del proveedor." },
      { q: "Una región de Azure es:", options: ["Una cuenta de facturación", "Un tipo de base de datos", "Una regla de contraseñas", "Una zona geográfica con uno o más centros de datos"], answer: 3, why: "Las regiones son donde están los centros de datos de Azure." },
      { q: "Las zonas de disponibilidad son:", options: ["Centros de datos separados dentro de una región, con su propia electricidad y refrigeración", "Niveles de precio del almacenamiento", "Grupos de usuarios", "Países"], answer: 0, why: "Las zonas protegen contra la falla de un centro de datos." },
      { q: "¿Cuál es la cuenta de facturación que contiene los grupos de recursos?", options: ["Una etiqueta", "Un contenedor", "Una suscripción", "Una región"], answer: 2, why: "Las suscripciones se facturan y contienen los grupos de recursos." },
      { q: "¿Dónde administras Azure en un navegador web?", options: ["En una tienda de aplicaciones", "En un nivel de almacenamiento", "En ExpressRoute", "En el portal de Azure"], answer: 3, why: "El portal de Azure es el sitio web de administración." },
      { q: "¿Qué servicio te da una computadora completa en la nube?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Etiquetas"], answer: 2, why: "Virtual Machines es cómputo IaaS." },
      { q: "¿Cuál es una conexión privada a Azure que no usa el internet público?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Blob Storage"], answer: 1, why: "ExpressRoute es una conexión privada." },
      { q: "¿Dónde guardarías copias de seguridad y videos?", options: ["En Blob Storage dentro de una cuenta de almacenamiento", "En Azure Policy", "En un grupo de administración", "En Microsoft Entra ID"], answer: 0, why: "Blob Storage guarda archivos grandes." },
      { q: "¿Cuál es el servicio de inicio de sesión y directorio de Azure?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Nivel de archivo"], answer: 2, why: "Entra ID administra las identidades y el inicio de sesión." },
      { q: "Un voluntario solo necesita leer informes. ¿Qué idea lo limita a eso?", options: ["Control de acceso basado en roles (RBAC)", "Nube híbrida", "Escalabilidad", "Almacenamiento de archivo"], answer: 0, why: "RBAC da solo el acceso que necesita un rol." },
      { q: "Quieres impedir que alguien cree recursos fuera de tu región. ¿Qué herramienta usas?", options: ["Etiquetas", "La calculadora de precios", "Un contenedor", "Azure Policy"], answer: 3, why: "Azure Policy aplica reglas como las regiones permitidas." },
      { q: "Los rótulos como proyecto=sitioweb en los recursos se llaman:", options: ["Bloqueos", "Etiquetas", "Zonas", "Niveles"], answer: 1, why: "Las etiquetas ordenan los recursos y ayudan a seguir los costos." },
      { q: "Antes de construir nada, ¿cómo estimas el costo mensual?", options: ["Adivinando", "Con la calculadora de precios de Azure", "Esperando la primera factura", "Preguntándole a un desconocido en internet"], answer: 1, why: "La calculadora estima los costos antes de construir." },
      { q: "Según la guía de estudio de Microsoft, ¿qué puntuación necesitas para aprobar el AZ-900?", options: ["500", "600", "700 o más", "900 o más"], answer: 2, why: "La guía de estudio de Microsoft dice que se necesita una puntuación de 700 o más." }
    ]
  }
};
