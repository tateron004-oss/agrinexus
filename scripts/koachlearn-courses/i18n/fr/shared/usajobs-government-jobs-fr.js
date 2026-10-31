"use strict";

// Koach Learn course (French translation of shared/usajobs-government-jobs.js). See scripts/koachlearn-courses/README.md, "Translations".
// The course stays about U.S. federal hiring: USAJOBS, OPM, Login.gov, FTC, form names (DD-214, SF-15, SF-50) and the English labels of the USAJOBS site are kept, with a short explanation.

module.exports = {
  id: "usajobs-government-jobs-fr",
  lang: "fr",
  translationOf: "usajobs-government-jobs",
  category: "Workforce Development",
  name: "Postuler à un emploi fédéral aux États-Unis (USAJOBS)",
  skills: "Trouver votre voie de recrutement, Chercher sur USAJOBS, Lire une offre d'emploi, Rédiger un CV fédéral, Répondre honnêtement au questionnaire, Suivre votre candidature en sécurité",
  outcome: "postuler à un vrai emploi fédéral américain sur USAJOBS : trouver les postes qui vous sont ouverts, lire l'offre, rédiger un CV fédéral qui y correspond, réunir les bons documents, répondre honnêtement au questionnaire et suivre votre candidature sans tomber dans les arnaques.",
  about: [
    "Le gouvernement fédéral des États-Unis embauche dans tous les États et dans beaucoup de métiers : bureau et service client, métiers techniques et entretien, entrepôts, santé, parcs, informatique et plus encore. Presque tous ces postes sont publiés sur USAJOBS (usajobs.gov), le site officiel géré par l'Office of Personnel Management (OPM, l'agence fédérale du personnel). Il est gratuit.",
    "Une candidature fédérale est différente de la plupart des candidatures dans le privé. L'offre est longue, le CV doit être plus détaillé, il y a souvent un questionnaire, et des voies de recrutement spéciales aident les anciens militaires, les conjoints de militaires, les personnes handicapées, les étudiants et les jeunes diplômés. Ce cours vous guide étape par étape avec une vraie offre que vous choisissez.",
    "Ce cours s'adresse aux personnes qui cherchent un emploi, aux anciens militaires, aux personnes qui sortent de prison, aux jeunes adultes et à toute personne qui change de métier. Il vous prépare à postuler ; il ne vous fait pas embaucher et ne décide pas si vous remplissez les conditions. Chaque agence le décide à partir de votre candidature. Chaque leçon dure environ cinq minutes, se termine par un contrôle rapide et une tâche \"Essayez maintenant\", et fait avancer votre dossier de candidature d'entraînement."
  ],
  finalTask: "Préparez un dossier de candidature d'entraînement pour une vraie offre USAJOBS à laquelle vous pourriez postuler : (1) un résumé de l'offre sur une page (qui peut postuler, grade et salaire, date de clôture, missions, expérience spécialisée, documents exigés) ; (2) au moins deux expériences de CV fédéral qui correspondent à l'offre, avec les dates, les heures par semaine, les missions et les résultats ; (3) une liste de tous les documents exigés et de l'endroit où vous les obtiendrez ; (4) un journal de candidature avec le numéro de l'offre, la date de candidature et la prochaine date de vérification.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes et jeunes adultes aux États-Unis qui cherchent un travail stable avec de bons avantages : demandeurs d'emploi, anciens militaires et conjoints de militaires, personnes qui sortent de prison, personnes handicapées, étudiants et jeunes diplômés, et personnes qui changent de métier. Beaucoup n'ont jamais postulé à un emploi fédéral, et certains ont un parcours professionnel court ou irrégulier.",
    startingPoint: "Ils savent utiliser un téléphone ou un ordinateur pour les e-mails et les sites web, et ont déjà postulé à au moins un emploi ordinaire, ou ont un CV simple. La plupart n'ont jamais lu une offre d'emploi fédérale et ne connaissent pas les voies de recrutement, les grades ni l'expérience spécialisée.",
    gap: "Les candidatures fédérales sont souvent rejetées pour des raisons faciles à corriger : postuler à un poste qui ne vous est pas ouvert, un CV sans dates, sans heures ou sans l'expérience demandée par l'offre, un document manquant comme le DD-214, ou des réponses au questionnaire que le CV ne confirme pas. Les apprenants ont besoin d'une méthode soigneuse, étape par étape, et doivent savoir que postuler est gratuit pour éviter les arnaques à l'emploi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 11 à 14 ans) ; les termes fédéraux sont expliqués à chaque fois",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ou de centre pour l'emploi ; un vrai ordinateur est plus pratique pour le CV",
      "Temps : leçons de 4 à 6 minutes ; le dossier final demande une à deux heures de plus",
      "Les règles changent : les limites de pages, les voies de recrutement et les documents exigés viennent de chaque offre et d'USAJOBS, pas de ce cours",
      "Vie privée : aucun numéro de sécurité sociale ni autre numéro privé dans les exercices ou les outils d'IA",
      "Certains apprenants ont un casier judiciaire ou un handicap ; le cours enseigne des réponses honnêtes et où trouver les règles officielles, pas des conseils juridiques"
    ],
    prerequisites: "Savoir utiliser un ordinateur ou un téléphone, et avoir une adresse e-mail. Le cours \"CV, LinkedIn et entretiens\" est utile avant celui-ci, mais pas obligatoire."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Avec une offre d'emploi fédérale et votre propre parcours", action: "repérer les voies de recrutement auxquelles vous pourriez avoir droit et vérifier si un poste vous est ouvert", standard: "en lisant correctement la partie \"This job is open to\" (ce poste est ouvert à)" },
    { id: "O2", condition: "Avec un téléphone ou un ordinateur de bibliothèque", action: "créer un profil USAJOBS et enregistrer une recherche filtrée par lieu, grade de salaire et voie de recrutement", standard: "en utilisant uniquement le site officiel usajobs.gov et sans payer personne" },
    { id: "O3", condition: "Avec une vraie offre d'emploi", action: "noter les missions, les qualifications, le grade, la date de clôture et les documents exigés", standard: "sur une fiche de résumé d'une page, sans qu'aucun de ces cinq éléments ne manque" },
    { id: "O4", condition: "Avec l'expérience spécialisée demandée par une offre", action: "rédiger des expériences de CV fédéral avec les dates, les heures par semaine, les missions et les résultats qui correspondent à l'offre", standard: "en utilisant les mots clés de l'offre et uniquement des informations vraies" },
    { id: "O5", condition: "Avant d'envoyer une candidature", action: "répondre honnêtement au questionnaire et réunir tous les documents exigés par l'offre", standard: "de sorte que chaque réponse élevée soit confirmée par votre CV et qu'aucun document exigé ne manque" },
    { id: "O6", condition: "Après avoir postulé", action: "suivre l'état de votre candidature et repérer les fausses offres d'emploi public", standard: "en tenant un journal daté et sans jamais payer de frais ni donner de numéros privés en dehors d'USAJOBS" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver un emploi fédéral qui vous est ouvert",
      lessons: [
        {
          title: "Le recrutement fédéral et vos voies de recrutement",
          objectives: ["O1"],
          minutes: 5,
          goal: "Repérer les voies de recrutement auxquelles vous pourriez avoir droit et vérifier à qui un poste est ouvert.",
          text: [
            "Les emplois fédéraux sont publiés sur USAJOBS, le site officiel géré par l'Office of Personnel Management (OPM). Chaque annonce s'appelle une offre d'emploi (job announcement). Chaque agence (par exemple le ministère des Anciens combattants, le Forest Service ou l'IRS, le service des impôts) lit les candidatures et décide qui remplit les conditions.",
            "Chaque offre indique qui peut postuler, dans une partie appelée \"This job is open to\" (ce poste est ouvert à). USAJOBS classe les candidats par voies de recrutement (hiring paths). En voici quelques-unes : Open to the public (le public : citoyens et ressortissants américains), Veterans (anciens militaires), Military spouses (conjoints de militaires), Individuals with disabilities (personnes handicapées), Students (étudiants), Recent graduates (jeunes diplômés), Federal employees (employés fédéraux), et National Guard and reserves (Garde nationale et réserve).",
            "Si un poste est ouvert seulement aux employés fédéraux et que vous n'en êtes pas un, votre candidature ne sera pas examinée, même si elle est très bonne. Vérifiez donc toujours cette partie en premier. Certaines voies spéciales ont leurs propres règles : par exemple, les personnes handicapées peuvent postuler au titre du Schedule A avec une lettre qui prouve le handicap, et les anciens militaires peuvent avoir une préférence (veterans' preference).",
            "Le salaire de beaucoup d'emplois de bureau et d'emplois qualifiés suit le General Schedule (GS) : 15 grades, de GS-1 à GS-15, chacun avec 10 échelons, plus une indemnité de résidence (locality pay) qui dépend du lieu de travail. Beaucoup d'emplois manuels et techniques utilisent une autre grille, le Federal Wage System (souvent noté WG)."
          ],
          steps: ["Notez les voies de recrutement qui pourraient vous correspondre : public, ancien militaire, conjoint de militaire, handicap, étudiant, jeune diplômé ou autre.", "Ouvrez une offre et trouvez \"This job is open to\".", "Vérifiez qu'au moins une voie de la liste vous correspond.", "Si aucune ne correspond, laissez ce poste et cherchez-en un autre."],
          words: [["USAJOBS", "le site officiel et gratuit où sont publiés les emplois fédéraux des États-Unis."], ["OPM", "l'Office of Personnel Management, l'agence qui fixe les règles du recrutement fédéral et gère USAJOBS."], ["Offre d'emploi (job announcement)", "l'annonce complète : qui peut postuler, missions, qualifications, salaire et comment postuler."], ["Voie de recrutement (hiring path)", "un groupe de personnes à qui un poste est ouvert, comme le public, les anciens militaires ou les étudiants."], ["Schedule A", "une règle de recrutement qui permet aux agences d'embaucher des personnes handicapées sans la mise en concurrence habituelle."], ["General Schedule (GS)", "la principale grille de salaires fédérale, avec les grades GS-1 à GS-15 et 10 échelons par grade."], ["Indemnité de résidence (locality pay)", "un supplément de salaire qui dépend de la région où se trouve le poste."]],
          slides: [
            { title: "Où trouver les emplois fédéraux", bullets: ["USAJOBS (usajobs.gov), géré par l'OPM", "Chercher et postuler sont gratuits", "Chaque agence décide qui remplit les conditions"] },
            { title: "Les voies de recrutement", bullets: ["Open to the public : citoyens et ressortissants américains", "Anciens militaires, conjoints de militaires, Garde nationale et réserve", "Personnes handicapées (Schedule A), étudiants, jeunes diplômés"] },
            { title: "Vérifiez d'abord \"This job is open to\"", bullets: ["Si aucune voie ne vous correspond, la candidature n'est pas examinée", "Laissez ce poste et trouvez-en un qui vous est ouvert"] },
            { title: "Comment le salaire fédéral est indiqué", bullets: ["GS : grades 1 à 15, 10 échelons chacun, plus l'indemnité de résidence", "Beaucoup d'emplois manuels utilisent le Federal Wage System (WG)"] }
          ],
          sources: [
            { name: "USAJOBS : les voies de recrutement", url: "https://www.usajobs.gov/hiringpath/" },
            { name: "USAJOBS : Open to the public (ouvert au public)", url: "https://www.usajobs.gov/HiringPath/Public" },
            { name: "OPM : General Schedule", url: "https://www.opm.gov/policy-data-oversight/pay-leave/pay-systems/general-schedule/" }
          ],
          tryIt: "Sur papier, notez chaque voie de recrutement qui pourrait vous correspondre et pourquoi (par exemple : \"Open to the public : je suis citoyen américain\" ou \"Veterans : j'ai servi dans l'armée de terre\"). Ensuite, ouvrez usajobs.gov/hiringpath et lisez la page de chaque voie de votre liste.",
          youCanNow: "nommer les voies de recrutement qui peuvent vous correspondre et vérifier si un emploi fédéral vous est ouvert avant d'y passer du temps.",
          quickCheck: [
            { objective: "O1", q: "Une offre indique \"This job is open to : Federal employees - competitive service\" (employés fédéraux). Vous n'avez jamais travaillé pour l'État. Que faites-vous ?", options: ["Vous postulez quand même avec un bon CV", "Vous appelez l'agence pour demander une exception", "Vous laissez ce poste et cherchez un poste ouvert au public", "Vous postulez avec le statut fédéral d'un ami"], answer: 2, why: "Si aucune voie de la liste ne vous correspond, la candidature ne sera pas examinée : mieux vaut passer votre temps sur un poste qui vous est ouvert." },
            { objective: "O1", q: "Quelle voie de recrutement est destinée aux citoyens et ressortissants américains en général ?", options: ["Special authorities (autorités spéciales)", "Senior executives (hauts dirigeants)", "Federal employees (employés fédéraux)", "Open to the public (ouvert au public)"], answer: 3, why: "\"Open to the public\" est la voie destinée aux citoyens et ressortissants américains en général." }
          ]
        },
        {
          title: "Créer votre compte USAJOBS et bien chercher",
          objectives: ["O2"],
          minutes: 5,
          goal: "Créer un profil USAJOBS et enregistrer une recherche filtrée.",
          text: [
            "Allez sur usajobs.gov et choisissez de créer un profil. USAJOBS utilise Login.gov, le service de connexion du gouvernement : vous créez donc un compte Login.gov avec votre e-mail, un mot de passe solide et une deuxième étape de connexion (par exemple un code envoyé sur votre téléphone). Tapez l'adresse vous-même ; ne suivez pas les liens reçus par SMS ou dans des publicités.",
            "Dans votre profil, vous ajoutez vos coordonnées et répondez à des questions sur vous, par exemple si vous êtes un ancien militaire ou un employé fédéral actuel. Ces réponses aident USAJOBS à vous montrer les voies de recrutement qui vous correspondent. C'est aussi dans le profil que sont gardés vos CV et vos documents.",
            "Pour chercher, tapez un mot lié au métier ou à une compétence (par exemple \"maintenance\", \"customer service\" ou \"medical support\") et une ville ou un État. Utilisez ensuite les filtres : lieu, grade de salaire, voie de recrutement, horaires (temps plein ou temps partiel), et travail à distance ou télétravail si vous le souhaitez. Quand les résultats vous conviennent, enregistrez la recherche pour qu'USAJOBS vous envoie les nouvelles offres par e-mail.",
            "USAJOBS est gratuit. Aucun vrai service de l'État ne vous fait payer pour créer un profil, chercher ou postuler."
          ],
          steps: ["Tapez vous-même usajobs.gov dans le navigateur.", "Créez un profil et connectez-vous avec Login.gov.", "Remplissez votre profil, y compris les questions sur le statut d'ancien militaire et le service fédéral.", "Cherchez avec un mot lié au métier et un lieu.", "Ajoutez des filtres : grade de salaire, voie de recrutement, horaires.", "Enregistrez la recherche et activez les alertes par e-mail."],
          words: [["Profil", "la page de votre compte USAJOBS, où sont gardés vos coordonnées, vos CV et vos documents."], ["Login.gov", "le service de connexion du gouvernement américain, utilisé pour USAJOBS et d'autres sites publics."], ["Filtre", "un réglage qui réduit les résultats d'une recherche, comme le lieu ou le grade de salaire."], ["Recherche enregistrée", "une recherche qu'USAJOBS garde en mémoire pour vous envoyer par e-mail les nouvelles offres qui correspondent."], ["Télétravail", "travailler à la maison une partie du temps ou tout le temps."]],
          slides: [
            { title: "Commencez sur le vrai site", bullets: ["Tapez vous-même usajobs.gov", "Connectez-vous avec Login.gov", "C'est gratuit : ne payez jamais pour postuler"] },
            { title: "Remplissez votre profil", bullets: ["Vos coordonnées", "Questions sur le statut d'ancien militaire et d'employé fédéral", "Vos CV et documents sont gardés ici"] },
            { title: "Cherchez, puis filtrez", bullets: ["Un mot lié au métier et un lieu", "Grade de salaire, voie de recrutement, horaires, télétravail", "Enregistrez la recherche et activez les alertes par e-mail"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "Login.gov", url: "https://www.login.gov/" },
            { name: "FTC : arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Créez votre profil USAJOBS (ou connectez-vous). Lancez une recherche pour un type de poste que vous pourriez faire dans votre région, ajoutez au moins deux filtres et enregistrez-la. Notez combien d'offres sont apparues et le titre de trois d'entre elles.",
          youCanNow: "créer un profil USAJOBS en sécurité et enregistrer une recherche qui vous envoie les offres qui vous correspondent.",
          quickCheck: [
            { objective: "O2", q: "Un SMS dit : \"Postulez aux emplois fédéraux ici, 25 $ de frais d'inscription\" avec un lien. Qu'est-ce qui est vrai ?", options: ["C'est une arnaque : USAJOBS est gratuit", "C'est correct si le lien finit par .com", "Les emplois fédéraux demandent un compte payant", "Il faut payer avec une carte cadeau pour être sûr"], answer: 0, why: "Chercher et postuler à un emploi fédéral est toujours gratuit : toute personne qui demande des frais est un escroc." },
            { objective: "O2", q: "Vous voulez qu'USAJOBS vous prévienne des nouveaux postes en entrepôt près de chez vous. Que faites-vous ?", options: ["Vous refaites la recherche toutes les heures", "Vous enregistrez la recherche et activez les alertes par e-mail", "Vous demandez à un ami de surveiller le site", "Vous créez un nouveau profil chaque semaine"], answer: 1, why: "Une recherche enregistrée avec des alertes vous envoie par e-mail les nouvelles offres qui correspondent à vos filtres." }
          ]
        },
        {
          title: "Lire une offre d'emploi fédérale",
          objectives: ["O3"],
          minutes: 6,
          goal: "Noter les missions, les qualifications, le grade, la date de clôture et les documents exigés d'une offre.",
          text: [
            "Les offres fédérales sont longues, mais elles suivent toujours le même plan. En haut : l'intitulé du poste, l'agence, le lieu, le salaire et le grade, les dates d'ouverture et de clôture, et à qui le poste est ouvert. Ensuite viennent des parties comme Duties (missions), Requirements (conditions d'emploi et qualifications), How you will be evaluated (comment vous serez évalué), Required documents (documents exigés) et How to apply (comment postuler).",
            "La partie la plus importante est Qualifications. Beaucoup de postes demandent une expérience spécialisée (specialized experience) : une expérience dans le type de travail du poste, souvent décrite comme un an à un niveau proche du grade juste en dessous. Certains postes acceptent un diplôme à la place, ou un mélange des deux. Votre CV doit montrer clairement cette expérience, sinon on peut juger que vous ne remplissez pas les conditions.",
            "Les conditions d'emploi (conditions of employment) sont des règles à respecter pour être embauché, par exemple la nationalité américaine, réussir une enquête de moralité ou un test de dépistage de drogues, ou avoir un permis de conduire. Lisez-les avant de postuler.",
            "Surveillez la date de clôture. Certaines offres ferment aussi plus tôt quand elles ont reçu un certain nombre de candidatures : postulez donc dès que vous êtes prêt."
          ],
          steps: ["Recopiez l'intitulé du poste, l'agence, le numéro de l'offre, le grade et le salaire.", "Recopiez les dates d'ouverture et de clôture.", "Lisez \"This job is open to\".", "Recopiez l'expérience spécialisée ou le diplôme demandé.", "Notez les principales missions.", "Notez chaque élément de Required documents."],
          words: [["Expérience spécialisée", "une expérience dans le type de travail dont le poste a besoin, au niveau demandé par l'offre."], ["Conditions d'emploi", "des règles à respecter pour être embauché, comme la nationalité ou une enquête de moralité."], ["Date de clôture", "le dernier jour pour postuler. Certains postes ferment plus tôt."], ["Numéro de l'offre", "le code qui identifie une offre ; utilisez-le pour suivre votre candidature."], ["Documents exigés", "les papiers que l'offre vous demande de télécharger, comme un CV, des relevés de notes ou un DD-214."]],
          slides: [
            { title: "Le haut de l'offre", bullets: ["Intitulé, agence, lieu, salaire et grade", "Dates d'ouverture et de clôture", "This job is open to (à qui le poste est ouvert)"] },
            { title: "Les qualifications comptent beaucoup", bullets: ["Expérience spécialisée, diplôme, ou les deux", "Votre CV doit le montrer clairement"] },
            { title: "À lire avant de postuler", bullets: ["Conditions d'emploi : nationalité, enquête de moralité, permis", "Documents exigés : la liste à télécharger"] },
            { title: "Surveillez les dates", bullets: ["Postulez avant la date de clôture", "Certains postes ferment plus tôt après assez de candidatures"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM : questions fréquentes sur le recrutement fédéral", url: "https://www.opm.gov/frequently-asked-questions/employment-faq/federal-hiring/" }
          ],
          tryIt: "Choisissez dans votre recherche enregistrée une vraie offre qui vous est ouverte. Sur une feuille, faites le résumé de l'offre : intitulé, agence, numéro de l'offre, grade et salaire, date de clôture, à qui le poste est ouvert, l'expérience spécialisée avec vos propres mots, trois missions principales et chaque document exigé.",
          youCanNow: "lire une offre d'emploi fédérale et en tirer l'essentiel sur une page.",
          quickCheck: [
            { objective: "O3", q: "Quelle partie indique l'expérience que votre CV doit montrer ?", options: ["How to apply (comment postuler)", "Required documents (documents exigés)", "Next steps (prochaines étapes)", "Qualifications (expérience spécialisée)"], answer: 3, why: "Qualifications décrit l'expérience spécialisée ou le diplôme qu'il faut pour remplir les conditions." },
            { objective: "O3", q: "Une offre ferme vendredi mais indique qu'elle peut fermer plus tôt. Quand devez-vous postuler ?", options: ["Dès que votre candidature est prête", "Vendredi à minuit", "La semaine prochaine", "Seulement après un appel de l'agence"], answer: 0, why: "Les postes qui peuvent fermer plus tôt peuvent arrêter de prendre des candidatures avant la date de clôture : postulez dès que vous êtes prêt." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver un emploi fédéral qui vous est ouvert",
        questions: [
          { objective: "O1", q: "Que devez-vous lire en premier dans une offre pour gagner du temps ?", options: ["L'histoire de l'agence", "\"This job is open to\" (à qui le poste est ouvert)", "La partie sur les avantages", "La photo du bureau"], answer: 1, why: "Si aucune voie de recrutement ne vous correspond, la candidature ne sera pas examinée : vérifiez donc cela en premier." },
          { objective: "O1", q: "Un ancien militaire veut voir quels emplois fédéraux accordent une attention particulière aux anciens militaires. Où peut-il regarder ?", options: ["La voie de recrutement Veterans sur USAJOBS", "Un site d'emploi payant qui fait payer les anciens militaires", "Seulement les panneaux d'affichage des bases militaires", "Des publicités sur les réseaux sociaux qui promettent des emplois fédéraux"], answer: 0, why: "USAJOBS a une voie de recrutement Veterans qui explique la préférence accordée aux anciens militaires et leurs possibilités d'embauche." },
          { objective: "O2", q: "Comment vous connectez-vous à USAJOBS ?", options: ["Seulement avec votre numéro de sécurité sociale", "Avec un code qu'un recruteur vous envoie par SMS", "Avec un compte Login.gov", "Avec un abonnement payant"], answer: 2, why: "USAJOBS utilise Login.gov, le service de connexion du gouvernement." },
          { objective: "O3", q: "Que veut dire \"expérience spécialisée\" dans une offre ?", options: ["N'importe quel emploi que vous avez eu", "Une expérience dans le type de travail du poste, au niveau demandé", "Un diplôme universitaire dans n'importe quelle matière", "Seulement du temps passé en bénévolat"], answer: 1, why: "L'expérience spécialisée est une expérience dans le type de travail dont le poste a besoin, au niveau demandé par l'offre." },
          { objective: "O3", q: "Une offre indique \"réussir une enquête de moralité\" et \"nationalité américaine\". De quoi s'agit-il ?", options: ["De missions", "De documents exigés", "D'avantages", "De conditions d'emploi"], answer: 3, why: "Les règles à respecter pour être embauché sont des conditions d'emploi." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Postuler et suivre sa candidature",
      lessons: [
        {
          title: "Rédiger un CV fédéral qui correspond au poste",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rédiger des expériences de CV fédéral qui montrent l'expérience spécialisée demandée par l'offre.",
          text: [
            "Un CV fédéral doit être plus détaillé que la plupart des CV du privé. Pour chaque emploi, indiquez l'intitulé du poste, l'employeur, les dates de début et de fin (mois et année) et le nombre d'heures travaillées par semaine. Les agences se servent des dates et des heures pour compter votre expérience : un emploi sans ces informations risque de ne pas compter.",
            "Sous chaque emploi, décrivez vos missions et vos résultats avec les mots de l'offre. Si l'offre demande une expérience pour \"tenir les registres d'inventaire\" et que vous l'avez fait, écrivez ces mots et ajoutez des détails : ce que vous avez fait, combien, à quelle fréquence et ce qui s'est amélioré. Par exemple : \"Tenu les registres d'inventaire de 1 200 articles avec un lecteur portable ; erreurs de comptage réduites de moitié en six mois.\"",
            "Comptez toute votre vraie expérience : emplois payés, travail à temps partiel, service militaire, bénévolat et emplois tenus en détention, comme en cuisine, à l'entretien ou comme commis. Soyez honnête ; n'inventez jamais une expérience que vous n'avez pas.",
            "Lisez l'offre et le centre d'aide d'USAJOBS (Help Center) pour connaître les limites de pages ou les règles de présentation, car elles changent. Vous pouvez créer un CV dans USAJOBS ou télécharger le vôtre. Si vous utilisez un outil d'IA pour vous aider à formuler, n'y mettez aucun numéro privé et vérifiez que chaque ligne est vraie."
          ],
          steps: ["Recopiez la phrase sur l'expérience spécialisée de votre fiche de résumé.", "Choisissez les emplois où vous avez fait ce type de travail.", "Pour chaque emploi, écrivez l'intitulé, l'employeur, le mois et l'année de début et de fin, et les heures par semaine.", "Écrivez 3 à 5 lignes de missions et de résultats avec les mots clés de l'offre.", "Ajoutez un chiffre à au moins une ligne : combien, quelle quantité ou à quelle fréquence.", "Vérifiez les limites de pages dans l'offre et lisez tout à voix haute pour la vérité et l'orthographe."],
          words: [["CV fédéral", "un CV pour un emploi public, avec les dates, les heures par semaine et des missions détaillées pour chaque emploi."], ["Mots clés", "les mots importants de l'offre que votre CV doit reprendre quand c'est vrai."], ["Résultat", "ce qui s'est amélioré grâce à votre travail, de préférence avec un chiffre."], ["Heures par semaine", "le nombre d'heures travaillées par semaine dans un emploi ; les agences s'en servent pour compter votre expérience."]],
          slides: [
            { title: "Chaque expérience doit avoir", bullets: ["Intitulé et employeur", "Dates de début et de fin : mois et année", "Heures par semaine", "Missions et résultats"] },
            { title: "Collez à l'offre", bullets: ["Reprenez ses mots clés quand ils sont vrais", "Ajoutez des chiffres : combien, quelle quantité, quelle fréquence"] },
            { title: "Toute vraie expérience compte", bullets: ["Emplois payés et à temps partiel, service militaire", "Bénévolat et travail fait en détention", "N'inventez jamais ce que vous n'avez pas fait"] },
            { title: "Vérifiez les règles", bullets: ["Limites de pages et présentation : lisez l'offre", "L'aide de l'IA est possible ; aucun numéro privé, chaque ligne vraie"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM FedsHireVets (emploi fédéral des anciens militaires)", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "À partir du résumé de votre offre, écrivez deux expériences de CV fédéral sur papier ou dans un document. Chacune doit avoir l'intitulé, l'employeur, les dates (mois et année), les heures par semaine, et 3 à 5 lignes de missions et de résultats qui reprennent les mots clés de l'offre. Soulignez chaque mot clé utilisé.",
          youCanNow: "rédiger des expériences de CV fédéral avec les dates, les heures et l'expérience correspondante dont une agence a besoin pour compter votre travail.",
          quickCheck: [
            { objective: "O4", q: "Quelle expérience est prête pour un CV fédéral ?", options: ["\"Ouvrier d'entrepôt, fait plein de choses\"", "\"Agent d'entrepôt, ABC Supply, 03/2022 à 08/2024, 40 heures par semaine ; tenu les registres d'inventaire de 1 200 articles\"", "\"Travaillé dans un entrepôt pendant un moment\"", "\"Travailleur, esprit d'équipe\""], answer: 1, why: "Elle a l'intitulé, l'employeur, les dates en mois et année, les heures par semaine et une mission avec un chiffre." },
            { objective: "O4", q: "L'offre demande une expérience de \"conduite de chariot élévateur\". Vous en avez conduit un en détention. Que faites-vous ?", options: ["Vous ne le mettez pas, car cela ne compte pas", "Vous dites l'avoir fait dans une entreprise où vous n'avez jamais travaillé", "Vous écrivez seulement \"manutention générale\"", "Vous l'indiquez honnêtement avec les dates, les heures et ce que vous faisiez"], answer: 3, why: "Une vraie expérience de travail compte, y compris en détention, quand elle est indiquée honnêtement avec des détails." }
          ]
        },
        {
          title: "Le questionnaire et vos documents",
          objectives: ["O5"],
          minutes: 5,
          goal: "Répondre honnêtement au questionnaire et réunir tous les documents exigés par l'offre.",
          text: [
            "Beaucoup d'offres ont un questionnaire en ligne. Vous évaluez vous-même votre expérience sur des tâches du poste, par exemple de \"je n'ai aucune expérience\" jusqu'à \"je suis expert ou j'ai formé d'autres personnes\". Vos réponses aident à décider si vous remplissez les conditions et à vous classer.",
            "Répondez honnêtement, et assurez-vous que votre CV confirme chaque réponse élevée. Si vous dites être expert en planification mais que votre CV ne parle jamais de planification, l'évaluateur peut baisser votre note ou juger que vous ne remplissez pas les conditions.",
            "Ensuite, réunissez les documents de la partie Required documents. Les plus courants : votre CV ; vos relevés de notes universitaires si vous vous qualifiez par un diplôme ; pour les anciens militaires, un DD-214 qui montre la nature de leurs états de service, plus un SF-15 ou une lettre de la VA (le ministère des Anciens combattants) s'ils demandent la préférence de 10 points ; une lettre Schedule A prouvant le handicap si vous postulez par cette voie ; et un formulaire du personnel récent (SF-50) pour les employés fédéraux actuels ou anciens. Téléchargez des copies nettes et lisibles.",
            "Certains formulaires posent des questions sur les antécédents judiciaires. La loi fédérale limite en général le moment où les agences peuvent poser ces questions avant une offre d'emploi conditionnelle, avec des exceptions pour certains postes, comme dans les forces de l'ordre. Quand on vous le demande, répondez la vérité : une fausse réponse peut vous faire perdre l'emploi plus tard. Vérifiez les règles actuelles dans l'offre et auprès de l'OPM, et posez vos questions à un programme de réinsertion ou d'aide juridique."
          ],
          steps: ["Lisez lentement chaque question du questionnaire.", "Choisissez la réponse qui est vraie pour vous.", "Pour chaque réponse élevée, trouvez la ligne du CV qui la confirme ; ajoutez-en une si l'expérience est réelle mais absente.", "Notez chaque document exigé à partir de votre fiche de résumé.", "Écrivez où vous obtiendrez chacun (par exemple : DD-214 dans vos papiers ou auprès des Archives nationales, relevés de notes auprès de votre école).", "Téléchargez des copies nettes et vérifiez que chacune s'ouvre."],
          words: [["Questionnaire", "des questions en ligne où vous évaluez vous-même votre expérience sur des tâches du poste."], ["DD-214", "le papier qui montre les dates et la nature des états de service militaire d'un ancien militaire."], ["SF-15", "le formulaire utilisé pour demander la préférence de 10 points accordée aux anciens militaires."], ["Préférence des anciens militaires (veterans' preference)", "une attention supplémentaire dans le recrutement fédéral pour les anciens militaires qui y ont droit."], ["SF-50", "un formulaire du personnel fédéral qui montre le poste, le grade et le statut d'un employé fédéral."], ["Offre d'emploi conditionnelle", "une offre d'emploi qui dépend de la réussite de contrôles finaux, comme une enquête de moralité."]],
          slides: [
            { title: "Le questionnaire", bullets: ["Vous évaluez vous-même votre expérience", "Répondez la vérité", "Votre CV doit confirmer chaque réponse élevée"] },
            { title: "Documents souvent exigés", bullets: ["CV ; relevés de notes si vous vous qualifiez par un diplôme", "Anciens militaires : DD-214 ; SF-15 ou lettre de la VA pour 10 points", "Lettre Schedule A ; SF-50 pour les employés fédéraux"] },
            { title: "Questions sur les antécédents judiciaires", bullets: ["Des règles limitent quand les agences peuvent demander ; il y a des exceptions", "Quand on vous le demande, répondez toujours la vérité", "Vérifiez auprès de l'OPM et d'un programme de réinsertion ou d'aide juridique"] },
            { title: "Avant d'envoyer", bullets: ["Chaque document exigé téléchargé et lisible", "Rien ne manque dans la liste"] }
          ],
          sources: [
            { name: "USAJOBS : voie de recrutement Veterans (DD-214, SF-15, lettre de la VA)", url: "https://www.usajobs.gov/HiringPath/Veterans" },
            { name: "OPM FedsHireVets : préférence des anciens militaires", url: "https://www.opm.gov/fedshirevets/current-veteran-employees/veterans-preference/" },
            { name: "USAJOBS : les voies de recrutement (personnes handicapées)", url: "https://www.usajobs.gov/hiringpath/" }
          ],
          tryIt: "Faites une liste des documents pour votre offre, en trois colonnes : document, où je l'obtiendrai, fait. Ensuite, écrivez trois tâches de type questionnaire à partir des missions du poste, évaluez-vous honnêtement sur chacune, et à côté de chaque note élevée, écrivez la ligne du CV qui la prouve.",
          youCanNow: "répondre honnêtement à un questionnaire fédéral avec votre CV derrière chaque réponse, et réunir tous les documents demandés pour le poste.",
          quickCheck: [
            { objective: "O5", q: "Vous vous dites \"expert\" en planification, mais votre CV ne parle jamais de planification. Que risque-t-il de se passer ?", options: ["L'évaluateur peut baisser votre note ou juger que vous ne remplissez pas les conditions", "Rien ; seul le questionnaire compte", "Vous serez embauché plus vite", "L'agence l'ajoutera elle-même à votre CV"], answer: 0, why: "Les évaluateurs vérifient que votre CV confirme vos réponses au questionnaire." },
            { objective: "O5", q: "Un ancien militaire demande la préférence de 10 points. Que doit-il télécharger, selon USAJOBS ?", options: ["Seulement un CV", "Une lettre d'un ami", "Un DD-214, plus un SF-15 ou une lettre de la VA acceptée", "Une photo de son uniforme"], answer: 2, why: "USAJOBS demande un DD-214, et un SF-15 ou une autre preuve acceptée, comme une lettre de la VA, pour la préférence de 10 points." }
          ]
        },
        {
          title: "Envoyer, suivre et rester en sécurité",
          objectives: ["O6", "O4"],
          minutes: 5,
          goal: "Suivre l'état de votre candidature dans USAJOBS et repérer les fausses offres d'emploi public.",
          text: [
            "Quand vous postulez, USAJOBS vous envoie vers le système de candidature de l'agence pour terminer. Faites bien toutes les étapes et obtenez une confirmation : partir après le questionnaire est une raison fréquente pour laquelle une candidature n'arrive jamais.",
            "Suivez chaque candidature dans votre profil USAJOBS. L'état change pendant que l'agence travaille : par exemple reçue, en cours d'examen, transmise ou non transmise au responsable du recrutement (referred ou not referred), puis retenue ou non retenue. Le recrutement fédéral peut prendre des semaines ou des mois : continuez donc à postuler à d'autres emplois en attendant. Si votre candidature n'est pas transmise, lisez l'avis et corrigez ce point (souvent une expérience, des dates ou des documents manquants) pour la prochaine fois.",
            "Tenez un journal simple : intitulé du poste, numéro de l'offre, agence, date de candidature, état et prochaine date de vérification. Vérifiez environ une fois par semaine.",
            "Méfiez-vous des arnaques. Postuler à un emploi fédéral est toujours gratuit. Soyez prudent avec toute personne qui promet un emploi public contre de l'argent, demande un paiement ou des cartes cadeaux, demande votre numéro de sécurité sociale ou votre numéro de compte bancaire par SMS ou par chat, ou vous fait passer un entretien uniquement par SMS. Les vrais e-mails et sites fédéraux finissent par .gov ou .mil. En cas de doute, tapez vous-même usajobs.gov et vérifiez là."
          ],
          steps: ["Terminez toutes les étapes dans le système de l'agence et gardez la confirmation.", "Commencez votre journal de candidature.", "Vérifiez l'état dans USAJOBS environ une fois par semaine.", "Si la candidature n'est pas transmise, lisez pourquoi et corrigez-le la prochaine fois.", "Ne payez jamais, et n'envoyez jamais de numéros privés par SMS ou par chat."],
          words: [["Transmise (referred)", "votre candidature a été envoyée au responsable du recrutement pour qu'il l'examine."], ["Non transmise (not referred)", "votre candidature n'a pas été envoyée plus loin, souvent parce que l'agence a jugé que vous ne remplissiez pas les conditions ou que d'autres candidats étaient mieux classés."], ["Journal de candidature", "votre propre liste des postes auxquels vous avez postulé, avec les dates et l'état."], [".gov", "la fin d'adresse web utilisée uniquement par les agences du gouvernement américain."]],
          slides: [
            { title: "Terminez la candidature", bullets: ["USAJOBS vous envoie vers le système de l'agence", "Faites toutes les étapes", "Gardez la confirmation"] },
            { title: "Suivez-la", bullets: ["L'état est dans votre profil USAJOBS", "Transmise, non transmise, retenue, non retenue", "Continuez à postuler en attendant"] },
            { title: "Votre journal de candidature", bullets: ["Intitulé, numéro, agence, date de candidature", "État et prochaine date de vérification"] },
            { title: "Signes d'arnaque", bullets: ["Des frais pour obtenir un emploi public ou y postuler", "Cartes cadeaux, numéros bancaires ou de sécurité sociale par SMS", "Entretiens uniquement par SMS ; adresses sans .gov ni .mil"] }
          ],
          sources: [
            { name: "FTC : arnaques à l'emploi (postuler à un emploi fédéral est gratuit)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "USAJOBS", url: "https://www.usajobs.gov/" }
          ],
          tryIt: "Tâche finale : assemblez votre dossier de candidature d'entraînement pour votre offre : le résumé d'une page, au moins deux expériences de CV qui correspondent, la liste des documents et un journal de candidature avec le numéro de l'offre, la date où vous postulerez et la prochaine date de vérification. Ensuite, relisez le dossier avec la grille d'évaluation et corrigez un point faible.",
          youCanNow: "préparer une candidature fédérale complète, la suivre et vous protéger des fausses offres d'emploi.",
          quickCheck: [
            { objective: "O6", q: "Sur les réseaux sociaux, quelqu'un vous propose un emploi garanti dans une agence fédérale contre 200 $ de frais de dossier. De quoi s'agit-il ?", options: ["D'une étape normale du recrutement fédéral", "D'un moyen légal de passer devant les autres", "D'une arnaque : postuler à un emploi fédéral est gratuit", "De frais qu'USAJOBS fait payer aux anciens militaires"], answer: 2, why: "La FTC (l'agence américaine de protection des consommateurs) dit que postuler à un emploi fédéral est toujours gratuit et que toute personne qui fait payer est un escroc." },
            { objective: "O6", q: "Votre état sur USAJOBS indique \"Not referred\" (non transmise). Quelle est la meilleure étape suivante ?", options: ["Arrêter de postuler aux emplois fédéraux", "Lire l'avis et corriger le point faible dans votre prochaine candidature", "Payer quelqu'un pour changer votre état", "Postuler de nouveau à la même offre fermée"], answer: 1, why: "L'avis montre souvent ce qui manquait, pour que vous puissiez le corriger la prochaine fois." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Postuler et suivre sa candidature",
        questions: [
          { objective: "O4", q: "Pourquoi un CV fédéral a-t-il besoin des dates de début et de fin et des heures par semaine ?", options: ["Pour que l'agence puisse compter votre expérience", "Parce que le CV paraît plus long", "Pour montrer votre âge", "Il n'en a pas besoin"], answer: 0, why: "Les agences se servent des dates et des heures pour compter combien d'expérience utile vous avez." },
          { objective: "O4", q: "Comment utiliser les mots clés de l'offre dans votre CV ?", options: ["Copier toute l'offre dans votre CV", "Les éviter pour paraître original", "Les utiliser pour l'expérience que vous avez vraiment", "Les utiliser même pour des choses que vous n'avez jamais faites"], answer: 2, why: "Utiliser les mots clés pour une vraie expérience aide les évaluateurs à relier votre CV au poste." },
          { objective: "O5", q: "Que devez-vous faire avant d'envoyer une candidature ?", options: ["Sauter le questionnaire", "Télécharger seulement les documents que vous avez déjà", "Vous dire \"expert\" partout", "Vérifier que chaque document exigé est téléchargé et lisible"], answer: 3, why: "Un document exigé manquant ou illisible peut bloquer votre candidature." },
          { objective: "O6", q: "Quelle adresse web a le plus de chances d'être celle d'une vraie agence fédérale ?", options: ["fedjobs-hiring.com", "agency-careers.net", "un lien dans un SMS d'un numéro inconnu", "une adresse qui finit par .gov"], answer: 3, why: "Seules les agences du gouvernement américain utilisent des adresses en .gov." },
          { objective: "O6", q: "Que doit contenir votre journal de candidature ?", options: ["Votre numéro de sécurité sociale", "L'intitulé du poste, le numéro de l'offre, la date de candidature, l'état et la prochaine date de vérification", "Votre mot de passe Login.gov", "Seulement le nom de l'agence"], answer: 1, why: "Ces informations vous permettent de suivre chaque candidature sans noter de numéros privés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Postuler à un emploi fédéral aux États-Unis (USAJOBS)",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'USAJOBS ?", options: ["Une agence d'intérim privée", "Un site d'emploi payant", "Le site officiel et gratuit où sont publiés les emplois fédéraux", "Le site d'un syndicat"], answer: 2, why: "USAJOBS est le site d'emploi officiel du gouvernement fédéral, géré par l'OPM, et il est gratuit." },
      { objective: "O1", q: "Maria est citoyenne américaine et n'a jamais travaillé pour l'État. À quels postes peut-elle postuler ?", options: ["Aux postes ouverts au public", "Seulement aux postes ouverts aux employés fédéraux", "Seulement aux postes de hauts dirigeants", "À n'importe quel poste, peu importe à qui il est ouvert"], answer: 0, why: "Les postes \"Open to the public\" sont destinés aux citoyens et ressortissants américains en général." },
      { objective: "O1", q: "Que veut dire GS-7 dans une offre ?", options: ["Un poste dans l'État de Géorgie", "Le grade 7 de la grille de salaires General Schedule", "Sept ans d'expérience demandés", "Sept postes à pourvoir"], answer: 1, why: "GS veut dire General Schedule ; cette grille a les grades 1 à 15, et 7 est le grade." },
      { objective: "O2", q: "Quel est le moyen le plus sûr d'aller sur USAJOBS ?", options: ["Cliquer sur un lien dans le SMS d'un recruteur", "Cliquer sur une publicité qui promet des emplois publics", "Utiliser un lien dans une publication sur les réseaux sociaux", "Taper vous-même usajobs.gov dans le navigateur"], answer: 3, why: "Taper vous-même l'adresse officielle évite les faux sites." },
      { objective: "O2", q: "Quels filtres vous aident à trouver des postes qui vous correspondent ?", options: ["Lieu, grade de salaire et voie de recrutement", "Les couleurs du logo de l'agence", "Le nombre de mots dans l'intitulé", "Aucun ; les filtres cachent les bons postes"], answer: 0, why: "Le lieu, le grade et la voie de recrutement réduisent les résultats aux postes que vous pouvez et voulez faire." },
      { objective: "O2", q: "Pourquoi répondre aux questions sur le statut d'ancien militaire et d'employé fédéral dans votre profil USAJOBS ?", options: ["Pour payer des frais moins élevés", "Pour qu'USAJOBS vous montre les voies de recrutement qui vous correspondent", "Parce qu'elles sont imprimées sur votre CV", "Pour que les recruteurs puissent vous envoyer des SMS"], answer: 1, why: "Les réponses du profil aident USAJOBS à vous relier aux voies de recrutement ; il n'y a aucuns frais." },
      { objective: "O3", q: "Où trouvez-vous la liste des papiers à télécharger ?", options: ["Duties (missions)", "La page d'accueil de l'agence", "Required documents (documents exigés)", "This job is open to (à qui le poste est ouvert)"], answer: 2, why: "La partie Required documents liste ce que vous devez télécharger." },
      { objective: "O3", q: "Lequel de ces éléments est une condition d'emploi ?", options: ["Répondre au téléphone", "Réussir une enquête de moralité", "L'assurance maladie", "Les congés payés"], answer: 1, why: "L'enquête de moralité est une règle à respecter pour être embauché : c'est donc une condition d'emploi." },
      { objective: "O3", q: "Quels sont les cinq éléments de votre fiche de résumé de l'offre ?", options: ["Logo de l'agence, photos, adresse, plan, histoire", "Votre mot de passe, numéro de sécurité sociale, banque, date de naissance, adresse", "Seulement le salaire", "Missions, qualifications, grade, date de clôture, documents exigés"], answer: 3, why: "Ces cinq éléments vous disent ce qu'est le poste, si vous remplissez les conditions, quand postuler et quoi télécharger." },
      { objective: "O3", q: "Une offre indique qu'elle peut fermer plus tôt. Qu'est-ce que cela veut dire ?", options: ["Elle peut arrêter de prendre des candidatures avant la date de clôture", "Elle restera ouverte plus longtemps", "Seuls les anciens militaires peuvent postuler", "Le poste est déjà pourvu"], answer: 0, why: "Certains postes ferment quand ils ont reçu un certain nombre de candidatures." },
      { objective: "O4", q: "Quelle ligne est la plus forte pour un CV fédéral ?", options: ["\"Fait du service client\"", "\"Répondu à environ 60 appels de clients par jour et réglé la plupart dès le premier appel\"", "\"Aime les gens\"", "\"Responsable de trucs\""], answer: 1, why: "Elle montre une vraie mission avec un chiffre, ce qui aide l'évaluateur à voir votre expérience." },
      { objective: "O4", q: "James a travaillé en cuisine pendant deux ans en détention. Le poste demande une expérience en restauration. Que doit-il faire ?", options: ["Ne pas la mettre", "Dire que c'était dans un restaurant", "Écrire seulement \"sans emploi\"", "L'indiquer honnêtement avec les dates, les heures et les missions"], answer: 3, why: "Un vrai travail compte, où qu'il ait été fait, quand il est indiqué honnêtement avec des détails." },
      { objective: "O4", q: "Comment savoir quelles sont les limites de pages ou les règles de présentation d'un CV ?", options: ["Lire l'offre et le centre d'aide d'USAJOBS", "Deviner : plus c'est long, mieux c'est", "Demander à un inconnu en ligne", "Il n'y a jamais de règles"], answer: 0, why: "Les règles peuvent changer : l'offre et USAJOBS sont les endroits où vérifier." },
      { objective: "O4", q: "Quelle information doit figurer dans chaque expérience d'un CV fédéral ?", options: ["L'adresse personnelle de votre chef", "Votre numéro de sécurité sociale", "Les heures travaillées par semaine", "Votre photo"], answer: 2, why: "Les heures par semaine, avec les dates, permettent à l'agence de compter votre expérience." },
      { objective: "O5", q: "Comment devez-vous répondre au questionnaire ?", options: ["Choisir la réponse la plus élevée à chaque fois", "Répondre la vérité, avec votre CV qui confirme chaque réponse élevée", "Sauter les questions difficiles", "Copier les réponses d'un ami"], answer: 1, why: "Les évaluateurs vérifient des réponses honnêtes que votre CV confirme." },
      { objective: "O5", q: "Qui doit télécharger une lettre Schedule A prouvant le handicap ?", options: ["Tout le monde", "Seulement les étudiants", "Seulement les employés fédéraux actuels", "Les personnes qui postulent par la voie Individuals with disabilities (personnes handicapées)"], answer: 3, why: "La lettre Schedule A appuie les candidatures par la voie de recrutement des personnes handicapées." },
      { objective: "O5", q: "Après une offre conditionnelle, un formulaire vous interroge sur vos antécédents judiciaires. Que faites-vous ?", options: ["Vous répondez la vérité", "Vous laissez vide", "Vous donnez une fausse réponse", "Vous demandez à un ami de répondre à votre place"], answer: 0, why: "Une fausse réponse peut vous faire perdre l'emploi plus tard ; des réponses honnêtes sont obligatoires." },
      { objective: "O6", q: "Où vérifiez-vous l'état de votre candidature ?", options: ["Dans un SMS d'un numéro inconnu", "Dans votre profil USAJOBS", "Sur un site de suivi payant", "Seulement en allant à l'agence en personne"], answer: 1, why: "USAJOBS montre l'état de vos candidatures dans votre profil." },
      { objective: "O6", q: "Lequel est un signe de fausse offre d'emploi fédéral ?", options: ["L'e-mail finit par .gov", "L'offre est sur USAJOBS", "On vous demande des frais ou des cartes cadeaux", "L'offre a une date de clôture"], answer: 2, why: "Les vrais emplois fédéraux ne vous font jamais payer ; les frais et les cartes cadeaux sont des signes d'arnaque." },
      { objective: "O6", q: "Vous avez postulé et vous attendez. Quel est le meilleur plan ?", options: ["Arrêter de chercher jusqu'à avoir une réponse", "Appeler l'agence tous les jours", "Payer pour accélérer", "Continuer à postuler ailleurs et vérifier l'état chaque semaine"], answer: 3, why: "Le recrutement fédéral peut prendre des semaines ou des mois : continuez à postuler et vérifiez régulièrement." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 3, 6, 8, 11, 13, 14, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et vérifiez-la de nouveau.",
    criteria: [
      { name: "Poste qui vous est ouvert", objective: "O1", notYet: "Le poste choisi n'est ouvert à aucune voie de recrutement qui correspond à l'apprenant.", meets: "Le poste est ouvert à une voie de recrutement qui correspond, et le résumé la nomme.", exceeds: "Liste aussi d'autres voies que l'apprenant peut utiliser et un autre poste ouvert." },
      { name: "Résumé de l'offre", objective: "O3", notYet: "Il manque au moins un élément : missions, qualifications, grade, date de clôture ou documents exigés.", meets: "Les cinq éléments sont sur une page, avec les mots de l'apprenant.", exceeds: "Note aussi les conditions d'emploi et si le poste peut fermer plus tôt." },
      { name: "Expériences du CV", objective: "O4", notYet: "Les expériences n'ont pas les dates en mois et année, les heures par semaine ou des missions qui correspondent au poste.", meets: "Au moins deux expériences avec intitulé, employeur, dates, heures et missions reprenant les mots clés de l'offre.", exceeds: "Chaque expérience a au moins un résultat chiffré, et toutes les lignes sont vraies et claires." },
      { name: "Documents et questionnaire", objective: "O5", notYet: "Un document exigé manque dans la liste, ou une note élevée n'est confirmée par aucune ligne du CV.", meets: "Chaque document exigé est noté avec l'endroit où l'obtenir, et chaque note élevée est confirmée par une ligne du CV.", exceeds: "Les documents sont déjà réunis et vérifiés comme lisibles." },
      { name: "Suivi et sécurité", objective: "O6", notYet: "Pas de journal, ou le journal ou le dossier contient des numéros privés.", meets: "Un journal avec le numéro de l'offre, les dates, l'état et la prochaine date de vérification ; aucun numéro privé.", exceeds: "L'apprenant peut citer trois signes d'arnaque et expliquer comment vérifier un poste sur usajobs.gov." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui envoient au moins une vraie candidature sur USAJOBS dans les 30 jours (enquête de suivi)",
      "Apprenants transmis à un responsable du recrutement, reçus en entretien ou embauchés dans les 6 mois",
      "Les programmes partenaires (anciens militaires, réinsertion et centres pour l'emploi) signalent moins de candidatures rejetées pour des documents ou des informations manquants"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet ; un ordinateur est plus pratique pour rédiger le CV",
      "Une adresse e-mail et un téléphone pour la deuxième étape de connexion de Login.gov",
      "Papier et stylo, ou un traitement de texte gratuit comme Google Docs ou Microsoft Word en ligne",
      "Un CV existant, et des copies de documents comme un DD-214, des relevés de notes ou une lettre Schedule A si l'apprenant les a",
      "Environ 60 minutes pour les leçons et les contrôles, plus une à deux heures pour le dossier final"
    ],
    facilitatorNotes: [
      "Dans un centre pour l'emploi, un programme pour anciens militaires ou un programme de réinsertion, faites le test de départ ensemble, puis un chapitre par séance avec une vraie offre à l'écran.",
      "Demandez à chaque apprenant de choisir une offre qui lui est vraiment ouverte avant la leçon 3 ; cela évite de refaire le travail.",
      "Mettez les apprenants par deux pour vérifier les dates, les heures et les mots clés des expériences de CV de l'autre.",
      "Ne collectez jamais de numéros de sécurité sociale ni d'autres numéros privés ; les apprenants gardent leurs propres documents.",
      "Les règles sur les limites de pages, les voies de recrutement et les questions sur les antécédents judiciaires changent : vérifiez l'offre, USAJOBS et l'OPM avant chaque groupe, et envoyez les questions juridiques vers un programme d'aide juridique ou de réinsertion.",
      "Notez le dossier final avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
