"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-intro-ai.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-intro-ai-fr",
  lang: "fr",
  translationOf: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Introduction à l'IA pour les entrepreneurs",
  skills: "Repérer les tâches d'entreprise adaptées à l'IA, Écrire un prompt professionnel, Améliorer un brouillon, Vérifier les faits et les chiffres, Protéger les données de l'entreprise et des clients",
  outcome: "choisir une vraie tâche de votre entreprise, utiliser un assistant IA gratuit pour en faire un premier brouillon, améliorer et vérifier le résultat, et garder les informations sur les clients et l'argent hors de la conversation.",
  about: [
    "Ce cours s'adresse aux personnes qui lancent ou développent une petite entreprise : un food truck, un service de ménage, un salon de coiffure, une boutique en ligne, une activité de conseil ou une activité secondaire que vous voulez faire grandir.",
    "Vous apprendrez ce que les assistants IA peuvent faire pour un chef d'entreprise, comment trouver les tâches de votre semaine que l'IA peut accélérer, comment écrire un prompt professionnel clair, comment améliorer et vérifier ce que l'IA vous donne, et comment protéger les informations de vos clients.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche « Essayez maintenant » avec votre propre entreprise. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin."
  ],
  finalTask: "Choisissez une vraie tâche de votre entreprise (par exemple une grille de prix, un e-mail de bienvenue pour les nouveaux clients ou une publication hebdomadaire sur les réseaux sociaux). Utilisez un assistant IA gratuit pour la rédiger avec un prompt professionnel en trois parties, demandez deux améliorations, vérifiez vous-même chaque fait et chaque chiffre, retirez toute information privée sur les clients ou l'argent, et enregistrez la version finale prête à l'emploi.",
  chapters: [
    {
      name: "Chapitre 1 : Ce que l'IA peut faire pour votre entreprise",
      lessons: [
        {
          title: "L'IA, en termes d'entreprise",
          minutes: 4,
          goal: "Expliquer avec vos mots ce qu'un assistant IA peut et ne peut pas faire pour une entreprise.",
          text: [
            "Un assistant IA est un programme informatique à qui vous écrivez ou parlez avec des mots de tous les jours. Parmi les plus connus et gratuits, il y a ChatGPT, Microsoft Copilot et Google Gemini. Vous demandez quelque chose, et il écrit un brouillon en quelques secondes.",
            "Pour un chef d'entreprise, voyez-le comme une aide rapide pour les premiers brouillons. Il est bon pour écrire des e-mails, des publications pour les réseaux sociaux et des descriptions de produits, transformer des notes en plan, résumer de longs documents, trouver des noms et des idées, et expliquer des mots du monde des affaires que vous ne connaissez pas.",
            "Ce n'est ni votre comptable, ni votre avocat, ni votre client. Il ne connaît pas vos prix, vos clients ou les règles locales si vous ne les lui dites pas, et il peut se tromper tout en ayant l'air sûr de lui. C'est vous le patron : vous décidez de ce qui sort avec le nom de votre entreprise."
          ],
          words: [["Assistant IA", "un programme informatique avec qui vous discutez en écrivant ou en parlant, et qui écrit des réponses et des brouillons."], ["Premier brouillon", "une première version de quelque chose que vous allez vérifier et améliorer avant de l'utiliser."]],
          slides: [
            { title: "L'IA en entreprise = une aide rapide aux brouillons", bullets: ["Vous demandez avec des mots simples", "Elle écrit un brouillon en quelques secondes", "Options gratuites : ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Bonne pour", bullets: ["E-mails, publications, descriptions de produits", "Transformer des notes en plans", "Résumés et recherche d'idées"] },
            { title: "Ce qu'elle n'est pas", bullets: ["Votre comptable ou votre avocat", "Au courant de vos prix ou clients si vous ne le dites pas", "Toujours juste, même quand elle a l'air sûre"] }
          ],
          tryIt: "Notez trois choses que vous avez faites pour votre entreprise la semaine dernière et qui demandaient d'écrire, de planifier ou d'expliquer. Entourez celle qui vous a pris le plus de temps.",
          youCanNow: "dire ce qu'un assistant IA peut faire pour une entreprise, et pourquoi vous vérifiez quand même tout avant que ce soit envoyé."
        },
        {
          title: "Trouver les tâches que l'IA peut accélérer",
          minutes: 5,
          goal: "Lister les tâches de votre semaine qui conviennent à l'IA, et celles qui ne conviennent pas.",
          text: [
            "Les meilleures premières tâches pour l'IA sont celles que vous répétez, qui touchent aux mots, et où une erreur est facile à repérer avant que quelqu'un la voie. Exemples : répondre aux questions courantes des clients, écrire une publication hebdomadaire, rédiger un prospectus, faire une liste de contrôle pour un nouvel aide, ou résumer le long e-mail d'un fournisseur.",
            "Les tâches à NE PAS confier à l'IA seule : tout ce qui envoie de l'argent, signe un contrat, fixe une position juridique ou fiscale, ou fait une promesse à un client sans que vous l'ayez lu d'abord. L'IA peut vous aider à préparer, mais c'est vous qui décidez.",
            "Une façon simple de trier : écrivez chaque tâche sur une ligne, puis marquez-la « l'IA rédige, je vérifie », « l'IA m'aide à réfléchir » ou « je le fais moi-même »."
          ],
          steps: ["Listez dix tâches faites ces deux dernières semaines.", "Marquez chacune : l'IA rédige / l'IA m'aide à réfléchir / je le fais moi-même.", "Choisissez la tâche « l'IA rédige » qui vous prend le plus de temps.", "C'est votre première tâche pour l'IA."],
          words: [["Tâche répétitive", "un travail que vous faites encore et encore, comme répondre à la même question de client."]],
          slides: [
            { title: "Bonnes premières tâches pour l'IA", bullets: ["Vous les répétez", "Ce sont surtout des mots", "Les erreurs se repèrent avant que quelqu'un les voie"] },
            { title: "Exemples", bullets: ["Réponses aux questions courantes des clients", "Publication hebdomadaire ou prospectus", "Liste de contrôle pour un nouvel aide"] },
            { title: "À garder pour vous", bullets: ["Envoyer de l'argent", "Contrats, choix fiscaux et juridiques", "Promesses à des clients que vous n'avez pas lues"] },
            { title: "Triez vos tâches", bullets: ["L'IA rédige, je vérifie", "L'IA m'aide à réfléchir", "Je le fais moi-même"] }
          ],
          tryIt: "Faites votre liste de dix tâches et triez-les dans les trois groupes. Choisissez la tâche « l'IA rédige, je vérifie » que vous utiliserez pendant le reste de ce cours.",
          youCanNow: "trier les tâches de votre entreprise et choisir une première tâche sûre et utile pour l'IA."
        },
        {
          title: "Écrire un prompt professionnel clair",
          minutes: 5,
          goal: "Écrire un prompt professionnel en trois parties qui donne un brouillon utile dès la première fois.",
          text: [
            "Ce que vous écrivez à un assistant IA s'appelle un prompt. Un prompt professionnel marche mieux avec trois parties : la tâche, le contexte de l'entreprise et le format voulu.",
            "Exemple : « Écris un court e-mail de bienvenue pour les nouveaux clients de mon service de ménage à domicile à Atlanta. Nous nettoyons les maisons toutes les deux semaines, et les clients peuvent nous envoyer un texto pour changer de date. Ton amical, moins de 120 mots, avec un objet clair. »",
            "Un prompt faible comme « écris un e-mail » oblige l'assistant à deviner. Il ne connaît ni votre entreprise, ni votre client, ni votre ton, donc le brouillon sera général. Ne mettez jamais dans le prompt les noms de clients, les numéros de téléphone, les numéros de carte ou les mots de passe ; vous pourrez les ajouter vous-même plus tard."
          ],
          steps: ["Tâche : dites exactement ce que vous voulez faire écrire ou planifier.", "Contexte : ce que vous vendez, qui est le client, où vous êtes, votre ton.", "Format : longueur, liste ou paragraphes, objet, niveau de lecture.", "Relisez le prompt pour repérer les infos privées et retirez-les avant d'envoyer."],
          words: [["Prompt", "ce que vous écrivez ou dites à un assistant IA pour lui demander quelque chose."], ["Contexte", "les faits de base dont l'IA a besoin, comme ce que vous vendez et à qui."]],
          slides: [
            { title: "Les trois parties d'un prompt professionnel", bullets: ["1. Tâche : ce que vous voulez", "2. Contexte : votre entreprise et votre client", "3. Format : longueur, style, présentation"] },
            { title: "Faible ou clair", bullets: ["Faible : « écris un e-mail »", "Clair : e-mail de bienvenue, service de ménage, Atlanta,", "amical, moins de 120 mots, avec un objet"] },
            { title: "À garder hors du prompt", bullets: ["Noms et numéros de téléphone des clients", "Numéros de carte et de compte", "Mots de passe"] }
          ],
          tryIt: "Écrivez un prompt en trois parties pour la tâche choisie à la leçon 2. Envoyez-le à un assistant IA gratuit et enregistrez le premier brouillon.",
          youCanNow: "écrire un prompt professionnel avec une tâche, un contexte et un format, sans infos privées."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce que l'IA peut faire pour votre entreprise",
        questions: [
          { q: "Quelle est la meilleure façon de voir un assistant IA dans votre entreprise ?", options: ["Votre comptable", "Un remplaçant de votre jugement", "Une aide rapide aux premiers brouillons que vous vérifiez", "Un client"], answer: 2, why: "L'IA rédige vite, mais c'est vous qui vérifiez et décidez de ce qui sort." },
          { q: "Quelle tâche est une bonne première tâche à confier à un assistant IA ?", options: ["Rédiger une publication hebdomadaire que vous lirez d'abord", "Payer un fournisseur", "Signer un bail", "Choisir votre régime fiscal"], answer: 0, why: "Elle se répète, ce sont surtout des mots, et les erreurs se repèrent avant que quelqu'un les voie." },
          { q: "Lequel est un prompt professionnel en trois parties ?", options: ["« écris un e-mail »", "« aide-moi »", "« trucs d'entreprise »", "« E-mail de bienvenue pour les nouveaux clients d'un service de ménage à Atlanta ; nous nettoyons toutes les deux semaines ; amical, moins de 120 mots, avec un objet. »"], answer: 3, why: "Il donne la tâche, le contexte de l'entreprise et le format." },
          { q: "Que devez-vous laisser hors d'un prompt ?", options: ["Votre type d'entreprise", "Le numéro de carte d'un client", "Le ton souhaité", "La longueur souhaitée"], answer: 1, why: "Les numéros de carte et autres infos privées ne doivent jamais aller dans une conversation avec une IA." },
          { q: "Un brouillon de l'IA porte le nom de votre entreprise. Qui en est responsable ?", options: ["L'entreprise d'IA", "Vous, le patron", "Personne", "Le client"], answer: 1, why: "Vous décidez de ce qui sort avec le nom de votre entreprise." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA de façon sûre et efficace",
      lessons: [
        {
          title: "Améliorer le brouillon avec des demandes de suivi",
          minutes: 4,
          goal: "Transformer un premier brouillon en une version que vous utiliseriez vraiment, grâce à des demandes de suivi.",
          text: [
            "La première réponse est un brouillon. L'assistant se souvient des messages précédents dans la même conversation, donc vous pouvez lui demander de changer une chose à la fois.",
            "Demandes de suivi utiles pour les écrits professionnels : « Fais que ça sonne plus comme une petite entreprise locale. » « Réduis à 80 mots. » « Ajoute une prochaine étape claire pour le client. » « Donne-moi trois objets au choix. » « Écris-le avec un niveau de lecture facile. »",
            "Ajoutez les faits que vous seul connaissez : vos vrais horaires, vos vrais prix et vos vraies règles. Puis lisez-le à voix haute. Si cela ne sonne pas comme vous, demandez une modification ou corrigez-le vous-même."
          ],
          steps: ["Lisez le premier brouillon.", "Choisissez la chose que vous voulez le plus changer.", "Demandez ce changement.", "Ajoutez vos vrais faits.", "Lisez-le à voix haute et recommencez si besoin."],
          words: [["Demande de suivi", "une deuxième demande dans la même conversation qui modifie la réponse ou la complète."], ["Appel à l'action", "la prochaine étape claire que vous voulez que le client fasse, comme « Envoyez-nous un texto pour réserver »."]],
          slides: [
            { title: "La première réponse est un brouillon", bullets: ["Demandez un changement à la fois", "La conversation se souvient de ce que vous avez dit"] },
            { title: "Demandes de suivi professionnelles", bullets: ["« Plus comme une petite entreprise locale. »", "« Réduis à 80 mots. »", "« Ajoute une prochaine étape claire pour le client. »"] },
            { title: "Faites-le vôtre", bullets: ["Ajoutez vos vrais horaires, prix et règles", "Lisez-le à voix haute", "Retouchez jusqu'à ce que ça sonne comme vous"] }
          ],
          tryIt: "Reprenez votre brouillon de la leçon 3. Demandez deux changements, un à la fois, puis ajoutez vos propres vrais détails. Comparez la première et la dernière version.",
          youCanNow: "améliorer un brouillon de l'IA avec des demandes de suivi et le faire sonner comme votre entreprise."
        },
        {
          title: "Vérifier les faits, les chiffres et les affirmations",
          minutes: 5,
          goal: "Vérifier un brouillon de l'IA pour repérer les faits faux, les chiffres faux et les promesses impossibles à tenir.",
          text: [
            "L'IA peut inventer : un prix que vous n'avez jamais fixé, une règle qui n'existe pas, un total faux, ou une affirmation comme « le meilleur de la ville » que vous ne pouvez pas prouver. Ce genre d'invention s'appelle parfois une hallucination.",
            "Avant que quoi que ce soit parte chez un client, vérifiez trois choses. Les faits : horaires, prix, adresses, règles. Les chiffres : les totaux et les pourcentages tombent-ils juste ? Refaites le calcul vous-même ou dans un tableur. Les affirmations : pouvez-vous les prouver ? Aux États-Unis, la FTC dit que les publicités doivent être vraies, non trompeuses et appuyées par des preuves.",
            "Pour les questions d'impôts, de droit, de licences ou d'argent, utilisez l'IA seulement pour comprendre les mots, puis confirmez auprès de la source officielle (souvent un site .gov aux États-Unis, ou le site de l'administration de votre pays) ou d'un professionnel comme un comptable ou un avocat."
          ],
          steps: ["Surlignez chaque fait, chiffre et affirmation du brouillon.", "Vérifiez les faits avec vos propres documents.", "Refaites vous-même tous les calculs.", "Retirez ou adoucissez toute affirmation que vous ne pouvez pas prouver.", "Confirmez les points fiscaux, juridiques ou de licence avec une source officielle ou un professionnel."],
          words: [["Hallucination", "quand l'IA écrit quelque chose qui a l'air vrai mais qui est inventé."], ["Affirmation", "quelque chose que votre entreprise présente comme vrai, comme « service le jour même »."], ["FTC", "la Federal Trade Commission, l'agence américaine qui fait respecter les règles de vérité dans la publicité."]],
          slides: [
            { title: "L'IA peut inventer", bullets: ["Des prix que vous n'avez jamais fixés", "Des règles qui n'existent pas", "Des totaux faux"] },
            { title: "Vérifiez trois choses", bullets: ["Les faits : horaires, prix, règles", "Les chiffres : refaites le calcul", "Les affirmations : pouvez-vous les prouver ?"] },
            { title: "Vérité dans la publicité", bullets: ["FTC : les publicités doivent être vraies et non trompeuses", "Les affirmations ont besoin de preuves"] },
            { title: "Impôts, droit, licences", bullets: ["Utilisez l'IA pour comprendre les mots", "Confirmez sur le site officiel de l'administration", "Ou demandez à un comptable ou un avocat"] }
          ],
          sources: [{ name: "FTC : les bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Surlignez chaque fait, chiffre et affirmation de votre brouillon amélioré. Vérifiez chacun, corrigez ce qui est faux et retirez toute affirmation que vous ne pouvez pas prouver.",
          youCanNow: "vérifier un brouillon de l'IA pour repérer les faits faux, les chiffres faux et les affirmations impossibles à prouver."
        },
        {
          title: "Protéger les informations des clients et de l'entreprise",
          minutes: 5,
          goal: "Utiliser l'IA pour des tâches d'entreprise sans partager d'informations privées sur les clients ou l'argent.",
          text: [
            "Ce que vous écrivez dans une conversation avec une IA peut être conservé par l'entreprise qui la gère et, avec certaines offres gratuites, servir à améliorer son IA. Lisez les paramètres de confidentialité de l'outil, et partez du principe que tout ce que vous écrivez pourrait être vu par quelqu'un d'autre.",
            "N'écrivez jamais dans une conversation avec une IA : des noms de clients avec leur numéro de téléphone ou leur adresse, des numéros de carte ou de compte bancaire, des mots de passe, des numéros de sécurité sociale ou d'identification fiscale, ou des détails de santé privés. Utilisez des espaces réservés comme « [nom du client] » et remplissez-les vous-même ensuite.",
            "Méfiez-vous aussi des arnaques utilisant l'IA qui visent les entreprises : fausses factures, e-mails qui imitent le style d'un fournisseur, et appels avec une voix qui ressemble à celle d'une personne que vous connaissez et qui demande un paiement urgent. Avant de payer, rappelez sur un numéro que vous savez être le bon."
          ],
          steps: ["Avant d'envoyer un prompt, relisez-le pour repérer les infos privées.", "Remplacez-les par des espaces réservés comme « [nom du client] ».", "Vérifiez les paramètres de confidentialité ou de données de l'outil.", "Vérifiez toute demande de paiement urgente en appelant un numéro que vous connaissez déjà."],
          words: [["Espace réservé", "un élément comme « [nom du client] » que vous remplacez plus tard par la vraie information, en dehors de la conversation avec l'IA."], ["Arnaque à la facture", "une fausse facture faite pour avoir l'air de venir d'un vrai fournisseur."]],
          slides: [
            { title: "Partez du principe que ça peut être vu", bullets: ["Les conversations peuvent être conservées", "Les offres gratuites peuvent s'en servir pour l'IA", "Vérifiez les paramètres de confidentialité"] },
            { title: "Ne jamais écrire dans l'IA", bullets: ["Téléphones et adresses des clients", "Numéros de carte, de compte et fiscaux", "Mots de passe et détails de santé"] },
            { title: "Utilisez des espaces réservés", bullets: ["« [nom du client] », « [total de la commande] »", "Remplissez les vraies infos vous-même ensuite"] },
            { title: "Arnaques visant les entreprises", bullets: ["Fausses factures qui ont l'air vraies", "Appels urgents de paiement avec une voix familière", "Rappelez sur un numéro que vous connaissez"] }
          ],
          tryIt: "Tâche finale : terminez la tâche d'entreprise choisie. Assurez-vous que le prompt et la version finale ne contiennent aucune information privée sur les clients ou l'argent, vérifiez chaque fait, chiffre et affirmation, et enregistrez-la prête à l'emploi.",
          youCanNow: "utiliser l'IA pour une vraie tâche d'entreprise tout en protégeant vos clients, votre argent et votre nom."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA de façon sûre et efficace",
        questions: [
          { q: "Le brouillon de l'IA est trop formel pour votre petite boutique. Que faites-vous ?", options: ["Vous l'utilisez quand même", "Vous supprimez l'application d'IA", "Vous l'envoyez à un avocat", "Vous demandez : « Fais que ça sonne plus comme une petite entreprise locale. »"], answer: 3, why: "Une demande de suivi demande à l'assistant de changer le ton." },
          { q: "Un brouillon de l'IA dit « ouvert jusqu'à 21 h » mais vous fermez à 19 h. Qu'est-ce que cela montre ?", options: ["L'IA peut inventer des faits, donc vous les vérifiez", "L'IA a toujours raison", "Vos horaires sont faux", "Le client ne le remarquera pas"], answer: 0, why: "L'IA peut inventer des faits ; vous les vérifiez avec vos propres documents." },
          { q: "Le brouillon dit « le moins cher de l'État ». Vous n'avez pas comparé les prix. Que faire ?", options: ["Le garder, ça sonne bien", "Le mettre en plus grand", "Le retirer ou le remplacer par quelque chose que vous pouvez prouver", "Ajouter « garanti »"], answer: 2, why: "Les publicités doivent être vraies et appuyées par des preuves." },
          { q: "Comment inclure le nom d'un client dans un prompt ?", options: ["Écrire le nom complet et le numéro de téléphone", "Écrire aussi son numéro de carte", "Demander son mot de passe au client", "Utiliser un espace réservé comme « [nom du client] »"], answer: 3, why: "Les espaces réservés gardent les infos privées hors de la conversation." },
          { q: "Vous recevez un appel urgent avec la voix de votre fournisseur qui vous demande de payer un nouveau compte aujourd'hui. Que faites-vous ?", options: ["Vous payez tout de suite", "Vous envoyez vos identifiants bancaires", "Vous rappelez le fournisseur sur un numéro que vous connaissez déjà", "Vous répondez avec le code reçu sur votre téléphone"], answer: 2, why: "Les voix peuvent être imitées par l'IA ; vérifiez sur un numéro connu avant de payer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'IA pour les entrepreneurs",
    questions: [
      { q: "Dans votre entreprise, un assistant IA s'utilise le mieux comme :", options: ["Votre avocat", "Une aide rapide aux premiers brouillons", "Votre banque", "Celui qui prend la décision finale"], answer: 1, why: "Il rédige ; vous vérifiez et décidez." },
      { q: "Lequel est un assistant IA gratuit et connu ?", options: ["Google Gemini", "Une caisse enregistreuse", "Une imprimante", "Une cellule de tableur"], answer: 0, why: "Gemini, ChatGPT et Copilot sont des assistants IA connus." },
      { q: "Qu'est-ce qu'un assistant IA ne sait PAS si vous ne le lui dites pas ?", options: ["Ce qu'est un plan d'affaires", "Comment écrire une liste", "Vos vrais prix", "Les mots courants des affaires"], answer: 2, why: "Il ne connaît pas vos prix, vos clients ou vos règles si vous ne les lui donnez pas." },
      { q: "Les bonnes premières tâches pour l'IA sont celles qui :", options: ["Se répètent, sont surtout des mots et sont faciles à vérifier", "Envoient de l'argent", "Signent des contrats", "Fixent votre position fiscale"], answer: 0, why: "Elles sont peu risquées et font gagner du temps." },
      { q: "Quelle tâche devez-vous garder pour vous ?", options: ["Chercher des noms de boutique", "Rédiger un prospectus", "Faire une liste de contrôle", "Approuver un paiement à un fournisseur"], answer: 3, why: "Les décisions d'argent vous reviennent." },
      { q: "Quand vous triez les tâches, « l'IA m'aide à réfléchir » veut dire :", options: ["L'IA prend la décision", "Vous utilisez l'IA pour trouver des idées ou expliquer, puis vous décidez", "Vous n'utilisez jamais l'IA", "L'IA l'envoie à votre place"], answer: 1, why: "L'IA soutient votre réflexion ; vous décidez." },
      { q: "Les trois parties d'un prompt professionnel sont :", options: ["Nom, mot de passe, adresse", "Tâche, contexte, format", "Bonjour, s'il te plaît, merci", "Prix, taxe, total"], answer: 1, why: "La tâche, le contexte et le format donnent à l'IA ce dont elle a besoin." },
      { q: "Lequel est un contexte d'entreprise ?", options: ["« Moins de 100 mots »", "« Écris un e-mail »", "« Merci »", "« Nous sommes un service de lavage de voitures à domicile à Dallas pour les parents pressés »"], answer: 3, why: "Le contexte explique votre entreprise et votre client." },
      { q: "Laquelle est une consigne de format ?", options: ["« Donne-moi une liste de 5 puces courtes »", "« Nous vendons des gâteaux »", "« Nos clients sont des étudiants »", "« Nous sommes à Lagos »"], answer: 0, why: "Le format dit à quoi doit ressembler la réponse." },
      { q: "Une demande de suivi, c'est :", options: ["Une nouvelle application", "Un avis client", "Une deuxième demande dans la même conversation qui modifie la réponse", "Un type de facture"], answer: 2, why: "Les demandes de suivi améliorent le brouillon étape par étape." },
      { q: "Quelle demande de suivi ajoute un appel à l'action ?", options: ["« Rallonge-le sans raison. »", "« Retire tous les détails. »", "« Ajoute mon mot de passe. »", "« Ajoute une prochaine étape claire, comme Envoyez-nous un texto pour réserver. »"], answer: 3, why: "Un appel à l'action dit au client quoi faire ensuite." },
      { q: "Pourquoi lire un brouillon à voix haute ?", options: ["Pour rendre l'IA plus rapide", "Pour économiser la batterie", "Pour vérifier qu'il sonne comme vous", "C'est exigé par la loi"], answer: 2, why: "L'entendre vous aide à repérer le ton et les erreurs." },
      { q: "Une « hallucination » de l'IA, c'est :", options: ["Une réponse lente", "Quelque chose qui a l'air vrai mais qui est inventé", "Un type de logo", "Une plainte de client"], answer: 1, why: "L'IA peut inventer des faits qui ont l'air réels." },
      { q: "L'IA calcule mal le total de votre liste de prix. Quelle est la leçon ?", options: ["Refaire le calcul vous-même ou dans un tableur", "Faire confiance aux calculs de l'IA", "Augmenter vos prix", "Arrêter de vendre"], answer: 0, why: "Vérifiez toujours les chiffres avant de les utiliser." },
      { q: "Selon la FTC, les affirmations publicitaires doivent être :", options: ["Drôles", "Écrites par l'IA", "Vraies, non trompeuses et appuyées par des preuves", "Courtes"], answer: 2, why: "Les règles de vérité dans la publicité de la FTC l'exigent." },
      { q: "Pour une question d'impôts ou de licence, l'IA sert le mieux à :", options: ["Comprendre les mots avant de vérifier la source officielle ou un professionnel", "Prendre la décision finale", "Faire la déclaration à votre place", "Remplacer votre comptable"], answer: 0, why: "Confirmez les points fiscaux et juridiques avec des sources officielles ou des professionnels." },
      { q: "Qu'est-ce qui ne doit JAMAIS aller dans une conversation avec une IA ?", options: ["« Rends-le plus amical »", "Votre type d'entreprise", "Le ton souhaité", "Le numéro de carte d'un client"], answer: 3, why: "Les numéros de carte sont des informations financières privées." },
      { q: "Un espace réservé comme « [nom du client] » vous permet de :", options: ["Cacher les prix aux clients", "Obtenir de l'aide sans partager d'infos privées", "Sauter la vérification", "Payer plus vite"], answer: 1, why: "Vous remplissez vous-même la vraie information ensuite." },
      { q: "Avec certaines offres d'IA gratuites, vos conversations peuvent :", options: ["Disparaître avant que vous les lisiez", "Être conservées et servir à améliorer l'IA", "Être envoyées à vos clients", "Être imprimées"], answer: 1, why: "C'est pourquoi vous vérifiez les paramètres de confidentialité et gardez les infos privées dehors." },
      { q: "Un e-mail qui a l'air de venir de votre fournisseur vous demande de payer d'urgence sur un nouveau compte bancaire. Meilleure étape ?", options: ["Payer maintenant", "Répondre avec vos identifiants bancaires", "Le transférer à tous vos clients", "Appeler le fournisseur sur un numéro que vous connaissez déjà"], answer: 3, why: "Les fausses factures sont courantes ; vérifiez sur un numéro connu." }
    ]
  }
};
