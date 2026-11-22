"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-nonprofit-leadership.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-nonprofit-leadership-fr",
  lang: "fr",
  translationOf: "underserved-ai-nonprofit-leadership",
  category: "Undeserved Community",
  name: "L'IA pour diriger une association",
  skills: "Écrire une mission et un objectif clairs, Planifier un programme avec l'IA, Organiser les bénévoles en sécurité, Trouver et résumer des subventions, Informer les soutiens, Fixer des règles simples d'usage de l'IA pour votre groupe",
  outcome: "utiliser un assistant d'IA gratuit pour écrire un plan de programme d'une page pour votre groupe communautaire (objectif, calendrier, rôles des bénévoles et court résumé pour une demande de subvention) et fixer des règles simples pour que votre groupe utilise l'IA en sécurité.",
  about: [
    "Ce cours s'adresse aux personnes qui dirigent ou veulent diriger une action communautaire : une banque alimentaire, une association de locataires, un ministère d'église, un programme pour les jeunes, une association de quartier ou une petite organisation à but non lucratif. Souvent, vous le faites avec peu d'argent, peu de personnel et beaucoup de cœur.",
    "Vous utiliserez un assistant d'IA gratuit pour préciser votre mission, planifier un programme, organiser les bénévoles, trouver des subventions et tenir vos soutiens informés, tout en protégeant les personnes que vous servez. L'IA fait gagner du temps sur l'écriture et la planification ; vous apportez le jugement, les relations et la connaissance de votre communauté.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » qui construit votre vrai plan. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Pour les questions juridiques, fiscales ou de statut associatif, consultez des sources officielles comme irs.gov et le procureur général ou le secrétaire d'État de votre État aux États-Unis, ou l'administration compétente de votre pays."
  ],
  finalTask: "Écrivez un plan de programme d'une page pour un projet communautaire réel ou d'entraînement avec l'aide d'un assistant d'IA gratuit : une mission en une phrase, un objectif mesurable, un calendrier simple, trois rôles de bénévoles (avec des mesures de sécurité s'il y a des mineurs), un résumé de subvention en cinq phrases, et cinq règles simples sur la façon dont votre groupe utilisera l'IA. Retirez toute information privée avant de partager.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui dirigent ou veulent diriger une action communautaire dans des quartiers mal desservis : responsables de banques alimentaires, d'associations de locataires, de ministères d'église, de programmes jeunesse et d'associations de quartier, et salariés ou administrateurs de petites associations.",
    startingPoint: "Ils font tourner des programmes avec peu d'argent et peu de personnel, et écrivent à la main affiches, e-mails et rapports. La plupart ont peu ou pas utilisé d'assistant d'IA, et peu ont une mission écrite, un objectif mesurable, des rôles de bénévoles ou des règles sur l'IA.",
    gap: "Les petits groupes perdent des heures en paperasse et ratent des subventions faute de temps et de plans clairs. L'IA peut rédiger une bonne partie de ce travail, mais les responsables doivent protéger les personnes qu'ils servent, vérifier chaque fait et garder les décisions entre des mains humaines.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau début de collège)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque ou de bureau",
      "Coût : seulement des outils gratuits ou offerts",
      "Vie privée : aucun nom, adresse, numéro de téléphone, détail de santé ou de situation migratoire des personnes servies dans l'IA",
      "La sécurité des mineurs et des adultes vulnérables suit la politique de l'organisation et les règles de l'État"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et autonomie numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des tâches que votre groupe fait chaque mois", action: "repérer celles que l'IA peut aider à rédiger et celles qui demandent des personnes", standard: "en nommant au moins trois tâches pour l'IA et le travail humain pour lequel elle libère du temps" },
    { id: "O2", condition: "À partir de ce que fait votre groupe", action: "écrire une mission en une phrase et un objectif mesurable avec l'aide de l'IA", standard: "retouchés avec votre équipe pour dire qui, quoi et pourquoi, avec un objectif que l'on peut compter à une date" },
    { id: "O3", condition: "À partir de l'objectif d'un programme ou d'un événement", action: "créer un calendrier et une liste de tâches avec l'IA", standard: "en ajoutant ce que l'IA a oublié et en mettant un nom et une date à chaque tâche" },
    { id: "O4", condition: "À partir des postes de bénévoles de votre plan", action: "écrire de courtes descriptions des rôles de bénévoles et les mesures de sécurité nécessaires", standard: "en suivant la politique de votre organisation quand il y a des mineurs ou des adultes vulnérables, et sans vrai nom dans l'IA" },
    { id: "O5", condition: "À partir d'un projet qui a besoin d'argent", action: "trouver une subvention possible et rédiger avec l'IA un résumé de demande en cinq phrases", standard: "avec chaque fait conforme à vos registres et les règles du financeur respectées" },
    { id: "O6", condition: "Quand vous partagez vos résultats et utilisez l'IA en groupe", action: "écrire un message d'information aux soutiens et cinq règles simples d'usage de l'IA pour votre groupe", standard: "en utilisant des histoires seulement avec une autorisation écrite et en gardant les décisions sur les personnes entre des mains humaines" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Diriger et planifier avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que l'IA peut faire pour un groupe communautaire",
          minutes: 4,
          goal: "Lister trois tâches qui prennent du temps dans votre groupe et où l'IA pourrait aider.",
          text: [
            "Les responsables communautaires passent des heures à écrire des affiches, des e-mails, des comptes rendus de réunion, des listes d'inscription et des rapports. Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini peut les rédiger en quelques minutes.",
            "L'IA est douée pour les premiers brouillons, les résumés, les listes de contrôle, les plannings, la réécriture d'une affiche en mots simples, et la recherche d'idées. Elle n'est pas douée pour connaître vos voisins, juger ce dont votre communauté a vraiment besoin ou protéger des histoires privées.",
            "Un bon responsable utilise l'IA pour libérer du temps pour le travail humain : écouter, créer la confiance et être présent."
          ],
          words: [["Organisation à but non lucratif", "une organisation qui sert une mission au lieu de faire des bénéfices pour des propriétaires."], ["Brouillon", "une première version que vous allez améliorer."]],
          slides: [
            { title: "Où les responsables passent leur temps", bullets: ["Affiches, e-mails et comptes rendus", "Listes d'inscription et rapports"] },
            { title: "L'IA est douée pour", bullets: ["Les premiers brouillons et les résumés", "Les listes de contrôle et les plannings", "Les réécritures simples et les idées"] },
            { title: "L'IA n'est pas douée pour", bullets: ["Connaître vos voisins", "Juger les vrais besoins de la communauté", "Protéger les histoires privées"] }
          ],
          tryIt: "Notez les trois tâches qui prennent le plus de temps à votre groupe chaque mois. À côté de chacune, écrivez comment l'IA pourrait aider pour un premier brouillon.",
          youCanNow: "repérer les tâches de votre groupe que l'IA peut accélérer, et celles qui ont besoin de personnes.",
          quickCheck: [
            { objective: "O1", q: "Pour quoi l'IA est-elle bonne dans un groupe communautaire ?", options: ["Écrire un premier brouillon de compte rendu de réunion", "Connaître vos voisins", "Juger ce dont votre communauté a besoin", "Protéger les histoires privées"], answer: 0, why: "L'IA est bonne pour les brouillons et les résumés ; ce sont les personnes qui connaissent la communauté." },
            { objective: "O1", q: "L'IA vous fait gagner trois heures de paperasse par semaine. Quel est le meilleur usage de ce temps ?", options: ["Plus de paperasse", "Écouter les familles et créer la confiance", "Laisser l'IA parler aux familles à votre place", "Rien"], answer: 1, why: "Les responsables utilisent l'IA pour libérer du temps pour le travail humain, comme écouter et être présent." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Une mission claire et un objectif mesurable",
          minutes: 5,
          goal: "Écrire une mission en une phrase et un objectif mesurable avec l'aide de l'IA.",
          text: [
            "Une mission dit en une phrase pourquoi votre groupe existe : qui vous servez, ce que vous faites et pourquoi c'est important. Exemple : « Nous faisons en sorte qu'aucune famille du quartier est n'ait faim en tenant une banque alimentaire gratuite chaque semaine. »",
            "Un objectif dit ce que vous allez accomplir et pour quand, d'une façon qu'on peut compter. « Aider plus de gens » n'est pas mesurable. « Servir 150 familles par mois d'ici juin » l'est.",
            "Demandez à l'IA : « Voici ce que fait notre groupe : [décrivez]. Écris trois missions d'une phrase avec des mots simples, et deux objectifs mesurables pour les six prochains mois. » Puis choisissez et retouchez avec votre équipe pour que les mots ressemblent à votre communauté."
          ],
          steps: ["Décrivez qui vous servez, ce que vous faites et pourquoi.", "Demandez à l'IA trois missions et deux objectifs mesurables.", "Choisissez-en un de chaque avec votre équipe.", "Retouchez pour que cela ressemble à votre communauté."],
          words: [["Mission", "une phrase qui dit pourquoi votre groupe existe."], ["Objectif mesurable", "un objectif que l'on peut compter et vérifier à une date."]],
          slides: [
            { title: "Mission : pourquoi vous existez", bullets: ["Qui vous servez", "Ce que vous faites", "Pourquoi c'est important"] },
            { title: "Objectif : ce que vous allez accomplir", bullets: ["Pas mesurable : « Aider plus de gens »", "Mesurable : « Servir 150 familles par mois d'ici juin »"] },
            { title: "L'IA rédige, vous décidez ensemble", bullets: ["Demandez trois missions et deux objectifs", "Choisissez et retouchez en équipe"] }
          ],
          tryIt: "Demandez à un assistant d'IA trois missions et deux objectifs mesurables pour votre groupe. Choisissez-en un de chaque et retouchez-les avec vos mots.",
          youCanNow: "écrire une mission claire et un objectif mesurable pour votre groupe.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui rend un objectif mesurable ?", options: ["Il est inspirant", "Il est très long", "On peut le compter à une date", "Il utilise de grands mots"], answer: 2, why: "Un objectif mesurable dit ce que vous allez atteindre et pour quand, d'une façon que l'on peut compter." },
            { objective: "O2", q: "La mission écrite par l'IA utilise des mots que vos membres ne diraient jamais. Que faites-vous ?", options: ["L'utiliser quand même", "Demander à l'IA une version plus longue", "Abandonner la mission", "La retoucher avec votre équipe pour qu'elle ressemble à votre communauté"], answer: 3, why: "La mission doit ressembler à votre communauté, donc vous la retouchez ensemble." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planifier un programme ou un événement avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour faire un calendrier simple et une liste de tâches pour un programme ou un événement.",
          text: [
            "Une fois que vous avez un objectif, planifiez le travail. L'IA peut transformer un objectif en calendrier (ce qui se passe quand) et en liste de tâches (qui fait quoi).",
            "Exemple de consigne : « Nous organisons une distribution de fournitures scolaires pour 100 enfants le 10 août au centre communautaire. Fais un calendrier simple sur 6 semaines et une liste de tâches avec trois rôles de bénévoles. Utilise des phrases courtes. »",
            "Relisez-le avec votre équipe. Retirez les étapes qui ne conviennent pas à votre communauté, ajoutez ce que l'IA a oublié (comme les autorisations, la traduction ou le transport des aînés), et mettez un nom et une date à côté de chaque tâche."
          ],
          steps: ["Donnez à l'IA l'événement, la date, le lieu et le nombre de personnes.", "Demandez un calendrier et une liste de tâches.", "Relisez avec votre équipe et ajoutez ce qui manque.", "Mettez un nom et une date à côté de chaque tâche."],
          words: [["Calendrier", "la liste de ce qui se passe quand, dans l'ordre."], ["Liste de tâches", "une liste de travaux avec la personne qui fera chacun."]],
          slides: [
            { title: "De l'objectif au plan", bullets: ["Calendrier : ce qui se passe quand", "Liste de tâches : qui fait quoi"] },
            { title: "Exemple de consigne", bullets: ["Distribution de fournitures, 100 enfants, 10 août", "Calendrier sur 6 semaines et liste de tâches", "Trois rôles de bénévoles, phrases courtes"] },
            { title: "Faites-le vôtre", bullets: ["Retirez ce qui ne convient pas", "Ajoutez les oublis : autorisations, traduction, transport", "Un nom et une date par tâche"] }
          ],
          tryIt: "Demandez à l'IA un calendrier et une liste de tâches pour un programme ou un événement que votre groupe pourrait organiser. Ajoutez une chose que l'IA a oubliée et mettez un nom à côté de chaque tâche.",
          youCanNow: "transformer un objectif en calendrier et en liste de tâches avec l'IA et votre équipe.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une liste de tâches ?", options: ["Une liste de qui fait quoi", "Une liste de donateurs", "Un budget", "Une mission"], answer: 0, why: "Une liste de tâches montre chaque travail et qui va le faire." },
            { objective: "O3", q: "Le plan de l'IA pour un repas en plein air ne parle pas d'autorisation pour le parc. Que faites-vous ?", options: ["Laisser tomber ; l'IA sait mieux", "Ajouter la vérification de l'autorisation à la liste de tâches, avec un nom et une date", "Annuler le repas", "Demander à l'IA de faire la demande"], answer: 1, why: "Vous ajoutez ce que l'IA a oublié, comme les autorisations, et donnez à la tâche un responsable et une date." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Diriger et planifier avec l'IA",
        questions: [
          { objective: "O1", q: "Pour quelle tâche l'IA est-elle douée dans un groupe communautaire ?", options: ["Savoir ce dont vos voisins ont besoin", "Rédiger une affiche", "Créer la confiance avec les familles", "Protéger les histoires privées"], answer: 1, why: "L'IA est douée pour les premiers brouillons ; les gens font le travail relationnel." },
          { objective: "O2", q: "Laquelle est une mission ?", options: ["« Servir 150 familles d'ici juin »", "« Réunion mardi à 18 h »", "« Nous faisons en sorte qu'aucune famille du quartier est n'ait faim en tenant une banque alimentaire gratuite chaque semaine. »", "« Acheter plus de chaises »"], answer: 2, why: "Une mission dit qui vous servez, ce que vous faites et pourquoi." },
          { objective: "O2", q: "Quel objectif est mesurable ?", options: ["« Aider plus de gens »", "« Faire le bien »", "« Être meilleurs »", "« Servir 150 familles par mois d'ici juin »"], answer: 3, why: "On peut le compter et le vérifier à une date." },
          { objective: "O3", q: "Le plan d'événement de l'IA a oublié le transport des aînés. Que faites-vous ?", options: ["L'ajouter au plan", "Suivre exactement le plan de l'IA", "Annuler l'événement", "Demander à l'IA de retirer les aînés"], answer: 0, why: "Vous connaissez votre communauté ; ajoutez ce que l'IA a oublié." },
          { objective: "O3", q: "Qu'est-ce qui doit figurer à côté de chaque tâche de votre liste ?", options: ["Un émoji", "Un nom et une date", "Un mot de passe", "Rien"], answer: 1, why: "Les noms et les dates garantissent que les tâches sont faites." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les personnes, l'argent et la confiance",
      lessons: [
        {
          objectives: ["O4"],
          title: "Organiser les bénévoles en gardant tout le monde en sécurité",
          minutes: 5,
          goal: "Écrire des descriptions claires des rôles de bénévoles et des mesures de sécurité.",
          text: [
            "Les bénévoles restent quand ils savent quoi faire. L'IA peut écrire de courtes descriptions de rôles : en quoi consiste la tâche, combien de temps elle prend, quelles compétences aident et à qui demander de l'aide. Elle peut aussi rédiger un message d'inscription et des SMS de rappel.",
            "Si votre programme sert des enfants ou des adultes vulnérables, la sécurité passe en premier. Les pratiques courantes comprennent la vérification des antécédents des bénévoles, la règle des deux adultes présents au lieu d'un adulte seul avec un enfant, et des règles claires pour les contacts par téléphone et sur les réseaux sociaux. Suivez la politique de votre organisation et les règles locales, et demandez à votre assureur ou à un avocat en cas de doute.",
            "Gardez privées les informations sur les bénévoles et les bénéficiaires. Ne collez pas de noms, de numéros de téléphone ou d'histoires personnelles dans les outils d'IA ; utilisez plutôt des rôles et des repères."
          ],
          steps: ["Demandez à l'IA de courtes descriptions pour chaque rôle de bénévole.", "Ajoutez des mesures de sécurité s'il y a des mineurs ou des adultes vulnérables.", "Suivez la politique de votre organisation et les règles locales.", "Utilisez des repères, jamais de vrais noms ou numéros, dans les consignes à l'IA."],
          words: [["Vérification des antécédents", "un contrôle du passé d'une personne avant qu'elle travaille avec des enfants ou des personnes vulnérables."], ["Règle des deux adultes", "une pratique de sécurité courante : au moins deux adultes sont présents avec les enfants, jamais un seul."], ["Adulte vulnérable", "un adulte qui peut avoir besoin d'une protection supplémentaire, comme certaines personnes âgées ou handicapées."]],
          slides: [
            { title: "Des rôles clairs gardent les bénévoles", bullets: ["En quoi consiste la tâche et sa durée", "Compétences utiles", "À qui demander de l'aide"] },
            { title: "Sécurité avec les enfants", bullets: ["Vérification des antécédents", "Deux adultes présents, jamais un seul", "Règles pour le téléphone et les réseaux sociaux"] },
            { title: "Suivez les règles", bullets: ["La politique de votre organisation", "Les règles locales", "Demandez à votre assureur ou à un avocat en cas de doute"] },
            { title: "Protégez la vie privée", bullets: ["Pas de vrais noms ni numéros dans l'IA", "Utilisez des rôles et des repères"] }
          ],
          tryIt: "Demandez à l'IA trois courtes descriptions de rôles de bénévoles pour votre plan. S'il y a des mineurs, ajoutez les mesures de sécurité qu'exige votre organisation.",
          youCanNow: "écrire des rôles de bénévoles clairs et inclure les mesures de sécurité dont votre groupe a besoin.",
          quickCheck: [
            { objective: "O4", q: "Que doit contenir la description d'un rôle de bénévole ?", options: ["L'adresse du bénévole", "Seulement l'intitulé du poste", "En quoi consiste le travail, combien de temps il prend et à qui demander de l'aide", "Le numéro de téléphone du bénévole"], answer: 2, why: "Des rôles clairs disent quoi faire, combien de temps, et à qui demander." },
            { objective: "O4", q: "Vous voulez que l'IA rédige un SMS de rappel pour les bénévoles. Que collez-vous ?", options: ["Le nom et le numéro de chaque bénévole", "Les résultats de leur vérification des antécédents", "Leurs adresses", "Le rôle, la date et l'heure, avec des repères à la place des noms"], answer: 3, why: "Utilisez des rôles et des repères, jamais de vrais noms ou numéros, dans les demandes à l'IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Trouver des subventions et écrire un résumé de demande",
          minutes: 6,
          goal: "Trouver une subvention possible et rédiger un résumé de votre projet en cinq phrases.",
          text: [
            "Une subvention est de l'argent donné pour un but précis, que vous n'avez pas à rembourser. Les sources locales conviennent souvent le mieux aux petits groupes : fondations communautaires, entreprises locales, banques, groupes religieux et programmes de la ville ou du département. Votre bibliothèque peut proposer une aide gratuite pour chercher des subventions.",
            "Aux États-Unis, Grants.gov liste les subventions fédérales. La plupart sont pour des organisations, pas pour des particuliers, et aucune ne donne d'aide financière personnelle. Postuler sur Grants.gov demande d'enregistrer votre organisation, ce qui prend du temps : lisez les étapes d'inscription sur Grants.gov et commencez tôt. Ailleurs, renseignez-vous auprès des ministères, des collectivités locales et des fondations de votre pays.",
            "L'IA peut vous aider à écrire un court résumé du projet : le besoin, ce que vous allez faire, qui cela aide, votre objectif mesurable et le montant demandé. Chaque fait et chaque chiffre doit être vrai et correspondre à vos registres. Lisez les règles du financeur et utilisez ses questions, ses limites de mots et sa date limite."
          ],
          steps: ["Demandez à votre bibliothèque ou à une fondation communautaire quelles subventions locales existent.", "Cherchez sur Grants.gov si votre organisation est prête pour des subventions fédérales.", "Demandez à l'IA un résumé en cinq phrases : besoin, plan, bénéficiaires, objectif, montant.", "Vérifiez chaque fait et suivez les règles du financeur."],
          words: [["Subvention", "de l'argent donné pour un but précis, que vous n'avez pas à rembourser."], ["Financeur", "le groupe ou l'organisme qui accorde la subvention."], ["Fondation communautaire", "une organisation caritative locale qui accorde des subventions aux groupes de sa région."]],
          sources: [{ name: "Grants.gov : conditions d'admissibilité aux subventions", url: "https://www.grants.gov/learn-grants/grant-eligibility" }],
          slides: [
            { title: "Où les petits groupes trouvent des subventions", bullets: ["Fondations communautaires", "Entreprises locales, banques, groupes religieux", "Programmes de la ville ; demandez à la bibliothèque"] },
            { title: "Subventions fédérales : Grants.gov (É.-U.)", bullets: ["Surtout pour des organisations, pas des particuliers", "L'inscription prend du temps : commencez tôt", "Lisez les étapes sur Grants.gov"] },
            { title: "Un résumé en cinq phrases", bullets: ["Le besoin et votre plan", "Qui cela aide et votre objectif", "Le montant demandé"] },
            { title: "Restez honnête", bullets: ["Chaque fait doit être vrai", "Suivez les règles et la date limite du financeur"] }
          ],
          tryIt: "Trouvez une subvention à laquelle votre groupe pourrait postuler (locale ou sur Grants.gov). Demandez à l'IA un résumé de votre projet en cinq phrases, puis vérifiez chaque fait.",
          youCanNow: "trouver une subvention possible et rédiger un résumé de projet honnête.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'une subvention ?", options: ["De l'argent donné pour un but, que vous n'avez pas à rembourser", "Un prêt à faible taux", "Un don de nourriture", "Un formulaire fiscal"], answer: 0, why: "Une subvention est de l'argent donné pour un but, qu'on ne rembourse pas." },
            { objective: "O5", q: "Un financeur accepte 100 mots, et l'IA en a écrit 180. Que faites-vous ?", options: ["Envoyer les 180 mots", "Le raccourcir pour respecter la limite de 100 mots du financeur", "Aller jusqu'à 200 mots", "Laisser tomber le résumé"], answer: 1, why: "Respectez les règles du financeur, y compris les limites de mots." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Informer les soutiens et fixer des règles d'IA pour votre groupe",
          minutes: 5,
          goal: "Écrire un message d'information aux soutiens et cinq règles simples d'usage de l'IA pour votre groupe.",
          text: [
            "Les soutiens donnent à nouveau quand ils voient des résultats. L'IA peut transformer vos chiffres en un message court et chaleureux : « Ce mois-ci, nous avons servi 142 familles et distribué 300 sacs à dos. Merci ! » Ne partagez des histoires qu'avec une autorisation écrite, et changez les noms si la personne le souhaite.",
            "Tout groupe qui utilise l'IA devrait s'accorder sur quelques règles simples. Par exemple : 1) Ne jamais mettre dans l'IA les noms, adresses, numéros de téléphone, informations de santé ou de statut migratoire des personnes que nous servons. 2) Une personne lit et vérifie tout avant l'envoi. 3) Nous ne laissons pas l'IA décider qui reçoit de l'aide. 4) Nous disons aux gens qu'un message a été surtout écrit par l'IA s'ils le demandent. 5) Nous utilisons seulement des outils approuvés, gratuits ou donnés.",
            "Écrivez vos règles, partagez-les avec les bénévoles et revoyez-les une fois par an."
          ],
          steps: ["Demandez à l'IA de transformer vos résultats en court message de remerciement.", "N'utilisez des histoires qu'avec une autorisation écrite.", "Écrivez cinq règles d'IA avec votre équipe.", "Partagez les règles avec les bénévoles et revoyez-les chaque année."],
          words: [["Soutien", "quelqu'un qui donne du temps, de l'argent ou de l'aide à votre groupe."], ["Politique", "un ensemble écrit de règles que votre groupe accepte de suivre."]],
          slides: [
            { title: "Les nouvelles gardent les soutiens", bullets: ["Partagez de vrais chiffres", "Dites merci", "Des histoires seulement avec autorisation écrite"] },
            { title: "Cinq règles simples d'IA", bullets: ["Pas de détails privés sur les personnes servies", "Une personne vérifie tout", "L'IA ne décide pas qui reçoit de l'aide"] },
            { title: "Faites vivre les règles", bullets: ["Transparence sur l'IA si on le demande", "Des outils approuvés", "Partagez avec les bénévoles ; revoyez chaque année"] }
          ],
          tryIt: "Tâche finale : rassemblez tout dans un plan de programme d'une page : mission, objectif mesurable, calendrier, trois rôles de bénévoles avec mesures de sécurité, un résumé de subvention en cinq phrases et les cinq règles d'IA de votre groupe. Retirez tout ce qui est privé avant de partager.",
          youCanNow: "mener un projet communautaire avec un plan clair et un usage de l'IA sûr et honnête.",
          quickCheck: [
            { objective: "O6", q: "Quand pouvez-vous partager l'histoire d'une famille dans un message d'information ?", options: ["Chaque fois que ça aide à collecter des fonds", "Si vous changez un mot", "Seulement avec son autorisation écrite", "Si l'histoire est courte"], answer: 2, why: "Les histoires sont partagées seulement avec une autorisation écrite." },
            { objective: "O6", q: "Un administrateur propose de laisser l'IA choisir quelles familles reçoivent de l'aide en premier. Que dit votre règle sur l'IA ?", options: ["Oui, l'IA est juste", "Oui, si c'est plus rapide", "Seulement les jours chargés", "Non ; ce sont des personnes qui décident qui reçoit de l'aide"], answer: 3, why: "L'IA ne décide pas qui reçoit de l'aide ; ce sont des personnes qui décident." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les personnes, l'argent et la confiance",
        questions: [
          { objective: "O4", q: "Votre programme sert des enfants. Laquelle est une pratique de sécurité courante ?", options: ["Un adulte seul avec chaque enfant", "Des bénévoles qui écrivent aux enfants en privé", "Vérification des antécédents et deux adultes présents", "Aucune règle nécessaire"], answer: 2, why: "La vérification des antécédents et la règle des deux adultes sont des protections courantes ; suivez la politique de votre organisation." },
          { objective: "O4", q: "Pouvez-vous coller le nom et l'histoire d'un bénéficiaire dans l'IA pour écrire un rapport ?", options: ["Oui, toujours", "Seulement si c'est court", "Oui, si l'IA est gratuite", "Non ; utilisez des repères et gardez les détails privés à l'écart"], answer: 3, why: "Protégez les personnes que vous servez en gardant leurs détails hors des outils d'IA." },
          { objective: "O5", q: "La plupart des financements sur Grants.gov sont pour :", options: ["Des organisations", "Des factures personnelles", "Le loyer de particuliers", "L'achat de voitures"], answer: 0, why: "Grants.gov indique que la plupart des offres sont pour des organisations, pas des particuliers." },
          { objective: "O5", q: "L'IA a écrit que votre groupe a servi 500 familles, mais vos registres disent 312. Vous :", options: ["Gardez 500, ça sonne mieux", "Corrigez en 312", "Retirez tous les chiffres", "Demandez à l'IA un chiffre plus grand"], answer: 1, why: "Chaque fait d'une demande ou d'un message doit correspondre à vos registres." },
          { objective: "O6", q: "Laquelle est une bonne règle d'IA pour un groupe communautaire ?", options: ["L'IA décide qui reçoit de l'aide", "Personne ne vérifie les textes de l'IA", "Une personne lit et vérifie tout avant l'envoi", "Coller tous les dossiers des bénéficiaires dans l'IA"], answer: 2, why: "La relecture humaine garde votre groupe exact et digne de confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour diriger une association",
    questions: [
      { objective: "O1", q: "Quelle tâche vaut-il mieux garder pour les personnes, pas pour l'IA ?", options: ["Créer la confiance avec les familles", "Rédiger une affiche", "Faire une liste de contrôle", "Résumer des notes de réunion"], answer: 0, why: "Les relations et la confiance sont un travail humain." },
      { objective: "O1", q: "Pourquoi les responsables devraient-ils utiliser l'IA pour les brouillons ?", options: ["Pour remplacer l'équipe", "Pour libérer du temps pour écouter et être présent", "Pour éviter de vérifier le travail", "Pour collecter des données privées"], answer: 1, why: "L'IA fait gagner du temps d'écriture pour que les responsables se concentrent sur les personnes." },
      { objective: "O2", q: "Une mission dit :", options: ["L'heure de la réunion", "Le solde du compte", "Qui vous servez, ce que vous faites et pourquoi", "Les numéros de téléphone des bénévoles"], answer: 2, why: "C'est le but d'une mission." },
      { objective: "O2", q: "Quel objectif peut-on mesurer ?", options: ["« Faire une différence »", "« Aider beaucoup »", "« Être connus »", "« Distribuer 300 sacs à dos d'ici le 10 août »"], answer: 3, why: "Il a un nombre et une date." },
      { objective: "O2", q: "Après que l'IA a proposé des missions, vous devez :", options: ["Choisir et retoucher avec votre équipe", "Prendre la première sans la lire", "Publier les trois", "Ignorer votre équipe"], answer: 0, why: "Votre équipe s'assure qu'elle ressemble à votre communauté." },
      { objective: "O3", q: "Un calendrier montre :", options: ["Qui a donné", "Ce qui se passe quand, dans l'ordre", "Seulement votre budget", "L'adresse des bénévoles"], answer: 1, why: "Un calendrier met les étapes dans l'ordre." },
      { objective: "O3", q: "Quel détail donner à l'IA pour planifier un événement ?", options: ["Les numéros des bénévoles", "L'adresse des familles", "L'événement, la date, le lieu et le nombre de personnes", "Vos identifiants bancaires"], answer: 2, why: "Ces détails aident sans partager d'informations privées." },
      { objective: "O3", q: "Le plan de l'IA oublie la traduction pour les familles qui parlent une autre langue. Vous :", options: ["Suivez exactement l'IA", "Annulez", "Retirez ces familles", "Ajoutez la traduction au plan"], answer: 3, why: "Vous ajoutez ce dont votre communauté a besoin." },
      { objective: "O4", q: "Une bonne description de rôle de bénévole contient :", options: ["En quoi consiste la tâche, sa durée et à qui demander", "Le numéro de sécurité sociale du bénévole", "Rien", "Seulement le nom de l'événement"], answer: 0, why: "Des rôles clairs aident les bénévoles à réussir." },
      { objective: "O4", q: "La règle des deux adultes veut dire :", options: ["Deux bénévoles partagent un téléphone", "Au moins deux adultes sont présents avec les enfants, jamais un seul", "Deux adultes signent chaque chèque", "Seulement deux adultes peuvent être bénévoles"], answer: 1, why: "C'est une pratique courante qui protège les enfants et les bénévoles." },
      { objective: "O4", q: "Si vous n'êtes pas sûr des règles de sécurité pour travailler avec des mineurs, vous devez :", options: ["Inventer les vôtres", "Les ignorer", "Suivre la politique de votre organisation et les règles locales, et demander à votre assureur ou à un avocat", "Demander à l'ami d'un bénévole"], answer: 2, why: "La politique officielle et les professionnels donnent la bonne réponse." },
      { objective: "O5", q: "Une subvention est :", options: ["Un prêt à rembourser avec intérêts", "Une carte de crédit", "Une facture d'impôts", "De l'argent pour un but précis, que vous n'avez pas à rembourser"], answer: 3, why: "Les subventions ne se remboursent pas." },
      { objective: "O5", q: "Où les petits groupes trouvent-ils souvent des subventions locales ?", options: ["Auprès d'une fondation communautaire", "Dans une publicité surgissante", "Chez un prêteur sur salaire", "Dans le SMS d'un inconnu"], answer: 0, why: "Les fondations communautaires accordent des subventions aux groupes locaux." },
      { objective: "O5", q: "Pour l'inscription aux subventions fédérales sur Grants.gov, il est sage de :", options: ["Attendre la veille de la date limite", "Commencer tôt, car l'inscription prend du temps", "Sauter l'inscription", "Payer un inconnu pour le faire"], answer: 1, why: "L'inscription prend du temps, donc commencez tôt." },
      { objective: "O5", q: "Un résumé de subvention en cinq phrases couvre :", options: ["Seulement votre nom", "Les numéros de téléphone des bénévoles", "Le besoin, le plan, les bénéficiaires, l'objectif et le montant", "Une liste de plaintes"], answer: 2, why: "Ces parties disent au financeur ce qu'il doit savoir." },
      { objective: "O5", q: "Avant d'envoyer un résumé de subvention écrit avec l'IA, vous :", options: ["L'envoyez sans le lire", "Ajoutez des chiffres plus grands", "Retirez la date limite", "Vérifiez chaque fait et suivez les règles du financeur"], answer: 3, why: "L'honnêteté et le respect des règles protègent votre groupe." },
      { objective: "O6", q: "Vous voulez raconter l'histoire d'une famille dans une lettre d'information. Il vous faut :", options: ["Son autorisation écrite", "Rien", "L'autorisation de l'IA", "Seulement l'avis d'un bénévole"], answer: 0, why: "Les histoires ne se partagent qu'avec autorisation." },
      { objective: "O6", q: "Laquelle est une bonne règle d'IA ?", options: ["Mettre les informations sur le statut migratoire dans l'IA", "Ne jamais mettre dans l'IA les noms, adresses ou informations de santé des personnes servies", "Laisser l'IA décider qui reçoit de la nourriture", "Ne jamais vérifier les textes de l'IA"], answer: 1, why: "Les détails privés restent hors des outils d'IA." },
      { objective: "O6", q: "L'IA doit-elle décider qui reçoit l'aide de votre programme ?", options: ["Oui, toujours", "Oui, si elle est gratuite", "Non ; ce sont les personnes qui décident", "Seulement le week-end"], answer: 2, why: "Les décisions sur l'aide aux personnes demandent un jugement humain et de l'équité." },
      { objective: "O6", q: "À quelle fréquence votre groupe doit-il revoir ses règles d'IA ?", options: ["Jamais", "Tous les dix ans", "Seulement après un problème", "Environ une fois par an"], answer: 3, why: "Les outils changent, donc revoyez vos règles régulièrement." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Mission et objectif",
        objective: "O2",
        notYet: "Pas de mission, ou un objectif qu'on ne peut pas compter.",
        meets: "Une mission en une phrase avec qui, quoi et pourquoi, et un objectif avec un chiffre et une date.",
        exceeds: "Retouchés avec l'équipe pour ressembler à la communauté."
      },
      {
        name: "Calendrier",
        objective: "O3",
        notYet: "Pas de calendrier, ou des tâches sans nom ni date.",
        meets: "Un calendrier simple avec un nom et une date à chaque tâche.",
        exceeds: "Inclut quelque chose que l'IA a oublié, comme les autorisations, la traduction ou le transport."
      },
      {
        name: "Rôles des bénévoles et sécurité",
        objective: "O4",
        notYet: "Moins de trois rôles, ou pas de mesures de sécurité quand il y a des mineurs.",
        meets: "Trois rôles clairs, avec les mesures de sécurité de l'organisation là où il le faut.",
        exceeds: "Les rôles disent combien de temps prend le travail et à qui demander de l'aide."
      },
      {
        name: "Résumé de subvention",
        objective: "O5",
        notYet: "Des parties manquent, ou des faits ne correspondent pas aux registres.",
        meets: "Cinq phrases : besoin, plan, personnes aidées, objectif et montant, tout vérifié.",
        exceeds: "Respecte la limite de mots et les questions d'un vrai financeur."
      },
      {
        name: "Règles d'IA et vie privée",
        objective: "O6",
        notYet: "Moins de cinq règles, ou des informations privées restées dans le plan.",
        meets: "Cinq règles d'IA claires, et aucune information privée dans le plan.",
        exceeds: "Les règles prévoient une révision chaque année et sont prêtes à être partagées avec les bénévoles."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Groupes qui adoptent des règles écrites sur l'IA dans les 30 jours (questionnaire de suivi)",
      "Groupes qui déposent au moins une demande de subvention dans les 90 jours, et subventions obtenues",
      "Groupes qui signalent plus de bénévoles ou plus de personnes servies après avoir utilisé leur plan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone, ou un ordinateur de bibliothèque ou de bureau",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Des faits sur un programme réel ou d'entraînement : qui il sert, ses résultats et ses registres",
      "Du papier ou un outil de documents gratuit pour le plan d'une page",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites travailler ensemble les équipes d'un même groupe pour que le plan et les règles d'IA soient partagés.",
      "Vérifiez dans chaque demande qu'il n'y a pas de noms, de numéros de téléphone ni de détails de santé ou de situation migratoire des personnes servies.",
      "Pour les programmes avec des mineurs, renvoyez à la politique de sécurité de l'organisation ; ce cours ne la remplace pas.",
      "Apportez une liste des fondations communautaires locales et de l'aide aux subventions proposée par la bibliothèque.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
