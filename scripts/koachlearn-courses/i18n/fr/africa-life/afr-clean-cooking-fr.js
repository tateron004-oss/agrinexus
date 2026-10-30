"use strict";

// Koach Learn course (French translation of africa-life/afr-clean-cooking.js). See scripts/koachlearn-courses/README.md, "Translations".
// No prices given as facts, exactly as in the English: every money figure is marked as an example. No medical treatment advice; burn first aid follows the WHO fact sheet.

const WHO_HAP = { name: "OMS (Organisation mondiale de la Santé), aide-mémoire : Pollution de l'air à l'intérieur des habitations (combustibles polluants, effets sur la santé, combustibles propres, pétrole lampant)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "OMS, aide-mémoire : Brûlures (premiers secours et prévention à la maison)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "OMS : Clean Household Energy Solutions Toolkit (combustibles propres, de transition et polluants)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance (alliance internationale pour la cuisson propre)", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking-fr",
  lang: "fr",
  translationOf: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Cuisson propre : des foyers plus sûrs et des cuisines sans fumée",
  skills: "Expliquer comment la fumée de cuisine nuit à la santé, Réduire la fumée dans la cuisine dès aujourd'hui, Utiliser le feu, le charbon de bois, le gaz et le pétrole lampant en sécurité, Comparer des foyers et des combustibles plus propres, Calculer le coût du changement, Écrire un plan de sécurité et de changement pour la cuisine",
  outcome: "rendre votre cuisine plus sûre et moins enfumée : expliquer comment la fumée nuit à votre famille, réduire la fumée dès aujourd'hui avec ce que vous avez, utiliser le feu, le charbon de bois, le gaz et le pétrole lampant en sécurité, comparer des foyers et des combustibles plus propres selon le coût et la sécurité, et écrire un plan accepté par votre foyer.",
  about: [
    "Ce cours s'adresse à toute personne qui cuisine au bois, au charbon de bois ou au pétrole lampant, à la maison ou dans un petit commerce de nourriture, en ville comme au village, partout en Afrique : mères, pères, grands-mères, grands enfants qui aident à cuisiner et vendeuses de nourriture.",
    "Le chapitre 1 porte sur la fumée et la sécurité : comment la fumée de cuisine nuit à la santé, comment la réduire dès aujourd'hui avec ce que vous avez déjà, et comment rester en sécurité avec le feu, le charbon de bois, le gaz et le pétrole lampant. Le chapitre 2 porte sur le passage à une cuisson plus propre : comparer les foyers et les combustibles, calculer le coût et écrire un plan pour la cuisine avec votre foyer.",
    "Ce cours suit les conseils de l'Organisation mondiale de la Santé (OMS). Il ne recommande aucune marque ni aucun vendeur. Les prix des foyers et des combustibles changent et varient selon l'endroit ; tous les chiffres du cours sont des exemples, alors utilisez vos propres prix. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan d'une page de sécurité et de changement pour la cuisine de votre foyer ou de votre commerce de nourriture (ou pour un exemple, comme une famille de Kisumu qui cuisine sur un jiko à charbon, une vendeuse de nourriture de Lagos qui utilise du bois, ou une famille de Ouagadougou qui cuisine sur trois pierres) : avec quoi vous cuisinez aujourd'hui et ce que cela coûte chaque mois ; trois mesures pour réduire la fumée cette semaine ; vos règles de sécurité pour le feu, le charbon de bois, le gaz ou le pétrole lampant et les enfants ; deux options plus propres comparées selon le coût, l'approvisionnement en combustible et la sécurité ; votre choix, comment vous allez le payer et la date à laquelle vous allez changer ; et qui, dans le foyer, a donné son accord.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des personnes qui cuisinent pour un foyer ou un petit commerce de nourriture au Kenya, au Nigeria, au Ghana, au Burkina Faso, au Sénégal, au Cameroun, en Égypte et dans toute l'Afrique, surtout au bois, au charbon de bois ou au pétrole lampant. Beaucoup sont des femmes et des filles qui ramassent aussi le combustible, et beaucoup ont un téléphone simple et un budget serré.",
    startingPoint: "La plupart cuisinent sur un feu ouvert, trois pierres, un foyer à charbon ou un réchaud à pétrole, souvent dans une petite cuisine peu aérée. Beaucoup savent que la fumée pique les yeux, mais ne la relient pas aux maladies de la poitrine chez les enfants. Peu ont comparé ce qu'ils dépensent en combustible chaque mois avec le coût d'un foyer plus propre, et certains ont peur du gaz.",
    gap: "L'OMS compte environ 2,1 milliards de personnes dans le monde qui cuisinent avec des combustibles et des foyers polluants, et des millions de décès chaque année dus à la pollution de l'air dans les habitations ; les femmes et les jeunes enfants sont les plus exposés. Le feu ouvert, le charbon de bois et le pétrole lampant causent aussi des brûlures, des intoxications au monoxyde de carbone et des empoisonnements d'enfants. Les personnes qui réduisent la fumée, cuisinent en sécurité et préparent un changement protègent la santé de leur famille et gagnent souvent du temps et de l'argent.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme est expliqué",
      "Budget : serré ; le cours ne donne jamais de prix réels, seulement des exemples, et chacun utilise les prix de sa région",
      "L'approvisionnement en combustible varie selon l'endroit : le gaz, l'électricité et les foyers améliorés ne sont pas disponibles partout, donc chacun choisit ce qui lui convient",
      "Sécurité : aucun travail sur les tuyaux de gaz, les câbles électriques ou le réseau ; on achète chez des vendeurs agréés et on suit les instructions du fabricant",
      "Aucun conseil de traitement médical : les brûlures et les problèmes respiratoires relèvent du centre de santé"
    ],
    prerequisites: "Aucun. Savoir un peu additionner et multiplier aide pour la leçon 5 ; la calculatrice du téléphone suffit."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Pour une cuisine qui utilise du bois, du charbon de bois ou du pétrole lampant", action: "expliquer comment la fumée de cuisine nuit à la santé et qui elle touche le plus", standard: "en citant au moins trois effets sur la santé et les personnes les plus exposées" },
    { id: "O2", condition: "Avec le foyer et le combustible que vous avez aujourd'hui", action: "énumérer des mesures qui réduisent la fumée dans votre cuisine cette semaine", standard: "avec au moins trois mesures qui coûtent peu ou rien" },
    { id: "O3", condition: "Quand vous cuisinez au feu, au charbon de bois, au gaz ou au pétrole lampant", action: "appliquer des règles de sécurité qui évitent les brûlures, l'intoxication au monoxyde de carbone, les incendies de gaz et l'empoisonnement au pétrole lampant", standard: "en choisissant le geste sûr dans au moins 4 situations sur 5" },
    { id: "O4", condition: "À partir de deux options de foyer et de combustible ou plus disponibles là où vous vivez", action: "comparer des foyers et des combustibles plus propres selon la fumée, le coût, l'approvisionnement et la sécurité", standard: "avec une raison juste pour l'option que vous choisissez" },
    { id: "O5", condition: "À partir de vos propres dépenses en combustible et des prix de votre région", action: "calculer votre coût mensuel en combustible et le comparer au coût d'une option plus propre", standard: "avec des calculs justes et les risques de paiement nommés" },
    { id: "O6", condition: "Avec votre foyer ou votre commerce", action: "écrire un plan de sécurité et de changement pour la cuisine accepté par le foyer", standard: "avec toutes les parties remplies et une date de changement" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : La fumée et la sécurité dans la cuisine",
      lessons: [
        {
          title: "Comment la fumée de cuisine nuit à votre famille",
          objectives: ["O1"],
          minutes: 5,
          goal: "Expliquer comment la fumée de cuisine nuit à la santé et qui elle touche le plus.",
          text: [
            "La fumée du bois, du charbon de bois, des résidus de récolte, de la bouse et du pétrole lampant est pleine de particules minuscules et de gaz. Vous ne voyez pas la plupart d'entre eux, mais ils entrent profondément dans les poumons. C'est ce qu'on appelle la pollution de l'air à l'intérieur des habitations.",
            "Selon l'OMS, cette pollution cause la pneumonie et d'autres infections de la poitrine chez les enfants, et chez les adultes des accidents vasculaires cérébraux (AVC), des maladies du cœur, des maladies pulmonaires de longue durée et le cancer du poumon. Elle est aussi liée au faible poids de naissance et aux maladies des yeux. L'OMS compte environ 2,1 milliards de personnes dans le monde qui cuisinent avec des combustibles et des foyers polluants, la plupart en Afrique et en Asie.",
            "Les femmes et les jeunes enfants respirent le plus de fumée, car ils passent le plus de temps près du feu, et les bébés sont souvent portés au dos pendant que la mère cuisine. Les filles et les femmes perdent aussi des heures à ramasser du bois, du temps qui pourrait aller à l'école, au travail ou au repos.",
            "La fumée que vous ne voyez pas fait aussi du mal. Une odeur de fumée, des yeux qui piquent, la toux pendant la cuisson, et des murs ou un toit noircis sont des signes que votre famille en respire trop."
          ],
          words: [["Pollution de l'air à l'intérieur des habitations", "fumée et gaz dans et autour de la maison, surtout quand on cuisine, se chauffe ou s'éclaire avec des combustibles polluants."], ["Combustibles polluants", "combustibles qui font beaucoup de fumée quand on les brûle dans des foyers simples : bois, charbon de bois, résidus de récolte, bouse, charbon minéral et pétrole lampant."], ["Pneumonie", "une infection grave de la poitrine ; c'est l'une des premières causes de décès des jeunes enfants."]],
          slides: [
            { title: "Ce qu'il y a dans la fumée", bullets: ["Des particules minuscules et des gaz", "Ils entrent profondément dans les poumons", "Vous ne voyez pas la plupart d'entre eux"] },
            { title: "Les dégâts sur la santé (OMS)", bullets: ["Enfants : pneumonie et infections de la poitrine", "Adultes : AVC, maladies du cœur et des poumons, cancer du poumon", "Lié au faible poids de naissance et aux maladies des yeux"] },
            { title: "Qui respire le plus de fumée", bullets: ["Les femmes qui cuisinent", "Les bébés au dos et les jeunes enfants", "Les filles qui ramassent le bois perdent du temps d'école"] },
            { title: "Signes de trop de fumée", bullets: ["Yeux qui piquent, toux pendant la cuisson", "Murs ou toit noircis", "Odeur de fumée dans les vêtements"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Observez votre cuisine pendant un repas. Notez combien de temps le feu brûle, qui est près de lui, si un bébé ou un jeune enfant est là, et les signes de fumée que vous voyez. Écrivez trois façons dont la fumée pourrait nuire à votre famille.",
          youCanNow: "expliquer comment la fumée de cuisine nuit à la santé et qui, chez vous, en respire le plus.",
          quickCheck: [
            { objective: "O1", q: "Quelle maladie des jeunes enfants l'OMS relie-t-elle à la fumée de cuisine ?", options: ["La pneumonie et les infections de la poitrine", "Les fractures", "Le mal de dents", "La varicelle"], answer: 0, why: "La pollution de l'air dans les habitations cause des infections respiratoires comme la pneumonie." },
            { objective: "O1", q: "Qui respire en général le plus de fumée de cuisine ?", options: ["Les visiteurs", "Les hommes qui travaillent aux champs", "Les femmes qui cuisinent et les jeunes enfants près d'elles", "Personne ; la fumée monte"], answer: 2, why: "Les femmes et les jeunes enfants passent le plus de temps près du feu." }
          ]
        },
        {
          title: "Réduire la fumée dès aujourd'hui avec ce que vous avez",
          objectives: ["O2"],
          minutes: 5,
          goal: "Énumérer des mesures qui réduisent la fumée dans votre cuisine cette semaine, avec le foyer que vous avez aujourd'hui.",
          text: [
            "Un nouveau foyer aide le plus, mais vous pouvez réduire la fumée dès aujourd'hui. Faites entrer l'air et sortir la fumée : cuisinez dehors ou sous un abri quand c'est possible, gardez les portes et les fenêtres ouvertes pendant la cuisson et, si vous le pouvez, faites une fenêtre, une ouverture sous le toit ou une cheminée près du feu.",
            "Brûlez moins et plus proprement. Utilisez du bois sec : le bois mouillé fait beaucoup plus de fumée. Fendez le bois en morceaux fins et poussez-le doucement dans le feu. Mettez un couvercle sur la marmite, faites tremper les haricots et le maïs avant la cuisson, et éteignez le feu dès que le repas est prêt.",
            "Éloignez les enfants. Gardez les bébés et les jeunes enfants hors de la cuisine pendant que le feu brûle, et ne cuisinez pas avec un bébé au dos si quelqu'un d'autre peut le tenir.",
            "Ne brûlez jamais de plastique, de caoutchouc ou de bois peint : leur fumée est toxique."
          ],
          steps: ["Faites entrer l'air : cuisinez dehors ou ouvrez portes et fenêtres.", "Utilisez du bois sec et fendu, poussé doucement.", "Couvrez les marmites ; faites d'abord tremper haricots et maïs.", "Éteignez le feu quand le repas est prêt.", "Gardez les bébés et les jeunes enfants loin de la fumée."],
          words: [["Aération", "faire entrer de l'air frais et sortir l'air enfumé."], ["Ouverture sous le toit", "un espace entre le haut du mur et le toit qui laisse sortir la fumée."]],
          slides: [
            { title: "L'air entre, la fumée sort", bullets: ["Cuisinez dehors ou sous un abri", "Ouvrez portes et fenêtres", "Faites une fenêtre ou une ouverture sous le toit près du feu"] },
            { title: "Brûler moins, brûler plus propre", bullets: ["Bois sec et fin", "Couvercle sur la marmite ; haricots et maïs trempés", "Éteignez le feu quand le repas est prêt"] },
            { title: "Protéger les enfants", bullets: ["Gardez-les hors de la cuisine enfumée", "Quelqu'un d'autre tient le bébé", "Ne brûlez jamais de plastique ni de caoutchouc"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Choisissez dans cette leçon trois mesures que vous pouvez commencer cette semaine sans argent ou avec très peu. Écrivez-les, essayez-les pendant trois jours, et notez ce qui a changé (moins de fumée, moins de bois, moins de temps).",
          youCanNow: "réduire la fumée dans votre cuisine avec des mesures qui coûtent peu ou rien.",
          quickCheck: [
            { objective: "O2", q: "Quel bois fait le moins de fumée ?", options: ["Du bois mouillé et vert", "De grosses bûches mises toutes en même temps", "Du bois peint d'une vieille porte", "Des morceaux secs et fins poussés doucement"], answer: 3, why: "Le bois sec et fin brûle mieux et fait moins de fumée." },
            { objective: "O2", q: "Quelle mesure réduit à la fois la fumée et le combustible ?", options: ["Cuisiner avec un couvercle sur la marmite", "Laisser le feu brûler après la cuisson", "Fermer les fenêtres", "Brûler du plastique pour allumer le feu"], answer: 0, why: "Avec un couvercle, la nourriture cuit plus vite : vous brûlez moins de combustible et faites moins de fumée." }
          ]
        },
        {
          title: "Rester en sécurité avec le feu, le charbon de bois, le gaz et le pétrole lampant",
          objectives: ["O3"],
          minutes: 6,
          goal: "Appliquer des règles de sécurité qui évitent les brûlures, l'intoxication au monoxyde de carbone, les incendies de gaz et l'empoisonnement au pétrole lampant.",
          text: [
            "Brûlures : gardez le foyer stable et, si possible, surélevé, avec une protection autour d'un feu ouvert. Tournez les manches des marmites vers l'intérieur. Gardez les enfants loin de l'endroit où l'on cuisine. Si quelqu'un se brûle, les premiers secours selon l'OMS sont : arrêter la brûlure, refroidir la brûlure sous de l'eau fraîche qui coule (environ 20 minutes pour les petites brûlures), enlever les bagues et les vêtements serrés, et couvrir avec un linge propre. N'y mettez ni beurre, ni huile, ni dentifrice, ni pâte traditionnelle. Allez au centre de santé pour les brûlures grandes ou profondes, ou les brûlures au visage, aux mains, aux pieds ou aux parties intimes.",
            "Charbon de bois : un foyer à charbon allumé dégage du monoxyde de carbone, un gaz qu'on ne voit pas et qu'on ne sent pas, et qui peut tuer. Ne rentrez jamais un foyer à charbon allumé dans une pièce fermée pour cuisiner ou pour chauffer, et ne dormez jamais avec un foyer allumé à l'intérieur. Mal de tête, vertiges et envie de dormir près du foyer sont des signes d'alerte : faites sortir tout le monde à l'air frais.",
            "Gaz (GPL) : achetez les bouteilles chez un vendeur agréé, gardez la bouteille debout, et vérifiez le tuyau et le détendeur. Si vous sentez le gaz : n'allumez pas d'allumette et ne touchez à aucun interrupteur, fermez le robinet de la bouteille, ouvrez portes et fenêtres, et faites sortir les gens. Fermez le robinet après la cuisson.",
            "Pétrole lampant : l'OMS déconseille le pétrole lampant pour cuisiner et s'éclairer, et l'ingestion de pétrole lampant est l'une des premières causes d'empoisonnement des enfants. Gardez-le dans un récipient fermé et étiqueté, jamais dans une bouteille de boisson, et hors de portée des enfants. Si un enfant en avale, allez au centre de santé tout de suite."
          ],
          steps: ["Foyer stable, enfants éloignés ; manches tournés vers l'intérieur.", "Jamais de charbon dans une pièce fermée ni pendant le sommeil.", "Gaz : vendeur agréé, bouteille debout, robinet fermé après la cuisson.", "Odeur de gaz : ni flamme ni interrupteur, robinet fermé, ouvrez, sortez.", "Pétrole lampant : récipient étiqueté, jamais une bouteille de boisson, hors de portée."],
          words: [["Monoxyde de carbone", "un gaz toxique produit par le combustible qui brûle ; on ne peut ni le voir ni le sentir."], ["GPL", "gaz de pétrole liquéfié : le gaz de cuisine vendu en bouteilles."], ["Détendeur", "la pièce sur le haut de la bouteille de gaz qui règle le gaz envoyé vers le réchaud."]],
          slides: [
            { title: "Brûlures", bullets: ["Foyer stable, manches vers l'intérieur, enfants éloignés", "Premiers secours : eau fraîche qui coule environ 20 minutes, linge propre", "Ni beurre, ni huile, ni pâte ; grandes brûlures au centre de santé"] },
            { title: "Charbon de bois", bullets: ["Dégage du monoxyde de carbone : sans couleur, sans odeur", "Jamais dans une pièce fermée ; jamais pendant le sommeil", "Mal de tête ou vertiges près du foyer : sortez à l'air frais"] },
            { title: "Gaz (GPL)", bullets: ["Vendeur agréé ; bouteille debout", "Odeur de gaz : ni flamme ni interrupteur, robinet fermé, ouvrez, sortez", "Robinet fermé après la cuisson"] },
            { title: "Pétrole lampant", bullets: ["L'OMS le déconseille", "Récipient étiqueté, jamais une bouteille de boisson", "Un enfant en avale : centre de santé tout de suite"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Faites le tour de votre cuisine et écrivez cinq règles de sécurité pour votre maison : une pour les brûlures et les enfants, une pour le charbon de bois, une pour le gaz ou le pétrole lampant (selon ce que vous utilisez), une pour ranger le combustible, et une pour ce qu'il faut faire en cas d'urgence, avec le centre de santé le plus proche.",
          youCanNow: "cuisiner en sécurité avec le feu, le charbon de bois, le gaz et le pétrole lampant, et agir vite en cas de problème.",
          quickCheck: [
            { objective: "O3", q: "Il fait froid la nuit à Ouagadougou. Est-il sans danger de rentrer le foyer à charbon allumé dans la chambre fermée ?", options: ["Oui, si la porte est fermée", "Oui, si le charbon est de bonne qualité", "Oui, si vous dormez loin du foyer", "Non : il dégage du monoxyde de carbone, qui peut tuer"], answer: 3, why: "Le monoxyde de carbone s'accumule dans une pièce fermée et peut tuer les personnes qui dorment." },
            { objective: "O3", q: "Vous sentez le gaz dans la cuisine. Que faites-vous d'abord ?", options: ["Allumer une allumette pour trouver la fuite", "Fermer le robinet et ouvrir les portes et les fenêtres", "Allumer la lumière", "Ne rien faire"], answer: 1, why: "Ni flamme ni interrupteur ; coupez le gaz et laissez-le sortir." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : La fumée et la sécurité dans la cuisine",
        questions: [
          { objective: "O1", q: "Quelle maladie de l'adulte l'OMS relie-t-elle à la pollution de l'air dans les habitations ?", options: ["Les AVC et les maladies du cœur", "Le paludisme", "La typhoïde", "Les fractures"], answer: 0, why: "L'OMS cite les AVC, les maladies du cœur, les maladies pulmonaires et le cancer du poumon." },
          { objective: "O1", q: "En plus de la fumée, pourquoi la cuisson au bois désavantage-t-elle les filles ?", options: ["Elles gagnent plus d'argent", "Elles perdent du temps à ramasser le bois, ce qui peut leur coûter l'école", "Elles dorment plus", "Cela ne les touche pas"], answer: 1, why: "Ramasser le combustible prend du temps sur l'école et le travail." },
          { objective: "O2", q: "Quelle mesure réduit la fumée dans la cuisine dès aujourd'hui ?", options: ["Fermer toutes les fenêtres", "Utiliser du bois mouillé", "Cuisiner dehors ou ouvrir portes et fenêtres", "Brûler du vieux plastique"], answer: 2, why: "L'aération laisse sortir la fumée." },
          { objective: "O3", q: "À Yaoundé, un enfant se brûle avec de la soupe chaude. Quels sont les bons premiers secours ?", options: ["Mettre du beurre", "Couvrir de dentifrice", "Percer les cloques", "Refroidir sous de l'eau fraîche qui coule et couvrir avec un linge propre"], answer: 3, why: "Selon l'OMS : eau fraîche qui coule et linge propre ; ni beurre ni pâte." },
          { objective: "O3", q: "Où faut-il garder le pétrole lampant ?", options: ["Dans un récipient fermé et étiqueté, hors de portée des enfants", "Dans une vieille bouteille de soda", "Par terre près du lit", "Dans une tasse sur la table"], answer: 0, why: "Les enfants boivent le pétrole lampant dans des bouteilles et des tasses ; c'est l'une des premières causes d'empoisonnement des enfants." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Passer à une cuisson plus propre",
      lessons: [
        {
          title: "Des foyers et des combustibles plus propres",
          objectives: ["O4"],
          minutes: 6,
          goal: "Comparer des foyers et des combustibles plus propres selon la fumée, le coût, l'approvisionnement et la sécurité.",
          text: [
            "L'OMS cite les options les plus propres : le solaire, l'électricité, le biogaz, le GPL (gaz de cuisine), le gaz naturel, les combustibles à base d'alcool comme l'éthanol, et les foyers à biomasse qui atteignent les objectifs d'émissions de l'OMS. L'OMS déconseille le pétrole lampant et le charbon minéral non transformé.",
            "Les foyers améliorés à bois ou à charbon (aussi appelés foyers économes) brûlent moins de combustible et font moins de fumée que trois pierres ou un feu ouvert. C'est un progrès, mais la plupart font encore beaucoup de fumée, alors gardez la cuisine bien aérée. Demandez au vendeur si le modèle a été testé.",
            "La cuisson au gaz (GPL) et à l'électricité ne fait presque pas de fumée dans la cuisine. Un autocuiseur électrique ou une plaque électrique peut coûter peu à l'usage là où le courant est fiable, et convient bien aux haricots et aux sauces. Le biogaz convient à une ferme avec du bétail et de la place pour un digesteur. Un cuiseur à chaleur retenue (un panier ou une caisse bien isolés) finit la cuisson sans combustible en plus et marche avec n'importe quel foyer.",
            "Choisissez ce qui convient à votre endroit : le combustible est-il vendu près de chez vous toute l'année ? Pouvez-vous payer les recharges ? Est-il sûr pour votre maison ? Dans beaucoup de villes, le gaz ou l'électricité peut convenir ; dans les villages loin des points de vente, un foyer amélioré avec une bonne aération peut être la première étape."
          ],
          steps: ["Listez les foyers et les combustibles vendus près de chez vous.", "Pour chacun, notez la fumée (beaucoup, un peu, presque pas).", "Notez l'approvisionnement : toujours, parfois, rarement.", "Notez les besoins de sécurité, le coût de départ et le coût d'usage.", "Choisissez l'option la plus propre que vous pouvez vous procurer et payer."],
          words: [["Foyer amélioré", "un foyer à bois ou à charbon conçu pour brûler moins de combustible et faire moins de fumée qu'un feu ouvert."], ["Biogaz", "gaz produit à partir de bouse et de déchets végétaux dans une cuve fermée appelée digesteur."], ["Cuiseur à chaleur retenue", "un panier ou une caisse isolés qui gardent une marmite chaude en cuisson sans plus de combustible."]],
          slides: [
            { title: "Les options les plus propres (OMS)", bullets: ["Solaire, électricité, biogaz, GPL, gaz naturel, éthanol", "Foyers à biomasse qui atteignent les objectifs de l'OMS", "L'OMS déconseille le pétrole lampant et le charbon minéral"] },
            { title: "Foyers améliorés à bois et à charbon", bullets: ["Moins de combustible et de fumée qu'un feu ouvert", "Encore de la fumée : continuez à aérer", "Demandez si le modèle a été testé"] },
            { title: "Gaz et électricité", bullets: ["Presque pas de fumée dans la cuisine", "Autocuiseur électrique : bien pour les haricots et les sauces", "Le cuiseur à chaleur retenue économise avec tout foyer"] },
            { title: "Choisir ce qui convient", bullets: ["Combustible vendu près de chez vous toute l'année ?", "Pouvez-vous payer les recharges ?", "Sûr pour votre maison ?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Demandez au marché, à la boutique ou au vendeur de gaz près de chez vous quels foyers et combustibles sont vendus. Faites un petit tableau de deux ou trois options avec quatre colonnes : fumée, approvisionnement, besoins de sécurité et coût (utilisez les vrais prix qu'on vous donne).",
          youCanNow: "comparer des foyers et des combustibles plus propres selon la fumée, le coût, l'approvisionnement et la sécurité, et en choisir un qui vous convient.",
          quickCheck: [
            { objective: "O4", q: "Lequel de ces combustibles l'OMS cite-t-elle comme propre ?", options: ["Le pétrole lampant", "Le charbon minéral non transformé", "Le GPL (gaz de cuisine)", "Les déchets plastiques"], answer: 2, why: "L'OMS cite le GPL, l'électricité, le biogaz, le solaire et l'éthanol parmi les combustibles propres." },
            { objective: "O4", q: "Une famille d'un village loin de tout vendeur de gaz veut moins de fumée dès maintenant. Quelle est une première étape raisonnable ?", options: ["Un foyer amélioré avec une bonne aération", "Acheter une bouteille de gaz qu'elle ne pourra pas recharger", "Passer au pétrole lampant", "Cuisiner à l'intérieur fenêtres fermées"], answer: 0, why: "Un foyer amélioré avec de l'aération réduit la fumée là où les combustibles plus propres ne sont pas encore vendus." }
          ]
        },
        {
          title: "Calculer le coût et payer le changement",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer votre coût mensuel en combustible et le comparer au coût d'une option plus propre.",
          text: [
            "Beaucoup de familles pensent que la cuisson propre coûte trop cher, mais elles n'ont jamais additionné ce qu'elles dépensent déjà. Écrivez ce que vous dépensez en bois, en charbon de bois ou en pétrole lampant pendant une semaine normale, et multipliez par 4 pour avoir à peu près le coût du mois. Si vous ramassez le bois, comptez aussi les heures passées.",
            "Pour l'option plus propre, comptez deux coûts : le coût de départ (le foyer, la bouteille et le détendeur) et le coût d'usage (les recharges ou l'électricité chaque mois). Comparez ensuite le coût d'usage avec ce que vous dépensez aujourd'hui, et calculez en combien de mois l'économie rembourse le coût de départ.",
            "Exemple avec des chiffres inventés, pas de vrais prix : une famille de Kisumu dépense 300 KES par semaine en charbon, environ 1 200 KES par mois. Une option plus propre coûte 900 KES par mois à l'usage et 3 600 KES au départ. La famille économise 300 KES par mois, donc le coût de départ est remboursé en 12 mois (3 600 divisé par 300). Utilisez vos propres prix.",
            "Moyens de payer : épargner un peu chaque semaine, acheter ensemble avec un groupe d'épargne comme une tontine, un chama ou un esusu, ou demander s'il existe près de chez vous des formules de gaz ou de foyer en paiement à l'usage. Avant de signer, demandez le prix total, ce qui se passe si vous manquez un paiement, et qui fait les réparations. Ne payez pas un inconnu qui promet un foyer gratuit contre des frais, et n'achetez le gaz que chez des vendeurs agréés."
          ],
          steps: ["Écrivez votre dépense en combustible de la semaine et multipliez par 4.", "Écrivez le coût de départ et le coût mensuel d'une option plus propre.", "Soustrayez pour trouver l'économie mensuelle (ou le surcoût).", "Divisez le coût de départ par l'économie mensuelle pour trouver les mois de remboursement.", "Choisissez comment payer et vérifiez les conditions."],
          words: [["Coût de départ", "l'argent que vous payez une seule fois au début, par exemple pour le foyer."], ["Coût d'usage", "l'argent que vous payez encore et encore, par exemple pour les recharges de combustible."], ["Remboursement", "le temps qu'il faut pour que les économies couvrent ce que vous avez payé au début."], ["Paiement à l'usage", "payer par petites sommes, souvent par mobile money (argent sur le téléphone), au fur et à mesure que vous utilisez le combustible ou le foyer."]],
          slides: [
            { title: "Que dépensez-vous aujourd'hui ?", bullets: ["Dépense de la semaine x 4 = coût du mois", "Comptez aussi les heures à ramasser le bois"] },
            { title: "Les deux coûts du changement", bullets: ["Départ : foyer, bouteille, détendeur", "Usage : recharges ou électricité chaque mois"] },
            { title: "Exemple (chiffres inventés)", bullets: ["Charbon 1 200 KES par mois ; option plus propre 900 KES", "Économie de 300 KES par mois", "Départ 3 600 KES / 300 = 12 mois pour rembourser"] },
            { title: "Payer en sécurité", bullets: ["Épargnez chaque semaine ou achetez avec votre groupe d'épargne", "Demandez le prix total et les règles en cas de retard", "Pas de frais pour un \"foyer gratuit\" ; gaz chez des vendeurs agréés seulement"] }
          ],
          tryIt: "Écrivez ce que votre foyer dépense en combustible de cuisine pendant une semaine normale (dans votre monnaie, par exemple NGN, GHS, XOF, XAF ou EGP) et calculez le mois. Ensuite, avec les vrais prix trouvés à la leçon 4, calculez l'économie mensuelle et les mois de remboursement pour une option plus propre.",
          youCanNow: "calculer ce que le combustible de cuisine vous coûte chaque mois et voir si une option plus propre se rembourse.",
          quickCheck: [
            { objective: "O5", q: "Simple exemple : une famille dépense 50 GHS par semaine en charbon. Combien cela fait-il à peu près par mois ?", options: ["50 GHS", "100 GHS", "500 GHS", "200 GHS"], answer: 3, why: "50 par semaine fois 4 semaines, cela fait environ 200 par mois." },
            { objective: "O5", q: "Un homme vous appelle et vous offre un \"foyer gratuit du gouvernement\" si vous envoyez d'abord des frais par mobile money. Qu'est-ce que c'est ?", options: ["Une bonne affaire", "Un signe d'arnaque ; ne payez pas", "Un impôt normal", "Une caution obligatoire"], answer: 1, why: "Demander des frais pour recevoir quelque chose de gratuit est un signe courant d'arnaque." }
          ]
        },
        {
          title: "Votre plan de sécurité et de changement pour la cuisine",
          objectives: ["O6"],
          minutes: 5,
          goal: "Écrire un plan de sécurité et de changement pour la cuisine accepté par votre foyer.",
          text: [
            "Un plan transforme ce que vous avez appris en actions. Il a six parties : avec quoi vous cuisinez aujourd'hui et son coût mensuel ; trois mesures pour réduire la fumée cette semaine ; vos règles de sécurité ; deux options plus propres comparées ; votre choix, comment vous allez payer et la date du changement ; et qui a donné son accord.",
            "Parlez-en avec tout le foyer. La personne qui paie et la personne qui cuisine peuvent voir les choses différemment. Partagez ce que la fumée fait à la poitrine des enfants, l'argent que vous avez compté et le temps gagné sur le ramassage du bois. Demandez à chacun ce qui l'inquiète, comme la peur du gaz ou le goût de la nourriture, et répondez-y.",
            "Si vous avez un commerce de nourriture, comme un chop bar à Kumasi, un mama put à Lagos ou une dibiterie à Dakar, pensez aussi à vos clients et à votre personnel : moins de fumée veut dire un lieu plus propre et des employés en meilleure santé, et le combustible est souvent l'une de vos plus grosses dépenses.",
            "Affichez le plan au mur. Au bout d'un mois, vérifiez : y a-t-il moins de fumée, et combien a coûté le combustible ? Changez le plan si besoin."
          ],
          steps: ["Écrivez les six parties du plan.", "Discutez-en avec le foyer ou le personnel.", "Répondez à leurs inquiétudes.", "Mettez-vous d'accord sur le choix, le paiement et la date du changement.", "Vérifiez au bout d'un mois et ajustez."],
          words: [["Plan de changement", "un plan écrit pour passer à une façon de cuisiner plus propre et plus sûre."]],
          slides: [
            { title: "Les six parties du plan", bullets: ["Aujourd'hui : combustible et coût du mois", "Trois mesures contre la fumée ; règles de sécurité", "Deux options comparées ; choix, paiement, date ; qui est d'accord"] },
            { title: "Se mettre d'accord ensemble", bullets: ["Celui qui cuisine et celui qui paie peuvent être différents", "Partagez les faits sur la santé, l'argent et le temps", "Répondez aux inquiétudes, comme la peur du gaz"] },
            { title: "Pour les commerces de nourriture", bullets: ["Lieu plus propre, personnel en meilleure santé", "Le combustible coûte souvent cher"] },
            { title: "Vérifier au bout d'un mois", bullets: ["Moins de fumée ?", "Combien a coûté le combustible ?", "Changez le plan si besoin"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'une page de sécurité et de changement pour la cuisine avec les six parties. Discutez-en avec votre foyer ou votre personnel et écrivez les noms des personnes qui ont donné leur accord.",
          youCanNow: "écrire un plan de sécurité et de changement pour la cuisine et le faire accepter par votre foyer.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qui a sa place dans un plan de changement pour la cuisine ?", options: ["Une date de changement et la façon de payer", "Seulement la couleur du foyer", "Rien sur la sécurité", "La promesse de cuisiner au charbon à l'intérieur"], answer: 0, why: "Le plan a besoin d'un choix, d'un plan de paiement et d'une date pour que le changement se fasse." },
            { objective: "O6", q: "La personne qui cuisine veut le gaz, mais celle qui paie s'inquiète du coût. Qu'est-ce qui aide le plus ?", options: ["Ignorer l'inquiétude", "Acheter sans le lui dire", "Montrer le coût mensuel du combustible que vous avez calculé et les faits sur la santé", "Abandonner"], answer: 2, why: "De vrais chiffres et des faits sur la santé aident le foyer à se mettre d'accord." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Passer à une cuisson plus propre",
        questions: [
          { objective: "O4", q: "Lequel ne fait presque pas de fumée dans la cuisine ?", options: ["Trois pierres", "Un réchaud à pétrole", "Un feu ouvert", "Un autocuiseur électrique"], answer: 3, why: "La cuisson à l'électricité et au gaz ne fait presque pas de fumée dans la cuisine." },
          { objective: "O4", q: "À quoi sert un cuiseur à chaleur retenue ?", options: ["À faire du gaz avec de la bouse", "À garder une marmite chaude en cuisson sans combustible en plus", "À brûler du plastique proprement", "À charger un téléphone"], answer: 1, why: "L'isolation garde la chaleur, donc la nourriture finit de cuire sans plus de combustible." },
          { objective: "O5", q: "Simple exemple : une option plus propre fait économiser 5 000 XAF par mois et coûte 30 000 XAF au départ. En combien de mois est-elle remboursée ?", options: ["6 mois", "3 mois", "25 mois", "35 mois"], answer: 0, why: "30 000 divisé par 5 000 font 6." },
          { objective: "O5", q: "Avant de signer une formule de foyer en paiement à l'usage, que devez-vous demander ?", options: ["Rien", "Seulement la couleur", "Le prix total et ce qui se passe si vous manquez un paiement", "Le plat préféré du vendeur"], answer: 2, why: "Le coût total et les règles en cas de paiement manqué montrent le vrai risque." },
          { objective: "O6", q: "Après le changement, que doit faire le foyer ?", options: ["Ne plus jamais y penser", "Vérifier au bout d'un mois la fumée et le coût, et ajuster", "Revenir au pétrole lampant", "Jeter le plan"], answer: 1, why: "Vérifier montre si le plan a marché et ce qu'il faut changer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Cuisson propre : des foyers plus sûrs et des cuisines sans fumée",
    questions: [
      { objective: "O1", q: "La pollution de l'air dans les habitations vient surtout :", options: ["Des klaxons des voitures", "De la cuisson avec des combustibles polluants dans des foyers simples", "Des téléphones portables", "De l'eau de boisson"], answer: 1, why: "La fumée du bois, du charbon de bois, de la bouse et du pétrole lampant est la source principale." },
      { objective: "O1", q: "Lequel est un signe que votre famille respire trop de fumée ?", options: ["Des yeux qui piquent et la toux pendant la cuisson", "Des murs blancs et propres", "Aucune odeur dans les vêtements", "De l'air frais dans la cuisine"], answer: 0, why: "Les yeux qui piquent, la toux et les murs noircis sont des signes de forte fumée." },
      { objective: "O1", q: "Pourquoi est-il risqué de cuisiner sur un feu ouvert avec un bébé au dos ?", options: ["Le bébé s'ennuie", "Ce n'est pas risqué", "Le bébé respire beaucoup de fumée", "La nourriture cuit plus lentement"], answer: 2, why: "Les bébés près du feu respirent la fumée et peuvent attraper des infections de la poitrine." },
      { objective: "O2", q: "Laquelle de ces mesures réduit la fumée sans rien coûter ?", options: ["Fermer la porte", "Utiliser du bois mouillé", "Brûler du caoutchouc", "Ouvrir portes et fenêtres pendant la cuisson"], answer: 3, why: "L'aération laisse sortir la fumée sans rien coûter." },
      { objective: "O2", q: "Faire tremper les haricots avant la cuisson aide parce que :", options: ["Ils cuisent plus vite, avec moins de combustible et moins de fumée", "Cela ajoute du sel", "Cela fait plus de fumée", "Cela ne sert à rien"], answer: 0, why: "Une cuisson plus courte veut dire moins de combustible et moins de fumée." },
      { objective: "O2", q: "Que ne faut-il jamais brûler ?", options: ["Du bois sec", "Du charbon de bois dans un endroit ouvert", "Du plastique et du caoutchouc", "Des rafles de maïs"], answer: 2, why: "Le plastique et le caoutchouc brûlés dégagent une fumée toxique." },
      { objective: "O3", q: "Le monoxyde de carbone du charbon de bois est dangereux parce que :", options: ["Il sent très fort", "On ne peut ni le voir ni le sentir, et il peut tuer", "Il a une couleur", "Il ne touche que les plantes"], answer: 1, why: "Il ne prévient pas, donc les gens peuvent être intoxiqués dans une pièce fermée." },
      { objective: "O3", q: "Pour une brûlure, les premiers secours de l'OMS disent de :", options: ["Mettre du beurre", "Mettre de la glace", "Percer les cloques", "Refroidir sous de l'eau fraîche qui coule"], answer: 3, why: "De l'eau fraîche qui coule pendant environ 20 minutes : c'est le conseil de l'OMS pour les petites brûlures." },
      { objective: "O3", q: "Si vous sentez le gaz, vous ne devez PAS :", options: ["Ouvrir les fenêtres", "Fermer le robinet de la bouteille", "Allumer une allumette ou un interrupteur", "Faire sortir les gens"], answer: 2, why: "Une flamme ou une étincelle peut faire exploser le gaz." },
      { objective: "O3", q: "À Kano, un enfant a bu du pétrole lampant dans une bouteille de soda. La famille doit :", options: ["Aller au centre de santé tout de suite", "Attendre et voir", "Donner de l'huile à l'enfant", "Faire vomir l'enfant"], answer: 0, why: "L'empoisonnement au pétrole lampant demande des soins tout de suite ; c'est le centre de santé qui décide du traitement." },
      { objective: "O4", q: "Que déconseille l'OMS pour la cuisson ?", options: ["Le GPL", "L'électricité", "Le pétrole lampant", "Le biogaz"], answer: 2, why: "L'OMS déconseille le pétrole lampant et le charbon minéral non transformé." },
      { objective: "O4", q: "Un foyer amélioré à charbon :", options: ["Ne fait aucune fumée", "Utilise moins de combustible et fait moins de fumée, mais a encore besoin d'aération", "Est la même chose qu'un feu ouvert", "Peut être utilisé dans une chambre fermée"], answer: 1, why: "Les foyers améliorés aident, mais la plupart font encore de la fumée et du monoxyde de carbone." },
      { objective: "O4", q: "Le biogaz convient le mieux à :", options: ["Une ferme avec du bétail et de la place pour un digesteur", "Un appartement sans animaux", "Un étal de marché sans place", "Une voiture"], answer: 0, why: "Le biogaz est fait avec de la bouse et des déchets végétaux dans un digesteur." },
      { objective: "O4", q: "Avant de choisir un combustible, la question la plus importante est :", options: ["De quelle couleur est le foyer ?", "Est-il vendu près de chez moi toute l'année, et puis-je payer les recharges ?", "Que pensent mes voisins de la marque ?", "La boîte est-elle grande ?"], answer: 1, why: "Un foyer propre n'aide que si vous pouvez continuer à acheter son combustible." },
      { objective: "O5", q: "Pour trouver votre coût mensuel en combustible, vous pouvez :", options: ["Deviner", "Multiplier votre dépense de la semaine par 4", "Diviser par 4", "Demander à un inconnu"], answer: 1, why: "La dépense de la semaine fois 4 donne à peu près le coût du mois." },
      { objective: "O5", q: "Simple exemple : économie mensuelle de 100 EGP, coût de départ de 800 EGP. Combien de mois pour rembourser ?", options: ["100", "900", "700", "8"], answer: 3, why: "800 divisé par 100 font 8." },
      { objective: "O5", q: "Où faut-il acheter les bouteilles de gaz ?", options: ["Chez un vendeur agréé", "Chez n'importe qui au bord de la route", "Dans un point de recharge sans étiquette, la nuit", "Chez un inconnu en ligne qui veut être payé d'abord"], answer: 0, why: "Les vendeurs agréés suivent les règles de sécurité pour les bouteilles et les recharges." },
      { objective: "O6", q: "Qui doit donner son accord au plan de changement pour la cuisine ?", options: ["Seulement le vendeur", "Personne", "Le foyer, y compris la personne qui cuisine et celle qui paie", "Seulement les enfants"], answer: 2, why: "Toutes les personnes concernées doivent être d'accord pour que le plan marche." },
      { objective: "O6", q: "Un bon plan de changement comprend :", options: ["Aucune date", "Seulement le nom de la marque", "Rien sur la sécurité", "Deux options comparées, un choix, la façon de payer et une date de changement"], answer: 3, why: "Ces parties rendent le plan clair et faisable." },
      { objective: "O6", q: "Une vendeuse de nourriture à Dakar ajoute un point de plus à son plan. Lequel ?", options: ["Moins de fumée pour son personnel et ses clients, et ses dépenses en combustible", "La couleur des assiettes", "Rien", "Plus de pétrole lampant"], answer: 0, why: "Pour un commerce, la santé du personnel et le coût du combustible comptent." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Pourquoi c'est important", objective: "O1", notYet: "Aucune raison de santé, ou des raisons fausses.", meets: "Cite au moins trois effets de la fumée sur la santé et qui, dans la maison, en respire le plus.", exceeds: "Cite aussi le temps perdu à ramasser le combustible et qui cela touche." },
      { name: "Moins de fumée cette semaine", objective: "O2", notYet: "Moins de trois mesures, ou des mesures qui coûtent cher.", meets: "Trois mesures qui coûtent peu ou rien, comme l'aération, le bois sec et les couvercles.", exceeds: "Les mesures ont été essayées, avec une note sur ce qui a changé." },
      { name: "Règles de sécurité", objective: "O3", notYet: "Il manque des règles pour le combustible utilisé, ou une règle n'est pas sûre.", meets: "Des règles claires pour les brûlures et les enfants et pour les combustibles du foyer, avec le centre de santé le plus proche.", exceeds: "Comprend les gestes en cas de fuite de gaz ou la règle du monoxyde de carbone pour le charbon, et le rangement du combustible." },
      { name: "Options comparées", objective: "O4", notYet: "Une seule option, ou aucune comparaison.", meets: "Deux options comparées selon la fumée, l'approvisionnement, la sécurité et le coût, avec une raison juste pour le choix.", exceeds: "Les prix viennent de vrais vendeurs locaux et l'approvisionnement a été vérifié." },
      { name: "Coût et paiement", objective: "O5", notYet: "Pas de coût mensuel, ou des calculs faux.", meets: "Le coût mensuel actuel en combustible, les coûts de l'option plus propre et un moyen de paiement, avec des calculs justes.", exceeds: "Montre le nombre de mois pour rembourser et cite les questions à poser avant de signer." },
      { name: "Plan accepté", objective: "O6", notYet: "Pas de date de changement, ou personne d'autre ne l'a vu.", meets: "Les six parties sont remplies, avec une date de changement et les noms des personnes d'accord.", exceeds: "Prévoit une vérification de la fumée et du coût au bout d'un mois." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Foyers qui disent appliquer au moins trois mesures contre la fumée 30 jours plus tard (enquête de suivi)",
      "Foyers qui disent ne plus utiliser de foyer à charbon dans une pièce fermée et ranger le pétrole lampant en sécurité",
      "Foyers ou commerces de nourriture qui passent à un foyer ou un combustible plus propre dans les 6 mois",
      "Apprenants qui disent dépenser moins d'argent ou de temps pour le combustible de cuisine"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone simple avec une calculatrice, ou du papier et un stylo",
      "Les prix locaux des foyers et des combustibles, relevés par l'apprenant ou l'animateur",
      "Si possible, un foyer amélioré, un réchaud à gaz ou un panier à chaleur retenue à montrer au groupe",
      "Environ 60 minutes en tout, en séances courtes"
    ],
    facilitatorNotes: [
      "Bons partenaires : groupements de femmes, groupes d'épargne, écoles, centres de santé, agents de santé communautaires et entreprises locales de cuisson propre (ne faites la promotion d'aucune marque).",
      "Relevez les vrais prix locaux des foyers et des combustibles avant la séance ; le cours n'utilise que des chiffres d'exemple inventés.",
      "Une démonstration en plein air marche bien : comparez la fumée du bois mouillé et du bois sec, ou celle de trois pierres et d'un foyer amélioré.",
      "Sécurité du gaz : montrez comment fermer le robinet et vérifier le tuyau ; ne cherchez jamais une fuite avec une flamme. Ne laissez pas les apprenants travailler sur des câbles ou des tuyaux de gaz.",
      "Brûlures et empoisonnements : enseignez les premiers secours de l'OMS et envoyez les apprenants au centre de santé ; ne donnez aucun conseil de traitement.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
