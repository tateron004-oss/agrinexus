"use strict";

// Koach Learn course (French translation of shared/medical-billing-coding.js). See scripts/koachlearn-courses/README.md, "Translations".
// Codes (ICD-10-CM, CPT, HCPCS) and 1500 form box numbers are kept exactly as in the English; they are practice examples only.

module.exports = {
  id: "medical-billing-coding-fr",
  lang: "fr",
  translationOf: "medical-billing-coding",
  category: "Workforce Development",
  name: "Les bases de la facturation et du codage médical",
  skills: "Choisir une certification en facturation et codage, Suivre le cycle de facturation, Choisir le bon système de codes, Chercher un code correctement, Remplir une demande de remboursement d'entraînement, Protéger la confidentialité des patients (HIPAA)",
  outcome: "transformer une consultation médicale inventée en une demande de remboursement d'entraînement complète : choisir les bons codes de diagnostic et de service, remplir les cases principales du formulaire, le vérifier avant de l'envoyer et garder confidentielles les informations du patient.",
  about: [
    "Les facturiers et codeurs médicaux transforment une consultation chez le médecin en codes et en une demande de remboursement (une facture envoyée à l'assurance), pour que le cabinet médical soit payé par la compagnie d'assurance. Beaucoup de ces emplois se font dans un bureau, et certains à distance. Ce cours est un premier pas pour les personnes qui cherchent un emploi, les anciens militaires, les personnes qui sortent de prison et les adultes qui changent de métier.",
    "Vous apprendrez en quoi consiste le métier, quelles certifications les employeurs demandent (comme la CBCS de NHA, la CPC de AAPC et la CCA de AHIMA), comment une facture avance de l'accueil du patient jusqu'au paiement, les trois grands systèmes de codes, comment chercher un code correctement, comment remplir une demande de remboursement d'entraînement et comment protéger la confidentialité des patients selon la loi HIPAA.",
    "Ce cours vous prépare. Il ne vous donne pas de certificat. Chaque certification a ses propres règles, sa formation, ses frais et son examen, que vous vérifierez sur la page officielle. Tous les patients et toutes les consultations de ce cours sont inventés, et les codes servent seulement à s'entraîner : les codes changent chaque année, donc un vrai codeur utilise toujours le livre de codes en vigueur.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" sur papier ou dans un tableur gratuit. Il y a un court contrôle après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Transformez la consultation inventée de la leçon 6 en une demande de remboursement d'entraînement complète : écrivez le code de diagnostic et les codes de service, remplissez les cases principales d'un formulaire 1500 d'entraînement (sur papier ou dans un tableur), vérifiez-le avec votre liste de contrôle avant envoi, et écrivez un plan d'une page qui nomme la certification visée, l'endroit où vous vous formerez et la date d'examen que vous visez.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui cherchent un emploi de bureau stable dans la santé : demandeurs d'emploi, anciens militaires, personnes qui sortent de prison, jeunes adultes, immigrés et adultes qui reprennent leurs études. Beaucoup n'ont jamais travaillé dans un cabinet médical. Certains veulent travailler à distance.",
    startingPoint: "Ils savent lire et écrire la langue de tous les jours et utiliser un téléphone ou un ordinateur de bibliothèque. La plupart ne connaissent ni les mots médicaux, ni les systèmes de codes, ni les termes de l'assurance, ni la façon dont une demande de remboursement est payée.",
    gap: "Les emplois de facturation et de codage demandent une certification et des compétences de base dès le premier jour : connaître le cycle de facturation, choisir le bon système de codes, chercher les codes avec soin, remplir une demande de remboursement et garder confidentielles les informations de santé. Les apprenants ont besoin d'une carte claire du métier et des certifications, et de s'exercer à chaque étape, avant de payer une formation ou un examen.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot médical ou d'assurance est expliqué",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; toutes les tâches peuvent se faire sur papier",
      "Les livres de codes et certains outils de codage sont payants ; le cours utilise des outils officiels gratuits et des exemples inventés",
      "Les codes changent chaque année : tous les codes montrés servent seulement à s'entraîner",
      "Confidentialité : aucune information réelle de patient n'est utilisée dans le cours",
      "Certaines certifications posent des questions sur le passé judiciaire ; chaque apprenant vérifie les règles propres à chaque programme"
    ],
    prerequisites: "Aucun. \"Excel et les tableurs\" et \"Comprendre sa santé\" aident, mais ne sont pas obligatoires."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "En utilisant les pages officielles de NHA, AAPC et AHIMA", action: "comparer trois certifications en facturation et codage et écrire un plan d'étude et d'examen avec des dates", standard: "avec les conditions vérifiées sur la page officielle, sans deviner" },
    { id: "O2", condition: "Avec les étapes d'une consultation médicale dans le désordre", action: "remettre dans l'ordre les étapes du cycle de facturation, de la prise de rendez-vous au paiement", standard: "sans oublier aucune étape" },
    { id: "O3", condition: "Avec cinq éléments d'une consultation inventée", action: "associer chaque élément au bon système de codes : ICD-10-CM pour le diagnostic, CPT pour le service du médecin, HCPCS Level II pour les fournitures", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O4", condition: "Avec un diagnostic tiré d'une note de consultation inventée", action: "chercher un code de diagnostic en trouvant le terme dans l'index, puis en le confirmant dans la liste des codes", standard: "à chaque fois, sans jamais coder à partir de l'index seul" },
    { id: "O5", condition: "Avec une consultation inventée et un formulaire de demande de remboursement vierge", action: "remplir les cases principales du formulaire et trouver pourquoi une demande d'entraînement a été refusée", standard: "avec le patient, l'assurance, les codes et les montants conformes à la consultation" },
    { id: "O6", condition: "Dans des situations d'entraînement au travail", action: "partager les informations du patient seulement avec les personnes qui en ont besoin, et seulement le minimum nécessaire", standard: "dans chaque situation, en respectant la loi HIPAA" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier, les certifications et les codes",
      lessons: [
        {
          title: "Le métier et les certifications demandées par les employeurs",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparer trois certifications en facturation et codage et en choisir une comme objectif.",
          text: [
            "Un codeur médical lit les notes du médecin et transforme le diagnostic et les services en codes. Un facturier médical utilise ces codes pour envoyer une demande de remboursement à la compagnie d'assurance et la suit jusqu'au paiement. Dans les petits cabinets, une seule personne fait souvent les deux.",
            "Les employeurs demandent souvent une certification. Trois certifications courantes : la Certified Billing and Coding Specialist (CBCS) de NHA, la National Healthcareer Association (un organisme d'examens pour les métiers de la santé) ; la Certified Professional Coder (CPC) de AAPC (une association de codeurs) ; et la Certified Coding Associate (CCA) de AHIMA, l'American Health Information Management Association (l'association américaine de gestion de l'information de santé).",
            "Chacune a ses propres règles. Par exemple, la CBCS de NHA demande un diplôme de fin d'études secondaires ou le GED (l'examen américain qui équivaut à ce diplôme), plus une formation ou une expérience de travail supervisée. Les frais, les règles de l'examen et les conditions changent : lisez donc la page officielle de chacune avant de payer quoi que ce soit. Ce cours vous prépare ; il ne vous donne pas de certificat.",
            "Méfiez-vous des programmes qui promettent un emploi ou un certificat en quelques jours. Demandez à toute école à quel examen de certification elle vous prépare, et vérifiez cet examen sur la page officielle."
          ],
          steps: ["Ouvrez la page officielle de la CBCS (nhanow.com), de la CPC (aapc.com) et de la CCA (ahima.org).", "Pour chacune, notez qui la délivre, ce qu'il vous faut avant l'examen et comment se passe l'examen.", "Regardez des offres d'emploi près de chez vous et comptez quelle certification est la plus demandée.", "Choisissez-en une comme objectif et écrivez un mois visé pour l'examen."],
          words: [["Codeur médical", "personne qui transforme les notes du médecin en codes standard."], ["Facturier médical", "personne qui envoie les demandes de remboursement aux compagnies d'assurance et les suit jusqu'au paiement."], ["Certification", "preuve donnée par un organisme d'examens que vous avez réussi son examen ; on parle aussi de titre professionnel."], ["Demande de remboursement", "une facture envoyée à une compagnie d'assurance pour lui demander de payer une consultation."]],
          slides: [
            { title: "Codeur et facturier", bullets: ["Codeur : transforme les notes du médecin en codes", "Facturier : envoie la demande et la suit jusqu'au paiement", "Petits cabinets : une seule personne fait souvent les deux"] },
            { title: "Trois certifications courantes", bullets: ["CBCS de NHA", "CPC de AAPC", "CCA de AHIMA"] },
            { title: "Vérifiez avant de payer", bullets: ["Règles, frais et examens changent", "Lisez chaque page officielle", "Ce cours vous prépare ; ce n'est pas un certificat"] },
            { title: "Choisissez votre voie", bullets: ["Comptez ce que demandent les offres d'emploi locales", "Choisissez une certification", "Écrivez le mois visé pour l'examen"] }
          ],
          sources: [
            { name: "NHA : Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC : Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA : Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Faites un tableau de trois colonnes sur papier ou dans un tableur : CBCS, CPC, CCA. Pour chacune, écrivez qui la délivre et ce qu'il vous faut avant l'examen, d'après la page officielle. Puis regardez cinq offres d'emploi locales et entourez la certification que vous visez.",
          youCanNow: "dire ce que font les facturiers et les codeurs, citer trois certifications et qui les délivre, et en choisir une comme objectif.",
          quickCheck: [
            { objective: "O1", q: "Qui délivre la certification CPC ?", options: ["Le cabinet médical où vous travaillez", "AAPC", "Le service des permis de conduire de votre État", "N'importe quelle école en ligne"], answer: 1, why: "La Certified Professional Coder (CPC) est la certification de AAPC." },
            { objective: "O1", q: "Un site web dit que vous pouvez devenir codeur certifié en trois jours pour une petite somme. Que faites-vous d'abord ?", options: ["Payer vite avant que le prix monte", "Dire aux employeurs que vous êtes certifié", "Vérifier les règles du vrai examen sur la page officielle", "Ne pas vous former ; le site suffit"], answer: 2, why: "Seul l'organisme qui délivre la certification peut vous donner ses vraies règles et son vrai examen." }
          ]
        },
        {
          title: "Comment avance une facture : le cycle de facturation",
          objectives: ["O2"],
          minutes: 5,
          goal: "Remettre dans l'ordre les étapes du cycle de facturation, de la prise de rendez-vous au paiement.",
          text: [
            "Le cycle de facturation, aussi appelé cycle des revenus, est le chemin qui va du moment où un patient prend rendez-vous au moment où le cabinet est entièrement payé.",
            "Les étapes principales : 1) Fixer le rendez-vous et vérifier l'assurance. 2) Accueillir le patient : confirmer son nom, sa date de naissance et sa carte d'assurance. 3) Le médecin voit le patient et écrit des notes. 4) Le codeur transforme les notes en codes. 5) Le facturier prépare la demande de remboursement et la vérifie. 6) La demande est envoyée à la compagnie d'assurance. 7) La compagnie d'assurance paie, paie une partie ou refuse, et envoie une explication. 8) Le cabinet facture au patient ce qu'il doit, comme une quote-part, et relance tout ce qui n'est pas payé.",
            "Les erreurs du début du cycle causent des problèmes plus tard. Un mauvais numéro d'assurance à l'accueil peut faire refuser une demande des semaines plus tard. C'est pourquoi un accueil soigneux compte autant qu'un codage soigneux."
          ],
          steps: ["Fixez le rendez-vous et vérifiez l'assurance.", "Accueillez le patient et confirmez ses informations.", "Le médecin voit le patient et écrit des notes.", "Codez la consultation.", "Préparez et vérifiez la demande de remboursement.", "Envoyez la demande.", "Lisez le paiement ou le refus.", "Facturez la part du patient et faites le suivi."],
          words: [["Cycle de facturation (cycle des revenus)", "toutes les étapes, de la prise de rendez-vous au paiement complet."], ["Quote-part (copay)", "un montant fixe que le patient paie pour une consultation."], ["Franchise (deductible)", "le montant qu'un patient paie chaque année avant que l'assurance commence à payer beaucoup de services."], ["Payeur", "la compagnie d'assurance ou le programme public qui paie la demande de remboursement."], ["Refus", "quand le payeur refuse de payer une demande de remboursement."]],
          slides: [
            { title: "Du rendez-vous au paiement", bullets: ["On parle de cycle de facturation ou cycle des revenus", "Chaque étape compte pour être payé"] },
            { title: "Début du cycle", bullets: ["1. Fixer le rendez-vous et vérifier l'assurance", "2. Accueil : nom, date de naissance, carte d'assurance", "3. Le médecin voit le patient et écrit des notes"] },
            { title: "Milieu du cycle", bullets: ["4. Coder la consultation", "5. Préparer et vérifier la demande", "6. L'envoyer au payeur"] },
            { title: "Fin du cycle", bullets: ["7. Le payeur paie, paie une partie ou refuse", "8. Facturer la part du patient et faire le suivi", "Erreurs au début = refus à la fin"] }
          ],
          tryIt: "Écrivez les huit étapes du cycle de facturation sur huit bouts de papier. Mélangez-les, puis remettez-les dans l'ordre sans regarder. À côté de chaque étape, écrivez une erreur qui pourrait arriver à ce moment-là, par exemple un nom mal écrit à l'accueil.",
          youCanNow: "citer dans l'ordre les étapes du cycle de facturation et expliquer comment une erreur au début peut causer un refus plus tard.",
          quickCheck: [
            { objective: "O2", q: "Quelle étape vient juste après que le codeur a transformé les notes en codes ?", options: ["Fixer le rendez-vous", "Accueillir le patient", "Le payeur envoie le paiement", "Le facturier prépare et vérifie la demande"], answer: 3, why: "On code d'abord ; ensuite le facturier prépare la demande avec ces codes et la vérifie." },
            { objective: "O2", q: "À l'accueil, le numéro d'assurance du patient est mal tapé. Quel est le résultat le plus probable ?", options: ["La demande risque d'être refusée plus tard", "Rien ; le codeur le remarquera", "Le médecin est payé plus vite", "La quote-part du patient baisse"], answer: 0, why: "Le payeur compare la demande à ses fichiers d'assurés ; un mauvais numéro mène souvent à un refus." }
          ]
        },
        {
          title: "Les trois systèmes de codes",
          objectives: ["O3"],
          minutes: 6,
          goal: "Associer chaque élément d'une consultation au bon système de codes.",
          text: [
            "Une demande de remboursement répond à deux questions : pourquoi le patient est-il venu, et qu'a fait le cabinet ? Chaque question a son propre système de codes.",
            "Les codes ICD-10-CM disent POURQUOI : le diagnostic, le signe ou le symptôme. Ils commencent par une lettre, puis des chiffres, et peuvent avoir un point, par exemple I10 pour une tension artérielle élevée sans cause connue (exemple d'entraînement). Aux États-Unis, le National Center for Health Statistics (NCHS, le centre national des statistiques de santé) des CDC gère l'ICD-10-CM.",
            "Les codes CPT disent CE QUE le médecin ou un autre professionnel a fait : une consultation au cabinet, une analyse de laboratoire, un acte médical. Ils ont cinq chiffres, par exemple 36415 pour une prise de sang dans une veine (exemple d'entraînement). L'American Medical Association (AMA, l'association médicale américaine) possède et met à jour le CPT. CMS appelle le CPT \"HCPCS Level I\".",
            "Les codes HCPCS Level II couvrent ce que le CPT ne couvre pas, comme les fournitures, le matériel et les transports en ambulance. Ils ont une lettre et quatre chiffres. CMS (les Centers for Medicare & Medicaid Services, l'agence fédérale de Medicare et Medicaid) les gère. Tous les systèmes de codes sont mis à jour chaque année : utilisez donc toujours le livre ou l'outil en vigueur."
          ],
          words: [["Diagnostic", "le problème de santé que le médecin trouve ou soigne."], ["ICD-10-CM", "le système de codes des diagnostics aux États-Unis."], ["CPT", "le système de codes à cinq chiffres de l'AMA pour les services et les actes ; aussi appelé HCPCS Level I."], ["HCPCS Level II", "le système de codes de CMS pour les fournitures, le matériel et les autres éléments que le CPT ne couvre pas ; une lettre et quatre chiffres."], ["CMS", "les Centers for Medicare & Medicaid Services, l'agence fédérale qui gère Medicare et travaille avec les États sur Medicaid."]],
          slides: [
            { title: "Deux questions dans chaque demande", bullets: ["POURQUOI le patient est-il venu ? (diagnostic)", "Qu'a FAIT le cabinet ? (service ou article)"] },
            { title: "ICD-10-CM : le pourquoi", bullets: ["Diagnostics, signes et symptômes", "Lettre + chiffres, souvent un point : I10", "Géré aux États-Unis par le NCHS des CDC"] },
            { title: "CPT : ce qui a été fait", bullets: ["Services des médecins et autres professionnels", "Cinq chiffres : 36415 (exemple d'entraînement)", "Appartient à l'AMA ; aussi appelé HCPCS Level I"] },
            { title: "HCPCS Level II : articles et extras", bullets: ["Fournitures, matériel, transports en ambulance", "Une lettre + quatre chiffres", "Géré par CMS ; tous les systèmes changent chaque année"] }
          ],
          sources: [
            { name: "CDC NCHS : ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS : HCPCS (le Level I est le CPT ; le Level II est géré par CMS)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Pour vous entraîner seulement. Pour cette consultation inventée, écrivez le système de codes de chaque élément : (1) mal de gorge, (2) consultation avec le médecin, (3) test rapide du streptocoque, (4) tension artérielle élevée, (5) une paire de béquilles que le patient emporte chez lui. Réponses : 1 et 4 sont ICD-10-CM, 2 et 3 sont CPT, 5 est HCPCS Level II.",
          youCanNow: "dire quel système de codes répond à « pourquoi le patient est venu » et lequel répond à « ce qui a été fait », et associer les éléments d'une consultation à ICD-10-CM, CPT ou HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "Quel système de codes utilisez-vous pour le diagnostic du patient ?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "Un code postal"], answer: 2, why: "Les codes ICD-10-CM disent pourquoi le patient est venu : le diagnostic, le signe ou le symptôme." },
            { objective: "O3", q: "Un patient rentre chez lui avec un déambulateur. Quel système de codes couvre en général le déambulateur ?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "Aucun code n'est nécessaire"], answer: 0, why: "Le matériel et les fournitures que le CPT ne couvre pas utilisent des codes HCPCS Level II." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier, les certifications et les codes",
        questions: [
          { objective: "O1", q: "Quelle certification en facturation et codage NHA délivre-t-elle ?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "La certification en facturation et codage de NHA est la Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "Qu'est-ce que le cycle de facturation ?", options: ["Les étapes de la prise de rendez-vous au paiement complet", "Un vélo pour les employés de bureau", "L'emploi du temps quotidien du médecin", "L'ordre des codes sur une demande"], answer: 0, why: "Le cycle de facturation (des revenus) va de la prise de rendez-vous au dernier paiement." },
          { objective: "O2", q: "Le payeur paie une partie d'une demande. Quelle est en général l'étape suivante ?", options: ["Supprimer la demande", "Facturer au patient sa part et faire le suivi", "Changer le diagnostic", "Fixer un nouveau rendez-vous"], answer: 1, why: "Après la part du payeur, le cabinet facture la part du patient, comme une quote-part ou une franchise." },
          { objective: "O3", q: "Quel est le format d'un code CPT ?", options: ["Une lettre et quatre chiffres", "Une lettre, des chiffres et un point", "Cinq chiffres", "Un mot de dix lettres"], answer: 2, why: "Les codes CPT ont cinq chiffres ; l'ICD-10-CM commence par une lettre et le HCPCS Level II est une lettre plus quatre chiffres." },
          { objective: "O3", q: "Qui gère l'ICD-10-CM aux États-Unis ?", options: ["Le National Center for Health Statistics des CDC", "L'American Medical Association", "Chaque cabinet médical", "L'employeur du patient"], answer: 0, why: "Le NCHS des CDC gère la version américaine de l'ICD-10, appelée ICD-10-CM." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Codes, demandes de remboursement et confidentialité",
      lessons: [
        {
          title: "Chercher un code correctement",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chercher un code de diagnostic dans l'index et le confirmer dans la liste des codes.",
          text: [
            "L'ICD-10-CM a deux grandes parties. L'index alphabétique classe les maladies par nom, comme l'index d'un livre. La liste analytique (tabular list) montre tous les codes dans l'ordre, avec des notes sur quand les utiliser et quand ne pas les utiliser.",
            "La règle que suivent les codeurs : cherchez d'abord le mot principal dans l'index, puis confirmez toujours le code dans la liste analytique. Ne codez jamais à partir de l'index seul, car la liste analytique peut dire d'ajouter un caractère ou d'utiliser un autre code.",
            "Cherchez la maladie, pas la partie du corps. Pour \"mal de gorge aigu\", le mot principal est pharyngite (le mot médical pour une gorge douloureuse et enflée). Lisez ensuite les notes de la liste analytique avant de choisir le code. Le CPT a lui aussi son propre index et sa liste de codes, et fonctionne de la même façon.",
            "Entraînement gratuit : l'ICD-10-CM Browser Tool des CDC permet de chercher dans le système de codes en ligne. Dans un vrai emploi, vous utilisez le livre de codes en vigueur ou l'outil payé par votre employeur, et les notes du médecin, jamais une supposition."
          ],
          steps: ["Lisez la note du médecin et trouvez le diagnostic.", "Cherchez le mot principal de la maladie dans l'index alphabétique.", "Notez le code indiqué par l'index.", "Allez à ce code dans la liste analytique.", "Lisez les notes : \"inclut\", \"exclut\", et s'il faut d'autres caractères.", "Choisissez le code qui correspond exactement à la note."],
          words: [["Index alphabétique", "la partie du livre de codes qui classe les maladies par nom, de A à Z."], ["Liste analytique", "la partie du livre de codes qui donne tous les codes dans l'ordre, avec les règles pour les utiliser."], ["Terme principal", "le mot de la maladie que vous cherchez en premier, pas la partie du corps."], ["Précision", "le degré d'exactitude d'un code ; les codeurs utilisent le code le plus précis que permettent les notes du médecin."]],
          slides: [
            { title: "Deux parties du livre de codes", bullets: ["Index alphabétique : maladies de A à Z", "Liste analytique : tous les codes dans l'ordre, avec les règles"] },
            { title: "La règle en deux étapes", bullets: ["1. Cherchez le mot principal dans l'index", "2. Confirmez le code dans la liste analytique", "Ne codez jamais à partir de l'index seul"] },
            { title: "Cherchez la maladie", bullets: ["Mot principal = la maladie, pas la partie du corps", "Lisez les notes \"inclut\" et \"exclut\"", "Prenez le code le plus précis que permettent les notes"] },
            { title: "Entraînez-vous gratuitement", bullets: ["ICD-10-CM Browser Tool des CDC", "Au travail : le livre en vigueur ou l'outil de l'employeur", "Codez d'après les notes du médecin, jamais au hasard"] }
          ],
          sources: [
            { name: "CDC NCHS : ICD-10-CM et l'ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Pour vous entraîner seulement. Ouvrez l'ICD-10-CM Browser Tool des CDC à partir du lien de la source. L'outil est en anglais : cherchez donc ces diagnostics inventés avec leur nom anglais : \"acute pharyngitis\" (pharyngite aiguë), \"essential hypertension\" (hypertension essentielle) et \"type 2 diabetes without complications\" (diabète de type 2 sans complications). Pour chacun, écrivez le mot principal cherché, le code trouvé et une note que vous avez lue avant de le choisir.",
          youCanNow: "chercher un code de diagnostic en deux étapes, d'abord l'index puis la liste analytique, et expliquer pourquoi vous ne vous arrêtez jamais à l'index.",
          quickCheck: [
            { objective: "O4", q: "Vous avez trouvé un code dans l'index alphabétique. Que faites-vous ensuite ?", options: ["Le mettre tout de suite sur la demande", "Le confirmer dans la liste analytique et lire ses notes", "Demander au patient s'il lui semble juste", "Prendre le code le plus court à côté"], answer: 1, why: "La liste analytique contient les règles et peut demander des caractères en plus ; ne codez jamais à partir de l'index seul." },
            { objective: "O4", q: "La note dit \"bronchite aiguë\". Quel est le mot principal à chercher ?", options: ["Aiguë", "Poitrine", "Poumons", "Bronchite"], answer: 3, why: "Vous cherchez la maladie (bronchite), puis vous trouvez \"aiguë\" en dessous." }
          ]
        },
        {
          title: "Remplir une demande et corriger un refus",
          objectives: ["O5"],
          minutes: 6,
          goal: "Remplir les cases principales d'un formulaire 1500 d'entraînement et trouver pourquoi une demande a été refusée.",
          text: [
            "Les cabinets médicaux facturent avec le formulaire de demande de remboursement 1500, géré par le National Uniform Claim Committee (NUCC, le comité national qui définit ce formulaire). La version papier en usage est celle de 02/12. Aujourd'hui, la plupart des demandes sont envoyées par voie électronique, mais la demande électronique contient les mêmes informations : apprendre le formulaire papier vous apprend donc les données.",
            "Les cases principales à connaître (entraînement) : case 1a, le numéro d'identifiant de l'assuré, inscrit sur la carte d'assurance. Case 2, le nom du patient. Case 21, les codes de diagnostic, notés A, B, C, etc. Case 24, les lignes de service : la date du service (24A), le code CPT ou HCPCS (24D), le renvoi au diagnostic qui relie le service à une lettre de diagnostic de la case 21 (24E) et le montant (24F). Case 33, le prestataire qui facture.",
            "Avant d'envoyer une demande, vérifiez-la : bon patient et bon identifiant, chaque service a un renvoi au diagnostic, codes en vigueur, dates et montants conformes à la consultation. Trouver les erreurs maintenant coûte moins cher que corriger un refus plus tard.",
            "Quand une demande est refusée, le payeur envoie un relevé de paiement (une explication du paiement) avec un motif. Motifs courants : mauvais identifiant ou mauvais nom, code manquant ou non valide, service non couvert, autorisation préalable manquante, demande en double, ou envoyée trop tard. Trouvez le motif, corrigez-le, puis renvoyez la demande ou faites appel selon les règles du payeur."
          ],
          steps: ["Recopiez exactement depuis la carte inventée l'identifiant de l'assuré (1a) et le nom du patient (2).", "Écrivez les codes de diagnostic dans la case 21 sous les lettres A, B, C.", "Sur chaque ligne de service de la case 24, écrivez la date, le code CPT ou HCPCS, le renvoi au diagnostic et le montant.", "Remplissez le prestataire qui facture (33).", "Vérifiez la demande avec votre liste de contrôle avant envoi.", "Si elle revient refusée, lisez le motif, corrigez la cause et renvoyez-la selon les règles du payeur."],
          words: [["Formulaire 1500", "le formulaire papier standard de demande de remboursement pour les cabinets médicaux, géré par le NUCC."], ["Renvoi au diagnostic", "la lettre sur une ligne de service (A, B, C) qui la relie à un diagnostic de la case 21."], ["Relevé de paiement (EOB ou ERA)", "l'explication du payeur sur ce qu'il a payé ou refusé, et pourquoi."], ["Autorisation préalable", "l'accord du payeur avant certains services."], ["Demande sans erreur (clean claim)", "une demande sans aucune erreur, qui peut être payée du premier coup."]],
          slides: [
            { title: "Le formulaire 1500", bullets: ["Géré par le NUCC ; version papier 02/12", "Les demandes électroniques ont les mêmes données"] },
            { title: "Cases principales (entraînement)", bullets: ["1a : identifiant de l'assuré  •  2 : nom du patient", "21 : codes de diagnostic A, B, C...", "24 : date, code, renvoi, montant  •  33 : prestataire qui facture"] },
            { title: "Vérifiez avant d'envoyer", bullets: ["Bon patient et bon identifiant", "Chaque ligne de service a un renvoi", "Codes en vigueur ; dates et montants conformes"] },
            { title: "Motifs de refus courants", bullets: ["Mauvais identifiant ou nom ; code manquant ou non valide", "Non couvert ; pas d'autorisation préalable", "En double ou envoyée trop tard : corrigez, puis renvoyez"] }
          ],
          sources: [
            { name: "NUCC : formulaire de demande de remboursement 1500", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Pour vous entraîner seulement. Patient inventé : Sam Rivera, identifiant de l'assuré ABC123456. Consultation à la date de votre choix : consultation au cabinet (99213) pour un mal de gorge (J02.9) avec un test rapide du streptocoque (87880), montants de 100 $ et 25 $ (inventés). Sur papier ou dans un tableur, remplissez les cases 1a, 2, 21, 24 (deux lignes) et 33 (\"Practice Clinic\"). Ensuite, la demande revient avec : \"identifiant d'assuré non valide\". Écrivez ce que vous vérifieriez et corrigeriez.",
          youCanNow: "remplir les cases principales d'une demande d'entraînement, la vérifier avant envoi, et trouver et corriger le motif d'un refus.",
          quickCheck: [
            { objective: "O5", q: "Où vont les codes de diagnostic sur le formulaire 1500 ?", options: ["Case 2", "Case 33", "Case 21", "Case 1a"], answer: 2, why: "La case 21 contient les codes de diagnostic, notés A, B, C, etc." },
            { objective: "O5", q: "Une demande est refusée avec le motif \"le service exige une autorisation préalable\". Que manquait-il ?", options: ["L'accord du payeur avant le service", "Le deuxième prénom du patient", "Une deuxième copie de la demande", "La signature du médecin sur le dossier papier"], answer: 0, why: "L'autorisation préalable est l'accord du payeur avant certains services ; sans elle, la demande est refusée." }
          ]
        },
        {
          title: "Protéger la confidentialité des patients, et votre demande d'entraînement",
          objectives: ["O6"],
          minutes: 5,
          goal: "Partager les informations du patient seulement avec les personnes qui en ont besoin, et seulement ce dont elles ont besoin.",
          text: [
            "Les facturiers et les codeurs voient chaque jour des informations de santé privées : noms, dates de naissance, diagnostics, numéros d'assurance. HIPAA est la loi fédérale américaine qui les protège. Sa règle sur la confidentialité (Privacy Rule) s'applique aux régimes d'assurance santé, à la plupart des cabinets médicaux et des hôpitaux, et aux entreprises qui travaillent pour eux, comme les sociétés de facturation.",
            "Les informations de santé protégées (PHI, en anglais) sont toutes les informations de santé qui permettent d'identifier une personne. La règle du \"minimum nécessaire\" veut dire que vous utilisez et partagez seulement ce qui est utile pour le travail. Un payeur peut avoir besoin du code de diagnostic sur la demande ; un collègue en salle de pause n'a pas besoin de l'entendre.",
            "Bonnes habitudes de tous les jours : verrouillez votre écran quand vous vous éloignez, ne parlez jamais des patients en public, vérifiez l'identité de toute personne qui appelle, envoyez les demandes seulement par des systèmes autorisés, et n'envoyez jamais de PHI par e-mail ou par SMS depuis un compte personnel. Si vous voyez une erreur de confidentialité, prévenez tout de suite votre responsable ou le responsable de la confidentialité.",
            "Maintenant, rassemblez tout dans votre tâche finale : une demande d'entraînement complète et votre plan de certification."
          ],
          steps: ["Avant de partager, demandez-vous : cette personne a-t-elle une raison de travail de le savoir ?", "Partagez seulement le minimum dont elle a besoin.", "Vérifiez qui appelle avant de donner quoi que ce soit.", "Verrouillez votre écran et utilisez seulement des systèmes autorisés.", "Signalez les erreurs de confidentialité à votre responsable ou au responsable de la confidentialité."],
          words: [["HIPAA", "la loi fédérale américaine qui protège la confidentialité et la sécurité des informations de santé."], ["PHI", "informations de santé protégées : informations de santé qui permettent d'identifier une personne."], ["Minimum nécessaire", "l'idée de HIPAA de n'utiliser ou ne partager que les informations utiles à la tâche."], ["Responsable de la confidentialité", "la personne au travail chargée des règles de confidentialité et des signalements."]],
          slides: [
            { title: "HIPAA protège les patients", bullets: ["Loi fédérale sur la confidentialité des informations de santé", "Couvre les assureurs santé, la plupart des médecins et leurs sociétés de facturation"] },
            { title: "Minimum nécessaire", bullets: ["Partagez seulement avec ceux qui en ont besoin pour le travail", "Partagez seulement ce dont ils ont besoin"] },
            { title: "Bonnes habitudes", bullets: ["Verrouillez votre écran", "Ne parlez pas des patients en public", "Vérifiez qui appelle", "Systèmes autorisés seulement, jamais d'e-mail personnel"] },
            { title: "Tâche finale", bullets: ["Remplissez la demande d'entraînement", "Vérifiez-la avec votre liste de contrôle avant envoi", "Écrivez votre plan de certification avec des dates"] }
          ],
          sources: [
            { name: "HHS : HIPAA pour les professionnels (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Tâche finale, pour vous entraîner seulement. Consultation inventée : Ana Lee, identifiant de l'assuré XYZ987654, voit le médecin (99213) pour une tension artérielle élevée (I10) et a une prise de sang dans une veine (36415) ; montants inventés de 100 $ et 15 $. Remplissez une demande 1500 d'entraînement (cases 1a, 2, 21, 24, 33), vérifiez-la avec une liste de contrôle avant envoi que vous écrivez vous-même, et ajoutez un plan d'une page : votre certification, l'endroit où vous vous formerez et la date d'examen visée. N'utilisez aucune information réelle de patient.",
          youCanNow: "protéger les informations du patient avec la règle du minimum nécessaire et transformer une consultation inventée en une demande d'entraînement complète et vérifiée.",
          quickCheck: [
            { objective: "O6", q: "Une personne appelle, dit qu'elle est la sœur d'un patient et demande son diagnostic. Que faites-vous ?", options: ["Lui lire le diagnostic pour rendre service", "Le lui envoyer par SMS plus tard", "Lui donner seulement le code de diagnostic", "Suivre les règles de votre cabinet pour vérifier qui peut recevoir des informations ; ne rien partager"], answer: 3, why: "HIPAA limite qui peut recevoir des PHI ; vous suivez les règles de votre cabinet et ne partagez rien avant d'avoir vérifié." },
            { objective: "O6", q: "Que veut dire \"minimum nécessaire\" ?", options: ["Partager seulement les informations utiles à la tâche", "Travailler le moins d'heures possible", "Coder un seul diagnostic par demande", "Demander le prix le plus bas"], answer: 0, why: "Selon HIPAA, vous utilisez et partagez seulement les informations utiles au travail." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Codes, demandes de remboursement et confidentialité",
        questions: [
          { objective: "O4", q: "Pourquoi les codeurs ne codent-ils jamais à partir de l'index alphabétique seul ?", options: ["L'index est toujours périmé", "L'index ne contient aucun code", "La liste analytique a des règles et peut demander plus de caractères", "Les payeurs n'acceptent pas les codes de l'index"], answer: 2, why: "Les notes de la liste analytique peuvent changer le code ou demander des caractères en plus." },
          { objective: "O5", q: "À quoi sert le renvoi au diagnostic de la case 24E ?", options: ["Il montre l'adresse du payeur", "Il relie une ligne de service à un diagnostic de la case 21", "Il indique le domicile du patient", "Il donne la licence du médecin"], answer: 1, why: "La lettre du renvoi relie chaque service au diagnostic qui l'explique." },
          { objective: "O5", q: "Une demande est refusée \"en double\". Quelle est la meilleure première étape ?", options: ["Vérifier si la même demande a déjà été envoyée ou payée", "L'envoyer encore trois fois", "Changer les codes pour qu'elle paraisse différente", "Tout facturer au patient"], answer: 0, why: "Un refus pour doublon veut dire que le payeur l'a déjà ; vérifiez son état au lieu de la renvoyer." },
          { objective: "O6", q: "Vous devez quitter votre bureau avec une demande à l'écran. Que faites-vous ?", options: ["La laisser ouverte ; vous revenez vite", "Demander à un visiteur de la surveiller", "Tourner l'écran vers le mur", "Verrouiller votre écran"], answer: 3, why: "Verrouiller votre écran empêche les personnes non autorisées de voir les PHI." },
          { objective: "O6", q: "Lequel de ces éléments est une information de santé protégée (PHI) ?", options: ["Un formulaire de demande vierge", "Les heures d'ouverture du cabinet", "Le nom d'un patient avec son diagnostic", "Le nom d'un livre de codes"], answer: 2, why: "Une information de santé qui permet d'identifier une personne est une PHI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la facturation et du codage médical",
    questions: [
      { objective: "O1", q: "Que fait un codeur médical ?", options: ["Il transforme les notes du médecin en codes standard", "Il fait des prises de sang aux patients", "Il vend des contrats d'assurance", "Il répare les ordinateurs du bureau"], answer: 0, why: "Les codeurs transforment en codes les diagnostics et les services des notes." },
      { objective: "O1", q: "Où devez-vous vérifier les conditions et les frais actuels d'une certification ?", options: ["Un message sur les réseaux sociaux", "Un ami qui l'a passée il y a des années", "La page officielle de l'organisme qui la délivre", "N'importe quelle publicité de formation"], answer: 2, why: "Les règles et les frais changent ; la page officielle donne ceux en vigueur." },
      { objective: "O1", q: "Quelle paire est correcte ?", options: ["CPC de NHA", "CBCS de AHIMA", "CCA de AAPC", "CCA de AHIMA"], answer: 3, why: "La CCA est celle de AHIMA ; la CPC est celle de AAPC ; la CBCS est celle de NHA." },
      { objective: "O1", q: "Que vous apporte ce cours ?", options: ["Une licence de codage", "Une préparation à un examen de certification", "Un emploi garanti", "Un certificat CPC"], answer: 1, why: "Le cours vous prépare ; on obtient une certification seulement en réussissant l'examen officiel." },
      { objective: "O2", q: "Quelle est la première étape du cycle de facturation ?", options: ["Fixer le rendez-vous et vérifier l'assurance", "Envoyer la demande", "Facturer le patient", "Coder la consultation"], answer: 0, why: "Le cycle commence quand le rendez-vous est pris et l'assurance vérifiée." },
      { objective: "O2", q: "Quelle étape vient juste avant l'envoi de la demande ?", options: ["L'accueil du patient", "Préparer et vérifier la demande", "La prise de rendez-vous", "Le paiement du payeur"], answer: 1, why: "Le facturier prépare et vérifie la demande, puis l'envoie." },
      { objective: "O2", q: "Qu'est-ce qu'une quote-part (copay) ?", options: ["Une copie de la demande", "Un paiement du payeur au médecin", "Un montant fixe que le patient paie pour une consultation", "Une erreur de codage"], answer: 2, why: "Une quote-part est un montant fixe payé par le patient." },
      { objective: "O3", q: "Un patient vient pour une toux. Quel système de codes décrit la toux ?", options: ["CPT", "HCPCS Level II", "Aucun", "ICD-10-CM"], answer: 3, why: "Les signes, les symptômes et les diagnostics utilisent l'ICD-10-CM." },
      { objective: "O3", q: "Qui possède et met à jour le système de codes CPT ?", options: ["L'American Medical Association", "L'employeur du patient", "Chaque État", "Le NUCC"], answer: 0, why: "L'AMA possède le CPT ; CMS l'appelle HCPCS Level I." },
      { objective: "O3", q: "Quel code ressemble à un code HCPCS Level II ?", options: ["99213", "I10", "E0100 (exemple d'entraînement)", "36415"], answer: 2, why: "Les codes HCPCS Level II sont une lettre suivie de quatre chiffres." },
      { objective: "O3", q: "À quelle fréquence les systèmes de codes changent-ils ?", options: ["Jamais", "Chaque année", "Tous les 50 ans", "Seulement quand un médecin le demande"], answer: 1, why: "Les systèmes de codes sont mis à jour chaque année : les codeurs utilisent donc le livre ou l'outil en vigueur." },
      { objective: "O4", q: "Dans le livre de codes, quelle partie classe les maladies de A à Z ?", options: ["L'index alphabétique", "La liste analytique", "Le formulaire de demande", "Le relevé de paiement"], answer: 0, why: "L'index alphabétique classe les maladies par nom." },
      { objective: "O4", q: "Le médecin écrit \"sinusite chronique\". Que cherchez-vous d'abord ?", options: ["Chronique", "Nez", "Sinusite", "Tête"], answer: 2, why: "Cherchez la maladie (sinusite), puis le mot \"chronique\" en dessous." },
      { objective: "O4", q: "Quel est un outil officiel gratuit pour s'entraîner à chercher des codes ICD-10-CM ?", options: ["Un forum de codage au hasard", "Un quiz sur les réseaux sociaux", "Le formulaire de demande 1500", "L'ICD-10-CM Browser Tool des CDC"], answer: 3, why: "Le NCHS des CDC propose un ICD-10-CM Browser Tool gratuit." },
      { objective: "O5", q: "Où va le numéro d'identifiant de l'assuré sur le formulaire 1500 ?", options: ["Case 21", "Case 1a", "Case 24F", "Case 33"], answer: 1, why: "La case 1a contient l'identifiant de l'assuré inscrit sur la carte d'assurance." },
      { objective: "O5", q: "Qui gère le formulaire de demande 1500 ?", options: ["Le National Uniform Claim Committee (NUCC)", "Le patient", "L'AMA", "Chaque médecin"], answer: 0, why: "Le NUCC gère le formulaire de demande 1500." },
      { objective: "O5", q: "Qu'est-ce qu'une \"demande sans erreur\" (clean claim) ?", options: ["Une demande imprimée sur du papier neuf", "Une demande sans montant", "Une demande sans erreur qui peut être payée du premier coup", "Une demande envoyée par e-mail"], answer: 2, why: "Une demande sans erreur peut être payée par le payeur du premier coup." },
      { objective: "O5", q: "Que vous dit un relevé de paiement (EOB ou ERA) ?", options: ["L'adresse du patient", "L'emploi du temps de demain", "Le numéro de licence du médecin", "Ce que le payeur a payé ou refusé, et pourquoi"], answer: 3, why: "Le relevé explique le paiement ou le refus et en donne le motif." },
      { objective: "O6", q: "Un collègue en pause vous demande ce qu'a un patient dont vous avez codé le dossier. Que faites-vous ?", options: ["Le lui dire ; il travaille ici aussi", "Ne rien dire ; il n'a pas de raison de travail de le savoir", "Le lui dire à voix basse", "Lui montrer la demande"], answer: 1, why: "Selon la règle du minimum nécessaire, les PHI vont seulement aux personnes qui en ont besoin pour leur travail." },
      { objective: "O6", q: "Quelle habitude protège les PHI ?", options: ["Envoyer les demandes depuis votre e-mail personnel", "Parler des patients dans le bus", "Utiliser seulement les systèmes de travail autorisés pour envoyer les demandes", "Laisser les demandes sur l'imprimante"], answer: 2, why: "Les systèmes autorisés protègent les PHI ; l'e-mail personnel et les conversations en public, non." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Plan de certification", objective: "O1", notYet: "Aucune certification nommée, ou conditions devinées au lieu d'être vérifiées.", meets: "Nomme une certification et qui la délivre, avec les conditions et une date d'examen visée prises sur la page officielle.", exceeds: "Indique aussi une formation, des dates d'étude chaque semaine et ce que demandent les offres d'emploi locales." },
      { name: "Bons systèmes de codes", objective: "O3", notYet: "Un diagnostic est codé avec le CPT, ou un service avec l'ICD-10-CM.", meets: "Le diagnostic utilise l'ICD-10-CM et chaque service utilise le CPT.", exceeds: "Sait expliquer pourquoi chaque code appartient à son système." },
      { name: "Codes cherchés correctement", objective: "O4", notYet: "Codes recopiés sans vérification, ou pris dans l'index seul.", meets: "Chaque diagnostic a été trouvé dans l'index et confirmé dans la liste analytique (ou l'outil des CDC).", exceeds: "Note le mot principal cherché et une règle lue pour chaque code." },
      { name: "Cases de la demande remplies", objective: "O5", notYet: "Des cases manquent, ou l'identifiant, les codes ou les montants ne correspondent pas à la consultation.", meets: "Les cases 1a, 2, 21, 24 et 33 sont remplies et correspondent à la consultation ; chaque ligne de service a un renvoi.", exceeds: "Comprend une liste de contrôle écrite avant envoi qui repère au moins une erreur placée exprès." },
      { name: "Cycle de facturation et suivi", objective: "O2", notYet: "Ne sait pas dire ce qui se passe après l'envoi de la demande.", meets: "Cite les étapes de l'envoi au paiement, et ce qu'il faut faire en cas de refus.", exceeds: "Cite deux motifs de refus et la correction de chacun." },
      { name: "Confidentialité respectée", objective: "O6", notYet: "Utilise des informations réelles de patients, ou partage des PHI avec quelqu'un qui n'en a pas besoin.", meets: "Utilise seulement des informations inventées et garde la demande confidentielle.", exceeds: "Cite trois habitudes quotidiennes qui protègent les PHI au travail." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent à une formation en facturation et codage ou à un examen de certification dans les 90 jours",
      "Apprenants qui réussissent un examen CBCS, CPC ou CCA (déclaré par eux-mêmes)",
      "Apprenants embauchés dans un poste de facturation, de codage, d'accueil ou d'inscription des patients dans les 6 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur relié à internet pour les pages officielles des certifications et l'ICD-10-CM Browser Tool des CDC",
      "Du papier et un stylo, ou un tableur gratuit (Google Sheets ou Excel), pour la demande d'entraînement",
      "Un modèle de formulaire 1500 d'entraînement, imprimé ou dessiné (cases 1a, 2, 21, 24, 33)",
      "Environ 75 minutes au total, en séances courtes"
    ],
    facilitatorNotes: [
      "Insistez sur le fait que tous les codes du cours sont des exemples d'entraînement ; vérifiez que les apprenants savent que les codes changent chaque année.",
      "N'utilisez jamais de vrais dossiers de patients ni de vraies cartes d'assurance en classe ; utilisez seulement les patients inventés.",
      "Apportez des offres d'emploi locales imprimées pour que les apprenants voient quelles certifications les employeurs demandent.",
      "Placez exprès une erreur (un mauvais identifiant ou un renvoi manquant) dans une demande modèle et laissez les groupes la trouver.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne Pas encore à la fois.",
      "Apprenants avec un casier judiciaire : dites-leur de demander à chaque organisme de certification et à chaque formation ses propres règles, et de vérifier les conditions d'emploi dans leur État."
    ]
  }
};
