"use strict";

// Koach Learn course (French translation of athletes/athletes-seo-website-ai.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-seo-website-ai-fr",
  lang: "fr",
  translationOf: "athletes-seo-website-ai",
  category: "Athletes",
  name: "Référencement (SEO) et création de votre site web avec l'IA",
  skills: "Préparer un site de sportif d'une page, Rédiger le texte de la page avec l'IA, Créer un site gratuit avec Google Sites, Bases du référencement : titres, intertitres, descriptions et texte alternatif, Vérifier son site sur Google",
  outcome: "créer et publier avec Google Sites un site de sportif gratuit d'une page, rédigé avec l'aide de l'IA, avec un titre clair, des intertitres, un texte alternatif pour les images et un moyen de contact, pour que les entraîneurs et les marques puissent vous trouver et vous comprendre.",
  about: [
    "Ce cours s'adresse aux sportifs qui veulent un endroit en ligne qu'ils contrôlent, où entraîneurs, recruteurs, marques et fans peuvent voir qui ils sont, ainsi qu'aux entraîneurs qui les aident.",
    "Les réseaux sociaux changent et peuvent être bruyants. Un site simple vous donne une page claire avec votre histoire, vos statistiques, vos meilleurs moments et comment vous contacter. Le SEO, ou référencement naturel (en anglais search engine optimization), aide les gens à le trouver sur Google.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Vous allez préparer, rédiger, créer et publier gratuitement un site d'une page. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Publiez avec Google Sites un site de sportif d'une page avec : un titre de page qui contient votre nom et votre sport, une section « À propos » rédigée avec l'IA et corrigée par vous, une section statistiques et meilleurs moments, un moyen de contact qui n'expose pas vos détails privés, un texte alternatif pour les images, et un lien vers le site depuis l'un de vos profils sociaux. Puis cherchez votre nom et votre sport sur Google et notez ce qui apparaît.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs de lycée, d'université et en début de carrière qui veulent un endroit en ligne qu'ils contrôlent, où les entraîneurs, les recruteurs, les marques et les fans peuvent voir qui ils sont, et les entraîneurs qui les aident.",
    startingPoint: "Ils utilisent les réseaux sociaux et un téléphone tous les jours, et ont parfois un profil de recrutement ou une vidéo des meilleurs moments. Peu ont déjà créé un site web, et la plupart n'ont jamais entendu parler des titres de page, du texte alternatif ou des autres bases du référencement.",
    gap: "Les fils des réseaux sociaux sont difficiles à lire pour les entraîneurs et les marques, et ils peuvent changer ou disparaître. Un site simple et sûr, que les moteurs de recherche comprennent, donne aux sportifs une page claire qui aide les bonnes personnes à les trouver et à les contacter.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un ordinateur ou un téléphone, un compte Google gratuit, Google Sites et un assistant IA gratuit",
      "Environ 60 minutes au total",
      "Aucun détail privé sur la page ; les sportifs de moins de 18 ans indiquent un parent ou un entraîneur comme contact",
      "Les autorisations pour les photos et les règles de l'établissement sur les logos ; les résultats de recherche peuvent mettre du temps à apparaître"
    ],
    prerequisites: "Aucun. « Image de marque sur les réseaux sociaux pour les sportifs » vous aide à écrire d'abord votre phrase d'image de marque."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avant de créer votre site", action: "choisir votre public principal et lister ce dont il a besoin en quatre sections", standard: "avec À propos, Statistiques ou Services, Meilleurs moments et Contact adaptés à ce public" },
    { id: "O2", condition: "Avec vos vrais faits et un assistant IA", action: "écrire une section « À propos » et choisir un moyen de contact sûr", standard: "avec chaque fait vérifié, rien de faux, votre propre voix, et ni adresse, ni numéro de téléphone, ni date de naissance complète, ni emploi du temps" },
    { id: "O3", condition: "Pour votre site d'une page", action: "écrire un titre de page, des intertitres de section, une courte description et un texte alternatif pour les images qui aident la recherche", standard: "avec votre nom et votre sport dans le titre, un texte alternatif sur chaque image et sans entasser de mots-clés" },
    { id: "O4", condition: "Avec Google Sites", action: "créer un site d'une page avec quatre sections, des photos, une vidéo des meilleurs moments intégrée et un bouton de contact", standard: "en utilisant seulement des photos que vous avez le droit d'utiliser et en respectant les règles de votre établissement sur les logos" },
    { id: "O5", condition: "Quand votre site est prêt", action: "le publier, le tester sur un téléphone et partager le lien dans vos bios", standard: "avec chaque lien, bouton et vidéo qui fonctionne, et le site relu par un entraîneur ou un parent" },
    { id: "O6", condition: "Après la publication", action: "planifier une routine de mise à jour et vérifier comment votre site apparaît dans la recherche", standard: "avec un rappel de mise à jour après chaque saison et une note sur ce qui apparaît quand vous cherchez votre nom et votre sport" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer et rédiger votre site",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pourquoi un sportif a besoin d'un site simple",
          minutes: 4,
          goal: "Décider à qui s'adresse votre site et ce qu'il doit montrer.",
          text: [
            "Un site web est une page que vous contrôlez. Les applications sociales peuvent changer leurs règles ou vous faire perdre votre compte ; votre site, lui, reste le même. Il est aussi plus facile à lire pour un entraîneur ou une marque qu'un fil à faire défiler.",
            "Décidez à qui il s'adresse. Un site de recrutement a besoin de statistiques, des résultats scolaires, des meilleurs moments et de références d'entraîneurs. Un site tourné vers les marques a besoin de votre public, de vos partenariats passés et d'un dossier de presse. Un site d'entraîneur ou de stage a besoin de vos services, de votre calendrier et d'un moyen de s'inscrire.",
            "Commencez par une seule page, avec des sections : À propos, Statistiques ou Services, Meilleurs moments et Contact."
          ],
          steps: ["Choisissez votre public principal : entraîneurs, marques ou clients.", "Listez ce qu'ils ont besoin de voir.", "Regroupez-le en quatre sections : À propos, Statistiques ou Services, Meilleurs moments, Contact."],
          words: [["Site web", "des pages sur internet à une adresse que vous partagez, comme un lien."], ["Section", "une partie d'une page, avec son propre intertitre."]],
          slides: [
            { title: "Pourquoi un site", bullets: ["Une page que vous contrôlez", "Plus facile à lire qu'un fil"] },
            { title: "Pour qui ?", bullets: ["Entraîneurs : statistiques, résultats scolaires, meilleurs moments", "Marques : public, partenariats", "Clients : services et inscription"] },
            { title: "Commencez par une page", bullets: ["À propos", "Statistiques ou Services", "Meilleurs moments", "Contact"] }
          ],
          tryIt: "Écrivez le public principal de votre site et listez ce qu'il a besoin de voir sous les quatre intertitres de section.",
          youCanNow: "préparer un site de sportif d'une page pour un public clair.",
          quickCheck: [
            { objective: "O1", q: "Que doit montrer le site d'un sportif tourné vers les marques ?", options: ["Seulement votre emploi du temps de cours", "Votre public, vos partenariats passés et votre dossier de presse", "Votre adresse", "Tous vos scores de match depuis l'enfance"], answer: 1, why: "Les marques veulent voir votre public, vos partenariats et votre dossier de presse." },
            { objective: "O1", q: "Vous animez un stage de techniques pour les jeunes et voulez un site pour lui. Quelles sections conviennent ?", options: ["À propos, Services, Meilleurs moments et Contact avec inscription", "Seulement une galerie de photos", "Seulement vos statistiques", "Une liste de rivaux"], answer: 0, why: "Un site d'entraînement ou de stage a besoin des services, du calendrier et de l'inscription." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rédiger votre page avec l'IA",
          minutes: 5,
          goal: "Utiliser un assistant IA pour préparer votre section « À propos » et le texte des sections, puis le corriger.",
          text: [
            "Donnez vos faits à un assistant IA et demandez un brouillon : « Je finis le lycée en 2027, je suis réceptionneuse-attaquante au volley, 1,85 m, 3,6 de moyenne (GPA, la moyenne américaine sur 4), capitaine de l'équipe, et je veux étudier l'ingénierie. Écris une section \"À propos\" de 100 mots pour mon site de recrutement, à la première personne, sur un ton chaleureux et confiant. »",
            "Vérifiez chaque fait. L'IA peut ajouter des choses fausses, comme des récompenses que vous n'avez pas gagnées. Retirez tout ce que vous ne pouvez pas prouver et réécrivez avec vos mots.",
            "Gardez les détails privés hors de la page : ni adresse, ni numéro de téléphone, ni date de naissance complète, ni emploi du temps. Pour le contact, utilisez une adresse e-mail séparée créée pour le sport, ou un formulaire de contact, et si vous êtes mineur, indiquez aussi un parent ou un entraîneur comme contact."
          ],
          steps: ["Listez vos faits vrais.", "Demandez à l'IA un court brouillon de section « À propos ».", "Vérifiez chaque fait et retirez ce qui est faux.", "Réécrivez avec votre propre voix.", "Choisissez un moyen de contact sûr."],
          words: [["Première personne", "écrire avec « je » et « mon »."], ["Formulaire de contact", "une zone sur un site où les visiteurs vous envoient un message sans voir votre adresse e-mail."]],
          slides: [
            { title: "Donnez vos faits à l'IA", bullets: ["Année de fin d'études, poste, taille", "Résultats scolaires, leadership, objectifs", "Demandez 100 mots, à la première personne"] },
            { title: "Vérifiez chaque fait", bullets: ["L'IA peut inventer des récompenses", "Retirez ce que vous ne pouvez pas prouver", "Utilisez votre propre voix"] },
            { title: "Un contact sûr", bullets: ["E-mail séparé pour le sport ou formulaire", "Ni adresse, ni téléphone, ni date de naissance", "Mineurs : indiquez aussi un parent ou un entraîneur"] }
          ],
          tryIt: "Utilisez un assistant IA pour préparer votre section « À propos ». Vérifiez chaque fait, réécrivez-la avec votre voix et créez une adresse e-mail séparée pour le sport si vous n'en avez pas.",
          youCanNow: "rédiger avec l'aide de l'IA un texte de site exact et choisir un moyen de contact sûr.",
          quickCheck: [
            { objective: "O2", q: "Quel détail doit rester hors de votre site ?", options: ["Votre sport et votre poste", "Votre année de fin d'études", "Votre adresse", "Le lien vers vos meilleurs moments"], answer: 2, why: "Gardez votre adresse, votre numéro de téléphone, votre date de naissance complète et votre emploi du temps hors de la page." },
            { objective: "O2", q: "Le brouillon de l'IA dit que vous avez été sélectionné dans l'équipe d'étoiles de l'État (« all-state »), mais c'est faux. Que faites-vous ?", options: ["Le garder ; personne ne vérifie", "Le changer en « presque all-state »", "Demander à l'IA d'ajouter d'autres récompenses", "Le retirer et n'écrire que des faits vrais"], answer: 3, why: "Vérifiez chaque fait et retirez tout ce que vous ne pouvez pas prouver." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bases du référencement : aider Google à comprendre votre page",
          minutes: 5,
          goal: "Écrire un titre de page, des intertitres, une courte description et un texte alternatif pour les images qui aident la recherche.",
          text: [
            "Le SEO, ou référencement naturel, consiste à rendre votre page facile à comprendre pour les moteurs de recherche comme Google, pour que les bonnes personnes la trouvent.",
            "Le guide de démarrage SEO de Google recommande quelques bases : un titre de page clair et unique (par exemple « Jordan Lee | Volley, réceptionneuse-attaquante, promotion 2027 »), des intertitres qui organisent la page, un texte utile et à jour écrit pour des personnes, une courte description de la page, et un texte alternatif court et descriptif pour les images.",
            "Écrivez d'abord pour les personnes. N'entassez pas de mots-clés ; utilisez simplement les mots qu'un entraîneur ou une marque taperait, comme votre nom, votre sport, votre poste, votre année de fin d'études et votre ville ou région."
          ],
          steps: ["Écrivez un titre de page avec votre nom, votre sport et votre poste ou service.", "Utilisez un intertitre pour chaque section.", "Écrivez une description de la page en une ou deux phrases.", "Ajoutez un court texte alternatif à chaque image.", "Utilisez les mots que votre public chercherait."],
          words: [["SEO (référencement naturel)", "search engine optimization : aider les moteurs de recherche à comprendre votre page pour que les gens la trouvent."], ["Texte alternatif", "une courte description écrite d'une image, utilisée par les moteurs de recherche et les lecteurs d'écran."], ["Mot-clé", "un mot ou une expression que les gens tapent dans un moteur de recherche."]],
          slides: [
            { title: "Le SEO en une ligne", bullets: ["Aider Google à comprendre votre page", "Pour que les bonnes personnes la trouvent"] },
            { title: "Les bases selon Google", bullets: ["Titre de page clair et unique", "Un intertitre par section", "Courte description et texte utile", "Texte alternatif pour les images"] },
            { title: "Écrivez pour les personnes", bullets: ["Nom, sport, poste, année de fin d'études, région", "Pas d'entassement de mots-clés"] }
          ],
          sources: [{ name: "Google Search Central : Guide de démarrage SEO", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Écrivez votre titre de page, les quatre intertitres de section, une description de la page en une phrase et un texte alternatif pour deux photos que vous comptez utiliser.",
          youCanNow: "écrire un titre de page, des intertitres, une description et un texte alternatif qui aident les gens à trouver votre page.",
          quickCheck: [
            { objective: "O3", q: "À quoi sert le SEO ?", options: ["Aider les moteurs de recherche à comprendre votre page pour que les bonnes personnes la trouvent", "Faire charger les photos de votre page plus vite", "Cacher votre page à Google", "Payer des publicités"], answer: 0, why: "Le SEO consiste à rendre votre page facile à comprendre pour les moteurs de recherche." },
            { objective: "O3", q: "Vous ajoutez une photo de vous en pleine course de haies. Quel texte alternatif écrivez-vous ?", options: ["« IMG_4432 »", "« photo »", "« Sam Ortiz franchit une haie lors de la compétition du comté »", "« haies haies haies athlétisme athlétisme »"], answer: 2, why: "Le texte alternatif est une courte ligne qui décrit l'image, sans entasser de mots-clés." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer et rédiger votre site",
        questions: [
          { objective: "O1", q: "Pourquoi avoir votre propre site web ?", options: ["Les réseaux sociaux sont illégaux", "Les entraîneurs ne lisent que du papier", "C'est une page que vous contrôlez et qui se lit facilement", "Il remplace l'entraînement"], answer: 2, why: "Votre site reste le même et se parcourt facilement par les entraîneurs et les marques." },
          { objective: "O2", q: "L'IA ajoute à votre section « À propos » une récompense que vous n'avez pas gagnée. Que faites-vous ?", options: ["Je la retire", "Je la garde", "J'ajoute d'autres récompenses", "Je la cache en petits caractères"], answer: 0, why: "N'incluez que des faits vrais que vous pouvez prouver." },
          { objective: "O2", q: "Lequel est un moyen de contact sûr pour un mineur ?", options: ["Le téléphone de la maison", "L'adresse de la maison", "L'emploi du temps", "Un e-mail pour le sport ou un formulaire, plus un contact parent ou entraîneur"], answer: 3, why: "Cela permet de vous joindre sans exposer de détails privés." },
          { objective: "O3", q: "Lequel est un bon titre de page ?", options: ["« Accueil »", "« Jordan Lee | Volley, réceptionneuse-attaquante, promotion 2027 »", "« Bienvenue !!! »", "« Page 1 »"], answer: 1, why: "Il dit aux gens et à Google exactement ce qu'est la page." },
          { objective: "O3", q: "Qu'est-ce que le texte alternatif ?", options: ["Un mot de passe secret", "Une courte description d'une image", "Un deuxième site", "Un hashtag"], answer: 1, why: "Le texte alternatif décrit les images pour les moteurs de recherche et les lecteurs d'écran." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Créer et publier",
      lessons: [
        {
          objectives: ["O4"],
          title: "Créer votre page avec Google Sites",
          minutes: 6,
          goal: "Créer votre site d'une page avec Google Sites.",
          text: [
            "Google Sites est un outil gratuit de Google pour créer des sites. Il vous faut un compte Google. Ouvrez sites.google.com, commencez un site vierge ou un modèle, et ajoutez vos sections.",
            "Utilisez l'outil pour ajouter des zones de texte, des images, des intertitres et des boutons, et pour intégrer une vidéo YouTube de vos meilleurs moments. Choisissez un thème simple aux couleurs de votre équipe, avec un texte lisible. N'utilisez que des photos que vous avez prises ou que vous avez le droit d'utiliser, et respectez les règles de votre établissement sur les logos.",
            "Restez sobre : une page, quatre sections, un gros texte lisible et un bouton clair pour vous contacter ou voir vos meilleurs moments."
          ],
          steps: ["Allez sur sites.google.com et connectez-vous.", "Commencez un site vierge ou un modèle.", "Ajoutez votre titre de page et quatre sections avec intertitres.", "Collez votre texte corrigé.", "Ajoutez des photos avec texte alternatif et intégrez votre vidéo de meilleurs moments.", "Ajoutez un bouton de contact ou un lien vers un formulaire."],
          words: [["Modèle", "une mise en page toute prête que l'on remplit."], ["Intégrer", "afficher dans votre page une vidéo ou un élément venant d'un autre site."]],
          slides: [
            { title: "Google Sites", bullets: ["Outil gratuit de création de sites", "Demande un compte Google", "sites.google.com"] },
            { title: "Ajoutez votre contenu", bullets: ["Titre et quatre sections", "Photos avec texte alternatif", "Vidéo de meilleurs moments intégrée"] },
            { title: "Restez sobre", bullets: ["Texte lisible, couleurs de l'équipe", "Un bouton clair", "Vos photos ; respectez les règles sur les logos"] }
          ],
          tryIt: "Créez votre page avec Google Sites, avec votre titre, quatre sections, au moins une photo avec texte alternatif, et votre vidéo de meilleurs moments ou un emplacement prévu pour elle.",
          youCanNow: "créer un site de sportif d'une page, clair et sobre, avec Google Sites.",
          quickCheck: [
            { objective: "O4", q: "Où allez-vous pour commencer une page Google Sites ?", options: ["sites.google.com", "Le site web de votre établissement", "Une application de réseau social", "Search Console"], answer: 0, why: "Ouvrez sites.google.com et connectez-vous avec un compte Google." },
            { objective: "O4", q: "Vous voulez votre vidéo des meilleurs moments sur votre site. Que faites-vous ?", options: ["Coller une capture d'écran de la vidéo", "La décrire seulement avec des mots", "L'envoyer par e-mail aux visiteurs", "Intégrer votre vidéo YouTube dans la page"], answer: 3, why: "Google Sites peut intégrer une vidéo YouTube des meilleurs moments." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Publier et vérifier votre site",
          minutes: 5,
          goal: "Publier votre site, le tester sur un téléphone et partager le lien.",
          text: [
            "Quand votre page est prête, utilisez le bouton de publication et choisissez l'adresse web de votre site. Choisissez une adresse courte avec votre nom et votre sport.",
            "Testez-le sur un téléphone, car la plupart des entraîneurs et des fans l'ouvriront là. Vérifiez que chaque lien et bouton marche, que la vidéo se lance et que le texte se lit facilement. Demandez aussi à un entraîneur ou un parent de le regarder.",
            "Partagez le lien dans les bios de vos réseaux sociaux, votre signature d'e-mail et vos profils de recrutement. Si vous changez vos coordonnées, mettez le site à jour tout de suite."
          ],
          steps: ["Cliquez sur publier et choisissez une adresse web courte.", "Ouvrez-le sur un téléphone.", "Testez chaque lien, bouton et vidéo.", "Demandez à un entraîneur ou un parent de le relire.", "Ajoutez le lien à vos bios et à votre signature d'e-mail."],
          words: [["Publier", "mettre votre site en ligne sur internet."], ["URL", "une adresse web, comme le lien que vous partagez."]],
          slides: [
            { title: "Publier", bullets: ["Choisissez une adresse courte avec votre nom et votre sport"] },
            { title: "Testez sur un téléphone", bullets: ["Les liens et boutons marchent ?", "La vidéo se lance ?", "Le texte se lit facilement ?"] },
            { title: "Partagez-le", bullets: ["Bios des réseaux sociaux", "Signature d'e-mail", "Profils de recrutement"] }
          ],
          tryIt: "Publiez votre site, testez-le sur un téléphone, demandez à un adulte de le relire et ajoutez le lien à un profil social.",
          youCanNow: "publier, tester et partager votre site de sportif.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui fait une bonne adresse de site ?", options: ["Une longue suite de chiffres", "Courte, avec votre nom et votre sport", "Votre numéro de téléphone", "Seulement le nom de votre établissement"], answer: 1, why: "Choisissez une adresse courte avec votre nom et votre sport." },
            { objective: "O5", q: "Vous avez changé d'adresse e-mail sportive. Que faites-vous avec votre site ?", options: ["Rien ; personne ne le lit", "Supprimer le site", "Mettre à jour les coordonnées tout de suite", "Attendre la saison prochaine"], answer: 2, why: "Si vos coordonnées changent, mettez le site à jour tout de suite." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Garder le site à jour et vérifier la recherche",
          minutes: 5,
          goal: "Mettre en place une routine de mise à jour et voir comment votre site apparaît dans la recherche.",
          text: [
            "Les moteurs de recherche comme les visiteurs aiment les pages à jour. Mettez à jour vos statistiques, vos meilleurs moments et votre calendrier après chaque saison ou grand événement, et changez la date dans votre section « À propos ».",
            "Un nouveau site peut mettre du temps à apparaître dans les résultats de recherche. Cherchez sur Google votre nom plus votre sport et regardez ce qui apparaît. Google propose un outil gratuit appelé Search Console que les propriétaires de sites peuvent utiliser pour voir comment leur site se comporte dans la recherche ; le guide de démarrage SEO l'explique.",
            "Tous les quelques mois, demandez à un assistant IA : « Voici le texte de mon site. Propose trois façons de le rendre plus clair pour des entraîneurs universitaires. » Puis décidez quoi changer."
          ],
          steps: ["Programmez un rappel pour mettre à jour après chaque saison.", "Cherchez votre nom plus votre sport et notez ce qui apparaît.", "Lisez la partie sur Search Console dans le guide de Google.", "Demandez à l'IA trois suggestions de clarté et choisissez ce que vous utilisez."],
          words: [["Search Console", "l'outil gratuit de Google qui montre aux propriétaires de sites comment leur site apparaît dans la recherche Google."], ["Résultats de recherche", "la liste des pages qu'un moteur de recherche affiche pour une recherche."]],
          slides: [
            { title: "Restez à jour", bullets: ["Mettez à jour statistiques et meilleurs moments chaque saison", "Changez les dates dans votre section « À propos »"] },
            { title: "Vérifiez la recherche", bullets: ["Un nouveau site peut mettre du temps à apparaître", "Cherchez votre nom plus votre sport", "Search Console pour les propriétaires de sites"] },
            { title: "Améliorez avec l'IA", bullets: ["Demandez trois conseils de clarté", "Vous décidez quoi changer"] }
          ],
          sources: [{ name: "Google Search Central : Guide de démarrage SEO", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Tâche finale : vérifiez que votre site publié a un titre clair, un texte « À propos » rédigé avec l'IA et corrigé, des statistiques et des meilleurs moments, un moyen de contact sûr, un texte alternatif pour les images et un lien depuis un réseau social. Cherchez votre nom et votre sport sur Google et notez ce qui apparaît.",
          youCanNow: "garder votre site à jour et vérifier comment il apparaît dans la recherche.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce que Google Search Console ?", options: ["Un outil gratuit de Google qui montre les performances de votre site dans la recherche", "Un service de publicité payant", "Un outil de création de site", "Une application de réseau social"], answer: 0, why: "Search Console permet aux propriétaires de sites de voir les performances de leur site dans la recherche." },
            { objective: "O6", q: "Votre saison vient de se terminer. Que dit votre routine de mise à jour ?", options: ["Rien jusqu'à la fin de vos études", "Supprimer seulement les anciens meilleurs moments", "Changer l'adresse de votre site", "Mettre à jour vos statistiques, vos meilleurs moments et la date dans votre section « À propos »"], answer: 3, why: "Mettez à jour après chaque saison ou grand événement pour que la page reste actuelle." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Créer et publier",
        questions: [
          { objective: "O4", q: "De quoi avez-vous besoin pour utiliser Google Sites ?", options: ["D'un abonnement payant", "D'un diplôme en programmation", "D'un serveur", "D'un compte Google"], answer: 3, why: "Google Sites est gratuit avec un compte Google." },
          { objective: "O4", q: "Quelles photos pouvez-vous mettre sur votre site ?", options: ["Des photos que vous avez prises ou que vous avez le droit d'utiliser", "N'importe quelle photo trouvée en ligne", "Les photos d'autres sportifs", "Les logos de l'établissement sans demander"], answer: 0, why: "N'utilisez que des photos à vous ou que vous avez le droit d'utiliser." },
          { objective: "O5", q: "Pourquoi tester votre site sur un téléphone ?", options: ["Les téléphones sont interdits", "Il est moins beau sur ordinateur", "La plupart des visiteurs l'ouvriront sur un téléphone", "Aucune raison"], answer: 2, why: "Les entraîneurs et les fans ouvrent souvent les liens sur leur téléphone." },
          { objective: "O6", q: "Votre site n'apparaît pas sur Google le jour de sa publication. Pourquoi ?", options: ["Il est cassé pour toujours", "Google interdit les sportifs", "Il faut payer", "Un nouveau site peut mettre du temps à apparaître"], answer: 3, why: "Les moteurs de recherche ont besoin de temps pour trouver les nouvelles pages." },
          { objective: "O6", q: "Quand mettre à jour vos statistiques et vos meilleurs moments ?", options: ["Jamais", "Après chaque saison ou grand événement", "Une fois tous les dix ans", "Seulement quand un entraîneur se plaint"], answer: 1, why: "Un contenu à jour aide les visiteurs et la recherche." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Référencement (SEO) et création de votre site web avec l'IA",
    questions: [
      { objective: "O3", q: "SEO veut dire :", options: ["Social everyday output", "Sports event organizer", "Search engine optimization (référencement naturel)", "Site editing online"], answer: 2, why: "Cela veut dire aider les moteurs de recherche à comprendre votre page." },
      { objective: "O1", q: "Un site de recrutement doit montrer :", options: ["Statistiques, résultats scolaires, meilleurs moments", "Votre adresse", "Votre mot de passe", "Des ragots sur les rivaux"], answer: 0, why: "C'est ce dont les entraîneurs ont besoin." },
      { objective: "O1", q: "Avec combien de pages commencer ?", options: ["Une", "Vingt", "Zéro", "Cent"], answer: 0, why: "Une page claire suffit pour commencer." },
      { objective: "O1", q: "Quelle section aide les gens à vous joindre ?", options: ["Le dessin en bas de page", "Les couleurs du thème", "Contact", "Les polices"], answer: 2, why: "La section Contact dit comment vous joindre." },
      { objective: "O2", q: "Quand l'IA prépare votre section « À propos », vous devez :", options: ["La publier sans la lire", "Vérifier chaque fait", "Ajouter des récompenses en plus", "La rallonger"], answer: 1, why: "L'IA peut inventer des faits." },
      { objective: "O2", q: "Qu'est-ce qui ne doit PAS être sur votre site ?", options: ["Votre poste", "Votre vidéo de meilleurs moments", "Votre année de fin d'études", "Votre date de naissance complète et votre adresse"], answer: 3, why: "Ce sont des détails privés." },
      { objective: "O2", q: "Un formulaire de contact permet aux gens de :", options: ["Voir votre mot de passe", "Modifier votre site", "Vous écrire sans voir votre adresse e-mail", "Vous payer"], answer: 2, why: "Il protège votre adresse e-mail." },
      { objective: "O3", q: "Qu'est-ce qui aide Google à comprendre votre page ?", options: ["Tout en majuscules", "Du texte caché", "Aucun mot du tout", "Un titre de page et des intertitres clairs"], answer: 3, why: "Le guide de Google recommande des titres et des intertitres clairs." },
      { objective: "O3", q: "Entasser des mots-clés, c'est :", options: ["Répéter des mots de recherche de façon pas naturelle", "Écrire pour les personnes", "Ajouter un texte alternatif", "Utiliser des intertitres"], answer: 0, why: "Écrivez pour les personnes, pas pour entasser des mots-clés." },
      { objective: "O3", q: "Un bon texte alternatif pour une photo d'action est :", options: ["« IMG_2034 »", "« Jordan Lee smashe pendant la demi-finale régionale »", "« photo »", "Vide"], answer: 1, why: "Court et descriptif." },
      { objective: "O3", q: "Une description de page doit être :", options: ["Une dissertation complète", "Une liste de mots de passe", "Une ou deux phrases sur la page", "Vide"], answer: 2, why: "Les descriptions courtes peuvent apparaître dans les résultats de recherche." },
      { objective: "O4", q: "Google Sites est :", options: ["Un outil gratuit de création de sites", "Seulement une application payante", "Un réseau social", "Un jeu vidéo"], answer: 0, why: "C'est l'outil gratuit de Google." },
      { objective: "O4", q: "Pour montrer votre vidéo de meilleurs moments sur votre site, vous :", options: ["La décrivez seulement", "L'envoyez par e-mail aux visiteurs", "L'imprimez", "L'intégrez"], answer: 3, why: "L'intégrer la fait jouer sur votre page." },
      { objective: "O4", q: "Avant d'utiliser le logo de votre établissement, vous devez :", options: ["Le redessiner", "Respecter les règles de votre établissement sur les logos", "Ignorer les règles", "Le vendre"], answer: 1, why: "Les établissements contrôlent leurs logos." },
      { objective: "O5", q: "Une bonne adresse de site est :", options: ["Des chiffres au hasard", "Courte, avec votre nom et votre sport", "Très longue", "Votre mot de passe"], answer: 1, why: "Facile à retenir et à partager." },
      { objective: "O5", q: "Après la publication, qui doit relire votre site ?", options: ["Personne", "Un inconnu en ligne", "Un rival", "Un entraîneur ou un parent"], answer: 3, why: "Un deuxième regard repère les erreurs." },
      { objective: "O5", q: "Où partager le lien de votre site ?", options: ["Dans vos bios, votre signature d'e-mail et vos profils de recrutement", "Nulle part", "Seulement sur papier", "Dans des messages indésirables"], answer: 0, why: "C'est là que regardent les entraîneurs et les marques." },
      { objective: "O6", q: "Search Console, c'est :", options: ["Une console de jeu", "Une publicité payante", "L'outil gratuit de Google qui montre comment votre site apparaît dans la recherche", "Une application sociale"], answer: 2, why: "Les propriétaires de sites l'utilisent pour suivre leur présence dans la recherche." },
      { objective: "O6", q: "Comment vérifier comment votre site apparaît dans la recherche ?", options: ["Demander à l'IA de deviner", "Regarder la météo", "Redémarrer votre téléphone", "Chercher votre nom plus votre sport"], answer: 3, why: "La recherche montre ce que voient les autres." },
      { objective: "O6", q: "L'IA propose trois changements pour votre site. Vous :", options: ["Devez tous les faire", "Décidez lesquels utiliser", "Ne devez en faire aucun", "Supprimez votre site"], answer: 1, why: "L'IA suggère ; vous décidez." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      7,
      9,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Titre de page et bases du SEO",
        objective: "O3",
        notYet: "Le titre n'a pas votre nom ou votre sport, ou les images n'ont pas de texte alternatif.",
        meets: "Un titre avec le nom et le sport, des intertitres pour chaque section, une courte description et un texte alternatif sur chaque image.",
        exceeds: "Utilise les mots que le public chercherait, comme le poste, l'année de fin d'études et la région, sans les entasser."
      },
      {
        name: "Section « À propos »",
        objective: "O2",
        notYet: "Contient des faits faux ou ressemble à un texte d'IA copié.",
        meets: "Chaque fait est vrai et vérifié, écrit avec la voix du sportif.",
        exceeds: "Adaptée au public principal, par exemple les études et le caractère pour les entraîneurs universitaires."
      },
      {
        name: "Statistiques et meilleurs moments",
        objective: "O4",
        notYet: "Absents, pas à jour, ou avec des photos utilisées sans autorisation.",
        meets: "Des statistiques à jour et une vidéo des meilleurs moments intégrée, avec seulement des photos autorisées et les règles de l'établissement sur les logos respectées.",
        exceeds: "Indique la date de dernière mise à jour des statistiques et une courte légende pour chaque moment fort."
      },
      {
        name: "Contact sûr",
        objective: "O2",
        notYet: "Affiche une adresse, un numéro de téléphone personnel ou une date de naissance complète.",
        meets: "Une adresse e-mail sportive ou un formulaire de contact, plus un parent ou un entraîneur comme contact pour les mineurs.",
        exceeds: "Le bouton de contact est testé et les réponses arrivent sur un compte consulté régulièrement."
      },
      {
        name: "Publié, relié et vérifié",
        objective: "O5",
        notYet: "Pas publié, des liens cassés, ou pas de lien depuis un profil.",
        meets: "Publié à une adresse courte, testé sur un téléphone, relu par un entraîneur ou un parent et relié depuis un profil social.",
        exceeds: "Les résultats de recherche pour le nom et le sport sont notés et un rappel de mise à jour est programmé."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui publient leur site avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants dont le site apparaît quand ils cherchent leur nom et leur sport lors du suivi à 30 jours",
      "Les apprenants qui disent avoir été contactés par un entraîneur, un recruteur ou une marque grâce à leur site",
      "Les apprenants qui mettent leur site à jour après leur prochaine saison ou leur prochain grand événement"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur (le plus simple) ou un téléphone avec Internet",
      "Un compte Google gratuit pour Google Sites",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Vos statistiques, un lien vers votre vidéo des meilleurs moments et des photos que vous avez le droit d'utiliser",
      "Environ 60 minutes"
    ],
    facilitatorNotes: [
      "Aidez les sportifs à créer une adresse e-mail sportive séparée ou un formulaire de contact, pour que leurs coordonnées personnelles restent privées.",
      "Pour les mineurs, faites relire le site par un parent ou un tuteur avant sa publication et avant de l'indiquer comme contact.",
      "Vérifiez les règles de l'établissement sur les logos et les photos avant la leçon de création.",
      "Faites échanger les téléphones entre sportifs pour tester les sites les uns des autres : liens cassés et lisibilité.",
      "Rappelez aux apprenants qu'un nouveau site peut mettre du temps à apparaître dans la recherche ; revérifiez lors du suivi à 30 jours."
    ]
  }
};
