"use strict";

// Koach Learn course (Spanish translation of shared/cybersecurity-analyst-entry.js). See scripts/koachlearn-courses/README.md, "Translations".

const SEC = { name: "Certificación CompTIA Security+ (página oficial)", url: "https://www.comptia.org/en-us/certifications/security/" };
const V7 = { name: "Detalles del examen CompTIA Security+ V7 (SY0-701)", url: "https://www.comptia.org/en-us/certifications/security/v7/" };
const V8 = { name: "Detalles del examen CompTIA Security+ V8 (SY0-801)", url: "https://www.comptia.org/en-us/certifications/security/v8/" };
const CISA = { name: "CISA: Buenas prácticas de ciberseguridad", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" };

module.exports = {
  id: "cybersecurity-analyst-entry-es",
  lang: "es",
  translationOf: "cybersecurity-analyst-entry",
  category: "Workforce Development",
  name: "Ciberseguridad de nivel inicial (preparación para CompTIA Security+)",
  skills: "Usar la tríada CIA, Calificar el riesgo, Elegir controles de seguridad, Reforzar una computadora, Revisar registros, Seguir los pasos de respuesta a incidentes",
  outcome: "pensar y trabajar como un analista de seguridad de nivel inicial: clasificar un problema según la tríada CIA, calificar un riesgo y elegir un control, reforzar tu propia computadora, detectar señales de alerta en un registro de inicios de sesión, seguir los pasos de respuesta a incidentes y seguir tu propio plan con fechas para el examen CompTIA Security+.",
  about: [
    "Los analistas de seguridad protegen las computadoras, las cuentas y los datos de una organización. Vigilan las señales de alerta, revisan configuraciones y responden cuando algo sale mal. CompTIA Security+ es una de las certificaciones más conocidas para empezar en este trabajo (CompTIA es una asociación de la industria tecnológica que otorga certificaciones).",
    "Este curso te prepara para Security+. No te da la certificación; CompTIA la otorga cuando apruebas el examen. El examen cambia a finales de 2026, así que la Lección 1 te muestra cómo elegir la versión correcta y dónde revisar los detalles actuales.",
    "Todo aquí es defensivo. Practicas solo en tu propia computadora y tus propias cuentas, y con registros inventados de las lecciones. Nunca pruebes, escanees ni entres en sistemas que no son tuyos o que no tienes permiso escrito para usar: eso puede ser un delito.",
    "Si eres nuevo en seguridad, toma primero \"Introducción a la ciberseguridad\". Ese curso trata las contraseñas, la autenticación multifactor y el phishing en tus propias cuentas; este curso se basa en él para el trabajo."
  ],
  finalTask: "Arma tu portafolio inicial de seguridad: (1) una lista de refuerzo para tu propia computadora que muestre cada configuración que revisaste y su resultado; (2) una nota breve de incidente sobre el registro de práctica de la Lección 5: qué viste, por qué es sospechoso, su impacto en la tríada CIA y su calificación de riesgo, y los pasos de respuesta a incidentes que seguirías; y (3) tu plan de estudio y de examen para Security+: qué versión del examen tomarás y por qué, una fecha objetivo, cada dominio con su peso y tus horas de estudio por semana.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que buscan su primer empleo en seguridad: personas que buscan trabajo, veteranos (muchos con autorizaciones de seguridad o experiencia en TI), personas que cambian de carrera y personas de soporte de TI que quieren crecer. Orígenes variados; la mayoría usa computadoras a diario, pero nunca ha trabajado en seguridad.",
    startingPoint: "Conocen la seguridad personal básica (contraseñas, autenticación multifactor, phishing) o pueden aprenderla en \"Introducción a la ciberseguridad\". No han leído registros, calificado riesgos ni seguido un proceso de incidentes. Pocos saben cómo está organizado el examen Security+ o que está cambiando.",
    gap: "Los puestos iniciales de seguridad esperan hábitos de analista: clasificar problemas, juzgar riesgos, revisar configuraciones, leer registros y seguir con calma los pasos ante incidentes. Los participantes también necesitan un plan claro y con fechas para la versión correcta de Security+, para no estudiar para un examen que se retira.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada término se explica",
      "Solo defensivo: práctica en tu propio dispositivo y con datos inventados; nada de escanear ni probar sistemas ajenos",
      "Dispositivos: una computadora Windows o Mac; algunas configuraciones requieren una cuenta de administrador, así que las computadoras de la biblioteca pueden no mostrarlas",
      "Tiempo: lecciones de 4 a 6 minutos",
      "El examen cambia a finales de 2026: los participantes deben revisar comptia.org para ver la versión, las fechas y el precio"
    ],
    prerequisites: "Sentirse cómodo con una computadora y con la seguridad básica de cuentas. Es bueno tomar antes \"Introducción a la ciberseguridad\" y \"Fundamentos de soporte técnico de TI (preparación para CompTIA A+)\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Dado un caso breve de seguridad", action: "clasificar qué parte de la tríada CIA (confidencialidad, integridad o disponibilidad) se ve afectada", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Dada una amenaza para una organización", action: "calificar su riesgo según la probabilidad y el impacto, y elegir un tipo de control para reducirlo", standard: "con una razón para la calificación y para el control" },
    { id: "O3", condition: "Usando tu propia computadora Windows o Mac", action: "revisar y anotar la configuración de actualizaciones, firewall, antivirus, tipo de cuenta, bloqueo de pantalla y cifrado de disco", standard: "con cada punto revisado y cada falla anotada" },
    { id: "O4", condition: "Dado un registro breve de inicios de sesión", action: "marcar las entradas sospechosas y explicar por qué cada una es sospechosa", standard: "encontrando cada intento fallido repetido y el éxito extraño que viene después" },
    { id: "O5", condition: "Dado un caso de incidente de seguridad", action: "enumerar en orden los pasos de respuesta a incidentes y escribir una acción para cada uno", standard: "sin omitir ningún paso y conservando la evidencia" },
    { id: "O6", condition: "Usando las páginas oficiales de CompTIA Security+", action: "escribir un plan de estudio y de examen que indique la versión del examen y una fecha objetivo", standard: "que cubra cada dominio con su peso y las horas de estudio por semana" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pensar como un analista de seguridad",
      lessons: [
        {
          title: "El trabajo de analista y el examen Security+",
          objectives: ["O6"],
          minutes: 6,
          goal: "Elegir la versión correcta del examen Security+ para tu fecha de examen y enumerar sus dominios.",
          text: [
            "Los empleos iniciales en seguridad incluyen analista de seguridad, analista de SOC (centro de operaciones de seguridad) y administrador de seguridad o de sistemas. Los analistas vigilan alertas y registros, revisan que los sistemas estén configurados de forma segura y ayudan a responder a incidentes. Muchos empiezan en soporte de TI y van subiendo.",
            "CompTIA otorga Security+ cuando apruebas un examen. Cuando lo revisamos en octubre de 2026, el examen tenía hasta 90 preguntas en 90 minutos, de opción múltiple y basadas en desempeño. CompTIA recomienda Network+ y unos dos años de experiencia en seguridad o administración de sistemas, pero los presenta como experiencia recomendada.",
            "El examen está cambiando. La versión 7 (SY0-701) está disponible ahora; su examen en inglés se iba a retirar el 11 de junio de 2027. La versión 8 (SY0-801) se esperaba alrededor del 17 de noviembre de 2026. Si tu fecha de examen es bien entrado 2027, estudia para la V8. Si vas a presentarlo pronto, la V7 puede servirte. Revisa las páginas oficiales: las fechas pueden cambiar.",
            "Cada versión tiene cinco dominios con pesos. En ambas, las operaciones de seguridad son el dominio más grande (alrededor del 27 al 28 por ciento). Tu tiempo de estudio debe seguir los pesos."
          ],
          steps: ["Abre la página oficial de Security+ y las páginas de los exámenes V7 y V8.", "Elige tu fecha objetivo para el examen.", "Elige la versión que estará disponible en esa fecha.", "Anota su código de examen, sus cinco dominios y sus pesos.", "Revisa el precio actual y las opciones para presentar el examen en el sitio oficial."],
          words: [["SOC", "centro de operaciones de seguridad: el equipo que vigila los sistemas de una organización para detectar ataques."], ["Analista de seguridad", "una persona que vigila, revisa y responde a los problemas de seguridad."], ["Versión del examen", "una versión del examen con su propio código y temas; las versiones viejas se retiran."], ["Retirarse", "cuando una versión del examen deja de ofrecerse."]],
          slides: [
            { title: "Empleos iniciales en seguridad", bullets: ["Analista de seguridad o de SOC", "Administrador de seguridad o de sistemas", "Muchos empiezan en soporte de TI"] },
            { title: "Lo básico de Security+ (revisado en oct. 2026)", bullets: ["Un examen, hasta 90 preguntas, 90 minutos", "Opción múltiple y preguntas basadas en desempeño", "CompTIA lo otorga; este curso te prepara"] },
            { title: "Elige tu versión", bullets: ["V7 = SY0-701: en inglés se retiraría el 11 de junio de 2027", "V8 = SY0-801: se esperaba alrededor del 17 de noviembre de 2026", "Elige la versión según tu fecha de examen"] },
            { title: "Estudia según los pesos", bullets: ["Cinco dominios por versión", "Operaciones de seguridad es el más grande", "Revisa comptia.org antes de reservar"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Elige un mes objetivo para el examen. Con las páginas oficiales, decide entre V7 y V8 y escribe una oración que diga por qué. Luego anota los cinco dominios de esa versión con sus pesos y encierra en un círculo el más grande.",
          youCanNow: "decir qué hace un analista de seguridad de nivel inicial, elegir la versión correcta de Security+ para tu fecha de examen y enumerar sus dominios.",
          quickCheck: [
            { objective: "O6", q: "Piensas presentar el examen a finales de 2027. ¿Para qué versión debes estudiar?", options: ["V7 (SY0-701), porque es más antigua", "Cualquier versión; son iguales", "V8 (SY0-801), porque la V7 en inglés se retiraría en junio de 2027", "Ninguna; solo toma A+"], answer: 2, why: "Estudia para la versión que todavía se ofrecerá en tu fecha de examen; revisa las páginas oficiales." },
            { objective: "O6", q: "¿Quién otorga la certificación Security+?", options: ["CompTIA, cuando apruebas el examen", "Este curso", "Tu empleador", "Cualquier sitio web de seguridad"], answer: 0, why: "CompTIA otorga Security+; este curso te prepara para el examen." }
          ]
        },
        {
          title: "La tríada CIA, amenazas, vulnerabilidades y riesgo",
          objectives: ["O1", "O2"],
          minutes: 6,
          goal: "Clasificar un problema de seguridad con la tríada CIA y calificar su riesgo.",
          text: [
            "La seguridad protege tres cosas, llamadas la tríada CIA (por sus siglas en inglés). Confidencialidad: solo las personas correctas pueden ver los datos. Integridad: los datos son correctos y no se cambian sin permiso. Disponibilidad: los sistemas y los datos funcionan cuando la gente los necesita.",
            "Ejemplos: una laptop robada con archivos de clientes afecta la confidencialidad. Alguien que cambia los montos de la nómina afecta la integridad. Un ransomware que bloquea todos los archivos, o un sitio web que queda fuera de línea, afecta la disponibilidad.",
            "Una amenaza es algo que podría causar daño (un ladrón, un estafador, una tormenta). Una vulnerabilidad es una debilidad que la amenaza podría aprovechar (una computadora sin actualizar, una contraseña débil, una puerta sin llave). El riesgo es qué tan probable es el daño, multiplicado por qué tan grave sería (el impacto).",
            "Los analistas suelen calificar el riesgo en una cuadrícula sencilla: probabilidad baja, media o alta, e impacto bajo, medio o alto. Lo de probabilidad alta e impacto alto va al principio de la lista."
          ],
          steps: ["Nombra lo que podría dañarse.", "Pregunta: ¿afecta la confidencialidad, la integridad o la disponibilidad?", "Nombra la amenaza y la vulnerabilidad.", "Califica la probabilidad: baja, media o alta.", "Califica el impacto: bajo, medio o alto.", "Pon primero los riesgos alto-alto."],
          words: [["Tríada CIA", "confidencialidad, integridad y disponibilidad: los tres objetivos de la seguridad."], ["Amenaza", "algo o alguien que podría causar daño."], ["Vulnerabilidad", "una debilidad que una amenaza podría aprovechar."], ["Riesgo", "qué tan probable es un daño y qué tan grave sería."], ["Ransomware", "programa malicioso que bloquea archivos y exige un pago."]],
          slides: [
            { title: "La tríada CIA", bullets: ["Confidencialidad: solo lo ven las personas correctas", "Integridad: se mantiene correcto", "Disponibilidad: funciona cuando se necesita"] },
            { title: "Ejemplos", bullets: ["Laptop robada con archivos: confidencialidad", "Montos de nómina cambiados: integridad", "Ransomware, sitio fuera de línea: disponibilidad"] },
            { title: "Amenaza, vulnerabilidad, riesgo", bullets: ["Amenaza: lo que podría causar daño", "Vulnerabilidad: la debilidad", "Riesgo: probabilidad e impacto juntos"] },
            { title: "Califícalo", bullets: ["Probabilidad: baja, media, alta", "Impacto: bajo, medio, alto", "Alto y alto van primero"] }
          ],
          tryIt: "Para un negocio pequeño que conozcas (una tienda de la esquina, la oficina de una iglesia, la recepción de una clínica), anota tres cosas que podrían salir mal. Para cada una, escribe qué parte de la tríada CIA afecta, la amenaza, la vulnerabilidad y una calificación de probabilidad e impacto.",
          youCanNow: "clasificar un problema de seguridad según la tríada CIA y calificar su riesgo por probabilidad e impacto.",
          quickCheck: [
            { objective: "O1", q: "Alguien cambia los montos de las facturas sin permiso. ¿Qué parte de la tríada CIA se ve afectada?", options: ["Confidencialidad", "Disponibilidad", "Ninguna", "Integridad"], answer: 3, why: "Integridad significa que los datos siguen siendo correctos; los cambios sin permiso la rompen." },
            { objective: "O2", q: "Una computadora de oficina no se ha actualizado en un año. En términos de riesgo, las actualizaciones que faltan son:", options: ["Una amenaza", "Una vulnerabilidad", "Un control", "Un incidente"], answer: 1, why: "Una actualización que falta es una debilidad que una amenaza podría aprovechar." }
          ]
        },
        {
          title: "Controles de seguridad y mínimo privilegio",
          objectives: ["O2"],
          minutes: 5,
          goal: "Elegir un tipo de control para reducir un riesgo dado.",
          text: [
            "Un control es cualquier cosa que reduce el riesgo. Security+ clasifica los controles de dos maneras. Por categoría: técnicos (un firewall, el cifrado, la autenticación multifactor), gerenciales (políticas, evaluaciones de riesgo), operativos (capacitación, guardias, procedimientos que sigue la gente) y físicos (cerraduras, credenciales, cámaras).",
            "Por lo que hacen: los controles preventivos detienen un ataque (una cerradura, la autenticación multifactor). Los de detección lo notan (una cámara, alertas en los registros). Los correctivos arreglan las cosas después (restaurar desde una copia de seguridad). Los disuasivos lo desalientan (un letrero de advertencia). Los compensatorios ocupan el lugar del control principal cuando este no es posible.",
            "Una regla clave es el mínimo privilegio: dar a cada persona solo el acceso que necesita para su trabajo, y nada más. Un cajero no necesita acceso a la nómina. Si alguien toma el control de una cuenta, el mínimo privilegio limita el daño.",
            "Una buena defensa usa varias capas, para que si una falla, otra siga protegiendo (defensa en profundidad)."
          ],
          words: [["Control", "cualquier cosa que reduce un riesgo."], ["Preventivo / de detección / correctivo", "controles que detienen, notan o arreglan un problema de seguridad."], ["Mínimo privilegio", "dar a cada persona solo el acceso que su trabajo necesita."], ["Defensa en profundidad", "usar varias capas de protección."], ["Firewall", "una herramienta que permite o bloquea el tráfico de red según reglas."]],
          slides: [
            { title: "Categorías de controles", bullets: ["Técnicos: firewall, cifrado, MFA (autenticación multifactor)", "Gerenciales: políticas, evaluaciones de riesgo", "Operativos: capacitación, procedimientos", "Físicos: cerraduras, credenciales, cámaras"] },
            { title: "Lo que hacen los controles", bullets: ["Preventivos: lo detienen", "De detección: lo notan", "Correctivos: lo arreglan después", "Disuasivos y compensatorios"] },
            { title: "Mínimo privilegio", bullets: ["Solo el acceso que el trabajo necesita", "Limita el daño si toman una cuenta"] },
            { title: "Defensa en profundidad", bullets: ["Varias capas", "Si una falla, otra sigue protegiendo"] }
          ],
          sources: [V7, V8],
          tryIt: "Toma los tres riesgos de la Lección 2. Para cada uno, elige un control. Escribe su categoría (técnico, gerencial, operativo o físico) y lo que hace (preventivo, de detección o correctivo). Luego escribe una regla de mínimo privilegio para ese negocio.",
          youCanNow: "elegir un control para un riesgo, nombrar su categoría y su tipo, y aplicar el mínimo privilegio.",
          quickCheck: [
            { objective: "O2", q: "¿Qué tipo de control es principalmente una cámara de seguridad que graba quién entra?", options: ["De detección", "Correctivo", "Gerencial", "Compensatorio"], answer: 0, why: "Las cámaras notan y graban los hechos, así que son controles de detección (y físicos)." },
            { objective: "O2", q: "Un cajero nuevo pide acceso al sistema de nómina. Aplicando el mínimo privilegio, tú:", options: ["Le das acceso total de administrador por si acaso", "Le compartes tu propia contraseña", "Le das acceso solo si su trabajo de verdad lo necesita", "Les das a todos acceso a todo"], answer: 2, why: "El mínimo privilegio da solo el acceso que un puesto necesita." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Pensar como un analista de seguridad",
        questions: [
          { objective: "O1", q: "El sitio web de citas de una clínica queda fuera de línea un día. ¿Qué parte de la tríada CIA se ve afectada?", options: ["Confidencialidad", "Integridad", "Disponibilidad", "Ninguna"], answer: 2, why: "La gente no pudo usar el sistema cuando lo necesitaba: disponibilidad." },
          { objective: "O1", q: "Un empleado envía por correo una lista de clientes a la persona equivocada fuera de la empresa. ¿Qué parte de la tríada CIA se ve afectada?", options: ["Confidencialidad", "Disponibilidad", "Integridad", "Mínimo privilegio"], answer: 0, why: "Los datos los vio alguien que no debía verlos." },
          { objective: "O2", q: "¿Qué riesgo se debe atender primero, por lo general?", options: ["Probabilidad baja, impacto bajo", "Probabilidad baja, impacto medio", "Probabilidad media, impacto bajo", "Probabilidad alta, impacto alto"], answer: 3, why: "Probabilidad alta e impacto alto es el riesgo más serio." },
          { objective: "O2", q: "¿Qué tipo de control es restaurar archivos desde una copia de seguridad después de un ransomware?", options: ["Disuasivo", "Correctivo", "Preventivo", "Gerencial"], answer: 1, why: "Los controles correctivos arreglan las cosas después de un evento." },
          { objective: "O6", q: "En ambas versiones de Security+, ¿qué dominio tiene el mayor peso?", options: ["Conceptos generales de seguridad", "Gestión del programa de seguridad", "Operaciones de seguridad", "Arquitectura de seguridad"], answer: 2, why: "Operaciones de seguridad es alrededor del 27 al 28 por ciento en ambas versiones." }
        ]
      }
    },
    {
      name: "Capítulo 2: Operaciones de seguridad en la práctica",
      lessons: [
        {
          title: "Reforzar tu propia computadora",
          objectives: ["O3"],
          minutes: 6,
          goal: "Revisar y anotar las principales configuraciones de seguridad de tu propia computadora.",
          text: [
            "Reforzar (hardening, en inglés) significa hacer que un sistema sea más difícil de atacar, activando protecciones y desactivando lo que no se necesita. Los analistas revisan esto todos los días en las computadoras de la empresa. Practica solo en tu propia computadora.",
            "Revisa seis cosas. Actualizaciones: ¿están instaladas? Firewall: ¿está activado? Antivirus: ¿está activado y al día (Microsoft Defender viene incluido en Windows; las Mac tienen protección contra malware incluida)? Tipo de cuenta: ¿usas una cuenta estándar para el trabajo diario, y la de administrador solo cuando hace falta? Bloqueo de pantalla: ¿se bloquea después de unos minutos y pide contraseña o PIN? Cifrado de disco: ¿está activado (BitLocker o Cifrado de dispositivo en muchas computadoras Windows, FileVault en Mac)?",
            "En Windows, busca en Configuración las opciones Windows Update y Cuentas, y abre Seguridad de Windows para el firewall y la protección antivirus. En una Mac, busca en Configuración del Sistema: Actualización de software, Red > Firewall, Usuarios y grupos, Pantalla bloqueada, y Privacidad y seguridad > FileVault. Los nombres de los menús pueden cambiar entre versiones; usa la búsqueda de Configuración si no encuentras alguno.",
            "Si activas el cifrado de disco, primero guarda la clave de recuperación en un lugar seguro y fuera de internet. Sin ella puedes perder tus archivos. Si no estás seguro, anótalo como una falla y pide ayuda en lugar de hacerlo."
          ],
          steps: ["Actualizaciones: revisa e instala.", "Firewall: confirma que esté activado.", "Antivirus: confirma que esté activado y al día.", "Cuenta: anota si tu cuenta diaria es estándar o de administrador.", "Bloqueo de pantalla: ajústalo para que se bloquee después de unos minutos.", "Cifrado de disco: revisa si está activado; guarda la clave de recuperación antes de activarlo.", "Escribe cada resultado y cada falla."],
          words: [["Reforzar (hardening)", "hacer que un sistema sea más difícil de atacar activando protecciones y quitando lo que no se necesita."], ["Cifrado de disco", "codificar todo lo que hay en una unidad para que un ladrón no pueda leerlo sin la clave."], ["Clave de recuperación", "un código largo que desbloquea una unidad cifrada si no puedes iniciar sesión."], ["Configuración base (baseline)", "la configuración segura estándar que debe tener cada computadora de una organización."]],
          slides: [
            { title: "Reforzar", bullets: ["Activa las protecciones", "Desactiva lo que no se necesita", "Solo en tu propia computadora"] },
            { title: "Revisa seis cosas", bullets: ["Actualizaciones, firewall, antivirus", "Cuenta estándar para el uso diario", "Bloqueo de pantalla y cifrado de disco"] },
            { title: "Dónde buscar", bullets: ["Windows: Configuración y Seguridad de Windows", "Mac: Configuración del Sistema, Privacidad y seguridad", "Los nombres de los menús cambian: usa la búsqueda"] },
            { title: "Cuidado con el cifrado", bullets: ["Primero guarda la clave de recuperación, fuera de internet", "¿No estás seguro? Anótalo como falla y pide ayuda"] }
          ],
          sources: [CISA],
          tryIt: "En tu propia computadora, revisa los seis puntos. Haz una tabla con tres columnas: configuración, lo que encontraste y lo que hay que arreglar. Esta es la parte 1 de tu tarea final.",
          youCanNow: "revisar las principales configuraciones de seguridad de una computadora y anotar las fallas, como un analista revisa una configuración base.",
          quickCheck: [
            { objective: "O3", q: "Antes de activar el cifrado de disco, ¿qué debes hacer?", options: ["Desactivar el firewall", "Guardar la clave de recuperación en un lugar seguro y fuera de internet", "Borrar tus archivos", "Compartir tu contraseña"], answer: 1, why: "Sin la clave de recuperación podrías perder el acceso a tus propios archivos." },
            { objective: "O3", q: "¿Qué cuenta debes usar para el trabajo diario?", options: ["Una cuenta de administrador", "Una cuenta compartida sin contraseña", "Una cuenta de invitado con tus archivos", "Una cuenta estándar"], answer: 3, why: "Una cuenta estándar limita lo que el malware o los errores pueden cambiar." }
          ]
        },
        {
          title: "Leer registros y detectar actividad sospechosa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Marcar las entradas sospechosas de un registro de inicios de sesión y decir por qué.",
          text: [
            "Un registro (log) es una lista de eventos que guarda un sistema, cada uno con su hora. Los analistas leen los registros de inicio de sesión para detectar ataques. En Windows, el Visor de eventos guarda un registro de Seguridad (para verlo se necesita una cuenta de administrador); los inicios de sesión fallidos aparecen como evento 4625 y los exitosos como 4624. Aquí usamos un registro inventado.",
            "Registro de práctica (inventado): 02:14:01 FAILED user=jlopez from 203.0.113.50. 02:14:03 FAILED user=jlopez from 203.0.113.50. 02:14:05 FAILED user=jlopez from 203.0.113.50. 02:14:07 FAILED user=jlopez from 203.0.113.50. 02:14:09 SUCCESS user=jlopez from 203.0.113.50. 08:02:30 SUCCESS user=mchen from 10.0.0.12. (FAILED = fallido, SUCCESS = exitoso.)",
            "Señales de alerta: muchos inicios de sesión fallidos en pocos segundos (alguien adivinando contraseñas) y luego uno exitoso desde la misma dirección (quizá adivinó bien). También horas raras (las 2 de la mañana para alguien que trabaja de 9 a 5), inicios de sesión desde un lugar inusual, y una misma cuenta que entra desde dos lugares muy lejanos casi al mismo tiempo.",
            "Tu trabajo es notar, anotar e informar, no contraatacar. Escribe lo que viste, las horas, la cuenta y la dirección, y pásalo siguiendo el proceso de tu equipo."
          ],
          steps: ["Lee cada línea: hora, resultado, cuenta, dirección.", "Busca muchos fallos en poco tiempo.", "Busca un éxito justo después de fallos desde la misma dirección.", "Busca horas o lugares raros.", "Anota cada línea sospechosa y por qué.", "Infórmalo; nunca intentes entrar tú en el otro sistema."],
          words: [["Registro (log)", "una lista con hora de los eventos que guarda un sistema."], ["Visor de eventos", "la herramienta de Windows para leer los registros del sistema y de seguridad."], ["Fuerza bruta", "adivinar una contraseña probando muchas opciones muy rápido."], ["Indicador", "una pista en los datos de que algo malo puede estar pasando."]],
          slides: [
            { title: "Los registros cuentan la historia", bullets: ["Cada línea: hora, evento, cuenta, dirección", "Windows: Visor de eventos, registro de Seguridad", "4625 = inicio de sesión fallido, 4624 = exitoso"] },
            { title: "Señales de alerta", bullets: ["Muchos fallos en segundos", "Luego un éxito desde la misma dirección", "Horas raras o lugares raros"] },
            { title: "En el registro de práctica", bullets: ["4 fallos de jlopez en 8 segundos a las 2:14 a. m.", "Luego un éxito desde la misma dirección", "mchen a las 8:02 a. m. se ve normal"] },
            { title: "Tu trabajo", bullets: ["Notar, anotar, informar", "Nunca contraatacar ni entrar por la fuerza"] }
          ],
          tryIt: "Copia el registro de práctica en papel. Encierra en un círculo cada línea sospechosa y escribe por qué. Califica el riesgo (probabilidad e impacto) y la parte de la tríada CIA en riesgo. Guárdalo para la parte 2 de tu tarea final.",
          youCanNow: "leer un registro de inicios de sesión, marcar las entradas sospechosas y explicar por qué importan.",
          quickCheck: [
            { objective: "O4", q: "En el registro de práctica, ¿qué línea es la más preocupante?", options: ["El éxito de jlopez a las 02:14:09 justo después de cuatro fallos", "El éxito de mchen a las 08:02:30", "Solo el primer intento fallido", "Ninguna; los intentos fallidos siempre son normales"], answer: 0, why: "Un éxito justo después de fallos rápidos desde la misma dirección sugiere que alguien adivinó la contraseña." },
            { objective: "O4", q: "Encuentras señales de un ataque en un registro. ¿Qué haces?", options: ["Hackear la computadora del atacante como respuesta", "Ignorarlo hasta la mañana", "Borrar el registro", "Anotar los detalles e informarlos siguiendo el proceso de tu equipo"], answer: 3, why: "Los analistas anotan e informan; contraatacar es ilegal y borrar registros destruye la evidencia." }
          ]
        },
        {
          title: "Respuesta a incidentes, y tu plan para Security+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Enumerar los pasos de respuesta a incidentes para un caso y escribir un plan de estudio con fechas para Security+.",
          text: [
            "Un incidente es un evento de seguridad que causa daño o amenaza con causarlo. Las organizaciones siguen pasos fijos para que la gente mantenga la calma. Security+ usa: preparación, detección, análisis, contención, erradicación, recuperación y lecciones aprendidas.",
            "Para el inicio de sesión de jlopez: preparación (el equipo ya tiene un plan y contactos); detección (tú ves las entradas del registro); análisis (confirma que es real: ¿jlopez inició sesión a las 2 de la mañana?); contención (bloquea la cuenta y cierra sus sesiones); erradicación (cambia la contraseña, activa la autenticación multifactor y quita todo lo que el atacante haya instalado); recuperación (devuelve a jlopez un acceso seguro y vigila la cuenta); lecciones aprendidas (¿qué habría evitado esto?).",
            "Conserva la evidencia: no borres registros ni formatees una computadora antes de que tu equipo lo indique. Anota las horas y las acciones mientras avanzas. Informa a la persona que indica tu proceso.",
            "Ahora planea tu examen. Usa la versión que elegiste en la Lección 1. Fija una fecha objetivo. Dedica más semanas a los dominios más grandes. Practica con los objetivos oficiales del examen, tus propias notas de refuerzo y de registros, y las comprobaciones de este curso. Elige horas por semana que se ajusten a tu vida. Antes de reservar, revisa el precio y las opciones para presentar el examen en la página oficial, y pregunta en programas de empleo, de veteranos o de reinserción si ayudan con los costos."
          ],
          steps: ["Preparación: conoce el plan y a quién llamar.", "Detección: nota las señales de alerta.", "Análisis: confirma que es real y qué tan grave es.", "Contención: evita que se extienda.", "Erradicación: elimina la causa.", "Recuperación: vuelve a la normalidad y vigila.", "Lecciones aprendidas: escribe qué cambiar.", "Plan: versión, fecha objetivo, dominios y pesos, horas por semana."],
          words: [["Incidente", "un evento de seguridad que causa daño o amenaza con causarlo."], ["Contención", "evitar que un incidente se extienda."], ["Erradicación", "eliminar la causa de un incidente."], ["Evidencia", "registros, archivos y notas que muestran lo que pasó; se deben conservar."]],
          slides: [
            { title: "Pasos de respuesta a incidentes", bullets: ["Preparación, detección, análisis", "Contención, erradicación, recuperación", "Lecciones aprendidas"] },
            { title: "El caso de jlopez", bullets: ["Confirma con el usuario", "Bloquea la cuenta; cambia la contraseña; activa MFA", "Devuelve el acceso y vigila la cuenta"] },
            { title: "Conserva la evidencia", bullets: ["No borres registros ni formatees equipos antes de tiempo", "Anota horas y acciones mientras avanzas"] },
            { title: "Tu plan para Security+", bullets: ["Versión y fecha objetivo", "Dominios con pesos; más semanas para los más grandes", "Horas por semana; revisa el precio en comptia.org"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Tarea final: junta tu tabla de refuerzo (Lección 4), una nota de incidente sobre el registro de jlopez con su impacto en la tríada CIA, su calificación de riesgo y una acción para cada paso de respuesta, y tu plan para Security+ con versión, fecha objetivo, dominios y pesos, y horas por semana.",
          youCanNow: "seguir los pasos de respuesta a incidentes en un caso realista y seguir tu propio plan con fechas hacia Security+.",
          quickCheck: [
            { objective: "O5", q: "Confirmas que alguien tomó el control de una cuenta. ¿Cuál es el siguiente paso?", options: ["Lecciones aprendidas", "Contención: bloquear la cuenta y cerrar sus sesiones", "Recuperación", "Preparación"], answer: 1, why: "Después de la detección y el análisis, contienes el incidente para que no se extienda." },
            { objective: "O6", q: "¿Qué debe ir en un plan de estudio para Security+?", options: ["Solo la palabra \"Security+\"", "Una lista de herramientas de hackeo para probar con otros", "La versión del examen, una fecha objetivo, los dominios con sus pesos y las horas por semana", "Tus contraseñas"], answer: 2, why: "Un plan indica la versión correcta, una fecha, qué estudiar y cuándo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Operaciones de seguridad en la práctica",
        questions: [
          { objective: "O3", q: "¿Cuál de estas acciones forma parte de reforzar una computadora?", options: ["Desactivar las actualizaciones", "Activar el firewall y el bloqueo de pantalla", "Usar una cuenta de administrador para todo", "Compartir la clave de recuperación en internet"], answer: 1, why: "Reforzar activa protecciones como el firewall y el bloqueo de pantalla." },
          { objective: "O4", q: "Diez inicios de sesión fallidos para una cuenta en cinco segundos, desde la misma dirección, lo más probable es que signifiquen:", options: ["El usuario olvidó cargar el teléfono", "Tráfico normal", "Un error de la impresora", "Alguien está adivinando la contraseña"], answer: 3, why: "Muchos fallos rápidos son la señal de un ataque de fuerza bruta." },
          { objective: "O4", q: "En Windows, ¿qué herramienta te deja leer el registro de Seguridad?", options: ["El Visor de eventos", "Paint", "Solo el Bloc de notas", "La calculadora"], answer: 0, why: "El Visor de eventos muestra los registros de Windows, incluido el de Seguridad." },
          { objective: "O5", q: "¿Qué paso viene justo después de la contención?", options: ["Detección", "Preparación", "Erradicación", "Análisis"], answer: 2, why: "Después de detener la propagación, eliminas la causa: erradicación." },
          { objective: "O5", q: "Durante un incidente, ¿por qué debes conservar los registros y no formatear la computadora enseguida?", options: ["Los registros son evidencia de lo que pasó", "Formatear siempre es ilegal", "Los registros hacen la computadora más rápida", "No importa"], answer: 0, why: "Los registros y los equipos son evidencia; el equipo decide cuándo es seguro limpiar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Ciberseguridad de nivel inicial (preparación para CompTIA Security+)",
    questions: [
      { objective: "O6", q: "¿Cuál es el código del examen Security+ V8?", options: ["SY0-701", "220-1201", "SY0-801", "DA0-002"], answer: 2, why: "La V8 es SY0-801; la V7 es SY0-701." },
      { objective: "O6", q: "¿Por qué revisar la página oficial de CompTIA antes de reservar?", options: ["Las versiones, fechas y precios del examen pueden cambiar", "Es el único lugar con herramientas de hackeo para practicar", "Te da el certificado gratis", "No hace falta"], answer: 0, why: "Las versiones se retiran y los precios cambian; la página oficial está al día." },
      { objective: "O6", q: "¿Qué dominio debe recibir más tiempo de estudio en un plan para Security+?", options: ["El más pequeño", "Operaciones de seguridad, el más grande", "Ninguno; estudia al azar", "Solo el dominio que te gusta"], answer: 1, why: "El dominio más grande tiene más preguntas." },
      { objective: "O1", q: "Un ransomware bloquea todos los archivos de una oficina. ¿Qué parte de la tríada CIA sufre más?", options: ["Confidencialidad", "Integridad", "Mínimo privilegio", "Disponibilidad"], answer: 3, why: "La gente no puede usar sus archivos: disponibilidad." },
      { objective: "O1", q: "Confidencialidad significa:", options: ["Los sistemas funcionan cuando se necesitan", "Solo las personas correctas pueden ver los datos", "Hay copia de seguridad de los datos", "Los datos están impresos"], answer: 1, why: "La confidencialidad mantiene los datos lejos de quien no debe verlos." },
      { objective: "O1", q: "Un estudiante cambia su calificación en el sistema de la escuela. ¿Qué parte de la tríada CIA se ve afectada?", options: ["Integridad", "Disponibilidad", "Confidencialidad", "Disuasión"], answer: 0, why: "Los datos se cambiaron sin permiso, así que ya no son correctos." },
      { objective: "O2", q: "Una contraseña débil en una cuenta de administrador es:", options: ["Una amenaza", "Un control", "Una vulnerabilidad", "Una clave de recuperación"], answer: 2, why: "Es una debilidad que un atacante podría aprovechar." },
      { objective: "O2", q: "La autenticación multifactor al iniciar sesión es principalmente:", options: ["Un control correctivo", "Un control de detección", "Un letrero disuasivo", "Un control técnico preventivo"], answer: 3, why: "Detiene muchas tomas de cuentas antes de que pasen, usando tecnología." },
      { objective: "O2", q: "El riesgo se juzga por:", options: ["La probabilidad y el impacto", "El tamaño de la pantalla", "La cantidad de computadoras", "Qué tan nueva es la oficina"], answer: 0, why: "El riesgo combina qué tan probable es un daño con qué tan grave sería." },
      { objective: "O2", q: "¿A qué categoría de control pertenece una política escrita que dice quién puede ver los archivos de clientes?", options: ["Física", "Gerencial", "Técnica", "Correctiva"], answer: 1, why: "Las políticas y las decisiones sobre riesgos son controles gerenciales." },
      { objective: "O3", q: "¿Qué herramienta viene incluida en Windows para proteger contra virus?", options: ["Microsoft Defender en Seguridad de Windows", "El Visor de eventos", "Paint", "Solo el Programador de tareas"], answer: 0, why: "Microsoft Defender es el antivirus incluido en Seguridad de Windows." },
      { objective: "O3", q: "FileVault en una Mac sirve para:", options: ["Reproducir música", "Enviar correos", "Cifrar el disco", "Imprimir"], answer: 2, why: "FileVault cifra la unidad de la Mac." },
      { objective: "O3", q: "¿Dónde debes practicar el refuerzo?", options: ["En la computadora de un vecino", "En tu propia computadora", "En el servidor de tu antiguo trabajo", "En cualquier red Wi-Fi pública"], answer: 1, why: "Practica solo en dispositivos que son tuyos o que tienes permiso escrito para usar." },
      { objective: "O4", q: "¿Qué es un registro (log)?", options: ["Una lista de contraseñas", "Un tipo de virus", "Una regla del firewall", "Una lista con hora de los eventos que guarda un sistema"], answer: 3, why: "Los registros guardan eventos con su hora para que los analistas vean lo que pasó." },
      { objective: "O4", q: "¿Qué inicio de sesión es el más raro para alguien que trabaja en oficina de 9 a 5?", options: ["8:55 a. m. desde la red de la oficina", "12:30 p. m. desde la red de la oficina", "3:10 a. m. desde otro país", "4:45 p. m. desde la red de la oficina"], answer: 2, why: "Las horas raras y los lugares raros son señales de alerta." },
      { objective: "O4", q: "El evento 4625 de Windows significa:", options: ["Un inicio de sesión fallido", "Un inicio de sesión exitoso", "Un trabajo de impresión", "Una actualización de software"], answer: 0, why: "4625 es un inicio de sesión fallido; 4624 es uno exitoso." },
      { objective: "O5", q: "¿Cuál es el PRIMER paso de la respuesta a incidentes?", options: ["Recuperación", "Preparación", "Erradicación", "Lecciones aprendidas"], answer: 1, why: "La preparación va primero: los planes y contactos están listos antes de un incidente." },
      { objective: "O5", q: "Cambiar la contraseña y quitar lo que instaló el atacante es:", options: ["Detección", "Preparación", "Lecciones aprendidas", "Erradicación"], answer: 3, why: "La erradicación elimina la causa del incidente." },
      { objective: "O5", q: "Cuando la cuenta vuelve a estar segura, el equipo se reúne para preguntarse qué lo habría evitado. Esto es:", options: ["Lecciones aprendidas", "Contención", "Detección", "Análisis"], answer: 0, why: "Lecciones aprendidas es el último paso: mejorar para que no vuelva a pasar." },
      { objective: "O5", q: "Detectas un ataque que viene de una dirección externa. ¿Qué NO debes hacer?", options: ["Anotar las horas", "Informarlo a tu equipo", "Intentar entrar en la computadora del atacante", "Conservar los registros"], answer: 2, why: "Contraatacar es ilegal y no es trabajo del analista; anota e informa." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 6, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Tabla de refuerzo", objective: "O3", notYet: "Algunas de las seis configuraciones no se revisaron.", meets: "Las seis configuraciones revisadas en tu propia computadora, con resultados y fallas.", exceeds: "Cada falla tiene un arreglo y una razón, y el plan para la clave de recuperación está por escrito." },
      { name: "Revisión del registro", objective: "O4", notYet: "No detecta los fallos rápidos o el éxito que viene después.", meets: "Marca cada línea sospechosa y dice por qué.", exceeds: "También dice cómo se ve lo normal y qué datos extra lo confirmarían." },
      { name: "Tríada CIA y riesgo", objective: "O1", notYet: "No nombra ninguna parte de la tríada CIA, o nombra la equivocada.", meets: "Nombra la parte de la tríada CIA en riesgo y da una calificación de probabilidad e impacto con una razón.", exceeds: "Explica cómo cambiaría el riesgo si se agregara un control." },
      { name: "Controles", objective: "O2", notYet: "No hay control, o el control no corresponde al riesgo.", meets: "Nombra al menos un control adecuado con su categoría y su tipo.", exceeds: "Usa controles en capas y una regla de mínimo privilegio." },
      { name: "Pasos ante el incidente", objective: "O5", notYet: "Faltan pasos o están fuera de orden, o se destruyó la evidencia.", meets: "Los siete pasos en orden, cada uno con una acción, y la evidencia conservada.", exceeds: "Dice a quién se avisa en cada paso y cómo las lecciones aprendidas cambiarían la configuración." },
      { name: "Plan de estudio y de examen", objective: "O6", notYet: "Sin versión ni fecha, o faltan dominios.", meets: "Indica V7 o V8 con una razón, una fecha objetivo, cada dominio con su peso y las horas por semana.", exceeds: "Da más semanas a los dominios de mayor peso e indica dónde revisar el precio y dónde pedir ayuda con los costos." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que reservan o aprueban Security+ en un plazo de 6 meses (encuesta de seguimiento)",
      "Participantes que solicitan o empiezan un empleo en seguridad, SOC o TI en un plazo de 6 meses",
      "Participantes que dicen haber arreglado al menos una falla de seguridad en casa o en el trabajo en un plazo de 30 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Una computadora Windows o Mac que sea del participante o que pueda modificar (algunas configuraciones requieren una cuenta de administrador)",
      "Papel y lápiz, o un documento, para las tablas, la nota de incidente y el plan",
      "Las páginas oficiales de CompTIA Security+ V7 y V8",
      "Unos 90 minutos en total, en sesiones cortas, más tiempo de estudio continuo para el examen"
    ],
    facilitatorNotes: [
      "Di la regla al inicio de cada sesión: solo defensivo, solo dispositivos propios y datos inventados; probar sistemas ajenos sin permiso escrito puede ser un delito.",
      "Revisa las páginas oficiales de Security+ antes de cada grupo; las fechas de retiro de la V7 y de lanzamiento de la V8 pueden cambiar.",
      "En las computadoras compartidas del laboratorio, puede que los participantes no vean algunas configuraciones; deja que completen la Lección 4 en casa o como demostración.",
      "Haz la Lección 6 como un ejercicio de mesa: una persona lee el registro y el grupo recorre en voz alta cada paso de la respuesta.",
      "Recuerda a los participantes que este curso los prepara pero no otorga Security+; indícales programas locales que ayudan con el costo del examen.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
