"use strict";

// Koach Learn course (French translation of small-business/smallbiz-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-essential-ai-tools-fr",
  lang: "fr",
  translationOf: "smallbiz-essential-ai-tools",
  category: "Small Business",
  name: "Les outils d'IA essentiels pour les petites entreprises",
  skills: "Choisir le bon outil d'IA pour une tâche, Utiliser un assistant de discussion pour écrire, Créer des visuels avec Canva, Utiliser l'IA dans les documents et les tableurs, Construire une boîte à outils d'IA de départ",
  outcome: "choisir le bon outil d'IA gratuit pour une tâche de votre entreprise et l'utiliser : un assistant de discussion pour écrire, Canva pour un prospectus ou une publication, et un outil de documents ou de tableur pour une liste de prix ou un tableau de ventes simple, puis les rassembler dans une boîte à outils de départ que vous utiliserez vraiment chaque semaine.",
  about: [
    "Ce cours s'adresse aux patrons de petites entreprises qui veulent une boîte à outils courte et pratique au lieu de courir après chaque nouvelle application. Nos exemples viennent de boutiques, de restaurants, de salons de coiffure, d'entreprises de ménage et de réparation, et de food trucks.",
    "Vous découvrirez les types d'outils d'IA qui existent, essaierez un assistant de discussion, un outil de conception et l'aide de l'IA dans les documents et les tableurs, et terminerez avec votre propre boîte à outils : quel outil pour quelle tâche, et ce que vous n'y mettrez jamais.",
    "Les prix, les noms des offres et les fonctions changent souvent. Nous décrivons ce qu'il faut faire plutôt que les noms exacts des menus ; consultez le site officiel de chaque outil pour son offre gratuite actuelle. Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\", un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez votre boîte à outils d'IA de départ : un tableau d'une page avec trois à cinq outils que vous utiliserez, la tâche que chacun fait dans votre entreprise, si vous utilisez l'offre gratuite, et une règle de sécurité pour chacun. Puis prouvez qu'elle fonctionne en créant un vrai élément avec chaque outil : un message à un client (assistant de discussion), un prospectus ou une publication (Canva), et une liste de prix ou un tableau de ventes (Docs/Word ou Sheets/Excel).",
  chapters: [
    {
      name: "Chapitre 1 : Les principaux types d'outils d'IA",
      lessons: [
        {
          title: "Une carte des outils d'IA pour les petites entreprises",
          minutes: 5,
          goal: "Nommer les principaux types d'outils d'IA et associer chacun à une tâche de l'entreprise.",
          text: [
            "Vous n'avez pas besoin de dizaines d'applications. La plupart des petites entreprises tirent le plus de profit de quatre types d'outils.",
            "Les assistants de discussion (ChatGPT, Microsoft Copilot, Google Gemini) écrivent et expliquent : réponses, descriptions, plans, listes de contrôle. Les outils de conception (Canva et d'autres) créent des prospectus, des publications, des menus et des logos, et beaucoup ont maintenant des fonctions d'IA pour aider avec le texte et les images. Les outils de bureau (Google Docs et Sheets, Microsoft Word et Excel) contiennent vos documents et vos chiffres, et ces deux entreprises y ajoutent des assistants d'IA dans certaines offres. Les outils intégrés à d'autres applications, comme votre logiciel de caisse, de réservation ou d'e-mails, peuvent aussi avoir des fonctions d'IA.",
            "Commencez avec un outil par tâche. Apprenez-le bien avant d'en ajouter un autre."
          ],
          words: [["Assistant de discussion", "un outil d'IA auquel on parle dans une fenêtre de discussion, comme ChatGPT, Copilot ou Gemini."], ["Outil de conception", "une application pour créer des visuels comme des prospectus et des publications, par exemple Canva."], ["Logiciel de caisse (POS)", "le système qui sert à enregistrer les ventes."]],
          slides: [
            { title: "Quatre types d'outils", bullets: ["Assistants de discussion : écrire et expliquer", "Outils de conception : prospectus, publications, menus", "Outils de bureau : documents et chiffres", "L'IA dans les applications que vous utilisez déjà"] },
            { title: "Exemples", bullets: ["ChatGPT, Copilot, Gemini", "Canva", "Google Docs et Sheets ; Word et Excel"] },
            { title: "Restez simple", bullets: ["Un outil par tâche", "Apprenez-le bien d'abord", "N'en ajoutez un autre que si besoin"] }
          ],
          tryIt: "Écrivez les quatre types d'outils sur le côté d'une page. À côté de chacun, écrivez une tâche de votre entreprise qu'il pourrait faire ce mois-ci.",
          youCanNow: "nommer les principaux types d'outils d'IA et associer chacun à une tâche de votre entreprise."
        },
        {
          title: "Tirer le meilleur d'un assistant de discussion",
          minutes: 5,
          goal: "Utiliser un assistant de discussion pour produire trois éléments différents pour l'entreprise en une seule séance.",
          text: [
            "Un assistant de discussion est l'outil le plus polyvalent que vous ayez. Il peut écrire, réécrire, résumer, traduire et planifier. Ouvrez-le dans l'application de votre téléphone ou sur chatgpt.com, copilot.microsoft.com ou gemini.google.com.",
            "Donnez-lui une fois les détails de votre entreprise au début de la discussion : \"Je tiens un salon de coiffure à deux fauteuils à Long Beach. Notre style est amical et de quartier. Prix : coupe 30 $, coupe et barbe 40 $.\" Puis demandez plusieurs choses à la suite : un tableau des prix, un modèle de SMS de rappel, une réponse à un avis.",
            "Demandez des options et des tableaux quand c'est utile : \"Donne-moi trois versions\" ou \"Mets cela dans un tableau.\" Vérifiez toujours les chiffres qu'il vous répète."
          ],
          steps: ["Ouvrez un assistant de discussion.", "Donnez les détails de votre entreprise une fois au début.", "Demandez l'élément 1, puis l'élément 2, puis l'élément 3.", "Demandez des options ou un tableau quand c'est utile.", "Vérifiez chaque chiffre avant de l'utiliser."],
          words: [["Résumer", "faire une version courte de quelque chose de long."], ["Modèle", "une forme toute prête que l'on remplit à chaque fois."]],
          slides: [
            { title: "Un assistant polyvalent", bullets: ["Écrire, réécrire, résumer, traduire, planifier", "Application de téléphone ou navigateur web"] },
            { title: "Présentez-vous une fois par discussion", bullets: ["Votre type d'entreprise et votre ville", "Votre style et vos prix", "Puis demandez élément après élément"] },
            { title: "Demandes utiles", bullets: ["\"Donne-moi trois versions.\"", "\"Mets cela dans un tableau.\"", "Vérifiez chaque chiffre qu'il répète"] }
          ],
          tryIt: "Dans une seule discussion, donnez les détails de votre entreprise, puis demandez : un tableau des prix, un modèle de SMS de rappel avec \"[nom du client]\", et une réponse de remerciement à un bon avis.",
          youCanNow: "utiliser une seule discussion pour créer plusieurs éléments pour l'entreprise à partir de vos propres détails."
        },
        {
          title: "Créer un prospectus ou une publication avec Canva",
          minutes: 5,
          goal: "Créer un prospectus ou une publication pour les réseaux sociaux simple avec un outil de conception gratuit.",
          text: [
            "Canva est un outil de conception qui fonctionne dans un navigateur web et en application de téléphone. Il a une offre gratuite et des milliers de modèles tout prêts pour des prospectus, des menus, des publications et des cartes de visite. Consultez canva.com pour savoir ce que l'offre gratuite comprend aujourd'hui.",
            "Partez d'un modèle, pas d'une page blanche. Cherchez ce dont vous avez besoin (\"prospectus restaurant\", \"publication Instagram salon\"), choisissez-en un, puis changez les mots, les couleurs et les photos pour les vôtres. Utilisez le texte de votre assistant de discussion.",
            "Utilisez vos propres photos ou celles que l'outil vous autorise à utiliser. Restez simple : un message principal, de grands mots lisibles, le nom de votre entreprise et le moyen de vous joindre. Vérifiez l'orthographe de votre adresse et de votre numéro de téléphone."
          ],
          steps: ["Ouvrez Canva et cherchez un modèle.", "Changez les mots pour votre message.", "Mettez vos photos et vos couleurs.", "Ajoutez votre nom, votre adresse et le moyen de vous joindre.", "Vérifiez chaque mot, puis téléchargez ou partagez."],
          words: [["Modèle", "un visuel tout prêt que vous modifiez pour en faire le vôtre."], ["Offre gratuite", "la version d'un outil utilisable sans payer, en général avec quelques limites."]],
          slides: [
            { title: "Canva", bullets: ["Navigateur et application de téléphone", "Offre gratuite avec beaucoup de modèles", "Consultez canva.com pour les fonctions gratuites actuelles"] },
            { title: "Partez d'un modèle", bullets: ["Cherchez \"prospectus restaurant\" ou \"publication salon\"", "Changez mots, couleurs et photos", "Utilisez le texte de votre assistant de discussion"] },
            { title: "Restez clair", bullets: ["Un message principal, de grands mots", "Nom, adresse, moyen de vous joindre", "Vérifiez chaque mot avant de partager"] }
          ],
          tryIt: "Créez un prospectus ou une publication pour une vraie offre ou un vrai événement de votre entreprise avec un modèle Canva. Vérifiez chaque mot et enregistrez-le.",
          youCanNow: "créer un prospectus ou une publication clair à partir d'un modèle avec un outil de conception gratuit."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les principaux types d'outils d'IA",
        questions: [
          { q: "Quel type d'outil convient le mieux pour écrire une réponse à un client ?", options: ["Une imprimante de tickets", "Un assistant de discussion", "Un lecteur de codes-barres", "Une calculatrice"], answer: 1, why: "Les assistants de discussion écrivent et réécrivent du texte." },
          { q: "Quel outil est connu pour ses modèles de prospectus et de publications ?", options: ["Une calculatrice", "Un logiciel de caisse", "Seulement Excel", "Canva"], answer: 3, why: "Canva est un outil de conception avec des modèles." },
          { q: "Quelle est une bonne façon de commencer avec les outils d'IA ?", options: ["Un outil par tâche, bien appris", "Installer vingt applications d'un coup", "Payer toutes les offres", "Éviter tous les outils"], answer: 0, why: "Commencez simple et apprenez bien un outil." },
          { q: "Vous avez donné vos prix à l'assistant de discussion. Que vérifiez-vous dans son tableau des prix ?", options: ["Rien", "Seulement les couleurs", "Chaque chiffre qu'il répète", "Seulement le titre"], answer: 2, why: "L'IA peut mal répéter des chiffres." },
          { q: "Pour créer un prospectus dans Canva, vous devez partir de :", options: ["Une page blanche à chaque fois", "Le prospectus d'un concurrent", "Un modèle que vous modifiez pour en faire le vôtre", "Une photo dont vous n'avez pas les droits"], answer: 2, why: "Les modèles font gagner du temps ; vous les adaptez." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'IA dans vos outils de bureau, et votre boîte à outils",
      lessons: [
        {
          title: "L'aide de l'IA dans les documents : Google Docs et Microsoft Word",
          minutes: 5,
          goal: "Transformer une note rapide en un document professionnel propre.",
          text: [
            "La plupart des entreprises gardent leurs listes de prix, leurs règles et leurs lettres dans Google Docs ou Microsoft Word. Les deux sont gratuits dans un navigateur web avec un compte Google ou Microsoft. Google et Microsoft y ajoutent des assistants d'IA (Gemini et Copilot) dans certaines offres ; ce que vous voyez dépend de votre compte.",
            "Si votre application de documents a un assistant d'IA, vous pouvez lui demander de rédiger ou de réécrire directement sur la page. Sinon, rédigez dans un assistant de discussion et collez le texte. Dans les deux cas, c'est le document qui garde la version finale vérifiée.",
            "De bonnes tâches pour les documents : une règle d'annulation, une liste de contrôle d'ouverture pour le personnel, une liste de prix, une lettre à votre propriétaire. Pour les règles et tout ce qui est juridique, faites vérifier par un professionnel ou par la source officielle."
          ],
          steps: ["Écrivez des notes rapides de ce que vous voulez.", "Demandez à un assistant d'IA (dans le document ou un assistant de discussion) d'en faire un document propre.", "Collez-le ou gardez-le dans Docs ou Word.", "Vérifiez les faits et corrigez la formulation.", "Enregistrez-le avec un nom clair."],
          words: [["Google Docs", "le traitement de texte gratuit de Google, dans un navigateur web."], ["Microsoft Word", "le traitement de texte de Microsoft, gratuit sur le web avec un compte Microsoft."], ["Règle (politique)", "une règle écrite pour votre entreprise, comme le fonctionnement des annulations."]],
          slides: [
            { title: "Vos documents", bullets: ["Google Docs ou Microsoft Word", "Gratuits dans un navigateur avec un compte", "Assistants d'IA dans certaines offres"] },
            { title: "Deux façons d'utiliser l'IA ici", bullets: ["L'assistant d'IA du document, si vous en avez un", "Ou rédigez dans un assistant de discussion et collez"] },
            { title: "Bonnes tâches pour les documents", bullets: ["Règle d'annulation", "Liste d'ouverture et liste de prix", "Faites vérifier les formulations juridiques"] }
          ],
          tryIt: "Écrivez cinq lignes rapides sur votre règle d'annulation ou de retard. Utilisez l'IA pour en faire une règle claire et polie, et enregistrez-la dans Docs ou Word.",
          youCanNow: "transformer des notes rapides en un document professionnel propre avec l'IA et un outil de bureau."
        },
        {
          title: "L'aide de l'IA dans les tableurs : Sheets et Excel",
          minutes: 5,
          goal: "Construire un tableau simple de ventes ou de stock et obtenir l'aide de l'IA pour le lire.",
          text: [
            "Un tableur est une grille de lignes et de colonnes pour les chiffres. Google Sheets et Microsoft Excel sont les choix les plus courants. Un tableau simple, comme Date, Article, Quantité, Prix, Total, vous apprend déjà beaucoup.",
            "L'IA peut aider de deux façons. Elle peut vous dire comment faire quelque chose (\"Comment faire le total de la colonne E dans Google Sheets ?\"), et dans certaines offres elle peut travailler dans la feuille. Vous pouvez aussi coller un petit tableau sans détails privés dans un assistant de discussion et demander : \"Quel article s'est le mieux vendu ?\"",
            "Vérifiez les calculs. L'IA est meilleure pour expliquer que pour calculer, alors laissez le tableur faire les totaux avec une formule SOMME (SUM), et utilisez l'IA pour expliquer ou suggérer quoi regarder."
          ],
          steps: ["Créez les colonnes : Date, Article, Quantité, Prix, Total.", "Entrez une semaine de ventes.", "Demandez à l'IA comment ajouter un total avec SOMME (SUM), et faites-le.", "Demandez à l'IA quel article s'est le mieux vendu, puis confirmez dans la feuille."],
          words: [["Tableur", "une grille de lignes et de colonnes pour les chiffres, comme Google Sheets ou Excel."], ["Formule", "une instruction dans une cellule qui calcule, comme =SUM(E2:E20) (ou =SOMME(E2:E20) dans un tableur en français)."]],
          slides: [
            { title: "Un tableau de ventes simple", bullets: ["Date, Article, Quantité, Prix, Total", "Google Sheets ou Microsoft Excel"] },
            { title: "Comment l'IA aide", bullets: ["Elle explique : \"Comment faire le total de la colonne E ?\"", "Elle travaille dans la feuille dans certaines offres", "Elle lit un petit tableau sans détails privés"] },
            { title: "Laissez la feuille calculer", bullets: ["Utilisez une formule SOMME pour les totaux", "L'IA explique ; la feuille calcule", "Confirmez ce que dit l'IA dans vos données"] }
          ],
          tryIt: "Créez un tableau de ventes ou de stock d'au moins 10 lignes. Utilisez une formule SOMME pour le total, et demandez à l'IA quel article s'est le mieux vendu. Confirmez la réponse dans votre feuille.",
          youCanNow: "construire un tableau de ventes simple et utiliser l'IA pour vous aider à le lire, pendant que le tableur fait les calculs."
        },
        {
          title: "Construire votre boîte à outils d'IA de départ",
          minutes: 5,
          goal: "Choisir trois à cinq outils, donner une tâche à chacun et fixer une règle de sécurité pour chacun.",
          text: [
            "Votre boîte à outils est une liste courte : l'outil, sa tâche, l'offre et une règle. Par exemple : ChatGPT (gratuit) pour les réponses et les descriptions ; Canva (gratuit) pour les prospectus ; Google Sheets pour les ventes de la semaine ; Google Docs pour les règles.",
            "Avant de payer une offre supérieure, utilisez l'offre gratuite pendant un mois et notez ce que vous n'avez pas pu faire. Ne payez que pour une fonction dont vous avez vraiment besoin, et vérifiez le prix sur le site officiel.",
            "Les règles de sécurité accompagnent chaque outil : pas de numéros de carte de clients, de mots de passe ni de détails privés ; vérifiez chaque fait avant que les clients le voient ; n'utilisez que des photos et des textes que vous avez le droit d'utiliser."
          ],
          steps: ["Listez trois à cinq outils.", "Écrivez une tâche pour chacun.", "Écrivez \"gratuit\" ou l'offre que vous payez.", "Écrivez une règle de sécurité pour chacun.", "Créez un vrai élément avec chaque outil."],
          words: [["Boîte à outils", "la liste courte des outils que vous utilisez et ce à quoi chacun sert."], ["Offre supérieure", "une offre payante avec plus de fonctions."]],
          slides: [
            { title: "Le tableau de votre boîte à outils", bullets: ["Outil | Tâche | Offre | Règle de sécurité", "Trois à cinq outils suffisent"] },
            { title: "Avant de payer", bullets: ["Utilisez l'offre gratuite pendant un mois", "Notez ce que vous n'avez pas pu faire", "Vérifiez le prix sur le site officiel"] },
            { title: "Règles pour chaque outil", bullets: ["Pas de numéros de carte, mots de passe ni détails privés", "Vérifiez les faits avant que les clients les voient", "N'utilisez que des photos dont vous avez les droits"] }
          ],
          tryIt: "Tâche finale : faites le tableau de votre boîte à outils, puis créez un vrai élément avec chaque outil : un message à un client, un prospectus ou une publication, et une liste de prix ou un tableau de ventes.",
          youCanNow: "choisir, organiser et utiliser sans danger un petit ensemble d'outils d'IA pour votre entreprise."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les outils de bureau et votre boîte à outils",
        questions: [
          { q: "Votre application de documents n'a pas d'assistant d'IA. Que pouvez-vous faire ?", options: ["Rédiger dans un assistant de discussion et coller le texte", "Abandonner", "Acheter un nouvel ordinateur", "L'écrire dans Excel"], answer: 0, why: "Un brouillon fait dans un assistant de discussion peut être collé dans n'importe quel document." },
          { q: "Qui doit vérifier la formulation d'une règle juridique ?", options: ["Seulement l'IA", "Personne", "Un client", "Un professionnel ou la source officielle"], answer: 3, why: "Les formulations juridiques demandent la vérification d'un professionnel." },
          { q: "Qu'est-ce qui doit faire les totaux de votre tableau de ventes ?", options: ["Une estimation de l'IA", "Une formule SOMME dans le tableur", "Le calcul de tête", "Une publication sur les réseaux sociaux"], answer: 1, why: "Les tableurs calculent de façon fiable ; l'IA explique." },
          { q: "Avant de payer une offre d'IA supérieure, vous devez :", options: ["Utiliser l'offre gratuite un certain temps et noter ce qui vous manque", "Payer tout de suite", "Demander à une publicité", "Acheter toutes les offres"], answer: 0, why: "Ne payez que pour ce dont vous avez vraiment besoin." },
          { q: "Quelle est une règle de sécurité pour chaque outil ?", options: ["Coller des numéros de carte pour gagner du temps", "Donner votre mot de passe à l'outil", "Ne jamais y mettre de numéros de carte de clients ni de mots de passe", "Utiliser n'importe quelle photo en ligne"], answer: 2, why: "Les données privées restent hors des outils d'IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les outils d'IA essentiels pour les petites entreprises",
    questions: [
      { q: "ChatGPT, Copilot et Gemini sont des exemples de :", options: ["Caisses enregistreuses", "Assistants de discussion", "Applications de livraison", "Banques"], answer: 1, why: "Ce sont des assistants de discussion avec IA." },
      { q: "Quel type d'outil convient le mieux pour concevoir un menu ?", options: ["Un thermomètre", "Une calculatrice", "Une application bancaire", "Un outil de conception comme Canva"], answer: 3, why: "Les outils de conception créent des menus et des prospectus." },
      { q: "Des fonctions d'IA peuvent aussi apparaître dans :", options: ["Nulle part ailleurs", "Seulement les jouets", "Seulement les imprimantes", "Les applications que vous utilisez déjà, comme la réservation ou la caisse"], answer: 3, why: "Beaucoup d'applications professionnelles ajoutent des fonctions d'IA." },
      { q: "Dans une discussion, quand donnez-vous les détails de votre entreprise ?", options: ["Jamais", "Une fois au début", "Seulement à la fin", "Dans chaque mot"], answer: 1, why: "Les donner une fois permet de demander plusieurs éléments." },
      { q: "\"Donne-moi trois versions\" vous aide à :", options: ["Payer moins d'impôts", "Supprimer la discussion", "Choisir la meilleure option", "Partager des mots de passe"], answer: 2, why: "Les options vous permettent de choisir." },
      { q: "Un modèle de SMS de rappel doit utiliser :", options: ["\"[nom du client]\" comme repère", "Le numéro de carte du client", "Votre mot de passe", "L'adresse d'un vrai client"], answer: 0, why: "Les repères gardent les détails privés à l'écart." },
      { q: "Où vérifier ce que comprend aujourd'hui l'offre gratuite de Canva ?", options: ["En devinant", "Dans un vieil article de blog", "Sur canva.com", "Chez un concurrent"], answer: 2, why: "Le site officiel a les détails actuels des offres." },
      { q: "Un prospectus clair a :", options: ["Un message principal et le moyen de vous joindre", "Dix messages", "Du texte minuscule", "Aucun nom d'entreprise"], answer: 0, why: "Simple et lisible, c'est ce qui marche le mieux." },
      { q: "Quelles photos devez-vous utiliser ?", options: ["N'importe quelle photo en ligne", "Les vôtres ou celles que vous avez le droit d'utiliser", "Celles d'un concurrent", "Des images au hasard des réseaux sociaux"], answer: 1, why: "N'utilisez que des images dont vous avez les droits." },
      { q: "Google Docs et Microsoft Word sont :", options: ["Seulement des outils de conception", "Des opérateurs téléphoniques", "Des applications de paiement", "Des outils de documents"], answer: 3, why: "Ce sont des traitements de texte." },
      { q: "Où doit se trouver la version finale vérifiée d'une règle ?", options: ["Dans votre document (Docs ou Word)", "Seulement dans la discussion avec l'IA", "Sur un post-it", "Nulle part"], answer: 0, why: "Les documents gardent la version finale que vous pouvez partager et mettre à jour." },
      { q: "Une bonne tâche de document pour l'IA est :", options: ["Choisir un avocat", "Signer un contrat pour vous", "Faire votre déclaration d'impôts", "Une liste de contrôle d'ouverture"], answer: 3, why: "Les listes de contrôle sont des écrits à faible risque." },
      { q: "Un tableur est :", options: ["Un assistant de discussion", "Un modèle de conception", "Une grille de lignes et de colonnes pour les chiffres", "Une banque"], answer: 2, why: "Sheets et Excel organisent les chiffres." },
      { q: "=SUM(E2:E20) est un exemple de :", options: ["Prompt", "Formule", "Modèle", "Mot de passe"], answer: 1, why: "Les formules calculent dans les cellules." },
      { q: "L'IA dit que votre meilleure vente, ce sont les tacos. Vous devez :", options: ["Le dire aux clients", "Supposer que c'est juste", "Supprimer la feuille", "Le confirmer dans votre feuille"], answer: 3, why: "Vérifiez la lecture de l'IA avec vos données." },
      { q: "Avant de coller un tableau dans un assistant de discussion, retirez :", options: ["Le nom des articles", "Les dates", "Les noms des clients et les numéros de carte", "Les totaux"], answer: 2, why: "Les détails privés restent à l'écart." },
      { q: "Combien d'outils doit avoir une boîte à outils de départ ?", options: ["Trois à cinq", "Cinquante", "Aucun", "Cent"], answer: 0, why: "Une liste courte que vous utilisez vraiment." },
      { q: "Le tableau de votre boîte à outils indique :", options: ["Des mots de passe", "L'outil, la tâche, l'offre et la règle de sécurité", "Les numéros de carte des clients", "Seulement les prix"], answer: 1, why: "Ces quatre colonnes la gardent utile et sûre." },
      { q: "Quand payer une offre supérieure ?", options: ["Toujours dès le premier jour", "Quand vous avez besoin d'une fonction que l'offre gratuite n'a pas", "Quand une publicité le dit", "Sans jamais vérifier le prix"], answer: 1, why: "Ne payez que pour de vrais besoins, après avoir vérifié le prix." },
      { q: "Quelle règle s'applique à chaque outil d'IA ?", options: ["Vérifier les faits avant que les clients les voient", "Partager les mots de passe pour gagner du temps", "Copier n'importe quelle photo", "Croire chaque chiffre"], answer: 0, why: "Vérifier les faits protège votre entreprise." }
    ]
  }
};
