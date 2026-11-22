"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-consulting-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-consulting",
  category: "Entrepreneurs",
  name: "Créer une activité de conseil en IA",
  skills: "Choisir une niche de conseil, Construire des preuves avec un projet pilote, Présenter et fixer le prix de vos services, Mener un audit IA pour un client, Rédiger une proposition, Gérer les données et les contrats des clients",
  outcome: "lancer une petite activité de conseil en IA : choisir une niche, présenter trois services avec leurs prix, mener un audit IA pour une vraie petite entreprise et le transformer en une proposition d'une page avec des règles claires pour gérer les données du client.",
  about: [
    "Beaucoup de petites entreprises savent qu'elles devraient utiliser l'IA mais ne savent pas par où commencer. Un consultant en IA les aide à trouver les bons usages, à installer les outils, à former le personnel et à rester en sécurité. Vous n'avez pas besoin d'être programmeur ; vous devez comprendre les problèmes des entreprises, bien connaître les principaux outils d'IA et être honnête sur ce que l'IA peut faire et ne peut pas faire.",
    "Ce cours s'adresse aux personnes qui ont une expérience professionnelle et qui veulent proposer leur aide en IA aux petites entreprises, aux associations ou aux organisations locales. Vous choisirez une niche, construirez des preuves avec un projet pilote, présenterez et fixerez le prix de vos services, trouverez des clients, mènerez un audit IA, rédigerez une proposition et fixerez des règles pour les données et les contrats des clients.",
    "Chaque leçon dure environ cinq minutes, avec une tâche pratique. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les points fiscaux et juridiques renvoient à des sources officielles ; parlez de votre propre situation à un comptable et à un avocat."
  ],
  finalTask: "Créez votre kit de démarrage de consultant en IA : une niche et une offre en une phrase, trois formules de services avec leurs prix, un questionnaire d'audit IA de 10 questions, les résultats d'un audit pour une vraie entreprise (sans les données privées), une proposition d'une page pour cette entreprise, et vos règles écrites sur les données des clients.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes avec une expérience de l'entreprise ou du travail qui veulent proposer de l'aide en IA aux petites entreprises, aux associations ou aux organisations locales. La plupart ne sont pas programmeurs.",
    startingPoint: "Ils utilisent bien les principaux outils d'IA et connaissent au moins un secteur ou un type d'entreprise. Peu ont déjà présenté ou fixé le prix d'un service, mené un audit, écrit une proposition ou fixé des règles pour les données des clients.",
    gap: "Les petites entreprises ont besoin d'une aide en IA honnête et pratique, mais les nouveaux consultants vendent souvent des services flous, sous-estiment le prix de leur temps, promettent trop ou gèrent mal les données des clients. Les apprenants ont besoin d'une offre ciblée, de vraies preuves, de formules claires, d'un audit répétable et de règles écrites sur les données pour gagner et garder des clients.",
    constraints: [
      "Des mots simples ; aucune programmation nécessaire",
      "Appareils : un ordinateur avec un assistant IA gratuit, un tableur et l'e-mail",
      "Temps : environ cinq minutes par leçon, plus des tâches avec un client réel ou d'entraînement",
      "Les règles sur les e-mails de prospection s'appliquent ; la mise en place fiscale et juridique se vérifie auprès des sources officielles, d'un comptable et d'un avocat",
      "Les noms et les détails privés des clients sont retirés avant que des notes entrent dans l'IA"
    ],
    prerequisites: "« Les outils d'IA que tout entrepreneur devrait connaître » et « Éthique, risques et aspects juridiques de l'IA » sont recommandés."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des secteurs et des entreprises que vous connaissez", action: "écrire une offre de conseil en une phrase pour un type de client précis", standard: "en nommant qui vous aidez, le résultat et comment" },
    { id: "O2", condition: "À partir d'une entreprise prête à essayer votre aide", action: "prévoir un projet pilote avec un résultat mesurable et des chiffres avant-après", standard: "avec l'autorisation écrite du client avant de partager tout résultat" },
    { id: "O3", condition: "À partir de votre offre et de vos coûts horaires", action: "créer trois formules de services avec les livrables, le temps, ce que fournit le client et les prix", standard: "avec le calcul horaire vérifié dans un tableur, y compris le temps de vérification et de suivi" },
    { id: "O4", condition: "À partir de votre réseau et de votre niche", action: "prévoir comment contacter dix clients possibles et préparer le plan d'une courte intervention pour des patrons d'entreprise", standard: "avec des messages personnels qui incluent votre adresse et une désinscription" },
    { id: "O5", condition: "À partir d'un questionnaire d'audit de 10 questions et d'un patron d'entreprise", action: "mener un audit IA et recommander les trois meilleurs usages de l'IA", standard: "en notant les idées selon le temps gagné, le coût, la facilité et le risque, avec une protection pour chacune" },
    { id: "O6", condition: "Pour l'entreprise que vous avez auditée", action: "rédiger une proposition d'une page et vos règles sur les données des clients", standard: "avec la situation du client dans ses propres mots et les données supprimées ou rendues à la fin" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Mettre en place votre activité",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir votre niche et votre offre",
          minutes: 5,
          goal: "Écrire une offre en une phrase pour un type de client précis.",
          text: [
            "\"J'aide les entreprises avec l'IA\" est difficile à vendre. \"J'aide les restaurants indépendants à gagner 5 heures par semaine sur les commandes, les plannings et les réseaux sociaux grâce à des outils d'IA simples\" est facile à comprendre et facile à recommander.",
            "Choisissez une niche où vous avez déjà de l'expérience ou des contacts : un secteur où vous avez travaillé, une communauté dont vous faites partie, ou un type d'organisation (salons de coiffure, églises, artisans, accueil de cliniques, associations). Votre expérience passée est votre avantage sur les techniciens généralistes.",
            "Demandez de l'aide à l'IA : \"J'ai travaillé 8 ans dans [domaine]. Liste les tâches répétées des petites entreprises de ce domaine que des outils d'IA pourraient accélérer.\" Puis écrivez votre offre : qui vous aidez, quel résultat et comment."
          ],
          steps: ["Listez les secteurs ou communautés que vous connaissez bien.", "Demandez à l'IA les tâches répétées de ces domaines que l'IA pourrait accélérer.", "Choisissez une niche.", "Écrivez votre offre : qui vous aidez, quel résultat, comment."],
          words: [["Consultant", "un expert qui conseille une entreprise et l'aide à faire des changements."], ["Niche", "un type de client précis sur lequel vous vous concentrez."], ["Offre", "une phrase claire qui dit qui vous aidez, le résultat et comment."]],
          slides: [
            { title: "Ce qui est précis se vend", bullets: ["Pas \"J'aide les entreprises avec l'IA\"", "\"J'aide les restaurants indépendants à gagner 5 heures par semaine\""] },
            { title: "Utilisez ce que vous connaissez", bullets: ["Un secteur où vous avez travaillé", "Une communauté dont vous faites partie", "Votre expérience est votre avantage"] },
            { title: "Écrivez votre offre", bullets: ["Qui vous aidez", "Quel résultat", "Comment"] }
          ],
          tryIt: "Choisissez votre niche avec l'aide de l'IA et écrivez votre offre en une phrase : qui, quel résultat, comment.",
          youCanNow: "décrire une offre de conseil en IA ciblée que les clients comprennent vite.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une niche dans le conseil ?", options: ["Un type de client précis sur lequel vous vous concentrez", "Toutes les entreprises du pays", "Un type d'outil d'IA", "Votre tarif horaire"], answer: 0, why: "Une niche vous permet de bien comprendre les problèmes des clients." },
            { objective: "O1", q: "Votre offre dit « J'aide les entreprises avec l'IA ». Que faites-vous ?", options: ["La garder large", "Nommer qui vous aidez, le résultat et comment", "Ajouter la liste de tous les outils d'IA", "Retirer l'offre"], answer: 1, why: "Une bonne offre est précise pour que les clients la comprennent vite." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire des preuves avec un projet pilote",
          minutes: 5,
          goal: "Prévoir un petit projet pilote qui vous donne un vrai résultat à montrer.",
          text: [
            "Les clients veulent la preuve que vous pouvez les aider. Si vous débutez, faites un projet pilote : un petit projet court pour une entreprise (la boutique d'un ami, une association locale), à petit prix ou gratuit, en échange de l'autorisation de partager les résultats et d'un témoignage.",
            "Choisissez un pilote avec un résultat mesurable : \"Mettre en place des modèles de réponse avec l'IA et faire passer le temps passé sur les e-mails de 6 à 3 heures par semaine.\" Mesurez avant et après.",
            "Rédigez-le sous forme d'une courte étude de cas : le problème, ce que vous avez fait, le résultat en chiffres et une citation du patron. Obtenez une autorisation écrite avant de partager, et retirez tout ce qui est privé. N'inventez jamais de résultats ni de témoignages."
          ],
          steps: ["Trouvez une entreprise prête à essayer un projet pilote.", "Mettez-vous d'accord sur un résultat mesurable.", "Mesurez avant de commencer.", "Faites le travail et mesurez après.", "Rédigez une courte étude de cas avec autorisation."],
          words: [["Projet pilote", "un petit projet d'essai pour montrer que quelque chose fonctionne."], ["Étude de cas", "le court récit d'un vrai projet : problème, travail, résultat."], ["Témoignage", "ce qu'un client dit de votre travail, utilisé avec son autorisation."]],
          slides: [
            { title: "Vous débutez ? Faites un pilote", bullets: ["Une entreprise, court et petit", "Petit prix ou gratuit", "En échange : l'autorisation de partager les résultats"] },
            { title: "Mesurez-le", bullets: ["Un résultat clair", "Des chiffres avant et après"] },
            { title: "Rédigez une étude de cas", bullets: ["Problème, travail, résultat, citation", "Autorisation écrite", "N'inventez jamais de résultats"] }
          ],
          tryIt: "Écrivez un plan de projet pilote : quelle entreprise, un résultat mesurable, comment vous mesurerez avant et après, et ce que vous demandez en échange.",
          youCanNow: "prévoir un projet pilote qui devient une preuve honnête pour votre activité de conseil.",
          quickCheck: [
            { objective: "O2", q: "Que doit mesurer un projet pilote ?", options: ["Combien d'outils vous avez utilisés", "La longueur de vos e-mails", "Un résultat avec des chiffres avant et après", "Rien ; c'est gratuit"], answer: 2, why: "Un résultat mesurable fait d'un projet pilote une preuve honnête." },
            { objective: "O2", q: "Votre projet pilote a fait gagner 2 heures par semaine au client, pas les 5 que vous espériez. Que partagez-vous ?", options: ["Dire qu'il a fait gagner 5 heures", "Cacher le projet pilote", "Arrondir à 4 heures", "Le vrai résultat, avec l'autorisation du client"], answer: 3, why: "N'inventez jamais de résultats ; partagez seulement ce qui s'est vraiment passé." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Présenter et fixer le prix de vos services",
          minutes: 6,
          goal: "Créer trois formules de services avec des livrables et des prix clairs.",
          text: [
            "Les formules sont plus faciles à acheter que des heures sans limite. Un ensemble courant : un Audit IA (examiner l'entreprise et recommander les trois meilleurs usages de l'IA), une Mise en place IA (installer les outils, les modèles et des automatisations simples) et une Formation IA (former le patron et le personnel, avec des guides écrits). Certains consultants ajoutent une formule d'accompagnement mensuel.",
            "Pour chaque formule, écrivez : ce que le client reçoit, combien de temps cela prend, ce dont vous avez besoin de sa part et le prix. Fixez le prix selon la valeur et votre temps : estimez vos heures, comptez le temps de vérification et de suivi, et comparez avec ce que demandent des services semblables près de chez vous.",
            "Aux États-Unis, obtenez un EIN (numéro fiscal d'entreprise) auprès de l'IRS (l'administration fiscale américaine) si vous en avez besoin ; l'IRS dit qu'il est gratuit et met en garde contre les sites qui le font payer. En tant que travailleur indépendant, vous payez en général l'impôt sur le travail indépendant et vous pouvez devoir verser des acomptes trimestriels ; consultez irs.gov et parlez-en à un comptable."
          ],
          steps: ["Écrivez trois formules : Audit, Mise en place, Formation.", "Pour chacune : livrables, durée, ce dont vous avez besoin du client, prix.", "Estimez vos heures, y compris la vérification et le suivi.", "Comparez avec les tarifs locaux et vérifiez vos calculs.", "Consultez les bases fiscales sur irs.gov et demandez à un comptable."],
          words: [["Formule", "un service défini, avec des livrables fixés et un prix fixé."], ["Forfait mensuel (retainer)", "un montant payé chaque mois pour une aide continue."], ["EIN", "Employer Identification Number : un numéro fiscal fédéral gratuit délivré par l'IRS à une entreprise."]],
          slides: [
            { title: "Trois formules", bullets: ["Audit IA : les trois meilleurs usages de l'IA", "Mise en place IA : outils, modèles, automatisations", "Formation IA : patron et personnel, avec des guides"] },
            { title: "Chaque formule indique", bullets: ["Ce que le client reçoit", "La durée, ce dont vous avez besoin de lui", "Le prix"] },
            { title: "Installez-vous correctement", bullets: ["IRS : un EIN est gratuit ; méfiez-vous des sites payants", "Impôt des indépendants et acomptes", "Demandez à un comptable"] }
          ],
          sources: [{ name: "IRS : obtenir un numéro d'identification d'employeur (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Écrivez vos trois formules avec les livrables, la durée, ce que le client doit fournir et un prix pour chacune, et vérifiez votre calcul horaire dans un tableur.",
          youCanNow: "présenter et fixer clairement le prix de services de conseil en IA.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi vendre des formules plutôt que des heures sans limite ?", options: ["Elles sont plus faciles à comprendre et à acheter pour les clients", "Elles cachent votre prix", "Elles évitent d'avoir des livrables", "Elles demandent moins de travail"], answer: 0, why: "Des formules claires rendent l'achat simple pour les clients." },
            { objective: "O3", q: "Le prix de votre formule ne laisse aucun temps pour les questions de suivi. Que faites-vous ?", options: ["Ignorer le suivi", "Ajouter le temps de suivi à vos heures et revoir le prix", "Facturer un supplément plus tard sans prévenir le client", "Retirer les livrables"], answer: 1, why: "Le prix doit inclure le temps de vérification et de suivi." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Mettre en place votre activité",
        questions: [
          { objective: "O1", q: "Quelle offre de conseil est la plus forte ?", options: ["\"Je fais des trucs avec l'IA\"", "\"J'aide les restaurants indépendants à gagner 5 heures par semaine grâce à des outils d'IA simples\"", "\"J'aide tout le monde pour tout\"", "\"Expert en IA, appelez-moi\""], answer: 1, why: "Elle dit qui, quel résultat et comment." },
          { objective: "O1", q: "Quel est le principal avantage de choisir une niche que vous connaissez ?", options: ["Cela évite les impôts", "C'est toujours le plus rentable", "Vous n'avez pas besoin d'apprendre l'IA", "Vous comprenez les problèmes des clients mieux que les techniciens généralistes"], answer: 3, why: "L'expérience du domaine est votre avantage." },
          { objective: "O2", q: "Un client pilote accepte un petit prix. Que demandez-vous en échange ?", options: ["L'autorisation de partager les résultats et un témoignage", "Le mot de passe de sa banque", "De faux avis", "Rien"], answer: 0, why: "Un projet pilote construit des preuves honnêtes." },
          { objective: "O2", q: "Pouvez-vous inventer des résultats pour une étude de cas si le pilote s'est mal passé ?", options: ["Oui, si personne ne vérifie", "Oui, si c'est peu", "Non, n'inventez jamais de résultats", "Seulement sur les réseaux sociaux"], answer: 2, why: "Des résultats inventés sont malhonnêtes et trompeurs." },
          { objective: "O3", q: "Que dit l'IRS sur l'obtention d'un EIN ?", options: ["Seuls les avocats peuvent en obtenir un", "Il coûte 500 $", "Il est gratuit ; méfiez-vous des sites qui le font payer", "Il faut payer chaque mois"], answer: 2, why: "L'IRS délivre les EIN gratuitement." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Gagner et servir des clients",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trouver vos premiers clients",
          minutes: 5,
          goal: "Prévoir comment contacter vos dix premiers clients possibles.",
          text: [
            "Vos premiers clients viennent en général des gens qui vous connaissent déjà : anciens collègues, groupes d'entreprises locaux, votre église ou votre communauté, et les recommandations de votre projet pilote. Une courte présentation ou un atelier gratuit (\"5 façons dont l'IA peut faire gagner du temps à votre salon\") est un excellent moyen de rencontrer des patrons.",
            "Écrivez des messages personnels, pas des envois de masse. L'IA peut les rédiger : \"Écris un message de 70 mots à une patronne de salon rencontrée lors d'un événement de la chambre de commerce, pour lui proposer un bilan IA gratuit de 20 minutes. Amical, sans exagération.\" Ajoutez un vrai détail.",
            "Si vous envoyez des e-mails professionnels aux États-Unis, respectez les bases de la loi CAN-SPAM : expéditeur et objet honnêtes, votre adresse postale et un moyen clair de se désinscrire, respecté sous 10 jours ouvrables. Ne promettez pas de résultats que vous ne pouvez pas prouver."
          ],
          steps: ["Listez dix patrons ou organisations de votre niche que vous pouvez joindre.", "Prévoyez une présentation ou un atelier gratuit.", "Rédigez des messages personnels avec l'IA et ajoutez un vrai détail à chacun.", "Mettez votre adresse et un lien de désinscription dans les e-mails professionnels.", "Notez qui vous avez contacté et sa réponse."],
          words: [["Recommandation", "le conseil d'une personne qui connaît votre travail."], ["Atelier", "une courte séance où vous apprenez quelque chose d'utile à un groupe."]],
          slides: [
            { title: "Commencez par ceux qui vous connaissent", bullets: ["Anciens collègues et communauté", "Groupes d'entreprises locaux", "Recommandations de votre pilote"] },
            { title: "Enseignez pour rencontrer des patrons", bullets: ["Une courte présentation ou un atelier gratuit", "\"5 façons dont l'IA peut faire gagner du temps à votre salon\""] },
            { title: "Des contacts personnels, dans les règles", bullets: ["L'IA rédige ; vous ajoutez un vrai détail", "CAN-SPAM : lignes honnêtes, adresse, désinscription", "Aucune promesse que vous ne pouvez pas prouver"] }
          ],
          sources: [{ name: "FTC : guide de conformité à la loi CAN-SPAM pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Listez dix clients possibles, écrivez trois messages personnels avec l'aide de l'IA, et faites le plan d'une présentation de 20 minutes pour les patrons de votre niche.",
          youCanNow: "joindre vos premiers clients grâce à votre réseau, à des présentations et à des messages honnêtes.",
          quickCheck: [
            { objective: "O4", q: "D'où viennent en général les premiers clients d'un consultant ?", options: ["De listes d'e-mails achetées", "D'appels au hasard à l'étranger", "Des personnes qui vous connaissent déjà et de leurs recommandations", "De publicités payantes dès le premier jour"], answer: 2, why: "Votre réseau et les recommandations vous font confiance en premier." },
            { objective: "O4", q: "L'IA rédige un e-mail de prospection sans adresse ni désinscription. Que faites-vous ?", options: ["L'envoyer", "L'envoyer à une liste achetée", "L'allonger", "Ajouter votre adresse postale et une ligne de désinscription"], answer: 3, why: "Les e-mails de prospection professionnelle doivent contenir une adresse et une désinscription." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mener un audit IA",
          minutes: 6,
          goal: "Interroger un patron d'entreprise et recommander ses trois meilleurs usages de l'IA.",
          text: [
            "Un audit IA est un examen structuré du fonctionnement d'une entreprise et des endroits où l'IA pourrait aider. Utilisez un court questionnaire : quelles tâches prennent le plus de temps chaque semaine ? Que demandent le plus les clients ? Où se produisent les erreurs ? Quels outils utilisez-vous déjà ? Qu'est-ce qui vous inquiète dans l'IA ?",
            "À partir des réponses, notez chaque usage possible de l'IA selon le temps gagné, le coût, la facilité et le risque. L'IA peut vous aider à trier et à noter (sans le nom de l'entreprise ni ses données privées), mais c'est votre jugement qui compte le plus. Choisissez les trois meilleurs : les gains rapides d'abord.",
            "Ajoutez les risques et les protections pour chaque recommandation : qui vérifie les résultats de l'IA, quelles données doivent rester hors des outils d'IA, et ce qui demande un avocat ou un comptable. Des limites honnêtes donnent plus confiance aux clients."
          ],
          steps: ["Utilisez un questionnaire d'audit de 10 questions avec le patron.", "Listez tous les usages possibles de l'IA que vous avez entendus.", "Notez chacun selon le temps gagné, le coût, la facilité et le risque.", "Choisissez les trois meilleurs, les gains rapides d'abord.", "Ajoutez une protection à chacun : vérification humaine, règle sur les données, expert si besoin."],
          words: [["Audit IA", "un examen structuré d'une entreprise pour trouver où l'IA peut aider sans danger."], ["Gain rapide", "un changement facile à faire qui aide tout de suite."], ["Protection (garde-fou)", "une étape qui évite un dommage, comme une vérification humaine."]],
          slides: [
            { title: "Les questions de l'audit", bullets: ["Qu'est-ce qui prend le plus de temps ?", "Que demandent le plus les clients ?", "Où arrivent les erreurs ? Qu'est-ce qui vous inquiète ?"] },
            { title: "Notez et choisissez", bullets: ["Temps gagné, coût, facilité, risque", "Les trois meilleurs, gains rapides d'abord", "L'IA aide à trier ; vous jugez"] },
            { title: "Ajoutez des protections", bullets: ["Qui vérifie les résultats de l'IA", "Quelles données restent hors des outils d'IA", "Quand faire appel à un avocat ou un comptable"] }
          ],
          tryIt: "Écrivez votre questionnaire d'audit de 10 questions et utilisez-le avec un vrai patron d'entreprise (ou un ami qui joue ce rôle). Notez les idées et écrivez les trois meilleures avec leurs protections.",
          youCanNow: "mener un audit IA et donner à une entreprise trois recommandations pratiques et sûres.",
          quickCheck: [
            { objective: "O5", q: "Quelles recommandations d'audit doivent venir en premier ?", options: ["Les gains rapides, faciles et utiles tout de suite", "Les outils les plus chers", "Les idées les plus risquées", "Tout ce que l'IA propose"], answer: 0, why: "Les gains rapides créent la confiance et montrent vite la valeur." },
            { objective: "O5", q: "Vous voulez que l'IA aide à trier vos notes d'audit. Que faites-vous d'abord ?", options: ["Les coller telles quelles", "Retirer le nom de l'entreprise et les détails privés", "Les envoyer par e-mail à un ami", "Les publier en ligne"], answer: 1, why: "Les détails des clients restent hors des outils d'IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Propositions, contrats et données des clients",
          minutes: 6,
          goal: "Rédiger une proposition d'une page et vos règles pour gérer les données des clients.",
          text: [
            "Une proposition transforme votre audit en décision. Une page : la situation du client avec ses propres mots, les trois recommandations, la formule que vous proposez, ce que vous livrerez et quand, le prix, et ce dont vous avez besoin de sa part. L'IA peut la rédiger à partir de vos notes ; modifiez-la pour que chaque promesse soit une promesse que vous pouvez tenir.",
            "Obtenez un contrat écrit avant de commencer un travail payé : périmètre, prix, conditions de paiement, calendrier, à qui appartient ce que vous créez, et confidentialité. Il existe des modèles, mais faites relire le vôtre par un avocat.",
            "Écrivez des règles sur les données des clients et respectez-les : ne mettez jamais les listes de clients, les documents financiers, les mots de passe ou les informations privées d'un client dans des outils d'IA sans son autorisation écrite et un outil dont les conditions sur les données conviennent ; utilisez les comptes du client, pas les vôtres, pour les outils qui contiennent ses données ; et supprimez ou rendez ses données à la fin du projet. Le guide de la FTC (l'autorité américaine de protection des consommateurs) sur la protection des informations personnelles est une bonne base."
          ],
          steps: ["Rédigez avec l'IA une proposition d'une page à partir de vos notes d'audit.", "Vérifiez chaque promesse et chaque prix.", "Préparez un contrat écrit et faites-le relire par un avocat.", "Écrivez vos règles sur les données des clients.", "Communiquez ces règles aux clients avant de commencer."],
          words: [["Proposition", "un court document qui propose un travail précis à un prix précis."], ["Confidentialité", "le fait de garder privées les informations d'un client."], ["Périmètre", "exactement le travail qui est inclus."]],
          slides: [
            { title: "Proposition d'une page", bullets: ["Sa situation avec ses propres mots", "Trois recommandations et une formule", "Livrables, calendrier, prix"] },
            { title: "Contrat écrit", bullets: ["Périmètre, prix, paiement, calendrier", "Propriété et confidentialité", "Faites-le relire par un avocat"] },
            { title: "Règles sur les données des clients", bullets: ["Aucune donnée privée de client dans l'IA sans accord écrit", "Utilisez les comptes du client", "Supprimez ou rendez les données à la fin"] }
          ],
          sources: [{ name: "FTC : protéger les informations personnelles, guide pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Tâche finale : rédigez la proposition d'une page pour l'entreprise que vous avez auditée et vos règles sur les données des clients, puis rassemblez votre kit de démarrage de consultant : offre, formules, questionnaire, résultats de l'audit, proposition et règles sur les données.",
          youCanNow: "gagner et servir des clients en conseil IA avec des propositions, des contrats et des règles sur les données clairs.",
          quickCheck: [
            { objective: "O6", q: "Que couvre un accord de conseil écrit ?", options: ["Seulement le prix", "Vos outils préférés", "Le périmètre, le prix, le paiement, le calendrier, la propriété et la confidentialité", "La vie privée du client"], answer: 2, why: "Un accord clair évite les malentendus." },
            { objective: "O6", q: "Le projet est terminé et vous avez encore les fichiers du client. Que faites-vous ?", options: ["Les garder pour toujours", "Les utiliser pour un autre client", "Les partager comme exemple", "Les supprimer ou les rendre comme le disent vos règles sur les données"], answer: 3, why: "Les données du client doivent être supprimées ou rendues à la fin d'un projet." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Gagner et servir des clients",
        questions: [
          { objective: "O4", q: "D'où viennent en général les premiers clients d'un consultant ?", options: ["Des gens qui vous connaissent déjà et des recommandations", "De listes d'e-mails achetées", "D'appels au hasard avec des voix d'IA", "De faux avis"], answer: 0, why: "La confiance et les recommandations amènent les premiers clients." },
          { objective: "O5", q: "Quelle est une bonne question d'audit IA ?", options: ["\"Puis-je avoir votre liste de clients ?\"", "\"Quel est le mot de passe de votre banque ?\"", "\"Aimez-vous les robots ?\"", "\"Quelles tâches prennent le plus de temps chaque semaine ?\""], answer: 3, why: "Elle montre où l'IA peut faire gagner du temps." },
          { objective: "O5", q: "Quelles recommandations doivent venir en premier ?", options: ["Les projets les plus chers", "Les gains rapides, faciles et utiles tout de suite", "Les idées les plus risquées", "Ce que dit l'IA"], answer: 1, why: "Les gains rapides créent la confiance et des résultats." },
          { objective: "O6", q: "Avant de commencer un travail payé, vous devez avoir :", options: ["Un contrat écrit, relu par un avocat", "Seulement une poignée de main", "Rien", "Une publication sur les réseaux sociaux"], answer: 0, why: "Les contrats évitent les malentendus." },
          { objective: "O6", q: "Pouvez-vous coller la liste de clients d'un client dans un outil d'IA ?", options: ["Oui, si l'outil est gratuit", "Oui, à tout moment", "Seulement avec son autorisation écrite et un outil dont les conditions sur les données conviennent", "Seulement la nuit"], answer: 2, why: "Les données des clients demandent une autorisation et une protection." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer une activité de conseil en IA",
    questions: [
      { objective: "O1", q: "Un consultant en IA a surtout besoin de :", options: ["Être programmeur à plein temps", "Comprendre les problèmes des entreprises et bien connaître les outils d'IA", "Posséder un centre de données", "Avoir beaucoup d'abonnés"], answer: 1, why: "Comprendre les entreprises et connaître les outils, c'est l'essentiel." },
      { objective: "O1", q: "Une offre forte contient :", options: ["Seulement votre tarif horaire", "Seulement votre nom", "Une longue liste de tous les outils", "Qui vous aidez, le résultat et comment"], answer: 3, why: "Ces trois éléments la rendent claire." },
      { objective: "O1", q: "Une niche, c'est :", options: ["Un prix", "Un type de modèle d'IA", "Une forme juridique", "Un type de client précis sur lequel vous vous concentrez"], answer: 3, why: "Se concentrer facilite le marketing." },
      { objective: "O2", q: "Un projet pilote, c'est :", options: ["Un métier de l'aviation", "Un petit projet d'essai pour montrer que quelque chose fonctionne", "Un long contrat", "Un formulaire fiscal"], answer: 1, why: "Les pilotes construisent des preuves." },
      { objective: "O2", q: "Un projet pilote doit avoir :", options: ["Dix objectifs", "Aucun objectif", "Un résultat mesurable avec des chiffres avant et après", "Seulement un logo"], answer: 2, why: "Les chiffres rendent la preuve convaincante." },
      { objective: "O2", q: "Avant de partager une étude de cas, il vous faut :", options: ["L'autorisation écrite du client", "Rien", "L'accord de l'IA", "L'accord d'un concurrent"], answer: 0, why: "Respectez la vie privée et la confiance du client." },
      { objective: "O3", q: "Les formules valent mieux que des heures sans limite parce que :", options: ["Elles évitent les impôts", "Elles sont toujours moins chères", "Elles sont plus faciles à comprendre et à acheter pour les clients", "Elles ne demandent aucun travail"], answer: 2, why: "Des livrables et des prix clairs aident les clients à décider." },
      { objective: "O3", q: "Une formule Audit IA fournit :", options: ["Un examen de l'entreprise et les meilleures recommandations en IA", "Un nouveau site web", "Une déclaration d'impôts", "Des conseils juridiques"], answer: 0, why: "C'est le but de l'audit." },
      { objective: "O3", q: "Quand vous fixez un prix, comptez du temps pour :", options: ["Rien de plus", "La vérification et le suivi", "Seulement les déplacements", "Seulement les pauses café"], answer: 1, why: "Le temps caché mange le bénéfice." },
      { objective: "O3", q: "Aux États-Unis, les consultants indépendants paient en général :", options: ["Seulement des frais de licence", "Aucun impôt", "Seulement la taxe sur les ventes", "L'impôt sur le travail indépendant et souvent des acomptes trimestriels"], answer: 3, why: "Le centre fiscal de l'IRS pour les indépendants l'explique." },
      { objective: "O4", q: "Un court atelier gratuit vous aide à :", options: ["Rencontrer des patrons et montrer ce que vous savez", "Éviter les clients", "Collecter des mots de passe", "Sauter les propositions"], answer: 0, why: "Enseigner crée la confiance." },
      { objective: "O4", q: "Les e-mails de prospection professionnels doivent contenir :", options: ["Une garantie", "Le mot de passe du client", "Une fausse date limite", "Votre adresse postale et un moyen de se désinscrire"], answer: 3, why: "Ce sont les bases de la loi CAN-SPAM." },
      { objective: "O5", q: "Dans un audit IA, vous notez les idées selon :", options: ["Leur effet de mode", "La couleur et la police", "Le temps gagné, le coût, la facilité et le risque", "Votre outil préféré"], answer: 2, why: "Ces critères montrent quelles idées valent la peine." },
      { objective: "O5", q: "Avant de demander à l'IA de trier vos notes d'audit, vous devez :", options: ["Ajouter ses relevés bancaires", "Retirer le nom de l'entreprise et ses données privées", "Les publier en ligne", "Les envoyer à tout le monde"], answer: 1, why: "Protégez les informations du client." },
      { objective: "O5", q: "Chaque recommandation doit contenir :", options: ["Rien d'autre", "Une garantie de résultats", "Un faux témoignage", "Une protection, par exemple qui vérifie les résultats de l'IA"], answer: 3, why: "Les protections rendent l'usage de l'IA sûr." },
      { objective: "O6", q: "Une proposition doit décrire la situation du client :", options: ["Pas du tout", "Avec du jargon", "Avec ses propres mots", "Avec l'histoire d'un concurrent"], answer: 2, why: "Ses mots montrent que vous l'avez écouté." },
      { objective: "O6", q: "Un contrat écrit couvre :", options: ["Le périmètre, le prix, le paiement, le calendrier, la propriété et la confidentialité", "Seulement votre logo", "Seulement la date de début", "Rien"], answer: 0, why: "Ces points évitent les litiges." },
      { objective: "O6", q: "Qui doit relire votre modèle de contrat ?", options: ["Seulement l'IA", "Un avocat", "Les clients de votre client", "Personne"], answer: 1, why: "Les documents juridiques demandent une relecture professionnelle." },
      { objective: "O6", q: "Pour les outils qui contiennent les données d'un client, il vaut mieux utiliser :", options: ["Vos comptes personnels", "Les propres comptes du client", "Un compte public partagé", "N'importe quel outil gratuit"], answer: 1, why: "Le client garde le contrôle de ses données." },
      { objective: "O6", q: "À la fin d'un projet, les données du client doivent être :", options: ["Supprimées ou rendues", "Gardées pour toujours", "Partagées avec d'autres clients", "Publiées en ligne"], answer: 0, why: "Ne gardez pas les données dont vous n'avez plus besoin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      4,
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Niche et offre",
        objective: "O1",
        notYet: "L'offre est floue ou n'a pas de client clair.",
        meets: "Une phrase qui nomme qui, le résultat et comment.",
        exceeds: "Utilise les mots qu'emploient vraiment les clients de la niche."
      },
      {
        name: "Formules de services",
        objective: "O3",
        notYet: "Moins de trois formules, ou des prix sans calcul derrière.",
        meets: "Trois formules avec les livrables, le temps, ce que fournit le client et les prix, calculs vérifiés.",
        exceeds: "Inclut le temps de vérification et de suivi et explique la valeur pour le client."
      },
      {
        name: "Audit IA",
        objective: "O5",
        notYet: "Pas de questionnaire, ou des recommandations sans notes ni protections.",
        meets: "Un questionnaire de 10 questions, un vrai audit, les trois meilleurs usages notés avec des protections.",
        exceeds: "Les recommandations commencent par les gains rapides et indiquent le temps qu'on prévoit de gagner."
      },
      {
        name: "Proposition",
        objective: "O6",
        notYet: "La proposition est générique, ou il manque le périmètre ou le prix.",
        meets: "Une page avec la situation du client dans ses mots, le périmètre, le prix et le calendrier.",
        exceeds: "Inclut un résultat mesurable et comment il sera vérifié."
      },
      {
        name: "Règles sur les données des clients",
        objective: "O6",
        notYet: "Pas de règles écrites, ou des détails privés sont entrés dans l'IA.",
        meets: "Des règles écrites : autorisation, comptes propres au client, données supprimées ou rendues à la fin.",
        exceeds: "Couvre aussi quels outils d'IA peuvent détenir des données de clients et la vérification de leurs conditions."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui mènent un projet pilote ou un audit payant avec une vraie entreprise dans les 60 jours (enquête de suivi)",
      "Les premiers clients payants en conseil, et les clients qui reviennent ou viennent par recommandation",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un assistant IA gratuit, un tableur et l'e-mail",
      "Un vrai patron d'entreprise (ou un ami qui joue ce rôle) pour l'audit",
      "Un modèle de proposition d'une page",
      "Environ 60 à 75 minutes pour les leçons et les vérifications, plus la réunion d'audit"
    ],
    facilitatorNotes: [
      "Formez des binômes pour jouer des entretiens d'audit avant de rencontrer un vrai patron d'entreprise.",
      "Insistez sur le fait que les résultats des projets pilotes et les études de cas doivent être vrais et partagés seulement avec une autorisation écrite.",
      "Vérifiez que les noms et les détails privés des clients sont retirés avant que les notes entrent dans l'IA.",
      "Orientez les questions d'impôts et d'accords vers les sources officielles, un comptable et un avocat.",
      "Notez le kit de démarrage avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
