"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-fundraising-grants.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-fundraising-grants-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "L'IA pour la collecte de fonds et les demandes de subvention",
  skills: "Trouver des possibilités de subvention, Lire les consignes des financeurs, Rédiger un exposé des besoins avec l'IA, Écrire des appels aux dons avec l'IA, Vérifier et personnaliser chaque brouillon",
  outcome: "trouver une subvention adaptée à votre programme, utiliser l'IA pour rédiger un exposé des besoins et une description du programme qui suivent les consignes du financeur, et écrire un e-mail d'appel aux dons, en vérifiant chaque fait et en gardant privées les informations des donateurs.",
  about: [
    "Ce cours s'adresse aux responsables, chargés de développement et bénévoles d'associations et d'organisations religieuses qui collectent des fonds et écrivent des demandes de subvention, souvent avec peu de temps et une petite équipe.",
    "Vous apprendrez où trouver des subventions, comment lire les consignes d'un financeur, comment utiliser l'IA pour rédiger les parties les plus courantes d'une demande et des appels aux dons, et comment vérifier et personnaliser chaque brouillon pour qu'il soit honnête et vous ressemble.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche pratique. L'IA rédige ; vous décidez, vérifiez et signez. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez une vraie possibilité de subvention adaptée à un de vos programmes. Avec l'IA, rédigez un exposé des besoins (environ 250 mots) et une description du programme qui suivent les consignes du financeur, en n'utilisant que des faits tirés de vos registres et des sources que vous avez vérifiées. Puis rédigez un e-mail d'appel aux dons de 150 mots pour le même programme, avec des cases à remplir à la place des détails des donateurs, et retouchez les deux pour qu'ils ressemblent à votre organisation.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des responsables, des chargés de développement et des bénévoles d'associations et d'organisations confessionnelles qui collectent des fonds et rédigent des demandes de subvention, souvent avec peu de temps et une petite équipe.",
    startingPoint: "Ils connaissent bien leurs programmes et leur communauté et ont déjà écrit quelques appels aux dons ou petites demandes de subvention. Beaucoup ont peu de temps pour chercher et écrire, et peu ont utilisé l'IA pour les subventions.",
    gap: "Les dates limites de subvention et les appels aux dons prennent des heures qu'une petite équipe n'a pas, et une seule pièce jointe oubliée ou une seule fausse affirmation peut coûter l'argent et la confiance du financeur. Les apprenants doivent utiliser l'IA pour trouver les bonnes possibilités, lire les consignes et rédiger plus vite, tout en gardant chaque fait vrai et les données des donateurs privées.",
    constraints: [
      "Honnêteté : chaque chiffre vient d'un registre ou d'une source vérifiée ; l'IA n'invente jamais de résultats, de partenaires ou de soutiens",
      "Vie privée : les listes de donateurs, les noms et l'historique des dons restent en dehors des outils d'IA",
      "Les subventions fédérales demandent une inscription sur SAM.gov, qui est gratuite et prend du temps",
      "Les mentions fiscales et juridiques se vérifient avec un comptable ou les consignes officielles de l'IRS",
      "Temps : salariés et bénévoles très occupés, donc chaque leçon dure environ 5 minutes"
    ],
    prerequisites: "« Introduction à l'IA pour les associations », ou une première expérience d'un assistant d'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour l'un de vos programmes", action: "trouver au moins deux possibilités de subvention adaptées, avec Grants.gov, Candid ou des financeurs locaux", standard: "avec l'éligibilité vérifiée dans chaque avis" },
    { id: "O2", condition: "À partir des consignes publiques d'un financeur", action: "créer avec l'aide de l'IA une liste de chaque partie, limite, pièce jointe et date limite", standard: "vérifiée ligne par ligne avec le document du financeur" },
    { id: "O3", condition: "À partir de vos propres faits et de sources vérifiées", action: "rédiger avec l'IA un exposé des besoins et une description du programme", standard: "avec chaque chiffre qui vient de vos registres ou d'une source que vous avez vérifiée" },
    { id: "O4", condition: "Pour un programme", action: "écrire un court e-mail d'appel aux dons avec une histoire, ce que fait un don et une demande claire", standard: "avec des cases à remplir au lieu des détails des donateurs" },
    { id: "O5", condition: "Pour différents types de donateurs", action: "créer des modèles de remerciement avec des cases à remplir que vous personnalisez vous-même", standard: "avec les noms et les montants ajoutés seulement dans votre base de donateurs ou votre publipostage" },
    { id: "O6", condition: "Avant l'envoi d'une demande de subvention ou d'un appel", action: "vérifier chaque chiffre, chaque affirmation, chaque autorisation pour les histoires et chaque limite de mots", standard: "sans aucun résultat, partenaire ou soutien inventé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les subventions avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver des subventions adaptées à votre mission",
          minutes: 5,
          goal: "Trouver au moins deux possibilités de subvention adaptées à un de vos programmes.",
          text: [
            "Les subventions viennent de trois sources principales : les pouvoirs publics (fédéral, État et local), les fondations privées et familiales, et les entreprises. Aux États-Unis, les subventions fédérales sont publiées sur Grants.gov. Chacune a un avis d'appel à financement, ou NOFO, avec une section qui dit qui est éligible.",
            "Pour demander des subventions fédérales américaines, votre organisation doit d'abord s'enregistrer comme entité sur SAM.gov, qui vous donne un identifiant unique d'entité (UEI). Grants.gov indique que l'enregistrement est gratuit. Cela peut prendre du temps, donc commencez tôt, et ne payez jamais une entreprise qui propose de vous enregistrer contre paiement.",
            "Pour les fondations, Candid (candid.org) permet de chercher des associations et des financeurs ; certaines fonctions demandent un abonnement payant, et beaucoup de bibliothèques publiques donnent accès. Pensez aussi à la fondation communautaire de votre région, aux entreprises locales et à votre réseau confessionnel. Hors des États-Unis, cherchez aussi les fonds publics de votre pays et les bailleurs internationaux."
          ],
          steps: ["Choisissez un programme qui a besoin de financement.", "Cherchez sur Grants.gov les possibilités fédérales dans ce domaine.", "Cherchez sur Candid et auprès de votre fondation communautaire des financeurs locaux.", "Lisez la section d'éligibilité de chaque possibilité.", "Notez-en deux qui conviennent, avec leurs dates limites."],
          words: [["Subvention", "de l'argent donné pour un but précis et qui n'a pas à être remboursé."], ["NOFO", "avis d'appel à financement : la description officielle d'une subvention fédérale américaine et de ses règles."], ["UEI", "identifiant unique d'entité : le numéro que SAM.gov donne à votre organisation pour les financements fédéraux."]],
          slides: [
            { title: "D'où viennent les subventions", bullets: ["Pouvoirs publics : fédéral, État, local", "Fondations", "Entreprises et réseaux confessionnels"] },
            { title: "Les subventions fédérales", bullets: ["Publiées sur Grants.gov", "Lisez la section d'éligibilité du NOFO", "Enregistrez-vous d'abord sur SAM.gov : c'est gratuit"] },
            { title: "Les fondations", bullets: ["Cherchez sur Candid (candid.org)", "Demandez l'accès à votre bibliothèque", "Pensez à votre fondation communautaire"] }
          ],
          sources: [
            { name: "Grants.gov : éligibilité aux subventions (en anglais)", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov : enregistrement des candidats (en anglais)", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Choisissez un de vos programmes. Trouvez deux possibilités de subvention adaptées, une publique (fédérale ou d'un État) et une d'une fondation ou locale. Écrivez sur une ligne le nom de chaque financeur, sa date limite et ses conditions d'éligibilité.",
          youCanNow: "trouver des subventions adaptées à votre mission et savoir quel enregistrement demandent les subventions fédérales.",
          quickCheck: [
            { objective: "O1", q: "Quelles sont les trois grandes sources de subventions ?", options: ["Les pouvoirs publics, les fondations et les entreprises", "Les banques, les cartes de crédit et les prêts", "Les donateurs, les bénévoles et les membres du conseil", "Les écoles, les hôpitaux et les tribunaux"], answer: 0, why: "Les subventions viennent des pouvoirs publics, des fondations privées et familiales, et des entreprises." },
            { objective: "O1", q: "Vous voulez chercher des fondations sur Candid mais ne pouvez pas payer un abonnement. Que pouvez-vous essayer ?", options: ["Renoncer aux fondations", "Demander à votre bibliothèque publique, car beaucoup offrent un accès", "Payer un inconnu pour une liste", "Demander à l'IA de lister toutes les fondations"], answer: 1, why: "Beaucoup de bibliothèques publiques donnent accès aux fonctions payantes de Candid." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Lire les consignes des financeurs avec l'aide de l'IA",
          minutes: 5,
          goal: "Transformer les consignes d'un financeur en liste de tout ce que vous devez envoyer.",
          text: [
            "Chaque financeur dit ce qu'il veut : les parties, les limites de mots, le format du budget, les pièces jointes et les dates limites. En oublier une peut vous éliminer avant que quiconque lise votre travail.",
            "Les consignes sont publiques, donc vous pouvez les coller dans un assistant d'IA et demander : \"Transforme ces consignes de subvention en liste de contrôle : chaque partie, sa limite de mots ou de pages, chaque pièce jointe et chaque date limite.\"",
            "Puis comparez la liste avec l'original. L'IA peut oublier un élément ou changer une date. Le document du financeur a toujours le dernier mot."
          ],
          steps: ["Copiez les consignes publiques du financeur.", "Demandez à l'IA une liste des parties, limites, pièces jointes et dates limites.", "Comparez la liste ligne par ligne avec l'original.", "Corrigez tout ce qui manque ou est faux."],
          words: [["Consignes", "les règles du financeur sur quoi envoyer et comment."], ["Pièce jointe", "un document en plus envoyé avec la demande, comme un budget ou la lettre de l'IRS (le fisc américain)."]],
          slides: [
            { title: "Les financeurs disent ce qu'ils veulent", bullets: ["Parties et limites de mots", "Format du budget et pièces jointes", "Dates limites"] },
            { title: "Demandez une liste à l'IA", bullets: ["Collez les consignes publiques", "Parties, limites, pièces jointes, dates limites"] },
            { title: "Vérifiez-la", bullets: ["Comparez ligne par ligne", "Le document du financeur a toujours le dernier mot"] }
          ],
          tryIt: "Prenez les consignes d'une de vos deux possibilités. Demandez une liste de contrôle à un assistant d'IA, puis comparez-la avec l'original et corrigez les erreurs.",
          youCanNow: "transformer les consignes d'un financeur en liste de contrôle exacte.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi pouvez-vous coller les consignes d'un financeur dans un assistant d'IA ?", options: ["Parce que les outils d'IA sont toujours privés", "Parce que le financeur l'a dit", "Parce que les consignes sont publiques", "Parce que l'IA déposera la demande pour vous"], answer: 2, why: "Les consignes sont publiques, donc les coller ne partage rien de privé." },
            { objective: "O2", q: "La liste de l'IA dit que la date limite est le 15 mars, mais les consignes disent le 1er mars. Que faites-vous ?", options: ["Vous prenez le 15 mars", "Vous coupez la poire en deux", "Vous redemandez à l'IA jusqu'à ce qu'elle soit d'accord", "Vous prenez le 1er mars, d'après le document du financeur"], answer: 3, why: "L'IA peut changer une date ; c'est toujours le document du financeur qui fait foi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rédiger un exposé des besoins et une description du programme",
          minutes: 6,
          goal: "Utiliser l'IA pour rédiger un exposé des besoins et une description du programme à partir de vos propres faits.",
          text: [
            "L'exposé des besoins dit quel problème vous traitez, qui est touché, et pourquoi maintenant. La description du programme dit ce que vous allez faire, pour qui, et ce qui va changer.",
            "Donnez vos faits à l'IA, pas une page blanche : \"En utilisant seulement ces faits, rédige un exposé des besoins de 250 mots pour une demande à [type de financeur] : [vos faits et statistiques avec leurs sources]. N'ajoute aucune statistique que je ne t'ai pas donnée.\"",
            "Puis retravaillez sérieusement. Ajoutez une vraie histoire (avec autorisation, sans détails qui identifient), reprenez les mots et les priorités du financeur, et assurez-vous que chaque chiffre vient de vos registres ou d'une source vérifiée. Beaucoup de financeurs demandent si l'IA a été utilisée ; répondez honnêtement."
          ],
          steps: ["Rassemblez vos faits : qui vous servez, chiffres, résultats, statistiques avec sources.", "Demandez à l'IA de rédiger avec seulement ces faits, dans la limite de mots.", "Ajoutez une vraie histoire avec autorisation et sans détails qui identifient.", "Reprenez les priorités et les mots du financeur.", "Retrouvez l'origine de chaque chiffre dans un registre ou une source."],
          words: [["Exposé des besoins", "la partie de la demande qui explique le problème et pourquoi il compte maintenant."], ["Description du programme", "la partie qui explique ce que vous allez faire et ce qui va changer."], ["Résultat", "le changement dans la vie des gens que votre programme vise."]],
          slides: [
            { title: "Deux parties essentielles", bullets: ["Besoins : le problème, qui, pourquoi maintenant", "Programme : ce que vous faites, pour qui, ce qui change"] },
            { title: "Donnez vos faits à l'IA", bullets: ["\"En utilisant seulement ces faits...\"", "\"N'ajoute aucune statistique que je ne t'ai pas donnée\"", "Respectez la limite de mots"] },
            { title: "Retravaillez sérieusement", bullets: ["Ajoutez une vraie histoire avec autorisation", "Reprenez les priorités du financeur", "Retrouvez l'origine de chaque chiffre"] },
            { title: "Soyez honnête", bullets: ["Répondez franchement si on vous demande si l'IA a servi"] }
          ],
          tryIt: "Rassemblez cinq faits sur un programme. Demandez à l'IA un exposé des besoins de 250 mots avec seulement ces faits. Marquez chaque chiffre et confirmez d'où il vient.",
          youCanNow: "rédiger avec l'IA l'exposé des besoins d'une demande de subvention à partir de vos propres faits vérifiés.",
          quickCheck: [
            { objective: "O3", q: "Que dit une description de programme ?", options: ["Ce que vous allez faire, pour qui, et ce qui va changer", "L'adresse personnelle des membres de votre conseil", "Votre liste de donateurs", "Seulement le total du budget"], answer: 0, why: "Une description de programme dit ce que vous allez faire, pour qui et ce qui va changer." },
            { objective: "O3", q: "Vous voulez ajouter l'histoire d'une famille à votre exposé des besoins. Que faites-vous ?", options: ["Vous utilisez son nom complet pour faire vrai", "Vous obtenez son autorisation et retirez les détails qui permettent de la reconnaître", "Vous laissez l'IA inventer une histoire", "Vous copiez une histoire d'une autre organisation"], answer: 1, why: "Une vraie histoire demande une autorisation et aucun détail qui permette de reconnaître la personne." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les subventions avec l'IA",
        questions: [
          { objective: "O1", q: "Où sont publiées les possibilités de subventions fédérales américaines ?", options: ["Sur Grants.gov", "Dans un groupe sur les réseaux sociaux", "Dans vos courriers indésirables", "Dans l'annuaire"], answer: 0, why: "Grants.gov publie les possibilités de financement fédéral." },
          { objective: "O1", q: "Une entreprise propose de vous enregistrer sur SAM.gov contre paiement. Que savez-vous ?", options: ["Vous devez payer", "L'enregistrement sur SAM.gov est gratuit, enregistrez-vous vous-même", "SAM.gov est facultatif", "Seules les entreprises peuvent s'enregistrer"], answer: 1, why: "Grants.gov indique que l'enregistrement est gratuit." },
          { objective: "O2", q: "La liste de l'IA oublie une pièce jointe des consignes. Qui a raison ?", options: ["La liste", "Aucun des deux", "Les consignes du financeur", "Le plus court des deux"], answer: 2, why: "Le document du financeur a toujours le dernier mot." },
          { objective: "O3", q: "Quelle demande vous protège des statistiques inventées ?", options: ["\"Écris un exposé des besoins.\"", "\"Rends-le impressionnant.\"", "\"Ajoute des chiffres forts.\"", "\"En utilisant seulement ces faits, rédige... N'ajoute aucune statistique que je ne t'ai pas donnée.\""], answer: 3, why: "Limiter l'IA à vos faits empêche les chiffres inventés." },
          { objective: "O3", q: "Qu'explique un exposé des besoins ?", options: ["Le problème, qui est touché et pourquoi maintenant", "Les noms des membres du conseil", "Vos horaires de bureau", "La liste des donateurs"], answer: 0, why: "C'est le rôle de la partie sur les besoins." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les donateurs avec l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire un appel aux dons avec l'IA",
          minutes: 5,
          goal: "Rédiger un court e-mail d'appel aux dons pour un programme.",
          text: [
            "Un bon appel est court et précis : une personne ou un besoin, ce que permet un don, et une demande claire. \"50 $ offrent une semaine de soutien scolaire après l'école\" marche mieux que \"merci de soutenir notre travail\", mais seulement si le chiffre est vrai.",
            "Demande : \"Écris un e-mail d'appel aux dons de 150 mots pour notre soutien scolaire après l'école. Raconte une courte histoire sur [un élève, sans nom], dis ce que permet [montant], et termine par une demande claire et un lien : [lien de don]. Ton chaleureux et plein d'espoir.\"",
            "Gardez les listes de donateurs, les noms et l'historique des dons hors de l'outil d'IA. Utilisez votre base de données de donateurs ou votre logiciel d'e-mail pour ajouter les noms une fois le brouillon terminé."
          ],
          steps: ["Choisissez un programme et un fait vrai sur \"ce que permet un don\".", "Demandez à l'IA un court appel avec une histoire, le fait sur le don et une demande.", "Vérifiez chaque montant avec votre budget.", "Ajoutez les noms par votre base de données de donateurs, pas par l'outil d'IA."],
          words: [["Appel aux dons", "une demande qui invite les gens à donner."], ["Appel à l'action", "la seule chose claire que vous demandez au lecteur de faire, comme \"Donnez aujourd'hui\"."]],
          slides: [
            { title: "Un appel fort", bullets: ["Une histoire ou un besoin", "Ce que permet un don : chiffres vrais seulement", "Une demande claire"] },
            { title: "La demande à l'IA", bullets: ["150 mots, chaleureux et plein d'espoir", "Une histoire sans nom", "Cases [montant] et [lien de don]"] },
            { title: "Gardez les donateurs privés", bullets: ["Pas de listes de donateurs dans l'IA", "Ajoutez les noms dans votre base de données"] }
          ],
          tryIt: "Rédigez avec l'IA un e-mail d'appel aux dons de 150 mots pour un programme. Vérifiez dans votre budget que le montant de \"ce que permet un don\" est vrai.",
          youCanNow: "rédiger avec l'IA un appel aux dons court et honnête.",
          quickCheck: [
            { objective: "O4", q: "Combien de demandes doit contenir un bon appel aux dons ?", options: ["Cinq", "Aucune", "Une demande claire", "Une pour chaque programme"], answer: 2, why: "Un bon appel présente une personne ou un besoin, ce que fait un don et une demande claire." },
            { objective: "O4", q: "Vous voulez que l'IA écrive un appel nominatif à vos principaux donateurs. Que faites-vous ?", options: ["Vous collez votre liste de donateurs dans l'IA", "Vous collez les noms et l'historique des dons", "Vous renoncez à l'appel", "Vous rédigez le brouillon avec des cases à remplir, puis ajoutez les noms dans votre base de donateurs"], answer: 3, why: "Gardez les listes de donateurs hors de l'IA ; ajoutez les noms dans votre base une fois le brouillon terminé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Personnaliser les remerciements et les nouvelles",
          minutes: 4,
          goal: "Utiliser l'IA pour créer des modèles de remerciement et de nouvelles que vous personnalisez vous-même.",
          text: [
            "Les donateurs remerciés vite et informés de ce qu'a permis leur don sont plus enclins à donner de nouveau. L'IA peut vous aider à écrire des modèles pour différents donateurs : premiers donateurs, donateurs mensuels, bénévoles qui donnent aussi, et membres de la paroisse qui ont donné à une quête spéciale.",
            "Demandez : \"Écris trois courts modèles de remerciement : premier don, donateur mensuel et grand donateur. Chacun en moins de 100 mots, chaleureux, avec des cases [nom], [montant] et [programme] et une phrase d'impact.\"",
            "Remplissez les noms et les montants dans votre base de données de donateurs ou par publipostage. Ajoutez une ligne écrite à la main quand vous le pouvez. Les gens voient quand aucun humain n'est intervenu."
          ],
          steps: ["Listez les types de donateurs que vous remerciez.", "Demandez à l'IA un modèle pour chacun, avec des cases à remplir.", "Ajoutez à chacun une phrase d'impact vraie.", "Personnalisez dans votre base de données et ajoutez une ligne personnelle."],
          words: [["Modèle", "un brouillon réutilisable avec des cases à remplir."], ["Publipostage", "un outil qui remplit les noms et les détails dans une lettre pour beaucoup de personnes."], ["Fidélisation des donateurs", "garder les donateurs qui donnent année après année."]],
          slides: [
            { title: "Remerciez vite, montrez l'impact", bullets: ["Les donateurs remerciés donnent de nouveau", "Dites ce qu'a permis le don"] },
            { title: "Des modèles par type de donateur", bullets: ["Premier don, mensuel, grand donateur", "Moins de 100 mots avec des cases à remplir"] },
            { title: "Rendez-le personnel", bullets: ["Remplissez via votre base de données", "Ajoutez une ligne écrite à la main"] }
          ],
          tryIt: "Demandez à l'IA trois modèles de remerciement pour trois types de donateurs. Ajoutez à chacun une phrase d'impact vraie.",
          youCanNow: "créer des modèles de remerciement avec l'IA et les personnaliser en toute sécurité.",
          quickCheck: [
            { objective: "O5", q: "Quels donateurs sont plus susceptibles de donner à nouveau ?", options: ["Ceux remerciés vite et informés de ce qu'a permis leur don", "Ceux qui n'ont jamais de nouvelles", "Ceux qui reçoivent la même lettre que tout le monde", "Ceux remerciés un an plus tard"], answer: 0, why: "Un remerciement rapide et un compte rendu de ce qu'a permis le don rendent les donateurs plus susceptibles de redonner." },
            { objective: "O5", q: "Vous avez un modèle de remerciement prêt pour un donateur mensuel. Qu'est-ce qui le rend humain ?", options: ["L'envoyer deux fois", "Ajouter une ligne écrite à la main quand vous le pouvez", "Utiliser une police plus grande", "Retirer la phrase sur l'impact"], answer: 1, why: "Les gens voient quand aucun humain n'est intervenu ; une ligne écrite à la main aide." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vérifier, retoucher et rester honnête",
          minutes: 5,
          goal: "Faire une vérification finale de toute demande de subvention ou de tout appel avant l'envoi.",
          text: [
            "Avant que quoi que ce soit parte à un financeur ou un donateur, faites une vérification finale. Chaque chiffre vient d'un registre. Chaque affirmation est vraie. Chaque histoire a une autorisation. Les limites de mots sont respectées. Le texte ressemble à votre organisation, pas à un robot.",
            "Ne laissez jamais l'IA inventer des résultats, des partenaires ou des soutiens. Un financeur qui trouve une seule fausse affirmation pourrait ne plus jamais vous faire confiance.",
            "Lisez à voix haute, et demandez à un collègue qui connaît le programme de relire. Pour les affirmations juridiques ou fiscales, comme ce qui est déductible des impôts, vérifiez auprès de votre comptable ou des recommandations officielles de l'IRS (le fisc américain), ou de l'administration fiscale de votre pays."
          ],
          steps: ["Retrouvez l'origine de chaque chiffre dans un registre ou une source.", "Confirmez que chaque histoire a une autorisation et aucun détail qui identifie.", "Vérifiez les limites de mots et les parties exigées.", "Lisez à voix haute.", "Demandez à un collègue qui connaît le programme de relire."],
          words: [["Soutien (endossement)", "une déclaration publique de soutien d'une personne ou d'un groupe."], ["Déductible des impôts", "un don qu'un donateur peut soustraire de son revenu imposable selon les règles fiscales."]],
          slides: [
            { title: "Vérification finale", bullets: ["Chaque chiffre vient d'un registre", "Chaque histoire a une autorisation", "Limites de mots respectées"] },
            { title: "N'inventez jamais", bullets: ["Des résultats", "Des partenaires", "Des soutiens"] },
            { title: "Dernières étapes", bullets: ["Lisez à voix haute", "Un collègue relit", "Affirmations fiscales : comptable ou IRS"] }
          ],
          sources: [
            { name: "IRS : les dons de bienfaisance (en anglais)", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Tâche finale : pour une vraie possibilité de subvention, terminez votre exposé des besoins et une description du programme qui suivent les consignes, et terminez un appel aux dons de 150 mots pour le même programme. Faites la vérification finale sur les deux.",
          youCanNow: "produire avec l'aide de l'IA des parties de demande de subvention et des appels aux dons honnêtes et vérifiés.",
          quickCheck: [
            { objective: "O6", q: "Quelle est une bonne façon de repérer un brouillon qui sonne comme un robot ?", options: ["Le rendre plus long", "Ajouter plus de statistiques", "Le lire à voix haute", "L'envoyer tout de suite"], answer: 2, why: "Lisez-le à voix haute et demandez à un collègue qui connaît le programme de le lire." },
            { objective: "O6", q: "Votre brouillon de demande dit que vous avez servi 300 jeunes, mais aucun registre ne le montre. Que faites-vous ?", options: ["Vous le gardez ; ça sonne bien", "Vous l'arrondissez à 250", "Vous demandez à l'IA d'où vient ce chiffre", "Vous le retirez ou utilisez le chiffre de vos registres"], answer: 3, why: "Chaque chiffre doit venir d'un registre ou d'une source." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les donateurs avec l'IA",
        questions: [
          { objective: "O4", q: "Quelle phrase d'appel est la plus forte, si elle est vraie ?", options: ["\"Merci de soutenir notre travail.\"", "\"50 $ offrent une semaine de soutien scolaire après l'école.\"", "\"Nous avons besoin d'argent.\"", "\"Donnez si vous pouvez.\""], answer: 1, why: "Un impact précis et vrai aide les donateurs à voir ce que fait leur don." },
          { objective: "O5", q: "Où ajoutez-vous les noms des donateurs dans les lettres de remerciement ?", options: ["En collant la liste des donateurs dans l'IA", "Sur les réseaux sociaux", "Dans votre base de données de donateurs ou par publipostage", "Nulle part"], answer: 2, why: "Garder les données des donateurs dans votre propre système protège leur vie privée." },
          { objective: "O6", q: "L'IA ajoute un partenaire avec qui vous ne travaillez pas. Que faites-vous ?", options: ["Vous le gardez, ça sonne bien", "Vous demanderez au partenaire plus tard", "Vous l'écrivez plus petit", "Vous le retirez"], answer: 3, why: "Ne laissez jamais l'IA inventer des partenaires ou des soutiens." },
          { objective: "O6", q: "Un brouillon dit que les dons sont déductibles des impôts. Où vérifier ?", options: ["Auprès d'un comptable ou des recommandations officielles de l'IRS", "Dans une autre discussion avec l'IA", "Auprès d'un donateur", "Nulle part"], answer: 0, why: "Les affirmations fiscales demandent une source officielle ou un professionnel." },
          { objective: "O6", q: "Pourquoi demander à un collègue qui connaît le programme de relire ?", options: ["Pour partager la faute", "Il peut repérer des détails faux ou manquants", "Pour allonger le texte", "Ce n'est pas utile"], answer: 1, why: "Quelqu'un qui connaît le programme repère les erreurs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la collecte de fonds et les demandes de subvention",
    questions: [
      { objective: "O1", q: "Une subvention, c'est :", options: ["Un prêt", "Une facture d'impôts", "De l'argent pour un but précis qui n'a pas à être remboursé", "Une liste de donateurs"], answer: 2, why: "Les subventions ne se remboursent pas." },
      { objective: "O1", q: "NOFO veut dire :", options: ["Nouveau bureau des opérations", "Forum ouvert des associations", "Avis d'obligation financière", "Avis d'appel à financement"], answer: 3, why: "Un NOFO décrit une subvention fédérale et ses règles." },
      { objective: "O1", q: "Avant de demander une subvention fédérale américaine, votre organisation doit :", options: ["S'enregistrer comme entité sur SAM.gov", "Acheter une licence spéciale", "Engager un lobbyiste", "Payer des frais à Grants.gov"], answer: 0, why: "Grants.gov exige d'abord l'enregistrement sur SAM.gov." },
      { objective: "O1", q: "SAM.gov donne à votre organisation :", options: ["Un ordinateur portable gratuit", "Un identifiant unique d'entité (UEI)", "Une subvention", "Un remboursement d'impôts"], answer: 1, why: "L'UEI identifie votre organisation pour les financements fédéraux." },
      { objective: "O1", q: "Quel est un bon endroit pour chercher des fondations qui financent ?", options: ["Une application météo", "Un site d'achats", "Candid", "Un jeu"], answer: 2, why: "Candid répertorie les associations et les financeurs." },
      { objective: "O1", q: "Où trouver dans un NOFO qui peut faire une demande ?", options: ["Dans le logo", "En bas de page", "Dans la couleur de la couverture", "Dans la section d'éligibilité"], answer: 3, why: "Chaque NOFO a une section d'éligibilité." },
      { objective: "O2", q: "Pourquoi transformer les consignes en liste de contrôle ?", options: ["Oublier un seul élément peut vous éliminer", "Les financeurs aiment les listes", "Cela allonge la demande", "La loi l'exige"], answer: 0, why: "Une liste aide à tout envoyer." },
      { objective: "O2", q: "La liste de l'IA et les consignes du financeur ne disent pas la même chose. Vous croyez :", options: ["L'IA", "Les consignes du financeur", "Le plus simple", "Aucun, vous devinez"], answer: 1, why: "Le document du financeur a le dernier mot." },
      { objective: "O3", q: "La meilleure façon de commencer un exposé des besoins avec l'IA est de :", options: ["Lui demander d'inventer des chiffres forts", "Ne rien lui donner", "Lui donner vos faits et lui dire de ne pas ajouter de statistiques", "Coller les dossiers des bénéficiaires"], answer: 2, why: "Vos faits gardent le brouillon vrai." },
      { objective: "O3", q: "Une description du programme explique :", options: ["Seulement votre numéro fiscal", "La météo", "Qui siège au conseil", "Ce que vous ferez, pour qui, et ce qui changera"], answer: 3, why: "C'est son rôle dans une demande de subvention." },
      { objective: "O3", q: "Vous voulez inclure l'histoire d'un bénéficiaire. Il vous faut :", options: ["Une autorisation et aucun détail qui identifie", "Son nom complet et son adresse", "Rien", "Une photo de sa pièce d'identité"], answer: 0, why: "Les histoires demandent un consentement et le respect de la vie privée." },
      { objective: "O3", q: "Un financeur demande si l'IA a été utilisée. Vous devez :", options: ["Dire non", "Répondre honnêtement", "Ignorer la question", "Demander à l'IA de répondre"], answer: 1, why: "L'honnêteté protège la confiance." },
      { objective: "O4", q: "Un appel fort contient :", options: ["Dix demandes", "Aucune demande", "Une histoire, ce que permet un don et une demande claire", "Un long rapport annuel"], answer: 2, why: "Court et précis marche le mieux." },
      { objective: "O4", q: "Qu'est-ce qu'un appel à l'action ?", options: ["Un appel téléphonique", "Un avis juridique", "Un vote du conseil", "La seule chose claire que vous demandez au lecteur de faire"], answer: 3, why: "Comme \"Donnez aujourd'hui\"." },
      { objective: "O4", q: "Qu'est-ce qui ne doit JAMAIS aller dans un outil d'IA ?", options: ["Votre liste de donateurs avec l'historique des dons", "\"Rends-le plus chaleureux\"", "Le nom public du programme", "Une limite de mots"], answer: 0, why: "Les données des donateurs sont privées." },
      { objective: "O5", q: "Pourquoi faire des modèles de remerciement par type de donateur ?", options: ["Pour économiser du papier", "Des donateurs différents ont besoin de messages différents", "Les donateurs l'exigent", "L'IA ne sait pas en écrire un"], answer: 1, why: "Les premiers donateurs et les donateurs mensuels n'ont pas la même relation avec vous." },
      { objective: "O5", q: "Le publipostage, c'est :", options: ["La fusion de deux associations", "Des frais postaux", "Un outil qui remplit les noms dans des lettres pour beaucoup de personnes", "Un modèle d'IA"], answer: 2, why: "Il personnalise les lettres en dehors de l'outil d'IA." },
      { objective: "O5", q: "Qu'est-ce qui rend un remerciement humain ?", options: ["Plus de cases à remplir", "Un modèle plus long", "L'envoyer en retard", "Une ligne personnelle écrite à la main"], answer: 3, why: "Les gens remarquent une vraie touche humaine." },
      { objective: "O6", q: "Lors de la vérification finale, chaque chiffre doit :", options: ["Venir d'un registre ou d'une source", "Être arrondi au-dessus", "Être grand", "Venir de l'IA"], answer: 0, why: "Des chiffres vrais gardent la confiance." },
      { objective: "O6", q: "Si un financeur trouve une seule fausse affirmation :", options: ["Rien ne se passe", "Il pourrait ne plus jamais vous faire confiance", "Il donne plus", "C'est normal"], answer: 1, why: "La confiance est difficile à reconstruire." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      2,
      6,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Subvention adaptée",
        objective: "O1",
        notYet: "La subvention ne correspond pas au programme, ou l'éligibilité n'a pas été vérifiée.",
        meets: "Une vraie possibilité adaptée au programme, avec l'éligibilité vérifiée.",
        exceeds: "Indique une deuxième possibilité et la date limite de chacune."
      },
      {
        name: "Respect des consignes",
        objective: "O2",
        notYet: "Une partie, une limite ou une pièce jointe obligatoire est oubliée.",
        meets: "Les brouillons suivent la liste, les parties et les limites de mots du financeur.",
        exceeds: "La liste a été vérifiée ligne par ligne avec le document du financeur."
      },
      {
        name: "Besoins et programme fondés sur les faits",
        objective: "O3",
        notYet: "Une statistique ou un résultat ne vient d'aucun registre ni d'aucune source.",
        meets: "Un exposé des besoins d'environ 250 mots et une description du programme qui n'utilisent que des faits vérifiés.",
        exceeds: "Reprend les mots et les priorités du financeur et contient une histoire autorisée."
      },
      {
        name: "Appel aux dons",
        objective: "O4",
        notYet: "Pas de demande claire, ou des détails de donateurs dans la demande à l'IA.",
        meets: "Environ 150 mots avec une histoire, ce que fait un don et une demande claire, avec des cases à remplir.",
        exceeds: "Le montant et ce qu'il permet viennent des vrais coûts du programme."
      },
      {
        name: "Honnête et fidèle à notre ton",
        objective: "O6",
        notYet: "Un résultat, un partenaire ou un soutien inventé reste dans le texte.",
        meets: "Chaque affirmation est vraie et les deux textes ressemblent à l'organisation.",
        exceeds: "Un collègue qui connaît le programme les a lus et approuvés."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Demandes de subvention déposées dans les 90 jours (enquête de suivi)",
      "Subventions obtenues et dollars collectés par les appels, selon les organisations",
      "Apprenants qui commencent un autre cours Koach Learn pour les associations dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet",
      "Un assistant d'IA gratuit",
      "Les faits et les registres de votre programme, et les consignes publiques d'un financeur",
      "Environ 60 minutes au total, plus le temps de retoucher les brouillons"
    ],
    facilitatorNotes: [
      "Demandez aux apprenants d'apporter une vraie possibilité de subvention et les chiffres de leur programme.",
      "Rappelez aux apprenants de ne jamais coller de listes de donateurs, de noms ou d'historiques de dons dans les outils d'IA.",
      "Prévenez les apprenants contre les sociétés qui font payer l'inscription sur SAM.gov ; elle est gratuite.",
      "Faites travailler les apprenants en binôme pour lire à voix haute le brouillon de l'autre et retrouver la source de chaque chiffre.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
