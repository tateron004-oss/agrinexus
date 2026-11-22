"use strict";

// Koach Learn course (French translation of leadership/edu-ai-special-education.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-special-education-fr",
  lang: "fr",
  translationOf: "edu-ai-special-education",
  category: "Leadership Development",
  name: "L'IA pour l'éducation spécialisée",
  skills: "Savoir où l'IA a sa place et où elle ne l'a pas en éducation spécialisée, Créer des versions accessibles des supports, Construire des aides visuelles et des tâches découpées, Rédiger des explications en langage simple pour les familles, Protéger les informations des plans IEP et 504, Fixer des règles d'équipe",
  outcome: "utiliser l'IA pour rendre les supports de classe plus accessibles, versions en langage simple, étapes découpées, emplois du temps visuels et exercices à plusieurs niveaux, et pour expliquer les démarches de l'éducation spécialisée aux familles avec des mots simples, tout en laissant chaque décision IEP et 504 et toutes les informations sur les élèves à l'équipe.",
  about: [
    "Ce cours s'adresse aux enseignants spécialisés, aux enseignants de classe ordinaire qui accueillent des élèves en situation de handicap, aux professionnels des services connexes (orthophonistes, ergothérapeutes, etc.), aux coordinateurs et aux chefs d'établissement. L'IA peut faire gagner du temps pour adapter les supports et expliquer les démarches. Elle ne doit jamais rédiger ni décider le contenu du plan IEP ou 504 d'un élève.",
    "Le chapitre 1 fixe les limites (ce que la loi IDEA exige de l'équipe, et pourquoi l'IA ne peut pas tenir ce rôle) et fait pratiquer la création de supports accessibles. Le chapitre 2 couvre la communication avec les familles, la protection des informations des élèves et les règles que votre équipe suivra.",
    "Ce cours explique la loi américaine avec des mots simples pour que vous sachiez quoi demander ; ce n'est pas un conseil juridique. Le directeur de l'éducation spécialisée et le conseiller juridique de votre district ont le dernier mot. Hors des États-Unis, les mêmes principes s'appliquent, mais suivez les lois et les plans d'accompagnement de votre pays. Entraînez-vous uniquement avec des supports inventés ou généraux. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Créez un dossier d'accessibilité pour une leçon générale (sans information sur les élèves) : une version en langage simple du texte principal, la tâche découpée en étapes numérotées avec une liste à cocher, un emploi du temps visuel de la leçon, et des exercices à deux niveaux ; plus une explication d'une page en langage simple pour les familles sur une étape générale de l'éducation spécialisée (par exemple, « ce qui se passe lors de la réunion annuelle du plan IEP »). Vérifiez l'exactitude de tout, et rédigez cinq règles d'équipe pour l'usage de l'IA en éducation spécialisée.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des enseignants d'éducation spécialisée, des enseignants de classe ordinaire qui accueillent des élèves en situation de handicap, des professionnels des services connexes, des coordinateurs et des chefs d'établissement dans des écoles des États-Unis.",
    startingPoint: "Ils adaptent les supports et expliquent les démarches d'éducation spécialisée à la main, ce qui prend beaucoup de temps. Ils ont peut-être essayé l'IA mais ne savent pas où elle a sa place selon IDEA et la Section 504, ni comment protéger les informations des plans IEP et 504.",
    gap: "L'IA peut faire gagner du temps pour créer des supports accessibles et des explications en langage simple pour les familles, mais elle ne doit jamais rédiger ni décider le contenu du plan IEP ou 504 d'un élève, et les informations des élèves sont très sensibles. Les éducateurs doivent utiliser l'IA pour les bonnes tâches, vérifier ses résultats et suivre des règles d'équipe claires.",
    constraints: [
      "Le cours explique la loi en mots simples et ne constitue pas un avis juridique ; le directeur de l'éducation spécialisée et le conseiller juridique du district ont le dernier mot",
      "Exercices seulement avec des supports inventés ou généraux ; aucune information d'élève dans un outil d'IA non approuvé",
      "Les décisions IEP et 504 et les aménagements obligatoires restent à l'équipe et sont fournis tels qu'ils sont écrits",
      "Les documents pour les familles restent généraux et sont vérifiés par rapport aux documents du district ; les traductions sont vérifiées par des locuteurs qualifiés",
      "Temps : des leçons courtes à caser dans une journée d'enseignement"
    ],
    prerequisites: "Aucun. « L'IA pour les responsables scolaires et éducatifs 2 : outils d'IA pour les enseignants » est un bon point de départ."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de tâches d'éducation spécialisée", action: "classer chaque tâche en « L'IA peut aider » ou « Équipe seulement »", standard: "en laissant chaque décision IEP et 504 à l'équipe" },
    { id: "O2", condition: "À partir d'un texte et d'un devoir généraux", action: "créer avec l'IA une version en langage simple et une liste à cocher découpée en étapes", standard: "en comparant chacune avec l'original et en corrigeant chaque fait oublié ou modifié" },
    { id: "O3", condition: "Pour une leçon générale", action: "créer un emploi du temps visuel et des exercices à deux niveaux", standard: "avec un texte alternatif sur chaque image, chaque réponse vérifiée, et les aménagements obligatoires toujours fournis tels qu'ils sont écrits" },
    { id: "O4", condition: "À partir d'une étape générale de l'éducation spécialisée", action: "rédiger pour les familles une explication d'une page en langage simple", standard: "vérifiée par rapport aux documents officiels de votre district et relue par un collègue pour le ton" },
    { id: "O5", condition: "Quand le personnel veut l'aide de l'IA pour des informations d'éducation spécialisée", action: "choisir une façon sûre d'obtenir cette aide sans partager de détails d'IEP, de plan 504 ou d'évaluation", standard: "en utilisant seulement des outils approuvés avec le minimum d'informations" },
    { id: "O6", condition: "Pour votre équipe", action: "rédiger cinq règles d'équipe pour l'usage de l'IA en éducation spécialisée", standard: "avec un exemple pour chacune, partagées avec les enseignants, les aides-éducateurs et les professionnels des services connexes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Limites et supports accessibles",
      lessons: [
        {
          objectives: ["O1"],
          title: "Où l'IA a sa place, et où elle ne l'a pas",
          minutes: 6,
          goal: "Expliquer ce pour quoi l'IA peut aider en éducation spécialisée et ce qui reste à l'équipe IEP.",
          text: [
            "La loi américaine IDEA (Individuals with Disabilities Education Act) exige que les enfants en situation de handicap admissibles reçoivent une éducation publique gratuite et appropriée (FAPE). Selon la partie B, qui couvre les 3 à 21 ans, les services sont définis dans un plan d'éducation individualisé (IEP) élaboré par une équipe qui comprend les parents de l'enfant et le personnel de l'école. La partie C couvre l'intervention précoce pour les nourrissons et les tout-petits. Les plans 504 sont une voie distincte pour certains élèves en situation de handicap.",
            "Ce sont des décisions d'équipe, individuelles et juridiques, fondées sur une évaluation et la connaissance de l'enfant. L'IA ne peut pas assister à la réunion, ne connaît pas l'enfant et peut produire un contenu générique ou faux. L'IA ne doit donc pas rédiger les niveaux actuels, les objectifs, les services, les aménagements ou l'orientation, et ses résultats ne doivent jamais servir à décider de l'admissibilité.",
            "Là où l'IA aide : adapter les supports généraux de la classe, créer des exercices à plusieurs niveaux, faire des aides visuelles, rédiger des explications générales des démarches pour les familles, et organiser votre propre emploi du temps et vos modèles de documents (sans données d'élèves)."
          ],
          words: [["IDEA", "la loi fédérale américaine qui exige une éducation publique gratuite et appropriée pour les enfants en situation de handicap admissibles."], ["FAPE", "éducation publique gratuite et appropriée : ce que la loi IDEA garantit aux élèves admissibles."], ["IEP", "plan d'éducation individualisé : le plan écrit des services d'éducation spécialisée d'un élève, élaboré par une équipe qui comprend les parents."], ["Plan 504", "un plan qui prévoit des aménagements pour un élève en situation de handicap selon une autre loi fédérale américaine."]],
          slides: [
            { title: "Ce que la loi IDEA exige", bullets: ["FAPE pour les enfants en situation de handicap admissibles", "Partie B : de 3 à 21 ans, au moyen d'un plan IEP", "Plan IEP élaboré par une équipe qui comprend les parents"] },
            { title: "L'IA NE fait PAS", bullets: ["Rédiger les objectifs, les services ou les aménagements", "Décider de l'admissibilité ou de l'orientation", "Remplacer la connaissance de l'enfant par l'équipe"] },
            { title: "L'IA PEUT aider", bullets: ["Adapter les supports généraux", "Exercices à plusieurs niveaux ; aides visuelles", "Explications générales pour les familles"] }
          ],
          sources: [{ name: "Ministère de l'Éducation des États-Unis : rapport annuel au Congrès sur IDEA (partie B, 3 à 21 ans)", url: "https://sites.ed.gov/idea/2021-individuals-with-disabilities-education-act-annual-report-to-congress/" }, { name: "NCLD : Individuals with Disabilities Education Act", url: "https://ncld.org/understand-the-issues/learn-the-law/individuals-with-disabilities-education-act" }],
          tryIt: "Faites deux colonnes : « L'IA peut aider » et « Équipe seulement ». Placez au moins dix tâches d'éducation spécialisée de votre semaine dans la bonne colonne.",
          youCanNow: "tracer une limite claire entre les tâches où l'IA peut aider et les décisions de l'équipe IEP.",
          quickCheck: [
            { objective: "O1", q: "Qui élabore le plan IEP d'un élève ?", options: ["Un outil d'IA approuvé par le district", "Une équipe qui comprend les parents et le personnel de l'école", "Le chef d'établissement seul", "L'enseignant de classe ordinaire de l'élève seul"], answer: 1, why: "Le plan IEP est élaboré par une équipe qui comprend les parents." },
            { objective: "O1", q: "Un collègue demande à l'IA de proposer les aménagements qu'un élève devrait recevoir. Que diriez-vous ?", options: ["Bonne idée ; utilisez sa liste", "Demandez à un deuxième outil d'IA de vérifier", "Les décisions d'aménagement reviennent à l'équipe IEP ou 504, pas à l'IA", "Utilisez la liste de l'IA seulement pour les plus jeunes"], answer: 2, why: "Les décisions IEP et 504 restent à l'équipe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Versions en langage simple et tâches découpées",
          minutes: 5,
          goal: "Utiliser l'IA pour faire une version en langage simple d'un texte et découper une tâche en étapes.",
          text: [
            "Beaucoup d'élèves profitent d'un texte qui garde les idées mais allège la lecture : phrases plus courtes, mots courants, termes clés expliqués, titres et puces. Consigne (prompt) : « Réécris ce texte pour un niveau de lecture d'environ 8 ans. Garde tous les faits clés et ces mots de vocabulaire : [liste]. Utilise des phrases courtes et des titres. Ajoute un encadré qui définit chaque mot de vocabulaire. »",
            "Le découpage divise une tâche en plusieurs étapes courtes et numérotées, avec une liste à cocher. Consigne : « Découpe ce devoir en 5 à 8 étapes numérotées, une action par étape, avec une case à cocher pour chacune et une durée estimée. »",
            "Comparez chaque version avec l'original : l'IA supprime ou modifie parfois des faits en simplifiant. Gardez les idées du niveau de la classe ; alléger la lecture ne doit pas abaisser l'objectif d'apprentissage."
          ],
          steps: ["Collez le texte ou le devoir général (sans information sur les élèves).", "Demandez la version en langage simple, en gardant les faits clés et le vocabulaire.", "Demandez des étapes numérotées avec cases à cocher et durées.", "Comparez avec l'original ; corrigez les faits supprimés ou modifiés.", "Gardez le même objectif d'apprentissage."],
          words: [["Langage simple", "une écriture claire avec des phrases courtes et des mots courants."], ["Découpage", "diviser une tâche en petites étapes faciles à gérer."]],
          slides: [
            { title: "Version en langage simple", bullets: ["Mêmes idées, lecture allégée", "Phrases courtes, mots courants, titres", "Gardez le vocabulaire clé, avec définitions"] },
            { title: "Découpez la tâche", bullets: ["5 à 8 étapes numérotées", "Une action par étape", "Case à cocher et durée pour chacune"] },
            { title: "Comparez avec l'original", bullets: ["Simplifier peut faire disparaître des faits", "Même objectif d'apprentissage"] }
          ],
          tryIt: "Prenez un texte et un devoir généraux d'une prochaine leçon. Faites avec l'IA une version en langage simple et une liste d'étapes à cocher, puis comparez chacune avec l'original et corrigez les erreurs.",
          youCanNow: "créer des versions exactes en langage simple et découpées des supports de classe.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que le langage simple ?", options: ["Des phrases courtes et des mots courants qui gardent les mêmes idées", "Un texte plus court avec moins d'idées", "Un texte sans ponctuation", "Une traduction dans une autre langue"], answer: 0, why: "Le langage simple rend le texte plus facile à lire sans changer son contenu." },
            { objective: "O2", q: "La liste à cocher découpée par l'IA saute une étape du devoir. Que faites-vous ?", options: ["L'utiliser ; les élèves se débrouilleront", "Retirer l'étape du devoir", "Demander aux élèves de trouver l'étape manquante", "La comparer avec la tâche d'origine et ajouter l'étape manquante"], answer: 3, why: "Comparer avec l'original repère les étapes et les faits oubliés." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Aides visuelles et exercices à plusieurs niveaux",
          minutes: 5,
          goal: "Créer un emploi du temps visuel et deux niveaux d'exercices pour une leçon.",
          text: [
            "Les emplois du temps et les aides visuelles aident beaucoup d'élèves à savoir ce qui arrive et quoi faire. L'IA peut rédiger le texte d'un emploi du temps visuel (« 1. Échauffement, 5 minutes ; 2. Mini-leçon... ») et suggérer des icônes simples ; des outils comme Canva peuvent le mettre en page. Pour les images, vérifiez qu'elles sont claires, respectueuses et correspondent aux mots.",
            "Des exercices à plusieurs niveaux permettent à chaque élève de travailler la même compétence : demandez à l'IA une série avec plus de soutien (exemple résolu d'abord, moins d'étapes, banque de mots) et une série au niveau attendu. Vérifiez chaque réponse.",
            "N'oubliez pas que les aménagements inscrits dans le plan IEP ou 504 d'un élève doivent être fournis tels qu'ils sont écrits ; vos supports ajoutent de l'aide pour tous mais ne remplacent pas les aménagements obligatoires. Vérifiez aussi l'accessibilité : polices lisibles, bon contraste, texte alternatif pour les images, et texte compatible avec la synthèse vocale."
          ],
          steps: ["Rédigez le texte de l'emploi du temps visuel avec l'IA.", "Mettez-le en page avec des icônes claires et respectueuses.", "Demandez des exercices avec plus de soutien et au niveau attendu.", "Vérifiez chaque réponse.", "Vérifiez l'accessibilité : police, contraste, texte alternatif, synthèse vocale."],
          words: [["Emploi du temps visuel", "une liste en images et en mots de ce qui va se passer, dans l'ordre."], ["Texte alternatif", "une courte description écrite d'une image pour les personnes qui utilisent un lecteur d'écran."], ["Synthèse vocale", "une technologie qui lit un texte à voix haute."]],
          slides: [
            { title: "Emplois du temps visuels", bullets: ["L'IA rédige les étapes et les durées", "Mise en page avec des icônes claires et respectueuses"] },
            { title: "Deux niveaux d'exercices", bullets: ["Plus de soutien : exemple résolu, banque de mots", "Au niveau attendu : même compétence", "Vérifiez chaque réponse"] },
            { title: "Accessibilité et aménagements", bullets: ["Police lisible, contraste, texte alternatif", "Compatible avec la synthèse vocale", "Les aménagements obligatoires s'appliquent toujours"] }
          ],
          tryIt: "Faites un emploi du temps visuel pour une leçon et deux niveaux d'exercices pour sa compétence principale. Ajoutez un texte alternatif à chaque image et vérifiez chaque réponse.",
          youCanNow: "créer des aides visuelles et des exercices par niveaux qui rendent les leçons plus accessibles.",
          quickCheck: [
            { objective: "O3", q: "Que montre un emploi du temps visuel ?", options: ["Les notes des élèves", "L'agenda de l'enseignant", "Ce qui va se passer, dans l'ordre, avec des images et des mots", "Un plan de classe"], answer: 2, why: "Les emplois du temps visuels aident les élèves à savoir ce qui vient ensuite." },
            { objective: "O3", q: "Vos exercices à deux niveaux comprennent une banque de mots, mais le plan IEP d'un élève exige du temps supplémentaire. Qu'est-ce qui s'applique ?", options: ["Fournir le temps supplémentaire tel qu'il est écrit dans le plan IEP", "La banque de mots remplace le temps supplémentaire", "Demander à l'IA quelle aide est la meilleure", "Donner du temps supplémentaire seulement aux contrôles"], answer: 0, why: "Les aménagements obligatoires du plan IEP doivent être fournis tels qu'ils sont écrits, quelles que soient les autres aides ajoutées." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Limites et supports accessibles",
        questions: [
          { objective: "O1", q: "Selon la partie B de la loi IDEA, les services d'éducation spécialisée des élèves admissibles de 3 à 21 ans sont définis dans :", options: ["Un bulletin scolaire", "Un résumé produit par l'IA", "Un plan IEP élaboré par une équipe qui comprend les parents", "Une lettre d'information"], answer: 2, why: "Le plan IEP est le plan écrit de l'équipe." },
          { objective: "O1", q: "Quelle tâche l'IA ne doit-elle PAS faire ?", options: ["Rédiger les objectifs IEP d'un élève", "Faire une version en langage simple d'un texte général", "Rédiger un emploi du temps visuel", "Créer des exercices à deux niveaux"], answer: 0, why: "Le contenu du plan IEP est une décision d'équipe." },
          { objective: "O2", q: "L'IA a simplifié un texte de sciences et modifié un fait. Que faites-vous ?", options: ["L'utiliser quand même", "Supprimer l'original", "Le simplifier davantage", "Le comparer avec l'original et le corriger"], answer: 3, why: "Simplifier peut introduire des erreurs." },
          { objective: "O3", q: "Qu'est-ce qu'un texte alternatif ?", options: ["Une autre police", "Une description écrite d'une image pour les lecteurs d'écran", "Un autre test", "Un SMS"], answer: 1, why: "Le texte alternatif rend les images accessibles." },
          { objective: "O3", q: "Vos supports par niveaux offrent plus de soutien. Les aménagements IEP obligatoires s'appliquent-ils toujours ?", options: ["Non, les supports les remplacent", "Seulement les jours de test", "Seulement si les parents le demandent", "Oui, ils doivent être fournis tels qu'ils sont écrits"], answer: 3, why: "Les aménagements obligatoires ne sont pas remplacés." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Familles, vie privée et règles d'équipe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Expliquer les démarches aux familles avec des mots simples",
          minutes: 5,
          goal: "Rédiger pour les familles une explication en langage simple d'une étape générale de l'éducation spécialisée.",
          text: [
            "Les documents de l'éducation spécialisée sont pleins de termes que les familles ne connaissent pas toujours : évaluation, admissibilité, niveaux actuels, environnement le moins restrictif, garanties procédurales. L'IA est douée pour rédiger des explications générales et simples de ces termes et de ce qui se passe à chaque étape.",
            "Consigne : « Explique à un parent, en langage simple et pour un niveau de lecture d'environ 11 ans, ce qui se passe lors de la réunion annuelle du plan IEP : qui y assiste, de quoi on parle, ce qu'il peut demander et comment se préparer. Ton chaleureux et respectueux. Moins de 400 mots. » Vérifiez-la ensuite avec les procédures et les documents officiels de votre district, car l'IA peut décrire la démarche d'un autre État ou se tromper sur des détails.",
            "Restez général. N'utilisez pas l'IA pour écrire quoi que ce soit sur un enfant précis. Proposez des traductions vérifiées par des locuteurs qualifiés, et rappelez-vous que l'avis officiel de votre district sur les garanties procédurales est le document juridique ; votre explication aide les familles à le comprendre, elle ne le remplace pas."
          ],
          steps: ["Choisissez une étape ou un terme général sur lequel les familles posent des questions.", "Demandez une explication en langage simple, avec le ton et la longueur.", "Vérifiez-la avec les procédures et les documents officiels du district.", "Restez général : aucun enfant précis.", "Proposez des traductions vérifiées ; renvoyez à l'avis officiel."],
          words: [["Garanties procédurales", "les droits des parents en éducation spécialisée, expliqués dans un avis officiel."], ["Environnement le moins restrictif", "le principe de la loi IDEA selon lequel les élèves en situation de handicap apprennent avec leurs camarades sans handicap autant que c'est approprié."]],
          slides: [
            { title: "Le jargon que rencontrent les familles", bullets: ["Évaluation, admissibilité, niveaux actuels", "Environnement le moins restrictif", "Garanties procédurales"] },
            { title: "Une explication générale", bullets: ["Langage simple, ton chaleureux, court", "Qui assiste, ce qui se passe, comment se préparer", "Vérifiez avec les procédures du district"] },
            { title: "Restez général", bullets: ["Rien sur un enfant précis", "Traductions vérifiées", "L'avis officiel reste le document juridique"] }
          ],
          tryIt: "Rédigez pour les familles une explication d'une page, en langage simple, d'une étape générale de l'éducation spécialisée, vérifiez-la avec les documents de votre district, et faites-la relire par un collègue pour le ton.",
          youCanNow: "aider les familles à comprendre les démarches de l'éducation spécialisée avec des explications claires et vérifiées.",
          quickCheck: [
            { objective: "O4", q: "Sur quoi doit porter une explication pour les familles créée avec l'IA ?", options: ["L'évaluation d'un enfant précis", "Une étape générale, pas un enfant précis", "L'opinion d'un enseignant sur une famille", "Le budget du district"], answer: 1, why: "Les explications pour les familles restent générales pour qu'aucune information d'élève n'aille dans l'IA." },
            { objective: "O4", q: "L'explication de l'IA sur la réunion annuelle du plan IEP diffère des documents de votre district. Que feriez-vous ?", options: ["Partager la version de l'IA, elle est plus claire", "Partager les deux et laisser les familles choisir", "Demander à l'IA laquelle est juste", "La corriger pour qu'elle suive les procédures du district avant de la partager"], answer: 3, why: "Les procédures du district et les avis officiels font foi, pas l'IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Protéger les informations des plans IEP et 504",
          minutes: 5,
          goal: "Appliquer les règles de vie privée aux informations d'éducation spécialisée et aux outils d'IA.",
          text: [
            "Les plans IEP et 504, les évaluations, les informations sur le handicap et les notes associées font partie des dossiers scolaires de l'élève, protégés par FERPA (la loi fédérale américaine sur les dossiers scolaires), et comptent parmi les informations les plus sensibles que détient une école. Communiquer à une entreprise extérieure des informations qui permettent d'identifier un élève demande en général un consentement, sauf exception.",
            "Règles pour le personnel : ne collez jamais le contenu d'un plan IEP ou 504, des résultats d'évaluation, des diagnostics, des plans de comportement ou des noms dans des outils d'IA non approuvés. Si votre district a approuvé un outil d'IA pour le travail d'éducation spécialisée, utilisez-le seulement dans les limites de l'accord, et utilisez quand même le minimum d'informations nécessaire.",
            "Soyez prudent avec les outils d'IA de prise de notes et l'enregistrement des réunions sur les élèves : les réunions IEP ne doivent pas être enregistrées ni transcrites par des outils non approuvés. Votre directeur de l'éducation spécialisée et votre responsable de la protection des données peuvent vous dire ce que votre district et votre État autorisent. Ailleurs, suivez les lois de votre pays sur les données de santé et de handicap."
          ],
          steps: ["Traitez les informations IEP, 504, d'évaluation et de handicap comme très sensibles.", "Ne les mettez jamais dans des outils d'IA non approuvés.", "Utilisez les outils approuvés seulement dans les limites de l'accord.", "Utilisez le minimum d'informations nécessaire.", "Pas d'enregistrement ni de notes d'IA non approuvés dans les réunions sur les élèves."],
          words: [["Dossier scolaire", "un document directement lié à un élève et conservé par l'école."], ["Information sensible", "une information qui pourrait causer un tort grave si elle était partagée, comme des détails sur le handicap ou la santé."]],
          slides: [
            { title: "Parmi les dossiers les plus sensibles", bullets: ["Plans IEP et 504, évaluations", "Diagnostics, plans de comportement", "Protégés par FERPA"] },
            { title: "Règles pour le personnel", bullets: ["Jamais dans des outils d'IA non approuvés", "Outils approuvés seulement dans les limites de l'accord", "Minimum d'informations nécessaire"] },
            { title: "Réunions sur les élèves", bullets: ["Pas d'enregistrement ni de notes d'IA non approuvés", "Demandez à votre directeur et au responsable des données"] }
          ],
          sources: [{ name: "FERPA : protéger la vie privée des élèves", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Écrivez trois exemples réalistes d'informations d'éducation spécialisée que le personnel pourrait être tenté de coller dans l'IA, et pour chacun, une façon sûre d'obtenir la même aide sans elles.",
          youCanNow: "protéger les informations IEP, 504 et de handicap quand des outils d'IA sont utilisés.",
          quickCheck: [
            { objective: "O5", q: "Quelle loi protège les plans IEP et les dossiers d'évaluation en tant que dossiers scolaires ?", options: ["FERPA", "Seulement COPPA", "Aucune loi", "Le droit d'auteur"], answer: 0, why: "Les plans IEP et les évaluations sont des dossiers scolaires protégés par FERPA." },
            { objective: "O5", q: "Un enseignant veut que l'IA réécrive plus clairement un plan de comportement. Quelle est une façon sûre de faire ?", options: ["Coller le plan dans un chatbot gratuit", "Retirer le nom mais garder le diagnostic", "Demander de l'aide à partir d'un exemple général inventé, ou utiliser un outil approuvé comme l'accord le permet", "L'envoyer par e-mail à un ami qui utilise l'IA"], answer: 2, why: "Les plans de comportement et les diagnostics ne vont jamais dans des outils non approuvés." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Règles d'équipe pour l'IA en éducation spécialisée",
          minutes: 6,
          goal: "Rédiger cinq règles d'équipe claires et les montrer en exemple aux collègues.",
          text: [
            "Votre équipe a besoin de règles communes, écrites. Cinq couvrent la plupart des situations : 1) L'IA ne rédige ni ne décide jamais le contenu des plans IEP ou 504, l'admissibilité ou l'orientation. 2) Aucune information sur les élèves dans des outils non approuvés. 3) Chaque support fait avec l'IA est vérifié pour l'exactitude et l'accessibilité avant d'être montré aux élèves. 4) Les aides de l'IA ne remplacent jamais les aménagements obligatoires. 5) Les explications pour les familles sont générales, vérifiées avec les documents officiels et traduites par des locuteurs qualifiés.",
            "Présentez-les en réunion d'équipe, avec des exemples de ce qui est permis et de ce qui ne l'est pas. Invitez les questions des accompagnants (aides-éducateurs) et des professionnels des services connexes, souvent oubliés dans les consignes sur l'IA.",
            "Rassemblez les bonnes consignes et les bons supports dans un dossier partagé pour que le temps gagné profite à toute l'équipe, et révisez les règles chaque année avec votre directeur de l'éducation spécialisée."
          ],
          steps: ["Rédigez les cinq règles en mots simples.", "Ajoutez un exemple pour chacune.", "Présentez-les en réunion d'équipe, accompagnants compris.", "Créez un dossier partagé de bonnes consignes et de bons supports.", "Révisez chaque année avec le directeur de l'éducation spécialisée."],
          words: [["Accompagnant (aide-éducateur)", "un membre du personnel qui soutient les élèves et les enseignants, souvent en éducation spécialisée."], ["Services connexes", "des aides comme l'orthophonie, l'ergothérapie ou la kinésithérapie qui permettent à un élève de profiter de l'éducation spécialisée."]],
          slides: [
            { title: "Cinq règles d'équipe", bullets: ["1 Pas d'IA pour les décisions IEP ou 504", "2 Aucune donnée d'élève dans des outils non approuvés", "3 Vérifier exactitude et accessibilité", "4 Les aménagements s'appliquent ; 5 Textes pour familles vérifiés"] },
            { title: "Présentez-les bien", bullets: ["Exemples de ce qui est permis ou non", "Incluez accompagnants et thérapeutes"] },
            { title: "Partagez les gains", bullets: ["Dossier partagé de consignes et de supports", "Révision annuelle"] }
          ],
          tryIt: "Tâche finale : construisez votre dossier d'accessibilité (texte en langage simple, liste d'étapes à cocher, emploi du temps visuel, deux niveaux d'exercices), rédigez votre explication d'une page pour les familles, vérifiez tout, et écrivez les cinq règles d'IA de votre équipe avec un exemple pour chacune.",
          youCanNow: "utiliser l'IA pour rendre les supports d'éducation spécialisée plus accessibles tout en protégeant les élèves et en laissant les décisions à l'équipe.",
          quickCheck: [
            { objective: "O6", q: "Qui a le dernier mot sur les règles d'éducation spécialisée de votre district ?", options: ["Le fournisseur d'IA", "Le directeur de l'éducation spécialisée et le conseiller juridique", "Chaque enseignant", "L'association de parents"], answer: 1, why: "Les responsables du district et le conseiller juridique décident comment les règles s'appliquent localement." },
            { objective: "O6", q: "Vous avez rédigé cinq règles sur l'IA. Comment aider toute l'équipe à les utiliser ?", options: ["Les partager avec les enseignants, les aides-éducateurs et les professionnels des services connexes, avec des exemples", "Les envoyer seulement aux chefs d'établissement", "Les garder dans vos propres dossiers", "Les afficher une fois et ne jamais les revoir"], answer: 0, why: "Toutes les personnes qui travaillent avec les élèves ont besoin des règles et des exemples." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Familles, vie privée et règles d'équipe",
        questions: [
          { objective: "O4", q: "L'IA a rédigé une explication de la démarche IEP pour les familles. Avant de la partager, vous devez :", options: ["L'envoyer telle quelle", "Ajouter le nom d'un élève", "La vérifier avec les procédures et les documents officiels de votre district", "Retirer tous les titres"], answer: 2, why: "L'IA peut décrire la démarche d'un autre État ou se tromper sur des détails." },
          { objective: "O4", q: "Quel document reste l'énoncé juridique des droits des parents ?", options: ["L'avis officiel du district sur les garanties procédurales", "Votre explication rédigée avec l'IA", "Une lettre d'information", "Un SMS"], answer: 0, why: "L'explication aide les familles à comprendre l'avis officiel." },
          { objective: "O5", q: "Un enseignant veut que l'IA résume le rapport d'évaluation d'un élève dans un outil gratuit. Meilleure réponse ?", options: ["Allez-y", "Non : les résultats d'évaluation sont des dossiers scolaires sensibles ; pas d'outils non approuvés", "Seulement la première page", "Seulement s'il a l'air anonyme"], answer: 1, why: "Les évaluations sont protégées et très sensibles." },
          { objective: "O5", q: "Un outil d'IA de prise de notes non approuvé doit-il enregistrer une réunion IEP ?", options: ["Non", "Oui, cela fait gagner du temps", "Seulement la moitié de la réunion", "Seulement si le fournisseur est d'accord"], answer: 0, why: "Les réunions sur les élèves ne doivent pas être enregistrées par des outils non approuvés." },
          { objective: "O6", q: "Qui inclure quand on présente les règles d'IA de l'équipe ?", options: ["Seulement les enseignants", "Seulement les fournisseurs", "Seulement le chef d'établissement", "Enseignants, accompagnants et professionnels des services connexes"], answer: 3, why: "Toutes les personnes qui accompagnent les élèves ont besoin des règles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour l'éducation spécialisée",
    questions: [
      { objective: "O1", q: "La loi IDEA garantit aux enfants en situation de handicap admissibles :", options: ["Un ordinateur portable gratuit", "Une éducation publique gratuite et appropriée", "Les frais d'une école privée", "Du tutorat par l'IA"], answer: 1, why: "La FAPE est la garantie centrale de la loi IDEA." },
      { objective: "O1", q: "La partie B de la loi IDEA couvre les enfants admissibles âgés de :", options: ["13 à 18 ans seulement", "0 à 2 ans seulement", "3 à 21 ans", "Adultes seulement"], answer: 2, why: "La partie B couvre les 3 à 21 ans ; la partie C, les nourrissons et les tout-petits." },
      { objective: "O1", q: "Qui élabore le plan IEP ?", options: ["Le chef d'établissement seul", "Un outil d'IA", "Une équipe qui comprend les parents et le personnel de l'école", "Un fournisseur"], answer: 2, why: "Le plan IEP est une décision d'équipe." },
      { objective: "O1", q: "Un plan 504 prévoit :", options: ["Des aménagements pour un élève en situation de handicap selon une autre loi fédérale", "Une note", "Une sortie scolaire", "Une licence d'outil"], answer: 0, why: "Le plan 504 est une voie distincte de la loi IDEA." },
      { objective: "O2", q: "Laquelle est une bonne tâche pour l'IA ?", options: ["Choisir l'orientation", "Rédiger les objectifs IEP", "Décider de l'admissibilité", "Une version en langage simple d'un texte général"], answer: 3, why: "Adapter des supports généraux est un usage sûr." },
      { objective: "O2", q: "Le langage simple signifie :", options: ["Moins d'idées", "Des phrases courtes et des mots courants, avec les mêmes idées", "Pas de vocabulaire", "Des attentes plus basses"], answer: 1, why: "Lecture allégée, même objectif d'apprentissage." },
      { objective: "O2", q: "Découper une tâche signifie :", options: ["La noter", "L'allonger", "La supprimer", "La diviser en petites étapes numérotées"], answer: 3, why: "De petites étapes rendent les tâches gérables." },
      { objective: "O2", q: "Après que l'IA a simplifié un texte, vérifiez que :", options: ["Il a plus d'images", "Il est plus long", "Aucun fait clé n'a été supprimé ou modifié", "Il a l'air soutenu"], answer: 2, why: "Simplifier peut introduire des erreurs." },
      { objective: "O3", q: "Un emploi du temps visuel montre :", options: ["Ce qui va se passer, dans l'ordre, avec des images et des mots", "Les trajets des bus", "Les bulletins scolaires", "Les salaires du personnel"], answer: 0, why: "Il aide les élèves à savoir ce qui vient ensuite." },
      { objective: "O3", q: "La synthèse vocale :", options: ["Écrit des dissertations", "Lit un texte à voix haute", "Note les travaux", "Traduit la parole"], answer: 1, why: "Elle aide les élèves qui profitent d'entendre le texte." },
      { objective: "O3", q: "Des exercices avec plus de soutien peuvent comprendre :", options: ["Un exemple résolu et une banque de mots", "Moins d'idées", "Un test plus difficile", "Aucune consigne"], answer: 0, why: "L'étayage aide les élèves à atteindre la même compétence." },
      { objective: "O3", q: "Les aménagements IEP obligatoires :", options: ["S'appliquent seulement aux tests", "Peuvent être remplacés par des supports d'IA", "Sont facultatifs", "Doivent être fournis tels qu'ils sont écrits"], answer: 3, why: "Ils sont exigés par la loi." },
      { objective: "O4", q: "Les explications pour les familles doivent être :", options: ["Au sujet d'un élève nommé", "Générales, pas au sujet d'un enfant précis", "Écrites seulement en anglais", "Envoyées sans vérification"], answer: 1, why: "Gardez les informations des élèves hors de l'IA." },
      { objective: "O4", q: "Les traductions pour les familles doivent être :", options: ["Abandonnées", "Des résultats d'IA non vérifiés", "Vérifiées par des locuteurs qualifiés", "Faites par les élèves"], answer: 2, why: "Les familles ont besoin d'une information exacte." },
      { objective: "O5", q: "Les plans IEP et les évaluations sont protégés par :", options: ["Aucune loi", "Seulement le droit d'auteur", "FERPA", "Le code de la route"], answer: 2, why: "Ce sont des dossiers scolaires." },
      { objective: "O5", q: "Mettre des diagnostics et des plans de comportement dans un outil d'IA non approuvé est :", options: ["Jamais permis", "Acceptable si c'est court", "Acceptable le week-end", "Obligatoire"], answer: 0, why: "Ce sont des informations très sensibles." },
      { objective: "O5", q: "Avec un outil d'IA approuvé pour l'éducation spécialisée, le personnel doit :", options: ["Ne plus vérifier", "Tout téléverser", "Partager ses identifiants", "L'utiliser seulement dans les limites de l'accord, avec le minimum d'informations"], answer: 3, why: "L'accord et la minimisation s'appliquent toujours." },
      { objective: "O1", q: "L'environnement le moins restrictif signifie que les élèves en situation de handicap apprennent :", options: ["Toujours seuls", "Avec leurs camarades sans handicap autant que c'est approprié", "Seulement en ligne", "Seulement à la maison"], answer: 1, why: "C'est un principe central de la loi IDEA." },
      { objective: "O6", q: "Qui a le dernier mot sur les règles d'éducation spécialisée de votre district ?", options: ["Un élève", "Un agent conversationnel", "Un fournisseur", "Le directeur de l'éducation spécialisée et le conseiller juridique"], answer: 3, why: "Ce sont des personnes qualifiées qui décident." },
      { objective: "O6", q: "Un dossier partagé de bonnes consignes et de bons supports permet :", options: ["De partager des données d'élèves", "De cacher les supports", "Que le temps gagné profite à toute l'équipe", "De remplacer l'équipe IEP"], answer: 2, why: "Le partage multiplie le bénéfice." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      7,
      8,
      11,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Texte en langage simple et étapes",
        objective: "O2",
        notYet: "Un fait a été oublié ou modifié, ou la tâche n'est pas découpée.",
        meets: "Une version en langage simple et une liste à cocher numérotée découpée en étapes, vérifiées par rapport à l'original.",
        exceeds: "Note les erreurs faites par l'IA et comment elles ont été corrigées."
      },
      {
        name: "Emploi du temps visuel et exercices",
        objective: "O3",
        notYet: "L'emploi du temps ou un niveau d'exercices manque, ou les réponses n'ont pas été vérifiées.",
        meets: "Un emploi du temps visuel et des exercices à deux niveaux, avec chaque réponse vérifiée.",
        exceeds: "Chaque image a un texte alternatif, et des aides comme des exemples résolus ou des banques de mots sont incluses."
      },
      {
        name: "Explication pour les familles",
        objective: "O4",
        notYet: "Elle porte sur un enfant précis, ou n'a pas été vérifiée par rapport aux documents du district.",
        meets: "Une explication d'une page en langage simple sur une étape générale, vérifiée pour l'exactitude.",
        exceeds: "Un collègue l'a relue pour le ton, et elle renvoie les familles à l'avis officiel sur les garanties procédurales."
      },
      {
        name: "Aucune information d'élève",
        objective: "O5",
        notYet: "Une information d'élève apparaît dans le dossier ou les consignes.",
        meets: "Tout le dossier utilise seulement des supports généraux ou inventés.",
        exceeds: "Comprend des façons sûres d'obtenir l'aide de l'IA sans partager de détails sur les élèves."
      },
      {
        name: "Règles d'équipe",
        objective: "O6",
        notYet: "Moins de cinq règles, ou des règles qui laissent l'IA décider du contenu d'un plan IEP ou 504.",
        meets: "Cinq règles claires pour l'usage de l'IA en éducation spécialisée.",
        exceeds: "Chaque règle a un exemple et laisse chaque décision IEP et 504 à l'équipe."
      }
    ]
  },
  evaluation: {
    results: [
      "Éducateurs qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Enseignants qui disent avoir utilisé dans une leçon des supports accessibles créés avec l'IA dans les 30 jours (enquête de suivi)",
      "Équipes d'éducation spécialisée qui adoptent des règles écrites sur l'IA dans les 60 jours (enquête de suivi)",
      "Cas signalés d'informations d'élèves saisies dans des outils non approuvés (objectif : aucun)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet et un assistant IA approuvé par le district",
      "Un texte et un devoir généraux tirés d'une prochaine leçon (aucune information d'élève)",
      "Les documents officiels de votre district pour les familles et l'avis sur les garanties procédurales",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis classez en groupe les tâches « L'IA peut aider » et « Équipe seulement ».",
      "Utilisez seulement des supports inventés ou généraux ; ne collez jamais de plans IEP, de plans 504, d'évaluations ou de plans de comportement dans des outils non approuvés.",
      "Rappelez que le cours ne constitue pas un avis juridique ; invitez le directeur de l'éducation spécialisée à relire les règles d'équipe.",
      "Faites relire les explications pour les familles entre collègues pour le ton et l'exactitude.",
      "Notez l'exercice final avec la grille, et vérifiez qu'aucune information d'élève n'apparaît nulle part dans le dossier."
    ]
  }
};
