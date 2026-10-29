"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-capstone.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-capstone-fr",
  lang: "fr",
  translationOf: "entrepreneurs-capstone",
  category: "Entrepreneurs",
  name: "Projet final : créez votre plan d'affaires, service, automatisation, stratégie marketing ou système de productivité avec l'IA",
  skills: "Choisir et délimiter un projet, Valider avec de vraies personnes, Concevoir la solution, La construire avec l'IA, Vérifier les chiffres et les risques, Tester et présenter votre travail",
  outcome: "choisir un projet d'entreprise avec l'IA (un plan d'affaires de start-up, une entreprise de services, un système d'automatisation, une stratégie marketing ou un écosystème de productivité), le construire du début à la fin avec l'IA comme assistant, le tester avec de vraies personnes et présenter une version finie et vérifiée.",
  about: [
    "Voici le projet final : celui qui rassemble tout ce que vous avez appris dans les cours pour entrepreneurs. Vous choisirez UN projet parmi cinq et vous le construirez pour une vraie entreprise, la vôtre ou une que vous connaissez bien.",
    "Les cinq choix sont : 1) un plan d'affaires de start-up avec l'IA, 2) une entreprise de services qui utilise l'IA, 3) un système d'automatisation par l'IA pour une entreprise, 4) une stratégie marketing avec l'IA, ou 5) un écosystème de productivité avec l'IA (les outils, modèles et habitudes qui font tourner une semaine de travail). Chaque leçon est une étape de construction : choisir et délimiter, valider, concevoir, construire, vérifier les chiffres et les risques, puis tester et présenter.",
    "Chaque leçon se lit en environ cinq minutes, mais les tâches \"Essayez maintenant\" sont du vrai travail de projet et peuvent prendre une heure ou plus. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Quand votre projet touche aux impôts, aux licences ou à des questions juridiques, les leçons vous renvoient à des sources officielles ; parlez de votre situation à un comptable ou à un avocat."
  ],
  finalTask: "Remettez votre projet final terminé sous forme d'un document ou d'un dossier : un résumé d'une page (l'entreprise, le client, le problème, votre solution), le projet complet (plan d'affaires, offre de service, automatisation qui fonctionne avec son journal, stratégie marketing ou écosystème de productivité), vos notes de validation auprès d'au moins trois vraies personnes, les chiffres et la liste de contrôle des risques, les résultats des tests et les changements faits, et une présentation de trois minutes que vous pouvez faire à voix haute.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des entrepreneurs qui terminent les cours Koach Learn pour entrepreneurs et veulent construire un projet IA complet pour leur propre entreprise ou une entreprise qu'ils connaissent bien.",
    startingPoint: "Ils ont utilisé l'IA pour les écrits professionnels, les outils, le marketing, l'automatisation ou la productivité dans les cours précédents. La plupart n'ont jamais mené un projet de l'idée jusqu'à un résultat testé et présenté.",
    gap: "Les compétences apprises une par une ne rapportent vraiment que lorsqu'elles se rejoignent dans un projet terminé. Les apprenants doivent délimiter, valider, concevoir, construire, vérifier et présenter un vrai projet, pour repartir avec quelque chose qu'ils peuvent utiliser, montrer à un partenaire ou à un financeur, et continuer à améliorer.",
    constraints: [
      "Des mots simples ; chaque leçon est courte, mais le travail de projet peut prendre une heure ou plus par étape",
      "Appareils : un ordinateur avec un assistant IA gratuit, un tableur et un outil de traitement de texte",
      "Temps : environ deux à quatre semaines de travail de projet à temps partiel",
      "Les points sur les impôts, les licences et le droit vont aux sources officielles (SBA, IRS) et à un comptable ou un avocat",
      "Des espaces réservés au lieu des noms de clients ou de détails privés dans chaque prompt"
    ],
    prerequisites: "« Introduction à l'IA pour les entrepreneurs » et au moins deux autres cours pour entrepreneurs, de préférence celui qui correspond au projet choisi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des cinq choix de projet final et d'une vraie entreprise", action: "choisir un projet et écrire sa délimitation en un paragraphe avec ce qui est inclus, ce qui ne l'est pas et une date de fin", standard: "assez petit pour être terminé à temps" },
    { id: "O2", condition: "À partir des principales hypothèses de votre projet", action: "interroger au moins trois vraies personnes avec des questions neutres et marquer chaque hypothèse confirmée, fausse ou incertaine", standard: "en notant leurs mots exacts et en mettant à jour la délimitation quand une hypothèse est fausse" },
    { id: "O3", condition: "À partir de votre délimitation et de vos notes de validation", action: "écrire un plan avec les bonnes sections pour votre type de projet", standard: "en marquant les sections qui demandent vos propres faits" },
    { id: "O4", condition: "Avec l'IA comme assistant", action: "construire le projet une section à la fois, avec l'IA qui rédige et vous qui vérifiez", standard: "en tenant un journal de construction et en utilisant des espaces réservés pour les détails privés" },
    { id: "O5", condition: "À partir de votre projet", action: "vérifier ses chiffres dans un tableur et écrire une liste de contrôle des risques", standard: "avec chaque formule vérifiée et les points d'impôts et de droit marqués à confirmer auprès d'une source officielle ou d'un professionnel" },
    { id: "O6", condition: "À partir de votre projet terminé", action: "tester le projet avec trois personnes, faire les principaux changements et le présenter en trois minutes", standard: "en couvrant le problème, votre solution, la preuve et la prochaine étape" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier votre projet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Étape 1 : Choisir et délimiter votre projet",
          minutes: 6,
          goal: "Choisir l'un des cinq projets finaux et écrire sa délimitation en un paragraphe.",
          text: [
            "Choisissez le projet qui aidera le plus une vraie entreprise dans les trois prochains mois. Un plan d'affaires convient à une nouvelle idée qui a besoin d'un plan clair ou d'un financement. Une entreprise de services convient à quelqu'un qui est prêt à vendre un service grâce à l'IA. Un système d'automatisation convient à une entreprise noyée sous les tâches répétitives. Une stratégie marketing convient à une entreprise qui a besoin de plus de clients. Un écosystème de productivité convient à un patron débordé qui a besoin d'une meilleure semaine.",
            "Délimiter, c'est décider ce qui fait partie du projet et ce qui n'en fait pas partie. Une bonne délimitation est assez petite pour être terminée : \"Une stratégie marketing de 90 jours pour mon lavage de voitures à domicile, centrée sur un quartier et deux canaux\" vaut mieux que \"du marketing pour tout\".",
            "Demandez à l'IA de vous aider à comparer : \"Voici mon entreprise et mon plus gros problème. Lequel de ces cinq projets finaux m'aiderait le plus, et pourquoi ?\" Puis décidez vous-même et écrivez votre délimitation."
          ],
          steps: ["Écrivez votre entreprise (ou celle que vous aidez) et son plus gros problème.", "Lisez les cinq choix de projet.", "Demandez à l'IA lequel aiderait le plus et pourquoi.", "Choisissez-en un.", "Écrivez la délimitation en un paragraphe : ce qui est inclus, ce qui ne l'est pas, et la date de fin."],
          words: [["Projet final", "un dernier projet qui rassemble tout ce que vous avez appris."], ["Délimitation (périmètre)", "les limites d'un projet : ce qui est inclus et ce qui ne l'est pas."]],
          slides: [
            { title: "Cinq choix de projet final", bullets: ["Plan d'affaires de start-up avec l'IA", "Entreprise de services qui utilise l'IA", "Système d'automatisation par l'IA", "Stratégie marketing ou écosystème de productivité avec l'IA"] },
            { title: "Lequel vous convient ?", bullets: ["Nouvelle idée qui a besoin d'un plan : plan d'affaires", "Prêt à vendre un service : entreprise de services", "Trop de tâches répétitives : automatisation"] },
            { title: "Et aussi", bullets: ["Besoin de clients : stratégie marketing", "Patron débordé : écosystème de productivité"] },
            { title: "Délimitez petit", bullets: ["Ce qui est inclus, ce qui ne l'est pas", "Une date de fin", "Assez petit pour être terminé"] }
          ],
          tryIt: "Choisissez votre projet final et écrivez sa délimitation en un paragraphe : ce qui est inclus, ce qui ne l'est pas et votre date de fin.",
          youCanNow: "choisir un projet final adapté à une vraie entreprise et le délimiter pour pouvoir le terminer.",
          quickCheck: [
            { objective: "O1", q: "Que dit la délimitation d'un projet ?", options: ["Ce qui est inclus ou non dans le projet, et quand il sera terminé", "L'histoire de votre vie", "Toutes les idées que vous avez jamais eues", "Le nom de votre outil d'IA"], answer: 0, why: "Une délimitation garde le projet assez petit pour être terminé." },
            { objective: "O1", q: "Votre délimitation couvre le marketing dans cinq villes et sur six canaux en deux semaines. Que faites-vous ?", options: ["La garder telle quelle", "La réduire à une zone et quelques canaux", "Ajouter d'autres villes", "Supprimer la date de fin"], answer: 1, why: "Une délimitation plus petite peut être terminée et bien faite." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Étape 2 : Valider avec de vraies personnes",
          minutes: 5,
          goal: "Vérifier les hypothèses de votre projet en parlant à au moins trois vraies personnes.",
          text: [
            "Chaque projet repose sur des hypothèses : les clients veulent ceci, ils paieront tel prix, cette tâche fait perdre tant d'heures, les gens nous trouvent sur telle plateforme. Valider, c'est les vérifier auprès de vraies personnes avant de construire.",
            "Demandez à l'IA : \"Liste les cinq plus grandes hypothèses de ce projet et écris trois questions d'entretien neutres pour chacune.\" Neutre veut dire que vous n'orientez pas la personne : demandez \"Comment faites-vous aujourd'hui ?\" et non \"Vous adoreriez mon idée, non ?\"",
            "Parlez à au moins trois personnes : des clients possibles, le patron de l'entreprise ou les employés qui font le travail. Notez leurs mots exacts. Puis demandez à l'IA de vous aider à regrouper ce que vous avez entendu, et notez quelles hypothèses tiennent et lesquelles ne tiennent pas."
          ],
          steps: ["Demandez à l'IA de lister les cinq plus grandes hypothèses de votre projet.", "Écrivez des questions d'entretien neutres.", "Parlez à au moins trois vraies personnes.", "Notez leurs mots exacts.", "Marquez chaque hypothèse : confirmée, fausse ou incertaine, et mettez à jour votre délimitation."],
          words: [["Hypothèse", "quelque chose que vous croyez vrai mais que vous n'avez pas vérifié."], ["Validation", "la vérification des hypothèses avec de vraies preuves avant de construire."], ["Question neutre", "une question qui ne pousse pas la personne vers une réponse."]],
          slides: [
            { title: "Chaque projet a des hypothèses", bullets: ["Les clients le veulent", "Ils paieront tel prix", "Cette tâche fait perdre tant d'heures"] },
            { title: "Posez des questions neutres", bullets: ["\"Comment faites-vous aujourd'hui ?\"", "Et non \"Vous adoreriez mon idée, non ?\""] },
            { title: "Parlez à trois personnes ou plus", bullets: ["Clients, patron ou employés", "Notez leurs mots exacts", "Confirmée, fausse ou incertaine ?"] }
          ],
          tryIt: "Listez vos cinq hypothèses avec l'aide de l'IA, interrogez au moins trois personnes avec des questions neutres, et marquez chaque hypothèse confirmée, fausse ou incertaine.",
          youCanNow: "valider un projet d'entreprise avec de vraies personnes avant de le construire.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une hypothèse dans un projet d'entreprise ?", options: ["Un fait prouvé", "Une règle juridique", "Quelque chose que vous croyez mais n'avez pas vérifié", "Le nom d'un client"], answer: 2, why: "La validation vérifie les hypothèses auprès de vraies personnes." },
            { objective: "O2", q: "Un entretien montre que les clients ne s'intéressent pas à la fonction autour de laquelle vous aviez tout prévu. Que faites-vous ?", options: ["L'ignorer", "N'interroger que des personnes d'accord avec vous", "La construire quand même", "Mettre à jour votre délimitation ou votre conception"], answer: 3, why: "Une hypothèse fausse doit changer le plan avant de construire." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Étape 3 : Concevoir la solution",
          minutes: 6,
          goal: "Écrire le plan de votre projet avec la bonne structure pour votre choix.",
          text: [
            "Chaque projet a une structure. Plan d'affaires : la SBA (l'agence américaine pour les petites entreprises) liste les sections d'un plan classique (résumé, description de l'entreprise, analyse du marché, organisation et direction, gamme de services ou de produits, marketing et ventes, demande de financement, prévisions financières) et propose aussi un plan allégé. Entreprise de services : le problème, ce que vous livrez, les étapes (IA et humaines), le prompt d'instructions, le prix. Système d'automatisation : la carte du flux de travail, le déclencheur et les actions, l'étape d'IA, les garde-fous d'approbation, les tests et le suivi.",
            "Stratégie marketing : le client idéal, l'offre, un ou deux canaux, un calendrier de contenus, un plan d'e-mails et les chiffres que vous suivrez. Écosystème de productivité : le plan de la semaine, la boîte à outils (un outil par tâche), les modèles, les SOP, les automatisations et un relevé du temps.",
            "Demandez à l'IA de transformer votre délimitation et vos notes de validation en un plan avec ces sections. Modifiez-le pour que chaque section reflète ce que de vraies personnes vous ont dit."
          ],
          steps: ["Trouvez la structure de votre type de projet.", "Donnez à l'IA votre délimitation et vos notes de validation.", "Demandez un plan avec ces sections et une ligne sur le contenu de chacune.", "Modifiez le plan avec ce que de vraies personnes vous ont dit.", "Indiquez quelles sections l'IA peut rédiger et lesquelles demandent vos propres faits."],
          words: [["Plan (sommaire)", "la liste des sections d'un projet, avant de l'écrire en entier."], ["Plan allégé", "un plan d'affaires court centré sur l'essentiel, à la place d'un long plan classique."]],
          slides: [
            { title: "Plan d'affaires (sections de la SBA)", bullets: ["Résumé, entreprise, analyse du marché", "Organisation, produit ou service, marketing", "Demande de financement, prévisions financières"] },
            { title: "Service ou automatisation", bullets: ["Service : problème, livrable, étapes, prompt, prix", "Automatisation : carte, déclencheur, actions, garde-fous, tests"] },
            { title: "Marketing ou productivité", bullets: ["Marketing : client, offre, canaux, calendrier, e-mails", "Productivité : plan de la semaine, outils, modèles, SOP"] },
            { title: "Construisez le plan", bullets: ["L'IA le rédige à partir de votre délimitation et de vos notes", "Vous le modifiez avec ce que les gens ont dit"] }
          ],
          sources: [{ name: "SBA : rédiger votre plan d'affaires (en anglais)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Demandez à l'IA de transformer votre délimitation et vos notes de validation en un plan avec les bonnes sections pour votre projet. Modifiez-le et indiquez les sections qui demandent vos propres faits.",
          youCanNow: "concevoir toute la structure de votre projet final à partir de vraies preuves.",
          quickCheck: [
            { objective: "O3", q: "Où trouver les sections habituelles d'un plan d'affaires ?", options: ["Sur la page de la SBA consacrée au plan d'affaires", "Dans une publication sur les réseaux sociaux", "Dans une supposition de l'IA au hasard", "Dans les fichiers privés d'un concurrent"], answer: 0, why: "La SBA (l'agence américaine des petites entreprises) liste les sections d'un plan d'affaires classique." },
            { objective: "O3", q: "Le plan de l'IA pour votre projet d'automatisation oublie les garde-fous. Que faites-vous ?", options: ["Accepter le plan", "Ajouter une section sur les garde-fous", "Retirer aussi les tests", "Passer à un projet de marketing"], answer: 1, why: "Un projet d'automatisation a besoin d'un processus, d'un déclencheur et d'actions, d'une étape d'IA, de garde-fous et de tests." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier votre projet",
        questions: [
          { objective: "O1", q: "Une patronne dit : \"Je passe 10 heures par semaine à recopier des commandes d'une application à l'autre.\" Quel projet final convient le mieux ?", options: ["Une stratégie marketing avec l'IA", "Un système d'automatisation par l'IA", "Un plan d'affaires de start-up avec l'IA", "Aucun"], answer: 1, why: "Recopier sans cesse, c'est exactement ce que l'automatisation résout." },
          { objective: "O1", q: "Quel projet est bien délimité ?", options: ["Utiliser tous les outils d'IA", "Du marketing pour tout, pour toujours", "Réparer toute l'entreprise", "Une stratégie marketing de 90 jours pour un quartier et deux canaux"], answer: 3, why: "Il est assez petit et clair pour être terminé." },
          { objective: "O2", q: "Quelle question d'entretien est neutre ?", options: ["\"Comment faites-vous aujourd'hui ?\"", "\"Vous adoreriez mon idée, non ?\"", "\"Vous paieriez 100 $, n'est-ce pas ?\"", "\"Tout le monde en a besoin, oui ?\""], answer: 0, why: "Elle ne pousse pas la personne vers une réponse." },
          { objective: "O2", q: "À combien de vraies personnes devez-vous parler au minimum ?", options: ["Une discussion avec une IA", "Zéro", "Trois", "Seulement vous-même"], answer: 2, why: "Trois conversations sont le minimum pour ce projet final." },
          { objective: "O3", q: "Laquelle de ces sections fait partie du plan d'affaires classique de la SBA ?", options: ["Les mots de passe des réseaux sociaux", "Les applications préférées", "L'analyse du marché", "La décoration du bureau"], answer: 2, why: "L'analyse du marché fait partie des sections listées par la SBA." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire, vérifier et présenter",
      lessons: [
        {
          objectives: ["O4"],
          title: "Étape 4 : Le construire avec l'IA",
          minutes: 6,
          goal: "Construire tout le projet section par section, avec l'IA qui rédige et vous qui vérifiez.",
          text: [
            "Travaillez une section à la fois. Pour chacune, donnez à l'IA le nom de la section, vos vrais faits et le format voulu. Exemple : \"Écris la section analyse du marché du plan d'affaires de mon lavage de voitures à domicile. Voici ce que trois clients m'ont dit et les faits locaux que j'ai trouvés. Moins de 300 mots, langage simple.\"",
            "Pour les projets pratiques, construisez la vraie chose : mettez en place l'automatisation et testez-la, créez les modèles et les SOP, faites les premières publications et l'e-mail, ou rédigez l'offre de service et réalisez-la une fois.",
            "Tenez un court journal de construction : ce que vous avez fait, avec quel outil, ce que vous avez changé après vérification. Ne mettez jamais de données privées de clients ou d'argent dans les outils d'IA ; utilisez des espaces réservés et remplissez-les vous-même."
          ],
          steps: ["Prenez la section suivante de votre plan.", "Donnez à l'IA le nom de la section, vos faits et le format.", "Vérifiez le brouillon : faits, chiffres, ton, affirmations.", "Construisez pour de vrai les parties pratiques et testez-les.", "Écrivez une ligne dans votre journal de construction et passez à la section suivante."],
          words: [["Journal de construction", "un simple relevé de ce que vous avez fait, avec quel outil, et de ce que vous avez changé."], ["Espace réservé", "un repère comme [nom du client] que vous remplacez vous-même, en dehors de l'outil d'IA."]],
          slides: [
            { title: "Une section à la fois", bullets: ["Nom de la section + vos faits + format", "L'IA rédige ; vous vérifiez"] },
            { title: "Construisez la vraie chose", bullets: ["Mettez en place et testez l'automatisation", "Créez modèles, SOP, publications", "Réalisez le service une fois"] },
            { title: "Tenez un journal de construction", bullets: ["Quoi, avec quel outil, ce que vous avez changé", "Aucune donnée privée dans les outils d'IA"] }
          ],
          tryIt: "Construisez au moins la moitié des sections de votre projet (ou sa partie centrale qui fonctionne), avec l'IA qui rédige et vous qui vérifiez. Tenez votre journal de construction.",
          youCanNow: "construire un vrai projet d'entreprise avec l'IA comme assistant et vous-même comme vérificateur.",
          quickCheck: [
            { objective: "O4", q: "Que note un journal de construction ?", options: ["Vos mots de passe", "Seulement le résultat final", "Ce que vous avez fait, avec quel outil et ce que vous avez changé", "Les numéros de téléphone des clients"], answer: 2, why: "Un journal de construction montre comment le projet a été construit et vérifié." },
            { objective: "O4", q: "Vous avez besoin que l'IA rédige un e-mail à un client pour votre projet. Comment indiquez-vous le client ?", options: ["Coller son nom complet et son adresse", "Coller son numéro de carte", "Renoncer à l'e-mail", "Utiliser un espace réservé comme [nom du client]"], answer: 3, why: "Les espaces réservés gardent les détails privés hors de l'IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Étape 5 : Vérifier les chiffres et les risques",
          minutes: 6,
          goal: "Vérifier les chiffres de votre projet et dresser une liste de contrôle des risques.",
          text: [
            "Chaque projet a besoin de chiffres honnêtes : les coûts (outils, temps, matériel), les prix ou les économies, et le moment où il devient rentable. Mettez-les dans un tableur et vérifiez vous-même chaque formule. L'IA peut suggérer quoi inclure, mais c'est vous qui vérifiez les calculs.",
            "Puis dressez une liste de contrôle des risques à partir de ce que vous avez appris : toutes les affirmations marketing et sur l'IA sont-elles vraies et prouvables (règles publicitaires de la FTC, l'autorité américaine de protection des consommateurs) ? Les données clients restent-elles hors des outils d'IA et sont-elles protégées ? Une personne vérifie-t-elle tout ce que voient les clients ? Les contenus sponsorisés sont-ils signalés ? Avez-vous besoin d'une licence, d'un permis ou d'une inscription fiscale là où vous travaillez ?",
            "Pour la partie officielle, utilisez les sites officiels. Par exemple, l'IRS (l'administration fiscale américaine) dit que vous n'avez jamais à payer pour obtenir un numéro d'identification d'employeur (EIN) et met en garde contre les sites qui le font payer. Les travailleurs indépendants paient en général l'impôt sur le travail indépendant et souvent des acomptes d'impôt trimestriels ; consultez irs.gov et parlez-en à un comptable. Demandez à un avocat pour tout point juridique de votre plan."
          ],
          steps: ["Listez tous les coûts, prix ou économies dans un tableur.", "Calculez quand le projet sera rentabilisé.", "Vérifiez vous-même chaque formule.", "Dressez une liste de contrôle des risques : affirmations, données, vérifications humaines, mentions de sponsoring, licences et impôts.", "Indiquez les points à confirmer avec un site officiel, un comptable ou un avocat."],
          words: [["Retour sur investissement (délai)", "le temps qu'il faut pour que l'argent gagné ou économisé couvre ce que vous avez dépensé."], ["EIN", "Employer Identification Number : un numéro fiscal fédéral gratuit pour une entreprise aux États-Unis, délivré par l'IRS."], ["Impôt sur le travail indépendant", "les cotisations de sécurité sociale et d'assurance maladie (Social Security et Medicare) que paient les travailleurs indépendants aux États-Unis."]],
          slides: [
            { title: "Des chiffres honnêtes", bullets: ["Coûts : outils, temps, matériel", "Prix ou économies", "Quand c'est rentabilisé ; vérifiez chaque formule"] },
            { title: "Liste de contrôle des risques", bullets: ["Affirmations vraies et prouvables", "Données clients protégées", "Vérifications humaines ; contenus sponsorisés signalés"] },
            { title: "Sources officielles", bullets: ["IRS : un EIN est gratuit ; méfiez-vous des sites qui le font payer", "Impôt des indépendants et acomptes : irs.gov", "Demandez à un comptable ou à un avocat"] }
          ],
          sources: [{ name: "IRS : obtenir un numéro d'identification d'employeur (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "FTC : bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Construisez votre tableau de chiffres (coûts, prix ou économies, délai de rentabilité), vérifiez chaque formule, et écrivez votre liste de contrôle des risques avec les points à confirmer officiellement.",
          youCanNow: "vérifier les chiffres et les risques d'un projet, et savoir où confirmer les points fiscaux et juridiques.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le délai de retour sur investissement ?", options: ["Le temps avant que les gains ou les économies couvrent le coût", "Un remboursement à un client", "Un formulaire d'impôts", "Une pénalité de retard"], answer: 0, why: "Il montre combien de temps il faut pour que le projet se rembourse." },
            { objective: "O5", q: "Votre projet a besoin d'une licence commerciale. Que mettez-vous dans votre liste de contrôle des risques ?", options: ["Rien ; l'IA a dit que tout allait bien", "Confirmer les règles de la licence auprès de l'organisme officiel", "Se passer de la licence", "Demander à un ami en ligne"], answer: 1, why: "Les points de licence et de droit se confirment auprès des sources officielles ou d'un professionnel." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Étape 6 : Tester, améliorer et présenter",
          minutes: 6,
          goal: "Tester votre projet terminé avec de vraies personnes, l'améliorer et le présenter en trois minutes.",
          text: [
            "Montrez le projet terminé à au moins trois personnes : le patron, un client possible ou quelqu'un qui l'utiliserait. Demandez : \"Qu'est-ce qui est clair ? Qu'est-ce qui est confus ? Que changeriez-vous ?\" Pour les projets pratiques, faites-les essayer.",
            "Faites les changements les plus importants et notez-les. Puis demandez à l'IA de vous aider à écrire une présentation de trois minutes : le problème, qui l'a, votre solution, la preuve (ce que les gens vous ont dit et les résultats des tests), les chiffres et la prochaine étape.",
            "Entraînez-vous à voix haute. Demandez à l'IA de jouer un auditeur exigeant (un investisseur, un patron, un client) et de vous poser des questions difficiles. Puis rassemblez le tout dans votre dossier final."
          ],
          steps: ["Montrez ou testez le projet avec au moins trois personnes.", "Faites les changements principaux et notez-les.", "Demandez à l'IA le plan d'une présentation de trois minutes.", "Entraînez-vous à voix haute et chronométrez-vous.", "Jouez des questions difficiles avec l'IA.", "Rassemblez le dossier final."],
          words: [["Pitch", "une courte présentation qui explique votre projet et pourquoi il compte."], ["Preuve", "ce qui montre que votre projet fonctionne, comme les résultats des tests et ce que les gens ont dit."]],
          slides: [
            { title: "Testez le projet terminé", bullets: ["Au moins trois personnes", "Qu'est-ce qui est clair, confus, à changer ?", "Faites essayer les parties pratiques"] },
            { title: "Un pitch de trois minutes", bullets: ["Le problème et qui l'a", "Votre solution et la preuve", "Les chiffres et la prochaine étape"] },
            { title: "Entraînez-vous", bullets: ["À voix haute, chronométré", "L'IA joue un auditeur exigeant", "Puis rassemblez le dossier final"] }
          ],
          tryIt: "Tâche finale : testez votre projet avec trois personnes, faites les changements principaux, entraînez-vous à votre présentation de trois minutes et rassemblez votre dossier final : résumé, projet complet, notes de validation, chiffres et liste des risques, résultats des tests et présentation.",
          youCanNow: "construire, vérifier, tester et présenter un projet d'entreprise complet avec l'IA, du début à la fin.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce que la preuve dans une présentation de trois minutes ?", options: ["Votre opinion", "Une longue liste de fonctions", "Des éléments comme les résultats des tests et ce que les gens ont dit", "Une blague"], answer: 2, why: "La preuve montre que le projet marche pour de vraies personnes." },
            { objective: "O6", q: "Les testeurs trouvent deux sections confuses. Que faites-vous avant de présenter ?", options: ["Présenter tel quel", "Retirer les notes des testeurs", "Ajouter d'autres sections", "Faire les principaux changements et tester de nouveau les parties confuses"], answer: 3, why: "Les tests servent à trouver et corriger les problèmes avant de présenter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire, vérifier et présenter",
        questions: [
          { objective: "O4", q: "Quand vous construisez avec l'IA, que devez-vous lui donner pour chaque section ?", options: ["Le nom de la section, vos vrais faits et le format", "Le mot de passe de votre banque", "Rien ; laissez-la deviner", "Le plan d'un concurrent à copier"], answer: 0, why: "De vrais faits et un format clair donnent un brouillon utilisable." },
          { objective: "O5", q: "Qui vérifie les formules de votre tableau de chiffres ?", options: ["Un site web au hasard", "Seulement l'IA", "Personne", "Vous"], answer: 3, why: "Les calculs de l'IA peuvent être faux." },
          { objective: "O5", q: "Un site propose de vous obtenir un EIN pour 250 $. Que dit l'IRS ?", options: ["C'est le prix officiel", "Vous n'avez jamais à payer pour un EIN ; méfiez-vous des sites qui le font payer", "Un EIN coûte 1 000 $", "Seuls les EIN payants sont valables"], answer: 1, why: "L'IRS délivre les EIN gratuitement et met en garde contre les sites payants." },
          { objective: "O6", q: "Que doit contenir un pitch de trois minutes ?", options: ["Le problème, votre solution, la preuve et la prochaine étape", "Chaque détail de chaque tableur", "Vos mots de passe", "Seulement des blagues"], answer: 0, why: "Un pitch est court et centré sur l'essentiel." },
          { objective: "O6", q: "Comment l'IA peut-elle vous aider à préparer votre présentation ?", options: ["En écrivant de faux avis", "En faisant la présentation à votre place", "En jouant un auditeur exigeant qui pose des questions difficiles", "En sautant l'entraînement"], answer: 2, why: "Le jeu de rôle donne confiance face aux vraies questions." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Projet final : créez votre plan d'affaires, service, automatisation, stratégie marketing ou système de productivité avec l'IA",
    questions: [
      { objective: "O1", q: "Combien de projets finaux choisissez-vous ?", options: ["Les cinq", "Un seul", "Trois", "Aucun"], answer: 1, why: "Vous choisissez UN projet et vous le terminez." },
      { objective: "O1", q: "Un patron débordé qui a besoin d'une meilleure semaine devrait choisir :", options: ["Un nouveau logo", "Un plan d'affaires de start-up avec l'IA", "Rien", "Un écosystème de productivité avec l'IA"], answer: 3, why: "Un écosystème de productivité organise la semaine du patron." },
      { objective: "O1", q: "Une nouvelle idée qui a besoin d'un financement convient le mieux à :", options: ["Un modèle de réclamation", "Un système d'automatisation", "Seulement un calendrier de contenus", "Un plan d'affaires de start-up avec l'IA"], answer: 3, why: "Un plan d'affaires explique l'idée et l'argent nécessaire." },
      { objective: "O1", q: "Délimiter un projet, c'est :", options: ["Choisir le logo du projet", "Décider ce qui est inclus et exclu du projet", "Fixer le prix", "Choisir le logiciel"], answer: 1, why: "La délimitation fixe les limites pour que vous puissiez terminer." },
      { objective: "O2", q: "Une hypothèse, c'est :", options: ["Un formulaire fiscal", "Un fait prouvé", "Quelque chose que vous croyez sans l'avoir vérifié", "Un type d'IA"], answer: 2, why: "La validation vérifie les hypothèses." },
      { objective: "O2", q: "Pendant les entretiens, vous devez noter :", options: ["Les mots exacts des gens", "Seulement ce que vous espériez entendre", "Leurs numéros de carte", "Rien"], answer: 0, why: "Les mots exacts vous gardent honnête." },
      { objective: "O2", q: "Si une hypothèse se révèle fausse, vous devez :", options: ["La cacher", "L'ignorer", "Mettre à jour votre délimitation ou votre conception", "Demander à d'autres personnes jusqu'à ce que quelqu'un soit d'accord"], answer: 2, why: "La validation n'est utile que si vous en tenez compte." },
      { objective: "O3", q: "Où trouver les sections habituelles d'un plan d'affaires ?", options: ["Sur la page de la SBA consacrée au plan d'affaires", "Dans une publication au hasard sur les réseaux sociaux", "Chez un concurrent", "Dans votre boîte e-mail"], answer: 0, why: "La SBA liste les sections du plan classique et du plan allégé." },
      { objective: "O3", q: "Un projet de système d'automatisation comprend :", options: ["Seulement un logo", "La carte du flux, le déclencheur et les actions, l'étape d'IA, les garde-fous, les tests", "Seulement un prix", "Seulement un pitch"], answer: 1, why: "Ces parties donnent une automatisation qui fonctionne et sans danger." },
      { objective: "O3", q: "Un projet de stratégie marketing comprend :", options: ["Seulement un relevé bancaire", "Seulement une SOP", "Seulement un relevé du temps", "Le client idéal, l'offre, les canaux, le calendrier et le plan d'e-mails"], answer: 3, why: "Ce sont les parties d'une stratégie marketing." },
      { objective: "O4", q: "Pour construire, la meilleure façon est :", options: ["Une section à la fois, l'IA rédige, vous vérifiez", "Tout d'un coup sans vérifier", "Copier un autre projet", "Laisser l'IA le publier"], answer: 0, why: "De petites étapes avec vérification gardent une bonne qualité." },
      { objective: "O4", q: "Un journal de construction note :", options: ["Rien d'utile", "Vos mots de passe", "Les adresses de vos clients", "Ce que vous avez fait, avec quel outil, et ce que vous avez changé"], answer: 3, why: "Il montre votre méthode et vous aide à progresser." },
      { objective: "O4", q: "Comment traiter les noms des clients dans les prompts d'IA ?", options: ["Ajouter les numéros de carte", "Les taper avec les numéros de téléphone", "Utiliser des espaces réservés comme [nom du client]", "Les publier"], answer: 2, why: "Les espaces réservés gardent les données privées à l'écart." },
      { objective: "O5", q: "Le délai de rentabilité, c'est :", options: ["Un remboursement à un client", "Le temps qu'il faut pour que les gains ou les économies couvrent le coût", "Des frais", "Un prêt"], answer: 1, why: "Il montre quand le projet se rembourse." },
      { objective: "O5", q: "Quel point fait partie de votre liste de contrôle des risques ?", options: ["Mon logo est-il rond ?", "Quelle est ma couleur préférée ?", "Combien d'applications ai-je ?", "Toutes les affirmations marketing sont-elles vraies et prouvables ?"], answer: 3, why: "Les règles de la FTC exigent des affirmations vraies." },
      { objective: "O5", q: "Aux États-Unis, les travailleurs indépendants paient en général :", options: ["Seulement la taxe sur les ventes", "Aucun impôt", "L'impôt sur le travail indépendant en plus de l'impôt sur le revenu", "Seulement la taxe foncière"], answer: 2, why: "L'IRS l'indique dans son centre fiscal des travailleurs indépendants." },
      { objective: "O5", q: "Pour les questions juridiques de votre projet, vous devez :", options: ["Parler à un avocat", "Croire n'importe quelle réponse de l'IA", "Les ignorer", "Copier un concurrent"], answer: 0, why: "Un avocat peut vous conseiller selon votre situation." },
      { objective: "O6", q: "Quand vous testez le projet terminé, demandez aux gens :", options: ["Me donnerez-vous cinq étoiles ?", "Qu'est-ce qui est clair, qu'est-ce qui est confus, que changeriez-vous ?", "Quel est votre mot de passe ?", "Puis-je avoir votre numéro de carte ?"], answer: 1, why: "Ces questions font apparaître de vraies améliorations." },
      { objective: "O6", q: "Dans votre pitch, la preuve, c'est :", options: ["Une promesse", "Des éléments comme les résultats des tests et ce que les gens ont dit", "Un logo", "Une longue liste de fonctionnalités"], answer: 1, why: "Les preuves rendent un pitch crédible." },
      { objective: "O6", q: "Le dossier final du projet comprend :", options: ["Résumé, projet complet, notes de validation, chiffres et risques, résultats des tests, présentation", "Seulement une page de titre", "Seulement l'historique de la discussion avec l'IA", "Seulement un logo"], answer: 0, why: "Ensemble, ils montrent un projet complet et vérifié." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      5,
      7,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Résumé et délimitation",
        objective: "O1",
        notYet: "Il manque l'entreprise, le client, le problème ou la solution, ou la délimitation est trop grande pour être terminée.",
        meets: "Un résumé d'une page avec l'entreprise, le client, le problème et la solution, et une délimitation claire.",
        exceeds: "Explique pourquoi ce type de projet a été choisi pour cette entreprise."
      },
      {
        name: "Validation",
        objective: "O2",
        notYet: "Moins de trois personnes, ou des questions orientées.",
        meets: "Les notes d'au moins trois personnes avec leurs mots exacts et chaque hypothèse marquée.",
        exceeds: "Montre ce qui a changé dans le projet grâce à ce que les gens ont dit."
      },
      {
        name: "Projet complet",
        objective: "O4",
        notYet: "Des sections manquent, ou du texte de l'IA non vérifié est resté.",
        meets: "Chaque section du type de projet, construite avec l'IA et vérifiée, avec un journal de construction.",
        exceeds: "Le projet est déjà utilisé ou prêt à être lancé."
      },
      {
        name: "Chiffres et risques",
        objective: "O5",
        notYet: "Formules non vérifiées, ou pas de liste de contrôle des risques.",
        meets: "Un tableau de chiffres avec des formules vérifiées et le délai de retour sur investissement, plus une liste de contrôle des risques.",
        exceeds: "Les points d'impôts et de droit sont confirmés auprès de sources officielles ou d'un professionnel."
      },
      {
        name: "Tests et présentation",
        objective: "O6",
        notYet: "Pas testé, ou la présentation est trop longue ou manque de preuve.",
        meets: "Testé avec trois personnes, principaux changements faits, présentation de trois minutes avec le problème, la solution, la preuve et la prochaine étape.",
        exceeds: "Présenté à voix haute devant un vrai public, avec des réponses aux questions difficiles."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le projet final et réussissent la tâche finale (grille d'évaluation)",
      "Les projets lancés ou utilisés dans les 60 jours (enquête de suivi)",
      "Les apprenants qui présentent leur projet à un partenaire, un prêteur, un financeur ou un client",
      "Le chiffre d'affaires, le temps gagné ou les nouveaux clients que les apprenants relient au projet"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un assistant IA gratuit, un tableur et un outil de traitement de texte",
      "L'accès à au moins trois vraies personnes pour les entretiens et les tests",
      "Les documents des cours précédents pour entrepreneurs qui correspondent au projet",
      "Environ 60 minutes de leçons et de vérifications, plus plusieurs heures de travail de projet sur deux à quatre semaines"
    ],
    facilitatorNotes: [
      "Faites un court point après chaque étape pour que les apprenants ne prennent pas de retard sur le projet.",
      "Approuvez chaque délimitation avant que les apprenants commencent la validation, et poussez vers des projets plus petits.",
      "Rappelez aux apprenants d'utiliser des espaces réservés pour les détails des clients et de confirmer officiellement les points d'impôts, de licence et de droit.",
      "Terminez par une journée de démonstration où chaque apprenant fait sa présentation de trois minutes.",
      "Notez le dossier du projet final avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
