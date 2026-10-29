"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations".

const SOS_ARTICLES = { name: "Secrétaire d'État de Californie : formulaires et frais des sociétés californiennes (en anglais)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "Secrétaire d'État de Californie : Statement of Information (SI-100 pour les associations, en anglais)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "Secrétaire d'État de Californie : bizfile Online (en anglais)", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS : obtenir un numéro d'identification d'employeur, EIN (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS : montant des frais des formulaires 1023 et 1023-EZ (en anglais)", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS : à propos du formulaire 1023 (en anglais)", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS : à propos du formulaire 1023-EZ (la grille d'éligibilité est dans les instructions, en anglais)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS : formulaire 990-N (e-Postcard) pour les petites organisations exonérées (en anglais)", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "IRS, publication 1828 : guide fiscal des églises et organisations religieuses (en anglais)", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "Franchise Tax Board de Californie : organisations caritatives et associations, formulaires 3500 / 3500A (en anglais)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "Procureur général de Californie : Registry of Charities, enregistrement initial CT-1 (en anglais)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "Procureur général de Californie : Registry of Charities, renouvellement annuel RRF-1 (en anglais)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup-fr",
  lang: "fr",
  translationOf: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Créer une association à but non lucratif en Californie, coûts compris",
  skills: "Choisir le bon type d'organisation à but non lucratif, Déposer les statuts auprès du Secrétaire d'État, Obtenir un EIN gratuit, Demander l'exonération fiscale fédérale et de l'État, S'enregistrer auprès du Procureur général, Établir un budget et un calendrier de création",
  outcome: "établir un plan de création complet et daté pour une société californienne à but non lucratif d'intérêt public : chaque démarche dans le bon ordre, l'administration qui la reçoit, le nom du formulaire, les frais officiels, et les déclarations annuelles qui la gardent en règle.",
  about: [
    "Ce cours s'adresse aux personnes qui créent une œuvre caritative, un ministère religieux, un groupe communautaire ou un programme en Californie : fondateurs, pasteurs, membres de conseil d'administration et bénévoles qui veulent bien faire du premier coup. Il porte sur les règles de la Californie et des États-Unis ; ailleurs, les démarches sont différentes, mais la méthode (ordre des étapes, frais officiels, calendrier) reste utile.",
    "Vous apprendrez les étapes dans l'ordre : choisir votre type d'organisation et votre conseil, déposer les statuts auprès du Secrétaire d'État, obtenir un EIN gratuit auprès de l'IRS (le fisc fédéral américain), demander le statut 501(c)(3), obtenir l'exonération fiscale californienne auprès du Franchise Tax Board (l'administration fiscale de l'État), et vous enregistrer au Registry of Charities du Procureur général. Puis vous apprendrez les déclarations annuelles et établirez un budget des coûts.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Chaque montant de ce cours a été vérifié sur la page officielle de l'administration le 27 octobre 2026, et le lien est donné pour que vous puissiez revérifier. Les frais changent, donc confirmez toujours sur la page officielle avant de payer. Ce cours est une formation, pas un conseil juridique ou fiscal : pour votre cas, parlez à un avocat spécialisé, à un comptable ou à un centre d'aide gratuit pour associations."
  ],
  finalTask: "Établissez un plan de création d'une page pour votre association (réelle ou d'entraînement) : un tableau avec chaque démarche dans l'ordre, l'administration, le nom du formulaire, les frais d'après la page officielle, la date à laquelle vous prévoyez de la faire, et les déclarations annuelles avec leurs dates limites. Ajoutez le coût total de création et le lien de chaque page officielle.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui créent une association caritative, un ministère, un groupe communautaire ou un programme en Californie : fondateurs, pasteurs, membres de conseils et bénévoles qui veulent bien faire du premier coup.",
    startingPoint: "Ils ont une mission et souvent déjà un groupe de personnes pour aider. La plupart n'ont jamais fait de démarche auprès du Secrétaire d'État, de l'IRS, du Franchise Tax Board ou du Procureur général, et ne connaissent ni l'ordre ni les coûts.",
    gap: "Des fondateurs font les démarches dans le mauvais ordre, paient des sites web pour des services gratuits, ou oublient des déclarations annuelles et perdent leur exonération fiscale. Les apprenants ont besoin d'un plan daté avec chaque démarche, administration, formulaire, frais officiels et date limite annuelle, pour que l'association démarre bien et reste en règle.",
    constraints: [
      "Les frais et les formulaires changent ; chaque montant est vérifié sur la page officielle avant le dépôt",
      "Ce n'est pas un conseil juridique ni fiscal : en cas de doute, les apprenants s'adressent à un avocat spécialisé, un centre d'aide aux associations ou un professionnel",
      "Vie privée : les numéros de sécurité sociale ou ITIN vont seulement sur le site officiel de l'IRS, jamais dans les outils d'IA ni par e-mail",
      "Les églises et les groupes religieux ont des règles particulières à vérifier",
      "Des mots simples pour des fondateurs qui débutent ; environ 60 minutes au total"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des étapes de création d'une association caritative en Californie", action: "lister dans l'ordre les principales démarches de création et l'administration qui gère chacune", standard: "avec chaque démarche dans le bon ordre" },
    { id: "O2", condition: "À partir du but de votre association", action: "choisir le bon formulaire de statuts et prévoir le Statement of Information", standard: "avec le bon lieu de dépôt et les bonnes dates limites" },
    { id: "O3", condition: "Une fois vos statuts déposés", action: "obtenir un EIN gratuit sur irs.gov et préparer la première réunion du conseil", standard: "en tapant les numéros privés seulement sur le site officiel de l'IRS et en listant chaque décision de la première réunion" },
    { id: "O4", condition: "Avec la grille d'éligibilité de l'IRS", action: "choisir entre le formulaire 1023 et le formulaire 1023-EZ et dire où il se dépose", standard: "avec les frais relevés sur la page officielle" },
    { id: "O5", condition: "Après l'approbation fédérale ou votre premier don", action: "prévoir l'exonération auprès du Franchise Tax Board et l'enregistrement au Registry of Charities du Procureur général", standard: "avec le bon formulaire et le délai de 30 jours du Registry" },
    { id: "O6", condition: "À partir des frais et des dates limites vérifiés", action: "établir un budget de création et un calendrier des déclarations annuelles", standard: "avec chaque montant et chaque date limite vérifiés sur la page officielle" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Créer la société",
      lessons: [
        {
          objectives: ["O1"],
          title: "La feuille de route : ce dont une association californienne a besoin",
          minutes: 5,
          goal: "Lister les principales démarches de création dans le bon ordre et l'administration qui gère chacune.",
          text: [
            "En Californie, une œuvre caritative devient en général une société à but non lucratif d'intérêt public (nonprofit public benefit corporation). Être une société à but non lucratif relève de l'État. Être exonéré d'impôt est une étape à part : une fois auprès de l'IRS (fédéral) et une fois auprès du Franchise Tax Board (État). Les organisations caritatives qui collectent des fonds s'enregistrent aussi auprès du Procureur général.",
            "L'ordre habituel est : 1) choisir votre but, votre nom et votre premier conseil ; 2) déposer les statuts auprès du Secrétaire d'État ; 3) obtenir un EIN auprès de l'IRS ; 4) adopter le règlement intérieur et tenir la première réunion du conseil ; 5) déposer le Statement of Information ; 6) demander le statut fédéral 501(c)(3) ; 7) demander l'exonération californienne au Franchise Tax Board ; 8) s'enregistrer au Registry of Charities du Procureur général.",
            "Respecter l'ordre compte. Par exemple, l'IRS demande aux sociétés de s'enregistrer auprès de l'État avant de demander un EIN, et le Procureur général demande vos statuts et votre règlement intérieur lors de l'enregistrement."
          ],
          steps: ["Écrivez votre mission en une ou deux phrases.", "Choisissez si possible trois personnes ou plus pour votre premier conseil.", "Écrivez les huit étapes dans l'ordre sur une page.", "À côté de chaque étape, notez l'administration : Secrétaire d'État, IRS, Franchise Tax Board ou Procureur général."],
          words: [["Société à but non lucratif d'intérêt public", "le type de société californienne que la plupart des œuvres caritatives utilisent ; elle sert le public, pas des propriétaires."], ["501(c)(3)", "l'article du code fiscal fédéral américain pour les œuvres caritatives ; les dons qu'elles reçoivent sont en général déductibles des impôts."], ["Exonéré d'impôt", "qui n'a pas à payer l'impôt sur le revenu, après approbation d'une administration."]],
          slides: [
            { title: "Quatre administrations", bullets: ["Secrétaire d'État : crée la société", "IRS : EIN et statut fédéral 501(c)(3)", "Franchise Tax Board : exonération fiscale californienne", "Procureur général : Registry of Charities"] },
            { title: "L'ordre, partie 1", bullets: ["1. Mission, nom, premier conseil", "2. Statuts (Secrétaire d'État)", "3. EIN (IRS, gratuit)", "4. Règlement intérieur et première réunion du conseil"] },
            { title: "L'ordre, partie 2", bullets: ["5. Statement of Information (Secrétaire d'État)", "6. Demande 501(c)(3) (IRS)", "7. Formulaire 3500 ou 3500A (Franchise Tax Board)", "8. Enregistrement auprès du Procureur général (CT-1)"] },
            { title: "Deux sortes de statut", bullets: ["Société à but non lucratif : relève de l'État", "Exonération d'impôt : une approbation fédérale et de l'État à part"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Écrivez la mission de votre association en une ou deux phrases. Puis écrivez les huit étapes de création dans l'ordre et l'administration de chacune. Gardez cette page : elle deviendra votre plan de création final.",
          youCanNow: "lister dans l'ordre les démarches de création d'une association californienne et nommer l'administration qui gère chacune.",
          quickCheck: [
            { objective: "O1", q: "Quelle administration gère l'exonération fiscale en Californie ?", options: ["Le Franchise Tax Board", "Le Secrétaire d'État", "Le Procureur général", "Le conseil municipal"], answer: 0, why: "L'exonération fiscale relève de l'IRS (au niveau fédéral) et du Franchise Tax Board (au niveau de l'État)." },
            { objective: "O1", q: "Un fondateur veut demander un EIN avant de déposer les statuts. Que lui dites-vous ?", options: ["N'importe quel ordre convient", "Déposez d'abord les statuts auprès du Secrétaire d'État, comme l'IRS le demande aux sociétés", "Passez les statuts", "Enregistrez-vous d'abord auprès du Procureur général"], answer: 1, why: "L'IRS demande aux sociétés de s'enregistrer auprès de l'État avant de demander un EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Déposer les statuts",
          minutes: 5,
          goal: "Choisir le bon formulaire de statuts et le déposer auprès du Secrétaire d'État.",
          text: [
            "Les statuts (articles of incorporation) créent votre société. Le Secrétaire d'État de Californie a trois versions pour les organisations à but non lucratif : le formulaire ARTS-PB (intérêt public), le formulaire ARTS-RE (religieux) et le formulaire ARTS-MU (intérêt mutuel). Les frais de dépôt affichés pour chacun étaient de 30 $ lors de notre vérification.",
            "La plupart des œuvres caritatives choisissent l'intérêt public. Une église ou un ministère peut utiliser le formulaire religieux. L'intérêt mutuel concerne les groupes qui servent leurs propres membres, comme certains clubs, et ne convient pas à la plupart des œuvres caritatives. Si vous comptez demander le statut 501(c)(3), l'IRS exige certaines formulations dans vos statuts sur votre but et sur ce que deviennent vos biens en cas de fermeture. Lisez les instructions du formulaire et faites relire par un avocat spécialisé ou un centre d'aide.",
            "Vous pouvez déposer en ligne sur bizfile Online (bizfileonline.sos.ca.gov), par courrier ou sur place. Vérifiez d'abord que le nom est libre. Dans les 90 jours, vous déposez aussi un Statement of Information (formulaire SI-100, 20 $), puis à nouveau tous les deux ans."
          ],
          steps: ["Cherchez votre nom sur bizfile Online.", "Choisissez le formulaire : ARTS-PB pour la plupart des œuvres caritatives, ARTS-RE pour les groupes religieux.", "Remplissez-le avec votre nom, votre but et votre mandataire pour la réception des actes.", "Déposez en ligne et payez les frais indiqués sur la page officielle.", "Notez le Statement of Information (SI-100) dans votre agenda : dans les 90 jours, puis tous les deux ans."],
          words: [["Statuts", "le court document qui crée légalement votre société."], ["Mandataire pour la réception des actes", "la personne ou l'entreprise qui accepte de recevoir les documents juridiques pour l'association."], ["Statement of Information", "un formulaire qui donne à l'État votre adresse et vos dirigeants ; les associations déposent le SI-100."]],
          slides: [
            { title: "Trois formulaires de statuts", bullets: ["ARTS-PB : intérêt public (la plupart des œuvres caritatives)", "ARTS-RE : religieux", "ARTS-MU : intérêt mutuel (sert ses membres)"] },
            { title: "Frais vérifiés (27 oct. 2026)", bullets: ["Statuts : 30 $", "Statement of Information SI-100 : 20 $", "Confirmez toujours sur sos.ca.gov avant de payer"] },
            { title: "Comment déposer", bullets: ["Vérifiez d'abord le nom", "Déposez en ligne sur bizfileonline.sos.ca.gov", "Ou par courrier ou sur place"] },
            { title: "N'oubliez pas", bullets: ["SI-100 dans les 90 jours suivant le dépôt", "Puis tous les deux ans", "Formulations 501(c)(3) : faites relire les statuts"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Ouvrez la page des formulaires du Secrétaire d'État. Trouvez le formulaire de statuts qui convient à votre groupe et notez son nom et ses frais actuels. Puis trouvez les frais du SI-100 et ajoutez les deux à votre plan, avec une date limite pour le SI-100.",
          youCanNow: "choisir le bon formulaire de statuts, trouver ses frais sur la page officielle et prévoir votre Statement of Information.",
          quickCheck: [
            { objective: "O2", q: "Quel formulaire de statuts ne convient pas à la plupart des associations caritatives ?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (intérêt mutuel)", "Aucun ne convient"], answer: 2, why: "L'intérêt mutuel concerne les groupes qui servent leurs propres membres et ne convient pas à la plupart des associations caritatives." },
            { objective: "O2", q: "Vous voulez appeler votre association « Hope Kitchen ». Que faites-vous avant le dépôt ?", options: ["Vous déposez tout de suite", "Vous demandez à l'IA si le nom est libre", "Vous payez un site web pour le réserver", "Vous cherchez d'abord le nom pour vérifier qu'il est libre"], answer: 3, why: "Cherchez d'abord le nom pour vérifier qu'il est libre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Obtenir l'EIN, le règlement intérieur et la première réunion du conseil",
          minutes: 5,
          goal: "Obtenir un EIN gratuit en toute sécurité et préparer la première réunion du conseil.",
          text: [
            "L'EIN (Employer Identification Number) est le numéro fiscal fédéral de l'association. Il vous faut pour un compte bancaire, pour la paie et pour vos demandes d'exonération. L'IRS dit qu'un EIN ne se paie jamais. Certains sites le font payer : évitez-les et faites la demande sur irs.gov.",
            "L'outil en ligne de l'IRS demande le numéro de sécurité sociale (SSN) ou l'ITIN de la personne responsable, et doit être rempli en une seule fois. Tapez ces numéros privés uniquement sur le site officiel de l'IRS, jamais dans un outil d'IA, un e-mail ou un site au hasard. Imprimez ou enregistrez la lettre de confirmation.",
            "Le règlement intérieur (bylaws), ce sont vos règles : combien d'administrateurs, comment ils sont élus, comment se tiennent les réunions et qui signe les chèques. À la première réunion, le conseil adopte le règlement intérieur, élit les dirigeants, approuve l'ouverture d'un compte bancaire et adopte une politique sur les conflits d'intérêts. Rédigez un procès-verbal et gardez-le."
          ],
          steps: ["Attendez que le Secrétaire d'État ait enregistré vos statuts.", "Allez sur irs.gov et demandez l'EIN avec l'outil gratuit en ligne.", "Rangez la lettre de confirmation de l'EIN dans votre dossier.", "Rédigez un règlement intérieur et une politique sur les conflits d'intérêts.", "Tenez la première réunion du conseil et rédigez le procès-verbal."],
          words: [["EIN", "Employer Identification Number : le numéro fiscal fédéral gratuit d'une organisation."], ["Règlement intérieur", "les règles écrites sur le fonctionnement de l'association et de son conseil."], ["Procès-verbal", "le compte rendu écrit de ce que le conseil a décidé en réunion."], ["Politique sur les conflits d'intérêts", "les règles sur ce que doit faire un administrateur quand une décision pourrait lui profiter personnellement."]],
          slides: [
            { title: "Votre EIN", bullets: ["Le numéro fiscal fédéral de l'association", "Gratuit sur irs.gov : ne payez jamais un site pour l'obtenir", "Nécessaire pour la banque et les formulaires d'exonération"] },
            { title: "Gardez les numéros privés", bullets: ["SSN ou ITIN uniquement sur le site officiel de l'IRS", "Jamais dans l'IA, un e-mail ou d'autres sites", "Enregistrez la lettre de confirmation"] },
            { title: "Première réunion du conseil", bullets: ["Adopter le règlement intérieur", "Élire les dirigeants", "Approuver un compte bancaire", "Adopter une politique sur les conflits d'intérêts"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Préparez l'ordre du jour de la première réunion avec cinq points : adopter le règlement intérieur, élire les dirigeants, approuver le compte bancaire, adopter la politique sur les conflits d'intérêts, et fixer la date de la prochaine réunion. Ajoutez \"Demander l'EIN sur irs.gov (gratuit)\" à votre plan, avec une date après le dépôt des statuts.",
          youCanNow: "obtenir un EIN gratuitement et en sécurité, et tenir une première réunion du conseil avec les bonnes décisions à l'ordre du jour.",
          quickCheck: [
            { objective: "O3", q: "À quoi sert un EIN ?", options: ["À un compte bancaire, à la paie et aux demandes d'exonération fiscale", "Seulement à acheter un bâtiment", "Seulement aux églises", "À rien ; c'est une décoration facultative"], answer: 0, why: "L'EIN est le numéro fiscal fédéral de l'association pour la banque, la paie et les demandes d'exonération." },
            { objective: "O3", q: "Vous remplissez l'outil en ligne de l'IRS pour l'EIN et devez vous arrêter à mi-chemin. Que devez-vous savoir ?", options: ["Vous pouvez enregistrer et finir la semaine prochaine", "Il doit être rempli en une seule fois", "L'IA peut le finir pour vous", "Vous pouvez envoyer le reste à l'IRS par e-mail"], answer: 1, why: "L'outil en ligne de l'IRS doit être rempli en une seule fois." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Créer la société",
        questions: [
          { objective: "O1", q: "Quelle administration crée une société californienne à but non lucratif ?", options: ["L'IRS", "Le Secrétaire d'État de Californie", "Le Procureur général", "Le greffe du comté"], answer: 1, why: "Les statuts sont déposés auprès du Secrétaire d'État." },
          { objective: "O2", q: "Une épicerie solidaire ouverte à toute la communauté déposera le plus probablement quel formulaire de statuts ?", options: ["ARTS-MU (intérêt mutuel)", "ARTS-RE (religieux)", "ARTS-PB (intérêt public)", "Un formulaire de SARL commerciale"], answer: 2, why: "Les œuvres caritatives qui servent le public déposent en général des statuts d'intérêt public." },
          { objective: "O3", q: "Un site propose d'obtenir votre EIN pour 79 $. Que devez-vous faire ?", options: ["Payer, c'est plus rapide", "Faire la demande gratuitement sur irs.gov", "Demander au Procureur général de payer", "Vous passer d'EIN"], answer: 1, why: "L'IRS dit qu'un EIN ne coûte jamais rien ; faites la demande sur irs.gov." },
          { objective: "O2", q: "Quand le premier Statement of Information (SI-100) est-il dû ?", options: ["Dans les 90 jours suivant le dépôt des statuts", "Seulement à la fermeture", "Tous les dix ans", "Jamais pour les associations"], answer: 0, why: "Le Secrétaire d'État dit dans les 90 jours, puis tous les deux ans." },
          { objective: "O3", q: "Laquelle est une tâche de la première réunion du conseil ?", options: ["Déposer le 990-N", "Adopter le règlement intérieur et élire les dirigeants", "Payer les frais de l'IRS", "Renouveler auprès du Procureur général"], answer: 1, why: "La première réunion adopte le règlement, élit les dirigeants et approuve les bases comme le compte bancaire." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Exonération fiscale, enregistrement et coûts",
      lessons: [
        {
          objectives: ["O4"],
          title: "Demander le statut fédéral 501(c)(3)",
          minutes: 6,
          goal: "Choisir entre le formulaire 1023 et le formulaire 1023-EZ et connaître les frais.",
          text: [
            "Pour être une œuvre caritative 501(c)(3), la plupart des organisations font une demande à l'IRS. Il y a deux formulaires. Le formulaire 1023 est la demande complète ; ses frais étaient de 600 $ lors de notre vérification. Le formulaire 1023-EZ est un formulaire plus court pour les petites organisations ; ses frais étaient de 275 $. Les deux se remplissent en ligne sur Pay.gov, où l'on paie les frais au moment du dépôt.",
            "Tout le monde ne peut pas utiliser le 1023-EZ. L'IRS a une grille d'éligibilité à la fin des instructions du formulaire 1023-EZ. Elle tient compte par exemple de l'argent que vous pensez collecter et de vos biens. Remplissez la grille honnêtement avant de choisir.",
            "Les églises ont des règles spéciales : l'IRS les traite différemment des autres œuvres caritatives, et beaucoup n'ont pas à faire de demande, même si certaines choisissent de la faire. Lisez la publication 1828 de l'IRS ou demandez à un professionnel. Quand l'IRS vous approuve, il envoie une lettre de détermination. Gardez-la pour toujours : les donateurs, les financeurs et l'État vous la demanderont."
          ],
          steps: ["Ouvrez les instructions du formulaire 1023-EZ sur irs.gov et remplissez la grille d'éligibilité.", "Si vous êtes éligible et que cela convient, prévoyez le 1023-EZ ; sinon, le formulaire 1023.", "Créez un compte Pay.gov et remplissez-y le formulaire.", "Payez les frais indiqués sur la page des frais de l'IRS.", "Gardez la lettre de détermination quand elle arrive."],
          words: [["Formulaire 1023", "la demande complète à l'IRS pour le statut 501(c)(3)."], ["Formulaire 1023-EZ", "la demande courte à l'IRS pour les petites organisations qui passent la grille d'éligibilité."], ["Frais de dossier", "les frais que l'IRS demande pour examiner la demande."], ["Lettre de détermination", "la lettre de l'IRS qui dit que votre organisation est exonérée d'impôt."]],
          slides: [
            { title: "Deux formulaires fédéraux", bullets: ["Formulaire 1023 : demande complète, 600 $", "Formulaire 1023-EZ : formulaire court, 275 $", "Frais vérifiés le 27 oct. 2026 : confirmez sur irs.gov"] },
            { title: "Lequel ?", bullets: ["Remplissez la grille d'éligibilité des instructions du 1023-EZ", "Éligible et adapté : 1023-EZ", "Pas éligible : formulaire 1023"] },
            { title: "Comment déposer", bullets: ["En ligne sur Pay.gov", "Payez les frais au moment du dépôt"] },
            { title: "Les églises et la lettre", bullets: ["Les églises ont des règles spéciales : voir la publication 1828 de l'IRS", "Gardez la lettre de détermination pour toujours"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Ouvrez les instructions du formulaire 1023-EZ sur irs.gov et lisez la grille d'éligibilité. Décidez quel formulaire votre association déposerait, puis ajoutez à votre plan ce formulaire, les frais indiqués sur la page de l'IRS et une date cible.",
          youCanNow: "choisir entre les formulaires 1023 et 1023-EZ, trouver les frais actuels et savoir où déposer.",
          quickCheck: [
            { objective: "O4", q: "Quand paie-t-on les frais de l'IRS pour le formulaire 1023 ou 1023-EZ ?", options: ["Un an après l'approbation", "Par chèque au Secrétaire d'État", "Sur Pay.gov au moment du dépôt", "Jamais"], answer: 2, why: "Les deux formulaires se déposent en ligne sur Pay.gov, et les frais s'y paient au moment du dépôt." },
            { objective: "O4", q: "L'IRS vous envoie votre lettre de détermination. Qu'en faites-vous ?", options: ["Vous la jetez au bout d'un an", "Vous donnez le seul exemplaire à un donateur", "Vous la collez dans l'IA", "Vous la gardez pour toujours, car les donateurs, les financeurs et l'État la demanderont"], answer: 3, why: "Gardez la lettre de détermination pour toujours ; beaucoup vous la demanderont." }
          ]
        },
        {
          objectives: ["O5"],
          title: "L'exonération californienne et le Registry of Charities",
          minutes: 5,
          goal: "Prévoir l'exonération auprès du Franchise Tax Board et l'enregistrement auprès du Procureur général.",
          text: [
            "L'approbation fédérale ne vous exonère pas à elle seule de l'impôt californien. Vous faites aussi une demande au Franchise Tax Board (FTB). Le formulaire 3500 est la demande californienne complète. Le formulaire 3500A est un formulaire plus court pour les organisations qui ont déjà leur lettre de détermination de l'IRS. Consultez ftb.ca.gov pour le formulaire actuel, les instructions et d'éventuels frais avant de déposer, car nous n'avons pas pu confirmer les frais sur la page du FTB pour ce cours.",
            "Les œuvres caritatives qui détiennent ou collectent de l'argent à des fins caritatives en Californie s'enregistrent aussi au Registry of Charities du Procureur général. Vous vous enregistrez en ligne avec le formulaire CT-1 dans les 30 jours suivant la première réception de biens caritatifs, comme votre premier don. Les frais étaient de 50 $ lors de notre vérification. Vous téléversez vos statuts, votre règlement intérieur, la lettre de détermination de l'IRS (ou votre EIN si vous ne l'avez pas encore) et votre formulaire 1023 ou 1023-EZ si vous en avez déposé un.",
            "Certains groupes peuvent être dispensés de l'enregistrement au Registry. Si vous pensez que c'est votre cas (par exemple une organisation religieuse), lisez les pages du Registry ou posez-lui la question avant de vous en passer."
          ],
          steps: ["Une fois la lettre de l'IRS reçue, prévoyez le formulaire 3500A sur ftb.ca.gov (ou le 3500 si vous faites la demande sans elle).", "Notez la date à laquelle vous recevez votre premier don ou autre bien caritatif.", "Dans les 30 jours suivant cette date, enregistrez-vous en ligne avec le formulaire CT-1.", "Téléversez les statuts, le règlement, la lettre de l'IRS ou l'EIN, et votre 1023 ou 1023-EZ.", "Payez les frais du Registry indiqués sur oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "l'administration fiscale de l'État de Californie."], ["Formulaire 3500A", "le formulaire californien court d'exonération pour les groupes qui ont déjà une lettre fédérale 501(c)(3)."], ["Registry of Charities", "le service du Procureur général qui enregistre et surveille les œuvres caritatives en Californie."], ["CT-1", "le formulaire d'enregistrement initial des œuvres caritatives auprès du Procureur général."]],
          slides: [
            { title: "Exonération fiscale californienne (FTB)", bullets: ["Distincte de l'approbation de l'IRS", "Formulaire 3500 : demande complète", "Formulaire 3500A : si vous avez déjà la lettre de l'IRS", "Vérifiez les frais actuels sur ftb.ca.gov"] },
            { title: "Registry of Charities (Procureur général)", bullets: ["Formulaire CT-1, déposé en ligne", "Dans les 30 jours suivant la réception des premiers biens caritatifs", "Frais : 50 $ lors de la vérification, 27 oct. 2026"] },
            { title: "À préparer pour le CT-1", bullets: ["Statuts et règlement intérieur", "Lettre de détermination de l'IRS, ou EIN à défaut", "Votre formulaire 1023 ou 1023-EZ, s'il a été déposé"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Ajoutez deux lignes à votre plan : l'exonération du FTB (nom du formulaire, \"vérifier les frais sur ftb.ca.gov\", date cible après la lettre de l'IRS) et le CT-1 du Procureur général (50 $, dans les 30 jours suivant votre premier don). Faites la liste des quatre documents que vous téléverserez.",
          youCanNow: "prévoir votre exonération fiscale californienne et votre enregistrement au Registry of Charities avec les bons formulaires, délais et documents.",
          quickCheck: [
            { objective: "O5", q: "Quel formulaire est la demande complète d'exonération en Californie ?", options: ["Le formulaire 3500", "Le formulaire CT-1", "Le formulaire SI-100", "Le formulaire RRF-1"], answer: 0, why: "Le formulaire 3500 est la demande californienne complète ; le 3500A est la version courte." },
            { objective: "O5", q: "Votre ministère pense qu'il est peut-être dispensé de l'enregistrement au Registry. Que faites-vous ?", options: ["Vous vous en passez sans vérifier", "Vous lisez les pages du Registry ou lui posez la question avant de vous en passer", "Vous demandez à un ami", "Vous vous enregistrez auprès de l'IRS à la place"], answer: 1, why: "Vérifiez sur les pages du Registry ou posez-lui la question avant de vous passer de l'enregistrement." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rester en règle et votre budget de création",
          minutes: 6,
          goal: "Établir un budget de création et un calendrier des déclarations annuelles.",
          text: [
            "La création n'est pas la fin. Chaque année, vous déclarez à l'IRS : les petits groupes dont les recettes brutes sont normalement de 50 000 $ ou moins peuvent en général déposer l'e-Postcard (formulaire 990-N) ; les plus grands déposent le formulaire 990-EZ ou 990. Si vous manquez trois années de suite, l'IRS retire automatiquement votre exonération d'impôt.",
            "Chaque année, vous renouvelez aussi auprès du Procureur général avec le formulaire RRF-1. Les frais dépendent du revenu total : lors de notre vérification, 25 $ en dessous de 50 000 $, 50 $ de 50 000 $ à 100 000 $, et 75 $ de 100 001 $ à 250 000 $, et davantage pour les plus grandes organisations. Il est dû 4 mois et 15 jours après la fin de votre exercice (le 15 mai pour un exercice qui se termine le 31 décembre). Il y a aussi le Statement of Information tous les deux ans, et les déclarations annuelles californiennes au FTB : consultez ftb.ca.gov pour savoir quel formulaire vous concerne.",
            "Frais administratifs de création, tels que vérifiés : statuts 30 $, Statement of Information 20 $, EIN gratuit, IRS 275 $ (1023-EZ) ou 600 $ (1023), Registry 50 $, plus d'éventuels frais du FTB. Cela fait environ 375 $ avec le 1023-EZ ou 700 $ avec le formulaire 1023, hors frais du FTB, service de mandataire ou avocat. Utilisez l'IA pour vous aider à faire un tableau de budget ou une liste de rappels, mais vérifiez chaque montant sur la page officielle."
          ],
          steps: ["Listez chaque frais de création d'après les pages officielles.", "Additionnez-les selon votre choix de formulaire (1023-EZ ou 1023).", "Ajoutez les déclarations annuelles : série 990 de l'IRS, RRF-1 du Procureur général, déclaration annuelle au FTB.", "Ajoutez le Statement of Information tous les deux ans.", "Mettez chaque date limite dans un agenda partagé avec deux rappels."],
          words: [["Formulaire 990-N", "l'e-Postcard de l'IRS : une courte déclaration annuelle en ligne pour les petits groupes exonérés."], ["RRF-1", "le formulaire de renouvellement annuel des œuvres caritatives auprès du Procureur général."], ["Exercice", "la période de 12 mois que votre association utilise pour ses comptes, souvent de janvier à décembre."], ["En règle", "à jour de toutes les déclarations et de tous les frais obligatoires."]],
          slides: [
            { title: "Chaque année", bullets: ["IRS : 990-N, 990-EZ ou 990", "Procureur général : RRF-1, frais selon le revenu", "FTB : vérifiez votre formulaire annuel sur ftb.ca.gov"] },
            { title: "Attention", bullets: ["Trois années sans déclaration à l'IRS : perte de l'exonération", "RRF-1 dû 4 mois et 15 jours après la fin de l'exercice", "SI-100 tous les deux ans"] },
            { title: "Frais de création (vérifiés le 27 oct. 2026)", bullets: ["Statuts 30 $ + SI-100 20 $ + EIN gratuit", "IRS : 275 $ (1023-EZ) ou 600 $ (1023)", "Registry CT-1 50 $, plus d'éventuels frais du FTB"] },
            { title: "Votre total", bullets: ["Environ 375 $ avec le 1023-EZ, 700 $ avec le 1023", "Hors frais du FTB, mandataire ou avocat", "Confirmez chaque montant sur la page officielle"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Tâche finale : terminez votre plan de création d'une page. Faites un tableau avec chaque démarche dans l'ordre, l'administration, le formulaire, les frais d'après la page officielle et votre date cible. Ajoutez les déclarations annuelles et leurs dates limites, le coût total de création et le lien officiel de chaque ligne.",
          youCanNow: "établir un plan complet de création d'une association californienne avec les coûts et un calendrier annuel qui la garde en règle.",
          quickCheck: [
            { objective: "O6", q: "Quelle déclaration annuelle va au Procureur général ?", options: ["Le formulaire 990-N", "Le formulaire 1023", "Le formulaire RRF-1", "Le formulaire ARTS-PB"], answer: 2, why: "Chaque année, vous renouvelez auprès du Procureur général avec le formulaire RRF-1." },
            { objective: "O6", q: "L'IA prépare le tableau de votre budget de création. Que faites-vous des frais qu'il contient ?", options: ["Vous leur faites confiance ; l'IA est à jour", "Vous les arrondissez au-dessus", "Vous les laissez vides", "Vous vérifiez chaque montant sur la page officielle"], answer: 3, why: "Utilisez l'IA pour préparer le tableau, mais vérifiez chaque montant sur la page officielle." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Exonération fiscale, enregistrement et coûts",
        questions: [
          { objective: "O4", q: "Quels étaient les frais de l'IRS pour les formulaires 1023 et 1023-EZ lors de la vérification ?", options: ["100 $ et 50 $", "600 $ et 275 $", "Gratuits tous les deux", "1 000 $ et 500 $"], answer: 1, why: "La page des frais de l'IRS indiquait 600 $ pour le 1023 et 275 $ pour le 1023-EZ." },
          { objective: "O5", q: "Votre association a déjà sa lettre de détermination de l'IRS. Quel formulaire californien est fait pour vous ?", options: ["Formulaire 3500A", "Formulaire CT-1", "Formulaire SI-100", "Formulaire 990-N"], answer: 0, why: "Le 3500A est le formulaire court du FTB pour les groupes qui ont déjà la lettre fédérale." },
          { objective: "O5", q: "Vous avez reçu votre premier don le 1er mars. Quand devez-vous vous enregistrer au Registry of Charities ?", options: ["Dans les 30 jours", "Dans les 2 ans", "Seulement après avoir collecté 50 000 $", "Jamais"], answer: 0, why: "Le Procureur général dit de s'enregistrer dans les 30 jours suivant la première réception de biens caritatifs." },
          { objective: "O6", q: "Que se passe-t-il si vous manquez la déclaration annuelle à l'IRS trois années de suite ?", options: ["Rien", "Une amende de 10 $", "La perte automatique de l'exonération d'impôt", "Votre EIN change"], answer: 2, why: "L'IRS retire automatiquement l'exonération après trois années consécutives sans déclaration." },
          { objective: "O6", q: "Une œuvre caritative avec 40 000 $ de revenu total renouvelle auprès du Procureur général. Quels étaient les frais du RRF-1 lors de la vérification ?", options: ["200 $", "100 $", "75 $", "25 $"], answer: 3, why: "Le barème du RRF-1 indiquait 25 $ pour un revenu total inférieur à 50 000 $." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer une association à but non lucratif en Californie, coûts compris",
    questions: [
      { objective: "O1", q: "Devenir une société à but non lucratif et devenir exonéré d'impôt sont :", options: ["La même étape", "Seulement des questions fédérales", "Nécessaires seulement pour les églises", "Des étapes distinctes auprès d'administrations différentes"], answer: 3, why: "L'État crée la société ; l'IRS et le FTB accordent l'exonération séparément." },
      { objective: "O1", q: "Qu'est-ce qui vient en premier ?", options: ["L'enregistrement auprès du Procureur général", "Le dépôt des statuts auprès du Secrétaire d'État", "Le dépôt du formulaire 3500A", "Le dépôt du RRF-1"], answer: 1, why: "La société doit exister avant les autres démarches." },
      { objective: "O1", q: "Quelle administration gère le Registry of Charities ?", options: ["L'IRS", "Le Franchise Tax Board", "Le Procureur général de Californie", "Le Secrétaire d'État"], answer: 2, why: "Le Registry of Charities fait partie du bureau du Procureur général." },
      { objective: "O2", q: "La plupart des œuvres caritatives californiennes déposent quel type de statuts ?", options: ["Intérêt mutuel", "Société par actions classique", "SARL", "Intérêt public"], answer: 3, why: "Les sociétés d'intérêt public servent le public, ce qui convient à la plupart des œuvres caritatives." },
      { objective: "O2", q: "Quels étaient les frais du Secrétaire d'État pour les statuts d'une association lors de la vérification ?", options: ["30 $", "300 $", "600 $", "Gratuit"], answer: 0, why: "La page des formulaires indiquait 30 $ pour ARTS-PB, ARTS-RE et ARTS-MU." },
      { objective: "O2", q: "Où peut-on déposer les statuts en ligne ?", options: ["Pay.gov", "irs.gov", "N'importe quel outil d'IA", "bizfileonline.sos.ca.gov"], answer: 3, why: "bizfile Online est le site de dépôt en ligne du Secrétaire d'État." },
      { objective: "O2", q: "À quelle fréquence dépose-t-on le Statement of Information (SI-100) après le premier ?", options: ["Chaque mois", "Chaque année", "Tous les deux ans", "Plus jamais"], answer: 2, why: "Le Secrétaire d'État dit tous les deux ans." },
      { objective: "O3", q: "Combien l'IRS fait-il payer un EIN ?", options: ["50 $", "25 $", "Cela dépend de votre État", "Rien"], answer: 3, why: "L'IRS dit qu'un EIN ne se paie jamais." },
      { objective: "O3", q: "Où taper le numéro de sécurité sociale de la personne responsable pour l'EIN ?", options: ["Uniquement sur le site officiel de l'IRS", "Dans un assistant d'IA pour le vérifier", "Dans un e-mail groupé au conseil", "Sur n'importe quel site qui propose de l'aide"], answer: 0, why: "Les numéros privés ne vont que sur le site officiel de l'administration." },
      { objective: "O3", q: "Quelle décision revient à la première réunion du conseil ?", options: ["Déposer le 990-N", "Adopter la politique sur les conflits d'intérêts", "Payer le RRF-1", "Obtenir la lettre de l'IRS"], answer: 1, why: "La première réunion adopte le règlement et les politiques et élit les dirigeants." },
      { objective: "O4", q: "Comment savoir si vous pouvez utiliser le formulaire 1023-EZ ?", options: ["En demandant à n'importe quel site", "En prenant le moins cher", "Le Procureur général décide", "En remplissant la grille d'éligibilité de l'IRS dans les instructions du 1023-EZ"], answer: 3, why: "La grille d'éligibilité de l'IRS décide qui peut utiliser le formulaire court." },
      { objective: "O4", q: "Où dépose-t-on les formulaires 1023 et 1023-EZ ?", options: ["Par fax à Sacramento", "Au bureau du comté", "En ligne sur Pay.gov", "Sur bizfile Online"], answer: 2, why: "L'IRS dit que les deux se remplissent et se paient sur Pay.gov." },
      { objective: "O4", q: "Que montre une lettre de détermination de l'IRS ?", options: ["Que le nom de votre société a été accepté", "Que votre organisation est exonérée d'impôt selon la loi fédérale", "Que vous avez payé les frais du Registry", "Votre numéro EIN"], answer: 1, why: "La lettre de détermination confirme l'exonération fiscale fédérale." },
      { objective: "O4", q: "Une église veut savoir si elle doit déposer le formulaire 1023. Où chercher d'abord ?", options: ["Dans la publication 1828 de l'IRS ou auprès d'un professionnel", "Dans une publication sur les réseaux sociaux", "Au service des permis de conduire", "Dans le formulaire SI-100"], answer: 0, why: "Les églises ont des règles spéciales de l'IRS expliquées dans la publication 1828." },
      { objective: "O5", q: "Après l'approbation fédérale, une association californienne est exonérée de l'impôt de l'État :", options: ["Automatiquement", "Seulement après l'approbation du FTB (formulaire 3500 ou 3500A)", "Seulement si c'est une église", "Jamais"], answer: 1, why: "L'exonération californienne est une demande distincte au Franchise Tax Board." },
      { objective: "O5", q: "Quels documents téléversez-vous pour le CT-1 du Procureur général ?", options: ["Statuts, règlement, lettre de l'IRS ou EIN, et votre 1023 s'il a été déposé", "Seulement une pièce d'identité avec photo", "Les noms et adresses des donateurs", "Le mot de passe de votre banque"], answer: 0, why: "Le Registry demande les documents fondateurs, le règlement, la lettre de l'IRS ou l'EIN et la demande d'exonération." },
      { objective: "O5", q: "Quels étaient les frais d'enregistrement initial au Registry lors de la vérification ?", options: ["25 $", "50 $", "275 $", "600 $"], answer: 1, why: "La page de l'enregistrement initial indiquait 50 $." },
      { objective: "O6", q: "Les recettes brutes d'une petite œuvre caritative sont normalement de 50 000 $ ou moins. Quelle déclaration annuelle à l'IRS peut-elle en général utiliser ?", options: ["Le formulaire 1023", "L'e-Postcard, formulaire 990-N", "Le formulaire CT-1", "Le formulaire ARTS-PB"], answer: 1, why: "L'IRS permet à la plupart des petits groupes sous ce montant de déposer le 990-N." },
      { objective: "O6", q: "Votre exercice se termine le 31 décembre. Quand le RRF-1 est-il normalement dû ?", options: ["Le 1er janvier", "Le 1er mars", "Le 15 mai", "Le 31 décembre"], answer: 2, why: "Il est dû 4 mois et 15 jours après la fin de l'exercice, soit le 15 mai." },
      { objective: "O6", q: "Avec les frais vérifiés, combien coûtent environ les frais administratifs de création avec le 1023-EZ, hors frais du FTB ?", options: ["Environ 375 $", "Environ 50 $", "Environ 1 500 $", "Rien"], answer: 0, why: "30 $ de statuts + 20 $ de SI-100 + 275 $ de 1023-EZ + 50 $ de CT-1 = 375 $, l'EIN étant gratuit." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Démarches dans l'ordre",
        objective: "O1",
        notYet: "Une démarche manque ou n'est pas à sa place.",
        meets: "Chaque démarche de création est listée dans le bon ordre avec son administration.",
        exceeds: "Explique pourquoi l'ordre compte pour au moins deux étapes."
      },
      {
        name: "Bons formulaires",
        objective: "O2",
        notYet: "Un mauvais formulaire est cité, comme des statuts d'intérêt mutuel pour une association caritative.",
        meets: "Chaque démarche cite le bon formulaire : statuts, SI-100, 1023 ou 1023-EZ, 3500 ou 3500A, et CT-1.",
        exceeds: "Explique le choix entre 1023 et 1023-EZ à l'aide de la grille d'éligibilité."
      },
      {
        name: "Frais officiels et liens",
        objective: "O6",
        notYet: "Un montant est deviné ou n'a pas de lien.",
        meets: "Chaque montant vient de la page officielle, avec un lien, et le total de création est calculé.",
        exceeds: "Indique la date à laquelle chaque montant a été vérifié."
      },
      {
        name: "Dates prévues",
        objective: "O5",
        notYet: "Pas de dates de dépôt prévues, ou les délais de 30 jours du Registry et de 90 jours du SI-100 ne sont pas respectés.",
        meets: "Une date prévue pour chaque démarche, qui respecte chaque délai.",
        exceeds: "Nomme le membre du conseil responsable de chaque démarche."
      },
      {
        name: "Calendrier annuel",
        objective: "O6",
        notYet: "Des déclarations annuelles manquent.",
        meets: "La déclaration annuelle à l'IRS, le RRF-1, le Statement of Information tous les deux ans et les déclarations au FTB, avec leurs dates limites.",
        exceeds: "Les dates limites sont mises en rappels dans le calendrier du conseil."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Fondateurs qui déposent leurs statuts dans les 90 jours (enquête de suivi)",
      "Organisations qui reçoivent une lettre de détermination de l'IRS et s'enregistrent au Registry of Charities",
      "Organisations toujours en règle un an plus tard, avec leurs déclarations annuelles à temps"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet",
      "Les liens vers les pages officielles : Secrétaire d'État, IRS, Pay.gov, Franchise Tax Board et Registry of Charities du Procureur général",
      "Un tableur ou du papier pour le tableau du plan de création",
      "Environ 60 minutes au total, plus le temps de vérifier les frais sur les pages officielles"
    ],
    facilitatorNotes: [
      "Faites vérifier chaque montant sur la page officielle pendant la séance, car les frais changent.",
      "Invitez un avocat spécialisé ou un bénévole d'un centre d'aide aux associations pour répondre aux questions sur la rédaction des statuts et les règles pour les églises.",
      "Rappelez aux apprenants de ne jamais taper de numéro de sécurité sociale ni d'ITIN dans les outils d'IA ou un e-mail.",
      "Les apprenants qui n'ont pas de vraie association peuvent faire un plan d'entraînement pour une association d'exemple.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
