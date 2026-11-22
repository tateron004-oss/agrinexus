"use strict";

// Koach Learn course (French translation of africa-life/afr-mother-child-health.js). See scripts/koachlearn-courses/README.md, "Translations".
// No medicine doses, treatment plans or diagnosis, exactly as in the English: every lesson points to the clinic, the midwife and the community health worker.

const WHO_ANC = { name: "OMS : Nouvelles recommandations sur les soins prénatals pour une expérience positive de la grossesse (huit contacts, le premier dans les 12 premières semaines)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "OMS, aide-mémoire : Mortalité maternelle (causes principales ; soins qualifiés avant, pendant et après l'accouchement)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "OMS, aide-mémoire : Mortalité néonatale (soins du nouveau-né et signes de danger)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "OMS, aide-mémoire : Alimentation du nourrisson et du jeune enfant", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "OMS, aide-mémoire : Maladies diarrhéiques (prévention, soins à la maison, signes de déshydratation)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "OMS, aide-mémoire : Couverture vaccinale (ce que préviennent les vaccins de l'enfant)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health-fr",
  lang: "fr",
  translationOf: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Santé de la mère et de l'enfant : grossesse, accouchement et premières années",
  skills: "Planifier les visites au centre de santé pendant la grossesse, Repérer les signes de danger pendant la grossesse et après l'accouchement, Faire un plan d'accouchement, Prendre soin d'un nouveau-né les premiers jours, Repérer les signes de danger chez un bébé ou un jeune enfant, Tenir à jour le carnet de santé de l'enfant",
  outcome: "faire un plan de santé familial simple pour une grossesse et un jeune enfant : quand aller au centre de santé, où le bébé naîtra et comment vous vous y rendrez, comment soigner le nouveau-né, quels signes de danger veulent dire \"allez au centre de santé maintenant\", et comment respecter les dates des vaccins et des contrôles de croissance.",
  about: [
    "Ce cours s'adresse aux mères et aux futures mères, aux pères, aux grands-mères, aux grandes sœurs et à toute personne qui aide à s'occuper d'une femme enceinte ou d'un jeune enfant, en ville comme au village, partout en Afrique. Vous n'avez besoin d'aucune formation en santé.",
    "Le chapitre 1 porte sur la grossesse et l'accouchement : les visites au centre de santé, les signes de danger qui veulent dire \"allez-y maintenant\" et le plan d'accouchement. Le chapitre 2 porte sur les premiers jours et les premières années du bébé : les soins du nouveau-né, les signes de danger chez les bébés et les jeunes enfants, et l'alimentation, les vaccins et les contrôles de croissance.",
    "Ce cours enseigne la prévention, les bonnes habitudes de santé et le moment où il faut demander de l'aide. Il ne vous dit pas quel médicament prendre ni en quelle quantité, et il ne remplace pas l'infirmière, la sage-femme, le médecin ou l'agent de santé communautaire. Suivez toujours votre centre de santé et votre ministère de la Santé. Chaque leçon dure environ cinq minutes et se termine par une tâche. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan de santé familial d'une page pour une grossesse ou un jeune enfant de votre famille (ou pour un exemple, comme Amina, enceinte de 5 mois à Kano, ou le bébé Kofi, 3 mois, à Kumasi) : les visites au centre de santé encore à venir, le plan d'accouchement (lieu, personnel de santé qualifié, transport, argent mis de côté, qui l'accompagne et qui garde la maison), les soins du nouveau-né le premier jour, les signes de danger pour la mère et l'enfant avec le centre de santé le plus proche et un numéro d'urgence, et les prochaines dates de vaccins et de contrôles de croissance d'après le carnet de santé.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des mères et futures mères, des pères, des grands-mères et d'autres personnes qui s'occupent des enfants, au Kenya, au Nigeria, au Ghana, au Sénégal, en Côte d'Ivoire, en Égypte et dans toute l'Afrique. Beaucoup vivent loin d'un hôpital, utilisent un téléphone Android simple avec des données mobiles chères, et reçoivent des conseils de santé de la famille, des voisins et de l'agent de santé communautaire.",
    startingPoint: "La plupart savent que les femmes enceintes doivent aller au centre de santé, mais beaucoup commencent tard, y vont moins souvent que conseillé ou restent à la maison quand un signe de danger apparaît. Peu ont un plan d'accouchement écrit, de l'argent mis de côté pour le transport ou une liste des signes de danger chez le nouveau-né et l'enfant. Beaucoup gardent le carnet de santé de l'enfant, mais n'y lisent pas la date du prochain vaccin.",
    gap: "L'Afrique subsaharienne compte la plupart des décès du monde pendant la grossesse et l'accouchement, et le premier mois est la période la plus dangereuse pour un bébé. Beaucoup de ces décès viennent de retards : pour décider de partir, pour arriver et pour recevoir des soins. Les familles qui s'organisent à l'avance, connaissent les signes de danger et respectent les visites agissent plus vite et protègent mieux les mères et les enfants.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de santé est expliqué",
      "Appareils : un téléphone simple ; le cours peut aussi être lu à voix haute dans un groupe ou une réunion de femmes",
      "Les services de santé, la gratuité des soins de maternité, les calendriers de vaccination et les carnets de santé varient selon le pays et changent : chacun vérifie auprès de son centre de santé ou de son ministère de la Santé",
      "Aucune dose de médicament, aucun traitement, aucun diagnostic : le cours enseigne la prévention et le moment où il faut demander de l'aide",
      "Vie privée : personne n'a à parler de sa propre grossesse ou de sa santé devant le groupe"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une grossesse dans votre famille et du mois prévu de l'accouchement", action: "écrire un plan des visites au centre de santé pour la grossesse, qui commence dans les 12 premières semaines", standard: "avec au moins huit contacts comme le conseille l'OMS, ou le nombre que votre centre de santé vous indique" },
    { id: "O2", condition: "À partir d'une liste de signes pendant la grossesse ou après l'accouchement", action: "repérer les signes de danger qui veulent dire que la femme doit aller au centre de santé maintenant", standard: "avec au moins 4 bonnes réponses sur 5, en choisissant \"y aller maintenant\" plutôt qu'\"attendre de voir\"" },
    { id: "O3", condition: "Pour un accouchement à venir", action: "écrire un plan d'accouchement qui indique la formation sanitaire, le transport, l'argent mis de côté et les personnes qui aideront", standard: "avec toutes les parties remplies et accepté par la famille avant le dernier mois" },
    { id: "O4", condition: "Pour le premier jour d'un bébé", action: "énumérer les soins du nouveau-né : le garder au chaud, l'allaiter dans la première heure et garder le cordon propre et sec", standard: "dans le bon ordre et sans pratique dangereuse" },
    { id: "O5", condition: "À partir de la description d'un bébé ou d'un jeune enfant malade", action: "repérer les signes de danger qui veulent dire que l'enfant doit aller au centre de santé maintenant", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O6", condition: "Avec le carnet ou la fiche de santé d'un enfant", action: "trouver les prochaines dates de vaccins et de contrôles de croissance et écrire l'étape d'alimentation adaptée à l'âge de l'enfant", standard: "sans laisser aucune visite manquée sans nouvelle date" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Une grossesse en bonne santé et un accouchement sans danger",
      lessons: [
        {
          title: "Les visites au centre de santé pendant la grossesse",
          objectives: ["O1"],
          minutes: 5,
          goal: "Écrire un plan des visites au centre de santé pour une grossesse, en commençant dans les 12 premières semaines.",
          text: [
            "Les soins pendant la grossesse s'appellent les soins prénatals (ou consultations prénatales). À chaque visite, l'infirmière ou la sage-femme contrôle la tension, le poids et le sang de la mère, écoute le bébé et donne les soins que propose le centre de santé de votre pays. Beaucoup de problèmes peuvent être trouvés tôt, avant de devenir dangereux.",
            "L'OMS (Organisation mondiale de la Santé) conseille au moins huit contacts avec un agent de santé pendant la grossesse, le premier dans les 12 premières semaines (les trois premiers mois). Donc, dès qu'une femme pense être enceinte, elle va au centre de santé. Votre centre de santé peut vous donner son propre calendrier ; suivez-le.",
            "À la première visite, le centre de santé donne en général un carnet ou une fiche de santé de la mère et de l'enfant. Son nom change selon le pays (par exemple, le Mother and Child Health Handbook au Kenya ou le Maternal and Child Health Record Book au Ghana). Gardez-le dans un sachet en plastique, apportez-le à chaque visite et notez la date suivante dans le calendrier de votre téléphone.",
            "Les pères et la famille aident aussi : avec l'argent du transport, en l'accompagnant à une visite et en la laissant se reposer. Demandez au centre de santé ou à votre assurance maladie si les soins de grossesse sont gratuits ou pris en charge là où vous vivez ; cela change, alors demandez à chaque fois."
          ],
          steps: ["Allez au centre de santé dès que vous pensez être enceinte, de préférence dans les 12 premières semaines.", "Demandez combien de visites le centre prévoit et à quelles dates.", "Notez chaque date dans le carnet et dans le calendrier de votre téléphone.", "Apportez le carnet à chaque visite.", "Si vous manquez une visite, allez-y dès que possible ; n'attendez pas la suivante."],
          words: [["Soins prénatals", "les contrôles de santé d'une femme pendant la grossesse, avant la naissance du bébé."], ["Contact", "une visite ou une rencontre avec un agent de santé, au centre de santé ou à la maison."], ["Sage-femme", "une personne formée qui soigne les femmes pendant la grossesse, l'accouchement et après l'accouchement."]],
          slides: [
            { title: "Les soins prénatals", bullets: ["Des contrôles de santé pendant la grossesse", "Pour trouver les problèmes tôt", "Tension, poids, sang et le bébé"] },
            { title: "Quand y aller", bullets: ["Première visite dans les 12 premières semaines", "L'OMS conseille au moins 8 contacts", "Suivez le calendrier de votre centre de santé"] },
            { title: "Gardez le carnet", bullets: ["Apportez-le à chaque visite", "Gardez-le au sec dans un sachet en plastique", "Notez la date suivante dans votre téléphone"] },
            { title: "La famille peut aider", bullets: ["L'argent du transport", "L'accompagner à une visite", "La laisser se reposer"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Prenez une grossesse dans votre famille, ou l'exemple de Fatou à Thiès, au Sénégal, enceinte de 10 semaines. Écrivez le mois de la première visite et la liste des mois des visites suivantes. À côté de chacune, écrivez qui l'accompagnera.",
          youCanNow: "planifier les visites au centre de santé pendant une grossesse, en commençant tôt, et garder les dates là où vous les verrez.",
          quickCheck: [
            { objective: "O1", q: "Quand une femme doit-elle faire sa première visite au centre de santé pendant la grossesse ?", options: ["Seulement quand le bébé est sur le point d'arriver", "Pendant les trois derniers mois", "Dès qu'elle pense être enceinte, de préférence dans les 12 premières semaines", "Seulement si elle se sent malade"], answer: 2, why: "L'OMS conseille le premier contact dans les 12 premières semaines, pour trouver les problèmes tôt." },
            { objective: "O1", q: "Combien de contacts avec un agent de santé l'OMS conseille-t-elle pendant la grossesse ?", options: ["Au moins huit", "Un", "Deux", "Aucun si elle se sent bien"], answer: 0, why: "L'OMS conseille au moins huit contacts ; votre centre de santé peut avoir son propre calendrier." }
          ]
        },
        {
          title: "Les signes de danger pendant la grossesse et après l'accouchement",
          objectives: ["O2"],
          minutes: 5,
          goal: "Repérer les signes de danger qui veulent dire qu'une femme enceinte ou une jeune mère doit aller au centre de santé maintenant.",
          text: [
            "La plupart des grossesses se passent bien. Mais certains signes veulent dire danger pour la mère ou le bébé. Avec ces signes, n'attendez pas de voir si cela passe, et n'attendez pas la prochaine visite. Allez au centre de santé ou à l'hôpital maintenant, de jour comme de nuit.",
            "Signes de danger pendant la grossesse : saignement par le vagin ; fort mal de tête avec la vue trouble ; convulsions (crises) ; gonflement du visage et des mains ; fièvre ; forte douleur au ventre ; le bébé bouge beaucoup moins ou plus du tout ; la poche des eaux se rompt avant le travail ; difficulté à respirer.",
            "Signes de danger après l'accouchement : saignement abondant (les linges ou les serviettes sont vite trempés) ; fièvre ; pertes qui sentent mauvais ; fort mal de tête, vue trouble ou convulsions ; douleur ou gonflement d'une jambe ; se sentir très triste ou incapable de faire face pendant plusieurs jours.",
            "Les saignements abondants, les infections et la tension trop élevée font partie des principales causes de décès pendant la grossesse et l'accouchement, et ils peuvent tuer vite. La rapidité sauve des vies. En chemin, appelez l'agent de santé communautaire ou le numéro d'urgence de votre région."
          ],
          steps: ["Apprenez les signes de danger et collez la liste au mur de la maison.", "Si vous en voyez un, arrêtez ce que vous faites.", "Allez au centre de santé ou à l'hôpital maintenant avec le carnet.", "Appelez avant d'arriver, ou appelez l'agent de santé communautaire en chemin."],
          words: [["Signe de danger", "un signe que la mère ou le bébé est peut-être en grave danger et a besoin de soins maintenant."], ["Convulsions (crises)", "des secousses soudaines du corps que la personne ne peut pas contrôler."], ["Pertes", "liquide qui sort du vagin."]],
          slides: [
            { title: "Signe de danger : on y va MAINTENANT", bullets: ["N'attendez pas de voir si cela passe", "N'attendez pas la prochaine visite", "De jour comme de nuit"] },
            { title: "Pendant la grossesse", bullets: ["Saignement, convulsions, fièvre, forte douleur au ventre", "Fort mal de tête avec vue trouble ; visage ou mains gonflés", "Bébé qui bouge beaucoup moins ; eaux perdues trop tôt ; souffle court"] },
            { title: "Après l'accouchement", bullets: ["Saignement abondant ou fièvre", "Pertes qui sentent mauvais", "Fort mal de tête, vue trouble ou convulsions", "Très triste ou incapable de faire face pendant des jours"] },
            { title: "La rapidité sauve des vies", bullets: ["Prenez le carnet", "Appelez l'agent de santé en chemin"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Écrivez sur une feuille les signes de danger pendant la grossesse et après l'accouchement, dans votre propre langue si vous préférez. Ajoutez le nom du centre de santé le plus proche et un numéro de téléphone d'urgence. Collez-la au mur ou gardez-en une photo dans votre téléphone.",
          youCanNow: "repérer les signes de danger pendant la grossesse et après l'accouchement, et vous savez qu'il faut aller tout de suite au centre de santé.",
          quickCheck: [
            { objective: "O2", q: "Mariam, à Bouaké, est enceinte de 7 mois. Elle a un fort mal de tête et la vue trouble. Que doit-elle faire ?", options: ["Se reposer et voir comment elle se sent demain", "Attendre sa prochaine visite", "Boire plus d'eau et s'allonger", "Aller au centre de santé ou à l'hôpital maintenant"], answer: 3, why: "Un fort mal de tête avec la vue trouble est un signe de danger ; il peut indiquer une tension dangereusement élevée." },
            { objective: "O2", q: "Lequel est un signe de danger après l'accouchement ?", options: ["Se sentir fatiguée après l'accouchement", "Un saignement abondant qui trempe vite les linges", "Avoir envie de dormir quand le bébé dort", "Avoir faim"], answer: 1, why: "Le saignement abondant après l'accouchement est une cause principale de décès des mères et demande des soins maintenant." }
          ]
        },
        {
          title: "Faire un plan d'accouchement",
          objectives: ["O3"],
          minutes: 5,
          goal: "Écrire un plan d'accouchement qui indique le lieu, le transport, l'argent et les personnes qui aident.",
          text: [
            "Beaucoup de dangers de l'accouchement arrivent vite et sont difficiles à prévoir. Les soins d'un personnel de santé qualifié (sage-femme, infirmière ou médecin) pendant et après l'accouchement sauvent la vie des mères et des bébés. Le plan le plus sûr est donc d'accoucher dans une formation sanitaire (centre de santé, maternité ou hôpital).",
            "Un plan d'accouchement répond à des questions simples avant le début du travail : Quelle formation sanitaire ? Comment y aller la nuit ? Qui paiera le transport, et combien avons-nous mis de côté ? Qui l'accompagne ? Qui garde les autres enfants ? Qui pourrait donner son sang si besoin ?",
            "Commencez à épargner tôt, un peu chaque semaine. Par exemple, une famille de Kisumu met de côté KES 200 par semaine, et une famille de Tamale GHS 20 par semaine (ce sont des exemples ; prévoyez vos propres montants). Enregistrez dès maintenant dans le téléphone le numéro de la moto-taxi (boda boda, okada), du taxi ou de l'ambulance.",
            "Préparez un petit sac pendant les derniers mois : le carnet de santé, des linges propres, des vêtements et un bonnet pour le bébé, et des affaires pour la mère. Mettez-vous d'accord sur le plan avec toute la famille, pour que personne ne se dispute quand le travail commence."
          ],
          steps: ["Choisissez la formation sanitaire et visitez-la avant l'accouchement si vous le pouvez.", "Organisez le transport de jour et de nuit, et enregistrez les numéros.", "Mettez de l'argent de côté chaque semaine pour le transport et les frais.", "Choisissez qui l'accompagne et qui garde la maison.", "Préparez le sac et mettez-vous d'accord sur le plan avec la famille."],
          words: [["Plan d'accouchement", "un plan écrit qui dit où et comment le bébé naîtra et comment vous vous y rendrez."], ["Personnel de santé qualifié", "une sage-femme, une infirmière ou un médecin formé pour faire les accouchements."], ["Travail", "les douleurs et les efforts du corps qui poussent le bébé dehors."]],
          slides: [
            { title: "Pourquoi un plan d'accouchement", bullets: ["Les dangers de l'accouchement peuvent arriver vite", "Des soins qualifiés sauvent mères et bébés", "Préparez-vous avant le début du travail"] },
            { title: "Le plan répond à", bullets: ["Quelle formation sanitaire ?", "Quel transport, de jour et de nuit ?", "Combien d'argent mis de côté ?", "Qui l'accompagne, qui garde la maison ?"] },
            { title: "Épargnez tôt", bullets: ["Un peu chaque semaine (les montants sont des exemples)", "Enregistrez les numéros de transport dès maintenant"] },
            { title: "Préparez le sac", bullets: ["Le carnet de santé", "Linges propres, vêtements et bonnet du bébé", "Des affaires pour la mère"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Écrivez un plan d'accouchement pour une grossesse dans votre famille, ou pour Amina à Kano, qui doit accoucher dans trois mois. Remplissez : formation sanitaire, transport (jour et nuit), épargne par semaine, qui l'accompagne, qui garde la maison, et ce qu'il y a dans le sac.",
          youCanNow: "écrire un plan d'accouchement qui indique le lieu, le transport, l'argent et les personnes qui aident.",
          quickCheck: [
            { objective: "O3", q: "Quel est le lieu le plus sûr pour accoucher ?", options: ["À la maison sans personne de formé", "Là où le travail commence", "Une formation sanitaire avec un personnel de santé qualifié", "En chemin, pour gagner du temps"], answer: 2, why: "Des soins qualifiés pendant et après l'accouchement sauvent la vie des mères et des nouveau-nés." },
            { objective: "O3", q: "Quand la famille doit-elle se mettre d'accord sur le plan d'accouchement ?", options: ["Quand le travail commence", "Avant le dernier mois de grossesse", "Après la naissance du bébé", "Seulement s'il y a un problème"], answer: 1, why: "S'organiser à l'avance évite les retards et les disputes quand le travail commence." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Une grossesse en bonne santé et un accouchement sans danger",
        questions: [
          { objective: "O1", q: "Salma, à Assiout, pense être enceinte de 8 semaines. Quelle est la meilleure chose à faire maintenant ?", options: ["Aller au centre de santé maintenant pour la première visite", "Attendre que le bébé bouge", "Attendre le dernier mois", "Demander à une voisine au lieu d'aller au centre de santé"], answer: 0, why: "L'OMS conseille le premier contact dans les 12 premières semaines." },
          { objective: "O1", q: "Pourquoi apporter le carnet de la mère et de l'enfant à chaque visite ?", options: ["Le centre de santé va le revendre", "Il est seulement pour le père", "Il garde la trace des contrôles et les prochaines dates", "Il ne sert plus après la première visite"], answer: 2, why: "Le carnet réunit l'historique et les dates des prochaines visites au même endroit." },
          { objective: "O2", q: "Lequel de ces signes est un signe de danger pendant la grossesse ?", options: ["Avoir envie de certains aliments", "Le bébé bouge beaucoup moins ou plus du tout", "Se sentir un peu fatiguée", "Avoir besoin d'uriner plus souvent"], answer: 1, why: "Un bébé qui bouge beaucoup moins peut être en danger ; il faut y aller maintenant." },
          { objective: "O2", q: "Akosua a de la fièvre et des pertes qui sentent mauvais cinq jours après l'accouchement. Que doit faire la famille ?", options: ["Attendre une semaine", "Lui donner du thé et la laisser se reposer", "L'emmener au centre de santé maintenant", "Attendre la visite de vaccination du bébé"], answer: 2, why: "La fièvre et des pertes qui sentent mauvais sont des signes d'infection après l'accouchement ; elle a besoin de soins maintenant." },
          { objective: "O3", q: "Qu'est-ce qui fait partie d'un bon plan d'accouchement ?", options: ["Des numéros de transport enregistrés pour le jour et la nuit", "Attendre le début du travail pour décider", "Dépenser d'abord l'épargne", "Ne rien dire à la famille"], answer: 0, why: "Un transport, de l'argent et des personnes prévus à l'avance évitent des retards dangereux." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les premiers jours et les premières années de votre bébé",
      lessons: [
        {
          title: "Prendre soin d'un nouveau-né les premiers jours",
          objectives: ["O4"],
          minutes: 5,
          goal: "Énumérer les soins du nouveau-né le premier jour : la chaleur, l'allaitement précoce et un cordon propre.",
          text: [
            "Un nouveau-né ne peut pas se garder au chaud tout seul. Séchez le bébé, puis mettez-le peau à peau sur la poitrine de sa mère, avec un pagne ou un linge sur les deux, et mettez-lui un bonnet. Retardez le premier bain ; demandez à l'agent de santé quand le donner.",
            "Commencez l'allaitement dans la première heure après la naissance. Le premier lait, épais et jaune (le colostrum), est bon pour le bébé ; ne le jetez pas. L'OMS conseille uniquement le lait maternel pendant les 6 premiers mois : pas d'eau, pas de tisane, pas d'eau sucrée au glucose, ni aucune autre boisson ou nourriture.",
            "Gardez le cordon propre et sec. N'y mettez rien sauf si l'agent de santé vous le dit, et lavez-vous les mains avant de le toucher. Lavez-vous les mains au savon avant de nourrir le bébé et après l'avoir changé.",
            "Si vous le pouvez, restez environ un jour dans la formation sanitaire après l'accouchement, et allez aux visites après l'accouchement prévues par le centre de santé, pour la mère et pour le bébé. Déclarez la naissance à l'état civil et commencez les vaccins donnés à la naissance."
          ],
          steps: ["Séchez le bébé et mettez-le peau à peau sur sa mère, couvert, avec un bonnet.", "Allaitez dans la première heure.", "Donnez uniquement le lait maternel.", "Gardez le cordon propre et sec ; lavez-vous les mains avant de le toucher.", "Allez aux visites après l'accouchement ; déclarez la naissance ; commencez les vaccins."],
          words: [["Nouveau-né", "un bébé pendant ses 28 premiers jours."], ["Peau à peau", "tenir le bébé nu contre la poitrine nue de sa mère pour le garder au chaud."], ["Colostrum", "le premier lait maternel, épais et jaune, plein de protection pour le bébé."], ["Cordon", "le morceau du cordon ombilical qui reste sur le ventre du bébé après la naissance."]],
          slides: [
            { title: "Gardez le bébé au chaud", bullets: ["Séchez le bébé", "Peau à peau sur sa mère, couvert", "Un bonnet ; retardez le premier bain"] },
            { title: "Allaitez tôt", bullets: ["Dans la première heure", "Le colostrum est bon : ne le jetez pas", "Uniquement le lait maternel pendant 6 mois"] },
            { title: "Gardez le cordon propre", bullets: ["Propre et sec", "Rien dessus, sauf si l'agent de santé le dit", "Lavez-vous d'abord les mains"] },
            { title: "Après la naissance", bullets: ["Visites pour la mère et le bébé", "Déclarez la naissance", "Commencez les vaccins de la naissance"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Écrivez dans l'ordre les soins du nouveau-né pour le premier jour, sous forme de petite liste que vous pourriez donner à une jeune mère ou à une grand-mère. Puis écrivez une habitude dangereuse dont vous avez entendu parler dans votre région et le geste sûr qui la remplace.",
          youCanNow: "énumérer les soins du nouveau-né le premier jour : la chaleur, l'allaitement précoce, uniquement le lait maternel et un cordon propre.",
          quickCheck: [
            { objective: "O4", q: "Quand l'allaitement doit-il commencer ?", options: ["Après le premier bain du bébé", "Après trois jours", "Quand le lait devient blanc", "Dans la première heure après la naissance"], answer: 3, why: "L'OMS conseille de commencer dans la première heure ; le premier lait protège le bébé." },
            { objective: "O4", q: "Une parente dit de donner de l'eau au nouveau-né parce qu'il fait chaud. Que conseille l'OMS ?", options: ["Uniquement le lait maternel pendant les 6 premiers mois", "De l'eau toutes les heures", "De l'eau sucrée", "De la tisane avec le lait maternel"], answer: 0, why: "Le lait maternel contient toute l'eau dont un bébé de moins de 6 mois a besoin ; les autres boissons peuvent apporter des microbes." }
          ]
        },
        {
          title: "Les signes de danger chez les bébés et les jeunes enfants",
          objectives: ["O5"],
          minutes: 5,
          goal: "Repérer les signes de danger qui veulent dire qu'un bébé ou un jeune enfant doit aller au centre de santé maintenant.",
          text: [
            "Les bébés et les jeunes enfants peuvent tomber très malades très vite. Certains signes veulent dire : allez au centre de santé maintenant, pas demain.",
            "Chez un nouveau-né : il tète mal ou ne peut pas téter ; il est moins actif ou tout mou ; il respire vite ou difficilement ; il a de la fièvre ou il est froid ; il a des convulsions.",
            "Chez un jeune enfant : il ne peut pas boire ni téter ; il vomit tout ; il a des convulsions ; il est très endormi ou difficile à réveiller ; il respire vite ou difficilement ; il a de la fièvre (dans une zone de paludisme, faites un test le jour même) ; il a une diarrhée avec du sang, ou avec les yeux enfoncés et il a très soif ou il est très faible.",
            "En cas de diarrhée, continuez l'allaitement, les boissons et la nourriture, et demandez à l'agent de santé pour les sels de réhydratation orale (SRO) et le zinc. Mais si vous voyez un signe de danger, allez-y maintenant. N'utilisez pas de médicaments du marché ou d'une voisine sans l'avis d'un agent de santé."
          ],
          steps: ["Cherchez les signes de danger, même la nuit.", "Si vous en voyez un, allez au centre de santé maintenant avec le carnet de santé de l'enfant.", "Continuez l'allaitement et les boissons en chemin.", "Appelez l'agent de santé communautaire si vous ne pouvez pas y aller."],
          words: [["Convulsions (crises)", "des secousses soudaines que l'enfant ne peut pas contrôler."], ["Déshydratation", "quand le corps perd trop d'eau, par exemple à cause d'une diarrhée ou de vomissements."], ["SRO", "sels de réhydratation orale : une boisson d'eau propre, de sel et de sucre qui remplace l'eau perdue par la diarrhée."]],
          slides: [
            { title: "Maintenant, pas demain", bullets: ["Les enfants tombent très malades très vite", "Prenez le carnet de santé de l'enfant"] },
            { title: "Signes de danger chez le nouveau-né", bullets: ["Ne tète pas ou tète mal", "Tout mou ou moins actif", "Respire vite ou mal ; fièvre ou corps froid ; convulsions"] },
            { title: "Signes de danger chez le jeune enfant", bullets: ["Ne peut pas boire ni téter ; vomit tout", "Convulsions ; très endormi ou difficile à réveiller", "Respire vite ou mal ; fièvre ; diarrhée avec du sang"] },
            { title: "La diarrhée", bullets: ["Continuez l'allaitement et les boissons", "Demandez à l'agent de santé pour les SRO et le zinc", "Yeux enfoncés ou très faible : allez-y maintenant"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Faites une fiche des signes de danger pour les bébés et les jeunes enfants : une colonne pour les nouveau-nés, une pour les bébés plus âgés et les enfants. Ajoutez le centre de santé le plus proche, le numéro de l'agent de santé communautaire et la façon d'y aller la nuit.",
          youCanNow: "repérer les signes de danger chez un bébé ou un jeune enfant et l'emmener tout de suite au centre de santé.",
          quickCheck: [
            { objective: "O5", q: "Un bébé de 3 semaines, à Kumasi, ne tète plus et il est froid. Que doit faire la famille ?", options: ["Attendre le matin", "Donner de l'eau au bébé", "Aller au centre de santé maintenant", "Donner un médicament du marché"], answer: 2, why: "Ne plus téter et être froid sont des signes de danger chez le nouveau-né qui demandent des soins maintenant." },
            { objective: "O5", q: "Un enfant de 2 ans qui a la diarrhée a les yeux enfoncés et il est très faible. Que faut-il faire ?", options: ["Arrêter toutes les boissons", "Aller au centre de santé maintenant", "Arrêter l'allaitement", "Attendre trois jours"], answer: 1, why: "Les yeux enfoncés et la faiblesse sont des signes de déshydratation, qui peut tuer un enfant ; il faut y aller maintenant." }
          ]
        },
        {
          title: "Alimentation, vaccins et contrôles de croissance",
          objectives: ["O6"],
          minutes: 6,
          goal: "Trouver sur le carnet de santé de l'enfant les prochaines dates de vaccins et de contrôles de croissance, et écrire l'étape d'alimentation adaptée à son âge.",
          text: [
            "Le carnet ou la fiche de santé de l'enfant montre les vaccins reçus, les dates des prochains vaccins et la courbe de croissance. Les vaccins protègent contre des maladies comme la rougeole, la polio, la coqueluche, le tétanos et certaines formes de pneumonie et de diarrhée. Le calendrier change selon le pays ; suivez votre carnet et votre centre de santé.",
            "Aux contrôles de croissance, au centre de santé ou avec l'agent de santé communautaire, on pèse et on mesure l'enfant. Une courbe de croissance qui reste plate ou qui descend est un signal d'alerte : demandez à l'agent de santé ce qu'il faut faire.",
            "L'alimentation selon l'âge (OMS) : uniquement le lait maternel pendant les 6 premiers mois. À partir d'environ 6 mois, ajoutez des aliments familiaux mous et écrasés, et continuez l'allaitement jusqu'à 2 ans ou plus. Commencez par de petites quantités, puis donnez peu à peu plus de nourriture, plus épaisse et plus variée. Les bébés de 6 à 8 mois ont besoin de 2 à 3 repas par jour ; les enfants de 9 à 23 mois de 3 à 4 repas, avec 1 à 2 collations si besoin.",
            "Si vous avez manqué la date d'un vaccin, ne renoncez pas : allez-y dès que possible et le centre de santé fera le rattrapage. Notez chaque prochaine date dans le calendrier de votre téléphone."
          ],
          steps: ["Ouvrez le carnet de santé de l'enfant.", "Trouvez le dernier vaccin et la prochaine date.", "Trouvez le dernier contrôle de croissance et regardez si la courbe monte.", "Écrivez l'étape d'alimentation pour l'âge de l'enfant.", "Mettez les prochaines dates dans le calendrier de votre téléphone."],
          words: [["Vaccin", "un produit donné pour protéger un enfant contre une maladie avant qu'il l'attrape ; le centre de santé le donne selon un calendrier."], ["Courbe de croissance", "un graphique du carnet qui montre le poids de l'enfant au fil du temps."], ["Alimentation de complément", "ajouter des aliments familiaux à partir d'environ 6 mois, tout en continuant l'allaitement."]],
          slides: [
            { title: "Le carnet de santé de l'enfant", bullets: ["Vaccins reçus et prochaines dates", "Courbe de croissance", "Apportez-le à chaque visite"] },
            { title: "Vaccins et croissance", bullets: ["Suivez le calendrier de votre pays", "Courbe plate ou qui descend : demandez à l'agent de santé", "Une date manquée ? Allez-y dès que possible"] },
            { title: "L'alimentation selon l'âge (OMS)", bullets: ["0-6 mois : uniquement le lait maternel", "Dès 6 mois environ : aliments familiaux mous et lait maternel", "6-8 mois : 2-3 repas ; 9-23 mois : 3-4 repas, 1-2 collations"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Tâche finale : écrivez votre plan de santé familial d'une page. Mettez-y les visites au centre de santé encore à venir, le plan d'accouchement, les soins du nouveau-né le premier jour, les signes de danger pour la mère et l'enfant avec le centre de santé et un numéro d'urgence, et les prochaines dates de vaccins et de contrôles de croissance d'après le carnet, avec l'étape d'alimentation adaptée à l'âge de l'enfant.",
          youCanNow: "lire sur le carnet de santé de l'enfant les prochaines dates de vaccins et de contrôles de croissance, et prévoir l'alimentation adaptée à son âge.",
          quickCheck: [
            { objective: "O6", q: "Le bébé Kofi a manqué la date de son vaccin la semaine dernière. Que doit faire la famille ?", options: ["Attendre l'année prochaine", "Sauter ce vaccin", "Tout recommencer depuis le premier vaccin", "Aller au centre de santé dès que possible pour le rattrapage"], answer: 3, why: "Le centre de santé peut faire le rattrapage ; allez-y dès que possible." },
            { objective: "O6", q: "Vers quel âge un bébé commence-t-il à manger des aliments familiaux en plus du lait maternel ?", options: ["Vers 6 mois", "2 semaines", "1 mois", "2 ans"], answer: 0, why: "L'OMS conseille d'ajouter des aliments familiaux mous à partir d'environ 6 mois, tout en continuant l'allaitement." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les premiers jours et les premières années de votre bébé",
        questions: [
          { objective: "O4", q: "Quelle est la meilleure façon de garder un nouveau-né au chaud juste après la naissance ?", options: ["Peau à peau sur la poitrine de sa mère, couvert, avec un bonnet", "Un bain froid", "Laisser le bébé découvert", "Mettre le bébé dans une autre pièce"], answer: 0, why: "Le contact peau à peau garde le bébé au chaud et aide à commencer l'allaitement." },
          { objective: "O4", q: "Que faut-il mettre sur le cordon ?", options: ["De la cendre ou de la bouse de vache", "Rien, sauf si l'agent de santé le dit ; le garder propre et sec", "Du beurre", "De la boue"], answer: 1, why: "Un cordon propre et sec réduit le risque d'infection." },
          { objective: "O5", q: "Quel signe chez un jeune enfant veut dire : allez au centre de santé maintenant ?", options: ["Une petite toux, mais il mange normalement", "L'enfant ne peut pas boire ni téter", "Les dents qui poussent", "Le nez qui coule, mais il joue bien"], answer: 1, why: "Ne pas pouvoir boire ni téter est un signe de danger général." },
          { objective: "O5", q: "Un enfant, à Kano, respire vite et difficilement pendant la nuit. Que doivent faire les parents ?", options: ["Attendre la consultation du matin", "Donner un sirop contre la toux acheté en boutique", "Aller au centre de santé ou à l'hôpital maintenant", "Lui frotter la poitrine et attendre"], answer: 2, why: "Respirer vite ou difficilement peut être une pneumonie et demande des soins maintenant." },
          { objective: "O6", q: "La courbe de croissance du carnet est plate depuis deux mois. Que doit faire le parent ?", options: ["Rien ; c'est normal", "Arrêter les visites au centre de santé", "Ne donner que de l'eau", "En parler à l'agent de santé"], answer: 3, why: "Une courbe plate ou qui descend est un signal d'alerte ; l'agent de santé peut aider à trouver pourquoi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Santé de la mère et de l'enfant : grossesse, accouchement et premières années",
    questions: [
      { objective: "O1", q: "Les soins d'une femme pendant la grossesse s'appellent :", options: ["Les soins prénatals", "Les soins postnatals", "Les premiers secours", "Un contrôle de croissance"], answer: 0, why: "Prénatal veut dire avant la naissance." },
      { objective: "O1", q: "L'OMS conseille le premier contact de la grossesse :", options: ["Pendant le dernier mois", "Dans les 12 premières semaines", "Seulement en cas de douleur", "Quand le bébé commence à bouger"], answer: 1, why: "Commencer tôt aide à trouver les problèmes tôt." },
      { objective: "O1", q: "Une femme enceinte a manqué une visite au centre de santé. Que vaut-il mieux faire ?", options: ["Attendre le début du travail", "Ne plus y aller", "Y aller dès que possible", "Attendre la visite suivante"], answer: 2, why: "Y aller dès que possible permet de garder un bon suivi." },
      { objective: "O2", q: "Lequel est un signe de danger pendant la grossesse ?", options: ["Avoir faim", "Sentir le bébé donner des coups de pied", "Un saignement par le vagin", "Avoir envie de dormir davantage"], answer: 2, why: "Un saignement pendant la grossesse peut indiquer un danger pour la mère et le bébé." },
      { objective: "O2", q: "Le visage et les mains d'une femme enceinte gonflent tout à coup et elle a un fort mal de tête. Elle doit :", options: ["Aller au centre de santé maintenant", "Manger moins salé et attendre", "Attendre la prochaine visite", "Dormir pour que cela passe"], answer: 0, why: "Ce peuvent être des signes d'une tension dangereusement élevée." },
      { objective: "O2", q: "Deux jours après l'accouchement, la mère trempe vite les linges de sang. La famille doit :", options: ["Attendre un jour", "Lui donner du thé", "L'emmener au centre de santé maintenant", "Lui demander de se reposer"], answer: 2, why: "Un saignement abondant après l'accouchement peut tuer vite." },
      { objective: "O2", q: "Pourquoi ne faut-il pas \"attendre de voir\" devant un signe de danger ?", options: ["Le centre de santé ferme tôt", "Les signes de danger peuvent s'aggraver vite et la rapidité sauve des vies", "Attendre coûte moins cher", "Les signes passent toujours"], answer: 1, why: "Beaucoup de décès viennent de retards pour décider de partir et pour arriver." },
      { objective: "O3", q: "Quelle question a sa place dans un plan d'accouchement ?", options: ["De quelle couleur seront les vêtements du bébé ?", "Comment irons-nous à la formation sanitaire la nuit ?", "Qui fera la cuisine pour les visiteurs ?", "Comment s'appellera le bébé ?"], answer: 1, why: "Le transport, surtout la nuit, est une partie clé du plan d'accouchement." },
      { objective: "O3", q: "Une famille de Dakar veut avoir de l'argent prêt pour l'accouchement. Une bonne chose à faire est de :", options: ["Épargner un peu chaque semaine, en commençant tôt", "Emprunter le jour même", "Espérer qu'une voisine paiera", "Attendre le début du travail"], answer: 0, why: "Épargner tôt permet d'avoir l'argent prêt quand le travail commence." },
      { objective: "O3", q: "Que faut-il mettre dans le sac pour l'accouchement ?", options: ["Rien ; le centre de santé a tout", "Seulement de l'argent", "De la nourriture pour toute la famille", "Le carnet de santé, des linges propres et des vêtements pour le bébé"], answer: 3, why: "Le carnet et des affaires propres pour la mère et le bébé sont nécessaires à l'accouchement." },
      { objective: "O4", q: "Qu'est-ce que le colostrum ?", options: ["Un vaccin", "Une sorte de tisane pour bébés", "Le premier lait maternel, épais et jaune", "Une crème pour bébé"], answer: 2, why: "Le colostrum est le premier lait et il protège le bébé." },
      { objective: "O4", q: "Pendant les 6 premiers mois, l'OMS conseille de donner au bébé :", options: ["Du lait maternel et de l'eau", "Uniquement le lait maternel", "De la bouillie", "Du lait de vache"], answer: 1, why: "Uniquement le lait maternel ; aucune autre boisson ni nourriture." },
      { objective: "O4", q: "Quel geste du premier jour est correct ?", options: ["Laver tout de suite le bébé à l'eau froide", "Mettre de la cendre sur le cordon", "Attendre deux jours pour allaiter", "Sécher le bébé et le mettre peau à peau"], answer: 3, why: "Sécher le bébé et le peau à peau gardent le nouveau-né au chaud." },
      { objective: "O5", q: "Lequel est un signe de danger chez le nouveau-né ?", options: ["Dormir entre les tétées", "Ne pas pouvoir téter", "Éternuer une fois", "Pleurer avant la tétée"], answer: 1, why: "Un nouveau-né qui ne peut pas téter a besoin de soins maintenant." },
      { objective: "O5", q: "Un enfant vomit tout et il est très endormi. La famille doit :", options: ["Attendre demain", "Donner un médicament du marché", "Ne rien lui donner à boire", "Aller au centre de santé maintenant"], answer: 3, why: "Vomir tout et être très endormi sont des signes de danger généraux." },
      { objective: "O5", q: "Un enfant a une diarrhée avec du sang. La famille doit :", options: ["Emmener l'enfant au centre de santé", "Arrêter toute nourriture et toute boisson", "Attendre que cela passe", "Lui donner les comprimés d'une voisine"], answer: 0, why: "Du sang dans les selles est une raison de consulter." },
      { objective: "O5", q: "En allant au centre de santé avec un enfant qui a la diarrhée, vous devez :", options: ["Arrêter l'allaitement", "Continuer l'allaitement et les boissons", "Ne pas donner d'eau", "Donner seulement du thé fort"], answer: 1, why: "Les boissons et le lait maternel remplacent l'eau perdue." },
      { objective: "O6", q: "Où trouvez-vous la date du prochain vaccin ?", options: ["Sur le carnet de santé de l'enfant", "À la radio", "Auprès d'un vendeur du marché", "Nulle part ; on devine"], answer: 0, why: "Le carnet montre les vaccins reçus et les prochaines dates." },
      { objective: "O6", q: "D'après l'OMS, combien de repas par jour, environ, un enfant de 10 mois doit-il avoir ?", options: ["Un", "3 à 4, plus 1 à 2 collations si besoin", "Uniquement le lait maternel", "Dix"], answer: 1, why: "L'OMS conseille 3 à 4 repas de 9 à 23 mois, plus des collations si besoin." },
      { objective: "O6", q: "Jusqu'à quel âge l'OMS conseille-t-elle de continuer l'allaitement ?", options: ["3 mois", "6 mois", "1 an tout juste", "2 ans ou plus"], answer: 3, why: "L'allaitement continue avec les aliments familiaux jusqu'à 2 ans ou plus." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Visites au centre de santé", objective: "O1", notYet: "Aucune date de visite, ou la première visite arrive tard dans la grossesse.", meets: "Donne la liste des visites encore à venir, avec la première dans les 12 premières semaines, notées dans le carnet ou dans le téléphone.", exceeds: "Indique aussi qui l'accompagne à chaque visite et comment elle est payée." },
      { name: "Plan d'accouchement", objective: "O3", notYet: "Il manque le lieu, le transport, l'argent ou les personnes qui aident.", meets: "Indique la formation sanitaire, le transport de jour et de nuit, l'épargne par semaine, qui l'accompagne et qui garde la maison.", exceeds: "Les numéros de transport sont aussi enregistrés, le sac est prêt et la famille a accepté le plan." },
      { name: "Premier jour du nouveau-né", objective: "O4", notYet: "Des étapes manquent, sont dans le désordre ou comprennent une pratique dangereuse.", meets: "La chaleur (peau à peau), l'allaitement dans la première heure, uniquement le lait maternel et un cordon propre et sec.", exceeds: "Nomme aussi une habitude dangereuse de la région et le geste sûr qui la remplace." },
      { name: "Signes de danger", objective: "O2", notYet: "La liste oublie des signes importants ou dit d'attendre de voir.", meets: "Donne les principaux signes de danger pour la mère et l'enfant, avec le centre de santé le plus proche et un numéro d'urgence.", exceeds: "Prévoit aussi le transport de nuit et le numéro de l'agent de santé communautaire." },
      { name: "Signes de danger chez l'enfant", objective: "O5", notYet: "Les signes de danger chez l'enfant manquent ou sont mélangés avec des signes normaux.", meets: "Donne les signes de danger chez le nouveau-né et le jeune enfant qui veulent dire : allez-y maintenant.", exceeds: "Les explique assez clairement pour qu'une grand-mère ou un grand frère puisse s'en servir." },
      { name: "Carnet, vaccins et alimentation", objective: "O6", notYet: "Pas de prochaines dates, ou le conseil d'alimentation ne correspond pas à l'âge de l'enfant.", meets: "Donne les prochaines dates de vaccins et de contrôles de croissance d'après le carnet, et la bonne étape d'alimentation pour l'âge.", exceeds: "Les dates sont dans le calendrier du téléphone avec des rappels." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenantes enceintes ou membres de la famille qui font une première visite au centre de santé dans les 12 premières semaines (enquête de suivi à 30 jours)",
      "Familles qui disent avoir un plan d'accouchement écrit, avec de l'argent mis de côté et le transport organisé",
      "Enfants dont les prochaines visites de vaccination et de contrôle de croissance sont respectées, selon les apprenants ou les centres de santé partenaires",
      "Les agents de santé communautaires partenaires signalent que les familles arrivent plus tôt quand un signe de danger apparaît"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone simple, ou une séance en groupe où les leçons sont lues à voix haute",
      "Le carnet de santé de la mère et de l'enfant ou la fiche de santé de l'enfant, si la famille en a un",
      "Du papier et un stylo pour les fiches des signes de danger, le plan d'accouchement et le plan de santé familial",
      "Environ 60 minutes en tout, en courtes séances"
    ],
    facilitatorNotes: [
      "Bons partenaires : agents de santé communautaires, sages-femmes du centre de santé, groupements de femmes, groupes d'épargne (tontines) et groupes religieux ; invitez une sage-femme ou une infirmière pour répondre aux questions.",
      "Ne demandez jamais aux apprenants de parler devant le groupe de leur propre grossesse, de leur statut VIH ou d'autres détails de santé ; utilisez plutôt les exemples du cours.",
      "Ne donnez ni doses de médicaments ni conseils de traitement ; renvoyez toutes ces questions au centre de santé.",
      "Vérifiez les informations locales avant la séance : la formation sanitaire la plus proche, les numéros d'urgence, le calendrier de vaccination local et la gratuité ou la prise en charge des soins de maternité.",
      "Invitez les pères et les grands-mères : la décision d'aller au centre de santé est souvent prise par la famille.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
