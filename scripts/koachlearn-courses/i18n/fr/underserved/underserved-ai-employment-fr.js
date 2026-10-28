"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-employment.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-employment-fr",
  lang: "fr",
  translationOf: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "L'IA pour l'emploi et la préparation au travail",
  skills: "Trouver de l'aide gratuite pour l'emploi, Nommer vos compétences, Écrire un CV d'une page avec l'IA, Adapter un CV à une offre d'emploi, S'entraîner aux réponses d'entretien, Repérer les arnaques à l'emploi",
  outcome: "utiliser un assistant d'IA gratuit pour écrire un CV d'une page adapté à une vraie offre d'emploi, vous entraîner à répondre aux questions d'entretien courantes, et repérer les signes d'une arnaque à l'emploi.",
  about: [
    "Chercher du travail est difficile, surtout si vous avez des trous dans votre parcours, si vous avez surtout fait des petits boulots payés en liquide, ou si vous vous êtes occupé de votre famille. Vous avez plus de compétences que vous ne le pensez, et des outils gratuits peuvent vous aider à les montrer.",
    "Vous trouverez de l'aide gratuite pour l'emploi près de chez vous, vous transformerez votre expérience (payée ou non) en liste de compétences, vous écrirez un CV d'une page avec l'IA, vous l'adapterez à une vraie offre d'emploi, vous vous préparerez à l'entretien, et vous apprendrez à repérer les arnaques à l'emploi.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Trouvez une vraie offre d'emploi à laquelle vous pourriez postuler. Utilisez un assistant d'IA pour écrire un CV d'une page adapté à cette offre, sans aucun numéro privé. Puis demandez à l'IA de vous poser trois questions d'entretien courantes, répondez à chacune à voix haute, et demandez un conseil pour améliorer chaque réponse.",
  chapters: [
    {
      name: "Chapitre 1 : Se préparer",
      lessons: [
        {
          title: "Trouver de l'aide gratuite pour l'emploi près de chez vous",
          minutes: 4,
          goal: "Trouver l'American Job Center le plus proche et un autre lieu gratuit d'aide à l'emploi.",
          text: [
            "Aux États-Unis, les American Job Centers sont des centres publics pour l'emploi présents dans tout le pays. Ils aident les chercheurs d'emploi dans leurs recherches, les orientent vers des postes et les aident à être embauchés, et beaucoup proposent aussi des ordinateurs, des ateliers et des informations sur les formations. Certains services ont des conditions d'accès et peuvent varier selon l'État. Ailleurs, adressez-vous au service public de l'emploi de votre pays.",
            "Vous pouvez trouver le centre le plus proche avec l'outil American Job Center Finder sur CareerOneStop, un site du ministère américain du Travail, ou en appelant le 1-877-US-2JOBS.",
            "Les bibliothèques publiques aident aussi à chercher un emploi, à imprimer un CV et offrent du temps d'ordinateur gratuit. Une vraie aide à l'emploi ne vous demande jamais de payer pour obtenir un travail."
          ],
          steps: ["Ouvrez l'American Job Center Finder sur careeronestop.org, ou appelez le 1-877-US-2JOBS.", "Tapez votre code postal ou votre ville.", "Notez l'adresse, le téléphone et les horaires du centre le plus proche.", "Demandez à votre bibliothèque quelle aide à la recherche d'emploi elle propose."],
          words: [["American Job Center", "un centre public américain qui aide les gens à trouver un emploi et une formation."], ["Orientation", "quand un centre vous envoie vers un emploi ou un programme qui peut vous convenir."]],
          sources: [
            { name: "Ministère du Travail des États-Unis : American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop : American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "Les American Job Centers", bullets: ["Centres publics pour l'emploi dans tout le pays (États-Unis)", "Recherche d'emploi, orientation et embauche", "Certains services varient selon l'État"] },
            { title: "Trouvez le vôtre", bullets: ["American Job Center Finder sur careeronestop.org", "Ou appelez le 1-877-US-2JOBS", "Ailleurs : le service public de l'emploi de votre pays"] },
            { title: "Encore de l'aide gratuite", bullets: ["Bibliothèques : ordinateurs, impression, aide à l'emploi", "Une vraie aide ne vous fait jamais payer pour un emploi"] }
          ],
          tryIt: "Trouvez l'American Job Center le plus proche (ou l'agence publique pour l'emploi de votre pays) et notez son adresse, son numéro de téléphone et ses horaires.",
          youCanNow: "trouver de l'aide officielle et gratuite pour l'emploi près de chez vous."
        },
        {
          title: "Nommer vos compétences, payées ou non",
          minutes: 5,
          goal: "Transformer votre expérience de travail et de vie en liste de compétences professionnelles.",
          text: [
            "Beaucoup de gens disent « Je n'ai pas de compétences » alors qu'ils en ont. S'occuper d'enfants ou d'un parent âgé, gérer le budget de la maison, cuisiner pour un événement de l'église, réparer les voitures des voisins ou faire des petits boulots, tout cela construit de vraies compétences.",
            "Dites à un assistant d'IA ce que vous avez fait, avec des mots simples, et demandez-lui de le transformer en compétences professionnelles. Par exemple : « Pendant cinq ans, je me suis occupé de ma grand-mère, j'ai géré ses médicaments et ses rendez-vous, et j'ai tenu le budget de la maison. Quelles compétences professionnelles cela montre-t-il ? »",
            "Choisissez les compétences qui sont vraies et pour lesquelles vous pouvez donner un exemple. Ne gardez rien que vous ne pourriez pas défendre en entretien."
          ],
          steps: ["Notez tout ce que vous avez fait : emplois payés, petits boulots, aide à un proche, bénévolat, école.", "Demandez à l'IA de lister les compétences que montre chaque expérience.", "Gardez seulement les compétences pour lesquelles vous avez un vrai exemple.", "Gardez la liste pour votre CV."],
          words: [["Compétence", "quelque chose que vous savez bien faire, comme organiser un planning, servir des clients ou utiliser une caisse."], ["Compétence transférable", "une compétence acquise dans une partie de la vie qui aide dans un autre métier."]],
          slides: [
            { title: "Vous avez plus de compétences que vous ne pensez", bullets: ["Aide à un proche, budget, cuisine pour des événements", "Petits boulots, bénévolat, réparations"] },
            { title: "Demandez à l'IA de les nommer", bullets: ["Décrivez ce que vous avez fait avec des mots simples", "« Quelles compétences professionnelles cela montre-t-il ? »"] },
            { title: "Restez dans le vrai", bullets: ["Gardez les compétences dont vous avez un exemple", "Retirez ce que vous ne pouvez pas défendre"] }
          ],
          tryIt: "Notez trois choses que vous avez faites (payées ou non). Demandez à un assistant d'IA de nommer les compétences que montre chacune. Gardez celles pour lesquelles vous avez un vrai exemple.",
          youCanNow: "transformer votre expérience payée et non payée en liste honnête de compétences professionnelles."
        },
        {
          title: "Écrire un CV d'une page avec l'IA",
          minutes: 6,
          goal: "Écrire un CV simple d'une page avec un assistant d'IA et un outil de documents gratuit.",
          text: [
            "Un CV est un résumé d'une page de vos compétences et de votre expérience. Un CV simple et propre vaut mieux qu'un CV compliqué.",
            "Donnez à l'IA votre liste de compétences, vos emplois ou activités avec les dates, et vos formations ou études. Demandez un CV d'une page avec ces parties : ligne de contact, court résumé, compétences, expérience, et études ou formation.",
            "Ne mettez pas votre numéro de sécurité sociale, votre date de naissance ni vos numéros d'identité complets sur un CV ou dans l'IA. Tapez vous-même votre téléphone et votre e-mail dans le document final. Copiez le résultat dans un outil gratuit comme Google Docs ou Microsoft Word sur le web, et enregistrez-le en PDF pour l'envoyer."
          ],
          steps: ["Donnez à l'IA vos compétences, vos emplois ou activités avec les dates, et vos formations.", "Demandez un CV d'une page : ligne de contact, résumé, compétences, expérience, études.", "Copiez-le dans Google Docs ou Word sur le web.", "Ajoutez vous-même votre téléphone et votre e-mail ; laissez de côté le numéro de sécurité sociale et la date de naissance.", "Lisez-le à voix haute, corrigez les erreurs, et enregistrez-le en PDF."],
          words: [["CV", "un résumé d'une page de vos compétences, de votre travail et de vos formations pour les employeurs."], ["PDF", "un type de fichier qui garde votre document identique sur tous les appareils."]],
          slides: [
            { title: "Simple et propre, ça gagne", bullets: ["Une page", "Facile à lire"] },
            { title: "Cinq parties", bullets: ["Ligne de contact et court résumé", "Compétences", "Expérience", "Études ou formation"] },
            { title: "Restez prudent", bullets: ["Pas de numéro de sécurité sociale ni de date de naissance", "Ajoutez vous-même téléphone et e-mail", "Enregistrez en PDF pour l'envoyer"] }
          ],
          tryIt: "Utilisez votre liste de compétences de la leçon 2 pour demander un CV d'une page à un assistant d'IA. Copiez-le dans Google Docs ou Word sur le web et lisez-le à voix haute.",
          youCanNow: "écrire un CV simple d'une page avec l'IA et un outil de documents gratuit."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer",
        questions: [
          { q: "Comment trouver l'American Job Center le plus proche ?", options: ["Par le SMS d'un inconnu", "Avec l'American Job Center Finder sur CareerOneStop, ou au 1-877-US-2JOBS", "Par une publicité surgissante", "Par un site payant"], answer: 1, why: "Ce sont les moyens officiels de trouver un centre." },
          { q: "Un site dit que vous devez payer des frais pour obtenir un emploi. C'est :", options: ["Normal", "Obligatoire selon la loi", "Un signal d'alarme ; une vraie aide ne vous fait pas payer pour un emploi", "Une bonne affaire"], answer: 2, why: "Les employeurs honnêtes et les centres pour l'emploi ne font pas payer pour un emploi." },
          { q: "Vous vous êtes occupé de votre grand-mère pendant cinq ans. Sur un CV, cela montre :", options: ["De vraies compétences comme organiser un planning et gérer des médicaments", "Rien d'utile", "Un trou à cacher", "Seulement la cuisine"], answer: 0, why: "Aider un proche construit de vraies compétences transférables." },
          { q: "L'IA cite une compétence que vous n'avez pas vraiment. Vous devez :", options: ["La garder", "Inventer un exemple", "En ajouter deux autres", "La retirer"], answer: 3, why: "Gardez seulement ce que vous pouvez défendre en entretien." },
          { q: "Qu'est-ce qui ne doit PAS aller sur votre CV ni dans l'IA ?", options: ["Vos compétences", "Votre numéro de sécurité sociale", "Vos intitulés de poste", "Vos formations"], answer: 1, why: "Le numéro de sécurité sociale et la date de naissance n'ont pas leur place sur un CV." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Postuler et passer l'entretien",
      lessons: [
        {
          title: "Adapter votre CV à une offre d'emploi",
          minutes: 5,
          goal: "Modifier votre CV pour qu'il corresponde à ce que demande une vraie offre d'emploi.",
          text: [
            "Les employeurs veulent voir que vous convenez à leur poste. Une offre d'emploi liste ce dont ils ont besoin. Quand votre CV utilise les mêmes compétences et les mêmes mots, la correspondance se voit plus facilement.",
            "Collez l'offre et votre CV dans l'IA et demandez : « Quelles compétences de cette offre est-ce que je montre déjà ? Propose des changements à mon CV pour qu'il corresponde mieux, en utilisant seulement des informations vraies. »",
            "Restez honnête. Adapter, c'est montrer vos vraies compétences avec les mots de l'employeur, pas ajouter des choses que vous n'avez pas faites."
          ],
          steps: ["Trouvez une vraie offre d'emploi à laquelle vous pourriez postuler.", "Collez l'offre et votre CV dans l'IA (sans numéros privés).", "Demandez quelles compétences correspondent et quoi changer, avec seulement des informations vraies.", "Mettez à jour votre CV et enregistrez une nouvelle copie au nom de ce poste."],
          words: [["Offre d'emploi", "une annonce d'un employeur qui décrit un poste et ce dont il a besoin."], ["Mots-clés", "les mots importants de l'offre d'emploi, comme « service client » ou « chariot élévateur »."]],
          slides: [
            { title: "Montrez la correspondance", bullets: ["L'offre liste ce dont ils ont besoin", "Utilisez les mêmes compétences et les mêmes mots"] },
            { title: "Demandez à l'IA", bullets: ["Collez l'offre et votre CV", "« Quelles compétences est-ce que je montre déjà ? »", "« Propose des changements vrais pour mieux correspondre. »"] },
            { title: "Restez honnête", bullets: ["Vos vraies compétences, leurs mots", "Une copie au nom de chaque poste"] }
          ],
          tryIt: "Trouvez une vraie offre d'emploi près de chez vous. Demandez à un assistant d'IA de la comparer à votre CV et de proposer des changements honnêtes. Enregistrez une nouvelle copie pour ce poste.",
          youCanNow: "adapter honnêtement votre CV à une vraie offre d'emploi."
        },
        {
          title: "S'entraîner pour l'entretien",
          minutes: 5,
          goal: "S'entraîner à répondre aux questions d'entretien courantes avec un assistant d'IA.",
          text: [
            "Les entretiens paraissent plus faciles avec de l'entraînement. Un assistant d'IA peut jouer le recruteur. Demandez : « Joue le rôle d'un recruteur pour ce poste. Pose-moi une question courante à la fois et attends ma réponse. Après chaque réponse, donne-moi un conseil. »",
            "Questions courantes : « Parlez-moi de vous. » « Pourquoi voulez-vous ce poste ? » « Racontez-moi une fois où vous avez résolu un problème. » Utilisez une courte histoire vraie : ce qui s'est passé, ce que vous avez fait, et comment ça s'est terminé.",
            "Dites vos réponses à voix haute, pas seulement dans votre tête. Si vous avez un trou dans votre parcours, préparez une phrase courte et honnête à ce sujet, puis parlez de ce que vous êtes prêt à faire maintenant."
          ],
          steps: ["Demandez à l'IA de jouer le recruteur pour votre offre d'emploi.", "Répondez à une question à la fois, à voix haute, puis tapez la réponse.", "Utilisez une courte histoire vraie : ce qui s'est passé, ce que vous avez fait, le résultat.", "Demandez un conseil après chaque réponse et réessayez."],
          words: [["Entretien", "une rencontre où un employeur vous pose des questions pour décider de vous embaucher ou non."], ["Trou dans le parcours", "une période où vous n'aviez pas d'emploi payé."]],
          slides: [
            { title: "L'IA peut jouer le recruteur", bullets: ["Une question à la fois", "Un conseil après chaque réponse"] },
            { title: "Questions courantes", bullets: ["« Parlez-moi de vous. »", "« Pourquoi voulez-vous ce poste ? »", "« Une fois où vous avez résolu un problème. »"] },
            { title: "Répondez avec une courte histoire", bullets: ["Ce qui s'est passé", "Ce que vous avez fait", "Comment ça s'est terminé"] },
            { title: "Entraînez-vous à voix haute", bullets: ["Dites-le, ne vous contentez pas d'y penser", "Trou dans le parcours : une phrase honnête, puis avancez"] }
          ],
          tryIt: "Demandez à un assistant d'IA de vous faire passer un entretien pour le poste de la leçon 4. Répondez à deux questions à voix haute, tapez vos réponses, et demandez un conseil pour chacune.",
          youCanNow: "vous entraîner aux réponses d'entretien avec l'IA et les améliorer grâce à ses retours."
        },
        {
          title: "Repérer les arnaques à l'emploi",
          minutes: 5,
          goal: "Reconnaître les signes d'une arnaque à l'emploi et savoir quoi faire.",
          text: [
            "Les arnaques à l'emploi visent les personnes qui ont besoin de travail. La Federal Trade Commission (FTC), l'agence américaine de protection des consommateurs, avertit que les employeurs honnêtes ne vous demanderont jamais de payer pour obtenir un emploi.",
            "Autres signaux d'alarme : on vous envoie un chèque et on vous demande de renvoyer une partie de l'argent ou d'acheter des cartes cadeaux ; on promet un gros salaire pour peu de travail ; le travail consiste à recevoir et réexpédier des colis ; ou l'offre arrive de nulle part.",
            "Si une offre paraît trop belle, arrêtez-vous. Cherchez vous-même l'entreprise, appelez son vrai numéro, ou demandez à votre American Job Center (ou au service de l'emploi de votre pays). Ne donnez jamais votre numéro de compte bancaire ou de sécurité sociale avant d'avoir confirmé que l'emploi est réel."
          ],
          steps: ["Ne payez jamais pour obtenir un emploi.", "N'encaissez jamais un chèque pour renvoyer de l'argent.", "Cherchez vous-même l'entreprise et appelez son vrai numéro.", "Demandez à votre American Job Center en cas de doute."],
          words: [["Arnaque au faux chèque", "un arnaqueur envoie un chèque, vous demande d'en renvoyer une partie, puis le chèque est refusé et vous devez l'argent à la banque."], ["FTC", "la Federal Trade Commission, l'agence américaine qui protège les consommateurs contre les arnaques."]],
          sources: [{ name: "FTC : Les arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Ne payez jamais pour un emploi", bullets: ["La FTC : un employeur honnête ne fait jamais payer", "Pas de frais pour un kit, une formation ou une garantie"] },
            { title: "Autres signaux d'alarme", bullets: ["Renvoyer de l'argent d'un chèque", "Gros salaire pour peu de travail", "Réexpédier des colis", "Des offres venues de nulle part"] },
            { title: "Protégez-vous", bullets: ["Cherchez vous-même l'entreprise", "Appelez son vrai numéro", "Demandez à votre service pour l'emploi"] }
          ],
          tryIt: "Tâche finale : avec votre CV adapté à une vraie offre, demandez à l'IA de vous poser trois questions d'entretien, répondez à chacune à voix haute, et demandez un conseil pour améliorer chaque réponse. Vérifiez si l'offre présente des signes d'arnaque.",
          youCanNow: "postuler à un vrai emploi avec un CV adapté, vous préparer à l'entretien et repérer les arnaques à l'emploi."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Postuler et passer l'entretien",
        questions: [
          { q: "Pourquoi adapter votre CV à une offre d'emploi ?", options: ["Pour que l'employeur voie que vous convenez au poste", "Pour le rallonger", "Pour ajouter des compétences que vous n'avez pas", "Ce n'est pas utile"], answer: 0, why: "Adapter montre votre vraie correspondance avec les mots de l'employeur." },
          { q: "Pour adapter votre CV, vous devez :", options: ["Ajouter des emplois que vous n'avez jamais eus", "Copier l'offre mot pour mot", "Utiliser vos vraies compétences avec les mots de l'employeur", "Retirer toute votre expérience"], answer: 2, why: "Le but est une adaptation honnête." },
          { q: "Quelle est une bonne façon de répondre à « Racontez-moi une fois où vous avez résolu un problème » ?", options: ["« Je n'ai jamais de problèmes. »", "Une longue liste d'emplois", "« Je ne sais pas. »", "Une courte histoire vraie : ce qui s'est passé, ce que vous avez fait, comment ça s'est terminé"], answer: 3, why: "Une courte histoire montre clairement votre compétence." },
          { q: "Une « entreprise » vous envoie un chèque et vous demande d'acheter des cartes cadeaux avec une partie. C'est :", options: ["Une tâche normale du premier jour", "Une arnaque au faux chèque", "Une prime", "Une formation"], answer: 1, why: "La FTC la cite comme une arnaque à l'emploi courante." },
          { q: "Vous ne savez pas si une offre d'emploi est réelle. Que faites-vous ?", options: ["Chercher vous-même l'entreprise et appeler son vrai numéro", "Envoyer votre numéro de compte pour vérifier", "Payer les frais pour savoir", "Accepter tout de suite"], answer: 0, why: "Vérifier par vous-même vous protège." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour l'emploi et la préparation au travail",
    questions: [
      { q: "Les American Job Centers aident pour :", options: ["Les prêts auto", "La recherche d'emploi, l'orientation et l'embauche", "Seulement les déclarations d'impôts", "L'achat d'une maison"], answer: 1, why: "Ce sont des centres publics pour l'emploi." },
      { q: "CareerOneStop est géré avec :", options: ["Une entreprise de jeux vidéo", "Une banque", "Le ministère du Travail des États-Unis", "Un réseau social"], answer: 2, why: "C'est un site du ministère du Travail." },
      { q: "Quel numéro aide à trouver les centres pour l'emploi aux États-Unis ?", options: ["1-877-US-2JOBS", "911", "Un numéro d'une publicité surgissante", "Le numéro de votre banque"], answer: 0, why: "Le 1-877-US-2JOBS est la ligne d'aide à l'emploi du ministère du Travail." },
      { q: "Quelle expérience peut compter comme compétence professionnelle ?", options: ["Seulement les emplois de bureau", "Seulement les emplois avec diplôme", "Rien de non payé", "L'aide à un proche, le bénévolat, les petits boulots et les emplois payés"], answer: 3, why: "Le travail non payé et informel construit de vraies compétences." },
      { q: "Une compétence transférable est :", options: ["Une compétence qui transfère de l'argent", "Une compétence acquise dans une partie de la vie qui aide dans un autre métier", "Un abonnement de bus", "Un type de CV"], answer: 1, why: "Elle passe d'un contexte à un autre." },
      { q: "Quelles compétences garder sur votre liste ?", options: ["Celles dont vous pouvez donner un vrai exemple", "Toutes celles que l'IA propose", "Celles qui impressionnent", "Celles du CV d'un ami"], answer: 0, why: "Vous devez pouvoir les défendre." },
      { q: "Un bon CV est :", options: ["De cinq pages", "Plein d'images", "D'une page, simple et propre", "Écrit à la main"], answer: 2, why: "Court et clair, c'est le plus facile pour les employeurs." },
      { q: "Qu'est-ce qui ne doit jamais aller sur un CV ?", options: ["Les compétences", "L'expérience", "La formation", "Le numéro de sécurité sociale"], answer: 3, why: "Les numéros privés restent hors des CV." },
      { q: "Pourquoi enregistrer votre CV en PDF ?", options: ["Il reste identique sur tous les appareils", "Il devient plus long", "Il ajoute de la couleur", "Les employeurs le paient"], answer: 0, why: "Le PDF fige la mise en page." },
      { q: "Où écrire un CV gratuitement ?", options: ["Dans un studio de design payant", "Dans Google Docs ou Word sur le web", "Dans un SMS", "Sur une calculatrice"], answer: 1, why: "Ce sont deux outils de documents gratuits." },
      { q: "Les mots-clés sont :", options: ["Des mots de passe", "Les clés de votre maison", "Les mots importants de l'offre d'emploi", "Des codes bancaires"], answer: 2, why: "Les utiliser montre la correspondance." },
      { q: "Une bonne consigne d'adaptation demande à l'IA de :", options: ["Inventer de l'expérience", "Vous donner un nouveau nom", "Faire un CV de trois pages", "Proposer des changements vrais pour mieux correspondre"], answer: 3, why: "L'adaptation honnête est la compétence visée." },
      { q: "Vous postulez à deux postes différents. Vous devez :", options: ["Enregistrer une copie du CV au nom de chaque poste", "Utiliser le même CV pour tout sans changement", "Ne pas postuler", "Copier chaque offre dans votre CV"], answer: 0, why: "Chaque poste reçoit sa propre copie adaptée." },
      { q: "Comment l'IA peut-elle vous aider à préparer un entretien ?", options: ["Elle va à l'entretien à votre place", "Elle joue le recruteur et donne des conseils", "Elle garantit l'emploi", "Elle appelle l'employeur"], answer: 1, why: "S'entraîner avec des retours donne confiance." },
      { q: "Entraînez-vous aux réponses d'entretien :", options: ["Seulement dans votre tête", "Jamais", "À voix haute", "Seulement par écrit"], answer: 2, why: "Les dire à voix haute prépare au vrai entretien." },
      { q: "Une bonne histoire de réponse contient :", options: ["Seulement le problème", "L'histoire de quelqu'un d'autre", "Rien de précis", "Ce qui s'est passé, ce que vous avez fait, et comment ça s'est terminé"], answer: 3, why: "Cette forme montre votre compétence." },
      { q: "Si vous avez un trou dans votre parcours, préparez :", options: ["Une phrase courte et honnête, puis ce que vous êtes prêt à faire maintenant", "Une façon de le cacher", "De longues excuses", "Un emploi inventé"], answer: 0, why: "Honnête et bref, puis tourné vers l'avenir." },
      { q: "Selon la FTC, les employeurs honnêtes :", options: ["Demandent de petits frais", "Ne vous demandent jamais de payer pour obtenir un emploi", "Veulent des cartes cadeaux", "Paient avec des chèques dont il faut renvoyer une partie"], answer: 1, why: "Payer pour un emploi est un signe d'arnaque." },
      { q: "Quel emploi est une arnaque courante ?", options: ["Caissier dans un magasin connu", "Aide à la bibliothèque", "Recevoir et réexpédier des colis depuis chez soi", "Chauffeur de bus scolaire"], answer: 2, why: "Les emplois de réexpédition sont une arnaque connue." },
      { q: "Quand donner votre numéro de compte bancaire à un nouvel employeur ?", options: ["Dans le premier SMS", "Pour obtenir l'entretien", "Avant de voir une offre d'emploi", "Seulement après avoir confirmé que l'emploi est réel"], answer: 3, why: "Confirmez d'abord que l'emploi est réel." }
    ]
  }
};
