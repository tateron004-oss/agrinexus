"use strict";

// Koach Learn course (shared), Spanish translation of shared/intro-cybersecurity.js. See scripts/koachlearn-courses/README.md, "Translations".

const CISA_PASSWORDS = { name: "CISA Secure Our World: Usa contraseñas seguras", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA: Secure Our World (Protejamos nuestro mundo)", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC: Cómo reconocer y evitar las estafas de phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity-es",
  lang: "es",
  translationOf: "intro-cybersecurity",
  category: "Youth",
  name: "Introducción a la ciberseguridad",
  skills: "Explicar la tríada CIA, Reconocer ataques comunes, Detectar y denunciar el phishing, Proteger cuentas con contraseñas seguras y MFA, Mantener los aparatos actualizados, Responder a un incidente",
  outcome: "hacer una revisión de seguridad de tus propias cuentas y aparatos: poner una contraseña segura y única con un administrador de contraseñas, activar la autenticación multifactor, actualizar tus programas, identificar un mensaje de phishing y denunciarlo, y seguir un plan sencillo si hackean una cuenta.",
  about: [
    "Ciberseguridad significa proteger computadoras, teléfonos, cuentas e información de los ataques. Importa para la cuenta escolar de un estudiante, el acceso al banco de una familia y la lista de clientes de un pequeño negocio, y también es un campo laboral que está creciendo.",
    "En el Capítulo 1 aprendes los objetivos básicos de la seguridad, los ataques más comunes y cómo detectar el phishing. En el Capítulo 2 proteges tus propias cuentas y aparatos y aprendes qué hacer cuando algo sale mal.",
    "Los pasos siguen los cuatro pasos básicos que enseña a todos la CISA, la Agencia de Ciberseguridad y Seguridad de Infraestructura de EE. UU. Cada lección dura unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz una revisión de seguridad de una cuenta importante (lo mejor es el correo): ponle una contraseña segura y única guardada en un administrador de contraseñas, activa la autenticación multifactor, revisa que tu teléfono o computadora esté actualizado y escribe un plan de cinco líneas sobre lo que harías si hackearan esa cuenta. Luego busca un mensaje sospechoso en tu bandeja de entrada o tus mensajes de texto y anota las señales de phishing que muestra.",
  chapters: [
    {
      name: "Capítulo 1: Amenazas y cómo funcionan los ataques",
      lessons: [
        {
          title: "Qué protege la ciberseguridad",
          minutes: 4,
          goal: "Explicar los tres objetivos de la seguridad con la tríada CIA.",
          text: [
            "Los expertos en seguridad suelen usar tres palabras, llamadas la tríada CIA (por sus siglas en inglés). Confidencialidad: solo las personas correctas pueden ver la información, como tus calificaciones o tu expediente médico. Integridad: la información es correcta y nadie que no debía la ha cambiado, como el saldo de un banco. Disponibilidad: la información y los sistemas funcionan cuando los necesitas, como un sitio web que no se cae.",
            "Todo ataque daña al menos uno de los tres. Alguien que lee tus mensajes rompe la confidencialidad. Alguien que cambia la cantidad de un pago rompe la integridad. Un ransomware que bloquea las computadoras de un hospital rompe la disponibilidad.",
            "Las personas que atacan se llaman actores de amenaza. Van desde estafadores que buscan dinero rápido hasta grupos criminales organizados. La mayoría de los ataques a personas comunes no son personales; los atacantes van tras quien sea más fácil."
          ],
          words: [["Ciberseguridad", "proteger computadoras, teléfonos, cuentas e información de los ataques."], ["Tríada CIA", "confidencialidad, integridad y disponibilidad: los tres objetivos de la seguridad."], ["Actor de amenaza", "una persona o grupo que ataca computadoras o cuentas."]],
          slides: [
            { title: "La tríada CIA", bullets: ["Confidencialidad: solo las personas correctas la ven", "Integridad: se mantiene correcta", "Disponibilidad: funciona cuando la necesitas"] },
            { title: "Los ataques rompen uno de los tres", bullets: ["Leer tus mensajes: confidencialidad", "Cambiar un pago: integridad", "Bloquear computadoras: disponibilidad"] },
            { title: "Quién ataca", bullets: ["Estafadores y grupos criminales", "Van tras quien sea más fácil", "Los buenos hábitos te hacen un blanco más difícil"] }
          ],
          tryIt: "Piensa en una aplicación que usas, como el portal de tu escuela, la aplicación de tu banco o la de tus horarios de trabajo. Escribe un ejemplo de lo que significan para ella la confidencialidad, la integridad y la disponibilidad.",
          youCanNow: "explicar la tríada CIA y decir qué objetivo rompe un ataque."
        },
        {
          title: "Ataques comunes: malware, ransomware y robo de cuentas",
          minutes: 5,
          goal: "Nombrar los ataques más comunes y cómo suele entrar cada uno.",
          text: [
            "El malware es software dañino. A menudo llega en un archivo adjunto de correo, una aplicación falsa, un juego pirata o una ventana falsa de \"actualización\". El ransomware es un malware que bloquea tus archivos y exige un pago para desbloquearlos.",
            "El robo de cuenta ocurre cuando alguien entra en tu cuenta. Las formas más comunes son una contraseña robada o adivinada, una contraseña repetida de otro sitio que sufrió una filtración, o engañarte para que compartas un código de un solo uso.",
            "La ingeniería social significa engañar a una persona en vez de romper la tecnología. Alguien que llama haciéndose pasar por soporte técnico, un mensaje falso de una entrega o un mensaje de un \"amigo\" que pide un código son ingeniería social. Las personas suelen ser la forma más fácil de entrar; por eso tus hábitos importan."
          ],
          words: [["Malware", "software dañino que puede espiar, robar o dañar."], ["Ransomware", "malware que bloquea archivos y exige un pago."], ["Filtración de datos", "cuando roban la información que guarda una empresa, como contraseñas."], ["Ingeniería social", "engañar a una persona para que dé acceso o información."]],
          slides: [
            { title: "Malware y ransomware", bullets: ["Software dañino", "Llega en adjuntos, aplicaciones falsas, juegos piratas", "El ransomware bloquea archivos y exige un pago"] },
            { title: "Robo de cuenta", bullets: ["Contraseñas robadas o adivinadas", "Contraseñas repetidas de un sitio filtrado", "Engaños para compartir un código de un solo uso"] },
            { title: "Ingeniería social", bullets: ["Engañar a personas, no a máquinas", "Llamadas falsas de soporte, mensajes falsos de entregas", "Cuentas hackeadas de amigos que piden códigos"] }
          ],
          tryIt: "Para cada ataque (malware, ransomware, robo de cuenta, ingeniería social), escribe una forma real en que podría llegar a ti o a tu familia, y un hábito que lo detendría.",
          youCanNow: "nombrar los ataques comunes y cómo suelen entrar."
        },
        {
          title: "Detectar y denunciar el phishing",
          minutes: 5,
          goal: "Identificar un mensaje de phishing y denunciarlo de la forma correcta.",
          text: [
            "El phishing es un correo, mensaje de texto o mensaje falso que intenta que hagas clic en un enlace, abras un archivo o compartas información. La FTC (la Comisión Federal de Comercio de EE. UU.) menciona trucos comunes: decir que hay actividad sospechosa en tu cuenta, un problema con tu pago, pedirte que confirmes tus datos personales, una factura que no reconoces, un enlace para pagar, un reembolso del gobierno o un cupón de algo gratis.",
            "Revisa la dirección real de quien envía, no solo el nombre. En una computadora, pasa el ratón sobre los enlaces (o mantenlos presionados en un teléfono) para ver adónde llevan de verdad. Fíjate en la prisa: \"actúa ahora o tu cuenta se cerrará\".",
            "Si no conoces a quien envía, denúncialo y bórralo. Si sí tienes una cuenta con esa empresa, comunícate con ella por un sitio web o un número que ya sabes que es real, no el del mensaje. La FTC dice que reenvíes los correos de phishing a reportphishing@apwg.org, reenvíes los mensajes de texto de phishing al SPAM (7726) y lo denuncies en ReportFraud.ftc.gov. En la escuela o el trabajo, usa el botón \"Denunciar phishing\" o avisa al equipo de informática."
          ],
          steps: ["Revisa la dirección real de quien envía.", "Pasa el ratón o mantén presionado el enlace para ver adónde lleva.", "Fíjate en la prisa, las amenazas o los premios.", "No hagas clic, no respondas ni abras adjuntos.", "Comunícate con la empresa por un número o sitio que ya conoces.", "Denuncia: correos a reportphishing@apwg.org, mensajes de texto al 7726 y ReportFraud.ftc.gov; en la escuela o el trabajo avisa a informática."],
          words: [["Phishing", "un mensaje falso que intenta engañarte para que hagas clic, abras un archivo o compartas información."], ["Smishing", "phishing por mensaje de texto."], ["Suplantación (spoofing)", "falsificar el nombre, número o dirección de quien envía para que un mensaje parezca real."]],
          sources: [FTC_PHISHING, { name: "FTC: ReportFraud (denunciar un fraude)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Trucos comunes de phishing (FTC)", bullets: ["\"Actividad sospechosa\" o \"problema con el pago\"", "\"Confirma tus datos\"", "Facturas desconocidas, reembolsos, cupones gratis"] },
            { title: "Revisa antes de hacer clic", bullets: ["La dirección real de quien envía, no solo el nombre", "Pasa el ratón o mantén presionados los enlaces", "La prisa y las amenazas son señales de alerta"] },
            { title: "Comunícate tú con la empresa", bullets: ["Usa un sitio o número que ya conoces", "Nunca el del mensaje"] },
            { title: "Denúncialo", bullets: ["Correos: reportphishing@apwg.org", "Mensajes de texto: reenvía al 7726 (SPAM)", "ReportFraud.ftc.gov; en el trabajo o la escuela, avisa a informática"] }
          ],
          tryIt: "Abre tu carpeta de spam o correo no deseado (o tus mensajes de texto) y busca un mensaje sospechoso. Sin hacer clic en nada, anota cada señal de phishing que veas y luego denúncialo o bórralo.",
          youCanNow: "detectar un mensaje de phishing, evitar sus trampas y denunciarlo de la forma correcta."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Amenazas y cómo funcionan los ataques",
        questions: [
          { q: "Un ransomware bloquea las computadoras de una clínica y el personal no puede usarlas. ¿Qué objetivo se rompe?", options: ["Confidencialidad", "Ninguno", "Integridad", "Disponibilidad"], answer: 3, why: "Disponibilidad significa que los sistemas funcionan cuando los necesitas." },
          { q: "Alguien cambia la cantidad de una solicitud de pago. ¿Qué objetivo se rompe?", options: ["Velocidad", "Disponibilidad", "Confidencialidad", "Integridad"], answer: 3, why: "Integridad significa que la información se mantiene correcta." },
          { q: "Alguien llama, dice que es de informática y necesita el código que te acaban de enviar por mensaje. Esto es:", options: ["Trabajo normal de informática", "Una actualización de software", "Ingeniería social", "Una copia de seguridad"], answer: 2, why: "Engañar a una persona para que dé un código es ingeniería social." },
          { q: "Usaste la misma contraseña en un sitio de juegos que sufrió una filtración. ¿Cuál es el riesgo?", options: ["Ninguno", "Tu teléfono se rompe", "Tu pantalla se apaga", "Los atacantes pueden probar esa contraseña en tus otras cuentas"], answer: 3, why: "Las contraseñas repetidas de filtraciones llevan al robo de cuentas." },
          { q: "Un correo dice que tu cuenta bancaria está bloqueada y trae un enlace. El paso más seguro es:", options: ["Hacer clic rápido en el enlace", "Responder con tu contraseña", "Ir al sitio real del banco o llamar a un número que conoces", "Reenviarlo a tus amigos"], answer: 2, why: "Comunícate con la empresa por un sitio o número que ya sabes que es real." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger cuentas y aparatos",
      lessons: [
        {
          title: "Contraseñas seguras y un administrador de contraseñas",
          minutes: 5,
          goal: "Crear una contraseña segura y única y guardarla en un administrador de contraseñas.",
          text: [
            "La CISA dice que una contraseña segura es larga (al menos 16 caracteres), aleatoria y única (distinta para cada cuenta). Una frase de contraseña de cuatro a siete palabras sin relación entre sí, como el ejemplo de la CISA \"HorsePurpleHatRun\" (en español podría ser \"CaballoMoradoSombreroCorre\"), es larga y fácil de recordar.",
            "Nadie puede recordar una contraseña segura distinta para cada cuenta, así que usa un administrador de contraseñas. Crea y guarda las contraseñas por ti; tú solo recuerdas una contraseña principal segura. La CISA señala que algunos son gratis, incluidos los que vienen en los navegadores web y los teléfonos.",
            "Nunca compartas tus contraseñas, nunca las escribas en una herramienta de IA y cambia una contraseña enseguida si una empresa te avisa que estuvo en una filtración de datos."
          ],
          steps: ["Abre un administrador de contraseñas: el de tu navegador o teléfono, o una aplicación confiable.", "Elige tu cuenta más importante, normalmente el correo.", "Usa el administrador para crear una contraseña larga y aleatoria, o haz una frase de 4 a 7 palabras.", "Guárdala en el administrador.", "Cambia la contraseña de la cuenta y prueba a iniciar sesión."],
          words: [["Administrador de contraseñas", "una aplicación que crea y guarda tus contraseñas de forma segura."], ["Frase de contraseña", "una contraseña hecha de varias palabras sin relación entre sí."], ["Contraseña única", "una contraseña que se usa para una sola cuenta."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Contraseñas seguras (CISA)", bullets: ["Larga: al menos 16 caracteres", "Aleatoria", "Única: distinta para cada cuenta"] },
            { title: "Frases de contraseña", bullets: ["De 4 a 7 palabras sin relación", "Ejemplo: CaballoMoradoSombreroCorre"] },
            { title: "Usa un administrador de contraseñas", bullets: ["Crea y guarda contraseñas", "Tú recuerdas una contraseña principal", "Algunos son gratis, en navegadores y teléfonos"] }
          ],
          tryIt: "Abre el administrador de contraseñas de tu teléfono o navegador. Úsalo para crear y guardar una contraseña nueva y segura para una cuenta que te importe.",
          youCanNow: "crear una contraseña segura y única y guardarla en un administrador de contraseñas."
        },
        {
          title: "Autenticación multifactor y actualizaciones",
          minutes: 5,
          goal: "Activar la autenticación multifactor y actualizar un aparato.",
          text: [
            "La autenticación multifactor (MFA) pide una segunda prueba después de tu contraseña, como un código de una aplicación de autenticación, un aviso en tu teléfono, una llave de seguridad o una llave de acceso (\"passkey\"). Aunque alguien robe tu contraseña, no puede entrar sin el segundo factor. Actívala primero en el correo, el banco, la escuela y las redes sociales. La CISA dice que cualquier MFA es mejor que nada, y que la más fuerte es la MFA resistente al phishing (FIDO, que usan las llaves de acceso y las llaves de seguridad), que es más difícil de engañar que un código por mensaje de texto.",
            "Nunca compartas un código de MFA. Si recibes un código o un aviso de inicio de sesión que no pediste, alguien puede tener tu contraseña: recházalo y cambia tu contraseña.",
            "Las actualizaciones arreglan agujeros de seguridad que los atacantes ya conocen. Activa las actualizaciones automáticas en tu teléfono, computadora, navegador y aplicaciones, y reinicia cuando te lo pidan. La CISA pone la actualización del software como uno de sus cuatro pasos básicos, junto con evitar el phishing, usar contraseñas seguras y la MFA."
          ],
          steps: ["Abre la configuración de seguridad de tu cuenta de correo.", "Busca verificación en dos pasos, autenticación de dos factores o multifactor.", "Sigue los pasos; una llave de acceso, una llave de seguridad o una aplicación de autenticación es más difícil de engañar que un código por mensaje, pero cualquier MFA es mejor que nada.", "Guarda los códigos de respaldo en un lugar seguro y fuera de internet.", "Abre la configuración de tu teléfono o computadora y activa las actualizaciones automáticas."],
          words: [["Autenticación multifactor (MFA)", "una segunda prueba, después de tu contraseña, de que de verdad eres tú."], ["Aplicación de autenticación", "una aplicación que muestra códigos de inicio de sesión que cambian cada pocos segundos."], ["Llave de acceso (passkey)", "una forma de iniciar sesión que usa tu aparato y tu cara, huella o PIN en lugar de una contraseña."], ["Actualización / parche", "un arreglo del fabricante que cierra agujeros de seguridad."]],
          sources: [CISA_SOW, { name: "CISA: Más que una contraseña (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "MFA: un segundo candado", bullets: ["Contraseña + código, aviso, llave o llave de acceso", "Una contraseña robada no basta", "Actívala en correo, banco, escuela y redes"] },
            { title: "¿Un código o aviso inesperado?", bullets: ["Nunca lo compartas", "Recházalo", "Cambia tu contraseña"] },
            { title: "Actualiza todo", bullets: ["Teléfono, computadora, navegador, aplicaciones", "Activa las actualizaciones automáticas", "Reinicia cuando te lo pidan"] }
          ],
          tryIt: "Activa la MFA en tu cuenta de correo y guarda tus códigos de respaldo. Luego busca actualizaciones en tu teléfono o computadora e instala las que estén pendientes.",
          youCanNow: "activar la MFA y mantener tus aparatos actualizados."
        },
        {
          title: "Cuando algo sale mal",
          minutes: 5,
          goal: "Seguir un plan sencillo si hackean una cuenta o un aparato se infecta.",
          text: [
            "Señales de problemas: no puedes iniciar sesión, tus amigos reciben mensajes raros de tu parte, ves inicios de sesión o compras que no hiciste, o tu aparato de pronto muestra ventanas emergentes o va muy lento.",
            "Si hackean una cuenta: desde un aparato seguro, cambia la contraseña, activa la MFA, cierra todas las demás sesiones (la mayoría de las cuentas tienen esto en la configuración de seguridad) y revisa el correo y el teléfono de recuperación. Avisa a tus contactos que no hagan clic en mensajes tuyos. Si hay dinero de por medio, llama a tu banco al número que aparece en tu tarjeta.",
            "Si hiciste clic en un enlace malo o crees que un aparato está infectado, la FTC dice que actualices tu software de seguridad, hagas un análisis y elimines lo que marque. En la escuela o el trabajo, avisa a informática enseguida; avisar rápido no es meterse en problemas, es limitar el daño. Denuncia el fraude en ReportFraud.ftc.gov o en ic3.gov del FBI."
          ],
          steps: ["Usa un aparato seguro.", "Cambia la contraseña y activa la MFA.", "Cierra todas las demás sesiones.", "Revisa el correo y el teléfono de recuperación.", "Avisa a tus contactos; llama a tu banco si hay dinero de por medio.", "Actualiza el software de seguridad y haz un análisis.", "Avisa a informática en la escuela o el trabajo; denuncia el fraude en ReportFraud.ftc.gov o ic3.gov."],
          words: [["Incidente", "un problema de seguridad, como una cuenta hackeada o un aparato infectado."], ["Sesión", "un lugar donde tienes la sesión iniciada, como un teléfono o un navegador."], ["Datos de recuperación", "el correo y el teléfono que usa un servicio para ayudarte a volver a entrar en tu cuenta."]],
          sources: [FTC_PHISHING, { name: "Centro de Denuncias de Delitos en Internet del FBI (IC3)", url: "https://www.ic3.gov" }, { name: "FTC: ReportFraud (denunciar un fraude)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Señales de problemas", bullets: ["No puedes iniciar sesión", "Tus amigos reciben mensajes raros tuyos", "Inicios de sesión o compras que no hiciste"] },
            { title: "Plan para una cuenta hackeada", bullets: ["Cambia la contraseña, activa la MFA", "Cierra todas las sesiones", "Revisa el correo y el teléfono de recuperación"] },
            { title: "Aparato infectado o dinero de por medio", bullets: ["Actualiza el software de seguridad y haz un análisis", "Llama a tu banco al número de tu tarjeta"] },
            { title: "Avisa rápido", bullets: ["Avisa a informática en la escuela o el trabajo", "ReportFraud.ftc.gov o ic3.gov"] }
          ],
          tryIt: "Tarea final: haz una revisión de seguridad de tu correo (contraseña segura en un administrador, MFA activada, aparato actualizado), escribe tu plan de cinco líneas para una cuenta hackeada y anota las señales de phishing de un mensaje sospechoso.",
          youCanNow: "proteger una cuenta de principio a fin y responder con calma si alguna vez la hackean."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Proteger cuentas y aparatos",
        questions: [
          { q: "Según la CISA, una contraseña segura es:", options: ["Corta y fácil", "La misma para todas las cuentas", "El nombre de tu mascota", "Larga, aleatoria y única"], answer: 3, why: "La CISA dice larga (al menos 16 caracteres), aleatoria y única." },
          { q: "¿Qué hace un administrador de contraseñas?", options: ["Comparte tus contraseñas con tus amigos", "Borra tus cuentas", "Crea y guarda contraseñas seguras por ti", "Desactiva la MFA"], answer: 2, why: "Tú recuerdas una contraseña principal; él guarda las demás." },
          { q: "Recibes un aviso de MFA que no pediste. ¿Qué haces?", options: ["Lo apruebas", "Le mandas el código a un amigo", "Lo ignoras para siempre", "Lo rechazas y cambias tu contraseña"], answer: 3, why: "Un aviso inesperado significa que alguien puede tener tu contraseña." },
          { q: "¿Por qué instalar las actualizaciones?", options: ["Arreglan agujeros de seguridad que los atacantes conocen", "Hacen el teléfono más pesado", "Borran tus fotos", "Son solo para juegos"], answer: 0, why: "Las actualizaciones tapan agujeros de seguridad conocidos." },
          { q: "Hackearon tu cuenta. Después de cambiar la contraseña, un paso clave es:", options: ["Publicar tu nueva contraseña", "Borrar tus contactos", "Desactivar las actualizaciones", "Cerrar todas las demás sesiones"], answer: 3, why: "Cerrar todas las sesiones saca al atacante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la ciberseguridad",
    questions: [
      { q: "La ciberseguridad es:", options: ["Proteger aparatos, cuentas e información de los ataques", "Hacer sitios web coloridos", "Un tipo de teléfono", "Un videojuego"], answer: 0, why: "Protege aparatos, cuentas e información." },
      { q: "En la tríada CIA, \"confidencialidad\" significa:", options: ["El sistema es rápido", "La información tiene copia de seguridad", "Solo las personas correctas pueden ver la información", "Hay electricidad"], answer: 2, why: "La confidencialidad mantiene la información privada." },
      { q: "Un sitio web se cae y los clientes no pueden usarlo. ¿Qué objetivo se daña?", options: ["Integridad", "Confidencialidad", "Disponibilidad", "Autenticación"], answer: 2, why: "Disponibilidad significa que funciona cuando se necesita." },
      { q: "El malware es:", options: ["Una actualización útil", "Un cortafuegos", "Un administrador de contraseñas", "Software dañino"], answer: 3, why: "El malware es software dañino." },
      { q: "El ransomware:", options: ["Hace más rápida tu computadora", "Bloquea archivos y exige un pago", "Hace copia de tus fotos", "Bloquea el spam"], answer: 1, why: "El ransomware secuestra los archivos." },
      { q: "La ingeniería social es:", options: ["Construir puentes", "Engañar a las personas para que den acceso o información", "Actualizar aplicaciones", "Solo una materia escolar"], answer: 1, why: "Ataca a las personas en vez de a la tecnología." },
      { q: "¿Cuál es una forma común de robar cuentas?", options: ["Repetir una contraseña que se filtró", "Usar MFA", "Instalar actualizaciones", "Usar un administrador de contraseñas"], answer: 0, why: "Las contraseñas filtradas y repetidas dejan entrar a los atacantes en otras cuentas." },
      { q: "El phishing es:", options: ["Un mensaje falso que intenta engañarte", "Una aplicación de pesca", "Un método de copia de seguridad", "Un tipo de contraseña"], answer: 0, why: "El phishing te engaña para que hagas clic o compartas datos." },
      { q: "¿Cuál es una señal de phishing que menciona la FTC?", options: ["Un mensaje que esperabas de un amigo", "Un recibo de algo que compraste", "Un aviso de actividad sospechosa con un enlace para arreglarlo", "El boletín de la escuela"], answer: 2, why: "Los avisos falsos de \"actividad sospechosa\" son un truco común." },
      { q: "Antes de hacer clic en un enlace de un correo en una computadora, puedes:", options: ["Pasar el ratón sobre él para ver adónde lleva de verdad", "Hacer clic dos veces", "Responder con tu contraseña", "Apagar la computadora"], answer: 0, why: "Pasar el ratón muestra la dirección web real." },
      { q: "¿Adónde dice la FTC que reenvíes los mensajes de texto de phishing?", options: ["A todos tus contactos", "Al SPAM (7726)", "A quien lo envió", "Al 911"], answer: 1, why: "Reenvía los mensajes de texto de phishing al 7726 (SPAM)." },
      { q: "En el trabajo recibes un correo sospechoso. ¿Qué haces?", options: ["Haces clic para ver si es real", "Lo denuncias con el botón de phishing o avisas a informática", "Lo reenvías a tus compañeros", "Respondes y preguntas"], answer: 1, why: "Informática puede bloquearlo para todos." },
      { q: "El largo mínimo de la CISA para una contraseña segura es:", options: ["Al menos 16 caracteres", "4 caracteres", "Exactamente 8 caracteres", "Cualquier largo"], answer: 0, why: "La CISA dice al menos 16 caracteres; más larga es más segura." },
      { q: "¿Cuál es una buena frase de contraseña?", options: ["password123", "Tu fecha de cumpleaños", "CaballoMoradoSombreroCorre", "abc"], answer: 2, why: "Varias palabras sin relación la hacen larga y difícil de adivinar." },
      { q: "Con un administrador de contraseñas solo necesitas recordar:", options: ["Todas las contraseñas", "Una contraseña principal segura", "Ninguna contraseña y ningún aparato", "La contraseña de tu amigo"], answer: 1, why: "El administrador guarda las demás." },
      { q: "La MFA te protege porque:", options: ["Una contraseña robada sola no basta para entrar", "Hace tu contraseña más corta", "Comparte tu inicio de sesión", "Apaga tu teléfono"], answer: 0, why: "La MFA necesita una segunda prueba." },
      { q: "¿Qué tipo de MFA llama la CISA la más fuerte?", options: ["Escribir el código en una nota adhesiva", "La MFA resistente al phishing, como una llave de acceso o una llave de seguridad", "Decirle el código a un amigo", "Ningún segundo factor"], answer: 1, why: "La CISA dice que la MFA resistente al phishing es la meta; las llaves de acceso y de seguridad son más difíciles de engañar que los códigos por mensaje." },
      { q: "Los cuatro pasos básicos de la CISA son: evitar el phishing, contraseñas seguras, MFA y:", options: ["Comprar un teléfono nuevo", "Actualizar el software", "Apagar el Wi-Fi para siempre", "Compartir contraseñas"], answer: 1, why: "Actualizar el software es el cuarto paso básico." },
      { q: "Crees que hiciste clic en un enlace malo. La FTC dice que:", options: ["Lo ignores", "Actualices el software de seguridad, hagas un análisis y elimines lo que marque", "Envíes el enlace a tus amigos", "Le pagues a quien te lo pida"], answer: 1, why: "Un análisis encuentra y elimina el software dañino." },
      { q: "¿Dónde puedes denunciar un fraude en línea ante el FBI?", options: ["En ic3.gov", "En un comentario de redes sociales", "En el correo del estafador", "En ningún lugar"], answer: 0, why: "El IC3 es el Centro de Denuncias de Delitos en Internet del FBI." }
    ]
  }
};
