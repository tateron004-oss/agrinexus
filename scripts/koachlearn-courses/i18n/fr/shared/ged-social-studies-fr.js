"use strict";

// Koach Learn course (French translation of shared/ged-social-studies.js). See scripts/koachlearn-courses/README.md, "Translations".

const GED_SUBJECTS = { name: "GED Testing Service : matières de l'examen (durée, types de questions, calculatrice)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service : épreuve de sciences sociales", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service : notes", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service : tests d'essai gratuits (en anglais et en espagnol)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, le test d'entraînement officiel", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, un autre examen d'équivalence du diplôme de fin d'études secondaires (site officiel)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov : les trois pouvoirs du gouvernement des États-Unis", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives : la Constitution des États-Unis (texte en anglais)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives : la Déclaration des droits (texte en anglais)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies-fr",
  lang: "fr",
  translationOf: "ged-social-studies",
  category: "Workforce Development",
  name: "Préparation à l'examen GED : sciences sociales",
  skills: "Lire des sources primaires et secondaires, Distinguer un fait d'une opinion, Expliquer le fonctionnement du gouvernement américain, Trouver les causes et les conséquences, Lire des cartes, des tableaux et des graphiques, Faire un plan de révision",
  outcome: "lire un texte de sciences sociales, un document historique, une carte ou un graphique et répondre à des questions de type GED à son sujet : l'idée principale, le point de vue, fait ou opinion, cause et conséquence, le fonctionnement du gouvernement américain et ce que montrent les données.",
  about: [
    "Ce cours s'adresse aux adultes qui préparent l'épreuve de sciences sociales du GED (examen américain d'équivalence du diplôme de fin d'études secondaires) : personnes en recherche d'emploi, personnes qui sortent de prison, anciens militaires, jeunes adultes, immigrés et toute personne qui reprend ses études. Selon ged.com, ce n'est pas un examen de mémoire. Il évalue votre façon de lire, de raisonner et d'utiliser des graphiques sur le gouvernement, l'histoire et l'argent.",
    "Le cours vous prépare à l'examen. Il ne vous donne pas le diplôme GED. Le GED Testing Service (l'organisme qui conçoit l'examen GED) organise l'examen, et votre État fixe les règles pour le passer. Certains États utilisent un autre examen appelé HiSET. Consultez ged.com et le bureau d'éducation des adultes de votre État pour connaître les règles, les frais et les dates d'examen actuels.",
    "Chaque leçon enseigne une compétence avec des exemples corrigés, un exercice « Essayez maintenant » avec les réponses expliquées et une vérification rapide de deux questions. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "La tâche finale est une fiche d'analyse de source que vous remplissez sur un vrai document fondateur des National Archives (les Archives nationales des États-Unis), avec votre propre plan de révision du GED daté."
  ],
  finalTask: "Remplissez une fiche d'analyse de source d'une page sur le Préambule de la Constitution des États-Unis (ou un autre document fondateur sur archives.gov) : qui l'a écrit et quand, source primaire ou secondaire, l'idée principale en une phrase, le point de vue, un fait et une opinion ou un objectif, une cause et une conséquence liées au document, et à quel pouvoir du gouvernement il se rattache et pourquoi. Ajoutez votre plan de révision du GED daté en bas de la fiche.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes qui préparent l'épreuve de sciences sociales du GED : personnes en recherche d'emploi, personnes qui sortent de prison, anciens militaires, jeunes adultes qui ont quitté l'école, immigrés (certains préparent aussi la naturalisation) et adultes qui reprennent leurs études après de nombreuses années.",
    startingPoint: "Ils savent lire des textes de tous les jours et des tableaux simples. Beaucoup se souviennent peu de l'histoire ou de l'éducation civique des États-Unis vues à l'école et pensent que l'examen consiste à apprendre des dates par cœur. Certains apprennent encore l'anglais.",
    gap: "L'examen demande de lire des sources, de repérer le point de vue et les preuves, d'expliquer le fonctionnement du gouvernement et de lire des graphiques et des cartes. Ces compétences aident aussi à suivre l'actualité, à voter quand on en a le droit, à comprendre ses droits et à prendre des décisions d'argent.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les documents anciens sont expliqués ligne par ligne",
      "Appareils : un téléphone, un ordinateur de bibliothèque, ou du papier et un stylo",
      "Temps : leçons de 4 à 6 minutes, à caser entre le travail, les rendez-vous et la famille",
      "Les sujets politiques sont enseignés de façon neutre : comment les choses fonctionnent et comment juger les preuves, pas quel camp choisir",
      "Les règles de l'examen, les frais et l'examen utilisé par chaque État (GED ou HiSET) changent ; chaque apprenant vérifie sur ged.com et auprès de son État"
    ],
    prerequisites: "Aucun. Le cours GED de langue et lecture aide à lire pour trouver l'idée principale et à juger les preuves."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "En utilisant le site officiel du GED", action: "citer les parties, les types de questions, la durée et les outils de l'épreuve de sciences sociales du GED et écrire un plan de révision daté", standard: "en nommant les trois domaines de compétences et au moins une date de révision chaque semaine jusqu'à l'examen" },
    { id: "O2", condition: "Face à une source primaire ou secondaire", action: "identifier l'idée principale, le point de vue de l'auteur et quelles affirmations sont des faits et lesquelles sont des opinions", standard: "en montrant les mots qui justifient chaque réponse" },
    { id: "O3", condition: "Face à une courte situation d'éducation civique", action: "expliquer quel pouvoir du gouvernement agit et comment s'appliquent les contre-pouvoirs ou un droit constitutionnel", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O4", condition: "Face à un événement historique ou à un argument", action: "identifier une cause, une conséquence et la preuve qui appuie une déduction", standard: "en citant la preuve tirée de la source" },
    { id: "O5", condition: "Face à une carte, un tableau ou un graphique sur l'histoire, l'économie ou la géographie", action: "lire des valeurs, décrire une tendance et choisir la conclusion appuyée par les données", standard: "sans ajouter de faits qui ne sont pas montrés" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Lire des sources et comprendre le gouvernement",
      lessons: [
        {
          title: "Comment fonctionne l'épreuve de sciences sociales du GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Citer les parties et les outils de l'épreuve de sciences sociales du GED et écrire un plan de révision daté.",
          text: [
            "Le GED comprend quatre épreuves : mathématiques, raisonnement en langue et lecture (Reasoning Through Language Arts), sciences et sciences sociales. Vous pouvez les passer une par une. Le GED Testing Service conçoit l'examen. Certains États utilisent un autre examen d'équivalence, le HiSET : vérifiez donc quel examen votre État utilise.",
            "Sur ged.com, l'épreuve de sciences sociales dure 70 minutes, sans pause. Elle couvre trois domaines de compétences : lire pour comprendre en sciences sociales, analyser des événements historiques et des arguments, et utiliser des chiffres et des graphiques en sciences sociales. Les questions sont à choix multiple, à compléter, à glisser-déposer, à sélection d'une zone et à menu déroulant.",
            "Vous avez une calculatrice à l'écran et une fiche de référence pour la calculatrice, et ged.com indique que vous pouvez apporter votre propre calculatrice TI-30XS dans un centre d'examen. Selon ged.com, ce n'est pas un examen de mémoire : vous utilisez les informations données pour tirer des conclusions.",
            "Ged.com indique une note de passage de 145 pour chaque matière. Les durées et les règles peuvent changer : vérifiez donc sur ged.com avant de vous inscrire. Ged.com propose des tests d'essai gratuits et un test d'entraînement officiel, GED Ready."
          ],
          steps: ["Allez sur ged.com et lisez la page de l'épreuve de sciences sociales.", "Notez la durée, les trois domaines de compétences et les outils fournis.", "Passez le test d'essai gratuit de sciences sociales pour voir où vous en êtes.", "Choisissez une semaine cible pour l'examen.", "Notez au moins une date de révision chaque semaine, avec la compétence que vous allez travailler."],
          words: [["GED", "un examen d'équivalence du diplôme de fin d'études secondaires ; réussir les quatre matières donne un diplôme que beaucoup d'employeurs et d'universités acceptent comme le diplôme habituel."], ["HiSET", "un autre examen d'équivalence du diplôme de fin d'études secondaires, utilisé par certains États."], ["Éducation civique", "l'étude du gouvernement et des droits et devoirs des citoyens."], ["Économie", "l'étude de la façon dont les gens produisent, achètent, vendent et utilisent les biens et l'argent."]],
          slides: [
            { title: "L'épreuve de sciences sociales (vérifiez sur ged.com)", bullets: ["70 minutes, sans pause", "Choix multiple et autres types de questions", "Note de passage indiquée : 145"] },
            { title: "Trois domaines de compétences", bullets: ["Lire pour comprendre en sciences sociales", "Analyser des événements historiques et des arguments", "Utiliser des chiffres et des graphiques"] },
            { title: "Pas un examen de mémoire", bullets: ["Utilisez les informations données", "Tirez-en des conclusions", "Calculatrice à l'écran et fiche de référence"] },
            { title: "Faites un plan", bullets: ["Passez d'abord le test d'essai gratuit", "Choisissez une semaine cible pour l'examen", "Révisez un peu, presque tous les jours"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ouvrez ged.com et passez le test d'essai gratuit de sciences sociales (ou lisez la page de sciences sociales si vous ne pouvez pas le passer maintenant). Écrivez votre plan de révision : votre semaine cible pour l'examen et une date chaque semaine avec la compétence que vous allez travailler : lire des sources, le gouvernement, l'histoire ou les graphiques. Gardez-le pour la tâche finale.",
          youCanNow: "citer les parties et les outils de l'épreuve de sciences sociales du GED et suivre un plan de révision daté.",
          quickCheck: [
            { objective: "O1", q: "Que dit ged.com au sujet de l'épreuve de sciences sociales ?", options: ["Qu'il s'agit surtout d'apprendre des dates par cœur", "Que ce n'est pas un examen de mémoire", "Qu'elle n'a pas de graphiques", "Qu'elle porte seulement sur d'autres pays"], answer: 1, why: "Selon ged.com, ce n'est pas un examen de mémoire ; vous raisonnez avec les informations données." },
            { objective: "O1", q: "Lequel est l'un des trois domaines de compétences de l'épreuve ?", options: ["Épeler les capitales des États", "Dessiner des drapeaux", "Utiliser des chiffres et des graphiques en sciences sociales", "La vitesse de frappe au clavier"], answer: 2, why: "Ged.com cite : lire pour comprendre, les événements historiques et les arguments, et les chiffres et graphiques." }
          ]
        },
        {
          title: "Sources, point de vue, fait et opinion",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identifier l'idée principale, le point de vue, les faits et les opinions dans une source.",
          text: [
            "Une source primaire a été créée par quelqu'un qui était présent à l'époque : une lettre, un discours, une loi, une photo, un journal intime. Une source secondaire a été créée plus tard par quelqu'un qui étudie l'événement, comme un manuel ou une analyse de presse. Les deux sont utiles ; les sources primaires montrent comment les gens voyaient les choses à ce moment-là.",
            "Le point de vue, c'est la façon dont l'auteur voit le sujet, selon qui il est et ce qu'il veut. Demandez-vous : qui a écrit ceci, quand et pourquoi ? Un patron d'usine et un ouvrier de cette usine en 1900 pourraient décrire la même grève de façon très différente.",
            "Un fait peut être vérifié et prouvé vrai ou faux : « Le 19e amendement a été ratifié en 1920. » Une opinion est une croyance ou un sentiment : « Ce fut le changement le plus important de notre histoire. » Des mots comme meilleur, pire, devrait, important et je pense signalent souvent une opinion.",
            "Exemple corrigé. Une publicité de journal de 1910 : « Nos nouvelles machines fabriquent 500 chemises par jour. Toute famille moderne devrait acheter nos chemises ! » Fait : 500 chemises par jour (on peut le vérifier). Opinion : toute famille devrait les acheter. Point de vue : une entreprise qui vend son produit."
          ],
          steps: ["Demandez-vous qui a créé la source, quand et pourquoi.", "Décidez : primaire (créée à l'époque) ou secondaire (créée plus tard).", "Dites l'idée principale en une phrase.", "Marquez chaque affirmation comme fait (vérifiable) ou opinion (croyance ou jugement).", "Décrivez le point de vue de l'auteur et ce qu'il veut que le lecteur fasse ou pense."],
          words: [["Source primaire", "quelque chose créé au moment d'un événement par quelqu'un qui était présent."], ["Source secondaire", "quelque chose créé plus tard par quelqu'un qui étudie l'événement."], ["Point de vue", "la façon dont un auteur voit un sujet, selon qui il est et ce qu'il veut."], ["Fait", "une affirmation que l'on peut vérifier et prouver."], ["Opinion", "une croyance, un sentiment ou un jugement."]],
          slides: [
            { title: "Primaire ou secondaire ?", bullets: ["Primaire : créée à l'époque, par quelqu'un de présent", "Secondaire : créée plus tard, par quelqu'un qui l'étudie"] },
            { title: "Point de vue", bullets: ["Qui l'a écrit ?", "Quand ?", "Pourquoi, et que veut l'auteur ?"] },
            { title: "Fait ou opinion ?", bullets: ["Fait : on peut le vérifier", "Opinion : une croyance ou un jugement", "Mots signaux : meilleur, pire, devrait, je pense"] }
          ],
          tryIt: "Exercice : une lettre d'un agriculteur en 1935 : « Les tempêtes de poussière ont enseveli nos champs trois fois ce printemps. Le gouvernement devrait aider les agriculteurs comme nous avant qu'il ne soit trop tard. » 1) Primaire ou secondaire ? 2) Un fait. 3) Une opinion. 4) Quel point de vue ? Réponses : 1) Primaire : écrite à l'époque par quelqu'un de présent. 2) Les tempêtes de poussière ont enseveli les champs trois fois ce printemps-là. 3) Le gouvernement devrait aider les agriculteurs. 4) Un agriculteur en difficulté qui demande de l'aide.",
          youCanNow: "distinguer les sources primaires des sources secondaires, décrire un point de vue et séparer les faits des opinions.",
          quickCheck: [
            { objective: "O2", q: "Laquelle est une source primaire sur la Seconde Guerre mondiale ?", options: ["Un chapitre de manuel de 2020", "Un résumé sur un site web écrit l'an dernier", "Un film réalisé en 2015", "Une lettre qu'un soldat a écrite à sa famille en 1944"], answer: 3, why: "Elle a été créée à l'époque par quelqu'un qui était présent." },
            { objective: "O2", q: "Quelle affirmation est une opinion ?", options: ["Le Congrès a adopté la loi en 1964.", "La ville compte 40 000 habitants.", "C'est la meilleure loi que le Congrès ait jamais adoptée.", "Le pont a ouvert en 1937."], answer: 2, why: "« La meilleure » est un jugement qu'on ne peut pas prouver." }
          ]
        },
        {
          title: "Comment fonctionne le gouvernement des États-Unis",
          objectives: ["O3"],
          minutes: 6,
          goal: "Expliquer quel pouvoir du gouvernement agit dans une situation et comment s'appliquent les contre-pouvoirs.",
          text: [
            "La Constitution des États-Unis divise le gouvernement fédéral en trois pouvoirs, pour qu'aucune personne ni aucun groupe n'ait trop de pouvoir. Le pouvoir législatif, c'est le Congrès (le Sénat et la Chambre des représentants) ; il fait les lois. Le pouvoir exécutif, c'est le président, le vice-président et le cabinet ; il applique les lois. Le pouvoir judiciaire, c'est la Cour suprême et les autres tribunaux fédéraux ; ils interprètent les lois et décident si elles sont contraires à la Constitution.",
            "Les contre-pouvoirs (checks and balances) permettent à chaque pouvoir de limiter les autres. Le président peut opposer son veto à un projet de loi adopté par le Congrès. Le Sénat confirme ou rejette les personnes nommées par le président, comme les juges fédéraux. La Cour suprême peut annuler une loi qu'elle juge inconstitutionnelle. Le Congrès peut, dans les cas extrêmes, destituer un président.",
            "La Déclaration des droits (Bill of Rights) correspond aux dix premiers amendements de la Constitution. Elle protège des droits comme la liberté d'expression, de religion, de la presse et de réunion (premier amendement), et les droits des personnes accusées de crimes, comme un procès équitable et rapide. Le pouvoir est aussi partagé entre le gouvernement fédéral et les États ; c'est ce qu'on appelle le fédéralisme.",
            "Exemple corrigé. « Le Congrès adopte un projet de loi. Le président y oppose son veto. » De quel contre-pouvoir s'agit-il ? L'exécutif qui limite le pouvoir législatif."
          ],
          steps: ["Repérez qui agit : le Congrès, le président ou un tribunal.", "Nommez le pouvoir : législatif, exécutif ou judiciaire.", "Demandez-vous quelle compétence est utilisée : faire, appliquer ou interpréter les lois.", "Si un pouvoir en limite un autre, nommez le contre-pouvoir.", "Si les droits d'une personne sont en jeu, cherchez le droit dans la Déclaration des droits."],
          words: [["Constitution", "la loi la plus haute des États-Unis ; elle met en place le gouvernement."], ["Pouvoir législatif", "le Congrès ; il fait les lois."], ["Pouvoir exécutif", "le président, le vice-président et le cabinet ; il applique les lois."], ["Pouvoir judiciaire", "les tribunaux ; ils interprètent les lois."], ["Veto", "quand le président rejette un projet de loi adopté par le Congrès."], ["Amendement", "un changement ou un ajout à la Constitution."]],
          slides: [
            { title: "Trois pouvoirs", bullets: ["Législatif (Congrès) : fait les lois", "Exécutif (président) : applique les lois", "Judiciaire (tribunaux) : interprète les lois"] },
            { title: "Les contre-pouvoirs", bullets: ["Le président peut opposer son veto aux projets de loi", "Le Sénat confirme ou rejette les nominations", "La Cour suprême peut annuler les lois inconstitutionnelles"] },
            { title: "La Déclaration des droits", bullets: ["Les dix premiers amendements", "Expression, religion, presse, réunion", "Droits des personnes accusées de crimes"] },
            { title: "Le fédéralisme", bullets: ["Le pouvoir est partagé entre la nation et les États"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Exercice : nommez le pouvoir ou le droit. 1) Le Sénat vote sur la personne choisie par le président comme juge fédéral. 2) La Cour suprême décide qu'une loi viole la Constitution. 3) Un journal publie un article qui critique le maire. 4) Le président signe un projet de loi, qui devient une loi. Réponses : 1) Le législatif qui limite l'exécutif. 2) Le judiciaire qui limite le législatif. 3) La liberté de la presse, premier amendement. 4) L'exécutif (il joue son rôle dans l'adoption d'une loi).",
          youCanNow: "nommer les trois pouvoirs, expliquer les contre-pouvoirs dans une situation et relier une situation à la Déclaration des droits.",
          quickCheck: [
            { objective: "O3", q: "Quel pouvoir fait les lois fédérales ?", options: ["Le pouvoir législatif (le Congrès)", "Le pouvoir judiciaire", "Le pouvoir exécutif", "Seulement les États"], answer: 0, why: "Le Congrès, le pouvoir législatif, fait les lois." },
            { objective: "O3", q: "La Cour suprême déclare une loi inconstitutionnelle. De quoi est-ce un exemple ?", options: ["Du fédéralisme", "D'un veto", "D'un contre-pouvoir du judiciaire sur le législatif", "D'un amendement"], answer: 2, why: "Les tribunaux peuvent annuler les lois contraires à la Constitution." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Lire des sources et comprendre le gouvernement",
        questions: [
          { objective: "O1", q: "Où devez-vous vérifier les durées, les frais et les règles actuels de l'examen GED ?", options: ["Dans une publication sur les réseaux sociaux", "Sur ged.com et auprès du bureau d'éducation des adultes de votre État", "Dans un vieux manuel", "Dans les souvenirs d'un ami"], answer: 1, why: "Les règles et les frais changent ; les sources officielles ont les informations à jour." },
          { objective: "O2", q: "Laquelle est une source secondaire ?", options: ["Un discours prononcé en 1963", "Une photo prise pendant une tempête de poussière des années 1930", "Une lettre de 1776", "Un manuel d'histoire écrit en 2015"], answer: 3, why: "Un manuel est créé plus tard par des personnes qui étudient les événements." },
          { objective: "O2", q: "Une publicité de 1912 d'une compagnie dit que ses trains sont « les plus beaux du pays ». Qu'est-ce que c'est ?", options: ["Une opinion, du point de vue d'une entreprise", "Un fait", "Une loi", "Une source secondaire"], answer: 0, why: "« Les plus beaux » est un jugement, et la compagnie veut vendre des billets." },
          { objective: "O3", q: "Le président oppose son veto à un projet de loi. Quel pouvoir est limité ?", options: ["Le pouvoir judiciaire", "Le pouvoir exécutif", "Le pouvoir législatif", "Les États"], answer: 2, why: "Le veto permet à l'exécutif de limiter le Congrès, le pouvoir législatif." },
          { objective: "O3", q: "Qu'est-ce que la Déclaration des droits ?", options: ["Le budget du président", "Les dix premiers amendements de la Constitution", "Une liste de lois des États", "Une décision de la Cour suprême"], answer: 1, why: "La Déclaration des droits correspond aux dix premiers amendements." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Histoire, économie et graphiques",
      lessons: [
        {
          title: "Cause, conséquence et preuves en histoire",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identifier une cause et une conséquence dans un événement historique et la preuve qui appuie une déduction.",
          text: [
            "Les questions d'histoire demandent souvent pourquoi quelque chose est arrivé (la cause) et ce qui s'est passé à cause de cela (la conséquence). Mots signaux : parce que, donc, par conséquent, a conduit à, c'est pourquoi, en raison de.",
            "Exemple corrigé. « À la fin du XIXe siècle, les usines des villes offraient beaucoup de nouveaux emplois. Par conséquent, des millions de personnes ont quitté les fermes pour les villes. La population des villes a augmenté vite, et le surpeuplement des logements est devenu un problème. » Cause : les emplois dans les usines des villes. Conséquence : les gens sont partis vivre en ville. Une conséquence plus tardive : des logements surpeuplés. Une cause peut entraîner une chaîne de conséquences.",
            "Une déduction est une conclusion appuyée par des preuves. Les questions du GED peuvent demander quelle affirmation d'une source appuie une déduction. Choisissez l'affirmation qui apporte une preuve, pas seulement une qui parle du même sujet.",
            "Attention : deux choses qui arrivent en même temps ne veulent pas toujours dire que l'une a causé l'autre. Vérifiez que la source dit ou montre le lien."
          ],
          steps: ["Repérez l'événement sur lequel porte la question.", "Cherchez les mots signaux : parce que, donc, par conséquent, a conduit à.", "Nommez la cause (pourquoi) et la conséquence (ce qui a suivi).", "Pour une déduction, choisissez l'affirmation qui la prouve.", "Vérifiez que la source relie vraiment les deux ; ne le supposez pas."],
          words: [["Cause", "la raison pour laquelle quelque chose est arrivé."], ["Conséquence", "ce qui est arrivé à cause de la cause."], ["Déduction", "une conclusion appuyée par des preuves."], ["Industrialisation", "le développement des usines et des machines qui fabriquent des biens."]],
          slides: [
            { title: "Cause et conséquence", bullets: ["Cause : pourquoi c'est arrivé", "Conséquence : ce qui a suivi", "Mots signaux : parce que, par conséquent, a conduit à"] },
            { title: "Une chaîne de conséquences", bullets: ["Des emplois dans les usines des villes", "Les gens quittent les fermes pour les villes", "Des logements surpeuplés en ville"] },
            { title: "La preuve d'une déduction", bullets: ["Choisissez l'affirmation qui la prouve", "Même sujet ne veut pas dire preuve", "En même temps ne veut pas dire causé par"] }
          ],
          tryIt: "Exercice : « Le Dust Bowl (les grandes tempêtes de poussière) des années 1930 a détruit les récoltes dans les Grandes Plaines. Beaucoup de familles d'agriculteurs ont perdu leurs terres et sont parties vers l'ouest pour chercher du travail. » 1) Cause ? 2) Conséquence ? 3) Quelle affirmation appuie le mieux la déduction « le Dust Bowl a changé l'endroit où les gens vivaient » : (a) « Le Dust Bowl a détruit les récoltes » ou (b) « Beaucoup de familles d'agriculteurs sont parties vers l'ouest » ? Réponses : 1) Les tempêtes de poussière ont détruit les récoltes. 2) Les familles ont perdu leurs terres et sont parties vers l'ouest. 3) (b) : elle montre que des gens ont déménagé.",
          youCanNow: "trouver les causes et les conséquences en histoire et choisir la preuve qui appuie une déduction.",
          quickCheck: [
            { objective: "O4", q: "« Le prix de l'essence a beaucoup augmenté, donc plus de gens ont pris le bus. » Quelle est la conséquence ?", options: ["Le prix de l'essence a augmenté", "Plus de gens ont pris le bus", "Les bus sont devenus moins chers", "Les voitures sont devenues plus grandes"], answer: 1, why: "Prendre le bus est ce qui s'est passé parce que le prix de l'essence a augmenté." },
            { objective: "O4", q: "Quelle affirmation appuie le mieux la déduction qu'une nouvelle autoroute a aidé les commerces d'une ville ?", options: ["« L'autoroute a quatre voies. »", "« L'autoroute a ouvert en 1960. »", "« Les autoroutes sont faites en béton. »", "« Les ventes des magasins de la ville ont doublé dans les cinq ans qui ont suivi l'ouverture de l'autoroute. »"], answer: 3, why: "Elle apporte la preuve d'une croissance des commerces liée à l'autoroute." }
          ]
        },
        {
          title: "Économie et graphiques",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lire un tableau ou une carte, décrire la tendance et choisir la conclusion appuyée par les données.",
          text: [
            "L'offre, c'est la quantité d'une chose mise en vente. La demande, c'est la quantité que les gens veulent acheter. Quand la demande augmente et que l'offre reste la même, les prix montent en général. Quand l'offre augmente et que la demande reste la même, les prix baissent en général. Exemple : après qu'un gel a abîmé les récoltes d'oranges, l'offre d'oranges baisse et les prix montent.",
            "Graphiques : lisez d'abord le titre, les légendes des axes et les unités. Tableau d'exercice (inventé) : le taux de chômage d'une ville était de 8 % en 2020, 6 % en 2021, 5 % en 2022 et 4 % en 2023. Tendance : en baisse chaque année. Conclusion appuyée : en 2023, une plus petite part des personnes qui cherchaient du travail était sans emploi qu'en 2020. Non appuyée : pourquoi il a baissé, car le tableau ne le dit pas.",
            "Cartes : lisez le titre, la légende et la rose des vents. La légende vous dit ce que signifient les couleurs ou les symboles. Une carte des pluies peut utiliser des couleurs plus foncées pour plus de pluie. Utilisez l'échelle pour estimer les distances.",
            "La variation en pourcentage est fréquente : passer de 8 % à 4 %, c'est une baisse de 4 points de pourcentage. Vous pouvez utiliser la calculatrice à l'écran pour les calculs."
          ],
          steps: ["Lisez le titre, les légendes des axes, les unités ou la légende de la carte.", "Trouvez la valeur demandée par la question.", "Décrivez la tendance : en hausse, en baisse ou sans tendance claire.", "Choisissez la conclusion qui reste dans les limites des données.", "Pour les prix, demandez-vous : l'offre ou la demande a-t-elle changé ?"],
          words: [["Offre", "la quantité d'un bien ou d'un service mise en vente."], ["Demande", "la quantité que les gens veulent acheter."], ["Taux de chômage", "la part des personnes qui cherchent du travail et qui n'ont pas d'emploi."], ["Légende", "l'encadré d'une carte ou d'un graphique qui explique ce que signifient les couleurs ou les symboles."], ["Point de pourcentage", "la simple différence entre deux pourcentages ; par exemple, de 8 % à 4 %, cela fait 4 points."]],
          slides: [
            { title: "L'offre et la demande", bullets: ["Demande en hausse, offre stable : les prix montent en général", "Offre en hausse, demande stable : les prix baissent en général"] },
            { title: "Lire un graphique", bullets: ["D'abord le titre, les axes et les unités", "Trouvez la valeur", "Décrivez la tendance"] },
            { title: "Lire une carte", bullets: ["Titre et légende", "Rose des vents pour l'orientation", "Échelle pour les distances"] },
            { title: "Restez dans les limites des données", bullets: ["Un graphique montre quoi, pas toujours pourquoi", "Pas de conclusion sur ce qui n'est pas montré"] }
          ],
          tryIt: "Exercice (données inventées) : un diagramme en barres montre le loyer mensuel moyen dans une ville : 2019 : 1 000 $ ; 2021 : 1 150 $ ; 2023 : 1 400 $. 1) Le loyer en 2021 ? 2) La tendance ? 3) De combien le loyer a-t-il augmenté de 2019 à 2023 ? 4) Quelle conclusion est appuyée : (a) le loyer a augmenté sur cette période, ou (b) le loyer a augmenté à cause de nouveaux emplois ? Réponses : 1) 1 150 $. 2) En hausse. 3) 400 $. 4) (a) ; le graphique ne montre pas pourquoi.",
          youCanNow: "utiliser l'offre et la demande pour expliquer les variations de prix, et lire des graphiques et des cartes pour choisir une conclusion appuyée.",
          quickCheck: [
            { objective: "O5", q: "Une tempête détruit beaucoup de scieries : il y a moins de bois à vendre, mais les constructeurs en veulent toujours. Qu'arrive-t-il en général au prix du bois ?", options: ["Il monte", "Il baisse", "Il ne change pas", "Le bois devient gratuit"], answer: 0, why: "L'offre a baissé alors que la demande est restée la même, donc les prix montent en général." },
            { objective: "O5", q: "Sur une carte, qu'est-ce qui vous dit ce que signifie chaque couleur ?", options: ["La rose des vents", "Le titre", "La légende", "L'échelle"], answer: 2, why: "La légende explique les couleurs et les symboles." }
          ]
        },
        {
          title: "Tout rassembler : analyser un document fondateur",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Remplir une fiche d'analyse de source sur un document fondateur.",
          text: [
            "Les questions du GED donnent souvent un court extrait d'un document ancien et demandent son idée principale, son but ou son lien avec le gouvernement d'aujourd'hui. Le Préambule, la phrase d'ouverture de la Constitution, est un bon texte pour s'entraîner. Lisez-le sur le site des National Archives.",
            "Le Préambule commence par « We the People of the United States » (« Nous, le Peuple des États-Unis ») et énumère des objectifs : former une union plus parfaite, établir la justice, assurer la tranquillité intérieure (la paix dans le pays), pourvoir à la défense commune, développer le bien-être général (le bien-être de tous) et assurer les bienfaits de la liberté.",
            "Analyse corrigée. Qui et quand : les délégués de la Convention constitutionnelle, 1787. Type : source primaire. Idée principale : le peuple met en place un gouvernement pour atteindre des objectifs communs. Point de vue : des dirigeants qui voulaient un gouvernement national plus fort que celui qu'ils avaient avant. Cause et conséquence : le gouvernement précédent, sous les Articles de la Confédération, était faible, ce qui a conduit à rédiger une nouvelle Constitution. Pouvoirs : le Préambule présente toute la Constitution, qui met en place les trois pouvoirs.",
            "Votre fiche n'a pas besoin de réponses parfaites. Elle a besoin de réponses que vous pouvez justifier en montrant les mots du document."
          ],
          steps: ["Ouvrez le texte de la Constitution sur archives.gov et lisez le Préambule.", "Écrivez qui l'a écrit, quand, et s'il s'agit d'une source primaire ou secondaire.", "Écrivez l'idée principale en une phrase et le point de vue.", "Écrivez un fait sur le document et un objectif ou une opinion qu'il contient.", "Écrivez une cause et une conséquence, et le pouvoir ou le droit auquel il se rattache.", "Ajoutez votre plan de révision daté en bas de la fiche."],
          words: [["Préambule", "la phrase d'ouverture de la Constitution, qui dit son but."], ["Articles de la Confédération", "le premier plan de gouvernement des États-Unis, utilisé avant la Constitution."], ["Tranquillité intérieure", "la paix dans le pays."], ["Bien-être général", "le bien-être de tout le peuple."]],
          slides: [
            { title: "Le Préambule", bullets: ["Phrase d'ouverture de la Constitution", "Commence par « We the People » (Nous, le Peuple)", "Énumère les objectifs du nouveau gouvernement"] },
            { title: "Votre fiche d'analyse", bullets: ["Qui, quand, primaire ou secondaire", "Idée principale et point de vue", "Un fait et un objectif ou une opinion"] },
            { title: "Faites le lien", bullets: ["Une cause et une conséquence", "Le pouvoir ou le droit concerné", "Montrez les mots qui le prouvent"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Tâche finale : remplissez votre fiche d'analyse de source d'une page sur le Préambule (ou la Déclaration des droits) d'archives.gov, en suivant les étapes ci-dessus. Ajoutez votre plan de révision du GED daté en bas, puis évaluez votre travail avec la grille d'évaluation du cours.",
          youCanNow: "analyser un document fondateur : son type de source, son idée principale, son point de vue, ses causes et conséquences, et ses liens avec le fonctionnement du gouvernement.",
          quickCheck: [
            { objective: "O2", q: "Le Préambule a été écrit en 1787 par les délégués de la Convention constitutionnelle. De quel type de source s'agit-il ?", options: ["Secondaire", "Un sondage d'opinion", "Une carte", "Primaire"], answer: 3, why: "Il a été créé à l'époque par les personnes qui ont rédigé la Constitution." },
            { objective: "O4", q: "Les Articles de la Confédération ont créé un gouvernement national faible. Quelle a été une conséquence ?", options: ["Les dirigeants ont rédigé une nouvelle Constitution", "La Déclaration des droits a été supprimée", "Le Congrès a été fermé pour toujours", "Les États ont cessé d'exister"], answer: 0, why: "La faiblesse des Articles a conduit à la Constitution de 1787." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Histoire, économie et graphiques",
        questions: [
          { objective: "O4", q: "« Comme l'usine a fermé, beaucoup d'ouvriers sont partis. » Quelle est la cause ?", options: ["Les ouvriers sont partis", "La ville a grandi", "L'usine a fermé", "De nouveaux magasins ont ouvert"], answer: 2, why: "La fermeture de l'usine est la raison du départ des ouvriers." },
          { objective: "O4", q: "Deux choses se sont passées la même année. Que pouvez-vous dire avec certitude ?", options: ["L'une a causé l'autre", "Elles se sont passées en même temps ; vérifiez dans la source s'il y a un lien", "Ce sont deux opinions", "Aucune ne s'est passée"], answer: 1, why: "Arriver en même temps ne prouve pas que l'une a causé l'autre." },
          { objective: "O5", q: "La demande de vélos augmente et l'offre reste la même. Qu'arrive-t-il en général au prix des vélos ?", options: ["Il baisse", "Il ne change pas", "Les vélos deviennent gratuits", "Il monte"], answer: 3, why: "Plus d'acheteurs pour la même offre fait en général monter les prix." },
          { objective: "O5", q: "Un tableau montre la population d'une ville : 2000 : 10 000 ; 2010 : 12 000 ; 2020 : 15 000. Quelle conclusion est appuyée ?", options: ["La population a augmenté pendant ces années", "La ville aura 50 000 habitants en 2030", "Les gens sont venus à cause des bonnes écoles", "La ville a perdu des habitants"], answer: 0, why: "Les chiffres augmentent à chaque décennie ; le tableau ne montre ni l'avenir ni les raisons." },
          { objective: "O3", q: "Le Sénat rejette une personne que le président a choisie comme juge fédéral. De quel contre-pouvoir s'agit-il ?", options: ["Le judiciaire qui limite l'exécutif", "Le législatif qui limite l'exécutif", "Le fédéralisme", "Un veto"], answer: 1, why: "Le Sénat, qui fait partie du Congrès, confirme ou rejette les personnes nommées par le président." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation à l'examen GED : sciences sociales",
    questions: [
      { objective: "O1", q: "Que vous apporte ce cours ?", options: ["Il vous donne un diplôme GED", "Il fait de vous un citoyen américain", "Il vous prépare à l'épreuve de sciences sociales du GED", "Il remplace l'examen GED"], answer: 2, why: "Il vous prépare ; le GED Testing Service organise l'examen et votre État délivre le diplôme." },
      { objective: "O1", q: "Quel est un autre examen d'équivalence du diplôme de fin d'études secondaires utilisé par certains États ?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "Le HiSET est un autre examen d'équivalence du diplôme de fin d'études secondaires." },
      { objective: "O1", q: "Selon ged.com, l'épreuve de sciences sociales est :", options: ["Seulement une question de dates à apprendre par cœur", "Seulement une rédaction", "Pas un examen de mémoire", "Un entretien oral"], answer: 2, why: "Selon ged.com, ce n'est pas un examen de mémoire." },
      { objective: "O2", q: "Qu'est-ce qu'une source primaire ?", options: ["Un manuel écrit l'an dernier", "Quelque chose créé à l'époque par quelqu'un qui était présent", "Un résumé sur un site web", "Les notes d'un enseignant"], answer: 1, why: "Les sources primaires viennent de personnes présentes au moment de l'événement." },
      { objective: "O2", q: "Lequel est un fait ?", options: ["La loi sur les droits civiques (Civil Rights Act) a été signée en 1964.", "C'est la plus grande loi jamais écrite.", "Tout le monde devrait l'aimer.", "Ce fut le jour le plus passionnant de l'histoire."], answer: 0, why: "Une date de signature peut être vérifiée ; les autres sont des jugements." },
      { objective: "O2", q: "Pour trouver le point de vue d'un auteur, demandez-vous :", options: ["Quelle est la longueur de la source", "De quelle couleur est le papier", "Combien de pages elle a", "Qui l'a écrite, quand et pourquoi"], answer: 3, why: "Qui, quand et pourquoi influencent la façon dont un auteur voit un sujet." },
      { objective: "O2", q: "Quel mot signale souvent une opinion ?", options: ["Ratifié", "Devrait", "1920", "Congrès"], answer: 1, why: "« Devrait » exprime ce que quelqu'un pense qu'il faudrait faire." },
      { objective: "O3", q: "Quel pouvoir applique les lois ?", options: ["Le législatif", "Le judiciaire", "L'exécutif", "Aucun"], answer: 2, why: "Le président et le pouvoir exécutif appliquent les lois." },
      { objective: "O3", q: "Le Congrès est composé :", options: ["Du Sénat et de la Chambre des représentants", "Du président et du cabinet", "De la Cour suprême", "Des gouverneurs"], answer: 0, why: "Le Congrès a deux parties : le Sénat et la Chambre." },
      { objective: "O3", q: "Un groupe organise une manifestation pacifique dans un parc. Quel droit la protège ?", options: ["Le droit à un procès rapide", "Le droit de vote à 18 ans", "Le veto du président", "La liberté de réunion (premier amendement)"], answer: 3, why: "Le premier amendement protège les réunions pacifiques." },
      { objective: "O3", q: "Le partage du pouvoir entre le gouvernement national et les États s'appelle :", options: ["Un veto", "Le fédéralisme", "Un préambule", "Une opinion"], answer: 1, why: "Le fédéralisme partage le pouvoir entre la nation et les États." },
      { objective: "O4", q: "Quel mot signal montre une cause et une conséquence ?", options: ["Par conséquent", "Aussi", "Par exemple", "De plus"], answer: 0, why: "« Par conséquent » introduit une conséquence." },
      { objective: "O4", q: "« Les emplois en usine ont augmenté dans les villes, donc les gens ont quitté les fermes. » Quelle est la cause ?", options: ["Les gens ont quitté les fermes", "Les fermes se sont agrandies", "Les emplois en usine ont augmenté dans les villes", "Les villes sont devenues plus petites"], answer: 2, why: "Les emplois en usine sont la raison pour laquelle les gens sont partis." },
      { objective: "O4", q: "Quelle affirmation appuie le mieux la déduction qu'une nouvelle loi a réduit les accidents du travail ?", options: ["« La loi faisait 20 pages. »", "« Les déclarations de blessures ont baissé d'un tiers dans les trois ans qui ont suivi l'entrée en vigueur de la loi. »", "« Beaucoup de gens ont parlé de la loi. »", "« La loi avait un long nom. »"], answer: 1, why: "Elle apporte la preuve de moins de blessures après la loi." },
      { objective: "O5", q: "Un gel abîme une grande partie de la récolte d'oranges. Qu'arrive-t-il en général au prix des oranges ?", options: ["Il baisse", "Il ne change pas", "Les oranges deviennent gratuites", "Il monte"], answer: 3, why: "Moins d'offre avec la même demande fait en général monter les prix." },
      { objective: "O5", q: "Que devez-vous lire en premier sur un graphique ?", options: ["Le titre, les légendes des axes et les unités", "Seulement les choix de réponse", "Le plus petit nombre", "Seulement les couleurs"], answer: 0, why: "Ils vous disent ce que signifient les nombres." },
      { objective: "O5", q: "Le chômage était de 8 % en 2020 et de 4 % en 2023. De combien a-t-il baissé ?", options: ["2 points de pourcentage", "12 points de pourcentage", "4 points de pourcentage", "8 points de pourcentage"], answer: 2, why: "8 % - 4 % = 4 points de pourcentage." },
      { objective: "O5", q: "Un graphique montre que le loyer augmente chaque année. Quelle conclusion va au-delà des données ?", options: ["Le loyer a augmenté pendant ces années", "Le loyer va doubler l'an prochain", "Le loyer était plus élevé à la fin qu'au début", "Le graphique montre plusieurs années"], answer: 1, why: "Le graphique ne montre pas l'année prochaine." },
      { objective: "O2", q: "Le Préambule commence par « We the People » (Nous, le Peuple). Que montre ceci sur le point de vue du gouvernement ?", options: ["Le pouvoir vient du peuple", "Le pouvoir vient d'un roi", "Seuls les États ont du pouvoir", "Les tribunaux l'ont écrit"], answer: 0, why: "« Nous, le Peuple » montre que le gouvernement est créé par le peuple et pour le peuple." },
      { objective: "O4", q: "Pourquoi les dirigeants ont-ils rédigé la Constitution en 1787 ?", options: ["Le pays n'avait pas d'États", "Le roi le leur avait demandé", "La Déclaration des droits avait échoué", "Le gouvernement sous les Articles de la Confédération était trop faible"], answer: 3, why: "La faiblesse des Articles de la Confédération a conduit à un nouveau plan de gouvernement." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, relisez cette partie du document et corrigez votre réponse.",
    criteria: [
      { name: "Source et point de vue", objective: "O2", notYet: "Le type de source ou l'auteur est faux ou manquant.", meets: "Auteur, date et type de source corrects, et un point de vue qui correspond à qui l'a écrit et pourquoi.", exceeds: "Explique aussi comment le point de vue influence ce que dit le document." },
      { name: "Idée principale, fait et opinion", objective: "O2", notYet: "L'idée principale est fausse, ou le fait et l'opinion sont confondus.", meets: "Une idée principale correcte en une phrase, un fait et un objectif ou une opinion, chacun relié aux mots du texte.", exceeds: "Cite les mots exacts qui justifient chaque réponse." },
      { name: "Cause et conséquence", objective: "O4", notYet: "Pas de cause ni de conséquence, ou elles sont inversées.", meets: "Une cause correcte et une conséquence correcte liées au document.", exceeds: "Montre une chaîne : une cause, une conséquence et une conséquence plus tardive." },
      { name: "Lien avec le gouvernement", objective: "O3", notYet: "Aucun pouvoir ni droit n'est nommé, ou ce n'est pas le bon.", meets: "Nomme le pouvoir ou le droit concerné et explique pourquoi en une phrase.", exceeds: "Donne aussi un exemple de contre-pouvoir ou d'un droit utilisé aujourd'hui." },
      { name: "Lecture de données", objective: "O5", notYet: "N'a pas fait l'exercice sur les graphiques de la leçon 5.", meets: "A fait l'exercice sur les graphiques de la leçon 5 avec une conclusion qui reste dans les limites des données.", exceeds: "Explique aussi une variation de prix avec l'offre et la demande." },
      { name: "Plan de révision", objective: "O1", notYet: "Pas de plan de révision, ou pas de dates.", meets: "Un plan de révision avec au moins une date chaque semaine jusqu'à la semaine cible de l'examen.", exceeds: "Comprend aussi une date pour GED Ready ou une date d'examen réservée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent Atteint ou mieux sur toutes les lignes de la grille",
      "Apprenants qui passent GED Ready ou un test d'essai gratuit de ged.com dans les 30 jours",
      "Apprenants qui réservent ou réussissent l'épreuve de sciences sociales du GED dans les 90 jours (selon leurs déclarations)",
      "Les programmes partenaires signalent que davantage d'apprenants terminent les quatre matières du GED et poursuivent vers une formation professionnelle ou des études supérieures"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone, une tablette ou un ordinateur avec Internet, ou les leçons imprimées",
      "Du papier et un stylo pour les réponses aux exercices et la fiche d'analyse de source",
      "Une copie imprimée ou à l'écran du Préambule et de la Déclaration des droits, depuis archives.gov",
      "Les tests d'essai gratuits de ged.com ; GED Ready si l'apprenant choisit de l'acheter",
      "Environ 90 minutes pour les leçons et les contrôles, plus environ 45 minutes pour la tâche finale"
    ],
    facilitatorNotes: [
      "Commencez par le test de départ et le test d'essai gratuit de sciences sociales de ged.com pour voir de quel domaine de compétences chaque apprenant a le plus besoin.",
      "Lisez le Préambule à voix haute ensemble et reformulez chaque objectif avec des mots de tous les jours avant que les apprenants remplissent leur fiche.",
      "Restez neutre sur les sujets politiques : enseignez le fonctionnement du gouvernement et la façon de juger les preuves, pas quel camp choisir.",
      "Utilisez de vrais tableaux locaux (par exemple les données d'emploi ou de loyer du comté) pour plus d'exercices sur les graphiques, et vérifiez les chiffres sur la source officielle.",
      "Vérifiez quel examen votre État utilise (GED ou HiSET) et partagez les centres d'examen locaux et toute aide pour les frais."
    ]
  }
};
