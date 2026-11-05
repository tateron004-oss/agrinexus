"use strict";

// Koach Learn course (French translation of shared/retail-sales-cashier.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "retail-sales-cashier-fr",
  lang: "fr",
  translationOf: "retail-sales-cashier",
  category: "Workforce Development",
  name: "Vente en magasin et métier de caissier",
  skills: "Enregistrer une vente, Rendre la monnaie, Vérifier les pièces d'identité et les gros billets, Proposer un article sans insister, Gérer les retours et les clients mécontents, Tenir un poste",
  outcome: "tenir une caisse de magasin de l'ouverture à la fermeture : enregistrer une vente, rendre la monnaie exacte, vérifier la pièce d'identité et les gros billets avant une vente, proposer un article utile, gérer un retour ou un client mécontent selon les règles du magasin et suivre une liste de contrôle du poste.",
  about: [
    "Les emplois de caissier et de vendeur en magasin font partie des premiers emplois les plus courants aux États-Unis, et les magasins embauchent des personnes sans expérience. C'est aussi un bon premier pas pour les personnes qui reprennent le travail après une absence. Ce cours vous prépare pour votre premier jour.",
    "Vous allez vous entraîner à un passage en caisse, du bonjour au ticket, à rendre la monnaie comme les caissiers formés, à vérifier les pièces d'identité pour les articles soumis à un âge minimum, à repérer un faux billet et une arnaque aux cartes cadeaux, à proposer un article sans insister, et à gérer les retours et les clients mécontents selon les règles.",
    "Chaque magasin a sa propre caisse et ses propres règles, et le magasin vous forme sur celles-ci. Ce cours vous donne les compétences utiles dans n'importe quel magasin, pour apprendre plus vite et faire moins d'erreurs. Il vous présente aussi une vraie certification du commerce que vous pouvez obtenir.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » que vous pouvez faire chez vous avec des pièces, des billets de jeu de société ou des bouts de papier. Il y a deux questions rapides après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Créez votre propre Fiche de poste de caissier sur une page : (1) les étapes d'ouverture de votre tiroir-caisse, (2) votre script de passage en caisse, du bonjour au ticket, avec une phrase de suggestion, (3) le relevé de cinq ventes d'entraînement où vous avez rendu la monnaie exacte, (4) vos étapes pour une vente soumise à un âge minimum et pour un gros billet, (5) les trois situations où vous appellerez un responsable, (6) les étapes de fermeture et (7) une ligne indiquant la certification du commerce ou l'emploi que vous visez et la date à laquelle vous commencerez.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes qui cherchent un premier emploi, des adultes qui sortent de prison et des adultes qui changent de métier ou reprennent le travail. Beaucoup n'ont jamais tenu une caisse ; certains ont utilisé une caisse libre-service mais ne se sont jamais trouvés derrière un comptoir.",
    startingPoint: "Savent additionner et soustraire de l'argent avec un peu d'aide, et connaissent les pièces et les billets. Peu ou pas d'expérience d'une caisse enregistreuse (point de vente), d'un tiroir-caisse, de la vérification des pièces d'identité, des règles d'un magasin ou de la vente.",
    gap: "Les magasins embauchent sur l'attitude et forment sur le terrain, mais les nouveaux caissiers lents à rendre la monnaie, hésitants pour vérifier une pièce d'identité ou nerveux face aux clients mécontents sont ceux qui ont des écarts de caisse ou perdent vite leur emploi. Les apprenants ont besoin des bonnes habitudes de base avant leur premier poste pour réussir l'entretien d'embauche, passer vite la formation et garder l'emploi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ niveau CM2 à 5e, grade 5 à 7 aux États-Unis)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; l'entraînement se fait avec des pièces, de la fausse monnaie ou des bouts de papier, sans caisse",
      "Temps : leçons de 4 à 6 minutes",
      "Chaque magasin a sa propre caisse, ses règles et ses consignes ; les apprenants suivent la formation de leur magasin",
      "Les règles des ventes soumises à un âge minimum changent selon l'État ; dans certains États, les adolescents n'ont pas le droit de vendre de l'alcool ou du tabac",
      "Sécurité : ne pas poursuivre les voleurs à l'étalage et ne pas résister lors d'un vol à main armée ; suivre les règles du magasin et appeler le 911"
    ],
    prerequisites: "Aucun. Les apprenants qui veulent s'entraîner davantage aux pourcentages et à l'argent peuvent suivre « Les maths de tous les jours, au travail et dans la vie » ; « L'excellence du service client » approfondit le service."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir d'une vente d'entraînement avec plusieurs articles, un bon de réduction et un paiement", action: "enregistrer un passage en caisse du bonjour au ticket dans le bon ordre", standard: "avec le bon total et un merci à chaque fois" },
    { id: "O2", condition: "À partir d'un total et de l'argent que le client vous donne", action: "rendre la monnaie à un client en comptant à partir du total", standard: "avec la monnaie exacte dans 5 ventes d'entraînement sur 5" },
    { id: "O3", condition: "Face à un article soumis à un âge minimum, un gros billet ou un client qui achète beaucoup de cartes cadeaux", action: "vérifier la pièce d'identité, le billet ou les signaux d'alerte avant de terminer la vente", standard: "en respectant la loi et les règles du magasin, et en appelant un responsable quand quelque chose ne va pas" },
    { id: "O4", condition: "Face à un client qui cherche quelque chose", action: "poser une question ouverte et proposer un article lié avec son avantage", standard: "sans insister, et en acceptant poliment un refus" },
    { id: "O5", condition: "Face à un retour, un problème de prix ou un client mécontent", action: "régler le problème selon les règles du magasin et appeler un responsable quand cela dépasse votre rôle", standard: "en restant calme et en protégeant votre sécurité et celle des autres" },
    { id: "O6", condition: "En utilisant ce que vous avez appris dans ce cours", action: "rédiger une liste de contrôle d'une page pour ouvrir, tenir et fermer une caisse", standard: "avec toutes les étapes dans l'ordre et une date pour votre prochaine étape vers l'emploi" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : La caisse et l'argent",
      lessons: [
        {
          title: "Le passage en caisse, du bonjour au ticket",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enregistrer une vente d'entraînement dans le bon ordre, du bonjour au ticket.",
          text: [
            "Les caissiers scannent les articles, encaissent, rendent la monnaie et donnent le ticket, emballent les articles, gèrent les retours et répondent aux questions. Selon le Bureau des statistiques du travail des États-Unis (BLS), la formation se fait en général sur le terrain et dure jusqu'à quelques semaines. Aucun diplôme ni permis n'est exigé, mais beaucoup de magasins préfèrent un diplôme de fin d'études secondaires ou le GED (l'examen américain équivalent).",
            "Chaque caisse est différente, mais chaque passage en caisse suit le même ordre : saluer le client, scanner chaque article en regardant le prix à l'écran, appliquer les bons de réduction ou les remises, annoncer le total, encaisser le paiement, rendre la monnaie et le ticket, puis remercier le client.",
            "Regardez l'écran pendant que vous scannez. Si un article passe deux fois, ou si le prix n'est pas celui de l'étiquette du rayon, arrêtez-vous et corrigez avant d'encaisser. Votre formateur vous montrera comment retirer (annuler) un article et comment demander une vérification de prix depuis votre caisse.",
            "Les clients paient en espèces, par carte (sans contact, en l'insérant ou en la glissant), avec un portefeuille sur téléphone, une carte cadeau ou une carte d'aide sociale. Laissez le client manipuler lui-même sa carte et son code. Ne demandez jamais le code à voix haute et ne gardez jamais la carte d'un client."
          ],
          steps: [
            "Saluez le client et regardez-le dans les yeux : « Bonjour, vous avez trouvé tout ce qu'il vous fallait ? »",
            "Scannez chaque article et vérifiez à l'écran le bon nom et le bon prix.",
            "Demandez les bons de réduction ou le numéro de carte de fidélité avant de faire le total.",
            "Annoncez le total à voix haute : « Cela fait $23.40. »",
            "Encaissez le paiement et suivez les instructions de la caisse.",
            "Rendez la monnaie et le ticket, et remerciez le client."
          ],
          words: [
            ["POS (point de vente)", "le système de caisse : l'écran, le scanner, le lecteur de cartes et le tiroir-caisse."],
            ["Annulation", "retirer un article de la vente avant qu'il soit payé."],
            ["Vérification de prix", "demander à un collègue ou au système le bon prix d'un article."],
            ["Ticket de caisse", "la preuve imprimée ou envoyée par e-mail de ce que le client a acheté et payé."]
          ],
          slides: [
            { title: "Ce que font les caissiers", bullets: ["Scanner, encaisser, rendre la monnaie et donner le ticket", "Emballer les articles et gérer les retours", "Formation sur le terrain, en général quelques semaines"] },
            { title: "Le même ordre à chaque vente", bullets: ["Bonjour, scan, bons de réduction, total", "Paiement, monnaie et ticket", "Remercier le client"] },
            { title: "Regardez l'écran", bullets: ["Un article est passé deux fois ? Corrigez avant le paiement", "Prix différent de l'étiquette ? Demandez une vérification de prix", "Votre formateur vous montre comment annuler un article"] },
            { title: "Paiements par carte", bullets: ["Le client manipule lui-même sa carte et son code", "Ne demandez jamais le code à voix haute", "Ne gardez jamais la carte d'un client"] }
          ],
          sources: [{ name: "Bureau des statistiques du travail des États-Unis (BLS) : Caissiers (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }],
          tryIt: "Posez cinq objets de la maison sur une table et écrivez un prix sur un bout de papier pour chacun. Jouez le caissier : saluez un client imaginaire, « scannez » chaque objet en lisant son prix à voix haute et en le notant, retirez $2 avec un bon de réduction, annoncez le total et remerciez le client. Vérifiez votre total avec une calculatrice.",
          youCanNow: "enregistrer une vente dans le bon ordre, repérer une erreur de scan avant le paiement et encaisser un paiement par carte en toute sécurité.",
          quickCheck: [
            { objective: "O1", q: "Que faites-vous juste avant d'annoncer le total au client ?", options: ["Demander les bons de réduction ou un numéro de fidélité", "Donner le ticket", "Rendre la monnaie", "Dire au revoir"], answer: 0, why: "Les bons de réduction et la fidélité doivent être appliqués avant le total, sinon le total est faux." },
            { objective: "O1", q: "Une chemise passe deux fois à l'écran. Que faites-vous ?", options: ["Laisser le client le voir sur le ticket", "Le faire payer et corriger la prochaine fois", "Vous arrêter et retirer l'article en trop avant le paiement", "Retirer la deuxième chemise du rayon"], answer: 2, why: "Corriger le double scan avant le paiement garde le bon total et évite un retour plus tard." }
          ]
        },
        {
          title: "Rendre la monnaie et garder un tiroir-caisse juste",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rendre la monnaie exacte en comptant à partir du total jusqu'à la somme payée.",
          text: [
            "Même quand la caisse affiche la monnaie à rendre, les caissiers formés la comptent à voix haute. Cela permet de repérer les erreurs et montre au client que la monnaie est juste. C'est la méthode du comptage à partir du total : vous partez du total et vous comptez jusqu'à la somme que le client vous a donnée.",
            "Exemple : le total est de $13.47 et le client vous donne $20. Dites « $13.47 », puis donnez 3 pièces de 1 cent (« $13.50 »), 2 pièces de 25 cents (« $14 »), un dollar (« $15 ») et un billet de cinq (« et $20 »). Cela fait $6.53 de monnaie.",
            "Gardez le billet du client posé sur le tiroir-caisse, pas dedans, jusqu'à ce que la monnaie soit comptée. S'il dit « Je vous ai donné un billet de cinquante », vous pouvez tous les deux voir que c'était un billet de vingt.",
            "Votre tiroir-caisse (aussi appelé fond de caisse) commence chaque poste avec une somme fixe que vous comptez avec un responsable. À la fin, il est recompté. L'excédent ou le manque (« écart de caisse ») est contrôlé : ne laissez donc jamais quelqu'un d'autre utiliser votre tiroir et n'y mélangez jamais votre propre argent."
          ],
          steps: [
            "Annoncez le total à voix haute.",
            "Posez l'argent du client sur le tiroir-caisse, pas dedans.",
            "Comptez d'abord avec les plus petites pièces, en disant chaque nouvelle somme.",
            "Puis comptez avec les billets jusqu'à la somme qu'il vous a donnée.",
            "Rangez l'argent du client dans le tiroir et fermez-le."
          ],
          words: [
            ["Comptage à partir du total", "rendre la monnaie en partant du total et en ajoutant pièces et billets jusqu'à la somme payée."],
            ["Tiroir-caisse (fond de caisse)", "le plateau d'argent de la caisse dont un seul caissier est responsable."],
            ["Écart de caisse (excédent/manque)", "la différence entre ce que le tiroir devrait contenir et ce qu'il contient vraiment à la fin du poste."]
          ],
          slides: [
            { title: "Comptez à partir du total, à voix haute", bullets: ["Partez du total", "Ajoutez les pièces, puis les billets", "Arrêtez-vous à la somme donnée par le client"] },
            { title: "Exemple : $13.47 payé avec $20", bullets: ["3 pièces de 1 cent : $13.50", "2 pièces de 25 cents : $14. Un dollar : $15", "Un billet de cinq : $20. Monnaie : $6.53"] },
            { title: "Protégez-vous", bullets: ["Gardez son billet sur le tiroir jusqu'à la fin du rendu", "Puis rangez-le", "Cela règle toute question du type « Je vous ai donné cinquante »"] },
            { title: "Votre tiroir est à vous", bullets: ["Comptez-le avec un responsable au début et à la fin", "Personne d'autre n'utilise votre tiroir", "N'y mélangez jamais votre propre argent"] }
          ],
          tryIt: "Utilisez de vraies pièces ou de la fausse monnaie. Faites ces trois ventes à voix haute avec la méthode du comptage à partir du total : total $7.80 payé avec $10 ; total $4.35 payé avec $5 ; total $26.62 payé avec $30. Notez la monnaie de chacune, puis vérifiez : $2.20, $0.65 et $3.38.",
          youCanNow: "rendre la monnaie exacte en comptant à partir du total et protéger votre tiroir-caisse des erreurs.",
          quickCheck: [
            { objective: "O2", q: "Le total est de $7.80 et le client paie avec $10. Quelle monnaie rendez-vous ?", options: ["$3.20", "$2.20", "$2.80", "$1.20"], answer: 1, why: "Deux pièces de 10 cents vous amènent à $8.00 et deux dollars à $10.00 : la monnaie est donc de $2.20." },
            { objective: "O2", q: "Où doit se trouver le billet de $20 du client pendant que vous comptez sa monnaie ?", options: ["Dans votre poche", "Sous le tiroir", "De nouveau dans la main du client", "Posé sur le tiroir-caisse, là où vous pouvez tous les deux le voir"], answer: 3, why: "Le garder visible jusqu'à la fin du rendu règle toute question sur le billet donné." }
          ]
        },
        {
          title: "Pièces d'identité, gros billets et arnaques à la caisse",
          objectives: ["O3"],
          minutes: 6,
          goal: "Vérifier une pièce d'identité, un gros billet et les signes d'une arnaque aux cartes cadeaux avant de terminer la vente.",
          text: [
            "Certains articles sont soumis à un âge minimum. Selon la loi fédérale, personne de moins de 21 ans ne peut acheter de tabac ni de cigarettes électroniques, et la FDA (l'agence américaine qui contrôle les aliments, les médicaments et le tabac) demande de vérifier une pièce d'identité avec photo pour toute personne de moins de 30 ans. L'alcool s'achète aussi à partir de 21 ans dans tous les États. L'âge pour VENDRE de l'alcool ou du tabac comme caissier est fixé par chaque État, et les magasins ajoutent souvent leurs propres règles. Votre magasin vous le dira.",
            "Pour vérifier une pièce d'identité : comparez la photo et le visage, vérifiez qu'elle n'est pas expirée et lisez la date de naissance. Astuce rapide : si nous sommes le 15 mars 2027, le client doit être né le 15 mars 2006 ou avant pour avoir 21 ans. En cas de doute, ou si la pièce semble modifiée, ne vendez pas et appelez un responsable. Vendre à un mineur peut entraîner des amendes pour vous et pour le magasin.",
            "Pour un gros billet, utilisez les vérifications de uscurrency.gov. Sur un billet de $100 : inclinez-le et les cloches du ruban bleu se changent en 100, et le 100 dans le coin passe du cuivre au vert ; regardez-le à la lumière pour voir le portrait en filigrane et le fil de sécurité ; touchez l'impression rugueuse en relief. Si un billet échoue, n'accusez pas le client : appelez un responsable. Les magasins signalent les faux billets présumés au Secret Service des États-Unis.",
            "Les arnaques aux cartes cadeaux passent par la caisse. Les escrocs disent aux gens d'acheter des cartes cadeaux pour payer des « frais du gouvernement » ou aider un « proche en difficulté ». La FTC (l'agence américaine de protection des consommateurs) affirme qu'aucune vraie entreprise ni administration ne demande à être payée en cartes cadeaux. Si un client achète beaucoup de cartes pendant que quelqu'un au téléphone lui dit quoi faire, suivez les règles de votre magasin : appeler un responsable, ou partager gentiment cet avertissement."
          ],
          steps: [
            "Article soumis à un âge minimum : demandez une pièce d'identité avec photo si le client semble avoir moins de 30 ans.",
            "Comparez la photo, vérifiez qu'elle n'est pas expirée et calculez l'âge avec la date de naissance.",
            "Gros billet : inclinez-le, regardez-le à la lumière et touchez-le.",
            "Cartes cadeaux : attention aux nombreuses cartes, à la précipitation ou à une personne au téléphone qui donne des ordres.",
            "Si quelque chose ne va pas : ne terminez pas la vente ; appelez un responsable."
          ],
          words: [
            ["Article soumis à un âge minimum", "un produit que la loi réserve aux personnes au-dessus d'un certain âge, comme le tabac ou l'alcool."],
            ["Faux billet", "de la fausse monnaie faite pour ressembler à la vraie."],
            ["Filigrane", "une image légère dans le papier d'un billet, visible quand on le regarde à la lumière."],
            ["Arnaque aux cartes cadeaux", "une escroquerie où quelqu'un pousse une personne à le payer avec les numéros de cartes cadeaux."]
          ],
          slides: [
            { title: "Ventes soumises à un âge minimum", bullets: ["Tabac et cigarettes électroniques : 21 ans pour acheter (loi fédérale)", "FDA : pièce d'identité avec photo pour toute personne de moins de 30 ans", "Alcool : 21 ans pour acheter ; l'âge pour vendre est fixé par votre État"] },
            { title: "Vérifier une pièce d'identité", bullets: ["La photo correspond au visage", "Pas expirée", "Né à la date du jour il y a 21 ans ou avant", "Un doute ? Ne vendez pas. Appelez un responsable."] },
            { title: "Vérifier un billet de $100", bullets: ["Inclinez : les cloches deviennent des 100 ; le 100 du coin passe du cuivre au vert", "À la lumière : portrait en filigrane et fil de sécurité", "Au toucher : impression rugueuse en relief"] },
            { title: "Signes d'arnaque aux cartes cadeaux", bullets: ["Beaucoup de cartes, précipitation, quelqu'un au téléphone qui donne des ordres", "Aucune vraie entreprise ni administration n'accepte les cartes cadeaux en paiement", "Suivez les règles du magasin ; appelez un responsable"] }
          ],
          sources: [
            { name: "FDA : Tobacco 21 (âge de 21 ans pour le tabac)", url: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21" },
            { name: "Programme américain d'information sur la monnaie : éléments de sécurité du billet de $100", url: "https://www.uscurrency.gov/denominations/100" },
            { name: "Programme américain d'information sur la monnaie : signaler un faux billet", url: "https://www.uscurrency.gov/report-counterfeit" },
            { name: "FTC : Éviter et signaler les arnaques aux cartes cadeaux", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" }
          ],
          tryIt: "Prenez un billet que vous avez (de $1, $5, $10 ou $20). Regardez-le à la lumière, inclinez-le et touchez-le, et notez tous les éléments de sécurité que vous trouvez. Puis, avec la date du jour, écrivez la date de naissance la plus récente qui permet d'acheter du tabac.",
          youCanNow: "vérifier une pièce d'identité avant une vente soumise à un âge minimum, vérifier un gros billet et repérer les signes d'une arnaque aux cartes cadeaux.",
          quickCheck: [
            { objective: "O3", q: "Un client qui semble avoir environ 25 ans veut acheter des cigarettes électroniques. Que faites-vous ?", options: ["Lui vendre parce qu'il semble avoir plus de 21 ans", "Lui demander son âge et le croire", "Demander une pièce d'identité avec photo et vérifier la date de naissance", "Refuser de vendre des cigarettes électroniques à tout le monde"], answer: 2, why: "La FDA demande de vérifier une pièce d'identité avec photo pour toute personne de moins de 30 ans qui achète des produits du tabac." },
            { objective: "O3", q: "Le chiffre dans le coin d'un billet de $100 ne change pas de couleur quand vous l'inclinez. Que faites-vous ?", options: ["Appeler un responsable sans accuser le client", "Dire au client que c'est un criminel", "L'accepter quand même ; il est sûrement bon", "Le déchirer en deux"], answer: 0, why: "Une vérification ratée va au responsable ; le magasin s'occupe des faux billets présumés et les signale." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : La caisse et l'argent",
        questions: [
          { objective: "O1", q: "Quel est le bon ordre pour un passage en caisse ?", options: ["Paiement, scan, bonjour, ticket", "Scan, ticket, bonjour, paiement", "Bonjour, scan, total, paiement, monnaie et ticket", "Total, bonjour, scan, merci"], answer: 2, why: "Chaque vente suit : bonjour, scan, bons de réduction, total, paiement, monnaie et ticket, merci." },
          { objective: "O1", q: "Un client veut payer par carte. Quel est votre rôle ?", options: ["Le laisser manipuler sa carte et son code, et suivre les instructions de la caisse", "Lui demander de dire son code pour que vous le tapiez", "Garder la carte jusqu'à la fin de la vente", "Écrire le numéro de la carte sur le ticket"], answer: 0, why: "Les clients manipulent eux-mêmes leur carte et leur code ; les caissiers ne les demandent ni ne les gardent jamais." },
          { objective: "O2", q: "Le total est de $4.35 et le client paie avec $5. Quelle monnaie est juste ?", options: ["$1.35", "$0.75", "$0.55", "$0.65"], answer: 3, why: "Une pièce de 5 cents jusqu'à $4.40, une de 10 cents jusqu'à $4.50 et deux de 25 cents jusqu'à $5.00 font $0.65." },
          { objective: "O3", q: "Nous sommes le 15 mars 2027. Pour acheter de l'alcool, un client doit être né au plus tard le :", options: ["15 mars 2009", "15 mars 2006", "15 mars 2007", "1er janvier 2006"], answer: 1, why: "21 ans avant le 15 mars 2027, c'est le 15 mars 2006." },
          { objective: "O3", q: "Un client au téléphone achète $500 de cartes cadeaux et dit que la personne qui appelle est « du gouvernement ». De quoi s'agit-il le plus probablement ?", options: ["D'un cadeau normal", "D'une promotion du magasin", "D'une arnaque aux cartes cadeaux", "D'un remboursement d'impôts"], answer: 2, why: "La FTC affirme qu'aucune vraie entreprise ni administration ne demande à être payée en cartes cadeaux." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Vendre, servir et tenir un poste",
      lessons: [
        {
          title: "Aider les clients à choisir, sans insister",
          objectives: ["O4"],
          minutes: 5,
          goal: "Poser une question ouverte et proposer un article lié avec son avantage.",
          text: [
            "La vente en magasin, c'est aider les gens à trouver ce qu'ils sont venus chercher, et quelque chose qui le rend plus utile. Commencez par une question ouverte, à laquelle on ne peut pas répondre par oui ou non : « Vous allez l'utiliser pour quoi ? »",
            "Ensuite, donnez un avantage, pas seulement une caractéristique. Une caractéristique, c'est ce que l'article possède (« cette coque de téléphone a un rebord surélevé ») ; un avantage, c'est ce qu'il apporte au client (« votre écran est protégé s'il tombe face contre terre »).",
            "Une suggestion (les magasins parlent de vente additionnelle) est un seul article lié : des piles avec un jouet, une coque avec un téléphone, des chaussettes avec des chaussures. Proposez-en un, dites pourquoi et, si le client dit non, souriez et n'insistez pas. Insister fait partir les gens, qui ne reviennent pas.",
            "N'inventez jamais d'informations sur un produit. Si vous ne savez pas, dites « Je vais me renseigner » et demandez à un collègue ou lisez l'étiquette."
          ],
          steps: [
            "Saluez et posez une question ouverte : « Vous allez l'utiliser pour quoi ? »",
            "Écoutez la réponse.",
            "Montrez un avantage qui correspond à ce que le client a dit.",
            "Proposez un article lié et dites pourquoi.",
            "Acceptez poliment un refus : « Pas de problème ! »"
          ],
          words: [
            ["Question ouverte", "une question qui demande plus qu'un oui ou un non."],
            ["Caractéristique", "quelque chose que possède un produit."],
            ["Avantage", "ce que cette caractéristique apporte au client."],
            ["Vente additionnelle", "proposer un article lié qui aide le client."]
          ],
          slides: [
            { title: "Commencez par une question ouverte", bullets: ["« Vous allez l'utiliser pour quoi ? »", "Pas « Je peux vous aider ? » (facile de dire non)", "Écoutez la réponse"] },
            { title: "Caractéristique ou avantage", bullets: ["Caractéristique : un rebord surélevé sur la coque", "Avantage : votre écran est protégé s'il tombe face contre terre", "Les clients achètent des avantages"] },
            { title: "Une suggestion, sans insister", bullets: ["Des piles avec un jouet, des chaussettes avec des chaussures", "Dites pourquoi c'est utile", "Un refus, c'est normal : souriez et passez à la suite"] }
          ],
          tryIt: "Choisissez trois objets chez vous. Pour chacun, écrivez une question ouverte que vous poseriez à un client, un avantage et un article lié que vous pourriez proposer, avec une courte raison. Dites-les à voix haute.",
          youCanNow: "poser une question ouverte, expliquer un avantage et proposer un article sans insister.",
          quickCheck: [
            { objective: "O4", q: "Laquelle est une question ouverte ?", options: ["« Je peux vous aider ? »", "« Vous voulez un sac ? »", "« Ce sera tout ? »", "« Vous allez l'utiliser pour quoi ? »"], answer: 3, why: "Elle demande plus qu'un oui ou un non, donc vous apprenez ce dont le client a besoin." },
            { objective: "O4", q: "Vous proposez une coque de téléphone et le client dit non merci. Que faites-vous ?", options: ["Lui redemander trois fois", "Sourire, dire « Pas de problème » et terminer la vente", "Lui dire qu'il va le regretter", "La mettre quand même dans le sac"], answer: 1, why: "Une suggestion aide ; insister après un refus fait fuir les clients." }
          ]
        },
        {
          title: "Retours, problèmes de prix et clients mécontents",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gérer un retour, un problème de prix ou un client mécontent selon les règles du magasin, et appeler un responsable si nécessaire.",
          text: [
            "Chaque magasin a une politique de retour : combien de jours, si le ticket est nécessaire, et comment l'argent est rendu (sur la carte, en espèces ou en avoir). Apprenez la vôtre pendant la formation. Appliquez-la de la même façon pour tout le monde, et demandez un responsable quand un retour sort de la politique.",
            "Les problèmes de prix sont fréquents : l'étiquette du rayon indique $4.99 et la caisse affiche $5.49. Restez calme, faites une vérification de prix et suivez la règle de votre magasin. Ne vous disputez pas et ne changez pas les prix vous-même.",
            "Avec un client mécontent, suivez quatre étapes : écoutez sans l'interrompre, excusez-vous pour le désagrément, réglez ce que vous pouvez ou faites venir un responsable, et remerciez-le. Le cours « L'excellence du service client » va plus loin.",
            "Votre sécurité passe en premier. Ne poursuivez pas et n'attrapez pas un voleur à l'étalage ; prévenez un responsable ou la sécurité. Si un client vous menace, ou lors d'un vol à main armée, ne discutez pas et ne vous battez pas : suivez la formation sécurité de votre magasin, donnez ce qu'on vous demande et appelez le 911 quand vous êtes en sécurité. L'OSHA (l'agence américaine de la sécurité au travail) cite le maniement d'argent avec le public et le travail de nuit comme facteurs de risque de violence au travail."
          ],
          steps: [
            "Retour : comparez le ticket, la date et l'article avec la politique.",
            "Problème de prix : faites une vérification de prix et suivez la règle du magasin.",
            "Client mécontent : écoutez, excusez-vous, réglez ou faites venir un responsable, remerciez.",
            "Hors de votre rôle ou dangereux : appelez un responsable, la sécurité ou le 911."
          ],
          words: [
            ["Politique de retour", "les règles du magasin pour reprendre des articles et rendre l'argent."],
            ["Avoir", "un remboursement qui ne peut être dépensé que dans ce magasin."],
            ["Validation du responsable", "un responsable qui autorise une opération que la caisse ne laisse pas faire au caissier seul."],
            ["Vol à l'étalage", "prendre des articles dans un magasin sans payer."]
          ],
          slides: [
            { title: "Retours", bullets: ["Apprenez les délais, la règle du ticket et le type de remboursement", "Les mêmes règles pour tout le monde", "Hors politique ? Demandez un responsable"] },
            { title: "Problèmes de prix", bullets: ["Restez calme et faites une vérification de prix", "Suivez la règle du magasin", "Ne changez jamais un prix vous-même"] },
            { title: "Clients mécontents", bullets: ["Écoutez sans interrompre", "Excusez-vous pour le désagrément", "Réglez ou faites venir un responsable, puis remerciez"] },
            { title: "La sécurité d'abord", bullets: ["Ne poursuivez ni n'attrapez jamais un voleur à l'étalage", "Lors d'un vol : ne discutez pas, ne vous battez pas ; suivez votre formation", "Appelez le 911 quand vous êtes en sécurité"] }
          ],
          sources: [{ name: "OSHA : Violence au travail", url: "https://www.osha.gov/workplace-violence" }],
          tryIt: "Avec un ami, ou seul à voix haute, jouez cette scène : un client est fâché qu'une étiquette à $4.99 soit passée à $5.49. Utilisez les quatre étapes. Ensuite, notez deux types de retours que vous enverriez à un responsable.",
          youCanNow: "gérer calmement un retour, un problème de prix et un client mécontent, et savoir quand appeler un responsable ou le 911.",
          quickCheck: [
            { objective: "O5", q: "Un client veut rendre un article après le délai de retour du magasin. Que faites-vous ?", options: ["Appeler un responsable", "Rembourser en espèces quand même", "Crier qu'il est trop tard", "Cacher l'article"], answer: 0, why: "Tout ce qui sort de la politique va au responsable, qui peut décider." },
            { objective: "O5", q: "Vous voyez quelqu'un mettre un chargeur de téléphone dans son manteau et sortir. Que faites-vous ?", options: ["Le poursuivre jusqu'au parking", "L'attraper par le bras", "Prévenir tout de suite un responsable ou la sécurité", "Ignorer et ne rien dire"], answer: 2, why: "Votre sécurité passe en premier ; les magasins gèrent les vols par les responsables et la sécurité." }
          ]
        },
        {
          title: "Votre fiche de poste et votre chemin vers l'emploi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Rédiger une liste de contrôle du poste sur une page et fixer une date pour votre prochaine étape vers l'emploi.",
          text: [
            "Un bon poste a trois parties. Ouverture : pointez à l'heure, comptez votre tiroir-caisse avec un responsable, vérifiez le papier de la caisse et les sacs, et nettoyez votre espace. Pendant le poste : suivez l'ordre du passage en caisse, rendez la monnaie en comptant, vérifiez les pièces d'identité et gardez le tiroir fermé entre les ventes. Fermeture : comptez votre tiroir avec un responsable, déclarez honnêtement l'écart de caisse, rangez et pointez à la sortie.",
            "Tout mettre sur une fiche vous aide à apprendre vite et montre au recruteur que vous êtes prêt. Apportez-la à l'entretien et présentez-la.",
            "Une certification peut renforcer votre candidature. La NRF Foundation (qui fait partie de la Fédération nationale du commerce de détail des États-Unis) gère RISE Up, un programme de formation et de certification, avec des certifications comme Retail Industry Fundamentals (bases du commerce), Customer Service and Sales (service client et vente) et Customer Conflict De-escalation (apaiser les conflits avec les clients). Ce cours vous PRÉPARE ; il ne délivre pas de certification. Consultez nrffoundation.org pour savoir comment vous inscrire et combien cela coûte, ou demandez à un centre ou un programme d'emploi local, qui la propose peut-être.",
            "Ensuite, postulez. Les magasins embauchent toute l'année, et davantage avant les fêtes. Postulez en ligne sur la page carrières du magasin lui-même ou sur place, et ne payez jamais personne pour obtenir un emploi."
          ],
          steps: [
            "Écrivez vos étapes d'ouverture.",
            "Écrivez votre script de passage en caisse, avec une phrase de suggestion.",
            "Ajoutez votre entraînement au rendu de monnaie et vos étapes pour les pièces d'identité et les gros billets.",
            "Notez trois situations où vous appellerez un responsable.",
            "Écrivez vos étapes de fermeture.",
            "Ajoutez une prochaine étape datée : une certification ou une candidature."
          ],
          words: [
            ["Pointer à l'arrivée / à la sortie", "enregistrer l'heure à laquelle vous commencez et finissez le travail."],
            ["Certification", "un certificat ou un badge qui montre que vous avez réussi un test sur une compétence."],
            ["RISE Up", "le programme de formation et de certification au commerce de la NRF Foundation."]
          ],
          slides: [
            { title: "Ouverture", bullets: ["Pointez à l'heure", "Comptez votre tiroir avec un responsable", "Vérifiez le papier, les sacs et votre espace"] },
            { title: "Pendant le poste et fermeture", bullets: ["Ordre du passage en caisse, rendu de monnaie, vérification des pièces d'identité", "Tiroir fermé entre les ventes", "Fermeture : comptez avec un responsable, déclarez honnêtement l'écart"] },
            { title: "Une certification du commerce", bullets: ["Certifications RISE Up de la NRF Foundation", "Retail Industry Fundamentals, Customer Service and Sales", "Ce cours vous prépare ; il ne délivre pas de certification"] },
            { title: "Votre prochaine étape", bullets: ["Apportez votre fiche de poste aux entretiens", "Postulez sur la page carrières du magasin lui-même", "Ne payez jamais personne pour obtenir un emploi"] }
          ],
          sources: [
            { name: "NRF Foundation : RISE Up", url: "https://nrffoundation.org/riseup" },
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Caissiers", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }
          ],
          tryIt: "Créez votre Fiche de poste de caissier sur une page (papier ou note sur le téléphone) avec les sept parties de la tâche finale. Faites cinq ventes avec rendu de monnaie en fausse monnaie et notez-les sur la fiche. Terminez par une ligne : la certification ou le magasin que vous visez et la date à laquelle vous commencerez.",
          youCanNow: "ouvrir, tenir et fermer un poste de caisse avec une liste de contrôle, et franchir une étape datée vers un emploi dans le commerce.",
          quickCheck: [
            { objective: "O6", q: "Quelle est la première chose à faire avec votre tiroir-caisse au début du poste ?", options: ["Commencer à encaisser les clients", "Emprunter le tiroir d'un collègue", "Y ajouter votre propre argent", "Le compter avec un responsable"], answer: 3, why: "Compter au début fixe la somme dont vous êtes responsable." },
            { objective: "O6", q: "Qu'est-ce que ce cours vous apporte pour une certification RISE Up ?", options: ["La certification elle-même", "Une préparation ; la certification est gérée par la NRF Foundation", "Un permis de l'État", "Rien du tout"], answer: 1, why: "Le cours vous prépare ; la certification vient du programme RISE Up de la NRF Foundation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Vendre, servir et tenir un poste",
        questions: [
          { objective: "O4", q: "Lequel est un avantage, et non une caractéristique ?", options: ["La coque a un rebord surélevé", "Votre écran reste protégé si le téléphone tombe face contre terre", "La coque est bleue", "La coque est en plastique"], answer: 1, why: "Un avantage dit ce que la caractéristique apporte au client." },
          { objective: "O4", q: "Un client achète une voiture télécommandée. Quelle est une bonne suggestion ?", options: ["Une serpillière", "Une deuxième voiture qu'il n'a pas demandée", "Rien ; ne jamais proposer", "Les piles nécessaires, pour qu'elle marche en arrivant à la maison"], answer: 3, why: "Un article lié, avec une raison, aide le client." },
          { objective: "O5", q: "L'étiquette du rayon indique $4.99 mais la caisse affiche $5.49. Que faites-vous d'abord ?", options: ["Rester calme et faire une vérification de prix", "Changer vous-même le prix dans la caisse", "Dire au client que l'étiquette est fausse sans vérifier", "Refuser de vendre l'article"], answer: 0, why: "La vérification de prix donne le bon prix ; ensuite, vous suivez la règle du magasin." },
          { objective: "O5", q: "Quelqu'un vous menace et exige l'argent de votre tiroir. Que faites-vous ?", options: ["Vous battre pour protéger l'argent", "Discuter avec cette personne", "Suivre votre formation sécurité, ne pas résister et appeler le 911 quand vous êtes en sécurité", "La poursuivre hors du magasin"], answer: 2, why: "Votre sécurité passe en premier ; l'argent se remplace." },
          { objective: "O6", q: "À la fermeture, il manque $3 dans votre tiroir. Que faites-vous ?", options: ["Ajouter $3 de votre propre argent", "Le déclarer honnêtement quand vous comptez avec le responsable", "Prendre $3 dans un autre tiroir", "Partir sans compter"], answer: 1, why: "L'écart de caisse est compté et déclaré honnêtement ; mélanger l'argent cache les erreurs et enfreint les règles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Vente en magasin et métier de caissier",
    questions: [
      { objective: "O1", q: "Quand devez-vous demander les bons de réduction ou un numéro de fidélité ?", options: ["Après l'impression du ticket", "Avant de faire le total de la vente", "Lors de son prochain achat", "Seulement s'il se plaint"], answer: 1, why: "Les bons de réduction et la fidélité passent avant le total pour qu'il soit juste." },
      { objective: "O1", q: "Que veut dire « annuler » un article sur une caisse ?", options: ["Faire un remboursement", "Ouvrir le tiroir", "Imprimer un ticket", "Retirer un article de la vente avant qu'il soit payé"], answer: 3, why: "Une annulation retire un article de la vente avant le paiement." },
      { objective: "O1", q: "Un client veut payer avec sa carte. Qu'est-ce qui est correct ?", options: ["Il la passe sans contact ou l'insère lui-même et tape son propre code", "Vous lui demandez son code à voix haute", "Vous gardez sa carte derrière le comptoir", "Vous notez le numéro de la carte"], answer: 0, why: "Le client manipule lui-même sa carte et son code." },
      { objective: "O2", q: "Le total est de $13.47 et le client vous donne $20. Quelle est la monnaie ?", options: ["$7.53", "$6.47", "$6.53", "$7.47"], answer: 2, why: "3 pièces de 1 cent jusqu'à $13.50, 2 pièces de 25 cents jusqu'à $14, $1 jusqu'à $15 et $5 jusqu'à $20 : $6.53." },
      { objective: "O2", q: "Avec la méthode du comptage à partir du total, vous partez :", options: ["De zéro", "Du total de la vente", "De la somme donnée par le client", "De la somme qui est dans le tiroir"], answer: 1, why: "Vous comptez à partir du total jusqu'à la somme payée." },
      { objective: "O2", q: "Pourquoi garder le billet du client posé sur le tiroir jusqu'à ce que la monnaie soit comptée ?", options: ["Pour que vous puissiez tous les deux voir avec quoi il a payé en cas de question", "Pour qu'il ne soit pas mouillé", "Pour que le client suivant puisse l'utiliser", "Parce que le tiroir est plein"], answer: 0, why: "Cela règle toute question du type « Je vous ai donné cinquante »." },
      { objective: "O3", q: "Quel est l'âge minimum fédéral pour acheter du tabac ou des cigarettes électroniques ?", options: ["16", "18", "19", "21"], answer: 3, why: "La loi Tobacco 21 a porté l'âge fédéral à 21 ans en décembre 2019." },
      { objective: "O3", q: "La FDA demande de vérifier une pièce d'identité avec photo pour les acheteurs de tabac qui semblent avoir moins de :", options: ["18 ans", "21 ans", "30 ans", "40 ans"], answer: 2, why: "La règle de la FDA est de vérifier une pièce d'identité avec photo pour toute personne de moins de 30 ans." },
      { objective: "O3", q: "Quelle vérification pouvez-vous faire sur un billet de $100 ?", options: ["L'incliner et voir le 100 du coin passer du cuivre au vert", "Le sentir", "Le plier en deux", "Vérifier sa date d'impression"], answer: 0, why: "L'encre qui change de couleur est l'un des éléments de sécurité du billet de $100." },
      { objective: "O3", q: "Qui fixe l'âge minimum pour VENDRE de l'alcool comme caissier ?", options: ["Le client", "Chaque État, plus les règles de votre magasin", "La FTC", "Le caissier"], answer: 1, why: "L'âge pour vendre est fixé par la loi de chaque État, et les magasins ajoutent souvent leurs propres règles." },
      { objective: "O4", q: "Quelle question vous en dira le plus sur ce dont un client a besoin ?", options: ["« Je peux vous aider ? »", "« Ce sera tout ? »", "« Vous allez l'utiliser pour quoi ? »", "« Espèces ou carte ? »"], answer: 2, why: "Une question ouverte obtient plus qu'un oui ou un non." },
      { objective: "O4", q: "Qu'est-ce que la vente additionnelle ?", options: ["Dire aux clients ce qu'ils doivent acheter", "Vendre des articles qui ne sont pas en rayon", "Augmenter les prix", "Proposer un article lié qui aide le client"], answer: 3, why: "C'est un article utile en plus, pas de la pression." },
      { objective: "O4", q: "Vous ne savez pas si un radiateur peut être utilisé sans danger dans une salle de bain. Que dites-vous ?", options: ["« Je vais me renseigner pour vous »", "« Oui, pas de problème »", "« Je ne sais pas » et vous partez", "« Personne ne sait »"], answer: 0, why: "N'inventez jamais d'informations sur un produit ; renseignez-vous auprès d'un collègue ou sur l'étiquette." },
      { objective: "O5", q: "Un retour sort de la politique du magasin. Que faites-vous ?", options: ["Rembourser quand même", "Appeler un responsable", "Dire au client de partir", "Donner un avoir de vous-même"], answer: 1, why: "Les retours hors politique vont au responsable." },
      { objective: "O5", q: "Quelles sont les quatre étapes avec un client mécontent ?", options: ["Discuter, expliquer, refuser, partir", "Ignorer, attendre, sourire, fermer", "Écouter, s'excuser, régler ou faire venir un responsable, remercier", "Appeler le 911, fermer le magasin, attendre, rouvrir"], answer: 2, why: "Ces quatre étapes calment la plupart des clients mécontents." },
      { objective: "O5", q: "Vous voyez un voleur à l'étalage partir. Quel est le choix sûr ?", options: ["Lui courir après", "Bloquer la porte", "Attraper le sac", "Prévenir un responsable ou la sécurité"], answer: 3, why: "Ne poursuivez ni n'attrapez jamais ; la sécurité passe en premier." },
      { objective: "O5", q: "Pendant un vol à main armée, qu'est-ce qui compte le plus ?", options: ["Votre sécurité et celle des autres", "Garder l'argent", "Obtenir le nom du voleur", "Terminer la vente"], answer: 0, why: "Suivez votre formation et ne résistez pas ; l'argent se remplace." },
      { objective: "O6", q: "Qu'est-ce qui fait partie de vos étapes de fermeture ?", options: ["Prêter votre tiroir à un collègue", "Laisser le tiroir pour le matin", "Compter votre tiroir avec un responsable et déclarer honnêtement l'écart de caisse", "Rapporter chez vous l'argent en trop"], answer: 2, why: "Compter et déclarer honnêtement clôture correctement votre poste." },
      { objective: "O6", q: "Lequel est un vrai programme de certification du commerce ?", options: ["Le permis de commerce de la FTC", "RISE Up de la NRF Foundation", "La carte de caissier de l'OSHA", "Le badge de vente du Secret Service"], answer: 1, why: "RISE Up est le programme de formation et de certification au commerce de la NRF Foundation." },
      { objective: "O6", q: "Un « recruteur » dit que vous devez payer $50 pour obtenir un emploi de caissier. Que faites-vous ?", options: ["Payer vite", "Payer la moitié maintenant", "Lui donner vos coordonnées bancaires", "Ne pas payer ; postuler sur la page carrières du magasin lui-même"], answer: 3, why: "Les vrais employeurs ne vous demandent jamais de payer pour obtenir un emploi." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 6, 8, 10, 13, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Script de passage en caisse", objective: "O1", notYet: "Des étapes manquent ou sont dans le désordre (par exemple, les bons de réduction après le total).", meets: "Bonjour, scan, bons de réduction, total, paiement, monnaie et ticket, merci, dans l'ordre.", exceeds: "Indique aussi quoi faire quand un article passe deux fois ou que le prix ne correspond pas." },
      { name: "Monnaie exacte", objective: "O2", notYet: "Moins de 5 ventes d'entraînement, ou une monnaie fausse.", meets: "5 ventes d'entraînement sur 5 avec la monnaie exacte, rendue en comptant à partir du total.", exceeds: "Inclut au moins une vente avec pièces et billets, et le comptage à voix haute écrit en entier." },
      { name: "Vérification des pièces d'identité et des gros billets", objective: "O3", notYet: "Aucune étape pour la pièce d'identité, ou la règle d'âge est fausse.", meets: "Vérifie la photo, la date d'expiration et la date de naissance, et incline, regarde à la lumière et touche les gros billets ; appelle un responsable en cas de doute.", exceeds: "Liste aussi les signes d'arnaque aux cartes cadeaux et l'étape prévue par le magasin." },
      { name: "Suggestion utile", objective: "O4", notYet: "Aucune suggestion, ou une suggestion insistante.", meets: "Une phrase de suggestion avec un avantage et une façon polie d'accepter un refus.", exceeds: "Commence par une question ouverte qui mène à la suggestion." },
      { name: "Quand appeler un responsable", objective: "O5", notYet: "Moins de trois situations, ou dit de poursuivre un voleur à l'étalage.", meets: "Trois situations claires (par exemple, un retour hors politique, un billet qui échoue à la vérification, une pièce d'identité douteuse) et la sécurité d'abord.", exceeds: "Ajoute quoi dire au client en attendant le responsable." },
      { name: "Étapes du poste et prochaine étape", objective: "O6", notYet: "Étapes d'ouverture ou de fermeture manquantes, ou pas de prochaine étape datée.", meets: "Étapes d'ouverture, de tenue et de fermeture dans l'ordre, plus une étape datée vers une certification ou un emploi.", exceeds: "Nomme un magasin ou un programme précis et une deuxième étape datée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui postulent à un emploi de vendeur ou de caissier dans les 30 jours (enquête de suivi)",
      "Apprenants embauchés dans le commerce qui sont toujours en poste après 90 jours",
      "Apprenants qui s'inscrivent à une certification RISE Up de la NRF Foundation ou qui l'obtiennent",
      "Magasins ou programmes d'emploi partenaires qui signalent moins d'écarts de caisse et une formation plus rapide des nouvelles recrues issues du cours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour lire les leçons",
      "Des pièces et de la fausse monnaie (ou des bouts de papier avec des montants) pour s'entraîner à rendre la monnaie",
      "Quelques objets de la maison et des étiquettes de prix en papier pour les ventes d'entraînement",
      "Du papier et un stylo, ou une note sur le téléphone, pour la Fiche de poste de caissier",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "En groupe, installez une fausse caisse sur une table et faites tourner les rôles de caissier, de client et de responsable.",
      "Quand les apprenants rendent la monnaie sans erreur, transformez l'exercice en jeu chronométré ; la justesse d'abord, la vitesse ensuite.",
      "Utilisez uniquement de la fausse monnaie et des pièces d'identité inventées ; ne demandez jamais aux apprenants de montrer leur propre pièce d'identité ou les données de leur carte.",
      "Vérifiez l'âge pour vendre de l'alcool et du tabac dans votre État et dites aux jeunes apprenants ce qui s'applique à eux.",
      "Évaluez la Fiche de poste de caissier avec la grille et demandez aux apprenants de l'apporter à des entretiens d'entraînement.",
      "Les programmes partenaires de formation RISE Up peuvent relier ce cours à la certification ; consultez nrffoundation.org."
    ]
  }
};
