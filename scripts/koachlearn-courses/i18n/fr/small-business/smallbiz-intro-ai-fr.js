"use strict";

// Koach Learn course (French translation of small-business/smallbiz-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-intro-ai-fr",
  lang: "fr",
  translationOf: "smallbiz-intro-ai",
  category: "Small Business",
  name: "Découvrir l'IA pour les petites entreprises",
  skills: "Expliquer ce que l'IA peut faire pour une entreprise, Repérer les tâches qui font gagner du temps, Écrire un prompt pour son entreprise, Vérifier et corriger les brouillons de l'IA, Protéger les informations des clients et de l'entreprise",
  outcome: "utiliser un assistant d'IA gratuit pour terminer une vraie tâche de votre entreprise, comme un avis aux clients, une description de produit ou une liste de tâches de la semaine : écrire un prompt clair avec les détails de votre entreprise, améliorer le brouillon, vérifier chaque fait et ne pas y mettre d'informations privées.",
  about: [
    "Ce cours s'adresse aux patrons de petites entreprises qui ont entendu parler de l'IA mais l'ont peu utilisée : commerçants, restaurateurs et propriétaires de food trucks, coiffeurs et barbiers, entreprises de ménage, artisans et entreprises à domicile. Beaucoup de nos élèves dirigent leur première entreprise, sont issus de minorités et font tout eux-mêmes.",
    "Vous apprendrez ce qu'est un assistant d'IA, quelles tâches de votre entreprise il peut accélérer, comment lui demander de l'aide avec les détails de votre entreprise, comment vérifier son travail et comment protéger les informations de vos clients.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\" avec votre propre entreprise. Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Choisissez une vraie tâche de votre entreprise cette semaine (une affiche sur de nouveaux horaires, une description de produit, une réponse à un client ou une liste de tâches). Utilisez un assistant d'IA gratuit pour la faire : écrivez un prompt avec les détails de votre entreprise, demandez au moins un changement, vérifiez vous-même chaque fait (prix, horaires, adresse), retirez toute information privée, et utilisez-la dans votre entreprise.",
  chapters: [
    {
      name: "Chapitre 1 : Ce que l'IA peut faire pour votre entreprise",
      lessons: [
        {
          title: "Ce qu'est un assistant d'IA, côté entreprise",
          minutes: 4,
          goal: "Expliquer ce qu'un assistant d'IA peut faire et ne peut pas faire pour une petite entreprise.",
          text: [
            "Un assistant d'IA est un programme informatique auquel vous écrivez ou parlez avec des mots de tous les jours. Vous demandez quelque chose, et il l'écrit pour vous en quelques secondes. Des assistants gratuits connus sont ChatGPT, Microsoft Copilot et Google Gemini.",
            "Voyez-le comme un assistant rapide pour écrire et réfléchir. Il peut rédiger un prospectus, la description d'un plat, une réponse à un avis, la mise en page d'une liste de prix, une publication sur les réseaux sociaux ou une liste de contrôle pour l'ouverture de la boutique.",
            "Ce n'est pas votre comptable, votre avocat ni votre associé. Il ne connaît ni vos prix, ni vos clients, ni votre ville si vous ne les lui dites pas, et il peut se tromper tout en ayant l'air sûr de lui. Vous restez le patron : c'est vous qui décidez ce que vous utilisez."
          ],
          words: [["IA", "intelligence artificielle : des programmes informatiques qui font des tâches qui demandent d'habitude une personne, comme écrire."], ["Assistant d'IA", "un programme d'IA avec qui l'on discute en écrivant ou en parlant, comme ChatGPT, Copilot ou Gemini."], ["Brouillon", "une première version que vous allez vérifier et modifier."]],
          slides: [
            { title: "Un assistant d'IA, c'est...", bullets: ["Un programme avec qui on discute avec des mots simples", "Un assistant rapide pour écrire et réfléchir", "Versions gratuites : ChatGPT, Copilot, Gemini"] },
            { title: "Dans une petite entreprise, il peut rédiger", bullets: ["Prospectus, affiches et publications", "Descriptions de plats et de produits", "Réponses aux clients et aux avis", "Listes de contrôle et plannings"] },
            { title: "Ce n'est PAS", bullets: ["Votre comptable, votre avocat ou votre associé", "Au courant de vos prix si vous ne les dites pas", "Toujours juste : c'est vous le patron"] }
          ],
          tryIt: "Notez trois tâches d'écriture que vous avez faites pour votre entreprise le mois dernier, par exemple une affiche, un SMS à un client ou une liste de prix. Entourez celle qui vous a pris le plus de temps.",
          youCanNow: "dire ce qu'est un assistant d'IA et citer des tâches d'écriture de votre entreprise pour lesquelles il pourrait aider."
        },
        {
          title: "Trouver les tâches qui valent la peine d'être confiées à l'IA",
          minutes: 5,
          goal: "Faire la liste des tâches de votre entreprise que l'IA peut accélérer, et de celles qu'elle ne doit pas toucher.",
          text: [
            "Les bonnes tâches pour l'IA sont répétées, écrites et à faible risque : répondre aux mêmes questions, décrire des produits, écrire des publications, faire des plannings et des listes de contrôle, résumer de longs e-mails ou transformer des notes en désordre en une liste propre.",
            "Gardez l'IA loin des décisions finales sur l'argent, les impôts, les contrats, l'embauche et le licenciement, les règles de santé et de sécurité, et tout ce qui est juridique. Elle peut vous aider à préparer des questions pour votre comptable, mais ce n'est pas le comptable.",
            "Un test simple : si une erreur est facile à voir et à corriger, l'IA peut aider. Si une erreur peut vous coûter de l'argent, la confiance d'un client ou une amende, une personne vérifie, et vous consultez la source officielle."
          ],
          steps: ["Listez les tâches que vous faites chaque semaine.", "Marquez chacune : répétée ? écrite ? à faible risque ?", "Mettez les tâches avec trois oui sur une liste \"À essayer avec l'IA\".", "Mettez les décisions sur l'argent, le juridique et la sécurité sur une liste \"Personnes et sources officielles\"."],
          words: [["Tâche à faible risque", "une tâche où une erreur est facile à voir et à corriger."], ["Tâche répétée", "quelque chose que vous faites encore et encore, comme répondre à la même question."]],
          slides: [
            { title: "Les bonnes tâches pour l'IA", bullets: ["Répétées : les mêmes questions chaque jour", "Écrites : publications, descriptions, réponses", "À faible risque : erreurs faciles à repérer"] },
            { title: "À garder pour les personnes et les sources officielles", bullets: ["Argent, impôts et contrats", "Embauche et licenciement", "Santé, sécurité et règles juridiques"] },
            { title: "Le test rapide", bullets: ["Facile à repérer et à corriger ? L'IA peut aider", "Peut coûter argent, confiance ou amende ? Une personne vérifie"] }
          ],
          tryIt: "Faites deux listes pour votre entreprise : \"À essayer avec l'IA\" (au moins cinq tâches) et \"Personnes et sources officielles\" (au moins trois).",
          youCanNow: "trier les tâches de votre entreprise entre celles où l'IA peut aider et celles que des personnes doivent gérer."
        },
        {
          title: "Écrire un prompt clair pour votre entreprise",
          minutes: 5,
          goal: "Écrire un prompt qui contient les détails de votre entreprise pour que la réponse lui corresponde.",
          text: [
            "Ce que vous écrivez à un assistant d'IA s'appelle un prompt (une consigne). Plus il en sait sur votre entreprise, plus la réponse lui correspond. Un bon prompt d'entreprise a quatre parties : qui vous êtes, ce dont vous avez besoin, à qui c'est destiné, et la forme voulue.",
            "Exemple : \"Je tiens un petit restaurant antillais à Fresno. Écris une courte affiche pour la porte d'entrée qui dit que nous fermons à 20 h le dimanche à partir du 5 mai. Ton amical, moins de 30 mots.\"",
            "Un prompt faible comme \"écris une affiche\" oblige l'IA à deviner. Ajoutez vos vrais détails : votre type d'entreprise, votre ville, vos horaires, votre style. Laissez de côté les détails privés comme les numéros bancaires ou le téléphone d'un client."
          ],
          steps: ["Qui vous êtes : votre type d'entreprise et où.", "Ce dont vous avez besoin : l'élément exact.", "À qui c'est destiné : clients, employés, un fournisseur.", "La forme voulue : longueur, ton, liste ou paragraphe."],
          words: [["Prompt (consigne)", "ce que vous écrivez ou dites à un assistant d'IA pour lui demander quelque chose."], ["Ton", "la façon dont un texte sonne : amical, officiel, amusant."]],
          slides: [
            { title: "Quatre parties d'un prompt d'entreprise", bullets: ["1. Qui vous êtes", "2. Ce dont vous avez besoin", "3. À qui c'est destiné", "4. La forme voulue"] },
            { title: "Exemple", bullets: ["\"Je tiens un petit restaurant antillais à Fresno.", "Écris une affiche : fermeture à 20 h le dimanche dès le 5 mai.", "Ton amical, moins de 30 mots.\""] },
            { title: "Faible ou clair", bullets: ["Faible : \"écris une affiche\"", "Clair : votre entreprise, les détails, le style", "Jamais : numéros bancaires ou téléphone d'un client"] }
          ],
          tryIt: "Choisissez une tâche de votre liste \"À essayer avec l'IA\". Écrivez un prompt avec les quatre parties, envoyez-le à un assistant d'IA gratuit et lisez la réponse.",
          youCanNow: "écrire un prompt d'entreprise avec qui vous êtes, ce dont vous avez besoin, à qui c'est destiné et la forme voulue."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce que l'IA peut faire pour votre entreprise",
        questions: [
          { q: "Qu'est-ce qu'un assistant d'IA ?", options: ["Un nouvel employé", "Un programme avec qui on discute et qui rédige des brouillons", "Une banque", "Une caisse enregistreuse"], answer: 1, why: "C'est un programme informatique auquel on écrit ou on parle." },
          { q: "Quelle tâche est bonne à confier à un assistant d'IA ?", options: ["Décider de signer un bail", "Licencier un employé", "Faire seul votre déclaration d'impôts", "Rédiger une description de produit"], answer: 3, why: "Les descriptions de produits sont écrites, répétées et à faible risque." },
          { q: "Une erreur pourrait vous coûter une amende. Que faites-vous ?", options: ["Faire vérifier par une personne avec la source officielle", "Laisser l'IA décider", "L'ignorer", "Demander deux fois à l'IA"], answer: 0, why: "Les tâches à risque demandent une personne et une source officielle." },
          { q: "Quel est le prompt d'entreprise le plus clair ?", options: ["\"affiche\"", "\"aide mon entreprise\"", "\"Je tiens un salon de coiffure à Oakland. Écris une courte affiche : fermé lundi 4 juillet. Amical, moins de 25 mots.\"", "\"écris quelque chose\""], answer: 2, why: "Il dit qui vous êtes, ce dont vous avez besoin, à qui c'est destiné et la forme voulue." },
          { q: "Que devez-vous laisser hors d'un prompt ?", options: ["Votre type d'entreprise", "Votre ville", "Le numéro de téléphone d'un client", "Le ton voulu"], answer: 2, why: "Les détails privés des clients restent hors des outils d'IA." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA bien et sans danger",
      lessons: [
        {
          title: "Améliorer le brouillon",
          minutes: 4,
          goal: "Utiliser des demandes de suivi pour transformer un premier brouillon en un texte que vous utiliseriez vraiment.",
          text: [
            "La première réponse est un brouillon. Dans la même discussion, l'assistant se souvient de ce que vous avez demandé, donc vous pouvez lui dire quoi changer.",
            "Des demandes de suivi utiles pour une entreprise : \"Fais plus court.\" \"Rends-le plus chaleureux.\" \"Ajoute nos horaires.\" \"Donne-moi trois versions.\" \"Écris-le aussi en espagnol.\" \"Utilise des mots plus simples.\"",
            "Puis faites-le vôtre. Changez des mots pour qu'il vous ressemble, à vous et à votre boutique. Vos clients connaissent votre façon de parler ; la version finale doit la refléter aussi."
          ],
          steps: ["Lisez le brouillon à voix haute.", "Choisissez une chose à changer et demandez-la.", "Recommencez jusqu'à ce que ça convienne.", "Corrigez la dernière version avec vos propres mots."],
          words: [["Demande de suivi", "une deuxième demande qui s'appuie sur la réponse reçue."], ["Version", "l'une des façons d'écrire la même chose."]],
          slides: [
            { title: "La première réponse est un brouillon", bullets: ["La discussion se souvient de votre demande", "Demandez un changement à la fois"] },
            { title: "Demandes de suivi pour l'entreprise", bullets: ["\"Fais plus court.\" \"Plus chaleureux.\"", "\"Donne-moi trois versions.\"", "\"Écris-le aussi en espagnol.\""] },
            { title: "Faites-le vôtre", bullets: ["Lisez-le à voix haute", "Changez des mots pour qu'il vous ressemble", "Vos clients connaissent votre façon de parler"] }
          ],
          tryIt: "Reprenez la réponse de la leçon 3. Demandez deux changements, l'un après l'autre, puis corrigez la dernière version pour qu'elle vous ressemble.",
          youCanNow: "améliorer un brouillon de l'IA avec des demandes de suivi et le faire ressembler à votre entreprise."
        },
        {
          title: "Vérifier les faits avant que les clients les voient",
          minutes: 5,
          goal: "Vérifier chaque fait d'un brouillon de l'IA avant de le publier, de l'imprimer ou de l'envoyer.",
          text: [
            "L'IA peut inventer des choses : un mauvais prix, de mauvais horaires, une promotion que vous n'avez jamais prévue, ou une règle qui n'existe pas. On appelle cela une hallucination. Si cela finit sur votre affiche ou votre site, les clients vous demanderont de tenir parole.",
            "Avant d'utiliser quoi que ce soit, vérifiez : les prix, les dates et les horaires, votre adresse et votre téléphone, les promesses (\"livraison gratuite\", \"garanti\"), et toute règle sur les licences, les impôts ou l'hygiène. Comparez avec vos propres documents.",
            "Pour les règles et les lois, l'IA n'est pas la source. Consultez la page officielle du gouvernement (aux États-Unis, elle finit souvent par .gov) ou demandez à votre comptable, à votre mairie ou à un conseiller gratuit pour les petites entreprises comme SCORE ou un Small Business Development Center (centre d'aide aux petites entreprises)."
          ],
          steps: ["Soulignez chaque chiffre, date, nom et promesse.", "Vérifiez chacun dans vos propres documents.", "Vérifiez toute règle ou loi sur la page officielle en .gov.", "Supprimez toute promesse que vous n'aviez pas prévu de faire."],
          words: [["Hallucination", "quand l'IA écrit quelque chose qui semble vrai mais qui est inventé."], ["Source officielle", "le service public ou l'entreprise qui fixe vraiment la règle ou le prix."]],
          slides: [
            { title: "L'IA peut inventer des choses", bullets: ["Mauvais prix ou horaires", "Promotions ou promesses jamais prévues", "Règles qui n'existent pas"] },
            { title: "Vérifiez avant que les clients voient", bullets: ["Prix, dates, horaires", "Adresse et téléphone", "Promesses comme \"gratuit\" ou \"garanti\""] },
            { title: "Règles et lois", bullets: ["Consultez la page officielle en .gov", "Demandez à votre comptable ou à la mairie", "Aide gratuite : SCORE ou un SBDC"] }
          ],
          tryIt: "Demandez à un assistant d'IA d'écrire un court paragraphe \"Qui sommes-nous\" pour votre entreprise. Soulignez chaque fait et chaque promesse, vérifiez-les, et corrigez ou supprimez ce qui est faux.",
          youCanNow: "trouver et vérifier chaque fait et chaque promesse d'un brouillon de l'IA avant que les clients le voient."
        },
        {
          title: "Protéger les informations des clients et de l'entreprise",
          minutes: 5,
          goal: "Utiliser l'IA pour votre entreprise sans partager d'informations privées sur vos clients ou votre entreprise.",
          text: [
            "Ne collez pas d'informations privées dans un assistant d'IA : les noms de clients avec leur téléphone ou leur adresse, des numéros de carte ou de compte bancaire, des mots de passe, les numéros de sécurité sociale des employés, ou des informations de santé privées. Vous pouvez obtenir l'aide dont vous avez besoin sans eux. Écrivez \"[nom du client]\" à la place.",
            "Lisez les réglages de confidentialité de l'outil que vous utilisez. Certains outils permettent de désactiver l'enregistrement de vos discussions pour l'entraînement de l'IA. Les versions professionnelles de certains outils offrent plus de protection ; vérifiez la page officielle de l'entreprise avant de compter dessus.",
            "Les arnaqueurs utilisent aussi l'IA : fausses factures, faux e-mails de fournisseurs et faux appels. Si un message vous presse de payer ou de changer des coordonnées bancaires, arrêtez et rappelez le fournisseur avec un numéro que vous connaissez déjà."
          ],
          steps: ["Avant d'envoyer un prompt, relisez-le pour repérer les détails privés.", "Remplacez-les par des repères comme \"[nom du client]\".", "Vérifiez les réglages de confidentialité de l'outil.", "Rappelez avec un numéro connu avant de payer toute demande pressante."],
          words: [["Repère (espace réservé)", "un mot comme \"[nom du client]\" utilisé à la place de vrais détails privés."], ["Réglages de confidentialité", "les choix d'un outil sur ce qu'il enregistre et sur l'usage de vos données."]],
          slides: [
            { title: "Ne collez jamais dans l'IA", bullets: ["Téléphones et adresses des clients", "Numéros de carte, de banque et mots de passe", "Numéros d'identité ou santé des employés"] },
            { title: "Utilisez des repères", bullets: ["\"[nom du client]\" à la place du vrai nom", "Vous obtenez quand même l'aide voulue"] },
            { title: "Réglages et arnaques", bullets: ["Vérifiez les réglages de confidentialité de l'outil", "Fausses factures et faux fournisseurs sont courants", "Rappelez avec un numéro connu avant de payer"] }
          ],
          tryIt: "Tâche finale : choisissez une vraie tâche pour votre entreprise cette semaine. Utilisez un assistant d'IA gratuit pour la faire avec un prompt en quatre parties, demandez au moins un changement, vérifiez vous-même chaque fait, retirez toute information privée, et mettez-la en pratique.",
          youCanNow: "utiliser l'IA pour une vraie tâche d'entreprise tout en protégeant les informations des clients et de l'entreprise."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA bien et sans danger",
        questions: [
          { q: "L'affiche de l'IA est trop longue. Que demandez-vous ?", options: ["\"Fais plus court.\"", "\"Supprime mon compte.\"", "\"Ajoute mon numéro bancaire.\"", "Rien ; je l'imprime"], answer: 0, why: "Une demande de suivi demande le changement voulu." },
          { q: "Le brouillon de l'IA dit \"Livraison gratuite sur toutes les commandes\" mais vous ne l'avez jamais proposé. Que faites-vous ?", options: ["Le garder ; ça sonne bien", "Demander à l'IA si c'est vrai", "Le publier pour voir", "Supprimer la promesse avant d'utiliser le brouillon"], answer: 3, why: "Les clients peuvent vous demander de tenir les promesses de votre affiche ou de votre site." },
          { q: "Où vérifier une règle sur les licences d'entreprise ?", options: ["Dans la réponse de l'IA", "Sur la page officielle ou auprès du service public", "Dans une publication sur les réseaux sociaux", "Chez un concurrent"], answer: 1, why: "Les règles viennent de la source officielle." },
          { q: "Qu'écrivez-vous à la place du vrai nom et du téléphone d'un client ?", options: ["Un repère comme \"[nom du client]\"", "Les vrais détails", "Son numéro de carte", "Rien ; ne plus jamais utiliser l'IA"], answer: 0, why: "Les repères gardent les informations privées à l'écart." },
          { q: "Un e-mail \"de votre fournisseur\" vous dit de payer sur un nouveau compte bancaire aujourd'hui. Que faites-vous ?", options: ["Payer tout de suite", "Répondre avec votre mot de passe", "Rappeler le fournisseur avec un numéro que vous connaissez déjà", "Le transférer aux clients"], answer: 2, why: "Les changements de paiement pressants sont une arnaque courante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Découvrir l'IA pour les petites entreprises",
    questions: [
      { q: "Lequel est un assistant d'IA gratuit ?", options: ["Une caisse enregistreuse", "Microsoft Copilot", "Un lecteur de codes-barres", "Une imprimante de tickets"], answer: 1, why: "Copilot, ChatGPT et Gemini sont des assistants connus." },
      { q: "Un assistant d'IA connaît vos prix :", options: ["Toujours", "Grâce à votre ville", "Grâce à votre banque", "Seulement si vous les lui dites"], answer: 3, why: "Il ne connaît pas votre entreprise si vous ne lui en parlez pas." },
      { q: "Qui prend la décision finale sur le travail de l'IA pour votre entreprise ?", options: ["L'IA", "Vos clients", "La boutique d'applications", "Vous, le patron"], answer: 3, why: "Vous restez le patron et décidez de ce que vous utilisez." },
      { q: "Laquelle est une tâche répétée, écrite et à faible risque ?", options: ["Signer un bail", "Répondre chaque jour à la même question des clients", "Payer les cotisations sur les salaires", "Choisir un avocat"], answer: 1, why: "Les réponses écrites répétées sont de bonnes tâches pour l'IA." },
      { q: "Qu'est-ce qui va sur la liste \"Personnes et sources officielles\" ?", options: ["Les publications sur les réseaux sociaux", "Les descriptions de plats", "Les décisions fiscales", "Les listes de contrôle d'ouverture"], answer: 2, why: "Les décisions d'argent et d'impôts demandent des personnes et des sources officielles." },
      { q: "Le test rapide dit que l'IA peut aider quand une erreur est :", options: ["Facile à repérer et à corriger", "Coûteuse", "Juridique", "Cachée"], answer: 0, why: "Les tâches à faible risque peuvent être essayées avec l'IA." },
      { q: "Qu'est-ce qu'un prompt ?", options: ["Un reçu", "Des frais de retard", "Ce que vous écrivez pour demander quelque chose à l'IA", "Une livraison"], answer: 2, why: "Un prompt est votre demande." },
      { q: "Quelle partie indique à l'IA le style voulu ?", options: ["La forme voulue", "Qui vous êtes", "Votre banque", "Votre mot de passe"], answer: 0, why: "\"La forme voulue\" couvre la longueur et le ton." },
      { q: "Pourquoi ajouter votre type d'entreprise et votre ville dans un prompt ?", options: ["Pour la ralentir", "Pour que la réponse corresponde à votre entreprise", "La loi l'exige", "Pour que l'IA vous fasse payer"], answer: 1, why: "Les détails rendent la réponse adaptée." },
      { q: "La première réponse de l'IA doit être vue comme :", options: ["Définitive", "Une loi", "Un contrat", "Un brouillon"], answer: 3, why: "Vous l'améliorez et la vérifiez avant de l'utiliser." },
      { q: "Quelle demande de suivi aide une clientèle hispanophone ?", options: ["\"Écris-le aussi en espagnol.\"", "\"Ajoute mon mot de passe.\"", "\"Rends-le plus long.\"", "\"Supprime-le.\""], answer: 0, why: "L'IA peut rédiger dans d'autres langues ; faites relire par quelqu'un qui parle couramment." },
      { q: "Pourquoi corriger la dernière version avec vos propres mots ?", options: ["Ce n'est pas utile", "Pour cacher les erreurs", "Pour la rendre plus longue", "Pour qu'elle vous ressemble, à vous et à votre entreprise"], answer: 3, why: "Vos clients connaissent votre façon de parler." },
      { q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Un problème d'écran", "Une connexion internet lente", "Un fait inventé qui semble vrai", "Un type d'application"], answer: 2, why: "L'IA peut inventer des faits." },
      { q: "Que devez-vous vérifier avant de publier un brouillon de l'IA ?", options: ["Seulement l'orthographe", "Les prix, les horaires, l'adresse et les promesses", "Rien", "Seulement la police"], answer: 1, why: "De faux faits ou de fausses promesses nuisent à la confiance." },
      { q: "Parmi les conseillers gratuits pour les petites entreprises, il y a :", options: ["L'IA elle-même", "Les publicités qui s'ouvrent toutes seules", "Des forums au hasard", "SCORE et les Small Business Development Centers"], answer: 3, why: "SCORE et les SBDC donnent des conseils gratuits." },
      { q: "Que ne devez-vous JAMAIS coller dans un outil d'IA ?", options: ["\"Rends-le plus aimable\"", "Votre type d'entreprise", "Le numéro de carte d'un client", "Vos horaires d'ouverture"], answer: 2, why: "Les numéros de carte sont privés." },
      { q: "Un repère (espace réservé), c'est :", options: ["Un mot comme \"[nom du client]\"", "Un vrai numéro de téléphone", "Un mot de passe", "Un prix"], answer: 0, why: "Les repères remplacent les détails privés." },
      { q: "Avant de compter sur les promesses de confidentialité d'un outil, vous devez :", options: ["Deviner", "Vérifier ses réglages et la page officielle de l'entreprise", "Demander à un client", "Ignorer la confidentialité"], answer: 1, why: "Les réglages et les pages officielles disent ce que l'outil enregistre." },
      { q: "Quelqu'un au téléphone vous presse de payer une \"facture en retard\" avec des cartes cadeaux. C'est :", options: ["Normal en affaires", "Un signal d'alerte d'arnaque", "Une règle fiscale", "Une réduction"], answer: 1, why: "L'urgence et les cartes cadeaux sont des signes d'arnaque." },
      { q: "La meilleure façon de vérifier une demande de paiement pressante d'un fournisseur est de :", options: ["Appeler le fournisseur avec un numéro que vous connaissez déjà", "Répondre au même e-mail", "Payer la moitié", "Demander à l'IA"], answer: 0, why: "Un numéro connu vous met en contact avec le vrai fournisseur." }
    ]
  }
};
