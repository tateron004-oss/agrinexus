"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-cybersecurity-careers.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-cybersecurity-careers-fr",
  lang: "fr",
  translationOf: "veterans-ai-cybersecurity-careers",
  category: "Veterans (military)",
  name: "IA et carrières en cybersécurité",
  skills: "Citer les emplois de débutant en cybersécurité, Traduire l'expérience militaire en sécurité, Trouver une formation officielle en cyber, Étudier la sécurité avec l'IA, Analyser un e-mail suspect",
  outcome: "choisir un emploi de débutant en cybersécurité qui correspond à votre expérience militaire, utiliser un assistant d'IA sans risque pour étudier et pour vérifier un e-mail suspect, et écrire une courte note d'incident et des lignes de CV qui le prouvent.",
  about: [
    "Beaucoup d'anciens militaires (vétérans) pensent déjà comme des professionnels de la sécurité : vous avez protégé des informations, suivi des règles d'accès, monté la garde et signalé tout ce qui était anormal. Les employeurs en cybersécurité ont besoin exactement de cet état d'esprit.",
    "Dans ce cours, vous découvrirez les principaux emplois de débutant en cyber, comment l'IA les change, comment traduire votre service en mots de la cyber, où trouver une formation officielle, et comment utiliser l'IA comme partenaire de révision. Vous terminerez en vérifiant un e-mail suspect comme le ferait un analyste débutant.",
    "Chaque leçon dure environ cinq minutes. Lisez, regardez les diapositives, puis faites l'activité \"Essayez maintenant\". Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Aucun piratage n'est demandé : vous vous entraînez seulement sur des exemples sûrs et inventés."
  ],
  finalTask: "Prenez un e-mail suspect (un vrai tiré de votre dossier de spams, sans détails personnels, ou un exemple inventé), utilisez un assistant d'IA pour aider à lister ses signes d'alerte sans rien cliquer, et écrivez une note d'incident de cinq lignes : ce qui est arrivé, les signes d'alerte, le risque, ce que vous avez fait et ce que vous recommandez. Puis écrivez deux lignes de CV qui relient votre expérience militaire à un emploi en cyber.",
  chapters: [
    {
      name: "Chapitre 1 : Votre parcours vers la cybersécurité",
      lessons: [
        {
          title: "Les métiers de la cyber et comment l'IA les change",
          minutes: 5,
          goal: "Citer trois emplois de débutant en cybersécurité et dire ce que fait chacun au quotidien.",
          text: [
            "La cybersécurité, c'est protéger les ordinateurs, les réseaux et les informations contre ceux qui veulent les voler, les modifier ou les casser.",
            "Les premiers emplois courants : analyste SOC (centre des opérations de sécurité), qui surveille les alertes et vérifie si ce sont de vraies attaques ; support informatique avec des missions de sécurité, qui crée les comptes et règle les problèmes d'accès ; et analyste GRC (gouvernance, risque et conformité), qui vérifie qu'une organisation suit ses règles de sécurité.",
            "L'IA aide maintenant à trier les alertes, résumer les journaux et repérer les activités inhabituelles. Les attaquants utilisent aussi l'IA, par exemple pour écrire des e-mails d'arnaque convaincants. Les employeurs veulent donc des personnes capables d'utiliser les outils d'IA tout en jugeant ce qui est vrai."
          ],
          words: [["SOC", "centre des opérations de sécurité : l'équipe qui surveille les attaques et y répond."], ["Alerte", "un avertissement qu'un outil de sécurité donne quand il voit quelque chose d'inhabituel."], ["GRC", "gouvernance, risque et conformité : s'assurer qu'une organisation suit ses règles de sécurité et les lois."]],
          slides: [
            { title: "Ce qu'est la cybersécurité", bullets: ["Protéger ordinateurs, réseaux et informations", "Contre ceux qui volent, modifient ou cassent"] },
            { title: "Trois premiers emplois", bullets: ["Analyste SOC : vérifie les alertes", "Support informatique sécurité : comptes et accès", "Analyste GRC : vérifie le respect des règles"] },
            { title: "L'IA des deux côtés", bullets: ["Défenseurs : trier les alertes, résumer les journaux", "Attaquants : écrire des e-mails d'arnaque", "Il faut des gens qui utilisent l'IA et la jugent"] }
          ],
          tryIt: "Cherchez sur un site d'emploi \"analyste SOC\", \"support informatique\" et \"analyste GRC\" dans votre région. Pour chacun, écrivez une phrase sur ce que fait le poste, à partir des offres.",
          youCanNow: "citer trois emplois de débutant en cyber et expliquer ce que fait chacun."
        },
        {
          title: "Traduire votre service en compétences cyber",
          minutes: 5,
          goal: "Écrire trois compétences cyber que vous avez déjà grâce au service militaire, en mots civils.",
          text: [
            "Vous n'avez peut-être pas travaillé dans la cyber, mais vous en avez sans doute pratiqué les bases. L'OPSEC (sécurité des opérations), c'est protéger les informations de l'ennemi. Monter la garde, c'est de la surveillance. Signaler un incident de sécurité à la hiérarchie, c'est de la réponse aux incidents. Contrôler qui entre dans un bâtiment, c'est du contrôle d'accès.",
            "Si vous aviez une habilitation de sécurité, indiquez-la sur votre CV de la façon autorisée par votre service de sécurité (en général le niveau et si elle est active). Beaucoup d'employeurs en cyber y attachent de la valeur.",
            "Le site NICCS de l'agence américaine de cybersécurité et de sécurité des infrastructures (CISA) a une partie pour les vétérans et un Cyber Career Pathways Tool qui montre les métiers de la cyber et les compétences de chacun. Utilisez-le avec My Next Move for Veterans pour relier votre code d'emploi."
          ],
          steps: ["Listez trois habitudes de sécurité de votre service (OPSEC, garde, contrôle d'accès, signalement).", "Demandez à un assistant d'IA : \"Traduis ces missions militaires de sécurité en compétences de cybersécurité utilisées par les employeurs.\"", "Comparez avec les métiers du Cyber Career Pathways Tool de NICCS.", "Gardez les trois compétences qui sont vraies et faciles à expliquer."],
          words: [["OPSEC", "sécurité des opérations : garder les informations utiles loin d'un adversaire."], ["Contrôle d'accès", "décider qui a le droit d'entrer dans un lieu, un système ou un fichier."], ["Réponse aux incidents", "ce que fait une équipe quand quelque chose de grave ou de suspect arrive."], ["NICCS", "National Initiative for Cybersecurity Careers and Studies, le site de la CISA sur les carrières et formations en cyber."]],
          slides: [
            { title: "Vous avez déjà pratiqué les bases", bullets: ["OPSEC = protéger l'information", "Monter la garde = surveiller", "Signaler à la hiérarchie = réponse aux incidents"] },
            { title: "Habilitation de sécurité", bullets: ["Beaucoup d'employeurs cyber l'apprécient", "Indiquez-la comme l'autorise votre service de sécurité"] },
            { title: "Aide officielle : NICCS (CISA)", bullets: ["Une partie pour les vétérans", "Cyber Career Pathways Tool", "À croiser avec My Next Move for Veterans"] }
          ],
          sources: [{ name: "NICCS, agence américaine de cybersécurité et de sécurité des infrastructures (CISA)", url: "https://niccs.cisa.gov/" }, { name: "My Next Move for Veterans (ministère du Travail des États-Unis)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Écrivez trois missions de sécurité de votre propre service. Demandez à un assistant d'IA de les traduire en mots de la cyber, puis comparez-les à un métier du Cyber Career Pathways Tool de NICCS.",
          youCanNow: "décrire votre expérience militaire de sécurité en compétences cyber qu'un employeur reconnaît."
        },
        {
          title: "Trouver une formation officielle et de l'aide pour la payer",
          minutes: 5,
          goal: "Trouver un parcours de formation et vérifier sur les pages officielles ce que la VA peut payer.",
          text: [
            "NICCS a un catalogue de formations où vous pouvez chercher des cours en cyber. Les offres d'emploi vous diront quelle certification de base les employeurs veulent ; CompTIA Security+ revient souvent dans les offres de débutant, mais lisez les offres de votre propre région.",
            "La VA (l'administration américaine des anciens combattants) peut rembourser les frais d'examen de licence et de certification si vous avez une prestation GI Bill qui y donne droit. Quand nous avons vérifié va.gov en octobre 2026, la limite était de 2 000 dollars maximum par examen, et cela utilise une partie de vos droits. Le programme VET TEC 2.0 de la VA finance des formations non diplômantes en haute technologie comme la programmation, les logiciels et les sciences de l'information, avec un nombre de places limité chaque année. La page de VET TEC ne citait pas la cybersécurité par son nom : vérifiez donc si un programme y a droit.",
            "Le Veterans' Employment and Training Service (VETS) du ministère du Travail gère le Transition Assistance Program et oriente les vétérans vers l'aide à l'emploi et l'apprentissage."
          ],
          steps: ["Cherchez un cours de débutant dans le catalogue de formations de NICCS.", "Regardez cinq offres d'emploi pour trouver la certification la plus demandée.", "Lisez la page de va.gov sur les frais d'examen et la page de VET TEC 2.0.", "Consultez dol.gov/agencies/vets pour l'aide à l'emploi et l'apprentissage."],
          words: [["Débutant", "un emploi pour les personnes qui commencent dans un domaine."], ["Apprentissage", "un emploi payé où vous apprenez sur le terrain en travaillant."]],
          slides: [
            { title: "Trouvez une formation", bullets: ["Catalogue de formations de NICCS", "Les offres montrent la certification demandée"] },
            { title: "Aide pour payer (vérifiez va.gov)", bullets: ["Examens : jusqu'à 2 000 dollars par examen (oct. 2026)", "VET TEC 2.0 : haute technologie, places limitées", "Vérifiez que le programme y a droit avant"] },
            { title: "Aide à l'emploi", bullets: ["VETS du ministère du Travail", "Transition Assistance Program", "Apprentissages"] }
          ],
          sources: [
            { name: "VA : frais d'examen de licence et de certification", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA : VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Ministère du Travail des États-Unis, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "NICCS, agence américaine de cybersécurité et de sécurité des infrastructures (CISA)", url: "https://niccs.cisa.gov/" }
          ],
          tryIt: "Trouvez un cours cyber de débutant dans le catalogue de NICCS et la certification la plus demandée dans les offres de votre région. Puis ouvrez la page de va.gov sur les frais d'examen et notez si votre prestation y donne droit.",
          youCanNow: "trouver un parcours de formation officiel en cyber et vérifier ce que la VA peut aider à payer."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre parcours vers la cybersécurité",
        questions: [
          { q: "Que fait surtout un analyste SOC ?", options: ["Il vend des ordinateurs", "Il écrit des lois", "Il vérifie les alertes de sécurité pour voir si ce sont de vraies attaques", "Il répare seulement les imprimantes"], answer: 2, why: "Le SOC surveille les attaques et y répond." },
          { q: "Comment les attaquants utilisent-ils l'IA ?", options: ["Pour écrire des e-mails d'arnaque convaincants", "Ils ne l'utilisent pas", "Seulement pour jouer", "Pour réparer votre réseau gratuitement"], answer: 0, why: "L'IA aide les attaquants à écrire des arnaques crédibles." },
          { q: "L'OPSEC militaire est le plus proche de quelle compétence cyber ?", options: ["La peinture", "La cuisine", "La conduite", "La protection de l'information"], answer: 3, why: "L'OPSEC, c'est garder l'information loin des adversaires." },
          { q: "Quel site officiel a un Cyber Career Pathways Tool ?", options: ["Un forum de jeux", "NICCS de la CISA", "Un site de shopping", "Une application de musique"], answer: 1, why: "NICCS est le site de la CISA sur les carrières et formations en cyber." },
          { q: "La page de VET TEC 2.0 ne citait pas la cybersécurité par son nom. Que devez-vous faire ?", options: ["Supposer qu'elle est couverte", "Vérifier si le programme y a droit avant de commencer", "Abandonner la cyber", "Demander à un inconnu en ligne"], answer: 1, why: "Confirmez toujours sur la page officielle qu'un programme y a droit." }
        ]
      }
    },
    {
      name: "Chapitre 2 : S'entraîner comme un analyste",
      lessons: [
        {
          title: "Utiliser l'IA comme partenaire de révision en sécurité",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour apprendre une notion de sécurité et la réexpliquer avec vos mots.",
          text: [
            "Une notion clé en sécurité est la triade CIA : confidentialité (seules les bonnes personnes voient l'information), intégrité (l'information n'est pas modifiée sans autorisation) et disponibilité (les systèmes marchent quand on en a besoin).",
            "Demandez à un assistant d'IA d'expliquer une notion avec un exemple militaire, puis réexpliquez-la avec vos mots et demandez à l'IA de vous corriger. Cette \"réexplication\" est la façon de savoir que vous avez vraiment compris.",
            "Ne collez jamais de mots de passe, de vrais journaux d'entreprise, de données clients ou quoi que ce soit venant d'un système de travail dans un outil d'IA public. Utilisez des exemples inventés ou nettoyés. Beaucoup d'employeurs ont des règles sur les outils d'IA autorisés."
          ],
          steps: ["Choisissez une notion, comme la triade CIA.", "Demandez : \"Explique ceci avec des mots simples et un exemple militaire.\"", "Réexpliquez-la avec vos mots.", "Demandez à l'IA : \"Mon explication est-elle juste ? Qu'est-ce que j'ai oublié ?\"", "Utilisez seulement des exemples inventés, jamais de vraies données."],
          words: [["Triade CIA", "confidentialité, intégrité et disponibilité : les trois objectifs de la sécurité."], ["Réexplication", "expliquer quelque chose avec vos mots pour prouver que vous l'avez compris."], ["Journal (log)", "l'enregistrement par un ordinateur de ce qui s'est passé et quand."]],
          slides: [
            { title: "La triade CIA", bullets: ["Confidentialité : seules les bonnes personnes voient", "Intégrité : pas modifié sans autorisation", "Disponibilité : marche quand on en a besoin"] },
            { title: "La réexplication", bullets: ["L'IA explique avec un exemple militaire", "Vous réexpliquez", "L'IA vérifie ce que vous avez oublié"] },
            { title: "Pas de vraies données", bullets: ["Pas de mots de passe, vrais journaux ou données clients", "Des exemples inventés", "Suivez les règles de votre employeur sur l'IA"] }
          ],
          tryIt: "Demandez à un assistant d'IA d'expliquer la triade CIA avec un exemple militaire. Puis écrivez votre propre explication en deux phrases et demandez-lui de vous corriger.",
          youCanNow: "utiliser l'IA pour apprendre une notion de sécurité et prouver que vous la comprenez en la réexpliquant."
        },
        {
          title: "Vérifier un e-mail suspect",
          minutes: 6,
          goal: "Lister les signes d'alerte d'un e-mail suspect et décider quoi faire, sans rien cliquer.",
          text: [
            "L'hameçonnage (phishing) est un faux message qui essaie de vous faire cliquer sur un lien, ouvrir un fichier, ou donner un mot de passe ou de l'argent. Vérifier les e-mails signalés est une première tâche courante des analystes débutants.",
            "Signes d'alerte : l'adresse de l'expéditeur ne correspond pas à l'entreprise, le message vous presse ou vous menace, il demande un mot de passe, un code, un paiement ou des cartes cadeaux, le texte du lien et sa vraie adresse sont différents, ou il y a une pièce jointe inattendue.",
            "Pour utiliser l'IA sans risque, copiez seulement le texte du message et remplacez les noms, adresses e-mail et numéros de compte par des repères comme [nom]. Demandez à l'IA de lister les signes d'alerte. Ne cliquez pas sur les liens et n'ouvrez pas les pièces jointes. Passez la souris sur un lien (sur ordinateur) pour voir sa vraie adresse."
          ],
          steps: ["Ne cliquez pas sur les liens et n'ouvrez pas les pièces jointes.", "Regardez la vraie adresse de l'expéditeur et les adresses des liens.", "Copiez seulement le texte du message et remplacez les détails privés par des repères.", "Demandez à un assistant d'IA : \"Liste les signes d'hameçonnage de cet e-mail.\"", "Décidez : le signaler, le supprimer, ou vérifier auprès de l'entreprise avec un numéro que vous savez vrai."],
          words: [["Hameçonnage (phishing)", "un faux message qui essaie de vous pousser à cliquer, donner un mot de passe ou envoyer de l'argent."], ["Pièce jointe", "un fichier envoyé avec un e-mail."], ["Repère", "un texte provisoire comme [nom] utilisé à la place de vrais détails privés."]],
          slides: [
            { title: "L'hameçonnage", bullets: ["Un faux message qui vous piège", "Veut un clic, un mot de passe ou de l'argent"] },
            { title: "Signes d'alerte", bullets: ["Adresse d'expéditeur qui ne correspond pas", "Vous presse ou vous menace", "Demande mot de passe, code ou paiement", "Lien bizarre ou pièce jointe inattendue"] },
            { title: "Vérifiez sans risque avec l'IA", bullets: ["Ne cliquez jamais, n'ouvrez aucun fichier", "Collez le texte seul, avec des repères", "Demandez à l'IA les signes d'alerte"] }
          ],
          tryIt: "Trouvez un e-mail suspect dans votre dossier de spams (ou demandez à une IA d'en inventer un). Sans rien cliquer, listez vous-même ses signes d'alerte, puis demandez à l'IA et comparez les listes.",
          youCanNow: "repérer les signes d'un e-mail d'hameçonnage et le vérifier sans risque avec l'aide de l'IA."
        },
        {
          title: "Écrire une note d'incident et raconter votre parcours",
          minutes: 5,
          goal: "Écrire une note d'incident de cinq lignes et deux lignes de CV qui relient votre service au travail en cyber.",
          text: [
            "Les analystes écrivent des notes courtes pour que d'autres puissent agir. Une note d'incident simple de cinq lignes couvre : ce qui est arrivé, les signes d'alerte, le risque, ce que vous avez fait et ce que vous recommandez. C'est comme un compte rendu SALUTE ou un rapport ponctuel : clair, court et factuel.",
            "Votre CV doit relier votre service au travail en cyber avec des actions et des résultats, par exemple : \"Application de l'OPSEC et du contrôle d'accès pour une unité de 120 personnes ; [cours] en sécurité réseau terminé en 2026.\"",
            "Utilisez l'IA pour resserrer vos phrases, mais chaque ligne doit être vraie. En entretien, racontez une courte histoire sur une fois où vous avez remarqué quelque chose d'anormal et l'avez signalé."
          ],
          steps: ["Écrivez les cinq lignes : ce qui est arrivé, signes d'alerte, risque, action, recommandation.", "Gardez chaque ligne courte et factuelle.", "Écrivez deux lignes de CV qui relient votre service aux compétences cyber.", "Demandez à un assistant d'IA de les rendre plus claires, puis vérifiez que chaque mot est vrai."],
          words: [["Note d'incident", "un court rapport écrit sur un événement de sécurité et ce qui a été fait."], ["Recommandation", "ce que vous proposez de faire ensuite."]],
          slides: [
            { title: "Note d'incident en cinq lignes", bullets: ["Ce qui est arrivé", "Signes d'alerte et risque", "Ce que vous avez fait", "Ce que vous recommandez"] },
            { title: "Comme un rapport ponctuel", bullets: ["Clair, court, factuel", "Les autres peuvent agir"] },
            { title: "Votre parcours sur le CV", bullets: ["Action en service + compétence cyber + résultat", "L'IA peut resserrer ; chaque mot doit être vrai"] }
          ],
          tryIt: "Tâche finale : écrivez la note d'incident de cinq lignes pour l'e-mail vérifié à la leçon 5, puis écrivez deux lignes de CV qui relient votre expérience militaire à un emploi en cyber.",
          youCanNow: "vérifier un e-mail suspect comme un analyste débutant, le signaler clairement et présenter votre service comme une expérience en cyber."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : S'entraîner comme un analyste",
        questions: [
          { q: "Dans la triade CIA, \"intégrité\" veut dire :", options: ["Les données sont gratuites", "Les systèmes sont toujours rapides", "Seuls les managers peuvent se connecter", "L'information n'est pas modifiée sans autorisation"], answer: 3, why: "L'intégrité, c'est que l'information reste juste et inchangée." },
          { q: "Que ne faut-il JAMAIS coller dans un outil d'IA public ?", options: ["Un vrai journal d'entreprise ou un mot de passe", "Un exemple inventé", "Une question générale", "Les mots \"triade CIA\""], answer: 0, why: "Les vraies données et les mots de passe doivent rester privés." },
          { q: "Un e-mail vous presse et demande un code envoyé sur votre téléphone. C'est :", options: ["Normal", "Une offre d'emploi", "Un signe d'hameçonnage", "Une mise à jour système"], answer: 2, why: "La pression et la demande de code sont des signes classiques d'hameçonnage." },
          { q: "Quelle est la première étape sûre face à un lien suspect ?", options: ["Cliquer pour voir", "Répondre pour demander", "Le transférer à tout le monde", "Ne pas cliquer ; vérifier la vraie adresse"], answer: 3, why: "Cliquer peut infecter l'appareil ou voler des informations." },
          { q: "Une bonne note d'incident est :", options: ["Longue et émotive", "Seulement une supposition", "Courte, claire et factuelle", "Envoyée à l'attaquant"], answer: 2, why: "Les autres ont besoin de faits clairs pour agir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : IA et carrières en cybersécurité",
    questions: [
      { q: "La cybersécurité, c'est :", options: ["Créer des jeux vidéo", "Protéger les ordinateurs, les réseaux et les informations", "Vendre des téléphones", "Dessiner des logos"], answer: 1, why: "Elle protège les systèmes et les informations contre les attaquants." },
      { q: "Un analyste GRC surtout :", options: ["Vérifie qu'une organisation suit ses règles de sécurité", "Répare des voitures", "Écrit de la musique", "Livre des colis"], answer: 0, why: "Gouvernance, risque et conformité, c'est le respect des règles." },
      { q: "Comment les défenseurs utilisent-ils l'IA ?", options: ["Pour remplacer toutes les personnes", "Pour envoyer des e-mails d'arnaque", "Pour trier les alertes et résumer les journaux", "Ils ne l'utilisent jamais"], answer: 2, why: "L'IA aide les défenseurs à traiter de grandes quantités de données." },
      { q: "Pourquoi les employeurs veulent-ils des gens capables de juger ce que produit l'IA ?", options: ["L'IA peut se tromper et les attaquants l'utilisent aussi", "L'IA ne se trompe jamais", "C'est la loi", "L'IA ne sait pas lire"], answer: 0, why: "Le jugement humain repère les erreurs de l'IA et les arnaques faites avec l'IA." },
      { q: "Monter la garde dans l'armée ressemble le plus à quelle tâche cyber ?", options: ["Coder des jeux", "Vendre", "Peindre", "Surveiller"], answer: 3, why: "Guetter tout ce qui est inhabituel, c'est de la surveillance." },
      { q: "Signaler un problème à la hiérarchie, c'est comme :", options: ["Le marketing", "La réponse aux incidents", "L'expédition", "Le recrutement"], answer: 1, why: "La réponse aux incidents commence par le signalement de ce qui s'est passé." },
      { q: "Comment indiquer une habilitation de sécurité sur un CV ?", options: ["Publier tous les détails en ligne", "Comme l'autorise votre service de sécurité, en général le niveau et le statut", "Ne jamais en parler", "En inventer une"], answer: 1, why: "Suivez les consignes de votre service de sécurité." },
      { q: "NICCS est géré par :", options: ["Un opérateur téléphonique", "Une entreprise de jeux vidéo", "Une banque", "La CISA, l'agence américaine de cybersécurité et de sécurité des infrastructures"], answer: 3, why: "NICCS est le site de la CISA sur les carrières et formations en cyber." },
      { q: "Où trouver la certification de base que les employeurs veulent le plus ?", options: ["Dans les vraies offres d'emploi de votre région", "Dans une publicité au hasard", "À pile ou face", "Dans un vieux manuel"], answer: 0, why: "Les offres d'emploi listent ce que demandent les employeurs." },
      { q: "Selon va.gov en octobre 2026, le remboursement des frais d'examen par la VA va jusqu'à :", options: ["Illimité", "50 dollars par examen", "2 000 dollars par examen", "10 000 dollars par examen"], answer: 2, why: "La page disait 2 000 dollars maximum par examen." },
      { q: "Quelle agence du ministère du Travail aide les vétérans pour l'emploi ?", options: ["Le bureau du recensement", "La Poste", "La NASA", "VETS, le Veterans' Employment and Training Service"], answer: 3, why: "VETS gère les programmes d'emploi des vétérans, dont le TAP." },
      { q: "Dans la triade CIA, \"disponibilité\" veut dire :", options: ["Les données changent souvent", "Les données sont secrètes", "Les systèmes marchent quand on en a besoin", "Tout le monde peut se connecter"], answer: 2, why: "La disponibilité, c'est que les systèmes marchent quand il faut." },
      { q: "Qu'est-ce qu'une réexplication ?", options: ["Copier une réponse", "Expliquer une notion avec vos mots pour prouver que vous l'avez comprise", "Demander à quelqu'un d'autre d'étudier", "Sauter une leçon"], answer: 1, why: "La réexpliquer montre une vraie compréhension." },
      { q: "Qu'est-ce qu'on peut utiliser sans risque pour s'entraîner avec l'IA ?", options: ["Un exemple inventé", "Les vrais journaux de votre employeur", "Des fiches clients", "Votre mot de passe"], answer: 0, why: "Les exemples inventés protègent les vraies données." },
      { q: "L'hameçonnage, c'est :", options: ["Un type de pare-feu", "Un outil de sécurité", "Un faux message qui vous pousse à cliquer ou à partager", "Un intitulé de poste"], answer: 2, why: "L'hameçonnage piège les gens pour obtenir un accès ou de l'argent." },
      { q: "Lequel est un signe d'hameçonnage ?", options: ["L'adresse de l'expéditeur ne correspond pas à l'entreprise", "Un message d'un collègue connu à propos du déjeuner", "Une lettre d'information à laquelle vous êtes abonné", "Un rappel d'agenda que vous avez créé"], answer: 0, why: "Une adresse d'expéditeur qui ne correspond pas est un signe courant." },
      { q: "Avant de coller un e-mail dans l'IA, vous devez :", options: ["Ouvrir la pièce jointe", "Ajouter votre mot de passe", "Cliquer sur tous les liens", "Remplacer les noms, e-mails et numéros par des repères"], answer: 3, why: "Les repères gardent les détails privés hors de l'IA." },
      { q: "Comment voir où mène vraiment un lien sur un ordinateur ?", options: ["Cliquer dessus", "Passer la souris dessus sans cliquer", "Répondre à l'expéditeur", "Imprimer l'e-mail"], answer: 1, why: "Le survol montre la vraie adresse sans risque." },
      { q: "Une note d'incident de cinq lignes se termine par :", options: ["Une blague", "Ce que vous recommandez", "Votre mot de passe", "Un lien à cliquer"], answer: 1, why: "La recommandation dit aux autres quoi faire ensuite." },
      { q: "Quelle ligne de CV est la plus forte ?", options: ["\"Travailleur acharné.\"", "\"Bon en informatique.\"", "\"J'aime la cyber.\"", "\"Application de l'OPSEC et du contrôle d'accès pour une unité de 120 personnes ; cours de sécurité réseau terminé en 2026.\""], answer: 3, why: "Elle montre l'action, l'échelle et la formation." }
    ]
  }
};
