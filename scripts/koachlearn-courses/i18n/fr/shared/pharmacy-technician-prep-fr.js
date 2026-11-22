"use strict";

// Koach Learn course (French translation of shared/pharmacy-technician-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety: no real doses or dosing advice. All prescriptions and math problems use made-up drugs ("Drug X") and are marked practice only.
// Decimals keep the point (0.5, 2.2) as on the US exams this course prepares for; thousands use a space (1 000).

module.exports = {
  id: "pharmacy-technician-prep-fr",
  lang: "fr",
  translationOf: "pharmacy-technician-prep",
  category: "Workforce Development",
  name: "Préparation au métier de technicien en pharmacie",
  skills: "Choisir une certification et vérifier les règles de son État, Lire une ordonnance, Calculs de pharmacie pour s'entraîner, Contrôles de sécurité des médicaments, Savoir ce qui revient au pharmacien, Protéger la vie privée des patients (HIPAA)",
  outcome: "construire votre propre plan d'étude et d'examen pour devenir technicien en pharmacie, et montrer les compétences de base qu'il évalue : lire une ordonnance d'entraînement, résoudre des calculs de pharmacie d'entraînement, faire les contrôles de sécurité d'un technicien, transmettre les questions cliniques au pharmacien et garder confidentielles les informations des patients.",
  about: [
    "Aux États-Unis, les techniciens en pharmacie aident les pharmaciens dans les pharmacies de magasin, les hôpitaux, les pharmacies par correspondance et les cliniques. Ils reçoivent les ordonnances, les saisissent, comptent et étiquettent les médicaments, gèrent le stock et aident les clients. Beaucoup d'États exigent que les techniciens s'enregistrent auprès du conseil de pharmacie de l'État (state board of pharmacy), et beaucoup d'employeurs demandent une certification nationale.",
    "Ce cours vous prépare à ce parcours. Vous allez comparer les deux certifications nationales (le CPhT de PTCB, obtenu en réussissant l'examen PTCE, et le CPhT de NHA, obtenu en réussissant l'examen ExCPT), vérifier les règles de votre État, lire des ordonnances d'entraînement, faire des calculs de pharmacie d'entraînement, apprendre les contrôles de sécurité et les règles fédérales que suit un technicien, et protéger la vie privée des patients selon la loi HIPAA.",
    "Ce cours ne vous certifie pas et ne vous enregistre pas, et il ne donne jamais de conseil médical. Toutes les ordonnances et tous les calculs sont inventés et marqués « entraînement seulement ». Les questions des patients sur leurs médicaments vont toujours au pharmacien.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » sur papier. Un court contrôle suit chaque leçon, un contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. Votre tâche finale est votre propre plan d'étude et d'examen, avec un cahier d'entraînement."
  ],
  finalTask: "Construisez votre propre plan d'étude et d'examen de technicien en pharmacie : indiquez l'examen que vous passerez (PTCE ou ExCPT), ce qu'exige le conseil de pharmacie de votre État, et des dates d'étude chaque semaine jusqu'à une date d'examen visée. Joignez un cahier d'entraînement : 5 ordonnances inventées que vous avez lues et vérifiées, 10 calculs d'entraînement avec votre démarche, et une liste de 5 questions de clients que vous transmettriez au pharmacien.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui cherchent un emploi stable dans la santé sans longues études : demandeurs d'emploi, jeunes adultes, immigrés, anciens militaires et adultes qui reprennent une formation. Certains travaillent déjà dans le commerce. Beaucoup n'ont jamais travaillé dans une pharmacie.",
    startingPoint: "Ils lisent l'anglais courant, font des calculs simples avec une calculatrice et utilisent un téléphone ou un ordinateur de bibliothèque. La plupart ne connaissent pas les noms de médicaments, les abréviations des ordonnances, les calculs de pharmacie ni le droit pharmaceutique.",
    gap: "Les emplois et les examens de technicien en pharmacie exigent une lecture exacte des ordonnances, des calculs soigneux, des contrôles de sécurité, la connaissance des règles fédérales et des règles de l'État, et une stricte confidentialité. Les erreurs peuvent nuire aux patients. Les apprenants doivent connaître le parcours vers le titre et les règles de leur État, et pratiquer ces compétences sans risque avant la formation ou l'examen.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de pharmacie est expliqué",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; du papier et une calculatrice simple suffisent",
      "Sécurité : aucune vraie dose ni conseil de dose ; tous les médicaments et chiffres sont inventés et marqués « entraînement seulement »",
      "Les règles changent selon l'État : chaque apprenant vérifie le conseil de pharmacie de son État",
      "La certification et l'enregistrement dans l'État peuvent poser des questions sur le casier judiciaire ; chaque apprenant vérifie les règles officielles",
      "Vie privée : aucune vraie information de patient dans aucune tâche"
    ],
    prerequisites: "Calcul de base : fractions, nombres décimaux et multiplications. « Comprendre sa santé » aide, mais n'est pas obligatoire."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À l'aide des pages officielles de PTCB, de NHA et du conseil de pharmacie de l'État", action: "comparer les deux examens nationaux de technicien et rédiger un plan d'étude et d'examen conforme aux règles de votre État", standard: "en vérifiant chaque exigence sur une page officielle" },
    { id: "O2", condition: "Face à une ordonnance inventée", action: "nommer ses parties et réécrire les instructions avec des mots simples", standard: "avec au moins 4 ordonnances d'entraînement sur 5 entièrement justes" },
    { id: "O3", condition: "Avec des problèmes d'entraînement aux chiffres inventés et une calculatrice simple", action: "résoudre des calculs de pharmacie sur les conversions d'unités, la quantité et la durée de traitement", standard: "avec au moins 8 réponses justes sur 10 et la démarche écrite" },
    { id: "O4", condition: "Face à une commande d'entraînement préparée et à son flacon de stock", action: "vérifier le patient, le médicament, le dosage et le NDC par rapport à l'ordonnance et signaler toute différence", standard: "en repérant chaque différence placée exprès" },
    { id: "O5", condition: "Face à des situations de pharmacie d'entraînement", action: "classer chaque tâche comme travail du technicien ou du pharmacien et suivre les règles supplémentaires pour les substances contrôlées", standard: "en transmettant chaque question clinique au pharmacien" },
    { id: "O6", condition: "Au comptoir de la pharmacie ou au téléphone", action: "partager les informations des patients seulement avec les personnes qui en ont besoin, et seulement le minimum nécessaire", standard: "dans chaque situation d'entraînement, en respectant HIPAA" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier, les ordonnances et les calculs",
      lessons: [
        {
          title: "Le métier, les certifications et les règles de votre État",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparer les examens PTCE et ExCPT et trouver les règles de votre État pour les techniciens.",
          text: [
            "Les techniciens en pharmacie reçoivent les ordonnances, les saisissent dans l'ordinateur, comptent et étiquettent les médicaments, gèrent le stock, tiennent la caisse et aident les clients. Un pharmacien vérifie le travail et répond à toutes les questions sur les médicaments.",
            "Il existe deux certifications nationales, et les deux donnent le titre Certified Pharmacy Technician (CPhT, technicien en pharmacie certifié). PTCB, le Pharmacy Technician Certification Board (organisme de certification des techniciens en pharmacie), le donne aux personnes qui réussissent l'examen PTCE. Pour s'inscrire, il faut notamment un programme de formation reconnu par PTCB ou assez d'expérience de travail. NHA, la National Healthcareer Association (association nationale des métiers de la santé), le donne aux personnes qui réussissent l'examen ExCPT, avec un programme de formation ou une expérience de travail encadrée.",
            "Le conseil de pharmacie de votre État décide de ce que les techniciens peuvent faire et si vous devez vous enregistrer ou avoir une licence avant de travailler. Les règles varient beaucoup d'un État à l'autre. La National Association of Boards of Pharmacy (NABP, association nationale des conseils de pharmacie) donne la liste de tous les conseils des États.",
            "Les frais, les conditions d'accès et les règles des examens changent, et les deux certifications vous demandent de déclarer les condamnations pénales ou les sanctions d'un conseil. Lisez les pages officielles avant de payer. Ce cours vous prépare ; il ne vous certifie pas et ne vous enregistre pas."
          ],
          steps: ["Ouvrez la page CPhT de PTCB et la page technicien en pharmacie de NHA.", "Notez pour chacune : le nom de l'examen, comment y accéder et tous les combien il faut le renouveler.", "Trouvez le conseil de pharmacie de votre État dans la liste de NABP.", "Écrivez ce que votre État exige avant que vous puissiez travailler comme technicien.", "Choisissez votre examen et un mois visé."],
          words: [["Technicien en pharmacie", "un travailleur formé qui aide le pharmacien à préparer et à remettre les médicaments."], ["Pharmacien", "le professionnel diplômé et autorisé qui vérifie les ordonnances et conseille les patients sur les médicaments."], ["CPhT", "Certified Pharmacy Technician (technicien en pharmacie certifié), le titre donné par PTCB ou NHA après leurs examens."], ["Conseil de pharmacie de l'État", "l'organisme de l'État qui délivre les licences des pharmaciens et fixe les règles pour les techniciens."]],
          slides: [
            { title: "Ce que font les techniciens", bullets: ["Recevoir et saisir les ordonnances", "Compter, étiqueter et ranger les médicaments", "Aider les clients ; le pharmacien vérifie et conseille"] },
            { title: "Deux examens nationaux", bullets: ["PTCB : l'examen PTCE", "NHA : l'examen ExCPT", "Les deux donnent le titre CPhT"] },
            { title: "Votre État décide", bullets: ["Enregistrement ou licence avant de travailler", "Ce que les techniciens peuvent faire", "Trouvez votre conseil dans la liste de NABP"] },
            { title: "Vérifiez avant de payer", bullets: ["Les frais et les règles changent", "Les deux demandent les condamnations ou sanctions d'un conseil", "Ce cours vous prépare ; il ne certifie pas"] }
          ],
          sources: [
            { name: "PTCB : Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" },
            { name: "NHA : Certified Pharmacy Technician (ExCPT)", url: "https://www.nhanow.com/certifications/pharmacy-technician" },
            { name: "NABP : conseils de pharmacie des États", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Faites un tableau à deux colonnes : PTCE et ExCPT. Remplissez qui le donne, comment y accéder et tous les combien le renouveler, à partir des pages officielles. En dessous, écrivez ce que le conseil de pharmacie de votre État exige avant que vous puissiez travailler comme technicien, et l'adresse web où vous l'avez trouvé.",
          youCanNow: "dire ce que font les techniciens, nommer les deux examens nationaux et qui les donne, et trouver les règles de votre État pour les techniciens.",
          quickCheck: [
            { objective: "O1", q: "Qui fait passer l'examen PTCE ?", options: ["Le service des permis de conduire de votre État", "N'importe quelle pharmacie", "PTCB, le Pharmacy Technician Certification Board", "La FDA"], answer: 2, why: "PTCB fait passer le PTCE ; le réussir donne le CPhT de PTCB." },
            { objective: "O1", q: "Qui décide si vous devez vous enregistrer avant de travailler comme technicien ?", options: ["Le conseil de pharmacie de votre État", "Le gérant du magasin", "Le client", "Une publicité de formation"], answer: 0, why: "Chaque conseil de pharmacie d'État fixe les règles d'enregistrement et de travail des techniciens." }
          ]
        },
        {
          title: "Lire une ordonnance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nommer les parties d'une ordonnance d'entraînement et réécrire ses instructions avec des mots simples.",
          text: [
            "Une ordonnance a des parties fixes : le nom et la date de naissance du patient, le nom du médicament, le dosage (par exemple 10 mg), la forme (comprimé, gélule, liquide), les instructions (appelées sig), la quantité, le nombre de renouvellements, la date, et le nom et la signature du prescripteur.",
            "Les instructions utilisent souvent des abréviations latines. Les plus courantes : po (par la bouche), bid (deux fois par jour), tid (trois fois par jour), qid (quatre fois par jour), prn (au besoin), hs (au coucher). L'étiquette doit être en mots simples, donc « 1 tab po bid » devient « Prendre 1 comprimé par la bouche deux fois par jour. »",
            "Certaines abréviations causent des erreurs, et les organismes de sécurité demandent de ne pas les utiliser. Par exemple, « QD » (chaque jour) a été confondu avec « QID » (quatre fois par jour), et « U » pour unités a été lu comme un zéro. Attention aussi aux décimales : écrivez 0.5 mg (avec un zéro devant), jamais .5 mg, et jamais 5.0 mg (un zéro à la fin peut être lu 50).",
            "Si quelque chose n'est pas clair, manque ou semble faux, ne devinez pas. Signalez-le au pharmacien."
          ],
          steps: ["Vérifiez le nom et la date de naissance du patient.", "Trouvez le nom du médicament, le dosage et la forme.", "Lisez le sig et réécrivez-le avec des mots simples.", "Vérifiez la quantité, les renouvellements, la date et le prescripteur.", "Signalez au pharmacien tout ce qui n'est pas clair ou manque."],
          words: [["Sig", "les instructions d'une ordonnance qui disent au patient comment prendre le médicament."], ["Dosage", "la quantité de médicament dans chaque unité, par exemple 10 mg dans un comprimé."], ["Forme", "le type de médicament : comprimé, gélule, liquide, crème, etc."], ["Renouvellement", "une répétition autorisée de la même ordonnance."], ["Prescripteur", "la personne autorisée qui a rédigé l'ordonnance, comme un médecin ou une infirmière praticienne."]],
          slides: [
            { title: "Les parties d'une ordonnance", bullets: ["Nom et date de naissance du patient", "Médicament, dosage et forme", "Sig, quantité, renouvellements, date, prescripteur"] },
            { title: "Abréviations courantes", bullets: ["po = par la bouche  •  prn = au besoin", "bid = deux fois par jour  •  tid = trois fois", "qid = quatre fois  •  hs = au coucher"] },
            { title: "Écritures à risque d'erreur", bullets: ["QD peut être lu QID : écrivez « chaque jour »", "U peut ressembler à 0 : écrivez « unités »", "Écrivez 0.5 (zéro devant), jamais 5.0 (zéro à la fin)"] },
            { title: "En cas de doute", bullets: ["Ne devinez pas", "Signalez-le au pharmacien"] }
          ],
          tryIt: "Entraînement seulement, médicaments inventés. Réécrivez chaque sig avec des mots simples : (1) « Drug X 1 tab po bid » (2) « Drug Y 2 caps po hs » (3) « Drug Z 1 tab po q6h prn ». Réponses : (1) Prendre 1 comprimé par la bouche deux fois par jour. (2) Prendre 2 gélules par la bouche au coucher. (3) Prendre 1 comprimé par la bouche toutes les 6 heures au besoin. Ensuite, listez les parties qui manquent dans cette note : « Drug X 10 mg, #30, Dr. Lee ».",
          youCanNow: "nommer les parties d'une ordonnance, lire les abréviations courantes du sig, repérer les écritures à risque d'erreur et signaler les ordonnances peu claires.",
          quickCheck: [
            { objective: "O2", q: "À l'entraînement, que veut dire « 1 tab po tid » ?", options: ["Prendre 1 comprimé au coucher", "Prendre 1 comprimé par la bouche trois fois par jour", "Prendre 1 comprimé un jour sur deux", "Prendre 3 comprimés en une fois"], answer: 1, why: "po veut dire par la bouche et tid veut dire trois fois par jour." },
            { objective: "O2", q: "Une ordonnance d'entraînement n'a pas d'instructions (sig). Que faites-vous ?", options: ["Vous écrivez vous-même les instructions habituelles", "Vous laissez l'étiquette vide", "Vous demandez au client comment il le prend", "Vous le signalez au pharmacien"], answer: 3, why: "Une partie manquante ou peu claire ne se devine jamais ; le pharmacien règle cela avec le prescripteur." }
          ]
        },
        {
          title: "Calculs de pharmacie pour s'entraîner",
          objectives: ["O3"],
          minutes: 6,
          goal: "Résoudre des problèmes d'entraînement sur les conversions, la quantité et la durée de traitement.",
          text: [
            "Entraînement seulement : ce sont des chiffres inventés pour préparer l'examen, jamais des instructions pour un vrai patient. Dans le vrai travail, le pharmacien vérifie chaque calcul.",
            "Conversions à connaître : 1 gramme (g) = 1 000 milligrammes (mg). 1 litre (L) = 1 000 millilitres (mL). 1 kilogramme (kg) fait environ 2.2 livres (lb). 1 cuillère à café (tsp) = 5 mL et 1 cuillère à soupe (tbsp) = 15 mL. 1 once liquide fait environ 30 mL.",
            "La durée de traitement (days' supply) dit combien de temps le médicament va durer : durée = quantité ÷ quantité utilisée par jour. Entraînement : Drug X, 1 comprimé deux fois par jour, 60 comprimés. Par jour = 2. 60 ÷ 2 = 30 jours. La quantité se calcule dans l'autre sens : quantité = quantité par jour × jours. Entraînement : Drug Y, 1 gélule trois fois par jour pendant 10 jours = 3 × 10 = 30 gélules.",
            "Écrivez toujours les unités, posez le problème avant d'utiliser la calculatrice, et vérifiez que la réponse a du sens. Une durée de 30 jours pour 6 000 comprimés n'en a pas."
          ],
          steps: ["Écrivez ce que vous savez, avec les unités.", "Écrivez ce que vous cherchez.", "Convertissez dans les mêmes unités si besoin.", "Posez le problème, puis calculez.", "Demandez-vous : la réponse a-t-elle du sens ?"],
          words: [["mg", "milligramme : un millième de gramme."], ["mL", "millilitre : un millième de litre."], ["Durée de traitement", "le nombre de jours que dure une ordonnance si elle est prise comme indiqué."], ["Conversion", "passer un nombre d'une unité à une autre, par exemple des grammes aux milligrammes."]],
          slides: [
            { title: "Entraînement seulement", bullets: ["Chiffres inventés pour préparer l'examen", "Le pharmacien vérifie chaque vrai calcul"] },
            { title: "Conversions à connaître", bullets: ["1 g = 1 000 mg  •  1 L = 1 000 mL", "1 kg ≈ 2.2 lb  •  1 fl oz ≈ 30 mL", "1 tsp = 5 mL  •  1 tbsp = 15 mL"] },
            { title: "Durée de traitement et quantité", bullets: ["Jours = quantité ÷ quantité par jour", "60 comprimés ÷ 2 par jour = 30 jours", "Quantité = par jour × jours : 3 × 10 = 30"] },
            { title: "Travaillez comme un pro", bullets: ["Écrivez les unités à chaque fois", "Posez le problème avant de calculer", "Vérifiez que la réponse a du sens"] }
          ],
          tryIt: "Entraînement seulement, chiffres inventés. Résolvez et montrez votre démarche : (1) 2.5 g = ? mg (2) 3 tsp = ? mL (3) 132 lb = ? kg (4) Drug X, 1 comprimé 3 fois par jour, 90 comprimés : durée de traitement ? (5) Drug Y, 2 gélules deux fois par jour pendant 14 jours : quantité ? Réponses : 2 500 mg ; 15 mL ; 60 kg ; 30 jours ; 56 gélules.",
          youCanNow: "convertir les unités courantes et calculer la durée de traitement et la quantité sur des problèmes d'entraînement, en montrant votre démarche.",
          quickCheck: [
            { objective: "O3", q: "Entraînement seulement : combien de milligrammes y a-t-il dans 0.5 gramme ?", options: ["5 mg", "50 mg", "5 000 mg", "500 mg"], answer: 3, why: "1 g = 1 000 mg, donc 0.5 × 1 000 = 500 mg." },
            { objective: "O3", q: "Entraînement seulement : Drug X, 1 comprimé deux fois par jour, 28 comprimés. Quelle est la durée de traitement ?", options: ["14 jours", "28 jours", "56 jours", "7 jours"], answer: 0, why: "Durée = 28 comprimés ÷ 2 par jour = 14 jours." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier, les ordonnances et les calculs",
        questions: [
          { objective: "O1", q: "Quel examen NHA fait-elle passer aux techniciens en pharmacie ?", options: ["PTCE", "CPC", "ExCPT", "NCLEX"], answer: 2, why: "L'examen de technicien en pharmacie de NHA est l'ExCPT." },
          { objective: "O1", q: "Où trouvez-vous le conseil de pharmacie de votre État ?", options: ["Dans la liste des conseils de pharmacie de NABP", "Dans une publicité d'un laboratoire", "Sur un site de bons de réduction", "Au dos d'une boîte de comprimés"], answer: 0, why: "NABP donne la liste de tous les conseils de pharmacie des États avec leur site web." },
          { objective: "O2", q: "Que veut dire « prn » sur une ordonnance d'entraînement ?", options: ["Par la bouche", "Au coucher", "Deux fois par jour", "Au besoin"], answer: 3, why: "prn veut dire au besoin." },
          { objective: "O2", q: "Quelle façon d'écrire un dosage est sûre ?", options: [".5 mg", "0.5 mg", "5.0 mg", "5.00 mg"], answer: 1, why: "Mettez un zéro devant et aucun zéro à la fin, pour que 0.5 mg ne soit pas mal lu." },
          { objective: "O3", q: "Entraînement seulement : 2 cuillères à soupe font combien de millilitres ?", options: ["10 mL", "15 mL", "30 mL", "60 mL"], answer: 2, why: "1 tbsp = 15 mL, donc 2 tbsp = 30 mL." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Sécurité, règles et vie privée",
      lessons: [
        {
          title: "Contrôles de sécurité : le bon médicament pour le bon patient",
          objectives: ["O4"],
          minutes: 5,
          goal: "Vérifier une commande d'entraînement par rapport à l'ordonnance et signaler toute différence.",
          text: [
            "La plupart des erreurs viennent de petites inattentions : le mauvais patient, un médicament au nom proche, le mauvais dosage ou le mauvais flacon pris sur l'étagère. Les techniciens aident à les repérer avant la vérification finale du pharmacien.",
            "Utilisez deux identifiants du patient, comme le nom complet et la date de naissance, chaque fois que vous recevez ou remettez une ordonnance. Deux personnes peuvent avoir le même nom.",
            "Chaque emballage de médicament a un National Drug Code (NDC, code national du médicament), le numéro en trois parties de la FDA (l'agence américaine des aliments et des médicaments) qui identifie le fabricant, le produit et l'emballage. Comparer le NDC du flacon de stock à celui de l'ordinateur (souvent en scannant le code-barres) confirme que vous avez pris le bon médicament, le bon dosage et le bon emballage. La FDA prévoit de passer à un format unique de 12 chiffres pour les NDC, donc retenez le principe, pas une seule longueur.",
            "Attention aux médicaments dont les noms se ressemblent à l'écrit ou à l'oral. Lisez sur le flacon le nom complet, le dosage et la forme, pas seulement les premières lettres. Si quelque chose ne correspond pas, arrêtez-vous et prévenez le pharmacien."
          ],
          steps: ["Confirmez deux identifiants du patient : nom et date de naissance.", "Comparez lettre par lettre le nom du médicament sur le flacon avec l'ordonnance.", "Comparez le dosage et la forme.", "Scannez ou comparez le NDC du flacon de stock.", "Arrêtez-vous et signalez toute différence au pharmacien."],
          words: [["NDC", "National Drug Code : le numéro en trois parties de la FDA pour le fabricant, le produit et l'emballage d'un médicament."], ["Identifiants du patient", "des informations comme le nom complet et la date de naissance, utilisées pour être sûr d'avoir la bonne personne."], ["Médicaments aux noms proches", "des médicaments dont les noms se ressemblent à l'écrit ou à l'oral et qu'on confond facilement."], ["Flacon de stock", "le grand contenant dans lequel la pharmacie compte les médicaments."]],
          slides: [
            { title: "Petites inattentions, grands dégâts", bullets: ["Mauvais patient ou mauvais dosage", "Noms de médicaments proches", "Mauvais flacon pris sur l'étagère"] },
            { title: "Deux identifiants du patient", bullets: ["Nom complet et date de naissance", "Au dépôt et au retrait"] },
            { title: "Comparez le NDC", bullets: ["Numéro de la FDA en trois parties : fabricant, produit, emballage", "Scannez-le ou comparez-le avec l'ordinateur", "Confirme médicament, dosage et emballage"] },
            { title: "Lisez toute l'étiquette", bullets: ["Nom complet, dosage et forme", "Pas seulement les premières lettres", "Une différence ? Arrêtez-vous et prévenez le pharmacien"] }
          ],
          sources: [
            { name: "FDA : répertoire du National Drug Code", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory" }
          ],
          tryIt: "Entraînement seulement. Écrivez sur papier trois commandes d'entraînement inventées, chacune avec un nom de patient, une date de naissance, un médicament, un dosage et un NDC. Demandez à un ami de les recopier comme « étiquettes de flacon de stock » et de changer en secret un détail dans deux d'entre elles. Comparez chaque paire comme vous l'avez appris et entourez chaque différence.",
          youCanNow: "vérifier une commande d'entraînement par rapport à l'ordonnance avec deux identifiants du patient et le NDC, et signaler chaque différence.",
          quickCheck: [
            { objective: "O4", q: "Quelle paire forme deux identifiants du patient ?", options: ["Nom complet et date de naissance", "Nom et couleur préférée", "Nom du médicament et dosage", "Modèle de téléphone et e-mail"], answer: 0, why: "Le nom complet et la date de naissance sont souvent utilisés ensemble pour confirmer le bon patient." },
            { objective: "O4", q: "Le NDC du flacon de stock ne correspond pas à l'ordinateur. Que faites-vous ?", options: ["Vous préparez quand même ; le nom est proche", "Vous modifiez l'ordinateur pour qu'il corresponde", "Vous vous arrêtez et prévenez le pharmacien", "Vous faites une réduction au client"], answer: 2, why: "Un NDC différent peut signifier le mauvais médicament, dosage ou emballage, donc vous vous arrêtez et le signalez." }
          ]
        },
        {
          title: "Votre rôle, le rôle du pharmacien et les substances contrôlées",
          objectives: ["O5"],
          minutes: 5,
          goal: "Classer des tâches d'entraînement comme travail du technicien ou travail du pharmacien.",
          text: [
            "Les techniciens font le travail technique : recevoir et saisir les ordonnances, compter, étiqueter, gérer le stock, traiter l'assurance et tenir la caisse. Les pharmaciens font le travail clinique : la vérification finale, les conseils sur la façon de prendre un médicament, les effets secondaires, les interactions entre médicaments et toute question du type « Est-ce sans danger pour moi ? ». Votre État fixe la limite exacte, donc apprenez les règles de votre État.",
            "Une règle simple : si un client pose une question sur sa santé ou son médicament, la réponse est « Je vais chercher le pharmacien pour vous. » Ne donnez jamais votre propre conseil, même si vous pensez savoir.",
            "Les substances contrôlées sont des médicaments que la Drug Enforcement Administration (DEA, l'agence fédérale de lutte contre les drogues) classe dans les Tableaux I à V, selon leur usage médical reconnu et leur risque d'abus et de dépendance. Les médicaments du Tableau I n'ont pas d'usage médical reconnu aux États-Unis ; ceux du Tableau II ont un risque élevé d'abus ; le risque baisse jusqu'au Tableau V. Ils ont des règles supplémentaires pour le stockage, le comptage, les registres et les renouvellements, et les États peuvent en ajouter.",
            "Pour les examens, connaissez les cinq tableaux, sachez que la pharmacie tient des registres précis de chaque médicament contrôlé, et que tout manque au comptage est signalé tout de suite au pharmacien."
          ],
          steps: ["Demandez-vous : est-ce une tâche technique ou une question de santé ?", "Technique : faites-la avec soin, selon les règles du magasin et de l'État.", "Question de santé ou de médicament : allez chercher le pharmacien.", "Substance contrôlée : suivez les règles supplémentaires de comptage, de registres et de stockage.", "Quelque chose manque ou semble anormal : prévenez tout de suite le pharmacien."],
          words: [["Conseil au patient", "quand le pharmacien explique à un patient comment prendre un médicament et ce qu'il doit surveiller."], ["Substance contrôlée", "un médicament que la loi contrôle de plus près parce qu'il peut être mal utilisé ou causer une dépendance."], ["DEA", "la Drug Enforcement Administration, l'agence fédérale qui fait appliquer les lois sur les substances contrôlées."], ["Tableau", "l'un des cinq groupes (I à V) dans lesquels les substances contrôlées sont classées."]],
          slides: [
            { title: "Le travail du technicien", bullets: ["Saisir, compter, étiqueter, ranger", "Assurance et caisse", "Fait avec soin, selon les règles de l'État"] },
            { title: "Le travail du pharmacien", bullets: ["Vérification finale et conseils au patient", "Effets secondaires et interactions", "Toute question « Est-ce sans danger pour moi ? »"] },
            { title: "Substances contrôlées", bullets: ["Tableaux I à V de la DEA", "I : pas d'usage médical reconnu ; II : risque élevé d'abus", "Règles en plus : stockage, comptage, registres, renouvellements"] },
            { title: "Dites-le à chaque fois", bullets: ["« Je vais chercher le pharmacien pour vous. »", "Ne donnez jamais votre propre conseil médical"] }
          ],
          sources: [
            { name: "DEA : classement des drogues en tableaux", url: "https://www.dea.gov/drug-information/drug-scheduling" },
            { name: "NABP : conseils de pharmacie des États (règles pour les techniciens)", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Entraînement seulement. Classez dans Technicien ou Pharmacien : (1) compter des comprimés pour une commande, (2) une cliente demande si elle peut prendre son nouveau médicament avec ses comprimés contre l'allergie, (3) ranger une livraison, (4) un client demande quels effets secondaires attendre, (5) saisir une nouvelle ordonnance. Réponses : 1, 3 et 5 Technicien ; 2 et 4 Pharmacien. Ensuite, écrivez les mots exacts que vous direz pour transmettre une question au pharmacien.",
          youCanNow: "distinguer le travail du technicien de celui du pharmacien, transmettre chaque question de santé au pharmacien et nommer les cinq tableaux des substances contrôlées.",
          quickCheck: [
            { objective: "O5", q: "Un client demande si son nouveau médicament est sans danger avec l'alcool. Que dites-vous ?", options: ["« Ça devrait aller. »", "« Regardez sur Internet. »", "« Ne buvez plus jamais. »", "« Je vais chercher le pharmacien pour vous. »"], answer: 3, why: "Les questions de sécurité et d'interactions sont cliniques ; seul le pharmacien y répond." },
            { objective: "O5", q: "Quelle agence fédérale classe les médicaments dans les Tableaux I à V ?", options: ["La DEA", "La poste", "L'IRS", "Le service des permis de conduire de l'État"], answer: 0, why: "La DEA fait appliquer les tableaux des substances contrôlées." }
          ]
        },
        {
          title: "La vie privée au comptoir, et votre plan d'étude",
          objectives: ["O6"],
          minutes: 5,
          goal: "Partager les informations des patients seulement avec les personnes qui en ont besoin, et seulement ce dont elles ont besoin.",
          text: [
            "Une pharmacie détient des informations de santé privées : noms, dates de naissance, médicaments, assurances. HIPAA, la loi fédérale sur la confidentialité des données de santé, les protège. Son principe du « minimum nécessaire » veut dire que vous n'utilisez et ne partagez que ce qui est utile pour la tâche.",
            "Au comptoir : parlez doucement, ne lisez pas à voix haute les noms des médicaments devant la file d'attente, et confirmez deux identifiants avant de remettre un sac. Au téléphone : confirmez qui appelle avant de partager quoi que ce soit, et suivez la règle du magasin sur qui peut retirer pour une autre personne.",
            "Ne publiez jamais rien sur les clients, ne consultez jamais le dossier d'un voisin ou d'une célébrité par curiosité, et gardez les écrans et les papiers hors de vue. Signalez tout de suite les erreurs de confidentialité au pharmacien ou au responsable de la confidentialité.",
            "Construisez maintenant votre tâche finale : votre plan d'étude et d'examen et votre cahier d'entraînement."
          ],
          steps: ["Demandez-vous : cette personne a-t-elle besoin de cette information pour son travail ou ses soins ?", "Ne partagez que le minimum dont elle a besoin.", "Confirmez deux identifiants avant de remettre un médicament.", "Parlez doucement et gardez les écrans et les papiers cachés.", "Signalez tout de suite les erreurs de confidentialité."],
          words: [["HIPAA", "la loi fédérale qui protège la confidentialité et la sécurité des informations de santé."], ["PHI", "protected health information (informations de santé protégées) : les informations de santé qui permettent d'identifier une personne."], ["Minimum nécessaire", "n'utiliser ou ne partager que les informations utiles pour la tâche."]],
          slides: [
            { title: "HIPAA à la pharmacie", bullets: ["Noms, dates de naissance, médicaments, assurances", "Ne partagez que le minimum nécessaire"] },
            { title: "Au comptoir", bullets: ["Parlez doucement", "Ne lisez pas les noms des médicaments à voix haute", "Deux identifiants avant de remettre un sac"] },
            { title: "Jamais", bullets: ["Publier sur les clients", "Consulter un dossier par curiosité", "Laisser des écrans ou des papiers en vue"] },
            { title: "Tâche finale", bullets: ["Votre examen et les règles de votre État", "Dates d'étude chaque semaine jusqu'à l'examen", "Cahier d'entraînement joint"] }
          ],
          sources: [
            { name: "HHS : HIPAA pour les professionnels (règle sur la confidentialité)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" },
            { name: "PTCB : Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" }
          ],
          tryIt: "Tâche finale. Rédigez votre plan d'étude et d'examen : l'examen (PTCE ou ExCPT), ce qu'exige le conseil de votre État, et des dates d'étude chaque semaine jusqu'à une date d'examen visée. Joignez votre cahier d'entraînement : 5 ordonnances inventées que vous avez lues et vérifiées, 10 calculs d'entraînement avec la démarche, et 5 questions de clients que vous transmettriez au pharmacien. N'utilisez aucune vraie information de patient.",
          youCanNow: "protéger la vie privée des patients au comptoir et au téléphone, et suivre votre propre plan écrit vers un examen de technicien en pharmacie.",
          quickCheck: [
            { objective: "O6", q: "Un homme appelle, dit qu'il est le voisin d'une cliente et demande quel médicament elle a retiré. Que faites-vous ?", options: ["Vous lui dites ; il est juste gentil", "Vous lui lisez sa liste", "Vous ne partagez rien et suivez la règle du magasin", "Vous lui donnez seulement le premier médicament"], answer: 2, why: "HIPAA protège les informations de cette cliente ; un voisin n'y a pas droit." },
            { objective: "O6", q: "Qu'est-ce qui aide à protéger la vie privée au comptoir ?", options: ["Lire les noms des médicaments à voix haute", "Parler doucement et confirmer deux identifiants", "Laisser les sacs ouverts sur le comptoir", "Montrer l'écran à la file d'attente"], answer: 1, why: "Parler doucement et vérifier l'identité gardent les informations de santé confidentielles." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Sécurité, règles et vie privée",
        questions: [
          { objective: "O4", q: "Qu'identifie le NDC ?", options: ["L'assurance du patient", "La licence du pharmacien", "L'adresse du magasin", "Le fabricant, le produit et l'emballage du médicament"], answer: 3, why: "Le NDC est le numéro en trois parties de la FDA pour le fabricant, le produit et l'emballage." },
          { objective: "O4", q: "Deux clients ont le même nom. Comment être sûr de remettre le sac à la bonne personne ?", options: ["Demander aussi la date de naissance", "Le donner à celui qui est arrivé le premier", "Demander à quoi sert le médicament", "Regarder leurs chaussures"], answer: 0, why: "Un deuxième identifiant, comme la date de naissance, distingue des personnes qui ont le même nom." },
          { objective: "O5", q: "Quelle tâche est le travail du pharmacien ?", options: ["Ranger les étagères", "Conseiller un patient sur les effets secondaires", "Tenir la caisse", "Compter des comprimés"], answer: 1, why: "Conseiller sur les effets secondaires est un travail clinique du pharmacien." },
          { objective: "O5", q: "Le comptage d'une substance contrôlée montre un manque. Que faites-vous ?", options: ["Vous corrigez le chiffre dans le registre", "Vous l'ignorez jusqu'au mois prochain", "Vous prévenez tout de suite le pharmacien", "Vous en commandez discrètement"], answer: 2, why: "Les substances contrôlées ont des registres stricts ; tout manque au comptage est signalé tout de suite." },
          { objective: "O6", q: "Que veut dire « minimum nécessaire » à la pharmacie ?", options: ["Utiliser les plus petits sacs", "Préparer le moins de commandes possible", "Faire payer le prix le plus bas", "Ne partager que les informations utiles pour la tâche"], answer: 3, why: "Selon HIPAA, vous n'utilisez et ne partagez que ce qui est utile." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation au métier de technicien en pharmacie",
    questions: [
      { objective: "O1", q: "Réussir le PTCE donne quel titre ?", options: ["Certified Pharmacy Technician (CPhT) de PTCB", "Pharmacien diplômé et enregistré", "Codeur professionnel certifié", "Infirmier auxiliaire autorisé"], answer: 0, why: "PTCB donne le CPhT aux personnes qui réussissent le PTCE." },
      { objective: "O1", q: "Les règles pour les techniciens changent d'un État à l'autre. Où vérifiez-vous les vôtres ?", options: ["Dans une publicité pour un médicament", "Auprès du conseil de pharmacie de votre État", "Auprès d'un ami dans un autre État", "Sur la page de recrutement de la DEA"], answer: 1, why: "Chaque conseil de pharmacie d'État fixe les règles pour les techniciens." },
      { objective: "O1", q: "Que fait ce cours pour vous ?", options: ["Il vous enregistre dans votre État", "Il vous donne le CPhT", "Il vous prépare à un examen de technicien", "Il vous permet de conseiller les patients"], answer: 2, why: "Le cours vous prépare ; l'examen et l'État délivrent les titres." },
      { objective: "O2", q: "Laquelle n'est PAS une partie habituelle d'une ordonnance ?", options: ["Le nom du patient", "Le dosage du médicament", "Les instructions (sig)", "Le magasin préféré du patient"], answer: 3, why: "Une ordonnance comprend le patient, le médicament, le dosage, la forme, le sig, la quantité, les renouvellements, la date et le prescripteur." },
      { objective: "O2", q: "À l'entraînement, « hs » sur une ordonnance veut dire :", options: ["Au coucher", "Par la bouche", "Au besoin", "Quatre fois par jour"], answer: 0, why: "hs veut dire au coucher." },
      { objective: "O2", q: "Pourquoi « QD » est-il sur les listes d'abréviations à ne pas utiliser ?", options: ["Il est trop long", "Il peut être lu QID (quatre fois par jour)", "Il veut dire par la bouche", "C'est un nom de médicament"], answer: 1, why: "QD a été confondu avec QID ; écrire « chaque jour » évite l'erreur." },
      { objective: "O2", q: "Entraînement seulement : « Drug X 2 tabs po bid » en mots simples, c'est :", options: ["Prendre 2 comprimés au coucher", "Prendre 1 comprimé deux fois par jour", "Prendre 2 comprimés par la bouche deux fois par jour", "Prendre 2 comprimés toutes les 2 heures"], answer: 2, why: "po veut dire par la bouche et bid veut dire deux fois par jour." },
      { objective: "O3", q: "Entraînement seulement : 1 cuillère à café fait combien de millilitres ?", options: ["1 mL", "15 mL", "30 mL", "5 mL"], answer: 3, why: "1 tsp = 5 mL." },
      { objective: "O3", q: "Entraînement seulement : Drug X, 1 gélule 4 fois par jour, 120 gélules. Durée de traitement ?", options: ["30 jours", "40 jours", "120 jours", "4 jours"], answer: 0, why: "120 ÷ 4 par jour = 30 jours." },
      { objective: "O3", q: "Entraînement seulement : 3 grammes font combien de milligrammes ?", options: ["30 mg", "300 mg", "3 000 mg", "0.003 mg"], answer: 2, why: "1 g = 1 000 mg, donc 3 g = 3 000 mg." },
      { objective: "O3", q: "Entraînement seulement : 176 lb font environ combien de kilogrammes ?", options: ["80 kg", "88 kg", "176 kg", "387 kg"], answer: 0, why: "176 ÷ 2.2 = 80 kg." },
      { objective: "O4", q: "Pourquoi comparer le NDC du flacon de stock ?", options: ["Pour connaître le prix", "Pour confirmer le bon médicament, le bon dosage et le bon emballage", "Pour trouver l'adresse du patient", "Ce n'est pas utile"], answer: 1, why: "Le NDC identifie le produit et l'emballage exacts." },
      { objective: "O4", q: "Deux médicaments ont des noms qui commencent de la même façon. Qu'est-ce qui protège le patient ?", options: ["Lire seulement les premières lettres", "Prendre le flacon le plus proche", "Demander au client de choisir", "Lire le nom complet, le dosage et la forme"], answer: 3, why: "On repère les noms proches en lisant toute l'étiquette." },
      { objective: "O4", q: "Vous voyez une différence entre la commande et le flacon. Que faites-vous ?", options: ["Vous vous arrêtez et le signalez au pharmacien", "Vous finissez vite en espérant que ça ira", "Vous corrigez vous-même l'ordonnance", "Vous jetez le flacon"], answer: 0, why: "Toute différence arrête le travail jusqu'à ce que le pharmacien vérifie." },
      { objective: "O5", q: "Une cliente demande si deux de ses médicaments peuvent être pris ensemble sans danger. Qui répond ?", options: ["Le technicien", "Un autre client", "Le pharmacien", "Le caissier"], answer: 2, why: "Les questions d'interactions sont cliniques et vont au pharmacien." },
      { objective: "O5", q: "Les substances contrôlées du Tableau I sont :", options: ["Les médicaments au risque d'abus le plus faible", "Des médicaments sans usage médical reconnu aux États-Unis", "Des vitamines", "Tous les médicaments sur ordonnance"], answer: 1, why: "Les médicaments du Tableau I n'ont pas d'usage médical reconnu aux États-Unis et ont un risque élevé d'abus." },
      { objective: "O5", q: "Quelle tâche est le travail du technicien ?", options: ["Conseiller sur les effets secondaires", "Faire la vérification finale", "Conseiller sur les interactions", "Saisir une nouvelle ordonnance dans l'ordinateur"], answer: 3, why: "Saisir les ordonnances est un travail technique ; le pharmacien vérifie et conseille." },
      { objective: "O6", q: "Quelle loi protège les informations de santé des patients ?", options: ["HIPAA", "OSHA", "La loi sur la qualité de l'air (Clean Air Act)", "Le code des impôts"], answer: 0, why: "HIPAA protège la confidentialité des informations de santé." },
      { objective: "O6", q: "Une célébrité vient chercher un médicament dans votre magasin. Que faites-vous ?", options: ["Vous consultez son dossier pour voir ce qu'elle prend", "Vous publiez qu'elle est passée", "Vous la servez comme n'importe quel client et ne partagez rien", "Vous le racontez à vos amis"], answer: 2, why: "Consulter ou partager un dossier sans raison professionnelle viole les règles de HIPAA." },
      { objective: "O6", q: "Vous voyez qu'un collègue a laissé les papiers d'un client sur le comptoir. Que faites-vous ?", options: ["Vous les laissez", "Vous les lisez", "Vous les donnez au client suivant", "Vous les mettez hors de vue et prévenez le pharmacien"], answer: 3, why: "Protégez les informations et signalez l'erreur de confidentialité." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 7, 8, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Plan d'étude et d'examen", objective: "O1", notYet: "Aucun examen nommé, ou les règles de l'État manquent ou sont devinées.", meets: "Nomme l'examen et qui le fait passer, l'exigence du conseil de l'État avec son adresse web, et des dates chaque semaine jusqu'à une date d'examen.", exceeds: "Nomme aussi un programme de formation et la façon dont l'apprenant remplira les conditions d'accès à l'examen." },
      { name: "Ordonnances lues", objective: "O2", notYet: "Moins de 4 ordonnances sur 5 bien lues, ou une partie manquante non signalée.", meets: "Au moins 4 ordonnances d'entraînement sur 5 ont toutes leurs parties nommées et les instructions en mots simples.", exceeds: "Les 5 sont justes, et chaque abréviation à risque d'erreur est repérée." },
      { name: "Calculs d'entraînement", objective: "O3", notYet: "Moins de 8 réponses justes sur 10, ou pas de démarche écrite.", meets: "Au moins 8 calculs d'entraînement justes sur 10, avec les unités et la démarche.", exceeds: "10 sur 10 justes, avec une vérification du bon sens écrite pour chaque réponse." },
      { name: "Contrôles de sécurité", objective: "O4", notYet: "Une différence placée exprès n'a pas été repérée.", meets: "Chaque différence placée exprès dans le nom, le dosage ou le NDC a été entourée.", exceeds: "Explique comment chaque différence aurait pu nuire à un patient." },
      { name: "Questions pour le pharmacien", objective: "O5", notYet: "Donne son propre conseil sur une question de santé.", meets: "Liste 5 questions de clients qui vont au pharmacien et les mots pour les lui transmettre.", exceeds: "Explique aussi les règles supplémentaires pour les substances contrôlées." },
      { name: "Vie privée", objective: "O6", notYet: "Utilise de vraies informations de patient quelque part dans le cahier.", meets: "N'utilise que des informations inventées.", exceeds: "Liste trois habitudes au comptoir ou au téléphone qui protègent la vie privée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent à un programme de formation de technicien en pharmacie ou s'enregistrent auprès du conseil de leur État dans les 90 jours",
      "Apprenants qui réussissent le PTCE ou l'ExCPT (déclaré par eux-mêmes)",
      "Apprenants embauchés comme techniciens en pharmacie ou techniciens stagiaires dans les 6 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour les pages de PTCB, NHA, NABP et du conseil de l'État",
      "Du papier, un stylo et une calculatrice simple",
      "Des ordonnances et des étiquettes de stock inventées et imprimées pour l'entraînement aux contrôles de sécurité",
      "Environ 75 minutes au total, en séances courtes"
    ],
    facilitatorNotes: [
      "Gardez tous les médicaments et tous les chiffres inventés ; ne répondez pas aux questions des apprenants sur leurs propres médicaments. Envoyez-les vers leur pharmacien.",
      "Imprimez la page sur les techniciens du conseil de pharmacie de votre État pour que le groupe voie ses vraies règles.",
      "Placez exprès des différences (nom, dosage, NDC) dans les étiquettes d'entraînement et laissez les binômes les trouver.",
      "Faites dire à voix haute « Je vais chercher le pharmacien pour vous » dans les jeux de rôle.",
      "Apprenants avec un casier judiciaire : dites-leur de lire les règles de PTCB, de NHA et du conseil de leur État sur la déclaration des antécédents avant de payer une formation.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
