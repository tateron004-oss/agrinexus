"use strict";

// Koach Learn course, French translation of shared/intro-iot.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Code (Python, MicroPython, MQTT topic names) is kept exactly; US agency names (FTC, CISA) are kept and explained.

const FTC = { name: "FTC (agence américaine de protection des consommateurs) : sécuriser vos appareils connectés à la maison", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA (agence américaine de cybersécurité) : Secure Our World", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi, simulateur d'électronique en ligne", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot-fr",
  lang: "fr",
  translationOf: "intro-iot",
  category: "Veterans (military)",
  name: "Introduction à l'Internet des objets (IoT)",
  skills: "Expliquer le fonctionnement des systèmes IoT, Choisir des capteurs et des actionneurs, Comparer les façons de connecter les appareils, Écrire une règle d'alerte simple, Sécuriser les appareils connectés, Préparer un projet IoT",
  outcome: "préparer un projet simple de surveillance IoT, du capteur à l'alerte : choisir le capteur, l'appareil, la connexion et l'application, écrire la règle d'alerte en quelques lignes de code, et lister les étapes qui protègent les appareils.",
  about: [
    "L'Internet des objets (IoT, de l'anglais Internet of Things), ce sont des objets du quotidien avec des capteurs et une connexion internet : thermostats intelligents, sonnettes avec caméra, bracelets de sport, capteurs d'humidité du sol à la ferme, et traceurs sur les camions et les conteneurs. Les compétences IoT servent dans les métiers de la maintenance des bâtiments, de la logistique, de l'énergie, de l'agriculture et de la sécurité, et beaucoup d'anciens militaires connaissent déjà ces idées grâce aux capteurs, aux radios et à l'entretien du matériel.",
    "Ce cours explique comment fonctionne un système IoT, couche par couche, comment les appareils se parlent, comment une règle simple transforme une mesure en action, et comment éviter que les appareils connectés deviennent une porte d'entrée pour les attaquants. Vous n'avez pas besoin d'acheter de matériel. Une leçon montre comment essayer un appareil simulé dans votre navigateur.",
    "Chaque leçon dure environ cinq minutes et se termine par un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan d'une page pour un projet de surveillance IoT, comme une alerte de température pour un local serveur, un congélateur de banque alimentaire ou un jardin qui a besoin d'eau : nommez le capteur, l'appareil, sa connexion et où vont les données, dessinez le trajet des données du capteur à l'alerte, écrivez la règle d'alerte sous forme d'une courte instruction if en Python, et listez cinq étapes que vous suivrez pour sécuriser les appareils.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des anciens militaires et des militaires en transition qui explorent des métiers du numérique, comme le support informatique, la technique des bâtiments, le suivi logistique ou la cybersécurité. Beaucoup ont travaillé avec des radios, des capteurs, des véhicules ou du matériel dans l'armée.",
    startingPoint: "Ils sont à l'aise pour suivre des procédures, utiliser un ordinateur et un smartphone, et connaissent souvent les vérifications de matériel et les transmissions. La plupart n'ont jamais écrit de code ni installé un appareil connecté.",
    gap: "Les employeurs de la maintenance des bâtiments, de la logistique, de l'industrie et de l'informatique utilisent de plus en plus de capteurs connectés et attendent du personnel qu'il comprenne leur fonctionnement, sache régler des alertes simples et les garder en sécurité. Les apprenants doivent planifier un petit projet de surveillance de bout en bout pour montrer cette compétence et traduire leur expérience militaire vers des métiers civils du numérique.",
    constraints: [
      "Niveau de lecture : mots simples ; les termes techniques sont expliqués la première fois",
      "Appareils : un ordinateur avec un navigateur web pour le simulateur ; aucun matériel à acheter",
      "Temps : des leçons de 5 minutes, environ 60 minutes en tout",
      "Les fonctions et les comptes du simulateur peuvent changer ; les apprenants vérifient les conditions actuelles du site",
      "Réseaux de travail : ne jamais connecter un appareil sans l'accord du service informatique ou sécurité"
    ],
    prerequisites: "Aucun. Un premier cours de Python aide mais n'est pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'exemples à la maison, au travail et sur le terrain", action: "repérer des appareils IoT et expliquer l'intérêt et le risque de chacun", standard: "en nommant correctement au moins trois appareils" },
    { id: "O2", condition: "À partir d'un projet IoT comme une alarme de congélateur", action: "suivre les données du capteur à l'appareil, puis par la connexion jusqu'au cloud et à l'action", standard: "en nommant les quatre couches dans le bon ordre" },
    { id: "O3", condition: "En sachant où se trouve un appareil, son alimentation et la quantité de données qu'il envoie", action: "choisir une connexion adaptée et expliquer comment un protocole comme MQTT transporte ses messages", standard: "avec une raison qui tient compte de la portée, de l'alimentation et des données" },
    { id: "O4", condition: "À partir d'une mesure de capteur et d'une plage sûre", action: "écrire une règle d'alerte sous forme d'instruction if en Python qui évite les fausses alertes", standard: "pour que la règle donne le bon résultat avec des mesures de test" },
    { id: "O5", condition: "Avec un simulateur en ligne gratuit", action: "faire tourner un microcontrôleur simulé avec un capteur de température et tester votre règle d'alerte", standard: "en voyant l'alerte se déclencher quand vous changez la mesure" },
    { id: "O6", condition: "Pour chaque appareil connecté de votre plan", action: "lister les étapes qui gardent les appareils en sécurité", standard: "avec au moins cinq étapes justes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les systèmes IoT",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est l'Internet des objets",
          minutes: 4,
          goal: "Expliquer l'IoT et repérer les appareils IoT autour de vous.",
          text: [
            "L'Internet des objets (IoT), ce sont des objets physiques qui perçoivent le monde, se connectent à un réseau et partagent des données, souvent sans que personne ne tape quoi que ce soit. Un thermostat intelligent mesure la pièce et allume le chauffage. Un bracelet de sport compte les pas et les envoie à votre téléphone.",
            "L'IoT sert à la maison (sonnettes avec caméra, prises connectées, enceintes à commande vocale), au travail (des machines qui signalent quand elles ont besoin d'une réparation, c'est la maintenance prédictive), dans la logistique (traceurs GPS sur les camions et les conteneurs), dans l'agriculture (capteurs d'humidité du sol), dans la santé (moniteurs de fréquence cardiaque) et dans les villes (feux de circulation intelligents).",
            "La valeur est dans ce que les données permettent de faire : repérer un problème tôt, économiser de l'énergie ou agir à distance. Le risque, c'est que chaque appareil connecté est une chose de plus qui peut être piratée ou laisser fuir des données privées, donc la sécurité fait partie de chaque métier de l'IoT."
          ],
          words: [["Internet des objets (IoT)", "des objets physiques avec des capteurs et une connexion réseau qui partagent des données."], ["Appareil intelligent", "un objet du quotidien qui peut se connecter et agir selon des données."], ["Maintenance prédictive", "utiliser les données des capteurs pour réparer une machine avant qu'elle tombe en panne."]],
          slides: [
            { title: "L'IoT, c'est", bullets: ["Des objets physiques qui perçoivent le monde", "Connectés à un réseau", "Qui partagent des données, souvent tout seuls"] },
            { title: "Où on le trouve", bullets: ["Maison : sonnettes, prises connectées, enceintes", "Travail : machines qui signalent les problèmes", "Logistique, agriculture, santé, villes"] },
            { title: "Valeur et risque", bullets: ["Repérer les problèmes tôt, économiser l'énergie", "Agir à distance", "Chaque appareil est une porte d'entrée possible"] }
          ],
          tryIt: "Faites le tour de votre maison, de votre travail ou d'un magasin et listez cinq appareils connectés que vous voyez ou utilisez. Pour chacun, écrivez ce qu'il mesure et ce qu'il fait des données.",
          youCanNow: "expliquer ce qu'est l'IoT et nommer des appareils IoT de la vie quotidienne et du travail.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui fait qu'un appareil fait partie de l'Internet des objets ?", options: ["Il a un grand écran", "Il coûte plus cher qu'un appareil normal", "Il mesure quelque chose, se connecte à un réseau et partage des données", "Il ne marche qu'avec un clavier"], answer: 2, why: "Les appareils IoT mesurent le monde, se connectent et partagent des données, souvent sans que personne ne tape quoi que ce soit." },
            { objective: "O1", q: "Le parc automobile de votre unité veut que les camions signalent leurs problèmes avant de tomber en panne. Comment s'appelle cet usage de l'IoT ?", options: ["La maintenance prédictive", "L'informatique en périphérie", "Un réseau invité", "Le micrologiciel"], answer: 0, why: "Des machines qui signalent un besoin de réparation avant de tomber en panne, c'est la maintenance prédictive." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Les quatre couches : capteurs, appareils, connexion et cloud",
          minutes: 5,
          goal: "Suivre les données d'un système IoT du capteur jusqu'à l'action.",
          text: [
            "La plupart des systèmes IoT ont quatre couches. 1) Les capteurs mesurent quelque chose : température, mouvement, lumière, position, humidité. 2) Un appareil (souvent un petit ordinateur bon marché appelé microcontrôleur, comme un ESP32 ou un Arduino) lit le capteur et envoie les données. 3) Une connexion transporte les données : Wi-Fi, Bluetooth, réseau mobile ou radio longue portée. 4) Un service cloud ou une application garde les données, les affiche sur un tableau de bord et envoie des alertes.",
            "Certains appareils ont aussi des actionneurs : des pièces qui agissent dans le monde réel, comme un moteur qui ouvre une vanne, un relais qui allume un ventilateur, ou un buzzer.",
            "Parfois, l'appareil prend la décision lui-même au lieu d'attendre le cloud. C'est l'informatique en périphérie (edge computing). C'est plus rapide, cela continue de marcher quand internet est coupé, et cela envoie moins de données."
          ],
          steps: ["Nommez ce qui est mesuré (le capteur).", "Nommez l'appareil qui le lit.", "Nommez comment voyagent les données (la connexion).", "Nommez où elles vont et qui les voit (cloud, application, tableau de bord).", "Nommez l'action, faite par une personne ou un actionneur."],
          words: [["Capteur", "une pièce qui mesure quelque chose dans le monde réel."], ["Microcontrôleur", "un tout petit ordinateur bon marché sur une puce qui fait tourner un seul programme."], ["Actionneur", "une pièce qui agit dans le monde réel, comme un moteur, un relais ou un buzzer."], ["Tableau de bord", "un écran qui montre des données en direct sous forme de graphiques et de chiffres."], ["Informatique en périphérie", "traiter les données sur l'appareil ou tout près, au lieu de le faire dans le cloud."]],
          slides: [
            { title: "Les quatre couches", bullets: ["1. Le capteur mesure", "2. L'appareil lit et envoie", "3. La connexion transporte", "4. Le cloud ou l'appli garde, affiche, alerte"] },
            { title: "Les actionneurs agissent", bullets: ["Un moteur ouvre une vanne", "Un relais allume un ventilateur", "Un buzzer sonne l'alarme"] },
            { title: "L'informatique en périphérie", bullets: ["Décider sur l'appareil lui-même", "Plus rapide, marche hors ligne", "Envoie moins de données"] }
          ],
          tryIt: "Choisissez un appareil de votre liste de la leçon 1. Dessinez des cases pour ses quatre couches (capteur, appareil, connexion, cloud ou application) reliées par des flèches, et ajoutez l'action à la fin.",
          youCanNow: "suivre les données à travers les quatre couches d'un système IoT et nommer les capteurs et les actionneurs.",
          quickCheck: [
            { objective: "O2", q: "Dans un système IoT, quel est le rôle d'un microcontrôleur ?", options: ["Mesurer lui-même la température", "Stocker les données dans le cloud", "Allumer un ventilateur", "Lire le capteur et envoyer les données"], answer: 3, why: "L'appareil, souvent un microcontrôleur, lit le capteur et transmet les données." },
            { objective: "O2", q: "Le capteur d'un portail éloigné doit continuer à marcher quand internet est coupé. Quelle conception aide ?", options: ["Envoyer d'abord chaque mesure au cloud", "Laisser l'appareil prendre la décision lui-même (informatique en périphérie)", "Utiliser un plus grand écran", "Retirer le capteur"], answer: 1, why: "L'informatique en périphérie permet à l'appareil de décider seul, donc il continue à marcher sans internet." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Comment les appareils se connectent et se parlent",
          minutes: 5,
          goal: "Choisir une connexion adaptée pour un appareil IoT.",
          text: [
            "Il n'y a pas de meilleure connexion unique ; chacune fait un compromis entre portée, énergie et quantité de données. Le Wi-Fi est rapide et courant à la maison et au travail, mais consomme beaucoup d'énergie. Le Bluetooth Low Energy (BLE) consomme très peu et a une courte portée, bien pour les objets portés et les téléphones. Le réseau mobile (4G, 5G et versions basse consommation) marche presque partout où il y a du signal, bien pour les véhicules et les sites isolés, mais il faut un forfait. LoRaWAN est une radio longue portée et basse consommation pour de petites quantités de données, utilisée pour les capteurs agricoles et urbains.",
            "Les appareils ont aussi besoin d'une langue commune, appelée protocole, pour envoyer des messages. MQTT est un protocole léger et populaire : un appareil publie une mesure sur un sujet (topic), comme pantry/freezer/temp, et toute application abonnée à ce sujet la reçoit. HTTP, le même protocole que les sites web, est aussi courant.",
            "Les appareils sur batterie économisent l'énergie en dormant la plupart du temps et en se réveillant seulement pour mesurer et envoyer."
          ],
          steps: ["Jusqu'où les données doivent-elles voyager ?", "Y a-t-il du courant, ou seulement une batterie ?", "Combien de données, et à quelle fréquence ?", "Y a-t-il du Wi-Fi ou du signal mobile là où l'appareil sera installé ?", "Choisissez la connexion qui convient aux quatre réponses."],
          words: [["Wi-Fi", "un réseau sans fil rapide pour les maisons et les bureaux ; consomme plus d'énergie."], ["Bluetooth Low Energy (BLE)", "une connexion sans fil à très basse consommation et courte portée."], ["Réseau mobile", "une connexion par les réseaux de téléphonie mobile."], ["LoRaWAN", "un réseau radio longue portée et basse consommation pour de petites quantités de données."], ["Protocole", "un ensemble de règles communes pour envoyer des messages."], ["MQTT", "un protocole de messagerie léger où les appareils publient sur des sujets et les applications s'y abonnent."]],
          slides: [
            { title: "Choisir selon portée, énergie et données", bullets: ["Wi-Fi : rapide, plus d'énergie", "BLE : très peu d'énergie, courte portée", "Réseau mobile : presque partout, il faut un forfait", "LoRaWAN : longue portée, peu de données"] },
            { title: "Les protocoles", bullets: ["MQTT : publier sur un sujet, les applis s'abonnent", "Exemple de sujet : pantry/freezer/temp", "HTTP : la langue des sites web"] },
            { title: "Économiser la batterie", bullets: ["Dormir la plupart du temps", "Se réveiller, mesurer, envoyer, se rendormir"] }
          ],
          tryIt: "Choisissez la meilleure connexion pour chaque cas et écrivez une raison : un podomètre à votre poignet, un capteur de sol dans un champ à 5 km de tout bâtiment, un traceur GPS sur un camion de livraison, et une prise connectée dans un salon.",
          youCanNow: "choisir une connexion adaptée et expliquer comment les appareils IoT envoient des messages.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que MQTT ?", options: ["Un protocole léger où les appareils publient leurs mesures sur des sujets", "Un type de batterie", "Une radio longue portée", "Une marque de capteur"], answer: 0, why: "MQTT est un protocole léger : les appareils publient sur un sujet et les applications abonnées reçoivent le message." },
            { objective: "O3", q: "Un capteur sur batterie dans un dépôt sans Wi-Fi envoie une petite mesure par heure. Que choisissez-vous ?", options: ["Le Wi-Fi", "Le Bluetooth Low Energy", "LoRaWAN", "Un clavier filaire"], answer: 2, why: "LoRaWAN consomme peu et porte loin pour de petites quantités de données." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les systèmes IoT",
        questions: [
          { objective: "O1", q: "Lequel est un appareil IoT ?", options: ["Un calendrier en papier", "Une carte imprimée", "Un thermostat intelligent qui règle le chauffage tout seul", "Une chaise en bois"], answer: 2, why: "Il mesure, se connecte et agit selon les données." },
          { objective: "O2", q: "Dans un système IoT, que fait un capteur ?", options: ["Il mesure quelque chose dans le monde réel", "Il garde les données dans le cloud", "Il paie la facture internet", "Il affiche le tableau de bord"], answer: 0, why: "Les capteurs mesurent des choses comme la température ou le mouvement." },
          { objective: "O2", q: "Un relais qui allume un ventilateur est :", options: ["Un capteur", "Un protocole", "Un tableau de bord", "Un actionneur"], answer: 3, why: "Les actionneurs agissent dans le monde physique." },
          { objective: "O3", q: "Un capteur de sol est dans un champ loin du Wi-Fi et fonctionne sur batterie. Quelle connexion convient le mieux ?", options: ["Le Wi-Fi", "LoRaWAN", "Un câble USB", "Le Bluetooth vers un téléphone dans votre poche"], answer: 1, why: "LoRaWAN est longue portée et basse consommation pour peu de données." },
          { objective: "O3", q: "Avec MQTT, comment une application reçoit-elle les mesures d'un congélateur ?", options: ["Elle appelle le congélateur au téléphone", "Elle s'abonne au sujet sur lequel le congélateur publie", "Elle les imprime", "Elle les devine"], answer: 1, why: "Les applications MQTT s'abonnent aux sujets sur lesquels les appareils publient." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire et sécuriser un projet IoT",
      lessons: [
        {
          objectives: ["O4"],
          title: "De la mesure à l'action : écrire une règle d'alerte",
          minutes: 6,
          goal: "Écrire en Python une règle simple qui transforme une mesure de capteur en alerte.",
          text: [
            "Le cœur de la plupart des projets IoT est une règle : si une mesure dépasse une limite, faire quelque chose. Si le congélateur de la banque alimentaire est plus chaud que -15 degrés Celsius pendant 10 minutes, envoyer un SMS au responsable. Si l'humidité du sol descend sous 30 pour cent, ouvrir la vanne d'eau.",
            "En Python, une règle est une instruction if. Par exemple : temp = 28.5, puis if temp > 27: print(\"ALERT: server closet too hot\") else: print(\"OK\"). Sur un vrai appareil, la mesure vient du capteur, et l'action peut allumer une LED, actionner un relais ou envoyer un message.",
            "Les bonnes règles évitent les fausses alertes. Un pic isolé peut venir d'une porte ouverte un instant, donc beaucoup de systèmes attendent plusieurs mesures de suite avant d'alerter. Choisissez la limite avec les personnes qui connaissent le matériel, et décidez qui reçoit l'alerte et ce qu'il doit faire."
          ],
          steps: ["Décidez ce que vous mesurez et sa plage normale.", "Choisissez la limite qui signale un problème.", "Écrivez-la sous la forme if reading > limit: (ou < limit).", "Décidez de l'action : un message, une lumière ou un relais.", "Ajoutez une règle contre les fausses alertes, comme plusieurs mesures de suite."],
          words: [["Règle", "une instruction si-alors : si ceci arrive, faire cela."], ["Seuil", "la limite qui déclenche une action."], ["Fausse alerte", "une alerte alors que rien ne va vraiment mal."], ["Mesure", "une valeur relevée par un capteur."]],
          slides: [
            { title: "L'IoT fonctionne avec des règles", bullets: ["Si une mesure dépasse une limite", "Alors faire quelque chose", "Congélateur trop chaud : SMS au responsable"] },
            { title: "Une règle en Python", bullets: ["if temp > 27:", "    print(\"ALERT: too hot\")", "else: print(\"OK\")"] },
            { title: "Éviter les fausses alertes", bullets: ["Attendre plusieurs mesures de suite", "Fixer les limites avec les experts", "Décider qui agit, et comment"] }
          ],
          tryIt: "Ouvrez Google Colab (colab.research.google.com) ou n'importe quel éditeur Python. Faites une liste de six mesures de température, comme [22, 23, 29, 30, 31, 24]. Parcourez-les et affichez « ALERTE » pour toute mesure au-dessus de 27 et « OK » pour les autres. Bonus : n'alertez que quand deux mesures de suite dépassent 27.",
          youCanNow: "écrire en Python une règle d'alerte simple qui transforme des mesures de capteur en action.",
          quickCheck: [
            { objective: "O4", q: "La règle est : if temp > 27: print(\"ALERT\"). La mesure est 25. Qu'est-ce qui s'affiche ?", options: ["ALERT", "Rien", "Une erreur", "27"], answer: 1, why: "25 n'est pas plus grand que 27, donc l'instruction if ne s'exécute pas." },
            { objective: "O4", q: "L'alarme d'un local serveur se déclenche chaque fois que la porte s'ouvre une seconde. Que changez-vous ?", options: ["Désactiver l'alarme pour de bon", "Monter la limite à 100 degrés", "Retirer le capteur", "Alerter seulement après plusieurs mesures élevées à la suite"], answer: 3, why: "Attendre plusieurs mesures à la suite évite les fausses alertes dues à de courts pics." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Essayer un appareil simulé dans votre navigateur",
          minutes: 6,
          goal: "Faire tourner un microcontrôleur simulé avec un capteur et voir les mesures changer.",
          text: [
            "Vous pouvez vous entraîner à l'IoT sans acheter de pièces. Un simulateur en ligne comme Wokwi vous permet de placer une carte virtuelle comme un ESP32, d'ajouter un capteur comme un DHT22 (température et humidité), et d'exécuter du code dans votre navigateur. Vérifiez sur le site quelles fonctions sont gratuites et s'il faut un compte.",
            "Le plus simple pour commencer est d'ouvrir l'un des projets d'exemple tout prêts du simulateur pour l'ESP32 avec un DHT22, puis de lire le code et de l'exécuter. En MicroPython, une version de Python pour les petits appareils, les lignes clés ressemblent à ceci : sensor = dht.DHT22(machine.Pin(15)), puis sensor.measure() et t = sensor.temperature(). Le numéro de broche doit correspondre à la broche où le capteur est branché sur le schéma.",
            "Pendant que la simulation tourne, vous pouvez cliquer sur le capteur virtuel et changer sa température, puis regarder vos mesures affichées et votre règle d'alerte réagir. C'est exactement comme cela qu'on teste un vrai appareil avant de l'installer."
          ],
          steps: ["Ouvrez le site du simulateur dans votre navigateur.", "Trouvez un projet d'exemple pour un ESP32 avec un capteur DHT22.", "Lisez le code : trouvez où il lit le capteur et où il affiche.", "Lancez la simulation et regardez les mesures.", "Changez la température du capteur virtuel et ajoutez votre règle d'alerte de la leçon 4."],
          words: [["Simulateur", "un logiciel qui se comporte comme du vrai matériel pour tester sans l'acheter."], ["ESP32", "un microcontrôleur bon marché avec Wi-Fi et Bluetooth intégrés."], ["DHT22", "un capteur courant et bon marché de température et d'humidité."], ["MicroPython", "une petite version de Python qui tourne sur les microcontrôleurs."], ["Broche", "un point de connexion métallique sur une carte, où l'on branche les pièces."]],
          slides: [
            { title: "S'entraîner sans pièces", bullets: ["Les simulateurs en ligne tournent dans le navigateur", "Carte ESP32 virtuelle plus un capteur DHT22", "Vérifiez quelles fonctions sont gratuites"] },
            { title: "Les lignes MicroPython clés", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Tester comme en vrai", bullets: ["Changez la température virtuelle", "Regardez votre règle d'alerte réagir", "La broche du code doit correspondre au branchement"] }
          ],
          sources: [WOKWI],
          tryIt: "Ouvrez un exemple ESP32 et DHT22 dans un simulateur en ligne et lancez-le. Changez au moins deux fois la température du capteur virtuel et notez les mesures. Si vous pouvez, ajoutez une instruction if qui affiche « ALERTE » au-dessus de 27 degrés Celsius. Si vous ne pouvez pas utiliser le simulateur, suivez le code d'exemple sur papier : marquez la ligne qui lit le capteur et la ligne qui affiche.",
          youCanNow: "faire tourner et tester un appareil IoT simulé et relier ses mesures à une règle d'alerte.",
          quickCheck: [
            { objective: "O5", q: "En MicroPython, quelle ligne lit la température après sensor.measure() ?", options: ["print(15)", "if temp > 27:", "t = sensor.temperature()", "machine.Pin()"], answer: 2, why: "sensor.temperature() renvoie la mesure après sensor.measure()." },
            { objective: "O5", q: "Votre règle d'alerte simulée ne se déclenche jamais. Comment la testez-vous ?", options: ["Cliquer sur le capteur virtuel et monter sa température au-dessus de la limite", "Acheter d'abord un vrai capteur", "Effacer le code et tout recommencer", "Changer le numéro de broche au hasard"], answer: 0, why: "Changer la mesure du capteur virtuel vous permet de voir la règle réagir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sécuriser les appareils IoT et préparer votre projet",
          minutes: 6,
          goal: "Appliquer les étapes de sécurité clés aux appareils connectés et terminer votre plan de projet.",
          text: [
            "Les appareils connectés sont une cible préférée des attaquants, car beaucoup sont livrés avec des mots de passe par défaut faibles et ne sont jamais mis à jour. Une caméra ou une prise connectée piratée peut espionner les gens ou servir à attaquer d'autres personnes.",
            "Les conseils de la Federal Trade Commission (FTC), l'agence américaine de protection des consommateurs, pour les appareils de la maison : changez le nom d'utilisateur et le mot de passe par défaut et ne réutilisez pas de mots de passe ; activez l'authentification à deux facteurs quand elle est proposée ; gardez à jour le micrologiciel et l'application associée ; désactivez les fonctions que vous n'utilisez pas, comme la gestion à distance ; et débranchez les vieux appareils. Pour le routeur : changez ses réglages par défaut, activez le chiffrement et cherchez les mises à jour. Un réseau invité garde les appareils intelligents à l'écart des ordinateurs qui contiennent des fichiers privés.",
            "Au travail, tenez aussi une liste de chaque appareil connecté, mettez les appareils IoT sur leur propre réseau, et ne collectez que les données nécessaires, surtout quand il y a des caméras ou des micros. Demandez au service informatique ou sécurité de l'organisation avant de brancher quoi que ce soit sur un réseau de travail."
          ],
          steps: ["Changez chaque mot de passe par défaut ; utilisez-en un unique et fort.", "Activez l'authentification à deux facteurs quand elle est proposée.", "Mettez à jour le micrologiciel et les applications associées.", "Désactivez les fonctions inutilisées ; débranchez les vieux appareils.", "Mettez les appareils intelligents sur un réseau séparé ou invité, et tenez une liste des appareils."],
          words: [["Mot de passe par défaut", "le mot de passe avec lequel un appareil est livré ; les attaquants connaissent ces listes."], ["Micrologiciel (firmware)", "le logiciel intégré qui fait fonctionner un appareil."], ["Authentification à deux facteurs", "se connecter avec un mot de passe plus une deuxième preuve, comme un code."], ["Réseau invité", "un réseau Wi-Fi séparé qui tient les appareils loin de vos ordinateurs principaux."], ["Inventaire des appareils", "la liste de chaque appareil connecté dont vous êtes responsable."]],
          slides: [
            { title: "Pourquoi l'IoT est attaqué", bullets: ["Mots de passe par défaut faibles", "Appareils jamais mis à jour", "Caméras et micros peuvent laisser fuir des données privées"] },
            { title: "Sécurisez chaque appareil", bullets: ["Changez les mots de passe par défaut ; pas de réutilisation", "Deux facteurs quand c'est proposé", "Mettez à jour micrologiciel et applis", "Désactivez les fonctions inutilisées"] },
            { title: "Sécurisez le réseau", bullets: ["Changez les réglages du routeur, activez le chiffrement", "Appareils intelligents sur un réseau invité", "Tenez une liste des appareils ; demandez à l'informatique au travail"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Tâche finale : écrivez votre plan IoT d'une page (par exemple un local serveur, un congélateur de banque alimentaire ou un jardin). Nommez le capteur, l'appareil, la connexion et où vont les données, dessinez le trajet du capteur à l'alerte, écrivez la règle d'alerte sous forme d'instruction if en Python, et listez cinq étapes de sécurité que vous suivrez.",
          youCanNow: "sécuriser des appareils connectés et préparer un projet complet de surveillance IoT.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi les appareils IoT sont-ils une cible fréquente des attaquants ?", options: ["Ils sont toujours éteints", "Ils consomment trop d'énergie", "Ils n'ont pas de connexion réseau", "Beaucoup sont livrés avec des mots de passe par défaut faibles et ne sont jamais mis à jour"], answer: 3, why: "Des mots de passe par défaut faibles et des mises à jour manquantes rendent beaucoup d'appareils faciles à pirater." },
            { objective: "O6", q: "Une nouvelle caméra de porte a une fonction de gestion à distance que vous n'utiliserez pas. Que faites-vous ?", options: ["La laisser activée au cas où", "La désactiver", "Partager son mot de passe avec l'équipe", "Y réutiliser le mot de passe de votre e-mail"], answer: 1, why: "Désactiver les fonctions inutilisées supprime des portes d'entrée pour les attaquants." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire et sécuriser un projet IoT",
        questions: [
          { objective: "O4", q: "Quelle ligne est une règle d'alerte correcte en Python ?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERT\")"], answer: 3, why: "Python utilise if, une condition et deux-points." },
          { objective: "O4", q: "Pourquoi attendre plusieurs mesures élevées de suite avant d'alerter ?", options: ["Pour éviter les fausses alertes dues à un pic bref", "Pour économiser du papier", "Parce que les capteurs se trompent toujours", "Pour ralentir l'appareil"], answer: 0, why: "Un pic isolé, comme une porte ouverte, n'est peut-être pas un vrai problème." },
          { objective: "O5", q: "Dans le simulateur, votre code lit la broche 15 mais le capteur est branché sur la broche 4. Que se passe-t-il ?", options: ["Cela marche quand même", "La carte prend feu", "Le code ne recevra pas de mesures du capteur", "La température double"], answer: 2, why: "La broche dans le code doit correspondre au branchement." },
          { objective: "O6", q: "Quelle est la PREMIÈRE chose à faire avec une nouvelle caméra connectée ?", options: ["Garder le mot de passe par défaut", "Partager ses identifiants avec des amis", "Désactiver les mises à jour", "Remplacer le mot de passe par défaut par un mot de passe unique et fort"], answer: 3, why: "Les mots de passe par défaut sont bien connus des attaquants." },
          { objective: "O6", q: "Pourquoi mettre les appareils intelligents sur un réseau invité ?", options: ["Pour les rendre plus rapides", "Parce qu'ils n'ont pas besoin de mot de passe", "Pour les tenir à l'écart des ordinateurs qui contiennent des fichiers privés", "Pour désactiver le chiffrement"], answer: 2, why: "La séparation limite ce qu'un appareil piraté peut atteindre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'Internet des objets (IoT)",
    questions: [
      { objective: "O1", q: "L'Internet des objets, c'est :", options: ["Seulement les réseaux sociaux", "Des objets physiques avec des capteurs qui se connectent et partagent des données", "Un type de papier pour imprimante", "Un jeu vidéo"], answer: 1, why: "L'IoT, ce sont des objets connectés qui mesurent et partagent." },
      { objective: "O1", q: "Utiliser les données des capteurs pour réparer une machine avant qu'elle tombe en panne s'appelle :", options: ["La maintenance prédictive", "L'hameçonnage", "Le stockage en périphérie", "Le micrologiciel"], answer: 0, why: "La maintenance prédictive repère les problèmes tôt." },
      { objective: "O1", q: "Pourquoi la sécurité fait-elle partie de chaque métier de l'IoT ?", options: ["Les appareils IoT ne peuvent pas être piratés", "Elle n'est nécessaire que pour les téléphones", "Chaque appareil connecté peut être une porte d'entrée pour les attaquants", "Elle rend les appareils moins chers"], answer: 2, why: "Plus d'appareils, c'est plus de portes d'entrée." },
      { objective: "O2", q: "Quelles sont les quatre couches d'un système IoT ?", options: ["Capteur, appareil, connexion, cloud ou application", "Clavier, souris, écran, imprimante", "E-mail, SMS, appel, publication", "Chaud, froid, très froid, archive"], answer: 0, why: "Les données vont du capteur à l'appareil, puis à la connexion, puis au cloud ou à l'application." },
      { objective: "O2", q: "Un petit ordinateur bon marché sur une puce qui fait tourner un seul programme est :", options: ["Une ferme de serveurs", "Un routeur", "Un tableau de bord", "Un microcontrôleur"], answer: 3, why: "Les cartes comme l'ESP32 et l'Arduino sont des microcontrôleurs." },
      { objective: "O2", q: "Un moteur qui ouvre une vanne d'eau est :", options: ["Un capteur", "Un actionneur", "Un protocole", "Un sujet"], answer: 1, why: "Les actionneurs agissent sur le monde physique." },
      { objective: "O2", q: "Prendre les décisions sur l'appareil plutôt que dans le cloud, c'est :", options: ["La facturation du cloud", "L'informatique en périphérie", "Le Bluetooth", "Une fausse alerte"], answer: 1, why: "L'informatique en périphérie traite les données près de l'endroit où elles sont collectées." },
      { objective: "O3", q: "Quelle connexion est la meilleure pour un bracelet de sport qui parle à votre téléphone ?", options: ["LoRaWAN", "Un câble", "La télévision par satellite", "Le Bluetooth Low Energy"], answer: 3, why: "Le BLE consomme peu et a une courte portée." },
      { objective: "O3", q: "Quelle connexion convient à un traceur GPS sur un camion de livraison ?", options: ["Le réseau mobile", "Le Wi-Fi de la maison", "Un câble USB", "Le Bluetooth seulement"], answer: 0, why: "Le réseau mobile marche presque partout où il y a du signal." },
      { objective: "O3", q: "Avec MQTT, un congélateur envoie sa mesure en :", options: ["L'imprimant", "Appelant le responsable", "Publiant sur un sujet", "L'enregistrant sur une clé USB"], answer: 2, why: "Les appareils publient ; les applications s'abonnent." },
      { objective: "O3", q: "Comment les appareils IoT sur batterie durent-ils longtemps ?", options: ["Ils ne s'allument jamais", "Ils utilisent le Wi-Fi le plus rapide", "Ils envoient de la vidéo toute la journée", "Ils dorment la plupart du temps et se réveillent pour mesurer et envoyer"], answer: 3, why: "Dormir économise l'énergie." },
      { objective: "O4", q: "En IoT, une règle veut en général dire :", options: ["Une règle graduée pour mesurer", "Une règle de mot de passe", "Si une mesure dépasse une limite, faire quelque chose", "Un câble"], answer: 2, why: "Les règles transforment les mesures en actions." },
      { objective: "O4", q: "readings = [20, 28, 22]. Avec la règle « alerte au-dessus de 27 », combien d'alertes ?", options: ["0", "1", "2", "3"], answer: 1, why: "Seul 28 est au-dessus de 27." },
      { objective: "O4", q: "Une alerte se déclenche quand quelqu'un ouvre la porte du congélateur une seconde. C'est :", options: ["Une fausse alerte", "De l'informatique en périphérie", "Une mise à jour du micrologiciel", "Du chiffrement"], answer: 0, why: "Un pic bref qui n'est pas un vrai problème est une fausse alerte." },
      { objective: "O5", q: "Pourquoi utiliser un simulateur avant d'acheter des pièces ?", options: ["Parce que les vrais appareils ne marchent jamais", "Pour éviter d'apprendre à coder", "Pour tester d'abord le montage et le code gratuitement ou à petit prix", "Les simulateurs sont obligatoires par la loi"], answer: 2, why: "Les simulateurs permettent de tester sans matériel." },
      { objective: "O5", q: "MicroPython est :", options: ["Une petite version de Python pour les microcontrôleurs", "Un serpent", "Un type de capteur", "Une marque de Wi-Fi"], answer: 0, why: "Il fait tourner du code Python sur de petites cartes." },
      { objective: "O5", q: "Un DHT22 mesure :", options: ["La position GPS", "La fréquence cardiaque", "La vidéo", "La température et l'humidité"], answer: 3, why: "C'est un capteur de température et d'humidité." },
      { objective: "O6", q: "Quel est le choix le plus sûr pour le mot de passe d'une nouvelle prise connectée ?", options: ["Garder celui par défaut", "Un mot de passe unique et fort", "Le même mot de passe que votre e-mail", "« motdepasse123 »"], answer: 1, why: "Des mots de passe uniques et forts empêchent les intrusions faciles." },
      { objective: "O6", q: "Que faut-il faire du micrologiciel des appareils IoT ?", options: ["Ne jamais le mettre à jour", "Le garder à jour", "Le supprimer", "Le partager en ligne"], answer: 1, why: "Les mises à jour corrigent les failles de sécurité." },
      { objective: "O6", q: "Vous voulez brancher un capteur sur le réseau de votre travail. Que faites-vous d'abord ?", options: ["Le brancher discrètement", "Désactiver le pare-feu", "Partager le mot de passe Wi-Fi en ligne", "Demander au service informatique ou sécurité"], answer: 3, why: "Les réseaux de travail ont des règles ; l'informatique doit approuver les nouveaux appareils." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      6,
      7,
      9,
      11,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Parties du système",
        objective: "O2",
        notYet: "Le capteur, l'appareil ou la destination manque.",
        meets: "Nomme le capteur, l'appareil, la connexion et l'endroit où vont les données.",
        exceeds: "Nomme aussi un actionneur ou une décision en périphérie et dit pourquoi cela aide."
      },
      {
        name: "Schéma du trajet des données",
        objective: "O2",
        notYet: "Pas de schéma, ou les étapes ne sont pas dans l'ordre.",
        meets: "Le schéma montre dans l'ordre le capteur, l'appareil, la connexion, le cloud ou l'application, et l'alerte.",
        exceeds: "Le schéma montre aussi qui reçoit l'alerte et ce que cette personne fait."
      },
      {
        name: "Choix de la connexion",
        objective: "O3",
        notYet: "La connexion ne convient pas au lieu ou à l'alimentation, comme du Wi-Fi dans un champ sans Wi-Fi.",
        meets: "La connexion convient à la portée, à l'alimentation et aux données du projet.",
        exceeds: "Explique pourquoi une autre connexion conviendrait moins bien."
      },
      {
        name: "Règle d'alerte",
        objective: "O4",
        notYet: "La règle manque ou ne marcherait pas, par exemple à cause d'une mauvaise comparaison.",
        meets: "Une instruction if correcte en Python, avec une limite et une action raisonnables.",
        exceeds: "Évite aussi les fausses alertes, par exemple en attendant plusieurs mesures, et a été testée dans le simulateur."
      },
      {
        name: "Étapes de sécurité",
        objective: "O6",
        notYet: "Moins de cinq étapes, ou des étapes qui ne protègent pas les appareils.",
        meets: "Cinq étapes justes, comme des mots de passe uniques, les mises à jour et un réseau séparé.",
        exceeds: "Inclut aussi une liste des appareils et l'accord du service informatique avant de connecter au travail."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui ajoutent des compétences IoT ou capteurs à leur CV, ou postulent à un poste en maintenance des bâtiments, logistique ou informatique dans les 60 jours",
      "Apprenants qui disent avoir changé des mots de passe par défaut ou mis à jour des appareils connectés à la maison dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui commencent ensuite un cours de Python, de réseaux ou de cybersécurité"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un navigateur web et internet",
      "Un simulateur IoT en ligne gratuit, comme Wokwi (vérifiez ses fonctions gratuites actuelles)",
      "Du papier et un stylo, ou un document, pour le plan d'une page et le schéma du trajet des données",
      "Environ 60 minutes en tout : leçons, exercice sur le simulateur, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; montrez le simulateur sur un écran partagé avant que les apprenants l'essaient.",
      "Invitez les anciens militaires à comparer l'IoT aux vérifications de matériel, aux liaisons radio et aux procédures d'alerte qu'ils connaissent déjà.",
      "Donnez à chaque apprenant ou binôme un projet différent (local serveur, congélateur de banque alimentaire, jardin) pour pouvoir comparer les plans.",
      "Ne connectez aucun vrai appareil au réseau d'un programme ou d'un lieu de travail sans l'accord du service informatique ou sécurité.",
      "Notez le plan final avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
