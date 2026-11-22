"use strict";

// Koach Learn course (French translation of athletes/athletes-nutrition-recovery-ai.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// General education only, as in the English: every health lesson sends the student to a coach, athletic trainer, doctor or registered dietitian. No doses, calorie targets or medical advice.

module.exports = {
  id: "athletes-nutrition-recovery-ai-fr",
  lang: "fr",
  translationOf: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Nutrition et récupération avec l'IA",
  skills: "Prévoir des repas équilibrés autour de l'entraînement, Mettre en place une routine repas et hydratation pour les jours de match, Utiliser l'IA pour les listes de courses et les idées de repas, Suivre ses habitudes de sommeil et de récupération, Savoir quand consulter un professionnel",
  outcome: "utiliser un assistant IA pour prévoir une semaine de repas simples et équilibrés et une routine de récupération autour de votre emploi du temps d'entraînement, puis faire vérifier le plan par un diététicien diplômé, un soigneur ou un médecin.",
  about: [
    "Ce cours s'adresse aux sportifs et aux entraîneurs qui veulent comprendre les bases pour bien manger, bien boire et bien récupérer, et utiliser l'IA pour faciliter l'organisation. C'est un enseignement général, pas un conseil médical ou nutritionnel.",
    "Chaque corps est différent. Votre âge, votre sport, votre santé et vos objectifs changent vos besoins ; c'est pourquoi le plan que vous construirez ici est un brouillon à faire vérifier par un diététicien diplômé, votre soigneur ou votre médecin.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Utilisez un assistant IA pour préparer un plan de repas et de récupération d'une semaine autour de votre vrai calendrier d'entraînements et de matchs : assiettes équilibrées, routine repas et hydratation pour le jour de match, liste de courses adaptée à votre budget et routine de sommeil. Retirez tout détail de santé privé, puis montrez le plan à un diététicien diplômé, un soigneur ou un médecin et modifiez-le selon ses conseils.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs de lycée, d'université et de club, et les entraîneurs qui les accompagnent, qui veulent bien manger, bien boire et bien récupérer, et utiliser l'IA pour planifier plus facilement.",
    startingPoint: "Ils mangent et dorment autour d'un emploi du temps chargé entre entraînements, cours et matchs, et utilisent un téléphone tous les jours. Beaucoup sautent des repas, improvisent la nourriture et l'eau du jour de match, dorment trop peu et ne savent pas quand des courbatures demandent un professionnel.",
    gap: "Une mauvaise alimentation, trop peu d'eau et de sommeil freinent la performance et augmentent le risque de blessure et de coup de chaleur, et les conseils de l'IA ou d'internet sur les calories et les compléments peuvent être dangereux. Un plan hebdomadaire simple, vérifié par un professionnel, aide les sportifs à récupérer et à rester en bonne santé.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Formation générale seulement, pas de conseil médical ni nutritionnel ; les quantités exactes viennent d'un diététicien diplômé, d'un soigneur ou d'un médecin",
      "Un téléphone ou un ordinateur avec un assistant IA gratuit ; les plans doivent correspondre à un vrai budget alimentaire et à une vraie cuisine",
      "Environ 60 minutes au total",
      "Aucun dossier médical, médicament ni détail de santé privé collé dans l'IA ; l'image du corps et le poids sont des sujets sensibles"
    ],
    prerequisites: "Aucun"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec des aliments que vous mangez déjà", action: "composer une assiette équilibrée avec des glucides, des protéines, et des fruits et légumes", standard: "avec les trois parties dans l'assiette et plus d'énergie prévue les jours d'entraînement dur" },
    { id: "O2", condition: "À partir de l'heure de début d'un match ou d'un entraînement intense", action: "planifier une routine repas et hydratation du jour de match, du repas d'avant à la récupération d'après", standard: "avec un repas et une collation habituels, de l'eau toute la journée, et une collation de récupération avec des glucides et des protéines" },
    { id: "O3", condition: "Avec un assistant IA gratuit", action: "créer une semaine d'idées de repas et une liste de courses adaptées à votre emploi du temps, à votre budget et à votre cuisine", standard: "avec les allergies décrites en termes généraux et sans demander d'objectif de calories, de plan pour perdre du poids ni de dose de compléments" },
    { id: "O4", condition: "À partir de votre calendrier d'entraînements et de matchs", action: "planifier une routine de sommeil avec une heure de lever régulière, une heure de coucher et une heure où les écrans s'éteignent", standard: "avec la routine notée pendant une semaine" },
    { id: "O5", condition: "À partir de la description d'une courbature, d'une douleur ou d'un coup à la tête", action: "expliquer s'il s'agit de courbatures normales ou d'un signe pour arrêter et prévenir votre soigneur", standard: "en réussissant chaque cas de douleur vive, de gonflement ou de symptômes après un coup à la tête" },
    { id: "O6", condition: "Avec votre emploi du temps et un assistant IA", action: "créer un plan de repas et de récupération d'une semaine et le faire vérifier par un diététicien, un soigneur ou un médecin", standard: "avec les détails de santé privés retirés et le plan mis à jour selon ses conseils" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : S'alimenter autour de l'entraînement",
      lessons: [
        {
          objectives: ["O1"],
          title: "L'assiette équilibrée du sportif",
          minutes: 5,
          goal: "Composer une assiette équilibrée avec des aliments que vous mangez déjà.",
          text: [
            "La nourriture vous donne l'énergie pour vous entraîner et les matériaux pour récupérer. Une façon simple de penser un repas est une assiette en trois parties principales : les glucides pour l'énergie (riz, pâtes, pain, pommes de terre, manioc, fruits), les protéines pour aider les muscles à se réparer (œufs, haricots, poisson, poulet, yaourt), et les fruits et légumes pour les vitamines et les minéraux.",
            "Les sportifs qui s'entraînent dur ont souvent besoin de plus d'énergie que les autres, et les jours plus durs demandent en général plus de glucides. Les quantités dépendent de votre corps, de votre sport et de votre entraînement ; c'est pourquoi un diététicien diplômé est la bonne personne pour vos quantités exactes.",
            "Sauter des repas ou supprimer des groupes d'aliments entiers pour avoir une certaine apparence peut nuire à vos performances et à votre santé. Si la nourriture, le poids ou l'image de votre corps vous stresse, parlez-en à une personne de confiance et à votre soigneur ou à votre médecin."
          ],
          words: [["Glucides", "des aliments comme le riz, le pain, les pâtes, les pommes de terre et les fruits qui donnent de l'énergie rapide."], ["Protéines", "des aliments comme les œufs, les haricots, le poisson, la viande et le yaourt qui aident le corps à réparer les muscles."], ["Diététicien diplômé", "un professionnel de l'alimentation et de la nutrition reconnu par un diplôme d'État ou une autorisation d'exercer."]],
          slides: [
            { title: "Les trois parties de l'assiette", bullets: ["Glucides : énergie", "Protéines : réparation", "Fruits et légumes : vitamines et minéraux"] },
            { title: "Jours durs, plus de carburant", bullets: ["Les jours d'entraînement demandent souvent plus d'énergie", "Quantités exactes : demandez à un diététicien diplômé"] },
            { title: "Attention à", bullets: ["Sauter des repas", "Supprimer des groupes d'aliments entiers", "Stress lié à la nourriture ou au corps : parlez-en"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics : trouver un expert en nutrition (États-Unis, en anglais)", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Notez ce que vous avez mangé hier à un repas. Repérez le glucide, la protéine et le fruit ou légume. Que pourriez-vous ajouter pour en faire une assiette équilibrée ?",
          youCanNow: "composer une assiette équilibrée avec des glucides, des protéines, des fruits et des légumes.",
          quickCheck: [
            { objective: "O1", q: "Quel est le rôle principal des protéines dans l'assiette d'un sportif ?", options: ["Donner de l'énergie rapide", "Aider les muscles à se réparer", "Apporter seulement des vitamines", "Vous garder au frais"], answer: 1, why: "Les protéines apportent les éléments dont les muscles ont besoin pour se réparer." },
            { objective: "O1", q: "Demain, c'est un jour d'entraînement dur. Quel changement dans votre assiette est logique ?", options: ["Sauter le petit-déjeuner", "Supprimer les glucides", "Ajouter plus de glucides pour l'énergie", "Ne manger que des légumes"], answer: 2, why: "Les jours plus durs demandent en général plus de glucides pour l'énergie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Routine repas et hydratation du jour de match",
          minutes: 5,
          goal: "Prévoir quoi et quand manger et boire un jour de match ou d'entraînement intense.",
          text: [
            "Le moment compte. Beaucoup de sportifs prennent un repas équilibré normal quelques heures avant un match et une petite collation facile plus près du coup d'envoi, comme un fruit ou des biscuits secs. Le jour du match, les aliments habituels sont les meilleurs : n'essayez rien de nouveau.",
            "L'eau compte toute la journée, pas seulement pendant le match. Emportez une gourde, buvez régulièrement et buvez davantage quand il fait chaud. La soif, des urines foncées, des maux de tête et des crampes peuvent montrer qu'il vous faut plus de liquide. Avoir des vertiges, être confus ou très mal à la chaleur est une urgence : arrêtez-vous et prévenez tout de suite votre entraîneur ou votre soigneur.",
            "Après un entraînement dur, un repas ou une collation avec des glucides et des protéines aide à récupérer. Votre soigneur ou votre diététicien peut vous dire ce qui convient à votre corps et à votre sport."
          ],
          steps: ["Notez l'heure de début du match ou de l'entraînement.", "Prévoyez un repas équilibré normal quelques heures avant.", "Prévoyez une petite collation habituelle plus près du début.", "Prévoyez votre gourde pour toute la journée.", "Prévoyez un repas ou une collation de récupération après."],
          words: [["Hydratation", "garder assez d'eau dans le corps."], ["Repas de récupération", "la nourriture prise après l'entraînement pour aider le corps à refaire le plein d'énergie et à se réparer."]],
          slides: [
            { title: "Avant le match", bullets: ["Repas équilibré quelques heures avant", "Petite collation habituelle plus près du début", "Rien de nouveau le jour du match"] },
            { title: "De l'eau toute la journée", bullets: ["Ayez une gourde", "Plus quand il fait chaud", "Vertiges ou confusion à la chaleur ? Arrêtez et prévenez le staff"] },
            { title: "Après", bullets: ["Glucides et protéines", "Demandez à votre soigneur ce qui vous convient"] }
          ],
          tryIt: "Écrivez un déroulé pour votre prochain match ou entraînement intense : repas, collation, eau et nourriture de récupération, avec les heures.",
          youCanNow: "prévoir une routine simple de repas et d'hydratation pour le jour de match.",
          quickCheck: [
            { objective: "O2", q: "Quand beaucoup de sportifs prennent-ils leur repas équilibré habituel le jour du match ?", options: ["Quelques heures avant le match", "Juste au début du match", "Seulement après le match", "Seulement la veille au soir"], answer: 0, why: "Un repas normal quelques heures avant et une petite collation plus près du début, c'est une routine courante." },
            { objective: "O2", q: "Il fait chaud et vous avez un long entraînement. Que prévoyez-vous ?", options: ["Boire seulement quand l'entraîneur le dit", "Ne pas boire pour éviter les crampes", "Attendre la fin de l'entraînement pour boire", "Prendre une bouteille d'eau et boire régulièrement toute la journée, plus quand il fait chaud"], answer: 3, why: "L'eau compte toute la journée, et il en faut plus quand il fait chaud." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Utiliser l'IA pour les idées de repas et les listes de courses",
          minutes: 5,
          goal: "Utiliser un assistant IA pour obtenir une semaine d'idées de repas et une liste de courses adaptée à votre budget.",
          text: [
            "Les assistants IA sont bons pour les idées de repas, les recettes et les listes de courses. Donnez-leur votre emploi du temps, votre budget, votre cuisine et ce que vous aimez. Exemple : « Je suis sportif à l'université, j'ai un micro-ondes dans ma chambre et un budget de 50 $ par semaine pour manger. Entraînement de 15 h à 18 h. Donne-moi 7 jours de repas simples et équilibrés et une liste de courses. »",
            "Parlez-lui de vos allergies alimentaires ou de vos règles alimentaires religieuses ou culturelles avec des mots généraux, pour que les idées vous conviennent. Ne collez ni dossier médical ni liste de médicaments.",
            "Ne demandez pas à l'IA d'objectifs caloriques, de plans pour perdre du poids ni de doses de compléments. Cela dépend de votre santé, et les réponses peuvent être fausses ou dangereuses. C'est le travail d'un diététicien diplômé ou d'un médecin."
          ],
          steps: ["Donnez votre emploi du temps, votre budget et votre cuisine.", "Dites ce que vous aimez et ce que vous évitez.", "Demandez des idées de repas équilibrés pour 7 jours.", "Demandez une liste de courses rangée par rayon.", "Vérifiez les prix dans votre magasin et ajustez."],
          words: [["Budget", "la somme d'argent que vous prévoyez de dépenser."], ["Allergie", "quand votre corps réagit mal à un aliment ; cela peut être grave."]],
          slides: [
            { title: "Donnez les détails à l'IA", bullets: ["Emploi du temps et budget", "Cuisine : chambre, maison, aucune", "Aliments aimés et évités"] },
            { title: "Demandez", bullets: ["7 jours d'idées de repas équilibrés", "Liste de courses par rayon"] },
            { title: "Ne demandez PAS à l'IA", bullets: ["Des objectifs caloriques ou un plan pour maigrir", "Des doses de compléments", "Des conseils médicaux"] }
          ],
          tryIt: "Demandez à un assistant IA sept jours de repas simples et équilibrés et une liste de courses pour votre vrai budget et votre vraie cuisine. Vérifiez trois prix dans votre magasin.",
          youCanNow: "utiliser l'IA pour obtenir des idées de repas et une liste de courses adaptées à votre budget et à votre emploi du temps.",
          quickCheck: [
            { objective: "O3", q: "Quels détails aident un assistant IA à donner des idées de repas utiles ?", options: ["Votre dossier médical", "Votre emploi du temps, votre budget et votre cuisine", "Vos médicaments", "Votre objectif de poids"], answer: 1, why: "L'emploi du temps, le budget et la cuisine adaptent les idées à votre vie sans partager de détails de santé privés." },
            { objective: "O3", q: "Vous voulez savoir exactement combien de calories manger pour perdre du poids. À qui le demandez-vous ?", options: ["À un assistant IA", "À un coéquipier", "À un diététicien diplômé ou à un médecin", "À un influenceur sur les réseaux sociaux"], answer: 2, why: "Les objectifs de calories dépendent de votre santé et relèvent d'un diététicien ou d'un médecin." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'alimenter autour de l'entraînement",
        questions: [
          { objective: "O1", q: "Quel est le rôle principal des glucides pour les sportifs ?", options: ["Seulement réparer les muscles", "Seulement les vitamines", "L'énergie", "Aucun"], answer: 2, why: "Les glucides sont la principale source d'énergie rapide du corps." },
          { objective: "O1", q: "Qui est la bonne personne pour vos quantités exactes de nourriture ?", options: ["Un diététicien diplômé", "Un assistant IA", "Un influenceur des réseaux sociaux", "Un coéquipier"], answer: 0, why: "Les diététiciens diplômés donnent des conseils de nutrition personnels." },
          { objective: "O2", q: "Le jour du match, quelle collation est la meilleure ?", options: ["Une nouvelle boisson énergisante jamais essayée", "Rien de toute la journée", "Un énorme repas gras juste avant", "Une petite collation habituelle comme un fruit"], answer: 3, why: "Les aliments habituels et faciles sont les plus sûrs le jour du match." },
          { objective: "O2", q: "Un coéquipier a des vertiges et semble confus à l'entraînement sous la chaleur. Que faites-vous ?", options: ["Je lui dis de serrer les dents", "Je préviens tout de suite l'entraîneur ou le soigneur", "J'attends la fin de l'entraînement", "Je lui donne une boisson énergisante et je pars"], answer: 1, why: "Ces signes peuvent être une urgence ; le staff doit agir tout de suite." },
          { objective: "O3", q: "Quelle demande ne faut-il PAS faire à un assistant IA ?", options: ["Une liste de courses pour un budget de 50 $", "Une dose de complément pour vous", "Des idées de repas au micro-ondes", "Des recettes avec des haricots"], answer: 1, why: "Les doses dépendent de votre santé ; demandez à un diététicien ou un médecin." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les habitudes de récupération",
      lessons: [
        {
          objectives: ["O4"],
          title: "Le sommeil : votre meilleur outil de récupération",
          minutes: 5,
          goal: "Mettre en place une routine de sommeil simple adaptée à votre emploi du temps.",
          text: [
            "C'est pendant le sommeil que votre corps se répare et que votre cerveau garde ce que vous avez travaillé. Les adolescents ont en général besoin de plus de sommeil que les adultes, et beaucoup de sportifs ne dorment pas assez.",
            "Une routine de sommeil aide : une heure de coucher et de lever régulière, les écrans éteints avant le coucher, une chambre fraîche et sombre, et la caféine seulement tôt dans la journée. L'IA peut vous aider à construire un plan de coucher autour des entraînements matinaux ou des matchs tardifs.",
            "Si vous n'arrivez souvent pas à dormir, si vous ronflez fort ou si vous êtes épuisé même après avoir dormi, parlez-en à votre médecin."
          ],
          steps: ["Choisissez une heure de lever régulière.", "Comptez à rebours jusqu'à une heure de coucher qui vous donne assez de sommeil.", "Fixez une heure pour éteindre les écrans avant le coucher.", "Gardez la caféine pour le début de journée.", "Notez vos heures de sommeil pendant une semaine."],
          words: [["Routine de sommeil", "les mêmes gestes à la même heure chaque soir pour aider à s'endormir."], ["Caféine", "un excitant présent dans le café, le thé, les sodas et les boissons énergisantes, qui peut empêcher de dormir."]],
          slides: [
            { title: "Pourquoi le sommeil compte", bullets: ["Le corps se répare", "Le cerveau garde les gestes appris", "Les ados ont besoin de plus que les adultes"] },
            { title: "Une routine simple", bullets: ["Même heure de coucher et de lever", "Écrans éteints avant le coucher", "Chambre fraîche et sombre", "Caféine seulement tôt"] },
            { title: "Voyez votre médecin si", bullets: ["Vous n'arrivez souvent pas à dormir", "Vous ronflez fort", "Vous êtes toujours épuisé"] }
          ],
          tryIt: "Demandez à un assistant IA : « J'ai entraînement à 6 h en semaine et les matchs finissent à 21 h le vendredi. Aide-moi à faire une routine de sommeil simple. » Choisissez votre heure de coucher et notez votre sommeil pendant les trois prochaines nuits.",
          youCanNow: "mettre en place et suivre une routine de sommeil simple.",
          quickCheck: [
            { objective: "O4", q: "Lequel fait partie d'une bonne routine de sommeil ?", options: ["De la caféine tard le soir", "Une heure de coucher différente chaque soir", "Une chambre lumineuse et chaude", "Des heures de coucher et de lever régulières"], answer: 3, why: "Des horaires réguliers, les écrans éteints, une chambre fraîche et sombre et la caféine tôt dans la journée aident à dormir." },
            { objective: "O4", q: "L'entraînement commence à 6 h. Comment fixez-vous votre heure de coucher ?", options: ["Choisir l'heure de lever, puis compter à rebours jusqu'à une heure de coucher qui donne assez de sommeil", "Se coucher quand vous lâchez votre téléphone", "Faire la grasse matinée les jours d'entraînement", "Ne pas dormir avant un entraînement tôt"], answer: 0, why: "Compter à rebours à partir d'une heure de lever régulière donne une heure de coucher avec assez de sommeil." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jours de repos, courbatures et douleur",
          minutes: 5,
          goal: "Distinguer les courbatures normales de l'entraînement d'une douleur qui demande un professionnel.",
          text: [
            "Les jours de repos font partie de l'entraînement, ce n'est pas une pause. Votre entraîneur les prévoit pour que votre corps s'adapte et devienne plus fort.",
            "Les courbatures normales ressemblent à une fatigue musculaire sourde et générale un ou deux jours après un entraînement dur, et elles s'améliorent peu à peu. Une douleur vive, dans une articulation ou un os, qui vous fait boiter, provoque un gonflement ou s'aggrave, c'est différent : arrêtez et prévenez votre soigneur.",
            "Les blessures à la tête demandent une attention particulière. Si vous ou un coéquipier recevez un choc et avez mal à la tête, des vertiges, de la confusion ou ne vous sentez « pas bien », arrêtez de jouer et prévenez votre entraîneur ou votre soigneur. La formation gratuite HEADS UP des CDC (l'agence de santé publique américaine) explique les signes."
          ],
          steps: ["Repérez où et comment ça fait mal.", "Sourd, général et en amélioration : courbatures normales.", "Vif, dans une articulation, gonflement, boiterie ou aggravation : prévenez votre soigneur.", "Tout choc à la tête avec des symptômes : arrêtez et prévenez le staff."],
          words: [["Courbatures", "une fatigue musculaire sourde après un entraînement dur, qui disparaît en un ou deux jours."], ["Commotion cérébrale", "une blessure du cerveau causée par un choc ou une secousse à la tête ou au corps."]],
          slides: [
            { title: "Le repos fait partie de l'entraînement", bullets: ["Le corps s'adapte les jours de repos", "Suivez le plan de votre entraîneur"] },
            { title: "Courbatures ou douleur", bullets: ["Courbatures : sourdes, générales, qui passent", "Douleur : vive, articulation, gonflement, boiterie, aggravation"] },
            { title: "Choc à la tête ?", bullets: ["Mal de tête, vertiges, confusion, « pas bien »", "Arrêtez de jouer et prévenez le staff", "Apprenez les signes : CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC : formation HEADS UP sur les commotions (en anglais)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Écrivez deux listes : les signes de courbatures normales et les signes de douleur à signaler. Puis notez qui vous préviendriez dans votre équipe et comment le joindre.",
          youCanNow: "distinguer les courbatures normales d'une douleur qui demande votre soigneur, et savoir quoi faire après un choc à la tête.",
          quickCheck: [
            { objective: "O5", q: "Lequel est un signe de douleur qui demande votre soigneur ?", options: ["Une fatigue sourde dans les jambes le lendemain d'un entraînement dur", "Une douleur vive dans une articulation qui empire", "De légères courbatures qui passent en deux jours", "Avoir faim après l'entraînement"], answer: 1, why: "Une douleur vive, une douleur d'articulation ou d'os, un gonflement, une boiterie ou une douleur qui empire demandent un professionnel." },
            { objective: "O5", q: "Un coéquipier reçoit un coup à la tête et dit qu'il a des vertiges. Que se passe-t-il ?", options: ["Il continue à jouer s'il le veut", "Il se repose pendant une action", "Il arrête de jouer et vous prévenez l'entraîneur ou le soigneur", "Il boit de l'eau et retourne jouer"], answer: 2, why: "Un coup à la tête avec des symptômes veut dire : arrêter de jouer et prévenir le staff." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Construire votre plan de récupération",
          minutes: 5,
          goal: "Réunir repas, eau et sommeil dans un plan de récupération hebdomadaire et le faire vérifier par un professionnel.",
          text: [
            "Maintenant, assemblez le tout. Votre plan de la semaine contient les repas autour des entraînements, une routine pour le jour de match, une habitude d'hydratation et une routine de sommeil.",
            "Demandez à un assistant IA de les réunir : « Voici mon calendrier d'entraînements et de matchs, mon budget et ma cuisine. Fais un tableau d'une semaine avec les repas, les collations, des rappels pour boire et les heures de coucher. » Retirez d'abord tout détail de santé privé.",
            "Puis montrez-le à un diététicien diplômé, à votre soigneur ou à votre médecin. Demandez : « Est-ce que cela convient à mon corps et à mon sport ? Que changeriez-vous ? » Le plan corrigé avec eux est celui à suivre. Votre établissement, votre club ou le service de santé étudiant peut peut-être vous mettre en contact avec l'un d'eux."
          ],
          steps: ["Rassemblez votre emploi du temps, votre budget et les infos sur votre cuisine.", "Demandez à l'IA un tableau d'une semaine : repas, collations, eau, heures de coucher.", "Retirez les détails de santé privés.", "Montrez-le à un diététicien, un soigneur ou un médecin.", "Mettez-le à jour avec leurs conseils."],
          words: [["Plan de récupération", "votre routine de la semaine pour la nourriture, l'eau, le sommeil et le repos, qui aide votre corps à récupérer."]],
          slides: [
            { title: "Votre plan de récupération", bullets: ["Repas autour des entraînements", "Routine du jour de match", "Habitude d'hydratation", "Routine de sommeil"] },
            { title: "L'IA fait le brouillon", bullets: ["Un tableau d'une semaine", "Aucun détail de santé privé"] },
            { title: "Un professionnel le vérifie", bullets: ["Diététicien, soigneur ou médecin", "« Que changeriez-vous ? »", "Suivez le plan corrigé"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics : trouver un expert en nutrition (États-Unis, en anglais)", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Tâche finale : utilisez un assistant IA pour préparer votre plan de repas et de récupération d'une semaine, retirez les détails de santé privés et montrez-le à un diététicien, un soigneur ou un médecin.",
          youCanNow: "construire avec l'IA un plan hebdomadaire de repas, d'hydratation et de sommeil et le faire vérifier par un professionnel.",
          quickCheck: [
            { objective: "O6", q: "Que contient votre plan de récupération d'une semaine ?", options: ["Les repas et collations, des rappels pour boire et les heures de coucher", "Seulement vos séances", "Seulement votre calendrier de matchs", "Une liste de compléments"], answer: 0, why: "Le plan réunit nourriture, eau et sommeil autour de votre emploi du temps." },
            { objective: "O6", q: "Votre soigneur propose des changements au plan rédigé par l'IA. Que faites-vous ?", options: ["Garder la version de l'IA", "Demander à l'IA de le contredire", "Prendre la moitié de chaque", "Mettre le plan à jour avec ses conseils et suivre cette version"], answer: 3, why: "Le plan que le professionnel vous aide à corriger est celui à suivre." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les habitudes de récupération",
        questions: [
          { objective: "O4", q: "Pourquoi le sommeil compte-t-il pour les sportifs ?", options: ["Il ne compte pas", "Il remplace l'entraînement", "Seulement pour le poids", "Le corps se répare et le cerveau garde les gestes appris"], answer: 3, why: "C'est pendant le sommeil que se font la réparation et l'apprentissage." },
          { objective: "O4", q: "Lequel fait partie d'une bonne routine de sommeil ?", options: ["Éteindre les écrans avant le coucher", "Des boissons énergisantes le soir", "Une heure de coucher différente chaque soir", "Le téléphone au lit jusqu'à s'endormir"], answer: 0, why: "Éteindre les écrans avant le coucher aide à s'endormir." },
          { objective: "O5", q: "Votre genou a une douleur vive et gonfle après l'entraînement. Que faites-vous ?", options: ["Je l'ignore", "Je demande un traitement à l'IA", "Je préviens mon soigneur", "Je cours plus pour le détendre"], answer: 2, why: "Une douleur vive avec gonflement demande un professionnel." },
          { objective: "O5", q: "Un coéquipier a des vertiges et se sent « pas bien » après un choc à la tête. Que doit-il se passer ?", options: ["Il continue de jouer", "Il fait une courte pause et revient", "Il demande à une application", "Il arrête de jouer et prévient le staff"], answer: 3, why: "Commotion possible : arrêter et prévenir un entraîneur ou un soigneur." },
          { objective: "O6", q: "Qui doit vérifier votre plan de récupération préparé avec l'IA ?", options: ["Une section de commentaires au hasard", "Un diététicien, un soigneur ou un médecin", "L'IA, encore une fois", "Personne"], answer: 1, why: "Un professionnel peut adapter le plan à votre corps et à votre sport." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Nutrition et récupération avec l'IA",
    questions: [
      { objective: "O1", q: "Quel aliment est surtout une protéine ?", options: ["Le riz", "Les pommes", "Les œufs", "Le pain"], answer: 2, why: "Les œufs sont un aliment protéiné." },
      { objective: "O1", q: "Les trois parties principales d'une assiette équilibrée sont :", options: ["Glucides, protéines, fruits et légumes", "Bonbons, sodas, chips", "Seulement des protéines", "Seulement des légumes"], answer: 0, why: "Ces trois parties couvrent l'énergie, la réparation et les vitamines." },
      { objective: "O1", q: "Les jours d'entraînement dur demandent en général :", options: ["Plus de carburant", "De sauter des repas", "Pas d'eau", "Seulement des collations"], answer: 0, why: "Plus d'entraînement veut en général dire plus d'énergie nécessaire." },
      { objective: "O1", q: "La nourriture ou l'image de votre corps vous stresse. Vous devez :", options: ["Arrêter de manger", "Le cacher", "En parler à une personne de confiance et à votre soigneur ou médecin", "Demander un régime à l'IA"], answer: 2, why: "Ces inquiétudes méritent un vrai soutien." },
      { objective: "O2", q: "Le jour du match, choisissez :", options: ["Un aliment tout nouveau", "Des aliments habituels", "Rien de la journée", "Un nouveau complément"], answer: 1, why: "Les aliments habituels sont les plus sûrs." },
      { objective: "O2", q: "Quand faut-il boire de l'eau ?", options: ["Seulement pendant le match", "Jamais avant les matchs", "Seulement quand on vous le dit", "Toute la journée, davantage quand il fait chaud"], answer: 3, why: "L'hydratation est une habitude de toute la journée." },
      { objective: "O2", q: "Lequel peut montrer qu'il vous faut plus de liquide ?", options: ["Se sentir reposé", "Avoir les idées claires", "Des urines foncées et un mal de tête", "Bien dormir"], answer: 2, why: "Urines foncées, maux de tête et crampes peuvent signaler un manque de liquide." },
      { objective: "O2", q: "Après un entraînement dur, une collation de récupération contient :", options: ["Seulement de l'eau", "Seulement des bonbons", "Rien", "Des glucides et des protéines"], answer: 3, why: "Les glucides refont le plein d'énergie ; les protéines aident à réparer." },
      { objective: "O3", q: "Que donner à l'IA pour obtenir des idées de repas utiles ?", options: ["Votre emploi du temps, votre budget et votre cuisine", "Votre dossier médical", "Votre mot de passe", "Votre carte bancaire"], answer: 0, why: "Ces détails adaptent les idées à votre vie." },
      { objective: "O3", q: "Que ne faut-il PAS demander à l'IA ?", options: ["Des recettes au micro-ondes", "Un objectif calorique pour perdre du poids", "Une liste de courses", "Des idées de repas avec des haricots"], answer: 1, why: "Les objectifs caloriques dépendent de votre santé ; demandez à un diététicien." },
      { objective: "O3", q: "Comment parler d'une allergie alimentaire à l'IA ?", options: ["En collant votre dossier médical", "En tapant les notes de votre médecin", "Avec des mots généraux, comme « pas d'arachides »", "Ne pas en parler"], answer: 2, why: "Des mots généraux donnent des idées sûres sans partager de dossier." },
      { objective: "O3", q: "Après que l'IA a fait une liste de courses, vous devez :", options: ["Vérifier les prix dans votre magasin", "Faire confiance aux prix", "Tout acheter en double", "La publier"], answer: 0, why: "L'IA ne peut pas connaître les vrais prix de votre magasin." },
      { objective: "O3", q: "Les compléments alimentaires sont risqués parce que :", options: ["Ils sont toujours illégaux", "Ils sont gratuits", "Les entraîneurs les vendent", "Ils ne sont pas contrôlés par la FDA avant la vente et certains contiennent des substances interdites"], answer: 3, why: "L'USADA (agence antidopage américaine) met en garde contre les compléments contaminés ou mal étiquetés." },
      { objective: "O4", q: "Qu'est-ce qui aide à s'endormir ?", options: ["La caféine tard le soir", "Une chambre fraîche et sombre", "Faire défiler son téléphone au lit", "Une heure de coucher différente chaque soir"], answer: 1, why: "Une chambre fraîche et sombre favorise le sommeil." },
      { objective: "O4", q: "Vous êtes toujours épuisé, même après avoir dormi. Vous devez :", options: ["Boire plus de boissons énergisantes", "En parler à votre médecin", "L'ignorer", "Vous entraîner plus dur"], answer: 1, why: "Un épuisement qui dure est une raison de voir un médecin." },
      { objective: "O5", q: "Les jours de repos sont :", options: ["De la paresse", "Interdits", "Seulement pour les blessés", "Une partie de l'entraînement"], answer: 3, why: "Votre corps s'adapte et se renforce les jours de repos." },
      { objective: "O5", q: "Lequel ressemble à des courbatures normales ?", options: ["Une fatigue musculaire sourde qui passe en un ou deux jours", "Une douleur vive dans une articulation", "Un gonflement et une boiterie", "Une douleur qui ne cesse d'empirer"], answer: 0, why: "Les courbatures normales sont sourdes et passent." },
      { objective: "O5", q: "Où apprendre gratuitement les signes d'une commotion ?", options: ["Dans un mème au hasard", "Dans une publicité pour une boisson sportive", "Avec CDC HEADS UP", "Nulle part"], answer: 2, why: "Les CDC proposent la formation gratuite HEADS UP." },
      { objective: "O6", q: "Avant de coller votre plan dans une IA, retirez :", options: ["Les horaires d'entraînement", "Votre budget", "Vos plats préférés", "Les détails de santé privés"], answer: 3, why: "Les détails de santé restent privés." },
      { objective: "O6", q: "Le plan à suivre est :", options: ["Le premier brouillon de l'IA", "Celui corrigé avec un diététicien, un soigneur ou un médecin", "Le plan d'un influenceur", "Le plan de votre rival"], answer: 1, why: "Un professionnel adapte le plan à vous." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      8,
      9,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Repas équilibrés",
        objective: "O1",
        notYet: "Des repas oublient tout un groupe d'aliments, ou il manque des repas autour de l'entraînement.",
        meets: "Chaque repas principal contient des glucides, des protéines, et des fruits ou des légumes.",
        exceeds: "Plus d'énergie est prévue les jours durs et les repas utilisent des aliments que le sportif aime déjà."
      },
      {
        name: "Routine du jour de match",
        objective: "O2",
        notYet: "Pas d'horaires, pas de plan pour l'eau, ou un nouvel aliment le jour du match.",
        meets: "Un repas habituel quelques heures avant, une petite collation plus près du début, de l'eau toute la journée et une collation de récupération après.",
        exceeds: "Comprend un plan pour la chaleur et les signes d'alerte qui veulent dire : arrêter et prévenir le staff."
      },
      {
        name: "Liste de courses dans le budget",
        objective: "O3",
        notYet: "Pas de liste de courses, ou le plan demande à l'IA des objectifs de calories ou des doses de compléments.",
        meets: "Une liste de courses adaptée au budget et à la cuisine indiqués, avec les allergies décrites en termes généraux.",
        exceeds: "Les prix sont vérifiés dans le magasin du sportif et la liste est ajustée."
      },
      {
        name: "Routine de sommeil",
        objective: "O4",
        notYet: "Pas d'heure de lever ni d'heure de coucher régulière.",
        meets: "Une heure de lever, une heure de coucher et une heure d'arrêt des écrans régulières, adaptées à l'emploi du temps.",
        exceeds: "Les heures de sommeil sont notées pendant une semaine et la routine est ajustée autour des entraînements tôt ou des matchs tard."
      },
      {
        name: "Vérification par un professionnel",
        objective: "O6",
        notYet: "Le plan n'a pas été montré à un professionnel, ou il contient des détails de santé privés.",
        meets: "Détails privés retirés, plan montré à un diététicien, un soigneur ou un médecin, et mis à jour selon ses conseils.",
        exceeds: "Le sportif note ce qui a été changé et pourquoi."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la tâche finale avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui disent suivre leur plan de repas et de sommeil vérifié 30 jours plus tard (questionnaire de suivi)",
      "Les apprenants qui disent avoir parlé de leur plan avec un diététicien, un soigneur ou un médecin",
      "Les apprenants qui disent avoir prévenu le staff d'une douleur vive, de signes de coup de chaleur ou d'un coup à la tête au lieu de continuer à jouer"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Votre calendrier d'entraînements et de matchs, votre budget alimentaire de la semaine et ce que contient votre cuisine",
      "Le contact d'un diététicien diplômé, d'un soigneur, du service de santé des étudiants ou d'un médecin",
      "Environ 60 minutes, plus le temps de rencontrer le professionnel"
    ],
    facilitatorNotes: [
      "Dites clairement qu'il s'agit d'une formation générale ; ne donnez pas de conseil individuel sur les calories, le poids ou les compléments en groupe.",
      "Faites attention au poids et à l'image du corps : ne pesez et ne comparez jamais les sportifs, et sachez vers qui orienter quelqu'un qui va mal.",
      "Organisez l'accès à un diététicien diplômé, à un soigneur ou au service de santé des étudiants avant la tâche finale, pour que chaque sportif puisse faire vérifier son plan.",
      "Revoyez avec tout le groupe les signes de coup de chaleur et de coup à la tête, et assurez-vous que les sportifs savent qui prévenir.",
      "Respectez les budgets alimentaires, les allergies et les règles alimentaires culturelles ou religieuses quand vous donnez des exemples de repas."
    ]
  }
};
