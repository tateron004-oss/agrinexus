"use strict";

// Koach Learn course (French translation of youth/youth-coding-with-ai.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-coding-with-ai-fr",
  lang: "fr",
  translationOf: "youth-coding-with-ai",
  category: "Youth",
  name: "Initiation à la programmation avec l'IA",
  skills: "Exécuter du Python dans un notebook en ligne gratuit, Utiliser des variables et input, Prendre des décisions avec if, Répéter avec des boucles, Demander à l'IA d'expliquer et de corriger du code",
  outcome: "écrire et exécuter un petit jeu de quiz en Python dans un notebook en ligne gratuit, en utilisant un assistant d'IA pour expliquer le code et aider à corriger les erreurs, et expliquer ce que fait chaque ligne de votre programme.",
  about: [
    "Ce cours s'adresse aux jeunes qui n'ont jamais programmé, ou qui ont essayé une fois et sont restés bloqués. Vous n'avez pas besoin d'être fort en maths. Il vous faut de la curiosité et environ cinq minutes par leçon.",
    "Vous écrirez du vrai code Python dans Google Colab, un notebook gratuit qui marche dans un navigateur web : vous pouvez donc utiliser un ordinateur de l'école ou de la bibliothèque. Vous apprendrez les briques de base du code, puis à utiliser un assistant d'IA comme un professeur patient : pour expliquer le code, trouver les erreurs et proposer des idées, pendant que c'est vous qui comprenez et écrivez le programme.",
    "Avant de vous inscrire à un outil, vérifiez les règles de votre école sur l'IA et l'âge minimum de l'outil, et parlez-en à un parent ou tuteur. Chaque leçon se termine par une activité \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Créez un jeu de quiz en Python dans Google Colab avec au moins 5 questions sur un sujet que vous aimez (un jeu, un sport, un groupe de musique, une matière). Il doit demander le prénom du joueur, poser les questions, compter les points et afficher un message final. Utilisez un assistant d'IA pour expliquer ou corriger au moins une partie, puis écrivez au-dessus de chaque partie un commentaire qui dit avec vos mots ce qu'elle fait.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes qui n'ont jamais programmé, ou qui ont essayé une fois et sont restés bloqués, y compris ceux qui ne se trouvent pas bons en maths.",
    startingPoint: "Ils utilisent chaque jour des téléphones, des applications et des jeux, et savent se servir d'un navigateur web. Ils n'ont jamais écrit ni exécuté de programme, et ont parfois vu l'IA écrire du code sans savoir comment il fonctionne.",
    gap: "Programmer ouvre la porte aux métiers de la technologie et rend l'IA moins mystérieuse, mais copier du code écrit par l'IA n'apprend rien et enfreint les règles de nombreuses classes. Les jeunes doivent écrire et exécuter eux-mêmes du vrai Python, en utilisant l'IA comme un professeur qui explique le code et aide à corriger les erreurs.",
    constraints: [
      "Âges minimum : Colab demande un compte Google et les outils d'IA ont un âge minimum ; un parent ou tuteur est impliqué pour les moins de 18 ans",
      "Les règles des écoles sur l'IA varient ; les travaux notés peuvent interdire l'IA",
      "Appareils : un ordinateur de l'école, de la bibliothèque ou de la maison avec un navigateur web ; rien à installer",
      "Vie privée : aucun mot de passe, aucune adresse, aucune pièce d'identité ni aucun numéro de téléphone collé dans les outils d'IA",
      "Débutants : des mots simples, chaque terme expliqué, environ cinq minutes par leçon"
    ],
    prerequisites: "Aucun. « C'est quoi l'IA ? (pour les jeunes) » est un bon premier cours."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec vos propres mots", action: "expliquer ce que sont le code et un programme, et comment utiliser l'IA comme un professeur plutôt que comme quelqu'un qui écrit à votre place, dans le respect des règles de votre école", standard: "en réussissant au moins 4 questions sur 5" },
    { id: "O2", condition: "Avec un compte Google que vous avez le droit d'utiliser", action: "ouvrir un notebook Google Colab et exécuter du code Python qui affiche du texte", standard: "sans aide, avec le résultat affiché sous la cellule" },
    { id: "O3", condition: "À partir d'un quiz d'une question à créer", action: "écrire du Python qui utilise une variable, input, if et else, et une boucle", standard: "pour qu'il fonctionne correctement avec une bonne et une mauvaise réponse" },
    { id: "O4", condition: "À partir de quelques lignes de code", action: "demander à un assistant d'IA d'expliquer le code ligne par ligne, puis changer une chose, prévoir le résultat et exécuter", standard: "sans coller aucune information privée" },
    { id: "O5", condition: "Face à un message d'erreur de Python", action: "trouver la ligne qui pose problème, corriger le bug avec l'aide de l'IA si besoin, et exécuter vous-même la correction", standard: "jusqu'à ce que le programme tourne sans erreur" },
    { id: "O6", condition: "En partant d'un plan écrit sous forme de commentaires", action: "créer un jeu de quiz de 5 questions une partie à la fois et dire comment vous avez utilisé l'IA", standard: "avec le prénom du joueur, le score, un message final et un commentaire au-dessus de chaque partie écrit avec vos mots" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Vos premières lignes de code",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est le code, et où l'IA intervient",
          minutes: 4,
          goal: "Expliquer ce qu'est un programme et comment un assistant d'IA peut vous aider à apprendre à programmer.",
          text: [
            "Le code est une liste d'instructions qu'un ordinateur suit exactement, dans l'ordre. Un programme est un ensemble de ces instructions qui fait un travail, comme un jeu, une application ou une calculatrice. Python est un langage de programmation populaire parce que ses mots ressemblent beaucoup à de l'anglais.",
            "Les assistants d'IA comme ChatGPT, Microsoft Copilot et Google Gemini peuvent écrire et expliquer du code. C'est utile, mais si vous copiez du code que vous ne comprenez pas, vous n'apprenez rien et vous ne pouvez pas le réparer quand il ne marche plus. Dans ce cours, l'IA est votre professeur, pas quelqu'un qui écrit à votre place.",
            "Les écoles ont des règles différentes sur l'IA. Certains cours l'autorisent pour s'entraîner mais pas pour les travaux notés. Vérifiez toujours les règles de votre professeur et dites quand vous avez utilisé l'IA. Beaucoup d'outils d'IA ont aussi un âge minimum : lisez les conditions de l'outil et demandez à un parent ou tuteur avant de vous inscrire."
          ],
          words: [["Code", "des instructions écrites pour qu'un ordinateur les suive."], ["Programme", "un ensemble d'instructions qui fait un travail."], ["Python", "un langage de programmation populaire et facile à lire."]],
          slides: [
            { title: "Le code, ce sont des instructions", bullets: ["L'ordinateur les suit exactement, dans l'ordre", "Un programme est du code qui fait un travail", "Python ressemble beaucoup à de l'anglais"] },
            { title: "L'IA est votre professeur", bullets: ["Elle peut expliquer le code ligne par ligne", "Elle peut aider à trouver les erreurs", "Ne copiez pas du code que vous ne comprenez pas"] },
            { title: "Avant de commencer", bullets: ["Vérifiez les règles de votre école sur l'IA", "Vérifiez l'âge minimum de l'outil", "Demandez à un parent ou tuteur avant de vous inscrire"] }
          ],
          tryIt: "Écrivez un petit programme que vous aimeriez créer un jour, comme un quiz sur votre jeu préféré ou un calculateur de pourboire pour votre premier emploi. Puis écrivez une phrase sur la façon dont l'IA pourrait vous aider à l'apprendre sans le faire à votre place.",
          youCanNow: "dire ce que sont le code et un programme, et expliquer comment utiliser l'IA comme un professeur et non comme un raccourci.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi Python est-il un premier langage de programmation populaire ?", options: ["Il ne marche que sur les téléphones", "Il n'a pas besoin d'ordinateur", "Ses mots ressemblent beaucoup à l'anglais", "Il s'écrit tout seul"], answer: 2, why: "Les mots de Python ressemblent beaucoup à l'anglais, ce qui le rend plus facile à lire." },
            { objective: "O1", q: "Un ami dit : « Fais écrire tout ton programme par l'IA et rends-le. » Que répondez-vous ?", options: ["Je vais utiliser l'IA comme un professeur et écrire le code moi-même, en suivant les règles de mon professeur", "Bonne idée ; personne ne le saura", "Seulement si ça a l'air difficile", "Je vais le copier mais changer les noms"], answer: 0, why: "Copier du code que vous ne comprenez pas n'apprend rien et peut enfreindre le règlement de l'école." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Exécuter votre premier code Python dans Google Colab",
          minutes: 5,
          goal: "Ouvrir un notebook Colab gratuit et exécuter une ligne de Python.",
          text: [
            "Google Colab est un notebook gratuit qui exécute du Python dans votre navigateur web. Vous n'avez rien à installer. Il vous faut un compte Google. Vérifiez ses règles d'âge et, si vous avez moins de 18 ans, demandez d'abord à un parent ou tuteur ; un compte Google de l'école peut marcher si votre école autorise Colab.",
            "Un notebook est fait de cellules. Une cellule de code est une case où vous tapez du Python. Vous appuyez sur le bouton lecture à côté de la cellule (ou Maj et Entrée) pour l'exécuter, et le résultat s'affiche en dessous.",
            "La première commande que la plupart des programmeurs apprennent est print. Elle affiche des mots à l'écran. Le texte se met entre guillemets, comme ceci : print(\"Bonjour, j'apprends Python\")."
          ],
          steps: ["Ouvrez un navigateur web et allez sur colab.research.google.com.", "Connectez-vous avec un compte Google que vous avez le droit d'utiliser.", "Créez un nouveau notebook.", "Cliquez dans la première cellule de code et tapez : print(\"Bonjour, j'apprends Python\")", "Appuyez sur le bouton lecture ou sur Maj et Entrée. Lisez le résultat sous la cellule."],
          words: [["Notebook", "une page où vous écrivez et exécutez du code dans de petites cases appelées cellules."], ["Cellule", "une case d'un notebook où vous tapez du code."], ["Résultat (sortie)", "ce que le programme affiche après s'être exécuté."]],
          slides: [
            { title: "Google Colab", bullets: ["Python gratuit dans votre navigateur", "Rien à installer", "Il faut un compte Google autorisé"] },
            { title: "Notebooks et cellules", bullets: ["Tapez le code dans une cellule", "Appuyez sur lecture ou Maj + Entrée", "Le résultat apparaît en dessous"] },
            { title: "Votre première commande", bullets: ["print(\"Bonjour, j'apprends Python\")", "Le texte va entre guillemets", "print l'affiche à l'écran"] }
          ],
          tryIt: "Dans un nouveau notebook Colab, affichez trois lignes : votre prénom, votre chanson ou votre jeu préféré, et un objectif pour ce cours. Exécutez la cellule et vérifiez que les trois lignes apparaissent.",
          youCanNow: "ouvrir un notebook Colab, taper du Python dans une cellule, l'exécuter et lire le résultat.",
          quickCheck: [
            { objective: "O2", q: "En Python, que fait print ?", options: ["Il envoie votre code à une imprimante", "Il affiche des mots ou des valeurs à l'écran", "Il supprime une cellule", "Il enregistre le notebook"], answer: 1, why: "print affiche du texte ou des valeurs sous la cellule quand elle s'exécute." },
            { objective: "O2", q: "Vous avez 14 ans et voulez utiliser Colab à la maison. Que faites-vous d'abord ?", options: ["Vous créez un compte avec un faux âge", "Vous utilisez le compte d'un inconnu", "Vous laissez tomber Colab", "Vous vérifiez les règles d'âge et demandez à un parent ou tuteur, ou utilisez un compte scolaire autorisé"], answer: 3, why: "Colab demande un compte Google ; vérifiez ses règles et impliquez un parent ou tuteur si vous avez moins de 18 ans." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Variables, input, if et boucles",
          minutes: 6,
          goal: "Utiliser une variable, demander une saisie, prendre une décision avec if et répéter avec une boucle.",
          text: [
            "Une variable est une boîte avec un nom qui garde une valeur. score = 0 crée une boîte appelée score et y met 0. Plus tard, score = score + 1 ajoute un point.",
            "input demande au joueur de taper quelque chose : name = input(\"Quel est ton prénom ? \"). Une instruction if prend une décision : if answer == \"Paris\": print(\"Correct !\") else: print(\"Pas tout à fait\"). Deux signes égal veulent dire \"est pareil que\". Les lignes sous if et else sont décalées avec des espaces ; c'est ce qu'on appelle l'indentation, et Python en a besoin.",
            "Une boucle répète du code. for i in range(3): print(\"Allez l'équipe !\") affiche l'encouragement trois fois. Ces quatre idées, variables, input, if et boucles, suffisent pour créer un jeu de quiz."
          ],
          steps: ["Créez une variable : score = 0", "Demandez une saisie : name = input(\"Quel est ton prénom ? \")", "Prenez une décision avec if et else, en décalant les lignes sous chacun.", "Répétez quelque chose avec : for i in range(3):"],
          words: [["Variable", "une boîte avec un nom qui garde une valeur."], ["Saisie (input)", "ce que l'utilisateur tape pendant que le programme tourne."], ["Instruction if", "du code qui s'exécute seulement quand quelque chose est vrai."], ["Boucle", "du code qui se répète."], ["Indentation", "des espaces au début d'une ligne qui montrent quelles lignes vont ensemble."]],
          slides: [
            { title: "Les variables gardent des valeurs", bullets: ["score = 0", "score = score + 1 ajoute un point"] },
            { title: "input et if", bullets: ["name = input(\"Quel est ton prénom ? \")", "if answer == \"Paris\": alors afficher Correct", "== veut dire \"est pareil que\""] },
            { title: "Les boucles répètent", bullets: ["for i in range(3): répète 3 fois", "Décalez les lignes dans la boucle"] },
            { title: "Quatre briques de base", bullets: ["Variables, input, if, boucles", "Assez pour créer un jeu de quiz"] }
          ],
          tryIt: "Écrivez un quiz d'une question : demandez le prénom du joueur, posez une question sur votre matière ou votre jeu préféré, et utilisez if et else pour afficher \"Correct\" ou \"Pas tout à fait\". Exécutez-le deux fois, une fois avec la bonne réponse et une fois avec une mauvaise.",
          youCanNow: "utiliser une variable, input, une instruction if et une boucle dans un petit programme Python.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que l'indentation en Python ?", options: ["Un type d'erreur", "Les espaces qui décalent les lignes sous un if, un else ou une boucle", "Une ligne de commentaire", "Le bouton lecture"], answer: 1, why: "L'indentation montre quelles lignes sont sous un if, un else ou une boucle, et Python en a besoin." },
            { objective: "O3", q: "Vous voulez que le quiz ajoute un point pour une bonne réponse. Quelle ligne écrivez-vous sous le if ?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 ajoute un point à la valeur gardée dans score." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Vos premières lignes de code",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un programme ?", options: ["Un ensemble d'instructions qui fait un travail", "Un type de clavier", "Une adresse de site web", "Une console de jeux"], answer: 0, why: "Un programme est du code, un ensemble d'instructions, qui fait un travail." },
          { objective: "O1", q: "Votre cours autorise l'IA pour s'entraîner mais pas pour les devoirs notés. Que faites-vous ?", options: ["Utiliser l'IA pour les devoirs quand même", "Utiliser l'IA pour vous entraîner et faire le travail noté vous-même", "Ne plus jamais programmer", "Demander à un ami d'utiliser l'IA pour vous"], answer: 1, why: "Suivre les règles du professeur fait partie d'une utilisation honnête de l'IA." },
          { objective: "O2", q: "Dans Colab, comment exécuter une cellule de code ?", options: ["Fermer le navigateur", "Imprimer la page", "Appuyer sur le bouton lecture ou sur Maj et Entrée", "Redémarrer l'ordinateur"], answer: 2, why: "Le bouton lecture ou Maj et Entrée exécute la cellule." },
          { objective: "O3", q: "Que fait score = score + 1 ?", options: ["Il efface le score", "Il affiche le mot score", "Il demande un score au joueur", "Il ajoute un à la valeur gardée dans score"], answer: 3, why: "Il prend le score actuel et ajoute un." },
          { objective: "O3", q: "Que fait for i in range(3): ?", options: ["Il répète 3 fois le code décalé", "Il pose 3 questions", "Il crée 3 variables", "Il arrête le programme"], answer: 0, why: "Une boucle for avec range(3) répète trois fois le code qu'elle contient." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Programmer avec l'aide de l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Demander à l'IA d'expliquer du code",
          minutes: 5,
          goal: "Demander à un assistant d'IA d'expliquer un morceau de code ligne par ligne, et vérifier que vous le comprenez.",
          text: [
            "Collez quelques lignes de code dans un assistant d'IA et demandez : \"Explique ce code Python ligne par ligne pour un débutant. Utilise des mots simples.\" Une bonne explication vous dit ce que fait chaque ligne et pourquoi.",
            "Ensuite, testez votre compréhension. Changez une chose dans le code, devinez ce qui va se passer et exécutez-le. Si vous aviez deviné juste, vous avez compris. Sinon, demandez à l'IA : \"J'ai changé ceci et je m'attendais à cela. Pourquoi a-t-il fait autre chose ?\"",
            "Ne collez pas d'informations privées dans un outil d'IA : pas de mots de passe, d'adresse, de numéro d'élève ou de numéro de téléphone. Le code d'un projet de classe n'en a pas besoin."
          ],
          steps: ["Copiez 3 à 10 lignes de code.", "Demandez : \"Explique ce code Python ligne par ligne pour un débutant.\"", "Changez une chose et devinez ce qui va se passer.", "Exécutez et comparez. Posez une autre question si vous vous êtes trompé."],
          words: [["Expliquer ligne par ligne", "passer le code une ligne à la fois et dire ce que fait chacune."]],
          slides: [
            { title: "Demandez une explication", bullets: ["Collez quelques lignes", "\"Explique ligne par ligne pour un débutant\"", "Demandez des mots simples"] },
            { title: "Testez votre compréhension", bullets: ["Changez une chose", "Devinez ce qui va se passer", "Exécutez et comparez"] },
            { title: "Pas d'infos privées", bullets: ["Pas de mots de passe ni de numéro d'élève", "Pas d'adresse ni de numéro de téléphone"] }
          ],
          tryIt: "Collez votre quiz d'une question de la leçon 3 dans un assistant d'IA et demandez-lui d'expliquer chaque ligne. Puis changez la bonne réponse, devinez ce qui va se passer et exécutez-le.",
          youCanNow: "obtenir de l'IA une explication claire du code ligne par ligne et vérifier que vous le comprenez vraiment.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui fait une bonne explication de code par l'IA ?", options: ["Elle est la plus longue possible", "Elle donne seulement la réponse", "Elle dit ce que fait chaque ligne et pourquoi", "Elle réécrit tout"], answer: 2, why: "Une bonne explication dit ce que fait chaque ligne et pourquoi, avec des mots simples." },
            { objective: "O4", q: "Vous avez changé une ligne, deviné le résultat, et le programme a fait autre chose. Et ensuite ?", options: ["Vous supprimez le programme", "Vous demandez à l'IA : « J'ai changé ceci et j'attendais cela. Pourquoi a-t-il fait autre chose ? »", "Vous devinez encore sans l'exécuter", "Vous collez votre mot de passe pour que l'IA vérifie"], answer: 1, why: "Une question de suivi qui explique ce que vous attendiez vous aide à comprendre le code." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Trouver et corriger les erreurs avec l'IA",
          minutes: 5,
          goal: "Lire un message d'erreur et utiliser l'IA pour aider à corriger un bug.",
          text: [
            "Un bug est une erreur dans le code. Quand Python ne peut pas exécuter une ligne, il affiche un message d'erreur. La dernière ligne du message nomme en général le problème, comme SyntaxError (quelque chose est mal tapé) ou IndentationError (les espaces au début d'une ligne ne sont pas bons). Il montre aussi le numéro de la ligne.",
            "Essayez d'abord vous-même : regardez cette ligne pour trouver un guillemet, une parenthèse, deux-points ou un espace qui manque. Si vous êtes bloqué, collez le code et l'erreur complète dans un assistant d'IA et demandez : \"Que veut dire cette erreur et comment la corriger ? Explique pourquoi.\"",
            "L'IA peut aussi se tromper sur le code. Exécutez vous-même la version corrigée. Si l'erreur change ou reste, dites à l'IA exactement ce qui s'est passé."
          ],
          steps: ["Lisez la dernière ligne du message d'erreur et le numéro de ligne.", "Cherchez sur cette ligne un guillemet, une parenthèse, deux-points ou des espaces qui manquent.", "Si vous êtes bloqué, collez le code et l'erreur complète dans un assistant d'IA.", "Demandez ce que ça veut dire et pourquoi la correction marche.", "Exécutez vous-même la correction et vérifiez qu'elle marche."],
          words: [["Bug", "une erreur dans le code."], ["Message d'erreur", "la note de Python qui dit ce qui n'a pas marché et à quelle ligne."], ["Débogage", "trouver et corriger les bugs."]],
          slides: [
            { title: "Tout le monde a des bugs", bullets: ["Les erreurs sont des indices, pas un échec", "Lisez la dernière ligne et le numéro de ligne"] },
            { title: "Essayez d'abord vous-même", bullets: ["Un guillemet ou une parenthèse manque ?", "Deux-points manquants après if ou for ?", "Mauvais espaces en début de ligne ?"] },
            { title: "Puis demandez à l'IA", bullets: ["Collez le code et l'erreur complète", "Demandez le sens et pourquoi ça corrige", "Exécutez la correction vous-même"] }
          ],
          tryIt: "Dans votre quiz, effacez exprès les deux-points après la ligne if et exécutez. Lisez l'erreur. Demandez à un assistant d'IA de l'expliquer, corrigez-la et exécutez le programme de nouveau.",
          youCanNow: "lire un message d'erreur Python, chercher le problème et utiliser l'IA pour comprendre et corriger un bug.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire en général une SyntaxError ?", options: ["L'ordinateur est cassé", "Internet ne marche pas", "Votre réponse était fausse", "Quelque chose est mal tapé, comme un guillemet ou deux-points manquant"], answer: 3, why: "Une SyntaxError veut dire que Python n'arrive pas à lire quelque chose que vous avez tapé." },
            { objective: "O5", q: "Python affiche une erreur à la ligne 4. Que vérifiez-vous d'abord ?", options: ["La ligne 4 : un guillemet, une parenthèse, deux-points ou un espace qui manque", "Seulement la ligne 1", "La vitesse de votre Internet", "Rien ; vous redémarrez l'ordinateur"], answer: 0, why: "Le message indique le numéro de la ligne ; vérifiez d'abord cette ligne vous-même." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Créer votre jeu de quiz",
          minutes: 6,
          goal: "Préparer et créer un jeu de quiz de 5 questions avec l'aide de l'IA.",
          text: [
            "Les grands programmes sont faits de petits morceaux. Préparez d'abord : ce que le programme dit en premier, ce qu'il demande, comment il compte les points et ce qu'il dit à la fin. Écrivez le plan sous forme de courts commentaires. Un commentaire commence par # et Python l'ignore.",
            "Construisez un morceau à la fois et exécutez après chaque morceau. Si vous voulez une idée, demandez à l'IA : \"Comment mon quiz pourrait-il dire au joueur son score sur 5 ?\" Puis écrivez-le vous-même et demandez à l'IA de le vérifier.",
            "Quand ça marche, faites-y jouer un ami ou quelqu'un de votre famille. Regardez où il hésite et améliorez le jeu. Si vous le rendez à l'école, dites comment vous avez utilisé l'IA."
          ],
          steps: ["Écrivez un plan en commentaires # : accueil, questions, score, fin.", "Codez l'accueil et demandez le prénom du joueur. Exécutez.", "Ajoutez une question avec if et else qui change le score. Exécutez.", "Ajoutez quatre autres questions. Exécutez.", "Affichez le score final et un message. Faites jouer quelqu'un."],
          words: [["Commentaire", "une note dans le code qui commence par # et que Python ignore."], ["Plan", "une courte liste de ce que fera votre programme, dans l'ordre."]],
          slides: [
            { title: "Préparez avec des commentaires", bullets: ["# accueil", "# poser 5 questions", "# compter les points", "# message final"] },
            { title: "Construisez par petits morceaux", bullets: ["Ajoutez un morceau", "Exécutez", "Corrigez, puis ajoutez le suivant"] },
            { title: "L'IA comme aide", bullets: ["Demandez des idées, puis écrivez vous-même", "Demandez à l'IA de vérifier votre code", "Dites comment vous l'avez utilisée à l'école"] },
            { title: "Testez avec un vrai joueur", bullets: ["Faites jouer un ami", "Regardez où il hésite", "Améliorez le jeu"] }
          ],
          tryIt: "Tâche finale : créez dans Colab un jeu de quiz en Python d'au moins 5 questions sur un sujet que vous aimez. Demandez le prénom du joueur, comptez les points, affichez un message final, utilisez l'IA pour expliquer ou corriger une partie, et écrivez avec vos mots un commentaire au-dessus de chaque partie.",
          youCanNow: "préparer, créer, tester et expliquer un petit programme Python, en utilisant l'IA comme aide et non comme remplaçant.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un commentaire en Python ?", options: ["Une ligne qui affiche du texte", "Un type de boucle", "Une ligne qui commence par # et que Python ignore", "Un message d'erreur"], answer: 2, why: "Les commentaires commencent par # et sont des notes pour les personnes, pas des instructions pour Python." },
            { objective: "O6", q: "Vous avez fini le jeu de quiz. Quelle est une bonne étape suivante ?", options: ["Ne jamais l'exécuter", "Supprimer les commentaires", "Demander à l'IA de tout réécrire", "Le faire essayer à un ami et regarder où il se perd"], answer: 3, why: "Regarder quelqu'un jouer vous montre ce qu'il faut améliorer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Programmer avec l'aide de l'IA",
        questions: [
          { objective: "O4", q: "Quelle est une bonne façon de demander à l'IA un code que vous ne comprenez pas ?", options: ["\"Fais mes devoirs\"", "\"Explique ce code Python ligne par ligne pour un débutant\"", "\"Code\"", "\"Rends-le plus long\""], answer: 1, why: "Une demande claire d'explication ligne par ligne vous aide à apprendre." },
          { objective: "O4", q: "Comment vérifier que vous comprenez vraiment un code ?", options: ["Changer une chose, deviner le résultat, puis exécuter", "Le lire une fois rapidement", "L'effacer", "Demander à l'IA de dire que vous avez compris"], answer: 0, why: "Prévoir puis tester montre si vous comprenez vraiment." },
          { objective: "O5", q: "Python affiche un message d'erreur. Où regardez-vous d'abord ?", options: ["Le premier mot à l'écran", "La barre d'adresse du navigateur", "La dernière ligne du message et le numéro de ligne", "Le clavier"], answer: 2, why: "La dernière ligne nomme le problème et le numéro montre où il est." },
          { objective: "O5", q: "L'IA vous donne une correction pour votre bug. Et ensuite ?", options: ["Supposer qu'elle marche", "Rendre le travail sans l'exécuter", "Effacer votre programme", "L'exécuter vous-même et vérifier qu'elle marche"], answer: 3, why: "L'IA peut se tromper, alors vous testez vous-même la correction." },
          { objective: "O6", q: "En Python, que fait une ligne qui commence par # ?", options: ["C'est un commentaire que Python ignore", "Elle affiche un hashtag", "Elle arrête le programme", "Elle crée une boucle"], answer: 0, why: "Les lignes qui commencent par # sont des commentaires pour les personnes, pas des instructions." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Initiation à la programmation avec l'IA",
    questions: [
      { objective: "O1", q: "Le code, c'est surtout :", options: ["Des instructions qu'un ordinateur suit exactement", "Un mot de passe secret", "Un type de musique", "Une note scolaire"], answer: 0, why: "Le code est une liste d'instructions pour un ordinateur." },
      { objective: "O1", q: "Pourquoi copier du code d'IA que vous ne comprenez pas pose problème ?", options: ["Il est toujours trop court", "Vous n'apprenez rien et ne pouvez pas le réparer quand il casse", "Les ordinateurs ne peuvent pas exécuter du code d'IA", "Ça coûte de l'argent"], answer: 1, why: "Comprendre, c'est la compétence ; du code copié vous laisse bloqué." },
      { objective: "O1", q: "Avant de vous inscrire à un outil d'IA quand vous êtes ado, vous devez :", options: ["Donner une fausse date de naissance", "Partager votre mot de passe avec des amis", "Vérifier l'âge minimum de l'outil et demander à un parent ou tuteur", "Ne rien lire"], answer: 2, why: "Les limites d'âge et l'avis d'un parent vous protègent et vous gardent dans les règles." },
      { objective: "O2", q: "Google Colab vous permet de :", options: ["Seulement regarder des vidéos", "Acheter des jeux", "Envoyer des SMS", "Exécuter du Python dans un navigateur sans rien installer"], answer: 3, why: "Colab est un notebook en ligne gratuit pour exécuter du Python." },
      { objective: "O2", q: "Dans un notebook, une cellule est :", options: ["Une case où vous tapez et exécutez du code", "Une batterie de téléphone", "Un type d'erreur", "Une boucle"], answer: 0, why: "Les notebooks sont faits de cellules qui contiennent du code." },
      { objective: "O2", q: "Quelle ligne affiche des mots à l'écran en Python ?", options: ["show Bonjour", "print(\"Bonjour\")", "say = Bonjour", "run Bonjour"], answer: 1, why: "print avec du texte entre guillemets affiche le texte." },
      { objective: "O3", q: "Une variable est :", options: ["Un message d'erreur", "Un type de site web", "Une boîte avec un nom qui garde une valeur", "Une boucle sans fin"], answer: 2, why: "Les variables gardent des valeurs sous un nom, comme score." },
      { objective: "O3", q: "Quelle ligne demande au joueur de taper son prénom ?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"Quel est ton prénom ? \")"], answer: 3, why: "input demande à l'utilisateur de taper quelque chose." },
      { objective: "O3", q: "En Python, == veut dire :", options: ["Est pareil que", "Additionner", "Garder une valeur", "Commencer un commentaire"], answer: 0, why: "Deux signes égal comparent deux valeurs." },
      { objective: "O3", q: "Pourquoi Python fait-il attention à l'indentation ?", options: ["Elle colore le code", "Elle montre quelles lignes sont sous un if ou une boucle", "Elle économise la batterie", "C'est seulement de la décoration"], answer: 1, why: "Les lignes décalées appartiennent au if, au else ou à la boucle au-dessus." },
      { objective: "O3", q: "Vous voulez afficher \"Allez l'équipe !\" 5 fois. Quel est le meilleur choix ?", options: ["Une instruction if", "Un commentaire", "Une boucle for avec range(5)", "Une variable appelée team"], answer: 2, why: "Une boucle répète du code un nombre de fois donné." },
      { objective: "O4", q: "Qu'est-ce qu'on peut coller sans risque dans un assistant d'IA ?", options: ["Votre mot de passe de l'école", "Votre adresse", "Votre numéro de téléphone", "Dix lignes de code de quiz"], answer: 3, why: "Le code d'un projet ne contient pas d'informations privées." },
      { objective: "O4", q: "Après que l'IA a expliqué votre code, une bonne façon de tester votre compréhension est de :", options: ["Changer une chose, prévoir le résultat et exécuter", "Fermer le notebook", "Demander seulement une explication plus longue", "Le copier tel quel dans un autre notebook"], answer: 0, why: "Prévoir puis tester prouve que vous comprenez." },
      { objective: "O5", q: "Un bug est :", options: ["Une bonne fonction", "Une erreur dans le code", "Un type de boucle", "Un notebook"], answer: 1, why: "Les bugs sont des erreurs ; le débogage les corrige." },
      { objective: "O5", q: "IndentationError veut en général dire :", options: ["Votre internet ne marche pas", "Il vous faut un nouvel ordinateur", "Les espaces au début d'une ligne ne sont pas bons", "Le programme a marché"], answer: 2, why: "Elle montre de mauvais espaces au début d'une ligne." },
      { objective: "O5", q: "Vous êtes bloqué sur une erreur. Que devez-vous coller dans l'assistant d'IA ?", options: ["Seulement le mot erreur", "Votre mot de passe", "Rien ; abandonner", "Le code et le message d'erreur complet"], answer: 3, why: "Le code et l'erreur complète donnent à l'IA ce qu'il faut pour expliquer le problème." },
      { objective: "O5", q: "L'IA propose une correction mais l'erreur change. Vous devez :", options: ["Dire à l'IA exactement ce qui se passe maintenant", "Abandonner", "Rendre le travail quand même", "Supprimer Python"], answer: 0, why: "Des questions claires vous aident, vous et l'IA, à trouver le vrai problème." },
      { objective: "O6", q: "Quelle est la meilleure première étape pour créer un programme plus grand ?", options: ["Tout taper d'un coup", "Écrire un court plan en commentaires", "Demander à l'IA de tout écrire", "Ne pas tester"], answer: 1, why: "Un plan découpe le programme en petits morceaux." },
      { objective: "O6", q: "Pourquoi exécuter votre programme après chaque petit morceau ?", options: ["Ça rend le code plus long", "Python l'exige", "Vous trouvez les erreurs tôt, quand elles sont faciles à corriger", "Ça enregistre le fichier"], answer: 2, why: "Avancer par petites étapes rend les bugs faciles à trouver." },
      { objective: "O6", q: "Vous avez utilisé l'IA pour un projet de programmation à l'école. Que devez-vous faire ?", options: ["Le cacher", "Dire que tout est de vous", "Supprimer le projet", "Dire comment vous avez utilisé l'IA, selon les règles de votre professeur"], answer: 3, why: "Être honnête sur l'usage de l'IA fait partie du respect des règles de l'école." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Le programme tourne",
        objective: "O2",
        notYet: "Le programme ne s'exécute pas dans Colab, ou s'arrête sur une erreur.",
        meets: "Le programme s'exécute du début à la fin dans Colab.",
        exceeds: "Il accepte aussi une réponse tapée autrement par le joueur, par exemple en majuscules."
      },
      {
        name: "Les briques de base",
        objective: "O3",
        notYet: "Il manque input, if et else, ou une variable de score.",
        meets: "Demande le prénom du joueur, utilise if et else pour au moins 5 questions et garde le score dans une variable.",
        exceeds: "Utilise aussi une boucle pour répéter une partie du jeu."
      },
      {
        name: "Construit par parties",
        objective: "O6",
        notYet: "Pas de plan ni de message final.",
        meets: "Un plan en commentaires, cinq questions et un message final avec le score.",
        exceeds: "Un ami y a joué, et l'apprenant a amélioré une partie d'après ce qu'il a vu."
      },
      {
        name: "L'IA comme professeur",
        objective: "O4",
        notYet: "L'IA a écrit le programme, ou l'utilisation de l'IA n'est pas indiquée.",
        meets: "L'IA a expliqué ou aidé à corriger au moins une partie, et l'apprenant dit comment il l'a utilisée.",
        exceeds: "L'apprenant peut montrer un changement qu'il a prévu puis testé après l'explication de l'IA."
      },
      {
        name: "Commentaires avec ses mots",
        objective: "O5",
        notYet: "Les commentaires manquent ou sont copiés de l'IA.",
        meets: "Un commentaire au-dessus de chaque partie dit avec les mots de l'apprenant ce qu'elle fait.",
        exceeds: "Note aussi un bug corrigé et comment."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui créent seuls un deuxième programme dans les 30 jours (sondage de suivi)",
      "Les apprenants qui rejoignent un club, un cours ou un stage de programmation dans les 90 jours",
      "Les apprenants qui commencent un autre cours Koach Learn de programmation ou d'IA dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un navigateur web et Internet (à l'école, à la bibliothèque ou à la maison)",
      "Google Colab, avec un compte Google que l'apprenant a le droit d'utiliser",
      "Un assistant d'IA gratuit que l'apprenant a le droit d'utiliser",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Vérifiez avant le cours l'âge minimum de Colab et des outils d'IA et les réglages des comptes scolaires ; préparez un compte de démonstration pour les apprenants qui ne peuvent pas s'inscrire.",
      "Programmez en direct au vidéoprojecteur pendant les leçons 2 et 3, pour que les débutants puissent reproduire chaque étape.",
      "Glissez exprès un deux-points ou un guillemet manquant, pour que chaque apprenant s'entraîne à lire un message d'erreur.",
      "Rappelez aux apprenants de ne jamais coller d'informations privées dans les outils d'IA ; le code d'un quiz n'en a pas besoin.",
      "Organisez un échange de jeux de quiz où les apprenants jouent aux jeux des autres, puis évaluez-les avec la grille."
    ]
  }
};
