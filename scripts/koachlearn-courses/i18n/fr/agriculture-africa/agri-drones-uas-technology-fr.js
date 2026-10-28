"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-uas-technology.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO et UIT : E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-fr",
  lang: "fr",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Drones agricoles : technologie UAS et maintenance",
  skills: "Nommer les parties d'un système de drone et leur rôle, Entretenir les batteries lithium-polymère en sécurité, Choisir et manipuler les charges utiles, Faire les inspections avant et après le vol, Tenir un calendrier et des registres de maintenance, Diagnostiquer les pannes courantes",
  outcome: "expliquer le rôle de chaque partie d'un système de drone agricole, entretenir ses batteries et ses charges utiles en sécurité, et mener un programme de maintenance avec des inspections, un calendrier, des étapes de diagnostic et des registres complets pour un drone.",
  about: [
    "Ce cours s'adresse aux pilotes de drones, aux techniciens, aux entreprises de services par drone, au personnel des agro-entreprises et des plantations, et aux jeunes qui veulent garder les drones agricoles en état de voler en sécurité au Kenya, au Nigeria et partout en Afrique.",
    "Le chapitre 1 ouvre le système de drone : structure, moteurs et hélices, contrôleur de vol et capteurs, liaison radio et station au sol, batteries et charges utiles comme les caméras et les systèmes de pulvérisation. Le chapitre 2 porte sur la maintenance : inspections quotidiennes, maintenance programmée, réparation des pannes courantes, mises à jour du micrologiciel, registres, et maintien des drones en état de marche dans la poussière, la chaleur, la pluie et là où l'électricité est peu fiable.",
    "Suivez toujours d'abord le manuel du fabricant et votre manuel d'exploitation ; ce cours enseigne les compétences générales qui se trouvent derrière. Les autorités de l'aviation attendent des exploitants qu'ils entretiennent leurs aéronefs et tiennent des registres : une bonne maintenance, c'est à la fois la sécurité et la conformité. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez un programme de maintenance pour un drone agricole (réel ou d'exemple, comme un multirotor de cartographie utilisé par une coopérative) : une liste des pièces avec le rôle de chacune, une procédure d'entretien et de charge des batteries, une liste de vérification avant et après le vol, un calendrier de maintenance par heures de vol et par date, un tableau de diagnostic pour au moins cinq pannes courantes, et un modèle de registre de maintenance avec deux exemples d'entrées.",
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne un système de drone agricole",
      lessons: [
        {
          title: "Les parties d'un système de drone",
          minutes: 6,
          goal: "Nommer les principales parties d'un système de drone et expliquer leur rôle.",
          text: [
            "Les autorités parlent d'un système (UAS ou RPAS) parce que l'aéronef n'en est qu'une partie. Le système comprend l'aéronef, la station au sol (radiocommande, téléphone ou tablette, logiciel), la liaison radio entre les deux (souvent appelée liaison de commande et de contrôle, ou C2), les batteries et chargeurs, et la charge utile (caméra, capteur ou système de pulvérisation).",
            "Sur l'aéronef : la structure (corps et bras, ou ailes) ; les moteurs et les hélices qui créent la portance ; les contrôleurs électroniques de vitesse (ESC) qui disent à chaque moteur à quelle vitesse tourner ; le contrôleur de vol, le cerveau du drone ; et les capteurs : GNSS (positionnement par satellite comme le GPS), boussole, centrale inertielle (IMU) qui détecte l'inclinaison et les mouvements, baromètre pour la hauteur, et souvent des capteurs d'obstacles.",
            "Le contrôleur de vol lit les capteurs des centaines de fois par seconde et ajuste chaque moteur pour garder le drone stable et sur sa route. Si un capteur donne de mauvaises données, comme une boussole près d'un objet métallique, tout le drone peut se comporter bizarrement. C'est pourquoi l'étalonnage et le choix soigneux du lieu de décollage comptent."
          ],
          words: [["Structure", "le corps, les bras ou les ailes du drone."], ["ESC", "contrôleur électronique de vitesse : règle la vitesse de rotation de chaque moteur."], ["Contrôleur de vol", "l'ordinateur de bord du drone qui le garde stable et sur sa route."], ["GNSS", "systèmes mondiaux de navigation par satellite, comme le GPS, utilisés pour la position."], ["IMU", "centrale inertielle : détecte l'inclinaison, les rotations et les mouvements."], ["Liaison C2", "liaison de commande et de contrôle : la connexion radio entre la radiocommande et le drone."]],
          slides: [
            { title: "Un système, pas seulement un aéronef", bullets: ["L'aéronef", "Station au sol : radiocommande, téléphone, logiciel", "Liaison radio C2", "Batteries et charge utile"] },
            { title: "Sur l'aéronef", bullets: ["Structure, moteurs, hélices", "Les ESC commandent chaque moteur", "Contrôleur de vol : le cerveau"] },
            { title: "Les capteurs", bullets: ["GNSS pour la position, boussole pour la direction", "IMU pour l'inclinaison et les mouvements", "Baromètre pour la hauteur, capteurs d'obstacles"] },
            { title: "Pourquoi c'est important", bullets: ["Mauvaises données = comportement bizarre", "Étalonnez et choisissez bien le lieu de décollage"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Prenez un drone (ou une photo ou un schéma clair d'un drone) et étiquetez au moins huit parties : structure, moteurs, hélices, emplacement du contrôleur de vol, module GNSS, caméra ou charge utile, batterie, radiocommande. À côté de chacune, écrivez son rôle en une ligne.",
          youCanNow: "nommer les parties d'un système de drone et dire le rôle de chacune."
        },
        {
          title: "Les batteries : la partie qui demande le plus de soin",
          minutes: 6,
          goal: "Charger, stocker, transporter et mettre au rebut les batteries de drone en sécurité.",
          text: [
            "La plupart des drones utilisent des batteries lithium-polymère (LiPo) ou d'autres batteries au lithium. Elles stockent beaucoup d'énergie pour leur poids, et c'est aussi pourquoi elles peuvent prendre feu si elles sont abîmées, trop chargées, trop déchargées ou surchauffées. L'entretien des batteries est la tâche de maintenance la plus importante.",
            "Chargez seulement avec le bon chargeur, sur une surface non inflammable, jamais sans surveillance, et jamais une batterie gonflée, percée ou chaude. Laissez une batterie refroidir après le vol avant de la charger, et laissez-la revenir à une température normale avant de voler. Ne laissez pas les batteries dans une voiture chaude ou en plein soleil dans le champ.",
            "Pour un stockage de plus de quelques jours, gardez les batteries à la charge de stockage (partiellement chargées, ni pleines ni vides ; beaucoup de batteries intelligentes le font seules), dans un endroit frais et sec, idéalement dans un sac ou une boîte ignifuge. Suivez le nombre de cycles et l'état de chaque batterie. Retirez du service les batteries gonflées ou abîmées et déposez-les dans un vrai point de collecte des déchets électroniques ou des piles, jamais dans le feu ou les ordures ordinaires. Transporter des batteries en avion obéit aux règles propres à chaque compagnie aérienne."
          ],
          steps: ["Numérotez chaque batterie et notez ses cycles.", "Chargez avec le bon chargeur, sur une surface non inflammable, sous surveillance.", "Ne chargez et ne faites jamais voler une batterie gonflée, percée ou chaude.", "Gardez les batteries hors des voitures chaudes et du plein soleil.", "Stockez-les à la charge de stockage dans un contenant frais, sec et ignifuge.", "Déposez les batteries abîmées dans un vrai point de collecte."],
          words: [["LiPo", "batterie lithium-polymère : légère et puissante, mais peut prendre feu si elle est maltraitée."], ["Cycle de charge", "une utilisation complète de la capacité d'une batterie, de pleine à vide et retour."], ["Charge de stockage", "un niveau de charge partiel qui garde les batteries au lithium en bonne santé quand on ne s'en sert pas."], ["Déchets électroniques", "les déchets d'appareils électroniques, qui demandent une collecte et un recyclage spéciaux."]],
          slides: [
            { title: "De la puissance avec un risque", bullets: ["LiPo : beaucoup d'énergie pour son poids", "Peut prendre feu si abîmée ou maltraitée", "Les batteries, tâche numéro un"] },
            { title: "Règles de charge", bullets: ["Bon chargeur, surface non inflammable", "Jamais sans surveillance", "Jamais gonflée, percée ou chaude"] },
            { title: "Chaleur et stockage", bullets: ["Ni voiture chaude ni plein soleil", "Charge de stockage, au frais et au sec", "Sac ou boîte ignifuge"] },
            { title: "Suivre et retirer", bullets: ["Numérotez les batteries, notez les cycles", "Retirez celles qui sont gonflées ou abîmées", "Déposez-les dans un vrai point de collecte"] }
          ],
          tryIt: "Rédigez une procédure batteries d'une page pour une équipe de drones : numérotation, charge, manipulation au champ par forte chaleur, stockage, registre des cycles et mise au rebut. Ajoutez un tableau de suivi des batteries avec des colonnes pour le numéro de batterie, la date, les cycles, l'état et des notes.",
          youCanNow: "charger, stocker, transporter et mettre au rebut les batteries de drone en sécurité, et tenir un registre des batteries."
        },
        {
          title: "Les charges utiles : caméras, capteurs et systèmes de pulvérisation",
          minutes: 5,
          goal: "Manipuler, monter et entretenir les principales charges utiles des drones agricoles.",
          text: [
            "La charge utile, c'est ce que le drone transporte pour faire le travail. Les drones de cartographie portent une caméra RVB (RGB en anglais), souvent sur une nacelle qui la garde stable. Les drones de suivi de la santé des cultures peuvent porter une caméra multispectrale avec un capteur de lumière solaire et un panneau d'étalonnage. Les caméras thermiques mesurent la chaleur. Les drones de pulvérisation portent un réservoir, une pompe, des tuyaux et des buses, et certains épandent des granulés ou des semences.",
            "Prenez soin de l'optique : gardez les objectifs et le capteur de lumière solaire propres avec un chiffon doux pour objectif, protégez-les avec des capuchons, et gardez les caméras à l'abri de la poussière et de l'humidité. Vérifiez que la nacelle bouge librement et que la charge utile est bien fixée ; une charge mal fixée perturbe l'équilibre et le contrôleur de vol.",
            "Les systèmes de pulvérisation demandent plus de soin : après chaque usage, ils sont rincés et nettoyés comme l'exigent le fabricant et l'étiquette du pesticide, les buses sont vérifiées pour l'usure et les bouchages, et tout le système est étalonné pour appliquer la bonne quantité. N'oubliez pas que la pulvérisation par drone demande des autorisations aériennes et phytosanitaires ; la maintenance ne les remplace pas."
          ],
          words: [["Charge utile", "l'équipement que le drone transporte pour faire le travail, comme une caméra ou un réservoir de pulvérisation."], ["Nacelle", "un support motorisé (gimbal) qui garde la caméra stable."], ["Capteur de lumière solaire", "un petit capteur sur le dessus de certains drones multispectraux qui mesure la lumière reçue pour corriger les mesures."], ["Buse", "l'embout qui transforme le liquide en gouttelettes."]],
          slides: [
            { title: "Charges utiles courantes", bullets: ["Caméra RVB sur nacelle", "Multispectrale avec capteur de lumière solaire", "Caméra thermique", "Réservoir, pompe, buses ; épandeurs"] },
            { title: "Prendre soin de l'optique", bullets: ["Nettoyez objectifs et capteurs avec un chiffon doux", "Capuchons, loin de la poussière et de l'humidité", "Nacelle libre, fixation serrée"] },
            { title: "Systèmes de pulvérisation", bullets: ["Rincez et nettoyez selon le fabricant et l'étiquette", "Vérifiez l'usure et le bouchage des buses", "Étalonnez le débit ; autorisations toujours nécessaires"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Choisissez une charge utile (caméra RVB, caméra multispectrale ou système de pulvérisation). Rédigez une liste d'entretien d'au moins six points pour avant et après chaque utilisation.",
          youCanNow: "monter, nettoyer et vérifier les principales charges utiles des drones agricoles."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne un système de drone agricole",
        questions: [
          { q: "Pourquoi parle-t-on d'un système (UAS ou RPAS) pour un drone ?", options: ["Cela sonne mieux", "Il comprend l'aéronef, la station au sol, la liaison radio, les batteries et la charge utile", "Il a beaucoup d'hélices", "Il est fabriqué en usine"], answer: 1, why: "C'est l'ensemble des parties qui fait fonctionner le drone." },
          { q: "Que détecte l'IMU ?", options: ["L'inclinaison, les rotations et les mouvements", "L'humidité du sol", "Le prix des cultures", "La couleur de la batterie"], answer: 0, why: "L'IMU détecte les mouvements du drone pour que le contrôleur de vol le stabilise." },
          { q: "Une batterie est légèrement gonflée après un vol. Vous devez :", options: ["La charger vite", "L'aplatir en appuyant", "Voler encore une fois avec", "Arrêter de l'utiliser et la mettre au rebut en sécurité"], answer: 3, why: "Le gonflement est un signe de dommage et de risque d'incendie." },
          { q: "Où stocker les batteries de drone pour une longue pause ?", options: ["Pleines, dans une voiture chaude", "Vides, en plein soleil", "À la charge de stockage, dans un contenant frais, sec et ignifuge", "Dans le feu de la cuisine"], answer: 2, why: "La charge de stockage et la fraîcheur gardent les batteries au lithium sûres et en bonne santé." },
          { q: "À quoi sert une nacelle ?", options: ["À garder la caméra stable", "À charger la batterie", "À pulvériser le pesticide", "À mesurer la hauteur"], answer: 0, why: "Une nacelle stabilise la caméra pour des images nettes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La maintenance au champ et à l'atelier",
      lessons: [
        {
          title: "Les inspections avant et après chaque vol",
          minutes: 5,
          goal: "Faire une inspection avant et après le vol et noter ce que vous trouvez.",
          text: [
            "Les inspections repèrent les petits problèmes avant qu'ils ne causent un accident. L'inspection avant le vol vérifie que le drone est apte à voler maintenant ; l'inspection après le vol trouve les dommages ou l'usure du vol qui vient d'avoir lieu et prépare le lendemain.",
            "Avant le vol : structure et bras sans fissures, bras verrouillés ; hélices propres, serrées, sans éclats ni fissures ; moteurs qui tournent librement sans grincer ; charge utile fixée et objectif propre ; batterie bien en place et verrouillée ; capteurs et fenêtres de vision propres ; radiocommande et application prêtes ; état du micrologiciel vérifié avant de quitter la base.",
            "Après le vol : laissez refroidir les moteurs et les batteries ; vérifiez la chaleur des moteurs (un moteur anormalement chaud est peut-être en train de lâcher) ; cherchez de nouveaux dommages, de la poussière ou de l'herbe dans les moteurs et les aérations ; nettoyez le drone avec une brosse douce ou un chiffon sec (pas de jet d'eau sur l'électronique) ; notez le temps de vol, les problèmes et les messages d'alerte dans le registre."
          ],
          steps: ["Avant le vol : structure, bras, hélices, moteurs, charge utile, batterie, capteurs, radiocommande.", "Ne volez que si chaque point est bon.", "Après le vol : refroidissement, chaleur des moteurs, dommages et saleté.", "Nettoyez avec une brosse douce ou un chiffon sec.", "Notez le temps de vol, les problèmes et les alertes."],
          words: [["Inspection", "une vérification soigneuse pour trouver des dommages, de l'usure ou des pannes."], ["Micrologiciel", "le logiciel intégré au drone, à la radiocommande et aux batteries (firmware en anglais)."]],
          slides: [
            { title: "Deux inspections", bullets: ["Avant le vol : apte à voler maintenant ?", "Après le vol : dommages ou usure du jour ?"] },
            { title: "Avant le vol", bullets: ["Structure, bras verrouillés, hélices intactes", "Moteurs libres, charge utile fixée", "Batterie verrouillée, capteurs propres, appli prête"] },
            { title: "Après le vol", bullets: ["Refroidissement ; chaleur des moteurs", "Dommages, poussière, herbe dans moteurs et aérations", "Nettoyage à sec ; notez temps, problèmes, alertes"] }
          ],
          tryIt: "Rédigez une liste de vérification avant le vol et une après le vol, d'au moins huit points chacune, pour un drone de cartographie. Si vous avez un drone, utilisez-les une fois et notez les résultats.",
          youCanNow: "inspecter un drone avant et après chaque vol et noter ce que vous trouvez."
        },
        {
          title: "Maintenance programmée, micrologiciel et registres",
          minutes: 5,
          goal: "Fixer un calendrier de maintenance par heures de vol et par date, et tenir des registres de maintenance.",
          text: [
            "Certaines pièces s'usent avec l'usage. Les hélices, les moteurs, les roulements, les nacelles, le train d'atterrissage, les pompes et les buses de pulvérisation doivent être remplacés selon un calendrier. Le manuel du fabricant donne les intervalles ; votre manuel d'exploitation fixe votre propre calendrier. Planifiez par heures de vol (par exemple toutes les 50 heures) et par date (par exemple tous les trois mois), selon ce qui arrive en premier.",
            "Les mises à jour du micrologiciel corrigent des erreurs et ajoutent des fonctions de sécurité, mais une mise à jour peut aussi changer le comportement du drone. Lisez les notes de version, faites la mise à jour avant de quitter la base (pas au champ), mettez à jour ensemble le drone, la radiocommande et les batteries, et testez avec un court vol avant un vrai travail.",
            "Tenez un registre de maintenance pour chaque drone : date, heures de vol, ce qui a été inspecté, remplacé ou réparé, pièces utilisées, version du micrologiciel, qui l'a fait, et le résultat. Les autorités attendent des exploitants qu'ils entretiennent leurs aéronefs et tiennent des registres ; les clients et les assureurs peuvent aussi les demander."
          ],
          steps: ["Lisez les intervalles de maintenance du fabricant.", "Écrivez votre calendrier par heures de vol et par date.", "Planifiez les mises à jour à la base, après lecture des notes de version, avec un vol d'essai.", "Tenez un registre de maintenance pour chaque drone.", "Gardez en stock des hélices de rechange et les pièces courantes."],
          words: [["Maintenance programmée", "des vérifications et remplacements de pièces prévus à intervalles fixes."], ["Registre de maintenance", "le relevé de toute la maintenance faite sur un drone."], ["Notes de version", "la description, par le fabricant, de ce que change une mise à jour logicielle."]],
          slides: [
            { title: "Les pièces s'usent", bullets: ["Hélices, moteurs, roulements, nacelle", "Train d'atterrissage, pompes, buses", "Remplacement selon un calendrier"] },
            { title: "Heures et date", bullets: ["Par exemple toutes les 50 heures ou tous les 3 mois", "Selon ce qui arrive en premier", "Suivez le manuel du fabricant"] },
            { title: "Micrologiciel en sécurité", bullets: ["Lisez les notes de version", "Mise à jour à la base, tout ensemble", "Vol d'essai avant un vrai travail"] },
            { title: "Registre de maintenance", bullets: ["Date, heures, travaux, pièces, micrologiciel", "Qui l'a fait et le résultat", "Pour la sécurité, les autorités, les clients, les assureurs"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Faites un tableau de calendrier de maintenance pour un drone avec au moins six éléments (hélices, moteurs, nacelle, train d'atterrissage, batteries, micrologiciel), chacun avec un intervalle en heures et en mois, et commencez un registre de maintenance avec un exemple d'entrée.",
          youCanNow: "planifier la maintenance programmée et les mises à jour du micrologiciel, et tenir un vrai registre de maintenance."
        },
        {
          title: "Diagnostic des pannes et conditions de terrain en Afrique",
          minutes: 6,
          goal: "Diagnostiquer pas à pas les pannes courantes et protéger les drones de la poussière, de la chaleur, de la pluie et des coupures de courant.",
          text: [
            "Diagnostiquez une étape à la fois : lisez le message d'alerte dans l'application, vérifiez d'abord les causes les plus simples, changez une seule chose, et testez. Pannes courantes : erreur de boussole (éloignez-vous du métal, des véhicules et des lignes électriques, puis réétalonnez si on vous le demande) ; GNSS faible (attendez plus de satellites, éloignez-vous des grands arbres) ; vibrations ou oscillations (cherchez une hélice abîmée ou desserrée ou un bras tordu) ; erreur moteur (cherchez de l'herbe, du sable ou un moteur abîmé) ; temps de vol courts (batterie vieillissante, chaleur ou charge utile lourde).",
            "La poussière et le sable entrent dans les moteurs et les nacelles : décollez depuis un tapis ou une bâche, nettoyez après le vol et rangez le drone dans une mallette fermée. La chaleur réduit la durée de vie des batteries et peut faire surchauffer l'électronique : mettez les batteries et la radiocommande à l'ombre, volez aux heures plus fraîches, et laissez le drone se reposer entre les vols. La pluie et l'humidité abîment l'électronique, sauf si le drone est conçu pour cela : ne volez pas sous la pluie, séchez le matériel et rangez-le avec des sachets absorbeurs d'humidité.",
            "Là où l'électricité est peu fiable, planifiez la charge : un onduleur branché sur un véhicule ou un kit de charge solaire, assez de batteries pour la journée, et la charge de nuit à la base. Sachez quand arrêter : si une panne se répète ou touche la sécurité, interdisez le drone de vol et envoyez-le au centre de service du fabricant ou à un technicien qualifié."
          ],
          steps: ["Lisez le message d'alerte exact.", "Vérifiez d'abord les causes les plus simples.", "Changez une seule chose à la fois, puis testez.", "Utilisez un tapis de décollage ; nettoyez et rangez le drone en mallette après un travail poussiéreux.", "Batteries à l'ombre ; volez aux heures fraîches ; pas de vol sous la pluie sauf drone conçu pour.", "Interdisez le drone de vol si une panne de sécurité se répète."],
          words: [["Diagnostic", "trouver pas à pas la cause d'une panne."], ["Étalonnage", "une procédure qui remet à zéro un capteur, comme la boussole, pour qu'il mesure correctement."], ["Interdit de vol", "qui ne peut pas voler avant d'être réparé."]],
          slides: [
            { title: "Diagnostiquer pas à pas", bullets: ["Lisez l'alerte", "Les causes simples d'abord", "Changez une chose, puis testez"] },
            { title: "Pannes courantes", bullets: ["Erreur de boussole : loin du métal, réétalonnez", "Oscillations : hélices ou bras", "Vols courts : vieille batterie, chaleur, charge lourde"] },
            { title: "Poussière, chaleur et pluie", bullets: ["Tapis, nettoyage, mallette fermée", "Batteries à l'ombre, heures fraîches", "Pas de pluie sauf drone conçu pour ; séchez et rangez"] },
            { title: "Électricité et limites", bullets: ["Charge par véhicule ou solaire, batteries de rechange", "Interdisez de vol si une panne de sécurité se répète"] }
          ],
          tryIt: "Exercice final : rédigez le programme de maintenance d'un drone : liste des pièces avec leur rôle, procédure batteries, listes de vérification avant et après le vol, calendrier par heures et par date, tableau de diagnostic pour au moins cinq pannes, et modèle de registre de maintenance avec deux exemples d'entrées.",
          youCanNow: "diagnostiquer les pannes courantes des drones, les protéger dans les conditions de terrain africaines, et mener un programme de maintenance complet."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La maintenance au champ et à l'atelier",
        questions: [
          { q: "Une hélice a un petit éclat sur le bord. Vous devez :", options: ["Voler prudemment", "La scotcher", "La remplacer avant de voler", "La poncer et voler"], answer: 2, why: "Une hélice abîmée cause des vibrations et peut casser en vol." },
          { q: "Après un vol, un moteur est beaucoup plus chaud que les autres. Cela peut vouloir dire :", options: ["Que le moteur lâche ou est bloqué", "Que le drone a bien volé", "Que la caméra est sale", "Que la batterie est neuve"], answer: 0, why: "Une chaleur inhabituelle peut signaler un roulement abîmé, des débris ou un moteur qui lâche." },
          { q: "Quand installer une mise à jour du micrologiciel ?", options: ["Au milieu du champ d'un client", "Pendant un vol", "Jamais", "À la base, après lecture des notes de version, puis vol d'essai"], answer: 3, why: "Les mises à jour peuvent changer le comportement ; testez avant un vrai travail." },
          { q: "L'application affiche une erreur de boussole au décollage. Une bonne première étape est de :", options: ["Décoller quand même", "S'éloigner du métal, des véhicules et des lignes électriques et réétalonner si demandé", "Retirer la boussole", "Voler en mode sport"], answer: 1, why: "Le métal et les sources magnétiques perturbent la boussole." },
          { q: "Comment protéger un drone de la poussière dans une ferme sèche ?", options: ["Décoller depuis un tapis, nettoyer après le vol, ranger en mallette fermée", "Le laver au tuyau", "Voler plus près du sol", "Le laisser à découvert"], answer: 0, why: "La poussière abîme moteurs et nacelles ; tapis, nettoyage et mallette aident." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones agricoles : technologie UAS et maintenance",
    questions: [
      { q: "La liaison C2 est :", options: ["Un type de batterie", "La connexion radio entre la radiocommande et le drone", "Une taille d'hélice", "Un objectif de caméra"], answer: 1, why: "La liaison de commande et de contrôle transporte les ordres et les données." },
      { q: "Les ESC commandent :", options: ["Le zoom de la caméra", "Le stockage des batteries", "La vitesse de rotation de chaque moteur", "Les satellites GPS"], answer: 2, why: "Les contrôleurs électroniques de vitesse pilotent les moteurs." },
      { q: "Le contrôleur de vol est :", options: ["Le cerveau embarqué du drone qui le garde stable", "La personne qui pilote", "Le boîtier de radiocommande", "L'aire d'atterrissage"], answer: 0, why: "Il lit les capteurs et ajuste les moteurs de nombreuses fois par seconde." },
      { q: "Le GNSS donne au drone :", options: ["Sa couleur", "Sa température", "Son niveau de batterie", "Sa position grâce aux satellites"], answer: 3, why: "Le GNSS, comme le GPS, donne la position." },
      { q: "Le baromètre d'un drone mesure :", options: ["La direction du vent", "La pression de l'air, utilisée pour la hauteur", "La santé des cultures", "Les cycles de batterie"], answer: 1, why: "La pression de l'air change avec la hauteur." },
      { q: "Pourquoi les batteries LiPo peuvent-elles être dangereuses ?", options: ["Elles sont lourdes", "Elles sont bruyantes", "Elles peuvent prendre feu si elles sont abîmées, trop chargées ou surchauffées", "Elles ne se chargent jamais"], answer: 2, why: "Beaucoup d'énergie stockée signifie un risque élevé en cas de mauvais traitement." },
      { q: "Les batteries doivent être chargées :", options: ["Avec le bon chargeur, sous surveillance, sur une surface non inflammable", "La nuit sur un lit", "Dans une voiture chaude", "Avec n'importe quel chargeur qui s'adapte"], answer: 0, why: "Ces mesures réduisent le risque d'incendie." },
      { q: "Un cycle de charge, c'est :", options: ["Une pièce de vélo", "Un plan de vol", "Un type de météo", "Une utilisation complète de la capacité d'une batterie"], answer: 3, why: "Noter les cycles montre le vieillissement de la batterie." },
      { q: "Une batterie de drone abîmée et retirée du service doit aller :", options: ["Dans le feu de cuisine", "Dans un vrai point de collecte des déchets électroniques ou des piles", "Dans les ordures ordinaires", "Dans une rivière"], answer: 1, why: "Les batteries au lithium demandent une collecte et un recyclage sûrs." },
      { q: "Le capteur de lumière solaire d'un drone multispectral :", options: ["Charge la batterie", "Mesure le vent", "Mesure la lumière reçue pour corriger les mesures", "Pulvérise de l'eau"], answer: 2, why: "Il aide à corriger les variations de lumière." },
      { q: "Une charge utile mal fixée peut :", options: ["Perturber l'équilibre et le contrôle du drone", "Améliorer les photos", "Alléger le drone", "Accélérer la charge"], answer: 0, why: "Le contrôleur de vol attend une charge fixée et équilibrée." },
      { q: "Les buses de pulvérisation doivent être vérifiées pour :", options: ["Leur couleur", "Les autocollants de marque", "La musique", "L'usure et les bouchages"], answer: 3, why: "Des buses usées ou bouchées appliquent une mauvaise quantité." },
      { q: "Un bon entretien du système de pulvérisation remplace-t-il les autorisations de pulvérisation ?", options: ["Oui", "Non ; les autorisations aériennes et phytosanitaires restent nécessaires", "Seulement dans les petites fermes", "Seulement la nuit"], answer: 1, why: "La maintenance et l'autorisation légale sont deux exigences distinctes." },
      { q: "L'inspection après le vol sert à :", options: ["Charger la radiocommande", "Planifier le prochain client", "Trouver les dommages ou l'usure du vol qui vient d'avoir lieu", "Retoucher les photos"], answer: 2, why: "Elle repère les problèmes avant le vol suivant." },
      { q: "Comment nettoyer un drone après un vol poussiéreux ?", options: ["Brosse douce ou chiffon sec", "Eau à haute pression", "Papier de verre", "Essence"], answer: 0, why: "L'eau et les produits chimiques peuvent abîmer l'électronique." },
      { q: "La maintenance programmée se planifie :", options: ["Seulement selon la couleur", "Seulement selon la météo", "Seulement selon le client", "Par heures de vol et par date, selon ce qui arrive en premier"], answer: 3, why: "Les pièces s'usent avec l'usage et avec le temps." },
      { q: "Un registre de maintenance contient :", options: ["Seulement le prix du drone", "Date, heures, travaux, pièces, micrologiciel, qui l'a fait, résultat", "Les numéros de téléphone des agriculteurs", "Les prix des cultures"], answer: 1, why: "Des registres complets soutiennent la sécurité et la conformité." },
      { q: "Le drone oscille en vol. Vérifiez d'abord :", options: ["La carte du client", "La météo du mois prochain", "Les hélices et les bras : dommages ou jeu", "La carte mémoire"], answer: 2, why: "Des hélices abîmées et des bras tordus causent des vibrations." },
      { q: "Par très forte chaleur, vous devez :", options: ["Mettre les batteries à l'ombre et voler aux heures fraîches", "Laisser les batteries au soleil", "Voler sans arrêt sans repos", "Charger les batteries encore chaudes"], answer: 0, why: "La chaleur réduit la durée de vie des batteries et fatigue l'électronique." },
      { q: "Une panne de sécurité revient malgré vos réparations. Vous devez :", options: ["Continuer à voler", "La cacher aux clients", "Masquer l'alerte", "Interdire le drone de vol et l'envoyer à un technicien qualifié"], answer: 3, why: "Une panne de sécurité répétée demande une réparation experte avant de voler." }
    ]
  }
};
