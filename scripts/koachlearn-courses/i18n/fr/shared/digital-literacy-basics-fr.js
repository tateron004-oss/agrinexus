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
  chapters: [
    {
      name: "Chapitre 1 : Trouver des informations fiables",
      lessons: [
        {
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
          youCanNow: "trouver un moyen gratuit ou peu cher d'aller sur internet et utiliser un ordinateur partagé en sécurité."
        },
        {
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
          youCanNow: "chercher avec des mots-clés, passer les publicités et trouver vite les pages officielles."
        },
        {
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
          youCanNow: "vérifier si une information en ligne est fiable avant d'agir ou de la partager."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver des informations fiables",
        questions: [
          { q: "Où pouvez-vous en général utiliser gratuitement un ordinateur et le Wi-Fi ?", options: ["À une pompe à essence", "Chez un concessionnaire automobile", "Dans le coffre-fort d'une banque", "Dans une bibliothèque publique"], answer: 3, why: "Les bibliothèques publiques proposent en général ordinateurs, Wi-Fi et aide gratuits." },
          { q: "Que fait Lifeline ?", options: ["Il donne des voitures gratuites", "Il paie le loyer", "Il baisse le prix mensuel du téléphone ou d'internet pour les personnes qui y ont droit", "Il vend des téléphones"], answer: 2, why: "Lifeline est une réduction fédérale américaine sur le téléphone ou internet." },
          { q: "Quelle recherche a le plus de chances de trouver vite la bonne page ?", options: ["« aidez-moi s'il vous plaît »", "« Texas renouveler carte identité site:.gov »", "« trucs sur la carte »", "« ? »"], answer: 1, why: "Des mots-clés, l'État et site:.gov réduisent les résultats." },
          { q: "Un premier résultat est marqué « Sponsorisé ». Qu'est-ce que cela veut dire ?", options: ["C'est la page officielle du gouvernement", "C'est toujours gratuit", "Il a été vérifié par le gouvernement", "C'est une publicité payée qui n'est peut-être pas officielle"], answer: 3, why: "Les résultats sponsorisés sont des publicités." },
          { q: "Une publication dit qu'une nouvelle aide se termine ce soir et qu'il faut cliquer maintenant. Que faites-vous d'abord ?", options: ["Cliquer tout de suite", "La partager à tout le monde", "Vérifier sur le site officiel du gouvernement", "Envoyer votre numéro d'identité"], answer: 2, why: "La précipitation est un signal d'alerte ; vérifiez la source officielle." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire ses démarches en ligne en sécurité",
      lessons: [
        {
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
          youCanNow: "remplir correctement un formulaire en ligne et garder la preuve que vous l'avez envoyé."
        },
        {
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
          youCanNow: "numériser un document papier avec un téléphone et l'enregistrer en PDF bien nommé, prêt à envoyer."
        },
        {
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
          youCanNow: "faire une vraie démarche en ligne tout en protégeant vos informations privées et votre réputation."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire ses démarches en ligne en sécurité",
        questions: [
          { q: "Que veut dire en général une étoile (*) à côté d'un champ de formulaire ?", options: ["Il est facultatif", "Il est obligatoire", "C'est un prix", "C'est une publicité"], answer: 1, why: "Une étoile marque un champ obligatoire." },
          { q: "Après avoir envoyé une demande en ligne, vous devez :", options: ["Fermer l'onglet tout de suite", "Garder le numéro de confirmation ou une capture d'écran", "L'envoyer encore cinq fois", "Supprimer votre e-mail"], answer: 1, why: "La confirmation prouve que vous l'avez envoyée." },
          { q: "Quel nom de fichier est le meilleur pour un envoi ?", options: ["IMG_2034.jpg", "scan.pdf", "Jordan-Lee-CV-2026.pdf", "azer.pdf"], answer: 2, why: "Un nom clair aide à le retrouver, vous et la personne qui le lit." },
          { q: "Comment numériser une page avec un téléphone Android ?", options: ["Activer le mode avion", "Appeler la bibliothèque", "Utiliser la calculatrice", "Le bouton Numériser de Google Drive"], answer: 3, why: "Google Drive sur Android a un bouton Numériser." },
          { q: "Un ami vous identifie sur une photo gênante. Qu'est-ce qui peut aider ?", options: ["Ignorer les paramètres de confidentialité", "Publier votre adresse", "Supprimer votre e-mail", "Utiliser les paramètres de confidentialité pour contrôler qui peut vous identifier"], answer: 3, why: "Les paramètres de confidentialité contrôlent qui peut vous identifier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la culture numérique",
    questions: [
      { q: "La culture numérique, c'est :", options: ["Taper très vite", "Avoir le téléphone le plus récent", "Savoir trouver, juger et utiliser l'information et les services en ligne", "Seulement jouer à des jeux"], answer: 2, why: "Il s'agit d'utiliser l'information et les services avec efficacité et en sécurité." },
      { q: "Un bon endroit gratuit pour aller sur internet et demander de l'aide est :", options: ["Un lien reçu par SMS", "Le Wi-Fi d'un inconnu", "Une fenêtre publicitaire", "Une bibliothèque publique"], answer: 3, why: "Les bibliothèques offrent ordinateurs et aide gratuits." },
      { q: "Où vérifier les informations à jour sur Lifeline ?", options: ["Dans n'importe quelle publicité", "Dans un commentaire sur un réseau social", "Sur lifelinesupport.org", "Dans un SMS d'un inconnu"], answer: 2, why: "Lifeline Support est le site officiel du programme." },
      { q: "Sur un ordinateur public, vous ne devez PAS :", options: ["Lire les informations", "Aller sur votre banque", "Chercher des offres d'emploi", "Regarder les horaires de la bibliothèque"], answer: 1, why: "Évitez la banque sur un ordinateur partagé." },
      { q: "Quelle est la meilleure recherche ?", options: ["« J'ai besoin d'aide pour ma carte que j'ai perdue »", "« Ohio BMV remplacer carte identité »", "« carte »", "« aide »"], answer: 1, why: "Des mots-clés avec l'État trouvent vite la page." },
      { q: "Ajouter site:.gov à une recherche :", options: ["Coûte de l'argent", "Ne montre que des publicités", "Efface votre historique", "Ne montre que les sites du gouvernement américain"], answer: 3, why: "Cela limite les résultats aux sites en .gov." },
      { q: "Pourquoi passer les publicités en haut des résultats ?", options: ["Ce sont toujours les sites officiels", "Elles peuvent être fausses ou faire payer des services gratuits", "Elles sont plus lentes", "Il est interdit de cliquer dessus"], answer: 1, why: "Les publicités sont payées et pas toujours officielles." },
      { q: "Quelle question aide à juger un site web ?", options: ["La police est-elle grande ?", "De quelle couleur est-il ?", "Qui l'a fait ?", "Combien a-t-il d'images ?"], answer: 2, why: "Connaître la source vous dit si vous pouvez lui faire confiance." },
      { q: "L'adresse d'un site change une lettre du nom d'une vraie entreprise. C'est probablement :", options: ["Le site officiel", "Un faux site imitateur", "Un site du gouvernement", "Une bibliothèque"], answer: 1, why: "Les adresses imitatrices sont une ruse courante." },
      { q: "Une fausse information diffusée exprès s'appelle :", options: ["Une empreinte", "De la mésinformation", "Une confirmation", "De la désinformation"], answer: 3, why: "La désinformation est volontaire ; la mésinformation est une erreur." },
      { q: "Une photo choquante circule. Avant de la partager, vous devez :", options: ["La partager vite", "Vérifier dans des médias fiables", "Ajouter votre adresse", "L'imprimer"], answer: 1, why: "Elle peut être fausse ou faite par l'IA." },
      { q: "Avant de commencer un long formulaire en ligne, vous devez :", options: ["Rassembler les informations et les documents nécessaires", "Fermer toutes les fenêtres", "Couper internet", "Deviner chaque réponse"], answer: 0, why: "Bien se préparer évite les erreurs et les déconnexions." },
      { q: "Sur un ordinateur, quelle touche passe à la case suivante d'un formulaire ?", options: ["Tab", "Échap", "Suppr", "Impr écran"], answer: 0, why: "Tab passe au champ suivant." },
      { q: "Un numéro de confirmation est :", options: ["Un code qui prouve que votre formulaire a été reçu", "Votre mot de passe", "Votre numéro d'identité", "Une publicité"], answer: 0, why: "Il prouve que le formulaire a été envoyé." },
      { q: "Où pouvez-vous taper votre numéro d'identité en sécurité ?", options: ["Seulement sur le site officiel", "Sur n'importe quel site venu d'une publicité", "En réponse à un SMS", "Dans une publication sur un réseau social"], answer: 0, why: "Les numéros privés ne vont que sur les sites officiels." },
      { q: "Sur un iPhone, quelles applications peuvent numériser un document ?", options: ["Notes ou Fichiers", "Calculatrice", "Horloge", "Météo"], answer: 0, why: "Notes et Fichiers ont une option de numérisation." },
      { q: "Pour une numérisation nette, vous devez :", options: ["Poser la page à plat avec une bonne lumière", "Froisser la page", "Être dans une pièce sombre", "Secouer le téléphone"], answer: 0, why: "Une feuille à plat et une bonne lumière donnent une copie lisible." },
      { q: "Votre empreinte numérique, c'est :", options: ["Tout ce qui vous concerne en ligne", "Votre pointure", "La batterie de votre téléphone", "Un type de mot de passe"], answer: 0, why: "Elle comprend vos publications et ce que les autres publient sur vous." },
      { q: "Pourquoi chercher votre propre nom ?", options: ["Pour voir ce que des employeurs ou des propriétaires pourraient trouver", "Pour gagner de l'argent", "Pour effacer internet", "Pour changer votre mot de passe"], answer: 0, why: "Cela montre votre réputation en ligne." },
      { q: "Que pouvez-vous publier sans risque ?", options: ["Une photo de votre pièce d'identité", "Votre adresse", "Que vous avez terminé une formation", "Vos dates de voyage pendant votre absence"], answer: 2, why: "Les bonnes nouvelles ne posent pas de problème ; papiers, adresse et voyages vous mettent en danger." }
    ]
  }
};
