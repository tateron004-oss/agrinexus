"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-volunteer-recruitment.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-volunteer-recruitment-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-volunteer-recruitment",
  category: "Non Profits",
  name: "Recruter des bénévoles avec l'IA",
  skills: "Rédiger une fiche de mission bénévole, Rédiger des annonces de recrutement, Créer un formulaire d'inscription, Écrire des messages d'accueil et de rappel, Garder les bénévoles",
  outcome: "utiliser un assistant d'IA gratuit pour rédiger une fiche de mission bénévole claire, une annonce de recrutement et un message d'accueil, mettre en place un formulaire d'inscription simple, et planifier comment remercier et garder les bénévoles recrutés.",
  about: [
    "Ce cours s'adresse aux salariés et coordinateurs de bénévoles d'associations et d'organisations religieuses qui ont besoin de plus de bras pour des programmes comme les banques alimentaires, le soutien scolaire, les événements, les nettoyages et le mentorat.",
    "Vous utiliserez un assistant d'IA (comme ChatGPT, Microsoft Copilot ou Google Gemini) pour écrire les textes, et des outils gratuits comme Google Forms ou Microsoft Forms pour recueillir les inscriptions. Vous gardez la main sur chaque message, et vous gardez les données personnelles des bénévoles hors de l'IA.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez un kit de recrutement complet pour une vraie mission bénévole : une fiche de mission, une publication pour les réseaux sociaux, un e-mail aux soutiens, un formulaire d'inscription avec quelques questions simples, un message d'accueil et un rappel à une semaine, plus un court plan de remerciement. Utilisez l'IA pour les brouillons, puis retouchez chaque élément avec votre propre voix et vérifiez toutes les dates et tous les détails.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des salariés et coordinateurs de bénévoles d'associations et d'organisations confessionnelles qui ont besoin de plus d'aide pour des programmes comme les banques alimentaires, le soutien scolaire, les événements, les opérations de nettoyage et le mentorat.",
    startingPoint: "Ils recrutent en demandant toujours aux mêmes personnes, souvent avec un message général « nous avons besoin d'aide ». Certains utilisent l'e-mail et les réseaux sociaux ; peu ont écrit des fiches de mission, créé des formulaires d'inscription ou prévu comment garder les bénévoles.",
    gap: "Les demandes floues reçoivent peu de réponses, et les nouveaux bénévoles qui se sentent perdus ne reviennent pas. Les coordinateurs ont besoin d'un kit clair et réutilisable pour recruter, accueillir et garder les bénévoles, en utilisant l'IA pour rédiger vite tout en protégeant les informations des bénévoles.",
    constraints: [
      "Temps : les coordinateurs ont beaucoup de tâches, donc chaque leçon dure environ 5 minutes",
      "Vie privée : pas de numéros de sécurité sociale ni de dates de naissance sur les formulaires simples ; les informations des bénévoles restent dans l'outil de formulaire, pas dans l'IA",
      "Les vérifications d'antécédents pour les missions auprès d'enfants ou de personnes vulnérables suivent la procédure approuvée par l'organisation",
      "Les histoires doivent être autorisées ou inventées",
      "Des outils gratuits comme Google Forms ou Microsoft Forms"
    ],
    prerequisites: "« Introduction à l'IA pour les associations », ou une première expérience d'un assistant d'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des faits d'une mission bénévole", action: "rédiger une fiche de mission qui dit quoi, quand, où, pourquoi, quelles vérifications sont nécessaires et qui contacter", standard: "avec chaque fait vérifié et vos coordonnées ajoutées" },
    { id: "O2", condition: "À partir de votre fiche de mission", action: "rédiger avec l'IA une courte publication pour les réseaux sociaux et un e-mail aux soutiens", standard: "chacun avec un seul appel à l'action et seulement des histoires inventées ou autorisées" },
    { id: "O3", condition: "Pour votre communauté", action: "lister de nouveaux endroits où trouver des bénévoles et des façons de rendre la mission plus facile à rejoindre", standard: "en vérifiant que chaque groupe ou site existe vraiment avant de le contacter" },
    { id: "O4", condition: "Avec Google Forms ou Microsoft Forms", action: "créer un court formulaire d'inscription qui ne demande que le nécessaire", standard: "sans demander de détails sensibles et en testant vous-même le formulaire" },
    { id: "O5", condition: "Pour un nouveau bénévole", action: "écrire un message d'accueil et un rappel avec des cases à remplir", standard: "avec la date, l'heure, le lieu, ce qu'il faut apporter et une personne de contact" },
    { id: "O6", condition: "Pour les bénévoles que vous recrutez", action: "planifier comment vous allez les remercier, partager les résultats et leur demander leur avis", standard: "avec des dates dans votre calendrier" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver les bons bénévoles",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rédiger une fiche de mission bénévole claire",
          minutes: 5,
          goal: "Rédiger une fiche de mission qui dit au bénévole exactement quoi, quand, où et pourquoi.",
          text: [
            "Les gens disent oui quand ils savent exactement à quoi ils s'engagent. Une demande vague comme \"On a besoin d'aide !\" obtient peu de réponses. Une mission claire en obtient plus.",
            "Une bonne fiche de mission répond à : que vais-je faire ? Quand et combien de temps ? Où ? Quelles compétences ou vérifications faut-il (par exemple une vérification des antécédents pour travailler avec des enfants) ? Pourquoi est-ce important ? Qui contacter ?",
            "Donnez les faits à l'IA et demandez-lui de les rédiger. Par exemple : \"Écris une courte fiche de mission pour un bénévole de la banque alimentaire le samedi, de 9 h à midi deux fois par mois, port de charges jusqu'à 9 kg, aucune expérience nécessaire. Ton chaleureux et clair, moins de 150 mots.\""
          ],
          steps: ["Notez les tâches, l'horaire, le lieu et les exigences éventuelles.", "Écrivez une phrase sur l'importance de la mission.", "Demandez à l'IA de transformer vos notes en courte fiche de mission.", "Vérifiez chaque fait et ajoutez vous-même vos coordonnées."],
          words: [["Fiche de mission", "une courte description d'une mission bénévole : tâches, horaire, lieu, besoins et but."], ["Vérification des antécédents", "un contrôle du passé judiciaire d'une personne, souvent exigé pour travailler avec des enfants ou des personnes vulnérables."]],
          slides: [
            { title: "Une demande claire obtient plus de oui", bullets: ["\"On a besoin d'aide !\" est trop vague", "Dites exactement quoi, quand et où"] },
            { title: "Une fiche de mission répond à", bullets: ["Que vais-je faire ? Quand et combien de temps ?", "Où ? Quelles compétences ou vérifications ?", "Pourquoi est-ce important ? Qui contacter ?"] },
            { title: "Laissez l'IA la rédiger", bullets: ["Donnez-lui vos faits", "Demandez un texte chaleureux, clair et court", "Vérifiez vous-même chaque détail"] }
          ],
          tryIt: "Choisissez une vraie mission bénévole dont votre organisation a besoin. Écrivez les faits, demandez à l'IA une fiche de mission de moins de 150 mots, et corrigez ce qui est faux.",
          youCanNow: "rédiger une fiche de mission bénévole claire avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi une fiche de mission claire reçoit-elle plus de réponses ?", options: ["Les gens disent oui quand ils savent exactement à quoi ils s'engagent", "Elle est plus longue", "Elle a plus de points d'exclamation", "Elle cache le temps demandé"], answer: 0, why: "Une demande floue reçoit peu de réponses ; une mission claire en reçoit plus." },
            { objective: "O1", q: "Votre mission de soutien scolaire se fait auprès d'enfants. Que doit mentionner la fiche ?", options: ["Rien de plus", "Qu'une vérification d'antécédents est nécessaire", "Les noms des enfants", "Les notes scolaires des enfants"], answer: 1, why: "Une fiche de mission dit quelles vérifications sont nécessaires, comme une vérification d'antécédents pour travailler avec des enfants." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rédiger des annonces et des e-mails de recrutement",
          minutes: 5,
          goal: "Transformer une fiche de mission en publication pour les réseaux sociaux et en e-mail aux soutiens.",
          text: [
            "Chaque support demande sa propre longueur. Une publication sur les réseaux sociaux est courte et amicale, avec une seule action claire. Un e-mail aux soutiens peut raconter une petite histoire et donner plus de détails.",
            "Demandez les deux à l'IA à partir de la même fiche : \"À partir de cette fiche de mission, écris une publication Facebook de 50 mots avec un appel à l'action, et un e-mail de 150 mots à nos soutiens qui commence par une courte histoire sur une famille que nous aidons.\" Utilisez une histoire inventée ou approuvée, jamais les détails privés d'une vraie personne sans son accord.",
            "Demandez plusieurs versions et choisissez celle qui vous ressemble le plus. Ajoutez vous-même le vrai lien d'inscription."
          ],
          steps: ["Collez votre fiche de mission dans l'IA.", "Demandez une courte publication avec un appel à l'action.", "Demandez un e-mail plus long pour les soutiens.", "Demandez deux versions de chacun et choisissez.", "Ajoutez votre vrai lien d'inscription et vérifiez les détails."],
          words: [["Appel à l'action", "la seule chose que vous demandez au lecteur de faire, comme \"Inscrivez-vous ici\"."], ["Soutiens", "les personnes qui connaissent déjà votre organisation et y tiennent : donateurs, membres, anciens bénévoles."]],
          slides: [
            { title: "Adaptez le message au support", bullets: ["Publication : courte, une action", "E-mail : une petite histoire et plus de détails"] },
            { title: "Demandez les deux à l'IA", bullets: ["Collez la fiche de mission", "Demandez la publication et l'e-mail", "Demandez deux versions de chacun"] },
            { title: "Avant de publier", bullets: ["Choisissez celle qui vous ressemble", "Ajoutez le vrai lien d'inscription", "Pas d'histoires privées sans accord"] }
          ],
          tryIt: "Utilisez votre fiche de mission de la leçon 1 pour obtenir une publication de 50 mots et un e-mail de 150 mots aux soutiens. Choisissez la meilleure version de chacun et retouchez-la.",
          youCanNow: "créer des annonces et des e-mails de recrutement pour différents publics à partir d'une seule fiche de mission.",
          quickCheck: [
            { objective: "O2", q: "Lequel est plus long et peut raconter une petite histoire ?", options: ["Une publication sur les réseaux sociaux", "Un rappel par SMS", "Un e-mail aux soutiens", "Une question de formulaire"], answer: 2, why: "Une publication est courte ; un e-mail aux soutiens peut raconter une histoire et donner plus de détails." },
            { objective: "O2", q: "La publication de l'IA n'a pas de lien d'inscription. Que faites-vous ?", options: ["Vous la publiez quand même", "Vous demandez à l'IA d'inventer un lien", "Vous retirez l'appel à l'action", "Vous ajoutez vous-même le vrai lien d'inscription"], answer: 3, why: "Ajoutez vous-même le vrai lien d'inscription." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Toucher de nouveaux types de bénévoles",
          minutes: 5,
          goal: "Utiliser l'IA pour trouver où chercher des bénévoles et comment rendre les missions plus faciles à rejoindre.",
          text: [
            "Beaucoup d'organisations sollicitent toujours les mêmes quelques personnes. L'IA est douée pour trouver de nouvelles pistes : universités et lycées dont les élèves doivent faire des heures de service, employeurs qui ont des journées de bénévolat, communautés religieuses, clubs d'aînés, et sites de petites annonces de bénévolat.",
            "Demandez à l'IA : \"Liste 10 endroits dans une ville moyenne pour recruter des bénévoles pour une banque alimentaire le week-end, avec une phrase à dire à chacun.\" Vérifiez que chaque groupe ou site cité existe vraiment avant de le contacter.",
            "Demandez aussi comment rendre les missions plus faciles à accepter : créneaux plus courts, missions adaptées aux familles, tâches à distance comme passer des appels ou écrire des cartes, et documents dans les langues parlées par votre communauté."
          ],
          steps: ["Demandez à l'IA une liste d'endroits où trouver des bénévoles.", "Demandez une phrase à dire à chacun.", "Vérifiez que chaque endroit ou site existe vraiment.", "Demandez comment rendre la mission plus facile à rejoindre.", "Choisissez vos trois meilleures pistes à essayer."],
          words: [["Heures de service", "des heures de bénévolat que des écoles ou des programmes demandent aux élèves d'accomplir."], ["Tâche à distance", "du bénévolat fait depuis chez soi, comme des appels, des cartes ou de l'aide en ligne."]],
          slides: [
            { title: "Regardez au-delà des habitués", bullets: ["Écoles et universités", "Employeurs avec des journées de bénévolat", "Communautés religieuses et clubs d'aînés"] },
            { title: "Cherchez des idées avec l'IA", bullets: ["Demandez 10 endroits et quoi leur dire", "Vérifiez que chaque endroit existe"] },
            { title: "Facilitez le oui", bullets: ["Créneaux plus courts", "Missions familiales et à distance", "Les langues de votre communauté"] }
          ],
          tryIt: "Demandez à l'IA 10 endroits où recruter des bénévoles pour votre mission dans votre région. Vérifiez-les, puis choisissez vos trois meilleures pistes et notez qui vous allez contacter.",
          youCanNow: "trouver de nouvelles sources de bénévoles et rendre les missions plus faciles à rejoindre.",
          quickCheck: [
            { objective: "O3", q: "Laquelle est une tâche à distance qui rend une mission plus facile à rejoindre ?", options: ["Passer des appels ou écrire des cartes", "Porter des cartons le samedi", "Conduire la camionnette de livraison", "Gérer la scène de l'événement"], answer: 0, why: "Les tâches à distance, comme passer des appels ou écrire des cartes, sont plus faciles à accepter." },
            { objective: "O3", q: "Beaucoup de familles que vous servez parlent espagnol, et vous voulez qu'elles deviennent bénévoles aussi. Qu'est-ce qui aide ?", options: ["Publier seulement en anglais", "Proposer des documents dans les langues que parle votre communauté", "Demander à l'IA de choisir les bénévoles", "Exiger de longs créneaux"], answer: 1, why: "Des documents dans les langues de votre communauté rendent les missions plus faciles à rejoindre." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver les bons bénévoles",
        questions: [
          { objective: "O1", q: "Quelle demande de bénévoles obtiendra sans doute le plus de réponses ?", options: ["\"On a besoin d'aide !\"", "\"Cherchons bénévoles, détails plus tard.\"", "\"Bénévole à la banque alimentaire, le samedi de 9 h à midi, deux fois par mois, aucune expérience nécessaire.\"", "\"Quelqu'un ?\""], answer: 2, why: "Une mission claire dit quoi, quand et où." },
          { objective: "O2", q: "Qu'est-ce qu'un appel à l'action ?", options: ["La seule chose que vous demandez au lecteur de faire", "Un appel téléphonique à un bénévole", "Une sorte d'IA", "Une réunion du conseil"], answer: 0, why: "Il dit au lecteur l'étape suivante, comme \"Inscrivez-vous ici\"." },
          { objective: "O3", q: "L'IA propose un groupe de bénévoles local dont vous n'avez jamais entendu parler. Que faites-vous ?", options: ["Le contacter tout de suite avec votre liste de bénévoles", "Le mettre sur votre site", "Supposer qu'il existe", "Vérifier qu'il existe avant de le contacter"], answer: 3, why: "L'IA peut inventer des noms ; vérifiez d'abord." },
          { objective: "O3", q: "Quelle est une façon de rendre une mission plus facile à rejoindre ?", options: ["Seulement des créneaux plus longs", "Proposer des créneaux plus courts et des tâches à distance", "Exiger dix ans d'expérience", "N'accepter que les personnes déjà bénévoles"], answer: 1, why: "Des missions souples permettent à plus de gens de dire oui." },
          { objective: "O2", q: "Vous voulez une histoire dans votre e-mail aux soutiens. Qu'est-ce qui est sûr ?", options: ["Le nom et la situation d'un vrai bénéficiaire sans son accord", "Une histoire inventée ou approuvée", "L'adresse d'un bénévole", "Le montant du don d'un donateur"], answer: 1, why: "Ne partagez jamais les détails privés de vraies personnes sans leur accord." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Inscrire, accueillir et garder les bénévoles",
      lessons: [
        {
          objectives: ["O4"],
          title: "Créer un formulaire d'inscription simple",
          minutes: 5,
          goal: "Créer un court formulaire d'inscription en ligne et ne demander que le nécessaire.",
          text: [
            "Un outil de formulaire gratuit comme Google Forms ou Microsoft Forms permet aux gens de s'inscrire depuis un lien. Les réponses vont dans un tableur que vous contrôlez.",
            "Ne demandez que le nécessaire : nom, e-mail ou téléphone, créneaux possibles, et ce que vous devez savoir (comme les langues parlées). Ne demandez pas de numéro de sécurité sociale, de date de naissance ou d'autres détails sensibles dans un formulaire simple. Si une vérification des antécédents est nécessaire, utilisez la procédure approuvée par votre organisation.",
            "L'IA peut proposer des questions et des formulations : \"Propose 6 courtes questions de formulaire d'inscription pour une mission bénévole dans une banque alimentaire.\" Vous créez vous-même le formulaire, et les réponses restent dans votre outil de formulaire, pas dans l'IA."
          ],
          steps: ["Ouvrez Google Forms ou Microsoft Forms et commencez un formulaire vierge.", "Demandez à l'IA de proposer des questions courtes.", "Ne gardez que ce dont vous avez vraiment besoin.", "Ajoutez les créneaux sous forme de cases à cocher.", "Testez le formulaire vous-même, puis copiez le lien de partage."],
          words: [["Formulaire", "une série de questions en ligne que les gens remplissent ; les réponses sont enregistrées pour vous."], ["Détails sensibles", "des informations qui pourraient nuire à quelqu'un si elles étaient partagées, comme des numéros d'identité ou des détails de santé."]],
          slides: [
            { title: "Des outils de formulaire gratuits", bullets: ["Google Forms ou Microsoft Forms", "Les gens s'inscrivent depuis un lien", "Les réponses vont dans un tableur que vous contrôlez"] },
            { title: "Ne demandez que le nécessaire", bullets: ["Le nom et le moyen de contact", "Les créneaux possibles", "Pas de numéros d'identité ni de dates de naissance"] },
            { title: "Le rôle de l'IA", bullets: ["Proposer des questions et des formulations", "Vous créez le formulaire", "Les réponses ne vont jamais dans l'IA"] }
          ],
          tryIt: "Créez un formulaire d'inscription pour votre mission avec six questions au maximum. Remplissez-le vous-même pour le tester, et copiez le lien dans votre annonce de recrutement.",
          youCanNow: "créer un formulaire d'inscription de bénévoles court et sûr.",
          quickCheck: [
            { objective: "O4", q: "Où vont les réponses d'inscription dans un outil de formulaire gratuit ?", options: ["Dans l'assistant d'IA", "Sur votre page de réseau social", "Dans un tableur que vous contrôlez", "À chaque bénévole"], answer: 2, why: "Les réponses vont dans un tableur que vous contrôlez." },
            { objective: "O4", q: "La mission demande une vérification d'antécédents. Comment faites-vous ?", options: ["Vous ajoutez le numéro de sécurité sociale au formulaire simple", "Vous demandez la date de naissance dans le formulaire", "Vous vous en passez", "Vous utilisez la procédure de vérification approuvée par votre organisation"], answer: 3, why: "Ne recueillez pas de détails sensibles dans un formulaire simple ; utilisez la procédure approuvée." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Messages d'accueil et de rappel",
          minutes: 4,
          goal: "Écrire un message d'accueil et un rappel qui préparent les nouveaux bénévoles.",
          text: [
            "Les premiers jours décident si un nouveau bénévole revient. Un accueil rapide donne aux gens le sentiment d'être attendus et prêts.",
            "Un bon accueil dit merci, confirme la date, l'heure et le lieu, dit quoi porter ou apporter, nomme une personne de contact, et décrit comment se passera la première séance. Un rappel quelques jours avant reprend les détails clés.",
            "Demandez les deux à l'IA, avec des cases à remplir : \"Écris un e-mail d'accueil chaleureux pour un nouveau bénévole de la banque alimentaire. Utilise [prénom], [date du créneau], [personne de contact]. Moins de 120 mots.\" Puis remplissez les détails avec votre outil d'e-mail ou le publipostage, pas avec l'IA."
          ],
          steps: ["Listez ce qu'un nouveau bénévole doit savoir.", "Demandez à l'IA un message d'accueil avec des cases à remplir.", "Demandez à l'IA un court rappel pour quelques jours avant.", "Remplissez les détails dans votre outil d'e-mail.", "Vérifiez chaque date et chaque heure."],
          words: [["Intégration", "aider un nouveau bénévole à se préparer : accueil, formation et première séance."], ["Case à remplir", "un repère comme [prénom] que vous remplacez plus tard par le vrai détail."]],
          slides: [
            { title: "Les premiers jours comptent", bullets: ["Un accueil chaleureux fait revenir les gens"] },
            { title: "Un bon accueil dit", bullets: ["Merci", "La date, l'heure et le lieu", "Quoi porter ou apporter", "Qui contacter"] },
            { title: "Rédigez avec des cases à remplir", bullets: ["[prénom], [date du créneau], [personne de contact]", "Remplissez les détails dans votre outil d'e-mail", "Envoyez un rappel quelques jours avant"] }
          ],
          tryIt: "Demandez à l'IA un e-mail d'accueil et un SMS de rappel avec des cases à remplir pour votre mission. Retouchez les deux pour qu'ils ressemblent à votre organisation.",
          youCanNow: "écrire des messages d'accueil et de rappel qui aident les nouveaux bénévoles à venir prêts.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui décide si un nouveau bénévole revient ?", options: ["Les premiers jours", "La longueur du formulaire", "La couleur de l'affiche", "Le nombre de hashtags utilisés"], answer: 0, why: "Les premiers jours décident si un nouveau bénévole revient." },
            { objective: "O5", q: "Un nouveau bénévole commence samedi et n'a pas eu de vos nouvelles. Qu'envoyez-vous d'abord ?", options: ["Rien jusqu'à samedi", "Un accueil chaleureux avec la date, l'heure, le lieu, ce qu'il faut apporter et un contact", "Une demande de don", "Un long règlement intérieur"], answer: 1, why: "Un bon accueil confirme les détails et nomme un contact pour que la personne se sente prête." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Remercier et garder les bénévoles",
          minutes: 5,
          goal: "Faire un plan simple pour remercier les bénévoles et comprendre pourquoi ils restent ou partent.",
          text: [
            "Garder un bénévole est plus facile qu'en trouver un nouveau. Les gens restent quand ils se sentent remerciés, utiles et membres d'une équipe.",
            "Façons simples de remercier : un mot personnel après la première séance, partager ce que leur travail a permis (\"L'équipe de samedi a préparé 300 colis\"), une reconnaissance lors d'un rassemblement, et leur demander leurs idées. L'IA peut aider à écrire des mots de remerciement et de courts questionnaires, comme trois questions sur ce qui s'est bien passé et ce qu'il faut changer.",
            "Écrivez un court plan : quand vous remercierez, comment vous partagerez les résultats, et quand vous demanderez leur avis. Puis notez-le dans votre agenda."
          ],
          steps: ["Prévoyez un remerciement après la première séance.", "Prévoyez comment partager les résultats avec les bénévoles.", "Demandez à l'IA de rédiger un questionnaire de trois questions.", "Notez les dates du remerciement et du questionnaire dans votre agenda."],
          words: [["Fidélisation", "garder des bénévoles qui reviennent avec le temps."], ["Questionnaire d'avis", "quelques questions qui demandent aux gens ce qui s'est bien passé et ce qu'il faut changer."]],
          slides: [
            { title: "Pourquoi les gens restent", bullets: ["Ils se sentent remerciés", "Ils se sentent utiles", "Ils se sentent membres d'une équipe"] },
            { title: "Façons de remercier", bullets: ["Un mot après la première séance", "Partager les résultats : \"300 colis préparés\"", "Reconnaissance et demande de leurs idées"] },
            { title: "Votre plan pour les garder", bullets: ["Quand vous remercierez", "Comment vous partagerez les résultats", "Quand vous demanderez leur avis"] }
          ],
          tryIt: "Tâche finale : rassemblez votre kit de recrutement complet : fiche de mission, publication, e-mail, formulaire d'inscription, message d'accueil, rappel et plan de remerciement. Retouchez chaque élément et vérifiez chaque détail.",
          youCanNow: "recruter, accueillir et garder des bénévoles avec des messages rédigés par l'IA que vous avez vérifiés et faits vôtres.",
          quickCheck: [
            { objective: "O6", q: "Laquelle est une façon simple de remercier les bénévoles ?", options: ["Leur demander de recruter cinq amis", "Leur envoyer une facture pour les fournitures", "Partager ce que leur travail a permis", "Leur donner plus de créneaux sans leur demander"], answer: 2, why: "Partager les résultats, comme le nombre de colis préparés, montre aux bénévoles que leur travail compte." },
            { objective: "O6", q: "Vous avez écrit un plan de remerciement mais vous l'oubliez sans cesse. Que faites-vous ?", options: ["Vous abandonnez le plan", "Vous demandez à l'IA de s'en souvenir", "Vous ne remerciez qu'une fois par an", "Vous mettez chaque étape dans votre calendrier avec des dates"], answer: 3, why: "Écrivez le plan et mettez-le dans votre calendrier." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Inscrire, accueillir et garder les bénévoles",
        questions: [
          { objective: "O4", q: "Quelle question n'a PAS sa place dans un formulaire d'inscription simple ?", options: ["Quels créneaux pouvez-vous faire ?", "Votre e-mail ou téléphone", "Les langues que vous parlez", "Votre numéro de sécurité sociale"], answer: 3, why: "Les numéros d'identité sensibles n'ont pas leur place dans un formulaire simple." },
          { objective: "O4", q: "Où doivent rester les réponses des bénévoles au formulaire ?", options: ["Dans votre outil de formulaire et votre tableur", "Collées dans une discussion avec l'IA", "Publiées en ligne", "Dans une conversation de groupe par SMS"], answer: 0, why: "Les données personnelles restent dans des outils que vous contrôlez, pas dans l'IA." },
          { objective: "O5", q: "Un bon message d'accueil contient :", options: ["Seulement un logo", "Une demande d'argent", "La date, l'heure, le lieu et une personne de contact", "Rien d'autre que \"Merci\""], answer: 2, why: "Des détails clairs aident les nouveaux bénévoles à venir prêts." },
          { objective: "O5", q: "Quand envoyer un rappel ?", options: ["Un mois après la séance", "Jamais", "Seulement s'ils l'ont manquée", "Quelques jours avant la séance"], answer: 3, why: "Un rappel peu avant aide les gens à s'en souvenir." },
          { objective: "O6", q: "Qu'est-ce qui aide à garder les bénévoles ?", options: ["Ne jamais les contacter", "Des créneaux plus longs sans pause", "Partager ce que leur travail a permis", "Ignorer leurs idées"], answer: 2, why: "Les gens restent quand ils voient leur impact et se sentent remerciés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Recruter des bénévoles avec l'IA",
    questions: [
      { objective: "O1", q: "Une fiche de mission claire répond à :", options: ["Seulement le nom de l'organisation", "Quoi, quand, où, pourquoi et qui contacter", "Le salaire du directeur", "Rien de précis"], answer: 1, why: "Des détails clairs aident les gens à dire oui." },
      { objective: "O1", q: "Quand une vérification des antécédents est-elle souvent nécessaire ?", options: ["Pour les missions auprès d'enfants ou de personnes vulnérables", "Pour chaque e-mail", "Jamais", "Seulement pour les donateurs"], answer: 0, why: "Les organisations exigent souvent des vérifications pour les missions auprès d'enfants ou de personnes vulnérables." },
      { objective: "O1", q: "Que donnez-vous à l'IA pour rédiger une fiche de mission ?", options: ["Les numéros de téléphone des bénévoles", "Votre mot de passe", "Les faits de la mission", "Rien"], answer: 2, why: "L'IA rédige à partir des faits que vous lui donnez." },
      { objective: "O1", q: "Après que l'IA a rédigé une fiche de mission, vous :", options: ["Vérifiez chaque fait et ajoutez vos coordonnées", "La publiez sans la lire", "Ajoutez l'adresse d'un bénévole", "La supprimez"], answer: 0, why: "C'est vous qui êtes responsable de l'exactitude." },
      { objective: "O2", q: "Une annonce de recrutement sur les réseaux sociaux doit être :", options: ["Longue de dix pages", "Pleine d'histoires privées", "Sans lien", "Courte, avec une seule action claire"], answer: 3, why: "Les publications courtes avec une seule action marchent le mieux." },
      { objective: "O2", q: "Un e-mail aux soutiens peut :", options: ["Contenir le montant des dons des donateurs", "Raconter une courte histoire et donner plus de détails", "Lister les noms des bénéficiaires", "Oublier le lien d'inscription"], answer: 1, why: "L'e-mail laisse plus de place pour une histoire et des détails." },
      { objective: "O2", q: "Pourquoi demander deux versions à l'IA ?", options: ["Pour utiliser deux fois plus de données", "Pour choisir celle qui vous ressemble le plus", "L'IA l'exige", "Pour embrouiller les lecteurs"], answer: 1, why: "Comparer des versions aide à choisir votre voix." },
      { objective: "O3", q: "Quelle est une bonne nouvelle piste pour trouver des bénévoles ?", options: ["Seulement les cinq mêmes personnes", "La liste de téléphone privée d'un inconnu", "Une liste d'e-mails de spam", "Un lycée local dont les élèves doivent faire des heures de service"], answer: 3, why: "Les élèves ont souvent besoin d'heures de service." },
      { objective: "O3", q: "L'IA cite un site de bénévolat que vous ne connaissez pas. Vous devez :", options: ["Vérifier d'abord qu'il existe", "Lui envoyer votre liste de bénévoles", "Le payer tout de suite", "Lui faire confiance"], answer: 0, why: "L'IA peut inventer des noms et des sites." },
      { objective: "O3", q: "Qu'est-ce qui rend une mission plus facile à rejoindre ?", options: ["Un créneau de 12 heures", "Des exigences d'expérience strictes", "Une tâche à distance comme écrire des cartes", "Des documents dans une seule langue alors que le quartier en parle une autre"], answer: 2, why: "Les tâches à distance et souples conviennent à plus de gens." },
      { objective: "O4", q: "Quels outils gratuits permettent de créer un formulaire d'inscription ?", options: ["Une calculatrice", "Une application photo", "Une application de musique", "Google Forms ou Microsoft Forms"], answer: 3, why: "Les deux créent des formulaires en ligne qui enregistrent les réponses." },
      { objective: "O4", q: "Dans un formulaire d'inscription simple, demandez :", options: ["Tous les détails possibles", "Les coordonnées bancaires", "Seulement ce dont vous avez vraiment besoin", "Les dates de naissance et les numéros d'identité"], answer: 2, why: "Moins de données, c'est moins de risque et des inscriptions plus rapides." },
      { objective: "O4", q: "Le rôle de l'IA dans la création d'un formulaire est de :", options: ["Stocker les réponses des bénévoles", "Proposer des questions et des formulations", "Faire les vérifications d'antécédents", "Approuver les bénévoles"], answer: 1, why: "Vous créez le formulaire ; les réponses restent dans votre outil." },
      { objective: "O4", q: "Avant de partager le lien de votre formulaire, vous devez :", options: ["Le remplir vous-même pour le tester", "Supprimer la moitié des questions au hasard", "Cacher le lien", "Demander à l'IA de le remplir"], answer: 0, why: "Tester repère les erreurs avant que les bénévoles ne les voient." },
      { objective: "O5", q: "L'intégration, c'est :", options: ["Retirer des bénévoles", "Acheter un bateau", "Aider un nouveau bénévole à se préparer", "Rédiger une demande de subvention"], answer: 2, why: "L'intégration couvre l'accueil, la formation et la première séance." },
      { objective: "O5", q: "Comment le nom d'un bénévole doit-il apparaître dans une demande à l'IA pour un e-mail d'accueil ?", options: ["Sous la forme [prénom], rempli plus tard", "Nom complet et adresse", "Nom et numéro de téléphone", "Nom et date de naissance"], answer: 0, why: "Les cases à remplir gardent les données personnelles hors de l'IA." },
      { objective: "O5", q: "Où remplissez-vous les vrais détails des e-mails d'accueil ?", options: ["Dans la discussion avec l'IA", "Dans une publication publique", "Sur un écran partagé à la bibliothèque", "Dans votre outil d'e-mail ou par publipostage"], answer: 3, why: "Les vrais détails restent dans des outils que vous contrôlez." },
      { objective: "O6", q: "Pourquoi les bénévoles restent-ils ?", options: ["On ne les contacte jamais", "Ils se sentent remerciés, utiles et membres d'une équipe", "Ils n'ont pas le choix", "Les créneaux s'allongent"], answer: 1, why: "La reconnaissance et le sens font revenir les gens." },
      { objective: "O6", q: "Un court questionnaire d'avis doit demander :", options: ["Leur compte bancaire", "Ce qui s'est bien passé et ce qu'il faut changer", "Leurs antécédents médicaux", "Leur mot de passe"], answer: 1, why: "Les avis vous aident à améliorer l'expérience." },
      { objective: "O6", q: "Votre plan de remerciement doit être :", options: ["Gardé seulement dans votre tête", "Fait une fois tous les cinq ans", "Laissé à l'IA pour l'envoyer", "Noté dans votre agenda avec des dates"], answer: 3, why: "Le programmer garantit qu'il sera fait." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      7,
      11,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Fiche de mission",
        objective: "O1",
        notYet: "Il manque quoi, quand, où, pourquoi ou qui contacter.",
        meets: "Répond à quoi, quand, où, pourquoi, aux vérifications nécessaires et à qui contacter.",
        exceeds: "Courte, chaleureuse et vérifiée par quelqu'un qui connaît la mission."
      },
      {
        name: "Publication et e-mail",
        objective: "O2",
        notYet: "Pas d'appel à l'action clair, ou l'histoire d'une vraie personne utilisée sans autorisation.",
        meets: "Une courte publication et un e-mail aux soutiens, chacun avec une action et le vrai lien d'inscription.",
        exceeds: "L'apprenant a essayé plusieurs versions et a choisi celle qui ressemble le plus à l'organisation."
      },
      {
        name: "Formulaire d'inscription",
        objective: "O4",
        notYet: "Demande des détails sensibles ou n'a pas été testé.",
        meets: "Quelques questions simples qui ne demandent que le nécessaire, testé par l'apprenant.",
        exceeds: "Demande les langues ou les créneaux préférés pour mieux placer les bénévoles."
      },
      {
        name: "Accueil et rappel",
        objective: "O5",
        notYet: "Il manque la date, l'heure, le lieu ou une personne de contact.",
        meets: "Un accueil et un rappel à une semaine avec toutes les informations clés, avec des cases à remplir.",
        exceeds: "Dit à quoi ressemblera le premier créneau et quoi porter ou apporter."
      },
      {
        name: "Plan de remerciement",
        objective: "O6",
        notYet: "Pas de plan, ou pas de dates.",
        meets: "Dit quand remercier, comment partager les résultats et quand demander un avis, avec des dates.",
        exceeds: "Contient un court questionnaire sur ce qui a bien marché et ce qu'il faut changer."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Nouvelles inscriptions de bénévoles pour la mission dans les 30 jours (enquête de suivi)",
      "Nouveaux bénévoles qui reviennent pour un deuxième créneau",
      "Organisations qui touchent un nouveau groupe de bénévoles, comme des étudiants ou des employeurs"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit et Google Forms ou Microsoft Forms",
      "Les faits d'une vraie mission bénévole",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez à chaque apprenant d'apporter une vraie mission qu'il doit pourvoir.",
      "Faites remplir aux apprenants le formulaire d'inscription des autres pour le tester.",
      "Rappelez aux apprenants de ne pas recueillir de numéros de sécurité sociale ni de dates de naissance dans les formulaires simples.",
      "Rappelez aux apprenants de vérifier que tout groupe ou site web proposé par l'IA existe vraiment avant de le contacter.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
