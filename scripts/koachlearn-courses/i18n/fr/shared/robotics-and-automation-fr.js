"use strict";

// Koach Learn course (shared), French translation of "Introduction to Robotics, AI and Automation". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "robotics-and-automation-fr",
  lang: "fr",
  translationOf: "robotics-and-automation",
  category: "Youth",
  name: "Introduction à la robotique, à l'IA et à l'automatisation",
  skills: "Expliquer percevoir-décider-agir, Associer capteurs et actionneurs, Écrire un algorithme, Programmer un robot virtuel avec des blocs, Utiliser un capteur pour décider, Tester et déboguer",
  outcome: "planifier et programmer un robot virtuel avec des blocs gratuits, pour qu'il suive un parcours, utilise un capteur pour éviter un mur, puis soit testé et corrigé jusqu'à ce qu'il fonctionne.",
  about: [
    "Les robots et l'automatisation sont présents dans les entrepôts, les fermes, les hôpitaux, les voitures et les maisons. Ce cours montre comment ils fonctionnent et vous permet d'en programmer un vous-même, sans robot à acheter et sans expérience en programmation.",
    "Il s'adresse aux jeunes curieux des métiers de la tech, aux anciens militaires qui ont travaillé avec des systèmes sans pilote ou en maintenance et cherchent une voie civile, et à toute personne qui veut comprendre les machines qui changent le monde du travail.",
    "Vous apprendrez l'idée percevoir-décider-agir, vous planifierez les mouvements d'un robot sur papier, puis vous programmerez un robot virtuel gratuit dans un navigateur web avec des blocs. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Dans un outil de robot virtuel gratuit comme VEXcode VR, écrivez un programme en blocs qui fait rouler le robot en carré, puis un second programme qui le fait avancer jusqu'à ce qu'un capteur détecte un mur, s'arrêter, tourner et continuer. Testez-le, corrigez au moins un bogue et écrivez trois phrases qui expliquent ce que le robot perçoit, comment il décide et comment il agit.",
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les robots et l'automatisation",
      lessons: [
        {
          title: "Robots, automatisation et IA : quelle différence ?",
          minutes: 4,
          goal: "Classer de vraies machines en robots, automatisation et IA, et expliquer percevoir-décider-agir.",
          text: [
            "L'automatisation, c'est quand une machine ou un programme fait une tâche tout seul une fois réglé, comme le cycle d'un lave-vaisselle ou un tapis roulant d'usine. Un robot est une machine qui peut percevoir le monde autour d'elle et s'y déplacer ou y agir, comme un aspirateur robot ou un robot d'entrepôt qui transporte des étagères.",
            "Tout robot suit la même boucle : percevoir, décider, agir. Il perçoit avec des capteurs (caméras, contacteurs, capteurs de distance), décide avec un programme informatique qui choisit quoi faire, et agit avec des moteurs, des roues, des bras ou des pinces. Puis il perçoit de nouveau.",
            "L'IA est un type de programme qui apprend des régularités à partir d'exemples, par exemple repérer une personne sur une image de caméra. Beaucoup de robots utilisent des règles simples, pas d'IA. Certains utilisent l'IA pour voir, planifier un trajet ou comprendre la parole."
          ],
          words: [["Automatisation", "une machine ou un programme qui fait une tâche tout seul une fois réglé."], ["Robot", "une machine qui peut percevoir son environnement et y agir."], ["Percevoir-décider-agir", "la boucle que suit tout robot : recueillir de l'information, décider, puis bouger ou agir."], ["IA", "intelligence artificielle : des programmes qui apprennent des régularités à partir d'exemples pour prendre des décisions."]],
          slides: [
            { title: "Automatisation ou robot", bullets: ["Automatisation : fait une tâche fixe toute seule", "Robot : perçoit son environnement et y agit"] },
            { title: "La boucle du robot", bullets: ["Percevoir : les capteurs recueillent l'information", "Décider : un programme choisit", "Agir : moteurs, roues ou bras bougent", "Puis percevoir de nouveau"] },
            { title: "La place de l'IA", bullets: ["L'IA apprend des régularités à partir d'exemples", "Beaucoup de robots suivent des règles simples, pas l'IA", "Certains utilisent l'IA pour voir, planifier ou écouter"] }
          ],
          tryIt: "Choisissez trois machines que vous avez vues (par exemple un aspirateur robot, une caisse automatique, un drone de livraison). Pour chacune, écrivez s'il s'agit d'automatisation ou d'un robot, et une façon dont elle perçoit, décide et agit.",
          youCanNow: "distinguer automatisation, robots et IA, et décrire n'importe quel robot avec percevoir-décider-agir."
        },
        {
          title: "Capteurs et actionneurs : les sens et les muscles du robot",
          minutes: 5,
          goal: "Associer les capteurs et actionneurs courants aux tâches qu'ils accomplissent.",
          text: [
            "Les capteurs sont les sens du robot. Un capteur de distance mesure à quelle distance se trouve un objet. Un contacteur sait quand le robot touche quelque chose. Une caméra voit des images. Un capteur de ligne ou de couleur voit le sol. Un GPS connaît la position en extérieur.",
            "Les actionneurs sont les muscles du robot : tout ce qui le fait bouger ou agir. Les moteurs font tourner les roues, les servomoteurs tournent les articulations à un angle précis, et les pinces ou ventouses saisissent les objets.",
            "Pour concevoir un robot, partez de la tâche. Un robot qui doit s'arrêter avant un mur a besoin d'un capteur de distance ou d'un contacteur et de moteurs de propulsion. Un robot qui trie des boîtes rouges et bleues a besoin d'un capteur de couleur et d'une pince."
          ],
          words: [["Capteur", "une pièce qui recueille de l'information, comme la distance, le toucher, la lumière ou des images."], ["Actionneur", "une pièce qui fait bouger ou agir le robot, comme un moteur ou une pince."], ["Servomoteur", "un moteur qui tourne jusqu'à un angle précis."]],
          slides: [
            { title: "Capteurs = sens", bullets: ["Distance, contacteur, caméra", "Capteur de ligne ou de couleur", "GPS pour la position en extérieur"] },
            { title: "Actionneurs = muscles", bullets: ["Les moteurs font tourner les roues", "Les servomoteurs tournent à un angle précis", "Les pinces saisissent les objets"] },
            { title: "Partir de la tâche", bullets: ["S'arrêter avant un mur : capteur de distance + moteurs", "Trier par couleur : capteur de couleur + pince"] }
          ],
          tryIt: "Concevez sur papier un robot pour une tâche, comme arroser des plantes ou porter une boîte d'un bout à l'autre d'une pièce. Listez les capteurs et actionneurs dont il a besoin, et pourquoi.",
          youCanNow: "choisir les capteurs et actionneurs dont un robot a besoin pour une tâche."
        },
        {
          title: "Écrire un algorithme avant de programmer",
          minutes: 5,
          goal: "Écrire un plan étape par étape, avec une boucle et une décision, qu'un robot pourrait suivre.",
          text: [
            "Un algorithme est une liste d'étapes précises pour accomplir une tâche. Les robots ne devinent pas, donc chaque étape doit être claire : « avancer de 50 centimètres » plutôt que « avancer un peu ».",
            "Deux outils rendent les algorithmes puissants. Une boucle répète des étapes, par exemple « répéter 4 fois : avancer, tourner à droite de 90 degrés » pour faire un carré. Une décision, aussi appelée si-alors, choisit quoi faire : « si le mur est à moins de 10 centimètres, alors s'arrêter ; sinon continuer d'avancer ».",
            "Écrivez-le d'abord en mots simples ou dessinez un logigramme. Puis suivez-le vous-même comme si vous étiez le robot. Si vous heurtez quelque chose sur le papier, le robot le heurtera aussi."
          ],
          steps: ["Écrivez l'objectif en une phrase.", "Listez chaque étape dans l'ordre, avec des quantités précises.", "Repérez les étapes qui se répètent et transformez-les en boucle.", "Ajoutez les décisions si-alors qui utilisent un capteur.", "Suivez-le vous-même pour le tester."],
          words: [["Algorithme", "une liste d'étapes précises pour accomplir une tâche."], ["Boucle", "un ensemble d'étapes qui se répète."], ["Si-alors", "une décision : si quelque chose est vrai, faire une chose ; sinon en faire une autre."], ["Logigramme", "un dessin d'algorithme avec des cases et des flèches."]],
          slides: [
            { title: "Un algorithme est précis", bullets: ["« Avancer de 50 cm », pas « avancer un peu »", "Les robots ne devinent pas"] },
            { title: "Boucles et décisions", bullets: ["Boucle : répéter 4 fois, avancer puis tourner à droite de 90", "Si le mur est à moins de 10 cm, s'arrêter ; sinon avancer"] },
            { title: "Tester d'abord sur papier", bullets: ["L'écrire ou dessiner un logigramme", "Le suivre comme si vous étiez le robot", "Le corriger avant de programmer"] }
          ],
          tryIt: "Écrivez un algorithme, avec une boucle, pour qu'un robot roule en carré. Puis ajoutez une étape si-alors pour qu'il s'arrête si quelque chose lui barre la route. Testez-le avec un jouet, un téléphone ou vos propres pieds.",
          youCanNow: "écrire un algorithme clair avec une boucle et une décision si-alors, et le tester sur papier."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les robots et l'automatisation",
        questions: [
          { q: "Quelles sont les trois étapes que tout robot répète ?", options: ["Acheter, construire, vendre", "Démarrer, arrêter, mettre en pause", "Percevoir, décider, agir", "Charger, rouler, se garer"], answer: 2, why: "Les robots perçoivent, décident avec un programme, puis agissent, et recommencent." },
          { q: "Quelle pièce est un capteur ?", options: ["Un capteur de distance", "Un moteur de roue", "Une pince", "Une batterie"], answer: 0, why: "Un capteur de distance recueille de l'information ; moteurs et pinces sont des actionneurs." },
          { q: "Un robot doit trier des boîtes rouges et des boîtes bleues. De quoi a-t-il le plus besoin ?", options: ["D'un GPS", "D'un haut-parleur plus fort", "Seulement d'une plus grosse batterie", "D'un capteur de couleur et d'une pince"], answer: 3, why: "Il doit voir la couleur et saisir les boîtes." },
          { q: "Quelle instruction est assez claire pour un robot ?", options: ["« Avance un peu »", "« Avance de 50 centimètres »", "« Tourne à peu près à droite »", "« Fais le truc »"], answer: 1, why: "Les robots ont besoin de quantités précises." },
          { q: "« Répéter 4 fois : avancer, tourner à droite de 90 degrés » utilise :", options: ["Un capteur", "Une boucle", "Une pince", "Un mot de passe"], answer: 1, why: "Une boucle répète des étapes ; celle-ci trace un carré." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Programmer et utiliser des robots",
      lessons: [
        {
          title: "Programmer un robot virtuel avec des blocs",
          minutes: 6,
          goal: "Ouvrir un robot virtuel gratuit et le programmer pour qu'il roule en carré.",
          text: [
            "Vous pouvez vous entraîner à programmer un robot dans un navigateur web, sans robot. VEXcode VR, de VEX Robotics, a une version gratuite qui utilise des blocs à glisser-déposer, comme Scratch, et fonctionne sur ordinateur, Chromebook et tablette à l'adresse vr.vex.com. Il existe d'autres options gratuites ; votre école ou votre bibliothèque en préfère peut-être une.",
            "Les blocs s'emboîtent comme des pièces de puzzle. Un bloc « avancer » fait bouger le robot, un bloc « tourner à droite » le fait tourner, et un bloc « répéter » crée une boucle. Vous appuyez sur Start pour voir le robot suivre votre programme dans un terrain virtuel.",
            "Transformez votre algorithme papier en blocs, une étape à la fois. Lancez-le après chaque changement pour savoir quel bloc a causé quoi."
          ],
          steps: ["Ouvrez vr.vex.com dans un navigateur web.", "Choisissez un terrain simple avec de l'espace libre au sol.", "Glissez un bloc avancer et un bloc tourner à droite dans le programme.", "Placez-les dans un bloc répéter réglé sur 4.", "Appuyez sur Start et observez. Ajustez la distance ou l'angle jusqu'à obtenir un carré net."],
          words: [["Programmation par blocs", "programmer en emboîtant des blocs visuels au lieu de taper du code."], ["Terrain (playground)", "l'espace virtuel où roule le robot simulé."], ["Simulateur", "un logiciel qui se comporte comme une vraie machine pour s'entraîner sans risque."]],
          slides: [
            { title: "S'entraîner sans robot", bullets: ["Programmation par blocs gratuite dans le navigateur", "VEXcode VR : vr.vex.com", "Fonctionne sur ordinateur, Chromebook et tablette"] },
            { title: "Les blocs s'emboîtent", bullets: ["Avancer, tourner à droite", "Bloc répéter = boucle", "Appuyer sur Start pour observer"] },
            { title: "Construire par petites étapes", bullets: ["Transformer le plan papier en blocs", "Lancer après chaque changement", "Ajuster jusqu'à ce que ça marche"] }
          ],
          sources: [{ name: "VEX Robotics : VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "Dans VEXcode VR ou un autre robot virtuel gratuit, programmez le robot pour qu'il roule en carré avec un bloc répéter. Faites-le terminer près de son point de départ.",
          youCanNow: "programmer un robot virtuel avec des blocs, en utilisant une boucle pour tracer un carré."
        },
        {
          title: "Utiliser un capteur pour décider, puis déboguer",
          minutes: 6,
          goal: "Ajouter une décision si-alors basée sur un capteur à un programme de robot et corriger un bogue.",
          text: [
            "Un robot qui suit seulement des étapes fixes est aveugle. Ajoutez un capteur et il peut réagir. En programmation par blocs, on utilise un bloc « si » avec une mesure du capteur à l'intérieur, comme « si la distance est inférieure à 100 millimètres ».",
            "Un modèle courant : une boucle infinie, et dedans un si-alors-sinon. Si le mur est proche, s'arrêter et tourner. Sinon, avancer. Le robot vérifie le capteur encore et encore : c'est la boucle percevoir-décider-agir en code.",
            "Les bogues sont normaux. Déboguer, c'est les trouver et les corriger. Changez une seule chose à la fois, lancez, et observez. Bogues fréquents : le virage n'est pas tout à fait de 90 degrés, la distance est dans la mauvaise unité, ou un bloc est placé hors de la boucle."
          ],
          steps: ["Ajoutez une boucle infinie.", "À l'intérieur, ajoutez un bloc si-alors-sinon.", "Mettez une vérification du capteur de distance dans le si.", "Alors : s'arrêter et tourner. Sinon : avancer.", "Lancez-le, repérez une erreur, changez une chose, relancez."],
          words: [["Bogue", "une erreur dans un programme qui le fait mal fonctionner."], ["Déboguer", "trouver et corriger les bogues."], ["Boucle infinie", "une boucle qui se répète jusqu'à ce qu'on arrête le programme."]],
          slides: [
            { title: "Les capteurs font réagir les robots", bullets: ["Utiliser un bloc si avec une mesure du capteur", "Exemple : si distance < 100 mm"] },
            { title: "Le modèle", bullets: ["Boucle infinie", "Si proche : s'arrêter et tourner", "Sinon : avancer"] },
            { title: "Déboguer", bullets: ["Changer une seule chose à la fois", "Vérifier les virages, les unités et la place des blocs", "Les bogues sont normaux"] }
          ],
          tryIt: "Programmez le robot pour qu'il avance jusqu'à ce que son capteur de distance détecte un mur, puis s'arrête, tourne et continue. Notez un bogue rencontré et comment vous l'avez corrigé.",
          youCanNow: "utiliser une mesure de capteur dans un si-alors-sinon pour faire réagir un robot, et déboguer le programme."
        },
        {
          title: "Où travaillent les robots, et travailler avec eux en sécurité",
          minutes: 5,
          goal: "Citer de vrais métiers liés aux robots et les règles de sécurité à respecter autour d'eux.",
          text: [
            "Les robots et l'automatisation sont utilisés dans les entrepôts (déplacer des étagères et des colis), les usines (soudure, emballage), les fermes (traite, pulvérisation, drones), les hôpitaux (livrer des fournitures, assister les chirurgiens) et l'armée (déminage, aéronefs sans pilote).",
            "Les humains font toujours des métiers importants : les techniciens en robotique réparent et entretiennent les robots, les opérateurs les font fonctionner et les surveillent, et les programmeurs et ingénieurs les conçoivent. Beaucoup de postes de technicien commencent par un certificat d'un établissement de formation technique ou par une formation militaire.",
            "La sécurité d'abord. Les robots industriels peuvent bouger vite et frapper fort. Les travailleurs restent hors des zones de robot balisées, utilisent l'arrêt d'urgence et coupent l'alimentation avant toute maintenance. Les robots collaboratifs, ou cobots, sont conçus pour travailler plus près des personnes, mais la même règle s'applique : suivez la formation sécurité du site."
          ],
          words: [["Technicien en robotique", "une personne qui installe, entretient et répare des robots."], ["Cobot", "un robot collaboratif conçu pour travailler près des personnes."], ["Arrêt d'urgence", "un gros bouton qui arrête une machine immédiatement."]],
          slides: [
            { title: "Où travaillent les robots", bullets: ["Entrepôts, usines, fermes", "Hôpitaux et armée"] },
            { title: "Des métiers avec les robots", bullets: ["Les techniciens les réparent et les entretiennent", "Les opérateurs les font fonctionner et les surveillent", "Programmeurs et ingénieurs les conçoivent"] },
            { title: "La sécurité d'abord", bullets: ["Rester hors des zones de robot balisées", "Connaître l'arrêt d'urgence", "Suivre la formation sécurité du site"] }
          ],
          tryIt: "Tâche finale : terminez votre programme du carré et votre programme avec capteur dans l'outil de robot virtuel, corrigez au moins un bogue et écrivez trois phrases qui expliquent ce que votre robot perçoit, comment il décide et comment il agit.",
          youCanNow: "programmer un robot virtuel qui perçoit et réagit, expliquer comment il fonctionne, et citer de vrais métiers liés aux robots et des règles de sécurité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Programmer et utiliser des robots",
        questions: [
          { q: "Qu'est-ce qu'un simulateur ?", options: ["Un vrai robot", "Un type de capteur", "Une batterie de robot", "Un logiciel qui se comporte comme une vraie machine pour s'entraîner"], answer: 3, why: "Un simulateur permet de s'entraîner sans risque, sans la vraie machine." },
          { q: "Quel bloc fait répéter des étapes au robot ?", options: ["Répéter", "Arrêter", "Démarrer", "Afficher"], answer: 0, why: "Un bloc répéter crée une boucle." },
          { q: "Quel programme permet à un robot d'éviter un mur ?", options: ["Avancer sans fin sans aucune vérification", "Tourner à droite une fois", "En boucle : si le mur est proche, s'arrêter et tourner ; sinon avancer", "S'arrêter dès le départ"], answer: 2, why: "Le si-alors-sinon utilise le capteur pour réagir." },
          { q: "Votre robot tourne un peu trop à chaque fois. Quelle est la meilleure façon de déboguer ?", options: ["Supprimer tout le programme", "Changer cinq blocs à la fois", "Abandonner", "Modifier un peu l'angle du virage et relancer"], answer: 3, why: "On change une chose à la fois et on teste." },
          { q: "Que doit faire un travailleur avant de réparer un robot industriel ?", options: ["Entrer dedans pendant qu'il tourne", "Demander au robot de s'arrêter", "Suivre la formation sécurité et couper l'alimentation", "Éteindre la lumière"], answer: 2, why: "Couper l'alimentation et suivre la formation protègent les personnes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à la robotique, à l'IA et à l'automatisation",
    questions: [
      { q: "Un lave-vaisselle qui fait son cycle est un exemple :", options: ["De cobot", "D'automatisation", "De capteur", "De logigramme"], answer: 1, why: "Il fait une tâche fixe tout seul une fois lancé." },
      { q: "Qu'est-ce qui fait d'une machine un robot ?", options: ["Elle peut percevoir son environnement et y agir", "Elle coûte cher", "Elle a un écran", "Elle utilise l'électricité"], answer: 0, why: "Les robots perçoivent le monde et y agissent." },
      { q: "Dans percevoir-décider-agir, la partie « décider » est faite par :", options: ["Les roues", "La batterie", "Le programme", "La peinture"], answer: 2, why: "Le programme choisit quoi faire." },
      { q: "Tous les robots utilisent-ils l'IA ?", options: ["Non, beaucoup suivent des règles simples", "Oui, toujours", "Seulement les aspirateurs robots", "Seulement dans les films"], answer: 0, why: "Beaucoup de robots utilisent des programmes à règles simples." },
      { q: "Lequel est un actionneur ?", options: ["Une caméra", "Un contacteur", "Un GPS", "Un moteur"], answer: 3, why: "Les moteurs font bouger le robot." },
      { q: "Un servomoteur est :", options: ["Un capteur de distance", "Un moteur qui tourne jusqu'à un angle précis", "Un chargeur de batterie", "Un type de boucle"], answer: 1, why: "Les servomoteurs servent aux articulations qui demandent des angles précis." },
      { q: "Un robot doit savoir quand il touche quelque chose. Quel capteur convient ?", options: ["Un haut-parleur", "Un contacteur", "Une lumière colorée", "Une horloge"], answer: 1, why: "Un contacteur détecte le contact." },
      { q: "Un algorithme est :", options: ["Une marque de robot", "Un type de moteur", "Une règle de sécurité", "Une liste d'étapes précises pour accomplir une tâche"], answer: 3, why: "Les algorithmes sont des plans étape par étape." },
      { q: "Pourquoi tester un algorithme d'abord sur papier ?", options: ["Pour trouver les erreurs avant de programmer", "Parce que les robots ont besoin de papier", "Pour le rendre plus long", "C'est obligatoire par la loi"], answer: 0, why: "Le dérouler soi-même révèle tôt les erreurs." },
      { q: "« Si le mur est proche, s'arrêter ; sinon avancer » est :", options: ["Une boucle", "Une pince", "Une décision si-alors", "Un terrain"], answer: 2, why: "Elle choisit entre deux actions selon une condition." },
      { q: "Un logigramme montre un algorithme avec :", options: ["Des notes de musique", "Des photos", "Des mots de passe", "Des cases et des flèches"], answer: 3, why: "Les logigrammes dessinent les étapes en cases reliées par des flèches." },
      { q: "La programmation par blocs consiste à :", options: ["Taper seulement du long code", "Bloquer des sites web", "Emboîter des blocs visuels pour programmer", "Construire avec des cubes en bois"], answer: 2, why: "Les blocs sont des morceaux de code visuels." },
      { q: "Combien de fois répéter « avancer, tourner à droite de 90 » pour faire un carré ?", options: ["2", "3", "4", "10"], answer: 2, why: "Un carré a quatre côtés et quatre virages." },
      { q: "Pourquoi lancer le programme après chaque petit changement ?", options: ["Pour savoir quel changement a causé quoi", "Pour user plus de batterie", "Parce que c'est obligatoire", "Pour supprimer des blocs"], answer: 0, why: "Avancer par petites étapes rend les problèmes faciles à trouver." },
      { q: "Une boucle infinie :", options: ["S'exécute une fois", "Éteint le robot", "Se répète jusqu'à l'arrêt du programme", "Est un capteur"], answer: 2, why: "Elle se répète encore et encore." },
      { q: "Déboguer veut dire :", options: ["Trouver et corriger les erreurs d'un programme", "Enlever les insectes d'un robot", "Acheter un nouveau robot", "Éteindre les capteurs"], answer: 0, why: "Les bogues sont des erreurs de programme." },
      { q: "Votre robot ne s'arrête jamais devant le mur. Quel bogue est probable ?", options: ["Le robot n'est pas de la bonne couleur", "L'écran est trop lumineux", "Le terrain est trop joli", "La vérification du capteur est hors de la boucle ou utilise la mauvaise distance"], answer: 3, why: "Une mauvaise place ou de mauvais chiffres dans la vérification du capteur sont des bogues fréquents." },
      { q: "Lequel est un vrai métier lié aux robots ?", options: ["Voyant pour robots", "Technicien en robotique", "Seulement peintre de capteurs", "Il n'en existe aucun"], answer: 1, why: "Les techniciens installent, entretiennent et réparent les robots." },
      { q: "Un cobot est :", options: ["Seulement un robot cuisinier", "Un robot conçu pour travailler près des personnes", "Un robot en panne", "Un robot sans capteurs"], answer: 1, why: "Les robots collaboratifs sont conçus pour travailler aux côtés des personnes." },
      { q: "Vous voyez un bras robotisé rapide travailler derrière une ligne balisée. Que faites-vous ?", options: ["Entrer pour regarder de plus près", "Le toucher pour le tester", "Éteindre ses capteurs", "Rester hors de la zone balisée et suivre les règles de sécurité du site"], answer: 3, why: "Les zones balisées tiennent les personnes hors de la trajectoire du robot." }
    ]
  }
};
