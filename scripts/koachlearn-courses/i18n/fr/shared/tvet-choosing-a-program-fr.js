"use strict";

// Koach Learn course (French translation of shared/tvet-choosing-a-program.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "tvet-choosing-a-program-fr",
  lang: "fr",
  translationOf: "tvet-choosing-a-program",
  category: "Workforce Development",
  name: "Choisir une formation professionnelle et technique (EFTP)",
  skills: "Choisir un métier adapté à vous et aux emplois locaux, Comparer les types de formations, Vérifier l'accréditation sur les registres officiels, Poser les bonnes questions à un établissement, Repérer les fausses écoles et les arnaques à la formation, Rédiger un plan de décision de formation",
  outcome: "choisir une formation professionnelle et technique (EFTP) adaptée à vous et aux emplois près de chez vous : comparer les options, vérifier sur le registre officiel que l'établissement et la formation sont accrédités, poser les bonnes questions à l'établissement, éviter les fausses écoles et rédiger un plan de décision avec les coûts et les dates.",
  about: [
    "Ce cours s'adresse aux jeunes et aux adultes du monde entier qui veulent apprendre un métier ou une compétence technique : électricien, plombier, tailleur ou couturière, soudeur, mécanicien automobile, coiffeur, cuisinier, technicien solaire, aide-soignant, technicien informatique et bien d'autres. Il prend des exemples au Kenya, au Nigeria, au Ghana, au Sénégal, au Maroc, en Égypte, en Inde, aux Philippines, au Mexique, en Colombie et aux États-Unis.",
    "Choisir une formation est une grande décision. Elle coûte de l'argent et des mois ou des années de votre vie. Certaines formations mènent à de bons emplois. D'autres sont dépassées, mal équipées, non reconnues ou fausses. Vous apprendrez à choisir un métier adapté à vous et au marché du travail, à comparer les types de formations, à vérifier un établissement sur le registre officiel de l'État, à poser des questions précises à l'établissement et à repérer les arnaques.",
    "Ce cours ne vous donne pas de certificat dans un métier et ne recommande aucun établissement. Il vous apprend à bien choisir. Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant », un court contrôle rapide, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Vous terminez avec votre propre plan de décision de formation."
  ],
  finalTask: "Rédigez pour vous-même un plan de décision de formation d'une page : le métier choisi et pourquoi (vos intérêts et les emplois locaux que vous avez trouvés), deux formations comparées côte à côte (type, durée, conditions d'admission, coût total et diplôme obtenu), la preuve que chacune est accréditée (le registre officiel consulté et ce qu'il indiquait), les réponses de l'établissement à vos questions, les signaux d'alerte trouvés, et vos prochaines étapes avec les dates et la façon dont vous paierez.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes qui terminent l'école primaire ou secondaire et des adultes qui veulent un nouveau métier ou une première qualification, en Afrique, en Asie, en Amérique latine, au Moyen-Orient et aux États-Unis. Beaucoup sont les premiers de leur famille à choisir une formation. Certains parlent l'anglais ou le français comme deuxième langue ; le cours est traduit en dix langues.",
    startingPoint: "Ils connaissent le nom de quelques métiers, souvent par la famille ou les amis. La plupart n'ont jamais vérifié si un établissement est accrédité, comparé le coût total des formations ni regardé quels emplois sont demandés là où ils vivent. Beaucoup reçoivent des conseils par la publicité ou les réseaux sociaux.",
    gap: "Les apprenants doivent choisir une formation reconnue, qui enseigne de vraies compétences pratiques et mène à un emploi, et éviter les fausses écoles et les arnaques qui prennent des frais et donnent des certificats sans valeur. Un choix réfléchi fait gagner de l'argent et des années, et rend un emploi ou une entreprise plus probable.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 6e année) ; beaucoup lisent dans une deuxième langue",
      "Appareils : souvent un smartphone simple avec peu de données ; certains utilisent un cybercafé ou un ordinateur de l'école",
      "Les règles changent selon le pays : chaque pays a son autorité de l'EFTP et son registre, donc les leçons apprennent à les trouver et à les vérifier, pas les règles d'un seul pays",
      "Coût : les apprenants ont parfois peu d'argent ; ne jamais payer de frais à une personne ou à un agent avant d'avoir vérifié l'établissement",
      "Temps : leçons de 4 à 6 minutes ; environ 60 à 75 minutes au total"
    ],
    prerequisites: "Aucun. Les apprenants qui hésitent encore sur un métier peuvent aussi suivre « Skilled Trades Careers » ; ceux qui découvrent Internet peuvent d'abord suivre « Les bases d'internet »."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "À partir de vos propres intérêts et de ce que vous pouvez apprendre sur les emplois là où vous vivez", action: "lister trois métiers qui vous conviennent et qui sont demandés localement", standard: "avec au moins une preuve du marché du travail pour chacun, comme des offres d'emploi ou un employeur que vous avez interrogé" },
    { id: "O2", condition: "Face à deux options de formation ou plus", action: "comparer des formations selon le type, la durée, les conditions d'admission, le coût total et le diplôme obtenu", standard: "dans un tableau écrit sans case vide" },
    { id: "O3", condition: "À partir du nom d'un établissement et d'une formation", action: "vérifier sur le registre officiel de l'autorité nationale de l'EFTP que l'établissement et la formation sont accrédités", standard: "et noter où vous avez vérifié et ce que cela indiquait" },
    { id: "O4", condition: "Avant de vous inscrire", action: "interroger un établissement sur la pratique, l'équipement, les formateurs, l'examen final, les débouchés et le coût total", standard: "et noter la réponse à chaque question" },
    { id: "O5", condition: "Face à une publicité, un message ou une offre de formation", action: "repérer les signaux d'alerte d'une fausse école ou d'une arnaque à la formation", standard: "en nommant au moins deux signaux quand ils sont présents et sans payer avant d'avoir vérifié" },
    { id: "O6", condition: "À l'aide de votre comparaison et de vos vérifications", action: "rédiger un plan de décision de formation avec votre choix, les coûts, le financement et les dates", standard: "qu'une autre personne pourrait suivre" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver le bon métier et le bon type de formation",
      lessons: [
        {
          title: "Ce qu'est l'EFTP et où il peut mener",
          objectives: ["O1"],
          minutes: 4,
          goal: "Nommer cinq métiers ou emplois techniques auxquels préparent les formations de l'EFTP.",
          text: [
            "EFTP veut dire Enseignement et formation techniques et professionnels (en anglais TVET). L'UNESCO le décrit comme l'éducation, la formation et le développement des compétences pour un large éventail d'emplois et de façons de gagner sa vie. En mots simples : l'EFTP vous apprend à faire un métier avec vos mains, des outils et un savoir-faire.",
            "L'EFTP se fait dans beaucoup de lieux : collèges techniques et professionnels, écoles polytechniques, centres de formation, apprentissages chez un employeur ou un maître artisan, et certaines écoles secondaires. Les noms changent : une polytechnique au Ghana ou au Nigeria, un TVET college au Kenya, un centre de formation enregistré auprès de TESDA aux Philippines, une école CONALEP au Mexique, un centre SENA en Colombie, un community college aux États-Unis.",
            "Les métiers comprennent le bâtiment (électricien, plombier, maçon, menuisier, soudeur), les machines et les véhicules (mécanicien automobile, réparation de motos, froid et climatisation), les services (coiffure, beauté, couture, restauration et cuisine, hôtellerie), les soins (aide-soignant, auxiliaire de vie), l'agriculture et la transformation alimentaire, et la technologie (réparation d'ordinateurs, réseaux, installation solaire, réparation de téléphones).",
            "Une bonne formation de l'EFTP peut mener à un emploi, à un apprentissage, à votre propre petite entreprise ou à la poursuite d'études. Une mauvaise ne mène nulle part : le reste de ce cours vous apprend donc à bien choisir."
          ],
          words: [["EFTP", "Enseignement et formation techniques et professionnels : apprendre un métier par la pratique, pas seulement dans les livres."], ["Métier", "un travail qualifié que l'on apprend par la formation et la pratique, comme la plomberie ou la couture."], ["Polytechnique", "un établissement qui enseigne des matières techniques et pratiques, souvent jusqu'au niveau du diplôme."]],
          slides: [
            { title: "L'EFTP en mots simples", bullets: ["Enseignement et formation techniques et professionnels", "Apprendre un métier avec des outils et de la pratique"] },
            { title: "Où se fait l'EFTP", bullets: ["Collèges techniques, polytechniques, centres de formation", "Apprentissage chez un employeur ou un maître artisan", "Community colleges aux États-Unis"] },
            { title: "Quelques métiers", bullets: ["Électricien, plombier, soudeur, maçon", "Mécanicien, tailleur, coiffeur, cuisinier", "Solaire, réparation d'ordinateurs et de téléphones, soins"] },
            { title: "Où cela mène", bullets: ["Un emploi ou un apprentissage", "Votre propre petite entreprise", "La poursuite d'études"] }
          ],
          sources: [{ name: "UNESCO-UNEVOC TVETipedia : Enseignement et formation techniques et professionnels", url: "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/show=term/term=Technical+and+vocational+education+and+training" }],
          tryIt: "Sur une feuille, écrivez les cinq métiers de cette leçon qui vous intéressent le plus. À côté de chacun, écrivez le nom d'une personne que vous connaissez qui fait ce travail ou un travail proche.",
          youCanNow: "dire ce qu'est l'EFTP, où il est enseigné, et nommer cinq métiers auxquels il peut mener.",
          quickCheck: [
            { objective: "O1", q: "Qu'enseigne surtout une formation de l'EFTP ?", options: ["Seulement la théorie des livres", "Comment réussir n'importe quel examen universitaire", "Un métier par la pratique avec des outils", "Comment obtenir un visa"], answer: 2, why: "L'EFTP est une formation à un emploi ou à un métier, avec de la pratique." },
            { objective: "O1", q: "Lequel de ces choix est un parcours de l'EFTP ?", options: ["Un cours de deux ans en installation électrique dans un collège technique", "Un billet de loterie", "Une page de réseau social sur la mode", "Un prêt d'un usurier"], answer: 0, why: "Un cours de métier dans un collège technique est une formation de l'EFTP." }
          ]
        },
        {
          title: "Choisir un métier adapté à vous et aux emplois locaux",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lister trois métiers qui correspondent à vos intérêts et montrer pour chacun une preuve qu'il est demandé là où vous vivez.",
          text: [
            "Commencez par vous. Aimez-vous travailler à l'intérieur ou à l'extérieur ? Avec des gens, des machines, de la nourriture, du tissu ou des ordinateurs ? Êtes-vous à l'aise avec les chiffres, attentif aux détails, fort, patient ? Voulez-vous un emploi dans une entreprise ou votre propre affaire ?",
            "Ensuite, regardez les emplois. Il est difficile de vivre d'un métier que vous aimez si personne près de chez vous n'embauche ni n'achète. Cherchez des preuves : comptez les offres d'emploi pour ce métier sur les sites d'emploi, dans les journaux et sur les panneaux d'affichage ; demandez à deux ou trois employeurs ou chefs d'entreprise quelles compétences ils ne trouvent pas ; demandez à des gens du métier s'il a été facile de trouver du travail et des clients.",
            "Certains gouvernements publient des informations sur le marché du travail, comme des listes de compétences recherchées. Cherchez-les sur le site du ministère du Travail de votre pays. Méfiez-vous des listes vues dans les publicités ou sur les réseaux sociaux : une école qui vend un cours dira toujours que son métier est demandé.",
            "Choisissez trois métiers qui vous conviennent et pour lesquels vous avez des preuves de demande. Vous comparerez des formations pour ces métiers dans les prochaines leçons."
          ],
          steps: ["Écrivez ce que vous aimez et ce que vous savez bien faire.", "Listez les métiers qui correspondent.", "Pour chacun, cherchez des preuves d'emplois : offres, employeurs, gens du métier.", "Gardez les trois métiers qui vous conviennent le mieux et ont les meilleures preuves."],
          words: [["Demande", "le nombre d'employeurs ou de clients qui recherchent une compétence."], ["Informations sur le marché du travail", "des faits sur les emplois : lesquels se développent, ce qu'ils paient et les compétences qu'ils exigent."]],
          slides: [
            { title: "Commencez par vous", bullets: ["Intérieur ou extérieur ? Gens ou machines ?", "Qu'est-ce que vous savez bien faire ?", "Un emploi en entreprise ou votre propre affaire ?"] },
            { title: "Ensuite, regardez les emplois", bullets: ["Comptez les offres d'emploi pour le métier", "Demandez à 2 ou 3 employeurs ce dont ils ont besoin", "Interrogez des gens qui exercent ce métier"] },
            { title: "Méfiez-vous des publicités", bullets: ["Une école qui vend un cours dit toujours « très demandé »", "Cherchez les informations du ministère du Travail"] },
            { title: "Votre liste courte", bullets: ["Trois métiers qui vous conviennent", "Des preuves de demande pour chacun"] }
          ],
          tryIt: "Faites un tableau de trois lignes, une par métier. Colonnes : pourquoi il me convient, preuves d'emplois (par exemple « 5 offres cette semaine » ou « le garagiste a dit qu'il a besoin d'un mécanicien formé »), et où je l'ai trouvé. Remplissez chaque case.",
          youCanNow: "choisir trois métiers qui vous conviennent et appuyer chacun sur de vraies preuves de demande locale.",
          quickCheck: [
            { objective: "O1", q: "Quelle est la meilleure preuve qu'un métier est demandé là où vous vivez ?", options: ["La publicité d'une école le dit", "Vous avez compté beaucoup d'offres d'emploi et deux employeurs ont dit en avoir besoin", "Un ami en ligne a dit que ça paie bien partout", "Il est populaire dans un autre pays"], answer: 1, why: "Les offres d'emploi et les employeurs proches de vous sont de vraies preuves ; les publicités d'une école qui vend le cours n'en sont pas." },
            { objective: "O1", q: "Vous aimez la création de mode, mais vous n'avez trouvé aucun emploi près de chez vous. Quelle est une étape raisonnable ?", options: ["Renoncer à toute formation", "Vous inscrire au premier cours venu", "Chercher des clients et des métiers proches, comme la couture, et vérifier leur demande", "Payer un agent pour vous trouver un emploi à l'étranger"], answer: 2, why: "Des métiers proches demandés localement peuvent utiliser le même intérêt et vous permettre de gagner votre vie." }
          ]
        },
        {
          title: "Types de formations et diplôme obtenu",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparer les types de formations selon la durée, les conditions d'admission, le coût et le diplôme obtenu.",
          text: [
            "L'EFTP existe sous plusieurs formes. Les formations courtes durent de quelques jours à quelques mois et enseignent une seule compétence. Les programmes de certificat et de diplôme des collèges et polytechniques durent plus longtemps et mêlent en général la théorie en classe et la pratique en atelier. Les certificats nationaux, comme ceux délivrés par TESDA aux Philippines, reposent sur des normes nationales et une évaluation. L'apprentissage vous fait travailler chez un employeur ou un maître artisan pendant que vous apprenez ; aux États-Unis, les Registered Apprenticeships (apprentissages enregistrés) sont listés sur apprenticeship.gov. La formation en alternance partage votre temps entre une école et une entreprise.",
            "Dans beaucoup de pays, surtout en Afrique de l'Ouest, de nombreux jeunes apprennent par l'apprentissage informel auprès d'un maître artisan. Il peut enseigner de vraies compétences, mais le certificat n'est pas toujours reconnu. Demandez si vous pouvez aussi passer un examen national de métier ou une évaluation pour obtenir un diplôme reconnu.",
            "Comparez chaque option sur les cinq mêmes points : type de formation, durée, conditions d'admission (par exemple un certificat scolaire ou un âge minimum), coût total, et le diplôme obtenu à la fin et qui le délivre. Un diplôme délivré ou reconnu par l'autorité nationale vaut plus aux yeux des employeurs qu'un certificat imprimé par l'école seule."
          ],
          steps: ["Écrivez les options pour un métier.", "Pour chacune, notez le type et la durée.", "Notez les conditions d'admission.", "Notez le coût total (frais, outils, uniforme, examen, transport).", "Notez le diplôme et qui le délivre ou le reconnaît."],
          words: [["Diplôme", "un certificat, un diplôme ou une licence qui prouve votre compétence."], ["Apprentissage", "apprendre un métier en travaillant avec une personne qualifiée ou un employeur, souvent avec une paie."], ["Évaluation", "un test où vous montrez votre compétence, souvent en faisant une vraie tâche."]],
          slides: [
            { title: "Types de formations", bullets: ["Formation courte : quelques jours à quelques mois, une compétence", "Certificat ou diplôme dans un collège ou une polytechnique", "Apprentissage ou alternance avec un employeur"] },
            { title: "Apprentissage informel", bullets: ["Apprendre avec un maître artisan", "De vraies compétences, mais le certificat peut ne pas compter", "Renseignez-vous sur un examen national de métier"] },
            { title: "Comparez cinq points", bullets: ["Type et durée", "Conditions d'admission", "Coût total", "Diplôme et qui le délivre"] },
            { title: "Quel diplôme compte ?", bullets: ["Délivré ou reconnu par l'autorité nationale : plus solide", "Imprimé seulement par l'école : plus faible"] }
          ],
          sources: [{ name: "TESDA (Philippines)", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (ministère du Travail des États-Unis)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Pour votre métier préféré, trouvez deux types de formations différents (par exemple un certificat de collège et un apprentissage). Faites un tableau avec les cinq points : type, durée, conditions d'admission, coût total et diplôme. Écrivez « inconnu » là où vous devez encore vous renseigner.",
          youCanNow: "comparer des formations selon le type, la durée, les conditions d'admission, le coût total et le diplôme obtenu.",
          quickCheck: [
            { objective: "O2", q: "Quel diplôme a en général le plus de valeur pour les employeurs ?", options: ["Un certificat imprimé par l'école elle-même", "Un certificat d'un cours sur les réseaux sociaux", "Une lettre d'un ami", "Un diplôme délivré ou reconnu par l'autorité nationale de l'EFTP"], answer: 3, why: "La reconnaissance nationale montre aux employeurs que la formation respecte une norme officielle." },
            { objective: "O2", q: "Que doit comprendre le « coût total » ?", options: ["Seulement les frais du premier mois", "Les frais, les outils, l'uniforme, les frais d'examen et le transport", "Seulement le prix sur l'affiche", "Rien : les bonnes formations sont toujours gratuites"], answer: 1, why: "Les coûts cachés comme les outils, les examens et le transport peuvent doubler ce que vous payez." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver le bon métier et la bonne formation",
        questions: [
          { objective: "O1", q: "Que veut dire EFTP ?", options: ["Enseignement et formation techniques et professionnels", "Examen de formation et de transport public", "École de formation des travailleurs payés", "Épargne, finances et taxes professionnelles"], answer: 0, why: "EFTP veut dire Enseignement et formation techniques et professionnels." },
          { objective: "O1", q: "Vous voulez vérifier la demande en plombiers dans votre ville. Quelle étape est la meilleure ?", options: ["Croire l'affiche d'une école de formation", "Interroger une entreprise de plomberie et compter les offres d'emploi locales", "Chercher des emplois de plombier sur un autre continent", "Deviner"], answer: 1, why: "Les employeurs et les offres d'emploi locaux sont de vraies preuves de la demande là où vous vivez." },
          { objective: "O2", q: "Quelle formation vous fait travailler chez un employeur pendant que vous apprenez ?", options: ["Une courte vidéo en ligne", "Un séminaire d'une journée", "Un apprentissage", "Un manuel"], answer: 2, why: "L'apprentissage, c'est apprendre sur le terrain avec une personne qualifiée ou un employeur." },
          { objective: "O2", q: "Vous avez appris la soudure auprès d'un maître dans un atelier, mais votre certificat n'est pas reconnu. Qu'est-ce qui peut aider ?", options: ["Acheter un certificat en ligne", "Arrêter la soudure", "Imprimer votre propre certificat", "Vous renseigner pour passer l'examen national de métier ou une évaluation"], answer: 3, why: "Un examen national de métier ou une évaluation peut donner un diplôme reconnu pour des compétences que vous avez déjà." },
          { objective: "O2", q: "Deux formations se ressemblent. Quel détail compte le plus pour les comparer ?", options: ["La couleur de l'uniforme", "Qui délivre ou reconnaît le diplôme", "Le nombre de photos sur leur site web", "La taille de leur enseigne"], answer: 1, why: "Un diplôme reconnu par l'autorité nationale vaut beaucoup plus aux yeux des employeurs." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Vérifier l'établissement et faire votre choix",
      lessons: [
        {
          title: "Est-il accrédité ? Vérifier le registre officiel",
          objectives: ["O3"],
          minutes: 6,
          goal: "Vérifier sur le site officiel de l'autorité nationale de l'EFTP qu'un établissement et sa formation sont enregistrés ou accrédités.",
          text: [
            "La plupart des pays ont un organisme public qui enregistre ou accrédite les établissements et les formations de l'EFTP. Accrédité veut dire que l'autorité a vérifié que l'établissement respecte ses normes. Le certificat d'un établissement non accrédité peut être refusé par les employeurs, par d'autres écoles ou pour un emploi à l'étranger.",
            "Exemples : au Kenya, la TVET Authority (TVETA) autorise, enregistre et accrédite les établissements et publie une liste des établissements accrédités sur tveta.go.ke. Au Nigeria, le National Board for Technical Education (NBTE) encadre les établissements de l'EFTP comme les polytechniques et les collèges techniques. Aux Philippines, TESDA liste les centres de formation qui ont des programmes enregistrés. Au Ghana, cherchez la Commission for TVET (CTVET) ; en Inde, le National Council for Vocational Education and Training (NCVET) et Skill India ; au Maroc, l'OFPPT est un grand organisme public de formation ; au Mexique, CONALEP est un réseau public d'écoles techniques ; en Colombie, le SENA est le service public de formation. Au Sénégal, en Égypte et dans d'autres pays, commencez par le ministère chargé de la formation professionnelle ou technique. Aux États-Unis, vérifiez les Registered Apprenticeships sur apprenticeship.gov et renseignez-vous auprès de votre État sur les écoles agréées.",
            "Vérifiez le nom de l'établissement ET celui de la formation. Un établissement peut être enregistré alors qu'un de ses cours ne l'est pas. Utilisez le site officiel (qui se termine souvent par .gov, .go.ke, .gov.ng, .gov.ph ou l'extension gouvernementale de votre pays), pas un lien envoyé par l'école ou un agent. Si vous ne trouvez pas l'établissement, appelez ou allez au bureau de l'autorité et posez la question."
          ],
          steps: ["Trouvez l'autorité de l'EFTP de votre pays sur le site du ministère de l'Éducation ou du Travail.", "Ouvrez vous-même son site officiel ; n'utilisez pas un lien de l'école.", "Cherchez dans le registre le nom exact de l'établissement et de son antenne.", "Vérifiez que votre formation y figure aussi.", "Notez le site, la date et ce qu'il indiquait. S'il n'y figure pas, interrogez directement l'autorité."],
          words: [["Accrédité", "vérifié et approuvé par un organisme officiel comme respectant ses normes."], ["Registre", "une liste officielle, ici des établissements et des formations approuvés."], ["Autorité", "l'organisme public responsable d'un domaine, ici de l'EFTP."]],
          slides: [
            { title: "Pourquoi l'accréditation compte", bullets: ["L'autorité a vérifié les normes de l'établissement", "Un certificat non accrédité peut être refusé"] },
            { title: "Quelques autorités nationales", bullets: ["Kenya : TVETA. Nigeria : NBTE", "Philippines : TESDA. Ghana : CTVET. Inde : NCVET", "Mexique : CONALEP. Colombie : SENA. Maroc : OFPPT"] },
            { title: "Vérifiez les deux", bullets: ["L'établissement et l'antenne exacts", "La formation exacte que vous voulez"] },
            { title: "Vérifiez en sécurité", bullets: ["Ouvrez vous-même le site officiel", "Pas un lien de l'école ou d'un agent", "Notez où et quand vous avez vérifié"] }
          ],
          sources: [{ name: "TVETA Kenya : établissements de l'EFTP accrédités", url: "https://www.tveta.go.ke/accredited-tvet-institutions/" }, { name: "National Board for Technical Education (Nigeria)", url: "https://web.nbte.gov.ng/" }, { name: "TESDA (Philippines) : programmes enregistrés", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (États-Unis)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Trouvez l'autorité officielle de l'EFTP de votre pays. Ouvrez vous-même son site et cherchez un établissement près de chez vous et la formation que vous voulez. Notez l'adresse du site, la date du jour et ce que vous avez trouvé. Si vous n'avez pas trouvé l'établissement, notez le numéro de téléphone ou le bureau que vous allez contacter.",
          youCanNow: "trouver l'autorité de l'EFTP de votre pays et vérifier sur son registre officiel qu'un établissement et sa formation sont accrédités.",
          quickCheck: [
            { objective: "O3", q: "Une école vous envoie un lien pour « prouver » qu'elle est accréditée. Que faites-vous ?", options: ["Faire confiance au lien parce qu'il a l'air officiel", "Ouvrir vous-même le site officiel de l'autorité et chercher l'école", "Payer les frais d'abord et vérifier ensuite", "Demander à l'agent de l'école si c'est vrai"], answer: 1, why: "Un lien de l'école peut mener à une fausse page ; allez vous-même sur le site officiel." },
            { objective: "O3", q: "L'établissement figure au registre, mais pas votre formation. Qu'est-ce qui est vrai ?", options: ["La formation est sûrement correcte", "Seul le bâtiment doit être enregistré", "La formation n'est peut-être pas accréditée ; interrogez l'autorité avant de vous inscrire", "Cela ne compte pas pour les employeurs"], answer: 2, why: "Les établissements et les formations sont souvent vérifiés séparément ; vérifiez aussi la formation." }
          ]
        },
        {
          title: "Questions à poser et comment repérer une fausse école",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Poser six questions clés à un établissement et nommer les signaux d'alerte d'une arnaque à la formation.",
          text: [
            "Visitez l'établissement si vous le pouvez, et demandez : Combien d'heures de pratique aurai-je ? Puis-je voir l'atelier et l'équipement ? Qui sont les formateurs, et ont-ils travaillé dans le métier ? Quel examen ou quelle évaluation y a-t-il à la fin, et qui délivre le certificat ? Combien d'anciens élèves ont trouvé du travail ou créé une entreprise, et puis-je parler à l'un d'eux ? Quel est le coût total, outils, examens et uniformes compris, et quelle est la règle de remboursement ? Notez chaque réponse.",
            "Les bons établissements répondent clairement et vous laissent voir l'atelier. Méfiez-vous s'ils ne montrent qu'une salle de classe, ne peuvent citer aucun employeur qui embauche leurs diplômés, ou refusent de mettre les frais par écrit.",
            "Signaux d'alerte d'une fausse école ou d'une arnaque : un emploi promis ou « garanti », surtout à l'étranger ; une pression pour payer aujourd'hui ; des frais versés sur le téléphone ou le compte d'une personne au lieu du compte officiel de l'école avec un reçu ; pas de vraie adresse ; un certificat complet en quelques jours sans pratique ; une demande de garder votre passeport ou votre carte d'identité. Ne payez jamais pour obtenir un emploi, gardez vos propres documents et vérifiez d'abord l'établissement sur le registre officiel.",
            "Si vous pensez que c'est une arnaque, ne payez pas. Signalez-la à l'autorité de l'EFTP ou à la police, et prévenez vos amis."
          ],
          steps: ["Demandez les heures de pratique, l'atelier et l'équipement.", "Demandez qui sont les formateurs et quelle expérience ils ont.", "Demandez l'examen final et qui délivre le certificat.", "Demandez les emplois des anciens élèves, le coût total et les remboursements.", "Notez chaque réponse et comparez-la aux signaux d'alerte."],
          words: [["Remboursement", "l'argent qui vous est rendu si vous partez ou si le cours est annulé."], ["Reçu", "une preuve écrite ou imprimée de votre paiement, avec le nom de l'établissement."]],
          slides: [
            { title: "Six questions à poser", bullets: ["Heures de pratique ? Atelier et équipement ?", "Expérience des formateurs ? Examen final et certificat ?", "Emplois des anciens élèves ? Coût total et remboursements ?"] },
            { title: "Bons signes", bullets: ["Réponses claires, frais par écrit", "Vous pouvez voir un atelier qui fonctionne", "Vous pouvez parler à d'anciens élèves"] },
            { title: "Signaux d'alerte", bullets: ["« Emploi garanti », surtout à l'étranger", "Payer aujourd'hui, sur un téléphone ou un compte personnel", "Pas d'adresse ; certificat en quelques jours ; garde votre passeport"] },
            { title: "Si cela ressemble à une arnaque", bullets: ["Ne payez pas", "Signalez-la à l'autorité de l'EFTP ou à la police", "Prévenez vos amis"] }
          ],
          tryIt: "Écrivez les six questions sur une feuille. Posez-les à un établissement, en visite ou par téléphone, ou à quelqu'un qui y a étudié. Notez chaque réponse. Puis entourez chaque signal d'alerte que vous avez entendu.",
          youCanNow: "poser à un établissement les questions importantes, noter les réponses et repérer les signaux d'alerte d'une fausse école.",
          quickCheck: [
            { objective: "O4", q: "Quelle question vous dit le mieux combien de vraie pratique vous aurez ?", options: ["« L'uniforme est-il joli ? »", "« Avez-vous un site web ? »", "« L'école est-elle près d'un arrêt de bus ? »", "« Combien d'heures vais-je travailler à l'atelier avec du vrai équipement ? »"], answer: 3, why: "Les heures de pratique et le vrai équipement sont la façon d'apprendre un métier." },
            { objective: "O5", q: "Un recruteur dit : « Payez aujourd'hui sur mon téléphone et vous aurez un emploi garanti à l'étranger après le cours. » Qu'est-ce que c'est ?", options: ["Un signal d'alerte d'arnaque ; ne payez pas", "Une offre normale d'école", "Une bourse de l'État", "Une bonne affaire si c'est bon marché"], answer: 0, why: "Un emploi garanti, la pression pour payer tout de suite et le paiement sur un téléphone personnel sont des signes classiques d'arnaque." }
          ]
        },
        {
          title: "Comparer et décider : votre plan de décision de formation",
          objectives: ["O2", "O6"],
          minutes: 6,
          goal: "Rédiger un plan de décision de formation d'une page avec votre choix, les coûts, le financement et les dates.",
          text: [
            "Mettez vos deux meilleures formations côte à côte dans un tableau : type, durée, conditions d'admission, coût total, diplôme et qui le délivre, accréditation (où vous avez vérifié), réponses à vos six questions et signaux d'alerte. Le meilleur choix n'est pas toujours le moins cher : c'est la formation accréditée qui offre le plus de pratique et les meilleures preuves que les diplômés trouvent du travail.",
            "Prévoyez comment vous paierez. Écrivez le coût total et la date de chaque paiement. Cherchez de l'aide uniquement auprès de sources officielles : bourses ou prêts de l'État ou formations publiques gratuites dans certains pays, bourses d'employeurs ou de groupes communautaires, ou un apprentissage qui vous paie pendant que vous apprenez. Vérifiez toute offre de financement sur le site officiel de l'organisme qui la donne, et ne payez jamais de frais pour obtenir une bourse.",
            "Notez les dates : ouverture et clôture des inscriptions, documents demandés (gardez les originaux et donnez des copies), date de début et date de l'examen final. Montrez votre plan à un parent, un enseignant, un conseiller d'orientation ou une personne du métier, et demandez ce que vous avez oublié."
          ],
          steps: ["Faites un tableau qui compare vos deux meilleures formations.", "Choisissez-en une et écrivez pourquoi.", "Écrivez le coût total, les dates de paiement et comment vous paierez.", "Écrivez les documents, la date limite d'inscription, la date de début et la date de l'examen.", "Montrez le plan à une personne de confiance et corrigez ce qu'elle trouve."],
          words: [["Bourse", "de l'argent donné pour aider un élève à payer ses études, que l'on ne rembourse pas."], ["Date limite", "le dernier jour pour faire quelque chose, par exemple s'inscrire."]],
          slides: [
            { title: "Côte à côte", bullets: ["Type, durée, admission, coût total, diplôme", "Accréditation et où vous avez vérifié", "Réponses de l'établissement et signaux d'alerte"] },
            { title: "Le meilleur n'est pas toujours le moins cher", bullets: ["Accrédité", "Le plus de pratique", "Les meilleures preuves que les diplômés trouvent du travail"] },
            { title: "Payer la formation", bullets: ["Coût total et dates de paiement", "Bourses, prêts, apprentissages rémunérés", "Vérifiez sur les sites officiels ; ne payez jamais pour une bourse"] },
            { title: "Dates et documents", bullets: ["Date limite d'inscription et date de début", "Gardez les originaux ; donnez des copies", "Montrez le plan à une personne de confiance"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan de décision de formation d'une page : votre métier et pourquoi, deux formations comparées, où vous avez vérifié l'accréditation, les réponses de l'établissement, les signaux d'alerte, votre choix, comment vous paierez, et les dates d'inscription, de début et d'examen final. Montrez-le à une personne de confiance.",
          youCanNow: "comparer deux formations et rédiger un plan de décision avec votre choix, les coûts, le financement, les documents et les dates.",
          quickCheck: [
            { objective: "O6", q: "Quelqu'un vous offre une bourse si vous payez d'abord des « frais de dossier ». Que faites-vous ?", options: ["Payer vite avant la clôture", "Envoyer une copie de votre passeport pour réserver la place", "Ne pas payer ; vérifier la bourse sur le site officiel de l'organisme", "Emprunter de l'argent pour payer les frais"], answer: 2, why: "Les vraies bourses ne vous font pas payer pour les recevoir ; vérifiez-les sur le site officiel." },
            { objective: "O2", q: "La formation A est moins chère mais non accréditée. La formation B coûte plus, est accréditée et a un atelier complet. Laquelle est en général le meilleur choix ?", options: ["La formation A, parce qu'elle est moins chère", "Aucune ; ne jamais se former", "Celle qui finit le plus vite", "La formation B, si vous trouvez un moyen de payer"], answer: 3, why: "Une formation accréditée avec une vraie pratique vaut plus pour les employeurs qu'une formation bon marché non reconnue." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Vérifier l'établissement et faire votre choix",
        questions: [
          { objective: "O3", q: "Au Kenya, quel organisme publie la liste des établissements de l'EFTP accrédités ?", options: ["La TVET Authority (TVETA)", "Une agence de publicité privée", "N'importe quel agent de recrutement", "La page Facebook de l'école"], answer: 0, why: "La TVETA autorise, enregistre et accrédite les établissements de l'EFTP au Kenya et les liste sur son site." },
          { objective: "O3", q: "Que devez-vous noter après avoir consulté un registre ?", options: ["Rien", "Seulement le slogan de l'école", "Le site, la date et ce qu'il indiquait", "Le numéro de téléphone de l'agent"], answer: 2, why: "Une trace de l'endroit et du moment où vous avez vérifié est votre preuve." },
          { objective: "O4", q: "L'école refuse de vous montrer son atelier. Qu'est-ce que cela vous dit ?", options: ["Rien d'important", "C'est un signal d'alerte ; posez d'autres questions ou cherchez ailleurs", "L'école doit être excellente", "Les ateliers ne comptent pas dans l'EFTP"], answer: 1, why: "La pratique est au cœur de l'EFTP ; une école qui cache son atelier n'en a peut-être pas." },
          { objective: "O5", q: "Lequel est un signal d'alerte d'une fausse école ?", options: ["Des frais inscrits sur un reçu officiel", "La visite d'un atelier qui fonctionne", "Des formateurs qui ont travaillé dans le métier", "Un certificat complet en trois jours sans pratique"], answer: 3, why: "Un vrai métier demande de la pratique ; un certificat rapide sans pratique est le signe d'une fausse école." },
          { objective: "O6", q: "Que doit contenir votre plan de décision de formation ?", options: ["La formation choisie, le coût total, comment vous paierez et les dates clés", "Seulement le nom de l'école", "Vos mots de passe", "Une liste de vos amis"], answer: 0, why: "Un plan utile dit ce que vous avez choisi, ce que cela coûte, comment vous paierez et quand les choses se passent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Choisir une formation professionnelle et technique (EFTP)",
    questions: [
      { objective: "O1", q: "Lequel est un exemple de formation de l'EFTP ?", options: ["Un certificat en mécanique automobile", "Une loterie", "Une application d'épargne", "Un service de musique en ligne"], answer: 0, why: "La mécanique automobile est un métier enseigné dans les formations de l'EFTP." },
      { objective: "O1", q: "Avant de choisir un métier, que devez-vous regarder en plus de vos intérêts ?", options: ["Votre couleur préférée", "Des preuves d'emplois ou de clients là où vous vivez", "Ce qui est populaire sur les réseaux sociaux cette semaine", "Le métier au nom le plus court"], answer: 1, why: "Un métier convient le mieux quand vous l'aimez et que des gens près de chez vous embauchent ou achètent." },
      { objective: "O1", q: "De quelle source d'information sur l'emploi devez-vous le plus vous méfier ?", options: ["Un employeur que vous avez interrogé", "Le nombre d'offres d'emploi dans votre ville", "La publicité d'une école qui vend le cours", "Des gens qui exercent déjà le métier"], answer: 2, why: "Une école qui vend un cours a intérêt à dire que son métier est demandé." },
      { objective: "O2", q: "Qu'est-ce qu'un apprentissage ?", options: ["Un court quiz en ligne", "Un type de prêt", "Un uniforme scolaire", "Apprendre un métier en travaillant avec une personne qualifiée ou un employeur"], answer: 3, why: "Les apprentis apprennent sur le terrain, souvent avec une paie." },
      { objective: "O2", q: "Quels cinq points devez-vous comparer entre les formations ?", options: ["Type, durée, conditions d'admission, coût total et diplôme", "Logo, couleurs, site web, slogan et musique", "Seulement le prix", "Seulement la distance"], answer: 0, why: "Ces cinq points montrent ce que vous obtenez, ce qu'il faut et ce que cela coûte." },
      { objective: "O2", q: "Quel coût est souvent oublié quand on compare des formations ?", options: ["Aucun ; le prix de l'affiche est toujours complet", "Les outils, les frais d'examen et le transport", "La facture d'électricité de l'école", "Le salaire du formateur"], answer: 1, why: "Les outils, les examens et le transport peuvent beaucoup augmenter le coût réel." },
      { objective: "O2", q: "Qui doit délivrer ou reconnaître votre diplôme pour qu'il ait le plus de poids ?", options: ["Seulement l'école", "Un ami", "L'autorité nationale de l'EFTP ou un organisme certificateur reconnu", "Un forum en ligne"], answer: 2, why: "La reconnaissance nationale montre aux employeurs que la formation respecte une norme officielle." },
      { objective: "O3", q: "Que veut dire « accrédité » ?", options: ["L'école a une grande enseigne", "L'école est chère", "L'école est populaire en ligne", "Un organisme officiel l'a vérifiée et approuvée comme respectant des normes"], answer: 3, why: "L'accréditation est une vérification officielle par rapport à des normes." },
      { objective: "O3", q: "Aux Philippines, quel organisme liste les centres de formation qui ont des programmes enregistrés ?", options: ["TESDA", "Une agence de voyage", "Une banque", "Un opérateur téléphonique"], answer: 0, why: "TESDA enregistre les programmes et liste les établissements qui les proposent." },
      { objective: "O3", q: "Où devez-vous vérifier si une école est accréditée ?", options: ["Sur un lien que l'école vous envoie", "Sur le site officiel de l'autorité nationale de l'EFTP, ouvert par vous-même", "Sur l'affiche de l'école", "En demandant à l'agent qui vend le cours"], answer: 1, why: "Seul le site de l'autorité, ouvert par vous, est une vérification fiable." },
      { objective: "O3", q: "L'école est accréditée, mais votre formation ne figure pas au registre. Vous devez :", options: ["Vous inscrire quand même", "L'ignorer", "Interroger l'autorité avant de vous inscrire", "Payer des frais pour régler le problème"], answer: 2, why: "Les formations peuvent être accréditées séparément de l'école ; interrogez donc l'autorité." },
      { objective: "O4", q: "Quelle question vous aide à savoir si les diplômés trouvent du travail ?", options: ["« De quelle couleur sont les murs ? »", "« Avez-vous un parking ? »", "« Y a-t-il une cantine ? »", "« Combien d'anciens élèves ont trouvé du travail, et puis-je parler à l'un d'eux ? »"], answer: 3, why: "Parler à d'anciens élèves montre les vrais résultats." },
      { objective: "O4", q: "Pourquoi noter chaque réponse de l'école ?", options: ["Pour comparer les écoles et leur rappeler ce qu'elles ont dit", "Pour rendre la visite plus longue", "Parce que les écoles l'exigent", "Ce n'est pas utile"], answer: 0, why: "Des réponses écrites permettent de comparer équitablement et de se souvenir des promesses." },
      { objective: "O4", q: "Quelle réponse d'une école est un bon signe ?", options: ["« Nous ne pouvons pas mettre les frais par écrit. »", "« Venez voir l'atelier, et voici la liste complète des frais. »", "« Vous n'avez pas besoin de pratique pour avoir notre certificat. »", "« Payez aujourd'hui ou vous perdez votre place. »"], answer: 1, why: "Montrer l'atelier et donner les frais par écrit sont des signes d'une vraie école." },
      { objective: "O5", q: "Lequel est un signal d'alerte d'une arnaque à la formation ?", options: ["Un reçu officiel", "Une règle de remboursement claire", "Un emploi « garanti » à l'étranger si vous payez maintenant", "La visite de l'atelier"], answer: 2, why: "Les emplois garantis et la pression pour payer sont des signes classiques d'arnaque." },
      { objective: "O5", q: "Une école demande à garder votre passeport jusqu'à la fin du cours. Vous devez :", options: ["Le remettre", "En envoyer une photo à l'agent", "Le leur laisser pour gagner du temps", "Garder votre passeport et vos documents ; ne donner que des copies"], answer: 3, why: "Ne cédez jamais votre passeport ou votre pièce d'identité ; garder les documents de quelqu'un est un signal d'alerte d'abus." },
      { objective: "O5", q: "Vous pensez qu'une offre de formation est une arnaque. Que faites-vous ?", options: ["Ne pas payer, et la signaler à l'autorité de l'EFTP ou à la police", "Payer une petite somme pour tester", "Donner vos coordonnées bancaires pour vérifier", "N'en parler à personne"], answer: 0, why: "Ne pas payer et signaler l'arnaque vous protège, vous et les autres." },
      { objective: "O6", q: "Que doit contenir votre plan de décision de formation au sujet de l'argent ?", options: ["Rien", "Le coût total, les dates de paiement et comment vous paierez", "Seulement les premiers frais", "Le mot de passe de votre banque"], answer: 1, why: "Connaître le coût total et comment vous paierez évite les surprises en cours de route." },
      { objective: "O6", q: "Quel financement devez-vous vérifier sur un site officiel avant de lui faire confiance ?", options: ["Aucun", "Seulement les prêts", "Toute offre de bourse ou de prêt", "Seulement les offres d'amis"], answer: 2, why: "Les fausses bourses existent ; vérifiez chaque offre auprès de l'organisme qui la donne." },
      { objective: "O6", q: "Avant d'envoyer votre dossier d'inscription, quelle est une bonne dernière étape ?", options: ["Donner vos documents originaux à un agent", "Supprimer votre tableau de comparaison", "Payer des frais en plus pour aller plus vite", "Montrer votre plan à un enseignant, un conseiller d'orientation ou une personne du métier"], answer: 3, why: "Une autre personne peut repérer ce que vous avez oublié." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 4, 7, 9, 12, 14, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Métier adapté à vous et aux emplois locaux", objective: "O1", notYet: "Le métier est choisi sans raison ou sans preuve de demande.", meets: "Dit pourquoi le métier convient et donne au moins une preuve d'emplois locaux.", exceeds: "Donne des preuves venant de deux sources ou plus, comme des offres d'emploi et une conversation avec un employeur." },
      { name: "Formations comparées", objective: "O2", notYet: "Une seule formation, ou le tableau a des cases vides.", meets: "Deux formations comparées selon le type, la durée, les conditions d'admission, le coût total et le diplôme.", exceeds: "Inclut aussi les coûts cachés et qui délivre ou reconnaît chaque diplôme." },
      { name: "Accréditation vérifiée", objective: "O3", notYet: "Aucune vérification, ou la vérification a utilisé un lien de l'école.", meets: "Établissement et formation vérifiés sur le site officiel de l'autorité nationale, avec où et quand.", exceeds: "A aussi contacté l'autorité pour confirmer ce qui n'était pas clair." },
      { name: "Questions posées et arnaques écartées", objective: "O4", notYet: "Aucune réponse de l'établissement notée, ou signaux d'alerte ignorés.", meets: "Réponses aux six questions notées et signaux d'alerte nommés.", exceeds: "A aussi parlé de l'établissement avec un ancien élève ou un employeur." },
      { name: "Plan de décision", objective: "O6", notYet: "Pas de choix, de coût ni de dates.", meets: "Un choix clair avec le coût total, le moyen de payer, les documents et les dates.", exceeds: "Relu par une personne de confiance, avec ses remarques ajoutées." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réalisent le plan de décision (grille d'évaluation)",
      "Apprenants qui s'inscrivent dans une formation de l'EFTP accréditée ou un apprentissage dans les 3 mois",
      "Apprenants qui disent avoir vérifié un établissement sur un registre officiel avant de payer (suivi à 30 jours)",
      "Apprenants qui disent avoir évité ou signalé une fausse école ou une arnaque à la formation",
      "Les programmes partenaires signalent moins d'apprenants perdus au profit d'établissements non accrédités ou d'arnaques à la formation"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour consulter les registres officiels (un ordinateur partagé ou de cybercafé convient)",
      "Du papier et un stylo pour les tableaux et le plan de décision",
      "Le nom et le site web de l'autorité de l'EFTP de votre pays (trouvés à la leçon 4)",
      "Environ 60 à 75 minutes au total, plus le temps de visiter ou d'appeler un établissement"
    ],
    facilitatorNotes: [
      "Avant la séance, trouvez l'autorité de l'EFTP de votre pays et la page de son registre, et vérifiez qu'elle s'ouvre ; les registres changent d'adresse et certains sites sont lents.",
      "Invitez un employeur local ou un diplômé d'une formation de l'EFTP à répondre aux questions pendant la leçon 2 ou la leçon 5.",
      "Ne recommandez pas d'établissements précis ; apprenez aux apprenants à vérifier et à comparer par eux-mêmes.",
      "Rappelez aux apprenants de ne jamais payer un agent ni remettre leur passeport ou leur pièce d'identité ; signalez les arnaques présumées à l'autorité de l'EFTP ou à la police.",
      "Notez le plan de décision avec la grille d'évaluation et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
