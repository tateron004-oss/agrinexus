"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-digital-empowerment.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-digital-empowerment-fr",
  lang: "fr",
  translationOf: "underserved-ai-digital-empowerment",
  category: "Undeserved Community",
  name: "Introduction à l'IA et autonomie numérique",
  skills: "Se connecter gratuitement ou à petit prix, Ouvrir un assistant d'IA gratuit, Demander de l'aide avec des mots simples, Transformer une lettre difficile en liste de choses à faire, Vérifier les réponses et protéger vos informations",
  outcome: "vous connecter à internet dans une bibliothèque, un centre communautaire ou sur votre téléphone, et utiliser un assistant d'IA gratuit pour transformer une lettre ou un avis compliqué en mots simples et en une courte liste de choses à faire, sans partager d'informations privées.",
  about: [
    "Ce cours s'adresse à toute personne qui se sent laissée de côté par la technologie, ou à qui l'on a dit que les ordinateurs et l'IA ne sont « pas pour des gens comme nous ». Ils sont pour vous, et beaucoup des meilleurs outils sont gratuits.",
    "Vous trouverez des moyens gratuits ou peu chers d'aller sur internet, vous ouvrirez un assistant d'IA gratuit, et vous l'utiliserez pour de vraies tâches familiales : lire une lettre difficile, organiser une semaine chargée, ou écrire un message à une école ou à un propriétaire.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites la tâche « Essayez maintenant ». Un court contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Prenez une vraie lettre ou un vrai avis que vous avez reçu (d'une école, d'une clinique, d'un propriétaire ou d'une compagnie d'eau ou d'électricité). Cachez ou retirez chaque numéro et chaque nom privé. Demandez à un assistant d'IA gratuit de l'expliquer avec des mots simples et de faire une courte liste de choses à faire avec les dates. Puis vérifiez une date ou un numéro de téléphone sur le site officiel ou en appelant le bureau.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes de communautés mal desservies qui se sentent laissés pour compte par la technologie : familles à faible revenu, personnes âgées, parents, personnes sans ordinateur à la maison et personnes dont ce n'est pas la langue maternelle.",
    startingPoint: "Ils savent appeler et envoyer des SMS avec un téléphone. Ils utilisent peu ou pas les ordinateurs, les navigateurs web ou les assistants d'IA, et certains ont entendu dire que la technologie « n'est pas pour les gens comme nous ».",
    gap: "Les écoles, les cliniques, les propriétaires et les administrations envoient des lettres et attendent qu'on agisse en ligne. Les apprenants ont besoin d'un endroit gratuit pour aller sur internet et d'une façon sûre d'utiliser un assistant d'IA gratuit pour comprendre les lettres et prévoir quoi faire, sans être trompés par de mauvaises réponses ou des arnaques.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : parfois seulement un téléphone simple ou un ordinateur de bibliothèque à temps limité",
      "Coût : seulement des outils gratuits et des endroits gratuits pour aller sur internet",
      "Risque élevé d'arnaque et d'atteinte à la vie privée : aucun vrai numéro privé ni vrai nom dans les exercices",
      "Temps : des leçons courtes qui s'intègrent entre le travail, la famille et les rendez-vous"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Là où vous habitez", action: "nommer des endroits gratuits pour aller sur internet et un programme qui peut réduire votre facture de téléphone ou d'internet", standard: "en nommant au moins deux endroits avec leurs horaires" },
    { id: "O2", condition: "À partir d'une liste de tâches de tous les jours", action: "repérer celles pour lesquelles un assistant d'IA peut aider, et qui décide quoi faire de sa réponse", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O3", condition: "Sur un ordinateur de bibliothèque ou un téléphone", action: "ouvrir un assistant d'IA gratuit depuis son application ou son site officiel et poser une question qui dit ce dont vous avez besoin, votre situation et la forme de réponse voulue", standard: "sans aide" },
    { id: "O4", condition: "Face à une lettre ou un avis difficile à comprendre", action: "demander à un assistant d'IA de l'expliquer avec des mots simples et de faire une liste de choses à faire avec les dates, en utilisant des repères pour les détails privés", standard: "sans aucun vrai nom ni vrai numéro dans la demande" },
    { id: "O5", condition: "Face à une réponse d'IA qui contient une date, un numéro de téléphone ou une règle", action: "la vérifier avec la lettre, le site officiel en .gov, le bureau concerné ou le 211", standard: "avant d'agir" },
    { id: "O6", condition: "Quand vous écrivez une demande ou recevez un message urgent", action: "garder les informations privées pour vous et repérer les signes d'une arnaque", standard: "sans partager aucun numéro privé et en contactant les administrations seulement par un numéro ou un site trouvé vous-même" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se connecter",
      lessons: [
        {
          objectives: ["O1"],
          title: "Des moyens gratuits ou peu chers d'aller sur internet",
          minutes: 5,
          goal: "Nommer deux endroits près de chez vous où vous pouvez utiliser internet gratuitement, et un programme qui peut réduire votre facture de téléphone ou d'internet.",
          text: [
            "Vous n'avez pas besoin d'avoir un ordinateur pour utiliser la technologie. Les bibliothèques publiques ont des ordinateurs et du Wi-Fi gratuits, et beaucoup prêtent aussi des ordinateurs portables ou des points d'accès. Les centres communautaires, les centres pour l'emploi et certaines églises ont aussi des ordinateurs que vous pouvez utiliser.",
            "Aux États-Unis, Lifeline est un programme fédéral qui réduit le coût mensuel du téléphone ou d'internet pour les personnes à faible revenu ou qui bénéficient de programmes comme SNAP (aide alimentaire) ou Medicaid (assurance santé publique). Vous faites la demande en ligne, puis vous choisissez une compagnie de téléphone ou d'internet qui participe. Ailleurs, renseignez-vous sur les tarifs sociaux de votre pays.",
            "Le personnel de la bibliothèque peut vous aider à démarrer. Demander de l'aide est normal ; aider les gens avec les ordinateurs fait partie de leur travail."
          ],
          steps: ["Cherchez la bibliothèque publique la plus proche et ses horaires.", "Demandez si elle prête des ordinateurs portables ou des points d'accès, et si elle propose des cours d'informatique gratuits.", "Si l'argent manque, lisez ce qu'est Lifeline sur le site officiel et voyez si vous y avez droit.", "Notez le lieu et l'heure où vous irez sur internet cette semaine."],
          words: [["Wi-Fi", "un moyen de se connecter à internet sans câble."], ["Point d'accès", "un petit appareil (ou un réglage du téléphone) qui partage une connexion internet avec d'autres appareils."], ["Lifeline", "un programme fédéral américain qui accorde une réduction mensuelle sur le téléphone ou internet aux personnes qui y ont droit."]],
          sources: [{ name: "Lifeline Support (USAC, le site officiel de Lifeline)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Aller sur internet sans avoir d'ordinateur", bullets: ["Bibliothèques publiques : ordinateurs et Wi-Fi gratuits", "Centres communautaires et centres pour l'emploi", "Certaines bibliothèques prêtent portables et points d'accès"] },
            { title: "Réduire votre facture de téléphone ou d'internet", bullets: ["Lifeline donne une réduction mensuelle à qui y a droit (États-Unis)", "Droit possible selon le revenu, SNAP ou Medicaid", "Faites la demande sur le site officiel de Lifeline"] },
            { title: "Demandez de l'aide", bullets: ["Le personnel des bibliothèques aide chaque jour avec les ordinateurs", "Renseignez-vous sur les cours d'informatique gratuits", "Demander est malin, ce n'est pas une faiblesse"] }
          ],
          tryIt: "Notez deux endroits près de chez vous où vous pouvez utiliser internet gratuitement, avec leurs horaires. Si votre facture de téléphone ou d'internet est difficile à payer, ouvrez lifelinesupport.org (aux États-Unis) ou cherchez les aides de votre pays, et lisez qui y a droit.",
          youCanNow: "nommer des endroits gratuits pour aller sur internet et savoir où vous renseigner sur Lifeline.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un point d'accès que certaines bibliothèques prêtent ?", options: ["Un petit appareil qui permet d'aller sur internet", "Un chauffage pour les pièces froides", "Un forfait téléphonique gratuit", "Un cours d'informatique"], answer: 0, why: "Un point d'accès est un petit appareil qui donne internet, pour aller en ligne loin de la bibliothèque." },
            { objective: "O1", q: "Votre facture d'internet est difficile à payer et vous recevez SNAP. Que faites-vous ?", options: ["Résilier internet pour de bon", "Lire ce qu'est Lifeline sur le site officiel pour voir si vous y avez droit", "Demander à un inconnu en ligne de la payer", "Attendre que la compagnie vous appelle"], answer: 1, why: "Lifeline réduit le coût mensuel pour les personnes à faible revenu ou inscrites à des programmes comme SNAP." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ce qu'est l'IA, avec des mots de tous les jours",
          minutes: 4,
          goal: "Expliquer ce qu'est un assistant d'IA et nommer trois façons dont il pourrait aider votre famille.",
          text: [
            "IA veut dire intelligence artificielle. Un assistant d'IA est un programme à qui vous pouvez écrire, ou parler, avec vos propres mots. Il répond en quelques secondes. Parmi les gratuits, il y a ChatGPT, Microsoft Copilot et Google Gemini.",
            "Il peut expliquer une lettre difficile, écrire un court message, planifier des repas avec un petit budget, aider un enfant à comprendre ses devoirs, ou traduire d'une langue à une autre.",
            "C'est une aide, pas un patron. Il ne connaît pas votre vie, et il se trompe parfois sur les faits. C'est vous qui décidez quoi demander et quoi utiliser."
          ],
          words: [["IA", "intelligence artificielle : des programmes informatiques qui font des tâches comme écrire et répondre à des questions."], ["Assistant d'IA", "un programme d'IA avec qui vous discutez en écrivant ou en parlant."]],
          slides: [
            { title: "Un assistant d'IA est une aide", bullets: ["Vous écrivez ou parlez avec vos mots", "Il répond en quelques secondes", "Gratuits : ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Comment il peut aider votre famille", bullets: ["Expliquer une lettre difficile", "Planifier des repas avec un petit budget", "Aider pour les questions de devoirs", "Traduire un message"] },
            { title: "C'est vous le patron", bullets: ["Il ne connaît pas votre vie", "Il peut se tromper sur les faits", "Vous décidez quoi demander et quoi utiliser"] }
          ],
          tryIt: "Notez trois tâches de votre semaine où un assistant d'IA pourrait vous aider, vous, votre famille ou votre groupe communautaire.",
          youCanNow: "dire ce qu'est un assistant d'IA et nommer trois façons dont il pourrait vous aider.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un assistant d'IA ?", options: ["Une personne qui lit votre courrier", "Un bureau de l'administration", "Un programme auquel vous écrivez ou parlez avec vos propres mots", "Une compagnie de téléphone"], answer: 2, why: "Un assistant d'IA est un programme qui écrit une réponse quand vous lui demandez quelque chose avec vos propres mots." },
            { objective: "O2", q: "Votre enfant bloque sur ses devoirs. Comment un assistant d'IA pourrait-il aider ?", options: ["Faire tout le contrôle à sa place", "Signer les formulaires de l'école", "Appeler l'enseignant pour vous", "Expliquer le sujet avec des mots plus simples"], answer: 3, why: "L'IA peut expliquer avec des mots plus simples ; vous et votre enfant gardez le contrôle." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ouvrir un assistant d'IA gratuit et poser votre première question",
          minutes: 5,
          goal: "Ouvrir un assistant d'IA gratuit et lui poser une question claire sur une vraie tâche.",
          text: [
            "Sur un ordinateur de bibliothèque ou de centre communautaire, ouvrez le navigateur web et allez sur copilot.microsoft.com, chatgpt.com ou gemini.google.com. Sur un téléphone, installez l'application officielle depuis la boutique d'applications.",
            "Cherchez la case où l'on écrit. Posez votre question comme vous la poseriez à un voisin serviable : dites ce dont vous avez besoin, un peu de votre situation, et la forme de réponse que vous voulez.",
            "Par exemple : « J'ai 60 $ pour les courses cette semaine pour une famille de quatre. Donne-moi cinq idées de dîners pas chers avec une liste de courses. Utilise des mots simples. »"
          ],
          steps: ["Ouvrez le navigateur ou l'application officielle.", "Trouvez la case de message.", "Écrivez ce dont vous avez besoin, votre situation (sans détails privés) et la forme de réponse voulue.", "Appuyez sur Entrée ou touchez la flèche d'envoi, puis lisez la réponse."],
          words: [["Navigateur", "le programme qui sert à visiter des sites web, comme Chrome, Edge ou Safari."], ["Consigne (prompt)", "la question ou la demande que vous écrivez à un assistant d'IA."]],
          slides: [
            { title: "Ouvrez-le", bullets: ["Ordinateur : copilot.microsoft.com, chatgpt.com ou gemini.google.com", "Téléphone : l'application officielle de la boutique d'applications"] },
            { title: "Demandez comme à un voisin", bullets: ["Ce dont vous avez besoin", "Un peu de votre situation", "La forme de réponse voulue"] },
            { title: "Exemple", bullets: ["« J'ai 60 $ pour les courses pour une famille de quatre.", "Donne-moi cinq dîners pas chers et une liste de courses.", "Utilise des mots simples. »"] }
          ],
          tryIt: "Ouvrez un assistant d'IA gratuit. Demandez-lui de l'aide pour une tâche de votre liste de la leçon 2, en utilisant les trois parties d'une bonne question. Lisez la réponse.",
          youCanNow: "ouvrir un assistant d'IA gratuit et poser une question claire qui donne une réponse utile.",
          quickCheck: [
            { objective: "O3", q: "Sur un ordinateur de bibliothèque, où tapez-vous copilot.microsoft.com ?", options: ["Dans la barre d'adresse du navigateur web", "Dans un SMS", "Dans le menu de l'imprimante", "Dans un e-mail à la bibliothèque"], answer: 0, why: "Vous ouvrez le navigateur web et tapez l'adresse pour arriver sur l'assistant d'IA." },
            { objective: "O3", q: "Vous voulez de l'aide pour organiser un anniversaire avec un petit budget. Quelle question est la meilleure ?", options: ["« Fête. »", "« Aide-moi à organiser une fête pour 8 enfants avec 50 $. Donne-moi une liste simple. »", "« Dis-moi tout. »", "« C'est quoi une fête ? »"], answer: 1, why: "Elle dit ce dont vous avez besoin, votre situation et la forme de réponse voulue." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se connecter",
        questions: [
          { objective: "O1", q: "Vous n'avez pas d'ordinateur. Où pouvez-vous en général en utiliser un gratuitement ?", options: ["Dans une bibliothèque publique", "Chez un concessionnaire automobile", "Dans le coffre d'une banque", "Dans une station-service"], answer: 0, why: "Les bibliothèques publiques offrent des ordinateurs et du Wi-Fi gratuits." },
          { objective: "O1", q: "Que fait Lifeline ?", options: ["Vous donne une voiture gratuite", "Réduit le coût mensuel du téléphone ou d'internet pour les personnes qui y ont droit", "Paie votre loyer", "Vous donne un nouvel ordinateur chaque année"], answer: 1, why: "Lifeline est une réduction fédérale américaine sur le téléphone ou internet." },
          { objective: "O2", q: "Lequel est un assistant d'IA gratuit ?", options: ["Une application de calculatrice", "Une imprimante", "Microsoft Copilot", "Un SMS"], answer: 2, why: "Copilot, ChatGPT et Gemini sont des assistants d'IA gratuits bien connus." },
          { objective: "O2", q: "Qui décide quoi faire de la réponse d'un assistant d'IA ?", options: ["L'IA", "La boutique d'applications", "La bibliothèque", "Vous"], answer: 3, why: "L'IA est une aide ; c'est vous qui décidez." },
          { objective: "O3", q: "Quelle question donnera la réponse la plus utile ?", options: ["« nourriture »", "« J'ai 60 $ pour les courses pour quatre personnes. Donne-moi cinq dîners pas chers et une liste, avec des mots simples. »", "« aide »", "« dis-moi des trucs »"], answer: 1, why: "Elle dit ce dont vous avez besoin, votre situation et la forme de réponse voulue." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA dans la vie réelle, en sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Transformer une lettre difficile en mots simples",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour expliquer une lettre compliquée et faire une liste de choses à faire.",
          text: [
            "Les lettres des écoles, des cliniques, des propriétaires et des administrations peuvent être pleines de mots difficiles. Un assistant d'IA peut les mettre en mots simples et en tirer ce que vous devez faire et pour quand.",
            "D'abord, retirez les détails privés. Écrivez ou collez seulement les mots qui expliquent le sujet de la lettre, et remplacez les noms et les numéros par des repères comme [mon nom] ou [numéro de compte].",
            "Ensuite, demandez : « Explique cette lettre avec des mots simples. Que dois-je faire, et avant quelle date ? Fais une courte liste de choses à faire. »"
          ],
          steps: ["Lisez la lettre une fois et entourez les parties que vous ne comprenez pas.", "Copiez ou écrivez ces parties, en remplaçant les noms et les numéros par des repères.", "Demandez à l'IA de l'expliquer avec des mots simples et de faire une liste de choses à faire avec les dates.", "Posez une question de suivi si quelque chose reste flou, comme « Que veut dire 'renouvellement du dossier' ? »"],
          words: [["Repère", "un mot de remplacement comme [mon nom] que vous écrivez à la place des vrais détails privés."], ["Question de suivi", "une deuxième question qui s'appuie sur la première réponse."]],
          slides: [
            { title: "Lettres difficiles, mots simples", bullets: ["Lettres d'école, de clinique, de propriétaire ou d'administration", "L'IA peut expliquer les mots difficiles", "Elle peut lister quoi faire et pour quand"] },
            { title: "Retirez d'abord les détails privés", bullets: ["Remplacez les noms par [mon nom]", "Remplacez les numéros par [numéro de compte]", "Gardez seulement les mots qui expliquent la lettre"] },
            { title: "Quoi demander", bullets: ["« Explique ceci avec des mots simples. »", "« Que dois-je faire, et pour quand ? »", "« Fais une courte liste de choses à faire. »"] }
          ],
          tryIt: "Choisissez une lettre ou un avis que vous avez (ou un exemple pris sur le site d'une école). Retirez les détails privés, puis demandez à un assistant d'IA de l'expliquer et de faire une liste de choses à faire.",
          youCanNow: "transformer une lettre compliquée en mots simples et en liste de choses à faire, sans vos détails privés.",
          quickCheck: [
            { objective: "O4", q: "Quel est un bon repère dans une demande ?", options: ["Votre vrai numéro de compte", "Le nom complet de votre enfant", "[numéro de compte]", "Votre adresse"], answer: 2, why: "Un repère comme [numéro de compte] remplace le vrai détail pour qu'il reste privé." },
            { objective: "O4", q: "L'explication de l'IA utilise encore le mot « recertification » et vous ne le connaissez pas. Que faites-vous ?", options: ["Abandonner la lettre", "Deviner ce qu'il veut dire", "Coller votre numéro de dossier", "Demander : « Que veut dire recertification ? »"], answer: 3, why: "Une question de suivi demande à l'IA d'expliquer le mot difficile." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vérifier ce que l'IA vous dit",
          minutes: 4,
          goal: "Vérifier une date, un numéro de téléphone ou une règle d'une réponse d'IA auprès de la source officielle.",
          text: [
            "Les assistants d'IA peuvent se tromper. Ils peuvent donner un vieux numéro de téléphone, une mauvaise date limite, ou une règle d'un autre État ou d'un autre pays.",
            "Avant d'agir sur quoi que ce soit qui concerne l'argent, les aides, la santé, l'école, le logement ou la loi, vérifiez. Regardez la lettre elle-même, le site officiel (aux États-Unis, les sites du gouvernement finissent en général par .gov), ou appelez le bureau.",
            "Si vous ne trouvez pas la réponse, appelez le 211 aux États-Unis. C'est une ligne gratuite et confidentielle qui vous met en contact avec l'aide locale pour la nourriture, le logement, les factures et plus. Ailleurs, utilisez le numéro d'aide sociale de votre pays ou demandez à la mairie."
          ],
          steps: ["Entourez chaque date, numéro et règle dans la réponse de l'IA.", "Comparez chacun avec la lettre d'origine.", "Vérifiez sur le site officiel ou appelez le bureau.", "Si vous êtes bloqué, appelez le 211 ou demandez à un bibliothécaire."],
          words: [[".gov", "la fin des adresses des sites officiels du gouvernement des États-Unis."], ["211", "une ligne téléphonique gratuite et confidentielle aux États-Unis qui met les gens en contact avec l'aide locale."]],
          sources: [{ name: "211.org : À propos du 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "L'IA peut se tromper", bullets: ["Vieux numéros de téléphone", "Mauvaises dates limites", "Règles d'un autre État ou pays"] },
            { title: "Vérifiez toujours ceci", bullets: ["L'argent et les aides", "La santé et l'école", "Le logement et la loi"] },
            { title: "Où vérifier", bullets: ["La lettre d'origine", "Le site officiel, souvent en .gov aux États-Unis", "Appelez le bureau, ou le 211 pour l'aide locale"] }
          ],
          tryIt: "Reprenez la liste de choses à faire de la leçon 4. Vérifiez une date ou un numéro de téléphone avec la lettre d'origine ou le site officiel.",
          youCanNow: "vérifier une réponse d'IA auprès de la source officielle avant d'agir.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le 211 ?", options: ["Une ligne gratuite et confidentielle qui vous met en contact avec l'aide locale", "Le numéro d'urgence de la police", "Un service juridique payant", "Un site d'achats"], answer: 0, why: "Le 211 est gratuit et confidentiel et met les gens en contact avec l'aide locale, comme la nourriture et les factures d'énergie." },
            { objective: "O5", q: "L'IA donne un numéro de téléphone pour le bureau du logement. Que faites-vous avant d'appeler ?", options: ["Appeler tout de suite", "Le vérifier sur le site officiel du bureau ou sur votre lettre", "Le publier sur les réseaux sociaux", "Demander à l'IA si elle est sûre"], answer: 1, why: "L'IA peut donner des numéros anciens ou faux, donc vous vérifiez d'abord la source officielle." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protéger vos informations et votre famille",
          minutes: 5,
          goal: "Garder les informations privées hors des outils d'IA et repérer un message d'arnaque.",
          text: [
            "N'écrivez jamais ceci dans un assistant d'IA : numéro de sécurité sociale, numéros de dossier ou d'allocation, numéros de compte bancaire ou de carte, mots de passe, ni le nom complet de vos enfants avec leur école.",
            "Les arnaqueurs visent les familles en difficulté. Méfiez-vous des messages qui promettent de l'argent gratuit ou des subventions du gouvernement, qui disent que vos aides vont s'arrêter si vous n'agissez pas tout de suite, ou qui vous demandent de payer avec des cartes cadeaux.",
            "Les vraies administrations ne demandent pas de paiement en cartes cadeaux. Si un message vous inquiète, ne cliquez pas sur ses liens. Allez vous-même sur le site officiel ou appelez un numéro que vous connaissez déjà."
          ],
          steps: ["Relisez chaque consigne avant de l'envoyer et retirez les détails privés.", "Méfiez-vous des messages qui vous pressent ou promettent de l'argent gratuit.", "Ne payez jamais en cartes cadeaux parce qu'un message vous l'a dit.", "Contactez l'administration avec un numéro ou un site que vous avez trouvé vous-même."],
          words: [["Arnaque", "une ruse pour voler de l'argent ou des informations."], ["Hameçonnage", "un faux message qui essaie de vous faire cliquer sur un lien ou partager des détails privés."]],
          slides: [
            { title: "N'écrivez jamais dans l'IA", bullets: ["Numéros de sécurité sociale, de dossier ou d'allocation", "Numéros de banque ou de carte, mots de passe", "Le nom complet de vos enfants et leur école"] },
            { title: "Signes d'arnaque", bullets: ["Promesses d'argent gratuit ou de subventions", "« Vos aides s'arrêtent aujourd'hui »", "Payer avec des cartes cadeaux"] },
            { title: "Restez en sécurité", bullets: ["Ne cliquez pas sur les liens des messages inquiétants", "Allez vous-même sur le site officiel", "Appelez un numéro que vous savez être le bon"] }
          ],
          tryIt: "Tâche finale : prenez une vraie lettre ou un vrai avis, retirez tous les détails privés, demandez à un assistant d'IA de l'expliquer et de faire une liste de choses à faire avec les dates, puis vérifiez une date ou un numéro de téléphone auprès de la source officielle.",
          youCanNow: "utiliser l'IA pour une vraie tâche familiale en gardant vos informations en sécurité et en repérant les arnaques.",
          quickCheck: [
            { objective: "O6", q: "Quel est un signe d'arnaque ?", options: ["Une lettre qui correspond au site de l'administration", "Un rappel du secrétariat de l'école de votre enfant", "Un message qui vous presse de payer en cartes cadeaux", "Une facture avec le bon montant"], answer: 2, why: "Les vraies administrations ne demandent pas de cartes cadeaux et ne vous pressent pas de payer tout de suite." },
            { objective: "O6", q: "Un SMS dit que vous avez gagné une aide de l'État et contient un lien. Que faites-vous ?", options: ["Cliquer sur le lien pour la réclamer", "Répondre avec votre numéro de compte bancaire", "Le transférer à vos amis", "Ne pas cliquer ; chercher vous-même l'administration"], answer: 3, why: "Aller sur le site officiel ou appeler un numéro trouvé vous-même vous protège des faux liens." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA dans la vie réelle, en sécurité",
        questions: [
          { objective: "O4", q: "Avant de coller une lettre dans un assistant d'IA, que devez-vous faire ?", options: ["Ajouter votre numéro de sécurité sociale", "Remplacer les noms et les numéros par des repères", "Ajouter vos coordonnées bancaires pour qu'il aide mieux", "Rien"], answer: 1, why: "Les repères permettent d'obtenir de l'aide sans partager de détails privés." },
          { objective: "O5", q: "L'IA dit que votre date limite est le 5 juin, mais la lettre dit le 1er juin. À qui faire confiance ?", options: ["À l'IA", "À aucun des deux", "À la date la plus tardive", "À la lettre ou au bureau officiel"], answer: 3, why: "La source officielle l'emporte quand l'IA n'est pas d'accord avec elle." },
          { objective: "O5", q: "Qu'est-ce que le 211 ?", options: ["Une ligne gratuite et confidentielle qui vous met en contact avec l'aide locale", "Une banque", "Une application d'IA", "Un numéro d'arnaque"], answer: 0, why: "Le 211 met les gens en contact avec l'aide locale pour la nourriture, le logement et plus." },
          { objective: "O6", q: "Un SMS dit que vos aides s'arrêtent aujourd'hui si vous ne payez pas en cartes cadeaux. C'est :", options: ["Un avis normal", "Une nouvelle règle", "Un signe d'arnaque", "Un message de l'école"], answer: 2, why: "Vous presser et demander des cartes cadeaux sont des signes d'arnaque." },
          { objective: "O6", q: "Un message vous inquiète. Quelle est la façon la plus sûre de le vérifier ?", options: ["Cliquer sur son lien", "Répondre avec vos informations", "Le transférer à des amis", "Aller vous-même sur le site officiel ou appeler un numéro que vous connaissez"], answer: 3, why: "Contacter l'administration par vous-même évite les faux liens." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'IA et autonomie numérique",
    questions: [
      { objective: "O1", q: "Où peut-on souvent emprunter un ordinateur portable ou un point d'accès ?", options: ["Dans certaines bibliothèques publiques", "Dans n'importe quelle épicerie", "Dans une boîte postale", "Sur un parking"], answer: 0, why: "Beaucoup de bibliothèques prêtent des portables et des points d'accès." },
      { objective: "O1", q: "Lifeline aide à payer :", options: ["Les réparations de voiture", "Le coût mensuel du téléphone ou d'internet", "Le loyer", "Les courses"], answer: 1, why: "Lifeline est une réduction sur le téléphone ou internet." },
      { objective: "O1", q: "Où faut-il se renseigner sur Lifeline ?", options: ["Une publicité sur les réseaux sociaux", "Le SMS d'un inconnu", "Le site officiel de Lifeline", "Une fenêtre surgissante"], answer: 2, why: "Les sites officiels ont les vraies règles et la vraie demande." },
      { objective: "O2", q: "Un assistant d'IA est :", options: ["Une personne à la bibliothèque", "Un bureau du gouvernement", "Une compagnie de téléphone", "Un programme avec qui vous discutez avec vos propres mots"], answer: 3, why: "C'est un programme informatique à qui vous écrivez ou parlez." },
      { objective: "O2", q: "Pour quoi un assistant d'IA peut-il aider ?", options: ["Planifier des repas avec un petit budget", "Signer votre bail", "Aller à votre rendez-vous", "Payer vos factures depuis votre compte"], answer: 0, why: "Il est doué pour les plans, les listes et les explications." },
      { objective: "O2", q: "L'IA se trompe parfois sur les faits. Cela veut dire que vous devez :", options: ["Ne jamais l'utiliser", "Vérifier les faits importants", "Lui faire encore plus confiance", "En payer une meilleure"], answer: 1, why: "Elle est utile, mais les faits importants doivent être vérifiés." },
      { objective: "O3", q: "Sur un ordinateur de bibliothèque, comment ouvrir Copilot ?", options: ["Appeler la bibliothèque", "Éteindre et rallumer l'ordinateur", "Écrire copilot.microsoft.com dans le navigateur", "Envoyer un e-mail"], answer: 2, why: "L'adresse web ouvre Copilot dans le navigateur." },
      { objective: "O3", q: "Une bonne question à une IA contient :", options: ["Votre mot de passe", "Un seul mot", "Votre numéro de compte bancaire", "Ce dont vous avez besoin, votre situation et la forme de réponse voulue"], answer: 3, why: "Ces trois parties donnent une réponse utile." },
      { objective: "O3", q: "Où installer une application d'IA sur un téléphone ?", options: ["Dans la boutique d'applications officielle", "Par un lien dans le SMS d'un inconnu", "Par une publicité surgissante", "Sur n'importe quel site"], answer: 0, why: "La boutique officielle est l'endroit sûr." },
      { objective: "O4", q: "Qu'est-ce qu'un repère ?", options: ["Un type d'application", "Un mot de remplacement comme [mon nom] à la place des vrais détails", "Un mot de passe", "Un site web"], answer: 1, why: "Il garde les détails privés hors de votre consigne." },
      { objective: "O4", q: "Vous voulez de l'aide pour une lettre de l'école. Quelle est une bonne demande ?", options: ["« lettre »", "« Voici le nom complet et le numéro d'identité de mon enfant »", "« Explique ceci avec des mots simples et liste ce que je dois faire et pour quand. »", "« école »"], answer: 2, why: "Elle demande des mots simples et une liste, sans détails privés." },
      { objective: "O4", q: "L'IA utilise un mot difficile que vous ne connaissez pas. Vous pouvez :", options: ["Abandonner", "Faire semblant de le connaître", "Fermer le navigateur", "Poser une question de suivi : « Que veut dire ce mot ? »"], answer: 3, why: "Les questions de suivi éclaircissent les parties confuses." },
      { objective: "O5", q: "Qu'est-ce qu'il faut toujours vérifier avant d'agir ?", options: ["Une date limite pour des aides", "Une idée de dîner", "Une blague", "Une liste de couleurs"], answer: 0, why: "Les dates limites, l'argent et les aides se vérifient auprès de la source officielle." },
      { objective: "O5", q: "Les sites du gouvernement américain finissent en général par :", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: ".gov est utilisé par les sites officiels du gouvernement américain." },
      { objective: "O5", q: "Aux États-Unis, vous ne trouvez pas d'aide locale pour votre facture d'électricité. Qui pouvez-vous appeler ?", options: ["Un numéro dans une publicité surgissante", "Personne", "Le 211", "Un numéro trouvé au hasard en ligne"], answer: 2, why: "Le 211 met en contact avec l'aide locale pour les factures, la nourriture et le logement." },
      { objective: "O6", q: "Qu'est-ce qu'il ne faut jamais écrire dans un assistant d'IA ?", options: ["« Utilise des mots simples »", "« Fais une liste »", "Une idée de dîner", "Le numéro de votre carte bancaire"], answer: 3, why: "Les numéros de banque et de carte sont privés." },
      { objective: "O6", q: "Un message promet une subvention gratuite du gouvernement si vous payez d'abord des frais. C'est probablement :", options: ["Une arnaque", "Un programme normal", "Un avis de l'école", "Un remboursement d'impôts"], answer: 0, why: "Payer pour recevoir de l'argent « gratuit » est une arnaque courante." },
      { objective: "O6", q: "Les vraies administrations demandent un paiement en :", options: ["Cartes cadeaux", "Jamais en cartes cadeaux", "Cartes cadeaux seulement le week-end", "Espèces par SMS"], answer: 1, why: "Le paiement en cartes cadeaux est un signe d'arnaque." },
      { objective: "O6", q: "Un SMS dit « Cliquez ici maintenant ou vous perdez vos aides. » Que faites-vous ?", options: ["Cliquer vite", "Répondre avec votre numéro de dossier", "Ne pas cliquer ; aller sur le site officiel ou appeler un numéro connu", "Le partager avec les voisins"], answer: 2, why: "Contactez l'administration vous-même au lieu d'utiliser le lien du message." },
      { objective: "O5", q: "Dans la tâche finale, après que l'IA a fait votre liste de choses à faire, vous :", options: ["Supprimez la lettre", "La publiez en ligne", "Ajoutez vos coordonnées bancaires", "Vérifiez une date ou un numéro de téléphone auprès de la source officielle"], answer: 3, why: "Vérifier auprès de la source officielle est la dernière étape." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      7,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Détails privés retirés",
        objective: "O6",
        notYet: "La demande contient un vrai nom, un numéro de dossier, un numéro de compte ou une adresse.",
        meets: "Chaque nom et numéro privé est retiré ou remplacé par un repère.",
        exceeds: "Utilise des repères clairs comme [mon nom] pour que la réponse reste compréhensible."
      },
      {
        name: "Demande claire",
        objective: "O3",
        notYet: "La demande est vague, comme « aide-moi avec ça ».",
        meets: "Dit ce dont vous avez besoin, votre situation et la forme de réponse voulue.",
        exceeds: "La première réponse est proche de ce dont vous avez besoin."
      },
      {
        name: "Mots simples et liste de choses à faire",
        objective: "O4",
        notYet: "Pas d'explication en mots simples ou pas de liste de choses à faire.",
        meets: "Obtient une explication en mots simples et une courte liste de choses à faire avec les dates.",
        exceeds: "A posé une question de suivi pour faire expliquer un mot ou une étape difficile."
      },
      {
        name: "Fait vérifié",
        objective: "O5",
        notYet: "Aucune date ni aucun numéro de téléphone n'a été vérifié.",
        meets: "A vérifié une date ou un numéro de téléphone avec la lettre ou une source officielle.",
        exceeds: "Peut dire où il l'a vérifié et ce qu'il a trouvé."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir utilisé un assistant d'IA en sécurité pour une lettre, un formulaire ou un message dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui demandent Lifeline ou commencent à utiliser un ordinateur ou un point d'accès de bibliothèque",
      "Apprenants qui commencent un autre cours Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet, ou un ordinateur de bibliothèque ou de centre communautaire",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Une vraie lettre dont les détails privés sont cachés, ou une lettre d'exemple prise sur le site d'une école",
      "Du papier et un stylo pour les notes et la liste de choses à faire",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Commencez en disant que la technologie est pour tout le monde et que demander de l'aide est normal.",
      "Apportez des lettres d'exemple pour que personne n'ait à montrer son propre courrier.",
      "Vérifiez chaque demande avant qu'elle soit envoyée : aucun vrai nom, numéro de dossier ni numéro de compte.",
      "Ayez sous la main les informations sur le 211 et Lifeline, et assurez-vous que les apprenants se déconnectent des ordinateurs partagés.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
