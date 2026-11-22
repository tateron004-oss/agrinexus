"use strict";

// Koach Learn course (French translation of workforce/workforce-osha-safety.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-osha-safety-fr",
  lang: "fr",
  translationOf: "workforce-osha-safety",
  category: "Workforce Development",
  name: "Les bases de la sécurité au travail (OSHA)",
  skills: "Repérer les dangers, Choisir et utiliser les EPI, Prévenir les glissades, trébuchements et chutes, Soulever des charges en sécurité, Lire une fiche de données de sécurité, Signaler les blessures et utiliser vos droits en matière de sécurité",
  outcome: "parcourir un lieu de travail et repérer les dangers, choisir les bons EPI, soulever et déplacer des charges en sécurité, trouver ce qu'il vous faut dans une fiche de données de sécurité, signaler une blessure ou un danger de la bonne façon, et expliquer votre droit à un travail sûr et ce que sont les formations OSHA 10 et OSHA 30.",
  about: [
    "Ce cours s'adresse à toute personne qui commence ou travaille déjà dans un entrepôt, le bâtiment, une cuisine, le nettoyage, le commerce, l'industrie, la santé ou tout emploi où l'on peut se blesser. Il enseigne les bases de la sécurité que les employeurs attendent dès le premier jour.",
    "Vous vous entraînerez à faire une tournée des dangers, vous apprendrez à utiliser les équipements de protection, à prévenir les blessures les plus courantes (glissades, trébuchements, chutes et douleurs dues au port de charges), à lire la fiche de données de sécurité d'un produit chimique, et à signaler une blessure ou un danger. Vous apprendrez aussi vos droits auprès de l'Occupational Safety and Health Administration (OSHA, l'agence fédérale américaine de la sécurité et de la santé au travail) et ce que sont les cartes OSHA de 10 heures et de 30 heures.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours est une formation générale à la sécurité. Suivez toujours la formation et les règles de votre employeur pour votre poste, et consultez osha.gov pour les règles à jour."
  ],
  finalTask: "Faites une tournée des dangers de 10 minutes dans un vrai lieu (votre lieu de travail, une réserve, un garage ou votre maison). Écrivez un rapport qui liste au moins cinq dangers, le type de chacun (glissade/trébuchement/chute, port de charges, produit chimique, machine, électricité, autre), l'EPI ou la correction nécessaire, et à qui vous signaleriez chacun. Ajoutez les sections de la fiche de données de sécurité que vous liriez pour un produit chimique trouvé, et écrivez les étapes que vous suivriez si quelqu'un était blessé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des demandeurs d'emploi et des travailleurs nouveaux ou en poste dans les entrepôts, le bâtiment, les cuisines, le nettoyage, le commerce, l'industrie et la santé, y compris des jeunes travailleurs, des personnes en reconversion et des personnes qui reprennent le travail.",
    startingPoint: "Ils ont une certaine expérience du travail ou de la maison et remarquent les dangers évidents, mais personne ne leur a appris à faire une tournée des dangers, à lire une fiche de données de sécurité, à signaler une blessure ni à connaître leurs droits auprès de l'OSHA.",
    gap: "Les employeurs attendent des habitudes de sécurité de base dès le premier jour. Les travailleurs qui ne savent pas repérer les dangers, choisir les EPI, soulever une charge en sécurité ou signaler une blessure correctement risquent davantage de se blesser et peuvent perdre leurs droits à l'indemnisation des accidents du travail. Connaître ces bases les aide aussi à être embauchés et à prendre la parole sans risque.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un téléphone ou un ordinateur partagé ; la pratique se fait dans une pièce à la maison ou au travail",
      "Temps : des leçons d'environ cinq minutes qui s'intègrent entre les heures de travail",
      "Formation générale à la sécurité seulement : les apprenants suivent la formation de leur employeur et consultent osha.gov pour les règles à jour",
      "La pratique doit être sans danger : pas d'escalade, pas de charges lourdes soulevées seul et pas de mélange de produits chimiques"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pendant une tournée dans un lieu de travail, une réserve ou une maison", action: "repérer les dangers, nommer le type de chacun et décider s'il faut le corriger ou le signaler", standard: "en listant au moins cinq dangers avec le bon type" },
    { id: "O2", condition: "Face à une tâche de travail et à ses dangers", action: "choisir et vérifier les bons EPI pour chaque danger", standard: "en associant l'équipement à chaque danger et en repérant l'équipement abîmé" },
    { id: "O3", condition: "En travaillant sur un sol, sur une échelle ou avec des charges", action: "montrer les étapes qui évitent les glissades, les trébuchements et les chutes, et soulever une charge en sécurité", standard: "en suivant chaque étape sans tourner le dos" },
    { id: "O4", condition: "Face à un produit chimique", action: "trouver les dangers, les EPI et les premiers secours sur son étiquette et dans sa fiche de données de sécurité", standard: "en nommant les bonnes sections de la FDS (2, 4 et 8)" },
    { id: "O5", condition: "Quand quelqu'un est blessé ou que vous trouvez un danger", action: "lister les étapes pour réagir et écrire un court rapport d'accident ou de danger", standard: "en indiquant quoi, quand, où et qui l'a vu, signalé tout de suite" },
    { id: "O6", condition: "Face à un problème de sécurité non corrigé ou à un emploi que vous visez", action: "expliquer vos droits en matière de sécurité, comment déposer une plainte auprès de l'OSHA, et si OSHA 10 ou OSHA 30 vous convient", standard: "en nommant les bonnes étapes et le bon cours sans aide" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Repérer et prévenir les dangers",
      lessons: [
        {
          objectives: ["O1"],
          title: "Repérer les dangers avec une tournée des dangers",
          minutes: 5,
          goal: "Parcourir une zone et lister par type les dangers que vous voyez.",
          text: [
            "Un danger, c'est tout ce qui au travail pourrait blesser quelqu'un : un sol mouillé, un câble en travers d'un passage, une boîte lourde sur une étagère haute, une machine sans son protecteur, un produit chimique qui fuit, un bruit fort ou une sortie bloquée.",
            "Une tournée des dangers est un tour lent et organisé d'une zone. Regardez en bas (sols, câbles, liquides renversés), regardez en haut (étagères hautes, charges suspendues, échelles), regardez autour (machines, véhicules, produits chimiques, sorties, extincteurs), et écoutez (bruit fort, alarmes, sons bizarres des équipements).",
            "Classez ce que vous trouvez : glissades, trébuchements et chutes ; port de charges et douleurs ; produits chimiques ; machines et pièces en mouvement ; électricité ; véhicules comme les chariots élévateurs ; chaleur, froid et bruit ; incendie et sorties.",
            "Quand vous trouvez un danger, corrigez-le tout de suite s'il est petit et si vous pouvez le faire sans risque (essuyer un liquide, enlever une boîte d'un passage), puis prévenez votre superviseur. Si ce n'est pas sans risque ou si vous n'avez pas été formé, éloignez les gens et signalez-le."
          ],
          steps: ["Choisissez une zone et marchez lentement.", "Regardez en bas : sols, câbles, liquides renversés.", "Regardez en haut : étagères, charges suspendues, échelles.", "Regardez autour : machines, véhicules, produits chimiques, sorties.", "Notez chaque danger et son type.", "Corrigez les petits dangers si c'est sans risque, et signalez tout à votre superviseur."],
          words: [["Danger", "quelque chose au travail qui pourrait causer une blessure ou une maladie."], ["Tournée des dangers", "un tour lent et organisé d'une zone pour chercher les dangers."], ["Protecteur", "un capot ou une barrière sur une machine qui garde les mains et le corps loin des pièces en mouvement."]],
          slides: [
            { title: "Ce qu'est un danger", bullets: ["Tout ce qui pourrait blesser quelqu'un", "Sols mouillés, câbles qui traînent, protecteurs manquants", "Produits chimiques, bruit, sorties bloquées"] },
            { title: "Regardez en bas, en haut et autour", bullets: ["En bas : sols, câbles, liquides renversés", "En haut : étagères hautes, charges suspendues", "Autour : machines, véhicules, sorties"] },
            { title: "Types de dangers", bullets: ["Glissades, trébuchements et chutes ; port de charges", "Produits chimiques ; machines ; électricité", "Véhicules ; chaleur, froid, bruit ; incendie"] },
            { title: "Que faire", bullets: ["Corrigez les petits dangers si c'est sans risque", "Éloignez les gens des gros dangers", "Prévenez toujours votre superviseur"] }
          ],
          tryIt: "Faites une tournée des dangers de cinq minutes dans une pièce de votre maison, une réserve ou votre lieu de travail. Notez au moins cinq dangers et le type de chacun.",
          youCanNow: "parcourir une zone, repérer les dangers par type, et décider s'il faut corriger ou signaler chacun.",
          quickCheck: [
            { objective: "O1", q: "Pendant une tournée des dangers, que veut dire « regarder en bas » ?", options: ["Vérifier les sols, les câbles et les liquides renversés", "Vérifier les étagères hautes et les échelles", "Vérifier les machines et les véhicules", "Vérifier les alarmes et les bruits étranges"], answer: 0, why: "Regarder en bas, c'est vérifier le sol : câbles, liquides renversés et objets sur lesquels on peut trébucher." },
            { objective: "O1", q: "Il manque le protecteur d'une machine que vous n'êtes pas formé à réparer. Que faites-vous ?", options: ["Le réparer vous-même rapidement", "Éloigner les gens et le signaler", "L'ignorer jusqu'à la pause", "Continuer à utiliser la machine avec prudence"], answer: 1, why: "Si un danger n'est pas sûr à corriger pour vous, éloignez les gens et signalez-le." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bien utiliser les EPI",
          minutes: 5,
          goal: "Choisir, vérifier et porter le bon équipement de protection pour une tâche.",
          text: [
            "Les équipements de protection individuelle (EPI, en anglais PPE) sont le matériel que vous portez pour protéger votre corps : lunettes de sécurité ou lunettes-masques, écrans faciaux, casques de chantier, gants, chaussures de sécurité à embout renforcé, protections auditives (bouchons ou casque antibruit), gilets haute visibilité, appareils respiratoires et harnais antichute.",
            "Choisissez l'équipement selon le danger : des lunettes contre les éclats ou les éclaboussures ; les bons gants pour le travail (anticoupure pour les lames, gants chimiques pour les produits chimiques, comme l'indique la fiche de données de sécurité) ; des protections auditives pour les outils bruyants ; un casque là où des objets peuvent tomber ; un gilet haute visibilité près des véhicules.",
            "Vérifiez-le avant chaque usage : pas de fissures, de trous ni de sangles usées. Il doit être à votre taille. Un appareil respiratoire doit passer un essai d'ajustement, et vous devez être formé avant de l'utiliser.",
            "Les EPI sont la dernière ligne de défense. Il vaut mieux d'abord supprimer le danger, par exemple en mettant un protecteur sur une machine ou en rangeant les objets lourds en bas. Selon les règles de l'OSHA, l'employeur doit en général fournir les EPI obligatoires et vous former à leur usage."
          ],
          steps: ["Regardez la tâche et ses dangers.", "Choisissez l'EPI qui correspond à chaque danger.", "Vérifiez qu'il n'est pas abîmé.", "Mettez-le et vérifiez qu'il est bien ajusté.", "Nettoyez-le et rangez-le après usage ; signalez l'équipement abîmé."],
          words: [["EPI", "équipements de protection individuelle : le matériel que vous portez pour vous protéger des dangers (en anglais : PPE)."], ["Appareil respiratoire", "un masque qui protège vos poumons de la poussière, des fumées ou des gaz ; il demande un essai d'ajustement et une formation."], ["Essai d'ajustement", "une vérification que l'appareil respiratoire est bien étanche sur votre visage (en anglais : fit test)."]],
          slides: [
            { title: "EPI courants", bullets: ["Yeux et visage : lunettes, lunettes-masques, écrans", "Tête, mains, pieds : casques, gants, chaussures", "Oreilles, poumons, visibilité : bouchons, appareils respiratoires, gilets"] },
            { title: "L'équipement selon le danger", bullets: ["Éclats : lunettes de sécurité", "Produits chimiques : les gants indiqués par la fiche de sécurité", "Outils bruyants : protections auditives"] },
            { title: "Vérifiez avant chaque usage", bullets: ["Pas de fissures, de trous ni de sangles usées", "Il doit être à votre taille", "Appareils respiratoires : essai d'ajustement et formation"] },
            { title: "Dernière ligne de défense", bullets: ["Supprimez d'abord le danger si possible", "L'employeur doit en général fournir les EPI obligatoires"] }
          ],
          sources: [
            { name: "OSHA : Équipements de protection individuelle", url: "https://www.osha.gov/personal-protective-equipment" }
          ],
          tryIt: "Prenez trois tâches : couper des cartons avec un cutter, laver le sol avec un produit de nettoyage, et utiliser un souffleur de feuilles. Pour chacune, écrivez les EPI que vous porteriez et pourquoi.",
          youCanNow: "choisir, vérifier et porter les bons EPI pour une tâche, et savoir qu'ils sont la dernière ligne de défense.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la raison principale de vérifier ses EPI avant chaque utilisation ?", options: ["Voir si c'est le modèle le plus récent", "Vérifier que la couleur va bien", "Trouver les fissures, les trous ou les sangles usées", "Compter combien vous en avez"], answer: 2, why: "Un équipement abîmé peut ne pas vous protéger, donc vous le vérifiez avant chaque utilisation." },
            { objective: "O2", q: "Vous allez couper des cartons avec un cutter toute la journée. Quels gants choisissez-vous ?", options: ["Des gants pour produits chimiques", "Des gants fins en tissu", "Pas de gants", "Des gants anti-coupure"], answer: 3, why: "Les gants anti-coupure correspondent au danger d'une lame." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Glissades, trébuchements, chutes et port de charges en sécurité",
          minutes: 5,
          goal: "Prévenir les glissades, les trébuchements et les chutes, et soulever une charge en sécurité.",
          text: [
            "Les glissades, les trébuchements et les chutes sont parmi les accidents du travail les plus courants. Pour les prévenir : nettoyez tout de suite ce qui est renversé et posez un panneau \"sol mouillé\" ; gardez les passages libres de câbles, de boîtes et de tuyaux ; tenez les rampes ; portez des chaussures qui adhèrent bien ; et gardez les zones de travail bien éclairées.",
            "Travail en hauteur : utilisez la bonne échelle, posez-la sur un sol ferme et plat, gardez trois points d'appui (deux mains et un pied, ou deux pieds et une main), et ne montez jamais sur la dernière marche. Une protection contre les chutes, comme des garde-corps ou un harnais, est obligatoire à partir d'une certaine hauteur ; la règle générale de l'OSHA est de 4 pieds (environ 1,2 m) dans l'industrie en général et de 6 pieds (environ 1,8 m) dans le bâtiment. Suivez la formation de votre site.",
            "Port de charges : préparez le geste et vérifiez le poids. Demandez de l'aide ou utilisez un chariot, un diable ou un chariot élévateur pour les charges lourdes ou encombrantes. Placez-vous près de la charge, pieds écartés, pliez les genoux, gardez le dos droit, tenez la charge contre vous, soulevez avec les jambes, et tournez avec les pieds au lieu de tordre le dos.",
            "Signalez tôt une douleur. Les petites blessures s'aggravent si vous continuez à travailler sans rien dire."
          ],
          steps: ["Nettoyez ce qui est renversé et signalez les sols mouillés.", "Gardez les passages libres.", "Sur une échelle : sol ferme, trois points d'appui, pas la dernière marche.", "Avant de soulever : vérifiez le poids et demandez de l'aide ou un chariot si besoin.", "Soulever : genoux pliés, dos droit, charge contre vous, force des jambes, tournez avec les pieds."],
          words: [["Trois points d'appui", "avoir toujours deux mains et un pied, ou deux pieds et une main, sur l'échelle."], ["Protection contre les chutes", "garde-corps, filets de sécurité ou harnais qui empêchent ou arrêtent les chutes de hauteur."]],
          slides: [
            { title: "Évitez glissades et trébuchements", bullets: ["Nettoyez ce qui est renversé ; panneaux \"sol mouillé\"", "Enlevez câbles et boîtes des passages", "Bonnes chaussures et bon éclairage"] },
            { title: "Échelles et hauteur", bullets: ["Sol ferme et plat", "Trois points d'appui ; pas la dernière marche", "Protection antichute : 4 pieds (1,2 m) industrie, 6 pieds (1,8 m) bâtiment"] },
            { title: "Soulever en sécurité", bullets: ["Vérifiez le poids ; demandez de l'aide ou un chariot", "Genoux pliés, dos droit, charge contre vous", "Soulevez avec les jambes ; tournez avec les pieds"] },
            { title: "Signalez tôt la douleur", bullets: ["Les petites blessures s'aggravent si on les ignore"] }
          ],
          sources: [
            { name: "OSHA : Protection contre les chutes", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA : Surfaces de marche et de travail", url: "https://www.osha.gov/walking-working-surfaces" }
          ],
          tryIt: "Entraînez-vous à soulever en sécurité un carton de livres ou de courses : vérifiez le poids, placez-vous près, pliez les genoux, gardez le dos droit, soulevez avec les jambes et tournez avec les pieds. Puis écrivez trois choses que vous corrigeriez pour éviter les glissades et les trébuchements là où vous travaillez ou vivez.",
          youCanNow: "prévenir les glissades, les trébuchements et les chutes, utiliser une échelle en sécurité, et soulever une charge de la bonne façon.",
          quickCheck: [
            { objective: "O3", q: "Sur quoi ne faut-il jamais monter quand on utilise une échelle ?", options: ["La marche du haut", "La marche du bas", "Une marche du milieu", "Un sol ferme et plat"], answer: 0, why: "Sur la marche du haut, on perd facilement l'équilibre et on tombe." },
            { objective: "O3", q: "Vous devez tourner en portant un carton. Comment faites-vous ?", options: ["Tourner à la taille", "Tourner avec les pieds", "Tenir le carton loin du corps", "Bloquer les genoux et pivoter"], answer: 1, why: "Tourner avec les pieds garde le dos droit et évite les blessures." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Repérer et prévenir les dangers",
        questions: [
          { objective: "O1", q: "Vous voyez un câble électrique en travers d'un passage. Quel type de danger est-ce ?", options: ["Produit chimique", "Bruit", "Glissade, trébuchement ou chute", "Chaleur"], answer: 2, why: "Les câbles en travers des passages font trébucher." },
          { objective: "O1", q: "Que faire d'un petit liquide renversé que vous pouvez nettoyer sans risque ?", options: ["Le contourner", "Le nettoyer, signaler le sol s'il est mouillé, et prévenir votre superviseur", "Le couvrir avec une boîte", "Attendre l'équipe suivante"], answer: 1, why: "Corriger tout de suite les petits dangers et les signaler évite les blessures." },
          { objective: "O2", q: "Quel EPI convient pour un travail avec un souffleur de feuilles bruyant ?", options: ["Une protection auditive", "Seulement un casque de chantier", "Un harnais antichute", "Rien"], answer: 0, why: "La protection auditive protège contre le bruit fort." },
          { objective: "O2", q: "Pourquoi dit-on que les EPI sont la dernière ligne de défense ?", options: ["Ce sont les plus chers", "Ils sont facultatifs", "Ils empêchent toujours toutes les blessures", "Il vaut mieux d'abord supprimer le danger"], answer: 3, why: "Supprimer ou protéger un danger protège tout le monde ; l'EPI ne protège que celui qui le porte." },
          { objective: "O3", q: "Quelle est une bonne habitude pour soulever ?", options: ["Tordre le dos pour tourner", "Tenir la charge loin du corps", "Plier les genoux, garder la charge contre soi et tourner avec les pieds", "Soulever seul les charges lourdes pour gagner du temps"], answer: 2, why: "Ainsi l'effort porte sur les jambes, pas sur le dos." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Produits chimiques, blessures et vos droits",
      lessons: [
        {
          objectives: ["O4"],
          title: "Produits chimiques et fiches de données de sécurité",
          minutes: 5,
          goal: "Trouver les dangers, les EPI et les premiers secours d'un produit chimique dans sa fiche de données de sécurité.",
          text: [
            "Beaucoup de lieux de travail utilisent des produits chimiques dangereux : nettoyants, eau de Javel, dégraissants, peinture, carburant, pesticides. La norme de l'OSHA sur la communication des dangers (Hazard Communication Standard) dit que les travailleurs ont le droit de connaître les produits chimiques qu'ils utilisent.",
            "Les récipients doivent avoir une étiquette avec le nom du produit, des pictogrammes (symboles bordés de rouge), une mention d'avertissement (\"Danger\" pour les dangers plus graves, \"Attention\" pour les moins graves ; en anglais Danger et Warning), et des mentions de danger et de précaution.",
            "Chaque produit chimique dangereux a une fiche de données de sécurité (FDS, en anglais SDS) de 16 sections, toujours dans le même ordre. Les plus utiles : section 2, les dangers ; section 4, les premiers secours ; section 7, la manipulation et le stockage ; section 8, les contrôles de l'exposition et les EPI. Votre employeur doit garder les FDS des produits que vous utilisez et vous former. Demandez où elles sont rangées.",
            "Bonnes habitudes : ne mélangez jamais des produits chimiques (l'eau de Javel et l'ammoniaque produisent un gaz toxique), gardez les produits dans des récipients étiquetés, utilisez les EPI de la section 8, et travaillez dans un endroit bien aéré."
          ],
          steps: ["Lisez l'étiquette du récipient : nom, pictogrammes, mention d'avertissement.", "Trouvez la FDS du produit.", "Section 2 : quels sont les dangers ?", "Section 8 : de quels EPI ai-je besoin ?", "Section 4 : quels sont les premiers secours ?", "Ne mélangez jamais des produits chimiques, et gardez-les étiquetés."],
          words: [["Fiche de données de sécurité (FDS)", "un document de 16 sections sur un produit chimique : ses dangers, sa manipulation sûre, les EPI et les premiers secours (en anglais : safety data sheet, SDS)."], ["Pictogramme", "un symbole dans un losange rouge sur l'étiquette d'un produit chimique, qui montre le type de danger."], ["Mention d'avertissement", "\"Danger\" (plus grave) ou \"Attention\" (moins grave) sur l'étiquette d'un produit chimique."]],
          slides: [
            { title: "Votre droit de savoir", bullets: ["Une étiquette sur chaque récipient", "Une fiche de données de sécurité pour chaque produit dangereux", "Une formation sur les produits que vous utilisez"] },
            { title: "Lisez l'étiquette", bullets: ["Nom du produit", "Pictogrammes dans des losanges rouges", "Mention : Danger ou Attention (Warning)"] },
            { title: "Sections de la FDS à connaître", bullets: ["2 : dangers", "4 : premiers secours", "7 : manipulation et stockage", "8 : contrôles de l'exposition et EPI"] },
            { title: "Bonnes habitudes", bullets: ["Ne mélangez jamais des produits chimiques", "Gardez tout étiqueté", "Utilisez les EPI de la section 8"] }
          ],
          sources: [
            { name: "OSHA : Communication des dangers", url: "https://www.osha.gov/hazcom" }
          ],
          tryIt: "Trouvez un produit de nettoyage à la maison ou au travail. Lisez son étiquette (pictogrammes et mention d'avertissement). Puis cherchez le nom du produit avec \"fiche de données de sécurité\" (ou \"safety data sheet\") sur le site du fabricant, et notez ce que disent les sections 2, 4 et 8.",
          youCanNow: "lire l'étiquette d'un produit chimique et trouver les dangers, les EPI et les premiers secours dans sa fiche de données de sécurité.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un pictogramme sur l'étiquette d'un produit chimique ?", options: ["Le prix du produit", "Le numéro de téléphone du fabricant", "Un symbole à bordure rouge qui montre un danger", "La date de fabrication"], answer: 2, why: "Les pictogrammes sont des symboles à bordure rouge qui montrent le type de danger." },
            { objective: "O4", q: "Un produit éclabousse l'œil d'un collègue. Quelle section de la FDS consultez-vous ?", options: ["Section 2", "Section 7", "Section 8", "Section 4"], answer: 3, why: "La section 4 de la fiche de données de sécurité donne les étapes de premiers secours." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Signaler les blessures et les dangers",
          minutes: 5,
          goal: "Faire ce qu'il faut quand quelqu'un est blessé et le signaler correctement.",
          text: [
            "Si quelqu'un est gravement blessé, appelez d'abord le 911 (le numéro d'urgence aux États-Unis) ou le numéro d'urgence de votre site. Ne déplacez pas la personne sauf si elle est en danger. Allez chercher le secouriste formé si votre site en a un.",
            "Signalez tout de suite à votre superviseur chaque blessure ou maladie liée au travail, même petite, comme une coupure ou une douleur. Un signalement rapide vous permet d'être soigné, protège votre droit à l'indemnisation des accidents du travail (workers' compensation) dans votre État, et aide à corriger le danger pour qu'il ne blesse personne d'autre. Notez ce qui s'est passé, quand, où et qui l'a vu.",
            "L'employeur a aussi des obligations. Il doit prévenir l'OSHA dans les 8 heures si un travailleur meurt à cause d'un accident du travail, et dans les 24 heures si un travailleur est hospitalisé, subit une amputation ou perd un œil. Beaucoup d'employeurs doivent aussi tenir un registre des accidents, et les travailleurs ont le droit de le consulter.",
            "Signalez les dangers de la même façon : prévenez votre superviseur, notez-le par écrit, et éloignez les gens jusqu'à ce qu'il soit corrigé. Les règles de l'OSHA interdisent à l'employeur de vous punir parce que vous avez signalé une blessure ou un danger."
          ],
          steps: ["Blessure grave : appelez d'abord le 911 ou le numéro d'urgence du site.", "Faites donner les premiers secours par une personne formée.", "Prévenez tout de suite votre superviseur, même pour une petite blessure.", "Notez quoi, quand, où et qui l'a vu.", "Renseignez-vous sur l'indemnisation des accidents du travail et suivez la correction du danger."],
          words: [["Indemnisation des accidents du travail", "une assurance de l'État qui paie les frais médicaux et une partie du salaire perdu en cas d'accident du travail (en anglais : workers' compensation)."], ["Registre des accidents", "le registre de l'employeur sur les blessures et maladies liées au travail ; les travailleurs ont le droit de le voir."]],
          slides: [
            { title: "Blessure grave", bullets: ["Appelez le 911 ou le numéro d'urgence du site", "Ne déplacez pas la personne sauf si elle est en danger", "Allez chercher le secouriste formé"] },
            { title: "Signalez chaque blessure", bullets: ["Prévenez tout de suite votre superviseur", "Notez quoi, quand, où, qui l'a vu", "Cela protège votre demande d'indemnisation"] },
            { title: "Obligations de l'employeur", bullets: ["Décès : prévenir l'OSHA dans les 8 heures", "Hospitalisation, amputation, perte d'un œil : 24 heures", "Tenir un registre des accidents que les travailleurs peuvent voir"] },
            { title: "Le signalement est protégé", bullets: ["Vous punir pour un signalement est illégal"] }
          ],
          sources: [
            { name: "OSHA : Signaler un décès ou une blessure grave", url: "https://www.osha.gov/report" },
            { name: "OSHA : Règle de signalement 29 CFR 1904.39", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39" }
          ],
          tryIt: "Écrivez les étapes que vous suivriez si un collègue se coupait gravement la main avec un cutter. Puis écrivez un court rapport d'accident : ce qui s'est passé, quand, où, qui l'a vu, et ce qui devrait changer.",
          youCanNow: "réagir à une blessure, la signaler correctement et à temps, et savoir ce que votre employeur doit déclarer.",
          quickCheck: [
            { objective: "O5", q: "Quelles informations faut-il mettre dans un rapport d'accident ?", options: ["Ce qui s'est passé, quand, où et qui l'a vu", "Seulement le nom du travailleur blessé", "Qui est selon vous le coupable", "Votre avis sur le superviseur"], answer: 0, why: "Un rapport clair dit ce qui s'est passé, quand, où et qui l'a vu." },
            { objective: "O5", q: "Vous vous faites mal au dos en soulevant une charge, mais ça ne fait qu'un peu mal. Que faites-vous ?", options: ["Continuer à travailler sans rien dire", "Prévenir tout de suite votre superviseur", "Attendre un mois pour voir si ça empire", "Le dire seulement à un collègue"], answer: 1, why: "Signaler tôt vous permet d'être soigné et protège vos droits à l'indemnisation." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vos droits en matière de sécurité, OSHA 10 et OSHA 30",
          minutes: 5,
          goal: "Expliquer votre droit à un travail sûr, comment déposer une plainte auprès de l'OSHA, et ce que sont OSHA 10 et OSHA 30.",
          text: [
            "Selon l'Occupational Safety and Health Act (la loi américaine sur la sécurité et la santé au travail), votre employeur doit fournir un lieu de travail sans dangers graves connus. Vous avez droit à une formation dans une langue que vous comprenez, aux équipements de sécurité obligatoires, à voir les registres des accidents et les résultats des mesures sur les dangers, à signaler les dangers, et à demander à l'OSHA d'inspecter votre lieu de travail.",
            "Si un danger n'est pas corrigé, vous pouvez déposer une plainte auprès de l'OSHA en ligne, par téléphone au 1-800-321-OSHA (6742), par courrier ou dans un bureau de l'OSHA, et demander que votre nom ne soit pas donné à votre employeur. Si votre employeur vous punit parce que vous avez soulevé un problème de sécurité, déposez au plus vite une plainte de lanceur d'alerte (whistleblower) auprès de l'OSHA ; selon la loi fédérale, le délai est de 30 jours.",
            "OSHA 10 et OSHA 30 sont des cours du programme de formation volontaire de l'OSHA (Outreach Training Program). OSHA 10 est un cours de 10 heures pour les travailleurs débutants sur la reconnaissance des dangers et les droits des travailleurs. OSHA 30 est un cours de 30 heures pour les superviseurs et les travailleurs qui ont des responsabilités de sécurité. Il existe des versions pour le bâtiment et pour l'industrie en général. Vous recevez une carte de fin de cours.",
            "Ces cartes ne sont ni une licence ni une certification, mais beaucoup d'employeurs, de syndicats et certains États les demandent. Seuls les formateurs autorisés par l'OSHA peuvent délivrer de vraies cartes, alors suivez le cours chez un formateur ou un organisme autorisé et méfiez-vous des offres qui semblent trop bon marché ou trop rapides."
          ],
          steps: ["Signalez d'abord un danger à votre superviseur, si c'est sans risque.", "S'il n'est pas corrigé, déposez une plainte auprès de l'OSHA en ligne ou au 1-800-321-6742.", "Demandez que votre nom reste confidentiel si vous le voulez.", "Si vous êtes puni pour l'avoir signalé, déposez une plainte de lanceur d'alerte dans les 30 jours.", "Choisissez OSHA 10 (débutant) ou OSHA 30 (superviseur), bâtiment ou industrie en général, chez un formateur autorisé."],
          words: [["OSHA", "l'Occupational Safety and Health Administration, l'agence fédérale américaine de la sécurité au travail."], ["Outreach Training Program", "le programme volontaire de l'OSHA de cours de sécurité de 10 heures et de 30 heures donnés par des formateurs autorisés."], ["Lanceur d'alerte", "un travailleur qui signale un problème ; la loi le protège contre les punitions (en anglais : whistleblower)."]],
          slides: [
            { title: "Votre droit à un travail sûr", bullets: ["Un lieu de travail sans dangers graves connus", "Une formation dans une langue que vous comprenez", "Voir les registres d'accidents ; demander une inspection"] },
            { title: "Déposer une plainte", bullets: ["osha.gov ou 1-800-321-6742", "Vous pouvez demander que votre nom reste confidentiel", "Puni ? Plainte de lanceur d'alerte dans les 30 jours"] },
            { title: "OSHA 10 et OSHA 30", bullets: ["10 heures : travailleurs débutants", "30 heures : superviseurs et rôles de sécurité", "Versions bâtiment ou industrie en général"] },
            { title: "À propos des cartes", bullets: ["Volontaires ; ni licence ni certification", "Beaucoup d'employeurs et de syndicats les demandent", "Seuls les formateurs autorisés délivrent de vraies cartes"] }
          ],
          sources: [
            { name: "OSHA : Les droits des travailleurs", url: "https://www.osha.gov/workers" },
            { name: "OSHA : Déposer une plainte de sécurité et de santé", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA : Programme de formation Outreach", url: "https://www.osha.gov/training/outreach" },
            { name: "OSHA : Ce qu'il faut savoir pour obtenir une carte OSHA", url: "https://www.osha.gov/training/oshacardfacts" }
          ],
          tryIt: "Tâche finale : faites une tournée des dangers de 10 minutes et écrivez votre rapport : cinq dangers, leur type, l'EPI ou la correction, à qui vous signaleriez chacun, les sections de la FDS pour un produit chimique, et vos étapes en cas de blessure. En bas, écrivez si OSHA 10 ou OSHA 30 convient à votre poste et pourquoi.",
          youCanNow: "expliquer votre droit à un travail sûr, déposer une plainte auprès de l'OSHA, et choisir entre OSHA 10 et OSHA 30.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une carte OSHA 10 ou OSHA 30 ?", options: ["Un permis de travail de l'État", "Une certification professionnelle", "Une carte de fin de cours délivrée par un formateur autorisé", "Une carte qui remplace la formation de l'employeur"], answer: 2, why: "Ces cartes montrent que vous avez fini un cours volontaire ; ce n'est pas un permis." },
            { objective: "O6", q: "Vous avez signalé à votre superviseur une sortie de secours bloquée et rien n'a changé. Que pouvez-vous faire ensuite ?", options: ["Rien ; seuls les responsables peuvent agir", "Démissionner tout de suite", "En parler d'abord sur Internet", "Déposer une plainte auprès de l'OSHA et demander que votre nom reste confidentiel"], answer: 3, why: "Si un danger n'est pas corrigé, vous pouvez déposer une plainte auprès de l'OSHA et demander que votre nom ne soit pas communiqué." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Produits chimiques, blessures et vos droits",
        questions: [
          { objective: "O4", q: "Quelle section d'une fiche de données de sécurité vous indique les EPI à porter ?", options: ["Section 1", "Section 4", "Section 16", "Section 8"], answer: 3, why: "La section 8 traite des contrôles de l'exposition et de la protection individuelle." },
          { objective: "O4", q: "Sur l'étiquette d'un produit chimique, quelle mention indique le danger le plus grave ?", options: ["Danger", "Attention (Warning)", "Prudence (Caution)", "Avis (Notice)"], answer: 0, why: "\"Danger\" est utilisé pour les dangers plus graves ; \"Attention\" pour les moins graves." },
          { objective: "O5", q: "Vous vous faites une petite coupure au travail. Que devez-vous faire ?", options: ["La cacher", "Attendre qu'elle s'aggrave", "Prévenir tout de suite votre superviseur et noter ce qui s'est passé", "Démissionner"], answer: 2, why: "Signalez tôt chaque blessure, même petite." },
          { objective: "O5", q: "Dans quel délai un employeur doit-il signaler à l'OSHA un décès lié au travail ?", options: ["30 jours", "8 heures", "Une semaine", "Il n'est pas obligé"], answer: 1, why: "La règle de l'OSHA est de 8 heures pour un décès." },
          { objective: "O6", q: "Qu'est-ce que l'OSHA 10 ?", options: ["Une licence d'électricien obligatoire", "Une amende", "Un cours de sécurité volontaire de 10 heures pour les travailleurs débutants", "Une étiquette de produit chimique"], answer: 2, why: "C'est un cours du programme Outreach avec une carte de fin de cours, pas une licence." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la sécurité au travail (OSHA)",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'un danger ?", options: ["Tout ce qui au travail pourrait causer une blessure ou une maladie", "Une affiche de sécurité", "Un type d'EPI", "Une salle de pause"], answer: 0, why: "Un danger est une source possible de dommage." },
      { objective: "O1", q: "Pendant une tournée des dangers, \"regarder en haut\" veut dire vérifier :", options: ["Le sol, pour les liquides renversés", "Votre téléphone", "Les étagères hautes, les charges suspendues et les échelles", "L'heure"], answer: 2, why: "Ce qui est en hauteur peut tomber ou causer des chutes." },
      { objective: "O1", q: "Le protecteur d'une machine a été enlevé. Vous devez :", options: ["L'utiliser avec prudence", "Ne pas l'utiliser, éloigner les gens et le signaler", "Mettre la main dedans pour vérifier", "L'ignorer"], answer: 1, why: "Les protecteurs manquants causent des blessures graves ; signalez et restez à distance." },
      { objective: "O2", q: "Quels gants porter avec un produit de nettoyage chimique ?", options: ["N'importe quels gants", "Pas de gants", "Des gants anticoupure", "Le type indiqué par la fiche de données de sécurité"], answer: 3, why: "La FDS indique la bonne protection pour ce produit." },
      { objective: "O2", q: "Avant d'utiliser un appareil respiratoire, il vous faut :", options: ["Rien", "Un essai d'ajustement et une formation", "Seulement un coup d'œil rapide", "Le masque d'un collègue"], answer: 1, why: "Un appareil respiratoire doit être bien étanche et bien utilisé." },
      { objective: "O2", q: "Qui doit en général fournir les EPI obligatoires ?", options: ["L'employeur", "Le travailleur", "Un collègue", "Personne"], answer: 0, why: "Selon les règles de l'OSHA, l'employeur doit en général fournir les EPI obligatoires." },
      { objective: "O3", q: "Quelle est une bonne façon de prévenir les glissades ?", options: ["Laisser les liquides renversés pour plus tard", "Porter des chaussures à semelle lisse", "Éteindre la lumière", "Nettoyer tout de suite et poser un panneau \"sol mouillé\""], answer: 3, why: "Un nettoyage rapide et un avertissement évitent les chutes." },
      { objective: "O3", q: "Sur une échelle, \"trois points d'appui\" veut dire :", options: ["Trois personnes tiennent l'échelle", "Trois échelles ensemble", "Deux mains et un pied, ou deux pieds et une main, sur l'échelle", "Se tenir sur les trois dernières marches"], answer: 2, why: "Cela vous garde stable pendant que vous montez." },
      { objective: "O3", q: "Dans le bâtiment, la hauteur générale de l'OSHA pour la protection contre les chutes est :", options: ["6 pieds (environ 1,8 m)", "1 pied (environ 30 cm)", "20 pieds (environ 6 m)", "Il n'y a pas de règle"], answer: 0, why: "Dans le bâtiment, le seuil général est de 6 pieds ; dans l'industrie en général, il est de 4 pieds (environ 1,2 m)." },
      { objective: "O3", q: "Une boîte est lourde et encombrante. Que faites-vous ?", options: ["La soulever vite", "Vous tordre en la soulevant", "Demander de l'aide ou utiliser un chariot ou un diable", "La porter loin du corps"], answer: 2, why: "L'aide ou le matériel évitent les blessures au dos." },
      { objective: "O4", q: "Que veut dire le sigle anglais SDS (en français FDS) ?", options: ["Bon de livraison standard", "Planning des tâches du personnel", "Panneau de service d'équipe", "Fiche de données de sécurité"], answer: 3, why: "Une fiche de données de sécurité décrit les dangers d'un produit chimique et son usage sûr." },
      { objective: "O4", q: "Quelle section de la FDS donne les premiers secours ?", options: ["Section 2", "Section 4", "Section 16", "Section 8"], answer: 1, why: "La section 4 liste les mesures de premiers secours." },
      { objective: "O4", q: "Pourquoi ne faut-il jamais mélanger l'eau de Javel et l'ammoniaque ?", options: ["Ils coûtent plus cher", "Ils perdent leur odeur", "Ils tachent le sol", "Ils produisent un gaz toxique"], answer: 3, why: "Les mélanger dégage un gaz dangereux." },
      { objective: "O5", q: "Un collègue est gravement blessé. Quelle est la première étape ?", options: ["Appeler le 911 ou le numéro d'urgence du site", "Finir votre tâche", "Publier une photo", "Le déplacer tout de suite"], answer: 0, why: "Les secours d'urgence d'abord ; ne le déplacez pas sauf s'il est en danger." },
      { objective: "O5", q: "Pourquoi signaler même une petite blessure ?", options: ["Pour avoir un jour de congé", "Ce n'est pas nécessaire", "Pour être soigné, protéger vos droits à l'indemnisation et corriger le danger", "Pour accuser quelqu'un"], answer: 2, why: "Un signalement rapide vous protège, vous et les autres." },
      { objective: "O5", q: "Un travailleur perd un œil dans un accident du travail. L'employeur doit prévenir l'OSHA dans les :", options: ["8 heures", "24 heures", "Un an", "30 jours"], answer: 1, why: "L'hospitalisation, l'amputation et la perte d'un œil doivent être déclarées dans les 24 heures." },
      { objective: "O6", q: "Quel numéro de téléphone permet de joindre l'OSHA ?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) est le numéro de l'OSHA ; 1-800-669-4000 est celui de l'EEOC." },
      { objective: "O6", q: "On vous a retiré du planning parce que vous avez signalé un danger. Selon la loi fédérale, déposez une plainte de lanceur d'alerte dans les :", options: ["Un an", "Il n'y a pas de délai", "Cinq ans", "30 jours"], answer: 3, why: "Le délai fédéral pour les plaintes de représailles liées à la sécurité est de 30 jours." },
      { objective: "O6", q: "À qui s'adresse surtout l'OSHA 30 ?", options: ["Seulement aux chauffeurs de camion", "Aux superviseurs et aux travailleurs qui ont des responsabilités de sécurité", "Aux enfants", "Aux personnes qui veulent une licence d'électricien"], answer: 1, why: "L'OSHA 30 donne une formation plus poussée aux superviseurs et aux rôles de sécurité." },
      { objective: "O6", q: "Qu'est-ce qui est vrai pour les cartes OSHA 10 et 30 ?", options: ["Ce sont des licences", "N'importe qui peut en imprimer une", "Ce sont des cartes de formation volontaire que seuls les formateurs autorisés peuvent délivrer", "Elles n'expirent jamais nulle part"], answer: 2, why: "Ce ne sont pas des certifications, et seuls les formateurs autorisés délivrent de vraies cartes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      7,
      9,
      11,
      13,
      14,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Dangers repérés",
        objective: "O1",
        notYet: "Moins de cinq dangers, ou des types manquants ou faux.",
        meets: "Au moins cinq dangers, chacun avec le bon type.",
        exceeds: "Indique aussi quels dangers corriger tout de suite et lesquels signaler."
      },
      {
        name: "EPI et corrections",
        objective: "O2",
        notYet: "Aucun EPI ni correction, ou un équipement qui ne correspond pas au danger.",
        meets: "Chaque danger a un EPI ou une correction qui lui correspond.",
        exceeds: "Propose un moyen de supprimer le danger avant de compter sur les EPI."
      },
      {
        name: "Fiche de données de sécurité",
        objective: "O4",
        notYet: "Aucun produit chimique, ou les mauvaises sections de la FDS.",
        meets: "Nomme les sections 2, 4 et 8 pour un produit chimique et ce que chacune contient.",
        exceeds: "Note aussi la mention d'avertissement et les pictogrammes de l'étiquette."
      },
      {
        name: "Signalement",
        objective: "O5",
        notYet: "Personne à qui signaler, ou étapes en cas de blessure manquantes.",
        meets: "Nomme à qui signaler chaque danger et liste dans l'ordre les étapes en cas de blessure.",
        exceeds: "Les étapes en cas de blessure incluent d'écrire quoi, quand, où et qui l'a vu."
      },
      {
        name: "Droits et formation",
        objective: "O6",
        notYet: "Ne dit pas si OSHA 10 ou OSHA 30 convient.",
        meets: "Choisit OSHA 10 ou OSHA 30 et donne une raison adaptée à son poste.",
        exceeds: "Explique aussi comment déposer une plainte auprès de l'OSHA si un danger n'est pas corrigé."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent à un cours OSHA 10 ou OSHA 30 auprès d'un formateur autorisé dans les 90 jours",
      "Apprenants qui trouvent ou gardent un emploi dans un métier manuel dans les 90 jours (questionnaire de suivi)",
      "Les partenaires de l'emploi signalent moins de blessures ou plus de dangers signalés parmi les participants au programme"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour lire les leçons",
      "Une pièce à parcourir pour la tournée des dangers : la maison, une réserve ou un lieu de travail (avec autorisation)",
      "Un produit de nettoyage ménager avec une étiquette, et internet pour trouver sa fiche de données de sécurité",
      "Du papier et un stylo pour le rapport sur les dangers",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites d'abord une tournée des dangers en groupe dans la salle de formation, puis laissez les apprenants faire la leur.",
      "Entraînez-vous à soulever uniquement avec un carton léger ; personne ne monte sur une échelle ni ne soulève de charge lourde pendant la formation.",
      "Ne laissez jamais les apprenants ouvrir ou mélanger des produits chimiques pendant la pratique ; ils lisent seulement l'étiquette et la FDS.",
      "Rappelez aux apprenants que ce cours ne remplace pas une carte OSHA 10 ou OSHA 30 ni la formation de leur employeur.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
