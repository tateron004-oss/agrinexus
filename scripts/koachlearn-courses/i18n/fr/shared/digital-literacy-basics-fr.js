"use strict";

// Koach Learn course, French translation of shared/digital-literacy-basics.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// US programs and agencies (Lifeline, FCC, SNAP, Medicaid, DMV) are kept and explained.

module.exports = {
  id: "digital-literacy-basics-fr",
  lang: "fr",
  translationOf: "digital-literacy-basics",
  category: "Re-Entry",
  name: "Les bases de la culture numérique",
  skills: "Se connecter gratuitement ou à petit prix, Bien chercher, Vérifier si une information est vraie, Remplir des formulaires en ligne, Numériser et envoyer des documents, Protéger son empreinte numérique",
  outcome: "trouver le vrai site officiel d'un service dont vous avez besoin, vérifier que ses informations sont fiables et y faire une démarche : remplir le formulaire, numériser et envoyer un document avec un nom de fichier clair, et protéger vos informations privées et votre réputation en ligne.",
  about: [
    "La culture numérique, c'est savoir trouver, juger et utiliser l'information sur un téléphone ou un ordinateur, et faire de vraies démarches en ligne : postuler à un emploi, renouveler une pièce d'identité, utiliser des aides sociales ou prendre rendez-vous dans un centre de santé. Beaucoup de services passent d'abord par internet, donc ces compétences ouvrent des portes.",
    "Au chapitre 1, vous apprenez où vous connecter gratuitement ou à petit prix, comment bien chercher et comment distinguer le vrai du faux. Au chapitre 2, vous remplissez des formulaires, numérisez et envoyez des documents, et protégez votre vie privée et votre réputation en ligne.",
    "Aucune expérience n'est nécessaire. Chaque leçon dure environ cinq minutes. Lisez, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez un service dont vous avez besoin, comme le service de l'emploi de votre région, le bureau des permis de conduire, un bureau d'aides sociales ou un centre de santé. Cherchez-le, prouvez que le site est le site officiel et trouvez la page du formulaire ou des démarches. Puis numérisez avec votre téléphone un document d'essai (une lettre ou une page que vous avez écrite, pas une vraie pièce d'identité), enregistrez-le en PDF avec un nom de fichier clair, et écrivez trois lignes sur la façon dont vous avez vérifié le site et protégé vos informations privées.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui doivent faire des démarches en ligne, surtout des personnes qui sortent de prison, mais aussi des chercheurs d'emploi, des seniors et des membres de la communauté qui ont été loin de la technologie ou ne l'ont jamais beaucoup utilisée.",
    startingPoint: "Ils savent utiliser un téléphone pour les appels et les SMS et ont parfois une adresse e-mail simple. Beaucoup n'ont jamais utilisé un moteur de recherche pour trouver un site officiel, jugé si une information est vraie, rempli un long formulaire en ligne, numérisé un document ou vérifié leurs paramètres de confidentialité.",
    gap: "Les emplois, les pièces d'identité, les aides, le logement et les soins se demandent maintenant en ligne, souvent avec des documents à envoyer. Sans ces compétences, on reste bloqué, on paie de faux sites pour des services gratuits, on donne ses numéros d'identité à des escrocs, ou on nuit à ses chances à cause de ce que les autres peuvent trouver sur soi en ligne.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les mots comme moteur de recherche, PDF et empreinte numérique sont expliqués",
      "Appareils : un smartphone, ou un ordinateur gratuit de bibliothèque ou de centre pour l'emploi ; certains apprenants n'ont pas d'appareil à eux",
      "Temps : environ 5 minutes par leçon, environ 60 minutes au total",
      "Coût : seulement des options gratuites, comme le Wi-Fi de la bibliothèque et les applications gratuites de numérisation sur téléphone",
      "Vie privée et règles : les exercices utilisent un document d'exercice, jamais une vraie pièce d'identité ; les apprenants en probation ou en libération conditionnelle respectent les règles sur internet qui s'appliquent à eux"
    ],
    prerequisites: "Aucun. « Les bases de l'ordinateur » ou « Utiliser un smartphone et une tablette » aide les apprenants qui découvrent les appareils."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de l'endroit où vous vivez", action: "trouver un moyen gratuit ou peu cher d'aller sur internet et lister les règles de sécurité pour le Wi-Fi public et les ordinateurs partagés", standard: "en nommant au moins un vrai lieu ou programme et au moins deux règles de sécurité" },
    { id: "O2", condition: "Avec un moteur de recherche", action: "chercher la page officielle d'un service dont vous avez besoin avec des mots clés clairs", standard: "en arrivant sur la page officielle sans passer par les publicités" },
    { id: "O3", condition: "À partir d'un site ou d'une publication", action: "vérifier si l'information est fiable avec les quatre questions", standard: "en répondant qui l'a faite, quand, ce que disent d'autres sources fiables et si elle vous presse" },
    { id: "O4", condition: "À partir d'un formulaire en ligne sur un site officiel", action: "remplir correctement le formulaire et garder la preuve de l'envoi", standard: "avec chaque champ obligatoire rempli et la confirmation enregistrée" },
    { id: "O5", condition: "À partir d'un document papier et d'un téléphone", action: "numériser le document et l'enregistrer en PDF avec un nom de fichier clair", standard: "avec une image à plat et lisible, et un nom qui dit à qui est le document et ce que c'est" },
    { id: "O6", condition: "Avec un moteur de recherche et vos paramètres de réseaux sociaux", action: "vérifier ce que les autres peuvent voir de vous en ligne et renforcer vos paramètres de confidentialité", standard: "en cherchant votre propre nom et en changeant au moins un paramètre de confidentialité" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver des informations fiables",
      lessons: [
        {
          objectives: ["O1"],
          title: "Se connecter gratuitement ou à petit prix",
          minutes: 5,
          goal: "Trouver près de chez vous un moyen gratuit ou peu cher d'aller sur internet.",
          text: [
            "Vous n'avez pas besoin de votre propre ordinateur pour aller sur internet. Les bibliothèques publiques ont en général des ordinateurs gratuits, un Wi-Fi gratuit et du personnel qui aide. Beaucoup de services de l'emploi, de centres de réinsertion et de centres communautaires ont aussi des salles informatiques.",
            "Aux États-Unis, Lifeline est un programme fédéral, supervisé par la FCC (l'autorité américaine des communications), qui donne une réduction mensuelle sur le téléphone ou internet aux personnes qui y ont droit, en général selon leurs revenus ou parce qu'elles reçoivent une aide comme SNAP (aide alimentaire) ou Medicaid (assurance santé publique). Le montant peut changer, donc consultez lifelinesupport.org pour le montant actuel et la façon de faire la demande. Ailleurs, demandez à la bibliothèque s'il existe des offres sociales ou des tarifs réduits.",
            "Sur un Wi-Fi public, restez sur les sites dont l'adresse commence par https et qui montrent un cadenas, et évitez d'aller sur votre banque depuis un ordinateur partagé. Déconnectez-vous toujours et fermez le navigateur quand vous avez fini sur un ordinateur partagé."
          ],
          steps: ["Cherchez la bibliothèque publique la plus proche et regardez ses horaires.", "Demandez au personnel s'il y a des ordinateurs gratuits, du Wi-Fi et des séances d'aide.", "Si le prix pose problème, lisez les informations sur Lifeline sur lifelinesupport.org.", "Sur un ordinateur partagé, déconnectez-vous et fermez le navigateur à la fin."],
          words: [["Wi-Fi", "une connexion internet sans fil."], ["Lifeline", "un programme fédéral américain qui baisse le prix mensuel du téléphone ou d'internet pour les personnes qui y ont droit."], ["https", "le début d'une adresse web qui veut dire que la connexion est chiffrée (brouillée)."]],
          sources: [{ name: "Lifeline Support (USAC, pour la FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Des endroits gratuits pour aller sur internet", bullets: ["Bibliothèques publiques : ordinateurs, Wi-Fi, aide", "Services de l'emploi et centres communautaires"] },
            { title: "Lifeline (États-Unis)", bullets: ["Réduction fédérale sur le téléphone ou internet", "Selon les revenus ou une aide comme SNAP", "Détails à jour sur lifelinesupport.org"] },
            { title: "En sécurité sur un ordinateur partagé", bullets: ["Cherchez https et le cadenas", "Pas de banque sur un ordinateur public", "Déconnectez-vous et fermez le navigateur"] }
          ],
          tryIt: "Trouvez en ligne la bibliothèque publique la plus proche. Notez son adresse, ses horaires et si elle propose une aide informatique gratuite.",
          youCanNow: "trouver un moyen gratuit ou peu cher d'aller sur internet et utiliser un ordinateur partagé en sécurité.",
          quickCheck: [
            { objective: "O1", q: "Quel programme donne une réduction mensuelle sur le téléphone ou internet aux personnes qui y ont droit ?", options: ["Un moteur de recherche", "Lifeline", "Un gestionnaire de mots de passe", "Une application de réseau social"], answer: 1, why: "Lifeline est un programme fédéral américain, supervisé par la FCC, qui baisse le coût du téléphone ou d'internet." },
            { objective: "O1", q: "Vous avez fini de lire vos e-mails sur un ordinateur de bibliothèque. Que faites-vous avant de partir ?", options: ["Laisser le navigateur ouvert pour la personne suivante", "Enregistrer votre mot de passe dans le navigateur", "Vous déconnecter et fermer le navigateur", "Écrire votre mot de passe sur un papier collant"], answer: 2, why: "Se déconnecter et fermer le navigateur empêche la personne suivante d'entrer dans votre compte." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bien chercher",
          minutes: 5,
          goal: "Utiliser un moteur de recherche pour trouver vite une page officielle précise.",
          text: [
            "Un moteur de recherche, comme Google ou Bing, trouve des pages web pour les mots que vous tapez. Utilisez quelques mots-clés clairs, pas toute une histoire : « Californie DMV renouveler carte identité » marche mieux que « comment je récupère ma carte je l'ai perdue l'an dernier ». (Le DMV est le bureau américain des véhicules et des permis.)",
            "Ajoutez votre région ou votre ville pour avoir des résultats locaux. Mettez des mots entre guillemets pour trouver exactement cette expression. Ajoutez « site:.gov » pour ne voir que les sites du gouvernement américain (en France, « site:.gouv.fr »).",
            "Les premiers résultats sont souvent des publicités, marquées « Sponsorisé » ou « Annonce ». Les publicités peuvent être fausses ou faire payer quelque chose qui est gratuit sur le site officiel. Descendez plus bas jusqu'aux vrais résultats."
          ],
          steps: ["Tapez 3 à 6 mots-clés.", "Ajoutez votre région ou votre ville.", "Ajoutez site:.gov pour les pages du gouvernement.", "Passez les résultats marqués Sponsorisé ou Annonce.", "Ouvrez le résultat et lisez l'adresse web avant de lui faire confiance."],
          words: [["Moteur de recherche", "un site qui trouve des pages web pour les mots que vous tapez, comme Google ou Bing."], ["Mots-clés", "les mots les plus importants pour ce que vous cherchez."], ["Sponsorisé / Annonce", "un résultat payé, pas toujours officiel ni le meilleur."]],
          slides: [
            { title: "Utilisez des mots-clés", bullets: ["« Californie DMV renouveler carte identité »", "Pas une longue histoire"] },
            { title: "Astuces de recherche", bullets: ["Ajoutez votre région ou votre ville", "Des « guillemets » pour une expression exacte", "site:.gov pour les sites du gouvernement américain"] },
            { title: "Passez les publicités", bullets: ["Marquées Sponsorisé ou Annonce", "Elles peuvent faire payer des services gratuits", "Descendez jusqu'aux vrais résultats"] }
          ],
          tryIt: "Cherchez le service de l'emploi de votre région. Essayez une fois avec une longue phrase et une fois avec des mots-clés plus site:.gov (ou le domaine officiel de votre pays). Quelle recherche a trouvé la page officielle le plus vite ?",
          youCanNow: "chercher avec des mots-clés, passer les publicités et trouver vite les pages officielles.",
          quickCheck: [
            { objective: "O2", q: "Que fait le fait de mettre des mots entre guillemets dans une recherche ?", options: ["Cela montre seulement des publicités", "Cela ralentit la recherche", "Cela montre seulement des images", "Cela trouve cette expression exacte"], answer: 3, why: "Les guillemets disent au moteur de recherche de trouver l'expression exacte." },
            { objective: "O2", q: "Vous devez renouveler votre pièce d'identité dans votre État. Quelle recherche tapez-vous ?", options: ["Le nom de votre État, « renouveler pièce d'identité » et site:.gov", "« J'ai perdu ma pièce d'identité l'an dernier et je ne sais pas quoi faire »", "« Identité »", "« Aide »"], answer: 0, why: "Quelques mots clés clairs, votre État et site:.gov mènent à la page officielle." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Est-ce vrai ? Vérifier l'information",
          minutes: 5,
          goal: "Décider si un site ou une publication est fiable avant d'agir.",
          text: [
            "N'importe qui peut publier n'importe quoi en ligne. Avant de faire confiance, posez quatre questions. Qui l'a fait ? Regardez l'adresse web et la page « À propos » ; les sites du gouvernement américain finissent par .gov. Quand a-t-il été écrit ? Les règles et les prix changent. Que disent d'autres sources fiables ? Vérifiez au moins une autre source. Est-ce qu'il essaie de vous presser ou de vous faire peur ? C'est un signal d'alerte.",
            "Méfiez-vous des adresses qui imitent une vraie, comme un site qui ajoute des mots ou change une lettre d'un vrai nom. Méfiez-vous des photos et vidéos créées ou modifiées par l'IA ; si une image semble choquante, cherchez-la dans les médias fiables avant de la partager.",
            "Une fausse information qui circule par erreur s'appelle de la mésinformation. Une fausse information diffusée exprès s'appelle de la désinformation. Ne partagez rien avant de l'avoir vérifié."
          ],
          steps: ["Qui l'a fait ? Lisez l'adresse et la page À propos.", "Quand ? Trouvez la date.", "Qui d'autre le dit ? Vérifiez une autre source fiable.", "Est-ce que cela vous presse ou vous fait peur ? Ralentissez.", "Ne partagez pas avant d'avoir vérifié."],
          words: [["Source", "l'endroit d'où vient une information."], ["Mésinformation", "une fausse information partagée par erreur."], ["Désinformation", "une fausse information diffusée exprès."], ["Site imitateur", "un faux site dont l'adresse est faite pour ressembler à une vraie."]],
          slides: [
            { title: "Quatre questions", bullets: ["Qui l'a fait ?", "Quand a-t-il été écrit ?", "Que disent d'autres sources fiables ?", "Est-ce qu'il me presse ou me fait peur ?"] },
            { title: "Méfiez-vous des faux", bullets: ["Adresses web qui imitent les vraies", "Photos et vidéos faites par l'IA", "Affirmations choquantes sans source"] },
            { title: "Avant de partager", bullets: ["Vérifiez d'abord", "La mésinformation circule par erreur", "La désinformation est diffusée exprès"] }
          ],
          tryIt: "Trouvez une publication ou un article sur une aide, un programme pour l'emploi ou un conseil de santé. Répondez aux quatre questions et décidez : lui faire confiance, vérifier davantage ou l'ignorer.",
          youCanNow: "vérifier si une information en ligne est fiable avant d'agir ou de la partager.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que la mésinformation ?", options: ["Une fausse information qui circule par erreur", "Une vraie information d'un site .gov", "Une fausse information diffusée exprès", "Une publicité en haut d'une recherche"], answer: 0, why: "La mésinformation est une fausse information diffusée par erreur ; diffusée exprès, c'est de la désinformation." },
            { objective: "O3", q: "Un message renvoie vers un site d'emploi dont l'adresse change une lettre du nom d'une entreprise connue. Que faites-vous ?", options: ["Entrer vite vos informations", "Partager le lien avec des amis", "Penser que c'est bon parce que ça se ressemble", "Le traiter comme un faux probable et aller sur le vrai site par un autre chemin"], answer: 3, why: "Les adresses qui imitent un vrai nom sont un signe d'alerte d'un faux site." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver des informations fiables",
        questions: [
          { objective: "O1", q: "Où pouvez-vous en général utiliser gratuitement un ordinateur et le Wi-Fi ?", options: ["À une pompe à essence", "Chez un concessionnaire automobile", "Dans le coffre-fort d'une banque", "Dans une bibliothèque publique"], answer: 3, why: "Les bibliothèques publiques proposent en général ordinateurs, Wi-Fi et aide gratuits." },
          { objective: "O1", q: "Que fait Lifeline ?", options: ["Il donne des voitures gratuites", "Il paie le loyer", "Il baisse le prix mensuel du téléphone ou d'internet pour les personnes qui y ont droit", "Il vend des téléphones"], answer: 2, why: "Lifeline est une réduction fédérale américaine sur le téléphone ou internet." },
          { objective: "O2", q: "Quelle recherche a le plus de chances de trouver vite la bonne page ?", options: ["« aidez-moi s'il vous plaît »", "« Texas renouveler carte identité site:.gov »", "« trucs sur la carte »", "« ? »"], answer: 1, why: "Des mots-clés, l'État et site:.gov réduisent les résultats." },
          { objective: "O2", q: "Un premier résultat est marqué « Sponsorisé ». Qu'est-ce que cela veut dire ?", options: ["C'est la page officielle du gouvernement", "C'est toujours gratuit", "Il a été vérifié par le gouvernement", "C'est une publicité payée qui n'est peut-être pas officielle"], answer: 3, why: "Les résultats sponsorisés sont des publicités." },
          { objective: "O3", q: "Une publication dit qu'une nouvelle aide se termine ce soir et qu'il faut cliquer maintenant. Que faites-vous d'abord ?", options: ["Cliquer tout de suite", "La partager à tout le monde", "Vérifier sur le site officiel du gouvernement", "Envoyer votre numéro d'identité"], answer: 2, why: "La précipitation est un signal d'alerte ; vérifiez la source officielle." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire ses démarches en ligne en sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Remplir des formulaires en ligne",
          minutes: 5,
          goal: "Remplir correctement un formulaire en ligne et garder la preuve de l'envoi.",
          text: [
            "Avant de commencer, rassemblez ce que le formulaire va demander : vos coordonnées, des dates, votre parcours professionnel ou vos adresses passées, et tout document à envoyer. Ayez une adresse e-mail que vous consultez souvent, car la plupart des sites y envoient les confirmations.",
            "Les champs marqués d'une étoile (*) sont obligatoires. Sur un ordinateur, utilisez la touche Tab pour passer à la case suivante. Lisez chaque menu déroulant et chaque case à cocher. Beaucoup de longs formulaires permettent d'enregistrer et de revenir plus tard ; notez où vous reconnecter.",
            "Avant d'appuyer sur Envoyer, relisez chaque page. Après l'envoi, gardez la confirmation : faites une capture d'écran, téléchargez le PDF ou notez le numéro de confirmation. Ne tapez vos numéros d'identité que sur le site officiel, jamais sur un site atteint depuis une publicité ou un SMS."
          ],
          steps: ["Assurez-vous d'être sur le site officiel.", "Rassemblez d'abord les informations et les documents.", "Remplissez les champs obligatoires (*) ; utilisez Tab pour avancer.", "Enregistrez votre progression sur les longs formulaires.", "Relisez chaque page, puis envoyez.", "Gardez le numéro de confirmation ou une capture d'écran."],
          words: [["Champ", "une case d'un formulaire où vous tapez une réponse."], ["Obligatoire (*)", "un champ que vous devez remplir avant de pouvoir envoyer."], ["Numéro de confirmation", "un code qui prouve que votre formulaire a été reçu."], ["Menu déroulant", "une case qui ouvre une liste de choix."]],
          slides: [
            { title: "Avant de commencer", bullets: ["Soyez sur le site officiel", "Rassemblez informations et documents", "Utilisez un e-mail que vous consultez souvent"] },
            { title: "Pendant que vous remplissez", bullets: ["* veut dire obligatoire", "Tab passe à la case suivante", "Enregistrez votre progression sur les longs formulaires"] },
            { title: "Bien terminer", bullets: ["Relisez chaque page", "Envoyez", "Gardez le numéro de confirmation ou une capture d'écran"] }
          ],
          tryIt: "Trouvez un formulaire d'essai ou de contact sur un site officiel, comme le formulaire « Demandez à un bibliothécaire » de votre bibliothèque. Remplissez-le jusqu'au bouton Envoyer sans l'envoyer, et montrez les champs obligatoires.",
          youCanNow: "remplir correctement un formulaire en ligne et garder la preuve que vous l'avez envoyé.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi avoir une adresse e-mail que vous consultez souvent avant de remplir des formulaires ?", options: ["Les formulaires ne s'ouvrent pas sans e-mail", "Cela raccourcit le formulaire", "La plupart des sites envoient les confirmations à votre e-mail", "Cela remplace votre numéro d'identité"], answer: 2, why: "La plupart des sites envoient les confirmations et les nouvelles à votre e-mail." },
            { objective: "O4", q: "Vous arrivez à la dernière page d'une demande d'aide. Que faites-vous avant d'appuyer sur Envoyer ?", options: ["Fermer le navigateur", "Relire chaque page", "Sauter les champs obligatoires", "Commencer une nouvelle demande"], answer: 1, why: "Relire chaque page permet de trouver les erreurs avant l'envoi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Numériser et envoyer des documents",
          minutes: 5,
          goal: "Numériser un document papier avec un téléphone et l'enregistrer en PDF avec un nom clair.",
          text: [
            "Beaucoup de formulaires demandent d'envoyer des documents : un CV, une lettre, un justificatif de domicile. Vous pouvez numériser (scanner) avec un téléphone. Sur un iPhone, les applications Notes et Fichiers ont une option de numérisation. Sur Android, l'application Google Drive a un bouton Numériser. Cherchez une icône d'appareil photo ou de scanner.",
            "Pour une bonne numérisation : posez la feuille à plat sur une surface sombre, avec une bonne lumière, tenez le téléphone bien droit au-dessus et laissez l'application recadrer les bords. Enregistrez-la en PDF.",
            "Nommez le fichier clairement, comme « Jordan-Lee-CV-2026.pdf », et non « IMG_2034 ». N'envoyez vos papiers d'identité ou documents privés que sur des sites officiels, et supprimez les copies des ordinateurs partagés ou de la bibliothèque quand vous avez fini."
          ],
          steps: ["Ouvrez un outil de numérisation : Notes ou Fichiers (iPhone), Google Drive (Android).", "Posez la page à plat avec une bonne lumière.", "Tenez le téléphone bien droit au-dessus et numérisez.", "Enregistrez en PDF avec un nom de fichier clair.", "Envoyez seulement sur le site officiel ; supprimez les copies des ordinateurs partagés."],
          words: [["Numériser (scanner)", "faire une copie numérique claire d'une page papier."], ["Envoyer (téléverser)", "transférer un fichier de votre appareil vers un site web."], ["Nom de fichier", "le nom sous lequel un fichier est enregistré, qui aide à le retrouver."]],
          slides: [
            { title: "Numérisez avec votre téléphone", bullets: ["iPhone : application Notes ou Fichiers", "Android : bouton Numériser de Google Drive"] },
            { title: "Une numérisation nette", bullets: ["Page à plat, surface sombre", "Bonne lumière, téléphone bien droit au-dessus", "Enregistrez en PDF"] },
            { title: "Nommez-le, protégez-le", bullets: ["« Jordan-Lee-CV-2026.pdf », pas « IMG_2034 »", "Documents privés seulement sur des sites officiels", "Supprimez les copies des ordinateurs partagés"] }
          ],
          tryIt: "Numérisez une page d'essai (une lettre que vous avez écrite, pas une vraie pièce d'identité) avec votre téléphone. Enregistrez-la en PDF et donnez-lui un nom de fichier clair.",
          youCanNow: "numériser un document papier avec un téléphone et l'enregistrer en PDF bien nommé, prêt à envoyer.",
          quickCheck: [
            { objective: "O5", q: "Quel nom de fichier est le meilleur pour une lettre à envoyer ?", options: ["IMG_2034", "scan", "document1", "Jordan-Lee-Lettre-Proprietaire-2026.pdf"], answer: 3, why: "Un nom clair dit à qui est le document et ce que c'est." },
            { objective: "O5", q: "Vous avez numérisé un document sur un ordinateur de bibliothèque et vous l'avez envoyé. Que faites-vous ensuite ?", options: ["Le laisser dans le dossier Téléchargements", "Supprimer les copies de l'ordinateur", "Le renommer IMG_1", "L'envoyer par e-mail à toutes vos connaissances"], answer: 1, why: "Supprimez les copies de documents privés des ordinateurs partagés ou de bibliothèque quand vous avez fini." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Votre empreinte numérique et votre vie privée",
          minutes: 5,
          goal: "Vérifier et limiter ce que les autres peuvent voir de vous en ligne.",
          text: [
            "Votre empreinte numérique, c'est tout ce qui vous concerne en ligne : publications, photos, commentaires, et ce que les autres publient sur vous. Les employeurs, les propriétaires et les écoles cherchent souvent le nom d'une personne. Les publications peuvent rester en ligne même après que vous les avez supprimées, car d'autres peuvent les capturer ou les partager.",
            "Cherchez votre propre nom dans un moteur de recherche et regardez ce qui apparaît. Dans chaque réseau social, ouvrez les paramètres et cherchez Confidentialité. Choisissez qui peut voir vos publications, qui peut vous identifier et si des inconnus peuvent vous écrire.",
            "Réfléchissez avant de publier : seriez-vous à l'aise si un futur patron, votre famille ou votre agent de probation ou de libération conditionnelle le voyait ? Ne publiez pas votre adresse, vos projets de voyage, vos papiers d'identité ni rien qui pourrait servir à se faire passer pour vous."
          ],
          steps: ["Cherchez votre nom complet entre guillemets.", "Ouvrez les paramètres de confidentialité de chaque réseau social.", "Limitez qui peut voir vos publications, vous identifier et vous écrire.", "Supprimez ou masquez les publications qu'un employeur ne devrait pas voir.", "Réfléchissez avant chaque nouvelle publication."],
          words: [["Empreinte numérique", "tout ce qui vous concerne en ligne, publié par vous ou par d'autres."], ["Paramètres de confidentialité", "les choix d'une application sur qui peut voir vos informations."], ["Identifier (taguer)", "relier le nom ou le compte d'une personne à une publication ou une photo."]],
          slides: [
            { title: "Votre empreinte numérique", bullets: ["Publications, photos, commentaires", "Ce que les autres publient sur vous", "Les employeurs et les propriétaires regardent"] },
            { title: "Vérifiez-vous", bullets: ["Cherchez votre nom entre guillemets", "Ouvrez Confidentialité dans chaque appli", "Limitez qui vous voit, vous identifie et vous écrit"] },
            { title: "Réfléchissez avant de publier", bullets: ["Un futur patron pourrait-il le voir sans problème ?", "Pas d'adresse, de projets de voyage ni de photos de papiers"] }
          ],
          tryIt: "Tâche finale : trouvez le site officiel d'un service dont vous avez besoin et prouvez qu'il est officiel, trouvez son formulaire ou ses démarches, numérisez une page d'essai en PDF bien nommé, puis cherchez votre propre nom et renforcez un paramètre de confidentialité.",
          youCanNow: "faire une vraie démarche en ligne tout en protégeant vos informations privées et votre réputation.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi une publication peut-elle rester en ligne après que vous l'avez supprimée ?", options: ["D'autres personnes ont pu faire une capture d'écran ou la partager", "La suppression ne marche jamais sur aucune application", "La bibliothèque en garde une copie", "Les moteurs de recherche l'impriment"], answer: 0, why: "D'autres personnes peuvent faire une capture d'écran ou partager une publication avant que vous la supprimiez." },
            { objective: "O6", q: "Des inconnus vous écrivent sans arrêt sur une application de réseau social. Que faites-vous ?", options: ["Publier votre adresse pour qu'ils vous connaissent", "Supprimer votre compte e-mail", "Ouvrir les paramètres de confidentialité de l'application et limiter qui peut vous écrire", "Leur répondre à tous"], answer: 2, why: "Les paramètres de confidentialité vous laissent choisir qui peut vous écrire, voir vos publications et vous identifier." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire ses démarches en ligne en sécurité",
        questions: [
          { objective: "O4", q: "Que veut dire en général une étoile (*) à côté d'un champ de formulaire ?", options: ["Il est facultatif", "Il est obligatoire", "C'est un prix", "C'est une publicité"], answer: 1, why: "Une étoile marque un champ obligatoire." },
          { objective: "O4", q: "Après avoir envoyé une demande en ligne, vous devez :", options: ["Fermer l'onglet tout de suite", "Garder le numéro de confirmation ou une capture d'écran", "L'envoyer encore cinq fois", "Supprimer votre e-mail"], answer: 1, why: "La confirmation prouve que vous l'avez envoyée." },
          { objective: "O5", q: "Quel nom de fichier est le meilleur pour un envoi ?", options: ["IMG_2034.jpg", "scan.pdf", "Jordan-Lee-CV-2026.pdf", "azer.pdf"], answer: 2, why: "Un nom clair aide à le retrouver, vous et la personne qui le lit." },
          { objective: "O5", q: "Comment numériser une page avec un téléphone Android ?", options: ["Activer le mode avion", "Appeler la bibliothèque", "Utiliser la calculatrice", "Le bouton Numériser de Google Drive"], answer: 3, why: "Google Drive sur Android a un bouton Numériser." },
          { objective: "O6", q: "Un ami vous identifie sur une photo gênante. Qu'est-ce qui peut aider ?", options: ["Ignorer les paramètres de confidentialité", "Publier votre adresse", "Supprimer votre e-mail", "Utiliser les paramètres de confidentialité pour contrôler qui peut vous identifier"], answer: 3, why: "Les paramètres de confidentialité contrôlent qui peut vous identifier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la culture numérique",
    questions: [
      { objective: "O3", q: "La culture numérique, c'est :", options: ["Taper très vite", "Avoir le téléphone le plus récent", "Savoir trouver, juger et utiliser l'information et les services en ligne", "Seulement jouer à des jeux"], answer: 2, why: "Il s'agit d'utiliser l'information et les services avec efficacité et en sécurité." },
      { objective: "O1", q: "Un bon endroit gratuit pour aller sur internet et demander de l'aide est :", options: ["Un lien reçu par SMS", "Le Wi-Fi d'un inconnu", "Une fenêtre publicitaire", "Une bibliothèque publique"], answer: 3, why: "Les bibliothèques offrent ordinateurs et aide gratuits." },
      { objective: "O1", q: "Où vérifier les informations à jour sur Lifeline ?", options: ["Dans n'importe quelle publicité", "Dans un commentaire sur un réseau social", "Sur lifelinesupport.org", "Dans un SMS d'un inconnu"], answer: 2, why: "Lifeline Support est le site officiel du programme." },
      { objective: "O1", q: "Sur un ordinateur public, vous ne devez PAS :", options: ["Lire les informations", "Aller sur votre banque", "Chercher des offres d'emploi", "Regarder les horaires de la bibliothèque"], answer: 1, why: "Évitez la banque sur un ordinateur partagé." },
      { objective: "O2", q: "Quelle est la meilleure recherche ?", options: ["« J'ai besoin d'aide pour ma carte que j'ai perdue »", "« Ohio BMV remplacer carte identité »", "« carte »", "« aide »"], answer: 1, why: "Des mots-clés avec l'État trouvent vite la page." },
      { objective: "O2", q: "Ajouter site:.gov à une recherche :", options: ["Coûte de l'argent", "Ne montre que des publicités", "Efface votre historique", "Ne montre que les sites du gouvernement américain"], answer: 3, why: "Cela limite les résultats aux sites en .gov." },
      { objective: "O2", q: "Pourquoi passer les publicités en haut des résultats ?", options: ["Ce sont toujours les sites officiels", "Elles peuvent être fausses ou faire payer des services gratuits", "Elles sont plus lentes", "Il est interdit de cliquer dessus"], answer: 1, why: "Les publicités sont payées et pas toujours officielles." },
      { objective: "O3", q: "Quelle question aide à juger un site web ?", options: ["La police est-elle grande ?", "De quelle couleur est-il ?", "Qui l'a fait ?", "Combien a-t-il d'images ?"], answer: 2, why: "Connaître la source vous dit si vous pouvez lui faire confiance." },
      { objective: "O3", q: "L'adresse d'un site change une lettre du nom d'une vraie entreprise. C'est probablement :", options: ["Le site officiel", "Un faux site imitateur", "Un site du gouvernement", "Une bibliothèque"], answer: 1, why: "Les adresses imitatrices sont une ruse courante." },
      { objective: "O3", q: "Une fausse information diffusée exprès s'appelle :", options: ["Une empreinte", "De la mésinformation", "Une confirmation", "De la désinformation"], answer: 3, why: "La désinformation est volontaire ; la mésinformation est une erreur." },
      { objective: "O3", q: "Une photo choquante circule. Avant de la partager, vous devez :", options: ["La partager vite", "Vérifier dans des médias fiables", "Ajouter votre adresse", "L'imprimer"], answer: 1, why: "Elle peut être fausse ou faite par l'IA." },
      { objective: "O4", q: "Avant de commencer un long formulaire en ligne, vous devez :", options: ["Rassembler les informations et les documents nécessaires", "Fermer toutes les fenêtres", "Couper internet", "Deviner chaque réponse"], answer: 0, why: "Bien se préparer évite les erreurs et les déconnexions." },
      { objective: "O4", q: "Sur un ordinateur, quelle touche passe à la case suivante d'un formulaire ?", options: ["Tab", "Échap", "Suppr", "Impr écran"], answer: 0, why: "Tab passe au champ suivant." },
      { objective: "O4", q: "Un numéro de confirmation est :", options: ["Un code qui prouve que votre formulaire a été reçu", "Votre mot de passe", "Votre numéro d'identité", "Une publicité"], answer: 0, why: "Il prouve que le formulaire a été envoyé." },
      { objective: "O4", q: "Où pouvez-vous taper votre numéro d'identité en sécurité ?", options: ["Seulement sur le site officiel", "Sur n'importe quel site venu d'une publicité", "En réponse à un SMS", "Dans une publication sur un réseau social"], answer: 0, why: "Les numéros privés ne vont que sur les sites officiels." },
      { objective: "O5", q: "Sur un iPhone, quelles applications peuvent numériser un document ?", options: ["Notes ou Fichiers", "Calculatrice", "Horloge", "Météo"], answer: 0, why: "Notes et Fichiers ont une option de numérisation." },
      { objective: "O5", q: "Pour une numérisation nette, vous devez :", options: ["Poser la page à plat avec une bonne lumière", "Froisser la page", "Être dans une pièce sombre", "Secouer le téléphone"], answer: 0, why: "Une feuille à plat et une bonne lumière donnent une copie lisible." },
      { objective: "O6", q: "Votre empreinte numérique, c'est :", options: ["Tout ce qui vous concerne en ligne", "Votre pointure", "La batterie de votre téléphone", "Un type de mot de passe"], answer: 0, why: "Elle comprend vos publications et ce que les autres publient sur vous." },
      { objective: "O6", q: "Pourquoi chercher votre propre nom ?", options: ["Pour voir ce que des employeurs ou des propriétaires pourraient trouver", "Pour gagner de l'argent", "Pour effacer internet", "Pour changer votre mot de passe"], answer: 0, why: "Cela montre votre réputation en ligne." },
      { objective: "O6", q: "Que pouvez-vous publier sans risque ?", options: ["Une photo de votre pièce d'identité", "Votre adresse", "Que vous avez terminé une formation", "Vos dates de voyage pendant votre absence"], answer: 2, why: "Les bonnes nouvelles ne posent pas de problème ; papiers, adresse et voyages vous mettent en danger." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Trouver le site officiel",
        objective: "O2",
        notYet: "Le site trouvé est une publicité, une imitation ou n'est pas le bon service.",
        meets: "Le site officiel du service est trouvé par une recherche, sans passer par les publicités.",
        exceeds: "Trouve aussi la page exacte avec le formulaire ou les étapes en quelques clics."
      },
      {
        name: "Vérifier le site",
        objective: "O3",
        notYet: "Aucune raison n'est donnée pour faire confiance au site.",
        meets: "Montre comment le site a été vérifié, par exemple une adresse .gov et la page « À propos ».",
        exceeds: "Vérifie aussi une deuxième source fiable ou la date de mise à jour de la page."
      },
      {
        name: "Numérisation et nom du fichier",
        objective: "O5",
        notYet: "L'image est floue ou coupée, ou le fichier s'appelle par exemple IMG_2034.",
        meets: "Un PDF net d'un document d'exercice avec un nom de fichier clair.",
        exceeds: "L'image est bien recadrée et les copies sont supprimées de tout ordinateur partagé."
      },
      {
        name: "Protéger les informations privées",
        objective: "O6",
        notYet: "Une vraie pièce d'identité a été numérisée, ou les trois lignes ne disent rien sur la vie privée.",
        meets: "Trois lignes expliquent comment le site a été vérifié et comment les informations privées ont été protégées.",
        exceeds: "Nomme aussi un paramètre de confidentialité vérifié ou modifié sur une application de réseau social."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille de l'exercice final",
      "Apprenants qui disent avoir fait une vraie demande en ligne, par exemple pour un emploi, une pièce d'identité ou une aide, dans les 30 jours après le cours (enquête de suivi)",
      "Apprenants qui disent avoir évité un faux site, une arnaque ou une fausse publication parce qu'ils l'ont vérifié",
      "Apprenants qui suivent ensuite un autre cours, comme « L'e-mail et la communication en ligne » ou un cours de recherche d'emploi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec un appareil photo, ou un ordinateur de bibliothèque ou de centre pour l'emploi avec internet",
      "Une adresse e-mail gratuite que l'apprenant consulte souvent",
      "Un document d'exercice à numériser, comme une lettre ou une page écrite par l'apprenant (jamais une vraie pièce d'identité)",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Beaucoup d'apprenants n'ont pas d'appareil ; faites le cours dans une bibliothèque ou une salle informatique, ou mettez les apprenants en binôme pour que chaque binôme ait un téléphone.",
      "En classe, utilisez seulement des documents d'exercice pour numériser et envoyer, et rappelez aux apprenants de supprimer les copies des ordinateurs partagés.",
      "Rappelez aux apprenants en probation ou en libération conditionnelle de respecter les règles sur internet ou les réseaux sociaux de leurs conditions avant de modifier des comptes.",
      "Apportez des captures d'écran d'une vraie page de recherche avec des publicités pour que les apprenants s'exercent à distinguer les publicités des vrais résultats.",
      "Montrez aux apprenants où se trouvent les ordinateurs et le Wi-Fi gratuits les plus proches, et comment demander de l'aide au personnel de la bibliothèque."
    ]
  }
};
