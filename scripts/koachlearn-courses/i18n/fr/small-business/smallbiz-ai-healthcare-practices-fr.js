"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-healthcare-practices.js). See scripts/koachlearn-courses/README.md, "Translations".

const HHS_CLOUD = { name: "HHS : HIPAA et l'informatique en nuage, recommandations (en anglais)", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS : les partenaires commerciaux (recommandations HIPAA, en anglais)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS : HIPAA pour les professionnels (en anglais)", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "L'IA pour les cabinets de santé",
  skills: "Savoir quand les informations des patients peuvent ou non aller dans l'IA, Rédiger des scripts pour l'accueil, Préparer des fiches d'information patient à faire relire par un clinicien, Créer des modèles de rendez-vous et de rappel, Rédiger des règlements du cabinet, Fixer des règles d'IA pour le personnel",
  outcome: "utiliser l'IA en toute sécurité pour le travail administratif d'un petit cabinet de santé : décider quelles tâches peuvent passer par un outil d'IA grand public et lesquelles exigent un outil approuvé avec un accord de partenaire commercial (BAA), et produire des scripts d'accueil, des modèles de rappel, une fiche en langage simple à faire relire par un clinicien et une politique d'IA pour le personnel, sans aucune information de patient dans un outil d'IA grand public.",
  about: [
    "Ce cours s'adresse aux patrons, responsables administratifs et personnel d'accueil de petits cabinets de santé : cabinets de médecine familiale, cabinets dentaires, cabinets de thérapie et de conseil, chiropracteurs, kinésithérapeutes, optométristes et services de soins à domicile, dont beaucoup de cabinets tenus par des minorités au service de leur communauté.",
    "Vous apprendrez la règle la plus importante : les informations de santé protégées (PHI) ne vont pas dans un outil d'IA, sauf si votre cabinet l'a approuvé et a signé avec l'entreprise un accord de partenaire commercial au sens de HIPAA (BAA). Ensuite, vous utiliserez l'IA pour les nombreuses tâches de bureau qui n'ont besoin d'aucune information de patient.",
    "Dans ce cours, l'IA ne pose pas de diagnostic, ne soigne pas et ne donne pas de conseil médical. Chaque texte de santé destiné aux patients est relu par un clinicien diplômé. Ce cours n'est pas un conseil juridique ou de conformité ; consultez les recommandations du HHS (le ministère américain de la Santé) et votre conseiller en conformité. Hors des États-Unis, suivez les règles de protection des données de santé de votre pays. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez un kit IA pour votre cabinet : une liste de tâches triée en \"pas de PHI, IA grand public possible\" et \"PHI, seulement un outil approuvé avec BAA ou pas d'IA\" ; trois scripts d'accueil téléphonique ; des modèles de confirmation et de rappel de rendez-vous avec des cases à remplir ; une fiche patient en langage simple sur un sujet général, marquée \"à relire par un clinicien\" ; et une politique d'IA d'une page pour le personnel. Rien de tout cela ne contient de vraies informations de patient.",
  chapters: [
    {
      name: "Chapitre 1 : HIPAA d'abord, puis l'accueil",
      lessons: [
        {
          title: "PHI, HIPAA et IA : la règle qui passe avant tout",
          minutes: 6,
          goal: "Décider si une tâche peut passer par un outil d'IA grand public ou exige un outil approuvé avec un BAA.",
          text: [
            "Les informations de santé protégées (PHI) sont des informations de santé qui peuvent identifier un patient : noms avec une maladie, dates de naissance, notes de dossier, numéros d'assurance, détails de rendez-vous, photos, et plus encore. HIPAA, la loi fédérale américaine, fixe les règles pour que les cabinets les protègent.",
            "Selon le HHS, quand une entité couverte utilise un service extérieur, comme un service en nuage, pour créer, recevoir, conserver ou envoyer des PHI, ce service est un partenaire commercial et le cabinet doit signer avec lui un accord de partenaire commercial (BAA). Utiliser un tel service pour des PHI sans BAA viole les règles HIPAA. La plupart des outils de discussion d'IA gratuits et grand public ne signent pas de BAA avec les particuliers.",
            "Triez donc chaque tâche : si elle demande des PHI, n'utilisez qu'un outil approuvé par votre cabinet et couvert par un BAA, ou n'utilisez pas l'IA. Si elle ne demande aucune PHI, comme une fiche générale, un script téléphonique ou un règlement de cabinet, un outil d'IA grand public peut aider. En cas de doute, demandez à votre responsable de la conformité ou de la confidentialité."
          ],
          steps: ["Listez les tâches de bureau pour lesquelles vous voulez de l'aide.", "Demandez-vous : cette tâche a-t-elle besoin d'informations de patient ?", "Pas de PHI : un outil d'IA grand public peut aider.", "PHI : seulement un outil approuvé avec BAA, ou pas d'IA.", "Un doute : demandez à votre responsable de la confidentialité ou de la conformité."],
          words: [["PHI", "informations de santé protégées : des informations de santé qui peuvent identifier un patient."], ["HIPAA", "la loi fédérale américaine qui fixe les règles de protection des informations de santé."], ["Accord de partenaire commercial (BAA)", "un contrat par lequel un fournisseur s'engage à protéger les PHI selon HIPAA."], ["Entité couverte", "une assurance santé, un organisme de traitement de données ou un soignant qui doit respecter HIPAA."]],
          slides: [
            { title: "Ce qui compte comme PHI", bullets: ["Noms avec une maladie, dates de naissance", "Notes de dossier, numéros d'assurance, rendez-vous", "Photos et autres détails qui identifient"] },
            { title: "Le HHS et les services extérieurs", bullets: ["Un service qui traite des PHI est un partenaire commercial", "Le cabinet doit signer un BAA avec lui", "Des PHI sans BAA violent les règles HIPAA"] },
            { title: "Triez chaque tâche", bullets: ["Pas de PHI : l'IA grand public peut aider", "PHI : outil approuvé avec BAA seulement, ou pas d'IA", "Un doute : demandez au responsable de la conformité"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "Listez dix tâches de votre cabinet. Triez-les en deux colonnes : \"Pas de PHI : IA grand public possible\" et \"PHI : outil approuvé avec BAA seulement ou pas d'IA\".",
          youCanNow: "décider si une tâche de bureau peut passer par un outil d'IA grand public ou exige un outil approuvé avec un BAA."
        },
        {
          title: "Scripts d'accueil pour le téléphone et les messages",
          minutes: 5,
          goal: "Rédiger des scripts d'accueil clairs et aimables pour les appels courants.",
          text: [
            "Le personnel d'accueil traite chaque jour les mêmes appels : questions de nouveaux patients, assurances acceptées, itinéraire et stationnement, changement de rendez-vous, demandes de renouvellement d'ordonnance, demandes de dossier, et une personne qui semble vivre une urgence.",
            "Ces scripts n'ont besoin d'aucune information de patient, donc un outil d'IA grand public peut aider : \"Écris un script téléphonique court et chaleureux pour un cabinet dentaire familial, pour un nouveau patient qui demande si nous acceptons son assurance. Notre règle : [votre règle]. Moins de 80 mots.\"",
            "Tout script qui touche aux soins doit orienter vers la bonne personne : les questions de renouvellement et de symptômes vont au personnel soignant, et tout script d'urgence dit à l'appelant de raccrocher et d'appeler le 911 ou d'aller aux urgences les plus proches. Hors des États-Unis, indiquez le numéro d'urgence de votre pays. Faites approuver ces scripts par votre responsable médical."
          ],
          steps: ["Listez vos dix appels les plus courants.", "Demandez à l'IA un court script pour chacun, avec vos vraies règles.", "Vérifiez que les questions médicales vont au personnel soignant.", "Ajoutez une ligne d'urgence : appelez le 911.", "Faites-les approuver par votre responsable médical."],
          words: [["Script", "un court guide de ce qu'il faut dire lors d'un appel courant."], ["Triage", "décider de l'urgence d'un problème de santé ; fait par le personnel soignant, pas par l'accueil ni par l'IA."]],
          slides: [
            { title: "Les appels courants", bullets: ["Nouveaux patients et assurances", "Itinéraire, changement de rendez-vous, dossiers", "Renouvellements et urgences possibles"] },
            { title: "Aucune PHI nécessaire", bullets: ["L'IA grand public peut les rédiger", "Donnez-lui vos vraies règles", "Moins de 80 mots environ pour chacun"] },
            { title: "Orientez les questions de soins", bullets: ["Renouvellements et symptômes -> personnel soignant", "Urgences -> 911 (ou votre numéro local) ou les urgences", "Le responsable médical approuve les scripts"] }
          ],
          tryIt: "Demandez à l'IA trois scripts d'accueil : une question d'assurance, un changement de rendez-vous, et un appelant qui décrit une douleur à la poitrine (qui doit l'orienter vers le 911 ou le numéro d'urgence de votre pays). Marquez-les pour approbation par votre responsable médical.",
          youCanNow: "rédiger des scripts d'accueil aimables et clairs qui orientent les questions de soins en toute sécurité."
        },
        {
          title: "Modèles de rendez-vous et de rappel",
          minutes: 5,
          goal: "Créer des modèles de confirmation et de rappel de rendez-vous qui protègent la vie privée.",
          text: [
            "Les modèles font gagner du temps et réduisent les absences. Écrivez-les avec des cases à remplir : \"Bonjour [prénom], ici [nom du cabinet] pour confirmer votre rendez-vous le [date] à [heure]. Répondez C pour confirmer ou appelez le [téléphone] pour le changer.\"",
            "Gardez les rappels minimaux. N'indiquez pas le motif de la visite ni le type de praticien quand cela révélerait une information sensible, comme une visite de thérapie ou de spécialité. C'est votre logiciel de gestion du cabinet ou de messagerie patients qui remplit les vrais détails, pas l'outil d'IA.",
            "Demandez à l'IA des versions dans les autres langues de vos patients, puis faites-les vérifier par un membre du personnel qui parle couramment la langue ou par un traducteur qualifié."
          ],
          steps: ["Demandez à l'IA des modèles de confirmation, de rappel et de changement avec des cases à remplir.", "Retirez tout ce qui révèle le motif de la visite.", "Chargez-les dans votre logiciel de rendez-vous, qui remplit les détails.", "Faites vérifier les traductions par une personne qualifiée ou qui parle couramment."],
          words: [["Logiciel de gestion du cabinet", "le logiciel qu'un cabinet utilise pour les rendez-vous et la facturation."], ["Minimum nécessaire", "le principe de HIPAA qui consiste à n'utiliser ou ne partager que les informations nécessaires au but visé."]],
          slides: [
            { title: "Des modèles avec cases à remplir", bullets: ["[prénom], [date], [heure], [téléphone]", "L'outil d'IA ne voit jamais les vrais détails"] },
            { title: "Des rappels minimaux", bullets: ["N'indiquez pas le motif de la visite", "Prudence avec les spécialités sensibles", "Votre logiciel de rendez-vous remplit les détails"] },
            { title: "Autres langues", bullets: ["L'IA rédige les traductions", "Une personne qualifiée ou qui parle couramment les vérifie"] }
          ],
          tryIt: "Demandez à l'IA un modèle de confirmation, un rappel la veille et un modèle de changement de rendez-vous avec des cases à remplir. Retirez tout ce qui révèle pourquoi le patient vient.",
          youCanNow: "créer avec l'aide de l'IA des modèles de rendez-vous qui respectent la vie privée."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : HIPAA d'abord, puis l'accueil",
        questions: [
          { q: "Laquelle est une information de santé protégée (PHI) ?", options: ["L'itinéraire pour se garer au cabinet", "Le nom d'un patient avec son diagnostic", "Une fiche générale sur le lavage des mains", "Les horaires du cabinet"], answer: 1, why: "Une information de santé qui identifie un patient est une PHI." },
          { q: "Selon le HHS, un service qui conserve des PHI pour votre cabinet a besoin :", options: ["Du mot de passe d'un patient", "De rien", "D'un compte sur les réseaux sociaux", "D'un accord de partenaire commercial"], answer: 3, why: "Les services qui traitent des PHI sont des partenaires commerciaux et ont besoin d'un BAA." },
          { q: "Vous voulez que l'IA résume les notes de dossier d'un patient. Votre cabinet n'a pas de BAA avec l'outil. Que faites-vous ?", options: ["Ne pas utiliser cet outil pour cela", "Coller les notes", "Retirer seulement le nom de famille et coller", "Demander à un ami"], answer: 0, why: "Les PHI ne vont que dans des outils approuvés avec BAA." },
          { q: "Un appelant décrit une douleur à la poitrine. Le script doit :", options: ["Demander un diagnostic à l'IA", "Lui donner rendez-vous la semaine prochaine", "Lui dire d'appeler le 911 ou d'aller aux urgences les plus proches", "Le mettre en attente"], answer: 2, why: "Les urgences vont au 911 (ou au numéro d'urgence de votre pays)." },
          { q: "Qu'est-ce qu'un rappel par SMS doit omettre ?", options: ["L'heure", "La date", "Le motif de la visite", "Le numéro de téléphone du cabinet"], answer: 2, why: "Des rappels minimaux protègent la vie privée." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Documents patients, travail de bureau et règles du personnel",
      lessons: [
        {
          title: "Des fiches patients en langage simple, relues par un clinicien",
          minutes: 5,
          goal: "Rédiger une fiche patient générale en mots simples et l'envoyer en relecture à un clinicien.",
          text: [
            "Beaucoup de patients ont du mal avec le langage médical. L'IA sait bien réécrire des informations générales en mots simples : comment se préparer à un détartrage, quoi apporter à une première visite, conseils généraux pour rester actif.",
            "Ne prenez que des sujets généraux, jamais les détails d'un patient précis. Demandez : \"Écris une fiche d'une page, d'un niveau de lecture de fin d'école primaire environ, sur comment se préparer à une première séance de kinésithérapie. Phrases courtes, intertitres, aucun conseil médical au-delà de la préparation générale.\"",
            "L'IA peut se tromper sur les faits de santé. Marquez chaque brouillon \"À relire par un clinicien\" et faites-le vérifier et approuver par un clinicien diplômé avant qu'un patient ne le voie. Ajoutez la ligne de contact du cabinet et une note pour appeler le 911 en cas d'urgence (ou le numéro d'urgence de votre pays)."
          ],
          steps: ["Choisissez un sujet général sur lequel les patients posent des questions.", "Demandez à l'IA un brouillon en langage simple avec des intertitres.", "Marquez-le \"À relire par un clinicien\".", "Un clinicien diplômé le corrige et l'approuve.", "Ajoutez votre ligne de contact et la note sur le 911."],
          words: [["Langage simple", "une écriture que la plupart des gens comprennent dès la première lecture."], ["Niveau de lecture", "la difficulté d'un texte, souvent exprimée par une classe d'école."]],
          slides: [
            { title: "Les mots simples aident les patients", bullets: ["Se préparer à une visite", "Quoi apporter", "Habitudes de santé générales"] },
            { title: "Sujets généraux seulement", bullets: ["Jamais les détails d'un patient précis", "Demandez un niveau de fin d'école primaire environ"] },
            { title: "Relecture par un clinicien", bullets: ["Marquez les brouillons \"À relire par un clinicien\"", "Un clinicien diplômé approuve", "Ajoutez le contact et la note sur le 911"] }
          ],
          tryIt: "Demandez à l'IA une fiche d'une page sur un sujet général pour votre cabinet. Marquez-la \"À relire par un clinicien\" et listez deux faits que le clinicien devrait vérifier.",
          youCanNow: "rédiger avec l'IA des fiches patients en langage simple et les faire approuver par un clinicien."
        },
        {
          title: "Règlements, e-mails et offres d'emploi",
          minutes: 4,
          goal: "Utiliser l'IA pour les documents de bureau qui n'ont besoin d'aucune information de patient.",
          text: [
            "Une grande partie de la gestion d'un cabinet est de l'écriture ordinaire : une règle sur les annulations et les absences, un e-mail au personnel sur un nouveau système téléphonique, une offre d'emploi pour un assistant médical, une lettre de réclamation à un fournisseur, une liste d'accueil des nouveaux employés.",
            "Ces documents n'ont besoin d'aucune PHI, donc les outils d'IA grand public peuvent les rédiger. Donnez vos vraies règles et vos vrais détails : \"Rédige une règle aimable sur les absences pour un cabinet de conseil : prévenir 24 heures avant, 50 $ de frais à partir de la deuxième absence. Mots simples.\"",
            "Vérifiez toute règle qui touche à la loi : les frais, l'emploi, la facturation et les droits des patients peuvent être réglementés. Faites vérifier par votre conseiller en conformité, en ressources humaines ou par un avocat avant de publier."
          ],
          steps: ["Choisissez un document de bureau sans information de patient.", "Donnez à l'IA les vrais détails de votre règle.", "Retouchez-le dans votre style.", "Faites vérifier tout sujet réglementé par un conseiller en conformité, RH ou juridique."],
          words: [["Règle sur les absences", "les règles du cabinet pour les rendez-vous manqués."], ["Conseiller en conformité", "une personne qui aide un cabinet à respecter les lois et règles de santé."]],
          slides: [
            { title: "De l'écriture ordinaire", bullets: ["Règle sur les annulations et les absences", "E-mails au personnel et offres d'emploi", "Lettres aux fournisseurs et listes de contrôle"] },
            { title: "Pas de PHI : l'IA grand public peut aider", bullets: ["Donnez vos vrais détails", "Retouchez dans votre style"] },
            { title: "Vérifiez les sujets réglementés", bullets: ["Frais, emploi, facturation, droits des patients", "Relecture conformité, RH ou juridique"] }
          ],
          tryIt: "Demandez à l'IA de rédiger la règle sur les absences de votre cabinet ou une offre d'emploi pour un poste d'accueil. Notez tout ce qui demande une vérification de conformité ou RH.",
          youCanNow: "utiliser l'IA pour des documents de bureau sans information de patient, avec les bonnes vérifications."
        },
        {
          title: "Rédiger la politique d'IA de votre cabinet",
          minutes: 5,
          goal: "Rédiger une politique d'IA d'une page pour le personnel et terminer votre kit IA.",
          text: [
            "Le personnel utilise peut-être déjà l'IA sur son téléphone. Une courte politique écrite protège les patients et le cabinet. Cinq à sept règles suffisent pour commencer.",
            "Exemples de règles : (1) Aucune PHI dans un outil d'IA, sauf si le cabinet l'a approuvé et a un BAA. (2) Les outils approuvés sont listés par leur nom. (3) L'IA ne donne jamais de diagnostic ni de conseil de traitement aux patients. (4) Un clinicien diplômé approuve tout contenu de santé destiné aux patients. (5) Le personnel vérifie les faits dans les brouillons de l'IA. (6) Toute saisie accidentelle de PHI est signalée immédiatement au responsable de la confidentialité. (7) La politique est revue chaque année.",
            "Utilisez l'IA pour resserrer la formulation, puis faites approuver la politique par votre responsable de la confidentialité ou de la conformité, formez le personnel et gardez une copie signée."
          ],
          steps: ["Rédigez cinq à sept règles.", "Listez les outils approuvés par leur nom.", "Ajoutez comment signaler une erreur.", "Demandez à l'IA de resserrer la formulation.", "Obtenez l'approbation de la conformité, formez le personnel et gardez les copies signées."],
          words: [["Responsable de la confidentialité", "la personne du cabinet chargée de la confidentialité selon HIPAA."], ["Outil approuvé", "un outil que le cabinet a examiné et autorisé, avec un BAA s'il traite des PHI."]],
          slides: [
            { title: "Pourquoi une politique", bullets: ["Le personnel utilise peut-être déjà l'IA", "Elle protège les patients et le cabinet"] },
            { title: "Les règles de base", bullets: ["Pas de PHI sans outil approuvé avec BAA", "Pas de diagnostic ni de conseil de traitement par l'IA", "Un clinicien approuve le contenu de santé"] },
            { title: "La faire vivre", bullets: ["Signaler tout de suite une saisie accidentelle de PHI", "La conformité approuve ; formez le personnel", "Révision chaque année"] }
          ],
          sources: [HHS_BA],
          tryIt: "Tâche finale : rédigez votre politique d'IA d'une page pour le personnel et rassemblez votre kit IA : liste de tâches triée, trois scripts, modèles de rappel, une fiche marquée pour relecture par un clinicien, et la politique. Vérifiez qu'aucune vraie information de patient n'apparaît nulle part.",
          youCanNow: "encadrer un usage sûr de l'IA dans un cabinet de santé avec des règles claires et des outils utiles sans PHI."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Documents patients, travail de bureau et règles du personnel",
        questions: [
          { q: "Qui approuve une fiche patient rédigée par l'IA ?", options: ["Un clinicien diplômé", "L'IA", "L'accueil seul", "Un patient"], answer: 0, why: "Les cliniciens vérifient les faits de santé." },
          { q: "Quel sujet convient à une fiche générale rédigée par l'IA ?", options: ["Une note de dossier", "Les résultats d'analyse de M. Lee", "La liste de médicaments d'un patient", "Comment se préparer à une première visite"], answer: 3, why: "Les sujets généraux ne contiennent aucune PHI." },
          { q: "Quelle tâche de bureau peut passer par un outil d'IA grand public ?", options: ["Résumer les notes de visite d'un patient", "Une offre d'emploi pour un assistant médical", "Écrire une lettre avec le diagnostic d'un patient", "Coder la demande de remboursement d'un patient précis"], answer: 1, why: "Elle ne contient aucune information de patient." },
          { q: "Un employé a collé par erreur le nom et la maladie d'un patient dans un outil d'IA gratuit. Que doit dire la politique ?", options: ["Le signaler immédiatement au responsable de la confidentialité", "Le cacher", "Supprimer l'ordinateur", "Ne rien faire"], answer: 0, why: "Un signalement rapide permet au cabinet de réagir correctement." },
          { q: "Laquelle est une bonne règle de politique d'IA ?", options: ["Les PHI peuvent aller partout", "N'importe quel outil convient", "L'IA ne donne jamais de diagnostic ni de conseil de traitement aux patients", "Personne ne relit le contenu de l'IA"], answer: 2, why: "Les décisions de soins restent aux cliniciens diplômés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour les cabinets de santé",
    questions: [
      { q: "PHI veut dire :", options: ["Assurance santé publique", "Informations de santé protégées", "Inspection privée du domicile", "Indice de santé primaire"], answer: 1, why: "Ce sont des informations de santé qui identifient un patient." },
      { q: "Laquelle est une PHI ?", options: ["Une affiche générale sur la saison de la grippe", "Les horaires du cabinet", "L'itinéraire pour se garer", "Une date de naissance avec un type de rendez-vous"], answer: 3, why: "Des détails identifiants avec une information de santé sont des PHI." },
      { q: "Un BAA, c'est :", options: ["Un formulaire patient", "Un code de facturation", "Une carte d'assurance", "Un contrat par lequel un fournisseur s'engage à protéger les PHI"], answer: 3, why: "Les accords de partenaire commercial encadrent le traitement des PHI." },
      { q: "La plupart des outils de discussion d'IA gratuits et grand public :", options: ["Sont toujours approuvés HIPAA", "Ne signent pas de BAA avec les particuliers", "Sont gérés par le HHS", "Effacent tout instantanément"], answer: 1, why: "Ne supposez pas qu'un outil grand public est approuvé pour les PHI." },
      { q: "Quand vous ne savez pas si une tâche peut utiliser l'IA, demandez à :", options: ["Un patient", "L'outil d'IA", "Votre responsable de la confidentialité ou de la conformité", "Un groupe sur les réseaux sociaux"], answer: 2, why: "C'est lui qui décide ce qui est approuvé." },
      { q: "Où le personnel trouve-t-il les recommandations officielles sur HIPAA ?", options: ["hhs.gov", "Un blog au hasard", "Une application de discussion", "Un commentaire sous un article"], answer: 0, why: "Le HHS publie les recommandations HIPAA." },
      { q: "Au téléphone, les questions de renouvellement et de symptômes vont :", options: ["Sur la messagerie pour toujours", "À l'IA", "Au personnel soignant", "À la facturation"], answer: 2, why: "Les questions médicales demandent du personnel soignant." },
      { q: "Qui approuve les scripts d'accueil qui touchent aux soins ?", options: ["Le responsable médical", "Le dernier embauché", "L'IA", "Un fournisseur"], answer: 0, why: "L'approbation médicale garde les scripts sûrs." },
      { q: "Le triage est fait par :", options: ["L'IA", "Le personnel soignant", "L'accueil seul", "Les amis des patients"], answer: 1, why: "Décider de l'urgence est un travail médical." },
      { q: "Lequel est un bon modèle de rappel ?", options: ["Le numéro d'assurance du patient", "\"Bonjour Jane, nous confirmons votre suivi VIH\"", "Une note de dossier", "\"Bonjour [prénom], nous confirmons votre rendez-vous le [date] à [heure].\""], answer: 3, why: "Des cases à remplir et aucun motif de visite." },
      { q: "Qui remplit les vrais détails des patients dans les rappels ?", options: ["Votre logiciel de rendez-vous ou de messagerie", "L'outil d'IA grand public", "Le téléphone d'un bénévole", "Les réseaux sociaux"], answer: 0, why: "Les vrais détails restent dans des systèmes approuvés." },
      { q: "Les rappels traduits par l'IA doivent être vérifiés par :", options: ["Un patient", "Personne", "L'IA une deuxième fois", "Un employé qui parle couramment la langue ou un traducteur qualifié"], answer: 3, why: "Les traductions peuvent contenir des erreurs." },
      { q: "Un bon niveau de lecture pour les fiches patients générales est environ :", options: ["Faculté de médecine", "Diplômé universitaire", "Fin d'école primaire", "Pas de mots du tout"], answer: 2, why: "Le langage simple aide plus de patients à comprendre." },
      { q: "Chaque brouillon de fiche rédigé par l'IA est marqué :", options: ["\"Version finale\"", "\"À relire par un clinicien\"", "\"Secret\"", "\"Approuvé par l'IA\""], answer: 1, why: "Les cliniciens doivent approuver le contenu de santé." },
      { q: "Les fiches patients doivent inclure :", options: ["Rien d'autre", "Les histoires d'autres patients avec leur nom", "Un diagnostic pour chaque lecteur", "Votre ligne de contact et une note sur le 911 pour les urgences"], answer: 3, why: "Les patients doivent savoir comment obtenir de l'aide." },
      { q: "Quel document demande une vérification de conformité ou RH ?", options: ["Une affiche des horaires des fêtes", "Un mot de remerciement au personnel pour une fête", "Une règle sur les frais d'absence", "Un plan du parking"], answer: 2, why: "Les frais et les droits des patients peuvent être réglementés." },
      { q: "Un e-mail au personnel sur un nouveau système téléphonique :", options: ["N'a besoin d'aucune PHI, donc l'IA grand public peut aider", "Doit contenir des noms de patients", "Exige un BAA", "Ne peut pas être écrit"], answer: 0, why: "Aucune information de patient n'est en jeu." },
      { q: "Une politique d'IA doit lister :", options: ["Les noms des patients", "Les outils approuvés par leur nom", "Les mots de passe du personnel", "Rien de précis"], answer: 1, why: "Le personnel doit savoir quels outils sont autorisés." },
      { q: "À quelle fréquence revoir la politique d'IA ?", options: ["Jamais", "Au moins chaque année", "Tous les dix ans", "Seulement après une amende"], answer: 1, why: "Les outils et les règles changent." },
      { q: "Dans ce cours, l'IA sert à :", options: ["Le travail administratif et les brouillons, jamais au diagnostic", "Diagnostiquer les patients", "Prescrire", "Remplacer les cliniciens"], answer: 0, why: "Les décisions de soins restent aux cliniciens diplômés." }
    ]
  }
};
