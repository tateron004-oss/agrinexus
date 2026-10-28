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
  chapters: [
    {
      name: "Chapitre 1 : Acheter en ligne en sécurité",
      lessons: [
        {
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
          youCanNow: "vérifier l'adresse, la réputation et les conditions de retour d'un magasin avant d'acheter."
        },
        {
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
          youCanNow: "choisir le moyen de paiement qui vous protège et refuser ceux que demandent les escrocs."
        },
        {
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
          youCanNow: "garder les preuves d'une commande, suivre un colis en sécurité et faire un retour."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Acheter en ligne en sécurité",
        questions: [
          { q: "Une publicité montre un téléviseur de marque à un dixième du prix normal. Que devez-vous faire d'abord ?", options: ["L'acheter avant qu'il parte", "Vérifier le magasin : chercher son nom avec « plainte » ou « arnaque »", "Payer avec une carte cadeau", "Envoyer votre numéro de carte par SMS"], answer: 1, why: "Les prix trop beaux pour être vrais sont un signal d'alerte ; vérifiez d'abord." },
          { q: "Que dit la FTC sur https et l'icône du cadenas ?", options: ["Ils prouvent qu'un magasin est honnête", "On ne les trouve que sur les faux magasins", "Ils veulent dire livraison gratuite", "Ils aident, mais les escrocs peuvent aussi les utiliser"], answer: 3, why: "Le chiffrement protège la connexion, pas l'honnêteté du vendeur." },
          { q: "Quel paiement vous donne la meilleure protection pour contester un paiement erroné ?", options: ["Une carte de crédit", "Une carte cadeau", "Un virement", "De la cryptomonnaie"], answer: 0, why: "La FTC dit que les cartes de crédit donnent la meilleure protection pour contester." },
          { q: "Un vendeur vous demande de payer avec des cartes cadeaux. Que faites-vous ?", options: ["Acheter les cartes cadeaux", "Payer la moitié en cartes cadeaux", "Refuser ; c'est un signe d'arnaque", "Envoyer une photo des cartes"], answer: 2, why: "La FTC prévient : ne payez jamais un vendeur en ligne avec des cartes cadeaux." },
          { q: "Vous recevez un SMS sur un « problème de livraison » avec un lien. Quelle est l'étape la plus sûre ?", options: ["Cliquer sur le lien", "Répondre avec votre adresse", "Vérifier votre commande dans l'application ou sur le site du magasin", "Payer les petits frais"], answer: 2, why: "Suivez depuis votre compte, pas depuis des liens inattendus." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La banque en ligne en sécurité",
      lessons: [
        {
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
          youCanNow: "vous connecter à votre banque en sécurité et vérifier votre solde et vos opérations."
        },
        {
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
          youCanNow: "vérifier vos opérations, régler des alertes et agir vite face à un prélèvement que vous n'avez pas fait."
        },
        {
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
          youCanNow: "repérer un faux appel de la banque ou un piège d'appli de paiement, l'arrêter et le signaler."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La banque en ligne en sécurité",
        questions: [
          { q: "Quelle est la façon la plus sûre d'aller sur le site de votre banque ?", options: ["Taper vous-même l'adresse ou utiliser l'application officielle", "Cliquer sur un lien reçu par SMS", "Faire une recherche et cliquer sur la première publicité", "Utiliser un lien donné par un appelant"], answer: 0, why: "Taper l'adresse ou utiliser l'appli officielle évite les faux sites." },
          { q: "Vous voyez un petit prélèvement que vous ne reconnaissez pas. Que faites-vous ?", options: ["L'ignorer parce qu'il est petit", "En parler sur les réseaux sociaux", "Attendre un an", "Bloquer la carte et appeler le numéro au dos"], answer: 3, why: "Les voleurs testent souvent une carte avec un petit montant ; agissez vite." },
          { q: "Quel est le montant standard de la garantie FDIC aux États-Unis ?", options: ["1 000 dollars par personne", "250 000 dollars par déposant, par banque assurée, par catégorie de propriété", "Illimité", "Rien ; les banques ne sont pas assurées"], answer: 1, why: "La FDIC garantit jusqu'à 250 000 dollars par déposant, par banque, par catégorie de propriété." },
          { q: "Un appelant de « votre banque » demande le code qu'on vient de vous envoyer. Que faites-vous ?", options: ["Le lui lire", "Raccrocher et appeler le numéro de votre carte", "En donner la moitié", "Le lui envoyer par SMS"], answer: 1, why: "Les vraies banques ne demandent jamais ce code." },
          { q: "Qu'est-ce qui n'est PAS garanti par la FDIC ?", options: ["Un compte courant dans une banque assurée", "Un compte d'épargne dans une banque assurée", "Un dépôt à terme dans une banque assurée", "La crypto"], answer: 3, why: "La FDIC dit que la crypto n'est pas garantie." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Acheter et gérer sa banque en ligne en sécurité",
    questions: [
      { q: "La façon la plus sûre d'aller sur un magasin en ligne est de :", options: ["Taper vous-même son adresse ou utiliser son appli officielle", "Cliquer sur une publicité sur un réseau social", "Utiliser un lien reçu par SMS d'un inconnu", "Scanner n'importe quel QR code"], answer: 0, why: "Cela évite les sites imitateurs." },
      { q: "La FTC conseille de chercher le nom d'un magasin avec :", options: ["« gratuit »", "« coupon »", "« plainte » ou « arnaque »", "« pas cher »"], answer: 2, why: "Cela montre les mauvaises expériences d'autres acheteurs." },
      { q: "Les avis doivent être lus :", options: ["Seulement les étoiles", "Pas du tout", "Avec prudence, car certains sont faux", "Seulement le premier"], answer: 2, why: "La FTC prévient que certains avis sont faux." },
      { q: "Avant d'acheter, vérifiez dans les conditions de retour :", options: ["Combien de jours vous avez et qui paie le renvoi", "Le nom du propriétaire", "Le logo du magasin", "Les couleurs du site"], answer: 0, why: "Les conditions de retour varient et comptent si quelque chose tourne mal." },
      { q: "Une affaire sur un article de marque cher qui semble trop belle pour être vraie peut être :", options: ["Un cadeau de la banque", "Toujours vraie", "Une offre de l'État", "Une contrefaçon ou un objet volé"], answer: 3, why: "La FTC prévient que ces affaires peuvent être des faux ou des objets volés." },
      { q: "Quel paiement, selon la FTC, donne la meilleure protection pour contester ?", options: ["Le virement", "La carte de crédit", "La carte cadeau", "La cryptomonnaie"], answer: 1, why: "Les cartes de crédit permettent de contester les paiements erronés." },
      { q: "Où devez-vous taper votre numéro de carte ?", options: ["Dans une réponse à un e-mail", "Sur la page de paiement d'un magasin que vous avez vérifié", "Dans un SMS", "Dans une discussion sur un réseau social"], answer: 1, why: "Seulement sur la page de paiement du magasin vérifié." },
      { q: "Sur un ordinateur de bibliothèque, le navigateur propose d'enregistrer votre carte. Vous :", options: ["Dites oui", "L'enregistrez deux fois", "L'écrivez sur un post-it", "Dites non"], answer: 3, why: "N'enregistrez jamais les données d'une carte sur un ordinateur partagé." },
      { q: "Quelle preuve devez-vous garder après un achat en ligne ?", options: ["La confirmation de commande", "Rien", "Seulement le carton", "La publicité que vous avez vue"], answer: 0, why: "Elle prouve ce que vous avez acheté et payé." },
      { q: "Un SMS dit que votre colis est bloqué et demande de payer de petits frais par un lien. Vous devez :", options: ["Payer les frais", "Cliquer pour voir", "Vérifier la commande dans l'appli ou sur le site du magasin", "Répondre avec votre numéro de carte"], answer: 2, why: "Les faux SMS de livraison sont une arnaque courante." },
      { q: "Si un vendeur refuse de régler un problème, aux États-Unis vous pouvez le signaler à :", options: ["Un groupe sur un réseau social", "La publicité du vendeur", "reportfraud.ftc.gov", "Personne"], answer: 2, why: "La FTC y reçoit les signalements de fraude." },
      { q: "Le « solde », c'est :", options: ["Combien d'argent il y a sur votre compte en ce moment", "Un paiement", "Un mot de passe", "Une agence bancaire"], answer: 0, why: "Le solde montre ce que vous avez maintenant." },
      { q: "Quand vous avez fini sur votre banque en ligne, vous devez :", options: ["La laisser ouverte", "Enregistrer votre mot de passe dans le navigateur d'un ordinateur partagé", "Partager l'écran", "Vous déconnecter"], answer: 3, why: "Se déconnecter empêche la personne suivante d'entrer." },
      { q: "La validation en deux étapes sur votre compte bancaire veut dire :", options: ["Deux mots de passe écrits sur papier", "Une deuxième vérification, comme un code envoyé sur votre téléphone", "Deux cartes bancaires", "Une application plus lente"], answer: 1, why: "Elle ajoute un code qu'un voleur n'aurait pas." },
      { q: "À quelle fréquence est-il sage de vérifier vos opérations ?", options: ["Une fois par an", "Au moins une fois par semaine", "Jamais", "Seulement quand la banque appelle"], answer: 1, why: "Une vérification chaque semaine repère vite les problèmes." },
      { q: "Aux États-Unis, les dépôts dans les coopératives de crédit sont garantis par :", options: ["La FTC", "Le magasin d'applications", "Votre employeur", "La NCUA"], answer: 3, why: "La NCUA garantit les coopératives de crédit assurées au niveau fédéral." },
      { q: "Un appelant dit que votre compte est en danger et que vous devez transférer votre argent vers un « compte sécurisé ». C'est :", options: ["Une arnaque", "Un remboursement", "Une nouvelle loi", "Une étape normale de la banque"], answer: 0, why: "Les vraies banques ne demandent jamais cela ; c'est une arnaque courante." },
      { q: "L'argent envoyé par une application de paiement doit être considéré comme :", options: ["Un prêt", "Une carte de crédit", "De l'argent liquide : seulement à des gens que vous connaissez", "Une épargne garantie"], answer: 2, why: "Il est difficile à récupérer, comme de l'argent liquide." },
      { q: "Lequel est l'un des quatre signes d'arnaque de la FTC ?", options: ["Une salutation polie", "Une facture papier envoyée par votre fournisseur d'énergie", "Une pression pour agir tout de suite", "Payer au comptoir d'un magasin"], answer: 2, why: "Les escrocs vous pressent pour que vous ne preniez pas le temps de vérifier." },
      { q: "En cas de doute sur un appel de votre banque, la meilleure étape est de :", options: ["Raccrocher et appeler le numéro au dos de votre carte", "Leur donner votre mot de passe", "Continuer à parler", "Envoyer un petit paiement"], answer: 0, why: "Appeler un numéro connu permet de joindre la vraie banque." }
    ]
  }
};
