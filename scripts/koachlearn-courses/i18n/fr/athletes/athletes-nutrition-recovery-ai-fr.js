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
  chapters: [
    {
      name: "Chapitre 1 : S'alimenter autour de l'entraînement",
      lessons: [
        {
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
          youCanNow: "composer une assiette équilibrée avec des glucides, des protéines, des fruits et des légumes."
        },
        {
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
          youCanNow: "prévoir une routine simple de repas et d'hydratation pour le jour de match."
        },
        {
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
          youCanNow: "utiliser l'IA pour obtenir des idées de repas et une liste de courses adaptées à votre budget et à votre emploi du temps."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'alimenter autour de l'entraînement",
        questions: [
          { q: "Quel est le rôle principal des glucides pour les sportifs ?", options: ["Seulement réparer les muscles", "Seulement les vitamines", "L'énergie", "Aucun"], answer: 2, why: "Les glucides sont la principale source d'énergie rapide du corps." },
          { q: "Qui est la bonne personne pour vos quantités exactes de nourriture ?", options: ["Un diététicien diplômé", "Un assistant IA", "Un influenceur des réseaux sociaux", "Un coéquipier"], answer: 0, why: "Les diététiciens diplômés donnent des conseils de nutrition personnels." },
          { q: "Le jour du match, quelle collation est la meilleure ?", options: ["Une nouvelle boisson énergisante jamais essayée", "Rien de toute la journée", "Un énorme repas gras juste avant", "Une petite collation habituelle comme un fruit"], answer: 3, why: "Les aliments habituels et faciles sont les plus sûrs le jour du match." },
          { q: "Un coéquipier a des vertiges et semble confus à l'entraînement sous la chaleur. Que faites-vous ?", options: ["Je lui dis de serrer les dents", "Je préviens tout de suite l'entraîneur ou le soigneur", "J'attends la fin de l'entraînement", "Je lui donne une boisson énergisante et je pars"], answer: 1, why: "Ces signes peuvent être une urgence ; le staff doit agir tout de suite." },
          { q: "Quelle demande ne faut-il PAS faire à un assistant IA ?", options: ["Une liste de courses pour un budget de 50 $", "Une dose de complément pour vous", "Des idées de repas au micro-ondes", "Des recettes avec des haricots"], answer: 1, why: "Les doses dépendent de votre santé ; demandez à un diététicien ou un médecin." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les habitudes de récupération",
      lessons: [
        {
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
          youCanNow: "mettre en place et suivre une routine de sommeil simple."
        },
        {
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
          youCanNow: "distinguer les courbatures normales d'une douleur qui demande votre soigneur, et savoir quoi faire après un choc à la tête."
        },
        {
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
          youCanNow: "construire avec l'IA un plan hebdomadaire de repas, d'hydratation et de sommeil et le faire vérifier par un professionnel."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les habitudes de récupération",
        questions: [
          { q: "Pourquoi le sommeil compte-t-il pour les sportifs ?", options: ["Il ne compte pas", "Il remplace l'entraînement", "Seulement pour le poids", "Le corps se répare et le cerveau garde les gestes appris"], answer: 3, why: "C'est pendant le sommeil que se font la réparation et l'apprentissage." },
          { q: "Lequel fait partie d'une bonne routine de sommeil ?", options: ["Éteindre les écrans avant le coucher", "Des boissons énergisantes le soir", "Une heure de coucher différente chaque soir", "Le téléphone au lit jusqu'à s'endormir"], answer: 0, why: "Éteindre les écrans avant le coucher aide à s'endormir." },
          { q: "Votre genou a une douleur vive et gonfle après l'entraînement. Que faites-vous ?", options: ["Je l'ignore", "Je demande un traitement à l'IA", "Je préviens mon soigneur", "Je cours plus pour le détendre"], answer: 2, why: "Une douleur vive avec gonflement demande un professionnel." },
          { q: "Un coéquipier a des vertiges et se sent « pas bien » après un choc à la tête. Que doit-il se passer ?", options: ["Il continue de jouer", "Il fait une courte pause et revient", "Il demande à une application", "Il arrête de jouer et prévient le staff"], answer: 3, why: "Commotion possible : arrêter et prévenir un entraîneur ou un soigneur." },
          { q: "Qui doit vérifier votre plan de récupération préparé avec l'IA ?", options: ["Une section de commentaires au hasard", "Un diététicien, un soigneur ou un médecin", "L'IA, encore une fois", "Personne"], answer: 1, why: "Un professionnel peut adapter le plan à votre corps et à votre sport." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : Nutrition et récupération avec l'IA",
    questions: [
      { q: "Quel aliment est surtout une protéine ?", options: ["Le riz", "Les pommes", "Les œufs", "Le pain"], answer: 2, why: "Les œufs sont un aliment protéiné." },
      { q: "Les trois parties principales d'une assiette équilibrée sont :", options: ["Glucides, protéines, fruits et légumes", "Bonbons, sodas, chips", "Seulement des protéines", "Seulement des légumes"], answer: 0, why: "Ces trois parties couvrent l'énergie, la réparation et les vitamines." },
      { q: "Les jours d'entraînement dur demandent en général :", options: ["Plus de carburant", "De sauter des repas", "Pas d'eau", "Seulement des collations"], answer: 0, why: "Plus d'entraînement veut en général dire plus d'énergie nécessaire." },
      { q: "La nourriture ou l'image de votre corps vous stresse. Vous devez :", options: ["Arrêter de manger", "Le cacher", "En parler à une personne de confiance et à votre soigneur ou médecin", "Demander un régime à l'IA"], answer: 2, why: "Ces inquiétudes méritent un vrai soutien." },
      { q: "Le jour du match, choisissez :", options: ["Un aliment tout nouveau", "Des aliments habituels", "Rien de la journée", "Un nouveau complément"], answer: 1, why: "Les aliments habituels sont les plus sûrs." },
      { q: "Quand faut-il boire de l'eau ?", options: ["Seulement pendant le match", "Jamais avant les matchs", "Seulement quand on vous le dit", "Toute la journée, davantage quand il fait chaud"], answer: 3, why: "L'hydratation est une habitude de toute la journée." },
      { q: "Lequel peut montrer qu'il vous faut plus de liquide ?", options: ["Se sentir reposé", "Avoir les idées claires", "Des urines foncées et un mal de tête", "Bien dormir"], answer: 2, why: "Urines foncées, maux de tête et crampes peuvent signaler un manque de liquide." },
      { q: "Après un entraînement dur, une collation de récupération contient :", options: ["Seulement de l'eau", "Seulement des bonbons", "Rien", "Des glucides et des protéines"], answer: 3, why: "Les glucides refont le plein d'énergie ; les protéines aident à réparer." },
      { q: "Que donner à l'IA pour obtenir des idées de repas utiles ?", options: ["Votre emploi du temps, votre budget et votre cuisine", "Votre dossier médical", "Votre mot de passe", "Votre carte bancaire"], answer: 0, why: "Ces détails adaptent les idées à votre vie." },
      { q: "Que ne faut-il PAS demander à l'IA ?", options: ["Des recettes au micro-ondes", "Un objectif calorique pour perdre du poids", "Une liste de courses", "Des idées de repas avec des haricots"], answer: 1, why: "Les objectifs caloriques dépendent de votre santé ; demandez à un diététicien." },
      { q: "Comment parler d'une allergie alimentaire à l'IA ?", options: ["En collant votre dossier médical", "En tapant les notes de votre médecin", "Avec des mots généraux, comme « pas d'arachides »", "Ne pas en parler"], answer: 2, why: "Des mots généraux donnent des idées sûres sans partager de dossier." },
      { q: "Après que l'IA a fait une liste de courses, vous devez :", options: ["Vérifier les prix dans votre magasin", "Faire confiance aux prix", "Tout acheter en double", "La publier"], answer: 0, why: "L'IA ne peut pas connaître les vrais prix de votre magasin." },
      { q: "Les compléments alimentaires sont risqués parce que :", options: ["Ils sont toujours illégaux", "Ils sont gratuits", "Les entraîneurs les vendent", "Ils ne sont pas contrôlés par la FDA avant la vente et certains contiennent des substances interdites"], answer: 3, why: "L'USADA (agence antidopage américaine) met en garde contre les compléments contaminés ou mal étiquetés." },
      { q: "Qu'est-ce qui aide à s'endormir ?", options: ["La caféine tard le soir", "Une chambre fraîche et sombre", "Faire défiler son téléphone au lit", "Une heure de coucher différente chaque soir"], answer: 1, why: "Une chambre fraîche et sombre favorise le sommeil." },
      { q: "Vous êtes toujours épuisé, même après avoir dormi. Vous devez :", options: ["Boire plus de boissons énergisantes", "En parler à votre médecin", "L'ignorer", "Vous entraîner plus dur"], answer: 1, why: "Un épuisement qui dure est une raison de voir un médecin." },
      { q: "Les jours de repos sont :", options: ["De la paresse", "Interdits", "Seulement pour les blessés", "Une partie de l'entraînement"], answer: 3, why: "Votre corps s'adapte et se renforce les jours de repos." },
      { q: "Lequel ressemble à des courbatures normales ?", options: ["Une fatigue musculaire sourde qui passe en un ou deux jours", "Une douleur vive dans une articulation", "Un gonflement et une boiterie", "Une douleur qui ne cesse d'empirer"], answer: 0, why: "Les courbatures normales sont sourdes et passent." },
      { q: "Où apprendre gratuitement les signes d'une commotion ?", options: ["Dans un mème au hasard", "Dans une publicité pour une boisson sportive", "Avec CDC HEADS UP", "Nulle part"], answer: 2, why: "Les CDC proposent la formation gratuite HEADS UP." },
      { q: "Avant de coller votre plan dans une IA, retirez :", options: ["Les horaires d'entraînement", "Votre budget", "Vos plats préférés", "Les détails de santé privés"], answer: 3, why: "Les détails de santé restent privés." },
      { q: "Le plan à suivre est :", options: ["Le premier brouillon de l'IA", "Celui corrigé avec un diététicien, un soigneur ou un médecin", "Le plan d'un influenceur", "Le plan de votre rival"], answer: 1, why: "Un professionnel adapte le plan à vous." }
    ]
  }
};
