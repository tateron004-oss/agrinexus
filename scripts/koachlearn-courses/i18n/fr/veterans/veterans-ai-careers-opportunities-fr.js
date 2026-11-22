"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-careers-opportunities.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-careers-opportunities-fr",
  lang: "fr",
  translationOf: "veterans-ai-careers-opportunities",
  category: "Veterans (military)",
  name: "Carrières d'avenir et opportunités de l'IA",
  skills: "Relier les emplois militaires aux carrières civiles, Repérer les carrières en croissance liées à l'IA, Comparer des carrières avec des données officielles, Trouver des formations et des aides, Construire un plan de carrière sur 90 jours",
  outcome: "faire une courte liste de trois carrières civiles qui correspondent à votre expérience militaire, comparer leur salaire, leur croissance et leur formation avec des données officielles, et écrire un plan sur 90 jours pour vous lancer dans la meilleure.",
  about: [
    "Ce cours s'adresse aux anciens militaires (vétérans) et aux militaires en transition qui choisissent la suite. Beaucoup de carrières se développent grâce à l'IA, et beaucoup demandent exactement ce que vous avez appris en service : discipline, compétences techniques, leadership et travail sous pression.",
    "Vous relierez votre emploi militaire à des carrières civiles avec les outils officiels du ministère du Travail des États-Unis, vous utiliserez un assistant d'IA pour les explorer et les comparer, vous vérifierez chaque chiffre avec des données officielles, et vous trouverez des formations qui peuvent être payées grâce à vos droits.",
    "Chaque leçon dure environ cinq minutes : lisez, regardez les diapositives, puis faites l'activité \"Essayez maintenant\". Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours.",
    "Les programmes et sites officiels cités sont ceux des États-Unis. Si vous avez servi dans un autre pays, cherchez les services officiels de reconversion des militaires de votre pays."
  ],
  finalTask: "Écrivez un plan de carrière d'une page : trois carrières civiles qui correspondent à votre emploi militaire (d'après le Military Crosswalk d'O*NET ou CareerOneStop), chacune avec son salaire médian et ses perspectives d'après l'Occupational Outlook Handbook et l'écart de compétences à combler, puis choisissez une carrière et listez trois étapes datées pour les 90 prochains jours, dont une option de formation ou d'aide.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans et des militaires en transition qui choisissent la carrière civile à suivre. Beaucoup ont une expérience technique, logistique ou de commandement, mais ne savent pas quelles carrières sont en croissance ni comment leur service s'y rattache.",
    startingPoint: "Ils savent utiliser un smartphone ou un ordinateur et faire des recherches sur le web. Certains ont essayé un assistant d'IA. Ils n'ont pas encore comparé des carrières avec des données officielles ni écrit un plan daté.",
    gap: "Choisir une carrière à partir de suppositions ou des seules réponses de l'IA peut faire perdre des mois et des droits. Les apprenants doivent relier leur emploi militaire à des carrières civiles avec des outils officiels, comparer le salaire, les perspectives et la formation avec des données officielles, et s'engager dans un plan court et daté.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; aucune formation technique supposée",
      "Appareils : un smartphone ou un ordinateur avec internet, parfois un ordinateur partagé de la base ou de la bibliothèque",
      "Temps : des leçons d'environ 5 minutes qui s'intègrent entre les rendez-vous de transition et le travail",
      "Les salaires, les conditions d'éligibilité et les règles des programmes changent : les apprenants vérifient bls.gov/ooh, va.gov et dol.gov au lieu de croire les chiffres de l'IA",
      "Vie privée : aucun numéro de sécurité sociale, de dossier VA ou de matricule dans une demande à l'IA"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et au monde du travail de demain »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des domaines qui se développent avec l'IA", action: "repérer les domaines en croissance qui correspondent à votre expérience militaire", standard: "en en nommant au moins deux, avec une raison tirée de votre service" },
    { id: "O2", condition: "À partir de votre MOS, rating ou AFSC", action: "utiliser le Military Crosswalk d'O*NET et CareerOneStop pour lister des métiers civils qui correspondent à votre emploi militaire", standard: "avec au moins cinq métiers correspondants" },
    { id: "O3", condition: "Pour une carrière de votre liste", action: "utiliser un assistant d'IA pour décrire le travail quotidien, les compétences et la voie d'accès de cette carrière, et marquer chaque fait à vérifier", standard: "en marquant chaque chiffre, certification et exigence" },
    { id: "O4", condition: "Pour trois carrières", action: "comparer leur salaire médian, leurs perspectives d'emploi et le niveau d'études demandé avec l'Occupational Outlook Handbook", standard: "avec chaque chiffre tiré de bls.gov/ooh, pas de l'IA" },
    { id: "O5", condition: "Pour la carrière que vous choisissez", action: "trouver une option de formation et un programme officiel qui pourrait aider à la payer", standard: "avec une règle d'éligibilité copiée de la page officielle du programme" },
    { id: "O6", condition: "À partir de votre comparaison et de votre choix de formation", action: "écrire un plan de carrière sur 90 jours avec trois étapes datées", standard: "avec chaque étape précise, datée et comprenant une option de formation ou d'aide" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Où sont les opportunités",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les carrières qui grandissent avec l'IA",
          minutes: 5,
          goal: "Citer quatre types de carrières qui grandissent avec l'IA et dire lesquelles correspondent à votre expérience.",
          text: [
            "L'IA ne crée pas seulement des emplois pour les programmeurs. Elle change le travail dans beaucoup de domaines, et elle crée un besoin de personnes capables de faire tourner, protéger, réparer et superviser les systèmes qui l'entourent.",
            "Les domaines où les vétérans ont souvent leur place : la cybersécurité (protéger les réseaux et les données), le support informatique et les données (faire tourner les systèmes et les données), la logistique et la chaîne d'approvisionnement (planifier, prévoir, déplacer les marchandises), la maintenance qualifiée et les métiers de technicien (équipement, énergie, aviation, électronique), et la gestion de projets et des opérations (diriger les personnes et les plans).",
            "Beaucoup de ces emplois demandent encore des mains, du jugement et de la confiance. Un spécialiste en logistique qui sait lire une prévision faite par l'IA puis décider quoi commander vaut plus qu'un autre qui ne le sait pas."
          ],
          words: [["Cybersécurité", "protéger les ordinateurs, les réseaux et les données contre les attaques."], ["Chaîne d'approvisionnement", "toutes les étapes qui amènent les produits du fabricant à l'utilisateur."]],
          slides: [
            { title: "L'IA crée des besoins au-delà du code", bullets: ["Des gens qui font tourner, protègent, réparent, supervisent", "Des gens qui utilisent l'IA et décident quand même"] },
            { title: "Domaines où les vétérans ont leur place", bullets: ["Cybersécurité et support informatique", "Logistique et chaîne d'approvisionnement", "Maintenance qualifiée et techniciens", "Gestion de projets et des opérations"] },
            { title: "Votre atout", bullets: ["Discipline et compétences techniques", "Leadership sous pression", "Jugement : lire les données, puis décider"] }
          ],
          tryIt: "Écrivez les cinq domaines de cette leçon. À côté de chacun, écrivez une chose que vous avez faite en service qui y correspond, ou \"rien pour l'instant\".",
          youCanNow: "citer des carrières qui grandissent avec l'IA et dire lesquelles correspondent à votre expérience militaire.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi l'IA crée-t-elle une demande de personnel dans certains domaines ?", options: ["L'IA fonctionne toute seule et n'a besoin de personne", "Seuls des robots travaillent maintenant dans ces domaines", "Il faut des personnes pour faire fonctionner, protéger, réparer et superviser les systèmes d'IA", "L'IA a remplacé tous les emplois techniques"], answer: 2, why: "À mesure que l'IA se répand, il faut des personnes pour faire fonctionner, protéger, réparer et superviser les systèmes." },
            { objective: "O1", q: "Pendant votre service, vous avez géré du matériel radio et réseau. Quel domaine en croissance notez-vous à côté ?", options: ["La cybersécurité ou le support informatique", "Aucun, car les compétences radio ne se transfèrent pas", "Seulement l'agriculture", "Seulement des emplois qui ne demandent aucune expérience"], answer: 0, why: "L'expérience des réseaux et du matériel correspond à des domaines en croissance comme le support informatique et la cybersécurité." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Relier votre MOS, rating ou AFSC à des emplois civils",
          minutes: 5,
          goal: "Utiliser des outils officiels de correspondance pour lister les emplois civils qui correspondent à votre emploi militaire.",
          text: [
            "Ne partez pas d'une supposition. Partez de la correspondance officielle. O*NET OnLine, du ministère du Travail des États-Unis, a un outil appelé Military Crosswalk Search : choisissez votre armée, tapez votre code ou intitulé (par exemple un MOS de l'Army ou des Marines, un rating de la Navy ou des garde-côtes, un AFSC de l'Air Force ou un SFSC de la Space Force), et voyez les métiers civils correspondants.",
            "La page Find a Job pour les vétérans du ministère du Travail renvoie aussi vers le Veterans Job Matcher de CareerOneStop, qui relie les emplois militaires aux carrières civiles. Utilisez les deux et gardez les emplois qui apparaissent plus d'une fois.",
            "Puis utilisez un assistant d'IA pour comprendre la liste : \"Explique ces trois emplois avec des mots simples, à quoi ressemble une journée normale, et lesquelles de mes compétences sont transférables. J'ai été spécialiste en logistique dans la Navy pendant 8 ans.\""
          ],
          steps: ["Ouvrez le Military Crosswalk Search d'O*NET.", "Choisissez votre armée et tapez votre code ou intitulé.", "Notez les emplois civils correspondants.", "Recommencez dans le Veterans Job Matcher de CareerOneStop.", "Demandez à un assistant d'IA d'expliquer les emplois présents sur les deux listes."],
          words: [["Crosswalk (table de correspondance)", "un outil qui relie un emploi militaire à des emplois civils."], ["Métier", "un type d'emploi, comme logisticien ou administrateur réseau."]],
          slides: [
            { title: "Partez de la correspondance officielle", bullets: ["Military Crosswalk Search d'O*NET", "Choisissez l'armée, tapez code ou intitulé", "Voyez les métiers civils correspondants"] },
            { title: "Recoupez", bullets: ["Veterans Job Matcher de CareerOneStop", "Gardez les emplois présents sur les deux listes"] },
            { title: "Puis demandez à l'IA d'expliquer", bullets: ["Le métier en mots simples", "À quoi ressemble une journée normale", "Quelles compétences sont transférables"] }
          ],
          sources: [{ name: "O*NET OnLine : Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "Ministère du Travail des États-Unis (VETS) : trouver un emploi", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Cherchez votre emploi militaire dans le Military Crosswalk d'O*NET. Choisissez cinq emplois civils correspondants, puis demandez à un assistant d'IA d'expliquer chacun en deux phrases simples.",
          youCanNow: "utiliser des outils officiels de correspondance et un assistant d'IA pour lister et comprendre les emplois civils qui correspondent à votre service.",
          quickCheck: [
            { objective: "O2", q: "Que vous donne le Military Crosswalk d'O*NET ?", options: ["Votre taux d'invalidité VA", "Des métiers civils qui correspondent à votre code ou intitulé d'emploi militaire", "Une liste d'offres d'emploi près de chez vous", "Votre solde du GI Bill"], answer: 1, why: "Le Crosswalk relie les codes et intitulés d'emplois militaires à des métiers civils." },
            { objective: "O2", q: "Vous avez trouvé cinq métiers correspondants, mais certains noms ne sont pas clairs. Que faites-vous ?", options: ["Écarter tous les métiers au nom peu clair", "Choisir celui qui a le nom le plus long", "Deviner ce qu'est chaque métier", "Demander à un assistant d'IA d'expliquer chacun en deux phrases simples"], answer: 3, why: "L'IA est utile pour expliquer un métier en mots simples une fois que les outils officiels vous ont donné la liste." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Explorer une carrière avec un assistant d'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour décrire le travail quotidien, les compétences et la voie d'accès d'une carrière, et marquer ce qu'il faut vérifier.",
          text: [
            "Un assistant d'IA est un bon partenaire de recherche pour un premier regard. Demandez-lui de décrire une journée dans le métier, les principales compétences, les outils habituels, les intitulés de postes de débutant et les questions à poser à quelqu'un qui fait ce métier.",
            "Utilisez une demande claire. Exemple : \"Je suis un vétéran de l'Air Force avec 6 ans en maintenance aéronautique. Explique le métier de technicien d'éoliennes : une journée type, les 5 principales compétences, lesquelles de mes compétences sont transférables, et la voie d'accès habituelle. Utilise des points courts.\"",
            "Marquez d'un point d'interrogation chaque fait qui peut changer, comme le salaire, le nom des certifications et les conditions. Vous les vérifierez au prochain chapitre."
          ],
          steps: ["Choisissez un emploi de votre liste.", "Demandez une journée type, les principales compétences, les compétences transférables et la voie d'accès.", "Demandez : \"Quelles questions devrais-je poser à quelqu'un qui fait ce métier ?\"", "Mettez un point d'interrogation à côté du salaire, des certifications et des conditions."],
          words: [["Voie d'accès", "la façon habituelle d'entrer dans un métier : formation, certification, apprentissage ou diplôme."], ["Compétence transférable", "une compétence d'un emploi qui sert dans un autre."]],
          slides: [
            { title: "Demandez un premier regard à l'IA", bullets: ["Une journée type", "Principales compétences et outils", "Vos compétences transférables", "La voie d'accès habituelle"] },
            { title: "Exemple de demande", bullets: ["Maintenance aéronautique Air Force, 6 ans", "Explique technicien d'éoliennes", "Journée, 5 compétences, transferts, voie d'accès"] },
            { title: "Marquez ce qui peut changer", bullets: ["Le salaire", "Noms et règles des certifications", "Mettez un ? pour vérifier plus tard"] }
          ],
          tryIt: "Demandez à un assistant d'IA de décrire une carrière de votre liste avec l'exemple de demande. Mettez un point d'interrogation à côté de chaque chiffre, certification ou condition de la réponse.",
          youCanNow: "utiliser un assistant d'IA pour explorer une carrière et marquer les faits à vérifier.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une voie d'accès ?", options: ["La façon habituelle d'entrer dans un métier", "La porte d'entrée d'une entreprise", "Le salaire d'un employé en première année", "La dernière étape avant la retraite"], answer: 0, why: "Une voie d'accès, c'est le chemin habituel vers un métier, comme une formation, une certification ou un apprentissage." },
            { objective: "O3", q: "L'IA dit qu'une carrière « exige une certification Security+ ». Que faites-vous ?", options: ["S'inscrire tout de suite à l'examen", "Ignorer toute la réponse", "Mettre un point d'interrogation à côté et vérifier avec une source officielle", "Le copier dans votre plan comme un fait"], answer: 2, why: "Les certifications et les exigences sont des faits à vérifier, pas à croire sur parole de l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Où sont les opportunités",
        questions: [
          { objective: "O1", q: "Lequel est un domaine où l'IA augmente le besoin de personnel ?", options: ["La cybersécurité", "Seulement les jeux vidéo", "Seulement la programmation", "Aucun, l'IA supprime tous les emplois"], answer: 0, why: "L'IA crée un besoin de personnes qui protègent, font tourner et supervisent les systèmes, comme en cybersécurité." },
          { objective: "O2", q: "Quel est le meilleur point de DÉPART pour relier votre MOS à des emplois civils ?", options: ["La supposition d'un ami", "Le Military Crosswalk d'O*NET", "Une offre d'emploi au hasard", "Une publication sur un réseau social"], answer: 1, why: "La table officielle relie votre code militaire à des métiers civils." },
          { objective: "O2", q: "O*NET et CareerOneStop vous donnent des listes différentes. Quel est le bon réflexe ?", options: ["Ignorer les deux", "Prendre la liste la plus courte", "Garder les emplois présents sur les deux", "Demander à l'IA de choisir pour vous"], answer: 2, why: "Les emplois présents sur les deux listes officielles correspondent bien." },
          { objective: "O3", q: "Une réponse de l'IA dit qu'un emploi paie 95 000 dollars. Que faites-vous ?", options: ["Arrêter de chercher, vous avez trouvé", "Le publier en ligne", "Le croire parce que c'est précis", "Mettre un point d'interrogation et vérifier avec des données officielles"], answer: 3, why: "Le salaire peut être faux ou dépassé, donc il faut le vérifier." },
          { objective: "O3", q: "Qu'est-ce qu'une compétence transférable ?", options: ["Une compétence d'un emploi qui sert dans un autre", "Une compétence qu'on peut vendre", "Une compétence réservée aux officiers", "Une compétence que l'IA fait pour vous"], answer: 0, why: "Les compétences transférables se gardent d'un emploi à l'autre, comme diriger une équipe ou gérer un stock." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Choisir et planifier votre parcours",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comparer des carrières avec des données officielles",
          minutes: 5,
          goal: "Comparer le salaire, les perspectives et le niveau d'études d'entrée de trois carrières avec l'Occupational Outlook Handbook.",
          text: [
            "L'Occupational Outlook Handbook du Bureau des statistiques du travail des États-Unis (bls.gov/ooh) est gratuit et officiel. Pour chaque métier, il donne le salaire médian, le niveau d'études habituellement demandé, la formation en poste et les perspectives d'emploi : à quelle vitesse le nombre d'emplois devrait augmenter ou baisser.",
            "Faites un tableau simple avec vos trois carrières en lignes et ces colonnes : salaire médian, études d'entrée, formation, perspectives d'emploi et votre écart de compétences. Un assistant d'IA peut construire le tableau vide ; vous remplissez les chiffres à partir du Handbook.",
            "Le salaire médian est le point du milieu : la moitié des travailleurs gagnent plus, l'autre moitié gagnent moins. Le salaire change aussi selon le lieu : utilisez-le pour comparer des carrières, pas comme une promesse."
          ],
          steps: ["Allez sur bls.gov/ooh et cherchez chaque carrière.", "Notez le salaire médian, les études d'entrée, la formation et les perspectives.", "Écrivez votre écart de compétences : ce qui vous manque encore.", "Mettez tout dans un seul tableau."],
          words: [["Salaire médian", "le salaire du milieu : la moitié des travailleurs gagnent plus et l'autre moitié moins."], ["Perspectives d'emploi", "à quel point le nombre d'emplois devrait augmenter ou baisser."], ["Écart de compétences", "les compétences ou diplômes qui vous manquent encore pour un emploi."]],
          slides: [
            { title: "La source officielle", bullets: ["Occupational Outlook Handbook : bls.gov/ooh", "Gratuit, du Bureau des statistiques du travail"] },
            { title: "Ce qu'il faut noter", bullets: ["Salaire médian", "Études d'entrée et formation", "Perspectives d'emploi", "Votre écart de compétences"] },
            { title: "Bien le lire", bullets: ["Médiane = point du milieu", "Le salaire change selon le lieu", "Pour comparer, pas comme une promesse"] }
          ],
          sources: [{ name: "Bureau des statistiques du travail : Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Demandez à un assistant d'IA un tableau de comparaison vide avec vos trois carrières et les colonnes de cette leçon. Remplissez vous-même les chiffres à partir de bls.gov/ooh.",
          youCanNow: "comparer des carrières avec des données officielles sur le salaire, les études et les perspectives.",
          quickCheck: [
            { objective: "O4", q: "D'où viennent les chiffres de votre tableau de comparaison ?", options: ["De la réponse de l'assistant d'IA", "De la supposition d'un ami", "D'une offre d'emploi d'une seule entreprise", "De l'Occupational Outlook Handbook sur bls.gov/ooh"], answer: 3, why: "L'IA peut construire le tableau vide, mais les chiffres de salaire et de perspectives viennent de données officielles." },
            { objective: "O4", q: "Une carrière paie mieux mais croît lentement ; une autre paie un peu moins et croît vite. Que faites-vous ?", options: ["Toujours choisir le meilleur salaire", "Comparer ensemble le salaire, les perspectives et la formation, avec ce qui vous convient", "Choisir celle au nom le plus court", "Laisser l'IA choisir pour vous"], answer: 1, why: "Comparer plusieurs colonnes ensemble, plus ce qui vous convient, donne un meilleur choix qu'un seul chiffre." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Trouver des formations et les aides qui les paient",
          minutes: 5,
          goal: "Trouver une option de formation pour la carrière choisie et un programme officiel qui peut aider à la payer.",
          text: [
            "Plusieurs programmes officiels peuvent aider. Le GI Bill peut payer beaucoup d'écoles et de formations ; le GI Bill Comparison Tool de la VA (l'administration américaine des anciens combattants) aide à les comparer. VET TEC 2.0 paie certaines formations en haute technologie non diplômantes (programmation, données, sciences de l'information) pour les vétérans et militaires éligibles, avec un nombre de places limité chaque année.",
            "Encore en uniforme ? DoD SkillBridge permet aux militaires de se former chez un partenaire de l'industrie pendant leurs 180 derniers jours de service, avec l'accord du commandement. Les apprentissages permettent d'être payé en apprenant. Les American Job Centers du ministère du Travail (trouvez-en un sur CareerOneStop) donnent la priorité aux vétérans pour la formation professionnelle.",
            "Les règles d'éligibilité changent. Demandez à l'IA de lister les options, puis confirmez chacune sur va.gov, dol.gov ou avec un conseiller avant de compter dessus. Le programme Personalized Career Planning and Guidance de la VA offre un conseil gratuit aux vétérans éligibles."
          ],
          steps: ["Nommez la formation dont votre carrière a besoin (certification, cours, apprentissage).", "Vérifiez les options du GI Bill avec le GI Bill Comparison Tool.", "Si c'est une carrière dans la technologie, lisez la page de VET TEC 2.0.", "Encore en service ? Demandez à votre bureau de transition pour SkillBridge.", "Confirmez l'éligibilité sur va.gov ou avec un conseiller."],
          words: [["GI Bill", "les aides de la VA pour les études des vétérans et des militaires."], ["SkillBridge", "un programme du ministère de la Défense pour se former chez un partenaire de l'industrie pendant les 180 derniers jours de service."], ["Apprentissage", "un emploi payé avec une formation organisée : vous gagnez de l'argent en apprenant."]],
          slides: [
            { title: "Programmes qui peuvent aider", bullets: ["GI Bill et GI Bill Comparison Tool", "VET TEC 2.0 pour la haute technologie", "Apprentissages : payé en apprenant"] },
            { title: "Encore en service ?", bullets: ["DoD SkillBridge : 180 derniers jours de service", "Demande l'accord du commandement"] },
            { title: "Confirmez avant de compter dessus", bullets: ["Les règles et les places changent", "Vérifiez sur va.gov et dol.gov", "Le conseil gratuit de la VA peut aider"] }
          ],
          sources: [
            { name: "VA : les aides du GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/" },
            { name: "VA : VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Ministère du Travail des États-Unis (VETS) : trouver un emploi (SkillBridge, American Job Centers)", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA : Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Pour votre carrière préférée, écrivez une option de formation et un programme qui peut aider à la payer. Ouvrez la page officielle de ce programme et notez une règle d'éligibilité.",
          youCanNow: "trouver une formation pour une carrière et un programme officiel qui peut aider à la payer, et confirmer les règles.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un apprentissage ?", options: ["Une école qui n'enseigne qu'en ligne", "Un prêt à rembourser", "Un emploi payé où vous vous formez et gagnez de l'argent en même temps", "Un examen qu'on passe une seule fois"], answer: 2, why: "Un apprentissage vous permet de gagner de l'argent pendant que vous apprenez." },
            { objective: "O5", q: "Vous avez trouvé un programme qui pourrait payer votre formation. Que vérifiez-vous avant de compter dessus ?", options: ["Une règle d'éligibilité sur la page officielle du programme", "Si un ami l'a utilisé", "Si l'IA a dit que vous y avez droit", "Rien ; tous les vétérans y ont droit"], answer: 0, why: "Les règles d'éligibilité sont sur la page officielle ; l'IA et les amis peuvent se tromper." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Écrire votre plan de carrière sur 90 jours",
          minutes: 5,
          goal: "Écrire un plan sur 90 jours avec trois étapes datées vers une carrière choisie.",
          text: [
            "Vous savez planifier une mission à rebours à partir de l'objectif. Faites la même chose ici. Choisissez une carrière de votre tableau, puis planifiez à rebours : qu'est-ce qui doit être vrai dans 90 jours, 60 jours et 30 jours ?",
            "Les bonnes étapes sont précises et datées : \"D'ici le 15 novembre : parler à une personne qui travaille comme logisticien.\" \"D'ici le 1er décembre : m'inscrire à la formation.\" \"D'ici le 15 janvier : postuler à cinq emplois.\" Les étapes vagues comme \"me renseigner\" ne se font pas.",
            "Un assistant d'IA peut transformer vos notes en plan propre et proposer des étapes oubliées. C'est vous qui fixez les dates et qui portez le plan. Partagez-le avec un mentor, un conseiller ou quelqu'un du TAP ou d'un American Job Center qui pourra vous suivre."
          ],
          steps: ["Choisissez une carrière de votre tableau de comparaison.", "Écrivez ce qui doit être vrai dans 90 jours.", "Planifiez à rebours : étapes à 60 jours et à 30 jours.", "Rendez chaque étape précise et datée.", "Demandez à l'IA de le mettre en forme et de proposer ce qui manque.", "Partagez-le avec quelqu'un qui vous suivra."],
          words: [["Planification à rebours", "partir de l'objectif et remonter jusqu'à aujourd'hui."], ["Jalon", "un point de contrôle qui montre que vous êtes sur la bonne voie."]],
          slides: [
            { title: "Planifiez à rebours depuis l'objectif", bullets: ["90 jours : l'objectif", "60 et 30 jours : les jalons", "Aujourd'hui : la première étape"] },
            { title: "Précis et daté", bullets: ["\"D'ici le 15 nov. : parler à un logisticien\"", "\"D'ici le 1er déc. : m'inscrire à la formation\"", "Pas : \"me renseigner\""] },
            { title: "Portez le plan", bullets: ["L'IA met en forme et propose", "Vous fixez les dates", "Partagez-le avec un mentor ou un conseiller"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan de carrière d'une page avec trois carrières, leur salaire et leurs perspectives d'après bls.gov/ooh, vos écarts de compétences, la carrière choisie et trois étapes datées pour les 90 prochains jours, dont une option de formation ou d'aide.",
          youCanNow: "transformer vos recherches de carrière en plan daté sur 90 jours que vous pouvez suivre.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire planifier à rebours ?", options: ["Faire vos étapes dans n'importe quel ordre", "Partir de votre objectif et remonter jusqu'à aujourd'hui", "Planifier seulement le passé", "Laisser quelqu'un d'autre fixer vos dates"], answer: 1, why: "Planifier à rebours, c'est partir de l'objectif et remonter jusqu'aux étapes à faire maintenant." },
            { objective: "O6", q: "Quelle est la meilleure étape pour votre plan sur 90 jours ?", options: ["« Penser à l'informatique un jour »", "« Me renseigner sur des trucs »", "« Trouver un bon emploi »", "« D'ici le 15 janvier : finir le module 1 du cours gratuit de support informatique »"], answer: 3, why: "Une bonne étape est précise et a une date que vous fixez." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Choisir et planifier votre parcours",
        questions: [
          { objective: "O4", q: "Quelle source officielle donne le salaire médian et les perspectives des métiers civils ?", options: ["Une offre d'emploi", "L'Occupational Outlook Handbook", "La première réponse de votre IA", "Un titre d'actualité"], answer: 1, why: "L'Occupational Outlook Handbook du Bureau des statistiques du travail donne les salaires et les perspectives officiels." },
          { objective: "O4", q: "Que veut dire salaire médian ?", options: ["Le salaire le plus haut", "Le salaire de départ", "Le point du milieu : la moitié gagne plus, l'autre moins", "Le salaire après impôts"], answer: 2, why: "La médiane est le milieu des salaires de tous les travailleurs." },
          { objective: "O5", q: "Vous êtes encore en service actif avec 5 mois restants. Quel programme pourrait vous permettre de vous former dans une entreprise ?", options: ["L'Occupational Outlook Handbook", "Le Military Crosswalk", "Google Gemini", "DoD SkillBridge"], answer: 3, why: "SkillBridge permet aux militaires de se former chez un partenaire de l'industrie pendant leurs 180 derniers jours." },
          { objective: "O5", q: "Une IA dit que vous avez droit à une aide pour une formation. Que faites-vous ?", options: ["Le confirmer sur va.gov ou avec un conseiller", "Vous inscrire tout de suite", "Ignorer toutes les aides", "Payer un site pour vérifier"], answer: 0, why: "Les règles d'éligibilité changent ; confirmez avec la source officielle." },
          { objective: "O6", q: "Quelle est la meilleure étape d'un plan sur 90 jours ?", options: ["\"Me renseigner sur des emplois\"", "\"Penser à une formation\"", "\"D'ici le 1er déc. : m'inscrire à la formation en support informatique\"", "\"Me certifier un jour\""], answer: 2, why: "Les bonnes étapes sont précises et datées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Carrières d'avenir et opportunités de l'IA",
    questions: [
      { objective: "O1", q: "L'IA augmente le besoin de personnes capables de :", options: ["Faire tourner, protéger, réparer et superviser des systèmes", "Éviter les ordinateurs", "Seulement écrire du code", "Ne rien faire"], answer: 0, why: "Beaucoup d'emplois liés à l'IA demandent des gens autour des systèmes, pas seulement des programmeurs." },
      { objective: "O1", q: "Quel domaine protège les réseaux et les données contre les attaques ?", options: ["La chaîne d'approvisionnement", "La cybersécurité", "Le commerce de détail", "La restauration"], answer: 1, why: "La cybersécurité protège les ordinateurs, les réseaux et les données." },
      { objective: "O1", q: "Un spécialiste en logistique qui sait lire une prévision de l'IA puis décider est :", options: ["Plus nécessaire du tout", "Remplacé par la prévision", "Plus précieux", "Utile seulement dans l'armée"], answer: 2, why: "Le jugement en plus de ce que produit l'IA, c'est ce que veulent les employeurs." },
      { objective: "O2", q: "Le Military Crosswalk d'O*NET permet de chercher par :", options: ["Votre numéro de sécurité sociale", "Votre banque", "Votre adresse", "Armée et code ou intitulé d'emploi militaire"], answer: 3, why: "Vous choisissez votre armée et entrez votre MOS, rating, AFSC ou SFSC." },
      { objective: "O2", q: "Le Veterans Job Matcher de CareerOneStop est accessible depuis :", options: ["La page Find a Job pour les vétérans du ministère du Travail", "Une publicité", "Un groupe sur un réseau social", "Le bulletin de votre ancienne unité"], answer: 0, why: "La page Find a Job de DOL VETS renvoie vers lui." },
      { objective: "O2", q: "Quand deux listes officielles ne sont pas d'accord, un bon choix est de :", options: ["N'utiliser aucune des deux", "Garder les emplois présents sur les deux", "Choisir le premier emploi par ordre alphabétique", "Demander à un inconnu"], answer: 1, why: "Ce qui se recoupe montre une bonne correspondance." },
      { objective: "O3", q: "Une bonne demande à l'IA pour explorer une carrière demande :", options: ["Votre mot de passe", "Seulement le salaire", "Une journée type, les principales compétences, les compétences transférables et la voie d'accès", "Un seul mot"], answer: 2, why: "Ces détails vous aident à juger si la carrière vous convient." },
      { objective: "O3", q: "Quels faits d'une réponse de l'IA sur une carrière faut-il marquer pour vérification ?", options: ["Seulement le nom du métier", "La formule de politesse", "Rien", "Le salaire, les certifications et les conditions"], answer: 3, why: "Ces faits changent et l'IA peut se tromper." },
      { objective: "O3", q: "Une \"voie d'accès\", c'est :", options: ["La façon habituelle d'entrer dans un métier", "L'entrée d'un bâtiment", "La connexion à un site", "Un grade militaire"], answer: 0, why: "C'est la formation, la certification, l'apprentissage ou le diplôme qui mène à un métier." },
      { objective: "O4", q: "L'Occupational Outlook Handbook est publié par :", options: ["Une entreprise d'IA", "Le Bureau des statistiques du travail", "Un site d'emploi privé", "La VA"], answer: 1, why: "C'est une ressource du Bureau des statistiques du travail." },
      { objective: "O4", q: "Les perspectives d'emploi vous disent :", options: ["Votre salaire exact", "Où se trouve le bureau", "À quel point le nombre d'emplois devrait augmenter ou baisser", "Qui va vous embaucher"], answer: 2, why: "Les perspectives sont l'évolution prévue du nombre d'emplois." },
      { objective: "O4", q: "Pourquoi utiliser le salaire médian pour comparer, pas comme une promesse ?", options: ["Il est toujours trop haut", "Il est inventé", "Il ne compte que les officiers", "Le salaire change selon le lieu et la personne"], answer: 3, why: "La médiane est un point du milieu ; votre salaire dépend du lieu et de l'expérience." },
      { objective: "O5", q: "Un écart de compétences, c'est :", options: ["Les compétences ou diplômes qui vous manquent encore pour un emploi", "Un trou dans les dates de votre CV", "Une pause entre deux emplois", "Un grade militaire"], answer: 0, why: "Il montre ce qu'il vous reste à apprendre ou à obtenir." },
      { objective: "O5", q: "Quel outil de la VA aide à comparer écoles et programmes pour utiliser le GI Bill ?", options: ["Le Crosswalk d'O*NET", "Le GI Bill Comparison Tool", "SkillBridge", "Le TAP"], answer: 1, why: "Le GI Bill Comparison Tool de la VA aide à comparer les options." },
      { objective: "O5", q: "VET TEC 2.0 paie :", options: ["Des réparations de maison", "Des prêts auto", "Certaines formations en haute technologie non diplômantes pour les vétérans éligibles", "N'importe quel diplôme universitaire"], answer: 2, why: "VET TEC 2.0 couvre certaines formations technologiques non diplômantes." },
      { objective: "O5", q: "Un apprentissage vous permet de :", options: ["Sauter toute formation", "Éviter de travailler", "Avoir un diplôme du jour au lendemain", "Être payé en apprenant"], answer: 3, why: "Les apprentis sont payés pendant leur formation." },
      { objective: "O5", q: "Où les vétérans ont-ils la priorité pour la formation professionnelle ?", options: ["Dans les American Job Centers", "Sur les réseaux sociaux", "Chez un concessionnaire auto", "Dans un magasin de jeux vidéo"], answer: 0, why: "Le ministère du Travail donne la priorité aux vétérans dans les American Job Centers." },
      { objective: "O6", q: "Planifier à rebours, c'est :", options: ["Faire les tâches dans n'importe quel ordre", "Partir de l'objectif et remonter jusqu'à aujourd'hui", "Planifier seulement pour aujourd'hui", "Ne jamais fixer de dates"], answer: 1, why: "Vous planifiez depuis l'objectif vers aujourd'hui, comme pour une mission." },
      { objective: "O6", q: "Dans votre plan sur 90 jours, qui fixe les dates ?", options: ["L'IA", "L'employeur", "Vous", "Personne"], answer: 2, why: "L'IA peut mettre en forme et proposer ; c'est vous qui portez le plan." },
      { objective: "O6", q: "Pourquoi partager votre plan avec un mentor ou un conseiller ?", options: ["Pour qu'il le fasse à votre place", "Pour avoir de l'argent", "La loi l'exige", "Pour que quelqu'un vous suive et vous garde sur la bonne voie"], answer: 3, why: "Rendre des comptes aide à finir ce qu'on a prévu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      7,
      9,
      11,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Carrières correspondantes",
        objective: "O2",
        notYet: "Les carrières ont été devinées ou viennent seulement d'une réponse de l'IA.",
        meets: "Trois carrières qui correspondent à l'emploi militaire, trouvées dans le Military Crosswalk d'O*NET ou CareerOneStop.",
        exceeds: "L'apprenant peut dire quelle compétence de son service correspond à chaque carrière."
      },
      {
        name: "Données officielles",
        objective: "O4",
        notYet: "Le salaire ou les perspectives manquent ou ont été copiés de l'IA.",
        meets: "Chaque carrière a son salaire médian et ses perspectives d'emploi tirés de bls.gov/ooh.",
        exceeds: "Le niveau d'études demandé est aussi indiqué, et l'apprenant explique quelle carrière l'emporte et pourquoi."
      },
      {
        name: "Compétences manquantes",
        objective: "O3",
        notYet: "Aucune compétence manquante n'est indiquée, ou elle est vague.",
        meets: "Chaque carrière indique la compétence ou le diplôme encore nécessaire.",
        exceeds: "Chaque manque est vérifié avec une source officielle ou un employeur."
      },
      {
        name: "Formation ou aide",
        objective: "O5",
        notYet: "Aucune option de formation ou d'aide, ou une option tirée seulement de l'IA.",
        meets: "Une option de formation et un programme qui pourrait aider à payer, avec une règle d'éligibilité tirée de sa page officielle.",
        exceeds: "L'apprenant nomme aussi la personne à qui demander de confirmer l'éligibilité, comme un conseiller de la VA."
      },
      {
        name: "Plan sur 90 jours",
        objective: "O6",
        notYet: "Les étapes sont vagues ou n'ont pas de date.",
        meets: "Trois étapes précises et datées vers une carrière choisie.",
        exceeds: "Le plan nomme un mentor ou un conseiller qui suivra les progrès."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui réalisent au moins une étape de leur plan sur 90 jours dans les 30 jours (enquête de suivi)",
      "Apprenants qui s'inscrivent à une formation, un apprentissage ou SkillBridge dans les 90 jours",
      "Apprenants qui commencent un autre cours Koach Learn pour les vétérans dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Les sites gratuits du Military Crosswalk d'O*NET, de CareerOneStop, bls.gov/ooh et va.gov",
      "Du papier, une application de notes ou un tableur pour le tableau de comparaison et le plan d'une page",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Dans un cours de transition ou un centre pour vétérans : faites le test de départ ensemble, puis un chapitre par séance avec les activités « Essayez maintenant » faites en direct.",
      "Faites remplir les chiffres du tableau de comparaison par les apprenants eux-mêmes à partir de bls.gov/ooh ; n'acceptez pas les chiffres de l'IA.",
      "Invitez un conseiller de la VA, d'un American Job Center ou du TAP à la dernière séance pour revoir les plans et les questions d'éligibilité.",
      "Notez le plan final avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois.",
      "Rappelez aux apprenants de ne jamais mettre de numéro de sécurité sociale, de dossier VA ou de matricule dans une demande à l'IA."
    ]
  }
};
