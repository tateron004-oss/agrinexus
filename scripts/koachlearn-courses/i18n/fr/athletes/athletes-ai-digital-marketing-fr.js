"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-digital-marketing.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-digital-marketing-fr",
  lang: "fr",
  translationOf: "athletes-ai-digital-marketing",
  category: "Athletes",
  name: "Stratégies de marketing numérique avec l'IA pour les sportifs",
  skills: "Fixer un objectif marketing, Définir son public, Choisir ses canaux, Préparer un plan de 4 semaines avec l'IA, Mesurer les résultats et ajuster",
  outcome: "utiliser un assistant IA pour construire et mener un plan de marketing numérique simple de 4 semaines pour vous en tant que sportif : un objectif, un public, deux canaux, un plan de publication hebdomadaire et trois chiffres à suivre.",
  about: [
    "Ce cours s'adresse aux sportifs du lycée, de l'université et en début de carrière qui veulent développer leur public de façon réfléchie, pour le recrutement, des opportunités NIL (aux États-Unis, le droit des sportifs universitaires d'être payés pour leur nom, leur image et leur notoriété), un stage sportif ou une future carrière, ainsi qu'aux entraîneurs qui les aident.",
    "Faire du marketing, c'est amener les bonnes personnes à vous connaître, à vous apprécier et à vous faire confiance. Vous fixerez un objectif, choisirez votre public et vos canaux, utiliserez l'IA pour préparer un plan de 4 semaines et apprendrez quels chiffres surveiller.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Les règles NIL varient selon l'établissement, l'État et le niveau ; vérifiez auprès de votre service de conformité ou de votre fédération avant tout contrat rémunéré."
  ],
  finalTask: "Écrivez un plan marketing d'une page sur 4 semaines : un objectif SMART, une description du public, deux canaux, un plan de publication hebdomadaire préparé avec l'IA et trois chiffres à suivre. Menez la première semaine, notez les chiffres et écrivez un changement pour la deuxième semaine.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs de lycée, d'université et en début de carrière qui veulent développer un public de façon réfléchie, pour le recrutement, des opportunités NIL, un stage ou une future carrière, et les entraîneurs qui les aident.",
    startingPoint: "Ils utilisent les réseaux sociaux tous les jours et publient de temps en temps, en général sans plan. Peu ont un objectif écrit, un public défini, un plan de publication ou des chiffres qu'ils suivent, et beaucoup ne connaissent pas bien les règles de mention pour les cadeaux ou les publications payées.",
    gap: "Publier sans objectif ni public mène rarement à des réponses d'entraîneurs, à des inscriptions ou à l'intérêt d'une marque, et des publications malhonnêtes ou sans mention peuvent abîmer la confiance et enfreindre les règles de la publicité. Un plan simple de quatre semaines, avec des publications honnêtes et des chiffres suivis, transforme les réseaux sociaux en vraies opportunités.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone avec des applications de réseaux sociaux et un assistant IA gratuit ; seulement des outils gratuits",
      "Environ 60 minutes de leçons, plus quatre semaines de publications en parallèle des cours et de l'entraînement",
      "Les règles d'âge des plateformes ; les sportifs de moins de 18 ans impliquent un parent ou un tuteur",
      "Les règles de mention de la FTC, les règles NIL de l'établissement et de la NCAA ou de la ligue, et la sécurité personnelle : pas de position en direct ni de détails sur le domicile"
    ],
    prerequisites: "Aucun"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de ce que vous voulez dans les quatre prochaines semaines", action: "écrire un objectif marketing SMART", standard: "avec les cinq parties de SMART, dont un chiffre et une date" },
    { id: "O2", condition: "À partir du groupe que vous voulez toucher", action: "écrire un court profil de public : qui ils sont, ce qui compte pour eux, où ils passent du temps en ligne et ce qui les fait agir", standard: "vérifié avec deux ou trois vraies personnes de ce groupe" },
    { id: "O3", condition: "À partir de votre profil de public", action: "choisir deux canaux où votre public passe déjà du temps", standard: "avec une raison pour chacun, et les règles d'âge et les réglages de confidentialité vérifiés" },
    { id: "O4", condition: "Avec un assistant IA gratuit", action: "créer un plan de publication de 4 semaines avec une idée, un format et un appel à l'action pour chaque publication", standard: "modifié pour s'adapter à votre emploi du temps, et sans partager de position en direct, de domicile ni d'emploi du temps scolaire" },
    { id: "O5", condition: "À partir d'une légende rédigée par l'IA", action: "la réécrire en publication honnête, avec votre voix, et une mention claire quand une marque vous donne quoi que ce soit", standard: "sans aucune affirmation que vous ne pouvez pas prouver, et avec une mention facile à voir avec la publication" },
    { id: "O6", condition: "Après chaque semaine de publication", action: "noter trois chiffres liés à votre objectif et choisir un changement pour la semaine suivante", standard: "notés chaque semaine dans un tableau, avec un changement décidé par vous" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Objectif, public et canaux",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fixer un objectif marketing",
          minutes: 5,
          goal: "Écrire un objectif marketing SMART pour les quatre prochaines semaines.",
          text: [
            "Du marketing sans objectif, c'est juste publier. Décidez ce que vous voulez dans les quatre prochaines semaines : vous faire remarquer par des entraîneurs universitaires, remplir un stage pour les jeunes, construire un public qui intéresserait une marque, ou vous faire connaître pour votre future carrière.",
            "Rendez-le SMART : Spécifique, Mesurable, Atteignable, Réaliste (pertinent pour vous) et Temporellement défini. « Obtenir 15 inscriptions à mon stage de tir gratuit de cet été d'ici le 30 juin » est SMART. « Devenir célèbre » ne l'est pas.",
            "Un assistant IA peut vous aider à le préciser : « Je joue au basket au lycée. Aide-moi à transformer \"me faire voir par plus d'entraîneurs universitaires\" en objectif SMART pour les 4 prochaines semaines. »"
          ],
          steps: ["Choisissez ce que vous voulez dans 4 semaines.", "Ajoutez un chiffre.", "Ajoutez une date.", "Vérifiez qu'il est réaliste et qu'il compte pour vous."],
          words: [["Marketing", "amener les bonnes personnes à vous connaître, à vous apprécier et à vous faire confiance, vous ou ce que vous proposez."], ["Objectif SMART", "Spécifique, Mesurable, Atteignable, Réaliste et Temporellement défini."]],
          slides: [
            { title: "Pas d'objectif = juste publier", bullets: ["Recrutement ? Stage ? Public ? Carrière ?"] },
            { title: "SMART", bullets: ["Spécifique, Mesurable, Atteignable", "Réaliste, Temporellement défini"] },
            { title: "Exemple", bullets: ["« 15 inscriptions à mon stage gratuit d'ici le 30 juin »", "Pas : « devenir célèbre »"] }
          ],
          tryIt: "Écrivez un objectif marketing pour les quatre prochaines semaines. Demandez à un assistant IA de le rendre SMART, puis modifiez-le pour qu'il soit vrai et réaliste pour vous.",
          youCanNow: "écrire un objectif marketing SMART.",
          quickCheck: [
            { objective: "O1", q: "Que veut dire le M de SMART ?", options: ["Mesurable", "Marketing", "Mensuel", "Motivant"], answer: 0, why: "SMART veut dire Spécifique, Mesurable, Atteignable, Réaliste et Temporellement défini." },
            { objective: "O1", q: "Votre objectif est « que plus d'entraîneurs me remarquent ». Qu'ajoutez-vous pour le rendre SMART ?", options: ["Plus de hashtags", "Un plus grand nombre d'abonnés", "Un chiffre et une date, comme 5 réponses d'entraîneurs d'ici le 1er mars", "Une nouvelle photo de profil"], answer: 2, why: "Un objectif SMART a un chiffre et une date que vous pouvez vérifier." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Connaître votre public",
          minutes: 5,
          goal: "Décrire les personnes que vous voulez toucher dans un court profil.",
          text: [
            "Votre public, c'est le groupe précis que vous voulez toucher. Un entraîneur universitaire, le parent d'un enfant de 10 ans qui veut un stage, un commerçant du coin et un fan de votre sport ne veulent pas la même chose.",
            "Écrivez un court profil de public : qui ils sont, ce qui compte pour eux, où ils passent du temps en ligne et ce qui les ferait passer à l'action. Exemple : « Parents d'enfants du quartier de 8 à 12 ans, occupés, qui tiennent à un encadrement sûr et amusant, utilisent les groupes Facebook et Instagram, s'inscrivent quand ils voient de vrais avis. »",
            "L'IA peut vous aider à imaginer ce qui compte pour votre public. Vérifiez ensuite en demandant à deux ou trois vraies personnes de ce groupe."
          ],
          steps: ["Nommez le groupe.", "Écrivez ce qui compte pour eux.", "Écrivez où ils passent du temps en ligne.", "Écrivez ce qui les fait agir.", "Vérifiez avec deux ou trois vraies personnes."],
          words: [["Public", "les personnes précises que vous voulez toucher."], ["Profil de public", "une courte description de qui ils sont et de ce qu'ils veulent."]],
          slides: [
            { title: "Des publics différents", bullets: ["Entraîneurs universitaires", "Parents pour les stages", "Commerces locaux", "Fans de votre sport"] },
            { title: "Profil de public", bullets: ["Qui ils sont", "Ce qui compte pour eux", "Où ils sont en ligne", "Ce qui les fait agir"] },
            { title: "Vérifiez-le", bullets: ["Demandez des idées à l'IA", "Puis demandez à 2 ou 3 vraies personnes"] }
          ],
          tryIt: "Écrivez un profil de public pour votre objectif. Demandez à un assistant IA : « Qu'est-ce qui pourrait encore compter pour ce public ? » Ajoutez une idée, puis demandez à une vraie personne de ce groupe si c'est juste.",
          youCanNow: "écrire un court profil de public pour votre objectif.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui a sa place dans un profil de public ?", options: ["Votre chanson préférée", "Votre numéro de maillot", "Votre horaire d'entraînement", "L'endroit où le public passe du temps en ligne"], answer: 3, why: "Le profil dit qui ils sont, ce qui compte pour eux, où ils passent du temps et ce qui les fait agir." },
            { objective: "O2", q: "Un assistant IA a listé ce qui compte pour les parents d'un stage. Que faites-vous ensuite ?", options: ["Demander à deux ou trois vrais parents du stage si c'est juste", "Le publier comme un fait", "Redemander à l'IA jusqu'à ce qu'elle soit d'accord avec vous", "Laisser tomber le profil"], answer: 0, why: "Vérifiez les idées de l'IA avec de vraies personnes de ce groupe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Choisir vos canaux",
          minutes: 5,
          goal: "Choisir deux canaux où votre public passe déjà du temps.",
          text: [
            "Un canal est un endroit où vous touchez les gens : Instagram, TikTok, YouTube, X, LinkedIn, les groupes Facebook, l'e-mail, un site web, ou en personne aux matchs et aux événements locaux.",
            "Choisissez seulement deux canaux pour commencer, en fonction de votre public, pas de la mode. Les entraîneurs universitaires regardent souvent des vidéos de meilleurs moments et des profils de recrutement, plus l'e-mail. Les parents pour un stage utilisent peut-être les groupes Facebook et les affiches locales. Les marques regardent à quel point vos abonnés interagissent.",
            "Vérifiez les règles d'âge de chaque plateforme et réglez vos comptes pour contrôler qui peut vous contacter. Si vous avez moins de 18 ans, impliquez un parent ou un tuteur."
          ],
          steps: ["Listez où votre public passe du temps.", "Choisissez les deux qui correspondent le mieux.", "Vérifiez les règles d'âge et les réglages de confidentialité.", "Écrivez pourquoi vous avez choisi chaque canal."],
          words: [["Canal", "un endroit où vous touchez votre public, comme une application sociale ou l'e-mail."], ["Engagement", "la façon dont les gens interagissent avec vos publications : j'aime, commentaires, partages, enregistrements."]],
          slides: [
            { title: "Les canaux", bullets: ["Réseaux : Instagram, TikTok, YouTube, X, LinkedIn", "E-mail et site web", "En personne aux matchs et événements"] },
            { title: "Choisissez-en deux", bullets: ["Là où votre public se trouve déjà", "Pas seulement ce qui est à la mode"] },
            { title: "Restez en sécurité", bullets: ["Vérifiez les règles d'âge", "Contrôlez qui peut vous contacter", "Moins de 18 ans : impliquez un parent"] }
          ],
          tryIt: "Choisissez vos deux canaux et écrivez pour chacun une phrase qui explique pourquoi votre public s'y trouve. Vérifiez les réglages de confidentialité de chaque compte.",
          youCanNow: "choisir deux canaux adaptés à votre public et les configurer en sécurité.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un canal ?", options: ["Votre plan d'entraînement", "Un endroit où vous touchez des gens, comme Instagram, l'e-mail ou un site web", "Un type de caméra", "Un nombre d'abonnés"], answer: 1, why: "Les canaux sont les endroits où vous touchez votre public." },
            { objective: "O3", q: "Une nouvelle application est à la mode, mais votre public de parents du stage est dans des groupes Facebook. Que faites-vous ?", options: ["Utiliser seulement l'application à la mode", "Rejoindre cinq nouvelles applications", "Choisir des canaux où votre public est déjà, comme les groupes Facebook", "Arrêter de publier"], answer: 2, why: "Choisissez les canaux selon le public, pas selon la mode." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Objectif, public et canaux",
        questions: [
          { objective: "O1", q: "Lequel est un objectif SMART ?", options: ["Devenir célèbre", "Publier plus", "Obtenir 15 inscriptions à mon stage gratuit d'ici le 30 juin", "Être une marque"], answer: 2, why: "Il est précis, mesurable et a une date." },
          { objective: "O2", q: "Qu'est-ce qu'un public ?", options: ["Les personnes précises que vous voulez toucher", "Tout le monde sur internet", "Seulement vos coéquipiers", "Un type de publication"], answer: 0, why: "Le marketing marche mieux quand il vise un groupe précis." },
          { objective: "O2", q: "Comment vérifier votre profil de public ?", options: ["Faire entièrement confiance à l'IA", "Deviner", "Publier et espérer", "Demander à deux ou trois vraies personnes de ce groupe"], answer: 3, why: "De vraies personnes vous disent si vos suppositions sont justes." },
          { objective: "O3", q: "Avec combien de canaux commencer ?", options: ["Toutes les applications", "Deux", "Dix", "Aucun"], answer: 1, why: "Deux canaux bien tenus valent mieux que beaucoup mal tenus." },
          { objective: "O3", q: "Vous avez 16 ans et ouvrez un compte public. Vous devez :", options: ["Donner votre adresse", "Impliquer un parent ou tuteur et vérifier les règles d'âge", "Laisser n'importe qui vous écrire", "Mentir sur votre âge"], answer: 1, why: "La sécurité et les règles d'âge passent en premier." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier, publier et mesurer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Préparer un plan de 4 semaines avec l'IA",
          minutes: 6,
          goal: "Utiliser un assistant IA pour préparer un plan de publication de 4 semaines et le modifier.",
          text: [
            "Donnez à un assistant IA votre objectif, votre profil de public et vos canaux, et demandez : « Fais un plan de 4 semaines avec 3 publications par semaine sur ces deux canaux. Pour chaque publication, donne l'idée, le format (photo, courte vidéo, story, e-mail) et un appel à l'action. Présente-le dans un tableau. »",
            "Un appel à l'action dit aux gens quoi faire ensuite : « Inscrivez-vous via le lien », « Regardez tous mes meilleurs moments », « Écrivez-moi pour les infos du stage ». Chaque publication qui sert votre objectif doit en avoir un.",
            "Modifiez le plan pour qu'il s'accorde à votre emploi du temps d'entraînement et de cours. Ne prévoyez jamais de publications qui montrent à des inconnus votre position exacte en temps réel, votre domicile ou votre emploi du temps scolaire."
          ],
          steps: ["Collez votre objectif, votre profil de public et vos canaux.", "Demandez un tableau sur 4 semaines : idée, format, appel à l'action.", "Modifiez-le selon votre emploi du temps.", "Retirez tout ce qui partage votre position en direct ou votre domicile."],
          words: [["Appel à l'action", "une prochaine étape claire que vous demandez aux gens de faire."], ["Plan de contenu", "un calendrier de ce que vous publierez et quand."]],
          slides: [
            { title: "Donnez à l'IA", bullets: ["Votre objectif SMART", "Votre profil de public", "Vos deux canaux"] },
            { title: "Demandez un tableau", bullets: ["3 publications par semaine pendant 4 semaines", "Idée, format, appel à l'action"] },
            { title: "Puis modifiez", bullets: ["Adaptez à votre emploi du temps", "Ni position en direct ni détails sur votre domicile"] }
          ],
          tryIt: "Demandez à un assistant IA votre plan de 4 semaines sous forme de tableau. Modifiez au moins trois lignes pour qu'elles collent à votre vrai emploi du temps et à votre façon de parler.",
          youCanNow: "préparer et modifier un plan marketing de 4 semaines avec l'IA.",
          quickCheck: [
            { objective: "O4", q: "Quelles trois choses chaque publication de votre tableau de plan doit-elle avoir ?", options: ["Une idée, un format et un appel à l'action", "Des j'aime, des partages et des enregistrements", "Un lieu, une heure et une adresse", "Seulement des hashtags"], answer: 0, why: "La leçon demande une idée, un format et un appel à l'action pour chaque publication." },
            { objective: "O4", q: "Le plan de l'IA comprend une story qui vous montre en train de quitter votre maison chaque matin. Que faites-vous ?", options: ["La garder, elle montre votre routine", "La publier un jour plus tard", "La retirer, car elle révèle votre domicile et votre emploi du temps", "Y ajouter votre adresse"], answer: 2, why: "Ne prévoyez jamais de publication qui montre votre domicile ou votre position en direct à des inconnus." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Écrire des publications qui vous ressemblent, honnêtement",
          minutes: 5,
          goal: "Transformer les idées du plan en publications honnêtes, avec votre voix, et des mentions quand il le faut.",
          text: [
            "L'IA peut écrire un premier jet de légende, mais les gens suivent des sportifs parce qu'ils sont authentiques. Demandez trois propositions à l'IA, puis réécrivez la meilleure avec vos mots. Lisez-la à voix haute : est-ce que ça vous ressemble ?",
            "Soyez honnête. N'utilisez pas de fausses statistiques, de faux abonnés ni d'affirmations que vous ne pouvez pas prouver. Les entraîneurs, les marques et les fans vérifient.",
            "Si une entreprise vous donne de l'argent, des produits gratuits ou tout autre avantage pour publier, la FTC (l'agence américaine qui fait respecter le droit de la publicité) dit que vous devez l'indiquer clairement, par exemple « Publicité » ou « Merci à [marque] pour l'équipement offert », directement avec la publication, pas noyé dans les hashtags. Dans les vidéos, dites-le et affichez-le à l'écran. Les sportifs universitaires doivent parfois aussi déclarer leurs contrats ; demandez à votre service de conformité. Ailleurs qu'aux États-Unis, des règles semblables existent souvent : renseignez-vous."
          ],
          steps: ["Demandez trois propositions de légende à l'IA.", "Réécrivez la meilleure avec vos mots.", "Retirez toute affirmation que vous ne pouvez pas prouver.", "S'il y a un avantage d'une marque, ajoutez une mention claire.", "Lisez-la à voix haute avant de publier."],
          words: [["Légende", "le texte qui accompagne une publication."], ["Mention", "une phrase claire qui dit que vous avez été payé ou que l'on vous a donné quelque chose pour publier."]],
          slides: [
            { title: "L'IA fait le brouillon, vous finissez", bullets: ["Demandez trois propositions", "Réécrivez avec vos mots", "Lisez à voix haute"] },
            { title: "Soyez honnête", bullets: ["Ni fausses statistiques ni faux abonnés", "Aucune affirmation impossible à prouver"] },
            { title: "Payé ou produit offert ?", bullets: ["Dites-le clairement : « Publicité » ou « Merci [marque] pour l'équipement offert »", "Avec la publication, pas noyé dans les hashtags", "En vidéo : dites-le et affichez-le"] }
          ],
          sources: [
            { name: "FTC : Disclosures 101 for Social Media Influencers (mentions pour les influenceurs, en anglais)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA : Name, Image and Likeness (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Prenez une idée de publication de votre plan. Demandez à l'IA trois propositions de légende, réécrivez-en une avec votre voix et lisez-la à voix haute. Si une marque est concernée, ajoutez une mention claire.",
          youCanNow: "écrire des publications honnêtes avec votre voix et indiquer clairement vos liens avec des marques.",
          quickCheck: [
            { objective: "O5", q: "Quelle agence américaine fait respecter la règle de mention des publications payées ou offertes ?", options: ["La NCAA", "La FTC", "La FDA", "Le service des sports de votre établissement"], answer: 1, why: "La FTC fait respecter le droit de la publicité aux États-Unis." },
            { objective: "O5", q: "Une salle de sport locale vous offre un mois gratuit pour parler d'elle. Où mettez-vous la mention ?", options: ["À la fin de 30 hashtags", "Dans un commentaire une semaine plus tard", "Nulle part, car ce n'était pas de l'argent", "Directement avec la publication, facile à voir"], answer: 3, why: "Tout avantage compte, et la mention doit être claire avec la publication." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer et ajuster",
          minutes: 5,
          goal: "Suivre trois chiffres chaque semaine et faire un changement en fonction d'eux.",
          text: [
            "Choisissez trois chiffres liés à votre objectif. Pour un stage : clics sur le lien, inscriptions et commentaires qui posent des questions. Pour le recrutement : vues du profil, vues de la vidéo des meilleurs moments et réponses d'entraîneurs. Le nombre d'abonnés seul peut tromper.",
            "La plupart des applications sociales affichent ces chiffres dans leur espace statistiques ou analyses pour les comptes professionnels ou créateurs. Notez-les dans un tableau une fois par semaine.",
            "Chaque semaine, demandez-vous : qu'est-ce qui a le mieux marché, et que vais-je changer ? Vous pouvez coller vos chiffres de la semaine dans un assistant IA et lui demander une suggestion, puis décider vous-même."
          ],
          steps: ["Choisissez trois chiffres liés à votre objectif.", "Notez-les chaque semaine dans un tableau.", "Trouvez votre meilleure et votre moins bonne publication.", "Faites un changement pour la semaine suivante."],
          words: [["Statistiques (analytics)", "des chiffres qui montrent comment marchent vos publications et vos pages."], ["Indicateur de vanité", "un chiffre flatteur qui ne montre pas de progrès vers votre objectif."]],
          slides: [
            { title: "Trois chiffres liés à votre objectif", bullets: ["Stage : clics, inscriptions, questions", "Recrutement : vues, réponses d'entraîneurs"] },
            { title: "Routine de la semaine", bullets: ["Notez les chiffres dans un tableau", "Meilleure et moins bonne publication", "Un changement pour la semaine suivante"] },
            { title: "Attention", bullets: ["Les abonnés seuls peuvent tromper", "L'IA suggère ; vous décidez"] }
          ],
          tryIt: "Tâche finale : mettez sur une page votre objectif, votre public, vos canaux, votre plan préparé avec l'IA et trois chiffres. Menez la première semaine, notez les chiffres et écrivez un changement pour la deuxième semaine.",
          youCanNow: "mesurer votre marketing avec trois chiffres utiles et ajuster chaque semaine.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi le nombre d'abonnés seul peut-il vous tromper ?", options: ["Il ne montre pas forcément si les gens font l'action dont votre objectif a besoin", "Il est toujours faux", "Les applications le cachent", "Il change trop lentement"], answer: 0, why: "Choisissez des chiffres liés à votre objectif, comme les inscriptions ou les réponses d'entraîneurs." },
            { objective: "O6", q: "La première semaine montre que vos vidéos ont eu beaucoup plus de clics que vos photos. Que faites-vous ?", options: ["Tout changer d'un coup", "Ignorer les chiffres", "Faire un seul changement, comme plus de vidéos courtes la semaine suivante", "Supprimer vos photos"], answer: 2, why: "Faites un changement par semaine en fonction de vos chiffres." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier, publier et mesurer",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un appel à l'action ?", options: ["Un coup de fil à votre entraîneur", "Un type de hashtag", "Une pénalité", "Une prochaine étape claire que vous demandez aux gens de faire"], answer: 3, why: "Il dit à votre public quoi faire ensuite." },
          { objective: "O4", q: "Quel détail votre plan doit-il éviter ?", options: ["Votre position en direct ou votre domicile", "Votre sport", "Vos meilleurs moments", "Le lien d'inscription à votre stage"], answer: 0, why: "Votre position en direct et votre domicile peuvent vous mettre en danger." },
          { objective: "O5", q: "Un magasin de chaussures vous offre des chaussures pour que vous publiiez. Que doit contenir votre publication ?", options: ["Rien de plus", "Un hashtag caché à la fin", "Une mention claire comme « Merci [magasin] pour les chaussures offertes »", "Un faux avis"], answer: 2, why: "La FTC dit que les produits offerts comptent et doivent être clairement indiqués." },
          { objective: "O6", q: "Lequel est sans doute un indicateur de vanité pour un objectif de stage ?", options: ["Les inscriptions", "Les clics sur le lien", "Les questions sur le stage", "Le nombre d'abonnés seul"], answer: 3, why: "Les abonnés ne montrent pas de progrès vers les inscriptions." },
          { objective: "O6", q: "Après la première semaine, la meilleure étape suivante est :", options: ["Abandonner", "Faire un changement en fonction de vos chiffres", "Tout changer", "Acheter des abonnés"], answer: 1, why: "Un changement à la fois montre ce qui marche." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Stratégies de marketing numérique avec l'IA pour les sportifs",
    questions: [
      { objective: "O1", q: "Faire du marketing, c'est :", options: ["Publier au hasard", "Acheter des abonnés", "Amener les bonnes personnes à vous connaître, à vous apprécier et à vous faire confiance", "Seulement vendre des choses"], answer: 2, why: "Il s'agit des bonnes personnes et de la confiance." },
      { objective: "O1", q: "Que veut dire le T de SMART ?", options: ["Temporellement défini", "Tendance", "Total", "Team"], answer: 0, why: "Un objectif SMART a une échéance." },
      { objective: "O1", q: "Quel objectif n'est PAS SMART ?", options: ["Devenir célèbre", "Obtenir 10 réponses d'entraîneurs d'ici le 1er mars", "Vendre 30 places de stage d'ici le 15 mai", "Obtenir 200 vues de mes meilleurs moments d'ici vendredi"], answer: 0, why: "« Devenir célèbre » n'a ni chiffre ni date." },
      { objective: "O2", q: "Un profil de public contient :", options: ["Leurs mots de passe", "Seulement vos statistiques", "Qui ils sont et ce qui compte pour eux", "Les statistiques de votre rival"], answer: 2, why: "Il décrit les personnes que vous voulez toucher." },
      { objective: "O2", q: "Les parents pour un stage passent peut-être du temps :", options: ["Seulement sur les jeux vidéo", "Dans les groupes Facebook et les lieux du quartier", "Seulement sur LinkedIn", "Nulle part en ligne"], answer: 1, why: "Choisissez les canaux où se trouve ce public." },
      { objective: "O3", q: "Comment choisir vos canaux ?", options: ["Selon la mode", "Là où votre public passe déjà du temps", "Tous", "Au hasard"], answer: 1, why: "Allez là où se trouve votre public." },
      { objective: "O3", q: "L'engagement, c'est :", options: ["Se marier", "Seulement les abonnés", "La façon dont les gens interagissent : j'aime, commentaires, partages, enregistrements", "Les publicités"], answer: 2, why: "L'engagement montre un vrai intérêt." },
      { objective: "O4", q: "Que donner à l'IA pour préparer votre plan ?", options: ["Votre mot de passe", "Votre adresse", "Vos coordonnées bancaires", "Votre objectif, votre profil de public et vos canaux"], answer: 3, why: "Ces éléments adaptent le plan à votre objectif." },
      { objective: "O4", q: "Un bon tableau de plan contient :", options: ["L'idée, le format et l'appel à l'action", "Seulement des hashtags", "Seulement des dates", "Vos notes scolaires"], answer: 0, why: "Chaque publication a besoin d'une idée, d'un format et d'une prochaine étape." },
      { objective: "O4", q: "Lequel est un appel à l'action ?", options: ["« Belle journée »", "« Inscrivez-vous via le lien »", "« Mdr »", "« Le match était sympa »"], answer: 1, why: "Il dit aux gens quoi faire ensuite." },
      { objective: "O5", q: "L'IA écrit une légende. Vous devez :", options: ["La publier sans la lire", "Copier celle de quelqu'un d'autre", "La réécrire avec votre voix", "Ajouter de fausses statistiques"], answer: 2, why: "Les gens vous suivent parce que vous êtes authentique." },
      { objective: "O5", q: "Que ne faut-il jamais publier ?", options: ["De fausses statistiques", "Vos meilleurs moments", "Un merci à votre entraîneur", "Les infos de votre stage"], answer: 0, why: "L'honnêteté compte ; les gens vérifient." },
      { objective: "O5", q: "Où placer une mention ?", options: ["Cachée parmi beaucoup de hashtags", "Seulement dans votre bio", "Nulle part", "Avec la publication, bien visible"], answer: 3, why: "La FTC dit que les mentions doivent être impossibles à rater." },
      { objective: "O5", q: "Dans une vidéo sponsorisée, la mention doit être :", options: ["Seulement dans la description", "Dite et affichée à l'écran", "Absente", "Dans un commentaire"], answer: 1, why: "Les mentions en vidéo doivent être dans la vidéo elle-même." },
      { objective: "O5", q: "À qui un sportif universitaire doit-il demander pour la déclaration NIL ?", options: ["À un fan au hasard", "Au service de conformité", "Seulement à une IA", "À personne"], answer: 1, why: "Les règles varient selon l'établissement et le niveau." },
      { objective: "O6", q: "Où trouve-t-on en général les chiffres des publications ?", options: ["Dans l'application météo", "Dans votre calendrier", "Nulle part", "Dans les statistiques ou analyses de l'application"], answer: 3, why: "Les comptes professionnels ou créateurs affichent des statistiques." },
      { objective: "O6", q: "Pour un objectif de recrutement, quel chiffre compte le plus ?", options: ["Les réponses d'entraîneurs", "Des j'aime au hasard", "Le nombre d'émojis", "La couleur du profil"], answer: 0, why: "Les réponses d'entraîneurs montrent un vrai progrès." },
      { objective: "O6", q: "À quelle fréquence noter vos chiffres ?", options: ["Une fois par an", "Jamais", "Chaque semaine", "Chaque minute"], answer: 2, why: "Chaque semaine permet d'ajuster à temps." },
      { objective: "O6", q: "L'IA propose un changement. Qui décide ?", options: ["L'IA", "Vos abonnés", "Personne", "Vous"], answer: 3, why: "L'IA suggère ; vous décidez." },
      { objective: "O6", q: "Combien de changements faire chaque semaine ?", options: ["Dix", "Un", "Tout", "Jamais aucun"], answer: 1, why: "Un changement à la fois montre ce qui a marché." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      8,
      10,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Objectif SMART",
        objective: "O1",
        notYet: "L'objectif est vague, ou n'a ni chiffre ni date.",
        meets: "Un objectif avec les cinq parties de SMART pour les quatre prochaines semaines.",
        exceeds: "L'objectif est clairement lié au recrutement, au NIL, à un stage ou à une étape de carrière, et il est réaliste pour l'emploi du temps du sportif."
      },
      {
        name: "Public et canaux",
        objective: "O3",
        notYet: "Pas de profil de public, ou des canaux choisis selon la mode plutôt que selon le public.",
        meets: "Un court profil de public et deux canaux choisis parce que le public s'y trouve, avec les règles d'âge et la confidentialité vérifiées.",
        exceeds: "Le profil a été vérifié avec de vraies personnes et les raisons de chaque canal reprennent ce qu'elles ont dit."
      },
      {
        name: "Plan de publication sur 4 semaines",
        objective: "O4",
        notYet: "Des publications n'ont pas de format ou d'appel à l'action, ou le plan révèle la position ou le domicile.",
        meets: "Un tableau de 4 semaines avec une idée, un format et un appel à l'action pour chaque publication, adapté à l'emploi du temps et sans danger.",
        exceeds: "Chaque appel à l'action mène à l'objectif et le plan équilibre les deux canaux."
      },
      {
        name: "Publications honnêtes",
        objective: "O5",
        notYet: "Les légendes ressemblent à du texte d'IA copié, contiennent des affirmations non prouvées ou n'ont pas la mention nécessaire.",
        meets: "Des publications avec la voix du sportif, sans affirmation non prouvée et avec une mention claire pour tout avantage reçu d'une marque.",
        exceeds: "Dans les vidéos, la mention est dite et affichée, et la déclaration NIL a été vérifiée avec le service de conformité quand il le faut."
      },
      {
        name: "Suivi et changement",
        objective: "O6",
        notYet: "Moins de trois chiffres, ou pas de changement écrit pour la deuxième semaine.",
        meets: "Trois chiffres liés à l'objectif notés pour la première semaine et un changement écrit pour la deuxième.",
        exceeds: "Les meilleures et les moins bonnes publications sont nommées, avec les chiffres qui expliquent le changement."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le plan, mènent la première semaine et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui disent avoir atteint leur objectif SMART à la date prévue (questionnaire de suivi)",
      "Les apprenants qui signalent un résultat concret : des réponses d'entraîneurs, des inscriptions à un stage ou une discussion avec une marque",
      "Les apprenants qui notent encore leurs chiffres chaque semaine 30 jours plus tard"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec les deux applications de réseaux sociaux choisies",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Un tableur gratuit (Google Sheets) pour les chiffres de la semaine",
      "Votre emploi du temps d'entraînement et de cours",
      "Environ 60 minutes de leçons, plus environ 30 minutes par semaine pendant quatre semaines"
    ],
    facilitatorNotes: [
      "Pour les sportifs de moins de 18 ans, impliquez les parents ou tuteurs avant de rendre les comptes publics ou de contacter des marques.",
      "Revoyez les réglages de sécurité en groupe : qui peut envoyer des messages, identifier et voir la position ; ne partagez jamais la position en direct, le domicile ou l'emploi du temps scolaire.",
      "Faites intervenir votre service de conformité ou votre contact de ligue pour les règles de déclaration NIL avant qu'un sportif accepte un accord.",
      "Vérifiez dans chaque brouillon que les affirmations sont honnêtes et que la mention est claire avant publication.",
      "Organisez un court point chaque semaine pour que les sportifs partagent leurs chiffres et leur changement."
    ]
  }
};
