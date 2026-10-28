"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-marketing-outreach.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-marketing-outreach-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-marketing-outreach",
  category: "Non Profits",
  name: "L'IA pour la communication et l'action de proximité",
  skills: "Définir votre public et votre message, Écrire des publications pour les réseaux sociaux avec l'IA, Rédiger des bulletins, Rendre la communication claire et accessible, Planifier un mois de communication",
  outcome: "utiliser l'IA pour planifier et rédiger un mois de communication pour un programme associatif : un message clé pour un public, quatre publications pour les réseaux sociaux, un court article de bulletin et une affiche en langage simple, le tout vérifié, accessible et avec la voix de votre organisation.",
  about: [
    "Ce cours s'adresse aux salariés et bénévoles d'associations et d'organisations religieuses qui s'occupent des réseaux sociaux, des bulletins, des affiches et des annonces à la communauté, souvent en plus de tout le reste.",
    "Vous apprendrez à nommer votre public et votre message, puis à utiliser l'IA pour rédiger vite des publications, des bulletins et des affiches, à les rendre claires et accessibles à tous dans votre communauté, et à planifier un mois de communication.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche pratique qui devient une partie de votre plan de communication. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Faites un plan de communication d'un mois pour un vrai programme ou événement. Incluez un public et un message clé, quatre publications pour les réseaux sociaux avec descriptions d'images, un article de bulletin de 200 mots et le texte d'une affiche en langage simple, le tout rédigé avec l'IA, vérifié pour les faits et la vie privée, et retouché pour ressembler à votre organisation. Placez-les sur un calendrier simple de quatre semaines.",
  chapters: [
    {
      name: "Chapitre 1 : Message et canaux",
      lessons: [
        {
          title: "Connaître votre public et votre message",
          minutes: 5,
          goal: "Écrire un message clé clair pour un public.",
          text: [
            "Une bonne communication parle à un groupe à la fois. Les bénévoles, les donateurs, les familles que vous servez, les membres de la paroisse et les commerces du quartier ne s'intéressent pas aux mêmes choses.",
            "Un message clé dit, en une ou deux phrases, ce que vous voulez que ce public sache et fasse. Exemple pour des parents : \"Le soutien scolaire gratuit commence le 8 septembre au centre communautaire. Inscrivez votre enfant avant le 1er septembre pour lui garder une place.\"",
            "L'IA peut vous aider à l'affiner. Demandez : \"Voici notre programme : [détails publics]. Écris trois versions d'un message d'une phrase pour [public]. Chacune doit dire ce que c'est, pourquoi cela compte pour eux et quoi faire ensuite.\""
          ],
          steps: ["Choisissez un programme et un public.", "Écrivez ce que vous voulez qu'ils sachent et fassent.", "Demandez à l'IA trois versions d'une phrase.", "Choisissez la plus claire et retouchez-la."],
          words: [["Public", "le groupe de personnes que vous cherchez à toucher."], ["Message clé", "les une ou deux phrases que vous voulez le plus que votre public retienne et mette en pratique."]],
          slides: [
            { title: "Un public à la fois", bullets: ["Bénévoles, donateurs, familles, membres", "Chacun s'intéresse à des choses différentes"] },
            { title: "Un message clé dit", bullets: ["Ce que c'est", "Pourquoi cela compte pour eux", "Quoi faire ensuite"] },
            { title: "Affinez-le avec l'IA", bullets: ["Demandez trois versions d'une phrase", "Choisissez la plus claire", "Retouchez-la pour qu'elle vous ressemble"] }
          ],
          tryIt: "Choisissez un programme et un public. Utilisez l'IA pour obtenir trois versions d'un message clé, puis écrivez votre version finale en haut d'une page intitulée \"Plan de communication\".",
          youCanNow: "écrire un message clé clair pour un public."
        },
        {
          title: "Écrire des publications pour les réseaux sociaux avec l'IA",
          minutes: 5,
          goal: "Rédiger quatre publications pour un programme avec l'IA.",
          text: [
            "Les publications marchent mieux quand elles sont courtes, montrent un vrai moment et se terminent par une seule action claire. Chaque plateforme a sa longueur : une publication Facebook peut être plus longue, une légende Instagram accompagne une photo, et une publication sur une plateforme de messages courts doit être brève.",
            "Demandez : \"À partir de ce message clé : [message], écris quatre publications pour [plateforme] sur quatre semaines : une annonce, une publication en coulisses, un remerciement à un bénévole ou un participant, et un dernier rappel. Moins de 60 mots chacune, ton amical, avec un appel à l'action.\"",
            "Utilisez vos propres photos avec autorisation. Ne publiez jamais de photos d'enfants ou de bénéficiaires sans consentement écrit, et ne partagez jamais l'histoire de quelqu'un avec des détails qui pourraient l'identifier sans son accord."
          ],
          steps: ["Donnez à l'IA votre message clé et la plateforme.", "Demandez quatre types de publication sur quatre semaines.", "Retouchez chacune pour qu'elle ressemble à votre organisation.", "Choisissez des photos que vous avez le droit d'utiliser."],
          words: [["Plateforme", "un réseau social, comme Facebook ou Instagram."], ["Légende", "le texte qui accompagne une photo ou une vidéo."], ["Consentement", "l'accord d'une personne, de préférence écrit, pour être montrée ou citée."]],
          slides: [
            { title: "Des publications qui marchent", bullets: ["Courtes", "Un vrai moment", "Une seule action claire"] },
            { title: "Quatre types de publication", bullets: ["Annonce", "En coulisses", "Remerciement", "Dernier rappel"] },
            { title: "Photos et histoires", bullets: ["Vos propres photos, avec autorisation", "Consentement écrit pour les enfants et les bénéficiaires"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger quatre publications pour une plateforme à partir de votre message clé. Retouchez-les et ajoutez-les à votre plan de communication.",
          youCanNow: "rédiger une série de publications pour les réseaux sociaux avec l'IA."
        },
        {
          title: "Rédiger un article de bulletin",
          minutes: 5,
          goal: "Transformer des notes sur un programme en court article de bulletin avec l'IA.",
          text: [
            "Les bulletins gardent les donateurs, les bénévoles et les membres proches de vous. Un court article raconte une seule histoire : ce qui s'est passé, qui cela a aidé (sans détails privés), ce que cela signifie pour la mission, et ce que les lecteurs peuvent faire ensuite.",
            "Donnez vos notes à l'IA : \"Transforme ces notes en article de bulletin de 200 mots pour nos soutiens. Un titre amical, une courte histoire, un chiffre vrai, et termine par comment aider : [notes].\"",
            "Vérifiez le chiffre et chaque nom et date. N'ajoutez une citation que si une vraie personne l'a dite et a accepté d'être citée. Si vous envoyez des bulletins par e-mail, ajoutez un moyen clair de se désinscrire et suivez les règles de votre outil d'e-mail."
          ],
          steps: ["Écrivez des notes brutes sur un moment récent.", "Demandez à l'IA un article de 200 mots avec un titre, une histoire, un chiffre et comment aider.", "Vérifiez chaque fait et chaque citation.", "Ajoutez-le à votre bulletin avec une photo que vous pouvez utiliser."],
          words: [["Bulletin", "une nouvelle régulière envoyée aux soutiens par e-mail ou sur papier."], ["Désinscription", "un lien qui permet à quelqu'un de ne plus recevoir vos e-mails."]],
          slides: [
            { title: "Une histoire par article", bullets: ["Ce qui s'est passé", "Qui cela a aidé, sans détails privés", "Ce que les lecteurs peuvent faire"] },
            { title: "La demande", bullets: ["200 mots, titre amical", "Une histoire, un chiffre vrai", "Terminer par comment aider"] },
            { title: "Avant d'envoyer", bullets: ["Vérifiez les faits et les citations", "Seulement de vraies citations, avec accord", "Ajoutez un lien de désinscription"] }
          ],
          tryIt: "Écrivez cinq lignes de notes sur un moment récent d'un programme. Utilisez l'IA pour en faire un article de bulletin de 200 mots. Vérifiez chaque fait.",
          youCanNow: "transformer des notes sur un programme en article de bulletin vérifié."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Message et canaux",
        questions: [
          { q: "Qu'est-ce qu'un message clé ?", options: ["Une ou deux phrases que vous voulez qu'un public retienne et mette en pratique", "Votre rapport annuel complet", "Un mot de passe", "Une liste de donateurs"], answer: 0, why: "Un message clé est court et mène à l'action." },
          { q: "Quel est le meilleur message clé pour des parents ?", options: ["\"Nous faisons beaucoup de choses.\"", "\"Le soutien scolaire gratuit commence le 8 septembre au centre communautaire. Inscrivez-vous avant le 1er septembre.\"", "\"En savoir plus.\"", "\"Soutenez-nous.\""], answer: 1, why: "Il dit quoi, pourquoi et quoi faire ensuite." },
          { q: "Vous voulez publier une photo d'enfants de votre programme. Il vous faut :", options: ["Rien", "Un filtre", "Le consentement écrit d'un parent ou tuteur", "Une légende écrite par l'IA"], answer: 2, why: "Les photos d'enfants demandent une autorisation." },
          { q: "Une citation dans un article de bulletin doit venir :", options: ["De l'IA", "D'un bénévole inventé", "D'une célébrité à qui vous n'avez jamais parlé", "D'une vraie personne qui a accepté d'être citée"], answer: 3, why: "Les citations inventées sont malhonnêtes." },
          { q: "Pourquoi mettre un lien de désinscription dans les bulletins par e-mail ?", options: ["Pour que les gens puissent arrêter de recevoir les e-mails", "Pour obtenir plus de dons", "C'est décoratif", "Pour partager des données"], answer: 0, why: "Les gens doivent pouvoir se désinscrire." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Toucher tout le monde",
      lessons: [
        {
          title: "Langage simple et autres langues",
          minutes: 5,
          goal: "Utiliser l'IA pour réécrire la communication en langage simple et préparer une traduction à faire relire.",
          text: [
            "Beaucoup de personnes de votre communauté lisent dans une deuxième langue, lisent avec difficulté, ou sont pressées et survolent. Le langage simple aide tout le monde : phrases courtes, mots courants, le plus important en premier.",
            "Demandez : \"Réécris ceci avec des mots simples, pour un niveau de fin d'école primaire. Phrases courtes. Mets d'abord la date, le lieu et comment s'inscrire.\" Puis : \"Traduis ceci en anglais pour les familles de notre communauté.\"",
            "Les traductions de l'IA peuvent être fausses ou sonner bizarrement. Faites toujours relire une traduction par une personne de votre communauté qui parle couramment la langue avant de la partager."
          ],
          steps: ["Demandez à l'IA de réécrire votre texte pour un niveau de fin d'école primaire.", "Mettez la date, le lieu et l'action en premier.", "Demandez une traduction dans une langue de votre communauté.", "Faites-la relire par une personne qui parle couramment la langue."],
          words: [["Langage simple", "une écriture que l'on comprend dès la première lecture."], ["Niveau de lecture", "la facilité de lecture d'un texte ; un niveau scolaire plus bas est plus facile."]],
          slides: [
            { title: "Le langage simple aide tout le monde", bullets: ["Phrases courtes, mots courants", "Le plus important en premier"] },
            { title: "Demandez à l'IA", bullets: ["\"Réécris pour un niveau de fin d'école primaire\"", "\"Traduis ceci en anglais\""] },
            { title: "Vérifiez les traductions", bullets: ["L'IA peut se tromper", "Une personne de la communauté qui parle la langue relit"] }
          ],
          tryIt: "Prenez votre message clé et une publication. Demandez à l'IA de les réécrire en langage simple et de les traduire dans une langue de votre communauté. Notez qui pourrait vérifier la traduction.",
          youCanNow: "rendre votre communication simple et préparer des traductions à faire vérifier par une personne qui parle couramment la langue."
        },
        {
          title: "Rendre la communication accessible",
          minutes: 4,
          goal: "Écrire des descriptions d'images et rendre les publications et affiches plus faciles à utiliser pour tous.",
          text: [
            "Une communication accessible fonctionne pour les personnes aveugles ou malvoyantes, sourdes, ou qui utilisent un lecteur d'écran. Le texte alternatif est une courte description d'une image qu'un lecteur d'écran lit à voix haute.",
            "L'IA peut rédiger le texte alternatif : \"Écris un texte alternatif de moins de 125 caractères pour une photo de bénévoles qui trient des conserves lors d'une collecte alimentaire.\" Vérifiez qu'il décrit ce qui est vraiment sur la photo.",
            "Autres gestes simples : sous-titrez les vidéos, utilisez un fort contraste de couleurs sur les affiches, ne mettez pas les mots importants seulement dans une image, et écrivez les mots-clics avec des majuscules (#NourrirNotreVille) pour que les lecteurs d'écran les prononcent correctement."
          ],
          steps: ["Écrivez un texte alternatif pour chaque image (l'IA peut le rédiger).", "Sous-titrez les vidéos.", "Utilisez un fort contraste sur les affiches.", "Gardez les détails importants dans le texte, pas seulement dans l'image.", "Mettez une majuscule à chaque mot des mots-clics."],
          words: [["Texte alternatif", "une courte description écrite d'une image, lue à voix haute par les lecteurs d'écran."], ["Lecteur d'écran", "un logiciel qui lit à voix haute le texte de l'écran pour les personnes aveugles ou malvoyantes."], ["Contraste", "la différence entre la couleur du texte et celle du fond."]],
          slides: [
            { title: "Une communication accessible", bullets: ["Pour les personnes aveugles, malvoyantes ou sourdes", "Le texte alternatif décrit les images"] },
            { title: "L'IA rédige le texte alternatif", bullets: ["Moins de 125 caractères", "Vérifiez qu'il correspond à la photo"] },
            { title: "Gestes simples", bullets: ["Sous-titres sur les vidéos", "Fort contraste", "Détails importants dans le texte, pas seulement l'image", "#MajusculesDansLesMotsClics"] }
          ],
          tryIt: "Écrivez le texte alternatif des photos de vos quatre publications : l'IA rédige, vous vérifiez. Corrigez les mots-clics pour que chaque mot commence par une majuscule.",
          youCanNow: "rendre les publications et les affiches accessibles avec du texte alternatif, des sous-titres et une mise en page claire."
        },
        {
          title: "Planifier un mois de communication",
          minutes: 5,
          goal: "Placer vos éléments de communication sur un calendrier de quatre semaines.",
          text: [
            "Un calendrier simple garde une communication régulière. Listez quatre semaines. Pour chaque semaine, écrivez ce qui sort, sur quel canal, et qui le publie.",
            "L'IA peut proposer un planning : \"Voici mes éléments : [liste]. Notre événement a lieu le [date]. Fais un calendrier de communication de quatre semaines sous forme de tableau : semaine, canal, élément, qui publie.\" Vérifiez les dates avec votre vrai agenda.",
            "Ensuite, regardez ce qui a marché : inscriptions, commentaires, partages, réponses. Continuez ce qui a fait venir les gens."
          ],
          steps: ["Listez vos éléments : publications, bulletin, affiche.", "Demandez à l'IA un tableau de calendrier sur quatre semaines.", "Vérifiez les dates avec votre vrai agenda.", "Indiquez qui publie chaque élément.", "Après le mois, notez ce qui a fait venir les gens."],
          words: [["Calendrier éditorial", "un planning de ce que vous allez publier ou envoyer, et quand."], ["Canal", "un moyen de toucher les gens : réseaux sociaux, e-mail, affiches, annonces."]],
          slides: [
            { title: "Un calendrier simple", bullets: ["Quatre semaines", "Ce qui sort, où, et qui publie"] },
            { title: "Demandez un tableau à l'IA", bullets: ["Semaine, canal, élément, qui publie", "Vérifiez vous-même les dates"] },
            { title: "Apprenez des résultats", bullets: ["Inscriptions, commentaires, partages", "Gardez ce qui a fait venir les gens"] }
          ],
          tryIt: "Tâche finale : terminez votre plan de communication d'un mois. Placez votre message clé, quatre publications avec texte alternatif, l'article de bulletin et le texte de l'affiche en langage simple sur un calendrier de quatre semaines.",
          youCanNow: "planifier et rédiger un mois de communication associative avec l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Toucher tout le monde",
        questions: [
          { q: "Qu'est-ce que le langage simple ?", options: ["Écrire sans ponctuation", "Une écriture que l'on comprend dès la première lecture", "Des phrases très longues", "Seulement des mots techniques"], answer: 1, why: "Le langage simple est clair dès la première lecture." },
          { q: "L'IA a traduit votre affiche en anglais. Avant de la partager, vous devez :", options: ["La partager tout de suite", "La retraduire avec l'IA", "La faire vérifier par une personne qui parle couramment la langue", "La raccourcir"], answer: 2, why: "Les traductions de l'IA peuvent être fausses." },
          { q: "Qu'est-ce que le texte alternatif ?", options: ["Un mot de passe de secours", "Une deuxième publication", "Une police d'écriture", "Une courte description d'une image lue par les lecteurs d'écran"], answer: 3, why: "Le texte alternatif rend les images accessibles." },
          { q: "Quel mot-clic est le plus facile pour un lecteur d'écran ?", options: ["#NourrirNotreVille", "#nourrirnotreville", "#NOURRIRNOTREVILLE", "#n_n_v"], answer: 0, why: "Les majuscules aident les lecteurs d'écran à prononcer chaque mot." },
          { q: "Qu'est-ce qu'un calendrier éditorial ?", options: ["Une liste de jours fériés", "Un planning de ce que vous publiez ou envoyez, et quand", "Une liste des anniversaires des donateurs", "Un formulaire fiscal"], answer: 1, why: "Il garde une communication régulière et organisée." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour la communication et l'action de proximité",
    questions: [
      { q: "Une bonne communication parle :", options: ["À tout le monde avec le même message", "À personne en particulier", "À un public à la fois", "Seulement au conseil"], answer: 2, why: "Les différents publics s'intéressent à des choses différentes." },
      { q: "Un message clé doit dire :", options: ["Toute votre histoire", "Seulement votre logo", "Votre budget", "Ce que c'est, pourquoi cela compte pour eux, et quoi faire ensuite"], answer: 3, why: "Ces éléments mènent à l'action." },
      { q: "Une bonne façon d'affiner un message avec l'IA est de :", options: ["Demander trois versions courtes et choisir la plus claire", "Demander une seule version très longue", "Lui demander de choisir votre public", "Ne pas retoucher"], answer: 0, why: "Comparer des versions aide à choisir." },
      { q: "Les publications sur les réseaux sociaux marchent mieux quand elles sont :", options: ["Longues et générales", "Courtes, vraies, et terminées par une action", "Sans aucune action", "Pleines de jargon"], answer: 1, why: "Les publications courtes et précises obtiennent des réponses." },
      { q: "Lequel est un des quatre types de publication de la leçon ?", options: ["Une déclaration d'impôts", "Un contrat juridique", "Un dernier rappel", "Une réinitialisation de mot de passe"], answer: 2, why: "Les rappels aident les gens à agir avant une date limite." },
      { q: "Qu'est-ce qu'une légende ?", options: ["Un chapeau", "Un cadeau de donateur", "Une adresse web", "Le texte qui accompagne une photo ou une vidéo"], answer: 3, why: "La légende explique l'image ou la vidéo." },
      { q: "Avant de partager l'histoire d'un bénéficiaire, il vous faut :", options: ["Son consentement et aucun détail qui l'identifie, sauf s'il l'a accepté", "Rien", "Ses coordonnées bancaires", "Une citation célèbre"], answer: 0, why: "Les histoires demandent un consentement et le respect de la vie privée." },
      { q: "Un article de bulletin doit raconter :", options: ["Tous les événements de l'année", "Une histoire avec un chiffre vrai et comment aider", "Seulement les noms des donateurs", "Rien sur la mission"], answer: 1, why: "Une histoire centrée se lit plus facilement." },
      { q: "Que vérifier dans un brouillon de bulletin écrit par l'IA ?", options: ["Seulement la couleur du titre", "Rien", "Chaque chiffre, nom, date et citation", "Seulement le nombre de mots"], answer: 2, why: "L'IA peut se tromper sur les faits." },
      { q: "Un lien de désinscription permet aux gens de :", options: ["Donner deux fois", "Devenir bénévoles", "Changer votre mot de passe", "Ne plus recevoir vos e-mails"], answer: 3, why: "Les gens doivent pouvoir se désinscrire." },
      { q: "Quelle demande rend un texte plus facile à lire ?", options: ["\"Réécris pour un niveau de fin d'école primaire avec des phrases courtes.\"", "\"Rends-le plus complexe.\"", "\"Ajoute du jargon.\"", "\"Rends-le plus long.\""], answer: 0, why: "Un niveau de lecture plus bas est plus facile." },
      { q: "En langage simple, qu'est-ce qui vient en premier ?", options: ["Une longue histoire", "Le plus important, comme la date, le lieu et l'action", "Les remerciements au conseil", "Les mentions juridiques"], answer: 1, why: "Les lecteurs pressés voient d'abord les détails clés." },
      { q: "Qui doit vérifier une traduction de l'IA ?", options: ["L'IA une deuxième fois", "Personne", "Une personne de votre communauté qui parle couramment la langue", "Un site web au hasard"], answer: 2, why: "Les personnes qui parlent couramment repèrent les erreurs." },
      { q: "Un lecteur d'écran, c'est :", options: ["Une personne qui lit les écrans", "Une télévision", "Une imprimante", "Un logiciel qui lit à voix haute le texte de l'écran"], answer: 3, why: "Il aide les personnes aveugles ou malvoyantes." },
      { q: "L'IA a rédigé le texte alternatif d'une photo. Vous devez :", options: ["Vérifier qu'il correspond à ce qui est vraiment sur la photo", "L'utiliser sans regarder", "Supprimer la photo", "Le porter à 500 mots"], answer: 0, why: "L'IA peut mal décrire les images." },
      { q: "Quel geste simple rend une vidéo plus accessible ?", options: ["Couper le son", "Ajouter des sous-titres", "La rendre plus longue", "Utiliser un texte minuscule"], answer: 1, why: "Les sous-titres aident les personnes sourdes ou qui regardent sans le son." },
      { q: "Pourquoi éviter de mettre les détails importants seulement dans une image ?", options: ["Les images sont illégales", "Cela coûte plus cher", "Les lecteurs d'écran ne lisent pas les mots dans une image", "Les donateurs n'aiment pas les images"], answer: 2, why: "Le texte de la publication touche tout le monde." },
      { q: "Un tableau de calendrier éditorial doit contenir :", options: ["Seulement des couleurs", "Le montant des dons", "Des mots de passe", "La semaine, le canal, l'élément et qui publie"], answer: 3, why: "Cela garde la communication organisée." },
      { q: "L'IA a fait votre calendrier de communication. Avant de l'utiliser :", options: ["Vérifiez ses dates avec votre vrai agenda", "Publiez tout aujourd'hui", "Croyez chaque date", "Supprimez-le"], answer: 0, why: "L'IA peut se tromper de dates." },
      { q: "Après un mois de communication, vous devez :", options: ["Ne jamais regarder les résultats", "Noter ce qui a fait venir les gens et continuer", "Supprimer toutes les publications", "Arrêter toute communication"], answer: 1, why: "Les résultats montrent ce qui marche." }
    ]
  }
};
