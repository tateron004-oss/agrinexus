"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-creators.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-creators-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-creators",
  category: "Entrepreneurs",
  name: "L'IA pour les créateurs de contenu et les influenceurs",
  skills: "Définir votre niche et vos piliers de contenu, Écrire des scripts avec l'IA, Monter et recycler vos contenus, Signaler les contenus d'IA sur les plateformes, Déclarer les partenariats avec les marques, Protéger vos droits et ceux des autres",
  outcome: "planifier, écrire et produire une semaine de contenus avec l'aide de l'IA, transformer une vidéo en plusieurs publications, signaler correctement les contenus d'IA réalistes, déclarer les partenariats avec les marques comme l'attend la FTC, et respecter le droit d'auteur ainsi que la voix et le visage des autres.",
  about: [
    "Les créateurs de contenu et les influenceurs dirigent de petites entreprises de médias : ils créent des contenus, développent un public et gagnent de l'argent grâce aux partenariats avec des marques, aux liens d'affiliation, à leurs produits et aux programmes des plateformes. L'IA peut aider pour les idées, les scripts, le montage, les sous-titres et le recyclage des contenus, si bien qu'une seule personne peut faire le travail d'une petite équipe.",
    "Ce cours s'adresse aux créateurs de toute taille qui veulent travailler plus vite sans perdre leur voix ni la confiance de leur public. Au chapitre 1, vous définirez votre niche et vos piliers de contenu, écrirez des scripts avec l'IA, puis monterez et recyclerez vos contenus. Au chapitre 2, vous apprendrez quand signaler les contenus d'IA sur les plateformes, comment déclarer les partenariats selon les règles de la FTC (l'autorité américaine de protection des consommateurs), et comment protéger vos droits et respecter ceux des autres.",
    "Chaque leçon dure environ cinq minutes, avec une tâche pratique. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les règles des plateformes changent souvent ; consultez leurs pages d'aide. Ce cours n'est pas un conseil juridique ; parlez à un avocat de vos contrats et de vos droits."
  ],
  finalTask: "Produisez un kit de contenus de créateur : votre phrase de niche et trois piliers de contenu, un plan de contenus sur 7 jours, un script complet de vidéo avec une accroche forte (écrit avec l'IA, avec votre voix), une longue vidéo ou publication transformée en au moins trois contenus courts avec sous-titres, une liste de contrôle pour signaler l'IA sur vos plateformes, et un exemple de publication sponsorisée avec une mention correcte et claire.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des créateurs de contenu et des influenceurs, débutants ou en croissance, qui gèrent une petite entreprise de médias sur des plateformes comme YouTube, TikTok ou Instagram et gagnent de l'argent avec des partenariats de marque, des liens d'affiliation, des produits ou les programmes des plateformes.",
    startingPoint: "Ils savent filmer avec un téléphone, publier du contenu et utiliser les applications sociales. Certains ont essayé des outils d'IA pour les légendes ou les idées, mais sans plan, sans voix bien définie et sans idée claire des règles sur l'étiquetage, la mention des partenariats et le droit d'auteur.",
    gap: "Les créateurs qui publient sans plan s'épuisent, et ceux qui utilisent l'IA sans précaution peuvent perdre leur voix, publier des faits faux, enfreindre les règles d'étiquetage des plateformes ou oublier les règles de la FTC sur la mention des partenariats. Ils ont besoin d'une méthode de travail avec l'IA, à refaire à chaque fois, qui garde leur contenu honnête, légal et bien à eux.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Appareils : un téléphone ou un ordinateur avec internet et un assistant d'IA gratuit",
      "Temps : des leçons d'environ 5 minutes, à caser autour du rythme de publication",
      "Règles : les règles d'étiquetage de l'IA des plateformes, les règles de la FTC sur les recommandations et le droit d'auteur s'appliquent et peuvent changer",
      "Vie privée et droits : ne jamais copier la voix ou le visage d'une autre personne, et ne pas mettre de données privées dans les outils d'IA"
    ],
    prerequisites: "Aucun. Les personnes qui découvrent les outils d'IA peuvent d'abord suivre « Découvrir l'IA et prendre confiance avec le numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En utilisant un assistant d'IA pour trouver des idées", action: "écrire une phrase de niche, trois piliers de contenu et un plan de contenu sur 7 jours", standard: "pour que chaque publication du plan corresponde à l'un des piliers" },
    { id: "O2", condition: "À partir d'exemples de vos propres légendes ou de votre façon de parler", action: "écrire avec l'aide de l'IA un court script de vidéo avec une accroche forte", standard: "pour qu'il vous ressemble quand vous le lisez à voix haute et que chaque fait soit vérifié" },
    { id: "O3", condition: "À partir d'une longue vidéo ou publication", action: "la transformer en au moins trois contenus courts avec sous-titres", standard: "avec chaque erreur de sous-titre corrigée et chaque contenu compréhensible seul" },
    { id: "O4", condition: "À partir d'une liste de publications et des règles de votre plateforme", action: "décider quelles publications ont besoin d'une étiquette IA et écrire une liste de contrôle pour l'étiquetage", standard: "en étiquetant chaque publication d'IA réaliste, et en étiquetant en cas de doute" },
    { id: "O5", condition: "Face à un partenariat de marque ou un produit offert", action: "rédiger une publication sponsorisée avec une mention claire dès le début", standard: "avec la mention montrée et dite tôt, et chaque affirmation honnête" },
    { id: "O6", condition: "En utilisant des outils d'IA et des contrats de marque", action: "lister des règles pour utiliser le travail des autres et protéger vos propres contenus et votre image", standard: "avec au moins trois règles, dont l'interdiction de copier une voix ou un visage sans permission" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Créer plus vite avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Votre niche et vos piliers de contenu",
          minutes: 5,
          goal: "Écrire une phrase de niche et trois piliers de contenu pour votre chaîne.",
          text: [
            "Le public suit les créateurs qui parlent clairement de quelque chose. Une phrase de niche dit pour qui vous créez et ce que ces personnes y gagnent : \"Cuisine maison petit budget pour étudiants\", \"Musculation pour débutantes de plus de 40 ans\", \"Conseils d'entreprise pour les coiffeurs-barbiers\".",
            "Les piliers de contenu sont les trois ou quatre sujets auxquels vous revenez sans cesse. Pour la cuisine petit budget : recettes pas chères, astuces pour les courses, bases de la cuisine, et une journée dans ma vie. Les piliers facilitent la planification et aident le public à savoir à quoi s'attendre.",
            "Demandez à l'IA : \"Ma niche est [niche]. Propose cinq piliers de contenu et dix idées de vidéos pour chacun.\" Gardez les idées qui correspondent à votre vraie expérience et à votre personnalité ; votre voix est ce que l'IA ne peut pas copier."
          ],
          steps: ["Écrivez pour qui vous créez et ce que ces personnes y gagnent.", "Demandez à l'IA cinq piliers possibles et des idées pour chacun.", "Choisissez trois piliers qui correspondent à votre vraie expérience.", "Faites un plan de 7 jours à partir des idées."],
          words: [["Niche", "le sujet et le public précis que servent vos contenus."], ["Pilier de contenu", "un sujet principal dont vous parlez encore et encore."]],
          slides: [
            { title: "Parlez clairement de quelque chose", bullets: ["Pour qui", "Ce qu'ils y gagnent", "\"Cuisine petit budget pour étudiants\""] },
            { title: "Piliers de contenu", bullets: ["Trois ou quatre sujets répétés", "Planification facile", "Le public sait à quoi s'attendre"] },
            { title: "L'IA pour les idées", bullets: ["Des piliers et dix idées pour chacun", "Gardez ce qui correspond à votre vraie expérience", "Votre voix vous appartient"] }
          ],
          tryIt: "Écrivez votre phrase de niche, choisissez trois piliers avec l'aide de l'IA, et construisez un plan de contenus sur 7 jours.",
          youCanNow: "définir votre niche et planifier vos contenus autour de piliers clairs.",
          quickCheck: [
            { objective: "O1", q: "Que dit une phrase de niche aux gens ?", options: ["Combien d'abonnés vous avez", "Quelles applications vous utilisez", "Pour qui vous créez du contenu et ce que ces personnes y gagnent", "À quelle fréquence vous publiez"], answer: 2, why: "Une phrase de niche nomme votre public et ce qu'il gagne à vous suivre." },
            { objective: "O1", q: "L'IA propose une idée de publication qui ne correspond à aucun de vos trois piliers. Que faites-vous ?", options: ["La publier quand même, puisque l'IA l'a proposée", "La laisser de côté ou la modifier pour qu'elle corresponde à un pilier", "Ajouter un nouveau pilier pour chaque idée", "Supprimer vos piliers et tout recommencer"], answer: 1, why: "Les piliers gardent votre plan centré, donc chaque idée doit correspondre à l'un d'eux." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écrire des scripts avec l'IA, avec votre propre voix",
          minutes: 5,
          goal: "Écrire avec l'aide de l'IA un court script de vidéo avec une accroche forte, qui vous ressemble.",
          text: [
            "Une vidéo courte se joue dans les premières secondes. L'accroche est la phrase d'ouverture qui donne envie de rester : un fait surprenant, une promesse audacieuse que vous pouvez tenir, ou une question que votre public se pose déjà.",
            "Aidez l'IA à parler comme vous : collez deux de vos propres légendes ou la transcription d'un moment où vous parlez, et dites \"Imite cette voix.\" Puis demandez : \"Écris un script de 45 secondes sur [idée]. Donne-moi cinq accroches possibles, puis le script avec une idée claire et un appel à l'action.\" Choisissez une accroche et corrigez le script en le lisant à voix haute.",
            "Vérifiez les faits, surtout sur la santé, l'argent, le sport ou le droit. L'IA peut inventer des études et des chiffres. Si vous ne pouvez pas confirmer un fait, supprimez-le ou dites où les spectateurs peuvent le vérifier."
          ],
          steps: ["Donnez à l'IA des exemples de votre vraie voix.", "Demandez cinq accroches et un court script.", "Choisissez une accroche et lisez le script à voix haute.", "Corrigez-le jusqu'à ce qu'il vous ressemble.", "Vérifiez chaque fait ; supprimez ce que vous ne pouvez pas confirmer."],
          words: [["Accroche", "la phrase d'ouverture qui donne envie de continuer à regarder."], ["Appel à l'action", "ce que vous demandez ensuite aux spectateurs, comme s'abonner ou commenter."], ["Transcription", "les mots écrits de quelque chose qui a été dit."]],
          slides: [
            { title: "Les premières secondes comptent", bullets: ["Un fait surprenant", "Une promesse que vous pouvez tenir", "Une question qu'ils se posent déjà"] },
            { title: "Faites parler l'IA comme vous", bullets: ["Collez vos légendes ou une transcription", "\"Imite cette voix\"", "Cinq accroches, puis le script"] },
            { title: "Vérifiez les faits", bullets: ["L'IA peut inventer études et chiffres", "Santé, argent, sport, droit : confirmez", "Impossible à confirmer ? Supprimez"] }
          ],
          tryIt: "Écrivez un script de 45 secondes avec l'aide de l'IA, en lui donnant des exemples de votre propre voix. Choisissez une accroche, lisez-le à voix haute, corrigez-le et vérifiez chaque fait.",
          youCanNow: "écrire avec l'IA des scripts qui captent l'attention et qui vous ressemblent.",
          quickCheck: [
            { objective: "O2", q: "À quoi sert l'accroche d'un script ?", options: ["À faire rester les gens dès la première phrase", "À citer vos sponsors", "À terminer la vidéo", "À montrer le nom de votre chaîne"], answer: 0, why: "L'accroche est la phrase d'ouverture qui donne envie de rester." },
            { objective: "O2", q: "Le script de l'IA sonne raide et ne vous ressemble pas du tout. Que faites-vous ?", options: ["Le publier tel quel", "Demander à l'IA de le rallonger", "Donner à l'IA des exemples de vos propres mots, puis le lire à voix haute et le corriger", "Changer de sujet"], answer: 2, why: "Vos propres exemples et une relecture à voix haute font que le script vous ressemble." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Monter et recycler vos contenus avec l'IA",
          minutes: 5,
          goal: "Transformer une longue vidéo ou publication en plusieurs contenus courts avec sous-titres.",
          text: [
            "Recycler un contenu, c'est transformer un contenu en plusieurs. Une vidéo de 10 minutes peut devenir trois courts extraits, un carrousel, un paragraphe de newsletter et quelques citations. Les outils d'IA peuvent trouver les meilleurs moments, couper les extraits, ajouter des sous-titres et redimensionner pour chaque plateforme.",
            "Beaucoup d'applications de montage (par exemple CapCut, Canva, Descript ou l'éditeur de votre plateforme) ont maintenant des fonctions d'IA comme les sous-titres automatiques, la suppression du fond et les suggestions d'extraits. Les fonctions et les offres changent ; consultez les pages d'aide de chaque application.",
            "Relisez toujours les sous-titres de l'IA pour corriger les erreurs, surtout les noms, les chiffres et l'argot, et vérifiez qu'un extrait garde son sens tout seul et ne déforme pas ce que vous ou un invité avez dit."
          ],
          steps: ["Choisissez une longue vidéo ou publication.", "Utilisez l'IA pour trouver trois à cinq meilleurs moments.", "Coupez les extraits et ajoutez des sous-titres automatiques.", "Corrigez les erreurs de sous-titres et redimensionnez pour chaque plateforme.", "Écrivez une légende pour chacun avec l'aide de l'IA."],
          words: [["Recycler (un contenu)", "transformer un contenu en plusieurs autres."], ["Sous-titres automatiques", "des sous-titres créés automatiquement à partir du son."], ["Carrousel", "une publication avec plusieurs images que l'on fait défiler."]],
          slides: [
            { title: "Un contenu, beaucoup de publications", bullets: ["Courts extraits", "Carrousel et citations", "Paragraphe de newsletter"] },
            { title: "Fonctions de montage par IA", bullets: ["Repérage des meilleurs moments et découpe", "Sous-titres automatiques et redimensionnement", "Consultez les pages d'aide de chaque application"] },
            { title: "Relisez tout", bullets: ["Corrigez noms, chiffres, argot", "Les extraits doivent avoir un sens seuls", "Ne déformez jamais les paroles de quelqu'un"] }
          ],
          tryIt: "Transformez une longue vidéo ou publication en au moins trois contenus courts avec sous-titres. Corrigez toutes les erreurs de sous-titres.",
          youCanNow: "recycler vos contenus avec des outils d'IA tout en restant exact.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire réutiliser un contenu ?", options: ["Supprimer les anciennes publications", "Copier la vidéo d'un autre créateur", "Publier le même extrait plusieurs fois le même jour", "Transformer un contenu en plusieurs contenus"], answer: 3, why: "Réutiliser, c'est créer plusieurs contenus, comme des extraits courts, à partir d'un contenu long." },
            { objective: "O3", q: "Vous coupez un extrait court, mais seul, il fait dire à votre invité le contraire de ce qu'il voulait dire. Que faites-vous ?", options: ["Le publier, car il fera des vues", "Choisir une autre coupe qui garde le vrai sens de ses paroles", "Ajouter une légende disant qu'il a été modifié", "Le publier sur une seule plateforme"], answer: 1, why: "Un extrait court doit être compréhensible seul et ne pas déformer ce qui a été dit." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Créer plus vite avec l'IA",
        questions: [
          { objective: "O1", q: "Quelle phrase de niche est claire ?", options: ["Du contenu", "Cuisine maison petit budget pour étudiants", "Des vidéos sur des trucs", "Tout pour tout le monde"], answer: 1, why: "Elle dit pour qui et ce qu'ils y gagnent." },
          { objective: "O1", q: "Que sont les piliers de contenu ?", options: ["Votre matériel de tournage", "Les poteaux de votre pièce de tournage", "Votre nombre d'abonnés", "Trois ou quatre sujets dont vous parlez encore et encore"], answer: 3, why: "Les piliers guident la planification." },
          { objective: "O2", q: "Comment aider l'IA à écrire avec votre voix ?", options: ["Coller des exemples de vos propres légendes ou paroles", "Lui demander de copier un autre créateur", "Lui donner votre mot de passe", "Utiliser plus d'émojis"], answer: 0, why: "Des exemples montrent votre style à l'IA." },
          { objective: "O2", q: "Le script de sport de l'IA cite une étude que vous ne trouvez pas. Que faites-vous ?", options: ["Inventer un lien", "La garder", "La supprimer ou dire aux spectateurs où vérifier", "La dire plus fort"], answer: 2, why: "L'IA peut inventer des études ; ne partagez pas de faits non confirmés." },
          { objective: "O3", q: "Les sous-titres automatiques ont mal écrit le nom d'un invité. Que faites-vous ?", options: ["Retirer l'invité", "Publier quand même", "Corriger avant de publier", "Couper le son"], answer: 2, why: "Relisez les sous-titres de l'IA pour corriger les erreurs." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Garder la confiance de votre public",
      lessons: [
        {
          objectives: ["O4"],
          title: "Signaler les contenus d'IA sur les plateformes",
          minutes: 5,
          goal: "Décider quand une plateforme exige de signaler un contenu d'IA réaliste, et le signaler.",
          text: [
            "Les plateformes ajoutent des règles pour les contenus d'IA. YouTube, par exemple, demande aux créateurs de signaler les contenus qui semblent réalistes et qui ont été créés ou nettement modifiés avec l'IA : faire dire ou faire à une vraie personne quelque chose qu'elle n'a pas dit ou fait, modifier des images d'un vrai événement ou d'un vrai lieu, ou générer une scène réaliste qui n'a pas eu lieu. Vous le signalez avec le réglage d'utilisation de l'IA au moment de la mise en ligne.",
            "YouTube n'exige pas de mention pour les contenus clairement irréalistes, les petites retouches comme la correction des couleurs, les filtres beauté ou le flou d'arrière-plan, ni pour l'usage de l'IA pour les idées, les scripts, les titres ou les miniatures. Les créateurs qui oublient plusieurs fois de signaler peuvent recevoir des étiquettes, voir leurs contenus retirés ou perdre l'accès au programme partenaire.",
            "D'autres plateformes, comme TikTok et les applications de Meta, ont leurs propres règles d'étiquetage ; consultez les pages d'aide de chaque plateforme. En cas de doute, signalez-le : l'honnêteté garde la confiance de votre public."
          ],
          steps: ["Demandez-vous : est-ce que cela paraît réaliste, et l'IA l'a-t-elle créé ou nettement modifié ?", "Si oui, utilisez l'étiquette ou le réglage IA de la plateforme.", "Consultez la page d'aide de chaque plateforme pour ses règles.", "En cas de doute, signalez-le."],
          words: [["Contenu synthétique", "des images, vidéos ou sons créés ou modifiés par l'IA."], ["Réglage de mention", "une option, au moment de publier, qui indique qu'un contenu a été créé ou modifié par l'IA."]],
          slides: [
            { title: "YouTube : signalez si c'est réaliste", bullets: ["Une vraie personne qui dit ce qu'elle n'a pas dit", "De vrais événements ou lieux modifiés", "Des scènes réalistes qui n'ont pas eu lieu"] },
            { title: "YouTube : pas obligatoire", bullets: ["Contenu clairement irréaliste", "Couleurs, filtres, flou d'arrière-plan", "IA pour idées, scripts, titres, miniatures"] },
            { title: "Chaque plateforme est différente", bullets: ["Consultez les pages d'aide de TikTok et Meta", "En cas de doute, signalez-le"] }
          ],
          sources: [{ name: "Aide YouTube : déclarer l'utilisation de contenus modifiés ou synthétiques", url: "https://support.google.com/youtube/answer/14328491" }],
          tryIt: "Regardez vos cinq dernières publications ou votre plan de la semaine prochaine. Pour chacune, décidez si elle a besoin d'une mention IA sur votre plateforme et pourquoi. Écrivez une courte liste de contrôle pour les mentions.",
          youCanNow: "signaler correctement les contenus d'IA réalistes sur vos plateformes.",
          quickCheck: [
            { objective: "O4", q: "Quel type de publication a le plus de chances de demander une étiquette IA ?", options: ["Une vidéo d'IA réaliste d'un lieu réel, qui a l'air vraie", "Un script que l'IA vous a aidé à écrire", "Une vidéo avec des sous-titres automatiques", "Une photo avec un simple filtre de couleur"], answer: 0, why: "Les plateformes demandent d'étiqueter les contenus d'IA réalistes que le public pourrait prendre pour vrais." },
            { objective: "O4", q: "Vous ne savez pas si une publication a besoin d'une étiquette IA. Que faites-vous ?", options: ["La laisser sans étiquette", "Supprimer la publication", "L'étiqueter", "Demander à vos abonnés dans les commentaires"], answer: 2, why: "En cas de doute, mettre l'étiquette est le choix sûr." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Déclarer les partenariats avec les marques selon la FTC",
          minutes: 5,
          goal: "Rédiger une publication sponsorisée avec une mention claire et correcte.",
          text: [
            "Si une marque vous paie, vous donne des produits gratuits, une commission ou un voyage, et que votre public ne s'attendrait pas à ce lien, vous devez le dire, même si vous gardez simplement un produit gratuit et même pour de petits cadeaux. Faites la mention sur chaque publication sponsorisée ; vous ne pouvez pas supposer que les spectateurs ont vu les précédentes.",
            "Les règles de la FTC sur les recommandations disent que les mentions doivent être faciles à remarquer et à comprendre. \"#ad\" (ou \"#publicité\") ou \"Pub :\" au début, ou \"Sponsorisé par XYZ\", fonctionnent bien. Les étiquettes vagues comme \"#partner\", \"#ambassador\" ou \"#sp\", ou les mentions cachées dans les commentaires, à la fin de longues légendes ou derrière \"plus\", souvent ne suffisent pas. Dans les vidéos, faites la mention dans la vidéo elle-même, de préférence à l'oral et à l'écran, et tôt ; répétez-la pendant les directs.",
            "Ne dites que ce que vous pensez honnêtement après un vrai usage, et ne publiez jamais de faux avis. Les outils de mention des plateformes aident mais peuvent ne pas suffire seuls ; ajoutez votre propre mention. L'IA peut rédiger les légendes sponsorisées, mais c'est vous qui êtes responsable de la mention et de chaque affirmation."
          ],
          steps: ["Vérifiez si vous avez un lien significatif : paiement, produit gratuit, commission, voyage.", "Mettez \"#ad\" ou \"Sponsorisé\" au début de la légende.", "Dans les vidéos, dites-le et montrez-le tôt ; répétez pendant les directs.", "Ne faites que des affirmations fondées sur votre expérience honnête.", "Utilisez les outils de la plateforme ET votre propre mention."],
          words: [["Lien significatif", "une relation comme un paiement ou des produits gratuits, à laquelle les spectateurs ne s'attendent peut-être pas."], ["Recommandation", "un message que les spectateurs prennent pour votre avis honnête sur un produit."]],
          slides: [
            { title: "Quand faire la mention", bullets: ["Paiement, produits gratuits, commissions, voyages", "Même pour de petits cadeaux", "Sur chaque publication sponsorisée"] },
            { title: "Comment faire la mention", bullets: ["\"#ad\" ou \"Pub :\" au début", "\"Sponsorisé par XYZ\"", "Pas cachée dans les commentaires ni après \"plus\""] },
            { title: "Dans les vidéos et les directs", bullets: ["Dites-le et montrez-le", "Tôt dans la vidéo", "Répétez pendant les directs"] },
            { title: "Affirmations honnêtes", bullets: ["Seulement votre vraie expérience", "Ajoutez aussi votre propre mention"] }
          ],
          sources: [{ name: "FTC : guide sur les recommandations, questions fréquentes (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Rédigez avec l'IA un exemple de publication sponsorisée pour un produit que vous utilisez vraiment. Mettez une mention claire au début, écrivez la mention orale pour la vidéo, et vérifiez que chaque affirmation est honnête.",
          youCanNow: "déclarer les partenariats avec les marques de façon claire et honnête, comme l'attend la FTC.",
          quickCheck: [
            { objective: "O5", q: "Où doit apparaître la mention d'un partenariat de marque dans une légende ?", options: ["Tout à la fin, après les hashtags", "Seulement dans la bio de votre profil", "Dans un commentaire sous la publication", "Au début, là où les gens la voient en premier"], answer: 3, why: "Une mention claire se place là où le public la voit tout de suite." },
            { objective: "O5", q: "On vous paie pour parler d'un produit dans une vidéo. Que faites-vous ?", options: ["Parler du partenariat seulement dans la description", "Dire et montrer la mention tôt dans la vidéo", "Ne rien mentionner, car la marque est connue", "Le mentionner seulement si quelqu'un pose la question"], answer: 1, why: "Dans une vidéo, la mention doit être dite et montrée tôt." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protéger vos droits et respecter ceux des autres",
          minutes: 5,
          goal: "Utiliser l'IA sans copier les autres, et protéger vos propres contenus et votre image.",
          text: [
            "N'utilisez pas l'IA pour copier les vidéos d'un autre créateur, le logo d'une marque, ou la voix ou le visage de quelqu'un sans autorisation. Faire dire ou faire à une vraie personne des choses qu'elle n'a pas dites ou faites peut tromper les spectateurs, enfreindre les règles des plateformes et entraîner des poursuites. Utilisez de la musique et des extraits dont vous avez les droits, ou la bibliothèque sous licence de la plateforme.",
            "Propriété : le Bureau du droit d'auteur des États-Unis (US Copyright Office) dit qu'un contenu produit uniquement par l'IA n'est pas protégé par le droit d'auteur, mais que votre propre travail créatif, y compris vos retouches et votre agencement humains, peut l'être. Plus votre contenu repose sur votre voix, vos images et vos idées, plus il vous appartient.",
            "Protégez-vous : lisez dans les contrats des marques à qui appartient le contenu, combien de temps elles peuvent l'utiliser, et si elles peuvent utiliser votre visage ou votre voix avec l'IA. Gardez les originaux de votre travail. Faites relire par un avocat tout contrat qui cède des droits sur vos contenus ou votre image."
          ],
          steps: ["N'utilisez jamais l'IA pour copier un créateur, une marque, ou la voix ou le visage de quelqu'un sans autorisation.", "Utilisez de la musique et des extraits sous licence.", "Mettez votre voix, vos images et vos idées au centre.", "Lisez dans les contrats la propriété, la durée d'utilisation et l'usage de votre image par l'IA.", "Faites relire par un avocat les contrats qui cèdent des droits."],
          words: [["Image (droit à l'image)", "votre visage, votre voix et votre identité."], ["Licence", "une autorisation d'utiliser quelque chose selon des conditions fixées."], ["Droits d'utilisation", "ce qu'une marque peut faire de votre contenu, et pendant combien de temps."]],
          slides: [
            { title: "Respectez les autres", bullets: ["Ne copiez pas créateurs, logos, voix ou visages", "Utilisez musique et extraits sous licence"] },
            { title: "Droit d'auteur et IA", bullets: ["Contenu fait uniquement par l'IA : pas protégé", "Votre travail créatif humain peut l'être", "Votre voix et vos images = à vous"] },
            { title: "Protégez-vous", bullets: ["À qui appartient le contenu ? Pour combien de temps ?", "Peuvent-ils utiliser votre visage ou votre voix avec l'IA ?", "Un avocat relit les contrats de cession de droits"] }
          ],
          sources: [{ name: "US Copyright Office : droit d'auteur et intelligence artificielle (en anglais)", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office : annonce du rapport partie 2 sur la protection par le droit d'auteur (en anglais)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Tâche finale : écrivez trois règles que vous suivrez sur l'usage du travail des autres et sur vos propres droits, puis rassemblez votre kit de contenus : niche et piliers, plan sur 7 jours, script, contenus recyclés, liste de contrôle des mentions IA et exemple de publication sponsorisée.",
          youCanNow: "créer avec l'IA en tant que créateur tout en gardant la confiance de votre public et en protégeant les droits de chacun.",
          quickCheck: [
            { objective: "O6", q: "Que devez-vous vérifier dans un contrat de marque ?", options: ["À qui appartient le contenu, pour combien de temps, et l'usage de votre image par l'IA", "Seulement le montant payé", "Seulement la date de publication", "Les couleurs du logo de la marque"], answer: 0, why: "La propriété, la durée et les droits sur votre image vous protègent, vous et votre travail." },
            { objective: "O6", q: "Un abonné vous demande d'utiliser l'IA pour copier la voix d'un créateur célèbre dans une vidéo pour rire. Que faites-vous ?", options: ["Le faire, puisque c'est pour rire", "Le faire en ajoutant une petite note", "Le faire sur une seule plateforme", "Refuser, sauf si vous avez la permission de ce créateur"], answer: 3, why: "Copier la voix d'une autre personne sans sa permission n'est pas acceptable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Garder la confiance de votre public",
        questions: [
          { objective: "O4", q: "Sur YouTube, lequel de ces contenus demande une mention IA ?", options: ["Une vidéo réaliste d'une vraie personne disant quelque chose qu'elle n'a jamais dit", "Une correction des couleurs", "Utiliser l'IA pour trouver des titres", "Un dragon de dessin animé"], answer: 0, why: "Un contenu réaliste modifié qui montre une vraie personne demande une mention." },
          { objective: "O4", q: "YouTube exige-t-il une mention quand l'IA a seulement aidé à écrire votre script ?", options: ["Seulement pour les longues vidéos", "Oui, toujours", "Seulement le dimanche", "Non"], answer: 3, why: "Utiliser l'IA pour les idées ou les scripts ne demande pas de mention." },
          { objective: "O5", q: "Une marque vous a envoyé des baskets gratuites et vous en parlez. Que devez-vous faire ?", options: ["Rien, vous les avez gardées", "Le dire clairement, comme \"Offert par XYZ\" ou \"#ad\" au début", "Le cacher dans les commentaires", "Mettre \"#sp\" à la fin"], answer: 1, why: "Des produits gratuits sont un lien significatif qui demande une mention claire." },
          { objective: "O5", q: "Dans une vidéo sponsorisée, la mention doit être :", options: ["Dans la vidéo elle-même, dite et montrée, tôt", "Seulement dans la description", "Seulement dans un lien", "Seulement tout à la fin"], answer: 0, why: "La FTC conseille de faire la mention dans la vidéo, idéalement des deux façons." },
          { objective: "O6", q: "Pouvez-vous utiliser l'IA pour cloner la voix d'un autre créateur dans votre vidéo sans autorisation ?", options: ["Seulement si c'est court", "Oui", "Non", "Seulement pour rire"], answer: 2, why: "Copier la voix de quelqu'un sans autorisation peut tromper et violer des droits." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les créateurs de contenu et les influenceurs",
    questions: [
      { objective: "O1", q: "Les créateurs gagnent souvent de l'argent grâce à :", options: ["Seulement des gains au loto", "Des partenariats avec des marques, des liens d'affiliation, des produits et des programmes des plateformes", "Seulement des aides du gouvernement", "Rien"], answer: 1, why: "Ce sont des sources de revenus courantes pour les créateurs." },
      { objective: "O1", q: "Une phrase de niche dit :", options: ["Votre nombre d'abonnés", "La marque de votre caméra", "Votre mot de passe", "Pour qui vous créez et ce qu'ils y gagnent"], answer: 3, why: "Elle définit votre public et votre valeur." },
      { objective: "O1", q: "Pourquoi avoir des piliers de contenu ?", options: ["Ils cachent les publicités", "La loi l'exige", "Ils remplacent les scripts", "Ils facilitent la planification et indiquent au public à quoi s'attendre"], answer: 3, why: "Les piliers donnent une structure." },
      { objective: "O2", q: "L'accroche, c'est :", options: ["La dernière image", "La phrase d'ouverture qui donne envie de rester", "Le logo d'un sponsor", "La taille de la miniature"], answer: 1, why: "Les premières secondes décident si les gens restent." },
      { objective: "O2", q: "Après que l'IA a rédigé un script, vous devez :", options: ["Le copier pour un autre créateur", "Le publier sans le lire", "Le lire à voix haute et le corriger pour qu'il vous ressemble", "Ajouter des faits inventés"], answer: 2, why: "Votre voix garde votre public." },
      { objective: "O2", q: "Sur la santé ou l'argent, les faits donnés par l'IA doivent être :", options: ["Confirmés avant d'être partagés", "Crus entièrement", "Exagérés", "Cachés"], answer: 0, why: "L'IA peut inventer des faits et des études." },
      { objective: "O3", q: "Recycler un contenu veut dire :", options: ["Acheter des abonnés", "Supprimer les vieilles vidéos", "Transformer un contenu en plusieurs", "Republier la vidéo de quelqu'un d'autre"], answer: 2, why: "Une vidéo peut devenir beaucoup de publications." },
      { objective: "O3", q: "Avant de publier des sous-titres faits par l'IA, vérifiez :", options: ["Les noms, les chiffres et l'argot", "Rien", "Seulement la police", "Seulement les émojis"], answer: 0, why: "Les sous-titres automatiques font souvent des erreurs sur ces points." },
      { objective: "O3", q: "Un court extrait doit :", options: ["Choquer à tout prix", "Avoir un sens seul et ne pas déformer ce qui a été dit", "Supprimer tout le contexte", "Changer les paroles d'un invité"], answer: 1, why: "L'exactitude garde la confiance." },
      { objective: "O4", q: "Sur YouTube, la mention IA se fait :", options: ["Pas du tout", "Seulement dans les commentaires", "Par e-mail à YouTube", "Avec le réglage d'utilisation de l'IA au moment de la mise en ligne"], answer: 3, why: "YouTube Studio a un réglage d'utilisation de l'IA lors de la mise en ligne." },
      { objective: "O4", q: "Lequel n'a PAS besoin de mention sur YouTube ?", options: ["Un filtre beauté", "Un faux événement d'actualité réaliste", "Une vraie personne à qui on fait dire des choses fausses", "Une scène réaliste qui n'a jamais eu lieu"], answer: 0, why: "Les petites retouches esthétiques ne sont pas concernées." },
      { objective: "O4", q: "Oublier plusieurs fois de faire la mention sur YouTube peut entraîner :", options: ["Rien", "Plus de vues", "Une prime", "Des étiquettes, un retrait ou la perte de l'accès au programme partenaire"], answer: 3, why: "La page d'aide de YouTube cite ces conséquences." },
      { objective: "O4", q: "Quand vous ne savez pas si vous devez signaler un contenu d'IA, vous devez :", options: ["Supprimer votre compte", "Le cacher", "Le signaler", "Demander aux spectateurs de deviner"], answer: 2, why: "L'honnêteté protège la confiance." },
      { objective: "O5", q: "Un lien significatif, c'est :", options: ["Votre câble internet", "Une relation comme un paiement ou des produits gratuits, à laquelle les spectateurs ne s'attendent peut-être pas", "Le commentaire d'un ami", "Votre logiciel de montage"], answer: 1, why: "C'est ce qui doit être mentionné." },
      { objective: "O5", q: "Quelle mention est claire ?", options: ["\"#partner\" après \"plus\"", "\"#sp\" à la fin", "Une note dans les commentaires", "\"#ad\" au début de la légende"], answer: 3, why: "La FTC cite \"#ad\" au début comme probablement efficace." },
      { objective: "O5", q: "Pendant un direct avec un sponsor, vous devez :", options: ["Ne jamais en parler", "Le dire une fois avant le direct", "Répéter la mention pendant le direct", "Le mettre dans une vieille publication"], answer: 2, why: "Les gens rejoignent les directs à des moments différents." },
      { objective: "O5", q: "L'outil de partenariat rémunéré de la plateforme suffit-il toujours seul ?", options: ["Pas toujours ; ajoutez aussi votre propre mention", "Oui, toujours", "Il n'est pas autorisé", "Seulement pour les grands créateurs"], answer: 0, why: "La FTC dit que les outils des plateformes ne sont pas une garantie." },
      { objective: "O6", q: "Selon le Copyright Office, un contenu produit uniquement par l'IA :", options: ["Appartient à la plateforme", "N'est pas protégé par le droit d'auteur", "Vous appartient automatiquement", "Appartient à la marque"], answer: 1, why: "Le droit d'auteur protège les œuvres d'auteurs humains." },
      { objective: "O6", q: "Dans un contrat avec une marque, vous devez vérifier :", options: ["Seulement le logo", "À qui appartient le contenu, pour combien de temps, et l'usage de votre image par l'IA", "Rien", "Seulement le style des émojis"], answer: 1, why: "Ces conditions touchent à vos droits." },
      { objective: "O6", q: "Qui doit relire un contrat qui cède des droits sur votre visage ou votre voix ?", options: ["Un avocat", "Seulement l'IA", "Vos abonnés", "Personne"], answer: 0, why: "Un avocat peut protéger vos droits." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Niche, piliers et plan",
        objective: "O1",
        notYet: "La niche est floue, ou le plan contient des publications qui ne correspondent à aucun pilier.",
        meets: "Une phrase de niche claire, trois piliers et un plan sur 7 jours où chaque publication correspond à un pilier.",
        exceeds: "Le plan mélange aussi les formats et dit ce que le public gagne avec chaque publication."
      },
      {
        name: "Un script qui vous ressemble",
        objective: "O2",
        notYet: "Le script n'a pas d'accroche, ne vous ressemble pas ou contient des faits non vérifiés.",
        meets: "Un court script avec une accroche forte, qui vous ressemble, avec des faits vérifiés.",
        exceeds: "Vous avez essayé plus d'une accroche et pouvez dire pourquoi vous avez choisi celle-ci."
      },
      {
        name: "Contenus réutilisés",
        objective: "O3",
        notYet: "Moins de trois contenus, ou des sous-titres avec des erreurs.",
        meets: "Au moins trois contenus courts avec des sous-titres corrects, chacun compréhensible seul.",
        exceeds: "Chaque contenu est adapté à la plateforme où il sera publié."
      },
      {
        name: "Liste de contrôle pour l'étiquetage IA",
        objective: "O4",
        notYet: "Pas de liste, ou un contenu d'IA réaliste laissé sans étiquette.",
        meets: "Une liste qui dit quand étiqueter un contenu d'IA sur vos plateformes, y compris en cas de doute.",
        exceeds: "Elle dit aussi où trouver la règle de chaque plateforme pour vérifier les changements."
      },
      {
        name: "Mention dans une publication sponsorisée",
        objective: "O5",
        notYet: "La mention manque, est cachée ou arrive trop tard.",
        meets: "Une mention claire au début, plus une mention dite à l'oral pour une vidéo, et des affirmations honnêtes.",
        exceeds: "Elle prévoit aussi de répéter la mention pendant les directs ou les longues vidéos."
      },
      {
        name: "Règles sur les droits",
        objective: "O6",
        notYet: "Moins de trois règles, ou une règle qui permet de copier le travail ou l'image d'autres personnes.",
        meets: "Trois règles claires pour utiliser le travail des autres et protéger le vôtre.",
        exceeds: "Les règles disent aussi quoi vérifier dans un contrat de marque avant de le signer."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui publient selon leur plan sur 7 jours pendant au moins une semaine complète (enquête de suivi)",
      "Les apprenants qui obtiennent un partenariat de marque ou un revenu d'affiliation dans les 90 jours, avec une mention correcte",
      "Les apprenants qui commencent un autre cours Koach Learn sur l'entreprise dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet, et l'appareil photo d'un téléphone",
      "Un assistant d'IA gratuit (comme ChatGPT, Microsoft Copilot ou Google Gemini) et un logiciel de montage vidéo gratuit avec sous-titres automatiques",
      "Une de vos longues vidéos ou publications à réutiliser",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez à chaque apprenant d'apporter des exemples de ses propres légendes ou un extrait enregistré, pour que les textes de l'IA puissent suivre sa voix.",
      "Ouvrez ensemble la page d'aide de chaque plateforme sur l'étiquetage de l'IA, car les règles changent ; ne vous fiez pas aux résumés de l'IA.",
      "Dans les exercices, n'utilisez que des contenus que l'apprenant a créés ou qu'il a la permission d'utiliser.",
      "Rappelez aux apprenants qu'un avocat doit relire les contrats qui cèdent des droits sur leur visage ou leur voix.",
      "Notez le kit de contenu avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
