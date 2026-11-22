"use strict";

// Koach Learn course (French translation of shared/phlebotomy-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// Teaches the knowledge behind blood collection and exam preparation. It does NOT teach anyone to draw blood. No clinical advice.

module.exports = {
  id: "phlebotomy-prep-fr",
  lang: "fr",
  translationOf: "phlebotomy-prep",
  category: "Workforce Development",
  name: "Préparation au métier de technicien en phlébotomie",
  skills: "Choisir une formation et une certification, Identifier le patient et vérifier la prescription, Ordre de prélèvement, Les étapes d'une prise de sang de routine, Prévention des infections et sécurité avec les objets piquants, Étiqueter et manipuler les échantillons",
  outcome: "faire votre propre liste de poche pour une prise de sang de routine, de l'identification du patient jusqu'à l'étiquetage des tubes et au rangement, avec l'ordre de prélèvement de votre laboratoire et les étapes de sécurité, ainsi qu'un plan pour votre formation et votre examen de certification.",
  about: [
    "Les techniciens en phlébotomie font des prises de sang dans les hôpitaux, les laboratoires, les cliniques, les centres de don du sang et au domicile des patients. C'est un moyen rapide d'entrer dans le secteur de la santé, et cela peut mener à d'autres emplois en laboratoire ou auprès des patients.",
    "Ce cours enseigne les connaissances derrière le métier : les certifications et les règles de chaque État américain, comment identifier le patient et vérifier la prescription, l'ordre de prélèvement des tubes, les étapes d'une prise de sang de routine, la prévention des infections et la sécurité avec les objets piquants, et comment étiqueter et manipuler les échantillons pour que le laboratoire puisse les utiliser. Il traite aussi de la confidentialité du patient selon HIPAA, la loi américaine sur la confidentialité des données de santé.",
    "Important : ce cours ne vous apprend pas à faire une prise de sang, et vous ne devez vous entraîner sur personne. Les prises de sang s'apprennent uniquement dans une formation agréée, sous les yeux d'un formateur, après un entraînement sur des bras d'entraînement. Les examens de certification demandent aussi la preuve de prélèvements supervisés sur de vraies personnes. Ce cours vous prépare à cette formation et à l'examen ; il ne vous donne ni certificat ni autorisation d'exercer.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" sur papier. Un court contrôle suit chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Faites votre propre liste de poche pour une prise de sang de routine : identifier le patient et vérifier la prescription, vous préparer et vous protéger, l'ordre de prélèvement de vos tubes (selon le tableau de votre formation ou de votre laboratoire), les étapes du prélèvement, l'étiquetage devant le patient, l'élimination des objets piquants et le rangement. Ajoutez un plan d'une page : la formation à laquelle vous allez postuler, l'examen de certification que vous visez, ce que votre État exige et des dates cibles.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui cherchent un moyen rapide et stable d'entrer dans le secteur de la santé : chercheurs d'emploi, jeunes adultes, immigrés, anciens militaires (certains avec une expérience médicale dans l'armée) et adultes qui reprennent des études.",
    startingPoint: "Ils savent lire des textes simples et utiliser un téléphone ou un ordinateur de bibliothèque. La plupart n'ont jamais travaillé dans une clinique ou un laboratoire, ne connaissent pas les mots médicaux, et certains ont peur des aiguilles ou du sang.",
    gap: "Les formations en phlébotomie et les examens de certification attendent que l'apprenant connaisse l'identification du patient, l'ordre de prélèvement, les étapes de la ponction veineuse, la prévention des infections, la manipulation des échantillons et la confidentialité, et qu'il ait fait des prélèvements supervisés. Les apprenants ont besoin de ces connaissances, d'un plan clair pour la formation et l'examen, et d'une image honnête du métier avant de s'inscrire.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot médical est expliqué",
      "Sécurité : aucune prise de sang ni entraînement avec des aiguilles à la maison ; cela se fait seulement dans une formation supervisée",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; le papier suffit pour toutes les tâches",
      "Les règles changent selon l'État (par exemple, la Californie délivre ses propres certificats de phlébotomie) ; chaque apprenant vérifie son État",
      "Les couleurs des tubes et l'ordre de prélèvement suivent le tableau de chaque laboratoire ; les apprenants utilisent le tableau de leur formation",
      "Confidentialité : aucune information sur de vrais patients dans les tâches"
    ],
    prerequisites: "Aucun. Le cours \"Littératie en santé\" aide, mais n'est pas obligatoire."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À l'aide de la page officielle de NHA et de la page du service de santé de votre État", action: "rédiger un plan avec une formation en phlébotomie, les prélèvements supervisés exigés et une date d'examen de certification", standard: "avec chaque exigence vérifiée sur une page officielle" },
    { id: "O2", condition: "Avec un patient fictif et une prescription de laboratoire", action: "confirmer l'identité du patient avec deux identifiants et vérifier la prescription avant tout prélèvement", standard: "en vous arrêtant chaque fois que quelque chose ne correspond pas" },
    { id: "O3", condition: "Avec une série de couleurs de tubes et le tableau de votre formation", action: "placer les tubes dans l'ordre de prélèvement", standard: "sans aucun tube hors de l'ordre" },
    { id: "O4", condition: "Avec les étapes d'une ponction veineuse de routine dans le désordre", action: "remettre les étapes dans l'ordre et dire quand arrêter le prélèvement", standard: "sans oublier aucune étape" },
    { id: "O5", condition: "Avec des situations de sécurité fictives", action: "choisir la bonne mesure de prévention des infections et de sécurité avec les objets piquants", standard: "en réussissant toutes les situations" },
    { id: "O6", condition: "Avec des échantillons fictifs", action: "décider si chaque échantillon est assez bien étiqueté et manipulé pour que le laboratoire l'accepte", standard: "en repérant chaque motif de refus" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier, le patient et les tubes",
      lessons: [
        {
          title: "Le métier, la formation et la certification",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rédiger un plan avec une formation, des prélèvements supervisés et un examen de certification.",
          text: [
            "Un technicien en phlébotomie prélève le sang des patients pour des analyses de laboratoire et pour le don du sang. Le métier demande des gestes soigneux, du calme avec les patients inquiets et une sécurité stricte.",
            "La plupart des gens commencent par une formation en phlébotomie dans un community college (établissement public d'enseignement supérieur court), une école pour adultes ou une école professionnelle. Vous apprenez d'abord sur des bras d'entraînement, puis vous faites des prélèvements sur de vraies personnes sous les yeux d'un formateur. Cette partie pratique ne peut pas s'apprendre en ligne.",
            "Certification : un choix courant est le Certified Phlebotomy Technician (CPT) de NHA, la National Healthcareer Association (un organisme de certification dans la santé). NHA demande un diplôme de fin d'études secondaires ou le GED (ou l'un des deux bientôt obtenu), une formation ou une expérience professionnelle supervisée, et la preuve d'au moins 30 ponctions veineuses et 10 ponctions capillaires (au doigt ou au talon) sur des personnes vivantes. D'autres organismes, comme ASCP, certifient aussi les phlébotomistes ; consultez leurs pages officielles.",
            "Certains États fixent leurs propres règles. La Californie, par exemple, délivre des certificats d'État de phlébotomie par le California Department of Public Health (CDPH, le service de santé publique de Californie) et exige aussi un examen national d'un organisme agréé. Vérifiez auprès du service de santé de votre État avant de choisir une formation. Les règles et les frais changent, alors lisez les pages officielles."
          ],
          steps: ["Trouvez deux formations en phlébotomie près de chez vous.", "Demandez à chacune : combien de prélèvements supervisés les élèves font-ils, et à quelle certification préparent-elles ?", "Lisez la page officielle de la certification pour connaître ses exigences actuelles.", "Vérifiez les règles du service de santé de votre État.", "Notez des dates cibles : début de la formation, fin de la formation, examen."],
          words: [["Phlébotomie", "prélever du sang chez une personne pour des analyses ou un don."], ["Ponction veineuse", "introduire une aiguille dans une veine pour prélever du sang."], ["Ponction capillaire", "une petite piqûre au doigt ou au talon pour prélever quelques gouttes de sang."], ["Bras d'entraînement", "un modèle de bras qui sert à apprendre les prélèvements sans danger."]],
          slides: [
            { title: "Le métier", bullets: ["Prélever du sang pour des analyses et des dons", "Gestes soigneux, calme, sécurité stricte"] },
            { title: "La formation d'abord", bullets: ["Formation agréée : college, école pour adultes ou professionnelle", "Bras d'entraînement, puis vrais prélèvements supervisés", "La pratique ne s'apprend pas en ligne"] },
            { title: "Certification", bullets: ["CPT de NHA : formation ou expérience professionnelle", "Preuve de 30 ponctions veineuses et 10 ponctions capillaires", "D'autres organismes, comme ASCP : voir leurs pages"] },
            { title: "Vérifiez votre État", bullets: ["Certains États délivrent leurs propres certificats", "Californie : CDPH plus un examen national", "Règles et frais changent : lisez les pages officielles"] }
          ],
          sources: [
            { name: "NHA : Certified Phlebotomy Technician (CPT)", url: "https://www.nhanow.com/certifications/phlebotomy-technician" },
            { name: "Service de santé publique de Californie : certificat de phlébotomie", url: "https://www.cdph.ca.gov/Programs/OSPHLD/LFS/Pages/Phlebotomist.aspx" }
          ],
          tryIt: "Rédigez un plan d'une page : deux formations près de chez vous (nom, durée, prélèvements supervisés, certification préparée), la certification que vous visez et ses exigences selon la page officielle, les règles de votre État et trois dates cibles.",
          youCanNow: "dire ce que fait un technicien en phlébotomie, comment se passe la formation, ce que demande le CPT de NHA et où vérifier les règles de votre État.",
          quickCheck: [
            { objective: "O1", q: "Où apprend-on vraiment à faire une prise de sang ?", options: ["Avec des vidéos à la maison", "Sur un ami, avec prudence", "Dans une formation agréée, sous les yeux d'un formateur", "Sur soi-même"], answer: 2, why: "Les prélèvements s'apprennent uniquement dans une formation supervisée, d'abord sur des bras d'entraînement." },
            { objective: "O1", q: "Que demande le CPT de NHA, en plus d'une formation ou d'une expérience professionnelle ?", options: ["La preuve de ponctions veineuses et capillaires supervisées sur des personnes vivantes", "Un diplôme d'infirmier", "Un permis de conduire", "Rien d'autre"], answer: 0, why: "NHA demande la preuve d'au moins 30 ponctions veineuses et 10 ponctions capillaires." }
          ]
        },
        {
          title: "Le bon patient et la bonne prescription",
          objectives: ["O2"],
          minutes: 5,
          goal: "Confirmer l'identité du patient avec deux identifiants et vérifier la prescription avant tout prélèvement.",
          text: [
            "L'étape la plus importante a lieu avant l'aiguille : être sûr d'avoir le bon patient. Un échantillon de la mauvaise personne peut mener au mauvais traitement.",
            "Utilisez au moins deux identifiants, en général le nom complet et la date de naissance. Demandez au patient de les dire (\"Pouvez-vous me dire votre nom complet et votre date de naissance ?\") au lieu de demander \"Vous êtes bien Jean Dupont ?\", car une personne inquiète ou confuse peut simplement dire oui. À l'hôpital, comparez aussi le bracelet d'identification avec la prescription.",
            "Ensuite, lisez la prescription de laboratoire (le bon de demande) : quelles analyses, s'il y a des consignes spéciales comme être à jeun ou une heure précise, et quels tubes il faut. Si le nom, la date de naissance ou un autre détail ne correspond pas, arrêtez-vous et demandez à votre responsable. Ne devinez jamais.",
            "Confidentialité (HIPAA) : la prescription contient des informations de santé privées. Gardez-la hors de vue, parlez à voix basse et ne parlez des analyses qu'avec le patient et le personnel qui a besoin de savoir."
          ],
          steps: ["Présentez-vous et expliquez ce que vous allez faire.", "Demandez au patient de dire son nom complet et sa date de naissance.", "Comparez-les avec la prescription (et avec le bracelet à l'hôpital).", "Vérifiez les analyses, les tubes et les consignes spéciales, comme être à jeun.", "Si quelque chose ne correspond pas, arrêtez-vous et demandez à votre responsable."],
          words: [["Identifiants du patient", "des informations comme le nom complet et la date de naissance, utilisées pour être sûr d'avoir la bonne personne."], ["Bon de demande", "la prescription de laboratoire qui indique le patient et les analyses à prélever."], ["À jeun", "ne pas manger (et parfois ne boire que de l'eau) pendant un temps fixé avant une analyse."], ["HIPAA", "la loi fédérale américaine qui protège la confidentialité des informations de santé."]],
          slides: [
            { title: "Avant l'aiguille", bullets: ["Le bon patient, c'est le plus important", "Mauvais patient = mauvais résultats, mauvais soins"] },
            { title: "Deux identifiants", bullets: ["Nom complet et date de naissance", "Le patient doit les DIRE lui-même", "À l'hôpital : vérifiez aussi le bracelet"] },
            { title: "Lisez la prescription", bullets: ["Quelles analyses et quels tubes", "Consignes : à jeun ou heure précise", "Un doute ? Arrêtez-vous et demandez"] },
            { title: "Confidentialité", bullets: ["Gardez la prescription hors de vue", "Parlez à voix basse", "Partagez seulement avec ceux qui en ont besoin"] }
          ],
          sources: [
            { name: "HHS : HIPAA pour les professionnels (règle de confidentialité)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Faites un jeu de rôle avec un ami, sans aiguille. Votre ami joue un patient avec un nom et une date de naissance inventés ; vous tenez une prescription inventée avec un détail différent. Présentez-vous, demandez-lui de dire son nom et sa date de naissance, comparez avec la prescription, et dites à voix haute ce que vous faites quand cela ne correspond pas.",
          youCanNow: "identifier un patient avec deux identifiants, vérifier la prescription, vous arrêter quand quelque chose ne correspond pas et garder les informations confidentielles.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la meilleure façon de confirmer qui est le patient ?", options: ["Demander \"Vous êtes bien Maria Lopez ?\"", "Regarder son visage", "Demander à la personne dans la salle d'attente", "Lui demander de dire son nom complet et sa date de naissance"], answer: 3, why: "Quand le patient dit lui-même deux identifiants, on évite un \"oui\" inquiet à un mauvais nom." },
            { objective: "O2", q: "La date de naissance sur la prescription ne correspond pas à celle que dit le patient. Que faites-vous ?", options: ["Vous prélevez quand même ; le nom correspond", "Vous vous arrêtez et demandez à votre responsable", "Vous changez la date sur la prescription", "Vous utilisez la prescription d'un autre patient"], answer: 1, why: "Toute différence arrête le prélèvement jusqu'à ce qu'elle soit réglée." }
          ]
        },
        {
          title: "Les tubes et l'ordre de prélèvement",
          objectives: ["O3"],
          minutes: 6,
          goal: "Placer une série de tubes dans l'ordre de prélèvement à l'aide du tableau de votre formation.",
          text: [
            "Les tubes ont des bouchons de couleur qui indiquent ce qu'ils contiennent. Certains contiennent des additifs qui empêchent le sang de coaguler ; d'autres l'aident à coaguler. Si l'additif d'un tube passe dans le tube suivant, il peut fausser les résultats.",
            "C'est pour cela que les laboratoires suivent un ordre de prélèvement, fondé sur une norme de laboratoire de CLSI. Un ordre courant est : 1) flacons d'hémoculture, 2) bleu clair (citrate de sodium), 3) rouge ou doré (tubes pour sérum, avec ou sans gel), 4) vert (héparine), 5) lavande ou violet (EDTA), 6) gris (fluorure de sodium et oxalate de potassium).",
            "Les couleurs des bouchons peuvent changer d'un fabricant à l'autre, et les laboratoires peuvent avoir d'autres tubes : utilisez donc toujours le tableau de votre formation ou de votre laboratoire. Beaucoup d'élèves apprennent une phrase pour retenir l'ordre et la répètent jusqu'à ce qu'elle devienne automatique.",
            "Les tubes avec additif se retournent doucement tête en bas puis à l'endroit (on les inverse) plusieurs fois juste après le remplissage, comme l'indique le fabricant. Ne les secouez jamais."
          ],
          words: [["Additif", "un produit chimique dans un tube qui empêche la coagulation ou aide le sang à coaguler."], ["Ordre de prélèvement", "l'ordre fixe pour remplir les tubes, pour que les additifs ne passent pas dans le tube suivant."], ["Sérum", "la partie liquide du sang après la coagulation."], ["Inverser", "retourner doucement un tube tête en bas puis à l'endroit."], ["CLSI", "le Clinical and Laboratory Standards Institute, un organisme qui rédige des normes de laboratoire."]],
          slides: [
            { title: "Pourquoi l'ordre compte", bullets: ["Le bouchon indique le contenu", "Un additif passé dans le tube suivant fausse les résultats"] },
            { title: "Un ordre de prélèvement courant", bullets: ["1. Hémocultures  2. Bleu clair", "3. Rouge ou doré  4. Vert", "5. Lavande  6. Gris"] },
            { title: "Utilisez le tableau de votre labo", bullets: ["Les couleurs changent selon les fabricants", "Les laboratoires peuvent ajouter des tubes", "Apprenez-le jusqu'à ce qu'il soit automatique"] },
            { title: "Après le remplissage", bullets: ["Inversez doucement, comme le dit le fabricant", "Ne secouez jamais"] }
          ],
          tryIt: "Découpez six bouts de papier et coloriez-les ou écrivez dessus : gris, rouge, hémoculture, lavande, bleu clair, vert. Mélangez-les et mettez-les dans l'ordre de prélèvement. Faites-le cinq fois, de plus en plus vite. Vérifiez votre réponse avec l'ordre de cette leçon, puis plus tard avec le tableau de votre formation.",
          youCanNow: "placer les tubes courants dans l'ordre de prélèvement, dire pourquoi l'ordre compte et inverser doucement les tubes après le remplissage.",
          quickCheck: [
            { objective: "O3", q: "Dans l'ordre de prélèvement courant, que prélève-t-on en premier ?", options: ["Lavande", "Gris", "Les flacons d'hémoculture", "Vert"], answer: 2, why: "Les hémocultures se prélèvent en premier pour rester stériles." },
            { objective: "O3", q: "Pourquoi existe-t-il un ordre de prélèvement ?", options: ["Pour que les additifs d'un tube ne passent pas dans le suivant", "Pour que le patient voie de jolies couleurs", "Pour utiliser moins de tubes", "Pour aller plus vite"], answer: 0, why: "Un additif passé dans le tube suivant peut fausser les résultats." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier, le patient et les tubes",
        questions: [
          { objective: "O1", q: "Qui délivre le titre Certified Phlebotomy Technician (CPT) présenté dans ce cours ?", options: ["Le DMV (le service américain des permis de conduire)", "N'importe quel hôpital", "NHA, la National Healthcareer Association", "Le médecin du patient"], answer: 2, why: "C'est NHA qui délivre le titre CPT." },
          { objective: "O1", q: "Vous vivez en Californie. Que devez-vous aussi vérifier ?", options: ["Les règles de phlébotomie du service de santé publique de Californie (CDPH)", "Rien ; les règles nationales suffisent", "Un article de blog", "Votre opérateur téléphonique"], answer: 0, why: "La Californie délivre ses propres certificats de phlébotomie par le CDPH." },
          { objective: "O2", q: "Combien d'identifiants du patient devez-vous utiliser au minimum ?", options: ["Aucun", "Un", "Cinq", "Deux"], answer: 3, why: "Au moins deux, en général le nom complet et la date de naissance." },
          { objective: "O2", q: "La prescription indique que l'analyse doit se faire à jeun. Que faites-vous ?", options: ["Vous l'ignorez", "Vous vérifiez si le patient est à jeun et suivez la règle de votre laboratoire", "Vous dites au patient de manger d'abord", "Vous prélevez un tube de plus"], answer: 1, why: "Les consignes spéciales de la prescription se vérifient avant le prélèvement." },
          { objective: "O3", q: "Dans l'ordre de prélèvement courant, quel tube vient juste avant le vert ?", options: ["Lavande", "Gris", "Rouge ou doré", "Hémoculture"], answer: 2, why: "L'ordre est : hémoculture, bleu clair, rouge ou doré, vert, lavande, gris." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Le prélèvement, la sécurité et les échantillons",
      lessons: [
        {
          title: "Les étapes d'une prise de sang de routine",
          objectives: ["O4"],
          minutes: 6,
          goal: "Remettre dans l'ordre les étapes d'une ponction veineuse de routine et dire quand s'arrêter.",
          text: [
            "Cette leçon présente les étapes pour que vous les connaissiez avant votre formation. Vous ne les ferez que sous les yeux d'un formateur. Ne vous entraînez jamais sur une personne en dehors d'une formation supervisée.",
            "Les étapes principales : identifier le patient et vérifier la prescription ; se laver les mains et mettre des gants ; installer le bras du patient ; poser le garrot et choisir une veine (la veine médiane du coude, au pli du coude, est souvent le premier choix) ; nettoyer le point de ponction et le laisser sécher à l'air ; introduire l'aiguille avec un angle faible ; remplir les tubes dans l'ordre de prélèvement ; desserrer le garrot ; retirer l'aiguille et activer le dispositif de sécurité ; appuyer avec une compresse ; étiqueter les tubes devant le patient ; ranger et vérifier que le patient va bien.",
            "Beaucoup de formations enseignent à ne pas laisser le garrot plus d'une minute environ, car cela peut fausser les résultats. Suivez les règles de votre formation.",
            "Sachez quand vous arrêter : le patient se sent mal ou s'évanouit, un gonflement (hématome) apparaît vite, le patient ressent une douleur vive, fulgurante ou comme une décharge électrique, ou le patient vous demande d'arrêter. Retirez le garrot et l'aiguille, appuyez, mettez le patient en sécurité et appelez de l'aide."
          ],
          steps: ["Identifiez le patient et vérifiez la prescription.", "Lavez-vous les mains et mettez des gants.", "Installez le bras et posez le garrot.", "Choisissez la veine, puis nettoyez le point de ponction et laissez sécher.", "Introduisez l'aiguille et remplissez les tubes dans l'ordre de prélèvement.", "Desserrez le garrot, retirez l'aiguille et activez le dispositif de sécurité.", "Appuyez avec une compresse.", "Étiquetez les tubes devant le patient, rangez et vérifiez que le patient va bien."],
          words: [["Garrot", "une bande serrée autour du bras pour mieux trouver les veines."], ["Veine médiane du coude", "une veine au pli du coude, souvent le premier choix pour un prélèvement."], ["Hématome", "un gonflement dû à du sang sous la peau."], ["Syncope", "un évanouissement : une courte perte de connaissance."]],
          slides: [
            { title: "Apprendre les étapes, pratiquer supervisé", bullets: ["Connaître les étapes avant la formation", "Vrais prélèvements seulement sous les yeux d'un formateur"] },
            { title: "Avant l'aiguille", bullets: ["Identifier le patient, vérifier la prescription", "Mains lavées, gants mis", "Garrot, choix de la veine, nettoyer et sécher"] },
            { title: "Le prélèvement et après", bullets: ["Remplir les tubes dans l'ordre de prélèvement", "Garrot desserré, aiguille retirée, sécurité activée", "Appuyer, étiqueter devant le patient"] },
            { title: "Quand s'arrêter", bullets: ["Malaise ou évanouissement", "Gonflement rapide (hématome)", "Douleur vive, fulgurante ou comme une décharge", "Le patient demande d'arrêter"] }
          ],
          tryIt: "Sans aiguille. Écrivez les huit étapes d'un prélèvement de routine sur huit cartes, mélangez-les et remettez-les dans l'ordre. Puis, au dos de la dernière carte, écrivez les quatre signes qui obligent à arrêter le prélèvement, et ce que vous faites ensuite.",
          youCanNow: "énumérer dans l'ordre les étapes d'une ponction veineuse de routine et dire quand arrêter un prélèvement et quoi faire.",
          quickCheck: [
            { objective: "O4", q: "Quelle étape vient juste avant le nettoyage du point de ponction ?", options: ["Étiqueter les tubes", "Retirer l'aiguille", "Appuyer avec une compresse", "Poser le garrot et choisir la veine"], answer: 3, why: "On trouve d'abord la veine, puis on nettoie le point de ponction et on le laisse sécher." },
            { objective: "O4", q: "Pendant un prélèvement, le patient dit qu'il se sent mal. Que faites-vous ?", options: ["Vous finissez vite", "Vous arrêtez le prélèvement, mettez le patient en sécurité et appelez de l'aide", "Vous lui demandez de se lever", "Vous n'y faites pas attention"], answer: 1, why: "Un malaise est un signe d'arrêt : garrot et aiguille retirés, appuyer, mettre le patient en sécurité, appeler de l'aide." }
          ]
        },
        {
          title: "Prévention des infections et sécurité avec les objets piquants",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choisir la bonne mesure de prévention des infections et de sécurité avec les objets piquants dans des situations fictives.",
          text: [
            "Le sang peut transporter des microbes comme l'hépatite B, l'hépatite C et le VIH, appelés agents pathogènes transmissibles par le sang. La norme d'OSHA sur ces agents pathogènes oblige les employeurs à avoir un plan de maîtrise de l'exposition, à proposer le vaccin contre l'hépatite B, à former les travailleurs, à fournir des équipements de protection et à utiliser des aiguilles avec des dispositifs plus sûrs.",
            "Vos habitudes : nettoyez-vous les mains avant et après chaque patient et quand vous enlevez vos gants ; mettez des gants neufs pour chaque patient ; utilisez des aiguilles avec dispositif de sécurité et activez-le tout de suite ; mettez les aiguilles usagées directement dans le collecteur pour objets piquants, ne remettez jamais le capuchon à la main et ne laissez jamais le collecteur trop se remplir.",
            "Si vous vous piquez avec une aiguille ou si du sang touche votre peau ou vos yeux : lavez la zone à l'eau et au savon (rincez les yeux à l'eau) et prévenez votre responsable tout de suite pour être examiné. N'attendez pas."
          ],
          steps: ["Nettoyez-vous les mains avant et après chaque patient.", "Gants neufs pour chaque patient.", "Activez le dispositif de sécurité dès que l'aiguille sort.", "Jetez l'aiguille directement dans le collecteur ; ne remettez jamais le capuchon à la main.", "Exposition : lavez ou rincez, puis prévenez tout de suite."],
          words: [["Agents pathogènes transmissibles par le sang", "des microbes présents dans le sang qui peuvent causer des maladies, comme l'hépatite B, l'hépatite C et le VIH."], ["OSHA", "l'Occupational Safety and Health Administration, l'agence fédérale américaine pour la sécurité au travail."], ["Collecteur pour objets piquants", "une boîte rigide et étiquetée pour les aiguilles usagées et les autres objets coupants ou piquants."], ["EPI", "équipement de protection individuelle, comme les gants."]],
          slides: [
            { title: "Pourquoi c'est important", bullets: ["Le sang peut transporter hépatite B, hépatite C, VIH", "La norme d'OSHA sur les pathogènes protège les travailleurs"] },
            { title: "L'employeur doit", bullets: ["Plan de maîtrise de l'exposition et formation", "Proposer le vaccin contre l'hépatite B", "Fournir des EPI et des aiguilles plus sûres"] },
            { title: "Vos habitudes", bullets: ["Mains propres ; gants neufs à chaque patient", "Dispositif de sécurité activé tout de suite", "Directement au collecteur ; jamais recapuchonner à la main"] },
            { title: "En cas d'exposition", bullets: ["Lavez à l'eau et au savon ; rincez les yeux", "Prévenez votre responsable tout de suite"] }
          ],
          sources: [
            { name: "OSHA : agents pathogènes transmissibles par le sang et prévention des piqûres d'aiguille", url: "https://www.osha.gov/bloodborne-pathogens" }
          ],
          tryIt: "Exercice seulement. Pour chaque situation, écrivez la bonne mesure : (1) vous finissez avec un patient et le suivant s'assoit, (2) l'aiguille est sortie de la veine, (3) le collecteur pour objets piquants est plein jusqu'au trait, (4) vous sentez une piqûre à travers votre gant avec une aiguille usagée. Réponses : mains propres et gants neufs ; activer le dispositif de sécurité et jeter l'aiguille dans le collecteur ; le fermer et en prendre un nouveau ; laver la zone et prévenir tout de suite.",
          youCanNow: "choisir la bonne mesure de prévention des infections et de sécurité avec les objets piquants, et dire quoi faire après une exposition.",
          quickCheck: [
            { objective: "O5", q: "Que faites-vous d'une aiguille usagée ?", options: ["Vous activez le dispositif de sécurité et la mettez directement dans le collecteur pour objets piquants", "Vous remettez le capuchon à la main", "Vous la jetez à la poubelle ordinaire", "Vous la posez sur le plateau pour plus tard"], answer: 0, why: "Activer le dispositif et jeter l'aiguille directement dans le collecteur évite les piqûres." },
            { objective: "O5", q: "Vous vous piquez avec une aiguille usagée. Que faites-vous d'abord ?", options: ["Vous finissez votre service, puis vous décidez", "Vous le cachez pour ne pas être accusé", "Vous lavez la zone à l'eau et au savon et prévenez tout de suite", "Vous mettez un pansement et vous oubliez"], answer: 2, why: "Lavez, puis prévenez tout de suite pour être examiné rapidement." }
          ]
        },
        {
          title: "Étiqueter et manipuler les échantillons, et votre liste",
          objectives: ["O6"],
          minutes: 5,
          goal: "Décider si un échantillon est assez bien étiqueté et manipulé pour que le laboratoire l'accepte.",
          text: [
            "Un prélèvement parfait ne sert à rien si le laboratoire ne peut pas utiliser l'échantillon. Les laboratoires refusent les échantillons sans étiquette ou mal étiquetés, dans le mauvais tube, pas assez remplis, coagulés alors qu'ils ne devraient pas l'être, hémolysés (globules rouges éclatés, souvent à cause d'un prélèvement trop brusque ou de tubes secoués), ou qui n'ont pas été gardés à la bonne température ou dans le bon délai.",
            "Étiquetez chaque tube devant le patient, juste après le prélèvement, jamais avant. Suivez les règles de votre laboratoire pour ce qui va sur l'étiquette : en général le nom complet du patient, sa date de naissance ou son numéro d'identification, la date et l'heure, et vos initiales. Puis comparez encore une fois l'étiquette avec la prescription.",
            "Envoyez les échantillons comme le demande votre laboratoire : certains vont dans la glace, d'autres doivent être protégés de la lumière, d'autres doivent arriver au laboratoire dans un délai fixé. Gardez les informations du patient confidentielles pendant le trajet.",
            "Faites maintenant votre tâche finale : votre propre liste de poche, plus votre plan de formation et d'examen."
          ],
          steps: ["Étiquetez chaque tube devant le patient, juste après le prélèvement.", "Mettez ce que demande votre laboratoire : nom, date de naissance ou identifiant, date, heure, vos initiales.", "Comparez les étiquettes avec la prescription.", "Manipulez et envoyez les tubes comme le demande le laboratoire (glace, lumière, délai).", "Signalez tout problème au lieu d'envoyer un mauvais échantillon."],
          words: [["Échantillon", "une quantité prélevée, comme un tube de sang, envoyée au laboratoire."], ["Hémolyse", "quand les globules rouges éclatent, ce qui peut gâcher certains résultats."], ["Échantillon refusé", "un échantillon que le laboratoire n'analyse pas, donc il faut refaire une prise de sang au patient."]],
          slides: [
            { title: "Pourquoi les labos refusent des échantillons", bullets: ["Sans étiquette ou mal étiquetés", "Mauvais tube ou pas assez rempli", "Coagulé, hémolysé, mauvaise température ou trop tard"] },
            { title: "Bien étiqueter", bullets: ["Devant le patient, juste après le prélèvement", "Ce que demande le labo : nom, date de naissance ou ID, date, heure, initiales", "Comparer avec la prescription"] },
            { title: "Bien manipuler", bullets: ["Règles de glace, de lumière ou de délai", "Garder les informations confidentielles", "Signaler les problèmes ; jamais de mauvais échantillon"] },
            { title: "Tâche finale", bullets: ["Votre liste de poche, du début au rangement", "L'ordre de prélèvement de votre laboratoire", "Votre plan de formation et d'examen avec des dates"] }
          ],
          tryIt: "Tâche finale. Faites une liste de poche pour un prélèvement de routine : identification du patient et vérification de la prescription, hygiène des mains et gants, ordre de prélèvement, étapes du prélèvement, quand s'arrêter, élimination des objets piquants, étiquetage devant le patient, manipulation et rangement. Au dos, écrivez votre plan : formation, examen de certification, règles de votre État et dates cibles. N'utilisez aucune information sur de vrais patients.",
          youCanNow: "étiqueter et manipuler les échantillons pour que le laboratoire puisse les utiliser, repérer les motifs de refus, et utiliser votre propre liste et votre plan.",
          quickCheck: [
            { objective: "O6", q: "Quand étiquetez-vous les tubes ?", options: ["Avant de voir le patient", "À la fin de votre service", "Devant le patient, juste après le prélèvement", "Quand le laboratoire appelle"], answer: 2, why: "Étiqueter devant le patient juste après le prélèvement évite les erreurs." },
            { objective: "O6", q: "Un tube arrive au laboratoire sans étiquette. Que se passe-t-il ?", options: ["Le laboratoire devine à qui il appartient", "Le laboratoire le refuse et il faut refaire une prise de sang au patient", "Le laboratoire l'analyse quand même", "Le laboratoire l'étiquette de mémoire"], answer: 1, why: "Les échantillons sans étiquette sont refusés car personne ne peut être sûr de savoir à qui est le sang." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Le prélèvement, la sécurité et les échantillons",
        questions: [
          { objective: "O4", q: "Quelle veine est souvent le premier choix pour un prélèvement de routine ?", options: ["Une veine du pied", "Une veine du cou", "Seulement une veine du dos de la main", "La veine médiane du coude, au pli du coude"], answer: 3, why: "La veine médiane du coude est souvent le premier choix car elle est en général facile à atteindre." },
          { objective: "O4", q: "Lequel de ces signes oblige à arrêter le prélèvement ?", options: ["Le patient ressent une douleur vive, fulgurante ou comme une décharge électrique", "Le tube se remplit", "Le patient est calme", "Le garrot est en place"], answer: 0, why: "Une douleur fulgurante ou comme une décharge peut signifier qu'un nerf est touché ; arrêtez tout de suite." },
          { objective: "O5", q: "Quelle pratique est sûre avec les objets piquants ?", options: ["Remettre le capuchon des aiguilles à la main", "Trop remplir le collecteur pour objets piquants", "Mettre les aiguilles directement dans le collecteur pour objets piquants", "Laisser les aiguilles sur le plateau"], answer: 2, why: "Les aiguilles vont directement dans le collecteur, sans jamais remettre le capuchon à la main." },
          { objective: "O5", q: "Selon la norme d'OSHA sur les agents pathogènes transmissibles par le sang, quel vaccin les employeurs doivent-ils proposer ?", options: ["Grippe", "Hépatite B", "Rougeole", "Tétanos"], answer: 1, why: "Les employeurs doivent proposer le vaccin contre l'hépatite B aux travailleurs exposés." },
          { objective: "O6", q: "Qu'est-ce que l'hémolyse ?", options: ["Des globules rouges qui éclatent", "Un type de tube", "Un groupe sanguin", "Un prélèvement propre"], answer: 0, why: "L'hémolyse, ce sont des globules rouges éclatés, ce qui peut gâcher certains résultats." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation au métier de technicien en phlébotomie",
    questions: [
      { objective: "O1", q: "Qu'est-ce que la phlébotomie ?", options: ["Faire des radiographies", "Faire des piqûres de médicaments", "Prélever du sang pour des analyses ou un don", "Préparer des ordonnances"], answer: 2, why: "La phlébotomie, c'est le prélèvement de sang." },
      { objective: "O1", q: "Ce cours en ligne suffit-il, à lui seul, pour avoir le droit de faire des prises de sang ?", options: ["Oui, après le quiz", "Non ; il faut une formation supervisée et des prélèvements supervisés", "Oui, si vous regardez des vidéos", "Oui, dans tous les États"], answer: 1, why: "Les vrais prélèvements s'apprennent et se prouvent uniquement dans une formation supervisée." },
      { objective: "O1", q: "Où vérifiez-vous les exigences actuelles d'une certification ?", options: ["Sur la page officielle de l'organisme qui certifie", "Dans une publication sur les réseaux sociaux", "Auprès d'un ami", "Dans un vieux manuel"], answer: 0, why: "Les exigences et les frais changent ; la page officielle est à jour." },
      { objective: "O2", q: "Quels sont les deux identifiants les plus courants ?", options: ["Numéro de chambre et couleur du lit", "Taille et poids", "Nom du médecin et nom de l'analyse", "Nom complet et date de naissance"], answer: 3, why: "Le nom complet et la date de naissance sont les deux identifiants habituels." },
      { objective: "O2", q: "Qu'est-ce qu'un bon de demande ?", options: ["Un tube de sang", "La prescription de laboratoire qui indique le patient et les analyses", "Un pansement", "Une facture"], answer: 1, why: "Le bon de demande, c'est la prescription de laboratoire." },
      { objective: "O2", q: "Pourquoi demander au patient de dire son nom au lieu de demander \"Vous êtes bien... ?\"", options: ["C'est plus rapide", "C'est plus poli", "Un patient inquiet peut dire oui à un mauvais nom", "La loi l'exige"], answer: 2, why: "Quand le patient le dit lui-même, on repère les erreurs." },
      { objective: "O3", q: "Dans l'ordre de prélèvement courant, quel tube vient en dernier ?", options: ["Bleu clair", "Rouge", "Vert", "Gris"], answer: 3, why: "Le gris (fluorure de sodium et oxalate de potassium) vient en dernier dans l'ordre courant." },
      { objective: "O3", q: "Qu'est-ce qui vient juste après les hémocultures ?", options: ["Bleu clair (citrate de sodium)", "Lavande", "Gris", "Vert"], answer: 0, why: "Le bleu clair suit les hémocultures dans l'ordre courant." },
      { objective: "O3", q: "Dans votre nouveau laboratoire, les couleurs des bouchons sont différentes. Que suivez-vous ?", options: ["La diapositive du cours", "Vos souvenirs d'un ancien emploi", "Le tableau de votre propre laboratoire", "Ce qui va le plus vite"], answer: 2, why: "Le tableau de chaque laboratoire fait la règle, car les fabricants et les laboratoires diffèrent." },
      { objective: "O3", q: "Comment mélangez-vous un tube avec additif ?", options: ["Vous le secouez fort", "Vous l'inversez doucement, comme le dit le fabricant", "Vous n'y touchez pas", "Vous le réchauffez"], answer: 1, why: "Inverser doucement mélange l'additif sans abîmer les cellules." },
      { objective: "O4", q: "Quelle étape vient en premier ?", options: ["Identifier le patient et vérifier la prescription", "Poser le garrot", "Introduire l'aiguille", "Étiqueter les tubes"], answer: 0, why: "Chaque prélèvement commence par le bon patient et la bonne prescription." },
      { objective: "O4", q: "Qu'est-ce qu'un hématome ?", options: ["Une couleur de tube", "Un type d'aiguille", "Un point de ponction propre", "Un gonflement dû à du sang sous la peau"], answer: 3, why: "Un hématome, c'est du sang qui s'accumule sous la peau." },
      { objective: "O4", q: "Quand desserrez-vous le garrot ?", options: ["Avant de nettoyer le point de ponction", "Après l'étiquetage", "Avant de retirer l'aiguille", "Jamais"], answer: 2, why: "Le garrot se desserre avant de retirer l'aiguille." },
      { objective: "O5", q: "Que sont les agents pathogènes transmissibles par le sang ?", options: ["Des microbes dans le sang qui peuvent causer des maladies", "Des machines de laboratoire", "Des additifs de tubes", "Des sortes de pansements"], answer: 0, why: "L'hépatite B, l'hépatite C et le VIH en sont des exemples." },
      { objective: "O5", q: "La norme de quelle agence fédérale protège les travailleurs contre les agents pathogènes transmissibles par le sang ?", options: ["FDA", "OSHA", "DMV", "IRS"], answer: 1, why: "C'est la norme d'OSHA sur les agents pathogènes transmissibles par le sang." },
      { objective: "O5", q: "Du sang vous éclabousse l'œil. Que faites-vous ?", options: ["Vous continuez à travailler", "Vous vous frottez l'œil", "Vous attendez le lendemain", "Vous le rincez à l'eau et prévenez tout de suite"], answer: 3, why: "Rincez tout de suite et prévenez pour être examiné." },
      { objective: "O5", q: "Quand changez-vous de gants ?", options: ["Une fois par jour", "Pour chaque patient", "Seulement quand ils sont déchirés", "Jamais"], answer: 1, why: "Des gants neufs pour chaque patient évitent de transmettre des microbes." },
      { objective: "O6", q: "Lequel de ces motifs peut faire refuser un échantillon par le laboratoire ?", options: ["Il a été étiqueté devant le patient", "Il a été envoyé à temps", "Il est hémolysé", "Il est dans le bon tube"], answer: 2, why: "L'hémolyse peut gâcher les résultats, donc le laboratoire peut le refuser." },
      { objective: "O6", q: "Que met-on sur l'étiquette du tube ?", options: ["Ce que demande votre laboratoire, en général nom, date de naissance ou identifiant, date, heure et vos initiales", "Seulement la couleur du tube", "Le numéro de téléphone du patient", "Rien"], answer: 0, why: "Chaque laboratoire fixe ses règles d'étiquetage ; ces informations sont les plus courantes." },
      { objective: "O6", q: "Vous remarquez qu'un tube n'est pas assez rempli. Que faites-vous ?", options: ["Vous l'envoyez quand même", "Vous ajoutez de l'eau", "Vous le mélangez avec un autre tube", "Vous le signalez et suivez la règle de votre laboratoire ; vous n'envoyez jamais un mauvais échantillon"], answer: 3, why: "Un tube pas assez rempli peut donner de faux résultats ; suivez la règle du laboratoire." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 6, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Plan de formation et d'examen", objective: "O1", notYet: "Aucune formation ni aucun examen nommé, ou exigences devinées.", meets: "Nomme une formation, un examen de certification et ses exigences selon la page officielle, les règles de l'État et des dates cibles.", exceeds: "Compare deux formations, y compris le nombre de prélèvements supervisés de chacune." },
      { name: "Identification du patient et prescription", objective: "O2", notYet: "La liste oublie l'identification du patient ou la vérification de la prescription.", meets: "Commence par deux identifiants dits par le patient et une vérification de la prescription, avec \"s'arrêter si cela ne correspond pas\".", exceeds: "Prévoit aussi le bracelet à l'hôpital et les consignes spéciales, comme être à jeun." },
      { name: "Ordre de prélèvement", objective: "O3", notYet: "Des tubes manquent ou sont dans le désordre.", meets: "Tous les tubes dans le bon ordre selon le tableau de la formation ou du laboratoire.", exceeds: "Ajoute pourquoi l'ordre compte et qu'il faut inverser les tubes doucement." },
      { name: "Étapes et signes d'arrêt", objective: "O4", notYet: "Des étapes manquent ou sont dans le désordre, ou aucun signe d'arrêt.", meets: "Toutes les étapes dans l'ordre, avec les signes qui obligent à arrêter le prélèvement.", exceeds: "Ajoute quoi faire si le patient s'évanouit." },
      { name: "Sécurité", objective: "O5", notYet: "Pas d'étape d'hygiène des mains, de gants ni d'objets piquants.", meets: "Hygiène des mains, gants neufs, dispositif de sécurité, collecteur pour objets piquants et quoi faire après une exposition.", exceeds: "Précise de ne jamais remettre le capuchon à la main et de ne pas trop remplir le collecteur." },
      { name: "Étiquetage et manipulation", objective: "O6", notYet: "Étiquette avant le prélèvement ou loin du patient.", meets: "Étiquette devant le patient après le prélèvement, compare avec la prescription et suit les règles de manipulation.", exceeds: "Donne trois motifs de refus des échantillons par le laboratoire et comment éviter chacun." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent dans une formation agréée en phlébotomie dans les 90 jours",
      "Apprenants qui réussissent un examen de certification en phlébotomie comme le CPT de NHA (selon leurs propres déclarations)",
      "Apprenants embauchés comme techniciens en phlébotomie ou assistants de laboratoire dans les 6 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour les pages de NHA et du service de santé de l'État",
      "Du papier, des stylos de couleur ou des bouts de papier pour s'entraîner à l'ordre de prélèvement, et des fiches cartonnées pour la liste",
      "Le tableau de l'ordre de prélèvement de votre formation, si vous en avez un",
      "Environ 70 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Ce cours ne comporte ni aiguille, ni tube, ni sang ; ne laissez pas les apprenants s'entraîner aux prélèvements les uns sur les autres. La pratique se fait dans une formation agréée et supervisée.",
      "Apprenants qui se sentent mal à la vue du sang : laissez-les passer les images et parlez avec eux pour savoir si le métier leur convient.",
      "Apportez le tableau de l'ordre de prélèvement d'une formation ou d'un laboratoire local, car les couleurs peuvent changer.",
      "Faites le jeu de rôle sur l'identification du patient en binômes, avec une erreur glissée exprès.",
      "Rappelez aux apprenants de vérifier les règles de leur État ; certains États, comme la Californie, délivrent leurs propres certificats.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
