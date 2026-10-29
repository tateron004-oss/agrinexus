"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-family-connection.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-family-connection-fr",
  lang: "fr",
  translationOf: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "L'IA pour communiquer et garder le lien avec la famille",
  skills: "Écrire des messages chaleureux avec l'IA, Envoyer un SMS ou un e-mail, Rejoindre un appel vidéo, Partager une photo, Rester en sécurité dans les messages de famille",
  outcome: "utiliser un assistant IA pour vous aider à écrire un message chaleureux à un proche, l'envoyer par SMS ou par e-mail, puis organiser et rejoindre un appel vidéo avec lui.",
  about: [
    "Ce cours s'adresse aux grands-parents, parents, oncles, tantes et amis qui veulent rester proches de ceux qu'ils aiment, même quand ils vivent loin.",
    "Vous utiliserez un assistant IA pour trouver les bons mots pour un anniversaire, un mot de bon rétablissement ou un simple bonjour. Ensuite, vous enverrez votre message, partagerez une photo et rejoindrez un appel vidéo pour voir le visage de votre famille.",
    "Chaque leçon dure environ cinq minutes et avance pas à pas. Lisez la leçon, regardez les diapositives et faites l'exercice « Essayez maintenant ». C'est une bonne idée de vous entraîner avec un proche qui utilise déjà ces outils. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Utilisez un assistant IA pour écrire un court message chaleureux invitant un proche à un appel vidéo. Faites un changement pour qu'il vous ressemble, envoyez-le par SMS ou par e-mail, puis rejoignez l'appel à l'heure convenue et dites bonjour.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées qui veulent rester proches de leurs enfants, petits-enfants et autres proches qui vivent loin ou sont très occupés. Beaucoup se sentent mises à l'écart quand la famille communique par SMS, en vidéo et par photos.",
    startingPoint: "Elles savent passer des appels et parfois envoyer des SMS simples. Certaines ont un smartphone ou une tablette mais n'ont jamais utilisé d'assistant IA, fait un copier-coller, rejoint un appel vidéo ou partagé une photo.",
    gap: "La vie de famille passe maintenant par les SMS, les appels vidéo et le partage de photos. Les seniors qui savent écrire un message chaleureux avec l'aide de l'IA, l'envoyer, rejoindre un appel vidéo et partager une photo restent en contact et se sentent moins seuls, et ceux qui savent repérer une fausse urgence familiale protègent leurs économies.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : un smartphone, une tablette ou un ordinateur avec une caméra ; les petits boutons peuvent être difficiles à toucher",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille, plus un appel d'essai avec la famille",
      "Les membres de la famille utilisent des applications différentes ; les apprenants utilisent celle que leur famille utilise déjà",
      "Risque d'arnaque élevé : n'envoyez jamais d'argent ni de code avant d'avoir appelé la famille sur un numéro connu"
    ],
    prerequisites: "« L'IA pour les seniors : utiliser un assistant IA » est utile avant, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec un assistant IA gratuit", action: "demander un brouillon de message familial qui dit à qui il s'adresse, de quoi il parle, le ton et la longueur", standard: "pour que le premier brouillon convienne à la personne" },
    { id: "O2", condition: "À partir d'un brouillon de l'IA", action: "modifier le brouillon pour qu'il vous ressemble et y ajouter un détail personnel", standard: "pour qu'il sonne naturel quand vous le lisez à voix haute" },
    { id: "O3", condition: "À partir d'un message terminé dans l'application d'IA", action: "le copier et le coller dans un SMS ou un e-mail, puis l'envoyer", standard: "à la bonne personne, vérifié avant d'appuyer sur Envoyer" },
    { id: "O4", condition: "À partir d'un appel vidéo ou d'un lien envoyé par un membre de la famille", action: "rejoindre l'appel et activer le micro et la caméra", standard: "en étant bien vu et bien entendu" },
    { id: "O5", condition: "Avec l'appareil photo de votre téléphone ou de votre tablette", action: "prendre une photo et la partager avec un membre de la famille avec une courte légende", standard: "sans aide" },
    { id: "O6", condition: "Quand un message ou un appel dit qu'un membre de la famille a des ennuis et a besoin d'argent", action: "repérer les signes d'une arnaque à la fausse urgence familiale et vérifier en appelant un numéro que vous avez déjà", standard: "sans envoyer d'argent ni de code avant d'avoir vérifié" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver les bons mots",
      lessons: [
        {
          objectives: ["O1"],
          title: "Utiliser l'IA pour écrire un message à la famille",
          minutes: 5,
          goal: "Demander à un assistant IA de préparer un court message pour un proche.",
          text: [
            "Parfois, le plus difficile pour garder le contact, c'est de savoir quoi dire. Un assistant IA comme ChatGPT, Microsoft Copilot ou Google Gemini peut écrire un premier brouillon pour vous en quelques secondes.",
            "Dites-lui pour qui est le message, de quoi il parle et sur quel ton vous le voulez. Par exemple : « Écris un court SMS joyeux à mon petit-fils Léo, qui vient de finir sa première semaine à l'université. Je suis fier de lui. Moins de 40 mots. »",
            "Le brouillon est un point de départ, pas le dernier mot. Vous connaissez votre famille ; l'assistant, non."
          ],
          steps: ["Ouvrez votre assistant IA.", "Dites pour qui est le message et de quoi il parle.", "Dites quel ton il doit avoir : joyeux, doux, drôle ou simple.", "Dites quelle longueur il doit faire."],
          words: [["Brouillon", "une première version d'un message que vous pouvez modifier avant de l'envoyer."], ["Ton", "la façon dont un message sonne, par exemple chaleureux, drôle ou sérieux."]],
          slides: [
            { title: "Vous ne trouvez pas les mots ?", bullets: ["Un assistant IA peut écrire un premier brouillon", "Cela ne prend que quelques secondes"] },
            { title: "Dites-lui quatre choses", bullets: ["Pour qui c'est", "De quoi ça parle", "Le ton voulu", "La longueur voulue"] },
            { title: "À retenir", bullets: ["Le brouillon est un point de départ", "C'est vous qui connaissez le mieux votre famille"] }
          ],
          tryIt: "Pensez à un proche dont vous aimeriez avoir des nouvelles. Demandez à un assistant d'écrire un court message chaleureux sur quelque chose de vrai, comme un anniversaire, un nouvel emploi ou un simple bonjour.",
          youCanNow: "demander à un assistant IA de préparer un court message pour une personne que vous aimez.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un brouillon de message fait par l'IA ?", options: ["Le message final que l'IA envoie à votre place", "Un message de votre famille", "Un point de départ que vous pouvez modifier", "Un code secret"], answer: 2, why: "Le brouillon est un point de départ ; vous connaissez votre famille, l'assistant non." },
            { objective: "O1", q: "Vous voulez un message pour l'anniversaire de votre petite-fille. Que dites-vous à l'assistant ?", options: ["À qui il s'adresse, de quoi il parle, quel ton il doit avoir et quelle longueur", "Seulement le mot \"anniversaire\"", "Son adresse et son numéro de téléphone", "Rien ; il devinera"], answer: 0, why: "Dire à qui, quoi, le ton et la longueur donne un brouillon qui convient." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Donner au message votre propre voix",
          minutes: 4,
          goal: "Modifier un brouillon de l'IA pour qu'il vous ressemble.",
          text: [
            "Les brouillons de l'IA peuvent sembler un peu raides ou trop recherchés. Votre famille remarquera si ce n'est pas votre style, alors faites-le vôtre.",
            "Vous pouvez demander à l'assistant : « Rends-le plus familier. » « Utilise des mots plus courts. » « Ajoute que je ferai sa tarte aux pommes préférée quand il viendra. » Ou vous pouvez simplement changer les mots vous-même.",
            "Ajoutez un détail que vous seul connaissez : un surnom, un souvenir, une blague entre vous. C'est cela qui rend un message personnel."
          ],
          steps: ["Lisez le brouillon à voix haute.", "Repérez les mots que vous ne diriez jamais.", "Demandez un changement ou changez les mots vous-même.", "Ajoutez un détail personnel que vous seul connaissez."],
          words: [["Détail personnel", "quelque chose de propre à vous et à la personne, comme un souvenir ou un surnom."]],
          slides: [
            { title: "Faites-le vôtre", bullets: ["Lisez le brouillon à voix haute", "Changez les mots que vous ne diriez jamais"] },
            { title: "Demandez des changements", bullets: ["« Rends-le plus familier. »", "« Utilise des mots plus courts. »", "« Ajoute que je lui prépare sa tarte préférée. »"] },
            { title: "Ajoutez une touche personnelle", bullets: ["Un surnom", "Un souvenir commun", "Une blague entre vous"] }
          ],
          tryIt: "Reprenez votre brouillon de la leçon 1. Lisez-le à voix haute, faites un changement pour qu'il vous ressemble et ajoutez un détail personnel.",
          youCanNow: "transformer un brouillon de l'IA en un message qui vous ressemble.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi modifier un brouillon de l'IA avant de l'envoyer ?", options: ["L'IA fait toujours des messages trop courts", "Pour qu'il vous ressemble, car votre famille remarquera si ce n'est pas le cas", "Parce que les brouillons de l'IA sont toujours impolis", "Parce que les SMS doivent être longs"], answer: 1, why: "Les brouillons de l'IA peuvent sembler raides ; les rendre personnels garde le lien chaleureux." },
            { objective: "O2", q: "Votre brouillon est correct mais un peu fade. Qu'ajoutez-vous ?", options: ["Un long poème", "Vos coordonnées bancaires", "Un détail que vous seul connaissez, comme un surnom ou un souvenir", "Beaucoup de mots compliqués"], answer: 2, why: "Un surnom, un souvenir ou une blague de famille rend un message personnel." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Envoyer votre message par SMS ou par e-mail",
          minutes: 6,
          goal: "Copier votre message et l'envoyer par SMS ou par e-mail.",
          text: [
            "Quand votre message est prêt, il faut le faire passer de l'assistant IA à votre application de SMS ou d'e-mail. On le fait en copiant et en collant.",
            "Pour copier sur un téléphone ou une tablette : appuyez longuement sur le texte jusqu'à ce qu'un menu apparaisse, puis touchez Copier. Beaucoup d'applications d'IA affichent aussi un petit bouton de copie sous la réponse. Sur un ordinateur, sélectionnez le texte avec la souris, faites un clic droit et choisissez Copier.",
            "Ensuite, ouvrez votre application Messages ou d'e-mail, commencez un nouveau message à votre proche, appuyez longuement dans la zone de message et touchez Coller (sur un ordinateur, clic droit puis Coller). Relisez une dernière fois et envoyez."
          ],
          steps: ["Copiez le message : appui long puis Copier, ou bouton de copie.", "Ouvrez votre application Messages ou d'e-mail.", "Commencez un nouveau message à votre proche.", "Appuyez longuement dans la zone de message et touchez Coller.", "Relisez une fois, puis touchez Envoyer."],
          words: [["Copier-coller", "prendre un texte à un endroit et le mettre ailleurs, sans le retaper."], ["SMS", "un court message écrit envoyé d'un téléphone à un autre."]],
          slides: [
            { title: "Copiez le message", bullets: ["Appui long sur le texte, puis Copier", "Ou touchez le bouton de copie sous la réponse", "Ordinateur : clic droit, puis Copier"] },
            { title: "Collez-le", bullets: ["Ouvrez Messages ou l'e-mail", "Commencez un nouveau message", "Appui long, puis Coller"] },
            { title: "Avant d'envoyer", bullets: ["Vérifiez le nom de la personne", "Relisez une fois", "Touchez Envoyer"] }
          ],
          tryIt: "Copiez votre message terminé de la leçon 2 et envoyez-le à votre proche par SMS ou par e-mail.",
          youCanNow: "copier un message d'un assistant IA et l'envoyer par SMS ou par e-mail.",
          quickCheck: [
            { objective: "O3", q: "Que fait Coller ?", options: ["Il met le texte que vous avez copié à un nouvel endroit", "Il supprime votre message", "Il envoie le message tout de suite", "Il prend une photo"], answer: 0, why: "Vous copiez un texte dans une application et vous le collez dans la zone de message d'une autre." },
            { objective: "O3", q: "Vous avez copié votre message dans l'application d'IA. Que faites-vous ensuite ?", options: ["Éteindre votre téléphone", "Le copier encore une fois", "Appeler le membre de la famille", "Ouvrir Messages ou votre e-mail, commencer un message pour cette personne et le coller"], answer: 3, why: "Ouvrez l'application Messages ou d'e-mail, commencez un nouveau message et collez le texte." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver les bons mots",
        questions: [
          { objective: "O1", q: "Que faut-il dire à l'assistant IA quand vous lui demandez un message pour la famille ?", options: ["Votre numéro de compte bancaire", "Un seul mot", "Pour qui c'est, de quoi ça parle, le ton et la longueur", "Votre mot de passe"], answer: 2, why: "Ces quatre éléments aident l'assistant à écrire un brouillon utile." },
          { objective: "O2", q: "Le brouillon est trop recherché. Que faites-vous ?", options: ["Je lui demande d'être plus familier ou je change les mots moi-même", "Je supprime l'application", "Je l'envoie quand même", "J'abandonne"], answer: 0, why: "Vous pouvez demander des changements ou le modifier pour qu'il vous ressemble." },
          { objective: "O2", q: "Qu'est-ce qui rend un message personnel ?", options: ["Copier une carte du magasin", "Des mots très longs", "Beaucoup de points d'exclamation", "Un détail que vous seul connaissez, comme un souvenir"], answer: 3, why: "Un souvenir commun ou un surnom le rend vôtre." },
          { objective: "O3", q: "Sur un téléphone, comment copie-t-on du texte en général ?", options: ["On secoue le téléphone", "Appui long sur le texte, puis Copier", "On éteint le téléphone", "On le prend en photo"], answer: 1, why: "L'appui long ouvre un menu avec Copier." },
          { objective: "O3", q: "Que faut-il vérifier avant de toucher Envoyer ?", options: ["Seulement le niveau de batterie", "Que le message part à la bonne personne", "Rien", "La météo"], answer: 1, why: "Vérifier le nom évite d'envoyer votre message à la mauvaise personne." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Voir sa famille et partager avec elle",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rejoindre un appel vidéo",
          minutes: 6,
          goal: "Rejoindre un appel vidéo avec un proche et utiliser la caméra et le micro.",
          text: [
            "Un appel vidéo vous permet de voir et d'entendre quelqu'un en même temps, où qu'il soit. Les applications gratuites courantes sont FaceTime (sur iPhone et iPad), WhatsApp, Google Meet et Zoom. Les familles choisissent souvent celle que la plupart utilisent déjà.",
            "Le plus simple pour commencer est de laisser un proche vous appeler. Quand l'appel arrive, touchez le bouton vert ou Accepter. S'il vous envoie un lien, touchez le lien à l'heure convenue, puis touchez Rejoindre.",
            "Une fois dans l'appel, trouvez les boutons du micro et de la caméra. Si un bouton est barré, il est désactivé ; touchez-le pour l'activer. Tenez l'appareil à hauteur des yeux, avec la lumière devant vous et non derrière, pour qu'on voie votre visage."
          ],
          steps: ["Mettez-vous d'accord avec votre proche sur une heure et une application.", "Quand l'appel arrive, touchez Accepter, ou touchez le lien envoyé puis Rejoindre.", "Vérifiez que le micro et la caméra sont activés.", "Tenez l'appareil à hauteur des yeux, la lumière devant vous.", "Touchez le bouton rouge pour terminer l'appel."],
          words: [["Appel vidéo", "un appel où l'on se voit et s'entend à l'écran."], ["Lien", "un texte bleu ou souligné que l'on touche pour aller quelque part, par exemple dans un appel."], ["Couper le micro", "désactiver votre micro pour que les autres ne vous entendent pas."]],
          slides: [
            { title: "Applications d'appel vidéo gratuites", bullets: ["FaceTime sur iPhone et iPad", "WhatsApp, Google Meet, Zoom", "Utilisez celle de votre famille"] },
            { title: "Rejoindre", bullets: ["Touchez Accepter quand on vous appelle", "Ou touchez le lien, puis Rejoindre", "Rejoignez à l'heure convenue"] },
            { title: "Pendant l'appel", bullets: ["Un bouton barré est désactivé", "Activez le micro et la caméra", "Le bouton rouge termine l'appel"] },
            { title: "Soyez bien visible", bullets: ["Appareil à hauteur des yeux", "Lumière devant vous, pas derrière"] }
          ],
          tryIt: "Demandez à un proche de vous appeler sur l'application qu'il utilise. Répondez, vérifiez que votre caméra et votre micro sont activés, dites bonjour, puis terminez l'appel avec le bouton rouge.",
          youCanNow: "rejoindre un appel vidéo, activer ou couper votre caméra et votre micro, et terminer l'appel.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un appel vidéo ?", options: ["Un film enregistré", "Un appel où vous vous voyez et vous entendez en même temps", "Un message vocal", "Un album photo"], answer: 1, why: "Un appel vidéo vous permet de voir et d'entendre quelqu'un en même temps, où qu'il soit." },
            { objective: "O4", q: "Pendant un appel vidéo, votre famille dit qu'elle ne voit pas bien votre visage. Que changez-vous ?", options: ["Monter le volume", "Raccrocher", "Vous asseoir dos à une fenêtre lumineuse", "Tenir l'appareil à hauteur des yeux, avec la lumière devant vous"], answer: 3, why: "L'appareil à hauteur des yeux et la lumière devant vous permettent de bien voir votre visage." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Partager une photo avec la famille",
          minutes: 5,
          goal: "Prendre une photo et l'envoyer à un proche.",
          text: [
            "Partager des photos est l'un des meilleurs moyens de rester proches. Vous pouvez envoyer une photo de votre jardin, d'un plat que vous avez cuisiné ou d'une page d'un vieil album.",
            "Ouvrez l'application Appareil photo, visez ce que vous voulez et touchez le grand bouton rond. Pour l'envoyer, ouvrez l'application Photos ou Galerie, touchez la photo, puis le bouton Partager (souvent un carré avec une flèche, ou trois points reliés par des traits). Choisissez Messages, e-mail ou WhatsApp, puis votre proche.",
            "Un assistant IA peut vous aider à écrire une légende, par exemple : « Écris une légende courte et amusante pour la photo de ma première tomate mûre de l'été. »"
          ],
          steps: ["Ouvrez l'Appareil photo et touchez le bouton rond.", "Ouvrez Photos ou Galerie et touchez la photo.", "Touchez le bouton Partager.", "Choisissez Messages, e-mail ou WhatsApp, puis votre proche.", "Ajoutez quelques mots et envoyez."],
          words: [["Bouton Partager", "un bouton qui envoie une photo ou une page à quelqu'un d'autre."], ["Légende", "une courte ligne de texte qui accompagne une photo."]],
          slides: [
            { title: "Prenez la photo", bullets: ["Ouvrez l'Appareil photo", "Touchez le grand bouton rond"] },
            { title: "Envoyez la photo", bullets: ["Ouvrez Photos ou Galerie", "Touchez la photo, puis Partager", "Choisissez une application, puis votre proche"] },
            { title: "Ajoutez une légende", bullets: ["Écrivez quelques mots vous-même", "Ou demandez à l'IA une légende courte et amusante"] }
          ],
          tryIt: "Prenez en photo quelque chose dont vous êtes fier. Demandez à un assistant IA une courte légende, puis envoyez la photo avec la légende à un proche.",
          youCanNow: "prendre une photo, ajouter une légende et la partager avec votre famille.",
          quickCheck: [
            { objective: "O5", q: "Que fait le bouton Partager dans l'application Photos ?", options: ["Il supprime la photo", "Il agrandit la photo", "Il vous permet d'envoyer la photo par Messages, par e-mail ou par WhatsApp", "Il prend une nouvelle photo"], answer: 2, why: "Touchez la photo, touchez Partager, puis choisissez comment et à qui l'envoyer." },
            { objective: "O5", q: "Vous voulez quelques mots amusants pour accompagner une photo de votre jardin. Que pouvez-vous faire ?", options: ["Demander à un assistant IA d'écrire une courte légende", "Ne jamais mettre de mots avec une photo", "La publier pour des inconnus", "Prendre dix autres photos"], answer: 0, why: "Un assistant IA peut vous aider à écrire une courte légende pour une photo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rester en sécurité dans les messages de famille",
          minutes: 5,
          goal: "Repérer un faux message d'« urgence familiale » et le vérifier en sécurité.",
          text: [
            "Les escrocs se font parfois passer pour un petit-enfant ou un parent en difficulté. Ils peuvent écrire depuis un nouveau numéro (« Coucou Mamie, j'ai perdu mon téléphone ») ou même utiliser l'IA pour imiter une voix au téléphone. Ils demandent en général de l'argent vite, souvent par carte cadeau, virement ou application de paiement, et vous demandent de garder le secret.",
            "Votre vraie famille peut attendre quelques minutes pendant que vous vérifiez. Raccrochez ou arrêtez de répondre, puis appelez votre proche, ou ses parents, au numéro que vous avez déjà enregistré.",
            "Certaines familles choisissent un mot de code secret, connu d'elles seules, à utiliser en cas d'urgence. N'envoyez jamais d'argent avant d'avoir parlé à la personne sur un numéro de confiance. Aux États-Unis, on peut signaler une arnaque à la Federal Trade Commission (FTC, l'agence fédérale de protection des consommateurs) sur ReportFraud.ftc.gov."
          ],
          steps: ["Repérez les signes : nouveau numéro, urgence, demande d'argent, secret.", "Arrêtez de répondre ou raccrochez.", "Appelez votre proche au numéro que vous avez déjà.", "Choisissez un mot de code familial pour les urgences.", "Signalez les arnaques sur ReportFraud.ftc.gov."],
          words: [["Arnaque aux grands-parents", "une ruse où quelqu'un se fait passer pour un petit-enfant en difficulté pour obtenir de l'argent."], ["Mot de code", "un mot secret choisi par la famille pour prouver qui appelle vraiment."]],
          slides: [
            { title: "La fausse urgence", bullets: ["« Coucou Mamie, j'ai perdu mon téléphone »", "Une voix imitée au téléphone", "Demande de l'argent vite et en secret"] },
            { title: "Que faire", bullets: ["Arrêtez de répondre ou raccrochez", "Appelez la personne au numéro que vous avez déjà", "N'envoyez jamais d'argent avant d'être sûr"] },
            { title: "Soyez prêt", bullets: ["Choisissez un mot de code familial", "Signalez les arnaques sur ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC : Comment éviter une arnaque (en anglais)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC : Signaler une fraude (en anglais)", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tâche finale : demandez à un assistant IA de vous aider à écrire un court message chaleureux invitant un proche à un appel vidéo. Faites qu'il vous ressemble, envoyez-le par SMS ou par e-mail et rejoignez l'appel à l'heure convenue. Pendant la conversation, choisissez ensemble un mot de code familial.",
          youCanNow: "garder le contact avec votre famille par message, photo et appel vidéo, et vérifier en sécurité un message « familial » suspect.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un mot de code familial ?", options: ["Le mot de passe de votre téléphone", "Un mot que seule votre famille connaît, pour prouver qui appelle en cas d'urgence", "Le nom de votre application vidéo", "Un mot que vous publiez en ligne"], answer: 1, why: "Certaines familles choisissent un mot secret pour vérifier qui appelle vraiment." },
            { objective: "O6", q: "Une voix qui ressemble à celle de votre petit-fils vous demande d'envoyer de l'argent vite et de garder le secret. Que faites-vous d'abord ?", options: ["Envoyer l'argent et poser des questions après", "Garder le secret comme demandé", "Vous arrêter et appeler votre petit-fils ou ses parents au numéro que vous avez déjà", "Lui donner le code reçu sur votre téléphone"], answer: 2, why: "L'urgence, le secret et les demandes d'argent sont des signes d'arnaque ; rappelez sur un numéro de confiance." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Voir sa famille et partager avec elle",
        questions: [
          { objective: "O4", q: "Un proche vous envoie un lien pour un appel vidéo. Que faites-vous à l'heure convenue ?", options: ["Je le supprime", "J'éteins mon téléphone", "Je le transfère à des inconnus", "Je touche le lien, puis Rejoindre"], answer: 3, why: "Toucher le lien puis Rejoindre vous fait entrer dans l'appel." },
          { objective: "O4", q: "Le bouton du micro est barré. Qu'est-ce que cela veut dire ?", options: ["Votre micro est désactivé", "L'appel est terminé", "La batterie est faible", "Votre caméra est cassée"], answer: 0, why: "Un bouton barré veut dire qu'il est désactivé." },
          { objective: "O4", q: "Où doit se trouver la lumière pendant un appel vidéo ?", options: ["Derrière vous", "Il ne faut pas de lumière", "Devant vous", "Sous la table"], answer: 2, why: "La lumière devant vous permet à votre famille de voir votre visage." },
          { objective: "O5", q: "Comment envoyer une photo depuis l'application Photos ?", options: ["Retourner le téléphone", "Faire une capture d'écran de la batterie", "Supprimer la photo", "Toucher la photo, puis Partager, puis choisir une personne"], answer: 3, why: "Le bouton Partager envoie la photo vers l'application et la personne choisies." },
          { objective: "O6", q: "Un SMS d'un nouveau numéro dit : « Papi, j'ai des ennuis, envoie des cartes cadeaux et ne dis rien à Maman. » Que faites-vous ?", options: ["J'achète les cartes cadeaux", "Je réponds avec mon numéro de compte", "J'appelle mon petit-enfant ou ses parents au numéro que j'ai déjà", "Je garde le secret"], answer: 2, why: "L'urgence, le secret et les cartes cadeaux sont des signes d'arnaque ; vérifiez sur un numéro de confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour communiquer et garder le lien avec la famille",
    questions: [
      { objective: "O1", q: "Comment un assistant IA peut-il vous aider à garder le contact avec votre famille ?", options: ["Il peut leur rendre visite à votre place", "Il peut écrire un premier brouillon de message", "Il connaît leurs numéros de téléphone", "Il envoie de l'argent pour vous"], answer: 1, why: "Préparer des messages est un point fort des assistants IA." },
      { objective: "O1", q: "Quelle consigne donnera le meilleur message pour la famille ?", options: ["« Écris un court SMS joyeux à ma petite-fille Ava, qui a gagné son match de football. Moins de 40 mots. »", "« message »", "« SMS »", "« bonjour »"], answer: 0, why: "Elle dit qui, quoi, le ton et la longueur." },
      { objective: "O1", q: "Qu'est-ce qu'un brouillon ?", options: ["Une première version que l'on peut modifier", "Un vent froid", "La version finale", "Un type d'application"], answer: 0, why: "Un brouillon est un point de départ à améliorer." },
      { objective: "O1", q: "Que veut dire le « ton » d'un message ?", options: ["La sonnerie", "La façon dont le message sonne, par exemple chaleureux ou drôle", "La taille des caractères", "Le numéro de téléphone"], answer: 1, why: "Le ton, c'est l'impression que le message donne au lecteur." },
      { objective: "O2", q: "Un bon moyen de vérifier qu'un brouillon vous ressemble est de :", options: ["L'envoyer sans le lire", "Le rallonger", "Le lire à voix haute", "Ajouter de grands mots"], answer: 2, why: "La lecture à voix haute révèle les mots que vous ne diriez jamais." },
      { objective: "O2", q: "Qu'est-ce qui rend un message personnel ?", options: ["Des mots recherchés", "Tout écrire en majuscules", "Le copier d'une carte", "Un souvenir commun ou un surnom"], answer: 3, why: "Les détails que vous seul connaissez le rendent vôtre." },
      { objective: "O3", q: "Pour copier du texte sur un téléphone, on fait en général :", options: ["On touche l'appareil photo", "On secoue le téléphone", "Un appui long, puis Copier", "On monte le volume"], answer: 2, why: "L'appui long ouvre le menu Copier." },
      { objective: "O3", q: "Après avoir copié, comment mettre le message dans un SMS ?", options: ["Appui long dans la zone de message, puis Coller", "Retaper chaque mot", "Prendre une photo", "Appeler la personne"], answer: 0, why: "Coller place le texte copié dans la zone de message." },
      { objective: "O3", q: "Que faut-il vérifier avant de toucher Envoyer ?", options: ["Rien", "La météo", "Votre mot de passe", "Le nom de la personne"], answer: 3, why: "Vérifier le nom évite d'envoyer à la mauvaise personne." },
      { objective: "O4", q: "Laquelle est une application d'appel vidéo ?", options: ["Calculatrice", "FaceTime", "Horloge", "Lampe torche"], answer: 1, why: "FaceTime, WhatsApp, Google Meet et Zoom permettent les appels vidéo." },
      { objective: "O4", q: "Quand un proche vous appelle en vidéo, vous touchez :", options: ["Le bouton rouge", "Le bouton vert ou Accepter", "La pellicule photo", "Les Réglages"], answer: 1, why: "Le vert ou Accepter répond à l'appel ; le rouge le termine." },
      { objective: "O4", q: "Un bouton barré est :", options: ["Activé", "En train d'enregistrer", "Cassé", "Désactivé"], answer: 3, why: "Un bouton barré est désactivé." },
      { objective: "O4", q: "Pour terminer un appel vidéo, on touche en général :", options: ["Le bouton rouge", "Le bouton vert", "Le bouton du volume", "Le micro"], answer: 0, why: "Le bouton rouge termine l'appel." },
      { objective: "O4", q: "Où tenir l'appareil pendant un appel vidéo ?", options: ["Près du sol", "Derrière la tête", "À hauteur des yeux", "Dans la poche"], answer: 2, why: "À hauteur des yeux, votre famille voit votre visage." },
      { objective: "O5", q: "Le bouton Partager sert à :", options: ["Supprimer une photo", "Éteindre le téléphone", "Prendre une photo", "Envoyer une photo à quelqu'un"], answer: 3, why: "Partager envoie la photo par l'application choisie." },
      { objective: "O5", q: "Une légende, c'est :", options: ["Un numéro de téléphone", "Un type d'appareil photo", "Une courte ligne de texte avec une photo", "Un mot de passe"], answer: 2, why: "Une légende décrit la photo." },
      { objective: "O6", q: "Un message d'un nouveau numéro dit venir de votre petit-enfant et demande vite de l'argent. La première chose à faire est de :", options: ["Envoyer de l'argent", "Vous arrêter et appeler votre petit-enfant au numéro que vous avez déjà", "Donner vos coordonnées bancaires", "Garder le secret"], answer: 1, why: "Vérifier sur un numéro connu arrête cette arnaque." },
      { objective: "O6", q: "Les escrocs peuvent utiliser l'IA pour :", options: ["Imiter la voix d'un proche", "Réparer votre téléphone", "Vous envoyer une lettre de la banque", "Venir chez vous"], answer: 0, why: "L'imitation de voix par IA sert dans les arnaques à la fausse urgence familiale." },
      { objective: "O6", q: "À quoi peut servir un mot de code familial ?", options: ["À prouver qui appelle vraiment en cas d'urgence", "À déverrouiller votre téléphone", "À rendre les appels vidéo plus nets", "À payer les factures"], answer: 0, why: "Seule votre vraie famille connaît le mot de code." },
      { objective: "O6", q: "Où peut-on signaler une arnaque aux États-Unis ?", options: ["Dans une publicité", "Sur ReportFraud.ftc.gov", "Au numéro de l'appelant", "Dans un commentaire sur les réseaux sociaux"], answer: 1, why: "La Federal Trade Commission reçoit les signalements d'arnaques sur ReportFraud.ftc.gov." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      6,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Demande claire à l'IA",
        objective: "O1",
        notYet: "La consigne dit seulement \"écris un message\".",
        meets: "La consigne dit à qui il s'adresse, que c'est une invitation à un appel vidéo, le ton et la longueur.",
        exceeds: "Le premier brouillon n'avait presque pas besoin de changements."
      },
      {
        name: "Il vous ressemble",
        objective: "O2",
        notYet: "A envoyé le brouillon de l'IA tel quel.",
        meets: "A fait au moins un changement pour qu'il vous ressemble.",
        exceeds: "A ajouté un détail personnel que vous seul connaissez, comme un surnom ou un souvenir."
      },
      {
        name: "Envoyé à la bonne personne",
        objective: "O3",
        notYet: "Le message n'a pas été envoyé, ou il est parti à la mauvaise personne.",
        meets: "A copié, collé et envoyé le message par SMS ou par e-mail à la bonne personne.",
        exceeds: "A vérifié encore une fois le nom et les mots avant d'envoyer."
      },
      {
        name: "Appel rejoint",
        objective: "O4",
        notYet: "N'a pas pu rejoindre l'appel, ou le micro ou la caméra sont restés coupés.",
        meets: "A rejoint l'appel à l'heure prévue avec le micro et la caméra activés, et a dit bonjour.",
        exceeds: "A tenu l'appareil à hauteur des yeux avec une bonne lumière et a terminé l'appel avec le bouton rouge."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir fait un appel vidéo ou partagé une photo avec leur famille dans les 30 jours (questionnaire de suivi)",
      "Apprenants dont la famille choisit un mot de code familial, et qui disent avoir vérifié un message familial suspect",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone, une tablette ou un ordinateur avec une caméra et Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini) et l'application d'appel vidéo de la famille",
      "Un membre de la famille ou un aidant qui accepte de participer à un appel vidéo d'essai",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Avant le cours, demandez aux apprenants quelle application vidéo leur famille utilise déjà et entraînez-vous avec celle-là.",
      "Organisez des appels vidéo d'essai entre apprenants dans la salle avant d'appeler la famille.",
      "Montrez les étapes du copier-coller sur l'appareil de chaque apprenant ; les menus changent d'un téléphone à l'autre.",
      "Parlez de l'arnaque à la fausse urgence familiale avec un jeu de rôle, et encouragez les apprenants à choisir un mot de code familial.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
