"use strict";

// Koach Learn course (French translation of shared/bookkeeping-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "bookkeeping-basics-fr",
  lang: "fr",
  translationOf: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Les bases de la tenue des comptes",
  skills: "Enregistrer les recettes et les dépenses, Garder les reçus, Séparer l'argent de l'entreprise et l'argent personnel, Créer un journal dans un tableur, Comparer vos comptes avec la banque, Lire un compte de résultat",
  outcome: "tenir un journal simple dans un tableur avec les recettes et les dépenses de votre activité, avec des reçus pour les justifier, le comparer avec votre relevé bancaire ou de mobile money, et lire un compte de résultat d'un mois pour voir si vous avez gagné de l'argent.",
  about: [
    "Ce cours s'adresse à toute personne qui gère une activité où de l'argent entre et sort : une coiffeuse, un stand de nourriture, une entreprise de nettoyage, une église ou une association pour les jeunes, un agriculteur qui vend des œufs ou des légumes, ou quelqu'un qui a une petite activité en ligne.",
    "Vous apprendrez à noter chaque vente et chaque dépense, à garder les reçus qui les prouvent, à séparer l'argent de l'activité de votre argent personnel, à créer un journal simple dans un tableur gratuit, à le vérifier chaque mois et à lire un compte de résultat de base.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" que vous faites avec vos propres chiffres ou avec un exemple. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. La tenue des comptes, c'est l'enregistrement. Pour les impôts et les questions juridiques, parlez à un comptable ou à un professionnel de la fiscalité."
  ],
  finalTask: "Créez un journal dans un tableur et saisissez un mois d'opérations réelles ou d'exemple de votre activité (au moins 10), chacune avec une date, une description, une catégorie, un montant et un numéro de reçu. Comparez le journal avec votre relevé bancaire ou de mobile money, puis faites un compte de résultat d'un mois qui montre le total des recettes, les dépenses par catégorie et le bénéfice ou la perte.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui gèrent une activité où de l'argent entre et sort : propriétaires de petites entreprises, vendeurs au marché, agriculteurs qui vendent leurs produits, petites activités en ligne, et trésoriers d'églises ou de petites associations. Beaucoup gardent les comptes dans leur tête, dans une caisse ou sur un seul compte personnel.",
    startingPoint: "Ils savent manier les espèces, le mobile money ou un compte bancaire, et ouvrir un téléphone ou un ordinateur. Peu tiennent des registres écrits, et beaucoup n'ont jamais utilisé de formule dans un tableur.",
    gap: "Sans registres, ils ne peuvent pas savoir si l'activité gagne de l'argent, quels produits rapportent, ni quoi montrer à un prêteur, à un donateur ou à l'administration fiscale. Un journal simple avec des reçus, une vérification mensuelle avec le relevé et un compte de résultat d'un mois comblent ce manque.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; des chiffres simples",
      "Appareils : un téléphone ou un ordinateur partagé avec un tableur gratuit (Google Sheets ou Excel)",
      "Temps : environ 5 minutes par leçon, avec un exercice sur ses propres chiffres ou sur un exemple",
      "Vie privée : aucun numéro de compte bancaire ni donnée personnelle de client collé dans des outils d'IA",
      "Les règles fiscales changent d'un pays à l'autre ; le cours apprend à tenir des registres et renvoie les questions d'impôts à un comptable"
    ],
    prerequisites: "Aucun. Les débutants en tableur peuvent d'abord suivre « Excel et les tableurs »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste d'argent qui entre et qui sort d'une activité ou d'une association", action: "identifier quels éléments sont des recettes et lesquels sont des dépenses", standard: "en trouvant au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "À partir d'une semaine de ventes et d'achats", action: "garder un reçu, une facture ou une feuille de ventes du jour numérotés comme preuve de chaque opération", standard: "pour que chaque ligne du journal ait un numéro de reçu que vous pouvez retrouver" },
    { id: "O3", condition: "Avec un compte, une caisse de mobile money ou un portefeuille séparé pour l'activité", action: "séparer l'argent de l'activité de l'argent personnel et noter ce que vous vous versez comme prélèvement de l'exploitant", standard: "sans aucune dépense personnelle mélangée aux registres de l'activité" },
    { id: "O4", condition: "Avec un tableur gratuit comme Google Sheets ou Excel", action: "créer un journal avec sept colonnes, des catégories fixes et une formule de solde", standard: "pour que le solde se mette à jour correctement après chaque ligne" },
    { id: "O5", condition: "À partir de votre journal et du relevé bancaire ou de mobile money d'un mois", action: "faire le rapprochement entre le journal et le relevé et corriger les différences", standard: "jusqu'à ce que les soldes correspondent, en tenant compte des espèces et des paiements pas encore passés" },
    { id: "O6", condition: "À partir d'un mois d'opérations dans le journal", action: "faire un compte de résultat avec SUMIF et expliquer ce qu'il montre", standard: "avec des totaux justes et deux phrases vraies sur le résultat" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Tenir de bons registres",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est la tenue des comptes et pourquoi elle compte",
          minutes: 4,
          goal: "Expliquer ce que la tenue des comptes enregistre et nommer les deux types d'argent qu'elle suit.",
          text: [
            "Tenir ses comptes, c'est noter chaque fois que de l'argent entre dans votre activité ou en sort, au même endroit et dans l'ordre. Ce ne sont pas des mathématiques difficiles. C'est une habitude.",
            "L'argent qui entre, ce sont les recettes : les ventes, les paiements des clients, les frais facturés et, pour une association, les dons et les subventions. L'argent qui sort, ce sont les dépenses : fournitures, loyer, carburant, semences, téléphone, publicité, salaires.",
            "L'IRS (l'administration fiscale des États-Unis) dit que de bons registres vous aident à suivre les progrès de votre activité et à préparer vos déclarations d'impôts. Ils montrent aussi quelles dépenses vous pouvez déduire. Des registres bien tenus vous aident à obtenir un prêt, à demander une subvention, à répondre à une question du service des impôts et à voir quels produits ou services rapportent vraiment de l'argent.",
            "Exemple : une femme vend des pâtisseries sur un marché le week-end. Elle pense que tout va bien parce que la caisse est pleine. Quand elle note la farine, le beurre, les boîtes et le droit de place du marché, elle découvre que les cupcakes rapportent de l'argent, mais que le pain couvre à peine son coût. Maintenant, elle peut décider quoi faire cuire."
          ],
          words: [["Tenue des comptes", "garder une trace écrite de tout l'argent qui entre dans une activité et qui en sort."], ["Recette", "argent qui entre : ventes, frais facturés, dons, subventions."], ["Dépense", "argent utilisé pour faire tourner l'activité, comme les fournitures, le loyer et le carburant."], ["Déduire", "retirer une dépense professionnelle autorisée quand on calcule l'impôt à payer."]],
          slides: [
            { title: "Tenir ses comptes est une habitude", bullets: ["Notez tout l'argent qui entre et qui sort", "Au même endroit, dans l'ordre", "Pas de mathématiques difficiles"] },
            { title: "Deux types d'argent", bullets: ["Recettes : ventes, frais facturés, dons, subventions", "Dépenses : fournitures, loyer, carburant, semences, salaires"] },
            { title: "Pourquoi c'est important", bullets: ["Voir comment l'activité va vraiment", "Préparer les impôts et justifier les déductions", "Obtenir des prêts et des subventions ; répondre aux questions"] }
          ],
          sources: [{ name: "IRS : La tenue des registres pour les petites entreprises (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Pensez à votre activité, ou à une activité que vous aimeriez lancer. Écrivez cinq types de recettes (argent qui entre) et huit types de dépenses (argent qui sort) qu'elle aurait.",
          youCanNow: "dire ce qu'est la tenue des comptes, classer l'argent en recettes et en dépenses, et expliquer pourquoi les registres sont importants.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que la tenue des comptes ?", options: ["Noter chaque fois que de l'argent entre ou sort, au même endroit et dans l'ordre", "Faire des calculs difficiles une fois par an", "Remplir sa déclaration d'impôts", "Compter la caisse le soir"], answer: 0, why: "La leçon dit que tenir ses comptes, c'est l'habitude de noter, dans l'ordre, tout l'argent qui entre et qui sort." },
            { objective: "O1", q: "Une boulangère pense que tout va bien parce que sa caisse est pleine. Qu'est-ce qui lui montrerait quels produits rapportent vraiment ?", options: ["Recompter la caisse", "Demander aux clients ce qu'ils aiment", "Noter ses coûts, comme la farine, les boîtes et la place au marché, à côté de ses ventes", "Augmenter tous les prix"], answer: 2, why: "En notant les coûts à côté des ventes, elle a vu que les petits gâteaux rapportaient alors que le pain couvrait à peine son coût." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Garder les reçus et les autres justificatifs",
          minutes: 5,
          goal: "Mettre en place un système simple pour garder chaque reçu et chaque facture.",
          text: [
            "Chaque ligne de vos comptes doit avoir une preuve derrière elle. L'IRS les appelle des pièces justificatives. Pour les ventes, ce sont les carnets de reçus, les factures, les tickets de caisse et les bordereaux de dépôt. Pour les achats et les dépenses, ce sont les reçus, les factures, les relevés de carte et les traces de paiements électroniques.",
            "Les reçus en papier s'effacent et se perdent. Un système simple : prenez une photo de chaque reçu le jour même, donnez-lui un numéro et enregistrez-la dans un dossier pour ce mois, par exemple 2026-10. Gardez le papier dans une enveloppe marquée du même mois. Écrivez le numéro du reçu dans votre journal, pour pouvoir retrouver la preuve de n'importe quelle ligne.",
            "Combien de temps garder les registres : l'IRS dit de les garder aussi longtemps que vous pourriez avoir besoin de prouver les recettes ou les déductions d'une déclaration d'impôts. Pour beaucoup de déclarations aux États-Unis, c'est 3 ans, mais certains cas sont plus longs, comme au moins 4 ans pour les registres des impôts sur les salaires. Consultez la page de l'IRS pour votre cas. Hors des États-Unis, renseignez-vous auprès de l'administration fiscale de votre pays, comme la Kenya Revenue Authority, ou demandez à un comptable.",
            "Pour les ventes en espèces sans reçu, comme des œufs vendus à la ferme, tenez une simple feuille de ventes du jour : la date, ce que vous avez vendu, combien, et le total. Cette feuille est votre preuve."
          ],
          steps: ["Créez un dossier par mois sur votre téléphone ou votre ordinateur, et une enveloppe par mois pour le papier.", "Photographiez chaque reçu le jour même.", "Donnez un numéro à chaque reçu et écrivez-le sur le papier.", "Notez les ventes en espèces sur une feuille de ventes du jour.", "Gardez les registres aussi longtemps que le demande votre administration fiscale, ou demandez à un comptable."],
          words: [["Reçu", "une preuve en papier ou électronique que vous avez payé ou été payé."], ["Facture", "un document que vous envoyez à un client, ou que vous recevez d'un fournisseur, qui indique ce qui a été vendu et le prix."], ["Pièce justificative", "la preuve derrière une ligne de vos comptes, comme un reçu, une facture ou un relevé."]],
          slides: [
            { title: "Chaque ligne a besoin d'une preuve", bullets: ["Ventes : factures, carnets de reçus, bordereaux de dépôt", "Dépenses : reçus, factures, relevés de carte"] },
            { title: "Un système simple pour les reçus", bullets: ["Photographiez-le le jour même", "Numérotez-le et classez-le par mois", "Écrivez le numéro dans votre journal"] },
            { title: "Ventes en espèces sans reçu", bullets: ["Tenez une feuille de ventes du jour", "Date, article, combien, total"] },
            { title: "Combien de temps garder les registres", bullets: ["États-Unis : souvent 3 ans, parfois plus", "Registres des impôts sur les salaires : au moins 4 ans", "Consultez irs.gov, votre administration fiscale ou un comptable"] }
          ],
          sources: [
            { name: "IRS : Quels registres dois-je garder (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS : Combien de temps dois-je garder mes registres ? (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Créez le dossier de reçus de ce mois sur votre téléphone ou votre ordinateur. Photographiez trois reçus que vous avez (de l'activité, ou de la vie courante pour vous entraîner), numérotez-les 1, 2 et 3, et enregistrez-les dans le dossier.",
          youCanNow: "garder, numéroter et classer les reçus pour que chaque ligne de vos comptes ait une preuve.",
          quickCheck: [
            { objective: "O2", q: "Comment l'IRS appelle-t-il les reçus, les factures et les preuves de dépôt ?", options: ["Des déclarations d'impôts", "Des pièces justificatives", "Des journaux", "Des comptes de résultat"], answer: 1, why: "L'IRS appelle pièces justificatives les papiers qui prouvent chaque ligne." },
            { objective: "O2", q: "Vous venez de payer des fournitures et vous avez un reçu en papier. Que faites-vous le jour même ?", options: ["Le mettre dans votre poche pour plus tard", "Le jeter une fois que vous avez retenu le montant", "Écrire le montant sur votre main", "Le photographier, le numéroter et l'enregistrer dans le dossier du mois"], answer: 3, why: "Photographier et numéroter un reçu le jour même l'empêche de s'effacer ou de se perdre." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Séparer l'argent de l'activité et l'argent personnel",
          minutes: 5,
          goal: "Avoir un endroit à part pour l'argent de l'activité et vous payer de façon planifiée.",
          text: [
            "Quand l'argent de l'activité et l'argent personnel sont mélangés sur un seul compte ou dans un seul portefeuille, vous ne pouvez pas savoir si l'activité gagne de l'argent. Un repas d'affaires, les courses de la famille et une commande de fournitures se ressemblent tous.",
            "Ouvrez un compte à part pour l'activité : un compte professionnel dans une banque ou une coopérative d'épargne et de crédit, ou un compte de mobile money séparé utilisé seulement pour l'activité. Mettez-y chaque vente. Payez chaque dépense de l'activité depuis ce compte.",
            "Quand vous avez besoin d'argent pour vous, transférez un montant fixe du compte de l'activité vers votre compte personnel, et notez-le comme prélèvement de l'exploitant ou rémunération du propriétaire. Ce n'est pas une dépense de l'activité ; c'est vous qui prenez une part du bénéfice. Si un jour vous payez une dépense de l'activité avec votre argent personnel, notez-la dans le journal et gardez le reçu.",
            "Les associations ont une étape de plus : si un donateur donne de l'argent pour un but précis, comme un programme sportif pour les jeunes, suivez-le pour qu'il soit dépensé pour ce but. Pour commencer, une simple colonne ou catégorie suffit."
          ],
          steps: ["Ouvrez un compte, un compte de mobile money ou un portefeuille à part pour l'activité.", "Mettez-y toutes les ventes et tous les dons.", "Payez depuis ce compte toutes les dépenses de l'activité.", "Payez-vous en transférant un montant fixe, et notez-le comme prélèvement de l'exploitant.", "Si vous utilisez votre argent personnel pour l'activité, notez-le et gardez le reçu."],
          words: [["Prélèvement de l'exploitant", "argent que le propriétaire retire de l'activité pour son usage personnel. Ce n'est pas une dépense de l'activité."], ["Confusion des fonds", "le fait de mélanger l'argent de l'activité et l'argent personnel sur le même compte."], ["Don affecté", "un don que le donateur demande d'utiliser pour un but précis."]],
          slides: [
            { title: "L'argent mélangé cache la vérité", bullets: ["Impossible de savoir si l'activité gagne de l'argent", "Dépenses personnelles et professionnelles se ressemblent"] },
            { title: "Donnez à l'activité son propre argent", bullets: ["Compte à part : banque, coopérative ou mobile money", "Toutes les ventes y entrent, toutes les dépenses en sortent"] },
            { title: "Payez-vous de façon planifiée", bullets: ["Transférez un montant fixe sur votre compte personnel", "Notez-le comme prélèvement de l'exploitant, pas comme dépense"] },
            { title: "Associations", bullets: ["Suivez les dons faits pour un but précis", "Dépensez-les pour ce but"] }
          ],
          sources: [{ name: "IRS : La tenue des registres pour les petites entreprises (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Regardez les 10 derniers paiements du compte ou du portefeuille que vous utilisez pour votre activité (ou du vôtre, pour vous entraîner). Marquez chacun A pour activité ou P pour personnel. Écrivez comment vous allez les séparer à partir de maintenant.",
          youCanNow: "garder l'argent de l'activité séparé de votre argent personnel et vous payer d'une façon que vous pouvez suivre.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un prélèvement de l'exploitant ?", options: ["Une dépense de l'activité", "Un prêt de la banque", "De l'argent que vous transférez de l'activité vers vous, pris sur le bénéfice", "Un don à l'activité"], answer: 2, why: "Un prélèvement de l'exploitant, c'est vous qui prenez une part du bénéfice ; ce n'est pas une dépense de l'activité." },
            { objective: "O1", q: "Vous gérez votre activité avec votre compte personnel et vous ne savez pas si elle gagne de l'argent. Quelle est la première chose à faire ?", options: ["Ouvrir un compte ou une caisse de mobile money séparé, seulement pour l'activité", "Dépenser moins pour les courses", "Arrêter de garder les reçus", "Utiliser seulement des espèces"], answer: 0, why: "Un compte séparé garde l'argent de l'activité à part, pour voir ce qu'elle gagne et ce qu'elle dépense." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Tenir de bons registres",
        questions: [
          { objective: "O1", q: "Laquelle de ces choses est une dépense pour une petite ferme ?", options: ["L'argent de la vente de tomates", "Une subvention d'un donateur", "Le paiement d'un client", "Les semences et l'engrais"], answer: 3, why: "Les dépenses sont les coûts pour faire tourner l'activité, comme les semences et l'engrais." },
          { objective: "O1", q: "Selon l'IRS, de bons registres vous aident à :", options: ["Ne jamais payer d'impôts", "Suivre les progrès de votre activité et préparer vos déclarations d'impôts", "Ne pas faire de reçus", "Obtenir des fournitures gratuites"], answer: 1, why: "L'IRS dit que les registres vous aident à suivre votre activité et à préparer vos déclarations." },
          { objective: "O2", q: "Vous vendez des œufs en espèces sans reçu. Quelle est votre preuve ?", options: ["Une feuille de ventes du jour avec la date, l'article, combien et le total", "Votre mémoire", "Aucune preuve n'est nécessaire", "Une photo de vos poules"], answer: 0, why: "Une feuille de ventes du jour écrite enregistre les ventes en espèces." },
          { objective: "O2", q: "Pourquoi écrire le numéro du reçu dans votre journal ?", options: ["Le journal a l'air plus long", "La banque l'exige", "Pour retrouver la preuve de n'importe quelle ligne", "Cela change le total"], answer: 2, why: "La numérotation relie chaque ligne à sa preuve." },
          { objective: "O3", q: "Vous transférez de l'argent du compte de l'activité vers votre compte personnel pour vous payer. Comment le notez-vous ?", options: ["Comme une dépense de l'activité", "Comme un prélèvement de l'exploitant", "Comme une vente", "Vous ne le notez pas"], answer: 1, why: "L'argent que retire le propriétaire est un prélèvement de l'exploitant, pas une dépense de l'activité." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Votre journal et votre bénéfice",
      lessons: [
        {
          objectives: ["O4"],
          title: "Créer un journal simple dans un tableur",
          minutes: 6,
          goal: "Créer un journal dans un tableur gratuit avec les bonnes colonnes et un solde qui se met à jour.",
          text: [
            "Un journal est une liste de tout l'argent qui entre et qui sort, une ligne par opération. Un tableur gratuit comme Google Sheets ou Microsoft Excel convient très bien, et il fait les additions pour vous.",
            "Utilisez sept colonnes : Date, Description, Catégorie, Entrées, Sorties, Solde, Numéro de reçu. Mettez votre solde de départ sur la première ligne. Dans la cellule Solde de la ligne suivante, tapez une formule qui prend le solde du dessus, ajoute les entrées et retire les sorties. Par exemple, si Solde est la colonne F, Entrées la colonne D et Sorties la colonne E, la ligne 3 serait =F2+D3-E3. Recopiez cette formule vers le bas.",
            "Choisissez une courte liste de catégories et utilisez toujours les mêmes mots, par exemple : Ventes, Dons, Fournitures, Loyer, Carburant, Téléphone, Publicité, Salaires, Prélèvement de l'exploitant. Les mêmes mots permettent d'additionner facilement chaque catégorie plus tard.",
            "Un assistant d'IA peut vous aider à préparer la feuille : demandez-lui d'expliquer une formule ou de proposer des catégories pour votre type d'activité. Ne collez pas de numéros de compte bancaire ni de données personnelles de clients."
          ],
          steps: ["Ouvrez un nouveau tableur vide, nommez-le, par exemple \"Journal 2026\", et nommez le premier onglet Journal.", "Tapez les titres des colonnes : Date, Description, Catégorie, Entrées, Sorties, Solde, N° de reçu.", "Mettez votre solde de départ dans la colonne Solde de la ligne 2.", "Dans la ligne 3 de Solde, tapez =F2+D3-E3 et recopiez-la vers le bas.", "Écrivez votre liste de catégories dans un coin ou dans un deuxième onglet, et n'utilisez que ces mots."],
          words: [["Journal", "une liste de tout l'argent qui entre et qui sort, une ligne par opération."], ["Opération", "chaque mouvement d'argent : une vente, un paiement, un achat."], ["Formule", "un calcul dans une cellule du tableur qui commence par =."], ["Catégorie", "une étiquette qui regroupe l'argent du même type, comme Carburant ou Fournitures."]],
          slides: [
            { title: "Un journal : une ligne par opération", bullets: ["Tout l'argent qui entre et qui sort", "Un tableur gratuit fait les additions"] },
            { title: "Sept colonnes", bullets: ["Date, Description, Catégorie", "Entrées, Sorties", "Solde, N° de reçu"] },
            { title: "Un solde qui se met à jour", bullets: ["Commencez par votre solde de départ", "Ligne suivante : =F2+D3-E3", "Recopiez la formule vers le bas"] },
            { title: "Toujours les mêmes catégories", bullets: ["Ventes, Dons, Fournitures, Loyer, Carburant", "Téléphone, Publicité, Salaires, Prélèvement de l'exploitant"] }
          ],
          tryIt: "Créez le journal maintenant dans Google Sheets ou Excel avec les sept colonnes, un solde de départ et la formule du solde. Saisissez trois opérations de cette semaine, réelles ou d'exemple, et vérifiez que le solde change correctement.",
          youCanNow: "créer un journal dans un tableur avec des catégories et un solde qui se met à jour.",
          quickCheck: [
            { objective: "O4", q: "Dans un journal, que contient chaque ligne ?", options: ["Un mois entier", "Une opération", "Le nom et l'adresse d'un client", "Le total d'une catégorie"], answer: 1, why: "Un journal liste chaque entrée et chaque sortie d'argent, une ligne par opération." },
            { objective: "O4", q: "Vous avez écrit « fournitures » une semaine et « matériel » la semaine suivante pour les mêmes coûts. Que devez-vous faire ?", options: ["Garder les deux mots", "Supprimer ces lignes", "Les remplacer par un seul mot de catégorie et n'utiliser que ce mot à partir de maintenant", "Ajouter une nouvelle colonne pour chaque mot"], answer: 2, why: "Utiliser toujours les mêmes mots de catégorie permet d'additionner facilement chaque catégorie plus tard." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Noter chaque semaine et comparer avec la banque",
          minutes: 5,
          goal: "Tenir le journal à jour et le comparer avec votre relevé bancaire ou de mobile money.",
          text: [
            "La tenue des comptes marche mieux comme une petite habitude chaque semaine, par exemple 20 minutes tous les lundis matin. Rassemblez les reçus, les feuilles de ventes et les factures de la semaine, et saisissez chacun comme une ligne du journal, avec sa catégorie et son numéro de reçu.",
            "Une fois par mois, comparez votre journal avec le relevé de votre banque, de votre coopérative ou de votre mobile money. C'est ce qu'on appelle le rapprochement. Cochez chaque ligne du relevé qui correspond à une ligne de votre journal. Tout ce qui est sur le relevé mais pas dans votre journal, comme des frais bancaires ou le paiement d'un client que vous avez oublié, doit être ajouté. Ce qui est dans votre journal mais pas sur le relevé peut être de l'argent liquide, ou une erreur à corriger.",
            "À la fin, le solde de votre journal doit correspondre au solde du relevé, une fois pris en compte l'argent liquide que vous avez et les paiements pas encore passés. Si ce n'est pas le cas, cherchez une ligne manquante, un montant saisi deux fois ou des chiffres inversés, comme 54 saisi 45.",
            "Exemple : le journal d'une association de football pour les jeunes affiche 15 dollars de moins que la banque. La trésorière trouve un don de 15 dollars arrivé par une application sur téléphone et jamais noté, elle l'ajoute, et maintenant les deux correspondent."
          ],
          steps: ["Choisissez un moment fixe chaque semaine pour mettre le journal à jour.", "Saisissez chaque reçu, feuille de ventes et facture avec une catégorie et un numéro de reçu.", "Une fois par mois, procurez-vous votre relevé bancaire ou de mobile money.", "Cochez chaque ligne du relevé qui correspond au journal ; ajoutez celles qui manquent.", "Comparez les soldes. S'ils sont différents, cherchez des lignes manquantes, en double ou des chiffres inversés."],
          words: [["Rapprochement", "comparer vos registres avec le relevé bancaire ou de mobile money et corriger les différences."], ["Relevé", "la liste des opérations d'une période que vous donne votre banque ou votre opérateur de mobile money."], ["Passé", "se dit d'un paiement qui a été traité et qui apparaît sur le relevé."]],
          slides: [
            { title: "Une habitude chaque semaine", bullets: ["Environ 20 minutes, le même jour chaque semaine", "Saisissez reçus, feuilles de ventes et factures"] },
            { title: "Faites le rapprochement une fois par mois", bullets: ["Procurez-vous le relevé bancaire ou de mobile money", "Cochez chaque ligne qui correspond", "Ajoutez ce qui manque, comme les frais"] },
            { title: "Quand ça ne correspond pas", bullets: ["Une ligne manquante", "Un montant saisi deux fois", "Des chiffres inversés : 54 saisi 45"] }
          ],
          tryIt: "Téléchargez ou ouvrez le relevé du mois dernier du compte de votre activité ou de votre mobile money (ou le vôtre, pour vous entraîner). Choisissez cinq lignes du relevé et vérifiez que chacune est dans votre journal. Ajoutez celles qui manquent.",
          youCanNow: "tenir votre journal à jour chaque semaine et faire le rapprochement avec votre relevé chaque mois.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire faire le rapprochement ?", options: ["Faire un budget pour le mois prochain", "Payer toutes vos factures", "Écrire un nouveau journal", "Comparer votre journal avec votre relevé bancaire ou de mobile money"], answer: 3, why: "Faire le rapprochement, c'est cocher chaque ligne du relevé dans votre journal et corriger ce qui manque." },
            { objective: "O5", q: "Le paiement d'un client est sur votre relevé mais pas dans votre journal. Que faites-vous ?", options: ["L'ajouter au journal", "L'ignorer", "Le supprimer du relevé", "Attendre l'année prochaine"], answer: 0, why: "Tout ce qui est sur le relevé et manque dans le journal doit y être ajouté." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lire un compte de résultat de base",
          minutes: 6,
          goal: "Faire un compte de résultat d'un mois à partir de votre journal et dire ce qu'il vous apprend.",
          text: [
            "Un compte de résultat, appelé en anglais profit-and-loss ou P&L, est un court résumé pour une période, comme un mois. Il montre le total des recettes, le total des dépenses par catégorie et la différence. Recettes moins dépenses, c'est le bénéfice. Si les dépenses sont plus grandes, c'est une perte.",
            "Vous pouvez le faire à partir de votre journal. Dans un nouvel onglet, listez chaque catégorie. À côté de chacune, utilisez une formule SUMIF pour additionner cette catégorie. Par exemple, =SUMIF(Journal!C:C,\"Fournitures\",Journal!E:E) additionne chaque montant de la colonne Sorties dont la catégorie est Fournitures, si l'onglet de votre journal s'appelle Journal (la colonne C est Catégorie et la colonne E est Sorties). Additionnez les catégories de recettes, additionnez les catégories de dépenses, puis faites la soustraction. Le prélèvement de l'exploitant n'est pas une dépense, alors laissez-le en dehors des dépenses.",
            "Ensuite, lisez-le. Avez-vous fait un bénéfice ? Quelle est la plus grosse dépense ? A-t-elle augmenté depuis le mois dernier ? Pour une ferme, le mois de la récolte a-t-il couvert les mois creux ? Pour une association, les coûts du programme sont-ils restés dans les limites de la subvention ?",
            "Un compte de résultat vous dit comment va l'activité. Ce n'est pas votre déclaration d'impôts. Les règles fiscales décident de ce qui compte et à quel moment, et elles changent selon les pays. Pour les impôts, apportez votre journal, vos reçus et votre compte de résultat à un comptable ou à un professionnel de la fiscalité."
          ],
          steps: ["Ajoutez un nouvel onglet appelé P&L et listez vos catégories.", "À côté de chaque catégorie, utilisez SUMIF pour l'additionner à partir du journal.", "Faites le total des catégories de recettes et des catégories de dépenses (sans le prélèvement de l'exploitant).", "Soustrayez : recettes moins dépenses = bénéfice ou perte.", "Écrivez deux phrases sur ce que les chiffres vous apprennent."],
          words: [["Compte de résultat (P&L)", "un résumé des recettes, des dépenses et du bénéfice ou de la perte pour une période."], ["Bénéfice", "ce qui reste quand les recettes sont plus grandes que les dépenses."], ["Perte", "quand les dépenses sont plus grandes que les recettes."], ["SUMIF", "une formule de tableur qui additionne seulement les lignes qui correspondent à une étiquette."]],
          slides: [
            { title: "Le compte de résultat en une ligne", bullets: ["Recettes moins dépenses = bénéfice", "Dépenses plus grandes ? C'est une perte"] },
            { title: "Faites-le à partir de votre journal", bullets: ["Listez les catégories dans un nouvel onglet", "Utilisez SUMIF pour additionner chacune", "Laissez le prélèvement de l'exploitant hors des dépenses"] },
            { title: "Lisez-le", bullets: ["Bénéfice ou perte ?", "La plus grosse dépense ? Augmente-t-elle ?", "Les bons mois ont-ils couvert les mois creux ?"] },
            { title: "Ce n'est pas une déclaration d'impôts", bullets: ["Les règles fiscales décident de ce qui compte", "Apportez vos registres à un comptable"] }
          ],
          sources: [{ name: "IRS : La tenue des registres pour les petites entreprises (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Tâche finale : saisissez dans votre journal au moins 10 opérations réelles ou d'exemple pour un mois, avec des catégories et des numéros de reçu, et comparez-les avec un relevé. Ensuite, créez l'onglet P&L avec SUMIF, trouvez votre bénéfice ou votre perte, et écrivez deux phrases sur ce qu'il vous apprend.",
          youCanNow: "faire et lire un compte de résultat d'un mois à partir de votre propre journal.",
          quickCheck: [
            { objective: "O6", q: "Comment appelle-t-on les recettes moins les dépenses quand les recettes sont plus grandes ?", options: ["Le prélèvement de l'exploitant", "Une perte", "Le bénéfice", "Le solde"], answer: 2, why: "Les recettes moins les dépenses donnent le bénéfice ; si les dépenses sont plus grandes, c'est une perte." },
            { objective: "O6", q: "Vous faites votre compte de résultat. Où mettez-vous le prélèvement de l'exploitant ?", options: ["Dans la plus grande catégorie de dépenses", "Dans les recettes", "Dans les fournitures", "Vous le laissez en dehors des dépenses"], answer: 3, why: "Le prélèvement de l'exploitant n'est pas une dépense de l'activité, donc il reste en dehors des dépenses du compte de résultat." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Votre journal et votre bénéfice",
        questions: [
          { objective: "O4", q: "Quel ensemble de colonnes fait un bon journal simple ?", options: ["Date, Description, Catégorie, Entrées, Sorties, Solde, N° de reçu", "Nom, Anniversaire, Loisir", "Seulement Total", "Mot de passe et numéro de carte du client"], answer: 0, why: "Ces colonnes enregistrent chaque opération et la relient à sa preuve." },
          { objective: "O4", q: "Pourquoi utiliser toujours les mêmes mots pour les catégories ?", options: ["Sinon, le tableur ne s'ouvre pas", "Pour que le journal soit coloré", "Pour pouvoir additionner chaque catégorie plus tard", "Parce que la banque l'exige"], answer: 2, why: "Des mots identiques permettent à SUMIF d'additionner correctement chaque catégorie." },
          { objective: "O5", q: "Votre journal affiche 15 dollars de moins que le relevé bancaire. Que cherchez-vous d'abord ?", options: ["Une nouvelle banque", "Une nouvelle application de tableur", "Rien ; les petites différences ne comptent jamais", "Un dépôt ou un paiement qui est sur le relevé mais pas dans le journal"], answer: 3, why: "Une différence veut souvent dire une ligne manquante, en double ou mal saisie." },
          { objective: "O6", q: "Les recettes sont de 2 000, les dépenses de 1 500 et le prélèvement de l'exploitant de 300. Quel est le bénéfice ?", options: ["200", "500", "3 800", "1 500"], answer: 1, why: "Le bénéfice, c'est recettes moins dépenses : 2 000 - 1 500 = 500. Le prélèvement de l'exploitant n'est pas une dépense." },
          { objective: "O6", q: "À qui devez-vous parler de vos impôts ?", options: ["À un comptable ou à un professionnel de la fiscalité", "À un inconnu dans un commentaire en ligne", "À personne ; le compte de résultat est votre déclaration d'impôts", "À vos clients"], answer: 0, why: "Un compte de résultat n'est pas une déclaration d'impôts ; un comptable connaît les règles fiscales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la tenue des comptes",
    questions: [
      { objective: "O1", q: "Tenir ses comptes veut dire :", options: ["Lire des livres sur les affaires", "Deviner son bénéfice à la fin de l'année", "Noter tout l'argent qui entre et qui sort", "Tenir un journal intime"], answer: 2, why: "La tenue des comptes enregistre tout l'argent qui entre et qui sort." },
      { objective: "O1", q: "Pour une association, laquelle de ces choses est une recette ?", options: ["Un don", "Le loyer du bureau", "Des collations pour les bénévoles", "De l'encre pour l'imprimante"], answer: 0, why: "Les dons et les subventions sont de l'argent qui entre." },
      { objective: "O2", q: "Quel est un exemple de pièce justificative pour une dépense ?", options: ["Un SMS d'un ami", "Une carte de visite", "Votre liste de choses à faire", "Un reçu ou une facture"], answer: 3, why: "L'IRS cite les reçus, les factures et les relevés comme preuves des dépenses." },
      { objective: "O2", q: "Quel est le moyen le plus simple d'éviter que les reçus en papier s'effacent ou se perdent ?", options: ["Les garder dans votre poche", "Les photographier et les classer le jour même", "Les jeter après une semaine", "Les donner aux clients"], answer: 1, why: "Une photo le jour même, classée par mois, garde la preuve en sécurité." },
      { objective: "O2", q: "Pour beaucoup de déclarations d'impôts aux États-Unis, la règle de base de l'IRS est de garder les registres pendant :", options: ["1 semaine", "3 ans, plus dans certains cas", "1 mois", "Jamais ; les registres ne servent à rien"], answer: 1, why: "L'IRS dit 3 ans dans la plupart des cas, et plus longtemps dans certains cas." },
      { objective: "O2", q: "Les registres des impôts sur les salaires doivent être gardés au moins :", options: ["1 mois", "1 an", "4 ans", "10 jours"], answer: 2, why: "L'IRS dit au moins 4 ans après la date où l'impôt est dû ou payé." },
      { objective: "O3", q: "Pourquoi garder l'argent de l'activité sur son propre compte ou dans son propre portefeuille ?", options: ["Pour savoir si l'activité gagne de l'argent", "Parce que mélanger l'argent est amusant", "Pour ne pas garder de reçus", "Pour cacher des ventes"], answer: 0, why: "L'argent mélangé cache comment l'activité va vraiment." },
      { objective: "O3", q: "Vous avez payé des fournitures de l'activité avec votre carte personnelle. Que faites-vous ?", options: ["L'oublier", "Le noter comme une vente", "Jeter le reçu", "Le noter dans le journal et garder le reçu"], answer: 3, why: "Le noter garde vos comptes complets et la preuve en sécurité." },
      { objective: "O3", q: "Un donateur donne de l'argent seulement pour un programme sportif pour les jeunes. L'association doit :", options: ["Le dépenser pour n'importe quoi", "Le rendre tout de suite", "Ne pas le noter", "Le suivre pour qu'il soit dépensé pour ce programme"], answer: 3, why: "Les dons affectés doivent être suivis et utilisés pour leur but." },
      { objective: "O4", q: "Un journal a :", options: ["Une page par client", "Une ligne par opération", "Seulement le total de l'année", "Seulement les dépenses"], answer: 1, why: "Chaque vente, paiement ou achat a sa propre ligne." },
      { objective: "O4", q: "Dans un tableur, une formule commence par :", options: ["#", "$", "=", "?"], answer: 2, why: "Les formules d'un tableur commencent par le signe égal." },
      { objective: "O4", q: "Solde est la colonne F, Entrées la D, Sorties la E. Le solde de la ligne 3 est :", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Prenez le solde du dessus, ajoutez les entrées et retirez les sorties." },
      { objective: "O5", q: "Quelle est une bonne habitude pour tenir vos comptes à jour ?", options: ["Les mettre à jour une fois par semaine à un moment fixe", "Les mettre à jour seulement quand le service des impôts écrit", "Les mettre à jour une fois tous les quelques ans", "Ne jamais les mettre à jour"], answer: 0, why: "Une courte habitude chaque semaine garde les registres complets et faciles." },
      { objective: "O5", q: "Faire le rapprochement veut dire :", options: ["Se réconcilier avec un client", "Supprimer les vieux reçus", "Comparer votre journal avec le relevé bancaire ou de mobile money", "Ouvrir un nouveau compte"], answer: 2, why: "Le rapprochement trouve et corrige les différences entre vos comptes et le relevé." },
      { objective: "O5", q: "Des frais bancaires sont sur le relevé mais pas dans votre journal. Vous devez :", options: ["Les ignorer", "Les ajouter au journal", "Fermer le compte", "Supprimer le relevé"], answer: 1, why: "Tout ce qui est réel sur le relevé doit être dans le journal." },
      { objective: "O5", q: "Vous avez saisi 45 au lieu de 54. Ce type d'erreur, c'est :", options: ["Une ligne manquante", "Une saisie en double", "Une nouvelle catégorie", "Des chiffres inversés"], answer: 3, why: "Les chiffres inversés sont une raison courante pour laquelle les comptes ne correspondent pas." },
      { objective: "O6", q: "Un compte de résultat montre :", options: ["Seulement le solde de votre banque", "Le nom de vos clients", "Les recettes, les dépenses et la différence pour une période", "Votre score de crédit"], answer: 2, why: "Un compte de résultat résume les recettes, les dépenses et le bénéfice ou la perte." },
      { objective: "O6", q: "Quelle formule additionne tous les montants de Fournitures du journal ?", options: ["=SUM(Fournitures)", "=Fournitures+1", "=AVERAGE(C:C)", "=SUMIF(Journal!C:C,\"Fournitures\",Journal!E:E)"], answer: 3, why: "SUMIF additionne seulement les lignes dont la catégorie est Fournitures." },
      { objective: "O6", q: "Ce mois-ci, les dépenses sont plus grandes que les recettes. C'est :", options: ["Une perte", "Un bénéfice", "Un prélèvement de l'exploitant", "Un reçu"], answer: 0, why: "Quand les dépenses sont plus grandes que les recettes, le résultat est une perte." },
      { objective: "O6", q: "Votre compte de résultat est prêt. Est-ce votre déclaration d'impôts ?", options: ["Oui, envoyez-le tel quel au service des impôts", "Non ; apportez vos registres à un comptable pour les impôts", "Oui, s'il montre un bénéfice", "Seulement pour les associations"], answer: 1, why: "Les règles fiscales décident de ce qui compte ; un comptable peut préparer vos impôts." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      2,
      6,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Journal mis en place",
        objective: "O4",
        notYet: "Des colonnes manquent ou le solde ne se met pas à jour.",
        meets: "Les sept colonnes, un solde de départ et un solde juste après chaque ligne.",
        exceeds: "Il y a aussi une liste fixe de catégories dans un onglet à part, avec toujours les mêmes mots."
      },
      {
        name: "Recettes et dépenses classées",
        objective: "O1",
        notYet: "Certaines lignes sont dans la mauvaise catégorie ou n'en ont pas.",
        meets: "Au moins 10 opérations, chacune avec la bonne catégorie de recette ou de dépense.",
        exceeds: "Le prélèvement de l'exploitant et l'argent personnel utilisé pour l'activité sont notés correctement."
      },
      {
        name: "Une preuve pour chaque ligne",
        objective: "O2",
        notYet: "Certaines lignes n'ont ni numéro de reçu ni preuve.",
        meets: "Chaque ligne a un numéro de reçu qui correspond à un reçu ou à une feuille de ventes enregistrés.",
        exceeds: "Les reçus sont dans un dossier du mois et les papiers sont gardés dans une enveloppe qui correspond."
      },
      {
        name: "Comparé avec le relevé",
        objective: "O5",
        notYet: "Le journal n'a pas été comparé avec un relevé.",
        meets: "Les lignes du relevé ont été cochées, celles qui manquaient ajoutées, et les soldes correspondent ou la différence est expliquée.",
        exceeds: "Vous pouvez nommer chaque différence trouvée et dire comment elle a été corrigée."
      },
      {
        name: "Compte de résultat lu",
        objective: "O6",
        notYet: "Pas de compte de résultat, ou des totaux faux.",
        meets: "Un compte de résultat avec des totaux SUMIF, sans le prélèvement de l'exploitant, qui montre le bénéfice ou la perte.",
        exceeds: "Deux phrases claires disent ce que signifient les chiffres et une chose à changer le mois prochain."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui, au suivi à 30 jours, mettent encore leur journal à jour chaque semaine et font le rapprochement chaque mois",
      "Apprenants qui utilisent leurs registres pour demander un prêt ou une subvention, ou qui les apportent à un comptable au moment des impôts",
      "Apprenants qui commencent un autre cours d'entrepreneuriat de Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un tableur gratuit : Google Sheets ou Microsoft Excel",
      "Un mois de reçus réels ou d'exemple, et un relevé bancaire ou de mobile money (ou un exemple)",
      "L'appareil photo d'un téléphone pour photographier les reçus, et des enveloppes pour les reçus en papier",
      "Environ 60 minutes au total, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Préparez un mois d'opérations d'exemple et un relevé d'exemple pour les apprenants qui ne veulent pas utiliser leurs propres chiffres.",
      "Créez le journal et la formule du solde ensemble sur un seul écran, puis laissez les apprenants le recopier.",
      "Rappelez aux apprenants de ne pas coller de numéros de compte ni de données de clients dans des outils d'IA ou sur des écrans partagés.",
      "Ne donnez pas de conseils fiscaux ; renvoyez les questions d'impôts à un comptable ou à l'administration fiscale.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
