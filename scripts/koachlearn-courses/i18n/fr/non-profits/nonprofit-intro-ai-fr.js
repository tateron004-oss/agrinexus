"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-intro-ai-fr",
  lang: "fr",
  translationOf: "nonprofit-intro-ai",
  category: "Non Profits",
  name: "Introduction à l'IA pour les associations",
  skills: "Expliquer l'IA à votre équipe, Rédiger des demandes claires pour les tâches associatives, Améliorer un brouillon, Vérifier les faits, Protéger la vie privée des donateurs et des bénéficiaires",
  outcome: "utiliser un assistant d'IA gratuit pour rédiger un vrai texte associatif, comme un mot de remerciement aux bénévoles ou l'annonce d'un événement : demander clairement, améliorer le brouillon, vérifier chaque fait, et laisser de côté les informations des donateurs et des bénéficiaires.",
  about: [
    "Ce cours s'adresse aux responsables, salariés et bénévoles d'associations et d'organisations religieuses qui ont entendu parler de l'IA mais l'ont peu utilisée, ou qui veulent l'utiliser de façon plus sûre.",
    "Vous apprendrez ce qu'est un assistant d'IA, comment en ouvrir un gratuit, comment demander les textes dont votre organisation a besoin chaque semaine, comment améliorer et vérifier le brouillon, et comment protéger les personnes que vous servez.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Un court contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Utilisez un assistant d'IA gratuit pour rédiger un mot de remerciement aux bénévoles qui ont aidé lors d'un événement récent (une collecte alimentaire, une journée de nettoyage ou un repas paroissial). Utilisez une demande en trois parties, demandez deux améliorations, vérifiez chaque fait et chaque date dans vos propres registres, assurez-vous qu'aucun détail privé de bénévole ou de donateur n'est dans la demande, et retouchez le mot final pour qu'il ressemble à votre organisation.",
  chapters: [
    {
      name: "Chapitre 1 : Ce que l'IA peut faire pour une association",
      lessons: [
        {
          title: "Ce qu'est un assistant d'IA, et ce qu'il n'est pas",
          minutes: 4,
          goal: "Expliquer à un collègue ou un bénévole ce qu'un assistant d'IA peut et ne peut pas faire pour votre organisation.",
          text: [
            "Un assistant d'IA est un programme informatique avec lequel on discute en mots de tous les jours. Vous tapez une demande, et il écrit une réponse en quelques secondes. Parmi les plus connus avec une version gratuite : ChatGPT, Microsoft Copilot et Google Gemini.",
            "Pour une association, il est bon pour les premiers brouillons : mots de remerciement, articles de bulletin, messages d'inscription des bénévoles, ordres du jour de réunion, publications sur les réseaux sociaux, et résumés courts de longs rapports.",
            "Ce n'est pas un salarié, ni un avocat, ni un comptable, ni un chargé de subventions. Il ne connaît ni vos donateurs, ni vos programmes, ni votre communauté, et il peut se tromper même quand il a l'air sûr de lui. Une personne de votre équipe relit et décide toujours."
          ],
          words: [["IA", "abréviation d'intelligence artificielle : des programmes informatiques qui font des tâches qui demandent d'habitude une personne, comme écrire ou résumer."], ["Assistant d'IA", "un programme d'IA avec lequel on discute en tapant ou en parlant."], ["Premier brouillon", "une première version qu'une personne vérifie et améliore ensuite."]],
          slides: [
            { title: "Un assistant d'IA, c'est...", bullets: ["Un programme avec lequel on discute", "Vous demandez en mots de tous les jours", "Il écrit un brouillon en quelques secondes"] },
            { title: "Bon pour les premiers brouillons associatifs", bullets: ["Mots de remerciement et bulletins", "Messages aux bénévoles et ordres du jour", "Résumés courts de longs rapports"] },
            { title: "Ce n'est PAS", bullets: ["Un avocat, un comptable ou un chargé de subventions", "Toujours juste, même quand il a l'air sûr", "Celui qui décide : c'est votre équipe"] }
          ],
          tryIt: "Listez trois textes que votre organisation produit chaque mois (par exemple un rappel aux bénévoles, un remerciement aux donateurs et un bulletin). Entourez celui qui prend le plus de temps. C'est votre première tâche pour l'IA.",
          youCanNow: "dire ce qu'est un assistant d'IA, citer trois tâches associatives où il peut aider, et expliquer pourquoi une personne relit toujours son travail."
        },
        {
          title: "Ouvrir un assistant d'IA gratuit",
          minutes: 4,
          goal: "Ouvrir un assistant d'IA gratuit sur un téléphone ou un ordinateur et trouver où écrire.",
          text: [
            "Vous pouvez utiliser un assistant d'IA sur un smartphone ou n'importe quel ordinateur connecté à internet, y compris un ordinateur de bureau ou l'ordinateur portable du secrétariat de la paroisse.",
            "Sur un ordinateur, ouvrez le navigateur web et tapez l'adresse : chatgpt.com, copilot.microsoft.com ou gemini.google.com. Sur un téléphone, installez l'application officielle depuis la boutique d'applications, publiée par la vraie entreprise (OpenAI, Microsoft ou Google).",
            "Si votre organisation utilise déjà Microsoft 365 ou Google Workspace, demandez à votre administrateur quel outil d'IA est approuvé. Un compte professionnel peut avoir des protections de la vie privée qu'un compte personnel n'a pas.",
            "Sur un ordinateur partagé, ne laissez pas le navigateur enregistrer votre mot de passe, et déconnectez-vous quand vous avez fini."
          ],
          steps: ["Demandez si votre organisation a un outil d'IA approuvé.", "Ordinateur : tapez l'adresse web dans le navigateur. Téléphone : installez l'application officielle.", "Trouvez la zone de message en bas de l'écran.", "Sur un ordinateur partagé, déconnectez-vous et fermez le navigateur quand vous avez fini."],
          words: [["Navigateur web", "le programme qui sert à visiter des sites web, comme Chrome, Edge ou Safari."], ["Administrateur", "la personne qui gère les comptes et les réglages de votre organisation."]],
          slides: [
            { title: "Où l'utiliser", bullets: ["Ordinateur du bureau ou de la maison", "Application pour smartphone de la boutique officielle", "L'outil professionnel approuvé par votre organisation"] },
            { title: "Adresses web", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Demandez d'abord", bullets: ["Quel outil d'IA notre organisation approuve-t-elle ?", "Les comptes professionnels protègent parfois mieux les données"] },
            { title: "Sur un ordinateur partagé", bullets: ["N'enregistrez pas votre mot de passe", "Déconnectez-vous et fermez le navigateur"] }
          ],
          tryIt: "Ouvrez un assistant d'IA gratuit. Tapez : Je suis bénévole dans une association et j'apprends à utiliser l'IA. Donne-moi trois façons dont tu pourrais m'aider cette semaine. Lisez la réponse.",
          youCanNow: "ouvrir un assistant d'IA gratuit, trouver où écrire, et vérifier quel outil votre organisation approuve."
        },
        {
          title: "Demander un texte associatif avec une demande claire",
          minutes: 5,
          goal: "Écrire une demande en trois parties qui donne un brouillon associatif utile du premier coup.",
          text: [
            "Ce que vous tapez s'appelle une demande (un \"prompt\"). Une bonne demande a trois parties : ce dont vous avez besoin, la situation (sans détails privés), et la forme de réponse voulue.",
            "Exemple : \"Écris un court e-mail de remerciement aux 25 bénévoles qui ont aidé à notre collecte alimentaire de samedi. Nous avons servi 140 familles. Ton chaleureux, moins de 120 mots, et termine par la date de la prochaine collecte : [date].\"",
            "Une demande faible comme \"lettre de remerciement\" oblige l'assistant à deviner, donc la réponse est banale. Dites-lui qui va lire et quel ton convient à votre organisation : chaleureux, formel, joyeux ou inspiré par la foi."
          ],
          steps: ["Dites ce dont vous avez besoin et qui va le lire.", "Ajoutez la situation : événement, chiffres, but. Pas de noms ni de détails privés.", "Dites la forme voulue : longueur, ton, format.", "Utilisez une case à remplir comme [date] pour tout ce que vous compléterez vous-même."],
          words: [["Demande (prompt)", "ce que vous tapez ou dites à un assistant d'IA pour lui demander quelque chose."], ["Ton", "la façon dont un texte sonne, par exemple chaleureux, formel ou joyeux."], ["Case à remplir", "un repère comme [date] que vous remplacez vous-même plus tard."]],
          slides: [
            { title: "Les trois parties d'une bonne demande", bullets: ["1. Ce dont vous avez besoin et qui lit", "2. La situation, sans détails privés", "3. Longueur, ton et format"] },
            { title: "Faible ou claire", bullets: ["Faible : \"lettre de remerciement\"", "Claire : e-mail de remerciement à 25 bénévoles de la collecte", "140 familles servies, ton chaleureux, moins de 120 mots"] },
            { title: "Utilisez des cases à remplir", bullets: ["[date], [nom], [montant]", "Vous les remplissez vous-même plus tard"] }
          ],
          tryIt: "Reprenez la tâche entourée à la leçon 1. Écrivez une demande en trois parties, avec des cases à remplir pour les noms et les dates, et envoyez-la. Enregistrez la réponse.",
          youCanNow: "écrire une demande claire en trois parties pour un texte associatif."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce que l'IA peut faire pour une association",
        questions: [
          { q: "Quelle tâche convient bien à un assistant d'IA dans une association ?", options: ["Rédiger un e-mail de remerciement aux bénévoles", "Décider quelle famille reçoit de la nourriture", "Signer un contrat de subvention", "Approuver le budget"], answer: 0, why: "L'IA est bonne pour les premiers brouillons ; les personnes décident et signent." },
          { q: "L'IA donne une réponse sûre d'elle sur la date limite d'une subvention. Que faites-vous ?", options: ["Vous lui faites confiance", "Vous vérifiez sur la page officielle du financeur", "Vous la publiez sur les réseaux sociaux", "Vous l'envoyez au conseil d'administration comme définitive"], answer: 1, why: "L'IA peut se tromper en ayant l'air sûre ; vérifiez la source officielle." },
          { q: "Avant d'utiliser l'IA avec des informations de travail, à qui demander ?", options: ["À un donateur", "À un inconnu en ligne", "À l'administrateur ou à un responsable de votre organisation", "À personne"], answer: 2, why: "Votre organisation a peut-être un outil approuvé avec de meilleures protections." },
          { q: "Quelle demande est la plus claire ?", options: ["\"lettre\"", "\"aide pour les bénévoles\"", "\"fais notre bulletin\"", "\"Écris un e-mail chaleureux de 100 mots pour remercier 25 bénévoles de la collecte qui ont servi 140 familles.\""], answer: 3, why: "Elle dit quoi, la situation et le format." },
          { q: "Qu'est-ce qu'une case à remplir dans une demande ?", options: ["Un repère comme [date] que vous remplissez plus tard", "Un mot de passe", "Le nom complet d'un donateur", "Une sorte d'application"], answer: 0, why: "Les cases à remplir tiennent les vrais détails à l'écart et rappellent quoi compléter." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA bien et en sécurité",
      lessons: [
        {
          title: "Améliorer le brouillon",
          minutes: 4,
          goal: "Utiliser des demandes de suivi pour transformer un premier brouillon en un texte adapté à votre organisation.",
          text: [
            "La première réponse est un brouillon. L'assistant se souvient de la conversation, donc vous pouvez lui demander de changer une chose à la fois.",
            "Demandes de suivi utiles : \"Fais plus court.\" \"Rends-le plus chaleureux.\" \"Ajoute une phrase sur l'importance des bénévoles pour notre mission.\" \"Écris-le avec des mots simples, pour un niveau de fin d'école primaire.\" \"Donne-moi une version en anglais.\"",
            "Puis faites-le vôtre. Ajoutez vous-même les vrais noms et détails, après avoir copié le texte hors de l'outil d'IA, et relisez-le comme si vous étiez le bénévole ou le donateur qui le reçoit."
          ],
          steps: ["Lisez le premier brouillon.", "Choisissez la chose qui a le plus besoin de changer.", "Demandez ce changement.", "Recommencez, puis copiez le texte et ajoutez vous-même les vrais détails."],
          words: [["Demande de suivi", "une deuxième demande qui s'appuie sur la réponse déjà reçue."], ["Niveau de lecture", "la facilité de lecture d'un texte ; un niveau scolaire plus bas est plus facile."]],
          slides: [
            { title: "La première réponse est un brouillon", bullets: ["Demandez un changement à la fois", "Il se souvient de la même discussion"] },
            { title: "Des suivis qui marchent", bullets: ["\"Fais plus court.\"", "\"Rends-le plus chaleureux.\"", "\"Ajoute une ligne sur notre mission.\"", "\"Donne-moi une version en anglais.\""] },
            { title: "Faites-le vôtre", bullets: ["Copiez le texte hors de l'outil d'IA", "Ajoutez vous-même les vrais noms et détails", "Relisez-le comme la personne qui le reçoit"] }
          ],
          tryIt: "Reprenez le brouillon enregistré à la leçon 3. Demandez deux changements, un à la fois. Puis copiez la meilleure version dans un document et ajoutez vous-même un détail personnel.",
          youCanNow: "améliorer un brouillon de l'IA avec des suivis clairs et le terminer avec la voix de votre organisation."
        },
        {
          title: "Vérifier les faits avant d'envoyer",
          minutes: 5,
          goal: "Trouver et vérifier chaque fait d'un brouillon de l'IA avant qu'il n'aille aux donateurs, aux bénévoles ou au public.",
          text: [
            "Les assistants d'IA inventent parfois des choses : une mauvaise date, une statistique qui n'existe pas, ou une règle fiscale dépassée. On appelle cela une hallucination.",
            "Vérifiez toujours les chiffres, les dates, les noms, les citations, les statistiques, les affirmations fiscales et juridiques, et tout ce qui dit à quoi sert un don. Vérifiez dans vos propres registres, à la source officielle (souvent un site gouvernemental), ou auprès de la personne qui sait.",
            "Ne laissez jamais l'IA inventer des chiffres d'impact. Si le brouillon dit \"nous avons servi 500 familles\" et que vos registres disent 140, utilisez 140. Des chiffres honnêtes gardent la confiance des donateurs."
          ],
          steps: ["Surlignez chaque chiffre, date, nom et affirmation du brouillon.", "Vérifiez chacun dans vos registres ou une source officielle.", "Corrigez ou retirez tout ce que vous ne pouvez pas confirmer.", "Faites relire par une deuxième personne tout ce qui va au public."],
          words: [["Hallucination", "quand une IA écrit quelque chose qui semble vrai mais qui est inventé."], ["Chiffre d'impact", "le décompte de ce que votre programme a accompli, comme le nombre de familles servies."]],
          slides: [
            { title: "L'IA peut inventer", bullets: ["Mauvaises dates et mauvais chiffres", "Statistiques qui n'existent pas", "Règles fiscales ou juridiques dépassées"] },
            { title: "Vérifiez toujours", bullets: ["Chiffres, dates, noms, citations", "Affirmations fiscales et juridiques", "À quoi sert un don"] },
            { title: "Des chiffres honnêtes", bullets: ["Utilisez vos propres registres", "Ne laissez jamais l'IA inventer des chiffres d'impact", "Un deuxième lecteur pour les textes publics"] }
          ],
          tryIt: "Demandez à un assistant d'IA : \"Écris deux phrases sur le besoin de banques alimentaires dans ma région.\" Surlignez chaque chiffre qu'il donne. Essayez de trouver chacun sur un site officiel. Retirez ceux que vous ne pouvez pas confirmer.",
          youCanNow: "repérer les faits dans un brouillon de l'IA et les vérifier avant d'envoyer."
        },
        {
          title: "Protéger la vie privée des donateurs, bénévoles et bénéficiaires",
          minutes: 5,
          goal: "Utiliser l'IA sans y mettre d'informations privées sur les donateurs, les bénévoles ou les personnes que vous servez.",
          text: [
            "Les gens confient leurs informations à votre organisation. Ne collez pas dans un outil d'IA : les noms des donateurs avec le montant des dons, les adresses, les numéros de téléphone, les coordonnées bancaires ou de carte, les notes de suivi des bénéficiaires, les informations de santé, la situation migratoire ou les détails concernant des enfants.",
            "Vous pouvez quand même obtenir de l'aide. Décrivez la situation en termes généraux et utilisez des cases à remplir : \"Écris un remerciement à [nom du donateur] pour un don de [montant] à notre programme jeunesse.\" Ajoutez les vrais détails après avoir copié le brouillon.",
            "Suivez la politique de confidentialité de votre organisation, et demandez à un responsable en cas de doute. Dans le doute, laissez de côté."
          ],
          steps: ["Avant d'envoyer une demande, relisez-la pour repérer les noms et détails privés.", "Remplacez chacun par une case à remplir.", "N'ajoutez les vrais détails qu'après avoir copié le brouillon hors de l'outil d'IA.", "Suivez la politique de confidentialité de votre organisation."],
          words: [["Information privée", "des détails qui pourraient identifier une personne ou lui nuire s'ils étaient partagés, comme une adresse ou le montant d'un don."], ["Politique de confidentialité", "les règles écrites de votre organisation pour traiter les informations personnelles."]],
          slides: [
            { title: "Ne collez jamais dans l'IA", bullets: ["Noms des donateurs avec le montant des dons", "Adresses, téléphones, coordonnées bancaires", "Notes de suivi, santé ou situation migratoire"] },
            { title: "Utilisez plutôt des cases à remplir", bullets: ["\"Remercie [nom du donateur] pour [montant]\"", "Ajoutez les vrais détails après avoir copié"] },
            { title: "Dans le doute", bullets: ["Laissez de côté", "Suivez votre politique de confidentialité", "Demandez à un responsable"] }
          ],
          tryIt: "Tâche finale : rédigez un mot de remerciement aux bénévoles d'un événement récent. Utilisez une demande en trois parties avec des cases à remplir, demandez deux améliorations, vérifiez chaque fait dans vos registres, et retouchez-le pour qu'il ressemble à votre organisation.",
          youCanNow: "utiliser l'IA pour de vrais textes associatifs tout en protégeant la vie privée des personnes que vous servez."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA bien et en sécurité",
        questions: [
          { q: "Le brouillon est trop formel pour les bénévoles de votre paroisse. Que faites-vous ?", options: ["Vous l'envoyez quand même", "Vous demandez : \"Rends-le plus chaleureux et plus personnel\"", "Vous supprimez l'outil d'IA", "Vous demandez une version plus longue"], answer: 1, why: "Un suivi clair demande exactement le changement voulu." },
          { q: "Le brouillon dit que vous avez servi 500 familles. Vos registres disent 140. Que gardez-vous ?", options: ["500, ça sonne mieux", "Un chiffre volontairement vague", "140, d'après vos registres", "Vous laissez l'IA choisir"], answer: 2, why: "Des chiffres honnêtes tirés de vos registres gardent la confiance des donateurs." },
          { q: "Lequel ne faut-il PAS coller dans un outil d'IA ?", options: ["\"Fais plus court\"", "Le nom de votre collecte alimentaire", "Le mot \"merci\"", "Les notes de suivi d'un bénéficiaire"], answer: 3, why: "Les notes de suivi sont des informations privées sur les personnes que vous servez." },
          { q: "Comment remercier un donateur précis sans partager ses détails avec l'IA ?", options: ["Avec des cases comme [nom du donateur] et [montant]", "En collant toute sa fiche", "Avec ses coordonnées bancaires", "En ne le remerciant pas"], answer: 0, why: "Les cases à remplir donnent un brouillon ; vous ajoutez les vrais détails ensuite." },
          { q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Un style graphique", "Un texte qui semble vrai mais qui est inventé", "Un réglage de confidentialité", "Une connexion internet lente"], answer: 1, why: "L'IA peut inventer des faits qui semblent réels, donc vous les vérifiez." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : Introduction à l'IA pour les associations",
    questions: [
      { q: "Un assistant d'IA se décrit le mieux comme :", options: ["Un bénévole", "Une base de données de subventions", "Un programme informatique avec lequel on discute en mots de tous les jours", "Une banque"], answer: 2, why: "C'est un programme à qui l'on écrit ou parle et qui rédige des réponses." },
      { q: "Pour quelle tâche associative l'IA est-elle la meilleure ?", options: ["Choisir quels bénéficiaires reçoivent de l'aide", "Signer des contrats", "Approuver les salaires", "Rédiger le premier brouillon d'un bulletin"], answer: 3, why: "Les premiers brouillons sont un point fort ; les décisions restent aux personnes." },
      { q: "Qui prend les décisions finales quand votre équipe utilise l'IA ?", options: ["Les personnes de votre équipe", "L'IA", "L'entreprise du logiciel", "Les donateurs"], answer: 0, why: "Une personne relit et décide toujours." },
      { q: "Laquelle est l'adresse web d'un assistant d'IA gratuit ?", options: ["donate-now.win", "gemini.google.com", "freegrants.xyz", "aucune de celles-ci"], answer: 1, why: "gemini.google.com est l'adresse officielle de Gemini de Google." },
      { q: "Pourquoi demander quel outil d'IA votre organisation approuve ?", options: ["Pour avoir une réduction sur le café", "Parce que l'IA est illégale", "Les outils professionnels approuvés protègent parfois mieux les données", "Ça n'a pas d'importance"], answer: 2, why: "Les comptes professionnels peuvent avoir plus de protections et de règles." },
      { q: "Sur un ordinateur de bureau partagé, après avoir utilisé l'IA, vous devez :", options: ["Enregistrer votre mot de passe", "Laisser la session ouverte", "Écrire votre mot de passe sur un papier", "Vous déconnecter et fermer le navigateur"], answer: 3, why: "Se déconnecter protège votre compte." },
      { q: "Une bonne demande contient :", options: ["Ce dont vous avez besoin, la situation et le format", "Un seul mot", "Les coordonnées bancaires d'un donateur", "Votre mot de passe"], answer: 0, why: "Ces trois parties donnent un brouillon utile." },
      { q: "Quelle demande donnera le meilleur rappel aux bénévoles ?", options: ["\"rappel\"", "\"Écris un SMS aimable de 80 mots pour rappeler aux bénévoles le nettoyage du parc samedi à 9 h et d'apporter des gants.\"", "\"bénévoles\"", "\"aide\""], answer: 1, why: "Elle donne le besoin, la situation et le format." },
      { q: "Que veut dire [date] dans une demande ?", options: ["Un code secret", "L'anniversaire d'un donateur", "Une case que vous remplissez plus tard", "Une erreur"], answer: 2, why: "Les cases à remplir marquent les détails que vous ajoutez vous-même." },
      { q: "Le premier brouillon est trop long. La meilleure étape suivante :", options: ["Créer une nouvelle association", "L'envoyer quand même", "Ajouter des mots", "Demander : \"Fais plus court\""], answer: 3, why: "Un suivi demande le changement." },
      { q: "Quand ajouter les vrais noms des donateurs dans un remerciement ?", options: ["Après avoir copié le brouillon hors de l'outil d'IA", "Dans la première demande", "Ne jamais remercier les donateurs", "Seulement dans la discussion avec l'IA"], answer: 0, why: "Les ajouter hors de l'outil les garde privés." },
      { q: "Quel suivi peut aider à toucher plus de monde dans votre communauté ?", options: ["\"Ajoute mon mot de passe.\"", "\"Donne-moi une version en anglais.\"", "\"Invente une statistique.\"", "\"Supprime la discussion.\""], answer: 1, why: "Une version traduite touche plus de lecteurs ; une personne qui parle couramment la langue doit quand même la relire." },
      { q: "Que faut-il TOUJOURS vérifier dans un brouillon de l'IA ?", options: ["Le mot de salutation", "La police", "Les chiffres, les dates et les affirmations", "Rien"], answer: 2, why: "Les chiffres, les dates et les affirmations peuvent être inventés." },
      { q: "Où vérifier une affirmation fiscale ou juridique ?", options: ["Dans une autre discussion avec l'IA", "Dans un commentaire sur les réseaux", "Au hasard", "À la source officielle, souvent un site gouvernemental, ou auprès d'un professionnel"], answer: 3, why: "Les sources officielles et les professionnels sont fiables." },
      { q: "Pourquoi les chiffres d'impact doivent-ils venir de vos registres ?", options: ["Des chiffres honnêtes gardent la confiance des donateurs", "Les chiffres de l'IA sont toujours trop petits", "Les donateurs ne les lisent pas", "C'est plus rapide"], answer: 0, why: "Des chiffres inventés trompent les donateurs et abîment la confiance." },
      { q: "Qui doit relire tout ce qui va au public ?", options: ["Personne", "Une deuxième personne de votre équipe", "Seulement l'IA", "Un inconnu au hasard"], answer: 1, why: "Un deuxième lecteur repère les erreurs." },
      { q: "Laquelle est une information privée à garder hors de l'IA ?", options: ["Le nom de votre gala annuel", "Le mot \"mission\"", "L'adresse personnelle d'un bénévole", "L'adresse de votre site web public"], answer: 2, why: "Les adresses personnelles sont des détails privés." },
      { q: "Vous ne savez pas si une information est trop privée pour l'IA. Vous devez :", options: ["La coller quand même", "La publier en ligne", "L'envoyer par e-mail à l'entreprise d'IA", "La laisser de côté et demander à un responsable"], answer: 3, why: "Dans le doute, laissez de côté." },
      { q: "Quelles règles écrites guident la façon dont votre organisation traite les informations personnelles ?", options: ["La politique de confidentialité", "Le menu", "La commande de t-shirts des bénévoles", "Le plan du parking"], answer: 0, why: "La politique de confidentialité fixe les règles pour les informations personnelles." },
      { q: "Les informations de santé ou la situation migratoire d'un bénéficiaire doivent être :", options: ["Collées pour de meilleures réponses", "Gardées hors des outils d'IA", "Partagées dans les bulletins", "Utilisées comme exemples en ligne"], answer: 1, why: "Elles sont sensibles et pourraient nuire à la personne si elles étaient partagées." }
    ]
  }
};
