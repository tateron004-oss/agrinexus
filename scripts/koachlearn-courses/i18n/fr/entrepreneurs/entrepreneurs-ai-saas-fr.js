"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-saas.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-saas-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-saas",
  category: "Entrepreneurs",
  name: "Créer des produits SaaS avec l'IA",
  skills: "Choisir une niche SaaS étroite, Délimiter un produit minimum viable, Comprendre les API d'IA et leurs coûts d'utilisation, Faire un prototype sans beaucoup coder, Fixer le prix d'un abonnement, Lancer avec confiance et sécurité",
  outcome: "transformer un problème d'entreprise précis en un plan d'une page pour un petit logiciel en ligne (SaaS) avec l'IA, construire un prototype cliquable ou fonctionnel de sa fonction principale, calculer un prix d'abonnement qui couvre les coûts d'utilisation de l'IA, et préparer une liste de lancement honnête et sûre.",
  about: [
    "SaaS (de l'anglais software as a service, \"logiciel en tant que service\") désigne un logiciel que l'on utilise en ligne et que l'on paie par abonnement, par exemple chaque mois. Beaucoup de nouveaux produits SaaS placent un modèle d'IA derrière un écran simple qui fait très bien une seule chose : rédiger des annonces pour des gestionnaires immobiliers, résumer des appels pour des ateliers de réparation, traduire des menus.",
    "Ce cours s'adresse aux entrepreneurs qui veulent créer un petit produit SaaS avec l'IA, y compris ceux qui ne savent pas encore coder. Vous choisirez une niche étroite, définirez un produit minimum viable, apprendrez comment fonctionnent les API d'IA et leurs coûts d'utilisation, construirez un prototype, fixerez son prix et préparerez un lancement honnête sur ce que fait l'IA et prudent avec les données des utilisateurs.",
    "Chaque leçon dure environ cinq minutes, plus une tâche pratique. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les prix des modèles d'IA et les offres des outils changent souvent : vérifiez toujours la page des tarifs du fournisseur."
  ],
  finalTask: "Produisez un kit de démarrage SaaS avec l'IA : un plan produit d'une page (niche, utilisateur, problème, la fonction principale), un prototype de la fonction principale (une maquette cliquable, une application sans code ou un court notebook qui fonctionne), une fiche de prix qui montre le coût d'utilisation de l'IA par utilisateur et par mois et votre prix, et une liste de lancement qui couvre les affirmations honnêtes, la confidentialité, les conditions, la vérification humaine et la façon dont les utilisateurs peuvent vous joindre.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des entrepreneurs qui veulent créer un petit produit logiciel IA vendu par abonnement (SaaS) pour une niche qu'ils connaissent, y compris des personnes qui ne savent pas encore programmer.",
    startingPoint: "Ils utilisent bien les assistants IA de conversation et connaissent un domaine ou un secteur. La plupart n'ont jamais délimité un produit logiciel, utilisé une API d'IA, estimé des coûts d'utilisation ou préparé un lancement avec une politique de confidentialité et des conditions d'utilisation.",
    gap: "Beaucoup de produits d'IA veulent trop en faire, coûtent plus en utilisation de l'IA qu'ils ne rapportent, laissent fuir des clés d'API ou des données d'utilisateurs, ou promettent plus que ce que l'IA peut faire. Les apprenants doivent délimiter une fonction principale, prouver qu'elle marche, fixer un prix qui couvre l'utilisation et lancer de façon honnête et sûre.",
    constraints: [
      "Des mots simples ; programmer est facultatif, et les prototypes sans code ou sous forme de maquette comptent",
      "Appareils : un ordinateur avec un tableur, un assistant IA gratuit et, si vous le souhaitez, un notebook gratuit ou un outil sans code",
      "Temps : environ cinq minutes par leçon, plus des tâches pratiques",
      "Les prix des modèles d'IA et les offres des outils changent souvent ; vérifiez la page des tarifs du fournisseur",
      "Seulement des entrées de test anonymisées ; politique de confidentialité et conditions relues par un avocat ; taxe sur les ventes vérifiée auprès de l'État ou d'un comptable"
    ],
    prerequisites: "« Créer des produits et services avec l'IA » est recommandé, ainsi qu'être à l'aise avec les tableurs."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un domaine que vous connaissez", action: "choisir un utilisateur précis et une tâche répétée pour un produit SaaS avec l'IA", standard: "écrits comme une idée en une phrase et vérifiés auprès d'au moins une personne de la niche" },
    { id: "O2", condition: "À partir de l'idée de votre produit", action: "écrire le parcours principal en une ligne, une liste « pas encore » et trois règles « jamais » pour la première version", standard: "avec une fonction principale qui tient sur un seul écran" },
    { id: "O3", condition: "Avec le prix actuel de la page des tarifs de votre fournisseur", action: "expliquer comment votre application utilise un modèle d'IA par une API et estimer le coût de l'IA par utilisateur et par mois", standard: "avec chaque formule vérifiée et la clé d'API gardée privée" },
    { id: "O4", condition: "À partir de dix vraies entrées anonymisées", action: "tester votre prompt, noter les résultats et construire un prototype de la fonction principale", standard: "en améliorant le prompt jusqu'à ce que la plupart des résultats soient bons et en le montrant à au moins un utilisateur de la niche" },
    { id: "O5", condition: "À partir de la valeur et du coût par utilisateur", action: "créer une grille de prix avec deux formules, des limites d'utilisation et le bénéfice par utilisateur", standard: "pour que chaque formule couvre l'utilisation de l'IA et les autres coûts avec une marge de bénéfice" },
    { id: "O6", condition: "Avant d'accepter un paiement", action: "préparer une liste de lancement pour les affirmations honnêtes, les données, les conditions du fournisseur, la politique de confidentialité et les conditions d'utilisation, et un moyen de contact", standard: "avec une relecture par un avocat prévue et un petit premier lancement" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Définir le produit",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir une niche étroite",
          minutes: 5,
          goal: "Choisir un utilisateur précis et une tâche répétée précise pour votre produit SaaS avec l'IA.",
          text: [
            "De grands outils d'IA généralistes existent déjà et sont souvent gratuits. Les petits produits SaaS gagnent en étant étroits : un type d'utilisateur, une tâche répétée, mieux faite que par un assistant de discussion général. \"Outil d'écriture avec l'IA\" est trop large. \"Transforme les notes de chantier d'un artisan en devis client propre en deux minutes\" est étroit.",
            "Les bonnes niches ont des utilisateurs qui font souvent la même tâche, y perdent du temps ou de l'argent, et paient déjà pour des logiciels. Vous pouvez les joindre par une organisation professionnelle, un forum ou un réseau local.",
            "Demandez à l'IA de trouver des niches à partir de votre propre expérience : \"J'ai travaillé dans [domaine]. Liste dix tâches répétées d'écriture ou de tri que les gens de ce domaine font chaque semaine.\" Puis parlez à trois personnes de la niche avant d'aller plus loin."
          ],
          steps: ["Listez les domaines que vous connaissez bien.", "Demandez à l'IA les tâches répétées dans ces domaines.", "Choisissez un utilisateur et une tâche.", "Vérifiez : fréquente, coûteuse, déjà payée par des logiciels, facile à joindre.", "Parlez à trois personnes qui font cette tâche."],
          words: [["SaaS", "logiciel en tant que service : un logiciel en ligne que l'on paie par abonnement."], ["Niche", "un petit groupe précis d'utilisateurs qui ont un même besoin."]],
          slides: [
            { title: "L'étroit gagne", bullets: ["Un utilisateur, une tâche répétée", "Mieux qu'un assistant de discussion général", "\"Des notes de chantier à un devis en deux minutes\""] },
            { title: "Les bonnes niches", bullets: ["Font la tâche souvent", "Y perdent du temps ou de l'argent", "Paient déjà des logiciels ; faciles à joindre"] },
            { title: "Partez de ce que vous connaissez", bullets: ["Demandez à l'IA les tâches répétées de votre domaine", "Parlez à trois personnes avant de construire"] }
          ],
          tryIt: "Utilisez l'IA pour lister dix tâches répétées dans un domaine que vous connaissez, choisissez un utilisateur et une tâche, et écrivez votre idée de produit en une phrase. Demandez à au moins une personne de cette niche si cela l'aiderait.",
          youCanNow: "choisir une niche étroite et accessible pour un produit SaaS avec l'IA.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui fait une bonne niche pour un petit produit SaaS avec l'IA ?", options: ["Des utilisateurs qui font souvent la tâche et paient déjà pour des logiciels", "Tout le monde sur la planète", "Une tâche qu'on fait une fois dans sa vie", "Un domaine que vous ne connaissez pas du tout"], answer: 0, why: "Des tâches fréquentes et des utilisateurs qui paient déjà rendent un produit plus facile à vendre." },
            { objective: "O1", q: "Votre idée est « l'IA pour toutes les petites entreprises ». Que faites-vous ?", options: ["La garder large pour toucher plus de monde", "La réduire à un utilisateur et une tâche répétée", "Ajouter d'autres fonctions", "Commencer tout de suite à programmer"], answer: 1, why: "Les petits produits SaaS avec l'IA réussissent en faisant très bien une tâche pour un utilisateur." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Délimiter un produit minimum viable",
          minutes: 5,
          goal: "Définir la fonction principale que votre première version doit bien faire.",
          text: [
            "Un produit minimum viable (MVP) est la plus petite version qui résout assez bien le problème principal pour que quelqu'un accepte de payer. Pour un SaaS avec l'IA, c'est en général un seul écran : l'utilisateur entre quelque chose, l'IA fait la tâche, l'utilisateur vérifie et copie le résultat.",
            "Écrivez votre parcours principal en une ligne : \"L'artisan colle ses notes de chantier, choisit un modèle, reçoit un brouillon de devis, le modifie, le télécharge.\" Tout le reste (comptes, équipes, intégrations, tableaux de bord) attend que des gens paient.",
            "Décidez aussi ce que l'IA ne doit jamais faire, par exemple inventer des prix, donner des conseils juridiques ou envoyer quoi que ce soit sans le clic de l'utilisateur. Ces règles façonnent à la fois votre prompt d'instructions et votre écran."
          ],
          steps: ["Écrivez le parcours principal en une ligne : entrée, tâche de l'IA, vérification par l'utilisateur, résultat.", "Listez les fonctions que vous ne construirez PAS encore.", "Écrivez trois choses que l'IA ne doit jamais faire.", "Dessinez l'écran unique sur papier."],
          words: [["MVP", "produit minimum viable (de l'anglais minimum viable product) : la plus petite version qui résout assez bien le problème principal pour être vendue."], ["Parcours principal", "le chemin principal que suit un utilisateur pour faire la tâche."]],
          slides: [
            { title: "La plus petite version utile", bullets: ["Un seul écran", "Entrée, tâche de l'IA, vérification, résultat"] },
            { title: "Pas encore", bullets: ["Équipes et tableaux de bord", "Intégrations", "Tout ce qui n'est pas dans le parcours principal"] },
            { title: "L'IA ne doit jamais", bullets: ["Inventer des prix ou des faits", "Donner des conseils juridiques ou médicaux", "Agir sans le clic de l'utilisateur"] }
          ],
          tryIt: "Écrivez votre parcours principal en une ligne, votre liste \"pas encore\" et trois règles \"jamais\", et dessinez l'écran unique.",
          youCanNow: "délimiter un MVP de SaaS avec l'IA autour d'une fonction principale, avec des limites claires.",
          quickCheck: [
            { objective: "O2", q: "Que met-on dans une liste « pas encore » ?", options: ["Votre fonction principale", "Votre prix", "Les fonctions qui attendront que des gens paient", "Vos règles « jamais »"], answer: 2, why: "Une liste « pas encore » garde la première version petite." },
            { objective: "O2", q: "Vous voulez ajouter des tableaux de bord d'équipe, une messagerie et des rapports à la première version. Que faites-vous ?", options: ["Tout construire maintenant", "Embaucher une grande équipe", "Abandonner la fonction principale", "Garder une seule fonction principale et mettre le reste dans la liste « pas encore »"], answer: 3, why: "Un produit minimum viable règle d'abord le problème principal." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Comment fonctionnent les API d'IA et ce qu'elles coûtent",
          minutes: 6,
          goal: "Expliquer comment une application utilise un modèle d'IA par une API et estimer le coût par utilisateur.",
          text: [
            "Une API (interface de programmation d'application) permet à votre application d'envoyer une demande à un modèle d'IA et de recevoir la réponse. Votre application envoie votre prompt d'instructions plus ce que l'utilisateur a saisi ; le modèle renvoie du texte (ou une image, ou des données structurées) ; votre application l'affiche.",
            "La plupart des fournisseurs de modèles d'IA facturent à l'utilisation, souvent comptée en tokens (de petits morceaux de texte, à peu près des parties de mots), avec des prix différents pour l'entrée et la sortie et selon les modèles. Les prix changent souvent : consultez la page des tarifs du fournisseur le jour où vous faites vos calculs.",
            "Estimez le coût par utilisateur : à peu près combien de demandes un utilisateur fait par mois, multiplié par la taille moyenne de chaque demande et réponse, multiplié par le prix. Demandez à l'IA de vous aider à préparer le tableur, et vérifiez les calculs. Gardez votre clé d'API secrète : ne la collez jamais dans une discussion, une page web ou un fichier public."
          ],
          steps: ["Écrivez ce que votre application envoie : prompt d'instructions + saisie de l'utilisateur.", "Estimez le nombre de demandes par utilisateur et par mois.", "Estimez la taille de chaque demande et de chaque réponse.", "Consultez les prix actuels sur la page des tarifs du fournisseur.", "Calculez le coût par utilisateur et par mois, et gardez votre clé d'API secrète."],
          words: [["API", "un moyen pour un programme d'envoyer des demandes à un autre et de recevoir des réponses."], ["Token", "un petit morceau de texte que les fournisseurs d'IA comptent pour mesurer l'utilisation et le prix."], ["Clé d'API", "un code secret qui permet à votre application d'utiliser l'API d'un fournisseur, et qui vous est facturé."]],
          slides: [
            { title: "Comment ça marche", bullets: ["Votre application envoie le prompt + la saisie", "Le modèle renvoie une réponse", "Votre application l'affiche à l'utilisateur"] },
            { title: "Prix à l'utilisation", bullets: ["Souvent compté en tokens", "Entrée et sortie à des prix différents", "Consultez la page des tarifs du fournisseur"] },
            { title: "Coût par utilisateur", bullets: ["Demandes par mois", "x taille de chaque demande et réponse", "x prix actuel"] },
            { title: "Gardez la clé d'API secrète", bullets: ["Jamais dans une discussion, une page web ou un fichier public", "Quiconque l'a peut dépenser votre argent"] }
          ],
          tryIt: "Construisez un petit tableur qui estime votre coût d'IA par utilisateur et par mois : demandes, taille et prix actuel pris sur la page des tarifs du fournisseur choisi. Vérifiez chaque formule.",
          youCanNow: "expliquer comment une application SaaS avec l'IA utilise une API et estimer son coût d'utilisation par utilisateur.",
          quickCheck: [
            { objective: "O3", q: "Que permet une API à votre application ?", options: ["Envoyer des demandes à un modèle d'IA et recevoir des réponses", "Dessiner un logo", "Encaisser des paiements", "Écrire vos conditions d'utilisation"], answer: 0, why: "L'API relie votre application au modèle d'IA." },
            { objective: "O3", q: "Une aide vous demande de coller votre clé d'API dans une discussion de groupe. Que faites-vous ?", options: ["La coller", "La garder privée et ne jamais la coller dans une discussion ou un fichier", "La mettre sur votre site", "La publier dans un fichier public"], answer: 1, why: "Toute personne qui a votre clé peut utiliser l'API et dépenser votre argent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Définir le produit",
        questions: [
          { objective: "O1", q: "Quelle est la meilleure niche pour un petit produit SaaS avec l'IA ?", options: ["Un outil d'IA pour tout le monde", "Transformer les notes de chantier des artisans en devis clients", "Un assistant de discussion général", "Toutes les entreprises"], answer: 1, why: "Un utilisateur précis et une tâche répétée battent les outils généralistes." },
          { objective: "O2", q: "Qu'est-ce qu'un MVP ?", options: ["Un produit fini avec toutes les fonctions", "La version la plus chère", "Un prix sportif", "La plus petite version qui résout assez bien le problème principal pour être vendue"], answer: 3, why: "MVP = produit minimum viable." },
          { objective: "O2", q: "Quelle fonction doit attendre que des gens paient ?", options: ["Les tableaux de bord d'équipe", "Le parcours principal de l'entrée au résultat", "L'étape de vérification par l'utilisateur", "La tâche de l'IA elle-même"], answer: 0, why: "Seul le parcours principal fait partie du MVP." },
          { objective: "O3", q: "Les fournisseurs d'IA mesurent souvent l'utilisation en :", options: ["Minutes de lumière du jour", "Pages", "Tokens", "Clients"], answer: 2, why: "Les tokens sont de petits morceaux de texte utilisés pour le prix." },
          { objective: "O3", q: "Où votre clé d'API ne doit-elle JAMAIS aller ?", options: ["Dans un gestionnaire de mots de passe", "Dans une zone de réglages sécurisée de votre application", "Dans une discussion, une page web ou un fichier public", "Dans votre compte chez le fournisseur"], answer: 2, why: "Quiconque a la clé peut l'utiliser et dépenser votre argent." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire, fixer le prix et lancer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Faire un prototype de la fonction principale",
          minutes: 6,
          goal: "Construire un prototype de votre fonction principale et le tester avec de vraies données.",
          text: [
            "Commencez par tester la tâche de l'IA elle-même, avant toute application : mettez votre prompt d'instructions et dix vraies entrées (rendues anonymes) dans un assistant de discussion et vérifiez les résultats. Si l'IA ne fait pas bien la tâche dans une discussion, une application ne réglera pas le problème. Améliorez le prompt jusqu'à ce que 8 ou 9 résultats sur 10 soient bons.",
            "Puis faites le prototype au niveau qui vous convient : une maquette cliquable de l'écran (dans un outil de conception comme Canva ou dans des diapositives), un créateur d'applications sans code qui peut appeler un modèle d'IA, ou un court notebook Python dans Google Colab qui appelle une API en gardant votre clé secrète.",
            "Montrez le prototype à trois personnes de votre niche et regardez-les l'utiliser. Notez où elles bloquent et où le résultat de l'IA a dû être corrigé."
          ],
          steps: ["Rassemblez dix vraies entrées et retirez les données privées.", "Testez votre prompt d'instructions dans un assistant de discussion.", "Améliorez le prompt jusqu'à ce que la plupart des résultats soient bons.", "Construisez un prototype : maquette, application sans code ou notebook.", "Regardez trois utilisateurs de la niche l'essayer et notez les problèmes."],
          words: [["Prototype", "une première version simple, utilisée pour tester une idée."], ["Maquette", "une image ou un modèle cliquable d'un écran qui montre à quoi ressemblera l'application."], ["Google Colab", "un notebook en ligne gratuit où l'on peut exécuter du code Python dans un navigateur."]],
          slides: [
            { title: "Testez d'abord la tâche de l'IA", bullets: ["Prompt d'instructions + dix vraies entrées", "Dans un assistant de discussion", "Visez 8 ou 9 bons résultats sur 10"] },
            { title: "Choisissez le niveau de prototype", bullets: ["Maquette cliquable", "Créateur d'applications sans code", "Notebook Python dans Google Colab"] },
            { title: "Regardez de vrais utilisateurs", bullets: ["Trois personnes de votre niche", "Où bloquent-elles ?", "Où l'IA a-t-elle dû être corrigée ?"] }
          ],
          tryIt: "Testez votre prompt sur dix entrées anonymes et notez les résultats. Puis construisez le prototype le plus simple possible et montrez-le à au moins une personne de votre niche.",
          youCanNow: "prouver qu'une fonction d'IA marche et construire un prototype que les gens peuvent essayer.",
          quickCheck: [
            { objective: "O4", q: "Que devez-vous tester avant de construire une application ?", options: ["Le logo", "Le prix", "Si l'IA fait bien la tâche avec votre prompt", "Les couleurs de votre site"], answer: 2, why: "Si l'IA ne sait pas faire la tâche, l'application n'aidera pas." },
            { objective: "O4", q: "Un utilisateur test bloque sur la zone de saisie de votre prototype. Que faites-vous ?", options: ["L'ignorer", "Accuser l'utilisateur", "Ajouter d'autres fonctions", "Le noter et rendre cette étape plus claire"], answer: 3, why: "Les endroits où les utilisateurs bloquent montrent ce qu'il faut corriger." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fixer le prix d'un abonnement",
          minutes: 5,
          goal: "Fixer un prix mensuel qui couvre l'utilisation de l'IA et les autres coûts, avec une marge de bénéfice.",
          text: [
            "Partez de la valeur : combien de temps ou d'argent votre produit fait-il gagner à un utilisateur chaque mois ? S'il fait gagner trois heures à un artisan, un prix bien inférieur à la valeur de ces heures est facile à justifier.",
            "Puis vérifiez les coûts : l'utilisation de l'IA par utilisateur (leçon 3), l'hébergement et les outils, les frais de paiement, le temps d'assistance et votre propre temps. Les gros utilisateurs peuvent coûter beaucoup plus que la moyenne, alors pensez à des limites d'utilisation par formule.",
            "Beaucoup de produits SaaS proposent deux ou trois formules avec des limites claires, et un essai gratuit. Demandez à l'IA de proposer des structures de formules, mais fixez vous-même les chiffres finaux et vérifiez-les dans un tableur. Pour la taxe sur les ventes et les impôts sur les logiciels, consultez l'administration fiscale de votre État (ou de votre pays) et irs.gov aux États-Unis, ou demandez à un comptable, car les règles varient."
          ],
          steps: ["Estimez la valeur pour l'utilisateur chaque mois.", "Additionnez les coûts par utilisateur : IA, hébergement, paiements, assistance.", "Prévoyez des limites pour les gros utilisateurs.", "Concevez deux ou trois formules et un essai.", "Vérifiez les calculs et interrogez un comptable sur les impôts."],
          words: [["Abonnement", "payer une somme régulière, par exemple chaque mois, pour continuer à utiliser un produit."], ["Limite d'utilisation", "un plafond de ce qu'une formule peut utiliser, comme 100 devis par mois."], ["Essai gratuit", "une courte période pendant laquelle on peut utiliser le produit sans payer."]],
          slides: [
            { title: "Partez de la valeur", bullets: ["Temps ou argent gagné chaque mois", "Un prix bien inférieur à cette valeur"] },
            { title: "Couvrez vos coûts", bullets: ["Utilisation de l'IA par utilisateur", "Hébergement, paiements, assistance", "Gros utilisateurs : fixez des limites"] },
            { title: "Formules", bullets: ["Deux ou trois formules avec des limites claires", "Un essai gratuit", "Les règles fiscales varient : demandez à un comptable"] }
          ],
          sources: [{ name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Faites une fiche de prix : valeur par utilisateur, coût par utilisateur (y compris l'IA), deux formules avec limites, et le bénéfice par utilisateur pour chaque formule. Vérifiez chaque formule de calcul.",
          youCanNow: "fixer le prix d'un abonnement avec l'IA qui couvre les coûts d'utilisation et correspond à la valeur pour les utilisateurs.",
          quickCheck: [
            { objective: "O5", q: "D'où doit partir le prix d'un abonnement ?", options: ["De la valeur que le produit apporte à l'utilisateur", "Du prix le plus bas que vous trouvez", "D'un nombre au hasard", "De l'avis de vos amis"], answer: 0, why: "Fixez le prix à partir de la valeur, puis vérifiez qu'il couvre les coûts." },
            { objective: "O5", q: "Quelques gros utilisateurs vous coûtent plus en utilisation de l'IA qu'ils ne paient. Que faites-vous ?", options: ["Supprimer toutes les limites", "Fixer des limites d'utilisation pour chaque formule", "Baisser le prix", "Arrêter de suivre les coûts"], answer: 1, why: "Les limites d'utilisation empêchent les gros utilisateurs d'effacer le bénéfice." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lancer avec confiance et sécurité",
          minutes: 6,
          goal: "Préparer une liste de lancement qui garde des affirmations honnêtes et protège les données des utilisateurs.",
          text: [
            "La confiance est votre plus grand atout quand votre SaaS est nouveau. Soyez honnête sur ce que fait l'IA et sur ses limites : dites que les résultats sont produits par l'IA et doivent être vérifiés. La FTC (l'autorité américaine de protection des consommateurs) dit que la publicité doit être vraie, non trompeuse et appuyée par des preuves, et elle a déjà agi contre des entreprises pour de fausses affirmations sur l'IA.",
            "Protégez les données des utilisateurs. Suivez les principes de sécurité des données de la FTC : faites l'inventaire de ce que vous collectez, réduisez à ce dont vous avez besoin, verrouillez-le, supprimez ce dont vous n'avez plus besoin et préparez-vous aux problèmes. Vérifiez ce que votre fournisseur d'IA fait des données envoyées par son API, et dites-le dans une politique de confidentialité.",
            "Ayez une politique de confidentialité et des conditions d'utilisation avant d'accepter des paiements ; il existe des modèles, mais faites-les relire par un avocat pour votre situation. Donnez aux utilisateurs un moyen simple de joindre une personne, et lancez petit : d'abord quelques utilisateurs de votre niche, puis grandissez."
          ],
          steps: ["Écrivez un marketing honnête : ce que fait l'outil, ses limites, \"vérifiez les résultats de l'IA\".", "Listez les données utilisateurs que vous collectez et supprimez celles dont vous n'avez pas besoin.", "Vérifiez les conditions de votre fournisseur d'IA sur les données.", "Préparez une politique de confidentialité et des conditions, relues par un avocat.", "Ajoutez un moyen de joindre une personne et lancez d'abord auprès d'un petit groupe."],
          words: [["Politique de confidentialité", "un texte public qui dit quelles données vous collectez et comment vous les utilisez."], ["Conditions d'utilisation", "les règles que les utilisateurs acceptent en utilisant votre produit."], ["Lancement", "le moment où vous rendez votre produit disponible pour les utilisateurs."]],
          slides: [
            { title: "Honnête sur l'IA", bullets: ["Dites ce qu'elle fait et ses limites", "\"Produit par l'IA : à vérifier\"", "FTC : les affirmations doivent être prouvées"] },
            { title: "Protégez les données des utilisateurs", bullets: ["Faites l'inventaire, réduisez, verrouillez", "Supprimez l'inutile ; préparez-vous aux problèmes", "Vérifiez les conditions de votre fournisseur d'IA"] },
            { title: "Avant d'accepter des paiements", bullets: ["Politique de confidentialité et conditions", "Relues par un avocat", "Un moyen simple de joindre une personne"] },
            { title: "Lancez petit", bullets: ["D'abord quelques utilisateurs de la niche", "Corrigez, puis grandissez"] }
          ],
          sources: [{ name: "FTC : bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC : protéger les informations personnelles, guide pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Tâche finale : écrivez votre liste de lancement (affirmations honnêtes, liste des données, conditions du fournisseur, politique de confidentialité et conditions à faire relire par un avocat, moyen de contact, premier lancement réduit) et rassemblez votre kit de démarrage SaaS avec votre plan, votre prototype et votre fiche de prix.",
          youCanNow: "planifier, prototyper, fixer le prix et préparer le lancement honnête et sûr d'un petit produit SaaS avec l'IA.",
          quickCheck: [
            { objective: "O6", q: "Que doit dire votre marketing sur les résultats de l'IA ?", options: ["Qu'ils sont toujours parfaits", "Qu'ils remplacent les experts", "Qu'ils sont générés par l'IA et doivent être vérifiés", "Rien sur l'IA"], answer: 2, why: "Des affirmations honnêtes disent aux utilisateurs ce que fait l'IA et ses limites." },
            { objective: "O6", q: "Vous êtes prêt à lancer. À qui lancez-vous d'abord ?", options: ["À tout le monde d'un coup avec des publicités payantes", "À personne ; continuer à tester pour toujours", "Seulement à des personnes hors de votre niche", "À un petit groupe d'utilisateurs de la niche"], answer: 3, why: "Un petit premier lancement permet de corriger les problèmes sans danger." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire, fixer le prix et lancer",
        questions: [
          { objective: "O4", q: "Que faut-il tester avant de construire une application ?", options: ["Si l'IA fait bien la tâche avec votre prompt dans une discussion", "Le logo", "La page des tarifs", "Le nom de domaine"], answer: 0, why: "Si l'IA ne sait pas faire la tâche, une application ne réglera rien." },
          { objective: "O4", q: "Quel niveau de prototype est rapide pour quelqu'un qui ne code pas ?", options: ["Rien avant le lancement", "Un centre de données sur mesure", "Embaucher 20 ingénieurs", "Une maquette cliquable de l'écran"], answer: 3, why: "Les maquettes permettent aux utilisateurs de réagir sans code." },
          { objective: "O5", q: "Pourquoi fixer des limites d'utilisation dans les formules ?", options: ["Pour embêter les utilisateurs", "Les gros utilisateurs peuvent coûter beaucoup plus en IA", "Parce que la loi l'exige", "Pour cacher les prix"], answer: 1, why: "Les limites rendent les coûts d'IA prévisibles." },
          { objective: "O6", q: "Que doit dire votre marketing sur les résultats de l'IA ?", options: ["Qu'ils sont produits par l'IA et doivent être vérifiés", "Qu'ils sont exacts à 100 %", "Qu'ils remplacent les professionnels", "Rien du tout"], answer: 0, why: "Des limites honnêtes créent la confiance et évitent les affirmations trompeuses." },
          { objective: "O6", q: "Avant d'accepter des paiements, vous devez avoir :", options: ["Le soutien d'une célébrité", "Mille fonctions", "Une politique de confidentialité et des conditions d'utilisation relues par un avocat", "Aucune information de contact"], answer: 2, why: "Elles fixent des règles claires et protègent vous et vos utilisateurs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer des produits SaaS avec l'IA",
    questions: [
      { objective: "O1", q: "SaaS veut dire :", options: ["Ventes et magasin", "Logiciel en tant que service", "IA simple et recherche", "Service d'application à accès sécurisé"], answer: 1, why: "C'est un logiciel en ligne payé par abonnement." },
      { objective: "O1", q: "Les petits produits SaaS avec l'IA gagnent en général en :", options: ["Copiant un grand assistant de discussion", "Faisant tout pour tout le monde", "Étant les plus chers", "Faisant très bien une seule tâche pour un seul type d'utilisateur"], answer: 3, why: "Une cible étroite bat les outils généralistes." },
      { objective: "O1", q: "Une bonne niche a des utilisateurs qui :", options: ["N'ont pas de budget", "Ne font jamais la tâche", "Sont impossibles à joindre", "Font souvent la tâche et paient déjà des logiciels"], answer: 3, why: "Ces utilisateurs sont susceptibles d'acheter." },
      { objective: "O1", q: "Avant de construire, vous devez parler à :", options: ["Personne", "Trois personnes de la niche", "Seulement des investisseurs", "Seulement l'IA"], answer: 1, why: "De vrais utilisateurs confirment le problème." },
      { objective: "O2", q: "Un MVP de SaaS avec l'IA est en général :", options: ["Une entreprise complète", "Dix applications", "Un seul écran : entrée, tâche de l'IA, vérification, résultat", "Un logo"], answer: 2, why: "C'est la plus petite version utile." },
      { objective: "O2", q: "Écrire ce que l'IA ne doit jamais faire aide à :", options: ["Façonner votre prompt d'instructions et votre écran", "Rendre l'application plus lente", "Augmenter le prix", "Rien"], answer: 0, why: "Des limites claires réduisent les erreurs nuisibles." },
      { objective: "O3", q: "Une API permet à votre application de :", options: ["Payer des impôts", "Imprimer des documents", "Envoyer des demandes à un modèle d'IA et recevoir des réponses", "Embaucher du personnel"], answer: 2, why: "C'est le rôle d'une API." },
      { objective: "O3", q: "Où vérifier les prix actuels des modèles d'IA ?", options: ["Sur la page des tarifs du fournisseur", "Dans un vieil article de blog", "En devinant", "Dans l'application d'un concurrent"], answer: 0, why: "Les prix changent souvent." },
      { objective: "O3", q: "Le coût par utilisateur s'estime à partir de :", options: ["Le nombre de logos", "Demandes par mois x taille x prix", "Votre loyer seulement", "L'âge de l'utilisateur"], answer: 1, why: "L'utilisation détermine le coût de l'IA." },
      { objective: "O3", q: "Si quelqu'un obtient votre clé d'API, il peut :", options: ["Corriger vos bugs", "Rien", "Seulement lire vos e-mails", "Utiliser l'API et dépenser votre argent"], answer: 3, why: "Les clés vous sont facturées." },
      { objective: "O4", q: "Vous testez votre prompt sur dix entrées et 4 résultats sont bons. Et ensuite ?", options: ["Améliorer le prompt avant de construire l'application", "Construire l'application quand même", "Lancer demain", "Augmenter les prix"], answer: 0, why: "Visez d'abord une majorité de bons résultats." },
      { objective: "O4", q: "Google Colab, c'est :", options: ["Seulement un tableur", "Une application de paiement", "Un réseau social", "Un notebook en ligne gratuit pour exécuter du Python dans un navigateur"], answer: 3, why: "Il permet de tester du code sans rien installer." },
      { objective: "O4", q: "Quand vous regardez des utilisateurs essayer votre prototype, notez :", options: ["Leur adresse personnelle", "Leurs mots de passe", "Où ils bloquent et où le résultat de l'IA a dû être corrigé", "Rien"], answer: 2, why: "Cela montre ce qu'il faut corriger." },
      { objective: "O5", q: "Le prix doit partir de :", options: ["Un nombre au hasard", "La valeur que le produit apporte à l'utilisateur", "Le logo de votre concurrent", "La couleur de votre site"], answer: 1, why: "La valeur fixe ce que les utilisateurs accepteront de payer." },
      { objective: "O5", q: "Lequel de ces éléments est un coût SaaS par utilisateur ?", options: ["Un trophée", "Le déjeuner de l'utilisateur", "Vos vacances", "L'utilisation de l'IA"], answer: 3, why: "L'utilisation de l'IA augmente avec chaque utilisateur." },
      { objective: "O5", q: "Pour la taxe sur les ventes de logiciels, vous devez :", options: ["Demander aux utilisateurs", "Supposer qu'elle ne s'applique jamais", "Consulter l'administration fiscale de votre État ou demander à un comptable", "L'ignorer"], answer: 2, why: "Les règles varient d'un État à l'autre." },
      { objective: "O6", q: "Le principe de la FTC \"réduire\" (scale down) veut dire :", options: ["Collecter et garder seulement ce dont vous avez besoin", "Rendre votre logo plus petit", "Baisser votre prix", "Embaucher moins de personnes"], answer: 0, why: "Moins de données, c'est moins de risques." },
      { objective: "O6", q: "Pourquoi vérifier les conditions de votre fournisseur d'IA sur les données ?", options: ["Pour changer les polices", "Pour savoir ce que deviennent les données des utilisateurs envoyées par l'API", "Pour obtenir des crédits gratuits", "Ce n'est pas nécessaire"], answer: 1, why: "Vous devez dire aux utilisateurs comment leurs données sont traitées." },
      { objective: "O6", q: "Qui doit relire votre politique de confidentialité et vos conditions ?", options: ["Seulement une IA de discussion", "Un avocat", "Votre premier utilisateur", "Personne"], answer: 1, why: "Les documents juridiques demandent une relecture professionnelle." },
      { objective: "O6", q: "Une façon sûre de lancer est :", options: ["D'abord auprès d'un petit groupe d'utilisateurs de la niche", "Auprès de tout le monde d'un coup sans assistance", "Sans moyen de contact", "Sans tester"], answer: 0, why: "Un petit lancement permet de corriger les problèmes tôt." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      4,
      6,
      8,
      10,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan du produit",
        objective: "O2",
        notYet: "La niche, l'utilisateur, le problème ou la fonction principale est flou ou manque.",
        meets: "Une page avec la niche, l'utilisateur, le problème, une fonction principale et les règles « jamais ».",
        exceeds: "Inclut ce qu'un utilisateur de la niche a dit de l'idée."
      },
      {
        name: "Prototype",
        objective: "O4",
        notYet: "Pas de prototype, ou le prompt n'a pas été testé sur de vraies entrées.",
        meets: "Une maquette, une application sans code ou un notebook pour la fonction principale, testé sur dix entrées anonymisées.",
        exceeds: "Montré à un utilisateur de la niche, avec des changements faits d'après ce qu'il a fait."
      },
      {
        name: "Estimation du coût de l'IA",
        objective: "O3",
        notYet: "Pas de coût par utilisateur, ou des prix qui ne viennent pas de la page du fournisseur.",
        meets: "Le coût de l'IA par utilisateur et par mois à partir des demandes, de leur taille et du prix actuel, formules vérifiées.",
        exceeds: "Montre les coûts pour un petit et un gros utilisateur."
      },
      {
        name: "Grille de prix",
        objective: "O5",
        notYet: "Le prix ne couvre pas l'utilisation de l'IA et les autres coûts.",
        meets: "Deux formules avec des limites et le bénéfice par utilisateur pour chacune, formules vérifiées.",
        exceeds: "Relie le prix de chaque formule à la valeur qu'elle apporte aux utilisateurs."
      },
      {
        name: "Liste de lancement",
        objective: "O6",
        notYet: "Il manque les affirmations honnêtes, les données, la confidentialité et les conditions, ou un moyen de contact.",
        meets: "Chaque point de la liste, une relecture par un avocat prévue et un petit premier lancement.",
        exceeds: "Liste exactement les données d'utilisateurs collectées et ce que le fournisseur en fait."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui montrent leur prototype à au moins trois utilisateurs de la niche dans les 30 jours (enquête de suivi)",
      "Les apprenants qui lancent auprès d'un petit premier groupe ou signent un premier utilisateur payant",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un tableur et un assistant IA gratuit",
      "Facultatif : un notebook gratuit comme Google Colab, ou un outil sans code ou de maquette",
      "Dix vraies entrées anonymisées de la niche choisie",
      "Environ 75 minutes pour les leçons et les vérifications, plus le temps de construire et de tester le prototype"
    ],
    facilitatorNotes: [
      "Laissez les personnes qui ne programment pas créer une maquette cliquable ; une application qui fonctionne n'est pas obligatoire.",
      "Ne montrez jamais une vraie clé d'API à l'écran ; apprenez aux apprenants à garder les clés hors des discussions et des fichiers.",
      "Vérifiez les prix actuels des modèles d'IA sur la page du fournisseur avant la séance sur les prix.",
      "Rappelez aux apprenants que la politique de confidentialité et les conditions d'utilisation demandent un avocat, et les questions de taxe sur les ventes un comptable.",
      "Notez le kit de démarrage avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
