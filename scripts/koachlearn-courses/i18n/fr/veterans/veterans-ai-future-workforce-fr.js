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
  chapters: [
    {
      name: "Chapitre 1 : Les bases de l'IA pour la mission à venir",
      lessons: [
        {
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
          youCanNow: "expliquer ce qu'est l'IA, citer des façons dont elle change le travail et dire quelles compétences elle ne remplace pas."
        },
        {
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
          youCanNow: "ouvrir un assistant d'IA gratuit et écrire une demande avec une mission, des conditions et un critère de réussite."
        },
        {
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
          youCanNow: "vérifier une demande pour y repérer les informations privées et sensibles et les enlever avant l'envoi."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les bases de l'IA pour la mission à venir",
        questions: [
          { q: "Qu'est-ce qui décrit le mieux un assistant d'IA ?", options: ["Un recruteur qui lit vos messages", "Un programme informatique avec qui vous discutez avec des mots de tous les jours", "Un bureau des prestations du gouvernement", "Un réseau militaire sécurisé"], answer: 1, why: "Un assistant d'IA est un programme à qui vous écrivez ou parlez et qui vous répond." },
          { q: "Quelle compétence l'IA ne remplace-t-elle PAS au travail ?", options: ["Écrire le premier jet d'un e-mail", "Résumer un long rapport", "Le jugement et la responsabilité de la décision", "Trier une liste"], answer: 2, why: "L'IA peut écrire et trier, mais une personne prend la décision et en répond." },
          { q: "Dans une demande en forme d'\"ordre clair\", que sont les conditions ?", options: ["Votre situation, sans détails privés", "La longueur et le format de la réponse", "Le nom de l'application", "Votre mot de passe"], answer: 0, why: "Les conditions décrivent votre situation pour que l'assistant adapte sa réponse." },
          { q: "Quel détail peut-on taper sans risque dans un assistant d'IA public ?", options: ["Le numéro de votre DD-214", "La position actuelle de votre unité", "\"J'ai encadré une équipe de maintenance de 12 personnes\"", "Votre numéro de demande à la VA"], answer: 2, why: "Une description générale de votre travail est sans risque ; les numéros et les détails de mission ne le sont pas." },
          { q: "Vous avez besoin de votre numéro de dossier VA dans une lettre écrite avec l'IA. Que faites-vous ?", options: ["Taper le vrai numéro", "En taper la moitié", "Demander à l'IA de le deviner", "Écrire \"[mon numéro]\" et le remplir vous-même plus tard"], answer: 3, why: "Un repère permet d'avoir de l'aide sans partager un numéro privé." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Traduire votre service en travail civil",
      lessons: [
        {
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
          youCanNow: "utiliser le Military Crosswalk d'O*NET pour trouver des métiers civils qui correspondent à votre emploi militaire."
        },
        {
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
          youCanNow: "réécrire une mission militaire en lignes de CV civiles claires, avec des chiffres et des résultats."
        },
        {
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
          youCanNow: "vérifier les réponses de l'IA sur les carrières avec des sources officielles et choisir une compétence et un programme pour votre prochaine étape."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Traduire votre service en travail civil",
        questions: [
          { q: "Que fait le Military Crosswalk d'O*NET ?", options: ["Il relie votre code d'emploi militaire à des métiers civils", "Il dépose votre demande à la VA", "Il envoie votre CV aux employeurs", "Il paie des formations"], answer: 0, why: "Vous entrez votre MOS, rating ou AFSC et il montre les métiers civils correspondants." },
          { q: "Quelle ligne de CV est la meilleure pour un employeur civil ?", options: ["\"PMCS sur MTV\"", "\"Entretien préventif de 40 camions ; pannes réduites de 30 %\"", "\"Au parc automobile\"", "\"Hooah\""], answer: 1, why: "Elle utilise des mots civils, des chiffres et un résultat." },
          { q: "Le brouillon de l'IA ajoute une décoration que vous n'avez pas reçue. Que faites-vous ?", options: ["La garder, ça fait bien", "La rendre plus prestigieuse", "L'enlever ; chaque affirmation doit être vraie", "Demander à un ami si ça passe"], answer: 2, why: "Les affirmations gonflées peuvent être vérifiées et vous coûter le poste." },
          { q: "Où vérifier le salaire et les perspectives d'un métier civil ?", options: ["Une publication sur un réseau social", "La première réponse de l'IA", "Une publicité", "L'Occupational Outlook Handbook du Bureau des statistiques du travail"], answer: 3, why: "L'Occupational Outlook Handbook est la source officielle pour le salaire et les perspectives." },
          { q: "Quel programme de la VA offre un conseil d'orientation gratuit aux vétérans éligibles ?", options: ["Personalized Career Planning and Guidance", "Le Military Crosswalk", "Google Gemini", "L'Occupational Outlook Handbook"], answer: 0, why: "La VA présente Personalized Career Planning and Guidance comme un conseil gratuit en carrière et en formation." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'IA et au monde du travail de demain",
    questions: [
      { q: "L'IA, c'est surtout :", options: ["Des programmes informatiques qui font des tâches qui demandent d'habitude une personne", "Une nouvelle branche de l'armée", "Un type de téléphone", "Un site d'emploi du gouvernement"], answer: 0, why: "Les programmes d'IA écrivent, résument, trient et repèrent des tendances." },
      { q: "Laquelle est une utilisation de l'IA dans la logistique civile ?", options: ["Signer des contrats pour l'entreprise", "Prévoir les approvisionnements", "Embaucher les managers", "Conduire tous les camions"], answer: 1, why: "L'IA aide à prévoir les approvisionnements nécessaires." },
      { q: "Quand l'IA est utilisée au travail, qui est responsable de la décision ?", options: ["L'IA", "L'éditeur du logiciel", "La personne qui l'utilise", "Personne"], answer: 2, why: "L'IA est un outil ; la personne prend toujours la décision." },
      { q: "Quelle adresse web ouvre un assistant d'IA gratuit ?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com est l'adresse officielle de Google pour Gemini." },
      { q: "Dans une demande en forme d'\"ordre clair\", le critère de réussite, c'est :", options: ["À quoi ressemble une bonne réponse : longueur, format, ton", "Votre grade", "Votre mot de passe", "Le magasin d'applications"], answer: 0, why: "Le critère dit à l'assistant à quoi doit ressembler la réponse." },
      { q: "Quelle demande donnera la réponse la plus utile ?", options: ["\"emplois\"", "\"Mission : métiers civils avec mes compétences. Conditions : 6 ans mécanicien de véhicules. Critère : 5 intitulés, une ligne chacun.\"", "\"aide-moi\"", "\"trucs militaires\""], answer: 1, why: "Elle donne la mission, les conditions et le critère." },
      { q: "Que ne faut-il JAMAIS taper dans un assistant d'IA public ?", options: ["\"Fais plus court\"", "\"J'ai dirigé une équipe de 8\"", "Votre numéro de sécurité sociale", "\"Chef d'entrepôt\""], answer: 2, why: "Le numéro de sécurité sociale est privé et ne doit jamais aller dans une IA publique." },
      { q: "L'OPSEC dans une discussion avec une IA civile, c'est :", options: ["Partager les détails de mission pour avoir de meilleures réponses", "Taper la position de votre unité", "Utiliser votre grade comme mot de passe", "Garder à l'écart les détails classifiés, contrôlés et de mission"], answer: 3, why: "La même discipline protège les informations sensibles hors de l'armée." },
      { q: "Un repère comme \"[mon numéro]\" vous permet :", options: ["D'avoir de l'aide sans taper le vrai numéro", "De cacher l'IA à votre employeur", "D'être payé plus vite", "De sauter la vérification"], answer: 0, why: "Vous remplissez le vrai numéro vous-même plus tard, hors ligne." },
      { q: "Le Military Crosswalk d'O*NET est géré par :", options: ["Un recruteur privé", "Le ministère du Travail des États-Unis", "Votre ancienne unité", "Une entreprise d'IA"], answer: 1, why: "O*NET OnLine est un site du ministère du Travail." },
      { q: "Dans le Military Crosswalk, un vétéran de la Navy cherche par :", options: ["Code postal", "Numéro de sécurité sociale", "Code de rating ou intitulé de poste", "Date de libération"], answer: 2, why: "Vous choisissez l'armée et tapez votre rating ou votre intitulé." },
      { q: "Un autre outil soutenu par le ministère du Travail qui relie les emplois militaires aux carrières civiles est :", options: ["Un site de loterie", "Une application de carte de crédit", "Un jeu vidéo", "Le Veterans Job Matcher de CareerOneStop"], answer: 3, why: "Le Veterans Job Matcher de CareerOneStop relie les emplois militaires aux carrières civiles." },
      { q: "Une bonne ligne de CV civile contient :", options: ["Ce que vous avez fait, l'échelle et le résultat", "Seulement des sigles militaires", "La mission de votre unité", "Votre adresse"], answer: 0, why: "Les employeurs civils cherchent l'action, l'échelle et les résultats." },
      { q: "Quelle demande de suivi aide à traduire un brouillon pour des civils ?", options: ["\"Ajoute plus de sigles.\"", "\"Enlève le jargon militaire.\"", "\"Ajoute mon numéro de DD-214.\"", "\"Invente une décoration.\""], answer: 1, why: "Enlever le jargon rend votre expérience claire pour des lecteurs civils." },
      { q: "Le premier brouillon de vos lignes par l'IA est :", options: ["Final et parfait", "À envoyer sans le lire", "Un brouillon que vous corrigez et vérifiez", "Toujours faux"], answer: 2, why: "C'est vous le rédacteur ; la première réponse est un brouillon." },
      { q: "Quand l'IA écrit quelque chose qui semble vrai mais qui est inventé, on appelle ça :", options: ["Un briefing", "Une table de correspondance", "Un repère", "Une hallucination"], answer: 3, why: "C'est le nom courant des réponses inventées par l'IA." },
      { q: "Où vérifier le salaire d'un métier avant de croire le chiffre de l'IA ?", options: ["L'Occupational Outlook Handbook du Bureau des statistiques du travail", "Un SMS d'un inconnu", "La deuxième réponse de l'IA", "Un mème"], answer: 0, why: "L'Occupational Outlook Handbook donne les chiffres officiels de salaire et de perspectives." },
      { q: "Le programme VET TEC 2.0 de la VA aide les vétérans éligibles pour :", options: ["Les prêts immobiliers", "Des formations en haute technologie non diplômantes", "Les soins médicaux", "La réparation de voiture"], answer: 1, why: "VET TEC 2.0 paie certaines formations en haute technologie non diplômantes." },
      { q: "Quel programme du ministère du Travail aide les militaires à passer au travail civil ?", options: ["Seulement le Crosswalk d'O*NET", "Google Gemini", "Le Transition Assistance Program (TAP)", "Un bootcamp privé"], answer: 2, why: "Le TAP donne aux militaires en transition des informations, des outils et des formations." },
      { q: "Avant d'enregistrer vos lignes de CV finales, vous devez :", options: ["Ajouter votre numéro de compte", "Gonfler vos chiffres", "Sauter la vérification", "Vérifier les intitulés, vous assurer que tout est vrai et enlever les détails privés"], answer: 3, why: "C'est la vérification complète : exact, vrai et sûr." }
    ]
  }
};
