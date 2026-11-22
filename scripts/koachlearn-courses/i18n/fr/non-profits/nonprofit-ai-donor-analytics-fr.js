"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-donor-analytics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-donor-analytics-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "Analyser vos donateurs avec l'IA",
  skills: "Préparer un tableau de donateurs sans risque, Mesurer la fidélisation et le don moyen, Regrouper les donateurs en segments, Utiliser l'IA pour expliquer les chiffres, Transformer les constats en plan de collecte",
  outcome: "prendre un tableau de donateurs sans noms, calculer votre taux de fidélisation, votre don moyen et vos groupes de donateurs, utiliser un assistant d'IA pour expliquer ce que signifient les chiffres, et rédiger un plan d'une page pour votre prochain appel aux dons.",
  about: [
    "Ce cours s'adresse aux salariés, chargés de développement, membres de conseil d'administration et bénévoles d'associations et d'organisations religieuses qui tiennent une liste de donateurs et veulent collecter davantage en la comprenant.",
    "Vous apprendrez quelques chiffres simples sur les donateurs, comment les calculer dans un tableur comme Google Sheets ou Microsoft Excel, comment utiliser l'IA pour les expliquer et en faire des graphiques sans partager les informations privées de quiconque, et comment transformer vos constats en actions.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites une copie sûre de votre liste de donateurs (ou de la liste d'entraînement de la leçon 1) où les noms et coordonnées sont remplacés par des identifiants. Calculez votre taux de fidélisation et votre don moyen, classez les donateurs en au moins trois groupes, demandez à un assistant d'IA d'expliquer les résultats et de proposer une action par groupe, et rédigez un plan d'appel d'une page que vous vérifiez vous-même.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des salariés, chargés de développement, membres de conseils d'administration et bénévoles d'associations et d'organisations confessionnelles qui tiennent une liste de donateurs et veulent collecter plus en la comprenant.",
    startingPoint: "Ils tiennent les registres des donateurs dans un tableur ou un logiciel de dons et envoient des appels. Beaucoup n'ont jamais calculé de taux de fidélisation, classé les donateurs en segments ni utilisé l'IA pour expliquer leurs chiffres.",
    gap: "Sans savoir qui revient et qui s'éloigne, les organisations envoient le même appel à tout le monde et perdent des donateurs qu'elles auraient pu garder. Les apprenants doivent transformer leurs propres registres en quelques chiffres clés et un plan, en utilisant l'IA en sécurité sans exposer les informations des donateurs.",
    constraints: [
      "Vie privée : les noms, les coordonnées et les notes sont retirés avant toute analyse ; seuls des chiffres de synthèse vont dans l'IA",
      "Compétences de base en tableur : SUM, AVERAGE, tri, filtre et un graphique simple",
      "L'IA peut faire des erreurs de calcul et inventer des points de comparaison, donc chaque chiffre est revérifié",
      "Les règles de contact des donateurs et de désinscription, et la politique de confidentialité de l'organisation, s'appliquent",
      "Temps : environ 60 minutes au total, en leçons de 5 minutes"
    ],
    prerequisites: "Savoir utiliser un tableur. Le cours « Introduction à l'IA pour les associations » est utile."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de donateurs", action: "faire une copie de travail anonyme où les noms sont remplacés par des identifiants et les coordonnées supprimées", standard: "en ne gardant que l'identifiant, la date du don, le montant et la campagne" },
    { id: "O2", condition: "À partir d'un tableur anonyme de donateurs", action: "calculer le total collecté, le don moyen et le taux de fidélisation des donateurs", standard: "en trouvant juste pour chaque chiffre" },
    { id: "O3", condition: "À partir des identifiants des donateurs et de l'historique des dons", action: "classer les donateurs en segments Nouveau, Fidèle, Perdu et Grand donateur et compter chaque groupe", standard: "avec chaque identifiant dans un segment" },
    { id: "O4", condition: "À partir de vos chiffres de synthèse", action: "demander à un assistant d'IA de les expliquer en mots simples et revérifier tout calcul ou point de comparaison qu'il donne", standard: "en ne collant que des chiffres de synthèse, jamais la liste des donateurs" },
    { id: "O5", condition: "À partir du nombre de donateurs par segment", action: "créer un graphique en barres avec un titre clair dans Google Sheets ou Excel", standard: "qui montre un seul message" },
    { id: "O6", condition: "À partir de vos constats", action: "rédiger un plan d'appel d'une page avec une action, un responsable et une date pour chaque segment", standard: "avec des cases à remplir pour les noms des donateurs, et vérifié avec votre directeur" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Connaître les chiffres de vos donateurs",
      lessons: [
        {
          objectives: ["O1"],
          title: "Préparer vos données de donateurs, sans risque",
          minutes: 5,
          goal: "Faire une copie propre et anonyme d'une liste de donateurs, sûre à analyser.",
          text: [
            "Analyser ses donateurs, c'est regarder ses registres de dons pour savoir qui donne, combien, à quelle fréquence et s'ils reviennent. Un tableur suffit.",
            "Les noms, adresses, e-mails et montants des dons sont privés et doivent être protégés. Avant d'analyser quoi que ce soit avec l'IA, faites une copie et remplacez chaque nom par un identifiant comme D001. Supprimez les adresses, numéros de téléphone, e-mails et notes. Ne gardez que l'identifiant, la date du don, le montant et, si vous l'avez, la campagne ou le fonds.",
            "Gardez la vraie liste dans votre logiciel de donateurs ou un fichier protégé. C'est avec la copie anonyme que vous travaillez. Suivez la politique de confidentialité de votre organisation et les promesses faites aux donateurs."
          ],
          steps: ["Exportez ou copiez votre liste de donateurs dans un tableur.", "Enregistrez une copie séparée nommée \"donateurs-anonyme\".", "Remplacez chaque nom par un identifiant comme D001, D002.", "Supprimez adresses, numéros de téléphone, e-mails et notes.", "Ne gardez que l'identifiant, la date du don, le montant et la campagne."],
          words: [["Analyse des donateurs", "étudier les registres de dons pour savoir qui donne, combien, à quelle fréquence et s'ils reviennent."], ["Anonyme", "sans noms ni coordonnées, pour que personne ne sache qui est qui."], ["Tableur", "un tableau de lignes et de colonnes, comme Google Sheets ou Microsoft Excel."]],
          slides: [
            { title: "Ce qu'est l'analyse des donateurs", bullets: ["Qui donne, combien, à quelle fréquence", "Si les donateurs reviennent", "Un tableur suffit"] },
            { title: "Protégez d'abord les donateurs", bullets: ["Faites une copie séparée", "Remplacez les noms par des identifiants comme D001", "Supprimez adresses, téléphones, e-mails, notes"] },
            { title: "Ne gardez que", bullets: ["L'identifiant du donateur", "La date et le montant du don", "La campagne ou le fonds"] }
          ],
          tryIt: "Faites une liste d'entraînement de 12 lignes dans un tableur : identifiant (D001 à D010, certains répétés), date du don (l'an dernier et cette année) et montant. Ou faites une copie anonyme de votre vraie liste en suivant les étapes.",
          youCanNow: "préparer une liste de donateurs sûre à analyser, sans noms ni coordonnées.",
          quickCheck: [
            { objective: "O1", q: "Que supprimez-vous dans la copie anonyme ?", options: ["Les adresses, les numéros de téléphone, les e-mails et les notes", "Les montants des dons", "Les dates des dons", "Les identifiants des donateurs"], answer: 0, why: "Supprimez les coordonnées et les notes ; gardez l'identifiant, la date, le montant et la campagne." },
            { objective: "O1", q: "Un bénévole veut analyser la vraie liste des donateurs sur son ordinateur personnel. Que faites-vous ?", options: ["Vous lui envoyez la vraie liste par e-mail", "Vous lui donnez la copie anonyme et gardez la vraie liste dans le fichier protégé", "Vous lui imprimez la vraie liste", "Vous collez pour lui la vraie liste dans l'IA"], answer: 1, why: "Gardez la vraie liste protégée ; travaillez sur la copie anonyme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Trois chiffres que toute association devrait connaître",
          minutes: 6,
          goal: "Calculer le total collecté, le don moyen et le taux de fidélisation des donateurs.",
          text: [
            "Le total collecté, c'est la somme de tous les dons. Le don moyen, c'est le total collecté divisé par le nombre de dons. Dans un tableur, =SUM() additionne une colonne et =AVERAGE() donne la moyenne (en version française : =SOMME() et =MOYENNE()).",
            "Le taux de fidélisation indique combien de donateurs de l'an dernier ont donné à nouveau cette année. Comptez les donateurs de l'an dernier. Comptez combien d'entre eux ont aussi donné cette année. Divisez le second nombre par le premier et multipliez par 100. Si 40 donateurs ont donné l'an dernier et que 18 d'entre eux ont redonné, la fidélisation est de 18 / 40 = 45 pour cent.",
            "La fidélisation compte parce que garder un donateur coûte en général moins cher qu'en trouver un nouveau. Un taux faible est le signe qu'il faut mieux remercier et informer les donateurs."
          ],
          steps: ["Total collecté : =SUM() de la colonne des montants.", "Don moyen : =AVERAGE() de la colonne des montants.", "Comptez les donateurs différents de l'an dernier.", "Comptez combien d'entre eux ont aussi donné cette année.", "Fidélisation = donateurs revenus cette année / donateurs de l'an dernier x 100."],
          words: [["Don moyen", "le total collecté divisé par le nombre de dons."], ["Taux de fidélisation", "le pourcentage de donateurs de l'an dernier qui ont donné à nouveau cette année."], ["Formule", "un calcul tapé dans une cellule de tableur, qui commence par =."]],
          slides: [
            { title: "Total et moyenne", bullets: ["Total collecté : =SUM(montants)", "Don moyen : =AVERAGE(montants)"] },
            { title: "Taux de fidélisation", bullets: ["Donateurs de l'an dernier qui ont redonné", "Divisés par tous les donateurs de l'an dernier", "Fois 100 = pourcentage"] },
            { title: "Exemple", bullets: ["40 donateurs l'an dernier", "18 d'entre eux ont redonné", "18 / 40 = 45 pour cent de fidélisation"] },
            { title: "Pourquoi c'est important", bullets: ["Garder un donateur coûte moins qu'en trouver un nouveau", "Fidélisation faible = mieux remercier et informer"] }
          ],
          tryIt: "Avec votre liste d'entraînement ou anonyme, calculez le total collecté, le don moyen et le taux de fidélisation. Notez les trois chiffres.",
          youCanNow: "calculer dans un tableur le total collecté, le don moyen et le taux de fidélisation des donateurs.",
          quickCheck: [
            { objective: "O2", q: "Quelle formule additionne une colonne de dons ?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=IF()"], answer: 2, why: "=SUM() additionne une colonne ; =AVERAGE() donne la moyenne." },
            { objective: "O2", q: "20 donateurs ont donné l'an dernier et 10 d'entre eux ont donné à nouveau. Quel est votre taux de fidélisation ?", options: ["10 %", "20 %", "200 %", "50 %"], answer: 3, why: "10 / 20 = 0,5, multiplié par 100 = 50 %." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Regrouper les donateurs en segments",
          minutes: 5,
          goal: "Classer les donateurs en groupes simples pour que chaque groupe reçoive le bon message.",
          text: [
            "Un segment est un groupe de donateurs qui se ressemblent sur un point qui compte. Des groupes différents ont besoin de messages différents.",
            "Segments simples pour commencer : nouveaux donateurs (premier don cette année), donateurs fidèles (ont donné l'an dernier et cette année), donateurs perdus (ont donné l'an dernier mais pas cette année), et grands donateurs (dons au-dessus d'un montant que vous choisissez, comme vos 10 pour cent les plus élevés).",
            "Ajoutez une colonne appelée Segment et remplissez-la pour chaque identifiant. Vous pouvez utiliser le filtre ou le tri du tableur pour les regrouper. Comptez combien de donateurs il y a dans chaque groupe."
          ],
          steps: ["Ajoutez une colonne appelée Segment.", "Marquez chaque identifiant comme Nouveau, Fidèle, Perdu ou Grand donateur.", "Utilisez le tri ou le filtre pour les regrouper.", "Comptez les donateurs de chaque groupe."],
          words: [["Segment", "un groupe de donateurs qui se ressemblent sur un point qui compte, comme les nouveaux ou les perdus."], ["Donateur perdu", "une personne qui a donné avant mais n'a pas donné cette année."]],
          slides: [
            { title: "Ce qu'est un segment", bullets: ["Un groupe de donateurs semblables", "Chaque groupe reçoit le bon message"] },
            { title: "Quatre segments pour commencer", bullets: ["Nouveau : premier don cette année", "Fidèle : a donné l'an dernier et cette année", "Perdu : a donné l'an dernier, pas cette année", "Grand donateur : au-dessus d'un montant choisi"] },
            { title: "Dans le tableur", bullets: ["Ajoutez une colonne Segment", "Triez ou filtrez pour regrouper", "Comptez chaque groupe"] }
          ],
          tryIt: "Ajoutez une colonne Segment à votre liste. Marquez chaque identifiant et comptez combien sont Nouveaux, Fidèles, Perdus et Grands donateurs.",
          youCanNow: "classer les donateurs en segments et compter chaque groupe.",
          quickCheck: [
            { objective: "O3", q: "Dans quel segment se trouve un donateur qui a donné l'an dernier et cette année ?", options: ["Fidèle", "Nouveau", "Perdu", "Grand donateur"], answer: 0, why: "Les donateurs fidèles ont donné l'an dernier et cette année." },
            { objective: "O3", q: "Vous voulez voir ensemble tous les donateurs perdus. Que faites-vous dans le tableur ?", options: ["Vous les retapez sur une nouvelle page", "Vous utilisez le filtre ou le tri sur la colonne Segment", "Vous supprimez tous les autres", "Vous demandez à l'IA de les deviner"], answer: 1, why: "Utilisez le filtre ou le tri du tableur pour les regrouper." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître les chiffres de vos donateurs",
        questions: [
          { objective: "O1", q: "Avant d'analyser des données de donateurs avec l'IA, que devez-vous faire ?", options: ["Coller la liste complète avec les noms", "L'envoyer par e-mail aux bénévoles", "Faire une copie où les noms sont remplacés par des identifiants et les coordonnées supprimées", "La publier en ligne"], answer: 2, why: "Une copie anonyme protège les informations privées des donateurs." },
          { objective: "O2", q: "40 donateurs ont donné l'an dernier et 18 d'entre eux ont redonné cette année. Quel est le taux de fidélisation ?", options: ["18 pour cent", "40 pour cent", "45 pour cent", "58 pour cent"], answer: 2, why: "18 divisé par 40 font 0,45, soit 45 pour cent." },
          { objective: "O2", q: "Quelle formule de tableur donne le don moyen ?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() divise le total par le nombre de dons." },
          { objective: "O3", q: "Un donateur a donné l'an dernier mais pas cette année. Dans quel segment est-il ?", options: ["Nouveau", "Perdu", "Fidèle", "Grand donateur"], answer: 1, why: "Les donateurs perdus ont donné avant mais pas cette année." },
          { objective: "O2", q: "Pourquoi la fidélisation compte-t-elle ?", options: ["L'IA l'exige", "Garder un donateur coûte en général moins cher qu'en trouver un nouveau", "Elle agrandit le tableur", "Elle fixe le taux d'imposition"], answer: 1, why: "Une bonne fidélisation garde des dons réguliers à moindre coût." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Des chiffres à l'action",
      lessons: [
        {
          objectives: ["O4"],
          title: "Utiliser l'IA pour expliquer vos chiffres",
          minutes: 5,
          goal: "Demander à un assistant d'IA d'expliquer en mots simples des chiffres anonymes sur les donateurs.",
          text: [
            "Vous pouvez coller vos chiffres de synthèse, et non votre liste de donateurs, dans un assistant d'IA comme ChatGPT, Microsoft Copilot ou Google Gemini, et lui demander ce qu'ils signifient.",
            "Par exemple : \"Je dirige une petite banque alimentaire. L'an dernier 40 donateurs, cette année 35. Fidélisation 45 pour cent. Don moyen 85 $. Segments : 17 nouveaux, 18 fidèles, 22 perdus, 4 grands donateurs. Explique en mots simples ce que ces chiffres me disent et quelles questions je devrais me poser ensuite.\"",
            "L'IA peut aussi proposer des formules ou des types de graphique si vous êtes bloqué. Vérifiez vous-même tout calcul qu'elle fait ; l'IA peut faire des erreurs de calcul et inventer des chiffres de référence qui semblent vrais."
          ],
          steps: ["Écrivez vos chiffres de synthèse, pas les donateurs un par un.", "Dites quel type d'organisation vous êtes.", "Demandez à l'IA d'expliquer les chiffres en mots simples.", "Demandez quelles questions vous poser ensuite.", "Revérifiez vous-même tout calcul."],
          words: [["Chiffres de synthèse", "des totaux, des moyennes et des décomptes, pas des informations sur une personne."], ["Chiffre de référence", "un chiffre habituel utilisé pour comparer ; l'IA peut en inventer, donc vérifiez la source."]],
          slides: [
            { title: "Partagez des synthèses, pas des personnes", bullets: ["Totaux, moyennes, décomptes", "Jamais de noms ni de dons individuels avec un nom"] },
            { title: "Une bonne demande", bullets: ["Ce que fait votre organisation", "Vos chiffres de synthèse", "\"Explique simplement ; que dois-je me demander ensuite ?\""] },
            { title: "Vérifiez l'IA", bullets: ["Refaites ses calculs vous-même", "Prudence avec les chiffres de référence", "Demandez d'où vient un chiffre"] }
          ],
          tryIt: "Collez seulement vos chiffres de synthèse (totaux, fidélisation, don moyen, nombre par segment) dans un assistant d'IA et demandez-lui de les expliquer et de proposer trois questions à vous poser ensuite.",
          youCanNow: "utiliser un assistant d'IA pour expliquer les chiffres des donateurs sans partager les informations privées d'aucun donateur.",
          quickCheck: [
            { objective: "O4", q: "En plus d'expliquer les chiffres, pour quoi d'autre l'IA peut-elle aider dans cette leçon ?", options: ["Trouver l'adresse personnelle des donateurs", "Décider du montant des dons des donateurs", "Proposer des formules ou des types de graphiques", "Envoyer les appels toute seule"], answer: 2, why: "L'IA peut proposer des formules ou des types de graphiques si vous êtes bloqué." },
            { objective: "O4", q: "L'IA dit que votre don moyen est de 95 $, mais votre tableur dit 85 $. Que faites-vous ?", options: ["Vous prenez 95 $", "Vous prenez la moyenne des deux", "Vous demandez à l'IA d'être d'accord avec vous", "Vous refaites le calcul vous-même et utilisez le bon chiffre"], answer: 3, why: "L'IA peut faire des erreurs de calcul, donc vérifiez ses calculs vous-même." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faire un graphique simple",
          minutes: 4,
          goal: "Faire un graphique qui montre clairement vos segments de donateurs.",
          text: [
            "Un graphique aide votre conseil et votre équipe à voir l'histoire rapidement. Un graphique en barres marche bien pour les segments : une barre pour les Nouveaux, les Fidèles, les Perdus et les Grands donateurs.",
            "Dans Google Sheets ou Excel, mettez les noms des segments dans une colonne et les nombres dans la suivante. Sélectionnez les deux colonnes, puis utilisez le menu Insertion pour ajouter un graphique et choisissez un graphique en barres ou en colonnes.",
            "Donnez au graphique un titre clair comme \"Nos donateurs cette année par groupe\". Restez simple : un message par graphique."
          ],
          steps: ["Faites un petit tableau : nom du segment et nombre.", "Sélectionnez les deux colonnes.", "Insérez un graphique et choisissez des barres ou des colonnes.", "Donnez-lui un titre clair.", "Vérifiez que les chiffres correspondent à votre tableau."],
          words: [["Graphique en barres", "un graphique qui compare des quantités avec des barres de longueurs différentes."]],
          slides: [
            { title: "Pourquoi un graphique", bullets: ["Votre conseil voit l'histoire rapidement", "Un message par graphique"] },
            { title: "Le faire", bullets: ["Tableau : segment et nombre", "Sélectionnez les deux colonnes", "Insertion, puis choisissez un graphique en barres"] },
            { title: "Le terminer", bullets: ["Ajoutez un titre clair", "Vérifiez que les chiffres correspondent"] }
          ],
          tryIt: "Faites un graphique en barres de vos quatre segments avec un titre clair.",
          youCanNow: "faire un graphique en barres clair des segments de donateurs pour votre équipe ou votre conseil.",
          quickCheck: [
            { objective: "O5", q: "Que sélectionnez-vous avant d'insérer un graphique ?", options: ["Les noms des segments et leurs nombres", "Toute la liste des donateurs avec les noms", "Seulement le titre", "Une colonne vide"], answer: 0, why: "Sélectionnez la colonne des noms de segments et la colonne des nombres, puis insérez le graphique." },
            { objective: "O5", q: "Votre graphique essaie de montrer à la fois les segments, la taille des dons et les mois. Que faites-vous ?", options: ["Vous ajoutez plus de couleurs", "Vous gardez un seul message par graphique", "Vous retirez le titre", "Vous utilisez un graphique en 3D"], answer: 1, why: "Restez simple : un seul message par graphique." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Transformer les constats en plan d'appel aux dons",
          minutes: 6,
          goal: "Rédiger un plan d'une page avec une action pour chaque segment de donateurs.",
          text: [
            "Les chiffres ne comptent que s'ils changent ce que vous faites. Pour chaque segment, choisissez une action. Nouveaux donateurs : un accueil chaleureux et une histoire sur ce qu'a permis leur don. Donateurs fidèles : un remerciement et une invitation au don mensuel. Donateurs perdus : un mot \"vous nous manquez\" avec des nouvelles. Grands donateurs : un appel ou une visite personnelle d'un responsable.",
            "L'IA peut rédiger chaque message. Utilisez des cases comme [nom du donateur] et [résultat du programme], puis remplissez-les vous-même dans votre logiciel de donateurs ou par publipostage.",
            "Rédigez un plan d'une page : vos trois chiffres clés, le graphique, une action par segment, qui la fait et pour quand. Faites-le valider par votre directeur avant d'envoyer quoi que ce soit. Suivez les règles de votre organisation sur les contacts avec les donateurs et les désinscriptions."
          ],
          steps: ["Écrivez vos trois chiffres clés en haut.", "Ajoutez votre graphique.", "Choisissez une action par segment.", "Demandez à l'IA de rédiger chaque message avec des cases à remplir.", "Ajoutez qui fait quoi et pour quand, et obtenez la validation."],
          words: [["Appel aux dons", "une demande qui invite les soutiens à donner."], ["Publipostage", "un outil qui remplit chaque lettre ou e-mail avec les détails d'une personne tirés d'une liste."]],
          slides: [
            { title: "Une action par segment", bullets: ["Nouveaux : accueil et une histoire", "Fidèles : remerciement et invitation au don mensuel", "Perdus : \"vous nous manquez\" et des nouvelles", "Grands donateurs : appel personnel d'un responsable"] },
            { title: "Rédiger avec l'IA", bullets: ["Utilisez [nom du donateur] et [résultat du programme]", "Remplissez vous-même les vrais détails"] },
            { title: "Votre plan d'une page", bullets: ["Trois chiffres clés et le graphique", "Une action par segment", "Qui la fait et pour quand", "Validé avant l'envoi"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan d'appel d'une page avec vos trois chiffres, le graphique, une action par segment et les responsables. Demandez à l'IA de rédiger le mot \"vous nous manquez\" avec des cases à remplir, puis retouchez-le avec vos propres mots.",
          youCanNow: "transformer les chiffres des donateurs en plan d'appel pratique qui respecte leur vie privée.",
          quickCheck: [
            { objective: "O6", q: "Quelle est une bonne action pour les nouveaux donateurs ?", options: ["Les ignorer jusqu'à l'an prochain", "Leur demander tout de suite de donner chaque mois", "Un accueil chaleureux et une histoire sur ce qu'a permis leur don", "Un mot « vous nous manquez »"], answer: 2, why: "Les nouveaux donateurs reçoivent un accueil chaleureux et une histoire sur ce qu'a permis leur don." },
            { objective: "O6", q: "Votre plan d'appel est écrit. Que faites-vous avant d'envoyer quoi que ce soit ?", options: ["Vous l'envoyez à tous les donateurs en même temps", "Vous le publiez sur les réseaux sociaux", "Vous demandez à l'IA de l'approuver", "Vous le vérifiez avec votre directeur et suivez vos règles de contact et de désinscription des donateurs"], answer: 3, why: "Vérifiez avec votre directeur et suivez vos règles sur le contact des donateurs et les désinscriptions." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Des chiffres à l'action",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui peut être collé sans risque dans un assistant d'IA ?", options: ["Votre liste complète de donateurs", "Les e-mails des donateurs", "Les adresses des donateurs", "Des chiffres de synthèse comme la fidélisation et le nombre par segment"], answer: 3, why: "Les synthèses ne révèlent aucune personne." },
          { objective: "O4", q: "L'IA dit que \"la plupart des banques alimentaires fidélisent 70 pour cent de leurs donateurs\". Que faites-vous ?", options: ["Demander une source et la vérifier avant de l'utiliser", "Le mettre tout de suite dans le rapport au conseil", "Supposer que c'est vrai", "Supprimer vos propres chiffres"], answer: 0, why: "L'IA peut inventer des chiffres de référence ; vérifiez la source." },
          { objective: "O5", q: "Quel graphique convient pour comparer le nombre de donateurs par segment ?", options: ["Une carte", "Une photo", "Un graphique en barres", "Un calendrier"], answer: 2, why: "Les barres permettent de comparer facilement la taille des groupes." },
          { objective: "O6", q: "Quelle est une bonne action pour les donateurs perdus ?", options: ["Les retirer pour toujours", "Leur demander leur numéro de compte", "Ne rien envoyer", "Un mot \"vous nous manquez\" avec des nouvelles"], answer: 3, why: "Des nouvelles chaleureuses les invitent à revenir." },
          { objective: "O6", q: "Quand l'IA rédige des lettres aux donateurs, comment apparaissent les noms ?", options: ["De vrais noms tapés dans la demande", "Jamais de noms, même dans la lettre finale", "Des cases comme [nom du donateur] remplies plus tard", "Seulement les noms de famille"], answer: 2, why: "Les cases à remplir gardent les noms hors de l'outil d'IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Analyser vos donateurs avec l'IA",
    questions: [
      { objective: "O1", q: "L'analyse des donateurs, c'est :", options: ["Vendre des listes de donateurs", "Étudier les registres de dons pour savoir qui donne, combien et à quelle fréquence", "Deviner qui pourrait donner", "Une sorte d'application d'IA"], answer: 1, why: "Elle utilise vos propres registres pour guider la collecte." },
      { objective: "O1", q: "Par quoi remplacer les noms des donateurs dans votre copie de travail ?", options: ["Des identifiants comme D001", "Des surnoms", "Des numéros de téléphone", "Rien"], answer: 0, why: "Les identifiants permettent d'analyser sans montrer qui est qui." },
      { objective: "O1", q: "Quelles colonnes la copie anonyme doit-elle garder ?", options: ["Adresse et e-mail", "Téléphone et notes", "Identifiant, date du don, montant et campagne", "Coordonnées bancaires"], answer: 2, why: "C'est tout ce qu'il faut pour les chiffres." },
      { objective: "O1", q: "Où doit rester la vraie liste de donateurs ?", options: ["Dans votre logiciel de donateurs ou un fichier protégé", "Dans un dossier public", "Dans une discussion avec l'IA", "Dans une conversation de groupe par SMS"], answer: 0, why: "Les registres privés restent protégés." },
      { objective: "O2", q: "On trouve le total collecté avec :", options: ["=TODAY()", "=COUNT() des dates", "Une supposition", "=SUM() des montants"], answer: 3, why: "=SUM() additionne tous les dons." },
      { objective: "O2", q: "Le don moyen est égal à :", options: ["Le plus gros don", "Le total collecté divisé par le nombre de dons", "Le nombre de donateurs", "Le plus petit don fois deux"], answer: 1, why: "C'est la définition d'une moyenne." },
      { objective: "O2", q: "50 donateurs ont donné l'an dernier ; 30 d'entre eux ont redonné. La fidélisation est de :", options: ["30 pour cent", "50 pour cent", "60 pour cent", "80 pour cent"], answer: 2, why: "30 / 50 = 0,6, soit 60 pour cent." },
      { objective: "O2", q: "Un taux de fidélisation faible suggère que vous devez :", options: ["Arrêter la collecte", "Augmenter les prix", "Supprimer les anciens donateurs", "Mieux remercier et informer les donateurs"], answer: 3, why: "Un meilleur suivi fait revenir les donateurs." },
      { objective: "O3", q: "Le premier don d'un donateur date de cette année. Son segment est :", options: ["Nouveau", "Perdu", "Fidèle", "Grand donateur"], answer: 0, why: "Les nouveaux donateurs ont donné pour la première fois cette année." },
      { objective: "O3", q: "Un segment, c'est :", options: ["Un seul donateur", "Un type de graphique", "Un groupe de donateurs qui se ressemblent sur un point qui compte", "Un formulaire fiscal"], answer: 2, why: "Les segments permettent d'envoyer le bon message à chaque groupe." },
      { objective: "O3", q: "Pour regrouper les donateurs dans un tableur, vous pouvez :", options: ["Imprimer et découper le papier", "Demander aux donateurs de se trier eux-mêmes", "Supprimer des lignes", "Ajouter une colonne Segment et trier ou filtrer"], answer: 3, why: "Le tri et le filtre regroupent les lignes par segment." },
      { objective: "O4", q: "Quelle demande est sûre et utile ?", options: ["\"Voici les noms et les dons de tous nos donateurs...\"", "\"Voici nos identifiants bancaires.\"", "\"Fidélisation 45 pour cent, don moyen 85 $, 22 perdus. Explique simplement.\"", "\"Devine nos donateurs.\""], answer: 2, why: "Elle ne partage que des chiffres de synthèse et pose une question claire." },
      { objective: "O4", q: "L'IA a fait des calculs sur vos chiffres. Vous devez :", options: ["Lui faire entièrement confiance", "Les revérifier vous-même", "Les envoyer au conseil sans vérifier", "Ignorer tous les chiffres"], answer: 1, why: "L'IA peut faire des erreurs de calcul." },
      { objective: "O4", q: "Un chiffre de référence donné par l'IA sans source doit être :", options: ["Vérifié avant d'être utilisé", "Utilisé dans votre rapport de subvention", "Imprimé sur votre site", "Partagé avec les donateurs"], answer: 0, why: "L'IA peut inventer des chiffres qui semblent vrais." },
      { objective: "O5", q: "Pour faire un graphique dans Sheets ou Excel, vous commencez par :", options: ["Fermer le fichier", "Taper un mot de passe", "Sélectionner le tableau des segments et des nombres", "Supprimer les données"], answer: 2, why: "Le graphique est construit à partir des données sélectionnées." },
      { objective: "O5", q: "Un bon titre de graphique est :", options: ["\"Nos donateurs cette année par groupe\"", "\"Graphique 1\"", "Pas de titre", "\"Données\""], answer: 0, why: "Un titre clair dit le message au lecteur." },
      { objective: "O6", q: "Une bonne action pour les donateurs fidèles est :", options: ["Les ignorer", "Leur demander leurs mots de passe", "Les retirer de la liste", "Un remerciement et une invitation au don mensuel"], answer: 3, why: "Les donateurs fidèles sont les meilleurs candidats au don mensuel." },
      { objective: "O6", q: "Pour les grands donateurs, une bonne action est :", options: ["Seulement une lettre type", "Un appel ou une visite personnelle d'un responsable", "Aucun contact", "Un SMS demandant leur numéro de carte"], answer: 1, why: "Un contact personnel honore un engagement plus important." },
      { objective: "O6", q: "Votre plan d'une page doit contenir :", options: ["L'adresse de chaque donateur", "Les chiffres clés, le graphique, les actions, les responsables et les dates", "Seulement le graphique", "Seulement l'avis de l'IA"], answer: 1, why: "Un plan dit ce qui sera fait, par qui et quand." },
      { objective: "O6", q: "Avant d'envoyer un appel aux dons, vous devez :", options: ["L'envoyer à tout le monde d'un coup sans vérifier", "Laisser l'IA l'envoyer", "Ne pas relire", "Obtenir la validation et respecter vos règles de contact et de désinscription"], answer: 3, why: "La validation et le respect des désinscriptions protègent la confiance des donateurs." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      6,
      8,
      11,
      14,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Copie sûre",
        objective: "O1",
        notYet: "Un nom, une adresse, un téléphone, un e-mail ou une note reste dans la copie.",
        meets: "Les noms sont remplacés par des identifiants ; seuls l'identifiant, la date, le montant et la campagne sont gardés.",
        exceeds: "Indique où est gardée la vraie liste et qui peut l'ouvrir."
      },
      {
        name: "Chiffres clés",
        objective: "O2",
        notYet: "Le taux de fidélisation ou le don moyen est mal calculé.",
        meets: "Le total collecté, le don moyen et le taux de fidélisation sont tous justes.",
        exceeds: "Montre la formule ou le calcul pour chaque chiffre."
      },
      {
        name: "Segments de donateurs",
        objective: "O3",
        notYet: "Moins de trois groupes, ou des donateurs oubliés.",
        meets: "Au moins trois segments, chaque identifiant dans l'un d'eux, avec les nombres.",
        exceeds: "Utilise les quatre segments, avec un montant précisé pour les grands donateurs."
      },
      {
        name: "Explication de l'IA vérifiée",
        objective: "O4",
        notYet: "Des données par donateur ont été collées, ou des calculs ou points de comparaison de l'IA ont été utilisés sans vérification.",
        meets: "Seuls des chiffres de synthèse ont été collés ; les calculs de l'IA et tout point de comparaison ont été revérifiés.",
        exceeds: "Liste les questions que l'IA a proposé de poser ensuite et les réponses."
      },
      {
        name: "Plan d'appel",
        objective: "O6",
        notYet: "Pas d'action pour un segment, ou pas de responsable ni de date.",
        meets: "Une page avec les chiffres clés, le graphique, une action par segment, un responsable et une date.",
        exceeds: "Les brouillons de messages utilisent des cases à remplir et le plan est approuvé par le directeur."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Organisations qui calculent leur taux de fidélisation des donateurs pour la première fois (enquête de suivi)",
      "Évolution du taux de fidélisation des donateurs un an plus tard, selon les organisations",
      "Donateurs perdus qui donnent à nouveau après un mot « vous nous manquez »"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec Google Sheets ou Excel",
      "Une copie anonyme de votre liste de donateurs, ou la liste d'entraînement de la leçon 1",
      "Un assistant d'IA gratuit, utilisé seulement avec des chiffres de synthèse",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Utilisez la liste d'entraînement en classe ; les apprenants ne travaillent sur de vraies données que dans leurs propres fichiers protégés.",
      "Faites ensemble le calcul du taux de fidélisation avant que les apprenants essaient le leur.",
      "Montrez un cas où le calcul de l'IA est faux pour que les apprenants voient pourquoi ils le revérifient.",
      "Invitez le directeur ou le responsable du développement pour que le plan d'appel puisse être approuvé sur place.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
