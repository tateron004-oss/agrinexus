"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-everyday-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-everyday-ai-tools-es",
  lang: "es",
  translationOf: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Herramientas de IA para el día a día",
  skills: "Poner recordatorios con la voz, Obtener indicaciones de transporte público, Leer y traducir con la cámara, Encontrar ayuda local, Escribir mensajes diarios con IA, Hacer una lista de documentos",
  outcome: "usar las herramientas de IA gratis de un teléfono inteligente para llegar a tiempo a una cita: obtener indicaciones en autobús o tren, poner un recordatorio, hacer una lista de lo que debes llevar y escribir un mensaje corto si vas tarde.",
  about: [
    "Este curso es para personas que regresan a casa y quieren usar un teléfono inteligente para manejar la vida diaria: citas, moverse por la ciudad, leer formularios, encontrar ayuda y mantenerse en contacto.",
    "Vas a usar herramientas gratis que ya vienen en la mayoría de los teléfonos: el asistente de voz, los mapas, las herramientas de lectura de la cámara y un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini. Cada ejemplo viene de la vida real después de salir: entrevistas de trabajo, oficinas de identificación, citas de vivienda y familia.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y haz la tarea de \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Nunca necesitas escribir un número de caso, un número de identificación ni ningún dato privado para hacer estas tareas."
  ],
  finalTask: "Planea cómo llegar a una cita real (una entrevista de trabajo, una oficina de identificación o una visita de vivienda): obtén indicaciones en transporte público o a pie, pon un recordatorio para saber cuándo salir, pídele a la IA una lista de lo que debes llevar y pídele que te ayude a escribir un mensaje corto y amable para enviar si vas tarde.",
  chapters: [
    {
      name: "Capítulo 1: Tu teléfono como ayudante",
      lessons: [
        {
          title: "Recordatorios y alarmas con la voz",
          minutes: 5,
          goal: "Poner un recordatorio para una cita hablándole a tu teléfono.",
          text: [
            "Faltar a una cita te puede costar una entrevista de trabajo, un lugar para vivir o una cita de control. Tu teléfono puede acordarse por ti.",
            "La mayoría de los teléfonos tienen un asistente de voz: Siri en iPhone, y Google Assistant o Gemini en Android. Actívalo diciendo \"Oye Siri\" o \"Hey Google\", o manteniendo presionado el botón lateral o el de inicio. Luego di: \"Recuérdame mi entrevista en Fresh Foods el martes a las 9 am.\" \"Pon una alarma a las 6:30 am mañana.\"",
            "Pon dos recordatorios para todo lo importante: uno el día anterior y otro cuando sea hora de salir. Que los títulos de los recordatorios sean generales; no necesitas poner datos privados en ellos."
          ],
          steps: ["Activa el asistente de voz.", "Di qué es, el día y la hora.", "Agrega un segundo recordatorio para la hora de salir.", "Mira la pantalla para comprobar que quedó puesto."],
          words: [["Asistente de voz", "un ayudante que viene en tu teléfono y hace tareas sencillas cuando le hablas."], ["Recordatorio", "un mensaje que tu teléfono te muestra a la hora que tú eliges."]],
          slides: [
            { title: "Tu teléfono puede acordarse por ti", bullets: ["Entrevistas, oficina de identificación, visitas de vivienda", "Siri, Google Assistant o Gemini"] },
            { title: "Dilo", bullets: ["\"Recuérdame mi entrevista el martes a las 9 am.\"", "\"Pon una alarma a las 6:30 am mañana.\""] },
            { title: "Dos recordatorios para lo importante", bullets: ["Uno el día anterior", "Otro cuando sea hora de salir", "Títulos generales"] }
          ],
          tryIt: "Pon con la voz un recordatorio para una cita real, o una de práctica, y un segundo recordatorio para la hora en que debes salir.",
          youCanNow: "poner recordatorios y alarmas para tus citas con la voz."
        },
        {
          title: "Moverte con mapas y transporte público",
          minutes: 6,
          goal: "Obtener indicaciones en autobús, tren o a pie y saber cuándo salir.",
          text: [
            "Las aplicaciones de mapas como Google Maps y Apple Maps te muestran cómo llegar a cualquier lugar en autobús, tren, a pie o en auto, y cuánto vas a tardar.",
            "Abre la aplicación de mapas, escribe la dirección en el cuadro de búsqueda y toca Cómo llegar (o Indicaciones). Elige el símbolo de autobús o tren para el transporte público, o la persona caminando. Verás qué autobús tomar, dónde tomarlo y cuándo pasa. También puedes poner la hora a la que necesitas llegar, y la aplicación te dice cuándo salir.",
            "Planea llegar de 10 a 15 minutos antes. Los autobuses pueden retrasarse. Guarda las direcciones que visitas seguido, como tu casa o tu trabajo, para tenerlas a un toque. Algunas agencias de transporte también tienen sus propias aplicaciones con los horarios de los autobuses en vivo."
          ],
          steps: ["Abre tu aplicación de mapas.", "Escribe la dirección y toca Cómo llegar.", "Elige transporte público (autobús o tren) o a pie.", "Pon tu hora de llegada para ver cuándo salir.", "Planea llegar de 10 a 15 minutos antes."],
          words: [["Transporte público", "el transporte para todos, como autobuses y trenes."], ["Hora de llegada", "la hora a la que necesitas estar ahí."]],
          slides: [
            { title: "Los mapas conocen el camino", bullets: ["Google Maps o Apple Maps", "Autobús, tren, a pie o en auto"] },
            { title: "Obtén indicaciones", bullets: ["Escribe la dirección, toca Cómo llegar", "Elige transporte público o a pie", "Mira qué autobús y a qué hora"] },
            { title: "Llega a tiempo", bullets: ["Pon tu hora de llegada", "Llega de 10 a 15 minutos antes", "Guarda las direcciones que usas seguido"] }
          ],
          tryIt: "Obtén indicaciones en transporte público o a pie para ir a un lugar real al que necesitas ir, como un American Job Center (centro de empleo), el DMV (la oficina de vehículos motorizados) o una biblioteca. Pon la hora de llegada y anota cuándo debes salir.",
          youCanNow: "obtener indicaciones en transporte público y a pie y calcular cuándo salir."
        },
        {
          title: "Leer y traducir con la cámara",
          minutes: 5,
          goal: "Usar la cámara de tu teléfono para leer, copiar o traducir texto impreso.",
          text: [
            "La cámara de tu teléfono puede leer palabras impresas. Con Google Lens (en la aplicación de Google y en muchos teléfonos Android) o con la función de texto de la cámara del iPhone, puedes apuntar a un volante, un letrero o un formulario y copiar el texto, buscarlo o traducirlo.",
            "Abre la cámara o Google Lens y apunta a las palabras. Toca el botón de texto o el texto resaltado, y luego elige Copiar, Escuchar, Traducir o Buscar. Esto sirve para copiar un número de teléfono de un volante o leer instrucciones en otro idioma.",
            "No escanees en herramientas de IA documentos con números privados, como tu tarjeta del Seguro Social o papeles del tribunal. Usa estas herramientas para cosas públicas como volantes, letreros y anuncios de empleo."
          ],
          steps: ["Abre la cámara o Google Lens.", "Apunta a las palabras impresas.", "Toca el botón de texto o las palabras resaltadas.", "Elige Copiar, Escuchar, Traducir o Buscar.", "No escanees documentos privados."],
          words: [["Google Lens", "una herramienta gratis de Google que usa tu cámara para leer, traducir y buscar lo que ve."], ["Traducir", "pasar palabras de un idioma a otro."]],
          slides: [
            { title: "La cámara puede leer", bullets: ["Google Lens o la cámara del iPhone", "Volantes, letreros, anuncios de empleo"] },
            { title: "Lo que puedes hacer", bullets: ["Copiar un número de teléfono", "Escuchar las palabras en voz alta", "Traducir o buscar"] },
            { title: "Solo cosas públicas", bullets: ["Nada de tarjetas del Seguro Social", "Nada de papeles del tribunal ni formularios privados"] }
          ],
          tryIt: "Apunta tu cámara o Google Lens a un volante, un letrero o un anuncio de empleo. Copia un número de teléfono o una dirección a una nota o a tus contactos.",
          youCanNow: "usar tu cámara para copiar, escuchar o traducir texto impreso."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu teléfono como ayudante",
        questions: [
          { q: "¿Cuál es la mejor forma de no faltar a una entrevista de trabajo?", options: ["Escribirla en tu mano", "Esperar acordarte", "Poner un recordatorio el día anterior y otro para la hora de salir", "Pedirle a un desconocido que te lo recuerde"], answer: 2, why: "Dos recordatorios cubren la preparación y la salida a tiempo." },
          { q: "En una aplicación de mapas, ¿qué opción muestra las rutas de autobús y tren?", options: ["Transporte público", "Satélite", "Tráfico", "Configuración"], answer: 0, why: "Transporte público muestra el transporte para todos." },
          { q: "¿Con cuánto tiempo de anticipación deberías planear llegar a una cita?", options: ["Una hora tarde", "Justo a la hora", "5 minutos tarde", "De 10 a 15 minutos antes"], answer: 3, why: "Los autobuses pueden retrasarse; llegar antes es más seguro." },
          { q: "¿Qué puede hacer Google Lens con un volante?", options: ["Imprimir dinero", "Copiar, leer en voz alta o traducir su texto", "Llamar a tu familia", "Firmar formularios por ti"], answer: 1, why: "Lens lee el texto que ve la cámara." },
          { q: "¿Qué NO deberías escanear en una herramienta de IA?", options: ["Un volante de empleo", "Tu tarjeta del Seguro Social", "Un letrero de la calle", "Un horario de autobuses"], answer: 1, why: "Los documentos privados se quedan fuera de las herramientas de IA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Resolver cosas",
      lessons: [
        {
          title: "Encontrar ayuda local",
          minutes: 5,
          goal: "Encontrar servicios locales de vivienda, comida, empleo o transporte.",
          text: [
            "Hay ayuda disponible, pero encontrarla puede ser difícil. El 211 es un servicio en todo Estados Unidos que te conecta con ayuda local para vivienda, comida, transporte, atención médica y más. Llama al 211 o busca tu 211 local en 211.org. Las llamadas son confidenciales y puedes quedarte en el anonimato.",
            "Un asistente de IA te puede ayudar a prepararte: \"Acabo de regresar a casa y vivo en Columbus, Ohio. ¿Qué tipos de servicios locales podrían ayudarme con vivienda, comida y capacitación para el trabajo? ¿Qué preguntas debería hacer cuando llame al 211?\"",
            "La IA puede mencionar programas que ya cerraron o dar números de teléfono equivocados. Confirma siempre con el 211, con el sitio web oficial del programa o con tu administrador de caso de reinserción antes de ir."
          ],
          steps: ["Pregúntale a la IA qué tipos de ayuda buscar y qué preguntar.", "Llama al 211 o busca en 211.org.", "Anota los programas, los números y los horarios.", "Confirma en el sitio web oficial o por teléfono antes de ir."],
          words: [["211", "un número de teléfono y un sitio web que te conectan con ayuda local."], ["Administrador de caso", "una persona que te ayuda a hacer planes y a encontrar servicios."]],
          slides: [
            { title: "Hay ayuda", bullets: ["Vivienda, comida, transporte, atención médica", "Llama al 211 o visita 211.org", "Confidencial; puedes quedarte en el anonimato"] },
            { title: "Prepárate con la IA", bullets: ["Qué tipos de ayuda buscar", "Qué preguntas hacer"] },
            { title: "Confirma antes de ir", bullets: ["La IA puede mencionar programas cerrados", "Revisa con el 211 o el sitio oficial", "Pregúntale a tu administrador de caso"] }
          ],
          sources: [{ name: "211: Quiénes somos (en inglés)", url: "https://www.211.org/about-us" }],
          tryIt: "Pregúntale a un asistente de IA qué tipos de servicios locales podrían ayudarte ahora mismo y qué preguntar cuando llames. Luego busca tu 211 local en 211.org y anota un programa al que vas a contactar.",
          youCanNow: "encontrar ayuda local y confirmarla antes de ir."
        },
        {
          title: "Escribir mensajes diarios con IA",
          minutes: 5,
          goal: "Usar la IA para escribir un mensaje corto y amable para una situación real.",
          text: [
            "Muchas situaciones diarias necesitan un mensaje: avisarle a un empleador que vas a llegar tarde, preguntarle a un casero por un departamento, agradecer a alguien por una entrevista o comunicarte con tu familia.",
            "Dile a la IA para quién es, qué necesitas decir y cómo debe sonar: \"Escribe un mensaje de texto corto y amable para una persona que contrata. Mi autobús va 10 minutos tarde para mi entrevista de las 9 am. Lo siento y sigo muy interesado.\"",
            "Léelo en voz alta y cambia lo que no suene a ti. Que sea corto y honesto. No necesitas explicar tu pasado en los mensajes del día a día."
          ],
          steps: ["Di para quién es.", "Di lo que necesitas decir.", "Di cómo debe sonar: amable, corto, cordial.", "Léelo en voz alta y haz que suene a ti."],
          words: [["Amable", "respetuoso y cortés."], ["Borrador", "una primera versión que puedes cambiar."]],
          slides: [
            { title: "Mensajes del día a día", bullets: ["Vas tarde", "Preguntar por un departamento", "Agradecer a quien te entrevistó"] },
            { title: "Dile tres cosas a la IA", bullets: ["Para quién es", "Qué necesitas decir", "Cómo debe sonar"] },
            { title: "Hazlo tuyo", bullets: ["Léelo en voz alta", "Corto y honesto", "No necesitas explicar tu pasado"] }
          ],
          tryIt: "Pídele a un asistente de IA que escriba un mensaje de texto corto y amable para avisar a quien te va a entrevistar que tu autobús va tarde. Cambia una cosa para que suene a ti.",
          youCanNow: "escribir mensajes diarios claros y amables con ayuda de la IA."
        },
        {
          title: "Listas para citas y documentos",
          minutes: 5,
          goal: "Pedirle a la IA una lista de lo que debes llevar y luego confirmarla con la oficina.",
          text: [
            "Llegar sin los papeles correctos puede significar un segundo viaje. Pídele a la IA una lista: \"Voy a ir al DMV de mi estado a sacar una identificación estatal. ¿Qué documentos suele llevar la gente? Haz una lista corta.\"",
            "Luego confírmala con la propia oficina. Las reglas cambian de un estado a otro y con el tiempo, así que el sitio web oficial (muchas veces termina en .gov) o una llamada tienen la última palabra. Tu programa de reinserción o tu administrador de caso también pueden ayudarte a conseguir documentos como el acta de nacimiento.",
            "Guarda la lista en las notas de tu teléfono o en papel. Nunca escribas en la IA tus números de identificación, de caso o de Seguro Social reales; la lista solo necesita los nombres de los documentos."
          ],
          steps: ["Pregúntale a la IA qué se suele necesitar.", "Pide una lista corta.", "Confírmala en el sitio web oficial de la oficina o por teléfono.", "Junta los papeles y márcalos en la lista.", "Nunca escribas tus números reales en la IA."],
          words: [["Lista de control", "una lista de cosas que vas marcando una por una."], ["Identificación estatal", "una tarjeta oficial con foto de tu estado, para personas que no manejan."]],
          slides: [
            { title: "Evita un segundo viaje", bullets: ["Pídele una lista a la IA", "\"¿Qué suele llevar la gente para sacar una identificación estatal?\""] },
            { title: "Confirma con la oficina", bullets: ["Las reglas cambian según el estado", "Sitio oficial, muchas veces .gov, o llama", "Pide ayuda a tu administrador de caso"] },
            { title: "Mantén privados tus números", bullets: ["La lista solo necesita los nombres de los documentos", "Nunca escribas números de identificación o de caso en la IA"] }
          ],
          tryIt: "Tarea final: elige una cita real. Obtén indicaciones en transporte público o a pie, pon un recordatorio para saber cuándo salir, pídele a la IA una lista de lo que debes llevar (y luego confírmala en el sitio oficial) y pídele que te ayude a escribir un mensaje corto para enviar si vas tarde.",
          youCanNow: "usar herramientas de IA del día a día para planear, prepararte y llegar a tiempo a una cita."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Resolver cosas",
        questions: [
          { q: "¿Qué número te conecta con ayuda local para vivienda, comida y más?", options: ["611", "411", "311 en todas partes", "211"], answer: 3, why: "El 211 conecta a las personas con servicios locales." },
          { q: "La IA te da el número de teléfono de un programa. ¿Qué haces?", options: ["Confirmarlo con el 211 o el sitio oficial", "Creerle por completo", "Publicarlo en internet", "Darle tu número de caso"], answer: 0, why: "La IA puede mencionar programas cerrados o números equivocados." },
          { q: "¿Qué instrucción dará un buen mensaje de \"voy tarde\"?", options: ["\"tarde\"", "\"mensaje\"", "\"Escribe un mensaje corto y amable para una persona que contrata. Mi autobús va 10 minutos tarde para mi entrevista de las 9 am.\"", "\"autobús\""], answer: 2, why: "Dice para quién, qué y cómo debe sonar." },
          { q: "¿Necesitas explicar tu pasado en un mensaje del día a día?", options: ["Solo por correo", "Sí, siempre", "Solo a los caseros", "No; que sea corto y honesto"], answer: 3, why: "Los mensajes del día a día solo necesitan ir al punto." },
          { q: "¿Quién tiene la última palabra sobre qué documentos llevar?", options: ["Un amigo", "La IA", "La propia oficina", "Una publicación en redes sociales"], answer: 2, why: "Las reglas cambian según el estado; la oficina decide." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA para el día a día",
    questions: [
      { q: "Siri y Google Assistant son:", options: ["Sitios web de empleo", "Asistentes de voz de los teléfonos", "Compañías de autobuses", "Bancos"], answer: 1, why: "Hacen tareas sencillas cuando les hablas." },
      { q: "¿Qué petición de voz pone un recordatorio útil?", options: ["\"Recuérdame mi entrevista el martes a las 9 am.\"", "\"Entrevista.\"", "\"Martes.\"", "\"Hola.\""], answer: 0, why: "Dice qué es, el día y la hora." },
      { q: "Para las citas importantes, pon:", options: ["Dos recordatorios: el día anterior y para la hora de salir", "Ninguno", "Uno un mes después", "Diez alarmas al azar"], answer: 0, why: "Dos recordatorios cubren la preparación y la salida." },
      { q: "Los títulos de los recordatorios deben ser:", options: ["Llenos de números de identificación", "Generales, sin datos privados", "Tu número de caso", "Tu contraseña"], answer: 1, why: "No necesitas datos privados en los recordatorios." },
      { q: "En una aplicación de mapas, después de escribir la dirección tocas:", options: ["Cámara", "Borrar", "Cómo llegar", "Compartir contraseña"], answer: 2, why: "Cómo llegar muestra la ruta." },
      { q: "\"Transporte público\" significa:", options: ["Avión", "Solo caminar", "Solo taxis", "Autobuses y trenes"], answer: 3, why: "El transporte público es el transporte para todos." },
      { q: "Poner tu hora de llegada en una aplicación de mapas te muestra:", options: ["Tu número de identificación", "El saldo de tu banco", "Cuándo necesitas salir", "Solo el clima"], answer: 2, why: "Calcula hacia atrás a partir de tu hora de llegada." },
      { q: "Guardar las direcciones que usas seguido hace que estén:", options: ["A un toque", "Como números privados", "Desaparecidas", "Más caras"], answer: 0, why: "Los lugares guardados se abren rápido." },
      { q: "Google Lens puede:", options: ["Llamar a tu oficial de libertad condicional", "Reemplazar tu identificación", "Pagar tu renta", "Leer, copiar y traducir texto impreso"], answer: 3, why: "Lens lee lo que ve la cámara." },
      { q: "Un buen uso de la herramienta de texto de la cámara es:", options: ["Escanear tu tarjeta del Seguro Social en la IA", "Copiar un número de teléfono de un volante de empleo", "Escanear papeles del tribunal en la IA", "Fotografiar tu tarjeta del banco para la IA"], answer: 1, why: "Solo texto público; deja fuera los documentos privados." },
      { q: "Las llamadas al 211 son:", options: ["Grabadas para el público", "Confidenciales, y puedes quedarte en el anonimato", "Solo para emergencias", "Solo para negocios"], answer: 1, why: "Las llamadas al 211 son confidenciales." },
      { q: "La IA puede ayudarte antes de llamar al 211:", options: ["Garantizándote una cama", "Conociendo tu historial de caso", "Inscribiéndote de forma automática", "Sugiriéndote qué tipos de ayuda pedir"], answer: 3, why: "Te ayuda a preparar preguntas." },
      { q: "Un administrador de caso es:", options: ["Una persona que te ayuda a hacer planes y encontrar servicios", "Una aplicación de teléfono", "Un chofer de autobús", "Un sitio web"], answer: 0, why: "Los administradores de caso ayudan con los planes de reinserción." },
      { q: "Cuando la IA escribe un mensaje por ti, deberías:", options: ["Agregar tu número de Seguro Social", "Enviarlo sin leerlo", "Leerlo en voz alta y hacer que suene a ti", "Hacerlo muy largo"], answer: 2, why: "Tu mensaje debe sonar a ti." },
      { q: "Un buen mensaje del día a día es:", options: ["Lleno de datos privados", "Largo y lleno de excusas", "Grosero", "Corto, amable y honesto"], answer: 3, why: "Lo corto y honesto funciona mejor." },
      { q: "Un \"borrador\" es:", options: ["Un pase de autobús", "La copia final", "Una primera versión que puedes cambiar", "Una identificación"], answer: 2, why: "Mejoras los borradores antes de enviarlos." },
      { q: "Antes de ir a sacar una identificación estatal, deberías:", options: ["Confiar solo en la IA", "Confirmar la lista de documentos en el sitio oficial o por teléfono", "No llevar nada", "Preguntarle a un desconocido"], answer: 1, why: "Las reglas cambian según el estado." },
      { q: "Los sitios web oficiales del gobierno de Estados Unidos muchas veces terminan en:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: "Las oficinas del gobierno usan .gov." },
      { q: "¿Qué necesita una lista de documentos?", options: ["Los nombres de los documentos, no tus números", "Tus números de identificación reales", "Tu número de caso", "Tu número de Seguro Social"], answer: 0, why: "Los nombres de los documentos son suficientes." },
      { q: "Una identificación estatal es:", options: ["Un boleto de autobús", "Una tarjeta oficial con foto de tu estado", "Una credencial de la biblioteca", "Una aplicación de teléfono"], answer: 1, why: "Es una identificación oficial con foto para quienes no manejan y otras personas." }
    ]
  }
};
