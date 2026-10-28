"use strict";

// Koach Learn course (French translation of youth/youth-ai-school-success.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-school-success-fr",
  lang: "fr",
  translationOf: "youth-ai-school-success",
  category: "Youth",
  name: "L'IA pour réussir à l'école",
  skills: "Planifier sa semaine de cours, Découper un gros projet en étapes, Comprendre une lecture difficile, Obtenir un avis sur son propre texte, Faire un plan de révision pour un contrôle, Utiliser l'IA dans le respect des règles de l'école",
  outcome: "utiliser un assistant d'IA gratuit, dans le respect des règles de votre école, pour planifier votre semaine, découper un gros devoir en étapes, comprendre une lecture difficile, obtenir un avis sur un texte que vous avez écrit, et construire un plan de révision pour un vrai contrôle.",
  about: [
    "Ce cours s'adresse aux collégiens et lycéens d'environ 13 à 18 ans qui veulent que l'école paraisse moins écrasante. Il présente l'IA comme un agenda, un coach et un partenaire d'étude, jamais comme quelqu'un qui fait votre travail à votre place.",
    "Vous planifierez une vraie semaine, découperez un gros projet en petites étapes, vous ferez aider pour comprendre une lecture difficile, obtiendrez un avis sur un brouillon que vous avez écrit, et ferez un plan de révision pour un contrôle à venir.",
    "Les règles d'abord : chaque école et chaque professeur a ses propres règles sur l'IA. Vérifiez-les, vérifiez l'âge minimum de l'outil, et parlez avec un parent ou tuteur avant de vous inscrire où que ce soit. Utilisez votre compte scolaire pour les outils approuvés par l'école. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\"."
  ],
  finalTask: "Choisissez un vrai contrôle ou projet prévu dans les deux semaines. Utilisez l'IA pour faire un plan de révision jour par jour qui tient compte de vos cours, de vos activités et de votre petit boulot ou de vos tâches à la maison, puis demandez-lui 5 questions d'entraînement avec les réponses cachées, répondez vous-même, vérifiez avec vos notes, et écrivez une ligne sur la façon dont vous avez respecté les règles de votre école sur l'IA.",
  chapters: [
    {
      name: "Chapitre 1 : S'organiser",
      lessons: [
        {
          title: "Planifier votre semaine de cours",
          minutes: 5,
          goal: "Transformer une liste de tâches en désordre en un plan de semaine simple.",
          text: [
            "L'école, l'entraînement, les clubs, un petit boulot, les tâches à la maison et les amis se disputent votre temps. Un assistant d'IA peut vous aider à mettre de l'ordre si vous lui donnez les faits.",
            "Listez ce qui est à rendre et quand, plus vos horaires fixes comme l'entraînement ou le travail. Puis demandez : \"Voici ma semaine. Fais un plan simple avec du temps de travail chaque jour, le plus difficile en premier, et des pauses. Que ça tienne sur un écran.\"",
            "Le plan est un brouillon. Déplacez les choses jusqu'à ce qu'il colle à votre vraie vie, puis recopiez-le dans un agenda, Google Agenda ou l'application d'agenda de votre école."
          ],
          steps: ["Notez chaque tâche et chaque date de remise.", "Ajoutez les horaires fixes : cours, entraînement, travail, famille.", "Demandez à l'IA un plan de semaine simple avec des pauses.", "Adaptez-le à vous, puis recopiez-le dans votre agenda."],
          words: [["Date de remise", "le jour où un travail doit être rendu."], ["Prioriser", "décider quoi faire en premier parce que c'est le plus important ou le plus urgent."]],
          slides: [
            { title: "Donnez les faits à l'IA", bullets: ["Ce qui est à rendre et quand", "Les horaires d'entraînement, de travail et de famille"] },
            { title: "Demandez un plan simple", bullets: ["Du temps de travail chaque jour", "Le plus difficile en premier", "Des pauses prévues", "Tient sur un écran"] },
            { title: "Rendez-le réel", bullets: ["Déplacez les choses pour coller à votre vie", "Recopiez-le dans un agenda"] }
          ],
          tryIt: "Listez tout ce qui est à rendre cette semaine et vos horaires fixes. Demandez à un assistant d'IA que vous avez le droit d'utiliser un plan de semaine simple. Changez une chose pour l'adapter à votre vie, et recopiez-le dans un agenda.",
          youCanNow: "construire un plan de semaine réaliste avec l'aide de l'IA."
        },
        {
          title: "Découper un gros projet en petites étapes",
          minutes: 5,
          goal: "Découper un gros devoir en petites étapes datées.",
          text: [
            "Les gros projets font peur parce qu'ils ressemblent à une seule énorme chose. Les découper en petites étapes les rend faisables.",
            "Donnez à l'IA les consignes du devoir (avec vos mots ou collées, sans information privée) et la date de remise. Demandez : \"Découpe ce travail en petites étapes de 30 minutes chacune, avec une date pour chaque étape, pour finir deux jours en avance.\"",
            "Lisez les étapes et vérifiez qu'elles correspondent à ce que votre professeur a demandé. Les consignes et la grille d'évaluation de votre professeur passent toujours avant le plan de l'IA."
          ],
          steps: ["Donnez les consignes et la date de remise.", "Demandez des étapes de 30 minutes avec des dates.", "Demandez de finir deux jours en avance.", "Comparez les étapes avec la grille d'évaluation du professeur."],
          words: [["Grille d'évaluation", "la liste que votre professeur utilise pour noter le travail."], ["Jalon", "un petit objectif sur le chemin d'un objectif plus grand."]],
          slides: [
            { title: "Gros projet, petites étapes", bullets: ["Les énormes tâches font peur", "Les petites étapes paraissent faisables"] },
            { title: "Demandez à l'IA de découper", bullets: ["Des étapes de 30 minutes", "Une date pour chacune", "Finir deux jours en avance"] },
            { title: "La grille d'évaluation l'emporte", bullets: ["Comparez les étapes aux consignes", "Les règles du professeur passent d'abord"] }
          ],
          tryIt: "Prenez un gros devoir que vous avez maintenant ou que vous avez eu récemment. Demandez à l'IA de le découper en étapes de 30 minutes avec des dates. Comparez-les aux consignes et corrigez toute étape qui ne correspond pas.",
          youCanNow: "transformer un gros devoir en petites étapes datées."
        },
        {
          title: "Comprendre une lecture difficile",
          minutes: 5,
          goal: "Utiliser l'IA pour comprendre un texte difficile tout en le lisant vous-même.",
          text: [
            "Certaines lectures sont dures : langue ancienne, mots scientifiques ou longs paragraphes. L'IA peut vous aider à les comprendre, à condition que vous lisiez quand même le texte.",
            "Essayez ceci : lisez d'abord un paragraphe. Puis demandez à l'IA : \"Explique ce paragraphe avec des mots simples\", \"Que veulent dire ces 3 mots ?\" ou \"Donne-moi 3 questions à garder en tête pendant ma lecture.\"",
            "Un résumé fait par l'IA peut oublier des choses ou se tromper, et il ne remplace pas la lecture demandée en classe. Servez-vous-en pour ouvrir le texte, puis relisez-le."
          ],
          steps: ["Lisez d'abord le paragraphe vous-même.", "Demandez à l'IA de l'expliquer simplement ou de définir les mots difficiles.", "Demandez des questions pour guider votre lecture.", "Relisez le paragraphe avec votre nouvelle compréhension."],
          words: [["Résumé", "une version courte des idées principales."], ["Contexte", "les mots et les idées autour d'un mot qui aident à comprendre son sens."]],
          slides: [
            { title: "Lisez d'abord", bullets: ["Essayez le paragraphe vous-même", "Repérez les mots que vous ne connaissez pas"] },
            { title: "Puis demandez à l'IA", bullets: ["\"Explique ceci avec des mots simples\"", "\"Que veulent dire ces 3 mots ?\"", "\"Donne-moi des questions pour guider ma lecture\""] },
            { title: "Puis relisez", bullets: ["Les résumés de l'IA peuvent oublier des choses", "Ils ne remplacent pas la lecture"] }
          ],
          tryIt: "Prenez un paragraphe difficile d'une lecture de classe. Lisez-le, demandez à l'IA de l'expliquer simplement et de définir deux mots difficiles, puis relisez-le et écrivez une phrase avec vos mots sur ce qu'il veut dire.",
          youCanNow: "utiliser l'IA pour ouvrir une lecture difficile puis la comprendre vous-même."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'organiser",
        questions: [
          { q: "Que donner à l'IA pour l'aider à planifier votre semaine ?", options: ["Votre mot de passe", "Ce qui est à rendre et vos horaires fixes", "Votre adresse", "Rien"], answer: 1, why: "L'IA a besoin de vos tâches et de vos horaires pour faire un plan utile." },
          { q: "L'IA a fait un plan de semaine qui ne tient pas compte de votre entraînement. Vous :", options: ["Le suivez quand même", "Arrêtez l'entraînement", "Supprimez votre agenda", "L'adaptez à votre vraie vie"], answer: 3, why: "Le plan est un brouillon ; c'est vous qui l'adaptez." },
          { q: "Qu'est-ce qu'une grille d'évaluation ?", options: ["La liste que votre professeur utilise pour noter le travail", "Un type de casse-tête", "Une application de révision", "Un mot de passe"], answer: 0, why: "La grille montre ce que votre professeur note." },
          { q: "Les étapes de l'IA oublient une partie exigée par votre professeur. Vous :", options: ["Sautez cette partie", "Demandez à l'IA de vous noter", "L'ajoutez, car les consignes du professeur l'emportent", "Changez les dates de remise"], answer: 2, why: "Les consignes du professeur passent d'abord." },
          { q: "Quelle est la meilleure façon d'utiliser l'IA avec une lecture difficile ?", options: ["Sauter la lecture et n'utiliser que le résumé de l'IA", "Demander à l'IA de passer le contrôle", "La lire d'abord, demander à l'IA d'expliquer, puis relire", "Ne jamais la lire"], answer: 2, why: "L'IA vous aide à comprendre, mais c'est vous qui lisez." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Écrire et réviser plus intelligemment",
      lessons: [
        {
          title: "Obtenir un avis sur votre propre texte",
          minutes: 5,
          goal: "Demander à l'IA un avis sur un brouillon que vous avez écrit, puis le réviser vous-même.",
          text: [
            "Écrire votre propre brouillon, c'est là que l'apprentissage se fait. L'IA peut ensuite jouer le rôle d'un coach : elle peut signaler des phrases peu claires, des preuves qui manquent ou des fautes de grammaire.",
            "Demandez un avis, pas une réécriture : \"Voici mon paragraphe. Ne le réécris pas. Dis-moi 3 choses à améliorer et pourquoi.\" Ensuite, c'est vous qui faites les changements, avec vos mots.",
            "Si votre professeur n'autorise pas l'avis de l'IA, trouvez une autre aide : un camarade, le centre d'aide à l'écriture ou le CDI de l'école, ou votre professeur pendant ses heures de disponibilité."
          ],
          steps: ["Écrivez d'abord votre propre brouillon.", "Vérifiez que votre professeur autorise l'avis de l'IA.", "Demandez 3 choses à améliorer, pas une réécriture.", "Révisez avec vos propres mots."],
          words: [["Brouillon", "une première version de votre texte."], ["Réviser", "améliorer votre texte en changeant des idées, l'ordre ou des mots."]],
          slides: [
            { title: "Écrivez d'abord", bullets: ["Votre brouillon, c'est là que vous apprenez", "L'IA vient après, comme un coach"] },
            { title: "Demandez un avis, pas une réécriture", bullets: ["\"Ne le réécris pas\"", "\"Dis-moi 3 choses à améliorer et pourquoi\""] },
            { title: "C'est vous qui changez", bullets: ["Révisez avec vos propres mots", "IA interdite ? Demandez à un camarade ou au professeur"] }
          ],
          tryIt: "Prenez un paragraphe que vous avez écrit (si votre professeur autorise l'avis de l'IA). Demandez 3 choses à améliorer sans réécriture. Faites les changements vous-même et comparez les deux versions.",
          youCanNow: "obtenir un avis de l'IA et réviser votre propre texte."
        },
        {
          title: "Faire un plan de révision pour un contrôle",
          minutes: 5,
          goal: "Construire un plan de révision jour par jour et des questions d'entraînement pour un vrai contrôle.",
          text: [
            "Bachoter la veille marche en général mal. Réviser un peu chaque jour et se tester, ça marche.",
            "Donnez à l'IA la date du contrôle, les chapitres et le temps dont vous disposez chaque jour : \"Mon contrôle de SVT est vendredi sur les cellules et l'ADN. J'ai 30 minutes par jour. Fais un plan de révision avec un petit quiz chaque jour.\"",
            "Demandez des questions d'entraînement avec les réponses cachées, répondez vous-même, puis vérifiez avec vos notes ou votre manuel. Passez plus de temps sur les questions où vous vous êtes trompé."
          ],
          steps: ["Donnez à l'IA la date du contrôle, les chapitres et votre temps quotidien.", "Demandez un plan jour par jour avec de l'entraînement.", "Répondez aux questions avant de voir les réponses.", "Vérifiez avec vos notes et concentrez-vous sur vos erreurs."],
          words: [["Bachotage", "essayer de tout apprendre juste avant un contrôle."], ["Révision espacée", "réviser un peu sur plusieurs jours au lieu de tout d'un coup."]],
          slides: [
            { title: "Peu et souvent vaut mieux que bachoter", bullets: ["Révisez un peu chaque jour", "Testez-vous au fur et à mesure"] },
            { title: "Demandez un plan", bullets: ["La date du contrôle et les chapitres", "Les minutes dont vous disposez chaque jour", "Un petit quiz chaque jour"] },
            { title: "S'entraîner de la bonne façon", bullets: ["Répondez avant de regarder", "Vérifiez avec vos notes", "Concentrez-vous sur vos erreurs"] }
          ],
          tryIt: "Choisissez un vrai contrôle à venir. Demandez à l'IA un plan de révision jour par jour avec le temps dont vous disposez vraiment. Faites les questions d'entraînement du premier jour et vérifiez-les avec vos notes.",
          youCanNow: "faire un plan de révision et vous entraîner avec l'IA pour un vrai contrôle."
        },
        {
          title: "Utiliser l'IA honnêtement à l'école",
          minutes: 5,
          goal: "Respecter les règles de votre école sur l'IA et dire comment vous l'avez utilisée.",
          text: [
            "Les écoles ont des règles différentes sur l'IA. Certaines l'autorisent pour trouver des idées et avoir un avis, certaines veulent que vous disiez quand vous l'avez utilisée, et certaines l'interdisent pour certains travaux. C'est la règle de votre professeur pour ce devoir qui compte.",
            "Ne rendez jamais un travail écrit par l'IA comme le vôtre quand ce n'est pas permis. Cela peut compter comme de la triche, et vous ratez l'apprentissage. Si l'IA a aidé, dites comment : \"J'ai utilisé l'IA pour faire des questions d'entraînement et pour avoir un avis sur mon deuxième paragraphe.\"",
            "L'IA peut inventer des faits et des sources. Ne recopiez jamais dans votre travail une citation ou un titre de livre donné par l'IA sans l'avoir trouvé vous-même. Gardez les informations privées hors des outils d'IA, et utilisez votre compte scolaire pour les outils de l'école."
          ],
          steps: ["Lisez la règle de votre professeur sur l'IA pour ce devoir.", "N'utilisez l'IA que de la façon permise.", "Écrivez une ligne qui dit comment vous l'avez utilisée.", "Vérifiez vous-même tout fait ou toute source avant de l'utiliser."],
          words: [["Intégrité scolaire", "être honnête dans le travail scolaire : ce que vous rendez montre ce que vous avez fait."], ["Citer ses sources", "dire d'où vient une information."]],
          slides: [
            { title: "Les règles varient", bullets: ["Certaines autorisent l'IA pour les idées ou l'avis", "Certaines l'interdisent pour certains travaux", "La règle de votre professeur compte"] },
            { title: "Soyez transparent sur l'aide de l'IA", bullets: ["Ne faites jamais passer le travail de l'IA pour le vôtre", "Dites en une ligne comment l'IA a aidé"] },
            { title: "Vérifiez les faits et les sources", bullets: ["L'IA peut inventer des citations et des livres", "Trouvez vous-même chaque source", "Pas d'informations privées dans l'IA"] }
          ],
          tryIt: "Tâche finale : pour un vrai contrôle ou projet dans les deux semaines, faites un plan de révision jour par jour avec l'IA, faites 5 questions d'entraînement aux réponses cachées, vérifiez-les avec vos notes, et écrivez une ligne sur la façon dont vous avez respecté les règles de votre école sur l'IA.",
          youCanNow: "utiliser l'IA à l'école de façon permise, honnête et qui vous aide vraiment à apprendre."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Écrire et réviser plus intelligemment",
        questions: [
          { q: "Quelle demande donne un avis utile sans faire votre travail ?", options: ["\"Ne le réécris pas. Dis-moi 3 choses à améliorer et pourquoi.\"", "\"Réécris ma rédaction\"", "\"Écris-la pour moi\"", "\"Rends-la parfaite\""], answer: 0, why: "Demander un avis garde le texte à vous." },
          { q: "Votre professeur n'autorise pas l'avis de l'IA. Vous pouvez :", options: ["Utiliser l'IA en cachette", "Ne pas écrire", "Copier un ami", "Demander à un camarade, au centre d'aide à l'écriture ou au professeur"], answer: 3, why: "D'autres personnes peuvent donner un avis en respectant les règles." },
          { q: "Qu'est-ce que la révision espacée ?", options: ["Réviser toute la nuit avant le contrôle", "Réviser un peu sur plusieurs jours", "Ne pas réviser", "Réviser dans l'espace"], answer: 1, why: "Étaler la révision sur plusieurs jours aide à retenir." },
          { q: "L'IA vous donne une citation d'un livre pour votre rédaction. Vous devez :", options: ["Trouver d'abord vous-même la citation dans le vrai livre", "La recopier", "Inventer un numéro de page", "Demander à l'IA si elle est vraie"], answer: 0, why: "L'IA peut inventer des citations ; vérifiez la vraie source." },
          { q: "Quelle règle sur l'IA compte pour un devoir ?", options: ["Celle d'un ami", "Celle de l'entreprise d'IA", "Celle de votre professeur", "Aucune"], answer: 2, why: "C'est votre professeur qui fixe la règle pour ce devoir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour réussir à l'école",
    questions: [
      { q: "Pour planifier votre semaine avec l'IA, listez :", options: ["Vos mots de passe", "Les tâches, les dates de remise et les horaires fixes", "Les numéros de téléphone de vos amis", "Rien"], answer: 1, why: "Ces faits permettent à l'IA de construire un vrai plan." },
      { q: "Un bon plan de semaine contient :", options: ["Aucune pause", "Seulement des jeux vidéo", "Tout le dimanche soir", "Le plus difficile en premier et des pauses"], answer: 3, why: "Les pauses et le travail difficile en premier aident à finir." },
      { q: "Une fois que l'IA a fait un plan, vous devez :", options: ["L'ignorer", "Le partager avec des inconnus", "Le supprimer", "L'adapter à votre vie et le recopier dans un agenda"], answer: 3, why: "Le plan n'aide que s'il vous convient et que vous le voyez." },
      { q: "Pourquoi découper un gros projet en étapes ?", options: ["Pour le rendre plus long", "Les petites étapes paraissent faisables", "Les professeurs détestent ça", "La loi l'exige"], answer: 1, why: "Les petites étapes rendent le gros travail gérable." },
      { q: "Une bonne demande pour découper un projet :", options: ["\"projet\"", "\"Fais mon projet\"", "\"Découpe ce travail en étapes de 30 minutes avec des dates, pour finir deux jours en avance\"", "\"Fais-le disparaître\""], answer: 2, why: "Elle fixe la taille des étapes, les dates et une marge." },
      { q: "Si les étapes de l'IA et la grille d'évaluation de votre professeur ne sont pas d'accord :", options: ["Suivez la grille", "Suivez l'IA", "Ne suivez ni l'un ni l'autre", "Demandez à un inconnu"], answer: 0, why: "Votre professeur note avec la grille." },
      { q: "Quand vous utilisez l'IA avec une lecture difficile, d'abord :", options: ["Sautez au résumé", "Lisez le paragraphe vous-même", "Fermez le livre", "Demandez à l'IA les réponses du quiz"], answer: 1, why: "Lire d'abord veut dire que l'IA vous aide à comprendre, pas à sauter." },
      { q: "Pourquoi un résumé de l'IA ne peut-il pas remplacer la lecture ?", options: ["Il est trop long", "Il coûte de l'argent", "Il est toujours parfait", "Il peut oublier des choses ou se tromper"], answer: 3, why: "Les résumés peuvent omettre ou déformer des parties importantes." },
      { q: "Laquelle est une demande utile pour la lecture ?", options: ["\"Que veulent dire ces 3 mots ?\"", "\"Écris ma fiche de lecture\"", "\"Donne-moi ma note\"", "\"Lis-le pour moi pour toujours\""], answer: 0, why: "Définir les mots difficiles aide à comprendre." },
      { q: "Où se fait surtout l'apprentissage en écriture ?", options: ["En recopiant un texte de l'IA", "En imprimant la page", "En écrivant votre propre brouillon et en le révisant", "En choisissant une police"], answer: 2, why: "Écrire le brouillon et le réviser construit la compétence." },
      { q: "Quand l'IA donne un avis, qui fait les changements ?", options: ["L'IA", "Un inconnu", "Vous, avec vos propres mots", "Personne"], answer: 2, why: "Réviser vous-même garde le travail à vous." },
      { q: "Que veut dire réviser un texte ?", options: ["L'améliorer en le changeant", "Le supprimer", "L'imprimer", "Le rendre en retard"], answer: 0, why: "Réviser, c'est améliorer un brouillon." },
      { q: "Quelle habitude de révision marche le mieux ?", options: ["Bachoter la veille", "Seulement relire", "Ne pas réviser", "Un peu chaque jour avec des auto-tests"], answer: 3, why: "La révision espacée avec auto-tests marche bien." },
      { q: "Quelles trois choses dire à l'IA pour un plan de révision ?", options: ["Votre mot de passe, votre adresse et votre âge", "La date du contrôle, les chapitres et votre temps quotidien", "Couleur, plat et chanson préférés", "Rien"], answer: 1, why: "Cela permet à l'IA de construire un plan adapté." },
      { q: "Après les questions d'entraînement, passez plus de temps sur :", options: ["Celles où vous vous êtes trompé", "Celles que vous avez réussies", "Aucune", "De nouveaux sujets au hasard"], answer: 0, why: "Se concentrer sur les erreurs comble les lacunes." },
      { q: "Rendre un travail écrit par l'IA quand ce n'est pas permis :", options: ["C'est toujours acceptable", "C'est obligatoire", "Peut compter comme de la triche", "Donne des points en plus"], answer: 2, why: "Cela enfreint les règles et fait sauter l'apprentissage." },
      { q: "Une bonne ligne sur l'usage de l'IA est :", options: ["Rien du tout", "\"J'ai utilisé l'IA pour faire des questions d'entraînement et avoir un avis sur le paragraphe 2\"", "\"L'IA a tout fait\" alors que ce n'est pas vrai", "\"Je n'utilise jamais d'ordinateur\""], answer: 1, why: "Elle dit honnêtement comment l'IA a aidé." },
      { q: "L'IA cite un livre comme source pour votre projet. Vous devez :", options: ["Le recopier dans votre liste", "Inventer un auteur", "Ignorer toutes les sources", "Trouver vous-même le livre avant de l'utiliser"], answer: 3, why: "L'IA peut inventer des sources." },
      { q: "Quel compte utiliser pour les outils approuvés par l'école ?", options: ["Le compte d'un ami", "Un faux compte", "Jamais de compte", "Votre compte scolaire"], answer: 3, why: "Les outils scolaires sont configurés pour votre compte scolaire." },
      { q: "Avant de vous inscrire sur une nouvelle application d'IA, vous devez :", options: ["Utiliser n'importe quelle date de naissance", "Vérifier son âge minimum et parler avec un parent ou tuteur", "Lui donner votre mot de passe scolaire", "Ne pas lire les conditions"], answer: 1, why: "L'âge minimum et l'accord d'un parent ou tuteur passent d'abord." }
    ]
  }
};
