"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-scouting-recruiting.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-scouting-recruiting-fr",
  lang: "fr",
  translationOf: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "Scouting et recrutement avec l'IA",
  skills: "Construire une liste d'universités cibles dans un tableur, Créer un profil de recrutement et une vidéo de moments forts, Écrire des e-mails personnels aux entraîneurs universitaires avec l'IA, Savoir où vérifier les règles d'admissibilité et de recrutement, Organiser des notes de scouting équitables (pour les entraîneurs)",
  outcome: "mener un plan de recrutement organisé : une liste de 15 universités cibles dans un tableur, un profil de recrutement d'une page et une vidéo de moments forts de deux à quatre minutes, et des e-mails personnels à trois entraîneurs universitaires rédigés avec l'IA, tout en vérifiant les règles officielles d'admissibilité et de recrutement de votre sport.",
  about: [
    "Ce cours s'adresse aux athlètes du lycée et des junior colleges (universités de premier cycle de deux ans aux États-Unis) qui veulent jouer à l'université, à leurs parents et aux entraîneurs qui les aident. Une courte partie aide aussi les entraîneurs à organiser leurs notes de scouting de façon équitable.",
    "Le recrutement est un processus que vous pouvez gérer comme un projet. Vous allez étudier des universités, montrer clairement votre niveau et votre caractère, contacter les entraîneurs de façon professionnelle et tout suivre au même endroit, en utilisant l'IA pour gagner du temps mais jamais pour inventer quoi que ce soit.",
    "Les règles de recrutement et d'admissibilité dépendent de votre sport et de votre division (NCAA Division I, II, III, NAIA, junior college), et elles changent souvent. Ce cours vous montre où vérifier ; confirmez toujours auprès de votre entraîneur au lycée, de votre conseiller d'orientation et des sites officiels."
  ],
  finalTask: "Construisez votre plan de recrutement : un tableur avec 15 universités cibles (ambitieuses, adaptées et accessibles), un profil de recrutement d'une page, une vidéo de moments forts de deux à quatre minutes avec vos meilleures actions au début, et des e-mails personnels à trois entraîneurs rédigés avec l'IA et retouchés par vous. Ajoutez une note sur le compte d'admissibilité dont vous avez besoin et l'endroit où vous avez vérifié les règles de recrutement de votre sport.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes de lycée et de junior college qui veulent jouer à l'université, leurs parents, et les entraîneurs qui les aident ou qui repèrent des joueurs.",
    startingPoint: "Ils jouent en compétition et ont parfois des vidéos de match, des statistiques et un entraîneur de club ou d'établissement. Beaucoup ne savent pas de quel compte d'admissibilité ils ont besoin, se fient à l'IA ou à de vieux articles pour les règles de recrutement, envoient des e-mails génériques et ne suivent pas leurs contacts.",
    gap: "Oublier des étapes d'admissibilité, viser les mauvaises universités ou envoyer des messages génériques peut coûter aux athlètes une place dans un effectif universitaire ou une aide financière, et des services payants peuvent prendre leur argent avec de fausses promesses. Un plan organisé, avec les règles vérifiées, des documents honnêtes et des e-mails personnels, leur donne une vraie chance.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur avec Google Sheets, un assistant IA gratuit et un éditeur vidéo",
      "Environ 60 minutes de leçons, plus le temps de créer un profil, une vidéo et une liste d'universités cibles",
      "Les règles d'admissibilité et de contact pour le recrutement diffèrent selon l'organisation, le sport et la division, et changent souvent ; vérifiez sur ncaa.org, le site de la NAIA et auprès du conseiller d'orientation",
      "Les joueurs repérés sont souvent mineurs : aucune adresse ni aucun détail privé dans les profils ou les outils d'IA"
    ],
    prerequisites: "Aucun. « Analyse vidéo et intelligence de jeu » et « Référencement (SEO) et création de votre site web avec l'IA » sont de bons compléments."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des niveaux universitaires que vous visez", action: "identifier le compte d'admissibilité dont vous avez besoin et l'endroit où vérifier les règles de contact pour le recrutement dans votre sport", standard: "en utilisant les sites officiels et votre conseiller d'orientation, pas l'IA ni de vieux articles, pour les règles et les dates" },
    { id: "O2", condition: "Avec Google Sheets et un assistant IA", action: "construire une liste de 15 universités cibles marquées ambitieuses, adaptées ou accessibles", standard: "avec chaque université, chaque nom d'entraîneur et chaque détail d'effectif vérifiés sur les pages officielles des universités" },
    { id: "O3", condition: "Avec vos vraies statistiques, vos notes et vos extraits vidéo", action: "créer un profil de recrutement d'une page et une vidéo de moments forts de deux à quatre minutes", standard: "avec chaque statistique vraie, les meilleures actions dans les 30 premières secondes, vous-même signalé avant chaque action, aucune adresse, et une relecture par un entraîneur" },
    { id: "O4", condition: "Avec votre profil et un brouillon de l'IA", action: "écrire des e-mails de présentation personnels à trois entraîneurs universitaires", standard: "moins de 150 mots chacun, avec un objet clair et une raison vraie et précise pour chaque université, envoyés par vous depuis une adresse e-mail professionnelle" },
    { id: "O5", condition: "Avec votre liste d'universités cibles", action: "suivre chaque contact, chaque réponse et chaque prochaine étape avec les dates", standard: "mis à jour chaque semaine, avec tout service de recrutement payant vérifié d'abord avec votre entraîneur ou votre conseiller" },
    { id: "O6", condition: "En tant qu'entraîneur qui repère des joueurs", action: "organiser les notes de scouting avec les mêmes critères et une échelle de 1 à 5 définie pour chaque joueur", standard: "avec des notes basées sur ce que vous avez vu, l'IA utilisée seulement pour résumer les notes, les données privées protégées et les biais vérifiés" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se préparer à être recruté",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les règles d'abord : admissibilité et bases du recrutement",
          minutes: 5,
          goal: "Trouver le compte d'admissibilité et les règles de recrutement qui s'appliquent à vous.",
          text: [
            "Le sport universitaire américain compte plusieurs organisations : les Divisions I, II et III de la NCAA, la NAIA et les junior colleges. Chacune a ses propres règles scolaires et d'admissibilité.",
            "Si vous visez la Division I ou II de la NCAA, il vous faudra un compte auprès du NCAA Eligibility Center, qui vérifie vos résultats scolaires et votre statut amateur. Le site de l'Eligibility Center décrit une page de profil (Profile Page) pour les plus jeunes et la Division III, et des comptes de certification pour les Divisions I et II. La NAIA a son propre centre d'admissibilité ; consultez son site officiel.",
            "Le moment et la façon dont les entraîneurs universitaires peuvent vous contacter dépendent de votre sport et de votre division, et changent souvent. Ne vous fiez pas à l'IA ou à de vieux articles pour les dates ; consultez ncaa.org, demandez à votre entraîneur et à votre conseiller d'orientation, et gardez vos notes et vos cours obligatoires sur la bonne voie."
          ],
          steps: ["Décidez quels niveaux vous visez.", "Allez sur le site du NCAA Eligibility Center et lisez quel compte vous convient.", "Consultez le site d'admissibilité de la NAIA si c'est pertinent.", "Demandez à votre conseiller d'orientation les cours obligatoires et les notes requises.", "Vérifiez sur ncaa.org les règles de contact pour votre sport."],
          words: [["Admissibilité", "le fait de remplir les règles scolaires et autres nécessaires pour faire du sport universitaire."], ["NCAA Eligibility Center", "le service de la NCAA où les futurs athlètes universitaires s'inscrivent pour faire vérifier leurs résultats scolaires et leur statut amateur."], ["Division", "un niveau du sport universitaire, comme la Division I, II ou III de la NCAA."]],
          slides: [
            { title: "Les niveaux du sport universitaire", bullets: ["Divisions I, II, III de la NCAA", "NAIA", "Junior colleges"] },
            { title: "Comptes d'admissibilité", bullets: ["NCAA DI et DII : compte de certification", "Plus jeunes et DIII : Profile Page", "NAIA : son propre centre d'admissibilité"] },
            { title: "Les règles de contact changent", bullets: ["Selon le sport et la division", "Vérifiez sur ncaa.org, pas avec l'IA", "Demandez à votre entraîneur et à votre conseiller"] }
          ],
          sources: [
            { name: "NCAA Eligibility Center (en anglais)", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA : Nom, image et ressemblance (règles pour les recrues et les athlètes, en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Allez sur le site du NCAA Eligibility Center et notez quel type de compte vous convient. Écrivez ensuite une question sur les règles de recrutement de votre sport à poser à votre entraîneur ou à votre conseiller d'orientation.",
          youCanNow: "trouver le compte d'admissibilité et les règles officielles qui s'appliquent à vous.",
          quickCheck: [
            { objective: "O1", q: "Quelle organisation a son propre centre d'admissibilité, distinct de celui de la NCAA ?", options: ["La NAIA", "Votre lycée", "Votre équipe de club", "Le journal local"], answer: 0, why: "La NAIA a son propre centre d'admissibilité ; vérifiez sur son site officiel." },
            { objective: "O1", q: "Une IA vous donne la date à partir de laquelle les entraîneurs universitaires peuvent vous appeler. Que faites-vous ?", options: ["La croire", "La publier pour vos coéquipiers", "Vérifier sur ncaa.org et demander à votre entraîneur ou à votre conseiller", "Attendre qu'un entraîneur appelle"], answer: 2, why: "Les règles de contact changent souvent ; vérifiez auprès de sources officielles, pas de l'IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire votre liste d'universités cibles",
          minutes: 6,
          goal: "Construire un tableur de 15 universités qui vous conviennent sur le plan sportif, scolaire et personnel.",
          text: [
            "La bonne université est celle où vous pouvez jouer, étudier ce que vous voulez, que vous pouvez payer, et où vous seriez heureux même si le sport s'arrête. Visez un mélange : des universités ambitieuses (un défi), adaptées (une bonne correspondance) et accessibles (où vous apporteriez clairement quelque chose).",
            "Créez un fichier Google Sheets avec ces colonnes : Université, Division, Lieu, Filière souhaitée, Besoin de l'effectif à votre poste, Adéquation scolaire, Notes sur le coût, Nom et e-mail de l'entraîneur, Statut. Prenez les noms des entraîneurs et les détails de l'effectif sur le site officiel du sport de chaque université.",
            "Un assistant IA peut suggérer des universités à étudier : « Je suis milieu de terrain au football, 1,75 m, avec une moyenne de 3,5 sur 4, et je veux étudier les soins infirmiers dans le sud-est des États-Unis. Suggère 20 universités avec des équipes de football de différents niveaux à étudier. » Vérifiez ensuite chacune vous-même ; les listes de l'IA peuvent être dépassées ou fausses."
          ],
          steps: ["Créez le tableau avec les colonnes ci-dessus.", "Demandez à l'IA des universités à étudier.", "Vérifiez les pages officielles sportives et scolaires de chaque université.", "Classez chacune : ambitieuse, adaptée ou accessible.", "Gardez les 15 qui vous conviennent vraiment."],
          words: [["Liste cible", "les universités que vous prévoyez de contacter."], ["Effectif", "la liste des joueurs d'une équipe ; elle montre qui part à votre poste."]],
          slides: [
            { title: "La bonne université", bullets: ["Pouvez-vous jouer ?", "Pouvez-vous étudier ce que vous voulez ?", "Pouvez-vous la payer ? Heureux sans le sport ?"] },
            { title: "Colonnes du tableau", bullets: ["Université, Division, Lieu, Filière", "Besoin de l'effectif, Adéquation scolaire, Coût", "Contact de l'entraîneur, Statut"] },
            { title: "L'IA suggère, vous vérifiez", bullets: ["Demandez des universités à étudier", "Vérifiez les pages officielles", "Ambitieuse, adaptée, accessible"] }
          ],
          tryIt: "Créez votre tableau de liste cible. Utilisez l'IA pour avoir des idées, vérifiez dix universités sur leurs sites officiels et classez chacune comme ambitieuse, adaptée ou accessible.",
          youCanNow: "construire et vérifier une liste d'universités cibles équilibrée.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une université « accessible » sur votre liste ?", options: ["Un très grand défi", "Une université où vous apporteriez clairement quelque chose à l'équipe", "Une université sans équipe dans votre sport", "Seulement l'université de vos rêves"], answer: 1, why: "Les universités accessibles sont celles où vous apporteriez clairement quelque chose." },
            { objective: "O2", q: "L'IA liste une université dont vous n'avez jamais entendu parler. Que faites-vous ?", options: ["L'ajouter sans vérifier", "Supprimer toute la liste", "Écrire tout de suite à l'entraîneur", "Vérifier d'abord ses pages officielles sportives et académiques"], answer: 3, why: "Les listes de l'IA peuvent être dépassées ou fausses, alors vérifiez chaque université." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Votre profil de recrutement et votre vidéo de moments forts",
          minutes: 6,
          goal: "Créer un profil de recrutement d'une page et planifier une vidéo de moments forts de deux à quatre minutes.",
          text: [
            "Un profil de recrutement tient sur une page : nom, année de fin d'études secondaires, poste, taille et poids (honnêtes), lycée et club, statistiques clés, informations scolaires (moyenne, résultats aux tests si vous en avez, filière envisagée), distinctions, coordonnées de vos entraîneurs, lien vers vos moments forts et votre e-mail.",
            "Une vidéo de moments forts doit être courte, souvent de deux à quatre minutes, avec vos meilleures actions dans les 30 premières secondes. Identifiez-vous avant chaque action avec une flèche ou un cercle. Ajoutez un lien vers un match complet si les entraîneurs de votre sport aiment en voir un. Demandez à votre entraîneur ce qu'attendent les entraîneurs de votre sport.",
            "L'IA peut vous aider à écrire le profil à partir de vos notes et à ordonner votre liste d'actions. Chaque statistique doit être vraie et vérifiable ; les entraîneurs vérifient auprès des vôtres. Gardez les détails privés comme votre adresse personnelle hors du profil."
          ],
          steps: ["Rassemblez vos vraies statistiques, notes et distinctions.", "Demandez à l'IA de mettre en forme un profil d'une page.", "Choisissez vos meilleures actions et mettez les plus fortes en premier.", "Identifiez-vous avant chaque action.", "Demandez à votre entraîneur de relire les deux."],
          words: [["Profil de recrutement", "un résumé d'une page de vous en tant qu'athlète et élève pour les entraîneurs universitaires."], ["Vidéo de moments forts", "une courte vidéo de vos meilleures actions."]],
          slides: [
            { title: "Profil d'une page", bullets: ["Année de fin d'études, poste, taille honnête", "Statistiques, moyenne, filière envisagée", "Contacts des entraîneurs, lien vidéo, votre e-mail"] },
            { title: "Vidéo de moments forts", bullets: ["Souvent 2 à 4 minutes", "Meilleures actions dans les 30 premières secondes", "Identifiez-vous avant chaque action"] },
            { title: "Honnête et sûr", bullets: ["Les entraîneurs vérifient les statistiques", "Pas d'adresse personnelle", "Votre entraîneur relit"] }
          ],
          tryIt: "Utilisez l'IA pour transformer vos notes en profil d'une page. Écrivez votre liste d'actions avec les cinq meilleures en premier, et demandez à votre entraîneur de relire les deux.",
          youCanNow: "créer un profil de recrutement honnête et un bon plan de vidéo de moments forts.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi vous signaler avant chaque action de la vidéo ?", options: ["Pour que les entraîneurs sachent quel joueur vous êtes", "Pour rallonger la vidéo", "Pour cacher votre numéro", "Parce que la musique l'exige"], answer: 0, why: "Une flèche ou un cercle aide les entraîneurs à vous trouver tout de suite." },
            { objective: "O3", q: "Le temps au 40 yards indiqué sur votre profil est plus rapide que tout ce que vous avez jamais couru. Que faites-vous ?", options: ["Le garder ; les entraîneurs ne vérifieront pas", "Retirer complètement la statistique", "Le remplacer par votre vrai temps, vérifiable", "L'améliorer encore un peu"], answer: 2, why: "Chaque statistique doit être vraie ; les entraîneurs vérifient auprès de vos entraîneurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer à être recruté",
        questions: [
          { objective: "O1", q: "Vous visez la Division I de la NCAA. Où vous inscrire pour l'admissibilité ?", options: ["Sur une application de réseau social", "À votre salle de sport", "Au NCAA Eligibility Center", "Nulle part"], answer: 2, why: "Les athlètes de DI et DII ont besoin d'un compte de certification à l'Eligibility Center." },
          { objective: "O1", q: "Où vérifier quand les entraîneurs peuvent vous contacter ?", options: ["Sur ncaa.org et auprès de votre entraîneur ou conseiller d'orientation", "Seulement auprès d'un chatbot d'IA", "Dans un article vieux de 5 ans", "Auprès d'un rival"], answer: 0, why: "Les règles dépendent du sport et de la division et changent souvent." },
          { objective: "O2", q: "Une liste cible équilibrée contient :", options: ["Seulement les 5 meilleurs programmes", "Une seule université", "Des universités que vous n'avez pas vérifiées", "Des universités ambitieuses, adaptées et accessibles"], answer: 3, why: "Un mélange vous donne de vraies options." },
          { objective: "O2", q: "L'IA suggère une université dont l'équipe a été supprimée. Qu'est-ce qui n'a pas marché ?", options: ["Rien", "Les listes de l'IA peuvent être dépassées ; vérifiez sur les pages officielles", "L'université le cache", "Vous devriez postuler quand même"], answer: 1, why: "Vérifiez toujours les sites officiels." },
          { objective: "O3", q: "Où placer vos meilleures actions dans une vidéo de moments forts ?", options: ["Tout à la fin", "Dans les 30 premières secondes", "Au milieu", "Cachées"], answer: 1, why: "Les entraîneurs décident vite." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Contacter les entraîneurs et rester organisé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire des e-mails personnels aux entraîneurs avec l'IA",
          minutes: 6,
          goal: "Écrire un e-mail de présentation court et personnel à un entraîneur universitaire.",
          text: [
            "Les entraîneurs reçoivent beaucoup d'e-mails. Court et personnel, c'est ce qui marche. Incluez : un objet avec votre année de fin d'études, votre poste et une information clé (« 2027 Milieu | Moyenne 3,5 | Club Metro FC ») ; pourquoi leur université vous intéresse précisément ; vos statistiques clés et vos résultats scolaires ; le lien vers vos moments forts et votre profil ; votre calendrier à venir (tournois, showcases) ; et les coordonnées de votre entraîneur.",
            "Demandez à un assistant IA : « Écris un court e-mail à l'entraîneur principal de football de [université]. Utilise mon profil ci-dessous. Dis que leur programme de soins infirmiers et leur style de jeu basé sur la possession m'intéressent. Moins de 150 mots. » Faites-le ensuite vôtre et vérifiez chaque détail.",
            "Envoyez-le depuis une adresse e-mail professionnelle que vous consultez chaque jour. N'envoyez jamais exactement le même e-mail à toutes les universités ; les entraîneurs s'en rendent compte. Envoyez-le vous-même, pas vos parents, et relancez poliment après quelques semaines avec une nouvelle information, comme une nouvelle vidéo."
          ],
          steps: ["Écrivez un objet clair.", "Demandez à l'IA un brouillon de moins de 150 mots à partir de votre profil.", "Ajoutez une raison vraie et précise pour cette université.", "Vérifiez chaque détail et le nom de l'entraîneur.", "Envoyez depuis votre adresse professionnelle ; relancez avec du nouveau."],
          words: [["Objet", "le court titre d'un e-mail ; la première chose que voit un entraîneur."], ["Showcase", "un événement où des athlètes jouent devant des entraîneurs universitaires."]],
          slides: [
            { title: "Court et personnel", bullets: ["Objet : année, poste, info clé", "Pourquoi cette université, précisément", "Statistiques, résultats scolaires, lien vidéo"] },
            { title: "L'IA rédige, vous personnalisez", bullets: ["Moins de 150 mots", "Une raison vraie pour cette université", "Vérifiez le nom de l'entraîneur"] },
            { title: "Bien l'envoyer", bullets: ["Adresse professionnelle consultée chaque jour", "C'est vous qui l'envoyez, pas vos parents", "Relancez avec du nouveau"] }
          ],
          tryIt: "Écrivez des e-mails à trois entraîneurs de votre liste avec l'aide de l'IA. Rendez chacun personnel et faites-en lire un par votre entraîneur ou un parent avant de l'envoyer.",
          youCanNow: "écrire un e-mail court et personnel à un entraîneur universitaire.",
          quickCheck: [
            { objective: "O4", q: "Que doit contenir l'objet d'un e-mail à un entraîneur ?", options: ["« Bonjour coach »", "L'année de fin d'études, le poste et les informations clés", "Les noms de vos parents", "« Merci de lire »"], answer: 1, why: "Un objet clair avec l'année de fin d'études, le poste et les informations clés se remarque." },
            { objective: "O4", q: "Deux semaines après votre e-mail, pas de réponse. Que faites-vous ?", options: ["Renvoyer le même e-mail", "Demander à votre parent d'appeler l'entraîneur", "Abandonner cette université", "Relancer poliment avec une nouvelle information, comme une nouvelle action forte"], answer: 3, why: "Relancez poliment après deux semaines environ, avec quelque chose de nouveau." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Suivre votre recrutement comme un projet",
          minutes: 5,
          goal: "Suivre chaque contact et chaque prochaine étape dans votre tableau de recrutement.",
          text: [
            "Ajoutez des colonnes de suivi à votre liste cible : Date du contact, Réponse (oui/non), Ce qu'ils ont dit, Prochaine étape, Date de la prochaine étape. Mettez-le à jour chaque semaine.",
            "Repérez les signes d'un intérêt réel : réponses personnelles, questions sur vos notes, invitations à des stages ou des visites, ou un entraîneur qui vient vous voir jouer. Une publicité générale pour un stage n'est pas la même chose qu'un intérêt personnel.",
            "Le recrutement peut être stressant. Gardez l'école et l'entraînement en premier. Méfiez-vous des « services de recrutement » qui garantissent des bourses contre paiement ; vérifiez auprès de votre entraîneur et de votre conseiller d'orientation avant de payer qui que ce soit."
          ],
          steps: ["Ajoutez des colonnes de suivi à votre tableau.", "Notez chaque e-mail, réponse et appel.", "Écrivez la prochaine étape et sa date.", "Mettez à jour chaque semaine.", "Vérifiez d'abord tout service de recrutement payant avec votre entraîneur."],
          words: [["Relance", "un message suivant poli avec une nouvelle information."], ["Service de recrutement", "une entreprise qui se fait payer pour vous promouvoir auprès des universités."]],
          slides: [
            { title: "Suivez tout", bullets: ["Date du contact, réponse, ce qu'ils ont dit", "Prochaine étape et date", "Mise à jour chaque semaine"] },
            { title: "Un intérêt réel", bullets: ["Réponses personnelles", "Questions sur vos notes", "Invitations à un stage ou une visite"] },
            { title: "Restez équilibré", bullets: ["L'école et l'entraînement d'abord", "Pas de frais pour une bourse « garantie »", "Vérifiez d'abord avec votre entraîneur"] }
          ],
          tryIt: "Ajoutez les colonnes de suivi à votre tableau et notez vos trois e-mails avec une prochaine étape et une date pour chacun.",
          youCanNow: "suivre les contacts de recrutement et les prochaines étapes comme un projet.",
          quickCheck: [
            { objective: "O5", q: "Quelle colonne du tableau de suivi vous aide à vous souvenir de quoi faire ?", options: ["La prochaine étape et sa date", "La couleur préférée", "La mascotte", "Le bilan de l'équipe"], answer: 0, why: "La prochaine étape et sa date font avancer votre recrutement." },
            { objective: "O5", q: "Vous recevez une publicité générale pour un stage d'une université. Qu'est-ce que cela veut dire ?", options: ["Vous avez une bourse", "Ce n'est pas la même chose qu'un intérêt personnel", "Vous devez y aller", "L'entraîneur a vu votre vidéo"], answer: 1, why: "Les réponses et les questions personnelles montrent un vrai intérêt ; une publicité générale, non." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Pour les entraîneurs : des notes de scouting équitables et organisées",
          minutes: 5,
          goal: "Organiser les notes de scouting sur les joueurs de façon équitable et cohérente.",
          text: [
            "Les entraîneurs qui repèrent et recommandent des joueurs peuvent utiliser les mêmes outils. Créez un tableau avec les mêmes critères pour chaque joueur : compétences au poste, qualités athlétiques, intelligence de jeu, capacité à être coaché, résultats scolaires et notes sur le caractère venant de sources vérifiées.",
            "Utilisez une échelle simple de 1 à 5 avec une description écrite pour chaque chiffre, afin que les notes aient le même sens d'un évaluateur à l'autre. L'IA peut résumer vos notes écrites en un court rapport, mais assurez-vous que les notes viennent de ce que vous avez vu, pas de suppositions de l'IA.",
            "Protégez la vie privée des joueurs : beaucoup sont mineurs. Gardez les notes dans des endroits privés et approuvés, ne collez pas de détails personnels dans les outils d'IA, suivez les règles de recrutement de votre organisation et méfiez-vous des biais, comme juger seulement sur la taille ou sur la qualité de la vidéo plutôt que sur le niveau."
          ],
          steps: ["Utilisez les mêmes critères pour chaque joueur.", "Définissez chaque chiffre d'une échelle de 1 à 5.", "Écrivez vos notes à partir de ce que vous avez vu.", "Utilisez l'IA pour résumer les notes, pas pour noter.", "Gardez les données privées ; vérifiez les biais."],
          words: [["Grille d'évaluation", "un guide de notation qui décrit ce que veut dire chaque note."], ["Capacité à être coaché", "à quel point un joueur écoute et utilise les retours."]],
          slides: [
            { title: "Les mêmes critères pour tous", bullets: ["Compétences, qualités athlétiques, intelligence de jeu", "Capacité à être coaché, études, caractère"] },
            { title: "Une grille claire de 1 à 5", bullets: ["Décrivez chaque chiffre", "Notes basées sur ce que vous avez vu", "L'IA résume, elle ne note pas"] },
            { title: "Équitable et privé", bullets: ["Beaucoup de joueurs sont mineurs", "Pas de détails personnels dans l'IA", "Méfiez-vous des biais"] }
          ],
          tryIt: "Tâche finale : athlètes, terminez votre tableau de 15 universités, votre profil, votre plan de vidéo et vos trois e-mails aux entraîneurs, avec une note sur votre compte d'admissibilité et l'endroit où vous avez vérifié les règles. Entraîneurs : créez une grille de 1 à 5 avec des descriptions pour cinq critères.",
          youCanNow: "organiser le recrutement ou le scouting de façon claire, honnête et équitable.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi écrire une description pour chaque chiffre de l'échelle de 1 à 5 ?", options: ["Pour que les notes veuillent dire la même chose d'un évaluateur à l'autre", "Pour rallonger le tableau", "Pour que l'IA puisse noter les joueurs", "Pour classer les joueurs par taille"], answer: 0, why: "Des chiffres définis gardent les notes cohérentes entre entraîneurs." },
            { objective: "O6", q: "Un joueur est petit mais joue intelligemment et gagne tous ses duels. Comment notez-vous son sens du jeu ?", options: ["Bas, à cause de sa taille", "Laisser ce joueur de côté", "Selon ce que vous avez vu, pas selon sa taille", "Selon la qualité de la vidéo"], answer: 2, why: "Juger seulement sur la taille est une forme de biais." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Contacter les entraîneurs et rester organisé",
        questions: [
          { objective: "O4", q: "Quel objet est le meilleur pour un e-mail à un entraîneur ?", options: ["« Salut »", "« Lisez s'il vous plaît !!! »", "Vide", "« 2027 Milieu | Moyenne 3,5 | Club Metro FC »"], answer: 3, why: "Il donne les infos clés d'un coup d'œil." },
          { objective: "O4", q: "Qui doit envoyer les e-mails aux entraîneurs universitaires ?", options: ["L'athlète", "Seulement les parents", "Un inconnu", "Un robot d'IA automatiquement"], answer: 0, why: "Les entraîneurs veulent avoir des nouvelles de l'athlète." },
          { objective: "O5", q: "Lequel est un signe d'intérêt réel ?", options: ["Une publicité de masse pour un stage", "Une mention J'aime sur les réseaux", "Une réponse personnelle qui pose des questions sur vos notes", "Rien"], answer: 2, why: "Les questions personnelles montrent un intérêt réel." },
          { objective: "O5", q: "Un service garantit une bourse contre paiement. Vous devez :", options: ["Payer tout de suite", "Donner votre mot de passe", "Signer sans lire", "Vérifier d'abord avec votre entraîneur et votre conseiller d'orientation"], answer: 3, why: "Personne ne peut garantir une bourse." },
          { objective: "O6", q: "Pour les entraîneurs, l'IA doit servir à :", options: ["Noter des joueurs qu'elle n'a pas vus", "Résumer les notes écrites, pas créer des notes", "Stocker les détails privés de mineurs", "Remplacer les évaluations"], answer: 1, why: "Les notes viennent de ce que l'entraîneur a vu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Scouting et recrutement avec l'IA",
    questions: [
      { objective: "O1", q: "Laquelle est une organisation du sport universitaire ?", options: ["La NFL", "Une marque de chaussures", "La NAIA", "Une application sociale"], answer: 2, why: "La NAIA est une association sportive universitaire." },
      { objective: "O1", q: "Le NCAA Eligibility Center vérifie :", options: ["Les résultats scolaires et le statut amateur", "Votre nombre d'abonnés", "Seulement votre taille", "Vos goûts musicaux"], answer: 0, why: "Il certifie l'admissibilité." },
      { objective: "O1", q: "Les plus jeunes et les athlètes de DIII peuvent commencer par :", options: ["Une Profile Page", "Rien", "Un service payant", "Une sélection"], answer: 0, why: "L'Eligibility Center décrit une Profile Page pour eux." },
      { objective: "O1", q: "Les règles de contact pour le recrutement dépendent :", options: ["De votre pointure", "De la météo", "Du sport et de la division", "De votre équipe préférée"], answer: 2, why: "Les règles diffèrent selon le sport et le niveau." },
      { objective: "O1", q: "Qui vous aide à garder vos cours obligatoires sur la bonne voie ?", options: ["Un rival", "Votre conseiller d'orientation", "Un influenceur", "Personne"], answer: 1, why: "Les conseillers connaissent les exigences scolaires." },
      { objective: "O2", q: "Une université « ambitieuse », c'est :", options: ["Une certitude", "Fermée", "Un collège", "Un défi pour vous"], answer: 3, why: "Il est plus difficile d'y entrer ou d'y jouer." },
      { objective: "O2", q: "Où trouver le vrai e-mail d'un entraîneur ?", options: ["En devinant", "Auprès d'une IA", "Sur le site officiel du sport de l'université", "Sur une page de fans"], answer: 2, why: "Les sites officiels sont à jour." },
      { objective: "O2", q: "Pourquoi vérifier l'effectif ?", options: ["Pour copier leurs biographies", "Pour envoyer des messages aux joueurs", "C'est inutile", "Pour voir qui part à votre poste"], answer: 3, why: "Les besoins de l'effectif influencent vos chances." },
      { objective: "O3", q: "La taille et le poids sur votre profil doivent être :", options: ["Honnêtes", "Fortement arrondis vers le haut", "Toujours absents", "Devinés"], answer: 0, why: "Les entraîneurs vérifient." },
      { objective: "O3", q: "Une vidéo de moments forts dure souvent :", options: ["30 minutes", "2 à 4 minutes", "5 secondes", "Deux heures"], answer: 1, why: "Court et ciblé, c'est ce qui marche le mieux." },
      { objective: "O3", q: "Avant chaque action, vous devez :", options: ["Seulement ajouter de la musique forte", "Montrer le public", "Vous identifier avec une flèche ou un cercle", "Rien faire"], answer: 2, why: "Les entraîneurs doivent savoir quel joueur vous êtes." },
      { objective: "O3", q: "Qu'est-ce qui ne doit PAS figurer sur votre profil ?", options: ["Votre adresse personnelle", "Votre année de fin d'études", "Le lien vers vos moments forts", "Les coordonnées de votre entraîneur"], answer: 0, why: "Gardez les détails privés hors du profil." },
      { objective: "O4", q: "Un bon e-mail à un entraîneur fait moins d'environ :", options: ["1 000 mots", "5 mots", "Pas de limite", "150 mots"], answer: 3, why: "Les e-mails courts sont lus." },
      { objective: "O4", q: "Envoyer le même e-mail à toutes les universités :", options: ["C'est le mieux", "Les entraîneurs s'en rendent compte ; personnalisez chacun", "C'est obligatoire", "Donne plus de réponses"], answer: 1, why: "Les e-mails personnels se démarquent." },
      { objective: "O4", q: "Une relance doit contenir :", options: ["Le même e-mail", "Une nouvelle information, comme une nouvelle vidéo", "Une plainte", "Rien"], answer: 1, why: "Une nouvelle info donne une raison de répondre." },
      { objective: "O4", q: "Un showcase, c'est :", options: ["Une vitrine à trophées", "Un magasin", "Une émission de télé", "Un événement où des athlètes jouent devant des entraîneurs"], answer: 3, why: "Les showcases aident les entraîneurs à vous voir." },
      { objective: "O5", q: "À quelle fréquence mettre à jour votre tableau de recrutement ?", options: ["Chaque semaine", "Une fois par an", "Jamais", "Seulement après avoir signé"], answer: 0, why: "Chaque semaine, les prochaines étapes restent à l'heure." },
      { objective: "O5", q: "Qu'est-ce qui passe en premier pendant le recrutement ?", options: ["Les réseaux sociaux", "Les services payants", "L'école et l'entraînement", "Les rumeurs"], answer: 2, why: "Les notes et le jeu comptent le plus." },
      { objective: "O6", q: "Une grille d'évaluation, c'est :", options: ["Un type d'exercice", "Une chaussure", "Un trophée", "Un guide de notation qui décrit chaque note"], answer: 3, why: "Elle garde les notes cohérentes." },
      { objective: "O6", q: "Juger des joueurs sur la qualité de la vidéo plutôt que sur leur niveau, c'est :", options: ["Équitable", "Une forme de biais", "Obligatoire", "Une bonne pratique"], answer: 1, why: "Un scouting équitable regarde le niveau." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Note sur l'admissibilité et les règles",
        objective: "O1",
        notYet: "Aucun compte d'admissibilité nommé, ou des règles tirées de l'IA ou de vieux articles.",
        meets: "Nomme le compte d'admissibilité nécessaire et la source officielle où les règles de recrutement ont été vérifiées.",
        exceeds: "Comprend les vérifications des cours obligatoires et des notes faites avec le conseiller d'orientation."
      },
      {
        name: "Liste d'universités cibles",
        objective: "O2",
        notYet: "Moins de 15 universités, pas de mélange ambitieuses, adaptées et accessibles, ou des détails non vérifiés.",
        meets: "15 universités avec toutes les colonnes, marquées ambitieuses, adaptées ou accessibles, vérifiées sur les pages officielles.",
        exceeds: "Note les besoins de l'effectif au poste de l'athlète et le coût de chaque université."
      },
      {
        name: "Profil et vidéo de moments forts",
        objective: "O3",
        notYet: "Des statistiques fausses, des détails privés, ou les meilleures actions enfouies tard dans la vidéo.",
        meets: "Un profil honnête d'une page et une vidéo de 2 à 4 minutes avec les meilleures actions en premier et l'athlète signalé, relue par un entraîneur.",
        exceeds: "Ajoute un lien vers un match complet si les entraîneurs du sport en attendent un, et garde le profil à jour."
      },
      {
        name: "E-mails aux entraîneurs",
        objective: "O4",
        notYet: "Génériques, longs, ou envoyés par un parent.",
        meets: "Trois e-mails personnels de moins de 150 mots, avec un objet clair et une raison vraie pour chaque université, envoyés par l'athlète.",
        exceeds: "Chacun comprend le calendrier à venir et le contact de l'entraîneur, et les dates de relance sont notées."
      },
      {
        name: "Suivi",
        objective: "O5",
        notYet: "Pas de colonnes de suivi ni de prochaines étapes.",
        meets: "Chaque contact noté avec la réponse, la prochaine étape et la date.",
        exceeds: "Mis à jour chaque semaine pendant un mois, avec les vrais signes d'intérêt notés."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le plan de recrutement avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui ont créé le bon compte d'admissibilité (questionnaire de suivi)",
      "Les apprenants qui signalent des réponses personnelles, des invitations à un stage ou à une visite de la part d'entraîneurs universitaires",
      "Les apprenants qui s'engagent avec un programme universitaire, et ceux qui disent avoir évité un service payant qui garantissait des résultats"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un compte Google gratuit pour Google Sheets",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Des vidéos de match et un éditeur vidéo gratuit",
      "Votre relevé de notes, vos vraies statistiques et les coordonnées de vos entraîneurs",
      "Environ 60 minutes de leçons, plus le temps de créer le profil et la vidéo"
    ],
    facilitatorNotes: [
      "Invitez le conseiller d'orientation à expliquer les cours obligatoires et les comptes d'admissibilité ; ne vous prononcez pas vous-même sur l'admissibilité.",
      "Faites vérifier les règles de contact pour le recrutement sur ncaa.org ou sur le site de la NAIA pendant la séance ; les règles changent souvent.",
      "Impliquez les parents ou tuteurs, mais assurez-vous que les athlètes écrivent et envoient eux-mêmes leurs e-mails aux entraîneurs.",
      "Mettez les familles en garde contre les services payants qui garantissent des bourses, et demandez-leur de vérifier avec l'entraîneur ou le conseiller avant de payer.",
      "Pour les entraîneurs qui utilisent la leçon 6, gardez les notes sur les joueurs privées, utilisez les mêmes critères pour tous et revoyez les notes pour repérer les biais."
    ]
  }
};
