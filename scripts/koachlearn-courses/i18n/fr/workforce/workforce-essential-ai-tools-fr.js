"use strict";

// Koach Learn course (French translation of workforce/workforce-essential-ai-tools.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-essential-ai-tools-fr",
  lang: "fr",
  translationOf: "workforce-essential-ai-tools",
  category: "Workforce Development",
  name: "Les outils d'IA essentiels au travail",
  skills: "Respecter la politique d'IA de votre employeur, Utiliser un assistant conversationnel pour écrire au travail, Utiliser l'IA dans Microsoft 365 ou Google Workspace, Résumer des documents et des réunions, Obtenir de l'aide sur les tableurs, Vérifier le travail de l'IA avant de le partager",
  outcome: "utiliser les outils d'IA autorisés par votre lieu de travail pour finir plus vite le travail de tous les jours : rédiger et améliorer un message professionnel, résumer un long document ou des notes de réunion, obtenir de l'aide sur un tableur, et vérifier chaque résultat avant de le partager, sans mettre d'informations confidentielles là où elles n'ont pas leur place.",
  about: [
    "Ce cours s'adresse aux travailleurs et aux chercheurs d'emploi qui veulent des compétences pratiques en IA pour leur métier : personnel de bureau et d'administration, responsables en magasin ou en entrepôt, aides dans la santé, service client, et toute personne qui écrit des e-mails, lit des règlements ou utilise des tableurs au travail.",
    "Vous commencerez par la règle la plus importante, la politique d'IA de votre employeur, puis vous vous exercerez avec des assistants conversationnels (ChatGPT, Microsoft Copilot, Google Gemini) et avec l'aide d'IA intégrée à Microsoft 365 et Google Workspace dans certains abonnements. Vous allez résumer, rédiger, analyser et, toujours, vérifier.",
    "Les fonctions que vous voyez dépendent des licences et des réglages de votre employeur : nous décrivons donc ce qu'il faut faire plutôt que le nom exact des boutons. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Réalisez une série de tâches d'IA au travail en utilisant uniquement les outils autorisés par votre lieu de travail (ou des outils gratuits avec des données inventées si vous cherchez un emploi) : (1) notez les trois règles clés de la politique d'IA de votre lieu de travail, ou les trois règles que vous suivriez ; (2) transformez des notes rapides en un e-mail professionnel clair ; (3) résumez un long document en cinq points et trois actions à mener ; (4) obtenez l'aide de l'IA pour ajouter une formule à un tableur ; et (5) indiquez ce que vous avez vérifié dans chaque cas avant de partager.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des travailleurs et des demandeurs d'emploi qui veulent des compétences pratiques en IA pour le travail : personnel de bureau et administratif, chefs d'équipe en magasin et en entrepôt, aides en santé, service client, et toute personne qui écrit des e-mails, lit des règlements ou utilise des tableurs au travail.",
    startingPoint: "Ils utilisent l'e-mail, des documents et parfois des tableurs au travail, sur ordinateur ou téléphone. Beaucoup ont vu des outils d'IA mais ne s'en sont pas servis pour des tâches de travail, et ne connaissent pas forcément la politique d'IA de leur employeur.",
    gap: "Les employeurs attendent de plus en plus que le personnel utilise des outils d'IA approuvés pour gagner du temps, et des erreurs ou une fuite d'informations confidentielles peuvent coûter un emploi. Les apprenants doivent utiliser les outils autorisés par leur lieu de travail pour écrire, résumer et travailler sur des tableurs, et vérifier chaque résultat avant de le partager.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un ordinateur est préférable pour les documents et les tableurs ; les outils dépendent de ce que l'employeur autorise",
      "Règles et vie privée : la politique d'IA de l'employeur passe en premier ; aucune donnée personnelle de client ou d'employé dans les outils d'IA ; les demandeurs d'emploi utilisent des outils gratuits avec des données inventées",
      "Les fonctions d'IA intégrées à Microsoft 365 et Google Workspace dépendent de l'abonnement et des réglages de l'employeur",
      "Temps : des leçons d'environ 5 minutes qui s'intègrent dans une journée de travail"
    ],
    prerequisites: "Aucun. « L'IA dans le nouveau monde du travail » est un bon cours complémentaire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avant d'utiliser l'IA au travail", action: "trouver la politique d'IA de votre lieu de travail et noter ses trois règles clés, ou trois règles prudentes par défaut s'il n'y en a pas", standard: "sans aucune donnée personnelle de client ou d'employé dans les outils d'IA" },
    { id: "O2", condition: "À partir de notes brouillonnes pour un message de travail", action: "écrire un e-mail de travail clair avec un assistant de discussion, grâce à une demande qui précise le but, le lecteur, les points clés et le ton", standard: "avec chaque fait vérifié et un e-mail qui vous ressemble" },
    { id: "O3", condition: "Dans les applications de bureau que vous utilisez", action: "trouver et utiliser l'assistant d'IA intégré, ou un assistant de discussion approuvé si votre compte n'en a pas", standard: "en n'utilisant que du texte non confidentiel dans tout outil que votre lieu de travail n'a pas approuvé" },
    { id: "O4", condition: "À partir d'un long document ou de notes de réunion", action: "le résumer en cinq points clés et trois actions à mener avec un responsable", standard: "vérifié par rapport à l'original" },
    { id: "O5", condition: "À partir d'un petit tableur", action: "utiliser l'IA pour écrire et expliquer une formule, puis la tester", standard: "par rapport à une réponse que vous avez calculée à la main" },
    { id: "O6", condition: "Avant de partager un résultat de l'IA", action: "vérifier les faits, l'adéquation, la sécurité et la source", standard: "et assumer la responsabilité de la version finale" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les règles et les outils de base",
      lessons: [
        {
          objectives: ["O1"],
          title: "La politique d'IA de votre employeur passe en premier",
          minutes: 5,
          goal: "Trouver et suivre les règles de votre lieu de travail sur les outils d'IA.",
          text: [
            "Beaucoup d'employeurs ont des règles sur les outils d'IA : quels outils sont approuvés, quelles informations on peut y mettre, et quand vous devez dire que vous avez utilisé l'IA. Ne pas respecter ces règles peut vous causer des ennuis, même avec de bonnes intentions.",
            "Cherchez dans le règlement du personnel, l'intranet ou les pages informatiques, ou demandez à votre responsable ou au service informatique : « Quels outils d'IA avons-nous le droit d'utiliser, et quelles informations puis-je y mettre ? » Certains employeurs fournissent une version professionnelle d'un outil, comme Microsoft Copilot avec un compte de travail, qui protège mieux les données qu'un compte personnel gratuit.",
            "S'il n'y a pas de politique, suivez des règles prudentes par défaut : aucune information sur les clients ou les patients, aucune donnée personnelle sur les employés, aucun mot de passe, aucun projet confidentiel ni chiffre financier dans des comptes d'IA personnels. Vérifiez chaque fait avant de partager."
          ],
          steps: ["Cherchez « IA » dans le règlement du personnel ou l'intranet.", "Demandez à votre responsable ou au service informatique quels outils sont approuvés.", "Demandez quelles informations sont autorisées.", "S'il n'y a pas de politique, suivez les règles prudentes par défaut."],
          words: [["Politique d'IA", "les règles d'un employeur pour l'usage des outils d'IA au travail."], ["Outil approuvé", "un outil que votre employeur autorise pour le travail."], ["Confidentiel", "une information réservée aux personnes de l'entreprise."]],
          slides: [
            { title: "Les règles d'abord", bullets: ["Quels outils sont approuvés", "Quelles informations on peut y mettre", "Quand dire que vous avez utilisé l'IA"] },
            { title: "Où les trouver", bullets: ["Règlement du personnel ou intranet", "Demandez à votre responsable ou à l'informatique", "Les comptes de travail peuvent mieux protéger"] },
            { title: "Règles prudentes par défaut", bullets: ["Aucune donnée de client, de patient ou d'employé", "Aucun mot de passe ni projet confidentiel", "Vérifiez chaque fait avant de partager"] }
          ],
          tryIt: "Trouvez la politique d'IA de votre lieu de travail, ou renseignez-vous. Notez les trois règles les plus importantes. Si vous cherchez un emploi, notez les trois règles prudentes que vous suivrez.",
          youCanNow: "trouver et suivre les règles sur les outils d'IA de votre lieu de travail.",
          quickCheck: [
            { objective: "O1", q: "Où trouve-t-on en général la politique d'IA de son lieu de travail ?", options: ["Sur une page de réseau social", "Dans le règlement du personnel ou l'intranet, ou en demandant à son responsable ou au service informatique", "Dans les publicités de l'outil d'IA", "Nulle part ; ces politiques n'existent pas"], answer: 1, why: "Les politiques sont en général dans le règlement du personnel ou l'intranet, et votre responsable ou le service informatique peut vous renseigner." },
            { objective: "O1", q: "Votre lieu de travail n'a pas de politique d'IA et vous voulez de l'aide pour répondre à la réclamation d'un client. Que faites-vous ?", options: ["Coller le nom, l'adresse et l'historique de commandes du client", "Utiliser l'IA avec toutes les données que vous voulez", "Ne plus jamais écrire de réponses", "Laisser de côté les détails personnels du client et suivre une règle prudente par défaut"], answer: 3, why: "Sans politique, la règle prudente par défaut est de garder hors de l'IA les données personnelles des clients et des employés." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Un assistant conversationnel pour écrire au travail",
          minutes: 5,
          goal: "Transformer des notes rapides en un message professionnel clair avec un assistant conversationnel.",
          text: [
            "Les assistants conversationnels comme ChatGPT, Microsoft Copilot et Google Gemini transforment des notes rapides en texte clair. Utilisez celui que votre lieu de travail autorise.",
            "Une bonne consigne (prompt) de travail indique le but, le lecteur, les points clés et le ton : « Écris un court e-mail à mon équipe. But : le quai de chargement est fermé jeudi pour travaux. Utilisez le quai B à la place. Les livraisons arrivent de 7 h à 11 h. Ton : clair et aimable. Moins de 100 mots. »",
            "Ensuite, demandez des modifications (« plus court », « plus formel », « ajoute une liste à puces »), vérifiez chaque fait, et faites en sorte que le texte vous ressemble avant de l'envoyer."
          ],
          steps: ["Écrivez vos notes rapides.", "Donnez une consigne avec le but, le lecteur, les points clés et le ton.", "Demandez une modification à la fois.", "Vérifiez les noms, les dates, les heures et les chiffres.", "Retouchez pour que le texte vous ressemble, puis envoyez."],
          words: [["Consigne (prompt)", "ce que vous écrivez pour demander quelque chose à un outil d'IA."], ["Ton", "la façon dont un texte sonne : aimable, formel, ferme."]],
          slides: [
            { title: "Des notes en entrée, un message clair en sortie", bullets: ["ChatGPT, Copilot ou Gemini", "Utilisez l'outil autorisé par votre lieu de travail"] },
            { title: "Une bonne consigne de travail", bullets: ["Le but et le lecteur", "Les points clés", "Le ton et la longueur"] },
            { title: "Avant d'envoyer", bullets: ["Demandez les modifications une à une", "Vérifiez noms, dates, heures, chiffres", "Faites en sorte que le texte vous ressemble"] }
          ],
          tryIt: "Écrivez des notes rapides pour un vrai message de travail ou un exemple. Utilisez un assistant conversationnel pour en faire un e-mail clair, demandez une modification, et vérifiez chaque fait.",
          youCanNow: "transformer des notes rapides en un message professionnel clair avec un assistant conversationnel.",
          quickCheck: [
            { objective: "O2", q: "Que fixe « pour mon responsable, ton aimable » dans une demande ?", options: ["Le lecteur et le ton", "La longueur", "L'échéance", "Le type de fichier"], answer: 0, why: "Nommer le lecteur et le ton aide l'IA à écrire le bon type de message." },
            { objective: "O2", q: "Le brouillon d'e-mail de l'IA dit que la réunion est jeudi, mais vos notes disent mercredi. Que faites-vous ?", options: ["L'envoyer ; l'IA a sans doute raison", "Supprimer vos notes", "Corriger le jour avant de l'envoyer", "Mettre les deux jours"], answer: 2, why: "Vous vérifiez chaque fait avec vos notes avant d'envoyer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "L'IA dans Microsoft 365 et Google Workspace",
          minutes: 5,
          goal: "Trouver et utiliser l'assistant d'IA de vos applications de bureau, si votre compte en dispose.",
          text: [
            "Microsoft ajoute Copilot à des applications comme Word, Outlook, Excel, PowerPoint et Teams, et Google ajoute Gemini à Gmail, Docs, Sheets et Meet. Que vous y ayez accès dépend de l'abonnement et des réglages de votre employeur.",
            "Si vous les avez, l'IA peut travailler sur ce qui est déjà ouvert : « Résume ce document », « Rédige une réponse à cet e-mail », « Propose une formule pour cette colonne ». Cherchez l'icône ou le panneau d'IA dans l'application, ou demandez au service informatique comment l'activer.",
            "Si vous ne l'avez pas, vous pouvez quand même copier un texte non confidentiel dans un assistant conversationnel approuvé et recoller le résultat. Dans tous les cas, la version finale vous appartient et c'est vous qui la vérifiez."
          ],
          steps: ["Ouvrez Word, Outlook, Docs ou Gmail avec votre compte de travail.", "Cherchez l'icône ou le panneau d'IA, ou demandez à l'informatique.", "Demandez-lui de résumer ou de rédiger à partir du fichier ouvert.", "Si ce n'est pas disponible, utilisez un assistant approuvé avec un texte non confidentiel.", "Vérifiez et retouchez le résultat."],
          words: [["Microsoft 365", "l'ensemble des applications de travail de Microsoft : Word, Excel, Outlook, Teams et d'autres."], ["Google Workspace", "l'ensemble des applications de travail de Google : Gmail, Docs, Sheets, Meet et d'autres."]],
          slides: [
            { title: "L'IA intégrée aux applications de bureau", bullets: ["Microsoft : Copilot dans Word, Outlook, Excel, Teams", "Google : Gemini dans Gmail, Docs, Sheets, Meet", "Selon l'abonnement de votre employeur"] },
            { title: "Elle travaille sur ce qui est ouvert", bullets: ["« Résume ce document »", "« Rédige une réponse à cet e-mail »", "Cherchez l'icône d'IA ou demandez à l'informatique"] },
            { title: "Pas d'IA intégrée ?", bullets: ["Utilisez un assistant conversationnel approuvé", "Uniquement du texte non confidentiel", "C'est vous qui vérifiez la version finale"] }
          ],
          tryIt: "Ouvrez un document ou un e-mail de travail (ou un exemple). Utilisez l'assistant d'IA intégré si vous l'avez, ou sinon un assistant conversationnel approuvé, pour rédiger une réponse ou un résumé. Vérifiez-le.",
          youCanNow: "utiliser l'assistant d'IA de vos applications de bureau, ou une solution sûre, pour rédiger et résumer.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que Copilot dans Word ou Outlook ?", options: ["Un module gratuit que tout le monde a", "Une formule de tableur", "Un virus", "Un assistant d'IA intégré à Microsoft 365, avec certains abonnements"], answer: 3, why: "Copilot est intégré aux applications Microsoft 365, selon l'abonnement et les réglages de l'employeur." },
            { objective: "O3", q: "Vous ne voyez pas d'icône d'IA dans votre application de bureau. Que faites-vous ?", options: ["Installer n'importe quelle extension d'IA trouvée", "Demander au service informatique, ou utiliser un assistant de discussion approuvé avec du texte non confidentiel", "Coller des fichiers confidentiels dans un compte d'IA personnel", "Renoncer à l'IA"], answer: 1, why: "Le service informatique peut vous dire ce qui est disponible, et un assistant approuvé fonctionne avec du texte non confidentiel." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les règles et les outils de base",
        questions: [
          { objective: "O1", q: "Avant d'utiliser l'IA au travail, vous devez d'abord :", options: ["Coller des données de clients", "Connaître la politique d'IA de votre employeur", "Partager votre mot de passe", "Utiliser n'importe quelle application"], answer: 1, why: "La politique fixe ce qui est permis." },
          { objective: "O1", q: "Il n'y a pas de politique. Quelle règle prudente suivre ?", options: ["Ne pas vérifier les faits", "Coller n'importe quoi", "Partager les mots de passe", "Aucune donnée personnelle de client ou d'employé dans l'IA"], answer: 3, why: "Les données privées restent dehors." },
          { objective: "O2", q: "Une bonne consigne de travail contient :", options: ["Le but, le lecteur, les points clés et le ton", "Un seul mot", "Votre mot de passe", "L'adresse d'un client"], answer: 0, why: "Ces éléments donnent un brouillon utile." },
          { objective: "O3", q: "Copilot dans Word ou Outlook est disponible :", options: ["Jamais", "Pour tout le monde automatiquement", "Selon l'abonnement et les réglages de votre employeur", "Seulement sur téléphone"], answer: 2, why: "L'accès dépend des licences et des réglages." },
          { objective: "O6", q: "À qui appartient la version finale d'un travail rédigé par l'IA ?", options: ["À l'informatique", "À l'IA", "À vous", "À personne"], answer: 2, why: "Vous êtes responsable de ce que vous envoyez." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Résumés, tableurs et vérification",
      lessons: [
        {
          objectives: ["O4"],
          title: "Résumer des documents et des réunions",
          minutes: 5,
          goal: "Transformer un long document ou des notes de réunion en points clés et en actions à mener.",
          text: [
            "Un résumé fait gagner du temps à tout le monde. Demandez une forme précise : « Résume ce règlement en cinq points pour un nouvel employé, puis liste trois actions à mener. » Ou pour des notes de réunion : « Liste les décisions, les actions à mener avec un responsable et une date limite, et les questions en suspens. »",
            "Certains outils de réunion peuvent transcrire et résumer les réunions quand votre employeur active cette fonction. Toutes les personnes présentes doivent savoir que la réunion est enregistrée ou transcrite ; suivez les règles de votre lieu de travail.",
            "Un résumé peut oublier quelque chose d'important ou se tromper sur un détail. Comparez les faits clés avec l'original, surtout les chiffres, les dates, les noms et qui a accepté de faire quoi."
          ],
          steps: ["Collez ou ouvrez le document (si c'est permis).", "Demandez des points, des décisions et des actions avec responsables et dates.", "Comparez les faits clés avec l'original.", "Corrigez ce qui manque ou qui est faux avant de partager."],
          words: [["Résumé", "une version courte qui garde les points principaux."], ["Action à mener", "une tâche que quelqu'un a accepté de faire, idéalement avec un responsable et une date limite."], ["Transcrire", "transformer la parole en texte écrit."]],
          slides: [
            { title: "Demandez une forme", bullets: ["Cinq points pour un nouvel employé", "Décisions, actions, questions en suspens", "Responsables et dates limites"] },
            { title: "Outils de réunion", bullets: ["Certains transcrivent et résument les réunions", "Tout le monde doit savoir que c'est enregistré", "Suivez les règles de votre lieu de travail"] },
            { title: "Comparez avec l'original", bullets: ["Chiffres, dates et noms", "Qui a accepté de faire quoi", "Tout point important oublié"] }
          ],
          tryIt: "Prenez un long document ou des notes de réunion (ou un règlement public si vous cherchez un emploi). Demandez à l'IA cinq points et trois actions avec responsables, puis comparez-les avec l'original.",
          youCanNow: "résumer des documents et des réunions en points clairs et en actions à mener, et les vérifier.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une action à mener ?", options: ["Un résumé de toute la réunion", "Une question à laquelle personne n'a répondu", "Une tâche avec un responsable et une date limite", "L'heure de début de la réunion"], answer: 2, why: "Les actions à mener disent qui fait quoi et pour quand." },
            { objective: "O4", q: "Le résumé de l'IA oublie une date limite qui figure dans le document original. Que faites-vous ?", options: ["Ajouter la date limite après avoir comparé avec l'original", "Partager le résumé tel quel", "Supprimer l'original", "Demander un résumé plus long sans le vérifier"], answer: 0, why: "Les résumés peuvent oublier des détails : vous comparez avec l'original et corrigez." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Obtenir l'aide de l'IA sur un tableur",
          minutes: 5,
          goal: "Utiliser l'IA pour écrire et expliquer une formule de tableur, puis la tester.",
          text: [
            "Beaucoup de travailleurs perdent du temps sur les tableurs. L'IA est un bon professeur : « Dans Excel, comment compter combien de lignes de la colonne B disent 'Late' ? » Elle peut répondre =COUNTIF(B:B,\"Late\") (NB.SI dans Excel en français) et expliquer chaque partie.",
            "Décrivez vos colonnes au lieu de coller des données confidentielles : « La colonne A est la date, B le statut, C les heures. » Si votre employeur autorise l'IA intégrée dans Excel ou Sheets, vous pouvez l'interroger sur le fichier ouvert.",
            "Testez toujours une formule sur quelques lignes dont vous connaissez la réponse. Les formules de l'IA peuvent être presque justes mais fausses, par exemple en comptant la ligne d'en-tête ou en utilisant la mauvaise plage."
          ],
          steps: ["Décrivez vos colonnes et ce que vous voulez savoir.", "Demandez à l'IA une formule et une explication.", "Collez la formule dans votre feuille.", "Testez-la sur des lignes dont vous connaissez la réponse.", "Demandez à l'IA de la corriger si elle est fausse."],
          words: [["Formule", "une instruction dans une cellule de tableur qui calcule quelque chose."], ["COUNTIF", "une formule qui compte les cellules qui remplissent une condition (NB.SI en français)."], ["Plage", "un groupe de cellules, comme B2:B50."]],
          slides: [
            { title: "L'IA comme professeur de tableur", bullets: ["« Comment compter les lignes qui disent Late ? »", "=COUNTIF(B:B,\"Late\")", "Demandez-lui d'expliquer chaque partie"] },
            { title: "Décrivez, ne collez pas", bullets: ["« La colonne A est la date, B le statut »", "IA intégrée seulement si c'est permis"] },
            { title: "Testez-la", bullets: ["Vérifiez des lignes dont vous savez la réponse", "Attention aux en-têtes et aux mauvaises plages"] }
          ],
          tryIt: "Créez une petite feuille avec 10 lignes de données d'exemple. Demandez à l'IA une formule (compter, additionner ou faire une moyenne), collez-la et testez-la avec une réponse calculée à la main.",
          youCanNow: "obtenir, comprendre et tester des formules de tableur avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'une plage dans un tableur ?", options: ["Un graphique", "Un groupe de cellules, comme B2:B50", "Un nom de fichier", "Une erreur de formule"], answer: 1, why: "Une plage est un groupe de cellules sur lequel travaille une formule." },
            { objective: "O5", q: "La formule COUNTIF de l'IA donne 11, mais vous comptez à la main 10 lignes « Late ». Que faites-vous ?", options: ["Utiliser 11 quand même", "Supprimer les données", "Demander à une autre IA", "Vérifier la plage, par exemple si elle inclut la ligne d'en-tête, et la corriger"], answer: 3, why: "Une erreur courante est une mauvaise plage ou le comptage de l'en-tête : vous testez et corrigez." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vérifier le travail de l'IA avant de le partager",
          minutes: 5,
          goal: "Utiliser une courte liste de contrôle pour relire tout résultat d'IA avant de l'envoyer à d'autres.",
          text: [
            "Au travail, votre nom figure sur ce que vous partagez. Faites un contrôle en quatre points à chaque fois : Faits (chiffres, noms, dates et règles correspondent à la source), Adéquation (bon ton et bonne longueur pour le lecteur), Sécurité (aucune donnée confidentielle ou personnelle qui ne devrait pas y être) et Source (si le texte cite une règle ou une statistique, vous savez d'où elle vient).",
            "L'IA peut inventer des détails qui semblent vrais : on appelle cela des hallucinations. Elle peut aussi reproduire des préjugés, par exemple dans une offre d'emploi. Lisez le texte comme si vous étiez la personne qui le reçoit.",
            "Si votre lieu de travail vous demande de dire quand vous avez utilisé l'IA, faites-le. Être transparent sur votre façon de travailler crée la confiance."
          ],
          steps: ["Faits : comparez avec la source.", "Adéquation : bon ton et bonne longueur pour le lecteur.", "Sécurité : aucune donnée qui ne devrait pas y être.", "Source : sachez d'où vient chaque règle ou chiffre.", "Dites que vous avez utilisé l'IA si votre lieu de travail l'exige."],
          words: [["Hallucination", "quand l'IA écrit quelque chose qui semble vrai mais qui est inventé."], ["Préjugé", "un parti pris injuste pour ou contre un groupe."]],
          slides: [
            { title: "Votre nom est dessus", bullets: ["Vérifiez tout résultat d'IA avant de partager"] },
            { title: "Le contrôle en quatre points", bullets: ["Faits", "Adéquation", "Sécurité", "Source"] },
            { title: "Faites attention", bullets: ["Aux détails inventés (hallucinations)", "Aux préjugés, par exemple dans les offres d'emploi", "Dites que vous avez utilisé l'IA si c'est exigé"] }
          ],
          tryIt: "Tâche finale : réalisez votre série de tâches d'IA au travail : trois règles de la politique, un e-mail clair à partir de notes, un résumé en cinq points avec des actions, une formule de tableur testée, et une note de ce que vous avez vérifié dans chaque cas avec Faits, Adéquation, Sécurité et Source.",
          youCanNow: "utiliser les outils d'IA au travail pour aller plus vite, en sécurité et avec votre propre vérification attentive.",
          quickCheck: [
            { objective: "O6", q: "Que demande la vérification Sécurité avant de partager un travail fait avec l'IA ?", options: ["S'il contient des informations confidentielles ou personnelles qui ne doivent pas être partagées", "S'il est assez long", "S'il utilise des mots savants", "Si l'IA l'a aimé"], answer: 0, why: "La vérification Sécurité garantit que rien de confidentiel ou de personnel ne va là où il ne doit pas aller." },
            { objective: "O6", q: "L'IA a écrit un résumé de règlement qui cite une règle. Que faites-vous avant de le partager ?", options: ["Le partager vite", "Enlever votre nom", "Vérifier d'où vient la règle (Source) et qu'elle est juste", "Ajouter d'autres règles"], answer: 2, why: "La vérification Source confirme d'où vient chaque règle ou chiffre." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Résumés, tableurs et vérification",
        questions: [
          { objective: "O4", q: "Un bon résumé de réunion liste :", options: ["Les décisions, les actions avec responsables et dates, et les questions en suspens", "Seulement le titre de la réunion", "Les mots de passe de chacun", "Rien"], answer: 0, why: "Cette forme facilite le suivi." },
          { objective: "O4", q: "Avant qu'une réunion soit transcrite, les participants doivent :", options: ["Éteindre leur caméra", "Ne pas être prévenus", "Partir", "Savoir qu'elle est enregistrée ou transcrite"], answer: 3, why: "Suivez les règles du lieu de travail et soyez transparent." },
          { objective: "O5", q: "Que fait =COUNTIF(B:B,\"Late\") ?", options: ["Additionne la colonne B", "Compte les cellules de la colonne B qui disent Late", "Supprime les lignes Late", "Trie la feuille"], answer: 1, why: "COUNTIF compte les cellules qui correspondent." },
          { objective: "O5", q: "Comment savoir si une formule de l'IA fonctionne ?", options: ["La tester sur des lignes dont vous connaissez la réponse", "Elle a l'air juste", "L'IA le dit", "Personne ne se plaint"], answer: 0, why: "Le test le prouve." },
          { objective: "O6", q: "Lequel ne fait PAS partie des quatre contrôles ?", options: ["Adéquation", "Faits", "Célébrité", "Sécurité"], answer: 2, why: "Les contrôles sont Faits, Adéquation, Sécurité et Source." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les outils d'IA essentiels au travail",
    questions: [
      { objective: "O1", q: "Où trouve-t-on en général la politique d'IA de son lieu de travail ?", options: ["Dans une publication sur les réseaux sociaux", "Règlement du personnel, intranet, ou en demandant à son responsable ou à l'informatique", "Dans une conversation avec l'IA", "Nulle part"], answer: 1, why: "Les politiques se trouvent dans les lieux officiels de l'entreprise." },
      { objective: "O1", q: "La version « compte de travail » d'un outil d'IA peut :", options: ["Ne pas exister", "Être toujours moins sûre", "Rendre vos données publiques", "Mieux protéger les données qu'un compte personnel gratuit"], answer: 3, why: "Les versions professionnelles peuvent mieux protéger ; suivez les consignes de votre employeur." },
      { objective: "O1", q: "Qu'est-ce qui ne doit jamais aller dans un compte d'IA personnel ?", options: ["Une question générale", "« Rends ceci plus court »", "Un article de presse public", "Des informations personnelles sur un client"], answer: 3, why: "Les données des clients sont privées." },
      { objective: "O2", q: "ChatGPT, Copilot et Gemini sont :", options: ["Des tableurs", "Des assistants conversationnels", "Des imprimantes", "Des téléphones"], answer: 1, why: "Ce sont des assistants conversationnels d'IA." },
      { objective: "O2", q: "« Moins de 100 mots » dans une consigne fixe :", options: ["Le but", "Le lecteur", "La longueur", "Le mot de passe"], answer: 2, why: "Cela contrôle la longueur." },
      { objective: "O2", q: "Après que l'IA a rédigé un e-mail, vous :", options: ["Vérifiez les faits et faites en sorte qu'il vous ressemble", "L'envoyez sans le lire", "Ajoutez d'autres faits inventés", "Le supprimez"], answer: 0, why: "La version finale vous appartient." },
      { objective: "O3", q: "Copilot se trouve dans :", options: ["Les cahiers en papier", "Seulement Gmail", "Les applications Microsoft 365, dans certains abonnements", "Rien"], answer: 2, why: "Microsoft ajoute Copilot à ses applications dans certains abonnements." },
      { objective: "O3", q: "Gemini se trouve dans :", options: ["Les applications Google Workspace, dans certains abonnements", "Seulement Excel", "Les fax", "Rien"], answer: 0, why: "Google ajoute Gemini à ses applications dans certains abonnements." },
      { objective: "O3", q: "Vous ne voyez pas d'icône d'IA dans votre application de bureau. Vous pouvez :", options: ["Installer des extensions au hasard", "Demander à l'informatique, ou utiliser un assistant approuvé avec un texte non confidentiel", "Abandonner", "Utiliser l'identifiant d'un collègue"], answer: 1, why: "Restez dans les outils approuvés." },
      { objective: "O4", q: "Une action à mener devrait avoir :", options: ["Rien", "Un secret", "Un mot de passe", "Un responsable et une date limite"], answer: 3, why: "Les responsables et les dates font avancer les choses." },
      { objective: "O4", q: "Pourquoi comparer un résumé avec l'original ?", options: ["Les résumés peuvent oublier ou modifier des détails", "Pour perdre du temps", "Ce n'est pas utile", "Pour s'amuser"], answer: 0, why: "La vérification attrape les erreurs." },
      { objective: "O4", q: "Transcrire veut dire :", options: ["Envoyer un e-mail", "Supprimer un fichier", "Traduire une langue", "Transformer la parole en texte écrit"], answer: 3, why: "La transcription met la parole par écrit." },
      { objective: "O5", q: "Au lieu de coller des données confidentielles de tableur dans l'IA, vous pouvez :", options: ["Les envoyer à des amis", "Les coller quand même", "Décrire les colonnes", "Les publier en ligne"], answer: 2, why: "Une description protège les données." },
      { objective: "O5", q: "Dans un tableur, une plage est :", options: ["Un bord de mer", "Un groupe de cellules, comme B2:B50", "Un mot de passe", "Un graphique"], answer: 1, why: "Une plage est un groupe de cellules." },
      { objective: "O5", q: "Une erreur fréquente dans les formules de l'IA est :", options: ["Aucune", "Être trop courte", "Utiliser des couleurs", "Compter la ligne d'en-tête ou utiliser la mauvaise plage"], answer: 3, why: "Testez pour les repérer." },
      { objective: "O6", q: "Une hallucination de l'IA est :", options: ["Une réunion", "Un bug d'écran", "Un détail inventé qui semble vrai", "Un virus"], answer: 2, why: "L'IA peut inventer des faits." },
      { objective: "O6", q: "Le contrôle « Adéquation » vérifie si :", options: ["Le ton et la longueur conviennent au lecteur", "Le fichier tient sur une clé USB", "La chaise est adaptée", "Le texte tient dans un tweet"], answer: 0, why: "L'adéquation concerne le lecteur." },
      { objective: "O6", q: "Le contrôle « Source » demande :", options: ["Quel clavier vous avez utilisé", "D'où vient chaque règle ou chiffre", "Qui a tapé le plus vite", "Rien"], answer: 1, why: "Les règles et les chiffres ont besoin d'une source." },
      { objective: "O6", q: "Si votre lieu de travail exige de dire que vous avez utilisé l'IA, vous devez :", options: ["Le cacher", "Le dire", "Accuser un collègue", "Ignorer la règle"], answer: 1, why: "La transparence crée la confiance et respecte la politique." },
      { objective: "O6", q: "Quel nom figure sur un travail fait avec l'IA que vous partagez ?", options: ["Le vôtre", "Celui de l'IA", "Celui de l'informatique", "Aucun"], answer: 0, why: "Vous en êtes responsable." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      8,
      9,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Règles de la politique",
        objective: "O1",
        notYet: "Aucune règle notée, ou des règles qui autorisent des données personnelles dans les outils d'IA.",
        meets: "Trois règles clés de la politique d'IA du lieu de travail, ou trois règles prudentes par défaut.",
        exceeds: "Indique où se trouve la politique et à qui poser des questions."
      },
      {
        name: "E-mail clair",
        objective: "O2",
        notYet: "L'e-mail n'est pas clair, ou un fait est faux.",
        meets: "Un e-mail clair écrit à partir de notes brouillonnes, avec les faits vérifiés par rapport aux notes.",
        exceeds: "L'apprenant a demandé une modification et a rendu l'e-mail à son image."
      },
      {
        name: "Résumé et actions à mener",
        objective: "O4",
        notYet: "Moins de cinq points, ou des actions sans responsable.",
        meets: "Cinq points et trois actions à mener avec un responsable, vérifiés par rapport à l'original.",
        exceeds: "Les actions ont aussi une date limite, et un détail manquant a été trouvé et ajouté."
      },
      {
        name: "Formule testée",
        objective: "O5",
        notYet: "La formule n'a pas été testée ou donne une mauvaise réponse.",
        meets: "Une formule qui marche, testée par rapport à une réponse calculée à la main.",
        exceeds: "L'apprenant peut expliquer ce que fait chaque partie de la formule."
      },
      {
        name: "Vérifications avant partage",
        objective: "O6",
        notYet: "Aucune note sur ce qui a été vérifié.",
        meets: "Chaque élément a une note sur les vérifications Faits, Adéquation, Sécurité et Source.",
        exceeds: "Les notes indiquent une correction précise faite après une vérification."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui disent utiliser chaque semaine un outil d'IA approuvé pour une tâche de travail, 30 jours plus tard (enquête de suivi)",
      "Apprenants ou responsables qui signalent du temps gagné sur les e-mails, les résumés ou les tableurs",
      "Apprenants qui commencent un autre cours Koach Learn sur le travail dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet",
      "Les outils d'IA autorisés par le lieu de travail, ou un assistant de discussion gratuit (ChatGPT, Microsoft Copilot ou Google Gemini) avec des données inventées pour les demandeurs d'emploi",
      "Un tableur gratuit : Google Sheets ou Microsoft Excel en ligne",
      "Un exemple de long document ou de notes de réunion sans information confidentielle",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Dans un groupe en entreprise, apportez la politique d'IA de l'employeur à la première séance et lisez-la ensemble.",
      "Fournissez des notes, des documents et des données de tableur d'exemple pour que personne n'utilise d'informations confidentielles.",
      "Les outils intégrés varient selon l'abonnement ; gardez un assistant de discussion gratuit prêt pour les apprenants dont le compte n'en a pas.",
      "Faites échanger les résultats et appliquer les vérifications Faits, Adéquation, Sécurité et Source au travail de l'autre.",
      "Notez l'ensemble des tâches avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
