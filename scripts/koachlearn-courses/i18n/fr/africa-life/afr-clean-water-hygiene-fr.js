"use strict";

// Koach Learn course (French translation of africa-life/afr-clean-water-hygiene.js). See scripts/koachlearn-courses/README.md, "Translations".
// Prevention only, exactly as in the English: no medicine doses, treatment plans or diagnosis; every lesson points to the clinic, the community health worker and the ministry of health.

const WHO_WATER = { name: "Organisation mondiale de la Santé (OMS), aide-mémoire : Eau potable", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "Centres américains pour le contrôle et la prévention des maladies (CDC) : rendre l'eau sûre (faire bouillir, laisser reposer et filtrer, désinfecter)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC : À propos du lavage des mains (moments clés et étapes)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "Programme commun OMS/UNICEF de suivi (JMP) : échelle de l'assainissement", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "Organisation mondiale de la Santé, aide-mémoire : Maladies diarrhéiques", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "Organisation mondiale de la Santé, aide-mémoire : Choléra", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene-fr",
  lang: "fr",
  translationOf: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Eau potable, assainissement et hygiène à la maison",
  skills: "Choisir la source d'eau la plus sûre, Rendre l'eau de boisson plus sûre, Conserver l'eau en sécurité, Se laver les mains au savon, Garder les toilettes et les selles des enfants sans danger, Repérer les signes de danger de la diarrhée et du choléra",
  outcome: "protéger l'eau, les mains et les toilettes de votre famille : choisir l'eau la plus sûre, la rendre plus sûre à la maison, la conserver couverte, vous laver les mains au savon aux moments clés, vous débarrasser des selles sans danger et reconnaître les signes d'alerte qui veulent dire : allez au centre de santé tout de suite.",
  about: [
    "Les microbes de l'eau, des mains et des selles provoquent la diarrhée, le choléra et la fièvre typhoïde. La diarrhée est l'une des premières causes de décès des jeunes enfants, et on peut en éviter la plus grande partie avec de l'eau sûre, du savon et des toilettes propres. Ce cours s'adresse aux mères, aux pères, aux grands-parents, aux personnes qui s'occupent d'enfants et aux jeunes, en ville comme au village, au Kenya, au Nigeria, au Ghana, en RD Congo, au Sénégal, en Égypte et partout en Afrique.",
    "Vous allez comparer les sources d'eau près de chez vous, rendre l'eau de boisson plus sûre en la faisant bouillir ou avec un produit chloré, la conserver pour qu'elle reste propre, installer un endroit pour se laver les mains au savon, garder les toilettes et les selles des enfants sans danger, et apprendre les signes de danger de la diarrhée et du choléra.",
    "Ce cours enseigne la prévention et le moment où il faut chercher de l'aide. Il ne vous dit pas comment soigner une maladie ni quel médicament donner : cela revient au centre de santé, à l'agent de santé communautaire et à votre ministère de la Santé. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" à la maison."
  ],
  finalTask: "Faites un plan d'une page pour l'eau propre et l'hygiène chez vous : votre source d'eau la plus sûre et une source de secours, comment vous rendrez l'eau de boisson plus sûre, comment vous la conserverez et la servirez, où se trouve votre endroit pour se laver les mains et à quels moments clés votre famille se lave les mains, comment vous gardez les toilettes et les selles des enfants sans danger, et une carte des signes de danger avec le nom et le numéro de téléphone du centre de santé ou de l'agent de santé communautaire le plus proche.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des mères, des pères, des grands-parents, des personnes qui s'occupent d'enfants et des jeunes partout en Afrique, en ville, dans les quartiers informels et dans les villages. Beaucoup vont chercher l'eau à un forage, un puits, une borne-fontaine payante, une rivière ou un robinet partagé, ou l'achètent en sachets ou en bidons, et partagent des toilettes ou une latrine.",
    startingPoint: "Ils savent que l'eau sale peut rendre malade et font souvent bouillir l'eau des bébés. Beaucoup ne traitent pas toute l'eau de boisson, la conservent dans des récipients ouverts, y plongent des gobelets à la main, se lavent les mains sans savon ou seulement à l'eau, et ne savent pas bien quels signes de la diarrhée exigent d'aller tout de suite au centre de santé.",
    gap: "La diarrhée, le choléra et la fièvre typhoïde se transmettent par l'eau non sûre, les mains non lavées et les selles, et tuent beaucoup de jeunes enfants. Pour protéger leurs enfants, les familles ont besoin de quelques habitudes quotidiennes (eau sûre, savon aux bons moments et toilettes sûres) et de savoir quand aller tout de suite au centre de santé.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants parlent la langue du cours comme seconde langue",
      "Appareils : un téléphone simple avec des données chères ; les leçons fonctionnent hors ligne une fois chargées",
      "Argent : petits budgets ; utiliser des méthodes peu coûteuses (faire bouillir, produits chlorés vendus pour l'eau, savon, un dispositif simple de lavage des mains)",
      "Santé : prévention et signes d'alerte seulement ; pas de doses de médicaments, de traitement ni de diagnostic ; les apprenants suivent leur centre de santé, leur agent de santé communautaire et leur ministère de la Santé",
      "Temps : leçons de 4 à 6 minutes, entre les tâches ménagères et le travail"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des sources d'eau près de chez vous", action: "classer les sources d'eau de la plus sûre à la plus risquée et en choisir une pour boire", standard: "en donnant une raison pour chacune et en nommant une source de secours" },
    { id: "O2", condition: "Avec l'eau de votre source et ce que vous avez à la maison", action: "rendre l'eau de boisson plus sûre en la faisant bouillir ou avec un produit chloré vendu pour l'eau", standard: "en suivant chaque étape, y compris laisser reposer ou filtrer d'abord l'eau trouble et suivre l'étiquette du produit" },
    { id: "O3", condition: "Avec de l'eau traitée et les récipients de votre maison", action: "conserver et servir l'eau de boisson sans que les mains ni la saleté la touchent", standard: "en utilisant un récipient propre et couvert, en versant ou en utilisant un robinet, sans jamais y plonger quoi que ce soit" },
    { id: "O4", condition: "Avec du savon ou de la cendre et de l'eau à la maison", action: "vous laver les mains au savon aux moments clés et installer un endroit pour se laver les mains", standard: "en frottant chaque partie des mains pendant au moins 20 secondes, avec le dispositif près des toilettes et de la cuisine" },
    { id: "O5", condition: "Avec vos toilettes ou votre latrine et de jeunes enfants à la maison", action: "garder les toilettes propres et vous débarrasser des selles des enfants sans danger", standard: "sans aucune selle laissée à l'air libre et avec un couvercle ou une couverture en place" },
    { id: "O6", condition: "Face à un membre de la famille qui a la diarrhée ou des selles liquides", action: "repérer les signes de danger de la déshydratation et du choléra et emmener la personne tout de suite au centre de santé", standard: "en nommant au moins quatre signes de danger et le centre de santé ou l'agent de santé communautaire le plus proche" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : De l'eau sûre à boire",
      lessons: [
        {
          title: "Choisir la source d'eau la plus sûre",
          objectives: ["O1"],
          minutes: 5,
          goal: "Classer les sources d'eau près de chez vous de la plus sûre à la plus risquée.",
          text: [
            "L'eau peut sembler claire et porter quand même des microbes. Le plus grand danger, ce sont les selles (excréments humains ou animaux) qui arrivent dans l'eau. L'OMS indique que l'eau non sûre peut transmettre la diarrhée, le choléra, la dysenterie, la fièvre typhoïde, l'hépatite A et la polio. L'eau des rivières et des lacs peut aussi porter des vers qui donnent la bilharziose (schistosomiase).",
            "Les sources plus sûres sont en général l'eau du réseau, un forage ou un puits protégé avec un couvercle et une pompe, les sources aménagées et l'eau de pluie recueillie dans une citerne propre et couverte. Les sources plus risquées sont les puits ouverts, les sources non aménagées, les rivières, les mares, les lacs et les barrages, où les gens et les animaux se lavent, se baignent et boivent. L'eau d'une borne-fontaine payante, d'un camion-citerne ou en sachet n'est sûre que si son origine et sa manipulation le sont.",
            "Regardez chaque source près de chez vous. Est-elle couverte ? Y a-t-il des toilettes, une latrine ou un enclos à animaux tout près, ou plus haut sur la pente ? Les gens y lavent-ils le linge ou y font-ils boire les animaux ? Choisissez la plus sûre pour boire et cuisiner, et une source de secours pour quand elle est à sec ou en panne. Même une bonne eau peut se salir en route vers la maison : vous allez donc quand même la traiter et bien la conserver (leçons suivantes)."
          ],
          steps: ["Listez toutes les sources d'eau qu'utilise votre famille.", "Pour chacune, demandez-vous : est-elle couverte, protégée et loin des toilettes et des animaux ?", "Classez-les de la plus sûre à la plus risquée.", "Choisissez-en une pour boire et cuisiner, et une source de secours.", "Utilisez l'eau plus risquée seulement pour laver, et traitez quand même toute eau que vous buvez."],
          words: [["Selles", "excréments humains ou animaux (caca)."], ["Source protégée", "un puits, un forage ou une source couverts et fermés pour que la saleté et l'eau de ruissellement ne puissent pas entrer."], ["Bilharziose (schistosomiase)", "une maladie causée par de tout petits vers qui vivent dans certaines rivières et certains lacs."]],
          slides: [
            { title: "Clair ne veut pas dire sûr", bullets: ["Les selles dans l'eau transmettent des microbes", "Diarrhée, choléra, typhoïde, hépatite A", "Rivières et lacs peuvent porter les vers de la bilharziose"] },
            { title: "En général plus sûres", bullets: ["Eau du réseau", "Forage ou puits protégé avec couvercle et pompe", "Source aménagée ; pluie dans une citerne propre et couverte"] },
            { title: "En général plus risquées", bullets: ["Puits ouverts et sources non aménagées", "Rivières, mares, lacs et barrages", "Borne payante, camion-citerne, sachet : sûrs comme leur origine"] },
            { title: "Vérifiez chaque source", bullets: ["Couverte ? Loin des toilettes et des animaux ?", "Choisissez la plus sûre pour boire, plus une de secours", "Traitez-la et conservez-la bien quand même"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Notez toutes les sources d'eau qu'utilise votre famille. Marquez chacune comme plus sûre ou plus risquée, et pourquoi. Entourez celle que vous utiliserez pour boire et la source de secours.",
          youCanNow: "comparer les sources d'eau près de chez vous et choisir la plus sûre pour boire, avec une source de secours.",
          quickCheck: [
            { objective: "O1", q: "Quelle source est en général la plus sûre pour boire ?", options: ["Un forage protégé avec un couvercle et une pompe", "Une rivière où boit le bétail", "Une mare à ciel ouvert", "Un barrage où les gens lavent le linge"], answer: 0, why: "Une source protégée et couverte empêche les selles et l'eau de ruissellement d'entrer." },
            { objective: "O1", q: "L'eau de la rivière semble claire. Qu'est-ce qui est vrai ?", options: ["L'eau claire est toujours sûre", "L'eau claire peut quand même porter des microbes, donc traitez-la avant de boire", "Seule l'eau marron est dangereuse", "Les rivières se nettoient toutes seules"], answer: 1, why: "Les microbes ne se voient pas ; l'eau claire peut quand même en porter." }
          ]
        },
        {
          title: "Rendre l'eau de boisson plus sûre à la maison",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rendre l'eau de boisson plus sûre en la faisant bouillir ou avec un produit chloré vendu pour l'eau.",
          text: [
            "Si votre eau risque de ne pas être sûre, traitez-la avant de la boire, avant de préparer la nourriture ou le lait en poudre du bébé et avant de vous brosser les dents. Deux moyens courants sont l'ébullition et le chlore. Les deux marchent mieux sur une eau claire.",
            "Si l'eau est trouble, laissez-la d'abord reposer dans un récipient propre pour que la saleté tombe au fond, puis versez l'eau claire à travers un tissu propre plié plusieurs fois. Laisser reposer et filtrer avec un tissu ne rend pas l'eau sûre à eux seuls ; cela la prépare à l'ébullition ou au chlore.",
            "Faire bouillir : portez l'eau à gros bouillons, avec de grosses bulles, pendant 1 minute. En haute montagne, au-dessus d'environ 2 000 mètres, faites bouillir 3 minutes. Laissez-la refroidir couverte, dans la même marmite ou dans un récipient propre.",
            "Chlore : utilisez un produit chloré vendu pour l'eau de boisson (liquide, comprimés ou sachets) ou celui que vous donne votre agent de santé. Suivez exactement l'étiquette : combien de produit pour combien d'eau, et combien de temps attendre avant de boire (souvent au moins 30 minutes). L'eau trouble peut en demander plus ; l'étiquette vous le dit. Gardez le chlore hors de portée des enfants. Si vous n'avez pas l'étiquette ou si vous avez un doute, demandez à votre agent de santé communautaire ou au centre de santé. L'OMS évalue certains produits de traitement de l'eau à domicile ; votre ministère de la Santé peut vous dire lesquels sont autorisés chez vous."
          ],
          steps: ["Si elle est trouble : laissez-la reposer, puis versez-la à travers un tissu propre plié.", "Faire bouillir : à gros bouillons pendant 1 minute (3 minutes en haute montagne), puis refroidir couverte.", "Ou chlore : ajoutez le produit comme l'indique l'étiquette, remuez et attendez le temps indiqué.", "Versez-la dans un récipient propre et couvert.", "Gardez les produits chlorés hors de portée des enfants."],
          words: [["À gros bouillons", "de l'eau qui bout fort, avec de grosses bulles qui ne s'arrêtent pas quand on remue."], ["Produit chloré", "un liquide, un comprimé ou un sachet vendu pour tuer les microbes dans l'eau de boisson."], ["Laisser reposer", "laisser l'eau immobile pour que la saleté tombe au fond."]],
          slides: [
            { title: "Quand traiter l'eau", bullets: ["Avant de boire", "Avant de préparer la nourriture ou le lait en poudre du bébé", "Avant de vous brosser les dents"] },
            { title: "D'abord l'eau trouble", bullets: ["Laissez-la reposer", "Versez-la à travers un tissu propre plié", "Cela la prépare ; elle n'est pas encore sûre"] },
            { title: "Faire bouillir", bullets: ["À gros bouillons pendant 1 minute", "3 minutes au-dessus d'environ 2 000 mètres", "Refroidir couverte"] },
            { title: "Chlore", bullets: ["Un produit vendu pour l'eau de boisson", "Suivez l'étiquette : quantité et temps d'attente", "Un doute ? Demandez à l'agent de santé ; loin des enfants"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Choisissez un moyen, l'ébullition ou un produit chloré, et traitez aujourd'hui un récipient d'eau de boisson, étape par étape. Notez chaque étape que vous avez faite.",
          youCanNow: "rendre plus sûre une eau trouble ou douteuse en la laissant reposer, puis en la faisant bouillir ou avec un produit chloré selon son étiquette.",
          quickCheck: [
            { objective: "O2", q: "Votre eau est trouble. Que faites-vous avant de la faire bouillir ou d'ajouter du chlore ?", options: ["Ajouter du sucre", "La boire vite", "La laisser reposer et la verser à travers un tissu propre plié", "Rien ; l'eau trouble, ça va"], answer: 2, why: "Laisser reposer et filtrer enlève la saleté, pour que l'ébullition ou le chlore marchent mieux." },
            { objective: "O2", q: "Combien de temps gardez-vous l'eau à gros bouillons à une altitude normale ?", options: ["Juste jusqu'à ce qu'elle soit tiède", "5 secondes", "Jusqu'à ce que la moitié soit partie", "1 minute"], answer: 3, why: "Les CDC conseillent 1 minute à gros bouillons, ou 3 minutes en haute montagne." }
          ]
        },
        {
          title: "Conserver et servir l'eau en sécurité",
          objectives: ["O3"],
          minutes: 4,
          goal: "Conserver et servir l'eau de boisson pour que les mains et la saleté ne puissent pas la toucher.",
          text: [
            "Une eau sûre peut se salir de nouveau à la maison. Les microbes entrent quand on plonge les mains ou des gobelets dans le récipient, quand on le laisse ouvert ou quand le récipient lui-même est sale.",
            "Gardez l'eau de boisson dans un récipient propre avec un couvercle, de préférence à col étroit ou avec un robinet. Gardez-le au-dessus du sol et loin des animaux. Versez l'eau ou utilisez le robinet ; ne plongez jamais un gobelet ni la main. Lavez souvent le récipient et le couvercle au savon et à l'eau sûre, et laissez-les sécher à l'envers.",
            "Couvrir l'eau empêche aussi les moustiques d'y pondre. Gardez l'eau de boisson à part de l'eau pour laver. Une famille à Kumasi, Lubumbashi ou Kano peut suivre la même règle : un récipient d'eau de boisson propre et couvert par maison, et personne n'y plonge rien."
          ],
          steps: ["Utilisez un récipient propre avec couvercle, col étroit ou robinet.", "Gardez-le surélevé, loin des animaux.", "Versez ou utilisez le robinet : ni gobelet ni main dedans.", "Lavez souvent le récipient au savon et à l'eau sûre.", "Gardez l'eau de boisson à part de l'eau pour laver."],
          words: [["Récipient", "un bidon, un seau, une marmite ou une bouteille qui contient de l'eau."], ["Plonger", "mettre un gobelet ou la main dans l'eau pour en prendre."]],
          slides: [
            { title: "Une eau sûre peut se salir de nouveau", bullets: ["Mains ou gobelets plongés dedans", "Récipients ouverts", "Récipients sales"] },
            { title: "Bien la conserver", bullets: ["Récipient propre avec couvercle, col étroit ou robinet", "Surélevé, loin des animaux", "À part de l'eau pour laver"] },
            { title: "Bien la servir", bullets: ["Versez, ou utilisez le robinet", "Ne plongez jamais un gobelet ni la main", "Lavez souvent le récipient au savon"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Regardez comment votre maison conserve l'eau de boisson. Est-elle couverte ? Quelqu'un y plonge-t-il un gobelet ? Faites un changement aujourd'hui : un couvercle, une louche à long manche accrochée à un clou, ou un récipient avec robinet.",
          youCanNow: "conserver et servir l'eau de boisson pour qu'elle reste propre après l'avoir traitée.",
          quickCheck: [
            { objective: "O3", q: "Quelle est la façon la plus sûre de prendre de l'eau dans le récipient de stockage ?", options: ["Y plonger un gobelet", "La verser ou utiliser un robinet", "Y plonger la main", "Laisser le couvercle ouvert pour aller vite"], answer: 1, why: "Verser ou utiliser un robinet garde les mains et les gobelets hors de l'eau propre." },
            { objective: "O3", q: "Pourquoi garder un couvercle sur le récipient d'eau de boisson ?", options: ["Il empêche la saleté, les mains et les moustiques d'entrer", "Il rend l'eau plus fraîche", "C'est seulement pour faire joli", "Il fait bouillir l'eau"], answer: 0, why: "Un couvercle empêche la saleté, les microbes et les œufs de moustiques d'entrer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : De l'eau sûre à boire",
        questions: [
          { objective: "O1", q: "Il y a une latrine juste au-dessus d'un puits ouvert peu profond. Que faites-vous ?", options: ["En boire ; elle a l'air claire", "Utiliser le puits seulement pour boire", "Choisir une source plus sûre pour boire, et traiter toute eau que vous buvez", "Mettre un couvercle sur la latrine seulement"], answer: 2, why: "Les selles peuvent couler d'une latrine vers un puits ouvert tout proche ; choisissez une source plus sûre et traitez l'eau de boisson." },
          { objective: "O2", q: "Quelle phrase sur les produits chlorés pour l'eau est juste ?", options: ["Mettez-en autant que vous voulez", "Buvez tout de suite", "N'importe quelle eau de Javel, c'est pareil", "Suivez l'étiquette pour la quantité et le temps d'attente"], answer: 3, why: "L'étiquette donne la bonne quantité et le temps d'attente pour ce produit." },
          { objective: "O2", q: "Vous vivez en haute montagne, au-dessus d'environ 2 000 mètres. Combien de temps faites-vous bouillir ?", options: ["3 minutes à gros bouillons", "10 secondes", "1 minute seulement", "Pas besoin de faire bouillir"], answer: 0, why: "En altitude, l'eau bout à une température plus basse ; les CDC conseillent donc 3 minutes." },
          { objective: "O3", q: "Votre enfant plonge un gobelet dans le seau d'eau. Quel est le meilleur changement ?", options: ["Lui dire de plonger plus vite", "Utiliser un récipient couvert dont on verse l'eau, ou avec un robinet", "Laisser le seau ouvert", "Ajouter du sucre à l'eau"], answer: 1, why: "Verser ou utiliser un robinet empêche les mains et les gobelets sales d'atteindre l'eau propre." },
          { objective: "O1", q: "L'eau d'une borne-fontaine payante ou d'un camion-citerne est...", options: ["Toujours sûre", "Jamais sûre", "Sûre seulement quand elle est tiède", "Sûre seulement si son origine et sa manipulation le sont"], answer: 3, why: "L'eau achetée peut être propre ou sale ; renseignez-vous sur son origine et conservez-la bien quand même." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mains propres, toilettes sûres, action rapide",
      lessons: [
        {
          title: "Se laver les mains au savon aux moments clés",
          objectives: ["O4"],
          minutes: 5,
          goal: "Vous laver les mains au savon aux moments clés et installer un endroit pour se laver les mains à la maison.",
          text: [
            "Se laver les mains au savon est l'un des moyens les moins chers d'éviter la diarrhée et les infections respiratoires. L'eau seule ne suffit pas ; le savon décolle les microbes.",
            "Moments clés : après être allé aux toilettes ; après avoir nettoyé les fesses d'un enfant ou changé une couche ; avant, pendant et après la préparation des repas ; avant de manger et avant de nourrir un enfant ; après s'être occupé d'un malade qui a la diarrhée ou qui vomit ; après s'être mouché, avoir toussé ou éternué ; et après avoir touché des animaux ou des ordures.",
            "Comment : mouillez vos mains à l'eau propre qui coule, mettez du savon, frottez les paumes, le dos des mains, entre les doigts et sous les ongles pendant au moins 20 secondes (à peu près le temps de chanter deux fois une courte chanson), rincez à l'eau qui coule et laissez sécher à l'air ou utilisez un tissu propre. Là où il n'y a pas de robinet, un dispositif de lavage des mains aide : un bidon ou une bouteille avec un petit trou et un bouchon, suspendu ou basculé avec un bâton actionné au pied (souvent appelé tippy tap), avec le savon attaché à une ficelle et un peu de gravier en dessous pour l'eau sale. Placez-le près des toilettes et près de l'endroit où vous cuisinez."
          ],
          steps: ["Mouillez les mains à l'eau propre qui coule.", "Mettez du savon.", "Frottez paumes, dos des mains, entre les doigts et sous les ongles pendant au moins 20 secondes.", "Rincez à l'eau qui coule.", "Séchez à l'air ou avec un tissu propre.", "Installez un dispositif près des toilettes et de la cuisine."],
          words: [["Moments clés", "les moments où se laver les mains arrête le plus de microbes."], ["Dispositif de lavage des mains", "un endroit fixe avec de l'eau et du savon pour se laver les mains."], ["Tippy tap", "un dispositif simple de lavage des mains fait d'un bidon ou d'une bouteille que l'on bascule avec une pédale."]],
          slides: [
            { title: "Du savon, pas seulement de l'eau", bullets: ["Le savon décolle les microbes des mains", "Il évite la diarrhée et les infections respiratoires"] },
            { title: "Moments clés", bullets: ["Après les toilettes ou après avoir nettoyé un enfant", "Avant de cuisiner, de manger ou de nourrir un enfant", "Après avoir soigné un malade ; après animaux ou ordures"] },
            { title: "Comment se laver", bullets: ["Mouiller, savonner, frotter au moins 20 secondes", "Paumes, dos, entre les doigts, sous les ongles", "Rincer à l'eau qui coule ; sécher à l'air ou tissu propre"] },
            { title: "Un dispositif à la maison", bullets: ["Bidon ou bouteille avec robinet ou bâton pour basculer", "Savon sur une ficelle ; gravier en dessous", "Près des toilettes et de la cuisine"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Installez ou améliorez aujourd'hui un endroit pour se laver les mains à la maison, avec de l'eau et du savon, près des toilettes ou de la cuisine. Puis montrez à chaque personne de la maison comment se laver pendant 20 secondes.",
          youCanNow: "bien vous laver les mains au savon aux moments clés et installer un endroit pour se laver les mains à la maison.",
          quickCheck: [
            { objective: "O4", q: "Quand devez-vous vous laver les mains au savon ?", options: ["Une seule fois par jour", "Seulement avant l'église ou la mosquée", "Après les toilettes, après avoir nettoyé les fesses d'un enfant et avant de cuisiner ou de manger", "Seulement quand elles ont l'air sales"], answer: 2, why: "Ces moments clés empêchent les microbes des selles d'atteindre la nourriture et la bouche." },
            { objective: "O4", q: "Combien de temps faut-il frotter avec le savon ?", options: ["2 secondes", "Jusqu'à ce que le savon soit parti", "Seulement les paumes, vite", "Au moins 20 secondes, toutes les parties des mains"], answer: 3, why: "Frotter chaque partie pendant au moins 20 secondes enlève les microbes." }
          ]
        },
        {
          title: "Des toilettes sûres et les selles des enfants",
          objectives: ["O5"],
          minutes: 5,
          goal: "Garder vos toilettes propres et vous débarrasser des selles des enfants sans danger.",
          text: [
            "Les selles laissées à l'air libre, dans la brousse, un champ, un caniveau ou une rivière, portent des microbes que les mouches, les pieds, la pluie et les mains ramènent vers la nourriture et l'eau. L'OMS et l'UNICEF (le Fonds des Nations unies pour l'enfance) considèrent des toilettes comme plus sûres quand elles séparent les selles des personnes : des toilettes à chasse d'eau ou à chasse manuelle, ou une latrine à fosse avec dalle. Des toilettes que votre ménage ne partage pas, c'est encore mieux.",
            "Gardez les toilettes ou la latrine propres : lavez souvent la dalle ou le siège, laissez le couvercle ou la couverture sur le trou pour éloigner les mouches, et gardez un endroit pour se laver les mains juste à côté. Les enfants ont aussi besoin de toilettes qu'ils peuvent utiliser sans danger, comme un pot ou un petit couvercle pour le trou.",
            "Les selles des jeunes enfants sont aussi dangereuses que celles des adultes. Mettez-les tout de suite dans les toilettes ou la latrine, y compris celles des couches et des pots, puis lavez le pot et vos mains au savon. Ne les laissez pas dans la cour et ne les jetez pas dans le caniveau ou aux ordures."
          ],
          steps: ["Lavez souvent la dalle ou le siège.", "Laissez le couvercle ou la couverture sur le trou.", "Gardez du savon et de l'eau juste à côté des toilettes.", "Mettez tout de suite les selles des enfants dans les toilettes.", "Lavez le pot et vos mains au savon."],
          words: [["Latrine", "des toilettes au-dessus d'une fosse creusée dans le sol."], ["Dalle", "le sol solide au-dessus d'une latrine à fosse, sur lequel on se tient."], ["Défécation à l'air libre", "faire ses besoins dans les champs, la brousse, les rivières ou d'autres lieux ouverts."]],
          slides: [
            { title: "Les selles à l'air libre reviennent", bullets: ["Mouches, pieds, pluie et mains portent les microbes", "Vers la nourriture et l'eau"] },
            { title: "Des toilettes plus sûres", bullets: ["Chasse d'eau, chasse manuelle, ou latrine à fosse avec dalle", "Mieux si elles ne sont pas partagées avec d'autres ménages", "Couvercle en place ; savon et eau à côté"] },
            { title: "Selles des enfants", bullets: ["Aussi dangereuses que celles des adultes", "Tout de suite dans les toilettes", "Lavez le pot et vos mains au savon"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Vérifiez aujourd'hui vos toilettes ou votre latrine : sont-elles propres, couvertes et à côté du savon et de l'eau ? Réparez une chose. Mettez-vous d'accord en famille sur l'endroit où iront toujours les selles des enfants.",
          youCanNow: "garder des toilettes ou une latrine propres et couvertes et vous débarrasser des selles des enfants sans danger.",
          quickCheck: [
            { objective: "O5", q: "Où vont les selles d'un bébé qui sont dans une couche ?", options: ["Tout de suite dans les toilettes ou la latrine", "Dans la cour", "Dans le caniveau", "Sur le tas d'ordures"], answer: 0, why: "Les selles des enfants portent aussi des microbes et doivent aller dans les toilettes." },
            { objective: "O5", q: "Pourquoi laisser un couvercle ou une couverture sur le trou de la latrine ?", options: ["Pour la garder au chaud", "Pour empêcher les mouches de porter des microbes vers la nourriture", "Seulement pour cacher l'odeur", "Ce n'est pas utile"], answer: 1, why: "Les mouches qui se posent sur les selles peuvent porter des microbes vers la nourriture." }
          ]
        },
        {
          title: "Diarrhée et choléra : quand aller tout de suite au centre de santé",
          objectives: ["O6"],
          minutes: 6,
          goal: "Repérer les signes de danger de la déshydratation et du choléra et obtenir de l'aide tout de suite.",
          text: [
            "La diarrhée fait perdre au corps de l'eau et des sels. C'est la déshydratation, et elle peut tuer vite un jeune enfant. Le choléra peut provoquer de très grandes quantités de selles liquides et, selon l'OMS, peut tuer en quelques heures sans traitement. N'attendez pas de voir si ça s'améliore.",
            "Allez au centre de santé, au dispensaire ou chez l'agent de santé communautaire TOUT DE SUITE si la personne : est très endormie, faible, molle ou difficile à réveiller ; ne peut pas boire ou boit très mal ; a les yeux enfoncés ; a une peau qui revient très lentement en place quand on la pince ; a beaucoup de selles liquides, comme de l'eau de riz ; a du sang dans les selles ; vomit encore et encore ; ou a une diarrhée qui dure plusieurs jours. Un bébé ou un jeune enfant qui a la diarrhée demande encore plus d'attention.",
            "Les sels de réhydratation orale (SRO) remplacent l'eau et les sels perdus, et les agents de santé donnent aussi du zinc aux enfants. Demandez à votre centre de santé, à votre agent de santé communautaire ou à la pharmacie comment utiliser les SRO ; donnez-les en route, comme on vous l'a dit, mais allez-y quand même. Continuez l'allaitement. Pendant une épidémie de choléra, écoutez votre ministère de la Santé : il peut organiser des campagnes de vaccination et des centres de traitement. Écrivez sur une carte le nom et le numéro du centre de santé et de l'agent de santé communautaire les plus proches, et gardez de l'argent pour le transport si vous pouvez."
          ],
          steps: ["Surveillez de près toute personne qui a la diarrhée, surtout les jeunes enfants.", "Cherchez les signes de danger.", "Si vous en voyez un, allez au centre de santé ou appelez l'agent de santé communautaire tout de suite.", "Demandez à l'agent de santé comment donner les SRO, et continuez l'allaitement.", "Lavez-vous les mains au savon après chaque contact et nettoyez sans danger."],
          words: [["Déshydratation", "quand le corps perd trop d'eau et de sel."], ["SRO (sels de réhydratation orale)", "un mélange de sels et de sucre qui, mélangé à de l'eau sûre, remplace ce que la diarrhée fait perdre."], ["Choléra", "une maladie due à de l'eau ou de la nourriture sale qui donne une diarrhée très liquide et peut tuer vite."], ["Épidémie", "beaucoup de cas d'une maladie dans une même zone en même temps."]],
          slides: [
            { title: "La diarrhée peut tuer vite", bullets: ["Le corps perd de l'eau et des sels", "Le choléra peut tuer en quelques heures", "N'attendez pas"] },
            { title: "Au centre de santé TOUT DE SUITE si", bullets: ["Très endormi, mou, difficile à réveiller ; ne peut pas boire", "Yeux enfoncés ; la peau pincée revient lentement", "Beaucoup de selles comme de l'eau de riz ; sang dans les selles", "Vomit encore et encore ; dure plusieurs jours"] },
            { title: "En route", bullets: ["Demandez à un agent de santé comment donner les SRO", "Continuez l'allaitement", "Lavez-vous les mains après chaque contact"] },
            { title: "Soyez prêt", bullets: ["Carte avec les numéros du centre et de l'agent de santé", "Argent pour le transport si possible", "En cas d'épidémie, suivez le ministère de la Santé"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Faites une carte des signes de danger : écrivez au moins quatre signes de danger, le nom et le numéro du centre de santé ou de l'agent de santé communautaire le plus proche, et comment vous vous y rendriez. Affichez-la au mur.",
          youCanNow: "repérer les signes de danger de la déshydratation et du choléra et emmener la personne tout de suite au centre de santé.",
          quickCheck: [
            { objective: "O6", q: "Quel signe de danger veut dire : allez tout de suite au centre de santé ?", options: ["Une seule selle molle", "Un enfant qui joue normalement", "Un enfant très endormi qui ne peut pas boire", "Avoir soif après le football"], answer: 2, why: "Être très endormi et ne pas pouvoir boire sont des signes de déshydratation grave." },
            { objective: "O6", q: "Pendant une épidémie de choléra, un voisin a d'énormes quantités de selles liquides comme de l'eau de riz. Que faites-vous ?", options: ["Attendre demain", "Lui donner n'importe quel médicament de la maison", "Le cacher aux agents de santé", "L'aider à aller tout de suite dans un centre de santé ou de traitement"], answer: 3, why: "Le choléra peut tuer en quelques heures ; des soins rapides au centre de santé sauvent des vies." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mains propres, toilettes sûres, action rapide",
        questions: [
          { objective: "O4", q: "Au point de lavage des mains, il y a de l'eau mais pas de savon. Qu'est-ce qui est vrai ?", options: ["L'eau seule suffit", "Il faut du savon pour décoller les microbes ; trouvez du savon pour ce point de lavage", "Les mains n'ont pas besoin d'être lavées", "Utilisez le seau d'eau de boisson"], answer: 1, why: "Le savon enlève les microbes que l'eau seule laisse." },
          { objective: "O4", q: "Où est le meilleur endroit pour un dispositif de lavage des mains ?", options: ["Près des toilettes et près de l'endroit où vous cuisinez", "Loin de la maison", "Dans le seau d'eau de boisson", "Dans la chambre"], answer: 0, why: "Près des toilettes et de la cuisine, il est facile de se laver aux moments clés." },
          { objective: "O5", q: "Il y a des selles d'un petit enfant dans la cour. Que faites-vous ?", options: ["Les balayer dans le caniveau", "Les laisser sécher", "Les couvrir de sable et les laisser", "Les mettre dans les toilettes et vous laver les mains au savon"], answer: 3, why: "Les selles des enfants vont dans les toilettes ; ensuite, lavez-vous les mains." },
          { objective: "O6", q: "Votre enfant a la diarrhée et les yeux enfoncés, et la peau pincée revient lentement. Que faites-vous ?", options: ["Attendre deux jours", "Arrêter toutes les boissons", "Aller tout de suite au centre de santé et demander comment donner les SRO en route", "Donner un médicament pour adulte"], answer: 2, why: "Ce sont des signes de déshydratation ; un agent de santé doit voir l'enfant tout de suite." },
          { objective: "O6", q: "À quoi servent les SRO ?", options: ["À tuer les moustiques", "À remplacer l'eau et les sels perdus avec la diarrhée", "À nettoyer les toilettes", "À faire bouillir l'eau plus vite"], answer: 1, why: "Les SRO remplacent l'eau et les sels que la diarrhée fait perdre au corps." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Eau potable, assainissement et hygiène à la maison",
    questions: [
      { objective: "O1", q: "Quel est le plus grand danger pour la sécurité de l'eau de boisson ?", options: ["Des selles qui arrivent dans l'eau", "L'eau froide", "L'eau calcaire", "L'eau qui a un goût de fer"], answer: 0, why: "L'OMS indique que les microbes des selles sont le plus grand risque pour l'eau de boisson." },
      { objective: "O1", q: "Quelle question vous aide à juger un puits ?", options: ["De quelle couleur est le seau ?", "Est-il couvert et loin des toilettes et des animaux ?", "Qui l'a creusé ?", "Est-il près du marché ?"], answer: 1, why: "Une source couverte et loin des toilettes et des animaux risque moins de contenir des selles." },
      { objective: "O1", q: "Votre forage habituel est en panne. Que faites-vous ?", options: ["Boire l'eau de la rivière sans la traiter", "Arrêter de boire", "Utiliser votre source de secours et traiter l'eau avant de la boire", "Utiliser l'eau pour laver"], answer: 2, why: "Une source de secours plus un traitement gardent l'eau de boisson plus sûre quand la source principale ne marche pas." },
      { objective: "O2", q: "Quels sont les deux moyens de rendre l'eau de boisson plus sûre à la maison ?", options: ["Ajouter du sucre ou du sel", "La laisser au soleil une heure ou la secouer", "La refroidir ou la congeler", "La faire bouillir, ou utiliser un produit chloré vendu pour l'eau"], answer: 3, why: "L'ébullition et les produits chlorés tuent les microbes ; les autres moyens, non." },
      { objective: "O2", q: "Verser de l'eau trouble à travers un tissu la rend-elle sûre ?", options: ["Non ; cela enlève la saleté, mais il faut encore la faire bouillir ou ajouter du chlore", "Oui, toujours", "Seulement si le tissu est neuf", "Oui, si vous le faites deux fois"], answer: 0, why: "Le tissu enlève la saleté, pas tous les microbes ; il faut encore faire bouillir ou utiliser du chlore." },
      { objective: "O2", q: "Vous avez un produit chloré mais vous avez perdu l'étiquette. Que faites-vous ?", options: ["Deviner la quantité", "En mettre beaucoup pour être tranquille", "Demander à votre agent de santé communautaire ou au centre de santé comment l'utiliser", "Boire juste après l'avoir ajouté"], answer: 2, why: "La bonne quantité et le temps d'attente comptent ; un agent de santé peut vous les dire." },
      { objective: "O2", q: "Avant de préparer le lait en poudre du bébé, l'eau doit être...", options: ["Prise directement à la rivière", "Traitée : bouillie et refroidie, ou traitée de façon sûre", "Chauffée au soleil", "N'importe quelle eau"], answer: 1, why: "Les bébés sont les plus à risque ; leur eau doit d'abord être traitée." },
      { objective: "O3", q: "Quel récipient d'eau de boisson est le meilleur ?", options: ["Un seau ouvert posé par terre", "Un récipient qui a servi pour du carburant", "Un récipient propre et couvert, à col étroit ou avec robinet, au-dessus du sol", "N'importe quelle marmite"], answer: 2, why: "Propre, couvert et au-dessus du sol : l'eau traitée reste sûre." },
      { objective: "O3", q: "Pourquoi personne ne doit-il plonger un gobelet dans l'eau de boisson ?", options: ["Les mains et les gobelets apportent des microbes dans l'eau propre", "Cela gaspille l'eau", "Cela fait du bruit", "C'est impoli"], answer: 0, why: "Plonger un gobelet apporte les microbes des mains et des gobelets dans tout le récipient." },
      { objective: "O3", q: "À quelle fréquence faut-il laver le récipient d'eau ?", options: ["Jamais", "Une fois par an", "Seulement quand il sent mauvais", "Souvent, au savon et à l'eau sûre, puis le faire sécher à l'envers"], answer: 3, why: "Un lavage régulier empêche les microbes de s'accumuler dans le récipient." },
      { objective: "O4", q: "Lequel est un moment clé pour se laver les mains ?", options: ["Avant de nourrir un enfant", "Après avoir regardé la télévision", "Seulement avant de dormir", "Après avoir bu de l'eau"], answer: 0, why: "Des mains propres avant de nourrir un enfant gardent les microbes hors de sa bouche." },
      { objective: "O4", q: "Quelles parties des mains frottez-vous ?", options: ["Seulement le bout des doigts", "Les paumes, le dos, entre les doigts et sous les ongles", "Seulement les paumes", "Seulement la main droite"], answer: 1, why: "Les microbes se cachent sur toutes les parties de la main ; frottez-les toutes." },
      { objective: "O4", q: "Vous n'avez pas de robinet à la maison. Comment vous laver les mains à l'eau qui coule ?", options: ["Plonger les mains dans le seau d'eau de boisson", "Seulement les essuyer avec un tissu", "Fabriquer un dispositif avec un bidon ou une bouteille qui verse, avec du savon sur une ficelle", "Ne pas se laver"], answer: 2, why: "Un dispositif simple donne de l'eau qui coule pour se laver sans salir l'eau conservée." },
      { objective: "O5", q: "Quelles toilettes l'OMS et l'UNICEF considèrent-ils comme plus sûres ?", options: ["Un champ loin de la maison", "Un seau vidé dans le caniveau", "Une fosse sans dalle", "Une latrine à fosse avec dalle, ou des toilettes à chasse d'eau ou à chasse manuelle"], answer: 3, why: "Elles séparent les selles des personnes ; une fosse sans dalle ou les champs ouverts, non." },
      { objective: "O5", q: "Que faut-il toujours avoir à côté des toilettes ?", options: ["Du savon et de l'eau pour se laver les mains", "Le récipient d'eau de boisson", "De la nourriture", "Rien"], answer: 0, why: "Se laver les mains juste après les toilettes empêche les microbes de se répandre." },
      { objective: "O5", q: "Pourquoi les selles des enfants sont-elles dangereuses ?", options: ["Elles ne sont pas dangereuses", "Elles portent des microbes comme les selles des adultes", "Seulement parce qu'elles sentent", "Seulement quand l'enfant est malade"], answer: 1, why: "Les selles des enfants portent les mêmes microbes et doivent aller dans les toilettes." },
      { objective: "O6", q: "Lequel de ces cas demande d'aller tout de suite au centre de santé ?", options: ["Une seule selle molle et l'enfant joue", "Un enfant qui a soif après avoir couru", "Du sang dans les selles", "Un enfant qui veut manger"], answer: 2, why: "Du sang dans les selles est un signe de danger qui demande un agent de santé." },
      { objective: "O6", q: "Pourquoi ne faut-il pas attendre quand quelqu'un a des signes de choléra ?", options: ["Parce que c'est honteux", "Parce que le centre de santé ferme tôt", "Ça passe tout seul", "Le choléra peut tuer en quelques heures sans soins"], answer: 3, why: "L'OMS indique que le choléra peut être mortel en quelques heures sans traitement." },
      { objective: "O6", q: "Un bébé a la diarrhée. Que continuez-vous à faire pendant que vous cherchez de l'aide ?", options: ["Continuer l'allaitement", "Arrêter tout le lait", "Arrêter toutes les boissons", "Donner un médicament pour adulte"], answer: 0, why: "L'allaitement continue d'apporter de l'eau et de la nourriture au bébé ; l'agent de santé conseille le reste." },
      { objective: "O6", q: "Que doit contenir votre carte des signes de danger ?", options: ["Le code PIN de votre mobile money", "Les signes de danger et le nom et le numéro du centre de santé ou de l'agent de santé le plus proche", "Une liste de médicaments et de doses", "Rien ; vous vous en souviendrez"], answer: 1, why: "En cas d'urgence, ce qu'il vous faut tout de suite, ce sont les signes et qui appeler." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Source d'eau", objective: "O1", notYet: "Aucune source choisie, ou une source risquée choisie sans raison.", meets: "Sources classées avec des raisons ; la plus sûre choisie pour boire et une source de secours nommée.", exceeds: "Note aussi ce qui rend chaque source risquée (toilettes, animaux, pas de couvercle) et à qui signaler une source en panne ou sale." },
      { name: "Rendre l'eau plus sûre", objective: "O2", notYet: "Aucune méthode de traitement, ou une méthode avec des étapes manquantes (pas de durée d'ébullition, pas de temps d'attente de l'étiquette).", meets: "Ébullition ou produit chloré, en laissant d'abord reposer l'eau trouble, avec chaque étape et la règle de l'étiquette.", exceeds: "Une méthode de secours est aussi prévue, et le chlore est gardé hors de portée des enfants." },
      { name: "Conservation et service", objective: "O3", notYet: "Récipient ouvert, ou on y plonge encore des gobelets.", meets: "Un récipient propre et couvert, au-dessus du sol, dont on verse l'eau ou avec robinet, lavé souvent.", exceeds: "L'eau de boisson est gardée à part de l'eau pour laver, et toute la maison connaît la règle : on n'y plonge rien." },
      { name: "Lavage des mains", objective: "O4", notYet: "Pas d'endroit pour se laver les mains ou pas de savon ; moments clés absents.", meets: "Un endroit avec de l'eau et du savon près des toilettes ou de la cuisine, et les moments clés écrits.", exceeds: "Des endroits près des toilettes et de la cuisine, et chaque membre de la famille a appris le lavage de 20 secondes." },
      { name: "Toilettes et selles des enfants", objective: "O5", notYet: "Selles laissées à l'air libre ou pas de plan pour les selles des enfants.", meets: "Les toilettes sont gardées propres et couvertes, et les selles des enfants y vont à chaque fois.", exceeds: "Le nettoyage est partagé entre les membres de la famille, avec du savon à côté des toilettes." },
      { name: "Carte des signes de danger", objective: "O6", notYet: "Moins de quatre signes de danger, ou pas de contact du centre de santé.", meets: "Au moins quatre signes de danger et le nom et le numéro du centre de santé ou de l'agent de santé le plus proche.", exceeds: "Aussi comment s'y rendre et un plan pour l'argent du transport, sans aucune dose de médicament sur la carte." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Foyers qui traitent toute l'eau de boisson et la conservent couverte 30 jours plus tard (enquête de suivi)",
      "Foyers qui ont un endroit pour se laver les mains avec du savon 30 jours plus tard",
      "Moins d'épisodes de diarrhée chez les jeunes enfants, signalés par les familles ou les agents de santé communautaires pendant la saison suivante",
      "Arrivée plus rapide au centre de santé en cas de diarrhée avec signes de danger, signalée par les agents de santé communautaires"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Du savon, un récipient d'eau avec couvercle, et un bidon ou une bouteille pour un dispositif de lavage des mains",
      "Une marmite pour faire bouillir l'eau, ou un produit chloré vendu pour l'eau de boisson avec son étiquette",
      "Du papier et un stylo pour le plan et la carte des signes de danger",
      "Environ 60 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Fonctionne bien avec les groupements de femmes, les clubs de mères, les écoles, les groupes religieux et les visites des agents de santé communautaires ; passez le test de départ ensemble.",
      "Construisez ensemble un dispositif de lavage des mains pendant la leçon 4 ; c'est la partie dont les apprenants se souviennent le mieux.",
      "Invitez l'agent de santé communautaire ou l'infirmier ou l'infirmière du centre de santé local à la séance sur les signes de danger et les SRO.",
      "Ne donnez pas de doses de médicaments ni de conseils de traitement ; renvoyez toutes les questions de traitement au centre de santé, à l'agent de santé communautaire ou au ministère de la Santé.",
      "Pendant une épidémie de choléra, utilisez les messages actuels du ministère de la Santé et l'adresse des centres de traitement.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
