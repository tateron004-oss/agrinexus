"use strict";

// Koach Learn course (shared), Spanish translation of shared/smartphone-tablet.js. See scripts/koachlearn-courses/README.md, "Translations".
// Apple's "Find My" is "Buscar" on Spanish devices and Android's "Find My Device" is "Encontrar mi dispositivo"; both names are given.

module.exports = {
  id: "smartphone-tablet-es",
  lang: "es",
  translationOf: "smartphone-tablet",
  category: "Seniors and Technology",
  name: "Usar un teléfono inteligente y una tableta",
  skills: "Usar la pantalla táctil, Llamadas y mensajes de texto, Tomar y enviar fotos, Instalar aplicaciones con seguridad, Bloquear y actualizar tu aparato",
  outcome: "usar por tu cuenta un teléfono inteligente o una tableta: desbloquearlo, hacer una llamada, enviar un mensaje de texto y una foto, instalar una aplicación desde la tienda oficial y mantener el aparato bloqueado y actualizado.",
  about: [
    "Un teléfono inteligente o una tableta te permite llamar y escribir a tu familia, ver fotos de los nietos, ver el clima, encontrar un autobús y hablar con tu médico. Este curso es para quien es nuevo con estos aparatos o quiere sentirse más seguro.",
    "Vas a aprender la pantalla táctil, las llamadas y los mensajes, la cámara, cómo instalar una aplicación con seguridad y cómo mantener tu aparato bloqueado y actualizado. Los pasos sirven para teléfonos Android y para iPhone y iPad; donde son distintos, lo decimos.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\" con tu aparato en la mano. Hay una breve comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Con tu propio teléfono o tableta: desbloquéalo, llama o haz una videollamada a alguien que conoces, envíale un mensaje de texto con una foto que acabas de tomar, instala una aplicación gratuita y útil desde la tienda oficial de aplicaciones y comprueba que el bloqueo de pantalla esté activado y que tu software esté actualizado.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos con un teléfono inteligente o una tableta nuevos o poco usados: personas mayores, personas que recibieron un teléfono de su familia o de un programa, personas que regresan a la comunidad, recién llegados y cuidadores.",
    startingPoint: "Pueden encender el aparato y quizás contestan llamadas. Muchos no están seguros de cómo moverse en la pantalla táctil, cambiar el tamaño del texto, guardar contactos, enviar una foto, instalar una aplicación con seguridad o mantener el aparato bloqueado y actualizado.",
    gap: "Los teléfonos y las tabletas son ahora la forma de comunicarse con la familia, los médicos, las farmacias, los bancos y los servicios. Quien no puede usarlos solo se pierde llamadas y mensajes, tiene problemas para leer la pantalla, instala aplicaciones falsas o pierde información privada cuando se le pierde el teléfono.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican los movimientos de los dedos y palabras como ícono y permiso",
      "Dispositivos: el teléfono Android, el iPhone o la tableta de la persona; hay pasos para los dos",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total",
      "Costo: solo aplicaciones gratuitas, de la tienda oficial de aplicaciones",
      "Privacidad: nunca se comparte con quien llama un código de un mensaje de texto y nunca se envían a desconocidos fotos de la identificación o de las tarjetas del banco"
    ],
    prerequisites: "Ninguno. Hace falta un teléfono o una tableta con carga."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tu propio teléfono o tableta", action: "desbloquearlo, usar tocar, deslizar, mantener presionado y pellizcar, abrir una aplicación y volver a la pantalla de inicio", standard: "sin ayuda" },
    { id: "O2", condition: "En la aplicación Configuración", action: "cambiar el tamaño del texto, el brillo y el volumen para que el aparato sea fácil de ver y de oír", standard: "con cada uno en un nivel cómodo" },
    { id: "O3", condition: "Ante una persona con la que quieres comunicarte", action: "guardarla como contacto, llamarla y enviarle un mensaje de texto, y manejar con seguridad las llamadas de números desconocidos", standard: "con la llamada hecha y el mensaje enviado, y sin darle nunca un código a quien llama" },
    { id: "O4", condition: "Con las aplicaciones Cámara y Fotos o Galería", action: "tomar una foto nítida y compartirla en un mensaje de texto con alguien que conoces", standard: "con la foto enfocada y sin nada privado en ella" },
    { id: "O5", condition: "En la tienda oficial de aplicaciones", action: "encontrar e instalar una aplicación gratuita después de revisar el desarrollador, la calificación y las reseñas, y elegir qué permisos dar", standard: "dando solo los permisos que la aplicación de verdad necesita" },
    { id: "O6", condition: "En tu propio aparato", action: "activar un bloqueo de pantalla seguro, buscar una actualización de software y activar Encontrar mi dispositivo o Buscar", standard: "con un bloqueo que no sea fácil de adivinar y el aparato actualizado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Sentirse cómodo con tu aparato",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lo básico de la pantalla táctil: tocar, deslizar y la pantalla de inicio",
          minutes: 5,
          goal: "Desbloquear tu aparato, abrir una aplicación y volver a la pantalla de inicio.",
          text: [
            "Un teléfono inteligente es un teléfono que también es una pequeña computadora. Una tableta es la misma idea con una pantalla más grande. La mayoría usan Android (hecho por Google y usado por Samsung, Motorola y otras marcas) o iOS y iPadOS (hechos por Apple para iPhone y iPad).",
            "Lo controlas con el dedo. Tocar: tocar y soltar, para abrir algo. Deslizar: pasar el dedo por la pantalla, para moverte entre páginas o desplazarte. Mantener presionado: dejar el dedo apoyado, para ver más opciones. Pellizcar: separar dos dedos para agrandar las cosas y juntarlos para achicarlas.",
            "La pantalla de inicio muestra tus aplicaciones como pequeños dibujos llamados íconos. Para volver al inicio, desliza hacia arriba desde el borde de abajo o presiona el botón de inicio si tu aparato lo tiene."
          ],
          steps: ["Presiona el botón del costado o de arriba para encender la pantalla.", "Desliza hacia arriba y escribe tu código, o usa tu huella o tu cara.", "Toca el ícono de una aplicación para abrirla.", "Desliza hacia arriba desde abajo (o presiona el botón de inicio) para volver al inicio.", "Separa dos dedos sobre una foto para ampliarla."],
          words: [["Teléfono inteligente", "un teléfono que también es una pequeña computadora con pantalla táctil."], ["Ícono", "un pequeño dibujo que tocas para abrir una aplicación."], ["Pantalla de inicio", "la pantalla principal que muestra tus aplicaciones."], ["Deslizar", "pasar el dedo por la pantalla."]],
          slides: [
            { title: "Dos tipos principales", bullets: ["Android: Samsung, Motorola, Google Pixel y otros", "iPhone y iPad de Apple"] },
            { title: "Movimientos del dedo", bullets: ["Tocar: abrir algo", "Deslizar: desplazarte o cambiar de página", "Mantener presionado: más opciones", "Pellizcar: ampliar y reducir"] },
            { title: "Volver al inicio", bullets: ["Desliza hacia arriba desde el borde de abajo", "O presiona el botón de inicio si lo tienes"] }
          ],
          tryIt: "Enciende y desbloquea tu aparato. Abre la aplicación Cámara o Clima, desliza un poco y luego vuelve a la pantalla de inicio. Hazlo tres veces hasta que te resulte fácil.",
          youCanNow: "desbloquear tu aparato, abrir una aplicación con un toque, desplazarte deslizando y volver a la pantalla de inicio.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace mantener presionado?", options: ["Apaga el teléfono", "Muestra más opciones", "Toma una foto", "Hace una llamada"], answer: 1, why: "Dejar el dedo apoyado muestra más opciones." },
            { objective: "O1", q: "Estás en una aplicación y quieres volver a la pantalla de inicio. ¿Qué harías?", options: ["Apagar y encender el teléfono", "Juntar dos dedos pellizcando", "Sacar la batería", "Deslizar hacia arriba desde el borde de abajo, o presionar el botón de inicio"], answer: 3, why: "Deslizar hacia arriba desde abajo, o el botón de inicio, te lleva de vuelta a la pantalla de inicio." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hacer más fácil ver y oír",
          minutes: 4,
          goal: "Agrandar el texto y ajustar el volumen y el brillo a tu gusto.",
          text: [
            "Puedes cambiar tu aparato para que sea más fácil de usar. Todo esto está en la aplicación Configuración (o Ajustes), que suele tener un ícono de engranaje.",
            "Texto más grande: abre Configuración, busca Pantalla o Accesibilidad y encuentra tamaño del texto o tamaño de la letra. Brillo: búscalo en Pantalla, o desliza hacia abajo desde arriba de la pantalla para ver los controles rápidos. Volumen: usa los botones del costado.",
            "Si no encuentras algo, usa la casilla de búsqueda de arriba en Configuración y escribe una palabra como \"tamaño del texto\". Tanto Android como los aparatos de Apple tienen además funciones de accesibilidad como una lupa y la lectura de la pantalla en voz alta."
          ],
          steps: ["Abre la aplicación Configuración (ícono de engranaje).", "Toca la casilla de búsqueda de arriba y escribe \"tamaño del texto\".", "Mueve el control deslizante hasta que el texto se lea fácil.", "Desliza hacia abajo desde arriba para cambiar el brillo.", "Usa los botones del costado para el volumen."],
          words: [["Configuración (Ajustes)", "la aplicación donde cambias cómo funciona tu aparato."], ["Accesibilidad", "funciones que hacen un aparato más fácil de ver, oír o tocar."]],
          slides: [
            { title: "La aplicación Configuración", bullets: ["Suele tener un ícono de engranaje", "Ahí cambias cómo funciona tu aparato"] },
            { title: "Más fácil de ver y oír", bullets: ["Tamaño del texto en Pantalla o Accesibilidad", "Brillo en Pantalla o en los controles rápidos", "Volumen: botones del costado"] },
            { title: "¿No lo encuentras?", bullets: ["Usa la casilla de búsqueda de arriba en Configuración", "Escribe una palabra como \"tamaño del texto\""] }
          ],
          tryIt: "Abre Configuración, busca \"tamaño del texto\" y agranda el texto un paso. Luego desliza hacia abajo desde arriba y cambia el brillo.",
          youCanNow: "agrandar el texto y ajustar el brillo y el volumen para que tu aparato sea cómodo de usar.",
          quickCheck: [
            { objective: "O2", q: "¿Qué ícono suele tener la aplicación Configuración?", options: ["Una cámara", "Un globo de diálogo", "Un engranaje", "Un clip"], answer: 2, why: "Configuración suele tener un ícono de engranaje." },
            { objective: "O2", q: "La pantalla está demasiado oscura para leer afuera. ¿Qué harías?", options: ["Deslizar hacia abajo desde arriba y subir el brillo", "Comprar un teléfono nuevo", "Presionar los botones de volumen", "Borrar una aplicación"], answer: 0, why: "Los controles rápidos del brillo aparecen al deslizar hacia abajo desde la parte de arriba de la pantalla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Llamadas, contactos y mensajes de texto",
          minutes: 5,
          goal: "Guardar un contacto, hacer una llamada y enviar un mensaje de texto.",
          text: [
            "La aplicación Teléfono hace llamadas. La aplicación Contactos (en algunos teléfonos es parte de Teléfono) guarda nombres con números, para que llames tocando un nombre en lugar de escribir un número.",
            "La aplicación Mensajes envía mensajes de texto. Toca el botón de mensaje nuevo, elige un contacto, escribe en la casilla de abajo y toca la flecha de enviar.",
            "Si llama un número desconocido, puedes dejar que vaya al buzón de voz. Quien llama de verdad dejará un mensaje. Nunca le des un código de un mensaje de texto a alguien que te llama."
          ],
          steps: ["Abre Contactos (o Teléfono y luego Contactos).", "Toca el botón + para agregar a una persona: nombre y número. Guarda.", "Toca el nombre y luego el ícono del teléfono para llamar.", "Abre Mensajes y toca el botón de mensaje nuevo.", "Elige el contacto, escribe tu mensaje y toca enviar."],
          words: [["Contacto", "un nombre y número de teléfono guardados."], ["Mensaje de texto", "un mensaje escrito corto que se envía de un teléfono a otro."], ["Buzón de voz", "un mensaje grabado que dejan cuando no contestas."]],
          slides: [
            { title: "Tres aplicaciones", bullets: ["Teléfono: hacer llamadas", "Contactos: guardar nombres y números", "Mensajes: enviar textos"] },
            { title: "Agregar un contacto", bullets: ["Toca +", "Escribe el nombre y el número", "Toca Guardar"] },
            { title: "Enviar un mensaje", bullets: ["Botón de mensaje nuevo", "Elige el contacto", "Escribe y toca la flecha de enviar"] },
            { title: "Llamadas desconocidas", bullets: ["Deja que vayan al buzón de voz", "Nunca le des a quien llama un código de un mensaje"] }
          ],
          tryIt: "Guarda a un familiar o amigo como contacto. Llámalo tocando su nombre y luego envíale un mensaje corto: \"¡Estoy practicando con mi teléfono!\"",
          youCanNow: "guardar un contacto, llamar a alguien por su nombre y enviar un mensaje de texto.",
          quickCheck: [
            { objective: "O3", q: "¿Qué aplicación envía mensajes de texto?", options: ["Mensajes", "Cámara", "Configuración", "Fotos"], answer: 0, why: "La aplicación Mensajes envía mensajes de texto." },
            { objective: "O3", q: "Te llama un número que no conoces. ¿Qué harías?", options: ["Contestar y dar tus datos del banco", "Devolver la llamada de inmediato y leer en voz alta cualquier código", "Dejar que vaya al buzón de voz; quien llama de verdad dejará un mensaje", "Apagar tu teléfono por una semana"], answer: 2, why: "Dejar que las llamadas desconocidas vayan al buzón de voz es seguro; quien llama de verdad deja un mensaje." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Sentirse cómodo con tu aparato",
        questions: [
          { objective: "O1", q: "¿Qué movimiento del dedo agranda una foto?", options: ["Tocar una vez", "Separar dos dedos", "Presionar el botón de volumen", "Deslizar hacia abajo"], answer: 1, why: "Separar dos dedos amplía." },
          { objective: "O1", q: "¿Cómo vuelves normalmente a la pantalla de inicio?", options: ["Apagando el teléfono", "Sacudiendo el teléfono", "Deslizando hacia arriba desde abajo o presionando el botón de inicio", "Abriendo la cámara"], answer: 2, why: "Deslizar hacia arriba desde abajo o presionar inicio te lleva a la pantalla de inicio." },
          { objective: "O2", q: "El texto de tu teléfono es muy pequeño. ¿Dónde lo arreglas?", options: ["En Configuración, en Pantalla o Accesibilidad", "En la aplicación Cámara", "En la aplicación Teléfono", "En un mensaje de texto"], answer: 0, why: "El tamaño del texto está en Configuración, en Pantalla o Accesibilidad." },
          { objective: "O3", q: "¿Por qué guardar a alguien como contacto?", options: ["Hace el teléfono más rápido", "Carga la batería", "Esconde su número", "Para llamarle o escribirle tocando su nombre"], answer: 3, why: "Un contacto te permite comunicarte con alguien por su nombre." },
          { objective: "O3", q: "Alguien llama y te pide que le leas un código que te acaban de enviar por mensaje. ¿Qué haces?", options: ["Se lo lees", "Se lo envías por mensaje", "No lo compartes y cuelgas", "Lo publicas en internet"], answer: 2, why: "Ese código protege tu cuenta; las empresas reales no lo piden." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fotos, aplicaciones y la seguridad de tu aparato",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tomar y enviar fotos",
          minutes: 5,
          goal: "Tomar una foto y enviársela a alguien en un mensaje.",
          text: [
            "Abre la aplicación Cámara, apunta a lo que quieres y toca el botón redondo grande. Mantén el aparato quieto. Toca la pantalla sobre lo que fotografías para que salga nítido.",
            "Tus fotos se guardan en la aplicación Fotos o Galería. Para enviar una, ábrela, toca el botón Compartir (a menudo un cuadrado con una flecha o tres puntos unidos por líneas) y elige Mensajes o correo, y luego a la persona.",
            "Piensa antes de compartir. No envíes fotos de tu identificación, tus tarjetas bancarias, boletos con códigos de barras ni nada privado a personas que no conoces."
          ],
          steps: ["Abre la aplicación Cámara.", "Apunta, quédate quieto y toca lo que fotografías para enfocar.", "Toca el botón redondo grande.", "Abre Fotos o Galería y toca la foto.", "Toca Compartir, elige Mensajes, elige a la persona y envía."],
          words: [["Galería o Fotos", "la aplicación donde se guardan tus fotos."], ["Botón Compartir", "el botón que envía una foto o un archivo a alguien o a otra aplicación."]],
          slides: [
            { title: "Tomar una foto", bullets: ["Abre la aplicación Cámara", "Toca lo que fotografías para enfocar", "Toca el botón redondo grande"] },
            { title: "Enviar una foto", bullets: ["Abre Fotos o Galería", "Toca Compartir", "Elige Mensajes y a la persona"] },
            { title: "Piensa antes de compartir", bullets: ["Nada de fotos de identificaciones ni tarjetas bancarias", "Nada de papeles privados a desconocidos"] }
          ],
          tryIt: "Toma una foto de algo bonito cerca de ti: una planta, una comida o un paisaje. Envíala en un mensaje al contacto que guardaste en la Lección 3.",
          youCanNow: "tomar una foto nítida y compartirla con alguien por mensaje.",
          quickCheck: [
            { objective: "O4", q: "¿Qué te deja hacer el botón Compartir con una foto?", options: ["Borrarla", "Hacerla más grande", "Tomarla otra vez", "Enviarla por mensaje de texto o por correo"], answer: 3, why: "Compartir te deja elegir Mensajes o el correo y a la persona a quien enviar la foto." },
            { objective: "O4", q: "Tus fotos siempre salen borrosas. ¿Qué harías?", options: ["Mover el teléfono mientras la tomas", "Quedarte quieto y tocar en la pantalla lo que quieres fotografiar antes de tomarla", "Bajar el brillo", "Tomarla desde muy lejos"], answer: 1, why: "Quedarte quieto y tocar lo que quieres fotografiar hace que la foto salga nítida." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Instalar aplicaciones con seguridad",
          minutes: 5,
          goal: "Encontrar e instalar una aplicación gratuita desde la tienda oficial de aplicaciones.",
          text: [
            "Las aplicaciones agregan cosas nuevas que tu aparato puede hacer: mapas, el clima, videollamadas, tu banco, tu farmacia. Consíguelas solo en la tienda oficial: Google Play Store en Android, o App Store en iPhone y iPad.",
            "Busca la aplicación por su nombre. Antes de instalarla, revisa el nombre de la empresa que la hizo (el desarrollador), la cantidad de reseñas y la calificación. Las aplicaciones falsas copian nombres reales, así que asegúrate de que sea de la empresa real.",
            "Cuando una aplicación pide permiso para usar tu ubicación, cámara, contactos o micrófono, pregúntate si de verdad lo necesita. Una aplicación de linterna no necesita tus contactos. Puedes decir que no y cambiarlo después en Configuración."
          ],
          steps: ["Abre Play Store (Android) o App Store (Apple).", "Toca Buscar y escribe el nombre de la aplicación.", "Revisa el nombre del desarrollador, la calificación y la cantidad de reseñas.", "Toca Instalar u Obtener.", "Cuando pida permisos, permite solo lo que tenga sentido."],
          words: [["Aplicación", "un programa de tu teléfono o tableta que hace un tipo de trabajo."], ["Desarrollador", "la empresa o persona que hizo la aplicación."], ["Permiso", "tu autorización para que una aplicación use algo como tu cámara o tu ubicación."]],
          slides: [
            { title: "Solo tiendas oficiales", bullets: ["Android: Google Play Store", "iPhone y iPad: App Store"] },
            { title: "Antes de instalar", bullets: ["Revisa que el desarrollador sea la empresa real", "Mira la calificación y la cantidad de reseñas", "Las aplicaciones falsas copian nombres reales"] },
            { title: "Permisos", bullets: ["¿La aplicación de verdad lo necesita?", "Una linterna no necesita tus contactos", "Puedes cambiarlo después en Configuración"] }
          ],
          tryIt: "Abre tu tienda oficial de aplicaciones e instala una aplicación gratuita que te sirva, por ejemplo una del clima, la de tu farmacia o una de autobuses. Revisa primero el nombre del desarrollador.",
          youCanNow: "encontrar, revisar e instalar una aplicación de la tienda oficial y decidir qué permisos dar.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué hay que revisar el nombre del desarrollador antes de instalar una aplicación?", options: ["Para saber el precio de la aplicación en una tienda", "Para cambiar el tamaño del texto del teléfono", "Las aplicaciones falsas copian nombres reales, así que hay que asegurarse de que sea de la empresa real", "Para ver quién te llamó"], answer: 2, why: "Las aplicaciones falsas copian los nombres de aplicaciones reales, así que el nombre del desarrollador muestra si es auténtica." },
            { objective: "O5", q: "Una aplicación de juegos pide permiso para usar tu micrófono y tus contactos. ¿Qué harías?", options: ["Decir que no, a menos que de verdad los necesite; lo puedes cambiar después en Configuración", "Decir siempre que sí a todo", "Borrar tus contactos", "Darle tu contraseña"], answer: 0, why: "Da solo los permisos que una aplicación de verdad necesita; los puedes cambiar después." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mantener tu aparato bloqueado, actualizado y cargado",
          minutes: 5,
          goal: "Activar un bloqueo de pantalla y buscar una actualización de software.",
          text: [
            "Un bloqueo de pantalla impide que otras personas usen tu teléfono si se pierde o te lo roban. Usa un código PIN de al menos seis números, o tu huella o tu cara. No uses 123456 ni tu fecha de cumpleaños.",
            "Las actualizaciones arreglan problemas de seguridad. Búscalas en Configuración: en Android busca Actualización de software o Actualización del sistema; en iPhone y iPad ve a General y luego a Actualización de software. Conecta el cargador y usa Wi-Fi cuando actualices.",
            "Si pierdes tu teléfono, Encontrar mi dispositivo (Find My Device) de Android y Buscar (Find My) de Apple pueden mostrarlo en un mapa o bloquearlo. Actívalos ahora, mientras todavía lo tienes."
          ],
          steps: ["Abre Configuración y busca \"bloqueo de pantalla\" o \"código\".", "Pon un PIN de al menos seis números, o la huella o la cara.", "Busca en Configuración \"actualización de software\" e instala cualquier actualización.", "Busca en Configuración \"Encontrar\" o \"Buscar\" y asegúrate de que esté activado.", "Carga tu aparato cada noche."],
          words: [["PIN", "un código de números que desbloquea tu aparato."], ["Actualización de software", "un arreglo y una mejora gratuitos del fabricante del aparato."], ["Encontrar mi dispositivo / Buscar", "herramientas de Android y de Apple que te ayudan a encontrar un aparato perdido."]],
          slides: [
            { title: "Bloquea tu pantalla", bullets: ["PIN de seis números o más", "O huella o cara", "No 123456 ni tu cumpleaños"] },
            { title: "Actualiza tu aparato", bullets: ["Las actualizaciones arreglan problemas de seguridad", "Configuración y luego Actualización de software", "Conecta el cargador y usa Wi-Fi"] },
            { title: "Si se pierde", bullets: ["Android: Encontrar mi dispositivo", "Apple: Buscar (Find My)", "Actívalo ahora"] }
          ],
          tryIt: "Práctica de la tarea final: comprueba que el bloqueo de pantalla esté activado, busca en Configuración \"actualización de software\" para ver si hay una pendiente y activa Encontrar mi dispositivo o Buscar. Luego haz la tarea final: llama, envía en un mensaje una foto recién tomada e instala una aplicación útil.",
          youCanNow: "mantener tu aparato bloqueado, actualizado y fácil de encontrar si se pierde.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál de estos es un bloqueo de pantalla débil?", options: ["Tu huella digital", "Tu cara", "Un PIN de seis números difícil de adivinar", "123456"], answer: 3, why: "123456 o tu fecha de cumpleaños son fáciles de adivinar." },
            { objective: "O6", q: "Quieres poder encontrar tu teléfono si lo pierdes. ¿Qué harías ahora?", options: ["Esperar a perderlo y luego buscar una opción", "Activar Encontrar mi dispositivo (Android) o Buscar (Apple)", "Escribir tu PIN detrás del teléfono", "Desactivar el bloqueo de pantalla"], answer: 1, why: "Estas herramientas se tienen que activar mientras todavía tienes el teléfono." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Fotos, aplicaciones y la seguridad de tu aparato",
        questions: [
          { objective: "O4", q: "¿Dónde se guardan las fotos que tomas?", options: ["En la aplicación Teléfono", "En Fotos o Galería", "En Configuración", "En la tienda de aplicaciones"], answer: 1, why: "La aplicación Fotos o Galería guarda tus imágenes." },
          { objective: "O5", q: "¿Cuál es el lugar seguro para conseguir aplicaciones en un iPhone?", options: ["Un enlace en un mensaje de un desconocido", "Cualquier sitio web", "Un anuncio emergente", "La App Store"], answer: 3, why: "Instala aplicaciones solo desde la tienda oficial." },
          { objective: "O5", q: "Una aplicación de linterna pide ver tus contactos. ¿Cuál es la mejor opción?", options: ["Decir que no; no los necesita", "Decir que sí a todo", "Darle tu contraseña", "Borrar tus contactos"], answer: 0, why: "Permite solo los permisos que una aplicación de verdad necesita." },
          { objective: "O6", q: "¿Qué bloqueo de pantalla es el más fuerte?", options: ["Ningún bloqueo", "123456", "Tu fecha de cumpleaños", "Un PIN de seis números que no sea fácil de adivinar"], answer: 3, why: "Un PIN que no es obvio es más difícil de adivinar." },
          { objective: "O6", q: "¿Por qué instalar las actualizaciones de software?", options: ["Borran tus fotos", "Arreglan problemas de seguridad", "Cuestan dinero", "Apagan el teléfono para siempre"], answer: 1, why: "Las actualizaciones arreglan problemas que podrían usar los delincuentes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Usar un teléfono inteligente y una tableta",
    questions: [
      { objective: "O1", q: "¿Qué empresa hace el iPhone?", options: ["Samsung", "Google", "Apple", "Motorola"], answer: 2, why: "Apple hace el iPhone y el iPad." },
      { objective: "O1", q: "¿Qué hace un toque?", options: ["Abre algo", "Apaga el teléfono", "Borra una aplicación", "Hace una llamada solo"], answer: 0, why: "Un toque rápido abre una aplicación o elige algo." },
      { objective: "O1", q: "Para desplazarte por una página:", options: ["Pellizcas", "Presionas el botón de encendido", "Deslizas hacia arriba o abajo", "Sacudes el aparato"], answer: 2, why: "Deslizar mueve la página." },
      { objective: "O1", q: "Los pequeños dibujos de la pantalla de inicio se llaman:", options: ["Contactos", "Íconos", "Mensajes", "Actualizaciones"], answer: 1, why: "Los íconos son los dibujos que tocas para abrir aplicaciones." },
      { objective: "O2", q: "¿Qué aplicación tiene un ícono de engranaje y te deja cambiar el tamaño del texto?", options: ["Cámara", "Mensajes", "Configuración", "Fotos"], answer: 2, why: "En Configuración cambias cómo funciona el aparato." },
      { objective: "O2", q: "No encuentras una opción. ¿Qué es lo más rápido?", options: ["Comprar un teléfono nuevo", "Usar la casilla de búsqueda de arriba en Configuración", "Apagarlo y encenderlo", "Abrir la cámara"], answer: 1, why: "La búsqueda de Configuración encuentra las cosas por su nombre." },
      { objective: "O2", q: "¿Dónde puedes cambiar rápido el brillo en la mayoría de los aparatos?", options: ["Deslizando hacia abajo desde arriba de la pantalla", "En la aplicación Teléfono", "En la tienda de aplicaciones", "En tus contactos"], answer: 0, why: "Los controles rápidos de arriba incluyen el brillo." },
      { objective: "O3", q: "Para llamar a alguien tocando su nombre, primero:", options: ["Instalas una aplicación nueva", "Lo guardas como contacto", "Le tomas una foto", "Actualizas el teléfono"], answer: 1, why: "Un contacto guardado une un nombre con un número." },
      { objective: "O3", q: "¿Qué aplicación envía mensajes de texto?", options: ["Cámara", "Configuración", "Clima", "Mensajes"], answer: 3, why: "Mensajes envía y recibe textos." },
      { objective: "O3", q: "Llama un número desconocido. Una opción segura es:", options: ["Dejar que vaya al buzón de voz", "Darle un código de tus mensajes", "Decirle tu PIN", "Enviarle la foto de tu tarjeta bancaria"], answer: 0, why: "Quien llama de verdad dejará un mensaje de voz." },
      { objective: "O4", q: "Para que una foto salga nítida:", options: ["Sacudes el teléfono", "Tocas en la pantalla lo que fotografías antes de tomarla", "Apagas la pantalla", "Juntas dos dedos"], answer: 1, why: "Tocar lo que fotografías le dice a la cámara dónde enfocar." },
      { objective: "O4", q: "Para enviar una foto, ábrela y toca:", options: ["Eliminar", "Volumen", "Configuración", "Compartir"], answer: 3, why: "Compartir envía la foto a una persona o aplicación." },
      { objective: "O4", q: "¿Qué foto nunca debes enviar a un desconocido?", options: ["Un atardecer", "Una flor", "Tu identificación o tarjeta bancaria", "Tu almuerzo"], answer: 2, why: "Las identificaciones y tarjetas pueden usarse para robarte." },
      { objective: "O5", q: "La tienda oficial de aplicaciones en Android es:", options: ["Un enlace en un mensaje", "Un anuncio emergente", "Cualquier sitio web", "Google Play Store"], answer: 3, why: "Google Play es la tienda oficial de Android." },
      { objective: "O5", q: "Antes de instalar una aplicación, revisa:", options: ["Nada", "Solo el color del ícono", "El desarrollador, la calificación y las reseñas", "El saldo de tu banco"], answer: 2, why: "Las aplicaciones falsas copian nombres, así que revisa quién la hizo." },
      { objective: "O5", q: "Un permiso es:", options: ["Un tipo de foto", "Tu autorización para que una aplicación use cosas como la cámara o la ubicación", "Una cuenta del teléfono", "Un tipo de mensaje"], answer: 1, why: "Las aplicaciones piden permiso para usar partes de tu aparato." },
      { objective: "O6", q: "Un bloqueo de pantalla ayuda porque:", options: ["Hace más baratas las llamadas", "Toma fotos", "Agranda el texto", "Impide que otros usen tu teléfono si se pierde"], answer: 3, why: "Un bloqueo mantiene privada tu información." },
      { objective: "O6", q: "En un iPhone, Actualización de software está en:", options: ["La Cámara", "Fotos", "Mensajes", "Configuración y luego General"], answer: 3, why: "Las actualizaciones del iPhone están en Configuración, General, Actualización de software." },
      { objective: "O6", q: "Al instalar una actualización grande, es mejor:", options: ["Apagar el Wi-Fi", "Tener poca batería", "Usar Wi-Fi y conectar el cargador", "Hacerlo durante una llamada"], answer: 2, why: "El Wi-Fi y la corriente evitan que la actualización se detenga." },
      { objective: "O6", q: "Encontrar mi dispositivo (Android) y Buscar (Apple) te ayudan a:", options: ["Encontrar planes de teléfono baratos", "Encontrar amigos nuevos", "Encontrar aplicaciones gratis", "Encontrar en un mapa un aparato perdido"], answer: 3, why: "Muestran, bloquean o hacen sonar un aparato perdido." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      11,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Llamada",
        objective: "O3",
        notYet: "No se hizo ninguna llamada ni videollamada, o la persona necesitó ayuda para encontrar al contacto.",
        meets: "Llama o hace una videollamada a un contacto guardado sin ayuda.",
        exceeds: "Además, primero guarda un contacto nuevo con nombre y número."
      },
      {
        name: "Mensaje de texto con una foto",
        objective: "O4",
        notYet: "No se envió el mensaje o la foto, o la foto muestra información privada.",
        meets: "Toma una foto nítida y la envía en un mensaje de texto a alguien que conoce.",
        exceeds: "Usa el botón Compartir desde Fotos o Galería y agrega un mensaje corto."
      },
      {
        name: "Instalar una aplicación",
        objective: "O5",
        notYet: "No se instaló ninguna aplicación, o vino de fuera de la tienda oficial.",
        meets: "Una aplicación gratuita instalada desde la tienda oficial después de revisar el desarrollador y las reseñas.",
        exceeds: "Además, dice que no a un permiso que la aplicación no necesita."
      },
      {
        name: "Bloqueo y actualizaciones",
        objective: "O6",
        notYet: "No hay bloqueo de pantalla, o es uno fácil como 123456.",
        meets: "Hay un bloqueo de pantalla seguro activado y el software está actualizado.",
        exceeds: "Además, está activado Encontrar mi dispositivo o Buscar."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la tarea final",
      "Participantes que dicen usar su teléfono o tableta por su cuenta para llamadas, mensajes de texto y fotos 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber instalado con seguridad, desde la tienda oficial, una aplicación útil, como de la farmacia, del banco o de videollamadas",
      "Participantes que toman un siguiente curso, como Fundamentos de internet o Correo electrónico y comunicación en línea"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "El teléfono inteligente o la tableta de la persona, con carga (Android, iPhone o iPad)",
      "Wi-Fi para instalar aplicaciones y actualizaciones",
      "El número de un amigo o familiar para llamar y enviar mensajes de texto, o el de un compañero de clase",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Agrupe a las personas por tipo de aparato (Android o Apple) para que los pasos coincidan con lo que ven en la pantalla.",
      "Deje que cada persona haga cada toque ella misma; si tiene que mostrar algo, use su propio aparato.",
      "Algunas instalaciones piden la contraseña de una cuenta; deje que la persona la escriba en privado, y nunca pida ni anote su PIN o su contraseña.",
      "Pida que se llamen y se envíen mensajes de texto entre compañeros en clase, para que nadie tenga que compartir un número personal que prefiere guardar.",
      "Lleve un cargador y deje las actualizaciones para el final de una sesión, porque pueden tardar mucho."
    ]
  }
};
