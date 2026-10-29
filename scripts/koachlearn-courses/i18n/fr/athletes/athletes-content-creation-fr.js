"use strict";

// Koach Learn course (French translation of athletes/athletes-content-creation.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-content-creation-fr",
  lang: "fr",
  translationOf: "athletes-content-creation",
  category: "Athletes",
  name: "Création de contenu pour les athlètes",
  skills: "Préparer une courte vidéo avec une accroche, Filmer avec un téléphone, Monter avec une application gratuite, Écrire des légendes et du texte à l'écran avec l'IA, Construire un calendrier de contenu sur deux semaines",
  outcome: "préparer, filmer, monter et publier une vidéo d'athlète de 30 à 60 secondes avec une accroche forte, des sous-titres clairs et du texte à l'écran, et planifier les deux semaines de contenu suivantes dans un calendrier simple.",
  about: [
    "Ce cours s'adresse aux athlètes et aux entraîneurs qui veulent faire de courtes vidéos que les gens regardent vraiment : extraits d'entraînement, moments de match, coulisses et conseils.",
    "Il vous suffit d'un téléphone et d'outils gratuits. Vous allez préparer une vidéo avec une accroche, bien la filmer, la monter avec une application gratuite comme CapCut ou l'éditeur intégré de votre téléphone, écrire des légendes avec l'aide de l'IA et planifier deux semaines de publications.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Réalisez et publiez une vidéo d'athlète de 30 à 60 secondes : un plan écrit en trois parties (accroche, valeur, fin), filmé sur votre téléphone avec une bonne lumière et un bon son, monté avec du texte à l'écran et des sous-titres, et une légende écrite avec l'IA puis retouchée par vous. Remplissez ensuite un calendrier de contenu sur deux semaines avec six autres idées de publication.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes de lycée, d'université et de club, et des entraîneurs, qui veulent faire de courtes vidéos que les gens regardent vraiment : extraits d'entraînement, moments de jour de match, coulisses et conseils.",
    startingPoint: "Ils filment et publient avec un téléphone et regardent des vidéos courtes tous les jours. La plupart filment sans plan, publient des extraits avec des temps morts, sans sous-titres et avec de la musique empruntée, et publient quand ils y pensent plutôt que selon un calendrier.",
    gap: "Les vidéos sans plan perdent les spectateurs dès les premières secondes, peuvent être rendues muettes à cause de la musique et peuvent enfreindre les règles de mention quand des marques sont impliquées. Une vidéo préparée, bien filmée et sous-titrée, et un calendrier simple permettent aux athlètes de partager leur histoire régulièrement sans nuire à l'entraînement ni aux études.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone avec caméra, une application de montage gratuite et un assistant IA gratuit",
      "Environ 60 minutes de leçons, plus le temps de filmer et de monter une vidéo",
      "L'autorisation de filmer les coéquipiers, les entraîneurs et les autres personnes ; les règles de tournage de l'équipe",
      "Seulement de la musique sous licence ; les règles de mention de la FTC et les règles NIL dès qu'une marque est impliquée"
    ],
    prerequisites: "Aucun. « Image de marque sur les réseaux sociaux pour les sportifs » vous aide d'abord à choisir vos thèmes de contenu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une idée tirée de vos thèmes de contenu", action: "préparer une courte vidéo avec une accroche, de la valeur et une fin", standard: "avec une accroche pour les 1 à 3 premières secondes et un appel à l'action ou une fin claire, écrits avant de filmer" },
    { id: "O2", condition: "Avec votre téléphone", action: "filmer des plans verticaux nets, avec une bonne lumière, un cadrage stable et un son clair", standard: "face à la lumière, avec l'action au centre et l'autorisation de toute autre personne à l'image" },
    { id: "O3", condition: "À partir de vos plans", action: "choisir et ordonner des plans larges, moyens et serrés pour raconter une histoire problème, travail, résultat", standard: "avec chaque plan au service de l'histoire et aucun résultat truqué" },
    { id: "O4", condition: "Avec une application de montage gratuite", action: "monter vos plans en une vidéo de 30 à 60 secondes avec du texte à l'écran, des sous-titres et une musique sous licence", standard: "sans temps mort, avec un texte lisible sur un téléphone et des sous-titres vérifiés" },
    { id: "O5", condition: "Avec un assistant IA", action: "écrire une légende de publication avec votre voix et quelques hashtags pertinents", standard: "en identifiant seulement les personnes qui sont d'accord, et en mentionnant tout avantage reçu d'une marque dans la vidéo et au début de la légende" },
    { id: "O6", condition: "Avec Google Sheets ou une application de notes", action: "planifier deux semaines de publications dans un calendrier de contenu", standard: "avec 3 à 4 publications par semaine, des colonnes Date, Thème, Idée, Format et Statut, et les semaines chargées bloquées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer et filmer",
      lessons: [
        {
          objectives: ["O1"],
          title: "La courte vidéo en trois parties",
          minutes: 5,
          goal: "Préparer une courte vidéo avec une accroche, de la valeur et une fin.",
          text: [
            "Les courtes vidéos sont souvent regardées une ou deux secondes seulement avant que les gens ne fassent défiler. Le premier moment, appelé l'accroche, décide s'ils restent.",
            "Prévoyez trois parties : 1. L'accroche (les 1 à 3 premières secondes) : une question, un moment surprenant ou une phrase forte comme « L'exercice qui a corrigé mon tir en suspension. » 2. La valeur (le milieu) : montrez l'exercice, le moment ou le conseil. 3. La fin : un appel à l'action comme « Enregistrez ceci pour l'entraînement » ou une fin satisfaisante.",
            "Écrivez le plan avant de filmer. Un assistant IA peut vous donner dix idées d'accroches : « Donne-moi 10 accroches courtes pour une vidéo qui montre mon échauffement de jeu de jambes de 5 minutes au basket. »"
          ],
          steps: ["Choisissez une idée parmi vos thèmes de contenu.", "Écrivez une accroche pour les 1 à 3 premières secondes.", "Listez les plans qui montrent la valeur.", "Écrivez la fin ou l'appel à l'action.", "Demandez à l'IA d'autres idées d'accroches et choisissez la meilleure."],
          words: [["Accroche", "les 1 à 3 premières secondes qui donnent envie de continuer à regarder."], ["Appel à l'action", "une prochaine étape claire que vous demandez aux spectateurs de faire."]],
          slides: [
            { title: "Pourquoi l'accroche compte", bullets: ["Les gens décident en une ou deux secondes", "Accroche = les 1 à 3 premières secondes"] },
            { title: "Trois parties", bullets: ["1. Accroche : question, surprise, phrase forte", "2. Valeur : l'exercice, le moment ou le conseil", "3. Fin : appel à l'action ou conclusion"] },
            { title: "Préparez d'abord", bullets: ["Écrivez-le avant de filmer", "Demandez à l'IA 10 idées d'accroches"] }
          ],
          tryIt: "Écrivez un plan en trois parties pour une courte vidéo. Demandez dix accroches à un assistant IA et choisissez celle qui vous correspond le mieux.",
          youCanNow: "préparer une courte vidéo avec une accroche, de la valeur et une fin.",
          quickCheck: [
            { objective: "O1", q: "Quelles sont les trois parties du plan d'une courte vidéo ?", options: ["Introduction, générique, conclusion", "Accroche, valeur et fin", "Musique, filtre, texte", "Titre, tags, lien"], answer: 1, why: "Préparez une accroche, la valeur au milieu, et une fin." },
            { objective: "O1", q: "Votre idée de vidéo est une routine d'étirements de retour au calme. Que faites-vous avant de filmer ?", options: ["Filmer et décider plus tard", "Publier une photo à la place", "Écrire l'accroche, les plans et la fin", "Demander à un coéquipier de filmer n'importe quoi"], answer: 2, why: "Écrivez le plan avant de filmer pour savoir de quels plans vous avez besoin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Filmer avec votre téléphone",
          minutes: 5,
          goal: "Filmer des plans nets avec une bonne lumière, un cadrage stable et un son clair.",
          text: [
            "La lumière : placez-vous face à la lumière, pas dos à elle. La lumière du jour d'une fenêtre ou l'ombre en extérieur est idéale. Évitez de filmer avec une fenêtre lumineuse derrière vous.",
            "Cadrage et stabilité : filmez à la verticale pour les applications de vidéos courtes, gardez le téléphone stable avec un trépied ou en vous appuyant sur quelque chose, et gardez l'action au centre de l'image. Essuyez d'abord l'objectif. Le mode ralenti est idéal pour montrer la technique.",
            "Le son : si vous parlez, rapprochez-vous du téléphone et éloignez-vous du vent et des gymnases bruyants, ou ajoutez une voix off plus tard. Demandez la permission avant de filmer des coéquipiers, des entraîneurs ou d'autres personnes, et suivez les règles de tournage de votre équipe."
          ],
          steps: ["Essuyez l'objectif.", "Placez-vous face à la lumière.", "Filmez à la verticale et sans bouger.", "Gardez l'action au centre.", "Enregistrez quelques secondes de plus avant et après chaque plan.", "Demandez la permission avant de filmer d'autres personnes."],
          words: [["Vidéo verticale", "vidéo filmée avec le téléphone debout, le format utilisé par la plupart des applications de vidéos courtes."], ["Voix off", "une voix enregistrée à part et ajoutée par-dessus la vidéo."]],
          slides: [
            { title: "La lumière", bullets: ["Face à la lumière", "Fenêtre ou ombre en extérieur", "Pas de fenêtre lumineuse derrière vous"] },
            { title: "Cadrer et stabiliser", bullets: ["Vertical pour les vidéos courtes", "Trépied ou appui sur quelque chose", "Essuyez l'objectif ; essayez le ralenti"] },
            { title: "Son et permission", bullets: ["Rapprochez-vous ou utilisez une voix off", "Demandez avant de filmer les autres"] }
          ],
          tryIt: "Filmez les plans de la vidéo que vous avez préparée. Tournez chacun deux fois et gardez la meilleure prise.",
          youCanNow: "filmer des plans nets et stables avec une bonne lumière et un bon son.",
          quickCheck: [
            { objective: "O2", q: "Comment tenir votre téléphone pour les applications de vidéos courtes ?", options: ["À la verticale", "À l'horizontale", "À l'envers", "En biais"], answer: 0, why: "Filmez à la verticale pour les applications de vidéos courtes." },
            { objective: "O2", q: "Vous filmez devant une fenêtre lumineuse et votre visage paraît sombre. Que faites-vous ?", options: ["Filmer quand même", "Ajouter un filtre plus tard", "Zoomer davantage", "Vous tourner pour faire face à la lumière de la fenêtre"], answer: 3, why: "Faites face à la lumière, ne lui tournez pas le dos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Raconter une histoire avec vos plans",
          minutes: 4,
          goal: "Choisir et ordonner les plans pour que la vidéo raconte une courte histoire.",
          text: [
            "Même une vidéo de 30 secondes peut raconter une histoire : un problème, le travail, le résultat. « Je ratais toujours mes doubles pas de la main gauche. Voici l'exercice que j'ai fait chaque jour pendant deux semaines. Regardez maintenant. »",
            "Utilisez différents plans : un plan large pour montrer où vous êtes, un plan moyen pour l'action et un gros plan pour les détails comme le jeu de jambes ou les mains. Changer de plan retient l'attention.",
            "Les coulisses et les vrais moments, comme les entraînements matinaux, les trajets en bus avec l'équipe ou un remerciement à un entraîneur, touchent souvent plus que des montages de moments forts parfaits. Restez honnête ; ne truquez pas les résultats."
          ],
          steps: ["Écrivez votre histoire en une ligne : problème, travail, résultat.", "Choisissez un plan large, un plan moyen et un gros plan.", "Mettez-les dans l'ordre de l'histoire.", "Coupez tout ce qui n'aide pas l'histoire."],
          words: [["Plan large", "montre toute la scène et l'endroit où vous êtes."], ["Gros plan", "un plan serré sur un détail, comme les mains ou les pieds."]],
          slides: [
            { title: "Une courte histoire", bullets: ["Le problème", "Le travail", "Le résultat"] },
            { title: "Variez vos plans", bullets: ["Large : où vous êtes", "Moyen : l'action", "Gros plan : les détails"] },
            { title: "Le vrai touche", bullets: ["Des moments en coulisses", "Restez honnête ; pas de faux résultats"] }
          ],
          tryIt: "Écrivez l'histoire de votre vidéo en une ligne, puis mettez vos plans dans l'ordre : au moins un plan large, un plan moyen et un gros plan.",
          youCanNow: "ordonner des plans variés en une courte histoire honnête.",
          quickCheck: [
            { objective: "O3", q: "Que montre un plan large ?", options: ["Des détails comme le jeu de jambes", "L'endroit où vous êtes", "Seulement votre visage", "La légende"], answer: 1, why: "Un plan large montre le décor ; le plan moyen montre l'action et le gros plan les détails." },
            { objective: "O3", q: "Un plan est amusant mais ne colle pas à votre histoire problème, travail, résultat. Que faites-vous ?", options: ["Le couper", "Le mettre en premier", "Le ralentir", "Le répéter deux fois"], answer: 0, why: "Coupez tout ce qui n'aide pas l'histoire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer et filmer",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'une accroche ?", options: ["Le générique de fin", "Un type de trépied", "Les 1 à 3 premières secondes qui donnent envie de continuer à regarder", "Un hashtag"], answer: 2, why: "L'accroche décide si les gens restent." },
          { objective: "O1", q: "Quelle accroche est forte ?", options: ["« L'exercice qui a corrigé mon tir en suspension »", "« Euh, salut, alors... »", "Une longue intro silencieuse", "Un écran noir"], answer: 0, why: "Elle promet tout de suite de la valeur." },
          { objective: "O2", q: "Où doit être la lumière quand vous vous filmez ?", options: ["Derrière vous", "Nulle part", "Seulement au-dessus", "Devant vous, face à vous"], answer: 3, why: "Être face à la lumière garde votre visage net." },
          { objective: "O2", q: "Avant de filmer un coéquipier, vous devez :", options: ["Le filmer en secret", "Lui demander la permission", "Publier d'abord", "Utiliser son nom sans demander"], answer: 1, why: "La permission et les règles de l'équipe passent en premier." },
          { objective: "O3", q: "Une histoire vidéo simple, c'est :", options: ["Des plans au hasard", "Le problème, le travail, le résultat", "Seulement la fin", "Seulement du texte"], answer: 1, why: "Cette structure garde l'intérêt des spectateurs." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Monter, légender et planifier",
      lessons: [
        {
          objectives: ["O4"],
          title: "Monter avec une application gratuite",
          minutes: 6,
          goal: "Monter vos plans en une vidéo serrée avec du texte et une musique que vous avez le droit d'utiliser.",
          text: [
            "Les éditeurs gratuits comme CapCut, l'application photo intégrée de votre téléphone ou les outils de montage d'Instagram, TikTok et YouTube Shorts permettent de couper les plans, de les mettre en ordre et d'ajouter du texte.",
            "Coupez serré : raccourcissez le début et la fin de chaque plan pour qu'il n'y ait pas de temps mort. Ajoutez un court texte à l'écran pour l'accroche et les points clés, assez grand pour être lu sur un téléphone. Ajoutez des sous-titres, car beaucoup de gens regardent sans le son, et vérifiez-les.",
            "La musique : utilisez la bibliothèque musicale sous licence de l'application ou des morceaux libres de droits. Utiliser une chanson populaire venue d'ailleurs peut faire couper le son de votre vidéo ou la faire supprimer, et les publications sponsorisées peuvent avoir des règles musicales plus strictes."
          ],
          steps: ["Importez vos plans dans l'ordre.", "Coupez les temps morts au début et à la fin de chaque plan.", "Ajoutez le texte d'accroche dans les premières secondes.", "Ajoutez des sous-titres et vérifiez-les.", "Ajoutez une musique de la bibliothèque de l'application.", "Regardez-la une fois en plein écran sur votre téléphone."],
          words: [["Couper", "retirer les parties d'un plan dont vous n'avez pas besoin."], ["Sous-titres", "des mots à l'écran qui montrent ce qui est dit."], ["Musique libre de droits", "une musique que vous pouvez utiliser selon sa licence sans payer à chaque utilisation."]],
          slides: [
            { title: "Éditeurs gratuits", bullets: ["CapCut", "L'éditeur intégré de votre téléphone", "Les outils de montage des applications sociales"] },
            { title: "Coupez serré", bullets: ["Pas de temps mort", "Texte d'accroche dans les premières secondes", "Sous-titres : beaucoup regardent sans le son"] },
            { title: "La musique", bullets: ["Utilisez la bibliothèque sous licence de l'appli", "Les autres chansons peuvent être coupées ou supprimées"] }
          ],
          tryIt: "Montez votre vidéo à 30-60 secondes avec un texte d'accroche, des sous-titres et une musique de la bibliothèque de l'application. Regardez-la en plein écran et coupez tout ce qui est lent.",
          youCanNow: "monter une courte vidéo serrée avec du texte, des sous-titres et une musique autorisée.",
          quickCheck: [
            { objective: "O4", q: "Où trouver la musique de votre vidéo ?", options: ["N'importe quelle chanson populaire que vous aimez", "La playlist d'un ami", "La bibliothèque musicale sous licence de l'application ou des morceaux libres de droits", "Un enregistrement de la radio"], answer: 2, why: "Des chansons venues d'ailleurs peuvent rendre votre vidéo muette ou la faire retirer." },
            { objective: "O4", q: "Les sous-titres automatiques de l'application ont mal écrit le nom de votre entraîneur. Que faites-vous ?", options: ["Laisser comme ça", "Désactiver les sous-titres", "Retirer votre entraîneur de la vidéo", "Corriger le sous-titre avant de publier"], answer: 3, why: "Ajoutez des sous-titres et vérifiez-les." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Légendes et publications avec l'IA",
          minutes: 5,
          goal: "Écrire une légende de publication avec l'aide de l'IA, avec votre voix et des mentions honnêtes.",
          text: [
            "La légende est le texte sous votre vidéo. Demandez à un assistant IA : « Écris trois légendes courtes pour ma vidéo qui montre mon échauffement de jeu de jambes. Ton amical, moins de 150 caractères, termine par une question pour obtenir des commentaires. »",
            "Choisissez-en une et faites-la sonner comme vous. Ajoutez quelques hashtags pertinents, pas des dizaines. N'identifiez des personnes que si elles sont d'accord.",
            "Si une marque vous a payé ou vous a donné quelque chose pour la vidéo, dites-le clairement dans la vidéo (à l'oral et à l'écran) et dans la légende, près du début, par exemple « Publicité » ou « Merci [marque] pour l'équipement offert ». La FTC (l'agence américaine de protection des consommateurs) dit que le mettre seulement à la fin, dans les hashtags ou dans la description ne suffit pas. Athlètes universitaires : vérifiez les règles de déclaration NIL (droits sur votre nom, image et ressemblance) auprès de votre service de conformité."
          ],
          steps: ["Demandez à l'IA trois options de légende courtes.", "Réécrivez celle choisie avec votre voix.", "Ajoutez quelques hashtags pertinents.", "Si une marque est impliquée, mentionnez-le dans la vidéo et au début de la légende.", "Publiez quand votre public est généralement en ligne."],
          words: [["Hashtag", "un mot précédé de # qui regroupe les publications sur un sujet."], ["Mention de partenariat", "une phrase claire qui dit qu'une marque vous a payé ou vous a donné quelque chose."]],
          slides: [
            { title: "L'IA rédige les légendes", bullets: ["Trois options courtes", "Terminez par une question"] },
            { title: "Faites-la vôtre", bullets: ["Votre voix", "Quelques hashtags pertinents", "N'identifiez quelqu'un qu'avec sa permission"] },
            { title: "Une marque impliquée ?", bullets: ["Dites-le et montrez-le dans la vidéo", "« Publicité » au début de la légende", "Vérifiez les règles NIL"] }
          ],
          sources: [{ name: "FTC : Disclosures 101 pour les influenceurs sur les réseaux sociaux (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Écrivez la légende de votre vidéo avec l'aide de l'IA, retouchez-la avec votre voix et publiez la vidéo.",
          youCanNow: "écrire une légende courte et honnête avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O5", q: "Combien de hashtags la leçon conseille-t-elle ?", options: ["Jamais aucun", "Quelques-uns, pertinents", "Trente ou plus", "Seulement ceux à la mode"], answer: 1, why: "Ajoutez quelques hashtags pertinents, pas des dizaines." },
            { objective: "O5", q: "Une marque de boisson pour sportifs vous a offert des boissons pour votre vidéo. Où le mentionnez-vous ?", options: ["Seulement dans les hashtags à la fin", "Seulement dans la description", "Nulle part, car ce n'était pas de l'argent", "À voix haute et à l'écran dans la vidéo, et au début de la légende"], answer: 3, why: "La FTC dit qu'une mention seulement à la fin, dans les hashtags ou dans la description ne suffit pas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Votre calendrier de contenu sur deux semaines",
          minutes: 5,
          goal: "Planifier deux semaines de publications dans un calendrier simple adapté à votre entraînement.",
          text: [
            "Publier régulièrement compte plus que publier beaucoup. Trois ou quatre publications par semaine suffisent largement à la plupart des athlètes en saison.",
            "Créez un calendrier dans Google Sheets ou une application de notes avec ces colonnes : Date, Thème (entraînement, jour de match, hors du terrain, leçons), Idée, Format (vidéo courte, photo, story) et Statut (idée, filmé, monté, publié). Regroupez votre travail : filmez plusieurs plans en une seule séance.",
            "Demandez à un assistant IA de remplir une première version à partir de vos thèmes et de votre emploi du temps, puis retouchez-la. Bloquez les semaines chargées comme les examens ou les tournois : c'est normal de publier moins à ces moments-là."
          ],
          steps: ["Créez les colonnes : Date, Thème, Idée, Format, Statut.", "Prévoyez 3 ou 4 publications par semaine pendant deux semaines.", "Demandez à l'IA de proposer des idées à partir de vos thèmes.", "Ajustez autour des matchs, des examens et des déplacements.", "Regroupez le tournage en une seule séance."],
          words: [["Calendrier de contenu", "un planning de ce que vous publierez et quand."], ["Regroupement", "faire plusieurs fois la même tâche d'un coup, comme filmer cinq plans en une seule séance."]],
          slides: [
            { title: "La régularité avant la quantité", bullets: ["3 ou 4 publications par semaine en saison"] },
            { title: "Colonnes du calendrier", bullets: ["Date, Thème, Idée", "Format, Statut"] },
            { title: "Travaillez malin", bullets: ["L'IA propose des idées", "Regroupez vos tournages", "Publiez moins les semaines chargées"] }
          ],
          tryIt: "Tâche finale : publiez votre vidéo de 30 à 60 secondes, puis construisez un calendrier de contenu sur deux semaines avec six autres idées de publication, proposées avec l'IA et ajustées à votre emploi du temps.",
          youCanNow: "planifier deux semaines de contenu dans un calendrier adapté à votre entraînement.",
          quickCheck: [
            { objective: "O6", q: "Combien de publications par semaine la leçon conseille-t-elle à la plupart des athlètes en saison ?", options: ["Trois ou quatre", "Une par mois", "Dix par jour", "Vingt"], answer: 0, why: "Publier régulièrement compte plus que publier beaucoup." },
            { objective: "O6", q: "Vous avez un tournoi le week-end prochain. Comment organisez-vous votre calendrier ?", options: ["Publier deux fois plus", "Annuler toutes les publications pendant un mois", "Bloquer cette semaine et publier moins", "Filmer pendant les matchs au lieu de jouer"], answer: 2, why: "C'est normal de publier moins pendant les semaines chargées, comme les tournois ou les examens." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Monter, légender et planifier",
        questions: [
          { objective: "O4", q: "Pourquoi ajouter des sous-titres à votre vidéo ?", options: ["Ils la rallongent", "La NCAA les exige", "Pour cacher les erreurs", "Beaucoup de gens regardent sans le son"], answer: 3, why: "Les sous-titres permettent de suivre sans le son." },
          { objective: "O4", q: "Quelle musique est la plus sûre à utiliser ?", options: ["La bibliothèque musicale sous licence de l'application", "N'importe quelle chanson de la radio", "Une chanson d'un film", "Le téléchargement d'un ami"], answer: 0, why: "Les autres chansons peuvent faire couper le son ou supprimer la vidéo." },
          { objective: "O5", q: "Une marque a payé votre vidéo. Où doit être la mention ?", options: ["Seulement dans les hashtags à la fin", "Seulement dans la description", "Dite et montrée dans la vidéo et au début de la légende", "Nulle part"], answer: 2, why: "La FTC dit que la mention doit être difficile à manquer." },
          { objective: "O6", q: "Qu'est-ce qui compte le plus pour publier ?", options: ["Publier 20 fois par jour", "Publier une seule fois par an", "Copier les autres", "Publier régulièrement"], answer: 3, why: "La régularité construit un public." },
          { objective: "O6", q: "Regrouper son travail veut dire :", options: ["Publier sans monter", "Filmer plusieurs plans en une seule séance", "Supprimer les anciennes publications", "Acheter des abonnés"], answer: 1, why: "Le regroupement fait gagner du temps pendant les périodes chargées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Création de contenu pour les athlètes",
    questions: [
      { objective: "O1", q: "Combien de temps dure l'accroche ?", options: ["La dernière minute", "Toute la vidéo", "Les 1 à 3 premières secondes", "La légende"], answer: 2, why: "Les spectateurs décident vite." },
      { objective: "O1", q: "Le milieu d'une courte vidéo doit apporter :", options: ["De la valeur : l'exercice, le moment ou le conseil", "Du silence", "Une longue intro", "Seulement votre logo"], answer: 0, why: "La valeur retient l'attention." },
      { objective: "O1", q: "Pourquoi écrire un plan avant de filmer ?", options: ["Vous savez de quels plans vous avez besoin", "C'est obligatoire", "Pour perdre du temps", "Cela rallonge les vidéos"], answer: 0, why: "Préparer fait gagner du temps et donne de meilleurs plans." },
      { objective: "O1", q: "L'IA peut aider votre plan en :", options: ["Filmant à votre place", "Gérant votre compte", "Proposant des idées d'accroches", "Choisissant votre sport"], answer: 2, why: "Trouver des idées est un point fort de l'IA." },
      { objective: "O2", q: "Avant de filmer, vous devez :", options: ["Éteindre la lumière", "Essuyer l'objectif", "Secouer le téléphone", "Couvrir le micro"], answer: 1, why: "Un objectif propre donne une image nette." },
      { objective: "O2", q: "Pour les applications de vidéos courtes, filmez :", options: ["À l'envers", "Seulement à l'horizontale", "Avec l'objectif couvert", "À la verticale"], answer: 3, why: "Les applications de vidéos courtes utilisent la vidéo verticale." },
      { objective: "O2", q: "Le ralenti est idéal pour :", options: ["Cacher les erreurs", "Gagner de l'espace de stockage", "Montrer la technique", "Enregistrer le son"], answer: 2, why: "Il montre les détails d'un mouvement rapide." },
      { objective: "O2", q: "Vous parlez dans un gymnase bruyant ? Essayez :", options: ["De crier", "De monter la musique", "De filmer de loin", "De vous rapprocher ou d'ajouter une voix off"], answer: 3, why: "Un son clair demande de la proximité ou une voix off." },
      { objective: "O3", q: "Un gros plan montre :", options: ["Des détails comme les mains ou les pieds", "Tout le stade", "Le ciel", "Rien"], answer: 0, why: "Les gros plans montrent les détails." },
      { objective: "O3", q: "Qu'est-ce qui touche souvent les abonnés ?", options: ["De faux résultats", "De vrais moments en coulisses", "Des vidéos volées", "De longues vidéos silencieuses"], answer: 1, why: "Les vrais moments créent la confiance." },
      { objective: "O4", q: "Couper un plan veut dire :", options: ["Ajouter d'autres plans", "Changer la couleur", "Retirer les parties d'un plan dont vous n'avez pas besoin", "Publier deux fois"], answer: 2, why: "Un montage serré retient l'attention." },
      { objective: "O4", q: "Quelle est une option de montage gratuite ?", options: ["CapCut ou l'éditeur intégré de votre téléphone", "Seulement un logiciel de studio coûteux", "Une imprimante", "Une calculatrice"], answer: 0, why: "Les outils gratuits suffisent pour commencer." },
      { objective: "O4", q: "Utiliser une chanson populaire venue d'ailleurs peut :", options: ["Toujours la rendre virale", "Vous rapporter de l'argent", "Ne rien changer", "Faire couper le son de votre vidéo ou la faire supprimer"], answer: 3, why: "Les droits musicaux comptent." },
      { objective: "O4", q: "Le texte à l'écran doit être :", options: ["Minuscule", "Assez grand pour être lu sur un téléphone", "Caché", "En dix polices"], answer: 1, why: "La plupart des spectateurs sont sur téléphone." },
      { objective: "O5", q: "Une bonne légende se termine souvent par :", options: ["Cinquante hashtags", "Une question pour obtenir des commentaires", "Votre numéro de téléphone", "Rien"], answer: 1, why: "Les questions invitent à réagir." },
      { objective: "O5", q: "Combien de hashtags utiliser ?", options: ["Cinquante au hasard", "Jamais aucun", "Seulement des tendances sans rapport", "Quelques-uns pertinents"], answer: 3, why: "Des hashtags pertinents aident les bonnes personnes à vous trouver." },
      { objective: "O5", q: "Vous devez identifier des personnes dans une publication :", options: ["Seulement si elles sont d'accord", "Toujours, sans demander", "Au hasard", "Jamais"], answer: 0, why: "Respectez la vie privée des autres." },
      { objective: "O5", q: "Quelle est une mention de marque claire ?", options: ["« #sp » à la fin", "« collab ? »", "« Publicité » ou « Merci [marque] pour l'équipement offert »", "Rien"], answer: 2, why: "La FTC dit d'utiliser des mots clairs et simples." },
      { objective: "O6", q: "La colonne Statut d'un calendrier de contenu suit :", options: ["Votre humeur", "La météo", "Vos notes", "Idée, filmé, monté, publié"], answer: 3, why: "Le statut montre où en est chaque publication." },
      { objective: "O6", q: "Pendant la semaine des examens, c'est normal de :", options: ["Sauter les examens pour publier", "Publier moins", "Acheter du contenu", "Publier 20 fois par jour"], answer: 1, why: "L'école et l'entraînement passent en premier." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan en trois parties",
        objective: "O1",
        notYet: "Pas de plan écrit, ou il manque l'accroche ou la fin.",
        meets: "Une accroche, une valeur et une fin écrites avant de filmer.",
        exceeds: "Plusieurs accroches ont été comparées et le plan liste les plans larges, moyens et serrés."
      },
      {
        name: "Tournage",
        objective: "O2",
        notYet: "Des plans sombres, tremblants ou bruyants, ou des personnes filmées sans autorisation.",
        meets: "Des plans verticaux, stables et bien éclairés, avec l'action au centre et l'autorisation des autres personnes.",
        exceeds: "Utilise le ralenti ou une voix off quand c'est utile, et garde quelques secondes en plus à chaque bout pour le montage."
      },
      {
        name: "Montage",
        objective: "O4",
        notYet: "Des temps morts restent, pas de sous-titres, ou une musique sans licence.",
        meets: "Une vidéo de 30 à 60 secondes avec des plans coupés, un texte à l'écran lisible, des sous-titres vérifiés et une musique sous licence.",
        exceeds: "Les changements de plan gardent le rythme d'une histoire claire problème, travail, résultat."
      },
      {
        name: "Légende et mention",
        objective: "O5",
        notYet: "Un texte d'IA copié, beaucoup de hashtags, ou une mention de marque absente.",
        meets: "Une légende avec la voix de l'athlète, quelques hashtags pertinents et toute mention placée au bon endroit.",
        exceeds: "Se termine par une question qui attire les commentaires et est publiée quand le public est en ligne."
      },
      {
        name: "Calendrier sur deux semaines",
        objective: "O6",
        notYet: "Moins de six idées en plus, ou il manque des colonnes.",
        meets: "Six idées de plus sur deux semaines, avec Date, Thème, Idée, Format et Statut, adaptées à l'entraînement et aux études.",
        exceeds: "Le tournage est regroupé en une seule séance et les semaines chargées sont bloquées."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui publient leur vidéo avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui publient selon leur calendrier pendant au moins deux des quatre semaines suivantes (questionnaire de suivi)",
      "Les apprenants qui disent avoir plus de vues, d'enregistrements ou de commentaires sur leurs vidéos préparées que sur les précédentes",
      "Les apprenants qui signalent une occasion de recrutement, de marque ou de communauté grâce à leur contenu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec caméra, chargé et avec de l'espace de stockage libre",
      "Une application de montage gratuite (CapCut ou l'éditeur intégré du téléphone)",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Google Sheets ou une application de notes pour le calendrier",
      "Environ 60 minutes de leçons, plus environ 60 minutes pour filmer et monter"
    ],
    facilitatorNotes: [
      "Partagez les règles de tournage de votre équipe et assurez-vous que les athlètes demandent l'autorisation avant de filmer d'autres personnes, surtout des mineurs.",
      "Formez des binômes pour que les athlètes se filment mutuellement avec une bonne lumière et un bon cadrage.",
      "Montrez où trouver de la musique sous licence dans les applications que le groupe utilise.",
      "Vérifiez la mention de chaque publication sponsorisée ou offerte avant sa mise en ligne, et envoyez les questions NIL au service de conformité.",
      "Rappelez aux athlètes que les études et l'entraînement passent en premier ; planifiez le contenu autour des examens et des tournois."
    ]
  }
};
