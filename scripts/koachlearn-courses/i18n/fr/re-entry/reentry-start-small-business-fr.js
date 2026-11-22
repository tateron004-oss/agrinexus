"use strict";

// Koach Learn course (French translation of re-entry/reentry-start-small-business.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-start-small-business-fr",
  lang: "fr",
  translationOf: "reentry-start-small-business",
  category: "Re-Entry",
  name: "Créer et lancer une petite entreprise",
  skills: "Choisir une activité que vous pouvez lancer maintenant, Trouver des clients et fixer un prix, Rédiger un plan d'affaires d'une page avec l'IA, Choisir une forme d'entreprise et un nom, Obtenir un EIN gratuit et les bonnes licences, Tenir ses comptes et prévoir les impôts",
  outcome: "rédiger avec l'aide de l'IA un plan d'affaires d'une page pour une entreprise de services simple, et faire une liste de démarches avec les étapes officielles aux États-Unis : forme d'entreprise et nom, un EIN gratuit auprès de l'IRS, les licences exigées par votre ville, votre comté et votre État, un compte bancaire séparé, et des registres pour les impôts.",
  about: [
    "Beaucoup de personnes qui sortent de prison choisissent de travailler à leur compte : ménage, entretien de pelouses, aide au déménagement, nettoyage de voitures, coiffure, cuisine, peinture, petits travaux et plus encore. Avoir sa propre entreprise peut apporter des revenus, de l'indépendance et un avenir, même quand certains employeurs tardent à embaucher.",
    "Au chapitre 1, vous choisirez une idée d'entreprise adaptée à vos compétences, définirez vos clients et votre prix, et rédigerez un plan d'une page avec un assistant d'IA. Au chapitre 2, vous apprendrez les démarches officielles aux États-Unis : forme d'entreprise, nom, EIN gratuit auprès de l'IRS (l'administration fiscale américaine), licences, compte bancaire, registres et impôts, et où trouver de l'aide gratuite.",
    "Les règles varient selon l'État, le comté et la ville, et elles changent. Ce cours vous donne les étapes et les endroits officiels où vérifier, comme sba.gov et irs.gov ; ce n'est pas un conseil juridique ou fiscal. Ne tapez jamais votre numéro de sécurité sociale, des détails de votre dossier ou vos coordonnées bancaires dans l'IA. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez avec l'aide de l'IA un plan d'affaires d'une page pour une entreprise de services simple (service, clients, prix, comment les clients vous trouveront, coûts de démarrage). Puis faites votre liste de démarches : votre forme d'entreprise, le nom de votre entreprise et s'il faut un DBA, l'obtention d'un EIN gratuit sur irs.gov, les licences à vérifier auprès de votre ville, de votre comté et de votre État, l'ouverture d'un compte bancaire séparé, et la façon dont vous tiendrez vos registres et mettrez de l'argent de côté pour les impôts. Indiquez le site officiel de chaque étape.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et qui veulent travailler à leur compte avec une petite entreprise de services, comme le ménage, l'entretien des pelouses, l'aide au déménagement, le nettoyage de voitures, la coiffure pour hommes, la cuisine, la peinture ou les petits travaux.",
    startingPoint: "Ils ont des compétences pratiques et savent utiliser un téléphone. Ils ont peu ou pas d'expérience avec les plans d'affaires, les prix, l'enregistrement d'une entreprise, l'EIN, les licences, les comptes bancaires professionnels ou les registres pour les impôts.",
    gap: "Certains employeurs hésitent à embaucher des personnes avec un casier judiciaire, et le travail à son compte peut apporter un revenu et de l'indépendance. Les apprenants doivent transformer une compétence en une entreprise bien préparée et suivre les étapes officielles de création aux États-Unis, pour éviter les arnaques, les amendes et les problèmes d'impôts.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes (fin d'école primaire environ)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque avec internet",
      "Temps : des leçons d'environ 5 minutes, à caser autour du travail et des rendez-vous",
      "Les règles varient selon l'État, le comté et la ville, et elles changent ; le cours renvoie aux sites officiels et ne donne pas de conseil juridique ou fiscal",
      "Vie privée : ne jamais taper un numéro de sécurité sociale, des détails de dossier ou des coordonnées bancaires dans l'IA"
    ],
    prerequisites: "Le cours « Gérer son argent et sa vie avec l'IA » est utile, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de vos compétences et de l'argent avec lequel vous pourriez démarrer", action: "choisir une idée d'entreprise adaptée à vos compétences, à votre argent et à votre situation", standard: "avec de faibles coûts de démarrage et toute licence d'État obligatoire vérifiée" },
    { id: "O2", condition: "À partir de votre idée d'entreprise", action: "décrire vos clients et fixer un prix de départ", standard: "avec une phrase précise sur vos clients et un prix qui couvre les coûts, le temps et les impôts" },
    { id: "O3", condition: "Avec un assistant d'IA qui vous pose des questions", action: "rédiger un plan d'affaires d'une page", standard: "qui couvre le service, les clients, le prix, la façon dont les clients vous trouvent et les coûts de démarrage, avec des faits que vous avez donnés vous-même" },
    { id: "O4", condition: "À partir de votre idée et du nom de votre entreprise", action: "choisir une forme d'entreprise et vérifier si votre nom doit être enregistré comme DBA", standard: "avec la raison de votre choix et la page officielle du gouvernement trouvée" },
    { id: "O5", condition: "Avec irs.gov et les sites de vos autorités locales", action: "trouver la demande gratuite d'EIN et les licences dont votre entreprise a besoin", standard: "avec l'adresse web officielle de chacune, et sans service payant pour l'EIN" },
    { id: "O6", condition: "Pour une nouvelle entreprise", action: "prévoir un compte bancaire séparé, des registres simples, de l'argent pour les impôts et de l'aide gratuite", standard: "avec un registre qui note la date, qui, quoi et combien, et le bureau SCORE ou SBDC le plus proche nommé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier votre entreprise",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir une activité que vous pouvez lancer maintenant",
          minutes: 5,
          goal: "Choisir une idée d'entreprise adaptée à vos compétences, à votre argent et à votre situation.",
          text: [
            "La meilleure première entreprise est souvent simple : un service que vous savez déjà faire, qui demande peu d'argent pour démarrer et que les gens de votre quartier paient. Exemples : ménage de maisons ou de bureaux, entretien de pelouses, nettoyage haute pression, débarras, aide au déménagement, nettoyage de voitures, peinture, cuisine, coiffure, couture ou réparations.",
            "Demandez à un assistant d'IA de vous aider à réfléchir : \"J'ai appris la cuisine et le ménage et j'ai environ 300 $ pour démarrer. Je n'ai pas encore de voiture. Propose cinq petites entreprises de services que je pourrais lancer dans ma ville, avec ce dont chacune a besoin pour commencer.\"",
            "Certains métiers demandent une licence de l'État, comme la coiffure, l'esthétique, l'électricité ou les travaux du bâtiment, et certains organismes de délivrance des licences ont des règles pour les personnes qui ont un casier judiciaire. Avant de choisir l'un de ces métiers, consultez le site officiel de l'organisme de votre État ou demandez à un programme de réinsertion. Beaucoup d'États ont changé ces règles, alors ne supposez pas que la porte vous est fermée."
          ],
          steps: ["Listez vos compétences et ce que vous aimez faire.", "Notez l'argent et les outils dont vous disposez pour démarrer, comme une voiture.", "Demandez à l'IA quelques idées d'entreprise qui vous correspondent.", "Vérifiez si une idée demande une licence de l'État.", "Choisissez une idée à planifier."],
          words: [["Entreprise de services", "une entreprise qui fait un travail pour les gens, comme le ménage ou les réparations, au lieu de vendre des produits."], ["Coûts de démarrage", "l'argent nécessaire pour commencer, comme les outils et les fournitures."], ["Organisme de délivrance des licences", "le service de l'État qui donne les licences pour certains métiers."]],
          slides: [
            { title: "Commencez simple", bullets: ["Un service que vous connaissez déjà", "Peu d'argent pour démarrer", "Les gens du coin le paient"] },
            { title: "Demandez des idées à l'IA", bullets: ["Vos compétences", "Votre budget et vos outils", "\"Propose cinq entreprises que je pourrais lancer.\""] },
            { title: "Un métier sous licence ?", bullets: ["Coiffure, électricité, bâtiment et plus", "Consultez l'organisme de votre État", "Les règles ont changé dans beaucoup d'États"] }
          ],
          tryIt: "Écrivez vos trois meilleures compétences et la somme avec laquelle vous pourriez démarrer. Demandez à un assistant d'IA cinq idées de petites entreprises qui vous correspondent, puis choisissez-en une.",
          youCanNow: "choisir une idée de petite entreprise adaptée à vos compétences et à votre argent.",
          quickCheck: [
            { objective: "O1", q: "Que sont les coûts de démarrage ?", options: ["L'argent nécessaire pour commencer, comme les outils et les fournitures", "Votre bénéfice de la semaine", "Les impôts que vous devez chaque année", "Le prix que vous demandez aux clients"], answer: 0, why: "Les coûts de démarrage sont ce que vous dépensez pour lancer l'entreprise." },
            { objective: "O1", q: "Vous voulez créer une entreprise de réparations électriques. Que faites-vous d'abord ?", options: ["Commencer à prendre des chantiers tout de suite", "Demander à l'IA s'il faut une licence et croire sa réponse", "Consulter le site officiel de l'organisme de licences de votre État", "Imprimer des cartes de visite"], answer: 2, why: "Beaucoup de métiers demandent une licence d'État, et l'organisme officiel a les vraies règles." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Clients et prix",
          minutes: 5,
          goal: "Décrire vos clients et fixer un prix de départ qui couvre vos coûts.",
          text: [
            "Une entreprise a besoin de clients qui paient. Soyez précis sur qui ils sont : \"les familles occupées de mon quartier\", \"les petits bureaux du centre-ville\", \"les propriétaires âgés qui ne peuvent plus tondre\". Les connaître vous dit où les trouver.",
            "Pour fixer un prix, additionnez vos coûts pour un travail (fournitures, essence ou ticket de bus, et votre temps), puis regardez ce que demandent les autres près de chez vous. Demandez à l'IA : \"Je veux proposer un ménage de base à Atlanta. Mes fournitures coûtent environ 10 $ par travail et un travail prend 3 heures. Comment calculer un prix de départ juste ? Que dois-je vérifier sur les prix locaux ?\" Puis vérifiez les vrais prix locaux en regardant des annonces ou en appelant quelques entreprises.",
            "Ne fixez pas un prix si bas que vous perdez de l'argent. Un prix doit payer vos coûts, votre temps, et un petit plus pour les impôts et l'épargne."
          ],
          steps: ["Décrivez vos clients en une phrase.", "Additionnez vos coûts pour un travail.", "Décidez combien vaut une heure de votre temps.", "Regardez ce que demandent les autres près de chez vous.", "Fixez un prix qui couvre les coûts, le temps et les impôts."],
          words: [["Client", "une personne ou une entreprise qui paie pour votre service."], ["Bénéfice", "l'argent qui reste après avoir payé vos coûts."]],
          slides: [
            { title: "Connaissez vos clients", bullets: ["Soyez précis", "\"Les familles occupées de mon quartier\"", "Cela vous dit où les trouver"] },
            { title: "Calculez votre prix", bullets: ["Coûts pour un travail", "Votre temps", "Ce que demandent les autres près de chez vous"] },
            { title: "Pas trop bas", bullets: ["Couvrez les coûts et le temps", "Gardez de la marge pour les impôts et l'épargne"] }
          ],
          tryIt: "Pour votre idée, écrivez une phrase qui décrit vos clients. Demandez à l'IA de vous aider à calculer un prix de départ à partir de vos coûts et de votre temps, puis vérifiez deux vrais prix locaux.",
          youCanNow: "décrire vos clients et fixer un prix de départ qui couvre vos coûts.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que le bénéfice ?", options: ["Tout l'argent que les clients vous paient", "L'argent qui reste après les coûts", "Le prix de vos outils", "L'argent que vous empruntez"], answer: 1, why: "Le bénéfice est ce qui reste après avoir payé vos coûts." },
            { objective: "O2", q: "L'IA propose un prix pour l'entretien des pelouses qui semble très bas. Que faites-vous ?", options: ["L'utiliser pour avoir plus de clients", "Le doubler sans réfléchir", "Demander à des amis de deviner un prix", "Vérifier vos coûts et votre temps, puis comparer avec deux vrais prix du coin"], answer: 3, why: "Un prix doit couvrir vos coûts et votre temps, et les prix du coin montrent ce que les clients paient." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Un plan d'affaires d'une page avec l'IA",
          minutes: 6,
          goal: "Rédiger un plan d'affaires d'une page avec un assistant d'IA.",
          text: [
            "Un plan d'affaires est votre carte. La SBA (l'agence américaine pour les petites entreprises) décrit un plan court de type \"lean startup\" qui tient sur une page, avec des éléments comme vos clients, la valeur que vous apportez, comment vous atteignez vos clients, vos coûts et comment vous gagnez de l'argent.",
            "Demandez à l'IA : \"Aide-moi à écrire un plan d'affaires d'une page pour une entreprise d'entretien de pelouses dans ma ville. Utilise ces titres : ce que je propose, qui sont mes clients, pourquoi ils me choisiraient, comment ils me trouveront, coûts de démarrage, prix, et mon objectif du premier mois. Pose-moi les questions une par une pour le remplir.\" Répondez avec vos propres mots.",
            "Relisez attentivement le plan terminé. Changez tout ce qui n'est pas vrai ou pas réaliste. Vous pouvez le montrer à un mentor ; SCORE propose un mentorat gratuit (voir la leçon 6)."
          ],
          steps: ["Demandez à l'IA de vous interroger une question à la fois.", "Utilisez des titres simples : offre, clients, pourquoi vous, comment ils vous trouvent, coûts, prix, premier objectif.", "Répondez avec vos propres mots.", "Corrigez ce qui n'est pas réaliste.", "Enregistrez-le et montrez-le à un mentor."],
          words: [["Plan d'affaires", "un plan écrit qui explique comment votre entreprise fonctionnera et gagnera de l'argent."], ["Plan \"lean startup\"", "un plan d'affaires court, d'une page."]],
          slides: [
            { title: "Votre carte d'une page", bullets: ["Le plan \"lean startup\" de la SBA tient sur une page", "Clients, valeur, moyens de les atteindre, coûts, revenus"] },
            { title: "Laissez l'IA vous interroger", bullets: ["\"Pose-moi les questions une par une.\"", "Répondez avec vos propres mots"] },
            { title: "Rendez-le réaliste", bullets: ["Corrigez ce qui ne l'est pas", "Montrez-le à un mentor"] }
          ],
          sources: [{ name: "SBA : rédiger votre plan d'affaires (en anglais)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Demandez à un assistant d'IA de vous interroger une question à la fois et d'écrire un plan d'une page pour votre idée d'entreprise. Enregistrez le plan.",
          youCanNow: "rédiger un plan d'affaires d'une page avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un plan d'affaires « lean startup » ?", options: ["Un rapport de 50 pages pour une banque", "Un plan court, d'une page", "Une liste de noms d'entreprise", "Un formulaire d'impôts"], answer: 1, why: "Un plan « lean » tient les éléments clés d'une entreprise sur une seule page." },
            { objective: "O3", q: "L'IA a rédigé votre plan et a ajouté un nombre de clients que vous ne lui avez jamais donné. Que faites-vous ?", options: ["Le retirer ou le remplacer par vos vrais faits", "Le garder, car il fait bien", "Ajouter d'autres chiffres du même genre", "Envoyer le plan tel quel à un prêteur"], answer: 0, why: "C'est vous qui donnez les faits de votre plan, pas l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier votre entreprise",
        questions: [
          { objective: "O1", q: "Quelle est en général la meilleure première entreprise ?", options: ["Une activité que vous ne connaissez pas du tout", "Une entreprise qui demande 100 000 $ pour démarrer", "Un service simple que vous connaissez déjà, avec peu de coûts de démarrage", "Une activité sans clients près de chez vous"], answer: 2, why: "Des coûts bas et des compétences connues réduisent le risque." },
          { objective: "O1", q: "Vous voulez être coiffeur-barbier. Que devez-vous vérifier d'abord ?", options: ["Les règles de l'organisme de délivrance des licences de votre État", "Rien", "Une rumeur sur les réseaux sociaux", "Seulement l'IA"], answer: 0, why: "La coiffure demande une licence de l'État, et ce sont ces organismes qui fixent les règles." },
          { objective: "O2", q: "Quelle description des clients est la plus utile ?", options: ["\"N'importe qui avec de l'argent\"", "\"Tout le monde\"", "\"Les gens\"", "\"Les propriétaires âgés de mon quartier qui ne peuvent plus tondre\""], answer: 3, why: "Des clients précis vous disent où les trouver." },
          { objective: "O2", q: "Un bon prix couvre :", options: ["Seulement les fournitures", "Vos coûts, votre temps et une part pour les impôts", "Rien ; travaillez gratuitement", "Le prix du concurrent le moins cher, même à perte"], answer: 1, why: "Les prix doivent couvrir les coûts et vous payer." },
          { objective: "O3", q: "Comment l'IA peut-elle le mieux aider à rédiger un plan d'affaires ?", options: ["Inventer des faits sur votre entreprise", "Vous interroger une question à la fois", "Signer des papiers juridiques", "Obtenir votre EIN pour vous"], answer: 1, why: "Vous fournissez les faits ; l'IA les organise." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire les démarches officielles",
      lessons: [
        {
          objectives: ["O4"],
          title: "Forme d'entreprise et nom de l'entreprise",
          minutes: 6,
          goal: "Choisir une forme d'entreprise et savoir si le nom de votre entreprise doit être enregistré.",
          text: [
            "La SBA explique que si vous commencez une activité sans vous enregistrer sous une autre forme, vous êtes automatiquement une entreprise individuelle (sole proprietorship). C'est la forme la plus simple : vous et l'entreprise ne faites qu'un pour les impôts et les dettes, donc vous êtes personnellement responsable des dettes de l'entreprise.",
            "Une société à responsabilité limitée (LLC) est enregistrée auprès de votre État, en général par le Secretary of State (le bureau du secrétaire d'État), et protège en général vos biens personnels si l'entreprise est poursuivie ou s'endette, même si cette protection a des limites. Sa création coûte de l'argent et il peut y avoir des frais annuels, qui varient selon l'État ; consultez le site de votre Secretary of State pour connaître le coût actuel.",
            "Si vous utilisez un nom d'entreprise qui n'est pas votre nom légal, comme \"Fresh Start Cleaning\", la plupart des États exigent de l'enregistrer comme DBA (\"doing business as\", nom commercial) auprès de l'État, du comté ou de la ville. Si vous travaillez sous votre propre nom légal, la SBA dit que vous n'avez peut-être besoin de l'enregistrer nulle part. Demandez à un professionnel de la fiscalité ou à un partenaire de la SBA quelle forme vous convient."
          ],
          steps: ["Décidez : entreprise individuelle (automatique) ou LLC (enregistrée auprès de l'État).", "Pour une LLC, consultez les coûts sur le site de votre Secretary of State.", "Choisissez un nom d'entreprise.", "Si ce n'est pas votre nom légal, trouvez où enregistrer un DBA dans votre État, votre comté ou votre ville.", "Demandez à un professionnel de la fiscalité ou à un partenaire de la SBA si vous hésitez."],
          words: [["Entreprise individuelle", "une entreprise qui appartient à une seule personne, sans séparation entre le propriétaire et l'entreprise."], ["LLC", "société à responsabilité limitée : une entreprise enregistrée qui protège en général les biens personnels du propriétaire."], ["DBA", "\"doing business as\" : un nom commercial enregistré qui n'est pas votre nom légal."]],
          slides: [
            { title: "Entreprise individuelle", bullets: ["Automatique dès que vous commencez", "La plus simple", "Vous êtes personnellement responsable des dettes"] },
            { title: "LLC", bullets: ["Enregistrée auprès de votre État", "Protège en général vos biens personnels", "Les coûts varient : voyez votre Secretary of State"] },
            { title: "Le nom de votre entreprise", bullets: ["Pas votre nom légal ? En général, enregistrez un DBA", "Auprès de votre État, comté ou ville", "Les règles varient : vérifiez localement"] }
          ],
          sources: [{ name: "SBA : choisir une forme d'entreprise (en anglais)", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }, { name: "SBA : enregistrer votre entreprise (en anglais)", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" }],
          tryIt: "Décidez si vous commenceriez en entreprise individuelle ou en LLC, et écrivez pourquoi. Choisissez un nom d'entreprise, puis cherchez \"register DBA\" avec le nom de votre comté ou de votre État et trouvez la page officielle du gouvernement (qui finit souvent par .gov).",
          youCanNow: "choisir une forme d'entreprise et savoir comment enregistrer le nom de votre entreprise.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire DBA ?", options: ["Compte d'entreprise quotidien", "Service des affaires des entreprises", "« Doing business as », c'est-à-dire « exerçant sous le nom de »", "Autorisation bancaire directe"], answer: 2, why: "DBA veut dire « exerçant sous le nom de » : un nom différent de votre nom légal." },
            { objective: "O4", q: "Vous voulez appeler votre entreprise « Shine Car Care ». Que faites-vous ?", options: ["L'utiliser sans rien vérifier", "Chercher la page DBA officielle de votre comté ou de votre État", "Payer un site web au hasard pour l'enregistrer", "Demander à l'IA de l'enregistrer pour vous"], answer: 1, why: "La plupart des États demandent d'enregistrer, sur un site officiel, un nom d'entreprise différent de votre nom légal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Votre EIN gratuit et les bonnes licences",
          minutes: 6,
          goal: "Trouver la demande gratuite d'EIN de l'IRS et les licences et permis dont votre entreprise a besoin.",
          text: [
            "Un EIN (Employer Identification Number) est un numéro d'identification fiscale pour votre entreprise. L'IRS écrit que vous n'avez jamais à payer de frais pour obtenir un EIN, et met en garde contre les sites qui le font payer. Faites la demande directement sur irs.gov. Si elle est acceptée, le numéro est délivré tout de suite en ligne. Vous devez finir en une seule fois, alors prévoyez du temps ; l'outil en ligne n'est ouvert qu'à certaines heures, indiquées sur irs.gov. Les entrepreneurs individuels sans employés peuvent souvent utiliser leur numéro de sécurité sociale à la place, mais beaucoup prennent un EIN pour séparer le professionnel du personnel.",
            "Les licences et les permis viennent de différents niveaux de gouvernement. La SBA explique que les licences fédérales ne concernent que certaines activités (comme l'alcool ou l'aviation) ; les États délivrent des licences pour beaucoup de métiers ; et les villes et les comtés exigent souvent une licence d'entreprise générale et des permis pour des choses comme la nourriture, le bâtiment ou la vente sur la voie publique.",
            "Pour trouver les vôtres : consultez les sites de votre ville et de votre comté pour la licence d'entreprise, le site de votre État pour les licences de métier et l'inscription à la taxe sur les ventes si vous vendez des produits, et demandez à votre Small Business Development Center (centre local d'aide aux petites entreprises). Ne tapez vos vrais numéros que sur les sites officiels en .gov, jamais dans l'IA."
          ],
          steps: ["Allez sur irs.gov et cherchez \"apply for an EIN\" ; ne payez jamais un site pour l'obtenir.", "Vérifiez les heures d'ouverture en ligne et finissez en une seule fois.", "Imprimez ou enregistrez la confirmation de votre EIN.", "Consultez votre ville et votre comté pour la licence d'entreprise et les permis.", "Consultez votre État pour les licences de métier et l'inscription à la taxe sur les ventes."],
          words: [["EIN", "Employer Identification Number : un numéro d'identification fiscale gratuit délivré par l'IRS à une entreprise."], ["Licence", "une autorisation officielle du gouvernement pour exploiter une entreprise ou faire certains travaux."], ["Permis", "une autorisation officielle pour une activité précise, comme vendre de la nourriture."]],
          slides: [
            { title: "EIN : gratuit auprès de l'IRS", bullets: ["Jamais de frais à payer pour un EIN", "Demande sur irs.gov, délivré tout de suite en ligne", "À finir en une seule fois, aux heures d'ouverture"] },
            { title: "Les licences viennent de 3 niveaux", bullets: ["Fédéral : seulement certaines activités", "État : beaucoup de métiers, taxe sur les ventes", "Ville et comté : licence d'entreprise, permis"] },
            { title: "Trouvez les vôtres", bullets: ["Sites de la ville et du comté", "Site de l'État", "Demandez à votre SBDC local"] }
          ],
          sources: [{ name: "IRS : obtenir un numéro d'identification d'employeur (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA : demander des licences et des permis (en anglais)", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" }],
          tryIt: "Ouvrez la page EIN de l'IRS sur irs.gov et notez les heures d'ouverture en ligne et ce qu'il faut pour faire la demande (ne la faites pas encore si vous n'êtes pas prêt). Puis trouvez la page de licence d'entreprise de votre ville ou de votre comté et notez son adresse web.",
          youCanNow: "obtenir un EIN gratuit auprès de l'IRS et trouver les licences et permis dont votre entreprise a besoin.",
          quickCheck: [
            { objective: "O5", q: "D'où vient en général une licence commerciale générale ?", options: ["De l'IRS", "De votre banque", "D'un site web privé", "De votre ville ou de votre comté"], answer: 3, why: "Les licences commerciales générales sont en général délivrées par votre ville ou votre comté." },
            { objective: "O5", q: "Un site web propose de vous obtenir un EIN pour 150 $. Que faites-vous ?", options: ["Payer, car c'est plus rapide", "Faire plutôt la demande gratuite sur irs.gov", "Demander à un ami de payer", "Ne jamais demander d'EIN"], answer: 1, why: "L'IRS donne les EIN gratuitement sur son propre site." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Compte bancaire, registres, impôts et aide gratuite",
          minutes: 6,
          goal: "Tenir des registres d'argent simples, prévoir les impôts et trouver de l'aide gratuite pour votre entreprise.",
          text: [
            "Gardez l'argent de l'entreprise à part. La SBA conseille d'ouvrir un compte bancaire professionnel dès que vous commencez à recevoir ou à dépenser de l'argent pour l'entreprise. Les banques demandent souvent un EIN (ou votre numéro de sécurité sociale pour une entreprise individuelle), les documents de création et une licence d'entreprise ; demandez à votre banque ce dont elle a besoin.",
            "Notez chaque dollar qui entre et qui sort : un simple tableur ou un cahier avec la date, qui, quoi et combien, plus les reçus. L'IA peut vous créer une fiche simple : \"Fais-moi un registre simple des recettes et des dépenses pour une entreprise de ménage.\" N'y collez pas de vraies coordonnées bancaires.",
            "Impôts : l'IRS dit que les travailleurs indépendants doivent remplir une déclaration d'impôts si leurs gains nets atteignent 400 $ ou plus, et qu'ils paient en général l'impôt sur le travail indépendant (Social Security et Medicare) en plus de l'impôt sur le revenu, souvent par acomptes trimestriels. Les formulaires sont notamment le Schedule C, le Schedule SE et le formulaire 1040-ES. Beaucoup de patrons mettent de côté une partie de chaque paiement pour les impôts ; un professionnel de la fiscalité ou une aide fiscale gratuite peut vous dire combien. Aide gratuite pour votre entreprise : SCORE propose des mentors bénévoles gratuitement, et les Small Business Development Centers et les Women's Business Centers (centres pour les entreprises de femmes) offrent des conseils ; trouvez-les sur sba.gov."
          ],
          steps: ["Ouvrez un compte bancaire professionnel séparé ; demandez à la banque ce dont elle a besoin.", "Tenez un registre de chaque dollar qui entre et qui sort, avec les reçus.", "Mettez de côté une partie de chaque paiement pour les impôts.", "Découvrez les formulaires : Schedule C, Schedule SE, 1040-ES sur irs.gov.", "Obtenez de l'aide gratuite auprès de SCORE, d'un SBDC ou d'un Women's Business Center."],
          words: [["Impôt sur le travail indépendant", "les cotisations Social Security et Medicare que paient les travailleurs indépendants aux États-Unis."], ["Acompte d'impôt (estimated tax)", "un impôt payé pendant l'année, en général chaque trimestre, quand aucun employeur ne le retient."], ["Dépense", "l'argent que vous dépensez pour faire tourner l'entreprise."]],
          slides: [
            { title: "Gardez l'argent de l'entreprise à part", bullets: ["Ouvrez un compte bancaire professionnel", "La banque demande EIN ou SSN, documents, licence"] },
            { title: "Tenez des registres", bullets: ["Chaque dollar qui entre et qui sort", "Date, qui, quoi, combien, reçus", "L'IA peut créer le registre ; pas de données bancaires"] },
            { title: "Prévoyez les impôts", bullets: ["Déclaration si les gains nets atteignent 400 $", "Impôt des indépendants plus impôt sur le revenu", "Schedule C, Schedule SE, 1040-ES"] },
            { title: "Aide gratuite", bullets: ["Mentors SCORE gratuits", "Small Business Development Centers", "Trouvez-les sur sba.gov"] }
          ],
          sources: [{ name: "SBA : ouvrir un compte bancaire professionnel (en anglais)", url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account" }, { name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "SBA : partenaires d'accompagnement (en anglais)", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          tryIt: "Tâche finale : terminez votre plan d'une page et faites votre liste de démarches avec un site officiel pour chaque étape : forme d'entreprise, nom et DBA, EIN gratuit sur irs.gov, licences de la ville, du comté et de l'État, compte bancaire séparé, registre créé avec l'IA, argent mis de côté pour les impôts, et le SCORE ou SBDC le plus proche.",
          youCanNow: "planifier une petite entreprise et faire les démarches officielles, avec des registres, un plan pour les impôts et de l'aide gratuite.",
          quickCheck: [
            { objective: "O6", q: "Que doit contenir un bon registre d'entreprise ?", options: ["La date, qui, quoi et combien, avec les reçus", "Seulement le total de l'année", "Votre numéro de sécurité sociale", "Seulement l'argent reçu"], answer: 0, why: "Des registres clairs avec les reçus aident au moment des impôts et montrent comment va l'entreprise." },
            { objective: "O6", q: "On vous paie en liquide pour un ménage. Que faites-vous ?", options: ["Tout dépenser tout de suite", "Ne rien noter, puisque c'est en liquide", "Le noter, le mettre sur votre compte d'entreprise et en garder une partie pour les impôts", "Le mettre sur le compte d'un ami"], answer: 2, why: "Noter les revenus, séparer l'argent de l'entreprise et mettre de côté pour les impôts vous évite les ennuis." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire les démarches officielles",
        questions: [
          { objective: "O4", q: "Vous commencez à faire des ménages sans enregistrer de forme d'entreprise. Vous êtes :", options: ["Une association à but non lucratif", "Une LLC", "Une société anonyme", "Une entreprise individuelle"], answer: 3, why: "La SBA dit que l'entreprise individuelle se crée automatiquement." },
          { objective: "O4", q: "Le nom de votre entreprise est \"Fresh Start Cleaning\", pas votre nom légal. La plupart des États exigent :", options: ["De l'enregistrer comme DBA", "Rien du tout", "Une licence fédérale", "D'abord une marque déposée"], answer: 0, why: "Un nom commercial doit en général être enregistré comme DBA." },
          { objective: "O5", q: "Combien l'IRS fait-il payer un EIN ?", options: ["250 $", "50 $", "Rien ; c'est gratuit", "Cela dépend du site"], answer: 2, why: "L'IRS dit que vous n'avez jamais à payer de frais pour un EIN." },
          { objective: "O5", q: "D'où vient en général une licence d'entreprise générale ?", options: ["D'un site privé", "De l'IRS", "De la FAA", "De votre ville ou de votre comté"], answer: 3, why: "Les villes et les comtés délivrent les licences d'entreprise générales." },
          { objective: "O6", q: "Les travailleurs indépendants doivent remplir une déclaration d'impôts si leurs gains nets sont de :", options: ["Jamais", "40 000 $ ou plus", "400 $ ou plus", "Seulement plus d'un million de dollars"], answer: 2, why: "L'IRS fixe le seuil à 400 $ de gains nets d'activité indépendante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer et lancer une petite entreprise",
    questions: [
      { objective: "O1", q: "Une entreprise de services :", options: ["Vend seulement des produits", "Fait un travail pour les gens, comme le ménage ou les réparations", "Est toujours en ligne", "A besoin d'une usine"], answer: 1, why: "Les services sont un travail fait pour des clients." },
      { objective: "O1", q: "Les coûts de démarrage sont :", options: ["L'argent nécessaire pour commencer, comme les outils et les fournitures", "Votre bénéfice", "Vos impôts", "Vos clients"], answer: 0, why: "C'est ce que vous dépensez pour démarrer." },
      { objective: "O1", q: "Si un métier demande une licence de l'État, vous devez consulter :", options: ["Le site officiel de l'organisme de délivrance des licences de votre État", "Seulement l'IA", "Une rumeur", "Rien"], answer: 0, why: "Ces organismes fixent les règles, qui ont changé dans beaucoup d'États." },
      { objective: "O2", q: "Pourquoi décrire précisément vos clients ?", options: ["Cela augmente les prix", "Cela vous dit où les trouver", "L'IRS l'exige", "Cela remplace une licence"], answer: 1, why: "Des clients précis sont plus faciles à atteindre." },
      { objective: "O2", q: "Pour fixer un prix, partez de :", options: ["Le prix le plus bas de la ville, même à perte", "Un nombre au hasard", "Vos coûts pour un travail et votre temps", "Ce que dit un ami"], answer: 2, why: "Les prix doivent couvrir les coûts et le temps." },
      { objective: "O2", q: "Le bénéfice, c'est :", options: ["Un prêt", "Tout l'argent qui entre", "Votre facture d'impôts", "L'argent qui reste après les coûts"], answer: 3, why: "Bénéfice = revenus moins coûts." },
      { objective: "O3", q: "Un plan d'affaires \"lean startup\" est :", options: ["Un formulaire fiscal", "Un rapport de 100 pages", "Un plan court d'une page", "Une licence"], answer: 2, why: "La SBA le décrit comme un plan d'une page." },
      { objective: "O3", q: "Quand l'IA aide à rédiger votre plan, qui fournit les faits ?", options: ["Vous", "L'IA", "Un inconnu", "L'IRS"], answer: 0, why: "L'IA organise ; c'est vous qui connaissez votre entreprise." },
      { objective: "O4", q: "Dans une entreprise individuelle, qui est responsable des dettes de l'entreprise ?", options: ["Vos clients", "Personne", "Le gouvernement", "Vous personnellement"], answer: 3, why: "Il n'y a pas de séparation entre le propriétaire et l'entreprise." },
      { objective: "O4", q: "Une LLC est en général enregistrée auprès de :", options: ["L'IRS seulement", "Votre État, souvent le Secretary of State", "Votre banque", "Un réseau social"], answer: 1, why: "Ce sont les États qui créent les LLC." },
      { objective: "O4", q: "Où vérifier le coût actuel de la création d'une LLC ?", options: ["Seulement auprès de l'IA", "Sur le site du Secretary of State de votre État", "Dans une publicité qui s'ouvre toute seule", "Auprès d'un ami"], answer: 1, why: "Les coûts varient selon l'État et changent." },
      { objective: "O4", q: "DBA veut dire :", options: ["Dette avant actifs", "Département des affaires", "Compte bancaire quotidien", "Doing business as (nom commercial)"], answer: 3, why: "Un DBA est un nom commercial enregistré." },
      { objective: "O5", q: "Un site demande 200 $ pour vous obtenir un EIN. Vous devez :", options: ["Faire plutôt la demande gratuite sur irs.gov", "Payer", "Lui donner votre numéro de sécurité sociale", "Demander à l'IA de payer"], answer: 0, why: "L'IRS met en garde contre les sites qui font payer les EIN." },
      { objective: "O5", q: "La demande d'EIN en ligne de l'IRS :", options: ["Est ouverte 24 heures sur 24 tous les jours", "Peut être enregistrée et finie la semaine suivante", "Doit être finie en une seule fois pendant ses heures d'ouverture", "Est payante"], answer: 2, why: "L'IRS dit qu'on ne peut pas l'enregistrer et indique des heures fixes." },
      { objective: "O5", q: "Quel niveau de gouvernement délivre des licences pour beaucoup de métiers, comme l'électricité ?", options: ["La poste", "Seulement le gouvernement fédéral", "Votre banque", "L'État"], answer: 3, why: "Les États délivrent les licences de beaucoup de métiers." },
      { objective: "O5", q: "Où taper votre vrai numéro de sécurité sociale quand vous demandez un EIN ?", options: ["Dans un SMS à un inconnu", "Dans un assistant d'IA", "Seulement sur le site officiel irs.gov", "Sur n'importe quel site"], answer: 2, why: "Les numéros privés ne vont que sur les sites officiels." },
      { objective: "O6", q: "Pourquoi ouvrir un compte bancaire professionnel séparé ?", options: ["Pour éviter tous les impôts", "Pour séparer l'argent de l'entreprise et l'argent personnel", "Il remplace une licence", "Pour cacher de l'argent"], answer: 1, why: "La SBA dit que la séparation vous protège et facilite les registres." },
      { objective: "O6", q: "De bons registres d'entreprise contiennent :", options: ["La date, qui, quoi et combien, avec les reçus", "Seulement les grosses ventes", "Rien", "Vos mots de passe"], answer: 0, why: "Des registres complets facilitent les impôts." },
      { objective: "O6", q: "Quel formulaire déclare les gains ou les pertes d'une entreprise individuelle ?", options: ["Le Schedule C", "Le formulaire W-2", "Le formulaire I-9", "Le formulaire DS-11"], answer: 0, why: "L'IRS utilise le Schedule C pour les entrepreneurs individuels." },
      { objective: "O6", q: "Quel partenaire de la SBA propose des mentors bénévoles gratuitement ?", options: ["L'IRS", "SCORE", "Un prêteur sur salaire", "Une agence d'évaluation du crédit"], answer: 1, why: "Les mentors de SCORE donnent des conseils gratuitement." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      7,
      8,
      11,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan d'une page",
        objective: "O3",
        notYet: "Il manque une partie au plan, ou il contient des faits que l'apprenant n'a pas donnés.",
        meets: "Une page qui couvre le service, les clients, le prix, la façon dont les clients vous trouvent et les coûts de démarrage.",
        exceeds: "L'apprenant peut expliquer chaque partie du plan avec ses propres mots."
      },
      {
        name: "Clients et prix",
        objective: "O2",
        notYet: "Les clients sont « tout le monde », ou le prix ne couvre pas les coûts.",
        meets: "Une description précise des clients et un prix qui couvre les coûts, le temps et les impôts.",
        exceeds: "Le prix a été comparé avec deux vrais prix du coin."
      },
      {
        name: "Forme et nom",
        objective: "O4",
        notYet: "Aucune forme choisie, ou le nom n'a pas été vérifié.",
        meets: "Une forme choisie avec une raison, et la page DBA officielle trouvée si besoin.",
        exceeds: "Il note aussi où vérifier le coût actuel pour créer une LLC (société à responsabilité limitée)."
      },
      {
        name: "EIN et licences",
        objective: "O5",
        notYet: "Utilise un service payant pour l'EIN, ou aucune vérification des licences.",
        meets: "La page EIN d'irs.gov et les pages de licences de la ville, du comté et de l'État sont listées.",
        exceeds: "Il note les horaires de la demande d'EIN en ligne et ce qu'il faut avoir sous la main pour la faire."
      },
      {
        name: "Argent, registres et aide",
        objective: "O6",
        notYet: "Pas de compte séparé ni de plan pour les registres.",
        meets: "Un compte bancaire séparé, un registre, de l'argent mis de côté pour les impôts et un bureau SCORE ou SBDC nommé.",
        exceeds: "Le registre contient une première entrée, réelle ou d'exercice, avec un reçu."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui obtiennent un EIN ou enregistrent une entreprise dans les 90 jours (enquête de suivi)",
      "Les apprenants qui gagnent un revenu avec leur entreprise dans les 90 jours",
      "Les apprenants qui rencontrent un mentor SCORE ou un conseiller SBDC dans les 60 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Du papier et un stylo, ou une application de notes gratuite, pour le plan et la liste de contrôle",
      "Environ 60 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Avant la séance, cherchez les pages pour les entreprises de votre État, de votre comté et de votre ville, pour montrer aux apprenants les vrais sites locaux.",
      "Ne demandez jamais aux apprenants de taper un numéro de sécurité sociale, des détails de dossier ou des coordonnées bancaires dans l'IA ou sur un écran partagé ; la demande d'EIN se fait seulement sur irs.gov, en privé.",
      "Envoyez les questions sur les licences et les condamnations passées à l'organisme de licences de l'État, pas à l'IA.",
      "Ce cours ne donne pas de conseil juridique ou fiscal ; si vous le pouvez, invitez à une séance un mentor SCORE ou un conseiller SBDC de votre région.",
      "Notez la tâche finale avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
