"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-essential-ai-tools-fr",
  lang: "fr",
  translationOf: "nonprofit-essential-ai-tools",
  category: "Non Profits",
  name: "Les outils d'IA essentiels pour les associations et comment les utiliser",
  skills: "Choisir le bon outil d'IA pour une tâche, Trouver les programmes technologiques pour associations, Résumer des réunions et des documents, Créer des affiches et des visuels avec l'IA, Construire une boîte à outils simple pour votre équipe",
  outcome: "choisir le bon outil d'IA gratuit ou à tarif associatif pour une tâche, utiliser un assistant conversationnel pour transformer des notes de réunion brutes en un résumé clair avec des actions à faire, utiliser un outil de design pour créer une affiche pour les bénévoles, et rédiger une fiche-outils d'une page que votre équipe peut suivre.",
  about: [
    "Ce cours s'adresse aux salariés et bénévoles d'associations et d'organisations religieuses qui veulent une courte liste pratique d'outils d'IA et le savoir-faire pour utiliser chacun.",
    "Vous apprendrez les quatre types d'outils d'IA dont la plupart des associations ont besoin, où trouver les programmes pour associations de Google et Microsoft, et comment faire deux vrais travaux avec l'IA : un résumé de réunion et une affiche pour recruter des bénévoles.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche pratique. Les prix et les programmes changent, donc le cours vous renvoie aux pages officielles à vérifier avant de vous inscrire. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Créez une \"fiche-outils IA\" d'une page pour votre équipe qui nomme un assistant conversationnel, une suite bureautique et un outil de design, dit à quoi sert chacun et ce qui ne doit jamais y entrer, et joignez deux choses faites avec eux : un résumé de réunion avec des actions à faire (à partir de notes sans détails privés) et une affiche de recrutement de bénévoles.",
  chapters: [
    {
      name: "Chapitre 1 : Connaître vos outils",
      lessons: [
        {
          title: "Les quatre types d'outils d'IA qu'une association utilise",
          minutes: 4,
          goal: "Associer une tâche associative au bon type d'outil d'IA.",
          text: [
            "La plupart du travail d'IA d'une association entre dans quatre types d'outils. Les assistants conversationnels (ChatGPT, Microsoft Copilot, Google Gemini) écrivent, expliquent et résument. Les suites bureautiques (Microsoft 365, Google Workspace) ont de l'IA intégrée dans la messagerie, les documents et les tableurs.",
            "Les outils de design (comme Canva ou Adobe Express) aident à créer des affiches, des publications et des diapositives, souvent avec des fonctions d'IA. Les outils de réunion et de prise de notes peuvent enregistrer ou transcrire une réunion et rédiger un résumé, mais ne les utilisez que si tous les participants sont d'accord.",
            "Commencez avec un outil de chaque type que votre organisation a déjà. Peu d'outils bien utilisés valent mieux que beaucoup d'outils utilisés une seule fois."
          ],
          words: [["Assistant conversationnel", "une IA à qui l'on écrit ou parle et qui rédige des réponses."], ["Suite bureautique", "un ensemble de programmes de travail : messagerie, documents, tableurs, diapositives."], ["Transcrire", "transformer des paroles en texte écrit."]],
          slides: [
            { title: "Quatre types d'outils d'IA", bullets: ["Assistants conversationnels : écrire, expliquer, résumer", "Suites bureautiques : l'IA dans la messagerie et les documents", "Outils de design : affiches, publications, diapositives", "Outils de réunion : transcriptions et résumés"] },
            { title: "Exemples", bullets: ["ChatGPT, Microsoft Copilot, Google Gemini", "Microsoft 365, Google Workspace", "Canva, Adobe Express"] },
            { title: "Restez simple", bullets: ["Commencez avec ce que vous avez déjà", "Un outil par type", "Enregistrer une réunion seulement avec l'accord de tous"] }
          ],
          tryIt: "Notez les outils que votre organisation utilise déjà (messagerie, documents, design). Pour chacun, indiquez auquel des quatre types il appartient.",
          youCanNow: "nommer les quatre types d'outils d'IA et associer une tâche au bon outil."
        },
        {
          title: "Trouver les programmes gratuits ou à tarif réduit pour associations",
          minutes: 5,
          goal: "Savoir à quels programmes technologiques votre organisation peut avoir droit et où faire la demande.",
          text: [
            "Les grandes entreprises technologiques ont des programmes pour les associations. Google for Nonprofits offre aux organisations caritatives enregistrées et éligibles des produits Google gratuits ou à prix réduit, dont des réductions sur Google Workspace et Google Ad Grants, qui donne aux associations qualifiées jusqu'à 10 000 $ par mois d'annonces dans la recherche Google. Google utilise un partenaire appelé Goodstack pour vérifier que vous êtes bien une association.",
            "Les offres de Microsoft pour les associations comprennent Microsoft 365 Business Basic gratuit jusqu'à 300 utilisateurs, des abonnements payants à prix réduit, et Copilot Chat inclus avec un abonnement Microsoft 365. Vous vous inscrivez et Microsoft confirme votre éligibilité.",
            "Toutes les organisations n'y ont pas droit. Le programme de Google exclut par exemple les organismes publics, les hôpitaux et les écoles. Les outils de design comme Canva ont aussi des programmes pour associations ; consultez leur page officielle pour les conditions actuelles. Les prix et les règles changent, et les offres varient selon les pays : vérifiez toujours la page officielle avant de faire la demande."
          ],
          steps: ["Préparez le nom légal, l'adresse et la preuve du statut d'organisme exonéré d'impôt de votre organisation.", "Ouvrez les pages officielles de Google for Nonprofits et de Microsoft pour les associations.", "Lisez les conditions d'éligibilité.", "Faites la demande avec une adresse e-mail de l'organisation, pas personnelle.", "Activez chaque produit séparément une fois approuvé."],
          words: [["Éligible", "qui a le droit de participer parce qu'il remplit les conditions."], ["Exonéré d'impôt", "reconnu par l'État comme ne payant pas certains impôts, comme une organisation 501(c)(3) aux États-Unis."], ["Ad Grants", "le programme de Google qui offre des annonces gratuites dans la recherche aux associations qualifiées."]],
          slides: [
            { title: "Google for Nonprofits", bullets: ["Produits Google gratuits ou à prix réduit", "Réductions sur Workspace et Ad Grants", "Ad Grants : jusqu'à 10 000 $ par mois d'annonces", "Vérification par Goodstack"] },
            { title: "Les offres de Microsoft pour associations", bullets: ["Microsoft 365 Business Basic gratuit jusqu'à 300 utilisateurs", "Abonnements payants à prix réduit", "Copilot Chat inclus avec Microsoft 365"] },
            { title: "Avant de faire la demande", bullets: ["Vérifiez l'éligibilité sur la page officielle", "Préparez la preuve d'exonération d'impôt", "Les prix et les règles changent : vérifiez d'abord"] }
          ],
          sources: [
            { name: "Google for Nonprofits (Google pour les associations)", url: "https://www.google.com/nonprofits/" },
            { name: "Google Ad Grants", url: "https://www.google.com/grants/" },
            { name: "Microsoft : offres pour les associations (en anglais)", url: "https://www.microsoft.com/en-us/nonprofits/offers-for-nonprofits" }
          ],
          tryIt: "Ouvrez les pages Google for Nonprofits et les offres de Microsoft pour les associations. Notez si votre organisation semble éligible à chacune et quelles preuves il vous faudrait.",
          youCanNow: "trouver les programmes technologiques pour associations, vérifier l'éligibilité et savoir quoi préparer pour la demande."
        },
        {
          title: "Prendre de bonnes habitudes de sécurité pour chaque outil",
          minutes: 4,
          goal: "Configurer un outil d'IA en toute sécurité pour l'usage de votre équipe.",
          text: [
            "Utilisez des comptes de l'organisation, pas des comptes personnels, pour que le travail reste à l'organisation quand un bénévole s'en va. Activez la connexion en deux étapes sur chaque compte.",
            "Apprenez où chaque outil garde votre historique de discussion et s'il peut être désactivé ou supprimé. Cherchez dans les réglages de l'outil les paramètres de confidentialité ou de données.",
            "La règle d'or est la même dans tous les outils : aucune information privée sur les donateurs, bénévoles ou bénéficiaires n'y entre, sauf si vos responsables ont approuvé cet outil pour cela. Utilisez plutôt des cases à remplir comme [nom]."
          ],
          steps: ["Connectez-vous avec un compte de l'organisation.", "Activez la connexion en deux étapes.", "Ouvrez les réglages et trouvez les paramètres de confidentialité ou de données.", "Mettez-vous d'accord en équipe : pas d'information privée, des cases à remplir."],
          words: [["Connexion en deux étapes", "une deuxième vérification, comme un code sur votre téléphone, quand vous vous connectez."], ["Historique de discussion", "l'enregistrement qu'un outil garde de vos conversations passées."]],
          slides: [
            { title: "Les comptes", bullets: ["Comptes de l'organisation, pas personnels", "Le travail reste quand les bénévoles partent"] },
            { title: "La sécurité", bullets: ["Activez la connexion en deux étapes", "Trouvez les paramètres de confidentialité dans les réglages"] },
            { title: "La règle d'or", bullets: ["Aucune info privée de donateur, bénévole ou bénéficiaire", "Utilisez des cases à remplir comme [nom]"] }
          ],
          tryIt: "Ouvrez les réglages de l'outil d'IA que vous utilisez le plus. Trouvez où il garde votre historique de discussion et les éventuels paramètres de confidentialité. Écrivez une phrase sur ce que vous avez trouvé.",
          youCanNow: "configurer un outil d'IA avec de bonnes habitudes de sécurité pour votre équipe."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître vos outils",
        questions: [
          { q: "Il vous faut une affiche pour les bénévoles. Quel type d'outil convient le mieux ?", options: ["Un outil de design", "Un tableur", "Un enregistreur de réunion", "Une calculatrice"], answer: 0, why: "Les outils de design créent des affiches et des visuels." },
          { q: "Que donne Google Ad Grants aux associations qualifiées ?", options: ["Des ordinateurs portables gratuits", "Jusqu'à 10 000 $ par mois d'annonces dans la recherche Google", "Des dons en argent", "Du personnel gratuit"], answer: 1, why: "La page officielle de Google indique jusqu'à 10 000 $ par mois d'annonces." },
          { q: "Avant d'enregistrer une réunion avec un outil de notes IA, vous devez :", options: ["Cacher l'enregistreur", "Demander seulement au président", "Obtenir l'accord de tous", "Rien"], answer: 2, why: "Les gens doivent être d'accord avant d'être enregistrés." },
          { q: "Pourquoi utiliser un compte de l'organisation plutôt qu'un compte personnel ?", options: ["C'est plus rapide à taper", "Les comptes personnels sont illégaux", "Aucune raison", "Le travail reste à l'organisation"], answer: 3, why: "Le travail n'est pas perdu quand un bénévole part." },
          { q: "Les prix et règles des programmes changent. Que faites-vous ?", options: ["Vous vérifiez la page officielle avant la demande", "Vous croyez un vieil article de blog", "Vous demandez à une IA et acceptez la réponse", "Vous devinez"], answer: 0, why: "Les pages officielles donnent les règles actuelles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire du vrai travail avec les outils d'IA",
      lessons: [
        {
          title: "Transformer des notes de réunion en résumé clair",
          minutes: 5,
          goal: "Utiliser un assistant conversationnel pour transformer des notes de réunion brutes en résumé avec des actions à faire.",
          text: [
            "Les réunions du conseil, des équipes paroissiales et des bénévoles produisent des notes en désordre. Un assistant conversationnel peut en faire un résumé propre en quelques secondes.",
            "D'abord, retirez les détails privés : pas de noms de bénéficiaires, de problèmes de santé ni de montants de dons. Utilisez plutôt les rôles : \"le trésorier\", \"la responsable jeunesse\". Puis collez les notes avec cette demande : \"Résume ces notes de réunion en 5 points. Puis liste les actions à faire dans un tableau avec : tâche, qui (par rôle) et date limite.\"",
            "Comparez le résumé avec vos notes. L'IA peut oublier une décision ou inventer une date limite. Corrigez, puis ajoutez vous-même les vrais noms avant de partager."
          ],
          steps: ["Retirez les détails privés ; utilisez les rôles plutôt que les noms.", "Collez les notes dans l'assistant conversationnel.", "Demandez un résumé en 5 points et un tableau des actions à faire.", "Vérifiez chaque décision et chaque date avec vos notes.", "Ajoutez vous-même les vrais noms, puis partagez."],
          words: [["Action à faire", "une tâche que quelqu'un a accepté de faire après une réunion."], ["Résumé", "une version courte qui garde les points principaux."]],
          slides: [
            { title: "Préparez les notes", bullets: ["Retirez les détails sur les bénéficiaires, la santé et les dons", "Utilisez les rôles : trésorier, responsable jeunesse"] },
            { title: "La demande", bullets: ["Résume en 5 points", "Tableau des actions : tâche, qui, date limite"] },
            { title: "Vérifiez et terminez", bullets: ["Comparez avec vos notes", "Corrigez les décisions oubliées et les dates inventées", "Ajoutez vous-même les vrais noms"] }
          ],
          tryIt: "Prenez les notes d'une réunion récente (ou écrivez cinq lignes de notes d'entraînement). Retirez les détails privés, demandez un résumé et un tableau des actions à faire, et comparez-les aux notes.",
          youCanNow: "transformer des notes de réunion en résumé vérifié avec des actions à faire grâce à l'IA."
        },
        {
          title: "Créer une affiche pour les bénévoles avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour écrire le texte d'une affiche et un outil de design pour la mise en page.",
          text: [
            "Commencez par les mots. Demandez à un assistant conversationnel : \"Écris le texte d'une affiche pour recruter des bénévoles pour notre soutien scolaire du samedi pour les collégiens. Ajoute un titre court, trois raisons de nous rejoindre, le temps demandé et comment s'inscrire. Moins de 60 mots.\"",
            "Puis ouvrez un outil de design, cherchez dans ses modèles \"bénévole\" ou \"affiche\", et collez votre texte. Beaucoup d'outils de design ont des fonctions d'IA qui proposent des mises en page ou des images ; décrivez ce que vous voulez et choisissez.",
            "Vérifiez vous-même les détails : date, heure, lieu, contact et lien d'inscription. Utilisez des photos que vous avez le droit d'utiliser, et ne montrez jamais le visage d'enfants sans l'autorisation écrite d'un parent ou tuteur."
          ],
          steps: ["Demandez à un assistant conversationnel un court texte d'affiche.", "Ouvrez un outil de design et cherchez un modèle d'affiche.", "Collez votre texte et ajustez la mise en page.", "Vérifiez la date, l'heure, le lieu et le contact.", "N'utilisez que des images que vous avez le droit d'utiliser."],
          words: [["Modèle", "une mise en page toute faite que vous remplissez avec vos propres mots."], ["Autorisation", "un accord, souvent écrit, pour utiliser la photo ou le travail de quelqu'un."]],
          slides: [
            { title: "Les mots d'abord", bullets: ["Titre, trois raisons, temps demandé", "Comment s'inscrire", "Moins de 60 mots"] },
            { title: "Puis le design", bullets: ["Ouvrez un outil de design", "Cherchez des modèles \"affiche bénévoles\"", "Collez et ajustez"] },
            { title: "Vérifiez avant d'imprimer", bullets: ["Date, heure, lieu, contact", "Seulement des photos autorisées", "Pas de visage d'enfant sans l'accord d'un parent"] }
          ],
          tryIt: "Créez une affiche de recrutement de bénévoles pour un programme réel ou d'entraînement : un texte de moins de 60 mots écrit par l'IA, mis en page dans un modèle d'outil de design. Vérifiez chaque détail.",
          youCanNow: "créer une affiche pour les bénévoles avec l'IA pour les mots et un outil de design pour la mise en page."
        },
        {
          title: "Construire la fiche-outils IA de votre équipe",
          minutes: 5,
          goal: "Rédiger une fiche-outils d'une page qui dit à votre équipe quels outils utiliser et comment.",
          text: [
            "Une fiche-outils est une page que votre équipe peut garder à côté de l'ordinateur. Elle nomme chaque outil approuvé, à quoi il sert, comment se connecter, et ce qui ne doit jamais y entrer.",
            "Restez court : une ligne par outil. Ajoutez les deux ou trois demandes qui ont le mieux marché pour votre équipe, comme la demande de résumé de réunion, pour que les nouveaux bénévoles puissent les copier.",
            "Revoyez la fiche tous les six mois. Les outils, les prix et les programmes pour associations changent, et votre équipe découvrira de meilleures demandes."
          ],
          steps: ["Listez un assistant conversationnel, une suite bureautique et un outil de design.", "Pour chacun : à quoi il sert et comment se connecter.", "Ajoutez la règle de confidentialité de chacun.", "Ajoutez vos deux ou trois meilleures demandes.", "Fixez une date de révision dans six mois."],
          words: [["Fiche-outils", "un guide d'une page sur les outils que votre équipe utilise et comment les utiliser en sécurité."]],
          slides: [
            { title: "Une ligne par outil", bullets: ["Nom et à quoi il sert", "Comment se connecter", "Ce qui n'y entre jamais"] },
            { title: "Ajoutez vos meilleures demandes", bullets: ["Demande de résumé de réunion", "Demande de texte d'affiche", "Les nouveaux bénévoles peuvent les copier"] },
            { title: "Gardez-la à jour", bullets: ["Révision tous les six mois", "Les outils et les programmes changent"] }
          ],
          tryIt: "Tâche finale : rédigez la fiche-outils IA d'une page de votre équipe avec trois outils, leurs usages et leurs règles de confidentialité, et joignez le résumé de réunion et l'affiche que vous avez faits.",
          youCanNow: "choisir, utiliser et documenter un petit ensemble d'outils d'IA pour l'équipe de votre association."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire du vrai travail avec les outils d'IA",
        questions: [
          { q: "Avant de coller des notes de réunion dans l'IA, vous devez :", options: ["Ajouter les coordonnées bancaires des donateurs", "Retirer les détails privés et utiliser les rôles plutôt que les noms", "Les coller telles quelles", "Les envoyer d'abord à tout le monde"], answer: 1, why: "Les rôles gardent les détails privés hors de l'outil d'IA." },
          { q: "Le résumé de l'IA donne une date limite que personne n'a décidée. Que faites-vous ?", options: ["Vous la gardez", "Vous demandez à l'IA de la garder", "Vous la corrigez d'après vos notes", "Vous partagez quand même"], answer: 2, why: "L'IA peut inventer des détails ; vos notes font foi." },
          { q: "Quelle est une bonne utilisation d'un modèle d'outil de design ?", options: ["Stocker les listes de donateurs", "Écrire un budget", "Enregistrer une réunion", "Coller le texte de votre affiche dans une mise en page toute faite"], answer: 3, why: "Les modèles donnent une mise en page toute prête." },
          { q: "Vous voulez une photo d'enfants de votre programme sur l'affiche. Que vous faut-il ?", options: ["L'autorisation écrite d'un parent ou tuteur", "Rien", "Une photo plus grande", "Une IA pour la flouter"], answer: 0, why: "Les images d'enfants demandent l'autorisation d'un parent ou tuteur." },
          { q: "À quelle fréquence revoir votre fiche-outils ?", options: ["Jamais", "Environ tous les six mois", "Chaque jour", "Seulement quand un donateur le demande"], answer: 1, why: "Les outils et les programmes changent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les outils d'IA essentiels pour les associations et comment les utiliser",
    questions: [
      { q: "Lequel est un assistant conversationnel ?", options: ["Une imprimante", "Une cellule de tableur", "Microsoft Copilot", "Une agrafeuse"], answer: 2, why: "Copilot, ChatGPT et Gemini sont des assistants conversationnels." },
      { q: "Une suite bureautique, c'est :", options: ["Une salle de réunion", "Seulement une base de données de donateurs", "Un téléphone", "Un ensemble de programmes de travail comme la messagerie, les documents et les tableurs"], answer: 3, why: "Microsoft 365 et Google Workspace sont des suites bureautiques." },
      { q: "Quel type d'outil crée des visuels pour les réseaux sociaux ?", options: ["Un outil de design", "Une calculatrice", "Une application bancaire", "Un thermostat"], answer: 0, why: "Les outils de design créent des visuels et des affiches." },
      { q: "Que veut dire \"transcrire\" ?", options: ["Traduire en espagnol", "Transformer des paroles en texte écrit", "Supprimer un fichier", "Envoyer un don"], answer: 1, why: "Les outils de réunion peuvent transcrire ce que disent les gens." },
      { q: "La meilleure façon de commencer à choisir des outils :", options: ["Acheter chaque nouvel outil", "N'en utiliser aucun", "Utiliser ce que vous avez déjà, un par type", "Demander à un inconnu"], answer: 2, why: "Peu d'outils, bien utilisés." },
      { q: "Google for Nonprofits vérifie les organisations grâce à :", options: ["La poste", "Votre banque", "Un donateur", "Goodstack"], answer: 3, why: "Google cite Goodstack comme partenaire de vérification." },
      { q: "Selon sa page, quel groupe n'a PAS droit à Google for Nonprofits ?", options: ["Un organisme public", "Une organisation caritative enregistrée", "Une banque alimentaire caritative", "Une association de quartier"], answer: 0, why: "Les organismes publics, les hôpitaux et les écoles sont exclus." },
      { q: "Les offres de Microsoft pour les associations comprennent :", options: ["Des voitures gratuites", "Microsoft 365 Business Basic gratuit jusqu'à 300 utilisateurs", "Des subventions en argent pour le loyer", "Des bureaux gratuits"], answer: 1, why: "La page de Microsoft indique Business Basic gratuit jusqu'à 300 utilisateurs." },
      { q: "Que faut-il préparer avant de demander un programme technologique pour associations ?", options: ["Les numéros de carte des donateurs", "Les dossiers des bénéficiaires", "Votre nom légal, votre adresse et la preuve d'exonération d'impôt", "Rien"], answer: 2, why: "Les programmes vérifient que vous êtes une vraie association." },
      { q: "La connexion en deux étapes, c'est :", options: ["Se connecter deux fois par jour", "Partager son mot de passe", "Deux personnes qui partagent un compte", "Une deuxième vérification, comme un code sur le téléphone, à la connexion"], answer: 3, why: "Elle protège les comptes si un mot de passe fuite." },
      { q: "Où chercher les paramètres de confidentialité d'un outil ?", options: ["Dans ses réglages", "Dans la corbeille", "Dans l'e-mail d'un donateur", "Sur l'imprimante"], answer: 0, why: "Les réglages contiennent en général les paramètres de données et de confidentialité." },
      { q: "La règle d'or dans tout outil d'IA est :", options: ["Tout coller pour de meilleurs résultats", "Aucune information privée de donateur, bénévole ou bénéficiaire sauf approbation", "Utiliser seulement des comptes personnels", "Ne jamais vérifier les réponses"], answer: 1, why: "Protéger les informations privées garde la confiance." },
      { q: "Dans une demande de résumé de réunion, il faut demander :", options: ["Un poème", "Les coordonnées bancaires des donateurs", "Des points et un tableau des actions à faire", "Une histoire au hasard"], answer: 2, why: "Cela donne un résumé clair et utilisable." },
      { q: "Pourquoi utiliser des rôles comme \"le trésorier\" dans les notes que vous collez ?", options: ["C'est plus court", "L'IA ne sait pas lire les noms", "Les trésoriers préfèrent", "Pour garder les noms et les détails privés à l'écart"], answer: 3, why: "Les rôles protègent la vie privée." },
      { q: "Que vérifiez-vous dans un résumé de réunion fait par l'IA ?", options: ["Chaque décision et chaque date par rapport à vos notes", "Seulement la police", "Rien", "Seulement la longueur"], answer: 0, why: "L'IA peut oublier ou inventer des détails." },
      { q: "Un bon texte d'affiche pour les bénévoles contient :", options: ["Seulement un logo", "Un titre, des raisons de rejoindre, le temps demandé et comment s'inscrire", "Les noms des donateurs", "Une longue histoire de l'organisation"], answer: 1, why: "Il dit aux lecteurs pourquoi et comment rejoindre." },
      { q: "Avant d'imprimer une affiche, vérifiez :", options: ["Seulement les couleurs", "La météo", "La date, l'heure, le lieu et le contact", "Rien"], answer: 2, why: "De mauvais détails empêchent les gens de venir." },
      { q: "Une fiche-outils, c'est :", options: ["Une carte cadeau", "Un badge de bénévole", "Un reçu de don", "Un guide d'une page sur les outils approuvés de votre équipe"], answer: 3, why: "Elle montre quels outils utiliser et comment." },
      { q: "Pourquoi ajouter vos meilleures demandes à la fiche-outils ?", options: ["Les nouveaux bénévoles peuvent copier ce qui marche", "Pour remplir la page", "Les demandes sont secrètes", "Les donateurs les veulent"], answer: 0, why: "Des demandes partagées font gagner du temps et gardent la qualité." },
      { q: "Les conditions de Canva pour les associations ont peut-être changé. Vous devez :", options: ["Supposer que c'est gratuit pour toujours", "Consulter la page officielle de Canva pour les associations", "Demander à un assistant conversationnel et le croire", "Laisser tomber les outils de design"], answer: 1, why: "Les pages officielles donnent les conditions actuelles." }
    ]
  }
};
