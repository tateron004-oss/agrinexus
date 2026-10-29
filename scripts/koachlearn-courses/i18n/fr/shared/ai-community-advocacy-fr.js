"use strict";

// Koach Learn course (shared, bonus), French translation of "AI for Community Advocacy". Shape and rules: ../../../README.md (Translations).
// Nonpartisan, issue-based advocacy. 501(c)(3) lobbying and campaign limits are from irs.gov; the course points to legal help for specifics.

module.exports = {
  id: "ai-community-advocacy-fr",
  lang: "fr",
  translationOf: "ai-community-advocacy",
  category: "Non Profits",
  name: "L'IA au service du plaidoyer communautaire",
  skills: "Définir un enjeu et une demande claire, Rechercher des faits et vérifier les sources, Trouver le décideur, Rédiger une lettre ou un commentaire public avec l'IA, Faire une fiche d'information d'une page, Prendre la parole deux minutes en séance publique",
  outcome: "planifier avec l'aide de l'IA une petite campagne de plaidoyer sur un enjeu local : définir une demande claire, l'appuyer sur des faits vérifiés et de vrais témoignages, toucher le bon décideur avec une lettre ou un commentaire public et une fiche d'information d'une page, et prendre la parole deux minutes en séance publique, tout en respectant les règles applicables aux associations.",
  about: [
    "Le plaidoyer, c'est prendre la parole pour changer quelque chose : un passage piéton dangereux, une ligne de bus supprimée, un parc qui a besoin d'éclairage, une règle qui empêche des gens d'accéder à l'emploi ou au logement. Les communautés qui s'expriment clairement et avec des faits sont plus souvent entendues.",
    "Ce cours s'adresse au personnel et aux bénévoles d'associations, aux groupes religieux et de quartier, et aux habitants qui veulent faire bouger les choses. Les assistants d'IA comme ChatGPT, Microsoft Copilot et Google Gemini peuvent aider à faire des recherches, écrire des lettres, préparer des fiches d'information et répéter des discours, tandis que la voix de votre communauté et ses vrais témoignages restent au centre.",
    "Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Ici, le plaidoyer porte sur des enjeux, pas sur des candidats ; les associations ont des règles particulières, vues à la leçon 6."
  ],
  finalTask: "Construisez un kit de plaidoyer pour un vrai enjeu local : un problème en une phrase et une demande précise, trois faits avec leurs sources officielles, deux courts témoignages de la communauté partagés avec accord, le nom du décideur et la façon de le joindre, une lettre ou un commentaire public de moins de 300 mots, une fiche d'information d'une page, et une intervention de deux minutes répétée à voix haute.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Le personnel et les bénévoles d'associations, les groupes religieux et de quartier, et les habitants qui veulent changer un problème local, comme un passage piéton dangereux, une ligne de bus supprimée ou une règle qui empêche des personnes d'accéder à l'emploi ou au logement.",
    startingPoint: "Ils tiennent à un enjeu local et savent en parler avec leurs voisins. Beaucoup n'ont jamais rédigé de commentaire public, trouvé le bon décideur, vérifié des faits dans des sources officielles ni pris la parole lors d'une réunion publique.",
    gap: "Les communautés qui prennent la parole avec une demande claire, des faits vérifiés et de vrais témoignages sont plus souvent écoutées. Les apprenants doivent préparer une petite campagne avec l'aide de l'IA tout en gardant la voix de leur communauté au centre et en respectant les règles des associations, pour que leurs efforts mènent à un vrai changement.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone ou un ordinateur avec un assistant d'IA gratuit et un outil gratuit de mise en page ou de document",
      "Les témoignages sont partagés seulement avec accord, et les détails privés restent hors des demandes à l'IA",
      "Règles des associations : plaidoyer sur des enjeux seulement, aucun soutien à des candidats ; les apprenants vérifient les consignes de l'IRS",
      "Temps : des leçons d'environ cinq minutes plus le temps de recherche et d'entraînement"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les outils d'IA peuvent suivre d'abord « Découvrir l'IA et prendre confiance avec le numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une préoccupation de la communauté", action: "rédiger un énoncé de problème en une phrase et une demande précise qui dit quoi, à qui et pour quand", standard: "formulés avec au moins deux personnes concernées" },
    { id: "O2", condition: "Pour votre enjeu", action: "trouver des faits dans des sources officielles ou fiables et recueillir des témoignages de la communauté", standard: "avec trois faits, chacun noté avec sa source, son lien et sa date, et des témoignages partagés seulement avec accord" },
    { id: "O3", condition: "Avec des sites officiels", action: "identifier le décideur, la prochaine réunion ou date limite de commentaires, vos alliés et les opposants probables", standard: "avec le décideur confirmé sur une source officielle" },
    { id: "O4", condition: "À partir de vos faits vérifiés et d'un témoignage", action: "rédiger une lettre ou un commentaire public respectueux qui formule votre demande", standard: "en moins de 300 mots, avec qui vous êtes, des faits, un témoignage et la demande" },
    { id: "O5", condition: "Avec l'IA pour le texte et un outil gratuit de mise en page", action: "créer une fiche d'information d'une page avec la demande dans un encadré bien visible", standard: "pour qu'un lecteur puisse redire la demande après une minute" },
    { id: "O6", condition: "Lors d'une réunion publique", action: "faire une intervention de deux minutes et prévoir l'action des soutiens dans le respect des règles du plaidoyer associatif", standard: "en deux minutes ou moins et sans aucun soutien à un candidat" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Construire votre argumentaire",
      lessons: [
        {
          objectives: ["O1"],
          title: "Définir l'enjeu et votre demande",
          minutes: 5,
          goal: "Transformer une préoccupation de la communauté en un énoncé de problème clair et une demande précise.",
          text: [
            "Les grandes préoccupations comme « notre quartier n'est pas sûr » sont difficiles à traiter pour les élus. Resserrez-les en un problème précis : « Des enfants traversent six voies sur la rue Principale à la hauteur de la 5e Avenue pour aller à l'école, et il n'y a pas de feu pour piétons. »",
            "Formulez ensuite une demande précise : ce que vous voulez exactement, à qui, et pour quand. « Nous demandons au service municipal des transports d'installer un feu pour piétons au croisement de la rue Principale et de la 5e Avenue avant la prochaine rentrée scolaire. » Une demande claire donne aux décideurs quelque chose à quoi dire oui.",
            "Demandez à l'IA de l'affiner : « Aide-moi à transformer cette préoccupation en un problème en une phrase et une demande précise et réaliste : [votre préoccupation]. » Vérifiez-la ensuite avec les personnes les plus concernées. Le plaidoyer marche le mieux quand la communauté façonne la demande."
          ],
          steps: ["Écrivez la préoccupation avec vos mots.", "Resserrez-la en un problème précis, un lieu et un groupe concerné.", "Écrivez une demande : quoi, qui décide, pour quand.", "Demandez à l'IA d'affiner la formulation.", "Vérifiez-la avec les personnes les plus concernées."],
          words: [["Plaidoyer", "prendre la parole pour changer une politique, une pratique ou une décision."], ["Demande", "l'action précise que vous voulez qu'un décideur fasse."], ["Énoncé du problème", "une ou deux phrases qui décrivent clairement l'enjeu."]],
          slides: [
            { title: "De la préoccupation au problème", bullets: ["« Pas sûr », c'est trop large", "Nommer le lieu, les personnes, le problème"] },
            { title: "Une demande précise", bullets: ["Quoi exactement", "À qui", "Pour quand"] },
            { title: "La communauté d'abord", bullets: ["L'IA affine la formulation", "Les personnes concernées façonnent la demande"] }
          ],
          tryIt: "Choisissez une vraie préoccupation locale. Écrivez un problème en une phrase et une demande précise, affinez-les avec l'IA, et partagez-les avec deux personnes concernées.",
          youCanNow: "transformer une préoccupation en un énoncé de problème clair et une demande précise.",
          quickCheck: [
            { objective: "O1", q: "Quelles sont les trois choses que contient une demande solide ?", options: ["Votre nom, votre âge et votre adresse", "Quoi, à qui et pour quand", "Un slogan, un logo et une couleur", "Une plainte, une menace et une date limite"], answer: 1, why: "Une demande solide nomme l'action, le décideur et la date limite." },
            { objective: "O1", q: "La préoccupation de votre groupe est « notre quartier n'est pas sûr ». Que faites-vous d'abord ?", options: ["La réduire à un problème précis sur lequel les élus peuvent agir", "L'envoyer à tous les élus de l'État", "La publier en ligne sans la changer", "Attendre que la situation empire"], answer: 0, why: "Des problèmes précis mènent à des actions précises que les élus peuvent prendre." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rechercher des faits et vérifier les sources",
          minutes: 6,
          goal: "Trouver des faits qui soutiennent votre argumentaire et vérifier chacun auprès d'une source officielle ou fiable.",
          text: [
            "Les faits font écouter les élus. Sources utiles : sites web de la ville et du comté, comptes rendus de séances et budgets, agences de l'État, le Census Bureau (bureau du recensement des États-Unis, data.census.gov) pour les données de population et de revenus, les données de la police ou des transports, la presse locale, et les recherches d'universités ou d'associations. Hors des États-Unis, cherchez l'institut statistique et les sites publics de votre pays.",
            "L'IA peut suggérer où chercher et quoi chercher : « Quelles données publiques montreraient des problèmes de sécurité des piétons à un croisement dans une ville américaine, et où les trouver ? » Mais l'IA peut inventer des statistiques et des études. N'utilisez jamais un chiffre donné par l'IA si vous ne l'avez pas trouvé vous-même dans la source d'origine.",
            "Rassemblez trois faits solides, chacun avec le nom de la source, le lien et la date. Ajoutez de vrais témoignages : un parent, un élève, un agent de passage piéton. Demandez toujours l'accord avant de partager l'histoire de quelqu'un, et retirez les détails privés qu'il ne veut pas rendre publics."
          ],
          steps: ["Demandez à l'IA où trouver des données sur votre enjeu.", "Allez vous-même sur ces sources.", "Notez trois faits avec source, lien et date.", "N'utilisez jamais un chiffre introuvable dans la source d'origine.", "Recueillez deux témoignages avec accord."],
          words: [["Source", "l'endroit d'où vient un fait."], ["Source primaire", "l'endroit d'origine où une donnée ou une information a été publiée."], ["Compte rendu de séance", "le relevé écrit officiel d'une réunion publique."]],
          slides: [
            { title: "Où se trouvent les faits", bullets: ["Sites de la ville, du comté et de l'État", "Données du recensement et rapports d'agences", "Presse locale et recherches"] },
            { title: "L'IA oriente, vous vérifiez", bullets: ["L'IA peut inventer des statistiques", "Trouver chaque chiffre dans la source d'origine", "Noter source, lien et date"] },
            { title: "Des faits et des témoignages", bullets: ["Le vécu de vraies personnes", "Toujours demander l'accord", "Retirer les détails privés"] }
          ],
          sources: [{ name: "U.S. Census Bureau (bureau du recensement) : data.census.gov", url: "https://data.census.gov/" }],
          tryIt: "Trouvez trois faits sur votre enjeu auprès de sources officielles ou fiables, avec lien et date pour chacun. Demandez à deux personnes si vous pouvez partager leur histoire.",
          youCanNow: "rechercher des faits vérifiés et recueillir des témoignages de la communauté avec accord.",
          quickCheck: [
            { objective: "O2", q: "Quelle est une source fiable pour un fait sur votre ville ?", options: ["Une publication prise au hasard sur les réseaux sociaux", "Une réponse de l'IA sans lien", "Le site officiel ou un rapport de la ville elle-même", "Une rumeur d'un voisin"], answer: 2, why: "Les sources officielles sont celles où l'on peut vérifier et citer les faits." },
            { objective: "O2", q: "Un voisin vous raconte un témoignage fort : il a été blessé au passage piéton. Que faites-vous avant de l'utiliser ?", options: ["L'utiliser avec son nom complet et son adresse", "Changer les détails et l'utiliser quand même", "Le publier d'abord en ligne", "Lui demander son accord et comment il veut être nommé"], answer: 3, why: "Les témoignages se partagent seulement avec l'accord de la personne." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver le décideur et le bon moment",
          minutes: 5,
          goal: "Identifier qui peut dire oui à votre demande et quand la décision sera prise.",
          text: [
            "Le plaidoyer échoue quand il s'adresse à la mauvaise personne. Trouvez qui a le pouvoir de dire oui : un membre du conseil municipal, un conseil de comté, un conseil scolaire, un élu de l'État, un chef de service ou un responsable d'entreprise.",
            "Demandez à l'IA : « Dans une ville américaine typique, qui décide de l'installation d'un nouveau feu pour piétons, et quelle est la procédure ? » Confirmez ensuite sur le site de votre ville, ou appelez le bureau concerné. Apprenez le calendrier : quand les budgets sont votés, quand le conseil se réunit, et quand les commentaires du public sont ouverts.",
            "Repérez vos alliés (voisins, écoles, églises, commerces, autres associations) et ceux qui risquent de s'opposer, et pourquoi. Les alliés vous rendent plus forts ; comprendre l'opposition aide à répondre aux inquiétudes."
          ],
          steps: ["Demandez à l'IA qui décide habituellement sur votre enjeu.", "Confirmez sur le site de votre collectivité ou par téléphone.", "Trouvez les dates de séance, le calendrier budgétaire et les périodes de commentaires publics.", "Listez vos alliés et l'opposition probable.", "Choisissez votre moment pour agir."],
          words: [["Décideur", "la personne ou l'instance qui a le pouvoir de dire oui à votre demande."], ["Commentaire public", "la possibilité pour le public de parler ou d'écrire aux élus avant une décision."], ["Allié", "une personne ou un groupe qui soutient votre cause."]],
          slides: [
            { title: "Qui peut dire oui ?", bullets: ["Conseil, élu, chef de service", "Confirmer sur les sites officiels"] },
            { title: "Connaître le calendrier", bullets: ["Dates des séances", "Calendrier budgétaire", "Périodes de commentaires publics"] },
            { title: "Cartographier le terrain", bullets: ["Alliés : voisins, écoles, églises, commerces", "Opposants et leurs raisons"] }
          ],
          tryIt: "Trouvez sur un site officiel le décideur pour votre enjeu et sa prochaine séance ou date limite de commentaires. Listez trois alliés et une inquiétude probable des opposants.",
          youCanNow: "trouver le bon décideur, le bon moment et les alliés pour une demande de plaidoyer.",
          quickCheck: [
            { objective: "O3", q: "Qui est le décideur dans le plaidoyer ?", options: ["La personne ou l'organe qui peut dire oui à votre demande", "Toute personne qui est d'accord avec vous", "Le journal", "La personne qui se plaint le plus fort"], answer: 0, why: "Le décideur a le pouvoir d'accorder votre demande." },
            { objective: "O3", q: "Vous voulez un nouvel éclairage dans le parc, mais vous ne savez pas qui décide. Que faites-vous ?", options: ["Écrire au Président", "Regarder le site de la ville ou appeler la mairie pour le savoir", "Deviner et l'envoyer au conseil scolaire", "Attendre que quelqu'un vous le dise"], answer: 1, why: "Confirmez le décideur sur une source officielle avant de le contacter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire votre argumentaire",
        questions: [
          { objective: "O1", q: "Quelle est la demande de plaidoyer la plus claire ?", options: ["« Améliorer les choses »", "« Régler la sécurité »", "« Nous demandons au service des transports d'installer un feu pour piétons au croisement de la rue Principale et de la 5e Avenue avant la prochaine rentrée »", "« Faites quelque chose maintenant »"], answer: 2, why: "Elle dit quoi, à qui et pour quand." },
          { objective: "O2", q: "L'IA donne une statistique sur les accidents à votre croisement. Que faites-vous ?", options: ["La trouver dans la source d'origine avant de l'utiliser", "L'utiliser tout de suite", "L'arrondir vers le haut", "La mettre en gras"], answer: 0, why: "L'IA peut inventer des statistiques." },
          { objective: "O2", q: "Avant de partager l'histoire d'un voisin dans votre campagne, vous devez :", options: ["Publier son adresse", "La modifier pour qu'elle paraisse pire", "Rien", "Obtenir son accord"], answer: 3, why: "Les histoires appartiennent à ceux qui les ont vécues." },
          { objective: "O3", q: "Pourquoi trouver le décideur ?", options: ["Pour publier son adresse personnelle", "Le plaidoyer échoue quand il s'adresse à la mauvaise personne", "Ça n'a pas d'importance", "Pour l'éviter"], answer: 1, why: "Seule la bonne personne peut dire oui." },
          { objective: "O3", q: "Qu'est-ce qu'une période de commentaires publics ?", options: ["Une émission de télé", "La possibilité pour le public de parler ou d'écrire avant une décision", "Une date limite fiscale", "Une réunion privée"], answer: 1, why: "C'est un moment officiel pour l'avis du public." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Prendre la parole efficacement",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rédiger une lettre ou un commentaire public avec l'IA",
          minutes: 5,
          goal: "Rédiger une lettre ou un commentaire public court et respectueux qui formule votre demande.",
          text: [
            "Une lettre ou un commentaire efficace est court (moins de 300 mots) et a quatre parties : qui vous êtes et votre lien avec l'enjeu, le problème avec un ou deux faits, un court témoignage réel, et votre demande précise avec un remerciement.",
            "Demandez à l'IA : « Écris un commentaire public respectueux de moins de 300 mots au conseil municipal. Je suis parent d'élève à l'école Lincoln. Problème : [problème]. Faits : [vos faits vérifiés]. Témoignage : [partagé avec accord]. Demande : [votre demande]. » Corrigez-le ensuite pour qu'il vous ressemble.",
            "Les lettres personnelles valent mieux que les lettres types : les élus remarquent quand des centaines de messages IA identiques arrivent. Encouragez vos soutiens à ajouter leur propre phrase. Restez respectueux même si vous êtes en colère ; les insultes sont ignorées."
          ],
          steps: ["Qui vous êtes et votre lien avec l'enjeu.", "Le problème avec un ou deux faits vérifiés.", "Un court témoignage réel, partagé avec accord.", "Votre demande précise et un remerciement.", "Corrigez-le pour qu'il vous ressemble ; restez sous 300 mots."],
          words: [["Lettre type", "la même lettre envoyée par beaucoup de personnes avec peu ou pas de changement."], ["Administré (électeur)", "une personne qui vit dans la circonscription d'un élu et qu'il représente."]],
          slides: [
            { title: "Quatre parties", bullets: ["Qui vous êtes", "Problème et faits", "Un vrai témoignage", "Votre demande et vos remerciements"] },
            { title: "L'IA rédige, vous personnalisez", bullets: ["Ne lui donner que des faits vérifiés", "Moins de 300 mots", "Faire qu'il vous ressemble"] },
            { title: "Se faire entendre", bullets: ["Une lettre personnelle vaut mieux qu'une lettre identique", "Les soutiens ajoutent leur phrase", "Rester respectueux"] }
          ],
          tryIt: "Rédigez avec l'aide de l'IA une lettre ou un commentaire public de moins de 300 mots pour votre enjeu, avec vos faits vérifiés et un témoignage partagé avec accord. Lisez-le à voix haute et corrigez-le.",
          youCanNow: "rédiger une lettre ou un commentaire public court et respectueux qui formule une demande claire.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un administré (électeur) ?", options: ["Un salarié d'une association", "Un lobbyiste payé", "Un journaliste", "Une personne qui vit dans la circonscription d'un élu"], answer: 3, why: "Les élus font attention aux personnes qu'ils représentent." },
            { objective: "O4", q: "L'IA rédige une lettre qui semble en colère et accuse le conseil. Que faites-vous ?", options: ["L'envoyer pour montrer votre colère", "La réécrire pour qu'elle soit respectueuse, avec des faits, un témoignage et la demande", "Ajouter des mots plus durs", "Envoyer la même lettre sous 100 faux noms"], answer: 1, why: "Les lettres respectueuses et personnelles avec une demande claire ont plus de chances d'être écoutées." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faire une fiche d'information d'une page",
          minutes: 5,
          goal: "Créer une fiche d'information d'une page que les élus et les voisins occupés peuvent lire en une minute.",
          text: [
            "Une fiche d'information est un document d'une page que vous laissez aux élus, partagez en ligne et donnez à vos soutiens. Les gens occupés lisent le haut et parcourent le reste.",
            "Structure : un titre en gras qui nomme le problème, trois faits clés avec leurs sources, une courte citation ou un témoignage, la demande dans un encadré, et qui vous êtes avec vos coordonnées. Utilisez un langage simple, un texte assez gros et, si cela aide, un graphique ou une photo simple.",
            "Demandez à l'IA de rédiger le texte à partir de vos faits, puis faites la mise en page dans Canva ou Google Docs. Revérifiez chaque chiffre et chaque source. Traduisez-la si votre communauté parle d'autres langues ; l'IA peut proposer une traduction, mais faites-la vérifier par une personne qui parle couramment la langue."
          ],
          steps: ["Écrivez un titre qui nomme le problème.", "Ajoutez trois faits avec leurs sources.", "Ajoutez une courte citation ou un témoignage.", "Mettez la demande dans un encadré.", "Faites tenir sur une page ; vérifiez les chiffres ; faites vérifier les traductions par des personnes qui parlent couramment."],
          words: [["Fiche d'information", "un document d'une page qui résume un enjeu, des faits et une demande."], ["Langage simple", "une écriture claire et simple que la plupart des gens comprennent."]],
          slides: [
            { title: "Une page, une minute", bullets: ["Les gens occupés lisent le haut", "Puis ils parcourent"] },
            { title: "Structure", bullets: ["Titre qui nomme le problème", "Trois faits avec sources", "Une citation, la demande encadrée, le contact"] },
            { title: "La peaufiner", bullets: ["Canva ou Google Docs", "Revérifier chaque chiffre", "Traductions vérifiées par des locuteurs courants"] }
          ],
          tryIt: "Faites une fiche d'information d'une page pour votre enjeu, avec le texte rédigé par l'IA et la mise en page dans Canva ou Google Docs. Demandez à quelqu'un de la lire en une minute et de vous dire la demande.",
          youCanNow: "créer une fiche d'information claire d'une page pour un enjeu de plaidoyer.",
          quickCheck: [
            { objective: "O5", q: "À qui s'adresse surtout une fiche d'information ?", options: ["Aux élus et voisins occupés qui ont besoin des points clés rapidement", "Seulement aux personnes qui l'ont écrite", "Aux avocats au tribunal", "Aux élèves qui rédigent des devoirs"], answer: 0, why: "Une fiche d'information donne aux lecteurs pressés le problème, les faits et la demande en une minute." },
            { objective: "O5", q: "Votre brouillon de fiche d'information fait deux pages pleines en petits caractères. Que faites-vous ?", options: ["Réduire encore la taille du texte", "Ajouter une troisième page pour plus de faits", "La réduire à une page avec la demande dans un encadré bien visible", "Retirer la demande pour gagner de la place"], answer: 2, why: "Une page avec une demande claire est plus facile à lire et à suivre." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Intervention publique, soutiens et règles",
          minutes: 6,
          goal: "Faire une intervention de deux minutes, mobiliser des soutiens et respecter les règles du plaidoyer associatif.",
          text: [
            "Beaucoup de conseils donnent à chaque intervenant deux ou trois minutes. Préparez une version de deux minutes de votre lettre : environ 250 mots à l'oral. Demandez à l'IA de la raccourcir, puis répétez à voix haute avec un minuteur. Commencez par votre nom et votre lien avec l'enjeu, terminez par votre demande, et apportez des copies de votre fiche d'information.",
            "Venez avec des soutiens. Une salle pleine de voisins habillés de la même couleur envoie un message. Utilisez l'IA pour rédiger un court message d'inscription et des rappels, et aidez vos soutiens à écrire leurs propres commentaires.",
            "Connaissez les règles pour les associations. L'IRS (le fisc américain) dit qu'une association 501(c)(3) (organisation à but non lucratif exonérée d'impôt) peut faire un peu de lobbying, mais pas comme une part importante de ses activités, et qu'informer le public sur une politique n'est pas du lobbying. Il lui est absolument interdit de soutenir ou de combattre des candidats à une élection, mais l'éducation civique et l'inscription des électeurs, si elles sont non partisanes, sont permises. Pour les détails, demandez à un avocat spécialisé ou à l'association des organismes à but non lucratif de votre État ; hors des États-Unis, les règles dépendent de votre pays."
          ],
          steps: ["Raccourcissez votre lettre à environ 250 mots à l'oral.", "Répétez à voix haute avec un minuteur de deux minutes.", "Apportez des copies de la fiche et venez avec des soutiens.", "Utilisez l'IA pour rédiger les messages d'inscription et de rappel.", "Vérifiez les règles associatives sur le lobbying et les candidats."],
          words: [["Intervention (témoignage)", "prendre la parole devant des élus lors d'une séance publique sur un enjeu."], ["Lobbying", "chercher à influencer la loi, par exemple en contactant des élus au sujet d'un projet de loi."], ["Non partisan", "qui ne soutient aucun parti ni aucun candidat."]],
          slides: [
            { title: "Une intervention de deux minutes", bullets: ["Environ 250 mots à l'oral", "Nom et lien d'abord, demande à la fin", "Répéter avec un minuteur"] },
            { title: "Venir avec des soutiens", bullets: ["Se présenter ensemble", "L'IA rédige inscriptions et rappels", "Chacun ajoute ses propres mots"] },
            { title: "Règles des 501(c)(3) (IRS)", bullets: ["Un peu de lobbying permis, pas une part importante", "Ni soutien ni opposition à des candidats", "Éducation civique non partisane permise"] }
          ],
          sources: [{ name: "IRS : le lobbying", url: "https://www.irs.gov/charities-non-profits/lobbying" }, { name: "IRS : interdiction de l'intervention dans les campagnes politiques pour les organisations 501(c)(3)", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" }],
          tryIt: "Tâche finale : raccourcissez votre lettre en une intervention de deux minutes et répétez-la à voix haute avec un minuteur. Rassemblez-la avec votre problème et votre demande, vos faits, vos témoignages, le décideur, votre lettre et votre fiche d'information pour compléter votre kit de plaidoyer.",
          youCanNow: "planifier et mener avec l'aide de l'IA une petite campagne de plaidoyer fondée sur des faits, dans le respect des règles.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire « non partisan » ?", options: ["Soutenir un parti", "Payé par le gouvernement", "Ne soutenir aucun candidat ni aucun parti", "Être contre tous les élus"], answer: 2, why: "Non partisan veut dire ne pas prendre parti pour des candidats ou des partis." },
            { objective: "O6", q: "Votre intervention dure trois minutes et demie, mais vous avez droit à deux. Que faites-vous ?", options: ["Parler plus vite", "Continuer quand le temps est fini", "Supprimer la demande", "La réduire à votre nom, votre lien avec l'enjeu, un fait, un témoignage et la demande, et vous entraîner avec un minuteur"], answer: 3, why: "Garder l'essentiel et s'entraîner permet de respecter le temps de parole." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Prendre la parole efficacement",
        questions: [
          { objective: "O4", q: "Pourquoi des lettres personnelles valent-elles mieux que des centaines de lettres identiques ?", options: ["Les lettres identiques sont illégales", "Les lettres personnelles sont plus longues", "Elles ne valent pas mieux", "Les élus remarquent et apprécient les voix individuelles"], answer: 3, why: "Les mots et les histoires personnels pèsent plus." },
          { objective: "O5", q: "Une fiche d'information doit être :", options: ["Une page lisible en environ une minute", "Vingt pages", "Seulement des photos", "Écrite en jargon"], answer: 0, why: "Les lecteurs occupés ont besoin de court et clair." },
          { objective: "O5", q: "L'IA traduit votre fiche en espagnol. Que faites-vous ensuite ?", options: ["L'imprimer sans vérifier", "Supprimer la version originale", "La faire vérifier par une personne qui parle couramment", "Renoncer à la traduction"], answer: 2, why: "Les traductions de l'IA peuvent contenir des erreurs." },
          { objective: "O6", q: "Environ combien de mots dit-on à l'oral en deux minutes ?", options: ["Environ 2 500", "Environ 20", "Environ 1 000", "Environ 250"], answer: 3, why: "La plupart des gens disent environ 120 à 130 mots par minute." },
          { objective: "O6", q: "Selon l'IRS, une association 501(c)(3) peut-elle soutenir publiquement un candidat à une élection ?", options: ["Oui, à tout moment", "Seulement sur les réseaux sociaux", "Non, c'est absolument interdit", "Seulement par de petits dons"], answer: 2, why: "L'IRS dit que l'intervention dans une campagne est absolument interdite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA au service du plaidoyer communautaire",
    questions: [
      { objective: "O1", q: "Le plaidoyer, c'est :", options: ["Seulement voter", "Prendre la parole pour changer une politique, une pratique ou une décision", "Se présenter à une élection", "Poursuivre quelqu'un en justice"], answer: 1, why: "Le plaidoyer vise le changement par la prise de parole." },
      { objective: "O1", q: "Pourquoi resserrer une grande préoccupation en un problème précis ?", options: ["Les élus peuvent agir sur des problèmes précis", "Ça paraît moins grave", "L'IA l'exige", "Pour éviter d'agir"], answer: 0, why: "Des problèmes précis mènent à des solutions précises." },
      { objective: "O1", q: "Une demande solide contient :", options: ["Seulement des sentiments", "Une menace", "Quoi, à qui et pour quand", "Aucun détail"], answer: 2, why: "Il est plus facile de dire oui à une demande claire." },
      { objective: "O1", q: "Qui doit façonner la demande ?", options: ["Les personnes les plus concernées", "Seulement l'IA", "Seulement des personnes extérieures", "Personne"], answer: 0, why: "Un plaidoyer mené par la communauté est plus fort." },
      { objective: "O2", q: "Où trouver les données de population et de revenus aux États-Unis ?", options: ["Dans un mème au hasard", "Dans une supposition de l'IA", "Dans un commentaire sur un réseau social", "Sur data.census.gov"], answer: 3, why: "Le Census Bureau publie les données officielles." },
      { objective: "O2", q: "Une source primaire est :", options: ["N'importe quel blog", "L'endroit d'origine où l'information a été publiée", "Un résumé fait par l'IA", "Une rumeur"], answer: 1, why: "Les sources primaires sont les plus fiables." },
      { objective: "O2", q: "Pour chaque fait recueilli, notez :", options: ["Seulement le chiffre", "La source, le lien et la date", "Rien", "Votre supposition"], answer: 1, why: "Les sources permettent aux autres de vérifier vos faits." },
      { objective: "O3", q: "Un compte rendu de séance est :", options: ["La durée d'une réunion", "Un type d'horloge", "Un journal intime", "Le relevé écrit officiel d'une réunion publique"], answer: 3, why: "Le compte rendu enregistre ce qui a été décidé." },
      { objective: "O3", q: "L'IA dit que c'est le conseil scolaire qui décide des passages piétons. Vous devez :", options: ["Confirmer sur le site de votre ville ou par téléphone", "La croire", "Écrire à tous les bureaux sans vérifier", "Abandonner"], answer: 0, why: "Les procédures locales varient ; confirmez officiellement." },
      { objective: "O3", q: "Pourquoi connaître le calendrier budgétaire ?", options: ["Les budgets sont secrets", "Ce n'est pas utile", "Beaucoup de décisions se prennent quand les budgets sont votés", "Pour sauter des séances"], answer: 2, why: "Faire coïncider sa demande avec les décisions budgétaires compte." },
      { objective: "O3", q: "Un allié est :", options: ["Un opposant", "Seulement un décideur", "Un site web", "Une personne ou un groupe qui soutient votre cause"], answer: 3, why: "Les alliés apportent de la force et des voix." },
      { objective: "O3", q: "Pourquoi comprendre l'opposition probable ?", options: ["Pour l'insulter", "Pour l'ignorer", "Pour pouvoir répondre à ses inquiétudes", "Pour la copier"], answer: 2, why: "Répondre aux inquiétudes élargit le soutien." },
      { objective: "O4", q: "Un administré (électeur) est :", options: ["Un type de loi", "Une personne qui vit dans la circonscription d'un élu", "Un avocat", "Un bâtiment municipal"], answer: 1, why: "Les élus sont attentifs à leurs administrés." },
      { objective: "O4", q: "Un commentaire public efficace :", options: ["Fait moins de 300 mots avec qui vous êtes, des faits, un témoignage et une demande", "Est le plus long possible", "Est en colère et insultant", "Ne contient que des statistiques"], answer: 0, why: "Court, personnel et précis, c'est ce qui marche le mieux." },
      { objective: "O4", q: "Vous êtes en colère contre les élus. Dans votre lettre, vous devez :", options: ["Utiliser des insultes", "Faire des menaces", "Rester respectueux", "Tout écrire en majuscules"], answer: 2, why: "Les messages respectueux sont lus et pris en compte." },
      { objective: "O5", q: "Où placer la demande sur une fiche d'information ?", options: ["Dans un encadré bien visible", "Cachée en bas en petits caractères", "Nulle part", "Seulement au dos"], answer: 0, why: "La demande doit ressortir." },
      { objective: "O6", q: "En séance publique, vous devez commencer par :", options: ["Un long historique", "Seulement votre demande", "Une blague", "Votre nom et votre lien avec l'enjeu"], answer: 3, why: "Cela dit aux élus pourquoi votre voix compte sur cet enjeu." },
      { objective: "O6", q: "Selon l'IRS, informer le public sur une politique :", options: ["Est toujours illégal", "N'est pas considéré comme du lobbying", "Compte comme faire campagne", "Est interdit aux associations"], answer: 1, why: "L'IRS dit que les activités éducatives ne sont pas du lobbying." },
      { objective: "O6", q: "Une association 501(c)(3) peut faire un peu de lobbying, mais :", options: ["En quantité illimitée", "Pas comme une part importante de ses activités", "Seulement pour des candidats", "Jamais du tout"], answer: 1, why: "Trop de lobbying menace l'exonération d'impôt." },
      { objective: "O6", q: "Selon l'IRS, les campagnes d'inscription des électeurs non partisanes menées par une 501(c)(3) sont :", options: ["Toujours interdites", "Permises seulement pour un parti", "Obligatoires", "En général permises si elles sont vraiment non partisanes"], answer: 3, why: "L'inscription non partisane des électeurs n'est pas interdite." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      2,
      5,
      6,
      8,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Problème et demande",
        objective: "O1",
        notYet: "Le problème est trop large, ou il manque à la demande le quoi, le à qui ou le pour quand.",
        meets: "Un problème en une phrase et une demande précise avec quoi, à qui et pour quand.",
        exceeds: "Montre comment les personnes concernées ont aidé à formuler la demande."
      },
      {
        name: "Faits et témoignages",
        objective: "O2",
        notYet: "Un fait n'a pas de source, ou un témoignage est utilisé sans accord.",
        meets: "Trois faits avec source, lien et date, et deux témoignages partagés avec accord.",
        exceeds: "Les faits viennent des sources d'origine et les témoignages utilisent les noms choisis par les personnes."
      },
      {
        name: "Décideur",
        objective: "O3",
        notYet: "Décideur erroné ou non confirmé.",
        meets: "Le décideur et la prochaine date limite confirmés sur un site officiel.",
        exceeds: "Liste aussi les alliés et une réponse à la principale inquiétude des opposants."
      },
      {
        name: "Lettre ou commentaire et fiche d'information",
        objective: "O4",
        notYet: "Plus de 300 mots, irrespectueux, ou sans demande claire.",
        meets: "Moins de 300 mots, respectueux, avec qui vous êtes, des faits, un témoignage et la demande ; la fiche tient sur une page.",
        exceeds: "Un lecteur peut redire la demande après une minute avec la fiche d'information."
      },
      {
        name: "Intervention et règles",
        objective: "O6",
        notYet: "Plus de deux minutes, pas répétée, ou mentionne un soutien à un candidat.",
        meets: "Répétée à voix haute en deux minutes ou moins, commence par le nom et le lien avec l'enjeu, et porte seulement sur l'enjeu.",
        exceeds: "Comprend un plan pour que des soutiens viennent ou envoient un commentaire."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui envoient une lettre ou un commentaire public, ou qui prennent la parole lors d'une réunion publique, dans les 60 jours (questionnaire de suivi)",
      "Campagnes où le décideur répond, inscrit l'enjeu à l'ordre du jour ou accorde la demande",
      "Nombre d'habitants qui rejoignent une campagne après le cours",
      "Apprenants qui commencent un autre cours Koach Learn sur les associations dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini",
      "Canva ou Google Docs pour la fiche d'information",
      "Un minuteur pour s'entraîner à l'intervention",
      "Environ 60 minutes pour les leçons et les contrôles, plus le temps de recherche et d'entraînement"
    ],
    facilitatorNotes: [
      "Faites travailler les groupes sur un même enjeu local pour que les apprenants se partagent la recherche et répètent ensemble leurs interventions.",
      "Rappelez au personnel des associations que les organisations 501(c)(3) ne peuvent pas soutenir de candidats ; orientez-les vers les consignes de l'IRS pour leur propre situation.",
      "Les témoignages se partagent seulement avec accord ; gardez les détails privés hors des demandes à l'IA.",
      "Faites répéter l'intervention à voix haute, avec un minuteur, devant le groupe.",
      "Notez le kit de plaidoyer avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
