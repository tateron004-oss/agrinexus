"use strict";

// Koach Learn course (shared), French translation of "Strategies for Integrating AI into Your Organization". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-integration-strategy-fr",
  lang: "fr",
  translationOf: "ai-integration-strategy",
  category: "Athletes",
  name: "Stratégies pour intégrer l'IA dans votre organisation",
  skills: "Évaluer la préparation à l'IA, Fixer des objectifs liés à la mission, Rédiger une charte d'utilisation de l'IA, Gérer les risques de l'IA, Accompagner les personnes dans le changement, Construire une feuille de route sur 90 jours",
  outcome: "rédiger un plan d'intégration de l'IA sur 90 jours pour une organisation : une évaluation de la préparation, des objectifs liés à sa mission, une charte d'utilisation de l'IA d'une page, une analyse des risques, un plan de formation et de communication, et une feuille de route avec responsables et dates.",
  about: [
    "Utiliser un outil d'IA, c'est facile. Faire entrer l'IA dans toute une organisation, pour que les gens l'utilisent bien, en sécurité et pour les bonnes raisons, demande un plan. Ce cours vous donne ce plan, étape par étape.",
    "Il s'adresse aux athlètes qui construisent une marque ou une entreprise et aux équipes, académies et ligues qui les entourent, aux propriétaires de petites entreprises, et aux responsables et conseils d'administration d'associations. Exemples : une académie de basket pour jeunes, l'entreprise d'entraînement et de médias d'un athlète professionnel, un restaurant familial et une association de quartier.",
    "Vous construirez au fil du cours un vrai plan d'IA sur 90 jours pour une organisation. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Rédigez un plan d'intégration de l'IA sur 90 jours pour une organisation réelle ou fictive (par exemple l'entreprise de marque d'un athlète, une académie sportive, une petite entreprise ou une association). Incluez une note de préparation, trois objectifs liés à la mission, une charte d'utilisation de l'IA d'une page, un tableau des risques, un plan de formation et de communication, et une feuille de route avec un responsable et une date pour chaque étape.",
  chapters: [
    {
      name: "Chapitre 1 : Se préparer à l'IA",
      lessons: [
        {
          title: "Évaluer la préparation de votre organisation à l'IA",
          minutes: 5,
          goal: "Noter la préparation d'une organisation à l'IA dans cinq domaines.",
          text: [
            "Avant d'acheter des outils, évaluez la préparation. Beaucoup de projets d'IA échouent non pas parce que l'outil est mauvais, mais parce que les personnes, les données ou les règles n'étaient pas prêtes.",
            "Notez cinq domaines de 1 (pas prêt) à 5 (prêt). Direction : les dirigeants soutiennent-ils le projet et y consacrent-ils du temps ? Personnes : le personnel, les joueurs ou les bénévoles ont-ils des compétences numériques de base ? Données : vos informations sont-elles organisées et stockées en sécurité ? Processus : vos tâches principales sont-elles écrites ? Règles : avez-vous des règles de confidentialité et de sécurité ?",
            "Des notes basses ne sont pas une raison d'arrêter. Elles indiquent par où commencer. L'entreprise d'un athlète très forte sur les réseaux sociaux mais aux dossiers désordonnés pourrait commencer par organiser ses fichiers avant d'y appliquer l'IA."
          ],
          steps: ["Notez direction, personnes, données, processus et règles de 1 à 5.", "Écrivez une phrase de preuve pour chaque note.", "Entourez les deux notes les plus basses.", "Notez une correction pour chaque note basse."],
          words: [["Préparation", "le degré auquel une organisation est prête à commencer quelque chose de nouveau."], ["Données", "les informations qu'une organisation conserve, comme les plannings, les dossiers et les fichiers."]],
          slides: [
            { title: "Pourquoi évaluer la préparation", bullets: ["Les outils causent rarement l'échec", "Les personnes, données ou règles non prêtes, si"] },
            { title: "Noter cinq domaines, de 1 à 5", bullets: ["Direction et personnes", "Données et processus", "Règles de confidentialité et de sécurité"] },
            { title: "Les notes basses montrent où commencer", bullets: ["Régler d'abord les bases", "Exemple : organiser les fichiers avant d'y appliquer l'IA"] }
          ],
          tryIt: "Choisissez une organisation réelle ou fictive. Notez sa préparation dans les cinq domaines avec une phrase de preuve chacun, et indiquez la première correction pour les deux notes les plus basses.",
          youCanNow: "noter la préparation d'une organisation à l'IA et trouver par où commencer."
        },
        {
          title: "Fixer des objectifs d'IA liés à la mission",
          minutes: 5,
          goal: "Écrire trois objectifs d'IA mesurables qui servent la mission de l'organisation.",
          text: [
            "L'IA doit servir la mission, et non l'inverse. Partez de la raison d'être de l'organisation : former de jeunes athlètes, développer une marque, servir des repas, vendre d'excellents produits.",
            "Demandez-vous ensuite où l'IA pourrait aider cette mission : plus de temps avec les athlètes ou les clients, des réponses plus rapides aux familles ou aux clients, une meilleure utilisation des données, des coûts plus bas. Transformez chaque idée en objectif mesurable : « Réduire le temps administratif hebdomadaire des entraîneurs de 6 heures à 3 d'ici mars. »",
            "Utilisez la grille SMART : spécifique, mesurable, atteignable, pertinent pour la mission et limité dans le temps. Trois objectifs suffisent pour 90 jours."
          ],
          steps: ["Écrivez la mission en une phrase.", "Listez trois façons dont l'IA pourrait la soutenir.", "Transformez chacune en objectif SMART avec un chiffre et une date."],
          words: [["Mission", "la raison d'être principale d'une organisation."], ["Objectif SMART", "un objectif spécifique, mesurable, atteignable, pertinent et limité dans le temps."]],
          slides: [
            { title: "La mission d'abord", bullets: ["L'IA sert la mission", "Et non l'inverse"] },
            { title: "Où l'IA peut aider", bullets: ["Plus de temps avec les athlètes ou les clients", "Des réponses plus rapides", "Des coûts plus bas, de meilleures données"] },
            { title: "Objectifs SMART", bullets: ["Spécifique, mesurable, atteignable", "Pertinent pour la mission, limité dans le temps", "Trois objectifs pour 90 jours"] }
          ],
          tryIt: "Écrivez la mission de l'organisation en une phrase et trois objectifs d'IA SMART qui la soutiennent.",
          youCanNow: "fixer des objectifs d'IA mesurables qui servent la mission d'une organisation."
        },
        {
          title: "Rédiger une charte d'utilisation de l'IA d'une page",
          minutes: 6,
          goal: "Rédiger une courte charte d'utilisation de l'IA qui dit ce qui est permis, ce qui ne l'est pas et à qui s'adresser.",
          text: [
            "Une charte d'utilisation de l'IA est un court ensemble de règles sur la façon dont les membres de l'organisation utilisent l'IA. Sans elle, les gens devinent, et quelqu'un risque de coller des informations privées sur des joueurs, des clients ou des donateurs dans un outil gratuit.",
            "Limitez-la à une page et couvrez : les outils approuvés ; ce qui ne doit jamais entrer dans l'IA (dossiers de santé, numéros de sécurité sociale et bancaires, contrats privés, informations sur des enfants, mots de passe) ; une relecture humaine avant toute publication ou tout envoi d'un contenu fait par l'IA ; l'honnêteté sur l'usage de l'IA quand c'est important ; et la personne à qui poser ses questions.",
            "Ajoutez des règles propres à votre domaine. Les organisations sportives doivent protéger les données de santé et de performance des athlètes et les informations sur les mineurs. Les associations doivent protéger les dossiers des donateurs et des bénéficiaires. Demandez un avis juridique pour les contrats, les partenariats et les lois sur les données qui vous concernent."
          ],
          steps: ["Listez les outils d'IA approuvés.", "Listez les informations qui ne doivent jamais entrer dans l'IA.", "Exigez qu'une personne relise le travail de l'IA avant envoi ou publication.", "Dites quand l'usage de l'IA doit être signalé.", "Nommez une personne de contact pour les questions.", "Fixez une date pour revoir la charte."],
          words: [["Charte", "une règle écrite que tout le monde suit dans une organisation."], ["Relecture humaine", "une personne qui vérifie le travail de l'IA avant qu'il soit utilisé."]],
          slides: [
            { title: "Pourquoi une charte", bullets: ["Les gens cessent de deviner", "Les données privées restent hors des outils gratuits"] },
            { title: "Une page qui couvre", bullets: ["Les outils approuvés", "Ce qui n'entre jamais dans l'IA", "La relecture humaine et à qui s'adresser"] },
            { title: "Règles propres au domaine", bullets: ["Sport : données de santé des athlètes, mineurs", "Associations : dossiers des donateurs et bénéficiaires", "Avis juridique pour contrats et lois sur les données"] }
          ],
          tryIt: "Rédigez une charte d'utilisation de l'IA d'une page pour votre organisation avec les six parties. Demandez à un assistant d'IA de repérer ce qui n'est pas clair, puis corrigez-la vous-même.",
          youCanNow: "rédiger une courte charte d'utilisation de l'IA qui protège les personnes et les données."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer à l'IA",
        questions: [
          { q: "Pourquoi évaluer la préparation avant d'acheter des outils d'IA ?", options: ["Les outils sont toujours mauvais", "C'est obligatoire par la loi", "Des personnes, données ou règles non prêtes causent la plupart des échecs", "Pour dépenser plus d'argent"], answer: 2, why: "Ce sont les manques de préparation, pas les outils, qui causent le plus souvent les problèmes." },
          { q: "Une académie a des dossiers désordonnés et éparpillés. Quelle est une première étape judicieuse ?", options: ["Organiser les fichiers avant d'y appliquer l'IA", "Tout donner à l'IA tel quel", "Renoncer à l'IA", "Acheter l'outil le plus cher"], answer: 0, why: "Des données organisées rendent l'IA utile et plus sûre." },
          { q: "Lequel est un objectif SMART ?", options: ["« Utiliser plus d'IA »", "« Être moderne »", "« Essayer des trucs »", "« Réduire le temps administratif hebdomadaire des entraîneurs de 6 heures à 3 d'ici mars »"], answer: 3, why: "Il est spécifique, mesurable et limité dans le temps." },
          { q: "Que doit dire une charte d'utilisation de l'IA sur les dossiers de santé des athlètes ?", options: ["On peut les coller n'importe où", "Ils ne doivent jamais entrer dans des outils d'IA non approuvés pour cela", "Les publier en ligne", "Les partager avec les sponsors"], answer: 1, why: "Les données de santé sont privées et doivent être protégées." },
          { q: "Qui doit vérifier un contenu fait par l'IA avant sa publication ?", options: ["Personne", "Une personne", "Seulement l'IA elle-même", "Un abonné au hasard"], answer: 1, why: "La relecture humaine est une règle de base de la charte." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Déployer l'IA en sécurité",
      lessons: [
        {
          title: "Gérer les risques de l'IA avec un cadre simple",
          minutes: 5,
          goal: "Construire un tableau des risques pour un usage de l'IA et attribuer un contrôle à chaque risque.",
          text: [
            "Le NIST (National Institute of Standards and Technology, l'institut américain des normes et de la technologie) publie un cadre de gestion des risques de l'IA, gratuit et facultatif : l'AI Risk Management Framework. Ses quatre fonctions de base sont Gouverner, Cartographier, Mesurer et Gérer. Vous pouvez les utiliser en mots simples, même dans une petite organisation.",
            "Gouverner : qui est responsable et quelles sont les règles (votre charte). Cartographier : pour chaque usage de l'IA, ce qui pourrait mal tourner et qui pourrait en souffrir. Mesurer : comment vous repérerez les problèmes, par exemple en vérifiant des réponses au hasard. Gérer : ce que vous faites face à chaque risque, comme une relecture humaine ou ne pas utiliser l'IA pour cette tâche.",
            "Risques courants de l'IA : faits erronés, fuites de données privées, traitement injuste des personnes, problèmes de droits d'auteur et atteinte à la réputation. Inscrivez chacun dans un tableau des risques avec sa probabilité, sa gravité et le contrôle prévu."
          ],
          steps: ["Listez chaque usage prévu de l'IA.", "Pour chacun, écrivez ce qui pourrait mal tourner et qui pourrait en souffrir.", "Évaluez la probabilité et l'impact : faible, moyen ou élevé.", "Ajoutez un contrôle pour chaque risque.", "Nommez la personne qui vérifie que le contrôle fonctionne."],
          words: [["NIST", "le National Institute of Standards and Technology, l'institut américain qui publie des normes et des conseils techniques."], ["Tableau des risques", "une liste des risques avec leur probabilité, leur gravité et ce que vous ferez."]],
          slides: [
            { title: "AI RMF du NIST : quatre fonctions", bullets: ["Gouverner : rôles et règles", "Cartographier : ce qui pourrait mal tourner", "Mesurer : comment le repérer", "Gérer : ce qu'on fait"] },
            { title: "Risques courants de l'IA", bullets: ["Faits erronés et fuites de données", "Traitement injuste des personnes", "Droits d'auteur et réputation"] },
            { title: "Un tableau des risques simple", bullets: ["Risque, probabilité, impact", "Contrôle et qui le vérifie"] }
          ],
          sources: [{ name: "NIST : AI Risk Management Framework (cadre de gestion des risques de l'IA)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Faites un tableau des risques pour deux usages de l'IA de votre plan, avec au moins trois risques chacun, une note de probabilité et d'impact, un contrôle et une personne qui le vérifie.",
          youCanNow: "cartographier les risques de l'IA et attribuer des contrôles avec les quatre fonctions du NIST."
        },
        {
          title: "Accompagner les personnes dans le changement",
          minutes: 5,
          goal: "Rédiger un plan de formation et de communication qui aide les gens à adopter l'IA.",
          text: [
            "L'IA inquiète : Va-t-elle me remplacer ? Vais-je avoir l'air bête ? Est-ce permis ? Ignorer ces inquiétudes ralentit tout. Abordez-les ouvertement.",
            "Communiquez le pourquoi (la mission et les objectifs), le quoi (quels outils et quelles règles) et ce que chacun y gagne (moins d'administratif, plus de temps pour l'entraînement, les clients ou la famille). Nommez des référents IA : une ou deux personnes qui apprennent en premier et aident les autres.",
            "Formez par petites doses : une séance pratique de 30 minutes par outil, un aide-mémoire d'une page avec de bonnes demandes (prompts), et un endroit pour poser des questions. Célébrez les premières réussites en réunion d'équipe."
          ],
          steps: ["Écrivez un court message : pourquoi, quoi, et ce que les gens y gagnent.", "Choisissez un ou deux référents IA.", "Prévoyez des séances pratiques de 30 minutes.", "Faites un aide-mémoire de prompts d'une page.", "Partagez les premières réussites en réunion."],
          words: [["Conduite du changement", "aider les gens à passer de l'ancienne façon de travailler à une nouvelle."], ["Référent IA", "un membre de l'équipe qui apprend en premier et aide les autres."]],
          slides: [
            { title: "Répondre aux inquiétudes", bullets: ["Va-t-elle me remplacer ?", "Vais-je avoir l'air bête ?", "Est-ce permis ?"] },
            { title: "Communiquer clairement", bullets: ["Pourquoi : mission et objectifs", "Quoi : outils et règles", "Ce que chacun y gagne"] },
            { title: "Former par petites doses", bullets: ["Séances pratiques de 30 minutes", "Aide-mémoire de prompts et référents IA", "Célébrer les premières réussites"] }
          ],
          tryIt: "Écrivez une annonce de cinq phrases à votre équipe, vos joueurs, votre personnel ou vos bénévoles sur le plan d'IA, et un calendrier de formation pour le premier mois.",
          youCanNow: "planifier une formation et une communication qui aident les gens à adopter l'IA."
        },
        {
          title: "Construire la feuille de route sur 90 jours",
          minutes: 5,
          goal: "Transformer objectifs, charte, risques et formation en une feuille de route sur 90 jours avec responsables et dates.",
          text: [
            "Une feuille de route met tout en ordre avec des dates. Divisez les 90 jours en trois phases de 30 jours. Jours 1 à 30 : les fondations (charte approuvée, fichiers organisés, référents formés). Jours 31 à 60 : les pilotes (un ou deux petits usages de l'IA testés avec des mesures). Jours 61 à 90 : le bilan et l'extension (décider quoi garder, étendre ou arrêter).",
            "Chaque étape a besoin d'un responsable et d'une date limite. Une étape sans responsable ne se fait généralement pas.",
            "Prévoyez un point toutes les deux semaines et un bilan au jour 90 par rapport à vos objectifs SMART. Puis rédigez le plan des 90 jours suivants. Les outils et les règles de l'IA changent vite ; revoyez donc la charte au moins tous les six mois."
          ],
          steps: ["Jours 1 à 30 : les fondations.", "Jours 31 à 60 : des pilotes avec des mesures.", "Jours 61 à 90 : bilan, puis étendre ou arrêter.", "Donnez à chaque étape un responsable et une date.", "Prévoyez des points toutes les deux semaines et un bilan au jour 90."],
          words: [["Feuille de route", "un plan qui montre les étapes dans l'ordre avec des dates."], ["Responsable", "la personne chargée de faire aboutir une étape."]],
          slides: [
            { title: "Trois phases de 30 jours", bullets: ["1 à 30 : fondations", "31 à 60 : pilotes", "61 à 90 : bilan et extension"] },
            { title: "Responsables et dates", bullets: ["Chaque étape a un responsable", "Chaque étape a une date limite"] },
            { title: "Faire vivre le plan", bullets: ["Points toutes les deux semaines", "Bilan au jour 90 face aux objectifs", "Revoir la charte tous les six mois"] }
          ],
          tryIt: "Tâche finale : construisez votre feuille de route sur 90 jours dans un tableau avec phase, étape, responsable et date, et joignez-y votre note de préparation, vos objectifs, votre charte, votre tableau des risques et votre plan de formation pour compléter votre plan d'intégration de l'IA.",
          youCanNow: "rédiger un plan complet sur 90 jours pour faire entrer l'IA dans une organisation en sécurité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Déployer l'IA en sécurité",
        questions: [
          { q: "Quelles sont les quatre fonctions de base du cadre de gestion des risques de l'IA du NIST ?", options: ["Acheter, Construire, Vendre, Recommencer", "Planifier, Faire, Vérifier, Agir", "Lire, Écrire, Tester, Livrer", "Gouverner, Cartographier, Mesurer, Gérer"], answer: 3, why: "Le NIST nomme Gouverner, Cartographier, Mesurer et Gérer." },
          { q: "Le cadre de gestion des risques de l'IA du NIST est-il obligatoire par la loi pour les petites organisations ?", options: ["Non, le NIST dit qu'il est facultatif", "Oui, avec de lourdes amendes", "Seulement pour les athlètes", "Seulement au Kenya"], answer: 0, why: "Le NIST le présente comme destiné à un usage volontaire." },
          { q: "Un entraîneur craint que l'IA le remplace. Quelle est la meilleure réponse ?", options: ["L'ignorer", "Lui dire d'arrêter de poser des questions", "Expliquer ouvertement comment l'IA libère du temps pour l'entraînement et ce qui ne changera pas", "Cacher le plan"], answer: 2, why: "Répondre ouvertement aux inquiétudes accélère l'adoption." },
          { q: "Qu'est-ce qu'un référent IA ?", options: ["Une IA qui gagne des matchs", "Un influenceur payé", "L'outil le plus cher", "Un membre de l'équipe qui apprend en premier et aide les autres"], answer: 3, why: "Les référents diffusent les compétences et la confiance." },
          { q: "Une étape de la feuille de route n'a pas de responsable. Que se passe-t-il en général ?", options: ["Elle se termine en avance", "L'IA la fait", "Elle ne se fait pas", "Rien ne change"], answer: 2, why: "Une étape a besoin d'un responsable pour se faire." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Stratégies pour intégrer l'IA dans votre organisation",
    questions: [
      { q: "La plupart des projets d'IA échouent parce que :", options: ["Les outils ne marchent jamais", "Les personnes, les données ou les règles n'étaient pas prêtes", "L'IA est illégale", "Les ordinateurs sont trop lents"], answer: 1, why: "Les manques de préparation causent la plupart des échecs." },
      { q: "Lequel est l'un des cinq domaines de préparation ?", options: ["Les données", "Les couleurs de l'équipe", "La taille du bureau", "Le cours de la bourse"], answer: 0, why: "Direction, personnes, données, processus et règles." },
      { q: "Une note de préparation basse veut dire :", options: ["Arrêter pour toujours", "L'ignorer", "Commencer par améliorer ce domaine", "Acheter plus d'outils"], answer: 2, why: "Les notes basses montrent par où commencer." },
      { q: "Les objectifs d'IA doivent être liés à :", options: ["La mission de l'organisation", "Ce que publient les concurrents", "La dernière mode", "Rien de particulier"], answer: 0, why: "L'IA sert la mission." },
      { q: "SMART veut dire :", options: ["Simple, moderne, automatique, rapide, technique", "Smart, mobile, IA, robot, tech", "Ventes, marketing, administration, commerce, impôts", "Spécifique, mesurable, atteignable, pertinent, limité dans le temps"], answer: 3, why: "Ce sont les cinq critères SMART." },
      { q: "Combien d'objectifs le cours conseille-t-il pour 90 jours ?", options: ["Trente", "Trois", "Cent", "Zéro"], answer: 1, why: "Trois objectifs gardent le plan concentré." },
      { q: "Une charte d'utilisation de l'IA est :", options: ["Une clé de licence de logiciel", "Un court ensemble de règles sur l'usage de l'IA", "Un contrat d'assurance", "Une publication marketing"], answer: 1, why: "Elle dit ce qui est permis et ce qui ne l'est pas." },
      { q: "Qu'est-ce qui ne doit jamais entrer dans un outil d'IA non approuvé ?", options: ["Un programme d'entraînement général", "La date d'un événement public", "Un exemple de publication", "Les informations de santé d'un athlète mineur"], answer: 3, why: "Les données de santé et les informations sur les mineurs sont très privées." },
      { q: "Où une organisation doit-elle se renseigner sur les contrats de partenariat et les lois sur les données ?", options: ["Auprès d'un avocat qualifié", "Dans un chat d'IA au hasard", "Dans un commentaire sur les réseaux sociaux", "Chez un concurrent"], answer: 0, why: "Les questions juridiques demandent un professionnel." },
      { q: "Dans les termes du NIST, décider qui est responsable et quelles sont les règles, c'est :", options: ["Cartographier", "Mesurer", "Gouverner", "Gérer"], answer: 2, why: "Gouverner couvre les rôles et les règles." },
      { q: "Lister ce qui pourrait mal tourner pour chaque usage de l'IA, c'est :", options: ["Gouverner", "Gérer", "Mesurer", "Cartographier"], answer: 3, why: "Cartographier identifie les risques et qui pourrait en souffrir." },
      { q: "Vérifier chaque semaine des réponses de l'IA au hasard est un exemple de :", options: ["Gouverner", "Cartographier", "Mesurer", "Mission"], answer: 2, why: "Mesurer, c'est la façon de repérer les problèmes." },
      { q: "Un tableau des risques contient :", options: ["Seulement le prix de l'outil", "Risque, probabilité, impact, contrôle et qui vérifie", "Les statistiques des joueurs", "Les pseudos sur les réseaux sociaux"], answer: 1, why: "Ces colonnes rendent les risques gérables." },
      { q: "Lequel est un risque courant de l'IA ?", options: ["Le traitement injuste des personnes", "Trop de temps libre", "De meilleures réponses", "Des coûts plus bas"], answer: 0, why: "L'IA peut traiter les gens injustement si on ne la vérifie pas." },
      { q: "Dans la communication sur le changement, « ce que chacun y gagne » signifie :", options: ["Seulement une prime", "Le bénéfice du fournisseur", "Comment l'IA aide les personnes à qui on demande de l'utiliser", "Une clause juridique"], answer: 2, why: "Les gens adoptent le changement quand ils en voient l'intérêt." },
      { q: "Une bonne façon de former le personnel à l'IA est :", options: ["De courtes séances pratiques et un aide-mémoire de prompts", "Un cours magistral de trois jours sans pratique", "Aucune formation", "Une note de service sans exemples"], answer: 0, why: "De petites doses pratiques marchent le mieux." },
      { q: "Les jours 1 à 30 de la feuille de route portent sur :", options: ["L'extension partout", "Le bilan final", "Le licenciement du personnel", "Les fondations : charte, fichiers, référents"], answer: 3, why: "Les fondations viennent en premier." },
      { q: "Les jours 31 à 60 de la feuille de route portent sur :", options: ["La rédaction de la mission", "De petits pilotes avec des mesures", "Rien", "L'achat de tous les outils"], answer: 1, why: "La phase du milieu teste des usages de l'IA." },
      { q: "À quelle fréquence faire des points pendant les 90 jours ?", options: ["Une fois par an", "Toutes les deux semaines", "Jamais", "Toutes les heures"], answer: 1, why: "Des points réguliers gardent le plan sur la bonne voie." },
      { q: "À quelle fréquence revoir la charte d'utilisation de l'IA ?", options: ["Jamais", "Tous les dix ans", "Seulement après un scandale", "Au moins tous les six mois"], answer: 3, why: "Les outils et les règles de l'IA changent vite." }
    ]
  }
};
