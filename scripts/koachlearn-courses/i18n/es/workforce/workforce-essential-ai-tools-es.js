"use strict";

// Koach Learn course (Spanish translation of workforce/workforce-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-essential-ai-tools-es",
  lang: "es",
  translationOf: "workforce-essential-ai-tools",
  category: "Workforce Development",
  name: "Herramientas de IA esenciales para el trabajo",
  skills: "Seguir la política de IA de tu empleador, Usar un asistente de chat para escribir en el trabajo, Usar la IA dentro de Microsoft 365 o Google Workspace, Resumir documentos y reuniones, Pedir ayuda con hojas de cálculo, Revisar el trabajo de la IA antes de compartirlo",
  outcome: "usar las herramientas de IA que tu trabajo permite para terminar más rápido las tareas de todos los días: escribir y pulir un mensaje de trabajo, resumir un documento largo o las notas de una reunión, recibir ayuda con hojas de cálculo y revisar cada resultado antes de compartirlo, sin poner información confidencial donde no debe ir.",
  about: [
    "Este curso es para personas que trabajan o buscan trabajo y quieren habilidades prácticas de IA para el empleo: personal de oficina y administración, encargados de tienda o almacén, apoyo en servicios de salud, atención al cliente y cualquiera que escriba correos, lea políticas o use hojas de cálculo en el trabajo.",
    "Empezarás con la regla más importante, la política de IA de tu empleador, y luego practicarás con asistentes de chat (ChatGPT, Microsoft Copilot, Google Gemini) y con la ayuda de IA que viene dentro de Microsoft 365 y Google Workspace en algunos planes. Vas a resumir, redactar, analizar y, siempre, revisar.",
    "Las funciones que veas dependen de las licencias y la configuración de tu empleador, así que explicamos qué hacer en lugar de dar nombres exactos de botones. Cada lección dura unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Completa un conjunto de tareas de IA para el trabajo usando solo herramientas que tu trabajo permite (o herramientas gratuitas con datos inventados si estás buscando empleo): (1) escribe las tres reglas clave de la política de IA de tu trabajo, o las tres reglas que seguirías; (2) convierte notas sueltas en un correo de trabajo claro; (3) resume un documento largo en cinco viñetas y tres tareas pendientes; (4) pide ayuda a la IA para agregar una fórmula a una hoja de cálculo; y (5) anota qué revisaste en cada una antes de compartirla.",
  chapters: [
    {
      name: "Capítulo 1: Las reglas y las herramientas básicas",
      lessons: [
        {
          title: "Primero, la política de IA de tu empleador",
          minutes: 5,
          goal: "Encontrar y seguir las reglas de tu trabajo sobre herramientas de IA.",
          text: [
            "Muchos empleadores tienen reglas sobre herramientas de IA: qué herramientas están aprobadas, qué información se puede poner en ellas y cuándo debes decir que usaste IA. Romper estas reglas te puede meter en problemas, aunque lo hayas hecho con buena intención.",
            "Busca en el manual del empleado, en la intranet o en las páginas de IT (el área de tecnología), o pregunta a tu jefe o a IT: \"¿Qué herramientas de IA podemos usar y qué información puedo poner en ellas?\" Algunos empleadores dan una versión empresarial de una herramienta, como Microsoft Copilot con una cuenta de trabajo, que protege más los datos que una cuenta personal gratuita.",
            "Si no hay política, sigue reglas seguras por defecto: nada de información de clientes o pacientes, nada de datos personales de empleados, nada de contraseñas, nada de planes confidenciales ni cifras financieras en cuentas personales de IA. Revisa cada dato antes de compartir."
          ],
          steps: ["Busca \"IA\" en tu manual o en la intranet.", "Pregunta a tu jefe o a IT qué herramientas están aprobadas.", "Pregunta qué información está permitida.", "Si no hay política, usa las reglas seguras por defecto."],
          words: [["Política de IA", "las reglas de un empleador para usar herramientas de IA en el trabajo."], ["Herramienta aprobada", "una herramienta que tu empleador permite para trabajar."], ["Confidencial", "información que es solo para personas dentro de la empresa."]],
          slides: [
            { title: "Primero las reglas", bullets: ["Qué herramientas están aprobadas", "Qué información se puede poner", "Cuándo decir que usaste IA"] },
            { title: "Dónde encontrarlas", bullets: ["Manual del empleado o intranet", "Pregunta a tu jefe o a IT", "Las cuentas de trabajo pueden proteger más"] },
            { title: "Reglas seguras por defecto", bullets: ["Nada de datos de clientes, pacientes o empleados", "Nada de contraseñas ni planes confidenciales", "Revisa cada dato antes de compartir"] }
          ],
          tryIt: "Busca la política de IA de tu trabajo o pregunta por ella. Escribe las tres reglas más importantes. Si estás buscando empleo, escribe las tres reglas seguras por defecto que vas a seguir.",
          youCanNow: "encontrar y seguir las reglas sobre herramientas de IA en tu trabajo."
        },
        {
          title: "Un asistente de chat para escribir en el trabajo",
          minutes: 5,
          goal: "Convertir notas sueltas en un mensaje de trabajo claro con un asistente de chat.",
          text: [
            "Los asistentes de chat como ChatGPT, Microsoft Copilot y Google Gemini convierten notas sueltas en textos claros. Usa el que tu trabajo permite.",
            "Una buena instrucción de trabajo dice el propósito, el lector, los puntos clave y el tono: \"Escribe un correo corto para mi equipo. Propósito: el muelle de carga está cerrado el jueves por reparaciones. Usen el muelle B. Las entregas llegan de 7 a 11 am. Tono: claro y amable. Menos de 100 palabras.\"",
            "Luego pide cambios (\"más corto\", \"más formal\", \"agrega una lista\"), revisa cada dato y haz que suene a ti antes de enviarlo."
          ],
          steps: ["Escribe tus notas sueltas.", "Da la instrucción con propósito, lector, puntos clave y tono.", "Pide un cambio a la vez.", "Revisa nombres, fechas, horas y números.", "Edítalo para que suene a ti y envíalo."],
          words: [["Instrucción (prompt)", "lo que escribes para pedirle algo a una herramienta de IA."], ["Tono", "cómo suena un texto: amable, formal, firme."]],
          slides: [
            { title: "Entran notas, sale un mensaje claro", bullets: ["ChatGPT, Copilot o Gemini", "Usa la herramienta que tu trabajo permite"] },
            { title: "Una buena instrucción de trabajo", bullets: ["Propósito y lector", "Puntos clave", "Tono y extensión"] },
            { title: "Antes de enviar", bullets: ["Pide los cambios uno a la vez", "Revisa nombres, fechas, horas, números", "Haz que suene a ti"] }
          ],
          tryIt: "Escribe notas sueltas para un mensaje de trabajo real o de práctica. Usa un asistente de chat para convertirlas en un correo claro, pide un cambio y revisa cada dato.",
          youCanNow: "convertir notas sueltas en un mensaje de trabajo claro con un asistente de chat."
        },
        {
          title: "La IA dentro de Microsoft 365 y Google Workspace",
          minutes: 5,
          goal: "Encontrar y usar el ayudante de IA en las aplicaciones de oficina que usas, si tu cuenta lo tiene.",
          text: [
            "Microsoft agrega Copilot a aplicaciones como Word, Outlook, Excel, PowerPoint y Teams, y Google agrega Gemini a Gmail, Docs, Sheets y Meet. Que los tengas o no depende del plan y la configuración de tu empleador.",
            "Donde los tienes, la IA puede trabajar con lo que ya está abierto: \"Resume este documento\", \"Escribe una respuesta a este correo\", \"Sugiere una fórmula para esta columna\". Busca el ícono o el panel de IA en la aplicación, o pregunta a IT cómo activarlo.",
            "Si no lo tienes, igual puedes copiar texto no confidencial en un asistente de chat aprobado y pegar el resultado de vuelta. De cualquier forma, la versión final es tuya y tú la revisas."
          ],
          steps: ["Abre Word, Outlook, Docs o Gmail con tu cuenta de trabajo.", "Busca el ícono o el panel de IA, o pregunta a IT.", "Pídele que resuma o redacte a partir del archivo abierto.", "Si no está disponible, usa un asistente de chat aprobado con texto no confidencial.", "Revisa y edita el resultado."],
          words: [["Microsoft 365", "el conjunto de aplicaciones de trabajo de Microsoft: Word, Excel, Outlook, Teams y más."], ["Google Workspace", "el conjunto de aplicaciones de trabajo de Google: Gmail, Docs, Sheets, Meet y más."]],
          slides: [
            { title: "IA dentro de las aplicaciones de oficina", bullets: ["Microsoft: Copilot en Word, Outlook, Excel, Teams", "Google: Gemini en Gmail, Docs, Sheets, Meet", "Depende del plan de tu empleador"] },
            { title: "Trabaja con lo que está abierto", bullets: ["\"Resume este documento\"", "\"Escribe una respuesta a este correo\"", "Busca el ícono de IA o pregunta a IT"] },
            { title: "¿No tienes IA integrada?", bullets: ["Usa un asistente de chat aprobado", "Solo texto no confidencial", "Tú revisas la versión final"] }
          ],
          tryIt: "Abre un documento o correo del trabajo (o uno de práctica). Usa el ayudante de IA integrado si lo tienes, o un asistente de chat aprobado si no, para redactar una respuesta o un resumen. Revísalo.",
          youCanNow: "usar el ayudante de IA de tus aplicaciones de oficina, o una alternativa segura, para redactar y resumir."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Las reglas y las herramientas básicas",
        questions: [
          { q: "Antes de usar IA en el trabajo, primero debes:", options: ["Pegar datos de clientes", "Conocer la política de IA de tu empleador", "Compartir tu contraseña", "Usar cualquier aplicación que encuentres"], answer: 1, why: "Las políticas dicen qué está permitido." },
          { q: "No hay política. ¿Qué regla segura por defecto debes seguir?", options: ["No revisar los datos", "Pegar cualquier cosa", "Compartir contraseñas", "Nada de datos personales de clientes o empleados en herramientas de IA"], answer: 3, why: "Los datos privados se quedan fuera." },
          { q: "Una buena instrucción de trabajo incluye:", options: ["Propósito, lector, puntos clave y tono", "Solo una palabra", "Tu contraseña", "La dirección de un cliente"], answer: 0, why: "Esas partes dan un borrador útil." },
          { q: "Copilot dentro de Word u Outlook está disponible:", options: ["Nunca", "Para todos automáticamente", "Según el plan y la configuración de tu empleador", "Solo en teléfonos"], answer: 2, why: "El acceso depende de licencias y configuración." },
          { q: "¿De quién es la versión final de un trabajo redactado con IA?", options: ["De IT", "De la IA", "Tuya", "De nadie"], answer: 2, why: "Tú eres responsable de lo que envías." }
        ]
      }
    },
    {
      name: "Capítulo 2: Resúmenes, hojas de cálculo y revisión",
      lessons: [
        {
          title: "Resumir documentos y reuniones",
          minutes: 5,
          goal: "Convertir un documento largo o las notas de una reunión en puntos clave y tareas pendientes.",
          text: [
            "Un resumen le ahorra tiempo a todos. Pide una forma específica: \"Resume esta política en cinco viñetas para una persona nueva y luego da tres tareas pendientes.\" O para notas de reunión: \"Da las decisiones, las tareas pendientes con responsable y fecha límite, y las preguntas abiertas.\"",
            "Algunas herramientas de reuniones pueden transcribir y resumir reuniones cuando tu empleador lo activa. Todas las personas de la reunión deben saber que se está grabando o transcribiendo; sigue las reglas de tu trabajo.",
            "Los resúmenes pueden dejar fuera algo importante o equivocarse en un detalle. Compara los datos clave con el original, sobre todo números, fechas, nombres y quién se comprometió a hacer qué."
          ],
          steps: ["Pega o abre el documento (si está permitido).", "Pide viñetas, decisiones y tareas pendientes con responsables y fechas.", "Compara los datos clave con el original.", "Corrige lo que falte o esté mal antes de compartir."],
          words: [["Resumen", "una versión corta que conserva los puntos principales."], ["Tarea pendiente", "algo que alguien se comprometió a hacer, idealmente con un responsable y una fecha límite."], ["Transcribir", "convertir lo que se habla en texto escrito."]],
          slides: [
            { title: "Pide una forma", bullets: ["Cinco viñetas para una persona nueva", "Decisiones, tareas pendientes, preguntas abiertas", "Responsables y fechas límite"] },
            { title: "Herramientas de reuniones", bullets: ["Algunas transcriben y resumen reuniones", "Todos deben saber que se está grabando", "Sigue las reglas de tu trabajo"] },
            { title: "Compara con el original", bullets: ["Números, fechas y nombres", "Quién se comprometió a hacer qué", "Algo importante que haya quedado fuera"] }
          ],
          tryIt: "Toma un documento largo del trabajo o notas de una reunión (o una política pública si buscas empleo). Pide a la IA cinco viñetas y tres tareas pendientes con responsables, y luego compáralas con el original.",
          youCanNow: "resumir documentos y reuniones en puntos claros y tareas pendientes, y revisarlos."
        },
        {
          title: "Ayuda de la IA con hojas de cálculo",
          minutes: 5,
          goal: "Usar la IA para escribir y explicar una fórmula de hoja de cálculo, y luego probarla.",
          text: [
            "Muchos trabajadores pierden tiempo con las hojas de cálculo. La IA es un buen tutor: \"En Excel, ¿cómo cuento cuántas filas de la columna B dicen 'Late'?\" Puede responder =COUNTIF(B:B,\"Late\") (CONTAR.SI en Excel en español) y explicar cada parte.",
            "Describe tus columnas en lugar de pegar datos confidenciales: \"La columna A es la fecha, la B es el estado, la C son las horas.\" Si tu empleador permite la IA integrada en Excel o Sheets, puedes preguntarle sobre el archivo abierto.",
            "Prueba siempre una fórmula en algunas filas donde ya sabes la respuesta. Las fórmulas de la IA pueden estar cerca pero mal, por ejemplo contar la fila de encabezados o usar el rango equivocado."
          ],
          steps: ["Describe tus columnas y lo que quieres saber.", "Pide a la IA una fórmula y una explicación.", "Pega la fórmula en tu hoja.", "Pruébala en filas donde sabes la respuesta.", "Pide a la IA que la corrija si está mal."],
          words: [["Fórmula", "una instrucción en una celda de la hoja de cálculo que calcula algo."], ["COUNTIF", "una fórmula que cuenta las celdas que cumplen una condición (CONTAR.SI en Excel en español)."], ["Rango", "un grupo de celdas, como B2:B50."]],
          slides: [
            { title: "La IA como tutor de hojas de cálculo", bullets: ["\"¿Cómo cuento las filas que dicen Late?\"", "=COUNTIF(B:B,\"Late\")", "Pídele que explique cada parte"] },
            { title: "Describe, no pegues", bullets: ["\"La columna A es la fecha, la B es el estado\"", "IA integrada solo si está permitida"] },
            { title: "Pruébala", bullets: ["Revisa filas donde sabes la respuesta", "Cuidado con encabezados y rangos equivocados"] }
          ],
          tryIt: "Haz una hoja pequeña con 10 filas de datos de práctica. Pide a la IA una fórmula (contar, sumar o promediar), pégala y compárala con una respuesta que calcules a mano.",
          youCanNow: "obtener, entender y probar fórmulas de hojas de cálculo con ayuda de la IA."
        },
        {
          title: "Revisar el trabajo de la IA antes de compartirlo",
          minutes: 5,
          goal: "Usar una lista corta para revisar cualquier resultado de IA antes de que llegue a otros.",
          text: [
            "En el trabajo, tu nombre va en lo que compartes. Usa una revisión de cuatro puntos cada vez: Datos (números, nombres, fechas y políticas coinciden con la fuente), Ajuste (el tono y la extensión son los correctos para el lector), Seguridad (no hay datos confidenciales o personales que no deban estar) y Fuente (si dice una regla o una estadística, sabes de dónde salió).",
            "La IA puede inventar detalles que suenan correctos; a eso se le llama alucinaciones. También puede copiar sesgos, por ejemplo en la descripción de un puesto. Léelo como si fueras la persona que lo recibe.",
            "Si tu trabajo pide que digas cuándo usaste IA, hazlo. Ser abierto sobre cómo trabajas genera confianza."
          ],
          steps: ["Datos: compáralos con la fuente.", "Ajuste: tono y extensión correctos para el lector.", "Seguridad: nada de datos que no deban estar.", "Fuente: sabe de dónde salió cada regla o número.", "Di que usaste IA si tu trabajo lo pide."],
          words: [["Alucinación", "cuando la IA escribe algo que suena cierto pero es inventado."], ["Sesgo", "una inclinación injusta a favor o en contra de un grupo."]],
          slides: [
            { title: "Tu nombre va en él", bullets: ["Revisa cada resultado de IA antes de compartir"] },
            { title: "La revisión de cuatro puntos", bullets: ["Datos", "Ajuste", "Seguridad", "Fuente"] },
            { title: "Cuidado con", bullets: ["Detalles inventados (alucinaciones)", "Sesgos, como en descripciones de puestos", "Di que usaste IA si te lo piden"] }
          ],
          tryIt: "Tarea final: completa tu conjunto de tareas de IA para el trabajo: tres reglas de la política, un correo claro a partir de notas, un resumen de cinco viñetas con tareas pendientes, una fórmula probada y una nota de lo que revisaste en cada una usando Datos, Ajuste, Seguridad y Fuente.",
          youCanNow: "usar herramientas de IA en el trabajo para terminar más rápido, de forma segura y con tu propia revisión cuidadosa."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Resúmenes, hojas de cálculo y revisión",
        questions: [
          { q: "Un buen resumen de reunión incluye:", options: ["Decisiones, tareas pendientes con responsables y fechas, y preguntas abiertas", "Solo el título de la reunión", "Las contraseñas de todos", "Nada"], answer: 0, why: "Esa forma facilita el seguimiento." },
          { q: "Antes de transcribir una reunión, las personas deben:", options: ["Apagar sus cámaras", "No ser avisadas", "Salirse", "Saber que se está grabando o transcribiendo"], answer: 3, why: "Sigue las reglas del trabajo y sé abierto." },
          { q: "¿Qué hace =COUNTIF(B:B,\"Late\")?", options: ["Suma la columna B", "Cuenta las celdas de la columna B que dicen Late", "Borra las filas Late", "Ordena la hoja"], answer: 1, why: "COUNTIF cuenta las celdas que coinciden." },
          { q: "¿Cómo sabes que una fórmula de la IA funciona?", options: ["La pruebas en filas donde sabes la respuesta", "Se ve bien", "La IA lo dice", "Nadie se queja"], answer: 0, why: "Probarla lo demuestra." },
          { q: "¿Cuál NO es una de las cuatro revisiones?", options: ["Ajuste", "Datos", "Fama", "Seguridad"], answer: 2, why: "Las revisiones son Datos, Ajuste, Seguridad y Fuente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA esenciales para el trabajo",
    questions: [
      { q: "¿Dónde sueles encontrar la política de IA de tu trabajo?", options: ["En una publicación de redes sociales", "En el manual, la intranet o preguntando a tu jefe o a IT", "En un chat de IA", "En ningún lado"], answer: 1, why: "Las políticas están en lugares oficiales de la empresa." },
      { q: "La versión de trabajo de una herramienta de IA puede:", options: ["No existir", "Ser siempre menos segura", "Compartir tus datos en público", "Proteger más los datos que una cuenta personal gratuita"], answer: 3, why: "Las versiones empresariales pueden proteger más; revisa lo que dice tu empleador." },
      { q: "¿Qué nunca debe ir en una cuenta personal de IA?", options: ["Una pregunta general", "\"Haz esto más corto\"", "Una noticia pública", "Información personal de clientes"], answer: 3, why: "Los datos de clientes son privados." },
      { q: "ChatGPT, Copilot y Gemini son:", options: ["Hojas de cálculo", "Asistentes de chat", "Impresoras", "Teléfonos"], answer: 1, why: "Son asistentes de chat con IA." },
      { q: "\"Menos de 100 palabras\" en una instrucción define:", options: ["El propósito", "El lector", "La extensión", "La contraseña"], answer: 2, why: "Controla la extensión." },
      { q: "Después de que la IA redacta un correo, tú:", options: ["Revisas los datos y haces que suene a ti", "Lo envías sin leerlo", "Agregas más datos que inventó", "Lo borras"], answer: 0, why: "La versión final es tuya." },
      { q: "Copilot aparece en:", options: ["Cuadernos de papel", "Solo Gmail", "Aplicaciones de Microsoft 365, en algunos planes", "Ningún lado"], answer: 2, why: "Microsoft agrega Copilot a sus aplicaciones en algunos planes." },
      { q: "Gemini aparece en:", options: ["Aplicaciones de Google Workspace, en algunos planes", "Solo Excel", "Máquinas de fax", "Ningún lado"], answer: 0, why: "Google agrega Gemini a sus aplicaciones en algunos planes." },
      { q: "No ves un ícono de IA en tu aplicación de oficina. Puedes:", options: ["Instalar complementos al azar", "Preguntar a IT o usar un asistente de chat aprobado con texto no confidencial", "Rendirte", "Usar la cuenta de un compañero"], answer: 1, why: "Quédate dentro de las herramientas aprobadas." },
      { q: "Una tarea pendiente debe tener:", options: ["Nada", "Un secreto", "Una contraseña", "Un responsable y una fecha límite"], answer: 3, why: "Responsables y fechas hacen que se cumpla." },
      { q: "¿Por qué comparar un resumen con el original?", options: ["Los resúmenes pueden dejar fuera o cambiar detalles", "Para perder tiempo", "No hace falta", "Por diversión"], answer: 0, why: "Revisar atrapa errores." },
      { q: "Transcribir significa:", options: ["Enviar un correo", "Borrar un archivo", "Traducir un idioma", "Convertir lo que se habla en texto escrito"], answer: 3, why: "La transcripción pone por escrito lo que se habla." },
      { q: "En lugar de pegar datos confidenciales de una hoja de cálculo en la IA, puedes:", options: ["Enviarlos por correo a amigos", "Pegarlos de todos modos", "Describir las columnas", "Publicarlos en internet"], answer: 2, why: "Las descripciones mantienen seguros los datos." },
      { q: "Un rango en una hoja de cálculo es:", options: ["Una estufa", "Un grupo de celdas, como B2:B50", "Una contraseña", "Un gráfico"], answer: 1, why: "Los rangos son grupos de celdas." },
      { q: "Un error común en las fórmulas de la IA es:", options: ["Ninguno", "Ser demasiado cortas", "Usar colores", "Contar la fila de encabezados o usar el rango equivocado"], answer: 3, why: "Pruébalas para detectarlo." },
      { q: "Una alucinación de la IA es:", options: ["Una reunión", "Una falla de la pantalla", "Un detalle inventado que suena cierto", "Un virus"], answer: 2, why: "La IA puede inventar datos." },
      { q: "La revisión de \"Ajuste\" pregunta si:", options: ["El tono y la extensión le sirven al lector", "El archivo cabe en una USB", "La silla te queda", "Cabe en un tuit"], answer: 0, why: "El ajuste tiene que ver con el lector." },
      { q: "La revisión de \"Fuente\" pregunta:", options: ["Qué teclado usaste", "De dónde salió cada regla o número", "Quién escribió más rápido", "Nada"], answer: 1, why: "Las reglas y los números necesitan una fuente." },
      { q: "Si tu trabajo pide que digas que usaste IA, debes:", options: ["Ocultarlo", "Decirlo", "Culpar a un compañero", "Ignorar la regla"], answer: 1, why: "Ser abierto genera confianza y cumple la política." },
      { q: "¿El nombre de quién va en el trabajo hecho con ayuda de IA que compartes?", options: ["El tuyo", "El de la IA", "El de IT", "El de nadie"], answer: 0, why: "Tú eres responsable de él." }
    ]
  }
};
