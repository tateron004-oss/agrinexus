"use strict";

// Koach Learn course (shared, bonus), French translation of "AI for Skilled Trades and Logistics". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-skilled-trades-logistics-fr",
  lang: "fr",
  translationOf: "ai-skilled-trades-logistics",
  category: "Re-Entry",
  name: "L'IA pour les métiers manuels qualifiés et la logistique",
  skills: "Expliquer manuels et fiches techniques avec l'IA, Rédiger un devis, Établir une liste de contrôle de sécurité, Tenir un journal de travail avec photos et notes, Planifier tournées et chargements, Trouver des apprentissages et des emplois de métier",
  outcome: "utiliser un assistant d'IA gratuit sur votre téléphone pour comprendre un manuel, rédiger un devis clair, établir une liste de contrôle de sécurité vérifiée avec les règles officielles, tenir un journal de travail, planifier une tournée de livraison ou d'intervention, et trouver des apprentissages et des emplois de métier.",
  about: [
    "Les métiers manuels qualifiés (électricité, plomberie, chauffage-climatisation, menuiserie, soudure, mécanique auto) et la logistique (entrepôt, chariot élévateur, livraison, transport routier, expédition) sont recherchés, et beaucoup de parcours commencent par un apprentissage ou une courte formation plutôt que par un diplôme universitaire. Beaucoup d'employeurs de ces secteurs embauchent des personnes ayant un casier judiciaire.",
    "L'IA ne manie pas le marteau et ne conduit pas le camion. Mais sur un téléphone, elle peut expliquer un manuel en mots simples, rédiger des devis et des notes de travail, proposer des listes de contrôle de sécurité et aider à planifier des tournées : elle vous fait gagner du temps et vous aide à paraître professionnel.",
    "Ce cours s'adresse aux personnes qui sortent de prison, aux travailleurs suivis par des programmes d'insertion et à toute personne qui débute dans un métier ou un emploi logistique. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Les règles de sécurité viennent toujours de votre employeur, du fabricant et de l'OSHA (l'agence américaine de la sécurité au travail ; ailleurs, l'organisme équivalent de votre pays), jamais de l'IA."
  ],
  finalTask: "Pour une intervention réelle ou fictive dans un métier ou un poste logistique, créez avec l'aide de l'IA un dossier d'intervention : un résumé en langage simple d'une partie d'un manuel ou d'une fiche technique, un devis ou un bon de travail écrit, une liste de contrôle de sécurité vérifiée auprès d'une source officielle, une entrée de journal de travail avec des notes photo avant-après, et un plan de tournée ou de chargement. Trouvez ensuite un apprentissage ou un emploi de métier auquel vous pourriez postuler.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui sortent de prison, des travailleurs suivis par des programmes d'insertion et toute personne qui débute dans un métier manuel qualifié (électricité, plomberie, chauffage et climatisation, menuiserie, soudure, mécanique auto) ou dans un emploi de logistique (entrepôt, chariot élévateur, livraison, transport routier).",
    startingPoint: "Ils savent utiliser un téléphone pour appeler, envoyer des SMS et prendre des photos, et beaucoup ont une expérience du travail manuel. Peu ont utilisé un assistant d'IA pour lire des manuels, rédiger des devis ou planifier des tournées.",
    gap: "Dans les métiers et la logistique, on attend des travailleurs qu'ils lisent des manuels techniques, rédigent des devis et des notes de travail, suivent les règles de sécurité et planifient des tournées. Utiliser l'IA sur un téléphone, et la vérifier avec des sources officielles, fait gagner du temps, donne une image professionnelle et aide les apprenants à entrer en apprentissage et dans un emploi de métier.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : souvent un simple téléphone, utilisé sur un chantier ou dans un camion",
      "Les règles de sécurité, les couples de serrage, les tensions et les limites de poids viennent du manuel, de l'employeur et de l'OSHA, jamais de l'IA",
      "Confidentialité : aucun papier ni détail privé d'un client dans les photos ou les demandes à l'IA",
      "Temps : des leçons d'environ cinq minutes qui se placent entre les heures de travail"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les outils d'IA peuvent suivre d'abord « Découvrir l'IA et prendre confiance avec le numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une partie d'un manuel ou d'une fiche technique", action: "utiliser l'IA pour l'expliquer en mots simples et vérifier chaque chiffre dans le manuel", standard: "avec chaque chiffre identique à la source" },
    { id: "O2", condition: "Pour un vrai chantier ou un chantier d'entraînement", action: "rédiger un devis ou un bon de travail qui indique la main-d'œuvre, les pièces, le total, ce qui est compris et une date de validité", standard: "avec les calculs vérifiés à la main et toutes les parties demandées" },
    { id: "O3", condition: "Pour une vraie tâche de travail", action: "préparer une liste de contrôle de sécurité avec l'IA et la vérifier dans le manuel ou une source officielle de sécurité", standard: "en ajoutant ce que l'IA a oublié avant de commencer le travail" },
    { id: "O4", condition: "Après un chantier", action: "rédiger une entrée de journal de travail avec la date, le lieu, le travail fait, les matériaux, les problèmes, les étapes suivantes et des notes sur les photos", standard: "avec toutes les parties et aucune information privée du client" },
    { id: "O5", condition: "À partir de plusieurs arrêts ou articles", action: "planifier une tournée et une liste simple de chargement ou de stock, puis vérifier la tournée dans une application de cartes", standard: "avec le chargement dans l'ordre inverse des arrêts et les temps de trajet vérifiés" },
    { id: "O6", condition: "Avec Apprenticeship.gov ou un programme local", action: "trouver un apprentissage ou un emploi de métier auquel vous pourriez postuler", standard: "et noter ses exigences et la façon de postuler" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'IA sur le terrain",
      lessons: [
        {
          objectives: ["O1"],
          title: "Comprendre manuels et fiches techniques avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour expliquer un manuel ou une fiche technique en mots simples, puis vérifier avec la source.",
          text: [
            "Les manuels, fiches techniques et guides d'installation sont pleins de mots difficiles. L'IA peut les expliquer. Copiez ou tapez une partie, ou prenez-la en photo si votre application d'IA lit les images, et demandez : « Explique ceci en mots simples. Quelles sont les étapes, de quels outils ai-je besoin, et quels sont les avertissements ? »",
            "Posez des questions de suivi : « Que veut dire \"serrer à 25 ft-lbs\" ? » (le pied-livre est une unité américaine de couple de serrage) ou « Quelle différence entre une prise avec disjoncteur différentiel (GFCI) et une prise ordinaire ? » L'IA est un excellent tuteur pour les termes et les notions.",
            "Mais c'est le manuel qui fait foi. Les chiffres comme le couple de serrage, la tension, la pression, les distances et les limites de poids doivent venir du manuel du fabricant, des normes en vigueur dans votre région, ou de votre responsable. Si l'IA et le manuel ne sont pas d'accord, suivez le manuel et demandez à votre responsable."
          ],
          steps: ["Copiez, tapez ou photographiez la partie du manuel.", "Demandez à l'IA de l'expliquer en mots simples : étapes, outils, avertissements.", "Posez des questions sur les termes que vous ne connaissez pas.", "Vérifiez chaque chiffre dans le manuel.", "S'ils ne sont pas d'accord, suivez le manuel et demandez à votre responsable."],
          words: [["Fiche technique", "un document qui donne les mesures et exigences exactes d'un produit."], ["Couple de serrage", "la force avec laquelle on serre quelque chose, comme un boulon."], ["Normes", "les règles officielles de construction ou d'électricité exigées dans une région."]],
          slides: [
            { title: "L'IA comme tuteur pour les manuels", bullets: ["Coller, taper ou photographier une partie", "Demander étapes, outils et avertissements", "Demander le sens des termes"] },
            { title: "Le manuel fait foi", bullets: ["Couple, tension, pression, limites de poids", "Viennent du manuel, des normes ou du responsable"] },
            { title: "Quand ils ne sont pas d'accord", bullets: ["Suivre le manuel", "Demander au responsable"] }
          ],
          tryIt: "Trouvez en ligne ou dans un tiroir le manuel d'un objet que vous possédez (outil, appareil ou véhicule). Demandez à l'IA d'en expliquer une partie en mots simples, puis vérifiez chaque chiffre dans le manuel.",
          youCanNow: "utiliser l'IA pour comprendre manuels et fiches techniques tout en vous fiant aux chiffres officiels.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une fiche technique ?", options: ["Un prospectus de vente avec des prix", "La liste des mesures et exigences exactes d'un produit", "Une affiche de sécurité pour la salle de pause", "L'avis d'un client sur un produit"], answer: 1, why: "Une fiche technique donne les mesures et exigences exactes que vous devez respecter." },
            { objective: "O1", q: "L'IA explique une partie du manuel mais donne une tension différente de celle du manuel. Que faites-vous ?", options: ["Utiliser la tension du manuel et demander à votre responsable", "Utiliser le chiffre de l'IA parce qu'il est plus récent", "Faire la moyenne des deux chiffres", "Sauter cette étape"], answer: 0, why: "Les chiffres comme la tension viennent du manuel, pas de l'IA ; demandez à votre responsable en cas de doute." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rédiger un devis ou un bon de travail clair",
          minutes: 5,
          goal: "Rédiger un devis ou un bon de travail professionnel avec l'aide de l'IA.",
          text: [
            "Les clients et les responsables font confiance aux travailleurs qui mettent les choses par écrit. Un devis dit au client ce que vous allez faire et combien cela coûtera avant de commencer. Un bon de travail enregistre une intervention : ce qui était demandé, ce qui a été fait, les matériaux utilisés et le temps passé.",
            "Donnez les faits à l'IA et laissez-la mettre en forme : « Rédige un devis simple pour le remplacement d'un robinet de salle de bain. Main-d'œuvre 2 heures à 60 $ de l'heure. Pièces : robinet 85 $, flexibles 15 $. Valable 30 jours. Le client doit choisir le modèle de robinet. » Vérifiez les calculs et chaque détail.",
            "Restez honnête : indiquez ce qui est compris et ce qui ne l'est pas, et dites que le prix peut changer si vous découvrez des problèmes cachés, avec l'accord préalable du client. Utilisez un modèle gratuit dans Google Docs ou Word et gardez une copie de chacun."
          ],
          steps: ["Écrivez l'intervention, les heures et le taux de main-d'œuvre, et les pièces avec leurs prix.", "Demandez à l'IA de mettre en forme un devis ou un bon de travail simple.", "Vérifiez les calculs et les détails.", "Ajoutez ce qui est compris, ce qui ne l'est pas, et la date de validité.", "Gardez une copie."],
          words: [["Devis", "un prix écrit pour une intervention avant qu'elle commence."], ["Bon de travail", "le compte rendu d'une intervention : demande, travail fait, matériaux et temps."], ["Main-d'œuvre", "le coût du temps du travailleur."]],
          slides: [
            { title: "Mettre par écrit", bullets: ["Devis : avant l'intervention", "Bon de travail : compte rendu de l'intervention"] },
            { title: "Laisser l'IA mettre en forme", bullets: ["Lui donner main-d'œuvre, taux et pièces", "Vérifier les calculs"] },
            { title: "Rester honnête", bullets: ["Compris et non compris", "Changements seulement avec l'accord du client", "Garder chaque copie"] }
          ],
          tryIt: "Rédigez avec l'aide de l'IA un devis pour une intervention réelle ou fictive : main-d'œuvre, pièces, total, ce qui est compris et une date de validité. Vérifiez les calculs à la main.",
          youCanNow: "rédiger avec l'aide de l'IA un devis ou un bon de travail clair et honnête.",
          quickCheck: [
            { objective: "O2", q: "Que veut dire « pièces » sur un devis ?", options: ["Le temps de travail du travailleur", "La taxe sur le chantier", "Les matériaux nécessaires au chantier", "Le temps de déplacement"], answer: 2, why: "Les pièces sont les matériaux ; la main-d'œuvre est le temps du travailleur." },
            { objective: "O2", q: "L'IA calcule un total de 310 $ pour votre devis, mais votre calcul à la main donne 280 $. Que faites-vous ?", options: ["Envoyer 310 $ parce que l'IA calcule mieux", "Envoyer 280 $ sans vérifier", "Envoyer les deux chiffres au client", "Revérifier chaque ligne et envoyer le bon total"], answer: 3, why: "Vérifiez toujours les calculs ligne par ligne avant d'envoyer un devis." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Établir une liste de contrôle de sécurité",
          minutes: 6,
          goal: "Préparer avec l'IA une liste de contrôle de sécurité et la vérifier auprès de sources officielles.",
          text: [
            "Beaucoup de métiers et d'entrepôts utilisent une analyse de sécurité du poste (ou des dangers) : on liste les étapes d'une tâche, les dangers à chaque étape et la façon de les maîtriser. Exemples de dangers : chutes, choc électrique, blessures en soulevant, engins en mouvement comme les chariots élévateurs, produits chimiques et chaleur.",
            "L'IA peut en proposer une : « Fais une liste de contrôle de sécurité pour le remplacement d'un plafonnier : étapes, dangers et mesures de maîtrise, y compris les équipements de protection individuelle. » Elle inclut souvent de bonnes bases, comme couper le disjoncteur et vérifier que le courant est bien coupé.",
            "Mais l'IA n'est pas une autorité en sécurité. Vérifiez la liste avec votre responsable, les instructions du fabricant et des sources officielles comme l'OSHA (osha.gov). Les cours OSHA Outreach de 10 heures et de 30 heures enseignent les bases de la sécurité ; l'OSHA dit que la carte est facultative et n'est ni une certification ni une licence, même si certains employeurs et États l'exigent."
          ],
          steps: ["Listez les étapes de la tâche.", "Demandez à l'IA les dangers et les mesures à chaque étape, y compris les équipements de protection.", "Vérifiez avec votre responsable, le manuel et osha.gov.", "Corrigez ce qui manque ou est faux.", "Relisez-la avec l'équipe avant de commencer."],
          words: [["Danger", "quelque chose qui pourrait blesser quelqu'un."], ["EPI", "équipements de protection individuelle, comme les gants, les lunettes de sécurité, les casques et les chaussures de sécurité."], ["Analyse de sécurité du poste", "une liste des étapes d'une tâche, des dangers et des mesures de maîtrise."]],
          slides: [
            { title: "Analyse de sécurité du poste", bullets: ["Les étapes de la tâche", "Les dangers à chaque étape", "Mesures de maîtrise et EPI"] },
            { title: "L'IA propose, les personnes décident", bullets: ["L'IA liste les dangers courants", "Responsable, manuel et OSHA confirment"] },
            { title: "Cartes OSHA Outreach", bullets: ["Cours de sécurité de 10 et 30 heures", "Facultatives ; ni certification ni licence", "Exigées par certains employeurs et États"] }
          ],
          sources: [{ name: "OSHA : programme de formation Outreach", url: "https://www.osha.gov/training/outreach" }, { name: "OSHA : questions fréquentes sur le programme Outreach", url: "https://www.osha.gov/training/outreach/faq" }],
          tryIt: "Demandez à l'IA une liste de contrôle de sécurité pour une vraie tâche (comme soulever des cartons lourds ou changer une roue). Trouvez ensuite une page officielle de sécurité ou le manuel pour cette tâche et ajoutez ce que l'IA a oublié.",
          youCanNow: "préparer avec l'IA une liste de contrôle de sécurité et la vérifier auprès de sources officielles.",
          quickCheck: [
            { objective: "O3", q: "Quelles sont les trois choses que liste une analyse de sécurité du poste ?", options: ["Les étapes, les dangers et les mesures de maîtrise", "Les outils, les prix et les durées", "Les travailleurs, les équipes et les pauses", "Les clients, les adresses et les numéros de téléphone"], answer: 0, why: "Une analyse de sécurité du poste liste chaque étape, ses dangers et les mesures pour les maîtriser." },
            { objective: "O3", q: "Votre liste de sécurité faite avec l'IA pour soulever des cartons ne parle pas de gants, mais la règle de l'employeur les exige. Que faites-vous ?", options: ["Ne pas mettre de gants puisque l'IA ne les a pas listés", "Redemander à l'IA jusqu'à ce qu'elle soit d'accord", "Ajouter les gants à la liste et suivre la règle de l'employeur", "Mettre des gants seulement pour les cartons lourds"], answer: 2, why: "Les règles officielles et celles de l'employeur passent en premier ; ajoutez ce que l'IA a oublié." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA sur le terrain",
        questions: [
          { objective: "O1", q: "L'IA dit de serrer un boulon à 40 ft-lbs, mais le manuel dit 25. Que faites-vous ?", options: ["Suivre l'IA", "Prendre la moyenne", "Suivre le manuel et demander à votre responsable", "Serrer le plus fort possible"], answer: 2, why: "Les chiffres officiels viennent du manuel." },
          { objective: "O2", q: "Qu'est-ce qu'un devis ?", options: ["Un prix écrit pour une intervention avant qu'elle commence", "Un reçu après paiement", "Une règle de sécurité", "Un type d'outil"], answer: 0, why: "Les devis fixent les attentes avant le début du travail." },
          { objective: "O2", q: "Vous découvrez un problème caché qui fait monter le prix. Que faites-vous ?", options: ["Facturer plus sans prévenir", "Abandonner l'intervention", "Cacher le problème", "Obtenir l'accord du client avant de faire le travail en plus"], answer: 3, why: "Un changement de prix demande l'accord du client." },
          { objective: "O3", q: "EPI veut dire :", options: ["Employé public indemnisé", "Équipements de protection individuelle", "Extension de prise intégrée", "Entrée sur propriété interdite"], answer: 1, why: "Les EPI sont des équipements comme les gants et les lunettes de sécurité." },
          { objective: "O3", q: "Selon l'OSHA, la carte OSHA de 10 heures est :", options: ["Une licence fédérale", "Facultative, et ni une certification ni une licence", "Un permis de conduire", "Exigée par l'OSHA pour tout emploi"], answer: 1, why: "L'OSHA dit que la carte Outreach n'est ni une certification ni une licence." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Logistique, comptes rendus et carrières",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tenir un journal de travail avec photos et notes",
          minutes: 5,
          goal: "Tenir un journal de travail quotidien avec photos et notes courtes, mises au propre par l'IA.",
          text: [
            "Un bon journal de travail vous protège et impressionne les employeurs : il montre ce que vous avez fait, quand, et que c'était bien fait. Prenez des photos avant et après, notez les matériaux utilisés, les problèmes trouvés et le temps passé.",
            "Utilisez la dictée vocale de votre téléphone pour dire vos notes à la fin d'une intervention, puis demandez à l'IA : « Transforme ces notes en une entrée de journal de travail courte et professionnelle avec date, lieu, travail fait, matériaux, problèmes et étapes suivantes. » Vérifiez qu'elle est exacte.",
            "Suivez les règles de votre employeur sur les photos : certains chantiers les interdisent, et vous ne devez jamais photographier les clients, leurs papiers privés ou leurs systèmes de sécurité sans autorisation. Rangez les journaux là où votre employeur l'indique."
          ],
          steps: ["Prenez des photos avant et après quand c'est permis.", "Dites ou tapez de courtes notes à la fin de l'intervention.", "Demandez à l'IA de mettre en forme une entrée de journal.", "Vérifiez qu'elle est exacte.", "Enregistrez-la là où votre employeur l'indique."],
          words: [["Journal de travail", "un compte rendu quotidien du travail que vous avez fait."], ["Dictée vocale", "une fonction du téléphone qui transforme votre parole en texte écrit."]],
          slides: [
            { title: "Pourquoi tenir un journal", bullets: ["Prouve ce que vous avez fait et quand", "Vous protège et impressionne les employeurs"] },
            { title: "Un journal rapide", bullets: ["Photos avant et après", "Dire vos notes", "L'IA met en forme l'entrée"] },
            { title: "Règles sur les photos", bullets: ["Suivre les règles du chantier", "Ni clients, ni papiers privés, ni systèmes de sécurité", "Enregistrer là où l'employeur l'indique"] }
          ],
          tryIt: "Faites un petit travail à la maison (réparer, nettoyer ou ranger quelque chose). Prenez des photos avant et après, dites vos notes, et faites-les transformer par l'IA en entrée de journal de travail.",
          youCanNow: "tenir un journal de travail professionnel avec photos et notes mises au propre par l'IA.",
          quickCheck: [
            { objective: "O4", q: "Que montre une photo « avant » dans un journal de travail ?", options: ["La vitesse à laquelle vous avez travaillé", "L'état des lieux avant le début du travail", "Le visage du client", "Vos outils à vendre"], answer: 1, why: "Les photos avant et après montrent ce que vous avez changé et que c'est bien fait." },
            { objective: "O4", q: "Le relevé bancaire d'un client est posé sur le plan de travail où vous intervenez. Que faites-vous avant de prendre une photo ?", options: ["Prendre la photo ; c'est seulement pour le journal", "Demander à l'IA si c'est permis", "Zoomer sur le relevé pour qu'il soit lisible", "Le sortir du cadre ou demander au client de le ranger"], answer: 3, why: "Ne photographiez pas de papiers privés sans permission." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planifier tournées, chargements et stocks",
          minutes: 5,
          goal: "Utiliser des applications de cartes et l'IA pour planifier une tournée et une liste simple de chargement ou de stock.",
          text: [
            "Les livreurs, les techniciens d'intervention et les employés d'entrepôt planifient des tournées et des chargements tous les jours. Les applications de cartes gratuites comme Google Maps permettent d'ajouter plusieurs arrêts et montrent la circulation. Beaucoup d'entreprises ont leur propre logiciel de tournées ; apprenez-le en arrivant.",
            "L'IA peut vous aider à réfléchir : « J'ai 6 interventions : [quartiers et créneaux horaires]. Propose un ordre qui économise la route et respecte les créneaux. » Vérifiez-le ensuite dans l'application de cartes. Pour les chargements : « Fais une liste de chargement pour ces livraisons pour que les articles du dernier arrêt entrent en premier. »",
            "Pour les stocks, une feuille simple avec article, emplacement (allée, étagère), quantité et seuil de réapprovisionnement aide. Ne laissez jamais l'IA passer outre les limites de poids, les règles d'arrimage ou les règles de temps de conduite des chauffeurs ; elles viennent de votre employeur et des règles officielles du transport."
          ],
          steps: ["Listez les arrêts avec quartiers et créneaux horaires.", "Demandez à l'IA de proposer un ordre.", "Vérifiez-le dans une application de cartes avec la circulation.", "Faites une liste de chargement : le dernier arrêt chargé en premier.", "Respectez les règles de poids, d'arrimage et de temps de conduite de votre employeur."],
          words: [["Tournée", "l'ordre et le trajet des arrêts."], ["Arrimage", "attacher la marchandise pour qu'elle ne bouge pas et ne tombe pas."], ["Temps de conduite et de service", "les règles qui limitent combien de temps les chauffeurs professionnels peuvent conduire et travailler."]],
          slides: [
            { title: "Planifier la tournée", bullets: ["Lister arrêts et créneaux", "L'IA propose un ordre", "Vérifier dans une application de cartes"] },
            { title: "Planifier le chargement", bullets: ["Le dernier arrêt chargé en premier", "Stock : article, emplacement, quantité"] },
            { title: "Les règles d'abord", bullets: ["Limites de poids et arrimage", "Temps de conduite des chauffeurs", "Fixés par l'employeur et les règles officielles"] }
          ],
          tryIt: "Choisissez cinq vrais lieux près de chez vous. Demandez à l'IA le meilleur ordre pour les visiter, puis vérifiez-le dans une application de cartes gratuite et comparez les temps de trajet.",
          youCanNow: "planifier une tournée et un chargement avec l'IA et des applications de cartes en respectant les règles.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire « stock » (inventaire) ?", options: ["La liste de ce que vous avez en réserve et en quelle quantité", "La tournée la plus rapide", "Les heures d'un chauffeur", "Une règle de sécurité pour le chargement"], answer: 0, why: "L'inventaire est le compte des articles que vous avez." },
            { objective: "O5", q: "L'IA propose un ordre de tournée pour cinq arrêts. Que faites-vous ensuite ?", options: ["Le suivre sans regarder", "Le vérifier dans une application de cartes avec la circulation avant de partir", "Demander aux clients de choisir", "Aller d'abord à l'arrêt le plus éloigné"], answer: 1, why: "Les idées de tournée de l'IA doivent être vérifiées dans une application de cartes avec la circulation du moment." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Trouver des apprentissages et des emplois de métier",
          minutes: 5,
          goal: "Trouver un apprentissage enregistré ou un emploi de métier et se préparer à postuler.",
          text: [
            "Un Registered Apprenticeship (apprentissage enregistré, aux États-Unis) vous permet de toucher un salaire tout en apprenant un métier, avec des cours et un titre reconnu à la fin. Le site Apprenticeship.gov du ministère du Travail américain propose un outil de recherche d'apprentissages (Apprenticeship Job Finder). Les syndicats, les community colleges (établissements d'enseignement supérieur de proximité) et les programmes de pré-apprentissage offrent aussi des parcours. Hors des États-Unis, renseignez-vous auprès du service de l'emploi ou des centres de formation professionnelle de votre pays.",
            "Demandez à l'IA d'expliquer un métier : « Que fait au quotidien un apprenti en chauffage-climatisation, quels outils utilise-t-il, et quelles mathématiques faut-il ? » Puis demandez-lui de vous aider à transformer votre expérience en CV de métier, en gardant tout vrai.",
            "Certains métiers et emplois de conduite demandent des licences, des examens ou un dossier de conduite propre, et certaines licences tiennent compte du casier judiciaire ; renseignez-vous auprès de l'organisme des licences de votre État et demandez à votre programme de réinsertion ou d'insertion quels employeurs et programmes accueillent les personnes ayant un casier. Soyez fiable et prêt à apprendre : dans les métiers, c'est ce qui compte le plus."
          ],
          steps: ["Cherchez sur l'outil d'Apprenticeship.gov et dans les programmes locaux de syndicats ou d'établissements.", "Demandez à l'IA d'expliquer le métier et les compétences qu'il demande.", "Vérifiez les règles de licence et de casier auprès de l'organisme de votre État.", "Demandez à votre programme de réinsertion ou d'insertion des employeurs « fair chance ».", "Construisez un CV de métier vrai avec l'aide de l'IA."],
          words: [["Apprentissage enregistré", "un emploi payé avec formation qui mène à un titre reconnu."], ["Pré-apprentissage", "un court programme qui prépare à entrer en apprentissage."], ["Compagnon (journeyworker)", "un travailleur pleinement formé dans un métier."]],
          slides: [
            { title: "Gagner sa vie en apprenant", bullets: ["Apprentissage enregistré : salaire plus formation", "Un titre reconnu à la fin"] },
            { title: "Où chercher", bullets: ["Apprenticeship Job Finder sur Apprenticeship.gov", "Syndicats et community colleges", "Programmes de pré-apprentissage"] },
            { title: "Vérifier les règles", bullets: ["Licences, examens, dossier de conduite", "Organisme des licences de l'État", "Employeurs « fair chance » via votre programme"] }
          ],
          sources: [{ name: "Apprenticeship.gov (ministère du Travail des États-Unis)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Tâche finale : cherchez sur Apprenticeship.gov ou dans un programme local un apprentissage ou un emploi de métier auquel vous pourriez postuler. Terminez ensuite votre dossier d'intervention : résumé du manuel, devis ou bon de travail, liste de contrôle de sécurité vérifiée, entrée de journal de travail et plan de tournée ou de chargement.",
          youCanNow: "utiliser l'IA pour travailler plus intelligemment dans un métier ou un emploi logistique et trouver comment y entrer.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un pré-apprentissage ?", options: ["Une licence pour travailler seul", "Un emploi payé de superviseur", "Un programme qui prépare à entrer en apprentissage", "Un examen passé après un apprentissage"], answer: 2, why: "Un pré-apprentissage donne les bases pour pouvoir entrer en apprentissage." },
            { objective: "O6", q: "Vous voulez savoir si la licence de métier dont vous avez besoin tient compte d'un casier judiciaire. Que faites-vous ?", options: ["Deviner d'après l'histoire d'un ami", "Demander à l'IA et croire sa réponse", "Abandonner ce métier", "Vous renseigner auprès de l'organisme des licences de votre État"], answer: 3, why: "L'organisme des licences de l'État a les règles officielles pour cette licence." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Logistique, comptes rendus et carrières",
        questions: [
          { objective: "O4", q: "Pourquoi garder des photos avant et après dans un journal de travail ?", options: ["Pour avoir des « j'aime » sur les réseaux", "Toutes les lois les exigent", "Pour photographier les clients", "Elles montrent ce que vous avez fait et que c'était bien fait"], answer: 3, why: "Les photos prouvent le travail." },
          { objective: "O5", q: "Quand on charge un camion pour plusieurs arrêts, quels articles entrent en premier ?", options: ["Ceux du dernier arrêt", "Ceux du premier arrêt", "Toujours les plus légers", "Dans n'importe quel ordre"], answer: 0, why: "Le dernier arrêt chargé en premier rend les articles du premier arrêt faciles d'accès." },
          { objective: "O5", q: "D'où viennent les limites de poids et les règles de temps de conduite ?", options: ["D'un chatbot d'IA", "De vos amis", "De votre employeur et des règles officielles du transport", "D'une application de cartes"], answer: 2, why: "Les règles officielles fixent ces limites." },
          { objective: "O6", q: "Qu'est-ce qu'un apprentissage enregistré ?", options: ["Seulement un stage non payé", "Un diplôme universitaire", "Un examen de licence", "Un emploi payé avec formation qui mène à un titre reconnu"], answer: 3, why: "Les apprentis gagnent leur vie en apprenant." },
          { objective: "O6", q: "Quel site propose l'outil de recherche d'apprentissages du ministère du Travail américain ?", options: ["Une application de réseau social", "Un blog au hasard", "Apprenticeship.gov", "Un site d'achats"], answer: 2, why: "Apprenticeship.gov est géré par le ministère du Travail." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les métiers manuels qualifiés et la logistique",
    questions: [
      { objective: "O6", q: "Lequel est un métier manuel qualifié ?", options: ["Influenceur sur les réseaux sociaux", "Électricien", "Critique de cinéma", "Joueur de loto"], answer: 1, why: "L'électricité est un métier qualifié." },
      { objective: "O1", q: "Comment l'IA peut-elle aider avec un manuel difficile ?", options: ["En l'expliquant en mots simples", "En remplaçant les chiffres du manuel", "En faisant le travail à votre place", "En validant la sécurité"], answer: 0, why: "L'IA est un bon tuteur pour les termes et les étapes." },
      { objective: "O1", q: "Une fiche technique donne :", options: ["Votre planning de travail", "Votre salaire", "Les mesures et exigences exactes d'un produit", "Les avis des clients"], answer: 2, why: "Les fiches techniques donnent les exigences exactes." },
      { objective: "O1", q: "Quels chiffres doivent venir du manuel ou des normes, pas de l'IA ?", options: ["Tension, couple de serrage et limites de poids", "La date", "Votre nom", "La couleur du camion"], answer: 0, why: "Les chiffres liés à la sécurité demandent des sources officielles." },
      { objective: "O2", q: "Sur un devis, la main-d'œuvre désigne :", options: ["Les pièces", "Les taxes", "L'adresse du client", "Le coût du temps du travailleur"], answer: 3, why: "La main-d'œuvre, c'est le temps payé." },
      { objective: "O2", q: "2 heures à 60 $ plus 100 $ de pièces, cela fait :", options: ["62 $", "120 $", "160 $", "220 $"], answer: 3, why: "2 x 60 = 120, plus 100 = 220." },
      { objective: "O2", q: "Un bon devis indique aussi :", options: ["Rien sur l'intervention", "Ce qui est compris, ce qui ne l'est pas, et la date de validité", "Votre numéro de sécurité sociale", "Un prix fixe garanti quoi qu'il arrive"], answer: 1, why: "Des conditions claires évitent les litiges." },
      { objective: "O3", q: "Une analyse de sécurité du poste liste :", options: ["Seulement le prix", "Les anniversaires de l'équipe", "Les avis des clients", "Les étapes, les dangers et les mesures de maîtrise"], answer: 3, why: "Elle prévoit la sécurité à chaque étape." },
      { objective: "O3", q: "Lequel est un EPI ?", options: ["Des lunettes de sécurité", "Une coque de téléphone", "Une boîte à repas", "Une application de cartes"], answer: 0, why: "Les lunettes de sécurité protègent les yeux." },
      { objective: "O3", q: "Qui confirme une liste de contrôle de sécurité préparée par l'IA ?", options: ["Personne", "L'IA elle-même", "Votre responsable, le manuel et des sources officielles comme l'OSHA", "Une vidéo au hasard"], answer: 2, why: "L'IA n'est pas une autorité en sécurité." },
      { objective: "O3", q: "Le cours OSHA Outreach de 10 heures :", options: ["Est une licence d'entrepreneur", "Remplace toute formation au poste", "Est animé par une IA", "Enseigne les bases de la sécurité ; la carte est facultative"], answer: 3, why: "L'OSHA le présente comme une formation facultative." },
      { objective: "O4", q: "La dictée vocale vous aide à :", options: ["Payer moins cher vos appels", "Conduire plus vite", "Dire vos notes au lieu de les taper", "Seulement lire les manuels à voix haute"], answer: 2, why: "Elle transforme la parole en texte." },
      { objective: "O4", q: "Quelle photo ne faut-il PAS prendre sans autorisation ?", options: ["La réparation terminée", "Les papiers privés d'un client", "La pièce cassée", "Votre propre caisse à outils"], answer: 1, why: "Respectez la vie privée des clients." },
      { objective: "O4", q: "Une entrée de journal de travail contient :", options: ["Date, lieu, travail fait, matériaux, problèmes et étapes suivantes", "Seulement votre avis", "Les mots de passe des clients", "Rien"], answer: 0, why: "Des entrées complètes sont des comptes rendus utiles." },
      { objective: "O5", q: "Après que l'IA a proposé un ordre de tournée, vous devez :", options: ["Le suivre sans regarder", "Ignorer les créneaux horaires", "Le vérifier dans une application de cartes avec la circulation", "Conduire plus vite"], answer: 2, why: "Les applications de cartes montrent les vrais temps de trajet et la circulation." },
      { objective: "O5", q: "L'arrimage, c'est :", options: ["Attacher la marchandise pour qu'elle ne bouge pas et ne tombe pas", "Fermer le bureau à clé", "Obtenir un prêt", "Enregistrer un fichier"], answer: 0, why: "Un chargement bien arrimé évite les accidents." },
      { objective: "O5", q: "Les règles de temps de conduite et de service limitent :", options: ["Les horaires d'ouverture des magasins", "Les pauses déjeuner du personnel de bureau seulement", "L'usage d'internet", "Combien de temps les chauffeurs professionnels peuvent conduire et travailler"], answer: 3, why: "Elles évitent la fatigue des chauffeurs." },
      { objective: "O6", q: "Un pré-apprentissage :", options: ["Est une licence complète", "Prépare à entrer en apprentissage", "Est un programme de prêt", "Est un type d'outil"], answer: 1, why: "Il développe les compétences pour entrer en apprentissage." },
      { objective: "O6", q: "Où vérifier si une licence de métier tient compte du casier judiciaire ?", options: ["Dans une supposition de l'IA", "Auprès de l'organisme des licences de votre État", "Dans un commentaire sous une annonce", "Nulle part"], answer: 1, why: "Les organismes de l'État fixent les règles des licences." },
      { objective: "O6", q: "Dans les métiers, qu'est-ce qui compte le plus pour beaucoup d'employeurs au début ?", options: ["Posséder des outils chers", "Avoir un diplôme", "Connaître tout le monde", "Être fiable et prêt à apprendre"], answer: 3, why: "La fiabilité et l'attitude ouvrent des portes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      7,
      9,
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
        name: "Résumé du manuel",
        objective: "O1",
        notYet: "Le résumé contient un chiffre différent du manuel, ou n'a pas de source.",
        meets: "Un résumé en mots simples avec chaque chiffre vérifié dans le manuel.",
        exceeds: "Indique aussi quelle étape demande un responsable ou un travailleur titulaire d'une licence."
      },
      {
        name: "Devis ou bon de travail",
        objective: "O2",
        notYet: "Il manque la main-d'œuvre, les pièces, le total, ce qui est compris ou la date de validité, ou le calcul est faux.",
        meets: "Toutes les parties sont là et le calcul est vérifié à la main.",
        exceeds: "Indique aussi ce qui n'est pas compris et comment les changements seront approuvés."
      },
      {
        name: "Liste de contrôle de sécurité",
        objective: "O3",
        notYet: "Copiée de l'IA sans vérification officielle.",
        meets: "Vérifiée dans le manuel ou une source officielle, avec les oublis ajoutés.",
        exceeds: "Cite la source et l'EPI pour chaque danger."
      },
      {
        name: "Journal de travail",
        objective: "O4",
        notYet: "Il manque la date, le travail fait, les matériaux, les problèmes ou les étapes suivantes, ou il montre des informations privées.",
        meets: "Une entrée complète avec des notes sur les photos avant et après, sans information privée.",
        exceeds: "Un autre travailleur pourrait reprendre le chantier avec cette seule entrée."
      },
      {
        name: "Plan de tournée ou de chargement",
        objective: "O5",
        notYet: "Tournée non vérifiée, ou chargement dans le mauvais ordre.",
        meets: "Tournée vérifiée dans une application de cartes et chargement dans l'ordre inverse des arrêts.",
        exceeds: "Liste aussi les quantités en stock et note les règles de l'employeur."
      },
      {
        name: "Prochain emploi trouvé",
        objective: "O6",
        notYet: "Aucun apprentissage ni emploi trouvé.",
        meets: "Un vrai apprentissage ou emploi de métier avec ses exigences et la façon de postuler.",
        exceeds: "Indique aussi la première étape qu'il fera cette semaine."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui postulent à un apprentissage, un pré-apprentissage ou un emploi de métier dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui commencent un apprentissage ou un emploi de métier dans les 90 jours",
      "Apprenants qui disent utiliser l'IA au travail pour rédiger un devis, un journal de travail ou une liste de sécurité",
      "Apprenants qui commencent un autre cours Koach Learn sur les métiers ou la carrière dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec appareil photo et Internet",
      "Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini, et une application de cartes gratuite",
      "Le manuel d'un outil, d'un appareil ou d'un véhicule (papier ou en ligne)",
      "Du papier et un stylo, ou une application de notes, pour le dossier de chantier",
      "Environ 60 minutes au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Rappelez à chaque séance que les chiffres et les règles de sécurité viennent du manuel, de l'employeur et de l'OSHA, pas de l'IA.",
      "Apportez de vrais manuels et des exemples de devis de métiers locaux pour que les apprenants s'exercent sur de vrais documents.",
      "Ne laissez pas les apprenants faire des travaux d'électricité, de gaz ou d'autres travaux soumis à licence pour s'exercer ; utilisez des tâches ménagères sans danger.",
      "Mettez les apprenants en contact avec des programmes locaux de pré-apprentissage et des employeurs qui embauchent des personnes ayant un casier.",
      "Notez le dossier de chantier avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
