"use strict";

// Koach Learn course (French translation of africa-life/afr-mobile-money-safety.js). See scripts/koachlearn-courses/README.md, "Translations".
// Fees and help numbers change: learners read them on their own provider's official channels. No investment advice. Figures are examples only.

const SAF_FRAUD = { name: "The Star, Kenya (27 mars 2025) : les fraudes courantes visant les utilisateurs de M-Pesa ; signaler au 333, à Zuri ou dans l'application ; Safaricom ne demande jamais votre code PIN", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Kenya : comment annuler un paiement M-Pesa (transférer le SMS de confirmation au 456 ; mauvais Till ou Paybill : appeler le 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Agence de presse du Ghana (octobre 2026) : MTN met en garde ses clients contre le partage de leur code PIN MoMo", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Banque centrale du Kenya (régule l'argent mobile et publie la liste des prestataires de paiement agréés)", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Banque centrale du Nigeria : protection des consommateurs", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Banque du Ghana : procédures de réclamation et liste des établissements agréés", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, Banque centrale des États de l'Afrique de l'Ouest : établissements de monnaie électronique (pays du franc CFA XOF, comme le Sénégal et la Côte d'Ivoire)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety-fr",
  lang: "fr",
  translationOf: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Utiliser l'argent mobile en toute sécurité (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Protéger son code PIN et son téléphone, Vérifier le nom avant d'envoyer, Utiliser les agents et les frais en toute sécurité, Repérer les arnaques à l'argent mobile, Agir vite après un mauvais envoi ou une fraude, Écrire un plan de sécurité personnel",
  outcome: "envoyer, recevoir et payer avec l'argent mobile en toute sécurité : protéger votre code PIN, vérifier le nom avant de confirmer, repérer les arnaques courantes, agir vite après un mauvais envoi ou une fraude, et garder un plan de sécurité d'une page pour vous et votre famille.",
  about: [
    "L'argent mobile permet chaque jour à des millions de personnes en Afrique d'envoyer de l'argent, d'épargner et de payer : M-Pesa au Kenya, MTN MoMo au Ghana et au Nigeria, Orange Money en Côte d'Ivoire et au Cameroun, Wave au Sénégal, et les portefeuilles mobiles en Égypte et au Maroc. C'est rapide et utile, et les escrocs le savent aussi.",
    "Ce cours s'adresse aux commerçants, aux parents, aux élèves et étudiants, aux travailleurs et à toute personne qui utilise un téléphone simple ou un smartphone pour son argent. Vous apprendrez comment fonctionnent votre portefeuille, votre code PIN et l'agent, comment vérifier chaque paiement avant de le confirmer, les astuces des escrocs, et ce qu'il faut faire exactement si l'argent part chez la mauvaise personne.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites la tâche \"Essayez maintenant\" sur votre propre téléphone, sans jamais taper votre vrai code PIN pour vous entraîner. Un court contrôle suit chaque leçon et chaque chapitre, et un quiz de 20 questions termine le cours. Les frais, les plafonds et les numéros d'aide changent : vous apprendrez donc à les lire sur les canaux officiels de votre propre opérateur."
  ],
  finalTask: "Écrivez un plan de sécurité d'argent mobile d'une page pour vous ou votre famille : vos règles pour le code PIN et le verrouillage du téléphone, comment vous vérifiez un nom avant d'envoyer, les canaux officiels d'aide et de fraude de votre opérateur (copiés depuis son site officiel, son application ou la pochette de la carte SIM), les six signes d'arnaque, ce que vous faites dans la première heure après un mauvais envoi ou une fraude, et une vérification mensuelle de votre relevé.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes et des jeunes partout en Afrique, en ville comme au village : commerçants de marché, conducteurs de moto-taxi (boda boda, okada, zémidjan), parents, élèves et étudiants, travailleurs et petits entrepreneurs qui envoient, reçoivent et paient avec l'argent mobile. Des exemples du Kenya, du Nigeria, du Ghana, du Sénégal, de la Côte d'Ivoire, du Cameroun, de l'Égypte et du Maroc.",
    startingPoint: "La plupart envoient et reçoivent déjà de l'argent avec un menu USSD (*xxx#) ou une application. Beaucoup n'ont jamais lu la grille des frais, ne savent pas annuler un mauvais envoi, partagent leur téléphone ou leur code PIN avec la famille, ou ont déjà reçu un appel ou un SMS d'arnaque.",
    gap: "Des gens perdent de l'argent à cause de faux messages d'annulation, de demandes de code PIN ou de code, de faux agents et d'astuces du \"mauvais numéro\", et beaucoup ne connaissent pas les démarches officielles et rapides après un mauvais envoi. Les apprenants ont besoin d'habitudes et d'un plan écrit qui protègent leur argent et celui de leur famille.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; traduit en français et en arabe",
      "Appareils : beaucoup utilisent un téléphone simple avec des menus USSD ; les données mobiles coûtent cher",
      "Temps : des leçons de 4 à 6 minutes qui s'adaptent au travail et aux jours de marché",
      "Les frais, les plafonds et les numéros d'aide varient selon le pays et changent : on les lit toujours sur les canaux officiels de l'opérateur",
      "Ne jamais taper un vrai code PIN, un mot de passe ou un code à usage unique dans une tâche d'entraînement"
    ],
    prerequisites: "Un compte d'argent mobile, ou le téléphone d'un proche pour regarder le menu ensemble (sans le code PIN)."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Avec votre propre téléphone et votre compte d'argent mobile", action: "choisir un code PIN difficile à deviner, verrouiller votre téléphone et garder le code PIN pour vous seul", standard: "sans partager le code PIN avec personne, ni la famille ni quelqu'un qui se dit employé de l'opérateur" },
    { id: "O2", condition: "Quand vous envoyez de l'argent, payez un commerçant ou passez par un agent", action: "vérifier le nom du destinataire, le numéro et le montant sur l'écran de confirmation avant de taper votre code PIN, et garder le message de confirmation", standard: "à chaque fois, en vous arrêtant si quelque chose ne correspond pas" },
    { id: "O3", condition: "Face à six appels ou messages sur l'argent mobile", action: "repérer ceux qui sont des arnaques et nommer le signe d'alerte de chacun", standard: "avec au moins 5 bonnes réponses sur 6" },
    { id: "O4", condition: "Après un envoi au mauvais numéro ou un soupçon de fraude", action: "le signaler par les canaux officiels de votre opérateur et suivre les étapes d'annulation", standard: "le jour même, en gardant le message de confirmation d'origine et sans utiliser aucun numéro donné par un inconnu" },
    { id: "O5", condition: "Avec ce que vous avez appris et le site officiel ou la pochette SIM de votre opérateur", action: "écrire un plan de sécurité d'argent mobile d'une page pour vous ou votre famille", standard: "qui couvre les règles du code PIN, la vérification du nom, les canaux d'aide officiels, les signes d'arnaque, les étapes de la première heure et une vérification mensuelle du relevé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne l'argent mobile, et l'utiliser en toute sécurité",
      lessons: [
        {
          title: "Votre portefeuille, votre code PIN et votre téléphone",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir un code PIN solide, verrouiller votre téléphone et nommer les personnes qui ne doivent jamais avoir votre code PIN.",
          text: [
            "Un portefeuille d'argent mobile est un compte lié à votre carte SIM. Vous y déposez de l'argent liquide chez un agent, vous l'envoyez, vous payez avec, puis vous le retirez. Votre code PIN (numéro d'identification personnel) est la clé du portefeuille. Toute personne qui a votre téléphone et votre code PIN peut le vider.",
            "Choisissez un code PIN difficile à deviner : pas votre année de naissance, pas 1234 ni 0000, pas les derniers chiffres de votre numéro de téléphone. Cachez le clavier quand vous le tapez chez un agent, dans un matatu (minibus) bondé ou au marché. Verrouillez aussi le téléphone avec un code, un schéma ou une empreinte digitale et, si votre téléphone le permet, activez un code PIN pour la carte SIM, pour qu'un voleur ne puisse pas mettre votre SIM dans un autre téléphone.",
            "Ne donnez jamais votre code PIN d'argent mobile ni un code à usage unique à personne : ni à un ami, ni à un enfant, ni à un agent, ni à quelqu'un qui appelle en disant qu'il vient de Safaricom, MTN, Orange ou Wave. Les opérateurs le disent clairement : leurs employés ne vous demanderont jamais votre code PIN. Si quelqu'un vous le demande, c'est une arnaque.",
            "Si votre téléphone est perdu ou volé, ou si votre ligne cesse soudain de fonctionner, appelez tout de suite votre opérateur depuis un autre téléphone pour bloquer la SIM et le portefeuille. Une ligne qui coupe sans raison peut être un échange de SIM (SIM swap) : un criminel fait passer votre numéro sur sa propre SIM."
          ],
          steps: ["Changez votre code PIN dans le menu s'il est facile à deviner (année de naissance, 1234, chiffres répétés).", "Mettez un verrouillage d'écran sur votre téléphone.", "Activez le code PIN de la SIM si votre téléphone le propose.", "Cachez le clavier quand vous tapez votre code PIN.", "Notez sur papier le numéro d'aide officiel de votre opérateur, pas celui d'un message d'inconnu.", "Si le téléphone est perdu ou la ligne coupée, appelez l'opérateur depuis un autre téléphone pour bloquer."],
          words: [["Portefeuille", "votre compte d'argent mobile, lié à votre carte SIM."], ["Code PIN", "numéro d'identification personnel : le code secret qui vous permet d'utiliser votre portefeuille."], ["Échange de SIM (SIM swap)", "quand votre numéro de téléphone passe sur une nouvelle carte SIM ; les criminels essaient de le faire pour prendre votre portefeuille."]],
          slides: [
            { title: "Votre code PIN est la clé", bullets: ["Téléphone + code PIN = accès à tout votre argent", "Pas votre année de naissance, ni 1234, ni 0000", "Cachez le clavier quand vous le tapez"] },
            { title: "Verrouillez le téléphone et la SIM", bullets: ["Verrouillage d'écran : code, schéma ou empreinte", "Code PIN de la SIM si votre téléphone le propose", "Un voleur ne peut alors pas utiliser votre SIM ailleurs"] },
            { title: "Ne le partagez jamais", bullets: ["Ni amis, ni enfants, ni agents, ni appelants", "Les vrais employés ne demandent jamais votre code PIN", "Celui qui le demande est un escroc"] },
            { title: "Téléphone perdu ou ligne coupée ?", bullets: ["Appelez tout de suite l'opérateur depuis un autre téléphone", "Bloquez la SIM et le portefeuille", "Une ligne qui coupe sans raison peut être un échange de SIM"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Pensez à votre code PIN, seulement dans votre tête (ne l'écrivez pas et ne le dites à personne). Est-ce votre année de naissance, 1234 ou des chiffres répétés ? Si oui, changez-le dans le menu aujourd'hui. Vérifiez ensuite que votre téléphone a un verrouillage d'écran.",
          youCanNow: "choisir un code PIN difficile à deviner, verrouiller votre téléphone et votre SIM, et refuser toute personne qui demande votre code PIN.",
          quickCheck: [
            { objective: "O1", q: "Quel code PIN est le plus sûr ?", options: ["1990, votre année de naissance", "1234", "Un nombre sans lien avec votre anniversaire ou votre numéro de téléphone", "Les quatre derniers chiffres de votre numéro de téléphone"], answer: 2, why: "Un code PIN sans lien avec des faits sur vous est difficile à deviner pour les autres." },
            { objective: "O1", q: "Un homme appelle, dit qu'il vient de votre opérateur d'argent mobile et qu'il a besoin de votre code PIN pour réparer votre compte. Que faites-vous ?", options: ["Je raccroche ; les vrais employés ne demandent jamais le code PIN", "Je donne le code PIN, puis je le change plus tard", "Je donne seulement les deux premiers chiffres", "Je lui envoie plutôt le code reçu sur mon téléphone"], answer: 0, why: "Les opérateurs ne demandent jamais votre code PIN ni vos codes ; celui qui le fait est un escroc." }
          ]
        },
        {
          title: "Envoyer et payer : vérifiez le nom avant le code PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Vérifier le nom, le numéro et le montant sur l'écran de confirmation avant de taper votre code PIN.",
          text: [
            "La plupart des erreurs et beaucoup d'arnaques peuvent être arrêtées à un seul endroit : l'écran de confirmation. Avant que vous tapiez votre code PIN, le téléphone montre qui vous payez et combien. Au Kenya, M-Pesa affiche le nom lié à un numéro, un Till ou un Paybill ; les autres opérateurs affichent aussi un nom ou le nom du commerçant.",
            "Lisez lentement. Est-ce la bonne personne ou la bonne boutique ? Le montant est-il juste ? 5 000, ce n'est pas 50 000. Quand vous payez une boutique, prenez le numéro de Till, de marchand ou de Paybill sur une affiche ou un reçu de la boutique, pas sur un numéro que quelqu'un vous envoie.",
            "Si le nom est faux ou bizarre, annulez. Ne tapez pas le code PIN \"pour voir ce qui se passe\". Après le paiement, gardez le message de confirmation (SMS) jusqu'à ce que vous soyez sûr que la personne ou la boutique a reçu l'argent. C'est votre preuve.",
            "Exemple : Ama, à Kumasi, paie 600 GHS à un fournisseur avec MTN MoMo. L'écran affiche un autre nom que celui du fournisseur. Elle annule, appelle le fournisseur au numéro qu'elle a déjà, et découvre qu'elle s'est trompée d'un chiffre."
          ],
          steps: ["Tapez le numéro, le code marchand ou le Till.", "Tapez le montant et relisez-le deux fois.", "Sur l'écran de confirmation, lisez le nom, le numéro et le montant.", "Si quelque chose ne correspond pas, annulez.", "Si tout correspond, cachez le clavier et tapez votre code PIN.", "Gardez le SMS de confirmation comme preuve."],
          words: [["Écran de confirmation", "l'écran qui montre qui vous payez et combien, avant que vous tapiez votre code PIN."], ["Till / code marchand / Paybill", "des numéros que les boutiques et les entreprises utilisent pour recevoir des paiements."], ["SMS de confirmation", "le message que votre opérateur envoie après un paiement ; votre preuve."]],
          slides: [
            { title: "Arrêtez-vous sur l'écran de confirmation", bullets: ["Il montre le nom, le numéro et le montant", "Lisez-le lentement, avant le code PIN", "5 000, ce n'est pas 50 000"] },
            { title: "Payer une boutique", bullets: ["Prenez le Till ou le code marchand sur l'affiche de la boutique", "Pas sur un numéro que quelqu'un vous envoie", "Vérifiez le nom de la boutique à l'écran"] },
            { title: "Quelque chose ne va pas ? Annulez", bullets: ["Ne tapez pas le code PIN pour voir ce qui se passe", "Appelez la personne à un numéro que vous avez déjà", "Puis recommencez avec soin"] },
            { title: "Gardez votre preuve", bullets: ["Gardez le SMS de confirmation", "Jusqu'à ce que l'argent soit bien reçu", "Il vous faut pour toute annulation"] }
          ],
          sources: [SAF_REV],
          tryIt: "La prochaine fois que vous envoyez de l'argent ou payez, arrêtez-vous sur l'écran de confirmation et dites à voix haute le nom, le numéro et le montant avant de taper votre code PIN. Puis retrouvez le SMS de confirmation et ne le supprimez pas.",
          youCanNow: "vérifier le nom, le numéro et le montant avant de taper votre code PIN, et garder le message de confirmation comme preuve.",
          quickCheck: [
            { objective: "O2", q: "L'écran de confirmation affiche un nom que vous ne connaissez pas. Que faites-vous ?", options: ["Je tape le code PIN ; les noms sont souvent faux", "Je tape le code PIN et je demande plus tard", "J'envoie d'abord un plus petit montant", "J'annule et je vérifie le numéro avec la personne"], answer: 3, why: "Un nom bizarre veut dire un mauvais numéro ou une astuce ; annulez avant le code PIN." },
            { objective: "O2", q: "Pourquoi garder le SMS de confirmation après un paiement ?", options: ["C'est votre preuve si quelque chose se passe mal", "Il vous fait gagner des points", "La loi dit de le supprimer", "Il rend le prochain paiement moins cher"], answer: 0, why: "Le message de confirmation prouve le paiement et il faut l'avoir pour une annulation ou une réclamation." }
          ]
        },
        {
          title: "Les agents, les frais et vos relevés",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Lire les frais d'une opération dans la grille tarifaire officielle de votre opérateur et faire un retrait sûr chez un agent.",
          text: [
            "Un agent est une boutique où vous mettez de l'argent liquide sur votre portefeuille (dépôt) ou en retirez (retrait). Utilisez un agent enregistré, avec l'enseigne de l'opérateur et un numéro d'agent. Quand c'est possible, faites l'opération vous-même sur votre propre téléphone, et comptez l'argent avant de partir.",
            "Les frais dépendent de l'opérateur, du pays, du montant et du type d'opération. Ne devinez pas et ne croyez pas les frais qu'on vous annonce. Lisez la grille tarifaire officielle sur le site ou l'application de l'opérateur, dans la boutique, ou en composant le menu. Beaucoup d'applications affichent aussi les frais avant que vous confirmiez. Envoyer à quelqu'un sur un autre réseau ou vers une banque peut coûter plus cher.",
            "Un faux agent peut dire \"donnez-moi votre téléphone, je le fais pour vous\", ou demander votre code PIN. Ne donnez jamais votre téléphone avec le code PIN. Les vrais agents n'en ont pas besoin.",
            "Une fois par mois, lisez votre mini-relevé ou votre relevé complet dans le menu ou l'application. Cherchez les paiements que vous ne reconnaissez pas. Exemple : Moussa, tailleur à Dakar, regarde son historique Wave à chaque fin de mois et note dans un cahier le total envoyé et le total reçu. Les chiffres de ce cours ne sont que des exemples."
          ],
          steps: ["Trouvez la grille officielle des frais sur le site, l'application ou l'affiche en boutique de l'opérateur.", "Cherchez les frais pour le montant que vous voulez envoyer ou retirer.", "Chez l'agent, vérifiez l'enseigne et le numéro d'agent.", "Lancez le retrait sur votre propre téléphone ; vérifiez le nom de l'agent à l'écran.", "Comptez l'argent avant de partir.", "Lisez votre relevé une fois par mois."],
          words: [["Agent", "une boutique enregistrée qui fait les dépôts et les retraits d'argent liquide pour un opérateur d'argent mobile."], ["Grille tarifaire", "le tableau officiel des frais pour chaque type et chaque montant d'opération."], ["Mini-relevé", "une courte liste de vos dernières opérations, dans le menu ou l'application."]],
          slides: [
            { title: "Passer par un agent", bullets: ["Agent enregistré : enseigne de l'opérateur et numéro d'agent", "Lancez l'opération sur votre téléphone ; vérifiez le nom", "Comptez l'argent avant de partir"] },
            { title: "Les frais : lisez, ne devinez pas", bullets: ["Ils dépendent de l'opérateur, du pays, du montant et du type", "Grille officielle : site, application, affiche en boutique", "Autres réseaux ou banques : parfois plus cher"] },
            { title: "Signes d'un faux agent", bullets: ["\"Donnez-moi votre téléphone, je le fais\"", "Il demande votre code PIN", "Pas d'enseigne ni de numéro d'agent"] },
            { title: "Vérification mensuelle", bullets: ["Lisez votre relevé dans le menu ou l'application", "Cherchez les paiements que vous ne connaissez pas", "Notez le total envoyé et le total reçu"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Trouvez la grille officielle des frais de votre opérateur (site, application ou affiche en boutique). Notez les frais pour un montant que vous envoyez souvent, par exemple 1 000 KES, 5 000 NGN, 100 GHS ou 10 000 XOF. Ouvrez ensuite votre mini-relevé et vérifiez chaque ligne.",
          youCanNow: "lire les vrais frais dans la grille tarifaire officielle, passer par un agent en toute sécurité et vérifier votre relevé pour trouver des paiements bizarres.",
          quickCheck: [
            { objective: "O2", q: "Chez l'agent, il vous demande votre téléphone et votre code PIN pour \"aller plus vite\". Que faites-vous ?", options: ["Je les donne ; on peut faire confiance aux agents", "Je donne le téléphone mais pas le code PIN", "Je le fais moi-même et je garde mon code PIN secret", "J'écris le code PIN sur un papier pour l'agent"], answer: 2, why: "Les vrais agents n'ont jamais besoin de votre code PIN ; c'est vous qui lancez et confirmez l'opération." },
            { objective: "O5", q: "Où trouvez-vous les vrais frais d'un transfert ?", options: ["Ce que dit un inconnu", "La grille tarifaire officielle de l'opérateur, son application ou l'affiche en boutique", "Un message transféré sur WhatsApp", "L'estimation de votre voisin"], answer: 1, why: "Les frais changent et varient selon le pays : lisez-les sur les canaux officiels." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne l'argent mobile, et l'utiliser en toute sécurité",
        questions: [
          { objective: "O1", q: "Qui doit connaître votre code PIN d'argent mobile ?", options: ["Vous et l'agent", "Toute votre famille", "Vous seul", "Vous et le service client"], answer: 2, why: "Vous seul ; les employés, les agents et la famille n'en ont jamais besoin." },
          { objective: "O1", q: "Votre ligne cesse soudain de fonctionner et vous n'avez rien changé. Qu'est-ce que ça peut être, et que faites-vous ?", options: ["Un échange de SIM ; j'appelle l'opérateur depuis un autre téléphone pour bloquer", "La batterie est faible ; je charge le téléphone", "Un jour férié ; j'attends une semaine", "Rien ; ça va revenir"], answer: 0, why: "Une ligne coupée peut vouloir dire qu'un criminel a pris votre numéro ; bloquer vite protège votre portefeuille." },
          { objective: "O2", q: "Quel est le bon moment pour vérifier qui vous payez ?", options: ["Après avoir tapé le code PIN", "Sur l'écran de confirmation, avant le code PIN", "Le lendemain", "Seulement pour les gros montants"], answer: 1, why: "Une fois le code PIN tapé, l'argent part ; la vérification doit venir avant." },
          { objective: "O2", q: "Vous payez une boutique. D'où doit venir le Till ou le code marchand ?", options: ["D'un SMS d'un numéro inconnu", "D'un appelant qui dit que la boutique a changé de numéro", "D'un statut WhatsApp", "De l'affiche ou du reçu de la boutique"], answer: 3, why: "Les escrocs envoient de faux numéros de paiement ; prenez-le dans la boutique elle-même et vérifiez le nom à l'écran." },
          { objective: "O5", q: "Pourquoi lire votre relevé une fois par mois ?", options: ["Pour trouver les paiements que vous ne reconnaissez pas", "Pour baisser vos frais", "Pour changer de numéro", "Parce que l'opérateur vous paie pour le faire"], answer: 0, why: "Une vérification mensuelle repère tôt les fraudes et les erreurs." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Arnaques, erreurs et votre plan de sécurité",
      lessons: [
        {
          title: "Repérer les arnaques à l'argent mobile",
          objectives: ["O3"],
          minutes: 6,
          goal: "Repérer les six arnaques courantes à l'argent mobile et le signe d'alerte de chacune.",
          text: [
            "Les escrocs utilisent les appels, les SMS, WhatsApp et les réseaux sociaux. Ils se font passer pour votre opérateur, un parent, un agent, un acheteur ou une entreprise qui offre un emploi. Les astuces changent, mais les signes d'alerte restent les mêmes.",
            "1. Fausse annulation : vous recevez un SMS qui ressemble à un paiement pour vous, puis un appel : \"Je vous ai envoyé de l'argent par erreur, renvoyez-le s'il vous plaît.\" Vérifiez d'abord votre vrai solde. Souvent, rien n'est arrivé ; le SMS venait d'un numéro de téléphone ordinaire, pas de l'opérateur. 2. Demande de code PIN ou de code : toute personne qui demande votre code PIN ou un code à usage unique. 3. Faux employé : \"Votre compte sera bloqué si vous ne composez pas ce code ou ne nous donnez pas vos informations.\" 4. Gain ou promotion : \"Vous avez gagné, envoyez des frais pour recevoir votre lot.\" 5. Faux emploi ou faux prêt : une offre qui vous demande de payer des frais d'abord. 6. Message urgent d'un proche : \"Maman, j'ai un problème, envoie de l'argent à ce nouveau numéro.\"",
            "Les vrais messages de l'opérateur viennent de son nom officiel ou de son numéro court, pas d'un numéro de portable ordinaire. Les opérateurs ne vous demandent pas de composer des codes pour réparer votre compte ou gagner un lot. Si quelque chose semble urgent, arrêtez-vous. Rappelez la personne ou l'opérateur à un numéro que vous connaissez déjà.",
            "Exemple : Chinedu, à Enugu, reçoit un SMS disant que 20 000 NGN sont arrivés, puis un appel lui demandant de les renvoyer. Il vérifie son solde dans l'application : rien n'est arrivé. Il raccroche et signale le numéro."
          ],
          steps: ["Vérifiez l'expéditeur : nom officiel ou numéro court, ou numéro ordinaire ?", "Vérifiez votre vrai solde dans le menu ou l'application.", "Demandez-vous : me demande-t-on mon code PIN, un code, des frais, ou de faire vite ?", "Arrêtez-vous et rappelez un numéro que vous connaissez déjà.", "Signalez le numéro de l'escroc à votre opérateur."],
          words: [["Fausse annulation", "une astuce où quelqu'un fait semblant de vous avoir envoyé de l'argent par erreur et vous demande de le renvoyer."], ["Code à usage unique (OTP)", "un code court envoyé sur votre téléphone pour confirmer une action ; ne le partagez jamais."], ["Numéro court", "le numéro officiel court depuis lequel un opérateur envoie ses messages."]],
          slides: [
            { title: "Six arnaques courantes", bullets: ["Fausse annulation ; demande de code PIN ou de code ; faux employé", "Gain qui demande des frais ; emploi ou prêt qui demande des frais", "Message urgent d'un proche depuis un nouveau numéro"] },
            { title: "Fausse annulation", bullets: ["Un SMS semble dire que de l'argent est arrivé", "Appel : \"Envoyé par erreur, renvoyez-le\"", "Vérifiez votre vrai solde : souvent, rien n'est arrivé"] },
            { title: "Signes d'alerte", bullets: ["On demande votre code PIN ou un code", "On demande des frais d'abord", "On vous presse ; le message vient d'un numéro ordinaire"] },
            { title: "Que faire", bullets: ["Arrêtez-vous. Vérifiez votre solde", "Rappelez un numéro que vous connaissez déjà", "Signalez le numéro à votre opérateur"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Parcourez vos SMS et cherchez les messages qui parlent d'argent. Pour chacun, décidez : numéro court officiel ou numéro ordinaire ? Demande-t-il un code PIN, un code, des frais ou de faire vite ? Notez les signes d'arnaque que vous trouvez.",
          youCanNow: "repérer les six arnaques courantes à l'argent mobile et dire le signe d'alerte de chacune.",
          quickCheck: [
            { objective: "O3", q: "Un SMS venant d'un numéro de portable ordinaire dit que vous avez reçu 25 000 XAF. Puis quelqu'un appelle et vous demande de les renvoyer. Que faites-vous d'abord ?", options: ["Je renvoie vite l'argent pour être honnête", "Je vérifie mon vrai solde dans le menu ou l'application", "Je donne mon code PIN à l'appelant pour annuler", "Je transfère le SMS à des amis"], answer: 1, why: "Les SMS de fausse annulation viennent de numéros ordinaires ; votre vrai solde montre la vérité." },
            { objective: "O3", q: "Un message dit que vous avez gagné un téléphone et que vous devez d'abord payer des frais de livraison. Quel est le signe d'alerte ?", options: ["Il parle d'un téléphone", "Il est arrivé le soir", "On vous demande de payer des frais pour recevoir un lot", "Il utilise votre prénom"], answer: 2, why: "Les vrais gains ne demandent pas de frais d'abord ; payer pour recevoir est une arnaque classique." }
          ]
        },
        {
          title: "Mauvais envoi ou fraude : la première heure",
          objectives: ["O4"],
          minutes: 5,
          goal: "Signaler un mauvais envoi ou une fraude par les canaux officiels de votre opérateur le jour même.",
          text: [
            "Agissez vite. Une annulation est plus facile tant que l'argent est encore dans l'autre portefeuille. Gardez le SMS de confirmation d'origine ; ne le supprimez pas et ne le modifiez pas.",
            "Utilisez seulement les canaux officiels : le numéro d'aide imprimé sur la pochette de votre SIM ou sur le site de l'opérateur, l'application officielle, le numéro court officiel ou une boutique de l'opérateur. N'utilisez jamais un numéro donné par un inconnu ou trouvé dans un commentaire sur les réseaux sociaux, et ne payez jamais quelqu'un qui propose de \"récupérer\" votre argent contre des frais.",
            "Exemple du Kenya : parmi les canaux publiés par Safaricom, on trouve le transfert du SMS de confirmation M-Pesa au 456 pour demander l'annulation d'un envoi à la mauvaise personne, l'appel au 100 pour un mauvais Till ou Paybill, et le transfert d'un numéro ou d'un message frauduleux au 333. Les autres opérateurs ont leurs propres démarches ; lisez-les sur le site ou l'application officielle de l'opérateur, car les numéros et les démarches changent.",
            "Une annulation n'est pas garantie. Si la personne a déjà retiré l'argent et refuse de le rendre, l'opérateur peut vous dire d'aller à la police. Si votre code PIN ou votre ligne a été volé, signalez-le d'abord à l'opérateur, puis à la police. Si l'opérateur ne règle pas le problème, la banque centrale a une procédure de réclamation pour les consommateurs (par exemple la Banque centrale du Nigeria ou la Banque du Ghana)."
          ],
          steps: ["Ne supprimez pas le SMS de confirmation.", "Dans l'heure, utilisez le canal officiel d'annulation ou de fraude de votre opérateur.", "Notez la date, l'heure, le montant, l'identifiant de la transaction et la personne à qui vous avez parlé.", "Si le code PIN ou la ligne a été volé, bloquez d'abord la SIM et le portefeuille.", "Si besoin, portez plainte à la police avec le SMS.", "Si l'opérateur ne règle pas le problème, utilisez la procédure de réclamation de la banque centrale."],
          words: [["Annulation", "quand l'opérateur rend l'argent envoyé au mauvais numéro, s'il y est encore."], ["Identifiant de la transaction", "le code dans le SMS de confirmation qui identifie un paiement."], ["Arnaque à la récupération", "une fausse offre de récupérer votre argent perdu si vous payez des frais."]],
          slides: [
            { title: "Agissez dans la première heure", bullets: ["L'annulation est plus facile tant que l'argent y est encore", "Gardez le SMS de confirmation d'origine", "Notez la date, l'heure, le montant, l'identifiant"] },
            { title: "Canaux officiels seulement", bullets: ["Numéro d'aide sur la pochette SIM ou le site officiel", "Application officielle, numéro court ou boutique de l'opérateur", "Jamais un numéro donné par un inconnu"] },
            { title: "Exemple : Kenya (Safaricom)", bullets: ["Mauvaise personne : transférez le SMS au 456", "Mauvais Till ou Paybill : appelez le 100", "Numéro ou message frauduleux : transférez au 333"] },
            { title: "Si ce n'est pas réglé", bullets: ["Plainte à la police avec le SMS", "Procédure de réclamation de la banque centrale", "Ne payez jamais de frais de \"récupération\""] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Trouvez les démarches officielles d'annulation et de fraude de votre propre opérateur sur son site, son application ou la pochette de la SIM. Écrivez-les sur papier : le numéro ou le code, et ce qu'il faut envoyer. Ne les copiez pas depuis un message transféré sur WhatsApp.",
          youCanNow: "agir dans la première heure après un mauvais envoi ou une fraude, en utilisant seulement les canaux officiels de votre opérateur.",
          quickCheck: [
            { objective: "O4", q: "Vous avez envoyé de l'argent au mauvais numéro. Que gardez-vous ?", options: ["Rien ; je supprime le SMS", "Seulement le montant, dans ma tête", "Une capture d'écran envoyée par un inconnu", "Le SMS de confirmation d'origine"], answer: 3, why: "Le message de confirmation d'origine contient l'identifiant de la transaction dont l'opérateur a besoin." },
            { objective: "O4", q: "Quelqu'un sur Facebook propose de récupérer votre argent perdu contre de petits frais. Qu'est-ce que c'est ?", options: ["Une arnaque à la récupération ; j'utilise seulement les canaux officiels", "Un service utile", "La procédure de la banque centrale", "Une boutique de l'opérateur"], answer: 0, why: "Payer un inconnu pour récupérer de l'argent est une deuxième arnaque ; les canaux officiels sont gratuits." }
          ]
        },
        {
          title: "Votre plan de sécurité d'argent mobile",
          objectives: ["O5"],
          minutes: 5,
          goal: "Écrire un plan de sécurité d'argent mobile d'une page pour vous ou votre famille.",
          text: [
            "Un plan de sécurité rassemble tout ce cours sur une page, pour que vous et votre famille sachiez quoi faire avant qu'un problème arrive. Gardez-le sur papier à la maison, pas seulement dans le téléphone.",
            "Il a six parties : 1. Les règles du code PIN et du téléphone (code PIN difficile, verrouillage d'écran, code PIN de la SIM, ne jamais partager). 2. La vérification du nom avant chaque code PIN. 3. Les canaux officiels d'aide et de fraude de votre opérateur, copiés depuis son site, son application ou la pochette de la SIM. 4. Les six signes d'arnaque. 5. Les étapes de la première heure après un mauvais envoi ou une fraude. 6. Une vérification mensuelle du relevé, avec une date.",
            "Parlez-en avec les parents âgés et les adolescents, qui sont souvent visés. Mettez-vous d'accord sur une règle familiale : \"Nous n'envoyons jamais d'argent à un nouveau numéro à cause d'un message urgent. Nous rappelons d'abord l'ancien numéro.\"",
            "Exemple : Fatima, commerçante à Casablanca, garde son plan dans son cahier de caisse. À chaque fin de mois, elle vérifie l'historique de son portefeuille et coche la date sur le plan."
          ],
          steps: ["Écrivez vos règles pour le code PIN et le verrouillage du téléphone.", "Écrivez la règle de vérification du nom.", "Copiez les canaux officiels d'aide et de fraude de votre opérateur depuis une source officielle.", "Faites la liste des six signes d'arnaque.", "Écrivez vos étapes de la première heure.", "Fixez une date chaque mois pour vérifier votre relevé.", "Lisez-le avec votre famille."],
          words: [["Plan de sécurité", "une courte liste écrite de règles et d'étapes qui protègent votre argent."]],
          slides: [
            { title: "Une page, six parties", bullets: ["Règles du code PIN et du téléphone ; vérification du nom", "Canaux officiels d'aide et de fraude", "Signes d'arnaque ; étapes de la première heure ; vérification mensuelle"] },
            { title: "Canaux officiels seulement", bullets: ["Copiez-les depuis le site, l'application ou la pochette SIM", "Pas depuis un message transféré ou un inconnu"] },
            { title: "Partagez-le à la maison", bullets: ["Les parents et les adolescents sont souvent visés", "Règle familiale : rappeler d'abord l'ancien numéro", "Gardez le plan sur papier"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Tâche finale : écrivez votre plan de sécurité d'argent mobile d'une page avec les six parties. Copiez les canaux d'aide et de fraude de votre opérateur depuis son site officiel, son application ou la pochette de la SIM. Lisez-le avec un membre de votre famille.",
          youCanNow: "écrire et partager un plan de sécurité d'argent mobile qui vous protège, vous et votre famille.",
          quickCheck: [
            { objective: "O5", q: "D'où doivent venir les numéros d'aide de votre plan ?", options: ["D'un message transféré sur WhatsApp", "Du site officiel, de l'application ou de la pochette SIM de l'opérateur", "D'un appelant qui se dit employé", "D'un commentaire sur les réseaux sociaux"], answer: 1, why: "Les escrocs diffusent de faux numéros d'aide ; copiez-les seulement depuis des sources officielles." },
            { objective: "O5", q: "Quelle règle familiale protège contre l'arnaque au message urgent ?", options: ["Toujours envoyer vite en cas d'urgence", "Partager un seul code PIN pour toute la famille", "Répondre avec votre code PIN pour prouver que c'est vous", "Rappeler l'ancien numéro de la personne avant d'envoyer"], answer: 3, why: "Rappeler un numéro connu montre si le message urgent est vrai." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Arnaques, erreurs et votre plan de sécurité",
        questions: [
          { objective: "O3", q: "\"Votre compte sera bloqué aujourd'hui. Composez ce code et tapez votre code PIN pour le garder.\" C'est :", options: ["Un message normal de l'opérateur", "Une arnaque : on vous presse et on demande votre code PIN", "Une annulation", "Une promotion"], answer: 1, why: "Les opérateurs ne vous demandent jamais de composer un code avec votre code PIN ; la pression est un signe d'alerte." },
          { objective: "O3", q: "Quel message a le plus de chances d'être vrai ?", options: ["D'un numéro ordinaire : \"Renvoyez l'argent que je vous ai envoyé par erreur\"", "\"Vous avez gagné ! Payez des frais pour le recevoir\"", "Une confirmation de paiement venant du nom officiel de l'opérateur, qui correspond à votre solde", "\"Maman, nouveau numéro, envoie de l'argent tout de suite\""], answer: 2, why: "Les vraies confirmations viennent du nom officiel ou du numéro court et correspondent à votre vrai solde." },
          { objective: "O4", q: "Quand devez-vous signaler un mauvais envoi ?", options: ["Le mois prochain", "Seulement si c'est un gros montant", "Après que l'autre personne l'a dépensé", "Le jour même, le plus vite possible"], answer: 3, why: "Une annulation est plus facile tant que l'argent est encore dans l'autre portefeuille." },
          { objective: "O4", q: "La personne qui a reçu votre argent par erreur l'a déjà retiré et refuse de le rendre. Que faire ensuite ?", options: ["Suivre les conseils de l'opérateur et porter plainte à la police avec votre SMS", "Payer un inconnu pour le récupérer", "Supprimer le SMS", "Lui envoyer encore de l'argent"], answer: 0, why: "Une fois l'argent retiré, l'affaire peut relever de la police ; votre SMS est votre preuve." },
          { objective: "O5", q: "Selon le plan de sécurité, à quelle fréquence faut-il vérifier votre relevé ?", options: ["Jamais", "Une fois par mois", "Une fois tous les cinq ans", "Seulement quand le téléphone est perdu"], answer: 1, why: "Une vérification mensuelle régulière repère tôt les paiements bizarres." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Utiliser l'argent mobile en toute sécurité (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "Quel est le code PIN le plus faible ?", options: ["Quatre chiffres au hasard", "Un nombre que vous seul connaissez", "Un code PIN que vous avez changé récemment", "Votre année de naissance"], answer: 3, why: "Votre année de naissance est facile à trouver et à deviner pour les autres." },
      { objective: "O1", q: "Qui peut sans danger vous demander votre code PIN d'argent mobile ?", options: ["Personne", "Le service client", "Un agent enregistré", "Votre banque"], answer: 0, why: "Personne n'a besoin de votre code PIN ; les vrais employés et les agents ne le demandent jamais." },
      { objective: "O1", q: "On vous vole votre téléphone. Quelle est la première étape ?", options: ["Acheter un nouveau téléphone le mois prochain", "Appeler l'opérateur depuis un autre téléphone pour bloquer la SIM et le portefeuille", "Envoyer un message au voleur", "Attendre de voir s'il revient"], answer: 1, why: "Bloquer vite empêche le voleur d'utiliser votre portefeuille." },
      { objective: "O1", q: "Pourquoi mettre un verrouillage d'écran et un code PIN de SIM ?", options: ["Pour rendre le téléphone plus rapide", "Pour baisser les frais", "Pour qu'un voleur ne puisse pas facilement utiliser votre téléphone ou votre SIM", "Parce que les agents en ont besoin"], answer: 2, why: "Les verrous freinent toute personne qui prend votre téléphone ou votre SIM." },
      { objective: "O2", q: "Quelles trois choses vérifiez-vous sur l'écran de confirmation ?", options: ["L'heure, la météo et la batterie", "Le nom, le numéro et le montant", "L'agent, la couleur et la date", "Les frais, le réseau et le signal"], answer: 1, why: "Le nom, le numéro et le montant vous disent que l'argent va au bon endroit." },
      { objective: "O2", q: "Vous vouliez envoyer 50 GHS et l'écran affiche 500 GHS. Que faites-vous ?", options: ["J'annule et je retape", "Je tape le code PIN et je demande la monnaie", "J'envoie et j'annule plus tard", "Je tape la moitié du code PIN"], answer: 0, why: "Annulez avant le code PIN ; corriger après coup est difficile." },
      { objective: "O2", q: "Un message dit que votre fournisseur a \"un nouveau numéro de paiement\". Que faites-vous ?", options: ["Je paie tout de suite le nouveau numéro", "Je le transfère aux autres clients", "J'appelle le fournisseur au numéro que j'ai déjà pour vérifier", "Je paie la moitié à chaque numéro"], answer: 2, why: "Les faux numéros de paiement sont une astuce courante ; vérifiez avec la personne à un numéro connu." },
      { objective: "O2", q: "Chez un agent, qu'est-ce qui est sûr ?", options: ["Donner à l'agent votre téléphone et votre code PIN", "Partir avant de compter l'argent", "Passer par un agent sans enseigne", "Lancer le retrait sur votre propre téléphone et compter l'argent"], answer: 3, why: "Vous gardez le contrôle de votre code PIN et vous vérifiez l'argent avant de partir." },
      { objective: "O3", q: "Dans une arnaque à la fausse annulation, que s'est-il passé en général ?", options: ["De l'argent est vraiment arrivé par erreur", "Un faux SMS venant d'un numéro ordinaire a fait croire que de l'argent était arrivé", "L'opérateur a fait une erreur", "L'agent a perdu l'argent"], answer: 1, why: "Le faux SMS ressemble à un paiement, mais votre vrai solde montre que rien n'est arrivé." },
      { objective: "O3", q: "Lequel est un signe d'alerte d'arnaque ?", options: ["On vous demande des frais avant de vous donner un lot, un emploi ou un prêt", "Le message vient du numéro court officiel", "Le montant correspond à votre solde", "C'est vous qui avez lancé le paiement"], answer: 0, why: "Payer d'abord pour recevoir est un signe d'arnaque classique." },
      { objective: "O3", q: "Un message WhatsApp d'un nouveau numéro : \"Papa, j'ai perdu mon téléphone, envoie 30 000 XOF à ce numéro tout de suite.\" Que faites-vous ?", options: ["J'envoie vite", "J'envoie la moitié", "J'appelle d'abord mon enfant à son ancien numéro", "Je réponds avec mon code PIN"], answer: 2, why: "Appeler l'ancien numéro permet de vérifier si le message urgent est vrai." },
      { objective: "O3", q: "Comment arrivent en général les vrais messages de l'opérateur ?", options: ["D'un numéro de portable ordinaire", "Du nom officiel ou du numéro court de l'opérateur", "Par le WhatsApp d'un inconnu", "D'une page de réseau social qui demande votre code PIN"], answer: 1, why: "Les opérateurs envoient depuis des noms officiels ou des numéros courts ; un numéro ordinaire est un signe d'alerte." },
      { objective: "O4", q: "Au Kenya, la démarche publiée par Safaricom pour demander l'annulation d'un envoi à la mauvaise personne consiste à :", options: ["Publier sur Facebook", "Appeler n'importe quel numéro trouvé en ligne", "Transférer le SMS de confirmation au 456", "Envoyer votre code PIN au 100"], answer: 2, why: "Transférer la confirmation M-Pesa d'origine au 456 lance une demande d'annulation (vérifiez les démarches actuelles sur le site de Safaricom)." },
      { objective: "O4", q: "Quelles informations notez-vous quand vous signalez un problème ?", options: ["La date, l'heure, le montant et l'identifiant de la transaction", "Votre code PIN", "Votre code à usage unique", "Votre mot de passe"], answer: 0, why: "Ces informations aident l'opérateur à retrouver le paiement ; ne partagez jamais votre code PIN ni vos codes." },
      { objective: "O4", q: "Où trouvez-vous le numéro d'aide officiel de votre opérateur ?", options: ["Dans un commentaire sous une publication Facebook", "Auprès d'un appelant qui se dit employé", "Dans un SMS venant d'un numéro ordinaire", "Sur la pochette de la SIM, le site officiel ou l'application officielle"], answer: 3, why: "Les sources officielles donnent les vrais numéros ; les escrocs diffusent de faux numéros." },
      { objective: "O4", q: "L'opérateur n'a pas réglé votre réclamation. Que pouvez-vous utiliser d'autre ?", options: ["Un inconnu qui demande des frais de récupération", "La procédure de réclamation des consommateurs de la banque centrale", "Plus rien", "Un nouveau code PIN pour l'autre personne"], answer: 1, why: "Les banques centrales, comme la CBN (Banque centrale du Nigeria) et la Banque du Ghana, ont des procédures de réclamation." },
      { objective: "O5", q: "Qu'est-ce qui a sa place dans votre plan de sécurité d'argent mobile ?", options: ["Votre code PIN écrit en entier", "Vos codes à usage unique", "Le canal officiel de fraude de votre opérateur", "Le code PIN de votre voisin"], answer: 2, why: "Le plan contient des règles et des canaux officiels, jamais de codes secrets." },
      { objective: "O5", q: "Pourquoi garder le plan de sécurité sur papier à la maison ?", options: ["Pour que la famille puisse l'utiliser même si le téléphone est perdu", "Parce que les téléphones ne gardent pas les notes", "Pour le montrer aux agents", "Pour le publier en ligne"], answer: 0, why: "Si le téléphone est volé, le plan sur papier vous dit encore quoi faire." },
      { objective: "O5", q: "Avec qui devriez-vous relire le plan de sécurité ?", options: ["Des inconnus au marché", "Un appelant qui dit venir de l'opérateur", "Personne", "Des membres de la famille, comme les parents âgés et les adolescents"], answer: 3, why: "Les membres de la famille sont souvent visés ; partager le plan les protège aussi." },
      { objective: "O5", q: "Où lisez-vous les vrais frais d'une opération ?", options: ["Dans un message transféré sur WhatsApp", "Dans la grille tarifaire officielle de l'opérateur, son application ou l'affiche en boutique", "Dans l'estimation d'un ami", "Dans un commentaire sur les réseaux sociaux"], answer: 1, why: "Les frais varient selon le pays et changent ; les canaux officiels montrent les frais actuels." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est à Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Règles du code PIN et du téléphone", objective: "O1", notYet: "Pas de règles pour le code PIN, ou le plan contient un vrai code PIN ou un vrai code.", meets: "Dit : code PIN difficile à deviner, verrouillage d'écran, ne jamais partager le code PIN ni les codes, bloquer tout de suite si le téléphone est perdu.", exceeds: "Ajoute aussi un code PIN de SIM et ce qu'il faut faire si la ligne coupe soudain (possible échange de SIM)." },
      { name: "Vérification du nom", objective: "O2", notYet: "Aucune étape de vérification avant le code PIN.", meets: "Dit de vérifier le nom, le numéro et le montant sur l'écran de confirmation et de garder le SMS de confirmation.", exceeds: "Ajoute de prendre les codes Till ou marchand seulement dans la boutique elle-même et de rappeler un numéro connu en cas de \"nouveau\" numéro de paiement." },
      { name: "Signes d'arnaque", objective: "O3", notYet: "Moins de quatre signes d'arnaque, ou des signes vagues.", meets: "Liste les six arnaques courantes avec un signe d'alerte pour chacune.", exceeds: "Ajoute un exemple réel que l'apprenant ou sa famille a vu et comment ils l'ont repéré." },
      { name: "Canaux officiels et première heure", objective: "O4", notYet: "Numéros d'aide absents, ou copiés depuis une source non officielle.", meets: "Donne les canaux officiels d'aide, d'annulation et de fraude de l'opérateur (depuis le site, l'application ou la pochette SIM) et les étapes de la première heure.", exceeds: "Cite aussi la voie de réclamation de la banque centrale et l'étape de la police, et dit d'où chaque canal a été copié." },
      { name: "Vérification mensuelle et partage", objective: "O5", notYet: "Pas de vérification régulière, et le plan n'est pas partagé.", meets: "Fixe une vérification mensuelle du relevé, et le plan a été lu avec un membre de la famille.", exceeds: "Contient une règle familiale de rappel et une première vérification déjà faite et datée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent, après 30 jours, vérifier le nom avant chaque code PIN et lire leur relevé chaque mois",
      "Apprenants qui disent avoir reconnu et refusé un appel ou un message d'arnaque dans les 30 jours",
      "Moins de pertes d'argent mobile signalées par les membres d'un groupe d'épargne (tontine), d'une association de marché ou d'un groupe communautaire partenaire"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone avec un compte d'argent mobile (téléphone simple ou smartphone)",
      "La grille officielle des frais et les canaux d'aide de l'opérateur (site, application, affiche en boutique ou pochette SIM)",
      "Du papier et un stylo pour le plan de sécurité",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Convient aux associations de marché, aux groupes d'épargne, aux églises, aux mosquées, aux groupes de jeunes et aux groupes de femmes : faites le test de départ ensemble et un chapitre par réunion.",
      "Ne demandez jamais aux apprenants de taper ou de dire un vrai code PIN ou un vrai code pendant l'entraînement. Montrez les menus sur un téléphone de démonstration ou en dessinant les écrans.",
      "Avant la séance, cherchez les démarches officielles d'annulation et de fraude des opérateurs que votre groupe utilise dans votre pays, sur les sites ou dans les boutiques des opérateurs eux-mêmes, et vérifiez qu'elles sont à jour.",
      "Invitez les membres à partager des messages d'arnaque qu'ils ont reçus (en cachant les numéros personnels) et à les classer par signe d'alerte.",
      "Notez la tâche finale avec la grille d'évaluation ; ne ramassez jamais les plans si les apprenants y ont ajouté des informations personnelles."
    ]
  }
};
