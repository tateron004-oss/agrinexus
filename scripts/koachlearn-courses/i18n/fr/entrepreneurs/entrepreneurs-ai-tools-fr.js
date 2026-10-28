"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-tools.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-tools-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-tools",
  category: "Entrepreneurs",
  name: "Les outils d'IA que tout entrepreneur devrait connaître",
  skills: "Choisir le bon type d'outil d'IA, Utiliser un assistant conversationnel pour écrire, Créer des visuels avec Canva, Utiliser l'IA dans les documents et les tableurs, Construire une boîte à outils IA simple",
  outcome: "choisir et utiliser des outils d'IA gratuits pour les principales tâches de votre entreprise (écriture, design, documents et tableurs, réunions) et rassembler une boîte à outils d'une page qui dit quel outil vous utilisez pour quelle tâche.",
  about: [
    "Il existe des milliers d'outils d'IA, et de nouveaux apparaissent chaque semaine. Ce cours s'adresse aux chefs d'entreprise qui veulent une boîte à outils courte et pratique au lieu de courir après chaque nouvelle application.",
    "Vous apprendrez les principaux types d'outils d'IA, puis vous pratiquerez avec de vraies options gratuites très utilisées : les assistants conversationnels (ChatGPT, Microsoft Copilot, Google Gemini), le design (Canva), les documents et les tableurs (Google Docs et Sheets, Microsoft 365), et l'aide à la prise de notes et aux réunions.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche à faire sur votre propre entreprise. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin. Les noms, les fonctions et les prix des outils changent souvent, donc le cours vous dit comment vérifier ce qui est à jour."
  ],
  finalTask: "Créez une page « Ma boîte à outils IA » pour votre entreprise : listez quatre tâches (écriture, design, documents ou chiffres, et réunions ou notes), l'outil gratuit que vous utiliserez pour chacune, une chose que vous avez créée avec pendant ce cours, et une règle pour protéger les données des clients dans cet outil.",
  chapters: [
    {
      name: "Chapitre 1 : Les principaux types d'outils d'IA",
      lessons: [
        {
          title: "La carte des outils d'IA : quatre tâches, pas quatre cents applications",
          minutes: 4,
          goal: "Classer les outils d'IA selon la tâche qu'ils font pour votre entreprise.",
          text: [
            "La plupart des outils d'IA dont une petite entreprise a besoin se rangent dans quatre tâches. Écrire et réfléchir : les assistants conversationnels comme ChatGPT, Microsoft Copilot et Google Gemini. Le design : des outils comme Canva qui créent des visuels, des prospectus et des images pour les réseaux sociaux. Les documents et les chiffres : l'IA intégrée à Google Docs et Sheets ou à Microsoft Word et Excel. Les réunions et les notes : des outils qui enregistrent, transcrivent et résument.",
            "Beaucoup d'outils font maintenant plus d'une tâche. Un assistant conversationnel peut aussi créer une image ou lire un tableur que vous lui envoyez. C'est très bien, mais commencer avec un outil par tâche garde les choses simples.",
            "Avant d'ajouter un nouvel outil, demandez-vous : quelle tâche fait-il ? Ai-je déjà un outil pour cette tâche ? Y a-t-il une offre gratuite ? Que deviennent les données que j'y mets ?"
          ],
          words: [["Assistant conversationnel", "un outil d'IA avec qui vous discutez dans une fenêtre de conversation, comme ChatGPT, Copilot ou Gemini."], ["Transcrire", "transformer des paroles en texte écrit."]],
          slides: [
            { title: "Quatre tâches", bullets: ["Écrire et réfléchir : assistants conversationnels", "Design : Canva et similaires", "Documents et chiffres : Docs, Sheets, Word, Excel", "Réunions et notes : transcrire et résumer"] },
            { title: "Commencez simple", bullets: ["Un outil par tâche au début", "Beaucoup d'outils se recoupent, ce n'est pas grave"] },
            { title: "Avant d'ajouter un outil, demandez-vous", bullets: ["Quelle tâche fait-il ?", "En ai-je déjà un ?", "Offre gratuite ? Où vont mes données ?"] }
          ],
          tryIt: "Écrivez les quatre tâches sur une page. À côté de chacune, notez l'outil que vous utilisez déjà (même s'il n'utilise pas l'IA). Laissez vide là où vous n'en avez pas.",
          youCanNow: "classer les outils d'IA en quatre tâches d'entreprise et poser quatre questions avant d'en ajouter un nouveau."
        },
        {
          title: "Assistants conversationnels : en choisir un et bien l'utiliser",
          minutes: 5,
          goal: "Ouvrir un assistant conversationnel gratuit et l'utiliser pour une vraie tâche d'écriture professionnelle.",
          text: [
            "ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) et Google Gemini (gemini.google.com) ont tous une version gratuite. Ils écrivent, résument, trouvent des idées et expliquent. Choisissez celui qui correspond aux comptes que vous utilisez déjà : Copilot si votre entreprise fonctionne avec Microsoft, Gemini si elle fonctionne avec Google, ou n'importe lequel si vous n'êtes pas sûr.",
            "Utilisez le même prompt en trois parties pour chacun : la tâche, le contexte de votre entreprise et le format. Améliorez ensuite avec des demandes de suivi comme « plus court », « plus amical » ou « donne-moi trois options ».",
            "Essayez le même prompt dans deux assistants et comparez. Vous verrez vite lequel correspond à votre style. Les limites des offres gratuites changent ; consultez la page de tarifs de l'outil pour savoir ce qui est inclus aujourd'hui."
          ],
          steps: ["Ouvrez un assistant dans un navigateur web ou dans son application officielle.", "Écrivez un prompt en trois parties pour une vraie tâche d'entreprise.", "Demandez une amélioration.", "Collez le même prompt dans un deuxième assistant et comparez."],
          words: [["Offre gratuite", "une version d'un outil que vous pouvez utiliser sans payer, généralement avec des limites."]],
          slides: [
            { title: "Trois assistants conversationnels gratuits", bullets: ["ChatGPT : chatgpt.com", "Microsoft Copilot : copilot.microsoft.com", "Google Gemini : gemini.google.com"] },
            { title: "Lequel choisir ?", bullets: ["Comptes Microsoft : essayez Copilot", "Comptes Google : essayez Gemini", "Pas sûr : essayez-en deux et comparez"] },
            { title: "Bien l'utiliser", bullets: ["Tâche + contexte + format", "Demandez un changement à la fois", "Vérifiez les limites sur la page de tarifs de l'outil"] }
          ],
          tryIt: "Écrivez un prompt qui demande une description de 50 mots de votre entreprise pour un profil sur les réseaux sociaux. Lancez-le dans deux assistants. Gardez la meilleure et notez quel outil vous avez choisi.",
          youCanNow: "choisir un assistant conversationnel adapté à vos comptes et l'utiliser pour de vrais écrits professionnels."
        },
        {
          title: "Le design avec l'IA dans Canva",
          minutes: 5,
          goal: "Créer un visuel simple aux couleurs de votre entreprise avec Canva.",
          text: [
            "Canva (canva.com) est un outil de design avec une offre gratuite, des milliers de modèles et des fonctions d'IA qui peuvent proposer du texte, générer des images et redimensionner les créations. Pas besoin de formation en design pour faire un prospectus ou une publication propre.",
            "Partez d'un modèle, pas d'une page blanche. Cherchez ce dont vous avez besoin, comme « publication Instagram boulangerie » ou « prospectus service de ménage ». Changez les mots, mettez vos couleurs et votre logo, et restez simple : un message, une image, un appel à l'action.",
            "Si vous utilisez une image générée par l'IA, regardez de près pour repérer les erreurs comme des mains bizarres ou des mots mal écrits, et ne créez pas d'image qui copie le logo ou la marque de quelqu'un d'autre, ou une vraie personne, sans permission."
          ],
          steps: ["Ouvrez canva.com et connectez-vous ou créez un compte gratuit.", "Cherchez un modèle pour la création dont vous avez besoin.", "Changez le texte pour mettre votre message et votre appel à l'action.", "Ajoutez vos couleurs et votre logo.", "Vérifiez l'orthographe et les images, puis téléchargez."],
          words: [["Modèle", "une création toute prête que vous modifiez pour l'adapter à votre entreprise."], ["Couleurs de marque", "les deux ou trois couleurs que vous utilisez toujours pour que les clients vous reconnaissent."]],
          slides: [
            { title: "Canva pour l'entreprise", bullets: ["Offre gratuite avec des modèles", "L'IA propose du texte et crée des images", "Pas besoin de formation en design"] },
            { title: "Partez d'un modèle", bullets: ["Cherchez « prospectus service de ménage » ou similaire", "Changez les mots", "Ajoutez vos couleurs et votre logo"] },
            { title: "Restez simple", bullets: ["Un message", "Une image", "Un appel à l'action"] },
            { title: "Vérifiez les images d'IA", bullets: ["Repérez les mains bizarres ou les mots mal écrits", "Ne copiez pas d'autres marques ni de vraies personnes"] }
          ],
          tryIt: "Créez dans Canva une publication ou un prospectus pour votre entreprise à partir d'un modèle. Utilisez la description de votre entreprise de la leçon précédente et un appel à l'action. Téléchargez-le.",
          youCanNow: "créer un visuel propre aux couleurs de votre entreprise dans Canva et vérifier les images d'IA avant de les utiliser."
        }
      ],
      check: {
        title: "Vérification des connaissances 1 : Les principaux types d'outils d'IA",
        questions: [
          { q: "Quel outil correspond à la tâche « design » ?", options: ["Une calculatrice", "Canva", "Une boîte de réception e-mail", "Une application bancaire"], answer: 1, why: "Canva crée des prospectus, des images pour les réseaux et d'autres visuels." },
          { q: "Votre entreprise utilise Microsoft Outlook et Word. Quel assistant conversationnel est un premier choix naturel ?", options: ["Une application de cartes", "Une application de dessin", "Une application de musique", "Microsoft Copilot"], answer: 3, why: "Copilot convient aux entreprises qui utilisent déjà des comptes Microsoft." },
          { q: "Avant d'ajouter un nouvel outil d'IA, quelle question compte le plus ?", options: ["Quelle tâche fait-il, et ai-je déjà un outil pour ça ?", "Le logo est-il joli ?", "Est-il populaire sur TikTok ?", "A-t-il un mode sombre ?"], answer: 0, why: "Partez de la tâche ; évitez de payer des outils qui font la même chose que les vôtres." },
          { q: "Quelle est la meilleure façon de commencer une création dans Canva ?", options: ["Une page blanche", "Copier le prospectus d'un concurrent", "Un modèle que vous modifiez", "Taper vos coordonnées bancaires"], answer: 2, why: "Les modèles vous donnent une mise en page propre à adapter." },
          { q: "Une image d'IA pour votre prospectus a un mot mal écrit sur l'enseigne. Que faites-vous ?", options: ["Vous l'utilisez quand même", "Vous la publiez deux fois", "Vous la corrigez ou en créez une nouvelle avant de l'utiliser", "Vous accusez le client"], answer: 2, why: "Vérifiez les erreurs des images d'IA avant qu'elles soient diffusées." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'IA dans vos outils de travail quotidiens",
      lessons: [
        {
          title: "L'IA dans les documents et les tableurs",
          minutes: 5,
          goal: "Utiliser l'IA pour rédiger un document et pour comprendre un tableur.",
          text: [
            "Google Docs et Sheets ainsi que Microsoft Word et Excel incluent maintenant des aides d'IA dans beaucoup d'abonnements (Gemini dans Google Workspace, Copilot dans Microsoft 365). Les fonctions disponibles dépendent de votre abonnement, et cela change, donc consultez les pages d'aide de votre compte.",
            "Si votre abonnement n'inclut pas l'aide intégrée, vous pouvez quand même utiliser un assistant conversationnel gratuit : collez un texte sans informations privées, ou décrivez vos colonnes, et demandez un brouillon, une formule ou une explication.",
            "Demandes utiles : « Transforme ces notes en brouillon de contrat de service d'une page, à faire relire par mon avocat. » « Écris une formule de tableur qui additionne la colonne C quand la colonne B indique Payé. » « Explique ce que fait cette formule. » Testez toujours une formule sur quelques lignes que vous pouvez vérifier à la main."
          ],
          steps: ["Ouvrez un document ou un tableur que vous utilisez déjà.", "Cherchez l'aide d'IA intégrée ; s'il n'y en a pas, ouvrez un assistant conversationnel.", "Demandez un brouillon ou une formule en décrivant vos colonnes sans données privées.", "Testez toute formule sur quelques lignes que vous pouvez vérifier vous-même."],
          words: [["Formule", "une instruction dans une cellule de tableur qui calcule quelque chose, comme un total."], ["Google Workspace / Microsoft 365", "les versions professionnelles payantes des outils bureautiques de Google et de Microsoft."]],
          slides: [
            { title: "Aides d'IA intégrées", bullets: ["Gemini dans Google Workspace", "Copilot dans Microsoft 365", "Selon votre abonnement ; voir les pages d'aide"] },
            { title: "Pas d'aide intégrée ?", bullets: ["Utilisez un assistant conversationnel gratuit", "Décrivez vos colonnes, sans données privées", "Demandez un brouillon, une formule ou une explication"] },
            { title: "Testez avant de faire confiance", bullets: ["Essayez la formule sur quelques lignes", "Vérifiez le résultat à la main", "Faites relire les textes juridiques par un avocat"] }
          ],
          sources: [{ name: "Google Workspace : fonctions Gemini", url: "https://workspace.google.com/solutions/ai/" }, { name: "Assistance Microsoft : Copilot", url: "https://support.microsoft.com/en-us/copilot" }],
          tryIt: "Décrivez à un assistant IA un tableau de ventes simple (date, article, montant, payé ou non) et demandez une formule qui totalise seulement les ventes payées. Créez un tableau de test de cinq lignes et vérifiez la formule à la main.",
          youCanNow: "utiliser l'IA pour rédiger des documents et pour écrire et tester des formules de tableur."
        },
        {
          title: "Notes de réunion et transcription",
          minutes: 4,
          goal: "Transformer une réunion ou un mémo vocal en notes claires et en actions à faire avec l'IA.",
          text: [
            "Beaucoup d'outils peuvent maintenant transformer la parole en texte : le dictaphone de nombreux téléphones, les fonctions de transcription de Microsoft Teams, Google Meet et Zoom dans certains abonnements, et la saisie vocale de Google Docs (Outils, puis Saisie vocale) ou la dictée dans Word.",
            "Une fois que vous avez le texte, un assistant conversationnel peut le transformer en résumé avec les décisions et les actions à faire : qui fait quoi et pour quand. Retirez les informations privées sur les clients avant de coller.",
            "Prévenez toujours les gens avant d'enregistrer ou de transcrire un appel. Les lois sur l'enregistrement des appels diffèrent selon les pays et les régions, et certaines exigent l'accord de tous ; demander d'abord est la bonne habitude."
          ],
          steps: ["Prévenez tout le monde que vous voulez enregistrer ou transcrire, et obtenez un oui.", "Enregistrez ou transcrivez la réunion ou un mémo vocal.", "Retirez les informations privées du texte.", "Demandez à l'IA : « Résume ceci en décisions et en actions à faire : qui, quoi, pour quand. »", "Vérifiez le résumé avec vos souvenirs."],
          words: [["Action à faire", "une tâche issue d'une réunion, avec une personne et une échéance."], ["Consentement", "la permission donnée par une personne avant que quelque chose soit fait."]],
          slides: [
            { title: "De la parole au texte", bullets: ["Dictaphones des téléphones", "Teams, Meet et Zoom dans certains abonnements", "Saisie vocale dans Docs, dictée dans Word"] },
            { title: "Du texte aux actions", bullets: ["Collez le texte, sans infos privées", "Demandez les décisions et les actions", "Qui, quoi, pour quand"] },
            { title: "Demandez toujours d'abord", bullets: ["Prévenez avant d'enregistrer", "Les lois sur l'enregistrement varient selon le lieu", "Certains endroits exigent l'accord de tous"] }
          ],
          tryIt: "Enregistrez un mémo vocal de deux minutes sur ce que votre entreprise doit faire cette semaine. Transcrivez-le avec la saisie vocale ou votre téléphone, puis demandez à un assistant IA d'en faire une liste d'actions avec des dates.",
          youCanNow: "transformer des notes orales en liste d'actions écrite, et demander la permission avant d'enregistrer d'autres personnes."
        },
        {
          title: "Construire votre boîte à outils et la garder sûre",
          minutes: 5,
          goal: "Choisir un outil par tâche et fixer une règle de sécurité pour chacun.",
          text: [
            "Une boîte à outils que vous utilisez vraiment vaut mieux qu'une longue liste d'applications essayées une fois. Pour chacune des quatre tâches, choisissez un outil, notez si vous avez une offre gratuite ou payante, et écrivez une chose que vous avez créée avec.",
            "Vérifiez les paramètres de données de chaque outil. Beaucoup permettent de désactiver l'historique des conversations ou d'empêcher que votre contenu serve à entraîner l'IA. Les offres professionnelles ont souvent de meilleures garanties de confidentialité ; lisez la page de confidentialité de l'outil avant d'y mettre des documents d'entreprise.",
            "Fixez une règle simple par outil, comme « Pas de numéros de téléphone de clients dans ChatGPT » ou « Je ne télécharge que des images Canva que j'ai vérifiées ». Revoyez votre boîte à outils tous les quelques mois, car les outils, les fonctions et les prix changent."
          ],
          steps: ["Listez les quatre tâches.", "Choisissez un outil pour chacune et notez gratuit ou payant.", "Ouvrez les paramètres de chaque outil et trouvez ses options de données ou de confidentialité.", "Écrivez une règle de sécurité par outil.", "Mettez un rappel pour revoir la boîte à outils dans trois mois."],
          words: [["Boîte à outils", "la courte liste des outils sur lesquels vous comptez, avec l'usage de chacun."], ["Paramètres de confidentialité", "les options qui contrôlent ce qu'un outil conserve et comment il utilise vos données."]],
          slides: [
            { title: "Un outil par tâche", bullets: ["Écriture, design, documents, réunions", "Gratuit ou payant ?", "Une chose que vous avez créée avec"] },
            { title: "Vérifiez les paramètres de données", bullets: ["Désactivez l'historique ou l'entraînement si possible", "Les offres pro protègent souvent mieux les données", "Lisez d'abord la page de confidentialité"] },
            { title: "Une règle de sécurité par outil", bullets: ["« Pas de téléphones de clients dans les conversations »", "« Seulement des images que j'ai vérifiées »"] },
            { title: "Revoyez tous les quelques mois", bullets: ["Les outils, les fonctions et les prix changent"] }
          ],
          tryIt: "Tâche finale : créez votre page « Ma boîte à outils IA » : quatre tâches, un outil pour chacune, une chose que vous avez créée avec pendant ce cours, et une règle de sécurité pour chaque outil.",
          youCanNow: "faire tourner votre entreprise avec une petite boîte à outils IA sûre que vous revoyez régulièrement."
        }
      ],
      check: {
        title: "Vérification des connaissances 2 : L'IA dans vos outils de travail quotidiens",
        questions: [
          { q: "Votre abonnement de tableur n'a pas d'aide d'IA intégrée. Que pouvez-vous faire ?", options: ["Décrire vos colonnes à un assistant conversationnel gratuit et demander une formule", "Abandonner", "Coller les numéros de carte de vos clients dans l'IA", "Acheter toutes les applications d'IA"], answer: 0, why: "Un assistant conversationnel peut écrire des formules à partir d'une description, sans données privées." },
          { q: "L'IA vous a écrit une formule de tableur. Que faire avant de lui faire confiance ?", options: ["Supprimer le tableau", "L'utiliser d'un coup sur toute l'année", "L'envoyer aux clients", "La tester sur quelques lignes que vous pouvez vérifier à la main"], answer: 3, why: "Tester sur quelques lignes repère les erreurs." },
          { q: "Que faire avant d'enregistrer un appel avec un client ?", options: ["Enregistrer en secret", "Le prévenir et obtenir sa permission", "N'enregistrer que la première minute", "Le publier en ligne"], answer: 1, why: "Les lois sur l'enregistrement varient, et certaines exigent l'accord de tous." },
          { q: "Une action à faire doit dire :", options: ["Qui fait quoi et pour quand", "Seulement la date de la réunion", "Combien de temps a duré la réunion", "Qui était en retard"], answer: 0, why: "Une action à faire nomme une personne, une tâche et une échéance." },
          { q: "Pourquoi revoir votre boîte à outils IA tous les quelques mois ?", options: ["Pour supprimer votre entreprise", "C'est exigé par la loi", "Les outils, les fonctions et les prix changent", "Parce que l'IA oublie"], answer: 2, why: "Des révisions régulières gardent votre boîte à outils à jour et abordable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : Les outils d'IA que tout entrepreneur devrait connaître",
    questions: [
      { q: "Les quatre tâches d'outils d'IA de ce cours sont :", options: ["Banque, expédition, embauche, impôts", "Écriture, design, documents et chiffres, réunions et notes", "Musique, jeux, films, sport", "Téléphones, ordinateurs, tablettes, montres"], answer: 1, why: "Ces quatre tâches couvrent la plupart des besoins d'une petite entreprise." },
      { q: "Lequel est un assistant conversationnel ?", options: ["Une camionnette de livraison", "Un lecteur de codes-barres", "Un tiroir-caisse", "Google Gemini"], answer: 3, why: "Gemini, ChatGPT et Copilot sont des assistants conversationnels." },
      { q: "Pourquoi commencer avec un outil par tâche ?", options: ["Pour que les clients voient vos applications", "C'est la loi", "Les outils d'IA ne peuvent pas partager de tâches", "Cela reste simple et évite de payer deux fois"], answer: 3, why: "Une petite boîte à outils est plus facile à apprendre et moins chère." },
      { q: "Où vérifier ce que l'offre gratuite d'un outil inclut aujourd'hui ?", options: ["Dans un commentaire de vidéo au hasard", "Sur la page de tarifs de l'outil", "Auprès de votre client", "Sur un vieux prospectus"], answer: 1, why: "Les offres changent ; la page officielle est à jour." },
      { q: "Votre entreprise fonctionne avec Gmail et Google Drive. Un assistant conversationnel naturel à essayer d'abord :", options: ["Un fax", "Un filtre photo", "Google Gemini", "Un compteur de mots"], answer: 2, why: "Gemini convient aux entreprises qui utilisent des comptes Google." },
      { q: "Une bonne façon de comparer deux assistants conversationnels :", options: ["Lancer le même prompt dans les deux", "Ne lire que leurs publicités", "Demander à un inconnu", "Prendre le plus récent"], answer: 0, why: "Le même prompt dans deux outils montre lequel correspond à votre style." },
      { q: "Dans Canva, le chemin le plus rapide vers une création propre est de :", options: ["Copier le logo d'une autre marque", "Partir d'une page blanche", "Partir d'un modèle", "Utiliser dix polices"], answer: 2, why: "Les modèles vous donnent une mise en page toute prête." },
      { q: "Un prospectus simple doit avoir :", options: ["Un message, une image, un appel à l'action", "Tous les produits que vous vendez", "Seulement du petit texte", "Pas de nom d'entreprise"], answer: 0, why: "Les créations simples sont plus faciles à lire." },
      { q: "Vous ne devez PAS utiliser l'IA pour créer une image qui :", options: ["Montre votre propre produit", "Copie le logo d'une autre entreprise", "Utilise vos couleurs de marque", "A le nom de votre boutique bien écrit"], answer: 1, why: "Copier une autre marque peut enfreindre les règles sur les marques ou le droit d'auteur." },
      { q: "Gemini dans Google Workspace et Copilot dans Microsoft 365 sont :", options: ["Des services de livraison", "Des imprimantes", "Des applications de paiement", "Des aides d'IA intégrées aux outils bureautiques dans beaucoup d'abonnements"], answer: 3, why: "Ils ajoutent l'IA aux documents, aux e-mails et aux tableurs." },
      { q: "Quand vous demandez une formule de tableur à l'IA, vous partagez :", options: ["Une description des colonnes, sans données privées", "Les numéros de carte des clients", "Votre mot de passe bancaire", "Votre numéro fiscal"], answer: 0, why: "Décrire les colonnes suffit pour obtenir une formule." },
      { q: "Une formule de tableur, c'est :", options: ["Une adresse e-mail", "Un type de graphique", "Une police", "Une instruction dans une cellule qui calcule quelque chose"], answer: 3, why: "Les formules calculent des valeurs comme des totaux." },
      { q: "L'IA vous a rédigé un contrat de service. Et ensuite ?", options: ["Le publier en ligne", "Le faire signer tout de suite aux clients", "Le faire relire par un avocat avant de l'utiliser", "Supprimer l'ancien sans le lire"], answer: 2, why: "Les documents juridiques doivent être relus par un professionnel." },
      { q: "La saisie vocale de Google Docs vous permet de :", options: ["Payer des factures", "Parler et voir vos mots s'écrire", "Créer des logos", "Expédier des produits"], answer: 1, why: "Elle transforme la parole en texte." },
      { q: "Après avoir transcrit une réunion, une demande utile à l'IA est :", options: ["« Traduis en code. »", "« Rallonge-le. »", "« Ajoute des faits au hasard. »", "« Résume ceci en décisions et en actions à faire : qui, quoi, pour quand. »"], answer: 3, why: "Cela transforme une longue transcription en prochaines étapes claires." },
      { q: "Avant d'enregistrer un appel, vous devez :", options: ["N'enregistrer que l'autre personne", "Cacher l'enregistreur", "Prévenir les gens et obtenir leur permission", "Demander à l'IA si c'est légal et ne pas leur demander"], answer: 2, why: "Les règles de consentement varient selon le lieu ; demander d'abord est sûr." },
      { q: "Beaucoup d'outils d'IA permettent de changer les paramètres de données pour que :", options: ["Vos conversations ne soient pas conservées ni utilisées pour l'entraînement", "Vos prix augmentent", "Vos clients reçoivent des e-mails", "Votre logo change"], answer: 0, why: "Les paramètres de confidentialité contrôlent ce que l'outil conserve." },
      { q: "Quelle est une bonne règle de sécurité pour la boîte à outils ?", options: ["« Partager les mots de passe avec l'IA »", "« Pas de numéros de téléphone de clients dans les conversations avec l'IA »", "« Ne jamais vérifier les images d'IA »", "« Utiliser chaque nouvelle application »"], answer: 1, why: "Des règles simples protègent vos clients." },
      { q: "Votre page de boîte à outils indique pour chaque tâche :", options: ["Votre solde bancaire", "L'outil, gratuit ou payant, une création, une règle de sécurité", "Les mots de passe de vos concurrents", "Chaque application que vous avez essayée"], answer: 1, why: "Cela rend la boîte à outils pratique et sûre." },
      { q: "Pourquoi choisir une offre professionnelle d'un outil d'IA ?", options: ["Elle peut offrir de meilleures garanties de confidentialité pour les documents d'entreprise", "Elle est toujours gratuite", "Elle évite de vérifier le travail", "Elle fait vos impôts"], answer: 0, why: "Les offres professionnelles protègent souvent mieux les données ; lisez la page de confidentialité." }
    ]
  }
};
