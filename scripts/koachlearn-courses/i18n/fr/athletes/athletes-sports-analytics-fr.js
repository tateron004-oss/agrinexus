"use strict";

// Koach Learn course (French translation of athletes/athletes-sports-analytics.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-sports-analytics-fr",
  lang: "fr",
  translationOf: "athletes-sports-analytics",
  category: "Athletes",
  name: "Les bases de l'analyse de données sportives",
  skills: "Poser une question d'analyse, Nettoyer un tableau de données sportives, Calculer des moyennes, des pourcentages et des taux, Faire un graphique clair, Expliquer un résultat honnêtement",
  outcome: "répondre à une vraie question sur un joueur ou une équipe avec des données : rassembler et nettoyer un petit tableau, calculer des moyennes, des pourcentages et des taux par match dans Google Sheets, faire un graphique clair, et expliquer le résultat et ses limites en trois phrases.",
  about: [
    "Ce cours s'adresse aux athlètes, aux entraîneurs, aux responsables d'équipe et aux fans qui veulent comprendre les chiffres du sport et bien les utiliser. Aucune maths au-delà de l'arithmétique de base n'est nécessaire.",
    "L'analyse de données, ce n'est pas avoir le plus de chiffres. C'est poser une bonne question, utiliser des données propres, faire des calculs simples correctement, les montrer clairement et être honnête sur ce qu'ils ne prouvent pas. Vous utiliserez Google Sheets et un assistant IA comme aide.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Répondez à une question sur votre équipe ou une équipe que vous aimez avec des données : écrivez la question, rassemblez les données d'au moins 10 matchs à partir d'une feuille de match ou d'une page officielle de statistiques, nettoyez-les, calculez au moins une moyenne, un pourcentage et un taux par match, faites un graphique, et écrivez un résultat en trois phrases qui inclut une limite de vos données.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes, des entraîneurs, des responsables d'équipe et des supporters qui veulent bien utiliser les chiffres du sport. Beaucoup suivent déjà les statistiques, mais n'ont jamais travaillé avec elles dans un tableur.",
    startingPoint: "Ils savent lire une feuille de match et faire des calculs simples. Ils utilisent peu ou pas les formules et les graphiques d'un tableur, et ont peu l'habitude de juger si un chiffre prouve quelque chose.",
    gap: "Les discussions sur le sport sont pleines de chiffres trompeurs : de très petits échantillons, des pourcentages mal moyennés et des corrélations prises pour des causes. Les apprenants doivent répondre à une vraie question avec des données propres, des calculs simples et justes, un graphique clair et une limite honnête, pour que leurs résultats aident un entraîneur ou une équipe au lieu de les embrouiller.",
    constraints: [
      "Mathématiques : calculs simples seulement ; les formules sont montrées étape par étape",
      "Appareils : un téléphone ou un ordinateur avec Google Sheets, gratuit",
      "Temps : environ cinq minutes par leçon, plus le temps de saisir les données de 10 matchs",
      "Les données doivent venir des statistiques officielles de l'équipe, de la ligue ou de l'école",
      "Les données d'un joueur ne sont partagées publiquement qu'avec son autorisation"
    ],
    prerequisites: "Aucun. Les personnes qui découvrent les tableurs peuvent d'abord suivre un cours de base sur Google Sheets."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une équipe ou d'un joueur que vous suivez", action: "écrire une question d'analyse précise à laquelle les données d'une feuille de match peuvent répondre", standard: "en nommant la statistique, les matchs et la comparaison" },
    { id: "O2", condition: "Avec une source de statistiques officielle et Google Sheets", action: "rassembler les données d'au moins 10 matchs et les nettoyer", standard: "avec un match par ligne et chaque trou ou incohérence corrigé à partir de la source" },
    { id: "O3", condition: "À partir d'un tableau propre", action: "calculer une moyenne, un pourcentage et un taux par match avec des formules de tableur", standard: "en vérifiant un résultat à la main avec une calculatrice" },
    { id: "O4", condition: "À partir de vos résultats calculés", action: "choisir et faire un graphique qui répond à votre question", standard: "avec un titre qui énonce le résultat et les deux axes légendés" },
    { id: "O5", condition: "À partir d'un résultat", action: "vérifier s'il cache un petit échantillon, une corrélation prise pour une cause ou un contexte manquant", standard: "en écrivant la taille de l'échantillon et au moins deux autres explications possibles" },
    { id: "O6", condition: "À partir de votre graphique et de vos vérifications", action: "écrire et partager un résultat en trois phrases avec ses limites", standard: "avec un chiffre, pourquoi il compte et une limite des données" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Questions et données",
      lessons: [
        {
          objectives: ["O1"],
          title: "Partir d'une bonne question",
          minutes: 4,
          goal: "Écrire une question d'analyse claire à laquelle on peut répondre avec des données.",
          text: [
            "L'analyse commence par une question, pas par un tableur. Une bonne question est précise et a une réponse possible : « Notre équipe a-t-elle un meilleur pourcentage à trois points à domicile ou à l'extérieur ? » « Mon service est-il plus précis dans le premier set ou dans le troisième ? »",
            "Évitez les questions trop vastes (« Qui est le meilleur joueur de tous les temps ? ») ou auxquelles les données ne peuvent pas répondre (« Qui fait le plus d'efforts ? »).",
            "Notez les données dont vous avez besoin pour y répondre : quelles statistiques, combien de matchs et où vous les trouverez."
          ],
          steps: ["Écrivez une question sur votre équipe ou un joueur.", "Rendez-la précise : qui, quelle statistique, quelle comparaison.", "Vérifiez que les données peuvent y répondre.", "Listez les données nécessaires et où les trouver."],
          words: [["Analyse de données", "utiliser des données pour répondre à des questions et prendre de meilleures décisions."], ["Données", "des faits et des chiffres, comme les points, les tentatives et les réussites."]],
          slides: [
            { title: "La question d'abord", bullets: ["Pas le tableur", "Précise et avec une réponse possible"] },
            { title: "Bonne ou trop vaste", bullets: ["Bonne : % à 3 points domicile ou extérieur", "Trop vaste : « meilleur joueur de tous les temps ? »", "Pas une donnée : « qui fait le plus d'efforts ? »"] },
            { title: "Prévoyez les données", bullets: ["Quelles statistiques", "Combien de matchs", "Où les trouver"] }
          ],
          tryIt: "Écrivez trois questions d'analyse sur votre équipe ou une équipe que vous aimez. Demandez à un assistant IA laquelle se prête le mieux à une réponse avec des feuilles de match. Choisissez-en une et listez les données nécessaires.",
          youCanNow: "écrire une question d'analyse précise et prévoir les données pour y répondre.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui permet de répondre à une question d'analyse ?", options: ["Elle nomme une statistique et une comparaison que l'on peut compter", "Elle demande qui est la meilleure personne", "Elle porte sur des sentiments", "Elle ne contient aucun chiffre"], answer: 0, why: "Une bonne question renvoie à des données que l'on peut rassembler et comparer." },
            { objective: "O1", q: "Votre question est « Notre équipe est-elle bonne ? ». Que faites-vous ?", options: ["La garder telle quelle", "La rendre précise, par exemple comparer les rebonds par match à domicile et à l'extérieur", "Faire voter un supporter", "Sauter la question et commencer les graphiques"], answer: 1, why: "Une question précise vous dit exactement quelles données rassembler." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rassembler et nettoyer les données",
          minutes: 6,
          goal: "Rassembler les données d'au moins 10 matchs et les nettoyer pour qu'elles soient prêtes à l'emploi.",
          text: [
            "Prenez les données dans des sources fiables : les statistiques officielles de votre équipe, les sites de la ligue ou du sport scolaire, ou les feuilles de match officielles. Notez d'où vient chaque chiffre.",
            "Mettez-les dans Google Sheets : une ligne par match, une colonne par statistique, avec une ligne d'en-tête (Date, Adversaire, Domicile/Extérieur, 3PA, 3PM, c'est-à-dire tirs à 3 points tentés et réussis). Nettoyer veut dire corriger les problèmes : fautes de frappe, valeurs manquantes, la même équipe écrite de deux façons, des nombres enregistrés comme du texte ou des lignes en double.",
            "Un assistant IA peut vous aider à repérer les problèmes : collez le tableau et demandez « Trouve les fautes de frappe, doublons, valeurs manquantes ou noms incohérents. Ne change pas les chiffres, liste seulement les problèmes. » Corrigez-les ensuite vous-même à partir de la source d'origine."
          ],
          steps: ["Trouvez une source officielle pour vos statistiques.", "Prévoyez une ligne par match et une colonne par statistique.", "Saisissez au moins 10 matchs.", "Cherchez les fautes de frappe, doublons, valeurs manquantes et noms incohérents.", "Corrigez-les à partir de la source, pas en devinant."],
          words: [["Feuille de match", "un tableau des statistiques d'un match."], ["Nettoyage des données", "corriger les erreurs et les manques dans les données avant de les utiliser."], ["Valeur manquante", "une case vide là où il devrait y avoir un chiffre."]],
          slides: [
            { title: "Sources fiables", bullets: ["Statistiques officielles de l'équipe", "Sites de la ligue ou du sport scolaire", "Notez la source"] },
            { title: "Organisation du tableau", bullets: ["Une ligne par match", "Une colonne par statistique", "Ligne d'en-tête avec des noms clairs"] },
            { title: "Nettoyez-le", bullets: ["Fautes, doublons, cases vides", "Même nom écrit de deux façons", "L'IA liste les problèmes ; vous corrigez avec la source"] }
          ],
          tryIt: "Saisissez dans Google Sheets les données d'au moins 10 matchs à partir d'une source officielle. Demandez à l'IA de lister les problèmes, puis corrigez chacun à partir de la source.",
          youCanNow: "rassembler des données sportives à partir de sources fiables et les nettoyer.",
          quickCheck: [
            { objective: "O2", q: "Que doit contenir chaque ligne de votre tableau de statistiques ?", options: ["Une saison", "Toute la carrière d'un joueur", "Un match", "Le nom d'une équipe"], answer: 2, why: "Un match par ligne rend les données faciles à compter et à vérifier." },
            { objective: "O2", q: "Le nombre de tentatives du match 7 manque. Que faites-vous ?", options: ["Deviner un nombre", "Utiliser l'estimation de l'IA", "Supprimer tous les matchs", "Le chercher dans la feuille de match officielle"], answer: 3, why: "Les trous se corrigent à partir de la source d'origine, pas en devinant." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Moyennes, pourcentages et taux",
          minutes: 6,
          goal: "Calculer une moyenne, un pourcentage et un taux par match dans Google Sheets.",
          text: [
            "Moyenne : additionnez les valeurs et divisez par leur nombre. Dans Sheets, =AVERAGE(B2:B11) donne la moyenne de ces cellules (la fonction s'appelle MOYENNE dans la version française de Sheets).",
            "Pourcentage : les réussites divisées par les tentatives. Pourcentage à trois points = 3PM / 3PA. Additionnez d'abord les totaux, puis divisez : =SUM(E2:E11)/SUM(D2:D11). Faire la moyenne des pourcentages de chaque match peut donner une mauvaise réponse quand le nombre de tentatives varie beaucoup.",
            "Taux : une statistique par match, par minute ou par tentative permet des comparaisons équitables quand le temps de jeu varie. Points par match = total des points / matchs joués. Un assistant IA peut expliquer n'importe quelle formule ; vérifiez les résultats avec une calculatrice sur une ligne."
          ],
          steps: ["Utilisez =AVERAGE() pour une moyenne.", "Pour un pourcentage, divisez le total des réussites par le total des tentatives.", "Pour un taux, divisez un total par les matchs ou les minutes.", "Affichez les pourcentages au format pourcentage.", "Vérifiez un résultat avec une calculatrice."],
          words: [["Moyenne", "le total divisé par le nombre de valeurs."], ["Pourcentage", "une part sur 100, comme les réussites sur les tentatives."], ["Taux", "une statistique par unité, comme par match ou par minute."]],
          slides: [
            { title: "Moyenne", bullets: ["Total / nombre de valeurs", "=AVERAGE(B2:B11)"] },
            { title: "Pourcentage", bullets: ["Total des réussites / total des tentatives", "=SUM(réussites)/SUM(tentatives)", "Ne faites pas la moyenne des % par match"] },
            { title: "Taux", bullets: ["Par match, par minute, par tentative", "Équitable quand le temps de jeu varie", "Vérifiez-en un avec une calculatrice"] }
          ],
          tryIt: "Dans votre tableau, calculez une moyenne, un pourcentage (méthode des totaux) et un taux par match. Vérifiez-en un avec une calculatrice.",
          youCanNow: "calculer correctement des moyennes, des pourcentages et des taux dans un tableur.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un taux par match ?", options: ["Un total divisé par le nombre de matchs", "Le score du dernier match", "Le plus grand nombre d'une colonne", "Une supposition sur le prochain match"], answer: 0, why: "Un taux répartit un total sur les matchs pour comparer les joueurs équitablement." },
            { objective: "O3", q: "Vous avez calculé un pourcentage d'équipe avec une formule. Comment le vérifiez-vous ?", options: ["Faire confiance à la formule", "Refaire un résultat avec une calculatrice", "Demander à un supporter", "Modifier les données jusqu'à ce que ça paraisse juste"], answer: 1, why: "Vérifier un résultat à la main permet de repérer les erreurs de formule." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Questions et données",
        questions: [
          { objective: "O1", q: "Laquelle est une bonne question d'analyse ?", options: ["« Qui est le meilleur de tous les temps ? »", "« Qui fait le plus d'efforts ? »", "« Tirons-nous mieux à trois points à domicile ou à l'extérieur ? »", "« Le sport, c'est amusant ? »"], answer: 2, why: "Elle est précise et les données peuvent y répondre." },
          { objective: "O2", q: "D'où doivent venir vos données ?", options: ["Des statistiques officielles de l'équipe, de la ligue ou de l'école", "Seulement de votre mémoire", "D'un commentaire au hasard", "De suppositions"], answer: 0, why: "Des sources fiables donnent des réponses fiables." },
          { objective: "O2", q: "Nettoyer les données veut dire :", options: ["Supprimer toutes les données", "Agrandir les chiffres", "Changer de source", "Corriger les erreurs et les manques avant d'utiliser les données"], answer: 3, why: "Des données propres donnent des résultats corrects." },
          { objective: "O3", q: "Le pourcentage à trois points d'une équipe sur 10 matchs se calcule le mieux par :", options: ["La moyenne des pourcentages de chaque match", "Le total des réussites divisé par le total des tentatives", "L'addition des pourcentages", "Une supposition"], answer: 1, why: "Les totaux traitent correctement les matchs avec des nombres de tentatives différents." },
          { objective: "O3", q: "Pourquoi utiliser des taux par match ou par minute ?", options: ["Pour agrandir les chiffres", "Pour comparer équitablement quand le temps de jeu varie", "Parce que c'est à la mode", "Pour cacher des données"], answer: 1, why: "Les taux tiennent compte des occasions." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Montrer et expliquer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Faire un graphique clair",
          minutes: 5,
          goal: "Faire un graphique qui répond à votre question d'un coup d'œil.",
          text: [
            "Choisissez le graphique adapté à la question. Comparer des groupes (domicile ou extérieur) : un diagramme en barres. Une évolution dans le temps (points match après match) : une courbe. Les parties d'un tout : un diagramme en barres est généralement plus clair qu'un camembert.",
            "Restez clair : un titre qui énonce le résultat (« Nous tirons à trois points 6 points de pourcentage mieux à domicile »), des axes légendés, un axe vertical qui commence à zéro pour les diagrammes en barres, et pas de décoration inutile.",
            "Dans Google Sheets, sélectionnez vos données et insérez un graphique, puis choisissez le type de graphique et modifiez les légendes. Vous pouvez demander à un assistant IA quel type de graphique convient à votre question."
          ],
          steps: ["Décidez : comparer des groupes ou une évolution dans le temps ?", "Choisissez barres ou courbe.", "Insérez le graphique dans Sheets.", "Écrivez un titre qui énonce le résultat.", "Légendez les axes ; commencez les barres à zéro."],
          words: [["Diagramme en barres", "un graphique avec des barres pour comparer des groupes."], ["Courbe", "un graphique avec une ligne pour montrer une évolution dans le temps."], ["Axe", "la ligne sur le côté ou en bas d'un graphique, avec des légendes."]],
          slides: [
            { title: "Choisir le graphique", bullets: ["Comparer des groupes : barres", "Évolution dans le temps : courbe", "Les barres sont souvent plus claires qu'un camembert"] },
            { title: "Restez clair", bullets: ["Le titre énonce le résultat", "Axes légendés", "Les barres commencent à zéro"] },
            { title: "Dans Sheets", bullets: ["Sélectionnez les données, insérez un graphique", "Choisissez le type, modifiez les légendes"] }
          ],
          tryIt: "Faites un graphique qui répond à votre question. Donnez-lui un titre qui énonce le résultat, et légendez les deux axes.",
          youCanNow: "faire un graphique clair qui répond à une question d'un coup d'œil.",
          quickCheck: [
            { objective: "O4", q: "Que doit faire un bon titre de graphique ?", options: ["Dire seulement « Graphique 1 »", "Lister tous les chiffres", "Énoncer le résultat", "Rester vide"], answer: 2, why: "Un titre qui énonce le résultat permet de comprendre le graphique d'un coup d'œil." },
            { objective: "O4", q: "Vous comparez l'adresse au tir à domicile et à l'extérieur. Quel graphique choisissez-vous ?", options: ["Un graphique en secteurs", "Une carte", "Un tableau sans graphique", "Un graphique en barres"], answer: 3, why: "Les graphiques en barres comparent clairement quelques groupes côte à côte." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Corrélation, taille de l'échantillon et autres pièges",
          minutes: 5,
          goal: "Repérer trois pièges courants qui rendent les chiffres trompeurs.",
          text: [
            "Les petits échantillons : trois matchs ne suffisent pas à prouver grand-chose. Un joueur qui réussit 4 tirs sur 5 n'est pas forcément un tireur à 80 %. Plus il y a de matchs, plus vous pouvez être confiant.",
            "Corrélation n'est pas causalité : si une équipe gagne plus quand elle porte du bleu, le maillot n'en est probablement pas la cause. Deux choses qui évoluent ensemble ne veulent pas dire que l'une cause l'autre ; cherchez d'autres explications, comme la force de l'adversaire ou les matchs à domicile.",
            "Le contexte compte : les statistiques ne mesurent pas tout, comme l'effort défensif, les blessures ou le niveau des adversaires. Un assistant IA peut vous aider à lister d'autres explications : « Qu'est-ce qui pourrait aussi expliquer cette tendance ? »"
          ],
          steps: ["Vérifiez la taille de l'échantillon.", "Demandez-vous : autre chose pourrait-il l'expliquer ?", "Regardez le contexte : adversaires, blessures, domicile/extérieur.", "Demandez à l'IA d'autres explications.", "Notez votre niveau de confiance."],
          words: [["Taille de l'échantillon", "le nombre de matchs ou de tentatives dans vos données."], ["Corrélation", "deux choses qui ont tendance à évoluer ensemble."], ["Causalité", "quand une chose en cause vraiment une autre."]],
          slides: [
            { title: "Les petits échantillons", bullets: ["4 sur 5 n'est pas un 80 % prouvé", "Plus de matchs, plus de confiance"] },
            { title: "Corrélation n'est pas causalité", bullets: ["Les maillots bleus ne gagnent pas les matchs", "Cherchez d'autres explications"] },
            { title: "Le contexte", bullets: ["Adversaires, blessures, domicile/extérieur", "L'effort et la défense ne sont pas toujours comptés"] }
          ],
          tryIt: "Regardez votre résultat. Notez la taille de l'échantillon, deux autres choses qui pourraient l'expliquer et votre niveau de confiance (faible, moyen, élevé).",
          youCanNow: "repérer les petits échantillons, la confusion entre corrélation et causalité et le contexte manquant.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le piège du petit échantillon ?", options: ["Tirer une grande conclusion de trop peu de matchs ou de tentatives", "Utiliser des données officielles", "Faire un graphique en barres", "Légender les axes"], answer: 0, why: "Quelques matchs ou tentatives peuvent varier beaucoup par hasard." },
            { objective: "O5", q: "Votre équipe a marqué davantage après un nouvel échauffement, mais elle a aussi joué contre des adversaires plus faibles. Qu'écrivez-vous ?", options: ["L'échauffement en est la cause", "Les adversaires plus faibles peuvent aussi l'expliquer", "Rien ; c'est prouvé", "Supprimer le résultat"], answer: 1, why: "D'autres facteurs peuvent expliquer une tendance, alors vous les nommez." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Expliquer votre résultat",
          minutes: 5,
          goal: "Écrire et partager un résultat en trois phrases avec ses limites.",
          text: [
            "Un bon résultat tient en trois phrases : 1. Ce que vous avez trouvé, avec un chiffre. 2. Pourquoi cela pourrait compter pour l'équipe. 3. Une limite des données. Exemple : « Sur 12 matchs, nous avons tiré à 38 % à trois points à domicile et à 31 % à l'extérieur. Si cela se confirme, travailler nos routines de match à l'extérieur pourrait aider. Avec seulement 6 matchs à l'extérieur, cela pourrait être dû au hasard. »",
            "Demandez à un assistant IA de rendre vos phrases plus claires, puis vérifiez vous-même les chiffres. Montrez le graphique avec.",
            "Partagez-le avec votre entraîneur comme une information, pas comme une exigence. Les entraîneurs combinent les chiffres avec ce qu'ils voient. Ne partagez jamais publiquement les données individuelles des joueurs sans permission."
          ],
          steps: ["Phrase 1 : ce que vous avez trouvé, avec un chiffre.", "Phrase 2 : pourquoi cela pourrait compter.", "Phrase 3 : une limite.", "Ajoutez votre graphique.", "Partagez avec votre entraîneur, pas publiquement."],
          words: [["Résultat", "ce que montre votre analyse."], ["Limite", "une raison pour laquelle le résultat n'est peut-être pas entièrement fiable."]],
          slides: [
            { title: "Trois phrases", bullets: ["1. Ce que vous avez trouvé, avec un chiffre", "2. Pourquoi cela pourrait compter", "3. Une limite"] },
            { title: "Peaufinez", bullets: ["L'IA le rend plus clair", "Vous vérifiez les chiffres", "Ajoutez votre graphique"] },
            { title: "Bien partager", bullets: ["Une information, pas une exigence", "L'entraîneur combine données et observation", "Pas de données de joueurs en public sans permission"] }
          ],
          tryIt: "Tâche finale : écrivez votre résultat en trois phrases avec votre graphique, la taille de l'échantillon et la source, et partagez-le avec votre entraîneur ou un coéquipier.",
          youCanNow: "expliquer honnêtement un résultat d'analyse, y compris ses limites.",
          quickCheck: [
            { objective: "O6", q: "Quelles sont les trois parties d'un bon résultat ?", options: ["Une blague, un graphique et une supposition", "Seulement le plus grand chiffre", "Un chiffre, pourquoi il compte et une limite", "Une exigence, une date limite et un nom"], answer: 2, why: "Ces trois parties rendent un résultat clair et honnête." },
            { objective: "O6", q: "Vous voulez publier en ligne les statistiques d'un coéquipier. Que faites-vous d'abord ?", options: ["Les publier tout de suite", "Modifier un peu son nom", "Publier seulement ses mauvais matchs", "Lui demander son autorisation"], answer: 3, why: "Les données d'un joueur ne sont partagées publiquement qu'avec son autorisation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Montrer et expliquer",
        questions: [
          { objective: "O4", q: "Quel graphique convient à « les points match après match sur la saison » ?", options: ["Un camembert", "Aucun graphique", "Une carte", "Une courbe"], answer: 3, why: "Les courbes montrent l'évolution dans le temps." },
          { objective: "O4", q: "Un bon titre de graphique :", options: ["Énonce le résultat", "Dit « Graphique 1 »", "Est vide", "Est une blague"], answer: 0, why: "Il dit au lecteur quoi regarder." },
          { objective: "O5", q: "Un joueur réussit 4 tirs sur 5 en un match. Cela prouve :", options: ["Qu'il tire à 80 %", "Qu'il devrait prendre tous les tirs", "Pas grand-chose ; l'échantillon est petit", "Rien de rien, jamais"], answer: 2, why: "Les petits échantillons peuvent tromper." },
          { objective: "O5", q: "Une équipe gagne plus avec des maillots bleus. Le plus probable :", options: ["Le bleu fait gagner", "Ne jamais porter de rouge", "Les données sont fausses", "Autre chose l'explique"], answer: 3, why: "Corrélation n'est pas causalité." },
          { objective: "O6", q: "La phrase 3 d'un résultat, c'est :", options: ["Une exigence envers l'entraîneur", "Une limite des données", "Une blague", "Votre mot de passe"], answer: 1, why: "Les résultats honnêtes incluent leurs limites." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de l'analyse de données sportives",
    questions: [
      { objective: "O1", q: "L'analyse commence par :", options: ["Un tableur", "Un graphique", "Une question", "Une supposition"], answer: 2, why: "La question guide tout le reste." },
      { objective: "O1", q: "À quelle question les données ne peuvent-elles PAS bien répondre ?", options: ["« Qui fait le plus d'efforts ? »", "« Marquons-nous plus à domicile ? »", "« Mon service est-il meilleur au set 1 ? »", "« Perdons-nous plus de ballons au 4e quart-temps ? »"], answer: 0, why: "L'effort ne se mesure pas sur les feuilles de match." },
      { objective: "O2", q: "Une feuille de match, c'est :", options: ["Un tableau des statistiques d'un match", "Une boîte cadeau", "Un type de graphique", "Un banc d'équipe"], answer: 0, why: "Elle liste les statistiques d'un match." },
      { objective: "O2", q: "Dans votre tableau, chaque ligne doit être :", options: ["Une saison", "Un chiffre au hasard", "Un match", "Un graphique"], answer: 2, why: "Une ligne par match garde le tableau organisé." },
      { objective: "O2", q: "« Lincoln HS » et « Lincoln High » dans la même colonne, c'est :", options: ["Correct", "Des noms incohérents à nettoyer", "Un graphique", "Une formule"], answer: 1, why: "La même équipe écrite de deux façons fausse les comptes." },
      { objective: "O2", q: "L'IA trouve une valeur manquante. Vous la corrigez en :", options: ["Devinant", "Laissant l'IA l'inventer", "Supprimant la colonne", "Vérifiant la source d'origine"], answer: 3, why: "Corrigez à partir de la source, pas en devinant." },
      { objective: "O3", q: "=AVERAGE(B2:B11) donne :", options: ["Le total", "La plus grande valeur", "La moyenne de ces cellules", "Le graphique"], answer: 2, why: "AVERAGE calcule la moyenne." },
      { objective: "O3", q: "Le pourcentage à trois points est égal à :", options: ["3PA divisé par 3PM", "3PM plus 3PA", "Les points divisés par les matchs", "3PM divisé par 3PA"], answer: 3, why: "Les réussites sur les tentatives." },
      { objective: "O3", q: "Pourquoi ne pas faire la moyenne des pourcentages de chaque match ?", options: ["Les matchs avec des nombres de tentatives différents sont mal pondérés", "C'est illégal", "C'est toujours juste", "Sheets ne sait pas le faire"], answer: 0, why: "Utilisez les totaux pour un vrai pourcentage." },
      { objective: "O3", q: "Les points par match sont :", options: ["Un pourcentage", "Un taux", "Un graphique", "Une feuille de match"], answer: 1, why: "C'est une statistique par match." },
      { objective: "O3", q: "Vérifiez une formule en :", options: ["Lui faisant confiance", "La supprimant", "Calculant une ligne avec une calculatrice", "Demandant à un fan"], answer: 2, why: "Une vérification à la main repère les erreurs." },
      { objective: "O4", q: "Pour comparer domicile et extérieur, utilisez :", options: ["Un diagramme en barres", "Seulement une courbe dans le temps", "Aucun graphique", "Une photo"], answer: 0, why: "Les barres comparent des groupes." },
      { objective: "O4", q: "L'axe vertical d'un diagramme en barres doit généralement commencer à :", options: ["La plus petite valeur", "100", "N'importe où", "Zéro"], answer: 3, why: "Sinon, les différences paraissent plus grandes qu'elles ne le sont." },
      { objective: "O4", q: "Généralement plus clair qu'un camembert :", options: ["Un camembert en 3D", "Un diagramme en barres", "Un nuage de mots", "Une page blanche"], answer: 1, why: "Les barres sont plus faciles à comparer." },
      { objective: "O5", q: "La taille de l'échantillon, c'est :", options: ["Votre pointure", "Le nombre de matchs ou de tentatives dans vos données", "La taille du graphique", "La taille de l'équipe"], answer: 1, why: "Plus de données, plus de confiance." },
      { objective: "O5", q: "La corrélation veut dire :", options: ["L'une cause l'autre", "Un type de graphique", "Une étape de nettoyage", "Deux choses ont tendance à évoluer ensemble"], answer: 3, why: "Évoluer ensemble, ce n'est pas causer." },
      { objective: "O5", q: "Quel contexte les statistiques peuvent-elles manquer ?", options: ["La force de l'adversaire et les blessures", "Les points", "Les rebonds", "Le score final"], answer: 0, why: "Le contexte explique les chiffres." },
      { objective: "O6", q: "Un bon résultat contient :", options: ["Seulement des opinions", "Toutes les statistiques", "Un chiffre, pourquoi il compte et une limite", "Aucun chiffre"], answer: 2, why: "C'est le format en trois phrases." },
      { objective: "O6", q: "Vous partagez un résultat avec votre entraîneur comme :", options: ["Un ordre", "Une publication sur les réseaux", "Un secret", "Une information, pas une exigence"], answer: 3, why: "Les entraîneurs combinent les données avec ce qu'ils voient." },
      { objective: "O6", q: "Les données individuelles des joueurs peuvent être partagées publiquement :", options: ["Toujours", "Seulement avec permission", "Avec les équipes rivales", "Dans les commentaires"], answer: 1, why: "Les données des joueurs sont personnelles." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Question",
        objective: "O1",
        notYet: "La question est floue ou les statistiques ne peuvent pas y répondre.",
        meets: "La question nomme une statistique, les matchs et une comparaison.",
        exceeds: "Elle dit aussi pourquoi la réponse compte pour l'équipe."
      },
      {
        name: "Données propres",
        objective: "O2",
        notYet: "Moins de 10 matchs, pas de source, ou des trous et des noms incohérents laissés tels quels.",
        meets: "Au moins 10 matchs d'une source officielle, un par ligne, nettoyés.",
        exceeds: "Note chaque correction faite et l'endroit où elle a été vérifiée."
      },
      {
        name: "Calculs",
        objective: "O3",
        notYet: "Un calcul manque, ou un pourcentage fait la moyenne des pourcentages de chaque match.",
        meets: "Une moyenne, un pourcentage calculé à partir des totaux et un taux par match, dont un vérifié à la main.",
        exceeds: "Les formules sont légendées pour qu'une autre personne puisse les suivre."
      },
      {
        name: "Graphique",
        objective: "O4",
        notYet: "Mauvais type de graphique, pas de titre ou axes sans légende.",
        meets: "Un graphique adapté avec un titre qui énonce le résultat et des axes légendés.",
        exceeds: "Les barres partent de zéro et rien d'inutile ne détourne du résultat."
      },
      {
        name: "Résultat honnête",
        objective: "O6",
        notYet: "Affirme une preuve ou oublie la taille de l'échantillon et les limites.",
        meets: "Trois phrases : un chiffre, pourquoi il compte et une limite, avec la source.",
        exceeds: "Nomme aussi d'autres explications possibles et un niveau de confiance."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui partagent un résultat chiffré avec un entraîneur ou une équipe dans les 30 jours (enquête de suivi)",
      "Les entraîneurs ou les équipes qui disent avoir utilisé l'analyse d'un apprenant pour prendre une décision",
      "Les apprenants qui commencent un autre cours Koach Learn pour athlètes ou sur les données dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Google Sheets, gratuit",
      "L'accès à une page de statistiques officielles d'une équipe, d'une ligue ou d'une école",
      "Une calculatrice et un assistant IA gratuit",
      "Environ 60 minutes pour les leçons, les vérifications et le quiz, plus le temps de saisir les données de 10 matchs"
    ],
    facilitatorNotes: [
      "Laissez de petits groupes choisir une équipe et se partager la saisie, puis comparer leurs tableaux nettoyés.",
      "Montrez en direct le calcul des pourcentages à partir des totaux ; c'est l'erreur la plus courante.",
      "Utilisez des statistiques d'équipe ou publiques pour s'exercer ; demandez l'autorisation avant de partager les chiffres d'un joueur.",
      "Demandez à chaque groupe de lire son résultat à voix haute et de nommer une limite avant de le partager avec un entraîneur.",
      "Notez la tâche finale avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
