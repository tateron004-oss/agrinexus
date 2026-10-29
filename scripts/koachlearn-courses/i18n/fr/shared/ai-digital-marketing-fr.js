"use strict";

// Koach Learn course (shared), French translation of "AI Digital Marketing". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-digital-marketing-fr",
  lang: "fr",
  translationOf: "ai-digital-marketing",
  category: "Veterans (military)",
  name: "Marketing numérique avec l'IA",
  skills: "Définir un client cible, Rédiger des publications avec l'IA, Créer des visuels dans Canva, Rédiger un e-mail marketing conforme à la loi, Signaler honnêtement la publicité, Lire les résultats",
  outcome: "planifier et créer une semaine de marketing numérique pour une petite entreprise avec l'aide de l'IA : un profil de client cible, cinq publications sur les réseaux sociaux avec visuels, un e-mail marketing conforme aux règles CAN-SPAM, et une façon simple de mesurer ce qui a marché.",
  about: [
    "Le marketing numérique consiste à toucher les clients en ligne : réseaux sociaux, e-mail, sites web et moteurs de recherche. Les outils d'IA peuvent rédiger des publications, proposer des idées et aider à créer des visuels en quelques minutes, si bien qu'une entreprise d'une seule personne peut faire du marketing comme une plus grande.",
    "Ce cours s'adresse aux anciens militaires qui lancent une entreprise ou cherchent un emploi dans le marketing, aux demandeurs d'emploi qui veulent une compétence recherchée, et aux habitants qui font connaître un commerce local, un stand de nourriture, une église ou un service. Il vous faut un téléphone ou un ordinateur et des outils gratuits comme ChatGPT, Microsoft Copilot ou Google Gemini, et Canva.",
    "Vous construirez un vrai plan marketing d'une semaine pour une entreprise de votre choix. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Pour une petite entreprise réelle ou fictive, rassemblez un kit marketing d'une semaine : un profil de client cible en un paragraphe, cinq publications avec légendes et visuels Canva vérifiés, un e-mail marketing avec un objet clair, une adresse postale et une option de désabonnement, et une feuille de suivi qui indique le chiffre que vous surveillerez pour chaque publication.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des anciens militaires et des conjoints de militaires qui possèdent ou lancent une petite entreprise, comme un service, un métier manuel, de la restauration ou une boutique en ligne, et qui veulent plus de clients sans engager d'agence de marketing.",
    startingPoint: "Ils utilisent les réseaux sociaux et l'e-mail pour eux-mêmes et ont parfois une page d'entreprise. La plupart publient sans plan, n'ont jamais utilisé l'IA ou Canva pour le marketing et ne connaissent pas les règles sur l'e-mail et la publicité.",
    gap: "Une petite entreprise vit ou meurt selon qu'elle a des clients réguliers, et le marketing en ligne prend du temps que les propriétaires n'ont pas. Les apprenants doivent planifier et produire une semaine de marketing honnête et bien ciblé avec l'aide de l'IA, respecter les règles du CAN-SPAM et de la FTC, et mesurer les résultats pour que leurs efforts deviennent des réservations et des ventes.",
    constraints: [
      "Niveau de lecture : mots simples ; les termes de marketing sont expliqués la première fois",
      "Appareils : un téléphone ou un ordinateur ; un ordinateur est plus pratique pour Canva et les tableurs",
      "Coût : outils gratuits uniquement (un assistant d'IA, l'offre gratuite de Canva, Google Sheets ou Excel)",
      "Règles : le CAN-SPAM et les recommandations de la FTC des États-Unis s'appliquent ; les apprenants hors des États-Unis vérifient les règles de leur pays",
      "Vie privée : aucun nom ni coordonnée de client collé dans un outil d'IA"
    ],
    prerequisites: "Aucun. Les apprenants qui n'ont jamais utilisé d'assistant d'IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour une petite entreprise réelle ou fictive", action: "écrire le profil d'un client cible et un message marketing en une phrase", standard: "en disant qui est le client, ce dont il a besoin, et ce que vous proposez, pour qui et pourquoi vous choisir" },
    { id: "O2", condition: "Avec un assistant d'IA et votre profil de client", action: "rédiger cinq publications de types différents, chacune avec un appel à l'action", standard: "avec chaque fait, prix et date vérifié et aucune affirmation que vous ne pouvez pas prouver" },
    { id: "O3", condition: "Avec l'offre gratuite de Canva", action: "créer un visuel fidèle à votre marque pour chaque publication", standard: "avec les mêmes couleurs et polices, peu de mots et seulement des images que vous avez le droit d'utiliser" },
    { id: "O4", condition: "À partir d'une offre pour d'anciens clients", action: "rédiger un e-mail marketing qui respecte les principales exigences du CAN-SPAM", standard: "avec un objet honnête, une adresse postale et une option de désabonnement claire" },
    { id: "O5", condition: "À partir d'une publicité, d'un avis ou d'un contenu créé par l'IA", action: "repérer quand une mention est nécessaire et garder les avis et les témoignages honnêtes", standard: "en ayant au moins 4 cas justes sur 5" },
    { id: "O6", condition: "Après une semaine de publications", action: "choisir un chiffre à suivre pour chaque publication et utiliser les résultats pour planifier la semaine suivante", standard: "avec une feuille de suivi qui a un chiffre objectif et un résultat pour chaque publication" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier et créer du contenu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Connaître votre client et votre message",
          minutes: 5,
          goal: "Écrire le profil d'un client cible et un message clair pour une entreprise.",
          text: [
            "Le marketing marche quand il s'adresse à une personne précise. Un profil de client cible décrit votre meilleur client : qui il est, ce dont il a besoin, ce qui l'inquiète et où il passe du temps en ligne.",
            "Écrivez ensuite un message clair : ce que vous proposez, pour qui, et pourquoi vous choisir. Exemple : « Lavage auto à domicile tenu par un ancien militaire, qui vient devant chez vous à Fayetteville. Réservez en deux minutes. »",
            "L'IA peut vous aider à trouver des idées. Demandez : « Je gère une entreprise de nettoyage de voitures à domicile. Décris trois types de clients probables et ce qui compte pour chacun. » Choisissez celui qui correspond aux clients que vous avez ou que vous voulez, et corrigez-le avec ce que vous savez."
          ],
          steps: ["Nommez l'entreprise et ce qu'elle vend.", "Demandez à un assistant d'IA de proposer trois types de clients.", "Choisissez-en un et écrivez un court profil : qui, besoins, inquiétudes, où en ligne.", "Écrivez un message en une phrase : quoi, pour qui, pourquoi vous."],
          words: [["Client cible", "le type précis de personne que vise votre marketing."], ["Profil", "une courte description d'une personne ou d'un groupe."], ["Message", "l'idée principale que vous voulez que les clients connaissent et retiennent."]],
          slides: [
            { title: "Parler à une seule personne", bullets: ["Qui elle est et ce dont elle a besoin", "Ce qui l'inquiète", "Où elle passe du temps en ligne"] },
            { title: "Un message clair", bullets: ["Ce que vous proposez", "Pour qui", "Pourquoi vous choisir"] },
            { title: "Trouver des idées avec l'IA", bullets: ["Demander trois types de clients", "En choisir un, puis le corriger avec ce que vous savez"] }
          ],
          tryIt: "Choisissez une entreprise réelle ou fictive. Utilisez un assistant d'IA pour trouver des types de clients, puis écrivez un profil de client cible en un paragraphe et un message en une phrase.",
          youCanNow: "écrire un profil de client cible et un message marketing clair.",
          quickCheck: [
            { objective: "O1", q: "Que décrit le profil d'un client cible ?", options: ["Toutes les personnes qui utilisent internet", "Votre meilleur client : qui il est, ce dont il a besoin, ce qui l'inquiète et où il est en ligne", "Vos prix pour l'année", "Les logos de vos concurrents"], answer: 1, why: "Un profil décrit un type précis de client pour que votre marketing lui parle." },
            { objective: "O1", q: "L'IA propose trois types de clients pour votre entreprise d'entretien d'espaces verts. Un seul correspond aux gens qui vous appellent vraiment. Que faites-vous ?", options: ["Utiliser les trois dans chaque publication", "Prendre le plus séduisant", "Ignorer l'IA et ne rien publier", "Choisir celui qui correspond aux vrais clients et le corriger avec ce que vous savez"], answer: 3, why: "Choisissez le type qui correspond à vos clients réels ou souhaités et ajoutez ce que vous savez." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rédiger des publications pour les réseaux sociaux avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour rédiger cinq publications, puis les corriger pour qu'elles soient exactes et vous ressemblent.",
          text: [
            "Les bonnes publications enseignent, montrent ou invitent. Variez-les : un conseil (« 3 façons de garder l'intérieur de votre voiture propre »), une photo des coulisses, une histoire de client (avec son accord), une offre, et une question qui invite à commenter.",
            "Donnez à l'IA votre profil et votre message, puis demandez : « Écris cinq courtes publications Instagram et Facebook pour ce client. Un conseil, une coulisse, une histoire de client, une offre, une question. Ton aimable, moins de 60 mots chacune, avec un appel à l'action. »",
            "Corrigez toujours. Vérifiez chaque fait, prix et date. Retirez les affirmations que vous ne pouvez pas prouver, comme « le meilleur de la région ». Faites que le texte vous ressemble, et ne publiez jamais un avis ou un résultat qui n'a pas eu lieu."
          ],
          steps: ["Collez votre profil de client et votre message dans l'assistant d'IA.", "Demandez cinq publications de types différents avec un appel à l'action.", "Vérifiez chaque fait, prix et date.", "Supprimez les affirmations que vous ne pouvez pas prouver.", "Réécrivez avec votre propre voix."],
          words: [["Appel à l'action", "l'étape que vous voulez que le lecteur fasse, comme « Réservez » ou « Appelez aujourd'hui »."], ["Légende", "le texte qui accompagne une photo ou une vidéo sur les réseaux sociaux."]],
          slides: [
            { title: "Varier les publications", bullets: ["Un conseil et un coup d'œil en coulisses", "Une histoire de client (avec son accord)", "Une offre et une question"] },
            { title: "Une demande efficace à l'IA", bullets: ["Inclure votre profil et votre message", "Demander cinq types, moins de 60 mots", "Demander un appel à l'action"] },
            { title: "Toujours corriger", bullets: ["Vérifier faits, prix et dates", "Supprimer ce que vous ne pouvez pas prouver", "Faire que le texte vous ressemble"] }
          ],
          tryIt: "Demandez à un assistant d'IA de rédiger cinq publications pour votre entreprise avec le modèle de demande ci-dessus. Corrigez chacune pour les faits et le ton, et notez ce que vous avez changé.",
          youCanNow: "rédiger des publications avec l'IA et les corriger pour qu'elles soient exactes, honnêtes et à votre image.",
          quickCheck: [
            { objective: "O2", q: "Quelle publication est une publication « coulisses » ?", options: ["Une photo de votre équipe qui s'installe pour un chantier", "Un bon de réduction de 20 %", "Une question qui demande aux abonnés leur couleur préférée", "L'avis d'un client"], answer: 0, why: "Les publications coulisses montrent comment votre travail se fait." },
            { objective: "O2", q: "Une publication rédigée par l'IA indique un prix que vous avez changé le mois dernier. Que faites-vous ?", options: ["La publier : les clients demanderont", "Supprimer toute la publication", "Corriger le prix avant de publier", "Ajouter « les prix peuvent varier » et la publier"], answer: 2, why: "Vérifiez et corrigez toujours chaque fait, prix et date avant de publier." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Créer des visuels avec Canva et l'IA",
          minutes: 5,
          goal: "Créer un visuel net et fidèle à votre marque pour chaque publication avec un outil de design gratuit.",
          text: [
            "Canva a une offre gratuite avec des modèles aux bonnes dimensions pour chaque réseau social. Cherchez le type de publication voulu, comme « Publication Instagram », choisissez un modèle et remplacez les textes et les images.",
            "Gardez une identité simple : les mêmes deux ou trois couleurs, une ou deux polices, et votre logo ou le nom de l'entreprise sur chaque visuel. Mettez peu de mots sur l'image ; la légende donne les détails.",
            "Utilisez vos propres photos quand c'est possible ; de vraies images de votre travail créent la confiance. Si vous utilisez des images créées par l'IA, ne leur faites pas représenter de vrais clients ou des résultats que vous n'avez pas obtenus, et n'utilisez que des images que vous avez le droit d'utiliser."
          ],
          steps: ["Ouvrez Canva et cherchez le format de modèle voulu.", "Choisissez un modèle et mettez-y les couleurs de votre marque.", "Remplacez le texte par un titre court.", "Ajoutez votre propre photo ou une image sous licence.", "Téléchargez-le et enregistrez-le sous le nom de la publication."],
          words: [["Modèle", "un design tout prêt que vous adaptez à vos besoins."], ["Marque", "l'apparence et le style qui rendent votre entreprise reconnaissable."], ["Licence", "l'autorisation d'utiliser une image ou une autre œuvre."]],
          slides: [
            { title: "Les bases de Canva", bullets: ["Offre gratuite avec modèles aux formats des réseaux", "Choisir un modèle, changer textes et images"] },
            { title: "Une identité simple", bullets: ["Les mêmes deux ou trois couleurs", "Une ou deux polices", "Votre nom ou logo sur chaque visuel"] },
            { title: "Des images honnêtes", bullets: ["Vos propres photos créent la confiance", "Pas de faux clients ni de faux résultats", "Seulement des images que vous avez le droit d'utiliser"] }
          ],
          sources: [{ name: "Canva", url: "https://www.canva.com/" }],
          tryIt: "Créez un visuel Canva pour chacune de vos cinq publications avec les mêmes couleurs et polices. Utilisez au moins une vraie photo de votre travail ou produit.",
          youCanNow: "créer des visuels cohérents et honnêtes pour les réseaux sociaux avec un outil de design gratuit.",
          quickCheck: [
            { objective: "O3", q: "Où doivent aller la plupart des détails d'une publication ?", options: ["Entassés sur le visuel", "En tout petit en bas de l'image", "Dans un deuxième visuel", "Dans la légende, avec peu de mots sur l'image"], answer: 3, why: "Gardez peu de mots sur l'image ; c'est la légende qui porte les détails." },
            { objective: "O3", q: "Vous voulez la photo d'un client satisfait, mais vous n'en avez pas. Quel est le choix honnête ?", options: ["Utiliser une image d'IA faite pour ressembler à un vrai client", "Utiliser une photo de votre propre travail ou une image sous licence en règle", "Copier une photo sur le site d'une autre entreprise", "Utiliser la photo d'un inconnu trouvée sur les réseaux sociaux"], answer: 1, why: "Utilisez vos propres photos ou des images que vous avez le droit d'utiliser, et ne faites pas semblant d'avoir des clients." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier et créer du contenu",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un profil de client cible ?", options: ["Votre relevé bancaire", "Une liste de concurrents", "La description du type précis de personne que vise votre marketing", "Un mot de passe de réseau social"], answer: 2, why: "Le marketing marche mieux quand il s'adresse à une personne précise." },
          { objective: "O1", q: "Quel est le message marketing le plus clair ?", options: ["« Lavage auto à domicile tenu par un ancien militaire, qui vient devant chez vous à Fayetteville. Réservez en deux minutes. »", "« On fait des trucs. »", "« Le meilleur de tous !!! »", "« Appelez-nous, peut-être. »"], answer: 0, why: "Il dit quoi, pour qui et pourquoi, avec une étape suivante." },
          { objective: "O2", q: "L'IA écrit « Élu meilleur laveur auto de la région » mais ce n'est jamais arrivé. Que faites-vous ?", options: ["Le publier quand même", "L'écrire en plus gros", "Ajouter la photo d'un faux prix", "Supprimer l'affirmation"], answer: 3, why: "Ne publiez jamais une affirmation que vous ne pouvez pas prouver." },
          { objective: "O2", q: "Qu'est-ce qu'un appel à l'action ?", options: ["Une sonnerie de téléphone", "L'étape que vous voulez que le lecteur fasse, comme « Réservez »", "Un avis juridique", "Un type de police"], answer: 1, why: "Il dit au lecteur quoi faire ensuite." },
          { objective: "O3", q: "Qu'est-ce qui crée le plus de confiance sur un visuel ?", options: ["Des images IA de faux clients heureux", "De vraies photos de votre propre travail", "Des photos copiées chez un concurrent", "Aucune image"], answer: 1, why: "De vraies images d'un vrai travail sont honnêtes et convaincantes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : E-mail, règles d'honnêteté et résultats",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rédiger un e-mail marketing conforme à la loi",
          minutes: 6,
          goal: "Rédiger avec l'IA un e-mail marketing qui respecte les principales exigences américaines du CAN-SPAM.",
          text: [
            "L'e-mail touche des personnes qui ont déjà choisi d'avoir de vos nouvelles, c'est pourquoi il vend souvent mieux que les réseaux sociaux. N'écrivez qu'aux personnes qui vous ont donné leur adresse et ont accepté de recevoir vos messages.",
            "Aux États-Unis, la loi CAN-SPAM fixe des règles pour les e-mails commerciaux. Selon la Federal Trade Commission (FTC, l'agence fédérale de protection des consommateurs), vous ne devez pas utiliser d'informations d'expéditeur ou d'objets faux ou trompeurs, vous devez indiquer que le message est une publicité, inclure votre adresse postale physique valide, offrir un moyen clair de se désabonner, et respecter les désabonnements sous 10 jours ouvrables. Vous restez responsable même si quelqu'un d'autre envoie l'e-mail pour vous.",
            "Demandez un brouillon à l'IA : « Écris un court e-mail marketing pour [entreprise] qui propose [offre] aux anciens clients. Objet honnête, ton aimable, un seul appel à l'action. » Ajoutez ensuite votre adresse et le lien de désabonnement, et vérifiez les faits. Hors des États-Unis, vérifiez les règles de votre pays sur l'e-mail et la vie privée."
          ],
          steps: ["Demandez à l'IA un court e-mail avec un objet honnête et un seul appel à l'action.", "Vérifiez chaque fait, prix et date.", "Indiquez clairement qu'il s'agit d'une publicité ou d'une offre.", "Ajoutez votre adresse postale physique valide.", "Ajoutez une option claire de désabonnement et respectez les demandes sous 10 jours ouvrables."],
          words: [["Loi CAN-SPAM", "la loi américaine qui fixe les règles des e-mails commerciaux."], ["Se désabonner", "un moyen pour les gens d'arrêter de recevoir vos e-mails."], ["Objet", "le court titre que les gens voient avant d'ouvrir un e-mail."]],
          slides: [
            { title: "Écrire aux bonnes personnes", bullets: ["Seulement celles qui ont accepté vos messages"] },
            { title: "Les bases du CAN-SPAM (FTC)", bullets: ["Expéditeur et objet honnêtes", "Indiquer que c'est une publicité", "Inclure votre adresse postale physique"] },
            { title: "Règles de désabonnement", bullets: ["Un moyen clair de se désabonner", "Le respecter sous 10 jours ouvrables", "Vous êtes responsable même si un prestataire envoie"] }
          ],
          sources: [{ name: "FTC : guide de conformité CAN-SPAM pour les entreprises", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Utilisez l'IA pour rédiger un e-mail marketing pour votre entreprise. Corrigez-le, puis vérifiez-le avec la liste CAN-SPAM : objet honnête, indiqué comme publicité, adresse physique, option de désabonnement.",
          youCanNow: "rédiger avec l'aide de l'IA un e-mail marketing qui respecte les principales règles du CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Qui doit faire partie de votre liste d'envoi d'e-mails marketing ?", options: ["Toute personne dont vous trouvez l'adresse e-mail", "Des adresses e-mail achetées en ligne", "Les personnes qui vous ont donné leur adresse et ont accepté de recevoir vos messages", "Toutes les entreprises de votre ville"], answer: 2, why: "N'envoyez des e-mails qu'aux personnes qui vous ont donné leur adresse et ont accepté de recevoir vos messages." },
            { objective: "O4", q: "Votre brouillon d'IA a une super offre mais pas d'adresse ni de lien de désabonnement. Que faites-vous avant l'envoi ?", options: ["Ajouter votre adresse postale valide et une option de désabonnement claire", "L'envoyer : ces éléments sont facultatifs", "Ajouter seulement votre numéro de téléphone", "L'envoyer plutôt depuis le compte d'un ami"], answer: 0, why: "Le CAN-SPAM exige une adresse postale valide et un moyen clair de se désabonner." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Un marketing honnête : mentions, avis et IA",
          minutes: 5,
          goal: "Repérer quand une publicité doit être signalée et garder les avis et le contenu IA honnêtes.",
          text: [
            "Les Endorsement Guides de la FTC (ses règles sur les recommandations de produits) disent que si une personne qui fait la promotion d'un produit a un lien avec la marque, par exemple si elle est payée ou reçoit un produit gratuit, ce lien doit être signalé clairement. La FTC propose des mots simples comme « Ad: » ou « #ad » (publicité) au début, ou « Publication payée par [marque] ».",
            "Les faux avis sont trompeurs. N'écrivez jamais d'avis sur votre propre entreprise, n'en achetez pas de faux et n'en faites pas générer par l'IA. Demandez plutôt à de vrais clients des avis honnêtes.",
            "Soyez prudent avec le contenu fait par l'IA : ne l'utilisez pas pour imiter une vraie personne, inventer des témoignages ou affirmer des résultats que vous ne pouvez pas prouver. Les règles changent ; consultez les pages de conseils aux entreprises de la FTC pour les détails actuels."
          ],
          words: [["Recommandation", "un message où quelqu'un dit qu'il aime ou utilise un produit."], ["Mention", "une déclaration claire d'un lien, comme « #ad » ou « Publication payée »."], ["Témoignage", "ce qu'un client dit de son expérience."]],
          slides: [
            { title: "Signaler les liens", bullets: ["Payé ou produit offert ? Dites-le", "« Ad: » ou « #ad » au début", "« Publication payée par [marque] »"] },
            { title: "Les avis doivent être réels", bullets: ["Pas de faux avis ni d'avis écrits par l'IA", "Demander à de vrais clients un avis honnête"] },
            { title: "Règles pratiques pour le contenu IA", bullets: ["Ne pas imiter de vraies personnes", "Pas de témoignages ni de résultats inventés", "Consulter la FTC pour les mises à jour"] }
          ],
          sources: [{ name: "FTC : Endorsement Guides, questions fréquentes", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Relisez vos cinq publications et votre e-mail. Marquez celles qui demanderaient une mention (par exemple, un partenaire vous a payé ou un ami en fait la promotion contre un produit gratuit), et retirez toute affirmation ou tout avis qui n'est pas réel.",
          youCanNow: "repérer quand un message marketing doit être signalé et garder les avis et le contenu IA honnêtes.",
          quickCheck: [
            { objective: "O5", q: "Quand une personne qui fait la promotion de votre produit doit-elle le signaler ?", options: ["Seulement si elle a plus de 10 000 abonnés", "Quand elle a un lien avec votre marque, par exemple si elle est payée ou reçoit le produit gratuitement", "Jamais, si l'avis est positif", "Seulement par e-mail"], answer: 1, why: "La FTC dit qu'un lien comme un paiement ou un produit gratuit doit être signalé clairement." },
            { objective: "O5", q: "Votre boutique a peu d'avis. Un ami propose de faire écrire par l'IA vingt avis cinq étoiles. Que faites-vous ?", options: ["Accepter, puisque c'est l'IA qui les a écrits, pas vous", "En publier seulement dix", "Payer un service pour les publier à votre place", "Refuser et demander à de vrais clients des avis honnêtes"], answer: 3, why: "Les faux avis sont trompeurs ; demandez plutôt à de vrais clients." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer ce qui marche et s'améliorer",
          minutes: 5,
          goal: "Choisir un chiffre à suivre pour chaque publication et utiliser les résultats pour planifier la semaine suivante.",
          text: [
            "Chaque réseau social et chaque outil d'e-mail montre des chiffres de base. La portée, c'est le nombre de personnes qui l'ont vu. L'engagement, ce sont les « j'aime », commentaires, partages et enregistrements. Les clics montrent qui est allé sur votre lien. Les conversions sont le vrai but : réservations, appels, ventes ou inscriptions.",
            "Choisissez un chiffre principal par publication selon sa mission : une publication-conseil vise les enregistrements et les partages, une offre vise les clics et les réservations. Notez-les dans une feuille de suivi simple sur Google Sheets ou Excel.",
            "Après une semaine, regardez ce qui a le mieux marché et faites-en plus. Vous pouvez coller vos chiffres (sans noms de clients) dans un assistant d'IA et demander : « Quelles publications ont le mieux marché et que devrais-je essayer la semaine prochaine ? » C'est vous qui décidez."
          ],
          steps: ["Créez une feuille avec les colonnes : date, publication, type, chiffre visé, résultat.", "Choisissez un chiffre visé pour chaque publication.", "Après une semaine, remplissez les résultats à partir des statistiques de la plateforme.", "Demandez à l'IA de repérer des tendances, avec des chiffres seulement.", "Planifiez la semaine suivante : plus de ce qui a marché."],
          words: [["Portée", "le nombre de personnes qui ont vu votre publication."], ["Engagement", "« j'aime », commentaires, partages et enregistrements."], ["Conversion", "quand quelqu'un fait l'action que vous voulez, comme réserver ou acheter."]],
          slides: [
            { title: "Les chiffres à connaître", bullets: ["Portée : combien l'ont vu", "Engagement : « j'aime », commentaires, partages", "Clics et conversions"] },
            { title: "Un objectif par publication", bullets: ["Conseil : enregistrements et partages", "Offre : clics et réservations"] },
            { title: "Apprendre et ajuster", bullets: ["Suivre dans une feuille simple", "Demander à l'IA des tendances, chiffres seulement", "Faire plus de ce qui a marché"] }
          ],
          tryIt: "Tâche finale : créez une feuille de suivi pour vos cinq publications et votre e-mail, avec un chiffre visé pour chacun. Avec votre profil, vos publications, vos visuels et votre e-mail, cela complète votre kit marketing d'une semaine.",
          youCanNow: "planifier, créer, vérifier et mesurer une semaine de marketing numérique assisté par l'IA.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce que l'engagement ?", options: ["Les mentions J'aime, les commentaires, les partages et les enregistrements", "Le nombre de personnes qui ont vu la publication", "Le coût de la publication", "Le nombre d'abonnés au départ"], answer: 0, why: "L'engagement compte la façon dont les gens réagissent à une publication ; la portée, c'est le nombre de personnes qui l'ont vue." },
            { objective: "O6", q: "Cette semaine, vos publications de conseils ont été les plus enregistrées, mais les offres ont eu peu de clics. Quelle est une suite raisonnable ?", options: ["Arrêter de publier pendant un mois", "Supprimer les publications de conseils", "Prévoir plus de publications de conseils et essayer une nouvelle offre la semaine prochaine", "Publier la même offre cinq fois"], answer: 2, why: "Faites plus de ce qui a marché et ajustez ce qui n'a pas marché." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : E-mail, règles d'honnêteté et résultats",
        questions: [
          { objective: "O4", q: "Selon le CAN-SPAM, que doit contenir un e-mail marketing aux États-Unis ?", options: ["Le numéro de sécurité sociale du client", "Un faux objet urgent", "Aucun nom d'expéditeur", "Une adresse postale physique valide et un moyen de se désabonner"], answer: 3, why: "La FTC cite l'adresse physique et le désabonnement parmi les exigences." },
          { objective: "O4", q: "Selon la FTC, en combien de temps faut-il respecter une demande de désabonnement sous le CAN-SPAM ?", options: ["Sous 10 jours ouvrables", "Sous un an", "Jamais", "Seulement si la personne vous appelle"], answer: 0, why: "Le guide de la FTC dit que les désabonnements doivent être respectés sous 10 jours ouvrables." },
          { objective: "O5", q: "Un ami a reçu un produit gratuit de votre part et en parle en ligne. Que doit contenir sa publication ?", options: ["Rien", "Un faux avis cinq étoiles", "Une mention claire comme « #ad » ou « Offert »", "Vos coordonnées bancaires"], answer: 2, why: "Les liens comme les produits gratuits doivent être signalés." },
          { objective: "O5", q: "Lequel est un marketing honnête ?", options: ["Faire écrire des avis par l'IA", "Payer pour de faux avis", "Noter sa propre entreprise sous de faux noms", "Demander à de vrais clients des avis honnêtes"], answer: 3, why: "Seuls les vrais avis de vrais clients sont honnêtes." },
          { objective: "O6", q: "Qu'est-ce qu'une conversion ?", options: ["Changer la taille d'une photo", "Un type de police", "Quand quelqu'un fait l'action que vous voulez, comme réserver", "Désactiver les commentaires"], answer: 2, why: "Les conversions sont le vrai but de l'entreprise." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Marketing numérique avec l'IA",
    questions: [
      { objective: "O1", q: "Le marketing numérique, c'est :", options: ["Seulement imprimer des prospectus", "Toucher les clients en ligne", "Vendre au porte-à-porte", "Tenir une caisse"], answer: 1, why: "Il utilise les réseaux sociaux, l'e-mail, les sites web et les moteurs de recherche." },
      { objective: "O1", q: "Pourquoi écrire un profil de client cible ?", options: ["Pour que votre marketing parle à une personne précise", "Pour passer le temps", "Parce que l'IA l'exige", "Pour partager des données privées"], answer: 0, why: "Un marketing précis marche mieux qu'un marketing général." },
      { objective: "O1", q: "Un message clair dit :", options: ["Seulement votre numéro de téléphone", "L'histoire de votre vie", "Ce que vous proposez, pour qui, et pourquoi vous choisir", "Rien de précis"], answer: 2, why: "Ces trois parties rendent un message clair." },
      { objective: "O1", q: "L'IA propose trois types de clients. Vous devez :", options: ["Choisir celui qui correspond aux vrais clients et le corriger", "Utiliser les trois sans les lire", "Ignorer ce que vous savez", "Les publier comme publicités"], answer: 0, why: "L'IA propose des idées ; vous décidez avec ce que vous savez." },
      { objective: "O2", q: "Quel est un bon mélange pour une semaine de publications ?", options: ["Cinq offres identiques", "Seulement des mèmes", "Seulement votre logo", "Un conseil, une coulisse, une histoire de client, une offre et une question"], answer: 3, why: "La variété garde l'intérêt des gens." },
      { objective: "O2", q: "« Réservez maintenant » à la fin d'une publication est :", options: ["Une mention", "Un appel à l'action", "Un modèle", "Une conversion"], answer: 1, why: "Il dit au lecteur l'étape suivante." },
      { objective: "O2", q: "Avant de publier un texte rédigé par l'IA, vérifiez :", options: ["Seulement les émojis", "Les faits, prix, dates et affirmations", "Rien", "Votre mot de passe"], answer: 1, why: "L'IA peut se tromper sur les faits ou exagérer." },
      { objective: "O3", q: "Dans Canva, un modèle est :", options: ["Un document juridique", "Une publicité payante", "Une liste de clients", "Un design tout prêt que vous adaptez"], answer: 3, why: "Les modèles font gagner du temps et ont le bon format pour chaque site." },
      { objective: "O3", q: "Une identité simple utilise :", options: ["Les mêmes quelques couleurs, polices et votre nom sur chaque visuel", "De nouvelles couleurs chaque jour", "Aucun nom", "Des logos copiés"], answer: 0, why: "La cohérence vous rend reconnaissable." },
      { objective: "O3", q: "Quelle image n'est PAS acceptable ?", options: ["Votre propre photo de votre travail", "Une image sous licence", "Une photo copiée sur le site d'une autre entreprise", "Un élément de modèle Canva que vous avez le droit d'utiliser"], answer: 2, why: "N'utilisez que des images que vous avez le droit d'utiliser." },
      { objective: "O4", q: "Qui doit recevoir vos e-mails marketing ?", options: ["Toutes les adresses que vous trouvez", "Des listes d'adresses achetées", "Des inconnus au hasard", "Les personnes qui ont accepté vos messages"], answer: 3, why: "Écrivez aux personnes qui ont choisi d'avoir de vos nouvelles." },
      { objective: "O4", q: "Quelle agence américaine publie le guide du CAN-SPAM pour les entreprises ?", options: ["Le ministère des Transports", "La NASA", "La Federal Trade Commission (FTC)", "Seulement la Poste"], answer: 2, why: "La FTC publie le guide de conformité CAN-SPAM." },
      { objective: "O4", q: "Un e-mail de promotion a pour objet « Votre compte est suspendu ». C'est :", options: ["Du bon marketing", "Trompeur et contraire au CAN-SPAM", "Obligatoire", "Une mention"], answer: 1, why: "L'objet doit refléter le contenu du message." },
      { objective: "O4", q: "Si un prestataire envoie vos e-mails marketing, qui doit respecter le CAN-SPAM ?", options: ["Vous, toujours", "Seulement le prestataire", "Personne", "Le client"], answer: 0, why: "La FTC dit que vous restez responsable." },
      { objective: "O5", q: "« #ad » au début d'une publication est un exemple :", options: ["D'appel à l'action", "De modèle", "De mention", "De portée"], answer: 2, why: "Il indique aux lecteurs qu'il y a un lien payé." },
      { objective: "O5", q: "Utiliser l'IA pour écrire des avis cinq étoiles sur votre boutique, c'est :", options: ["Trompeur et interdit", "Du marketing malin", "Obligatoire", "Acceptable s'ils ont l'air vrais"], answer: 0, why: "Les faux avis trompent les clients." },
      { objective: "O5", q: "Où vérifier les règles publicitaires actuelles aux États-Unis ?", options: ["Un fil de commentaires au hasard", "Seulement un chat d'IA", "Un concurrent", "Les pages de conseils aux entreprises de la FTC"], answer: 3, why: "Les règles changent ; la FTC est la source officielle." },
      { objective: "O6", q: "La portée mesure :", options: ["Combien ont acheté", "Combien de personnes ont vu votre publication", "Votre bénéfice", "L'âge de vos abonnés"], answer: 1, why: "La portée, c'est le nombre de personnes qui l'ont vue." },
      { objective: "O6", q: "Le chiffre principal d'une publication-offre est en général :", options: ["Seulement les enregistrements", "Les clics ou les réservations", "La taille de la police", "Le nombre de hashtags"], answer: 1, why: "Les offres visent à faire agir les gens." },
      { objective: "O6", q: "Quand vous demandez à l'IA d'analyser vos résultats, vous partagez :", options: ["Les noms et numéros de téléphone des clients", "Vos mots de passe", "Des numéros de carte", "Seulement des chiffres, sans noms de clients"], answer: 3, why: "Gardez les informations privées hors des outils d'IA." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      2,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Profil du client",
        objective: "O1",
        notYet: "Le profil manque ou décrit « tout le monde ».",
        meets: "Un paragraphe sur qui est le client, ses besoins, ses inquiétudes et où il est en ligne.",
        exceeds: "Chaque publication et l'e-mail s'adressent clairement à ce client précis."
      },
      {
        name: "Cinq publications",
        objective: "O2",
        notYet: "Moins de cinq publications, ou une publication contient un fait non vérifié ou une affirmation que vous ne pouvez pas prouver.",
        meets: "Cinq publications de types différents, chacune avec un appel à l'action, faits vérifiés.",
        exceeds: "Les publications ressemblent au propriétaire, pas à un brouillon d'IA générique."
      },
      {
        name: "Visuels",
        objective: "O3",
        notYet: "Les visuels manquent, sont surchargés de mots ou utilisent des images que vous n'avez pas le droit d'utiliser.",
        meets: "Un visuel net pour chaque publication, avec les mêmes couleurs et polices de la marque.",
        exceeds: "Utilise de vraies photos du travail de l'entreprise."
      },
      {
        name: "E-mail marketing",
        objective: "O4",
        notYet: "L'objet est trompeur, ou l'adresse ou l'option de désabonnement manque.",
        meets: "Objet honnête, offre clairement présentée comme telle, adresse postale et option de désabonnement.",
        exceeds: "Dit aussi comment les désabonnements seront traités dans les 10 jours ouvrables."
      },
      {
        name: "Feuille de suivi",
        objective: "O6",
        notYet: "Pas de feuille de suivi, ou pas de chiffre objectif par publication.",
        meets: "Une feuille qui donne un chiffre objectif pour chaque publication et où trouver le résultat.",
        exceeds: "Les résultats sont remplis et le plan de la semaine suivante s'appuie dessus."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Entreprises qui continuent à publier chaque semaine pendant au moins quatre semaines après le cours (questionnaire de suivi)",
      "Propriétaires qui disent avoir plus de réservations, d'appels ou de ventes grâce au marketing en ligne dans les 60 jours",
      "Entreprises qui ajoutent un pied de page conforme au CAN-SPAM à chaque e-mail marketing"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini) et l'offre gratuite de Canva",
      "Google Sheets ou Excel pour la feuille de suivi",
      "Quelques vraies photos du travail de l'entreprise, si possible",
      "Environ 60 minutes pour les leçons et les contrôles, plus une semaine pour publier et suivre"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; montrez une consigne et un modèle Canva sur un écran partagé.",
      "Faites travailler les apprenants sur leur propre entreprise, ou sur une entreprise fictive, pour que le kit soit prêt à l'emploi.",
      "Vérifiez dans chaque e-mail l'objet honnête, l'adresse et l'option de désabonnement avant tout envoi.",
      "Rappelez aux apprenants de ne jamais coller de noms ou de coordonnées de clients dans un outil d'IA.",
      "Notez le kit final avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
