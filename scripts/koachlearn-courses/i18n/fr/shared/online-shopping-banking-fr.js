"use strict";

// Koach Learn course, French translation of shared/online-shopping-banking.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// US agency names (FTC, FDIC, NCUA) and the US deposit insurance amounts are kept, with a short explanation; students elsewhere are told to check their own country's scheme.

module.exports = {
  id: "online-shopping-banking-fr",
  lang: "fr",
  translationOf: "online-shopping-banking",
  category: "Seniors and Technology",
  name: "Acheter et gérer sa banque en ligne en sécurité",
  skills: "Vérifier qu'un magasin est réel, Payer de la façon la plus sûre, Suivre et retourner une commande, Utiliser une appli bancaire en sécurité, Repérer et signaler les arnaques financières",
  outcome: "acheter quelque chose en ligne dans un magasin que vous avez vérifié, payer de la façon la plus sûre, garder les preuves, et utiliser l'application ou le site officiel de votre banque pour vérifier votre solde et repérer un prélèvement que vous n'avez pas fait.",
  about: [
    "Aujourd'hui, beaucoup de gens achètent leurs courses, leurs médicaments et des objets pour la maison en ligne et paient leurs factures depuis leur téléphone. Bien fait, cela évite des déplacements et fait gagner du temps. Fait sans prudence, cela peut coûter de l'argent.",
    "Ce cours vous montre comment vérifier un magasin avant d'acheter, payer de la façon qui vous protège le plus, suivre et retourner une commande, utiliser l'application ou le site de votre banque en sécurité, et repérer les arnaques financières.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours enseigne des habitudes sûres ; ce n'est pas un conseil financier. Pour les questions sur votre propre compte, appelez le numéro au dos de votre carte bancaire. Les exemples d'organismes viennent des États-Unis ; dans votre pays, cherchez les organismes équivalents."
  ],
  finalTask: "Choisissez un article dont vous avez besoin. Vérifiez le magasin avec trois contrôles (vraie adresse web, avis et plaintes, conditions de retour), ajoutez l'article au panier et arrêtez-vous à la page de paiement, en notant quel moyen de paiement vous utiliseriez et pourquoi. Puis ouvrez l'application ou le site officiel de votre banque, vérifiez votre solde et vos dernières opérations, et montrez ce que vous feriez si vous voyiez un prélèvement que vous n'avez pas fait.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui veulent acheter et gérer leur banque en ligne en sécurité : seniors, aidants qui gèrent l'argent d'un proche, personnes qui reviennent dans la communauté et ouvrent de nouveaux comptes, et toute personne qui a évité les achats ou la banque en ligne par peur des arnaques.",
    startingPoint: "Ils savent utiliser un téléphone ou un ordinateur pour ouvrir des sites et des applications, et ont parfois un compte bancaire et une carte de débit ou de crédit. Beaucoup ne savent pas bien distinguer un faux magasin d'un vrai, quels moyens de paiement les protègent, comment suivre et retourner une commande, ni quoi faire face à un prélèvement qu'ils n'ont pas fait.",
    gap: "Les achats, le paiement des factures et la banque se font maintenant en ligne, et les escrocs aussi, avec de faux magasins, de faux SMS de livraison et de faux appels de la banque. Quelques vérifications et le moyen de paiement le plus sûr permettent de gagner du temps et de l'argent tout en évitant des pertes difficiles ou impossibles à récupérer.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les mots comme contestation, solde et validation en deux étapes sont expliqués",
      "Appareils : un téléphone ou un ordinateur avec internet ; l'application ou le site officiel de la banque",
      "Temps : environ 5 minutes par leçon, environ 60 minutes au total",
      "Aucun vrai achat nécessaire : l'exercice final s'arrête à la page de paiement",
      "Vie privée : les apprenants ne tapent jamais de numéro de carte, de mot de passe ou de code devant d'autres personnes, sur un Wi-Fi public sans leurs propres données mobiles, ni dans un e-mail, un SMS ou une discussion"
    ],
    prerequisites: "Aucun. « Les bases d'internet » ou « Utiliser un smartphone et une tablette » aide les apprenants qui découvrent les sites et les applications."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un magasin en ligne ou d'une bonne affaire", action: "vérifier le magasin avec trois contrôles avant d'acheter : une vraie adresse web, les avis et les plaintes, et la politique de retour", standard: "avec les trois contrôles faits et une décision claire d'acheter ou de ne pas acheter" },
    { id: "O2", condition: "Sur la page de paiement d'un magasin", action: "choisir un moyen de paiement qui vous protège et expliquer pourquoi", standard: "sans jamais choisir une carte cadeau, un virement, une application de paiement ou de la cryptomonnaie pour un vendeur en ligne" },
    { id: "O3", condition: "Après avoir passé une commande", action: "garder les preuves de la commande, suivre le colis depuis le site ou l'application du magasin et lancer un retour", standard: "avec la confirmation gardée et aucun suivi fait depuis des liens de SMS inattendus" },
    { id: "O4", condition: "Avec l'application ou le site officiel de votre banque", action: "vous connecter en sécurité et vérifier votre solde et vos dernières opérations", standard: "en allant sur la banque sans lien d'un e-mail ou d'un SMS, et en vous déconnectant à la fin" },
    { id: "O5", condition: "À partir de la liste de vos dernières opérations", action: "repérer un prélèvement que vous n'avez pas fait et décrire les étapes pour le signaler et bloquer la carte", standard: "en appelant le numéro inscrit sur la carte ou dans l'application officielle, et en agissant vite" },
    { id: "O6", condition: "À partir d'un appel, d'un SMS ou d'un e-mail au sujet de votre argent", action: "repérer les signes d'une arnaque financière et l'arrêter", standard: "sans jamais donner un mot de passe ou un code, et en rappelant toujours le numéro inscrit sur votre carte" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Acheter en ligne en sécurité",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vérifier qu'un magasin est réel",
          minutes: 5,
          goal: "Vérifier un site avant d'y acheter.",
          text: [
            "Les faux magasins copient l'apparence des vrais et affichent des prix trop beaux pour être vrais. Avant d'acheter, prenez une minute pour vérifier.",
            "Tapez vous-même l'adresse du magasin, ou utilisez son application officielle, au lieu de cliquer sur une publicité ou un lien reçu par SMS. Regardez la barre d'adresse : le nom est-il bien écrit ? Cherchez https et un cadenas, mais sachez que la Federal Trade Commission (FTC), l'agence américaine de protection des consommateurs, prévient que les escrocs peuvent les utiliser aussi.",
            "La FTC conseille de chercher le nom du magasin ou du produit avec le mot « plainte » ou « arnaque » pour voir ce que disent d'autres acheteurs, de lire les avis avec prudence car certains sont faux, et de vérifier les conditions de retour avant d'acheter : combien de jours vous avez, et qui paie le renvoi."
          ],
          steps: ["Tapez vous-même l'adresse du magasin ou utilisez son application officielle.", "Vérifiez l'orthographe de l'adresse web.", "Cherchez le nom du magasin plus « plainte » ou « arnaque ».", "Lisez plusieurs avis, pas seulement les étoiles.", "Lisez les conditions de retour : combien de jours, et qui paie le renvoi."],
          words: [["Adresse web", "le nom d'un site, affiché dans la barre en haut du navigateur, comme target.com."], ["https", "un signe que la connexion à un site est protégée ; les escrocs peuvent aussi l'utiliser."], ["Conditions de retour", "les règles du magasin pour renvoyer un article."]],
          slides: [
            { title: "Les faux magasins ont l'air vrais", bullets: ["Ils copient les vrais logos", "Des prix trop beaux pour être vrais"] },
            { title: "Y aller en sécurité", bullets: ["Tapez vous-même l'adresse ou utilisez l'appli officielle", "Vérifiez l'orthographe", "https et le cadenas aident, mais les escrocs les utilisent aussi"] },
            { title: "Trois contrôles avant d'acheter", bullets: ["Cherchez le nom plus « plainte » ou « arnaque »", "Lisez plusieurs avis, pas seulement les étoiles", "Lisez les conditions de retour"] }
          ],
          sources: [{ name: "FTC (agence américaine de protection des consommateurs) : les achats en ligne", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Choisissez un magasin où vous pourriez acheter. Faites les trois contrôles : cherchez son nom avec « plainte », lisez trois avis, et trouvez combien de jours vous avez pour retourner un article.",
          youCanNow: "vérifier l'adresse, la réputation et les conditions de retour d'un magasin avant d'acheter.",
          quickCheck: [
            { objective: "O1", q: "Que devez-vous vérifier dans la barre d'adresse avant d'acheter ?", options: ["La couleur de la page", "Le nombre d'articles dans le panier", "L'heure", "Que le nom du magasin est bien écrit"], answer: 3, why: "Les faux magasins utilisent souvent des noms qui imitent les vrais : vérifiez l'orthographe." },
            { objective: "O1", q: "Vous voyez sur un réseau social une publicité pour des chaussures à un prix très bas. Que faites-vous ?", options: ["Taper vous-même l'adresse du magasin et chercher son nom avec « plainte » ou « arnaque »", "Cliquer sur la publicité et payer tout de suite", "Envoyer une carte cadeau au vendeur", "Donner votre numéro de carte dans un message"], answer: 0, why: "Aller vous-même sur le magasin et chercher les plaintes vous aide à repérer les faux magasins." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Payer de la façon la plus sûre",
          minutes: 5,
          goal: "Choisir un moyen de paiement qui vous protège si quelque chose tourne mal.",
          text: [
            "La façon de payer compte. La FTC dit que payer par carte de crédit vous donne une forte protection : vous pouvez contester un paiement erroné, pour un article jamais arrivé ou qui ne correspond pas à la description. Agissez vite et prévenez l'émetteur de votre carte dès que vous voyez un problème.",
            "La FTC prévient : ne payez jamais un vendeur en ligne avec des cartes cadeaux, des virements, des applications de paiement ou de la cryptomonnaie. Ces paiements sont difficiles à récupérer, c'est pour cela que les escrocs les demandent.",
            "Ne tapez les données de votre carte que sur la page de paiement d'un magasin que vous avez vérifié, jamais dans un e-mail, un SMS ou une discussion. Sur un ordinateur partagé ou de bibliothèque, ne laissez pas le navigateur enregistrer votre carte."
          ],
          steps: ["Utilisez une carte de crédit quand vous pouvez, ou le paiement sécurisé du magasin vérifié.", "Ne payez jamais un vendeur par carte cadeau, virement, application de paiement ou cryptomonnaie.", "Tapez les données de la carte seulement sur la page de paiement du magasin vérifié.", "N'enregistrez pas votre carte sur un ordinateur partagé.", "Surveillez votre relevé et signalez vite les problèmes."],
          words: [["Carte de crédit", "une carte qui emprunte de l'argent que vous remboursez plus tard ; elle offre une forte protection en cas de contestation."], ["Contestation", "dire à l'émetteur de votre carte qu'un paiement est erroné pour qu'il l'examine."], ["Virement", "envoyer de l'argent directement d'un compte à un autre ; très difficile à récupérer."]],
          slides: [
            { title: "La façon de payer compte", bullets: ["Carte de crédit : forte protection en cas de contestation", "Prévenez vite l'émetteur de votre carte"] },
            { title: "Ne payez jamais un vendeur avec", bullets: ["Des cartes cadeaux", "Des virements", "Des applications de paiement", "De la cryptomonnaie"] },
            { title: "Les données de la carte", bullets: ["Seulement sur la page de paiement d'un magasin vérifié", "Jamais dans un e-mail, un SMS ou une discussion", "Ne les enregistrez pas sur un ordinateur partagé"] }
          ],
          sources: [{ name: "FTC (agence américaine de protection des consommateurs) : les achats en ligne", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Regardez les cartes et les moyens de paiement que vous avez. Écrivez lequel vous utiliseriez pour acheter en ligne et pourquoi, et quels moyens vous refuseriez si un vendeur les demandait.",
          youCanNow: "choisir le moyen de paiement qui vous protège et refuser ceux que demandent les escrocs.",
          quickCheck: [
            { objective: "O2", q: "Que veut dire contester un prélèvement ?", options: ["Le payer deux fois", "Demander à l'organisme de votre carte de corriger un prélèvement erroné", "Envoyer une carte cadeau au vendeur", "Supprimer votre compte"], answer: 1, why: "Avec une carte de crédit, vous pouvez contester un prélèvement pour un article défectueux ou jamais arrivé." },
            { objective: "O2", q: "Un vendeur en ligne dit qu'il accepte seulement les virements. Que faites-vous ?", options: ["Faire le virement", "Payer la moitié par virement et la moitié par carte cadeau", "Ne pas acheter : la FTC conseille de ne jamais payer un vendeur en ligne de cette façon", "Payer plutôt en cryptomonnaie"], answer: 2, why: "Les virements sont difficiles à récupérer, c'est pour cela que les escrocs les demandent." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Suivre, recevoir et retourner une commande",
          minutes: 4,
          goal: "Garder les preuves de votre commande, suivre un colis et faire un retour.",
          text: [
            "Après l'achat, le magasin envoie une confirmation de commande par e-mail. Gardez-la. La FTC conseille de garder les détails de la commande, les conditions de retour, la promesse de livraison du vendeur, vos échanges avec le vendeur et votre relevé de paiement.",
            "Suivez le colis depuis votre compte sur le site ou l'application du magasin, pas depuis un lien reçu par un SMS inattendu. Les faux SMS de « problème de livraison » sont une arnaque courante.",
            "Pour retourner un article, connectez-vous à votre compte, trouvez la commande et choisissez retour. Suivez les étapes, gardez le reçu du dépôt et surveillez le remboursement sur votre relevé. Si le vendeur refuse de régler un problème, aux États-Unis vous pouvez le signaler à la FTC sur reportfraud.ftc.gov."
          ],
          steps: ["Gardez l'e-mail de confirmation de commande.", "Suivez le colis depuis votre compte sur le site ou l'appli du magasin.", "Ignorez les SMS de livraison inattendus avec des liens.", "Pour un retour : connectez-vous, trouvez la commande, choisissez retour, suivez les étapes.", "Gardez le reçu du dépôt et vérifiez le remboursement."],
          words: [["Confirmation de commande", "l'e-mail qui prouve ce que vous avez acheté et payé."], ["Suivi", "savoir où se trouve votre colis pendant qu'il arrive."], ["Remboursement", "de l'argent qu'on vous rend."]],
          slides: [
            { title: "Gardez les preuves", bullets: ["Confirmation de commande", "Conditions de retour et promesse de livraison", "Échanges et relevé"] },
            { title: "Suivez en sécurité", bullets: ["Utilisez votre compte sur le site ou l'appli du magasin", "Ignorez les SMS de livraison inattendus avec liens"] },
            { title: "Les retours", bullets: ["Connectez-vous, trouvez la commande, choisissez retour", "Gardez le reçu du dépôt", "Surveillez le remboursement"] }
          ],
          sources: [{ name: "FTC (agence américaine de protection des consommateurs) : les achats en ligne", url: "https://consumer.ftc.gov/articles/online-shopping" }, { name: "FTC : signaler une fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Trouvez un e-mail de confirmation de commande dans votre boîte (ou celui d'un ancien achat) et créez un dossier ou un libellé « Commandes » pour le ranger. Si vous avez une commande en cours, suivez-la depuis l'application ou le site du magasin.",
          youCanNow: "garder les preuves d'une commande, suivre un colis en sécurité et faire un retour.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une confirmation de commande ?", options: ["Un SMS qui vous demande de payer des frais", "Une publicité pour un nouveau produit", "L'e-mail que le magasin envoie après votre achat", "Un relevé bancaire"], answer: 2, why: "Le magasin envoie une confirmation de commande par e-mail ; gardez-la avec vos documents." },
            { objective: "O3", q: "Vous avez déposé un retour à la poste. Que faites-vous ensuite ?", options: ["Jeter le reçu", "Racheter l'article", "Supprimer l'application du magasin", "Garder le reçu de dépôt et surveiller le remboursement sur votre relevé"], answer: 3, why: "Le reçu prouve que vous l'avez renvoyé, et le relevé montre le remboursement." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Acheter en ligne en sécurité",
        questions: [
          { objective: "O1", q: "Une publicité montre un téléviseur de marque à un dixième du prix normal. Que devez-vous faire d'abord ?", options: ["L'acheter avant qu'il parte", "Vérifier le magasin : chercher son nom avec « plainte » ou « arnaque »", "Payer avec une carte cadeau", "Envoyer votre numéro de carte par SMS"], answer: 1, why: "Les prix trop beaux pour être vrais sont un signal d'alerte ; vérifiez d'abord." },
          { objective: "O1", q: "Que dit la FTC sur https et l'icône du cadenas ?", options: ["Ils prouvent qu'un magasin est honnête", "On ne les trouve que sur les faux magasins", "Ils veulent dire livraison gratuite", "Ils aident, mais les escrocs peuvent aussi les utiliser"], answer: 3, why: "Le chiffrement protège la connexion, pas l'honnêteté du vendeur." },
          { objective: "O2", q: "Quel paiement vous donne la meilleure protection pour contester un paiement erroné ?", options: ["Une carte de crédit", "Une carte cadeau", "Un virement", "De la cryptomonnaie"], answer: 0, why: "La FTC dit que les cartes de crédit donnent la meilleure protection pour contester." },
          { objective: "O2", q: "Un vendeur vous demande de payer avec des cartes cadeaux. Que faites-vous ?", options: ["Acheter les cartes cadeaux", "Payer la moitié en cartes cadeaux", "Refuser ; c'est un signe d'arnaque", "Envoyer une photo des cartes"], answer: 2, why: "La FTC prévient : ne payez jamais un vendeur en ligne avec des cartes cadeaux." },
          { objective: "O3", q: "Vous recevez un SMS sur un « problème de livraison » avec un lien. Quelle est l'étape la plus sûre ?", options: ["Cliquer sur le lien", "Répondre avec votre adresse", "Vérifier votre commande dans l'application ou sur le site du magasin", "Payer les petits frais"], answer: 2, why: "Suivez depuis votre compte, pas depuis des liens inattendus." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La banque en ligne en sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Utiliser l'application ou le site de votre banque en sécurité",
          minutes: 5,
          goal: "Se connecter à l'application ou au site officiel de sa banque et vérifier son solde et ses opérations.",
          text: [
            "La banque en ligne vous permet de voir votre solde, de vérifier ce qui est entré et sorti, de payer des factures et de déplacer de l'argent entre vos propres comptes, depuis votre téléphone ou votre ordinateur.",
            "Prenez l'application de la banque seulement dans le magasin d'applications officiel, et vérifiez que le développeur est bien votre banque. Ou tapez vous-même l'adresse web de la banque ; vous la trouverez sur votre carte, votre relevé ou en demandant à l'agence. Ne vous connectez jamais depuis un lien reçu par e-mail ou par SMS.",
            "Utilisez un mot de passe fort utilisé nulle part ailleurs et activez la validation en deux étapes. N'allez pas sur votre banque sur un Wi-Fi public sans utiliser les données mobiles de votre téléphone, et déconnectez-vous toujours à la fin, surtout sur un ordinateur partagé."
          ],
          steps: ["Installez l'application officielle de la banque ou tapez vous-même son adresse.", "Connectez-vous avec un mot de passe fort et unique.", "Activez la validation en deux étapes dans les paramètres de sécurité.", "Regardez votre solde et vos dernières opérations.", "Déconnectez-vous à la fin."],
          words: [["Solde", "combien d'argent il y a sur votre compte en ce moment."], ["Opération", "un paiement qui entre sur votre compte ou qui en sort."], ["Validation en deux étapes", "une deuxième vérification, en général un code envoyé sur votre téléphone, quand vous vous connectez."]],
          slides: [
            { title: "Ce que fait la banque en ligne", bullets: ["Voir votre solde et vos opérations", "Payer des factures", "Déplacer de l'argent entre vos propres comptes"] },
            { title: "Y aller en sécurité", bullets: ["L'appli officielle du magasin d'applications", "Ou tapez vous-même l'adresse de la banque", "Jamais de connexion depuis un lien d'e-mail ou de SMS"] },
            { title: "Restez protégé", bullets: ["Mot de passe fort et unique", "Validation en deux étapes activée", "Déconnectez-vous à la fin"] }
          ],
          tryIt: "Ouvrez l'application ou le site officiel de votre banque (tapez vous-même l'adresse). Connectez-vous, regardez votre solde et vos cinq dernières opérations, puis déconnectez-vous.",
          youCanNow: "vous connecter à votre banque en sécurité et vérifier votre solde et vos opérations.",
          quickCheck: [
            { objective: "O4", q: "Où trouver la vraie adresse web de votre banque ?", options: ["Sur votre carte, sur votre relevé ou en demandant à l'agence", "Dans un SMS qui dit que votre compte est bloqué", "Dans une publicité sur un réseau social", "Dans un e-mail d'une personne que vous ne connaissez pas"], answer: 0, why: "Votre carte, votre relevé et votre agence donnent la vraie adresse de la banque." },
            { objective: "O4", q: "Vous avez vérifié votre solde sur un ordinateur de bibliothèque. Que faites-vous avant de partir ?", options: ["Laisser la page ouverte", "Vous déconnecter", "Enregistrer votre mot de passe dans le navigateur", "Écrire votre mot de passe sur un papier"], answer: 1, why: "Déconnectez-vous toujours quand vous avez fini avec la banque, surtout sur un ordinateur partagé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Repérer un prélèvement anormal et savoir que votre argent est protégé",
          minutes: 5,
          goal: "Vérifier vos opérations et savoir quoi faire face à un prélèvement que vous n'avez pas fait.",
          text: [
            "Vérifiez vos opérations au moins une fois par semaine. Cherchez les prélèvements que vous ne reconnaissez pas, même petits ; les voleurs testent parfois une carte avec un tout petit montant d'abord. Beaucoup de banques permettent d'activer des alertes qui vous envoient un SMS ou un e-mail quand de l'argent sort de votre compte.",
            "Si vous voyez un prélèvement que vous n'avez pas fait, appelez le numéro au dos de votre carte ou celui de l'application officielle, et agissez vite. Beaucoup de cartes et d'applications permettent de bloquer ou de geler la carte tout de suite.",
            "Aux États-Unis, l'argent déposé dans une banque assurée par la FDIC (l'organisme public de garantie des dépôts) est protégé jusqu'à 250 000 dollars par déposant, par banque et par catégorie de propriété du compte. Les coopératives de crédit assurées par la NCUA ont la même limite standard de 250 000 dollars. La FDIC précise que la crypto, les actions, les obligations et les fonds communs de placement ne sont pas assurés, même s'ils sont vendus par une banque. Dans d'autres pays, la garantie et son montant sont différents : renseignez-vous auprès de votre banque ou de l'organisme officiel."
          ],
          steps: ["Vérifiez vos opérations chaque semaine.", "Activez les alertes de compte dans l'application.", "Si un prélèvement n'est pas de vous : bloquez la carte dans l'appli si vous pouvez.", "Appelez le numéro au dos de votre carte.", "Attendez le suivi de la banque et vérifiez votre prochain relevé."],
          words: [["Alerte", "un SMS ou un e-mail que votre banque envoie quand quelque chose se passe sur votre compte."], ["FDIC", "la Federal Deposit Insurance Corporation, qui garantit l'argent déposé dans les banques américaines."], ["NCUA", "la National Credit Union Administration, qui garantit l'argent déposé dans les coopératives de crédit américaines."]],
          slides: [
            { title: "Vérifiez chaque semaine", bullets: ["Cherchez les prélèvements inconnus", "Même les petits", "Activez les alertes de compte"] },
            { title: "Un prélèvement n'est pas de vous", bullets: ["Bloquez la carte dans l'appli", "Appelez le numéro au dos de votre carte", "Agissez vite"] },
            { title: "Vos dépôts sont garantis (États-Unis)", bullets: ["Banques FDIC : 250 000 $ par déposant, par banque, par catégorie de propriété", "Coopératives NCUA : limite standard de 250 000 $"] },
            { title: "Non garantis", bullets: ["Crypto, actions, obligations et fonds de placement", "Même quand une banque les vend"] }
          ],
          sources: [{ name: "FDIC (garantie américaine des dépôts) : comprendre l'assurance des dépôts", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }, { name: "NCUA (garantie des coopératives de crédit américaines) : couverture de l'assurance", url: "https://ncua.gov/consumers/share-insurance-coverage" }],
          tryIt: "Dans l'application de votre banque, trouvez où se règlent les alertes et activez une alerte pour les paiements. Puis trouvez le bouton qui bloque ou gèle votre carte (n'appuyez pas dessus sauf si vous en avez besoin).",
          youCanNow: "vérifier vos opérations, régler des alertes et agir vite face à un prélèvement que vous n'avez pas fait.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi regarder les petits prélèvements que vous ne reconnaissez pas ?", options: ["Les petits prélèvements sont toujours normaux", "Les banques ne font jamais d'erreurs", "Les petits prélèvements sont gratuits", "Les voleurs testent parfois une carte avec un tout petit prélèvement d'abord"], answer: 3, why: "Un tout petit prélèvement inconnu peut être un test avant de plus gros." },
            { objective: "O5", q: "Vous voulez savoir tout de suite quand de l'argent sort de votre compte. Que faites-vous ?", options: ["Vérifier une fois par an", "Demander à un inconnu de surveiller", "Activer les alertes dans l'application de votre banque pour recevoir un SMS ou un e-mail", "Fermer votre compte"], answer: 2, why: "Beaucoup de banques proposent des alertes quand de l'argent sort de votre compte." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Les arnaques financières : faux appels de la banque et pièges des applis de paiement",
          minutes: 5,
          goal: "Reconnaître une arnaque financière et l'arrêter.",
          text: [
            "Une arnaque courante : quelqu'un appelle, envoie un SMS ou un e-mail en se faisant passer pour le service des fraudes de votre banque. Il dit que votre compte est en danger et demande votre mot de passe, un code envoyé sur votre téléphone, ou de transférer votre argent vers un « compte sécurisé ». Une vraie banque ne demandera jamais cela.",
            "La FTC liste quatre signes d'arnaque : ils font semblant d'être quelqu'un de confiance, il y a un problème ou un prix, ils vous pressent d'agir tout de suite, et ils veulent un paiement inhabituel, comme des cartes cadeaux, des virements, des applications de paiement ou de la cryptomonnaie.",
            "En cas de doute, raccrochez. Appelez le numéro au dos de votre carte. Considérez l'argent envoyé par application de paiement comme de l'argent liquide : envoyez-en seulement aux personnes que vous connaissez. Aux États-Unis, signalez les arnaques sur reportfraud.ftc.gov."
          ],
          steps: ["Ne partagez jamais votre mot de passe ni un code reçu sur votre téléphone.", "Ne transférez jamais d'argent vers un « compte sécurisé » parce qu'un appelant le dit.", "Raccrochez et appelez le numéro au dos de votre carte.", "Avec une appli de paiement, n'envoyez de l'argent qu'aux personnes que vous connaissez.", "Signalez les arnaques sur reportfraud.ftc.gov (États-Unis)."],
          words: [["Usurpation d'identité", "se faire passer pour quelqu'un d'autre, comme votre banque ou une administration."], ["Application de paiement", "une application qui envoie de l'argent d'une personne à une autre, comme Venmo, Cash App ou Zelle aux États-Unis, ou Lydia et Wero en Europe."]],
          slides: [
            { title: "Faux appels de la banque", bullets: ["« Votre compte est en danger »", "Ils demandent votre mot de passe ou un code", "Ou de transférer l'argent vers un « compte sécurisé »"] },
            { title: "Signes d'arnaque selon la FTC", bullets: ["Fait semblant d'être quelqu'un de confiance", "Un problème ou un prix", "Une pression pour agir tout de suite", "Paiement inhabituel : carte cadeau, virement, appli, crypto"] },
            { title: "Que faire", bullets: ["Raccrochez", "Appelez le numéro au dos de votre carte", "Applis de paiement : seulement avec des gens que vous connaissez"] },
            { title: "Signalez-le", bullets: ["reportfraud.ftc.gov (États-Unis)"] }
          ],
          sources: [{ name: "FTC (agence américaine de protection des consommateurs) : comment éviter une arnaque", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC : signaler une fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Entraînement pour la tâche finale : notez le numéro au dos de votre carte bancaire dans un endroit sûr à la maison. Puis faites la tâche finale : vérifiez un magasin, choisissez votre moyen de paiement et vérifiez vos opérations bancaires.",
          youCanNow: "repérer un faux appel de la banque ou un piège d'appli de paiement, l'arrêter et le signaler.",
          quickCheck: [
            { objective: "O6", q: "Que ne vous demandera jamais une vraie banque ?", options: ["De passer à l'agence", "Votre mot de passe ou le code envoyé sur votre téléphone", "De vérifier votre relevé", "D'activer la validation en deux étapes"], answer: 1, why: "Une vraie banque ne demandera jamais votre mot de passe, un code, ni de déplacer votre argent vers un « compte sécurisé »." },
            { objective: "O6", q: "Un SMS de « votre banque » dit que votre compte est en danger et vous demande d'appeler un numéro donné dans le SMS. Que faites-vous ?", options: ["Ignorer le numéro du SMS et appeler le numéro au dos de votre carte", "Appeler le numéro du SMS", "Répondre avec votre mot de passe", "Déplacer votre argent vers le compte qu'ils donnent"], answer: 0, why: "Appeler le numéro inscrit sur votre carte vous met en contact avec votre vraie banque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La banque en ligne en sécurité",
        questions: [
          { objective: "O4", q: "Quelle est la façon la plus sûre d'aller sur le site de votre banque ?", options: ["Taper vous-même l'adresse ou utiliser l'application officielle", "Cliquer sur un lien reçu par SMS", "Faire une recherche et cliquer sur la première publicité", "Utiliser un lien donné par un appelant"], answer: 0, why: "Taper l'adresse ou utiliser l'appli officielle évite les faux sites." },
          { objective: "O5", q: "Vous voyez un petit prélèvement que vous ne reconnaissez pas. Que faites-vous ?", options: ["L'ignorer parce qu'il est petit", "En parler sur les réseaux sociaux", "Attendre un an", "Bloquer la carte et appeler le numéro au dos"], answer: 3, why: "Les voleurs testent souvent une carte avec un petit montant ; agissez vite." },
          { objective: "O5", q: "Quel est le montant standard de la garantie FDIC aux États-Unis ?", options: ["1 000 dollars par personne", "250 000 dollars par déposant, par banque assurée, par catégorie de propriété", "Illimité", "Rien ; les banques ne sont pas assurées"], answer: 1, why: "La FDIC garantit jusqu'à 250 000 dollars par déposant, par banque, par catégorie de propriété." },
          { objective: "O6", q: "Un appelant de « votre banque » demande le code qu'on vient de vous envoyer. Que faites-vous ?", options: ["Le lui lire", "Raccrocher et appeler le numéro de votre carte", "En donner la moitié", "Le lui envoyer par SMS"], answer: 1, why: "Les vraies banques ne demandent jamais ce code." },
          { objective: "O5", q: "Qu'est-ce qui n'est PAS garanti par la FDIC ?", options: ["Un compte courant dans une banque assurée", "Un compte d'épargne dans une banque assurée", "Un dépôt à terme dans une banque assurée", "La crypto"], answer: 3, why: "La FDIC dit que la crypto n'est pas garantie." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Acheter et gérer sa banque en ligne en sécurité",
    questions: [
      { objective: "O1", q: "La façon la plus sûre d'aller sur un magasin en ligne est de :", options: ["Taper vous-même son adresse ou utiliser son appli officielle", "Cliquer sur une publicité sur un réseau social", "Utiliser un lien reçu par SMS d'un inconnu", "Scanner n'importe quel QR code"], answer: 0, why: "Cela évite les sites imitateurs." },
      { objective: "O1", q: "La FTC conseille de chercher le nom d'un magasin avec :", options: ["« gratuit »", "« coupon »", "« plainte » ou « arnaque »", "« pas cher »"], answer: 2, why: "Cela montre les mauvaises expériences d'autres acheteurs." },
      { objective: "O1", q: "Les avis doivent être lus :", options: ["Seulement les étoiles", "Pas du tout", "Avec prudence, car certains sont faux", "Seulement le premier"], answer: 2, why: "La FTC prévient que certains avis sont faux." },
      { objective: "O1", q: "Avant d'acheter, vérifiez dans les conditions de retour :", options: ["Combien de jours vous avez et qui paie le renvoi", "Le nom du propriétaire", "Le logo du magasin", "Les couleurs du site"], answer: 0, why: "Les conditions de retour varient et comptent si quelque chose tourne mal." },
      { objective: "O1", q: "Une affaire sur un article de marque cher qui semble trop belle pour être vraie peut être :", options: ["Un cadeau de la banque", "Toujours vraie", "Une offre de l'État", "Une contrefaçon ou un objet volé"], answer: 3, why: "La FTC prévient que ces affaires peuvent être des faux ou des objets volés." },
      { objective: "O2", q: "Quel paiement, selon la FTC, donne la meilleure protection pour contester ?", options: ["Le virement", "La carte de crédit", "La carte cadeau", "La cryptomonnaie"], answer: 1, why: "Les cartes de crédit permettent de contester les paiements erronés." },
      { objective: "O2", q: "Où devez-vous taper votre numéro de carte ?", options: ["Dans une réponse à un e-mail", "Sur la page de paiement d'un magasin que vous avez vérifié", "Dans un SMS", "Dans une discussion sur un réseau social"], answer: 1, why: "Seulement sur la page de paiement du magasin vérifié." },
      { objective: "O2", q: "Sur un ordinateur de bibliothèque, le navigateur propose d'enregistrer votre carte. Vous :", options: ["Dites oui", "L'enregistrez deux fois", "L'écrivez sur un post-it", "Dites non"], answer: 3, why: "N'enregistrez jamais les données d'une carte sur un ordinateur partagé." },
      { objective: "O3", q: "Quelle preuve devez-vous garder après un achat en ligne ?", options: ["La confirmation de commande", "Rien", "Seulement le carton", "La publicité que vous avez vue"], answer: 0, why: "Elle prouve ce que vous avez acheté et payé." },
      { objective: "O3", q: "Un SMS dit que votre colis est bloqué et demande de payer de petits frais par un lien. Vous devez :", options: ["Payer les frais", "Cliquer pour voir", "Vérifier la commande dans l'appli ou sur le site du magasin", "Répondre avec votre numéro de carte"], answer: 2, why: "Les faux SMS de livraison sont une arnaque courante." },
      { objective: "O3", q: "Si un vendeur refuse de régler un problème, aux États-Unis vous pouvez le signaler à :", options: ["Un groupe sur un réseau social", "La publicité du vendeur", "reportfraud.ftc.gov", "Personne"], answer: 2, why: "La FTC y reçoit les signalements de fraude." },
      { objective: "O4", q: "Le « solde », c'est :", options: ["Combien d'argent il y a sur votre compte en ce moment", "Un paiement", "Un mot de passe", "Une agence bancaire"], answer: 0, why: "Le solde montre ce que vous avez maintenant." },
      { objective: "O4", q: "Quand vous avez fini sur votre banque en ligne, vous devez :", options: ["La laisser ouverte", "Enregistrer votre mot de passe dans le navigateur d'un ordinateur partagé", "Partager l'écran", "Vous déconnecter"], answer: 3, why: "Se déconnecter empêche la personne suivante d'entrer." },
      { objective: "O4", q: "La validation en deux étapes sur votre compte bancaire veut dire :", options: ["Deux mots de passe écrits sur papier", "Une deuxième vérification, comme un code envoyé sur votre téléphone", "Deux cartes bancaires", "Une application plus lente"], answer: 1, why: "Elle ajoute un code qu'un voleur n'aurait pas." },
      { objective: "O5", q: "À quelle fréquence est-il sage de vérifier vos opérations ?", options: ["Une fois par an", "Au moins une fois par semaine", "Jamais", "Seulement quand la banque appelle"], answer: 1, why: "Une vérification chaque semaine repère vite les problèmes." },
      { objective: "O5", q: "Aux États-Unis, les dépôts dans les coopératives de crédit sont garantis par :", options: ["La FTC", "Le magasin d'applications", "Votre employeur", "La NCUA"], answer: 3, why: "La NCUA garantit les coopératives de crédit assurées au niveau fédéral." },
      { objective: "O6", q: "Un appelant dit que votre compte est en danger et que vous devez transférer votre argent vers un « compte sécurisé ». C'est :", options: ["Une arnaque", "Un remboursement", "Une nouvelle loi", "Une étape normale de la banque"], answer: 0, why: "Les vraies banques ne demandent jamais cela ; c'est une arnaque courante." },
      { objective: "O6", q: "L'argent envoyé par une application de paiement doit être considéré comme :", options: ["Un prêt", "Une carte de crédit", "De l'argent liquide : seulement à des gens que vous connaissez", "Une épargne garantie"], answer: 2, why: "Il est difficile à récupérer, comme de l'argent liquide." },
      { objective: "O6", q: "Lequel est l'un des quatre signes d'arnaque de la FTC ?", options: ["Une salutation polie", "Une facture papier envoyée par votre fournisseur d'énergie", "Une pression pour agir tout de suite", "Payer au comptoir d'un magasin"], answer: 2, why: "Les escrocs vous pressent pour que vous ne preniez pas le temps de vérifier." },
      { objective: "O6", q: "En cas de doute sur un appel de votre banque, la meilleure étape est de :", options: ["Raccrocher et appeler le numéro au dos de votre carte", "Leur donner votre mot de passe", "Continuer à parler", "Envoyer un petit paiement"], answer: 0, why: "Appeler un numéro connu permet de joindre la vraie banque." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Vérifier le magasin",
        objective: "O1",
        notYet: "Moins de trois contrôles ont été faits, ou le magasin a été ouvert depuis une publicité ou un lien de SMS.",
        meets: "Les trois contrôles sont faits : vraie adresse web, avis et plaintes, et politique de retour.",
        exceeds: "Note aussi combien de jours vous avez pour retourner l'article et qui paie le renvoi."
      },
      {
        name: "Choix du paiement",
        objective: "O2",
        notYet: "Aucun moyen de paiement choisi, ou une carte cadeau, un virement, une application de paiement ou de la cryptomonnaie a été choisi.",
        meets: "Choisit un moyen protecteur comme une carte de crédit et dit pourquoi.",
        exceeds: "Dit aussi de ne pas enregistrer la carte sur un ordinateur partagé."
      },
      {
        name: "Vérifier le compte bancaire",
        objective: "O4",
        notYet: "S'est connecté depuis un lien, ou n'a pas trouvé le solde ou les opérations.",
        meets: "Se connecte par l'application officielle ou une adresse tapée et trouve le solde et les dernières opérations.",
        exceeds: "Active aussi la validation en deux étapes ou les alertes, et se déconnecte."
      },
      {
        name: "Plan en cas de prélèvement anormal",
        objective: "O5",
        notYet: "Aucun plan, ou le plan utilise un numéro venant d'un SMS ou d'un e-mail.",
        meets: "Dit qu'il bloquerait la carte et appellerait vite le numéro inscrit sur la carte ou dans l'application officielle.",
        exceeds: "Dit aussi qu'il vérifierait ses opérations chaque semaine et garderait des preuves pour une contestation."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille de l'exercice final",
      "Apprenants qui disent vérifier leurs opérations bancaires au moins chaque semaine 30 jours plus tard (enquête de suivi)",
      "Apprenants qui disent avoir évité un faux magasin, un faux SMS de livraison ou un faux appel de la banque",
      "Apprenants qui disent avoir repéré et signalé un prélèvement qu'ils n'avaient pas fait"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet, sur une connexion privée (Wi-Fi de la maison ou données mobiles du téléphone)",
      "L'application officielle de la banque de l'apprenant ou son adresse web tapée, s'il a un compte bancaire",
      "Un article d'exemple à vérifier, comme quelque chose dont il a besoin ce mois-ci",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Les apprenants ne font aucun vrai achat en classe ; l'exercice d'achat s'arrête à la page de paiement.",
      "Ne demandez jamais aux apprenants de montrer leur solde, leurs numéros de carte ou leurs mots de passe ; laissez-les faire les étapes bancaires en privé sur leur propre appareil.",
      "Évitez la banque en ligne sur le Wi-Fi public du programme ; demandez aux apprenants d'utiliser les données mobiles de leur téléphone ou de faire l'étape bancaire à la maison.",
      "Les apprenants sans compte bancaire peuvent faire la leçon sur la banque avec la démonstration publique d'une banque ou en décrivant les étapes ; orientez-les vers les programmes locaux qui aident à ouvrir des comptes sûrs et peu chers si votre programme en connaît.",
      "Faites un jeu de rôle du faux appel de la banque pour que les apprenants s'entraînent à raccrocher et à appeler le numéro inscrit sur leur carte."
    ]
  }
};
