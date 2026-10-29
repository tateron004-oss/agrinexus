"use strict";

// Koach Learn course (French translation of leadership/edu-ai-tools-educators.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-tools-educators-fr",
  lang: "fr",
  translationOf: "edu-ai-tools-educators",
  category: "Leadership Development",
  name: "L'IA pour les responsables scolaires et éducatifs 2 : outils d'IA pour les enseignants",
  skills: "Connaître les types d'outils d'IA pour l'école, Rédiger des consignes (prompts) efficaces pour enseignants, Utiliser l'IA pour trois tâches courantes d'enseignant, Vérifier les conditions de confidentialité d'un outil, Établir une liste d'outils vert-jaune-rouge",
  outcome: "utiliser des outils d'IA pour les tâches courantes d'enseignant avec un modèle de consigne fiable, vérifier les conditions de confidentialité d'un outil d'IA à l'aide d'une liste de contrôle avant toute utilisation avec des élèves, et publier une courte liste vert-jaune-rouge d'outils d'IA pour votre école.",
  about: [
    "Ce cours s'adresse aux chefs d'établissement, aux conseillers pédagogiques, aux enseignants référents, aux coordinateurs du numérique et aux enseignants. Il est pratique : vous utiliserez des outils d'IA pour de vraies tâches scolaires, puis vous jugerez quels outils peuvent être recommandés sans risque.",
    "Le chapitre 1 classe les nombreux outils d'IA en quelques types, enseigne un modèle de consigne qui fonctionne pour les enseignants et fait pratiquer trois tâches courantes. Le chapitre 2 vous apprend à vérifier un outil avant que le personnel ou les élèves l'utilisent : conditions de confidentialité, règles d'âge, usage des données, et publication d'une liste d'outils simple à laquelle votre personnel peut se fier.",
    "Ne saisissez jamais de noms d'élèves, de notes, de détails de plans d'éducation individualisés (IEP) ni d'autres informations identifiantes dans un outil que votre district ou votre administration n'a pas approuvé. Entraînez-vous avec des exemples inventés. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Il s'agit du cours 2 sur 8 de la série « L'IA pour les responsables scolaires et éducatifs »."
  ],
  finalTask: "Créez la trousse d'outils d'IA de départ de votre école : une fiche de consignes avec trois consignes testées pour enseignants (un courriel aux parents, un texte de lecture à trois niveaux, et dix questions d'entraînement avec corrigé), et une liste vert-jaune-rouge d'au moins trois outils d'IA, chacun vérifié avec une liste de contrôle de confidentialité construite à partir de la ressource Model Terms of Service de studentprivacy.ed.gov, avec une phrase expliquant sa couleur.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des chefs d'établissement, des conseillers pédagogiques, des enseignants référents, des coordinateurs numériques et des enseignants dans des écoles des États-Unis qui veulent pratiquer les outils d'IA et savoir juger lesquels sont sûrs.",
    startingPoint: "Ils savent ce qu'est l'IA et connaissent les bases de FERPA et COPPA vues au cours 1. Ils ont essayé un chatbot mais n'ont pas de modèle de consigne fiable ni de méthode pour examiner les conditions de confidentialité d'un outil.",
    gap: "Le personnel essaie de nombreux outils d'IA, certains avec des conditions de confidentialité faibles ou des règles d'âge que les élèves ne remplissent pas. Les responsables doivent obtenir de bons résultats de l'IA pour les tâches quotidiennes des enseignants, vérifier les outils avant que quiconque les utilise avec des élèves, et donner au personnel une liste simple à laquelle se fier.",
    constraints: [
      "Ne jamais mettre de noms, de notes, de détails d'IEP ou d'autres informations identifiantes d'élèves dans un outil que le district n'a pas approuvé ; les exercices utilisent des exemples inventés",
      "Les conditions et les règles d'âge des outils changent : les apprenants vérifient eux-mêmes les conditions actuelles",
      "Le délégué à la protection des données ou l'équipe numérique du district confirme la liste finale des outils",
      "Appareils : un ordinateur avec internet et au moins un assistant IA gratuit",
      "Temps : des leçons courtes à caser dans une journée d'école"
    ],
    prerequisites: "« L'IA pour les chefs d'établissement et responsables éducatifs 1 : introduction à l'IA dans l'éducation »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des outils d'IA utilisés par votre personnel", action: "classer chaque outil en assistant généraliste, plateforme éducative ou fonction intégrée", standard: "en indiquant si le district a un accord pour cet outil" },
    { id: "O2", condition: "Pour une leçon que vous enseignez ou accompagnez", action: "rédiger une consigne d'enseignant avec un rôle, les apprenants, un objectif, des contraintes et un format", standard: "avec les cinq parties, enregistrée sur une fiche de consignes partagée" },
    { id: "O3", condition: "Avec des détails inventés", action: "utiliser l'IA pour un courriel aux parents, un texte à plusieurs niveaux et des questions d'entraînement avec corrigé, et vérifier chacun", standard: "en corrigeant chaque erreur avant usage et en refaisant vous-même chaque réponse" },
    { id: "O4", condition: "Pour un outil d'IA que le personnel veut utiliser", action: "vérifier sa politique de confidentialité et ses conditions avec une liste de contrôle de la vie privée", standard: "en marquant chaque point clair, flou ou problématique pour l'offre que vous utiliseriez" },
    { id: "O5", condition: "Avant que les élèves se connectent à un outil", action: "vérifier l'âge minimum actuel de l'outil, ses règles d'autorisation parentale et l'application de COPPA", standard: "à partir des conditions actuelles de l'outil lui-même" },
    { id: "O6", condition: "À partir d'au moins trois outils examinés", action: "publier pour le personnel une liste d'outils vert-jaune-rouge", standard: "indiquant pour chaque outil sa couleur, la raison, les usages permis et la date de vérification" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Utiliser des outils d'IA pour les tâches d'enseignant",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les types d'outils d'IA à l'école",
          minutes: 5,
          goal: "Classer les outils d'IA en assistants généralistes, plateformes éducatives et fonctions intégrées.",
          text: [
            "Les assistants d'IA généralistes, comme ChatGPT, Microsoft Copilot, Google Gemini et Claude, peuvent faire presque n'importe quelle tâche d'écriture ou de réflexion. Ils sont souples, mais ils ne savent rien de votre programme si vous ne le leur dites pas, et leurs conditions sur les données dépendent de l'offre que vous utilisez.",
            "Les plateformes éducatives d'IA sont conçues pour les enseignants ou les élèves : générateurs de leçons et de quiz, outils de tutorat, outils de rétroaction. Elles conviennent parfois mieux aux tâches scolaires et certaines proposent des accords avec les districts, mais chacune doit être vérifiée pour la confidentialité et la qualité.",
            "Les fonctions d'IA intégrées se trouvent dans des outils que vous utilisez déjà : Microsoft 365, Google Workspace, Canva, votre plateforme d'apprentissage (LMS). Elles sont pratiques, mais elles peuvent être activées sans que personne ne l'ait décidé : demandez à votre équipe informatique lesquelles sont actives et dans le cadre de quel accord."
          ],
          words: [["Assistant généraliste", "un outil de discussion d'IA qui peut aider pour presque toute tâche."], ["Plateforme éducative", "un outil d'IA conçu pour des tâches d'enseignement ou d'apprentissage."], ["Fonction intégrée", "une fonction d'IA à l'intérieur d'un logiciel que vous utilisez déjà."]],
          slides: [
            { title: "Assistants généralistes", bullets: ["ChatGPT, Copilot, Gemini, Claude", "Souples, mais ne connaissent pas votre programme", "Les conditions sur les données dépendent de l'offre"] },
            { title: "Plateformes éducatives", bullets: ["Outils de leçons, de quiz, de tutorat et de rétroaction", "Mieux adaptées aux tâches scolaires", "Chacune doit être vérifiée"] },
            { title: "Fonctions intégrées", bullets: ["Dans Microsoft 365, Google, Canva, votre LMS", "Parfois actives par défaut", "Vérifiez lesquelles sont actives et sous quel accord"] }
          ],
          tryIt: "Listez les outils d'IA que vous ou votre personnel utilisez aujourd'hui. Classez chacun dans l'un des trois types et indiquez si votre district a un accord pour lui (oui, non, je ne sais pas).",
          youCanNow: "classer les outils d'IA en trois types et savoir quoi vérifier pour chacun.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une fonction d'IA intégrée ?", options: ["Un outil d'IA à acheter séparément", "Une fonction d'IA dans un logiciel que vous utilisez déjà", "Un chatbot créé par un élève", "Une fiche d'exercices sur papier"], answer: 1, why: "Les fonctions intégrées apparaissent dans des outils que vous avez déjà, parfois activées par défaut." },
            { objective: "O1", q: "Un enseignant utilise une nouvelle plateforme éducative d'IA dont vous n'avez jamais entendu parler. Que feriez-vous d'abord ?", options: ["L'approuver, puisqu'elle est faite pour les écoles", "Interdire toutes les plateformes d'IA", "La noter dans la liste et vérifier si le district a un accord pour elle", "Demander aux élèves s'ils l'aiment"], answer: 2, why: "Les plateformes éducatives doivent elles aussi être examinées pour la vie privée et la qualité." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Un modèle de consigne qui fonctionne pour les enseignants",
          minutes: 5,
          goal: "Rédiger des consignes d'enseignant avec un rôle, les apprenants, un objectif, des contraintes et un format.",
          text: [
            "Les enseignants obtiennent de meilleurs résultats avec une consigne en cinq parties. Rôle : « Vous êtes un enseignant de sciences expérimenté en 5e. » Apprenants : niveau de classe, niveau de lecture, besoins en termes généraux (pas de noms). Objectif : l'objectif d'apprentissage ou la compétence visée. Contraintes : durée, matériel, longueur, ce qu'il faut éviter. Format : un tableau, des étapes numérotées, une fiche.",
            "Exemple : « Vous êtes un enseignant expérimenté de CM1. Ma classe lit à des niveaux variés. Écrivez un texte de 300 mots sur le cycle de l'eau à trois niveaux de lecture avec les mêmes faits clés, puis cinq questions de compréhension pour chacun. Utilisez un tableau. »",
            "Améliorez ensuite le résultat avec des relances : « rends le niveau 1 plus simple », « ajoute une liste de vocabulaire », « aligne les questions sur l'idée principale ». Enregistrez les consignes qui marchent sur une fiche de consignes partagée pour que vos collègues puissent les réutiliser."
          ],
          steps: ["Rôle : quel rôle l'IA doit-elle jouer ?", "Apprenants : niveau, niveau de lecture, besoins en termes généraux.", "Objectif : objectif d'apprentissage ou compétence.", "Contraintes : durée, longueur, matériel.", "Format : tableau, étapes, fiche."],
          words: [["Consigne (prompt)", "ce que vous tapez dans un outil d'IA pour lui demander quelque chose."], ["Fiche de consignes", "une liste partagée de consignes testées que le personnel peut réutiliser."]],
          slides: [
            { title: "Consigne d'enseignant en cinq parties", bullets: ["Rôle", "Apprenants (pas de noms)", "Objectif, contraintes, format"] },
            { title: "Exemple", bullets: ["Enseignant de CM1, niveaux de lecture variés", "Texte sur le cycle de l'eau à trois niveaux", "Cinq questions pour chacun, dans un tableau"] },
            { title: "Améliorer et enregistrer", bullets: ["Relances : plus simple, ajouter du vocabulaire", "Enregistrer les meilleures sur une fiche partagée"] }
          ],
          tryIt: "Rédigez une consigne en cinq parties pour une leçon que vous allez bientôt enseigner (ou accompagner). Lancez-la, faites une relance et enregistrez la consigne finale.",
          youCanNow: "rédiger des consignes d'enseignant qui donnent des résultats utilisables du premier coup.",
          quickCheck: [
            { objective: "O2", q: "Que met-on dans la partie « contraintes » d'une consigne d'enseignant ?", options: ["Des limites comme la longueur, le niveau de lecture ou ce qu'il faut éviter", "Le nom complet de l'élève", "Le mot de passe de l'enseignant", "Le nom de l'outil d'IA"], answer: 0, why: "Les contraintes fixent des limites pour que la réponse convienne à votre classe." },
            { objective: "O2", q: "L'IA donne un texte trop difficile pour vos élèves. Qu'enverriez-vous ?", options: ["Tout recommencer dans un autre outil", "L'accepter et expliquer les mots difficiles en classe", "Coller les résultats de lecture d'un élève", "Une demande de suivi comme « Rends-le plus simple, avec des phrases plus courtes »"], answer: 3, why: "Une demande de suivi claire ajuste la réponse sans partager de données d'élèves." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trois tâches courantes, bien faites",
          minutes: 6,
          goal: "Utiliser l'IA pour un courriel aux parents, un texte à plusieurs niveaux et des questions d'entraînement, et vérifier chacun.",
          text: [
            "Courriel aux parents : donnez le but, les faits clés (événement, date, ce que les familles doivent faire) et le ton. Demandez une version courte et chaleureuse, en langage simple. S'il doit être envoyé dans d'autres langues, une traduction par l'IA n'est qu'un brouillon : faites-la vérifier par un locuteur qualifié avant qu'elle n'arrive aux familles.",
            "Texte à plusieurs niveaux : demandez le même contenu à trois niveaux de lecture avec les mêmes faits clés. Vérifiez les faits vous-même ; l'IA peut introduire des erreurs en simplifiant.",
            "Questions d'entraînement : demandez dix questions avec un corrigé et une courte explication pour chaque réponse. Faites les exercices vous-même ; les corrigés produits par l'IA sont faux plus souvent qu'on ne le pense, surtout en mathématiques et en sciences. Dans les trois cas, vous êtes le correcteur et la vérification finale."
          ],
          steps: ["Courriel aux parents : but, faits, ton ; traduction vérifiée par une personne qualifiée.", "Texte à plusieurs niveaux : mêmes faits à trois niveaux ; vérifiez les faits.", "Questions d'entraînement : corrigé avec explications ; refaites chaque réponse vous-même.", "Relisez et corrigez tout avant utilisation."],
          words: [["Texte différencié par niveau", "le même contenu écrit à différents niveaux de lecture."], ["Corrigé", "la liste des bonnes réponses aux questions."]],
          slides: [
            { title: "Courriel aux parents", bullets: ["But, faits, ton", "Langage simple", "Traductions vérifiées par un locuteur qualifié"] },
            { title: "Texte à plusieurs niveaux", bullets: ["Mêmes faits, trois niveaux", "Vérifiez les faits : simplifier peut ajouter des erreurs"] },
            { title: "Questions d'entraînement", bullets: ["Dix questions avec un corrigé", "Refaites chaque réponse vous-même", "Vous êtes le correcteur et la vérification finale"] }
          ],
          tryIt: "Faites les trois tâches avec des détails inventés : un courriel aux parents sur une sortie scolaire, un texte à trois niveaux, et dix questions avec un corrigé. Comptez les erreurs que vous avez dû corriger.",
          youCanNow: "utiliser l'IA pour trois tâches courantes d'enseignant et vérifier les résultats comme un correcteur.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un texte à plusieurs niveaux ?", options: ["Un texte imprimé en gros caractères", "Le même contenu écrit à différents niveaux de lecture", "Un texte sans images", "Un contrôle en trois parties"], answer: 1, why: "Un texte à plusieurs niveaux permet à des élèves de niveaux de lecture différents d'apprendre le même contenu." },
            { objective: "O3", q: "L'IA écrit dix questions d'entraînement avec un corrigé. Que faites-vous avant de les utiliser ?", options: ["Refaire vous-même chaque réponse et corriger les erreurs", "Les utiliser telles quelles", "Vérifier seulement la première question", "Demander à l'IA si ses réponses sont justes"], answer: 0, why: "Les corrigés de l'IA sont faux plus souvent qu'on ne le croit : l'enseignant vérifie chacun." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Utiliser des outils d'IA pour les tâches d'enseignant",
        questions: [
          { objective: "O1", q: "Les fonctions d'IA dans des logiciels que vous possédez déjà :", options: ["Sont toujours désactivées", "Ne touchent jamais aux données", "Peuvent être actives par défaut ; vérifiez avec votre équipe informatique", "N'ont besoin d'aucun accord"], answer: 2, why: "Les fonctions intégrées peuvent être activées sans décision de personne." },
          { objective: "O2", q: "Qu'est-ce qui a sa place dans la partie « apprenants » d'une consigne d'enseignant ?", options: ["Le niveau de classe et les niveaux de lecture en termes généraux", "Les noms complets des élèves", "Les objectifs IEP des élèves, avec leur nom", "Les numéros de téléphone des parents"], answer: 0, why: "Décrivez les apprenants de façon générale, jamais avec des détails identifiants." },
          { objective: "O3", q: "Une traduction par l'IA d'une lettre aux familles est :", options: ["Prête à envoyer", "Toujours parfaite", "Illégale", "Un brouillon qu'un locuteur qualifié doit vérifier"], answer: 3, why: "Les traductions peuvent être fausses ; les familles méritent une information exacte." },
          { objective: "O3", q: "Pourquoi refaire vous-même chaque réponse d'un corrigé produit par l'IA ?", options: ["La loi l'exige", "Les corrigés de l'IA sont faux plus souvent qu'on ne le pense", "Cela allonge le quiz", "Les élèves aiment ça"], answer: 1, why: "Les erreurs dans un corrigé induisent les élèves en erreur." },
          { objective: "O2", q: "Où enregistrer les consignes qui fonctionnent bien ?", options: ["Nulle part", "Dans le courriel aux parents", "Dans le compte d'un élève", "Sur une fiche de consignes partagée"], answer: 3, why: "Des consignes partagées et testées font gagner du temps aux collègues." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Choisir des outils sûrs pour les élèves",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lire les conditions de confidentialité d'un outil avec une liste",
          minutes: 6,
          goal: "Vérifier la politique de confidentialité et les conditions d'un outil d'IA à l'aide d'une courte liste de contrôle.",
          text: [
            "Le Student Privacy Policy Office du ministère de l'Éducation des États-Unis publie une liste de contrôle, Model Terms of Service, pour aider les écoles à examiner la politique de confidentialité et les conditions d'un outil en ligne avant de s'inscrire. Utilisez-la, ou une liste que votre district ou votre administration possède déjà.",
            "Questions clés : quelles données d'élèves l'outil collecte-t-il ? À qui appartiennent ces données ? L'entreprise utilise-t-elle les données des élèves pour la publicité ou pour entraîner ses modèles d'IA ? L'école peut-elle faire supprimer les données, et quand ? Qui d'autre reçoit les données ? Comment sont-elles protégées, et que se passe-t-il en cas de fuite ? L'entreprise peut-elle changer les conditions sans vous prévenir ?",
            "Lisez la politique de l'offre que vous utiliseriez réellement ; les offres gratuites grand public et les offres éducation ont souvent des conditions différentes. Si les réponses ne sont pas claires, la réponse est « pas encore ». Aux États-Unis, FERPA et COPPA (deux lois fédérales sur la vie privée des élèves et des enfants) fixent le minimum, et votre État peut avoir des lois plus strictes ; le responsable de la protection des données de votre district peut vous dire lesquelles s'appliquent. Ailleurs, appliquez les lois de votre pays sur la protection des données."
          ],
          steps: ["Ouvrez la politique de confidentialité et les conditions de l'offre que vous utiliseriez.", "Passez la liste en revue : données collectées, propriété, publicité et entraînement, suppression, partage, sécurité, modifications.", "Marquez chaque point : clair, pas clair ou problème.", "Posez vos questions sur les points pas clairs au fournisseur, par écrit.", "Envoyez le résultat au responsable de la protection des données de votre district."],
          words: [["Politique de confidentialité", "la déclaration d'une entreprise sur les données qu'elle collecte et leur usage."], ["Conditions d'utilisation", "les règles et l'accord pour utiliser un produit."], ["Fuite de données", "quand des données sont consultées ou divulguées sans autorisation."]],
          slides: [
            { title: "Utilisez une liste de contrôle", bullets: ["Model Terms of Service (studentprivacy.ed.gov)", "Ou la liste de votre district"] },
            { title: "Questions clés", bullets: ["Quelles données, à qui elles appartiennent", "Publicité ou entraînement de l'IA sur les données des élèves ?", "Suppression, partage, sécurité, fuite"] },
            { title: "Lisez la bonne offre", bullets: ["Conditions grand public et éducation différentes", "Pas clair veut dire « pas encore »", "Demandez au responsable des données quelles lois s'appliquent"] }
          ],
          sources: [{ name: "Privacy and Education Technology : liste de contrôle Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }, { name: "FERPA : protéger la vie privée des élèves", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Choisissez un outil d'IA que votre personnel souhaite utiliser. Lisez sa politique de confidentialité pour l'offre que vous utiliseriez et marquez chaque point de la liste : clair, pas clair ou problème.",
          youCanNow: "vérifier les conditions de confidentialité d'un outil d'IA avec une liste avant qu'il soit utilisé avec des élèves.",
          quickCheck: [
            { objective: "O4", q: "Laquelle est une question de la liste de contrôle de la vie privée ?", options: ["Le logo de l'outil est-il sympathique ?", "Combien de personnes l'utilisent ?", "L'entreprise utilise-t-elle les données des élèves pour entraîner son IA ?", "Fonctionne-t-il sur tablette ?"], answer: 2, why: "Savoir si les données des élèves entraînent l'IA est une question clé pour la vie privée." },
            { objective: "O4", q: "Les conditions de confidentialité de l'offre gratuite diffèrent de celles de l'offre éducation. Lesquelles vérifiez-vous ?", options: ["Les plus courtes", "Celles de l'offre gratuite, puisqu'elle coûte moins cher", "Aucune ; les conditions sont toutes pareilles", "Celles de l'offre que votre école utiliserait vraiment"], answer: 3, why: "Les offres grand public gratuites et les offres éducation ont souvent des conditions différentes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Règles d'âge et comptes des élèves",
          minutes: 5,
          goal: "Vérifier les règles d'âge d'un outil et l'application de COPPA avant que les élèves se connectent.",
          text: [
            "Beaucoup d'outils d'IA fixent un âge minimum et des règles d'autorisation parentale dans leurs conditions, et celles-ci changent. Vérifiez les conditions actuelles de chaque outil ; ne vous fiez pas à ce dont un collègue se souvient. Un outil autorisé pour les enseignants peut être totalement interdit aux élèves.",
            "Pour les enfants de moins de 13 ans, la loi américaine COPPA s'applique au service en ligne. La FTC (l'agence américaine de protection des consommateurs) indique qu'une école peut donner son accord à la place des parents seulement si le service collecte les informations des élèves pour l'usage et le bénéfice de l'école, et pour aucun autre but commercial. La FTC conseille aussi, comme bonne pratique, d'informer les parents des services en ligne que l'école a approuvés.",
            "Préférez des comptes élèves gérés par l'école, dans le cadre d'un accord avec le district, plutôt que des inscriptions individuelles avec des adresses personnelles. Décidez à l'avance à quoi les élèves peuvent utiliser l'IA, et informez les familles."
          ],
          steps: ["Lisez les règles actuelles d'âge et d'autorisation de l'outil.", "Si les élèves ont moins de 13 ans, vérifiez comment fonctionnerait l'accord prévu par COPPA.", "Préférez des comptes gérés par l'école dans le cadre d'un accord.", "Informez les familles des services approuvés.", "Décidez à quoi les élèves peuvent l'utiliser."],
          words: [["Âge minimum", "l'âge le plus jeune autorisé par les conditions d'un outil."], ["Compte géré par l'école", "un compte élève créé et contrôlé par l'école."]],
          slides: [
            { title: "Vérifiez les règles d'âge de chaque outil", bullets: ["Fixées dans les conditions de l'outil", "Elles changent : lisez la version actuelle", "Autorisé pour l'enseignant ne veut pas dire autorisé pour l'élève"] },
            { title: "Moins de 13 ans : COPPA", bullets: ["Accord de l'école seulement pour un usage scolaire", "Aucun autre but commercial", "Informez les parents de ce que vous avez approuvé"] },
            { title: "Comptes", bullets: ["Gérés par l'école, dans le cadre d'un accord", "Pas d'inscriptions personnelles", "Informez les familles des usages autorisés"] }
          ],
          sources: [{ name: "FTC : se conformer à COPPA, questions fréquentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Pour l'outil de la leçon 4, trouvez dans ses conditions l'âge minimum actuel et la règle d'autorisation parentale. Écrivez si les élèves de votre école pourraient l'utiliser, et comment.",
          youCanNow: "vérifier les règles d'âge d'un outil et l'accord prévu par COPPA avant qu'un élève se connecte.",
          quickCheck: [
            { objective: "O5", q: "Comment les comptes élèves d'un outil d'IA doivent-ils de préférence être créés ?", options: ["Les élèves s'inscrivent avec leur e-mail personnel", "Les enseignants partagent un seul identifiant avec la classe", "Des comptes gérés par l'école dans le cadre d'un accord", "Pas de compte ; les élèves utilisent celui d'un parent"], answer: 2, why: "Des comptes gérés par l'école dans le cadre d'un accord gardent les données des élèves sous le contrôle de l'école." },
            { objective: "O5", q: "Un collègue dit qu'un outil convient aux enfants de 10 ans. Que vérifiez-vous ?", options: ["Les conditions actuelles de l'outil pour son âge minimum et sa règle d'autorisation parentale", "Un avis sur les réseaux sociaux", "Si d'autres écoles l'utilisent", "Rien ; vous faites confiance au collègue"], answer: 0, why: "Les règles d'âge changent : vérifiez vous-même les conditions actuelles de l'outil." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Publier une liste d'outils vert-jaune-rouge",
          minutes: 6,
          goal: "Publier une liste simple qui indique au personnel quels outils d'IA sont approuvés et pour quoi.",
          text: [
            "Le personnel a besoin d'une réponse simple à « puis-je utiliser ceci ? ». Une liste vert-jaune-rouge la donne. Vert : approuvé dans le cadre d'un accord avec le district, utilisable avec des informations sur les élèves dans les limites de l'accord. Jaune : autorisé pour les tâches d'enseignant sans aucune information sur les élèves (idées de leçons, supports génériques). Rouge : interdit, à cause de problèmes de confidentialité, d'âge ou de qualité.",
            "Pour chaque outil, notez la couleur, la raison, les usages autorisés, si les élèves peuvent l'utiliser et la date de vérification. Le responsable de la protection des données ou l'équipe informatique de votre district doit valider la liste verte.",
            "Associez la liste à votre fiche de consignes pour que le personnel sache à la fois quoi utiliser et comment bien l'utiliser. Révisez les deux à chaque trimestre, car les outils et les conditions changent."
          ],
          steps: ["Listez les outils que vous avez vérifiés.", "Donnez à chacun une couleur : vert, jaune ou rouge.", "Notez la raison, les usages autorisés, l'usage par les élèves et la date de vérification.", "Faites valider par le responsable des données ou l'équipe informatique.", "Partagez-la avec la fiche de consignes ; révisez-la chaque trimestre."],
          words: [["Liste approuvée", "une liste publiée des outils que le personnel peut utiliser, et comment."], ["Accord", "un contrat ou un accord de protection des données signé entre le district et une entreprise."]],
          slides: [
            { title: "Trois couleurs", bullets: ["Vert : approuvé dans le cadre d'un accord", "Jaune : tâches d'enseignant, sans données d'élèves", "Rouge : interdit"] },
            { title: "Pour chaque outil, notez", bullets: ["Couleur et raison", "Usages autorisés et usage par les élèves", "Date de vérification"] },
            { title: "Gardez-la utile", bullets: ["Validation par l'équipe données ou informatique", "Partagez-la avec la fiche de consignes", "Révisez-la chaque trimestre"] }
          ],
          tryIt: "Tâche finale : construisez votre trousse de départ, une fiche de consignes avec vos trois consignes testées (courriel aux parents, texte à plusieurs niveaux, questions d'entraînement) et une liste vert-jaune-rouge d'au moins trois outils vérifiés avec la liste de contrôle de confidentialité, chacun avec une phrase d'explication.",
          youCanNow: "donner au personnel un guide simple et fiable sur les outils d'IA à utiliser et la façon de les utiliser.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire un outil VERT sur la liste ?", options: ["Il est gratuit", "Il peut être utilisé, y compris avec des informations sur les élèves dans la mesure où l'accord du district le permet", "Il est interdit", "Seuls les élèves peuvent l'utiliser"], answer: 1, why: "Les outils verts sont approuvés, et les informations sur les élèves ne sont permises que dans la mesure où l'accord le permet." },
            { objective: "O6", q: "Les conditions d'un outil ont changé depuis que votre liste a été faite. Que feriez-vous ?", options: ["Laisser la liste telle quelle jusqu'à l'an prochain", "Supprimer toute la liste", "Revérifier l'outil, mettre à jour sa couleur et la date de vérification", "Dire au personnel de décider par lui-même"], answer: 2, why: "La liste indique une date de vérification pour rester à jour quand les conditions changent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Choisir des outils sûrs pour les élèves",
        questions: [
          { objective: "O4", q: "Où trouver la liste de contrôle Model Terms of Service ?", options: ["Dans une publication sur les réseaux sociaux", "Dans une publicité d'un fournisseur", "Sur studentprivacy.ed.gov", "Dans le logo de l'outil"], answer: 2, why: "Le Student Privacy Policy Office la publie." },
          { objective: "O4", q: "La politique de confidentialité d'un outil n'est pas claire sur l'entraînement de l'IA avec les données des élèves. Votre verdict ?", options: ["« Pas encore » : interrogez le fournisseur par écrit", "L'approuver", "Laisser les élèves décider", "Ignorer la question"], answer: 0, why: "Des réponses pas claires signifient que l'outil n'est pas prêt à être approuvé." },
          { objective: "O5", q: "Un collègue dit que l'âge minimum d'un outil est 13 ans. Que faites-vous ?", options: ["Le croire", "Vérifier vous-même les conditions actuelles de l'outil", "Demander à un élève", "Supposer qu'il n'y a pas de limite"], answer: 1, why: "Les règles d'âge sont fixées par chaque outil et changent." },
          { objective: "O6", q: "Que signifie un outil JAUNE sur la liste ?", options: ["Tâches d'enseignant uniquement, sans information sur les élèves", "Approuvé pour toutes les données d'élèves", "Interdit", "Réservé aux parents"], answer: 0, why: "Le jaune autorise un usage générique par l'enseignant sans données d'élèves." },
          { objective: "O6", q: "À quelle fréquence réviser la liste d'outils ?", options: ["Jamais", "Seulement après une fuite", "Tous les dix ans", "Chaque trimestre"], answer: 3, why: "Les outils et les conditions changent souvent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 2 : outils d'IA pour les enseignants",
    questions: [
      { objective: "O1", q: "Lequel est un assistant d'IA généraliste ?", options: ["Un carnet de notes", "Google Gemini", "Un projecteur", "Un emploi du temps des sonneries"], answer: 1, why: "Gemini, ChatGPT, Copilot et Claude sont des assistants généralistes." },
      { objective: "O1", q: "Les assistants généralistes connaissent votre programme :", options: ["Grâce aux dossiers de vos élèves", "Toujours", "Seulement si vous le leur dites", "Grâce à l'emploi du temps"], answer: 2, why: "Ils ont besoin du contexte dans la consigne." },
      { objective: "O1", q: "Les plateformes éducatives d'IA doivent être :", options: ["Payées par les élèves", "Utilisées sans vérification", "Vérifiées pour la confidentialité et la qualité", "Interdites"], answer: 2, why: "Chaque outil doit être vérifié." },
      { objective: "O2", q: "La consigne d'enseignant en cinq parties comprend :", options: ["Rôle, apprenants, objectif, contraintes, format", "Noms, notes, IEP, adresses, téléphones", "Seulement le sujet", "Un mot de passe"], answer: 0, why: "Ces parties donnent des résultats utilisables." },
      { objective: "O2", q: "Une bonne relance est :", options: ["« Supprime la réponse. »", "« Voici les noms de mes élèves. »", "« Note ma classe. »", "« Rends le niveau 1 plus simple. »"], answer: 3, why: "Elle améliore le résultat sans données privées." },
      { objective: "O2", q: "Une fiche de consignes est :", options: ["Une carte d'identité d'élève", "Une liste partagée de consignes testées", "Un badge de parking", "Un bulletin scolaire"], answer: 1, why: "Elle permet aux collègues de réutiliser ce qui marche." },
      { objective: "O3", q: "Un texte différencié par niveau, c'est :", options: ["Une taille de police", "Un texte rangé sur une étagère", "Une note à un test", "Le même contenu à différents niveaux de lecture"], answer: 3, why: "Il ouvre l'accès aux mêmes idées à plus d'élèves." },
      { objective: "O3", q: "Quand l'IA simplifie un texte, vous devez :", options: ["L'allonger", "Lui faire confiance", "Vérifier que les faits sont restés exacts", "Supprimer tous les faits"], answer: 2, why: "Simplifier peut introduire des erreurs." },
      { objective: "O3", q: "Dans les tâches d'enseignant assistées par l'IA, l'enseignant est :", options: ["Le correcteur et la vérification finale", "Inutile", "L'assistant de l'IA", "Seulement un lecteur"], answer: 0, why: "L'enseignant est responsable de ce qui arrive aux élèves." },
      { objective: "O4", q: "Quelle question figure sur une liste de contrôle de confidentialité ?", options: ["De quelle couleur est l'application ?", "L'entreprise utilise-t-elle les données des élèves pour entraîner son IA ?", "Combien de téléchargements ?", "Est-elle à la mode ?"], answer: 1, why: "L'usage des données des élèves pour l'entraînement est une préoccupation clé." },
      { objective: "O4", q: "Les offres gratuites grand public et les offres éducation :", options: ["Ont souvent des conditions différentes", "Ont toujours les mêmes conditions", "Ne collectent jamais de données", "Sont toutes les deux dangereuses"], answer: 0, why: "Lisez les conditions de l'offre que vous utiliserez." },
      { objective: "O4", q: "Qui doit valider votre liste verte ?", options: ["Personne", "Un élève", "Le fournisseur", "Le responsable des données du district ou l'équipe informatique"], answer: 3, why: "L'approbation revient aux personnes responsables de la confidentialité." },
      { objective: "O4", q: "Les lois des États américains sur la vie privée des élèves :", options: ["N'existent jamais", "Peuvent ajouter des exigences au-delà de FERPA et COPPA", "Remplacent entièrement la loi fédérale", "Ne s'appliquent qu'aux universités"], answer: 1, why: "La loi fédérale est le minimum ; les États peuvent en ajouter." },
      { objective: "O5", q: "Selon COPPA, l'accord de l'école ne vaut que si les données sont collectées :", options: ["Pour n'importe quelle raison", "Pour la publicité", "Pour l'usage et le bénéfice de l'école, sans autre but commercial", "Jamais"], answer: 2, why: "C'est la condition posée par la FTC." },
      { objective: "O5", q: "La FTC conseille aux écoles de :", options: ["Laisser les élèves approuver les outils", "Garder les approbations secrètes", "Informer les parents des services en ligne approuvés", "Éviter tous les outils"], answer: 2, why: "C'est une pratique recommandée." },
      { objective: "O5", q: "Les comptes élèves devraient de préférence être :", options: ["Gérés par l'école dans le cadre d'un accord", "Des inscriptions personnelles avec l'adresse de la maison", "Partagés par toute la classe", "Créés par le fournisseur"], answer: 0, why: "Les comptes gérés par l'école laissent le contrôle à l'école." },
      { objective: "O6", q: "Un outil ROUGE est :", options: ["En examen pour toujours", "Approuvé pour tous les usages", "Réservé aux tâches d'enseignant", "Interdit"], answer: 3, why: "Rouge veut dire ne pas utiliser." },
      { objective: "O6", q: "Un outil VERT peut être utilisé avec des informations sur les élèves :", options: ["Sans aucune limite", "Dans les limites de l'accord avec le district", "Jamais", "Seulement le week-end"], answer: 1, why: "L'accord fixe les limites." },
      { objective: "O6", q: "Chaque outil de la liste doit indiquer :", options: ["Son nombre de téléchargements", "Seulement son logo", "Seulement son prix", "Couleur, raison, usages autorisés et date de vérification"], answer: 3, why: "Le personnel a besoin de la raison et des limites." },
      { objective: "O3", q: "Pour s'entraîner dans ce cours, il faut utiliser :", options: ["Les noms des élèves", "De vrais dossiers d'élèves", "Des exemples inventés", "Des documents IEP"], answer: 2, why: "N'utilisez jamais d'informations identifiantes sur les élèves pour vous entraîner." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      7,
      8,
      9,
      10,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Fiche de consignes",
        objective: "O2",
        notYet: "Moins de trois consignes, ou des consignes incomplètes.",
        meets: "Trois consignes testées (courriel aux parents, texte à plusieurs niveaux, questions d'entraînement) avec rôle, apprenants, objectif, contraintes et format.",
        exceeds: "Chaque consigne comprend une demande de suivi utile que le personnel peut réutiliser."
      },
      {
        name: "Résultats vérifiés",
        objective: "O3",
        notYet: "Des résultats ont été utilisés sans vérification, ou le corrigé n'a pas été refait.",
        meets: "Chaque résultat a été vérifié et les erreurs corrigées ; chaque réponse du corrigé a été refaite.",
        exceeds: "Note combien d'erreurs ont été trouvées et de quel type."
      },
      {
        name: "Liste de contrôle de la vie privée",
        objective: "O4",
        notYet: "Les outils n'ont pas été vérifiés, ou la liste ne s'appuie pas sur la ressource Model Terms of Service.",
        meets: "Chaque outil a été vérifié avec une liste de contrôle construite à partir de la ressource Model Terms of Service de studentprivacy.ed.gov.",
        exceeds: "Les points flous ont été envoyés au fournisseur sous forme de questions écrites."
      },
      {
        name: "Règles d'âge",
        objective: "O5",
        notYet: "L'usage par les élèves est permis sans vérifier les règles d'âge.",
        meets: "Note l'âge minimum actuel et la règle d'autorisation parentale de chaque outil d'après ses conditions.",
        exceeds: "Explique comment les élèves pourraient l'utiliser, par exemple avec des comptes gérés par l'école."
      },
      {
        name: "Liste vert-jaune-rouge",
        objective: "O6",
        notYet: "Moins de trois outils, ou des couleurs sans raison.",
        meets: "Au moins trois outils, chacun avec une couleur et une raison d'une ligne.",
        exceeds: "Indique aussi les usages permis et la date de vérification, et a été envoyée au délégué à la protection des données ou à l'équipe numérique pour confirmation."
      }
    ]
  },
  evaluation: {
    results: [
      "Responsables qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Écoles qui publient une liste d'outils d'IA vert-jaune-rouge dans les 30 jours (enquête de suivi)",
      "Enseignants qui disent utiliser une fiche de consignes partagée pour leurs tâches de la semaine (enquête de suivi)",
      "Responsables qui passent au cours 3 de L'IA pour les chefs d'établissement et responsables éducatifs"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet et au moins un assistant IA gratuit",
      "La ressource Model Terms of Service de studentprivacy.ed.gov",
      "Des exemples inventés pour les exercices",
      "La liste des outils et accords approuvés par votre district, s'il en existe une",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites les trois tâches quotidiennes en direct avec des détails inventés.",
      "N'utilisez jamais de vrais noms, notes ou détails d'IEP d'élèves pendant les exercices.",
      "Répartissez le groupe pour que chaque binôme examine un outil différent, puis réunissez les résultats dans un seul brouillon de liste.",
      "Invitez le délégué à la protection des données ou l'équipe numérique du district à relire le brouillon de liste.",
      "Notez l'exercice final avec la grille, et vérifiez que la date de vérification de chaque outil est notée."
    ]
  }
};
