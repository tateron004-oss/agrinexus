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
  chapters: [
    {
      name: "Chapitre 1 : Repérer et prévenir les dangers",
      lessons: [
        {
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
          youCanNow: "parcourir une zone, repérer les dangers par type, et décider s'il faut corriger ou signaler chacun."
        },
        {
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
          youCanNow: "choisir, vérifier et porter les bons EPI pour une tâche, et savoir qu'ils sont la dernière ligne de défense."
        },
        {
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
          youCanNow: "prévenir les glissades, les trébuchements et les chutes, utiliser une échelle en sécurité, et soulever une charge de la bonne façon."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Repérer et prévenir les dangers",
        questions: [
          { q: "Vous voyez un câble électrique en travers d'un passage. Quel type de danger est-ce ?", options: ["Produit chimique", "Bruit", "Glissade, trébuchement ou chute", "Chaleur"], answer: 2, why: "Les câbles en travers des passages font trébucher." },
          { q: "Que faire d'un petit liquide renversé que vous pouvez nettoyer sans risque ?", options: ["Le contourner", "Le nettoyer, signaler le sol s'il est mouillé, et prévenir votre superviseur", "Le couvrir avec une boîte", "Attendre l'équipe suivante"], answer: 1, why: "Corriger tout de suite les petits dangers et les signaler évite les blessures." },
          { q: "Quel EPI convient pour un travail avec un souffleur de feuilles bruyant ?", options: ["Une protection auditive", "Seulement un casque de chantier", "Un harnais antichute", "Rien"], answer: 0, why: "La protection auditive protège contre le bruit fort." },
          { q: "Pourquoi dit-on que les EPI sont la dernière ligne de défense ?", options: ["Ce sont les plus chers", "Ils sont facultatifs", "Ils empêchent toujours toutes les blessures", "Il vaut mieux d'abord supprimer le danger"], answer: 3, why: "Supprimer ou protéger un danger protège tout le monde ; l'EPI ne protège que celui qui le porte." },
          { q: "Quelle est une bonne habitude pour soulever ?", options: ["Tordre le dos pour tourner", "Tenir la charge loin du corps", "Plier les genoux, garder la charge contre soi et tourner avec les pieds", "Soulever seul les charges lourdes pour gagner du temps"], answer: 2, why: "Ainsi l'effort porte sur les jambes, pas sur le dos." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Produits chimiques, blessures et vos droits",
      lessons: [
        {
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
          youCanNow: "lire l'étiquette d'un produit chimique et trouver les dangers, les EPI et les premiers secours dans sa fiche de données de sécurité."
        },
        {
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
          youCanNow: "réagir à une blessure, la signaler correctement et à temps, et savoir ce que votre employeur doit déclarer."
        },
        {
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
          youCanNow: "expliquer votre droit à un travail sûr, déposer une plainte auprès de l'OSHA, et choisir entre OSHA 10 et OSHA 30."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Produits chimiques, blessures et vos droits",
        questions: [
          { q: "Quelle section d'une fiche de données de sécurité vous indique les EPI à porter ?", options: ["Section 1", "Section 4", "Section 16", "Section 8"], answer: 3, why: "La section 8 traite des contrôles de l'exposition et de la protection individuelle." },
          { q: "Sur l'étiquette d'un produit chimique, quelle mention indique le danger le plus grave ?", options: ["Danger", "Attention (Warning)", "Prudence (Caution)", "Avis (Notice)"], answer: 0, why: "\"Danger\" est utilisé pour les dangers plus graves ; \"Attention\" pour les moins graves." },
          { q: "Vous vous faites une petite coupure au travail. Que devez-vous faire ?", options: ["La cacher", "Attendre qu'elle s'aggrave", "Prévenir tout de suite votre superviseur et noter ce qui s'est passé", "Démissionner"], answer: 2, why: "Signalez tôt chaque blessure, même petite." },
          { q: "Dans quel délai un employeur doit-il signaler à l'OSHA un décès lié au travail ?", options: ["30 jours", "8 heures", "Une semaine", "Il n'est pas obligé"], answer: 1, why: "La règle de l'OSHA est de 8 heures pour un décès." },
          { q: "Qu'est-ce que l'OSHA 10 ?", options: ["Une licence d'électricien obligatoire", "Une amende", "Un cours de sécurité volontaire de 10 heures pour les travailleurs débutants", "Une étiquette de produit chimique"], answer: 2, why: "C'est un cours du programme Outreach avec une carte de fin de cours, pas une licence." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la sécurité au travail (OSHA)",
    questions: [
      { q: "Qu'est-ce qu'un danger ?", options: ["Tout ce qui au travail pourrait causer une blessure ou une maladie", "Une affiche de sécurité", "Un type d'EPI", "Une salle de pause"], answer: 0, why: "Un danger est une source possible de dommage." },
      { q: "Pendant une tournée des dangers, \"regarder en haut\" veut dire vérifier :", options: ["Le sol, pour les liquides renversés", "Votre téléphone", "Les étagères hautes, les charges suspendues et les échelles", "L'heure"], answer: 2, why: "Ce qui est en hauteur peut tomber ou causer des chutes." },
      { q: "Le protecteur d'une machine a été enlevé. Vous devez :", options: ["L'utiliser avec prudence", "Ne pas l'utiliser, éloigner les gens et le signaler", "Mettre la main dedans pour vérifier", "L'ignorer"], answer: 1, why: "Les protecteurs manquants causent des blessures graves ; signalez et restez à distance." },
      { q: "Quels gants porter avec un produit de nettoyage chimique ?", options: ["N'importe quels gants", "Pas de gants", "Des gants anticoupure", "Le type indiqué par la fiche de données de sécurité"], answer: 3, why: "La FDS indique la bonne protection pour ce produit." },
      { q: "Avant d'utiliser un appareil respiratoire, il vous faut :", options: ["Rien", "Un essai d'ajustement et une formation", "Seulement un coup d'œil rapide", "Le masque d'un collègue"], answer: 1, why: "Un appareil respiratoire doit être bien étanche et bien utilisé." },
      { q: "Qui doit en général fournir les EPI obligatoires ?", options: ["L'employeur", "Le travailleur", "Un collègue", "Personne"], answer: 0, why: "Selon les règles de l'OSHA, l'employeur doit en général fournir les EPI obligatoires." },
      { q: "Quelle est une bonne façon de prévenir les glissades ?", options: ["Laisser les liquides renversés pour plus tard", "Porter des chaussures à semelle lisse", "Éteindre la lumière", "Nettoyer tout de suite et poser un panneau \"sol mouillé\""], answer: 3, why: "Un nettoyage rapide et un avertissement évitent les chutes." },
      { q: "Sur une échelle, \"trois points d'appui\" veut dire :", options: ["Trois personnes tiennent l'échelle", "Trois échelles ensemble", "Deux mains et un pied, ou deux pieds et une main, sur l'échelle", "Se tenir sur les trois dernières marches"], answer: 2, why: "Cela vous garde stable pendant que vous montez." },
      { q: "Dans le bâtiment, la hauteur générale de l'OSHA pour la protection contre les chutes est :", options: ["6 pieds (environ 1,8 m)", "1 pied (environ 30 cm)", "20 pieds (environ 6 m)", "Il n'y a pas de règle"], answer: 0, why: "Dans le bâtiment, le seuil général est de 6 pieds ; dans l'industrie en général, il est de 4 pieds (environ 1,2 m)." },
      { q: "Une boîte est lourde et encombrante. Que faites-vous ?", options: ["La soulever vite", "Vous tordre en la soulevant", "Demander de l'aide ou utiliser un chariot ou un diable", "La porter loin du corps"], answer: 2, why: "L'aide ou le matériel évitent les blessures au dos." },
      { q: "Que veut dire le sigle anglais SDS (en français FDS) ?", options: ["Bon de livraison standard", "Planning des tâches du personnel", "Panneau de service d'équipe", "Fiche de données de sécurité"], answer: 3, why: "Une fiche de données de sécurité décrit les dangers d'un produit chimique et son usage sûr." },
      { q: "Quelle section de la FDS donne les premiers secours ?", options: ["Section 2", "Section 4", "Section 16", "Section 8"], answer: 1, why: "La section 4 liste les mesures de premiers secours." },
      { q: "Pourquoi ne faut-il jamais mélanger l'eau de Javel et l'ammoniaque ?", options: ["Ils coûtent plus cher", "Ils perdent leur odeur", "Ils tachent le sol", "Ils produisent un gaz toxique"], answer: 3, why: "Les mélanger dégage un gaz dangereux." },
      { q: "Un collègue est gravement blessé. Quelle est la première étape ?", options: ["Appeler le 911 ou le numéro d'urgence du site", "Finir votre tâche", "Publier une photo", "Le déplacer tout de suite"], answer: 0, why: "Les secours d'urgence d'abord ; ne le déplacez pas sauf s'il est en danger." },
      { q: "Pourquoi signaler même une petite blessure ?", options: ["Pour avoir un jour de congé", "Ce n'est pas nécessaire", "Pour être soigné, protéger vos droits à l'indemnisation et corriger le danger", "Pour accuser quelqu'un"], answer: 2, why: "Un signalement rapide vous protège, vous et les autres." },
      { q: "Un travailleur perd un œil dans un accident du travail. L'employeur doit prévenir l'OSHA dans les :", options: ["8 heures", "24 heures", "Un an", "30 jours"], answer: 1, why: "L'hospitalisation, l'amputation et la perte d'un œil doivent être déclarées dans les 24 heures." },
      { q: "Quel numéro de téléphone permet de joindre l'OSHA ?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) est le numéro de l'OSHA ; 1-800-669-4000 est celui de l'EEOC." },
      { q: "On vous a retiré du planning parce que vous avez signalé un danger. Selon la loi fédérale, déposez une plainte de lanceur d'alerte dans les :", options: ["Un an", "Il n'y a pas de délai", "Cinq ans", "30 jours"], answer: 3, why: "Le délai fédéral pour les plaintes de représailles liées à la sécurité est de 30 jours." },
      { q: "À qui s'adresse surtout l'OSHA 30 ?", options: ["Seulement aux chauffeurs de camion", "Aux superviseurs et aux travailleurs qui ont des responsabilités de sécurité", "Aux enfants", "Aux personnes qui veulent une licence d'électricien"], answer: 1, why: "L'OSHA 30 donne une formation plus poussée aux superviseurs et aux rôles de sécurité." },
      { q: "Qu'est-ce qui est vrai pour les cartes OSHA 10 et 30 ?", options: ["Ce sont des licences", "N'importe qui peut en imprimer une", "Ce sont des cartes de formation volontaire que seuls les formateurs autorisés peuvent délivrer", "Elles n'expirent jamais nulle part"], answer: 2, why: "Ce ne sont pas des certifications, et seuls les formateurs autorisés délivrent de vraies cartes." }
    ]
  }
};
