"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-banking-safety.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (checked 27 October 2026): FTC scam signs and ReportFraud.ftc.gov; National Elder Fraud Hotline 833-372-8311; IdentityTheft.gov.

module.exports = {
  id: "seniors-ai-banking-safety-fr",
  lang: "fr",
  translationOf: "seniors-ai-banking-safety",
  category: "Seniors and Technology",
  name: "L'IA et la sécurité de la banque en ligne",
  skills: "Obtenir la vraie application de sa banque, Se connecter en sécurité avec la vérification en deux étapes, Activer les alertes de compte, Repérer les arnaques bancaires utilisant l'IA, Utiliser les applications de paiement avec prudence, Savoir quoi faire en cas de problème",
  outcome: "vous connecter en sécurité à l'application ou au site officiel de votre banque, activer des alertes sur votre compte, repérer un faux appel ou message de la « banque » et savoir exactement qui appeler en cas de problème.",
  about: [
    "La banque en ligne permet de consulter son solde, de voir ses paiements et de payer ses factures sans aller à l'agence. Ce cours s'adresse aux personnes âgées qui veulent l'utiliser avec confiance, et se protéger des escrocs qui utilisent maintenant l'IA pour ressembler à votre banque, à l'oral comme à l'écrit.",
    "Vous obtiendrez la vraie application de votre banque, vous vous connecterez en sécurité, activerez des alertes pour remarquer tout ce qui est inhabituel, apprendrez les ruses des faux appels de la « banque », utiliserez les applications de paiement avec prudence et préparerez un plan en cas de problème.",
    "Ce cours ne donne pas de conseils financiers, et on ne vous demandera jamais de taper vos vrais renseignements bancaires ici ni dans un assistant IA. Un proche de confiance peut s'asseoir avec vous pendant les réglages. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Connectez-vous à l'application ou au site officiel de votre banque, activez au moins deux alertes (par exemple pour les gros achats et le solde bas), notez sur votre carte de sécurité le numéro de votre banque inscrit au dos de votre carte, et utilisez les quatre signes pour juger un exemple de SMS de la « banque ».",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées aux États-Unis qui ont un compte dans une banque ou une coopérative de crédit (credit union) et qui commencent, ou utilisent déjà, la banque en ligne et les applications de paiement, souvent encouragées par leur famille ou leur banque.",
    startingPoint: "Elles utilisent une carte de débit ou de crédit et un smartphone. Certaines font déjà leurs opérations en ligne ; d'autres seulement en agence ou par téléphone. Beaucoup ne savent pas bien distinguer une vraie application ou un vrai appel de la banque d'un faux.",
    gap: "La banque en ligne évite des déplacements et aide à repérer les problèmes tôt, mais les seniors sont des cibles de choix pour les faux appels et SMS de la banque et les arnaques aux applications de paiement, et l'argent envoyé par application est difficile à récupérer. Une connexion sûre, des alertes, savoir repérer les faux contacts et savoir qui appeler protègent leurs économies.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : un smartphone ou un ordinateur ; l'application et les menus de chaque banque sont différents",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille",
      "Vie privée : aucun vrai mot de passe, numéro de compte ou code n'est partagé pendant le cours",
      "Les coordonnées des agences américaines et des lignes d'aide peuvent changer ; les apprenants vérifient sur les sites officiels"
    ],
    prerequisites: "« IA et arnaques : se protéger quand on est senior » est utile avant, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec votre téléphone ou votre ordinateur", action: "ouvrir l'application ou le site officiel de votre banque depuis le magasin d'applications ou l'adresse indiquée sur votre relevé", standard: "jamais par un lien dans un SMS ou un e-mail" },
    { id: "O2", condition: "Quand vous vous connectez à votre banque en ligne", action: "utiliser un mot de passe long et unique et la vérification en deux étapes, et vous déconnecter sur les ordinateurs partagés", standard: "sans partager votre mot de passe ni vos codes avec personne" },
    { id: "O3", condition: "Dans l'application ou sur le site de votre banque", action: "activer des alertes pour les gros achats, le solde bas et les changements de connexion", standard: "avec au moins deux alertes activées" },
    { id: "O4", condition: "Face à un appel ou un message qui dit venir de votre banque", action: "identifier les signes d'un faux contact de la banque et appeler le numéro au dos de votre carte", standard: "sans donner de code, de mot de passe ni d'argent" },
    { id: "O5", condition: "Avant d'envoyer de l'argent avec une application de paiement", action: "vérifier le nom et le numéro de la personne et n'envoyer qu'à des gens que vous connaissez en personne", standard: "sans jamais payer quelqu'un qui vous a contacté en premier" },
    { id: "O6", condition: "Si de l'argent ou des informations sont volés", action: "appeler votre banque, changer votre mot de passe et signaler le vol aux bons endroits", standard: "en commençant tout de suite avec le numéro de votre carte" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Utiliser la banque en ligne en sécurité",
      lessons: [
        {
          objectives: ["O1"],
          title: "Obtenir la vraie application ou le vrai site de votre banque",
          minutes: 5,
          goal: "Trouver et ouvrir l'application ou le site officiel de votre banque sans vous faire piéger par une copie.",
          text: [
            "Les escrocs créent de fausses applications et de faux sites bancaires qui ont l'air vrais. L'IA rend ces copies encore plus réussies. Partez donc d'une source de confiance.",
            "Pour l'application : ouvrez la boutique d'applications officielle de votre téléphone, cherchez le nom exact de votre banque et vérifiez que l'application est publiée par votre banque. En cas de doute, le site officiel de votre banque ou un employé de l'agence peut vous donner le nom exact de l'application. Pour le site : tapez vous-même l'adresse de votre banque, ou utilisez celle imprimée sur votre relevé. N'allez pas sur le site de votre banque par un lien reçu par SMS ou par e-mail.",
            "Votre banque peut aussi vous aider à mettre en place la banque en ligne à l'agence ou par téléphone, au numéro inscrit au dos de votre carte."
          ],
          steps: ["Ouvrez la boutique d'applications officielle.", "Cherchez le nom exact de votre banque.", "Vérifiez que l'application est publiée par votre banque.", "Sur un ordinateur, tapez vous-même l'adresse figurant sur votre relevé.", "N'utilisez jamais un lien reçu par SMS ou e-mail pour aller sur votre banque."],
          words: [["Banque en ligne", "utiliser l'application ou le site de votre banque pour voir et gérer vos comptes."], ["Fausse application", "une application faite pour ressembler à une vraie afin de voler des informations."]],
          slides: [
            { title: "Les copies ont l'air vraies", bullets: ["Il existe de fausses applications et de faux sites bancaires", "L'IA les rend encore plus réussis"] },
            { title: "Obtenez la vraie application", bullets: ["Seulement la boutique officielle", "Cherchez le nom exact de la banque", "Vérifiez que l'éditeur est votre banque"] },
            { title: "Allez sur le vrai site", bullets: ["Tapez l'adresse vous-même", "Utilisez celle de votre relevé", "Jamais par un lien de SMS ou d'e-mail"] }
          ],
          tryIt: "Regardez un relevé bancaire ou votre carte bancaire et trouvez l'adresse du site et le numéro de téléphone de votre banque. Notez-les sur une carte que vous gardez à la maison.",
          youCanNow: "trouver la vraie application ou le vrai site de votre banque à partir d'une source de confiance.",
          quickCheck: [
            { objective: "O1", q: "Où est imprimée la vraie adresse du site de votre banque ?", options: ["Dans un SMS d'un numéro inconnu", "Dans une publicité qui s'ouvre", "Sur votre relevé bancaire", "Dans un e-mail qui vous demande de mettre à jour vos informations"], answer: 2, why: "Tapez vous-même l'adresse de votre relevé au lieu d'utiliser un lien." },
            { objective: "O1", q: "Vous trouvez deux applications avec le nom de votre banque dans le magasin d'applications. Que vérifiez-vous ?", options: ["Laquelle est publiée par votre banque", "Laquelle a le logo le plus brillant", "Laquelle est la plus récente", "Laquelle est gratuite"], answer: 0, why: "Vérifiez que l'application est publiée par votre banque ; demandez à votre banque si vous avez un doute." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Se connecter en sécurité",
          minutes: 6,
          goal: "Vous connecter avec un mot de passe solide et la vérification en deux étapes, et vous déconnecter en sécurité.",
          text: [
            "Votre mot de passe doit être long et difficile à deviner : une phrase de plusieurs mots sans rapport entre eux marche bien. Utilisez-le seulement pour votre banque. Gardez-le en lieu sûr à la maison ou dans un gestionnaire de mots de passe, jamais dans une simple note sur votre téléphone, et ne le donnez jamais.",
            "La vérification en deux étapes (aussi appelée double authentification) ajoute un deuxième contrôle, en général un code envoyé par SMS ou une demande dans l'application. Même si quelqu'un connaît votre mot de passe, il ne peut pas entrer sans ce code. Activez-la dans les réglages de sécurité de l'application, ou demandez de l'aide à votre banque.",
            "Votre banque ne vous appellera jamais et ne vous écrira jamais pour vous demander ce code. Quiconque le demande est un escroc. Beaucoup d'applications permettent aussi de se connecter avec l'empreinte digitale ou le visage, ce qui est sûr et facile. Sur un ordinateur partagé ou de bibliothèque, n'enregistrez pas votre mot de passe et déconnectez-vous à la fin."
          ],
          steps: ["Choisissez un mot de passe long et unique, comme plusieurs mots sans rapport.", "Gardez-le en lieu sûr, jamais dans une simple note.", "Activez la vérification en deux étapes.", "Ne donnez jamais le code à personne.", "Déconnectez-vous sur les ordinateurs partagés."],
          words: [["Vérification en deux étapes", "un deuxième contrôle, comme un code reçu par SMS, nécessaire pour se connecter."], ["Gestionnaire de mots de passe", "une application qui garde vos mots de passe en sécurité."]],
          slides: [
            { title: "Un mot de passe solide", bullets: ["Long : plusieurs mots sans rapport", "Seulement pour votre banque", "Gardé en lieu sûr, jamais partagé"] },
            { title: "Vérification en deux étapes", bullets: ["Un code ou une demande dans l'application", "Arrête les voleurs qui connaissent votre mot de passe", "Activez-la dans les réglages de sécurité"] },
            { title: "Règle d'or", bullets: ["Votre banque ne demande jamais ce code", "Quiconque le demande est un escroc"] },
            { title: "Ordinateurs partagés", bullets: ["N'enregistrez pas votre mot de passe", "Déconnectez-vous à la fin"] }
          ],
          tryIt: "Avec un proche ou un employé de la banque si vous voulez, ouvrez l'application ou le site de votre banque et vérifiez que la vérification en deux étapes est activée. Sinon, activez-la. Ne donnez aucun code à personne, y compris à nous.",
          youCanNow: "vous connecter en sécurité avec un mot de passe solide et la vérification en deux étapes.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que la vérification en deux étapes ?", options: ["Taper votre mot de passe deux fois", "Une deuxième vérification, comme un code reçu par SMS, après votre mot de passe", "Se connecter sur deux téléphones", "Des frais bancaires"], answer: 1, why: "Elle ajoute une deuxième vérification, donc un mot de passe seul ne suffit pas pour entrer." },
            { objective: "O2", q: "Vous avez besoin d'un nouveau mot de passe pour votre banque. Lequel est le meilleur ?", options: ["Votre date de naissance", "\"password123\"", "Le même mot de passe que pour votre e-mail", "Une phrase de plusieurs mots sans rapport entre eux, utilisée seulement pour votre banque"], answer: 3, why: "Une longue phrase unique de mots sans rapport entre eux est solide et difficile à deviner." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Activer des alertes pour repérer vite les problèmes",
          minutes: 5,
          goal: "Activer des alertes de compte pour remarquer vite une activité inhabituelle.",
          text: [
            "Les alertes sont des messages que votre banque vous envoie par SMS, e-mail ou notification de l'application quand quelque chose se passe sur votre compte : un gros achat, un solde bas, un nouveau bénéficiaire ou un changement de mot de passe.",
            "Dans l'application ou sur le site de la banque, cherchez Alertes ou Notifications, souvent dans votre profil ou les réglages. Activez les alertes pour les achats au-dessus d'un montant que vous choisissez, le solde bas et tout changement de vos identifiants de connexion.",
            "Quand une alerte arrive pour quelque chose que vous n'avez pas fait, n'y répondez pas et n'appelez pas un numéro qu'elle contient. Ouvrez vous-même l'application de votre banque, ou appelez le numéro au dos de votre carte."
          ],
          steps: ["Ouvrez l'application ou le site de votre banque.", "Trouvez Alertes ou Notifications.", "Activez les alertes pour les gros achats, le solde bas et les changements de connexion.", "Si une alerte montre quelque chose que vous n'avez pas fait, appelez le numéro de votre carte."],
          words: [["Alerte", "un message de votre banque sur l'activité de votre compte."], ["Bénéficiaire", "une personne ou une entreprise à qui vous envoyez de l'argent."]],
          slides: [
            { title: "Les alertes repèrent vite les problèmes", bullets: ["Gros achats", "Solde bas", "Nouveau bénéficiaire ou changement de mot de passe"] },
            { title: "Activez-les", bullets: ["Trouvez Alertes ou Notifications", "Choisissez vos montants", "SMS, e-mail ou application"] },
            { title: "Ce n'est pas vous ?", bullets: ["Ne répondez pas, n'appelez pas le numéro du message", "Ouvrez l'application vous-même", "Ou appelez le numéro de votre carte"] }
          ],
          tryIt: "Activez au moins deux alertes dans l'application ou sur le site de votre banque : une pour les achats au-dessus d'un montant que vous choisissez, et une pour le solde bas.",
          youCanNow: "activer des alertes bancaires et réagir en sécurité quand l'une d'elles arrive.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une alerte bancaire ?", options: ["Un message de votre banque quand quelque chose se passe sur votre compte", "Une offre commerciale", "Un appel du service des fraudes", "Un relevé en papier"], answer: 0, why: "Les alertes vous informent d'opérations comme un gros achat ou un solde bas." },
            { objective: "O3", q: "Une alerte dit que vous avez changé votre mot de passe, mais ce n'est pas vous. Que faites-vous ?", options: ["Répondre à l'alerte", "Appeler le numéro indiqué dans l'alerte", "L'ignorer", "Ouvrir vous-même l'application de votre banque ou appeler le numéro de votre carte"], answer: 3, why: "Ne répondez pas et n'appelez pas un numéro donné dans l'alerte ; contactez votre banque vous-même." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Utiliser la banque en ligne en sécurité",
        questions: [
          { objective: "O1", q: "Un SMS contient un lien pour « mettre à jour vos coordonnées bancaires ». Comment joindre votre banque ?", options: ["Répondre avec votre mot de passe", "Toucher le lien", "Taper l'adresse vous-même ou utiliser l'application officielle", "Appeler le numéro du SMS"], answer: 2, why: "Les liens des SMS peuvent mener à de faux sites." },
          { objective: "O1", q: "Comment savoir qu'une application bancaire est la vraie ?", options: ["Elle est dans la boutique officielle et publiée par votre banque", "Elle vient d'une fenêtre surgissante", "Un inconnu l'a envoyée", "Elle a une jolie image"], answer: 0, why: "Vérifiez la boutique et l'éditeur." },
          { objective: "O2", q: "Qu'ajoute la vérification en deux étapes ?", options: ["Un deuxième mot de passe à partager", "Un deuxième compte bancaire", "De l'argent gratuit", "Un deuxième contrôle, comme un code reçu par SMS"], answer: 3, why: "Elle arrête les voleurs qui ne connaissent que votre mot de passe." },
          { objective: "O2", q: "Quelqu'un appelle de la part de votre banque et demande le code que vous venez de recevoir par SMS. Vous :", options: ["Le lui lisez", "Raccrochez ; votre banque ne demande jamais ce code", "Le lui envoyez par SMS", "En donnez la moitié"], answer: 1, why: "Quiconque demande le code est un escroc." },
          { objective: "O3", q: "Une alerte montre un achat que vous n'avez pas fait. Vous :", options: ["Répondez à l'alerte", "Appelez le numéro au dos de votre carte", "Appelez un numéro de l'alerte", "L'ignorez"], answer: 1, why: "Utilisez un numéro que vous connaissez déjà." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Repérer les arnaques et rester protégé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Faux appels et messages bancaires utilisant l'IA",
          minutes: 5,
          goal: "Reconnaître un faux appel ou message du « service des fraudes de la banque ».",
          text: [
            "Une arnaque fréquente : un appel ou un SMS dit venir du service des fraudes de votre banque et annonce un problème sur votre compte. L'affichage du numéro peut même montrer le nom de votre banque, et l'IA peut rendre la voix et les messages très professionnels.",
            "Puis on vous demande de faire quelque chose : lire un code, « vérifier » votre mot de passe, déplacer votre argent sur un « compte sécurisé », retirer de l'argent liquide pour un coursier ou acheter des cartes cadeaux. Ce sont les signes d'arnaque de la FTC (l'agence américaine de protection des consommateurs) : l'usurpation, un problème, la pression et un moyen de paiement inhabituel. La FTC dit que les vraies organisations ne vous diront jamais de déplacer votre argent pour le protéger.",
            "Que faire : raccrochez. Puis appelez vous-même le numéro au dos de votre carte. Si c'était vrai, la banque sera au courant."
          ],
          steps: ["Repérez : une « banque » vous contacte pour un problème.", "Repérez : on vous demande un code, un mot de passe, un virement, du liquide ou des cartes cadeaux.", "Raccrochez ou arrêtez de répondre.", "Appelez vous-même le numéro au dos de votre carte."],
          words: [["Usurpation de numéro (spoofing)", "faire afficher un faux numéro qui montre le nom ou le numéro d'une vraie entreprise."], ["Arnaque au compte sécurisé", "une ruse qui vous dit de déplacer votre argent pour le « protéger », directement vers l'escroc."]],
          slides: [
            { title: "Le faux appel du service des fraudes", bullets: ["« Ici le service des fraudes de votre banque »", "L'affichage du numéro peut être truqué", "L'IA rend la voix très professionnelle"] },
            { title: "Ce qu'ils demandent", bullets: ["Des codes ou des mots de passe", "Déplacer l'argent sur un « compte sécurisé »", "Du liquide pour un coursier, ou des cartes cadeaux"] },
            { title: "Ce que vous faites", bullets: ["Raccrochez", "Appelez le numéro de votre carte", "Si c'était vrai, la banque sera au courant"] }
          ],
          sources: [{ name: "FTC : Comment éviter une arnaque (en anglais)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Demandez à un assistant IA : « Quels sont les signes qu'un appel du service des fraudes de ma banque est faux ? » Comparez sa réponse avec cette leçon, et notez sur votre carte les trois qui vous semblent les plus importants.",
          youCanNow: "reconnaître un faux appel ou message de la banque et le vérifier en sécurité.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire le nom de votre banque affiché sur votre téléphone lors d'un appel ?", options: ["L'appel est forcément vrai", "Rien de sûr ; l'affichage du numéro peut être truqué", "Votre banque va fermer", "Vous devez rappeler le même numéro"], answer: 1, why: "Les escrocs peuvent faire afficher le nom de votre banque sur votre téléphone." },
            { objective: "O4", q: "Une personne du « service des fraudes » vous dit de transférer vos économies sur un compte sûr aujourd'hui. Que faites-vous ?", options: ["Les transférer vite", "Lui donner votre mot de passe pour qu'elle vérifie", "Raccrocher et appeler le numéro au dos de votre carte", "Retirer des espèces pour son coursier"], answer: 2, why: "Les vraies organisations ne vous disent jamais de déplacer votre argent pour le protéger ; raccrochez et appelez vous-même votre banque." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Utiliser les applications de paiement avec prudence",
          minutes: 5,
          goal: "N'envoyer de l'argent par une application de paiement qu'à des personnes que vous connaissez et en qui vous avez confiance.",
          text: [
            "Les applications de paiement (comme Zelle, Venmo, PayPal et Cash App aux États-Unis, ou d'autres selon votre pays) permettent d'envoyer de l'argent depuis votre téléphone. Elles sont pratiques pour rembourser un proche, mais l'argent part en général tout de suite et peut être très difficile à récupérer.",
            "N'envoyez de l'argent qu'à des personnes que vous connaissez en vrai. Vérifiez deux fois le nom, le numéro ou l'e-mail avant d'envoyer. Ne payez jamais un inconnu, un vendeur en ligne que vous ne connaissez pas, ou quelqu'un qui vous a contacté en premier en disant être votre banque, l'administration ou une entreprise.",
            "Méfiez-vous des ruses du « paiement par erreur » : un inconnu vous envoie de l'argent et vous demande de le lui renvoyer. Ne le renvoyez pas ; contactez votre banque ou la société de l'application par son application ou son site officiel."
          ],
          steps: ["Ne payez que des personnes que vous connaissez en vrai.", "Vérifiez deux fois le nom et le numéro avant d'envoyer.", "Ne payez jamais quelqu'un qui vous a contacté en premier.", "Si un inconnu vous paie « par erreur », contactez votre banque ou l'application, ne renvoyez pas d'argent."],
          words: [["Application de paiement", "une application qui envoie de l'argent depuis votre téléphone à une autre personne."], ["Virement instantané", "de l'argent qui part tout de suite et qui est difficile à annuler."]],
          slides: [
            { title: "Pratique, mais rapide", bullets: ["Zelle, Venmo, PayPal, Cash App...", "L'argent part tout de suite", "Difficile à récupérer"] },
            { title: "Bon usage", bullets: ["Seulement des personnes que vous connaissez en vrai", "Vérifiez deux fois le nom et le numéro", "Ne payez jamais quelqu'un qui vous a contacté en premier"] },
            { title: "« Oups, je vous l'ai envoyé »", bullets: ["Ne renvoyez pas d'argent", "Contactez votre banque ou l'application"] }
          ],
          sources: [{ name: "FTC : Comment éviter une arnaque (moyens de paiement suspects, en anglais)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Écrivez sur votre carte : « Je n'utilise les applications de paiement qu'avec des personnes que je connais en vrai. Je ne paie jamais quelqu'un qui me contacte en premier. »",
          youCanNow: "utiliser les applications de paiement en sécurité et éviter leurs pièges fréquents.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi être prudent avec les applications de paiement ?", options: ["Elles prennent des frais élevés", "Elles ne marchent que dans les banques", "Elles sont lentes", "L'argent part en général tout de suite et il est difficile à récupérer"], answer: 3, why: "L'argent envoyé par application part vite et il est très difficile à récupérer." },
            { objective: "O5", q: "Vous voulez rembourser 20 dollars à votre nièce par application. Que faites-vous avant de toucher Envoyer ?", options: ["Vérifier deux fois son nom et son numéro de téléphone", "L'envoyer au premier nom qui s'affiche", "Envoyer un peu plus au cas où", "Demander à un inconnu de l'envoyer"], answer: 0, why: "Vérifier deux fois le nom et le numéro évite que l'argent parte à la mauvaise personne." }
          ]
        },
        {
          objectives: ["O6"],
          title: "En cas de problème",
          minutes: 5,
          goal: "Lister les étapes à suivre vite si de l'argent ou des informations sont volés.",
          text: [
            "Agissez vite. Appelez tout de suite votre banque au numéro inscrit au dos de votre carte. Dites ce qui s'est passé. Demandez-lui de bloquer ou d'annuler les paiements si possible, changez votre mot de passe et surveillez votre compte.",
            "Ensuite, signalez-le. Aux États-Unis, signalez l'arnaque à la Federal Trade Commission sur ReportFraud.ftc.gov. Si quelqu'un utilise votre identité, allez sur IdentityTheft.gov pour un plan de rétablissement gratuit. Si vous avez 60 ans ou plus, la National Elder Fraud Hotline (ligne nationale contre la fraude visant les aînés) est gratuite : 833-FRAUD-11 (833-372-8311).",
            "Méfiez-vous d'une deuxième arnaque : les personnes qui appellent pour « récupérer » votre argent contre paiement sont en général aussi des escrocs. Et il n'y a aucune honte à être visé. En parler à un proche de confiance vous protège, vous et les autres."
          ],
          steps: ["Appelez tout de suite votre banque au numéro de votre carte.", "Changez votre mot de passe.", "Signalez sur ReportFraud.ftc.gov.", "Utilisez IdentityTheft.gov si votre identité a été utilisée.", "60 ans et plus : appelez le 833-372-8311.", "Ignorez quiconque propose de récupérer votre argent contre paiement."],
          words: [["Usurpation d'identité", "quand quelqu'un utilise vos informations personnelles pour se faire passer pour vous."], ["Arnaque à la récupération", "une ruse où des escrocs proposent de récupérer l'argent volé contre paiement."]],
          slides: [
            { title: "Agissez vite", bullets: ["Appelez votre banque au numéro de votre carte", "Demandez de bloquer ou d'annuler les paiements", "Changez votre mot de passe"] },
            { title: "Signalez-le", bullets: ["ReportFraud.ftc.gov", "IdentityTheft.gov", "60 ans et plus : 833-FRAUD-11 (833-372-8311)"] },
            { title: "Attention à une deuxième arnaque", bullets: ["Payer pour « récupérer » l'argent = arnaque", "Aucune honte : parlez-en à une personne de confiance"] }
          ],
          sources: [{ name: "FTC : Signaler une fraude (en anglais)", url: "https://reportfraud.ftc.gov/" }, { name: "FTC : Ce qu'il faut savoir sur l'usurpation d'identité (en anglais)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "DOJ, Office for Victims of Crime : National Elder Fraud Hotline (en anglais)", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }],
          tryIt: "Tâche finale : connectez-vous à l'application ou au site officiel de votre banque, activez deux alertes, notez sur votre carte de sécurité le numéro de votre banque inscrit au dos de votre carte, et jugez cet exemple de SMS avec les quatre signes : « ALERTE BANQUE : votre compte est bloqué. Vérifiez maintenant via le lien, sinon il sera fermé aujourd'hui. »",
          youCanNow: "utiliser la banque en ligne en sécurité, repérer les faux contacts bancaires, utiliser les applications de paiement avec prudence et agir vite en cas de problème.",
          quickCheck: [
            { objective: "O6", q: "Que vous donne IdentityTheft.gov ?", options: ["Un prêt", "Un plan de rétablissement gratuit si quelqu'un utilise votre identité", "Un nouveau compte bancaire", "Une assurance"], answer: 1, why: "IdentityTheft.gov donne un plan de rétablissement gratuit." },
            { objective: "O6", q: "Vous venez de vous rendre compte que vous avez envoyé de l'argent à un escroc. Quelle est votre première étape ?", options: ["Attendre une semaine", "Rappeler l'escroc", "Appeler tout de suite votre banque au numéro de votre carte", "Payer une entreprise pour le récupérer"], answer: 2, why: "Agissez vite : appelez d'abord votre banque, puis signalez l'arnaque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Repérer les arnaques et rester protégé",
        questions: [
          { objective: "O4", q: "L'affichage du numéro montre le nom de votre banque. Cela prouve-t-il que l'appel est vrai ?", options: ["Seulement s'ils connaissent votre nom", "Oui, toujours", "Seulement le matin", "Non, l'affichage du numéro peut être truqué"], answer: 3, why: "L'usurpation de numéro crée de faux affichages." },
          { objective: "O4", q: "Un appelant vous dit de mettre vos économies sur un « compte sécurisé ». C'est :", options: ["Une arnaque", "Une pratique bancaire normale", "Une obligation légale", "Un bon conseil"], answer: 0, why: "Les vraies organisations ne demandent jamais de déplacer l'argent pour le protéger." },
          { objective: "O5", q: "À qui envoyer de l'argent par une application de paiement ?", options: ["À des vendeurs en ligne inconnus", "À quiconque le demande", "Seulement à des personnes que vous connaissez en vrai", "À des appelants de « l'administration »"], answer: 2, why: "L'argent envoyé par ces applications est difficile à récupérer." },
          { objective: "O5", q: "Un inconnu vous envoie de l'argent « par erreur » et vous demande de le renvoyer. Vous :", options: ["Lui donnez votre mot de passe", "Le renvoyez tout de suite", "Envoyez le double", "Contactez plutôt votre banque ou l'application"], answer: 3, why: "C'est une ruse fréquente ; laissez la banque s'en occuper." },
          { objective: "O6", q: "Quelqu'un propose de récupérer votre argent volé contre paiement. C'est probablement :", options: ["Votre banque", "Un programme du gouvernement", "Une autre arnaque", "Une aide gratuite"], answer: 2, why: "Les arnaques à la récupération visent les personnes déjà escroquées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA et la sécurité de la banque en ligne",
    questions: [
      { objective: "O1", q: "La banque en ligne vous permet de :", options: ["Imprimer de l'argent", "Voir et gérer vos comptes sur une application ou un site", "Ne plus payer de factures", "Ne plus avoir de mot de passe"], answer: 1, why: "C'est votre banque, sur votre téléphone ou votre ordinateur." },
      { objective: "O1", q: "L'endroit sûr pour obtenir l'application de votre banque est :", options: ["La boutique d'applications officielle, publiée par votre banque", "Un lien reçu par SMS", "Une fenêtre surgissante", "Une pièce jointe d'e-mail"], answer: 0, why: "Les boutiques et éditeurs officiels sont fiables." },
      { objective: "O1", q: "Où trouver la vraie adresse du site de votre banque ?", options: ["Sur votre relevé ou votre carte", "Dans un SMS d'un inconnu", "Dans une publicité", "Dans un commentaire sur les réseaux sociaux"], answer: 0, why: "Votre relevé et votre carte viennent de la banque." },
      { objective: "O2", q: "Un mot de passe solide est :", options: ["Votre date de naissance", "Long, comme plusieurs mots sans rapport, et seulement pour votre banque", "« motdepasse »", "Le nom de votre animal"], answer: 1, why: "Un mot de passe long et unique est difficile à deviner." },
      { objective: "O2", q: "Où ne faut-il PAS garder votre mot de passe bancaire ?", options: ["En lieu sûr à la maison", "Dans un gestionnaire de mots de passe", "Dans une simple note sur votre téléphone", "Dans votre mémoire"], answer: 2, why: "Une simple note n'est pas sécurisée." },
      { objective: "O2", q: "La vérification en deux étapes vous protège parce que :", options: ["Elle supprime les mots de passe", "Elle partage votre mot de passe", "Elle désactive les alertes", "Un voleur a besoin du code en plus de votre mot de passe"], answer: 3, why: "Le deuxième contrôle bloque les voleurs." },
      { objective: "O2", q: "Votre banque vous appelle-t-elle parfois pour demander le code qu'elle vous a envoyé par SMS ?", options: ["Seulement pendant les fêtes", "Oui, chaque semaine", "Non", "Seulement pour les gros comptes"], answer: 2, why: "Quiconque demande le code est un escroc." },
      { objective: "O2", q: "Sur un ordinateur de bibliothèque, après avoir consulté votre banque, vous devez :", options: ["Vous déconnecter et ne pas enregistrer votre mot de passe", "Rester connecté", "Enregistrer le mot de passe", "Écrire le mot de passe sur place"], answer: 0, why: "Cela empêche la personne suivante d'entrer." },
      { objective: "O3", q: "Les alertes bancaires vous informent :", options: ["Des nouvelles applications", "De la météo", "Des résultats sportifs", "De l'activité de votre compte, comme les gros achats"], answer: 3, why: "Les alertes signalent l'activité du compte." },
      { objective: "O3", q: "Une alerte utile à activer est :", options: ["Des blagues quotidiennes", "Le solde bas", "Des publicités de soldes", "Aucune"], answer: 1, why: "L'alerte de solde bas évite des problèmes." },
      { objective: "O3", q: "Une alerte montre un débit que vous n'avez pas fait. Vous appelez :", options: ["Le numéro de l'alerte", "Le numéro au dos de votre carte", "L'ami d'un ami", "Personne"], answer: 1, why: "Utilisez un numéro que vous connaissez déjà." },
      { objective: "O4", q: "L'« usurpation de numéro » (spoofing) veut dire :", options: ["Une alerte bancaire", "Un type de compte épargne", "Un gestionnaire de mots de passe", "Truquer l'affichage du numéro d'appel"], answer: 3, why: "Les appels usurpés semblent venir de votre banque." },
      { objective: "O4", q: "Un appelant du « service des fraudes » vous demande de retirer du liquide pour un coursier. C'est :", options: ["Une arnaque", "Une procédure bancaire normale", "Une règle fiscale", "Une mesure de sécurité"], answer: 0, why: "Les banques n'envoient pas de coursier chercher votre argent." },
      { objective: "O4", q: "Que faire face à un appel bancaire suspect ?", options: ["Lui donner un code", "Rester en ligne", "Raccrocher et appeler le numéro de votre carte", "Déplacer votre argent"], answer: 2, why: "Rappeler un numéro de confiance révèle la vérité." },
      { objective: "O5", q: "L'argent envoyé par une application de paiement :", options: ["Met un mois à arriver", "Peut toujours être remboursé", "Est gratuit à annuler", "Part en général tout de suite et est difficile à récupérer"], answer: 3, why: "C'est pourquoi on ne paie que des personnes qu'on connaît." },
      { objective: "O5", q: "Avant d'envoyer de l'argent par une application, vous devez :", options: ["Ne rien vérifier", "Envoyer vite", "Vérifier deux fois le nom et le numéro", "Demander à l'inconnu de confirmer"], answer: 2, why: "Une petite faute de frappe peut envoyer l'argent à la mauvaise personne." },
      { objective: "O6", q: "Si de l'argent est volé, le PREMIER appel est pour :", options: ["L'escroc", "Votre banque, au numéro de votre carte", "Une société de récupération", "Un numéro d'une fenêtre surgissante"], answer: 1, why: "Votre banque peut parfois bloquer ou annuler les paiements." },
      { objective: "O6", q: "Où signaler une arnaque à la FTC ?", options: ["Sur ReportFraud.ftc.gov", "Dans une publication sur les réseaux sociaux", "Sur le site de l'escroc", "En répondant au SMS"], answer: 0, why: "C'est le site de signalement de la FTC." },
      { objective: "O6", q: "IdentityTheft.gov vous donne :", options: ["Un plan de rétablissement gratuit", "Un nouveau compte bancaire", "De l'argent gratuit", "Un mot de passe"], answer: 0, why: "Il guide le rétablissement après une usurpation d'identité." },
      { objective: "O6", q: "Le numéro de la National Elder Fraud Hotline est :", options: ["Un numéro reçu dans un SMS d'arnaque", "833-372-8311", "411", "0"], answer: 1, why: "Le 833-FRAUD-11 (833-372-8311) est géré par le ministère de la Justice américain." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      8,
      11,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Application ou site officiel",
        objective: "O1",
        notYet: "Connexion par un lien reçu dans un message ou par une application non officielle.",
        meets: "Connexion par l'application officielle du magasin d'applications ou par l'adresse tapée depuis le relevé.",
        exceeds: "Vous pouvez montrer comment vérifier que l'application est publiée par la banque."
      },
      {
        name: "Connexion sûre",
        objective: "O2",
        notYet: "Le mot de passe est court, déjà utilisé ailleurs ou écrit dans une simple note du téléphone.",
        meets: "Connexion avec un mot de passe solide et la vérification en deux étapes activée.",
        exceeds: "Vous utilisez l'empreinte digitale ou le visage, ou un gestionnaire de mots de passe, et vous savez que la banque ne demande jamais le code."
      },
      {
        name: "Alertes activées",
        objective: "O3",
        notYet: "Moins de deux alertes activées.",
        meets: "Au moins deux alertes activées, comme les gros achats et le solde bas.",
        exceeds: "Vous avez aussi activé les alertes pour les connexions ou les changements de mot de passe."
      },
      {
        name: "Numéro de la banque sur la carte de sécurité",
        objective: "O6",
        notYet: "Pas de numéro, ou un numéro copié depuis un message.",
        meets: "Le numéro de la banque au dos de la carte est écrit sur la carte de sécurité.",
        exceeds: "La carte indique aussi ReportFraud.ftc.gov et, si vous avez 60 ans ou plus, la National Elder Fraud Hotline."
      },
      {
        name: "SMS d'exemple jugé",
        objective: "O4",
        notYet: "Vous n'avez pas vu que le SMS d'exemple « de la banque » était une arnaque.",
        meets: "Vous avez bien jugé le SMS d'exemple et nommé les signes trouvés.",
        exceeds: "Vous avez dit exactement quoi faire ensuite : ne pas répondre, appeler le numéro de la carte."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui ont au moins deux alertes bancaires et la vérification en deux étapes activées au suivi à 30 jours",
      "Apprenants qui disent avoir repéré et ignoré un faux appel ou un faux message de la banque",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec l'application ou le site de la banque de l'apprenant",
      "La carte bancaire de l'apprenant (seulement pour le numéro au dos) et une carte de sécurité vierge",
      "Un exemple imprimé de SMS « de la banque » pour la tâche finale",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Ne regardez jamais, ne demandez jamais et ne tapez jamais le mot de passe, le numéro de compte ou les codes d'un apprenant ; les apprenants se connectent seuls, en privé.",
      "L'application de chaque banque est différente ; invitez les apprenants à demander à leur banque ou à une agence de les aider à activer les alertes.",
      "Utilisez des exemples de messages inventés pour les exercices, et faites un jeu de rôle avec un faux appel du service des fraudes.",
      "Les coordonnées des lignes d'aide peuvent changer ; vérifiez ReportFraud.ftc.gov et le site de la National Elder Fraud Hotline avant la séance.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
