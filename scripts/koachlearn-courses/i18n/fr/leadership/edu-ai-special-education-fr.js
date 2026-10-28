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
  chapters: [
    {
      name: "Chapitre 1 : Limites et supports accessibles",
      lessons: [
        {
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
          youCanNow: "tracer une limite claire entre les tâches où l'IA peut aider et les décisions de l'équipe IEP."
        },
        {
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
          youCanNow: "créer des versions exactes en langage simple et découpées des supports de classe."
        },
        {
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
          youCanNow: "créer des aides visuelles et des exercices par niveaux qui rendent les leçons plus accessibles."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Limites et supports accessibles",
        questions: [
          { q: "Selon la partie B de la loi IDEA, les services d'éducation spécialisée des élèves admissibles de 3 à 21 ans sont définis dans :", options: ["Un bulletin scolaire", "Un résumé produit par l'IA", "Un plan IEP élaboré par une équipe qui comprend les parents", "Une lettre d'information"], answer: 2, why: "Le plan IEP est le plan écrit de l'équipe." },
          { q: "Quelle tâche l'IA ne doit-elle PAS faire ?", options: ["Rédiger les objectifs IEP d'un élève", "Faire une version en langage simple d'un texte général", "Rédiger un emploi du temps visuel", "Créer des exercices à deux niveaux"], answer: 0, why: "Le contenu du plan IEP est une décision d'équipe." },
          { q: "L'IA a simplifié un texte de sciences et modifié un fait. Que faites-vous ?", options: ["L'utiliser quand même", "Supprimer l'original", "Le simplifier davantage", "Le comparer avec l'original et le corriger"], answer: 3, why: "Simplifier peut introduire des erreurs." },
          { q: "Qu'est-ce qu'un texte alternatif ?", options: ["Une autre police", "Une description écrite d'une image pour les lecteurs d'écran", "Un autre test", "Un SMS"], answer: 1, why: "Le texte alternatif rend les images accessibles." },
          { q: "Vos supports par niveaux offrent plus de soutien. Les aménagements IEP obligatoires s'appliquent-ils toujours ?", options: ["Non, les supports les remplacent", "Seulement les jours de test", "Seulement si les parents le demandent", "Oui, ils doivent être fournis tels qu'ils sont écrits"], answer: 3, why: "Les aménagements obligatoires ne sont pas remplacés." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Familles, vie privée et règles d'équipe",
      lessons: [
        {
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
          youCanNow: "aider les familles à comprendre les démarches de l'éducation spécialisée avec des explications claires et vérifiées."
        },
        {
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
          youCanNow: "protéger les informations IEP, 504 et de handicap quand des outils d'IA sont utilisés."
        },
        {
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
          youCanNow: "utiliser l'IA pour rendre les supports d'éducation spécialisée plus accessibles tout en protégeant les élèves et en laissant les décisions à l'équipe."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Familles, vie privée et règles d'équipe",
        questions: [
          { q: "L'IA a rédigé une explication de la démarche IEP pour les familles. Avant de la partager, vous devez :", options: ["L'envoyer telle quelle", "Ajouter le nom d'un élève", "La vérifier avec les procédures et les documents officiels de votre district", "Retirer tous les titres"], answer: 2, why: "L'IA peut décrire la démarche d'un autre État ou se tromper sur des détails." },
          { q: "Quel document reste l'énoncé juridique des droits des parents ?", options: ["L'avis officiel du district sur les garanties procédurales", "Votre explication rédigée avec l'IA", "Une lettre d'information", "Un SMS"], answer: 0, why: "L'explication aide les familles à comprendre l'avis officiel." },
          { q: "Un enseignant veut que l'IA résume le rapport d'évaluation d'un élève dans un outil gratuit. Meilleure réponse ?", options: ["Allez-y", "Non : les résultats d'évaluation sont des dossiers scolaires sensibles ; pas d'outils non approuvés", "Seulement la première page", "Seulement s'il a l'air anonyme"], answer: 1, why: "Les évaluations sont protégées et très sensibles." },
          { q: "Un outil d'IA de prise de notes non approuvé doit-il enregistrer une réunion IEP ?", options: ["Non", "Oui, cela fait gagner du temps", "Seulement la moitié de la réunion", "Seulement si le fournisseur est d'accord"], answer: 0, why: "Les réunions sur les élèves ne doivent pas être enregistrées par des outils non approuvés." },
          { q: "Qui inclure quand on présente les règles d'IA de l'équipe ?", options: ["Seulement les enseignants", "Seulement les fournisseurs", "Seulement le chef d'établissement", "Enseignants, accompagnants et professionnels des services connexes"], answer: 3, why: "Toutes les personnes qui accompagnent les élèves ont besoin des règles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour l'éducation spécialisée",
    questions: [
      { q: "La loi IDEA garantit aux enfants en situation de handicap admissibles :", options: ["Un ordinateur portable gratuit", "Une éducation publique gratuite et appropriée", "Les frais d'une école privée", "Du tutorat par l'IA"], answer: 1, why: "La FAPE est la garantie centrale de la loi IDEA." },
      { q: "La partie B de la loi IDEA couvre les enfants admissibles âgés de :", options: ["13 à 18 ans seulement", "0 à 2 ans seulement", "3 à 21 ans", "Adultes seulement"], answer: 2, why: "La partie B couvre les 3 à 21 ans ; la partie C, les nourrissons et les tout-petits." },
      { q: "Qui élabore le plan IEP ?", options: ["Le chef d'établissement seul", "Un outil d'IA", "Une équipe qui comprend les parents et le personnel de l'école", "Un fournisseur"], answer: 2, why: "Le plan IEP est une décision d'équipe." },
      { q: "Un plan 504 prévoit :", options: ["Des aménagements pour un élève en situation de handicap selon une autre loi fédérale", "Une note", "Une sortie scolaire", "Une licence d'outil"], answer: 0, why: "Le plan 504 est une voie distincte de la loi IDEA." },
      { q: "Laquelle est une bonne tâche pour l'IA ?", options: ["Choisir l'orientation", "Rédiger les objectifs IEP", "Décider de l'admissibilité", "Une version en langage simple d'un texte général"], answer: 3, why: "Adapter des supports généraux est un usage sûr." },
      { q: "Le langage simple signifie :", options: ["Moins d'idées", "Des phrases courtes et des mots courants, avec les mêmes idées", "Pas de vocabulaire", "Des attentes plus basses"], answer: 1, why: "Lecture allégée, même objectif d'apprentissage." },
      { q: "Découper une tâche signifie :", options: ["La noter", "L'allonger", "La supprimer", "La diviser en petites étapes numérotées"], answer: 3, why: "De petites étapes rendent les tâches gérables." },
      { q: "Après que l'IA a simplifié un texte, vérifiez que :", options: ["Il a plus d'images", "Il est plus long", "Aucun fait clé n'a été supprimé ou modifié", "Il a l'air soutenu"], answer: 2, why: "Simplifier peut introduire des erreurs." },
      { q: "Un emploi du temps visuel montre :", options: ["Ce qui va se passer, dans l'ordre, avec des images et des mots", "Les trajets des bus", "Les bulletins scolaires", "Les salaires du personnel"], answer: 0, why: "Il aide les élèves à savoir ce qui vient ensuite." },
      { q: "La synthèse vocale :", options: ["Écrit des dissertations", "Lit un texte à voix haute", "Note les travaux", "Traduit la parole"], answer: 1, why: "Elle aide les élèves qui profitent d'entendre le texte." },
      { q: "Des exercices avec plus de soutien peuvent comprendre :", options: ["Un exemple résolu et une banque de mots", "Moins d'idées", "Un test plus difficile", "Aucune consigne"], answer: 0, why: "L'étayage aide les élèves à atteindre la même compétence." },
      { q: "Les aménagements IEP obligatoires :", options: ["S'appliquent seulement aux tests", "Peuvent être remplacés par des supports d'IA", "Sont facultatifs", "Doivent être fournis tels qu'ils sont écrits"], answer: 3, why: "Ils sont exigés par la loi." },
      { q: "Les explications pour les familles doivent être :", options: ["Au sujet d'un élève nommé", "Générales, pas au sujet d'un enfant précis", "Écrites seulement en anglais", "Envoyées sans vérification"], answer: 1, why: "Gardez les informations des élèves hors de l'IA." },
      { q: "Les traductions pour les familles doivent être :", options: ["Abandonnées", "Des résultats d'IA non vérifiés", "Vérifiées par des locuteurs qualifiés", "Faites par les élèves"], answer: 2, why: "Les familles ont besoin d'une information exacte." },
      { q: "Les plans IEP et les évaluations sont protégés par :", options: ["Aucune loi", "Seulement le droit d'auteur", "FERPA", "Le code de la route"], answer: 2, why: "Ce sont des dossiers scolaires." },
      { q: "Mettre des diagnostics et des plans de comportement dans un outil d'IA non approuvé est :", options: ["Jamais permis", "Acceptable si c'est court", "Acceptable le week-end", "Obligatoire"], answer: 0, why: "Ce sont des informations très sensibles." },
      { q: "Avec un outil d'IA approuvé pour l'éducation spécialisée, le personnel doit :", options: ["Ne plus vérifier", "Tout téléverser", "Partager ses identifiants", "L'utiliser seulement dans les limites de l'accord, avec le minimum d'informations"], answer: 3, why: "L'accord et la minimisation s'appliquent toujours." },
      { q: "L'environnement le moins restrictif signifie que les élèves en situation de handicap apprennent :", options: ["Toujours seuls", "Avec leurs camarades sans handicap autant que c'est approprié", "Seulement en ligne", "Seulement à la maison"], answer: 1, why: "C'est un principe central de la loi IDEA." },
      { q: "Qui a le dernier mot sur les règles d'éducation spécialisée de votre district ?", options: ["Un élève", "Un agent conversationnel", "Un fournisseur", "Le directeur de l'éducation spécialisée et le conseiller juridique"], answer: 3, why: "Ce sont des personnes qualifiées qui décident." },
      { q: "Un dossier partagé de bonnes consignes et de bons supports permet :", options: ["De partager des données d'élèves", "De cacher les supports", "Que le temps gagné profite à toute l'équipe", "De remplacer l'équipe IEP"], answer: 2, why: "Le partage multiplie le bénéfice." }
    ]
  }
};
