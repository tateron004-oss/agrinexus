"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-scaling-ai-business.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-scaling-ai-business-fr",
  lang: "fr",
  translationOf: "entrepreneurs-scaling-ai-business",
  category: "Entrepreneurs",
  name: "Faire grandir une entreprise grâce à l'IA",
  skills: "Connaître vos chiffres clés, Trouver le goulot d'étranglement, Transformer votre travail en systèmes, Vous faire aider, Gagner des clients pas à pas, Garder la qualité en grandissant",
  outcome: "utiliser l'IA pour lire vos chiffres clés, trouver ce qui freine votre croissance, transformer votre travail en systèmes que d'autres peuvent appliquer, et rédiger un plan de croissance réaliste sur 90 jours avec des contrôles de qualité.",
  about: [
    "Faire grandir une entreprise, c'est augmenter les ventes sans que les coûts, les heures de travail et les erreurs augmentent aussi vite. Ce cours s'adresse aux chefs d'entreprise dont l'activité fonctionne déjà et qui sont prêts à la développer, en laissant l'IA faire une plus grande partie du travail de routine.",
    "Au chapitre 1, vous utiliserez l'IA pour comprendre vos chiffres, trouver le goulot d'étranglement qui vous ralentit et transformer votre travail en systèmes écrits. Au chapitre 2, vous prévoirez l'aide dont vous avez besoin (prestataires, salariés et outils d'IA), choisirez vos canaux de croissance et mettrez en place des contrôles de qualité et de risque pour que la croissance n'abîme pas ce que vos clients aiment.",
    "Chaque leçon dure environ cinq minutes, avec une tâche sur votre propre entreprise. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les points sur les impôts, l'emploi et le droit renvoient à des sources officielles ; demandez conseil à un comptable ou à un avocat pour votre situation."
  ],
  finalTask: "Rédigez un plan de croissance de 90 jours sur une page : vos cinq chiffres clés aujourd'hui et vos objectifs, votre principal goulot d'étranglement et comment vous allez le supprimer, deux systèmes que vous allez documenter, l'aide que vous allez ajouter (une personne ou un outil d'IA) et son coût, un canal de croissance à tester, et trois indicateurs de qualité que vous suivrez chaque semaine.",
  chapters: [
    {
      name: "Chapitre 1 : Se préparer à grandir",
      lessons: [
        {
          title: "Connaître vos chiffres clés",
          minutes: 5,
          goal: "Suivre cinq chiffres clés et utiliser l'IA pour expliquer ce qu'ils signifient.",
          text: [
            "On ne peut pas faire grandir ce qu'on ne mesure pas. Cinq chiffres comptent pour la plupart des petites entreprises : le chiffre d'affaires mensuel (l'argent qui entre), les coûts, le bénéfice (ce qui reste), le nombre de clients, et ce que rapporte chaque client dans le temps comparé à ce qu'il coûte pour l'obtenir.",
            "Mettez les six derniers mois dans un tableur. Puis demandez à l'IA de vous aider à le lire : \"Voici mon chiffre d'affaires, mes coûts et mon nombre de clients par mois (sans noms). Quelles tendances voyez-vous ? Quel chiffre devrait m'inquiéter ?\" Vérifiez vous-même ses calculs.",
            "Une entreprise est prête à grandir quand chaque vente rapporte un bénéfice et que les clients reviennent ou vous recommandent. Si chaque vente fait perdre de l'argent, grandir ne fait qu'augmenter la perte."
          ],
          steps: ["Créez un tableur avec six mois de chiffre d'affaires, de coûts, de bénéfice et de nombre de clients.", "Calculez la vente moyenne et le coût pour obtenir un client.", "Demandez à l'IA de décrire les tendances et les risques (sans noms de clients).", "Refaites vous-même tous les calculs.", "Écrivez une phrase : chaque vente est-elle rentable ?"],
          words: [["Chiffre d'affaires", "tout l'argent qui entre grâce aux ventes."], ["Bénéfice", "le chiffre d'affaires moins les coûts."], ["Coût d'acquisition client", "ce que vous dépensez, en moyenne, pour obtenir un nouveau client."], ["Faire grandir (passer à l'échelle)", "augmenter les ventes plus vite que les coûts et les efforts."]],
          slides: [
            { title: "Cinq chiffres clés", bullets: ["Chiffre d'affaires et coûts", "Bénéfice", "Nombre de clients", "Valeur d'un client comparée au coût pour l'obtenir"] },
            { title: "L'IA lit les tendances", bullets: ["Six mois dans un tableur", "Demandez à l'IA les tendances et les risques", "Vérifiez vous-même les calculs"] },
            { title: "Prêt à grandir ?", bullets: ["Chaque vente rapporte un bénéfice", "Les clients reviennent ou vous recommandent", "Si une vente perd de l'argent, la croissance augmente la perte"] }
          ],
          tryIt: "Construisez votre tableau de chiffres sur six mois, demandez à l'IA de relever les tendances et un risque, vérifiez ses calculs, et écrivez si chaque vente est rentable.",
          youCanNow: "suivre vos chiffres clés et juger si votre entreprise est prête à grandir."
        },
        {
          title: "Trouver le goulot d'étranglement",
          minutes: 5,
          goal: "Trouver l'étape qui limite le plus ce que votre entreprise peut gérer.",
          text: [
            "Un goulot d'étranglement est le point le plus étroit, celui qui limite tout le reste. Dans une pâtisserie, ce peut être la place dans le four ; dans une entreprise de services, c'est souvent le temps du patron pour les devis, les relances ou les contrôles de qualité.",
            "Listez les étapes, du premier contact au client satisfait, et le temps que prend chacune par client. Demandez à l'IA : \"Voici mes étapes et leurs durées. Où est le goulot d'étranglement, et quelles sont trois façons de le régler : supprimer l'étape, l'automatiser ou la confier à quelqu'un ?\"",
            "Réglez d'abord le goulot d'étranglement. Accélérer une autre étape n'aide pas, car le travail continue de s'accumuler au point le plus étroit."
          ],
          steps: ["Listez chaque étape, du premier contact au travail terminé.", "Notez le temps de chaque étape par client et qui la fait.", "Demandez à l'IA de trouver le goulot d'étranglement et de proposer des solutions.", "Choisissez : supprimer, automatiser ou confier.", "Prévoyez une solution à essayer le mois prochain."],
          words: [["Goulot d'étranglement", "l'étape la plus lente, qui limite ce que toute l'entreprise peut faire."], ["Confier (déléguer)", "donner une tâche à quelqu'un d'autre."]],
          slides: [
            { title: "Le point le plus étroit", bullets: ["Il limite tout le reste", "C'est souvent le temps du patron"] },
            { title: "Le trouver", bullets: ["Listez les étapes et le temps par client", "Demandez à l'IA où le travail s'accumule"] },
            { title: "Le régler en premier", bullets: ["Supprimer, automatiser ou confier", "Accélérer les autres étapes n'aide pas"] }
          ],
          tryIt: "Écrivez vos étapes avec leurs durées, demandez à l'IA de trouver le goulot d'étranglement, et choisissez une solution (supprimer, automatiser ou confier) à essayer ce mois-ci.",
          youCanNow: "trouver l'étape qui limite votre croissance et choisir une solution."
        },
        {
          title: "Transformer votre travail en systèmes",
          minutes: 5,
          goal: "Documenter deux tâches clés sous forme de systèmes qu'une autre personne (ou un outil d'IA) peut appliquer.",
          text: [
            "Si tout est dans votre tête, l'entreprise ne peut pas grandir au-delà de vous. Un système est une façon écrite de faire un travail : les étapes, les outils, la liste de contrôle et ce à quoi ressemble un travail \"bien fait\".",
            "Enregistrez-vous pendant que vous faites une tâche, ou prenez des notes rapides, et demandez à l'IA de les transformer en procédure standard (SOP) avec une liste de contrôle et une norme de qualité. Indiquez quelles étapes les outils d'IA peuvent faire et où une personne doit vérifier.",
            "Testez chaque système en demandant à quelqu'un d'autre de le suivre pendant que vous observez sans rien dire. Chaque question qu'il pose révèle une étape manquante. Gardez tous vos systèmes dans un seul endroit partagé."
          ],
          steps: ["Choisissez les deux tâches qui vous prennent le plus de temps.", "Enregistrez-vous ou prenez des notes pendant que vous faites chacune.", "Demandez à l'IA de transformer les notes en SOP avec une liste de contrôle et une norme de qualité.", "Indiquez les étapes faites par l'IA et les vérifications humaines.", "Testez avec une autre personne et comblez les manques."],
          words: [["Système", "une façon écrite et répétable de faire un travail."], ["SOP", "procédure opérationnelle standard (de l'anglais standard operating procedure) : les étapes écrites d'une tâche."], ["Norme de qualité", "une description claire de ce qu'est un bon travail."]],
          slides: [
            { title: "Sortez-le de votre tête", bullets: ["Un système = étapes, outils, liste de contrôle, norme", "L'entreprise peut grandir au-delà de vous"] },
            { title: "Construisez-le avec l'IA", bullets: ["Enregistrez-vous ou prenez des notes rapides", "L'IA les transforme en SOP", "Indiquez les étapes de l'IA et les vérifications humaines"] },
            { title: "Testez-le", bullets: ["Quelqu'un d'autre le suit", "Chaque question = une étape manquante", "Gardez tous les systèmes au même endroit"] }
          ],
          tryIt: "Transformez l'une de vos deux plus grosses tâches en SOP avec l'aide de l'IA, avec une liste de contrôle et une norme de qualité. Faites-la tester par quelqu'un si possible.",
          youCanNow: "transformer votre savoir-faire en systèmes que d'autres personnes ou des outils d'IA peuvent appliquer."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer à grandir",
        questions: [
          { q: "Chaque vente vous fait perdre un peu d'argent. Que se passe-t-il si vous grandissez ?", options: ["Le bénéfice apparaît tout seul", "Les pertes augmentent", "Rien ne change", "Les coûts disparaissent"], answer: 1, why: "La croissance multiplie le résultat de chaque vente." },
          { q: "Qu'est-ce que le bénéfice ?", options: ["Le nombre de clients", "Tout l'argent qui entre", "Votre prix", "Le chiffre d'affaires moins les coûts"], answer: 3, why: "Le bénéfice est ce qui reste après les coûts." },
          { q: "L'IA dit que vos coûts ont augmenté de 40 %. Que devez-vous faire ?", options: ["Vérifier vous-même le calcul dans le tableur", "La croire et paniquer", "Supprimer le tableur", "L'ignorer"], answer: 0, why: "Les calculs de l'IA peuvent être faux ; vérifiez." },
          { q: "Qu'est-ce qu'un goulot d'étranglement ?", options: ["Votre meilleur client", "Un type de bouteille", "L'étape la plus lente, qui limite tout le reste", "Un canal de marketing"], answer: 2, why: "C'est le point le plus étroit de votre processus." },
          { q: "Comment savoir si une SOP est complète ?", options: ["L'IA l'a écrite", "Elle est très longue", "Quelqu'un d'autre peut la suivre sans poser de questions", "Elle a un joli titre"], answer: 2, why: "Les questions pendant le test révèlent les étapes manquantes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Grandir sans tout casser",
      lessons: [
        {
          title: "Vous faire aider : des personnes et des outils d'IA",
          minutes: 6,
          goal: "Décider quelle aide ajouter et préparer une description de poste.",
          text: [
            "Certaines tâches vont mieux à un outil d'IA ou à une automatisation (trier, rédiger un brouillon, planifier). D'autres demandent une personne (jugement, travail manuel, relations avec les clients). Servez-vous de votre goulot d'étranglement et de vos systèmes pour décider.",
            "Si vous embauchez une personne, l'IA peut rédiger une description de poste claire à partir de vos SOP : tâches, compétences, horaires et fourchette de salaire. Vérifiez que les mots sont justes et inclusifs, et retirez tout ce qui n'a pas de rapport avec le poste.",
            "Prestataire ou salarié ? Aux États-Unis, l'IRS (l'administration fiscale américaine) examine trois types d'éléments : le contrôle du comportement (décidez-vous comment le travail est fait ?), le contrôle financier (qui contrôle la paie, les dépenses et les outils ?) et le type de relation (contrats, avantages, travail continu et central). Une erreur peut vous coûter des impôts et des pénalités ; lisez la page de l'IRS et demandez à un comptable ou à un avocat. Les règles des États peuvent être plus strictes."
          ],
          steps: ["Listez le travail dont vous voulez vous décharger.", "Pour chaque tâche, indiquez : outil d'IA, prestataire ou salarié.", "Demandez à l'IA de rédiger une description de poste à partir de vos SOP.", "Vérifiez que les mots sont justes et retirez les exigences sans rapport avec le poste.", "Lisez la page de l'IRS sur le statut des travailleurs et consultez un comptable avant d'embaucher."],
          words: [["Prestataire", "une personne qui travaille à son compte et fait un travail pour vous, en décidant généralement elle-même comment le faire."], ["Salarié", "une personne dont vous contrôlez le travail ; vous retenez et payez les impôts et cotisations liés à l'emploi."], ["Description de poste", "un résumé écrit des tâches, compétences, horaires et salaire d'un emploi."]],
          slides: [
            { title: "Une personne ou un outil d'IA ?", bullets: ["IA : trier, rédiger, planifier", "Personnes : jugement, travail manuel, relations"] },
            { title: "Description de poste avec l'IA", bullets: ["Rédigée à partir de vos SOP", "Tâches, compétences, horaires, fourchette de salaire", "Vérifiez que les mots sont justes et liés au poste"] },
            { title: "Prestataire ou salarié ? (IRS)", bullets: ["Contrôle du comportement", "Contrôle financier", "Type de relation", "Demandez à un comptable ; les règles des États peuvent être plus strictes"] }
          ],
          sources: [{ name: "IRS : prestataire indépendant ou salarié ? (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" }],
          tryIt: "Choisissez l'aide dont vous avez le plus besoin. Si c'est une personne, demandez à l'IA de rédiger une description de poste à partir de votre SOP et vérifiez qu'elle est juste ; notez si, selon vous, c'est un poste de prestataire ou de salarié et pourquoi, en utilisant les trois catégories de l'IRS.",
          youCanNow: "choisir entre des outils d'IA et des personnes pour grandir, et préparer une description de poste juste."
        },
        {
          title: "Gagner des clients pas à pas",
          minutes: 5,
          goal: "Choisir un canal de croissance et concevoir un petit test mesurable.",
          text: [
            "Les canaux de croissance sont les moyens par lesquels de nouveaux clients vous trouvent : recommandations, partenariats, recherche locale et fiches sur les cartes, réseaux sociaux, e-mail, publicités payantes, places de marché. La plupart des petites entreprises grandissent mieux avec un ou deux canaux bien utilisés.",
            "Demandez à l'IA : \"Mon entreprise est [type] et sert [client]. Proposez cinq canaux de croissance, comment chacun fonctionnerait pour moi, ce qu'il coûterait et comment je le mesurerais.\" Choisissez celui qui convient à vos clients et à votre budget.",
            "Faites un petit test de 30 jours avec un objectif clair : \"Demander des recommandations à 20 anciens clients ; objectif : 5 nouveaux contacts.\" Mesurez le résultat, comparez le coût par nouveau client avec vos chiffres de la leçon 1, et seulement ensuite dépensez davantage."
          ],
          steps: ["Demandez à l'IA cinq canaux de croissance possibles, avec leurs coûts et leurs mesures.", "Choisissez celui qui convient à vos clients et à votre budget.", "Fixez un test de 30 jours avec un objectif clair.", "Suivez les résultats et le coût par nouveau client.", "Décidez : le développer, le modifier ou l'arrêter."],
          words: [["Canal de croissance", "un moyen par lequel de nouveaux clients vous trouvent et achètent chez vous."], ["Recommandation", "un client qui vous conseille à quelqu'un d'autre."], ["Test", "un petit essai, limité dans le temps, avec un objectif clair."]],
          slides: [
            { title: "Comment les clients vous trouvent", bullets: ["Recommandations et partenariats", "Recherche locale, réseaux sociaux, e-mail", "Publicités payantes et places de marché"] },
            { title: "Choisissez-en un ou deux", bullets: ["Demandez à l'IA options, coûts et mesures", "Choisissez ce qui convient à vos clients et à votre budget"] },
            { title: "Testez petit d'abord", bullets: ["30 jours, objectif clair", "Suivez le coût par nouveau client", "Développer, modifier ou arrêter"] }
          ],
          tryIt: "Choisissez un canal de croissance avec l'aide de l'IA et écrivez un test de 30 jours : ce que vous allez faire, l'objectif, comment vous allez le mesurer et la somme maximale que vous dépenserez.",
          youCanNow: "choisir un canal de croissance et le tester avant de dépenser davantage."
        },
        {
          title: "Garder la qualité en grandissant",
          minutes: 5,
          goal: "Mettre en place des contrôles de qualité chaque semaine et un plan face aux risques liés à l'IA et aux données.",
          text: [
            "La croissance abîme souvent la qualité : travail bâclé, réponses plus lentes, brouillons d'IA que personne ne vérifie. Choisissez trois chiffres de qualité à suivre chaque semaine, comme la note moyenne des avis, le temps de réponse et le taux de travaux refaits ou remboursés.",
            "Quand plus de travail passe par des outils d'IA, les risques augmentent aussi : plus de données clients dans plus d'outils, plus de contenus d'IA envoyés. Vérifiez quels outils contiennent des données clients, qui y a accès, et qu'une personne vérifie toujours tout ce que voient les clients.",
            "Rassemblez tout dans un plan de 90 jours. Demandez à l'IA de vous aider à le mettre en forme, mais chaque chiffre et chaque date doivent être ceux auxquels vous croyez. Relisez-le toutes les deux semaines et ajustez."
          ],
          steps: ["Choisissez trois chiffres de qualité à suivre chaque semaine.", "Listez les outils qui contiennent des données clients et qui peut y accéder.", "Assurez-vous qu'une personne vérifie tout ce que voient les clients.", "Demandez à l'IA de mettre en forme votre plan de 90 jours à partir de vos notes.", "Prévoyez une révision toutes les deux semaines."],
          words: [["Contrôle de qualité", "un examen régulier d'un chiffre ou d'un échantillon de travail pour vérifier que le niveau est maintenu."], ["Taux de remboursement", "la part des ventes pour lesquelles vous avez dû rendre l'argent."]],
          slides: [
            { title: "La croissance peut abîmer la qualité", bullets: ["Travail bâclé, réponses lentes", "Brouillons d'IA que personne ne vérifie"] },
            { title: "Suivez trois chiffres chaque semaine", bullets: ["Note des avis", "Temps de réponse", "Taux de travaux refaits ou remboursés"] },
            { title: "Les risques liés à l'IA et aux données augmentent", bullets: ["Quels outils contiennent des données clients ?", "Qui y a accès ?", "Une personne vérifie ce que voient les clients"] },
            { title: "Votre plan de 90 jours", bullets: ["L'IA le met en forme ; vous fixez les vrais chiffres", "Relisez-le toutes les deux semaines"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan de croissance de 90 jours sur une page : chiffres clés et objectifs, solution au goulot d'étranglement, deux systèmes, l'aide que vous ajouterez, un test de croissance et trois contrôles de qualité hebdomadaires.",
          youCanNow: "planifier et gérer la croissance avec l'IA tout en protégeant la qualité et les données de vos clients."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Grandir sans tout casser",
        questions: [
          { q: "Quelle tâche vaut-il mieux confier à un outil d'IA ?", options: ["Trier les demandes qui arrivent", "Gagner la confiance de votre plus gros client", "Un travail de réparation manuel", "Décider qui embaucher"], answer: 0, why: "Le tri de routine convient à l'IA ; le jugement et les relations demandent des personnes." },
          { q: "Laquelle de ces catégories fait partie des trois de l'IRS pour le statut d'un travailleur ?", options: ["Le type de téléphone", "La couleur préférée", "Les années d'études", "Le contrôle du comportement"], answer: 3, why: "Les trois sont le contrôle du comportement, le contrôle financier et le type de relation." },
          { q: "Avant de dépenser plus dans un canal de croissance, vous devez :", options: ["Dépenser tout votre budget", "Faire un petit test mesuré", "Copier un concurrent", "Ne rien mesurer"], answer: 1, why: "Les tests montrent si cela marche avant que vous investissiez." },
          { q: "Quel est un bon chiffre de qualité à suivre chaque semaine ?", options: ["Le temps moyen de réponse aux clients", "Le nombre d'applications que vous utilisez", "La taille de votre logo", "La longueur de votre bio sur les réseaux sociaux"], answer: 0, why: "Le temps de réponse montre si le service se dégrade." },
          { q: "Quand plus de travail passe par des outils d'IA, vous devez :", options: ["Donner toutes vos données à chaque outil", "Arrêter de vérifier le travail de l'IA", "Vérifier quels outils contiennent des données clients et qui peut y accéder", "Supprimer les vérifications humaines"], answer: 2, why: "Les risques pour les données et la qualité augmentent avec la croissance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Faire grandir une entreprise grâce à l'IA",
    questions: [
      { q: "Faire grandir une entreprise (passer à l'échelle), c'est :", options: ["Seulement augmenter les prix", "Augmenter les ventes plus vite que les coûts et les efforts", "Travailler plus d'heures", "Acheter plus d'outils"], answer: 1, why: "C'est la définition utilisée dans le cours." },
      { q: "Le chiffre d'affaires, c'est :", options: ["Votre nombre de clients", "Ce qui reste après les coûts", "Votre facture d'outils", "Tout l'argent qui entre grâce aux ventes"], answer: 3, why: "Le chiffre d'affaires est l'argent qui entre." },
      { q: "Le coût d'acquisition client, c'est :", options: ["Un impôt", "Votre prix", "Votre loyer", "Ce que vous dépensez en moyenne pour obtenir un nouveau client"], answer: 3, why: "C'est la définition." },
      { q: "Avant de demander à l'IA d'analyser vos chiffres, vous devez :", options: ["Ajouter des numéros de carte", "Retirer les noms des clients", "Ajouter des mots de passe", "Les publier en ligne"], answer: 1, why: "Gardez les données privées hors des outils d'IA." },
      { q: "Une entreprise est prête à grandir quand :", options: ["Elle a beaucoup d'applications", "Elle a un nouveau logo", "Chaque vente rapporte un bénéfice et les clients reviennent ou la recommandent", "Son patron travaille 80 heures"], answer: 2, why: "Des ventes rentables et répétables peuvent grandir." },
      { q: "Dans une entreprise de services, le goulot d'étranglement est souvent :", options: ["Le temps du patron", "La couleur de la camionnette", "La police du site web", "Le nombre d'abonnés"], answer: 0, why: "Les patrons font souvent eux-mêmes les devis, les relances et les vérifications." },
      { q: "Les trois façons de régler un goulot d'étranglement sont :", options: ["Augmenter, baisser ou geler les prix", "Ignorer, cacher ou retarder", "Supprimer, automatiser ou confier", "Acheter, vendre ou louer"], answer: 2, why: "Elles enlèvent la limite." },
      { q: "Pourquoi régler d'abord le goulot d'étranglement ?", options: ["Accélérer les autres étapes n'aide pas tant que le travail s'y accumule", "C'est l'étape la moins chère", "C'est la plus amusante", "Parce que l'IA le dit"], answer: 0, why: "Le point le plus étroit limite tout le processus." },
      { q: "Un système, c'est :", options: ["Une marque d'ordinateur", "Une façon écrite et répétable de faire un travail", "Un canal de vente", "Un formulaire fiscal"], answer: 1, why: "C'est la définition." },
      { q: "Une SOP doit contenir :", options: ["Les numéros de carte des clients", "Seulement un titre", "Vos mots de passe", "Des étapes, une liste de contrôle et une norme de qualité"], answer: 3, why: "Ils rendent la tâche répétable et vérifiable." },
      { q: "Dans une SOP, vous indiquez les étapes faites par l'IA et :", options: ["Où une personne doit vérifier", "Vos chansons préférées", "Les prix des concurrents", "Rien d'autre"], answer: 0, why: "Les vérifications humaines garantissent la qualité." },
      { q: "Quel travail demande une personne plutôt que l'IA ?", options: ["Résumer des notes", "Trier des e-mails", "Préparer un planning", "Construire des relations avec les clients"], answer: 3, why: "Les relations et le jugement demandent des personnes." },
      { q: "Quand l'IA rédige une description de poste, vous devez :", options: ["Ajouter des limites d'âge", "La publier telle quelle", "Vérifier que les mots sont justes et liés au poste", "Retirer la fourchette de salaire"], answer: 2, why: "Des mots justes évitent les problèmes de discrimination." },
      { q: "Pour demander à l'IRS de décider du statut d'un travailleur, chacune des deux parties peut déposer :", options: ["Le formulaire 1040-ES", "Le formulaire SS-8", "Un W-2", "Un plan d'affaires"], answer: 1, why: "La page de l'IRS cite le formulaire SS-8." },
      { q: "Se tromper sur le statut d'un travailleur peut entraîner :", options: ["Rien du tout", "De la publicité gratuite", "Des coûts plus bas pour toujours", "Des impôts et des pénalités"], answer: 3, why: "Une mauvaise classification a des conséquences fiscales." },
      { q: "Lequel de ces éléments est un canal de croissance ?", options: ["Votre SOP", "Votre tableur", "Les recommandations de vos clients", "Votre goulot d'étranglement"], answer: 2, why: "Les recommandations amènent de nouveaux clients." },
      { q: "Un bon test de 30 jours a :", options: ["Un objectif clair et une limite de dépenses", "Aucune mesure", "Un budget illimité", "Aucune date de fin"], answer: 0, why: "Les objectifs et les limites rendent les tests utiles." },
      { q: "Après un test de croissance, vous comparez le coût par nouveau client avec :", options: ["Le logo de votre concurrent", "Vos chiffres clés, comme la valeur d'un client", "La météo", "Votre facture de téléphone"], answer: 1, why: "Un canal vaut la peine si les clients rapportent plus qu'ils ne coûtent." },
      { q: "Quel chiffre de qualité faut-il suivre en grandissant ?", options: ["Le nombre de polices", "Le taux de travaux refaits ou remboursés", "Le nombre de plantes au bureau", "La longueur de la signature d'e-mail"], answer: 1, why: "Les travaux refaits et les remboursements montrent que la qualité baisse." },
      { q: "À quelle fréquence devez-vous relire votre plan de 90 jours ?", options: ["Toutes les deux semaines", "Jamais", "Une seule fois à la fin", "Toutes les heures"], answer: 0, why: "Des révisions régulières vous permettent d'ajuster." }
    ]
  }
};
