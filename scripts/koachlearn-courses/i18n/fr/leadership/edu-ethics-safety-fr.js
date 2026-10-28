"use strict";

// Koach Learn course (French translation of leadership/edu-ethics-safety.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ethics-safety-fr",
  lang: "fr",
  translationOf: "edu-ethics-safety",
  category: "Leadership Development",
  name: "L'IA pour les responsables scolaires et éducatifs 7 : éthique, sécurité et IA responsable",
  skills: "Appliquer des principes éthiques à l'IA scolaire, Repérer les risques de biais et d'iniquité, Protéger les données des élèves selon FERPA et COPPA, Évaluer les fournisseurs et les accords, Rédiger des lignes directrices d'usage responsable, Réagir aux incidents d'IA et aux hypertrucages",
  outcome: "rédiger des lignes directrices pour une IA responsable dans votre école ou votre district, couvrant les principes, la vie privée, l'équité, l'usage par le personnel et les élèves, l'évaluation des fournisseurs et un plan de réponse aux incidents, et les utiliser pour examiner un vrai outil d'IA et un incident réaliste.",
  about: [
    "Ce cours s'adresse aux chefs d'établissement, aux responsables de district, au personnel chargé du numérique et de la protection des données, aux conseillers et aux enseignants référents. Il rassemble les fils de l'éthique, de la vie privée et de la sécurité des cours précédents dans les lignes directrices et les procédures dont votre école a besoin.",
    "Le chapitre 1 couvre les principes : équité, transparence, supervision humaine, vie privée et sécurité, et la façon dont ils se traduisent dans de vrais usages scolaires de l'IA. Le chapitre 2 passe des principes à la pratique : évaluation des fournisseurs, lignes directrices écrites, et un plan pour quand quelque chose tourne mal, comme une fuite de données ou un faux créé par l'IA représentant un élève ou un enseignant.",
    "Ce cours explique la loi avec des mots simples pour que vous sachiez quoi demander ; ce n'est pas un conseil juridique. Le conseiller juridique et le responsable de la protection des données de votre district ont le dernier mot, et les lois des États peuvent ajouter des exigences. Les lois citées (FERPA, COPPA, Title IX) sont américaines ; ailleurs, appliquez les lois de votre pays. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Il s'agit du cours 7 sur 8 de la série « L'IA pour les responsables scolaires et éducatifs »."
  ],
  finalTask: "Rédigez des lignes directrices de deux pages pour une IA responsable dans votre école ou votre district : cinq principes en mots simples, des règles de vie privée (FERPA, COPPA, outils approuvés seulement), des contrôles d'équité, ce que le personnel et les élèves peuvent et ne peuvent pas faire, les étapes d'évaluation des fournisseurs, et un plan de réponse aux incidents en six étapes. Testez-les ensuite : examinez un vrai outil d'IA avec vos étapes d'évaluation, et déroulez un incident réaliste (par exemple, une fausse image d'un élève créée par l'IA et partagée dans une discussion de groupe) avec votre plan.",
  chapters: [
    {
      name: "Chapitre 1 : Les principes en pratique",
      lessons: [
        {
          title: "Cinq principes pour l'IA à l'école",
          minutes: 5,
          goal: "Énoncer cinq principes d'IA responsable et les appliquer à un exemple scolaire.",
          text: [
            "La plupart des cadres d'IA responsable partagent quelques idées. Cinq conviennent aux écoles. Supervision humaine : les éducateurs prennent les décisions sur les élèves ; l'IA informe, elle ne décide jamais. Équité : l'IA ne doit désavantager aucun groupe d'élèves et doit élargir l'accès. Vie privée et sécurité : recueillir et partager le moins possible de données d'élèves, et les protéger.",
            "Transparence : les élèves, le personnel et les familles savent quand et comment l'IA est utilisée. Responsabilité : une personne nommée est responsable de chaque outil d'IA et de ses effets, et il existe un moyen de signaler des inquiétudes.",
            "Ces principes correspondent à ceux de la lettre officielle (Dear Colleague Letter) du ministère de l'Éducation des États-Unis du 22 juillet 2025 sur l'IA, qui, selon K-12 Dive, demande des projets d'IA menés par les éducateurs, éthiques, accessibles aux élèves en situation de handicap, transparents dans leur déploiement et conformes aux lois fédérales sur la vie privée. Pour la gestion des risques, le cadre facultatif de gestion des risques de l'IA du NIST (l'institut américain des normes), AI RMF (Gouverner, Cartographier, Mesurer, Gérer), est une référence gratuite."
          ],
          words: [["Supervision humaine", "des personnes qui examinent et décident, l'IA ne faisant qu'informer."], ["Équité", "veiller à ce que chaque élève reçoive ce dont il a besoin pour réussir."], ["Transparence", "être ouvert sur le moment et la manière dont l'IA est utilisée."]],
          slides: [
            { title: "Cinq principes", bullets: ["Supervision humaine", "Équité", "Vie privée et sécurité", "Transparence et responsabilité"] },
            { title: "Lettre fédérale sur l'IA, juillet 2025", bullets: ["Menée par les éducateurs et éthique", "Accessible aux élèves en situation de handicap", "Transparente ; conforme aux lois sur la vie privée"] },
            { title: "Un cadre de gestion des risques gratuit", bullets: ["NIST AI RMF : Gouverner, Cartographier, Mesurer, Gérer", "Facultatif ; consultez nist.gov pour les mises à jour"] }
          ],
          sources: [{ name: "K-12 Dive : le ministère de l'Éducation publie ses priorités sur l'IA (juillet 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Prenez un usage de l'IA dans votre école (par exemple, un programme de lecture adaptatif). Écrivez une phrase sur la façon dont il respecte ou non chacun des cinq principes.",
          youCanNow: "appliquer cinq principes d'IA responsable à un vrai usage scolaire."
        },
        {
          title: "Risques de biais et d'iniquité dans l'IA scolaire",
          minutes: 6,
          goal: "Repérer où les usages scolaires de l'IA pourraient traiter injustement des groupes d'élèves.",
          text: [
            "L'IA apprend à partir de données, et les données reflètent le passé, y compris ses injustices. À l'école, surveillez quatre endroits. Les détecteurs : les détecteurs d'écriture par l'IA peuvent signaler à tort un travail honnête, et les textes d'élèves qui apprennent la langue peuvent être signalés plus souvent. La prédiction : les scores d'alerte précoce ou de risque peuvent étiqueter des élèves à partir de régularités liées au revenu, au handicap ou à l'origine.",
            "L'orientation par niveaux : les programmes adaptatifs qui donnent sans cesse un travail plus facile à certains élèves peuvent réduire leurs possibilités. L'accès : si l'aide de l'IA demande un appareil ou internet à la maison, les élèves qui n'en ont pas prennent encore plus de retard ; si un outil n'est pas accessible, les élèves en situation de handicap sont exclus.",
            "Contrôles d'équité : demandez aux fournisseurs comment ils testent les biais et l'accessibilité ; examinez les résultats par groupe d'élèves dans vos propres données (avec des protections de la vie privée) ; n'utilisez jamais un score d'IA seul pour des décisions d'orientation, de discipline ou d'admissibilité ; et assurez-vous que chaque élève peut accéder à l'outil à l'école."
          ],
          steps: ["Listez les usages de l'IA qui trient, notent ou signalent des élèves.", "Demandez au fournisseur comment il teste les biais et l'accessibilité.", "Examinez les résultats par groupe d'élèves, en protégeant la vie privée.", "N'utilisez jamais un score d'IA seul pour des décisions sur les élèves.", "Vérifiez que chaque élève peut accéder à l'outil à l'école."],
          words: [["Biais algorithmique", "des résultats injustes d'un système d'IA, souvent appris à partir de données passées."], ["Score de risque", "un chiffre qu'un système donne à un élève pour prédire un problème, comme le décrochage."], ["Orientation par niveaux", "maintenir des élèves sur des niveaux de travail différents, ce qui peut limiter leurs possibilités."]],
          slides: [
            { title: "Où apparaissent les biais", bullets: ["Détecteurs qui signalent à tort des élèves", "Scores de risque liés au revenu, au handicap, à l'origine", "Orientation adaptative qui réduit les possibilités"] },
            { title: "L'accès, c'est l'équité", bullets: ["Inégalités d'appareils et d'internet à la maison", "Outils non accessibles aux élèves en situation de handicap"] },
            { title: "Contrôles d'équité", bullets: ["Interrogez les fournisseurs sur leurs tests de biais et d'accessibilité", "Examinez les résultats par groupe", "Jamais un score d'IA seul pour décider"] }
          ],
          tryIt: "Choisissez un outil d'IA qui note, signale ou s'adapte aux élèves dans votre école. Écrivez trois questions d'équité que vous poseriez au fournisseur et un contrôle que vous feriez sur vos propres résultats.",
          youCanNow: "repérer les risques d'iniquité dans l'IA scolaire et mettre en place des contrôles concrets."
        },
        {
          title: "Vie privée et sécurité : FERPA, COPPA et bonnes habitudes",
          minutes: 6,
          goal: "Appliquer FERPA, COPPA et des habitudes de sécurité de base aux outils d'IA.",
          text: [
            "FERPA, loi fédérale américaine, protège les dossiers scolaires des élèves. Les écoles ont en général besoin d'un consentement pour communiquer des informations permettant d'identifier un élève, avec des exceptions ; un fournisseur ne peut agir comme « responsable scolaire » que s'il rend un service à l'école, est sous le contrôle direct de l'école et respecte des limites sur le partage. Les parents peuvent consulter et examiner les dossiers ; ces droits passent à l'élève à 18 ans ou à l'entrée à l'université.",
            "COPPA, appliquée par la FTC (l'agence américaine de protection des consommateurs), protège en ligne les enfants de moins de 13 ans. La FTC indique que les écoles peuvent donner leur accord à la place des parents seulement si les informations sont recueillies pour l'usage et le bénéfice de l'école et pour aucun autre but commercial. La FTC a modifié sa règle COPPA le 22 avril 2025 ; consultez les pages de la FTC pour les exigences actuelles.",
            "Bonnes habitudes : minimisation des données (ne partager que ce dont la tâche a besoin), outils approuvés seulement, comptes du district avec des mots de passe solides et une connexion en deux étapes, aucun téléversement de dossiers vers des comptes personnels, et savoir qui appeler si des données ont pu fuiter. Votre État peut avoir sa propre loi sur la vie privée des élèves ; votre responsable de la protection des données le saura. Hors des États-Unis, appliquez les lois de votre pays sur la protection des données."
          ],
          steps: ["N'utilisez que des outils approuvés pour les informations sur les élèves.", "Partagez le minimum de données nécessaire.", "Utilisez des comptes du district avec connexion en deux étapes.", "Ne téléversez jamais de dossiers vers des comptes personnels.", "Sachez qui appeler en cas de fuite possible."],
          words: [["Minimisation des données", "ne recueillir et ne partager que les données dont une tâche a vraiment besoin."], ["Connexion en deux étapes", "se connecter avec un mot de passe plus une seconde vérification, comme un code sur votre téléphone."]],
          slides: [
            { title: "FERPA", bullets: ["Protège les dossiers scolaires", "Consentement en général nécessaire pour partager des données identifiantes", "Fournisseurs seulement comme « responsables scolaires » contrôlés"] },
            { title: "COPPA", bullets: ["Moins de 13 ans, appliquée par la FTC", "Accord de l'école : usage scolaire seulement, aucun autre usage commercial", "Règle modifiée le 22 avril 2025"] },
            { title: "Bonnes habitudes", bullets: ["Minimisation des données", "Outils approuvés, comptes du district, connexion en deux étapes", "Sachez qui appeler en cas de fuite"] }
          ],
          sources: [{ name: "FERPA : protéger la vie privée des élèves", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC : se conformer à COPPA, questions fréquentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Écrivez cinq habitudes de vie privée et de sécurité pour votre personnel, en mots simples, avec pour chacune un exemple de ce qu'il ne faut PAS faire.",
          youCanNow: "appliquer FERPA, COPPA et des habitudes de sécurité quotidiennes à l'usage de l'IA par le personnel."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les principes en pratique",
        questions: [
          { q: "Quel principe dit que les éducateurs prennent les décisions sur les élèves et que l'IA ne fait qu'informer ?", options: ["Transparence", "Minimisation des données", "Supervision humaine", "Orientation par niveaux"], answer: 2, why: "La supervision humaine laisse les décisions aux éducateurs." },
          { q: "Un outil d'alerte précoce donne un score de risque élevé à un élève. Le bon usage est de :", options: ["L'utiliser comme un élément parmi d'autres pour des éducateurs qui connaissent aussi l'élève", "Orienter l'élève automatiquement", "Rendre le score public", "Ignorer toutes les données"], answer: 0, why: "Aucun score d'IA ne doit décider seul." },
          { q: "Pourquoi l'accès est-il une question d'équité pour les outils d'IA ?", options: ["Seuls les adultes utilisent l'IA", "Ce n'en est pas une", "L'accès ralentit les outils", "Les élèves sans appareil, sans internet ou sans outils accessibles prennent du retard"], answer: 3, why: "Un accès inégal creuse les écarts." },
          { q: "La minimisation des données signifie :", options: ["Recueillir le plus possible", "Ne partager que ce dont la tâche a besoin", "Supprimer toutes les données", "Utiliser des polices plus petites"], answer: 1, why: "Moins de données, moins de risques." },
          { q: "Selon COPPA, une école peut donner son accord à la place des parents quand les données sont recueillies :", options: ["Pour la publicité", "Jamais", "Pour n'importe quelle raison", "Pour l'usage et le bénéfice de l'école, sans autre but commercial"], answer: 3, why: "C'est la condition posée par la FTC." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Lignes directrices, fournisseurs et incidents",
      lessons: [
        {
          title: "Évaluer les fournisseurs et les accords",
          minutes: 5,
          goal: "Mener une évaluation du fournisseur avant qu'un outil d'IA soit approuvé.",
          text: [
            "Chaque outil d'IA qui touchera à des informations sur les élèves doit être évalué avant approbation. Utilisez la liste de contrôle Model Terms of Service du Student Privacy Policy Office (le bureau de la vie privée des élèves du ministère américain de l'Éducation) ou celle de votre district. Questions clés : quelles données, à qui elles appartiennent, sont-elles utilisées pour la publicité ou pour entraîner l'IA, peuvent-elles être supprimées sur demande, qui d'autre les reçoit, comment sont-elles sécurisées, et que se passe-t-il en cas de fuite.",
            "Ajoutez des questions propres à l'IA : comment l'IA fonctionne-t-elle et quelles sont ses limites ? Comment est-elle testée pour l'exactitude, les biais et l'accessibilité ? Les enseignants peuvent-ils voir et modifier ses résultats ? Conserve-t-elle ce que saisissent les élèves, et pendant combien de temps ?",
            "Obtenez les engagements dans un accord signé, pas seulement dans une politique publiée sur un site, qui peut changer. Beaucoup d'États et de districts utilisent des accords de protection des données avec les fournisseurs ; votre responsable de la protection des données ou votre conseiller juridique connaîtra le bon modèle."
          ],
          steps: ["Utilisez la liste Model Terms of Service ou celle de votre district.", "Posez les questions propres à l'IA.", "Demandez des réponses écrites.", "Obtenez les engagements dans un accord signé.", "Notez la décision et la date de révision."],
          words: [["Accord de protection des données", "un contrat signé qui fixe comment un fournisseur peut utiliser et protéger les données des élèves."], ["Reprise de la main", "une personne qui modifie ou rejette ce que l'IA a produit."]],
          slides: [
            { title: "Questions de vie privée", bullets: ["Quelles données, à qui elles appartiennent", "Publicité ou entraînement de l'IA ?", "Suppression, partage, sécurité, fuite"] },
            { title: "Questions sur l'IA", bullets: ["Comment elle fonctionne et ses limites", "Tests d'exactitude, de biais, d'accessibilité", "Les enseignants peuvent-ils modifier ? Durée de conservation ?"] },
            { title: "Mettez-le par écrit", bullets: ["Accord signé, pas seulement une page web", "Demandez le modèle à votre responsable des données"] }
          ],
          sources: [{ name: "Privacy and Education Technology : liste de contrôle Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Évaluez un outil d'IA que votre école utilise ou souhaite : répondez aux questions de vie privée et d'IA à partir de ses documents publics, et listez ce que le fournisseur devrait vous confirmer par écrit.",
          youCanNow: "évaluer un fournisseur d'IA sur la vie privée, la qualité de l'IA et les conditions du contrat avant approbation."
        },
        {
          title: "Rédiger des lignes directrices pour une IA responsable",
          minutes: 6,
          goal: "Rédiger des lignes directrices claires pour l'usage de l'IA par le personnel et les élèves.",
          text: [
            "Les lignes directrices transforment les principes en règles quotidiennes. Limitez-les à environ deux pages et utilisez des mots simples. Sections : but et principes ; outils approuvés et comment en demander un nouveau ; règles de vie privée ; ce que le personnel peut et ne peut pas faire ; ce que les élèves peuvent et ne peuvent pas faire (renvoyez à vos niveaux d'usage de l'IA) ; intégrité scolaire ; transparence envers les familles ; et qui contacter.",
            "Utilisez des exemples concrets : « Le personnel peut utiliser des outils d'IA approuvés pour rédiger des supports de cours et des lettres aux familles. Le personnel ne peut pas saisir de noms d'élèves, de notes, d'informations IEP ou 504, ni de dossiers disciplinaires dans un outil non approuvé. Le personnel ne peut pas utiliser l'IA pour prendre des décisions de notation, d'orientation ou de discipline. »",
            "Rédigez-les avec des enseignants, des élèves (selon leur âge) et des familles, faites-les vérifier par le conseiller juridique au regard de la politique du district et de la loi, et fixez une date de révision. Des lignes directrices que personne n'a aidé à écrire sont des lignes directrices que personne ne suit."
          ],
          steps: ["Rédigez les sections : principes, outils, vie privée, personnel, élèves, intégrité, transparence, contact.", "Ajoutez des exemples concrets « peut / ne peut pas ».", "Impliquez enseignants, élèves et familles.", "Faites vérifier par le conseiller juridique au regard de la politique et de la loi.", "Publiez et fixez une date de révision."],
          words: [["Lignes directrices", "des règles pratiques qui expliquent comment suivre une politique au quotidien."], ["Politique du conseil scolaire", "une règle officielle adoptée par le conseil d'administration scolaire."]],
          slides: [
            { title: "Deux pages, mots simples", bullets: ["Principes, outils, vie privée", "Personnel et élèves : peut / ne peut pas", "Intégrité, transparence, contact"] },
            { title: "Exemples concrets", bullets: ["Peut : rédiger des supports dans des outils approuvés", "Ne peut pas : données d'élèves dans des outils non approuvés", "Ne peut pas : décisions de notes ou de discipline par l'IA"] },
            { title: "Rédigez ensemble", bullets: ["Enseignants, élèves, familles", "Le conseiller juridique vérifie la politique et la loi", "Fixez une date de révision"] }
          ],
          tryIt: "Rédigez les sections « peut / ne peut pas » pour le personnel et les élèves dans vos lignes directrices, avec au moins quatre points chacune. Montrez-les à deux enseignants et notez leurs modifications.",
          youCanNow: "rédiger des lignes directrices concrètes pour une IA responsable avec les personnes qui les suivront."
        },
        {
          title: "Quand quelque chose tourne mal : réponse aux incidents",
          minutes: 6,
          goal: "Prévoir les étapes face à un incident d'IA, y compris les fuites de données et les hypertrucages.",
          text: [
            "Préparez-vous avant l'incident. Incidents d'IA fréquents : des données d'élèves saisies dans un outil non approuvé ; un outil d'IA qui donne aux élèves des informations dangereuses ou fausses ; et de fausses images, voix ou vidéos d'élèves ou du personnel créées par l'IA (hypertrucages ou « deepfakes »), qui peuvent constituer du harcèlement et parfois un délit.",
            "Un plan en six étapes : 1) Sécuriser : arrêter le mal (retirer l'accès, suspendre l'outil, soutenir la personne touchée). 2) Signaler : au chef d'établissement et au contact du district nommé dans vos lignes directrices. 3) Conserver : garder les preuves selon les consignes du district (pour des images de mineurs, suivre les consignes des forces de l'ordre et du conseiller juridique ; ne jamais les transférer ni les copier). 4) Évaluer : quelles données ou personnes sont touchées. 5) Informer : les familles et les autres personnes, selon la loi et la politique. 6) Apprendre : corriger la cause et mettre à jour les lignes directrices.",
            "Pour les hypertrucages et le harcèlement, suivez vos procédures contre le harcèlement et celles de Title IX (la loi fédérale américaine contre la discrimination sexuelle dans l'éducation), et impliquez le conseiller juridique et, si nécessaire, les forces de l'ordre. Les lois sur les images créées par l'IA changent vite, au niveau fédéral comme dans les États ; votre conseiller juridique saura ce qui s'applique. Ailleurs, suivez les lois et les procédures de votre pays."
          ],
          steps: ["Sécuriser : arrêter le mal et soutenir la personne.", "Signaler au chef d'établissement et au contact du district.", "Conserver les preuves selon les consignes ; ne jamais transférer d'images de mineurs.", "Évaluer quelles données ou personnes sont touchées.", "Informer selon la loi et la politique ; puis apprendre et mettre à jour."],
          words: [["Réponse aux incidents", "les étapes prévues pour gérer quelque chose qui a mal tourné."], ["Hypertrucage (deepfake)", "une fausse image, voix ou vidéo faite avec l'IA pour paraître réelle."], ["Title IX", "la loi fédérale américaine contre la discrimination sexuelle dans l'éducation, y compris le harcèlement sexuel."]],
          slides: [
            { title: "Incidents d'IA fréquents", bullets: ["Données d'élèves dans un outil non approuvé", "Résultats d'IA dangereux ou faux pour les élèves", "Hypertrucages d'élèves ou du personnel"] },
            { title: "Six étapes", bullets: ["1 Sécuriser  2 Signaler  3 Conserver", "4 Évaluer  5 Informer  6 Apprendre"] },
            { title: "Hypertrucages et harcèlement", bullets: ["Suivez les procédures harcèlement et Title IX", "Ne transférez jamais d'images de mineurs", "Impliquez le juriste ; les lois changent"] }
          ],
          tryIt: "Tâche finale : terminez vos lignes directrices de deux pages pour une IA responsable (principes, vie privée, équité, règles pour le personnel et les élèves, étapes d'évaluation des fournisseurs, plan d'incident en six étapes). Testez-les en examinant un vrai outil et en déroulant un incident réaliste, et notez les lacunes trouvées.",
          youCanNow: "piloter une IA responsable dans votre école avec des lignes directrices claires, l'évaluation des fournisseurs et un plan d'incident."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Lignes directrices, fournisseurs et incidents",
        questions: [
          { q: "Pourquoi obtenir les engagements du fournisseur dans un accord signé ?", options: ["Les accords sont facultatifs", "C'est plus rapide", "Les politiques publiées sur un site peuvent changer", "Les fournisseurs préfèrent"], answer: 2, why: "Des conditions signées engagent le fournisseur." },
          { q: "Laquelle est une question propre à l'IA pour un fournisseur ?", options: ["Les enseignants peuvent-ils voir et modifier les résultats de l'IA ?", "De quelle couleur est le logo ?", "Combien d'employés a le fournisseur ?", "Où sont ses bureaux ?"], answer: 0, why: "La reprise de la main par l'humain est essentielle à la supervision." },
          { q: "Qui doit aider à rédiger les lignes directrices ?", options: ["Seulement le fournisseur", "Enseignants, élèves et familles, avec vérification par le conseiller juridique", "Seulement le chef d'établissement, seul", "Un outil d'IA seul"], answer: 1, why: "Des lignes directrices que les gens aident à écrire sont des lignes directrices qu'ils suivent." },
          { q: "Un élève signale une fausse image d'un camarade, créée par l'IA, dans une discussion de groupe. Quelle est la première étape ?", options: ["Sécuriser : arrêter le mal et soutenir l'élève", "La transférer au personnel pour la montrer", "L'ignorer", "Publier un avertissement avec l'image"], answer: 0, why: "La sécurité d'abord ; ne jamais diffuser l'image." },
          { q: "Quelle est la dernière étape du plan d'incident ?", options: ["L'oublier", "Blâmer l'élève", "Supprimer les lignes directrices", "Apprendre : corriger la cause et mettre à jour les lignes directrices"], answer: 3, why: "Les incidents doivent améliorer le système." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 7 : éthique, sécurité et IA responsable",
    questions: [
      { q: "La supervision humaine signifie :", options: ["L'IA décide ; les éducateurs regardent", "Les éducateurs décident ; l'IA informe", "Personne ne décide", "Les parents décident de tout usage de l'IA"], answer: 1, why: "Les décisions sur les élèves restent humaines." },
      { q: "La transparence signifie :", options: ["Cacher l'usage de l'IA", "Utiliser du plastique transparent", "Être ouvert sur le moment et la manière dont l'IA est utilisée", "Partager les données des élèves"], answer: 2, why: "Les gens doivent savoir quand l'IA intervient." },
      { q: "La responsabilité signifie :", options: ["Personne n'est responsable", "L'IA est responsable", "Une personne nommée est responsable de chaque outil d'IA et de ses effets", "Les fournisseurs décident de tout"], answer: 2, why: "Quelqu'un doit répondre de chaque outil." },
      { q: "La lettre fédérale de juillet 2025 sur l'IA demande une IA :", options: ["Menée par les éducateurs, éthique, accessible, transparente et conforme aux lois sur la vie privée", "Sans enseignants", "Non réglementée", "Réservée aux lycées"], answer: 0, why: "Ce sont les principes qu'elle énonce." },
      { q: "Le NIST AI RMF est :", options: ["Un test pour élèves", "Une loi", "Un logiciel", "Un cadre facultatif de gestion des risques de l'IA"], answer: 3, why: "Le NIST le décrit comme facultatif." },
      { q: "Les détecteurs d'écriture par l'IA posent des questions d'équité parce qu'ils :", options: ["Sont toujours justes", "Peuvent signaler plus souvent les textes d'élèves qui apprennent la langue", "Sont gratuits", "Ne signalent jamais personne"], answer: 1, why: "Les faux positifs peuvent toucher certains groupes plus que d'autres." },
      { q: "L'orientation adaptative peut être un risque quand elle :", options: ["Est utilisée par les enseignants", "Met chaque élève au défi", "Est désactivée", "Maintient certains élèves sur un travail plus facile et réduit leurs possibilités"], answer: 3, why: "L'orientation par niveaux peut limiter les possibilités." },
      { q: "Un score de risque produit par l'IA doit être utilisé :", options: ["Publiquement", "Comme décision finale", "Comme un élément parmi d'autres, jamais seul pour décider", "Sans jamais être examiné"], answer: 2, why: "Les éducateurs le pèsent avec ce qu'ils savent." },
      { q: "Selon FERPA, un fournisseur ne peut agir comme « responsable scolaire » que s'il :", options: ["Rend un service scolaire sous contrôle direct, avec des limites sur le partage", "Est populaire", "Est gratuit", "A une page sur la vie privée"], answer: 0, why: "Ce sont les conditions de FERPA." },
      { q: "COPPA protège les enfants :", options: ["De moins de 16 ans", "De moins de 13 ans", "De moins de 18 ans", "De plus de 13 ans"], answer: 1, why: "La FTC indique moins de 13 ans." },
      { q: "La FTC a modifié sa règle COPPA le :", options: ["22 avril 2025", "1er janvier 1990", "27 octobre 2026", "4 juillet 2020"], answer: 0, why: "La FAQ de la FTC indique le 22 avril 2025." },
      { q: "La connexion en deux étapes ajoute :", options: ["Rien", "Un second mot de passe sur papier", "Un second utilisateur", "Une seconde vérification, comme un code sur votre téléphone"], answer: 3, why: "Elle protège les comptes si un mot de passe fuit." },
      { q: "La liste de contrôle Model Terms of Service vient :", options: ["D'un fournisseur", "Du Student Privacy Policy Office du ministère de l'Éducation des États-Unis", "D'un réseau social", "D'un site d'information"], answer: 1, why: "Elle figure sur studentprivacy.ed.gov." },
      { q: "Un accord de protection des données est :", options: ["Un engagement d'élève", "Une bannière de site web", "Un contrat signé sur la façon dont un fournisseur utilise et protège les données des élèves", "Un mot de passe"], answer: 2, why: "Il engage le fournisseur par écrit." },
      { q: "De bonnes lignes directrices comprennent :", options: ["Des publicités de fournisseurs", "Seulement des valeurs générales", "Des exemples concrets « peut / ne peut pas »", "Des noms d'élèves"], answer: 2, why: "Les exemples rendent les règles utilisables." },
      { q: "Les lignes directrices doivent être vérifiées au regard :", options: ["De la politique du district et de la loi, avec le conseiller juridique", "Des réseaux sociaux", "Des blogs des fournisseurs", "De rien"], answer: 0, why: "Elles doivent respecter la loi et les politiques existantes." },
      { q: "Un hypertrucage d'un élève créé par l'IA et partagé en ligne peut être :", options: ["Un projet scolaire", "Un amusement sans danger", "Toujours légal", "Du harcèlement et peut-être un délit"], answer: 3, why: "Traitez-le comme un tort grave." },
      { q: "Pour conserver des preuves impliquant des images de mineurs, le personnel doit :", options: ["Les transférer aux collègues", "Suivre les consignes du conseiller juridique et des forces de l'ordre et ne jamais les transférer", "Les publier", "Les enregistrer sur des téléphones personnels"], answer: 1, why: "Copier de telles images peut en soi causer du tort ou enfreindre la loi." },
      { q: "Informer les familles après un incident doit suivre :", options: ["Les commentaires sur les réseaux sociaux", "Ce qui est le plus simple", "Rien", "La loi et la politique du district"], answer: 3, why: "Les obligations d'information viennent de la loi et des politiques." },
      { q: "Les lois sur les images créées par l'IA :", options: ["Sont les mêmes dans chaque État", "Sont fixées pour toujours", "Changent vite ; demandez au conseiller juridique ce qui s'applique", "Ne concernent pas les écoles"], answer: 2, why: "Les règles fédérales et des États évoluent." }
    ]
  }
};
