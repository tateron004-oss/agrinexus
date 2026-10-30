"use strict";

// Koach Learn course (French translation of africa-life/afr-phone-repair-business.js). See scripts/koachlearn-courses/README.md, "Translations".
// Money figures are examples only, exactly as in the English. No added prices, fees or facts.

const NFPA = { name: "NFPA (Association nationale de protection contre l'incendie des États-Unis) : sécurité des batteries lithium-ion (signes d'alerte ; ne pas les jeter à la poubelle, les recycler)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "Aide-mémoire de l'OMS (WHO) : Déchets électroniques : 62 millions de tonnes en 2022, 22,3 % recyclés de façon documentée ; dangers du brûlage", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Commission nigériane de protection des données (NDPC ; loi nigériane sur la protection des données de 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Commission de protection des données du Ghana (loi sur la protection des données de 2012, Act 843 ; les responsables du traitement doivent s'enregistrer)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Bureau du Commissaire à la protection des données, Kenya (ODPC)", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business-fr",
  lang: "fr",
  translationOf: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Créer son activité de réparation de téléphones",
  skills: "Installer un poste de réparation sûr, Manipuler les batteries au lithium en sécurité, Trouver les pannes et remplir des fiches de réparation, Protéger les données des clients, Fixer le prix des réparations avec une garantie, Gérer les déchets électroniques en sécurité",
  outcome: "gérer une petite activité de réparation de téléphones sûre et honnête : travailler sur un poste sûr, manipuler les batteries au lithium sans risque d'incendie, trouver les pannes courantes et noter chaque travail sur une fiche de réparation, protéger les données de chaque client, fixer le prix des réparations avec une garantie claire, et vous débarrasser des batteries usagées et des pièces cassées en toute sécurité.",
  about: [
    "Ce cours s'adresse aux jeunes, aux artisans et aux petits commerçants de toute l'Afrique qui réparent des téléphones, ou veulent le faire, dans un kiosque, sur un étal de marché ou dans une petite boutique : sur Luthuli Avenue à Nairobi, au Computer Village de Lagos, au Circle d'Accra, à Adjamé à Abidjan ou à Akwa à Douala.",
    "Le chapitre 1 porte sur le travail en sécurité : votre poste et vos outils, les dangers des batteries au lithium, et comment trouver une panne étape par étape et la noter sur une fiche de réparation. Le chapitre 2 porte sur l'activité : protéger les données des clients, les prix et les garanties, refuser les téléphones volés et gérer les déchets électroniques.",
    "Ce n'est pas un cours complet d'électronique. Il vous donne les habitudes de sécurité et les compétences de gestion qui protègent votre personne, vos clients et votre boutique, pour que vos compétences techniques vous donnent une bonne réputation. Les montants d'argent sont seulement des exemples. Chaque leçon dure environ cinq minutes et se termine par une tâche. Des questions rapides suivent chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez le kit de départ de votre boutique : (1) une liste de prix d'au moins cinq réparations courantes (par exemple écran, port de charge, batterie, haut-parleur, réinitialisation du logiciel), chacune avec le coût de la pièce, la main-d'œuvre, le prix et les jours de garantie ; (2) une fiche de réparation d'une page que vous utiliserez pour chaque téléphone ; (3) un engagement sur les données des clients d'au moins quatre lignes ; et (4) une fiche de sécurité pour le mur avec vos règles pour les batteries et l'endroit où iront vos batteries usagées et vos pièces cassées.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes, des artisans et des petits commerçants des villes et villages de toute l'Afrique (Kenya, Nigeria, Ghana, Côte d'Ivoire, Cameroun, Sénégal, Égypte et ailleurs) qui réparent des téléphones ou veulent commencer, souvent dans un kiosque ou sur un étal de marché.",
    startingPoint: "Beaucoup ont appris quelques réparations auprès d'un ami ou en apprentissage, ou n'en connaissent encore aucune. Peu ont une routine de travail sûre, savent à quel point une batterie au lithium abîmée est dangereuse, remplissent une fiche de réparation, protègent les données des clients, fixent leurs prix avec une garantie ou savent où doivent aller les déchets électroniques.",
    gap: "Les incendies de batteries brûlent des boutiques et blessent des personnes ; des données de clients perdues ou divulguées détruisent la confiance ; deviner les prix fait perdre de l'argent ; acheter des téléphones volés attire des ennuis avec la police ; brûler les déchets électroniques empoisonne les familles. Des habitudes sûres et des outils de gestion simples transforment un savoir-faire en une activité durable et digne de confiance.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot technique est expliqué",
      "Appareils : un téléphone Android simple ; un petit espace partagé, souvent sans extincteur",
      "Les lois sur la protection des données, les autorisations d'exercer et les déchets électroniques varient selon les pays et changent : les apprenants vérifient auprès des organismes cités",
      "Sécurité : aucun travail sur des batteries gonflées ou abîmées au-delà d'un retrait sûr ; aucun brûlage de déchets électroniques",
      "Le cours est aussi traduit en français et en arabe, donc les exemples incluent des boutiques francophones et d'Afrique du Nord"
    ],
    prerequisites: "Aucun pour les compétences de sécurité et de gestion. Les compétences pratiques de réparation viennent de la pratique ou d'un apprentissage."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Avant et pendant toute réparation", action: "installer un poste de travail sûr et manipuler les batteries au lithium en sécurité, en repérant une batterie gonflée, chaude ou abîmée", standard: "en respectant toutes les règles de votre fiche de sécurité des batteries" },
    { id: "O2", condition: "Face à un téléphone qu'un client vous apporte", action: "trouver la panne probable par une vérification étape par étape et noter le travail sur une fiche de réparation", standard: "avec la panne, le prix convenu et l'accord du client écrits avant le début du travail" },
    { id: "O3", condition: "Quand un client vous laisse son téléphone", action: "protéger les données du client en lui demandant une sauvegarde et sans jamais copier, regarder ni partager ses fichiers", standard: "sans jamais demander un code PIN ou un mot de passe dont vous n'avez pas besoin" },
    { id: "O4", condition: "À partir du coût des pièces et du temps que prend une réparation", action: "calculer le prix d'une réparation et rédiger une liste de prix avec les conditions de garantie", standard: "en couvrant les pièces, la main-d'œuvre et les frais de la boutique avec un bénéfice, et avec une garantie claire" },
    { id: "O5", condition: "Quand vous avez des batteries usagées, des écrans cassés ou un téléphone que vous pensez volé", action: "choisir l'action sûre et légale : stocker les déchets électroniques et les remettre à un collecteur, et refuser un téléphone sans preuve de propriété", standard: "sans rien brûler, sans rien jeter n'importe où et sans acheter de téléphone sans preuve" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Travailler en sécurité et trouver la panne",
      lessons: [
        {
          title: "Un poste de réparation sûr",
          objectives: ["O1"],
          minutes: 4,
          goal: "Installer un poste de réparation sûr, bien rangé et prêt pour le travail.",
          text: [
            "Votre poste de travail est l'endroit où les accidents arrivent, ou sont évités. Un bon poste est sec, bien éclairé, et loin des feux de cuisine, du carburant et de l'eau. Il a un tapis résistant à la chaleur, un petit bac pour les vis et un espace dégagé pour que les petites pièces ne se perdent pas.",
            "Outils : les bons tournevis, des outils d'ouverture en plastique (spudgers), une pince fine, une ventouse, un multimètre, et une station à air chaud ou un fer à souder si vous êtes formé pour les utiliser. Les outils chauffants doivent être posés sur leur support, jamais sur du papier ou du tissu, et éteints quand vous quittez le poste.",
            "Protégez-vous et protégez le téléphone : portez des lunettes de protection quand vous ouvrez un écran ou travaillez avec du verre, utilisez un bracelet antistatique ou touchez du métal nu pour évacuer l'électricité statique avant de toucher la carte, et gardez une boîte en métal remplie de sable sec près du poste pour une batterie abîmée. Connaissez la sortie de votre boutique et gardez-la dégagée."
          ],
          steps: ["Choisissez un endroit sec et bien éclairé, loin des feux de cuisine, du carburant et de l'eau.", "Posez un tapis résistant à la chaleur et un bac à vis.", "Laissez les outils chauffants sur leur support et éteignez-les quand vous partez.", "Portez des lunettes de protection ; évacuez l'électricité statique avant de toucher la carte.", "Gardez une boîte en métal de sable sec près du poste et une sortie dégagée."],
          words: [["Spudger", "un outil en plastique pour ouvrir un téléphone et soulever des pièces sans les rayer ni provoquer de court-circuit."], ["Multimètre", "un appareil qui mesure la tension, le courant et la résistance."], ["Électricité statique", "une petite charge électrique sur votre corps qui peut abîmer la carte d'un téléphone."]],
          slides: [
            { title: "Où installer votre poste", bullets: ["Sec et bien éclairé", "Loin des feux de cuisine, du carburant et de l'eau", "Une sortie dégagée de la boutique"] },
            { title: "Les outils de base", bullets: ["Tournevis, spudgers en plastique, pince fine, ventouse", "Multimètre", "Outils chauffants seulement si vous êtes formé ; toujours sur leur support"] },
            { title: "Protégez-vous et protégez le téléphone", bullets: ["Lunettes de protection pour le verre et les écrans", "Évacuez l'électricité statique avant de toucher la carte", "Boîte en métal de sable sec pour une batterie abîmée"] }
          ],
          tryIt: "Dessinez un plan simple de votre poste (ou du poste que vous voulez) : où va chaque outil, où se trouve le support de l'outil chauffant, où est la boîte de sable et par où on sort. Notez ce qu'il vous reste à acheter.",
          youCanNow: "installer un poste de réparation sûr et bien rangé, avec les bons outils et le matériel de sécurité.",
          quickCheck: [
            { objective: "O1", q: "Où doit se trouver une station à air chaud quand vous la posez ?", options: ["Sur une pile de papiers", "Sur le téléphone du client", "Sur son support, loin du tissu et du papier", "Par terre"], answer: 2, why: "Le support garde l'embout chaud loin de ce qui peut brûler." },
            { objective: "O1", q: "Pourquoi garder une boîte en métal remplie de sable sec près du poste ?", options: ["Pour ranger les vis", "Pour y mettre une batterie abîmée en sécurité", "Pour nettoyer les écrans", "Pour peser les pièces"], answer: 1, why: "Une boîte en métal remplie de sable est un endroit plus sûr pour une batterie abîmée que le poste ou une poubelle." }
          ]
        },
        {
          title: "Les dangers des batteries au lithium",
          objectives: ["O1"],
          minutes: 5,
          goal: "Repérer une batterie gonflée, chaude ou abîmée et la manipuler sans provoquer d'incendie.",
          text: [
            "Presque tous les téléphones ont une batterie lithium-ion. Elle contient beaucoup d'énergie. Si elle est percée, pliée, écrasée, surchauffée ou en court-circuit, elle peut prendre feu très vite, dégager une fumée toxique, et se remettre à brûler après avoir semblé s'éteindre.",
            "Signes d'alerte : gonflement (le dos ou l'écran se soulève), chaleur, odeur bizarre, sifflement ou petits claquements, ou fumée. Une batterie gonflée doit être remplacée, jamais aplatie, percée ou chargée.",
            "Bonnes habitudes : débranchez d'abord le connecteur de la batterie, avant de travailler sur la carte. Ne faites jamais levier sur une batterie avec un outil en métal ; utilisez des outils en plastique et le bon dissolvant de colle, et allez doucement. N'utilisez jamais l'air chaud près d'une batterie. Chargez les téléphones uniquement avec de bons chargeurs, sur une surface dure, là où vous pouvez les voir.",
            "Si une batterie se met à fumer ou à siffler : éloignez les gens et ne respirez pas la fumée. Seulement si vous pouvez le faire sans danger, prenez-la avec une longue pince pour la mettre dans votre boîte en métal remplie de sable, dehors. S'il y a un feu que vous ne pouvez pas maîtriser, faites sortir tout le monde et appelez les pompiers."
          ],
          steps: ["Cherchez un gonflement, de la chaleur, une odeur, un bruit ou de la fumée avant d'ouvrir un téléphone.", "Débranchez la batterie avant de travailler sur la carte.", "Utilisez des outils en plastique, jamais en métal, pour retirer une batterie ; ne la pliez pas, ne la percez pas.", "Gardez les outils chauffants loin de la batterie.", "Si elle fume : éloignez les gens, utilisez la pince et la boîte de sable seulement si c'est sûr, appelez les pompiers en cas de feu."],
          words: [["Batterie lithium-ion", "la batterie rechargeable des téléphones ; elle contient beaucoup d'énergie et peut brûler si elle est abîmée."], ["Batterie gonflée", "une batterie qui a enflé parce que du gaz se forme à l'intérieur ; elle est dangereuse."], ["Court-circuit", "quand l'électricité prend un mauvais chemin, par exemple à travers un outil en métal, ce qui crée de la chaleur ou un feu."]],
          slides: [
            { title: "Pourquoi les batteries au lithium sont dangereuses", bullets: ["Elles contiennent beaucoup d'énergie", "Un choc, la chaleur ou un court-circuit peut vite causer un feu", "La fumée est toxique ; le feu peut reprendre"] },
            { title: "Signes d'alerte", bullets: ["Gonflement : dos ou écran soulevé", "Chaleur, odeur bizarre", "Sifflement, claquements ou fumée"] },
            { title: "Bonnes habitudes", bullets: ["Débranchez d'abord la batterie", "Outils en plastique seulement ; ne jamais plier ni percer", "Pas d'outil chauffant près de la batterie"] },
            { title: "Si elle fume", bullets: ["Éloignez les gens ; ne respirez pas la fumée", "Seulement si c'est sûr : pince, boîte de sable, dehors", "Feu impossible à maîtriser : sortez, appelez les pompiers"] }
          ],
          sources: [NFPA],
          tryIt: "Écrivez votre fiche de sécurité des batteries en cinq lignes pour le mur de votre boutique : les signes d'alerte, les bonnes habitudes et que faire si une batterie fume. Trouvez le numéro de téléphone des pompiers les plus proches.",
          youCanNow: "repérer une batterie dangereuse, manipuler les batteries en sécurité pendant une réparation et réagir sans danger si l'une d'elles se met à fumer.",
          quickCheck: [
            { objective: "O1", q: "Le dos d'un téléphone est soulevé parce que la batterie a gonflé. Que faites-vous ?", options: ["Vous l'aplatissez et refermez le téléphone", "Vous la chargez pour la tester", "Vous la percez pour faire sortir le gaz", "Vous la remplacez, en la manipulant avec soin sans la plier ni la percer"], answer: 3, why: "Une batterie gonflée est dangereuse ; il faut la retirer avec soin et la remplacer, jamais l'aplatir, la percer ou la charger." },
            { objective: "O1", q: "Que devez-vous faire en premier avant de travailler sur la carte d'un téléphone ?", options: ["Débrancher la batterie", "Chauffer la carte", "Charger le téléphone", "Retirer seulement le tiroir SIM"], answer: 0, why: "Débrancher la batterie évite les courts-circuits qui peuvent abîmer la carte ou provoquer un incendie." }
          ]
        },
        {
          title: "Trouver la panne et remplir une fiche de réparation",
          objectives: ["O2"],
          minutes: 6,
          goal: "Trouver la panne probable par une vérification étape par étape et noter le travail sur une fiche de réparation.",
          text: [
            "Commencez par écouter. Demandez au client ce qui s'est passé : tombé, mouillé, lent, ne charge plus, pas de son ? Depuis quand ? Ensuite, vérifiez de la cause la plus simple à la plus difficile. Beaucoup de téléphones \"morts\" ont seulement besoin d'un bon chargeur, d'un port de charge propre ou d'un redémarrage du logiciel.",
            "Un ordre simple : (1) cherchez des dégâts, un gonflement ou des traces d'eau ; (2) essayez un chargeur et un câble qui fonctionnent à coup sûr ; (3) nettoyez doucement le port de charge avec une pointe en plastique ou en bois ; (4) redémarrez, et vérifiez si le problème vient du logiciel ; (5) seulement ensuite, ouvrez le téléphone et testez les pièces.",
            "Avant de commencer tout travail payant, remplissez une fiche de réparation et montrez-la au client. Elle note : la date, le nom et le numéro de téléphone du client, le modèle du téléphone et l'IMEI, la panne, les dégâts que vous voyez (fissures, bosses), ce que vous allez faire, le prix convenu, la date prévue, et la signature du client ou un \"oui\" enregistré. Donnez au client une copie ou un numéro de ticket. Cela vous protège tous les deux.",
            "Exemple : à Accra, on apporte à Kwame un téléphone qui \"ne charge plus\". Il essaie un bon câble, enlève les peluches du port, et le téléphone charge. Il ne demande qu'une petite somme pour le nettoyage, et le client revient le voir pour chaque réparation après cela."
          ],
          steps: ["Demandez ce qui s'est passé et depuis quand.", "Cherchez des dégâts, un gonflement ou des traces d'eau.", "Essayez un chargeur et un câble qui fonctionnent ; nettoyez doucement le port.", "Redémarrez et vérifiez s'il y a un problème de logiciel.", "Remplissez la fiche avec la panne, les dégâts vus, le prix et la date, et obtenez le oui du client avant d'ouvrir le téléphone."],
          words: [["Fiche de réparation", "un document écrit pour une réparation : le téléphone, la panne, le prix, la date et l'accord du client."], ["IMEI", "le numéro unique à 15 chiffres du téléphone ; composez *#06# pour le voir."], ["Panne logicielle", "un problème dans les programmes du téléphone, pas dans ses pièces ; souvent réglé par un redémarrage ou une mise à jour."]],
          slides: [
            { title: "D'abord, écoutez", bullets: ["Que s'est-il passé ? Tombé, mouillé, lent, ne charge plus ?", "Depuis quand ?", "Beaucoup de téléphones \"morts\" ont juste besoin d'une solution simple"] },
            { title: "Du plus simple au plus difficile", bullets: ["Regardez : dégâts, gonflement, traces d'eau", "Bon chargeur ; nettoyez doucement le port", "Redémarrez pour le logiciel ; puis ouvrez et testez les pièces"] },
            { title: "La fiche de réparation", bullets: ["Client, modèle du téléphone, IMEI (composez *#06#)", "Panne, dégâts vus, travail à faire", "Prix, date, oui du client ; donnez une copie ou un ticket"] }
          ],
          tryIt: "Dessinez votre propre fiche de réparation sur une page, avec toutes les cases de cette leçon. Remplissez-la pour un téléphone d'entraînement (le vôtre ou celui d'un ami) avec une panne inventée.",
          youCanNow: "vérifier un téléphone de la cause la plus simple à la plus difficile et noter chaque travail sur une fiche de réparation avant de commencer.",
          quickCheck: [
            { objective: "O2", q: "Un client dit que son téléphone ne charge plus. Que vérifiez-vous en premier ?", options: ["Remplacer la carte", "Un chargeur et un câble qui fonctionnent, et un port propre", "Remplacer l'écran", "Lui vendre un téléphone neuf"], answer: 1, why: "Commencez par les causes les plus simples ; un mauvais câble ou un port sale sont fréquents." },
            { objective: "O2", q: "Pourquoi noter sur la fiche les dégâts que vous voyez, comme un coin fissuré, avant de commencer ?", options: ["Pour que le client paie plus", "Ce n'est pas utile", "Pour remplir la page", "Pour que personne ne vous accuse plus tard de dégâts qui étaient déjà là"], answer: 3, why: "Noter les dégâts existants vous protège, vous et le client, contre les disputes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Travailler en sécurité et trouver la panne",
        questions: [
          { objective: "O1", q: "Lequel de ces signes montre qu'une batterie est dangereuse ?", options: ["Le téléphone est neuf", "Gonflement, chaleur, odeur, sifflement ou fumée", "La batterie est noire", "Le téléphone a une coque"], answer: 1, why: "Le gonflement, la chaleur, l'odeur, le bruit et la fumée sont les signes d'alerte." },
          { objective: "O1", q: "Avec quel outil devez-vous faire levier pour retirer une batterie ?", options: ["Un outil en plastique, doucement", "Un tournevis en métal", "Un couteau de cuisine", "Vos dents"], answer: 0, why: "Le métal peut percer la batterie ou provoquer un court-circuit ; les outils en plastique sont plus sûrs." },
          { objective: "O1", q: "Une batterie sur votre poste se met à siffler et à fumer. Quelle est la bonne première action ?", options: ["Souffler dessus", "La mettre dans votre poche", "Éloigner les gens et éviter la fumée", "Continuer à travailler"], answer: 2, why: "La sécurité des personnes passe d'abord ; la fumée est toxique." },
          { objective: "O2", q: "Où trouvez-vous rapidement l'IMEI d'un téléphone ?", options: ["Sur le chargeur", "Sur la carte SIM", "Dans le sac du client", "En composant *#06#"], answer: 3, why: "Composer *#06# affiche l'IMEI sur presque tous les téléphones." },
          { objective: "O2", q: "Quand le client doit-il accepter le prix ?", options: ["Avant de commencer, par écrit sur la fiche de réparation", "Après la fin du travail", "Jamais", "Quand il se plaint"], answer: 0, why: "Se mettre d'accord d'abord, par écrit, évite les disputes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Tenir une activité honnête et sûre",
      lessons: [
        {
          title: "Protéger les données de vos clients",
          objectives: ["O3"],
          minutes: 5,
          goal: "Protéger les données de chaque client pendant que son téléphone est dans votre boutique.",
          text: [
            "Un téléphone contient la vie d'une personne : photos, messages, argent mobile, applications bancaires et contacts. Les clients vous le confient. Une seule photo divulguée ou un solde d'argent mobile volé peut détruire la réputation de votre boutique, et dans beaucoup de pays, cela peut être contraire à la loi.",
            "Avant la réparation : demandez au client de sauvegarder son téléphone s'il le peut, et de se déconnecter des applications d'argent mobile et de banque, ou de retirer la carte SIM. La plupart des réparations n'ont pas besoin du code de verrouillage. Si vous en avez vraiment besoin pour tester le téléphone, demandez au client de le déverrouiller devant vous, ou de mettre un code provisoire et de le changer après. Ne demandez jamais un code PIN d'argent mobile ou de banque. Aucune réparation n'en a jamais besoin.",
            "Pendant et après : n'ouvrez pas les photos, les messages ou les applications qui ne font pas partie de la réparation. Ne copiez rien, et ne laissez personne d'autre manipuler les téléphones. Rangez les téléphones dans un tiroir fermé à clé. Détruisez les fiches de réparation ou gardez-les en lieu sûr, car elles contiennent des noms et des numéros.",
            "Les pays ont des lois et des organismes de protection des données, par exemple le Bureau du Commissaire à la protection des données au Kenya, la Commission nigériane de protection des données, et la Commission de protection des données du Ghana, auprès de laquelle les entreprises qui conservent des données personnelles doivent s'enregistrer. Renseignez-vous sur ce que l'organisme de votre pays attend d'une petite entreprise comme la vôtre."
          ],
          steps: ["Demandez au client de sauvegarder le téléphone et de se déconnecter des applications d'argent, ou de retirer la SIM.", "Ne demandez pas le code de verrouillage sauf si vous en avez vraiment besoin ; laissez le client déverrouiller devant vous.", "Ne demandez jamais un code PIN d'argent mobile ou de banque.", "N'ouvrez que ce dont la réparation a besoin ; ne copiez rien.", "Enfermez les téléphones et les fiches ; vérifiez les règles de protection des données de votre pays."],
          words: [["Données personnelles", "des informations sur une personne, comme son nom, son numéro, ses photos et ses messages."], ["Sauvegarde", "une copie des données du téléphone gardée ailleurs, pour ne rien perdre si la réparation tourne mal."], ["Loi sur la protection des données", "une loi qui dit comment les entreprises doivent collecter, conserver et protéger les données personnelles des gens."]],
          slides: [
            { title: "Un téléphone contient une vie", bullets: ["Photos, messages, contacts", "Applications d'argent mobile et de banque", "Une fuite peut ruiner la réputation de votre boutique"] },
            { title: "Avant la réparation", bullets: ["Le client sauvegarde son téléphone", "Il se déconnecte des applis d'argent, ou retire la SIM", "Code de verrouillage seulement si vraiment utile ; jamais un PIN"] },
            { title: "Pendant et après", bullets: ["N'ouvrez que ce dont la réparation a besoin", "Ne copiez rien ; personne d'autre ne touche les téléphones", "Enfermez les téléphones et les fiches"] },
            { title: "Connaître la loi", bullets: ["Kenya : Bureau du Commissaire à la protection des données", "Nigeria : Commission nigériane de protection des données", "Ghana : Commission de protection des données ; ailleurs : votre organisme"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Écrivez votre engagement sur les données des clients : au moins quatre lignes courtes que vous montrerez à chaque client, comme \"Nous ne demandons jamais votre code PIN d'argent mobile.\" Écrivez le nom de l'organisme de protection des données de votre pays.",
          youCanNow: "protéger les données de vos clients avant, pendant et après une réparation, et savoir quel organisme fixe les règles dans votre pays.",
          quickCheck: [
            { objective: "O3", q: "Un technicien demande le code PIN d'argent mobile du client pour \"tester le téléphone\". Qu'est-ce qui est vrai ?", options: ["Il en faut un pour chaque réparation", "C'est acceptable s'il est honnête", "Aucune réparation n'en a besoin ; ne le demandez jamais", "Seulement pour les réparations d'écran"], answer: 2, why: "Aucune réparation n'a jamais besoin d'un code PIN d'argent mobile ou de banque." },
            { objective: "O3", q: "Que doit faire le client avant de laisser son téléphone, s'il le peut ?", options: ["Vous donner tous ses mots de passe", "Sauvegarder le téléphone et se déconnecter des applications d'argent", "Laisser le téléphone déverrouillé pour toujours", "Supprimer tous ses contacts"], answer: 1, why: "Une sauvegarde et la déconnexion des applications d'argent le protègent si quelque chose tourne mal." }
          ]
        },
        {
          title: "Fixer les prix, donner une garantie et refuser les téléphones volés",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Calculer le prix d'une réparation et rédiger une liste de prix avec les conditions de garantie.",
          text: [
            "Un prix juste couvre trois choses et laisse un bénéfice : la pièce, votre temps (la main-d'œuvre) et une part des frais de votre boutique, comme le loyer, l'électricité, les outils et les données internet. Exemple (montants donnés à titre d'exemple) : un écran coûte NGN 15 000. Votre main-d'œuvre est de NGN 4 000 et votre part des frais de la boutique de NGN 1 000. Coût : NGN 20 000. Ajoutez NGN 3 000 de bénéfice : prix NGN 23 000.",
            "Les pièces existent en plusieurs qualités. Dites honnêtement au client quelle pièce vous utilisez (d'origine, bonne copie ou copie bon marché) et le prix de chacune. Une pièce bon marché qui lâche au bout d'une semaine vous coûte votre réputation.",
            "Une garantie est votre promesse : si la même réparation lâche dans un nombre de jours fixé, à cause de votre travail ou de la pièce, vous la refaites gratuitement. Écrivez le nombre de jours, et ce qui n'est pas couvert (nouvelles chutes, eau, téléphone ouvert par quelqu'un d'autre). Affichez la liste de prix et la garantie là où les clients peuvent les voir.",
            "Refusez les téléphones qui peuvent être volés. N'achetez pas, ne débloquez pas et ne démontez pas un téléphone si le vendeur ne montre pas une preuve qu'il est à lui, comme la boîte avec le même IMEI ou un reçu. Si un téléphone semble volé, ne discutez pas ; refusez poliment. Dans beaucoup de pays, acheter des objets volés est un délit."
          ],
          steps: ["Additionnez le coût de la pièce, votre main-d'œuvre et une part des frais de la boutique.", "Ajoutez votre bénéfice pour obtenir le prix.", "Proposez honnêtement le choix des pièces, avec un prix pour chacune.", "Écrivez les jours de garantie et ce qui n'est pas couvert.", "Affichez la liste de prix ; refusez les téléphones sans preuve de propriété."],
          words: [["Main-d'œuvre", "le paiement de votre temps et de votre savoir-faire."], ["Frais généraux (frais de la boutique)", "ce que coûte le fonctionnement de la boutique, comme le loyer, l'électricité, les outils et les données, répartis sur les travaux."], ["Garantie", "une promesse écrite de réparer gratuitement la même panne pendant une durée fixée."]],
          slides: [
            { title: "Ce que couvre un prix", bullets: ["Pièce + main-d'œuvre + part des frais de la boutique", "Puis ajoutez votre bénéfice", "Exemple : coût NGN 20 000 + NGN 3 000 = NGN 23 000"] },
            { title: "Des pièces honnêtes", bullets: ["D'origine, bonne copie ou copie bon marché", "Dites au client laquelle, et le prix de chacune", "Les pièces bon marché qui lâchent coûtent votre réputation"] },
            { title: "Votre garantie", bullets: ["Même panne réparée gratuitement pendant des jours fixés", "Non couvert : nouvelles chutes, eau, ouverture par d'autres", "Affichez la liste de prix et la garantie"] },
            { title: "Refusez les téléphones volés", bullets: ["Preuve : boîte avec le même IMEI, ou reçu", "Pas de preuve : refusez poliment", "Acheter des objets volés peut être un délit"] }
          ],
          tryIt: "Écrivez votre liste de prix pour cinq réparations courantes : pour chacune, le coût de la pièce, la main-d'œuvre, la part des frais de la boutique, le bénéfice, le prix et les jours de garantie. Utilisez la monnaie de votre pays.",
          youCanNow: "fixer le prix d'une réparation pour couvrir tous vos frais avec un bénéfice, rédiger une garantie et refuser un téléphone qui peut être volé.",
          quickCheck: [
            { objective: "O4", q: "Pièce GHS 150, main-d'œuvre GHS 60, part des frais de la boutique GHS 20, bénéfice GHS 40. Quel est le prix ?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "Un jeune homme veut vous vendre un téléphone pas cher, mais il n'a ni boîte ni reçu. Que faites-vous ?", options: ["Vous refusez poliment", "Vous l'achetez vite avant les autres", "Vous le lui débloquez d'abord", "Vous le démontez pour les pièces"], answer: 0, why: "Sans preuve de propriété, le téléphone peut être volé ; refusez." }
          ]
        },
        {
          title: "Déchets électroniques, batteries usagées et kit de départ de votre boutique",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Stocker les batteries usagées et les pièces cassées en sécurité et les remettre à un collecteur agréé.",
          text: [
            "Les vieux téléphones, écrans, cartes et batteries sont des déchets électroniques. Ils contiennent du plomb, du mercure et d'autres poisons. L'OMS (Organisation mondiale de la santé) dit que brûler les déchets électroniques est la façon la plus dangereuse de les traiter, et que cela nuit surtout aux enfants et aux femmes enceintes. En 2022, le monde a produit environ 62 millions de tonnes de déchets électroniques, et seulement 22,3 % ont été collectés et recyclés correctement de façon documentée.",
            "Ne brûlez jamais les déchets électroniques pour récupérer le cuivre, et ne jetez jamais les batteries à la poubelle, dans le feu ou dans un égout. Mettez du ruban adhésif sur les bornes des batteries usagées, gardez-les dans une boîte en métal fermée remplie de sable sec, loin de la chaleur, et rangez les écrans et les cartes cassés dans une autre boîte, avec une étiquette.",
            "Remettez-les à un collecteur ou à un recycleur de déchets électroniques. Demandez à la mairie ou au conseil de votre comté, à l'agence de l'environnement, ou aux vendeurs de téléphones et aux boutiques des opérateurs quels collecteurs sont agréés chez vous. Notez ce que vous avez remis et quand.",
            "Préparez maintenant votre kit de départ : votre liste de prix, votre fiche de réparation, votre engagement sur les données et votre fiche de sécurité avec les règles pour les batteries et l'endroit où vont vos déchets électroniques."
          ],
          steps: ["Mettez du ruban adhésif sur les bornes des batteries usagées.", "Gardez-les dans une boîte en métal fermée remplie de sable sec, loin de la chaleur.", "Rangez les écrans et les cartes cassés dans une boîte étiquetée.", "Demandez à la mairie ou à l'agence de l'environnement un collecteur agréé.", "Remettez-les et notez quoi et quand. Ne brûlez et ne jetez jamais les déchets électroniques."],
          words: [["Déchets électroniques", "des appareils et des pièces électroniques vieux ou cassés, comme des téléphones, des écrans, des cartes et des batteries."], ["Bornes", "les extrémités en métal d'une batterie, là où elle se branche ; les couvrir de ruban adhésif évite les courts-circuits."], ["Recycleur", "une entreprise qui démonte les déchets électroniques en sécurité et récupère les matériaux."]],
          slides: [
            { title: "Les déchets électroniques sont toxiques", bullets: ["Plomb, mercure et autres poisons", "Les brûler est le plus dangereux (OMS)", "Les enfants et les femmes enceintes sont les plus touchés"] },
            { title: "Stockez-les en sécurité", bullets: ["Ruban adhésif sur les bornes des batteries usagées", "Boîte en métal fermée remplie de sable sec, loin de la chaleur", "Écrans et cartes dans une boîte étiquetée"] },
            { title: "Remettez-les", bullets: ["Demandez à la mairie ou à l'agence de l'environnement", "Passez par un collecteur ou un recycleur agréé", "Notez ce que vous avez remis et quand"] },
            { title: "Le kit de départ de votre boutique", bullets: ["Liste de prix avec garantie", "Fiche de réparation ; engagement sur les données des clients", "Fiche de sécurité : règles des batteries et plan pour les déchets"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Préparez le kit de départ de votre boutique, comme décrit dans la tâche finale. Ajoutez une ligne à votre fiche de sécurité avec le nom de la personne qui collectera vos déchets électroniques, ou de l'organisme que vous allez consulter.",
          youCanNow: "stocker et remettre les déchets électroniques en sécurité et préparer un kit de départ pour une boutique de réparation de téléphones honnête et sûre.",
          quickCheck: [
            { objective: "O5", q: "Quelle est la façon la plus sûre de se débarrasser des batteries de téléphone usagées ?", options: ["Les brûler", "Les jeter à la poubelle", "Mettre du ruban sur les bornes, les garder dans une boîte de sable, les remettre à un collecteur agréé", "Les enterrer dans la cour"], answer: 2, why: "Le ruban adhésif, un stockage sûr et un collecteur agréé évitent les incendies et la pollution." },
            { objective: "O5", q: "D'après l'OMS, quelle est la façon la plus dangereuse de traiter les déchets électroniques ?", options: ["Les garder dans une boîte", "Les apporter à un recycleur", "Les noter", "Les brûler"], answer: 3, why: "L'OMS dit que brûler les déchets électroniques est la pratique la plus dangereuse, à cause des fumées toxiques." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Tenir une activité honnête et sûre",
        questions: [
          { objective: "O3", q: "Une réparation a vraiment besoin que le téléphone soit déverrouillé pour le tester. Quelle est la meilleure solution ?", options: ["Demander au client de le déverrouiller devant vous, ou de mettre un code provisoire", "Demander son code PIN de banque", "Deviner le code", "Réinitialiser le téléphone sans demander"], answer: 0, why: "Le client garde le contrôle de son code, et aucun code PIN d'argent n'est jamais en jeu." },
          { objective: "O3", q: "Que devez-vous faire des fiches de réparation qui contiennent les noms et les numéros des clients ?", options: ["Les jeter dans la rue", "Les publier en ligne", "Les garder sous clé ou les détruire quand elles ne servent plus", "Les donner à d'autres boutiques"], answer: 2, why: "Les fiches de réparation contiennent des données personnelles ; il faut donc les garder en sécurité." },
          { objective: "O4", q: "Quel coût les nouveaux réparateurs oublient-ils le plus souvent dans leur prix ?", options: ["La pièce", "Leur part des frais de la boutique, comme le loyer et l'électricité", "L'écran", "Le nom du client"], answer: 1, why: "Les frais de la boutique, comme le loyer, l'électricité et les données, doivent être répartis sur les travaux, sinon vous perdez de l'argent." },
          { objective: "O4", q: "Que doit dire une garantie ?", options: ["Rien ; il suffit de sourire", "Que tout problème est gratuit pour toujours", "Seulement le prix", "Le nombre de jours, et ce qui n'est pas couvert"], answer: 3, why: "Une garantie claire indique les jours et les exclusions." },
          { objective: "O5", q: "Pourquoi acheter un téléphone sans preuve de propriété pose-t-il problème ?", options: ["Il peut être volé, et acheter des objets volés peut être un délit", "C'est toujours trop cher", "Les téléphones sans boîte ne marchent pas", "Ce n'est pas un problème"], answer: 0, why: "Sans preuve, le téléphone peut être volé, ce qui attire des ennuis avec la justice." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer son activité de réparation de téléphones",
    questions: [
      { objective: "O1", q: "Quel est le meilleur endroit pour votre poste de réparation ?", options: ["À côté du feu de cuisine", "Sec, bien éclairé, loin du carburant et de l'eau", "Dehors sous la pluie", "Sur un bidon de carburant"], answer: 1, why: "Un poste sec et bien éclairé, loin du carburant et de l'eau, est le plus sûr." },
      { objective: "O1", q: "Que devez-vous porter pour ouvrir un écran fissuré ?", options: ["Des lunettes de protection", "Rien de spécial", "Des gants en métal", "Des lunettes de soleil, seulement la nuit"], answer: 0, why: "Les lunettes de protection protègent vos yeux des éclats de verre." },
      { objective: "O1", q: "Pourquoi ne faut-il jamais utiliser une station à air chaud près d'une batterie ?", options: ["Elle gaspille l'électricité", "Elle salit l'écran", "La chaleur peut faire prendre feu à la batterie", "Elle est trop lente"], answer: 2, why: "Surchauffer une batterie au lithium peut provoquer un incendie." },
      { objective: "O1", q: "Que ne faut-il JAMAIS faire à une batterie gonflée ?", options: ["La retirer avec soin", "La ranger dans une boîte de sable", "Prévenir le client", "L'aplatir ou la percer"], answer: 3, why: "Aplatir ou percer une batterie gonflée peut la faire brûler." },
      { objective: "O2", q: "Quel est le bon ordre des vérifications ?", options: ["Ouvrir d'abord le téléphone, puis poser des questions", "Les causes les plus simples d'abord : regarder, chargeur, port, redémarrage, puis ouvrir", "Remplacer d'abord la carte", "Faire payer le client d'abord"], answer: 1, why: "Commencer simple fait gagner du temps et de l'argent et évite d'ouvrir le téléphone pour rien." },
      { objective: "O2", q: "Quelle information a sa place sur une fiche de réparation ?", options: ["Le code PIN d'argent mobile du client", "Le mot de passe bancaire du client", "Le modèle du téléphone, l'IMEI, la panne, les dégâts vus, le prix et la date", "Les clés de la maison du client"], answer: 2, why: "Une fiche de réparation décrit le travail, pas des secrets comme les codes PIN ou les mots de passe." },
      { objective: "O2", q: "Un téléphone \"ne charge plus\". Vous enlevez les peluches du port et il charge. Combien faites-vous payer ?", options: ["Le prix d'une carte neuve", "Une petite somme juste pour le travail fait", "Rien, et vous refusez les prochains travaux", "Le prix d'un téléphone neuf"], answer: 1, why: "Un prix honnête pour le vrai travail crée la confiance et fait revenir les clients." },
      { objective: "O2", q: "Pourquoi obtenir le oui du client avant d'ouvrir le téléphone ?", options: ["Pour qu'il accepte le travail et le prix, ce qui évite les disputes", "Ce n'est pas utile", "Pour pouvoir demander plus après", "Pour connaître son code PIN"], answer: 0, why: "Un accord écrit vous protège tous les deux." },
      { objective: "O3", q: "De quoi une réparation de téléphone n'a-t-elle jamais besoin ?", options: ["Du modèle du téléphone", "De la description de la panne", "Du numéro de téléphone du client", "Du code PIN d'argent mobile du client"], answer: 3, why: "Aucune réparation n'a jamais besoin d'un code PIN d'argent mobile ou de banque." },
      { objective: "O3", q: "Pendant que vous réparez un écran, vous voyez la galerie de photos du client. Que faites-vous ?", options: ["Vous n'ouvrez que ce dont la réparation a besoin et ne regardez rien d'autre", "Vous regardez les photos", "Vous les copiez sur votre téléphone", "Vous les montrez à un ami"], answer: 0, why: "Respecter la vie privée, c'est n'ouvrir que ce dont la réparation a besoin." },
      { objective: "O3", q: "Quel organisme fixe les règles de protection des données au Nigeria ?", options: ["Les pompiers", "La Commission nigériane de protection des données", "La fédération de football", "Aucun organisme"], answer: 1, why: "La Commission nigériane de protection des données a été créée par la loi nigériane sur la protection des données de 2023." },
      { objective: "O3", q: "Où faut-il garder les téléphones qui attendent une réparation ?", options: ["Sur le comptoir, à la portée de tous", "Dans un tiroir fermé à clé", "Chez un voisin", "Devant la boutique"], answer: 1, why: "Enfermer les téléphones les protège, eux et leurs données." },
      { objective: "O4", q: "Pièce KES 2 500, main-d'œuvre KES 800, part des frais de la boutique KES 200, bénéfice KES 500. Quel est le prix ?", options: ["KES 3 300", "KES 3 500", "KES 4 000", "KES 2 500"], answer: 2, why: "2 500 + 800 + 200 + 500 = 4 000." },
      { objective: "O4", q: "Un client peut payer un écran copie bon marché ou un écran d'origine. Qu'est-ce qui est honnête ?", options: ["Lui dire quelle pièce, et le prix de chacune, et le laisser choisir", "Dire que la copie est d'origine", "Poser la moins chère et faire payer l'originale", "Refuser de répondre"], answer: 0, why: "Proposer honnêtement les pièces crée la confiance et évite les plaintes." },
      { objective: "O4", q: "Qu'est-ce qui n'est généralement PAS couvert par une garantie de réparation ?", options: ["La même pièce qui lâche à cause de votre travail", "Un défaut de la pièce que vous avez posée", "Votre erreur de montage", "Une nouvelle chute ou des dégâts des eaux"], answer: 3, why: "Les nouveaux dégâts après la réparation ne sont normalement pas couverts ; écrivez-le sur votre garantie." },
      { objective: "O5", q: "Un vendeur a une boîte avec un IMEI qui correspond au téléphone (composez *#06#) et un reçu. Qu'est-ce que cela montre ?", options: ["Une preuve que le téléphone est probablement à lui", "Que le téléphone est volé", "Rien du tout", "Qu'il est en panne"], answer: 0, why: "Un IMEI qui correspond et un reçu sont des preuves de propriété." },
      { objective: "O5", q: "Pourquoi ne faut-il jamais brûler de vieilles cartes pour récupérer le cuivre ?", options: ["Le cuivre ne vaut rien", "C'est trop long", "Les fumées sont toxiques et nuisent surtout aux enfants et aux femmes enceintes", "Ça ne fait pas assez de bruit"], answer: 2, why: "Brûler les déchets électroniques dégage des fumées toxiques ; c'est la pratique la plus dangereuse selon l'OMS." },
      { objective: "O5", q: "Comment stocker les batteries usagées avant la collecte ?", options: ["En vrac dans un tiroir avec les outils", "Bornes couvertes de ruban, dans une boîte en métal fermée remplie de sable sec, loin de la chaleur", "Dans un seau d'eau au soleil", "Dans votre poche"], answer: 1, why: "Le ruban adhésif et la boîte de sable évitent les courts-circuits et les incendies." },
      { objective: "O5", q: "Qui peut vous indiquer les collecteurs de déchets électroniques agréés ?", options: ["Seulement vos clients", "Personne", "N'importe qui qui brûle des déchets au bord de la route", "La mairie ou l'agence de l'environnement"], answer: 3, why: "Les mairies et les agences de l'environnement connaissent les collecteurs agréés." },
      { objective: "O1", q: "Une batterie prend feu et vous ne pouvez pas maîtriser le feu. Que faites-vous ?", options: ["Vous faites sortir tout le monde et appelez les pompiers", "Vous continuez la réparation", "Vous versez du carburant dessus", "Vous la prenez à mains nues"], answer: 0, why: "Un feu qu'on ne maîtrise pas, c'est sortir et appeler les pompiers." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie de votre kit de départ et réessayez.",
    criteria: [
      { name: "Fiche de sécurité des batteries", objective: "O1", notYet: "Pas de fiche, ou il manque les signes d'alerte ou ce qu'il faut faire si une batterie fume.", meets: "La fiche donne les signes d'alerte, les bonnes habitudes et ce qu'il faut faire si une batterie fume ou brûle.", exceeds: "Elle indique aussi le numéro des pompiers et l'endroit où se trouve la boîte de sable." },
      { name: "Fiche de réparation", objective: "O2", notYet: "Il manque sur la fiche la panne, le prix ou l'accord du client.", meets: "Elle note le client, le modèle du téléphone, l'IMEI, la panne, les dégâts vus, le travail, le prix, la date et le oui du client.", exceeds: "Elle a aussi un numéro de ticket et une case pour la date de fin de garantie." },
      { name: "Engagement sur les données des clients", objective: "O3", notYet: "Pas d'engagement, ou il demande un code PIN ou un mot de passe.", meets: "Au moins quatre lignes claires, dont ne jamais demander de code PIN d'argent et ne rien copier.", exceeds: "Il cite aussi l'organisme de protection des données du pays et la façon dont les fiches sont gardées en sécurité." },
      { name: "Liste de prix", objective: "O4", notYet: "Les prix sont devinés, ou les calculs sont faux.", meets: "Au moins cinq réparations, chacune avec pièce, main-d'œuvre, frais de la boutique, bénéfice, prix et jours de garantie, avec des totaux justes.", exceeds: "Elle montre aussi le choix des pièces (d'origine ou copie) et ce que la garantie ne couvre pas." },
      { name: "Déchets électroniques et téléphones volés", objective: "O5", notYet: "Pas de plan, ou le plan prévoit de brûler ou de jeter n'importe où.", meets: "Les batteries et les pièces sont stockées en sécurité et remises à un collecteur ou à un organisme nommé ; les téléphones sans preuve sont refusés.", exceeds: "Il garde aussi une trace de ce qui a été remis et quand." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent utiliser une fiche de réparation et une liste de prix dans leur boutique dans les 30 jours (enquête de suivi)",
      "Apprenants qui ne signalent aucun incendie de batterie ni aucune plainte sur les données dans leur boutique pendant 90 jours",
      "Apprenants qui disent remettre leurs déchets électroniques à un collecteur au lieu de les brûler ou de les jeter, dans les 90 jours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone simple avec une calculatrice",
      "Du papier et un stylo pour le plan du poste, la fiche de réparation, la liste de prix, l'engagement sur les données et la fiche de sécurité",
      "Si possible, un vieux téléphone (dont la batterie a déjà été retirée en sécurité par un formateur) pour s'entraîner avec une fiche de réparation",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Dans un programme pour les jeunes ou de formation professionnelle : faites le test de départ ensemble, puis un chapitre par séance ; associez le cours à une pratique encadrée par un technicien qualifié.",
      "Ne laissez jamais les apprenants s'entraîner sur des batteries gonflées ou abîmées ; montrez plutôt des photos.",
      "Avant le cours, renseignez-vous sur les collecteurs de déchets électroniques agréés et l'organisme de protection des données de votre région, pour que les apprenants puissent écrire de vrais noms.",
      "Ne demandez jamais aux apprenants de partager des codes PIN ou des mots de passe en classe.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
