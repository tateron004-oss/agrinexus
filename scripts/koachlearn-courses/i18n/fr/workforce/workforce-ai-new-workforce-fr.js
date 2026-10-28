"use strict";

// Koach Learn course (French translation of workforce/workforce-ai-new-workforce.js). See scripts/koachlearn-courses/README.md, "Translations".

const BLS_OOH = { name: "Bureau des statistiques du travail des États-Unis : Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (ministère du Travail des États-Unis) : trouver des formations et des American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-fr",
  lang: "fr",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "L'IA dans le nouveau monde du travail",
  skills: "Comprendre comment l'IA change les tâches, Découper votre emploi en tâches, Repérer les tâches où l'IA peut aider, Trouver des informations fiables sur l'avenir des métiers, Construire un plan de montée en compétences sur 90 jours, Parler de vos compétences en IA avec les employeurs",
  outcome: "découper votre emploi actuel ou visé en tâches, marquer celles où l'IA peut aider et celles qui dépendent de compétences humaines, chercher les perspectives de votre domaine sur une source officielle, et en faire un plan de montée en compétences sur 90 jours et une façon courte et honnête de décrire vos compétences en IA à un employeur.",
  about: [
    "Ce cours s'adresse aux personnes qui cherchent un emploi ou qui travaillent et qui entendent sans cesse que l'IA va changer les métiers, et veulent savoir ce que ça veut dire pour elles : travailleurs de l'entrepôt et de la logistique, employés du commerce et du service client, employés de bureau et administratifs, aides dans la santé, artisans et chauffeurs.",
    "Vous verrez comment l'IA change surtout des tâches plutôt que des métiers entiers, vous regarderez votre propre emploi tâche par tâche, vous trouverez des informations fiables sur votre domaine, et vous ferez un plan concret pour développer les compétences qui vous gardent précieux. Vous terminerez en vous entraînant à parler de vos compétences en IA en entretien ou avec votre responsable.",
    "Nous ne prédisons pas quels métiers vont disparaître, et aucun cours ne peut promettre un emploi ou une augmentation. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "Les sources officielles citées sont américaines. Si vous vivez dans un autre pays, cherchez aussi le service public de l'emploi et les statistiques officielles sur les métiers de votre pays."
  ],
  finalTask: "Faites votre plan de carrière avec l'IA : une liste des tâches de votre emploi actuel ou visé, chacune marquée \"l'IA peut aider\", \"compétence humaine\" ou \"les deux\" ; trois faits sur votre domaine tirés de l'Occupational Outlook Handbook du BLS ; un plan de montée en compétences sur 90 jours avec trois compétences, des ressources gratuites et un temps par semaine ; et une réponse de 30 secondes, honnête et précise, à \"Comment utilisez-vous l'IA dans votre travail ?\".",
  chapters: [
    {
      name: "Chapitre 1 : Comment l'IA change le travail",
      lessons: [
        {
          title: "L'IA change les tâches, pas seulement les métiers",
          minutes: 5,
          goal: "Expliquer comment l'IA touche les tâches à l'intérieur d'un emploi.",
          text: [
            "Chaque emploi est un ensemble de tâches. Une secrétaire médicale répond au téléphone, prend les rendez-vous, vérifie l'assurance, accueille les patients et rassure les personnes inquiètes. Un chef d'équipe d'entrepôt planifie les équipes, suit le stock, forme les nouveaux et règle les problèmes sur le terrain.",
            "Les outils d'IA sont bons pour certaines tâches : écrire des premiers jets de messages, résumer, chercher dans des informations, remplir des formulaires, trier et repérer des tendances. Ils sont faibles pour d'autres : le travail physique, sentir l'ambiance, créer la confiance, gérer une situation nouvelle et assumer la responsabilité.",
            "Donc, dans beaucoup d'emplois, l'IA change les tâches qui prennent du temps. Les personnes qui apprennent à utiliser l'IA pour les tâches répétitives ont souvent plus de temps pour les tâches humaines, et cela peut les rendre plus précieuses."
          ],
          words: [["Tâche", "un morceau de travail dans un emploi, comme prendre un rendez-vous."], ["Tâche répétitive", "une tâche faite de la même façon encore et encore."], ["Montée en compétences", "apprendre de nouvelles compétences pour mieux faire votre travail ou évoluer."]],
          slides: [
            { title: "Un emploi est un ensemble de tâches", bullets: ["Secrétaire médicale : téléphone, rendez-vous, assurance, accueil", "Chef d'entrepôt : équipes, stock, formation, problèmes"] },
            { title: "Ce que l'IA fait bien", bullets: ["Premiers jets et résumés", "Recherche et formulaires", "Tri et repérage de tendances"] },
            { title: "Ce que les personnes font le mieux", bullets: ["Le travail physique", "Sentir l'ambiance et créer la confiance", "Gérer le nouveau ; assumer la responsabilité"] }
          ],
          tryIt: "Écrivez l'intitulé de votre emploi actuel ou du dernier, et listez au moins huit tâches que vous faites (ou faisiez) dans une semaine normale.",
          youCanNow: "expliquer comment l'IA touche les tâches à l'intérieur d'un emploi."
        },
        {
          title: "Marquer vos tâches : l'IA peut aider, compétence humaine, ou les deux",
          minutes: 5,
          goal: "Trier les tâches de votre emploi selon l'aide que peut apporter l'IA.",
          text: [
            "Prenez votre liste de tâches et marquez chacune. \"L'IA peut aider\" : écrire un e-mail, faire une liste de contrôle, résumer un long règlement. \"Compétence humaine\" : calmer un client mécontent en face à face, soulever et charger en sécurité, réparer une machine. \"Les deux\" : écrire un rapport où l'IA fait un premier jet et vous vérifiez les faits, ou faire un planning où l'IA propose et vous décidez.",
            "Vous pouvez demander à un assistant d'IA de vous aider à réfléchir : \"Je suis chef d'équipe dans un magasin. Voici mes tâches. Pour lesquelles un assistant d'IA pourrait-il aider, et comment ?\" Puis utilisez votre propre jugement : vous connaissez le métier mieux que lui.",
            "Regardez les tâches \"compétence humaine\". Ce sont des forces à développer et à mettre en avant devant les employeurs : communication, travail d'équipe, résolution de problèmes, sécurité, attention aux autres."
          ],
          steps: ["Marquez chaque tâche : l'IA peut aider, compétence humaine, ou les deux.", "Demandez des idées à un assistant d'IA, puis décidez vous-même.", "Entourez deux tâches \"l'IA peut aider\" à essayer ce mois-ci.", "Soulignez vos tâches \"compétence humaine\" les plus fortes."],
          words: [["Compétences humaines", "des compétences comme la communication, le travail d'équipe, le jugement et l'attention aux autres, que les personnes font le mieux ; on parle aussi de savoir-être ou de compétences durables."]],
          slides: [
            { title: "Trois étiquettes", bullets: ["L'IA peut aider : e-mails, listes, résumés", "Compétence humaine : calmer, soulever, réparer", "Les deux : l'IA rédige, vous vérifiez et décidez"] },
            { title: "Demandez à l'IA, puis décidez", bullets: ["\"Pour quelles tâches l'IA pourrait-elle aider ?\"", "Vous connaissez le métier mieux qu'elle"] },
            { title: "Vos forces", bullets: ["Communication et travail d'équipe", "Résolution de problèmes et sécurité", "Attention aux autres et jugement"] }
          ],
          tryIt: "Étiquetez chaque tâche de votre liste. Entourez deux tâches \"l'IA peut aider\" que vous essaierez ce mois-ci, et soulignez vos deux tâches de compétence humaine les plus fortes.",
          youCanNow: "trier les tâches de votre emploi selon l'aide de l'IA et selon l'importance de vos compétences humaines."
        },
        {
          title: "Trouver des informations fiables sur votre domaine",
          minutes: 5,
          goal: "Chercher les perspectives de votre métier sur une source officielle.",
          text: [
            "Les titres sur l'IA et l'emploi sont souvent alarmistes ou exagérés. Utilisez plutôt des sources officielles fondées sur des données. Aux États-Unis, le Bureau des statistiques du travail (Bureau of Labor Statistics, BLS) publie l'Occupational Outlook Handbook sur bls.gov/ooh. Pour des centaines de métiers, il montre en quoi consiste le travail, la formation habituelle, le salaire et les perspectives d'emploi prévues.",
            "Cherchez votre métier, puis notez : ce que font les travailleurs, comment le devenir, le salaire médian et les perspectives. Regardez aussi les métiers proches : ils peuvent montrer les étapes suivantes.",
            "CareerOneStop, du ministère du Travail des États-Unis, vous aide à trouver des formations et votre American Job Center local, qui peut proposer des services d'orientation gratuits. Demandez à l'IA d'expliquer ce qui n'est pas clair sur ces pages, mais prenez les chiffres sur la page elle-même. Si vous vivez ailleurs, faites la même recherche sur le site du service public de l'emploi de votre pays."
          ],
          steps: ["Allez sur bls.gov/ooh et cherchez votre métier.", "Notez : ce qu'ils font, comment le devenir, le salaire médian, les perspectives.", "Regardez deux métiers proches.", "Trouvez votre American Job Center local sur CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics : l'agence américaine qui publie les données sur l'emploi et les salaires."], ["Perspectives d'emploi", "l'évolution prévue du nombre d'emplois dans un métier."], ["Salaire médian", "le salaire du milieu : la moitié gagne plus, l'autre moitié moins."]],
          slides: [
            { title: "Évitez le battage", bullets: ["Utilisez des sources officielles fondées sur des données", "Occupational Outlook Handbook du BLS : bls.gov/ooh"] },
            { title: "Ce qu'il faut noter", bullets: ["Ce que font les travailleurs", "Comment le devenir", "Salaire médian et perspectives"] },
            { title: "Aide locale gratuite", bullets: ["CareerOneStop : formations et centres pour l'emploi", "Les American Job Centers offrent de l'orientation", "Les chiffres viennent de la page, pas de l'IA"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Cherchez votre métier actuel ou visé sur bls.gov/ooh. Notez trois faits de la page, puis trouvez l'American Job Center le plus proche sur CareerOneStop (ou le service public de l'emploi de votre pays).",
          youCanNow: "trouver des informations fiables sur les perspectives et les formations de votre domaine."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment l'IA change le travail",
        questions: [
          { q: "Dans beaucoup d'emplois, l'IA change surtout :", options: ["Rien du tout", "Les tâches qui prennent du temps", "Chaque tâche complètement", "Seulement l'intitulé du poste"], answer: 1, why: "L'IA touche les tâches à l'intérieur des emplois." },
          { q: "Pour quelle tâche l'IA est-elle en général douée ?", options: ["Réparer un chariot élévateur", "Calmer un client mécontent en face à face", "Soulever des cartons en sécurité", "Écrire un premier jet d'e-mail de routine"], answer: 3, why: "Rédiger du texte est un point fort des outils d'IA." },
          { q: "Écrire un rapport où l'IA fait un premier jet et vous vérifiez les faits est étiqueté :", options: ["Les deux", "Compétence humaine seulement", "IA seulement", "Aucun"], answer: 0, why: "L'IA aide et une personne vérifie." },
          { q: "Où trouver les perspectives d'emploi officielles d'un métier aux États-Unis ?", options: ["Une supposition de l'IA", "Une vidéo virale", "L'Occupational Outlook Handbook du BLS", "Un fil de commentaires"], answer: 2, why: "Le BLS publie les données officielles sur les perspectives." },
          { q: "Que peut offrir un American Job Center ?", options: ["Des prêts", "Des emplois garantis", "Des services d'orientation gratuits et des informations sur les formations", "Des diplômes universitaires"], answer: 2, why: "Ils offrent des services d'orientation ; aucune garantie." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire votre plan",
      lessons: [
        {
          title: "Choisir trois compétences à développer",
          minutes: 5,
          goal: "Choisir trois compétences adaptées à votre emploi et à vos objectifs.",
          text: [
            "Choisissez un mélange : une compétence d'outil d'IA, une compétence de votre domaine et une compétence humaine. Exemple pour un employé d'entrepôt qui veut devenir chef d'équipe : (1) utiliser un assistant d'IA pour écrire des notes de relève claires, (2) apprendre le logiciel de gestion d'entrepôt et les bases de l'inventaire, (3) encadrer et former les nouveaux.",
            "Utilisez ce que vous avez trouvé : la partie \"How to become one\" (comment le devenir) du BLS, les offres d'emploi pour le poste visé et votre liste de tâches. Les compétences qui apparaissent dans beaucoup d'offres valent la peine d'être apprises.",
            "Demandez à l'IA de vous aider à comparer : \"Voici cinq offres d'emploi de chef d'équipe d'entrepôt. Quelles compétences reviennent le plus souvent ?\" Collez seulement les offres, rien de privé."
          ],
          steps: ["Rassemblez trois à cinq offres d'emploi pour le poste visé.", "Listez les compétences qu'elles demandent le plus.", "Choisissez une compétence d'outil d'IA, une de votre domaine et une humaine.", "Écrivez pourquoi chacune compte."],
          words: [["Offre d'emploi", "une annonce qui liste les missions et les compétences demandées pour un poste."], ["Compétence métier", "une compétence propre à votre type de travail, comme les logiciels de stock ou les termes médicaux."]],
          slides: [
            { title: "Choisissez un mélange de trois", bullets: ["Une compétence d'outil d'IA", "Une compétence métier", "Une compétence humaine"] },
            { title: "Où chercher", bullets: ["\"How to become one\" du BLS", "Offres d'emploi pour le poste visé", "Votre propre liste de tâches"] },
            { title: "L'IA peut comparer les offres", bullets: ["\"Quelles compétences reviennent le plus ?\"", "Collez seulement les offres, rien de privé"] }
          ],
          tryIt: "Trouvez trois offres d'emploi pour un poste qui vous intéresse. Demandez à l'IA quelles compétences reviennent le plus souvent, puis choisissez vos trois compétences et écrivez pourquoi chacune compte.",
          youCanNow: "choisir trois compétences à développer à partir de vraies offres d'emploi et de vos objectifs."
        },
        {
          title: "Construire un plan de montée en compétences sur 90 jours",
          minutes: 5,
          goal: "Transformer vos trois compétences en plan réaliste sur 90 jours.",
          text: [
            "Un plan fait que l'apprentissage a vraiment lieu. Pour chaque compétence, écrivez : une ressource gratuite ou peu chère, un temps par semaine, et une façon de prouver que vous l'avez apprise. La preuve peut être un certificat, un projet, un exemple de travail ou votre responsable qui vous voit faire.",
            "Les ressources gratuites comprennent votre bibliothèque (beaucoup offrent des cours en ligne gratuits), les American Job Centers, les community colleges (établissements publics d'études courtes), les formations de l'employeur, et des cours gratuits de grandes entreprises technologiques. Vérifiez le coût et les détails sur le site officiel de chacun.",
            "Restez modeste : deux ou trois heures par semaine valent mieux qu'un grand plan abandonné. Utilisez un assistant d'IA pour faire le planning hebdomadaire et vous interroger, et entraînez-vous à la compétence IA sur de vraies tâches au travail si votre employeur le permet."
          ],
          steps: ["Pour chaque compétence : ressource, temps par semaine, preuve.", "Vérifiez le coût et les détails de chaque ressource sur son site officiel.", "Mettez les moments d'apprentissage hebdomadaires dans votre agenda.", "Faites le point aux jours 30, 60 et 90."],
          words: [["Preuve de compétence", "quelque chose qui montre que vous savez le faire : un certificat, un projet ou un exemple de travail."], ["Community college", "un établissement public local aux États-Unis qui propose des cours et des certificats peu chers."]],
          slides: [
            { title: "Pour chaque compétence", bullets: ["Une ressource gratuite ou peu chère", "Un temps par semaine", "Une façon de la prouver"] },
            { title: "Où apprendre gratuitement", bullets: ["Cours en ligne de la bibliothèque", "American Job Centers et community colleges", "Formations de l'employeur"] },
            { title: "Restez modeste", bullets: ["2 à 3 heures par semaine, tenables", "L'IA fait le planning et vous interroge", "Faites le point à 30, 60 et 90 jours"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Écrivez votre plan sur 90 jours : pour chacune de vos trois compétences, une ressource, un temps par semaine et une preuve. Mettez les moments d'étude des deux premières semaines dans votre agenda.",
          youCanNow: "construire un plan réaliste sur 90 jours pour apprendre trois nouvelles compétences."
        },
        {
          title: "Parler de vos compétences en IA avec les employeurs",
          minutes: 5,
          goal: "Donner une réponse courte, honnête et précise sur votre utilisation de l'IA au travail.",
          text: [
            "Les employeurs demandent de plus en plus : \"Comment utilisez-vous l'IA ?\" Une bonne réponse est précise et honnête, et montre du jugement. Utilisez le modèle : Tâche, Outil, Vérification, Résultat.",
            "Exemple : \"J'utilise Microsoft Copilot pour écrire mes notes de fin de service (tâche et outil). Je vérifie toujours les quantités avec le rapport du scanner avant de les envoyer (vérification). Ça me fait gagner environ 15 minutes par service, et le chef d'équipe suivant reçoit des notes plus claires (résultat).\"",
            "N'exagérez jamais. N'affirmez pas des compétences que vous n'avez pas, et suivez la politique de votre employeur sur l'IA : ne mettez pas d'informations confidentielles de l'entreprise ou des clients dans des outils d'IA. Montrer que vous connaissez les limites fait partie de la compétence."
          ],
          steps: ["Choisissez une vraie tâche où vous avez utilisé l'IA (ou vous êtes entraîné).", "Dites la tâche, l'outil, comment vous avez vérifié et le résultat.", "Restez à environ 30 secondes.", "Entraînez-vous à voix haute."],
          words: [["Politique sur l'IA", "les règles d'un employeur sur la façon dont le personnel peut utiliser les outils d'IA."], ["Informations confidentielles", "des informations de l'entreprise ou des clients qui ne doivent pas sortir de l'entreprise."]],
          slides: [
            { title: "Tâche, Outil, Vérification, Résultat", bullets: ["Ce que vous avez fait", "Quel outil d'IA", "Comment vous avez vérifié", "Ce que ça a amélioré"] },
            { title: "Exemple", bullets: ["\"Copilot m'aide à écrire mes notes de fin de service.", "Je vérifie les quantités avec le rapport du scanner.", "Ça me fait gagner 15 minutes par service.\""] },
            { title: "Montrez du jugement", bullets: ["N'exagérez jamais vos compétences", "Suivez la politique de votre employeur sur l'IA", "Gardez les données confidentielles hors de l'IA"] }
          ],
          tryIt: "Tâche finale : terminez votre plan de carrière avec l'IA : liste de tâches étiquetées, trois faits du BLS, votre plan sur 90 jours, et une réponse de 30 secondes Tâche-Outil-Vérification-Résultat que vous répétez à voix haute.",
          youCanNow: "planifier votre évolution dans un monde du travail transformé par l'IA et parler honnêtement de vos compétences en IA avec les employeurs."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire votre plan",
        questions: [
          { q: "Un bon mélange de trois compétences est :", options: ["Une compétence d'outil d'IA, une compétence métier, une compétence humaine", "Trois applications au hasard", "Seulement des compétences en IA", "Aucune"], answer: 0, why: "Un mélange vous garde équilibré et précieux." },
          { q: "Où voir les compétences que veulent les employeurs ?", options: ["Un mème", "Un horoscope", "Une supposition de l'IA", "De vraies offres d'emploi pour le poste visé"], answer: 3, why: "Les offres listent les compétences demandées." },
          { q: "Quel plan a le plus de chances de marcher ?", options: ["40 heures ce week-end seulement", "2 à 3 heures par semaine, dans votre agenda", "Quand vous en avez envie", "Aucun plan"], answer: 1, why: "Les petits plans réguliers se réalisent." },
          { q: "Dans Tâche, Outil, Vérification, Résultat, \"Vérification\" veut dire :", options: ["Comment vous avez vérifié le travail de l'IA", "Votre fiche de paie", "Un chèque bancaire", "Vérifier vos e-mails"], answer: 0, why: "Vérifier montre du jugement." },
          { q: "Que ne faut-il PAS faire quand vous décrivez vos compétences en IA ?", options: ["Dire comment vous vérifiez le travail", "Donner un exemple précis", "Affirmer des compétences que vous n'avez pas", "Suivre la politique de votre employeur"], answer: 2, why: "L'honnêteté compte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA dans le nouveau monde du travail",
    questions: [
      { q: "Un emploi, c'est surtout :", options: ["Une seule tâche", "Un ensemble de tâches", "Seulement un intitulé", "Une fiche de paie"], answer: 1, why: "Les emplois contiennent beaucoup de tâches." },
      { q: "Laquelle est une tâche répétitive ?", options: ["Animer une réunion d'équipe", "Rassurer un patient qui a peur", "Gérer une urgence toute nouvelle", "Écrire le même rapport chaque jour"], answer: 3, why: "Les tâches répétitives se refont de la même façon." },
      { q: "Qu'est-ce que la montée en compétences ?", options: ["Un type d'IA", "Démissionner", "Travailler moins d'heures", "Apprendre de nouvelles compétences pour mieux faire ou évoluer"], answer: 3, why: "La montée en compétences développe de nouvelles compétences." },
      { q: "Laquelle est une compétence humaine ?", options: ["Trier un tableur", "Créer la confiance avec les clients", "Résumer un document", "Corriger l'orthographe"], answer: 1, why: "Créer la confiance est une force humaine." },
      { q: "Quand l'IA étiquette vos tâches, qui a le dernier mot ?", options: ["Votre voisin", "L'IA", "Vous", "Personne"], answer: 2, why: "Vous connaissez le mieux votre métier." },
      { q: "Pourquoi souligner vos tâches de compétence humaine ?", options: ["Ce sont des forces à développer et à mettre en avant", "Pour les supprimer", "Pour les cacher", "Elles ne comptent pas"], answer: 0, why: "Les compétences humaines gardent leur valeur." },
      { q: "BLS veut dire :", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "Le BLS publie les données sur l'emploi." },
      { q: "L'Occupational Outlook Handbook montre :", options: ["Ce que font les travailleurs, comment le devenir, le salaire et les perspectives", "Les nouvelles des célébrités", "Des conseils boursiers", "Des recettes"], answer: 0, why: "Ce sont ses parties principales." },
      { q: "Où prendre les chiffres sur les perspectives d'emploi ?", options: ["Dans un résumé de l'IA sans vérifier", "Sur la page officielle", "Dans un titre d'actualité", "Dans une rumeur"], answer: 1, why: "L'IA peut se tromper sur les chiffres." },
      { q: "CareerOneStop vient :", options: ["D'un opérateur téléphonique", "D'un réseau social", "D'une banque", "Du ministère du Travail des États-Unis"], answer: 3, why: "C'est une ressource du ministère du Travail." },
      { q: "Les compétences qui apparaissent dans beaucoup d'offres d'emploi :", options: ["Valent la peine d'être apprises", "Ne sont pas importantes", "Sont illégales", "Sont dépassées"], answer: 0, why: "Les employeurs les veulent clairement." },
      { q: "Quand vous collez des offres d'emploi dans l'IA, laissez de côté :", options: ["Les listes de compétences", "Le texte de l'offre", "L'intitulé du poste", "Vos informations privées"], answer: 3, why: "Gardez les détails privés à l'écart." },
      { q: "Laquelle est une preuve de compétence ?", options: ["Une rumeur", "Un souhait", "Un certificat, un projet ou un exemple de travail", "Une publication disant que vous êtes bon"], answer: 2, why: "Une preuve montre ce que vous savez faire." },
      { q: "Où trouve-t-on souvent des cours en ligne gratuits ?", options: ["Dans les publicités", "À votre bibliothèque", "Dans les spams", "Nulle part"], answer: 1, why: "Beaucoup de bibliothèques proposent des cours gratuits." },
      { q: "Quand faire le point sur votre plan de 90 jours ?", options: ["Toutes les heures", "Jamais", "Seulement le premier jour", "Aux jours 30, 60 et 90"], answer: 3, why: "Faire le point régulièrement vous garde sur la bonne voie." },
      { q: "Une bonne réponse sur vos compétences en IA est :", options: ["Copiée sur un site", "Vague et exagérée", "Précise et honnête", "Inventée"], answer: 2, why: "Les réponses précises et honnêtes créent la confiance." },
      { q: "Qu'est-ce qui a sa place dans une réponse Tâche-Outil-Vérification-Résultat ?", options: ["\"Je vérifie les quantités avec le rapport du scanner.\"", "\"L'IA fait tout mon travail.\"", "\"Je colle les données des clients dans des chatbots.\"", "\"Je ne vérifie jamais rien.\""], answer: 0, why: "Elle montre comment vous vérifiez." },
      { q: "Avant d'utiliser l'IA au travail, vous devez connaître :", options: ["Le mot de passe d'un collègue", "La politique de votre employeur sur l'IA", "Les numéros de carte des clients", "Rien"], answer: 1, why: "La politique fixe ce qui est permis." },
      { q: "Les informations confidentielles de l'entreprise doivent :", options: ["Être collées dans n'importe quel chatbot", "Rester hors des outils d'IA sauf accord de l'employeur", "Être publiées en ligne", "Être partagées avec des amis"], answer: 1, why: "Elles doivent être protégées." },
      { q: "Que promet ce cours sur l'emploi ?", options: ["Rien ; il vous aide à planifier et à développer vos compétences", "Un emploi garanti", "Une augmentation garantie", "Une promotion"], answer: 0, why: "Aucun cours ne peut promettre de résultats." }
    ]
  }
};
