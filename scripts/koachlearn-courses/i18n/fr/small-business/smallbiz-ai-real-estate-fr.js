"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-real-estate.js). See scripts/koachlearn-courses/README.md, "Translations".

const HUD_FHA = { name: "HUD : présentation du Fair Housing Act (en anglais)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75 : annonces, déclarations et avis discriminatoires (en anglais)", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "Department of Real Estate de Californie (exemple de régulateur d'État, en anglais)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC : la loi CAN-SPAM, guide de conformité pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "L'IA pour les agents immobiliers",
  skills: "Rédiger des annonces conformes au droit au logement équitable, Transformer des notes en nouvelles pour les clients, Construire un plan de relance, Résumer les données de marché que vous fournissez, Préparer les visites et les portes ouvertes, Protéger les informations des clients",
  outcome: "utiliser l'IA dans votre activité immobilière pour rédiger des annonces exactes qui respectent les règles du logement équitable, tenir informés acheteurs et vendeurs, suivre un plan de relance pour vos prospects, et transformer les chiffres de marché tirés de votre MLS en un résumé clair pour le client, sans mettre d'informations privées des clients dans les outils d'IA.",
  about: [
    "Ce cours s'adresse aux agents immobiliers, courtiers et assistants, surtout les agents indépendants et débutants qui construisent leur activité, dont beaucoup d'agents issus de minorités qui servent leur propre communauté et des primo-accédants.",
    "Vous utiliserez un assistant d'IA gratuit pour rédiger les annonces plus vite, tenir les clients informés, relancer les prospects avec régularité et expliquer clairement les chiffres du marché. Vous apprendrez aussi où l'IA crée des risques dans l'immobilier : le langage contraire au logement équitable, les faits erronés dans les annonces et la vie privée des clients.",
    "Ce cours n'est pas un conseil juridique. La loi sur le logement équitable, les règles de publicité et les règles de licence s'appliquent à vous ; vérifiez auprès du HUD (le ministère américain du Logement), du régulateur immobilier de votre État (en Californie, le Department of Real Estate) et de votre courtier. Hors des États-Unis, renseignez-vous auprès de l'autorité de votre pays. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez un kit IA d'agent : une annonce vérifiée ligne par ligne pour les faits et le langage du logement équitable, un modèle de point hebdomadaire pour le vendeur, un modèle de point de recherche pour l'acheteur, un plan de relance de 30 jours avec quatre messages, un résumé de marché d'une page construit à partir de chiffres que vous avez vous-même collectés, et une liste de contrôle pour les portes ouvertes. Aucune information privée de client n'entre dans l'outil d'IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des agents immobiliers, des courtiers et leurs assistants, en particulier des agents indépendants et nouveaux qui construisent leur activité, dont beaucoup d'agents issus de minorités qui servent leur propre communauté et des primo-accédants.",
    startingPoint: "Ils ont leur licence ou travaillent sous un courtier, et savent sortir des annonces et des chiffres du MLS. Beaucoup ont essayé l'IA pour une ou deux publications, mais n'ont pas de méthode régulière, et peu ont réfléchi aux risques de l'IA pour le logement équitable et la vie privée.",
    gap: "Rédiger les annonces, les points d'avancement et les relances prend des heures, et des relances irrégulières font perdre des clients. L'IA fait gagner ce temps, mais elle peut inventer des faits, écrire des phrases contraires au logement équitable et exposer les données des clients. Les apprenants ont besoin d'une méthode sûre et répétable qui protège leur licence et leurs clients.",
    constraints: [
      "Ce n'est pas un conseil juridique : les règles sur le logement équitable, la publicité et les licences viennent du HUD, de l'autorité de régulation de l'État et du courtier",
      "Les règles de l'agence sur les outils d'IA s'appliquent",
      "Vie privée : pas de noms de clients avec leur adresse, de détails financiers, de conditions d'offre ni de stratégie de négociation dans les outils d'IA",
      "Les chiffres du marché doivent venir du MLS ou d'une autre source fiable, pas de l'IA",
      "Temps : les agents sont très occupés, donc chaque leçon dure environ 5 minutes"
    ],
    prerequisites: "Aucun. Les débutants avec les assistants d'IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de faits vérifiés dans les registres, auprès du vendeur et lors de votre visite", action: "rédiger une annonce avec l'aide de l'IA et vérifier chaque fait ligne par ligne", standard: "en retirant tout ce que vous ne pouvez pas vérifier" },
    { id: "O2", condition: "Face à une annonce ou une publicité écrite avec l'IA", action: "repérer et réécrire les formulations qui montrent une préférence sur les personnes au lieu de décrire le bien", standard: "pour que chaque ligne décrive seulement le bien et ses caractéristiques" },
    { id: "O3", condition: "À partir d'une annonce vérifiée", action: "créer une publication sur les réseaux sociaux et un e-mail publicitaire qui respectent les règles de publicité des agents et les règles sur les e-mails", standard: "avec les informations de licence et d'agence exigées, une adresse postale et un moyen de se désabonner" },
    { id: "O4", condition: "À partir de vos notes rapides de la semaine", action: "rédiger avec l'IA un point pour un vendeur ou un acheteur en utilisant des cases à remplir pour les détails privés", standard: "sans aucune information privée de client dans l'outil d'IA" },
    { id: "O5", condition: "Face à un nouveau prospect qui a accepté d'avoir de vos nouvelles", action: "planifier une relance sur 30 jours avec quatre messages utiles et une prochaine date suivie", standard: "avec tous les liens vers des programmes vérifiés sur les pages officielles" },
    { id: "O6", condition: "À partir des chiffres de marché que vous avez sortis de votre MLS", action: "créer un résumé de marché en mots simples et une liste de contrôle pour une porte ouverte", standard: "sans chiffre inventé, avec la source et la date ajoutées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Annonces et logement équitable",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rédiger des annonces à partir de vos faits",
          minutes: 5,
          goal: "Rédiger une annonce exacte et attirante à partir de faits vérifiés sur le bien.",
          text: [
            "Une annonce met en valeur les atouts du logement : agencement, rénovations, lumière, extérieur, atouts du quartier comme des parcs ou des transports proches. L'IA écrit vite, mais elle ne sait que ce que vous lui dites.",
            "Donnez-lui seulement des faits vérifiés : \"3 chambres, 2 salles de bain, 1 450 pieds carrés (environ 135 m²) selon le cadastre du comté, construite en 1962, cuisine refaite en 2021, toit neuf en 2023, jardin clôturé avec citronnier, à 0,3 mile (500 m) du tramway.\" Demandez une description de 120 mots au ton chaleureux et professionnel, et une version courte pour les réseaux sociaux.",
            "Puis vérifiez chaque fait : la source de la surface, l'année des travaux, le nom des écoles, les distances. L'IA peut ajouter des choses qui n'existent pas (\"plans de travail en granit\", \"vue sur l'océan\"). Une fausse déclaration dans une annonce peut entraîner des plaintes et des ennuis juridiques."
          ],
          steps: ["Rassemblez les faits vérifiés auprès des registres, du vendeur et de votre propre visite.", "Demandez à l'IA une description longue et une courte.", "Vérifiez chaque fait ligne par ligne.", "Retirez tout ce que vous ne pouvez pas vérifier."],
          words: [["Annonce", "le texte qui décrit un bien à vendre ou à louer."], ["MLS", "Multiple Listing Service : la base de données que les agents utilisent pour partager les annonces aux États-Unis."], ["Fait vérifié", "une chose que vous avez confirmée par les registres, le vendeur ou votre propre visite."]],
          slides: [
            { title: "Mettez en valeur les atouts", bullets: ["Agencement, rénovations, lumière, extérieur", "Parcs et transports proches"] },
            { title: "Des faits en entrée, des mots en sortie", bullets: ["Donnez à l'IA seulement des faits vérifiés", "Demandez une version longue et une courte"] },
            { title: "Vérifiez ligne par ligne", bullets: ["Source de la surface, années des travaux, distances", "L'IA peut inventer des atouts", "Une fausse déclaration peut entraîner des plaintes"] }
          ],
          tryIt: "Choisissez un bien que vous connaissez (ou un exemple). Écrivez dix faits vérifiés, demandez à l'IA une description de 120 mots, et vérifiez chaque ligne en supprimant tout ce qui n'est pas dans vos faits.",
          youCanNow: "rédiger une annonce à partir de faits vérifiés et repérer les détails inventés par l'IA.",
          quickCheck: [
            { objective: "O1", q: "Que sait l'IA d'un logement quand elle rédige une annonce ?", options: ["Seulement ce que vous lui dites", "Tout ce qui est dans les registres du comté", "Ce que le vendeur a dit à votre agence", "Les données du MLS en direct sur ce logement"], answer: 0, why: "L'IA ne sait que ce que vous lui donnez, donc vous ne lui donnez que des faits vérifiés." },
            { objective: "O1", q: "L'annonce de l'IA parle de « plans de travail en granit », mais vous ne les avez pas vus pendant votre visite. Que faites-vous ?", options: ["Vous gardez la phrase ; les acheteurs aiment le granit", "Vous la retirez, sauf si vous pouvez la vérifier", "Vous ajoutez « peut-être » devant", "Vous demandez à l'IA si elle est sûre"], answer: 1, why: "Vous vérifiez chaque fait et retirez tout ce que vous ne pouvez pas vérifier." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Le langage du logement équitable : ce que l'IA ne doit pas écrire",
          minutes: 6,
          goal: "Repérer et corriger le langage d'annonce qui montre une préférence liée à une catégorie protégée.",
          text: [
            "La loi fédérale américaine Fair Housing Act interdit la discrimination en matière de logement fondée sur la race, la couleur, l'origine nationale, la religion, le sexe, la situation familiale et le handicap. La règle du HUD (24 CFR 100.75) interdit les annonces, déclarations et avis qui montrent une préférence, une limitation ou une discrimination fondée sur ces critères, y compris par les mots, les photos ou le choix des supports. Beaucoup d'États, dont la Californie, protègent davantage de groupes ; vérifiez dans votre État.",
            "Décrivez le bien, pas les personnes que vous voulez y voir vivre. Phrases à risque : \"parfait pour les jeunes actifs\", \"idéal pour un couple\", \"pas d'enfants\", \"super quartier chrétien\", \"garçonnière\", \"à deux pas de [un lieu de culte] pour les familles de cette religion\", \"personnes valides\". Mieux : \"trois chambres\", \"rue calme\", \"à 500 m des transports\", \"plain-pied\".",
            "L'IA peut reproduire des biais appris. Relisez toujours ses textes en pensant au logement équitable, et demandez-lui : \"Réécris pour ne décrire que le bien et ses caractéristiques.\" En cas de doute, demandez à votre courtier ou à un organisme spécialisé dans le logement équitable."
          ],
          steps: ["Lisez chaque ligne en vous demandant : est-ce que cela décrit le bien ou les personnes ?", "Retirez les mots sur qui devrait y vivre.", "Remplacez-les par des caractéristiques du bien.", "Vérifiez aussi les photos et le choix des supports.", "Demandez à votre courtier en cas de doute."],
          words: [["Fair Housing Act", "la loi fédérale américaine qui interdit la discrimination en matière de logement fondée sur des catégories protégées."], ["Catégorie protégée", "un groupe que la loi protège contre la discrimination, comme la race ou la situation familiale."], ["Situation familiale", "avoir des enfants de moins de 18 ans dans le foyer, ou être enceinte."], ["HUD", "le ministère américain du Logement et du Développement urbain."]],
          slides: [
            { title: "Les catégories protégées fédérales", bullets: ["Race, couleur, origine nationale, religion", "Sexe, situation familiale, handicap", "Beaucoup d'États, comme la Californie, en protègent plus"] },
            { title: "Une annonce ne doit pas montrer de préférence", bullets: ["24 CFR 100.75 : mots, photos, choix des supports", "Décrivez le bien, pas les personnes"] },
            { title: "Corrigez les phrases à risque", bullets: ["\"Parfait pour les jeunes actifs\" -> à retirer", "\"Pas d'enfants\" -> à retirer", "Utilisez des atouts : \"3 chambres\", \"près des transports\""] },
            { title: "L'IA peut reproduire des biais", bullets: ["Relisez chaque texte pour le logement équitable", "Demandez : \"Décris seulement le bien\"", "Un doute ? Demandez à votre courtier"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Demandez à l'IA une annonce pour une maison familiale. Repérez chaque phrase qui décrit des personnes plutôt que le bien, puis réécrivez-la en caractéristiques.",
          youCanNow: "repérer et corriger les problèmes de logement équitable dans le langage des annonces, y compris dans les textes écrits par l'IA.",
          quickCheck: [
            { objective: "O2", q: "Que doit décrire une annonce ?", options: ["Le genre de personnes qui devraient acheter", "La religion des voisins", "Le bien et ses caractéristiques", "Qui se sentira à sa place dans la rue"], answer: 2, why: "On décrit le bien, pas les personnes qu'on voudrait y voir vivre." },
            { objective: "O2", q: "L'IA écrit « idéal pour un couple ». Que faites-vous ?", options: ["Vous laissez ; c'est sympathique", "Vous ajoutez « ou une personne seule »", "Vous le mettez à la fin", "Vous le remplacez par des caractéristiques du bien, comme « deux chambres, rue calme »"], answer: 3, why: "« Idéal pour un couple » est une formule risquée qui parle des personnes ; décrivez plutôt le bien." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Promouvoir vos annonces et vous-même, dans les règles",
          minutes: 5,
          goal: "Créer des publications et des e-mails pour une annonce qui respectent les règles de publicité et d'e-mail.",
          text: [
            "L'IA peut transformer votre annonce vérifiée en publications, en e-mail à votre réseau, en texte de prospectus et en court script vidéo. Utilisez les mêmes faits vérifiés et la même vérification du logement équitable pour chaque élément.",
            "Le régulateur de votre État et votre courtier ont des règles de publicité pour les titulaires de licence, qui exigent souvent d'afficher votre numéro de licence et le nom de votre agence. En Californie, ce régulateur est le Department of Real Estate (DRE) ; vérifiez les règles de votre propre État et la politique de votre agence.",
            "Les e-mails publicitaires doivent respecter la loi américaine CAN-SPAM : expéditeur et objet honnêtes, mention qu'il s'agit d'une publicité, adresse postale et option de désinscription, et prise en compte des désinscriptions sous 10 jours ouvrés."
          ],
          steps: ["Transformez l'annonce vérifiée en publication, e-mail et prospectus avec l'IA.", "Faites la vérification du logement équitable sur chacun.", "Ajoutez la licence et l'agence comme l'exigent votre État et votre courtier.", "Ajoutez une adresse postale et une désinscription aux e-mails publicitaires."],
          words: [["Réseau (sphère)", "les personnes que vous connaissez qui pourraient acheter, vendre ou vous recommander : anciens clients, amis, famille."], ["Titulaire de licence", "une personne qui détient une licence d'agent immobilier."]],
          slides: [
            { title: "Une annonce, plusieurs supports", bullets: ["Publications, e-mail, prospectus, script vidéo", "Mêmes faits, même vérification du logement équitable"] },
            { title: "Règles de publicité des titulaires de licence", bullets: ["Souvent : numéro de licence et nom de l'agence", "Californie : Department of Real Estate", "Vérifiez votre État et la politique de votre agence"] },
            { title: "Les bases de l'e-mail publicitaire", bullets: ["Expéditeur et objet honnêtes ; dites que c'est une publicité", "Adresse postale et désinscription", "Désinscriptions prises en compte sous 10 jours ouvrés"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Transformez votre annonce vérifiée en publication sur les réseaux et en court e-mail. Faites la vérification du logement équitable, et ajoutez la licence et l'agence comme l'exigent votre État et votre courtier.",
          youCanNow: "promouvoir une annonce sur plusieurs canaux en respectant les règles du logement équitable, des titulaires de licence et des e-mails.",
          quickCheck: [
            { objective: "O3", q: "Quelle règle sur les e-mails s'applique aux e-mails publicitaires dans cette leçon ?", options: ["CAN-SPAM", "Le Food Code", "HIPAA", "La règle de la FTC sur les avis"], answer: 0, why: "Les e-mails publicitaires doivent respecter CAN-SPAM, avec une adresse postale et un moyen de se désabonner." },
            { objective: "O3", q: "Vous transformez votre annonce en publication pour les réseaux sociaux avec l'IA. Que faites-vous d'autre avant de publier ?", options: ["Vous publiez tout de suite ; l'annonce a déjà été vérifiée", "Vous refaites la vérification du logement équitable et ajoutez les informations de licence et d'agence exigées", "Vous retirez le prix", "Vous ajoutez une photo d'un autre logement trouvée en banque d'images"], answer: 1, why: "Chaque contenu passe la même vérification du logement équitable et contient les informations exigées par votre État et votre courtier." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Annonces et logement équitable",
        questions: [
          { objective: "O1", q: "L'annonce de l'IA dit \"vue sur l'océan\" mais le logement n'en a pas. Que faites-vous ?", options: ["La garder, les acheteurs aiment ça", "La supprimer", "Ajouter une photo de l'océan", "Demander à l'IA si c'est vrai"], answer: 1, why: "Seuls les faits vérifiés ont leur place dans une annonce." },
          { objective: "O2", q: "Laquelle est une catégorie protégée par le Fair Housing Act fédéral ?", options: ["La couleur des cheveux", "L'équipe de sport préférée", "La marque de voiture", "La situation familiale"], answer: 3, why: "La situation familiale fait partie des sept catégories fédérales." },
          { objective: "O2", q: "Quelle phrase pose un risque pour le logement équitable ?", options: ["\"Parfait pour les jeunes actifs\"", "\"Trois chambres\"", "\"Toit neuf en 2023\"", "\"À 0,3 mile du tramway\""], answer: 0, why: "Elle montre une préférence sur qui devrait y vivre." },
          { objective: "O2", q: "Les règles de publicité du logement équitable peuvent concerner :", options: ["Seulement les panneaux d'affichage", "Seulement les mots", "Les mots, les photos et le choix des supports", "Rien en ligne"], answer: 2, why: "24 CFR 100.75 couvre les mots, les images et le choix des médias." },
          { objective: "O3", q: "Où vérifiez-vous les règles de publicité des titulaires de licence en Californie ?", options: ["Auprès d'un acheteur", "Dans une discussion avec l'IA", "Auprès du Department of Real Estate et de votre courtier", "Dans un groupe sur les réseaux sociaux"], answer: 2, why: "Le DRE encadre les titulaires de licence en Californie." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Clients, prospects et données de marché",
      lessons: [
        {
          objectives: ["O4"],
          title: "Informer les clients sans partager d'informations privées",
          minutes: 5,
          goal: "Transformer vos notes en points clairs pour vendeurs et acheteurs grâce à des cases à remplir.",
          text: [
            "Les clients veulent avoir souvent de vos nouvelles. Le point hebdomadaire au vendeur couvre les visites, les retours, les vues en ligne et les prochaines étapes. Le point à l'acheteur couvre les nouveaux biens correspondants, les visites prévues et ce qui se passe dans sa gamme de prix.",
            "Utilisez l'IA pour transformer des notes brutes en un point clair, avec des cases à remplir : \"Transforme ces notes en point hebdomadaire aimable pour [nom du vendeur] : 6 visites, 2 secondes visites, les retours disent que la cuisine est super mais que le jardin doit être nettoyé, 1 200 vues en ligne. Propose une prochaine étape.\"",
            "Ne mettez jamais de détails privés des clients dans les outils d'IA : noms complets avec adresse, informations financières, montants de pré-approbation de prêt, numéros de sécurité sociale, conditions d'offre ou stratégie de négociation. Ajoutez-les vous-même dans votre e-mail ou votre CRM. Suivez les règles de votre agence sur les outils d'IA."
          ],
          steps: ["Écrivez des notes brutes à la fin de la semaine.", "Remplacez les noms et les détails privés par des cases à remplir.", "Demandez à l'IA un point clair avec une prochaine étape.", "Ajoutez vous-même les vrais détails et envoyez."],
          words: [["CRM", "gestion de la relation client : un logiciel pour suivre les clients et les prospects."], ["Case à remplir", "un espace comme [nom du vendeur] utilisé à la place de vrais détails privés."]],
          slides: [
            { title: "Les clients veulent des nouvelles", bullets: ["Vendeur : visites, retours, vues, prochaine étape", "Acheteur : nouveaux biens, visites, évolution du marché"] },
            { title: "Des notes en entrée, un point en sortie", bullets: ["Notes brutes avec cases à remplir", "Demandez un point aimable et une prochaine étape"] },
            { title: "Ne mettez jamais dans l'IA", bullets: ["Noms avec adresse, finances, numéros de sécurité sociale", "Montants de pré-approbation et conditions d'offre", "Stratégie de négociation"] }
          ],
          tryIt: "Écrivez des notes brutes sur la semaine d'un vendeur fictif. Utilisez des cases à remplir, demandez à l'IA un point hebdomadaire avec une prochaine étape, et vérifiez qu'il ne contient aucun détail privé.",
          youCanNow: "envoyer aux clients des points clairs faits avec l'IA en gardant leurs informations privées.",
          quickCheck: [
            { objective: "O4", q: "Que contient le point hebdomadaire pour un vendeur ?", options: ["Le montant de pré-approbation de l'acheteur", "Votre plan de négociation", "Les visites, les retours, les vues en ligne et les prochaines étapes", "Les offres d'autres clients"], answer: 2, why: "Le point pour le vendeur couvre les visites, les retours, les vues et les prochaines étapes." },
            { objective: "O4", q: "Vos notes contiennent le nom complet de l'acheteur et les conditions de son offre. Que faites-vous avant de les coller dans l'IA ?", options: ["Vous les collez telles quelles", "Vous raccourcissez les notes", "Vous les traduisez d'abord", "Vous remplacez les détails privés par des cases à remplir, que vous compléterez vous-même plus tard"], answer: 3, why: "Les détails privés des clients restent en dehors des outils d'IA ; vous les complétez vous-même." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Un plan de relance pour les prospects",
          minutes: 5,
          goal: "Construire un plan de relance de 30 jours avec quatre messages pour les nouveaux prospects.",
          text: [
            "La plupart des prospects ne sont pas prêts aujourd'hui. Un plan de relance régulier et utile vous garde dans leur esprit. Exemple de plan sur 30 jours : jour 1, remerciement et une question ; jour 7, un conseil utile (des programmes pour primo-accédants à étudier) ; jour 14, un aperçu du marché de leur quartier ; jour 30, une prise de nouvelles.",
            "Demandez à l'IA d'écrire chaque message dans votre style avec des cases [prénom] et [quartier]. Restez utile, pas insistant. Ne donnez que des liens vers des pages officielles de programmes que vous avez vérifiées.",
            "Suivez les prospects dans votre CRM ou un tableur : nom, origine, date, étape, date de la prochaine relance. N'envoyez d'e-mails ou de SMS qu'aux personnes qui ont accepté d'avoir de vos nouvelles, et respectez les règles sur les e-mails et les SMS."
          ],
          steps: ["Prévoyez quatre contacts sur 30 jours.", "Demandez à l'IA de rédiger chacun avec des cases à remplir.", "Rendez-les utiles et vérifiez les détails des programmes sur les pages officielles.", "Suivez la date de prochaine relance de chaque prospect.", "Ne contactez que les personnes qui ont accepté."],
          words: [["Prospect", "une personne qui pourrait acheter, vendre ou louer mais n'a pas signé avec vous."], ["Contact", "un échange avec un prospect : un appel, un SMS ou un e-mail."]],
          slides: [
            { title: "Un plan sur 30 jours", bullets: ["Jour 1 : remerciement et une question", "Jour 7 : conseil utile ; jour 14 : aperçu du marché", "Jour 30 : prise de nouvelles"] },
            { title: "Utile, pas insistant", bullets: ["L'IA rédige avec [prénom] et [quartier]", "Liens seulement vers des pages officielles vérifiées"] },
            { title: "Suivez et respectez", bullets: ["Nom, origine, étape, prochaine date", "Ne contactez que les personnes qui ont accepté"] }
          ],
          tryIt: "Demandez à l'IA de rédiger votre plan de relance de 30 jours en quatre messages. Remettez chacun dans votre style et créez un tableau de suivi des prospects avec une colonne de prochaine relance.",
          youCanNow: "suivre un plan de relance régulier et utile pour les nouveaux prospects.",
          quickCheck: [
            { objective: "O5", q: "Dans le plan d'exemple, quel est le message du jour 14 ?", options: ["Un aperçu du marché de leur quartier", "Une demande de recommandation", "Un contrat à signer", "Une carte d'anniversaire"], answer: 0, why: "Le plan est : jour 1 remerciement, jour 7 conseil, jour 14 aperçu du marché, jour 30 prise de nouvelles." },
            { objective: "O5", q: "Vous avez rencontré quelqu'un à une fête qui n'a jamais accepté d'avoir de vos nouvelles. Faut-il l'ajouter à votre plan de SMS ?", options: ["Oui, toute personne rencontrée est un prospect", "Non, contactez seulement les personnes qui ont accepté d'avoir de vos nouvelles", "Oui, si les messages sont courts", "Oui, mais seulement le week-end"], answer: 1, why: "N'envoyez d'e-mails ou de SMS qu'aux personnes qui ont accepté, et respectez les règles sur les e-mails et les SMS." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Résumés de marché et préparation des visites",
          minutes: 5,
          goal: "Transformer les chiffres de marché que vous avez collectés en résumé clair, et préparer une porte ouverte.",
          text: [
            "Les clients demandent : \"Comment va le marché ?\" Collectez vous-même les chiffres dans votre MLS ou une autre source fiable : prix médian, délai de vente, nombre de biens en vente, rapport prix de vente sur prix affiché, pour les derniers mois.",
            "Collez les chiffres (sans données de clients) dans l'IA et demandez : \"Explique ces chiffres du marché à un primo-accédant avec des mots simples, en 150 mots. N'ajoute aucun chiffre que je ne t'ai pas donné.\" Vérifiez qu'elle n'a pas inventé de statistiques, et ajoutez votre source et la date. L'IA n'a pas de données de marché fiables en temps réel ; vous, si.",
            "Pour les visites et les portes ouvertes, demandez à l'IA une liste de contrôle : avant (lumières, température, prospectus, registre d'accueil), pendant (sécurité, accueil, notes), après (relance sous 24 heures). Ajoutez les pratiques de sécurité de votre agence."
          ],
          steps: ["Collectez les chiffres actuels dans votre MLS ou une source fiable.", "Demandez à l'IA de les expliquer simplement sans ajouter de chiffres.", "Vérifiez chaque chiffre et ajoutez la source et la date.", "Demandez à l'IA une liste de contrôle de porte ouverte et ajoutez les étapes de sécurité."],
          words: [["Prix médian", "le prix du milieu : la moitié des biens s'est vendue plus cher, l'autre moitié moins cher."], ["Délai de vente", "le temps que mettent les biens à se vendre."], ["Rapport vente/affichage", "le prix de vente divisé par le prix affiché, en pourcentage."]],
          slides: [
            { title: "C'est vous qui collectez les chiffres", bullets: ["Prix médian et délai de vente", "Biens en vente et rapport vente/affichage", "Dans votre MLS ou une source fiable"] },
            { title: "L'IA explique", bullets: ["\"Explique simplement ; n'ajoute aucun chiffre\"", "Vérifiez chaque chiffre ; ajoutez la source et la date"] },
            { title: "Liste de contrôle de porte ouverte", bullets: ["Avant : lumières, prospectus, registre d'accueil", "Pendant : sécurité et notes", "Après : relance sous 24 heures"] }
          ],
          tryIt: "Tâche finale : construisez votre kit IA d'agent : une annonce vérifiée, les modèles de point vendeur et acheteur, le plan de relance de 30 jours, un résumé de marché tiré de chiffres que vous avez collectés, et une liste de contrôle de porte ouverte.",
          youCanNow: "expliquer clairement les chiffres du marché et préparer les visites avec l'aide de l'IA, à partir de vos propres données.",
          quickCheck: [
            { objective: "O6", q: "Que compare le ratio prix de vente / prix affiché ?", options: ["Le loyer et le prêt immobilier", "Le nombre de jours sur le marché et le nombre d'annonces", "Le prix auquel les logements se sont vendus et le prix auquel ils étaient affichés", "Le nombre d'agents et le nombre d'acheteurs"], answer: 2, why: "Il compare le prix de vente avec le prix affiché." },
            { objective: "O6", q: "Le résumé de marché de l'IA contient un chiffre que vous ne lui avez pas donné. Que faites-vous ?", options: ["Vous le gardez ; l'IA a des données en direct", "Vous l'arrondissez", "Vous le mettez en note de bas de page", "Vous le retirez et vérifiez chaque chiffre par rapport à votre source"], answer: 3, why: "L'IA n'a pas de données de marché fiables en direct, donc vous retirez les chiffres inventés et ajoutez votre source et la date." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Clients, prospects et données de marché",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui ne doit jamais aller dans un outil d'IA ?", options: ["Le montant de pré-approbation et le nom d'un acheteur", "\"6 visites cette semaine\"", "\"La cuisine a eu de bons retours\"", "\"[nom du vendeur]\""], answer: 0, why: "Les détails financiers des clients sont privés." },
          { objective: "O5", q: "Quelle est une bonne relance au jour 7 ?", options: ["Rien", "Un insistant \"Signez maintenant !\"", "Sa note de crédit", "Un conseil utile pour sa situation"], answer: 3, why: "Des contacts utiles créent la confiance." },
          { objective: "O6", q: "D'où doivent venir les chiffres du marché ?", options: ["De la mémoire de l'IA", "De votre MLS ou d'une autre source fiable que vous avez consultée", "D'une supposition", "D'un voisin"], answer: 1, why: "L'IA n'a pas de données de marché fiables en temps réel." },
          { objective: "O6", q: "L'IA ajoute \"les prix ont augmenté de 12 % cette année\" alors que vous n'avez jamais donné ce chiffre. Vous :", options: ["Le retirez", "Le gardez", "L'arrondissez au-dessus", "Le publiez"], answer: 0, why: "N'utilisez pas de chiffres que vous n'avez pas fournis et vérifiés." },
          { objective: "O6", q: "Qu'est-ce que le prix médian ?", options: ["Le loyer moyen", "Le prix le plus élevé", "Le prix du milieu : la moitié s'est vendue plus cher, la moitié moins cher", "Le prix affiché"], answer: 2, why: "La médiane est la valeur du milieu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les agents immobiliers",
    questions: [
      { objective: "O1", q: "Que devez-vous donner à l'IA pour rédiger une annonce ?", options: ["Le numéro de sécurité sociale du vendeur", "Seulement des faits vérifiés", "Des suppositions", "L'annonce d'un concurrent"], answer: 1, why: "Des faits en entrée, des mots exacts en sortie." },
      { objective: "O1", q: "MLS veut dire :", options: ["My Listing Site", "Main Loan System", "Market Law Statute", "Multiple Listing Service"], answer: 3, why: "Les agents partagent leurs annonces sur le MLS." },
      { objective: "O1", q: "Pourquoi vérifier la surface dans une annonce écrite par l'IA ?", options: ["Ce n'est pas utile", "Pour allonger le texte", "Pour s'amuser", "Une fausse déclaration peut entraîner des plaintes et des ennuis juridiques"], answer: 3, why: "Les faits erronés posent problème." },
      { objective: "O2", q: "Combien y a-t-il de catégories protégées par le Fair Housing Act fédéral ?", options: ["Trois", "Sept", "Dix", "Deux"], answer: 1, why: "Race, couleur, origine nationale, religion, sexe, situation familiale, handicap." },
      { objective: "O2", q: "Laquelle est une caractéristique du bien, et pas une préférence sur les personnes ?", options: ["\"Pas d'enfants\"", "\"Idéal pour un couple\"", "\"Plain-pied\"", "\"Super pour les jeunes actifs\""], answer: 2, why: "Elle décrit le logement." },
      { objective: "O2", q: "Pourquoi l'IA peut-elle écrire des choses contraires au logement équitable ?", options: ["Elle peut reproduire des biais appris", "Elle connaît parfaitement la loi", "Elle ne se trompe jamais", "C'est une avocate"], answer: 0, why: "Relisez toujours les textes de l'IA." },
      { objective: "O2", q: "La Californie protège-t-elle plus de groupes que la loi fédérale ?", options: ["Seulement le week-end", "Non, jamais", "Oui ; vérifiez les règles de votre État", "Seulement pour les locations"], answer: 2, why: "Beaucoup d'États, dont la Californie, protègent plus de groupes." },
      { objective: "O3", q: "Les publicités des titulaires de licence doivent souvent inclure :", options: ["Le numéro de licence et le nom de l'agence, selon les règles de l'État et du courtier", "Votre adresse personnelle", "Les noms des clients", "Rien"], answer: 0, why: "Vérifiez les règles de publicité de votre État." },
      { objective: "O3", q: "Un e-mail publicitaire à votre réseau doit inclure :", options: ["Les conditions d'offre des clients", "Une adresse postale et une option de désinscription", "Un faux expéditeur", "Rien"], answer: 1, why: "La loi CAN-SPAM exige les deux." },
      { objective: "O3", q: "Qu'est-ce que votre réseau (sphère) ?", options: ["Un prêteur", "Un objet rond", "Le MLS", "Les personnes que vous connaissez qui pourraient acheter, vendre ou vous recommander"], answer: 3, why: "Anciens clients, amis et famille." },
      { objective: "O4", q: "Un point hebdomadaire au vendeur comprend :", options: ["Les visites, les retours, les vues et une prochaine étape", "Les finances d'autres clients", "Votre mot de passe", "Rien"], answer: 0, why: "Cela tient le vendeur informé." },
      { objective: "O4", q: "Laquelle est une case à remplir ?", options: ["Un numéro de sécurité sociale", "Le nom complet et l'adresse du vendeur", "Un numéro de compte bancaire", "[nom du vendeur]"], answer: 3, why: "Les cases à remplir tiennent les détails privés à l'écart." },
      { objective: "O4", q: "La stratégie de négociation doit être :", options: ["Publiée en ligne", "Collée dans des discussions", "Gardée hors des outils d'IA", "Partagée avec tous les acheteurs"], answer: 2, why: "C'est une information confidentielle du client." },
      { objective: "O5", q: "Un plan de relance de 30 jours compte environ :", options: ["Cent appels", "Quatre contacts utiles", "Aucun", "Des SMS insistants chaque jour"], answer: 1, why: "La régularité et l'utilité marchent le mieux." },
      { objective: "O5", q: "À qui envoyer des e-mails ou SMS publicitaires ?", options: ["À des inconnus", "À toute personne dont vous trouvez le numéro", "À des listes achetées", "Aux personnes qui ont accepté d'avoir de vos nouvelles"], answer: 3, why: "L'autorisation passe d'abord." },
      { objective: "O5", q: "Avant de donner un lien vers un programme pour primo-accédants, vous :", options: ["Devinez les règles", "Faites confiance au lien de l'IA", "Vérifiez sa page officielle", "Ne vérifiez rien"], answer: 2, why: "Les détails des programmes changent." },
      { objective: "O6", q: "Le délai de vente mesure :", options: ["Le temps que mettent les biens à se vendre", "Les heures de porte ouverte", "Les jours de commission", "Les jours fériés"], answer: 0, why: "Il montre la vitesse du marché." },
      { objective: "O6", q: "Quand l'IA explique des chiffres du marché, vous devez lui dire :", options: ["Invente d'autres chiffres", "N'ajoute aucun chiffre que je ne t'ai pas donné", "Devine l'avenir", "Utilise n'importe quel site"], answer: 1, why: "Cela réduit les statistiques inventées." },
      { objective: "O6", q: "Quand relancer après une porte ouverte ?", options: ["L'année prochaine", "Sous 24 heures", "Jamais", "Seulement s'ils appellent"], answer: 1, why: "Une relance rapide fait gagner des clients." },
      { objective: "O2", q: "Ce cours est :", options: ["Pas un conseil juridique ; vérifiez auprès du HUD, du régulateur de votre État et de votre courtier", "Un conseil juridique", "Une licence", "Un contrat"], answer: 0, why: "Les sources officielles et votre courtier ont le dernier mot." }
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
      11,
      13,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Annonce exacte",
        objective: "O1",
        notYet: "L'annonce contient un fait non vérifié, comme un équipement que le logement n'a pas.",
        meets: "Chaque fait est vérifié ligne par ligne avec les registres, le vendeur ou votre visite.",
        exceeds: "Indique la source des faits importants comme la surface."
      },
      {
        name: "Langage du logement équitable",
        objective: "O2",
        notYet: "Une ligne décrit qui devrait vivre là au lieu de décrire le bien.",
        meets: "Chaque ligne décrit seulement le bien et ses caractéristiques.",
        exceeds: "Vérifie aussi les photos et l'emplacement des publicités, et sait expliquer chaque correction."
      },
      {
        name: "Points clients sans données privées",
        objective: "O4",
        notYet: "Un nom de client avec son adresse, un détail financier ou des conditions d'offre sont entrés dans l'outil d'IA.",
        meets: "Les modèles de point pour le vendeur et l'acheteur utilisent des cases à remplir, avec une prochaine étape claire.",
        exceeds: "Les cases ne sont remplies que dans la messagerie ou le CRM de l'agent."
      },
      {
        name: "Plan de relance des prospects",
        objective: "O5",
        notYet: "Moins de quatre messages, ou des messages insistants ou non vérifiés.",
        meets: "Quatre messages utiles sur 30 jours, avec des blancs à remplir et une prochaine date suivie.",
        exceeds: "Les liens vers des programmes sont vérifiés sur les pages officielles et notés."
      },
      {
        name: "Résumé de marché et porte ouverte",
        objective: "O6",
        notYet: "Le résumé contient un chiffre qui ne vient pas de votre source.",
        meets: "Un résumé en mots simples à partir de vos propres chiffres avec la source et la date, plus une liste de contrôle pour la porte ouverte.",
        exceeds: "La liste contient les règles de sécurité de l'agence et une relance dans les 24 heures."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Agents qui disent suivre un plan régulier de relance des prospects dans les 30 jours (enquête de suivi)",
      "Agents qui disent gagner du temps chaque semaine sur les annonces et les points clients",
      "Apprenants qui commencent un autre cours Koach Learn pour les petites entreprises dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit",
      "Des faits vérifiés pour une annonce réelle ou d'exemple, et des chiffres récents de votre MLS",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Rappelez que ce cours n'est pas un conseil juridique ; les questions sur le logement équitable, la publicité et les licences vont au HUD, à l'autorité de régulation de l'État et au courtier.",
      "Faites un exercice en groupe : lisez à voix haute des annonces d'exemple écrites par l'IA et repérez ensemble les risques pour le logement équitable.",
      "Utilisez des annonces d'exemple et des cases à remplir en classe ; ne collez jamais de vrais détails privés de clients dans les outils d'IA.",
      "Demandez aux apprenants de vérifier la règle de leur agence sur les outils d'IA avant de les utiliser avec des clients.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
