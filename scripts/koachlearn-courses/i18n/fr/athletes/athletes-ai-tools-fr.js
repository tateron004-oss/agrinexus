"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-tools.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-tools-fr",
  lang: "fr",
  translationOf: "athletes-ai-tools",
  category: "Athletes",
  name: "Les outils d'IA pour les sportifs",
  skills: "Choisir le bon outil d'IA pour une tâche, Utiliser un assistant IA pour s'organiser, Créer des visuels avec Canva, Suivre ses statistiques dans Google Sheets, Juger la confidentialité et le coût d'un outil",
  outcome: "choisir et utiliser trois outils d'IA gratuits pour une vraie tâche de sportif : un planificateur, un outil de design et un tableau de statistiques, et juger si une nouvelle application est sûre et vaut la peine avant de vous inscrire.",
  about: [
    "Ce cours s'adresse aux sportifs et aux entraîneurs qui entendent sans cesse parler d'applications d'IA et veulent savoir lesquelles sont vraiment utiles, et comment s'en servir.",
    "Vous construirez une petite boîte à outils gratuite : un assistant IA pour planifier et écrire, un outil de design pour les visuels et un tableur pour suivre vos chiffres. Vous apprendrez aussi une vérification rapide à faire pour toute nouvelle application avant de lui confier vos données ou votre argent.",
    "Chaque leçon dure environ cinq minutes, avec un exercice pratique « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Construisez votre boîte à outils de sportif : utilisez un assistant IA pour planifier la semaine prochaine, créez un visuel de jour de match dans Canva et préparez un tableau Google Sheets qui suit une statistique sur cinq séances. Puis faites la vérification en cinq questions sur une nouvelle application de sport et notez si vous l'utiliseriez.",
  chapters: [
    {
      name: "Chapitre 1 : Votre boîte à outils d'IA gratuite",
      lessons: [
        {
          title: "Choisir l'outil selon la tâche",
          minutes: 4,
          goal: "Classer les tâches courantes d'un sportif selon le bon type d'outil.",
          text: [
            "Il existe des centaines d'applications d'IA, mais la plupart entrent dans quelques types. Les assistants IA (ChatGPT, Microsoft Copilot, Google Gemini) écrivent, expliquent et planifient. Les outils de design (comme Canva) créent des visuels et de courtes vidéos. Les tableurs (Google Sheets, Microsoft Excel) gardent vos chiffres et en font des graphiques. Les montres de sport et les applications vidéo d'équipe recueillent des données sur votre corps ou vos matchs.",
            "Partez de la tâche, pas de l'application. « J'ai besoin d'un plan pour la semaine » mène à un assistant. « J'ai besoin d'une publication de jour de match » mène à un outil de design. « Je veux voir si mon temps de sprint s'améliore » mène à un tableur.",
            "Les versions gratuites suffisent en général pour commencer. Maîtrisez bien un outil de chaque type avant d'en ajouter d'autres."
          ],
          words: [["Assistant IA", "un programme d'IA avec qui l'on discute pour écrire, expliquer ou planifier."], ["Tableur", "une grille de lignes et de colonnes pour garder des chiffres et en faire des graphiques."]],
          slides: [
            { title: "Quatre types d'outils", bullets: ["Assistant IA : écrire, expliquer, planifier", "Outil de design : visuels et courtes vidéos", "Tableur : suivre et représenter des chiffres", "Montres et applis vidéo : recueillir des données"] },
            { title: "Partez de la tâche", bullets: ["Plan de la semaine → assistant", "Publication de jour de match → outil de design", "Mon temps s'améliore ? → tableur"] },
            { title: "Restez simple", bullets: ["Les versions gratuites suffisent pour commencer", "Maîtrisez bien un outil de chaque type"] }
          ],
          tryIt: "Listez cinq tâches que vous faites chaque semaine comme sportif ou entraîneur (par exemple planifier les séances, publier sur les réseaux sociaux, suivre une statistique). À côté de chacune, écrivez le type d'outil qui convient.",
          youCanNow: "associer une tâche de sportif au bon type d'outil d'IA."
        },
        {
          title: "Un assistant IA comme planificateur",
          minutes: 5,
          goal: "Utiliser un assistant IA pour transformer votre emploi du temps en un plan de semaine clair.",
          text: [
            "Un assistant IA est très bon pour transformer une liste en désordre en un plan. Donnez-lui vos entraînements, vos matchs, vos cours et vos heures de travail, et demandez un plan de la semaine sous forme de tableau.",
            "Soyez précis : « Je joue au volley à l'université. Entraînement de 14 h à 17 h du lundi au vendredi, matchs le samedi. Cours de 9 h à 12 h. Fais un tableau de la semaine avec des créneaux de révision, les repas et les heures de sommeil. » Puis améliorez-le avec des suivis comme « Ajoute 30 minutes de vidéo le mercredi. »",
            "L'assistant organise ; c'est votre entraîneur qui fixe l'entraînement. Ne lui demandez pas de changer les séances écrites par votre entraîneur, et vérifiez tout ce qui touche à la santé ou au repos avec votre soigneur."
          ],
          steps: ["Listez vos horaires fixes : entraînements, matchs, cours, travail.", "Demandez un plan de la semaine sous forme de tableau.", "Demandez un changement à la fois.", "Copiez le plan final dans votre calendrier ou vos notes."],
          words: [["Suivi", "une deuxième demande qui modifie la réponse ou s'appuie dessus."]],
          slides: [
            { title: "Donnez-lui vos horaires fixes", bullets: ["Entraînements et matchs", "Cours et heures de travail", "Jours de déplacement"] },
            { title: "Demandez un tableau", bullets: ["Révisions, repas, sommeil", "Puis un changement à la fois"] },
            { title: "Qui décide quoi", bullets: ["L'IA organise votre semaine", "L'entraîneur fixe l'entraînement", "Le soigneur pour la santé et le repos"] }
          ],
          tryIt: "Tapez vos vrais horaires fixes de la semaine prochaine dans un assistant IA et demandez un plan de la semaine sous forme de tableau. Demandez une amélioration.",
          youCanNow: "transformer votre emploi du temps en plan de semaine avec un assistant IA."
        },
        {
          title: "Créer un visuel de jour de match avec Canva",
          minutes: 5,
          goal: "Créer un visuel simple de jour de match à partir d'un modèle de design gratuit.",
          text: [
            "Canva est un outil de design gratuit, sur le web et en application. Il propose des modèles prêts à l'emploi pour les publications sur les réseaux, les affiches et les stories, et il contient des fonctions d'IA qui peuvent proposer du texte ou des images.",
            "Un visuel de jour de match réussi contient quatre choses : qui joue, quand, où, et une photo forte. Utilisez les couleurs de votre équipe, un texte gros et lisible, et rien de plus.",
            "N'utilisez que des photos que vous avez prises ou que vous avez le droit d'utiliser. Beaucoup d'établissements ont des règles sur l'usage de leur logo et de leur nom ; demandez donc à votre service des sports avant de publier un visuel avec des logos officiels."
          ],
          steps: ["Ouvrez Canva et cherchez des modèles « game day » ou « jour de match ».", "Choisissez un modèle au format du réseau que vous utilisez.", "Changez le texte : adversaire, date, heure, lieu.", "Mettez votre propre photo et les couleurs de votre équipe.", "Téléchargez-le et vérifiez-le sur votre téléphone avant de publier."],
          words: [["Modèle", "un design tout prêt que l'on modifie pour en faire le sien."], ["Autorisation", "l'accord du propriétaire pour utiliser sa photo, son logo ou son nom."]],
          slides: [
            { title: "Canva en une ligne", bullets: ["Outil de design gratuit avec des modèles prêts", "Sur le web et en application"] },
            { title: "Un visuel de match réussi", bullets: ["Qui, quand, où", "Une photo forte", "Couleurs de l'équipe, gros texte"] },
            { title: "Respectez les règles", bullets: ["Vos photos ou celles que vous avez le droit d'utiliser", "Demandez avant d'utiliser les logos de l'établissement"] }
          ],
          tryIt: "Créez dans Canva un visuel de jour de match pour votre prochain match ou entraînement. Vérifiez-le sur votre téléphone : arrivez-vous à lire l'heure et le lieu en deux secondes ?",
          youCanNow: "créer un visuel de match clair à partir d'un modèle, en utilisant photos et logos correctement."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre boîte à outils d'IA gratuite",
        questions: [
          { q: "Vous voulez voir si votre temps de sprint s'améliore. Quel type d'outil convient le mieux ?", options: ["Un outil de design", "Une application de musique", "Un tableur", "Un filtre photo"], answer: 2, why: "Les tableurs gardent les chiffres et les représentent dans le temps." },
          { q: "Par quoi commencer pour choisir un outil ?", options: ["Par la tâche à faire", "Par l'application la plus populaire", "Par l'application la plus chère", "Par ce que conseille un inconnu"], answer: 0, why: "Partez de la tâche, puis choisissez le type d'outil qui convient." },
          { q: "Un assistant IA propose de changer la séance écrite par votre entraîneur. Que faites-vous ?", options: ["Je suis l'IA", "Je saute l'entraînement", "Je publie à ce sujet", "Je garde la séance de l'entraîneur et je lui pose mes questions"], answer: 3, why: "L'IA organise votre semaine ; votre entraîneur fixe l'entraînement." },
          { q: "Quelles quatre choses doivent figurer sur un visuel de jour de match ?", options: ["Votre mot de passe, adresse, téléphone, e-mail", "Qui, quand, où, une photo forte", "Dix photos et cinq polices", "Seulement un logo"], answer: 1, why: "Des informations claires et une photo forte rendent le visuel lisible." },
          { q: "Vous voulez utiliser le logo de votre établissement dans une publication. Que faire d'abord ?", options: ["Le copier depuis le site", "Demander à votre service des sports", "Changer ses couleurs", "L'utiliser en espérant que ça passe"], answer: 1, why: "Beaucoup d'établissements ont des règles sur leurs logos ; demandez d'abord." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Suivre, juger et compléter votre boîte à outils",
      lessons: [
        {
          title: "Suivre une statistique dans Google Sheets",
          minutes: 5,
          goal: "Préparer un tableau qui suit une statistique et l'affiche sous forme de graphique.",
          text: [
            "Choisissez une statistique qui compte pour vous et que vous pouvez mesurer de la même façon à chaque fois : lancers francs réussis sur 20, temps sur 40 yards ou 40 mètres, temps sur 1 500 mètres, ou précision au service.",
            "Dans Google Sheets, faites deux colonnes : Date et votre statistique. Ajoutez une ligne après chaque séance. Quand vous avez quelques lignes, sélectionnez les deux colonnes et insérez un graphique pour voir la tendance.",
            "Vous pouvez demander à un assistant IA d'expliquer les étapes du tableur ou une formule, comme le calcul de votre moyenne. Gardez le tableau privé, sauf si vous choisissez de le partager avec votre entraîneur."
          ],
          steps: ["Ouvrez Google Sheets et créez une feuille vierge.", "Tapez « Date » en A1 et votre statistique en B1.", "Ajoutez une ligne après chaque séance.", "Sélectionnez les deux colonnes et insérez un graphique.", "Partagez-le seulement avec votre entraîneur si vous voulez son avis."],
          words: [["Tendance", "la direction que prennent vos chiffres dans le temps : en hausse, en baisse ou stable."], ["Formule", "une courte instruction dans une cellule qui fait un calcul, comme une moyenne."]],
          slides: [
            { title: "Choisissez une statistique", bullets: ["Mesurée de la même façon à chaque fois", "Exemples : lancers francs sur 20, temps sur 1 500 m"] },
            { title: "Préparez le tableau", bullets: ["Colonne A : Date", "Colonne B : votre statistique", "Une ligne par séance"] },
            { title: "Voyez la tendance", bullets: ["Sélectionnez les deux colonnes et insérez un graphique", "Demandez à l'IA d'expliquer une formule si besoin"] }
          ],
          tryIt: "Préparez un tableau Google Sheets pour une statistique. Saisissez au moins trois séances passées (ou des chiffres d'essai) et insérez un graphique.",
          youCanNow: "suivre une statistique dans un tableur et en faire un graphique pour voir votre tendance."
        },
        {
          title: "La vérification en cinq questions",
          minutes: 5,
          goal: "Juger une nouvelle application de sport ou d'IA avant de lui confier des données ou de l'argent.",
          text: [
            "De nouvelles applications promettent de vous rendre plus rapide, de vous faire recruter ou d'augmenter vos abonnés. Avant de vous inscrire, faites une vérification rapide en cinq questions.",
            "1. Qui la fabrique, et est-elle dans la boutique d'applications officielle ? 2. Quelles données recueille-t-elle, et pouvez-vous les supprimer ? (Lisez le résumé de la politique de confidentialité.) 3. Combien coûte-t-elle après l'essai gratuit ? 4. Votre entraîneur ou votre établissement utilise-t-il déjà quelque chose de semblable ? 5. Promet-elle des résultats trop beaux pour être vrais, comme une bourse garantie ?",
            "Les données sur votre corps et votre santé, comme la fréquence cardiaque, le sommeil et la position, sont privées. Ne les partagez qu'avec des applications de confiance, et désactivez le partage de position dont vous n'avez pas besoin."
          ],
          steps: ["Vérifiez qui la fabrique et qu'elle est dans la boutique officielle.", "Lisez quelles données elle recueille et comment les supprimer.", "Trouvez le prix après l'éventuel essai gratuit.", "Demandez à votre entraîneur ce que l'équipe utilise déjà.", "Fuyez les résultats garantis."],
          words: [["Politique de confidentialité", "l'explication par l'application des données qu'elle recueille et de ce qu'elle en fait."], ["Essai gratuit", "une courte période gratuite avant que l'application devienne payante."]],
          slides: [
            { title: "Avant de vous inscrire", bullets: ["Qui la fabrique ? Boutique officielle ?", "Quelles données recueille-t-elle ?", "Quel prix après l'essai ?"] },
            { title: "Deux autres questions", bullets: ["Mon équipe utilise-t-elle déjà quelque chose ?", "Promet-elle trop ?"] },
            { title: "Protégez les données du corps", bullets: ["Fréquence cardiaque, sommeil, position sont privés", "Désactivez la position dont vous n'avez pas besoin"] }
          ],
          tryIt: "Choisissez une application de sport ou d'IA que vous avez vue en publicité. Répondez aux cinq questions dans une note et décidez : je l'utilise, je l'essaie prudemment, ou je passe.",
          youCanNow: "vérifier le fabricant, les données, le coût et les promesses d'une nouvelle application avant de vous inscrire."
        },
        {
          title: "Assembler votre boîte à outils",
          minutes: 5,
          goal: "Utiliser les trois outils ensemble pendant une vraie semaine.",
          text: [
            "Votre boîte à outils marche le mieux comme routine hebdomadaire. Le dimanche : planifiez la semaine avec votre assistant IA. Avant un match : créez le visuel. Après chaque séance : ajoutez votre statistique au tableau.",
            "Écrivez une courte liste de vos outils et de leur usage, pour ne pas essayer de nouvelles applications chaque semaine. N'ajoutez un outil que lorsque vous avez une tâche que votre boîte à outils ne sait pas faire.",
            "Les entraîneurs peuvent utiliser la même boîte à outils pour une équipe : un plan de la semaine pour le staff, un visuel par match et un tableau partagé pour les statistiques de l'équipe. Ne partagez les tableaux de l'équipe qu'avec les membres du staff qui en ont besoin."
          ],
          steps: ["Écrivez votre liste d'outils : planificateur, design, tableau.", "Le dimanche : planifiez la semaine avec l'assistant.", "Semaine de match : créez un visuel.", "Après chaque séance : ajoutez votre statistique.", "Regardez le graphique avec votre entraîneur toutes les quelques semaines."],
          words: [["Routine", "des étapes que l'on répète au même moment chaque semaine."], ["Boîte à outils", "le petit ensemble d'outils que l'on utilise encore et encore."]],
          slides: [
            { title: "Votre routine de la semaine", bullets: ["Dimanche : planifier la semaine", "Semaine de match : un visuel", "Après chaque séance : ajouter la statistique"] },
            { title: "Gardez peu d'outils", bullets: ["Écrivez à quoi sert chaque outil", "Ajoutez un outil seulement pour une nouvelle tâche"] },
            { title: "Pour les entraîneurs", bullets: ["Plan de la semaine pour le staff", "Un visuel par match", "Tableau de statistiques partagé avec le staff seulement"] }
          ],
          tryIt: "Tâche finale : planifiez la semaine prochaine avec un assistant IA, créez un visuel de jour de match dans Canva, préparez un tableau qui suit une statistique et faites la vérification en cinq questions sur une nouvelle application.",
          youCanNow: "utiliser ensemble un petit nombre d'outils d'IA gratuits dans une routine hebdomadaire."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Suivre, juger et compléter votre boîte à outils",
        questions: [
          { q: "Qu'est-ce qui fait d'une statistique une bonne statistique à suivre ?", options: ["Sa façon d'être mesurée change chaque semaine", "Seul votre entraîneur peut la voir", "C'est une estimation au hasard", "On peut la mesurer de la même façon à chaque fois"], answer: 3, why: "Mesurer de la même façon donne une tendance qui a du sens." },
          { q: "Dans votre tableau, que met-on dans la colonne A ?", options: ["La date", "Votre mot de passe", "Le nom de l'adversaire", "Votre adresse"], answer: 0, why: "La date en colonne A et la statistique en colonne B permettent de tracer la tendance." },
          { q: "Une application promet une bourse garantie si vous payez. Que dit la vérification ?", options: ["Payer tout de suite", "Partager votre position", "Elle promet trop, alors passez votre chemin", "Lui donner votre code de connexion"], answer: 2, why: "Les résultats garantis sont un signal d'alarme." },
          { q: "Laquelle est une donnée privée sur votre corps ?", options: ["La couleur de votre maillot", "Le nom de votre équipe", "Votre exercice préféré", "Votre fréquence cardiaque et votre sommeil"], answer: 3, why: "La fréquence cardiaque, le sommeil et la position sont des données privées." },
          { q: "Quand faut-il ajouter un nouvel outil à votre boîte à outils ?", options: ["Chaque semaine", "Quand vous avez une tâche que votre boîte à outils ne sait pas faire", "Quand un ami en parle sur les réseaux", "Jamais"], answer: 1, why: "Une petite boîte à outils bien maîtrisée vaut mieux que beaucoup d'applications à peine utilisées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : Les outils d'IA pour les sportifs",
    questions: [
      { q: "Quel type d'outil écrit, explique et planifie ?", options: ["Un chronomètre", "Seulement un tableur", "Un assistant IA", "Un appareil photo"], answer: 2, why: "Les assistants IA comme ChatGPT, Copilot et Gemini écrivent et planifient." },
      { q: "Lequel est un outil de design gratuit avec des modèles ?", options: ["Canva", "Une calculatrice", "Un tableau d'affichage", "Un cahier de tactiques"], answer: 0, why: "Canva a des modèles gratuits pour les publications et les affiches." },
      { q: "« J'ai besoin d'une publication de jour de match » mène à :", options: ["Un outil de design", "Un tableur", "Une montre de sport", "Un cardiofréquencemètre"], answer: 0, why: "Les visuels sont une tâche pour un outil de design." },
      { q: "Combien d'outils de chaque type faut-il apprendre d'abord ?", options: ["Cinq", "Le plus possible", "Un, bien maîtrisé", "Aucun"], answer: 2, why: "Bien maîtriser un outil de chaque type est le départ le plus rapide." },
      { q: "Que donner à un assistant IA pour faire un plan de la semaine ?", options: ["Votre mot de passe", "Vos horaires fixes : entraînements, matchs, cours", "Votre dossier médical", "Votre numéro de compte"], answer: 1, why: "Les horaires fixes lui permettent de construire le plan autour de votre semaine." },
      { q: "Qui fixe votre entraînement ?", options: ["L'IA", "Une publicité", "Une application au hasard", "Votre entraîneur"], answer: 3, why: "L'assistant organise ; l'entraîneur fixe l'entraînement." },
      { q: "La meilleure façon d'améliorer le plan de l'IA est :", options: ["Accepter le premier", "Taper votre mot de passe", "Un changement à la fois", "Se disputer avec elle"], answer: 2, why: "Un changement clair à la fois garde le plan sur la bonne voie." },
      { q: "Un visuel de match lisible contient :", options: ["Un texte minuscule et dix photos", "Seulement des émojis", "Votre numéro de téléphone", "Qui, quand, où et une photo forte"], answer: 3, why: "Des informations claires et une photo se lisent vite." },
      { q: "Quelles photos pouvez-vous utiliser dans votre visuel ?", options: ["Vos propres photos ou celles que vous avez le droit d'utiliser", "N'importe quelle photo en ligne", "Les photos de la page d'un rival", "Des photos d'inconnus"], answer: 0, why: "Utilisez des photos à vous ou que vous avez le droit d'utiliser." },
      { q: "Avant d'utiliser le logo de votre établissement, vous devez :", options: ["Le redessiner", "Demander à votre service des sports", "L'utiliser quand même", "L'acheter en ligne"], answer: 1, why: "Les établissements ont souvent des règles sur leurs logos." },
      { q: "Quelle statistique est facile à suivre de la même façon à chaque fois ?", options: ["Votre ressenti sur le trajet en bus", "L'avis du public", "Les lancers francs réussis sur 20", "L'humeur de l'adversaire"], answer: 2, why: "Un test fixe comme les réussites sur 20 est régulier." },
      { q: "Comment voir votre tendance dans Google Sheets ?", options: ["Sélectionner les colonnes et insérer un graphique", "L'imprimer", "Supprimer les anciennes lignes", "L'envoyer à un inconnu"], answer: 0, why: "Un graphique montre la direction de vos chiffres." },
      { q: "Vous bloquez sur une formule pour votre moyenne. Une bonne idée est de :", options: ["Arrêter de suivre vos chiffres", "Deviner le résultat", "Partager votre mot de passe", "Demander à un assistant IA d'expliquer la formule"], answer: 3, why: "Les assistants IA expliquent bien les étapes d'un tableur." },
      { q: "Qui doit voir votre tableau de statistiques personnel ?", options: ["Tout le monde en ligne", "Seulement les personnes que vous choisissez, comme votre entraîneur", "Les équipes rivales", "Des inconnus"], answer: 1, why: "Gardez-le privé et ne le partagez que par choix." },
      { q: "Que vous apprend une politique de confidentialité ?", options: ["Les couleurs de l'application", "Les données que l'application recueille et ce qu'elle en fait", "Votre séance", "Le score du match"], answer: 1, why: "Elle explique comment l'application traite vos données." },
      { q: "Avant un essai gratuit, il faut vérifier :", options: ["Le logo de l'application", "L'application de votre rival", "Rien", "Le prix à la fin de l'essai"], answer: 3, why: "Beaucoup d'applications deviennent payantes après l'essai." },
      { q: "Quelle promesse d'application est un signal d'alarme ?", options: ["« Bourse garantie »", "« Suivez vos courses »", "« Créez des visuels »", "« Modèles gratuits »"], answer: 0, why: "Personne ne peut garantir une bourse." },
      { q: "Le partage de position dont vous n'avez pas besoin doit être :", options: ["Partagé avec tout le monde", "Publié en ligne", "Désactivé", "Laissé activé pour toujours"], answer: 2, why: "La position est une donnée privée ; ne la partagez qu'en cas de besoin." },
      { q: "Dans la routine de la semaine, quand planifiez-vous la semaine ?", options: ["Après la saison", "Jamais", "Pendant le match", "Le dimanche, avec votre assistant IA"], answer: 3, why: "Planifier en début de semaine prépare tout le reste." },
      { q: "Un entraîneur partage un tableau de statistiques de l'équipe. Qui doit y avoir accès ?", options: ["Toute personne en ligne qui a le lien", "Seulement les membres du staff qui en ont besoin", "Les entraîneurs adverses", "Les supporters"], answer: 1, why: "Les données de l'équipe ne doivent aller qu'aux personnes qui en ont besoin." }
    ]
  }
};
