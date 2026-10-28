"use strict";

// Koach Learn course (French translation of seniors/seniors-caregiving.js). See scripts/koachlearn-courses/README.md, "Translations".
// Every number and URL is kept exactly as in the English. The US services are marked as US; readers elsewhere are pointed to their own
// health centre, social services, crisis line or emergency number.

module.exports = {
  id: "seniors-caregiving-fr",
  lang: "fr",
  translationOf: "seniors-caregiving",
  category: "Seniors and Technology",
  name: "Aidant : prendre soin d'un proche",
  skills: "Comprendre les besoins de votre proche, Créer un carnet de soins, Gérer les médicaments et les rendez-vous, Trouver de l'aide locale pour les aidants, Partager la charge avec la famille, Prendre soin de vous en tant qu'aidant",
  outcome: "organiser les soins d'un proche avec un carnet de soins et une liste de médicaments, gérer les rendez-vous et les médicaments en sécurité avec son médecin et son pharmacien, trouver de l'aide locale (aux États-Unis, par l'Eldercare Locator), partager les tâches avec la famille, et protéger votre propre santé avec un plan pour prendre soin de vous.",
  about: [
    "Beaucoup de gens deviennent aidants sans l'avoir prévu : une femme qui aide son mari après un AVC, un homme qui conduit sa mère à ses rendez-vous, une grand-mère qui élève ses petits-enfants tout en s'occupant de sa sœur, un voisin qui passe voir quelqu'un chaque jour. Être aidant peut donner beaucoup de sens à la vie, mais cela peut aussi être épuisant et isolant.",
    "Ce cours est pour les personnes âgées qui s'occupent de leur conjoint, d'un ami ou d'un parent, et pour les enfants et petits-enfants adultes qui s'occupent d'un proche âgé. Vous allez vous organiser, gérer les médicaments et les rendez-vous en sécurité, trouver de l'aide près de chez vous, partager le travail et prendre soin de vous. Les services et numéros cités sont ceux des États-Unis ; ailleurs, demandez au médecin, au centre de santé ou aux services sociaux de votre commune quelles aides existent.",
    "Ce cours enseigne des compétences ; il ne donne pas de conseils médicaux ni juridiques. Posez les questions de santé au médecin, à l'infirmier ou au pharmacien de votre proche, et les questions juridiques ou d'argent à un professionnel qualifié. Chaque leçon dure environ cinq minutes avec une tâche \"Essayez maintenant\" ; il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez un premier carnet de soins pour votre proche (réel ou pour vous entraîner) : ses contacts principaux, sa liste de médicaments, ses prochains rendez-vous et les questions pour le prochain. Puis ajoutez un plan d'aide d'une page : une ressource locale que vous avez contactée ou allez contacter (comme l'Eldercare Locator aux États-Unis, ou les services sociaux de votre commune ailleurs), deux tâches précises que vous allez demander à des proches ou à des amis, et votre propre plan pour prendre soin de vous avec une pause chaque semaine.",
  chapters: [
    {
      name: "Chapitre 1 : S'organiser",
      lessons: [
        {
          title: "Comprendre les besoins de votre proche",
          minutes: 5,
          goal: "Lister ce que votre proche peut faire seul et là où il a besoin d'aide.",
          text: [
            "Les aidants aident pour beaucoup de choses. MedlinePlus cite la toilette, les repas et les médicaments ; le ménage, la cuisine et les courses ; les trajets jusqu'aux rendez-vous ; la compagnie et le soutien moral ; la coordination des soins ; et l'aide pour les décisions de santé et d'argent.",
            "Commencez par regarder une journée normale. Qu'est-ce que votre proche peut faire seul ? Qu'est-ce qui lui est difficile : se laver, s'habiller, cuisiner, se souvenir de ses médicaments, payer les factures, aller chez le médecin ? Demandez-lui, et écoutez. Chacun veut garder le plus possible d'autonomie et de contrôle sur sa propre vie.",
            "Notez les besoins en trois groupes : soins de tous les jours, soins de santé, et argent et papiers. Cette liste vous montre où l'aide est le plus nécessaire et quoi demander aux autres. Les besoins changent avec le temps ; relisez-la tous les quelques mois ou après une hospitalisation."
          ],
          steps: ["Passez en revue une journée normale avec votre proche.", "Listez ce qu'il peut faire seul.", "Listez là où il a besoin d'aide : soins de tous les jours, soins de santé, argent et papiers.", "Demandez-lui ce qui compte le plus pour lui.", "Relisez la liste tous les quelques mois ou après une hospitalisation."],
          words: [["Aidant", "une personne qui aide quelqu'un qui a besoin de soutien à cause de l'âge, d'une maladie ou d'un handicap ; souvent un membre de la famille ou un ami."], ["Autonomie", "le fait de pouvoir faire les choses et faire ses propres choix."]],
          slides: [
            { title: "Ce pour quoi les aidants aident", bullets: ["Toilette, repas et médicaments", "Ménage, courses et trajets", "Compagnie, coordination des soins et décisions"] },
            { title: "Regardez une journée normale", bullets: ["Que peut-il faire seul ?", "Qu'est-ce qui est difficile pour lui ?", "Demandez-lui et écoutez"] },
            { title: "Trois groupes de besoins", bullets: ["Soins de tous les jours", "Soins de santé", "Argent et papiers"] }
          ],
          sources: [{ name: "MedlinePlus : Aidants (en anglais)", url: "https://medlineplus.gov/caregivers.html" }],
          tryIt: "Écrivez une liste des besoins de votre proche (ou de quelqu'un dont vous pourriez vous occuper un jour) en trois colonnes : soins de tous les jours, soins de santé, argent et papiers. Entourez les deux plus grands besoins.",
          youCanNow: "lister les besoins de votre proche en soins de tous les jours, soins de santé et papiers, tout en respectant son autonomie."
        },
        {
          title: "Créer un carnet de soins",
          minutes: 5,
          goal: "Commencer un carnet de soins qui rassemble les informations importantes au même endroit.",
          text: [
            "Les CDC (l'agence de santé publique des États-Unis) notent qu'un plan de soins peut aider les aidants à garder les informations importantes au même endroit. Appelez-le carnet de soins : un classeur, une chemise ou un document sur votre téléphone ou votre ordinateur que vous, les proches qui aident et un aidant de remplacement pouvez utiliser.",
            "Ce qu'on y met : les contacts (médecins, pharmacie, famille, voisins, contacts d'urgence) ; une liste de médicaments ; les problèmes de santé et les allergies ; les informations d'assurance (aux États-Unis : Medicare, Medicaid, VA ou assurance privée ; ailleurs, sa caisse ou sa mutuelle) ; un calendrier des rendez-vous ; et des notes de chaque consultation. Ajoutez une copie des papiers juridiques qu'il a, comme une procuration ou des directives anticipées, et l'endroit où sont rangés les originaux.",
            "Gardez-le en sécurité et privé. Si vous l'avez sur un ordinateur ou un téléphone, utilisez un mot de passe. Ne tapez pas de numéros complets d'assurance santé, de sécurité sociale ou de compte bancaire dans des outils d'IA ou des e-mails. Un petit-enfant à l'aise avec la technologie peut aider à créer un agenda partagé ou un document simple, avec l'accord de votre proche."
          ],
          steps: ["Choisissez le papier (classeur) ou le numérique (document sur téléphone ou ordinateur).", "Ajoutez les contacts, les problèmes de santé, les allergies et l'assurance.", "Ajoutez la liste de médicaments et le calendrier des rendez-vous.", "Notez où sont rangés les papiers juridiques.", "Montrez à une personne de secours où il se trouve."],
          words: [["Plan de soins", "un document écrit qui décrit les besoins, les soins et les informations importantes d'une personne."], ["Procuration", "un papier juridique qui permet à quelqu'un d'agir pour une autre personne, par exemple pour l'argent ou les décisions de santé."], ["Directives anticipées", "un papier juridique qui dit quels soins médicaux une personne veut si elle ne peut plus s'exprimer."]],
          slides: [
            { title: "Tout au même endroit", bullets: ["Classeur, chemise ou document sur téléphone", "Facile pour les proches et les aidants de remplacement"] },
            { title: "Ce qu'on y met", bullets: ["Contacts et numéros d'urgence", "Problèmes de santé, allergies, assurance", "Liste de médicaments et rendez-vous", "Où sont rangés les papiers juridiques"] },
            { title: "Gardez-le en sécurité", bullets: ["Mot de passe sur les copies numériques", "Pas de numéros complets d'identité ou de banque dans l'IA ou les e-mails", "Montrez à une personne de secours où il est"] }
          ],
          sources: [{ name: "CDC : Être aidant (en anglais)", url: "https://www.cdc.gov/caregiving/index.html" }],
          tryIt: "Commencez votre carnet de soins aujourd'hui : sur papier ou sur votre téléphone, écrivez la page des contacts (médecin, pharmacie, deux membres de la famille, contact d'urgence) et la page des allergies et problèmes de santé.",
          youCanNow: "créer un carnet de soins qui rassemble au même endroit les contacts, les informations de santé et les rendez-vous."
        },
        {
          title: "Gérer les médicaments et les rendez-vous",
          minutes: 6,
          goal: "Tenir une liste de médicaments et préparer des questions pour le prochain rendez-vous de votre proche.",
          text: [
            "Les erreurs de médicaments sont fréquentes quand quelqu'un en prend plusieurs. MedlinePlus conseille de tenir une liste de chaque médicament avec sa dose et le moment où il est pris, y compris les médicaments sans ordonnance, les vitamines, les compléments et les plantes, ainsi que les allergies, et de l'apporter à chaque consultation. Lisez l'étiquette avant chaque prise. Un pilulier pour la semaine peut aider. N'arrêtez, ne commencez et ne changez jamais un médicament sans demander au médecin ou au pharmacien.",
            "Le pharmacien est un expert gratuit. Demandez-lui : Pourquoi ce médicament est-il nécessaire ? Quels effets secondaires faut-il surveiller ? Est-ce sans danger avec les autres médicaments ? Faut-il éviter certains aliments ou l'alcool ? Utiliser une seule pharmacie pour tout l'aide à repérer les problèmes.",
            "Pour les rendez-vous, apportez le carnet de soins, écrivez les questions à l'avance, prenez des notes, et redites le plan pour vérifier que vous avez compris. Les cabinets médicaux ont en général besoin de l'accord de votre proche avant de vous donner ses informations de santé ; demandez quel formulaire ils utilisent. Aux États-Unis, pour les questions sur Medicare (l'assurance santé publique des 65 ans et plus), appelez le 1-800-MEDICARE (1-800-633-4227) et demandez comment votre proche peut vous autoriser à parler pour lui, ou obtenez une aide gratuite et personnalisée auprès du SHIP de votre État (shiphelp.org)."
          ],
          steps: ["Mettez à jour la liste de médicaments : nom, dose, heure, à quoi il sert.", "Utilisez une seule pharmacie et posez vos questions au pharmacien.", "Utilisez un pilulier si cela aide ; lisez les étiquettes à chaque fois.", "Avant une consultation, écrivez vos questions ; pendant, prenez des notes et redites le plan.", "Demandez au cabinet quel formulaire d'accord vous permet d'obtenir les informations."],
          words: [["Pilulier", "une boîte avec des cases pour chaque jour (et chaque moment) pour préparer les comprimés à l'avance."], ["SHIP", "State Health Insurance Assistance Program : aide locale et gratuite aux États-Unis pour les questions sur Medicare."]],
          slides: [
            { title: "Liste de médicaments", bullets: ["Chaque médicament, vitamine, complément, plante", "Dose, heure et à quoi il sert", "Allergies ; apportez-la à chaque consultation"] },
            { title: "Bonnes habitudes", bullets: ["Lisez l'étiquette à chaque fois", "Un pilulier si cela aide", "Ne changez jamais un médicament sans demander"] },
            { title: "Demandez au pharmacien", bullets: ["Pourquoi ce médicament ? Quels effets secondaires ?", "Sans danger avec les autres médicaments ?", "Une seule pharmacie pour tout"] },
            { title: "Rendez-vous", bullets: ["Apportez le carnet et les questions", "Prenez des notes, redites le plan", "Demandez quel formulaire d'accord utilise le cabinet"] }
          ],
          sources: [
            { name: "MedlinePlus : Erreurs de médication (en anglais)", url: "https://medlineplus.gov/medicationerrors.html" },
            { name: "Medicare.gov : Parler à quelqu'un (États-Unis, en anglais)", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "SHIP : programmes d'aide pour l'assurance santé des États (États-Unis, en anglais)", url: "https://www.shiphelp.org/" }
          ],
          tryIt: "Ajoutez la liste de médicaments à votre carnet de soins : nom, dose, heure, à quoi il sert. Puis écrivez trois questions pour le prochain rendez-vous de votre proche ou pour le pharmacien.",
          youCanNow: "tenir une liste de médicaments exacte, travailler avec le pharmacien et préparer les rendez-vous en tant qu'aidant."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'organiser",
        questions: [
          { q: "Quelle est une bonne première étape pour comprendre les besoins de votre proche ?", options: ["Tout prendre en charge tout de suite", "Décider sans lui demander", "Passer en revue une journée normale et lui demander ce qui est difficile", "Attendre une crise"], answer: 2, why: "Regarder une journée normale et écouter montre où l'aide est vraiment nécessaire." },
          { q: "À quoi sert un carnet de soins ?", options: ["À rassembler les informations importantes au même endroit", "À écrire un journal que vous seul pouvez lire", "À garder les mots de passe de tous les comptes", "À partager sur les réseaux sociaux"], answer: 0, why: "Un plan ou carnet de soins rassemble les contacts, les médicaments et les rendez-vous." },
          { q: "Qu'est-ce qui a sa place dans un carnet de soins ?", options: ["Les codes de carte bancaire", "La liste de médicaments et les contacts des médecins", "Tous les tickets de caisse", "Rien, ni sur papier ni en numérique"], answer: 1, why: "Les contacts, les médicaments, les problèmes de santé, l'assurance et les rendez-vous y ont leur place." },
          { q: "Votre proche veut arrêter un médicament parce qu'il lui donne mal au ventre. Que faites-vous ?", options: ["Il l'arrête tout de suite", "Vous doublez la prochaine dose", "Vous en donnez la moitié à quelqu'un d'autre", "Vous demandez d'abord au médecin ou au pharmacien"], answer: 3, why: "N'arrêtez et ne changez jamais un médicament sans demander d'abord." },
          { q: "Le cabinet médical refuse de vous donner des informations. Que devez-vous demander ?", options: ["Quel formulaire d'accord votre proche peut signer", "L'adresse personnelle du médecin", "À voir les dossiers d'autres patients", "Rien ; vous abandonnez"], answer: 0, why: "Les cabinets ont en général besoin de l'accord du patient ; demandez quel formulaire ils utilisent." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Trouver de l'aide et prendre soin de vous",
      lessons: [
        {
          title: "Trouver de l'aide près de chez vous",
          minutes: 5,
          goal: "Trouver des services locaux pour les aidants avec l'Eldercare Locator.",
          text: [
            "Vous n'êtes pas obligé de tout trouver seul. Aux États-Unis, l'Eldercare Locator, un service public de l'Administration for Community Living (ACL, l'administration fédérale pour la vie dans la communauté), met en relation les personnes âgées et les aidants avec des services locaux. Appelez ou envoyez un SMS au 1-800-677-1116, discutez en ligne, ou cherchez par lieu sur eldercare.acl.gov. Il peut vous mettre en contact avec votre Area Agency on Aging, l'agence locale pour les personnes âgées. Hors des États-Unis, demandez au médecin, au centre de santé ou aux services sociaux de votre commune quelles aides existent pour les aidants.",
            "Grâce au programme national de soutien aux aidants familiaux, les États et les agences locales proposent : des informations sur les services, de l'aide pour obtenir ces services, des conseils, des groupes de soutien et des formations pour les aidants, des solutions de répit (une pause pour vous) et quelques services en plus. Il concerne les aidants familiaux adultes de personnes de 60 ans et plus, de personnes de tout âge atteintes de la maladie d'Alzheimer ou d'une maladie apparentée, et certains proches âgés qui élèvent des enfants ou s'occupent d'adultes handicapés. Demandez ce qui existe près de chez vous.",
            "Vous vous occupez d'un ancien combattant américain ? Le programme de soutien aux aidants du VA (le ministère américain des Anciens combattants) aide les aidants des anciens combattants inscrits aux soins du VA. Appelez la ligne de soutien aux aidants au 1-855-260-3274, du lundi au vendredi, de 8 h à 20 h, heure de l'Est des États-Unis. Pour les questions sur Medicare, le SHIP de votre État donne une aide locale gratuite."
          ],
          steps: ["Aux États-Unis, appelez ou envoyez un SMS à l'Eldercare Locator : 1-800-677-1116, ou cherchez sur eldercare.acl.gov.", "Demandez les coordonnées de votre agence locale pour les personnes âgées (ailleurs : centre de santé ou services sociaux).", "Demandez quelles aides existent : formation des aidants, groupes de soutien, répit et repas.", "Si vous vous occupez d'un ancien combattant américain : appelez le 1-855-260-3274.", "Notez ce que vous apprenez dans votre carnet de soins."],
          words: [["Area Agency on Aging", "un bureau local, aux États-Unis, qui aide les personnes âgées et les aidants à trouver des services."], ["Répit", "une prise en charge de courte durée de votre proche pour que vous puissiez faire une pause."], ["ACL", "Administration for Community Living, qui fait partie du ministère américain de la Santé et des Services sociaux."]],
          slides: [
            { title: "Eldercare Locator (États-Unis)", bullets: ["Appelez ou envoyez un SMS au 1-800-677-1116", "Ou cherchez sur eldercare.acl.gov", "Ailleurs : centre de santé ou services sociaux de votre commune"] },
            { title: "Aide pour les aidants familiaux", bullets: ["Informations et aide pour obtenir des services", "Conseils, groupes de soutien, formations", "Répit : une pause pour vous"] },
            { title: "Pour un ancien combattant américain", bullets: ["Ligne de soutien aux aidants du VA : 1-855-260-3274", "Lundi au vendredi, 8 h à 20 h, heure de l'Est"] }
          ],
          sources: [
            { name: "Eldercare Locator (ACL, États-Unis, en anglais)", url: "https://eldercare.acl.gov/" },
            { name: "ACL : programme national de soutien aux aidants familiaux (en anglais)", url: "https://www.acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
            { name: "Programme de soutien aux aidants du VA (en anglais)", url: "https://www.caregiver.va.gov/" }
          ],
          tryIt: "Aux États-Unis, allez sur eldercare.acl.gov (ou appelez ou envoyez un SMS au 1-800-677-1116) et trouvez votre agence locale pour les personnes âgées. Ailleurs, trouvez le service social ou le centre de santé qui aide les aidants près de chez vous. Notez son nom, son numéro de téléphone et un service sur lequel vous voulez vous renseigner dans votre carnet de soins.",
          youCanNow: "trouver de l'aide locale pour les aidants, par l'Eldercare Locator aux États-Unis ou par les services de votre pays, et savoir où appeler si vous vous occupez d'un ancien combattant américain."
        },
        {
          title: "Partager la charge avec la famille et les amis",
          minutes: 5,
          goal: "Demander une aide précise à la famille et aux amis et créer un planning partagé.",
          text: [
            "Beaucoup d'aidants font tout seuls parce qu'ils ne veulent déranger personne. Souvent, les gens veulent aider mais ne savent pas comment. \"Dis-moi si tu as besoin de quoi que ce soit\" se transforme rarement en aide ; une demande précise, si.",
            "Les CDC conseillent de nommer une tâche précise ou un créneau où vous avez besoin d'aide, et d'utiliser un agenda partagé en ligne pour l'aide régulière. MedlinePlus conseille de laisser chacun choisir les tâches avec lesquelles il est à l'aise. Exemples : \"Peux-tu conduire maman à son rendez-vous de jeudi ?\" \"Peux-tu appeler papa tous les dimanches soir ?\" \"Peux-tu faire les courses le samedi ?\" Les proches qui habitent loin peuvent s'occuper des factures, des appels à l'assurance, des recherches ou des appels vidéo.",
            "Une courte réunion de famille, en personne ou en vidéo, aide chacun à voir la liste des besoins et à choisir des tâches. Incluez votre proche s'il le peut. Si vous travaillez, renseignez-vous sur les congés auprès du service du personnel : aux États-Unis, la loi fédérale sur les congés familiaux et médicaux (FMLA) permet aux salariés qui remplissent les conditions de prendre jusqu'à 12 semaines de congé non payé par an pour s'occuper de certains membres de leur famille. Ailleurs, les règles dépendent de votre pays."
          ],
          steps: ["Reprenez votre liste de besoins de la leçon 1.", "Transformez les besoins en tâches précises avec un jour et une heure.", "Organisez une courte réunion de famille (en personne ou en vidéo).", "Laissez chacun choisir ses tâches ; notez-les dans un agenda partagé.", "Vous travaillez ? Renseignez-vous sur les congés pour aidants auprès du service du personnel."],
          words: [["Agenda partagé", "un agenda en ligne que plusieurs personnes peuvent voir et compléter."], ["FMLA", "la loi fédérale américaine sur les congés familiaux et médicaux, qui permet aux salariés qui remplissent les conditions de prendre un congé non payé pour s'occuper de leur famille."]],
          slides: [
            { title: "Demandez quelque chose de précis", bullets: ["Pas \"dis-moi si tu as besoin de quoi que ce soit\"", "\"Peux-tu conduire maman jeudi ?\""] },
            { title: "Comment les gens peuvent aider", bullets: ["Trajets, repas, courses, visites", "De loin : factures, appels, recherches, appels vidéo"] },
            { title: "Réunissez tout le monde", bullets: ["Courte réunion de famille, en personne ou en vidéo", "Chacun choisit ses tâches", "Notez-les dans un agenda partagé"] },
            { title: "Si vous travaillez", bullets: ["Renseignez-vous sur les congés pour aidants", "États-Unis (FMLA) : jusqu'à 12 semaines non payées si vous remplissez les conditions"] }
          ],
          sources: [
            { name: "CDC : Prendre soin de soi quand on prend soin d'un autre (en anglais)", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "MedlinePlus : Santé de l'aidant (en anglais)", url: "https://medlineplus.gov/caregiverhealth.html" }
          ],
          tryIt: "Écrivez deux demandes précises (tâche, jour et heure) et envoyez-les à deux personnes, ou écrivez à qui vous les demanderiez. Exemple : \"Pourrais-tu emmener papa à son rendez-vous chez l'ophtalmologiste le 14 à 10 h ?\"",
          youCanNow: "transformer les besoins en demandes précises et partager les tâches d'aidant avec la famille et les amis."
        },
        {
          title: "Prendre soin de vous en tant qu'aidant",
          minutes: 5,
          goal: "Repérer les signes d'épuisement de l'aidant et prévoir des pauses régulières.",
          text: [
            "Les CDC le disent simplement : pour être un aidant efficace, vous devez prendre soin de vous. MedlinePlus cite ces signes de stress chez l'aidant : se sentir dépassé ou seul, dormir trop ou trop peu, de grands changements de poids, une fatigue constante, perdre l'intérêt pour ce qu'on aimait, être irritable ou en colère, s'inquiéter souvent ou être souvent triste, avoir souvent mal à la tête ou au corps, et fumer ou boire plus.",
            "Ce qui aide : des pauses régulières (même quelques heures de répit par semaine peuvent aider), demander de l'aide aux autres, un groupe de soutien pour aidants (en personne ou en ligne), garder le contact avec vos amis, et prendre soin de votre propre santé avec de l'activité, des repas sains, du sommeil et vos propres bilans de santé. Dites à votre médecin que vous êtes aidant ; il connaît peut-être des groupes de soutien.",
            "Si vous vous sentez sans espoir ou dépassé et que cela ne s'améliore pas, parlez-en à votre médecin ou à un conseiller. En cas de crise, appelez la ligne d'écoute ou le numéro d'urgence de votre pays ; aux États-Unis, appelez ou envoyez un SMS au 988, et les anciens combattants et leurs familles peuvent taper 1. Vous êtes maintenant prêt à terminer votre carnet de soins et votre plan d'aide."
          ],
          steps: ["Vérifiez si vous avez des signes de stress de l'aidant.", "Prévoyez une pause régulière chaque semaine, et qui vous remplace.", "Trouvez un groupe de soutien pour aidants (demandez à l'agence locale ou aux services sociaux).", "Gardez vos propres rendez-vous médicaux et dites à votre médecin que vous êtes aidant.", "Crise : ligne d'écoute ou numéro d'urgence de votre pays ; aux États-Unis, appel ou SMS au 988."],
          words: [["Stress de l'aidant", "la fatigue physique et morale qui vient du fait de s'occuper de quelqu'un."], ["Groupe de soutien", "un groupe de personnes dans une situation semblable qui se réunissent pour partager leurs expériences et leurs conseils."]],
          slides: [
            { title: "Signes de stress de l'aidant", bullets: ["Dépassé, seul, toujours fatigué", "Changements de sommeil ou de poids", "Irritable, triste, inquiet, douleurs", "Perte d'intérêt ; fumer ou boire plus"] },
            { title: "Ce qui aide", bullets: ["Des pauses régulières, même quelques heures par semaine", "Demandez de l'aide ; rejoignez un groupe de soutien", "Votre sommeil, vos repas, votre activité, vos bilans"] },
            { title: "Trouvez du soutien", bullets: ["Dites à votre médecin que vous êtes aidant", "Crise : ligne d'écoute de votre pays ; États-Unis : 988, anciens combattants 1"] }
          ],
          sources: [
            { name: "MedlinePlus : Santé de l'aidant (en anglais)", url: "https://medlineplus.gov/caregiverhealth.html" },
            { name: "CDC : Prendre soin de soi quand on prend soin d'un autre (en anglais)", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "Ligne 988 de prévention du suicide et d'aide en cas de crise (États-Unis, en anglais)", url: "https://988lifeline.org/" }
          ],
          tryIt: "Tâche finale : terminez votre premier carnet de soins (contacts, liste de médicaments, rendez-vous et questions) et ajoutez un plan d'aide d'une page : une ressource locale que vous avez contactée ou allez contacter, deux tâches précises pour la famille ou les amis, et votre plan pour prendre soin de vous avec une pause chaque semaine.",
          youCanNow: "repérer le stress de l'aidant, prévoir des pauses régulières et continuer à vous occuper de votre proche sans perdre votre propre santé."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Trouver de l'aide et prendre soin de vous",
        questions: [
          { q: "Quel est le numéro de l'Eldercare Locator aux États-Unis (appel ou SMS) ?", options: ["911", "1-800-677-1116", "411", "988"], answer: 1, why: "L'Eldercare Locator vous met en relation avec des services locaux au 1-800-677-1116." },
          { q: "Qu'est-ce que le répit ?", options: ["Un type de médicament", "Une facture d'hôpital", "Une prise en charge de courte durée pour que l'aidant puisse faire une pause", "Un papier juridique"], answer: 2, why: "Le répit donne du temps libre à l'aidant." },
          { q: "Quelle demande a le plus de chances d'apporter une vraie aide ?", options: ["\"Dis-moi si tu as besoin de quoi que ce soit.\"", "\"Aide-moi un de ces jours.\"", "Ne rien dire", "\"Peux-tu conduire maman à son rendez-vous de jeudi à 14 h ?\""], answer: 3, why: "Une tâche précise avec une heure est facile à accepter." },
          { q: "Lequel est un signe de stress de l'aidant ?", options: ["Une fatigue constante et la perte d'intérêt pour ce qu'on aimait", "Bien dormir", "Rire avec des amis", "Aller à ses propres bilans de santé"], answer: 0, why: "MedlinePlus cite la fatigue et la perte d'intérêt parmi les signes." },
          { q: "Qui l'aidant d'un ancien combattant américain peut-il appeler pour avoir du soutien ?", options: ["La ligne de soutien aux aidants du VA au 1-855-260-3274", "Une publicité au hasard sur internet", "Seulement le service de facturation de l'hôpital", "Personne"], answer: 0, why: "La ligne de soutien aux aidants du VA aide les aidants des anciens combattants inscrits." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Aidant : prendre soin d'un proche",
    questions: [
      { q: "Laquelle est une tâche courante d'un aidant ?", options: ["Rédiger les ordonnances du médecin", "Changer les lois", "Les trajets aux rendez-vous et l'aide pour les repas", "Diriger l'hôpital"], answer: 2, why: "Les trajets, les repas, les médicaments et la compagnie sont des tâches courantes." },
      { q: "Pourquoi demander à votre proche ce qui lui est difficile ?", options: ["Pour respecter son autonomie et concentrer l'aide là où elle est nécessaire", "Pour le mettre mal à l'aise", "Parce que la loi l'exige", "Cela n'a pas d'importance"], answer: 0, why: "L'écouter le laisse maître de sa vie et montre les vrais besoins." },
      { q: "Les trois groupes de besoins de ce cours sont :", options: ["Nourriture, télé et téléphone", "Soins de tous les jours, soins de santé, et argent et papiers", "Matin, midi et soir", "Famille, amis et voisins"], answer: 1, why: "Classer les besoins ainsi montre où l'aide est le plus nécessaire." },
      { q: "Quand devez-vous relire la liste des besoins ?", options: ["Jamais", "Une seule fois", "Seulement s'il le demande", "Tous les quelques mois ou après une hospitalisation"], answer: 3, why: "Les besoins changent avec le temps." },
      { q: "Un carnet de soins peut être :", options: ["Seulement un classeur papier", "Un classeur, une chemise ou un document sur téléphone ou ordinateur", "Seulement une publication sur les réseaux sociaux", "Seulement dans votre mémoire"], answer: 1, why: "Tout format convient s'il rassemble les informations au même endroit." },
      { q: "Que sont des directives anticipées ?", options: ["Des horaires de bus", "Un ticket de pharmacie", "Un papier juridique qui dit quels soins médicaux une personne veut si elle ne peut plus s'exprimer", "Une étiquette de médicament"], answer: 2, why: "Elles enregistrent les souhaits de la personne pour ses soins médicaux." },
      { q: "Qu'est-ce que vous ne devez PAS taper dans un outil d'IA ou un e-mail ?", options: ["Des numéros complets d'assurance santé, de sécurité sociale ou de compte bancaire", "Une liste de courses", "Une question sur un pilulier", "L'heure d'un rendez-vous"], answer: 0, why: "Les numéros privés doivent rester hors des outils d'IA et des e-mails." },
      { q: "Qu'est-ce qui a sa place sur une liste de médicaments ?", options: ["Seulement la dernière ordonnance", "Seulement les comprimés du matin", "Seulement les médicaments chers", "Chaque médicament, vitamine, complément et plante, avec la dose et l'heure"], answer: 3, why: "Tout ce qui est pris peut interagir, alors il faut tout noter." },
      { q: "Pourquoi utiliser une seule pharmacie pour tous les médicaments ?", options: ["C'est toujours moins cher", "La loi l'exige", "Le pharmacien peut repérer les problèmes entre médicaments", "Il y a plus de places de parking"], answer: 2, why: "Une seule pharmacie voit la liste complète et peut repérer les problèmes." },
      { q: "Pendant un rendez-vous, une bonne façon de vérifier que vous avez compris est de :", options: ["Hocher la tête et partir", "Redire le plan avec vos propres mots", "Parler de la météo", "Ne pas prendre de notes"], answer: 1, why: "Redire le plan permet de repérer les erreurs tôt." },
      { q: "Aux États-Unis, pour une aide locale, gratuite et personnalisée sur Medicare, vous pouvez contacter :", options: ["Le SHIP de votre État (shiphelp.org)", "Une publicité qui s'ouvre toute seule", "Un inconnu sur internet", "La banque"], answer: 0, why: "Les SHIP donnent des conseils gratuits et locaux sur Medicare." },
      { q: "Quel organisme gère l'Eldercare Locator ?", options: ["L'IRS, le fisc américain", "Une compagnie d'assurance privée", "La poste", "L'Administration for Community Living (ACL)"], answer: 3, why: "L'Eldercare Locator est un service public de l'ACL." },
      { q: "Votre agence locale pour les personnes âgées peut vous aider à :", options: ["Trouver des services pour les aidants comme des formations, des groupes de soutien et du répit", "Acheter des actions", "Réparer votre voiture", "Obtenir un passeport"], answer: 0, why: "Les agences locales mettent en relation les personnes âgées et les aidants avec des services." },
      { q: "La ligne de soutien aux aidants du VA est ouverte :", options: ["Seulement le week-end", "Du lundi au vendredi, de 8 h à 20 h, heure de l'Est", "Seulement à minuit", "Un jour par an"], answer: 1, why: "Le VA indique du lundi au vendredi, de 8 h à 20 h, heure de l'Est." },
      { q: "Quelle est une bonne façon d'aider pour la famille qui habite loin ?", options: ["Ne rien faire parce qu'elle est loin", "Seulement donner des conseils", "S'occuper des factures, des appels à l'assurance ou d'appels vidéo réguliers", "Venir une fois tous les dix ans"], answer: 2, why: "Les proches éloignés peuvent prendre en charge les appels, les factures et les nouvelles régulières." },
      { q: "Un agenda partagé aide parce que :", options: ["Il remplace le médecin", "Medicare l'exige", "Il cache les tâches à la famille", "Tout le monde peut voir les tâches et s'inscrire"], answer: 3, why: "Les proches voient ce qu'il faut faire et quand." },
      { q: "Aux États-Unis, selon la loi fédérale FMLA, les salariés qui remplissent les conditions peuvent prendre jusqu'à :", options: ["1 jour de congé payé", "12 semaines de congé non payé par an pour s'occuper de certains membres de leur famille", "1 an de congé payé", "Aucun congé"], answer: 1, why: "MedlinePlus indique jusqu'à 12 semaines non payées pour les salariés qui remplissent les conditions ; renseignez-vous auprès du service du personnel." },
      { q: "Selon les CDC, pourquoi les aidants doivent-ils prendre soin d'eux ?", options: ["Pour être des aidants efficaces", "Parce que ne pas le faire serait égoïste", "Pour éviter toute la famille", "Cela n'a pas d'importance"], answer: 0, why: "Les CDC disent que vous devez prendre soin de vous pour être un aidant efficace." },
      { q: "Quelle démarche aide contre le stress de l'aidant ?", options: ["Ne jamais faire de pause", "Arrêter d'aller chez votre propre médecin", "Cacher ce que vous ressentez à tout le monde", "Rejoindre un groupe de soutien pour aidants"], answer: 3, why: "Les groupes de soutien permettent de partager expériences et conseils." },
      { q: "Un aidant aux États-Unis se sent sans espoir et dépassé. En cas de crise, il peut :", options: ["Attendre seul que ça passe", "En parler en ligne et se déconnecter", "Appeler ou envoyer un SMS au 988", "Appeler le 411"], answer: 2, why: "Le 988 est gratuit et ouvert 24 h/24 ; les anciens combattants et leurs familles peuvent taper 1. Hors des États-Unis, appelez la ligne d'écoute ou le numéro d'urgence de votre pays." }
    ]
  }
};
