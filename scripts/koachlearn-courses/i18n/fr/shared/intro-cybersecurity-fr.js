"use strict";

// Koach Learn course, French translation of shared/intro-cybersecurity.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// US agency names (CISA, FTC, FBI, IC3) are kept and explained; the CIA triad keeps its English name, as French security courses also use it (with "triade DIC").

const CISA_PASSWORDS = { name: "CISA (agence américaine de cybersécurité) Secure Our World : utiliser des mots de passe forts", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA : Secure Our World (sécuriser notre monde)", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC (agence américaine de protection des consommateurs) : reconnaître et éviter l'hameçonnage", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity-fr",
  lang: "fr",
  translationOf: "intro-cybersecurity",
  category: "Youth",
  name: "Introduction à la cybersécurité",
  skills: "Expliquer la triade CIA, Reconnaître les attaques courantes, Repérer et signaler l'hameçonnage, Sécuriser ses comptes avec des mots de passe forts et la MFA, Garder ses appareils à jour, Réagir à un incident",
  outcome: "faire un bilan de sécurité de vos propres comptes et appareils : créer un mot de passe fort et unique avec un gestionnaire de mots de passe, activer l'authentification multifacteur, mettre à jour vos logiciels, repérer un message d'hameçonnage et le signaler, et suivre un plan simple si un compte est piraté.",
  about: [
    "La cybersécurité, c'est protéger les ordinateurs, les téléphones, les comptes et les informations contre les attaques. Elle compte pour le compte scolaire d'un élève, l'accès bancaire d'une famille et la liste de clients d'une petite entreprise, et c'est aussi un métier qui recrute de plus en plus.",
    "Au chapitre 1, vous apprenez les objectifs de base de la sécurité, les attaques les plus courantes et comment repérer l'hameçonnage. Au chapitre 2, vous verrouillez vos propres comptes et appareils et vous apprenez quoi faire quand quelque chose tourne mal.",
    "Les étapes suivent les quatre gestes de base que la CISA, l'agence américaine de cybersécurité et de sécurité des infrastructures, enseigne à tous. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites un bilan de sécurité d'un compte important (l'e-mail, de préférence) : donnez-lui un mot de passe fort et unique enregistré dans un gestionnaire de mots de passe, activez l'authentification multifacteur, vérifiez que votre téléphone ou votre ordinateur est à jour, et écrivez un plan de cinq lignes pour ce que vous feriez si ce compte était piraté. Puis trouvez un message suspect dans votre boîte de réception ou vos SMS et listez les signes d'hameçonnage qu'il montre.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes et des adultes qui utilisent chaque jour l'e-mail, les réseaux sociaux, des comptes d'école ou de travail et un téléphone : élèves et étudiants, programmes jeunesse, chercheurs d'emploi, nouveaux employés de bureau, bénévoles et familles.",
    startingPoint: "Ils savent se connecter à des comptes, utiliser des applications et envoyer des messages. Beaucoup réutilisent leurs mots de passe, n'ont pas activé l'authentification multifacteur, repoussent les mises à jour, et ne savent pas bien distinguer un message d'hameçonnage d'un vrai, ni quoi faire si un compte est piraté.",
    gap: "La plupart des attaques contre les gens ordinaires visent les cibles les plus faciles, par des mots de passe réutilisés, l'hameçonnage et l'ingénierie sociale. Quelques habitudes bloquent la plupart de ces attaques, protègent les comptes d'école, de travail et d'argent, et font de chacun un employé et un membre de la famille plus sûr.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les termes de sécurité comme MFA et hameçonnage sont expliqués",
      "Appareils : le téléphone ou l'ordinateur de l'apprenant et un compte important, comme l'e-mail",
      "Temps : environ 5 minutes par leçon, environ 60 minutes au total",
      "Coût : seulement des outils gratuits, comme le gestionnaire de mots de passe intégré au navigateur ou au téléphone",
      "Vie privée : les apprenants ne partagent jamais un mot de passe ou un code MFA avec personne, même pas l'enseignant, et n'en tapent jamais dans un outil d'IA"
    ],
    prerequisites: "Aucun. Les apprenants ont besoin d'un compte auquel ils peuvent se connecter, comme l'e-mail."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une courte description d'une attaque", action: "expliquer les trois objectifs de la sécurité (confidentialité, intégrité et disponibilité) et identifier celui que l'attaque viole", standard: "en réussissant au moins 4 exemples sur 5" },
    { id: "O2", condition: "À partir d'exemples de logiciel malveillant, de rançongiciel, de vol de compte et d'ingénierie sociale", action: "nommer chaque attaque et décrire comment elle entre en général", standard: "en nommant correctement chaque attaque avec une façon courante d'entrer pour chacune" },
    { id: "O3", condition: "À partir d'un e-mail ou d'un SMS réel ou d'exemple", action: "repérer les signes d'hameçonnage qu'il montre et le signaler de la bonne façon", standard: "en listant au moins deux signes et en choisissant un bon endroit où le signaler" },
    { id: "O4", condition: "Avec un gestionnaire de mots de passe gratuit", action: "créer un mot de passe fort et unique pour un compte important et l'enregistrer dans le gestionnaire de mots de passe", standard: "avec un mot de passe d'au moins 16 caractères qui n'est utilisé sur aucun autre compte" },
    { id: "O5", condition: "Sur un compte important et votre propre appareil", action: "activer l'authentification multifacteur et vérifier que l'appareil et les applications sont à jour", standard: "avec la MFA qui fonctionne sur le compte et les mises à jour automatiques activées" },
    { id: "O6", condition: "À partir de signes qu'un compte est piraté ou qu'un appareil est infecté", action: "écrire et suivre un plan de récupération étape par étape", standard: "avec chaque étape clé dans un ordre sûr : changer le mot de passe, activer la MFA, déconnecter les autres sessions, vérifier les informations de récupération, prévenir les contacts et signaler" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les menaces et le fonctionnement des attaques",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que protège la cybersécurité",
          minutes: 4,
          goal: "Expliquer les trois objectifs de la sécurité avec la triade CIA.",
          text: [
            "Les spécialistes de la sécurité utilisent souvent trois mots, appelés la triade CIA (des initiales anglaises). Confidentialité : seules les bonnes personnes peuvent voir l'information, comme vos notes ou votre dossier médical. Intégrité : l'information est exacte et n'a pas été modifiée par quelqu'un qui n'en a pas le droit, comme le solde d'un compte bancaire. Disponibilité : l'information et les systèmes fonctionnent quand vous en avez besoin, comme un site web qui reste en ligne.",
            "Chaque attaque nuit à au moins un des trois. Quelqu'un qui lit vos messages viole la confidentialité. Quelqu'un qui change le montant d'un paiement viole l'intégrité. Un rançongiciel qui bloque les ordinateurs d'un hôpital viole la disponibilité.",
            "Les personnes qui attaquent s'appellent des acteurs malveillants. Cela va de l'escroc qui cherche de l'argent facile aux groupes criminels organisés. La plupart des attaques contre les gens ordinaires ne sont pas personnelles : les attaquants visent les cibles les plus faciles."
          ],
          words: [["Cybersécurité", "la protection des ordinateurs, téléphones, comptes et informations contre les attaques."], ["Triade CIA", "confidentialité, intégrité et disponibilité : les trois objectifs de la sécurité."], ["Acteur malveillant", "une personne ou un groupe qui attaque des ordinateurs ou des comptes."]],
          slides: [
            { title: "La triade CIA", bullets: ["Confidentialité : seules les bonnes personnes voient l'information", "Intégrité : elle reste exacte", "Disponibilité : elle fonctionne quand vous en avez besoin"] },
            { title: "Les attaques cassent l'un des trois", bullets: ["Lire vos messages : confidentialité", "Changer un paiement : intégrité", "Bloquer des ordinateurs : disponibilité"] },
            { title: "Qui attaque", bullets: ["Des escrocs et des groupes criminels", "Ils visent les cibles les plus faciles", "De bonnes habitudes font de vous une cible plus difficile"] }
          ],
          tryIt: "Pensez à une application que vous utilisez, comme un espace scolaire, une appli bancaire ou une appli d'horaires de travail. Écrivez un exemple de ce que veulent dire confidentialité, intégrité et disponibilité pour elle.",
          youCanNow: "expliquer la triade CIA et dire quel objectif une attaque viole.",
          quickCheck: [
            { objective: "O1", q: "Dans la triade CIA, que veut dire l'intégrité ?", options: ["Le système est toujours rapide", "Seules les bonnes personnes peuvent voir l'information", "L'information est gratuite pour tout le monde", "L'information est juste et n'a pas été modifiée par quelqu'un qui n'en a pas le droit"], answer: 3, why: "L'intégrité veut dire que l'information est juste et n'a pas été modifiée sans autorisation." },
            { objective: "O1", q: "Quelqu'un lit les messages privés d'un camarade sans permission. Quel objectif est violé, selon vous ?", options: ["La disponibilité", "La confidentialité", "L'intégrité", "Aucun des trois"], answer: 1, why: "La confidentialité veut dire que seules les bonnes personnes peuvent voir l'information." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Attaques courantes : logiciels malveillants, rançongiciels et vol de compte",
          minutes: 5,
          goal: "Nommer les attaques les plus courantes et la façon dont chacune entre en général.",
          text: [
            "Un logiciel malveillant (malware) est un logiciel nuisible. Il arrive souvent dans une pièce jointe d'e-mail, une fausse application, un jeu piraté ou une fausse fenêtre de « mise à jour ». Un rançongiciel (ransomware) est un logiciel malveillant qui bloque vos fichiers et exige un paiement pour les débloquer.",
            "Le vol de compte arrive quand quelqu'un entre dans votre compte. Les moyens les plus courants sont un mot de passe volé ou deviné, un mot de passe réutilisé d'un autre site qui a subi une fuite de données, ou une ruse pour vous faire partager un code à usage unique.",
            "L'ingénierie sociale, c'est tromper une personne plutôt que casser la technologie. Un appel d'un faux service informatique, un faux SMS de livraison ou un message d'un « ami » qui demande un code, ce sont tous des exemples d'ingénierie sociale. Les personnes sont souvent la porte d'entrée la plus facile, c'est pourquoi vos habitudes comptent."
          ],
          words: [["Logiciel malveillant (malware)", "un logiciel nuisible qui peut espionner, voler ou abîmer."], ["Rançongiciel (ransomware)", "un logiciel malveillant qui bloque des fichiers et exige un paiement."], ["Fuite de données", "quand les informations gardées par une entreprise, comme des mots de passe, sont volées."], ["Ingénierie sociale", "tromper une personne pour obtenir un accès ou des informations."]],
          slides: [
            { title: "Logiciels malveillants et rançongiciels", bullets: ["Des logiciels nuisibles", "Ils arrivent par pièces jointes, fausses applis, jeux piratés", "Le rançongiciel bloque les fichiers et exige un paiement"] },
            { title: "Le vol de compte", bullets: ["Mots de passe volés ou devinés", "Mots de passe réutilisés d'un site qui a fuité", "Code à usage unique partagé par ruse"] },
            { title: "L'ingénierie sociale", bullets: ["Tromper les personnes, pas les machines", "Faux appels du service informatique, faux SMS de livraison", "Comptes d'amis piratés qui demandent des codes"] }
          ],
          tryIt: "Pour chaque attaque (logiciel malveillant, rançongiciel, vol de compte, ingénierie sociale), écrivez une façon réelle dont elle pourrait vous atteindre, vous ou votre famille, et une habitude qui l'arrêterait.",
          youCanNow: "nommer les attaques courantes et la façon dont elles entrent en général.",
          quickCheck: [
            { objective: "O2", q: "Laquelle de ces façons est une manière courante pour un logiciel malveillant d'entrer sur un appareil ?", options: ["Un jeu piraté ou une fausse fenêtre de « mise à jour »", "Activer les mises à jour automatiques", "Utiliser un gestionnaire de mots de passe", "Redémarrer votre téléphone"], answer: 0, why: "Les logiciels malveillants arrivent souvent par des pièces jointes, de fausses applications, des jeux piratés et de fausses fenêtres de mise à jour." },
            { objective: "O2", q: "Un « ami » vous écrit pour demander le code que votre téléphone vient de recevoir. Que faites-vous ?", options: ["Envoyer le code parce que c'est un ami", "Envoyer la moitié du code", "Ne pas partager le code : c'est sans doute de l'ingénierie sociale", "Publier le code sur un réseau social pour vérifier"], answer: 2, why: "Vous pousser à partager un code à usage unique est une façon courante de voler un compte." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Repérer et signaler l'hameçonnage",
          minutes: 5,
          goal: "Repérer un message d'hameçonnage et le signaler de la bonne façon.",
          text: [
            "L'hameçonnage (phishing) est un faux e-mail, SMS ou message qui essaie de vous faire cliquer sur un lien, ouvrir un fichier ou partager des informations. La FTC, l'agence américaine de protection des consommateurs, liste les ruses courantes : une activité suspecte sur votre compte, un problème de paiement, une demande de confirmer vos informations personnelles, une facture que vous ne reconnaissez pas, un lien pour payer, un remboursement de l'État ou un bon pour des cadeaux gratuits.",
            "Regardez la vraie adresse de l'expéditeur, pas seulement le nom. Sur un ordinateur, passez la souris sur les liens (sur un téléphone, appuyez longuement) pour voir où ils mènent vraiment. Méfiez-vous de l'urgence : « agissez maintenant ou votre compte sera fermé ».",
            "Si vous ne connaissez pas l'expéditeur, signalez le message et supprimez-le. Si vous avez un compte dans cette entreprise, contactez-la par un site ou un numéro que vous savez être le vrai, pas celui du message. Aux États-Unis, la FTC dit de transférer les e-mails d'hameçonnage à reportphishing@apwg.org, les SMS au 7726 (SPAM), et de signaler sur ReportFraud.ftc.gov ; en France, on transfère les SMS au 33700. À l'école ou au travail, utilisez le bouton « Signaler l'hameçonnage » ou prévenez le service informatique."
          ],
          steps: ["Vérifiez la vraie adresse de l'expéditeur.", "Passez la souris ou appuyez longuement sur le lien pour voir où il mène.", "Cherchez l'urgence, les menaces ou les prix à gagner.", "Ne cliquez pas, ne répondez pas, n'ouvrez pas les pièces jointes.", "Contactez l'entreprise par un numéro ou un site que vous connaissez déjà.", "Signalez : e-mails à reportphishing@apwg.org, SMS au 7726, et ReportFraud.ftc.gov ; à l'école ou au travail, prévenez le service informatique."],
          words: [["Hameçonnage (phishing)", "un faux message qui essaie de vous faire cliquer, ouvrir un fichier ou partager des informations."], ["Smishing", "l'hameçonnage par SMS."], ["Usurpation (spoofing)", "imiter le nom, le numéro ou l'adresse d'un expéditeur pour qu'un message ait l'air vrai."]],
          sources: [FTC_PHISHING, { name: "FTC : ReportFraud (signaler une fraude)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Ruses d'hameçonnage courantes (FTC)", bullets: ["« Activité suspecte » ou « problème de paiement »", "« Confirmez vos informations »", "Factures inconnues, remboursements, bons gratuits"] },
            { title: "Vérifiez avant de cliquer", bullets: ["La vraie adresse de l'expéditeur, pas seulement le nom", "Survolez les liens ou appuyez longuement dessus", "L'urgence et les menaces sont des signaux d'alerte"] },
            { title: "Contactez l'entreprise vous-même", bullets: ["Par un site ou un numéro que vous connaissez déjà", "Jamais celui du message"] },
            { title: "Signalez-le", bullets: ["E-mails : reportphishing@apwg.org", "SMS : transférez au 7726 aux États-Unis (33700 en France)", "ReportFraud.ftc.gov ; au travail ou à l'école, prévenez l'informatique"] }
          ],
          tryIt: "Ouvrez votre dossier spam ou courrier indésirable (ou vos SMS) et trouvez un message suspect. Sans rien cliquer, listez tous les signes d'hameçonnage que vous voyez, puis signalez-le ou supprimez-le.",
          youCanNow: "repérer un message d'hameçonnage, éviter ses pièges et le signaler de la bonne façon.",
          quickCheck: [
            { objective: "O3", q: "Sur un téléphone, comment voir où mène vraiment un lien avant de l'ouvrir ?", options: ["Appuyer deux fois rapidement", "Appuyer longuement sur le lien", "Répondre à l'expéditeur", "Éteindre et rallumer le téléphone"], answer: 1, why: "Un appui long montre la vraie adresse sans ouvrir le lien." },
            { objective: "O3", q: "Un SMS dit que votre colis est bloqué et que vous devez payer de petits frais par un lien. Vous n'attendez aucun colis. Que faites-vous ?", options: ["Payer les frais par prudence", "Répondre pour demander de quel colis il s'agit", "Cliquer sur le lien pour voir ce qu'il dit", "Le transférer au 7726 (SPAM), le signaler et le supprimer"], answer: 3, why: "La FTC conseille de transférer les SMS d'hameçonnage au 7726 (SPAM) et de les signaler." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les menaces et le fonctionnement des attaques",
        questions: [
          { objective: "O1", q: "Un rançongiciel bloque les ordinateurs d'un cabinet médical et le personnel ne peut plus les utiliser. Quel objectif est violé ?", options: ["La confidentialité", "Aucun", "L'intégrité", "La disponibilité"], answer: 3, why: "La disponibilité veut dire que les systèmes fonctionnent quand on en a besoin." },
          { objective: "O1", q: "Quelqu'un change le montant d'une demande de paiement. Quel objectif est violé ?", options: ["La vitesse", "La disponibilité", "La confidentialité", "L'intégrité"], answer: 3, why: "L'intégrité veut dire que l'information reste exacte." },
          { objective: "O2", q: "Un homme au téléphone dit qu'il est du service informatique et qu'il a besoin du code qu'on vient de vous envoyer par SMS. C'est :", options: ["Un travail normal du service informatique", "Une mise à jour logicielle", "De l'ingénierie sociale", "Une sauvegarde"], answer: 2, why: "Tromper une personne pour obtenir un code, c'est de l'ingénierie sociale." },
          { objective: "O2", q: "Vous utilisiez le même mot de passe sur un site de jeux qui a subi une fuite de données. Quel est le risque ?", options: ["Aucun", "Votre téléphone se casse", "Votre écran devient noir", "Des attaquants peuvent essayer ce mot de passe sur vos autres comptes"], answer: 3, why: "Les mots de passe réutilisés après une fuite mènent au vol de compte." },
          { objective: "O3", q: "Un e-mail dit que votre compte bancaire est bloqué et donne un lien. Le plus sûr est de :", options: ["Cliquer vite sur le lien", "Répondre avec votre mot de passe", "Aller sur le vrai site de la banque ou appeler un numéro que vous connaissez", "Le transférer à vos amis"], answer: 2, why: "Contactez l'entreprise par un site ou un numéro que vous savez être le vrai." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Protéger ses comptes et ses appareils",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mots de passe forts et gestionnaire de mots de passe",
          minutes: 5,
          goal: "Créer un mot de passe fort et unique et l'enregistrer dans un gestionnaire de mots de passe.",
          text: [
            "La CISA dit qu'un mot de passe fort est long (au moins 16 caractères), aléatoire et unique (différent pour chaque compte). Une phrase de passe de quatre à sept mots sans lien entre eux, comme l'exemple de la CISA « HorsePurpleHatRun » (en français, par exemple « ChevalViolet ChapeauCourir »), est longue et facile à retenir.",
            "Personne ne peut retenir un mot de passe fort différent pour chaque compte, alors utilisez un gestionnaire de mots de passe. Il crée et garde les mots de passe pour vous ; vous ne retenez qu'un seul mot de passe principal fort. La CISA note que certains sont gratuits, y compris ceux intégrés aux navigateurs web et aux téléphones.",
            "Ne partagez jamais vos mots de passe, ne les tapez jamais dans un outil d'IA, et changez un mot de passe tout de suite si une entreprise vous dit qu'il faisait partie d'une fuite de données."
          ],
          steps: ["Ouvrez un gestionnaire de mots de passe : celui de votre navigateur ou de votre téléphone, ou une application de confiance.", "Choisissez votre compte le plus important, en général l'e-mail.", "Utilisez le gestionnaire pour créer un mot de passe long et aléatoire, ou faites une phrase de passe de 4 à 7 mots.", "Enregistrez-le dans le gestionnaire.", "Changez le mot de passe du compte et essayez de vous connecter."],
          words: [["Gestionnaire de mots de passe", "une application qui crée et garde vos mots de passe en sécurité."], ["Phrase de passe", "un mot de passe fait de plusieurs mots sans lien entre eux."], ["Mot de passe unique", "un mot de passe utilisé pour un seul compte."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Des mots de passe forts (CISA)", bullets: ["Longs : au moins 16 caractères", "Aléatoires", "Uniques : différents pour chaque compte"] },
            { title: "Les phrases de passe", bullets: ["4 à 7 mots sans lien entre eux", "Exemple : HorsePurpleHatRun"] },
            { title: "Utilisez un gestionnaire de mots de passe", bullets: ["Il crée et garde les mots de passe", "Vous retenez un seul mot de passe principal", "Certains sont gratuits, intégrés aux navigateurs et téléphones"] }
          ],
          tryIt: "Ouvrez le gestionnaire de mots de passe de votre téléphone ou de votre navigateur. Utilisez-le pour créer et enregistrer un nouveau mot de passe fort pour un compte qui compte pour vous.",
          youCanNow: "créer un mot de passe fort et unique et le garder dans un gestionnaire de mots de passe.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire « unique » pour un mot de passe ?", options: ["Il contient votre nom", "Il est court et facile à taper", "Il est différent pour chaque compte", "C'est le même que le code PIN de votre téléphone"], answer: 2, why: "Un mot de passe unique sert pour un seul compte : une fuite n'ouvre donc pas les autres." },
            { objective: "O4", q: "Une entreprise vous écrit que votre mot de passe était dans une fuite de données. Que faites-vous ?", options: ["Changer ce mot de passe tout de suite", "Attendre de voir s'il se passe quelque chose", "Utiliser le même mot de passe sur un nouveau compte", "Partager le mot de passe avec un ami pour le vérifier"], answer: 0, why: "Changez un mot de passe tout de suite quand une entreprise dit qu'il était dans une fuite." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Authentification multifacteur et mises à jour",
          minutes: 5,
          goal: "Activer l'authentification multifacteur et mettre à jour un appareil.",
          text: [
            "L'authentification multifacteur (MFA) demande une deuxième preuve après votre mot de passe : un code d'une application d'authentification, une notification sur votre téléphone, une clé de sécurité ou une clé d'accès (passkey). Même si quelqu'un vole votre mot de passe, il ne peut pas entrer sans le deuxième facteur. Activez-la d'abord pour l'e-mail, la banque, l'école et les réseaux sociaux. La CISA dit que n'importe quelle MFA vaut mieux que rien, et que la plus forte est la MFA résistante à l'hameçonnage (FIDO, utilisée par les clés d'accès et les clés de sécurité), plus difficile à piéger qu'un code par SMS.",
            "Ne partagez jamais un code MFA. Si vous recevez un code ou une demande de connexion que vous n'avez pas demandé, quelqu'un a peut-être votre mot de passe : refusez et changez votre mot de passe.",
            "Les mises à jour corrigent des failles de sécurité que les attaquants connaissent déjà. Activez les mises à jour automatiques sur votre téléphone, votre ordinateur, votre navigateur et vos applications, et redémarrez quand on vous le demande. La CISA compte la mise à jour des logiciels parmi ses quatre gestes de base, avec éviter l'hameçonnage, les mots de passe forts et la MFA."
          ],
          steps: ["Ouvrez les paramètres de sécurité de votre compte e-mail.", "Trouvez la validation en deux étapes, l'authentification à deux facteurs ou multifacteur.", "Suivez les étapes ; une clé d'accès, une clé de sécurité ou une application d'authentification est plus difficile à piéger qu'un code par SMS, mais toute MFA vaut mieux que rien.", "Gardez les codes de secours dans un endroit sûr, hors ligne.", "Ouvrez les paramètres de votre téléphone ou de votre ordinateur et activez les mises à jour automatiques."],
          words: [["Authentification multifacteur (MFA)", "une deuxième preuve, après votre mot de passe, que c'est bien vous."], ["Application d'authentification", "une application qui affiche des codes de connexion qui changent toutes les quelques secondes."], ["Clé d'accès (passkey)", "une façon de se connecter qui utilise votre appareil et votre visage, votre empreinte ou votre code PIN au lieu d'un mot de passe."], ["Mise à jour / correctif", "une correction du fabricant qui ferme des failles de sécurité."]],
          sources: [CISA_SOW, { name: "CISA : plus qu'un mot de passe (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "La MFA : un deuxième verrou", bullets: ["Mot de passe + code, notification, clé ou clé d'accès", "Un mot de passe volé ne suffit pas", "Activez-la pour l'e-mail, la banque, l'école, les réseaux"] },
            { title: "Un code ou une demande inattendus ?", bullets: ["Ne le partagez jamais", "Refusez", "Changez votre mot de passe"] },
            { title: "Mettez tout à jour", bullets: ["Téléphone, ordinateur, navigateur, applis", "Activez les mises à jour automatiques", "Redémarrez quand on vous le demande"] }
          ],
          tryIt: "Activez la MFA sur votre compte e-mail et gardez vos codes de secours. Puis vérifiez s'il y a des mises à jour sur votre téléphone ou votre ordinateur et installez celles qui attendent.",
          youCanNow: "activer la MFA et garder vos appareils à jour.",
          quickCheck: [
            { objective: "O5", q: "Lequel de ces éléments est un exemple de deuxième facteur pour la MFA ?", options: ["Votre nom d'utilisateur", "Votre couleur préférée", "Votre adresse e-mail", "Un code d'une application d'authentification"], answer: 3, why: "La MFA demande une deuxième preuve après votre mot de passe, comme un code d'une application d'authentification." },
            { objective: "O5", q: "Votre téléphone demande d'installer une mise à jour et de redémarrer. Que faites-vous ?", options: ["L'ignorer pendant des mois", "Désactiver les mises à jour pour qu'il arrête de demander", "L'installer et redémarrer quand il le demande", "Mettre à jour seulement si un ami le conseille"], answer: 2, why: "Les mises à jour corrigent des failles de sécurité que les attaquants connaissent déjà." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Quand quelque chose tourne mal",
          minutes: 5,
          goal: "Suivre un plan simple si un compte est piraté ou un appareil infecté.",
          text: [
            "Signes de problème : vous n'arrivez plus à vous connecter, vos amis reçoivent de vous des messages étranges, vous voyez des connexions ou des achats que vous n'avez pas faits, ou votre appareil affiche soudain des fenêtres publicitaires ou devient très lent.",
            "Si un compte est piraté : depuis un appareil sûr, changez le mot de passe, activez la MFA, déconnectez toutes les autres sessions (la plupart des comptes le proposent dans les paramètres de sécurité), et vérifiez l'e-mail et le numéro de récupération. Dites à vos contacts de ne pas cliquer sur les messages venant de vous. Si de l'argent est en jeu, appelez votre banque au numéro inscrit sur votre carte.",
            "Si vous avez cliqué sur un mauvais lien ou pensez qu'un appareil est infecté, la FTC dit de mettre à jour votre logiciel de sécurité, de lancer une analyse et de supprimer tout ce qu'il signale. À l'école ou au travail, prévenez tout de suite le service informatique : signaler vite, ce n'est pas se mettre en faute, c'est limiter les dégâts. Aux États-Unis, signalez la fraude sur ReportFraud.ftc.gov ou sur ic3.gov, le site du FBI."
          ],
          steps: ["Utilisez un appareil sûr.", "Changez le mot de passe et activez la MFA.", "Déconnectez toutes les autres sessions.", "Vérifiez l'e-mail et le numéro de récupération.", "Prévenez vos contacts ; appelez votre banque si de l'argent est en jeu.", "Mettez à jour le logiciel de sécurité et lancez une analyse.", "Prévenez l'informatique à l'école ou au travail ; signalez la fraude sur ReportFraud.ftc.gov ou ic3.gov."],
          words: [["Incident", "un problème de sécurité, comme un compte piraté ou un appareil infecté."], ["Session", "un endroit où vous êtes connecté, comme un téléphone ou un navigateur."], ["Informations de récupération", "l'e-mail et le numéro qu'un service utilise pour vous aider à retrouver l'accès à votre compte."]],
          sources: [FTC_PHISHING, { name: "FBI : centre des plaintes pour la cybercriminalité (IC3)", url: "https://www.ic3.gov" }, { name: "FTC : ReportFraud (signaler une fraude)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Signes de problème", bullets: ["Impossible de se connecter", "Vos amis reçoivent de vous des messages bizarres", "Connexions ou achats que vous n'avez pas faits"] },
            { title: "Plan en cas de compte piraté", bullets: ["Changez le mot de passe, activez la MFA", "Déconnectez toutes les sessions", "Vérifiez l'e-mail et le numéro de récupération"] },
            { title: "Appareil infecté ou argent en jeu", bullets: ["Mettez à jour le logiciel de sécurité et lancez une analyse", "Appelez votre banque au numéro inscrit sur votre carte"] },
            { title: "Signalez vite", bullets: ["Prévenez l'informatique à l'école ou au travail", "ReportFraud.ftc.gov ou ic3.gov"] }
          ],
          tryIt: "Tâche finale : faites un bilan de sécurité de votre e-mail (mot de passe fort dans un gestionnaire, MFA activée, appareil à jour), écrivez votre plan de cinq lignes en cas de piratage, et listez les signes d'hameçonnage d'un message suspect.",
          youCanNow: "sécuriser un compte de bout en bout et réagir calmement s'il est un jour piraté.",
          quickCheck: [
            { objective: "O6", q: "Lequel de ces éléments est un signe qu'un compte est peut-être piraté ?", options: ["Vos amis reçoivent de vous des messages étranges que vous n'avez pas envoyés", "Vous vous êtes connecté hier", "Votre mot de passe est long", "Vous avez activé la MFA"], answer: 0, why: "Des messages étranges envoyés depuis votre compte sont un signe courant de vol de compte." },
            { objective: "O6", q: "Au travail, vous pensez avoir cliqué sur un mauvais lien. Que faites-vous ?", options: ["Ne rien dire pour ne pas avoir d'ennuis", "Prévenir tout de suite le service informatique", "Recliquer sur le lien pour vérifier", "Désactiver la MFA"], answer: 1, why: "Signaler vite limite les dégâts, et ce n'est pas se mettre en faute." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Protéger ses comptes et ses appareils",
        questions: [
          { objective: "O4", q: "Selon la CISA, un mot de passe fort est :", options: ["Court et facile", "Le même pour tous les comptes", "Le nom de votre animal", "Long, aléatoire et unique"], answer: 3, why: "La CISA dit long (au moins 16 caractères), aléatoire et unique." },
          { objective: "O4", q: "Que fait un gestionnaire de mots de passe ?", options: ["Il partage vos mots de passe avec vos amis", "Il supprime vos comptes", "Il crée et garde des mots de passe forts pour vous", "Il désactive la MFA"], answer: 2, why: "Vous retenez un mot de passe principal ; il garde les autres." },
          { objective: "O5", q: "Vous recevez une demande MFA que vous n'avez pas faite. Que faites-vous ?", options: ["L'approuver", "Envoyer le code à un ami", "L'ignorer pour toujours", "La refuser et changer votre mot de passe"], answer: 3, why: "Une demande inattendue veut dire que quelqu'un a peut-être votre mot de passe." },
          { objective: "O5", q: "Pourquoi installer les mises à jour ?", options: ["Elles corrigent des failles que les attaquants connaissent", "Elles rendent le téléphone plus lourd", "Elles suppriment vos photos", "Elles servent seulement aux jeux"], answer: 0, why: "Les mises à jour corrigent les failles connues." },
          { objective: "O6", q: "Votre compte a été piraté. Après avoir changé le mot de passe, une étape clé est de :", options: ["Publier votre nouveau mot de passe", "Supprimer vos contacts", "Désactiver les mises à jour", "Déconnecter toutes les autres sessions"], answer: 3, why: "Se déconnecter partout met l'attaquant dehors." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à la cybersécurité",
    questions: [
      { objective: "O1", q: "La cybersécurité, c'est :", options: ["Protéger les appareils, comptes et informations contre les attaques", "Rendre les sites web colorés", "Un type de téléphone", "Un jeu vidéo"], answer: 0, why: "Elle protège les appareils, les comptes et les informations." },
      { objective: "O1", q: "Dans la triade CIA, la « confidentialité » veut dire :", options: ["Le système est rapide", "L'information est sauvegardée", "Seules les bonnes personnes peuvent voir l'information", "Le courant est allumé"], answer: 2, why: "La confidentialité garde l'information privée." },
      { objective: "O1", q: "Un site web est mis hors ligne et les clients ne peuvent plus l'utiliser. Quel objectif est touché ?", options: ["L'intégrité", "La confidentialité", "La disponibilité", "L'authentification"], answer: 2, why: "La disponibilité veut dire que cela fonctionne quand on en a besoin." },
      { objective: "O2", q: "Un logiciel malveillant est :", options: ["Une mise à jour utile", "Un pare-feu", "Un gestionnaire de mots de passe", "Un logiciel nuisible"], answer: 3, why: "Un logiciel malveillant est un logiciel nuisible." },
      { objective: "O2", q: "Un rançongiciel :", options: ["Accélère votre ordinateur", "Bloque des fichiers et exige un paiement", "Sauvegarde vos photos", "Bloque le spam"], answer: 1, why: "Le rançongiciel prend les fichiers en otage." },
      { objective: "O2", q: "L'ingénierie sociale, c'est :", options: ["Construire des ponts", "Tromper des personnes pour obtenir un accès ou des informations", "Mettre à jour des applis", "Seulement une matière scolaire"], answer: 1, why: "Elle attaque les personnes plutôt que la technologie." },
      { objective: "O2", q: "Quelle est une façon courante de se faire voler un compte ?", options: ["Réutiliser un mot de passe qui a fuité", "Utiliser la MFA", "Installer les mises à jour", "Utiliser un gestionnaire de mots de passe"], answer: 0, why: "Les mots de passe réutilisés et fuités ouvrent la porte des autres comptes." },
      { objective: "O3", q: "L'hameçonnage, c'est :", options: ["Un faux message qui essaie de vous tromper", "Une appli de pêche", "Une méthode de sauvegarde", "Un type de mot de passe"], answer: 0, why: "L'hameçonnage vous pousse à cliquer ou à partager." },
      { objective: "O3", q: "Lequel est un signe d'hameçonnage cité par la FTC ?", options: ["Un message attendu d'un ami", "Le reçu d'un achat que vous avez fait", "Une « activité suspecte » avec un lien pour régler le problème", "La lettre d'information de l'école"], answer: 2, why: "Les fausses alertes d'« activité suspecte » sont une ruse courante." },
      { objective: "O3", q: "Avant de cliquer sur un lien dans un e-mail sur ordinateur, vous pouvez :", options: ["Passer la souris dessus pour voir où il mène vraiment", "Cliquer deux fois", "Répondre avec votre mot de passe", "Éteindre l'ordinateur"], answer: 0, why: "Le survol montre la vraie adresse web." },
      { objective: "O3", q: "Aux États-Unis, où la FTC dit-elle de transférer les SMS d'hameçonnage ?", options: ["À tous vos contacts", "Au 7726 (SPAM)", "À l'expéditeur", "Au 911"], answer: 1, why: "On transfère les SMS d'hameçonnage au 7726 (SPAM)." },
      { objective: "O3", q: "Au travail, vous recevez un e-mail suspect. Que faites-vous ?", options: ["Cliquer pour voir s'il est vrai", "Le signaler avec le bouton d'hameçonnage ou prévenir l'informatique", "Le transférer aux collègues", "Répondre pour demander"], answer: 1, why: "Le service informatique peut le bloquer pour tout le monde." },
      { objective: "O4", q: "La longueur minimale d'un mot de passe fort selon la CISA est :", options: ["Au moins 16 caractères", "4 caractères", "Exactement 8 caractères", "N'importe quelle longueur"], answer: 0, why: "La CISA dit au moins 16 caractères ; plus long, c'est plus fort." },
      { objective: "O4", q: "Quelle est une bonne phrase de passe ?", options: ["motdepasse123", "Votre date de naissance", "HorsePurpleHatRun", "abc"], answer: 2, why: "Plusieurs mots sans lien la rendent longue et difficile à deviner." },
      { objective: "O4", q: "Avec un gestionnaire de mots de passe, vous n'avez à retenir que :", options: ["Tous les mots de passe", "Un seul mot de passe principal fort", "Aucun mot de passe et aucun appareil", "Le mot de passe d'un ami"], answer: 1, why: "Le gestionnaire garde les autres." },
      { objective: "O5", q: "La MFA vous protège parce que :", options: ["Un mot de passe volé ne suffit pas pour entrer", "Elle raccourcit votre mot de passe", "Elle partage votre connexion", "Elle éteint votre téléphone"], answer: 0, why: "La MFA demande une deuxième preuve." },
      { objective: "O5", q: "Quel type de MFA la CISA dit-elle être le plus fort ?", options: ["Écrire le code sur un post-it", "La MFA résistante à l'hameçonnage, comme une clé d'accès ou une clé de sécurité", "Donner le code à un ami", "Aucun deuxième facteur"], answer: 1, why: "La CISA en fait l'objectif à viser ; les clés d'accès et de sécurité sont plus difficiles à piéger que les codes par SMS." },
      { objective: "O5", q: "Les quatre gestes de base de la CISA sont : éviter l'hameçonnage, les mots de passe forts, la MFA et :", options: ["Acheter un nouveau téléphone", "Mettre à jour les logiciels", "Couper le Wi-Fi pour toujours", "Partager ses mots de passe"], answer: 1, why: "La mise à jour des logiciels est le quatrième geste de base." },
      { objective: "O6", q: "Vous pensez avoir cliqué sur un mauvais lien. La FTC dit de :", options: ["L'ignorer", "Mettre à jour le logiciel de sécurité, lancer une analyse et supprimer ce qu'il signale", "Envoyer le lien à vos amis", "Payer celui qui le demande"], answer: 1, why: "Une analyse trouve et supprime les logiciels nuisibles." },
      { objective: "O6", q: "Où pouvez-vous signaler une fraude en ligne au FBI ?", options: ["ic3.gov", "Un commentaire sur un réseau social", "L'e-mail de l'escroc", "Nulle part"], answer: 0, why: "IC3 est le centre des plaintes pour la cybercriminalité du FBI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      5,
      7,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Mot de passe fort et unique",
        objective: "O4",
        notYet: "Le mot de passe est court, réutilisé ou enregistré nulle part en sécurité.",
        meets: "Un mot de passe d'au moins 16 caractères, utilisé seulement sur ce compte, enregistré dans un gestionnaire de mots de passe.",
        exceeds: "Vérifie aussi un autre compte important et rend son mot de passe unique."
      },
      {
        name: "Authentification multifacteur",
        objective: "O5",
        notYet: "La MFA n'est pas activée.",
        meets: "La MFA est activée et fonctionne pour le compte.",
        exceeds: "Utilise une application d'authentification, une clé d'accès ou une clé de sécurité plutôt qu'un code par SMS."
      },
      {
        name: "Appareil à jour",
        objective: "O5",
        notYet: "Les mises à jour n'ont pas été vérifiées, ou les mises à jour automatiques sont désactivées.",
        meets: "Le téléphone ou l'ordinateur est à jour et les mises à jour automatiques sont activées.",
        exceeds: "Vérifie aussi le navigateur et les principales applications."
      },
      {
        name: "Plan de récupération",
        objective: "O6",
        notYet: "Le plan manque ou a moins de trois étapes justes.",
        meets: "Cinq lignes qui couvrent le changement du mot de passe, la MFA, la déconnexion des autres sessions, la vérification des informations de récupération et l'avertissement des contacts.",
        exceeds: "Dit aussi où signaler et qui appeler s'il y a de l'argent en jeu."
      },
      {
        name: "Signes d'hameçonnage",
        objective: "O3",
        notYet: "Aucun message trouvé, ou aucun signe juste listé.",
        meets: "Un message suspect avec au moins deux signes d'hameçonnage justes listés.",
        exceeds: "Dit aussi comment et où le signaler."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille du bilan de sécurité",
      "Apprenants qui utilisent toujours la MFA et un gestionnaire de mots de passe 30 jours plus tard (enquête de suivi)",
      "Apprenants qui signalent un message d'hameçonnage au service informatique ou à la FTC, ou évitent une arnaque, dans les 30 jours après le cours",
      "Apprenants qui suivent ensuite un autre cours ou un certificat en cybersécurité ou en informatique"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Le téléphone ou l'ordinateur de l'apprenant, avec internet",
      "Un compte important auquel il peut se connecter, de préférence l'e-mail",
      "Un gestionnaire de mots de passe gratuit, comme celui intégré au navigateur ou au téléphone",
      "Du papier et un stylo pour le plan de récupération en cinq lignes ; environ 60 minutes au total"
    ],
    facilitatorNotes: [
      "Ne demandez jamais à voir, recueillir ou noter le mot de passe ou le code MFA de quelqu'un ; les apprenants font les étapes sur leur propre écran.",
      "Vérifiez que chaque apprenant a toujours accès à son e-mail ou à son téléphone de récupération avant d'activer la MFA, pour que personne ne soit bloqué en classe.",
      "Apportez des exemples d'hameçonnage imprimés ou en capture d'écran pour que les apprenants sans message suspect puissent quand même faire l'exercice.",
      "Sur des ordinateurs partagés ou de salle informatique, n'enregistrez pas de mots de passe dans le navigateur ; faites utiliser le gestionnaire de mots de passe du téléphone de chacun et faites se déconnecter à la fin.",
      "Si un apprenant découvre un vrai compte piraté, faites une pause et accompagnez-le dans le plan de récupération depuis un appareil sûr."
    ]
  }
};
