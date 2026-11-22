"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-marketing-toolkit.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-marketing-toolkit-fr",
  lang: "fr",
  translationOf: "athletes-ai-marketing-toolkit",
  category: "Athletes",
  name: "Boîte à outils IA pour le marketing et l'image de marque",
  skills: "Écrire un guide de ton de marque, Construire une bibliothèque de prompts, Utiliser l'IA pour l'écriture, le design et la vidéo, Programmer et suivre les publications, Vérifier les contenus de l'IA : exactitude, droits et mentions",
  outcome: "mettre en place votre propre boîte à outils marketing avec l'IA : un guide de ton de marque d'une page, une bibliothèque de dix prompts réutilisables, un outil pour chaque tâche (écriture, design, vidéo et suivi), et une liste de vérification en cinq points à passer avant toute publication.",
  about: [
    "Ce cours s'adresse aux athlètes, aux entraîneurs et au personnel des équipes qui publient et font déjà de la promotion, et qui veulent un système reproductible qui fait gagner du temps sans perdre leur voix.",
    "Une boîte à outils, ce n'est pas avoir le plus d'applications possible. C'est un petit ensemble d'outils avec un guide et des prompts enregistrés, pour que chaque publication sonne comme vous et passe par le même contrôle qualité.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Créez le document de votre boîte à outils : un guide de ton de marque d'une page, dix prompts enregistrés (légendes, biographies, e-mails de proposition, idées de publications, réponses et plus), l'outil choisi pour l'écriture, le design, la vidéo et le suivi, et une liste de vérification en cinq points. Utilisez la boîte à outils pour créer et vérifier une publication du début à la fin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes, des entraîneurs et du personnel d'équipe qui publient et font déjà leur promotion en ligne, et qui veulent un système réutilisable qui fait gagner du temps sans perdre leur voix.",
    startingPoint: "Ils publient régulièrement et ont déjà essayé des outils d'IA pour les légendes ou les idées. La plupart repartent de zéro à chaque fois, obtiennent des textes d'IA impersonnels, utilisent plusieurs applications qui font la même chose, et ne vérifient pas de façon régulière les droits, la mention ou la sécurité avant de publier.",
    gap: "Sans système, le contenu de l'IA sonne impersonnel, et des erreurs sur les faits, les droits, les mentions ou la vie privée passent, ce qui peut coûter la confiance, des contrats ou la sécurité. Un guide de ton, des prompts enregistrés, un outil par tâche et une liste de vérification rendent le contenu plus rapide, plus personnel et plus sûr.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur avec des outils gratuits : un assistant IA, Canva, un éditeur vidéo et Google Sheets ou Docs",
      "Environ 60 minutes au total",
      "Les droits sur les photos, les logos et la musique ; les règles de mention de la FTC et les règles NIL de l'école ou de l'État",
      "Aucune information privée ni position en direct dans les publications ; aucune image d'IA trompeuse de personnes réelles"
    ],
    prerequisites: "Aucun. « Image de marque sur les réseaux sociaux pour les sportifs » ou « Création de contenu pour les athlètes » est une bonne première étape."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec cinq de vos propres légendes et un assistant IA", action: "écrire un guide de ton de marque d'une page", standard: "avec trois mots pour votre voix, les mots que vous utilisez et ceux que vous n'utilisez jamais, les sujets à aborder et à éviter, vos habitudes d'emojis et de hashtags, et deux exemples de publications" },
    { id: "O2", condition: "À partir de vos tâches marketing les plus courantes", action: "créer une bibliothèque de dix prompts réutilisables avec des [blancs]", standard: "chacun renvoyant à votre guide de ton et enregistré dans un même document" },
    { id: "O3", condition: "Pour les tâches d'écriture, de design, de vidéo et de suivi", action: "choisir un outil pour chaque tâche", standard: "avec le fabricant, l'usage des données et le coût après l'essai vérifiés pour chaque nouvel outil" },
    { id: "O4", condition: "Face à n'importe quelle publication faite avec l'IA", action: "la vérifier avec la liste en cinq points : vrai, voix, droits, mention et sûr", standard: "en réussissant les cinq vérifications avant qu'elle soit publique" },
    { id: "O5", condition: "À partir des photos, logos, musiques et liens avec des marques dans votre contenu", action: "identifier ce que vous pouvez utiliser et écrire une mention claire pour tout lien avec une marque", standard: "avec une autorisation pour chaque élément que vous n'avez pas créé, une musique sous licence, aucune image d'IA trompeuse et la mention dans la publication elle-même" },
    { id: "O6", condition: "Après une semaine de publications", action: "noter vos chiffres dans un tableau de suivi et mettre à jour vos prompts et votre guide de ton selon les résultats", standard: "avec les meilleures et les moins bonnes publications nommées, et toute lecture faite par l'IA vérifiée avec le tableau" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Votre voix et vos prompts",
      lessons: [
        {
          objectives: ["O1"],
          title: "Écrire votre guide de ton de marque",
          minutes: 5,
          goal: "Écrire un guide d'une page qui dit à n'importe quel outil d'IA comment vous vous exprimez.",
          text: [
            "L'IA écrit avec une voix générique si vous ne lui dites pas comment vous vous exprimez. Un guide de ton de marque règle cela, et aide aussi les coéquipiers ou la famille qui vous aident à publier.",
            "Votre guide contient : trois mots pour votre voix (par exemple « confiant, reconnaissant, drôle ») ; les mots et expressions que vous utilisez ; les mots que vous n'utilisez jamais ; les sujets dont vous parlez ; les sujets que vous évitez ; vos habitudes d'émojis et de hashtags ; et deux exemples de publications qui sonnent exactement comme vous.",
            "Demandez de l'aide à un assistant IA : collez cinq de vos meilleures légendes et demandez « Décris la voix de ces publications en trois mots et liste les expressions que je répète. » Puis retouchez le résultat."
          ],
          steps: ["Rassemblez cinq légendes qui sonnent comme vous.", "Demandez à l'IA de décrire votre voix.", "Choisissez trois mots pour votre voix.", "Listez les mots que vous utilisez et ceux que vous n'utilisez jamais.", "Ajoutez les sujets à aborder et à éviter, et deux exemples de publications."],
          words: [["Ton de marque", "la personnalité et le style de votre façon d'écrire et de parler."], ["Guide de style", "un document de règles pour que le contenu reste cohérent."]],
          slides: [
            { title: "Pourquoi un guide de ton", bullets: ["L'IA est générique si on ne lui dit rien", "Aide toute personne qui publie pour vous"] },
            { title: "Ce qu'il contient", bullets: ["Trois mots pour votre voix", "Les mots que vous utilisez et jamais", "Sujets à aborder et à éviter", "Deux exemples de publications"] },
            { title: "L'IA vous aide à la trouver", bullets: ["Collez cinq vraies légendes", "Demandez-lui de décrire votre voix"] }
          ],
          tryIt: "Collez cinq de vos légendes dans un assistant IA et demandez-lui de décrire votre voix. Écrivez votre guide d'une page à partir du résultat.",
          youCanNow: "écrire un guide de ton de marque qui garde les textes de l'IA fidèles à votre voix.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi l'IA a-t-elle besoin d'un guide de ton ?", options: ["Elle écrit avec une voix impersonnelle si vous ne lui dites pas comment vous vous exprimez", "Elle ne peut pas écrire de légendes sans guide", "C'est obligatoire selon la loi", "Il rend les publications plus longues"], answer: 0, why: "Un guide de ton dit à l'IA et aux personnes qui vous aident comment vous vous exprimez." },
            { objective: "O1", q: "Votre petit frère vous aide à publier. En quoi votre guide de ton l'aide-t-il ?", options: ["Il lui donne votre mot de passe", "Il lui permet de publier n'importe quoi", "Il lui montre comment vous vous exprimez et ce que vous ne publiez jamais", "Il remplace votre vérification"], answer: 2, why: "Le guide aide les coéquipiers ou la famille qui vous aident à publier." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire une bibliothèque de prompts",
          minutes: 5,
          goal: "Enregistrer dix prompts réutilisables pour vos tâches marketing les plus courantes.",
          text: [
            "Une bibliothèque de prompts est un document de prompts (instructions données à l'IA) que vous réutilisez. Au lieu de repartir de zéro à chaque fois, vous copiez un prompt, remplissez les blancs et collez votre guide de ton.",
            "Les bons prompts ont des blancs entre crochets : « En utilisant mon guide de ton ci-dessous, écris trois légendes de moins de 150 caractères pour une publication de type [type] sur [sujet]. Termine par une question. » D'autres exemples : propositions de biographie, e-mail de proposition à un sponsor, mot de remerciement, idées de publications pour un thème, réponse polie à un commentaire négatif, bilan de la semaine.",
            "Gardez la bibliothèque dans Google Docs ou une application de notes. Améliorez un prompt chaque fois qu'il donne une réponse faible."
          ],
          steps: ["Listez vos dix tâches marketing les plus courantes.", "Écrivez un prompt pour chacune avec des [blancs].", "Ajoutez « En utilisant mon guide de ton ci-dessous... » à chacun.", "Enregistrez-les dans un seul document.", "Améliorez un prompt chaque fois qu'il donne une réponse faible."],
          words: [["Bibliothèque de prompts", "une collection enregistrée de prompts que vous réutilisez."], ["Prompt modèle", "un prompt avec des blancs que vous remplissez à chaque fois."]],
          slides: [
            { title: "Bibliothèque de prompts", bullets: ["Réutilisez, ne recommencez pas", "Remplissez les [blancs]", "Collez votre guide de ton"] },
            { title: "Dix tâches courantes", bullets: ["Légendes, biographies, idées de publications", "Proposition à un sponsor, remerciement", "Réponses, bilan de la semaine"] },
            { title: "Améliorez sans cesse", bullets: ["Un seul document", "Corrigez les prompts qui donnent des réponses faibles"] }
          ],
          tryIt: "Écrivez vos cinq premiers prompts modèles avec des [blancs]. Testez-en un avec votre guide de ton et corrigez-le si la réponse est faible.",
          youCanNow: "construire et utiliser une bibliothèque de prompts pour vos tâches marketing.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une bibliothèque de prompts ?", options: ["Une liste d'applications", "Un document de prompts que vous réutilisez", "La liste de vos abonnés", "Une carte de bibliothèque"], answer: 1, why: "C'est un ensemble de prompts enregistrés que vous copiez, remplissez et réutilisez." },
            { objective: "O2", q: "Vous répondez souvent à des commentaires négatifs. Qu'ajoutez-vous à votre bibliothèque ?", options: ["Rien ; répondre en colère", "Une nouvelle application", "Une liste de personnes à bloquer", "Un prompt pour une réponse polie, avec des [blancs] et votre guide de ton"], answer: 3, why: "Enregistrez un prompt pour chaque tâche courante, y compris les réponses polies." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Choisir un outil par tâche",
          minutes: 5,
          goal: "Choisir un outil pour l'écriture, le design, la vidéo et le suivi.",
          text: [
            "Vous devez couvrir quatre tâches. Écriture : un assistant IA comme ChatGPT, Microsoft Copilot ou Google Gemini. Design : un outil comme Canva, qui a des modèles et des fonctions d'IA. Vidéo : un éditeur gratuit comme CapCut ou les éditeurs intégrés à Instagram, TikTok et YouTube. Suivi : les statistiques de chaque application plus un tableau Google Sheets.",
            "Choisissez un outil par tâche et apprenez-le bien. Avant de vous inscrire à quelque chose de nouveau, vérifiez qui le fabrique, quelles données il collecte et ce qu'il coûte après un éventuel essai gratuit.",
            "Beaucoup d'applications permettent aussi de programmer des publications à l'avance, dans l'application ou avec des outils de programmation. C'est utile pendant les semaines chargées, mais vérifiez que les publications programmées ont toujours du sens si l'actualité ou les résultats changent."
          ],
          steps: ["Choisissez un outil d'écriture.", "Choisissez un outil de design.", "Choisissez un éditeur vidéo.", "Créez un tableau de suivi.", "Notez les quatre choix dans le document de votre boîte à outils."],
          words: [["Programmation", "régler une publication pour qu'elle paraisse automatiquement plus tard."], ["Statistiques", "les chiffres d'une application sur les performances de vos publications."]],
          slides: [
            { title: "Quatre tâches", bullets: ["Écriture : un assistant IA", "Design : Canva", "Vidéo : CapCut ou les éditeurs intégrés", "Suivi : statistiques + un tableau"] },
            { title: "Avant de vous inscrire", bullets: ["Qui le fabrique ?", "Quelles données collecte-t-il ?", "Le coût après l'essai gratuit ?"] },
            { title: "Programmation", bullets: ["Idéale pour les semaines chargées", "Vérifiez si l'actualité change"] }
          ],
          tryIt: "Notez vos quatre choix d'outils dans le document de votre boîte à outils et créez un tableau de suivi avec ces colonnes : Date, Publication, Plateforme, Vues, Engagement, Notes.",
          youCanNow: "choisir un petit ensemble d'outils qui couvre chaque tâche marketing.",
          quickCheck: [
            { objective: "O3", q: "Quel outil convient à la tâche de suivi ?", options: ["Un éditeur vidéo", "Un modèle de design", "Les statistiques de chaque application plus un tableau Google Sheets", "Un générateur d'images IA"], answer: 2, why: "Le suivi utilise les statistiques des applications et un tableur." },
            { objective: "O3", q: "Votre match est annulé et une publication programmée dit « À ce soir ! ». Que faites-vous ?", options: ["Modifier ou annuler la publication programmée", "La laisser partir", "Supprimer votre compte", "Programmer une deuxième publication"], answer: 0, why: "Vérifiez que les publications programmées ont encore du sens quand l'actualité change." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre voix et vos prompts",
        questions: [
          { objective: "O1", q: "Pourquoi écrire un guide de ton de marque ?", options: ["Pour rallonger les publications", "Pour cacher votre nom", "Pour que l'IA et vos aides écrivent comme vous vous exprimez", "C'est exigé par les applications"], answer: 2, why: "L'IA est générique si vous ne lui donnez pas votre voix." },
          { objective: "O1", q: "Qu'est-ce qui a sa place dans un guide de ton ?", options: ["Les mots que vous n'utilisez jamais", "Votre mot de passe", "Vos informations bancaires", "Les statistiques de votre rival"], answer: 0, why: "Cela façonne la façon dont le contenu sonne." },
          { objective: "O2", q: "Qu'est-ce qui rend un prompt réutilisable ?", options: ["Être très court", "N'avoir aucune instruction", "Être tout en majuscules", "Des blancs entre [crochets] à remplir"], answer: 3, why: "Les modèles font gagner du temps à chaque utilisation." },
          { objective: "O2", q: "Un prompt enregistré donne toujours des réponses faibles. Vous :", options: ["Supprimez la bibliothèque", "Améliorez le prompt", "L'utilisez quand même", "Passez à cinq nouvelles applications"], answer: 1, why: "Les prompts s'améliorent en les retouchant." },
          { objective: "O3", q: "Avant de vous inscrire à un nouvel outil d'IA, vérifiez :", options: ["La couleur de son logo", "Qui le fabrique, l'usage de vos données et le coût après l'essai", "Combien de publicités il affiche", "Rien"], answer: 1, why: "Cela protège vos données et votre argent." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Qualité, droits et résultats",
      lessons: [
        {
          objectives: ["O4"],
          title: "La liste de vérification en cinq points",
          minutes: 5,
          goal: "Vérifier le contenu créé par l'IA avec une liste en cinq points avant de publier.",
          text: [
            "L'IA fait gagner du temps, mais vous êtes responsable de tout ce que vous publiez. Faites passer chaque contenu par cinq vérifications.",
            "1. Vrai : chaque fait, chiffre et affirmation est exact. 2. Voix : cela sonne comme vous (lisez-le à voix haute). 3. Droits : vous possédez ou pouvez utiliser chaque photo, logo, extrait et chanson. 4. Mention : tout paiement ou produit gratuit d'une marque est clairement signalé. 5. Sûr : pas d'informations privées, pas de position en direct, rien que vous regretteriez.",
            "Placez la liste en haut du document de votre boîte à outils. Quand quelqu'un vous aide à publier, il l'utilise aussi."
          ],
          steps: ["Vrai : vérifiez les faits et les chiffres.", "Voix : lisez-le à voix haute.", "Droits : vérifiez photos, logos, extraits et musique.", "Mention : liens avec une marque clairement indiqués.", "Sûr : pas d'informations privées ni de position en direct."],
          words: [["Liste de vérification", "une courte liste de contrôles faits avant toute publication."], ["Responsable", "vous répondez de ce qui est publié, même si l'IA l'a écrit."]],
          slides: [
            { title: "Vous êtes responsable", bullets: ["Même si l'IA l'a écrit"] },
            { title: "Cinq vérifications", bullets: ["1. Vrai  2. Voix", "3. Droits  4. Mention", "5. Sûr"] },
            { title: "Utilisez-la à chaque fois", bullets: ["En haut de votre boîte à outils", "Vos aides l'utilisent aussi"] }
          ],
          tryIt: "Prenez une légende écrite par l'IA et faites les cinq vérifications. Notez ce que vous avez changé pour chacune.",
          youCanNow: "vérifier le contenu de l'IA : vérité, voix, droits, mention et sécurité.",
          quickCheck: [
            { objective: "O4", q: "Que demande la vérification « Droits » ?", options: ["La légende est-elle assez longue ?", "Est-ce à la mode ?", "Avez-vous publié aujourd'hui ?", "Possédez-vous chaque photo, logo, extrait et chanson, ou avez-vous l'autorisation de les utiliser ?"], answer: 3, why: "Droits veut dire que vous avez le droit d'utiliser tout ce qui est dans la publication." },
            { objective: "O4", q: "Une légende de l'IA cite le parc où vous vous entraînez chaque matin à 6 h. Quelle vérification le repère ?", options: ["Voix", "Sûr", "Vrai", "Mention"], answer: 1, why: "La vérification « Sûr » retire les informations privées et la position ou la routine en direct." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Droits, logos, musique et mentions",
          minutes: 5,
          goal: "Identifier ce que vous pouvez utiliser dans votre contenu et écrire une mention claire pour les liens avec une marque.",
          text: [
            "Droits : vous pouvez utiliser les photos et vidéos que vous avez faites, et celles pour lesquelles vous avez une permission. Les photos d'équipe et de match prises par d'autres appartiennent au photographe ou à l'école : demandez. Les logos d'école, de ligue et de marque demandent une permission. Utilisez la musique de la bibliothèque sous licence d'une application.",
            "Images d'IA : soyez prudent si vous créez des images d'IA de vraies personnes, de coéquipiers ou de logos de marque. Ne créez pas d'images qui pourraient faire croire qu'une chose s'est passée alors que ce n'est pas le cas.",
            "Mention : la FTC (l'agence américaine de protection des consommateurs) dit de signaler clairement tout paiement, produit gratuit ou autre lien avec une marque, dans la publication elle-même, avec des mots clairs comme « Publicité » ou « Merci [marque] pour l'équipement offert ». Étudiants-athlètes : vérifiez les règles NIL (nom, image et ressemblance) auprès de votre service de conformité ou de l'association sportive de votre État."
          ],
          steps: ["Utilisez vos propres photos ou celles pour lesquelles vous avez une permission.", "Demandez avant d'utiliser des logos.", "Utilisez de la musique sous licence.", "Ne créez pas d'images d'IA trompeuses de vraies personnes.", "Signalez clairement les liens avec une marque dans chaque publication."],
          words: [["Droit d'auteur", "le droit légal du propriétaire de contrôler les copies de photos, vidéos, musiques et textes."], ["Permission", "un oui clair du propriétaire pour utiliser son travail."]],
          slides: [
            { title: "Droits", bullets: ["Vos propres photos et vidéos", "Photos des autres : demandez", "Logos : permission ; musique sous licence"] },
            { title: "Images d'IA", bullets: ["Prudence avec les vraies personnes et les logos", "Rien qui trompe les gens"] },
            { title: "Mention", bullets: ["Paiement ou produit gratuit : dites-le clairement", "Dans la publication, « Publicité » ou un merci", "Vérifiez les règles NIL"] }
          ],
          sources: [
            { name: "FTC : Disclosures 101 pour les influenceurs sur les réseaux sociaux (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA : Nom, image et ressemblance (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Regardez vos cinq dernières publications. Pour chaque photo, extrait et chanson, notez à qui il appartient et si vous aviez la permission. Corrigez ou retirez tout ce qui ne passe pas.",
          youCanNow: "utiliser seulement du contenu sur lequel vous avez des droits et signaler correctement les liens avec une marque.",
          quickCheck: [
            { objective: "O5", q: "À qui appartiennent en général les photos de match prises par le photographe de l'école ?", options: ["Au photographe ou à l'école", "À vous, parce que vous êtes dessus", "À toute personne qui les voit", "À l'autre équipe"], answer: 0, why: "Les photos prises par d'autres appartiennent au photographe ou à l'école, alors demandez." },
            { objective: "O5", q: "Vous voulez une image IA de votre coéquipier tenant un trophée qu'il n'a jamais gagné. Que faites-vous ?", options: ["La faire pour rire", "La publier sans légende", "Demander à l'IA de la rendre plus réaliste", "Ne pas la faire ; elle pourrait tromper les gens"], answer: 3, why: "Ne créez pas d'images IA qui pourraient faire croire aux gens que quelque chose s'est passé." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Suivre les résultats et améliorer la boîte à outils",
          minutes: 5,
          goal: "Suivre les résultats chaque semaine et s'en servir pour améliorer vos prompts et votre plan.",
          text: [
            "Une fois par semaine, copiez les chiffres de vos publications depuis les statistiques de chaque application dans votre tableau de suivi : vues, engagement (mentions J'aime, commentaires, partages, enregistrements) et tout ce qui est lié à votre objectif, comme les clics sur un lien ou les inscriptions.",
            "Trouvez vos meilleures et vos moins bonnes publications. Collez le tableau dans un assistant IA et demandez : « Quels types de publications ont le mieux marché et qu'ont-ils en commun ? Donne-moi deux idées pour la semaine prochaine. » Vérifiez sa lecture avec le tableau.",
            "Améliorez ensuite votre boîte à outils : mettez à jour le prompt qui a produit votre meilleure publication, corrigez celui qui a produit la moins bonne, et ajoutez toute nouvelle leçon à votre guide de ton."
          ],
          steps: ["Copiez les chiffres de la semaine dans votre tableau.", "Trouvez les meilleures et les moins bonnes publications.", "Demandez à l'IA ce que les meilleures ont en commun.", "Vérifiez sa réponse avec le tableau.", "Mettez à jour vos prompts et votre guide de ton."],
          words: [["Engagement", "la façon dont les gens réagissent : mentions J'aime, commentaires, partages, enregistrements."], ["Itérer", "améliorer quelque chose pas à pas selon les résultats."]],
          slides: [
            { title: "Chiffres de la semaine", bullets: ["Vues et engagement", "Chiffres liés à l'objectif : clics, inscriptions"] },
            { title: "Apprenez-en", bullets: ["Meilleures et moins bonnes publications", "L'IA trouve ce que les meilleures partagent", "Vérifiez avec votre tableau"] },
            { title: "Améliorez la boîte à outils", bullets: ["Mettez à jour les prompts gagnants", "Corrigez les faibles", "Ajoutez les leçons à votre guide de ton"] }
          ],
          tryIt: "Tâche finale : terminez le document de votre boîte à outils (guide de ton, dix prompts, quatre outils, liste en cinq points), puis créez une publication du début à la fin avec lui et notez ses chiffres dans votre tableau.",
          youCanNow: "suivre les résultats et améliorer sans cesse votre boîte à outils marketing avec l'IA.",
          quickCheck: [
            { objective: "O6", q: "À quelle fréquence copier vos chiffres dans votre tableau de suivi ?", options: ["Une fois par an", "Une fois par semaine", "Jamais", "Toutes les heures"], answer: 1, why: "Notez les chiffres chaque semaine." },
            { objective: "O6", q: "Votre meilleure publication vient d'un prompt enregistré. Que faites-vous ?", options: ["Supprimer le prompt", "Arrêter ce type de publication", "Mettre à jour ce prompt et continuer à l'améliorer", "Changer tous vos outils"], answer: 2, why: "Mettez à jour le prompt de votre meilleure publication et corrigez celui de la moins bonne." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Qualité, droits et résultats",
        questions: [
          { objective: "O4", q: "Qui est responsable d'une publication écrite par l'IA que vous publiez ?", options: ["L'entreprise d'IA", "Vos abonnés", "Personne", "Vous"], answer: 3, why: "Vous répondez de ce que vous publiez." },
          { objective: "O4", q: "Laquelle fait partie des cinq vérifications ?", options: ["Les droits", "La taille de police", "Le nombre d'émojis", "La longueur de la publication"], answer: 0, why: "Vous devez posséder ou avoir la permission pour tout ce que vous utilisez." },
          { objective: "O5", q: "Le photographe de l'équipe a pris une superbe photo de vous. Avant de la publier, vous :", options: ["Recadrez pour enlever son filigrane", "La publiez comme la vôtre", "Demandez la permission", "La modifiez avec l'IA"], answer: 2, why: "Elle appartient peut-être au photographe ou à l'école." },
          { objective: "O5", q: "Créer une image d'IA où un coéquipier semble faire quelque chose qu'il n'a pas fait, c'est :", options: ["Acceptable si c'est drôle", "Obligatoire", "Du bon marketing", "Trompeur et à éviter"], answer: 3, why: "Ne créez pas de contenu qui trompe les gens." },
          { objective: "O6", q: "L'IA dit que vos vidéos ont le mieux marché. Vous :", options: ["Lui faites entièrement confiance", "Vérifiez sa lecture avec votre tableau", "Supprimez votre tableau", "Arrêtez de publier des vidéos"], answer: 1, why: "L'IA peut mal lire les données." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Boîte à outils IA pour le marketing et l'image de marque",
    questions: [
      { objective: "O1", q: "Une boîte à outils marketing, c'est :", options: ["Le plus d'applications possible", "Un sac pour appareil photo", "Un petit ensemble d'outils avec un guide et des prompts enregistrés", "Une agence payante"], answer: 2, why: "Petit et reproductible vaut mieux que beaucoup d'applications." },
      { objective: "O1", q: "Le ton de marque, c'est :", options: ["La personnalité et le style de votre façon d'écrire", "Votre voix chantée", "Votre volume", "Votre logo"], answer: 0, why: "C'est la façon dont vous sonnez à l'écrit." },
      { objective: "O1", q: "Comment l'IA peut-elle vous aider à trouver votre voix ?", options: ["En décrivant la voix de vos vraies légendes", "En inventant une nouvelle personnalité", "En copiant une célébrité", "En choisissant vos valeurs"], answer: 0, why: "Vos vraies publications montrent votre voix." },
      { objective: "O1", q: "Combien de mots choisir pour votre voix ?", options: ["Vingt", "Aucun", "Trois", "Cent"], answer: 2, why: "Trois, c'est facile à retenir et à utiliser." },
      { objective: "O2", q: "Un prompt modèle contient :", options: ["Aucune instruction", "Des blancs à remplir", "Votre mot de passe", "Seulement des émojis"], answer: 1, why: "Les blancs le rendent réutilisable." },
      { objective: "O2", q: "Où garder votre bibliothèque de prompts ?", options: ["Dans votre tête", "Éparpillée dans des discussions", "Nulle part", "Dans un seul document comme Google Docs ou des notes"], answer: 3, why: "Un seul endroit est facile à utiliser et à mettre à jour." },
      { objective: "O3", q: "Quel outil convient à la tâche de design ?", options: ["Un chronomètre", "Seulement un tableur", "Canva", "Une calculatrice"], answer: 2, why: "Canva a des modèles de design." },
      { objective: "O3", q: "Lequel convient à la tâche vidéo ?", options: ["Un traitement de texte", "Un calendrier", "Un thermomètre", "CapCut ou les éditeurs intégrés"], answer: 3, why: "Ils permettent de monter des vidéos." },
      { objective: "O3", q: "Programmer des publications aide :", options: ["Pendant les semaines chargées", "Jamais", "Seulement la nuit", "Seulement les professionnels"], answer: 0, why: "Les publications sortent pendant que vous vous entraînez ou étudiez." },
      { objective: "O3", q: "Une publication programmée peut devoir être changée quand :", options: ["Jamais", "L'actualité ou les résultats changent", "Il fait beau", "Vous recevez une mention J'aime"], answer: 1, why: "D'anciennes publications peuvent sembler déplacées après des événements." },
      { objective: "O4", q: "La vérification « Vrai » veut dire :", options: ["Ça sonne bien", "C'est long", "Chaque fait, chiffre et affirmation est exact", "Il y a de la musique"], answer: 2, why: "L'exactitude protège votre nom." },
      { objective: "O4", q: "La vérification « Voix » est plus facile en :", options: ["Lisant à voix haute", "Comptant les mots", "Ajoutant des hashtags", "Demandant à un inconnu"], answer: 0, why: "Vous entendrez si cela sonne comme vous." },
      { objective: "O4", q: "La vérification « Sûr » retire :", options: ["Votre sport", "Vos moments forts", "Vos remerciements", "Les informations privées et la position en direct"], answer: 3, why: "La sécurité passe en premier." },
      { objective: "O4", q: "Les personnes qui publient pour vous doivent :", options: ["Sauter les vérifications", "Utiliser la même liste de vérification", "Publier n'importe quoi", "Utiliser leur propre voix"], answer: 1, why: "La cohérence protège votre image." },
      { objective: "O5", q: "Le droit d'auteur, c'est :", options: ["Une règle sportive", "Le droit du propriétaire de contrôler les copies de son travail", "Un type de hashtag", "Une licence gratuite pour tout le monde"], answer: 1, why: "Les propriétaires contrôlent leur travail." },
      { objective: "O5", q: "Quelle musique est la plus sûre dans vos vidéos ?", options: ["N'importe quelle chanson de la radio", "Une bande originale de film", "Le téléchargement d'un ami", "La bibliothèque sous licence de l'application"], answer: 3, why: "La musique sous licence évite les suppressions." },
      { objective: "O5", q: "Un produit gratuit d'une marque doit être :", options: ["Clairement signalé dans la publication", "Caché", "Seulement dans votre biographie", "Ignoré"], answer: 0, why: "La FTC compte les produits gratuits." },
      { objective: "O5", q: "Les étudiants-athlètes doivent vérifier les règles NIL auprès :", options: ["D'un fan", "D'un rival", "De leur service de conformité ou de l'association sportive de leur État", "Seulement d'une IA"], answer: 2, why: "Les règles varient et changent." },
      { objective: "O6", q: "L'engagement comprend :", options: ["Votre taille", "Votre moyenne scolaire", "La météo", "Les mentions J'aime, commentaires, partages et enregistrements"], answer: 3, why: "L'engagement, c'est l'interaction." },
      { objective: "O6", q: "Itérer veut dire :", options: ["Recommencer chaque jour", "Améliorer pas à pas selon les résultats", "Ne jamais changer", "Copier les autres"], answer: 1, why: "Les petites améliorations s'additionnent." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      6,
      10,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Guide de ton de marque",
        objective: "O1",
        notYet: "Il manque les mots de la voix, les mots à ne jamais utiliser ou les exemples de publications.",
        meets: "Une page avec trois mots pour la voix, les mots à utiliser et à ne jamais utiliser, les sujets, les habitudes et deux exemples de publications.",
        exceeds: "Construit à partir de vraies légendes et testé en faisant écrire à l'IA une publication qu'un ami juge fidèle à l'apprenant."
      },
      {
        name: "Bibliothèque de prompts",
        objective: "O2",
        notYet: "Moins de dix prompts, ou des prompts sans [blancs] ni guide de ton.",
        meets: "Dix prompts avec des [blancs], chacun utilisant le guide de ton, enregistrés dans un même document.",
        exceeds: "Au moins un prompt a été amélioré après une réponse faible, avec une note sur ce qui a changé."
      },
      {
        name: "Choix des outils",
        objective: "O3",
        notYet: "Une tâche n'a pas d'outil, ou les outils n'ont pas été vérifiés.",
        meets: "Un outil pour l'écriture, le design, la vidéo et le suivi, avec le fabricant, les données et le coût vérifiés.",
        exceeds: "Comprend une note sur quand la programmation est utilisée et comment les publications programmées sont vérifiées."
      },
      {
        name: "Liste de vérification",
        objective: "O4",
        notYet: "Liste absente ou incomplète.",
        meets: "Les cinq vérifications sont en haut du document de la boîte à outils.",
        exceeds: "Les personnes qui publient pour l'apprenant ont accepté de l'utiliser."
      },
      {
        name: "Une publication du début à la fin",
        objective: "O5",
        notYet: "La publication échoue à une vérification, comme les droits ou la mention.",
        meets: "Une publication faite avec la boîte à outils qui réussit les cinq vérifications, avec des médias autorisés et toute mention dans la publication.",
        exceeds: "Ses chiffres sont notés dans le tableau de suivi et servent à mettre à jour un prompt."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la boîte à outils avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui utilisent encore leur bibliothèque de prompts et leur liste de vérification 30 jours plus tard (questionnaire de suivi)",
      "Les apprenants qui disent gagner du temps sur leur contenu chaque semaine",
      "Les apprenants qui disent avoir repéré un problème de droits, de mention ou de sécurité avant de publier"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Canva gratuit et un éditeur vidéo gratuit (CapCut ou les éditeurs intégrés aux applications)",
      "Un compte Google gratuit pour Google Docs et Sheets",
      "Cinq de vos anciennes légendes",
      "Environ 60 minutes"
    ],
    facilitatorNotes: [
      "Demandez aux apprenants d'apporter cinq vraies légendes, pour que le guide de ton soit construit à partir de leur propre écriture.",
      "Partagez une bibliothèque de prompts de départ pour le groupe, puis faites-la adapter par chaque apprenant à sa voix.",
      "Revoyez la liste en cinq points avec le personnel d'équipe qui publie pour les athlètes, pour que tout le monde fasse les mêmes vérifications.",
      "Abordez avec soin les images IA de personnes réelles ; ne créez jamais d'images trompeuses de coéquipiers ou d'adversaires.",
      "Envoyez les questions NIL au service de conformité ou à l'association de l'État avant toute publication sponsorisée."
    ]
  }
};
