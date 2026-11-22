"use strict";

// Koach Learn course, French translation of shared/social-media-apps.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

module.exports = {
  id: "social-media-apps-fr",
  lang: "fr",
  translationOf: "social-media-apps",
  category: "Seniors and Technology",
  name: "Les réseaux sociaux et comment les utiliser",
  skills: "Choisir un réseau social, Créer un profil sûr, Publier et commenter, Régler la confidentialité, Repérer les faux comptes et les arnaques",
  outcome: "créer un compte sur un réseau social avec des réglages de confidentialité sûrs, suivre les personnes et les groupes qui comptent pour vous, publier et commenter avec gentillesse, et repérer et signaler les faux comptes et les arnaques.",
  about: [
    "Les réseaux sociaux comme Facebook, Instagram, WhatsApp, YouTube, TikTok et LinkedIn sont l'endroit où beaucoup de familles partagent leurs photos, où les associations publient leurs nouvelles et où les employeurs cherchent des travailleurs.",
    "Ce cours vous montre comment choisir une application, créer un profil qui garde votre vie privée pour vous, publier et commenter, et vous protéger des faux comptes et des arnaques.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Sur un réseau social : réglez votre profil pour que seuls vos amis ou les abonnés que vous acceptez voient vos publications, suivez un membre de votre famille ou un ami et un groupe ou une page de votre quartier, écrivez un commentaire gentil sous une publication, et trouvez le bouton Signaler sur une publication ou un compte pour savoir où il se trouve.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui veulent utiliser les réseaux sociaux pour suivre leur famille, leurs amis, leur église, des groupes de quartier ou des offres d'emploi : seniors, grands-parents, personnes qui reviennent dans la communauté, nouveaux arrivants et parents d'adolescents.",
    startingPoint: "Ils savent utiliser un smartphone ou un ordinateur pour ouvrir des applications et taper. Certains ont un compte créé par un proche ; peu ont vérifié leurs paramètres de confidentialité, activé la validation en deux étapes, ou savent repérer un faux compte, signaler une publication ou bloquer quelqu'un.",
    gap: "Les réseaux sociaux sont l'endroit où beaucoup de familles partagent leurs nouvelles et où l'on publie des groupes, des événements et des emplois, mais aussi l'endroit où les escrocs trouvent leurs victimes. Sans réglages et habitudes sûrs, on en dit trop, on accepte de fausses demandes d'ami, on tombe dans des arnaques sentimentales ou aux faux prix, ou on se sent moins bien à force de faire défiler sans fin.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les mots comme fil d'actualité, profil et paramètres de confidentialité sont expliqués",
      "Appareils : un smartphone, une tablette ou un ordinateur avec internet",
      "Temps : environ 5 minutes par leçon, environ 60 minutes au total",
      "Coût : seulement des applications gratuites, venant du magasin d'applications officiel",
      "Vie privée et âge : les apprenants ne mettent ni leur adresse, ni leur année de naissance, ni leurs projets de voyage, et vérifient l'âge minimum de chaque application avant qu'un enfant ou un adolescent s'inscrive"
    ],
    prerequisites: "Aucun. « Utiliser un smartphone et une tablette » aide les apprenants qui découvrent les applications."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de quelque chose que vous voulez faire, comme voir des photos de famille ou trouver un emploi", action: "choisir le réseau social qui y correspond", standard: "en choisissant la bonne application chaque fois" },
    { id: "O2", condition: "Avec un réseau social venant du magasin officiel", action: "créer un compte avec un profil sûr et activer la validation en deux étapes", standard: "sans adresse, année de naissance ni numéro de téléphone sur le profil, et avec la validation en deux étapes activée" },
    { id: "O3", condition: "Sur votre compte de réseau social", action: "suivre des personnes et des groupes que vous avez vérifiés, écrire une publication et laisser un commentaire gentil", standard: "en vérifiant qui peut voir chaque publication avant de la partager" },
    { id: "O4", condition: "Dans les paramètres de confidentialité de l'application", action: "régler qui peut voir vos publications, vous trouver et vous écrire", standard: "avec les publications réservées aux amis ou aux abonnés approuvés et la localisation désactivée dans les publications" },
    { id: "O5", condition: "À partir d'une demande d'ami ou d'un message", action: "repérer les signes d'un faux compte ou d'une arnaque et le refuser", standard: "en nommant au moins deux signes d'alerte et sans jamais envoyer d'argent, de cartes cadeaux ou de codes" },
    { id: "O6", condition: "À partir d'une publication, d'un compte ou d'une habitude non voulus", action: "bloquer, signaler ou masquer, et fixer une limite de temps pour l'application", standard: "en choisissant le bon outil pour chaque cas" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Débuter sur les réseaux sociaux",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que sont les réseaux sociaux et à quoi sert chaque application",
          minutes: 4,
          goal: "Choisir le réseau social qui correspond à ce que vous voulez faire.",
          text: [
            "Les réseaux sociaux permettent de partager des mots, des photos et des vidéos et de se parler. Chacun est bon pour des choses différentes.",
            "Facebook : famille, amis, groupes locaux et événements. Instagram : photos et vidéos courtes. WhatsApp : messages et appels gratuits avec la famille, même dans d'autres pays. YouTube : des vidéos à regarder et pour apprendre. TikTok : vidéos courtes. LinkedIn : emploi et contacts professionnels. Nextdoor : les nouvelles de votre quartier (surtout aux États-Unis).",
            "Vous n'avez pas besoin de tous. Commencez par celui qui correspond à ce que vous voulez, comme voir les photos de famille ou trouver un emploi. Chaque application fixe un âge minimum dans ses règles ; vérifiez-les avant qu'un enfant ou un adolescent s'inscrive."
          ],
          words: [["Réseau social", "des applications et des sites où les gens partagent des publications et se parlent."], ["Publication", "quelque chose que vous partagez : des mots, une photo ou une vidéo."], ["Fil d'actualité", "la liste des publications que vous faites défiler."]],
          slides: [
            { title: "Ce que sont les réseaux sociaux", bullets: ["Des applications pour partager mots, photos et vidéos", "Et pour se parler"] },
            { title: "À quoi sert chaque application", bullets: ["Facebook : famille, amis, groupes locaux", "Instagram et TikTok : photos et vidéos courtes", "WhatsApp : messages et appels", "YouTube : vidéos ; LinkedIn : emploi"] },
            { title: "Commencez par un seul", bullets: ["Choisissez l'application qui correspond à votre but", "Vérifiez les règles d'âge de chaque appli pour les enfants"] }
          ],
          tryIt: "Notez une chose que vous attendez des réseaux sociaux (par exemple : voir les photos des petits-enfants, rejoindre un groupe d'église ou de quartier, ou trouver du travail). À côté, écrivez l'application de cette leçon qui convient le mieux.",
          youCanNow: "dire à quoi servent les principaux réseaux sociaux et en choisir un qui correspond à votre but.",
          quickCheck: [
            { objective: "O1", q: "Quelle application sert surtout aux nouvelles de votre quartier ?", options: ["LinkedIn", "TikTok", "Nextdoor", "Instagram"], answer: 2, why: "Nextdoor sert aux nouvelles de votre quartier." },
            { objective: "O1", q: "Vous voulez voir les photos de vos petits-enfants et rejoindre un groupe d'église local. Par quelle application commencez-vous ?", options: ["LinkedIn", "Facebook", "Un site d'emploi", "Toutes en même temps"], answer: 1, why: "Facebook sert pour la famille, les amis, les groupes locaux et les événements ; commencez par une application qui correspond." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Créer un profil sûr",
          minutes: 5,
          goal: "Créer un compte et remplir un profil sans trop en dire.",
          text: [
            "Installez l'application seulement depuis le magasin d'applications officiel, ou allez sur le vrai site de l'entreprise. Inscrivez-vous avec votre e-mail ou votre numéro de téléphone et un mot de passe fort que vous n'utilisez nulle part ailleurs.",
            "Votre profil est la page qui dit aux gens qui vous êtes. Ajoutez votre nom et une photo souriante. N'indiquez pas votre année de naissance, votre adresse, votre numéro de téléphone ni quand vous êtes absent de chez vous. Les escrocs rassemblent ces détails.",
            "Activez la validation en deux étapes (parfois appelée authentification à deux facteurs) dans les paramètres de sécurité de l'application. Ainsi, même si quelqu'un vole votre mot de passe, il lui faut aussi un code reçu sur votre téléphone."
          ],
          steps: ["Installez l'application depuis le magasin d'applications officiel.", "Inscrivez-vous avec un e-mail ou un téléphone et un nouveau mot de passe fort.", "Ajoutez votre nom et une photo souriante.", "N'indiquez pas votre adresse, votre téléphone, votre date de naissance complète ni vos projets de voyage.", "Ouvrez les paramètres de sécurité et activez la validation en deux étapes."],
          words: [["Profil", "votre page qui montre qui vous êtes sur l'application."], ["Validation en deux étapes", "une deuxième vérification, en général un code envoyé sur votre téléphone, quand vous vous connectez."]],
          slides: [
            { title: "S'inscrire en sécurité", bullets: ["Magasin d'applications officiel ou vrai site", "Un mot de passe fort utilisé nulle part ailleurs"] },
            { title: "Ce qu'il faut mettre dans votre profil", bullets: ["Votre nom", "Une photo souriante"] },
            { title: "Ce qu'il ne faut pas mettre", bullets: ["Adresse et numéro de téléphone", "Date de naissance complète", "Quand vous êtes absent de chez vous"] },
            { title: "Activez la validation en deux étapes", bullets: ["Dans les paramètres de sécurité", "Un voleur aura aussi besoin du code de votre téléphone"] }
          ],
          tryIt: "Créez un compte sur l'application choisie (ou ouvrez celui que vous avez). Vérifiez votre profil : enlevez tout ce qui est dans la liste « ce qu'il ne faut pas mettre » et activez la validation en deux étapes.",
          youCanNow: "créer un profil de réseau social qui montre qui vous êtes sans livrer de détails privés.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que votre profil ?", options: ["La page qui dit aux gens qui vous êtes", "Une liste de publications des autres", "Votre mot de passe", "Un réglage qui vous cache"], answer: 0, why: "Votre profil est votre page, avec votre nom et votre photo." },
            { objective: "O2", q: "L'inscription demande d'afficher sur votre profil votre date de naissance complète, votre adresse et votre téléphone. Que faites-vous ?", options: ["Tout afficher pour que les gens vous trouvent", "Afficher seulement votre adresse", "Publier aussi vos dates de voyage", "Les laisser hors de votre profil, parce que les escrocs collectent ces détails"], answer: 3, why: "Ne pas afficher votre année de naissance, votre adresse et votre numéro de téléphone vous protège des escrocs." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Suivre, publier et commenter",
          minutes: 5,
          goal: "Suivre des personnes et des groupes, écrire une publication et laisser un commentaire gentil.",
          text: [
            "Pour voir les publications de quelqu'un, envoyez une demande d'ami ou abonnez-vous. Cherchez son nom, vérifiez la photo et les amis en commun pour être sûr que c'est bien elle ou lui, et touchez Ajouter en ami ou S'abonner. Vous pouvez aussi rejoindre des groupes : une église, un quartier, un loisir ou un groupe pour l'emploi.",
            "Pour publier, touchez la case qui vous demande à quoi vous pensez, ou le bouton +. Écrivez quelques mots, ajoutez une photo si vous voulez, vérifiez qui pourra la voir, et touchez Publier ou Partager.",
            "Réagir (comme un pouce levé ou un cœur) montre que vous avez vu une publication. Commenter ajoute vos mots en dessous. Soyez gentil : écrivez comme si la personne était dans la pièce. N'oubliez pas que ce que vous publiez peut être copié et vu longtemps."
          ],
          steps: ["Cherchez une personne ou un groupe par son nom.", "Vérifiez que c'est le vrai : photo, amis en commun, publications.", "Touchez Ajouter en ami, S'abonner ou Rejoindre.", "Pour publier : touchez la case de publication ou +, écrivez, ajoutez une photo, vérifiez qui peut la voir, puis Publier.", "Pour commenter : touchez Commenter sous une publication, écrivez quelque chose de gentil, envoyez."],
          words: [["S'abonner (suivre)", "choisir de voir les publications de quelqu'un dans votre fil."], ["Groupe", "un espace de l'application pour les personnes qui ont le même intérêt."], ["Commentaire", "les mots que vous écrivez sous la publication de quelqu'un."], ["Réagir", "toucher un j'aime, un cœur ou un autre symbole sur une publication."]],
          slides: [
            { title: "Suivre et rejoindre", bullets: ["Cherchez le nom", "Vérifiez que c'est bien la personne", "Touchez Ajouter en ami, S'abonner ou Rejoindre"] },
            { title: "Faire une publication", bullets: ["Touchez la case de publication ou +", "Écrivez et ajoutez une photo", "Vérifiez qui peut la voir, puis Publier"] },
            { title: "Réagir et commenter", bullets: ["Réagir : j'aime ou cœur", "Commenter : vos mots sous une publication", "Soyez gentil ; les publications peuvent durer longtemps"] }
          ],
          tryIt: "Suivez un membre de votre famille ou un ami et rejoignez ou suivez un groupe ou une page de votre quartier. Puis laissez un commentaire gentil sous l'une de leurs publications.",
          youCanNow: "suivre des personnes et des groupes, faire une publication, et réagir et commenter avec gentillesse.",
          quickCheck: [
            { objective: "O3", q: "Que montre une réaction, comme un pouce levé ou un cœur ?", options: ["Que vous voulez bloquer la personne", "Que vous avez signalé la publication", "Que vous avez partagé la publication avec tout le monde", "Que vous avez vu la publication"], answer: 3, why: "Une réaction montre que vous avez vu une publication ; un commentaire ajoute vos mots." },
            { objective: "O3", q: "Vous n'êtes pas d'accord avec la publication d'un cousin. Que faites-vous ?", options: ["Écrire gentiment, comme si la personne était dans la pièce, ou ne rien dire", "Écrire un commentaire en colère en majuscules", "Publier son numéro de téléphone", "Partager la publication avec une insulte"], answer: 0, why: "Soyez gentil : ce que vous publiez peut être copié et vu longtemps." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Débuter sur les réseaux sociaux",
        questions: [
          { objective: "O1", q: "Vous voulez des appels et des messages gratuits avec votre famille dans un autre pays. Quelle application convient le mieux ?", options: ["LinkedIn", "WhatsApp", "Nextdoor", "TikTok"], answer: 1, why: "WhatsApp sert aux messages et aux appels, y compris entre pays." },
          { objective: "O2", q: "Quel détail faut-il NE PAS mettre dans votre profil ?", options: ["Votre prénom", "Une photo souriante", "Votre adresse", "Un loisir préféré"], answer: 2, why: "Une adresse permet à des inconnus de vous trouver." },
          { objective: "O2", q: "Que fait la validation en deux étapes ?", options: ["Elle demande un code de votre téléphone en plus du mot de passe", "Elle agrandit les publications", "Elle ajoute des amis pour vous", "Elle supprime votre compte"], answer: 0, why: "Un voleur aurait aussi besoin du code de votre téléphone." },
          { objective: "O3", q: "Vous cherchez votre nièce et trouvez deux comptes à son nom. Que faites-vous ?", options: ["Ajouter les deux", "Envoyer de l'argent aux deux", "Donner votre mot de passe aux deux", "Vérifier d'abord la photo, les amis en commun et les publications"], answer: 3, why: "Vérifier aide à éviter les faux comptes copiés." },
          { objective: "O3", q: "Qu'est-ce qu'un commentaire ?", options: ["Votre mot de passe", "Un message bancaire privé", "Les mots que vous écrivez sous la publication de quelqu'un", "Une mise à jour de l'application"], answer: 2, why: "Un commentaire est votre réponse écrite sous une publication." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Protéger sa vie privée et rester en sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "La confidentialité : choisir qui voit quoi",
          minutes: 5,
          goal: "Régler vos publications et votre profil pour que seules les personnes choisies puissent les voir.",
          text: [
            "Chaque application a des paramètres de confidentialité. Ils décident qui peut voir vos publications, qui peut vous trouver et qui peut vous écrire. Public veut dire tout le monde sur la planète. Amis ou abonnés acceptés veut dire seulement les personnes à qui vous avez dit oui.",
            "Cherchez Paramètres, puis Confidentialité (sur certaines applications, c'est dans un menu à trois traits ou sous votre photo de profil). Beaucoup d'applications ont aussi une vérification de la confidentialité qui vous guide choix par choix.",
            "Un bon début : publications visibles par les amis seulement, accepter vous-même les nouveaux abonnés, et limiter qui peut vous écrire. Désactivez le partage de position dans les publications si vous ne voulez pas que les gens sachent où vous êtes."
          ],
          steps: ["Ouvrez le menu de l'application ou votre photo de profil.", "Choisissez Paramètres, puis Confidentialité (ou la vérification de la confidentialité).", "Réglez qui peut voir vos publications sur amis ou abonnés acceptés.", "Réglez qui peut vous écrire et vous trouver.", "Désactivez la position dans les publications si vous n'en avez pas besoin."],
          words: [["Public", "tout le monde, même des inconnus, peut le voir."], ["Paramètres de confidentialité", "les choix qui contrôlent qui voit vos publications et votre profil."], ["Partage de position", "montrer où vous êtes quand vous publiez."]],
          slides: [
            { title: "Qui peut le voir ?", bullets: ["Public : tout le monde sur la planète", "Amis ou abonnés acceptés : seulement ceux à qui vous dites oui"] },
            { title: "Trouver les paramètres de confidentialité", bullets: ["Menu ou photo de profil, puis Paramètres", "Cherchez Confidentialité ou une vérification de confidentialité"] },
            { title: "Un bon début", bullets: ["Publications : amis seulement", "Acceptez vous-même les abonnés", "Limitez qui peut vous écrire", "Position désactivée dans les publications"] }
          ],
          tryIt: "Ouvrez les paramètres de confidentialité de votre application. Réglez vos publications sur amis ou abonnés acceptés seulement, et désactivez la position dans les publications. Puis regardez votre profil comme le verrait un inconnu, si l'application le permet.",
          youCanNow: "régler votre confidentialité pour que seules les personnes choisies voient vos publications et vos informations.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une vérification de confidentialité ?", options: ["Une visite chez le médecin", "Un outil présent dans beaucoup d'applications qui vous guide dans chaque choix de confidentialité", "Une façon de publier en public", "Un message frauduleux"], answer: 1, why: "Beaucoup d'applications proposent une vérification de confidentialité qui vous guide dans chaque choix." },
            { objective: "O4", q: "Vous ne voulez pas que des inconnus voient où vous êtes quand vous publiez. Que faites-vous ?", options: ["Rendre toutes les publications publiques", "Publier votre adresse à la place", "Désactiver le partage de la localisation dans les publications", "Accepter toutes les demandes d'ami"], answer: 2, why: "Désactiver la localisation dans les publications empêche les gens de savoir où vous êtes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Repérer les faux comptes et les arnaques",
          minutes: 5,
          goal: "Reconnaître un faux compte ou un message frauduleux et le refuser.",
          text: [
            "Les escrocs créent de faux comptes, parfois en copiant le nom et la photo d'un vrai ami. Une deuxième demande d'ami de quelqu'un qui est déjà votre ami est un signal d'alerte. Demandez à la vraie personne par téléphone avant d'accepter.",
            "La Federal Trade Commission (FTC), l'agence américaine de protection des consommateurs, liste les signes d'une arnaque : faire semblant d'être quelqu'un que vous connaissez ou en qui vous avez confiance, un problème ou un prix, une pression pour agir tout de suite, et une demande de paiement par carte cadeau, virement, application de paiement ou cryptomonnaie. Sur les réseaux sociaux, cela ressemble à « Vous avez gagné ! Payez de petits frais », à des messages d'amour qui demandent vite de l'argent, et à des offres d'emploi ou d'investissement « trop belles pour être vraies ».",
            "N'envoyez jamais d'argent, de cartes cadeaux ni de codes à quelqu'un que vous n'avez rencontré qu'en ligne. Aux États-Unis, on peut signaler les arnaques sur reportfraud.ftc.gov."
          ],
          steps: ["Méfiez-vous des nouvelles demandes d'ami, surtout de personnes que vous connaissez déjà.", "Vérifiez par téléphone ou en personne avant d'accepter.", "Méfiez-vous : d'un prix, de la précipitation, des demandes d'argent ou de cartes cadeaux, et des offres d'amour ou d'emploi qui finissent en demande d'argent.", "Ne cliquez pas sur leurs liens et n'envoyez ni argent ni codes.", "Signalez le compte dans l'application, et aux États-Unis sur reportfraud.ftc.gov."],
          words: [["Faux compte", "un profil créé par un escroc, qui copie souvent une vraie personne."], ["Arnaque sentimentale", "un escroc fait semblant de vous aimer en ligne, puis demande de l'argent."]],
          slides: [
            { title: "Les faux comptes", bullets: ["Une deuxième demande d'un ami que vous avez déjà", "Profil récent, peu de publications, peu d'amis", "Vérifiez d'abord avec la vraie personne"] },
            { title: "Signes d'arnaque selon la FTC", bullets: ["Fait semblant d'être quelqu'un de confiance", "Un problème ou un prix", "Une pression pour agir tout de suite", "Paiement par carte cadeau, virement, appli de paiement ou crypto"] },
            { title: "N'envoyez jamais", bullets: ["D'argent ou de cartes cadeaux à quelqu'un connu seulement en ligne", "De codes reçus sur votre téléphone"] },
            { title: "Signalez-le", bullets: ["Utilisez le bouton Signaler de l'application", "États-Unis : reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC (agence américaine de protection des consommateurs) : comment éviter une arnaque", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC : signaler une fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Regardez vos demandes d'ami ou vos abonnés. Pour ceux dont vous n'êtes pas sûr, cherchez les signes d'alerte dans le profil. Refusez toute personne dont vous ne pouvez pas confirmer qu'elle est réelle.",
          youCanNow: "repérer un faux compte ou une arnaque sur les réseaux sociaux et le refuser.",
          quickCheck: [
            { objective: "O5", q: "Lequel de ces éléments est un signe d'alerte d'une arnaque sur les réseaux sociaux ?", options: ["La pression pour agir tout de suite et payer avec une carte cadeau", "Un ami que vous connaissez qui partage une photo d'anniversaire", "Un groupe local qui publie l'heure d'une réunion", "Une vidéo de cuisine"], answer: 0, why: "La pression pour agir tout de suite et le paiement par carte cadeau sont des signes listés par la FTC." },
            { objective: "O5", q: "Quelqu'un rencontré en ligne vous propose un emploi si vous lui envoyez d'abord un code reçu sur votre téléphone. Que faites-vous ?", options: ["Envoyer vite le code", "Envoyer de l'argent à la place du code", "Lui donner votre mot de passe", "Refuser et ne jamais envoyer de codes à quelqu'un rencontré seulement en ligne"], answer: 3, why: "N'envoyez jamais d'argent, de cartes cadeaux ou de codes à quelqu'un que vous avez seulement rencontré en ligne." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Signaler, bloquer et faire une pause",
          minutes: 4,
          goal: "Bloquer ou signaler un compte et contrôler le temps que vous y passez.",
          text: [
            "Bloquer empêche une personne de voir vos publications ou de vous contacter. Signaler dit à l'application qu'un compte ou une publication enfreint ses règles, comme une arnaque, un faux compte ou du harcèlement. Se désabonner ou masquer cache les publications de quelqu'un sans le lui dire.",
            "Ces boutons se trouvent en général dans le menu à trois points d'une publication ou du profil d'une personne. L'application ne dit pas à la personne que vous l'avez signalée.",
            "Les réseaux sociaux sont faits pour vous garder en train de faire défiler. Beaucoup de téléphones et d'applications ont un réglage de temps d'écran ou de limite de temps. Choisissez des moments pour les consulter, et faites une pause si des publications vous mettent en colère ou vous rendent triste."
          ],
          steps: ["Touchez les trois points sur la publication ou le profil.", "Choisissez Signaler et indiquez la raison, ou Bloquer.", "Utilisez Masquer ou Se désabonner pour cacher des publications discrètement.", "Dans les Paramètres, cherchez le temps d'écran ou une limite de temps par jour."],
          words: [["Bloquer", "empêcher une personne de vous voir ou de vous contacter."], ["Signaler", "dire à l'application qu'un compte ou une publication enfreint ses règles."], ["Masquer", "cacher les publications de quelqu'un sans le lui dire."]],
          slides: [
            { title: "Vos outils", bullets: ["Bloquer : la personne ne peut plus vous contacter", "Signaler : prévenir l'application d'un problème", "Masquer ou Se désabonner : cacher discrètement"] },
            { title: "Où les trouver", bullets: ["Le menu à trois points d'une publication ou d'un profil", "La personne ne sait pas que vous l'avez signalée"] },
            { title: "Faites une pause", bullets: ["Utilisez le temps d'écran ou une limite de temps", "Éloignez-vous si des publications vous contrarient"] }
          ],
          tryIt: "Entraînement pour la tâche finale : sur n'importe quelle publication, touchez les trois points et trouvez Signaler, Bloquer et Masquer (n'appuyez pas dessus sauf si vous en avez besoin). Puis vérifiez que votre confidentialité est toujours réglée sur amis seulement.",
          youCanNow: "bloquer, signaler ou masquer un compte et limiter votre temps.",
          quickCheck: [
            { objective: "O6", q: "Que fait Signaler ?", options: ["Il envoie votre adresse à la personne", "Il supprime votre compte", "Il dit à l'application qu'une publication ou un compte enfreint ses règles", "Il rend vos publications publiques"], answer: 2, why: "Signaler prévient l'application d'une arnaque, d'un faux compte ou de harcèlement." },
            { objective: "O6", q: "Un proche publie tellement que vous voulez en voir moins, sans le vexer. Que faites-vous ?", options: ["Le signaler comme arnaque", "Le masquer ou vous désabonner", "Le bloquer et le dire à tout le monde", "Supprimer votre propre compte"], answer: 1, why: "Masquer ou se désabonner cache ses publications sans le prévenir." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Protéger sa vie privée et rester en sécurité",
        questions: [
          { objective: "O4", q: "Que veut dire « public » pour une publication ?", options: ["Vous seul pouvez la voir", "Tout le monde, même des inconnus, peut la voir", "Seule votre famille peut la voir", "Elle est supprimée"], answer: 1, why: "Les publications publiques peuvent être vues par tout le monde." },
          { objective: "O5", q: "Un ami avec qui vous êtes déjà connecté vous envoie une nouvelle demande d'ami. Quelle est l'étape la plus sûre ?", options: ["L'accepter tout de suite", "Lui envoyer de l'argent", "Appeler le vrai ami pour vérifier avant d'accepter", "Lui donner le code de votre téléphone"], answer: 2, why: "Les escrocs copient les comptes de vrais amis." },
          { objective: "O5", q: "Quelqu'un rencontré en ligne le mois dernier dit qu'il vous aime et qu'il a besoin d'argent pour un billet d'avion. C'est très probablement :", options: ["Une arnaque sentimentale", "Une demande normale", "Une offre d'emploi", "Un paramètre de confidentialité"], answer: 0, why: "Un amour en ligne qui se transforme en demande d'argent est une arnaque courante." },
          { objective: "O6", q: "Quel bouton empêche une personne de vous contacter ?", options: ["J'aime", "Partager", "Commenter", "Bloquer"], answer: 3, why: "Bloquer l'empêche de vous voir ou de vous contacter." },
          { objective: "O6", q: "Où trouve-t-on en général Signaler et Bloquer ?", options: ["Dans l'appareil photo", "Dans le menu à trois points d'une publication ou d'un profil", "Dans vos contacts", "Dans le magasin d'applications"], answer: 1, why: "Le menu à trois points contient ces options." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les réseaux sociaux et comment les utiliser",
    questions: [
      { objective: "O1", q: "Quelle application sert surtout à l'emploi et aux contacts professionnels ?", options: ["TikTok", "LinkedIn", "Instagram", "YouTube"], answer: 1, why: "LinkedIn est fait pour le travail et l'emploi." },
      { objective: "O1", q: "Quelle application sert surtout à regarder des vidéos et à apprendre avec elles ?", options: ["YouTube", "WhatsApp", "Nextdoor", "LinkedIn"], answer: 0, why: "YouTube est une application de vidéos." },
      { objective: "O3", q: "Un « fil d'actualité », c'est :", options: ["Votre mot de passe", "Un paramètre de confidentialité", "La liste des publications que vous faites défiler", "Une sorte de commentaire"], answer: 2, why: "Votre fil montre les publications des personnes et des groupes que vous suivez." },
      { objective: "O2", q: "D'où faut-il installer un réseau social ?", options: ["D'un lien envoyé par un inconnu", "D'une fenêtre publicitaire", "De n'importe quel site", "Du magasin d'applications officiel"], answer: 3, why: "Les magasins officiels ont les vraies applications." },
      { objective: "O2", q: "Qu'est-ce qui a sa place dans un profil sûr ?", options: ["Votre nom et une photo souriante", "Votre date de naissance complète et votre adresse", "Vos coordonnées bancaires", "Vos dates de voyage"], answer: 0, why: "Le nom et la photo ne posent pas de problème ; les détails privés, si." },
      { objective: "O2", q: "Pourquoi ne pas publier que vous êtes en vacances ?", options: ["Cela ralentit l'application", "Cela dit à des inconnus que votre maison est peut-être vide", "C'est interdit par toutes les lois", "Cela utilise votre forfait"], answer: 1, why: "Les publications de voyage peuvent dire aux voleurs quand personne n'est à la maison." },
      { objective: "O2", q: "La validation en deux étapes demande :", options: ["Seulement votre mot de passe", "Le mot de passe d'un ami", "Votre numéro de compte bancaire", "Votre mot de passe et un code de votre téléphone"], answer: 3, why: "Elle ajoute une deuxième vérification par votre téléphone." },
      { objective: "O3", q: "Avant de suivre quelqu'un, vérifiez :", options: ["Sa photo, les amis en commun et ses publications", "Le solde de son compte", "Son mot de passe", "Rien"], answer: 0, why: "Cela aide à être sûr que c'est la vraie personne." },
      { objective: "O3", q: "Un groupe sur un réseau social est :", options: ["Un virus", "Un mot de passe", "Un espace pour les personnes qui ont le même intérêt", "Un type de publicité"], answer: 2, why: "Les groupes réunissent des personnes autour d'un intérêt." },
      { objective: "O3", q: "Avant de toucher Publier, vous devez vérifier :", options: ["Votre batterie", "La météo", "Votre compte bancaire", "Qui pourra la voir"], answer: 3, why: "Vérifier le public protège votre vie privée." },
      { objective: "O3", q: "Quel commentaire est gentil et convenable ?", options: ["Un lien envoyé par un inconnu", "Une insulte", "Votre numéro de téléphone", "« Très belle photo, les enfants ont l'air si heureux ! »"], answer: 3, why: "Écrivez comme si la personne était dans la pièce." },
      { objective: "O4", q: "Les paramètres de confidentialité contrôlent :", options: ["La batterie de votre téléphone", "Les couleurs de l'application", "Qui peut voir vos publications et vous contacter", "La vitesse de votre internet"], answer: 2, why: "Ils décident qui vous voit et qui peut vous joindre." },
      { objective: "O4", q: "Un bon premier choix de confidentialité est :", options: ["Publications en public", "Laisser tout le monde vous écrire", "Partager votre position dans chaque publication", "Publications réservées aux amis ou abonnés acceptés"], answer: 3, why: "Les amis seulement, cela tient les inconnus à l'écart." },
      { objective: "O4", q: "Désactiver la position dans les publications :", options: ["Bloque vos amis", "Supprime votre compte", "Empêche les gens de savoir où vous êtes", "Rend les photos floues"], answer: 2, why: "Votre position n'apparaît plus sur les publications." },
      { objective: "O5", q: "Un message dit que vous avez gagné un prix mais que vous devez d'abord payer de petits frais. C'est :", options: ["Un prix normal", "Un paramètre de confidentialité", "Une demande d'ami", "Un signe d'arnaque"], answer: 3, why: "La FTC cite un prix avec des frais comme un signe d'arnaque." },
      { objective: "O5", q: "Quelle demande de paiement est un signal d'alerte ?", options: ["Des cartes cadeaux", "Payer un magasin au comptoir", "Payer sa facture de téléphone sur le site de l'opérateur", "Payer un médecin à l'accueil"], answer: 0, why: "Les escrocs demandent des cartes cadeaux car elles sont difficiles à tracer." },
      { objective: "O5", q: "Aux États-Unis, vous pouvez signaler une arnaque sur les réseaux sociaux à :", options: ["Une section de commentaires", "L'escroc", "reportfraud.ftc.gov", "Votre fil d'actualité"], answer: 2, why: "La FTC y reçoit les signalements de fraude." },
      { objective: "O6", q: "Que fait Masquer ?", options: ["Il signale un crime", "Il supprime son compte", "Il appelle la police", "Il cache les publications de quelqu'un sans le lui dire"], answer: 3, why: "Masquer cache discrètement les publications." },
      { objective: "O6", q: "Quand vous signalez un compte, l'application :", options: ["Lui dit votre nom", "Supprime votre profil", "Ne lui dit pas que vous l'avez signalé", "Fait payer des frais"], answer: 2, why: "Les signalements restent cachés à la personne." },
      { objective: "O6", q: "Des publications vous mettent sans cesse en colère. Une bonne étape pour votre santé est de :", options: ["Faire défiler encore plus", "Utiliser une limite de temps et faire une pause", "Publier votre adresse", "Accepter toutes les demandes"], answer: 1, why: "Les limites de temps et les pauses protègent votre bien-être." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      5,
      7,
      9,
      11,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Paramètres de confidentialité",
        objective: "O4",
        notYet: "Les publications sont encore publiques, ou n'importe qui peut vous suivre sans approbation.",
        meets: "Les publications ne sont visibles que par les amis ou les abonnés approuvés.",
        exceeds: "Limite aussi qui peut vous écrire et désactive la localisation dans les publications."
      },
      {
        name: "Suivre en sécurité",
        objective: "O3",
        notYet: "Ne suit personne, ou suit un compte sans avoir vérifié qu'il est vrai.",
        meets: "Suit un membre de la famille ou un ami vérifié et un groupe ou une page locale.",
        exceeds: "Explique comment la photo, les amis en commun et les publications ont été vérifiés."
      },
      {
        name: "Commentaire gentil",
        objective: "O3",
        notYet: "Aucun commentaire, ou le commentaire est méchant ou partage des détails privés.",
        meets: "Un commentaire gentil et adapté sur une publication.",
        exceeds: "Le commentaire est chaleureux et propre à la publication."
      },
      {
        name: "Bouton Signaler",
        objective: "O6",
        notYet: "Ne trouve pas Signaler sur une publication ou un compte.",
        meets: "Trouve Signaler dans le menu à trois points d'une publication ou d'un compte.",
        exceeds: "Trouve aussi Bloquer et Masquer et dit quand utiliser chacun."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille de l'exercice final",
      "Apprenants qui disent garder leurs publications privées et la validation en deux étapes activée 30 jours plus tard (enquête de suivi)",
      "Apprenants qui disent avoir refusé ou signalé une fausse demande d'ami ou un message frauduleux",
      "Apprenants qui disent avoir rejoint un groupe local, d'église, d'emploi ou de famille qu'ils utilisent"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone, une tablette ou un ordinateur avec internet",
      "Un réseau social venant du magasin officiel, et une adresse e-mail ou un numéro de téléphone pour l'inscription",
      "Des captures d'écran d'exemples de messages frauduleux et de fausses demandes d'ami pour s'exercer",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Laissez chaque apprenant choisir une application qui correspond à son but ; n'obligez pas tout le monde à rejoindre la même.",
      "Faites les paramètres de confidentialité ensemble, étape par étape, sur l'écran de chaque apprenant ; ne vous connectez jamais vous-même au compte d'un apprenant.",
      "Utilisez des captures d'écran pour l'exercice sur les arnaques, pour que personne n'ait à contacter un vrai escroc.",
      "Parlez des âges minimums si des apprenants créent des comptes pour des petits-enfants ou des enfants.",
      "Certains apprenants ont peut-être déjà été victimes d'une arnaque en ligne ; gardez un ton sans reproche et montrez où signaler."
    ]
  }
};
