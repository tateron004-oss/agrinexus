"use strict";

// Koach Learn course (French translation of shared/manufacturing-technician.js). See scripts/koachlearn-courses/README.md, "Translations".

const MSSC_CPT = { name: "MSSC : Certified Production Technician (CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC : modules et cours du CPT 4.0", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA : maîtrise des énergies dangereuses (consignation)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147 : maîtrise des énergies dangereuses (consignation)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA : protection des machines", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212 : exigences générales pour toutes les machines (protecteurs)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "Département du Travail des États-Unis : emplois interdits aux moins de 18 ans", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov : moteur de recherche d'apprentissages (Département du Travail des États-Unis)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician-fr",
  lang: "fr",
  translationOf: "manufacturing-technician",
  category: "Workforce Development",
  name: "Les bases du technicien de production industrielle",
  skills: "Repérer les dangers d'une machine et utiliser la consignation, Mesurer des pièces par rapport à une tolérance, Faire des contrôles qualité et trouver les causes profondes, Utiliser les 5S, le lean et l'entretien quotidien des machines, Préparer le MSSC CPT 4.0",
  outcome: "repérer les dangers d'une machine et choisir la bonne protection, mesurer une pièce et décider si elle est dans la tolérance, noter les défauts et trouver une cause profonde, appliquer les 5S et les vérifications quotidiennes des machines à un poste de travail, et faire un plan daté pour préparer les évaluations du MSSC Certified Production Technician (CPT 4.0) et un premier emploi en production.",
  about: [
    "Les usines fabriquent des voitures, des aliments, des médicaments, des meubles, des pièces en métal et des appareils électroniques, et elles embauchent des ouvriers de production, des opérateurs sur machine et des techniciens. Ce cours s'adresse aux personnes qui cherchent un emploi, aux jeunes adultes, aux anciens militaires, aux personnes qui sortent de prison et à toute personne qui veut commencer une carrière dans un atelier de fabrication.",
    "Vous allez apprendre les quatre domaines sur lesquels reposent le travail de production de premier niveau et le Certified Production Technician (CPT 4.0, technicien de production certifié) du Manufacturing Skill Standards Council (MSSC, conseil américain des normes de compétences en fabrication) : la sécurité, la qualité et la mesure, la production, et les notions de maintenance. Vous allez vous exercer sur papier et avec une règle chez vous.",
    "Important : ce cours vous prépare ; il ne vous donne ni le CPT 4.0 ni aucun autre certificat. Le MSSC fait passer les évaluations et délivre les certifications. Faire fonctionner des machines, faire une consignation et utiliser des outils de précision s'apprennent en personne avec un formateur qualifié ou un formateur de l'entreprise, avec le bon équipement de protection. Ne vous exercez pas seul sur de vraies machines.",
    "Chaque leçon dure environ cinq minutes et se termine par une activité « Essayez maintenant ». Il y a une question rapide après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez un dossier de préparation de technicien de production : une liste des dangers et des protections pour une machine, un relevé de mesures avec la décision dans ou hors tolérance pour cinq pièces d'exercice, des 5 pourquoi pour un défaut d'exercice, un plan 5S et de vérification quotidienne pour un poste de travail, et un plan daté pour préparer les quatre évaluations du CPT 4.0, avec une ligne honnête pour votre CV.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes qui cherchent un emploi d'ouvrier de production, d'opérateur sur machine, d'assembleur ou de technicien : personnes en recherche d'emploi, anciens militaires, personnes qui sortent de prison, immigrés et jeunes qui finissent l'école. Certains ont travaillé dans des entrepôts ou sur des chaînes de montage ; la plupart n'ont pas étudié la fabrication.",
    startingPoint: "Savent suivre des étapes écrites et faire des calculs simples avec des nombres entiers. La plupart n'ont jamais utilisé un pied à coulisse, lu une tolérance, utilisé la consignation, ni entendu parler des 5S, du lean ou de l'analyse des causes profondes. Beaucoup ne savent pas qu'il existe une certification reconnue par l'industrie pour le travail de production de premier niveau.",
    gap: "Les employeurs veulent de nouveaux employés qui travaillent en sécurité près des machines, mesurent avec précision, repèrent les mauvaises pièces et gardent leur poste en ordre. Les blessures causées par les machines peuvent être graves, comme les amputations : les habitudes de sécurité passent donc en premier. Les apprenants ont besoin de ces connaissances, et d'un chemin clair vers une certification reconnue comme le MSSC CPT 4.0, pour obtenir des emplois en production et des apprentissages.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le MSSC recommande environ un niveau de mathématiques de 9e année et de lecture de 10e année du système américain pour le CPT 4.0, donc les calculs sont montrés étape par étape",
      "Aucune utilisation de machine dans ce cours : la pratique réelle se fait seulement avec un formateur qualifié ou un formateur de l'entreprise",
      "Les règles fédérales sur le travail des enfants interdisent aux moins de 18 ans l'utilisation de nombreuses machines d'usine",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les pages officielles ; une règle ou un mètre ruban et du papier à la maison",
      "Les conditions, les frais et les dates d'examen du CPT 4.0 changent : les apprenants vérifient sur msscusa.org ou auprès d'un centre d'examen"
    ],
    prerequisites: "Calculs simples avec des nombres entiers. Les cours « Les maths du quotidien » et « Les bases de la sécurité au travail (OSHA) » sont des compléments utiles."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de la description ou de l'image d'une machine et d'une tâche", action: "identifier les dangers et choisir la bonne protection, y compris la consignation", standard: "en nommant au moins 3 dangers et la bonne protection pour chacun" },
    { id: "O2", condition: "À partir d'une lecture de règle ou de pied à coulisse et de la tolérance d'une pièce", action: "mesurer une pièce et décider si elle est dans la tolérance", standard: "avec au moins 4 bonnes décisions d'exercice sur 5" },
    { id: "O3", condition: "Face à un problème de qualité sur une ligne de production", action: "noter les défauts et trouver une cause profonde probable avec les 5 pourquoi", standard: "en séparant les mauvaises pièces et en arrivant à une cause que l'on peut corriger" },
    { id: "O4", condition: "À partir d'un poste de travail et d'une machine", action: "appliquer les 5S et une vérification quotidienne de l'opérateur au poste", standard: "avec une action pour chacun des 5 S et au moins 5 points de vérification quotidienne" },
    { id: "O5", condition: "En utilisant la page du MSSC CPT 4.0 et les formations proches de chez vous", action: "rédiger un plan daté pour préparer le CPT 4.0 et un premier emploi en production", standard: "qui nomme les quatre modules obligatoires, une date d'examen à confirmer et une ligne de CV honnête" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier, la sécurité et la mesure",
      lessons: [
        {
          title: "Le métier de technicien de production et le CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Expliquer ce que fait un technicien de production et quelle certification montre aux employeurs que vous êtes prêt.",
          text: [
            "Un technicien de production aide à fabriquer des produits en sécurité et correctement. Pendant une journée de travail normale, vous pouvez régler ou faire fonctionner une machine, assembler des pièces, contrôler des pièces avec des instruments de mesure, noter des chiffres sur une fiche ou un écran, garder votre poste propre et signaler les problèmes de machines ou de pièces.",
            "Beaucoup d'employeurs recherchent le Certified Production Technician (CPT 4.0) du Manufacturing Skill Standards Council (MSSC). Il comprend cinq évaluations : Sécurité ; Pratiques qualité et mesure ; Procédés de fabrication et production ; Notions de maintenance ; et Production verte. Vous obtenez un certificat pour chaque évaluation réussie. Les quatre premières ensemble donnent le CPT 4.0 complet. La Production verte est facultative.",
            "Le MSSC indique que les examens sont des questionnaires à choix multiples, passés en ligne ou sur papier. La formation est proposée par des community colleges (établissements publics de formation de deux ans), des programmes d'emploi et certains lycées. Le MSSC propose aussi une option pratique appelée CPT+ avec Skill Boss. Consultez msscusa.org pour connaître les frais, les centres d'examen et les conditions actuels ; ce cours ne délivre pas la certification.",
            "Autres voies d'accès au métier : les apprentissages enregistrés, où vous êtes payé pendant que vous apprenez (cherchez sur apprenticeship.gov), et les emplois où l'employeur vous forme. Les anciens militaires qui ont fait de la maintenance ou de la logistique dans l'armée ont souvent des compétences qui leur servent."
          ],
          words: [["Technicien de production", "un employé qui fait fonctionner, règle, contrôle et entretient les équipements qui fabriquent des produits."], ["MSSC", "le Manufacturing Skill Standards Council, l'organisme qui fait passer les évaluations du CPT et délivre les certifications."], ["Évaluation", "un examen qui montre si vous maîtrisez le contenu."], ["Module", "un domaine du CPT, avec sa propre évaluation et son propre certificat."], ["Apprentissage enregistré", "un emploi payé avec une formation et un tuteur, reconnu par le Département du Travail des États-Unis ou par un État."]],
          slides: [
            { title: "À quoi ressemble le métier", bullets: ["Régler ou faire fonctionner des machines, assembler des pièces", "Mesurer et contrôler des pièces, noter des chiffres", "Garder le poste propre, signaler les problèmes"] },
            { title: "MSSC CPT 4.0", bullets: ["Sécurité", "Pratiques qualité et mesure", "Procédés de fabrication et production", "Notions de maintenance"] },
            { title: "Comment ça marche", bullets: ["Un certificat pour chaque module réussi", "Les quatre premiers modules = CPT 4.0 complet", "La Production verte est facultative"] },
            { title: "Autres voies d'accès", bullets: ["Apprentissages enregistrés : apprenticeship.gov", "Employeurs qui forment les nouveaux employés", "Ce cours vous prépare ; le MSSC certifie"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "Sur papier, écrivez les quatre modules du CPT 4.0 nécessaires pour la certification complète. À côté de chacun, écrivez une chose que vous savez déjà et une question que vous vous posez. Ensuite, ouvrez msscusa.org et notez où vous chercheriez un centre d'examen.",
          youCanNow: "expliquer ce que fait un technicien de production et nommer les quatre modules du CPT 4.0 nécessaires pour la certification complète.",
          quickCheck: [
            { objective: "O5", q: "Combien de modules du CPT 4.0 faut-il réussir pour la certification complète ?", options: ["Deux", "Les cinq, y compris la Production verte", "Les quatre premiers", "Seulement Sécurité"], answer: 2, why: "Le MSSC indique qu'il faut obtenir les quatre premiers certificats pour le CPT 4.0 complet ; la Production verte est facultative." },
            { objective: "O5", q: "Qui délivre la certification CPT 4.0 ?", options: ["Le Manufacturing Skill Standards Council (MSSC)", "Ce cours en ligne", "L'OSHA", "Votre bibliothèque"], answer: 0, why: "Le MSSC fait passer les évaluations et délivre les certifications ; ce cours vous prépare seulement." }
          ]
        },
        {
          title: "Sécurité des machines : protecteurs, EPI et consignation",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identifier les dangers d'une machine et choisir la bonne protection.",
          text: [
            "L'OSHA (l'agence fédérale américaine de santé et de sécurité au travail) indique que toute partie, fonction ou opération d'une machine qui peut blesser doit être protégée. Sa règle sur les machines cite des dangers comme la zone de travail (là où la machine coupe, presse ou façonne), les points de happement (là où deux pièces tournent l'une vers l'autre et peuvent vous entraîner), les pièces en rotation, et les copeaux et étincelles projetés. Les blessures peuvent être des écrasements, des amputations, des brûlures et la cécité.",
            "Votre protection, de la plus forte à la plus faible : les protecteurs qui gardent votre corps hors de la zone dangereuse (ne les retirez ni ne les contournez jamais), les méthodes de travail sûres, et l'équipement de protection individuelle (EPI) comme les lunettes de sécurité, les protections auditives, les gants là où ils sont autorisés et les chaussures à coque. Gardez les vêtements amples, les cheveux longs et les bijoux loin des pièces en mouvement ; les gants peuvent être happés par des pièces en rotation, alors suivez la règle de chaque machine.",
            "La consignation (en anglais lockout/tagout ou LOTO) est la règle 29 CFR 1910.147 de l'OSHA. Quand on fait l'entretien d'une machine ou qu'on dégage un bourrage, ses énergies (électrique, mécanique, hydraulique, pneumatique, chimique ou thermique) doivent être coupées et verrouillées pour qu'elle ne puisse pas démarrer. Seuls les employés formés et autorisés posent les cadenas. Tous les autres ont pour consigne de ne jamais retirer un cadenas ni redémarrer un équipement consigné.",
            "Les règles fédérales sur le travail des enfants interdisent aux moins de 18 ans de nombreuses machines à moteur, comme les machines de formage, de poinçonnage et de cisaillage du métal, les scies électriques et les chariots élévateurs. Consultez la page du Département du Travail si vous avez moins de 18 ans."
          ],
          steps: ["Préparez-vous : connaissez toutes les sources d'énergie de la machine.", "Prévenez les employés concernés que la machine va être arrêtée.", "Arrêtez la machine de la façon normale.", "Isolez l'énergie : coupez l'interrupteur, fermez les vannes, débranchez.", "Posez votre propre cadenas et votre étiquette.", "Libérez ou bloquez l'énergie stockée (ressorts, air, pression, chaleur).", "Vérifiez : essayez de la démarrer, puis remettez les commandes sur arrêt."],
          words: [["Zone de travail", "l'endroit où la machine coupe, plie, presse ou façonne la matière."], ["Point de happement", "l'endroit où deux pièces en mouvement se rejoignent et peuvent entraîner les doigts, les cheveux ou les vêtements."], ["Protecteur", "une barrière qui garde votre corps loin des pièces en mouvement."], ["EPI", "équipement de protection individuelle, comme les lunettes de sécurité, les bouchons d'oreilles et les chaussures de sécurité."], ["Consignation (LOTO)", "couper l'énergie d'une machine et poser un cadenas et une étiquette pour qu'elle ne puisse pas démarrer pendant que quelqu'un travaille dessus."], ["Énergie stockée", "l'énergie qui reste dans une machine après son arrêt, comme un ressort, la pression d'air ou la chaleur."]],
          slides: [
            { title: "Où les machines blessent", bullets: ["Zone de travail", "Points de happement et pièces en rotation", "Copeaux et étincelles projetés"] },
            { title: "Votre protection", bullets: ["Protecteurs : ne jamais les retirer ni les contourner", "Méthodes de travail sûres", "EPI : lunettes, protections auditives, chaussures"] },
            { title: "La consignation", bullets: ["Pour l'entretien et le dégagement des bourrages", "Couper, isoler, cadenasser, étiqueter", "Libérer l'énergie stockée, puis vérifier"] },
            { title: "Connaître les limites", bullets: ["Seules les personnes autorisées posent les cadenas", "Ne jamais retirer le cadenas de quelqu'un d'autre", "Moins de 18 ans : beaucoup de machines interdites"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Choisissez une machine que vous connaissez ou que vous pouvez voir dans une vidéo : une perceuse à colonne, un destructeur de documents ou un convoyeur. Notez au moins trois dangers (zone de travail, points de happement, pièces en rotation, copeaux projetés) et la protection pour chacun. Puis lisez ce cas d'exercice : une pièce est coincée dans une presse. Écrivez ce qui doit se passer avant que quelqu'un y mette la main.",
          youCanNow: "identifier les dangers d'une machine et choisir des protecteurs, des EPI ou la consignation pour vous protéger, vous et les autres.",
          quickCheck: [
            { objective: "O1", q: "Un protecteur vous ralentit et un collègue vous dit de l'enlever. Que faites-vous ?", options: ["Je l'enlève quand le chef n'est pas là", "Je le plie pour qu'il ne gêne plus", "Je l'enlève pour une seule équipe", "Je le laisse en place et je signale le problème au chef"], answer: 3, why: "Les protecteurs gardent votre corps hors de la zone dangereuse et ne doivent jamais être retirés ni contournés." },
            { objective: "O1", q: "Une machine doit être entretenue. Quelle étape vient juste après la pose de votre cadenas et de votre étiquette ?", options: ["Démarrer la machine", "Libérer ou bloquer l'énergie stockée, puis vérifier qu'elle ne démarre pas", "Retirer le protecteur et commencer", "Enlever le cadenas pour le tester"], answer: 1, why: "Après le cadenassage, vous libérez l'énergie stockée et vérifiez que la machine ne peut pas démarrer." }
          ]
        },
        {
          title: "Mesurer des pièces et lire une tolérance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mesurer une pièce et décider si elle est dans la tolérance.",
          text: [
            "Chaque pièce a sur son plan une dimension visée, appelée cote nominale, et une tolérance : l'écart permis par rapport à la cote visée pour que la pièce reste bonne. Par exemple, 1.250 ± 0.005 pouce veut dire que toute dimension de 1.245 à 1.255 pouce est bonne. Tout ce qui est plus petit ou plus grand est hors tolérance.",
            "Outils courants : un mètre ruban ou un réglet en acier pour les dimensions approximatives ; un pied à coulisse pour les dimensions extérieures, intérieures et de profondeur, souvent au millième de pouce (0.001) ou au centième de millimètre (0.01) ; et un micromètre (palmer) pour des dimensions extérieures encore plus fines. Beaucoup d'ateliers utilisent des pieds à coulisse numériques.",
            "Bonnes habitudes : nettoyez la pièce et l'outil, mettez le pied à coulisse à zéro mâchoires fermées, tenez les mâchoires bien perpendiculaires à la pièce sans serrer, lisez le chiffre bien en face et notez-le tout de suite. Mesurez plusieurs fois en cas de doute. Apprenez à utiliser les outils de précision avec un formateur, qui vous apprendra aussi à lire les cadrans et les verniers."
          ],
          steps: ["Lisez le plan : cote nominale et tolérance.", "Calculez les limites : la cote nominale moins et plus la tolérance.", "Nettoyez la pièce et l'outil ; mettez le pied à coulisse à zéro.", "Mesurez bien perpendiculaire, sans serrer ; lisez le chiffre.", "Notez-le. Dans les limites = bonne ; en dehors = hors tolérance."],
          words: [["Cote nominale", "la dimension visée indiquée sur le plan."], ["Tolérance", "l'écart qu'une dimension peut avoir par rapport à la cote visée tout en restant bonne."], ["Pied à coulisse", "un outil à mâchoires coulissantes qui mesure les dimensions extérieures, intérieures et de profondeur."], ["Micromètre", "un outil à vis qui mesure les dimensions extérieures avec une grande précision."], ["Mise à zéro", "régler l'outil pour qu'il affiche 0 mâchoires fermées, afin que les lectures partent du bon point."]],
          slides: [
            { title: "Cote visée et tolérance", bullets: ["Nominale : la dimension visée", "Tolérance : l'écart permis", "1.250 ± 0.005 = de 1.245 à 1.255"] },
            { title: "Les outils", bullets: ["Mètre ou réglet : dimensions approximatives", "Pied à coulisse : extérieur, intérieur, profondeur", "Micromètre : dimensions extérieures très fines"] },
            { title: "Mesurer comme un pro", bullets: ["Pièce et outil propres ; zéro d'abord", "Mâchoires perpendiculaires, sans serrer", "Lire bien en face ; noter tout de suite"] },
            { title: "Décider", bullets: ["Dans les limites : pièce bonne", "En dehors : hors tolérance, à signaler"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Exercice seulement, avec des chiffres inventés. Une pièce est à 2.000 ± 0.010 pouce. Calculez les limites, puis décidez si chaque mesure est bonne ou hors tolérance : 1.995, 2.012, 1.989, 2.010, 2.004. Ensuite, mesurez trois objets chez vous avec une règle (un livre, un téléphone, une cuillère), deux fois chacun, et notez les deux mesures.",
          youCanNow: "calculer les limites d'une tolérance, mesurer une pièce avec soin et décider si elle est bonne ou hors tolérance.",
          quickCheck: [
            { objective: "O2", q: "Une pièce est à 0.500 ± 0.002 pouce. Quelle plage est bonne ?", options: ["De 0.400 à 0.600", "De 0.498 à 0.502", "Seulement de 0.500 à 0.502", "De 0.490 à 0.510"], answer: 1, why: "Retirez et ajoutez 0.002 à 0.500 : la plage bonne va de 0.498 à 0.502." },
            { objective: "O2", q: "Que faites-vous avec un pied à coulisse numérique avant de mesurer ?", options: ["Je serre fort les mâchoires", "Je mesure la pièce même si elle est sale", "Je ferme les mâchoires et je le mets à zéro", "Je le lis de biais"], answer: 2, why: "La mise à zéro mâchoires fermées fait partir chaque lecture du bon point." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier, la sécurité et la mesure",
        questions: [
          { objective: "O5", q: "Quel module est facultatif pour le CPT 4.0 complet ?", options: ["Sécurité", "Production verte", "Notions de maintenance", "Pratiques qualité et mesure"], answer: 1, why: "Le MSSC indique que la Production verte ne fait pas partie de la certification CPT 4.0 complète." },
          { objective: "O1", q: "L'endroit où deux rouleaux tournent l'un vers l'autre et peuvent entraîner votre manche s'appelle :", options: ["La plaque signalétique", "La tolérance", "Le contrepoids", "Un point de happement"], answer: 3, why: "Un point de happement est l'endroit où deux pièces en mouvement se rejoignent et peuvent vous entraîner." },
          { objective: "O1", q: "Une pièce est coincée dans une machine. Que doit-il se passer avant que quelqu'un y mette la main ?", options: ["Une consignation faite par une personne autorisée", "Mettre la machine en vitesse lente", "Mettre des gants et y aller vite", "Demander à un collègue de surveiller l'interrupteur"], answer: 0, why: "Dégager un bourrage est un travail d'entretien : l'énergie de la machine doit d'abord être consignée." },
          { objective: "O2", q: "Une pièce est à 25.00 ± 0.10 mm. Vous mesurez 25.14 mm. Qu'est-ce qui est vrai ?", options: ["Elle est bonne", "Elle est bonne si elle a l'air correcte", "Elle est hors tolérance", "La tolérance ne s'applique pas aux pièces en millimètres"], answer: 2, why: "La limite haute est 25.10 mm, et 25.14 mm est au-dessus." },
          { objective: "O2", q: "Quel outil convient le mieux pour mesurer la largeur intérieure d'une rainure ?", options: ["Un marteau", "Un niveau", "Un pinceau", "Un pied à coulisse"], answer: 3, why: "Un pied à coulisse a des becs intérieurs faits pour mesurer les dimensions intérieures." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Qualité, production et embauche",
      lessons: [
        {
          title: "Contrôles qualité et recherche de la cause profonde",
          objectives: ["O3"],
          minutes: 6,
          goal: "Noter les défauts et trouver une cause profonde probable avec les 5 pourquoi.",
          text: [
            "La qualité veut dire que chaque pièce respecte sa spécification, c'est-à-dire les exigences écrites de dimension, d'aspect et de fonction. Une pièce qui ne la respecte pas est un défaut, ou pièce non conforme. Votre travail est de repérer les défauts tôt, de les garder loin des bonnes pièces et de les signaler.",
            "Utilisez une feuille de relevé : un tableau simple où vous faites un trait chaque fois que vous voyez un type de défaut, comme une rayure, une mauvaise dimension ou un trou manquant. À la fin de la journée, les traits montrent quel problème revient le plus. Mettez les mauvaises pièces dans un bac de rebut marqué ou étiquetez-les pour que personne ne les expédie par erreur.",
            "Pour régler un problème pour de bon, trouvez sa cause profonde, pas seulement le symptôme. Les 5 pourquoi sont simples : dites quel est le problème, demandez « Pourquoi ? », puis demandez « Pourquoi ? » sur cette réponse, environ cinq fois, jusqu'à une cause que vous pouvez corriger. Beaucoup d'usines utilisent ensuite le cycle Planifier-Faire-Vérifier-Agir : planifier une solution, l'essayer, vérifier les résultats et en faire la règle si elle marche."
          ],
          steps: ["Contrôlez les pièces par rapport à la spécification.", "Faites un trait pour chaque type de défaut sur une feuille de relevé.", "Étiquetez les mauvaises pièces ou mettez-les au bac de rebut ; signalez-les.", "Demandez « Pourquoi ? » environ cinq fois pour arriver à une cause profonde.", "Proposez une solution ; vérifiez que les défauts diminuent."],
          words: [["Spécification", "les exigences écrites qu'une pièce doit respecter."], ["Défaut", "une pièce ou un produit qui ne respecte pas la spécification ; on dit aussi non conforme."], ["Feuille de relevé", "un tableau pour compter combien de fois chaque type de défaut apparaît."], ["Cause profonde", "la vraie raison d'un problème ; la corriger empêche le problème de revenir."], ["5 pourquoi", "demander « Pourquoi ? » encore et encore pour passer d'un symptôme à sa cause profonde."], ["Planifier-Faire-Vérifier-Agir", "un cycle en quatre étapes pour tester une solution et en faire la règle."]],
          slides: [
            { title: "La qualité sur la ligne", bullets: ["Chaque pièce respecte la spécification", "Repérer les défauts tôt", "Garder les mauvaises pièces loin des bonnes"] },
            { title: "Les feuilles de relevé", bullets: ["Un trait pour chaque type de défaut", "Voir quel problème revient le plus", "Étiqueter ou mettre au rebut ; signaler"] },
            { title: "Les 5 pourquoi", bullets: ["Dire quel est le problème", "Demander « Pourquoi ? » environ cinq fois", "S'arrêter à une cause que l'on peut corriger"] },
            { title: "Planifier-Faire-Vérifier-Agir", bullets: ["Planifier une solution, l'essayer", "Vérifier les résultats", "En faire la règle si elle marche"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Cas d'exercice : les trous percés dans des supports sont mal placés sur environ une pièce sur dix. Faites une feuille de relevé avec trois types de défaut et remplissez-la avec des traits inventés. Puis écrivez une chaîne de 5 pourquoi (par exemple : le montage bouge, parce qu'une bride est desserrée, parce que ...) et terminez par une solution que vous pourriez proposer à votre chef.",
          youCanNow: "noter les défauts sur une feuille de relevé, séparer les mauvaises pièces et utiliser les 5 pourquoi pour trouver une cause profonde.",
          quickCheck: [
            { objective: "O3", q: "Vous trouvez cinq pièces rayées dans un bac de bonnes pièces. Que faites-vous d'abord ?", options: ["Je les sépare et je les étiquette, puis je le signale", "Je les expédie ; les rayures sont petites", "Je les jette sans rien dire", "Je les polis moi-même"], answer: 0, why: "Les mauvaises pièces sont gardées loin des bonnes et signalées pour qu'on trouve la cause." },
            { objective: "O3", q: "Quel est le but des 5 pourquoi ?", options: ["Accuser un collègue", "Compter les pièces", "Ralentir la ligne", "Trouver une cause profonde que l'on peut corriger"], answer: 3, why: "Les 5 pourquoi font passer d'un symptôme à la cause profonde, pour que la solution dure." }
          ]
        },
        {
          title: "Production lean, 5S et entretien quotidien des machines",
          objectives: ["O4"],
          minutes: 6,
          goal: "Appliquer les 5S et une vérification quotidienne de l'opérateur à un poste de travail.",
          text: [
            "La production lean veut dire fabriquer ce dont le client a besoin avec moins de gaspillage. Le gaspillage comprend l'attente, la surproduction, les déplacements inutiles, les manipulations inutiles, les stocks trop importants, les défauts et les étapes qui n'apportent aucune valeur. Repérer le gaspillage et proposer de petites améliorations fait partie du travail d'un technicien.",
            "Les 5S gardent un poste de travail sûr et efficace. Trier : enlevez ce dont vous n'avez pas besoin. Ranger : une place marquée pour chaque outil. Nettoyer : nettoyez le poste et la machine, ce qui fait aussi voir les fuites et les dégâts. Standardiser : écrivez à quoi le poste doit ressembler. Maintenir : faites-le à chaque équipe.",
            "Les notions de maintenance commencent par l'entretien quotidien de l'opérateur. Avant et pendant votre journée, cherchez les fuites, les boulons desserrés, les courroies usées, le manque d'huile ou de liquide de coupe, les bruits bizarres, la chaleur, les vibrations et les protecteurs ou câbles abîmés. Suivez la liste de vérification de la machine. Signalez ce que vous trouvez ; seules les personnes formées et autorisées réparent les machines, et les réparations demandent une consignation.",
            "La maintenance préventive est un entretien planifié, comme le graissage et le changement des filtres selon un calendrier, pour que les machines tombent moins en panne. Vos notes sur la liste de vérification aident l'équipe de maintenance à repérer les problèmes tôt."
          ],
          steps: ["Trier : enlevez ce dont vous n'avez pas besoin.", "Ranger : une place marquée pour chaque outil.", "Nettoyer : nettoyez, et cherchez les fuites et les dégâts en nettoyant.", "Standardiser : écrivez ou affichez à quoi le poste doit ressembler.", "Maintenir : faites-le à chaque équipe.", "Vérification quotidienne : fuites, bruit, chaleur, vibrations, courroies, liquides, protecteurs ; signalez les problèmes."],
          words: [["Lean", "une façon de travailler qui supprime le gaspillage pour que la valeur arrive au client."], ["Gaspillage", "tout ce qui ajoute du temps ou un coût sans ajouter de valeur, comme l'attente ou les déplacements inutiles."], ["5S", "Trier, Ranger, Nettoyer, Standardiser, Maintenir : une méthode pour avoir un poste de travail en ordre."], ["Maintenance préventive", "un entretien planifié selon un calendrier pour que les machines tombent moins en panne."], ["Vibration", "un tremblement qui peut être le signe d'une pièce desserrée ou usée."]],
          slides: [
            { title: "Lean : supprimer le gaspillage", bullets: ["Attente, déplacements et manipulations inutiles", "Surproduction, stocks trop importants", "Défauts et étapes sans valeur"] },
            { title: "Les 5S", bullets: ["Trier et Ranger", "Nettoyer : nettoyer et inspecter", "Standardiser et Maintenir"] },
            { title: "Vérification quotidienne de la machine", bullets: ["Fuites, boulons desserrés, courroies usées", "Bruit, chaleur, vibrations", "Liquides, protecteurs et câbles"] },
            { title: "Signaler, ne pas réparer", bullets: ["Le noter sur la liste de vérification", "Seules les personnes autorisées réparent", "Les réparations demandent une consignation"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Choisissez un espace de travail que vous voyez maintenant : un plan de travail de cuisine, une étagère de garage ou un bureau. Écrivez une action pour chacun des 5 S. Puis écrivez une liste de vérification quotidienne d'au moins cinq points pour une machine que vous connaissez (une voiture, un vélo, une tondeuse ou une machine à laver) et ce que vous signaleriez.",
          youCanNow: "repérer le gaspillage, appliquer les 5S à un poste de travail et faire une vérification quotidienne d'opérateur, en signalant les problèmes au lieu de les réparer vous-même.",
          quickCheck: [
            { objective: "O4", q: "Quelle étape des 5S veut dire « une place marquée pour chaque outil » ?", options: ["Trier", "Nettoyer", "Ranger", "Maintenir"], answer: 2, why: "Ranger donne à chaque outil une place marquée pour qu'il soit facile à trouver et à remettre." },
            { objective: "O4", q: "Pendant votre vérification quotidienne, vous entendez un nouveau bruit de frottement. Que faites-vous ?", options: ["Je monte le son de la musique", "Je le note sur la liste de vérification et je le signale", "Je démonte la machine", "Je l'ignore jusqu'à la panne"], answer: 1, why: "Les opérateurs signalent les bruits inhabituels ; les personnes formées et autorisées réparent." }
          ]
        },
        {
          title: "Votre plan : préparer le CPT 4.0 et votre premier emploi en production",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rédiger un plan daté pour préparer le CPT 4.0 et postuler à des emplois en production.",
          text: [
            "Commencez par la page officielle. Sur msscusa.org, vérifiez les modules actuels, la façon dont les examens se passent, les frais et les lieux d'examen. Beaucoup de community colleges et de centres pour l'emploi (souvent appelés American Job Centers) proposent une formation au CPT et peuvent aider à la payer. Demandez si le programme comprend de la pratique avec de vrais outils et de vraies machines.",
            "Préparez un module à la fois. Sécurité est un bon premier module. Pour chacun, fixez des semaines d'étude, une méthode d'exercice (notes, fiches, les exercices de ce cours) et une date d'examen visée, à confirmer avec le centre d'examen.",
            "Postulez pendant vos études. Cherchez des postes d'agent de production, d'opérateur sur machine, d'assembleur et de technicien de production, et cherchez des apprentissages enregistrés sur apprenticeship.gov. Certains employeurs embauchent des personnes qui ont un casier judiciaire ; les programmes d'emploi et de réinsertion peuvent vous orienter vers eux.",
            "Sur votre CV, soyez honnête. Écrivez « Cours terminé : Les bases du technicien de production industrielle (Koach Learn), 2026 » et n'indiquez les modules du CPT qu'après les avoir réussis. En entretien, parlez d'abord de sécurité, de mesures soignées, de repérage des mauvaises pièces et d'un poste bien rangé."
          ],
          steps: ["Lisez la page du CPT 4.0 sur msscusa.org ; notez les quatre modules obligatoires.", "Trouvez un programme de formation ou un centre d'examen près de chez vous et ce qu'il propose.", "Fixez des semaines d'étude et une date visée pour chaque module ; confirmez les dates avec le centre.", "Notez trois intitulés de poste et trois employeurs ou apprentissages où postuler.", "Écrivez une ligne de CV honnête et une réponse de 30 secondes : « Pourquoi l'industrie ? »"],
          words: [["American Job Center", "un bureau public pour l'emploi qui aide les gens à trouver un travail et une formation."], ["Agent de production", "un intitulé courant pour un poste de premier niveau en usine."], ["Centre d'examen", "une école ou un centre agréé pour faire passer l'évaluation."]],
          slides: [
            { title: "Commencer par le MSSC", bullets: ["Vérifier modules, examens et frais sur msscusa.org", "Trouver un programme ou un centre d'examen proche", "Demander s'il y a de la pratique réelle"] },
            { title: "Un module à la fois", bullets: ["Sécurité est un bon premier module", "Semaines d'étude et méthode d'exercice", "Une date visée à confirmer"] },
            { title: "Postuler pendant vos études", bullets: ["Agent de production, opérateur, assembleur", "Apprentissages enregistrés", "Programmes d'emploi et de réinsertion"] },
            { title: "Être honnête", bullets: ["Indiquer le cours terminé", "N'indiquer les modules du CPT qu'après les avoir réussis", "Parler d'abord de sécurité et de qualité"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Écrivez votre plan sur une page : les quatre modules avec, pour chacun, une semaine de début d'étude et une date d'examen visée, un programme ou centre d'examen à contacter, trois emplois ou apprentissages où postuler et votre ligne de CV honnête. Lisez à voix haute votre réponse de 30 secondes à « Pourquoi l'industrie ? ».",
          youCanNow: "rédiger un plan daté pour préparer le CPT 4.0 et un premier emploi en production, et décrire votre formation honnêtement.",
          quickCheck: [
            { objective: "O5", q: "Vous avez réussi seulement le module Sécurité. Quelle ligne de CV est honnête ?", options: ["« Certifié CPT 4.0 complet »", "« Technicien expert »", "« Machiniste certifié OSHA »", "« Certificat Sécurité MSSC (module du CPT 4.0), 2026 »"], answer: 3, why: "Elle nomme exactement ce que vous avez obtenu et ne prétend pas au CPT 4.0 complet." },
            { objective: "O5", q: "Où confirmez-vous les frais et les centres d'examen actuels du CPT ?", options: ["Sur le site officiel du MSSC ou auprès d'un centre d'examen agréé", "Dans une publicité sur les réseaux sociaux", "Dans ce que devine un ami", "Sur n'importe quel site d'offres d'emploi"], answer: 0, why: "Les frais et les examens changent, alors vérifiez directement auprès du MSSC ou du centre d'examen." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Qualité, production et embauche",
        questions: [
          { objective: "O3", q: "Que vous montre une feuille de relevé à la fin d'une journée de travail ?", options: ["Quel type de défaut revient le plus", "Le prix de la machine", "La météo", "Qui est arrivé en retard"], answer: 0, why: "Les traits sur une feuille de relevé montrent combien de fois chaque type de défaut apparaît." },
          { objective: "O3", q: "Les pièces sont trop longues. Pourquoi ? La butée a bougé. Pourquoi ? Son boulon est desserré. Pourquoi ? Personne ne le vérifie. Quelle est une bonne solution ?", options: ["Fabriquer les pièces plus vite", "Accuser l'équipe précédente", "Ajouter le boulon de la butée à la vérification quotidienne", "Jeter toutes les pièces"], answer: 2, why: "La solution vise la cause profonde trouvée avec les 5 pourquoi : le boulon n'est jamais vérifié." },
          { objective: "O4", q: "Les employés attendent 20 minutes à chaque équipe que les pièces arrivent. En termes de lean, c'est :", options: ["De la valeur", "Du gaspillage", "Des 5S", "Une tolérance"], answer: 1, why: "L'attente ajoute du temps sans ajouter de valeur : c'est l'un des gaspillages du lean." },
          { objective: "O4", q: "Quelle étape des 5S aide aussi à voir les fuites et les dégâts ?", options: ["Trier", "Maintenir", "Standardiser", "Nettoyer"], answer: 3, why: "Nettoyer la machine pendant l'étape Nettoyer fait voir les fuites, les fissures et l'usure." },
          { objective: "O5", q: "Quelle est une bonne première étape pour un plan CPT 4.0 ?", options: ["Lire la page du CPT 4.0 sur msscusa.org et trouver un centre d'examen", "Acheter un certificat en ligne", "Passer les cinq examens le même jour sans étudier", "Attendre que quelqu'un vous le dise"], answer: 0, why: "Partir de la page officielle vous donne les modules, les examens et les centres actuels." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du technicien de production industrielle",
    questions: [
      { objective: "O5", q: "Quel organisme délivre le Certified Production Technician (CPT 4.0) ?", options: ["L'OSHA", "Votre employeur seulement", "Le Manufacturing Skill Standards Council (MSSC)", "Ce cours"], answer: 2, why: "Le MSSC fait passer les évaluations du CPT et délivre les certifications." },
      { objective: "O5", q: "Quels modules forment le CPT 4.0 complet ?", options: ["Sécurité ; Pratiques qualité et mesure ; Procédés de fabrication et production ; Notions de maintenance", "Soudure, plomberie, conduite et cuisine", "Production verte seulement", "Chariot élévateur, grue, échelle et toiture"], answer: 0, why: "Le MSSC indique que les quatre premiers modules donnent le CPT 4.0 complet." },
      { objective: "O1", q: "Quel danger la règle de l'OSHA sur les machines cite-t-elle ?", options: ["Un sol propre", "Un tableau 5S affiché", "Un crayon taillé", "Les pièces en rotation"], answer: 3, why: "La règle générale de l'OSHA sur les machines cite les pièces en rotation avec la zone de travail, les points de happement et les copeaux projetés." },
      { objective: "O1", q: "Quelle est la protection la plus forte contre les pièces en mouvement d'une machine ?", options: ["Travailler plus vite", "Un protecteur qui garde votre corps hors de la zone dangereuse", "Des gants trop larges", "Un cri d'avertissement"], answer: 1, why: "Les protecteurs vous tiennent loin du danger et ne doivent jamais être retirés ni contournés." },
      { objective: "O1", q: "Vous voyez le cadenas d'un autre employé sur une machine dont vous avez besoin. Que faites-vous ?", options: ["Je coupe le cadenas", "Je demande à mon chef ; je ne retire jamais le cadenas de quelqu'un d'autre", "Je démarre quand même la machine", "J'enlève seulement l'étiquette"], answer: 1, why: "Seul l'employé qui a posé un cadenas le retire, en suivant la procédure." },
      { objective: "O1", q: "Vous avez 17 ans. Quel travail est interdit par les règles fédérales sur le travail des enfants ?", options: ["Balayer la salle de pause", "Classer des papiers", "Ranger des cartons légers à la main", "Faire fonctionner une poinçonneuse à métal"], answer: 3, why: "Les moins de 18 ans ne peuvent pas faire fonctionner des machines à moteur de formage, de poinçonnage ou de cisaillage du métal." },
      { objective: "O2", q: "Une pièce est à 3.000 ± 0.005 pouce. Vous mesurez 2.996. Est-elle bonne ?", options: ["Oui, elle est entre 2.995 et 3.005", "Non, elle doit faire exactement 3.000", "Non, elle est trop grande", "Seulement si elle brille"], answer: 0, why: "2.996 est dans les limites de 2.995 à 3.005." },
      { objective: "O2", q: "Qu'est-ce que la tolérance ?", options: ["Le poids d'une pièce", "La vitesse de la machine", "L'écart qu'une dimension peut avoir par rapport à la cote visée tout en restant bonne", "Le prix d'une pièce"], answer: 2, why: "La tolérance fixe la plage permise autour de la cote nominale." },
      { objective: "O2", q: "Quelle habitude donne une lecture juste au pied à coulisse ?", options: ["Serrer les mâchoires le plus fort possible", "Nettoyer la pièce, mettre l'outil à zéro et tenir les mâchoires perpendiculaires", "Mesurer à travers un gant", "Deviner le dernier chiffre"], answer: 1, why: "Des surfaces propres, un outil à zéro et des mâchoires perpendiculaires donnent des lectures justes." },
      { objective: "O2", q: "Une pièce est à 10.00 ± 0.05 mm. Quelle mesure est hors tolérance ?", options: ["9.97 mm", "10.04 mm", "10.00 mm", "10.08 mm"], answer: 3, why: "La limite haute est 10.05 mm, donc 10.08 mm est trop grand." },
      { objective: "O3", q: "Une pièce qui ne respecte pas sa spécification s'appelle :", options: ["Non conforme (un défaut)", "Nominale", "Lean", "Mise à zéro"], answer: 0, why: "Une pièce qui ne respecte pas la spécification est un défaut, ou pièce non conforme." },
      { objective: "O3", q: "Pourquoi étiqueter ou mettre au rebut les mauvaises pièces tout de suite ?", options: ["Pour alourdir le bac", "Pour pouvoir les peindre", "Pour que personne ne les mélange aux bonnes ni ne les expédie", "Pour les cacher au chef"], answer: 2, why: "Séparer les rebuts empêche les mauvaises pièces d'arriver chez le client." },
      { objective: "O3", q: "Dans Planifier-Faire-Vérifier-Agir, que se passe-t-il à l'étape « Vérifier » ?", options: ["Vous planifiez la solution", "Vous arrêtez la ligne pour de bon", "Vous commandez de nouvelles machines", "Vous regardez si la solution a marché"], answer: 3, why: "Vérifier veut dire regarder les résultats pour voir si la solution a marché." },
      { objective: "O4", q: "Lequel est un gaspillage du lean ?", options: ["Déplacer des pièces dans tous les sens sans raison", "Une bonne pièce envoyée au client", "Un poste de travail propre", "Une vérification de sécurité terminée"], answer: 0, why: "Les déplacements et manipulations inutiles ajoutent du temps et un coût sans valeur." },
      { objective: "O4", q: "Que veut dire « Maintenir » dans les 5S ?", options: ["Jeter ce qui ne sert pas", "Continuer les 5S à chaque équipe", "Peindre le sol", "Acheter de nouveaux outils"], answer: 1, why: "Maintenir veut dire faire des 5S une habitude pour que le poste reste en ordre." },
      { objective: "O4", q: "Pendant une vérification quotidienne, vous trouvez une fuite d'huile sous une machine. Quelle est la bonne action ?", options: ["L'essuyer sans rien dire", "Réparer le tuyau vous-même pendant que la machine tourne", "La signaler et suivre la liste de vérification ; laisser les personnes autorisées réparer", "Mettre une boîte dessus"], answer: 2, why: "Les opérateurs signalent les problèmes ; les personnes autorisées réparent sous consignation." },
      { objective: "O4", q: "Qu'est-ce que la maintenance préventive ?", options: ["Réparer une machine seulement après une panne", "Un entretien planifié selon un calendrier pour que les machines tombent moins en panne", "Nettoyer la salle de pause", "Acheter des tenues de rechange"], answer: 1, why: "La maintenance préventive est un entretien programmé qui évite les pannes." },
      { objective: "O5", q: "Vous voulez un emploi payé avec une formation et un tuteur. Où pouvez-vous chercher ?", options: ["Sur un site de loterie", "Dans une application de bons de réduction", "Dans le moteur de recherche d'apprentissages d'Apprenticeship.gov", "Sur un forum de jeux vidéo"], answer: 2, why: "Le moteur de recherche d'apprentissages du Département du Travail liste les offres d'apprentissages enregistrés." },
      { objective: "O1", q: "Dans la consignation, pourquoi essayez-vous de démarrer la machine après l'avoir cadenassée ?", options: ["Pour la faire chauffer", "Pour tester la couleur du cadenas", "Pour finir le travail plus vite", "Pour vérifier que l'énergie est vraiment coupée avant de travailler"], answer: 3, why: "La vérification montre que l'énergie est isolée ; ensuite vous remettez les commandes sur arrêt." },
      { objective: "O3", q: "La peinture s'écaille sur beaucoup de pièces. Pourquoi ? La surface est grasse. Pourquoi ? L'étape de lavage a été sautée. Quelle réponse est la plus proche d'une cause profonde ?", options: ["Les pièces sont mauvaises", "L'étape de lavage a été sautée", "La peinture s'écaille", "Le client est trop exigeant"], answer: 1, why: "L'étape de lavage sautée est une cause que l'on peut corriger ; la peinture qui s'écaille n'est que le symptôme." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "Satisfaisant ou Excellent sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et vérifiez de nouveau.",
    criteria: [
      { name: "Liste des dangers et des protections", objective: "O1", notYet: "Moins de trois dangers, ou un danger sans protection ou avec la mauvaise protection.", meets: "Au moins trois dangers sur une machine, chacun avec le bon protecteur, le bon EPI ou la bonne méthode, et quand la consignation est nécessaire.", exceeds: "Liste les étapes de la consignation dans l'ordre et nomme les sources d'énergie de la machine." },
      { name: "Relevé de mesures", objective: "O2", notYet: "Limites mal calculées, ou deux mauvaises décisions ou plus.", meets: "Les limites sont justes et au moins 4 des 5 pièces d'exercice sont bien jugées.", exceeds: "Les 5 sont justes, avec les habitudes de mesure utilisées notées à côté du relevé." },
      { name: "Relevé des défauts et 5 pourquoi", objective: "O3", notYet: "Pas de séparation des mauvaises pièces, ou la chaîne s'arrête au symptôme.", meets: "Une feuille de relevé, une étape pour étiqueter les mauvaises pièces et des 5 pourquoi qui aboutissent à une cause que l'on peut corriger.", exceeds: "Ajoute une note Planifier-Faire-Vérifier-Agir sur la façon de vérifier que la solution a marché." },
      { name: "Plan 5S et vérification quotidienne", objective: "O4", notYet: "Il manque un des 5 S, ou il y a moins de cinq points de vérification.", meets: "Une action pour chaque S et au moins cinq points de vérification quotidienne avec ce qu'il faut signaler.", exceeds: "Nomme au moins deux gaspillages du lean dans le poste et une petite amélioration pour chacun." },
      { name: "Plan CPT 4.0 et emploi", objective: "O5", notYet: "Mauvais modules, pas de dates, ou une ligne de CV qui revendique une certification non obtenue.", meets: "Nomme les quatre modules obligatoires avec des dates visées à confirmer, un programme ou centre d'examen, trois pistes d'emploi et une ligne de CV honnête.", exceeds: "Comprend une réponse de 30 secondes déjà travaillée et une solution de rechange comme un apprentissage." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et un dossier de préparation conforme à la grille",
      "Apprenants qui s'inscrivent à une formation CPT 4.0 ou passent un premier module du CPT dans les 90 jours (enquête de suivi)",
      "Apprenants qui réussissent un ou plusieurs modules du CPT 4.0 (déclaration personnelle avec la certification du MSSC)",
      "Apprenants embauchés dans des emplois de production ou des apprentissages enregistrés (rapports des partenaires et de suivi)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour msscusa.org, osha.gov et apprenticeship.gov",
      "Une règle ou un mètre ruban, du papier et un stylo",
      "Facultatif : un pied à coulisse numérique et quelques petites pièces (boulons, rondelles) à mesurer avec un formateur",
      "Environ 60 minutes en tout"
    ],
    facilitatorNotes: [
      "Dites-le tôt et souvent : ce cours prépare les apprenants ; le MSSC délivre les certifications CPT et les compétences sur machine s'apprennent en personne.",
      "Ne faites pas utiliser de machines aux apprenants et ne leur faites pas pratiquer la consignation sur des équipements sous tension dans le cadre de ce cours. Utilisez des images, des vidéos et des pièces de démonstration débranchées.",
      "Vérifiez avant la séance les frais actuels du MSSC, les modes d'examen et les centres d'examen locaux, et présentez les aides financières que propose votre programme d'emploi.",
      "Expliquez lentement au tableau les calculs de tolérance ; beaucoup d'apprenants ont besoin de deux ou trois exemples résolus.",
      "Faites attention aux apprenants de moins de 18 ans : ils peuvent suivre le cours, mais beaucoup de machines d'usine leur sont interdites au travail.",
      "Évaluez le dossier de préparation avec la grille et revoyez une ligne Pas encore à la fois."
    ]
  }
};
