"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-web-development.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-web-development-fr",
  lang: "fr",
  translationOf: "underserved-ai-web-development",
  category: "Undeserved Community",
  name: "Créer un site web avec l'IA",
  skills: "Planifier un site d'une page, Construire un site gratuit avec Google Sites, Écrire les textes du site avec l'IA, Lire et modifier du HTML simple, Ajouter du code écrit par l'IA en sécurité, Publier et vérifier un site",
  outcome: "planifier, construire et publier un site web gratuit d'une page pour une entreprise familiale, un club ou un groupe communautaire avec Google Sites, en utilisant un assistant d'IA gratuit pour écrire les textes et un petit morceau de HTML que vous lisez, testez et corrigez vous-même.",
  about: [
    "Un site web aide les gens à trouver un groupe d'église, une association de quartier, un programme de soutien scolaire ou une petite entreprise familiale. Vous n'avez besoin ni d'argent ni d'un diplôme d'informatique pour en faire un.",
    "Dans ce cours, vous planifierez un site d'une page, le construirez avec Google Sites (gratuit avec un compte Google), utiliserez un assistant d'IA gratuit pour aider à écrire les textes, et apprendrez assez de HTML, le langage des pages web, pour lire, tester et corriger un petit morceau de code que l'IA écrit pour vous.",
    "Vous pouvez travailler sur un ordinateur à la maison ou à la bibliothèque. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » qui construit votre vrai site. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Publiez un site Google Sites d'une page pour un groupe communautaire ou une petite entreprise, réel ou d'entraînement. Il doit avoir un titre clair, une courte section « Qui sommes-nous » écrite avec l'aide de l'IA et retouchée avec vos mots, un petit encadré HTML avec les horaires et les contacts que vous avez testé et corrigé, aucune adresse personnelle ni numéro de téléphone personnel, et il doit bien s'afficher sur un téléphone.",
  chapters: [
    {
      name: "Chapitre 1 : Planifier et construire votre site",
      lessons: [
        {
          title: "Comment marchent les sites web, et planifier votre page",
          minutes: 4,
          goal: "Écrire un plan simple pour un site web d'une page.",
          text: [
            "Un site web est un ensemble de pages stockées sur un ordinateur appelé serveur. Quand vous tapez une adresse, votre navigateur demande la page à ce serveur et vous l'affiche.",
            "Avant de construire, planifiez. Répondez à quatre questions : À qui s'adresse le site ? Quelle est la seule chose que les visiteurs doivent faire (appeler, venir, s'inscrire, donner) ? De quelles sections avez-vous besoin ? Quelles photos pouvez-vous utiliser avec autorisation ?",
            "La plupart des petits sites communautaires n'ont besoin que de quelques sections : un titre, un « Qui sommes-nous », ce que vous proposez, les horaires et comment vous joindre."
          ],
          steps: ["Écrivez à qui s'adresse le site.", "Écrivez la seule action que vous voulez que les visiteurs fassent.", "Listez quatre ou cinq sections.", "Listez les photos qui vous appartiennent ou que vous avez le droit d'utiliser."],
          words: [["Site web", "une ou plusieurs pages que les gens peuvent visiter sur internet."], ["Serveur", "un ordinateur qui stocke les sites web et envoie les pages aux visiteurs."], ["Navigateur", "le programme qui sert à visiter des sites, comme Chrome, Edge ou Safari."]],
          slides: [
            { title: "Comment marche un site web", bullets: ["Les pages sont stockées sur un serveur", "Votre navigateur demande la page", "Le serveur la renvoie"] },
            { title: "Planifiez avec quatre questions", bullets: ["Pour qui ?", "Que doivent faire les visiteurs ?", "Quelles sections faut-il ?", "Quelles photos pouvez-vous utiliser ?"] },
            { title: "Un site simple d'une page", bullets: ["Titre", "Qui sommes-nous et ce que vous proposez", "Horaires et comment vous joindre"] }
          ],
          tryIt: "Choisissez un groupe réel ou d'entraînement (par exemple un club de soutien scolaire ou un camion-restaurant familial). Écrivez votre plan : pour qui, la seule action, cinq sections et deux photos que vous pouvez utiliser.",
          youCanNow: "expliquer comment un site web vous parvient et planifier un site d'une page."
        },
        {
          title: "Construire un site gratuit avec Google Sites",
          minutes: 5,
          goal: "Créer un site Google Sites avec un titre et les sections prévues.",
          text: [
            "Google Sites est un outil gratuit de création de sites, inclus avec un compte Google. Vous construisez en cliquant et en tapant, sans écrire de code.",
            "Ouvrez sites.google.com sur un ordinateur et créez un nouveau site, vide ou à partir d'un modèle. Donnez un nom au site et tapez un titre de page. Sur le côté droit, vous trouverez Insérer (pour ajouter des zones de texte, des images et plus), Pages et Thèmes.",
            "Ajoutez une zone de texte pour chaque section de votre plan. Choisissez un thème aux couleurs faciles à lire. Google Sites enregistre votre travail au fur et à mesure."
          ],
          steps: ["Allez sur sites.google.com et connectez-vous avec votre compte Google.", "Créez un nouveau site vide ou à partir d'un modèle.", "Tapez le nom du site et le titre de la page.", "Utilisez Insérer à droite pour ajouter une zone de texte par section.", "Choisissez un thème facile à lire."],
          words: [["Modèle", "une mise en page toute prête que vous remplissez avec vos propres mots."], ["Thème", "les couleurs et les polices utilisées dans tout votre site."]],
          sources: [{ name: "Aide Google Sites : créer, nommer ou copier un site", url: "https://support.google.com/sites/answer/6372878" }],
          slides: [
            { title: "Google Sites", bullets: ["Gratuit avec un compte Google", "On construit en cliquant et en tapant", "Enregistre au fur et à mesure"] },
            { title: "Créez votre site", bullets: ["Ouvrez sites.google.com", "Partez de zéro ou d'un modèle", "Tapez un nom de site et un titre de page"] },
            { title: "Ajoutez vos sections", bullets: ["Insérer à droite : zones de texte, images", "Une zone de texte par section", "Un thème facile à lire"] }
          ],
          tryIt: "Créez un nouveau site Google Sites pour votre groupe. Ajoutez le titre et une zone de texte vide pour chaque section de votre plan, et choisissez un thème.",
          youCanNow: "construire la structure d'un site web gratuit avec Google Sites."
        },
        {
          title: "Écrire les textes du site avec l'IA",
          minutes: 5,
          goal: "Utiliser un assistant d'IA gratuit pour rédiger votre section Qui sommes-nous, puis la faire vôtre.",
          text: [
            "Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini peut écrire un premier brouillon de vos textes. Donnez-lui les faits et le ton que vous voulez.",
            "Exemple de consigne : « Écris un Qui sommes-nous chaleureux de 60 mots pour un club gratuit de soutien scolaire après l'école dans un centre communautaire. Nous aidons les enfants de 8 à 14 ans en lecture et en maths. Utilise des mots simples. »",
            "Ensuite, retouchez. Corrigez tout fait que l'IA s'est trompée ou a inventé, coupez les mots qui ne vous ressemblent pas, et ne la laissez jamais inventer des prix, des récompenses ou des promesses que vous ne pouvez pas tenir. Votre site parle au nom de votre groupe : vous êtes responsable de chaque mot."
          ],
          steps: ["Donnez à l'IA les vrais faits de votre groupe et le ton voulu.", "Demandez un court brouillon avec une limite de mots.", "Corrigez les faits faux ou inventés.", "Réécrivez certaines parties pour qu'elles vous ressemblent, puis collez dans votre site."],
          words: [["Brouillon", "une première version que vous allez améliorer."], ["Ton", "la façon dont un texte sonne : chaleureux, sérieux, joyeux."]],
          slides: [
            { title: "L'IA écrit le premier brouillon", bullets: ["Donnez-lui de vrais faits", "Dites le ton et la limite de mots"] },
            { title: "Exemple de consigne", bullets: ["« Écris un Qui sommes-nous chaleureux de 60 mots", "pour un club gratuit de soutien scolaire (8 à 14 ans).", "Utilise des mots simples. »"] },
            { title: "Vous le retouchez", bullets: ["Corrigez les faits faux ou inventés", "Pas de prix, récompenses ou promesses inventés", "Faites-le vous ressembler"] }
          ],
          tryIt: "Demandez à un assistant d'IA un Qui sommes-nous de 60 mots pour votre groupe. Corrigez un fait ou une phrase, puis collez la version retouchée dans votre site Google Sites.",
          youCanNow: "utiliser l'IA pour rédiger les textes d'un site et les retoucher pour qu'ils soient vrais et vous ressemblent."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier et construire votre site",
        questions: [
          { q: "Que fait un serveur ?", options: ["Il stocke les sites et envoie les pages aux visiteurs", "Il imprime les pages", "Il recharge votre téléphone", "Il écrit vos textes"], answer: 0, why: "Un serveur est l'ordinateur qui garde le site et envoie les pages." },
          { q: "Quelle question a sa place dans le plan de votre site ?", options: ["Quel est mon mot de passe ?", "Quelle est la seule chose que les visiteurs doivent faire ?", "Quel est mon numéro de compte ?", "Qu'ai-je mangé aujourd'hui ?"], answer: 1, why: "Connaître l'action principale aide à concevoir la page." },
          { q: "De quoi avez-vous besoin pour utiliser Google Sites gratuitement ?", options: ["D'un hébergeur payant", "D'un diplôme d'informatique", "D'un compte Google", "D'une carte de crédit"], answer: 2, why: "Google Sites est gratuit avec un compte Google." },
          { q: "Dans Google Sites, où ajoute-t-on des zones de texte et des images ?", options: ["Dans la corbeille", "Dans la barre d'adresse", "Dans l'imprimante", "Dans Insérer, sur le côté droit"], answer: 3, why: "Le panneau Insérer à droite ajoute du contenu." },
          { q: "Le brouillon de l'IA dit que votre club « a gagné un prix national », mais c'est faux. Que faites-vous ?", options: ["Le retirer avant de publier", "Le garder, ça sonne bien", "Le mettre en plus grand", "Demander d'autres prix à l'IA"], answer: 0, why: "Vous êtes responsable de chaque mot ; retirez les faits inventés." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Coder, publier et vérifier",
      lessons: [
        {
          title: "Lire du HTML simple",
          minutes: 5,
          goal: "Lire un court morceau de HTML et changer ses mots en sécurité.",
          text: [
            "Le HTML est le langage dans lequel sont écrites les pages web. Il utilise des balises entre chevrons. La plupart des balises vont par paires : une balise ouvrante comme <h2> et une balise fermante comme </h2>, avec des mots entre les deux.",
            "Balises courantes : <h2> pour un titre, <p> pour un paragraphe, <ul> et <li> pour une liste à puces, <strong> pour le gras, et <a href=\"...\"> pour un lien.",
            "Vous pouvez vous entraîner gratuitement, sans compte, dans un éditeur en ligne comme le W3Schools Tryit Editor : collez le HTML à gauche, cliquez sur Run (Exécuter) et voyez la page à droite. Au début, changez seulement les mots entre les balises, puis relancez."
          ],
          steps: ["Ouvrez un éditeur HTML en ligne gratuit.", "Collez un court morceau de HTML.", "Cliquez sur Run pour voir le résultat.", "Changez les mots entre deux balises et relancez."],
          words: [["HTML", "le langage utilisé pour écrire les pages web."], ["Balise", "une étiquette entre chevrons, comme <p>, qui dit au navigateur ce qu'est un élément."], ["Balise fermante", "la balise de fin avec une barre oblique, comme </p>."]],
          slides: [
            { title: "Le HTML construit les pages web", bullets: ["Des balises entre chevrons", "Ouvrante <p> ... fermante </p>"] },
            { title: "Balises à connaître", bullets: ["<h2> titre, <p> paragraphe", "<ul> et <li> liste à puces", "<strong> gras, <a> lien"] },
            { title: "Entraînez-vous gratuitement", bullets: ["Éditeur en ligne comme W3Schools Tryit", "Collez, Run, regardez", "Changez les mots entre les balises"] }
          ],
          tryIt: "Dans un éditeur HTML en ligne gratuit, tapez <h2>Nos horaires</h2><p>Le lundi de 15 h à 18 h</p>. Cliquez sur Run, changez les horaires, et relancez.",
          youCanNow: "lire des balises HTML simples et changer en sécurité les mots qu'elles contiennent."
        },
        {
          title: "Faire écrire du code par l'IA, puis le tester et le corriger",
          minutes: 6,
          goal: "Demander à l'IA un petit encadré HTML, le tester, corriger un problème et l'ajouter à votre site.",
          text: [
            "Les assistants d'IA savent écrire du HTML. Soyez précis : « Écris seulement du HTML simple, sans JavaScript, pour un encadré avec le titre Horaires et contact, une liste de nos horaires (du lundi au jeudi de 15 h à 18 h), et un lien vers notre e-mail. Utilise un fond clair et un texte en grand. »",
            "Testez toujours le code de l'IA avant de l'utiliser. Collez-le dans l'éditeur en ligne, cliquez sur Run et vérifiez : chaque fait est-il juste ? Le lien marche-t-il ? Le texte est-il facile à lire ? Si quelque chose ne va pas, dites exactement à l'IA quoi corriger, ou corrigez les mots vous-même.",
            "Ne collez pas de code que vous ne comprenez pas venant d'inconnus, ni de code de l'IA qui contient des scripts que vous n'avez pas demandés. Pour ajouter votre encadré à Google Sites : cliquez sur Insérer, puis Intégrer, choisissez Code intégré, collez votre HTML, cliquez sur Suivant puis Insérer."
          ],
          steps: ["Demandez à l'IA seulement du HTML simple, avec vos vrais horaires et contacts.", "Testez-le dans l'éditeur en ligne.", "Corrigez une chose : un fait, un lien ou la taille du texte.", "Dans Google Sites : Insérer, Intégrer, Code intégré, coller, Suivant, Insérer."],
          words: [["Code", "des instructions écrites pour un ordinateur, comme le HTML."], ["Intégrer", "placer un morceau de code ou de contenu à l'intérieur d'une page."], ["Bogue", "une erreur dans le code qui le fait mal fonctionner."]],
          sources: [{ name: "Aide Google Sites : intégrer du HTML ou du JavaScript dans votre site", url: "https://support.google.com/sites/answer/90569" }],
          slides: [
            { title: "Demandez du code clairement", bullets: ["Seulement du HTML simple, sans JavaScript", "Vos vrais horaires et contacts", "Texte grand et facile à lire"] },
            { title: "Testez avant d'utiliser", bullets: ["Collez et Run dans l'éditeur", "Faits justes ? Lien qui marche ? Facile à lire ?", "Corrigez ou demandez à l'IA de corriger une chose"] },
            { title: "Ajoutez-le à Google Sites", bullets: ["Insérer, puis Intégrer", "Choisissez Code intégré et collez", "Suivant, puis Insérer"] }
          ],
          tryIt: "Demandez à l'IA un encadré HTML simple Horaires et contact pour votre groupe. Testez-le, corrigez un problème, et intégrez-le à votre site Google Sites.",
          youCanNow: "obtenir un HTML qui marche grâce à l'IA, le tester, le corriger et l'ajouter à un site."
        },
        {
          title: "Publier et vérifier votre site",
          minutes: 5,
          goal: "Publier votre site, le vérifier sur un téléphone et protéger les informations privées.",
          text: [
            "Quand votre page est prête, cliquez sur Publier en haut à droite de Google Sites. Choisissez une adresse web et publiez. Vous pourrez faire des changements plus tard et republier.",
            "Vérifiez votre site en ligne sur un téléphone, car la plupart des visiteurs en utiliseront un. Le texte est-il assez grand ? Les liens marchent-ils ? Les images s'affichent-elles ? Demandez aussi à un ami d'essayer.",
            "Protégez la vie privée. Ne publiez pas d'adresse personnelle, de numéro de portable personnel ni de photos d'enfants sans l'autorisation écrite d'un parent ou tuteur. Utilisez plutôt un e-mail de groupe ou un lieu de rencontre public."
          ],
          steps: ["Cliquez sur Publier, choisissez l'adresse web, et publiez.", "Ouvrez l'adresse en ligne sur un téléphone.", "Vérifiez la taille du texte, les liens et les images.", "Retirez toute adresse privée, numéro personnel ou photo sans autorisation."],
          words: [["Publier", "mettre votre site en ligne pour que toute personne qui a l'adresse puisse le voir."], ["Adresse web", "le texte que vous tapez pour visiter un site, aussi appelé URL."]],
          slides: [
            { title: "Publiez", bullets: ["Cliquez sur Publier en haut à droite", "Choisissez une adresse web", "Vous pouvez modifier et republier"] },
            { title: "Vérifiez sur un téléphone", bullets: ["Texte assez grand ?", "Les liens marchent ?", "Images affichées ? Faites tester un ami"] },
            { title: "Protégez la vie privée", bullets: ["Pas d'adresse personnelle ni de portable perso", "Pas de photos d'enfants sans autorisation", "Un e-mail de groupe ou un lieu public"] }
          ],
          tryIt: "Tâche finale : publiez votre site Google Sites d'une page avec votre section Qui sommes-nous retouchée et votre encadré Horaires et contact testé. Vérifiez-le sur un téléphone et retirez tout ce qui est privé.",
          youCanNow: "publier un site web qui marche, le vérifier sur un téléphone et en garder les informations privées à l'écart."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Coder, publier et vérifier",
        questions: [
          { q: "Qu'est-ce que le HTML ?", options: ["Un type de téléphone", "Le langage utilisé pour écrire les pages web", "Un mot de passe", "Une application d'e-mail"], answer: 1, why: "Les pages web sont écrites en HTML." },
          { q: "Laquelle est une balise fermante ?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "Les balises fermantes ont une barre oblique." },
          { q: "L'IA vous a donné du HTML pour votre site. Que faites-vous d'abord ?", options: ["Le publier sans regarder", "L'envoyer à des inconnus", "Supprimer votre site", "Le tester dans un éditeur en ligne et vérifier les faits"], answer: 3, why: "Tester attrape les bogues et les faits faux avant que les visiteurs les voient." },
          { q: "Comment ajouter du code HTML à un site Google Sites ?", options: ["Insérer, Intégrer, Code intégré, coller, Suivant, Insérer", "L'imprimer", "L'envoyer par e-mail à Google", "Le taper dans le titre de la page"], answer: 0, why: "C'est le chemin du code intégré dans Google Sites." },
          { q: "Qu'est-ce qu'on peut mettre sans risque sur le site public d'un groupe communautaire ?", options: ["Votre adresse personnelle", "Un e-mail de groupe", "La photo d'un enfant sans autorisation", "Votre numéro de portable personnel"], answer: 1, why: "Un e-mail de groupe permet de vous joindre sans exposer de détails privés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer un site web avec l'IA",
    questions: [
      { q: "Que se passe-t-il quand vous tapez une adresse web ?", options: ["Votre navigateur demande la page à un serveur", "La page s'imprime", "Votre téléphone écrit la page", "Rien"], answer: 0, why: "Le serveur envoie la page à votre navigateur." },
      { q: "Lequel est un navigateur web ?", options: ["Un tableur", "Chrome", "Une imprimante", "Un SMS"], answer: 1, why: "Chrome, Edge et Safari sont des navigateurs." },
      { q: "La première étape pour construire un site est de :", options: ["Payer des publicités", "Choisir seulement des couleurs", "Faire un plan simple", "Publier une page vide"], answer: 2, why: "Un plan dit ce dont le site a besoin." },
      { q: "Quelle section faut-il en général sur un petit site communautaire ?", options: ["L'adresse des membres", "Des numéros de compte", "Des mots de passe", "Comment vous joindre"], answer: 3, why: "Les visiteurs ont besoin d'un moyen de vous contacter." },
      { q: "Google Sites est :", options: ["Un outil gratuit de création de sites avec un compte Google", "Seulement une application payante", "Une compagnie de téléphone", "Un fil de réseau social"], answer: 0, why: "Il est gratuit avec un compte Google." },
      { q: "Un modèle est :", options: ["Un mot de passe", "Une mise en page toute prête que vous remplissez", "Un type de serveur", "Un bogue"], answer: 1, why: "Les modèles donnent une mise en page de départ." },
      { q: "Un thème contrôle :", options: ["Qui peut visiter", "L'adresse web", "Les couleurs et les polices", "Votre compte"], answer: 2, why: "Les thèmes fixent l'apparence du site." },
      { q: "Quelle consigne donnera le meilleur brouillon de Qui sommes-nous ?", options: ["« site web »", "« écris des trucs »", "« aide »", "« Écris un Qui sommes-nous chaleureux de 60 mots pour un club gratuit de soutien scolaire pour les 8 à 14 ans. Utilise des mots simples. »"], answer: 3, why: "Elle donne les faits, la longueur et le ton." },
      { q: "Qui est responsable de chaque mot de votre site ?", options: ["Vous et votre groupe", "L'IA", "Google", "Personne"], answer: 0, why: "L'IA rédige, mais c'est vous qui publiez et assumez les mots." },
      { q: "Qu'est-ce qu'une balise en HTML ?", options: ["Une étiquette de prix", "Une étiquette entre chevrons comme <p>", "Une photo", "Une adresse web"], answer: 1, why: "Les balises disent au navigateur ce qu'est chaque partie." },
      { q: "Quelle balise fait un paragraphe ?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> veut dire paragraphe." },
      { q: "Dans un éditeur HTML en ligne, comment voir votre page ?", options: ["L'imprimer", "L'envoyer par e-mail", "Redémarrer l'ordinateur", "Cliquer sur Run"], answer: 3, why: "Run affiche le résultat de votre HTML." },
      { q: "Pour demander du code à l'IA pour un site de débutant, une demande sûre est :", options: ["« Seulement du HTML simple, sans JavaScript »", "« Ajoute tous les scripts que tu veux »", "« Copie du code d'un site au hasard »", "« Mets mon mot de passe »"], answer: 0, why: "Le HTML simple est plus facile à lire, tester et contrôler." },
      { q: "Un bogue est :", options: ["Un thème de site", "Une erreur dans le code qui le fait mal fonctionner", "Une adresse web", "Un type de modèle"], answer: 1, why: "Les bogues sont des erreurs à trouver et corriger." },
      { q: "Le code de l'IA affiche la mauvaise heure de fermeture. Vous devez :", options: ["Publier quand même", "Supprimer tout le site", "Corriger les mots ou demander à l'IA de corriger ce seul point", "L'ignorer"], answer: 2, why: "Corrigez le problème précis, puis testez à nouveau." },
      { q: "Que veut dire « intégrer » ?", options: ["Supprimer une page", "Imprimer une page", "Changer votre mot de passe", "Placer du code ou du contenu à l'intérieur d'une page"], answer: 3, why: "Intégrer met votre encadré HTML dans le site." },
      { q: "Pour mettre votre site Google Sites en ligne, vous cliquez sur :", options: ["Publier", "Supprimer", "Imprimer", "Annuler"], answer: 0, why: "Publier rend le site visible à son adresse." },
      { q: "Pourquoi vérifier votre site sur un téléphone ?", options: ["Les téléphones ne peuvent pas afficher de sites", "La plupart des visiteurs utilisent un téléphone", "Cela change l'adresse", "La loi l'exige"], answer: 1, why: "Beaucoup de visiteurs verront votre site sur un téléphone." },
      { q: "Qu'est-ce qui ne doit PAS aller sur votre site public ?", options: ["Les horaires du groupe", "Un e-mail de groupe", "La photo d'un enfant sans l'autorisation écrite d'un parent", "Ce que vous proposez"], answer: 2, why: "Les photos d'enfants demandent l'autorisation d'un parent ou tuteur." },
      { q: "Après avoir publié, pouvez-vous modifier votre site Google Sites ?", options: ["Non, jamais", "Seulement en payant", "Seulement en recommençant", "Oui, modifiez et republiez"], answer: 3, why: "Vous pouvez mettre à jour et republier à tout moment." }
    ]
  }
};
