"use strict";

// Koach Learn course (French translation of africa-life/afr-women-entrepreneurs.js). See scripts/koachlearn-courses/README.md, "Translations".
// No financial advice and no figures beyond the English: all money figures are examples, exactly as in the English.

const UNWOMEN = { name: "ONU Femmes : autonomisation économique (travail de soin non rémunéré, accès aux biens et au financement)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Kenya (fonds public pour les entreprises de femmes)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Nigeria : inscription gratuite, SME Digital Academy et programmes dont le Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Sénégal : Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (formalisation, formation, financement)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency : appui aux micro et petites entreprises", url: "https://gea.gov.gh/" };
const AFAWA = { name: "Banque africaine de développement : AFAWA, Affirmative Finance Action for Women in Africa (Action en faveur du financement des femmes en Afrique)", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs-fr",
  lang: "fr",
  translationOf: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Femmes entrepreneures : créer et développer une activité",
  skills: "Choisir une idée d'activité adaptée à votre vie, Tester une idée avec de vrais clients, Fixer des prix rentables et vous verser un salaire, Organiser votre temps et le soutien de la famille, Trouver un financement et un appui en toute sécurité, Créer un réseau et un plan de croissance",
  outcome: "créer ou développer une petite activité adaptée à votre vie : choisir une idée, la tester avec de vrais clients, fixer des prix qui font un bénéfice et vous paient, organiser votre semaine avec le soutien dont vous avez besoin, trouver un financement et un appui sûrs, et écrire un plan de croissance sur six mois.",
  about: [
    "Les femmes tiennent une grande partie des petites entreprises en Afrique : au marché, dans les salons de coiffure, en cuisine, aux champs, dans les boutiques et en ligne. Beaucoup le font tout en s'occupant des enfants et de la famille, souvent avec moins d'accès aux prêts, à la terre et au temps. Ce cours s'adresse aux femmes du Kenya, du Nigeria, du Ghana, du Sénégal, du Cameroun, d'Égypte et de toute l'Afrique qui veulent créer une activité ou faire gagner plus à celle qu'elles ont déjà.",
    "Vous allez choisir une idée adaptée à vos compétences, à votre temps et à la demande locale, la tester à petit prix avant de dépenser beaucoup, fixer le prix de votre produit pour qu'il fasse un bénéfice et vous paie, organiser votre semaine et l'aide dont vous avez besoin à la maison, trouver des programmes de financement et d'appui et vérifier qu'ils sont vrais, puis créer un réseau et un plan sur six mois.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" pour votre propre activité. Les montants sont seulement des exemples. Le cours présente des options ; ce n'est pas un conseil financier. Pour aller plus loin, voyez les cours sur les groupes d'épargne, la vente en ligne et l'enregistrement d'une entreprise dans cette même catégorie."
  ],
  finalTask: "Écrivez votre plan d'affaires d'une page : l'idée choisie avec ses notes, ce que vous avez appris en la testant avec de vrais clients, le coût, le prix et le bénéfice d'un produit et ce que vous allez vous verser, un planning hebdomadaire avec les personnes qui vous aident, une option de financement ou d'appui vérifiée sur son site officiel, et trois objectifs pour les six prochains mois avec une mentore ou un groupe à contacter.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des femmes de toute l'Afrique, en ville et au village, qui ont ou veulent créer une petite activité : commerçantes, traiteurs, couturières, coiffeuses, agricultrices qui transforment et vendent, propriétaires de boutique et vendeuses en ligne. L'âge et le niveau d'études varient beaucoup ; beaucoup sont mères et s'occupent de proches.",
    startingPoint: "Beaucoup gagnent déjà un peu d'argent en vendant ou grâce à un savoir-faire, et beaucoup font partie d'un groupe d'épargne. Peu testent leurs idées avant de dépenser, calculent tous les coûts de leurs produits, se versent un montant fixe ou écrivent des objectifs. Certaines ne contrôlent pas l'argent qu'elles gagnent ou ne gardent pas secret le code PIN de leur mobile money.",
    gap: "Les femmes entrepreneures ont souvent moins de temps, moins d'accès au financement et moins de contacts d'affaires, et beaucoup d'activités restent petites ou ferment parce que les prix ne couvrent pas les coûts ou que la propriétaire est débordée. Les apprenantes doivent choisir et tester leurs idées avec soin, fixer des prix rentables, organiser leur temps et leur soutien, accéder en toute sécurité à de vrais financements et programmes, et grandir grâce aux réseaux.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenantes parlent l'anglais comme deuxième langue (le cours existe aussi en français et en arabe)",
      "Temps : beaucoup de travail de soin et de tâches ménagères ; leçons de 4 à 6 minutes qui s'y adaptent",
      "Appareils : un téléphone simple, parfois partagé avec la famille ; données mobiles chères",
      "Argent : petits budgets ; pas de conseil financier ; les noms et les conditions des programmes changent, donc les apprenantes vérifient les sites officiels",
      "Sécurité : arnaques qui demandent aux femmes de payer des frais pour obtenir une subvention ou un prêt ; certaines femmes subissent des pressions ou un contrôle sur leur argent"
    ],
    prerequisites: "Aucun. Utile : \"Groupes d'épargne et microfinance\" dans cette catégorie."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "Face à deux ou trois idées d'activité", action: "noter chaque idée selon vos compétences, votre temps, le coût de démarrage et la demande locale, et en choisir une", standard: "en utilisant les mêmes notes pour chaque idée et en écrivant pourquoi la gagnante vous convient" },
    { id: "O2", condition: "Avant de dépenser la plus grande partie de votre argent dans une nouvelle idée", action: "tester l'idée avec un petit lot et au moins dix vrais clients", standard: "en notant combien ont acheté, le prix payé et un changement à faire" },
    { id: "O3", condition: "À partir des coûts d'un produit ou d'un service", action: "calculer le coût par unité, fixer un prix avec un bénéfice et fixer le montant à vous verser", standard: "avec tous les coûts inclus et des calculs justes" },
    { id: "O4", condition: "À partir de vos tâches de travail et de maison pour une semaine", action: "établir un planning hebdomadaire qui montre les heures d'activité, les tâches de soin et qui vous aidera", standard: "validé avec au moins un membre de la famille ou une personne qui aide" },
    { id: "O5", condition: "Quand vous cherchez un prêt, une subvention ou un programme d'appui", action: "vérifier sur le site officiel que l'offre est vraie et garder le contrôle de votre argent et de votre code PIN", standard: "sans payer de \"frais de dossier\" à des inconnus et sans donner votre code PIN à personne" },
    { id: "O6", condition: "Pour les six prochains mois", action: "écrire trois objectifs d'activité mesurables et nommer une mentore, un groupe ou une association à contacter", standard: "chaque objectif avec un chiffre et une date" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Bien démarrer",
      lessons: [
        {
          title: "Choisir une activité adaptée à votre vie",
          objectives: ["O1"],
          minutes: 5,
          goal: "Noter deux ou trois idées d'activité et choisir celle qui vous convient le mieux.",
          text: [
            "La meilleure activité pour vous est celle que les gens autour de vous veulent, qui utilise des compétences que vous avez, et qui convient au temps et à l'argent dont vous disposez vraiment. Une activité qui vous oblige à être au marché dès 5 heures du matin ne vous convient peut-être pas si vous emmenez les enfants à l'école.",
            "Écrivez deux ou trois idées. Notez chacune de 1 (faible) à 3 (bon) sur quatre points : vos compétences, le temps qu'elle demande par rapport au temps que vous avez, le coût de démarrage par rapport à l'argent que vous avez, et la demande locale (les gens d'ici achètent-ils ce produit, et y a-t-il de la place pour une vendeuse de plus ?). Additionnez les notes.",
            "Exemple : Halima, à Kaduna, note trois idées. Vendre du kunu (une boisson locale) près d'une école : compétences 3, temps 2, coût 3, demande 3 = 11. La couture : compétences 2, temps 2, coût 1, demande 2 = 7. Vendre du crédit téléphonique : compétences 2, temps 3, coût 2, demande 1 = 8 (il y a déjà beaucoup de vendeurs). Elle choisit les boissons. Aïcha, à Dakar, pourrait noter de la même façon un stand de thiakry, les tresses et une petite boutique.",
            "Les notes vous aident à réfléchir ; elles ne décident pas à votre place. Demandez-vous aussi : est-ce que j'aimerais ce travail, et pourrai-je le développer plus tard ?"
          ],
          steps: ["Écrivez deux ou trois idées.", "Notez chacune de 1 à 3 sur les compétences, le temps, le coût de démarrage et la demande locale.", "Additionnez les notes.", "Choisissez-en une et écrivez pourquoi elle convient à votre vie."],
          words: [["Coût de démarrage", "l'argent dont vous avez besoin pour commencer : outils, premier stock, un stand ou une licence."], ["Demande", "combien de personnes veulent acheter quelque chose, et en quelle quantité."]],
          slides: [
            { title: "Une activité qui vous convient", bullets: ["Les gens autour de vous la veulent", "Elle utilise vos compétences", "Elle convient à votre vrai temps et à votre argent"] },
            { title: "Notez chaque idée de 1 à 3", bullets: ["Vos compétences", "Temps demandé / temps disponible", "Coût de démarrage / argent disponible", "Demande locale"] },
            { title: "Exemple : Halima à Kaduna", bullets: ["Kunu près d'une école : 11", "Couture : 7", "Crédit téléphonique : 8, trop de vendeurs"] },
            { title: "Puis demandez-vous", bullets: ["Est-ce que j'aimerais ce travail ?", "Pourrai-je le développer plus tard ?"] }
          ],
          tryIt: "Écrivez deux ou trois idées d'activité. Notez chacune de 1 à 3 sur les compétences, le temps, le coût de démarrage et la demande locale, additionnez les notes, et écrivez une phrase sur la raison pour laquelle votre meilleure idée convient à votre vie.",
          youCanNow: "comparer des idées d'activité avec des notes simples et choisir celle qui convient à votre vie.",
          quickCheck: [
            { objective: "O1", q: "Sur quels quatre points notez-vous chaque idée ?", options: ["Couleur, nom, logo, taille de la boutique", "Compétences, temps, coût de démarrage et demande locale", "Ce que vos amies aiment, la météo, la musique, la mode", "Seulement l'argent qu'elle pourrait rapporter"], answer: 1, why: "Les compétences, le temps, le coût et la demande montrent si une idée vous convient, à vous et à votre marché." },
            { objective: "O1", q: "Une idée a une bonne note en compétences, mais il y a déjà dix vendeurs dans votre rue. Quelle note est faible ?", options: ["Compétences", "Temps", "Demande locale", "Coût de démarrage"], answer: 2, why: "Beaucoup de vendeurs à côté veut dire peu de place pour un de plus : la demande est faible." }
          ]
        },
        {
          title: "Tester votre idée avec de vrais clients",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tester une idée avec un petit lot et au moins dix vrais clients avant de dépenser beaucoup.",
          text: [
            "Beaucoup d'activités échouent parce que la propriétaire dépense toutes ses économies avant de savoir si les gens vont acheter. Testez d'abord en petit : fabriquez ou achetez un petit lot, proposez-le à de vrais clients et observez ce qui se passe.",
            "Faites un petit lot, par exemple 20 verres de zobo (jus de bissap), 5 robes ou 10 rendez-vous de coiffure. Proposez-le à au moins dix personnes qui ne sont pas de la famille proche. Notez combien ont acheté, le prix payé, ce qu'ils ont aimé et ce qu'ils ont demandé. Les actes comptent plus que les paroles polies : \"J'achèterai la semaine prochaine\" n'est pas une vente.",
            "Exemple : Esther, à Kisumu, teste du savon liquide. Elle fait 15 bouteilles, en vend 12 à 150 KES (un prix d'exemple), et trois clientes demandent une plus grande bouteille. Son changement : ajouter un grand format. Une femme d'Alexandrie qui teste des légumes marinés faits maison pourrait faire la même chose avec ses voisines et une petite boutique.",
            "Après le test, décidez : continuer, changer quelque chose ou essayer votre idée suivante. Un test raté coûte peu et vous fait économiser beaucoup."
          ],
          steps: ["Fabriquez ou achetez un petit lot.", "Proposez-le à au moins dix personnes qui ne sont pas de la famille proche.", "Notez combien ont acheté, le prix, ce qu'ils ont aimé et ce qu'ils ont demandé.", "Décidez : continuer, changer une chose ou essayer l'idée suivante."],
          words: [["Petit lot", "une petite quantité fabriquée ou achetée pour tester avant d'en faire plus."], ["Test", "essayer une idée en petit pour apprendre avant de dépenser beaucoup."]],
          slides: [
            { title: "Testez avant de dépenser beaucoup", bullets: ["Ne dépensez pas toutes vos économies d'abord", "Faites un petit lot", "Proposez-le à de vrais clients"] },
            { title: "Notez", bullets: ["Combien ont acheté", "Le prix payé", "Ce qu'ils ont aimé et demandé"] },
            { title: "Les actes valent plus que les paroles polies", bullets: ["\"J'achèterai la semaine prochaine\" n'est pas une vente", "Comptez les vraies ventes", "Demandez à des personnes hors de la famille proche"] },
            { title: "Après le test", bullets: ["Continuez", "Changez une chose", "Ou essayez l'idée suivante"] }
          ],
          tryIt: "Préparez un test pour l'idée choisie : le petit lot que vous allez faire, le prix que vous allez essayer et dix personnes à qui vous allez le proposer cette semaine. Après le test, notez combien ont acheté et un changement à faire.",
          youCanNow: "tester une idée d'activité à petit prix avec de vrais clients et décider de la suite.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la meilleure preuve que les clients veulent votre produit ?", options: ["Votre mère dit qu'il est joli", "Vos amies disent qu'elles l'achèteront le mois prochain", "Vous l'aimez beaucoup", "Des personnes qui ne sont pas de la famille le paient"], answer: 3, why: "De vraies ventes à de vrais clients montrent la vraie demande." },
            { objective: "O2", q: "Votre test vend 3 articles sur 20. Quelle est une bonne suite ?", options: ["Demander aux acheteurs quoi changer, changer une chose et tester à nouveau", "Dépenser toutes vos économies en stock", "Abandonner le commerce pour toujours", "Doubler le prix"], answer: 0, why: "Un test faible est une leçon pas chère : apprenez, changez une chose et réessayez." }
          ]
        },
        {
          title: "Fixer des prix rentables et vous verser un salaire",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculer le coût par unité, fixer un prix avec un bénéfice et fixer le montant à vous verser.",
          text: [
            "Beaucoup de femmes vendent trop bon marché, surtout aux voisins, et travaillent dur sans vrai bénéfice. Comptez tous les coûts : ingrédients ou matières premières, emballage, transport, charbon ou gaz, données du téléphone, frais de stand et votre propre temps.",
            "Coût par unité = coût total d'un lot divisé par le nombre d'unités. Ajoutez ensuite un bénéfice. Exemple à Kumasi : Abena fait 40 pâtés à la viande. La farine, la viande, l'huile et le gaz coûtent 160 GHS, les sachets 10 GHS et le transport 10 GHS : 180 GHS au total, soit 4,50 GHS par pâté. Elle les vend 7 GHS (chiffres d'exemple), donc chaque pâté rapporte 2,50 GHS de bénéfice. Vérifiez que les clients paieront votre prix en regardant les vendeurs semblables.",
            "Versez-vous un salaire. Décidez d'un montant fixe que vous prenez dans l'activité chaque semaine, et laissez le reste dans l'activité pour le stock et la croissance. Si vous prenez tout, l'activité ne peut pas grandir ; si vous ne prenez rien, vous travaillez gratuitement. Notez ce que vous prenez dans vos registres.",
            "Si votre prix ne couvre pas vos coûts, changez quelque chose : un format plus petit, un meilleur fournisseur, des achats en gros avec d'autres, ou un prix plus élevé pour une meilleure qualité."
          ],
          steps: ["Listez tous les coûts d'un lot, y compris transport, combustible, données et frais.", "Divisez le total par le nombre d'unités pour obtenir le coût par unité.", "Ajoutez un bénéfice pour fixer le prix ; comparez avec des vendeurs semblables.", "Décidez d'un montant fixe à vous verser chaque semaine ; laissez le reste dans l'activité."],
          words: [["Coût par unité", "le coût total d'un lot divisé par le nombre d'unités fabriquées."], ["Bénéfice", "l'argent qui reste une fois tous les coûts payés."], ["Se verser un salaire", "un montant fixe que la propriétaire prend dans l'activité, pour que le reste serve au stock et à la croissance."]],
          slides: [
            { title: "Comptez tous les coûts", bullets: ["Matières premières et emballage", "Transport, combustible, données, frais de stand", "Votre propre temps"] },
            { title: "Coût par unité", bullets: ["Coût total du lot / nombre d'unités", "Abena : 180 GHS / 40 pâtés = 4,50 GHS", "Vend à 7 GHS = 2,50 GHS de bénéfice (exemple)"] },
            { title: "Versez-vous un montant fixe", bullets: ["Prenez un montant fixe chaque semaine", "Laissez le reste pour le stock et la croissance", "Notez-le dans vos registres"] },
            { title: "Prix trop bas ?", bullets: ["Format plus petit ou meilleur fournisseur", "Achetez en gros avec d'autres", "Prix plus élevé pour une meilleure qualité"] }
          ],
          tryIt: "Choisissez un produit. Listez tous les coûts d'un lot, calculez le coût par unité, fixez un prix avec un bénéfice, et décidez combien vous allez vous verser chaque semaine.",
          youCanNow: "fixer le prix d'un produit pour qu'il fasse un bénéfice et vous verser un montant fixe.",
          quickCheck: [
            { objective: "O3", q: "Un lot de 20 sacs coûte 10 000 NGN au total. Quel est le coût par sac ?", options: ["200 NGN", "20 NGN", "500 NGN", "10 000 NGN"], answer: 2, why: "10 000 divisé par 20 donne 500 NGN par sac." },
            { objective: "O3", q: "Pourquoi vous verser un montant fixe au lieu de prendre tout l'argent ?", options: ["Pour ne jamais rien gagner", "Pour que de l'argent reste dans l'activité pour le stock et la croissance", "Pour que les clients paient plus", "Toutes les banques l'exigent"], answer: 1, why: "Un montant fixe vous paie et laisse de l'argent pour faire tourner et grandir l'activité." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Bien démarrer",
        questions: [
          { objective: "O1", q: "L'idée A a 11 points et l'idée B en a 7, mais vous détestez l'idée A. Que faites-vous ?", options: ["Toujours choisir la meilleure note", "N'en choisir aucune et arrêter", "Noter à nouveau jusqu'à ce que B gagne", "Utiliser les notes pour réfléchir, et vous demander aussi si vous aimeriez ce travail"], answer: 3, why: "Les notes aident à réfléchir ; aimer son travail compte aussi." },
          { objective: "O2", q: "À qui proposer votre lot de test ?", options: ["À au moins dix personnes qui ne sont pas de la famille proche", "Seulement à votre mari", "Seulement à votre meilleure amie", "À personne ; on devine"], answer: 0, why: "Les vrais clients répondent honnêtement par ce qu'ils achètent." },
          { objective: "O2", q: "Pourquoi tester avec un petit lot ?", options: ["Pour dépenser plus d'argent", "Pour apprendre avant de dépenser beaucoup", "Parce que les grands lots sont interdits", "Pour éviter les clients"], answer: 1, why: "Un petit test coûte peu et montre si les gens vont acheter." },
          { objective: "O3", q: "Quel coût beaucoup de vendeuses oublient-elles ?", options: ["Les ingrédients principaux", "Le produit lui-même", "Le transport, le combustible, les données et leur propre temps", "Le prix de vente"], answer: 2, why: "Les petits coûts comme le transport et le combustible s'additionnent et mangent le bénéfice." },
          { objective: "O3", q: "Le coût par unité est de 4,50 GHS et le prix de 7 GHS. Quel est le bénéfice par unité ?", options: ["11,50 GHS", "7 GHS", "4,50 GHS", "2,50 GHS"], answer: 3, why: "7 moins 4,50 donne 2,50." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Grandir solidement",
      lessons: [
        {
          title: "Trouver du temps : famille, soins et soutien",
          objectives: ["O4"],
          minutes: 5,
          goal: "Établir un planning hebdomadaire avec les heures d'activité, les tâches de soin et qui aide.",
          text: [
            "Dans beaucoup d'endroits, les femmes font la plus grande partie du travail de soin non rémunéré à la maison : cuisiner, nettoyer, aller chercher l'eau, et s'occuper des enfants, des malades et des personnes âgées. ONU Femmes (l'agence des Nations unies pour les femmes) souligne que cela leur laisse moins de temps pour un travail payé. Une activité demande aussi du temps : planifiez-le.",
            "Dessinez une semaine : sept jours avec matin, après-midi et soir. Marquez les tâches de soin, puis vos heures d'activité : acheter le stock, fabriquer, vendre, répondre aux messages et tenir les registres. Cherchez les conflits et les moments libres.",
            "Ensuite, demandez de l'aide. Parlez avec votre mari ou votre partenaire, vos grands enfants, une sœur ou une voisine pour partager des tâches comme aller chercher l'eau, accompagner les enfants à l'école ou cuisiner les jours de grand marché. Certaines femmes font garder leurs enfants à tour de rôle avec d'autres mères, ou travaillent près de chez elles certains jours. Exemple : Mariam, à Yaoundé, vend au marché le mardi, le vendredi et le samedi ; sa sœur garde les enfants ces matins-là et, en échange, Mariam la coiffe.",
            "Montrez le planning à votre famille et mettez-vous d'accord. Prenez soin de vous aussi : le repos et la santé font tenir l'activité."
          ],
          steps: ["Dessinez sept jours avec matin, après-midi et soir.", "Marquez les tâches de soin et de maison.", "Marquez les heures d'activité : achats, fabrication, vente, messages, registres.", "Repérez les conflits et demandez à un proche ou à une aide de partager des tâches.", "Validez le planning ensemble et prévoyez du repos."],
          words: [["Travail de soin non rémunéré", "le travail à la maison qui n'est pas payé, comme cuisiner, nettoyer et s'occuper des enfants, des malades et des personnes âgées."], ["Garde à tour de rôle", "des mères qui gardent chacune leur tour les enfants des autres."]],
          slides: [
            { title: "Votre temps fait partie de l'activité", bullets: ["Les femmes font l'essentiel du travail de soin non payé", "Une activité demande aussi du temps", "Alors planifiez-le"] },
            { title: "Dessinez votre semaine", bullets: ["Sept jours : matin, après-midi, soir", "Marquez les tâches de soin", "Marquez les heures d'activité", "Repérez les conflits"] },
            { title: "Demandez de l'aide", bullets: ["Partenaire, grands enfants, sœur, voisine", "Partagez l'eau, l'école, la cuisine", "Gardez les enfants à tour de rôle avec d'autres mères"] },
            { title: "Validez-le ensemble", bullets: ["Montrez le planning à votre famille", "Prévoyez repos et santé"] }
          ],
          tryIt: "Dessinez votre planning hebdomadaire avec les tâches de soin et les heures d'activité. Marquez un conflit, écrivez qui pourrait vous aider et parlez avec cette personne cette semaine.",
          youCanNow: "organiser votre semaine pour que votre activité et vos tâches de soin s'accordent, avec le soutien dont vous avez besoin.",
          quickCheck: [
            { objective: "O4", q: "Votre jour de marché tombe en même temps que le trajet de l'école. Quelle est une bonne solution ?", options: ["Demander à un proche ou à une autre mère de partager le trajet de l'école", "Fermer l'activité", "Ne plus jamais aller au marché", "Laisser les enfants seuls"], answer: 0, why: "Partager les tâches libère du temps pour l'activité sans nuire à la famille." },
            { objective: "O4", q: "Pourquoi montrer votre planning à votre famille ?", options: ["Pour demander la permission d'exister", "Pour qu'elle soit d'accord et aide", "Pour qu'elle prenne votre argent", "Cela n'a pas d'importance"], answer: 1, why: "Quand la famille est d'accord avec le planning, elle aide plus volontiers." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Trouver de l'argent et un appui en toute sécurité",
          objectives: ["O5"],
          minutes: 6,
          goal: "Vérifier qu'un prêt, une subvention ou un programme est vrai et garder le contrôle de votre argent.",
          text: [
            "Il existe des programmes pour les femmes et les petites entreprises. Exemples : au Kenya, le Women Enterprise Fund, un fonds public pour les entreprises de femmes ; au Nigeria, la SMEDAN (l'agence nationale des petites et moyennes entreprises), dont l'inscription gratuite ouvre l'accès à des programmes comme le Women In Self-employment Programme ; au Sénégal, la DER/FJ, qui propose formation, formalisation et financement aux femmes et aux jeunes ; la Ghana Enterprises Agency (agence ghanéenne des entreprises) ; et l'initiative AFAWA de la Banque africaine de développement, qui travaille avec les banques et les prêteurs pour les aider à prêter aux femmes. Les groupes d'épargne et la microfinance ont leur propre cours.",
            "Les noms, les règles et les dates d'ouverture changent : vérifiez toujours sur le site officiel ou au bureau du programme. Des escrocs font semblant d'offrir des subventions et des prêts pour les femmes et demandent d'abord des \"frais de dossier\" ou des \"frais d'inscription\". Un vrai programme indique ses frais sur son site officiel ; ne payez jamais un inconnu pour obtenir une subvention.",
            "Gardez le contrôle de votre argent. Ayez votre propre ligne de mobile money ou votre propre compte à votre nom, et gardez votre code PIN secret pour tout le monde, y compris la famille. Un vrai opérateur ne demande jamais votre code PIN. Si quelqu'un prend vos gains par la force ou par des menaces, c'est de la violence ; parlez-en à une personne de confiance, à un groupe de femmes ou à un service d'aide local.",
            "Avant d'emprunter, sachez le total à rembourser, quand, et ce qui se passe en cas de retard. Empruntez pour quelque chose qui rapportera de l'argent, pas pour couvrir les dépenses quotidiennes de la maison."
          ],
          steps: ["Trouvez le site officiel ou le bureau du programme.", "Vérifiez ce qu'il offre, qui peut postuler, ses dates d'ouverture et ses frais.", "Refusez toute personne qui demande des frais vers le compte d'un inconnu.", "Gardez une ligne de mobile money ou un compte à votre nom et un code PIN secret.", "Avant d'emprunter, écrivez le total à rembourser, quand, et les règles en cas de retard."],
          words: [["Subvention", "de l'argent donné pour un but précis, qu'on n'a pas à rembourser."], ["Prêt", "de l'argent emprunté qu'il faut rembourser, en général avec un coût en plus (les intérêts)."], ["Arnaque aux frais anticipés", "une escroquerie où quelqu'un promet de l'argent mais vous demande d'abord de payer des frais."]],
          slides: [
            { title: "Appuis aux activités des femmes", bullets: ["Kenya : Women Enterprise Fund", "Nigeria : programmes de la SMEDAN", "Sénégal : DER/FJ ; Ghana : Ghana Enterprises Agency", "AFAWA (BAD) : passe par les banques et les prêteurs"] },
            { title: "Vérifiez que c'est vrai", bullets: ["Seulement le site ou le bureau officiel", "Qui peut postuler, dates et frais", "Ne payez jamais un inconnu pour une subvention"] },
            { title: "Gardez le contrôle de votre argent", bullets: ["Un compte ou une ligne de mobile money à votre nom", "Code PIN secret pour tous, même la famille", "Un vrai opérateur ne demande jamais votre code PIN"] },
            { title: "Avant d'emprunter", bullets: ["Total à rembourser et quand", "Ce qui se passe en cas de retard", "Empruntez pour gagner, pas pour les dépenses du jour"] }
          ],
          tryIt: "Choisissez un programme de cette leçon ou un autre que vous connaissez. Trouvez son site officiel ou son bureau, et écrivez ce qu'il offre, qui peut postuler, s'il est ouvert en ce moment et la date de votre vérification.",
          youCanNow: "trouver un appui pour votre activité, vérifier qu'il est vrai et garder le contrôle de votre propre argent.",
          quickCheck: [
            { objective: "O5", q: "Un message dit que vous avez gagné une subvention pour les entreprises de femmes ; payez d'abord 5 000 KES de \"frais de dossier\". Qu'est-ce que c'est ?", options: ["Une étape normale d'un programme", "Une arnaque ; vérifiez le site officiel et ne payez aucun inconnu", "Un prêt que vous devez accepter", "Un impôt"], answer: 1, why: "Demander des frais avant de donner une subvention est une arnaque classique aux frais anticipés." },
            { objective: "O5", q: "Qui doit connaître le code PIN de votre mobile money ?", options: ["Votre mari", "Votre meilleure cliente", "L'agent qui vous appelle", "Vous seule"], answer: 3, why: "Votre code PIN protège votre argent ; un vrai opérateur ne le demande jamais." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Réseaux, mentores et un plan de croissance sur six mois",
          objectives: ["O6"],
          minutes: 5,
          goal: "Écrire trois objectifs mesurables sur six mois et nommer une mentore ou un groupe à contacter.",
          text: [
            "Beaucoup de femmes grandissent plus vite avec d'autres : une mentore qui l'a déjà fait, une association de femmes d'affaires, une association de marché ou de commerçants, une coopérative, une chambre de commerce ou un centre d'appui aux entreprises. On y partage des acheteurs, des fournisseurs, des conseils et du courage.",
            "Une mentore est une personne plus expérimentée qui vous conseille. Demandez à une femme que vous admirez 20 minutes de conseils, avec deux questions claires. Rejoignez un groupe où se retrouvent vos clients ou vos fournisseurs. Allez à une foire commerciale ou à un jour de marché dans une ville plus grande quand vous le pouvez.",
            "Écrivez ensuite trois objectifs pour les six prochains mois. Rendez chacun mesurable, avec un chiffre et une date : \"Vendre 60 bouteilles de savon par semaine d'ici fin mars\", \"Épargner 500 GHS pour une deuxième machine à coudre d'ici juin\" (un chiffre d'exemple), \"Avoir cinq nouvelles boutiques clientes d'ici mai\". Vérifiez vos objectifs une fois par mois et notez ce que vous avez fait.",
            "Exemple : Ngozi, à Enugu, qui vend des sacs en tissu Ankara (wax), rejoint une association de commerçantes, trouve une mentore qui exporte des sacs, et se fixe des objectifs de ventes, d'épargne et de premier stand dans une foire commerciale."
          ],
          steps: ["Listez les personnes et les groupes qui pourraient vous aider : mentores, associations, coopératives, centres d'appui.", "Choisissez-en un à contacter ce mois-ci, avec deux questions claires.", "Écrivez trois objectifs, chacun avec un chiffre et une date.", "Vérifiez vos objectifs une fois par mois et notez ce que vous avez fait."],
          words: [["Mentore", "une personne expérimentée qui vous donne des conseils et du soutien."], ["Objectif mesurable", "un objectif avec un chiffre et une date, pour voir si vous l'avez atteint."], ["Association", "un groupe de personnes du même métier ou dans la même situation qui s'entraident."]],
          slides: [
            { title: "Grandir avec d'autres", bullets: ["Mentores et associations de femmes", "Groupes de commerçants, coopératives, chambres", "Centres d'appui aux entreprises"] },
            { title: "Trouver une mentore", bullets: ["Une femme que vous admirez", "Demandez 20 minutes", "Venez avec deux questions claires"] },
            { title: "Trois objectifs mesurables", bullets: ["Chacun avec un chiffre et une date", "Ventes, épargne, nouveaux clients", "Vérifiez-les une fois par mois"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'affaires d'une page avec votre idée notée, les résultats du test, le prix et le bénéfice, ce que vous vous versez, votre planning hebdomadaire, une option d'appui vérifiée, trois objectifs sur six mois et une mentore ou un groupe à contacter.",
          youCanNow: "créer un réseau et écrire un plan de croissance sur six mois avec des objectifs mesurables.",
          quickCheck: [
            { objective: "O6", q: "Quel objectif est mesurable ?", options: ["\"Faire mieux\"", "\"Devenir célèbre\"", "\"Vendre 40 robes par mois d'ici fin juin\"", "\"Travailler dur\""], answer: 2, why: "Il a un chiffre et une date : vous pouvez vérifier si vous l'avez atteint." },
            { objective: "O6", q: "Comment demander de l'aide à une mentore possible ?", options: ["Lui demander 20 minutes avec deux questions claires", "Lui demander de vous donner de l'argent", "Lui demander de gérer votre activité", "Ne jamais demander ; attendre qu'elle vienne"], answer: 0, why: "Une demande courte et claire respecte son temps et vous apporte des conseils utiles." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Grandir solidement",
        questions: [
          { objective: "O4", q: "Qu'est-ce que le travail de soin non rémunéré ?", options: ["Travailler dans une banque", "Le travail à la maison qui n'est pas payé, comme cuisiner et s'occuper des enfants", "Vendre au marché", "Un emploi dans l'administration"], answer: 1, why: "Le travail de soin non rémunéré, ce sont les tâches ménagères et les soins qui prennent du temps sans rapporter d'argent." },
          { objective: "O4", q: "Un planning hebdomadaire doit montrer :", options: ["Seulement les heures d'activité", "Seulement le repos", "Les heures d'activité, les tâches de soin et qui aide", "Seulement les horaires d'école des enfants"], answer: 2, why: "Voir tout ensemble montre les conflits et là où il faut de l'aide." },
          { objective: "O5", q: "Où vérifier qu'un programme de prêts pour les femmes est vrai ?", options: ["Sur son site officiel ou à son bureau", "Dans un message transféré", "Auprès d'un inconnu au téléphone", "Dans un commentaire sur les réseaux sociaux"], answer: 0, why: "Seule la source officielle montre le vrai programme, ses dates et ses frais." },
          { objective: "O5", q: "Avant d'emprunter, que devez-vous savoir ?", options: ["Seulement le nom du prêteur", "Seulement la rapidité du versement", "Rien ; il suffit de signer", "Le total à rembourser, quand, et ce qui se passe en cas de retard"], answer: 3, why: "Connaître le coût total et les règles de retard vous protège d'une dette que vous ne pourriez pas rembourser." },
          { objective: "O6", q: "À quelle fréquence vérifier vos objectifs sur six mois ?", options: ["Jamais", "Une fois par mois", "Seulement à la fin des six mois", "Tous les dix ans"], answer: 1, why: "Une vérification mensuelle montre tôt les progrès, pour pouvoir changer de cap." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Femmes entrepreneures : créer et développer une activité",
    questions: [
      { objective: "O1", q: "Une bonne activité pour vous est une activité qui :", options: ["Convient à vos compétences, à votre temps, à votre argent et à la demande locale", "Marche déjà bien pour votre voisine", "Demande le plus d'argent", "Est la plus connue"], answer: 0, why: "Une activité qui vous convient, à vous et à votre marché, a plus de chances de durer." },
      { objective: "O1", q: "Le coût de démarrage, c'est :", options: ["Votre bénéfice de la semaine", "L'argent dont vous avez besoin pour commencer", "Le prix que paient les clients", "Un prêt que vous devez prendre"], answer: 1, why: "C'est l'argent pour les outils, le premier stock, un stand ou une licence." },
      { objective: "O1", q: "Pourquoi noter chaque idée sur les quatre mêmes points ?", options: ["Pour que ce soit plus long", "Pour que toutes les idées gagnent", "Pour comparer les idées de façon juste", "Parce que la banque le demande"], answer: 2, why: "Les mêmes notes pour chaque idée rendent la comparaison juste." },
      { objective: "O2", q: "Une amie qui dit \"J'achèterai la semaine prochaine\", c'est :", options: ["Une vente", "Un contrat", "Un prêt", "Pas encore une vente ; comptez les vrais achats"], answer: 3, why: "Seuls les vrais achats prouvent la demande." },
      { objective: "O2", q: "Pendant un test, vous notez :", options: ["Combien ont acheté, le prix, et ce qu'ils ont aimé et demandé", "Seulement vos coûts", "Rien", "Seulement le nom de vos amies"], answer: 0, why: "Ces notes montrent la demande et ce qu'il faut améliorer." },
      { objective: "O2", q: "Après un test, vous pouvez :", options: ["Seulement abandonner", "Continuer, changer une chose ou essayer l'idée suivante", "Seulement dépenser toutes vos économies", "Seulement doubler le prix"], answer: 1, why: "Un test vous aide à bien choisir l'étape suivante." },
      { objective: "O3", q: "Le coût par unité, c'est :", options: ["Le prix que vous espérez", "Le prix de votre voisine", "Le coût total du lot divisé par le nombre d'unités", "Votre bénéfice"], answer: 2, why: "Diviser le coût du lot par le nombre d'unités donne le coût de chacune." },
      { objective: "O3", q: "Un lot coûte 30 000 XAF et donne 60 unités. Le coût par unité est de :", options: ["600 XAF", "60 XAF", "1 800 XAF", "500 XAF"], answer: 3, why: "30 000 divisé par 60 donne 500 XAF." },
      { objective: "O3", q: "Si votre prix ne couvre pas vos coûts, vous pouvez :", options: ["Changer de format ou de fournisseur, acheter en gros avec d'autres ou augmenter le prix pour la qualité", "Continuer à vendre à perte pour toujours", "Arrêter de noter vos coûts", "Emprunter chaque semaine pour combler"], answer: 0, why: "Changer les coûts ou le prix, c'est ainsi qu'on retrouve un bénéfice." },
      { objective: "O3", q: "Se verser un montant fixe chaque semaine veut dire :", options: ["Prendre tout l'argent", "Ne jamais rien prendre", "Prendre un montant fixe et laisser le reste pour l'activité", "Payer vos clients"], answer: 2, why: "Un montant fixe vous paie et garde de l'argent pour l'activité." },
      { objective: "O4", q: "ONU Femmes souligne que le travail de soin non rémunéré :", options: ["Est fait également par tout le monde", "Laisse à beaucoup de femmes moins de temps pour un travail payé", "N'existe pas", "Est payé par l'État"], answer: 1, why: "Les femmes font l'essentiel du travail de soin non rémunéré, ce qui limite leur temps pour une activité." },
      { objective: "O4", q: "La garde à tour de rôle, c'est :", options: ["Des mères qui gardent chacune leur tour les enfants des autres", "Vendre des vêtements d'enfants", "Des frais de scolarité", "Un compte bancaire"], answer: 0, why: "Se relayer libère du temps pour le travail de chaque mère." },
      { objective: "O4", q: "Votre planning doit aussi inclure :", options: ["Aucun repos", "Seulement le travail", "Les projets de vos voisins", "Le repos et la santé"], answer: 3, why: "Le repos vous fait tenir, vous et votre activité." },
      { objective: "O5", q: "Une subvention, c'est :", options: ["Un prêt à taux d'intérêt élevé", "De l'argent donné pour un but précis, que vous ne remboursez pas", "Des frais que vous payez d'abord", "Un impôt"], answer: 1, why: "Les subventions ne se remboursent pas ; les prêts, si." },
      { objective: "O5", q: "Quelqu'un vous demande des frais avant de vous donner une subvention pour les femmes. C'est très probablement :", options: ["Une étape normale", "Une règle de la banque", "Une arnaque aux frais anticipés", "Un impôt de l'État"], answer: 2, why: "Les vrais programmes publient leurs frais sur leur site officiel ; les inconnus qui demandent des frais sont des escrocs." },
      { objective: "O5", q: "Qui doit détenir le code PIN de votre mobile money ?", options: ["Vous seule", "Votre partenaire", "La personne qui appelle de la part de l'opérateur", "Votre aîné"], answer: 0, why: "Votre code PIN protège votre argent ; gardez-le secret pour tout le monde." },
      { objective: "O5", q: "AFAWA, de la Banque africaine de développement, sert surtout à :", options: ["Prêter à chaque femme par WhatsApp", "Faire payer des frais aux femmes par téléphone", "Remplacer tous les groupes d'épargne", "Travailler avec les banques et les prêteurs pour qu'ils prêtent plus aux femmes"], answer: 3, why: "AFAWA passe par les institutions financières pour augmenter les prêts aux femmes." },
      { objective: "O6", q: "Une mentore, c'est :", options: ["Une cliente qui vous doit de l'argent", "Une personne expérimentée qui donne des conseils", "Une agente des impôts", "Un prêt"], answer: 1, why: "Une mentore partage son expérience pour vous aider à grandir." },
      { objective: "O6", q: "Quel objectif a un chiffre et une date ?", options: ["\"Grandir\"", "\"Être la meilleure\"", "\"Épargner 50 000 NGN pour un congélateur d'ici juillet\"", "\"Faire plus d'efforts\""], answer: 2, why: "Un chiffre et une date rendent l'objectif mesurable." },
      { objective: "O6", q: "Rejoindre une association de femmes ou de commerçants peut vous aider à :", options: ["Trouver des acheteurs, des fournisseurs, des conseils et du soutien", "Éviter tous les clients", "Ne plus tenir de registres", "Ne jamais avoir besoin d'un plan"], answer: 0, why: "Les groupes partagent contacts, savoirs et encouragements." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, reprenez cette partie et réessayez.",
    criteria: [
      { name: "Idée choisie", objective: "O1", notYet: "Une seule idée sans notes, ou des notes sans raisons.", meets: "Deux ou trois idées notées sur les compétences, le temps, le coût et la demande, avec la raison pour laquelle la gagnante convient.", exceeds: "Indique aussi comment l'idée pourrait se développer plus tard." },
      { name: "Idée testée", objective: "O2", notYet: "Pas de test, ou seulement la famille interrogée.", meets: "Un petit lot proposé à au moins dix vrais clients, avec les ventes, le prix et un changement notés.", exceeds: "Le changement a été fait et testé une deuxième fois." },
      { name: "Prix, bénéfice et salaire", objective: "O3", notYet: "Coûts manquants, calculs faux, ou aucun montant à se verser.", meets: "Tous les coûts listés, un coût par unité juste, un prix avec bénéfice et un montant fixe hebdomadaire à se verser.", exceeds: "Prix comparé avec des vendeurs semblables, avec un plan si les coûts augmentent." },
      { name: "Planning et soutien", objective: "O4", notYet: "Pas de planning, ou aucune aide nommée.", meets: "Un planning hebdomadaire avec les heures d'activité, les tâches de soin et qui aide, validé avec au moins une personne.", exceeds: "Prévoit du repos et une aide de secours." },
      { name: "Financement et appui vérifiés en sécurité", objective: "O5", notYet: "Une option tirée d'un message transféré ou d'un inconnu, ou un code PIN partagé.", meets: "Une option vérifiée sur son site officiel, avec qui peut postuler et la date de vérification ; l'argent reste à son nom.", exceeds: "Écrit aussi le total à rembourser, quand, et les règles de retard pour tout prêt." },
      { name: "Objectifs et réseau", objective: "O6", notYet: "Objectifs vagues, ou aucune mentore ni aucun groupe nommé.", meets: "Trois objectifs avec chiffres et dates, et une mentore ou un groupe à contacter.", exceeds: "Le contact a été pris et la première vérification mensuelle est prévue." }
    ]
  },
  evaluation: {
    results: [
      "Apprenantes qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenantes qui créent ou testent une activité, ou ajoutent un produit, dans les 30 jours (enquête de suivi)",
      "Apprenantes qui disent se verser un montant fixe et tenir des registres au bout de trois mois",
      "Apprenantes qui atteignent au moins un de leurs objectifs sur six mois et ne signalent aucune perte due à des arnaques aux subventions ou aux prêts"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Du papier, un stylo et une calculatrice (celle du téléphone suffit)",
      "Un téléphone pour consulter les sites officiels des programmes",
      "Le matériel pour un petit lot de test (au choix de l'apprenante)",
      "Environ 60 minutes au total, en courtes séances, plus une ou deux semaines pour faire le test"
    ],
    facilitatorNotes: [
      "Animez le cours avec un groupe de femmes, un groupe d'épargne ou une coopérative ; choisissez des horaires qui conviennent aux mères, et acceptez les bébés dans la salle.",
      "Avant le cours, vérifiez sur leurs sites officiels quels programmes pour les femmes et les petites entreprises sont ouverts dans votre pays, et apportez les adresses.",
      "Ne demandez jamais aux apprenantes de partager un code PIN, un solde ou des informations de compte. Entraînez-vous à repérer les arnaques aux subventions et aux prêts avec des messages inventés.",
      "Certaines apprenantes peuvent subir des pressions ou un contrôle sur leur argent à la maison ; abordez le sujet avec délicatesse, en privé, et connaissez les services locaux d'aide aux femmes vers lesquels les orienter.",
      "Évaluez la tâche finale avec la grille et faites un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
