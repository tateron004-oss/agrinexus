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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes (du collège aux jeunes adultes) curieux des robots, du code ou des métiers du numérique, à l'école, dans des activités après l'école, des bibliothèques ou des maisons de jeunes.",
    startingPoint: "Ils savent utiliser un ordinateur, un Chromebook ou une tablette et un navigateur web, et ont déjà vu des robots en vidéo ou en magasin. La plupart n'ont jamais écrit de programme ni planifié un algorithme.",
    gap: "Les robots et l'automatisation se développent dans les entrepôts, les usines, les fermes et les hôpitaux, et les métiers de technicien et de programmeur demandent des personnes qui savent planifier des étapes, coder, tester et corriger. Les apprenants ont besoin d'une première réussite pratique avec un robot virtuel pour prendre confiance et voir un chemin vers ces métiers.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau collège)",
      "Appareils : un ordinateur, un Chromebook ou une tablette avec un navigateur web ; aucun vrai robot n'est nécessaire",
      "Temps : des leçons de 5 minutes, environ 60 minutes en tout",
      "Les versions et fonctions des outils gratuits peuvent changer ; utilisez celui que l'école ou la bibliothèque préfère",
      "Sécurité : les vrais robots industriels ne s'utilisent qu'après une formation à la sécurité du site"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'exemples de vraies machines", action: "repérer lesquelles sont des robots, de l'automatisation ou utilisent l'IA, et décrire la boucle percevoir-décider-agir", standard: "en ayant au moins 4 réponses justes sur 5" },
    { id: "O2", condition: "À partir d'une tâche qu'un robot doit accomplir", action: "choisir les capteurs et les actionneurs dont il a besoin", standard: "avec une raison pour chaque pièce" },
    { id: "O3", condition: "À partir d'une tâche de robot", action: "écrire un algorithme avec des mots simples, des étapes précises, une boucle et une décision si-alors", standard: "pour qu'il marche quand vous le suivez vous-même pas à pas" },
    { id: "O4", condition: "Avec un outil de robot virtuel gratuit comme VEXcode VR", action: "programmer le robot avec des blocs pour qu'il roule en carré", standard: "pour qu'il revienne près de son point de départ" },
    { id: "O5", condition: "À partir d'un robot qui doit éviter un mur", action: "ajouter au programme un si-alors basé sur un capteur et corriger au moins un bogue", standard: "en changeant une seule chose à la fois jusqu'à ce que le robot s'arrête et tourne devant le mur" },
    { id: "O6", condition: "À partir d'un lieu de travail qui utilise des robots", action: "citer de vrais métiers liés aux robots et les règles de sécurité à respecter autour d'eux", standard: "en citant au moins deux métiers et deux règles de sécurité" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les robots et l'automatisation",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "distinguer automatisation, robots et IA, et décrire n'importe quel robot avec percevoir-décider-agir.",
          quickCheck: [
            { objective: "O1", q: "Que fait un robot à l'étape « agir » de percevoir-décider-agir ?", options: ["Il bouge ou fait quelque chose avec des moteurs, des roues ou des pinces", "Il mesure le monde avec des capteurs", "Il décide quoi faire grâce à un programme", "Il s'éteint"], answer: 0, why: "Agir, c'est bouger ou faire quelque chose avec des moteurs, des roues, des bras ou des pinces." },
            { objective: "O1", q: "Un ami dit que tous les robots utilisent l'IA. Que lui répondez-vous ?", options: ["C'est vrai : les robots ne peuvent pas marcher sans IA", "L'IA veut dire qu'un robot a des roues", "Beaucoup de robots suivent des règles simples ; seuls certains utilisent l'IA", "Les robots et l'IA sont la même chose"], answer: 2, why: "Beaucoup de robots suivent des règles simples ; certains utilisent l'IA pour voir, planifier un trajet ou comprendre la parole." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "choisir les capteurs et actionneurs dont un robot a besoin pour une tâche.",
          quickCheck: [
            { objective: "O2", q: "Quelle pièce est un actionneur ?", options: ["Une caméra", "Une pince", "Un contacteur", "Un capteur de ligne"], answer: 1, why: "Les actionneurs font bouger ou agir le robot ; une pince attrape les objets." },
            { objective: "O2", q: "Vous concevez un robot qui suit une ligne noire au sol. Quel capteur ajoutez-vous ?", options: ["Un GPS", "Un contacteur", "Un micro", "Un capteur de ligne ou de couleur"], answer: 3, why: "Un capteur de ligne ou de couleur regarde le sol et peut suivre une ligne." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "écrire un algorithme clair avec une boucle et une décision si-alors, et le tester sur papier.",
          quickCheck: [
            { objective: "O3", q: "Que fait une boucle dans un algorithme ?", options: ["Elle arrête le robot", "Elle choisit entre deux actions", "Elle répète un groupe d'étapes", "Elle mesure une distance"], answer: 2, why: "Une boucle répète des étapes, comme avancer et tourner quatre fois pour faire un carré." },
            { objective: "O3", q: "Votre plan dit « avancer un peu ». Que changez-vous avant de programmer ?", options: ["Donner une valeur précise, comme 50 centimètres", "Rien : le robot devinera", "Ajouter plus d'étapes après", "Supprimer l'étape"], answer: 0, why: "Un robot ne peut pas deviner : chaque étape a besoin d'une valeur précise." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les robots et l'automatisation",
        questions: [
          { objective: "O1", q: "Quelles sont les trois étapes que tout robot répète ?", options: ["Acheter, construire, vendre", "Démarrer, arrêter, mettre en pause", "Percevoir, décider, agir", "Charger, rouler, se garer"], answer: 2, why: "Les robots perçoivent, décident avec un programme, puis agissent, et recommencent." },
          { objective: "O2", q: "Quelle pièce est un capteur ?", options: ["Un capteur de distance", "Un moteur de roue", "Une pince", "Une batterie"], answer: 0, why: "Un capteur de distance recueille de l'information ; moteurs et pinces sont des actionneurs." },
          { objective: "O2", q: "Un robot doit trier des boîtes rouges et des boîtes bleues. De quoi a-t-il le plus besoin ?", options: ["D'un GPS", "D'un haut-parleur plus fort", "Seulement d'une plus grosse batterie", "D'un capteur de couleur et d'une pince"], answer: 3, why: "Il doit voir la couleur et saisir les boîtes." },
          { objective: "O3", q: "Quelle instruction est assez claire pour un robot ?", options: ["« Avance un peu »", "« Avance de 50 centimètres »", "« Tourne à peu près à droite »", "« Fais le truc »"], answer: 1, why: "Les robots ont besoin de quantités précises." },
          { objective: "O3", q: "« Répéter 4 fois : avancer, tourner à droite de 90 degrés » utilise :", options: ["Un capteur", "Une boucle", "Une pince", "Un mot de passe"], answer: 1, why: "Une boucle répète des étapes ; celle-ci trace un carré." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Programmer et utiliser des robots",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "programmer un robot virtuel avec des blocs, en utilisant une boucle pour tracer un carré.",
          quickCheck: [
            { objective: "O4", q: "En programmation par blocs, que fait le bouton Start ?", options: ["Il efface vos blocs", "Il enregistre votre programme sur une clé USB", "Il ouvre un nouveau terrain", "Il lance le programme pour que vous regardiez le robot le suivre"], answer: 3, why: "Appuyer sur Start lance le programme sur le terrain virtuel." },
            { objective: "O4", q: "Vous avez ajouté cinq nouveaux blocs d'un coup et le robot se cogne. Qu'auriez-vous dû faire ?", options: ["Ajouter encore plus de blocs", "Lancer le programme après chaque changement", "Utiliser un vrai robot à la place", "Désactiver le capteur"], answer: 1, why: "Lancer le programme après chaque changement montre quel bloc a causé quoi." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "utiliser une mesure de capteur dans un si-alors-sinon pour faire réagir un robot, et déboguer le programme.",
          quickCheck: [
            { objective: "O5", q: "Dans le programme qui évite le mur, pourquoi utiliser une boucle infinie ?", options: ["Pour que le robot vérifie le capteur encore et encore", "Pour que le robot ne vérifie qu'une seule fois", "Pour que le programme ne démarre jamais", "Pour que le robot roule en carré"], answer: 0, why: "La boucle infinie répète la vérification du capteur : c'est percevoir-décider-agir en code." },
            { objective: "O5", q: "Votre robot s'arrête à 1 mètre du mur au lieu de tout près. Quel bogue est probable ?", options: ["Le robot a besoin d'une nouvelle batterie", "Le terrain est cassé", "La distance est dans la mauvaise unité", "Le mur est trop haut"], answer: 2, why: "Une distance dans la mauvaise unité, comme des centimètres au lieu de millimètres, est un bogue courant." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "programmer un robot virtuel qui perçoit et réagit, expliquer comment il fonctionne, et citer de vrais métiers liés aux robots et des règles de sécurité.",
          quickCheck: [
            { objective: "O6", q: "Qui répare et entretient les robots dans une usine ou un entrepôt ?", options: ["Un caissier", "Un technicien en robotique", "Un livreur", "Un client"], answer: 1, why: "Les techniciens en robotique réparent et entretiennent les robots." },
            { objective: "O6", q: "Vous visitez un entrepôt et voyez des robots bouger derrière une ligne marquée au sol. Que faites-vous ?", options: ["Passer la ligne pour regarder de plus près", "Toucher un robot pour voir s'il s'arrête", "Appuyer sur des boutons au hasard", "Rester hors de la zone balisée et suivre les règles de sécurité du guide"], answer: 3, why: "Les robots industriels peuvent bouger vite et frapper fort : on reste donc hors des zones balisées." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Programmer et utiliser des robots",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un simulateur ?", options: ["Un vrai robot", "Un type de capteur", "Une batterie de robot", "Un logiciel qui se comporte comme une vraie machine pour s'entraîner"], answer: 3, why: "Un simulateur permet de s'entraîner sans risque, sans la vraie machine." },
          { objective: "O4", q: "Quel bloc fait répéter des étapes au robot ?", options: ["Répéter", "Arrêter", "Démarrer", "Afficher"], answer: 0, why: "Un bloc répéter crée une boucle." },
          { objective: "O5", q: "Quel programme permet à un robot d'éviter un mur ?", options: ["Avancer sans fin sans aucune vérification", "Tourner à droite une fois", "En boucle : si le mur est proche, s'arrêter et tourner ; sinon avancer", "S'arrêter dès le départ"], answer: 2, why: "Le si-alors-sinon utilise le capteur pour réagir." },
          { objective: "O5", q: "Votre robot tourne un peu trop à chaque fois. Quelle est la meilleure façon de déboguer ?", options: ["Supprimer tout le programme", "Changer cinq blocs à la fois", "Abandonner", "Modifier un peu l'angle du virage et relancer"], answer: 3, why: "On change une chose à la fois et on teste." },
          { objective: "O6", q: "Que doit faire un travailleur avant de réparer un robot industriel ?", options: ["Entrer dedans pendant qu'il tourne", "Demander au robot de s'arrêter", "Suivre la formation sécurité et couper l'alimentation", "Éteindre la lumière"], answer: 2, why: "Couper l'alimentation et suivre la formation protègent les personnes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à la robotique, à l'IA et à l'automatisation",
    questions: [
      { objective: "O1", q: "Un lave-vaisselle qui fait son cycle est un exemple :", options: ["De cobot", "D'automatisation", "De capteur", "De logigramme"], answer: 1, why: "Il fait une tâche fixe tout seul une fois lancé." },
      { objective: "O1", q: "Qu'est-ce qui fait d'une machine un robot ?", options: ["Elle peut percevoir son environnement et y agir", "Elle coûte cher", "Elle a un écran", "Elle utilise l'électricité"], answer: 0, why: "Les robots perçoivent le monde et y agissent." },
      { objective: "O1", q: "Dans percevoir-décider-agir, la partie « décider » est faite par :", options: ["Les roues", "La batterie", "Le programme", "La peinture"], answer: 2, why: "Le programme choisit quoi faire." },
      { objective: "O1", q: "Tous les robots utilisent-ils l'IA ?", options: ["Non, beaucoup suivent des règles simples", "Oui, toujours", "Seulement les aspirateurs robots", "Seulement dans les films"], answer: 0, why: "Beaucoup de robots utilisent des programmes à règles simples." },
      { objective: "O2", q: "Lequel est un actionneur ?", options: ["Une caméra", "Un contacteur", "Un GPS", "Un moteur"], answer: 3, why: "Les moteurs font bouger le robot." },
      { objective: "O2", q: "Un servomoteur est :", options: ["Un capteur de distance", "Un moteur qui tourne jusqu'à un angle précis", "Un chargeur de batterie", "Un type de boucle"], answer: 1, why: "Les servomoteurs servent aux articulations qui demandent des angles précis." },
      { objective: "O2", q: "Un robot doit savoir quand il touche quelque chose. Quel capteur convient ?", options: ["Un haut-parleur", "Un contacteur", "Une lumière colorée", "Une horloge"], answer: 1, why: "Un contacteur détecte le contact." },
      { objective: "O3", q: "Un algorithme est :", options: ["Une marque de robot", "Un type de moteur", "Une règle de sécurité", "Une liste d'étapes précises pour accomplir une tâche"], answer: 3, why: "Les algorithmes sont des plans étape par étape." },
      { objective: "O3", q: "Pourquoi tester un algorithme d'abord sur papier ?", options: ["Pour trouver les erreurs avant de programmer", "Parce que les robots ont besoin de papier", "Pour le rendre plus long", "C'est obligatoire par la loi"], answer: 0, why: "Le dérouler soi-même révèle tôt les erreurs." },
      { objective: "O3", q: "« Si le mur est proche, s'arrêter ; sinon avancer » est :", options: ["Une boucle", "Une pince", "Une décision si-alors", "Un terrain"], answer: 2, why: "Elle choisit entre deux actions selon une condition." },
      { objective: "O3", q: "Un logigramme montre un algorithme avec :", options: ["Des notes de musique", "Des photos", "Des mots de passe", "Des cases et des flèches"], answer: 3, why: "Les logigrammes dessinent les étapes en cases reliées par des flèches." },
      { objective: "O4", q: "La programmation par blocs consiste à :", options: ["Taper seulement du long code", "Bloquer des sites web", "Emboîter des blocs visuels pour programmer", "Construire avec des cubes en bois"], answer: 2, why: "Les blocs sont des morceaux de code visuels." },
      { objective: "O4", q: "Combien de fois répéter « avancer, tourner à droite de 90 » pour faire un carré ?", options: ["2", "3", "4", "10"], answer: 2, why: "Un carré a quatre côtés et quatre virages." },
      { objective: "O4", q: "Pourquoi lancer le programme après chaque petit changement ?", options: ["Pour savoir quel changement a causé quoi", "Pour user plus de batterie", "Parce que c'est obligatoire", "Pour supprimer des blocs"], answer: 0, why: "Avancer par petites étapes rend les problèmes faciles à trouver." },
      { objective: "O5", q: "Une boucle infinie :", options: ["S'exécute une fois", "Éteint le robot", "Se répète jusqu'à l'arrêt du programme", "Est un capteur"], answer: 2, why: "Elle se répète encore et encore." },
      { objective: "O5", q: "Déboguer veut dire :", options: ["Trouver et corriger les erreurs d'un programme", "Enlever les insectes d'un robot", "Acheter un nouveau robot", "Éteindre les capteurs"], answer: 0, why: "Les bogues sont des erreurs de programme." },
      { objective: "O5", q: "Votre robot ne s'arrête jamais devant le mur. Quel bogue est probable ?", options: ["Le robot n'est pas de la bonne couleur", "L'écran est trop lumineux", "Le terrain est trop joli", "La vérification du capteur est hors de la boucle ou utilise la mauvaise distance"], answer: 3, why: "Une mauvaise place ou de mauvais chiffres dans la vérification du capteur sont des bogues fréquents." },
      { objective: "O6", q: "Lequel est un vrai métier lié aux robots ?", options: ["Voyant pour robots", "Technicien en robotique", "Seulement peintre de capteurs", "Il n'en existe aucun"], answer: 1, why: "Les techniciens installent, entretiennent et réparent les robots." },
      { objective: "O6", q: "Un cobot est :", options: ["Seulement un robot cuisinier", "Un robot conçu pour travailler près des personnes", "Un robot en panne", "Un robot sans capteurs"], answer: 1, why: "Les robots collaboratifs sont conçus pour travailler aux côtés des personnes." },
      { objective: "O6", q: "Vous voyez un bras robotisé rapide travailler derrière une ligne balisée. Que faites-vous ?", options: ["Entrer pour regarder de plus près", "Le toucher pour le tester", "Éteindre ses capteurs", "Rester hors de la zone balisée et suivre les règles de sécurité du site"], answer: 3, why: "Les zones balisées tiennent les personnes hors de la trajectoire du robot." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      12,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Programme du carré",
        objective: "O4",
        notYet: "Le robot ne roule pas en carré, ou le programme n'a pas de boucle.",
        meets: "Un bloc répéter fait rouler le robot en carré, qui se termine près du départ.",
        exceeds: "La distance et l'angle ont été ajustés pour que le carré soit net et régulier."
      },
      {
        name: "Programme qui évite le mur",
        objective: "O5",
        notYet: "Le robot heurte le mur ou ne bouge plus.",
        meets: "Une boucle infinie avec un si-alors-sinon : il s'arrête et tourne devant le mur, puis continue de rouler.",
        exceeds: "Le programme marche depuis plusieurs points de départ sur le terrain."
      },
      {
        name: "Test et débogage",
        objective: "O5",
        notYet: "Aucun bogue n'a été trouvé ni corrigé.",
        meets: "Au moins un bogue a été trouvé et corrigé en changeant une seule chose à la fois.",
        exceeds: "Sait expliquer ce qui a causé le bogue et comment il l'a trouvé."
      },
      {
        name: "Plan avant le code",
        objective: "O3",
        notYet: "Pas de plan écrit, ou des étapes comme « avancer un peu ».",
        meets: "Un plan en mots simples avec des étapes précises, une boucle et un si-alors.",
        exceeds: "Le plan a été suivi pas à pas sur papier et corrigé avant de programmer."
      },
      {
        name: "Percevoir, décider, agir expliqués",
        objective: "O1",
        notYet: "Les trois phrases manquent ou ne nomment aucun capteur.",
        meets: "Trois phrases disent ce que le robot perçoit, comment il décide et comment il agit.",
        exceeds: "Dit aussi si le robot utilise l'IA ou des règles simples, et pourquoi."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui rejoignent un club de robotique, un cours de code ou un programme scientifique et technique dans les 60 jours",
      "Apprenants qui commencent un autre cours numérique de Koach Learn dans les 30 jours",
      "Apprenants qui disent être intéressés par un parcours de technicien en robotique, de programmeur ou d'ingénieur (questionnaire de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur, un Chromebook ou une tablette avec un navigateur web et internet",
      "Un outil de robot virtuel gratuit comme VEXcode VR (vr.vex.com), ou celui que l'école ou la bibliothèque préfère",
      "Du papier et un stylo pour les algorithmes et les organigrammes",
      "Environ 60 minutes en tout, en courtes séances : leçons, exercices de programmation, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; montrez les premiers blocs sur un écran partagé.",
      "Faites jouer un algorithme : un apprenant lit les étapes et un autre les suit exactement en marchant, pour montrer pourquoi les étapes doivent être précises.",
      "Mettez les apprenants par deux pour déboguer : l'un lance le programme, l'autre cherche l'erreur.",
      "Si vous visitez un site avec de vrais robots, suivez les règles de sécurité du site et restez toujours avec le guide.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
