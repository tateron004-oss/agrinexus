"use strict";

// Koach Learn course (French translation of shared/hvac-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "hvac-basics-fr",
  lang: "fr",
  translationOf: "hvac-basics",
  category: "Workforce Development",
  name: "Les bases du métier de technicien HVAC",
  skills: "Nommer les éléments d'un système de chauffage et de climatisation, Suivre le cycle frigorifique, Lire les plaques signalétiques et faire les calculs HVAC, Repérer les dangers du métier, Choisir la bonne certification EPA Section 608, Préparer votre parcours vers le HVAC",
  outcome: "expliquer comment fonctionne le système de chauffage et de climatisation d'une maison, lire ses chiffres, nommer les dangers du métier et la façon de vous protéger, choisir la certification EPA Section 608 dont vous avez besoin, et suivre un plan daté pour vous former, vous faire certifier et être embauché comme aide ou apprenti en HVAC.",
  about: [
    "Les techniciens HVAC (chauffage, ventilation et climatisation) gardent les maisons, les écoles, les magasins et les hôpitaux au chaud en hiver et au frais en été. C'est un travail manuel, demandé dans chaque ville, et beaucoup de gens commencent comme aide ou apprenti et apprennent sur le terrain. Ce cours s'adresse à toute personne qui pense à cette voie : demandeurs d'emploi, anciens militaires, jeunes adultes, personnes qui sortent de prison, immigrés et adultes qui reprennent une formation.",
    "Vous allez apprendre les principaux éléments d'un système et comment un climatiseur déplace la chaleur, lire les chiffres sur les filtres et sur les étiquettes des appareils, et faire les calculs simples que les techniciens utilisent chaque jour. Ensuite, vous verrez les dangers du métier, la certification fédérale EPA Section 608 (de l'Agence américaine de protection de l'environnement) obligatoire pour les techniciens qui manipulent du fluide frigorigène, et les façons d'entrer dans le métier.",
    "Ce cours vous prépare. Il ne vous donne ni licence ni certificat. La certification EPA Section 608 s'obtient uniquement en réussissant un examen auprès d'un organisme certificateur agréé par l'EPA, et certains États et certaines villes exigent aussi une licence pour le travail en HVAC. Le travail pratique avec le fluide frigorigène et l'électricité ne s'apprend que dans un programme de formation encadré, avec les bons équipements de protection.",
    "Chaque leçon dure environ cinq minutes, avec une courte tâche « Essayez maintenant » et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Votre produit final est votre propre plan de départ en HVAC, avec de vraies dates."
  ],
  finalTask: "Préparez votre plan de départ en HVAC : (1) un schéma dessiné à la main du cycle frigorifique, avec les quatre éléments principaux nommés dans l'ordre et une phrase sur le rôle de chacun ; (2) une liste des dangers d'une intervention HVAC avec la protection pour chaque danger ; et (3) un plan daté qui indique le type de certification EPA Section 608 que vous passerez, un organisme certificateur agréé par l'EPA, deux programmes de formation ou apprentissages près de chez vous, ce que votre État ou votre ville exige pour une licence HVAC (d'après la page officielle) et une date pour chaque étape.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui cherchent un métier qualifié sans diplôme universitaire de quatre ans : demandeurs d'emploi, anciens militaires, jeunes adultes, personnes qui sortent de prison, immigrés et adultes qui reprennent une formation. Certains ont fait du travail manuel (entretien, armée, bâtiment, mécanique automobile) ; beaucoup n'ont jamais travaillé sur des appareils de chauffage ou de climatisation.",
    startingPoint: "Ils savent lire des consignes courtes et calculer avec des nombres entiers. La plupart savent qu'un thermostat commande le chauffage et la climatisation, mais ne savent pas nommer les éléments d'un système, expliquer comment il refroidit, ni dire quelle certification le travail en HVAC exige.",
    gap: "Les employeurs qui recrutent des aides et des apprentis en HVAC veulent des personnes qui connaissent les éléments et les mots de base, qui prennent la sécurité au sérieux et qui sont en route vers la certification EPA Section 608. Les apprenants ont besoin de cette base, et d'un plan clair et honnête avec des dates, pour postuler avec confiance et éviter de payer une formation qui ne mène pas à un emploi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin de primaire à début de collège) ; chaque mot du métier est expliqué",
      "Aucun travail pratique sur le fluide frigorigène, l'électricité ou le brasage dans ce cours : cela demande une formation encadrée et les bons équipements de protection",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour lire les pages officielles ; papier et stylo pour les schémas et les plans",
      "Temps : des leçons de 5 à 6 minutes qui s'intègrent entre le travail et les rendez-vous",
      "Les règles changent selon l'État et la ville : chaque apprenant vérifie les licences sur la page officielle de son lieu de résidence"
    ],
    prerequisites: "Aucun. « Commencer une carrière dans les métiers techniques » est une bonne première étape pour choisir un métier ; ce cours approfondit le HVAC."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'un schéma ou d'une photo d'un système split de maison", action: "nommer les principaux éléments d'un système de chauffage et de climatisation et suivre le cycle frigorifique dans l'ordre", standard: "avec les quatre éléments principaux du cycle dans le bon ordre et le rôle de chacun" },
    { id: "O2", condition: "À partir de la description d'une intervention HVAC", action: "lister les dangers de l'intervention et la protection pour chacun", standard: "en nommant au moins cinq dangers, chacun associé à une mesure de sécurité ou à un équipement de protection" },
    { id: "O3", condition: "À partir d'un filtre, d'une plaque signalétique ou de deux relevés de température", action: "lire les dimensions et les caractéristiques et faire des calculs HVAC simples", standard: "en réussissant au moins 4 exercices sur 5" },
    { id: "O4", condition: "À partir d'une liste d'appareils et de situations avec du fluide frigorigène", action: "associer chacun au bon type de certification EPA Section 608 et à la règle sur le fluide frigorigène qui s'applique", standard: "en réussissant au moins 4 sur 5" },
    { id: "O5", condition: "En utilisant les sites officiels de votre État", action: "rédiger un plan daté pour vous former, passer l'examen EPA Section 608 et postuler à un poste d'aide ou d'apprenti en HVAC", standard: "avec au moins cinq étapes datées et une source officielle pour chaque exigence" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les systèmes de chauffage et de climatisation",
      lessons: [
        {
          title: "Ce que fait un technicien HVAC, et les éléments principaux",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nommer les principaux éléments du système de chauffage et de climatisation d'une maison et dire à quoi sert chacun.",
          text: [
            "HVAC est le sigle anglais de chauffage, ventilation et climatisation. Vous verrez aussi HVACR, qui ajoute la réfrigération (chambres froides, machines à glaçons). Les techniciens HVAC installent de nouveaux systèmes, font l'entretien régulier, cherchent pourquoi un système ne marche plus et le réparent.",
            "Beaucoup de maisons ont un système split : une partie est dehors et une partie est dedans. L'unité extérieure contient le compresseur et la batterie extérieure (le condenseur). La partie intérieure est une chaudière à air chaud ou une centrale de traitement d'air, avec un ventilateur soufflant et une batterie intérieure (l'évaporateur). Des tuyaux appelés liaisons frigorifiques font circuler le fluide frigorigène entre les deux.",
            "Le thermostat au mur est la commande : il dit au système quand chauffer ou refroidir. Le ventilateur soufflant pousse l'air dans les gaines. Les bouches de soufflage envoient l'air dans les pièces, et les bouches de reprise ramènent l'air des pièces. Le filtre à air nettoie cet air avant qu'il n'atteigne l'appareil.",
            "Une pompe à chaleur ressemble à un climatiseur, mais elle peut aussi fonctionner à l'envers pour chauffer la maison. Une chaudière à air chaud produit de la chaleur en brûlant du gaz ou du fioul, ou avec des résistances électriques."
          ],
          words: [
            ["HVAC", "chauffage, ventilation et climatisation (sigle anglais). HVACR ajoute la réfrigération."],
            ["Système split", "un système avec une unité dehors et une unité dedans, reliées par des tuyaux de fluide frigorigène."],
            ["Thermostat", "la commande au mur qui dit au système quand chauffer ou refroidir."],
            ["Gaines", "les conduits en métal ou souples qui amènent l'air vers les pièces et le ramènent."],
            ["Pompe à chaleur", "un système qui refroidit en été et peut fonctionner à l'envers pour chauffer en hiver."],
            ["Liaisons frigorifiques", "la paire de tuyaux en cuivre qui fait circuler le fluide frigorigène entre l'unité extérieure et l'unité intérieure."]
          ],
          slides: [
            { title: "Ce que font les techniciens HVAC", bullets: ["Installer de nouveaux systèmes", "Faire l'entretien régulier", "Trouver la panne et la réparer"] },
            { title: "Dehors : l'unité extérieure", bullets: ["Compresseur", "Batterie extérieure (condenseur) et ventilateur"] },
            { title: "Dedans : chaudière ou centrale de traitement d'air", bullets: ["Le ventilateur soufflant déplace l'air", "Batterie intérieure (évaporateur)", "Le filtre à air nettoie l'air d'abord"] },
            { title: "Commande et circuit de l'air", bullets: ["Thermostat : dit quand fonctionner", "Bouches de soufflage : l'air entre ; bouches de reprise : il revient", "Les gaines transportent l'air"] }
          ],
          tryIt: "Observez le chauffage et la climatisation de votre maison, de votre école ou d'un magasin (de l'extérieur seulement, n'ouvrez jamais un panneau). Ou cherchez une photo de « climatiseur split ». Sur papier, notez chaque élément que vous voyez : thermostat, bouches, filtre, unité extérieure, tuyaux. À côté de chacun, écrivez une ligne sur son rôle.",
          youCanNow: "nommer les principaux éléments du système de chauffage et de climatisation d'une maison et dire à quoi sert chacun.",
          quickCheck: [
            { objective: "O1", q: "Quel élément dit au système quand chauffer ou refroidir ?", options: ["Les gaines", "Le filtre à air", "Le thermostat", "La batterie extérieure"], answer: 2, why: "Le thermostat est la commande ; il signale au système quand démarrer et s'arrêter." },
            { objective: "O1", q: "Dans un système split de maison, où se trouve en général le compresseur ?", options: ["Dans l'unité extérieure", "Dans le thermostat", "Derrière le filtre à air", "Dans une bouche de reprise"], answer: 0, why: "Dans un système split, le compresseur se trouve dans l'unité extérieure avec la batterie extérieure." }
          ]
        },
        {
          title: "Comment un climatiseur déplace la chaleur",
          objectives: ["O1"],
          minutes: 6,
          goal: "Suivre le cycle frigorifique à travers ses quatre éléments principaux, dans l'ordre.",
          text: [
            "Un climatiseur ne fabrique pas de froid. Il déplace la chaleur de l'intérieur de la maison vers l'extérieur. Un liquide spécial appelé fluide frigorigène transporte cette chaleur dans une boucle fermée de tuyaux. Cette boucle s'appelle le cycle frigorifique.",
            "1. Le compresseur comprime la vapeur de fluide frigorigène, qui devient chaude et à haute pression. 2. Dans le condenseur (la batterie extérieure), un ventilateur souffle l'air extérieur sur la batterie chaude ; le fluide cède sa chaleur et devient liquide. 3. Le détendeur (souvent une vanne de détente) laisse passer le liquide par une petite ouverture, sa pression baisse et il devient très froid. 4. Dans l'évaporateur (la batterie intérieure), l'air tiède de la pièce passe sur la batterie froide ; le fluide absorbe la chaleur et bout pour redevenir vapeur. Puis il retourne au compresseur et la boucle recommence.",
            "Une pompe à chaleur utilise les mêmes quatre éléments. En hiver, une vanne d'inversion envoie le fluide dans l'autre sens : la chaleur est prise dehors et rendue dedans.",
            "Connaître le cycle permet aux techniciens de trouver les pannes. Par exemple, si la batterie extérieure est bouchée par la saleté, la chaleur ne peut pas sortir et le système refroidit mal."
          ],
          steps: [
            "Compresseur : comprime la vapeur, qui devient chaude et à haute pression.",
            "Condenseur (batterie extérieure) : cède la chaleur dehors ; le fluide devient liquide.",
            "Détendeur : fait baisser la pression, et le liquide devient très froid.",
            "Évaporateur (batterie intérieure) : absorbe la chaleur de l'air de la pièce ; le fluide devient vapeur et retourne au compresseur."
          ],
          words: [
            ["Fluide frigorigène", "le fluide à l'intérieur du système qui transporte la chaleur d'un endroit à un autre."],
            ["Cycle frigorifique", "la boucle que parcourt le fluide : compresseur, condenseur, détendeur, évaporateur."],
            ["Compresseur", "la pompe qui comprime la vapeur de fluide pour la rendre chaude et à haute pression."],
            ["Condenseur", "la batterie où le fluide cède sa chaleur et devient liquide ; dehors pour un climatiseur de maison."],
            ["Détendeur", "l'élément (souvent une vanne de détente) qui fait baisser la pression du fluide pour qu'il devienne froid."],
            ["Évaporateur", "la batterie où le fluide absorbe la chaleur et devient vapeur ; dedans pour un climatiseur de maison."],
            ["Vanne d'inversion", "l'élément d'une pompe à chaleur qui change le sens du fluide pour chauffer."]
          ],
          slides: [
            { title: "La clim déplace la chaleur ; elle ne fabrique pas de froid", bullets: ["Le fluide transporte la chaleur dans une boucle fermée", "La chaleur va de l'intérieur vers l'extérieur"] },
            { title: "Le cycle, dans l'ordre", bullets: ["1. Compresseur : vapeur chaude à haute pression", "2. Condenseur : cède la chaleur, devient liquide", "3. Détendeur : la pression baisse, il devient froid", "4. Évaporateur : absorbe la chaleur de la pièce, devient vapeur"] },
            { title: "Les pompes à chaleur", bullets: ["Les mêmes quatre éléments", "La vanne d'inversion fait tourner le cycle à l'envers pour chauffer"] },
            { title: "Pourquoi les techniciens apprennent cela", bullets: ["Le cycle explique la plupart des pannes", "Exemple : batterie extérieure sale = la chaleur ne peut pas sortir"] }
          ],
          tryIt: "Sans regarder, dessinez un cercle sur papier et écrivez autour les quatre éléments du cycle dans l'ordre : compresseur, condenseur, détendeur, évaporateur. Ajoutez des flèches. Indiquez quels éléments sont dehors et lesquels sont dedans, et écrivez « chaud » ou « froid » à côté de chacun. Puis comparez votre schéma à la leçon. Gardez-le : c'est la partie 1 de votre tâche finale.",
          youCanNow: "suivre le cycle frigorifique dans l'ordre et dire le rôle de chacun des quatre éléments principaux.",
          quickCheck: [
            { objective: "O1", q: "Quel élément rejette la chaleur à l'extérieur de la maison ?", options: ["L'évaporateur", "Le thermostat", "Le filtre à air", "Le condenseur"], answer: 3, why: "Le condenseur est la batterie extérieure, où le fluide cède sa chaleur et devient liquide." },
            { objective: "O1", q: "Dans le cycle, qu'est-ce qui vient juste après le détendeur ?", options: ["Le compresseur", "L'évaporateur", "Le condenseur", "Le thermostat"], answer: 1, why: "Le liquide froid qui sort du détendeur entre dans l'évaporateur pour absorber la chaleur de l'air de la pièce." }
          ]
        },
        {
          title: "Lire les chiffres : filtres, plaques signalétiques et températures",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lire la taille d'un filtre et la plaque signalétique d'un appareil, et faire des calculs HVAC simples.",
          text: [
            "La taille des filtres est imprimée sur le bord, par exemple 16 x 25 x 1. Cela veut dire 16 pouces sur 25 pouces, et 1 pouce d'épaisseur. Une flèche montre le sens de l'air : elle pointe vers le ventilateur soufflant, à l'opposé de la bouche de reprise. Un filtre posé à l'envers ou de la mauvaise taille laisse entrer la saleté dans l'appareil.",
            "Chaque unité a une plaque signalétique (une étiquette en métal ou autocollante) avec les numéros de modèle et de série, la tension en volts, les caractéristiques électriques en ampères, et le type et la quantité de fluide frigorigène. Les techniciens lisent la plaque avant de commander des pièces ou de vérifier l'alimentation électrique. La puissance de refroidissement est souvent donnée en BTU par heure ou en tonnes. Une tonne de refroidissement vaut 12 000 BTU par heure, donc une unité de 36 000 BTU fait 3 tonnes.",
            "L'écart de température est une vérification simple : mesurez l'air qui entre par la reprise et l'air qui sort d'une bouche de soufflage, puis faites la soustraction. Si l'air de reprise est à 75°F et l'air soufflé à 57°F, l'écart est de 18°F. La plage normale dépend du système et des conditions ; votre formateur et les documents du fabricant vous disent à quoi vous attendre. Pour l'instant, vous vous entraînez seulement à la lecture et au calcul.",
            "Entraînement seulement : tous les chiffres de cette leçon sont inventés pour apprendre. N'ouvrez aucun panneau d'appareil pour trouver une plaque ; lisez-en une visible de l'extérieur, ou regardez une photo."
          ],
          steps: [
            "Filtre : lisez les trois chiffres (largeur x hauteur x épaisseur) et trouvez la flèche du sens de l'air.",
            "Plaque signalétique : trouvez les numéros de modèle et de série, les volts, les ampères et le type de fluide.",
            "Puissance : divisez les BTU par heure par 12 000 pour obtenir les tonnes.",
            "Écart de température : température de l'air de reprise moins température de l'air soufflé."
          ],
          words: [
            ["Plaque signalétique", "l'étiquette d'une unité avec son modèle, son numéro de série, ses caractéristiques électriques et son type de fluide."],
            ["BTU", "British thermal unit (unité thermique britannique) : une mesure de chaleur. La puissance de refroidissement et de chauffage se donne en BTU par heure."],
            ["Tonne (de refroidissement)", "12 000 BTU par heure de refroidissement. Une unité de 2 tonnes fait 24 000 BTU par heure."],
            ["Volts et ampères", "les volts sont la poussée électrique ; les ampères sont la quantité de courant qui circule."],
            ["Air de reprise et air soufflé", "l'air de reprise est ramené des pièces ; l'air soufflé est envoyé dans les pièces."],
            ["Écart de température", "la différence entre la température de l'air de reprise et celle de l'air soufflé."]
          ],
          slides: [
            { title: "Tailles de filtre", bullets: ["16 x 25 x 1 = 16 sur 25 pouces, 1 pouce d'épaisseur", "La flèche pointe vers le ventilateur soufflant", "Mauvaise taille ou à l'envers : la saleté entre"] },
            { title: "La plaque signalétique", bullets: ["Numéros de modèle et de série", "Volts et ampères", "Type et quantité de fluide frigorigène"] },
            { title: "Tonnes et BTU", bullets: ["1 tonne = 12 000 BTU par heure", "36 000 BTU = 3 tonnes", "Divisez les BTU par 12 000"] },
            { title: "Écart de température", bullets: ["Air de reprise moins air soufflé", "75°F - 57°F = 18°F", "Plage normale : selon le formateur et le fabricant"] }
          ],
          tryIt: "Entraînement seulement. Résolvez et écrivez votre calcul : (1) Un filtre indique 20 x 20 x 1. Quelle est son épaisseur ? (2) Une unité fait 24 000 BTU par heure. Combien de tonnes ? (3) Une unité fait 60 000 BTU par heure. Combien de tonnes ? (4) Air de reprise 78°F, air soufflé 60°F. Quel est l'écart ? (5) Trouvez un filtre chez vous ou une photo en ligne et notez sa taille et le sens de la flèche. Réponses : 1 pouce ; 2 tonnes ; 5 tonnes ; 18°F.",
          youCanNow: "lire la taille d'un filtre et une plaque signalétique, convertir des BTU en tonnes et calculer un écart de température.",
          quickCheck: [
            { objective: "O3", q: "Une unité fait 48 000 BTU par heure. Combien de tonnes fait-elle ?", options: ["3 tonnes", "6 tonnes", "5 tonnes", "4 tonnes"], answer: 3, why: "48 000 divisé par 12 000 donne 4 : c'est une unité de 4 tonnes." },
            { objective: "O3", q: "L'air de reprise est à 76°F et l'air soufflé à 58°F. Quel est l'écart de température ?", options: ["16°F", "18°F", "134°F", "20°F"], answer: 1, why: "Soustrayez : 76 moins 58 donne 18°F." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les systèmes de chauffage et de climatisation",
        questions: [
          { objective: "O1", q: "Que veut dire HVAC ?", options: ["Chaleur, bouches et batteries", "Commande d'air à haute tension", "Chauffage, ventilation et climatisation", "Ventilation et refroidissement de la maison"], answer: 2, why: "HVAC veut dire chauffage, ventilation et climatisation ; HVACR ajoute la réfrigération." },
          { objective: "O1", q: "Comment un climatiseur refroidit-il une maison ?", options: ["Il déplace la chaleur de l'intérieur vers l'extérieur", "Il fabrique de l'air froid à partir de rien", "Il ajoute du fluide neuf chaque jour", "Il fait entrer l'air froid du dehors"], answer: 0, why: "Le fluide frigorigène prend la chaleur dedans et la rejette dehors." },
          { objective: "O1", q: "Quel élément comprime la vapeur de fluide pour la rendre chaude et à haute pression ?", options: ["L'évaporateur", "Le filtre à air", "Le détendeur", "Le compresseur"], answer: 3, why: "Le compresseur est la pompe qui comprime la vapeur au début du cycle." },
          { objective: "O3", q: "Un filtre porte l'indication 20 x 25 x 4. Que vous dit le 4 ?", options: ["Il dure 4 mois", "Il fait 4 pouces d'épaisseur", "Il y en a 4 dans la boîte", "C'est la qualité 4"], answer: 1, why: "Le troisième chiffre est l'épaisseur en pouces." },
          { objective: "O3", q: "Où trouvez-vous le type de fluide et les caractéristiques électriques d'une unité ?", options: ["Sur l'écran du thermostat", "Sur le filtre à air", "Sur la bouche de soufflage", "Sur la plaque signalétique de l'unité"], answer: 3, why: "La plaque signalétique indique le modèle, le numéro de série, les volts, les ampères et le fluide." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Sécurité, certification et votre parcours",
      lessons: [
        {
          title: "Rester en sécurité sur une intervention HVAC",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lister les principaux dangers d'une intervention HVAC et la protection pour chacun.",
          text: [
            "Les techniciens HVAC ont l'un des taux d'accidents du travail les plus élevés de tous les métiers, selon le Bureau des statistiques du travail des États-Unis (BLS). La sécurité passe avant tout, à chaque intervention. Le travail pratique dans ce métier ne s'apprend qu'en formation encadrée, avec les bons équipements de protection.",
            "Électricité : les unités fonctionnent sur la tension de la maison ou plus, et certaines pièces (comme les condensateurs) peuvent garder une charge après la coupure du courant. Sur le terrain, les techniciens formés coupent le courant, le consignent avec un cadenas et une étiquette pour que personne ne puisse le remettre, et vérifient qu'il est vraiment coupé avant de toucher quoi que ce soit. La règle de consignation (lockout/tagout) de l'OSHA (l'agence fédérale américaine de sécurité au travail), 29 CFR 1910.147, fixe ces étapes.",
            "Fluide frigorigène : il est sous pression et peut causer des gelures et des blessures aux yeux ; dans un petit espace fermé, il peut chasser l'oxygène dont vous avez besoin pour respirer. Les techniciens portent des lunettes de sécurité ou des lunettes-masque et des gants, et seules des personnes certifiées et formées le manipulent.",
            "Autres dangers : combles brûlants et vides sanitaires étroits (coup de chaleur), échelles et toits (chutes), appareils lourds (mal de dos), bords tranchants de la tôle (coupures) et travail au chalumeau appelé brasage (brûlures et incendie). La protection : de l'eau et des pauses, une échelle bien utilisée, soulever avec les jambes ou à plusieurs, des gants anti-coupure et un extincteur à portée de main."
          ],
          steps: [
            "Lisez le bon d'intervention et demandez en quoi consiste le travail.",
            "Cherchez les dangers : courant, fluide, chaleur, hauteur, bords tranchants, feu.",
            "Mettez la protection dont le travail a besoin : lunettes de sécurité, gants, chaussures de sécurité.",
            "Techniciens formés seulement : couper le courant, consigner avec cadenas et étiquette, puis vérifier avant de toucher.",
            "Si quelque chose n'est pas clair, arrêtez-vous et demandez à votre chef d'équipe."
          ],
          words: [
            ["Danger", "tout ce qui pourrait vous blesser ou blesser quelqu'un d'autre."],
            ["EPI", "équipement de protection individuelle : lunettes de sécurité, gants, chaussures, protection auditive et matériel semblable."],
            ["Consignation (lockout/tagout)", "couper le courant et poser un cadenas et une étiquette sur l'interrupteur pour que personne ne le remette pendant le travail."],
            ["Condensateur", "une pièce électrique qui stocke une charge et peut vous électrocuter même après la coupure du courant."],
            ["Brasage", "assembler des tuyaux en cuivre avec un chalumeau et un métal d'apport ; cela implique une forte chaleur et un risque d'incendie."],
            ["Coup de chaleur", "malaise dû au travail dans une forte chaleur, comme l'épuisement par la chaleur ou le coup de chaleur grave."]
          ],
          slides: [
            { title: "La sécurité d'abord, à chaque intervention", bullets: ["L'un des taux d'accidents les plus élevés de tous les métiers (BLS)", "Travail pratique : seulement en formation encadrée"] },
            { title: "Électricité", bullets: ["Couper, cadenasser, étiqueter", "Vérifier avant de toucher", "Les condensateurs peuvent garder une charge"] },
            { title: "Fluide frigorigène", bullets: ["Sous pression : gelures et blessures aux yeux", "Peut chasser l'oxygène dans les espaces fermés", "Lunettes, gants, techniciens certifiés seulement"] },
            { title: "Chaleur, hauteur, métal, feu", bullets: ["Combles brûlants : eau et pauses", "Échelles et toits : monter en sécurité", "Tôle : gants anti-coupure", "Brasage : extincteur à portée de main"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Mécaniciens et installateurs en chauffage, climatisation et réfrigération", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm" },
            { name: "OSHA : Maîtrise des énergies dangereuses (consignation), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Lisez cette intervention : « La climatisation d'un client est tombée en panne par une journée à 95°F. L'unité extérieure est sur le côté de la maison. La centrale de traitement d'air est dans des combles brûlants, accessibles par une échelle escamotable. » Sur papier, faites deux colonnes : Danger et Protection. Listez au moins cinq dangers et la mesure de sécurité ou l'équipement pour chacun. Gardez-le : c'est la partie 2 de votre tâche finale.",
          youCanNow: "lister les principaux dangers d'une intervention HVAC et associer chacun à la bonne protection.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi les techniciens formés consignent-ils le courant avant de travailler dans une unité ?", options: ["Pour que personne ne puisse remettre le courant pendant le travail", "Pour faire économiser de l'argent au client", "Pour que l'unité refroidisse plus vite ensuite", "Parce que le thermostat doit être réinitialisé"], answer: 0, why: "La consignation garde le courant coupé jusqu'à ce que la personne qui a posé le cadenas le retire." },
            { objective: "O2", q: "Du fluide frigorigène gicle sur la main d'un ouvrier. Quelle blessure peut-il causer ?", options: ["Un coup de soleil", "Une écharde", "Une gelure", "Aucune ; il est sans danger"], answer: 2, why: "Le fluide qui sort sous pression devient très froid et peut geler la peau." }
          ]
        },
        {
          title: "La certification EPA Section 608 et les règles sur le fluide frigorigène",
          objectives: ["O4"],
          minutes: 6,
          goal: "Associer un appareil au bon type de certification EPA Section 608 et énoncer les principales règles sur le fluide frigorigène.",
          text: [
            "Selon la Section 608 de la loi fédérale sur la qualité de l'air (Clean Air Act), les techniciens qui entretiennent, dépannent, réparent ou mettent au rebut des appareils pouvant rejeter du fluide frigorigène dans l'air doivent être certifiés par le programme de l'Agence américaine de protection de l'environnement (EPA). Il existe quatre types. Type I : petits appareils (comme un climatiseur de fenêtre ou un réfrigérateur domestique). Type II : appareils à haute et très haute pression (comme la plupart des climatiseurs centraux et pompes à chaleur des maisons). Type III : appareils à basse pression (comme certains grands refroidisseurs, appelés chillers, dans les grands bâtiments). Universal : tous ces types.",
            "Chaque examen comprend une partie Core (tronc commun) sur les règles et la sécurité, plus la partie du type choisi. Les examens sont organisés par des organismes certificateurs agréés par l'EPA ; l'EPA ne fait pas passer l'examen et ne délivre pas la carte elle-même. Selon l'EPA, la certification Section 608 n'expire pas. Pour obtenir la certification Universal, la partie Core doit être passée sous surveillance (avec un surveillant).",
            "Deux règles à connaître dès maintenant : il est illégal de rejeter volontairement (dégazer) du fluide frigorigène dans l'air pendant l'entretien ou la mise au rebut d'un appareil, et le fluide pour ces appareils ne peut en général être vendu qu'aux techniciens certifiés et à leurs employeurs. La climatisation des voitures relève d'une autre certification, la Section 609.",
            "Ce cours vous prépare aux notions de l'examen. Il ne vous certifie pas. Consultez les pages de l'EPA sur la Section 608 pour les règles en vigueur et la liste des organismes certificateurs agréés, et demandez à votre programme de formation quel examen il propose."
          ],
          words: [
            ["EPA", "l'Agence américaine de protection de l'environnement, l'agence fédérale qui fixe les règles sur le fluide frigorigène."],
            ["Section 608", "la partie de la loi sur la qualité de l'air (Clean Air Act) qui couvre le fluide frigorigène dans les appareils fixes, comme les systèmes des maisons et des bâtiments."],
            ["Organisme certificateur", "un organisme agréé par l'EPA pour faire passer l'examen Section 608 et délivrer la carte."],
            ["Core", "la partie de chaque examen Section 608 qui couvre les règles, la sécurité et les bases sur le fluide frigorigène."],
            ["Dégazage", "laisser le fluide frigorigène s'échapper dans l'air. Le faire volontairement pendant un entretien est illégal."],
            ["Sous surveillance", "passé pendant qu'un surveillant observe, sur place ou en ligne."],
            ["Section 609", "une certification à part pour travailler sur la climatisation des voitures et des camions."]
          ],
          slides: [
            { title: "Qui en a besoin", bullets: ["Les techniciens qui entretiennent ou mettent au rebut des appareils à fluide", "Règle fédérale : Clean Air Act, Section 608"] },
            { title: "Les quatre types", bullets: ["Type I : petits appareils", "Type II : haute pression (la plupart des clims centrales de maison)", "Type III : basse pression (certains grands refroidisseurs)", "Universal : tous les types"] },
            { title: "Comment l'obtenir", bullets: ["Réussir l'examen d'un organisme agréé par l'EPA", "Partie Core plus votre type", "Selon l'EPA, elle n'expire pas"] },
            { title: "Règles à connaître dès maintenant", bullets: ["Ne jamais dégazer volontairement", "Vente réservée aux techniciens certifiés et à leurs employeurs", "Clim auto : Section 609, un autre examen"] }
          ],
          sources: [
            { name: "EPA : Certification des techniciens Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "EPA : Exigences de la certification des techniciens Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-requirements" },
            { name: "EPA : Interdiction de dégazer les fluides frigorigènes", url: "https://www.epa.gov/section608/stationary-refrigeration-prohibition-venting-refrigerants" },
            { name: "EPA : Restriction de vente des fluides frigorigènes", url: "https://www.epa.gov/section608/refrigerant-sales-restriction" }
          ],
          tryIt: "Associez chaque travail à un type de certification et écrivez-le : (1) réparer un climatiseur de fenêtre ; (2) entretenir le climatiseur central d'une maison ; (3) entretenir un grand refroidisseur à basse pression dans un hôpital ; (4) récupérer le fluide d'un vieux réfrigérateur domestique ; (5) un technicien qui veut travailler sur tout cela. Réponses : Type I, Type II, Type III, Type I, Universal. Puis ouvrez les pages de l'EPA sur la Section 608 et notez le nom d'un organisme certificateur agréé.",
          youCanNow: "associer un appareil au bon type de Section 608 et énoncer les règles sur le dégazage et la vente.",
          quickCheck: [
            { objective: "O4", q: "Un technicien va entretenir des climatiseurs centraux de maisons qui utilisent un fluide à haute pression. Quel type de certification convient ?", options: ["Type I", "Type III", "Type II", "Section 609"], answer: 2, why: "Le Type II couvre les appareils à haute et très haute pression, dont la plupart des climatiseurs centraux de maison." },
            { objective: "O4", q: "Qui vous délivre la certification EPA Section 608 ?", options: ["Ce cours, quand vous le terminez", "Le propriétaire chez qui vous travaillez", "N'importe quelle quincaillerie", "Un organisme certificateur agréé par l'EPA, après réussite à son examen"], answer: 3, why: "Seul un organisme certificateur agréé par l'EPA fait passer l'examen et délivre la certification." }
          ]
        },
        {
          title: "Votre parcours vers le HVAC, avec des dates",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rédiger un plan daté pour vous former, vous faire certifier et être embauché comme aide ou apprenti en HVAC.",
          text: [
            "Il y a trois voies courantes. Beaucoup de techniciens suivent un programme dans une école professionnelle ou un community college (établissement public d'enseignement court), qui dure en général de 6 mois à 2 ans selon le Bureau des statistiques du travail, et qui inclut souvent l'examen de l'EPA. D'autres entrent en apprentissage : un emploi payé avec un tuteur et des cours, qui dure en général plusieurs années. Certains employeurs embauchent des aides titulaires d'un diplôme de fin d'études secondaires ou du GED (l'examen américain d'équivalence) et les forment sur le terrain.",
            "Certains États et certaines villes exigent une licence HVAC, et les règles varient. Trouvez l'organisme de délivrance des licences de votre État ou de votre ville, ou utilisez l'outil de recherche de licences de CareerOneStop, et notez exactement ce qu'il demande. Beaucoup d'employeurs veulent aussi un permis de conduire, et certains apprécient plus tard des certifications facultatives du secteur ou des fabricants.",
            "Avant de payer un programme, demandez : inclut-il l'examen EPA Section 608 ? Combien de diplômés trouvent un emploi en HVAC ? Aide-t-il à trouver un emploi ? Les anciens militaires peuvent demander au VA (le ministère américain des Anciens combattants) comment utiliser les droits du GI Bill pour une formation ou un apprentissage. Si vous avez un casier judiciaire, demandez à l'organisme des licences comment il examine les casiers, et cherchez des employeurs qui donnent une seconde chance.",
            "Un plan avec des dates transforme un objectif en étapes. Écrivez chaque étape, où vous l'avez vérifiée et la date à laquelle vous la ferez."
          ],
          steps: [
            "Écrivez votre objectif, par exemple « Un poste d'aide en HVAC d'ici juin ».",
            "Choisissez votre type EPA Section 608 (beaucoup de débutants visent le Type II ou Universal) et un organisme certificateur agréé.",
            "Trouvez deux programmes de formation ou apprentissages près de chez vous sur apprenticeship.gov ou le site d'un community college ; notez les dates de candidature.",
            "Vérifiez les règles de licence de votre État ou de votre ville sur la page officielle et notez ce qu'elles exigent.",
            "Ajoutez des dates pour réviser, passer l'examen, envoyer vos candidatures et mettre à jour votre CV."
          ],
          words: [
            ["Apprentissage", "un emploi payé où vous apprenez le métier auprès de travailleurs expérimentés, avec des cours en plus."],
            ["Aide ou stagiaire", "un employé HVAC débutant qui assiste un technicien tout en apprenant."],
            ["Organisme des licences", "le service de l'État ou de la ville qui décide qui peut faire certains travaux et qui délivre les licences."],
            ["CareerOneStop", "un site gratuit du ministère du Travail des États-Unis avec des informations sur l'emploi, la formation et les licences."]
          ],
          slides: [
            { title: "Trois voies d'accès", bullets: ["École professionnelle ou community college", "Apprentissage : emploi payé et cours", "Poste d'aide avec formation sur le terrain"] },
            { title: "Les licences varient selon le lieu", bullets: ["Certains États et villes exigent une licence", "Vérifiez auprès de l'organisme officiel", "Notez exactement ce qu'il demande"] },
            { title: "Avant de payer", bullets: ["L'examen de l'EPA est-il inclus ?", "Combien de diplômés trouvent un emploi en HVAC ?", "Anciens militaires : renseignez-vous auprès du VA sur le GI Bill"] },
            { title: "Votre plan", bullets: ["Objectif, type EPA, organisme certificateur", "Deux programmes avec dates de candidature", "Règles de licence de la page officielle", "Une date pour chaque étape"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Mécaniciens et installateurs HVAC, comment le devenir", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm#tab-4" },
            { name: "Apprenticeship.gov : Recherche d'apprentissages (Apprenticeship Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop : Recherche de licences", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" },
            { name: "EPA : Certification des techniciens Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" }
          ],
          tryIt: "Tâche finale : préparez votre plan de départ en HVAC. Rassemblez votre schéma du cycle frigorifique (leçon 2) et votre liste des dangers (leçon 4). Puis rédigez votre plan daté : votre objectif, le type Section 608 que vous passerez et un organisme certificateur agréé, deux programmes de formation ou apprentissages près de chez vous avec leurs dates de candidature, ce que votre État ou votre ville exige pour une licence HVAC (avec l'adresse web que vous avez vérifiée) et une date pour chaque étape.",
          youCanNow: "suivre votre propre plan daté pour vous former, passer l'examen EPA Section 608 et postuler à un emploi en HVAC.",
          quickCheck: [
            { objective: "O5", q: "Où devez-vous vérifier si votre État exige une licence HVAC ?", options: ["Dans une publication sur les réseaux sociaux", "Sur la page officielle de l'organisme des licences de votre État ou de votre ville", "Dans une publicité d'école de formation", "Auprès d'un ami qui a travaillé un jour en HVAC"], answer: 1, why: "Les règles de licence varient selon le lieu et changent, donc c'est l'organisme officiel qu'il faut consulter." },
            { objective: "O5", q: "Quelle étape du plan est rédigée de la façon la plus utile ?", options: ["« Me faire certifier un jour »", "« Me renseigner sur le HVAC »", "« Beaucoup réviser »", "« Passer l'examen EPA Type II avec un organisme agréé d'ici le 15 mars »"], answer: 3, why: "Une étape utile indique l'action exacte, avec qui, et une date." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Sécurité, certification et votre parcours",
        questions: [
          { objective: "O2", q: "Avant qu'un technicien formé touche le câblage dans une unité, quelle est la dernière vérification ?", options: ["Demander au client si c'est coupé", "Vérifier que le courant est vraiment coupé", "Baisser le thermostat", "Attendre cinq secondes"], answer: 1, why: "Après la consignation, les techniciens vérifient avant de toucher, car un mauvais interrupteur ou une charge stockée peut encore électrocuter." },
          { objective: "O2", q: "On vous envoie dans des combles brûlants en été. Quelle protection compte le plus contre la chaleur ?", options: ["De l'eau et des pauses régulières", "Une protection auditive", "Un masque de soudeur", "Seulement des chaussures de sécurité"], answer: 0, why: "L'eau, les pauses et l'attention aux signes de coup de chaleur vous protègent dans les espaces chauds." },
          { objective: "O4", q: "Un réfrigérateur domestique est un petit appareil. Quel type de Section 608 le couvre ?", options: ["Type II", "Type III", "Type I", "Section 609"], answer: 2, why: "Le Type I couvre les petits appareils comme les réfrigérateurs domestiques et les climatiseurs de fenêtre." },
          { objective: "O4", q: "Que dit l'EPA sur le fait de rejeter volontairement du fluide dans l'air pendant un entretien ?", options: ["C'est permis en plein air", "C'est permis pour de petites quantités", "C'est permis avec l'accord du propriétaire", "C'est illégal"], answer: 3, why: "Les règles de l'EPA interdisent le dégazage volontaire pendant l'entretien, la réparation ou la mise au rebut." },
          { objective: "O5", q: "Une école propose un cours HVAC rapide. Quelle question vous aide le plus avant de payer ?", options: ["Inclut-il l'examen EPA Section 608, et combien de diplômés trouvent un emploi en HVAC ?", "De quelle couleur sont les uniformes ?", "Le bâtiment est-il neuf ?", "Puis-je commencer un lundi ?"], answer: 0, why: "Savoir si le programme mène à la certification et à un emploi vous dit s'il vaut son prix." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du métier de technicien HVAC",
    questions: [
      { objective: "O1", q: "Dans HVAC, que veut dire le « V » ?", options: ["Voltage", "Ventilation", "Vanne", "Vapeur"], answer: 1, why: "HVAC veut dire chauffage, ventilation et climatisation." },
      { objective: "O1", q: "À quoi sert le ventilateur soufflant ?", options: ["À faire circuler l'air dans les gaines", "À comprimer le fluide frigorigène", "À régler la température voulue", "À nettoyer la batterie extérieure"], answer: 0, why: "Le ventilateur soufflant pousse l'air à travers la batterie et dans les gaines jusqu'aux pièces." },
      { objective: "O1", q: "Quel élément rejette la chaleur dehors ?", options: ["L'évaporateur", "La bouche de reprise", "Le condenseur", "Le thermostat"], answer: 2, why: "Le condenseur est la batterie extérieure où la chaleur quitte le fluide." },
      { objective: "O1", q: "Quel est le bon ordre du cycle frigorifique ?", options: ["Évaporateur, compresseur, détendeur, condenseur", "Compresseur, détendeur, condenseur, évaporateur", "Condenseur, compresseur, évaporateur, détendeur", "Compresseur, condenseur, détendeur, évaporateur"], answer: 3, why: "Le fluide va du compresseur au condenseur, passe par le détendeur, entre dans l'évaporateur et revient." },
      { objective: "O1", q: "Qu'est-ce qui permet à une pompe à chaleur de chauffer une maison en hiver ?", options: ["Un filtre à air plus grand", "Une vanne d'inversion qui fait tourner le cycle à l'envers", "Un deuxième thermostat", "De l'eau ajoutée au fluide"], answer: 1, why: "La vanne d'inversion envoie le fluide dans l'autre sens : la chaleur est prise dehors et rendue dedans." },
      { objective: "O3", q: "Une unité fait 36 000 BTU par heure. Combien de tonnes cela fait-il ?", options: ["2 tonnes", "4 tonnes", "3 tonnes", "36 tonnes"], answer: 2, why: "36 000 divisé par 12 000 donne 3." },
      { objective: "O3", q: "L'air de reprise est à 80°F et l'air soufflé à 62°F. Quel est l'écart de température ?", options: ["22°F", "142°F", "16°F", "18°F"], answer: 3, why: "80 moins 62 donne 18°F." },
      { objective: "O3", q: "Vers où pointe la flèche d'un filtre à air ?", options: ["Vers le ventilateur soufflant, dans le sens de l'air", "Vers la grille de la bouche de reprise", "Toujours vers le haut", "Cela n'a pas d'importance"], answer: 0, why: "La flèche montre le sens de l'air, vers le ventilateur et l'appareil." },
      { objective: "O2", q: "Quel danger peut électrocuter un ouvrier même après la coupure du courant ?", options: ["Un filtre à air propre", "Un condensateur chargé", "Un cache de bouche en plastique", "La pile d'un thermostat"], answer: 1, why: "Les condensateurs stockent une charge, c'est pourquoi les techniciens formés vérifient avant de toucher." },
      { objective: "O2", q: "À quoi sert la consignation (lockout/tagout) ?", options: ["À fermer à clé la porte du client", "À indiquer quel filtre acheter", "À garder le courant coupé pour que personne ne le remette pendant le travail", "À accélérer la réparation"], answer: 2, why: "Un cadenas et une étiquette sur l'interrupteur gardent l'appareil à l'arrêt jusqu'à ce que l'ouvrier qui les a posés les retire." },
      { objective: "O2", q: "Pourquoi le fluide frigorigène est-il dangereux dans un petit espace fermé ?", options: ["Il sent mauvais", "Il rend la pièce trop lumineuse", "Il est collant", "Il peut chasser l'oxygène dont vous avez besoin pour respirer"], answer: 3, why: "Une grosse fuite dans un espace fermé peut remplacer l'oxygène." },
      { objective: "O2", q: "Vous devez couper et ajuster une gaine en tôle. Quelle protection convient à ce danger ?", options: ["Des gants anti-coupure et des lunettes de sécurité", "Seulement des lunettes de soleil", "Aucune ; c'est rapide", "Seulement des bouchons d'oreilles"], answer: 0, why: "Les bords de la tôle sont tranchants et des éclats peuvent voler, donc il faut des gants et une protection des yeux." },
      { objective: "O4", q: "Quelle loi exige que les techniciens qui manipulent du fluide frigorigène dans les systèmes des maisons et des bâtiments soient certifiés ?", options: ["La loi sur les normes de travail équitables (Fair Labor Standards Act)", "La Section 608 de la loi sur la qualité de l'air (Clean Air Act)", "La loi sur la sécurité routière (Highway Safety Act)", "La loi sur la qualité de l'eau (Clean Water Act)"], answer: 1, why: "Le programme Section 608 de l'EPA vient du Clean Air Act." },
      { objective: "O4", q: "Quel type de Section 608 vous permet de travailler sur tous les appareils fixes ?", options: ["Type I", "Type II", "Type III", "Universal"], answer: 3, why: "Universal couvre les types I, II et III." },
      { objective: "O4", q: "Un grand refroidisseur à basse pression dans un hôpital a besoin d'un entretien. Quel type le couvre ?", options: ["Type III", "Type I", "Type II", "Section 609"], answer: 0, why: "Le Type III couvre les appareils à basse pression comme certains grands refroidisseurs." },
      { objective: "O4", q: "Que dit l'EPA sur la durée de validité de la certification Section 608 ?", options: ["Un an", "Cinq ans", "Elle n'expire pas", "Jusqu'à ce que vous changiez d'emploi"], answer: 2, why: "L'EPA indique que la certification des techniciens Section 608 n'expire pas." },
      { objective: "O5", q: "Ce cours va :", options: ["Vous donner une licence HVAC", "Vous préparer à vous former et à passer l'examen ; il ne vous certifie pas et ne vous donne pas de licence", "Compter comme votre examen de l'EPA", "Remplacer un apprentissage"], answer: 1, why: "La certification vient de l'examen d'un organisme agréé par l'EPA, et les licences viennent de votre État ou de votre ville." },
      { objective: "O5", q: "Quelle est une façon payée d'apprendre le HVAC avec un tuteur et des cours ?", options: ["Une vidéo gratuite en ligne", "La garantie d'un produit", "L'inspection d'une maison", "Un apprentissage enregistré"], answer: 3, why: "Un apprentissage combine une formation payée sur le terrain et des cours." },
      { objective: "O5", q: "Quel site gratuit peut vous aider à trouver des apprentissages près de chez vous ?", options: ["apprenticeship.gov", "Un forum d'emploi quelconque", "Une publicité qui s'ouvre toute seule", "Les commentaires sous une vidéo"], answer: 0, why: "Apprenticeship.gov est le site du ministère du Travail des États-Unis, avec un outil de recherche d'apprentissages." },
      { objective: "O5", q: "Quelle étape du plan est complète ?", options: ["« Apprendre le HVAC »", "« Postuler quelque part bientôt »", "« Postuler au programme HVAC du community college avant le 1er avril, après avoir vérifié son examen de l'EPA et son aide à l'emploi »", "« Penser à une licence »"], answer: 2, why: "Elle indique l'action, le lieu, ce qui a été vérifié et une date." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, passées avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 6, 9, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Schéma du cycle frigorifique", objective: "O1", notYet: "Des éléments manquent ou sont dans le mauvais ordre.", meets: "Les quatre éléments sont dans le bon ordre, avec une phrase juste sur le rôle de chacun.", exceeds: "Indique aussi l'intérieur et l'extérieur, le chaud et le froid, et explique comment une pompe à chaleur inverse le cycle." },
      { name: "Liste des dangers", objective: "O2", notYet: "Moins de cinq dangers, ou la protection ne correspond pas au danger.", meets: "Au moins cinq dangers, chacun associé à une mesure de sécurité ou au bon équipement.", exceeds: "Met aussi les étapes dans l'ordre où une équipe les ferait, y compris la consignation et la vérification avant de toucher." },
      { name: "Chiffres HVAC", objective: "O3", notYet: "Les réponses d'entraînement ont des erreurs sur les tonnes ou l'écart de température.", meets: "Au moins 4 exercices sur 5 justes, avec le calcul écrit.", exceeds: "Tout est juste, et l'apprenant sait expliquer la flèche du filtre et lire la photo d'une vraie plaque signalétique." },
      { name: "Bonne certification", objective: "O4", notYet: "Le plan indique le mauvais type de Section 608 pour le travail, ou aucun organisme certificateur.", meets: "Indique le bon type pour les travaux visés et un organisme certificateur agréé par l'EPA.", exceeds: "Énonce aussi avec ses propres mots la règle sur le dégazage et la restriction de vente." },
      { name: "Plan daté tiré de sources officielles", objective: "O5", notYet: "Les étapes n'ont pas de dates, ou les règles de licence viennent de publicités ou de publications.", meets: "Au moins cinq étapes datées, deux vrais programmes et les règles de licence de la page officielle avec son adresse web.", exceeds: "Inclut aussi les questions posées à chaque programme et un plan de secours, comme un poste d'aide pendant la formation." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui réussissent un examen EPA Section 608 dans les 6 mois (déclaré lors du suivi)",
      "Apprenants qui s'inscrivent à un programme de formation ou à un apprentissage HVAC dans les 90 jours",
      "Apprenants embauchés comme aides, stagiaires ou apprentis en HVAC dans les 6 mois",
      "Les programmes partenaires signalent que les candidats arrivent en connaissant les éléments, les mots et les règles de sécurité de base"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour lire les pages de l'EPA, du BLS, d'apprenticeship.gov et des licences de l'État",
      "Papier, stylo et calculatrice (celle du téléphone suffit)",
      "Facultatif : un filtre à air usagé ou des photos d'un filtre et de la plaque signalétique d'un appareil",
      "Environ 60 à 75 minutes au total, en courtes séances : leçons, entraînement, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Gardez tout l'entraînement sans manipulation : pas d'ouverture de panneaux, pas de fluide frigorigène, pas de travail électrique et pas de brasage. Ces compétences relèvent d'un programme de formation encadré, avec EPI.",
      "Si possible, apportez une unité en coupe ou des photos, et demandez aux apprenants de montrer chaque élément du cycle.",
      "Invitez un artisan HVAC local, un syndicat ou un formateur de community college à parler des postes d'aide et de ce qu'ils recherchent.",
      "Aidez chaque apprenant à trouver la page des licences de son propre État ou de sa ville ; les règles varient, donc ne donnez pas une seule réponse pour tout le groupe.",
      "Orientez les apprenants qui ont un casier judiciaire et les anciens militaires vers les services de réinsertion ou d'aide aux anciens combattants ; ne promettez aucun résultat de la part d'un organisme des licences.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
