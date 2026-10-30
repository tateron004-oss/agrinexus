"use strict";

// Koach Learn course (French translation of shared/ged-math.js). See scripts/koachlearn-courses/README.md, "Translations".
// The content stays about the US GED Math test; GED, HiSET, GED Ready, TI-30XS and ged.com are kept as written.
// Math is written exactly as in the English (x for times, ^ for powers, / for divide, a point for decimals) so it matches the test screen.

const GED_SUBJECTS = { name: "GED Testing Service : Matières de l'examen (Mathématiques)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service : Épreuve de mathématiques, fiche de formules et question d'exemple", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service : Tests d'exemple gratuits et GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service : Fiche de référence de la calculatrice TI-30XS (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET : examen d'équivalence du diplôme d'études secondaires", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math-fr",
  lang: "fr",
  translationOf: "ged-math",
  category: "Workforce Development",
  name: "Préparation à l'examen GED : Mathématiques",
  skills: "Connaître l'épreuve de mathématiques du GED et faire un plan de révision, Calcul sans calculatrice, Rapports, pourcentages et données, Résoudre des équations et des inéquations, Géométrie avec la fiche de formules, Pente, graphiques et fonctions",
  outcome: "résoudre les principaux types de problèmes de l'épreuve de mathématiques du GED (calcul, pourcentages et données, équations, géométrie avec la fiche de formules et graphiques) et suivre un plan de révision et d'examen daté qui vous prépare à passer l'épreuve de mathématiques du GED.",
  about: [
    "Ce cours s'adresse aux adultes qui préparent un diplôme d'équivalence des études secondaires américaines (high school) : jeunes adultes, personnes qui sortent de prison, immigrés, anciens militaires et toute personne qui reprend ses études. Un diplôme ouvre des portes vers l'emploi, les formations et l'université.",
    "L'examen GED comporte quatre matières, et les mathématiques (appelées Raisonnement mathématique) en font partie. Il est organisé sur ordinateur par GED Testing Service, l'organisme officiel du GED. L'épreuve de mathématiques couvre les mathématiques de base, la géométrie, l'algèbre de base, ainsi que les graphiques et les fonctions. On vous donne une fiche de formules, vous n'avez donc pas à apprendre les formules par cœur. Certains États utilisent l'examen HiSET à la place du GED, ou en plus du GED ; le bureau d'éducation des adultes de votre État ou ged.com vous dit lequel.",
    "Vous allez découvrir comment se passe l'épreuve de mathématiques, puis vous entraîner sur chaque type de problème avec des exemples résolus et des exercices dont les réponses sont expliquées. Vous terminez avec votre propre plan de révision et d'examen daté.",
    "Ce cours vous prépare à l'examen ; il ne vous donne pas le diplôme GED. Seule la réussite à l'examen GED officiel vous le donne. Consultez ged.com pour connaître les règles actuelles de votre État, le prix, la possibilité de passer l'examen dans un centre ou en ligne, et les tests d'entraînement officiels. Chaque leçon dure environ six minutes, avec une vérification rapide juste après, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites votre propre plan de révision et d'examen pour les mathématiques du GED : passez le test d'exemple gratuit de mathématiques du GED (GED Math Sample Test) sur ged.com et notez votre résultat ; notez vos 3 sujets les plus faibles d'après ce test et les quiz de ce cours ; écrivez un emploi du temps de révision hebdomadaire avec de vraies dates pour les 6 à 8 prochaines semaines (quel sujet, quel jour, combien de temps) ; résolvez une série de 12 exercices (2 par leçon) et expliquez ceux que vous avez manqués ; et notez les dates auxquelles vous comptez passer le test d'entraînement officiel GED Ready et l'épreuve de mathématiques du GED, après avoir vérifié les règles et les prix de votre État sur ged.com.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes sans diplôme d'études secondaires : personnes qui sortent de prison, immigrés, anciens militaires, parents et travailleurs qui ont besoin d'un diplôme pour un emploi, une promotion ou l'université. Beaucoup ont quitté l'école il y a des années ; certains ont eu de mauvaises expériences avec les mathématiques.",
    startingPoint: "Savent additionner, soustraire, multiplier et diviser des nombres entiers, souvent avec une calculatrice. Beaucoup ont oublié les fractions, les nombres négatifs et les pourcentages, et connaissent peu ou pas l'algèbre. La plupart n'ont jamais vu le format de l'examen GED ni sa calculatrice.",
    gap: "L'épreuve de mathématiques du GED demande du calcul, des pourcentages et des données, de l'algèbre, de la géométrie avec une fiche de formules et des graphiques, en 115 minutes sur ordinateur. Les apprenants doivent connaître le format de l'épreuve, s'entraîner sur chaque type de problème avec des exemples résolus et suivre un plan de révision pour se présenter quand ils sont prêts. Réussir ouvre l'accès à l'emploi, à la formation et à l'université.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de mathématiques est expliqué",
      "Appareils : un téléphone ou un ordinateur pour le test d'exemple gratuit du GED ; papier et crayon pour s'entraîner",
      "Calculatrice : s'entraîner avec une TI-30XS si possible, ou avec une calculatrice scientifique gratuite en ligne",
      "Temps : leçons de 5 à 6 minutes, plus un emploi du temps de révision hebdomadaire fixé par chaque apprenant",
      "Les règles, les prix et les options d'examen varient selon l'État et peuvent changer : toujours renvoyer vers ged.com ou le bureau de l'État",
      "Peur des mathématiques : beaucoup d'exemples résolus, vérification des réponses, pas de pression de temps pendant l'entraînement"
    ],
    prerequisites: "Additionner, soustraire, multiplier et diviser des nombres entiers. Les apprenants qui ne sont pas sûrs d'eux avec les fractions, les nombres décimaux et les pourcentages peuvent suivre d'abord « Les maths du quotidien pour le travail et la vie »."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À l'aide de ged.com et du test d'exemple gratuit de mathématiques du GED", action: "énumérer les domaines, la durée, les règles de la calculatrice et les types de questions de l'épreuve de mathématiques du GED, et écrire un plan de révision et d'examen daté", standard: "avec un emploi du temps hebdomadaire sur 6 à 8 semaines et une date d'examen visée" },
    { id: "O2", condition: "Sans calculatrice", action: "résoudre des problèmes avec l'ordre des opérations, les fractions, les nombres négatifs, les puissances et les racines carrées", standard: "en réussissant au moins 4 sur 5" },
    { id: "O3", condition: "Face à des problèmes rédigés et à de petites séries de données", action: "résoudre des problèmes de rapports, de proportions et de pourcentages, et trouver la moyenne, la médiane, le mode et l'étendue", standard: "en réussissant au moins 4 sur 5" },
    { id: "O4", condition: "Face à un problème rédigé ou à une équation", action: "écrire et résoudre des équations et des inéquations du premier degré à une inconnue", standard: "en réussissant au moins 4 sur 5 et en vérifiant chaque réponse en la remplaçant dans le problème" },
    { id: "O5", condition: "À l'aide d'une fiche de formules et d'une calculatrice", action: "calculer le périmètre, l'aire, le volume et le côté manquant d'un triangle rectangle", standard: "en réussissant au moins 4 sur 5, avec les bonnes unités" },
    { id: "O6", condition: "Face à un graphique, un tableau, deux points ou une fonction", action: "trouver la pente, lire des valeurs et calculer la valeur de la fonction", standard: "en réussissant au moins 4 sur 5" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'épreuve, les nombres et les données",
      lessons: [
        {
          title: "L'épreuve de mathématiques du GED et votre plan de révision",
          objectives: ["O1"],
          minutes: 6,
          goal: "Énumérer comment se passe l'épreuve de mathématiques du GED et commencer un plan de révision daté.",
          text: [
            "L'examen GED comporte quatre matières : Mathématiques, Raisonnement en langue et littérature (Reasoning Through Language Arts), Sciences et Sciences sociales. Vous pouvez les passer une par une. L'épreuve de mathématiques s'appelle Raisonnement mathématique (Mathematical Reasoning). Elle couvre quatre domaines : les mathématiques de base, la géométrie, l'algèbre de base, ainsi que les graphiques et les fonctions.",
            "D'après ged.com, l'épreuve de mathématiques dure 115 minutes, y compris le temps pour les consignes et la relecture. Elle a plusieurs parties, avec une courte pause entre elles. Une calculatrice à l'écran est fournie pour la partie 2 ; dans un centre d'examen, vous pouvez apporter votre propre calculatrice TI-30XS. Certaines questions se font sans calculatrice, donc il faut aussi savoir calculer de tête et sur papier. On vous donne une fiche de formules et une fiche de référence de la calculatrice, vous n'avez donc pas à apprendre les formules par cœur.",
            "Les types de questions sont : choix multiple, glisser-déposer, texte à compléter, sélection d'une zone (cliquer sur un graphique ou une image) et liste déroulante. Vérifiez sur ged.com avant l'examen, car les détails peuvent changer. Dans certains États, on utilise l'examen HiSET à la place du GED ou en plus du GED ; c'est votre État qui décide.",
            "Commencez par le test d'exemple gratuit de mathématiques du GED sur ged.com. Il vous montre l'écran et les types de questions. Utilisez-le pour repérer vos sujets faibles. Quand vous approchez du but, le test d'entraînement officiel, GED Ready, vous dit si vous êtes probablement prêt (vérifiez son prix sur ged.com). Ensuite, faites un plan de révision : des séances courtes, plusieurs jours par semaine, un sujet à la fois."
          ],
          steps: ["Allez sur ged.com et lisez la page de l'épreuve de mathématiques et les règles de votre État.", "Passez le test d'exemple gratuit de mathématiques du GED et notez votre résultat.", "Notez les sujets que vous avez trouvés difficiles.", "Choisissez des jours et des heures de révision pour les 6 à 8 prochaines semaines, avec de vraies dates.", "Mettez un sujet par jour de révision, en commençant par le plus faible.", "Choisissez une date pour passer GED Ready, et une date visée pour le vrai examen."],
          words: [["GED", "un examen d'équivalence du diplôme d'études secondaires de GED Testing Service ; réussir les quatre matières donne un diplôme d'équivalence."], ["HiSET", "un autre examen d'équivalence du diplôme d'études secondaires utilisé dans certains États."], ["Fiche de formules", "une page de formules de mathématiques qu'on vous donne pendant l'examen."], ["TI-30XS", "le modèle de calculatrice scientifique utilisé pour l'épreuve de mathématiques du GED."], ["GED Ready", "le test d'entraînement officiel du GED qui montre si vous êtes probablement prêt."], ["Plan de révision", "un emploi du temps écrit de ce que vous allez étudier et quand."]],
          slides: [
            { title: "Les maths du GED (Raisonnement mathématique)", bullets: ["Mathématiques de base, Géométrie, Algèbre de base, Graphiques et fonctions", "115 minutes, sur ordinateur, avec une courte pause", "Fiche de formules et fiche de référence de la calculatrice fournies"] },
            { title: "Calculatrice et types de questions", bullets: ["Calculatrice à l'écran pour la partie 2 ; ou votre TI-30XS dans un centre", "Certaines questions sans calculatrice", "Choix multiple, glisser-déposer, texte à compléter, zone, liste déroulante"] },
            { title: "Tests d'entraînement", bullets: ["Test d'exemple gratuit de mathématiques du GED sur ged.com", "GED Ready : le test d'entraînement officiel (vérifiez le prix)", "Certains États utilisent HiSET : vérifiez pour votre État"] },
            { title: "Votre plan de révision", bullets: ["Commencez par vos sujets les plus faibles", "Séances courtes, plusieurs jours par semaine, vraies dates", "Choisissez une date pour GED Ready et une date visée pour l'examen"] }
          ],
          tryIt: "Allez sur ged.com et passez le test d'exemple gratuit de mathématiques du GED. Notez votre résultat et les sujets qui vous ont semblé difficiles. Puis, sur papier, faites un calendrier pour les 6 à 8 prochaines semaines : entourez vos jours de révision, écrivez une heure pour chacun et mettez votre sujet le plus difficile le premier jour. C'est le début de votre travail final.",
          youCanNow: "décrire l'épreuve de mathématiques du GED (contenu, durée, calculatrice, fiche de formules, types de questions) et commencer un plan de révision daté.",
          quickCheck: [
            { objective: "O1", q: "Devez-vous apprendre les formules par cœur pour l'épreuve de mathématiques du GED ?", options: ["Oui, toutes les formules", "Non, une fiche de formules est fournie", "Seulement celles au dos de la calculatrice", "Seulement si vous passez l'examen en ligne"], answer: 1, why: "GED Testing Service fournit une fiche de formules pendant l'examen." },
            { objective: "O1", q: "Où devez-vous vérifier les règles et les prix actuels du GED dans votre État ?", options: ["Dans une publication sur les réseaux sociaux", "Auprès d'un ami qui a passé l'examen il y a des années", "Sur ged.com ou auprès du bureau d'éducation des adultes de votre État", "Seulement dans ce cours"], answer: 2, why: "Les règles et les prix changent et varient selon l'État ; le site officiel est la source." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Le calcul sans calculatrice",
          objectives: ["O2"],
          minutes: 6,
          goal: "Résoudre à la main des problèmes d'ordre des opérations, de fractions, de nombres négatifs, de puissances et de racines carrées.",
          text: [
            "Ordre des opérations : d'abord les Parenthèses, puis les Exposants (puissances), puis Multiplier et Diviser de gauche à droite, puis Additionner et Soustraire de gauche à droite. En anglais, beaucoup de gens retiennent PEMDAS. Exemple : 3 + 4 x (6 - 2)^2 / 8. Parenthèses : 6 - 2 = 4. Puissance : 4^2 = 16. Multiplier et diviser de gauche à droite : 4 x 16 = 64, 64 / 8 = 8. Additionner : 3 + 8 = 11.",
            "Fractions : pour multiplier, multipliez les numérateurs entre eux et les dénominateurs entre eux : 2/3 x 3/4 = 6/12 = 1/2. Pour diviser, retournez la deuxième fraction et multipliez : 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. Pour comparer des fractions et des nombres décimaux, transformez-les tous en nombres décimaux : 2/3 vaut environ 0.667, donc du plus petit au plus grand : 0.65, 2/3, 0.7.",
            "Nombres négatifs : -5 + 8 = 3. Soustraire un nombre négatif, c'est additionner : 6 - (-2) = 8. Un négatif fois un négatif donne un positif : -3 x -4 = 12 ; un négatif fois un positif donne un négatif : -3 x 4 = -12. Sur une droite graduée, les nombres sont plus grands vers la droite.",
            "Puissances et racines : 2^5 veut dire 2 x 2 x 2 x 2 x 2 = 32. Une racine carrée défait le carré : la racine carrée de 49 est 7, car 7 x 7 = 49. La racine carrée de 50 est un peu plus que 7, car 50 est entre 49 et 64."
          ],
          steps: ["D'abord les parenthèses.", "Puis les puissances et les racines.", "Puis multipliez et divisez, de gauche à droite.", "Puis additionnez et soustrayez, de gauche à droite.", "Fractions : multipliez en ligne ; pour diviser, retournez la deuxième et multipliez.", "Signes : des signes identiques donnent un positif, des signes différents un négatif."],
          words: [["Ordre des opérations", "l'ordre convenu pour faire les étapes d'un calcul : parenthèses, puissances, multiplier et diviser, additionner et soustraire."], ["Exposant", "un petit nombre en haut qui dit combien de fois on multiplie un nombre par lui-même : 2^3 = 2 x 2 x 2."], ["Racine carrée", "le nombre qui, multiplié par lui-même, donne le nombre : la racine carrée de 25 est 5."], ["Nombre négatif", "un nombre plus petit que zéro, comme -4."], ["Droite graduée", "une ligne avec les nombres dans l'ordre ; les nombres sont plus grands vers la droite."]],
          slides: [
            { title: "Ordre des opérations", bullets: ["Parenthèses, Puissances", "Multiplier et Diviser, de gauche à droite", "Additionner et Soustraire, de gauche à droite", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Fractions", bullets: ["Multiplier : 2/3 x 3/4 = 6/12 = 1/2", "Diviser : retournez et multipliez : 3/4 / 1/2 = 1 1/2", "Comparer : transformez en nombres décimaux"] },
            { title: "Nombres négatifs", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12 ; -3 x 4 = -12"] },
            { title: "Puissances et racines", bullets: ["2^5 = 32", "Racine carrée de 49 = 7", "La racine carrée de 50 est un peu plus que 7"] }
          ],
          tryIt: "Entraînez-vous sans calculatrice (réponses plus bas) : (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - racine carrée de 16. Réponses : (1) 10 - 6 + 4 = 8 (multipliez d'abord). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. Pour chaque erreur, trouvez l'étape où ça s'est mal passé et écrivez la règle dont vous avez besoin.",
          youCanNow: "faire à la main l'ordre des opérations, les fractions, les nombres négatifs, les puissances et les racines carrées.",
          quickCheck: [
            { objective: "O2", q: "Combien font 8 + 12 / 4 ?", options: ["5", "20", "14", "11"], answer: 3, why: "On divise avant d'additionner : 12 / 4 = 3, puis 8 + 3 = 11." },
            { objective: "O2", q: "Combien font -6 x -5 ?", options: ["30", "-30", "-11", "11"], answer: 0, why: "Un négatif fois un négatif donne un positif : 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Rapports, proportions, pourcentages et données",
          objectives: ["O3"],
          minutes: 6,
          goal: "Résoudre des problèmes de rapports, de proportions et de pourcentages, et trouver la moyenne, la médiane, le mode et l'étendue.",
          text: [
            "Un rapport compare deux quantités : 3 tasses de farine pour 2 tasses de sucre, c'est 3:2. Une proportion dit que deux rapports sont égaux. Pour la résoudre, faites le produit en croix. Exemple : 3 tasses de farine donnent 24 biscuits. Combien pour 40 biscuits ? 3/24 = x/40, donc 24x = 120 et x = 5 tasses.",
            "Trois questions de pourcentage : (1) Combien font 35% de 80 ? 0.35 x 80 = 28. (2) 18 représente quel pourcentage de 72 ? 18 / 72 = 0.25 = 25%. (3) Variation en pourcentage : un prix passe de $40 à $50. La variation est de $10, et 10 / 40 = 0.25, donc il a augmenté de 25%. Divisez toujours la variation par la quantité de DÉPART.",
            "Données : pour les nombres 4, 7, 7, 9, 13, la moyenne est le total divisé par le nombre de valeurs : 40 / 5 = 8. La médiane est le nombre du milieu quand ils sont dans l'ordre : 7. Le mode est le nombre qui revient le plus souvent : 7. L'étendue est le plus grand moins le plus petit : 13 - 4 = 9. S'il y a deux nombres au milieu, la médiane est à mi-chemin entre les deux.",
            "La probabilité est la chance qu'une chose arrive : le nombre de façons dont elle peut arriver / le nombre total de résultats possibles. Un sac contient 3 billes rouges et 9 bleues : la probabilité de tirer une rouge est 3/12 = 1/4, soit 25%."
          ],
          steps: ["Proportion : écrivez deux fractions égales avec les mêmes unités aux mêmes places, puis faites le produit en croix et divisez.", "Pourcentage d'un nombre : transformez le pourcentage en nombre décimal et multipliez.", "Quel pourcentage : partie / total, puis transformez en pourcentage.", "Variation en pourcentage : variation / valeur de départ.", "Moyenne : additionnez, puis divisez par le nombre de valeurs. Médiane : mettez dans l'ordre, trouvez le milieu.", "Mode : la valeur la plus fréquente. Étendue : le plus grand moins le plus petit."],
          words: [["Rapport", "une comparaison de deux quantités, comme 3:2."], ["Proportion", "deux rapports égaux, comme 3/24 = 5/40."], ["Produit en croix", "multiplier le numérateur de chaque fraction par le dénominateur de l'autre pour résoudre une proportion."], ["Moyenne", "additionnez les nombres et divisez par le nombre de valeurs."], ["Médiane", "le nombre du milieu quand les nombres sont dans l'ordre."], ["Mode", "le nombre qui revient le plus souvent."], ["Étendue", "le plus grand nombre moins le plus petit."], ["Probabilité", "la chance qu'une chose arrive, de 0 (jamais) à 1 (toujours)."]],
          slides: [
            { title: "Rapports et proportions", bullets: ["3 tasses pour 24 biscuits ; x tasses pour 40", "3/24 = x/40, donc 24x = 120", "x = 5 tasses"] },
            { title: "Trois questions de pourcentage", bullets: ["35% de 80 = 0.35 x 80 = 28", "18 sur 72 = 18 / 72 = 25%", "De $40 à $50 : 10 / 40 = hausse de 25%"] },
            { title: "Données : 4, 7, 7, 9, 13", bullets: ["Moyenne : 40 / 5 = 8", "Médiane : 7 ; Mode : 7", "Étendue : 13 - 4 = 9"] },
            { title: "Probabilité", bullets: ["Façons dont ça peut arriver / total des résultats", "3 rouges sur 12 billes : 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : (1) L'échelle d'une carte est 1 pouce : 20 miles. Combien de miles font 3.5 pouces ? (2) Combien font 15% de 260 ? (3) Un téléphone à $250 coûte maintenant $200. Quel est le pourcentage de baisse ? (4) Trouvez la moyenne, la médiane, le mode et l'étendue de 12, 15, 15, 18, 20, 22. Réponses : (1) 70 miles. (2) 39. (3) 50 / 250 = baisse de 20%. (4) Moyenne 102 / 6 = 17 ; médiane à mi-chemin entre 15 et 18 = 16.5 ; mode 15 ; étendue 10.",
          youCanNow: "résoudre des proportions et les trois types de problèmes de pourcentage, et décrire une série de données avec la moyenne, la médiane, le mode et l'étendue.",
          quickCheck: [
            { objective: "O3", q: "Quelle est la médiane de 3, 9, 4, 8, 6 ?", options: ["4", "9", "6", "30"], answer: 2, why: "Dans l'ordre : 3, 4, 6, 8, 9. Le nombre du milieu est 6." },
            { objective: "O3", q: "Un article à $60 passe à $75. Quel est le pourcentage de hausse ?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "La variation est de 15, et 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'épreuve, les nombres et les données",
        questions: [
          { objective: "O1", q: "Lequel de ces domaines fait partie des quatre domaines de l'épreuve de mathématiques du GED ?", options: ["L'orthographe", "Graphiques et fonctions", "L'histoire du monde", "La vitesse de frappe au clavier"], answer: 1, why: "L'épreuve de mathématiques couvre les mathématiques de base, la géométrie, l'algèbre de base, ainsi que les graphiques et les fonctions." },
          { objective: "O2", q: "Combien font 2 + 3 x 4^2 ?", options: ["50", "80", "26", "400"], answer: 0, why: "D'abord la puissance : 16. Multipliez : 48. Additionnez : 50." },
          { objective: "O2", q: "Combien font 3/4 / 3/8 ?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Retournez et multipliez : 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "5 ouvriers peuvent emballer 40 cartons par heure. Au même rythme, combien de cartons peuvent emballer 8 ouvriers ?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, donc 5x = 320 et x = 64." },
          { objective: "O3", q: "Quelle est la moyenne de 10, 14, 15 et 21 ?", options: ["15", "14.5", "11", "60"], answer: 0, why: "Le total est 60, divisé par 4 nombres, cela fait 15." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Algèbre, géométrie et graphiques",
      lessons: [
        {
          title: "Résoudre des équations et des inéquations",
          objectives: ["O4"],
          minutes: 6,
          goal: "Écrire et résoudre des équations et des inéquations à une inconnue et vérifier chaque réponse.",
          text: [
            "Une inconnue (ou variable) est une lettre, comme x, qui représente un nombre qu'on ne connaît pas. Les mots se traduisent en maths : « 5 de plus que le double d'un nombre » s'écrit 2x + 5. « Un nombre diminué de 7 » s'écrit x - 7. « Le produit de 4 et d'un nombre » s'écrit 4x.",
            "Pour résoudre une équation, faites la même chose des deux côtés jusqu'à ce que x soit seul. Défaites d'abord l'addition ou la soustraction, puis la multiplication ou la division. Exemple : 3x - 7 = 20. Ajoutez 7 : 3x = 27. Divisez par 3 : x = 9. Vérifiez : 3 x 9 - 7 = 20. Oui. Exemple avec des parenthèses : 2(x + 4) = 18. Divisez par 2 : x + 4 = 9, donc x = 5.",
            "Problème rédigé : un forfait téléphonique coûte $25 par mois plus $0.10 par SMS. La facture était de $32. Combien de SMS ? 25 + 0.10t = 32. Enlevez 25 : 0.10t = 7. Divisez par 0.10 : t = 70 SMS.",
            "Les inéquations utilisent <, >, <= ou >= et se résolvent de la même façon, avec une règle : quand vous multipliez ou divisez les deux côtés par un nombre négatif, inversez le signe. 4x + 3 > 19 donne 4x > 16, donc x > 4. Mais -2x <= 10 donne x >= -5. Pour les questions à choix multiple, vous pouvez aussi vérifier en remplaçant chaque réponse dans le problème."
          ],
          steps: ["Traduisez les mots en équation avec une lettre pour l'inconnue.", "Défaites l'addition ou la soustraction des deux côtés.", "Défaites la multiplication ou la division des deux côtés.", "Inéquation : inversez le signe si vous multipliez ou divisez par un négatif.", "Vérifiez : remplacez votre réponse dans le problème de départ."],
          words: [["Inconnue (variable)", "une lettre qui représente un nombre qu'on ne connaît pas."], ["Expression", "des nombres, des lettres et des opérations sans signe égal, comme 2x + 5."], ["Équation", "une phrase mathématique avec un signe égal, comme 3x - 7 = 20."], ["Inéquation", "une phrase mathématique qui utilise <, >, <= ou >= au lieu d'un signe égal."], ["Résoudre", "trouver la valeur de l'inconnue qui rend la phrase vraie."]],
          slides: [
            { title: "Des mots aux maths", bullets: ["5 de plus que le double d'un nombre : 2x + 5", "Un nombre diminué de 7 : x - 7", "Le produit de 4 et d'un nombre : 4x"] },
            { title: "Résoudre une équation", bullets: ["3x - 7 = 20", "Ajoutez 7 : 3x = 27 ; divisez par 3 : x = 9", "Vérifiez : 3 x 9 - 7 = 20"] },
            { title: "Un problème rédigé", bullets: ["$25 par mois + $0.10 par SMS = $32", "25 + 0.10t = 32, donc 0.10t = 7", "t = 70 SMS"] },
            { title: "Inéquations", bullets: ["Se résolvent comme une équation", "Multiplier ou diviser par un négatif : inversez le signe", "-2x <= 10 donne x >= -5"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : (1) Écrivez « 8 de moins que 3 fois un nombre » sous forme d'expression. (2) Résolvez 5x + 6 = 41. (3) Résolvez 4(x - 2) = 28. (4) Un taxi demande $3 plus $2 par mile. La course a coûté $19. Combien de miles ? (5) Résolvez -3x + 1 > 13. Réponses : (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = 8 miles. (5) -3x > 12, donc x < -4 (inversez le signe). Vérifiez chaque réponse en la remplaçant dans le problème.",
          youCanNow: "traduire des mots en équations, résoudre des équations et des inéquations, et vérifier vos réponses.",
          quickCheck: [
            { objective: "O4", q: "Résolvez : x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Enlevez 3 : x / 4 = 5. Multipliez par 4 : x = 20." },
            { objective: "O4", q: "Résolvez : -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Divisez par -5 et inversez le signe : x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "La géométrie avec la fiche de formules et la calculatrice",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer le périmètre, l'aire, le volume et le côté manquant d'un triangle rectangle à l'aide d'une fiche de formules et d'une calculatrice.",
          text: [
            "Le périmètre est la longueur du tour d'une figure ; additionnez les côtés. L'aire est la surface à l'intérieur, en unités carrées. Le volume est l'espace à l'intérieur d'un objet en 3D, en unités cubes. Un rectangle de 8 pieds sur 5 pieds a un périmètre de 2 x (8 + 5) = 26 pieds et une aire de 8 x 5 = 40 pieds carrés. Un triangle de base 10 et de hauteur 6 a une aire de 1/2 x 10 x 6 = 30.",
            "Les cercles utilisent pi, environ 3.14 (la calculatrice a une touche pi). Pour un cercle de rayon 3 : aire = pi x r^2 = environ 28.27 unités carrées ; circonférence = 2 x pi x r = environ 18.85. Le diamètre est le double du rayon, alors lisez bien lequel des deux la question vous donne.",
            "Volume : une boîte de 4 sur 3 sur 2 a un volume de 4 x 3 x 2 = 24 unités cubes. Un cylindre de rayon 2 et de hauteur 5 a un volume de pi x r^2 x h = pi x 4 x 5 = environ 62.83 unités cubes.",
            "Triangles rectangles : a^2 + b^2 = c^2 (le théorème de Pythagore), où c est le plus long côté, en face de l'angle droit. Si les deux autres côtés mesurent 6 et 8, c^2 = 36 + 64 = 100, donc c = 10. On vous donne une fiche de formules à l'examen : entraînez-vous avec la fiche actuelle de ged.com pour savoir où se trouve chaque formule. Sur la TI-30XS, utilisez la touche (-) pour les nombres négatifs et la touche x^2 pour les carrés ; la fiche de référence de la calculatrice du GED montre les touches."
          ],
          steps: ["Dessinez la figure et notez ce que vous savez.", "Décidez : périmètre (le tour), aire (l'intérieur, à plat) ou volume (l'intérieur, en 3D) ?", "Trouvez la formule sur la fiche de formules.", "Mettez les nombres et utilisez la calculatrice.", "Écrivez les unités : pieds, pieds carrés ou pieds cubes.", "Demandez-vous : la réponse est-elle logique pour le dessin ?"],
          words: [["Périmètre", "la longueur du tour d'une figure plane."], ["Aire", "la surface à l'intérieur d'une figure plane, en unités carrées."], ["Volume", "l'espace à l'intérieur d'un objet en 3D, en unités cubes."], ["Rayon", "la distance entre le centre d'un cercle et son bord ; le diamètre est le double du rayon."], ["Pi", "le nombre, environ 3.14, utilisé avec les cercles."], ["Théorème de Pythagore", "pour un triangle rectangle, a^2 + b^2 = c^2, où c est le plus long côté."]],
          slides: [
            { title: "Périmètre, aire, volume", bullets: ["Périmètre : le tour, en unités", "Aire : l'intérieur d'une figure plane, unités carrées", "Volume : l'intérieur d'un objet en 3D, unités cubes"] },
            { title: "Rectangles et triangles", bullets: ["Rectangle de 8 sur 5 : périmètre 26, aire 40", "Triangle : 1/2 x base x hauteur", "Base 10, hauteur 6 : aire 30"] },
            { title: "Cercles et cylindres", bullets: ["Aire = pi x r^2 ; rayon 3 : environ 28.27", "Circonférence = 2 x pi x r", "Volume du cylindre = pi x r^2 x h"] },
            { title: "Triangles rectangles", bullets: ["a^2 + b^2 = c^2", "Côtés 6 et 8 : c = 10", "Entraînez-vous avec la fiche de formules actuelle de ged.com"] }
          ],
          tryIt: "Entraînez-vous avec une calculatrice et la fiche de formules de ged.com (réponses plus bas) : (1) Aire et périmètre d'un rectangle de 12 m sur 7 m. (2) Aire d'un cercle de 10 pouces de diamètre. (3) Volume d'une boîte de 6 pieds sur 2 pieds sur 3 pieds. (4) Une échelle de 13 pieds est posée contre un mur, son pied à 5 pieds du mur. Jusqu'à quelle hauteur arrive-t-elle sur le mur ? Réponses : (1) aire 84 mètres carrés, périmètre 38 m. (2) rayon 5, aire environ 78.54 pouces carrés. (3) 36 pieds cubes. (4) 5^2 + b^2 = 13^2, donc b^2 = 169 - 25 = 144, b = 12 pieds.",
          youCanNow: "trouver le périmètre, l'aire, le volume et le côté manquant d'un triangle rectangle, avec les bonnes unités.",
          quickCheck: [
            { objective: "O5", q: "Une pièce mesure 14 pieds sur 10 pieds. Quelle est son aire ?", options: ["24 pieds carrés", "48 pieds", "140 pieds cubes", "140 pieds carrés"], answer: 3, why: "Aire = longueur x largeur = 140, en pieds carrés." },
            { objective: "O5", q: "Un triangle rectangle a deux côtés de l'angle droit de 9 et 12. Combien mesure le plus long côté ?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, et la racine carrée de 225 est 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Pente, graphiques et fonctions",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Trouver la pente, lire des graphiques et des tableaux, calculer des valeurs de fonctions et terminer votre plan de révision et d'examen.",
          text: [
            "Un repère a un axe des x (horizontal) et un axe des y (vertical). Un point s'écrit (x, y) : (3, 5) veut dire 3 en horizontal, 5 vers le haut. La pente dit à quel point une droite est inclinée : la montée divisée par l'avancée, soit (y2 - y1) / (x2 - x1). De (1, 3) à (4, 9) : (9 - 3) / (4 - 1) = 6 / 3 = 2. Une droite qui monte de gauche à droite a une pente positive ; si elle descend, une pente négative.",
            "Une droite peut s'écrire y = mx + b, où m est la pente et b est l'endroit où la droite coupe l'axe des y. Dans un tableau où x = 0, 1, 2 donne y = 5, 8, 11, y augmente de 3 à chaque fois, donc m = 3, et quand x = 0, y = 5, donc b = 5 : y = 3x + 5.",
            "Une fonction donne un seul résultat pour chaque valeur de départ. f(x) = x^2 - 3x veut dire : prenez la valeur, mettez-la au carré, enlevez 3 fois cette valeur. f(4) = 16 - 12 = 4. Sur un graphique, trouvez la valeur en allant sur l'axe des x jusqu'au x voulu, puis en montant ou en descendant jusqu'à la courbe, puis en allant à l'horizontale pour lire y.",
            "Terminez votre plan. Regardez vos résultats aux vérifications rapides, aux contrôles des connaissances et au test d'exemple. Mettez vos 3 sujets les plus faibles en premier dans votre emploi du temps hebdomadaire, ajoutez des jours de révision générale et choisissez des dates pour GED Ready et pour le vrai examen, après avoir vérifié les règles de votre État sur ged.com."
          ],
          steps: ["Pente : soustrayez les valeurs de y, soustrayez les valeurs de x dans le même ordre, divisez.", "y = mx + b : m est la pente, b est la valeur de y quand x = 0.", "Dans un tableau : la variation de y chaque fois que x augmente de 1, c'est la pente.", "Fonction : remplacez x par le nombre et suivez l'ordre des opérations.", "Plan : sujets les plus faibles d'abord, vraies dates, GED Ready avant le vrai examen."],
          words: [["Repère", "un quadrillage avec un axe des x et un axe des y pour placer des points."], ["Couple de coordonnées", "un point écrit (x, y)."], ["Pente", "à quel point une droite est inclinée : la montée divisée par l'avancée."], ["Ordonnée à l'origine", "l'endroit où une droite coupe l'axe des y ; le b dans y = mx + b."], ["Fonction", "une règle qui donne exactement un résultat pour chaque valeur de départ, comme f(x) = 2x + 1."]],
          slides: [
            { title: "Pente = montée / avancée", bullets: ["(y2 - y1) / (x2 - x1)", "De (1, 3) à (4, 9) : 6 / 3 = 2", "Monte de gauche à droite : positive ; descend : négative"] },
            { title: "y = mx + b", bullets: ["m : la pente ; b : là où la droite coupe l'axe des y", "Tableau x = 0, 1, 2 donne y = 5, 8, 11", "Donc y = 3x + 5"] },
            { title: "Fonctions", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Graphique : allez au x, trouvez la courbe, lisez le y"] },
            { title: "Terminez votre plan", bullets: ["Vos 3 sujets les plus faibles d'abord", "Vraies dates, jours de révision générale", "Date de GED Ready, puis date de votre examen"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : (1) Trouvez la pente de (2, 1) à (6, 9). (2) Écrivez l'équation d'une droite de pente -2 qui coupe l'axe des y en 7. (3) Si f(x) = 3x - 4, trouvez f(5). (4) Un tableau a x = 0, 1, 2 et y = 10, 7, 4. Quelle est la pente ? Réponses : (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) y diminue de 3 à chaque fois, donc -3. Ensuite, terminez votre travail final : votre emploi du temps hebdomadaire avec les dates, votre série de 12 exercices avec les erreurs expliquées, et vos dates pour GED Ready et l'examen.",
          youCanNow: "trouver la pente, écrire y = mx + b, lire des graphiques et des tableaux, calculer des valeurs de fonctions et suivre un plan de révision et d'examen daté pour les mathématiques du GED.",
          quickCheck: [
            { objective: "O6", q: "Quelle est la pente de (0, 2) à (3, 11) ?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "Si f(x) = 2x + 1, combien vaut f(6) ?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Algèbre, géométrie et graphiques",
        questions: [
          { objective: "O4", q: "Quelle équation correspond à « Le double d'un nombre plus 9 égale 25 » ?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "Le double d'un nombre, c'est 2x, plus 9, égale 25." },
          { objective: "O4", q: "Résolvez : 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Ajoutez 4 : 7x = 35. Divisez par 7 : x = 5." },
          { objective: "O5", q: "Quel est le volume d'une boîte de 5 sur 4 sur 2 pouces ?", options: ["11 pouces cubes", "20 pouces carrés", "22 pouces", "40 pouces cubes"], answer: 3, why: "Volume = 5 x 4 x 2 = 40 pouces cubes." },
          { objective: "O5", q: "Un cercle a un rayon de 7. Quelle est environ sa circonférence ?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 vaut environ 43.98." },
          { objective: "O6", q: "Dans y = 4x - 2, quelle est la pente ?", options: ["-2", "2", "4", "x"], answer: 2, why: "Dans y = mx + b, m est la pente, donc c'est 4." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation à l'examen GED : Mathématiques",
    questions: [
      { objective: "O1", q: "D'après ged.com, combien de temps dure l'épreuve de mathématiques du GED ?", options: ["30 minutes", "115 minutes", "3 heures", "Pas de limite de temps"], answer: 1, why: "ged.com indique que l'épreuve de mathématiques dure 115 minutes, consignes et relecture comprises." },
      { objective: "O1", q: "Quel outil gratuit vous montre l'écran et les types de questions de l'épreuve de mathématiques du GED ?", options: ["Le test d'exemple de mathématiques du GED sur ged.com", "Une application de quiz au hasard", "Un jeu vidéo", "Il n'en existe pas"], answer: 0, why: "ged.com propose un test d'exemple de mathématiques gratuit." },
      { objective: "O1", q: "Quel modèle de calculatrice pouvez-vous apporter dans un centre d'examen GED ?", options: ["N'importe quel téléphone", "Une calculatrice graphique", "Aucune calculatrice n'est jamais autorisée", "TI-30XS"], answer: 3, why: "ged.com dit que vous pouvez apporter votre propre TI-30XS ; une calculatrice à l'écran est fournie pour la partie 2." },
      { objective: "O1", q: "Votre État utilise HiSET. Qu'est-ce que cela veut dire ?", options: ["Vous ne pouvez pas obtenir de diplôme", "Vous devez déménager dans un autre État", "HiSET est un autre examen d'équivalence du diplôme d'études secondaires utilisé par votre État ; vérifiez ses règles", "Vous passez seulement l'épreuve de mathématiques"], answer: 2, why: "Certains États utilisent HiSET à la place du GED ou en plus du GED." },
      { objective: "O2", q: "Combien font 20 - 4 x 3 + 2 ?", options: ["50", "10", "6", "18"], answer: 1, why: "D'abord la multiplication : 12. Puis 20 - 12 + 2 = 10." },
      { objective: "O2", q: "Combien font 4/5 x 5/8 ?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "Quel nombre est entre 8 et 9 ?", options: ["Racine carrée de 60", "Racine carrée de 100", "Racine carrée de 70", "Racine carrée de 81"], answer: 2, why: "64 < 70 < 81, donc la racine carrée de 70 est entre 8 et 9." },
      { objective: "O3", q: "Combien font 40% de 150 ?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "Une recette utilise 2 tasses de riz pour 6 personnes. Combien de tasses pour 15 personnes ?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, donc 6x = 30 et x = 5." },
      { objective: "O3", q: "Quelle est l'étendue de 5, 12, 3, 9, 20 ?", options: ["9", "17", "49", "20"], answer: 1, why: "Le plus grand moins le plus petit : 20 - 3 = 17." },
      { objective: "O3", q: "Un sac contient 4 billes vertes et 6 jaunes. Quelle est la probabilité de tirer une verte ?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "4 vertes sur 10 en tout = 4/10 = 2/5." },
      { objective: "O4", q: "Résolvez : 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Enlevez 5 : 6x = 42. Divisez par 6 : x = 7." },
      { objective: "O4", q: "Une salle de sport demande $40 d'inscription plus $20 par mois. Vous avez payé $160. Combien de mois ?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, donc 20m = 120 et m = 6." },
      { objective: "O4", q: "Résolvez : 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Enlevez 10 : -2x >= -6. Divisez par -2 et inversez le signe : x <= 3." },
      { objective: "O5", q: "Quelle est l'aire d'un triangle de base 12 et de hauteur 5 ?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "Une cour rectangulaire mesure 30 pieds sur 20 pieds. Quelle longueur de clôture faut-il pour en faire le tour ?", options: ["600 pieds", "50 pieds", "100 pieds carrés", "100 pieds"], answer: 3, why: "Périmètre = 2 x (30 + 20) = 100 pieds." },
      { objective: "O5", q: "Un cylindre a un rayon de 3 et une hauteur de 10. Quel est environ son volume ?", options: ["282.74 unités cubes", "94.25 unités cubes", "30 unités cubes", "188.50 unités cubes"], answer: 0, why: "pi x 9 x 10 vaut environ 282.74." },
      { objective: "O6", q: "Quelle est la pente de (2, 7) à (5, 1) ?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "Une droite a une pente de 5 et coupe l'axe des y en -3. Son équation est :", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b avec m = 5 et b = -3." },
      { objective: "O6", q: "Si f(x) = x^2 + 2, combien vaut f(-3) ?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, et 9 + 2 = 11." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est à Pas encore, corrigez cette partie, puis montrez le plan à un enseignant ou à un partenaire de révision.",
    criteria: [
      { name: "Connaît l'examen", objective: "O1", notYet: "N'a pas passé le test d'exemple gratuit, ou le plan ne contient aucune information sur l'examen tirée de ged.com.", meets: "Résultat du test d'exemple noté ; domaines, durée, règles de la calculatrice et types de questions énumérés d'après ged.com.", exceeds: "Note aussi les règles de l'État (GED ou HiSET), comment s'inscrire et le prix actuel, d'après le site officiel." },
      { name: "Plan de révision daté", objective: "O1", notYet: "Pas de dates, ou pas d'ordre des sujets.", meets: "6 à 8 semaines de jours de révision avec de vraies dates et heures, les 3 sujets les plus faibles d'abord, une date pour GED Ready et une date d'examen visée.", exceeds: "Prévoit des jours de révision générale et un plan de secours pour les séances manquées." },
      { name: "Nombres et données", objective: "O3", notYet: "Moins de 3 sur 4 exercices de nombres et de données justes.", meets: "Au moins 3 sur 4 exercices de nombres et de données (leçons 2 et 3) justes, avec les erreurs expliquées.", exceeds: "Tous justes, avec le raisonnement montré clairement étape par étape." },
      { name: "Algèbre", objective: "O4", notYet: "Équations d'entraînement résolues sans vérification, ou 1 ou les 2 fausses.", meets: "Les deux exercices d'algèbre justes et vérifiés en remplaçant la réponse dans le problème.", exceeds: "Explique avec ses propres mots la règle d'inversion du signe dans les inéquations." },
      { name: "Géométrie et graphiques", objective: "O6", notYet: "Mauvaise formule utilisée, unités absentes ou signe de la pente faux.", meets: "Exercices de géométrie et de graphiques (leçons 5 et 6) presque tous justes, avec les bonnes unités et les bons signes de pente.", exceeds: "Peut montrer où se trouve chaque formule sur la fiche de formules et tracer le graphique d'un problème de pente." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours avec un plan de révision et d'examen daté conforme à la grille",
      "Progrès entre le test de départ et le quiz final",
      "Apprenants qui repassent GED Ready ou le test d'exemple officiel dans les 60 jours et obtiennent un meilleur score (enquête de suivi)",
      "Apprenants qui réussissent l'épreuve de mathématiques du GED (ou les mathématiques du HiSET) dans les 6 mois, et qui obtiennent ensuite le diplôme complet"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Papier, crayon et un calendrier",
      "Une calculatrice TI-30XS si possible, ou une calculatrice scientifique gratuite en ligne",
      "La fiche de formules actuelle du GED et la fiche de référence de la calculatrice TI-30XS, sur ged.com",
      "Un téléphone ou un ordinateur avec internet pour le test d'exemple gratuit de mathématiques du GED",
      "Environ 2 à 3 heures pour le cours, puis l'emploi du temps de révision hebdomadaire de chaque apprenant"
    ],
    facilitatorNotes: [
      "Faites passer le test de départ comme un échauffement non noté ; beaucoup d'apprenants ont peur des mathématiques.",
      "Faites chaque exemple au tableau, puis demandez aux apprenants de faire le suivant à deux avant de travailler seuls.",
      "Imprimez la fiche de formules actuelle et la fiche de référence de la calculatrice depuis ged.com pour que les apprenants s'entraînent avec ce qu'ils verront.",
      "Aidez les apprenants à vérifier les règles de leur État (GED ou HiSET, âge, pièce d'identité, prix, en ligne ou en centre d'examen) sur les sites officiels ; ne citez pas de mémoire les prix ni les notes de réussite.",
      "Dans les programmes en milieu carcéral ou de réinsertion, demandez au service éducatif comment l'examen est organisé sur place.",
      "Associez ce cours à « Les maths du quotidien pour le travail et la vie » pour les apprenants qui ont besoin de plus d'entraînement avec les fractions et les pourcentages."
    ]
  }
};
