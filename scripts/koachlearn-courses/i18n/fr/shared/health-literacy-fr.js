"use strict";

// Koach Learn course (French translation of shared/health-literacy.js). See scripts/koachlearn-courses/README.md, "Translations".
// Teaches skills, not medical advice, as in the English: always says to check with a doctor or pharmacist. US sources and numbers kept; readers elsewhere are pointed to their own clinic, pharmacist or insurer.

module.exports = {
  id: "health-literacy-fr",
  lang: "fr",
  translationOf: "health-literacy",
  category: "Seniors and Technology",
  name: "Littératie en santé : comprendre vos soins",
  skills: "Trouver des informations de santé fiables, Préparer une consultation médicale, Poser des questions et vérifier que vous avez compris, Lire l'étiquette d'un médicament et tenir une liste de médicaments, Utiliser les résultats d'analyses et les portails patients, Comprendre les mots de l'assurance santé",
  outcome: "préparer une consultation avec une note sur votre symptôme, une liste de questions et une liste de médicaments, poser des questions jusqu'à bien comprendre, redire le plan avec vos propres mots, et trouver des réponses fiables et la bonne personne à qui poser vos questions sur les médicaments, les résultats d'analyses et les coûts.",
  about: [
    "La littératie en santé, c'est être capable de trouver, de comprendre et d'utiliser des informations de santé pour prendre des décisions pour vous et pour les personnes dont vous vous occupez. C'est une compétence que tout le monde peut apprendre. Même les médecins sont perdus devant des mots médicaux hors de leur spécialité.",
    "Ce cours est pour tout le monde : les personnes âgées qui prennent plusieurs médicaments, les jeunes qui vont seuls chez le médecin pour la première fois, les anciens combattants suivis par le VA (le ministère américain des Anciens combattants), les travailleurs qui choisissent une assurance santé, les personnes qui sortent de prison et doivent reprendre leurs soins, et toute personne qui est sortie d'une consultation en se disant : \"Qu'est-ce qu'on vient de me dire ?\"",
    "Vous apprendrez à repérer des informations de santé fiables, à préparer une consultation, à poser de bonnes questions, à lire l'étiquette d'un médicament, à utiliser un portail patient et à comprendre les mots de l'assurance. Les exemples de services et de numéros viennent des États-Unis ; ailleurs, les mêmes compétences s'appliquent avec votre centre de santé, votre pharmacien et votre assurance. Ce cours enseigne des compétences ; il ne donne pas de conseils médicaux. Vérifiez toujours les décisions sur votre santé avec votre médecin, votre infirmier ou votre pharmacien.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez une fiche de consultation d'une page pour un vrai rendez-vous ou un rendez-vous d'entraînement : une courte note sur votre symptôme ou votre inquiétude (quand cela a commencé, ce qui l'améliore ou l'aggrave), vos trois questions principales, et une liste complète de médicaments (sur ordonnance, sans ordonnance, vitamines, compléments alimentaires et allergies). Après la consultation (ou un entraînement avec un ami), écrivez le plan avec vos propres mots : quel est le problème, ce que vous devez faire, et pourquoi.",
  chapters: [
    {
      name: "Chapitre 1 : Se préparer et parler avec son soignant",
      lessons: [
        {
          title: "Trouver des informations de santé fiables",
          minutes: 5,
          goal: "Distinguer une source de santé fiable d'une source qui ne l'est pas.",
          text: [
            "Les informations de santé sont partout : sites web, réseaux sociaux, publicités à la télévision, amis et chatbots d'IA. Certaines sont excellentes. D'autres sont anciennes, fausses ou cherchent à vous vendre quelque chose.",
            "De bons endroits gratuits pour commencer aux États-Unis : MedlinePlus (medlineplus.gov), de la Bibliothèque nationale de médecine, les CDC (cdc.gov), l'agence de santé publique, et les National Institutes of Health (nih.gov), les instituts nationaux de santé. Les sites officiels du gouvernement américain finissent par .gov. Les hôpitaux, les universités et les organisations médicales connues sont souvent fiables aussi. Ailleurs, cherchez le site du ministère de la Santé de votre pays ou celui de l'Organisation mondiale de la santé (OMS).",
            "Posez quatre questions sur chaque source : Qui l'a écrite ? Quand a-t-elle été mise à jour ? Cherche-t-elle à me vendre quelque chose ? Dit-elle la même chose que d'autres sources fiables ? Un assistant d'IA peut expliquer un mot médical difficile avec des mots simples, mais il peut se tromper. Vérifiez ce qu'il dit sur un site fiable, et ne tapez jamais votre nom complet, vos numéros de pièce d'identité ou d'assurance. Votre médecin ou votre pharmacien a le dernier mot pour votre cas."
          ],
          steps: ["Cherchez qui a fait la page.", "Cherchez la date de mise à jour.", "Vérifiez si elle vend quelque chose.", "Comparez avec MedlinePlus ou un autre site officiel en .gov.", "Apportez vos questions à votre médecin ou à votre pharmacien."],
          words: [["Littératie en santé", "la capacité de trouver, de comprendre et d'utiliser des informations de santé pour prendre des décisions."], ["MedlinePlus", "un site gratuit d'informations de santé du gouvernement américain, fait par la Bibliothèque nationale de médecine."]],
          slides: [
            { title: "La littératie en santé est une compétence", bullets: ["Trouver des informations de santé", "Les comprendre", "Les utiliser pour décider"] },
            { title: "Des endroits fiables pour commencer", bullets: ["medlineplus.gov", "cdc.gov et nih.gov", "Les sites officiels américains finissent par .gov"] },
            { title: "Quatre questions pour chaque source", bullets: ["Qui l'a écrite ?", "Quand a-t-elle été mise à jour ?", "Vend-elle quelque chose ?", "Dit-elle la même chose que d'autres sources fiables ?"] },
            { title: "L'IA peut expliquer, pas décider", bullets: ["Utilisez-la pour expliquer des mots difficiles", "Vérifiez sur un site fiable", "Votre médecin ou pharmacien a le dernier mot"] }
          ],
          sources: [
            { name: "MedlinePlus : Littératie en santé (en anglais)", url: "https://medlineplus.gov/healthliteracy.html" },
            { name: "CDC : Qu'est-ce que la littératie en santé ? (en anglais)", url: "https://www.cdc.gov/health-literacy/php/about/index.html" }
          ],
          tryIt: "Choisissez un mot de santé que vous avez déjà entendu mais que vous ne comprenez pas bien (par exemple tension artérielle, cholestérol ou asthme). Cherchez-le sur medlineplus.gov ou sur le site du ministère de la Santé de votre pays, et écrivez sa définition en une phrase avec vos propres mots.",
          youCanNow: "trouver des informations de santé sur des sites fiables et vérifier n'importe quelle source avec quatre questions simples."
        },
        {
          title: "Préparer une consultation médicale",
          minutes: 5,
          goal: "Faire une fiche de consultation avec votre inquiétude, vos questions et votre liste de médicaments.",
          text: [
            "Les consultations sont souvent courtes. Vous préparer à l'avance vous aide à ne rien oublier et aide le soignant à vous comprendre. MedlinePlus conseille d'écrire vos questions, de décrire vos symptômes par écrit, et de lister vos allergies et chaque médicament, plante, vitamine et complément alimentaire que vous prenez.",
            "Pour un symptôme, notez : ce que c'est, quand cela a commencé, à quelle fréquence cela arrive, ce qui l'améliore ou l'aggrave, et ce que vous avez déjà essayé. Mettez vos trois questions principales en premier, pour que les plus importantes reçoivent une réponse.",
            "Vous pouvez venir avec un ami ou un proche de confiance pour écouter et prendre des notes. Si vous avez besoin d'un interprète, demandez-le au cabinet à l'avance. Apportez votre carte d'assurance (ou de Medicare aux États-Unis), une pièce d'identité avec photo et votre liste de médicaments, ou les boîtes elles-mêmes."
          ],
          steps: ["Notez votre inquiétude : quoi, depuis quand, à quelle fréquence, ce qui aide ou aggrave.", "Notez vos trois questions principales.", "Listez chaque médicament, vitamine, complément et allergie.", "Demandez à quelqu'un de vous accompagner si cela vous aide.", "Demandez un interprète à l'avance si vous en avez besoin."],
          words: [["Soignant", "un médecin, un infirmier, un assistant médical ou un autre professionnel qui donne des soins."], ["Symptôme", "un changement que vous remarquez dans votre corps ou votre esprit, comme une douleur, une toux ou de la fatigue."], ["Complément alimentaire", "une vitamine, un minéral, une plante ou un autre produit que vous prenez en plus de votre alimentation."]],
          slides: [
            { title: "Pourquoi se préparer", bullets: ["Les consultations sont courtes", "Vous n'oubliez rien", "Le soignant vous comprend mieux"] },
            { title: "Décrivez votre symptôme", bullets: ["Ce que c'est et quand cela a commencé", "À quelle fréquence", "Ce qui l'améliore ou l'aggrave"] },
            { title: "À apporter", bullets: ["Vos trois questions principales", "Liste de médicaments ou les boîtes", "Carte d'assurance et pièce d'identité"] },
            { title: "Vous n'êtes pas obligé d'y aller seul", bullets: ["Venez avec quelqu'un qui prend des notes", "Demandez un interprète à l'avance"] }
          ],
          sources: [{ name: "MedlinePlus : Parler avec votre médecin (en anglais)", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Commencez votre fiche de consultation. Écrivez une inquiétude réelle ou d'entraînement, avec le moment où elle a commencé et ce qui l'améliore ou l'aggrave, puis vos trois questions principales.",
          youCanNow: "préparer une fiche de consultation avec votre inquiétude, vos questions principales et ce qu'il faut apporter."
        },
        {
          title: "Pendant la consultation : poser des questions et vérifier que vous avez compris",
          minutes: 5,
          goal: "Poser des questions jusqu'à bien comprendre et redire le plan avec vos propres mots.",
          text: [
            "Vous avez le droit de comprendre vos soins. Si le soignant utilise un mot que vous ne connaissez pas, dites : \"Pouvez-vous l'expliquer avec des mots plus simples ?\" S'il parle trop vite, dites : \"Pouvez-vous ralentir ?\" Vous pouvez lui demander d'écrire les consignes.",
            "Trois questions couvrent la plupart des consultations : Quel est mon problème principal ? Qu'est-ce que je dois faire ? Pourquoi est-ce important que je le fasse ? Continuez à poser des questions jusqu'à pouvoir répondre aux trois.",
            "Avant de partir, utilisez la reformulation : redites le plan avec vos propres mots. \"Donc je prends un comprimé chaque matin en mangeant, et je reviens dans deux semaines. Si ma cheville gonfle, je vous appelle.\" Si vous avez oublié quelque chose, le soignant peut corriger tout de suite. Demandez aussi comment joindre le cabinet plus tard et quoi faire si votre état s'aggrave."
          ],
          steps: ["Demandez le sens de tout mot inconnu.", "Posez les trois questions : problème principal, quoi faire, pourquoi.", "Prenez des notes, ou demandez à votre accompagnant de le faire.", "Redites le plan avec vos propres mots (reformulation).", "Demandez comment joindre le cabinet et quoi faire si votre état s'aggrave."],
          words: [["Reformulation", "redire le plan avec vos propres mots pour vérifier que vous l'avez compris (en anglais, teach-back)."], ["Suivi", "une consultation ou un appel plus tard pour voir comment vous allez."]],
          slides: [
            { title: "Vous avez le droit de demander", bullets: ["\"Pouvez-vous l'expliquer plus simplement ?\"", "\"Pouvez-vous ralentir ?\"", "\"Pouvez-vous l'écrire ?\""] },
            { title: "Trois questions clés", bullets: ["Quel est mon problème principal ?", "Qu'est-ce que je dois faire ?", "Pourquoi est-ce important ?"] },
            { title: "La reformulation", bullets: ["Redites le plan avec vos propres mots", "Le soignant corrige ce que vous avez manqué"] },
            { title: "Avant de partir", bullets: ["Comment joindre le cabinet ?", "Que faire si mon état s'aggrave ?"] }
          ],
          sources: [{ name: "MedlinePlus : Parler avec votre médecin (en anglais)", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Faites un jeu de rôle avec un ami ou dites-le à voix haute : votre ami lit une courte consigne de médecin (par exemple \"Prenez ceci deux fois par jour pendant 10 jours et finissez la boîte\"). Posez une question à ce sujet, puis reformulez la consigne avec vos propres mots.",
          youCanNow: "poser des questions claires pendant une consultation et utiliser la reformulation pour vérifier que vous avez compris le plan."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer et parler avec son soignant",
        questions: [
          { q: "Quel site est un endroit fiable pour commencer à chercher des informations de santé ?", options: ["Une publication d'un inconnu sur les réseaux sociaux", "Une publicité pour une pilule miracle", "medlineplus.gov", "Un commentaire au hasard sur un forum"], answer: 2, why: "MedlinePlus est un site de santé gratuit du gouvernement américain, fait par la Bibliothèque nationale de médecine." },
          { q: "Que devez-vous écrire sur un symptôme avant une consultation ?", options: ["Quand il a commencé et ce qui l'améliore ou l'aggrave", "Rien ; le médecin devinera", "Seulement votre couleur préférée", "Votre numéro de compte bancaire"], answer: 0, why: "Des détails clairs sur le symptôme aident le soignant à vous comprendre." },
          { q: "Qu'est-ce qui a sa place dans votre liste de médicaments ?", options: ["Seulement les médicaments sur ordonnance", "Seulement les comprimés pris aujourd'hui", "Rien ; la pharmacie le sait", "Médicaments sur ordonnance et sans ordonnance, vitamines, compléments et allergies"], answer: 3, why: "Tout ce que vous prenez peut compter, y compris les vitamines et les compléments." },
          { q: "Le médecin utilise un mot que vous ne comprenez pas. Que faites-vous ?", options: ["Vous hochez la tête et faites semblant", "Vous lui demandez de l'expliquer avec des mots plus simples", "Vous quittez la consultation", "Vous le cherchez l'année prochaine"], answer: 1, why: "Vous avez le droit de comprendre vos soins ; poser la question est normal." },
          { q: "Qu'est-ce que la reformulation ?", options: ["Apprendre la médecine au médecin", "Demander un remboursement", "Redire le plan avec vos propres mots", "Lire le plan en silence"], answer: 2, why: "La reformulation vérifie que vous avez compris, pour corriger les erreurs tout de suite." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser vos informations de santé",
      lessons: [
        {
          title: "Médicaments : lire l'étiquette et tenir une liste",
          minutes: 5,
          goal: "Lire l'étiquette d'un médicament et tenir à jour une liste de médicaments.",
          text: [
            "Les erreurs de médicaments sont fréquentes et souvent évitables. MedlinePlus conseille de tenir une liste de chaque médicament avec sa dose et le moment où vous le prenez, y compris les produits sans ordonnance, les vitamines, les compléments et les plantes, ainsi que vos allergies, et de l'apporter à chaque consultation.",
            "Lisez l'étiquette à chaque fois, pas de mémoire. Cherchez : le nom du médicament, la quantité à prendre (la dose), à quelle fréquence et à quel moment, pendant combien de temps, les mises en garde (par exemple \"peut provoquer une somnolence\" ou \"à prendre pendant le repas\"), et les informations sur le renouvellement et la date de péremption. Aux États-Unis, les médicaments sans ordonnance ont une étiquette Drug Facts avec les usages, les mises en garde et le mode d'emploi ; ailleurs, lisez la notice dans la boîte.",
            "Votre pharmacien est un expert gratuit. Demandez-lui : Pourquoi est-ce que je prends ceci ? Quels effets secondaires sont fréquents et que dois-je faire ? Quand dois-je arrêter ? Est-ce sans danger avec mes autres médicaments et compléments ? Dois-je éviter certains aliments ou l'alcool ? N'arrêtez et ne changez jamais un médicament prescrit sans demander d'abord à votre médecin ou à votre pharmacien."
          ],
          steps: ["Lisez le nom, la dose, la fréquence et la durée.", "Lisez les mises en garde.", "Ajoutez-le à votre liste de médicaments avec la dose et l'heure.", "Posez vos questions au pharmacien.", "Apportez la liste à chaque consultation et mettez-la à jour à chaque changement."],
          words: [["Dose", "la quantité d'un médicament à prendre en une fois."], ["Sans ordonnance", "un médicament que vous pouvez acheter sans prescription."], ["Effet secondaire", "un effet en plus d'un médicament que vous ne vouliez pas, comme des maux de ventre."]],
          slides: [
            { title: "Lisez l'étiquette à chaque fois", bullets: ["Nom et dose", "Fréquence, moment et durée", "Mises en garde : somnolence, prendre pendant le repas"] },
            { title: "Tenez une liste de médicaments", bullets: ["Chaque médicament, vitamine, complément, plante", "Dose et moment de la journée", "Allergies ; apportez-la à chaque consultation"] },
            { title: "Demandez à votre pharmacien", bullets: ["Pourquoi ce médicament ? Quels effets secondaires ?", "Sans danger avec mes autres médicaments ?", "Des aliments ou de l'alcool à éviter ?"] },
            { title: "Ne changez jamais seul", bullets: ["Demandez à votre médecin ou pharmacien avant d'arrêter ou de changer"] }
          ],
          sources: [{ name: "MedlinePlus : Erreurs de médication (en anglais)", url: "https://medlineplus.gov/medicationerrors.html" }],
          tryIt: "Prenez un médicament, une vitamine ou un complément que vous (ou un proche) utilisez. Lisez l'étiquette et ajoutez-le à votre liste de médicaments : nom, dose, fréquence, à quoi il sert et une mise en garde. Écrivez une question à poser à un pharmacien.",
          youCanNow: "lire l'étiquette d'un médicament, tenir une liste complète de médicaments et poser les bonnes questions à un pharmacien."
        },
        {
          title: "Résultats d'analyses, portails patients et dossiers médicaux",
          minutes: 5,
          goal: "Trouver un résultat d'analyse dans un portail patient et écrire des questions à son sujet.",
          text: [
            "Beaucoup de cliniques et d'hôpitaux ont un portail patient : un site web ou une application sécurisée où vous pouvez voir vos résultats d'analyses, les comptes rendus de consultation et vos prochains rendez-vous, demander le renouvellement d'une ordonnance et envoyer des messages à votre équipe soignante. MedlinePlus conseille d'apprendre à consulter votre dossier pour suivre vos résultats, vos plans de traitement et vos médicaments. Les anciens combattants américains peuvent utiliser les outils en ligne du VA ; demandez à votre équipe du VA comment vous inscrire.",
            "Les résultats d'analyses montrent souvent votre chiffre à côté d'une plage \"normale\", appelée valeurs de référence. Un résultat marqué élevé ou bas n'est pas toujours un problème ; cela dépend de vous, de vos antécédents et de vos autres résultats. Ne paniquez pas et ne changez pas votre traitement seul. Notez vos questions et demandez à votre soignant ce que le résultat veut dire pour vous.",
            "Protégez votre portail : utilisez un mot de passe solide, ne le partagez jamais, et déconnectez-vous sur les ordinateurs partagés ou de bibliothèque. Si vous avez besoin d'aide pour vous inscrire, appelez l'accueil de la clinique. Un proche ou un aidant peut souvent avoir accès avec votre permission ; demandez au cabinet comment faire."
          ],
          steps: ["Demandez à votre clinique comment vous inscrire au portail patient.", "Trouvez votre dernier résultat d'analyse.", "Regardez votre chiffre et les valeurs de référence.", "Notez vos questions : Qu'est-ce que cela veut dire pour moi ? Dois-je faire quelque chose ?", "Envoyez la question par le portail ou posez-la à votre prochaine consultation."],
          words: [["Portail patient", "un site web ou une application sécurisée où vous voyez votre dossier médical et écrivez à votre équipe soignante."], ["Valeurs de référence", "la plage de résultats habituelle chez la plupart des personnes en bonne santé."]],
          slides: [
            { title: "À quoi sert un portail patient", bullets: ["Voir les résultats et les comptes rendus", "Renouveler une ordonnance, voir les rendez-vous", "Écrire à votre équipe soignante"] },
            { title: "Lire un résultat", bullets: ["Votre chiffre et les valeurs de référence", "Élevé ou bas n'est pas toujours un problème", "Demandez ce que cela veut dire pour vous"] },
            { title: "Protégez-le", bullets: ["Mot de passe solide, jamais partagé", "Déconnexion sur les ordinateurs partagés", "Demandez à la clinique l'accès pour un aidant"] }
          ],
          sources: [{ name: "MedlinePlus : Parler avec votre médecin (en anglais)", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Si vous avez un portail patient, connectez-vous et trouvez un résultat ou un compte rendu récent. Sinon, appelez ou demandez à votre clinique comment vous inscrire. Dans les deux cas, écrivez deux questions que vous poseriez sur un résultat d'analyse.",
          youCanNow: "utiliser un portail patient en toute sécurité, lire un résultat à côté de ses valeurs de référence et demander à votre soignant ce qu'il veut dire pour vous."
        },
        {
          title: "Les mots de l'assurance santé et votre trousse de consultation",
          minutes: 6,
          goal: "Expliquer les mots courants de l'assurance santé et savoir à qui poser vos questions sur les coûts.",
          text: [
            "Les mots sur les coûts embrouillent presque tout le monde. Aux États-Unis, HealthCare.gov (le site officiel de l'assurance santé) les définit. La prime, c'est ce que vous payez pour votre assurance, en général chaque mois. La franchise (deductible), c'est le montant que vous payez pour les soins couverts avant que votre assurance commence à payer. Le copaiement (copay), c'est un montant fixe en dollars que vous payez pour un service couvert, comme une consultation. Les soignants du réseau (in-network) ont un contrat avec votre assurance et vous coûtent en général moins cher. Hors des États-Unis, les mots changent ; demandez à votre assurance ou à votre caisse de santé de vous les expliquer.",
            "Avant une analyse ou une consultation, vous pouvez demander : \"Ce soignant fait-il partie de mon réseau ?\" \"Combien vais-je payer à peu près ?\" Appelez le numéro inscrit sur votre carte d'assurance. Medicare (l'assurance santé publique américaine pour les 65 ans et plus) : appelez le 1-800-MEDICARE (1-800-633-4227), ouvert 24 h/24, 7 j/7, sauf certains jours fériés fédéraux. Les anciens combattants peuvent interroger le VA sur leurs droits. Beaucoup de centres de santé communautaires américains proposent des tarifs adaptés aux revenus ; cherchez sur findahealthcenter.hrsa.gov et demandez au centre ses tarifs.",
            "Maintenant, rassemblez tout. Votre trousse de consultation, c'est votre fiche de consultation (inquiétude et questions principales), votre liste de médicaments, votre carte d'assurance et votre pièce d'identité, et un stylo ou un téléphone pour prendre des notes. Après la consultation, écrivez le plan avec vos propres mots."
          ],
          steps: ["Apprenez quatre mots : prime, franchise, copaiement, réseau.", "Avant des soins, demandez si le soignant fait partie de votre réseau et combien vous pourriez payer.", "Appelez le numéro sur votre carte, ou le 1-800-MEDICARE pour Medicare.", "Préparez votre trousse : fiche de consultation, liste de médicaments, carte, pièce d'identité, notes.", "Après la consultation, écrivez le plan avec vos propres mots."],
          words: [["Prime", "ce que vous payez pour votre assurance santé, en général chaque mois."], ["Franchise", "ce que vous payez pour les soins couverts avant que votre assurance commence à payer."], ["Copaiement", "un montant fixe en dollars que vous payez pour un service couvert."], ["Du réseau", "des soignants qui ont un contrat avec votre assurance ; ils vous coûtent en général moins cher."]],
          slides: [
            { title: "Quatre mots de l'assurance", bullets: ["Prime : ce que vous payez pour l'assurance, souvent par mois", "Franchise : ce que vous payez avant que l'assurance paie", "Copaiement : un montant fixe par service", "Du réseau : soignants sous contrat, en général moins chers"] },
            { title: "Demandez avant d'y aller", bullets: ["\"Ce soignant fait-il partie de mon réseau ?\"", "\"Combien vais-je payer à peu près ?\"", "Appelez le numéro sur votre carte"] },
            { title: "Où demander aux États-Unis", bullets: ["Medicare : 1-800-633-4227, 24 h/24, 7 j/7", "Anciens combattants : demandez au VA", "Centres de santé communautaires : findahealthcenter.hrsa.gov"] },
            { title: "Votre trousse de consultation", bullets: ["Fiche de consultation et liste de médicaments", "Carte d'assurance et pièce d'identité", "Notes ; écrivez le plan après"] }
          ],
          sources: [
            { name: "Glossaire HealthCare.gov : Deductible (en anglais)", url: "https://www.healthcare.gov/glossary/deductible/" },
            { name: "Glossaire HealthCare.gov : Copayment (en anglais)", url: "https://www.healthcare.gov/glossary/co-payment/" },
            { name: "Medicare.gov : Parler à quelqu'un (en anglais)", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "HRSA : Trouver un centre de santé (en anglais)", url: "https://findahealthcenter.hrsa.gov/" }
          ],
          tryIt: "Tâche finale : terminez votre fiche de consultation d'une page avec votre inquiétude, vos trois questions principales et votre liste complète de médicaments. Après une vraie consultation, ou un entraînement avec un ami qui joue le médecin, écrivez le plan avec vos propres mots : le problème principal, quoi faire, et pourquoi.",
          youCanNow: "expliquer les mots courants de l'assurance santé, poser des questions sur les coûts avant les soins et apporter une trousse complète à chaque rendez-vous."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser vos informations de santé",
        questions: [
          { q: "Avant de prendre une dose de médicament, vous devez :", options: ["Vous fier à votre mémoire", "Lire l'étiquette à chaque fois", "Deviner la dose", "Prendre le comprimé d'un ami"], answer: 1, why: "Lire l'étiquette à chaque fois évite les erreurs." },
          { q: "Vous voulez arrêter un médicament prescrit à cause d'un effet secondaire. Que faites-vous d'abord ?", options: ["Vous l'arrêtez tout de suite", "Vous doublez la dose", "Vous le donnez à un ami", "Vous demandez à votre médecin ou à votre pharmacien"], answer: 3, why: "N'arrêtez et ne changez jamais un médicament prescrit sans demander d'abord." },
          { q: "Qu'est-ce qu'un portail patient ?", options: ["Un site web ou une application sécurisée pour voir votre dossier et écrire à votre équipe soignante", "Une porte d'hôpital", "Un groupe sur les réseaux sociaux", "Un bon de réduction de pharmacie"], answer: 0, why: "Les portails montrent les résultats et vous permettent d'écrire à votre équipe." },
          { q: "Un résultat d'analyse est marqué \"élevé\" dans votre portail. Quelle est la meilleure étape suivante ?", options: ["Paniquer", "Changer votre médicament vous-même", "Noter vos questions et demander à votre soignant ce que cela veut dire pour vous", "L'ignorer pour toujours"], answer: 2, why: "Élevé ou bas n'est pas toujours un problème ; votre soignant vous explique ce que cela veut dire pour vous." },
          { q: "Qu'est-ce qu'une franchise (deductible) ?", options: ["Un montant fixe pour chaque consultation", "Le coût mensuel de votre assurance", "Un bon de réduction", "Ce que vous payez pour les soins couverts avant que votre assurance commence à payer"], answer: 3, why: "HealthCare.gov définit la franchise comme ce que vous payez avant que votre assurance commence à payer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Littératie en santé : comprendre vos soins",
    questions: [
      { q: "La littératie en santé, c'est :", options: ["Être médecin", "Être capable de trouver, comprendre et utiliser des informations de santé", "Lire vite", "Connaître tous les mots médicaux"], answer: 1, why: "C'est la compétence de trouver, comprendre et utiliser des informations de santé." },
      { q: "Les sites officiels du gouvernement américain finissent par :", options: [".gov", ".shop", ".win", ".xyz"], answer: 0, why: "Les sites en .gov, comme medlineplus.gov et cdc.gov, sont officiels." },
      { q: "Quelle question vous aide à juger un site de santé ?", options: ["Est-il coloré ?", "A-t-il beaucoup de publicités ?", "Quand a-t-il été mis à jour pour la dernière fois ?", "Est-il long ?"], answer: 2, why: "Une information ancienne peut être fausse ; vérifiez la date de mise à jour." },
      { q: "Un assistant d'IA vous explique un mot médical. Que devez-vous faire ?", options: ["Taper votre numéro d'assurance pour avoir une meilleure réponse", "Changer votre traitement d'après sa réponse", "Le partager comme un fait certain", "Vérifier sur un site fiable et demander à votre soignant"], answer: 3, why: "L'IA peut se tromper ; vérifiez et laissez le dernier mot à votre soignant." },
      { q: "Qu'est-ce qui a sa place sur une fiche de consultation ?", options: ["Vos trois questions principales", "Le mot de passe de votre banque", "Une liste de courses", "Rien"], answer: 0, why: "Écrire vos questions en premier garantit que les plus importantes reçoivent une réponse." },
      { q: "Vous avez besoin d'un interprète pour une consultation. Quand devez-vous le demander ?", options: ["Jamais", "Après la consultation", "À l'avance, quand vous prenez rendez-vous", "Seulement si le médecin le propose"], answer: 2, why: "Le demander à l'avance permet au cabinet d'en trouver un." },
      { q: "Laquelle décrit bien un symptôme ?", options: ["\"Je ne me sens pas bien.\"", "\"Douleur vive au genou depuis 2 semaines, pire dans les escaliers, mieux au repos.\"", "\"Quelque chose ne va pas.\"", "\"Comme d'habitude.\""], answer: 1, why: "Elle dit quoi, depuis quand, et ce qui améliore ou aggrave." },
      { q: "Qui pouvez-vous emmener à une consultation pour vous aider ?", options: ["Personne n'est jamais autorisé", "Seulement un avocat", "Seulement un enfant de moins de 5 ans", "Un ami ou un proche de confiance pour prendre des notes"], answer: 3, why: "Un accompagnant peut écouter et prendre des notes." },
      { q: "Laquelle fait partie des trois questions clés à poser en consultation ?", options: ["Qu'est-ce que je dois faire ?", "Quelle voiture conduisez-vous ?", "Quel âge a ce bâtiment ?", "Puis-je sauter mon rendez-vous de suivi ?"], answer: 0, why: "Problème principal, quoi faire et pourquoi : ces trois questions couvrent la plupart des consultations." },
      { q: "Le médecin parle trop vite. Vous pouvez dire :", options: ["Rien", "\"Je me débrouillerai plus tard.\"", "\"Pouvez-vous ralentir et me l'écrire ?\"", "\"Laissez tomber.\""], answer: 2, why: "Lui demander de ralentir ou d'écrire est votre droit." },
      { q: "Redire le plan avec vos propres mots s'appelle :", options: ["Un renouvellement", "La reformulation", "Une franchise", "Un copaiement"], answer: 1, why: "La reformulation vérifie que vous avez compris avant de partir." },
      { q: "Avant de quitter une consultation, vous devez aussi demander :", options: ["Rien", "Où est la cafétéria", "Seulement des échantillons gratuits", "Comment joindre le cabinet et quoi faire si votre état s'aggrave"], answer: 3, why: "Savoir comment les joindre et quand appeler vous protège." },
      { q: "Qui est un expert gratuit pour vos médicaments ?", options: ["Un influenceur sur les réseaux sociaux", "Une publicité en ligne", "Votre pharmacien", "Un inconnu à l'arrêt de bus"], answer: 2, why: "Les pharmaciens répondent gratuitement aux questions sur les médicaments." },
      { q: "La \"dose\", c'est :", options: ["La quantité de médicament à prendre en une fois", "Le prix d'un médicament", "Le nom de la pharmacie", "La date de péremption"], answer: 0, why: "La dose est la quantité à prendre à chaque fois." },
      { q: "Quelle question devez-vous poser à un pharmacien sur un nouveau médicament ?", options: ["De quelle couleur est la boîte ?", "Puis-je le partager avec ma famille ?", "Puis-je arrêter quand je veux ?", "Est-ce sans danger avec mes autres médicaments et compléments ?"], answer: 3, why: "Les médicaments et les compléments peuvent agir les uns sur les autres." },
      { q: "Les \"valeurs de référence\" d'un résultat d'analyse sont :", options: ["Le numéro de téléphone de votre médecin", "La plage de résultats habituelle chez la plupart des personnes en bonne santé", "Le prix de l'analyse", "Un type d'assurance"], answer: 1, why: "Votre chiffre est affiché à côté de la plage habituelle." },
      { q: "Comment protéger votre portail patient ?", options: ["Avec un mot de passe solide et en vous déconnectant sur les ordinateurs partagés", "En partageant votre mot de passe avec des amis", "En écrivant le mot de passe sur l'écran", "En restant connecté à la bibliothèque"], answer: 0, why: "Un mot de passe solide et privé et la déconnexion protègent votre dossier." },
      { q: "Qu'est-ce qu'un copaiement (copay) ?", options: ["Le coût mensuel de votre assurance", "Une consultation gratuite", "Un montant fixe en dollars que vous payez pour un service couvert", "L'étiquette d'un médicament"], answer: 2, why: "HealthCare.gov définit le copaiement comme un montant fixe pour un service couvert." },
      { q: "Aux États-Unis, où une personne couverte par Medicare peut-elle appeler pour poser ses questions ?", options: ["Le 911", "Le 411", "N'importe quel numéro reçu par SMS", "Le 1-800-MEDICARE (1-800-633-4227)"], answer: 3, why: "Le 1-800-MEDICARE est le numéro officiel de Medicare." },
      { q: "Les soignants \"du réseau\" (in-network) :", options: ["N'acceptent jamais d'assurance", "Ont un contrat avec votre assurance et vous coûtent en général moins cher", "Travaillent seulement en ligne", "Sont toujours gratuits"], answer: 1, why: "Les soignants du réseau ont un contrat avec votre assurance, ce qui baisse en général votre coût." }
    ]
  }
};
