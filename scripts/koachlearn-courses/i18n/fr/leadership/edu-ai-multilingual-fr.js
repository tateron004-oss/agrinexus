"use strict";

// Koach Learn course (French translation of leadership/edu-ai-multilingual.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-multilingual-fr",
  lang: "fr",
  translationOf: "edu-ai-multilingual",
  category: "Leadership Development",
  name: "L'IA pour les élèves plurilingues",
  skills: "Construire des aides linguistiques avec l'IA, Créer des glossaires bilingues, Rédiger des amorces de phrases par niveau de maîtrise, Utiliser la traduction en sécurité, Mettre en place une démarche de traduction vérifiée par un humain, Valoriser les langues familiales",
  outcome: "utiliser l'IA pour construire des aides linguistiques pour les élèves plurilingues, glossaires, amorces de phrases par niveau de maîtrise et textes adaptés qui gardent les idées du niveau de la classe, et mener une démarche de traduction pour les familles dans laquelle une personne qualifiée vérifie chaque traduction de l'IA avant l'envoi.",
  about: [
    "Ce cours s'adresse aux enseignants de classe, aux enseignants de langue seconde (ELD, développement de la langue anglaise aux États-Unis) et aux enseignants bilingues, aux conseillers pédagogiques, aux médiateurs famille-école et aux chefs d'établissement qui accueillent des élèves plurilingues et leurs familles. L'IA peut accélérer la création d'aides linguistiques et de traductions, mais elle peut aussi produire des erreurs qui embrouillent les élèves ou induisent les familles en erreur.",
    "Le chapitre 1 construit des aides pour la classe : textes adaptés qui gardent les idées, glossaires bilingues et amorces de phrases par niveau de maîtrise. Le chapitre 2 couvre la communication avec les familles, une démarche de traduction avec vérification humaine, la vie privée, et le rôle du responsable pour valoriser les langues familiales.",
    "Le cours part de la situation américaine, où les élèves apprennent l'anglais ; les mêmes méthodes valent pour toute langue de scolarisation, comme le français. Les consignes fédérales américaines sur les élèves apprenant l'anglais ont changé récemment ; le personnel de votre district chargé de ces élèves et des droits civiques connaît vos obligations actuelles. Ailleurs, renseignez-vous auprès de votre ministère. Utilisez seulement des supports inventés ou généraux, sans information sur les élèves. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Créez un dossier d'aide plurilingue pour une leçon : une version adaptée du texte principal qui garde les idées du niveau de la classe, un glossaire bilingue de 8 à 10 mots clés dans une langue familiale présente dans votre école, des amorces de phrases à trois niveaux de maîtrise pour la principale tâche orale ou écrite de la leçon, et un message aux familles traduit par l'IA et vérifié par un locuteur qualifié. Rédigez la démarche de traduction en quatre étapes que suivra votre école, et notez chaque correction faite par le vérificateur.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des enseignants de classe, des enseignants d'anglais langue seconde (ELD) et bilingues, des conseillers pédagogiques, des médiateurs famille-école et des chefs d'établissement dans des écoles des États-Unis qui accueillent des élèves plurilingues et leurs familles.",
    startingPoint: "Ils créent les aides linguistiques et les traductions pour les familles à la main ou avec des outils de traduction gratuits, souvent sans vérification. Ils ne savent pas toujours qui, dans le district, confirme les obligations actuelles envers les familles plurilingues.",
    gap: "L'IA peut accélérer les aides linguistiques et les traductions, mais ses erreurs peuvent embrouiller les élèves ou induire les familles en erreur, et les aides peuvent abaisser le niveau des apprentissages au lieu d'alléger la langue. Les éducateurs ont besoin d'aides qui gardent les idées du niveau de la classe, d'une démarche de traduction avec une vérification humaine qualifiée, et de savoir clairement où confirmer les obligations.",
    constraints: [
      "Utilisez seulement des supports inventés ou généraux, sans aucune information d'élève",
      "Chaque traduction par IA pour les familles est vérifiée par un locuteur qualifié avant l'envoi ; les sujets sensibles comme les réunions d'éducation spécialisée passent par une traduction professionnelle comme l'exige le district",
      "Les orientations fédérales sur les élèves qui apprennent l'anglais ont changé récemment ; le service EL du district et le coordinateur des droits civiques confirment les obligations actuelles",
      "On ne demande pas aux élèves de traduire des sujets importants pour leur propre famille",
      "Temps : des leçons courtes à caser dans une journée d'enseignement"
    ],
    prerequisites: "Aucun. « L'IA pour les responsables scolaires et éducatifs 2 : outils d'IA pour les enseignants » est un bon point de départ."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un texte du niveau de la classe", action: "adapter le texte avec l'IA pour alléger la charge linguistique en gardant les idées du niveau de la classe", standard: "en réussissant le test des mêmes questions" },
    { id: "O2", condition: "Pour les mots clés d'une leçon", action: "créer un glossaire bilingue de 8 à 10 mots dans une langue familiale de votre école, avec les mots apparentés signalés", standard: "vérifié par un locuteur qualifié, avec chaque correction notée" },
    { id: "O3", condition: "À partir de la principale tâche orale ou écrite d'une leçon", action: "rédiger des amorces de phrases à trois niveaux de maîtrise avec une banque de mots", standard: "avec chaque niveau qui demande la même réflexion" },
    { id: "O4", condition: "À partir d'un message pour les familles", action: "suivre une démarche de traduction en quatre étapes : anglais simple, outil approuvé, vérification qualifiée, enregistrement", standard: "sans rien envoyer avant qu'un locuteur qualifié l'ait vérifié" },
    { id: "O5", condition: "Quand des questions se posent sur les obligations envers les familles plurilingues", action: "identifier qui, dans votre district, confirme les obligations actuelles et décrire les besoins des élèves à l'IA seulement en termes généraux", standard: "avec le contact de cette personne écrit sur la page de votre démarche" },
    { id: "O6", condition: "Pour votre école", action: "prévoir comment l'IA soutiendra les langues familiales sans remplacer le personnel bilingue", standard: "avec une mesure d'amélioration de la communication avec les familles" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Aides linguistiques en classe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Des aides linguistiques qui gardent un apprentissage exigeant",
          minutes: 5,
          goal: "Adapter un texte pour alléger la langue sans abaisser les idées du niveau de la classe.",
          text: [
            "Les élèves plurilingues peuvent réfléchir au niveau de leur classe tout en apprenant encore la langue de l'école. Le but d'une aide est d'alléger la charge linguistique, pas la réflexion. Cela veut dire garder les concepts clés, le vocabulaire et les questions, tout en ajoutant de la clarté : phrases plus courtes, titres, visuels, termes clés en gras avec leur définition.",
            "Consigne (prompt) : « Adapte ce texte de sciences pour des élèves de 12 ans qui apprennent l'anglais à un niveau intermédiaire. Garde chaque concept clé et ces mots scolaires : [liste]. Utilise des phrases plus courtes et des titres, mets les mots scolaires en gras et définis chacun en anglais simple. Ne retire aucune idée. »",
            "Vérifiez l'exactitude du texte adapté par rapport à l'original. Un bon test : un élève qui lit le texte adapté pourrait-il répondre aux mêmes questions principales qu'un élève qui a lu l'original ?"
          ],
          steps: ["Listez les concepts clés et les mots scolaires.", "Demandez à l'IA d'adapter au niveau de langue en gardant les deux.", "Ajoutez titres, visuels et termes en gras avec définitions.", "Vérifiez l'exactitude par rapport à l'original.", "Test : peut-on répondre aux mêmes questions principales ?"],
          words: [["Élève plurilingue", "un élève qui apprend dans plus d'une langue, souvent encore en train de maîtriser la langue de l'école."], ["Charge linguistique", "la difficulté de la langue d'un texte, indépendamment de la difficulté des idées."], ["Vocabulaire scolaire", "les mots utilisés dans les matières scolaires, comme analyser, preuve ou photosynthèse."]],
          slides: [
            { title: "Alléger la langue, pas la réflexion", bullets: ["Gardez concepts, vocabulaire, questions", "Ajoutez de la clarté : phrases courtes, titres, visuels"] },
            { title: "La consigne", bullets: ["Indiquez le niveau et les mots scolaires", "Mettez en gras et définissez les termes clés", "« Ne retire aucune idée »"] },
            { title: "Vérifiez", bullets: ["Exactitude par rapport à l'original", "Peut-on répondre aux mêmes questions principales ?"] }
          ],
          tryIt: "Adaptez avec l'IA un texte du niveau de la classe pour un niveau de langue intermédiaire, en gardant tous les concepts clés. Vérifiez-le avec le test des mêmes questions.",
          youCanNow: "adapter des textes pour les élèves plurilingues sans abaisser les idées du niveau de la classe.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que la charge linguistique ?", options: ["La difficulté de la langue, à part des idées", "Le nombre de pages d'un texte", "Le nombre d'élèves qui parlent une langue", "Le poids d'un manuel"], answer: 0, why: "Alléger la charge linguistique rend le texte plus facile à lire sans abaisser les idées." },
            { objective: "O1", q: "Le texte adapté par l'IA supprime une notion clé pour être plus court. Que feriez-vous ?", options: ["L'utiliser ; plus court, c'est mieux", "Donner aux élèves plurilingues un sujet plus facile", "Remettre la notion et vérifier avec le test des mêmes questions", "Demander aux élèves de sauter ce passage"], answer: 2, why: "Les textes adaptés gardent les notions clés pour que les élèves apprennent au niveau de la classe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Glossaires bilingues et mots apparentés",
          minutes: 5,
          goal: "Créer un glossaire bilingue vérifié pour les mots clés d'une leçon.",
          text: [
            "Un glossaire bilingue donne chaque mot clé dans la langue de l'école, une définition simple, le mot dans la langue familiale de l'élève et une phrase d'exemple. L'IA peut en rédiger un rapidement dans beaucoup de langues : « Fais un tableau-glossaire de ces 10 mots de sciences pour des élèves de 10 ans : mot en anglais, définition simple, traduction en espagnol, phrase d'exemple en anglais. »",
            "Demandez à l'IA de signaler les mots apparentés (des mots qui se ressemblent et ont le même sens dans les deux langues, comme « animal » en anglais et en espagnol, ou « information » et « información ») et les faux amis (des mots qui se ressemblent mais n'ont pas le même sens). Les mots apparentés sont une force que les élèves apportent.",
            "Les traductions de mots isolés par l'IA peuvent choisir le mauvais sens pour votre matière (par exemple, un terme de mathématiques ou de sciences qui a aussi un sens courant). Faites vérifier le glossaire par un locuteur qualifié, comme un enseignant bilingue ou un traducteur du district, avant que les élèves l'utilisent."
          ],
          steps: ["Listez 8 à 10 mots clés.", "Demandez un tableau : mot, définition, mot dans la langue familiale, exemple.", "Demandez à l'IA de signaler les mots apparentés et les faux amis.", "Faites-le vérifier par un locuteur qualifié.", "Partagez-le avec les élèves avant la leçon."],
          words: [["Glossaire bilingue", "une liste de mots clés avec leur sens dans deux langues."], ["Mot apparenté", "un mot qui se ressemble et a à peu près le même sens dans deux langues."], ["Faux ami", "un mot qui se ressemble dans deux langues mais a un sens différent."]],
          slides: [
            { title: "Le tableau-glossaire", bullets: ["Mot dans la langue de l'école et définition simple", "Mot dans la langue familiale", "Phrase d'exemple"] },
            { title: "Les mots apparentés sont une force", bullets: ["Même forme, même sens : animal / animal", "Attention aux faux amis"] },
            { title: "Vérifiez avant usage", bullets: ["L'IA peut choisir le mauvais sens pour la matière", "Un enseignant bilingue ou un traducteur vérifie"] }
          ],
          tryIt: "Créez un glossaire bilingue de 8 à 10 mots pour une leçon, dans une langue familiale présente dans votre école, avec les mots apparentés signalés. Demandez à un locuteur qualifié de le vérifier et notez les corrections.",
          youCanNow: "créer des glossaires bilingues qui s'appuient sur les langues familiales des élèves.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un faux ami ?", options: ["Un mot apparenté qui a le même sens dans deux langues", "Un mot qui se ressemble dans deux langues mais qui a un sens différent", "Un ami qui traduit pour vous", "Un mot sans traduction"], answer: 1, why: "Les faux amis ressemblent à des mots apparentés mais trompent : il faut les signaler." },
            { objective: "O2", q: "L'IA a traduit un mot de sciences avec son sens courant au lieu de son sens scientifique. Que faites-vous ?", options: ["Le garder ; les élèves comprendront", "Retirer le mot du glossaire", "Demander à l'IA une définition plus longue", "Le faire corriger par un locuteur qualifié et noter la correction"], answer: 3, why: "Les traductions de mots isolés par l'IA peuvent choisir le mauvais sens pour votre matière." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amorces de phrases par niveau de maîtrise",
          minutes: 5,
          goal: "Rédiger des amorces de phrases à trois niveaux pour une tâche orale ou écrite.",
          text: [
            "Les amorces de phrases donnent aux élèves la structure de la langue scolaire pour qu'ils puissent se concentrer sur les idées. Pour une même tâche, les élèves de niveaux de langue différents ont besoin d'aides différentes. Exemple de tâche : expliquer si une affirmation est soutenue par des preuves.",
            "Demandez à l'IA trois niveaux. Débutant : des amorces courtes avec une banque de mots (« L'affirmation est ___. La preuve est ___. »). Intermédiaire : des amorces avec des mots de liaison (« L'affirmation est soutenue parce que ___. Cependant, ___. »). Avancé : des débuts de phrases ouverts et des connecteurs scolaires (« Bien que les preuves suggèrent ___, elles n'expliquent pas entièrement ___. »).",
            "Affichez les trois niveaux pour que les élèves puissent choisir et progresser. Vérifiez que chaque niveau demande la même réflexion. Les référentiels de développement de la langue de votre district et vos collègues spécialistes de la langue seconde peuvent vous aider à faire correspondre les amorces aux niveaux de maîtrise."
          ],
          steps: ["Nommez la tâche orale ou écrite.", "Demandez des amorces aux niveaux débutant, intermédiaire et avancé.", "Ajoutez une banque de mots au niveau débutant.", "Vérifiez que chaque niveau demande la même réflexion.", "Affichez les trois ; laissez les élèves progresser."],
          words: [["Amorce de phrase", "une phrase à trous qui montre la structure d'une réponse."], ["Niveau de maîtrise", "le degré de développement d'un élève dans la langue de l'école."], ["Connecteur", "un mot qui relie des idées, comme parce que, cependant ou bien que."]],
          slides: [
            { title: "Les amorces libèrent la réflexion", bullets: ["La structure de la langue scolaire", "Concentration sur les idées"] },
            { title: "Trois niveaux, même réflexion", bullets: ["Débutant : amorces courtes, banque de mots", "Intermédiaire : connecteurs", "Avancé : débuts de phrases scolaires ouverts"] },
            { title: "Bien les utiliser", bullets: ["Affichez les trois ; les élèves progressent", "Ajustez les niveaux avec vos collègues de langue seconde"] }
          ],
          tryIt: "Choisissez une tâche orale ou écrite d'une prochaine leçon. Utilisez l'IA pour rédiger des amorces à trois niveaux, vérifiez qu'elles demandent la même réflexion et ajoutez une banque de mots.",
          youCanNow: "rédiger des amorces de phrases qui soutiennent chaque niveau de langue dans une même tâche.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une amorce de phrase ?", options: ["Une image autour d'une phrase", "Une liste de mots d'orthographe", "Une structure de réponse avec des blancs à remplir", "La traduction d'une phrase"], answer: 2, why: "Les amorces montrent aux élèves comment construire une réponse." },
            { objective: "O3", q: "Votre amorce de niveau débutant demande de nommer une couleur, et celle de niveau avancé d'expliquer une cause. Que changeriez-vous ?", options: ["Faire demander la même réflexion à chaque niveau, avec un soutien différent", "Rien ; les débutants ont besoin d'idées plus faciles", "Supprimer le niveau débutant", "Ne donner aucune amorce aux débutants"], answer: 0, why: "Les amorces de chaque niveau demandent la même réflexion ; seul le soutien change." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Aides linguistiques en classe",
        questions: [
          { objective: "O1", q: "Une bonne aide linguistique allège :", options: ["La réflexion", "Le niveau de classe", "La charge linguistique, en gardant les idées", "Les attentes"], answer: 2, why: "Les élèves peuvent réfléchir au niveau de la classe tout en apprenant la langue." },
          { objective: "O1", q: "Quel test permet de vérifier un texte adapté ?", options: ["Les élèves pourraient-ils répondre aux mêmes questions principales qu'avec l'original ?", "Est-il plus court ?", "A-t-il plus d'images ?", "Est-il dans une nouvelle police ?"], answer: 0, why: "Mêmes questions, mêmes idées." },
          { objective: "O2", q: "Un mot apparenté est :", options: ["Une règle de grammaire", "Un terme de mathématiques", "Une mauvaise traduction", "Un mot qui se ressemble et a à peu près le même sens dans deux langues"], answer: 3, why: "Les mots apparentés sont une force que les élèves apportent." },
          { objective: "O2", q: "Qui doit vérifier un glossaire bilingue produit par l'IA ?", options: ["Personne", "Un locuteur qualifié comme un enseignant bilingue ou un traducteur du district", "L'IA à nouveau", "Un élève qui apprend la langue"], answer: 1, why: "L'IA peut choisir le mauvais sens pour la matière." },
          { objective: "O3", q: "Des amorces de phrases à trois niveaux doivent :", options: ["Demander une réflexion différente", "Être réservées aux débutants", "Rester secrètes", "Demander la même réflexion avec des aides différentes"], answer: 3, why: "L'aide varie ; la réflexion, non." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Familles, traduction et pilotage",
      lessons: [
        {
          objectives: ["O4"],
          title: "Une démarche de traduction avec vérification humaine",
          minutes: 6,
          goal: "Fixer une démarche en quatre étapes pour traduire les communications aux familles.",
          text: [
            "La traduction par l'IA est rapide et souvent bonne, mais elle fait des erreurs qui comptent : mauvaises dates, mauvais ton, termes scolaires sans traduction directe, et erreurs dans les langues moins répandues. Les familles se fient à ce que l'école leur envoie.",
            "Une démarche en quatre étapes : 1) Rédigez d'abord le texte en langage simple (phrases courtes, sans expressions idiomatiques ni jargon) ; un texte clair se traduit mieux. 2) Traduisez avec un outil approuvé. 3) Un locuteur qualifié (traducteur du district, membre du personnel bilingue ou prestataire) vérifie et corrige. 4) Envoyez, et gardez la version vérifiée pour la réutiliser.",
            "Pour les communications à fort enjeu (éducation spécialisée, discipline, santé et sécurité, droits juridiques), faites appel à une traduction ou une interprétation professionnelle comme votre district l'exige. Ne demandez pas aux élèves de traduire pour leur propre famille sur des sujets importants."
          ],
          steps: ["Rédigez d'abord en langage simple : sans expressions idiomatiques ni jargon.", "Traduisez avec un outil approuvé.", "Un locuteur qualifié vérifie et corrige.", "Envoyez, et gardez la version vérifiée.", "Messages à fort enjeu : traduction ou interprétation professionnelle."],
          words: [["Expression idiomatique", "une expression dont le sens n'est pas la somme de ses mots, comme « faire le point »."], ["Interprétation", "traduire une langue parlée, par exemple pendant une réunion."]],
          slides: [
            { title: "Pourquoi vérifier les traductions de l'IA", bullets: ["Mauvaises dates et mauvais ton", "Termes scolaires sans équivalent direct", "Plus d'erreurs dans les langues moins répandues"] },
            { title: "Quatre étapes", bullets: ["1 D'abord un texte simple", "2 Traduire avec un outil approuvé", "3 Un locuteur qualifié vérifie", "4 Envoyer et garder"] },
            { title: "Messages à fort enjeu", bullets: ["Éducation spécialisée, discipline, santé, droits", "Traduction ou interprétation professionnelle", "Ne jamais demander aux élèves de les traduire"] }
          ],
          tryIt: "Rédigez un court message aux familles sur un événement de l'école en langage simple, traduisez-le avec un outil approuvé et demandez à un locuteur qualifié de le vérifier. Notez chaque correction.",
          youCanNow: "mener une démarche de traduction où une personne qualifiée vérifie chaque traduction de l'IA.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi écrire le message en anglais simple avant de le traduire ?", options: ["L'anglais simple est plus court à imprimer", "Un anglais clair se traduit plus exactement", "Les outils de traduction ne lisent que l'anglais simple", "C'est exigé par la loi"], answer: 1, why: "Un texte de départ clair donne moins d'erreurs de traduction." },
            { objective: "O4", q: "Un enseignant veut qu'un élève traduise pour ses parents une note sur ses propres résultats. Que suggéreriez-vous ?", options: ["Laisser l'élève la traduire", "L'envoyer seulement en anglais", "Utiliser l'IA et l'envoyer sans vérification", "Utiliser plutôt la démarche avec la vérification d'un locuteur qualifié"], answer: 3, why: "Les élèves ne doivent pas traduire des sujets importants pour leur propre famille." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Obligations, vie privée et consignes actuelles",
          minutes: 5,
          goal: "Identifier qui confirme les obligations de votre école envers les familles plurilingues et où vérifier les orientations actuelles.",
          text: [
            "Aux États-Unis, les écoles ont depuis longtemps des obligations fédérales de droits civiques envers les élèves apprenant l'anglais, et doivent communiquer avec les parents qui maîtrisent mal l'anglais dans une langue qu'ils comprennent. En août 2025, selon K-12 Dive, le ministère de l'Éducation des États-Unis a annulé sa lettre officielle commune (Dear Colleague Letter) de 2015 sur les élèves apprenant l'anglais, en disant qu'elle ne correspondait pas aux priorités du gouvernement. Les Dear Colleague Letters sont des consignes, pas des lois.",
            "Comme les consignes ont changé, ne vous fiez pas aux anciens résumés. Demandez au service des élèves apprenant l'anglais de votre district, au coordinateur des droits civiques ou de Title VI (la loi fédérale contre la discrimination fondée sur l'origine), ou au conseiller juridique quelles sont vos obligations actuelles, et consultez les consignes de l'agence éducative de votre État, qui peut fixer ses propres exigences. Hors des États-Unis, renseignez-vous auprès de votre ministère de l'Éducation.",
            "La vie privée s'applique toujours : le statut d'élève apprenant l'anglais, l'origine linguistique et les résultats de maîtrise d'un élève font partie des dossiers scolaires protégés par FERPA (la loi fédérale américaine sur les dossiers scolaires). Gardez-les hors des outils d'IA non approuvés, et décrivez les besoins en termes généraux dans vos consignes."
          ],
          steps: ["Ne vous fiez pas aux anciens résumés des consignes sur les élèves apprenant l'anglais.", "Demandez au service compétent du district ou au coordinateur des droits civiques vos obligations actuelles.", "Consultez les consignes de l'agence éducative de votre État.", "Gardez le statut et les résultats linguistiques hors des outils d'IA non approuvés.", "Décrivez les besoins en termes généraux dans vos consignes."],
          words: [["Élève apprenant l'anglais (EL)", "un élève identifié comme ayant besoin d'aide pour apprendre l'anglais scolaire."], ["Maîtrise limitée de l'anglais (LEP)", "ne pas encore savoir lire, écrire, parler ou comprendre l'anglais assez bien pour une situation donnée."], ["Annuler", "supprimer ou retirer une consigne ou une décision antérieure."]],
          slides: [
            { title: "Les consignes ont changé", bullets: ["Lettre de 2015 sur les élèves EL annulée en août 2025", "Une consigne n'est pas une loi"] },
            { title: "Confirmez les obligations actuelles", bullets: ["Service EL du district ou coordinateur des droits civiques", "Consignes EL de l'agence éducative de l'État", "Conseiller juridique en cas de doute"] },
            { title: "Vie privée", bullets: ["Statut EL et résultats sont des dossiers scolaires", "Gardez-les hors des outils non approuvés", "Décrivez les besoins en termes généraux"] }
          ],
          sources: [{ name: "K-12 Dive : le ministère de l'Éducation annule ses consignes sur les élèves apprenant l'anglais (août 2025)", url: "https://www.k12dive.com/news/education-department-rescinds-ela-english-learner-guidance-2015-dear-colleague/758163/" }, { name: "FERPA : protéger la vie privée des élèves", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Trouvez qui, dans votre district, répond aux questions sur la communication avec les familles plurilingues (service EL, coordinateur des droits civiques ou médiateur famille-école) et notez son contact sur la page de votre démarche.",
          youCanNow: "trouver vos obligations actuelles envers les familles plurilingues et protéger leurs informations.",
          quickCheck: [
            { objective: "O5", q: "Que sont les Dear Colleague Letters ?", options: ["Des orientations, pas des lois", "De nouvelles lois fédérales", "Des lettres aux familles", "Des contrats de district"], answer: 0, why: "Les Dear Colleague Letters expliquent comment les agences lisent la loi ; ce sont des orientations." },
            { objective: "O5", q: "Vous ne savez pas ce que votre école doit fournir en communication traduite. À qui demandez-vous ?", options: ["À un chatbot d'IA", "À un article de presse", "Au service EL de votre district ou au coordinateur des droits civiques", "À un groupe de parents en ligne"], answer: 2, why: "Le service EL et le coordinateur des droits civiques du district connaissent vos obligations actuelles." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faire des langues familiales une force",
          minutes: 6,
          goal: "Prévoir comment votre école utilisera l'IA pour valoriser les langues familiales, sans remplacer les personnes.",
          text: [
            "La traduction par l'IA peut donner l'impression que le personnel bilingue et les interprètes sont moins nécessaires. C'est l'inverse : les brouillons de l'IA accélèrent leurs vérifications, et leur connaissance de la culture et de la communauté ne s'automatise pas. Protégez leur temps pour les vérifications et pour les conversations les plus importantes.",
            "Utilisez l'IA pour honorer les langues familiales : laissez les élèves expliquer d'abord leurs idées dans leur langue familiale avant de construire la langue de l'école, créez des glossaires et des documents d'accueil dans les langues des familles, et invitez les familles à partager leurs savoirs. Évitez les outils ou les règles qui ne traitent les langues familiales que comme un problème.",
            "Rassemblez tout dans un court plan d'école : quelles aides les enseignants utiliseront, la démarche de traduction, qui vérifie, comment les familles donnent leur avis, et comment vous saurez que les familles sont mieux informées (par exemple, la participation aux événements ou une courte enquête dans leurs langues)."
          ],
          steps: ["Protégez le temps du personnel bilingue pour les vérifications et les conversations clés.", "Laissez les élèves utiliser leur langue familiale pour construire leurs idées.", "Créez des documents d'accueil dans les langues des familles.", "Rédigez un court plan d'école avec la démarche et les vérificateurs.", "Mesurez si les familles sont mieux informées."],
          words: [["Approche fondée sur les forces", "voir ce que les élèves et les familles apportent comme des forces, pas comme des manques."], ["Médiateur famille-école", "un membre du personnel qui crée des liens entre l'école et les familles."]],
          slides: [
            { title: "L'IA soutient les personnes", bullets: ["Les brouillons accélèrent les vérifications du personnel bilingue", "La connaissance de la culture et de la communauté reste humaine"] },
            { title: "Les langues familiales sont une force", bullets: ["Penser dans la langue familiale, construire la langue de l'école", "Documents d'accueil dans les langues des familles"] },
            { title: "Un court plan d'école", bullets: ["Aides, démarche, vérificateurs", "Avis des familles", "Mesure : les familles sont-elles mieux informées ?"] }
          ],
          tryIt: "Tâche finale : construisez votre dossier d'aide plurilingue (texte adapté, glossaire bilingue vérifié, amorces à trois niveaux, une traduction pour les familles vérifiée), rédigez votre démarche de traduction en quatre étapes avec le contact du vérificateur, et notez chaque correction faite.",
          youCanNow: "piloter un usage de l'IA qui soutient avec exactitude et respect les élèves plurilingues et leurs familles.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire une approche fondée sur les atouts pour les élèves plurilingues ?", options: ["Voir ce que les élèves apportent comme des forces", "Compter les biens de l'école", "Se concentrer sur ce qui manque aux élèves", "N'utiliser que l'anglais en classe"], answer: 0, why: "Une approche fondée sur les atouts traite les langues familiales comme des forces." },
            { objective: "O6", q: "Un responsable suggère qu'avec la traduction par IA, le personnel bilingue n'est plus nécessaire. Que diriez-vous ?", options: ["Être d'accord ; l'IA coûte moins cher", "Proposer de remplacer les médiateurs famille-école par des chatbots", "Arrêter toute traduction", "Leurs vérifications deviennent plus rapides, et leur connaissance de la communauté compte toujours"], answer: 3, why: "L'IA accélère le travail, mais des personnes qualifiées le vérifient et connaissent la communauté." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Familles, traduction et pilotage",
        questions: [
          { objective: "O4", q: "Pourquoi rédiger en langage simple avant de traduire ?", options: ["L'IA ne peut pas lire un long texte", "C'est plus court", "Un texte clair se traduit plus exactement", "La loi l'exige"], answer: 2, why: "Les expressions idiomatiques et le jargon causent des erreurs de traduction." },
          { objective: "O4", q: "Un message sur la réunion d'éducation spécialisée d'un élève doit être traduit. Meilleure approche ?", options: ["Une traduction professionnelle comme le district l'exige", "Demander à l'élève de traduire", "Une traduction par l'IA non vérifiée", "L'envoyer seulement en anglais"], answer: 0, why: "Les messages à fort enjeu demandent une traduction professionnelle." },
          { objective: "O5", q: "Selon K-12 Dive, qu'est-il arrivé en 2025 à la lettre de 2015 sur les élèves apprenant l'anglais ?", options: ["Elle est devenue une loi", "Elle a été annulée", "Elle a été traduite", "Rien"], answer: 1, why: "Le ministère l'a annulée en août 2025." },
          { objective: "O5", q: "Les résultats de maîtrise de l'anglais d'un élève sont :", options: ["Une partie des dossiers scolaires protégés par FERPA", "Des informations publiques", "Sans risque dans n'importe quel outil d'IA", "La propriété du fournisseur"], answer: 0, why: "Ce sont des dossiers d'élèves." },
          { objective: "O6", q: "Comment la traduction par l'IA change-t-elle le rôle du personnel bilingue ?", options: ["Il n'est plus nécessaire", "Il doit seulement corriger l'orthographe", "Il doit être remplacé par les élèves", "Ses vérifications vont plus vite, et sa connaissance de la communauté compte toujours"], answer: 3, why: "Les brouillons de l'IA soutiennent les personnes ; ils ne les remplacent pas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les élèves plurilingues",
    questions: [
      { objective: "O1", q: "Les élèves plurilingues peuvent :", options: ["Faire seulement un travail facile", "Réfléchir au niveau de leur classe tout en apprenant encore la langue", "Ne pas utiliser de mots scolaires", "Ne pas apprendre avec l'IA"], answer: 1, why: "Le niveau de langue n'est pas le niveau de réflexion." },
      { objective: "O1", q: "La charge linguistique désigne :", options: ["Le nombre de langues parlées", "Le poids du livre", "La difficulté de la langue, indépendamment des idées", "La quantité de devoirs"], answer: 2, why: "Les aides allègent la langue, pas les idées." },
      { objective: "O1", q: "Un texte adapté doit garder :", options: ["Aucune question", "Seulement des mots faciles", "Les concepts clés et le vocabulaire scolaire", "La moitié des idées"], answer: 2, why: "L'objectif d'apprentissage reste le même." },
      { objective: "O1", q: "Le vocabulaire scolaire comprend des mots comme :", options: ["Preuve et analyser", "Bonjour et merci", "Déjeuner et récréation", "Bus et voiture"], answer: 0, why: "Les mots des matières scolaires doivent être enseignés directement." },
      { objective: "O2", q: "Un glossaire bilingue comprend :", options: ["Des notes", "Seulement des mots dans la langue de l'école", "Des noms d'élèves", "Mot, définition, mot dans la langue familiale, exemple"], answer: 3, why: "Les deux langues construisent la compréhension." },
      { objective: "O2", q: "Un faux ami est :", options: ["Un mot apparenté", "Un mot qui se ressemble dans deux langues mais a un sens différent", "Un camarade de classe", "Un traducteur"], answer: 1, why: "Les élèves doivent y faire attention." },
      { objective: "O2", q: "Les traductions de mots isolés par l'IA peuvent :", options: ["Ne traduire que les noms", "Être toujours parfaites", "N'être jamais utiles", "Choisir le mauvais sens pour votre matière"], answer: 3, why: "Le contexte compte ; vérifiez-les." },
      { objective: "O3", q: "Une amorce de phrase :", options: ["Est un test de grammaire", "Est un cadre photo", "Montre la structure d'une réponse avec des trous", "Est une note"], answer: 2, why: "Les amorces permettent aux élèves de se concentrer sur les idées." },
      { objective: "O3", q: "Les amorces de niveau débutant comprennent souvent :", options: ["Une banque de mots", "Aucune aide", "Seulement des connecteurs avancés", "Seulement des questions"], answer: 0, why: "Plus d'aide aux premiers niveaux." },
      { objective: "O3", q: "Qui aide à faire correspondre les amorces aux niveaux de maîtrise ?", options: ["Un fournisseur", "Les collègues de langue seconde et les référentiels de développement de la langue", "L'IA seule", "Personne"], answer: 1, why: "Les spécialistes connaissent les niveaux." },
      { objective: "O4", q: "L'étape 3 de la démarche de traduction est :", options: ["Un locuteur qualifié vérifie et corrige", "Envoyer tout de suite", "Supprimer le texte d'origine", "Demander à un élève"], answer: 0, why: "La vérification humaine repère les erreurs." },
      { objective: "O4", q: "Pourquoi garder les traductions vérifiées ?", options: ["Aucune raison", "Pour les vendre", "Pour les cacher", "Pour réutiliser des versions exactes"], answer: 3, why: "Les versions vérifiées font gagner du temps plus tard." },
      { objective: "O4", q: "Les élèves ne doivent pas traduire :", options: ["Des mots de vocabulaire en classe", "Des sujets importants pour leur propre famille", "Leurs propres idées", "Des titres de livres"], answer: 1, why: "C'est injuste pour l'élève et risqué pour la famille." },
      { objective: "O5", q: "Les Dear Colleague Letters sont :", options: ["Des décisions de justice", "Des lois votées par le Congrès", "Des consignes, pas des lois", "Des lois d'État"], answer: 2, why: "Une consigne peut être publiée ou retirée." },
      { objective: "O5", q: "Pour confirmer vos obligations actuelles envers les familles plurilingues, demandez :", options: ["À un fournisseur", "À un agent conversationnel", "Au service EL de votre district ou au coordinateur des droits civiques", "Aux réseaux sociaux"], answer: 2, why: "Ils connaissent la loi et les politiques actuelles." },
      { objective: "O5", q: "L'agence éducative de votre État peut :", options: ["Fixer ses propres exigences pour les élèves apprenant l'anglais", "Ne jamais publier de consignes", "Remplacer entièrement la loi fédérale sur les droits civiques", "Interdire la traduction"], answer: 0, why: "Les États publient leurs propres consignes." },
      { objective: "O5", q: "Quand vous décrivez les besoins des élèves dans une consigne pour l'IA, faites-le :", options: ["Avec leur statut de visa", "Avec leurs noms et leurs résultats", "Avec leurs adresses", "En termes généraux"], answer: 3, why: "Gardez les informations des élèves privées." },
      { objective: "O6", q: "Une approche fondée sur les forces signifie :", options: ["Compter les biens de l'école", "Voir ce que les élèves apportent comme des forces", "Se concentrer sur les manques", "Une méthode budgétaire"], answer: 1, why: "Les langues familiales sont une force." },
      { objective: "O6", q: "Laisser les élèves expliquer d'abord leurs idées dans leur langue familiale :", options: ["Remplace l'enseignement de la langue de l'école", "Ralentit l'apprentissage", "Est interdit", "Construit la compréhension avant la langue de l'école"], answer: 3, why: "Réfléchir dans une langue maîtrisée soutient l'apprentissage." },
      { objective: "O6", q: "Une bonne mesure d'une meilleure communication avec les familles est :", options: ["Le nombre de pages envoyées", "Le nombre de consignes tapées", "La participation aux événements ou une enquête dans les langues des familles", "Les rapports des fournisseurs"], answer: 2, why: "Mesurez ce que vivent réellement les familles." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      5,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Texte adapté",
        objective: "O1",
        notYet: "Des idées clés ont été perdues ou trop simplifiées.",
        meets: "Une version adaptée qui garde les idées du niveau de la classe.",
        exceeds: "Réussit le test des mêmes questions et garde le vocabulaire scolaire avec un soutien."
      },
      {
        name: "Glossaire bilingue",
        objective: "O2",
        notYet: "Moins de 8 mots, ou pas vérifié par un locuteur qualifié.",
        meets: "8 à 10 mots clés dans une langue familiale, vérifiés par un locuteur qualifié.",
        exceeds: "Les mots apparentés et les faux amis sont signalés, avec un exemple pour chaque mot."
      },
      {
        name: "Amorces de phrases",
        objective: "O3",
        notYet: "Moins de trois niveaux, ou des niveaux qui demandent une réflexion différente.",
        meets: "Des amorces à trois niveaux de maîtrise pour la tâche principale de la leçon.",
        exceeds: "Chaque niveau demande la même réflexion, et les amorces de niveau débutant comprennent une banque de mots."
      },
      {
        name: "Traduction vérifiée pour les familles",
        objective: "O4",
        notYet: "La traduction n'a pas été vérifiée par un locuteur qualifié.",
        meets: "Un message aux familles traduit par l'IA et vérifié par un locuteur qualifié, avec les corrections notées.",
        exceeds: "La version vérifiée est enregistrée pour être réutilisée."
      },
      {
        name: "Démarche de traduction",
        objective: "O5",
        notYet: "Moins de quatre étapes, ou pas de contact pour la vérification.",
        meets: "Une démarche en quatre étapes que votre école suivra.",
        exceeds: "Comprend le contact de la personne qui vérifie et à qui s'adresser pour les obligations."
      }
    ]
  },
  evaluation: {
    results: [
      "Éducateurs qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Enseignants qui disent utiliser des textes adaptés, des glossaires ou des amorces avec des élèves plurilingues dans les 30 jours (enquête de suivi)",
      "Écoles qui adoptent une démarche de traduction avec une vérification qualifiée (enquête de suivi)",
      "Participation des familles aux événements, ou résultats d'enquêtes auprès des familles dans leurs langues"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet et un outil d'IA et de traduction approuvé par le district",
      "Un texte et une tâche du niveau de la classe tirés d'une prochaine leçon (aucune information d'élève)",
      "L'accès à un locuteur qualifié d'une langue familiale de votre école",
      "Environ 60 minutes au total, plus le temps de vérification par le locuteur qualifié"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis adaptez un texte en groupe et faites le test des mêmes questions.",
      "Prévoyez à l'avance des locuteurs qualifiés pour que chaque glossaire et chaque traduction puissent être vérifiés.",
      "Utilisez seulement des supports inventés ou généraux ; décrivez les besoins des élèves à l'IA seulement en termes généraux.",
      "Invitez le service EL du district ou le coordinateur des droits civiques à répondre aux questions sur les obligations actuelles.",
      "Notez l'exercice final avec la grille, et demandez la liste des corrections faites par la personne qui a vérifié."
    ]
  }
};
