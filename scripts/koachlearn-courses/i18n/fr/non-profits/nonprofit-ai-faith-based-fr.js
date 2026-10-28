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
  chapters: [
    {
      name: "Chapitre 1 : Utiliser l'IA avec sagesse dans le ministère",
      lessons: [
        {
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
          youCanNow: "nommer les tâches du ministère où l'IA peut aider et celles qui doivent rester aux personnes."
        },
        {
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
          youCanNow: "écrire une courte série de règles d'IA pour une communauté ou un programme religieux."
        },
        {
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
          youCanNow: "retirer d'une demande les détails privés des membres et utiliser des cases à remplir à la place."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Utiliser l'IA avec sagesse dans le ministère",
        questions: [
          { q: "Quelle tâche convient bien à un assistant d'IA dans un secrétariat paroissial ?", options: ["Rédiger l'annonce de la semaine", "Accompagner un membre en deuil", "Décider qui reçoit le fonds d'entraide", "Répondre à une intention de prière confidentielle"], answer: 0, why: "Les annonces sont du travail de bureau ; le reste demande une personne de confiance." },
          { q: "Que doit contenir une note \"Comment nous utilisons l'IA\" ?", options: ["Le numéro de téléphone de chaque membre", "Une liste des prix des entreprises d'IA", "Pour quoi l'IA peut servir et ce qui n'y entre jamais", "Les mots de passe du pasteur"], answer: 2, why: "Les règles de base disent ce qui est permis et ce qui doit rester en dehors." },
          { q: "Un bénévole veut coller la liste des intentions de prière dans l'IA pour \"la mettre au propre\". Que lui dites-vous ?", options: ["Vas-y, ça fait gagner du temps", "Colle seulement la moitié", "Colle-la mais efface la discussion ensuite", "Non. Les intentions de prière sont confidentielles et restent hors de l'IA"], answer: 3, why: "Les intentions de prière sont privées et ne doivent pas être tapées dans les outils d'IA." },
          { q: "Qu'est-ce qu'une case à remplir ?", options: ["Une place réservée dans le lieu de culte", "Un repère comme [nom du membre] que vous complétez plus tard", "Une sorte d'application d'IA", "Un mot de passe"], answer: 1, why: "Les cases à remplir permettent d'obtenir de l'aide sans partager de détails privés." },
          { q: "Qui doit relire un brouillon de l'IA avant qu'il soit partagé avec la communauté ?", options: ["Personne, l'IA a toujours raison", "L'IA elle-même", "Une personne désignée et approuvée par vos responsables", "N'importe quel visiteur"], answer: 2, why: "Vos règles nomment qui relit les brouillons pour repérer les erreurs." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mettre l'IA au service de votre communauté",
      lessons: [
        {
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
          youCanNow: "rédiger avec l'IA une annonce pour votre communauté et la vérifier avant de la partager."
        },
        {
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
          youCanNow: "faire un planning de bénévoles et une liste de préparation d'événement avec l'IA en gardant les noms privés."
        },
        {
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
          youCanNow: "relire les brouillons de l'IA pour la foi, l'exactitude et le ton avant qu'ils n'atteignent votre communauté."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mettre l'IA au service de votre communauté",
        questions: [
          { q: "Quelle demande donnera le meilleur brouillon de feuille paroissiale ?", options: ["\"Écris une annonce chaleureuse de 100 mots : banque alimentaire sam. 9 h-12 h, jeunes mer. 18 h, la chorale cherche des voix.\"", "\"feuille paroissiale\"", "\"trucs d'église\"", "\"écris tout\""], answer: 0, why: "Elle donne les événements, le ton et la longueur." },
          { q: "Comment les noms doivent-ils apparaître dans un planning de bénévoles fait par l'IA ?", options: ["Sous forme de cases comme [Bénévole 1]", "Noms complets et numéros de téléphone", "Seulement prénoms et adresses", "Noms avec adresses e-mail"], answer: 0, why: "Les cases à remplir gardent les détails des bénévoles hors de l'outil d'IA." },
          { q: "L'IA a cité un texte sacré dans votre annonce. Que faites-vous ?", options: ["Vous lui faites confiance", "Vous demandez à l'IA si elle est sûre", "Vous vérifiez la citation dans votre propre texte sacré", "Vous supprimez toute l'annonce"], answer: 2, why: "L'IA peut mal citer ; vérifiez dans vos propres sources." },
          { q: "Laquelle fait partie des trois vérifications de ce cours ?", options: ["La vitesse", "Le ton", "Le prix", "La taille de la police"], answer: 1, why: "La foi, l'exactitude et le ton sont les trois vérifications." },
          { q: "Où une église américaine peut-elle apprendre les règles de l'IRS pour les organisations religieuses ?", options: ["Dans une publication sur les réseaux sociaux", "Auprès de l'assistant d'IA seul", "Dans un blog au hasard", "Dans la publication 1828 de l'IRS"], answer: 3, why: "La publication 1828 est le guide fiscal de l'IRS pour les églises et organisations religieuses." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les organisations religieuses",
    questions: [
      { q: "Quelle tâche doit rester aux personnes, pas à l'IA ?", options: ["Rédiger une liste de préparation d'événement", "Accompagner un membre en crise", "Écrire un brouillon de bulletin", "Faire un tableau de bénévoles"], answer: 1, why: "L'accompagnement pastoral demande une personne de confiance." },
      { q: "Dans le ministère, l'IA est surtout utile pour :", options: ["Le travail d'écriture et de planification", "Entendre des confessions", "Décider qui reçoit de l'aide", "Garder les secrets de prière"], answer: 0, why: "L'IA rédige des mots et des plans ; les personnes s'occupent du soin et des décisions." },
      { q: "Une bonne règle simple est :", options: ["L'IA décide, les personnes suivent", "L'IA s'occupe de tout", "Ne jamais lire les brouillons de l'IA", "L'IA aide pour les mots et les plans ; les personnes s'occupent des cœurs et des décisions"], answer: 3, why: "Cela garde le soin et le jugement aux personnes." },
      { q: "Quelle longueur pour une note \"Comment nous utilisons l'IA\" ?", options: ["Cinquante pages", "Un mot", "Environ une page avec des mots simples", "Aussi long que l'IA le veut"], answer: 2, why: "Court et simple, elle sera lue et suivie." },
      { q: "Qui doit approuver les règles de base sur l'IA ?", options: ["Seulement l'entreprise d'IA", "Un visiteur", "Votre conseil, vos anciens ou votre conseil pastoral", "Personne"], answer: 2, why: "L'accord des responsables donne de l'autorité aux règles." },
      { q: "À quelle fréquence revoir vos règles de base sur l'IA ?", options: ["Environ une fois par an", "Jamais", "Toutes les heures", "Seulement si l'IA le demande"], answer: 0, why: "Les outils changent, donc une révision annuelle garde les règles à jour." },
      { q: "Qu'est-ce qui ne doit JAMAIS être tapé dans un assistant d'IA ?", options: ["\"Fais plus court\"", "Une liste de dates d'événements", "\"Utilise un ton chaleureux\"", "L'intention de prière d'un membre avec son nom"], answer: 3, why: "Les intentions de prière et les noms sont confidentiels." },
      { q: "Pourquoi traiter une demande comme une carte postale ?", options: ["Les cartes postales sont courtes", "Quelqu'un d'autre pourrait lire ce que vous tapez", "L'IA ne lit que les cartes postales", "C'est plus rapide"], answer: 1, why: "Les outils d'IA peuvent garder ce que vous tapez." },
      { q: "Il vous faut un mot de remerciement pour le don d'un donateur. Comment faire une demande sûre ?", options: ["Mettre son nom et le montant", "Utiliser [nom du donateur] et [montant] et les remplir vous-même", "Coller le registre des offrandes", "Mettre son adresse"], answer: 1, why: "Les cases à remplir gardent les registres d'offrandes privés." },
      { q: "Votre église paie un abonnement professionnel à une IA. Faut-il y taper des questions pastorales confidentielles ?", options: ["Oui, c'est payant", "Seulement le dimanche", "Seulement si c'est court", "Non, gardez les questions pastorales confidentielles en dehors"], answer: 3, why: "Le soin confidentiel reste hors de l'IA, même avec un abonnement payant." },
      { q: "Une demande claire pour une annonce contient :", options: ["Les événements, les dates, le ton et la longueur", "Seulement le mot \"annonce\"", "Les numéros de téléphone des membres", "Le mot de passe du pasteur"], answer: 0, why: "Ces détails permettent à l'IA d'écrire un brouillon utile." },
      { q: "Après avoir reçu un brouillon, quel suivi est utile ?", options: ["\"Voici notre liste de membres.\"", "\"Décide de notre budget.\"", "\"Ajoute une ligne pour accueillir les visiteurs.\"", "\"Envoie-le à tout le monde maintenant.\""], answer: 2, why: "Il demande une amélioration claire." },
      { q: "Avant qu'une annonce soit diffusée, vous devez :", options: ["Ajouter plus de texte de l'IA", "Retirer toutes les dates", "Ne pas la relire", "Vérifier chaque date, heure et lieu"], answer: 3, why: "L'IA peut se tromper sur les faits." },
      { q: "Où ajouter les vrais noms des bénévoles ?", options: ["Dans la demande à l'IA", "Dans votre propre document après avoir copié le tableau", "Dans une publication publique", "Nulle part"], answer: 1, why: "Les noms restent dans vos propres fichiers, pas dans l'outil d'IA." },
      { q: "Une liste de préparation d'événement classe en général les tâches :", options: ["Selon le revenu des membres", "Au hasard", "Selon le temps avant l'événement, comme six semaines et deux semaines", "Seulement après l'événement"], answer: 2, why: "Partir de la date garde la préparation sur les rails." },
      { q: "L'IA utilise des mots d'une autre tradition religieuse dans votre brouillon. Vous devez :", options: ["Corriger pour que cela corresponde à votre tradition", "Laisser tel quel", "Faire voter les membres", "Publier quand même"], answer: 0, why: "La vérification de la foi garantit que cela correspond à vos croyances et à vos mots." },
      { q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Quelque chose que l'IA écrit qui semble vrai mais qui est inventé", "Une vision pendant la prière", "Une connexion internet lente", "Une sorte d'application"], answer: 0, why: "L'IA peut inventer des faits qui semblent réels." },
      { q: "Lire un brouillon à voix haute aide à vérifier :", options: ["La vitesse d'internet", "Le prix de l'IA", "Le ton", "La météo"], answer: 2, why: "L'entendre montre si cela vous ressemble." },
      { q: "Un brouillon de l'IA pour une église exonérée d'impôt soutient un candidat politique. Vous devez :", options: ["Le publier", "Le retirer et consulter la publication 1828 de l'IRS ou demander à vos responsables", "Ajouter un deuxième candidat", "L'ignorer"], answer: 1, why: "Les organismes caritatifs exonérés ont des règles de l'IRS sur les campagnes politiques." },
      { q: "Qui donne l'approbation finale avant qu'un brouillon de l'IA soit partagé ?", options: ["L'IA", "La personne la plus proche", "Personne", "La personne chargée de la relecture, approuvée par vos responsables"], answer: 3, why: "Une personne désignée repère les erreurs et garde la confiance." }
    ]
  }
};
