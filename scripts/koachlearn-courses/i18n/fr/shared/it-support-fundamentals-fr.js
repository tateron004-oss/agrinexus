"use strict";

// Koach Learn course (shared), French translation of shared/it-support-fundamentals.js. See scripts/koachlearn-courses/README.md, "Translations".

const A_PLUS = { name: "Certification CompTIA A+ (page officielle)", url: "https://www.comptia.org/en-us/certifications/a/" };
const CORE1 = { name: "Détails de l'examen CompTIA A+ Core 1 (220-1201)", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" };
const CORE2 = { name: "Détails de l'examen CompTIA A+ Core 2 (220-1202)", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" };
const BLS = { name: "Bureau des statistiques du travail des États-Unis (BLS) : spécialistes du support informatique", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm" };

module.exports = {
  id: "it-support-fundamentals-fr",
  lang: "fr",
  translationOf: "it-support-fundamentals",
  category: "Workforce Development",
  name: "Les bases du support informatique (préparation à CompTIA A+)",
  skills: "Nommer le matériel d'un ordinateur, Vérifier une connexion réseau, Utiliser les outils du système d'exploitation, Résoudre un problème étape par étape, Rédiger des tickets d'assistance, Préparer les examens A+",
  outcome: "travailler comme technicien d'assistance débutant : nommer les parties d'un ordinateur, vérifier une connexion réseau avec ipconfig et ping, utiliser les outils intégrés du système, résoudre un problème avec la méthode en six étapes, rédiger un ticket clair et suivre votre propre plan de révision daté pour les deux examens CompTIA A+.",
  about: [
    "Le support informatique (on dit aussi assistance informatique ou help desk) est un premier emploi courant dans la technologie. Les techniciens de support aident les gens quand un ordinateur, une imprimante, un téléphone ou un réseau ne marche plus. La certification de départ la plus connue pour ce travail est CompTIA A+ (CompTIA est une organisation du secteur informatique qui crée des examens de certification).",
    "Ce cours vous prépare à A+. Il ne vous donne pas la certification. Pour obtenir A+, vous devez réussir deux examens, Core 1 et Core 2, dans un centre d'examen ou en ligne. Avant de vous inscrire, consultez la page officielle de CompTIA pour connaître les examens, les prix et les modes de passage actuels.",
    "Vous allez pratiquer sur votre propre ordinateur avec des outils gratuits déjà intégrés. Vous n'avez pas besoin d'ouvrir un ordinateur ni d'acheter quoi que ce soit. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "Ce cours s'adresse à toute personne qui débute : personnes en recherche d'emploi, anciens militaires, jeunes adultes, personnes qui sortent de prison, personnes immigrées et adultes en reconversion."
  ],
  finalTask: "Préparez votre kit de départ en support informatique : (1) un ticket d'assistance d'entraînement pour un problème réel ou inventé, rédigé avec les six étapes de résolution de problèmes et les champs du ticket de la leçon 6 ; (2) une note d'une page sur votre propre ordinateur : son système d'exploitation et sa version, l'espace de stockage libre, l'adresse IP, la passerelle par défaut et si ping a fonctionné ; et (3) votre plan de révision et d'examen A+ avec une date cible pour Core 1 et une pour Core 2, les domaines de chaque examen avec leur poids, et les heures de révision prévues chaque semaine.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes qui cherchent un premier emploi dans la technologie : personnes en recherche d'emploi, anciens militaires, personnes qui sortent de prison, personnes immigrées et personnes en reconversion. La plupart utilisent un téléphone et un ordinateur tous les jours, mais n'en ont jamais réparé et n'ont jamais travaillé dans l'informatique.",
    startingPoint: "Savent utiliser un navigateur web, la messagerie et les applications courantes. La plupart n'ont jamais utilisé une invite de commandes, regardé les paramètres du système ni rédigé un ticket d'assistance. Peu savent ce que couvrent les examens A+.",
    gap: "Les emplois d'assistance demandent des bases en matériel, réseaux, systèmes d'exploitation et résolution de problèmes, et souvent la certification CompTIA A+. Les apprenants ont besoin d'une idée claire du métier, d'une pratique concrète avec de vrais outils et d'un plan daté pour passer vraiment les deux examens.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot technique est expliqué",
      "Appareils : un ordinateur Windows ou Mac (un ordinateur de bibliothèque convient pour presque toutes les tâches, mais certaines commandes peuvent y être bloquées)",
      "On n'ouvre ni ordinateur ni bloc d'alimentation ; le matériel s'apprend avec des images ou seulement sur un vieil appareil éteint et débranché",
      "Temps : leçons de 4 à 6 minutes, faciles à caser entre le travail et les rendez-vous",
      "Les règles, les prix et les versions des examens changent : les apprenants consultent comptia.org avant de s'inscrire"
    ],
    prerequisites: "Être à l'aise avec un ordinateur, une souris et un clavier. Si c'est nouveau pour vous, suivez d'abord « Les bases de l'ordinateur ». « Introduction à la cybersécurité » est un bon complément."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'images ou d'une liste de pièces d'ordinateur", action: "identifier chaque pièce principale du matériel et dire à quoi elle sert", standard: "avec au moins 8 bonnes réponses sur 10" },
    { id: "O2", condition: "Sur votre propre ordinateur Windows ou Mac", action: "utiliser ipconfig (ou les paramètres réseau) et ping pour noter l'adresse IP et la passerelle par défaut et tester la connexion", standard: "sans aide, et dire ce que signifie une adresse en 169.254" },
    { id: "O3", condition: "Sur votre propre ordinateur", action: "trouver la version du système d'exploitation, l'espace de stockage libre, les programmes ouverts et l'état des mises à jour avec les outils intégrés", standard: "en moins de 10 minutes" },
    { id: "O4", condition: "Face à un problème informatique signalé par un utilisateur", action: "appliquer la méthode de résolution de problèmes en six étapes de CompTIA et noter chaque étape", standard: "avec les six étapes dans le bon ordre" },
    { id: "O5", condition: "Face à un appel ou un message d'un utilisateur qui a un problème", action: "rédiger un ticket d'assistance et une réponse courte et polie à l'utilisateur", standard: "avec tous les champs du ticket remplis, sans reproche ni jargon dans la réponse" },
    { id: "O6", condition: "À l'aide des pages officielles des examens CompTIA A+", action: "rédiger un plan de révision et d'examen avec des dates cibles pour Core 1 et Core 2", standard: "qui couvre chaque domaine de l'examen avec son poids et un temps de révision par semaine" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier, le matériel et le réseau",
      lessons: [
        {
          title: "Le métier de l'assistance et les deux examens A+",
          objectives: ["O6"],
          minutes: 5,
          goal: "Citer les deux examens A+, leurs codes et les principaux sujets de chacun.",
          text: [
            "Un technicien de support répond aux appels, aux discussions en ligne et aux tickets, prépare des ordinateurs et des comptes, règle les problèmes courants et sait quand transmettre un problème difficile à un technicien plus expérimenté. Les intitulés de poste sont par exemple technicien d'assistance, spécialiste du support informatique, technicien poste de travail et technicien d'intervention.",
            "CompTIA A+ est une certification de départ très connue pour ce métier. Elle est délivrée par CompTIA, pas par ce cours. Vous devez réussir deux examens. Core 1 (220-1201) couvre les appareils mobiles, les réseaux, le matériel, la virtualisation et le cloud, et le dépannage du matériel et du réseau. Core 2 (220-1202) couvre les systèmes d'exploitation, la sécurité, le dépannage des logiciels et les procédures de travail. Vous pouvez les passer dans n'importe quel ordre.",
            "Quand nous avons vérifié en octobre 2026, chaque examen comptait jusqu'à 90 questions en 90 minutes : questions à choix multiples, questions de glisser-déposer et questions de mise en situation (petites tâches pratiques). CompTIA recommande environ 12 mois d'expérience pratique, mais ce n'est qu'une recommandation. Les examens, les prix et les versions changent : vérifiez toujours les pages officielles avant de vous inscrire.",
            "Chaque examen est divisé en domaines (thèmes), chacun avec un poids : la part de l'examen consacrée à ce thème. Votre temps de révision doit suivre ces poids."
          ],
          steps: ["Ouvrez la page officielle CompTIA A+.", "Ouvrez les pages des examens Core 1 et Core 2.", "Notez le code de chaque examen et ses domaines avec leur poids.", "Trouvez sur le site officiel le prix actuel et les modes de passage (centre d'examen ou en ligne)."],
          words: [["Assistance (help desk)", "l'équipe que les gens contactent quand leur matériel ou leurs logiciels ne marchent pas."], ["Certification", "un titre obtenu en réussissant un examen, qui montre que vous avez certaines compétences."], ["Domaine", "un thème d'un examen. Son poids est la part des questions qui portent sur lui."], ["Question de mise en situation", "une tâche d'examen où vous faites quelque chose, comme associer des réglages ou corriger une installation, au lieu de choisir une réponse."]],
          slides: [
            { title: "Ce que fait un technicien de support", bullets: ["Répond aux appels, discussions et tickets", "Prépare ordinateurs, imprimantes et comptes", "Règle les problèmes courants ; transmet les plus difficiles"] },
            { title: "CompTIA A+ = deux examens", bullets: ["Core 1 (220-1201) : matériel, réseaux, mobiles, cloud, dépannage", "Core 2 (220-1202) : systèmes d'exploitation, sécurité, logiciels, procédures", "Réussir les deux, dans n'importe quel ordre"] },
            { title: "Format de l'examen (vérifié en oct. 2026)", bullets: ["Jusqu'à 90 questions en 90 minutes chacun", "Choix multiples, glisser-déposer, mises en situation", "Consultez comptia.org pour les détails et le prix actuels"] },
            { title: "Ce cours vous prépare", bullets: ["Il ne délivre pas A+", "CompTIA la délivre quand vous réussissez les deux examens"] }
          ],
          sources: [A_PLUS, CORE1, CORE2, BLS],
          tryIt: "Ouvrez les pages officielles de Core 1 et Core 2. Sur une feuille, faites deux colonnes, une par examen. Écrivez le code de l'examen, puis chaque domaine avec son poids. Entourez le plus gros domaine de chaque examen : c'est là que vous passerez le plus de temps à réviser.",
          youCanNow: "citer les deux examens A+, leurs codes et leurs principaux domaines, et trouver les détails actuels sur la page officielle.",
          quickCheck: [
            { objective: "O6", q: "Combien d'examens devez-vous réussir pour obtenir CompTIA A+ ?", options: ["Un", "Deux : Core 1 et Core 2", "Trois", "Aucun ; ce cours la délivre"], answer: 1, why: "A+ exige Core 1 et Core 2 ; le cours vous prépare seulement." },
            { objective: "O6", q: "Où devez-vous vérifier le prix et la version actuels de l'examen A+ ?", options: ["Dans un message de forum de l'an dernier", "Auprès d'un ami qui l'a réussi en 2019", "Sur le site officiel de CompTIA", "Dans n'importe quelle vidéo sur A+"], answer: 2, why: "Les prix et les versions changent ; la page officielle est la seule source fiable." }
          ]
        },
        {
          title: "Dans l'ordinateur : les principales pièces du matériel",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identifier les principales pièces du matériel d'un ordinateur et dire à quoi sert chacune.",
          text: [
            "Le matériel, ce sont les pièces physiques que l'on peut toucher. La carte mère est la carte principale sur laquelle tout se branche. Le CPU (processeur) fait le travail de réflexion. La RAM (mémoire vive) garde ce sur quoi vous travaillez en ce moment et s'efface quand on coupe le courant. Le stockage garde vos fichiers quand l'ordinateur est éteint : un SSD (disque à mémoire flash, rapide, sans pièces mobiles) ou un HDD (disque dur, plus lent, avec des disques qui tournent).",
            "Le bloc d'alimentation (PSU) transforme le courant de la prise en courant utilisable par les pièces. La carte graphique (GPU) affiche l'image à l'écran ; beaucoup d'ordinateurs ont la partie graphique intégrée au CPU. Les ports à l'extérieur comprennent l'USB (USB-A et l'USB-C, plus petit et réversible), HDMI et DisplayPort pour les écrans, et Ethernet pour un réseau filaire.",
            "Un indice fréquent à l'assistance : un ordinateur lent quand beaucoup de programmes sont ouverts manque peut-être de RAM ; un ordinateur qui met longtemps à démarrer a peut-être un disque presque plein ou ancien.",
            "La sécurité d'abord : vous n'avez pas besoin d'ouvrir un ordinateur dans ce cours. Un technicien éteint et débranche toujours l'ordinateur avant de l'ouvrir, porte un bracelet antistatique et n'ouvre jamais un bloc d'alimentation ni une batterie gonflée."
          ],
          words: [["Matériel", "les pièces physiques d'un ordinateur."], ["CPU", "le processeur ; la pièce qui fait tourner les programmes et fait les calculs."], ["RAM", "mémoire à court terme qui garde les programmes et fichiers ouverts ; elle se vide quand on coupe le courant."], ["SSD / HDD", "unités de stockage qui gardent les fichiers quand l'ordinateur est éteint. Un SSD est plus rapide et n'a pas de pièces mobiles."], ["Carte mère", "la carte électronique principale qui relie toutes les pièces."], ["ESD", "décharge électrostatique : une petite décharge d'électricité statique qui peut abîmer les pièces d'un ordinateur."]],
          slides: [
            { title: "Les pièces principales", bullets: ["Carte mère : relie tout", "CPU : fait le travail de réflexion", "RAM : mémoire à court terme, vidée à l'arrêt", "SSD ou HDD : garde vos fichiers"] },
            { title: "Autres pièces et ports", bullets: ["Bloc d'alimentation (PSU) et carte graphique (GPU)", "USB-A, USB-C, HDMI, DisplayPort, Ethernet"] },
            { title: "Indices sur le terrain", bullets: ["Lent avec beaucoup de programmes ouverts : peut-être peu de RAM", "Démarrage lent : disque plein ou ancien"] },
            { title: "Sécurité", bullets: ["Éteindre et débrancher avant d'ouvrir", "Bracelet antistatique", "Ne jamais ouvrir un bloc d'alimentation ni une batterie gonflée"] }
          ],
          tryIt: "Regardez votre ordinateur de l'extérieur seulement. Listez tous les ports que vous voyez et nommez-les (USB-A, USB-C, HDMI, Ethernet, casque). Ensuite, sous Windows ouvrez Paramètres > Système > Informations système, ou sur un Mac ouvrez le menu Pomme > À propos de ce Mac, et notez votre processeur et la quantité de RAM (mémoire) de l'ordinateur.",
          youCanNow: "nommer les principales pièces d'un ordinateur, dire à quoi sert chacune et trouver le processeur et la mémoire de votre propre ordinateur.",
          quickCheck: [
            { objective: "O1", q: "Quelle pièce garde vos fichiers quand l'ordinateur est éteint ?", options: ["La RAM", "Le CPU", "Le bloc d'alimentation", "Le SSD ou le disque dur"], answer: 3, why: "Le stockage (SSD ou HDD) garde les fichiers ; la RAM se vide quand on coupe le courant." },
            { objective: "O1", q: "Avant d'ouvrir un ordinateur de bureau, que fait d'abord un technicien ?", options: ["Il l'éteint et le débranche", "Il ouvre le bloc d'alimentation", "Il retire la batterie pendant qu'il tourne", "Il l'arrose d'eau pour le refroidir"], answer: 0, why: "On éteint et on débranche d'abord ; cela vous protège, vous et les pièces." }
          ]
        },
        {
          title: "Les bases du réseau : adresses IP, ipconfig et ping",
          objectives: ["O2"],
          minutes: 6,
          goal: "Vérifier la connexion réseau d'un ordinateur avec ipconfig et ping et noter les résultats.",
          text: [
            "Chaque appareil d'un réseau reçoit une adresse IP, comme une adresse postale pour les données. À la maison, elle ressemble souvent à 192.168.x.x ou 10.x.x.x. Votre routeur (ou votre box internet) distribue ces adresses automatiquement grâce à un service appelé DHCP. La passerelle par défaut est l'adresse du routeur : la porte entre votre réseau domestique et internet.",
            "Si un ordinateur Windows affiche une adresse qui commence par 169.254, il n'a pas pu obtenir d'adresse du DHCP. C'est un indice important : vérifiez le câble ou le Wi-Fi, puis le routeur.",
            "Deux outils que tout technicien utilise : ipconfig affiche votre adresse IP et votre passerelle par défaut (sous Windows, ouvrez l'invite de commandes et tapez ipconfig). ping envoie un petit message de test à un autre appareil et montre s'il répond. Faites d'abord un ping vers la passerelle ; si cela marche, faites un ping vers un site web comme comptia.org.",
            "Entraînez-vous uniquement sur votre propre ordinateur et votre propre réseau. Certains ordinateurs de bibliothèque ou de travail bloquent l'invite de commandes ; dans ce cas, utilisez les paramètres réseau pour trouver votre adresse IP."
          ],
          steps: ["Windows : appuyez sur la touche Windows, tapez cmd et ouvrez l'invite de commandes. Mac : ouvrez Terminal.", "Windows : tapez ipconfig et appuyez sur Entrée. Notez l'adresse IPv4 et la passerelle par défaut. Mac : trouvez l'adresse IP et le routeur dans Réglages Système > Réseau.", "Tapez ping suivi de l'adresse de votre passerelle, par exemple ping 192.168.1.1, et appuyez sur Entrée.", "Sur un Mac, appuyez sur Contrôle et C pour arrêter ping.", "Lisez le résultat : des réponses signifient que la connexion marche ; « délai d'attente dépassé » ou « inaccessible » signifie qu'elle ne marche pas."],
          words: [["Adresse IP", "un numéro qui identifie un appareil sur un réseau."], ["DHCP", "le service, en général dans le routeur, qui donne automatiquement aux appareils leur adresse IP."], ["Passerelle par défaut", "l'adresse du routeur ; la sortie de votre réseau vers internet."], ["ipconfig", "une commande Windows qui affiche vos paramètres réseau."], ["ping", "une commande qui teste si un autre appareil répond à travers le réseau."], ["Routeur", "l'appareil (souvent la box internet) qui relie votre réseau domestique à internet."]],
          slides: [
            { title: "Les adresses sur un réseau", bullets: ["Chaque appareil reçoit une adresse IP", "À la maison : souvent 192.168.x.x ou 10.x.x.x", "Le DHCP les distribue ; le routeur est la passerelle"] },
            { title: "L'indice 169.254", bullets: ["Windows affiche 169.254.x.x", "Il n'a pas pu obtenir d'adresse du DHCP", "Vérifiez le câble ou le Wi-Fi, puis le routeur"] },
            { title: "Deux outils", bullets: ["ipconfig : affiche votre adresse et votre passerelle", "ping : teste si un autre appareil répond", "Ping vers la passerelle d'abord, puis vers un site web"] },
            { title: "S'entraîner en sécurité", bullets: ["Seulement sur votre ordinateur et votre réseau", "Commande bloquée ? Utilisez les paramètres réseau"] }
          ],
          sources: [CORE1],
          tryIt: "Sur votre propre ordinateur, suivez les étapes. Notez votre adresse IP et votre passerelle par défaut, puis faites un ping vers la passerelle et vers comptia.org. Écrivez « marche » ou « ne marche pas » pour chacun. Gardez cette note pour votre tâche finale.",
          youCanNow: "trouver votre adresse IP et votre passerelle par défaut, tester une connexion avec ping et dire ce que signifie une adresse en 169.254.",
          quickCheck: [
            { objective: "O2", q: "Un portable Windows affiche l'adresse IP 169.254.20.5. Qu'est-ce que cela vous apprend ?", options: ["Internet est très rapide", "Il n'a pas obtenu d'adresse du DHCP", "Le portable a un virus", "Il faut changer l'écran"], answer: 1, why: "Une adresse en 169.254 signifie que l'appareil n'a pas pu joindre le DHCP : vérifiez la connexion et le routeur." },
            { objective: "O2", q: "Quelle commande affiche l'adresse IP et la passerelle par défaut d'un ordinateur Windows ?", options: ["ping", "print", "ipconfig", "shutdown"], answer: 2, why: "ipconfig affiche vos paramètres réseau ; ping teste une connexion." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier, le matériel et le réseau",
        questions: [
          { objective: "O6", q: "Quel examen couvre les systèmes d'exploitation et la sécurité ?", options: ["Core 1 (220-1201)", "Core 2 (220-1202)", "Les deux ne couvrent que le matériel", "Aucun des deux"], answer: 1, why: "Core 2 couvre les systèmes d'exploitation, la sécurité, le dépannage des logiciels et les procédures de travail." },
          { objective: "O1", q: "Un utilisateur dit que l'ordinateur ralentit quand beaucoup de programmes sont ouverts. Quelle pièce est une cause probable ?", options: ["Pas assez de RAM", "Le port HDMI", "Le clavier", "Le câble de l'écran"], answer: 0, why: "La RAM garde les programmes ouverts ; s'il y en a trop peu, l'ordinateur ralentit quand beaucoup sont ouverts." },
          { objective: "O1", q: "Quelle pièce fait le travail de réflexion et fait tourner les programmes ?", options: ["Le bloc d'alimentation", "Le port Ethernet", "Le disque dur", "Le CPU"], answer: 3, why: "Le CPU (processeur) fait tourner les programmes et fait les calculs." },
          { objective: "O2", q: "Qu'est-ce que la passerelle par défaut ?", options: ["Le site web le plus rapide", "Un type de câble", "L'adresse du routeur, la sortie vers internet", "Le mot de passe de l'ordinateur"], answer: 2, why: "La passerelle par défaut est le routeur qui relie votre réseau à internet." },
          { objective: "O2", q: "Le ping vers votre passerelle reçoit des réponses, mais le ping vers un site web échoue. Où le problème se trouve-t-il le plus probablement ?", options: ["Entre le routeur et internet", "Dans la RAM de l'ordinateur", "Dans le clavier", "Dans l'écran"], answer: 0, why: "L'ordinateur joint le routeur, donc la coupure est après le routeur : dans la connexion internet." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Systèmes, dépannage et votre plan",
      lessons: [
        {
          title: "Les outils du système d'exploitation de tous les jours",
          objectives: ["O3"],
          minutes: 5,
          goal: "Trouver la version du système, l'espace de stockage libre, les programmes ouverts et l'état des mises à jour sur votre propre ordinateur.",
          text: [
            "Le système d'exploitation (OS) est le programme principal qui fait fonctionner l'ordinateur : Windows, macOS, Linux ou, sur les téléphones, Android et iOS. L'examen A+ Core 2 attend de vous que vous sachiez vous y retrouver.",
            "Sous Windows : Paramètres > Système > Informations système affiche la version. Paramètres > Système > Stockage affiche l'espace libre. Le Gestionnaire des tâches (appuyez sur Ctrl + Maj + Échap) affiche les programmes ouverts et l'effort du CPU et de la mémoire ; vous pouvez y fermer un programme bloqué. Paramètres > Windows Update indique si des mises à jour attendent.",
            "Sur un Mac : le menu Pomme > À propos de ce Mac affiche la version. Le Moniteur d'activité (cherchez-le avec Spotlight) affiche les programmes ouverts. Réglages Système > Général > Mise à jour de logiciels affiche les mises à jour. Le stockage se trouve dans Réglages Système > Général > Stockage.",
            "Les bonnes habitudes de sécurité font partie du métier : installez les mises à jour, laissez l'antivirus intégré activé (Microsoft Defender sous Windows), utilisez un compte standard (pas administrateur) pour le travail quotidien et verrouillez l'écran quand vous vous éloignez (touche Windows + L sous Windows)."
          ],
          steps: ["Trouvez le nom et la version de l'OS.", "Trouvez l'espace de stockage libre.", "Ouvrez le Gestionnaire des tâches ou le Moniteur d'activité et trouvez le programme qui utilise le plus de mémoire.", "Recherchez les mises à jour.", "Verrouillez votre écran, puis déverrouillez-le."],
          words: [["Système d'exploitation (OS)", "le logiciel principal qui fait fonctionner un ordinateur ou un téléphone, comme Windows ou macOS."], ["Gestionnaire des tâches", "un outil Windows qui affiche les programmes ouverts et permet de fermer un programme bloqué."], ["Moniteur d'activité", "l'outil du Mac qui affiche les programmes ouverts."], ["Compte administrateur", "un compte qui peut installer des logiciels et changer les réglages. Le travail quotidien se fait avec un compte standard."]],
          slides: [
            { title: "Connaître le système d'exploitation", bullets: ["Windows, macOS, Linux ; Android et iOS sur les téléphones", "Core 2 les évalue tous"] },
            { title: "Outils Windows", bullets: ["Paramètres > Système > Informations système : version", "Paramètres > Système > Stockage : espace libre", "Ctrl + Maj + Échap : Gestionnaire des tâches", "Paramètres > Windows Update"] },
            { title: "Outils Mac", bullets: ["Menu Pomme > À propos de ce Mac", "Moniteur d'activité", "Réglages Système > Général > Mise à jour de logiciels"] },
            { title: "Habitudes de sécurité", bullets: ["Installez les mises à jour ; gardez l'antivirus activé", "Travail quotidien sur un compte standard", "Verrouillez l'écran quand vous vous éloignez"] }
          ],
          sources: [CORE2],
          tryIt: "Sur votre propre ordinateur, notez : le nom et la version de l'OS, l'espace de stockage libre, le programme qui utilise le plus de mémoire en ce moment et si des mises à jour attendent. Ajoutez cela à votre note réseau de la leçon 3. Vous avez maintenant presque toute la partie 2 de votre tâche finale.",
          youCanNow: "utiliser les outils intégrés pour vérifier la version, le stockage, les programmes ouverts et les mises à jour d'un ordinateur.",
          quickCheck: [
            { objective: "O3", q: "Un programme est bloqué sous Windows. Quel outil permet de le fermer ?", options: ["Le Gestionnaire des tâches", "Paint", "La Corbeille", "La calculatrice"], answer: 0, why: "Le Gestionnaire des tâches affiche les programmes ouverts et peut fermer un programme bloqué." },
            { objective: "O3", q: "Quelle est l'habitude la plus sûre pour le travail de tous les jours ?", options: ["Toujours utiliser le compte administrateur", "Désactiver les mises à jour", "Utiliser un compte standard et garder les mises à jour activées", "Désactiver l'antivirus pour gagner en vitesse"], answer: 2, why: "Un compte standard et des mises à jour à jour limitent les dégâts en cas de problème." }
          ]
        },
        {
          title: "La méthode de dépannage en six étapes",
          objectives: ["O4"],
          minutes: 6,
          goal: "Appliquer dans l'ordre les six étapes de dépannage de CompTIA à un problème.",
          text: [
            "Les bons techniciens ne devinent pas. Ils suivent une méthode. Les objectifs A+ utilisent six étapes : 1. Identifier le problème. 2. Établir une hypothèse sur la cause probable (remettez en question l'évidence). 3. Tester l'hypothèse pour trouver la cause. 4. Établir un plan d'action et appliquer la solution. 5. Vérifier que tout le système fonctionne et, si c'est utile, prendre des mesures pour que cela ne se reproduise pas. 6. Documenter ce que vous avez trouvé, ce que vous avez fait et le résultat.",
            "L'étape 1 consiste à poser des questions à l'utilisateur : Que s'est-il passé ? Quand est-ce que cela a commencé ? Est-ce que quelque chose a changé ? Y a-t-il un message d'erreur ? Sauvegardez les données importantes avant de modifier quoi que ce soit.",
            "L'étape 2 consiste à commencer par les causes simples : Est-ce branché ? Le Wi-Fi est-il activé ? L'appareil a-t-il été redémarré ? Si votre première hypothèse est fausse, faites-en une nouvelle et testez de nouveau, ou faites remonter le problème (transmettez-le à un technicien plus expérimenté).",
            "Exemple : une imprimante n'imprime pas. Hypothèse : elle est hors ligne. Test : l'écran de l'imprimante indique un bourrage papier. Solution : retirer le papier coincé avec précaution. Vérification : imprimer une page de test. Documentation : « Bourrage papier dans le bac 2, retiré, page de test imprimée. »"
          ],
          steps: ["Identifiez le problème : posez des questions, sauvegardez les données.", "Établissez une hypothèse sur la cause probable : commencez par l'évidence.", "Testez l'hypothèse. Fausse ? Faites-en une nouvelle ou faites remonter le problème.", "Établissez un plan et appliquez la solution.", "Vérifiez que cela marche et évitez que cela se reproduise si possible.", "Documentez ce que vous avez trouvé, ce que vous avez fait et le résultat."],
          words: [["Dépannage", "trouver et corriger la cause d'un problème, étape par étape."], ["Hypothèse sur la cause probable", "votre meilleure idée de ce qui cause le problème."], ["Faire remonter (escalader)", "transmettre un problème à quelqu'un qui a plus de compétences ou plus d'accès."], ["Documenter", "noter ce que vous avez trouvé et fait, en général dans le ticket."]],
          slides: [
            { title: "Les six étapes", bullets: ["1 Identifier  2 Hypothèse  3 Tester", "4 Planifier et corriger  5 Vérifier  6 Documenter"] },
            { title: "Étape 1 : identifier", bullets: ["Que s'est-il passé ? Quand ? Qu'est-ce qui a changé ?", "Un message d'erreur ?", "Sauvegarder les données avant tout changement"] },
            { title: "Étapes 2 et 3", bullets: ["Remettre en question l'évidence : courant, câbles, redémarrage", "Hypothèse fausse ? Une nouvelle, ou faire remonter"] },
            { title: "Étapes 4 à 6", bullets: ["Corriger, puis vérifier tout le système", "Éviter que cela se reproduise si possible", "Tout noter"] }
          ],
          sources: [CORE1],
          tryIt: "Choisissez un vrai problème que vous avez eu (portable lent, pas de Wi-Fi, un téléphone qui ne charge pas) ou prenez celui-ci : « Un utilisateur ne peut plus se connecter au Wi-Fi depuis qu'il a changé de bureau. » Écrivez sur papier les six étapes pour ce problème, avec ce que vous demanderiez, vérifieriez et noteriez à chaque étape.",
          youCanNow: "traiter un problème avec les six étapes de dépannage et noter chacune d'elles.",
          quickCheck: [
            { objective: "O4", q: "Quelle est la PREMIÈRE étape du dépannage ?", options: ["Remplacer le disque dur", "Documenter la solution", "Identifier le problème", "Vérifier le fonctionnement de tout le système"], answer: 2, why: "Vous devez comprendre le problème avant de chercher une cause." },
            { objective: "O4", q: "Vous avez réglé le problème. Que faites-vous avant de le documenter ?", options: ["Vérifier que tout le système fonctionne", "Fermer le ticket sans prévenir l'utilisateur", "Faire une nouvelle hypothèse", "Sauvegarder les données pour la première fois"], answer: 0, why: "L'étape 5 consiste à vérifier que tout marche ; l'étape 6, à documenter." }
          ]
        },
        {
          title: "Les tickets, parler aux utilisateurs et votre plan de révision A+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Rédiger un ticket d'assistance complet et un plan de révision et d'examen A+ daté.",
          text: [
            "Un ticket est le dossier d'un problème. Un bon ticket contient : le nom de l'utilisateur et le moyen de le joindre (dans un vrai emploi, cela vient du système de l'entreprise), l'appareil, un court résumé, les détails et les éventuels messages d'erreur, la priorité (le degré d'urgence), les étapes suivies et le résultat. Rédigez-le pour qu'un autre technicien puisse le reprendre et le comprendre.",
            "Votre façon de parler compte autant que la solution. Écoutez sans interrompre, reformulez le problème, utilisez des mots simples, ne faites jamais de reproche à l'utilisateur, dites-lui quand vous lui donnerez des nouvelles et vérifiez avec lui que tout est réglé avant de fermer le ticket. Gardez ses informations confidentielles.",
            "Planifiez maintenant vos examens. Utilisez les poids des domaines notés à la leçon 1. Choisissez une date cible pour chaque examen. Consacrez plus de semaines aux plus gros domaines. Utilisez des ressources gratuites : le document gratuit des objectifs d'examen de CompTIA, votre propre ordinateur et les contrôles des connaissances de ce cours. Beaucoup de gens révisent de 5 à 10 heures par semaine ; choisissez ce qui convient à votre vie et écrivez-le.",
            "Avant de vous inscrire, vérifiez sur la page officielle le prix actuel, les programmes de réduction et les modes de passage. Les agences pour l'emploi, les programmes pour anciens militaires et les programmes de réinsertion aident parfois à payer l'examen : renseignez-vous auprès du vôtre."
          ],
          steps: ["Ticket : remplissez utilisateur, appareil, résumé, détails, priorité, étapes suivies et résultat.", "Réponse : remerciez, expliquez ce que vous avez trouvé avec des mots simples, dites la suite et quand.", "Plan : écrivez une date cible pour Core 1 et pour Core 2.", "Listez chaque domaine avec son poids et le nombre de semaines que vous lui donnez.", "Écrivez vos heures de révision par semaine et l'endroit où vous réviserez.", "Vérifiez le prix et les modes de passage sur la page officielle ; demandez à un programme local s'il aide à payer."],
          words: [["Ticket", "le dossier écrit d'une demande d'assistance, du début à la fin."], ["Priorité", "le degré d'urgence d'un ticket, souvent basse, moyenne, haute ou critique."], ["Plan de révision", "un calendrier écrit de ce que vous allez réviser, quand, avec la date de votre examen."]],
          slides: [
            { title: "Un ticket complet", bullets: ["Utilisateur, appareil, résumé, détails, message d'erreur", "Priorité, étapes suivies, résultat", "Un autre technicien pourrait le reprendre"] },
            { title: "Parler aux utilisateurs", bullets: ["Écouter et reformuler le problème", "Des mots simples, aucun reproche", "Dire quand vous donnerez des nouvelles ; vérifier la solution"] },
            { title: "Votre plan A+", bullets: ["Date cible pour Core 1 et pour Core 2", "Plus de semaines pour les plus gros domaines", "Heures par semaine écrites noir sur blanc"] },
            { title: "Avant de vous inscrire", bullets: ["Vérifiez le prix et les modes de passage sur comptia.org", "Demandez de l'aide aux programmes d'emploi, d'anciens militaires ou de réinsertion"] }
          ],
          sources: [A_PLUS, CORE1, CORE2],
          tryIt: "Tâche finale : rédigez le ticket du problème de votre leçon 5 avec tous les champs et les six étapes, plus une réponse de deux phrases à l'utilisateur. Mettez sur une page votre note sur l'ordinateur des leçons 3 et 4. Puis rédigez votre plan de révision et d'examen A+ : dates cibles pour Core 1 et Core 2, chaque domaine avec son poids, et vos heures par semaine.",
          youCanNow: "rédiger un ticket d'assistance clair, répondre poliment à un utilisateur et suivre votre propre plan daté vers les deux examens A+.",
          quickCheck: [
            { objective: "O5", q: "Quel résumé de ticket est le plus utile ?", options: ["« En panne. »", "« L'utilisateur est nul en informatique. »", "« Au secours !! »", "« Le portable ne se connecte plus au Wi-Fi du bureau depuis le passage au bureau 14 ; erreur : pas d'internet. »"], answer: 3, why: "Il indique l'appareil, le problème, depuis quand et l'erreur, sans reproche." },
            { objective: "O6", q: "Core 1 a un domaine qui pèse 28 % et un autre 11 %. Comment devez-vous planifier ?", options: ["Donner le même temps aux deux", "Donner plus de temps de révision au domaine de 28 %", "Sauter le domaine de 28 %", "Réviser seulement le domaine de 11 %"], answer: 1, why: "Un poids plus grand signifie plus de questions, donc plus de temps de révision." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Systèmes, dépannage et votre plan",
        questions: [
          { objective: "O3", q: "Où trouvez-vous la version de Windows ?", options: ["Gestionnaire des tâches > Démarrage", "La Corbeille", "Paramètres > Système > Informations système", "Le menu de l'imprimante"], answer: 2, why: "Paramètres > Système > Informations système affiche l'édition et la version de Windows." },
          { objective: "O4", q: "Un écran reste noir. Quelle hypothèse devez-vous tester en premier ?", options: ["La carte mère est en panne", "Le câble d'alimentation ou le câble vidéo est mal branché", "Il faut réinstaller le système d'exploitation", "Le CPU est trop lent"], answer: 1, why: "Remettez en question l'évidence : les câbles et le courant sont les causes les plus fréquentes et les plus faciles à vérifier." },
          { objective: "O4", q: "Votre première hypothèse se révèle fausse. Que faites-vous ?", options: ["Faire une nouvelle hypothèse et la tester, ou faire remonter le problème", "Fermer le ticket", "Dire à l'utilisateur que ce n'est pas réparable", "Remplacer l'ordinateur"], answer: 0, why: "La méthode revient en arrière : une nouvelle hypothèse, ou faire remonter le problème si vous êtes bloqué." },
          { objective: "O5", q: "Un utilisateur est contrarié parce que son portable est tombé en panne avant une échéance. Quelle est la meilleure première réponse ?", options: ["« Vous avez dû le casser. »", "« Ce n'est pas mon problème. »", "Utiliser des mots techniques pour qu'il vous fasse confiance", "Écouter, reformuler le problème et dire ce que vous allez faire ensuite"], answer: 3, why: "Écouter, confirmer et donner une suite claire calme l'utilisateur et vous donne les faits." },
          { objective: "O6", q: "Qu'est-ce qui fait partie d'un plan de révision A+ complet ?", options: ["Des dates cibles pour les deux examens et des heures de révision par semaine", "Seulement le nom de la certification", "Une liste d'ordinateurs que vous aimez", "Votre numéro de sécurité sociale"], answer: 0, why: "Les dates, les domaines et les heures par semaine transforment un objectif en un plan que vous pouvez suivre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du support informatique (préparation à CompTIA A+)",
    questions: [
      { objective: "O6", q: "Qui délivre la certification A+ ?", options: ["Ce cours", "CompTIA, quand vous réussissez les deux examens", "Votre fournisseur d'accès à internet", "N'importe quel employeur"], answer: 1, why: "CompTIA délivre A+ ; le cours vous prépare." },
      { objective: "O6", q: "Le code d'examen 220-1201 correspond à :", options: ["Security+", "A+ Core 2", "A+ Core 1", "Network+"], answer: 2, why: "220-1201 est Core 1 ; 220-1202 est Core 2." },
      { objective: "O6", q: "Une question de mise en situation vous demande de :", options: ["Faire une petite tâche pratique", "Rédiger une dissertation", "Parler à une personne", "Apporter votre propre ordinateur"], answer: 0, why: "Les questions de mise en situation vous font faire quelque chose, comme configurer ou corriger un réglage." },
      { objective: "O1", q: "Quelle pièce est la mémoire à court terme qui se vide quand on coupe le courant ?", options: ["SSD", "HDD", "Bloc d'alimentation", "RAM"], answer: 3, why: "La RAM garde le travail ouvert seulement tant que l'ordinateur est allumé." },
      { objective: "O1", q: "Qu'est-ce qui est vrai pour un SSD par rapport à un HDD ?", options: ["Il a des disques qui tournent", "Il est en général plus rapide et n'a pas de pièces mobiles", "Il ne stocke que de la musique", "C'est un type d'écran"], answer: 1, why: "Les SSD utilisent des puces sans pièces mobiles, donc ils sont plus rapides." },
      { objective: "O1", q: "Quel port relie un ordinateur à un réseau filaire ?", options: ["Ethernet", "HDMI", "Prise casque", "USB-C seulement pour la charge"], answer: 0, why: "Ethernet est le port réseau filaire ; HDMI sert aux écrans." },
      { objective: "O1", q: "Que ne doit JAMAIS ouvrir un technicien ?", options: ["Le boîtier d'un ordinateur de bureau, après l'avoir débranché", "Le menu des réglages d'un portable", "Un bloc d'alimentation", "Un ticket"], answer: 2, why: "Les blocs d'alimentation gardent une charge électrique dangereuse ; on les remplace, on ne les ouvre pas." },
      { objective: "O2", q: "À quoi sert le DHCP ?", options: ["À imprimer des documents", "À distribuer automatiquement les adresses IP", "À bloquer les virus", "À charger la batterie"], answer: 1, why: "Le DHCP, en général dans le routeur, donne aux appareils leur adresse IP." },
      { objective: "O2", q: "Quelle commande teste si un autre appareil répond à travers le réseau ?", options: ["ipconfig", "dir", "cls", "ping"], answer: 3, why: "ping envoie un message de test et montre si des réponses reviennent." },
      { objective: "O2", q: "Quelle adresse est très probablement une adresse normale de réseau domestique ?", options: ["192.168.1.25", "169.254.10.3", "999.1.1.1", "www.home"], answer: 0, why: "192.168.x.x est une plage courante à la maison ; 169.254 signifie que le DHCP a échoué, et 999 n'est pas valide." },
      { objective: "O3", q: "Quelles touches ouvrent le Gestionnaire des tâches sous Windows ?", options: ["Ctrl + P", "Ctrl + Maj + Échap", "Alt + Tab", "Windows + L"], answer: 1, why: "Ctrl + Maj + Échap ouvre le Gestionnaire des tâches ; Windows + L verrouille l'écran." },
      { objective: "O3", q: "Sur un Mac, quel outil affiche les programmes ouverts ?", options: ["Moniteur d'activité", "Notes", "Photos", "Calendrier"], answer: 0, why: "Le Moniteur d'activité est l'équivalent Mac du Gestionnaire des tâches." },
      { objective: "O3", q: "Vous quittez votre poste au travail. Que faites-vous ?", options: ["Laisser l'écran ouvert", "Désactiver l'antivirus", "Verrouiller l'écran", "Se connecter en administrateur"], answer: 2, why: "Verrouiller l'écran empêche d'autres personnes d'utiliser votre compte." },
      { objective: "O4", q: "Mettez dans l'ordre : Tester l'hypothèse, Identifier le problème, Établir une hypothèse.", options: ["Hypothèse, Identifier, Tester", "Tester, Hypothèse, Identifier", "Identifier, Tester, Hypothèse", "Identifier, Hypothèse, Tester"], answer: 3, why: "On identifie le problème, on établit une hypothèse, puis on la teste." },
      { objective: "O4", q: "Que devez-vous faire avant de modifier l'ordinateur d'un utilisateur ?", options: ["Sauvegarder les données importantes", "Supprimer les vieux fichiers", "Changer son mot de passe", "Réinstaller le système"], answer: 0, why: "Sauvegarder d'abord protège les données de l'utilisateur si une solution tourne mal." },
      { objective: "O4", q: "Quelle est la DERNIÈRE étape de la méthode de dépannage ?", options: ["Tester l'hypothèse", "Documenter ce qui a été trouvé, fait et obtenu", "Identifier le problème", "Redémarrer l'ordinateur"], answer: 1, why: "L'étape 6 consiste à documenter, pour que d'autres en tirent des leçons et que le dossier soit complet." },
      { objective: "O5", q: "Qu'est-ce qui a sa place dans un ticket d'assistance ?", options: ["Votre avis sur l'utilisateur", "Des blagues sur le problème", "Les étapes suivies et le résultat", "Les coordonnées bancaires de l'utilisateur"], answer: 2, why: "Les étapes et les résultats permettent à n'importe quel technicien de suivre ce qui s'est passé." },
      { objective: "O5", q: "Quand devez-vous fermer un ticket ?", options: ["Dès que vous commencez à travailler", "Après que l'utilisateur a confirmé que c'est réglé", "Quand l'utilisateur ne répond plus depuis une heure", "Avant de tester la solution"], answer: 1, why: "Vérifier avec l'utilisateur garantit que le problème est vraiment résolu." },
      { objective: "O5", q: "Quelle réponse est la meilleure pour un utilisateur ?", options: ["« Votre bail DHCP a échoué, évidemment. »", "« Vous vous êtes encore trompé. »", "« Demandez à quelqu'un d'autre. »", "« Votre portable n'a pas pu obtenir d'adresse réseau. Je l'ai réinitialisée et tout marche maintenant. Appelez-moi si cela se reproduit. »"], answer: 3, why: "Elle utilise des mots simples, ne fait aucun reproche et dit à l'utilisateur quoi faire ensuite." },
      { objective: "O6", q: "Où devez-vous vérifier les prix et les modes de passage actuels d'A+ avant de vous inscrire ?", options: ["Sur le site officiel de CompTIA", "Dans un commentaire sur les réseaux sociaux", "Dans un vieux manuel", "Dans une publicité qui s'ouvre toute seule"], answer: 0, why: "Seul le site officiel donne les prix, les versions et les options actuels." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 5, 8, 9, 10, 13, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Note sur l'ordinateur", objective: "O3", notYet: "Il manque la version de l'OS, l'espace libre ou les mises à jour.", meets: "Indique l'OS et sa version, l'espace libre, le programme qui utilise le plus de mémoire et l'état des mises à jour.", exceeds: "Indique aussi le processeur et la RAM et explique ce qu'ils signifient pour la vitesse." },
      { name: "Vérification réseau", objective: "O2", notYet: "Pas d'adresse IP ni de passerelle, ou ping non essayé.", meets: "Note l'adresse IP et la passerelle et le résultat du ping vers la passerelle et vers un site web.", exceeds: "Explique ce que signifieraient les résultats si un ping échouait, y compris une adresse en 169.254." },
      { name: "Étapes de dépannage", objective: "O4", notYet: "Des étapes manquent ou ne sont pas dans l'ordre, ou la solution est devinée.", meets: "Les six étapes dans l'ordre, avec ce qui a été demandé, testé et fait.", exceeds: "Comprend une deuxième hypothèse ou un moment où faire remonter le problème, et un moyen d'éviter qu'il se reproduise." },
      { name: "Ticket et réponse", objective: "O5", notYet: "Le ticket est vague, ou la réponse fait des reproches à l'utilisateur ou utilise du jargon.", meets: "Tous les champs du ticket sont remplis ; la réponse est polie, simple et dit la suite.", exceeds: "Une autre personne pourrait suivre le ticket sans poser une seule question." },
      { name: "Plan de révision et d'examen", objective: "O6", notYet: "Pas de dates, ou des domaines manquent.", meets: "Dates cibles pour Core 1 et Core 2, chaque domaine avec son poids, heures par semaine.", exceeds: "Le plan donne plus de semaines aux domaines les plus lourds et indique où vérifier le prix et trouver de l'aide pour les frais." },
      { name: "Vocabulaire du matériel", objective: "O1", notYet: "Des pièces sont mal nommées dans la note ou le ticket.", meets: "Les pièces et les ports sont nommés correctement.", exceeds: "Relie un symptôme à une pièce probable, par exemple lenteur avec beaucoup de programmes ouverts et peu de RAM." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent à A+ Core 1 ou Core 2, ou le réussissent, dans les 6 mois (enquête de suivi)",
      "Apprenants qui postulent ou commencent un emploi de support informatique, d'assistance ou de technicien dans les 6 mois",
      "Les programmes partenaires (agences pour l'emploi, services pour anciens militaires et de réinsertion) signalent des apprenants qui entrent en formation ou en emploi dans l'informatique"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un ordinateur Windows ou Mac avec internet (personnel ou de bibliothèque ; l'invite de commandes peut être bloquée sur certains ordinateurs partagés)",
      "Papier et stylo, ou un document, pour les notes, le ticket et le plan",
      "Les pages officielles CompTIA A+ Core 1 et Core 2",
      "Environ 90 minutes au total, en courtes séances, plus du temps de révision régulier pour les examens"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble ; utilisez les résultats pour choisir les leçons qui demandent plus de temps.",
      "Si vous avez un vieil ordinateur débranché, montrez les pièces avec le boîtier ouvert ; les apprenants n'ouvrent pas eux-mêmes les appareils sauf s'ils sont formés et encadrés.",
      "Dans une salle informatique, vérifiez que l'invite de commandes fonctionne avant la leçon 3, ou montrez plutôt la page des paramètres réseau.",
      "Mettez les apprenants par deux pour jouer l'utilisateur et le technicien à la leçon 6, puis inversez les rôles.",
      "Rappelez aux apprenants que ce cours les prépare et ne délivre pas A+ ; aidez-les à trouver des programmes locaux qui aident à payer les examens.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
