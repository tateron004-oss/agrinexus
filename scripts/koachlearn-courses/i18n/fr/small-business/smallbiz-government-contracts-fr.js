"use strict";

// Koach Learn course (French translation of small-business/smallbiz-government-contracts.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-government-contracts-fr",
  lang: "fr",
  translationOf: "smallbiz-government-contracts",
  category: "Small Business",
  name: "Remporter des marchés publics",
  skills: "S'inscrire sur SAM.gov, Choisir ses codes NAICS, Utiliser les certifications de la SBA et de Californie, Trouver des appels d'offres, Lire un appel d'offres, Rédiger une fiche de capacités",
  outcome: "inscrire votre entreprise pour vendre à l'administration, choisir vos codes NAICS, trouver des appels d'offres qui vous conviennent, lire un appel d'offres pour décider de répondre ou non, et rédiger une fiche de capacités d'une page.",
  about: [
    "Les administrations fédérales, des États et locales aux États-Unis achètent presque tout : nettoyage, traiteur, construction, aménagement paysager, impression, informatique, formation, transport routier et plus encore. Une partie de ces achats est réservée aux petites entreprises, et une autre aux petites entreprises certifiées, par exemple celles détenues par des femmes ou par des anciens combattants.",
    "Ce cours vous fait suivre les étapes dans l'ordre : vous inscrire sur SAM.gov et obtenir votre Unique Entity ID (UEI, identifiant unique d'entreprise), choisir vos codes NAICS, comprendre les certifications de la SBA (Small Business Administration, l'agence fédérale des petites entreprises) et les certifications Small Business et DVBE de Californie, trouver des appels d'offres, lire un appel d'offres, et rédiger une fiche de capacités à envoyer aux acheteurs.",
    "Les règles, les plafonds et les sites web changent. Chaque leçon indique la page officielle à vérifier. Une aide gratuite est proposée par les APEX Accelerators, les bureaux de district de la SBA et les Small Business Development Centers (centres de développement des petites entreprises) ; vous n'avez besoin de payer personne pour vous inscrire.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche à faire tout de suite. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Rédigez une fiche de capacités d'une page pour votre entreprise, en quatre parties : compétences clés, références passées, ce qui vous distingue, et données de l'entreprise (nom légal, UEI, codes NAICS, certifications, coordonnées). Puis trouvez un vrai appel d'offres sur SAM.gov ou Cal eProcure qui correspond à un code NAICS de votre fiche.",
  chapters: [
    {
      name: "Chapitre 1 : Se préparer à vendre à l'administration",
      lessons: [
        {
          title: "S'inscrire sur SAM.gov et obtenir un UEI",
          minutes: 6,
          goal: "Réunir ce qu'il faut et inscrire vous-même votre entreprise sur SAM.gov, gratuitement.",
          text: [
            "SAM.gov (le System for Award Management) est le site officiel du gouvernement des États-Unis pour travailler avec les agences fédérales. Pour répondre aux marchés fédéraux et les remporter, votre entreprise doit y être inscrite. L'inscription vous donne un Unique Entity ID (UEI), un code de 12 caractères, lettres et chiffres, qui identifie votre entreprise.",
            "Vous pouvez demander seulement un UEI sans inscription complète, mais avec un UEI seul vous ne pouvez pas demander directement des financements ou marchés fédéraux. Pour les marchés, faites l'inscription complète. Vous devez la renouveler tous les 365 jours pour qu'elle reste active.",
            "L'inscription sur SAM.gov est gratuite. Certaines entreprises envoient des e-mails ou des lettres qui ont l'air officiels et proposent de vous inscrire ou de renouveler votre inscription contre paiement, ou préviennent que votre inscription va bientôt expirer. Vous n'avez jamais à les payer. Inscrivez-vous seulement sur sam.gov, et demandez l'aide gratuite d'un APEX Accelerator si vous êtes bloqué.",
            "Avant de commencer, réunissez le nom légal et l'adresse physique de votre entreprise exactement comme l'IRS (le fisc américain) les a, votre Employer Identification Number (EIN, numéro fiscal d'entreprise) ou numéro fiscal, et vos coordonnées bancaires pour les paiements. Tapez-les seulement sur SAM.gov, jamais dans un outil d'IA ni dans un e-mail."
          ],
          steps: ["Réunissez le nom légal, l'adresse physique, l'EIN et les coordonnées bancaires de votre entreprise.", "Allez sur sam.gov et créez un identifiant de connexion.", "Choisissez d'inscrire votre entité, pas seulement d'obtenir un UEI.", "Répondez à chaque partie ; le nom et l'adresse de l'entreprise doivent correspondre aux dossiers de l'IRS.", "Notez votre UEI et la date d'expiration de votre inscription.", "Programmez un rappel pour renouveler avant 365 jours."],
          words: [["SAM.gov", "le System for Award Management, le site fédéral où les entreprises s'inscrivent pour vendre à l'administration."], ["UEI", "Unique Entity ID : le code de 12 caractères qui identifie votre entreprise auprès de l'administration."], ["EIN", "Employer Identification Number : le numéro fiscal de votre entreprise donné par l'IRS."], ["APEX Accelerator", "un centre de conseil gratuit qui aide les entreprises à vendre à l'administration."]],
          slides: [
            { title: "SAM.gov est la porte d'entrée", bullets: ["Inscrivez-vous pour répondre aux marchés fédéraux", "Vous recevez un Unique Entity ID de 12 caractères", "Renouvelez tous les 365 jours"] },
            { title: "UEI seul ou inscription complète", bullets: ["UEI seul : vous ne pouvez pas demander de marchés", "Inscription complète : nécessaire pour les marchés"] },
            { title: "C'est gratuit", bullets: ["Ignorez les offres payantes pour vous inscrire ou renouveler", "Inscrivez-vous seulement sur sam.gov", "Aide gratuite : APEX Accelerators"] },
            { title: "Ayez sous la main", bullets: ["Nom légal et adresse identiques à ceux de l'IRS", "EIN ou numéro fiscal et coordonnées bancaires", "Tapez-les seulement sur SAM.gov"] }
          ],
          sources: [
            { name: "SAM.gov : Inscription d'une entité", url: "https://sam.gov/content/entity-registration" },
            { name: "SBA : Conditions de base pour les marchés publics", url: "https://www.sba.gov/federal-contracting/contracting-guide/basic-requirements" }
          ],
          tryIt: "Faites une liste de contrôle pour l'inscription de votre entreprise sur SAM.gov : nom légal, adresse physique, EIN, coordonnées bancaires, personne à contacter. Cochez ce que vous avez déjà. Si vous êtes déjà inscrit, cherchez votre date d'expiration et programmez un rappel de renouvellement.",
          youCanNow: "préparer et faire une inscription gratuite sur SAM.gov, expliquer ce qu'est un UEI, et repérer les arnaques à l'inscription payante."
        },
        {
          title: "Choisir ses codes NAICS et vérifier sa taille",
          minutes: 5,
          goal: "Choisir un code NAICS principal et vérifier si votre entreprise compte comme petite pour ce code.",
          text: [
            "Les codes NAICS (North American Industry Classification System, classification des activités en Amérique du Nord) classent les entreprises selon ce qu'elles vendent. Chaque marché public reçoit un code NAICS, et les acheteurs cherchent les entreprises par code. Par exemple, il existe des codes pour les services de nettoyage, l'impression commerciale et la conception de systèmes informatiques.",
            "Cherchez les codes sur la page NAICS du US Census Bureau (bureau fédéral du recensement, census.gov/naics) en tapant des mots qui décrivent votre travail. Choisissez un code principal pour votre service principal et ajoutez-en d'autres pour les autres choses que vous vendez.",
            "Chaque code NAICS a une norme de taille (size standard) : la taille maximale qu'une entreprise peut avoir tout en comptant comme petite pour ce code, mesurée par le chiffre d'affaires annuel ou le nombre de salariés. La plupart des fabricants de 500 salariés ou moins et la plupart des autres entreprises avec une moyenne de moins de $7.5 million (7,5 millions de dollars) par an comptent comme petites, mais cela varie. Vérifiez votre cas avec le Size Standards Tool de la SBA.",
            "Être petit pour un code vous permet de concourir pour les marchés réservés aux petites entreprises sous ce code."
          ],
          steps: ["Listez ce que vous vendez avec des mots simples.", "Cherchez sur census.gov/naics les codes qui correspondent.", "Choisissez un code principal et deux ou trois autres.", "Vérifiez chaque code avec le Size Standards Tool de la SBA.", "Ajoutez les codes à votre inscription sur SAM.gov."],
          words: [["Code NAICS", "un numéro qui décrit le type d'entreprise que vous êtes."], ["Code NAICS principal", "le code de votre produit ou service principal."], ["Norme de taille", "la taille maximale qu'une entreprise peut avoir tout en comptant comme petite pour un code NAICS."], ["Marché réservé (set-aside)", "un marché pour lequel seules certaines entreprises, comme les petites entreprises, peuvent concourir."]],
          slides: [
            { title: "À quoi servent les codes NAICS", bullets: ["Classer les entreprises selon ce qu'elles vendent", "Chaque marché a un code", "Les acheteurs cherchent les entreprises par code"] },
            { title: "Trouver vos codes", bullets: ["Cherchez sur census.gov/naics", "Un code principal pour votre service principal", "Ajoutez des codes pour vos autres ventes"] },
            { title: "Normes de taille", bullets: ["Chaque code a un plafond de petite entreprise", "Selon le chiffre d'affaires annuel ou les salariés", "Vérifiez avec le Size Standards Tool de la SBA"] }
          ],
          sources: [
            { name: "SBA : Normes de taille", url: "https://www.sba.gov/federal-contracting/contracting-guide/size-standards" },
            { name: "US Census Bureau : NAICS", url: "https://www.census.gov/naics/" }
          ],
          tryIt: "Cherchez votre service principal sur census.gov/naics et notez votre code NAICS principal et deux autres. Puis vérifiez l'un d'eux dans le Size Standards Tool de la SBA et notez si votre entreprise compte comme petite.",
          youCanNow: "choisir des codes NAICS pour votre entreprise et vérifier si vous comptez comme petite entreprise pour chacun."
        },
        {
          title: "Certifications de la SBA et de Californie",
          minutes: 6,
          goal: "Décider à quelles certifications fédérales et californiennes votre entreprise pourrait avoir droit.",
          text: [
            "Les certifications vous permettent de concourir pour des marchés réservés à certaines petites entreprises. Les certifications fédérales se demandent sur certifications.sba.gov. Chacune a ses règles ; voici les bases, alors vérifiez les pages de la SBA pour la liste complète.",
            "8(a) Business Development : pour les petites entreprises détenues et dirigées à au moins 51 % par des citoyens américains défavorisés sur le plan social et économique, avec des plafonds de patrimoine personnel, de revenus et d'actifs, en général deux ans d'activité, et un programme unique d'une durée maximale de neuf ans. HUBZone : votre siège principal est dans une HUBZone (Historically Underutilized Business Zone, zone économique historiquement défavorisée) et au moins 35 % de vos salariés vivent dans une telle zone. Women-Owned Small Business (WOSB, petite entreprise détenue par des femmes) : détenue et dirigée à au moins 51 % par des femmes citoyennes américaines ; l'État fédéral vise à donner 5 % des montants des marchés aux WOSB. Entreprises détenues par des anciens combattants (VOSB) et par des anciens combattants handicapés du fait de leur service (SDVOSB) : certifiées par le programme VetCert de la SBA depuis 2023.",
            "La Californie a ses propres certifications, délivrées par l'Office of Small Business and DVBE Services du Department of General Services (DGS, département des services généraux), à demander dans Cal eProcure. Small Business (SB) : entreprise indépendante, siège principal en Californie et, avec ses sociétés liées, 100 salariés ou moins et un chiffre d'affaires brut annuel moyen de $19 million (19 millions de dollars) ou moins (ou un fabricant de 100 salariés ou moins). Disabled Veteran Business Enterprise (DVBE) : détenue et dirigée à au moins 51 % par des anciens combattants handicapés dont le handicap lié au service est d'au moins 10 %.",
            "Beaucoup de villes, de comtés et de districts scolaires reconnaissent aussi les certifications de l'État. Demandez à un APEX Accelerator lesquelles vous conviennent."
          ],
          words: [["8(a)", "un programme de la SBA pour les petites entreprises détenues par des personnes défavorisées sur le plan social et économique."], ["HUBZone", "une Historically Underutilized Business Zone ; les entreprises qui y sont installées peuvent recevoir une aide pour les marchés."], ["WOSB", "Women-Owned Small Business, petite entreprise détenue par des femmes."], ["SDVOSB", "Service-Disabled Veteran-Owned Small Business, petite entreprise détenue par des anciens combattants handicapés du fait de leur service."], ["DVBE", "Disabled Veteran Business Enterprise, une certification de Californie."]],
          slides: [
            { title: "Pourquoi se faire certifier", bullets: ["Concourir pour des marchés réservés à certaines entreprises", "Fédéral : certifications.sba.gov"] },
            { title: "Certifications fédérales", bullets: ["8(a) : propriétaires défavorisés, jusqu'à 9 ans", "HUBZone : siège dans une zone, 35 % du personnel y habite", "WOSB : 51 % détenue par des femmes ; VOSB/SDVOSB : VetCert de la SBA"] },
            { title: "Certifications de Californie", bullets: ["Demande dans Cal eProcure (DGS)", "SB : siège en CA, 100 salariés ou moins, jusqu'à $19M de chiffre d'affaires", "DVBE : 51 % détenue par des anciens combattants handicapés"] },
            { title: "Obtenez une aide gratuite", bullets: ["APEX Accelerators", "Bureaux de district de la SBA", "Vérifiez toutes les règles de chaque programme"] }
          ],
          sources: [
            { name: "SBA : Programme 8(a) Business Development", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
            { name: "SBA : Programme HUBZone", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program" },
            { name: "SBA : Programme Women-Owned Small Business", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contract-program" },
            { name: "SBA : Aide aux marchés pour les anciens combattants (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "DGS de Californie : Demander la certification Small Business et DVBE", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" }
          ],
          tryIt: "Faites un tableau des six certifications de cette leçon (8(a), HUBZone, WOSB, VOSB ou SDVOSB, SB de Californie, DVBE de Californie). Pour chacune, écrivez oui, peut-être ou non pour votre entreprise, et la règle qui décide. Entourez celle que vous étudierez en premier.",
          youCanNow: "nommer les principales certifications de la SBA et de Californie, vérifier celles auxquelles votre entreprise pourrait avoir droit, et savoir où faire la demande."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer à vendre à l'administration",
        questions: [
          { q: "Que recevez-vous quand vous vous inscrivez sur SAM.gov ?", options: ["Un prêt bancaire", "Un Unique Entity ID (UEI)", "Un marché garanti", "Une licence commerciale"], answer: 1, why: "L'inscription sur SAM.gov donne à votre entreprise un Unique Entity ID de 12 caractères." },
          { q: "Une entreprise vous écrit qu'elle renouvellera votre inscription SAM.gov pour $500. Que faites-vous ?", options: ["Payer vite avant l'expiration", "Lui envoyer votre EIN et vos coordonnées bancaires", "Répondre avec votre mot de passe", "L'ignorer et renouveler vous-même gratuitement sur sam.gov"], answer: 3, why: "L'inscription sur SAM.gov est gratuite ; vous n'avez jamais à payer un tiers." },
          { q: "À quelle fréquence devez-vous renouveler votre inscription sur SAM.gov ?", options: ["Tous les 365 jours", "Tous les 10 ans", "Jamais", "Chaque semaine"], answer: 0, why: "SAM.gov dit que vous devez renouveler tous les 365 jours pour rester actif." },
          { q: "Que décrit un code NAICS ?", options: ["Votre compte bancaire", "Votre adresse personnelle", "Le type d'entreprise que vous êtes et ce que vous vendez", "Votre score de crédit"], answer: 2, why: "Les codes NAICS classent les entreprises selon leurs produits ou services." },
          { q: "Votre siège principal est dans une HUBZone et 40 % de vos salariés vivent dans une telle zone. Quelle certification devez-vous étudier ?", options: ["WOSB", "DVBE", "Seulement 8(a)", "HUBZone"], answer: 3, why: "La HUBZone exige un siège principal dans une HUBZone et au moins 35 % des salariés qui vivent dans une telle zone." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Trouver et remporter des marchés",
      lessons: [
        {
          title: "Trouver des appels d'offres",
          minutes: 5,
          goal: "Chercher sur SAM.gov et Cal eProcure des appels d'offres qui correspondent à vos codes NAICS et enregistrer la recherche.",
          text: [
            "Les agences fédérales publient leurs appels d'offres sur SAM.gov. Cherchez dans Contract Opportunities (appels d'offres) par code NAICS, par État et par type de marché réservé, comme petite entreprise, 8(a), HUBZone, WOSB ou SDVOSB. Enregistrez votre recherche pour recevoir les nouveaux résultats par e-mail.",
            "Les agences de l'État de Californie publient leurs appels d'offres sur Cal eProcure (caleprocure.ca.gov). Inscrivez-vous, ajoutez à votre profil des mots-clés et des codes produits UNSPSC, et activez les notifications. Cal eProcure montre aussi ce que les départements ont acheté avant et à quels prix, ce qui vous aide à fixer les vôtres.",
            "Vous n'avez pas besoin de remporter d'abord un gros marché. Beaucoup de petites entreprises commencent comme sous-traitants de grandes entreprises titulaires (prime contractors). Les départements de Californie ont des SB/DVBE Advocates (référents pour les petites entreprises et les DVBE) qui aident les entreprises certifiées, et les APEX Accelerators vous aident gratuitement à trouver des appels d'offres.",
            "Cherchez des appels d'offres qui correspondent à ce que vous faites déjà bien, dans une zone que vous pouvez servir, et d'une taille que vous pouvez gérer."
          ],
          steps: ["Sur SAM.gov, cherchez dans Contract Opportunities par votre code NAICS et votre État.", "Filtrez par les marchés réservés auxquels vous avez droit.", "Enregistrez la recherche pour recevoir les nouveaux résultats par e-mail.", "Inscrivez-vous sur Cal eProcure et ajoutez des mots-clés et des codes UNSPSC pour les notifications.", "Contactez un APEX Accelerator ou un SB/DVBE Advocate pour avoir des pistes."],
          words: [["Appel d'offres (contract opportunity)", "un avis publié qui dit que l'administration veut acheter quelque chose."], ["Titulaire du marché (prime contractor)", "l'entreprise qui a signé le marché avec l'administration."], ["Sous-traitant", "une entreprise engagée par le titulaire du marché pour faire une partie du travail."], ["UNSPSC", "un code de produits et services utilisé par le système d'appels d'offres de Californie."]],
          slides: [
            { title: "Fédéral : SAM.gov", bullets: ["Cherchez dans Contract Opportunities par NAICS et État", "Filtrez par vos marchés réservés", "Enregistrez la recherche pour des alertes par e-mail"] },
            { title: "Californie : Cal eProcure", bullets: ["Inscrivez-vous et ajoutez mots-clés et codes UNSPSC", "Activez les notifications d'appels d'offres", "Voyez les achats passés et les prix"] },
            { title: "Commencez là où vous pouvez gagner", bullets: ["Soyez sous-traitant d'un titulaire de marché", "Les SB/DVBE Advocates et APEX Accelerators aident", "Visez selon vos compétences, votre zone et votre taille"] }
          ],
          sources: [
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "DGS de Californie : Comment travailler avec l'État de Californie", url: "https://www.dgs.ca.gov/PD/Resources/Page-Content/Procurement-Division-Resources-List-Folder/How-to-do-business-with-the-state-of-California" },
            { name: "Cal eProcure : Trouver des appels d'offres", url: "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx" }
          ],
          tryIt: "Cherchez dans Contract Opportunities sur SAM.gov avec votre code NAICS principal et votre État. Notez deux appels d'offres : l'agence, ce qu'elle veut, le type de marché réservé et la date limite. Enregistrez la recherche.",
          youCanNow: "trouver des appels d'offres fédéraux et californiens qui correspondent à vos codes, et mettre en place des alertes."
        },
        {
          title: "Lire un appel d'offres",
          minutes: 6,
          goal: "Lire les parties clés d'un appel d'offres et décider d'y répondre ou non.",
          text: [
            "Un appel d'offres (solicitation) est la demande d'offres de l'administration. Il peut s'appeler Request for Quote (RFQ, demande de devis), Request for Proposal (RFP, demande de proposition) ou Invitation for Bid (IFB, invitation à soumissionner). Ils peuvent être longs, mais il suffit d'abord de trouver quelques parties clés.",
            "Trouvez ces parties : le statement of work (cahier des charges : le travail demandé), les instructions (quoi envoyer et comment), les critères d'évaluation (comment ils choisiront le gagnant, par exemple le prix le plus bas ou le meilleur rapport qualité-prix), la date et l'heure limites, la date limite pour poser des questions, et le nom du contracting officer (agent responsable du marché). Vérifiez aussi les amendements, c'est-à-dire les changements publiés plus tard.",
            "Puis décidez de répondre ou non. Demandez-vous : Pouvons-nous bien faire ce travail ? Remplissons-nous chaque condition, comme les licences, l'assurance et le type de marché réservé ? Pouvons-nous livrer à temps et à un prix qui reste rentable ? Avons-nous des travaux semblables à montrer ?",
            "Oublier une seule instruction, comme une limite de pages ou un formulaire obligatoire, peut faire rejeter une offre. Faites une liste de contrôle à partir des instructions et cochez chaque point avant d'envoyer. Un assistant d'IA peut vous aider à résumer un long appel d'offres public, mais vous devez lire vous-même les vraies instructions."
          ],
          steps: ["Trouvez le statement of work, les instructions et les critères d'évaluation.", "Notez la date et l'heure limites, la date limite des questions et le contracting officer.", "Vérifiez les amendements.", "Répondez aux quatre questions pour décider de répondre ou non.", "Si vous répondez, transformez les instructions en liste de contrôle et cochez chaque point."],
          words: [["Appel d'offres (solicitation)", "la demande d'offres de l'administration, comme une RFQ, une RFP ou une IFB."], ["Statement of work (cahier des charges)", "la partie qui dit exactement quel travail est demandé."], ["Critères d'évaluation", "la façon dont l'administration choisira le gagnant."], ["Amendement", "un changement d'un appel d'offres publié après sa première parution."], ["Contracting officer", "la personne de l'administration qui a le pouvoir de signer le marché."]],
          slides: [
            { title: "Les noms que vous verrez", bullets: ["RFQ : Request for Quote (demande de devis)", "RFP : Request for Proposal (demande de proposition)", "IFB : Invitation for Bid (invitation à soumissionner)"] },
            { title: "Trouvez d'abord ces parties", bullets: ["Statement of work et instructions", "Critères d'évaluation", "Date limite, date limite des questions, amendements"] },
            { title: "Répondre ou non ?", bullets: ["Pouvons-nous bien le faire ?", "Remplissons-nous chaque condition ?", "Livrer à temps et avec un bénéfice ? Travaux passés ?"] },
            { title: "Suivez chaque instruction", bullets: ["Un seul oubli peut vous faire rejeter", "Faites une liste de contrôle et cochez chaque point"] }
          ],
          tryIt: "Ouvrez un des appels d'offres trouvés à la leçon précédente. Notez le statement of work en une phrase, les critères d'évaluation, la date et l'heure limites, et la date limite des questions. Puis répondez aux quatre questions et décidez de répondre ou non.",
          youCanNow: "trouver les parties clés d'un appel d'offres et décider clairement d'y répondre ou non."
        },
        {
          title: "Rédiger une fiche de capacités",
          minutes: 6,
          goal: "Rédiger une fiche de capacités d'une page qui dit à un acheteur ce que vous faites et comment vous joindre.",
          text: [
            "Une fiche de capacités (capability statement) est un résumé d'une page de votre entreprise pour les acheteurs publics et les titulaires de marchés. Vous l'envoyez quand vous rencontrez des acheteurs, lors d'événements de rencontre, et quand vous vous présentez à un contracting officer ou à un SB/DVBE Advocate.",
            "Elle a quatre parties. Compétences clés : ce que vous faites de mieux, en courtes puces. Références passées : deux ou trois travaux que vous avez faits, avec le type de client, ce que vous avez fait et le résultat. Ce qui vous distingue : ce qui vous rend différent, comme la rapidité, une compétence spéciale ou une présence locale. Données de l'entreprise : nom légal, UEI, code CAGE si vous en avez un, codes NAICS, certifications et coordonnées.",
            "Gardez-la sur une page, facile à parcourir, avec votre logo et vos coordonnées en haut. Utilisez les mots de l'acheteur tirés du statement of work quand ils conviennent. Faites une version pour chaque type d'acheteur si vous vendez des services différents.",
            "Un assistant d'IA peut vous aider à raccourcir ou clarifier vos puces. N'y collez pas de numéros privés comme vos coordonnées bancaires ou votre EIN ; votre UEI et vos codes NAICS peuvent être montrés."
          ],
          steps: ["Écrivez trois à cinq compétences clés en courtes puces.", "Ajoutez deux ou trois références passées : type de client, travail, résultat.", "Écrivez deux ou trois points qui vous distinguent.", "Ajoutez les données de l'entreprise : nom légal, UEI, code CAGE, codes NAICS, certifications et coordonnées.", "Faites tenir le tout sur une page et enregistrez-le en PDF."],
          words: [["Fiche de capacités", "un résumé d'une page de votre entreprise pour les acheteurs publics."], ["Compétences clés", "les choses que votre entreprise fait le mieux."], ["Références passées", "des travaux déjà faits qui montrent que vous savez livrer."], ["Point qui vous distingue", "quelque chose qui rend votre entreprise différente des autres."], ["Code CAGE", "un code qui identifie les entreprises qui travaillent pour l'administration, attribué avec l'inscription sur SAM."]],
          slides: [
            { title: "Ce que c'est", bullets: ["Une page sur votre entreprise", "Pour les acheteurs publics et les titulaires de marchés", "Envoyez-la quand vous vous présentez"] },
            { title: "Quatre parties", bullets: ["Compétences clés", "Références passées", "Ce qui vous distingue", "Données de l'entreprise : UEI, NAICS, certifications, coordonnées"] },
            { title: "Facile à parcourir", bullets: ["Une page, logo et coordonnées en haut", "Utilisez les mots de l'acheteur quand ils conviennent", "Une version pour chaque type d'acheteur"] },
            { title: "Utiliser l'IA pour peaufiner", bullets: ["Raccourcir et clarifier les puces", "Pas de coordonnées bancaires ni d'EIN dans les prompts", "UEI et codes NAICS peuvent être montrés"] }
          ],
          tryIt: "Tâche finale : rédigez votre fiche de capacités d'une page avec les compétences clés, les références passées, ce qui vous distingue et les données de l'entreprise. Puis trouvez un vrai appel d'offres sur SAM.gov ou Cal eProcure qui correspond à un code NAICS de votre fiche, et notez son titre et sa date limite.",
          youCanNow: "rédiger une fiche de capacités d'une page et la faire correspondre à de vrais appels d'offres publics."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Trouver et remporter des marchés",
        questions: [
          { q: "Où les agences fédérales publient-elles leurs appels d'offres ?", options: ["SAM.gov", "Un réseau social", "Le site de votre banque", "Le DMV (service des permis de conduire)"], answer: 0, why: "Les appels d'offres fédéraux sont publiés sur SAM.gov." },
          { q: "Quelle partie d'un appel d'offres vous dit comment le gagnant sera choisi ?", options: ["La page de couverture", "Les critères d'évaluation", "Le logo de l'agence", "Les numéros de page"], answer: 1, why: "Les critères d'évaluation expliquent comment les offres sont jugées." },
          { q: "Vous ne pouvez pas livrer à la date demandée. Quelle est la décision intelligente ?", options: ["Répondre quand même et espérer", "Promettre et être en retard", "Décider de ne pas répondre à celui-ci", "Ignorer la date"], answer: 2, why: "Si vous ne pouvez pas remplir une condition clé, ne pas répondre protège votre réputation." },
          { q: "Qu'est-ce qui a sa place dans la partie données de l'entreprise d'une fiche de capacités ?", options: ["Votre numéro de compte bancaire", "Votre EIN", "Votre mot de passe", "Votre UEI et vos codes NAICS"], answer: 3, why: "L'UEI, les codes NAICS, les certifications et les coordonnées aident les acheteurs à vous trouver et à vous vérifier." },
          { q: "Quelle est une bonne façon de commencer pour une nouvelle petite entreprise ?", options: ["Répondre seulement aux plus gros marchés", "Être sous-traitant d'un titulaire de marché", "Payer quelqu'un pour gagner des marchés à votre place", "Attendre que l'administration vous appelle"], answer: 1, why: "La sous-traitance permet de se constituer des références avec moins de risque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Remporter des marchés publics",
    questions: [
      { q: "Qu'est-ce que SAM.gov ?", options: ["Le site fédéral où les entreprises s'inscrivent pour vendre à l'administration", "Un programme de prêts", "Un formulaire d'impôts", "Un site d'État seulement"], answer: 0, why: "SAM.gov est le System for Award Management." },
      { q: "Combien de caractères a un UEI ?", options: ["4", "12", "20", "100"], answer: 1, why: "Un UEI est un code de 12 caractères, lettres et chiffres." },
      { q: "Avec seulement un UEI et sans inscription complète, vous :", options: ["Pouvez remporter n'importe quel marché", "Êtes payé automatiquement", "Ne pouvez pas demander directement de marchés ou financements fédéraux", "Êtes certifié 8(a)"], answer: 2, why: "SAM.gov dit qu'un UEI seul ne permet pas de demander des marchés ou financements fédéraux." },
      { q: "Combien coûte l'inscription sur SAM.gov ?", options: ["$500", "$99 par an", "Un pourcentage de chaque marché", "Rien ; elle est gratuite"], answer: 3, why: "L'inscription est gratuite ; ignorez les offres payantes pour vous inscrire." },
      { q: "Où devez-vous taper vos coordonnées bancaires pour SAM.gov ?", options: ["Seulement sur SAM.gov", "Dans un assistant d'IA", "Dans un e-mail à un inconnu", "Sur les réseaux sociaux"], answer: 0, why: "Les informations privées vont seulement sur le site officiel." },
      { q: "Où pouvez-vous chercher les codes NAICS ?", options: ["Sur un blog au hasard", "Sur census.gov/naics", "Avec l'appareil photo de votre téléphone", "Dans un SMS"], answer: 1, why: "Le US Census Bureau publie les codes NAICS." },
      { q: "Une norme de taille vous dit :", options: ["La taille de votre logo", "La taille que doit avoir votre bureau", "La taille maximale pour compter comme petite entreprise pour un code NAICS", "Combien de marchés vous pouvez gagner"], answer: 2, why: "Les normes de taille fixent le plafond de petite entreprise pour chaque code NAICS." },
      { q: "Un marché réservé (set-aside), c'est :", options: ["Un remboursement d'impôts", "Un prêt", "Des frais de retard", "Un marché pour lequel seules certaines entreprises peuvent concourir"], answer: 3, why: "Les marchés réservés sont gardés pour des groupes comme les petites entreprises." },
      { q: "Où demande-t-on les certifications fédérales de la SBA comme WOSB et VetCert ?", options: ["Sur certifications.sba.gov", "Seulement auprès d'un consultant payant", "À la bibliothèque de votre comté", "Sur irs.gov"], answer: 0, why: "Les certifications de la SBA se demandent sur certifications.sba.gov." },
      { q: "Quelle certification est pour les entreprises détenues et dirigées à au moins 51 % par des femmes citoyennes américaines ?", options: ["HUBZone", "WOSB", "DVBE", "Seulement 8(a)"], answer: 1, why: "WOSB veut dire Women-Owned Small Business." },
      { q: "Qui certifie aujourd'hui les petites entreprises détenues par des anciens combattants, handicapés ou non, pour les marchés fédéraux ?", options: ["L'IRS", "Votre ville", "La SBA, par VetCert", "Personne"], answer: 2, why: "Le programme VetCert de la SBA a repris la certification en 2023." },
      { q: "Où demande-t-on la certification Small Business et DVBE de Californie ?", options: ["Sur SAM.gov", "Au FBI", "À une banque", "Dans Cal eProcure, par le Department of General Services"], answer: 3, why: "La certification SB et DVBE de Californie se fait dans Cal eProcure." },
      { q: "Une DVBE de Californie doit être détenue à au moins 51 % par :", options: ["Des anciens combattants handicapés", "N'importe quels amis d'anciens combattants", "Des investisseurs d'un autre État", "Des fonctionnaires"], answer: 0, why: "Les DVBE sont détenues et dirigées à au moins 51 % par des anciens combattants handicapés." },
      { q: "Comment recevoir les nouveaux appels d'offres de SAM.gov ?", options: ["Appeler chaque agence tous les jours", "Enregistrer votre recherche pour recevoir les résultats par e-mail", "Payer pour des alertes", "Ce n'est pas possible"], answer: 1, why: "Les recherches enregistrées envoient les nouveaux résultats par e-mail." },
      { q: "Un titulaire de marché (prime contractor) est :", options: ["Un fonctionnaire", "Une banque", "L'entreprise qui a signé le marché avec l'administration", "Une certification"], answer: 2, why: "Le titulaire a le marché et peut engager des sous-traitants." },
      { q: "Qui peut vous aider gratuitement à trouver des appels d'offres ?", options: ["Une entreprise qui fait payer l'inscription", "Un inconnu en ligne", "Personne", "Un APEX Accelerator"], answer: 3, why: "Les APEX Accelerators donnent une aide gratuite pour les marchés publics." },
      { q: "Qu'est-ce qu'un amendement à un appel d'offres ?", options: ["Un changement publié après sa première parution", "Le logo de votre entreprise", "Un formulaire d'impôts", "Un dépôt bancaire"], answer: 0, why: "Les amendements changent un appel d'offres, alors vérifiez-les toujours." },
      { q: "Quelle partie dit exactement quel travail est demandé ?", options: ["La date limite", "Le statement of work", "Le titre du contracting officer", "L'adresse de l'agence"], answer: 1, why: "Le statement of work décrit le travail." },
      { q: "Pourquoi transformer les instructions d'un appel d'offres en liste de contrôle ?", options: ["Pour la rendre plus longue", "Pour sauter des étapes", "Oublier une seule instruction peut faire rejeter votre offre", "SAM.gov l'exige"], answer: 2, why: "Une liste de contrôle vous aide à suivre chaque instruction." },
      { q: "Laquelle est une partie d'une fiche de capacités ?", options: ["Le mot de passe de votre banque", "Seulement votre adresse personnelle", "Un historique de dix pages", "Les références passées"], answer: 3, why: "Les références passées montrent aux acheteurs que vous savez livrer." }
    ]
  }
};
