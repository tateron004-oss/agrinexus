"use strict";

// Koach Learn course (French translation of athletes/athletes-influencer-marketing.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-influencer-marketing-fr",
  lang: "fr",
  translationOf: "athletes-influencer-marketing",
  category: "Athletes",
  name: "Marketing d'influence pour les athlètes",
  skills: "Trouver les marques qui vous correspondent, Créer un kit média d'une page, Écrire une proposition à une marque avec l'IA, Repérer les signaux d'alerte dans un contrat, Signaler les publications sponsorisées et respecter les règles NIL",
  outcome: "créer un kit média d'une page, proposer une collaboration à une marque qui vous correspond avec un message rédigé avec l'IA, examiner un contrat pour repérer les signaux d'alerte avec un adulte de confiance, et publier du contenu sponsorisé avec une mention claire comme le demande la FTC, tout en respectant les règles NIL de votre école et de votre État.",
  about: [
    "Ce cours s'adresse aux athlètes qui veulent travailler avec des marques sur les réseaux sociaux grâce à des contrats NIL (nom, image et ressemblance), ainsi qu'aux entraîneurs et aux parents qui les accompagnent.",
    "Le marketing d'influence, c'est quand une marque vous paie, en argent ou en produits, pour présenter son produit à votre public. Vous apprendrez à trouver les marques qui vous correspondent, à montrer votre valeur avec un kit média, à faire une proposition professionnelle, à repérer les mauvais contrats et à rester honnête et dans les règles.",
    "Les règles NIL sont différentes selon le lycée, les divisions universitaires et les États américains, et elles changent. Ce cours enseigne les compétences et montre les pages officielles ; vérifiez toujours les règles actuelles auprès du service de conformité de votre école ou de l'association sportive scolaire de votre État avant de signer quoi que ce soit. Ce n'est pas un conseil juridique ou fiscal."
  ],
  finalTask: "Créez un kit média d'une page, choisissez une marque qui correspond à vos valeurs et à votre public, écrivez une proposition avec l'IA puis retouchez-la avec votre voix, et rédigez une liste des signaux d'alerte et des règles que vous vérifierez avant de signer (y compris qui vous consulterez dans votre école ou votre État). Si vous obtenez un contrat, publiez-le avec une mention claire dans la publication elle-même.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes de lycée et d'université qui veulent travailler avec des marques sur les réseaux sociaux grâce à des contrats NIL (nom, image et identité), et les entraîneurs et parents qui les guident.",
    startingPoint: "Ils ont des comptes sur les réseaux sociaux et quelques abonnés, et ont entendu parler des contrats NIL. Peu connaissent les règles de la NCAA ou de leur État, ont un kit média, ont déjà fait une proposition à une marque ou savent repérer les signaux d'alerte dans un contrat.",
    gap: "Les athlètes peuvent perdre leur admissibilité, de l'argent ou les droits sur leur propre image en signant de mauvais contrats, en enfreignant les règles de l'école ou de l'État, ou en oubliant les mentions. Connaître les règles, présenter de vrais chiffres et vérifier les contrats avec un adulte de confiance leur permet de gagner de l'argent en sécurité et honnêtement.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone avec les réseaux sociaux, un assistant IA gratuit et Canva",
      "Environ 60 minutes au total",
      "Les règles NIL de la NCAA, de la NAIA, des associations d'État et des écoles diffèrent et changent ; vérifiez auprès du service de conformité ou du directeur sportif",
      "Les athlètes de moins de 18 ans impliquent un parent ou un tuteur ; ceci est une formation, pas un conseil juridique ni fiscal"
    ],
    prerequisites: "Aucun. « Image de marque sur les réseaux sociaux pour les sportifs » est une bonne première étape."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Selon votre niveau sportif", action: "expliquer ce qu'est un contrat NIL et quelles règles s'appliquent à vous, y compris ce qui est interdit", standard: "en nommant qui consulter dans votre école ou votre État et en précisant que les revenus NIL sont généralement imposables" },
    { id: "O2", condition: "À partir des produits et des commerces locaux que vous utilisez", action: "lister cinq marques qui correspondent à vos valeurs et à votre public", standard: "en barrant chaque catégorie interdite par votre école ou votre État" },
    { id: "O3", condition: "Avec les statistiques de vos applications et un modèle Canva", action: "créer un kit média d'une page avec votre bio, vos canaux, de vrais chiffres, votre public, vos offres et un contact sûr", standard: "avec chaque chiffre vrai, à jour et daté" },
    { id: "O4", condition: "À partir d'un brouillon de l'IA", action: "écrire un message de proposition au contact officiel d'une marque", standard: "en moins de 150 mots, avec votre voix, une raison vraie et précise, une idée et votre kit média, et un parent impliqué si vous avez moins de 18 ans" },
    { id: "O5", condition: "À partir d'un contrat écrit", action: "y chercher les signaux d'alerte avec un adulte de confiance avant de signer", standard: "en vérifiant le travail, la rémunération, la durée et la façon d'y mettre fin, et en refusant de signer sous la pression" },
    { id: "O6", condition: "Pour toute publication pour laquelle une marque vous a donné quelque chose", action: "écrire une publication sponsorisée avec une mention claire au début", standard: "dite et affichée en vidéo, pas cachée dans les hashtags ou la bio, et sans aucune affirmation que vous ne pouvez pas prouver" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se préparer à travailler avec des marques",
      lessons: [
        {
          objectives: ["O1"],
          title: "Comment fonctionnent les contrats d'influence des athlètes",
          minutes: 5,
          goal: "Expliquer ce qu'est un contrat NIL et ce qui est permis aux athlètes universitaires.",
          text: [
            "Un contrat NIL vous paie, en argent, en produits ou en services, pour laisser une entreprise utiliser votre nom, votre image ou votre ressemblance : publications sur les réseaux, apparitions, stages, autographes ou publicités.",
            "Pour les athlètes universitaires de la NCAA (l'association du sport universitaire américain), la page NIL de la NCAA dit que les contrats doivent vous payer pour l'utilisation de votre NIL, avoir un vrai but commercial et payer dans une fourchette raisonnable. Le « pay-for-play », c'est-à-dire être payé pour aller ou jouer dans une école, ou être payé selon vos performances, n'est pas permis. Au moment de la rédaction, les athlètes de Division I doivent déclarer les contrats avec des tiers de 600 $ ou plus via NIL Go, géré par la College Sports Commission ; demandez les détails actuels à votre service de conformité.",
            "Au lycée, les règles NIL sont fixées par l'association sportive scolaire de chaque État et par la loi de l'État ; certains États les permettent avec des limites. Vérifiez les vôtres avant tout contrat. Les revenus NIL sont généralement imposables : gardez vos justificatifs et parlez à un professionnel de la fiscalité."
          ],
          steps: ["Identifiez votre niveau : lycée, division NCAA, NAIA, junior college ou professionnel.", "Lisez la politique NIL de votre école ou les règles de l'association de votre État.", "Parlez à votre service de conformité ou à votre directeur sportif.", "Gardez une trace de chaque contrat et de chaque paiement."],
          words: [["NIL", "nom, image et ressemblance : gagner de l'argent grâce à votre nom, votre photo ou votre marque personnelle."], ["Pay-for-play", "être payé pour aller ou concourir dans une école, ou être payé selon ses performances sportives ; interdit par les règles de la NCAA."], ["Service de conformité", "le service de l'école qui explique et contrôle les règles sportives."]],
          slides: [
            { title: "Un contrat NIL", bullets: ["Payé en argent, en produits ou en services", "Publications, apparitions, stages, autographes"] },
            { title: "Bases de la NCAA (vérifiez les règles actuelles)", bullets: ["Vrai but commercial, paiement raisonnable", "Pas de pay-for-play", "DI : déclarer les contrats de 600 $ et plus via NIL Go"] },
            { title: "Lycée et impôts", bullets: ["Règles fixées par l'association de votre État", "Les revenus NIL sont généralement imposables", "Gardez vos justificatifs ; consultez un fiscaliste"] }
          ],
          sources: [
            { name: "NCAA : Nom, image et ressemblance (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission : contrats NIL des étudiants-athlètes (en anglais)", url: "https://www.collegesportscommission.org/nil/" },
            { name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Trouvez la page NIL de votre école ou de l'association de votre État et notez trois règles qui s'appliquent à vous, ainsi que la personne à qui vous poseriez vos questions.",
          youCanNow: "expliquer comment fonctionnent les contrats NIL des athlètes et trouver les règles qui s'appliquent à vous.",
          quickCheck: [
            { objective: "O1", q: "En quoi un contrat NIL peut-il vous payer ?", options: ["Seulement en argent", "Seulement en crédits scolaires", "Seulement en billets de match", "En argent, en produits ou en services"], answer: 3, why: "Les contrats NIL peuvent payer en argent, en produits ou en services pour l'utilisation de votre nom, de votre image ou de votre identité." },
            { objective: "O1", q: "Vous recevez votre premier paiement NIL. Que faites-vous ?", options: ["En garder une trace et en parler avec un professionnel des impôts", "Le dépenser et l'oublier", "Le cacher à votre école", "Le rendre"], answer: 0, why: "Les revenus NIL sont généralement imposables, alors gardez des traces et demandez un conseil fiscal." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Trouver les marques qui vous correspondent",
          minutes: 5,
          goal: "Faire une liste de cinq marques qui correspondent à vos valeurs et à votre public.",
          text: [
            "Les meilleurs contrats sont avec des marques que vous utilisez déjà et en qui vous croyez, et qui intéressent votre public. Une salle de sport locale, une boisson sportive que vous buvez vraiment, une application d'entraînement que vous utilisez ou un restaurant familial près de votre école.",
            "Commencez localement. Les entreprises locales sont souvent plus ouvertes aux jeunes athlètes, et votre public local compte pour elles. Les grandes marques passent souvent par des agences ou des plateformes NIL que votre école utilise peut-être ; demandez à votre service de conformité lesquelles sont approuvées.",
            "Évitez les marques qui vont contre vos valeurs, les règles de votre école ou votre âge. Beaucoup d'écoles et d'États interdisent des catégories comme l'alcool, le tabac, la cigarette électronique, les jeux d'argent et les produits pour adultes."
          ],
          steps: ["Listez les produits et les commerces locaux que vous utilisez vraiment.", "Marquez ceux qui intéressent votre public.", "Rayez toute catégorie interdite par votre école ou votre État.", "Gardez vos cinq meilleurs."],
          words: [["Adéquation avec la marque", "à quel point une marque correspond à vos valeurs, à votre image et à votre public."], ["Plateforme NIL", "un site ou une application qui met en relation des athlètes et des marques pour des contrats."]],
          slides: [
            { title: "La meilleure adéquation", bullets: ["Des marques que vous utilisez et en qui vous croyez", "Votre public s'y intéresse"] },
            { title: "Commencez localement", bullets: ["Salles de sport, restaurants, magasins près de chez vous", "Demandez les plateformes approuvées au service de conformité"] },
            { title: "À éviter", bullets: ["Les marques contraires à vos valeurs", "Catégories interdites : alcool, vapotage, jeux d'argent"] }
          ],
          tryIt: "Écrivez une liste de dix produits ou commerces que vous utilisez. Demandez à un assistant IA lesquels conviennent le mieux à un public comme le vôtre, puis choisissez vous-même vos cinq meilleurs.",
          youCanNow: "choisir des marques qui correspondent à vos valeurs, à votre public et aux règles.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi commencer par les commerces locaux ?", options: ["Ils ne disent jamais non", "Ils sont souvent ouverts aux jeunes athlètes et tiennent à votre public local", "Ils paient le plus", "Ils n'ont pas besoin de contrat"], answer: 1, why: "Les commerces locaux sont souvent plus ouverts aux jeunes athlètes et apprécient un public local." },
            { objective: "O2", q: "Une boutique de cigarettes électroniques vous propose un contrat. Que faites-vous ?", options: ["Accepter si la rémunération est bonne", "Demander plus d'argent", "La rayer de la liste ; beaucoup d'écoles et d'États interdisent cette catégorie", "En parler en ligne sans contrat"], answer: 2, why: "Évitez les catégories que votre école ou votre État interdit, comme la cigarette électronique." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Créer votre kit média",
          minutes: 6,
          goal: "Créer un kit média d'une page qui montre votre valeur aux marques.",
          text: [
            "Un kit média est un résumé d'une page que les marques utilisent pour décider si vous leur correspondez. Il montre qui vous êtes, qui est votre public et ce que vous pouvez faire pour elles.",
            "Incluez : une bonne photo et une courte biographie ; votre sport, votre équipe et vos résultats ; vos comptes avec le nombre d'abonnés et l'engagement moyen (mentions J'aime, commentaires, partages ou vues par publication) tirés des statistiques de votre application ; qui est votre public (lieu, tranche d'âge si l'application l'indique) ; vos partenariats passés ; ce que vous proposez (publications, vidéos, apparitions, stages) ; et vos coordonnées, avec une adresse e-mail sportive ou celle d'un parent ou d'un agent pour les mineurs.",
            "Utilisez un modèle Canva pour la mise en page et un assistant IA pour resserrer le texte. Chaque chiffre doit être réel et à jour. N'achetez pas d'abonnés ; les marques vérifient l'engagement."
          ],
          steps: ["Rassemblez vos vrais chiffres dans les statistiques de votre application.", "Écrivez une biographie de deux phrases.", "Listez ce que vous proposez.", "Faites la mise en page avec un modèle de kit média Canva.", "Vérifiez chaque chiffre ; datez le document."],
          words: [["Kit média", "un résumé d'une page sur qui vous êtes, votre public et ce que vous proposez aux marques."], ["Taux d'engagement", "à quel point les gens réagissent à vos publications par rapport au nombre de personnes qui vous suivent ou les voient."]],
          slides: [
            { title: "Ce que montre un kit média", bullets: ["Qui vous êtes", "Qui est votre public", "Ce que vous pouvez faire pour une marque"] },
            { title: "À inclure", bullets: ["Photo, biographie, sport et résultats", "Comptes, abonnés, engagement moyen", "Ce que vous proposez et un contact sûr"] },
            { title: "Honnêteté", bullets: ["Des chiffres réels et à jour", "N'achetez jamais d'abonnés", "Les marques vérifient l'engagement"] }
          ],
          tryIt: "Créez votre kit média d'une page dans Canva avec vos vrais chiffres. Demandez à un assistant IA de rendre votre biographie plus courte et plus claire.",
          youCanNow: "créer un kit média honnête d'une page.",
          quickCheck: [
            { objective: "O3", q: "Que montre l'engagement dans votre kit média ?", options: ["À quel point les gens interagissent avec vos publications", "Combien de marques vous connaissez", "Votre moyenne scolaire", "Votre numéro de maillot"], answer: 0, why: "L'engagement, ce sont les j'aime, commentaires, partages ou vues par publication." },
            { objective: "O3", q: "Votre nombre d'abonnés a changé depuis que vous avez fait votre kit média le mois dernier. Que faites-vous ?", options: ["Laisser l'ancien chiffre", "L'arrondir largement vers le haut", "Acheter des abonnés pour correspondre", "Le mettre à jour avec le vrai chiffre actuel et la date"], answer: 3, why: "Chaque chiffre doit être vrai et à jour." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer à travailler avec des marques",
        questions: [
          { objective: "O1", q: "Que signifie NIL ?", options: ["National Influencer League", "Nouvelle loi sur les revenus", "Nom, image et ressemblance", "Aucune limite d'encre"], answer: 2, why: "NIL, c'est gagner de l'argent grâce à votre nom, votre image et votre ressemblance." },
          { objective: "O1", q: "Selon les règles de la NCAA, qu'est-ce qui n'est PAS permis ?", options: ["Être payé pour aller dans une école précise", "Des publications payées pour un magasin local", "Organiser un stage payant", "Signer des autographes contre paiement"], answer: 0, why: "C'est du pay-for-play, interdit par les règles de la NCAA." },
          { objective: "O1", q: "Un lycéen athlète veut un contrat NIL. Quelles règles comptent ?", options: ["Seulement celles de la marque", "Aucune", "Celles d'une ligue professionnelle", "Celles de l'association sportive scolaire de son État et de son école"], answer: 3, why: "Au lycée, les règles NIL sont fixées État par État." },
          { objective: "O2", q: "Quelle marque est probablement le meilleur premier choix ?", options: ["Une entreprise de cigarettes électroniques", "Une salle de sport locale où vous vous entraînez et en qui vous croyez", "Une marque au hasard que vous n'avez jamais utilisée", "Une application de paris"], answer: 1, why: "Un vrai usage et un public local font la meilleure adéquation." },
          { objective: "O3", q: "Comment doit être chaque chiffre de votre kit média ?", options: ["Fortement arrondi vers le haut", "Réel et à jour", "Deviné", "Pris sur le compte d'un ami"], answer: 1, why: "Les marques vérifient, et la confiance est essentielle." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Propositions, contrats et mentions",
      lessons: [
        {
          objectives: ["O4"],
          title: "Faire une proposition à une marque",
          minutes: 5,
          goal: "Écrire un message de proposition court et professionnel à une marque.",
          text: [
            "Une proposition est un court message pour demander à travailler ensemble. Envoyez-la depuis votre adresse e-mail professionnelle ou au contact officiel de la marque, pas en messages privés au hasard à des employés.",
            "Une bonne proposition : qui vous êtes en une ligne ; pourquoi vous aimez cette marque (quelque chose de précis et de vrai) ; votre public et un chiffre ; une idée claire (« trois vidéos d'entraînement avec votre application de récupération ») ; et votre kit média en pièce jointe. Restez sous 150 mots.",
            "Demandez à un assistant IA de la rédiger, puis réécrivez-la avec votre voix. Si vous avez moins de 18 ans, impliquez un parent ou un tuteur. Relancez une fois après une ou deux semaines. Beaucoup de marques diront non ou ne répondront pas ; c'est normal."
          ],
          steps: ["Trouvez le contact officiel de la marque.", "Demandez à l'IA une proposition courte de moins de 150 mots.", "Ajoutez une raison précise et vraie pour laquelle vous aimez la marque.", "Joignez votre kit média.", "Relancez une fois après une à deux semaines."],
          words: [["Proposition", "un court message qui propose de travailler ensemble."], ["Relance", "un rappel poli si vous n'avez pas eu de réponse."]],
          slides: [
            { title: "Où l'envoyer", bullets: ["Votre adresse e-mail professionnelle", "Le contact officiel de la marque"] },
            { title: "Une bonne proposition", bullets: ["Qui vous êtes", "Pourquoi vous aimez la marque (vrai)", "Votre public et un chiffre", "Une idée claire + kit média"] },
            { title: "Ensuite", bullets: ["Moins de 18 ans : un parent impliqué", "Relancez une fois", "Pas de réponse, c'est normal"] }
          ],
          tryIt: "Choisissez une de vos cinq marques. Utilisez l'IA pour rédiger une proposition, réécrivez-la avec votre voix et faites-la lire par un entraîneur ou un parent avant de l'envoyer.",
          youCanNow: "écrire et envoyer une proposition courte et professionnelle à une marque.",
          quickCheck: [
            { objective: "O4", q: "Où envoyer une proposition à une marque ?", options: ["Des messages privés au hasard à ses employés", "Au contact officiel de la marque", "Au concurrent de la marque", "Dans un commentaire public"], answer: 1, why: "Envoyez-la depuis votre adresse e-mail professionnelle au contact officiel de la marque." },
            { objective: "O4", q: "Une marque n'a pas répondu à votre proposition après deux semaines. Que faites-vous ?", options: ["Lui écrire tous les jours", "Publier sur elle avec colère", "Relancer une fois, puis passer à autre chose sans réponse", "L'envoyer à chaque employé"], answer: 2, why: "Relancez une fois ; beaucoup de marques diront non ou ne répondront pas, et c'est normal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lire un contrat : les signaux d'alerte",
          minutes: 6,
          goal: "Repérer les signaux d'alerte dans un contrat avant de signer.",
          text: [
            "Avant d'accepter quoi que ce soit, obtenez-le par écrit et lisez-le avec un adulte de confiance. Pour les gros contrats, un avocat, un agent ou le service NIL de votre école peut aider. Ne signez pas sous la pression.",
            "Signaux d'alerte : on vous demande de payer d'abord ; on veut vos mots de passe ou codes de connexion ; le contrat dure très longtemps ou dit que la marque possède votre nom ou votre image pour toujours ; vous ne pouvez pas du tout publier pour d'autres marques (exclusivité) sans un paiement juste ; le paiement est flou ou seulement en « visibilité » ; on veut que vous publiiez des choses fausses ; ou tout ce que les règles de votre école ou de votre État interdisent, comme utiliser les logos de l'école sans permission.",
            "Vérifiez ce que vous devez faire (combien de publications, quand, quoi), comment et quand vous êtes payé, combien de temps cela dure et comment y mettre fin. Athlètes universitaires : vérifiez si le contrat doit être déclaré et faites-le à temps."
          ],
          steps: ["Obtenez le contrat par écrit.", "Lisez-le avec un adulte ou un conseiller de confiance.", "Vérifiez le travail, le paiement, la durée et comment y mettre fin.", "Cherchez les signaux d'alerte.", "Vérifiez les règles de votre école et de votre État et toute déclaration à faire.", "Ne signez jamais sous la pression."],
          words: [["Contrat", "un accord écrit que les deux parties doivent respecter."], ["Exclusivité", "une règle qui vous interdit de travailler avec des marques concurrentes."], ["Droits d'utilisation", "comment et pendant combien de temps une marque peut utiliser vos photos, vos vidéos et votre nom."]],
          slides: [
            { title: "Avant de signer", bullets: ["Obtenez-le par écrit", "Lisez-le avec un adulte de confiance", "Ne signez jamais sous la pression"] },
            { title: "Signaux d'alerte", bullets: ["Vous payez d'abord, ou on veut vos mots de passe", "La marque possède votre image pour toujours", "Paiement flou ou seulement en « visibilité »", "On vous demande de dire des choses fausses"] },
            { title: "À vérifier", bullets: ["Travail, paiement, durée, comment y mettre fin", "Règles de l'école et de l'État", "Délais de déclaration"] }
          ],
          sources: [
            { name: "NCAA : Nom, image et ressemblance (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission : contrats NIL des étudiants-athlètes (en anglais)", url: "https://www.collegesportscommission.org/nil/" }
          ],
          tryIt: "Demandez à un assistant IA d'écrire un court exemple de contrat NIL avec trois signaux d'alerte cachés (c'est un exercice). Trouvez-les, puis écrivez votre propre liste de signaux d'alerte.",
          youCanNow: "repérer les signaux d'alerte dans un contrat et savoir avec qui le lire avant de signer.",
          quickCheck: [
            { objective: "O5", q: "Lequel est un signal d'alerte dans un contrat ?", options: ["Ils veulent vos mots de passe ou vos codes de connexion", "Une rémunération et des dates claires", "Un moyen de mettre fin au contrat", "Un nombre fixe de publications"], answer: 0, why: "Ne donnez jamais à une marque vos mots de passe ou vos codes de connexion." },
            { objective: "O5", q: "Une marque dit que vous devez signer aujourd'hui ou perdre le contrat. Que faites-vous ?", options: ["Signer maintenant", "Signer et le lire plus tard", "Demander à un ami de signer pour vous", "Ne pas signer sous la pression ; le lire d'abord avec un adulte de confiance"], answer: 3, why: "Ne signez jamais sous la pression ; obtenez-le par écrit et lisez-le avec un adulte." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Signaler correctement les publications sponsorisées",
          minutes: 5,
          goal: "Écrire une publication sponsorisée avec une mention claire et correcte.",
          text: [
            "La FTC, l'agence américaine qui fait respecter le droit de la publicité, dit que vous devez signaler tout lien significatif avec une marque, ce qui inclut un paiement, des produits gratuits ou à prix réduit, ou un lien familial ou professionnel, chaque fois que vous parlez de la marque.",
            "Rendez-le clair et difficile à manquer : placez-le avec la publication, près du début, avec des mots simples comme « Publicité », « Sponsorisé » ou « Merci [marque] pour les chaussures offertes ». Dans les vidéos, dites-le et montrez-le à l'écran ; en direct, répétez-le. Sur les photos et les stories, mettez-le sur l'image. Ne le cachez pas dans une pile de hashtags, seulement dans votre biographie ou derrière « plus ». Des mots vagues comme « sp », « collab » ou « ambassadeur » seuls ne sont pas clairs.",
            "Dites seulement ce qui est vrai : ne faites pas la promotion d'un produit que vous n'avez pas essayé, et ne faites jamais d'affirmations de santé que la marque ne peut pas prouver, comme « cette boisson guérit les crampes »."
          ],
          steps: ["Demandez-vous : y a-t-il un paiement, un produit gratuit ou un lien ? Alors signalez-le.", "Mettez « Publicité » ou un remerciement clair au début de la légende.", "En vidéo : dites-le et montrez-le.", "Utilisez aussi l'étiquette de partenariat rémunéré de l'application, s'il y en a une.", "Vérifiez que chaque affirmation est vraie."],
          words: [["Lien significatif", "un lien avec une marque, comme un paiement, des produits gratuits ou un lien familial, auquel les gens ne s'attendent pas forcément."], ["Publication sponsorisée", "une publication pour laquelle une marque vous a payé ou vous a donné quelque chose."]],
          slides: [
            { title: "Quand le signaler", bullets: ["Produits payés, gratuits ou à prix réduit", "Liens familiaux ou professionnels avec la marque"] },
            { title: "Comment", bullets: ["« Publicité » ou « Merci [marque] pour... » au début", "Vidéo : dites-le et montrez-le", "Pas caché dans les hashtags ou la biographie"] },
            { title: "Restez honnête", bullets: ["Seulement des produits que vous avez essayés", "Pas d'affirmations de santé non prouvées"] }
          ],
          sources: [
            { name: "FTC : Disclosures 101 pour les influenceurs sur les réseaux sociaux (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "FTC : Guide sur les recommandations, questions fréquentes (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides" }
          ],
          tryIt: "Tâche finale : terminez votre kit média, votre proposition à une marque et votre liste de signaux d'alerte (avec le nom des personnes que vous consulterez dans votre école ou votre État). Écrivez ensuite une légende sponsorisée d'entraînement avec une mention correcte.",
          youCanNow: "publier du contenu sponsorisé avec une mention claire et correcte et rester dans les règles NIL.",
          quickCheck: [
            { objective: "O6", q: "Lequel compte comme un lien important que vous devez mentionner ?", options: ["Un produit que vous avez acheté vous-même", "Un produit gratuit ou à prix réduit offert par la marque", "Une marque dont vous n'avez jamais entendu parler", "Votre équipe préférée"], answer: 1, why: "Un paiement, des produits gratuits ou à prix réduit, ou un lien familial ou professionnel doivent être mentionnés." },
            { objective: "O6", q: "Vous faites un direct sponsorisé. Comment faites-vous la mention ?", options: ["Une fois dans votre bio", "Seulement dans les hashtags", "Dire « collab » une fois", "La faire clairement et la répéter pendant le direct"], answer: 3, why: "Pendant un direct, répétez la mention." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Propositions, contrats et mentions",
        questions: [
          { objective: "O4", q: "Que doit contenir une proposition ?", options: ["Une dissertation de 3 pages", "Votre mot de passe", "Une demande d'argent d'abord", "Qui vous êtes, pourquoi vous aimez la marque, votre public, une idée et votre kit média"], answer: 3, why: "Court, précis et professionnel, c'est ce qui obtient des réponses." },
          { objective: "O5", q: "Une « marque » vous demande de payer des frais pour rejoindre son programme d'athlètes. C'est :", options: ["Un signal d'alerte", "Normal", "Exigé par la NCAA", "Une excellente affaire"], answer: 0, why: "Les vraies marques vous paient, pas l'inverse." },
          { objective: "O5", q: "Un contrat dit que la marque possède votre image pour toujours. Vous devez :", options: ["Signer vite", "L'ignorer", "Le traiter comme un signal d'alerte et demander conseil", "Demander encore plus longtemps"], answer: 2, why: "Des droits d'utilisation pour toujours sont un signal d'alerte majeur." },
          { objective: "O6", q: "Quelle mention est claire ?", options: ["« #sp » à la fin", "« collab »", "Seulement dans votre biographie", "« Publicité » au début de la légende"], answer: 3, why: "La FTC dit : claire et difficile à manquer." },
          { objective: "O6", q: "Dans une vidéo sponsorisée, la mention doit être :", options: ["Seulement dans la description", "Dite et montrée dans la vidéo", "Dans un commentaire", "Absente"], answer: 1, why: "La mention d'une vidéo doit être dans la vidéo elle-même." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Marketing d'influence pour les athlètes",
    questions: [
      { objective: "O1", q: "Le marketing d'influence, c'est :", options: ["Acheter des abonnés", "Entraîner une équipe", "Une marque vous paie pour présenter son produit à votre public", "Vendre des billets"], answer: 2, why: "Les marques paient pour votre portée et la confiance qu'on vous accorde." },
      { objective: "O1", q: "Les contrats NIL de la NCAA doivent avoir :", options: ["Un vrai but commercial et un paiement raisonnable", "Aucun travail demandé", "Un paiement lié aux points marqués", "Un paiement pour choisir une école"], answer: 0, why: "C'est ainsi que la NCAA décrit les contrats permis." },
      { objective: "O1", q: "Un paiement lié à vos performances sportives, c'est :", options: ["Du pay-for-play, interdit par les règles de la NCAA", "Encouragé", "Obligatoire", "Un formulaire fiscal"], answer: 0, why: "Les règles de la NCAA interdisent le pay-for-play." },
      { objective: "O1", q: "Où les athlètes de Division I déclarent-ils les contrats NIL avec des tiers (au moment de la rédaction) ?", options: ["Dans leur biographie", "Dans un groupe de discussion", "Sur NIL Go, géré par la College Sports Commission", "Nulle part"], answer: 2, why: "Vérifiez les détails actuels auprès de votre service de conformité." },
      { objective: "O1", q: "Les revenus NIL sont généralement :", options: ["Toujours exonérés d'impôt", "Imposables", "Illégaux", "Versés à l'école"], answer: 1, why: "La NCAA dit que les revenus NIL sont généralement imposables." },
      { objective: "O1", q: "Qui fixe les règles NIL au lycée ?", options: ["La NFL", "La marque", "Personne", "L'association sportive scolaire de chaque État et la loi de l'État"], answer: 3, why: "Cela varie selon l'État." },
      { objective: "O2", q: "Les meilleures premières marques sont souvent :", options: ["Des marques dont vous n'avez jamais entendu parler", "Des applications de paris", "Des commerces locaux que vous utilisez et en qui vous croyez", "Des boutiques de cigarettes électroniques"], answer: 2, why: "L'adéquation locale et un vrai usage font de bons contrats." },
      { objective: "O2", q: "Quelle catégorie beaucoup d'écoles et d'États interdisent-ils ?", options: ["Les boulangeries locales", "Les librairies", "Les chaussures de course", "Les jeux d'argent et l'alcool"], answer: 3, why: "Les catégories interdites sont courantes dans les règles NIL." },
      { objective: "O3", q: "Un kit média, c'est :", options: ["Un résumé d'une page sur vous, votre public et ce que vous proposez", "Une trousse de premiers secours", "Un sac pour appareil photo", "Un contrat"], answer: 0, why: "Les marques l'utilisent pour décider si vous leur correspondez." },
      { objective: "O3", q: "Le taux d'engagement montre :", options: ["Votre taille", "À quel point les gens réagissent par rapport aux abonnés ou aux vues", "Votre moyenne scolaire", "Votre numéro de maillot"], answer: 1, why: "Les marques s'intéressent plus à l'engagement qu'au simple nombre d'abonnés." },
      { objective: "O3", q: "Acheter des abonnés, c'est :", options: ["Du marketing intelligent", "Obligatoire", "Malhonnête, et les marques le repèrent", "Gratuit"], answer: 2, why: "Les faux abonnés détruisent la confiance." },
      { objective: "O4", q: "Où envoyer une proposition ?", options: ["Au contact officiel de la marque", "En messages privés à des employés au hasard", "À ses concurrents", "Nulle part"], answer: 0, why: "Les contacts officiels sont professionnels et sûrs." },
      { objective: "O4", q: "Une proposition doit faire environ :", options: ["Cinq pages", "Un émoji", "Un appel vidéo à minuit", "Moins de 150 mots"], answer: 3, why: "Les propositions courtes sont lues." },
      { objective: "O4", q: "Si vous avez moins de 18 ans quand vous faites une proposition, vous devez :", options: ["Le cacher", "Impliquer un parent ou un tuteur", "Mentir sur votre âge", "Utiliser un faux nom"], answer: 1, why: "Les adultes aident à protéger les mineurs dans les contrats." },
      { objective: "O5", q: "Avant de signer un contrat, vous devez :", options: ["Signer sur-le-champ", "L'obtenir par écrit et le lire avec un adulte de confiance", "Donner votre mot de passe", "Payer des frais"], answer: 1, why: "Des conditions écrites vous protègent." },
      { objective: "O5", q: "L'exclusivité veut dire :", options: ["Vous êtes payé davantage", "Le contrat est court", "La marque vous appartient", "Vous ne pouvez pas travailler avec des marques concurrentes"], answer: 3, why: "Elle limite les autres contrats, donc elle doit être juste." },
      { objective: "O5", q: "Un contrat paie seulement en « visibilité ». C'est :", options: ["Un signal d'alerte", "Un excellent paiement", "Obligatoire", "Une règle fiscale"], answer: 0, why: "Un paiement flou est un signe d'alerte." },
      { objective: "O6", q: "Une marque vous a offert des chaussures. Devez-vous le signaler ?", options: ["Non, seul l'argent compte", "Seulement si vous les aimez", "Oui, les produits gratuits comptent", "Seulement sur TikTok"], answer: 2, why: "La FTC dit que les produits gratuits sont un lien significatif." },
      { objective: "O6", q: "Où une mention ne doit-elle PAS être uniquement ?", options: ["Au début de la légende", "Sur l'image dans une story", "Dite dans la vidéo", "Cachée dans les hashtags ou votre biographie"], answer: 3, why: "Les mentions doivent être difficiles à manquer." },
      { objective: "O6", q: "Une marque vous demande de dire que sa boisson guérit les crampes. Vous :", options: ["Le dites", "Refusez ; pas d'affirmations de santé non prouvées", "Le dites plus fort", "Le dites sans mention"], answer: 1, why: "La FTC met en garde contre les affirmations de santé non prouvées." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      5,
      6,
      8,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Kit média",
        objective: "O3",
        notYet: "Des chiffres manquent, sont inventés ou ne sont pas à jour, ou des coordonnées privées sont visibles.",
        meets: "Une page avec la bio, les canaux, de vrais chiffres datés, le public, les offres et un contact sûr.",
        exceeds: "Comprend l'engagement moyen par publication et une liste claire des partenariats passés ou des actions dans la communauté."
      },
      {
        name: "Adéquation avec la marque",
        objective: "O2",
        notYet: "La marque choisie va contre les valeurs de l'athlète ou appartient à une catégorie interdite.",
        meets: "Une marque que l'athlète utilise vraiment, qui correspond à son public et aux règles de son école et de son État.",
        exceeds: "Le choix s'appuie sur une liste de cinq marques adaptées, avec leurs raisons."
      },
      {
        name: "Message de proposition",
        objective: "O4",
        notYet: "Long, générique ou copié de l'IA, ou envoyé en message privé au hasard.",
        meets: "Moins de 150 mots, avec la voix de l'athlète, une raison vraie, une idée et le kit média, envoyé à un contact officiel.",
        exceeds: "Un parent ou un tuteur est impliqué quand il le faut et une date de relance est fixée."
      },
      {
        name: "Liste des signaux d'alerte et des règles",
        objective: "O5",
        notYet: "Il manque des signaux d'alerte importants, ou elle ne dit pas qui sera consulté.",
        meets: "Liste les signaux d'alerte, ce qu'il faut vérifier (travail, rémunération, durée, fin du contrat) et qui consulter dans l'école ou l'État.",
        exceeds: "Ajoute les délais de déclaration et la tenue des documents pour les impôts."
      },
      {
        name: "Mention",
        objective: "O6",
        notYet: "Pas de mention, ou elle est cachée ou floue.",
        meets: "Une mention claire « Publicité » ou un remerciement au début, dite et affichée en vidéo, avec seulement des affirmations vraies.",
        exceeds: "Utilise aussi l'étiquette de partenariat rémunéré de l'application et vérifie chaque affirmation avec la marque."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la tâche finale avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui disent avoir fait une proposition à au moins une marque dans les 30 jours (questionnaire de suivi)",
      "Les apprenants qui disent avoir fait vérifier un contrat par un adulte de confiance ou le service de conformité, ou avoir refusé un mauvais contrat",
      "Les apprenants qui disent avoir mis une mention claire sur chaque publication sponsorisée et déclaré à temps chaque contrat qui devait l'être"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec les applications de réseaux sociaux et leurs statistiques",
      "Un compte Canva gratuit",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "La politique NIL de votre école ou les règles de l'association de votre État",
      "Environ 60 minutes"
    ],
    facilitatorNotes: [
      "Invitez le service de conformité ou le directeur sportif à expliquer les règles NIL et la déclaration actuelles ; les règles et les seuils en dollars changent.",
      "Pour les athlètes de moins de 18 ans, impliquez les parents ou tuteurs dans chaque proposition et chaque contrat.",
      "Ne dites jamais à un athlète qu'un contrat précis est correct ; envoyez les contrats à un adulte de confiance, un avocat, un agent ou au service NIL de l'école.",
      "Expliquez qu'acheter des abonnés ou gonfler ses chiffres est malhonnête et peut faire perdre des contrats.",
      "Entraînez-vous ensemble à écrire des mentions et vérifiez les brouillons sponsorisés avant leur publication."
    ]
  }
};
