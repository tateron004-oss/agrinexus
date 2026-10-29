"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-faith-based.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-faith-based-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-faith-based",
  category: "Non Profits",
  name: "L'IA pour les organisations religieuses",
  skills: "Fixer des règles de base pour l'IA dans le ministère, Rédiger annonces et feuilles paroissiales, Planifier les bénévoles et les événements, Protéger la vie privée des membres, Relire les brouillons de l'IA pour la foi et le ton",
  outcome: "utiliser un assistant d'IA gratuit pour rédiger l'annonce de la semaine et un planning de bénévoles pour votre communauté ou votre programme religieux, garder privées les informations des membres, et relire chaque brouillon pour qu'il corresponde à votre tradition et à votre voix.",
  about: [
    "Ce cours s'adresse aux pasteurs, imams, rabbins, responsables de ministère, secrétaires paroissiaux et bénévoles des églises, mosquées, temples, synagogues et associations religieuses.",
    "Vous apprendrez où l'IA peut faire gagner du temps dans le travail administratif du ministère (annonces, feuilles paroissiales, plannings, bulletins, brouillons de demandes de subvention) et où elle ne doit pas être utilisée : l'accompagnement pastoral, les conversations confidentielles et les décisions sur les personnes.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Rédigez une note d'une page \"Comment nous utilisons l'IA\" pour les responsables de votre communauté, puis utilisez un assistant d'IA pour rédiger l'annonce de cette semaine et un planning de bénévoles avec des cases à remplir au lieu des noms. Relisez les deux brouillons pour l'exactitude, la foi et le ton, et marquez ce que vous avez changé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des pasteurs, imams, rabbins, responsables de ministères, personnel de secrétariat et bénévoles dans des églises, mosquées, temples, synagogues et associations confessionnelles.",
    startingPoint: "Ils rédigent à la main chaque semaine les annonces, les feuilles paroissiales et les plannings de bénévoles. Beaucoup ont entendu parler de l'IA sans l'utiliser, et certains s'inquiètent pour la vie privée et de voir l'IA se tromper sur leur foi.",
    gap: "Les écrits de secrétariat prennent des heures que les responsables préféreraient donner aux personnes. Les apprenants doivent utiliser l'IA pour les brouillons et les plannings tout en gardant privées les demandes de prière et les informations des membres, et en s'assurant que chaque brouillon correspond à leur tradition, aux faits et à leur voix.",
    constraints: [
      "Vie privée : les noms, les demandes de prière, les registres de dons, la santé, les informations sur les enfants et les coordonnées ne vont jamais dans l'IA",
      "L'accompagnement pastoral, l'écoute et les décisions sur les personnes restent à des personnes de confiance",
      "Les écritures et les enseignements se vérifient dans les textes sacrés de la communauté",
      "Les règles de l'exonération fiscale sur l'activité politique s'appliquent (IRS Publication 1828)",
      "Des mots simples ; beaucoup de bénévoles découvrent la technologie"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de tâches du ministère", action: "les trier entre « l'IA peut rédiger » et « personnes seulement »", standard: "en laissant l'accompagnement pastoral, les demandes de prière et les décisions sur les personnes à des personnes" },
    { id: "O2", condition: "Pour les responsables de votre communauté", action: "rédiger une note d'une page « Comment nous utilisons l'IA » qui répond aux quatre questions des règles de base", standard: "en mots simples, prête à être approuvée par votre conseil, vos anciens ou votre comité" },
    { id: "O3", condition: "Face à une demande qui contient des informations sur des membres", action: "la réécrire en demande sûre avec des cases à remplir", standard: "sans noms, demandes de prière, registres de dons, informations de santé ni coordonnées" },
    { id: "O4", condition: "À partir des événements de la semaine", action: "écrire une demande claire et rédiger l'annonce de la semaine avec la voix de votre communauté", standard: "avec chaque date, heure et lieu vérifiés par vous" },
    { id: "O5", condition: "À partir des rôles, des dates et du nombre de personnes nécessaires pour chacun", action: "créer avec l'IA un planning de bénévoles avec des cases à remplir au lieu des noms", standard: "avec les vrais noms ajoutés seulement dans votre propre document" },
    { id: "O6", condition: "Face à un brouillon de l'IA", action: "le relire pour la foi, l'exactitude et le ton, et corriger ce qui ne convient pas", standard: "avec les écritures vérifiées dans vos propres textes sacrés avant l'approbation par un relecteur désigné" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Utiliser l'IA avec sagesse dans le ministère",
      lessons: [
        {
          objectives: ["O1"],
          title: "Où l'IA aide une communauté, et où elle n'aide pas",
          minutes: 4,
          goal: "Trier les tâches du ministère entre \"l'IA peut rédiger\" et \"personnes seulement\".",
          text: [
            "Un assistant d'IA, comme ChatGPT, Microsoft Copilot ou Google Gemini, est un programme informatique avec lequel on discute en mots de tous les jours. Il rédige des brouillons, des listes et des plans en quelques secondes.",
            "Dans une communauté religieuse, il est utile pour le travail de bureau : annonces hebdomadaires, texte de la feuille paroissiale, bulletins, plans d'événements, messages d'inscription des bénévoles, mots de remerciement aux donateurs et premiers brouillons de demandes de subvention.",
            "Il ne doit pas remplacer les personnes dans l'accompagnement pastoral, les intentions de prière, le conseil, la confession, les conflits entre membres, ou les décisions sur qui sert ou qui reçoit de l'aide. Tout cela demande une personne de confiance, pas un programme."
          ],
          words: [["Assistant d'IA", "un programme informatique avec lequel on discute en tapant ou en parlant ; il répond par écrit."], ["Accompagnement pastoral", "le soin personnel qu'un responsable religieux donne aux membres : visites, conseil, réconfort et prière."]],
          slides: [
            { title: "L'IA peut rédiger", bullets: ["Annonces et feuilles paroissiales", "Bulletins et plans d'événements", "Messages aux bénévoles et mots de remerciement"] },
            { title: "Personnes seulement", bullets: ["Accompagnement pastoral et conseil", "Intentions de prière et échanges confidentiels", "Décisions sur les membres et sur qui reçoit de l'aide"] },
            { title: "La règle simple", bullets: ["L'IA aide pour les mots et les plans", "Les personnes s'occupent des cœurs et des décisions"] }
          ],
          tryIt: "Listez dix tâches que le secrétariat de votre communauté fait en un mois. Marquez chacune \"l'IA peut rédiger\" ou \"personnes seulement\".",
          youCanNow: "nommer les tâches du ministère où l'IA peut aider et celles qui doivent rester aux personnes.",
          quickCheck: [
            { objective: "O1", q: "Laquelle est une bonne tâche de secrétariat pour l'IA dans une communauté ?", options: ["Rédiger un message d'appel aux bénévoles", "Entendre une confession", "Décider qui reçoit de l'aide", "Régler un conflit entre des membres"], answer: 0, why: "L'IA aide pour les écrits de secrétariat ; l'accompagnement pastoral et les décisions demandent une personne de confiance." },
            { objective: "O1", q: "Un membre demande si l'IA peut l'accompagner dans son deuil. Que répondez-vous ?", options: ["Oui, l'IA est toujours disponible", "Non ; cela demande une personne de confiance, pas un programme", "Oui, si elle cite les écritures", "Seulement la nuit"], answer: 1, why: "L'écoute et l'accompagnement pastoral demandent une personne de confiance." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écrire des règles de base simples pour l'IA",
          minutes: 5,
          goal: "Écrire une courte note \"Comment nous utilisons l'IA\" que vos responsables peuvent approuver.",
          text: [
            "Avant que le personnel et les bénévoles utilisent l'IA, mettez-vous d'accord sur quelques règles simples. Cela protège tout le monde et évite les surprises.",
            "Une bonne note répond à quatre questions : pour quoi pouvons-nous utiliser l'IA ? Qu'est-ce qui ne doit jamais y entrer (noms, intentions de prière, registres des offrandes, détails de santé ou de famille) ? Qui relit les brouillons de l'IA avant de les partager ? Disons-nous aux gens quand l'IA a aidé à écrire quelque chose ?",
            "Tenez-vous à une page, avec des mots simples. Partagez-la avec votre conseil, vos anciens ou votre conseil pastoral, et revoyez-la une fois par an."
          ],
          steps: ["Listez les tâches où l'IA peut aider.", "Listez ce qui ne doit jamais être tapé dans l'IA.", "Nommez qui relit chaque brouillon de l'IA avant qu'il soit partagé.", "Décidez si et comment vous dites que l'IA a aidé.", "Faites approuver par vos responsables et fixez une date de révision annuelle."],
          words: [["Règles de base", "une courte liste de règles convenues que tout le monde suit."], ["Relecture", "lire attentivement un brouillon et le corriger avant de le partager."]],
          slides: [
            { title: "Pourquoi des règles de base", bullets: ["Chacun sait ce qui est permis", "La confiance des membres reste protégée"] },
            { title: "Quatre questions à trancher", bullets: ["Pour quoi utiliser l'IA ?", "Qu'est-ce qui n'y entre jamais ?", "Qui relit les brouillons ?", "Disons-nous que l'IA a aidé ?"] },
            { title: "Restez simple", bullets: ["Une page, des mots simples", "Approuvée par vos responsables", "Revue une fois par an"] }
          ],
          tryIt: "Rédigez la note d'une page \"Comment nous utilisons l'IA\" de votre communauté en répondant aux quatre questions. Vous pouvez demander à un assistant d'IA de rendre votre brouillon plus clair, mais écrivez les règles vous-même.",
          youCanNow: "écrire une courte série de règles d'IA pour une communauté ou un programme religieux.",
          quickCheck: [
            { objective: "O2", q: "À quelle question répond une note « Comment nous utilisons l'IA » ?", options: ["Combien gagne le pasteur", "Quels membres donnent le plus", "Qui relit les brouillons de l'IA avant leur partage", "Quelle entreprise d'IA est la meilleure"], answer: 2, why: "La note répond à : à quoi sert l'IA, ce qui n'y entre jamais, qui relit, et si vous le dites aux gens." },
            { objective: "O2", q: "Votre équipe de ministère a écrit des règles de base pour l'IA. Que faites-vous ensuite ?", options: ["Vous les gardez secrètes", "Vous en faites dix pages", "Vous laissez chaque bénévole les modifier", "Vous les présentez à votre conseil, vos anciens ou votre comité et les révisez chaque année"], answer: 3, why: "Les responsables approuvent la note, et elle est révisée une fois par an." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Garder privées les informations des membres",
          minutes: 5,
          goal: "Transformer une demande qui contient des détails privés en une demande sûre avec des cases à remplir.",
          text: [
            "Les membres vous confient des choses privées : intentions de prière, maladies, difficultés familiales, montant des offrandes, adresses et numéros de téléphone. Beaucoup d'outils d'IA peuvent garder ce que vous tapez, donc traitez une demande comme une carte postale que n'importe qui pourrait lire.",
            "Ne tapez jamais de noms, d'intentions de prière, de registres d'offrandes, de détails de santé, d'informations sur des enfants ou de coordonnées dans un assistant d'IA. Utilisez des cases à remplir comme [nom du membre] ou [montant] et complétez-les vous-même ensuite, dans votre propre document.",
            "Si votre organisation paie une version professionnelle ou éducative d'un outil d'IA, demandez à votre administrateur quels sont ses réglages de confidentialité. Même alors, gardez les questions pastorales confidentielles en dehors."
          ],
          steps: ["Écrivez ce pour quoi vous voulez l'aide de l'IA.", "Relisez pour repérer noms, montants, santé, famille et coordonnées.", "Remplacez chacun par une case à remplir comme [nom du membre].", "Envoyez la demande, puis ajoutez vous-même les vrais détails en dehors de l'outil d'IA."],
          words: [["Case à remplir", "un repère comme [nom du membre] que vous remplacez plus tard par le vrai détail."], ["Confidentiel", "une information privée confiée en confiance, qui ne doit pas être transmise."]],
          slides: [
            { title: "Une demande est une carte postale", bullets: ["Supposez que quelqu'un d'autre pourrait la lire", "Gardez la confiance de vos membres"] },
            { title: "Ne tapez jamais dans l'IA", bullets: ["Noms et coordonnées", "Intentions de prière, santé ou difficultés familiales", "Registres et montants des offrandes", "Informations sur les enfants"] },
            { title: "Utilisez des cases à remplir", bullets: ["[nom du membre], [montant], [date]", "Ajoutez vous-même les vrais détails ensuite"] }
          ],
          tryIt: "Prenez cette demande : \"Écris une carte de prompt rétablissement pour sœur Marie Dupont, opérée du cœur à l'hôpital du comté.\" Réécrivez-la avec des cases à remplir pour qu'aucun détail privé n'entre dans l'IA, puis envoyez-la.",
          youCanNow: "retirer d'une demande les détails privés des membres et utiliser des cases à remplir à la place.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi traiter une demande à l'IA comme une carte postale ?", options: ["Beaucoup d'outils d'IA peuvent garder ce que vous tapez", "Les cartes postales sont plus courtes", "L'IA imprime votre demande", "Cela rend la réponse plus aimable"], answer: 0, why: "Beaucoup d'outils d'IA peuvent garder ce que vous tapez, donc partez du principe que quelqu'un pourrait le lire." },
            { objective: "O3", q: "Vous voulez que l'IA vous aide à écrire une carte de vœux de rétablissement pour un membre hospitalisé. Que tapez-vous ?", options: ["Le nom du membre et sa maladie", "« Écris une courte carte de vœux de rétablissement pour [nom du membre] de la part de notre communauté. »", "Son numéro de chambre et son téléphone", "La demande de prière de sa famille"], answer: 1, why: "Utilisez des cases à remplir et complétez vous-même les vraies informations ensuite." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Utiliser l'IA avec sagesse dans le ministère",
        questions: [
          { objective: "O1", q: "Quelle tâche convient bien à un assistant d'IA dans un secrétariat paroissial ?", options: ["Rédiger l'annonce de la semaine", "Accompagner un membre en deuil", "Décider qui reçoit le fonds d'entraide", "Répondre à une intention de prière confidentielle"], answer: 0, why: "Les annonces sont du travail de bureau ; le reste demande une personne de confiance." },
          { objective: "O2", q: "Que doit contenir une note \"Comment nous utilisons l'IA\" ?", options: ["Le numéro de téléphone de chaque membre", "Une liste des prix des entreprises d'IA", "Pour quoi l'IA peut servir et ce qui n'y entre jamais", "Les mots de passe du pasteur"], answer: 2, why: "Les règles de base disent ce qui est permis et ce qui doit rester en dehors." },
          { objective: "O3", q: "Un bénévole veut coller la liste des intentions de prière dans l'IA pour \"la mettre au propre\". Que lui dites-vous ?", options: ["Vas-y, ça fait gagner du temps", "Colle seulement la moitié", "Colle-la mais efface la discussion ensuite", "Non. Les intentions de prière sont confidentielles et restent hors de l'IA"], answer: 3, why: "Les intentions de prière sont privées et ne doivent pas être tapées dans les outils d'IA." },
          { objective: "O3", q: "Qu'est-ce qu'une case à remplir ?", options: ["Une place réservée dans le lieu de culte", "Un repère comme [nom du membre] que vous complétez plus tard", "Une sorte d'application d'IA", "Un mot de passe"], answer: 1, why: "Les cases à remplir permettent d'obtenir de l'aide sans partager de détails privés." },
          { objective: "O2", q: "Qui doit relire un brouillon de l'IA avant qu'il soit partagé avec la communauté ?", options: ["Personne, l'IA a toujours raison", "L'IA elle-même", "Une personne désignée et approuvée par vos responsables", "N'importe quel visiteur"], answer: 2, why: "Vos règles nomment qui relit les brouillons pour repérer les erreurs." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mettre l'IA au service de votre communauté",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rédiger les annonces et la feuille paroissiale",
          minutes: 5,
          goal: "Utiliser une demande claire pour rédiger l'annonce de la semaine avec la voix de votre communauté.",
          text: [
            "Une demande claire donne un meilleur brouillon. Dites à l'IA ce dont vous avez besoin, un peu de votre communauté (sans détails privés), et comment vous voulez que ce soit écrit.",
            "Par exemple : \"Écris une annonce courte et chaleureuse pour notre feuille du dimanche. Événements : banque alimentaire samedi de 9 h à midi, groupe de jeunes mercredi à 18 h, la chorale cherche deux voix de plus. Ton amical et accueillant, moins de 120 mots.\"",
            "Puis demandez des changements : \"Fais plus court.\" \"Ajoute une ligne pour accueillir les visiteurs.\" \"Utilise des mots plus simples.\" Vérifiez vous-même chaque date, heure et lieu avant la diffusion."
          ],
          steps: ["Listez les événements avec dates, heures et lieux.", "Dites le ton et la longueur voulus.", "Demandez un brouillon à l'IA.", "Demandez un ou deux changements.", "Vérifiez chaque date, heure et lieu avec votre agenda."],
          words: [["Demande (prompt)", "ce que vous tapez ou dites à un assistant d'IA pour lui demander quelque chose."], ["Ton", "la façon dont un texte sonne : chaleureux, formel, joyeux, calme."]],
          slides: [
            { title: "Une demande claire contient", bullets: ["Ce dont vous avez besoin", "Les événements, dates et lieux", "Le ton et la longueur"] },
            { title: "Puis améliorez", bullets: ["\"Fais plus court.\"", "\"Ajoute un mot d'accueil pour les visiteurs.\"", "\"Utilise des mots plus simples.\""] },
            { title: "Avant la diffusion", bullets: ["Vérifiez chaque date et heure", "Vérifiez chaque lieu et contact", "Assurez-vous que cela vous ressemble"] }
          ],
          tryIt: "Écrivez une demande pour les vraies annonces de cette semaine dans votre communauté ou votre programme. Obtenez un brouillon, demandez un changement, puis vérifiez chaque date et heure avec votre agenda.",
          youCanNow: "rédiger avec l'IA une annonce pour votre communauté et la vérifier avant de la partager.",
          quickCheck: [
            { objective: "O4", q: "Quelles sont les trois choses qu'une demande claire pour une annonce dit à l'IA ?", options: ["Les noms, téléphones et adresses des membres", "Seulement le mot « annonce »", "Ce dont vous avez besoin, un peu sur votre communauté, et comment vous voulez que ce soit écrit", "Votre mot de passe et votre identifiant"], answer: 2, why: "Dites à l'IA ce dont vous avez besoin, parlez de votre communauté (sans détails privés) et dites comment écrire." },
            { objective: "O4", q: "Le brouillon est bien mais trop long pour la feuille paroissiale. Que demandez-vous ?", options: ["« Ajoute plus d'événements. »", "« Utilise des mots plus difficiles. »", "« Écris-le dans une autre langue. »", "« Rends-le plus court. »"], answer: 3, why: "Demandez des changements comme « Rends-le plus court » jusqu'à ce que ça convienne." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planifier les bénévoles et les événements",
          minutes: 5,
          goal: "Utiliser l'IA pour faire un planning de bénévoles avec des rôles et des cases à remplir, sans noms.",
          text: [
            "Placeurs, accueillants, aides à la garderie, équipes de la banque alimentaire et chauffeurs ont tous besoin d'un planning. L'IA peut transformer une liste de rôles et de dates en tableau clair en quelques secondes.",
            "Donnez-lui les rôles, les dates et le nombre de personnes nécessaires pour chaque rôle, et utilisez [Bénévole 1], [Bénévole 2] au lieu des vrais noms. Puis copiez le tableau dans votre propre document ou tableur et ajoutez-y les noms.",
            "L'IA peut aussi faire des listes de préparation d'événement, par exemple pour une mission d'évangélisation, un dîner de collecte de fonds ou une journée santé de quartier : quoi faire six semaines, deux semaines et un jour avant."
          ],
          steps: ["Listez les rôles et le nombre de personnes pour chacun.", "Listez les dates.", "Demandez à l'IA un tableau avec des cases [Bénévole 1], [Bénévole 2].", "Copiez-le dans votre propre document et ajoutez-y les vrais noms.", "Demandez une liste de préparation si vous organisez un événement."],
          words: [["Tableau", "des informations présentées en lignes et en colonnes."], ["Liste de contrôle", "une liste de tâches que l'on coche une fois faites."]],
          slides: [
            { title: "L'IA peut faire", bullets: ["Des plannings de bénévoles en tableau", "Des listes de préparation par semaine", "Des messages de rappel aux bénévoles"] },
            { title: "Gardez les noms à l'écart", bullets: ["Utilisez [Bénévole 1], [Bénévole 2]", "Ajoutez les vrais noms dans votre propre fichier"] },
            { title: "Liste de préparation", bullets: ["Six semaines avant", "Deux semaines avant", "La veille et le jour même"] }
          ],
          tryIt: "Demandez à un assistant d'IA un planning de quatre semaines pour trois rôles (par exemple accueil, placeur, garderie) avec deux personnes chacun, en utilisant des cases à remplir. Copiez-le dans votre propre document.",
          youCanNow: "faire un planning de bénévoles et une liste de préparation d'événement avec l'IA en gardant les noms privés.",
          quickCheck: [
            { objective: "O5", q: "Que donnez-vous à l'IA pour construire un planning de bénévoles ?", options: ["Les rôles, les dates et le nombre de personnes nécessaires pour chaque rôle", "Le numéro de téléphone de chaque bénévole", "Les registres de dons des membres", "Seulement l'adresse de l'église"], answer: 0, why: "Donnez les rôles, les dates et le nombre de personnes nécessaires, avec des cases à remplir au lieu des noms." },
            { objective: "O5", q: "Vous préparez un repas de collecte de fonds. Que peut faire l'IA pour vous ?", options: ["La liste finale des invités avec leurs noms", "Une liste de ce qu'il faut faire six semaines, deux semaines et un jour avant", "Le montant des dons des donateurs", "Les décisions sur qui fait le service"], answer: 1, why: "L'IA peut faire des listes de préparation d'événement selon le temps restant avant l'événement." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Relire les brouillons pour la foi, l'exactitude et le ton",
          minutes: 5,
          goal: "Relire un brouillon de l'IA et corriger tout ce qui ne correspond pas à votre tradition, aux faits ou à votre voix.",
          text: [
            "L'IA peut se tromper. Elle peut mal citer un texte sacré, utiliser des mots d'une autre tradition, se tromper sur une fête religieuse, ou sonner raide. Elle peut aussi inventer des faits qui semblent vrais.",
            "Relisez chaque brouillon pour trois choses : la foi (est-ce conforme à nos croyances et à nos mots ?), l'exactitude (les citations, les dates et les faits sont-ils justes ?), et le ton (est-ce que cela nous ressemble et respecte tout le monde ?). Vérifiez les textes sacrés et les enseignements dans vos propres écrits, pas dans l'IA.",
            "Si votre organisation est un organisme caritatif exonéré d'impôt aux États-Unis, les brouillons de l'IA ne doivent ni soutenir ni combattre de candidats politiques. L'IRS (le fisc américain) explique les règles pour les églises et organisations religieuses dans la publication 1828 ; ailleurs, renseignez-vous sur les règles de votre pays, et demandez à vos responsables ou à un conseiller en cas de doute."
          ],
          steps: ["Relisez pour la foi : est-ce conforme à nos croyances et à nos mots ?", "Vérifiez chaque citation, texte sacré et date dans vos propres sources.", "Lisez-le à voix haute pour le ton.", "Corrigez ce qui est faux, et notez ce que vous avez changé.", "Faites approuver par la personne chargée de la relecture."],
          words: [["Hallucination", "quand une IA écrit quelque chose qui semble vrai mais qui est inventé."], ["Exonéré d'impôt", "une organisation que l'IRS reconnaît comme ne payant pas l'impôt fédéral sur le revenu, avec des règles à respecter."]],
          sources: [{ name: "IRS, publication 1828 : guide fiscal des églises et organisations religieuses (en anglais)", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" }],
          slides: [
            { title: "L'IA peut se tromper sur la foi", bullets: ["Textes sacrés mal cités", "Mots d'une autre tradition", "Fêtes religieuses erronées ou faits inventés"] },
            { title: "Trois vérifications", bullets: ["Foi : conforme à nos croyances", "Exactitude : citations, dates, faits", "Ton : nous ressemble, respectueux"] },
            { title: "Restez dans les règles", bullets: ["Pas de soutien à des candidats politiques", "Voir la publication 1828 de l'IRS", "En cas de doute, demandez à vos responsables"] }
          ],
          tryIt: "Tâche finale : rédigez votre note \"Comment nous utilisons l'IA\", puis utilisez l'IA pour rédiger l'annonce de cette semaine et un planning de bénévoles avec des cases à remplir. Relisez les deux pour la foi, l'exactitude et le ton, et marquez ce que vous avez changé.",
          youCanNow: "relire les brouillons de l'IA pour la foi, l'exactitude et le ton avant qu'ils n'atteignent votre communauté.",
          quickCheck: [
            { objective: "O6", q: "Quelles sont les trois vérifications de relecture dans ce cours ?", options: ["Longueur, police et couleur", "Prix, date et lieu", "Foi, exactitude et ton", "Orthographe, grammaire et rapidité"], answer: 2, why: "Relisez chaque brouillon pour la foi, l'exactitude et le ton." },
            { objective: "O6", q: "Le brouillon de l'IA se trompe sur la date d'un jour saint. Que faites-vous ?", options: ["Vous laissez ; l'IA connaît les dates", "Vous demandez à l'IA si elle est sûre", "Vous retirez le jour saint du calendrier", "Vous vérifiez dans le calendrier de votre propre tradition et corrigez"], answer: 3, why: "L'IA peut se tromper sur un jour saint, donc vérifiez et corrigez vous-même." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mettre l'IA au service de votre communauté",
        questions: [
          { objective: "O4", q: "Quelle demande donnera le meilleur brouillon de feuille paroissiale ?", options: ["\"Écris une annonce chaleureuse de 100 mots : banque alimentaire sam. 9 h-12 h, jeunes mer. 18 h, la chorale cherche des voix.\"", "\"feuille paroissiale\"", "\"trucs d'église\"", "\"écris tout\""], answer: 0, why: "Elle donne les événements, le ton et la longueur." },
          { objective: "O5", q: "Comment les noms doivent-ils apparaître dans un planning de bénévoles fait par l'IA ?", options: ["Sous forme de cases comme [Bénévole 1]", "Noms complets et numéros de téléphone", "Seulement prénoms et adresses", "Noms avec adresses e-mail"], answer: 0, why: "Les cases à remplir gardent les détails des bénévoles hors de l'outil d'IA." },
          { objective: "O6", q: "L'IA a cité un texte sacré dans votre annonce. Que faites-vous ?", options: ["Vous lui faites confiance", "Vous demandez à l'IA si elle est sûre", "Vous vérifiez la citation dans votre propre texte sacré", "Vous supprimez toute l'annonce"], answer: 2, why: "L'IA peut mal citer ; vérifiez dans vos propres sources." },
          { objective: "O6", q: "Laquelle fait partie des trois vérifications de ce cours ?", options: ["La vitesse", "Le ton", "Le prix", "La taille de la police"], answer: 1, why: "La foi, l'exactitude et le ton sont les trois vérifications." },
          { objective: "O6", q: "Où une église américaine peut-elle apprendre les règles de l'IRS pour les organisations religieuses ?", options: ["Dans une publication sur les réseaux sociaux", "Auprès de l'assistant d'IA seul", "Dans un blog au hasard", "Dans la publication 1828 de l'IRS"], answer: 3, why: "La publication 1828 est le guide fiscal de l'IRS pour les églises et organisations religieuses." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les organisations religieuses",
    questions: [
      { objective: "O1", q: "Quelle tâche doit rester aux personnes, pas à l'IA ?", options: ["Rédiger une liste de préparation d'événement", "Accompagner un membre en crise", "Écrire un brouillon de bulletin", "Faire un tableau de bénévoles"], answer: 1, why: "L'accompagnement pastoral demande une personne de confiance." },
      { objective: "O1", q: "Dans le ministère, l'IA est surtout utile pour :", options: ["Le travail d'écriture et de planification", "Entendre des confessions", "Décider qui reçoit de l'aide", "Garder les secrets de prière"], answer: 0, why: "L'IA rédige des mots et des plans ; les personnes s'occupent du soin et des décisions." },
      { objective: "O1", q: "Une bonne règle simple est :", options: ["L'IA décide, les personnes suivent", "L'IA s'occupe de tout", "Ne jamais lire les brouillons de l'IA", "L'IA aide pour les mots et les plans ; les personnes s'occupent des cœurs et des décisions"], answer: 3, why: "Cela garde le soin et le jugement aux personnes." },
      { objective: "O2", q: "Quelle longueur pour une note \"Comment nous utilisons l'IA\" ?", options: ["Cinquante pages", "Un mot", "Environ une page avec des mots simples", "Aussi long que l'IA le veut"], answer: 2, why: "Court et simple, elle sera lue et suivie." },
      { objective: "O2", q: "Qui doit approuver les règles de base sur l'IA ?", options: ["Seulement l'entreprise d'IA", "Un visiteur", "Votre conseil, vos anciens ou votre conseil pastoral", "Personne"], answer: 2, why: "L'accord des responsables donne de l'autorité aux règles." },
      { objective: "O2", q: "À quelle fréquence revoir vos règles de base sur l'IA ?", options: ["Environ une fois par an", "Jamais", "Toutes les heures", "Seulement si l'IA le demande"], answer: 0, why: "Les outils changent, donc une révision annuelle garde les règles à jour." },
      { objective: "O3", q: "Qu'est-ce qui ne doit JAMAIS être tapé dans un assistant d'IA ?", options: ["\"Fais plus court\"", "Une liste de dates d'événements", "\"Utilise un ton chaleureux\"", "L'intention de prière d'un membre avec son nom"], answer: 3, why: "Les intentions de prière et les noms sont confidentiels." },
      { objective: "O3", q: "Pourquoi traiter une demande comme une carte postale ?", options: ["Les cartes postales sont courtes", "Quelqu'un d'autre pourrait lire ce que vous tapez", "L'IA ne lit que les cartes postales", "C'est plus rapide"], answer: 1, why: "Les outils d'IA peuvent garder ce que vous tapez." },
      { objective: "O3", q: "Il vous faut un mot de remerciement pour le don d'un donateur. Comment faire une demande sûre ?", options: ["Mettre son nom et le montant", "Utiliser [nom du donateur] et [montant] et les remplir vous-même", "Coller le registre des offrandes", "Mettre son adresse"], answer: 1, why: "Les cases à remplir gardent les registres d'offrandes privés." },
      { objective: "O3", q: "Votre église paie un abonnement professionnel à une IA. Faut-il y taper des questions pastorales confidentielles ?", options: ["Oui, c'est payant", "Seulement le dimanche", "Seulement si c'est court", "Non, gardez les questions pastorales confidentielles en dehors"], answer: 3, why: "Le soin confidentiel reste hors de l'IA, même avec un abonnement payant." },
      { objective: "O4", q: "Une demande claire pour une annonce contient :", options: ["Les événements, les dates, le ton et la longueur", "Seulement le mot \"annonce\"", "Les numéros de téléphone des membres", "Le mot de passe du pasteur"], answer: 0, why: "Ces détails permettent à l'IA d'écrire un brouillon utile." },
      { objective: "O4", q: "Après avoir reçu un brouillon, quel suivi est utile ?", options: ["\"Voici notre liste de membres.\"", "\"Décide de notre budget.\"", "\"Ajoute une ligne pour accueillir les visiteurs.\"", "\"Envoie-le à tout le monde maintenant.\""], answer: 2, why: "Il demande une amélioration claire." },
      { objective: "O4", q: "Avant qu'une annonce soit diffusée, vous devez :", options: ["Ajouter plus de texte de l'IA", "Retirer toutes les dates", "Ne pas la relire", "Vérifier chaque date, heure et lieu"], answer: 3, why: "L'IA peut se tromper sur les faits." },
      { objective: "O5", q: "Où ajouter les vrais noms des bénévoles ?", options: ["Dans la demande à l'IA", "Dans votre propre document après avoir copié le tableau", "Dans une publication publique", "Nulle part"], answer: 1, why: "Les noms restent dans vos propres fichiers, pas dans l'outil d'IA." },
      { objective: "O5", q: "Une liste de préparation d'événement classe en général les tâches :", options: ["Selon le revenu des membres", "Au hasard", "Selon le temps avant l'événement, comme six semaines et deux semaines", "Seulement après l'événement"], answer: 2, why: "Partir de la date garde la préparation sur les rails." },
      { objective: "O6", q: "L'IA utilise des mots d'une autre tradition religieuse dans votre brouillon. Vous devez :", options: ["Corriger pour que cela corresponde à votre tradition", "Laisser tel quel", "Faire voter les membres", "Publier quand même"], answer: 0, why: "La vérification de la foi garantit que cela correspond à vos croyances et à vos mots." },
      { objective: "O6", q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Quelque chose que l'IA écrit qui semble vrai mais qui est inventé", "Une vision pendant la prière", "Une connexion internet lente", "Une sorte d'application"], answer: 0, why: "L'IA peut inventer des faits qui semblent réels." },
      { objective: "O6", q: "Lire un brouillon à voix haute aide à vérifier :", options: ["La vitesse d'internet", "Le prix de l'IA", "Le ton", "La météo"], answer: 2, why: "L'entendre montre si cela vous ressemble." },
      { objective: "O6", q: "Un brouillon de l'IA pour une église exonérée d'impôt soutient un candidat politique. Vous devez :", options: ["Le publier", "Le retirer et consulter la publication 1828 de l'IRS ou demander à vos responsables", "Ajouter un deuxième candidat", "L'ignorer"], answer: 1, why: "Les organismes caritatifs exonérés ont des règles de l'IRS sur les campagnes politiques." },
      { objective: "O6", q: "Qui donne l'approbation finale avant qu'un brouillon de l'IA soit partagé ?", options: ["L'IA", "La personne la plus proche", "Personne", "La personne chargée de la relecture, approuvée par vos responsables"], answer: 3, why: "Une personne désignée repère les erreurs et garde la confiance." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      10,
      13,
      15
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Note « Comment nous utilisons l'IA »",
        objective: "O2",
        notYet: "La note oublie ce qui ne doit jamais entrer dans l'IA, ou qui relit.",
        meets: "Une page en mots simples qui répond aux quatre questions.",
        exceeds: "Nomme les responsables qui l'approuveront et une date de révision annuelle."
      },
      {
        name: "Annonce claire",
        objective: "O4",
        notYet: "Une date, une heure ou un lieu est faux ou manque.",
        meets: "L'annonce de la semaine rédigée à partir d'une demande claire, avec chaque détail vérifié.",
        exceeds: "Chaleureuse et accueillante, avec la voix de la communauté."
      },
      {
        name: "Planning de bénévoles confidentiel",
        objective: "O5",
        notYet: "De vrais noms ou des coordonnées sont entrés dans l'IA.",
        meets: "Un planning avec les rôles, les dates et des cases à remplir ; les noms ajoutés dans votre propre document.",
        exceeds: "Contient aussi une liste de préparation de l'événement selon le temps restant."
      },
      {
        name: "Relecture foi, exactitude et ton",
        objective: "O6",
        notYet: "Une citation, une date ou un mot venant d'une autre tradition reste dans le texte.",
        meets: "Les deux brouillons relus pour la foi, l'exactitude et le ton, avec les changements marqués.",
        exceeds: "Les écritures sont vérifiées dans votre propre texte sacré, avec la référence notée."
      },
      {
        name: "Vie privée des membres",
        objective: "O3",
        notYet: "Une demande de prière, un registre de dons ou un détail sur un membre a été tapé dans l'IA.",
        meets: "Seules des cases à remplir ont été utilisées dans chaque demande.",
        exceeds: "Peut montrer la demande sûre à côté de la demande d'origine."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Communautés dont les responsables adoptent une note « Comment nous utilisons l'IA » dans les 60 jours (enquête de suivi)",
      "Heures de secrétariat gagnées chaque semaine sur les annonces et les plannings, selon le personnel",
      "Apprenants qui commencent un autre cours Koach Learn pour les associations dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Les informations sur les événements de la semaine et une liste des rôles de bénévoles, sans noms",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Organisez la séance en présence d'un pasteur, d'un imam, d'un rabbin ou d'un responsable de ministère, pour que les règles de base soient approuvées ensemble.",
      "N'utilisez jamais de vraies demandes de prière, de registres de dons ni d'informations sur les membres dans les exercices ; utilisez des cases à remplir.",
      "Apportez votre propre texte sacré pour que les apprenants vérifient toute citation des écritures faite par l'IA.",
      "Rappelez aux communautés exonérées d'impôt les règles sur l'activité politique de l'IRS Publication 1828.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
