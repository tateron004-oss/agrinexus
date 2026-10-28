"use strict";

// Koach Learn course (French translation of leadership/edu-ai-lesson-planning.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-lesson-planning-fr",
  lang: "fr",
  translationOf: "edu-ai-lesson-planning",
  category: "Leadership Development",
  name: "L'IA pour les responsables scolaires et éducatifs 3 : l'IA pour préparer les leçons",
  skills: "Planifier à rebours à partir de l'objectif, Demander un plan de leçon complet, Vérifier l'exactitude et la cohérence des plans de l'IA, Intégrer la différenciation, Rédiger le plan d'une séquence, Accompagner les équipes pour planifier avec l'IA",
  outcome: "préparer une leçon complète avec un assistant d'IA, de l'objectif et des critères de réussite jusqu'aux activités, à la différenciation et au billet de sortie, la vérifier pour l'exactitude, la cohérence et les biais, et transformer votre démarche en modèle que votre équipe peut réutiliser.",
  about: [
    "Ce cours s'adresse aux enseignants, aux conseillers pédagogiques, aux responsables de département et aux chefs d'établissement qui accompagnent la préparation des cours. L'IA peut réduire le temps de préparation, mais un plan rapide n'est bon que s'il est exact, aligné sur ce que les élèves doivent apprendre et adapté à vos élèves.",
    "Le chapitre 1 enseigne une démarche de planification à rebours avec l'IA : partir de l'objectif, décider des preuves d'apprentissage, puis construire les activités, et tout vérifier. Le chapitre 2 ajoute la différenciation, la planification d'une séquence et la façon dont les responsables accompagnent les équipes pour bien planifier avec l'IA.",
    "Utilisez des descriptions de classe inventées. Ne saisissez jamais de noms d'élèves, de détails de plans IEP ou 504 (plans d'accompagnement des élèves en situation de handicap aux États-Unis), de notes ou d'autres informations identifiantes dans un outil que votre district ou votre administration n'a pas approuvé. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Il s'agit du cours 3 sur 8 de la série « L'IA pour les responsables scolaires et éducatifs »."
  ],
  finalTask: "Utilisez un assistant d'IA pour préparer une leçon complète que vous (ou un enseignant que vous accompagnez) allez enseigner : objectif et critères de réussite tirés d'une norme de programme de votre choix, une accroche, une pratique guidée et une pratique autonome, des aides pour trois groupes (a besoin de plus de soutien, au niveau attendu, prêt pour plus), et un billet de sortie de trois questions avec les réponses. Vérifiez-la avec la liste de contrôle qualité, notez ce que vous avez changé et pourquoi, et enregistrez vos consignes comme modèle pour votre équipe.",
  chapters: [
    {
      name: "Chapitre 1 : Préparer une leçon avec l'IA",
      lessons: [
        {
          title: "Commencer par l'objectif, pas par l'activité",
          minutes: 5,
          goal: "Rédiger un objectif clair et des critères de réussite avant de demander des activités à l'IA.",
          text: [
            "L'IA produira volontiers une activité amusante qui n'enseigne rien de précis. La planification à rebours l'évite : décidez d'abord ce que les élèves doivent savoir ou savoir faire, puis comment vous le verrez, puis les activités.",
            "C'est vous qui choisissez la norme de programme. Copiez sa formulation exacte depuis le site officiel des programmes de votre État, de votre pays ou de votre district, pas depuis l'IA, car l'IA peut mal citer ou inventer des codes de normes. Demandez ensuite à l'IA de vous aider à la transformer en objectif compréhensible par les élèves (« Je sais... ») et en deux ou trois critères de réussite.",
            "Exemple de consigne (prompt) : « Voici une norme : [collez-la]. Écrivez un objectif pour une leçon de 6e année (élèves d'environ 11 ans), avec des mots simples pour les élèves, et trois critères de réussite qui montrent que l'objectif est atteint. » Corrigez jusqu'à ce que vous soyez prêt à l'écrire au tableau."
          ],
          steps: ["Choisissez la norme dans la source officielle de votre État, pays ou district.", "Collez sa formulation exacte dans la consigne.", "Demandez un objectif « Je sais » et des critères de réussite.", "Corrigez jusqu'à ce qu'il soit clair pour les élèves.", "Seulement ensuite, préparez les activités."],
          words: [["Planification à rebours", "planifier à partir de l'objectif d'apprentissage, puis des preuves, puis des activités."], ["Critères de réussite", "ce que les élèves pourront montrer quand ils auront atteint l'objectif."], ["Norme de programme", "l'énoncé officiel de ce que les élèves doivent apprendre, fixé par votre État, votre pays ou votre district."]],
          slides: [
            { title: "Planification à rebours", bullets: ["1. Que doivent apprendre les élèves ?", "2. Comment le verrons-nous ?", "3. Ensuite, les activités"] },
            { title: "C'est vous qui choisissez la norme", bullets: ["Copiez-la depuis la source officielle", "L'IA peut mal citer ou inventer des codes de normes"] },
            { title: "Objectif et critères de réussite", bullets: ["« Je sais... » avec des mots simples pour les élèves", "Deux ou trois choses que les élèves montreront"] }
          ],
          tryIt: "Choisissez une norme pour une leçon à venir. Copiez-la depuis la source officielle, puis utilisez l'IA pour écrire un objectif « Je sais » et trois critères de réussite. Corrigez-les jusqu'à ce qu'ils soient prêts pour le tableau.",
          youCanNow: "commencer un plan de leçon assisté par l'IA à partir d'une vraie norme, d'un objectif et de critères de réussite."
        },
        {
          title: "Demander la leçon complète",
          minutes: 6,
          goal: "Obtenir de l'IA un brouillon de plan de leçon structuré avec une consigne réutilisable.",
          text: [
            "Une fois l'objectif fixé, demandez la leçon entière dans le format de votre école. Une bonne consigne donne : le niveau et la matière, la durée du cours, l'objectif et les critères de réussite, ce que les élèves savent déjà, le matériel dont vous disposez et les parties que vous voulez.",
            "Exemple : « Prépare une leçon de 50 minutes pour une classe de 6e année. Objectif : [collez]. Critères de réussite : [collez]. Les élèves savent déjà [x]. Matériel : ardoises, un projecteur, pas d'appareils numériques. Parties : accroche (5 min), mini-leçon (10), pratique guidée (15), pratique autonome (15), billet de sortie (5). Utilise un tableau avec le temps, les actions de l'enseignant, les actions des élèves. »",
            "Considérez le résultat comme le brouillon d'un collègue rapide mais débutant. Faites des relances : « relie l'accroche à la vie des élèves », « ajoute deux vérifications de la compréhension pendant la mini-leçon », « réduis la pratique guidée à 10 minutes »."
          ],
          steps: ["Donnez le niveau, la matière et la durée du cours.", "Collez l'objectif et les critères de réussite.", "Dites ce que savent les élèves et quel matériel vous avez.", "Listez les parties et les durées voulues.", "Demandez un tableau, puis améliorez-le avec des relances."],
          words: [["Mini-leçon", "un court moment d'enseignement ciblé."], ["Vérification de la compréhension", "un moyen rapide de voir si les élèves suivent, comme un pouce levé ou une réponse sur ardoise."]],
          slides: [
            { title: "Donnez le contexte à l'IA", bullets: ["Niveau, matière, durée du cours", "Objectif et critères de réussite", "Acquis et matériel"] },
            { title: "Demandez votre format", bullets: ["Parties avec leurs durées", "Tableau : temps, enseignant, élèves"] },
            { title: "Améliorez-le", bullets: ["« Relie l'accroche à la vie des élèves »", "« Ajoute deux vérifications de la compréhension »"] }
          ],
          tryIt: "Utilisez ce modèle de consigne pour obtenir un brouillon de leçon complète pour votre objectif de la leçon 1. Faites au moins deux relances pour l'améliorer.",
          youCanNow: "obtenir de l'IA un brouillon de leçon structuré et utilisable, et l'améliorer avec des relances."
        },
        {
          title: "Vérifier le plan : exactitude, cohérence et biais",
          minutes: 5,
          goal: "Vérifier un plan de leçon produit par l'IA avec une liste de contrôle qualité en cinq points.",
          text: [
            "Chaque plan de l'IA doit être vérifié par un enseignant avant d'arriver aux élèves. Utilisez cinq questions. Exact : tous les faits, exemples, dates et réponses sont-ils corrects ? Aligné : chaque activité fait-elle avancer les élèves vers l'objectif, et le billet de sortie le mesure-t-il ?",
            "Bon niveau : la difficulté et la longueur conviennent-elles à ces élèves et à ce temps ? Juste et inclusif : les exemples, les prénoms et les contextes sont-ils respectueux et variés, sans stéréotypes, et accessibles aux élèves en situation de handicap et à ceux qui apprennent la langue de l'école ? Faisable : avez-vous le matériel et le temps ?",
            "Notez ce que vous avez changé. Avec le temps, cela montre à votre équipe où les plans de l'IA se trompent souvent (fréquemment : trop de contenu pour le temps disponible, et des activités qui occupent sans faire pratiquer l'objectif)."
          ],
          steps: ["Exact : vérifiez les faits, les exemples et les réponses.", "Aligné : chaque activité sert l'objectif ; le billet de sortie le mesure.", "Bon niveau pour ces élèves et ce temps.", "Juste et inclusif : pas de stéréotypes ; accessible.", "Faisable avec votre matériel ; notez ce que vous avez changé."],
          words: [["Alignement", "quand les objectifs, les activités et l'évaluation correspondent tous."], ["Stéréotype", "une idée injuste et figée sur un groupe de personnes."], ["Accessible", "utilisable par tous les élèves, y compris ceux en situation de handicap."]],
          slides: [
            { title: "La vérification en cinq points", bullets: ["Exact", "Aligné", "Bon niveau", "Juste et inclusif ; faisable"] },
            { title: "Problèmes fréquents des plans de l'IA", bullets: ["Trop de contenu pour le temps", "Activités qui occupent sans viser l'objectif", "Réponses fausses ou faits inventés"] },
            { title: "Notez vos changements", bullets: ["Cela montre où les plans de l'IA se trompent", "Cela forme le jugement de votre équipe"] }
          ],
          tryIt: "Passez votre brouillon de leçon à la vérification en cinq points. Corrigez chaque problème et listez les changements faits.",
          youCanNow: "vérifier un plan de leçon de l'IA pour l'exactitude, l'alignement, le niveau, l'équité et la faisabilité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer une leçon avec l'IA",
        questions: [
          { q: "Dans la planification à rebours, qu'est-ce qui vient en premier ?", options: ["Une activité amusante", "La fiche d'exercices", "Ce que les élèves doivent apprendre", "Le plan de classe"], answer: 2, why: "On planifie à partir de l'objectif d'apprentissage." },
          { q: "D'où doit venir la formulation de la norme ?", options: ["De la source officielle de votre État, pays ou district", "De ce que dit l'IA", "D'un site au hasard", "De votre mémoire"], answer: 0, why: "L'IA peut mal citer ou inventer des normes." },
          { q: "Quel détail aide le plus dans une consigne de préparation de leçon ?", options: ["Les noms des élèves en difficulté", "Le numéro de téléphone du chef d'établissement", "Les notes des élèves avec leur nom", "La durée du cours, l'objectif, les acquis et le matériel"], answer: 3, why: "Le contexte améliore le plan sans données privées." },
          { q: "Une activité de l'IA est amusante mais ne fait pas pratiquer l'objectif. Quel point échoue ?", options: ["Exact", "Aligné", "Faisable", "Juste"], answer: 1, why: "L'alignement veut dire que les activités servent l'objectif." },
          { q: "Quel est le problème le plus fréquent des plans de leçon de l'IA ?", options: ["Trop peu de contenu", "Un minutage parfait", "Aucun texte", "Trop de contenu pour le temps disponible"], answer: 3, why: "L'IA remplit souvent trop le temps." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Différenciation, séquences et planification en équipe",
      lessons: [
        {
          title: "Intégrer la différenciation",
          minutes: 6,
          goal: "Utiliser l'IA pour prévoir des aides pour les élèves qui ont besoin de plus de soutien et un défi pour ceux qui sont prêts pour plus.",
          text: [
            "Décrivez les groupes par besoin, jamais par nom : « élèves qui ont besoin de plus de soutien pour les problèmes en plusieurs étapes », « élèves au niveau attendu », « élèves prêts pour un défi ». Demandez à l'IA le même objectif atteint de trois façons : plus d'étayage (exemples résolus, débuts de phrases, supports visuels), une pratique au niveau attendu, et un approfondissement (un problème plus difficile ou une tâche de transfert).",
            "Demandez des aides utiles à tous : supports visuels clairs, vocabulaire illustré, choix dans la façon de montrer ce qu'on a appris. Cette approche, qui prévoit la diversité dès le départ, s'appelle souvent la conception universelle de l'apprentissage (UDL, Universal Design for Learning) ; consultez les UDL Guidelines de CAST pour en savoir plus.",
            "Les élèves ayant un plan IEP ou 504 doivent recevoir les aménagements prévus dans leur plan ; les aides produites par l'IA ne les remplacent jamais. Vérifiez avec l'enseignant spécialisé, et ne saisissez pas les détails des plans dans des outils non approuvés. Hors des États-Unis, appliquez de la même façon les plans d'accompagnement prévus dans votre pays."
          ],
          steps: ["Décrivez les groupes par besoin, pas par nom.", "Demandez trois chemins vers le même objectif.", "Demandez des aides utiles à tous : visuels, vocabulaire, choix.", "Vérifiez les aménagements IEP et 504 avec l'enseignant spécialisé.", "Gardez les détails des plans hors des outils non approuvés."],
          words: [["Différenciation", "adapter l'enseignement pour que des élèves aux besoins différents atteignent le même objectif."], ["Étayage", "une aide temporaire, comme des exemples résolus ou des débuts de phrases."], ["Conception universelle de l'apprentissage (UDL)", "préparer les leçons pour une grande diversité d'apprenants dès le départ."]],
          slides: [
            { title: "Des groupes par besoin, pas par nom", bullets: ["A besoin de plus de soutien", "Au niveau attendu", "Prêt pour plus"] },
            { title: "Trois chemins, un objectif", bullets: ["Étayage : exemples, débuts de phrases, visuels", "Pratique au niveau attendu", "Approfondissement ou tâche de transfert"] },
            { title: "Des aides pour tous", bullets: ["Visuels, vocabulaire, choix", "UDL : voir les UDL Guidelines de CAST"] },
            { title: "Plans IEP et 504", bullets: ["Les aménagements obligatoires s'appliquent toujours", "Les aides de l'IA ne les remplacent jamais"] }
          ],
          tryIt: "Ajoutez la différenciation à votre leçon : demandez à l'IA trois chemins vers l'objectif, vérifiez-les, et confirmez avec votre collègue de l'enseignement spécialisé quels aménagements IEP ou 504 doivent encore être prévus.",
          youCanNow: "prévoir avec l'IA du soutien et des défis pour des apprenants différents, en respectant les aménagements obligatoires."
        },
        {
          title: "De la leçon à la séquence",
          minutes: 5,
          goal: "Rédiger le plan d'une séquence avec l'IA et vérifier son rythme.",
          text: [
            "Une séquence est une suite de leçons vers des objectifs plus larges. Donnez à l'IA les normes de la séquence (tirées de votre source officielle), le nombre de jours de classe, les congés ou jours d'examens, et le point de départ des élèves. Demandez un plan jour par jour avec les objectifs, les activités principales et des points d'étape.",
            "Vérifiez d'abord le rythme : l'IA en met souvent trop. Assurez-vous que chaque leçon s'appuie sur la précédente, qu'il y a des jours de révision et un plan pour réenseigner, et que l'évaluation de fin de séquence correspond aux objectifs.",
            "Utilisez l'IA pour ce qu'elle fait bien en remue-méninges : un projet concret pour ancrer la séquence, les idées fausses fréquentes à anticiper, et des questions qui font réfléchir les élèves. C'est vous qui décidez de ce qui convient."
          ],
          steps: ["Donnez les normes de la séquence, le nombre de jours et les interruptions du calendrier.", "Demandez un plan jour par jour avec objectifs et points d'étape.", "Vérifiez le rythme : coupez, ajoutez des jours de révision et de réenseignement.", "Vérifiez que l'évaluation finale correspond aux objectifs.", "Utilisez l'IA pour trouver des idées fausses et des projets d'ancrage."],
          words: [["Séquence", "un ensemble de leçons qui mènent vers des objectifs d'apprentissage plus larges."], ["Rythme", "ce qui est enseigné chaque jour et la vitesse à laquelle la classe avance."], ["Idée fausse", "une erreur de compréhension fréquente chez les élèves sur un sujet."]],
          slides: [
            { title: "Donnez le contexte de la séquence", bullets: ["Normes tirées de la source officielle", "Nombre de jours et interruptions du calendrier", "Point de départ des élèves"] },
            { title: "Vérifiez le rythme", bullets: ["L'IA en met souvent trop", "Ajoutez des jours de révision et de réenseignement", "L'évaluation correspond aux objectifs"] },
            { title: "Remue-méninges avec l'IA", bullets: ["Idées fausses fréquentes", "Projets d'ancrage", "Questions qui font réfléchir"] }
          ],
          tryIt: "Demandez à l'IA le plan sur dix jours de la séquence dont fait partie votre leçon. Ajustez le rythme, ajoutez un jour de révision et listez trois idées fausses à anticiper.",
          youCanNow: "rédiger le plan d'une séquence avec l'IA et en régler le rythme."
        },
        {
          title: "Accompagner les équipes pour planifier avec l'IA",
          minutes: 6,
          goal: "Transformer votre démarche de planification en modèle et accompagner une équipe pour l'utiliser.",
          text: [
            "Les responsables multiplient les bonnes pratiques en les rendant reproductibles. Transformez ce que vous avez appris en modèle de planification : les consignes pour l'objectif, la leçon complète, la différenciation et la séquence, plus la liste de contrôle qualité en cinq points.",
            "Utilisez-le lors d'une réunion d'équipe ou de communauté d'apprentissage professionnelle (PLC) : chaque enseignant prépare une leçon avec le modèle, puis les binômes échangent leurs plans et font la vérification qualité de celui de l'autre. Discutez de ce que l'IA a mal fait ; cela construit un jugement commun plus vite que n'importe quelle diapositive de formation.",
            "Fixez les attentes : les plans assistés par l'IA sont les bienvenus, et les enseignants restent responsables de ce qu'ils enseignent. Veillez à ce que seuls des outils approuvés soient utilisés et qu'aucune information sur les élèves n'y soit saisie. Demandez aux enseignants de noter le temps gagné et les problèmes de qualité, pour savoir si la pratique fonctionne."
          ],
          steps: ["Rédigez le modèle de planification : quatre consignes et la liste de contrôle.", "En réunion d'équipe, chaque enseignant prépare une leçon avec ce modèle.", "Les binômes échangent et font la vérification qualité.", "Discutez de ce que l'IA a mal fait.", "Fixez les attentes et suivez le temps gagné et les problèmes de qualité."],
          words: [["PLC", "communauté d'apprentissage professionnelle : une équipe d'enseignants qui se réunit pour améliorer l'enseignement ensemble."], ["Modèle", "un format de départ réutilisable."]],
          slides: [
            { title: "Rendez-le reproductible", bullets: ["Quatre consignes : objectif, leçon, différenciation, séquence", "Plus la liste de contrôle en cinq points"] },
            { title: "Pratique en équipe", bullets: ["Chaque enseignant prépare une leçon", "Les binômes échangent et vérifient", "Discutez de ce que l'IA a mal fait"] },
            { title: "Des attentes claires", bullets: ["Les enseignants sont responsables de ce qu'ils enseignent", "Outils approuvés, aucune donnée d'élève", "Suivez le temps gagné et la qualité"] }
          ],
          tryIt: "Tâche finale : terminez votre plan de leçon complet (objectif, critères de réussite, accroche, pratique guidée et autonome, trois groupes, billet de sortie avec réponses), vérifiez-le avec la liste en cinq points, notez vos changements, et enregistrez vos quatre consignes et la liste de contrôle comme modèle d'équipe.",
          youCanNow: "préparer des leçons de qualité avec l'IA et aider une équipe à faire de même."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Différenciation, séquences et planification en équipe",
        questions: [
          { q: "Comment décrire les groupes d'élèves dans une consigne ?", options: ["Par leur nom", "Par leur note et leur nom", "Par besoin, par exemple « a besoin de plus de soutien pour les problèmes en plusieurs étapes »", "Par le revenu de la famille"], answer: 2, why: "Décrivez les besoins sans identifier les élèves." },
          { q: "Le plan IEP d'un élève prévoit un aménagement. L'IA a proposé d'autres aides. Qu'est-ce qui s'applique ?", options: ["L'aménagement du plan IEP doit toujours être fourni", "Les aides de l'IA remplacent le plan IEP", "Aucun des deux", "Demander à l'IA de décider"], answer: 0, why: "Les aménagements obligatoires ne sont pas remplacés par les suggestions de l'IA." },
          { q: "Que faut-il vérifier en premier dans un plan de séquence de l'IA ?", options: ["La police", "Le rythme", "Le titre", "Les couleurs"], answer: 1, why: "L'IA en met souvent trop." },
          { q: "Dans une PLC, pourquoi faire vérifier les plans de l'IA par un binôme ?", options: ["Pour construire un jugement commun sur les erreurs de l'IA", "Pour noter les enseignants", "Pour éviter de préparer", "Pour utiliser plus d'IA"], answer: 0, why: "Discuter des erreurs construit le jugement de l'équipe." },
          { q: "Qui est responsable d'une leçon assistée par l'IA enseignée en classe ?", options: ["L'entreprise d'IA", "Personne", "Les élèves", "L'enseignant"], answer: 3, why: "Les enseignants restent responsables de ce qu'ils enseignent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 3 : l'IA pour préparer les leçons",
    questions: [
      { q: "Dans quel ordre planifie-t-on à rebours ?", options: ["Activités, objectif, preuves", "Objectif, preuves, activités", "Fiche d'exercices, test, objectif", "Preuves, activités, objectif"], answer: 1, why: "On commence par l'objectif." },
      { q: "Les critères de réussite décrivent :", options: ["L'aménagement de la salle", "Le salaire de l'enseignant", "Ce que les élèves montreront quand ils atteignent l'objectif", "L'emploi du temps"], answer: 2, why: "Ils rendent l'objectif visible." },
      { q: "Un objectif « Je sais » est :", options: ["Une note de test", "Un slogan", "L'objectif écrit avec des mots simples pour les élèves", "Une règle"], answer: 2, why: "Les élèves doivent comprendre l'objectif." },
      { q: "Pourquoi ne pas prendre les codes de normes donnés par l'IA ?", options: ["L'IA peut mal les citer ou les inventer", "Ils sont secrets", "L'IA ne connaît jamais les normes", "Ils sont trop longs"], answer: 0, why: "Utilisez la source officielle." },
      { q: "Une consigne pour une leçon complète doit inclure :", options: ["Les notes avec les noms", "Les noms des élèves", "Les courriels des parents", "Durée du cours, objectif, acquis, matériel, parties"], answer: 3, why: "Du contexte, pas de données privées." },
      { q: "Un brouillon de leçon de l'IA doit être considéré comme :", options: ["Le plan final", "Le brouillon d'un collègue rapide mais débutant", "Un document juridique", "Le travail d'un élève"], answer: 1, why: "Les enseignants relisent et corrigent." },
      { q: "Une vérification de la compréhension est :", options: ["Une réunion avec les parents", "Un chèque bancaire", "Un bulletin scolaire", "Un moyen rapide de voir si les élèves suivent"], answer: 3, why: "Elle repère tôt les confusions." },
      { q: "Lequel fait partie de la vérification en cinq points ?", options: ["Le plus long", "Le plus coloré", "Juste et inclusif", "Le plus populaire"], answer: 2, why: "L'équité et l'accessibilité font partie de la qualité." },
      { q: "L'alignement signifie :", options: ["Objectifs, activités et évaluation correspondent", "Les tables sont en rangées", "Le plan est long", "L'IA était d'accord"], answer: 0, why: "Tout sert l'objectif." },
      { q: "Pourquoi noter ce que vous avez changé dans un plan de l'IA ?", options: ["La loi l'exige", "Cela montre où les plans de l'IA se trompent", "Cela allonge le plan", "Pour blâmer l'IA"], answer: 1, why: "Cela forme le jugement avec le temps." },
      { q: "La différenciation signifie :", options: ["Adapter l'enseignement pour que des élèves différents atteignent le même objectif", "Donner des notes différentes", "Séparer les classes pour toujours", "Utiliser différents outils d'IA"], answer: 0, why: "Même objectif, chemins différents." },
      { q: "L'étayage comprend :", options: ["Les retenues", "Retirer toute aide", "Un test plus difficile", "Des exemples résolus et des débuts de phrases"], answer: 3, why: "Des aides temporaires aident les élèves à atteindre l'objectif." },
      { q: "UDL signifie :", options: ["Unit Daily Lesson (leçon quotidienne de séquence)", "Universal Design for Learning (conception universelle de l'apprentissage)", "Upper Division Level (niveau de cycle supérieur)", "Unified District Login (connexion unique du district)"], answer: 1, why: "Prévoir dès le départ pour une grande diversité d'apprenants." },
      { q: "Une tâche d'approfondissement est destinée aux élèves qui :", options: ["Ont besoin de plus de soutien", "Sont absents", "Sont prêts pour un défi plus grand", "Ont fini l'année"], answer: 2, why: "Elle approfondit l'apprentissage des élèves prêts." },
      { q: "Les aménagements IEP et 504 :", options: ["Peuvent être saisis dans n'importe quel outil d'IA", "Peuvent être remplacés par les aides de l'IA", "Doivent toujours être fournis, quoi que propose l'IA", "Sont facultatifs"], answer: 2, why: "Ils sont obligatoires." },
      { q: "Une consigne pour un plan de séquence doit inclure :", options: ["Les normes, le nombre de jours et les interruptions du calendrier", "Les noms des élèves", "Les salaires du personnel", "Rien"], answer: 0, why: "Le rythme dépend du temps réellement disponible." },
      { q: "Dans la planification d'une séquence, l'IA est particulièrement utile pour :", options: ["Approuver des outils", "Décider des notes", "Rédiger les plans IEP", "Trouver des idées fausses et des projets d'ancrage"], answer: 3, why: "Le remue-méninges est un point fort ; c'est vous qui décidez de ce qui convient." },
      { q: "Un modèle de planification doit inclure :", options: ["Des données d'élèves", "Les consignes et la liste de contrôle qualité", "Des mots de passe", "Rien"], answer: 1, why: "Il rend les bonnes pratiques reproductibles." },
      { q: "PLC signifie :", options: ["Principal leadership council (conseil de direction)", "Public library card (carte de bibliothèque)", "Planning lesson calendar (calendrier des leçons)", "Professional learning community (communauté d'apprentissage professionnelle)"], answer: 3, why: "Des enseignants qui améliorent l'enseignement ensemble." },
      { q: "Pour savoir si la planification avec l'IA fonctionne, les responsables doivent suivre :", options: ["Rien", "Seulement le temps gagné", "Le temps gagné et les problèmes de qualité", "Le nombre de consignes tapées"], answer: 2, why: "La vitesse sans la qualité n'est pas une réussite." }
    ]
  }
};
