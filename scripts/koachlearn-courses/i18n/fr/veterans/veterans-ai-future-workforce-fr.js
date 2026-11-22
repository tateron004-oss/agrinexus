"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-future-workforce.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-future-workforce-fr",
  lang: "fr",
  translationOf: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Introduction à l'IA et au monde du travail de demain",
  skills: "Expliquer ce qu'est l'IA, Ouvrir un assistant d'IA gratuit, Écrire une demande claire, Traduire des missions militaires en mots civils, Vérifier les réponses de l'IA, Protéger les informations privées et sensibles",
  outcome: "utiliser un assistant d'IA gratuit pour traduire l'une de vos missions militaires en langage d'emploi civil, vérifier le résultat avec une source officielle sur les métiers, et ne pas y mettre d'informations privées ou sensibles.",
  about: [
    "Ce cours s'adresse aux anciens militaires (vétérans) et aux militaires en transition qui veulent comprendre comment l'intelligence artificielle (IA) change le travail civil, et comment s'en servir à leur avantage. Aucune connaissance technique n'est nécessaire.",
    "Vous apprendrez ce qu'est l'IA, comment ouvrir un assistant d'IA gratuit, comment lui donner des instructions claires (comme un ordre clair : mission, conditions, critère de réussite), et comment ne pas y mettre d'informations privées ou sensibles. Puis vous l'utiliserez pour traduire votre expérience militaire en mots que les employeurs civils comprennent, et vous vérifierez le résultat.",
    "Chaque leçon dure environ cinq minutes : lisez, regardez les diapositives, puis faites l'activité \"Essayez maintenant\". Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours.",
    "Les programmes et sites officiels cités sont ceux des États-Unis. Si vous avez servi dans un autre pays, cherchez les services officiels de reconversion des militaires de votre pays."
  ],
  finalTask: "Choisissez une mission que vous avez remplie dans l'armée. Utilisez un assistant d'IA pour la réécrire en trois lignes de CV civiles, demandez une amélioration, cherchez votre emploi militaire dans le Military Crosswalk d'O*NET pour vérifier les métiers civils proposés, et enlevez tout détail privé ou sensible avant d'enregistrer les lignes.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans et des militaires en transition qui cherchent un emploi civil. Les âges et les grades varient beaucoup ; la plupart ont de solides compétences professionnelles mais les décrivent en termes militaires.",
    startingPoint: "À l'aise avec les ordres, les procédures et les normes, et avec un smartphone ou un ordinateur. Peu ou pas d'usage des assistants d'IA, et pas encore l'habitude de décrire leurs missions militaires avec des mots civils.",
    gap: "Les employeurs civils lisent les CV dans leur propre langage et attendent de plus en plus que les employés utilisent des outils d'IA. Les apprenants doivent utiliser un assistant d'IA gratuit en toute sécurité pour traduire leur service en langage d'emploi civil et vérifier les résultats avec des sources officielles sur les métiers, pour que leur expérience soit comprise et qu'ils ne soient pas trompés par de mauvaises réponses.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; aucune formation technique supposée",
      "Appareils : un smartphone ou un ordinateur avec internet ; certains utilisent des ordinateurs partagés de la base, de la bibliothèque ou du TAP",
      "Temps : des leçons d'environ 5 minutes qui s'intègrent entre les rendez-vous de transition et le travail",
      "OPSEC et vie privée : aucun détail classifié, contrôlé ou de mission, et aucun numéro de sécurité sociale ni numéro de dossier VA dans une demande",
      "Les salaires et les règles des programmes changent : les apprenants vérifient les sources officielles (O*NET, BLS, VA) avant d'agir"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de tâches de travail", action: "expliquer ce qu'est l'IA, citer des façons dont elle change les métiers civils et repérer les compétences qu'elle ne remplace pas", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "Avec un téléphone ou un ordinateur", action: "ouvrir un assistant d'IA gratuit et écrire une demande avec une mission, des conditions et un critère de réussite", standard: "pour que la première réponse soit utile" },
    { id: "O3", condition: "Avant d'envoyer une demande", action: "vérifier qu'elle ne contient pas d'informations privées ou sensibles et les enlever ou les remplacer par un repère", standard: "sans partager aucun numéro privé ni aucun détail classifié, contrôlé ou de mission" },
    { id: "O4", condition: "À partir de votre code ou intitulé d'emploi militaire", action: "chercher votre emploi militaire dans le Military Crosswalk d'O*NET et lister les métiers civils correspondants", standard: "avec au moins trois intitulés de métiers civils et deux tâches pour chacun" },
    { id: "O5", condition: "À partir d'une mission de votre service", action: "utiliser un assistant d'IA pour réécrire la mission en lignes de CV civiles avec une échelle et un résultat", standard: "sans jargon militaire et avec chaque affirmation vraie" },
    { id: "O6", condition: "Face à une réponse de l'IA sur les métiers, les salaires ou les programmes", action: "vérifier la réponse avec des sources officielles et choisir une compétence et un programme pour votre prochaine étape", standard: "avant de l'utiliser" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les bases de l'IA pour la mission à venir",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est l'IA et comment elle change le travail",
          minutes: 4,
          goal: "Expliquer avec vos mots ce qu'est l'IA et citer deux façons dont elle change les métiers civils.",
          text: [
            "L'IA, ou intelligence artificielle, ce sont des programmes informatiques qui font des tâches qui demandent d'habitude une personne, comme écrire, résumer, trier des informations ou repérer des tendances. Un assistant d'IA est un programme avec qui vous discutez avec des mots de tous les jours. Parmi les plus connus et gratuits : ChatGPT, Microsoft Copilot et Google Gemini.",
            "Dans le travail civil, l'IA sert maintenant à écrire des premiers jets d'e-mails et de rapports, résumer de longs documents, planifier des horaires et des trajets, répondre aux clients et trouver des problèmes dans des données. En logistique, elle aide à prévoir les approvisionnements ; en maintenance, elle aide à repérer les pièces qui risquent de lâcher ; dans les bureaux, elle écrit des premiers jets.",
            "L'IA ne remplace pas le jugement, le leadership ni la responsabilité. Ce sont des compétences que vous avez acquises sous l'uniforme. Les employeurs veulent des gens qui savent utiliser l'IA comme un outil tout en prenant la décision, en vérifiant le travail et en dirigeant l'équipe."
          ],
          words: [["IA", "abréviation d'intelligence artificielle : des programmes informatiques qui font des tâches qui demandent d'habitude une personne."], ["Assistant d'IA", "un programme d'IA avec qui vous discutez en écrivant ou en parlant."]],
          slides: [
            { title: "L'IA, c'est...", bullets: ["Des programmes qui écrivent, résument, trient et repèrent", "Des assistants : ChatGPT, Copilot, Gemini"] },
            { title: "Comment l'IA change le travail", bullets: ["Premiers jets d'e-mails et de rapports", "Prévoir les stocks et planifier les trajets", "Repérer le matériel qui risque de lâcher"] },
            { title: "Ce que l'IA ne remplace pas", bullets: ["Le jugement et la responsabilité", "Le leadership", "La vérification : c'est vous qui décidez"] }
          ],
          tryIt: "Notez deux tâches de votre emploi militaire et deux tâches d'un emploi civil que vous visez. À côté de chacune, écrivez une façon dont l'IA pourrait aider.",
          youCanNow: "expliquer ce qu'est l'IA, citer des façons dont elle change le travail et dire quelles compétences elle ne remplace pas.",
          quickCheck: [
            { objective: "O1", q: "Pour quelle tâche l'IA est-elle la plus utile dans un emploi civil ?", options: ["Rédiger une première version d'un rapport", "Assumer la responsabilité de la décision finale", "Gagner la confiance d'une équipe", "Diriger des personnes en situation de crise"], answer: 0, why: "L'IA peut rédiger et trier des informations, mais le jugement, la confiance et le commandement restent aux personnes." },
            { objective: "O1", q: "Un collègue dit que l'IA va rendre vos compétences de chef inutiles. Que répondez-vous ?", options: ["Être d'accord et ne plus mentionner le commandement", "Dire que l'IA ne remplace pas le jugement, le commandement ni la responsabilité", "Dire que l'IA n'est utilisée que dans l'armée", "Dire que l'IA a toujours raison, donc les gens ne font que taper"], answer: 1, why: "L'IA change les tâches, mais ce sont toujours des personnes qui dirigent, décident et sont responsables." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ouvrir un assistant et donner un ordre clair",
          minutes: 5,
          goal: "Ouvrir un assistant d'IA gratuit et écrire une demande avec une mission, des conditions et un critère de réussite.",
          text: [
            "Sur un téléphone, installez l'application officielle depuis le magasin d'applications (OpenAI pour ChatGPT, Microsoft pour Copilot, Google pour Gemini). Sur un ordinateur, tapez chatgpt.com, copilot.microsoft.com ou gemini.google.com dans le navigateur.",
            "Ce que vous tapez s'appelle un prompt (une demande). Vous savez déjà donner un ordre clair. Utilisez la même idée : la mission (ce dont vous avez besoin), les conditions (votre situation) et le critère de réussite (à quoi ressemble une bonne réponse : longueur, format, ton).",
            "Exemple : \"Mission : liste des métiers civils qui utilisent des compétences en maintenance de véhicules. Conditions : j'ai été mécanicien de véhicules légers à roues dans l'armée de terre américaine pendant 6 ans. Critère : 5 intitulés de poste, une ligne chacun, mots simples.\""
          ],
          steps: ["Ouvrez l'application ou le site officiel.", "Écrivez la mission : ce dont vous avez besoin.", "Ajoutez les conditions : votre situation, sans détails privés.", "Ajoutez le critère de réussite : longueur, format et ton.", "Envoyez et lisez la réponse."],
          words: [["Prompt (demande)", "ce que vous tapez ou dites à un assistant d'IA pour lui demander quelque chose."], ["Format", "la forme de la réponse, comme une liste, un tableau ou un court paragraphe."]],
          slides: [
            { title: "Où l'ouvrir", bullets: ["Téléphone : application officielle du magasin", "Ordinateur : chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "Un prompt est un ordre clair", bullets: ["Mission : ce dont vous avez besoin", "Conditions : votre situation", "Critère : à quoi ressemble une bonne réponse"] },
            { title: "Exemple", bullets: ["Mission : métiers civils en maintenance de véhicules", "Conditions : 6 ans comme mécanicien de véhicules légers", "Critère : 5 intitulés, une ligne chacun, mots simples"] }
          ],
          tryIt: "Ouvrez un assistant d'IA gratuit. Écrivez une demande avec mission, conditions et critère pour obtenir cinq intitulés de métiers civils qui utilisent les compétences de votre emploi militaire. Lisez la réponse.",
          youCanNow: "ouvrir un assistant d'IA gratuit et écrire une demande avec une mission, des conditions et un critère de réussite.",
          quickCheck: [
            { objective: "O2", q: "Dans une demande en forme d'« ordre clair », qu'est-ce que la mission ?", options: ["Vos informations privées", "La longueur de la réponse", "Ce que vous voulez que l'IA fasse", "Le nom de l'outil d'IA"], answer: 2, why: "La mission, c'est le travail que vous confiez à l'IA ; les conditions et le critère viennent ensuite." },
            { objective: "O2", q: "Vous voulez des idées de métiers civils d'un assistant d'IA. Quelle demande envoyez-vous ?", options: ["« Des emplois ? »", "« Dis-moi tout sur le travail. »", "« Écris toute l'histoire de ma vie. »", "« Mission : lister des métiers civils. Conditions : 4 ans comme spécialiste de l'approvisionnement. Critère : 5 intitulés, une ligne chacun. »"], answer: 3, why: "Une demande avec une mission, des conditions et un critère donne une première réponse utile." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Garder les informations privées et sensibles à l'écart",
          minutes: 5,
          goal: "Vérifier une demande pour y trouver des informations privées ou sensibles et les enlever avant l'envoi.",
          text: [
            "Les assistants d'IA publics peuvent garder ce que vous tapez. Ne tapez jamais votre numéro de sécurité sociale, les numéros de votre DD-214, vos numéros de dossier ou de demande à la VA (l'administration américaine des anciens combattants), vos numéros de compte bancaire ou de carte, vos mots de passe, ni des détails médicaux que vous ne voudriez pas voir partagés.",
            "La même discipline que pour la sécurité des opérations (OPSEC) s'applique. Ne tapez pas d'informations classifiées ou contrôlées, de positions d'unités, de détails de mission, ni rien de ce qu'on vous a dit de ne pas partager. Décrivez votre travail en termes généraux : \"j'ai encadré une équipe de maintenance de 12 personnes\", c'est bien ; les noms d'unités et les missions ne sont pas nécessaires.",
            "Si vous avez besoin d'un numéro dans un document, écrivez un repère comme \"[mon numéro]\" et remplissez-le vous-même plus tard, hors ligne."
          ],
          steps: ["Relisez votre demande avant de l'envoyer.", "Enlevez les numéros personnels, les détails de comptes et les mots de passe.", "Enlevez les détails classifiés, contrôlés ou propres à une mission.", "Utilisez un repère comme \"[mon numéro]\" si besoin."],
          words: [["OPSEC", "sécurité des opérations : protéger les informations qu'un adversaire pourrait utiliser."], ["Repère", "un texte provisoire comme \"[mon numéro]\" que vous remplacez vous-même plus tard."], ["DD-214", "le document américain qui récapitule votre service et votre libération."]],
          slides: [
            { title: "Jamais dans une IA publique", bullets: ["Numéro de sécurité sociale, DD-214 ou dossier VA", "Numéros de compte, de carte et mots de passe", "Détails médicaux privés"] },
            { title: "L'OPSEC s'applique toujours", bullets: ["Pas d'informations classifiées ou contrôlées", "Pas de positions d'unités ni de missions", "Décrivez votre travail en termes généraux"] },
            { title: "Utilisez un repère", bullets: ["Écrivez \"[mon numéro]\" à la place", "Remplissez-le vous-même plus tard, hors ligne"] }
          ],
          tryIt: "Écrivez une demande qui décrit votre dernier emploi militaire d'une façon que vous pourriez partager avec n'importe quel employeur. Relisez-la ligne par ligne et enlevez tout ce qui est privé ou sensible avant de l'envoyer.",
          youCanNow: "vérifier une demande pour y repérer les informations privées et sensibles et les enlever avant l'envoi.",
          quickCheck: [
            { objective: "O3", q: "Vous rédigez une lettre de motivation avec l'IA et elle doit contenir votre numéro de téléphone. Que faites-vous ?", options: ["Taper le vrai numéro pour que la lettre soit terminée", "Écrire « [mon téléphone] » et ajouter le vrai numéro vous-même plus tard", "Taper plutôt votre numéro de sécurité sociale", "Demander à l'IA d'inventer un numéro"], answer: 1, why: "Un repère vous donne l'aide sans mettre un numéro privé dans l'IA." },
            { objective: "O3", q: "Quel détail peut-on mettre sans risque dans une demande à une IA publique ?", options: ["« J'ai formé 8 nouveaux membres de l'équipe aux contrôles de sécurité »", "Les dates et le lieu de déploiement de votre unité", "Des détails d'un briefing classifié", "Votre numéro de dossier VA"], answer: 0, why: "Les missions générales avec des chiffres ne posent pas de problème ; les détails de mission et les numéros privés restent à l'écart." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les bases de l'IA pour la mission à venir",
        questions: [
          { objective: "O1", q: "Qu'est-ce qui décrit le mieux un assistant d'IA ?", options: ["Un recruteur qui lit vos messages", "Un programme informatique avec qui vous discutez avec des mots de tous les jours", "Un bureau des prestations du gouvernement", "Un réseau militaire sécurisé"], answer: 1, why: "Un assistant d'IA est un programme à qui vous écrivez ou parlez et qui vous répond." },
          { objective: "O1", q: "Quelle compétence l'IA ne remplace-t-elle PAS au travail ?", options: ["Écrire le premier jet d'un e-mail", "Résumer un long rapport", "Le jugement et la responsabilité de la décision", "Trier une liste"], answer: 2, why: "L'IA peut écrire et trier, mais une personne prend la décision et en répond." },
          { objective: "O2", q: "Dans une demande en forme d'\"ordre clair\", que sont les conditions ?", options: ["Votre situation, sans détails privés", "La longueur et le format de la réponse", "Le nom de l'application", "Votre mot de passe"], answer: 0, why: "Les conditions décrivent votre situation pour que l'assistant adapte sa réponse." },
          { objective: "O3", q: "Quel détail peut-on taper sans risque dans un assistant d'IA public ?", options: ["Le numéro de votre DD-214", "La position actuelle de votre unité", "\"J'ai encadré une équipe de maintenance de 12 personnes\"", "Votre numéro de demande à la VA"], answer: 2, why: "Une description générale de votre travail est sans risque ; les numéros et les détails de mission ne le sont pas." },
          { objective: "O3", q: "Vous avez besoin de votre numéro de dossier VA dans une lettre écrite avec l'IA. Que faites-vous ?", options: ["Taper le vrai numéro", "En taper la moitié", "Demander à l'IA de le deviner", "Écrire \"[mon numéro]\" et le remplir vous-même plus tard"], answer: 3, why: "Un repère permet d'avoir de l'aide sans partager un numéro privé." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Traduire votre service en travail civil",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trouver les métiers civils qui correspondent à votre service",
          minutes: 5,
          goal: "Chercher votre emploi militaire dans le Military Crosswalk d'O*NET et lister les métiers civils correspondants.",
          text: [
            "O*NET OnLine, du ministère du Travail des États-Unis (U.S. Department of Labor), a un outil de recherche appelé Military Crosswalk. Vous choisissez votre armée (MOS de l'Army ou des Marines, rating de la Navy ou des garde-côtes, AFSC de l'Air Force, SFSC de la Space Force), vous tapez votre code ou votre intitulé de poste, et il montre les métiers civils qui correspondent.",
            "Chaque métier civil sur O*NET liste ses tâches, ses outils et ses compétences. C'est le langage des employeurs. Vous pouvez ensuite demander à un assistant d'IA d'expliquer ces métiers avec des mots simples, mais la liste elle-même vient de la source officielle.",
            "CareerOneStop, aussi soutenu par le ministère du Travail, a un Veterans Job Matcher qui fait une correspondance semblable. Essayez les deux et comparez."
          ],
          steps: ["Allez sur onetonline.org et ouvrez le Military Crosswalk Search.", "Choisissez votre armée.", "Tapez votre code (par exemple 88M ou un rating de la Navy) ou votre intitulé de poste.", "Ouvrez deux ou trois métiers civils correspondants et lisez leurs tâches.", "Notez les intitulés de postes qui vous intéressent."],
          words: [["MOS / rating / AFSC", "le code de votre emploi militaire dans l'Army et les Marines, la Navy et les garde-côtes, et l'Air Force."], ["Crosswalk (table de correspondance)", "un outil qui relie un emploi militaire à des métiers civils."], ["O*NET", "la base de données du ministère du Travail américain sur les métiers civils et les compétences qu'ils demandent."]],
          slides: [
            { title: "Le Military Crosswalk d'O*NET", bullets: ["Géré par le ministère du Travail des États-Unis", "Choisissez votre armée, tapez votre code ou intitulé", "Voyez les métiers civils correspondants"] },
            { title: "Lisez les tâches civiles", bullets: ["Chaque métier liste tâches, outils et compétences", "C'est le langage des employeurs"] },
            { title: "Essayez aussi", bullets: ["Veterans Job Matcher de CareerOneStop", "Comparez les deux listes"] }
          ],
          sources: [{ name: "O*NET OnLine : Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "Ministère du Travail des États-Unis (VETS) : trouver un emploi", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Cherchez votre MOS, rating ou AFSC dans le Military Crosswalk d'O*NET. Notez trois intitulés de métiers civils proposés et deux tâches pour chacun.",
          youCanNow: "utiliser le Military Crosswalk d'O*NET pour trouver des métiers civils qui correspondent à votre emploi militaire.",
          quickCheck: [
            { objective: "O4", q: "Que tapez-vous dans le Military Crosswalk d'O*NET pour trouver des métiers correspondants ?", options: ["Votre numéro de sécurité sociale", "Votre adresse", "Votre entreprise civile préférée", "Votre code ou intitulé d'emploi militaire"], answer: 3, why: "Le Crosswalk cherche par code ou intitulé d'emploi militaire et montre les métiers civils correspondants." },
            { objective: "O4", q: "Le Crosswalk montre plusieurs métiers civils pour votre code. Que faites-vous ensuite ?", options: ["Choisir le premier sans lire", "Ignorer la liste et demander à un ami", "Noter trois intitulés de métiers et deux tâches pour chacun", "Fermer la page et deviner un intitulé"], answer: 2, why: "Noter les intitulés et leurs tâches vous donne des mots civils à utiliser dans votre CV." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Réécrire une mission militaire en mots civils",
          minutes: 5,
          goal: "Utiliser l'IA pour réécrire une mission militaire en ligne de CV civile avec un résultat.",
          text: [
            "Les recruteurs civils ne savent pas forcément ce qu'est un platoon sergeant, un PMCS ou un CONEX. Votre travail est de dire la même chose avec leurs mots : ce que vous avez fait, à quelle échelle, et quel résultat vous avez obtenu.",
            "Donnez à l'IA votre mission en termes simples et le métier civil que vous visez. Exemple : \"Réécris ceci pour un CV de chef d'entrepôt : j'étais responsable d'un magasin d'équipement, 300 références, j'équipais 120 soldats, zéro perte sur 2 inventaires. Donne-moi 3 lignes qui commencent par un verbe fort et contiennent des chiffres.\"",
            "Puis améliorez avec d'autres demandes : \"Enlève le jargon militaire.\" \"Utilise les mots de cette offre d'emploi.\" \"Fais plus court.\" La première réponse est un brouillon ; c'est vous le rédacteur."
          ],
          steps: ["Écrivez la mission en mots simples : quoi, quelle échelle, quel résultat.", "Nommez le métier civil que vous visez.", "Demandez 3 lignes avec des verbes forts et des chiffres.", "Demandez un changement, comme \"enlève le jargon militaire\".", "Relisez et vérifiez que chaque mot est vrai."],
          words: [["Ligne de CV", "une ligne courte d'un CV qui montre quelque chose que vous avez fait et son résultat."], ["Sigle", "un mot fait des premières lettres, comme PMCS ; les civils ne connaissent souvent pas les sigles militaires."]],
          slides: [
            { title: "Dites-le avec leurs mots", bullets: ["Ce que vous avez fait", "L'échelle : personnes, argent, matériel", "Le résultat obtenu"] },
            { title: "Exemple de demande", bullets: ["\"Réécris pour un CV de chef d'entrepôt\"", "Magasin, 300 références, 120 soldats, zéro perte", "\"3 lignes, verbes forts, chiffres\""] },
            { title: "Puis corrigez", bullets: ["\"Enlève le jargon militaire.\"", "\"Utilise les mots de cette offre d'emploi.\"", "Vérifiez que chaque mot est vrai"] }
          ],
          tryIt: "Choisissez une mission de votre service. Demandez à un assistant d'IA de la réécrire en trois lignes de CV civiles pour un intitulé de la leçon 4. Demandez-lui d'enlever le jargon militaire.",
          youCanNow: "réécrire une mission militaire en lignes de CV civiles claires, avec des chiffres et des résultats.",
          quickCheck: [
            { objective: "O5", q: "Quelle ligne de CV est écrite pour un employeur civil ?", options: ["« J'ai dirigé une équipe de 10 personnes qui a réduit de 20 % le temps de réparation du matériel »", "« J'ai servi comme NCOIC du parc automobile IAW SOP »", "« J'ai rempli diverses missions selon les besoins »", "« J'étais responsable de trucs »"], answer: 0, why: "Elle utilise des mots simples et montre ce que vous avez fait, l'échelle et le résultat." },
            { objective: "O5", q: "La ligne de l'IA contient encore « CONUS » et « PCS ». Que demandez-vous ensuite ?", options: ["« Ajoute plus de sigles. »", "« Rends-la plus longue. »", "« Enlève le jargon militaire et utilise des mots civils simples. »", "« Écris-la sous forme de poème. »"], answer: 2, why: "Une demande de suivi pour enlever le jargon transforme le brouillon en mots qu'un lecteur civil comprend." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vérifier la réponse et planifier votre prochaine compétence",
          minutes: 5,
          goal: "Vérifier une réponse de l'IA avec des sources officielles et choisir une compétence à développer ensuite.",
          text: [
            "L'IA peut inventer : un intitulé de poste qui ne convient pas, une certification qui n'existe pas ou un salaire faux. On appelle ça une hallucination. Vérifiez les intitulés sur O*NET, et le salaire et les perspectives d'emploi dans l'Occupational Outlook Handbook du Bureau des statistiques du travail (bls.gov/ooh).",
            "Assurez-vous que vos lignes sont vraies. Ne laissez jamais l'IA gonfler votre grade, vos chiffres ou vos décorations. Un employeur peut vérifier, et la confiance est difficile à regagner.",
            "Puis choisissez une compétence à développer. L'aide officielle gratuite comprend le programme Personalized Career Planning and Guidance de la VA (conseil d'orientation gratuit pour les vétérans et militaires éligibles) et le Transition Assistance Program du ministère du Travail. Pour les formations en haute technologie, le programme VET TEC 2.0 de la VA paie certaines formations technologiques non diplômantes pour les vétérans éligibles. Vérifiez les conditions actuelles sur va.gov."
          ],
          steps: ["Vérifiez chaque intitulé de poste sur O*NET.", "Vérifiez le salaire et les perspectives dans l'Occupational Outlook Handbook.", "Assurez-vous que chaque chiffre et chaque affirmation de vos lignes est vrai.", "Choisissez une compétence à développer et un programme officiel qui peut aider."],
          words: [["Hallucination", "quand une IA écrit quelque chose qui semble vrai mais qui est inventé."], ["Occupational Outlook Handbook", "un guide gratuit du Bureau des statistiques du travail américain sur le salaire, la croissance de l'emploi et l'accès à chaque métier."]],
          slides: [
            { title: "Vérifiez les réponses de l'IA", bullets: ["Intitulés de poste : O*NET", "Salaire et perspectives : bls.gov/ooh", "Ne gonflez jamais grade, chiffres ou décorations"] },
            { title: "Aide officielle gratuite", bullets: ["VA Personalized Career Planning and Guidance", "Transition Assistance Program (TAP) du DOL", "VA VET TEC 2.0 pour la haute technologie"] },
            { title: "Votre prochaine étape", bullets: ["Choisissez une compétence à développer", "Choisissez un programme qui peut aider", "Vérifiez l'éligibilité sur va.gov"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail : Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "VA : Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA : VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Ministère du Travail des États-Unis : Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Tâche finale : reprenez vos trois lignes de la leçon 5. Vérifiez les intitulés de poste dans le Military Crosswalk d'O*NET, demandez une amélioration à l'IA, enlevez tout détail privé ou sensible et enregistrez les lignes finales.",
          youCanNow: "vérifier les réponses de l'IA sur les carrières avec des sources officielles et choisir une compétence et un programme pour votre prochaine étape.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Une réponse de l'IA qui est toujours juste", "Un nouvel outil d'IA pour les vétérans", "Une façon de raccourcir les demandes", "Quelque chose que l'IA écrit, qui semble vrai mais qui est inventé"], answer: 3, why: "L'IA peut inventer des choses avec assurance : vous vérifiez donc les faits avec des sources officielles." },
            { objective: "O6", q: "Une IA vous donne le salaire moyen d'un métier civil. Que faites-vous avant de l'utiliser ?", options: ["Le mettre dans votre CV", "Le vérifier dans l'Occupational Outlook Handbook du Bureau des statistiques du travail", "Demander à l'IA si elle est sûre", "Le partager avec des amis comme un fait"], answer: 1, why: "Les chiffres de salaire viennent de sources officielles comme l'Occupational Outlook Handbook, pas de l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Traduire votre service en travail civil",
        questions: [
          { objective: "O4", q: "Que fait le Military Crosswalk d'O*NET ?", options: ["Il relie votre code d'emploi militaire à des métiers civils", "Il dépose votre demande à la VA", "Il envoie votre CV aux employeurs", "Il paie des formations"], answer: 0, why: "Vous entrez votre MOS, rating ou AFSC et il montre les métiers civils correspondants." },
          { objective: "O5", q: "Quelle ligne de CV est la meilleure pour un employeur civil ?", options: ["\"PMCS sur MTV\"", "\"Entretien préventif de 40 camions ; pannes réduites de 30 %\"", "\"Au parc automobile\"", "\"Hooah\""], answer: 1, why: "Elle utilise des mots civils, des chiffres et un résultat." },
          { objective: "O5", q: "Le brouillon de l'IA ajoute une décoration que vous n'avez pas reçue. Que faites-vous ?", options: ["La garder, ça fait bien", "La rendre plus prestigieuse", "L'enlever ; chaque affirmation doit être vraie", "Demander à un ami si ça passe"], answer: 2, why: "Les affirmations gonflées peuvent être vérifiées et vous coûter le poste." },
          { objective: "O6", q: "Où vérifier le salaire et les perspectives d'un métier civil ?", options: ["Une publication sur un réseau social", "La première réponse de l'IA", "Une publicité", "L'Occupational Outlook Handbook du Bureau des statistiques du travail"], answer: 3, why: "L'Occupational Outlook Handbook est la source officielle pour le salaire et les perspectives." },
          { objective: "O6", q: "Quel programme de la VA offre un conseil d'orientation gratuit aux vétérans éligibles ?", options: ["Personalized Career Planning and Guidance", "Le Military Crosswalk", "Google Gemini", "L'Occupational Outlook Handbook"], answer: 0, why: "La VA présente Personalized Career Planning and Guidance comme un conseil gratuit en carrière et en formation." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'IA et au monde du travail de demain",
    questions: [
      { objective: "O1", q: "L'IA, c'est surtout :", options: ["Des programmes informatiques qui font des tâches qui demandent d'habitude une personne", "Une nouvelle branche de l'armée", "Un type de téléphone", "Un site d'emploi du gouvernement"], answer: 0, why: "Les programmes d'IA écrivent, résument, trient et repèrent des tendances." },
      { objective: "O1", q: "Laquelle est une utilisation de l'IA dans la logistique civile ?", options: ["Signer des contrats pour l'entreprise", "Prévoir les approvisionnements", "Embaucher les managers", "Conduire tous les camions"], answer: 1, why: "L'IA aide à prévoir les approvisionnements nécessaires." },
      { objective: "O1", q: "Quand l'IA est utilisée au travail, qui est responsable de la décision ?", options: ["L'IA", "L'éditeur du logiciel", "La personne qui l'utilise", "Personne"], answer: 2, why: "L'IA est un outil ; la personne prend toujours la décision." },
      { objective: "O2", q: "Quelle adresse web ouvre un assistant d'IA gratuit ?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com est l'adresse officielle de Google pour Gemini." },
      { objective: "O2", q: "Dans une demande en forme d'\"ordre clair\", le critère de réussite, c'est :", options: ["À quoi ressemble une bonne réponse : longueur, format, ton", "Votre grade", "Votre mot de passe", "Le magasin d'applications"], answer: 0, why: "Le critère dit à l'assistant à quoi doit ressembler la réponse." },
      { objective: "O2", q: "Quelle demande donnera la réponse la plus utile ?", options: ["\"emplois\"", "\"Mission : métiers civils avec mes compétences. Conditions : 6 ans mécanicien de véhicules. Critère : 5 intitulés, une ligne chacun.\"", "\"aide-moi\"", "\"trucs militaires\""], answer: 1, why: "Elle donne la mission, les conditions et le critère." },
      { objective: "O3", q: "Que ne faut-il JAMAIS taper dans un assistant d'IA public ?", options: ["\"Fais plus court\"", "\"J'ai dirigé une équipe de 8\"", "Votre numéro de sécurité sociale", "\"Chef d'entrepôt\""], answer: 2, why: "Le numéro de sécurité sociale est privé et ne doit jamais aller dans une IA publique." },
      { objective: "O3", q: "L'OPSEC dans une discussion avec une IA civile, c'est :", options: ["Partager les détails de mission pour avoir de meilleures réponses", "Taper la position de votre unité", "Utiliser votre grade comme mot de passe", "Garder à l'écart les détails classifiés, contrôlés et de mission"], answer: 3, why: "La même discipline protège les informations sensibles hors de l'armée." },
      { objective: "O3", q: "Un repère comme \"[mon numéro]\" vous permet :", options: ["D'avoir de l'aide sans taper le vrai numéro", "De cacher l'IA à votre employeur", "D'être payé plus vite", "De sauter la vérification"], answer: 0, why: "Vous remplissez le vrai numéro vous-même plus tard, hors ligne." },
      { objective: "O4", q: "Le Military Crosswalk d'O*NET est géré par :", options: ["Un recruteur privé", "Le ministère du Travail des États-Unis", "Votre ancienne unité", "Une entreprise d'IA"], answer: 1, why: "O*NET OnLine est un site du ministère du Travail." },
      { objective: "O4", q: "Dans le Military Crosswalk, un vétéran de la Navy cherche par :", options: ["Code postal", "Numéro de sécurité sociale", "Code de rating ou intitulé de poste", "Date de libération"], answer: 2, why: "Vous choisissez l'armée et tapez votre rating ou votre intitulé." },
      { objective: "O4", q: "Un autre outil soutenu par le ministère du Travail qui relie les emplois militaires aux carrières civiles est :", options: ["Un site de loterie", "Une application de carte de crédit", "Un jeu vidéo", "Le Veterans Job Matcher de CareerOneStop"], answer: 3, why: "Le Veterans Job Matcher de CareerOneStop relie les emplois militaires aux carrières civiles." },
      { objective: "O5", q: "Une bonne ligne de CV civile contient :", options: ["Ce que vous avez fait, l'échelle et le résultat", "Seulement des sigles militaires", "La mission de votre unité", "Votre adresse"], answer: 0, why: "Les employeurs civils cherchent l'action, l'échelle et les résultats." },
      { objective: "O5", q: "Quelle demande de suivi aide à traduire un brouillon pour des civils ?", options: ["\"Ajoute plus de sigles.\"", "\"Enlève le jargon militaire.\"", "\"Ajoute mon numéro de DD-214.\"", "\"Invente une décoration.\""], answer: 1, why: "Enlever le jargon rend votre expérience claire pour des lecteurs civils." },
      { objective: "O5", q: "Le premier brouillon de vos lignes par l'IA est :", options: ["Final et parfait", "À envoyer sans le lire", "Un brouillon que vous corrigez et vérifiez", "Toujours faux"], answer: 2, why: "C'est vous le rédacteur ; la première réponse est un brouillon." },
      { objective: "O6", q: "Quand l'IA écrit quelque chose qui semble vrai mais qui est inventé, on appelle ça :", options: ["Un briefing", "Une table de correspondance", "Un repère", "Une hallucination"], answer: 3, why: "C'est le nom courant des réponses inventées par l'IA." },
      { objective: "O6", q: "Où vérifier le salaire d'un métier avant de croire le chiffre de l'IA ?", options: ["L'Occupational Outlook Handbook du Bureau des statistiques du travail", "Un SMS d'un inconnu", "La deuxième réponse de l'IA", "Un mème"], answer: 0, why: "L'Occupational Outlook Handbook donne les chiffres officiels de salaire et de perspectives." },
      { objective: "O6", q: "Le programme VET TEC 2.0 de la VA aide les vétérans éligibles pour :", options: ["Les prêts immobiliers", "Des formations en haute technologie non diplômantes", "Les soins médicaux", "La réparation de voiture"], answer: 1, why: "VET TEC 2.0 paie certaines formations en haute technologie non diplômantes." },
      { objective: "O6", q: "Quel programme du ministère du Travail aide les militaires à passer au travail civil ?", options: ["Seulement le Crosswalk d'O*NET", "Google Gemini", "Le Transition Assistance Program (TAP)", "Un bootcamp privé"], answer: 2, why: "Le TAP donne aux militaires en transition des informations, des outils et des formations." },
      { objective: "O6", q: "Avant d'enregistrer vos lignes de CV finales, vous devez :", options: ["Ajouter votre numéro de compte", "Gonfler vos chiffres", "Sauter la vérification", "Vérifier les intitulés, vous assurer que tout est vrai et enlever les détails privés"], answer: 3, why: "C'est la vérification complète : exact, vrai et sûr." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Demande claire",
        objective: "O2",
        notYet: "La demande est vague, par exemple « corrige mon CV ».",
        meets: "La demande a une mission, des conditions et un critère de réussite.",
        exceeds: "Elle nomme aussi l'intitulé du métier civil, et la première réponse est presque prête."
      },
      {
        name: "Mots civils",
        objective: "O5",
        notYet: "Les lignes utilisent encore du jargon militaire ou n'ont pas de résultat.",
        meets: "Trois lignes en mots civils simples, chacune avec ce que vous avez fait et une échelle ou un résultat.",
        exceeds: "L'apprenant a demandé une amélioration et peut dire ce qu'elle a corrigé."
      },
      {
        name: "Intitulés vérifiés",
        objective: "O4",
        notYet: "Les intitulés de métiers ont été copiés de l'IA sans vérification.",
        meets: "Les intitulés de métiers ont été vérifiés dans le Military Crosswalk d'O*NET.",
        exceeds: "L'apprenant a aussi vérifié le salaire ou les perspectives dans l'Occupational Outlook Handbook."
      },
      {
        name: "Détails privés et sensibles enlevés",
        objective: "O3",
        notYet: "La demande ou les lignes contiennent un numéro privé ou un détail de mission.",
        meets: "Aucun numéro privé et aucun détail classifié, contrôlé ou de mission.",
        exceeds: "A utilisé des repères et peut expliquer pourquoi chaque détail enlevé devait l'être."
      },
      {
        name: "Chaque affirmation vraie",
        objective: "O6",
        notYet: "Une ligne contient une affirmation, un chiffre ou une décoration qui n'est pas vrai.",
        meets: "Chaque affirmation et chaque chiffre des lignes est vrai.",
        exceeds: "L'apprenant a choisi une compétence et un programme pour la prochaine étape."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui disent avoir utilisé leurs nouvelles lignes de CV dans une candidature dans les 30 jours (enquête de suivi)",
      "Apprenants qui obtiennent un entretien ou une offre d'emploi civil dans les 90 jours",
      "Apprenants qui commencent un autre cours Koach Learn pour les vétérans ou un programme de formation dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Les sites gratuits du Military Crosswalk d'O*NET et de l'Occupational Outlook Handbook du Bureau des statistiques du travail",
      "Du papier et un stylo, ou une application de notes, pour les activités « Essayez maintenant »",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Dans un cours de transition ou un centre pour vétérans : faites le test de départ ensemble, puis un chapitre par séance avec les activités « Essayez maintenant » faites en direct.",
      "Rappelez l'OPSEC avant la première demande : aucun détail classifié, contrôlé ou de mission, et aucun numéro privé.",
      "Mettez ensemble des apprenants de différentes armes pour qu'ils s'expliquent leurs lignes en mots civils simples.",
      "Notez l'exercice final avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois.",
      "Orientez les apprenants vers le TAP et le conseil d'orientation de la VA pour une aide individuelle après le cours."
    ]
  }
};
