"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-piloting.js. See scripts/koachlearn-courses/README.md, "Translations".
// Stick terms (throttle, yaw, pitch, roll) are given in Spanish with the English term in brackets, because drone apps and simulators often show the English words.

const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA: Organizaciones de formación en sistemas de aeronaves no tripuladas (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "Sistema en línea de drones (RPAS) de la KCAA", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting-es",
  lang: "es",
  translationOf: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Drones para el monitoreo agrícola 6: curso en línea de pilotaje de drones",
  skills: "Usar las palancas del control, Practicar ejercicios de vuelo en un simulador, Elegir y cambiar los modos de vuelo, Manejar emergencias (pérdida de enlace, batería baja, pérdida de GPS), Llevar una bitácora de piloto, Planear tu camino a una licencia de piloto a distancia",
  outcome: "volar con suavidad un conjunto de ejercicios estándar en un simulador de drones, manejar con calma las principales emergencias, llevar una bitácora como se debe y seguir un plan personal claro para obtener una licencia de piloto a distancia de la autoridad de aviación de tu país.",
  about: [
    "Este es el último curso del itinerario de monitoreo con drones, para cualquier persona de Kenia, Nigeria u otro país de África que quiera llegar a ser piloto de drones agrícolas hábil y con licencia. Está hecho para tomarse en línea: casi toda la práctica se hace en un simulador de drones gratuito o barato en una computadora o un teléfono, así que puedes equivocarte sin estrellar un dron real ni romper ninguna norma.",
    "El Capítulo 1 enseña los controles, un conjunto de ejercicios de práctica y los modos de vuelo que puede tener tu dron. El Capítulo 2 enseña los procedimientos de emergencia, cómo llevar una bitácora y los pasos hacia una licencia de piloto a distancia.",
    "Importante: este curso no te da una licencia y no te autoriza a volar. En Kenia y Nigeria, como en la mayoría de los países, la licencia de piloto a distancia la da la autoridad de aviación civil después de una formación en una organización aprobada y de aprobar sus exámenes. Nunca vueles un dron real sin el registro, la licencia y las aprobaciones que exige tu país."
  ],
  finalTask: "En un simulador de drones, completa los cinco ejercicios de este curso (vuelo estacionario, cuadrado, ocho, órbita y cuadrícula de cortacésped) hasta que puedas volar cada uno con suavidad tres veces seguidas, practica los tres ejercicios de emergencia, anota cada sesión en una bitácora y escribe un plan personal de licencia de una página: la autoridad de tu país, las organizaciones de formación aprobadas que encontraste, la licencia que necesitas, los pasos, los documentos, el costo estimado según fuentes oficiales y tus fechas meta.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Cualquier persona en Kenia, Nigeria u otra parte de África que quiera llegar a ser piloto de drones hábil y con licencia para la agricultura, y que toma en línea el último curso de la serie de monitoreo con drones.",
    startingPoint: "Saben lo que hacen los drones en las fincas, las normas básicas y cómo funciona el mapeo (cursos 1 a 5). Muchos tienen poca o ninguna práctica con las palancas, nunca han practicado emergencias, no llevan bitácora de vuelo y no conocen los pasos, los documentos ni las escuelas aprobadas para una licencia de piloto a distancia.",
    gap: "Los pilotos nuevos chocan cuando entran en pánico en una emergencia, pierden el GPS o vuelan con el frente hacia ellos, y algunos le pagan a escuelas no aprobadas o vuelan sin licencia. Practicar ejercicios y emergencias en un simulador, llevar una bitácora y seguir un plan claro para la licencia permite llegar a la formación aprobada listos para aprender rápido y volar de forma legal.",
    constraints: [
      "Dispositivos: una computadora o un teléfono que pueda correr un simulador de drones gratuito o económico; un control ayuda",
      "Este curso no da ninguna licencia ni permiso para volar; las licencias las da la autoridad de aviación después de la formación y los exámenes aprobados",
      "Nunca vueles un dron real sin el registro, la licencia y las aprobaciones que exige el país",
      "Tiempo: sesiones cortas de práctica diaria de 15 a 20 minutos",
      "Las tasas y los pasos cambian: hay que revisar las páginas oficiales de la autoridad"
    ],
    prerequisites: "\"Drones para el monitoreo agrícola 1: introducción, normas y seguridad\"; los cursos 2 a 5 ayudan, pero no son obligatorios."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un control de dron o un simulador", action: "nombrar lo que hace cada movimiento de las palancas y leer los datos principales de la pantalla de vuelo", standard: "y encontrar sin mirar los botones de regreso a casa y de pausa" },
    { id: "O2", condition: "En un simulador de drones", action: "volar los ejercicios de vuelo estacionario, cuadrado, ocho, órbita y cortacésped, y anotar cada sesión en una bitácora", standard: "volando cada ejercicio con suavidad tres veces seguidas" },
    { id: "O3", condition: "Con el GPS fuerte o débil", action: "explicar los principales modos de vuelo y volar con calma cuando el dron pasa al modo de actitud", standard: "manteniendo el dron a la vista y aterrizando con seguridad" },
    { id: "O4", condition: "En una pérdida de enlace, batería baja o pérdida de GPS simulada", action: "seguir los pasos de emergencia correctos", standard: "con calma y en el orden correcto, y luego anotarlo en la bitácora" },
    { id: "O5", condition: "Para tu país", action: "escribir un plan personal para obtener una licencia de piloto a distancia", standard: "con la autoridad, las escuelas aprobadas, los pasos, los documentos, los costos de fuentes oficiales y las fechas meta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Aprender a volar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Los controles: palancas, botones y pantalla",
          minutes: 5,
          goal: "Decir qué hace cada movimiento de las palancas y leer los datos principales de la pantalla de vuelo.",
          text: [
            "La mayoría de los controles de dron tienen dos palancas. En el Modo 2, la configuración más común, la palanca izquierda controla la altura (acelerador o throttle: arriba para subir, abajo para bajar) y el giro en el lugar (guiñada o yaw: izquierda y derecha). La palanca derecha mueve el dron hacia adelante y hacia atrás (cabeceo o pitch) y hacia los lados (alabeo o roll). Algunos pilotos usan otros modos; revisa el tuyo en los ajustes de la app.",
            "Los movimientos pequeños y suaves de las palancas dan un vuelo suave. Los principiantes empujan demasiado y demasiado rápido. Practica mover las palancas con cuidado y luego dejar que vuelvan al centro, donde la mayoría de los drones se quedan en su lugar.",
            "La pantalla de vuelo muestra el nivel de batería, la fuerza de la señal, los satélites GPS, la altura, la distancia al punto de inicio y la vista de la cámara. Aprende a echarle un vistazo y volver a mirar el dron. Ubica sin mirar los botones de regreso a casa y de pausa o freno."
          ],
          words: [["Acelerador (throttle)", "movimiento hacia arriba y hacia abajo (subir o bajar)."], ["Guiñada (yaw)", "girar el dron a la izquierda o a la derecha en el lugar."], ["Cabeceo (pitch)", "moverse hacia adelante o hacia atrás."], ["Alabeo (roll)", "moverse de lado, a la izquierda o a la derecha."], ["Modo 2", "la configuración de palancas más común: la izquierda para acelerador y guiñada, la derecha para cabeceo y alabeo."]],
          slides: [
            { title: "Palancas en Modo 2", bullets: ["Izquierda: subir/bajar (acelerador), girar (guiñada)", "Derecha: adelante/atrás (cabeceo), de lado (alabeo)", "Revisa tu modo en la app"] },
            { title: "Manos suaves", bullets: ["Movimientos pequeños y suaves", "Deja que las palancas vuelvan al centro", "La mayoría de los drones se quedan en su lugar"] },
            { title: "La pantalla de vuelo", bullets: ["Batería, señal, satélites GPS", "Altura, distancia al inicio, vista de la cámara", "Echa un vistazo y vuelve a mirar el dron"] },
            { title: "Conoce tus botones", bullets: ["Regreso a casa", "Pausa o freno", "Ubícalos sin mirar"] }
          ],
          tryIt: "Instala un simulador de drones en una computadora o un teléfono (busca un simulador de vuelo de drones en tu tienda de apps o en tu computadora; algunos fabricantes de drones lo ofrecen en su app). Busca el ajuste del modo de palancas, elige el Modo 2 y mueve cada palanca con cuidado para ver qué hace.",
          youCanNow: "decir qué hace cada palanca en el Modo 2, leer la pantalla de vuelo y ubicar los botones de emergencia.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es el cabeceo?", options: ["Girar en el mismo lugar", "Mover el dron hacia adelante y hacia atrás", "Subir", "Regresar a casa"], answer: 1, why: "El cabeceo mueve el dron hacia adelante y hacia atrás; en el Modo 2 está en la palanca derecha." },
            { objective: "O1", q: "Tu dron se va hacia un árbol y tienes que detenerlo rápido. ¿Qué ya deberías saber?", options: ["El precio del dron", "El número de teléfono del agricultor", "Cómo cambiar el color de la cámara", "Dónde está el botón de pausa o freno, sin mirar"], answer: 3, why: "Los pilotos aprenden dónde están los botones de pausa o freno y de regreso a casa para poder actuar sin mirar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ejercicios de práctica en un simulador",
          minutes: 6,
          goal: "Volar con suavidad cinco ejercicios estándar en un simulador.",
          text: [
            "Los buenos pilotos ganan habilidad con los mismos ejercicios, muchas veces. Practica cada ejercicio hasta que lo vueles con suavidad tres veces seguidas y luego pasa al siguiente. Las sesiones cortas diarias de 15 a 20 minutos funcionan mejor que una sesión larga a la semana.",
            "Ejercicio 1, vuelo estacionario: despega a la altura de los ojos y mantén el dron quieto un minuto. Ejercicio 2, cuadrado: vuela un cuadrado con el frente siempre mirando hacia adelante, y luego otra vez girando el frente en cada esquina. Ejercicio 3, ocho: vuela un ocho suave. Ejercicio 4, órbita: da vueltas alrededor de un punto (como un árbol) sin quitarle la cámara de encima. Ejercicio 5, cortacésped: vuela a mano líneas rectas paralelas sobre un campo, como en un vuelo de mapeo.",
            "Practica también con el dron mirando hacia ti (frente hacia ti), cuando la izquierda y la derecha se sienten al revés. Aquí es donde se estrellan la mayoría de los principiantes. Después de cada sesión, escribe qué salió bien y qué mejorar."
          ],
          steps: ["Vuelo estacionario a la altura de los ojos durante un minuto.", "Cuadrado: frente hacia adelante, y luego girando el frente en las esquinas.", "Ocho, suave y nivelado.", "Órbita alrededor de un árbol con la cámara sobre él.", "Líneas de cortacésped sobre un campo.", "Repite cada uno con el frente hacia ti."],
          words: [["Ejercicio", "una práctica corta que se repite para ganar una habilidad."], ["Frente hacia ti", "volar con la parte delantera del dron mirando hacia ti, así que los controles se sienten al revés."], ["Órbita", "volar en círculo alrededor de un punto."]],
          slides: [
            { title: "Cómo practicar", bullets: ["Los mismos ejercicios, muchas veces", "Tres vuelos suaves seguidos y pasa al siguiente", "15-20 minutos al día valen más que una sesión larga"] },
            { title: "Cinco ejercicios", bullets: ["1 Estacionario  2 Cuadrado  3 Ocho", "4 Órbita a un árbol  5 Líneas de cortacésped"] },
            { title: "El difícil: frente hacia ti", bullets: ["Izquierda y derecha se sienten al revés", "Donde se estrellan la mayoría de los principiantes", "Practica también cada ejercicio así"] }
          ],
          tryIt: "En tu simulador, vuela hoy los ejercicios 1 y 2. Escribe en un cuaderno: fecha, minutos, qué ejercicios, cuántos vuelos suaves, una cosa que mejorar.",
          youCanNow: "practicar cinco ejercicios estándar en un simulador y llevar la cuenta de tu avance.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es el ejercicio del cuadrado?", options: ["Volar un cuadrado, primero con el frente hacia adelante y luego girando en cada esquina", "Quedarse suspendido en un punto", "Dar vueltas alrededor de un árbol", "Volar en forma de ocho"], answer: 0, why: "El ejercicio del cuadrado vuela un cuadrado con el frente hacia adelante, y luego con el frente girando en cada esquina." },
            { objective: "O2", q: "Ya volaste una vez con suavidad el ejercicio de vuelo estacionario. ¿Qué haces después?", options: ["Pasar directo a volar de verdad", "Dejar de practicar el vuelo estacionario para siempre", "Seguir practicando hasta que salga suave tres veces seguidas, y luego seguir", "Saltar al ejercicio más difícil"], answer: 2, why: "Practica cada ejercicio hasta que puedas volarlo con suavidad tres veces seguidas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Los modos de vuelo y cuándo usarlos",
          minutes: 5,
          goal: "Explicar los principales modos de vuelo y cambiar de modo con seguridad cuando el GPS está débil.",
          text: [
            "La mayoría de los drones con cámara vuelan en un modo de posicionamiento o modo GPS. El dron usa satélites y sensores para quedarse en su lugar cuando sueltas las palancas, lo que facilita volar y permite el regreso a casa y el mapeo automático.",
            "Algunos drones también tienen un modo de actitud (algunas marcas lo llaman ATTI). El dron mantiene la altura pero no el lugar, así que se deja llevar por el viento como una lancha en un río. Un dron puede pasar a este modo por sí solo cuando el GPS está débil, por ejemplo cerca de estructuras altas de metal, bajo árboles espesos o en un valle profundo. Los pilotos que lo han practicado mantienen la calma; los que no, a menudo se estrellan.",
            "Otros modos son el deportivo (más rápido, menos protección), el trípode o cine (lento y suave para grabar) y las misiones automáticas. Muchos simuladores te dejan volar sin la ayuda del GPS. Practícalo para que la deriva no te tome por sorpresa."
          ],
          words: [["Modo GPS", "un modo de vuelo en el que el dron usa satélites para quedarse en su lugar."], ["Modo de actitud (ATTI)", "un modo en el que el dron mantiene la altura pero se deja llevar por el viento."], ["Deriva", "cuando el dron se aleja solo, normalmente empujado por el viento."]],
          slides: [
            { title: "Modo GPS / de posicionamiento", bullets: ["Se queda en su lugar cuando sueltas", "Permite regreso a casa y mapeo", "El modo normal para el trabajo agrícola"] },
            { title: "Modo de actitud (ATTI)", bullets: ["Mantiene la altura, no el lugar", "Se deja llevar por el viento", "Puede activarse solo cuando el GPS está débil"] },
            { title: "Otros modos", bullets: ["Deportivo: rápido, menos protección", "Trípode / cine: lento y suave", "Practica volar sin la ayuda del GPS"] }
          ],
          tryIt: "En tu simulador, apaga la ayuda del GPS o elige el modo de actitud, añade algo de viento y mantén un vuelo estacionario 30 segundos corrigiendo la deriva. Luego vuela el ejercicio del cuadrado en este modo.",
          youCanNow: "explicar los principales modos de vuelo y mantener el control cuando el dron tiene deriva sin GPS.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace el modo trípode o cine?", options: ["Vuela lo más rápido posible", "Apaga los motores", "Hace mapas de forma automática", "Vuela lento y suave para grabar"], answer: 3, why: "El modo trípode o cine es lento y suave, para grabar." },
            { objective: "O3", q: "Vas a mapear un campo junto a un silo de metal alto. ¿Para qué te preparas?", options: ["Para nada; el GPS siempre funciona", "Para que el dron pase al modo de actitud y se desvíe, así que practicas volar sin ayuda del GPS", "Para volar en modo deportivo", "Para volar solo con el frente hacia ti"], answer: 1, why: "Cerca de estructuras altas de metal el GPS puede estar débil, y el dron puede desviarse en modo de actitud." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Aprender a volar",
        questions: [
          { objective: "O1", q: "En el Modo 2, ¿qué hace empujar hacia arriba la palanca izquierda?", options: ["Avanza", "Gira a la derecha", "Sube", "Se mueve de lado"], answer: 2, why: "En el Modo 2, la palanca izquierda controla el acelerador (la altura) y la guiñada." },
          { objective: "O1", q: "¿Qué es la guiñada?", options: ["Girar el dron a la izquierda o a la derecha en el lugar", "Subir", "Aterrizar", "Tomar una foto"], answer: 0, why: "La guiñada hace girar el dron sobre su centro." },
          { objective: "O2", q: "¿Qué plan de práctica desarrolla mejor la habilidad?", options: ["Una sesión de tres horas al mes", "Sesiones cortas diarias con los mismos ejercicios", "Solo ver videos", "Volar un dron real sin formación"], answer: 1, why: "La repetición corta y regular da un control suave." },
          { objective: "O2", q: "¿Por qué practicar con el frente del dron hacia ti?", options: ["Es más rápido", "Ahorra batería", "Los simuladores lo exigen", "Los controles se sienten al revés y muchos principiantes se estrellan ahí"], answer: 3, why: "Practicarlo hace que la sensación de controles al revés se vuelva familiar." },
          { objective: "O3", q: "En el modo de actitud (ATTI), el dron:", options: ["Mantiene la altura pero se deja llevar por el viento", "Aterriza solo", "Se queda perfectamente en su lugar", "No se puede mover"], answer: 0, why: "Sin el posicionamiento GPS mantiene la altura pero no el lugar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llegar a ser piloto con licencia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ejercicios de emergencia: pérdida de enlace, batería baja, pérdida de GPS",
          minutes: 6,
          goal: "Seguir los pasos correctos en tres emergencias comunes.",
          text: [
            "Las emergencias son raras pero rápidas. Los pilotos las manejan bien porque han practicado los pasos hasta hacerlos automáticos. Antes de cada vuelo real, revisa que la altura de regreso a casa y la acción ante pérdida de señal estén bien configuradas.",
            "Pérdida de enlace (el control pierde la señal): mantén la calma, apunta las antenas del control hacia el dron y sube a un lugar más alto si es seguro. La mayoría de los drones inician el regreso a casa después de unos segundos; mira el cielo y prepárate para tomar el control cuando vuelva el enlace. Batería baja: detén la tarea y vuela directo a casa, o aterriza en el lugar seguro más cercano; nunca intentes terminar una línea más.",
            "Pérdida de GPS o deriva repentina: cambia tu mente al vuelo en actitud, no pierdas de vista el dron, tráelo con suavidad hacia ti contra el viento y aterriza en cuanto sea seguro. Después de cualquier emergencia o choque, haz seguro el lugar, revisa los daños, anótalo en tu bitácora y repórtalo a la autoridad si tus normas lo exigen."
          ],
          steps: ["Pérdida de enlace: calma, apunta las antenas, sube si es seguro, espera el regreso a casa.", "Batería baja: detén la tarea, vuela a casa o aterriza en el lugar seguro más cercano.", "Pérdida de GPS: vuela a mano con suavidad, contra el viento, aterriza pronto.", "Después de cualquier incidente: haz seguro el lugar, revisa daños, anótalo, repórtalo si se exige."],
          words: [["Pérdida de enlace", "cuando el dron y el control pierden su conexión de radio."], ["Dron escapado", "cuando un dron se va volando fuera del control del piloto."], ["Incidente", "un hecho no planeado que causó, o pudo causar, daño a personas o bienes."]],
          slides: [
            { title: "Practica hasta que sea automático", bullets: ["Las emergencias son raras pero rápidas", "Revisa antes la altura de RTH y la acción ante pérdida de señal"] },
            { title: "Pérdida de enlace", bullets: ["Calma, apunta las antenas", "Sube si es seguro", "Espera el regreso a casa"] },
            { title: "Batería baja y pérdida de GPS", bullets: ["Batería baja: detente, ve a casa o aterriza ya", "Pérdida de GPS: a mano, contra el viento, aterriza pronto"] },
            { title: "Después de cualquier incidente", bullets: ["Haz seguro el lugar", "Revisa daños, anótalo", "Repórtalo si tus normas lo exigen"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "En tu simulador, practica cada emergencia: pon un aviso de batería baja y vuela a casa, apaga el GPS en pleno vuelo y aterriza a mano y (si el simulador lo permite) provoca una pérdida de señal y observa el regreso a casa. Después escribe los pasos de memoria.",
          youCanNow: "seguir los pasos correctos ante una pérdida de enlace, una batería baja y una pérdida de GPS.",
          quickCheck: [
            { objective: "O4", q: "Antes de cada vuelo real, ¿qué revisas para estar listo ante una pérdida de enlace?", options: ["El ajuste de color de la cámara", "La dirección del agricultor", "Que la altura de regreso a casa y la acción ante la pérdida de señal estén bien configuradas", "La última página de la bitácora"], answer: 2, why: "Una altura de regreso a casa y una acción ante la pérdida de señal bien configuradas permiten que el dron vuelva seguro si se pierde el enlace." },
            { objective: "O4", q: "Después de un aterrizaje brusco con un dron real, se ve bien. ¿Qué haces?", options: ["Revisar si tiene daños y anotarlo en la bitácora", "Volver a volar de inmediato sin revisar", "Olvidarlo", "Escondérselo a tu instructor"], answer: 0, why: "Después de cualquier emergencia o choque, revisa si hay daños y anótalo; repórtalo si las normas lo exigen." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Llevar una bitácora de piloto",
          minutes: 4,
          goal: "Anotar cada vuelo en simulador y cada vuelo real en una bitácora.",
          text: [
            "La bitácora es tu historial de vuelo. Las organizaciones de formación y las autoridades de aviación usan las bitácoras para comprobar la experiencia, y los empleadores y clientes confían en los pilotos que las llevan. Anota el tiempo en simulador y el tiempo de vuelo real en columnas separadas.",
            "En cada sesión anota: fecha, lugar (o simulador), nombre del dron o del simulador, minutos totales, tipo de vuelo (ejercicios, mapeo, inspección), condiciones (viento, luz), cualquier problema o incidente, y lo que aprendiste. En los vuelos reales anota también el registro del dron y cualquier aprobación que usaste.",
            "Usa un cuaderno de papel, una hoja de cálculo o una app de registro, pero llénala cada vez y haz una copia de seguridad. Pregunta a tu organización de formación qué formato acepta para las solicitudes de licencia."
          ],
          steps: ["Elige papel, hoja de cálculo o app, y haz una copia de seguridad.", "Columnas separadas para los vuelos en simulador y los reales.", "Anota fecha, lugar, aeronave, minutos, tipo, condiciones, problemas, lecciones.", "En los vuelos reales, añade el registro y la aprobación usada.", "Pregunta a tu organización de formación qué formato acepta."],
          words: [["Bitácora", "un registro de cada vuelo que hace un piloto."], ["Tiempo de vuelo", "los minutos u horas que un piloto ha pasado volando."]],
          slides: [
            { title: "Por qué llevar una bitácora", bullets: ["Demuestra tu experiencia", "La usan las escuelas y las autoridades", "Da confianza a los clientes"] },
            { title: "Qué anotar", bullets: ["Fecha, lugar, dron o simulador", "Minutos, tipo de vuelo, condiciones", "Problemas, incidentes, lecciones"] },
            { title: "Llévala bien", bullets: ["Cada sesión, con copia de seguridad", "Tiempo en simulador y real por separado", "Usa el formato que acepte tu escuela"] }
          ],
          tryIt: "Empieza ahora tu bitácora como una hoja de cálculo con las columnas de esta lección, y anota cada sesión en simulador que hayas hecho en este curso hasta ahora.",
          youCanNow: "llevar una bitácora de piloto completa para los vuelos en simulador y los reales.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué las organizaciones de formación y las autoridades revisan las bitácoras de vuelo?", options: ["Para fijar el precio del dron", "Para comprobar la experiencia de un piloto", "Para elegir el clima", "Para cambiar el modo de las palancas"], answer: 1, why: "Las bitácoras de vuelo muestran la experiencia de un piloto a las escuelas, las autoridades, los empleadores y los clientes." },
            { objective: "O2", q: "Hoy volaste un dron real con una aprobación. ¿Qué agregas a lo que anotas en la bitácora?", options: ["Nada más que la fecha", "El clima de la próxima semana", "Tus datos bancarios", "El registro del dron y la aprobación que usaste"], answer: 3, why: "En los vuelos reales, anota también el registro del dron y cualquier aprobación que usaste." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tu camino a una licencia de piloto a distancia",
          minutes: 6,
          goal: "Escribir un plan personal para obtener una licencia de piloto a distancia en tu país.",
          text: [
            "Cada país decide cómo se da la licencia a los pilotos a distancia. En Kenia, la KCAA aprueba las Organizaciones de Formación en Sistemas de Aeronaves No Tripuladas (UTO) y las publica en su sitio web; su tabla de tasas incluye una licencia de estudiante de piloto a distancia, una licencia de piloto a distancia (RPL) y habilitaciones extra como la de vuelo fuera del alcance visual. Las solicitudes se hacen en el sistema en línea de drones de la KCAA. En Nigeria, la Parte 21 de la NCAA establece las licencias de piloto a distancia y otros requisitos de los RPAS. Otros países tienen sus propias normas.",
            "El camino habitual: elegir una organización de formación aprobada; estudiar la teoría (derecho aéreo, espacio aéreo y mapas, meteorología, la aeronave, factores humanos, procedimientos de emergencia); tomar clases de vuelo y un examen práctico; cumplir los requisitos de la autoridad; solicitar la licencia; y mantenerla vigente renovándola cuando se exija.",
            "Revisa cada paso, documento y tasa en las páginas oficiales de la autoridad o llamándole, y comprueba que una escuela esté en la lista de aprobadas de la autoridad antes de pagar. Tu bitácora de simulador muestra que estás listo para aprender rápido, pero no reemplaza la formación aprobada."
          ],
          steps: ["Encuentra las páginas de drones de tu autoridad de aviación.", "Encuentra su lista de organizaciones de formación aprobadas; elige dos para contactar.", "Pregunta a cada una: duración del curso, contenido teórico y práctico, costo, examen, documentos necesarios.", "Revisa la tasa de la licencia en la tabla oficial de tasas.", "Escribe fechas meta para la formación, el examen y la solicitud."],
          words: [["Organización de formación aprobada", "una escuela de drones aprobada por la autoridad de aviación para formar pilotos para una licencia (la KCAA las llama UTO)."], ["Habilitación", "un permiso extra en una licencia para un tipo de vuelo, como fuera del alcance visual."], ["Derecho aéreo", "las normas sobre el vuelo y el espacio aéreo."]],
          slides: [
            { title: "Cada país da licencia a sus pilotos", bullets: ["Kenia: la KCAA aprueba las UTO; RPL por el sistema en línea", "Nigeria: la Parte 21 de la NCAA cubre las licencias", "Otros: su propia autoridad"] },
            { title: "El camino habitual", bullets: ["Escuela aprobada", "Teoría: derecho aéreo, espacio aéreo, meteorología, aeronave", "Formación práctica y examen", "Solicita y luego renueva"] },
            { title: "Revisa antes de pagar", bullets: ["¿La escuela está en la lista de aprobadas?", "Tasas de la tabla oficial", "El simulador ayuda, pero no es una licencia"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Tarea final: termina los cinco ejercicios y los tres ejercicios de emergencia en tu simulador, anota cada sesión en tu bitácora y escribe tu plan de licencia de una página: autoridad, escuelas aprobadas que encontraste, licencia que necesitas, pasos, documentos, costo según fuentes oficiales y fechas meta.",
          youCanNow: "volar ejercicios estándar y procedimientos de emergencia en un simulador, llevar una bitácora y seguir un plan claro hacia una licencia oficial de piloto a distancia.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un paso habitual en el camino a una licencia de piloto a distancia?", options: ["Formarse en una organización aprobada y luego hacer un examen práctico", "Comprar el dron más grande", "Solo terminar un curso en línea", "Volar primero para un cliente"], answer: 0, why: "El camino habitual es formación aprobada, teoría, clases de vuelo y un examen, y luego la solicitud de la licencia." },
            { objective: "O5", q: "Un sitio web ofrece una licencia de piloto a distancia en línea en un día, sin examen, a cambio de un pago. ¿Qué haces?", options: ["Pagar rápido antes de que se acabe la oferta", "Pagar la mitad ahora", "Revisar las páginas oficiales de la autoridad y su lista aprobada antes de pagar nada", "Compartirlo con tus amigos"], answer: 2, why: "Las licencias las da la autoridad de aviación; revisa que una escuela esté en su lista aprobada antes de pagar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llegar a ser piloto con licencia",
        questions: [
          { objective: "O4", q: "El control pierde la señal con el dron. Un buen primer paso es:", options: ["Apagar el control", "Correr detrás del dron", "Mantener la calma, apuntar las antenas hacia el dron y esperar el regreso a casa", "Apagar los motores del dron"], answer: 2, why: "La mayoría de los drones vuelven a casa tras perder el enlace; una mejor posición de las antenas puede recuperarlo." },
          { objective: "O4", q: "Suena el aviso de batería baja y falta una línea de mapeo. Debes:", options: ["Volar rápido la última línea", "Detener la tarea y volar a casa o aterrizar con seguridad", "Subir más", "Ignorarlo"], answer: 1, why: "Nunca fuerces una batería baja; aterriza con seguridad y termina después." },
          { objective: "O2", q: "¿Qué debe anotar una bitácora de piloto?", options: ["Fecha, lugar, aeronave, minutos, tipo, condiciones, problemas, lecciones", "Solo los choques", "Solo el precio del dron", "Nada; es opcional"], answer: 0, why: "Una bitácora completa demuestra la experiencia y muestra patrones." },
          { objective: "O5", q: "¿Terminar este curso en línea te da una licencia?", options: ["Sí, de inmediato", "Sí, después del examen", "Solo en Nigeria", "No; las licencias las da la autoridad de aviación tras una formación aprobada y exámenes"], answer: 3, why: "Solo la autoridad nacional emite licencias de piloto a distancia." },
          { objective: "O5", q: "Antes de pagarle a una escuela de drones, debes:", options: ["Revisar que esté en la lista de aprobadas de la autoridad de aviación", "Confiar en su anuncio", "Preguntar solo a un amigo", "Pagar en efectivo para ahorrar tiempo"], answer: 0, why: "Solo la formación aprobada cuenta para una licencia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones para el monitoreo agrícola 6: curso en línea de pilotaje de drones",
    questions: [
      { objective: "O1", q: "En el Modo 2, la palanca derecha controla:", options: ["La altura y el giro", "Adelante/atrás y de lado", "El zoom de la cámara", "El regreso a casa"], answer: 1, why: "En el Modo 2, la palanca derecha controla el cabeceo y el alabeo." },
      { objective: "O1", q: "El acelerador controla:", options: ["El giro", "El movimiento de lado", "Subir y bajar", "La cámara"], answer: 2, why: "El acelerador mueve el dron hacia arriba y hacia abajo." },
      { objective: "O1", q: "El vuelo suave viene de:", options: ["Movimientos pequeños y suaves de las palancas", "Empujar las palancas a fondo cada vez", "Volar rápido", "Volar de noche"], answer: 0, why: "Los movimientos suaves dan un vuelo suave y controlado." },
      { objective: "O1", q: "¿Qué NO suele aparecer en la pantalla de vuelo?", options: ["El nivel de batería", "Los satélites GPS", "La altura", "El saldo bancario del agricultor"], answer: 3, why: "La pantalla muestra datos del vuelo, no finanzas personales." },
      { objective: "O2", q: "¿Por qué practicar primero en un simulador?", options: ["Es ley en todas partes", "Los errores no cuestan nada y no rompen ninguna norma", "Te da una licencia", "Los drones reales no pueden quedarse suspendidos"], answer: 1, why: "Los simuladores te dejan aprender con seguridad antes de los vuelos reales." },
      { objective: "O2", q: "¿Cuánto debe durar una buena sesión diaria de práctica?", options: ["Unos 15 a 20 minutos", "Cinco horas", "Un minuto", "Solo una vez al año"], answer: 0, why: "Las sesiones cortas y regulares desarrollan mejor la habilidad." },
      { objective: "O2", q: "El ejercicio del cortacésped practica:", options: ["Cortar el pasto", "Aterrizar", "Líneas rectas paralelas como en un vuelo de mapeo", "Tomarse selfis"], answer: 2, why: "Desarrolla el control que se usa en los patrones de mapeo." },
      { objective: "O2", q: "Un ejercicio de órbita significa:", options: ["Volar derecho hacia arriba", "Quedarse suspendido", "Aterrizar en un árbol", "Dar vueltas alrededor de un punto con la cámara sobre él"], answer: 3, why: "Las órbitas mantienen la cámara sobre un objetivo mientras se da la vuelta." },
      { objective: "O2", q: "Al volar con el frente del dron hacia ti, los controles se sienten:", options: ["Al revés de izquierda a derecha", "Exactamente igual", "Más lentos", "Bloqueados"], answer: 0, why: "El dron te mira, así que desde tu vista la izquierda y la derecha están cambiadas." },
      { objective: "O3", q: "En el modo GPS, cuando sueltas las palancas, el dron:", options: ["Se cae", "Se queda en su lugar", "Vuela a casa", "Da vueltas"], answer: 1, why: "El posicionamiento por satélite mantiene el dron en su lugar." },
      { objective: "O3", q: "Un dron puede pasar al modo de actitud cuando:", options: ["La batería está llena", "El cielo está despejado", "El GPS está débil, por ejemplo bajo árboles espesos o cerca de estructuras de metal", "Tomas una foto"], answer: 2, why: "Una señal de satélite débil quita la función de quedarse en su lugar." },
      { objective: "O3", q: "En modo de actitud con viento, el dron:", options: ["Se queda perfectamente quieto", "Aterriza solo", "Sube sin parar", "Se deja llevar por el viento"], answer: 3, why: "Mantiene la altura pero no el lugar." },
      { objective: "O3", q: "El modo deportivo suele significar:", options: ["Volar más rápido con menos protección", "Grabar lento y suave", "Aterrizaje automático", "Sin cámara"], answer: 0, why: "El modo deportivo cambia funciones de seguridad por velocidad." },
      { objective: "O4", q: "Después de cualquier choque o incidente grave, debes:", options: ["Ocultarlo", "Hacer seguro el lugar, revisar daños, anotarlo y reportarlo si se exige", "Volar otra vez de inmediato sin revisar", "Borrar la bitácora"], answer: 1, why: "Primero la seguridad, luego los registros y cualquier reporte obligatorio." },
      { objective: "O4", q: "Ante una pérdida de GPS, el plan más seguro es:", options: ["Volar más lejos", "Subir lo más alto posible", "Traerlo a mano con suavidad contra el viento y aterrizar pronto", "Soltar las palancas y esperar"], answer: 2, why: "El control manual y un aterrizaje temprano evitan que el dron se escape." },
      { objective: "O4", q: "Un dron escapado es:", options: ["Un vuelo de mapeo normal", "Un tipo de hélice", "Una plataforma de aterrizaje", "Un dron que se va volando fuera del control del piloto"], answer: 3, why: "Es una pérdida de control, a menudo tras problemas de GPS o de enlace." },
      { objective: "O2", q: "En una bitácora, el tiempo en simulador y el tiempo de vuelo real deben:", options: ["Ir en columnas separadas", "Sumarse sin etiquetas", "No anotarse", "Anotarse solo si pasan de una hora"], answer: 0, why: "Las autoridades y las escuelas necesitan ver cada tipo por separado." },
      { objective: "O5", q: "En Kenia, las escuelas de drones aprobadas se llaman:", options: ["Clubes de drones", "Organizaciones de Formación en Sistemas de Aeronaves No Tripuladas (UTO)", "Agroveterinarias", "Clínicas de plantas"], answer: 1, why: "La KCAA aprueba y publica la lista de UTO." },
      { objective: "O5", q: "¿Qué tema forma parte de la teoría para pilotos a distancia?", options: ["Cocina", "Reglas del fútbol", "Derecho aéreo, espacio aéreo y meteorología", "Música"], answer: 2, why: "Los pilotos deben conocer el derecho aéreo, el espacio aéreo, la meteorología y su aeronave." },
      { objective: "O5", q: "¿Dónde debes revisar la tasa de la licencia?", options: ["En una publicación de redes sociales", "En el anuncio de un vendedor", "En la memoria de un viejo amigo", "En la tabla oficial de tasas de la autoridad de aviación"], answer: 3, why: "Las tasas cambian; solo la tabla oficial es confiable." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      4,
      8,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, practica o corrige esa parte y revísala de nuevo.",
    criteria: [
      {
        name: "Cinco ejercicios",
        objective: "O2",
        notYet: "Uno o más ejercicios todavía no salen suaves tres veces seguidas.",
        meets: "Vuelo estacionario, cuadrado, ocho, órbita y cortacésped, cada uno volado con suavidad tres veces seguidas.",
        exceeds: "También vuela con suavidad el cuadrado y el ocho con el frente hacia ti."
      },
      {
        name: "Ejercicios de emergencia",
        objective: "O4",
        notYet: "Entra en pánico o se salta pasos en un ejercicio de emergencia.",
        meets: "Sigue los pasos correctos ante una pérdida de enlace, batería baja y pérdida de GPS.",
        exceeds: "Aterriza con seguridad desde el modo de actitud contra el viento sin ayuda."
      },
      {
        name: "Bitácora",
        objective: "O2",
        notYet: "Faltan sesiones o a las anotaciones les faltan datos clave.",
        meets: "Cada sesión anotada con fecha, simulador, minutos, tipo, condiciones, problemas y lecciones.",
        exceeds: "El tiempo en simulador y el tiempo real van en columnas separadas y la bitácora está respaldada."
      },
      {
        name: "Plan para la licencia",
        objective: "O5",
        notYet: "Falta la autoridad, la licencia o los pasos, o los costos son adivinados.",
        meets: "La autoridad, las escuelas aprobadas encontradas, la licencia que necesita, los pasos, los documentos, el costo de fuentes oficiales y las fechas meta.",
        exceeds: "Ya contactó a una escuela de la lista aprobada y anotó la fecha de la revisión."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que se inscriben en una organización de formación aprobada en un plazo de 90 días (encuesta de seguimiento)",
      "Participantes que obtienen una licencia de piloto a distancia en un plazo de un año",
      "Participantes que dicen volar solo con el registro, la licencia y las aprobaciones que exige su país"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono con un simulador de drones gratuito o económico; un control, si lo hay",
      "Una bitácora en papel, una hoja de cálculo o una app de registro",
      "Acceso a internet para ver las páginas de la autoridad de aviación y su lista de escuelas aprobadas",
      "Unos 60 minutos de lecciones, más sesiones diarias cortas de simulador de 15 a 20 minutos durante varias semanas"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego hagan los primeros ejercicios en una pantalla compartida para que vean los movimientos de las palancas.",
      "Deja claro que el curso no da ninguna licencia ni permiso para volar drones reales.",
      "Hagan revisiones cortas de ejercicios en las que cada quien muestre cada ejercicio tres veces seguidas.",
      "Revisen juntos las listas de organizaciones de formación aprobadas y advierte que no le paguen a escuelas que no estén en la lista.",
      "Califica los ejercicios, la bitácora y el plan para la licencia con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};
