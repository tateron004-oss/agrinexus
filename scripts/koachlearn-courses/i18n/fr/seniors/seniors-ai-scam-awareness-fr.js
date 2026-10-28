"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-scam-awareness.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (checked 27 October 2026): FTC scam signs and ReportFraud.ftc.gov; National Elder Fraud Hotline 833-372-8311; IC3 run by the FBI; Medicare calls guidance.

module.exports = {
  id: "seniors-ai-scam-awareness-fr",
  lang: "fr",
  translationOf: "seniors-ai-scam-awareness",
  category: "Seniors and Technology",
  name: "IA et arnaques : se protéger quand on est senior",
  skills: "Repérer les quatre signes d'une arnaque, Reconnaître les ruses de voix et de messages par IA, Vérifier un message en sécurité, Refuser les paiements à risque, Signaler une arnaque",
  outcome: "examiner un appel, un SMS ou un e-mail, décider s'il présente les signes d'une arnaque, le vérifier en sécurité avec un numéro de confiance et savoir où le signaler.",
  about: [
    "Ce cours s'adresse aux personnes âgées, et à ceux qui prennent soin d'elles, qui veulent garder une longueur d'avance sur les escrocs. Les escrocs utilisent maintenant l'IA pour écrire de meilleurs messages et même imiter des voix : les anciens signaux d'alerte sont donc plus importants que jamais.",
    "Vous apprendrez les quatre signes d'une arnaque, le fonctionnement des ruses par IA, une habitude simple, Stop, Vérifier, Appeler, et où signaler une arnaque aux États-Unis.",
    "Chaque leçon dure environ cinq minutes. Faites les exercices « Essayez maintenant » : ils construisent votre propre carte de sécurité anti-arnaque. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Se faire piéger n'est pas un signe de faiblesse : ces criminels sont des professionnels, et tout le monde peut être visé."
  ],
  finalTask: "Faites votre propre carte de sécurité anti-arnaque : notez trois numéros de confiance (un membre de la famille, votre banque d'après le dos de votre carte, et votre cabinet médical), votre mot de code familial, les étapes Stop, Vérifier, Appeler et les endroits où signaler une arnaque. Puis jugez deux exemples de messages à l'aide des quatre signes.",
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les arnaques aujourd'hui",
      lessons: [
        {
          title: "Les quatre signes d'une arnaque",
          minutes: 5,
          goal: "Citer les quatre signes qu'un appel, un SMS ou un e-mail est probablement une arnaque.",
          text: [
            "La Federal Trade Commission (FTC), l'agence du gouvernement américain qui protège les consommateurs, décrit quatre signes fréquents d'une arnaque. Retenez ces quatre signes et vous repérerez la plupart des arnaques, avec ou sans IA.",
            "1. Ils se font passer pour quelqu'un de confiance : une administration, votre banque, une entreprise connue, une association ou un membre de la famille. 2. Ils parlent d'un problème ou d'un prix : vous devez de l'argent, votre compte est bloqué, ou vous avez gagné quelque chose mais devez payer des frais. 3. Ils vous pressent d'agir tout de suite et peuvent vous dire de ne pas raccrocher ou de n'en parler à personne. 4. Ils veulent être payés d'une façon inhabituelle : cartes cadeaux, virements, cryptomonnaie, application de paiement, ou un chèque à encaisser pour leur renvoyer de l'argent.",
            "Si vous voyez ne serait-ce qu'un de ces signes, ralentissez et vérifiez avant de faire quoi que ce soit."
          ],
          words: [["FTC", "la Federal Trade Commission, l'agence du gouvernement américain qui protège les gens contre les arnaques."], ["Usurper l'identité", "se faire passer pour quelqu'un d'autre."]],
          slides: [
            { title: "Signe 1 : ils se font passer pour un autre", bullets: ["Administration, banque, entreprise, association", "Même un membre de la famille"] },
            { title: "Signe 2 : un problème ou un prix", bullets: ["« Vous devez de l'argent »", "« Votre compte est bloqué »", "« Vous avez gagné, payez juste des frais »"] },
            { title: "Signe 3 : la pression", bullets: ["« Agissez maintenant »", "« Ne raccrochez pas »", "« N'en parlez à personne »"] },
            { title: "Signe 4 : un paiement étrange", bullets: ["Cartes cadeaux ou virements", "Cryptomonnaie ou applications de paiement", "Encaisser un chèque et renvoyer de l'argent"] }
          ],
          sources: [{ name: "FTC : Comment éviter une arnaque (en anglais)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Prenez une fiche ou une feuille de papier. Écrivez « Ma carte de sécurité anti-arnaque » en haut, puis écrivez les quatre signes avec vos propres mots.",
          youCanNow: "citer les quatre signes d'une arnaque."
        },
        {
          title: "Voix copiées par IA et fausses urgences familiales",
          minutes: 5,
          goal: "Reconnaître un faux appel d'urgence qui peut utiliser une copie par IA de la voix d'un proche.",
          text: [
            "Avec un court enregistrement de la voix de quelqu'un, comme une vidéo publiée en ligne, les escrocs peuvent utiliser l'IA pour copier cette voix. Puis ils appellent un grand-parent, en pleurs ou paniqués : « Mamie, j'ai eu un accident, il me faut de l'argent pour la caution, s'il te plaît ne dis rien à Maman. »",
            "Parfois, une deuxième personne prend le téléphone en se faisant passer pour un avocat ou un policier. Elle demande de l'argent liquide, des cartes cadeaux ou un virement, et peut même envoyer un coursier chercher l'argent à votre porte.",
            "La voix peut sembler vraie, mais les quatre signes sont toujours là : l'usurpation, un problème, la pression et le secret, et un paiement inhabituel. Raccrochez et appelez votre proche, ou ses parents, au numéro que vous avez déjà. Un mot de code connu seulement de votre famille est une vérification supplémentaire très efficace."
          ],
          steps: ["Repérez les signes : panique, secret, demande d'argent.", "Raccrochez, même si la voix semble vraie.", "Appelez votre proche ou ses parents au numéro que vous avez déjà.", "Demandez votre mot de code familial si vous en avez un."],
          words: [["Clonage de voix", "utiliser l'IA pour copier la voix de quelqu'un à partir d'un court enregistrement."], ["Coursier", "une personne envoyée pour chercher ou livrer quelque chose."]],
          slides: [
            { title: "L'IA peut copier une voix", bullets: ["À partir d'une courte vidéo ou d'un enregistrement", "Elle peut ressembler exactement à celle d'un petit-enfant"] },
            { title: "La fausse urgence", bullets: ["Accident, arrestation ou hôpital", "« Ne dis rien à Maman »", "Liquide, cartes cadeaux, virement, ou un coursier à votre porte"] },
            { title: "Que faire", bullets: ["Raccrochez, même si cela semble vrai", "Appelez la personne au numéro que vous avez", "Demandez votre mot de code familial"] }
          ],
          tryIt: "Sur votre carte de sécurité, notez le nom et le numéro de téléphone de deux membres de la famille que vous appelleriez pour vérifier une urgence. Puis appelez l'un d'eux et choisissez ensemble un mot de code familial.",
          youCanNow: "reconnaître un faux appel d'urgence familiale et le vérifier en sécurité."
        },
        {
          title: "Faux messages, faux sites et fenêtres surgissantes",
          minutes: 5,
          goal: "Repérer un faux SMS, un faux e-mail, un faux site ou une fausse alerte à l'écran.",
          text: [
            "L'IA aide les escrocs à écrire des SMS et des e-mails sans fautes, qui semblent venir de votre banque, d'une société de livraison, de Medicare (l'assurance santé publique américaine pour les seniors) ou d'Amazon. Une orthographe parfaite ne prouve plus qu'un message est vrai.",
            "Ruses fréquentes : « Votre colis n'a pas pu être livré, cliquez ici. » « Activité inhabituelle sur votre compte, connectez-vous maintenant. » Une fenêtre qui surgit sur votre ordinateur pour dire qu'il a un virus et que vous devez appeler un numéro. Ces liens et ces numéros mènent à l'escroc.",
            "Ne cliquez pas sur les liens et n'appelez pas les numéros des messages inattendus. Fermez le message et allez sur le vrai site de l'entreprise en tapant l'adresse vous-même, ou appelez le numéro au dos de votre carte ou sur une facture fiable. Medicare dit qu'il n'appellera jamais pour vous vendre quelque chose et ne viendra jamais chez vous."
          ],
          steps: ["Ne cliquez pas sur le lien et n'appelez pas le numéro du message.", "Fermez le message ou la fenêtre.", "Tapez vous-même la vraie adresse de l'entreprise, ou appelez le numéro de votre carte ou de votre facture.", "Si une fenêtre ne se ferme pas, éteignez l'appareil et demandez à une personne de confiance."],
          words: [["Lien", "un texte que l'on touche ou sur lequel on clique pour aller sur un site web."], ["Fenêtre surgissante (pop-up)", "une boîte qui apparaît soudain sur votre écran."], ["Hameçonnage (phishing)", "un faux message qui cherche à vous faire donner des informations privées."]],
          slides: [
            { title: "Une orthographe parfaite n'est pas une preuve", bullets: ["L'IA écrit des messages qui semblent vrais", "Banque, livraison, Medicare, Amazon"] },
            { title: "Ruses fréquentes", bullets: ["« Votre colis n'a pas pu être livré »", "« Connectez-vous, activité inhabituelle »", "« Virus ! Appelez ce numéro »"] },
            { title: "Que faire", bullets: ["Ne cliquez pas, n'appelez pas depuis le message", "Tapez vous-même la vraie adresse", "Appelez le numéro de votre carte ou de votre facture"] }
          ],
          sources: [{ name: "Medicare : Signaler une fraude ou un abus (en anglais)", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Sur votre carte de sécurité, notez le numéro de téléphone de votre banque recopié au dos de votre carte bancaire, et le numéro de votre cabinet médical pris sur une facture ou une carte de rendez-vous. Ce sont vos numéros de confiance.",
          youCanNow: "repérer les faux messages et les fausses alertes, et joindre les entreprises en sécurité avec des numéros de confiance."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les arnaques aujourd'hui",
        questions: [
          { q: "Lequel est l'un des quatre signes d'une arnaque ?", options: ["Le message a une date claire", "Vous connaissez bien l'expéditeur et vous l'attendiez", "On vous presse d'agir tout de suite", "Il est arrivé par la poste"], answer: 2, why: "La pression pour agir tout de suite est un signe classique d'arnaque." },
          { q: "Quelqu'un vous demande de payer des « frais administratifs » en cartes cadeaux. C'est :", options: ["Un signe d'arnaque", "Normal", "Une règle fiscale", "Une règle de la banque"], answer: 0, why: "Les vraies administrations n'acceptent pas les cartes cadeaux." },
          { q: "Un appelant a exactement la voix de votre petit-fils et vous supplie de payer sa caution. Que faites-vous ?", options: ["J'envoie l'argent vite", "J'attends le coursier", "Je donne mon numéro de carte", "Je raccroche et j'appelle mon petit-fils ou ses parents au numéro que j'ai"], answer: 3, why: "L'IA peut copier les voix ; vérifier sur un numéro connu est sûr." },
          { q: "Un e-mail est sans fautes et porte le logo de votre banque. Cela prouve-t-il qu'il est vrai ?", options: ["Oui, toujours", "Non, l'IA fait des faux messages qui semblent vrais", "Oui, s'il est long", "Oui, s'il contient un lien"], answer: 1, why: "L'orthographe et les logos sont faciles à copier pour les escrocs." },
          { q: "Une fenêtre dit que votre ordinateur a un virus et qu'il faut appeler un numéro. Vous devez :", options: ["Appeler le numéro", "Ne pas appeler ; la fermer, ou éteindre l'appareil et demander à une personne de confiance", "Payer la réparation", "Leur donner l'accès à distance"], answer: 1, why: "Les fausses alertes virus avec un numéro de téléphone sont une arnaque fréquente." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Se protéger",
      lessons: [
        {
          title: "L'habitude Stop, Vérifier, Appeler",
          minutes: 4,
          goal: "Appliquer trois étapes chaque fois qu'un message ou un appel vous inquiète.",
          text: [
            "Les escrocs gagnent en vous pressant. Votre meilleure défense est une habitude à appliquer à chaque fois : Stop, Vérifier, Appeler.",
            "Stop : ne cliquez pas, ne payez pas, ne donnez aucune information. Vous avez le droit de raccrocher au nez de n'importe qui, même s'il dit être la police ou la banque. Vérifier : cherchez les quatre signes. Parlez à une personne de confiance avant d'agir. Appeler : contactez vous-même la personne ou l'entreprise, avec un numéro de votre carte de sécurité, de votre carte bancaire, d'une facture ou du site officiel dont vous avez tapé l'adresse vous-même.",
            "Vous pouvez aussi demander un deuxième avis à un assistant IA. Collez le message, après avoir retiré tout détail privé, et demandez : « Ce message montre-t-il des signes d'arnaque ? » Considérez sa réponse comme une aide, pas comme le dernier mot ; vos étapes Stop, Vérifier, Appeler passent toujours en premier."
          ],
          steps: ["Stop : ne cliquez pas, ne payez pas, ne partagez rien.", "Vérifier : cherchez les quatre signes et parlez à une personne de confiance.", "Appeler : utilisez un numéro de confiance, jamais celui du message."],
          words: [["Deuxième avis", "demander à quelqu'un d'autre de regarder une chose avant de décider."]],
          slides: [
            { title: "Stop", bullets: ["Ne cliquez pas, ne payez pas, ne partagez rien", "Vous pouvez raccrocher au nez de n'importe qui"] },
            { title: "Vérifier", bullets: ["Cherchez les quatre signes", "Parlez à une personne de confiance"] },
            { title: "Appeler", bullets: ["Utilisez un numéro de confiance", "Jamais un numéro du message"] },
            { title: "L'IA comme aide", bullets: ["Retirez d'abord les détails privés", "Demandez : « Y a-t-il des signes d'arnaque ? »", "Vos propres étapes passent en premier"] }
          ],
          tryIt: "Écrivez Stop, Vérifier, Appeler sur votre carte de sécurité. Puis demandez à un assistant IA : « Ce message montre-t-il des signes d'arnaque ? Votre colis est bloqué. Payez 1,99 $ via ce lien aujourd'hui, sinon il sera renvoyé. » Comparez sa réponse avec les quatre signes.",
          youCanNow: "appliquer l'habitude Stop, Vérifier, Appeler et demander à l'IA un deuxième avis prudent."
        },
        {
          title: "Protéger votre argent et vos informations",
          minutes: 5,
          goal: "Savoir quels détails et quels paiements ne jamais donner à un appel ou un message inattendu.",
          text: [
            "Ne donnez jamais ceci à quelqu'un qui vous contacte sans que vous l'attendiez : votre numéro de Social Security (sécurité sociale américaine) ou Medicare, vos numéros de compte ou de carte, vos mots de passe, ou un code reçu par SMS. Votre banque connaît déjà votre numéro de compte ; une vraie banque ne vous demandera pas votre mot de passe ni votre code reçu par SMS.",
            "Ne payez jamais un inconnu avec des cartes cadeaux, un virement, de la cryptomonnaie ou une application de paiement, et ne déposez jamais un chèque pour renvoyer une partie de l'argent. La FTC dit que les vraies administrations ne vous diront jamais de déplacer votre argent pour le « protéger », de retirer de l'argent liquide ou d'acheter de l'or.",
            "Ne laissez jamais un appelant se connecter à votre ordinateur pour le « réparer ». Si vous avez déjà donné de l'argent ou des informations, agissez vite : appelez votre banque au numéro inscrit sur votre carte et dites-lui ce qui s'est passé."
          ],
          steps: ["Ne donnez jamais vos numéros de sécurité sociale, Medicare, de compte ou de carte à un contact inattendu.", "Ne donnez jamais vos mots de passe ni les codes reçus par SMS.", "Ne payez jamais un inconnu par carte cadeau, virement, cryptomonnaie ou application de paiement.", "Si vous avez déjà payé ou partagé, appelez tout de suite votre banque au numéro de votre carte."],
          words: [["Code reçu par SMS", "un court numéro envoyé sur votre téléphone pour prouver que c'est bien vous qui vous connectez."], ["Virement", "envoyer de l'argent par voie électronique ; il est très difficile de le récupérer."]],
          slides: [
            { title: "Ne partagez jamais", bullets: ["Vos numéros de sécurité sociale ou Medicare", "Vos numéros de compte ou de carte, vos mots de passe", "Les codes reçus par SMS"] },
            { title: "Ne payez jamais un inconnu avec", bullets: ["Des cartes cadeaux ou des virements", "De la cryptomonnaie ou une application de paiement", "L'argent d'un chèque que vous venez d'encaisser"] },
            { title: "Les vraies administrations ne demandent jamais", bullets: ["De déplacer votre argent pour le « protéger »", "De retirer du liquide ou d'acheter de l'or"] },
            { title: "Vous avez déjà payé ?", bullets: ["Appelez votre banque tout de suite", "Utilisez le numéro de votre carte"] }
          ],
          sources: [{ name: "FTC : Comment éviter une arnaque (en anglais)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Sur votre carte de sécurité, écrivez : « Je ne donne jamais mes numéros, mots de passe ou codes à quelqu'un qui me contacte en premier. Je ne paie jamais un inconnu par carte cadeau, virement ou cryptomonnaie. »",
          youCanNow: "protéger vos détails privés et refuser les paiements à risque."
        },
        {
          title: "Signaler une arnaque et obtenir de l'aide",
          minutes: 5,
          goal: "Savoir où signaler une arnaque et obtenir du soutien.",
          text: [
            "Signaler aide à arrêter les escrocs et peut vous aider. Aux États-Unis, vous pouvez signaler une arnaque à la Federal Trade Commission sur ReportFraud.ftc.gov. Les délits sur internet peuvent aussi être signalés au centre de plaintes du FBI pour la criminalité sur internet, sur ic3.gov.",
            "Si vous avez 60 ans ou plus, la National Elder Fraud Hotline (ligne nationale contre la fraude visant les aînés), gérée par le Department of Justice (ministère de la Justice américain), est gratuite : appelez le 833-FRAUD-11 (833-372-8311). Lors de notre vérification, elle était ouverte du lundi au vendredi, de 10 h à 18 h, heure de l'Est, avec de l'aide en anglais, en espagnol et dans d'autres langues. Vérifiez les horaires actuels sur son site.",
            "Si quelqu'un utilise vos informations, allez sur IdentityTheft.gov pour un plan de rétablissement gratuit. S'il s'agit d'une fraude à Medicare, appelez le 1-800-MEDICARE (1-800-633-4227). Les vrais sites de signalement ne vous demanderont jamais de payer pour récupérer votre argent ; quelqu'un qui le fait est une autre arnaque."
          ],
          steps: ["Appelez d'abord votre banque si de l'argent a été pris.", "Signalez sur ReportFraud.ftc.gov.", "60 ans ou plus : appelez la Elder Fraud Hotline, 833-372-8311.", "Si votre identité a été utilisée : allez sur IdentityTheft.gov.", "Méfiez-vous de quiconque fait payer pour récupérer votre argent."],
          words: [["Signaler", "dire au bon service ce qui s'est passé pour qu'il puisse agir."], ["Usurpation d'identité", "quand quelqu'un utilise vos informations personnelles pour se faire passer pour vous."]],
          slides: [
            { title: "Où signaler", bullets: ["ReportFraud.ftc.gov", "ic3.gov du FBI pour la criminalité sur internet"] },
            { title: "60 ans ou plus", bullets: ["National Elder Fraud Hotline", "833-FRAUD-11 (833-372-8311)", "Gratuite ; vérifiez les horaires actuels sur son site"] },
            { title: "Autres aides", bullets: ["IdentityTheft.gov si vos informations sont utilisées", "1-800-MEDICARE pour une fraude à Medicare", "Ne payez jamais pour « récupérer » votre argent"] }
          ],
          sources: [{ name: "FTC : Signaler une fraude (en anglais)", url: "https://reportfraud.ftc.gov/" }, { name: "DOJ, Office for Victims of Crime : National Elder Fraud Hotline (en anglais)", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }, { name: "FBI : Internet Crime Complaint Center (en anglais)", url: "https://www.ic3.gov/" }, { name: "FTC : Ce qu'il faut savoir sur l'usurpation d'identité (en anglais)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Medicare : Signaler une fraude ou un abus (en anglais)", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Tâche finale : terminez votre carte de sécurité anti-arnaque. Ajoutez les endroits où signaler une arnaque et le numéro de la Elder Fraud Hotline. Puis jugez ces deux messages avec les quatre signes : (1) « Coucou Papi, nouveau numéro, j'ai des ennuis, envoie 500 $ en cartes cadeaux » ; (2) un rappel de votre pharmacie disant que votre ordonnance est prête, sans lien et sans demande d'argent.",
          youCanNow: "repérer une arnaque, la vérifier en sécurité, protéger votre argent et la signaler au bon endroit."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Se protéger",
        questions: [
          { q: "Quelles sont les trois étapes de l'habitude de sécurité ?", options: ["Cliquer, Payer, Oublier", "Répondre, Partager, Envoyer", "Attendre, Espérer, Payer", "Stop, Vérifier, Appeler"], answer: 3, why: "Stop, Vérifier, Appeler ralentit l'escroc." },
          { q: "Quand vous appelez pour vérifier, quel numéro utilisez-vous ?", options: ["Un numéro de votre carte de sécurité, de votre carte bancaire ou d'une facture", "Celui du message", "Celui que l'appelant vous donne", "Celui d'une fenêtre surgissante"], answer: 0, why: "Seuls les numéros que vous connaissez déjà sont sûrs." },
          { q: "Un appelant vous dit de mettre vos économies sur un « compte sécurisé » pour les protéger. C'est :", options: ["Un bon conseil", "Une règle de la banque", "Une arnaque ; les vraies administrations ne demandent jamais cela", "Une obligation fiscale"], answer: 2, why: "La FTC dit que les vraies administrations ne demandent jamais de déplacer de l'argent pour le protéger." },
          { q: "Où pouvez-vous signaler une arnaque à la FTC ?", options: ["Dans une fenêtre surgissante", "Sur le site de l'escroc", "Dans une publication sur les réseaux sociaux", "Sur ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov est le site de signalement de la FTC." },
          { q: "Quelqu'un propose de récupérer votre argent perdu contre paiement. Qu'est-ce que c'est ?", options: ["Un programme du gouvernement", "Une aide normale", "Probablement une autre arnaque", "Un conseil gratuit"], answer: 2, why: "Les vrais sites de signalement ne font jamais payer pour récupérer de l'argent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : IA et arnaques : se protéger quand on est senior",
    questions: [
      { q: "Quelle agence américaine décrit les quatre signes d'une arnaque ?", options: ["Le service météo", "La Federal Trade Commission (FTC)", "La poste", "Une compagnie de téléphone"], answer: 1, why: "La FTC protège les consommateurs contre les arnaques." },
      { q: "Un message dit que vous avez gagné un prix mais devez d'abord payer des frais. C'est :", options: ["Un signe d'arnaque", "Un prix normal", "Une règle fiscale", "Une règle de la banque"], answer: 0, why: "Un prix qui demande des frais est une arnaque fréquente." },
      { q: "« Ne raccrochez pas et n'en parlez à personne » est un signe de :", options: ["Pression, un signe d'arnaque", "Bon service", "Une vraie urgence", "Un appel du médecin"], answer: 0, why: "La pression et le secret sont des signes d'arnaque." },
      { q: "Quel moyen de paiement est un signal d'alarme quand un inconnu le demande ?", options: ["Payer votre propre facture d'électricité sur son site officiel", "Les cartes cadeaux", "Payer à la caisse du supermarché", "Un chèque envoyé à votre propriétaire"], answer: 1, why: "Les escrocs demandent des cartes cadeaux car elles sont difficiles à suivre." },
      { q: "Qu'est-ce que le clonage de voix ?", options: ["Un cours de chant", "Une réparation de téléphone", "Utiliser l'IA pour copier la voix de quelqu'un", "Un type d'appareil auditif"], answer: 2, why: "L'IA peut copier une voix à partir d'un court enregistrement." },
      { q: "Dans un faux appel d'urgence, une deuxième personne peut se faire passer pour :", options: ["Un cuisinier", "Le chien du voisin", "Un présentateur météo", "Un avocat ou un policier"], answer: 3, why: "Les escrocs ajoutent de faux officiels pour paraître crédibles." },
      { q: "Un mot de code familial vous aide à :", options: ["Déverrouiller votre téléphone", "Payer vos factures", "Vérifier qui appelle vraiment", "Réinitialiser votre mot de passe"], answer: 2, why: "Seule votre vraie famille le connaît." },
      { q: "Une orthographe parfaite prouve-t-elle qu'un message est vrai ?", options: ["Non", "Oui", "Seulement le dimanche", "Seulement s'il vient d'une banque"], answer: 0, why: "L'IA écrit de faux messages sans aucune faute." },
      { q: "Un SMS dit que votre colis est bloqué ; payez de petits frais via un lien. Vous devez :", options: ["Cliquer et payer", "Le transférer à vos amis", "Répondre avec votre numéro de carte", "Ne pas cliquer ; vérifier vous-même auprès de la société de livraison"], answer: 3, why: "Les liens des messages inattendus mènent aux escrocs." },
      { q: "Une fenêtre affiche « Virus ! Appelez ce numéro maintenant. » Vous :", options: ["Appelez", "N'appelez pas ; vous la fermez ou éteignez l'appareil", "Payez la réparation", "Les laissez se connecter à votre ordinateur"], answer: 1, why: "Les fausses alertes virus sont une arnaque fréquente." },
      { q: "D'après Medicare, Medicare ne fera jamais :", options: ["Vous envoyer des informations par courrier", "Vous appeler pour vous vendre quelque chose ou venir chez vous", "Payer des soins", "Avoir un site web"], answer: 1, why: "Medicare dit qu'il n'appelle pas pour vendre et ne vient pas chez vous." },
      { q: "Dans Stop, Vérifier, Appeler, « Stop » veut dire :", options: ["Arrêter de payer ses factures", "Ne plus jamais utiliser son téléphone", "Arrêter de parler à sa famille", "Ne pas cliquer, ne pas payer, ne rien partager"], answer: 3, why: "S'arrêter casse la pression de l'escroc." },
      { q: "Avant de coller un message dans une IA pour un deuxième avis, vous devez :", options: ["Retirer les détails privés", "Ajouter votre numéro de compte", "Ajouter votre mot de passe", "Ajouter votre adresse"], answer: 0, why: "Les détails privés ne vont jamais dans une IA." },
      { q: "L'avis d'un assistant IA sur un message est :", options: ["Une décision juridique", "Toujours juste", "Une aide, pas le dernier mot", "Une décision de la banque"], answer: 2, why: "L'IA peut se tromper ; vos propres étapes passent en premier." },
      { q: "Une vraie banque ne vous demandera jamais :", options: ["D'appeler son numéro", "De passer en agence", "De lire votre relevé", "Votre mot de passe ou votre code reçu par SMS"], answer: 3, why: "Les banques ne demandent ni mots de passe ni codes." },
      { q: "Quelqu'un vous demande de déposer son chèque et de lui renvoyer une partie. C'est :", options: ["Une règle de la banque", "Un service normal", "Une arnaque au faux chèque", "Un remboursement d'impôt"], answer: 2, why: "Le chèque est rejeté et vous perdez l'argent envoyé." },
      { q: "Si vous avez déjà envoyé de l'argent à un escroc, le premier appel est pour :", options: ["L'escroc", "Votre banque, au numéro de votre carte", "Un numéro d'une fenêtre surgissante", "Personne"], answer: 1, why: "Votre banque peut parfois bloquer ou annuler le paiement." },
      { q: "Le numéro de la National Elder Fraud Hotline est :", options: ["833-372-8311", "911", "411", "Un numéro reçu par SMS"], answer: 0, why: "Le 833-FRAUD-11 (833-372-8311) est la ligne du ministère de la Justice américain." },
      { q: "Si quelqu'un utilise vos informations personnelles, un plan de rétablissement gratuit se trouve sur :", options: ["IdentityTheft.gov", "Une publicité", "Le site de l'escroc", "Une page de réseau social"], answer: 0, why: "IdentityTheft.gov est le site de rétablissement de la FTC." },
      { q: "Le site du FBI pour signaler la criminalité sur internet est :", options: ["fbi-refund.win", "ic3.gov", "un lien reçu par SMS", "un site de cartes cadeaux"], answer: 1, why: "IC3 est le centre de plaintes du FBI pour la criminalité sur internet." }
    ]
  }
};
