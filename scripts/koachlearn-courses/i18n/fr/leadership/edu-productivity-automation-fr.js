"use strict";

// Koach Learn course (French translation of leadership/edu-productivity-automation.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-productivity-automation-fr",
  lang: "fr",
  translationOf: "edu-productivity-automation",
  category: "Leadership Development",
  name: "L'IA pour les responsables scolaires et éducatifs 6 : productivité et automatisation du travail",
  skills: "Repérer ce qui vous prend le plus de temps, Rédiger des lettres d'information et des messages aux familles, Mener les réunions de l'ordre du jour aux actions, Résumer les résultats d'enquêtes et de formulaires, Créer des automatisations simples, Mesurer le temps gagné",
  outcome: "gagner un temps mesurable sur l'administration scolaire en construisant trois démarches assistées par l'IA, une lettre d'information hebdomadaire aux familles, une réunion du personnel de l'ordre du jour à la liste d'actions, et un rapport qui résume une enquête, chacune avec une vérification humaine et une mesure du temps avant et après.",
  about: [
    "Ce cours s'adresse aux chefs d'établissement et à leurs adjoints, aux responsables administratifs, aux responsables de département, aux conseillers et aux enseignants qui portent du travail administratif. La paperasse et les messages prennent du temps aux élèves. Ce cours vous aide à en récupérer une partie, en toute sécurité.",
    "Le chapitre 1 commence par un audit du temps, puis construit des démarches d'IA pour la communication et les réunions. Le chapitre 2 passe aux formulaires, aux enquêtes et aux automatisations simples, et se termine par un plan pour mesurer le temps gagné et faire durer les démarches.",
    "N'utilisez que des outils approuvés par votre district ou votre administration, et gardez les informations personnelles des élèves et du personnel hors des outils non approuvés. Des outils gratuits comme Google Forms, Microsoft Forms, Google Docs et Microsoft 365 suffisent pour la plupart des tâches. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Il s'agit du cours 6 sur 8 de la série « L'IA pour les responsables scolaires et éducatifs »."
  ],
  finalTask: "Construisez et faites tourner trois démarches pendant une semaine : (1) une lettre d'information hebdomadaire aux familles, des notes en puces jusqu'à un brouillon fini et vérifié (avec toute traduction vérifiée par un locuteur qualifié) ; (2) une réunion du personnel, de l'ordre du jour rédigé par l'IA jusqu'à une liste d'actions avec responsables et dates, envoyée le jour même ; (3) une courte enquête auprès du personnel ou des familles dont vous résumez les résultats avec l'IA en utilisant uniquement des données sans noms. Notez les minutes passées avant et après pour chacune, ainsi que la vérification humaine gardée dans chaque démarche.",
  chapters: [
    {
      name: "Chapitre 1 : Gagner du temps sur la communication et les réunions",
      lessons: [
        {
          title: "Un audit du temps : où passe la semaine ?",
          minutes: 5,
          goal: "Trouver les trois tâches répétitives qui vous prennent le plus de temps.",
          text: [
            "Avant d'automatiser, mesurez. Pendant une semaine, notez les tâches administratives répétitives et le temps approximatif de chacune : courriels, lettres d'information, préparation de réunions, comptes rendus, formulaires, rapports, emplois du temps, tableaux de surveillance.",
            "Entourez les tâches qui reviennent souvent, suivent à peu près le même schéma à chaque fois et n'ont pas besoin d'informations privées sur les élèves pour être rédigées. Ce sont vos meilleures candidates pour l'IA. Les tâches qui demandent un jugement sur un élève ou un membre du personnel précis restent entre vos mains.",
            "Choisissez les trois qui prennent le plus de temps. Ce sont les démarches que vous construirez dans ce cours, et vos chiffres « avant » pour mesurer le temps gagné."
          ],
          steps: ["Pendant une semaine, listez les tâches administratives répétitives et les minutes passées.", "Entourez les tâches fréquentes et répétitives qui n'ont pas besoin de données privées d'élèves.", "Gardez pour vous les tâches qui demandent un jugement sur des personnes.", "Choisissez les trois qui prennent le plus de temps.", "Gardez ces minutes comme chiffres « avant »."],
          words: [["Audit du temps", "suivre comment vous passez votre temps pour pouvoir l'améliorer."], ["Démarche de travail", "les étapes que vous suivez pour réaliser une tâche qui revient."]],
          slides: [
            { title: "Mesurez d'abord", bullets: ["Une semaine de tâches répétitives", "Les minutes approximatives pour chacune"] },
            { title: "Bonnes candidates pour l'IA", bullets: ["Fréquentes et répétitives", "Pas besoin de données privées d'élèves pour rédiger", "Le jugement sur les personnes reste à vous"] },
            { title: "Choisissez-en trois", bullets: ["Les trois qui prennent le plus de temps", "Leurs minutes sont vos chiffres « avant »"] }
          ],
          tryIt: "Listez au moins dix tâches administratives répétitives de votre semaine avec les minutes approximatives pour chacune. Entourez vos trois meilleures candidates pour l'IA.",
          youCanNow: "repérer les tâches répétitives où l'IA peut vous faire gagner le plus de temps."
        },
        {
          title: "Lettres d'information et messages aux familles",
          minutes: 6,
          goal: "Transformer des notes en puces en une lettre d'information claire pour les familles, avec une consigne réutilisable.",
          text: [
            "Tenez une liste de notes en puces pendant la semaine : événements, dates, rappels, réussites à fêter (pas de noms d'élèves sauf si les règles de votre école sur les médias et les informations d'annuaire le permettent). Le vendredi, collez les puces avec une consigne (prompt) enregistrée.",
            "Une consigne réutilisable : « Transforme ces notes en une lettre d'information chaleureuse et claire pour les familles d'une école primaire. Langage simple, courtes sections avec titres, dates en gras, moins de 300 mots. N'ajoute aucun événement ni aucun fait qui ne figure pas dans mes notes. » Enregistrez-la pour que la lettre ait la même présentation chaque semaine.",
            "Vérifiez chaque date, heure et lieu avec le calendrier de l'école. Pour les familles qui lisent d'autres langues, une traduction par l'IA est un brouillon : faites-la vérifier par un locuteur qualifié avant l'envoi, pour que les familles reçoivent une information exacte."
          ],
          steps: ["Tenez des notes en puces pendant la semaine.", "Collez-les avec votre consigne enregistrée.", "Vérifiez chaque date, heure et lieu.", "Faites vérifier les traductions par un locuteur qualifié.", "Envoyez, et gardez la consigne pour la semaine suivante."],
          words: [["Consigne réutilisable", "une consigne que vous enregistrez et réutilisez à chaque fois pour la même tâche."], ["Locuteur qualifié", "une personne qui parle assez bien une langue pour vérifier l'exactitude d'une traduction."]],
          slides: [
            { title: "Des puces toute la semaine", bullets: ["Événements, dates, rappels, réussites", "Suivez vos règles sur les noms et photos d'élèves"] },
            { title: "La consigne enregistrée", bullets: ["Chaleureuse, langage simple, courtes sections", "Dates en gras, moins de 300 mots", "« N'ajoute rien qui ne soit dans mes notes »"] },
            { title: "Avant l'envoi", bullets: ["Vérifiez dates, heures, lieux", "Traductions vérifiées par un locuteur qualifié"] }
          ],
          tryIt: "Écrivez des notes en puces pour une semaine inventée et utilisez la consigne enregistrée pour en faire une lettre d'information. Comparez-la à vos notes et chronométrez le temps passé.",
          youCanNow: "produire à partir des notes de la semaine une lettre d'information aux familles régulière et vérifiée."
        },
        {
          title: "Réunions : de l'ordre du jour à la liste d'actions",
          minutes: 5,
          goal: "Utiliser l'IA pour rédiger un ordre du jour et transformer les notes en liste d'actions avec responsables et dates.",
          text: [
            "Avant : donnez à l'IA le but de la réunion, sa durée, les participants par fonction et les sujets. Demandez un ordre du jour minuté avec le résultat attendu pour chaque point (décider, discuter, informer). Envoyez-le à l'avance pour que chacun arrive préparé.",
            "Après : collez vos notes (sans les détails personnels sur les élèves ou le personnel) et demandez les décisions, les actions sous forme de tableau avec responsable et échéance, et les questions en suspens, en précisant « écris MANQUANT si un responsable ou une date n'est pas dans les notes ; n'ajoute rien qui ne soit pas dans les notes ».",
            "Vérifiez la liste d'actions avec vos souvenirs, comblez les manques et envoyez-la le jour même. Si vous envisagez un outil d'IA qui enregistre les réunions, vérifiez la politique de votre district et prévenez d'abord les participants ; n'enregistrez jamais avec des outils non approuvés des réunions sur des élèves précis, comme les réunions IEP (plan d'éducation individualisé) ou disciplinaires."
          ],
          steps: ["Rédigez un ordre du jour minuté avec un résultat attendu par point.", "Envoyez-le à l'avance.", "Après la réunion, collez les notes sans les détails personnels.", "Obtenez décisions, actions (responsable, date) et questions en suspens.", "Vérifiez, comblez les manques et envoyez le jour même."],
          words: [["Ordre du jour", "la liste des sujets et des durées d'une réunion."], ["Liste d'actions", "les tâches décidées en réunion, chacune avec un responsable et une échéance."]],
          slides: [
            { title: "Avant la réunion", bullets: ["But, durée, fonctions, sujets", "Ordre du jour minuté", "Résultat par point : décider, discuter, informer"] },
            { title: "Après la réunion", bullets: ["Collez les notes sans détails personnels", "Décisions, actions, questions en suspens", "MANQUANT pour les trous ; rien d'ajouté"] },
            { title: "Enregistreurs", bullets: ["Vérifiez la politique ; prévenez les participants", "Jamais pour les réunions IEP ou disciplinaires avec des outils non approuvés"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger un ordre du jour minuté pour votre prochaine réunion du personnel ou d'équipe. Ensuite, transformez vos notes en liste d'actions et envoyez-la le jour même. Chronométrez les deux étapes.",
          youCanNow: "mener des réunions, d'un ordre du jour clair à une liste d'actions envoyée le jour même, avec l'aide de l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Gagner du temps sur la communication et les réunions",
        questions: [
          { q: "Quelle tâche est la meilleure candidate pour l'IA ?", options: ["Décider de la sanction d'un élève", "Rédiger le plan IEP d'un élève précis", "Une lettre d'information hebdomadaire qui suit le même schéma", "Choisir quel enseignant évaluer"], answer: 2, why: "Les tâches fréquentes et répétitives sans données privées conviennent à l'IA." },
          { q: "Pourquoi ajouter « N'ajoute rien qui ne soit dans mes notes » à la consigne de la lettre ?", options: ["Cela empêche l'IA d'inventer des événements ou des faits", "Cela l'allonge", "Cela la traduit", "Cela ajoute des photos"], answer: 0, why: "L'IA peut combler les trous avec des détails inventés." },
          { q: "Une traduction par l'IA de la lettre d'information doit être :", options: ["Envoyée tout de suite", "Envoyée seulement au personnel", "Abandonnée", "D'abord vérifiée par un locuteur qualifié"], answer: 3, why: "Les familles méritent une information exacte." },
          { q: "Quelle réunion ne doit jamais être enregistrée avec un outil d'IA non approuvé ?", options: ["Une réunion générale de planification", "Une réunion IEP sur un élève", "Un club de lecture", "Un bilan d'exercice d'évacuation"], answer: 1, why: "Les réunions sur un élève précis touchent à des informations protégées." },
          { q: "Quand faut-il envoyer la liste d'actions ?", options: ["Le mois suivant", "Seulement si on la demande", "Jamais", "Le jour même"], answer: 3, why: "Une liste d'actions envoyée le jour même garde l'élan." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Formulaires, automatisations et mesure du gain",
      lessons: [
        {
          title: "Enquêtes et formulaires : des réponses au résumé",
          minutes: 6,
          goal: "Résumer les résultats d'une enquête avec l'IA sans exposer d'informations personnelles.",
          text: [
            "Google Forms et Microsoft Forms rassemblent les réponses dans un tableur. L'IA peut ensuite vous aider à voir les thèmes des commentaires libres et à rédiger un court résumé pour le personnel ou les familles.",
            "Protégez d'abord les personnes. Concevez des enquêtes qui ne recueillent pas de noms, sauf si c'est vraiment nécessaire. Avant de coller des réponses dans un outil d'IA, supprimez les noms, les adresses électroniques et tout commentaire qui permet d'identifier un élève ou un membre du personnel. N'utilisez que des outils approuvés pour tout ce qui contient des informations sur les élèves.",
            "Consigne : « Voici des commentaires anonymes de familles sur les horaires de sortie. Regroupe-les par thèmes, compte combien correspondent à chaque thème, cite deux courts commentaires typiques par thème et propose trois suggestions. N'invente aucun commentaire. » Vérifiez ensuite vous-même les chiffres dans le tableur ; l'IA compte souvent mal."
          ],
          steps: ["Concevez des enquêtes sans noms, sauf si nécessaire.", "Retirez noms, adresses et commentaires identifiants avant d'utiliser l'IA.", "Utilisez des outils approuvés pour tout ce qui contient des informations sur les élèves.", "Demandez les thèmes, les chiffres, des citations typiques et des suggestions.", "Vérifiez les chiffres vous-même."],
          words: [["Anonyme", "sans nom ni détail qui montre qui est la personne."], ["Thème", "une idée commune qui revient dans beaucoup de réponses."]],
          slides: [
            { title: "Du formulaire au tableur au résumé", bullets: ["Google Forms ou Microsoft Forms", "L'IA trouve les thèmes des commentaires"] },
            { title: "Protégez d'abord les personnes", bullets: ["Ne recueillez pas de noms sans nécessité", "Retirez les détails identifiants avant l'IA", "Outils approuvés pour les informations d'élèves"] },
            { title: "Demandez, puis vérifiez", bullets: ["Thèmes, chiffres, citations typiques, suggestions", "« N'invente aucun commentaire »", "Vérifiez les chiffres vous-même : l'IA compte mal"] }
          ],
          tryIt: "Créez une enquête anonyme de trois questions dans Google Forms ou Microsoft Forms. Écrivez dix réponses inventées, résumez-les avec l'IA et vérifiez les chiffres en les comparant aux réponses.",
          youCanNow: "transformer les réponses d'une enquête en résumé exact sans exposer d'informations personnelles."
        },
        {
          title: "Automatisations simples : modèles, règles et déclencheurs",
          minutes: 5,
          goal: "Mettre en place une automatisation simple en y gardant une vérification humaine.",
          text: [
            "Tout n'a pas besoin de l'IA. Beaucoup de gains de temps viennent d'automatisations simples : modèles de courriels pour les réponses fréquentes, règles qui rangent les messages dans des dossiers, modèles de documents pour les rapports réguliers, publipostage pour des lettres personnalisées, et rappels dans l'agenda.",
            "Les automatisations plus grandes enchaînent des étapes : quand un formulaire est envoyé, ajouter une ligne dans un tableur et envoyer une confirmation ; chaque vendredi, rappeler au personnel d'envoyer ses notes. Microsoft Power Automate et Google Apps Script savent le faire ; demandez à votre équipe informatique ce qui est permis dans votre district avant de construire quoi que ce soit qui touche aux données de l'école.",
            "Gardez une vérification humaine partout où une automatisation envoie quelque chose aux familles ou fait un changement important. Une petite erreur répétée automatiquement à 500 familles devient une grosse erreur."
          ],
          steps: ["Commencez simplement : modèles, règles, rappels.", "Choisissez une tâche répétée à automatiser.", "Vérifiez avec votre équipe informatique avant de connecter des données de l'école.", "Ajoutez une vérification humaine avant tout envoi aux familles.", "Testez d'abord en étant le seul destinataire."],
          words: [["Automatisation", "un réglage qui fait une tâche tout seul quand quelque chose se produit."], ["Déclencheur", "l'événement qui lance une automatisation, comme l'envoi d'un formulaire."], ["Publipostage", "créer beaucoup de lettres ou de courriels personnalisés à partir d'un modèle et d'une liste."]],
          slides: [
            { title: "Gains de temps simples", bullets: ["Modèles de courriels et règles de tri", "Modèles de documents", "Publipostage et rappels"] },
            { title: "Étapes enchaînées", bullets: ["Formulaire envoyé, ligne ajoutée, confirmation envoyée", "Power Automate ou Apps Script", "Demandez d'abord à votre équipe informatique"] },
            { title: "Gardez une vérification humaine", bullets: ["Avant tout envoi aux familles", "Testez d'abord sur vous-même", "Les erreurs se multiplient automatiquement"] }
          ],
          tryIt: "Mettez en place une automatisation simple : un modèle de courriel pour une réponse fréquente, ou une règle qui range un type de message. Testez-la sur vous-même et écrivez où se trouve la vérification humaine.",
          youCanNow: "mettre en place des automatisations simples en sécurité, avec une vérification humaine là où c'est important."
        },
        {
          title: "Mesurer le temps gagné et faire durer",
          minutes: 6,
          goal: "Mesurer le temps avant et après et faire durer vos démarches.",
          text: [
            "Vous n'avez gagné du temps que si les chiffres le disent. Pour chaque démarche, comparez les minutes avant (tirées de votre audit du temps) et après, temps de vérification compris. Si une démarche prend autant de temps à cause des corrections, changez la consigne ou abandonnez la démarche.",
            "Décrivez chaque démarche sur une page : le but, la consigne ou le modèle enregistré, les étapes, la vérification humaine et qui la fait. Ainsi, quelqu'un d'autre peut la faire tourner en votre absence, et le nouveau personnel peut l'apprendre.",
            "Partagez les réussites avec le personnel et invitez-le à partager ses démarches. Un dossier partagé de consignes et de modèles de l'école multiplie le temps gagné dans tout l'établissement. Révisez-le chaque trimestre pour que les consignes restent exactes quand les calendriers, les outils et les règles changent."
          ],
          steps: ["Comparez les minutes avant et après, vérification comprise.", "Corrigez ou abandonnez les démarches qui ne font pas gagner de temps.", "Décrivez chaque démarche sur une page.", "Partagez-les dans un dossier de consignes et de modèles de l'école.", "Révisez chaque trimestre."],
          words: [["Avant et après", "comparer une mesure avant et après un changement."], ["Documentation", "des étapes écrites pour que d'autres puissent refaire une démarche."]],
          slides: [
            { title: "Comptez les minutes", bullets: ["Avant ou après", "Temps de vérification compris", "Pas de gain ? Corrigez ou abandonnez"] },
            { title: "Une page par démarche", bullets: ["But, consigne, étapes", "Vérification humaine et responsable", "D'autres peuvent la faire tourner"] },
            { title: "Diffusez le gain", bullets: ["Dossier partagé de consignes et de modèles", "Invitez les démarches du personnel", "Révisez chaque trimestre"] }
          ],
          tryIt: "Tâche finale : faites tourner vos trois démarches pendant une semaine (lettre d'information, de l'ordre du jour aux actions, de l'enquête au résumé). Notez les minutes avant et après pour chacune, décrivez chacune sur une page avec sa vérification humaine, et mettez-les dans un dossier partagé.",
          youCanNow: "construire, mesurer et partager des démarches administratives assistées par l'IA qui redonnent du temps pour les élèves."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Formulaires, automatisations et mesure du gain",
        questions: [
          { q: "Avant de coller des commentaires d'enquête dans un outil d'IA, vous devez :", options: ["Ajouter des noms pour le contexte", "Ajouter les numéros d'élèves", "Retirer noms, adresses et commentaires identifiants", "Ne rien faire"], answer: 2, why: "Retirer les détails identifiants protège les personnes." },
          { q: "L'IA dit que 40 familles ont parlé de la circulation. Vous devez :", options: ["Vérifier ce chiffre dans le tableur", "Le publier", "Le doubler", "Ignorer le thème"], answer: 0, why: "L'IA compte souvent mal." },
          { q: "Avant de construire une automatisation qui touche aux données de l'école, demandez :", options: ["À un élève", "À votre équipe informatique ce qui est permis", "À la publicité du fournisseur", "À personne"], answer: 1, why: "Les districts fixent des règles pour connecter les données de l'école." },
          { q: "Pourquoi tester d'abord une automatisation en étant le seul destinataire ?", options: ["Pour repérer les erreurs avant qu'elles n'atteignent beaucoup de personnes", "C'est plus rapide", "La loi l'exige", "Pour économiser du papier"], answer: 0, why: "Les erreurs se multiplient quand c'est automatisé." },
          { q: "Une démarche prend autant de temps qu'avant à cause des corrections des erreurs de l'IA. Vous devez :", options: ["La garder quand même", "Ajouter des étapes", "Arrêter de vérifier", "Changer la consigne ou abandonner la démarche"], answer: 3, why: "Seuls les vrais gains de temps comptent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 6 : productivité et automatisation du travail",
    questions: [
      { q: "Un audit du temps :", options: ["Vérifie les horloges de l'école", "Suit comment vous passez votre temps sur les tâches", "Est un audit financier", "Note les enseignants"], answer: 1, why: "Mesurez avant d'améliorer." },
      { q: "Les tâches qui demandent un jugement sur un élève précis doivent :", options: ["Être automatisées", "Être confiées à l'IA", "Rester entre vos mains", "Être sautées"], answer: 2, why: "Les décisions sur les personnes restent aux personnes." },
      { q: "Les chiffres « avant » sont :", options: ["Des notes de tests", "Des numéros de téléphone", "Les minutes passées avant d'automatiser", "Des lignes de budget"], answer: 2, why: "Ils permettent de mesurer le temps gagné." },
      { q: "Une consigne de lettre d'information doit être :", options: ["Enregistrée et réutilisée chaque semaine", "Réécrite de zéro à chaque fois", "Secrète", "Longue et vague"], answer: 0, why: "Les consignes enregistrées gardent une présentation régulière." },
      { q: "Avant d'envoyer la lettre d'information, vérifiez :", options: ["La police", "Seulement le titre", "Rien", "Chaque date, heure et lieu"], answer: 3, why: "Des dates fausses causent de vrais problèmes aux familles." },
      { q: "Les noms d'élèves dans les lettres d'information doivent suivre :", options: ["Ce que propose l'IA", "Les règles de votre école sur les médias et les informations d'annuaire", "Aucune règle", "Les modes des réseaux sociaux"], answer: 1, why: "Les écoles ont des règles sur le partage des informations des élèves." },
      { q: "Un ordre du jour minuté donne à chaque point :", options: ["Rien", "Un prix", "Un mot de passe", "Une durée et un résultat attendu"], answer: 3, why: "Les résultats attendus gardent les réunions ciblées." },
      { q: "Une liste d'actions comprend :", options: ["Des rumeurs", "Seulement le sujet", "La tâche, le responsable et l'échéance", "Les salaires"], answer: 2, why: "Des responsables clairs font avancer les choses." },
      { q: "Si les notes ne nomment pas de responsable, l'IA doit écrire :", options: ["MANQUANT", "Une supposition", "Votre nom", "Rien"], answer: 0, why: "Signaler les trous évite des responsables inventés." },
      { q: "Les outils d'IA qui enregistrent les réunions demandent :", options: ["Un usage secret", "De vérifier la politique et de prévenir les participants", "Aucune vérification", "Seulement l'accord des élèves"], answer: 1, why: "L'enregistrement pose des questions de consentement et de vie privée." },
      { q: "Google Forms et Microsoft Forms rassemblent les réponses dans :", options: ["Un tableur", "Une vidéo", "Une imprimante", "Un agent conversationnel"], answer: 0, why: "Les réponses arrivent dans un tableau que vous pouvez analyser." },
      { q: "Une enquête anonyme :", options: ["N'a pas de questions", "Recueille l'adresse de chacun", "Est illégale", "Ne recueille ni noms ni détails identifiants"], answer: 3, why: "L'anonymat protège les répondants." },
      { q: "Demander à l'IA de « citer deux commentaires typiques par thème » vous aide à :", options: ["Inventer des commentaires", "Montrer les vraies voix derrière chaque thème", "Cacher les résultats", "Économiser du papier"], answer: 1, why: "Les citations rendent les résumés concrets ; vérifiez-les quand même." },
      { q: "Laquelle est une automatisation simple ?", options: ["Une réunion du personnel", "Un nouveau bâtiment", "Une règle de courriel qui range les messages dans des dossiers", "Une sortie scolaire"], answer: 2, why: "Les règles et les modèles font gagner du temps sans IA." },
      { q: "Le publipostage produit :", options: ["Un graphique de tableur", "Une longue lettre", "Beaucoup de lettres personnalisées à partir d'un modèle et d'une liste", "Une enquête"], answer: 2, why: "Il personnalise à grande échelle." },
      { q: "Un déclencheur est :", options: ["L'événement qui lance une automatisation", "Une sonnerie d'école", "Un mot de passe", "Une note"], answer: 0, why: "Comme l'envoi d'un formulaire." },
      { q: "Où placer une vérification humaine ?", options: ["À la fin de l'année", "Nulle part", "Seulement après des plaintes", "Avant tout envoi aux familles"], answer: 3, why: "Les erreurs envoyées aux familles se multiplient vite." },
      { q: "Le temps gagné doit tenir compte :", options: ["Seulement du temps de rédaction", "Du temps passé à vérifier et à corriger", "De rien", "Seulement du temps des autres"], answer: 1, why: "Le temps de vérification fait partie du vrai coût." },
      { q: "Décrire chaque démarche sur une page permet :", options: ["De la supprimer", "Que personne ne la voie", "Que l'IA la note", "Que d'autres la fassent tourner en votre absence"], answer: 3, why: "La documentation fait vivre les démarches." },
      { q: "Un dossier partagé de consignes de l'école doit être révisé :", options: ["Tous les dix ans", "Jamais", "Chaque trimestre", "Seulement par les élèves"], answer: 2, why: "Les calendriers, les outils et les règles changent." }
    ]
  }
};
