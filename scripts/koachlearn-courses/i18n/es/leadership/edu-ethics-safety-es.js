"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ethics-safety.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ethics-safety-es",
  lang: "es",
  translationOf: "edu-ethics-safety",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 7: Ética, seguridad e IA responsable",
  skills: "Aplicar principios éticos a la IA escolar, Detectar riesgos de sesgo y de equidad, Proteger los datos de los estudiantes según FERPA y COPPA, Revisar proveedores y acuerdos, Escribir pautas de uso responsable, Responder a incidentes de IA y deepfakes",
  outcome: "escribir pautas de IA responsable para tu escuela o distrito, que cubran principios, privacidad, equidad, uso por el personal y los estudiantes, revisión de proveedores y un plan de respuesta a incidentes, y usarlas para revisar una herramienta de IA real y un incidente realista.",
  about: [
    "Este curso es para directores, líderes de distrito, personal de tecnología y de privacidad, orientadores y docentes líderes. Reúne los temas de ética, privacidad y seguridad de los cursos anteriores en las pautas y los procedimientos que tu escuela necesita.",
    "El capítulo 1 trata los principios: equidad e inclusión, transparencia, supervisión humana, privacidad y seguridad, y cómo aparecen en usos reales de la IA en la escuela. El capítulo 2 lleva los principios a la práctica: revisión de proveedores, pautas por escrito y un plan para cuando algo sale mal, como una filtración de datos o una falsificación hecha con IA de un estudiante o un docente.",
    "Este curso explica la ley en palabras sencillas para que sepas qué preguntar; no es asesoría legal. El asesor jurídico y el responsable de privacidad de tu distrito tienen la última palabra, y las leyes estatales pueden añadir requisitos. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Este es el curso 7 de 8 de IA para líderes escolares y educativos."
  ],
  finalTask: "Escribe unas pautas de IA responsable de dos páginas para tu escuela o distrito: cinco principios en palabras sencillas, reglas de privacidad (FERPA, COPPA, solo herramientas aprobadas), revisiones de equidad, lo que el personal y los estudiantes pueden y no pueden hacer, los pasos de revisión de proveedores y un plan de respuesta a incidentes de seis pasos. Luego ponlas a prueba: revisa una herramienta de IA real con tus pasos de revisión de proveedores y recorre un incidente realista (por ejemplo, una imagen falsa de un estudiante hecha con IA y compartida en un chat de grupo) usando tu plan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Directores, líderes de distrito, personal de tecnología y de privacidad, orientadores y docentes líderes de escuelas y distritos de Estados Unidos que fijan las reglas para el uso de la IA.",
    startingPoint: "Conocen lo básico de la IA, lo básico de FERPA y COPPA, la revisión de herramientas y las reglas de IA en el aula de los cursos anteriores. Puede que su escuela o distrito no tenga pautas escritas de IA responsable ni un plan para incidentes.",
    gap: "Sin pautas escritas, las decisiones sobre IA se toman caso por caso, los riesgos de equidad no se revisan y las escuelas no están preparadas cuando algo sale mal, como una filtración de datos o una falsificación de un estudiante hecha con IA. Los líderes necesitan principios claros, pasos de revisión del proveedor, reglas para el personal y los estudiantes y un plan para incidentes.",
    constraints: [
      "El curso explica la ley con palabras sencillas y no es asesoría legal; el asesor legal y el responsable de privacidad del distrito tienen la última palabra",
      "Las leyes estatales pueden añadir requisitos, y las leyes sobre imágenes hechas con IA cambian rápido",
      "Nada de datos ni imágenes reales de estudiantes en la práctica; los ensayos de incidentes usan casos inventados pero realistas",
      "Las imágenes de menores nunca se reenvían; el personal sigue las indicaciones del asesor legal y de las autoridades policiales",
      "Tiempo: lecciones cortas; las pautas llevan más tiempo para escribirlas y probarlas"
    ],
    prerequisites: "Se recomiendan los cursos 1 a 6 de IA para líderes escolares y educativos, sobre todo el curso 1 y el curso 2."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un uso de la IA en tu escuela", action: "aplicarle cinco principios de IA responsable", standard: "con una frase sobre cómo cumple o no cumple cada principio" },
    { id: "O2", condition: "Con una herramienta de IA que califica, marca o se adapta a los estudiantes", action: "identificar dónde podría tratar injustamente a grupos de estudiantes", standard: "escribiendo tres preguntas de equidad para el proveedor y una revisión de tus propios resultados" },
    { id: "O3", condition: "Cuando el personal usa herramientas de IA", action: "aplicar FERPA, COPPA y hábitos básicos de seguridad", standard: "con cinco hábitos en palabras sencillas, cada uno con un ejemplo de lo que no se debe hacer" },
    { id: "O4", condition: "Antes de aprobar una herramienta de IA", action: "hacer una revisión del proveedor con los documentos públicos de la herramienta", standard: "anotando lo que el proveedor debe confirmar en un acuerdo firmado" },
    { id: "O5", condition: "Con aportes de docentes, estudiantes y familias", action: "redactar pautas de IA responsable con reglas de lo que el personal y los estudiantes pueden y no pueden hacer", standard: "con al menos cuatro puntos concretos en cada una, revisadas con el asesor legal frente a la política del distrito y la ley estatal" },
    { id: "O6", condition: "Con un incidente de IA realista, como un deepfake o una filtración de datos", action: "recorrer un plan de respuesta a incidentes de seis pasos", standard: "empezando por proteger al estudiante y terminando con la actualización de las pautas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Los principios en la práctica",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cinco principios para la IA en las escuelas",
          minutes: 5,
          goal: "Enunciar cinco principios de IA responsable y aplicarlos a un ejemplo escolar.",
          text: [
            "La mayoría de los marcos de IA responsable comparten algunas ideas. Cinco que encajan en las escuelas: Supervisión humana: los educadores toman las decisiones sobre los estudiantes; la IA informa, nunca decide. Equidad e inclusión: la IA no debe perjudicar a ningún grupo de estudiantes y debe ampliar el acceso. Privacidad y seguridad: recopilar y compartir la menor cantidad posible de datos de estudiantes, y protegerlos.",
            "Transparencia: estudiantes, personal y familias saben cuándo y cómo se usa la IA. Rendición de cuentas: una persona designada es responsable de cada herramienta de IA y de sus efectos, y existe una vía para plantear inquietudes.",
            "Estos coinciden con los principios de la carta “Dear Colleague” sobre IA del Departamento de Educación de EE. UU. del 22 de julio de 2025 que, según informó K-12 Dive, pide iniciativas de IA dirigidas por educadores, éticas, accesibles para estudiantes con discapacidad, transparentes en su implementación y conformes con las leyes federales de privacidad. Para gestionar riesgos, el Marco de Gestión de Riesgos de IA de NIST (el instituto federal de normas de EE. UU.), de uso voluntario (Gobernar, Mapear, Medir, Gestionar), es una referencia gratuita."
          ],
          words: [["Supervisión humana", "personas que revisan y deciden, con la IA solo como fuente de información."], ["Equidad", "asegurar que cada estudiante reciba lo que necesita para tener éxito."], ["Transparencia", "ser abierto sobre cuándo y cómo se usa la IA."]],
          slides: [
            { title: "Cinco principios", bullets: ["Supervisión humana", "Equidad e inclusión", "Privacidad y seguridad", "Transparencia y rendición de cuentas"] },
            { title: "Carta federal sobre IA, julio de 2025", bullets: ["Dirigida por educadores y ética", "Accesible para estudiantes con discapacidad", "Transparente; conforme con la privacidad"] },
            { title: "Un marco de riesgos gratuito", bullets: ["NIST AI RMF: Gobernar, Mapear, Medir, Gestionar", "Voluntario; revisa nist.gov por actualizaciones"] }
          ],
          sources: [{ name: "K-12 Dive: el Departamento de Educación publica prioridades sobre IA (julio de 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Marco de Gestión de Riesgos de IA de NIST", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Toma un uso de la IA en tu escuela (por ejemplo, un programa de lectura adaptativo). Escribe una oración sobre cómo cumple o no cada uno de los cinco principios.",
          youCanNow: "aplicar cinco principios de IA responsable a un uso escolar real.",
          quickCheck: [
            { objective: "O1", q: "¿Qué significa el principio de transparencia?", options: ["Ser abiertos sobre cuándo y cómo se usa la IA", "Usar solo herramientas de IA gratuitas", "Dejar que la IA tome decisiones en público", "Compartir los datos de los estudiantes con las familias"], answer: 0, why: "La transparencia significa que la gente sabe cuándo y cómo se usa la IA." },
            { objective: "O1", q: "Un programa de lectura adaptativo elige el siguiente libro de cada estudiante. ¿Qué pregunta de principio harías?", options: ["¿Es el programa más barato?", "¿Es el programa más nuevo?", "¿Pueden los docentes ver sus elecciones y cambiarlas?", "¿Es el que tiene más funciones?"], answer: 2, why: "La supervisión humana significa que los educadores deciden y la IA informa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Riesgos de sesgo y de equidad en la IA escolar",
          minutes: 6,
          goal: "Detectar dónde los usos de la IA en la escuela podrían tratar injustamente a grupos de estudiantes.",
          text: [
            "La IA aprende de los datos, y los datos reflejan el pasado, incluidas sus injusticias. En las escuelas, vigila cuatro lugares. Detectores: los detectores de escritura con IA pueden marcar por error trabajos honestos, y los textos de estudiantes que aprenden inglés pueden marcarse con más frecuencia. Predicción: los puntajes de alerta temprana o de riesgo pueden etiquetar a estudiantes según patrones ligados al ingreso, la discapacidad o la raza.",
            "Agrupamiento por niveles: los programas adaptativos que siguen dando trabajo más fácil a algunos estudiantes pueden reducir sus oportunidades. Acceso: si la ayuda de la IA necesita un dispositivo o internet en casa, los estudiantes que no los tienen se quedan más atrás; si una herramienta no es accesible, los estudiantes con discapacidad quedan excluidos.",
            "Revisiones de equidad: pregunta a los proveedores cómo prueban el sesgo y la accesibilidad; mira los resultados por grupo de estudiantes en tus propios datos (protegiendo la privacidad); nunca uses solo un puntaje de IA para decisiones de ubicación, disciplina o elegibilidad; y asegúrate de que todos los estudiantes puedan usar la herramienta en la escuela."
          ],
          steps: ["Haz una lista de los usos de la IA que clasifican, puntúan o marcan a estudiantes.", "Pregunta al proveedor cómo prueba el sesgo y la accesibilidad.", "Revisa los resultados por grupo de estudiantes, protegiendo la privacidad.", "Nunca uses solo un puntaje de IA para decidir sobre estudiantes.", "Verifica que todos los estudiantes puedan usar la herramienta en la escuela."],
          words: [["Sesgo algorítmico", "resultados injustos de un sistema de IA, a menudo aprendidos de datos del pasado."], ["Puntaje de riesgo", "un número que un sistema asigna a un estudiante para predecir un problema, como abandonar los estudios."], ["Agrupamiento por niveles", "mantener a los estudiantes en distintos niveles de trabajo, lo que puede limitar sus oportunidades."]],
          slides: [
            { title: "Dónde aparece el sesgo", bullets: ["Detectores que marcan por error a estudiantes", "Puntajes de riesgo ligados al ingreso, la discapacidad, la raza", "Agrupamiento adaptativo que reduce oportunidades"] },
            { title: "El acceso es equidad", bullets: ["Brechas de dispositivos e internet en casa", "Herramientas no accesibles para personas con discapacidad"] },
            { title: "Revisiones de equidad", bullets: ["Pregunta a los proveedores por sus pruebas de sesgo y accesibilidad", "Revisa los resultados por grupo", "Ningún puntaje de IA decide solo"] }
          ],
          tryIt: "Elige una herramienta de IA que puntúe, marque o se adapte a los estudiantes de tu escuela. Escribe tres preguntas de equidad que harías al proveedor y una revisión que harías con tus propios resultados.",
          youCanNow: "detectar riesgos de equidad en la IA escolar y poner en marcha revisiones prácticas.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué los detectores de escritura con IA pueden causar problemas de equidad?", options: ["Porque son demasiado caros", "Porque pueden marcar más seguido los textos de quienes aprenden inglés", "Porque solo funcionan en teléfonos", "Porque califican demasiado lento"], answer: 1, why: "Las falsas alarmas desiguales caen sobre algunos grupos de estudiantes más que sobre otros." },
            { objective: "O2", q: "Una herramienta adaptativa mantiene a un grupo de estudiantes en trabajos más fáciles durante meses. ¿Qué harías?", options: ["Nada; la herramienta sabe más", "Apagar toda la IA de la escuela", "Cambiar a esos estudiantes de escuela", "Revisar tus propios resultados por grupo y preguntarle al proveedor cómo decide la herramienta"], answer: 3, why: "Revisar los resultados por grupo muestra si la herramienta reduce las oportunidades de algunos estudiantes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Privacidad y seguridad: FERPA, COPPA y buenos hábitos",
          minutes: 6,
          goal: "Aplicar FERPA, COPPA y hábitos básicos de seguridad a las herramientas de IA.",
          text: [
            "FERPA (ley federal de privacidad de los registros educativos) protege los registros educativos de los estudiantes. En general, las escuelas necesitan consentimiento para divulgar información personal identificable de esos registros, con excepciones; un proveedor puede actuar como funcionario escolar solo si presta un servicio a la escuela, está bajo el control directo de la escuela y respeta límites para volver a compartir los datos. Los padres pueden revisar los registros; los derechos pasan al estudiante a los 18 años o al entrar a la universidad.",
            "COPPA, que aplica la FTC (Comisión Federal de Comercio de EE. UU.), protege en línea a los niños menores de 13 años. La FTC dice que las escuelas pueden dar el consentimiento en lugar de los padres solo cuando la información se recopila para uso y beneficio de la escuela y para ningún otro fin comercial. La FTC modificó su Regla COPPA el 22 de abril de 2025; consulta las páginas de la FTC para conocer los requisitos actuales.",
            "Buenos hábitos: minimización de datos (compartir solo lo que la tarea necesita), solo herramientas aprobadas, cuentas del distrito con contraseñas seguras y verificación en dos pasos, no subir registros a cuentas personales y saber a quién llamar si pudo haber una filtración. Tu estado puede tener su propia ley de privacidad estudiantil; tu responsable de privacidad lo sabrá."
          ],
          steps: ["Usa solo herramientas aprobadas para información de estudiantes.", "Comparte los datos mínimos necesarios.", "Usa cuentas del distrito con verificación en dos pasos.", "Nunca subas registros a cuentas personales.", "Sabe a quién llamar ante una posible filtración."],
          words: [["Minimización de datos", "recopilar y compartir solo los datos que una tarea realmente necesita."], ["Verificación en dos pasos", "iniciar sesión con una contraseña más una segunda comprobación, como un código en tu teléfono."]],
          slides: [
            { title: "FERPA", bullets: ["Protege los registros educativos", "Compartir datos identificables suele requerir consentimiento", "Proveedores solo como funcionarios escolares bajo control"] },
            { title: "COPPA", bullets: ["Menores de 13, la aplica la FTC", "Consentimiento escolar: solo uso escolar, sin otro fin comercial", "Regla modificada el 22 de abril de 2025"] },
            { title: "Buenos hábitos", bullets: ["Minimización de datos", "Herramientas aprobadas, cuentas del distrito, verificación en dos pasos", "Sabe a quién llamar ante una filtración"] }
          ],
          sources: [{ name: "FERPA: protección de la privacidad estudiantil", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Cumplir con COPPA, preguntas frecuentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Escribe cinco hábitos de privacidad y seguridad para tu personal en palabras sencillas, con un ejemplo de lo que NO se debe hacer en cada uno.",
          youCanNow: "aplicar FERPA, COPPA y hábitos de seguridad cotidianos al uso de la IA por el personal.",
          quickCheck: [
            { objective: "O3", q: "¿Qué añade la verificación en dos pasos?", options: ["Una segunda comprobación, como un código en tu teléfono", "Una segunda contraseña escrita dos veces", "Una segunda herramienta de IA", "Un segundo miembro del personal que inicia sesión por ti"], answer: 0, why: "Una segunda comprobación protege las cuentas aunque roben una contraseña." },
            { objective: "O3", q: "Un docente quiere subir toda la lista de su clase a una herramienta de IA para una tarea pequeña. ¿Qué le aconsejarías?", options: ["Subirla; más datos dan mejores resultados", "Subirla a dos herramientas para comparar", "Compartir solo lo que necesita la tarea, en una herramienta aprobada", "Enviarla por correo al proveedor"], answer: 2, why: "La minimización de datos significa compartir solo lo que necesita la tarea." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los principios en la práctica",
        questions: [
          { objective: "O1", q: "¿Qué principio dice que los educadores deciden sobre los estudiantes y la IA solo informa?", options: ["Transparencia", "Minimización de datos", "Supervisión humana", "Agrupamiento por niveles"], answer: 2, why: "La supervisión humana deja las decisiones en manos de los educadores." },
          { objective: "O1", q: "Una herramienta de alerta temprana da a un estudiante un puntaje de riesgo alto. El uso correcto es:", options: ["Usarlo como un dato más para educadores que también conocen al estudiante", "Ubicar al estudiante de forma automática", "Compartir el puntaje públicamente", "Ignorar todos los datos"], answer: 0, why: "Ningún puntaje de IA debe decidir solo." },
          { objective: "O2", q: "¿Por qué el acceso es un tema de equidad en las herramientas de IA?", options: ["Solo los adultos usan IA", "No lo es", "El acceso hace más lentas las herramientas", "Los estudiantes sin dispositivos, internet o herramientas accesibles se quedan atrás"], answer: 3, why: "El acceso desigual amplía las brechas." },
          { objective: "O3", q: "Minimización de datos significa:", options: ["Recopilar todo lo posible", "Compartir solo lo que la tarea necesita", "Borrar todos los datos", "Usar letras más pequeñas"], answer: 1, why: "Menos datos significa menos riesgo." },
          { objective: "O3", q: "Según COPPA, una escuela puede dar el consentimiento en lugar de los padres cuando los datos se recopilan:", options: ["Para publicidad", "Nunca", "Por cualquier motivo", "Para uso y beneficio de la escuela, sin otro fin comercial"], answer: 3, why: "Esa es la condición de la FTC." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pautas, proveedores e incidentes",
      lessons: [
        {
          objectives: ["O4"],
          title: "Revisar proveedores y acuerdos",
          minutes: 5,
          goal: "Hacer una revisión del proveedor antes de aprobar una herramienta de IA.",
          text: [
            "Toda herramienta de IA que vaya a tocar información de estudiantes necesita una revisión antes de aprobarse. Usa la lista Model Terms of Service (modelo de términos de servicio) de la Oficina de Políticas de Privacidad Estudiantil o la de tu distrito. Preguntas clave: qué datos, de quién son, si se usan para publicidad o para entrenar la IA, si pueden borrarse a pedido, quién más los recibe, cómo se protegen y qué pasa si hay una filtración.",
            "Agrega preguntas específicas de IA: ¿Cómo funciona la IA y cuáles son sus límites? ¿Cómo se prueba su exactitud, su sesgo y su accesibilidad? ¿Pueden los docentes ver y corregir lo que produce? ¿Guarda lo que escriben los estudiantes, y por cuánto tiempo?",
            "Consigue los compromisos en un acuerdo firmado, no solo en una política del sitio web que puede cambiar. Muchos estados y distritos usan acuerdos de privacidad de datos con los proveedores; tu responsable de privacidad o tu asesor jurídico sabrá cuál es el formato correcto."
          ],
          steps: ["Usa la lista Model Terms of Service o la de tu distrito.", "Haz las preguntas específicas de IA.", "Pide las respuestas por escrito.", "Consigue los compromisos en un acuerdo firmado.", "Anota la decisión y la fecha de revisión."],
          words: [["Acuerdo de privacidad de datos", "un contrato firmado que fija cómo un proveedor puede usar y proteger los datos de los estudiantes."], ["Corregir (anular)", "que una persona cambie o rechace lo que produjo la IA."]],
          slides: [
            { title: "Preguntas de privacidad", bullets: ["Qué datos y de quién son", "¿Publicidad o entrenamiento de IA?", "Borrado, intercambio, seguridad, filtraciones"] },
            { title: "Preguntas de IA", bullets: ["Cómo funciona y sus límites", "Pruebas de exactitud, sesgo, accesibilidad", "¿Los docentes pueden corregirla? ¿Cuánto guarda lo escrito?"] },
            { title: "Por escrito", bullets: ["Acuerdo firmado, no solo una página web", "Pide el formato a tu responsable de privacidad"] }
          ],
          sources: [{ name: "Privacidad y tecnología educativa: lista Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Haz una revisión de proveedor de una herramienta de IA que tu escuela usa o quiere usar: responde las preguntas de privacidad y de IA con sus documentos públicos y anota lo que necesitarías que el proveedor confirme por escrito.",
          youCanNow: "revisar a un proveedor de IA en privacidad, calidad de la IA y términos del contrato antes de aprobarlo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un acuerdo de privacidad de datos?", options: ["La página de publicidad de un proveedor", "Un contrato firmado sobre cómo un proveedor usa y protege los datos de los estudiantes", "Un formulario que firman los estudiantes", "Una lista de sitios web aprobados"], answer: 1, why: "Un acuerdo firmado obliga al proveedor a cumplir sus compromisos." },
            { objective: "O4", q: "El sitio web de un proveedor dice que nunca entrena su IA con datos de estudiantes. ¿Qué harías?", options: ["Aprobar la herramienta con base en eso", "Ignorarlo", "Preguntar a los estudiantes si es verdad", "Conseguir ese compromiso en el acuerdo firmado"], answer: 3, why: "Las políticas de un sitio web pueden cambiar; un acuerdo firmado no cambia por sí solo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escribir pautas de IA responsable",
          minutes: 6,
          goal: "Redactar pautas claras para el uso de la IA por el personal y los estudiantes.",
          text: [
            "Las pautas convierten los principios en reglas cotidianas. Que ocupen unas dos páginas y usen palabras sencillas. Secciones: propósito y principios; herramientas aprobadas y cómo pedir una nueva; reglas de privacidad; lo que el personal puede y no puede hacer; lo que los estudiantes pueden y no pueden hacer (enlaza tus niveles de uso de IA); integridad académica; transparencia con las familias; y a quién contactar.",
            "Usa ejemplos concretos: “El personal puede usar herramientas de IA aprobadas para redactar materiales de clase y cartas a las familias. El personal no puede ingresar nombres de estudiantes, calificaciones, información del IEP o del plan 504, ni registros disciplinarios en ninguna herramienta no aprobada. El personal no puede usar la IA para tomar decisiones de calificación, ubicación o disciplina.”",
            "Escríbelas con docentes, estudiantes (según su edad) y familias, revísalas con el asesor jurídico frente a la política del distrito y la ley estatal, y fija una fecha de revisión. Las pautas que nadie ayudó a escribir son pautas que nadie sigue."
          ],
          steps: ["Redacta las secciones: principios, herramientas, privacidad, personal, estudiantes, integridad, transparencia, contacto.", "Agrega ejemplos concretos de puede / no puede.", "Involucra a docentes, estudiantes y familias.", "Revísalas con el asesor jurídico frente a la política y la ley estatal.", "Publícalas y fija una fecha de revisión."],
          words: [["Pautas", "reglas prácticas que explican cómo cumplir una política en el día a día."], ["Política de la junta", "una regla formal adoptada por la junta escolar."]],
          slides: [
            { title: "Dos páginas, palabras sencillas", bullets: ["Principios, herramientas, privacidad", "Personal y estudiantes: puede / no puede", "Integridad, transparencia, contacto"] },
            { title: "Ejemplos concretos", bullets: ["Puede: redactar materiales en herramientas aprobadas", "No puede: datos de estudiantes en herramientas no aprobadas", "No puede: decisiones de calificación o disciplina con IA"] },
            { title: "Escríbanlas juntos", bullets: ["Docentes, estudiantes, familias", "El asesor jurídico revisa la política y la ley estatal", "Fija una fecha de revisión"] }
          ],
          tryIt: "Redacta las secciones de “puede / no puede” para el personal y los estudiantes en tus pautas, con al menos cuatro puntos cada una. Compártelas con dos docentes y anota sus cambios.",
          youCanNow: "escribir pautas prácticas de IA responsable junto con las personas que las seguirán.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace que unas pautas sean útiles para el personal?", options: ["Ejemplos concretos de lo que se puede y no se puede hacer", "Un lenguaje legal largo", "Una lista de todas las herramientas de IA del mercado", "Ningún ejemplo, para que el personal decida"], answer: 0, why: "Los ejemplos concretos hacen que las reglas sean fáciles de seguir." },
            { objective: "O5", q: "Tu borrador de pautas está listo. ¿Qué debe pasar antes de adoptarlas?", options: ["Publicarlas de inmediato", "Pedirle a un chatbot de IA que las apruebe", "Recibir aportes de docentes, estudiantes y familias, y revisarlas con el asesor legal frente a la política y la ley", "Mantenerlas en secreto para el personal"], answer: 2, why: "Las pautas necesitan aportes de las personas afectadas y una revisión legal." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cuando algo sale mal: respuesta a incidentes",
          minutes: 6,
          goal: "Planear los pasos ante un incidente de IA, incluidas filtraciones de datos y deepfakes.",
          text: [
            "Planea antes del incidente. Incidentes comunes de IA: datos de estudiantes ingresados en una herramienta no aprobada; una herramienta de IA que da información dañina o errónea a los estudiantes; e imágenes, audios o videos falsos de estudiantes o personal hechos con IA (deepfakes), que pueden ser acoso y pueden constituir un delito.",
            "Un plan de seis pasos: 1) Proteger: detener el daño (quitar el acceso, pausar la herramienta, apoyar a la persona afectada). 2) Reportar: al director y al contacto del distrito nombrado en tus pautas. 3) Conservar: guardar las pruebas como indique tu distrito (si hay imágenes de menores, sigue las indicaciones de las autoridades y del asesor jurídico; nunca las reenvíes ni las copies). 4) Evaluar: qué datos o personas están afectados. 5) Notificar: a las familias y a otros según exijan la ley y la política. 6) Aprender: corregir la causa y actualizar las pautas.",
            "Ante deepfakes y acoso, sigue tus procedimientos de acoso escolar, hostigamiento y Title IX, e involucra al asesor jurídico y, cuando corresponda, a las autoridades. Las leyes sobre imágenes generadas con IA están cambiando rápido a nivel federal y estatal; tu asesor jurídico sabrá cuáles aplican."
          ],
          steps: ["Proteger: detén el daño y apoya a la persona.", "Reporta al director y al contacto del distrito.", "Conserva las pruebas según las indicaciones; nunca reenvíes imágenes de menores.", "Evalúa qué datos o personas están afectados.", "Notifica según la ley y la política; luego aprende y actualiza."],
          words: [["Respuesta a incidentes", "los pasos planeados para manejar algo que salió mal."], ["Deepfake", "una imagen, voz o video falso hecho con IA para que parezca real."], ["Title IX", "la ley federal de EE. UU. contra la discriminación por sexo en la educación, incluido el acoso sexual."]],
          slides: [
            { title: "Incidentes comunes de IA", bullets: ["Datos de estudiantes en una herramienta no aprobada", "Respuestas dañinas o erróneas de la IA a estudiantes", "Deepfakes de estudiantes o personal"] },
            { title: "Seis pasos", bullets: ["1 Proteger  2 Reportar  3 Conservar", "4 Evaluar  5 Notificar  6 Aprender"] },
            { title: "Deepfakes y acoso", bullets: ["Sigue los procedimientos de acoso, hostigamiento y Title IX", "Nunca reenvíes imágenes de menores", "Involucra al asesor jurídico; las leyes cambian"] }
          ],
          tryIt: "Tarea final: termina tus pautas de IA responsable de dos páginas (principios, privacidad, equidad, reglas para personal y estudiantes, pasos de revisión de proveedores, plan de incidentes de seis pasos). Ponlas a prueba revisando una herramienta real y recorriendo un incidente realista, y anota cualquier hueco que encuentres.",
          youCanNow: "liderar la IA responsable en tu escuela con pautas claras, revisión de proveedores y un plan de incidentes.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es el último paso del plan para incidentes?", options: ["Proteger", "Aprender: corregir la causa y actualizar las pautas", "Avisar a la prensa", "Borrar todos los registros"], answer: 1, why: "Aprender de cada incidente evita que vuelva a pasar." },
            { objective: "O6", q: "Un miembro del personal recibe una imagen falsa de un estudiante hecha con IA. ¿Qué debe hacer con ella?", options: ["Reenviarla a sus colegas para que estén al tanto", "Publicar una advertencia con la imagen", "Borrarla y no decir nada", "No reenviarla, y seguir las indicaciones del asesor legal y de las autoridades policiales para conservar la evidencia"], answer: 3, why: "Las imágenes de menores nunca se reenvían; la evidencia se maneja como indiquen el asesor legal y las autoridades policiales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Pautas, proveedores e incidentes",
        questions: [
          { objective: "O4", q: "¿Por qué conseguir los compromisos del proveedor en un acuerdo firmado?", options: ["Los acuerdos son opcionales", "Es más rápido", "Las políticas de los sitios web pueden cambiar", "Los proveedores lo prefieren"], answer: 2, why: "Los términos firmados obligan al proveedor." },
          { objective: "O4", q: "¿Cuál es una pregunta al proveedor específica de IA?", options: ["¿Pueden los docentes ver y corregir lo que produce la IA?", "¿De qué color es el logotipo?", "¿Cuántos empleados tiene el proveedor?", "¿Dónde está su oficina?"], answer: 0, why: "Que una persona pueda corregir es clave para la supervisión." },
          { objective: "O5", q: "¿Quién debe ayudar a escribir las pautas?", options: ["Solo el proveedor", "Docentes, estudiantes y familias, con revisión del asesor jurídico", "Solo el director, por su cuenta", "Solo una herramienta de IA"], answer: 1, why: "Las pautas que la gente ayuda a escribir son pautas que la gente sigue." },
          { objective: "O6", q: "Un estudiante reporta una imagen falsa hecha con IA de un compañero en un chat de grupo. ¿Cuál es el primer paso?", options: ["Proteger: detener el daño y apoyar al estudiante", "Reenviarla al personal para mostrarla", "Ignorarlo", "Publicar una advertencia con la imagen"], answer: 0, why: "Primero la seguridad; nunca difundas la imagen." },
          { objective: "O6", q: "¿Cuál es el último paso del plan de incidentes?", options: ["Olvidarlo", "Culpar al estudiante", "Borrar las pautas", "Aprender: corregir la causa y actualizar las pautas"], answer: 3, why: "Los incidentes deben mejorar el sistema." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 7: Ética, seguridad e IA responsable",
    questions: [
      { objective: "O1", q: "Supervisión humana significa:", options: ["La IA decide; los educadores observan", "Los educadores deciden; la IA informa", "Nadie decide", "Los padres deciden todo uso de la IA"], answer: 1, why: "Las decisiones sobre los estudiantes siguen siendo humanas." },
      { objective: "O1", q: "Transparencia significa:", options: ["Ocultar el uso de la IA", "Usar plástico transparente", "Ser abierto sobre cuándo y cómo se usa la IA", "Compartir datos de estudiantes"], answer: 2, why: "Las personas deben saber cuándo interviene la IA." },
      { objective: "O1", q: "Rendición de cuentas significa:", options: ["Nadie es responsable", "La IA es responsable", "Una persona designada responde por cada herramienta de IA y sus efectos", "Los proveedores deciden todo"], answer: 2, why: "Alguien debe responder por cada herramienta." },
      { objective: "O1", q: "La carta federal sobre IA de julio de 2025 pide una IA:", options: ["Dirigida por educadores, ética, accesible, transparente y conforme con la privacidad", "Sin docentes", "Sin regulación", "Solo para preparatorias"], answer: 0, why: "Esos son los principios que enuncia." },
      { objective: "O1", q: "El NIST AI RMF es:", options: ["Un examen para estudiantes", "Una ley", "Un programa informático", "Un marco voluntario para gestionar los riesgos de la IA"], answer: 3, why: "NIST lo describe como voluntario." },
      { objective: "O2", q: "Los detectores de escritura con IA plantean problemas de equidad porque:", options: ["Siempre son justos", "Pueden marcar con más frecuencia los textos de quienes aprenden inglés", "Son gratuitos", "Nunca marcan a nadie"], answer: 1, why: "Los falsos positivos pueden repartirse de forma desigual." },
      { objective: "O2", q: "El agrupamiento adaptativo puede ser un riesgo cuando:", options: ["Lo usan los docentes", "Reta a todos los estudiantes", "Está desactivado", "Mantiene a algunos estudiantes en trabajo más fácil y reduce sus oportunidades"], answer: 3, why: "El agrupamiento por niveles puede limitar las oportunidades." },
      { objective: "O2", q: "Un puntaje de riesgo de IA debe usarse:", options: ["Públicamente", "Como decisión final", "Como un dato más, nunca solo para decidir", "Sin revisarlo nunca"], answer: 2, why: "Los educadores lo ponderan con lo que saben." },
      { objective: "O3", q: "Según FERPA, un proveedor puede actuar como funcionario escolar solo si:", options: ["Presta un servicio escolar bajo control directo, con límites para volver a compartir", "Es popular", "Es gratuito", "Tiene una página de privacidad"], answer: 0, why: "Esas son las condiciones de FERPA." },
      { objective: "O3", q: "COPPA protege a los niños:", options: ["Menores de 16", "Menores de 13", "Menores de 18", "Mayores de 13"], answer: 1, why: "La FTC dice menores de 13 años." },
      { objective: "O3", q: "La FTC modificó su Regla COPPA el:", options: ["22 de abril de 2025", "1 de enero de 1990", "27 de octubre de 2026", "4 de julio de 2020"], answer: 0, why: "Las preguntas frecuentes de la FTC indican el 22 de abril de 2025." },
      { objective: "O3", q: "La verificación en dos pasos agrega:", options: ["Nada", "Una segunda contraseña en papel", "Un segundo usuario", "Una segunda comprobación, como un código en tu teléfono"], answer: 3, why: "Protege las cuentas si se filtra una contraseña." },
      { objective: "O4", q: "La lista Model Terms of Service proviene de:", options: ["Un proveedor", "La Oficina de Políticas de Privacidad Estudiantil del Departamento de Educación", "Una red social", "Un sitio de noticias"], answer: 1, why: "Aparece en studentprivacy.ed.gov." },
      { objective: "O4", q: "Un acuerdo de privacidad de datos es:", options: ["Un compromiso de los estudiantes", "Un aviso en un sitio web", "Un contrato firmado sobre cómo un proveedor usa y protege los datos de los estudiantes", "Una contraseña"], answer: 2, why: "Obliga al proveedor por escrito." },
      { objective: "O5", q: "Unas buenas pautas incluyen:", options: ["Anuncios de proveedores", "Solo valores generales", "Ejemplos concretos de puede / no puede", "Nombres de estudiantes"], answer: 2, why: "Los ejemplos hacen útiles las reglas." },
      { objective: "O5", q: "Las pautas deben revisarse frente a:", options: ["La política del distrito y la ley estatal, con el asesor jurídico", "Las redes sociales", "Los blogs de los proveedores", "Nada"], answer: 0, why: "Deben encajar con la ley y la política vigentes." },
      { objective: "O6", q: "Un deepfake de un estudiante compartido en línea puede ser:", options: ["Un proyecto escolar", "Una broma inofensiva", "Siempre legal", "Acoso y posiblemente un delito"], answer: 3, why: "Trátalo como un daño grave." },
      { objective: "O6", q: "Al conservar pruebas que incluyen imágenes de menores, el personal debe:", options: ["Reenviarlas a colegas", "Seguir las indicaciones del asesor jurídico y de las autoridades, y nunca reenviarlas", "Publicarlas", "Guardarlas en teléfonos personales"], answer: 1, why: "Copiar esas imágenes puede causar daño o violar la ley." },
      { objective: "O6", q: "La notificación a las familias tras un incidente debe seguir:", options: ["Los comentarios en redes sociales", "Lo que sea más fácil", "Nada", "La ley y la política del distrito"], answer: 3, why: "Las obligaciones de notificar vienen de la ley y la política." },
      { objective: "O6", q: "Las leyes sobre imágenes generadas con IA:", options: ["Son iguales en todos los estados", "Son fijas para siempre", "Están cambiando rápido; pregunta al asesor jurídico cuáles aplican", "No afectan a las escuelas"], answer: 2, why: "Las reglas federales y estatales están evolucionando." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Principios",
        objective: "O1",
        notYet: "Menos de cinco principios, o no están en palabras sencillas.",
        meets: "Cinco principios en palabras sencillas.",
        exceeds: "Cada principio tiene un ejemplo escolar corto."
      },
      {
        name: "Privacidad y equidad",
        objective: "O3",
        notYet: "Faltan las reglas de privacidad o las revisiones de equidad.",
        meets: "Incluye reglas de privacidad (FERPA, COPPA, solo herramientas aprobadas) y revisiones de equidad.",
        exceeds: "Las revisiones de equidad dicen cómo la escuela mirará sus propios resultados por grupo."
      },
      {
        name: "Reglas para el personal y los estudiantes",
        objective: "O5",
        notYet: "No hay reglas de lo que se puede y no se puede hacer, o son vagas.",
        meets: "Dice lo que el personal y los estudiantes pueden y no pueden hacer.",
        exceeds: "Los docentes revisaron las reglas y se hicieron sus cambios."
      },
      {
        name: "Revisión del proveedor",
        objective: "O4",
        notYet: "No hay pasos para el proveedor, o no se revisó ninguna herramienta real.",
        meets: "Pasos de revisión del proveedor, probados con una herramienta de IA real.",
        exceeds: "Anota lo que el proveedor debe confirmar en un acuerdo firmado."
      },
      {
        name: "Plan para incidentes",
        objective: "O6",
        notYet: "Menos de seis pasos, o no se probó con un incidente.",
        meets: "Un plan para incidentes de seis pasos, recorrido con un incidente realista.",
        exceeds: "Anota un hueco encontrado en el ensayo y cómo cambiarán las pautas."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Escuelas o distritos que adoptan pautas escritas de IA responsable en un plazo de 90 días (encuesta de seguimiento)",
      "Herramientas de IA revisadas con los pasos de revisión del proveedor antes de aprobarlas (encuesta de seguimiento)",
      "Escuelas que han practicado el plan para incidentes con su equipo directivo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Las políticas actuales de tecnología, privacidad y uso aceptable de tu distrito",
      "El recurso Model Terms of Service de studentprivacy.ed.gov",
      "Un caso de incidente inventado pero realista para el ensayo",
      "Unos 60 minutos para las lecciones y las comprobaciones, más tiempo para escribir y probar las pautas"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego apliquen los cinco principios a una herramienta que el grupo conozca.",
      "Recuerda a los líderes que el curso no es asesoría legal; invita al asesor legal o al responsable de privacidad del distrito a la sesión de pautas.",
      "Hagan el ensayo del incidente como un ejercicio de mesa con papeles asignados; usen solo casos inventados.",
      "Trata con cuidado el tema de los deepfakes; ten orientadores disponibles y nunca muestres ni compartas imágenes de menores.",
      "Califica la tarea final con la rúbrica y pide a cada equipo que nombre un hueco que encontró en su ensayo."
    ]
  }
};
