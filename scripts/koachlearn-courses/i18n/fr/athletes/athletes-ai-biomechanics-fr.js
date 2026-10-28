"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-biomechanics.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-biomechanics-fr",
  lang: "fr",
  translationOf: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "Biomécanique et IA",
  skills: "Expliquer les termes de base de la biomécanique, Filmer un mouvement pour l'analyser, Découper un geste en phases, Utiliser l'estimation de posture et la lecture image par image, Comparer la technique avant et après avec votre entraîneur",
  outcome: "filmer un mouvement sportif sous les bons angles, le découper en phases, utiliser la lecture image par image (et, si vous le souhaitez, un outil gratuit d'estimation de posture) pour décrire un point technique, et créer une comparaison avant-après à examiner avec votre entraîneur.",
  about: [
    "La biomécanique est l'étude de la façon dont le corps bouge. Ce cours s'adresse aux athlètes et aux entraîneurs qui veulent mieux comprendre la technique avec la caméra d'un téléphone et des outils d'IA, dans des sports comme le sprint, le saut, le lancer, le tir, la frappe et le coup de pied.",
    "Vous apprendrez quelques termes clés, filmerez correctement un mouvement, le découperez en phases et utiliserez le ralenti, la lecture image par image et des outils d'IA de posture pour voir ce qui se passe. Vous comparerez ensuite l'avant et l'après avec votre entraîneur.",
    "C'est une formation générale. Les changements de technique doivent venir de votre entraîneur, et les questions de douleur, de blessure ou de reprise du sport vont à votre soigneur sportif, à un kinésithérapeute ou à un médecin. Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant », une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez un mouvement de votre sport. Filmez-le de côté et de face, découpez-le en phases, utilisez la lecture image par image pour décrire un point technique avec des captures d'écran, convenez d'une consigne avec votre entraîneur, entraînez-vous, et filmez de nouveau deux semaines plus tard pour une comparaison avant-après côte à côte.",
  chapters: [
    {
      name: "Chapitre 1 : Voir le mouvement",
      lessons: [
        {
          title: "La biomécanique en mots simples",
          minutes: 5,
          goal: "Expliquer cinq termes de base de la biomécanique avec un exemple de votre sport.",
          text: [
            "La biomécanique étudie comment les forces et les positions du corps créent le mouvement. Les entraîneurs l'utilisent pour rendre la technique plus efficace et réduire le risque de blessure.",
            "Cinq mots utiles : l'angle articulaire (l'angle au genou, à la hanche ou au coude). L'amplitude de mouvement (jusqu'où une articulation bouge). Le centre de masse (le point d'équilibre de votre corps). La chaîne cinétique (comment la force passe du sol aux jambes, aux hanches, au tronc et aux bras). La force de réaction du sol (la poussée que le sol vous renvoie quand vous poussez dessus).",
            "Exemple : dans un tir en suspension, la force part des jambes, passe par les hanches et le tronc et se termine par le bras et le poignet. C'est la chaîne cinétique. Un assistant IA peut expliquer n'importe quel terme avec un exemple de votre sport."
          ],
          words: [["Biomécanique", "l'étude de la façon dont les forces et les positions du corps créent le mouvement."], ["Chaîne cinétique", "la façon dont la force passe d'une partie du corps à la suivante, comme des jambes aux hanches puis aux bras."], ["Centre de masse", "le point d'équilibre de votre corps."]],
          slides: [
            { title: "La biomécanique", bullets: ["Comment forces et positions créent le mouvement", "Une technique plus efficace", "Moins de risque de blessure"] },
            { title: "Cinq mots clés", bullets: ["Angle articulaire, amplitude de mouvement", "Centre de masse", "Chaîne cinétique, force de réaction du sol"] },
            { title: "Exemple du tir en suspension", bullets: ["Jambes -> hanches -> tronc -> bras -> poignet", "C'est la chaîne cinétique"] }
          ],
          tryIt: "Choisissez un mouvement de votre sport. Demandez à un assistant IA d'y expliquer la chaîne cinétique en mots simples. Réécrivez-la avec vos propres mots en trois phrases.",
          youCanNow: "expliquer les termes de base de la biomécanique avec un exemple de votre sport."
        },
        {
          title: "Filmer un mouvement pour l'analyser",
          minutes: 5,
          goal: "Filmer un mouvement sous les bons angles pour pouvoir l'analyser.",
          text: [
            "L'analyse demande une bonne vidéo. Filmez de côté (pour voir les angles articulaires d'avant en arrière) et de face ou de dos (pour voir les genoux qui rentrent, les hanches qui tombent ou les bras qui se croisent). Gardez la caméra à peu près à hauteur de hanche, stable, et assez loin pour voir tout le corps.",
            "Utilisez le mode ralenti de votre téléphone et une bonne lumière. Portez des vêtements qui montrent la forme du corps, et mettez des repères de ruban adhésif au sol pour filmer depuis le même endroit la prochaine fois.",
            "Filmez plusieurs répétitions, pas une seule, et filmez quand vous êtes échauffé. Demandez la permission avant de filmer d'autres personnes, et suivez les règles de votre équipe."
          ],
          steps: ["Placez le téléphone à hauteur de hanche sur un trépied ou un support.", "Filmez de côté.", "Filmez de face ou de dos.", "Utilisez le ralenti et une bonne lumière.", "Marquez l'emplacement de la caméra et de l'athlète pour la prochaine fois.", "Filmez trois à cinq répétitions."],
          words: [["Vue sagittale", "une vue de côté, qui montre le mouvement d'avant en arrière."], ["Vue frontale", "une vue de face ou de dos, qui montre le mouvement de gauche à droite."]],
          slides: [
            { title: "Deux angles", bullets: ["De côté : les angles articulaires", "De face ou de dos : genoux, hanches, bras"] },
            { title: "Installation de la caméra", bullets: ["Hauteur de hanche, stable", "Tout le corps dans l'image", "Ralenti, bonne lumière"] },
            { title: "Reproductible", bullets: ["Marquez caméra et athlète", "Trois à cinq répétitions échauffé"] }
          ],
          tryIt: "Filmez un mouvement de côté et de face, trois répétitions chacun, avec le téléphone à hauteur de hanche et le ralenti activé. Marquez les emplacements.",
          youCanNow: "filmer correctement un mouvement pour une analyse biomécanique."
        },
        {
          title: "Découper un geste en phases",
          minutes: 5,
          goal: "Découper votre mouvement en phases et trouver les positions clés.",
          text: [
            "La plupart des gestes sportifs ont des phases. Un lancer : préparation, foulée, armé du bras, accélération, lâcher, accompagnement. Un départ de sprint : position prêt, poussée, phase d'accélération, transition. Un saut : course d'élan, pose du pied d'appel, impulsion, envol, réception.",
            "Pour chaque phase, il y a des positions clés que les entraîneurs regardent : où le pied se pose, l'angle du genou à l'impulsion, l'angle du tronc au lâcher. Votre entraîneur peut vous dire lesquelles comptent le plus pour vous.",
            "Utilisez la lecture image par image dans l'application vidéo de votre téléphone ou un outil vidéo gratuit. Faites pause sur l'image clé de chaque phase et prenez une capture d'écran. Demandez à un assistant IA de lister les phases habituelles de votre geste, puis confirmez-les avec votre entraîneur."
          ],
          steps: ["Demandez à l'IA les phases habituelles de votre geste.", "Confirmez les phases avec votre entraîneur.", "Parcourez votre vidéo image par image.", "Faites une capture de l'image clé de chaque phase.", "Légendez chaque capture."],
          words: [["Phase", "une partie d'un mouvement, comme la préparation ou le lâcher."], ["Position clé", "une position importante du corps à un moment donné."], ["Image par image", "avancer dans une vidéo une image à la fois."]],
          slides: [
            { title: "Les gestes ont des phases", bullets: ["Lancer : de la préparation à l'accompagnement", "Départ de sprint : de la position prêt à la transition", "Saut : de l'élan à la réception"] },
            { title: "Positions clés", bullets: ["La pose du pied", "L'angle du genou à l'impulsion", "L'angle du tronc au lâcher"] },
            { title: "Image par image", bullets: ["Pause sur chaque image clé", "Capture et légende", "Confirmez les phases avec votre entraîneur"] }
          ],
          tryIt: "Découpez votre mouvement filmé en phases. Faites une capture et légendez une image clé pour chaque phase.",
          youCanNow: "découper un geste en phases et capturer ses positions clés."
        }
      ],
      check: {
        title: "Vérification des connaissances 1 : Voir le mouvement",
        questions: [
          { q: "Qu'est-ce que la chaîne cinétique ?", options: ["Une pièce de vélo", "Une machine de musculation", "La façon dont la force passe d'une partie du corps à la suivante", "Un type de chaussure"], answer: 2, why: "La force va des jambes aux hanches, au tronc puis aux bras." },
          { q: "Quelle vue montre le mieux les genoux qui rentrent vers l'intérieur ?", options: ["La vue de face ou de dos", "Seulement la vue de côté", "Seulement la vue du dessus", "Un gros plan du visage"], answer: 0, why: "Le mouvement de gauche à droite se voit mieux de face ou de dos." },
          { q: "À quelle hauteur doit être la caméra ?", options: ["Au sol", "Au-dessus de votre tête", "N'importe où", "À peu près à hauteur de hanche"], answer: 3, why: "La hauteur de hanche réduit la déformation du corps." },
          { q: "Pourquoi filmer plusieurs répétitions ?", options: ["Pour remplir le stockage", "Une seule répétition n'est peut-être pas représentative", "C'est une règle", "Pour rallonger la vidéo"], answer: 1, why: "Plusieurs répétitions montrent votre vrai schéma." },
          { q: "Qui doit vous confirmer les phases et les positions clés ?", options: ["Une vidéo au hasard", "Votre entraîneur", "Un fan", "Personne"], answer: 1, why: "Votre entraîneur sait ce qui compte pour votre technique." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les outils d'IA et le vrai changement",
      lessons: [
        {
          title: "L'estimation de posture : l'IA qui trouve vos articulations",
          minutes: 5,
          goal: "Expliquer ce que fait l'estimation de posture et ses limites.",
          text: [
            "L'estimation de posture est une IA qui trouve des points du corps, comme les épaules, les coudes, les hanches, les genoux et les chevilles, sur une photo ou une vidéo, et les relie en un bonhomme bâton. Certaines applications estiment ensuite les angles articulaires.",
            "Ces outils sont utiles pour voir les positions et comparer les répétitions, mais ils se trompent : vêtements amples, mouvement rapide, flou, mauvaise lumière, autres personnes dans l'image ou une partie du corps cachée derrière une autre peuvent les perturber. Les angles tirés d'une vidéo 2D de téléphone sont des estimations, pas des mesures de laboratoire.",
            "Si vous essayez une application de posture, lisez sa politique de confidentialité, car une vidéo de votre corps est une donnée personnelle. Pour les mineurs, un parent doit donner son accord. Vérifiez toujours le bonhomme bâton avec la vraie vidéo avant de faire confiance à un chiffre."
          ],
          steps: ["Choisissez une séquence claire et bien éclairée.", "Si vous utilisez une application de posture, lisez d'abord sa politique de confidentialité.", "Lancez la séquence et regardez le bonhomme bâton.", "Vérifiez qu'il correspond au vrai corps sur chaque image clé.", "Traitez les angles comme des estimations."],
          words: [["Estimation de posture", "une IA qui trouve les points du corps dans une vidéo et dessine un bonhomme bâton."], ["Vidéo 2D", "une vidéo plate prise par une seule caméra ; elle ne mesure pas parfaitement la profondeur."]],
          slides: [
            { title: "L'estimation de posture", bullets: ["L'IA trouve épaules, hanches, genoux, chevilles", "Elle dessine un bonhomme bâton", "Certaines applis estiment les angles"] },
            { title: "Limites", bullets: ["Flou, vêtements amples, mauvaise lumière", "Parties du corps cachées", "Les angles 2D sont des estimations"] },
            { title: "Utilisez-la prudemment", bullets: ["Lisez la politique de confidentialité", "Mineurs : accord d'un parent", "Comparez avec la vraie vidéo"] }
          ],
          tryIt: "Demandez à un assistant IA d'expliquer comment fonctionne l'estimation de posture et trois façons dont elle peut se tromper. Regardez ensuite vos images clés et notez où un outil de posture pourrait avoir du mal.",
          youCanNow: "expliquer ce que fait l'estimation de posture et pourquoi ses chiffres doivent être vérifiés."
        },
        {
          title: "Décrire un point technique",
          minutes: 5,
          goal: "Décrire clairement un point technique à l'aide de vos captures d'écran.",
          text: [
            "Choisissez une seule chose à regarder, pas dix. Par exemple : « À l'impulsion, mon genou gauche plie beaucoup moins que le droit. » ou « Au lâcher, mon coude est sous mon épaule. »",
            "Décrivez-la avec des preuves : la phase, la capture d'écran et ce que vous voyez par rapport à une autre répétition ou à un modèle donné par votre entraîneur. Un assistant IA peut vous aider à écrire une description claire et neutre : « Aide-moi à décrire ce que je vois sur ces deux images clés avec des mots simples et neutres. » Ne lui demandez pas de diagnostic ni de solution à une douleur.",
            "Apportez-la à votre entraîneur sous forme de question : « J'ai remarqué ceci. Est-ce quelque chose sur quoi nous devrions travailler ? Quelle consigne devrais-je utiliser ? »"
          ],
          steps: ["Choisissez un point technique.", "Prenez les captures qui le montrent.", "Écrivez une description neutre avec la phase.", "Demandez à votre entraîneur si c'est important et quelle consigne utiliser."],
          words: [["Consigne", "une instruction courte qui aide à changer un mouvement, comme « poitrine haute »."], ["Description neutre", "décrire ce que vous voyez sans juger ni diagnostiquer."]],
          slides: [
            { title: "Un point, pas dix", bullets: ["Exemple : moins de flexion du genou gauche à l'impulsion"] },
            { title: "Montrez des preuves", bullets: ["La phase et la capture", "Comparée à une autre répétition ou un modèle", "Des mots neutres ; pas de diagnostic"] },
            { title: "Demandez à votre entraîneur", bullets: ["« Devrions-nous travailler là-dessus ? »", "« Quelle consigne utiliser ? »"] }
          ],
          tryIt: "Écrivez un point technique en deux phrases neutres avec la phase et les captures. Utilisez l'IA pour le rendre plus clair, puis montrez-le à votre entraîneur.",
          youCanNow: "décrire un point technique avec des preuves et en faire une question pour votre entraîneur."
        },
        {
          title: "Avant et après : est-ce que ça a changé ?",
          minutes: 5,
          goal: "Faire une comparaison côte à côte pour voir si la technique a changé.",
          text: [
            "Après avoir travaillé la consigne de votre entraîneur pendant quelques semaines, filmez de nouveau depuis les mêmes emplacements marqués, avec les mêmes angles et la même lumière. Placez les images clés d'avant et d'après côte à côte dans une diapositive ou une mise en page Canva.",
            "Regardez la même position clé sur chacune. Le changement est-il là ? Est-il présent à chaque répétition ou seulement à certaines ? Le changement demande beaucoup de répétitions ; un petit progrès reste un progrès.",
            "Si un changement provoque une douleur, ou si un mouvement fait mal, arrêtez et prévenez votre soigneur sportif, votre kinésithérapeute ou votre médecin. Le travail technique ne doit jamais forcer à travers la douleur."
          ],
          steps: ["Filmez de nouveau depuis les mêmes emplacements et sous les mêmes angles.", "Choisissez les mêmes images clés.", "Placez l'avant et l'après côte à côte.", "Notez ce qui a changé et sur combien de répétitions.", "Faites le point avec votre entraîneur ; signalez toute douleur."],
          words: [["Côte à côte", "deux images ou vidéos placées l'une à côté de l'autre pour les comparer."], ["Kinésithérapeute", "un professionnel diplômé qui aide les gens à retrouver le mouvement après une blessure."]],
          slides: [
            { title: "Même installation", bullets: ["Mêmes emplacements marqués", "Mêmes angles et même lumière"] },
            { title: "Comparez", bullets: ["Même image clé, côte à côte", "À chaque répétition ou seulement certaines ?", "Un petit progrès compte"] },
            { title: "Sécurité", bullets: ["Douleur ? Arrêtez", "Prévenez votre soigneur, kiné ou médecin"] }
          ],
          tryIt: "Tâche finale : travaillez la consigne de votre entraîneur, filmez de nouveau dans deux semaines depuis les mêmes emplacements, et créez une comparaison avant-après côte à côte à examiner avec votre entraîneur.",
          youCanNow: "comparer équitablement la technique avant et après et savoir quand arrêter en cas de douleur."
        }
      ],
      check: {
        title: "Vérification des connaissances 2 : Les outils d'IA et le vrai changement",
        questions: [
          { q: "Que fait l'estimation de posture ?", options: ["Elle diagnostique les blessures", "Elle écrit des programmes d'entraînement", "Elle compte les abonnés", "Elle trouve les points du corps dans une vidéo et dessine un bonhomme bâton"], answer: 3, why: "Elle localise les articulations sur les images." },
          { q: "Qu'est-ce qui peut tromper un outil de posture ?", options: ["Le flou et les vêtements amples", "Une bonne lumière", "Des vêtements ajustés", "Un fond dégagé"], answer: 0, why: "Le flou et les vêtements amples cachent la position des articulations." },
          { q: "Les angles tirés d'une seule vidéo de téléphone sont :", options: ["Parfaits", "Des diagnostics médicaux", "Des estimations, pas des mesures de laboratoire", "Inutiles"], answer: 2, why: "Une vidéo 2D ne mesure pas parfaitement la profondeur." },
          { q: "Que devez-vous demander à l'IA pour décrire votre technique ?", options: ["De diagnostiquer votre douleur au genou", "De prescrire un traitement", "De contredire votre entraîneur", "De l'aide pour décrire ce que vous voyez avec des mots neutres"], answer: 3, why: "Le diagnostic et le traitement reviennent aux professionnels." },
          { q: "Une nouvelle technique provoque une douleur. Vous :", options: ["Forcez quand même", "Arrêtez et prévenez votre soigneur, kiné ou médecin", "L'ignorez", "Demandez des antidouleurs à l'IA"], answer: 1, why: "Ne forcez jamais à travers la douleur." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : Biomécanique et IA",
    questions: [
      { q: "La biomécanique étudie :", options: ["Les finances de l'équipe", "Les réseaux sociaux", "Comment les forces et les positions du corps créent le mouvement", "La conception des stades"], answer: 2, why: "C'est la science du mouvement." },
      { q: "L'amplitude de mouvement, c'est :", options: ["Jusqu'où une articulation bouge", "La distance que vous courez", "Un tableau d'affichage", "Un type d'exercice"], answer: 0, why: "Elle décrit le mouvement d'une articulation." },
      { q: "Le centre de masse, c'est :", options: ["Le point d'équilibre de votre corps", "Le milieu du terrain", "Une salle de sport", "Un muscle"], answer: 0, why: "C'est là où votre poids s'équilibre." },
      { q: "La force de réaction du sol, c'est :", options: ["Le vent", "Une pénalité", "La poussée que le sol vous renvoie", "Une règle d'équipe"], answer: 2, why: "Vous poussez le sol, il vous repousse." },
      { q: "Dans un tir en suspension, la force part :", options: ["Du poignet", "Des jambes", "Des yeux", "Du ballon"], answer: 1, why: "La chaîne cinétique part du sol et monte." },
      { q: "Une vue de côté montre :", options: ["Seulement le visage", "Rien d'utile", "Seulement le public", "Le mouvement d'avant en arrière et les angles articulaires"], answer: 3, why: "C'est la vue sagittale." },
      { q: "Pourquoi marquer l'emplacement de la caméra au sol ?", options: ["Pour décorer", "C'est une règle", "Pour filmer de la même façon la prochaine fois", "Pour embrouiller les autres"], answer: 2, why: "La même installation permet des comparaisons équitables." },
      { q: "Le ralenti vous aide à :", options: ["Économiser la batterie", "Cacher les erreurs", "Ajouter de la musique", "Voir clairement les mouvements rapides"], answer: 3, why: "Il montre les détails." },
      { q: "Avant de filmer des coéquipiers, vous devez :", options: ["Demander la permission", "Publier d'abord", "Filmer en secret", "Vous en passer"], answer: 0, why: "Respectez la vie privée et les règles de l'équipe." },
      { q: "Une phase, c'est :", options: ["Une période de match", "Une partie d'un mouvement", "Une équipe", "Un téléphone"], answer: 1, why: "Les gestes se découpent en phases." },
      { q: "Laquelle est une phase d'un lancer ?", options: ["La mi-temps", "Le temps mort", "Le lâcher", "Le tour de retour au calme"], answer: 2, why: "Le lâcher est une phase du lancer." },
      { q: "La lecture image par image, c'est :", options: ["Avancer dans une vidéo une image à la fois", "Regarder en vitesse double", "Sauter à la fin", "Supprimer des images"], answer: 0, why: "Elle permet de trouver les positions clés." },
      { q: "L'IA liste les phases de votre geste. Ensuite, vous :", options: ["Lui faites entièrement confiance", "Les publiez", "Ignorez votre entraîneur", "Les confirmez avec votre entraîneur"], answer: 3, why: "Les entraîneurs confirment ce qui compte." },
      { q: "L'estimation de posture dessine :", options: ["Un logo", "Un bonhomme bâton sur votre corps", "Une carte", "Un graphique d'abonnés"], answer: 1, why: "Elle relie les points du corps détectés." },
      { q: "Avant d'utiliser une application de posture, vérifiez :", options: ["Sa couleur", "Sa politique de confidentialité", "Son logo", "Rien"], answer: 1, why: "Une vidéo de votre corps est une donnée personnelle." },
      { q: "Sur combien de points techniques travailler à la fois ?", options: ["Un", "Dix", "Tous", "Aucun"], answer: 0, why: "Un seul objectif est plus facile à changer." },
      { q: "Une consigne, c'est :", options: ["Une instruction courte pour changer un mouvement", "Une queue de billard", "Un score", "Une application vidéo"], answer: 0, why: "Les consignes guident les changements de technique." },
      { q: "Une description neutre :", options: ["Juge durement", "Diagnostique les blessures", "Décrit ce que vous voyez sans diagnostiquer", "Ignore les preuves"], answer: 2, why: "Tenez-vous-en à ce que vous voyez." },
      { q: "Les vidéos avant-après doivent utiliser :", options: ["Des angles différents à chaque fois", "N'importe quelle installation", "Aucune vidéo", "Les mêmes emplacements, angles et lumière"], answer: 3, why: "La même installation permet des comparaisons équitables." },
      { q: "Qui aide les gens à retrouver le mouvement après une blessure ?", options: ["Un fan", "Un kinésithérapeute", "Une application d'IA", "Un arbitre"], answer: 1, why: "Les kinésithérapeutes sont diplômés pour cela." }
    ]
  }
};
