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
  chapters: [
    {
      name: "Chapitre 1 : Construire votre argumentaire",
      lessons: [
        {
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
          youCanNow: "transformer une préoccupation en un énoncé de problème clair et une demande précise."
        },
        {
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
          youCanNow: "rechercher des faits vérifiés et recueillir des témoignages de la communauté avec accord."
        },
        {
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
          youCanNow: "trouver le bon décideur, le bon moment et les alliés pour une demande de plaidoyer."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire votre argumentaire",
        questions: [
          { q: "Quelle est la demande de plaidoyer la plus claire ?", options: ["« Améliorer les choses »", "« Régler la sécurité »", "« Nous demandons au service des transports d'installer un feu pour piétons au croisement de la rue Principale et de la 5e Avenue avant la prochaine rentrée »", "« Faites quelque chose maintenant »"], answer: 2, why: "Elle dit quoi, à qui et pour quand." },
          { q: "L'IA donne une statistique sur les accidents à votre croisement. Que faites-vous ?", options: ["La trouver dans la source d'origine avant de l'utiliser", "L'utiliser tout de suite", "L'arrondir vers le haut", "La mettre en gras"], answer: 0, why: "L'IA peut inventer des statistiques." },
          { q: "Avant de partager l'histoire d'un voisin dans votre campagne, vous devez :", options: ["Publier son adresse", "La modifier pour qu'elle paraisse pire", "Rien", "Obtenir son accord"], answer: 3, why: "Les histoires appartiennent à ceux qui les ont vécues." },
          { q: "Pourquoi trouver le décideur ?", options: ["Pour publier son adresse personnelle", "Le plaidoyer échoue quand il s'adresse à la mauvaise personne", "Ça n'a pas d'importance", "Pour l'éviter"], answer: 1, why: "Seule la bonne personne peut dire oui." },
          { q: "Qu'est-ce qu'une période de commentaires publics ?", options: ["Une émission de télé", "La possibilité pour le public de parler ou d'écrire avant une décision", "Une date limite fiscale", "Une réunion privée"], answer: 1, why: "C'est un moment officiel pour l'avis du public." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Prendre la parole efficacement",
      lessons: [
        {
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
          youCanNow: "rédiger une lettre ou un commentaire public court et respectueux qui formule une demande claire."
        },
        {
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
          youCanNow: "créer une fiche d'information claire d'une page pour un enjeu de plaidoyer."
        },
        {
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
          youCanNow: "planifier et mener avec l'aide de l'IA une petite campagne de plaidoyer fondée sur des faits, dans le respect des règles."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Prendre la parole efficacement",
        questions: [
          { q: "Pourquoi des lettres personnelles valent-elles mieux que des centaines de lettres identiques ?", options: ["Les lettres identiques sont illégales", "Les lettres personnelles sont plus longues", "Elles ne valent pas mieux", "Les élus remarquent et apprécient les voix individuelles"], answer: 3, why: "Les mots et les histoires personnels pèsent plus." },
          { q: "Une fiche d'information doit être :", options: ["Une page lisible en environ une minute", "Vingt pages", "Seulement des photos", "Écrite en jargon"], answer: 0, why: "Les lecteurs occupés ont besoin de court et clair." },
          { q: "L'IA traduit votre fiche en espagnol. Que faites-vous ensuite ?", options: ["L'imprimer sans vérifier", "Supprimer la version originale", "La faire vérifier par une personne qui parle couramment", "Renoncer à la traduction"], answer: 2, why: "Les traductions de l'IA peuvent contenir des erreurs." },
          { q: "Environ combien de mots dit-on à l'oral en deux minutes ?", options: ["Environ 2 500", "Environ 20", "Environ 1 000", "Environ 250"], answer: 3, why: "La plupart des gens disent environ 120 à 130 mots par minute." },
          { q: "Selon l'IRS, une association 501(c)(3) peut-elle soutenir publiquement un candidat à une élection ?", options: ["Oui, à tout moment", "Seulement sur les réseaux sociaux", "Non, c'est absolument interdit", "Seulement par de petits dons"], answer: 2, why: "L'IRS dit que l'intervention dans une campagne est absolument interdite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA au service du plaidoyer communautaire",
    questions: [
      { q: "Le plaidoyer, c'est :", options: ["Seulement voter", "Prendre la parole pour changer une politique, une pratique ou une décision", "Se présenter à une élection", "Poursuivre quelqu'un en justice"], answer: 1, why: "Le plaidoyer vise le changement par la prise de parole." },
      { q: "Pourquoi resserrer une grande préoccupation en un problème précis ?", options: ["Les élus peuvent agir sur des problèmes précis", "Ça paraît moins grave", "L'IA l'exige", "Pour éviter d'agir"], answer: 0, why: "Des problèmes précis mènent à des solutions précises." },
      { q: "Une demande solide contient :", options: ["Seulement des sentiments", "Une menace", "Quoi, à qui et pour quand", "Aucun détail"], answer: 2, why: "Il est plus facile de dire oui à une demande claire." },
      { q: "Qui doit façonner la demande ?", options: ["Les personnes les plus concernées", "Seulement l'IA", "Seulement des personnes extérieures", "Personne"], answer: 0, why: "Un plaidoyer mené par la communauté est plus fort." },
      { q: "Où trouver les données de population et de revenus aux États-Unis ?", options: ["Dans un mème au hasard", "Dans une supposition de l'IA", "Dans un commentaire sur un réseau social", "Sur data.census.gov"], answer: 3, why: "Le Census Bureau publie les données officielles." },
      { q: "Une source primaire est :", options: ["N'importe quel blog", "L'endroit d'origine où l'information a été publiée", "Un résumé fait par l'IA", "Une rumeur"], answer: 1, why: "Les sources primaires sont les plus fiables." },
      { q: "Pour chaque fait recueilli, notez :", options: ["Seulement le chiffre", "La source, le lien et la date", "Rien", "Votre supposition"], answer: 1, why: "Les sources permettent aux autres de vérifier vos faits." },
      { q: "Un compte rendu de séance est :", options: ["La durée d'une réunion", "Un type d'horloge", "Un journal intime", "Le relevé écrit officiel d'une réunion publique"], answer: 3, why: "Le compte rendu enregistre ce qui a été décidé." },
      { q: "L'IA dit que c'est le conseil scolaire qui décide des passages piétons. Vous devez :", options: ["Confirmer sur le site de votre ville ou par téléphone", "La croire", "Écrire à tous les bureaux sans vérifier", "Abandonner"], answer: 0, why: "Les procédures locales varient ; confirmez officiellement." },
      { q: "Pourquoi connaître le calendrier budgétaire ?", options: ["Les budgets sont secrets", "Ce n'est pas utile", "Beaucoup de décisions se prennent quand les budgets sont votés", "Pour sauter des séances"], answer: 2, why: "Faire coïncider sa demande avec les décisions budgétaires compte." },
      { q: "Un allié est :", options: ["Un opposant", "Seulement un décideur", "Un site web", "Une personne ou un groupe qui soutient votre cause"], answer: 3, why: "Les alliés apportent de la force et des voix." },
      { q: "Pourquoi comprendre l'opposition probable ?", options: ["Pour l'insulter", "Pour l'ignorer", "Pour pouvoir répondre à ses inquiétudes", "Pour la copier"], answer: 2, why: "Répondre aux inquiétudes élargit le soutien." },
      { q: "Un administré (électeur) est :", options: ["Un type de loi", "Une personne qui vit dans la circonscription d'un élu", "Un avocat", "Un bâtiment municipal"], answer: 1, why: "Les élus sont attentifs à leurs administrés." },
      { q: "Un commentaire public efficace :", options: ["Fait moins de 300 mots avec qui vous êtes, des faits, un témoignage et une demande", "Est le plus long possible", "Est en colère et insultant", "Ne contient que des statistiques"], answer: 0, why: "Court, personnel et précis, c'est ce qui marche le mieux." },
      { q: "Vous êtes en colère contre les élus. Dans votre lettre, vous devez :", options: ["Utiliser des insultes", "Faire des menaces", "Rester respectueux", "Tout écrire en majuscules"], answer: 2, why: "Les messages respectueux sont lus et pris en compte." },
      { q: "Où placer la demande sur une fiche d'information ?", options: ["Dans un encadré bien visible", "Cachée en bas en petits caractères", "Nulle part", "Seulement au dos"], answer: 0, why: "La demande doit ressortir." },
      { q: "En séance publique, vous devez commencer par :", options: ["Un long historique", "Seulement votre demande", "Une blague", "Votre nom et votre lien avec l'enjeu"], answer: 3, why: "Cela dit aux élus pourquoi votre voix compte sur cet enjeu." },
      { q: "Selon l'IRS, informer le public sur une politique :", options: ["Est toujours illégal", "N'est pas considéré comme du lobbying", "Compte comme faire campagne", "Est interdit aux associations"], answer: 1, why: "L'IRS dit que les activités éducatives ne sont pas du lobbying." },
      { q: "Une association 501(c)(3) peut faire un peu de lobbying, mais :", options: ["En quantité illimitée", "Pas comme une part importante de ses activités", "Seulement pour des candidats", "Jamais du tout"], answer: 1, why: "Trop de lobbying menace l'exonération d'impôt." },
      { q: "Selon l'IRS, les campagnes d'inscription des électeurs non partisanes menées par une 501(c)(3) sont :", options: ["Toujours interdites", "Permises seulement pour un parti", "Obligatoires", "En général permises si elles sont vraiment non partisanes"], answer: 3, why: "L'inscription non partisane des électeurs n'est pas interdite." }
    ]
  }
};
