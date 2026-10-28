"use strict";

// Koach Learn course (French translation of youth/youth-cyberbullying-safety.js). See scripts/koachlearn-courses/README.md, "Translations".
// Every number and URL is kept exactly as in the English. US services (988, 911, CyberTipline) are kept and marked as US; readers elsewhere are told
// to use their own country's emergency number, crisis line, police or official reporting service.

module.exports = {
  id: "youth-cyberbullying-safety-fr",
  lang: "fr",
  translationOf: "youth-cyberbullying-safety",
  category: "Youth",
  name: "Se protéger du cyberharcèlement",
  skills: "Reconnaître le cyberharcèlement, Rester calme et ne pas se venger, Garder des preuves, Bloquer et signaler dans les applis, En parler à un adulte de confiance et à l'école, Aider quelqu'un d'autre au lieu de rester spectateur",
  outcome: "reconnaître le cyberharcèlement, répondre sans aggraver la situation, garder des preuves, bloquer et signaler la personne dans l'appli, en parler à un adulte de confiance et à l'école, savoir quand c'est une affaire pour la police, et aider un ami qui est pris pour cible.",
  about: [
    "Le cyberharcèlement, c'est du harcèlement qui passe par les téléphones, les ordinateurs et les jeux : SMS, groupes de discussion, réseaux sociaux, commentaires, forums et jeux en ligne. Comme il peut vous suivre jusque chez vous et se répandre vite, on peut avoir l'impression qu'il n'y a pas d'issue. Vous pouvez faire beaucoup de choses, et vous n'avez pas à y faire face seul.",
    "Ce cours est pour les jeunes, et pour les parents, entraîneurs, mentors et animateurs jeunesse qui les accompagnent. Vous apprendrez ce qu'est le cyberharcèlement, comment réagir en sécurité, comment garder des preuves, comment bloquer et signaler, à qui en parler et comment aider quelqu'un d'autre.",
    "Si un jour vous ne vous sentez pas en sécurité ou si vous pensez à vous faire du mal, parlez-en tout de suite à un adulte de confiance. Appelez la ligne d'écoute ou le numéro d'urgence de votre pays ; aux États-Unis, vous pouvez appeler ou envoyer un SMS au 988 à toute heure. Si quelqu'un est en danger immédiat, appelez le numéro d'urgence de votre pays (le 911 aux États-Unis).",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez votre plan personnel de sécurité contre le cyberharcèlement : comment garder des preuves sur votre téléphone (les étapes pour faire une capture d'écran et où vous les rangerez), où se trouvent les boutons bloquer et signaler dans les deux applis que vous utilisez le plus, le nom de deux adultes de confiance à qui vous en parleriez (et d'une personne à l'école), ce que vous leur diriez, quand vous iriez à la police, et une chose que vous feriez pour soutenir un ami pris pour cible.",
  chapters: [
    {
      name: "Chapitre 1 : Reconnaître le cyberharcèlement et réagir en sécurité",
      lessons: [
        {
          title: "Ce qu'est le cyberharcèlement (et ce qu'il n'est pas)",
          minutes: 5,
          goal: "Distinguer le cyberharcèlement d'un simple désaccord.",
          text: [
            "Le cyberharcèlement, c'est utiliser la technologie pour blesser, humilier, menacer ou prendre quelqu'un pour cible, en général plus d'une fois. Exemples : des messages méchants ou menaçants, des rumeurs, des photos ou vidéos gênantes publiées, de faux comptes pour se moquer de quelqu'un, exclure exprès quelqu'un d'un groupe de discussion pour le blesser, ou partager des messages ou des images privés sans permission.",
            "Il passe souvent par les SMS, les réseaux sociaux, les commentaires, les messages privés, les forums et les jeux. Ce qui est publié en ligne peut rester pour toujours et être public, sauf s'il est signalé et supprimé, et il peut atteindre beaucoup de gens très vite.",
            "Toute dispute en ligne n'est pas du harcèlement. Un désaccord ponctuel entre égaux, c'est un conflit. Le harcèlement vise à blesser quelqu'un exprès, souvent encore et encore, et souvent avec un rapport de force : plus de personnes, plus de popularité, ou des informations privées utilisées contre la victime. Certaines formes de cyberharcèlement, comme les menaces ou le harcèlement lié à l'origine, la religion, le genre, l'orientation sexuelle ou le handicap, peuvent être interdites par la loi."
          ],
          steps: ["Demandez-vous : est-ce fait pour blesser, humilier ou menacer ?", "Demandez-vous : est-ce que cela arrive plus d'une fois, ou se répand ?", "Demandez-vous : y a-t-il un rapport de force (un groupe, la popularité, des infos privées) ?", "Si oui, traitez-le comme du cyberharcèlement et suivez les étapes de ce cours."],
          words: [["Cyberharcèlement", "utiliser les téléphones, les ordinateurs ou les jeux pour blesser, humilier, menacer ou prendre quelqu'un pour cible."], ["Harcèlement", "un comportement répété qui bouleverse, effraie ou menace quelqu'un."], ["Conflit", "un désaccord entre des personnes ; ce n'est pas la même chose que le harcèlement."]],
          slides: [
            { title: "À quoi ressemble le cyberharcèlement", bullets: ["Messages méchants ou menaçants, rumeurs", "Photos ou vidéos gênantes publiées", "Faux comptes, exclusion volontaire", "Partage de messages ou d'images privés"] },
            { title: "Où cela se passe", bullets: ["SMS et groupes de discussion", "Réseaux sociaux, commentaires, messages privés", "Forums et jeux en ligne"] },
            { title: "Harcèlement ou conflit ?", bullets: ["Fait pour blesser ?", "Répété ou qui se répand ?", "Rapport de force ?"] },
            { title: "Une partie est illégale", bullets: ["Les menaces", "Le harcèlement lié à l'origine, la religion, le genre, la sexualité ou le handicap"] }
          ],
          sources: [
            { name: "MedlinePlus : Harcèlement (en anglais)", url: "https://medlineplus.gov/bullying.html" },
            { name: "StopBullying.gov : Qu'est-ce que le cyberharcèlement (États-Unis, en anglais)", url: "https://www.stopbullying.gov/cyberbullying/what-is-it" }
          ],
          tryIt: "Lisez ces trois situations et classez chacune en harcèlement ou conflit : (1) un ami n'est pas d'accord une fois avec votre avis sur un jeu ; (2) un groupe continue de publier sur un faux compte pour se moquer d'un camarade de classe ; (3) quelqu'un continue de vous envoyer des menaces après que vous lui avez dit d'arrêter. Écrivez pourquoi pour chacune.",
          youCanNow: "reconnaître le cyberharcèlement et le distinguer d'un simple désaccord."
        },
        {
          title: "Réagir sans aggraver la situation",
          minutes: 5,
          goal: "Répondre à un message blessant en prenant du recul au lieu de riposter.",
          text: [
            "Quand quelqu'un vous attaque en ligne, il est naturel de vouloir riposter. Mais répondre avec colère, insulter en retour ou publier quelque chose sur cette personne aggrave presque toujours la situation, et peut vous faire passer pour une partie du problème. KidsHealth conseille de ne pas répondre ni se venger, de prendre du recul et de ne pas transférer le message.",
            "D'abord, éloignez-vous de l'écran. Respirez lentement quelques fois. Rappelez-vous : cela parle de son comportement, pas de votre valeur, et ce n'est pas votre faute. Ensuite, suivez le plan : garder des preuves, bloquer, signaler et en parler à quelqu'un. Vous apprendrez chaque étape dans ce cours.",
            "Ne transférez pas et ne partagez pas la publication blessante, même pour montrer à vos amis à quel point elle est méchante ; cela la répand encore plus. Et ne vous faites pas passer pour quelqu'un d'autre, ne créez pas de faux comptes pour vous venger."
          ],
          steps: ["Ne répondez pas et ne ripostez pas.", "Éloignez-vous et respirez.", "Rappelez-vous que ce n'est pas votre faute.", "Ne transférez pas et ne partagez pas la publication.", "Ensuite : gardez des preuves, bloquez, signalez, parlez-en à un adulte."],
          words: [["Se venger", "faire du mal à quelqu'un en retour après qu'il vous a fait du mal."], ["Transférer", "envoyer un message ou une publication à d'autres personnes."]],
          slides: [
            { title: "Ne ripostez pas", bullets: ["Répondre avec colère aggrave presque toujours", "Cela peut vous faire passer pour une partie du problème"] },
            { title: "Prenez du recul", bullets: ["Posez le téléphone", "Respirez lentement", "Ce n'est pas votre faute"] },
            { title: "Ne le répandez pas", bullets: ["Ne transférez pas, ne partagez pas la publication", "Pas de faux comptes pour vous venger"] },
            { title: "Puis suivez le plan", bullets: ["Gardez des preuves", "Bloquez et signalez", "Parlez-en à un adulte de confiance"] }
          ],
          sources: [{ name: "KidsHealth (Nemours) : Cyberharcèlement, pour les ados (en anglais)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Quelqu'un commente \"t'es une blague, tout le monde te déteste\" sous votre publication. Écrivez ce que vous ne ferez PAS (trois choses) et ce que vous FEREZ dans les cinq prochaines minutes.",
          youCanNow: "rester calme, éviter de riposter ou de répandre le message, et passer à un plan sûr."
        },
        {
          title: "Garder des preuves",
          minutes: 5,
          goal: "Faire et ranger des captures d'écran qui prouvent ce qui s'est passé.",
          text: [
            "Les preuves aident les adultes, les écoles, les applis et la police à agir. Avant de bloquer ou de supprimer quoi que ce soit, gardez des preuves. KidsHealth conseille de faire des captures d'écran ou de demander à un parent de copier ou d'enregistrer les messages.",
            "Une bonne capture d'écran montre : le message ou la publication, le nom d'utilisateur ou du compte (et la page de profil ou le lien si vous pouvez), et la date et l'heure. Gardez chaque incident, pas seulement le pire. Tenez un petit journal : date, appli, ce qui s'est passé, qui l'a vu. Rangez les captures dans un dossier privé ou envoyez-les à un adulte de confiance.",
            "Une exception importante : si quelqu'un envoie ou partage une image sexuelle d'un jeune, NE faites PAS de capture, ne gardez pas et ne transférez pas l'image elle-même ; cela peut être illégal, même pour vous. Notez le nom d'utilisateur, le lien et les messages autour, et parlez-en tout de suite à un adulte de confiance. Si quelqu'un menace de partager des images sexuelles si vous ne payez pas ou n'en envoyez pas d'autres, ne payez pas et n'envoyez rien ; bloquez la personne sans supprimer les messages, et demandez de l'aide. Aux États-Unis, signalez-le sur report.cybertip.org ; ailleurs, signalez-le à la police ou au service officiel de signalement de votre pays. Le service gratuit Take It Down (takeitdown.ncmec.org) aide à faire retirer des images prises quand vous aviez moins de 18 ans."
          ],
          steps: ["Avant de bloquer, faites une capture d'écran de chaque message ou publication.", "Vérifiez qu'elle montre le nom d'utilisateur, la date et l'heure.", "Gardez le lien du profil si vous pouvez.", "Écrivez un petit journal : date, appli, ce qui s'est passé.", "Rangez-le en privé ou envoyez-le à un adulte de confiance."],
          words: [["Preuves", "ce qui montre ce qui s'est passé, comme des captures d'écran et des messages enregistrés."], ["Capture d'écran", "une image de ce qui est affiché sur votre écran."], ["Sextorsion", "menacer de partager les images sexuelles de quelqu'un s'il ne paie pas ou n'en envoie pas d'autres ; c'est un crime."]],
          slides: [
            { title: "D'abord, gardez des preuves", bullets: ["Avant de bloquer ou de supprimer", "Les preuves aident adultes, écoles, applis et police à agir"] },
            { title: "Une bonne capture montre", bullets: ["Le message ou la publication", "Le nom d'utilisateur ou le compte", "La date et l'heure"] },
            { title: "Tenez un journal", bullets: ["Date, appli, ce qui s'est passé, qui l'a vu", "Rangez-le en privé ou donnez-le à un adulte"] },
            { title: "Images sexuelles : autres règles", bullets: ["Pas de capture ni de partage de l'image", "Notez pseudo, lien et messages ; prévenez un adulte", "États-Unis : report.cybertip.org ; Take It Down"] }
          ],
          sources: [
            { name: "KidsHealth (Nemours) : Cyberharcèlement, pour les ados (en anglais)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "NCMEC (centre américain pour les enfants disparus et exploités) : Sextorsion (en anglais)", url: "https://www.missingkids.org/theissues/sextortion" },
            { name: "NCMEC : Take It Down", url: "https://takeitdown.ncmec.org/" }
          ],
          tryIt: "Entraînez-vous à faire une capture d'écran sur votre téléphone d'un écran sans importance (comme votre appli météo). Trouvez où elle a été enregistrée. Créez un dossier ou un album privé appelé \"preuves\" et notez les étapes pour vous en souvenir.",
          youCanNow: "faire des captures d'écran qui prouvent ce qui s'est passé, tenir un journal, et gérer les images sexuelles en sécurité en prévenant un adulte au lieu de les garder."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Reconnaître le cyberharcèlement et réagir en sécurité",
        questions: [
          { q: "Lequel est un exemple de cyberharcèlement ?", options: ["Un ami n'est pas d'accord avec vous une fois sur un film", "Un groupe continue de publier sur un faux compte pour se moquer d'un camarade", "Quelqu'un oublie de répondre à un SMS", "Un professeur publie les devoirs en ligne"], answer: 1, why: "C'est répété, fait pour blesser, et un groupe est derrière." },
          { q: "Quelqu'un publie un commentaire méchant sur vous. Quelle est la meilleure première chose à faire ?", options: ["L'insulter en retour", "Le transférer à tout le monde", "Créer un faux compte pour vous venger", "Ne pas répondre ; prendre du recul et suivre votre plan de sécurité"], answer: 3, why: "Riposter aggrave presque toujours ; prendre du recul vous garde maître de la situation." },
          { q: "Quand devez-vous garder des preuves ?", options: ["Avant de bloquer ou de supprimer quoi que ce soit", "Jamais", "Seulement au bout d'un mois", "Seulement si cela arrive dix fois"], answer: 0, why: "Une fois que vous bloquez ou supprimez, les preuves peuvent disparaître." },
          { q: "Que doit montrer une bonne capture d'écran ?", options: ["Seulement votre propre réponse", "Votre écran d'accueil", "Le message, le nom d'utilisateur, la date et l'heure", "Votre mot de passe"], answer: 2, why: "Ces détails prouvent qui a envoyé quoi et quand." },
          { q: "Quelqu'un vous envoie une image sexuelle d'un camarade de classe. Que devez-vous faire ?", options: ["Faire une capture et la partager comme preuve", "La transférer aux amis du camarade", "La publier pour avertir les autres", "Ne pas garder ni partager l'image ; noter le nom d'utilisateur et prévenir tout de suite un adulte de confiance"], answer: 3, why: "Garder ou partager ces images peut être illégal ; les adultes et les services de signalement peuvent agir." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Agir et trouver du soutien",
      lessons: [
        {
          title: "Bloquer et signaler dans les applis",
          minutes: 5,
          goal: "Trouver et utiliser les options bloquer et signaler dans les applis que vous utilisez.",
          text: [
            "Presque tous les réseaux sociaux, applis de messagerie et jeux en ligne permettent de bloquer, masquer et signaler. Bloquer empêche la personne de vous contacter ou de voir vos publications. Masquer la cache sans la prévenir. Signaler indique à l'entreprise que la personne a enfreint ses règles ; l'entreprise peut supprimer des publications ou bannir le compte. KidsHealth conseille aussi de prévenir votre opérateur téléphonique ou votre fournisseur de messagerie quand le harcèlement passe par eux.",
            "En général, on trouve ces options en touchant les trois points, le nom ou le profil de la personne, ou en appuyant longuement sur le message. Les noms des menus changent ; si vous ne les trouvez pas, cherchez \"bloquer\" et \"signaler\" dans l'aide ou le centre de sécurité de l'appli.",
            "Protégez aussi votre vie privée : passez vos comptes en privé si vous pouvez, limitez qui peut vous écrire ou commenter, ne partagez jamais vos mots de passe (même avec des amis), et réfléchissez avant de publier des informations personnelles comme votre école, votre adresse ou l'endroit où vous êtes en ce moment."
          ],
          steps: ["Gardez d'abord des preuves.", "Ouvrez le profil de la personne ou le message, puis le menu (souvent trois points).", "Choisissez Signaler et le motif qui convient.", "Choisissez Bloquer (ou Masquer si bloquer aggraverait les choses).", "Vérifiez vos paramètres de confidentialité : qui peut vous écrire, commenter ou voir vos publications."],
          words: [["Bloquer", "empêcher quelqu'un de vous contacter ou de voir vos publications."], ["Signaler", "dire à l'appli ou à l'entreprise que quelqu'un a enfreint ses règles."], ["Paramètres de confidentialité", "les choix qui contrôlent qui peut voir vos publications et vous contacter."]],
          slides: [
            { title: "Trois outils", bullets: ["Bloquer : la personne ne peut plus vous contacter", "Masquer : la cacher discrètement", "Signaler : dire à l'entreprise qu'elle a enfreint les règles"] },
            { title: "Où les trouver", bullets: ["Touchez les trois points, le nom ou le profil", "Ou appuyez longuement sur le message", "Introuvable ? Cherchez dans le centre de sécurité"] },
            { title: "Protégez votre vie privée", bullets: ["Compte privé si possible", "Limitez qui peut vous écrire ou commenter", "Jamais de mot de passe partagé, même avec des amis"] }
          ],
          sources: [{ name: "KidsHealth (Nemours) : Cyberharcèlement, pour les ados (en anglais)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Dans les deux applis que vous utilisez le plus, trouvez (sans les utiliser) les options pour bloquer et signaler un compte. Puis vérifiez un paramètre de confidentialité dans chaque appli, comme qui peut vous écrire, et changez-le si vous voulez.",
          youCanNow: "trouver et utiliser bloquer, masquer et signaler dans vos applis, et renforcer vos paramètres de confidentialité."
        },
        {
          title: "En parler à un adulte de confiance, à l'école, et quand appeler la police",
          minutes: 6,
          goal: "Dire à un adulte de confiance ce qui se passe et savoir quand cela concerne l'école ou la police.",
          text: [
            "Beaucoup de jeunes n'en parlent à personne parce qu'ils ont peur que ça empire, qu'on leur prenne leur téléphone, ou parce qu'ils ont honte. Mais les adultes peuvent faire des choses que vous ne pouvez pas faire : parler à l'école, contacter l'appli ou aller à la police. KidsHealth conseille de continuer à en parler jusqu'à trouver quelqu'un qui vous aide.",
            "Les adultes de confiance, ce sont un parent ou un tuteur, un autre membre de la famille, un professeur, un conseiller scolaire, un entraîneur, un mentor ou un animateur jeunesse. Commencez simplement : \"Quelqu'un n'arrête pas de m'envoyer des messages méchants et je ne sais pas quoi faire. Tu peux m'aider ? J'ai gardé des captures d'écran.\" Si le premier adulte ne vous aide pas, parlez-en à un autre. La plupart des écoles ont des règles contre le harcèlement, surtout quand des élèves sont impliqués ; un conseiller scolaire ou le chef d'établissement peut agir.",
            "Allez à la police, avec un adulte, quand il y a des menaces de violence, des images ou des messages sexuels, des photos ou vidéos prises dans un lieu privé (comme des toilettes ou un vestiaire), une traque, ou de la haine liée à qui vous êtes. Aux États-Unis, StopBullying.gov explique quand porter plainte et quelles sont les lois de chaque État ; ailleurs, renseignez-vous auprès de la police ou de l'école. Si quelqu'un est en danger immédiat, appelez le numéro d'urgence de votre pays (le 911 aux États-Unis). Si le harcèlement vous laisse sans espoir ou vous fait penser à vous faire du mal, parlez-en à un adulte maintenant et appelez la ligne d'écoute de votre pays ; aux États-Unis, appelez ou envoyez un SMS au 988."
          ],
          steps: ["Choisissez un adulte de confiance.", "Dites-lui ce qui s'est passé et montrez vos preuves.", "Demandez-lui de vous aider à contacter l'école si des élèves sont impliqués.", "Allez à la police avec un adulte pour les menaces, les images sexuelles, la traque ou la haine.", "Danger immédiat : numéro d'urgence de votre pays (911 aux États-Unis). Sans espoir : ligne d'écoute de votre pays (988 aux États-Unis)."],
          words: [["Adulte de confiance", "un adulte avec qui vous vous sentez en sécurité et qui peut aider, comme un parent, un professeur, un conseiller ou un entraîneur."], ["Traque", "suivre, surveiller ou contacter quelqu'un encore et encore d'une façon qui lui fait peur (en anglais, stalking)."]],
          slides: [
            { title: "Pourquoi en parler à un adulte", bullets: ["Il peut contacter l'école, l'appli ou la police", "Parlez jusqu'à ce que quelqu'un vous aide"] },
            { title: "À qui et comment", bullets: ["Parent, professeur, conseiller, entraîneur, mentor", "\"Quelqu'un m'envoie sans arrêt des messages méchants.\"", "Montrez vos captures d'écran"] },
            { title: "Quand appeler la police", bullets: ["Menaces de violence", "Images ou messages sexuels", "Photos dans un lieu privé, traque, haine"] },
            { title: "Aide urgente", bullets: ["Danger immédiat : numéro d'urgence (911 aux États-Unis)", "Sans espoir : ligne d'écoute de votre pays (988 aux États-Unis)"] }
          ],
          sources: [
            { name: "StopBullying.gov : Comment signaler le cyberharcèlement (États-Unis, en anglais)", url: "https://www.stopbullying.gov/cyberbullying/how-to-report" },
            { name: "StopBullying.gov : Lois, politiques et règlements (États-Unis, en anglais)", url: "https://www.stopbullying.gov/resources/laws" },
            { name: "KidsHealth (Nemours) : Cyberharcèlement, pour les ados (en anglais)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "Ligne 988 de prévention du suicide et d'aide en cas de crise (États-Unis, en anglais)", url: "https://988lifeline.org/" }
          ],
          tryIt: "Écrivez le nom de deux adultes de confiance et d'une personne à l'école à qui vous pourriez en parler. Puis écrivez les deux ou trois phrases exactes que vous diriez pour commencer la conversation.",
          youCanNow: "en parler à un adulte de confiance avec vos preuves, impliquer l'école, et savoir quand c'est une affaire pour la police ou pour les secours."
        },
        {
          title: "Agir au lieu de rester spectateur, et faire votre plan de sécurité",
          minutes: 5,
          goal: "Soutenir quelqu'un qui est pris pour cible et écrire votre propre plan de sécurité.",
          text: [
            "La plupart du cyberharcèlement a un public. Un spectateur regarde. Un allié agit. Vous n'avez pas besoin d'affronter le harceleur en public pour aider ; souvent, l'aide la plus sûre est discrète.",
            "Comment agir en allié : ne mettez pas de j'aime, ne partagez pas et ne commentez pas la publication blessante ; signalez-la ; envoyez un message privé à la personne ciblée (\"J'ai vu ça. Ce n'est pas normal. Ça va ?\") ; proposez-lui de passer du temps ou de s'asseoir avec vous ; aidez-la à garder des preuves et à en parler à un adulte de confiance. Si vous voyez des menaces ou des signes qu'elle pourrait se faire du mal, prévenez tout de suite un adulte.",
            "Maintenant, rassemblez tout dans votre propre plan, pour savoir exactement quoi faire si cela vous arrive, à vous ou à un ami."
          ],
          steps: ["Ne mettez pas de j'aime, ne partagez pas et ne commentez pas la publication.", "Signalez-la dans l'appli.", "Envoyez un message privé de soutien à la personne ciblée.", "Aidez-la à garder des preuves et à en parler à un adulte de confiance.", "Écrivez votre propre plan de sécurité."],
          words: [["Spectateur", "quelqu'un qui voit le harcèlement mais ne fait rien."], ["Allié", "quelqu'un qui voit le harcèlement et aide la personne ciblée en toute sécurité (en anglais, upstander)."]],
          slides: [
            { title: "Spectateur ou allié ?", bullets: ["Spectateur : regarde", "Allié : aide en sécurité"] },
            { title: "Des façons discrètes d'aider", bullets: ["Pas de j'aime ni de partage ; signalez", "Écrivez-lui : \"Ce n'est pas normal. Ça va ?\"", "Aidez-la à garder des preuves et prévenir un adulte"] },
            { title: "Votre plan de sécurité", bullets: ["Comment faire une capture et où la ranger", "Bloquer et signaler dans vos deux applis principales", "Deux adultes de confiance et quoi leur dire"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan de sécurité contre le cyberharcèlement : les étapes pour faire une capture et où vous la rangerez, où se trouvent bloquer et signaler dans vos deux applis principales, deux adultes de confiance et une personne à l'école avec ce que vous leur diriez, quand vous iriez à la police, et une façon de soutenir un ami.",
          youCanNow: "soutenir un ami pris pour cible et suivre votre propre plan de sécurité contre le cyberharcèlement."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Agir et trouver du soutien",
        questions: [
          { q: "Que fait le fait de bloquer quelqu'un ?", options: ["Cela l'empêche de vous contacter ou de voir vos publications", "Cela supprime son compte", "Cela lui envoie un avertissement de la police", "Cela partage vos captures d'écran"], answer: 0, why: "Bloquer coupe son contact avec vous." },
          { q: "Vous ne trouvez pas le bouton signaler dans une appli. Que faites-vous ?", options: ["Vous abandonnez", "Vous publiez votre mot de passe", "Vous cherchez \"signaler\" dans l'aide ou le centre de sécurité de l'appli", "Vous demandez au harceleur"], answer: 2, why: "Les noms des menus changent ; l'aide ou le centre de sécurité montre où ils se trouvent." },
          { q: "Le premier adulte à qui vous en parlez ne vous aide pas. Et maintenant ?", options: ["Ne plus jamais en parler à personne", "En parler à un autre adulte de confiance", "Vous venger vous-même du harceleur", "Supprimer vos preuves"], answer: 1, why: "Continuez à en parler jusqu'à ce que quelqu'un vous aide." },
          { q: "Quelle situation doit aller à la police, avec un adulte ?", options: ["Quelqu'un a arrêté de vous suivre", "Un ami n'a pas répondu", "Un camarade n'était pas d'accord dans un groupe de discussion", "Quelqu'un menace de vous faire du mal"], answer: 3, why: "Les menaces de violence sont une affaire pour la police." },
          { q: "Vous voyez un camarade moqué dans des commentaires. Quelle est une bonne façon d'agir en allié ?", options: ["Mettre un j'aime pour être comme les autres", "Signaler et envoyer au camarade un message privé de soutien", "Partager avec plus de monde", "Ajouter votre propre blague"], answer: 1, why: "Signaler et soutenir discrètement aide sans répandre le harcèlement." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Se protéger du cyberharcèlement",
    questions: [
      { q: "Le cyberharcèlement, c'est :", options: ["N'importe quel désaccord en ligne", "Utiliser la technologie pour blesser, humilier, menacer ou prendre quelqu'un pour cible", "Oublier de répondre à un SMS", "Publier quelque chose sur votre week-end"], answer: 1, why: "Il s'agit de blesser ou de cibler quelqu'un au moyen de la technologie." },
      { q: "Qu'est-ce qui rend une situation plus probablement du harcèlement qu'un conflit ?", options: ["C'est répété et fait pour blesser", "Cela arrive une fois entre égaux", "Les deux personnes plaisantent ensemble", "Cela parle de résultats sportifs"], answer: 0, why: "Le harcèlement est en général volontaire, répété, avec un rapport de force." },
      { q: "Pourquoi le harcèlement en ligne peut-il sembler si difficile à fuir ?", options: ["Les téléphones sont lourds", "Il n'arrive qu'à l'école", "Il peut vous suivre jusque chez vous et se répandre vite", "Il est toujours anonyme"], answer: 2, why: "Les publications en ligne vous atteignent partout et peuvent toucher beaucoup de gens." },
      { q: "Lequel est un rapport de force dans le harcèlement ?", options: ["Les deux personnes ont le même âge", "Aucune ne connaît l'autre", "Les deux sont amies", "Un groupe qui s'en prend à une seule personne"], answer: 3, why: "Le nombre, la popularité ou des infos privées donnent du pouvoir au harceleur." },
      { q: "Répondre par des insultes, en général :", options: ["Met fin au harcèlement", "Aggrave la situation", "Fait supprimer la publication", "Est obligatoire dans l'appli"], answer: 1, why: "Riposter fait souvent monter la tension." },
      { q: "Pourquoi ne pas transférer une publication blessante à vos amis ?", options: ["Cela la répand encore plus", "Cela coûte de l'argent", "Cela abîme votre téléphone", "C'est trop lent"], answer: 0, why: "Transférer met le contenu blessant sous les yeux de plus de gens." },
      { q: "Quand vous êtes pris pour cible, il aide de vous rappeler que :", options: ["Vous l'avez mérité", "Personne ne peut aider", "Ce n'est pas votre faute", "Vous devez vous débrouiller seul"], answer: 2, why: "Le harcèlement parle du comportement du harceleur, pas de votre valeur." },
      { q: "Que devez-vous faire avant de bloquer quelqu'un ?", options: ["Supprimer tous les messages", "Lui envoyer votre adresse", "Publier quelque chose sur lui", "Garder des preuves avec des captures d'écran"], answer: 3, why: "Bloquer peut rendre les preuves plus difficiles à obtenir." },
      { q: "Quel détail est le plus important dans une capture d'écran ?", options: ["Le nom d'utilisateur, la date et l'heure", "Le niveau de votre batterie", "Votre fond d'écran", "La météo"], answer: 0, why: "Qui l'a envoyé et quand prouve ce qui s'est passé." },
      { q: "Quelqu'un menace de partager vos images privées si vous ne lui envoyez pas d'argent. Que devez-vous faire ?", options: ["Payer tout de suite", "Envoyer d'autres images", "Ne pas payer ; garder les messages, le bloquer, prévenir un adulte de confiance et signaler", "Tout supprimer et ne rien dire"], answer: 2, why: "Le NCMEC dit que payer arrête rarement le chantage ; gardez les preuves et demandez de l'aide." },
      { q: "Aux États-Unis, où pouvez-vous signaler l'exploitation sexuelle en ligne d'un jeune ?", options: ["report.cybertip.org", "Dans un espace de commentaires au hasard", "Dans les messages privés du harceleur", "Nulle part"], answer: 0, why: "La CyberTipline, gérée par le NCMEC, reçoit ces signalements ; ailleurs, adressez-vous à la police ou au service officiel de votre pays." },
      { q: "À quoi sert Take It Down (takeitdown.ncmec.org) ?", options: ["À effacer tout votre téléphone", "À trouver de nouveaux amis", "À payer un maître chanteur", "À aider à faire retirer des images sexuelles prises quand vous aviez moins de 18 ans"], answer: 3, why: "C'est le service gratuit du NCMEC qui aide à retirer ce type d'images." },
      { q: "Signaler quelqu'un dans une appli, c'est :", options: ["L'appeler au téléphone", "Dire à l'entreprise qu'il a enfreint ses règles", "Le suivre en retour", "Partager sa publication"], answer: 1, why: "L'entreprise peut supprimer des publications ou bannir le compte." },
      { q: "Quelle mesure de confidentialité vous aide à vous protéger ?", options: ["Partager votre mot de passe avec votre meilleur ami", "Publier votre adresse", "Limiter qui peut vous écrire ou commenter vos publications", "Mettre tous vos comptes en public"], answer: 2, why: "Limiter les contacts écarte beaucoup de harceleurs." },
      { q: "Qui est un adulte de confiance ?", options: ["Un inconnu rencontré dans un jeu", "Un parent, un professeur, un conseiller scolaire ou un entraîneur avec qui vous vous sentez en sécurité", "La personne qui vous harcèle", "Un compte anonyme"], answer: 1, why: "Les adultes de confiance peuvent contacter l'école, l'appli ou la police." },
      { q: "Qu'apporter quand vous en parlez à un adulte ?", options: ["Rien", "Votre mot de passe", "Vos preuves : captures d'écran et journal", "Un cadeau"], answer: 2, why: "Les preuves l'aident à agir vite." },
      { q: "Quand le cyberharcèlement doit-il aller à la police ?", options: ["Quand quelqu'un quitte un groupe de discussion", "Quand quelqu'un publie un mauvais avis sur un jeu", "Quand quelqu'un n'est pas d'accord avec vous", "Quand il y a des menaces, des images sexuelles, une traque ou de la haine"], answer: 3, why: "Ce peuvent être des crimes ; StopBullying.gov explique quand porter plainte aux États-Unis." },
      { q: "Aux États-Unis, si le harcèlement vous laisse sans espoir, vous pouvez appeler ou envoyer un SMS au :", options: ["988", "411", "611", "211 seulement le week-end"], answer: 0, why: "Le 988 est la ligne gratuite de prévention du suicide, ouverte 24 h/24 ; hors des États-Unis, appelez la ligne d'écoute ou le numéro d'urgence de votre pays." },
      { q: "Un allié, c'est quelqu'un qui :", options: ["Regarde et ne fait rien", "Aide en sécurité la personne prise pour cible", "Se joint aux moqueries", "Filme pour avoir des vues"], answer: 1, why: "Les alliés aident, souvent discrètement." },
      { q: "Quelle est une façon discrète et sûre d'aider un ami harcelé en ligne ?", options: ["Publier ses messages privés", "Écrire un commentaire encore plus méchant", "Mettre un j'aime à la publication", "Lui écrire en privé et l'aider à en parler à un adulte"], answer: 3, why: "Le soutien en privé et l'aide d'un adulte aident sans répandre le harcèlement." }
    ]
  }
};
