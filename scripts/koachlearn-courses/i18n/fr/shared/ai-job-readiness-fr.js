"use strict";

// Koach Learn course (shared), French translation of "AI for Job Readiness and Career Development". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-job-readiness-fr",
  lang: "fr",
  translationOf: "ai-job-readiness",
  category: "Re-Entry",
  name: "L'IA pour se préparer à l'emploi et développer sa carrière",
  skills: "Trouver ses compétences, Rédiger un CV avec l'IA, L'adapter à une offre d'emploi, Rédiger une lettre de motivation, S'entraîner aux entretiens avec l'IA, Chercher un emploi en sécurité",
  outcome: "utiliser un assistant d'IA gratuit pour transformer votre expérience en un CV d'une page adapté à une vraie offre d'emploi, rédiger une courte lettre de motivation, vous entraîner à répondre à voix haute aux questions d'entretien, et postuler en sécurité en évitant les arnaques à l'emploi.",
  about: [
    "Trouver un emploi demande un CV, une candidature, un entretien et beaucoup de confiance en soi. Les assistants d'IA comme ChatGPT, Microsoft Copilot et Google Gemini peuvent aider à chaque étape, surtout si vous avez des trous dans votre parcours, un casier judiciaire, ou une expérience qui ne ressemble pas à un CV « classique ».",
    "Ce cours s'adresse aux personnes qui sortent de prison, aux demandeurs d'emploi suivis par des programmes d'insertion, aux personnes en reconversion et aux jeunes qui cherchent un premier emploi. L'expérience acquise en travaillant en détention, à l'armée, en s'occupant d'un proche, en faisant du bénévolat ou des petits boulots compte entièrement.",
    "Vous construirez votre propre kit emploi étape par étape. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant », un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Gardez les détails privés hors de l'IA : pas de numéro de sécurité sociale, de pièce d'identité, de dossier ou d'écrou."
  ],
  finalTask: "Trouvez une vraie offre d'emploi à laquelle vous pourriez postuler. Avec un assistant d'IA, construisez un CV d'une page adapté à cette offre, une lettre de motivation de moins de 200 mots et des réponses à cinq questions d'entretien probables, dont une sur un trou dans votre parcours ou votre passé si cela vous concerne. Entraînez-vous à dire les réponses à voix haute, comparez l'offre aux signes d'arnaque, et postulez ou gardez la candidature prête à envoyer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et cherchent du travail, souvent avec des trous dans leur parcours professionnel et un casier judiciaire à expliquer. Beaucoup ont une vraie expérience de travail acquise en prison, dans l'armée, en s'occupant d'un proche ou dans du travail informel.",
    startingPoint: "Ils savent appeler et envoyer des SMS avec un téléphone simple ; certains ont un compte e-mail et ont essayé un assistant d'IA. Beaucoup n'ont pas de CV à jour, n'ont pas passé d'entretien récemment et ne savent pas comment parler de leur passé.",
    gap: "Un emploi stable est l'un des meilleurs appuis pour réussir son retour, mais les candidatures se font maintenant en ligne et les employeurs attendent un CV adapté et des réponses d'entretien assurées. Les apprenants doivent transformer leur vraie expérience en documents de candidature avec l'aide de l'IA, répondre honnêtement aux questions sur les trous dans leur parcours, et éviter les arnaques à l'emploi qui visent les personnes qui ont vite besoin de travailler.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : parfois seulement un téléphone simple ou un ordinateur de bibliothèque ou de service de l'emploi à temps limité",
      "Temps : des leçons de 5 minutes qui s'insèrent entre les rendez-vous et le travail",
      "Vie privée : aucun numéro de sécurité sociale, de dossier ou d'écrou, ni coordonnées bancaires dans les outils d'IA ou sur un CV",
      "Les règles sur le casier varient selon l'État et la ville ; les apprenants se renseignent auprès du service du travail de leur État ou d'une association d'aide juridique à la réinsertion, et respectent leurs propres conditions de libération conditionnelle ou de mise à l'épreuve"
    ],
    prerequisites: "Aucun. « Découvrir l'IA et prendre confiance avec le numérique » est un premier cours utile pour les apprenants qui découvrent l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre expérience de travail, de formation, de bénévolat et de vie, en détention ou dehors", action: "lister vos compétences professionnelles avec les mots des employeurs, avec un exemple vrai pour chacune", standard: "en ne gardant que les compétences qui sont vraies pour vous" },
    { id: "O2", condition: "À partir d'une vraie offre d'emploi et d'un modèle gratuit", action: "créer un CV d'une page adapté à l'offre, avec des points qui commencent par un verbe d'action et des chiffres", standard: "avec chaque mot vrai et sans numéro de sécurité sociale, date de naissance ni photo" },
    { id: "O3", condition: "Pour la même offre d'emploi", action: "rédiger une lettre de motivation en trois courts paragraphes", standard: "de moins de 200 mots, qui vous ressemble quand on la lit à voix haute" },
    { id: "O4", condition: "Avec un assistant d'IA comme recruteur d'entraînement", action: "répondre à voix haute à cinq questions d'entretien courantes, avec la méthode STAR pour les questions « Parlez-moi d'une fois où... »", standard: "sans lire vos notes" },
    { id: "O5", condition: "Si vous avez un trou dans votre parcours ou un casier", action: "préparer une réponse courte et honnête qui se tourne vers les raisons pour lesquelles vous êtes prêt maintenant", standard: "en n'utilisant que des faits que vous êtes à l'aise de partager, dite calmement à voix haute" },
    { id: "O6", condition: "Quand vous cherchez un emploi et postulez", action: "trouver des offres sur des sites fiables, suivre chaque candidature et vérifier chaque offre pour repérer les signes d'arnaque", standard: "sans donner de numéro de compte bancaire ou de sécurité sociale avant une vraie offre d'emploi" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer vos documents de candidature",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver les compétences que vous avez déjà",
          minutes: 5,
          goal: "Transformer votre expérience de vie et de travail en une liste de compétences professionnelles.",
          text: [
            "La plupart des gens ont plus de compétences qu'ils ne le pensent. Travailler en cuisine, à la blanchisserie ou à l'atelier d'entretien en détention, servir dans l'armée, s'occuper d'un proche, faire du bénévolat à l'église, couper les cheveux ou réparer les voitures des voisins : tout cela développe des compétences que les employeurs recherchent.",
            "Demandez à un assistant d'IA de vous aider à les nommer : « J'ai travaillé 3 ans dans une grande cuisine qui préparait des repas pour 500 personnes par jour et j'ai formé les nouveaux. Quelles compétences professionnelles cela montre-t-il ? Utilise les mots des employeurs. » Vous pourriez obtenir : hygiène alimentaire, travail sous pression, formation des autres, gestion des stocks, travail d'équipe.",
            "Faites une liste principale de compétences avec un exemple pour chacune. Ne laissez pas l'IA ajouter des compétences que vous n'avez pas vraiment. Tout ce qui est sur votre CV doit être vrai, car on peut vous interroger dessus en entretien."
          ],
          steps: ["Listez chaque emploi, formation, rôle bénévole et responsabilité que vous avez eus, en détention ou dehors.", "Pour chacun, demandez à l'IA quelles compétences il montre, avec les mots des employeurs.", "Ne gardez que les compétences vraies pour vous.", "Écrivez un vrai exemple pour chaque compétence."],
          words: [["Compétence transférable", "une compétence acquise dans un contexte qui sert dans un autre."], ["Savoir-être", "une compétence relationnelle comme le travail d'équipe, la fiabilité ou la communication."], ["Savoir-faire technique", "une capacité précise comme conduire un chariot élévateur, cuisiner ou utiliser Excel."]],
          slides: [
            { title: "Toute expérience compte", bullets: ["Travail en détention ou dehors", "Armée, aide à un proche, bénévolat", "Petits boulots pour les voisins"] },
            { title: "Demander à l'IA de nommer les compétences", bullets: ["Décrire ce que vous avez fait et pour combien de personnes", "Demander les mots des employeurs"] },
            { title: "Rester vrai", bullets: ["Retirer les compétences que vous n'avez pas", "Un vrai exemple pour chacune", "On peut vous interroger sur tout"] }
          ],
          tryIt: "Décrivez à un assistant d'IA trois choses que vous avez faites et demandez-lui quelles compétences professionnelles elles montrent. Écrivez une liste principale d'au moins huit compétences vraies, chacune avec un exemple.",
          youCanNow: "transformer votre expérience en une liste vraie de compétences professionnelles, dans le langage des employeurs.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une compétence transférable ?", options: ["Une compétence qui ne sert que dans un seul emploi", "Une compétence acquise dans un contexte qui sert dans un autre", "Une compétence qu'on paie pour apprendre", "Une compétence que seuls les chefs ont"], answer: 1, why: "Les compétences transférables, comme former les autres, passent d'un contexte à un autre." },
            { objective: "O1", q: "Pendant des années, vous avez réparé les voitures de vos voisins sans être payé. Que faites-vous de cette expérience ?", options: ["La laisser de côté : ce n'était pas un vrai emploi", "Dire que vous étiez mécanicien diplômé", "Attendre qu'un recruteur vous pose la question", "Demander à l'IA quelles compétences elle montre et lister les vraies avec un exemple"], answer: 3, why: "Le travail informel donne de vraies compétences ; listez seulement celles qui sont vraies, avec un exemple." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rédiger un CV d'une page avec l'IA",
          minutes: 6,
          goal: "Construire un CV clair d'une page, adapté à une vraie offre d'emploi.",
          text: [
            "Un CV est un résumé d'une page de vos compétences, de votre expérience et de vos formations. Une présentation simple marche le mieux : nom et coordonnées, un résumé de deux lignes, compétences, expérience, et études ou formations. Utilisez un modèle gratuit dans Google Docs ou Microsoft Word.",
            "Adaptez-le à chaque offre. Collez l'offre d'emploi (pas vos informations privées) dans l'IA et demandez : « Quelles compétences et quels mots-clés cette offre recherche-t-elle ? Lesquelles de mes compétences correspondent ? » Demandez-lui ensuite d'écrire, à partir de vos exemples, des points qui commencent par un verbe d'action et contiennent des chiffres : « Préparé chaque jour des repas pour 500 personnes en respectant les normes d'hygiène alimentaire. »",
            "Pour un travail fait en détention, vous pouvez indiquer le type d'établissement ou l'employeur comme le conseille votre conseiller de réinsertion, par exemple l'administration pénitentiaire de l'État, et mettre l'accent sur les compétences. Ne mettez jamais votre numéro de sécurité sociale, votre date de naissance ou une photo sur un CV destiné aux États-Unis ; ailleurs, renseignez-vous sur les usages du pays."
          ],
          steps: ["Ouvrez un modèle de CV gratuit dans Google Docs ou Word.", "Collez l'offre dans l'IA et demandez quels mots-clés elle recherche.", "Demandez à l'IA d'écrire, à partir de vos vrais exemples, des points avec verbes d'action et chiffres.", "Remplissez le modèle et tenez sur une page.", "Vérifiez chaque mot : vérité et orthographe."],
          words: [["CV", "un résumé d'une page de vos compétences, de votre expérience et de vos formations."], ["Mot-clé", "un mot important de l'offre que les employeurs et les logiciels recherchent."], ["Adapter", "modifier votre CV pour qu'il corresponde à un emploi précis."]],
          slides: [
            { title: "Une page, une présentation simple", bullets: ["Nom, coordonnées, résumé de deux lignes", "Compétences et expérience", "Études ou formations"] },
            { title: "Adapter à l'offre", bullets: ["Coller l'offre dans l'IA", "Trouver les mots-clés qui correspondent", "Verbes d'action et chiffres"] },
            { title: "Rester prudent et vrai", bullets: ["Pas de sécurité sociale, date de naissance ni photo (États-Unis)", "Demander au conseiller comment présenter le travail en détention", "Vérifier chaque mot"] }
          ],
          tryIt: "Trouvez une vraie offre d'emploi. Utilisez l'IA pour trouver ses mots-clés et écrire cinq points à partir de vos vrais exemples. Mettez-les dans un modèle de CV d'une page.",
          youCanNow: "construire avec l'aide de l'IA un CV d'une page adapté à une vraie offre d'emploi.",
          quickCheck: [
            { objective: "O2", q: "Que devez-vous coller dans l'IA pour adapter votre CV ?", options: ["L'offre d'emploi", "Votre numéro de sécurité sociale", "Votre numéro de dossier", "Vos coordonnées bancaires"], answer: 0, why: "Collez l'offre d'emploi, pas vos informations privées, pour que l'IA trouve les mots clés." },
            { objective: "O2", q: "Votre CV fait une page et demie pour un premier emploi. Que faites-vous ?", options: ["Mettre une toute petite police", "Ajouter des pages", "Le réduire à une page avec les points les plus forts qui correspondent à l'offre", "Ajouter une photo"], answer: 2, why: "La plupart des CV pour un premier emploi doivent tenir sur une page, centrée sur ce que demande l'offre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rédiger une courte lettre de motivation",
          minutes: 5,
          goal: "Rédiger une lettre de motivation de moins de 200 mots qui vous ressemble.",
          text: [
            "Une lettre de motivation est une courte lettre qui dit pourquoi vous voulez cet emploi et pourquoi vous convenez. Beaucoup d'offres n'en demandent pas, mais une bonne lettre peut vous distinguer.",
            "Utilisez trois courts paragraphes : pourquoi cet emploi et cette entreprise, deux compétences qui correspondent à leurs besoins avec un exemple rapide, et un remerciement avec la façon de vous joindre. Demandez à l'IA : « Écris une lettre de motivation de moins de 200 mots pour cette offre en utilisant ces deux compétences et exemples. Aimable, confiante, avec des mots simples. »",
            "Ensuite, faites-la vôtre. Changez toute expression que vous ne diriez jamais. Ajoutez un détail vrai sur la raison pour laquelle vous voulez y travailler. Lisez-la à voix haute : si elle ne vous ressemble pas, changez-la encore."
          ],
          steps: ["Paragraphe 1 : pourquoi cet emploi et cette entreprise.", "Paragraphe 2 : deux compétences qui correspondent, avec des exemples.", "Paragraphe 3 : remerciements et comment vous joindre.", "Demandez à l'IA un brouillon de moins de 200 mots.", "Corrigez-la pour qu'elle vous ressemble, et lisez-la à voix haute."],
          words: [["Lettre de motivation", "une courte lettre envoyée avec un CV qui explique pourquoi vous convenez au poste."]],
          slides: [
            { title: "Trois courts paragraphes", bullets: ["Pourquoi cet emploi", "Deux compétences qui correspondent, avec exemples", "Remerciements et contact"] },
            { title: "Laisser l'IA rédiger", bullets: ["Moins de 200 mots", "Aimable, confiante, mots simples"] },
            { title: "La faire vôtre", bullets: ["Changer ce que vous ne diriez jamais", "Ajouter un détail vrai", "La lire à voix haute"] }
          ],
          tryIt: "Rédigez avec l'IA une lettre de motivation pour votre offre, de moins de 200 mots, et corrigez-la jusqu'à ce qu'elle vous ressemble quand vous la lisez à voix haute.",
          youCanNow: "rédiger une lettre de motivation courte et personnelle avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O3", q: "Que met-on dans le deuxième paragraphe de la lettre de motivation ?", options: ["Votre date de naissance", "Vos anciens salaires", "Seulement un remerciement", "Deux compétences qui correspondent au poste, avec un court exemple"], answer: 3, why: "Le paragraphe 2 donne deux compétences qui correspondent au poste, avec des exemples." },
            { objective: "O3", q: "La lettre de l'IA dit : « Je suis extrêmement enthousiaste à l'idée de mobiliser mes synergies. » Que faites-vous ?", options: ["La garder : ça fait sérieux", "La remplacer par des mots que vous diriez vraiment", "La rallonger", "L'envoyer sans la lire"], answer: 1, why: "Changez toute phrase que vous ne diriez jamais pour que la lettre vous ressemble." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer vos documents de candidature",
        questions: [
          { objective: "O1", q: "Vous avez formé les nouveaux en cuisine en détention. Quelle compétence cela montre-t-il ?", options: ["Conduite de chariot élévateur", "Comptabilité", "Former les autres", "Aucune"], answer: 2, why: "Former les nouveaux est une compétence transférable." },
          { objective: "O1", q: "L'IA ajoute « parle couramment espagnol » à vos compétences, mais ce n'est pas le cas. Que faites-vous ?", options: ["Le retirer", "Le garder", "Apprendre l'espagnol avant l'entretien", "Ajouter d'autres langues"], answer: 0, why: "Tout ce qui est sur un CV doit être vrai." },
          { objective: "O2", q: "Qu'est-ce qui ne doit PAS figurer sur un CV destiné aux États-Unis ?", options: ["Vos compétences", "Votre expérience professionnelle", "Votre numéro de téléphone", "Votre numéro de sécurité sociale"], answer: 3, why: "Les numéros privés n'ont pas leur place sur un CV." },
          { objective: "O2", q: "Que veut dire adapter un CV ?", options: ["Coudre des vêtements", "Le modifier pour qu'il corresponde à une offre précise", "Le faire tenir sur trois pages", "Utiliser le même CV pour toutes les offres"], answer: 1, why: "Un CV adapté reprend les mots-clés de l'offre." },
          { objective: "O3", q: "Quelle longueur doit avoir la lettre de motivation dans ce cours ?", options: ["Cinq pages", "Moins de 200 mots", "Un mot", "Plus de 1 000 mots"], answer: 1, why: "Les lettres courtes sont lues." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Entretiens et recherche d'emploi",
      lessons: [
        {
          objectives: ["O4"],
          title: "S'entraîner aux entretiens avec l'IA",
          minutes: 6,
          goal: "Utiliser l'IA comme recruteur d'entraînement et améliorer vos réponses.",
          text: [
            "L'IA peut jouer le rôle d'un recruteur. Demandez : « Tu recrutes pour ce poste [collez l'offre]. Pose-moi une question d'entretien à la fois. Après ma réponse, dis-moi une chose que j'ai bien faite et une chose à améliorer. » Beaucoup d'applications d'IA permettent de parler à voix haute, ce qui est un excellent entraînement.",
            "Utilisez la méthode STAR pour les questions du type « Parlez-moi d'une fois où... » : Situation, Tâche, Action, Résultat. « En cuisine (situation), nous devions servir 500 repas en une heure (tâche). J'ai organisé une chaîne de préparation et formé deux nouveaux (action). Nous avons fini à l'heure tous les jours ce mois-là (résultat). »",
            "Préparez cinq questions courantes : parlez-moi de vous, pourquoi voulez-vous ce poste, une qualité, une fois où vous avez résolu un problème, et avez-vous des questions pour nous. Entraînez-vous jusqu'à pouvoir répondre sans lire."
          ],
          steps: ["Collez l'offre et demandez à l'IA de vous interroger une question à la fois.", "Répondez à voix haute ou par écrit.", "Utilisez STAR pour les questions « Parlez-moi d'une fois où... ».", "Demandez un point fort et un point à améliorer après chaque réponse.", "Entraînez-vous sur cinq questions jusqu'à ne plus avoir besoin de notes."],
          words: [["Méthode STAR", "une façon de répondre : Situation, Tâche, Action, Résultat."], ["Entretien blanc", "un entretien d'entraînement."]],
          slides: [
            { title: "L'IA comme recruteur d'entraînement", bullets: ["Une question à la fois", "Retour : un point fort, un point à améliorer", "S'entraîner à voix haute si possible"] },
            { title: "Réponses STAR", bullets: ["Situation et Tâche", "Action : ce que vous avez fait", "Résultat : ce qui s'est passé"] },
            { title: "Cinq questions à préparer", bullets: ["Parlez-moi de vous ; pourquoi ce poste", "Une qualité ; un problème résolu", "Vos questions pour eux"] }
          ],
          tryIt: "Faites un entretien blanc avec l'IA pour votre offre. Répondez à cinq questions à voix haute en utilisant STAR quand c'est adapté, et notez les retours.",
          youCanNow: "vous entraîner aux entretiens avec l'IA et répondre avec la méthode STAR.",
          quickCheck: [
            { objective: "O4", q: "Dans la méthode STAR, que veut dire « Résultat » ?", options: ["Votre intitulé de poste", "Le problème que vous aviez", "Ce qui s'est passé grâce à ce que vous avez fait", "La question qu'on vous a posée"], answer: 2, why: "Le résultat, c'est la conséquence de votre action, comme finir à l'heure tous les jours." },
            { objective: "O4", q: "Vous ne pouvez répondre à « Parlez-moi de vous » qu'en lisant vos notes. Que faites-vous ?", options: ["Vous entraîner à voix haute avec l'IA jusqu'à pouvoir répondre sans notes", "Sauter cette question pendant l'entretien", "Apprendre par cœur un long discours écrit par l'IA", "Apporter vos notes et les lire"], answer: 0, why: "Entraînez-vous à voix haute jusqu'à pouvoir répondre sans lire." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Parler d'un trou dans le parcours ou d'un casier avec assurance",
          minutes: 5,
          goal: "Préparer une réponse courte, honnête et tournée vers l'avenir sur un trou dans votre parcours ou votre passé.",
          text: [
            "Les trous dans un parcours arrivent : prison, maladie, aide à un proche, mutations militaires, licenciements. Les employeurs veulent surtout savoir que vous êtes prêt maintenant. Préparez une réponse courte : soyez honnête, restez bref, montrez ce que vous avez appris ou fait, et revenez à la raison pour laquelle vous êtes prêt pour ce poste.",
            "Exemple : « J'ai fait une erreur et j'ai purgé une peine. Pendant ce temps, j'ai obtenu mon certificat d'hygiène alimentaire et j'ai dirigé la chaîne en cuisine. Je suis prêt à apporter cette rigueur ici. » Demandez à l'IA de vous aider à raccourcir et à stabiliser votre réponse, mais n'utilisez que les faits que vous êtes à l'aise de partager, sans numéros de dossier ni détails.",
            "Connaissez vos soutiens. Aux États-Unis, beaucoup d'États et de villes ont des règles « fair chance » ou « ban the box » qui limitent le moment où l'employeur peut poser des questions sur le casier ; renseignez-vous auprès du service du travail de votre État ou d'une association d'aide juridique à la réinsertion. Le Federal Bonding Program offre gratuitement aux employeurs qui embauchent des personnes en difficulté une garantie contre la malhonnêteté d'un salarié, pendant les six premiers mois. Certains employeurs peuvent aussi avoir droit au Work Opportunity Tax Credit (WOTC, un crédit d'impôt à l'embauche) ; consultez la page WOTC de l'IRS (le fisc américain) pour sa situation actuelle et les publics concernés. Hors des États-Unis, demandez à votre conseiller quelles aides existent."
          ],
          steps: ["Écrivez le fait honnête en une phrase.", "Ajoutez ce que vous avez appris ou fait depuis.", "Ajoutez pourquoi vous êtes prêt pour ce poste.", "Demandez à l'IA de la rendre plus courte et plus posée.", "Dites-la à voix haute jusqu'à vous sentir calme."],
          words: [["Embauche « fair chance »", "des règles ou pratiques qui donnent aux personnes ayant un casier une chance équitable avant qu'on parle de leur passé."], ["Garantie de fidélité (fidelity bond)", "une assurance qui protège l'employeur contre les pertes dues à la malhonnêteté d'un salarié."]],
          slides: [
            { title: "Une réponse courte et solide", bullets: ["Honnête et brève", "Ce que vous avez appris ou fait", "Pourquoi vous êtes prêt maintenant"] },
            { title: "Utiliser l'IA avec prudence", bullets: ["Raccourcir et poser vos mots", "Seulement les faits que vous choisissez de partager", "Pas de numéro de dossier"] },
            { title: "Connaître vos soutiens (États-Unis)", bullets: ["Règles « fair chance » : vérifier dans votre État", "Federal Bonding Program : garanties gratuites, 6 premiers mois", "WOTC : voir la page de l'IRS pour la situation actuelle"] }
          ],
          sources: [{ name: "The Federal Bonding Program", url: "https://bonds4jobs.com/" }, { name: "Ministère du Travail des États-Unis : Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }, { name: "IRS : Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" }],
          tryIt: "Écrivez une réponse de trois phrases sur un trou dans votre parcours ou votre passé (le vôtre, ou un exemple). Utilisez l'IA pour la resserrer, puis dites-la trois fois à voix haute.",
          youCanNow: "répondre honnêtement et avec assurance aux questions sur un trou dans votre parcours ou un casier, et citer des aides possibles.",
          quickCheck: [
            { objective: "O5", q: "Que veulent surtout savoir les employeurs quand ils posent une question sur un trou dans le parcours ?", options: ["Chaque détail de votre affaire", "Votre numéro de dossier", "Que vous êtes prêt à travailler maintenant", "Qui était votre avocat"], answer: 2, why: "Les employeurs veulent surtout savoir que vous êtes prêt maintenant : restez bref et tourné vers l'avenir." },
            { objective: "O5", q: "Un recruteur vous pose une question sur votre casier. Quelle réponse est la meilleure ?", options: ["« Ça ne vous regarde pas. »", "Une longue histoire avec tous les détails", "« Je n'ai jamais eu de problème. »", "« J'ai fait une erreur et j'ai purgé ma peine. J'y ai obtenu mon certificat d'hygiène alimentaire, et je suis prêt à travailler. »"], answer: 3, why: "Honnête, brève et centrée sur ce que vous avez appris et pourquoi vous êtes prêt." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Chercher et postuler en sécurité",
          minutes: 5,
          goal: "Trouver de vraies offres, suivre vos candidatures et éviter les arnaques à l'emploi.",
          text: [
            "Cherchez des emplois sur des sites fiables, sur les sites des entreprises et, aux États-Unis, dans votre American Job Center local, qui offre une aide gratuite pour la recherche d'emploi et la formation (ailleurs, le service public de l'emploi de votre pays). Votre programme de réinsertion, votre service pour anciens militaires ou votre programme d'insertion peut avoir des pistes d'emploi et des employeurs qui embauchent des personnes ayant un casier.",
            "Suivez chaque candidature dans un tableau simple : entreprise, poste, date de candidature, contact, date de relance. Relancez environ une semaine plus tard par un court e-mail poli. L'IA peut le rédiger.",
            "Méfiez-vous des arnaques à l'emploi. La FTC (l'agence américaine de protection des consommateurs) prévient : les employeurs honnêtes ne vous font pas payer pour obtenir un emploi ; méfiez-vous d'un gros salaire pour peu de travail, d'une demande d'encaisser un chèque et de renvoyer une partie de l'argent, de la réexpédition de colis, ou du paiement d'avance d'une formation ou d'un certificat. Ne donnez jamais de numéro de compte bancaire ou de sécurité sociale avant d'avoir une vraie offre d'une vraie entreprise. Signalez les arnaques sur ReportFraud.ftc.gov."
          ],
          steps: ["Cherchez sur des sites fiables, les pages des entreprises et votre American Job Center (ou service de l'emploi).", "Suivez chaque candidature dans un tableau.", "Relancez environ une semaine plus tard.", "Comparez chaque offre aux signes d'arnaque.", "Signalez les arnaques sur ReportFraud.ftc.gov."],
          words: [["American Job Center", "un bureau gratuit financé par le gouvernement américain qui aide à chercher un emploi et à se former."], ["Arnaque à l'emploi", "une fausse offre d'emploi faite pour voler de l'argent ou des informations."]],
          slides: [
            { title: "Où chercher", bullets: ["Sites d'emploi fiables et pages des entreprises", "American Job Centers ou service de l'emploi", "Programmes de réinsertion, anciens militaires, insertion"] },
            { title: "Suivre et relancer", bullets: ["Entreprise, poste, date, contact", "Relancer après environ une semaine"] },
            { title: "Signes d'arnaque à l'emploi (FTC)", bullets: ["On vous fait payer pour obtenir l'emploi", "Encaisser un chèque et renvoyer de l'argent", "Réexpédier des colis ; gros salaire pour peu de travail"] }
          ],
          sources: [{ name: "FTC : arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "CareerOneStop (ministère du Travail des États-Unis) : trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tâche finale : finalisez votre CV adapté, votre lettre de motivation et vos cinq réponses d'entretien travaillées pour votre vraie offre. Comparez l'offre aux signes d'arnaque, ajoutez-la à un tableau de suivi, et postulez ou gardez-la prête à envoyer.",
          youCanNow: "construire un kit emploi avec l'IA, passer un entretien avec assurance et postuler en sécurité.",
          quickCheck: [
            { objective: "O6", q: "Où pouvez-vous obtenir une aide gratuite pour chercher un emploi et vous former ?", options: ["Dans un American Job Center", "Sur un site qui fait payer pour postuler", "Par un SMS d'un numéro inconnu", "Dans un emploi qui vous demande de réexpédier des colis"], answer: 0, why: "Les American Job Centers offrent une aide gratuite pour chercher un emploi et se former." },
            { objective: "O6", q: "Un « emploi » propose un gros salaire pour peu de travail et demande votre compte bancaire avant tout entretien. Que faites-vous ?", options: ["Le donner pour commencer plus vite", "Envoyer seulement la moitié du numéro de compte", "Ne pas le donner ; vérifier les signes d'arnaque et la signaler", "Payer d'abord de petits frais"], answer: 2, why: "Ne donnez jamais votre compte bancaire avant une vraie offre : il y a ici des signes d'arnaque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Entretiens et recherche d'emploi",
        questions: [
          { objective: "O4", q: "Que veut dire STAR ?", options: ["Start, Talk, Ask, Rest", "Skills, Training, Awards, References", "Sourire, Remercier, Répondre, Revenir", "Situation, Tâche, Action, Résultat"], answer: 3, why: "STAR structure les réponses aux questions « Parlez-moi d'une fois où... »." },
          { objective: "O5", q: "Une bonne réponse sur un trou dans le parcours ou un casier est :", options: ["Honnête, brève et centrée sur le fait que vous êtes prêt maintenant", "Une longue histoire avec tous les détails", "Un mensonge", "Un refus impoli de répondre"], answer: 0, why: "Des réponses courtes, honnêtes et tournées vers l'avenir marchent le mieux." },
          { objective: "O5", q: "Qu'offre le Federal Bonding Program ?", options: ["Des voitures gratuites", "De l'argent aux demandeurs d'emploi", "Des garanties de fidélité gratuites aux employeurs qui embauchent des personnes en difficulté", "Une libération de prison"], answer: 2, why: "Il donne aux employeurs des garanties gratuites pour les six premiers mois." },
          { objective: "O6", q: "Une offre d'emploi vous demande de payer 150 $ de formation avant de commencer. Selon la FTC, c'est :", options: ["Normal pour tout emploi", "Un impôt", "Une prime", "Un signe d'arnaque"], answer: 3, why: "Les employeurs honnêtes ne vous font pas payer pour obtenir un emploi." },
          { objective: "O6", q: "Quand relancer après avoir postulé ?", options: ["Toutes les heures", "Jamais", "Environ une semaine plus tard, par un court e-mail poli", "Au bout d'un an"], answer: 2, why: "Une relance polie montre votre intérêt." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour se préparer à l'emploi et développer sa carrière",
    questions: [
      { objective: "O1", q: "Une compétence transférable est :", options: ["Une compétence qu'on peut vendre", "Une compétence acquise dans un contexte qui sert dans un autre", "Une compétence réservée aux ordinateurs", "Une fausse compétence"], answer: 1, why: "Les compétences passent d'un contexte à l'autre." },
      { objective: "O1", q: "Lequel est un savoir-être ?", options: ["La fiabilité", "La conduite de chariot élévateur", "La soudure", "La vitesse de frappe"], answer: 0, why: "Les savoir-être sont des compétences relationnelles." },
      { objective: "O1", q: "Quelle expérience compte comme compétence professionnelle ?", options: ["Seulement les emplois de bureau payés", "Seulement l'université", "S'occuper d'un proche", "Rien en dehors d'un emploi"], answer: 2, why: "Toute expérience réelle développe des compétences." },
      { objective: "O1", q: "Pourquoi tout ce qui est sur votre CV doit-il être vrai ?", options: ["On peut vous interroger dessus en entretien", "L'IA le vérifie", "Ce n'est pas nécessaire", "Pour qu'il soit plus long"], answer: 0, why: "Les recruteurs posent des questions sur ce que vous indiquez." },
      { objective: "O2", q: "Un mot-clé est :", options: ["Un mot de passe", "Une clé du bureau", "Votre nom", "Un mot important de l'offre d'emploi"], answer: 3, why: "Reprendre les mots-clés aide votre CV à être remarqué." },
      { objective: "O2", q: "Quel point de CV est le plus fort ?", options: ["« Fait des trucs en cuisine »", "« Préparé chaque jour des repas pour 500 personnes en respectant les normes d'hygiène alimentaire »", "« Travaillé »", "« Nourriture »"], answer: 1, why: "Un verbe d'action, des chiffres et un résultat." },
      { objective: "O2", q: "Pour que l'IA adapte votre CV, vous collez :", options: ["Votre numéro de sécurité sociale", "L'offre d'emploi, pas vos informations privées", "Votre numéro de dossier", "Vos coordonnées bancaires"], answer: 1, why: "C'est l'offre dont l'IA a besoin." },
      { objective: "O2", q: "Quelle longueur doit avoir un CV pour la plupart des emplois de début de carrière ?", options: ["Dix pages", "Une demi-ligne", "Le plus long possible", "Une page"], answer: 3, why: "Une page se lit facilement." },
      { objective: "O3", q: "Une lettre de motivation explique :", options: ["Pourquoi vous voulez le poste et pourquoi vous convenez", "Toute l'histoire de votre vie", "Seulement vos anciens salaires", "Vos mots de passe"], answer: 0, why: "Elle fait le lien entre vous et le poste." },
      { objective: "O3", q: "Une fois que l'IA a rédigé votre lettre de motivation, vous devez :", options: ["L'envoyer sans la lire", "Ajouter des compétences que vous n'avez pas", "La corriger et la lire à voix haute jusqu'à ce qu'elle vous ressemble", "La porter à 1 000 mots"], answer: 2, why: "Votre lettre doit vous ressembler." },
      { objective: "O4", q: "Un entretien blanc est :", options: ["Un faux emploi", "Un entretien impoli", "Un entretien qu'on saute", "Un entretien d'entraînement"], answer: 3, why: "L'entraînement donne confiance." },
      { objective: "O4", q: "Dans STAR, « Action » veut dire :", options: ["La météo", "Le nom de l'entreprise", "Ce que vous avez fait", "Votre salaire"], answer: 2, why: "L'action est votre part de l'histoire." },
      { objective: "O4", q: "« Avez-vous des questions pour nous ? » Meilleure réponse :", options: ["« Non. »", "Poser une question réfléchie sur le poste ou l'équipe", "Seulement « Quand pourrai-je prendre des vacances ? »", "Partir"], answer: 1, why: "De bonnes questions montrent votre intérêt." },
      { objective: "O5", q: "Quand vous parlez d'un casier, vous devez :", options: ["Ne partager que les faits avec lesquels vous êtes à l'aise, brièvement", "Donner votre numéro de dossier", "Mentir", "En parler pendant 20 minutes"], answer: 0, why: "Bref, honnête et tourné vers l'avenir, c'est le mieux." },
      { objective: "O5", q: "Les règles « fair chance » ou « ban the box » :", options: ["Sont les mêmes partout", "N'existent pas", "Varient selon l'État et la ville ; renseignez-vous auprès du service du travail de votre État", "Interdisent toute vérification des antécédents"], answer: 2, why: "Ces règles diffèrent selon les endroits." },
      { objective: "O5", q: "Où vérifier la situation actuelle du Work Opportunity Tax Credit ?", options: ["Sur la page WOTC de l'IRS", "Dans une publication sur les réseaux sociaux", "Dans une supposition de l'IA", "Dans une annonce d'emploi"], answer: 0, why: "Les règles et dates des crédits d'impôt changent ; l'IRS fait foi." },
      { objective: "O6", q: "Les American Job Centers offrent :", options: ["Seulement la rédaction payante de CV", "Des prêts", "Un logement", "Une aide gratuite pour chercher un emploi et se former"], answer: 3, why: "Ce sont des centres d'aide à l'emploi gratuits." },
      { objective: "O6", q: "Un tableau de suivi des candidatures contient :", options: ["Vos mots de passe", "Entreprise, poste, date de candidature, contact et date de relance", "Votre compte bancaire", "Rien"], answer: 1, why: "Le suivi vous garde organisé." },
      { objective: "O6", q: "Un « emploi » vous demande d'encaisser un chèque et d'en renvoyer une partie. C'est :", options: ["Une paie normale", "Une arnaque au faux chèque", "Une prime", "Un remboursement d'impôt"], answer: 1, why: "La FTC cite cette arnaque comme courante." },
      { objective: "O6", q: "Quand peut-on donner son numéro de compte bancaire pour la paie ?", options: ["Dans le premier message à n'importe quel recruteur", "Dans un commentaire sur un site d'emploi", "À quiconque le demande", "Après une vraie offre d'un vrai employeur vérifié"], answer: 3, why: "On ne le partage pour la paie qu'après une vraie offre vérifiée." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "CV adapté",
        objective: "O2",
        notYet: "Plus d'une page, pas adapté à l'offre, ou contient des numéros privés.",
        meets: "Une page avec les mots clés de l'offre, des points avec verbes d'action et chiffres, et aucun numéro privé.",
        exceeds: "Chaque point est relié à une compétence demandée dans l'offre."
      },
      {
        name: "Compétences vraies",
        objective: "O1",
        notYet: "Une compétence ou une affirmation du CV n'est pas vraie.",
        meets: "Chaque compétence est vraie et appuyée par un exemple réel.",
        exceeds: "Les compétences acquises en prison, en s'occupant d'un proche ou dans du travail informel sont décrites avec les mots des employeurs."
      },
      {
        name: "Lettre de motivation",
        objective: "O3",
        notYet: "Plus de 200 mots, ou ressemble à une lettre d'IA générique.",
        meets: "Trois courts paragraphes de moins de 200 mots qui ressemblent à l'apprenant.",
        exceeds: "Inclut un détail vrai sur la raison pour laquelle il veut travailler là."
      },
      {
        name: "Réponses d'entretien",
        objective: "O4",
        notYet: "Moins de cinq réponses, ou les réponses sont lues dans les notes.",
        meets: "Cinq réponses travaillées à voix haute, avec STAR pour « Parlez-moi d'une fois où ».",
        exceeds: "Utilise les retours de l'IA pour améliorer au moins deux réponses."
      },
      {
        name: "Réponse sur le parcours ou le passé",
        objective: "O5",
        notYet: "La réponse est longue, sur la défensive ou fausse (si c'est le cas de l'apprenant).",
        meets: "Courte, honnête, et se termine par la raison pour laquelle l'apprenant est prêt maintenant.",
        exceeds: "Dite calmement à voix haute, sans notes."
      },
      {
        name: "Candidature en sécurité",
        objective: "O6",
        notYet: "L'offre n'a pas été vérifiée pour repérer les signes d'arnaque.",
        meets: "L'offre a été comparée aux signes d'arnaque et la candidature est suivie.",
        exceeds: "Une date de relance est fixée environ une semaine plus tard."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui postulent à au moins trois emplois dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui obtiennent un entretien ou une offre d'emploi dans les 90 jours",
      "Apprenants qui disent avoir repéré et évité une arnaque à l'emploi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet, ou un ordinateur de bibliothèque, de service de l'emploi ou du programme",
      "Un assistant d'IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini) et un modèle de CV gratuit dans Google Docs ou Word",
      "Une vraie offre d'emploi à laquelle l'apprenant pourrait postuler",
      "Du papier et un stylo pour la liste des compétences et les notes d'entretien",
      "Environ 60 minutes en tout, en courtes séances, plus du temps d'entraînement"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance, avec les exercices « Essayez maintenant » faits en direct.",
      "Travaillez avec un conseiller en réinsertion ou un American Job Center pour aider les apprenants à lister le travail fait pendant leur détention.",
      "Organisez des entretiens d'entraînement par deux ; laissez les apprenants choisir s'ils s'entraînent devant les autres à une question sur leur passé.",
      "Ne demandez jamais aux apprenants de taper un numéro de sécurité sociale, de dossier ou d'écrou dans un outil d'IA ; utilisez des repères.",
      "Rappelez aux apprenants en libération conditionnelle ou en mise à l'épreuve de respecter leurs conditions sur l'usage d'internet, et notez la tâche finale avec la grille d'évaluation, une ligne « Pas encore » à la fois."
    ]
  }
};
