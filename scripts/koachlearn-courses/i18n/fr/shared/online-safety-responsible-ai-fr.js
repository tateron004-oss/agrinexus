"use strict";

// Koach Learn course (shared), French translation of "Online Safety and Responsible AI Use". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "online-safety-responsible-ai-fr",
  lang: "fr",
  translationOf: "online-safety-responsible-ai",
  category: "Re-Entry",
  name: "Sécurité en ligne et usage responsable de l'IA",
  skills: "Créer des mots de passe solides, Activer la connexion en deux étapes, Repérer l'hameçonnage et les arnaques par IA, Signaler les arnaques et l'usurpation d'identité, Vérifier les erreurs et les biais de l'IA, Utiliser l'IA honnêtement à l'école et au travail",
  outcome: "verrouiller vos principaux comptes avec des phrases de passe solides et la connexion en deux étapes, repérer et signaler l'hameçonnage, les deepfakes et les arnaques utilisant l'IA, et utiliser les outils d'IA de façon honnête et juste, en vérifiant leurs réponses et en suivant les règles de l'école ou du travail.",
  about: [
    "Être en ligne comporte de vrais risques : comptes volés, arnaques, et faux messages qui ont l'air vrais et sonnent vrai grâce à l'IA. Cela soulève aussi de nouvelles questions : quand est-il juste d'utiliser l'IA, et comment savoir si elle se trompe ou est injuste ?",
    "Ce cours s'adresse à tout le monde : personnes qui sortent de prison et reviennent en ligne, jeunes, anciens militaires, demandeurs d'emploi et habitants du quartier. Aucune expérience technique n'est nécessaire.",
    "Au chapitre 1, vous apprendrez à vous protéger. Au chapitre 2, vous apprendrez à utiliser l'IA de façon responsable. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Remplissez une liste de contrôle personnelle de sécurité en ligne et d'usage responsable de l'IA : remplacez le mot de passe de votre e-mail principal par une phrase de passe solide, activez pour lui la connexion en deux étapes, vérifiez les mises à jour de votre téléphone et de vos applications, notez les trois endroits où signaler les arnaques, et écrivez une carte de cinq lignes avec vos règles personnelles sur l'IA : vie privée, vérification des réponses, honnêteté, équité et quand ne pas utiliser l'IA.",
  chapters: [
    {
      name: "Chapitre 1 : Se protéger en ligne",
      lessons: [
        {
          title: "Mots de passe solides et connexion en deux étapes",
          minutes: 5,
          goal: "Créer une phrase de passe solide et activer la connexion en deux étapes pour votre e-mail.",
          text: [
            "Votre e-mail est la clé de tout : si quelqu'un y entre, il peut réinitialiser vos autres mots de passe. Protégez-le en premier.",
            "Un mot de passe solide est long et unique. Une façon simple est la phrase de passe : quatre mots ou plus pris au hasard, comme « erable-riviere-tigre-lampe ». Utilisez un mot de passe différent pour chaque compte important. Un gestionnaire de mots de passe, intégré à beaucoup de téléphones et de navigateurs, peut les retenir pour vous.",
            "Activez la connexion en deux étapes, aussi appelée authentification multifacteur ou MFA. Après votre mot de passe, vous saisissez aussi un code reçu sur votre téléphone ou vous approuvez une demande. Même si quelqu'un vole votre mot de passe, il ne peut pas entrer. La CISA (Cybersecurity and Infrastructure Security Agency, l'agence américaine de cybersécurité) recommande des mots de passe solides, la MFA, un gestionnaire de mots de passe et des logiciels à jour."
          ],
          steps: ["Créez une phrase de passe de quatre mots ou plus pris au hasard.", "Remplacez le mot de passe de votre e-mail par celle-ci.", "Ouvrez les paramètres de sécurité de votre compte e-mail.", "Activez la connexion en deux étapes (MFA) et suivez les étapes.", "Gardez les codes de secours dans un endroit sûr et privé."],
          words: [["Phrase de passe", "un mot de passe fait de plusieurs mots pris au hasard."], ["MFA / connexion en deux étapes", "une deuxième vérification, comme un code sur le téléphone, après le mot de passe."], ["Gestionnaire de mots de passe", "une application sécurisée qui garde vos mots de passe."]],
          slides: [
            { title: "Protéger d'abord votre e-mail", bullets: ["Il peut réinitialiser vos autres comptes"] },
            { title: "Des mots de passe solides", bullets: ["Longs et uniques", "Quatre mots ou plus pris au hasard", "Un différent pour chaque compte important"] },
            { title: "Connexion en deux étapes (MFA)", bullets: ["Mot de passe plus un code ou une demande sur le téléphone", "Bloque la plupart des attaques par mot de passe volé", "Garder les codes de secours en lieu sûr"] }
          ],
          sources: [{ name: "CISA : sensibilisation à la cybersécurité et Secure Our World", url: "https://www.cisa.gov/secure-our-world" }],
          tryIt: "Remplacez le mot de passe de votre e-mail principal par une phrase de passe solide et activez la connexion en deux étapes. Si vous ne pouvez pas le faire maintenant, notez les étapes et faites-le aujourd'hui.",
          youCanNow: "créer une phrase de passe solide et protéger votre e-mail avec la connexion en deux étapes."
        },
        {
          title: "Repérer l'hameçonnage et les arnaques par IA",
          minutes: 6,
          goal: "Reconnaître les messages d'hameçonnage, les faux appels et les deepfakes avant de cliquer ou de payer.",
          text: [
            "L'hameçonnage (phishing) est un faux message, par e-mail, SMS ou réseau social, qui cherche à vous faire cliquer sur un lien, partager des informations ou envoyer de l'argent. La FTC (Federal Trade Commission, l'agence américaine de protection des consommateurs) cite des signes courants : un message inattendu d'une entreprise que vous connaissez, l'annonce d'un problème avec votre compte ou un paiement, une demande de confirmer des informations personnelles, et un lien pour « mettre à jour » votre paiement.",
            "L'IA rend les arnaques plus convaincantes. Les escrocs peuvent écrire des messages parfaits, faire de fausses vidéos appelées deepfakes et copier la voix d'une personne à partir d'un court extrait. Un appel peut avoir exactement la voix de votre petit-fils, de votre patron ou de votre agent de probation.",
            "Les signes d'alerte restent les mêmes : on vous presse, on vous fait peur, on demande des cartes cadeaux, des virements ou des cryptomonnaies, ou un code envoyé sur votre téléphone. Arrêtez-vous. Ne cliquez pas. Contactez la personne ou l'entreprise par un numéro ou un site que vous savez déjà être le vrai."
          ],
          steps: ["Faites une pause : ce message est-il inattendu ou urgent ?", "Ne cliquez pas sur les liens et n'ouvrez pas les pièces jointes.", "Repérez les demandes d'argent, de cartes cadeaux, de cryptomonnaies ou de codes.", "Contactez la personne ou l'entreprise par un numéro que vous connaissez déjà.", "Signalez-le et supprimez-le."],
          words: [["Hameçonnage (phishing)", "un faux message qui cherche à voler des informations ou de l'argent."], ["Deepfake", "une fausse vidéo, image ou voix faite avec l'IA pour avoir l'air vraie."], ["Clonage de voix", "utiliser l'IA pour copier la voix de quelqu'un."]],
          slides: [
            { title: "Signes d'hameçonnage (FTC)", bullets: ["Message inattendu d'une entreprise connue", "« Problème avec votre compte ou votre paiement »", "Demande de confirmer des informations ou de cliquer pour payer"] },
            { title: "L'IA rend les arnaques convaincantes", bullets: ["Écriture parfaite", "Vidéos deepfake", "Voix clonées de personnes que vous connaissez"] },
            { title: "Les mêmes signes d'alerte", bullets: ["Urgence ou peur", "Cartes cadeaux, virements, cryptomonnaies, codes", "Rappeler sur un numéro que vous connaissez"] }
          ],
          sources: [{ name: "FTC : reconnaître et éviter l'hameçonnage", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Parcourez vos e-mails et SMS à la recherche d'un message qui pourrait être de l'hameçonnage. Listez les signes d'alerte qu'il montre. Avec votre famille, convenez d'un mot de sécurité pour vérifier les appels d'urgence.",
          youCanNow: "repérer l'hameçonnage, les deepfakes et les arnaques par voix clonée, et réagir en sécurité."
        },
        {
          title: "Signaler les arnaques et se remettre d'une usurpation d'identité",
          minutes: 5,
          goal: "Savoir où signaler les arnaques et quoi faire en premier si vos informations sont volées.",
          text: [
            "Signaler aide à arrêter les escrocs et peut vous aider à vous en remettre. Aux États-Unis, la FTC dit de transférer les e-mails d'hameçonnage à reportphishing@apwg.org, de transférer les SMS d'arnaque au 7726 (SPAM), et de signaler la fraude sur ReportFraud.ftc.gov.",
            "Si vous avez donné un numéro de sécurité sociale, de carte de crédit ou de compte bancaire, la FTC dit d'aller sur IdentityTheft.gov pour les étapes selon ce qui a été perdu. Agissez vite : appelez votre banque, changez vos mots de passe, et envisagez une alerte à la fraude ou un gel du crédit.",
            "Si vous avez cliqué sur un mauvais lien, mettez à jour votre logiciel de sécurité, lancez une analyse et supprimez ce qu'il signale. Hors des États-Unis, signalez-le à l'unité de cybercriminalité de la police nationale ou à l'organisme de protection des consommateurs de votre pays."
          ],
          steps: ["E-mail d'hameçonnage : transférez-le à reportphishing@apwg.org.", "SMS d'arnaque : transférez-le au 7726.", "Fraude : signalez-la sur ReportFraud.ftc.gov.", "Informations volées : suivez IdentityTheft.gov et appelez votre banque.", "Lien cliqué : mettez à jour le logiciel de sécurité et lancez une analyse."],
          words: [["Usurpation d'identité", "quand quelqu'un utilise vos informations personnelles pour se faire passer pour vous."], ["Gel du crédit", "un verrou qui empêche d'ouvrir un nouveau crédit à votre nom."]],
          slides: [
            { title: "Où signaler (États-Unis)", bullets: ["E-mails d'hameçonnage : reportphishing@apwg.org", "SMS d'arnaque : transférer au 7726", "Fraude : ReportFraud.ftc.gov"] },
            { title: "Informations volées ?", bullets: ["IdentityTheft.gov", "Appeler votre banque", "Changer les mots de passe ; envisager un gel du crédit"] },
            { title: "Cliqué sur un mauvais lien ?", bullets: ["Mettre à jour le logiciel de sécurité", "Lancer une analyse", "Supprimer ce qu'il signale"] }
          ],
          sources: [{ name: "FTC : reconnaître et éviter l'hameçonnage", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }, { name: "IdentityTheft.gov", url: "https://www.identitytheft.gov/" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Notez sur une carte ou dans les notes de votre téléphone les trois endroits où signaler les arnaques aux États-Unis (ou leurs équivalents dans votre pays).",
          youCanNow: "signaler les arnaques et faire les premières démarches après une usurpation d'identité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se protéger en ligne",
        questions: [
          { q: "Quel est le mot de passe le plus solide ?", options: ["motdepasse123", "votre date de naissance", "erable-riviere-tigre-lampe", "123456"], answer: 2, why: "Les longues phrases de passe faites de mots au hasard sont solides." },
          { q: "Que fait la connexion en deux étapes (MFA) ?", options: ["Elle ajoute une deuxième vérification, comme un code sur le téléphone, après le mot de passe", "Elle raccourcit votre mot de passe", "Elle partage votre mot de passe avec vos amis", "Elle désactive votre compte"], answer: 0, why: "Une deuxième vérification bloque les attaquants qui n'ont que votre mot de passe." },
          { q: "Vous recevez un appel avec la voix de votre petit-fils qui demande des cartes cadeaux tout de suite. Que faites-vous ?", options: ["Acheter vite les cartes cadeaux", "Lui lire votre numéro de compte", "Envoyer des cryptomonnaies", "Raccrocher et le rappeler sur un numéro que vous connaissez"], answer: 3, why: "Les voix peuvent être clonées par l'IA ; rappelez sur un numéro connu." },
          { q: "Qu'est-ce qu'un deepfake ?", options: ["Une piscine profonde", "Une fausse vidéo, image ou voix faite avec l'IA", "Un mot de passe solide", "Un vrai reportage"], answer: 1, why: "Les deepfakes sont des faux faits par l'IA qui ont l'air vrais." },
          { q: "Aux États-Unis, où la FTC dit-elle de transférer les SMS d'arnaque ?", options: ["Au 911", "Au 7726 (SPAM)", "À l'escroc", "À vos contacts"], answer: 1, why: "La FTC dit de transférer les SMS d'arnaque au 7726." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA de façon responsable",
      lessons: [
        {
          title: "Protéger sa vie privée quand on utilise l'IA",
          minutes: 5,
          goal: "Décider ce qu'on peut taper sans risque dans un outil d'IA et ce qu'on ne doit pas taper.",
          text: [
            "Ce que vous tapez dans un chat d'IA peut être conservé et, selon l'outil et les réglages, servir à l'améliorer. Faites comme si vous parliez dans un lieu public.",
            "Ne tapez jamais : mots de passe, numéros de sécurité sociale ou de pièce d'identité, numéros de compte bancaire ou de carte, numéros de dossier judiciaire ou d'écrou, détails médicaux liés à votre nom, ni les informations privées d'autres personnes. Utilisez plutôt des repères comme « [mon numéro] » ou des descriptions générales.",
            "Cherchez dans les réglages de l'outil les options de confidentialité et de données, comme désactiver l'historique des discussions ou l'entraînement sur vos discussions quand c'est proposé. À l'école ou au travail, n'utilisez que les outils d'IA autorisés, et suivez les règles sur les informations qu'on peut y mettre."
          ],
          steps: ["Relisez votre demande avant de l'envoyer.", "Retirez les numéros privés, les noms et les détails médicaux.", "Utilisez des repères comme « [mon numéro] ».", "Vérifiez les réglages de confidentialité de l'outil.", "À l'école ou au travail, n'utilisez que les outils autorisés."],
          words: [["Réglages de confidentialité", "les options qui contrôlent ce qu'une application garde et partage sur vous."], ["Repère", "un remplaçant comme « [mon numéro] » à la place de vrais détails privés."]],
          slides: [
            { title: "Un chat d'IA n'est pas un journal intime", bullets: ["Ce que vous tapez peut être conservé", "Faites comme dans un lieu public"] },
            { title: "Ne jamais taper", bullets: ["Mots de passe, numéros d'identité ou de dossier", "Numéros de compte bancaire ou de carte", "Les détails privés d'autres personnes"] },
            { title: "Garder le contrôle", bullets: ["Utiliser des repères", "Vérifier les réglages de confidentialité", "Outils autorisés à l'école ou au travail"] }
          ],
          tryIt: "Ouvrez les réglages d'un assistant d'IA que vous utilisez et trouvez ses options de confidentialité ou de données. Puis réécrivez cette demande en toute sécurité : « Mon numéro de sécurité sociale est 123-45-6789, aide-moi à remplir ce formulaire. »",
          youCanNow: "garder les informations privées hors des outils d'IA et utiliser leurs réglages de confidentialité."
        },
        {
          title: "Vérifier les erreurs et les biais de l'IA",
          minutes: 5,
          goal: "Vérifier une réponse d'IA pour y trouver erreurs et biais injustes avant de l'utiliser.",
          text: [
            "L'IA peut se tromper avec assurance. Elle peut inventer des faits, des citations, des lois ou des sources : on appelle cela une hallucination. Vérifiez toujours les faits importants auprès d'une source officielle ou fiable.",
            "L'IA peut aussi être biaisée : elle a appris à partir de textes humains, qui contiennent des stéréotypes injustes. Elle peut décrire les infirmiers comme des femmes et les ingénieurs comme des hommes, ou traiter les gens différemment selon leur nom, leur âge, leur origine, un handicap ou un casier judiciaire. Pour l'embauche, le crédit, le logement ou l'école, cela peut causer un vrai tort.",
            "Testez-la : posez la même question en changeant un seul détail, par exemple un autre prénom, et comparez les réponses. Si l'IA traite les gens injustement, n'utilisez pas cette réponse et signalez-la avec le bouton de retour de l'outil."
          ],
          steps: ["Repérez les faits dans la réponse et vérifiez-les auprès d'une source fiable.", "Cherchez les stéréotypes ou les suppositions injustes.", "Reposez la question en changeant un détail et comparez.", "N'utilisez pas les réponses injustes ou fausses.", "Signalez les problèmes avec le bouton de retour de l'outil."],
          words: [["Hallucination", "quand l'IA affirme quelque chose de faux comme si c'était vrai."], ["Biais", "un traitement ou des suppositions injustes sur un groupe de personnes."], ["Stéréotype", "une idée trop simple sur un groupe."]],
          slides: [
            { title: "L'IA peut se tromper avec assurance", bullets: ["Faits, citations et sources inventés", "Vérifier l'important auprès de sources fiables"] },
            { title: "L'IA peut être biaisée", bullets: ["Elle a appris de textes humains", "Stéréotypes sur le genre, l'origine, l'âge, le casier", "Un vrai tort pour l'embauche, le logement, l'école"] },
            { title: "Tester et signaler", bullets: ["Changer un détail et comparer", "Ne pas utiliser les réponses injustes", "Utiliser le bouton de retour"] }
          ],
          tryIt: "Demandez à un assistant d'IA de « décrire un infirmier typique et un ingénieur typique ». Cherchez les stéréotypes. Puis demandez-lui une lettre de recommandation pour « Maria » puis pour « James », avec les mêmes détails, et comparez.",
          youCanNow: "vérifier les réponses de l'IA pour y trouver des erreurs et les tester pour repérer des biais injustes."
        },
        {
          title: "Utiliser l'IA honnêtement à l'école, au travail et en ligne",
          minutes: 5,
          goal: "Suivre les règles d'usage de l'IA et dire honnêtement quand vous l'avez utilisée.",
          text: [
            "Les règles sur l'IA varient. Certains enseignants l'autorisent pour trouver des idées mais pas pour rédiger ; certains emplois l'exigent ; d'autres l'interdisent. Demandez ou lisez d'abord les règles. Faire passer le travail de l'IA pour le vôtre là où ce n'est pas permis, c'est tricher, et cela peut vous coûter une note, un emploi ou un certificat.",
            "Soyez honnête. Si l'IA vous a aidé, dites comment quand c'est important : « J'ai utilisé un assistant d'IA pour vérifier la grammaire. » N'utilisez jamais l'IA pour faire de faux avis, de faux documents, ou des images ou vidéos de vraies personnes sans leur accord. Faire de fausses images sexuelles ou humiliantes de vraies personnes est nuisible et, dans beaucoup de pays, illégal.",
            "Sachez quand ne pas utiliser l'IA : les urgences (appelez le 911 aux États-Unis, ou le numéro d'urgence local), les grandes décisions de santé, de droit ou d'argent (parlez à un professionnel), et tout ce que vous ne voudriez pas voir conservé. Vous êtes responsable de ce que vous envoyez ou publiez, même si l'IA l'a écrit."
          ],
          steps: ["Lisez ou demandez les règles sur l'IA à votre école ou à votre travail.", "N'utilisez l'IA que de la façon permise.", "Dites comment l'IA vous a aidé quand c'est important.", "Ne faites jamais de faux de vraies personnes ou de documents.", "N'utilisez pas l'IA pour les urgences et les grandes décisions."],
          words: [["Honnêteté intellectuelle", "faire son propre travail et reconnaître l'aide qu'on a reçue."], ["Consentement", "l'autorisation d'une personne."]],
          slides: [
            { title: "Connaître les règles", bullets: ["Les règles varient selon la classe et l'emploi", "Les demander ou les lire d'abord", "Les enfreindre peut coûter une note ou un emploi"] },
            { title: "Être honnête", bullets: ["Dire comment l'IA a aidé", "Pas de faux avis ni de faux documents", "Pas de faux de vraies personnes sans accord"] },
            { title: "Quand ne pas utiliser l'IA", bullets: ["Urgences : le 911 ou le numéro d'urgence local", "Grandes décisions de santé, de droit ou d'argent", "Vous êtes responsable de ce que vous publiez"] }
          ],
          tryIt: "Tâche finale : terminez votre liste de contrôle de sécurité (phrase de passe, connexion en deux étapes, mises à jour, endroits où signaler) et écrivez une carte de cinq lignes avec vos règles personnelles sur l'IA : vie privée, vérification des réponses, honnêteté, équité et quand ne pas utiliser l'IA.",
          youCanNow: "protéger vos comptes, éviter et signaler les arnaques, et utiliser l'IA de façon sûre, honnête et juste."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA de façon responsable",
        questions: [
          { q: "Que peut-on taper sans risque dans un assistant d'IA ?", options: ["Votre numéro de sécurité sociale", "Votre mot de passe bancaire", "Les antécédents médicaux de votre ami", "« Aide-moi à écrire un mot de remerciement à ma conseillère de suivi »"], answer: 3, why: "Les demandes générales sans détails privés sont sans risque." },
          { q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Quand l'IA affirme quelque chose de faux comme si c'était vrai", "Un rêve", "Un mot de passe solide", "Un type de virus"], answer: 0, why: "L'IA peut inventer des faits avec assurance." },
          { q: "Comment tester un outil d'IA pour repérer un biais ?", options: ["Lui faire confiance", "Lui demander s'il est biaisé et le croire", "Poser la même question en changeant un détail et comparer", "Ne l'utiliser que la nuit"], answer: 2, why: "Changer un détail montre s'il traite les gens différemment." },
          { q: "Votre enseignant n'autorise l'IA que pour trouver des idées. Qu'est-ce qui est honnête ?", options: ["Faire écrire toute la dissertation par l'IA et dire que c'est la vôtre", "Copier la dissertation IA d'un ami", "Ignorer la règle", "L'utiliser pour trouver des idées, puis rédiger vous-même"], answer: 3, why: "Suivez les règles sur la façon dont l'IA peut être utilisée." },
          { q: "Quelqu'un fait un malaise grave. Que faites-vous ?", options: ["Demander à un chatbot d'IA", "Publier en ligne", "Appeler les secours (le 911 aux États-Unis)", "Attendre"], answer: 2, why: "Les urgences demandent les services de secours, pas l'IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Sécurité en ligne et usage responsable de l'IA",
    questions: [
      { q: "Quel compte faut-il protéger en premier ?", options: ["Un compte de jeu", "Votre e-mail", "Un site de recettes", "Une appli météo"], answer: 1, why: "L'e-mail peut réinitialiser vos autres mots de passe." },
      { q: "Une phrase de passe est :", options: ["Un mot de passe fait de plusieurs mots pris au hasard", "Votre nom et votre date de naissance", "Un petit nombre", "Un code de téléphone"], answer: 0, why: "Des mots au hasard font des mots de passe longs et solides." },
      { q: "Faut-il utiliser le même mot de passe partout ?", options: ["Oui, c'est plus simple", "Seulement pour les banques", "Non, un différent pour chaque compte important", "Seulement pour l'e-mail"], answer: 2, why: "Un seul mot de passe volé ouvrirait tout." },
      { q: "Un gestionnaire de mots de passe :", options: ["Garde vos mots de passe en sécurité", "Les partage en ligne", "Devine les mots de passe des autres", "Supprime vos comptes"], answer: 0, why: "Il retient pour vous des mots de passe solides." },
      { q: "Quelle agence américaine recommande mots de passe solides, MFA et mises à jour dans sa campagne de sensibilisation ?", options: ["La NASA", "La Poste américaine", "Le service des parcs nationaux", "La CISA"], answer: 3, why: "La CISA mène la sensibilisation à la cybersécurité aux États-Unis." },
      { q: "Un SMS inattendu dit que votre compte bancaire est bloqué et donne un lien. Vous devez :", options: ["Cliquer et saisir vos identifiants", "Ne pas cliquer ; contacter la banque par un numéro que vous connaissez", "Répondre avec votre numéro de carte", "Le transférer à vos amis"], answer: 1, why: "C'est un signe classique d'hameçonnage." },
      { q: "Des escrocs qui demandent un paiement par carte cadeau, c'est :", options: ["Normal pour les administrations", "Un signe d'arnaque", "Un moyen sûr de payer ses factures", "Exigé par les banques"], answer: 1, why: "Les vraies administrations ne demandent pas de cartes cadeaux." },
      { q: "Le clonage de voix, c'est :", options: ["Chanter dans une chorale", "Enregistrer votre propre messagerie", "Une mise à jour du téléphone", "Utiliser l'IA pour copier la voix de quelqu'un"], answer: 3, why: "Les escrocs peuvent copier une voix à partir de courts extraits." },
      { q: "Un mot de sécurité familial vous aide à :", options: ["Vérifier qu'un appel d'urgence vient vraiment de la famille", "Déverrouiller votre téléphone", "Avoir des réductions", "Réinitialiser vos mots de passe"], answer: 0, why: "Une voix clonée ne connaîtra pas le mot de sécurité." },
      { q: "Où signaler une fraude aux États-Unis ?", options: ["Dans une section de commentaires", "Sur le site de l'escroc", "Sur ReportFraud.ftc.gov", "Nulle part"], answer: 2, why: "La FTC recueille les signalements de fraude." },
      { q: "Si votre numéro de sécurité sociale a été volé, la FTC vous oriente vers :", options: ["Un groupe sur les réseaux sociaux", "Un chatbot d'IA", "Rien", "IdentityTheft.gov"], answer: 3, why: "IdentityTheft.gov donne les étapes pour s'en remettre." },
      { q: "Un gel du crédit :", options: ["Gèle votre compte bancaire pour toujours", "Refroidit votre ordinateur", "Empêche d'ouvrir un nouveau crédit à votre nom", "Efface votre historique de crédit"], answer: 2, why: "Il bloque l'ouverture de nouveaux comptes par des voleurs." },
      { q: "Que faire si vous avez cliqué sur un mauvais lien ?", options: ["Rien", "Mettre à jour le logiciel de sécurité et lancer une analyse", "Cliquer sur d'autres liens", "Jeter le téléphone"], answer: 1, why: "Une analyse trouve et supprime les logiciels nuisibles." },
      { q: "Taper dans un chat d'IA, c'est surtout comme :", options: ["Parler dans un lieu public", "Écrire dans un journal intime fermé à clé", "Penser en silence", "Parler à un avocat"], answer: 0, why: "Les discussions peuvent être conservées, alors soyez prudent." },
      { q: "Au lieu de taper votre numéro de dossier dans l'IA, utilisez :", options: ["Le vrai numéro", "La moitié du numéro", "Un repère comme « [mon numéro] »", "Votre numéro de sécurité sociale"], answer: 2, why: "Les repères protègent les détails privés." },
      { q: "Le biais de l'IA désigne :", options: ["Un traitement ou des suppositions injustes sur des groupes de personnes", "Une réponse rapide", "Une longue réponse", "Un type de mot de passe"], answer: 0, why: "L'IA peut répéter des stéréotypes injustes." },
      { q: "Un outil d'IA note un candidat plus bas uniquement à cause de son nom. Vous devez :", options: ["L'utiliser quand même", "Changer le nom du candidat", "Le cacher", "Ne pas utiliser ce résultat et le signaler"], answer: 3, why: "Un résultat d'IA injuste ne doit pas être utilisé." },
      { q: "Si l'IA a aidé votre travail et que c'est important, vous devez :", options: ["Le cacher", "Dire comment l'IA a aidé", "Prétendre l'avoir fait seul", "Accuser l'IA des erreurs"], answer: 1, why: "L'honnêteté sur l'usage de l'IA crée la confiance." },
      { q: "Faire avec l'IA une fausse image humiliante d'un vrai camarade de classe, c'est :", options: ["Une blague sans danger", "Nuisible et illégal dans beaucoup de pays", "Exigé par l'école", "Bon pour la sécurité"], answer: 1, why: "Les faux de vraies personnes sans leur accord causent un vrai tort." },
      { q: "Qui est responsable d'une publication écrite par l'IA que vous partagez ?", options: ["L'IA", "Personne", "Le fournisseur d'accès à internet", "Vous"], answer: 3, why: "Vous êtes responsable de ce que vous envoyez ou publiez." }
    ]
  }
};
