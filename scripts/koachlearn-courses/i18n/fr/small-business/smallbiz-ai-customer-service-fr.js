"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-customer-service.js). See scripts/koachlearn-courses/README.md, "Translations".

const FTC_REVIEWS = { name: "FTC : règle sur les avis et témoignages de consommateurs, questions et réponses (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC : règle finale interdisant les faux avis et témoignages (août 2024, en anglais)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "L'IA pour le service client et la communication",
  skills: "Rédiger une FAQ pour les clients, Créer des modèles de réponse, Définir le ton de votre marque, Répondre aux avis, Gérer les clients mécontents, Protéger les données des clients",
  outcome: "construire avec l'aide de l'IA un kit de service client pour votre entreprise : une FAQ de vos dix questions les plus fréquentes, cinq modèles de réponse avec le ton de votre marque, et une réponse calme à un client mécontent et à un avis public, le tout vérifié par vous avant utilisation.",
  about: [
    "Ce cours s'adresse aux patrons et aux employés de petites entreprises qui répondent aux clients par téléphone, SMS, e-mail, messages sur les réseaux sociaux et avis en ligne : restaurants, salons, boutiques, entreprises de ménage, services de réparation et food trucks.",
    "Vous utiliserez un assistant d'IA gratuit pour répondre plus vite aux mêmes questions, garder des réponses aimables et cohérentes, répondre aux avis de la bonne façon, et calmer les clients mécontents sans tout céder. Vous gardez la main sur chaque réponse.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Vos tâches forment ensemble un kit de service client utilisable dès le lendemain."
  ],
  finalTask: "Construisez votre kit de service client dans un seul document : le ton de votre marque (trois mots et une liste de choses à faire et à éviter), une FAQ avec vos dix questions les plus fréquentes et des réponses vérifiées, cinq modèles de réponse avec des repères, une réponse à un client mécontent réel ou fictif, et une réponse à un avis public. Chaque fait est vérifié par vous et aucune donnée privée de client n'est entrée dans l'outil d'IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires et des employés de petites entreprises qui répondent aux clients par téléphone, SMS, e-mail, sur les réseaux sociaux et dans les avis en ligne : restaurants, salons, commerces, entreprises de nettoyage, services de réparation et food trucks.",
    startingPoint: "Ils répondent chaque jour aux questions des clients, souvent les mêmes, et répondent parfois aux avis. Ils utilisent peu l'IA pour leurs réponses et n'ont ni FAQ écrite, ni ton de marque, ni modèles.",
    gap: "Répondre une par une aux mêmes questions prend du temps, les réponses peuvent changer d'une personne à l'autre, et une réclamation ou un avis mal géré peut faire perdre des clients. Les propriétaires ont besoin d'un kit de service client vérifié et cohérent, fait avec l'aide de l'IA, tout en restant honnêtes, en respectant la règle de la FTC sur les avis et en gardant privées les données des clients.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Appareils : un smartphone ou un ordinateur utilisé entre deux clients",
      "Temps : des leçons d'environ 5 minutes, à caser dans une journée de travail chargée",
      "Règles : la règle de la FTC sur les avis interdit les faux avis positifs et les avis positifs payés ; les réclamations pour blessure vont à un professionnel ou à l'assureur",
      "Vie privée : aucun nom, donnée de carte ou coordonnée de client dans les outils d'IA"
    ],
    prerequisites: "Le cours « Découvrir l'IA pour les petites entreprises » est utile, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des questions les plus fréquentes de vos clients", action: "rédiger une FAQ avec l'aide de l'IA", standard: "avec dix questions et chaque réponse vérifiée par rapport à ce que vous faites vraiment" },
    { id: "O2", condition: "À partir de la façon dont vous voulez que votre entreprise s'exprime", action: "décrire le ton de votre marque et faire écrire l'IA avec ce ton", standard: "avec trois mots pour le ton et une liste de choses à faire et à éviter placée au début de la discussion" },
    { id: "O3", condition: "Avec un assistant d'IA", action: "créer cinq modèles de réponse réutilisables avec des repères", standard: "avec le ton de votre marque, vérifiés et enregistrés là où vous pouvez les copier vite" },
    { id: "O4", condition: "Face à un avis en ligne positif ou négatif", action: "rédiger avec l'aide de l'IA une réponse honnête et calme", standard: "avec chaque affirmation vraie et aucun avis faux ou payé" },
    { id: "O5", condition: "Face à un client mécontent, avec vos limites pour les remboursements et le travail refait", action: "rédiger une réponse avec la méthode LAST", standard: "en proposant seulement une solution que vous donneriez vraiment" },
    { id: "O6", condition: "À partir de votre FAQ, de vos modèles et de vos réponses", action: "rassembler un kit de service client qui garde privées les données des clients", standard: "dans un seul document, avec chaque fait vérifié et aucune donnée réelle de client" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Des réponses du quotidien plus rapides et plus aimables",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver les questions principales des clients et construire une FAQ",
          minutes: 5,
          goal: "Lister les questions les plus fréquentes de vos clients et en faire une FAQ vérifiée.",
          text: [
            "La plupart des entreprises répondent sans cesse aux dix mêmes questions : horaires, prix, stationnement, livraison, réservation, retours, moyens de paiement, temps d'attente, allergies ou matériaux, et \"est-ce que vous faites... ?\".",
            "Écrivez-les d'abord de mémoire, à partir de vos SMS et de vos messages. Puis donnez à un assistant d'IA vos vraies réponses sous forme brute et demandez-lui d'en faire une FAQ claire : \"Voici mes réponses brutes. Fais une courte FAQ pour le site de mon salon de manucure. Ton aimable, mots simples.\"",
            "Vérifiez chaque réponse par rapport à ce que vous faites vraiment. Une FAQ sur votre site ou sur une affiche est une promesse faite aux clients."
          ],
          steps: ["Listez les dix questions que vous entendez le plus.", "Écrivez votre vraie réponse à chacune, rapidement.", "Demandez à l'IA d'en faire une FAQ claire.", "Vérifiez chaque réponse, puis publiez-la sur votre site, votre page ou au comptoir."],
          words: [["FAQ", "foire aux questions : une liste des questions fréquentes et de leurs réponses."]],
          slides: [
            { title: "Les dix mêmes questions", bullets: ["Horaires, prix, stationnement, livraison", "Réservation, retours, moyens de paiement", "\"Est-ce que vous faites... ?\""] },
            { title: "Construisez la FAQ", bullets: ["Listez les questions", "Écrivez vos vraies réponses brutes", "Demandez à l'IA de les rendre claires et aimables"] },
            { title: "Vérifiez avant de publier", bullets: ["Une FAQ est une promesse", "Chaque réponse doit correspondre à ce que vous faites"] }
          ],
          tryIt: "Écrivez les dix questions les plus fréquentes de vos clients avec une réponse brute pour chacune. Demandez à un assistant d'IA d'en faire une FAQ courte et aimable, puis vérifiez chaque réponse.",
          youCanNow: "construire une FAQ vérifiée à partir des vraies questions de vos clients.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi une FAQ est-elle comme une promesse faite aux clients ?", options: ["Parce que les clients vont se fier à ce qu'elle dit", "Parce que c'est un contrat légal", "Parce que l'IA l'a écrite", "Parce qu'elle n'est publiée qu'une fois"], answer: 0, why: "Les clients agissent d'après votre FAQ, donc chaque réponse doit être vraie." },
            { objective: "O1", q: "La FAQ de l'IA dit que vous offrez le parking gratuit, mais ce n'est pas le cas. Que faites-vous ?", options: ["Le garder pour attirer des clients", "Corriger la réponse pour qu'elle corresponde à ce que vous faites vraiment", "Ajouter un petit « peut-être »", "Demander à l'IA de supprimer toutes les réponses"], answer: 1, why: "Les réponses de la FAQ viennent de vos vraies règles, vérifiées par vous." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Définir le ton de votre marque",
          minutes: 4,
          goal: "Décrire la façon dont votre entreprise s'exprime et faire écrire l'IA avec ce ton.",
          text: [
            "Le ton de votre marque, c'est la façon dont votre entreprise s'exprime. Une taqueria familiale peut être chaleureuse et joueuse ; un préparateur de déclarations d'impôts calme et professionnel ; un barbier détendu et proche des gens du quartier.",
            "Choisissez trois mots pour votre ton et écrivez une courte liste de choses à faire et à éviter : \"À faire : utiliser les prénoms, dire merci, rester court. À éviter : l'argot, les majuscules partout, les promesses sur les délais.\"",
            "Donnez cela à l'IA au début d'une discussion : \"Écris avec ce ton pour chaque réponse.\" Maintenant, chaque réponse ressemble à la même entreprise, quel que soit le membre de l'équipe qui l'envoie."
          ],
          steps: ["Choisissez trois mots pour la façon dont vous voulez vous exprimer.", "Écrivez trois choses à faire et trois à éviter.", "Collez-les au début d'une discussion.", "Demandez un exemple de réponse et vérifiez que le ton est juste."],
          words: [["Ton de marque", "la façon dont une entreprise s'exprime dans ses messages."], ["Cohérent", "pareil à chaque fois."]],
          slides: [
            { title: "Comment s'exprime votre entreprise ?", bullets: ["Taqueria : chaleureuse, joueuse", "Préparateur d'impôts : calme, professionnel", "Barbier : détendu, proche du quartier"] },
            { title: "Écrivez-le", bullets: ["Trois mots pour votre ton", "Trois choses à faire et trois à éviter"] },
            { title: "Utilisez-le avec l'IA", bullets: ["Collez-le au début de la discussion", "Chaque réponse ressemble à votre entreprise"] }
          ],
          tryIt: "Écrivez vos trois mots et votre liste à faire et à éviter. Collez-les dans un assistant d'IA et demandez une réponse à \"Êtes-vous ouverts le dimanche ?\" Est-ce que ça vous ressemble ?",
          youCanNow: "décrire le ton de votre marque et obtenir de l'IA des réponses qui ressemblent à votre entreprise.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que le ton de votre marque ?", options: ["Le numéro de téléphone de votre entreprise", "Les couleurs de votre logo", "La façon dont votre entreprise s'exprime dans ses messages", "Un message d'accueil enregistré"], answer: 2, why: "Le ton de votre marque est la façon dont votre entreprise parle à ses clients." },
            { objective: "O2", q: "Vous voulez que chaque réponse de l'IA ressemble à votre boulangerie. Que faites-vous ?", options: ["Espérer qu'elle devine", "Demander un nouveau ton à chaque fois", "Écrire tout en majuscules pour avoir l'air enthousiaste", "Mettre vos mots pour le ton et vos choses à faire et à éviter au début de la discussion"], answer: 3, why: "Donner votre ton à l'IA dès le début aide chaque réponse à le suivre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Modèles de réponse pour les messages, les SMS et les e-mails",
          minutes: 5,
          goal: "Créer des modèles de réponse réutilisables avec des repères.",
          text: [
            "Un modèle de réponse est une réponse toute prête avec des espaces à remplir. Vous remplissez les espaces à chaque fois, et vous répondez en quelques secondes sans tout retaper.",
            "Des modèles utiles : confirmation de réservation, rappel de rendez-vous, commande prête, retard, désolé nous n'avons plus cet article, et merci après une visite. Demandez à l'IA : \"Avec le ton de ma marque, écris cinq courts modèles de SMS pour une entreprise de lavage de voitures à domicile. Utilise [nom du client], [date] et [heure] comme espaces à remplir.\"",
            "Gardez vos modèles dans les notes ou les raccourcis de texte de votre téléphone, ou dans votre outil de réservation s'il permet d'enregistrer des réponses. Ne collez jamais de vrais noms de clients, numéros de téléphone ou données de carte dans l'IA pour les créer ; utilisez les espaces à remplir."
          ],
          steps: ["Choisissez cinq situations auxquelles vous répondez souvent.", "Demandez à l'IA un court modèle pour chacune, avec des espaces entre crochets.", "Vérifiez la formulation et les faits.", "Enregistrez-les là où vous pouvez les copier vite."],
          words: [["Modèle de réponse", "une réponse enregistrée avec des espaces que vous remplissez à chaque fois."], ["Repère (espace réservé)", "un espace comme [nom du client] que vous remplacez plus tard par les vrais détails."]],
          slides: [
            { title: "Répondez en quelques secondes", bullets: ["Un modèle est une réponse prête avec des espaces", "Remplissez [nom du client], [date], [heure]"] },
            { title: "Cinq modèles utiles", bullets: ["Confirmation et rappel de réservation", "Commande prête ; retard", "Désolé, rupture de stock ; merci"] },
            { title: "Gardez-les sûrs et à portée de main", bullets: ["Notes, raccourcis ou réponses enregistrées", "Des repères, pas de vrais détails de clients"] }
          ],
          tryIt: "Demandez à l'IA cinq modèles de réponse avec le ton de votre marque et des [espaces à remplir]. Vérifiez-les et enregistrez-les là où vous pouvez les copier rapidement.",
          youCanNow: "créer et enregistrer des modèles de réponse pour répondre aux clients vite et de façon cohérente.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un modèle de réponse ?", options: ["Un message que vous réutilisez, avec des blancs à remplir", "Une réponse utilisée une seule fois", "L'avis d'un client", "Une liste de prix"], answer: 0, why: "Un modèle est une réponse prête, avec des blancs que vous remplissez à chaque fois." },
            { objective: "O3", q: "Vous voulez un modèle pour « votre commande est prête ». Que donnez-vous à l'IA ?", options: ["Le nom et le numéro de téléphone d'un vrai client", "Votre numéro de carte", "Des blancs comme [nom du client] et [heure]", "Rien du tout"], answer: 2, why: "Les blancs gardent les données privées hors de l'IA et rendent le modèle réutilisable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Des réponses du quotidien plus rapides et plus aimables",
        questions: [
          { objective: "O1", q: "Que veut dire FAQ ?", options: ["Fiche d'achat rapide", "Foire aux questions", "Formulaire à questionner", "Fin des questions"], answer: 1, why: "Une FAQ liste les questions fréquentes et leurs réponses." },
          { objective: "O1", q: "L'IA a transformé vos réponses brutes en FAQ. Et ensuite ?", options: ["La publier sans la lire", "Ajouter plus de promesses", "La supprimer", "Vérifier chaque réponse par rapport à ce que vous faites vraiment"], answer: 3, why: "Une FAQ est une promesse faite aux clients." },
          { objective: "O2", q: "Qu'est-ce que le ton de marque ?", options: ["La façon dont votre entreprise s'exprime dans ses messages", "La voix chantée du patron", "Votre numéro de téléphone", "La couleur de votre logo"], answer: 0, why: "Le ton de marque, c'est votre façon de vous exprimer." },
          { objective: "O3", q: "Lequel est un bon espace à remplir dans un modèle ?", options: ["Votre mot de passe", "Le numéro de carte du client", "[nom du client]", "Une vraie adresse personnelle"], answer: 2, why: "Les repères gardent les données privées hors des outils d'IA." },
          { objective: "O3", q: "Pourquoi utiliser des modèles de réponse ?", options: ["Pour faire payer plus cher", "Pour éviter les clients", "Pour répondre vite et de façon cohérente", "Pour cacher les prix"], answer: 2, why: "Les modèles font gagner du temps et gardent la même qualité de réponse." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Avis, conversations difficiles et confiance",
      lessons: [
        {
          objectives: ["O4"],
          title: "Répondre aux avis en ligne, bons et mauvais",
          minutes: 5,
          goal: "Écrire des réponses honnêtes aux avis positifs et négatifs, et respecter la règle de la FTC sur les avis.",
          text: [
            "Les clients lisent la façon dont vous répondez aux avis. Remerciez brièvement les bons avis en citant le plat ou le service. Pour les mauvais avis, restez calme : remerciez, dites que vous êtes désolé de leur expérience, réglez ce que vous pouvez, et invitez-les à vous contacter directement. Ne vous disputez pas en public et ne partagez pas leurs données privées.",
            "L'IA vous aide à écrire une réponse calme quand vous êtes contrarié. Collez le texte de l'avis (pas les informations privées de son auteur) et demandez : \"Écris une réponse courte et polie. Excuse-toi, dis que nous avons reformé notre équipe sur les temps d'attente, et invite-le à nous appeler.\" Ne dites que ce qui est vrai.",
            "N'écrivez jamais de faux avis, n'en achetez pas et n'en faites pas créer par l'IA. La Federal Trade Commission (FTC, l'autorité américaine de protection des consommateurs) a une règle, en vigueur depuis octobre 2024, qui interdit les faux avis et faux témoignages, y compris ceux faits par l'IA, ainsi que le fait de payer des avis à condition qu'ils soient positifs. Lisez la page de questions et réponses de la FTC pour savoir ce qui est permis."
          ],
          steps: ["Lisez l'avis deux fois et attendez si vous êtes en colère.", "Demandez à l'IA un brouillon court et poli.", "Vérifiez que chaque phrase est vraie.", "Invitez les clients mécontents à vous contacter directement.", "N'écrivez, n'achetez et ne fabriquez jamais d'avis."],
          words: [["Avis", "la note et le commentaire publics d'un client sur votre entreprise."], ["FTC", "Federal Trade Commission : l'agence américaine qui protège les consommateurs contre les pratiques commerciales déloyales et trompeuses."], ["Témoignage", "les paroles d'un client qui fait l'éloge d'une entreprise, utilisées dans son marketing."]],
          slides: [
            { title: "Bons avis", bullets: ["Remerciez, citez ce qu'ils ont aimé", "Restez court et sincère"] },
            { title: "Mauvais avis", bullets: ["Restez calme ; attendez si vous êtes en colère", "Remerciez, excusez-vous, réglez ce que vous pouvez", "Invitez-les à vous contacter directement"] },
            { title: "La règle de la FTC sur les faux avis", bullets: ["Interdit les faux avis, y compris ceux faits par l'IA", "Interdit de payer seulement les avis positifs", "En vigueur depuis octobre 2024 : voir ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Trouvez un vrai avis sur votre entreprise (ou écrivez un exemple de mauvais avis sur une commande en retard). Utilisez l'IA pour rédiger une réponse calme, vérifiez que chaque phrase est vraie, et adaptez-la à votre ton.",
          youCanNow: "répondre aux bons et aux mauvais avis avec calme et honnêteté, sans enfreindre la règle de la FTC sur les faux avis.",
          quickCheck: [
            { objective: "O4", q: "Quelle pratique sur les avis la règle de la FTC interdit-elle ?", options: ["Répondre aux mauvais avis", "Payer les clients seulement s'ils laissent un avis positif", "Remercier les clients pour leurs avis", "Demander des avis honnêtes à tous les clients"], answer: 1, why: "Récompenser seulement les avis positifs est interdit par la règle de la FTC." },
            { objective: "O4", q: "Un avis très dur vous met en colère. Que faites-vous ?", options: ["Répondre tout de suite en majuscules", "Publier un faux bon avis pour équilibrer", "Demander à des amis de se disputer avec l'auteur de l'avis", "Attendre, le relire, puis écrire une réponse calme et vraie"], answer: 3, why: "Attendre vous aide à répondre avec calme et honnêteté." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Calmer un client mécontent",
          minutes: 5,
          goal: "Utiliser une méthode simple en quatre étapes, avec l'aide de l'IA, pour répondre à un client mécontent.",
          text: [
            "Une méthode simple marche pour la plupart des réclamations : Écouter, S'excuser, Résoudre, Remercier (la méthode LAST en anglais : Listen, Apologize, Solve, Thank). Écoutez toute la réclamation, excusez-vous pour l'expérience vécue, proposez une solution juste que vous pouvez vraiment donner, et remerciez le client de vous en avoir parlé.",
            "Fixez vos limites avant d'en avoir besoin : quand vous accordez un remboursement, un travail refait, une réduction ou un article gratuit. L'IA peut rédiger le message, mais c'est vous qui choisissez la solution. Ne laissez pas l'IA promettre quelque chose que vous n'avez pas accepté.",
            "Si un client menace, harcèle ou parle de blessure, de sécurité ou de poursuites, gardez une réponse courte, ne reconnaissez pas de faute par écrit, et parlez-en à un professionnel ou à votre assureur."
          ],
          steps: ["Écouter : lisez ou écoutez toute la réclamation.", "S'excuser pour l'expérience vécue.", "Résoudre : proposez une solution juste dans vos limites.", "Remercier le client de vous en avoir parlé.", "Demandez à l'IA de rédiger, puis vérifiez que la promesse est une promesse que vous tiendrez."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (écouter, s'excuser, résoudre, remercier) : une méthode pour les réclamations."], ["Faire remonter", "confier un problème grave au patron, à un professionnel ou à un assureur."]],
          slides: [
            { title: "La méthode LAST", bullets: ["Écouter (Listen)", "S'excuser (Apologize)", "Résoudre (Solve)", "Remercier (Thank)"] },
            { title: "Fixez d'abord vos limites", bullets: ["Quand rembourser, refaire ou faire une réduction", "C'est vous qui choisissez la solution, pas l'IA"] },
            { title: "Quand faire remonter", bullets: ["Menaces ou harcèlement", "Blessure, sécurité ou poursuites", "Restez court ; appelez un professionnel ou l'assureur"] }
          ],
          tryIt: "Écrivez vos limites de remboursement et de travail refait en trois lignes. Puis utilisez l'IA pour rédiger une réponse LAST à : \"Mon gâteau n'était pas du bon parfum et la fête est gâchée.\" Vérifiez que la solution est une solution que vous donneriez vraiment.",
          youCanNow: "répondre à un client mécontent avec la méthode LAST et une solution juste et réelle.",
          quickCheck: [
            { objective: "O5", q: "Quelle est la première étape de la méthode LAST ?", options: ["Résoudre", "Remercier", "Écouter", "S'excuser"], answer: 2, why: "La méthode LAST commence par écouter le client." },
            { objective: "O5", q: "La réponse de l'IA à un client mécontent offre un remboursement complet plus un mois de service gratuit, plus que vos limites ne le permettent. Que faites-vous ?", options: ["La changer pour une solution dans vos limites", "L'envoyer telle quelle", "Retirer les excuses", "Ignorer le client"], answer: 0, why: "C'est vous qui choisissez une solution juste dans les limites que vous avez fixées, pas l'IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Confidentialité, honnêteté et votre kit de service client",
          minutes: 5,
          goal: "Rassembler vos outils de service et protéger les données des clients.",
          text: [
            "Vos clients vous confient leur nom, leur numéro de téléphone, leur adresse et parfois leurs données de carte. Gardez-les hors des outils d'IA. Travaillez avec des repères, et remplissez vous-même les vrais détails dans votre téléphone ou votre système de réservation.",
            "Si vous utilisez un chatbot sur votre site ou dans vos messages, dites aux clients qu'ils parlent à un assistant automatique et donnez-leur un moyen de joindre une personne. Relisez régulièrement ce qu'il dit.",
            "Rassemblez maintenant le tout dans un seul document : le ton de votre marque, votre FAQ, vos modèles, votre méthode LAST avec vos limites, et votre réponse aux avis. Partagez-le avec votre équipe pour que tout le monde réponde de la même façon."
          ],
          steps: ["Vérifiez que chaque modèle utilise des repères, pas de vraies données.", "Si vous utilisez un chatbot, signalez-le et proposez une personne.", "Rassemblez ton, FAQ, modèles, limites LAST et réponses aux avis dans un seul document.", "Partagez-le avec votre équipe."],
          words: [["Chatbot", "un programme automatique qui répond aux messages."], ["Données des clients", "les informations sur vos clients, comme leur nom, leur téléphone et leurs commandes."]],
          slides: [
            { title: "Protégez les données des clients", bullets: ["Pas de noms avec téléphone, adresse ou carte dans l'IA", "Utilisez des repères ; remplissez vous-même les détails"] },
            { title: "Si vous utilisez un chatbot", bullets: ["Dites qu'il est automatique", "Donnez un moyen de joindre une personne", "Relisez souvent ses réponses"] },
            { title: "Votre kit de service client", bullets: ["Ton de marque et FAQ", "Modèles et limites LAST", "Réponses aux avis, partagées avec l'équipe"] }
          ],
          tryIt: "Tâche finale : rassemblez dans un seul document le ton de votre marque, votre FAQ de dix questions, cinq modèles, une réponse à un client mécontent et une réponse à un avis. Vérifiez chaque fait et retirez tout vrai détail de client.",
          youCanNow: "gérer votre service client avec un kit vérifié, confidentiel et cohérent, fait avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi partager votre kit de service client avec votre équipe ?", options: ["Pour qu'elle puisse changer les prix", "Pour que tout le monde réponde de la même façon", "Pour qu'elle puisse sauter la formation", "Pour que les clients puissent le modifier"], answer: 1, why: "Un kit partagé garde des réponses cohérentes dans toute l'équipe." },
            { objective: "O6", q: "Vous préparez des modèles et vos notes contiennent les données de carte d'un vrai client. Que faites-vous ?", options: ["Les coller dans l'IA pour qu'elle comprenne", "Les utiliser comme exemple de modèle", "Les partager avec l'équipe dans le kit", "Les garder hors de l'outil d'IA et du kit"], answer: 3, why: "Les données de carte des clients doivent rester hors des outils d'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Avis, conversations difficiles et confiance",
        questions: [
          { objective: "O4", q: "Un client laisse un avis à une étoile sur une longue attente. Quelle est la meilleure réponse ?", options: ["Le remercier, s'excuser, dire ce que vous corrigez et l'inviter à vous contacter", "Dire qu'il a tort", "Publier son numéro de téléphone", "L'ignorer pour toujours"], answer: 0, why: "Des réponses calmes et honnêtes créent la confiance." },
          { objective: "O4", q: "Selon la règle de la FTC, qu'est-ce qui n'est PAS permis ?", options: ["Remercier l'auteur d'un avis", "Répondre à un mauvais avis", "Demander aux clients contents de laisser un avis honnête", "Utiliser l'IA pour écrire de faux avis de clients"], answer: 3, why: "La règle de la FTC interdit les faux avis, y compris ceux faits par l'IA." },
          { objective: "O5", q: "Que veut dire le S de LAST ?", options: ["Sell (vendre)", "Solve (résoudre)", "Stop (arrêter)", "Smile (sourire)"], answer: 1, why: "Listen, Apologize, Solve, Thank." },
          { objective: "O5", q: "Qui choisit la solution pour un client mécontent ?", options: ["Vous, dans les limites que vous avez fixées", "L'IA", "Le client seul", "Un inconnu en ligne"], answer: 0, why: "L'IA rédige ; c'est vous qui décidez de la solution." },
          { objective: "O6", q: "Le chatbot de votre site doit :", options: ["Se faire passer pour une personne", "Collecter des numéros de carte dans la discussion", "Dire qu'il est automatique et proposer un moyen de joindre une personne", "Ne jamais être vérifié"], answer: 2, why: "L'honnêteté et l'accès à une personne créent la confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour le service client et la communication",
    questions: [
      { objective: "O1", q: "Quelle question fréquente de clients mettre dans une FAQ ?", options: ["Quel est votre mot de passe ?", "Quels sont vos horaires ?", "Quel est votre numéro de compte ?", "Qui sont les patrons de vos fournisseurs ?"], answer: 1, why: "Les horaires sont l'une des premières questions." },
      { objective: "O1", q: "D'où viennent les réponses de votre FAQ ?", options: ["D'avis au hasard", "Des suppositions de l'IA", "Du site d'un concurrent", "De vos vraies règles, écrites par vous et clarifiées par l'IA"], answer: 3, why: "L'IA ne fait que mettre en forme vos vraies réponses." },
      { objective: "O1", q: "Pourquoi vérifier une FAQ avant de la publier ?", options: ["Pour la rendre plus longue", "L'IA a toujours raison", "Ce n'est pas nécessaire", "C'est une promesse faite aux clients"], answer: 3, why: "Les clients vous demanderont de la respecter." },
      { objective: "O2", q: "Trois mots de ton pour une boulangerie familiale pourraient être :", options: ["Énervé, pressé, froid", "Chaleureux, joyeux, simple", "Secret, flou, long", "Juridique, strict, dur"], answer: 1, why: "Les mots de ton décrivent la façon dont vous voulez vous exprimer." },
      { objective: "O2", q: "Où mettre le ton de votre marque pour que l'IA l'utilise ?", options: ["Sur un ticket de caisse", "Dans votre mot de passe", "Au début de la discussion", "Nulle part"], answer: 2, why: "Le coller au début guide chaque réponse." },
      { objective: "O2", q: "Une chose \"à éviter\" dans la liste du ton de marque pourrait être :", options: ["Écrire tout en majuscules", "Dire merci", "Utiliser les prénoms", "Rester court"], answer: 0, why: "Les majuscules partout donnent l'impression de crier." },
      { objective: "O3", q: "Lequel est un bon modèle de réponse ?", options: ["\"Envoyez-moi votre mot de passe.\"", "\"Bonjour Jeanne Martin, 555-0101, carte 4111...\"", "\"Bonjour [nom du client], votre commande est prête à être retirée à [heure].\"", "\"Non.\""], answer: 2, why: "Il utilise des repères et il est clair." },
      { objective: "O3", q: "Où garder vos modèles pour les utiliser vite ?", options: ["Dans les notes, raccourcis de texte ou réponses enregistrées du téléphone", "Seulement dans votre tête", "Dans la boîte e-mail d'un client", "En public sur les réseaux sociaux"], answer: 0, why: "Les modèles enregistrés se copient vite." },
      { objective: "O3", q: "Pour créer des modèles avec l'IA, donnez-lui :", options: ["De vrais noms et numéros de clients", "Des espaces comme [date] et [heure]", "Des données de carte", "Vos mots de passe"], answer: 1, why: "Utilisez des repères, pas de vraies données." },
      { objective: "O4", q: "Un bon avis vante \"la meilleure queue de bœuf de la ville\". Une bonne réponse :", options: ["Propose de l'argent pour un autre avis", "L'ignore", "Demande son adresse", "Remercie et parle de la queue de bœuf"], answer: 3, why: "Un merci court et personnel marche le mieux." },
      { objective: "O4", q: "Payer des clients seulement s'ils laissent un avis positif, c'est :", options: ["Interdit par la règle de la FTC", "Obligatoire", "Une bonne idée", "Permis seulement le week-end"], answer: 0, why: "La règle interdit les récompenses qui dépendent d'un avis positif." },
      { objective: "O4", q: "Quand un avis en colère vous contrarie, vous devez d'abord :", options: ["Écrire de faux bons avis", "Répondre tout de suite en majuscules", "Publier les données du client", "Attendre et le relire avant de répondre"], answer: 3, why: "Une réponse calme est une meilleure réponse." },
      { objective: "O5", q: "Dans la méthode LAST, la première étape est de :", options: ["Rire", "Partir", "Écouter", "Mentir"], answer: 2, why: "Écoutez d'abord toute la réclamation." },
      { objective: "O5", q: "Pourquoi fixer vos limites de remboursement et de travail refait avant une réclamation ?", options: ["Pour refuser tout le monde", "Pour proposer des solutions justes que vous tiendrez vraiment", "Pour embrouiller l'équipe", "C'est la loi"], answer: 1, why: "Des limites claires permettent des décisions justes et rapides." },
      { objective: "O5", q: "Un client dit qu'il s'est blessé dans votre boutique. Vous devez :", options: ["En parler en ligne", "Faire reconnaître la faute en détail par l'IA", "L'ignorer", "Garder une réponse courte et parler à un professionnel ou à votre assureur"], answer: 3, why: "Les blessures et les poursuites demandent un conseil professionnel." },
      { objective: "O5", q: "L'IA rédige une réponse qui promet un repas gratuit pendant un an. Vous :", options: ["Ajoutez d'autres promesses", "L'envoyez", "La retirez, sauf si vous l'avez vraiment accepté", "Laissez le client décider"], answer: 2, why: "Ne promettez que ce que vous tiendrez." },
      { objective: "O6", q: "Les données de carte des clients doivent être :", options: ["Gardées hors des outils d'IA", "Collées dans les discussions", "Publiées dans les réponses", "Enregistrées dans les modèles"], answer: 0, why: "Les données de carte sont privées." },
      { objective: "O6", q: "Si vous utilisez un chatbot, les clients doivent pouvoir :", options: ["Ne jamais joindre personne", "Joindre une personne", "Payer seulement par carte cadeau", "N'utiliser qu'un seul mot"], answer: 1, why: "L'accès à une personne crée la confiance." },
      { objective: "O6", q: "Votre kit de service client contient :", options: ["Des mots de passe", "Le ton, la FAQ, les modèles, les limites LAST et les réponses aux avis", "Les numéros de carte des clients", "De faux avis"], answer: 1, why: "Ces éléments rendent le service rapide et cohérent." },
      { objective: "O6", q: "Pourquoi partager le kit avec l'équipe ?", options: ["Pour que tout le monde réponde de la même façon", "Pour la ralentir", "Pour le cacher", "Ce n'est pas utile"], answer: 0, why: "La cohérence crée la confiance." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      6,
      8,
      9,
      10,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Ton de la marque",
        objective: "O2",
        notYet: "Pas de mots pour le ton, ou pas de liste de choses à faire et à éviter.",
        meets: "Trois mots pour le ton et une liste de choses à faire et à éviter.",
        exceeds: "Les exemples de réponses suivent clairement ce ton."
      },
      {
        name: "FAQ vérifiée",
        objective: "O1",
        notYet: "Moins de dix questions, ou une réponse qui n'est pas vraie.",
        meets: "Dix questions fréquentes avec des réponses vérifiées par rapport à ce que vous faites vraiment.",
        exceeds: "Les réponses sont courtes et suivent le ton de la marque."
      },
      {
        name: "Modèles de réponse",
        objective: "O3",
        notYet: "Moins de cinq modèles, ou des modèles avec des données réelles de clients.",
        meets: "Cinq modèles vérifiés avec des repères.",
        exceeds: "Enregistrés là où l'équipe peut les copier vite."
      },
      {
        name: "Réponse à un client mécontent",
        objective: "O5",
        notYet: "Sur la défensive, ou elle propose une solution que vous ne donneriez pas.",
        meets: "Elle suit la méthode LAST et propose une solution dans vos limites.",
        exceeds: "Vos limites pour les remboursements et le travail refait sont écrites dans le kit."
      },
      {
        name: "Réponse à un avis",
        objective: "O4",
        notYet: "Elle se dispute, dit quelque chose de faux, ou elle manque.",
        meets: "Calme, honnête et avec votre ton.",
        exceeds: "Elle dit ce que vous corrigez et invite le client à vous contacter."
      },
      {
        name: "Vie privée et faits",
        objective: "O6",
        notYet: "Des données réelles de clients dans le kit ou dans la discussion avec l'IA, ou des faits non vérifiés.",
        meets: "Aucune donnée privée de client utilisée, et chaque fait vérifié.",
        exceeds: "Le kit précise comment un chatbot, s'il y en a un, dit qu'il est automatique et propose une personne."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les propriétaires qui utilisent leur FAQ ou leurs modèles chaque semaine (enquête de suivi à 30 jours)",
      "Les propriétaires qui répondent à chaque nouvel avis en ligne dans la semaine (enquête de suivi)",
      "Les propriétaires qui disent répondre plus vite ou avoir de meilleurs avis dans les 90 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Un outil de document gratuit comme Google Docs ou Microsoft Word pour le kit",
      "Une liste de vraies questions de clients et vos limites pour les remboursements et le travail refait",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez aux propriétaires d'apporter leurs vraies questions fréquentes et un avis réel ou un exemple d'avis.",
      "Utilisez seulement des noms de clients d'exemple ; ne collez jamais dans l'IA de vrais messages de clients avec des noms ou des numéros.",
      "Faites jouer par deux la méthode LAST avec une réclamation inventée avant d'écrire la réponse.",
      "Rappelez aux propriétaires que les réclamations pour blessure vont à un professionnel ou à leur assureur, pas à une réponse de l'IA.",
      "Notez le kit avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
