"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-ethics-legal.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-ethics-legal-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-ethics-legal",
  category: "Entrepreneurs",
  name: "Éthique, risques et aspects juridiques de l'IA",
  skills: "Repérer les risques de l'IA dans une entreprise, Vérifier l'exactitude et les biais des résultats de l'IA, Protéger les données des clients, Faire des affirmations honnêtes sur l'IA, Comprendre le droit d'auteur pour les œuvres faites avec l'IA, Rédiger une politique d'utilisation de l'IA",
  outcome: "repérer les principaux risques de l'utilisation de l'IA dans votre entreprise, mettre en place des vérifications pour l'exactitude, les biais et la vie privée, ne faire que des affirmations honnêtes sur l'IA, comprendre les bases du droit d'auteur pour les œuvres faites avec l'IA, et rédiger une politique d'utilisation de l'IA d'une page pour votre entreprise.",
  about: [
    "L'IA peut faire gagner beaucoup de temps à une petite entreprise, mais elle apporte de vrais risques : réponses fausses, résultats injustes, fuites de données de clients, marketing trompeur et surprises en matière de droit d'auteur. Ce cours s'adresse aux patrons qui veulent utiliser l'IA de façon responsable et éviter les ennuis.",
    "Au chapitre 1, vous découvrirez les principaux risques, comment vérifier l'exactitude et les biais du travail de l'IA, et comment protéger les données des clients. Au chapitre 2, vous verrez ce que disent les agences américaines sur les affirmations marketing concernant l'IA, les recommandations et les avis, et sur le droit d'auteur des œuvres générées par l'IA. Vous terminerez en rédigeant une politique d'utilisation de l'IA pour votre entreprise.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche pratique. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin. Les points juridiques ont été vérifiés sur les pages officielles du gouvernement américain (ftc.gov et copyright.gov) et sont indiqués dans chaque leçon. Ce cours est une formation, pas un conseil juridique : les lois changent et diffèrent selon les États et les pays, alors parlez de votre situation à un avocat."
  ],
  finalTask: "Rédigez une politique d'utilisation de l'IA d'une page pour votre entreprise qui couvre : les outils d'IA approuvés, les informations qui ne doivent jamais y entrer, les résultats qui demandent une vérification humaine (faits, argent, droit, santé, tout ce que voient les clients), comment vous faites des affirmations honnêtes sur l'IA et signalez les recommandations payées, comment vous gérez le droit d'auteur des contenus faits avec l'IA, à qui demander en cas de doute (y compris un avocat), et quand vous réviserez la politique.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises aux États-Unis qui utilisent déjà, ou comptent utiliser, l'IA pour le marketing, le service client, le recrutement ou le contenu, et qui veulent le faire de façon responsable.",
    startingPoint: "Ils utilisent un ou plusieurs outils d'IA pour des tâches de l'entreprise. Peu ont une liste écrite des risques, une étape de vérification, des règles pour les données des clients, ou une idée de base des règles publicitaires de la FTC (l'agence américaine de protection des consommateurs) et du droit d'auteur pour les œuvres faites avec l'IA.",
    gap: "L'IA peut produire des faits faux, des résultats injustes, des fuites de données, des affirmations trompeuses et des surprises de droit d'auteur, et l'entrepreneur est responsable de tout cela. Les entrepreneurs ont besoin de vérifications simples et d'une politique écrite d'utilisation de l'IA pour garder la confiance des clients et éviter les problèmes juridiques.",
    constraints: [
      "Des mots simples ; c'est une formation, pas un conseil juridique, et les lois varient selon l'État et le pays",
      "Appareils : un téléphone ou un ordinateur avec les outils d'IA actuels de l'entrepreneur et son site ou ses pages sur les réseaux sociaux",
      "Temps : environ cinq minutes par leçon, plus la relecture des propres documents de l'entrepreneur",
      "Les points juridiques reposent seulement sur les pages officielles de ftc.gov et copyright.gov citées dans les leçons",
      "Aucune vraie donnée de client utilisée dans les exercices"
    ],
    prerequisites: "« Introduction à l'IA pour les entrepreneurs », ou l'utilisation régulière d'outils d'IA dans l'entreprise."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'au moins trois usages de l'IA dans votre entreprise", action: "lister les principaux risques de l'IA qui s'appliquent et noter la gravité de chacun", standard: "avec une vérification écrite pour chaque risque grave" },
    { id: "O2", condition: "À partir d'un résultat de l'IA que voient les clients ou qui influence une décision", action: "vérifier le résultat pour repérer les faits faux, les calculs faux, les affirmations impossibles à prouver et les résultats injustes", standard: "avec une étape de vérification écrite, en laissant à une personne les décisions d'embauche, de prêt et de logement" },
    { id: "O3", condition: "À partir des informations sur les clients que vous détenez", action: "écrire une liste de ce qui ne va jamais dans l'IA et vérifier les réglages de confidentialité de votre principal outil d'IA", standard: "en suivant les cinq principes de la FTC sur les données" },
    { id: "O4", condition: "À partir de votre site ou de vos publications sur les réseaux sociaux", action: "marquer chaque affirmation sur l'IA ou sur les résultats à garder, à corriger ou à retirer, et vérifier les publications payées et les avis", standard: "pour que chaque affirmation soit vraie et prouvable, chaque publication payée clairement signalée et aucun avis faux ou acheté" },
    { id: "O5", condition: "À partir des éléments de l'entreprise créés avec l'IA", action: "expliquer qui peut posséder une œuvre assistée par l'IA et prévoir le travail créatif humain que vous ajouterez", standard: "en notant tout élément qui demande l'avis d'un avocat" },
    { id: "O6", condition: "Pour votre propre entreprise", action: "rédiger une politique d'utilisation de l'IA d'une page avec les sept parties", standard: "en nommant le responsable, quand demander l'avis d'un avocat et une date de révision" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Connaître les risques et vérifier le travail",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les principaux risques de l'IA dans une entreprise",
          minutes: 5,
          goal: "Nommer les principaux risques de l'IA et trouver où ils apparaissent dans votre entreprise.",
          text: [
            "Cinq risques reviennent sans cesse. L'exactitude : l'IA peut inventer des faits, des prix ou des règles. L'équité : l'IA peut traiter injustement des groupes de personnes à cause de tendances dans ce qu'elle a appris. La vie privée : les données de clients que vous saisissez peuvent être conservées ou utilisées. L'honnêteté : les affirmations marketing sur l'IA, ou les avis faits par l'IA, peuvent tromper. La propriété : à qui appartient une œuvre faite avec l'IA, et copie-t-elle celle de quelqu'un d'autre ?",
            "Être éthique avec l'IA, c'est être honnête, juste et prudent avec les informations des gens, et garder une personne responsable. En général, faire ce qui est éthique vous garde aussi du bon côté de la loi.",
            "Faites une liste des risques de votre entreprise : où vous utilisez l'IA, ce qui pourrait mal tourner, la gravité, et la vérification que vous allez ajouter."
          ],
          steps: ["Listez chaque endroit où vous utilisez ou prévoyez d'utiliser l'IA.", "Pour chacun, demandez-vous lesquels des cinq risques s'appliquent.", "Évaluez la gravité d'une erreur : faible, moyenne ou élevée.", "Écrivez une vérification pour chaque risque moyen ou élevé."],
          words: [["Éthique", "les idées sur ce qui est juste et équitable."], ["Risque", "quelque chose qui pourrait mal tourner, et le tort que cela causerait."], ["Biais", "des résultats injustes pour certains groupes de personnes."]],
          slides: [
            { title: "Cinq risques de l'IA", bullets: ["Exactitude : faits inventés", "Équité : résultats injustes", "Vie privée : données des clients", "Honnêteté et propriété"] },
            { title: "Une utilisation éthique de l'IA", bullets: ["Honnête, juste, prudente avec les données", "Une personne reste responsable", "L'éthique vous garde aussi en règle"] },
            { title: "Votre liste des risques", bullets: ["Où vous utilisez l'IA", "Ce qui pourrait mal tourner, et la gravité", "Une vérification par risque sérieux"] }
          ],
          tryIt: "Faites une liste des risques avec au moins trois usages de l'IA dans votre entreprise. Indiquez lesquels des cinq risques s'appliquent, évaluez chacun, et écrivez une vérification pour les plus sérieux.",
          youCanNow: "nommer les principaux risques de l'IA et les relier à votre propre entreprise.",
          quickCheck: [
            { objective: "O1", q: "Lequel est un risque pour la vie privée lié à l'IA dans une entreprise ?", options: ["Des détails sur les clients qui fuient par un outil d'IA", "L'IA qui écrit trop lentement", "Un outil qui coûte de l'argent", "L'IA qui fait des phrases longues"], answer: 0, why: "Mettre des données de clients dans des outils d'IA peut les exposer." },
            { objective: "O1", q: "Votre chatbot IA répond aux questions des clients sur la livraison. Comment le traitez-vous dans votre liste de risques ?", options: ["Ne pas l'inscrire ; ce n'est qu'un chatbot", "L'inscrire, noter sa gravité et écrire une vérification contre les mauvaises réponses", "Désactiver toute l'IA", "Laisser les clients trouver les erreurs"], answer: 1, why: "Tout ce que voient les clients va dans la liste des risques avec une vérification." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vérifier l'exactitude et l'équité du travail de l'IA",
          minutes: 5,
          goal: "Mettre en place une étape de vérification humaine qui repère les faits faux et les résultats injustes.",
          text: [
            "Tout ce que l'IA produit et qu'un client verra, ou qui touche à l'argent, au droit, à la santé ou à la sécurité, demande une vérification humaine. Vérifiez les faits avec vos propres documents ou des sources officielles, refaites les calculs et retirez toute affirmation que vous ne pouvez pas prouver.",
            "Vérifiez aussi l'équité. Si vous utilisez l'IA pour trier des candidats à un emploi, fixer des prix, accepter des clients ou rédiger des offres d'emploi, regardez si elle traite les gens différemment selon l'origine, le sexe, l'âge, le handicap, la religion, la nationalité ou des critères similaires. Les lois contre la discrimination s'appliquent toujours quand un ordinateur aide à prendre la décision.",
            "Pour les décisions à fort enjeu, comme embaucher, licencier, prêter de l'argent, louer un logement ou tout ce qui touche à la santé, ne laissez pas l'IA décider. Utilisez-la pour organiser l'information, laissez la décision à une personne, et parlez à un avocat des règles qui s'appliquent à vous."
          ],
          steps: ["Marquez les résultats de l'IA que voient les clients ou qui touchent à l'argent, au droit, à la santé ou à la sécurité.", "Pour ceux-là, vérifiez à chaque fois les faits, les calculs et les affirmations.", "Regardez si les décisions aidées par l'IA font des différences injustes entre des groupes.", "Laissez les décisions à fort enjeu à une personne.", "Demandez à un avocat les règles pour l'embauche, le crédit ou le logement."],
          words: [["Vérification humaine", "une personne vérifie le travail de l'IA avant qu'il soit utilisé."], ["Décision à fort enjeu", "un choix qui touche sérieusement l'emploi, l'argent, le logement ou la santé de quelqu'un."], ["Discrimination", "traiter des gens injustement à cause de qui ils sont."]],
          slides: [
            { title: "Ce qui demande une vérification humaine", bullets: ["Tout ce que voient les clients", "Tout ce qui touche à l'argent, au droit, à la santé ou à la sécurité"] },
            { title: "Vérifiez l'équité", bullets: ["Embauche, prix, acceptations, offres d'emploi", "Des résultats différents selon les groupes ?", "Les lois contre la discrimination s'appliquent toujours"] },
            { title: "Fort enjeu = une personne décide", bullets: ["Embauche, licenciement, crédit, logement, santé", "L'IA organise ; une personne décide", "Demandez les règles à un avocat"] }
          ],
          tryIt: "Choisissez un résultat de l'IA que voient vos clients. Vérifiez les faits, les calculs, les affirmations impossibles à prouver et les formulations injustes. Écrivez l'étape de vérification que vous utiliserez à chaque fois.",
          youCanNow: "vérifier l'exactitude et l'équité du travail de l'IA avant qu'il touche les clients ou les décisions.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un biais dans un résultat de l'IA ?", options: ["Une faute de frappe", "Une réponse lente", "Un résultat injuste envers certains groupes", "Une réponse courte"], answer: 2, why: "Un biais signifie que l'IA traite injustement certains groupes de personnes." },
            { objective: "O2", q: "L'IA classe pour vous des candidats à un emploi. Que faites-vous ?", options: ["Embaucher le premier nom", "Rejeter la moitié du bas", "Laisser l'IA envoyer les résultats par e-mail", "Vérifier si le classement est injuste et prendre vous-même la décision"], answer: 3, why: "Une personne prend les décisions d'embauche, et les lois contre la discrimination s'appliquent toujours." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Protéger les données des clients",
          minutes: 5,
          goal: "Décider quelles données peuvent entrer ou non dans les outils d'IA, en suivant les cinq principes de la FTC.",
          text: [
            "Le guide de la FTC (l'agence américaine de protection des consommateurs) pour les entreprises sur la protection des informations personnelles a cinq principes : faire l'inventaire (savoir quelles informations personnelles vous avez), réduire (ne garder que ce dont vous avez besoin), verrouiller (protéger ce que vous gardez), éliminer (vous débarrasser de ce dont vous n'avez plus besoin) et prévoir (avoir un plan en cas de problème de sécurité).",
            "Appliquez-les à l'IA. Ne mettez pas de numéros de sécurité sociale, de numéros de carte ou de compte, de mots de passe, de détails de santé ou de listes complètes de contacts clients dans les outils de conversation d'IA. Utilisez des espaces réservés ou des résumés. Vérifiez les paramètres de confidentialité et les conditions de chaque outil, et préférez les offres professionnelles qui s'engagent à ne pas entraîner l'IA avec vos données si vous devez utiliser des informations de clients.",
            "Soyez honnête dans votre propre politique de confidentialité : si vous utilisez des outils d'IA qui traitent des informations de clients, dites-le. Les lois sur la vie privée diffèrent selon les États et les pays ; demandez à un avocat ce qui s'applique à vous."
          ],
          steps: ["Faites l'inventaire : listez les informations de clients que vous détenez.", "Réduisez : arrêtez de collecter ce dont vous n'avez pas besoin.", "Écrivez une liste « jamais dans l'IA » : numéros d'identité, de carte et de compte, mots de passe, détails de santé.", "Vérifiez les paramètres de confidentialité et les conditions de chaque outil d'IA.", "Faites un court plan de ce que vous ferez en cas de fuite de données."],
          words: [["Informations personnelles", "des détails qui identifient une personne, comme un nom avec une adresse, des numéros d'identité ou de carte."], ["Politique de confidentialité", "un texte qui dit aux clients quelles données vous collectez et comment vous les utilisez."], ["Incident de sécurité", "quand des données sont perdues, volées ou vues par quelqu'un qui ne devrait pas les voir."]],
          slides: [
            { title: "Les cinq principes de la FTC", bullets: ["Faire l'inventaire, réduire", "Verrouiller, éliminer", "Prévoir"] },
            { title: "Jamais dans les outils de conversation d'IA", bullets: ["Numéros d'identité, de carte ou de compte", "Mots de passe et détails de santé", "Listes complètes de contacts clients"] },
            { title: "Un usage plus sûr", bullets: ["Espaces réservés et résumés", "Vérifiez paramètres et conditions", "Offres pro qui n'entraînent pas l'IA avec vos données"] },
            { title: "Soyez honnête", bullets: ["Dites-le dans votre politique de confidentialité", "Les lois varient ; demandez à un avocat"] }
          ],
          sources: [{ name: "FTC : protéger les informations personnelles, guide pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Faites l'inventaire des informations de clients que vous détenez, écrivez votre liste « jamais dans l'IA », et vérifiez les paramètres de confidentialité de l'outil d'IA que vous utilisez le plus.",
          youCanNow: "décider quelles données de clients peuvent entrer dans les outils d'IA et protéger le reste.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire « réduire » dans les principes de la FTC sur les données ?", options: ["Ne garder que les informations dont vous avez besoin", "Utiliser des polices plus petites", "Embaucher moins de personnel", "Supprimer votre site"], answer: 0, why: "Garder moins de données veut dire qu'il y en a moins à perdre." },
            { objective: "O3", q: "Vous voulez que l'IA résume les e-mails des clients. Que vérifiez-vous d'abord ?", options: ["La vitesse de l'outil", "Les conditions de confidentialité de l'outil et ses réglages d'entraînement sur vos données", "Les couleurs de l'outil", "Rien"], answer: 1, why: "Sachez comment un outil stocke et utilise les données avant d'y mettre des informations sur les clients." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître les risques et vérifier le travail",
        questions: [
          { objective: "O1", q: "Lequel est un risque d'exactitude ?", options: ["L'IA utilise vos couleurs de marque", "L'IA invente un prix que vous n'avez jamais fixé", "L'IA écrit un court e-mail", "L'IA fait une liste"], answer: 1, why: "Les faits inventés sont le risque d'exactitude." },
          { objective: "O2", q: "Vous utilisez l'IA pour trier des candidatures. Que devez-vous vérifier en plus ?", options: ["La météo", "Seulement la police", "Rien, l'IA est neutre", "Si elle traite injustement des groupes de personnes"], answer: 3, why: "Les lois contre la discrimination s'appliquent toujours quand l'IA aide à décider." },
          { objective: "O2", q: "Qui doit prendre une décision d'embauche ?", options: ["Une personne, l'IA ne faisant qu'organiser l'information", "L'IA seule", "Un outil au hasard", "Le candidat"], answer: 0, why: "Les décisions à fort enjeu restent à une personne." },
          { objective: "O3", q: "Lequel fait partie des cinq principes de la FTC sur les données ?", options: ["Partager les données avec tous les outils", "Tout collecter pour toujours", "Réduire : ne garder que ce dont vous avez besoin", "Ne jamais prévoir"], answer: 2, why: "Réduire fait partie des cinq." },
          { objective: "O3", q: "Qu'est-ce qui ne doit jamais aller dans un outil de conversation d'IA ?", options: ["Un résumé sans noms", "Vos horaires d'ouverture", "Le numéro de carte d'un client", "Votre liste de services"], answer: 2, why: "Les numéros de carte sont des informations personnelles sensibles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Affirmations honnêtes, propriété et votre politique",
      lessons: [
        {
          objectives: ["O4"],
          title: "Affirmations honnêtes sur l'IA, recommandations et avis",
          minutes: 5,
          goal: "Vérifier votre marketing pour repérer les affirmations trompeuses sur l'IA, les recommandations non signalées et les faux avis.",
          text: [
            "La FTC dit que la publicité doit être vraie, non trompeuse et appuyée par des preuves, et cela s'applique aux affirmations sur l'IA. Ne dites pas que votre produit « utilise l'IA » si ce n'est pas le cas, et n'exagérez pas ce que fait l'IA ou sa précision. En 2026, la FTC a finalisé des décisions contre des entreprises qui affirmaient que leur service marketing par IA écoutait les conversations des gens via des appareils connectés, ce qui était faux.",
            "Si vous payez quelqu'un ou lui donnez des produits gratuits pour vous promouvoir, ce lien doit être signalé clairement, par exemple « #pub » au début d'une publication ou dans la vidéo elle-même. Vous êtes responsable de ce que disent vos promoteurs.",
            "La règle de la FTC sur les faux avis interdit les faux avis et témoignages, y compris les avis générés par l'IA attribués à des personnes qui n'existent pas, et interdit les récompenses données seulement pour des avis positifs. Parlez à un avocat si vous n'êtes pas sûr qu'une affirmation ou une campagne soit autorisée."
          ],
          steps: ["Listez chaque affirmation de votre marketing sur l'IA ou les résultats.", "Ne gardez que les affirmations vraies que vous pouvez prouver.", "Vérifiez que chaque promotion payée ou offerte est clairement signalée.", "Assurez-vous que chaque avis est réel et n'a pas été obtenu contre une récompense pour une bonne note.", "Demandez à un avocat en cas de doute."],
          words: [["Justifier", "appuyer une affirmation par des preuves."], ["Lien significatif", "un lien comme un paiement ou des produits gratuits entre une entreprise et quelqu'un qui en fait la promotion."]],
          slides: [
            { title: "Des affirmations honnêtes sur l'IA", bullets: ["Vraies, non trompeuses, avec des preuves", "Pas de « utilise l'IA » si c'est faux", "Pas de précision exagérée"] },
            { title: "Exemple de sanction de la FTC", bullets: ["Décisions de 2026 sur un service publicitaire par IA", "Il disait utiliser des données vocales ; c'était faux"] },
            { title: "Recommandations et avis", bullets: ["Signalez clairement toute promotion payée ou offerte", "Les faux avis et ceux faits par l'IA sont interdits", "Pas de récompense seulement pour les avis positifs"] }
          ],
          sources: [{ name: "FTC : les bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC : décisions contre Cox Media Group et deux autres sociétés pour des affirmations marketing sur l'IA (2026, en anglais)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }, { name: "FTC : Guide sur les recommandations, questions fréquentes (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }, { name: "FTC : règle finale interdisant les faux avis et témoignages (communiqué, en anglais)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Parcourez votre site web ou vos publications. Listez chaque affirmation sur l'IA ou les résultats, et marquez-la : garder (vraie et prouvable), corriger ou retirer. Vérifiez que chaque publication payée a une mention claire.",
          youCanNow: "vérifier que votre marketing contient des affirmations honnêtes sur l'IA, des mentions correctes et de vrais avis.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui rend acceptable une affirmation sur l'IA dans une publicité selon les règles de la FTC ?", options: ["Elle semble passionnante", "Les concurrents disent la même chose", "Elle est vraie, pas trompeuse et appuyée par des preuves", "Elle est en petits caractères"], answer: 2, why: "Les règles publicitaires de la FTC s'appliquent aux affirmations sur l'IA comme à toutes les autres." },
            { objective: "O4", q: "Un créateur que vous avez payé publie sur votre boutique sans le signaler. Que faites-vous ?", options: ["Rien ; c'est sa publication", "La partager plus largement", "Le payer encore", "Lui demander d'ajouter une mention claire comme « #pub » au début"], answer: 3, why: "L'entreprise est responsable de ce que disent ses promoteurs payés." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Le droit d'auteur et les œuvres faites avec l'IA",
          minutes: 5,
          goal: "Expliquer qui peut posséder une œuvre assistée par l'IA et comment réduire les risques de copie.",
          text: [
            "Le rapport du Copyright Office des États-Unis (l'office américain du droit d'auteur) sur la protection des œuvres (janvier 2025) dit que le droit d'auteur protège la création humaine. Un contenu entièrement généré par l'IA n'est pas protégé, et écrire simplement un prompt ne fait pas de vous l'auteur du résultat. Mais utiliser l'IA comme outil n'empêche pas la protection : votre propre agencement créatif, vos retouches, ou un travail fait à la main qui se voit dans le résultat peuvent être protégés.",
            "Ce que cela veut dire pour une entreprise : si vous devez posséder quelque chose, comme votre logo, des créations de produits ou un livre, mettez-y une vraie créativité humaine et gardez une trace de ce que vous avez fait. Pour l'enregistrement d'une œuvre qui contient du contenu généré par l'IA, l'Office donne des indications sur la façon de le déclarer.",
            "L'autre risque est la copie. Un résultat de l'IA peut parfois ressembler à l'œuvre ou à la marque de quelqu'un d'autre. Ne demandez pas à l'IA de copier un artiste vivant, le logo d'une marque ou un personnage célèbre, et vérifiez les résultats importants. Le droit d'auteur lié à l'IA évolue encore, avec des procès en cours ; parlez à un avocat avant de vous appuyer sur une œuvre faite avec l'IA pour quelque chose d'important."
          ],
          steps: ["Marquez les éléments de l'entreprise que vous devez posséder (logo, créations, livres, cours).", "Pour ceux-là, ajoutez un vrai travail créatif humain et gardez des notes ou des brouillons.", "Ne demandez pas à l'IA de copier un artiste, une marque ou un personnage précis.", "Vérifiez que les résultats importants ne ressemblent pas à l'œuvre d'autres personnes.", "Parlez à un avocat avant d'enregistrer ou de vous appuyer sur une œuvre assistée par l'IA."],
          words: [["Droit d'auteur", "le droit légal de contrôler la copie d'une œuvre créative originale."], ["Création humaine", "les choix créatifs faits par une personne, que protège le droit d'auteur."], ["Enregistrer", "déposer une œuvre auprès du Copyright Office pour inscrire votre droit."]],
          slides: [
            { title: "Ce que dit le Copyright Office", bullets: ["Le droit d'auteur protège la création humaine", "Contenu entièrement généré par l'IA : non protégé", "Un prompt seul ne fait pas de vous l'auteur"] },
            { title: "L'IA comme outil, c'est possible", bullets: ["Vos retouches et votre agencement créatif peuvent être protégés", "Vos parties faites à la main visibles dans le résultat"] },
            { title: "Posséder ce qui compte", bullets: ["Ajoutez une vraie créativité humaine", "Gardez brouillons et notes", "Suivez les indications de l'Office sur l'IA"] },
            { title: "Évitez la copie", bullets: ["Ne copiez ni artistes, ni logos, ni personnages", "Le droit évolue : demandez à un avocat"] }
          ],
          sources: [{ name: "Copyright Office des États-Unis : droit d'auteur et intelligence artificielle (en anglais)", url: "https://www.copyright.gov/ai/" }, { name: "Copyright Office des États-Unis : annonce du rapport partie 2 sur la protection (janvier 2025, en anglais)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Listez trois éléments d'entreprise que vous avez créés ou prévoyez de créer avec l'IA. Pour chacun, notez si vous devez le posséder et quel travail créatif humain vous allez ajouter, et repérez ceux qui demandent l'avis d'un avocat.",
          youCanNow: "expliquer les bases du droit d'auteur pour les œuvres faites avec l'IA et réduire votre risque de copie.",
          quickCheck: [
            { objective: "O5", q: "Selon le Bureau américain du droit d'auteur (US Copyright Office), qu'est-ce qui est protégé dans une œuvre assistée par l'IA ?", options: ["Les apports créatifs humains", "Tout ce que l'IA a créé", "Seulement le prompt", "Rien du tout, jamais"], answer: 0, why: "Le travail créatif humain peut être protégé ; ce qui est entièrement généré par l'IA ne l'est pas." },
            { objective: "O5", q: "Vous devez être propriétaire de votre nouveau logo. Que faites-vous ?", options: ["Utiliser telle quelle une image faite seulement par l'IA", "Ajouter un vrai travail créatif humain, garder des traces et demander à un avocat en cas de doute", "Copier un logo célèbre", "Ne pas avoir de logo"], answer: 1, why: "Le travail créatif humain et les traces rendent la protection plus probable ; un avocat peut vous conseiller." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rédiger votre politique d'utilisation de l'IA",
          minutes: 6,
          goal: "Rédiger une politique d'utilisation de l'IA d'une page pour votre entreprise.",
          text: [
            "Une politique d'utilisation de l'IA est un court ensemble de règles sur la façon dont vous, et toute personne qui travaille avec vous, utilisez l'IA. Elle transforme tout ce cours en habitudes. Elle aide les nouveaux aides, rassure les clients et montre que vous avez été prudent si quelque chose tourne mal.",
            "Une politique simple a sept parties : les outils approuvés ; les informations à ne jamais mettre dans l'IA ; les résultats qui demandent toujours une vérification humaine ; les affirmations honnêtes et les mentions ; le droit d'auteur et la propriété ; à qui demander en cas de doute (y compris un avocat) ; et une date de révision.",
            "L'IA peut la rédiger : donnez-lui votre liste des risques et les règles de ce cours et demandez une politique d'une page avec des mots simples. Retouchez-la ensuite pour que chaque règle soit quelque chose que vous ferez vraiment, partagez-la avec toute personne qui vous aide, et révisez-la tous les six mois."
          ],
          steps: ["Rassemblez votre liste des risques, votre liste « jamais dans l'IA » et votre vérification des affirmations des leçons précédentes.", "Demandez à l'IA une politique d'une page avec les sept parties, en mots simples.", "Retouchez chaque règle pour qu'elle soit vraie pour votre entreprise.", "Partagez-la avec toute personne qui vous aide.", "Fixez une date de révision dans six mois."],
          words: [["Politique d'utilisation de l'IA", "un court ensemble de règles sur la façon dont une entreprise utilise l'IA."], ["Date de révision", "le jour où vous vérifierez et mettrez à jour la politique."]],
          slides: [
            { title: "Pourquoi une politique", bullets: ["Transforme les bonnes règles en habitudes", "Guide les aides, rassure les clients"] },
            { title: "Sept parties", bullets: ["Outils approuvés ; infos jamais dans l'IA", "Vérifications humaines ; affirmations et mentions", "Droit d'auteur ; à qui demander ; date de révision"] },
            { title: "Rendez-la réelle", bullets: ["L'IA la rédige à partir de vos notes", "Adaptez chaque règle à votre entreprise", "Partagez-la, révisez-la tous les six mois"] }
          ],
          tryIt: "Tâche finale : rédigez votre politique d'utilisation de l'IA d'une page avec les sept parties, adaptez-la à votre entreprise, et fixez une date de révision.",
          youCanNow: "encadrer l'usage de l'IA dans votre entreprise par une politique écrite, claire et honnête, et savoir quand appeler un avocat.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une politique d'utilisation de l'IA ?", options: ["Une liste des prix des outils d'IA", "Un article de blog écrit par l'IA", "Un ensemble de règles écrites sur la façon dont votre entreprise utilise l'IA", "Un contrat avec un client"], answer: 2, why: "Une politique dit à tout le monde comment l'IA est utilisée sans danger dans l'entreprise." },
            { objective: "O6", q: "Un nouvel outil d'IA sort et votre personnel veut l'utiliser. Que vous dit votre politique de faire ?", options: ["Laisser tout le monde l'essayer avec des données de clients", "Interdire toute l'IA", "Ignorer la politique", "Le vérifier par rapport à la politique avant de l'ajouter à la liste des outils approuvés"], answer: 3, why: "La politique liste les outils approuvés et dit comment en ajouter de nouveaux." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Affirmations honnêtes, propriété et votre politique",
        questions: [
          { objective: "O4", q: "Votre application n'utilise pas l'IA. Pouvez-vous la présenter comme « propulsée par l'IA » ?", options: ["Non, c'est une fausse affirmation", "Oui, tout le monde le fait", "Seulement en petits caractères", "Seulement en ligne"], answer: 0, why: "Les affirmations publicitaires, y compris sur l'IA, doivent être vraies." },
          { objective: "O4", q: "Quelle pratique d'avis la règle de la FTC interdit-elle ?", options: ["Montrer de vrais avis avec permission", "Demander des avis honnêtes aux clients", "Répondre aux avis", "Publier des avis générés par l'IA attribués à des personnes qui n'existent pas"], answer: 3, why: "La règle interdit les faux avis, y compris ceux générés par l'IA." },
          { objective: "O5", q: "Selon le Copyright Office américain, écrire un prompt fait-il de vous l'auteur du résultat de l'IA ?", options: ["Oui, toujours", "Non, un prompt seul ne suffit pas", "Seulement pour les longs prompts", "Seulement pour les images"], answer: 1, why: "L'Office dit qu'un prompt seul ne fait pas de quelqu'un l'auteur." },
          { objective: "O5", q: "Comment rendre une œuvre assistée par l'IA plus susceptible d'être protégée ?", options: ["Ajouter un vrai travail créatif humain et en garder une trace", "Utiliser plus de prompts", "Ajouter le mot « copyright »", "Utiliser un outil d'IA payant"], answer: 0, why: "Les contributions créatives humaines peuvent être protégées." },
          { objective: "O6", q: "À quelle fréquence réviser votre politique d'utilisation de l'IA ?", options: ["Seulement après un procès", "Jamais", "À une date fixée, par exemple tous les six mois", "Tous les jours"], answer: 2, why: "Les outils et les lois changent, donc des révisions régulières la gardent à jour." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Éthique, risques et aspects juridiques de l'IA",
    questions: [
      { objective: "O1", q: "Lequel ne fait PAS partie des cinq risques de l'IA de ce cours ?", options: ["L'exactitude", "L'autonomie de la batterie", "La vie privée", "L'équité"], answer: 1, why: "Les cinq sont l'exactitude, l'équité, la vie privée, l'honnêteté et la propriété." },
      { objective: "O6", q: "Être éthique avec l'IA, c'est notamment :", options: ["Collecter toutes les données possibles", "Laisser l'IA tout décider", "Cacher l'usage de l'IA à tout le monde", "Garder une personne responsable"], answer: 3, why: "Une personne reste responsable de l'usage de l'IA." },
      { objective: "O1", q: "Une liste des risques note :", options: ["Vos abonnés sur les réseaux sociaux", "Les mots de passe de vos concurrents", "Seulement le prix de vos outils", "Où vous utilisez l'IA, ce qui pourrait mal tourner, la gravité et une vérification"], answer: 3, why: "Cela rend les risques gérables." },
      { objective: "O2", q: "Quel résultat de l'IA demande une vérification humaine à chaque fois ?", options: ["Un remue-méninges privé que vous jetterez", "Une liste de prix que les clients verront", "Une liste d'idées de déjeuner", "Une blague pour vous"], answer: 1, why: "Les informations d'argent destinées aux clients doivent être vérifiées." },
      { objective: "O2", q: "Un biais dans l'IA, c'est :", options: ["Une faute d'orthographe", "Une réponse lente", "Des résultats injustes pour certains groupes", "Un type d'outil"], answer: 2, why: "C'est la définition." },
      { objective: "O2", q: "Les lois contre la discrimination s'appliquent-elles quand l'IA aide à une décision d'embauche ?", options: ["Oui", "Non, les ordinateurs sont exemptés", "Seulement pour les grandes entreprises à l'étranger", "Seulement pour les candidatures sur papier"], answer: 0, why: "La loi s'applique à la décision, quelle que soit la façon dont elle est prise." },
      { objective: "O2", q: "Pour les décisions de crédit ou de logement, l'IA doit :", options: ["Être cachée au client", "Décider seule", "Organiser l'information pendant qu'une personne décide", "Remplacer votre avocat"], answer: 2, why: "Les décisions à fort enjeu restent à une personne." },
      { objective: "O3", q: "« Faire l'inventaire » dans le guide de la FTC veut dire :", options: ["Savoir quelles informations personnelles vous avez", "Acheter des actions", "Compter seulement votre stock", "Tout supprimer"], answer: 0, why: "C'est le premier des cinq principes." },
      { objective: "O3", q: "« Éliminer » dans le guide de la FTC veut dire :", options: ["Faire un argumentaire de vente", "Se débarrasser correctement des informations dont vous n'avez plus besoin", "Lancer une balle", "Le publier en ligne"], answer: 1, why: "Les vieilles données inutiles sont un risque." },
      { objective: "O3", q: "Si vous devez utiliser des informations de clients avec un outil d'IA, préférez :", options: ["Vous les envoyer par e-mail", "N'importe quel outil gratuit sans lire les conditions", "Les publier", "Une offre dont les conditions disent qu'elle n'entraînera pas l'IA avec vos données"], answer: 3, why: "Les conditions professionnelles peuvent mieux protéger les données." },
      { objective: "O3", q: "Si des outils d'IA traitent des données de clients, votre politique de confidentialité doit :", options: ["Le dire honnêtement", "Le cacher", "Dire que vous n'utilisez jamais d'ordinateur", "Être retirée"], answer: 0, why: "L'honnêteté envers les clients est requise et éthique." },
      { objective: "O4", q: "Selon les règles publicitaires de la FTC, les affirmations doivent être :", options: ["Approuvées par un outil d'IA", "Drôles", "Courtes", "Vraies, non trompeuses et appuyées par des preuves"], answer: 3, why: "C'est la règle de la vérité dans la publicité." },
      { objective: "O4", q: "Les décisions de la FTC de 2026 vues dans ce cours portaient sur :", options: ["Les horaires d'ouverture des magasins", "Des déclarations d'impôts en retard", "De fausses affirmations sur ce que faisait un service marketing par IA", "Des retards de livraison"], answer: 2, why: "Les entreprises disaient utiliser des données vocales, ce qui était faux." },
      { objective: "O4", q: "Un influenceur que vous avez payé publie sur vous. Il doit :", options: ["Le cacher dans les commentaires", "Le signaler clairement, comme « #pub » au début", "Ne rien dire", "Le mentionner une fois par an"], answer: 1, why: "Les liens significatifs doivent être clairement signalés." },
      { objective: "O4", q: "Qui est responsable de ce que disent vos promoteurs payés sur vous ?", options: ["Personne", "Seulement le promoteur", "La plateforme", "Vous, l'entreprise"], answer: 3, why: "La FTC dit que les entreprises sont responsables des affirmations de leurs promoteurs." },
      { objective: "O4", q: "Offrir une remise seulement aux clients qui laissent un avis 5 étoiles, c'est :", options: ["Obligatoire", "Une excellente idée", "Interdit par la règle de la FTC sur les faux avis", "Acceptable si c'est signalé en tout petits caractères"], answer: 2, why: "Les récompenses liées à des avis positifs sont interdites." },
      { objective: "O5", q: "Selon le Copyright Office, un contenu entièrement généré par l'IA est :", options: ["Non protégé par le droit d'auteur", "Automatiquement à vous", "À l'IA", "Protégé pendant 100 ans"], answer: 0, why: "Le droit d'auteur exige une création humaine." },
      { objective: "O5", q: "Utiliser l'IA comme outil dans votre travail créatif :", options: ["Annule toujours le droit d'auteur", "N'empêche pas à lui seul la protection de vos contributions humaines", "Rend tout libre de droits", "Est illégal"], answer: 1, why: "L'Office dit que les œuvres assistées par l'IA peuvent être protégées là où la créativité humaine se voit." },
      { objective: "O5", q: "Quelle demande augmente le risque de copie ?", options: ["« Donne-moi des idées de logo pour une boulangerie »", "« Fais un logo exactement comme celui de [marque célèbre] »", "« Propose des couleurs pour une entreprise de ménage »", "« Écris un slogan sur le pain frais »"], answer: 1, why: "Copier le logo d'une marque peut enfreindre le droit des marques ou le droit d'auteur." },
      { objective: "O6", q: "En cas de doute sur une question juridique pour votre entreprise, vous devez :", options: ["Parler de votre situation à un avocat", "Croire tout ce que dit une IA", "L'ignorer", "Copier ce que fait un concurrent"], answer: 0, why: "Les lois changent et varient selon le lieu ; un avocat peut vous conseiller." }
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
      7,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Outils approuvés et données",
        objective: "O3",
        notYet: "Pas de liste d'outils approuvés ni de liste de ce qui ne va jamais dans l'IA.",
        meets: "Les outils approuvés sont nommés, avec une liste claire des informations qui ne doivent jamais y entrer.",
        exceeds: "Note le réglage de confidentialité vérifié dans chaque outil approuvé."
      },
      {
        name: "Vérifications humaines",
        objective: "O2",
        notYet: "Ne dit pas quels résultats doivent être vérifiés par une personne.",
        meets: "Les faits, l'argent, le juridique, la santé et tout ce que voient les clients demandent une vérification humaine.",
        exceeds: "Nomme qui vérifie et ce qu'il regarde, y compris l'équité."
      },
      {
        name: "Affirmations honnêtes et recommandations",
        objective: "O4",
        notYet: "Aucune règle sur les affirmations sur l'IA, les recommandations payées ou les avis.",
        meets: "Les affirmations doivent être vraies et prouvables ; les publications payées sont signalées ; aucun avis faux ou acheté.",
        exceeds: "Comprend les résultats de la relecture « garder, corriger ou retirer » de l'entrepreneur."
      },
      {
        name: "Droit d'auteur",
        objective: "O5",
        notYet: "Aucune règle pour le contenu fait avec l'IA.",
        meets: "Dit quand ajouter un travail créatif humain et quand demander l'avis d'un avocat sur la propriété.",
        exceeds: "Liste les principaux éléments de l'entreprise assistés par l'IA et comment chacun est traité."
      },
      {
        name: "Responsabilité et révision",
        objective: "O6",
        notYet: "Personne n'est nommé responsable, ou il n'y a pas de date de révision.",
        meets: "Nomme le responsable, quand appeler un avocat et une date de révision.",
        exceeds: "Renvoie à la liste des risques pour que chaque risque grave ait une règle."
      }
    ]
  },
  evaluation: {
    results: [
      "Les entrepreneurs qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les entrepreneurs qui adoptent leur politique d'utilisation de l'IA et la partagent avec leur personnel dans les 30 jours (enquête de suivi)",
      "Les entrepreneurs qui corrigent ou retirent au moins une affirmation trompeuse sur leur site ou leurs pages sur les réseaux sociaux",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec les outils d'IA qu'utilise l'entreprise",
      "Le site de l'entreprise, ses pages sur les réseaux sociaux et une liste des informations sur les clients qu'elle détient",
      "Un modèle de politique d'une page avec les sept parties",
      "Environ 60 à 75 minutes au total pour les leçons, les relectures, les vérifications et la politique"
    ],
    facilitatorNotes: [
      "Dites dès le début que le cours est une formation, pas un conseil juridique, et que les lois varient selon l'État et le pays.",
      "Faites relire en binômes les affirmations du site de chaque entrepreneur, en marquant garder, corriger ou retirer.",
      "N'utilisez pas de vraies données de clients pour les exercices ; utilisez plutôt les catégories de données.",
      "Gardez une liste des services locaux d'aide juridique aux petites entreprises ou d'orientation vers un avocat à partager.",
      "Notez la politique avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
