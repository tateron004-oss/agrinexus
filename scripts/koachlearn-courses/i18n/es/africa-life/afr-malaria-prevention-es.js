"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-malaria-prevention.js). See scripts/koachlearn-courses/README.md, "Translations".
// Prevention and when to get help only, exactly as in the English: no medicine names for self-treatment, no doses, no treatment plans and no diagnosis.

const WHO_MALARIA = { name: "OMS, nota descriptiva: Paludismo (transmisión, síntomas, signos de peligro, mosquiteros, rociado, quimioprevención, vacunas, pruebas)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC (Centros para el Control y la Prevención de Enfermedades de EE. UU.): Acerca de la malaria (picaduras al anochecer y de noche, síntomas, buscar atención rápido)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "OMS, nota descriptiva: Agua para consumo humano (los recipientes de agua de la casa como criaderos de mosquitos; tápalos)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention-es",
  lang: "es",
  translationOf: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Prevenir la malaria en tu familia",
  skills: "Saber cómo se transmite la malaria y quién corre más riesgo, Usar un mosquitero tratado todas las noches, Reducir los mosquitos alrededor de la casa, Usar los servicios de la clínica para embarazadas y niños, Hacer la prueba de toda fiebre el mismo día, Reconocer los signos de peligro de la malaria grave",
  outcome: "proteger a tu familia de la malaria: dormir bajo un mosquitero tratado todas las noches, reducir los mosquitos alrededor de tu casa, usar los servicios de la clínica para embarazadas y niños pequeños, hacer la prueba de toda fiebre el mismo día y reconocer los signos de peligro que significan ir a la clínica ahora.",
  about: [
    "La malaria (también llamada paludismo) se transmite por la picadura de mosquitos, y África tiene la mayoría de los casos y muertes del mundo. La OMS (Organización Mundial de la Salud) dice que en 2024 la Región de África de la OMS tuvo cerca del 95% de los casos y muertes por malaria del mundo, y que los niños menores de 5 años fueron cerca de tres de cada cuatro de las muertes allí. La malaria se puede prevenir, y se puede tratar cuando se detecta a tiempo. Este curso es para madres, padres, abuelos, cuidadores y jóvenes de Nigeria, RD del Congo, Kenia, Ghana, Burkina Faso, Malí, Camerún y toda África.",
    "Aprenderás cómo se transmite la malaria y quién corre más riesgo, a colgar y cuidar un mosquitero tratado, a reducir los lugares donde los mosquitos se crían y pican alrededor de tu casa, qué servicios de la clínica protegen a las embarazadas y a los niños pequeños, a hacer la prueba de toda fiebre el mismo día y a reconocer los signos de peligro de la malaria grave.",
    "Este curso enseña a prevenir y cuándo buscar ayuda. No te dice qué medicina tomar ni cuánta: solo un trabajador de salud puede hacer la prueba de malaria y decidir el tratamiento. Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\", y juntas forman el plan contra la malaria de tu hogar."
  ],
  finalTask: "Haz un plan contra la malaria para tu hogar en una página: quién en tu casa corre más riesgo; cuántos mosquiteros tratados tienes y cuántos necesitas, dónde duerme cada persona bajo uno y cómo los vas a cuidar; tres cosas que harás para reducir los mosquitos alrededor de tu casa; las visitas a la clínica planeadas para cualquier embarazada o niño pequeño; qué harás el mismo día que alguien tenga fiebre; y una tarjeta de signos de peligro con el nombre y el número de tu clínica más cercana o de tu trabajador de salud comunitario.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Madres, padres, abuelos, cuidadores y jóvenes de toda África, sobre todo en zonas con mucha malaria, en aldeas, pueblos y asentamientos informales. Muchos han tenido malaria y cuidan a niños pequeños o a una familiar embarazada.",
    startingPoint: "Saben que los mosquitos causan la malaria y muchos tienen un mosquitero. Pero a menudo no se usa todas las noches ni lo usan todos, los mosquiteros tienen agujeros, hay agua estancada alrededor de la casa, las fiebres se tratan en casa con medicina sobrante o del mercado sin prueba, y los signos de peligro se notan tarde.",
    gap: "La malaria todavía mata a muchos niños pequeños y daña a las embarazadas y a sus bebés. Las familias necesitan hábitos diarios sencillos (un mosquitero cada noche, menos mosquitos) y acción rápida (una prueba para toda fiebre, ir a la clínica de inmediato ante signos de peligro) para evitar muertes. Estos hábitos son gratis o de bajo costo y funcionan mejor juntos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; muchos alumnos no tienen el idioma del curso como lengua materna",
      "Dispositivos: un teléfono básico con datos caros; las lecciones funcionan sin conexión una vez cargadas",
      "Dinero: presupuestos bajos; muchos mosquiteros, pruebas y servicios son gratis o de bajo costo en clínicas y programas nacionales, pero esto cambia según el lugar",
      "Salud: solo prevención y signos de alarma; sin nombres de medicinas para tratarse uno mismo, sin dosis, sin planes de tratamiento, sin diagnóstico; los alumnos siguen a su clínica, a su trabajador de salud comunitario y al ministerio de salud",
      "Tiempo: lecciones de 4 a 6 minutos que caben entre las tareas de la casa y el trabajo"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tu propio hogar", action: "explicar cómo se transmite la malaria y hacer una lista de quién en tu casa corre más riesgo", standard: "nombrando la picadura del mosquito de noche y nombrando a los niños pequeños y a las embarazadas" },
    { id: "O2", condition: "Con un mosquitero tratado y los lugares donde duerme tu familia", action: "colgar un mosquitero tratado, meter sus bordes y reparar cualquier agujero", standard: "con cada persona, empezando por los niños pequeños y las embarazadas, durmiendo bajo un mosquitero todas las noches" },
    { id: "O3", condition: "Con el área alrededor de tu casa", action: "quitar o tapar los lugares donde se crían los mosquitos y cerrarles el paso a la casa", standard: "haciendo al menos tres acciones en una semana" },
    { id: "O4", condition: "Con una embarazada o un niño pequeño en tu familia", action: "hacer una lista de los servicios contra la malaria que tu clínica les ofrece y planear las visitas", standard: "nombrando las visitas prenatales tempranas y preguntando por vacunas y medicina preventiva donde se ofrezcan" },
    { id: "O5", condition: "Con un familiar con fiebre en una zona de malaria", action: "llevar a la persona a hacerse la prueba de malaria el mismo día y seguir el tratamiento del trabajador de salud", standard: "sin tratar nunca con medicina sobrante o desconocida y sin dejar nunca el tratamiento antes de tiempo" },
    { id: "O6", condition: "Con un familiar enfermo", action: "reconocer los signos de peligro de la malaria grave y llevar a la persona a la clínica de inmediato", standard: "nombrando al menos cuatro signos de peligro y la clínica o el trabajador de salud comunitario más cercano" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Detener la picadura",
      lessons: [
        {
          title: "Cómo se transmite la malaria y quién corre más riesgo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar cómo se transmite la malaria y hacer una lista de quién en tu casa corre más riesgo.",
          text: [
            "La malaria la causa un parásito diminuto. Se transmite por la picadura de ciertos mosquitos hembra (Anopheles). Un mosquito pica a una persona con malaria, luego pica a otra y se la pasa. No pasa directamente de persona a persona por el contacto, la comida o el aire.",
            "Estos mosquitos pican sobre todo al final de la tarde y de noche, a menudo mientras la gente duerme. Los signos de malaria suelen empezar de 10 a 15 días después de la picadura, con fiebre, escalofríos y dolor de cabeza.",
            "La OMS dice que quienes corren más riesgo de malaria grave son los bebés y los niños menores de 5 años, las embarazadas, las personas con VIH y los viajeros que vienen de lugares sin malaria. En África, la mayoría de las muertes por malaria son de niños pequeños. La OMS informa que Nigeria y la RD del Congo tuvieron por sí solas más del 40% de las muertes por malaria de la región en 2024. En gran parte del norte de África la malaria local es rara, pero las personas de Marruecos, Egipto o Túnez que viajan a zonas de malaria corren un riesgo alto y deben ver a un trabajador de salud antes de ir."
          ],
          words: [["Parásito", "un ser vivo diminuto que vive dentro de otro cuerpo y lo daña."], ["Anopheles", "el tipo de mosquito que transmite la malaria."], ["En riesgo", "con más probabilidad de enfermarse o de enfermarse gravemente."]],
          slides: [
            { title: "Cómo se transmite la malaria", bullets: ["Un parásito que llevan los mosquitos Anopheles", "Pican a una persona enferma y luego a la siguiente", "No por el contacto, la comida ni el aire"] },
            { title: "Cuándo pican", bullets: ["Sobre todo al final de la tarde y de noche", "Los signos empiezan de 10 a 15 días después de la picadura", "Fiebre, escalofríos, dolor de cabeza"] },
            { title: "Quién corre más riesgo", bullets: ["Bebés y niños menores de 5 años", "Embarazadas", "Personas con VIH; viajeros de lugares sin malaria"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Escribe los nombres de todas las personas que duermen en tu casa. Encierra en un círculo a quienes corren más riesgo: niños menores de 5 años, cualquier embarazada, cualquier persona con VIH y visitas que vienen de lugares sin malaria.",
          youCanNow: "explicar cómo se transmite la malaria y decir quién en tu casa corre más riesgo.",
          quickCheck: [
            { objective: "O1", q: "¿Cómo se transmite la malaria?", options: ["Al dar la mano", "Por la picadura de ciertos mosquitos", "Al comer mangos", "Por la lluvia fría"], answer: 1, why: "La malaria se transmite por la picadura de mosquitos Anopheles infectados, no por el contacto, la comida ni el clima." },
            { objective: "O1", q: "¿Quién en una familia corre más riesgo de malaria grave?", options: ["Los niños menores de 5 años y las embarazadas", "Solo los chicos adolescentes", "Solo los abuelos", "Nadie corre más riesgo"], answer: 0, why: "La OMS nombra a los niños pequeños y a las embarazadas entre quienes corren más riesgo." }
          ]
        },
        {
          title: "Un mosquitero tratado todas las noches",
          objectives: ["O2"],
          minutes: 5,
          goal: "Colgar un mosquitero tratado, meter sus bordes y reparar cualquier agujero.",
          text: [
            "Un mosquitero tratado con insecticida (a menudo llamado MTI o mosquitero de larga duración) es una de las principales formas que la OMS recomienda para prevenir la malaria. El mosquitero impide que los mosquitos te alcancen mientras duermes, y el insecticida mata o debilita a los que se posan en él. La OMS dice que los mosquiteros de tipos más nuevos protegen mejor donde los mosquitos ya no mueren con el insecticida antiguo.",
            "Un mosquitero solo funciona si se usa todas las noches, todo el año, no solo en la temporada de lluvias. Cuélgalo sobre la cama o la estera para que llegue al suelo, mete los bordes debajo del colchón o la estera antes de que oscurezca y entra sin dejar huecos. Si no hay mosquiteros para todos, los niños pequeños y las embarazadas duermen bajo uno primero, y luego buscas mosquiteros para los demás.",
            "Cuídalo: revisa si tiene agujeros cada semana y cóselos o anúdalos enseguida. Lávalo con suavidad y no muy seguido, y sécalo a la sombra, según las instrucciones del paquete o de tu trabajador de salud. No uses los mosquiteros para pescar, para cercas ni para huertos. Muchos programas nacionales dan mosquiteros gratis en clínicas, visitas prenatales, escuelas o campañas: pregunta en tu clínica o a tu trabajador de salud comunitario."
          ],
          steps: ["Cuelga el mosquitero sobre la cama o la estera para que llegue al suelo.", "Mete los bordes debajo del colchón o la estera antes de que oscurezca.", "Entra sin dejar huecos, todas las noches.", "Revisa si tiene agujeros cada semana y ciérralos enseguida.", "Lávalo con suavidad, no muy seguido, y sécalo a la sombra.", "Pregunta en tu clínica o a tu trabajador de salud comunitario por mosquiteros gratis."],
          words: [["Insecticida", "un producto químico que mata insectos."], ["MTI (mosquitero tratado con insecticida)", "un mosquitero tratado con insecticida para alejar y matar a los mosquitos."], ["Campaña", "un tiempo en que los trabajadores de salud reparten mosquiteros o servicios a mucha gente."]],
          slides: [
            { title: "Por qué funciona un mosquitero tratado", bullets: ["Detiene a los mosquitos mientras duermes", "El insecticida los mata o los debilita", "Una de las principales formas de la OMS para prevenir la malaria"] },
            { title: "Todas las noches, todo el año", bullets: ["El mosquitero llega al suelo", "Bordes metidos antes de que oscurezca, sin huecos", "¿Faltan mosquiteros? Primero niños y embarazadas"] },
            { title: "Cuídalo", bullets: ["Revisa si hay agujeros cada semana; ciérralos", "Lávalo con suavidad, no seguido; sécalo a la sombra", "Nunca para pescar ni para huertos"] },
            { title: "Conseguir mosquiteros", bullets: ["Clínicas, visitas prenatales, escuelas, campañas", "Pregunta en tu clínica o a tu trabajador de salud comunitario"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Esta noche, revisa todos los mosquiteros de tu casa. Cuelga cada uno para que llegue al suelo, mete los bordes y cierra los agujeros. Cuenta cuántos mosquiteros más necesita tu familia.",
          youCanNow: "colgar, meter los bordes y cuidar un mosquitero tratado para que todos, empezando por quienes corren más riesgo, duerman bajo uno todas las noches.",
          quickCheck: [
            { objective: "O2", q: "¿Cuándo debe dormir tu familia bajo el mosquitero?", options: ["Solo en la temporada de lluvias", "Solo cuando alguien está enfermo", "Todas las noches, todo el año", "Solo los fines de semana"], answer: 2, why: "Los mosquitos pueden picar y transmitir la malaria todo el año; el mosquitero solo funciona si se usa todas las noches." },
            { objective: "O2", q: "Encuentras un agujero pequeño en el mosquitero. ¿Qué haces?", options: ["Tirar el mosquitero", "Usarlo para pescar", "Esperar a que el agujero sea más grande", "Coserlo o anudarlo enseguida"], answer: 3, why: "Los mosquitos pasan por agujeros pequeños; cerrarlos enseguida mantiene el mosquitero funcionando." }
          ]
        },
        {
          title: "Menos mosquitos y menos picaduras alrededor de la casa",
          objectives: ["O3"],
          minutes: 5,
          goal: "Quitar o tapar los lugares donde se crían los mosquitos y cerrarles el paso a la casa.",
          text: [
            "Los mosquitos ponen sus huevos en agua estancada. Charcos, llantas viejas, latas, ollas rotas, desagües tapados, bidones y cubetas de agua sin tapa pueden convertirse en criaderos cerca de donde duerme tu familia.",
            "Alrededor de la casa: vacía o voltea las cosas que juntan agua; tapa los bidones, cubetas y tanques con una tapa o una tela bien ajustada; limpia las canaletas y desagües tapados; rellena los charcos con tierra. Hazlo cada semana, sobre todo en la temporada de lluvias, y trabaja con tus vecinos, porque los mosquitos vuelan de una casa a otra.",
            "Mantenlos afuera y evita las picaduras: cierra puertas y ventanas al anochecer y pon mallas en ventanas y aleros si puedes. Por la tarde, usa mangas largas y pantalones largos o una tela larga envuelta. Los repelentes con DEET, IR3535 o icaridina pueden ayudar después del anochecer; úsalos como dice la etiqueta. Los espirales y vaporizadores también pueden ayudar, pero nunca reemplazan el mosquitero. Si los equipos de rociado del programa de salud vienen a rociar dentro de las casas (rociado residual intradomiciliario), déjalos entrar y sigue sus consejos sobre no lavar ni pintar las paredes después."
          ],
          steps: ["Recorre tu casa y encuentra todo lo que junta agua estancada.", "Vacíalo, voltéalo, tápalo o quítalo.", "Limpia los desagües tapados y rellena los charcos.", "Cierra puertas y ventanas al anochecer; pon mallas si puedes.", "Cubre brazos y piernas por la tarde; usa repelente como dice la etiqueta.", "Deja entrar a los equipos de rociado del programa de salud."],
          words: [["Criadero", "agua estancada donde los mosquitos ponen huevos."], ["Repelente", "una crema o un spray que aleja a los mosquitos de tu piel."], ["Rociado residual intradomiciliario (RRI)", "trabajadores de salud que rocían insecticida en las paredes de adentro para matar a los mosquitos que se posan allí."]],
          slides: [
            { title: "Los mosquitos se crían en agua estancada", bullets: ["Charcos, llantas, latas, ollas rotas", "Desagües tapados, bidones y cubetas abiertos"] },
            { title: "Cada semana alrededor de la casa", bullets: ["Vacía o voltea lo que junta agua", "Tapa bidones, cubetas y tanques", "Limpia desagües; rellena charcos; trabaja con tus vecinos"] },
            { title: "Mantenlos afuera, evita picaduras", bullets: ["Cierra puertas y ventanas al anochecer; mallas", "Mangas y pantalones largos por la tarde", "Repelente como dice la etiqueta; nunca en lugar del mosquitero"] },
            { title: "Equipos de rociado", bullets: ["El rociado interior mata a los mosquitos que se posan", "Deja entrar a los equipos del programa de salud", "Sigue sus consejos después"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Recorre tu casa ahora. Escribe cada lugar con agua estancada. Vacía, tapa o quita al menos tres hoy, y planea revisar de nuevo cada semana.",
          youCanNow: "quitar los criaderos de mosquitos alrededor de tu casa y reducir las picaduras por la tarde.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde ponen sus huevos los mosquitos?", options: ["En arena seca", "En agua estancada, como charcos, llantas y cubetas abiertas", "En el fuego de la cocina", "En el pan"], answer: 1, why: "Los mosquitos necesitan agua estancada para poner sus huevos." },
            { objective: "O3", q: "Usas un espiral contra mosquitos por la tarde. ¿Qué es verdad?", options: ["Puede ayudar, pero igual duermes bajo un mosquitero", "Ya no necesitas un mosquitero", "Cura la malaria", "Debe arder toda la noche junto al bebé"], answer: 0, why: "Los espirales y repelentes suman protección, pero nunca reemplazan el mosquitero." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Detener la picadura",
        questions: [
          { objective: "O1", q: "¿Cuándo pican sobre todo los mosquitos de la malaria?", options: ["Al mediodía", "Solo por la mañana", "Al final de la tarde y de noche", "Solo en la temporada seca"], answer: 2, why: "Los mosquitos Anopheles pican sobre todo al final de la tarde y de noche, a menudo mientras la gente duerme." },
          { objective: "O2", q: "Tu familia tiene tres mosquiteros y cinco personas. ¿Quién duerme bajo los mosquiteros primero?", options: ["El padre y los hijos mayores", "Las visitas", "El primero que se acueste", "Los niños pequeños y la embarazada"], answer: 3, why: "Los niños pequeños y las embarazadas corren más riesgo, así que van primero mientras consigues más mosquiteros." },
          { objective: "O2", q: "¿Cómo se debe colgar un mosquitero?", options: ["Que llegue al suelo y con los bordes metidos antes de que oscurezca", "Enrollado encima de la cama", "Cubriendo media cama", "Solo sobre la cara"], answer: 0, why: "Un mosquitero que llega al suelo y tiene los bordes metidos no deja huecos para los mosquitos." },
          { objective: "O3", q: "Detrás de tu casa hay llantas viejas llenas de agua de lluvia. ¿Qué haces?", options: ["Dejarlas; no son tuyas", "Vaciarlas y guardarlas secas, o quitarlas", "Echarles más agua", "Cubrirlas con un mosquitero"], answer: 1, why: "El agua en las llantas es un criadero; vaciarlas o quitarlas impide que los mosquitos se críen." },
          { objective: "O3", q: "Unos trabajadores de salud vienen a rociar las paredes de adentro de tu casa. ¿Qué haces?", options: ["Rechazarlos", "Lavar las paredes justo después", "Dejarlos entrar y seguir sus consejos después", "Pintar encima del rociado ese mismo día"], answer: 2, why: "El rociado residual intradomiciliario es una medida clave de la OMS; lavar o pintar las paredes hace que deje de funcionar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger a quienes corren más riesgo y actuar rápido",
      lessons: [
        {
          title: "Proteger a las embarazadas y a los niños pequeños",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hacer una lista de los servicios contra la malaria que tu clínica ofrece a las embarazadas y a los niños pequeños y planear las visitas.",
          text: [
            "La malaria en el embarazo puede dañar a la madre y al bebé: la OMS dice que puede hacer que el bebé nazca demasiado pronto o demasiado pequeño. Una embarazada debe empezar las visitas prenatales temprano e ir a todas. En la atención prenatal de muchos países puede recibir un mosquitero tratado, la prueba de malaria y, donde el programa nacional lo ofrece, medicina preventiva contra la malaria en el embarazo (la OMS lo llama TPI, tratamiento preventivo intermitente). El trabajador de salud decide qué necesita y cuándo. Nunca tomes medicina contra la malaria en el embarazo sin un trabajador de salud.",
            "Para los niños pequeños: la OMS recomienda dos vacunas contra la malaria (RTS,S y R21) para niños en zonas con mucha malaria, y se están sumando a las vacunas infantiles de rutina en muchos países africanos. En algunas zonas, por ejemplo partes del Sahel como Burkina Faso y Malí, los trabajadores de salud también dan a los niños pequeños medicina preventiva durante la temporada de lluvias (quimioprevención estacional de la malaria). Pregunta en tu clínica qué se ofrece donde vives y mantén al día la tarjeta de salud del niño.",
            "Las vacunas y la medicina preventiva suman protección, pero la OMS dice que funcionan mejor junto con los mosquiteros. Sigue usando el mosquitero todas las noches. Escribe las fechas de la clínica en tu plan, y pide ayuda a tu trabajador de salud comunitario si no puedes llegar a la clínica."
          ],
          steps: ["Embarazada: empieza las visitas prenatales temprano y ve a todas.", "Pregunta en la atención prenatal por un mosquitero, la prueba y la medicina preventiva contra la malaria.", "Niño: pregunta en la clínica si dan vacunas contra la malaria donde vives y mantén al día la tarjeta de salud.", "Pregunta si hay campañas de medicina preventiva en la temporada de lluvias en tu zona.", "Escribe cada fecha de la clínica en tu plan y sigue usando los mosquiteros."],
          words: [["Atención prenatal", "controles de salud para una mujer durante el embarazo."], ["Vacuna", "una medicina, por lo general una inyección, que ayuda al cuerpo a protegerse de una enfermedad."], ["Medicina preventiva", "medicina que da un trabajador de salud para evitar una enfermedad antes de que empiece."], ["Tarjeta de salud", "la tarjeta o libreta donde la clínica anota las vacunas y los controles de un niño."]],
          slides: [
            { title: "La malaria en el embarazo", bullets: ["Puede dañar a la madre y al bebé", "El bebé nace demasiado pronto o demasiado pequeño", "Empieza las visitas prenatales temprano; ve a todas"] },
            { title: "En la atención prenatal, pregunta por", bullets: ["Un mosquitero tratado y la prueba de malaria", "Medicina preventiva donde se ofrezca (TPI)", "Nunca tomes medicina contra la malaria sin un trabajador de salud"] },
            { title: "Niños pequeños", bullets: ["Vacunas contra la malaria RTS,S y R21 donde se ofrezcan", "Medicina preventiva en la temporada de lluvias en algunas zonas", "Mantén al día la tarjeta de salud"] },
            { title: "Sigue usando el mosquitero", bullets: ["Vacunas y medicinas funcionan mejor con mosquiteros", "Escribe las fechas de la clínica en tu plan", "Pide ayuda a tu trabajador de salud comunitario"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Si alguien en tu casa está embarazada o es menor de 5 años, escribe la próxima fecha de la clínica de cada uno y las preguntas que harás sobre mosquiteros, vacunas y medicina preventiva. Si no hay nadie, hazlo para un vecino o familiar al que puedas ayudar.",
          youCanNow: "nombrar los servicios de la clínica que protegen de la malaria a las embarazadas y a los niños pequeños y planear las visitas.",
          quickCheck: [
            { objective: "O4", q: "Una mujer de tu familia está embarazada. ¿Cuál es el primer paso para protegerla de la malaria?", options: ["Esperar hasta el último mes", "Comprar medicina contra la malaria en el mercado", "Empezar las visitas prenatales temprano, dormir bajo un mosquitero y preguntar por la protección contra la malaria", "Dejar de comer fruta"], answer: 2, why: "La atención prenatal temprana más un mosquitero le da la protección que ofrece la clínica." },
            { objective: "O4", q: "Tu hijo recibió la vacuna contra la malaria. ¿Y el mosquitero?", options: ["Tirarlo", "Usarlo solo en la temporada de lluvias", "Dárselo a los vecinos", "Seguir usándolo todas las noches; las vacunas funcionan mejor con mosquiteros"], answer: 3, why: "La OMS dice que las vacunas dan el mayor beneficio combinadas con mosquiteros y otras medidas." }
          ]
        },
        {
          title: "Fiebre: haz la prueba el mismo día",
          objectives: ["O5"],
          minutes: 5,
          goal: "Llevar a un familiar con fiebre a hacerse la prueba de malaria el mismo día.",
          text: [
            "En una zona de malaria, trata toda fiebre como posible malaria hasta que una prueba diga lo contrario. La malaria suele empezar como muchas otras enfermedades, con fiebre, escalofríos, dolor de cabeza y dolores en el cuerpo, así que no se puede saber solo mirando. La OMS recomienda confirmar todo caso sospechoso con una prueba, una prueba de diagnóstico rápido o un microscopio, antes del tratamiento.",
            "Ve el mismo día a una clínica, un centro de salud o un trabajador de salud comunitario capacitado que pueda hacer la prueba. Una prueba rápida toma una gota de sangre del dedo y da el resultado en minutos. En un niño menor de 5 años, una fiebre nunca debe esperar hasta mañana.",
            "Si la prueba muestra malaria, el trabajador de salud elige la medicina y te dice cómo tomarla. Tómala toda, exactamente como te dijeron, aunque la persona se sienta mejor. No uses medicina sobrante, medicina de otra persona ni medicina desconocida del mercado o de un vendedor ambulante: puede ser del tipo equivocado, muy poca o falsa. Si la prueba es negativa, el trabajador de salud busca otra causa. Si la persona no mejora, o empeora, vuelve."
          ],
          steps: ["¿Fiebre en una zona de malaria? Trátala como posible malaria.", "Ve el mismo día a una clínica o a un trabajador de salud comunitario que pueda hacer la prueba.", "Si encuentran malaria: toma la medicina exactamente como dice el trabajador de salud, toda.", "Nunca uses medicina sobrante, prestada o desconocida.", "¿No mejora o empeora? Vuelve de inmediato."],
          words: [["Prueba de diagnóstico rápido (PDR)", "una prueba rápida con una gota de sangre del dedo que muestra la malaria en minutos."], ["Resultado negativo", "la prueba no encontró malaria."], ["Medicina falsa", "medicina que parece real pero tiene la cantidad equivocada o nada que funcione."]],
          slides: [
            { title: "Toda fiebre puede ser malaria", bullets: ["Fiebre, escalofríos, dolor de cabeza, dolores", "No se puede saber solo mirando", "OMS: prueba antes del tratamiento"] },
            { title: "Haz la prueba el mismo día", bullets: ["Clínica o trabajador de salud comunitario capacitado", "Prueba rápida: una gota de sangre, minutos", "Niño menor de 5 años: nunca esperes hasta mañana"] },
            { title: "Si es malaria", bullets: ["El trabajador de salud elige la medicina", "Tómala toda, exactamente como te dijeron", "¿No mejora o empeora? Vuelve"] },
            { title: "Nunca", bullets: ["Medicina sobrante o prestada", "Medicina desconocida de un vendedor ambulante", "Puede ser equivocada, muy poca o falsa"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Averigua dónde puede tu familia hacerse la prueba de malaria el mismo día: la clínica o el trabajador de salud comunitario más cercano, el horario y cómo llegarías. Escríbelo en tu plan.",
          youCanNow: "hacer la prueba de toda fiebre el mismo día y seguir solo el tratamiento del trabajador de salud, completo.",
          quickCheck: [
            { objective: "O5", q: "Tu hijo tiene fiebre por la tarde. ¿Qué haces?", options: ["Hacerle la prueba de malaria el mismo día en una clínica o con un trabajador de salud comunitario", "Esperar tres días", "Darle medicina que sobró la última vez", "Comprarle medicina a un vendedor ambulante"], answer: 0, why: "La OMS aconseja hacer la prueba antes del tratamiento, y la fiebre de un niño no debe esperar." },
            { objective: "O5", q: "Después de dos días de medicina contra la malaria, tu esposo se siente mejor. ¿Qué debe hacer?", options: ["Dejarla y guardar el resto para la próxima vez", "Terminarla toda exactamente como dijo el trabajador de salud", "Darle el resto a un vecino", "Tomar el doble la próxima vez"], answer: 1, why: "Dejarla antes de tiempo puede hacer que la malaria vuelva; tómala toda como te dijeron." }
          ]
        },
        {
          title: "Signos de peligro de la malaria grave y el plan de tu familia",
          objectives: ["O6"],
          minutes: 5,
          goal: "Reconocer los signos de peligro de la malaria grave y llevar a la persona a una clínica de inmediato.",
          text: [
            "La malaria puede volverse grave rápido, sobre todo en niños pequeños y embarazadas. La malaria grave es una emergencia.",
            "La OMS nombra estos signos de peligro. Ve a la clínica o al hospital AHORA, de día o de noche, si la persona: está muy cansada o débil, o no puede sentarse ni ponerse de pie; está confundida, muy somnolienta o cuesta despertarla; tiene convulsiones (ataques), sobre todo más de una vez; tiene dificultad para respirar; tiene la orina oscura o con sangre; tiene los ojos o la piel amarillos; o tiene sangrados fuera de lo normal. Un niño que no puede beber ni mamar, o que vomita todo, también necesita la clínica ahora.",
            "Prepárate antes de que pase: escribe los signos de peligro y el nombre, el lugar y el número de teléfono de tu clínica, hospital y trabajador de salud comunitario más cercanos en una tarjeta en la pared; sabe cómo llegarás de noche; y guarda algo de dinero para el transporte si puedes. Luego pon todo lo de este curso en el plan contra la malaria de tu hogar."
          ],
          steps: ["Aprende los signos de peligro.", "Si ves alguno: ve a la clínica o al hospital ahora, de día o de noche.", "Haz una tarjeta con los signos y los nombres y números de tu clínica y de tu trabajador de salud más cercanos.", "Planea cómo viajarás de noche y guarda dinero para el transporte si puedes.", "Escribe el plan contra la malaria de tu hogar."],
          words: [["Malaria grave", "malaria que se ha vuelto peligrosa para la vida y necesita un hospital o una clínica de inmediato."], ["Convulsiones (ataques)", "sacudidas repentinas del cuerpo que la persona no puede controlar."], ["Ictericia", "color amarillo en los ojos o la piel."]],
          slides: [
            { title: "La malaria grave es una emergencia", bullets: ["Puede pasar rápido", "Más peligrosa para niños pequeños y embarazadas"] },
            { title: "Ve AHORA, de día o de noche, si hay", bullets: ["Debilidad extrema; confusión o cuesta despertarla", "Convulsiones (ataques); dificultad para respirar", "Orina oscura o con sangre; ojos o piel amarillos; sangrado", "El niño no puede beber ni mamar, o vomita todo"] },
            { title: "Prepárate", bullets: ["Tarjeta de signos de peligro en la pared", "Números de la clínica, el hospital y el trabajador de salud", "Plan de transporte de noche; dinero guardado si puedes"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Haz ahora tu tarjeta de signos de peligro con al menos cuatro signos y el nombre y el número de tu clínica o trabajador de salud comunitario más cercano. Luego escribe el plan completo contra la malaria de tu hogar, según la tarea final.",
          youCanNow: "reconocer los signos de peligro de la malaria grave, buscar ayuda de inmediato y tener un plan contra la malaria en tu hogar.",
          quickCheck: [
            { objective: "O6", q: "Un niño con malaria empieza a tener convulsiones. ¿Qué haces?", options: ["Esperar a ver si se le pasa", "Darle más de la misma medicina", "Ir a la clínica o al hospital ahora", "Dejar que duerma hasta que se le pase"], answer: 2, why: "Las convulsiones son un signo de peligro de la malaria grave; es una emergencia." },
            { objective: "O6", q: "¿Cuál es un signo de peligro de la malaria grave?", options: ["Un dolor de cabeza leve", "Sentir algo de calor después del trabajo", "Tener ganas de comer", "Ojos amarillos, u orina oscura o con sangre"], answer: 3, why: "La OMS nombra la ictericia y la orina oscura o con sangre como signos de peligro que necesitan atención de emergencia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Proteger a quienes corren más riesgo y actuar rápido",
        questions: [
          { objective: "O4", q: "¿Qué puede recibir una embarazada en la atención prenatal en muchos países?", options: ["Redes de pesca gratis", "Un mosquitero tratado, la prueba de malaria y medicina preventiva donde el programa la ofrece", "Medicina contra la malaria para guardar en casa", "Nada sobre la malaria"], answer: 1, why: "La atención prenatal es donde muchos programas dan mosquiteros, pruebas y medicina preventiva en el embarazo." },
          { objective: "O4", q: "¿Qué vacunas contra la malaria recomienda la OMS para niños en zonas con mucha malaria?", options: ["RTS,S y R21", "Polio y sarampión", "Solo tétanos", "No hay vacuna contra la malaria"], answer: 0, why: "La OMS recomienda RTS,S (desde 2021) y R21 (desde 2023) para niños en zonas con malaria moderada a alta." },
          { objective: "O5", q: "¿Por qué hacer la prueba antes de tratar una fiebre?", options: ["Las pruebas son divertidas", "Para poder vender la medicina", "Porque muchas enfermedades se parecen a la malaria; la prueba muestra si lo es", "Las pruebas reemplazan los mosquiteros"], answer: 2, why: "La malaria se parece a otras fiebres; una prueba asegura que se dé el tratamiento correcto." },
          { objective: "O5", q: "Un vendedor ambulante ofrece pastillas baratas contra la malaria. ¿Qué haces?", options: ["Comprarlas para la familia", "Comprarlas solo para los niños", "Compartirlas con los vecinos", "No comprarlas; hacerse la prueba y recibir tratamiento de un trabajador de salud"], answer: 3, why: "La medicina desconocida puede ser equivocada o falsa; la prueba y el tratamiento de un trabajador de salud son seguros." },
          { objective: "O6", q: "A medianoche tu hija con malaria está confundida y cuesta mucho despertarla. ¿Qué haces?", options: ["Ir a la clínica o al hospital ahora", "Esperar a la mañana", "Darle más medicina", "Ponerla bajo el mosquitero y dejarla dormir"], answer: 0, why: "La confusión y que cueste despertarla son signos de peligro; ve ahora, de día o de noche." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Prevenir la malaria en tu familia",
    questions: [
      { objective: "O1", q: "¿Qué lleva la malaria de una persona a otra?", options: ["Las moscas", "Ciertos mosquitos (Anopheles)", "El agua sucia", "La tos"], answer: 1, why: "La malaria se transmite por la picadura de mosquitos Anopheles infectados." },
      { objective: "O1", q: "¿Más o menos cuánto tiempo después de una picadura suelen empezar los signos de malaria?", options: ["En la misma hora", "Después de un año", "De 10 a 15 días", "Nunca"], answer: 2, why: "La OMS dice que los síntomas suelen aparecer de 10 a 15 días después de la picadura infectada." },
      { objective: "O1", q: "Una prima de Túnez, donde la malaria local es rara, te visita en una zona de malaria. ¿Qué es verdad?", options: ["Está a salvo porque es adulta", "No puede contraer malaria", "Solo necesita un mosquitero en la temporada de lluvias", "Corre un riesgo alto y debe ver a un trabajador de salud antes de viajar y dormir bajo un mosquitero"], answer: 3, why: "Los viajeros de lugares sin malaria corren un riesgo alto, así que se preparan con un trabajador de salud." },
      { objective: "O2", q: "¿Qué hace el insecticida de un mosquitero tratado?", options: ["Mata o debilita a los mosquitos que se posan en él", "Hace que el mosquitero huela bien", "Cura la malaria", "Mantiene limpio el mosquitero"], answer: 0, why: "El insecticida mata o debilita a los mosquitos, así que el mosquitero protege más." },
      { objective: "O2", q: "¿Cómo debes secar un mosquitero lavado?", options: ["Al sol fuerte durante una semana", "A la sombra, después de lavarlo con suavidad", "Sobre el fuego de la cocina", "Mojado, sobre la cama"], answer: 1, why: "Lavarlo con suavidad y secarlo a la sombra ayuda a que el mosquitero siga funcionando." },
      { objective: "O2", q: "¿Qué uso de un mosquitero está mal?", options: ["Sobre una estera para dormir", "Sobre la cuna de un bebé", "Como cerca del huerto", "Sobre la cama de una embarazada"], answer: 2, why: "Los mosquiteros son para dormir debajo; usarlos para huertos o para pescar deja a las personas sin protección." },
      { objective: "O3", q: "¿Qué tarea reduce la cría de mosquitos en casa?", options: ["Dejar las cubetas sin tapa", "Guardar llantas viejas en el patio", "Dormir afuera", "Vaciar, tapar o quitar las cosas que juntan agua estancada"], answer: 3, why: "Quitar el agua estancada elimina los lugares donde los mosquitos ponen huevos." },
      { objective: "O3", q: "¿Cuándo debes cerrar puertas y ventanas para que no entren los mosquitos?", options: ["Al anochecer", "Al mediodía", "Solo los domingos", "Nunca"], answer: 0, why: "Los mosquitos de la malaria pican sobre todo desde el final de la tarde y de noche." },
      { objective: "O3", q: "¿Por qué trabajar con los vecinos contra el agua estancada?", options: ["Para pedirles prestadas sus llantas", "Porque los mosquitos vuelan de una casa a otra", "Para que ellos lo paguen", "No importa"], answer: 1, why: "Los criaderos de la casa de al lado también mandan mosquitos a tu casa." },
      { objective: "O4", q: "La OMS dice que la malaria en el embarazo puede causar...", options: ["Nada en absoluto", "Gemelos", "Que el bebé nazca demasiado pronto o demasiado pequeño", "Solo un resfriado leve"], answer: 2, why: "La malaria en el embarazo puede llevar a un parto prematuro y a un bajo peso al nacer." },
      { objective: "O4", q: "¿Dónde puedes averiguar si dan vacunas contra la malaria a los niños donde vives?", options: ["En una publicación de redes sociales", "En el mercado", "En lo que adivina un vecino", "En tu clínica o con tu trabajador de salud comunitario"], answer: 3, why: "Los programas de vacunación cambian según el lugar; la clínica sabe qué se ofrece." },
      { objective: "O4", q: "En partes del Sahel, ¿qué dan los trabajadores de salud a los niños pequeños en la temporada de lluvias?", options: ["Medicina preventiva contra la malaria en campañas", "Teléfonos gratis", "Redes de pesca", "Nada"], answer: 0, why: "La quimioprevención estacional de la malaria se da a los niños pequeños en las temporadas de alto riesgo en algunas zonas." },
      { objective: "O5", q: "¿Qué recomienda la OMS antes de tratar un caso sospechoso de malaria?", options: ["Esperar una semana", "Una prueba, rápida o con microscopio", "Preguntarle a un vecino", "Comprar dos tipos de medicina"], answer: 1, why: "La OMS recomienda confirmar todo caso sospechoso con una prueba antes del tratamiento." },
      { objective: "O5", q: "Te sobraron pastillas de la malaria del año pasado. Tu hijo tiene fiebre. ¿Qué haces?", options: ["Darle las pastillas viejas", "Darle la mitad de las pastillas viejas", "Llevarlo a hacerse la prueba hoy; no usar medicina sobrante", "Esperar a ver"], answer: 2, why: "La medicina sobrante puede ser del tipo equivocado o muy poca; primero la prueba y luego sigue al trabajador de salud." },
      { objective: "O5", q: "La prueba de malaria salió negativa, pero tu hijo sigue con fiebre dos días después. ¿Qué haces?", options: ["Dejar de preocuparte", "Darle medicina contra la malaria de todos modos", "Esperar otra semana", "Volver con el trabajador de salud"], answer: 3, why: "Si la fiebre sigue o empeora, el trabajador de salud tiene que revisar de nuevo." },
      { objective: "O5", q: "¿Quién decide qué medicina contra la malaria tomar y cuánta?", options: ["Un trabajador de salud capacitado después de una prueba", "La persona enferma", "Un vendedor del mercado", "Un mensaje de texto"], answer: 0, why: "Solo un trabajador de salud puede elegir la medicina y la cantidad correctas después de una prueba." },
      { objective: "O6", q: "¿Cuál de estos significa ir a la clínica ahora?", options: ["La nariz que gotea", "Dificultad para respirar", "Tener hambre", "Un corte pequeño"], answer: 1, why: "La dificultad para respirar es un signo de peligro de la malaria grave." },
      { objective: "O6", q: "Un bebé con fiebre no quiere mamar y vomita todo. ¿Qué haces?", options: ["Intentar de nuevo mañana", "Darle solo agua y esperar", "Ir a la clínica ahora", "Darle medicina de adulto"], answer: 2, why: "Un niño que no puede beber o que vomita todo necesita la clínica de inmediato." },
      { objective: "O6", q: "¿Qué te ayuda a actuar rápido de noche en una emergencia?", options: ["Nada; te vas a acordar", "Una lista de medicinas y dosis", "El PIN de tu dinero móvil", "Una tarjeta de signos de peligro con los números de la clínica y un plan de transporte de noche"], answer: 3, why: "Saber los signos, a quién llamar y cómo llegar ahorra tiempo." },
      { objective: "O1", q: "¿Puede pasar la malaria de persona a persona al tocarse o compartir comida?", options: ["No; se transmite por picaduras de mosquito", "Sí, al tocarse", "Sí, al compartir comida", "Sí, por el aire"], answer: 0, why: "La OMS dice que la malaria no pasa directamente de persona a persona; la llevan los mosquitos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Quién corre riesgo", objective: "O1", notYet: "No se marca a nadie como de mayor riesgo, o el plan no dice cómo se transmite la malaria.", meets: "Se nombra a los niños pequeños, las embarazadas y otras personas de alto riesgo de la casa, con la picadura del mosquito de noche como causa.", exceeds: "También planea para visitas o viajeros que vienen de lugares sin malaria." },
      { name: "Mosquiteros todas las noches", objective: "O2", notYet: "Se cuentan los mosquiteros pero no quién duerme bajo ellos, o no se mencionan los agujeros.", meets: "Cada lugar donde se duerme tiene un mosquitero, primero quienes corren más riesgo, con revisión semanal de agujeros y cuidado suave.", exceeds: "Se cuentan los mosquiteros que faltan y el alumno ya preguntó en la clínica o al trabajador de salud comunitario cómo conseguirlos." },
      { name: "Menos mosquitos", objective: "O3", notYet: "Menos de tres acciones, o acciones que no quitan el agua estancada ni evitan las picaduras.", meets: "Al menos tres acciones, como vaciar recipientes, tapar bidones, limpiar desagües y cerrar puertas al anochecer.", exceeds: "Hay un día fijo de revisión cada semana y los vecinos participan." },
      { name: "Servicios de la clínica", objective: "O4", notYet: "No hay visitas a la clínica planeadas para una embarazada o un niño pequeño de la casa.", meets: "Están escritas las visitas prenatales y las fechas de la clínica del niño, con preguntas sobre mosquiteros, vacunas y medicina preventiva.", exceeds: "Las visitas ya están reservadas o hechas, y la tarjeta de salud del niño está al día." },
      { name: "Qué hacer ante la fiebre", objective: "O5", notYet: "El plan incluye tratar en casa con medicina sobrante o del mercado, o esperar a ver.", meets: "Una prueba el mismo día en una clínica o con un trabajador de salud comunitario con nombre, y el tratamiento completo como dice el trabajador de salud.", exceeds: "También están escritos el horario y otro lugar de respaldo para hacer la prueba." },
      { name: "Tarjeta de signos de peligro", objective: "O6", notYet: "Menos de cuatro signos de peligro, o ningún contacto de clínica.", meets: "Al menos cuatro signos de peligro y el nombre y el número de la clínica o del trabajador de salud más cercano.", exceeds: "También hay un plan de transporte de noche, sin nombres de medicinas ni dosis en la tarjeta." }
    ]
  },
  evaluation: {
    results: [
      "Alumnos que terminan el curso y aprueban la tarea final (rúbrica)",
      "Hogares donde cada persona, empezando por los niños pequeños y las embarazadas, duerme bajo un mosquitero 30 días después (encuesta de seguimiento)",
      "Familias que hacen la prueba de malaria el mismo día ante la fiebre de un niño, según las familias o los trabajadores de salud comunitarios",
      "Más embarazadas que empiezan la atención prenatal temprano y más niños con las vacunas al día donde se ofrecen vacunas contra la malaria",
      "Menos niños que llegan tarde a la clínica con malaria grave durante la próxima temporada de lluvias"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un mosquitero tratado para practicar cómo colgarlo y revisarlo (o el del propio alumno)",
      "Una aguja e hilo para cerrar agujeros",
      "Papel y lápiz para el plan del hogar y la tarjeta de signos de peligro",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Funciona bien con clubes de madres, grupos prenatales, escuelas, grupos de fe, grupos de agricultores y visitas del trabajador de salud comunitario; hagan juntos la prueba inicial.",
      "Cuelguen un mosquitero juntos en la Lección 2 y recorran el lugar de reunión buscando agua estancada en la Lección 3.",
      "Inviten al trabajador de salud comunitario o a la enfermera de la clínica local a contar qué ofrece la clínica: los mosquiteros gratis, las pruebas, las vacunas y la medicina preventiva cambian según el país y la zona.",
      "No nombren medicinas contra la malaria ni den dosis; envíen todas las preguntas sobre tratamiento a la clínica, al trabajador de salud comunitario o al ministerio de salud.",
      "Usen los mensajes actuales del programa nacional contra la malaria durante las campañas y la temporada de lluvias.",
      "Califiquen la tarea final con la rúbrica y den comentarios sobre una fila Todavía no a la vez."
    ]
  }
};
