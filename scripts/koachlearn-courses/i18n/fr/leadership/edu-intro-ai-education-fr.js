"use strict";

// Koach Learn course, French translation of leadership/edu-intro-ai-education.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// US law and agency names (FERPA, COPPA, FTC, Department of Education) are kept with a French explanation. One short line tells readers outside the
// United States that these laws do not apply to them and to check their own country's data-protection law and education ministry.

module.exports = {
  id: "edu-intro-ai-education-fr",
  lang: "fr",
  translationOf: "edu-intro-ai-education",
  category: "Leadership Development",
  name: "L'IA pour les chefs d'établissement et responsables éducatifs 1 : introduction à l'IA dans l'éducation",
  skills: "Expliquer l'IA au personnel et aux familles, Repérer les bons et les mauvais usages à l'école, Connaître les bases de la protection des données des élèves (FERPA, COPPA), Lire les orientations fédérales sur l'IA, Animer une discussion avec le personnel",
  outcome: "expliquer à votre personnel ce qu'est l'IA et comment elle est déjà présente à l'école, nommer les bons usages et les risques, énoncer les bases de la protection des données des élèves selon FERPA et COPPA, et animer une discussion de 15 minutes avec le personnel à l'aide d'une fiche d'une page « L'IA dans notre école ».",
  about: [
    "Ce cours s'adresse aux chefs d'établissement, à leurs adjoints, aux enseignants référents, aux conseillers pédagogiques et aux responsables de district scolaire. Aucune formation technique n'est nécessaire. Vos enseignants et vos élèves utilisent déjà l'IA ; ce cours vous aide à piloter cet usage au lieu de le subir.",
    "Le chapitre 1 explique ce qu'est l'IA, où elle apparaît déjà dans votre école, et où elle aide ou nuit à l'apprentissage. Le chapitre 2 couvre ce que les responsables doivent savoir avant tout : la protection des données des élèves selon les lois américaines FERPA et COPPA, ce qu'a dit le ministère de l'Éducation des États-Unis sur l'IA, et comment ouvrir la discussion avec votre personnel. Hors des États-Unis, ces lois ne s'appliquent pas : vérifiez la loi de protection des données et les consignes du ministère de l'Éducation de votre pays.",
    "Ce cours explique la loi en mots simples pour que vous sachiez quoi demander ; ce n'est pas un conseil juridique. Le conseiller juridique et le délégué à la protection des données de votre district ont le dernier mot. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Voici le cours 1 sur 8 de la série L'IA pour les chefs d'établissement et responsables éducatifs."
  ],
  finalTask: "Rédigez pour le personnel une fiche d'une page « L'IA dans notre école » : ce qu'est l'IA en deux phrases, trois façons dont elle peut aider les enseignants, trois risques pour les élèves, la règle de confidentialité (« aucun nom d'élève, aucune note ni autre information permettant d'identifier un élève dans des outils d'IA que le district n'a pas approuvés »), et à qui demander. Utilisez-la pour animer une discussion de 15 minutes avec le personnel et notez les trois principales questions soulevées.",
  chapters: [
    {
      name: "Chapitre 1 : L'IA dans les écoles d'aujourd'hui",
      lessons: [
        {
          title: "Ce qu'est l'IA, avec les mots de votre personnel",
          minutes: 5,
          goal: "Expliquer l'IA et l'IA générative au personnel en mots simples.",
          text: [
            "L'intelligence artificielle (IA) est un logiciel qui fait des tâches qui demandent d'habitude un jugement humain, comme reconnaître la parole, repérer des tendances ou écrire. L'IA générative crée du contenu nouveau : texte, images, audio et code. Les outils de discussion comme ChatGPT, Microsoft Copilot, Google Gemini et Claude reposent sur de grands modèles de langage (LLM) qui prédisent les mots probables.",
            "Comme ils prédisent les mots probables, ces outils écrivent avec aisance et peuvent quand même se tromper, être dépassés ou biaisés. Ils ne connaissent ni vos élèves, ni vos programmes, ni votre communauté si personne ne les leur décrit, et on ne doit pas leur donner d'informations privées sur les élèves.",
            "Une façon simple de le dire au personnel : « L'IA est un partenaire rapide pour les premiers jets. Elle ne remplace pas le jugement de l'enseignant, et elle n'a jamais le dernier mot sur un élève. »"
          ],
          words: [["IA générative", "une IA qui crée du texte, des images, de l'audio ou du code nouveaux."], ["LLM", "grand modèle de langage : l'IA derrière les assistants conversationnels."], ["Hallucination", "quand l'IA écrit quelque chose qui paraît vrai mais qui est inventé."]],
          slides: [
            { title: "L'IA en deux phrases", bullets: ["Un logiciel qui fait des tâches de jugement", "L'IA générative crée texte, images, code"] },
            { title: "Fluide ne veut pas dire juste", bullets: ["Peut se tromper, être dépassée ou biaisée", "Ne connaît ni vos élèves ni vos programmes"] },
            { title: "À dire au personnel", bullets: ["Un partenaire rapide pour les premiers jets", "Ne remplace jamais le jugement de l'enseignant", "Jamais le dernier mot sur un élève"] }
          ],
          tryIt: "Écrivez une explication de l'IA en deux phrases qu'un nouvel enseignant, un parent et un élève de 10 ans pourraient tous comprendre. Testez-la sur un collègue.",
          youCanNow: "expliquer l'IA et l'IA générative en mots simples au personnel et aux familles."
        },
        {
          title: "Où l'IA est déjà présente dans votre école",
          minutes: 5,
          goal: "Recenser où l'IA est déjà utilisée dans votre école, officiellement ou non.",
          text: [
            "L'IA est déjà dans votre établissement. Des enseignants utilisent peut-être des outils de discussion pour préparer des leçons ou des e-mails aux parents. Des élèves les utilisent pour leurs devoirs, parfois à bon escient, parfois non. Beaucoup de produits que votre district paie déjà (plateformes d'apprentissage, outils d'écriture, programmes de lecture, logiciels de bureautique) ont ajouté des fonctions d'IA, parfois activées par défaut.",
            "Il y a aussi de l'IA en coulisses : des programmes d'exercices adaptatifs qui choisissent la question suivante, des tableaux de bord d'alerte précoce, des détecteurs de plagiat et de texte écrit par IA, et des outils de sécurité ou de surveillance.",
            "Les responsables ne peuvent pas guider ce qu'ils ne voient pas. Une carte rapide, faite avec votre coordinateur numérique et quelques enseignants, montre quels outils sont approuvés, lesquels sont utilisés quand même, et lesquels touchent aux données des élèves. Cette carte est le point de départ de toutes les décisions suivantes."
          ],
          steps: ["Demandez aux enseignants, aux élèves et à votre coordinateur numérique quels outils d'IA ils utilisent.", "Listez les fonctions d'IA dans les produits que vous avez déjà.", "Marquez chacun : approuvé ou non, et s'il touche aux données des élèves.", "Notez où les élèves rencontrent l'IA sans le savoir."],
          words: [["Programme adaptatif", "un logiciel qui change la question ou l'activité suivante selon les réponses de l'élève."], ["Détecteur de texte IA", "un outil qui prétend dire si un texte a été écrit par une IA ; souvent peu fiable."]],
          slides: [
            { title: "L'IA est déjà là", bullets: ["Enseignants qui préparent leçons et e-mails", "Élèves qui utilisent des outils de discussion", "Fonctions d'IA ajoutées aux outils existants"] },
            { title: "En coulisses", bullets: ["Programmes d'exercices adaptatifs", "Tableaux de bord d'alerte précoce", "Détecteurs et outils de surveillance"] },
            { title: "La recenser", bullets: ["Approuvé ou non ?", "Touche aux données des élèves ?", "Où les élèves la rencontrent sans le savoir"] }
          ],
          tryIt: "Avec votre coordinateur numérique ou deux enseignants, listez au moins six endroits où l'IA apparaît dans votre école. Marquez chacun approuvé ou non, et s'il touche aux données des élèves.",
          youCanNow: "recenser où l'IA est déjà utilisée dans votre école et quels usages touchent aux données des élèves."
        },
        {
          title: "Où l'IA aide l'apprentissage, et où elle nuit",
          minutes: 5,
          goal: "Classer les usages scolaires de l'IA en utiles, prudents et nuisibles.",
          text: [
            "Les usages utiles font en général gagner du temps aux enseignants ou élargissent l'accès : préparer des supports de cours, créer des exercices à plusieurs niveaux de lecture, traduire des lettres aux familles qu'une personne qualifiée vérifie, et offrir aux élèves une explication patiente, comme un tuteur, sous la conduite de l'enseignant.",
            "Les usages prudents demandent des règles claires : l'usage de l'IA par les élèves dans les devoirs (elle peut remplacer la réflexion que le devoir devait construire), les retours de l'IA sur le travail des élèves (ils peuvent être génériques ou faux), et les détecteurs de texte IA (ils peuvent accuser à tort des élèves, notamment ceux dont la langue de l'école n'est pas la langue maternelle).",
            "Les usages nuisibles : saisir des informations personnelles d'élèves dans des outils non approuvés, laisser l'IA décider des notes, de l'orientation, des sanctions ou de l'éducation spécialisée, et utiliser l'IA d'une façon dont les familles n'ont pas été informées. Un test pour le personnel : « Serais-je à l'aise d'expliquer cet usage à la famille de l'élève ? »"
          ],
          words: [["Accès", "le fait que chaque élève puisse participer et en profiter, y compris les élèves handicapés et ceux qui apprennent la langue de l'école."], ["Fausse accusation", "dire à tort qu'un élève a triché, par exemple parce qu'un détecteur a signalé son travail."]],
          slides: [
            { title: "Utile", bullets: ["Préparer supports et exercices", "Plusieurs niveaux de lecture", "Traductions vérifiées par une personne"] },
            { title: "Prudent", bullets: ["Usage par les élèves dans les devoirs", "Retours de l'IA sur le travail des élèves", "Les détecteurs peuvent accuser à tort"] },
            { title: "Nuisible", bullets: ["Données d'élèves dans des outils non approuvés", "L'IA qui décide notes, orientation, sanctions", "Usages cachés aux familles"] },
            { title: "Le test de la famille", bullets: ["Expliquerais-je cet usage à la famille ?"] }
          ],
          tryIt: "Listez huit usages de l'IA que vous avez vus ou dont vous avez entendu parler à l'école. Marquez chacun UTILE, PRUDENT ou NUISIBLE et écrivez une raison.",
          youCanNow: "juger quels usages scolaires de l'IA aident l'apprentissage et lesquels mettent les élèves en danger."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA dans les écoles d'aujourd'hui",
        questions: [
          { q: "Quelle est la meilleure description simple de l'IA générative pour le personnel ?", options: ["Une caméra de sécurité de l'école", "Un nouveau système de notation", "Une IA qui crée du texte, des images ou du code nouveaux", "Une application de présence"], answer: 2, why: "L'IA générative crée du contenu nouveau." },
          { q: "Un enseignant dit : « C'est l'IA qui l'a écrit, donc c'est forcément exact. » Meilleure réponse ?", options: ["L'IA prédit des mots probables et peut se tromper ; vérifiez", "Être d'accord", "Seulement si c'est long", "Seulement s'il y a des mots savants"], answer: 0, why: "Un texte fluide peut quand même être faux." },
          { q: "Pourquoi recenser d'abord l'usage de l'IA dans votre école ?", options: ["Pour tout interdire", "Les fournisseurs l'exigent", "C'est amusant", "Les responsables ne peuvent pas guider ce qu'ils ne voient pas"], answer: 3, why: "La carte montre l'usage approuvé, l'usage caché et le risque pour les données des élèves." },
          { q: "Pourquoi les détecteurs de texte IA sont-ils un usage PRUDENT ?", options: ["Ils ont toujours raison", "Ils peuvent accuser à tort des élèves, notamment ceux qui apprennent la langue de l'école", "Ils sont gratuits", "Ils écrivent des dissertations"], answer: 1, why: "Les faux positifs peuvent nuire aux élèves." },
          { q: "Quel usage est NUISIBLE ?", options: ["Préparer des exercices", "Créer un texte de lecture à trois niveaux", "Rédiger une lettre d'information", "Laisser l'IA décider de l'orientation d'un élève en éducation spécialisée"], answer: 3, why: "Les décisions sur les élèves restent à des personnes qualifiées." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Ce que les responsables doivent savoir d'abord",
      lessons: [
        {
          title: "Les bases de la protection des données des élèves : FERPA et COPPA",
          minutes: 6,
          goal: "Énoncer les bases de FERPA et COPPA qui s'appliquent quand le personnel utilise des outils d'IA.",
          text: [
            "FERPA (Family Educational Rights and Privacy Act), une loi fédérale américaine, protège la confidentialité des dossiers scolaires des élèves : les dossiers directement liés à un élève et conservés par l'école. Les parents ont le droit de consulter ces dossiers et de demander des corrections ; ces droits passent à l'élève à 18 ans ou quand il entre dans l'enseignement supérieur. Les écoles ont en général besoin d'un consentement pour divulguer des informations permettant d'identifier un élève, avec des exceptions comme les informations d'annuaire (après information et possibilité de refus) et les personnels de l'école ayant un intérêt éducatif légitime. Un fournisseur extérieur ne peut être considéré comme personnel de l'école que s'il assure un service pour l'école, sous le contrôle direct de l'école, et respecte des limites sur le partage ultérieur.",
            "COPPA (Children's Online Privacy Protection Act), que fait appliquer la FTC (Commission fédérale du commerce des États-Unis), protège en ligne les enfants de moins de 13 ans. La FTC indique qu'une école ne peut consentir à la place des parents que si le service collecte des informations pour l'usage et le bénéfice de l'école, sans aucun autre but commercial. La FTC a modifié sa règle COPPA le 22 avril 2025.",
            "Concrètement : un enseignant qui colle des noms d'élèves, des notes, des détails de plan d'éducation individualisé (IEP) ou d'autres informations identifiantes dans un outil d'IA gratuit non approuvé par le district peut divulguer des dossiers scolaires à une entreprise sans aucun accord. La règle du responsable : seulement des outils approuvés par le district pour tout ce qui concerne les élèves, et retirer quand même les détails identifiants. Pour vos obligations exactes, demandez au délégué à la protection des données ou au conseiller juridique de votre district ; les lois des États peuvent ajouter des exigences. Hors des États-Unis, appliquez la loi de protection des données de votre pays."
          ],
          words: [["FERPA", "la loi fédérale américaine qui protège la confidentialité des dossiers scolaires des élèves."], ["COPPA", "la loi fédérale américaine qui protège en ligne la vie privée des enfants de moins de 13 ans."], ["Informations permettant d'identifier (PII)", "des informations qui identifient un élève, comme son nom, son numéro d'identifiant ou un ensemble de détails."], ["Informations d'annuaire", "des détails de base comme le nom et les dates de scolarité qu'une école peut partager après information et possibilité de refus."]],
          slides: [
            { title: "FERPA en bref", bullets: ["Protège les dossiers scolaires des élèves", "Les parents peuvent consulter et demander des corrections", "Droits transmis à l'élève à 18 ans ou à l'université"] },
            { title: "FERPA et les fournisseurs", bullets: ["Consentement en général nécessaire pour partager", "Fournisseur assimilé : service à l'école, contrôle direct", "Et limites sur le partage ultérieur"] },
            { title: "COPPA en bref", bullets: ["Enfants de moins de 13 ans en ligne ; appliquée par la FTC", "Consentement de l'école : usage scolaire, aucun autre but commercial", "Règle modifiée le 22 avril 2025"] },
            { title: "La règle du responsable", bullets: ["Outils approuvés par le district pour tout sujet élève", "Retirez quand même les détails identifiants", "Demandez au délégué ; les États peuvent ajouter"] }
          ],
          sources: [{ name: "FERPA : protéger la vie privée des élèves (ministère de l'Éducation des États-Unis)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC : se conformer à COPPA, questions fréquentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FTC : la vie privée des enfants", url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" }],
          tryIt: "Écrivez trois exemples de ce qu'un enseignant ne doit PAS coller dans un outil d'IA non approuvé, et réécrivez l'un d'eux pour demander la même aide sans aucune information sur l'élève.",
          youCanNow: "énoncer les bases de FERPA et COPPA qui s'appliquent à l'usage de l'IA par le personnel et la règle qui en découle."
        },
        {
          title: "Ce que disent les orientations fédérales sur l'IA à l'école",
          minutes: 5,
          goal: "Résumer les orientations fédérales sur l'IA et trouver vous-même la version actuelle.",
          text: [
            "Le 22 juillet 2025, le ministère de l'Éducation des États-Unis a envoyé une lettre d'orientation (Dear Colleague Letter) sur l'IA. Selon K-12 Dive, elle indique que les subventions fédérales existantes peuvent financer l'IA utilisée pour des outils pédagogiques de qualité, du tutorat à fort impact et de l'orientation vers les études et les métiers, et elle fixe des principes : les initiatives d'IA doivent être pilotées par les éducateurs, éthiques, accessibles aux élèves handicapés, transparentes sur la façon dont les nouveaux outils sont déployés, et conformes aux lois fédérales sur la protection des données.",
            "Les orientations changent. Lisez la lettre elle-même et toute orientation plus récente sur ed.gov, et voyez ce qu'a publié l'agence d'éducation de votre État ; beaucoup d'États ont leurs propres orientations sur l'IA à l'école. Le site du bureau de la protection des données des élèves du ministère (studentprivacy.ed.gov) propose des ressources sur les services éducatifs en ligne, dont une liste de contrôle de conditions d'utilisation types (Model Terms of Service). Hors des États-Unis, cherchez les orientations de votre ministère de l'Éducation.",
            "Pour les responsables, ces principes sont un bon test pour tout projet d'IA : Est-il piloté par les éducateurs ? Est-il accessible ? Avons-nous expliqué aux familles comment il fonctionne ? Protège-t-il les données des élèves ?"
          ],
          steps: ["Lisez la lettre du ministère de l'Éducation sur l'IA sur ed.gov.", "Cherchez les orientations sur l'IA de l'agence d'éducation de votre État.", "Consultez les ressources de studentprivacy.ed.gov sur les services éducatifs en ligne.", "Testez vos projets avec les principes : piloté par les éducateurs, éthique, accessible, transparent, conforme à la protection des données."],
          words: [["Lettre d'orientation (Dear Colleague Letter)", "une lettre d'une agence fédérale aux écoles et aux États ; ce sont des orientations, pas une nouvelle loi."], ["Agence d'éducation de l'État", "le ministère de l'Éducation de votre État."]],
          slides: [
            { title: "Lettre fédérale sur l'IA, 22 juillet 2025", bullets: ["Les subventions peuvent financer des outils pédagogiques IA", "Tutorat à fort impact", "Orientation vers les études et les métiers"] },
            { title: "Ses principes", bullets: ["Piloté par les éducateurs et éthique", "Accessible aux élèves handicapés", "Transparent ; conforme à la protection des données"] },
            { title: "Trouver la version actuelle", bullets: ["ed.gov pour la lettre et les orientations récentes", "L'agence d'éducation de votre État", "studentprivacy.ed.gov pour les fournisseurs"] }
          ],
          sources: [{ name: "K-12 Dive : le ministère de l'Éducation publie ses priorités sur l'IA (juillet 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Vie privée et technologies éducatives (bureau de la protection des données des élèves)", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Trouvez la page sur l'IA de l'agence d'éducation de votre État ou de votre ministère de l'Éducation (cherchez « intelligence artificielle » sur son site). Notez la date de ses dernières orientations et un point qu'elles font, ou notez qu'il n'en existe pas encore.",
          youCanNow: "résumer les orientations fédérales sur l'IA à l'école et trouver les versions fédérales et locales actuelles."
        },
        {
          title: "Ouvrir la discussion sur l'IA avec votre personnel",
          minutes: 6,
          goal: "Animer une discussion de 15 minutes avec le personnel sur l'IA à l'aide d'une fiche d'une page.",
          text: [
            "Le personnel ressent beaucoup de choses face à l'IA : de l'enthousiasme, la peur de la triche, la crainte d'être remplacé, ou simplement trop de travail pour s'y intéresser. Commencez par écouter, pas par une règle. Demandez : « Où avez-vous vu l'IA cette année, en classe ou dans votre vie ? »",
            "Puis partagez une fiche d'une page : ce qu'est l'IA en deux phrases, trois façons dont elle peut aider les enseignants, trois risques pour les élèves, la règle de confidentialité, et à qui demander. Tenez-vous à une page ; vous pourrez ajouter des détails plus tard.",
            "Terminez en nommant une prochaine étape (par exemple un court sondage sur les outils utilisés par le personnel, ou un groupe d'enseignants volontaires pour tester un outil approuvé) et recueillez les principales questions. Ces questions vous disent quoi enseigner ensuite."
          ],
          steps: ["Commencez par une question d'écoute.", "Partagez la fiche d'une page.", "Discutez d'un exemple utile et d'un exemple risqué.", "Nommez une prochaine étape.", "Recueillez les trois principales questions."],
          words: [["Fiche", "une courte page imprimée ou partagée que les gens gardent."], ["Prochaine étape", "une action claire que le groupe décide de faire."]],
          slides: [
            { title: "Commencer par écouter", bullets: ["« Où avez-vous vu l'IA cette année ? »", "Enthousiasme, inquiétude, fatigue : tout est normal"] },
            { title: "La fiche d'une page", bullets: ["L'IA en deux phrases", "Trois aides, trois risques", "La règle de confidentialité et à qui demander"] },
            { title: "Bien conclure", bullets: ["Une prochaine étape", "Recueillir les trois principales questions"] }
          ],
          tryIt: "Exercice final : rédigez votre fiche d'une page « L'IA dans notre école » (définition en deux phrases, trois aides, trois risques, règle de confidentialité, à qui demander). Animez avec elle une discussion de 15 minutes avec le personnel et notez les trois principales questions soulevées.",
          youCanNow: "ouvrir et animer la discussion de votre école sur l'IA à partir d'un point de départ clair et partagé."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Ce que les responsables doivent savoir d'abord",
        questions: [
          { q: "Que protège FERPA ?", options: ["Les salaires des enseignants", "La sécurité des bâtiments scolaires", "La confidentialité des dossiers scolaires des élèves", "Les menus de la cantine"], answer: 2, why: "FERPA protège les dossiers scolaires des élèves." },
          { q: "COPPA protège en ligne la vie privée des enfants :", options: ["De moins de 13 ans", "De moins de 18 ans", "De moins de 21 ans", "De tout âge"], answer: 0, why: "La FTC indique que la règle protège les enfants de moins de 13 ans." },
          { q: "Selon la FTC, quand une école peut-elle consentir à la place des parents au titre de COPPA ?", options: ["Chaque fois qu'un enseignant le veut", "Quand le service collecte des données seulement pour l'usage et le bénéfice de l'école, sans autre but commercial", "Jamais", "Quand l'application est gratuite"], answer: 1, why: "Le consentement de l'école se limite à un usage éducatif sans autre but commercial." },
          { q: "Quel est l'un des principes de la lettre de juillet 2025 du ministère de l'Éducation sur l'IA ?", options: ["Les initiatives d'IA doivent être pilotées par les éducateurs", "L'IA doit remplacer les enseignants", "L'IA doit être interdite", "Seules les écoles privées peuvent utiliser l'IA"], answer: 0, why: "La lettre demande des initiatives pilotées par les éducateurs." },
          { q: "Comment ouvrir une discussion sur l'IA avec le personnel ?", options: ["Avec une politique de 30 pages", "Avec la présentation commerciale d'un fournisseur", "Avec une interdiction", "Avec une question d'écoute sur où le personnel a vu l'IA"], answer: 3, why: "Écouter d'abord crée la confiance et montre ce dont le personnel a besoin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les chefs d'établissement et responsables éducatifs 1 : introduction à l'IA dans l'éducation",
    questions: [
      { q: "Les outils de discussion comme ChatGPT reposent sur :", options: ["Des tableurs", "De grands modèles de langage", "Des imprimantes", "Des systèmes de présence"], answer: 1, why: "Les LLM font fonctionner les outils de discussion." },
      { q: "Une hallucination de l'IA, c'est :", options: ["Une réponse rapide", "Un écran cassé", "Un contenu inventé qui paraît vrai", "Un exercice d'évacuation"], answer: 2, why: "L'IA peut inventer des faits et des sources." },
      { q: "Le meilleur message en une ligne pour le personnel est :", options: ["L'IA note tout", "L'IA remplace la préparation des cours", "L'IA est un partenaire pour les premiers jets, jamais le dernier mot sur un élève", "L'IA a toujours raison"], answer: 2, why: "Il garde le jugement de l'enseignant au centre." },
      { q: "Des fonctions d'IA peuvent apparaître dans des outils que vous avez déjà :", options: ["Parfois activées par défaut", "Jamais", "Seulement si vous payez plus", "Seulement sur téléphone"], answer: 0, why: "Les fournisseurs ajoutent des fonctions d'IA aux produits existants." },
      { q: "Un programme adaptatif :", options: ["Imprime les bulletins", "Fait l'appel", "Ferme les portes", "Change l'activité suivante selon les réponses de l'élève"], answer: 3, why: "Il s'adapte aux réponses." },
      { q: "Votre carte de l'IA doit indiquer pour chaque outil :", options: ["S'il a un joli logo", "S'il est approuvé et s'il touche aux données des élèves", "S'il est populaire", "S'il est récent"], answer: 1, why: "L'approbation et les données sont ce que les responsables doivent savoir." },
      { q: "Lequel est un usage UTILE ?", options: ["Une surveillance secrète", "Décider des sanctions", "Coller des plans d'éducation individualisés dans un outil gratuit", "Créer des exercices à plusieurs niveaux de lecture"], answer: 3, why: "Il fait gagner du temps et élargit l'accès." },
      { q: "Pourquoi l'usage de l'IA par les élèves dans les devoirs peut-il poser problème ?", options: ["C'est illégal", "C'est toujours de la triche", "Elle peut remplacer la réflexion que le devoir construit", "C'est trop lent"], answer: 2, why: "Les règles décident quand l'IA soutient ou remplace l'apprentissage." },
      { q: "Le test de la famille demande :", options: ["Expliquerais-je cet usage de l'IA à la famille de l'élève ?", "La famille a-t-elle un ordinateur ?", "La famille est-elle en ligne ?", "La famille a-t-elle payé ?"], answer: 0, why: "Être à l'aise pour expliquer un usage est une bonne vérification." },
      { q: "Les droits FERPA passent des parents à l'élève :", options: ["À 10 ans", "À 18 ans ou à l'entrée dans l'enseignement supérieur", "À 13 ans", "Jamais"], answer: 1, why: "L'élève devient alors titulaire de ces droits." },
      { q: "Selon FERPA, les parents peuvent :", options: ["Consulter les dossiers scolaires de leur enfant", "Lire les carnets privés des enseignants", "Changer eux-mêmes les notes", "Rien"], answer: 0, why: "La consultation est un droit essentiel de FERPA." },
      { q: "Un fournisseur ne peut être assimilé à un « personnel de l'école » au titre de FERPA que s'il :", options: ["A une application", "Est gratuit", "Est populaire", "Assure un service pour l'école sous son contrôle direct, avec des limites sur le partage ultérieur"], answer: 3, why: "Ces conditions viennent des orientations sur FERPA." },
      { q: "Les informations d'annuaire peuvent être partagées :", options: ["Jamais", "Après information et possibilité de refus", "Seulement avec les fournisseurs", "Seulement par les élèves"], answer: 1, why: "Les écoles doivent informer et permettre le refus." },
      { q: "Quelle agence fait appliquer COPPA ?", options: ["La Poste", "Le ministère de l'Agriculture", "La FTC (Commission fédérale du commerce)", "Le conseil d'école"], answer: 2, why: "La FTC fait appliquer COPPA." },
      { q: "Un enseignant colle les noms et les notes d'élèves dans un outil d'IA gratuit non approuvé. Cela :", options: ["Est obligatoire", "Est toujours acceptable", "Peut divulguer des dossiers scolaires à une entreprise sans accord", "Améliore la confidentialité"], answer: 2, why: "C'est le risque FERPA des outils non approuvés." },
      { q: "Pour les obligations exactes de votre district en matière de confidentialité, demandez :", options: ["Au délégué à la protection des données ou au conseiller juridique", "À un chatbot", "À un élève", "Au commercial d'un fournisseur"], answer: 0, why: "Les personnes qualifiées ont le dernier mot." },
      { q: "La lettre du ministère de l'Éducation sur l'IA date du :", options: ["3 mars 2019", "1er janvier 2000", "27 octobre 2026", "22 juillet 2025"], answer: 3, why: "Elle a été envoyée le 22 juillet 2025." },
      { q: "Où trouver la liste de contrôle des conditions d'utilisation types ?", options: ["Sur une application de réseau social", "Sur studentprivacy.ed.gov", "Dans une publicité de fournisseur", "Dans les commentaires d'un article"], answer: 1, why: "Elle figure sur le site du bureau de la protection des données des élèves." },
      { q: "En plus des orientations fédérales, vous devez consulter :", options: ["Seulement les blogs des fournisseurs", "Les règles d'un autre pays", "Rien d'autre", "Les orientations sur l'IA de l'agence d'éducation de votre État"], answer: 3, why: "Beaucoup d'États publient leurs propres orientations sur l'IA." },
      { q: "Une bonne discussion sur l'IA avec le personnel se termine par :", options: ["Une présentation commerciale", "Une interdiction", "Une prochaine étape et les principales questions recueillies", "Aucune conclusion"], answer: 2, why: "Les prochaines étapes et les questions guident la suite." }
    ]
  }
};
