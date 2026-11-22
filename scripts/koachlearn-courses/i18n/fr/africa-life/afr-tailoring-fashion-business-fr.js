"use strict";

// Koach Learn course (French translation of africa-life/afr-tailoring-fashion-business.js). See scripts/koachlearn-courses/README.md, "Translations".

const KE_BRS = { name: "Business Registration Service (Kenya) : enregistrement du nom commercial via eCitizen", url: "https://brs.go.ke/" };
const NG_CAC = { name: "Corporate Affairs Commission (Nigeria) : enregistrement des noms commerciaux et des sociétés", url: "https://www.cac.gov.ng/" };
const GH_ORC = { name: "Office of the Registrar of Companies (Ghana) : noms commerciaux (entreprises individuelles)", url: "https://orc.gov.gh/" };

module.exports = {
  id: "afr-tailoring-fashion-business-fr",
  lang: "fr",
  translationOf: "afr-tailoring-fashion-business",
  category: "Africa: Life and Work",
  name: "Gérer une entreprise de couture et de mode",
  skills: "Garder un atelier sûr, Prendre les mesures et remplir une fiche de commande, Calculer le coût et le prix d'un vêtement, Planifier les commandes et les délais, Tenir ses comptes en sécurité, Montrer son travail aux clients",
  outcome: "gérer votre travail de couture comme une entreprise : garder un atelier sûr, prendre les commandes sur une fiche claire, fixer pour chaque vêtement un prix qui rapporte, planifier votre semaine pour livrer à temps, tenir vos comptes et montrer votre travail à de nouveaux clients.",
  about: [
    "Beaucoup de tailleurs et de couturières cousent très bien mais ont quand même du mal : un prix qui ne couvre pas la doublure et le fil, un client qui ne revient jamais chercher son vêtement, trois commandes de mariage pour le même samedi, une avance que personne n'a notée. Ce cours s'adresse aux tailleurs, couturières, stylistes et apprentis des villes et des villages du Kenya, du Nigeria, du Ghana, du Sénégal, de Côte d'Ivoire, du Cameroun, du Maroc et de toute l'Afrique.",
    "Vous allez rendre votre atelier plus sûr, utiliser une fiche de commande pour chaque travail, calculer ce que coûte vraiment un vêtement et combien le faire payer, planifier votre semaine selon vos heures, tenir un cahier de caisse simple, protéger votre mobile money contre les arnaques, savoir comment enregistrer le nom de votre entreprise et montrer votre travail sur WhatsApp ou dans votre boutique.",
    "Ce cours porte sur la gestion de l'entreprise, pas sur les techniques de couture. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » pour votre propre atelier. Tous les montants sont des exemples, pas de vrais prix."
  ],
  finalTask: "Préparez une trousse de départ pour votre entreprise de couture : une liste de prix pour au moins cinq vêtements que vous faites, chacun avec son coût calculé ; une fiche de commande vierge que vous utiliserez pour chaque travail ; un plan pour une semaine chargée qui respecte vos vraies heures ; une page de cahier de caisse avec les avances et les dépenses ; et une publication ou un article de catalogue qui montre un vêtement terminé, avec son prix et la façon de le commander.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Tailleurs, couturières, stylistes, apprentis et jeunes qui terminent leur apprentissage, dans les villes et les villages de toute l'Afrique. Beaucoup travaillent seuls ou avec un ou deux aides, dans une petite boutique, sur un étal de marché ou à la maison.",
    startingPoint: "Ils savent coudre et finir des vêtements, et reçoivent déjà des commandes de la famille, des voisins et des membres de leur église ou de leur mosquée. La plupart fixent leurs prix par habitude ou selon ce que demandent les autres, notent les mesures sur des bouts de papier et gardent l'argent dans leur tête ou dans une seule poche.",
    gap: "Sans calcul des coûts, sans fiches de commande, sans plan de la semaine et sans comptes, les tailleurs perdent de l'argent sur des travaux trop peu payés, ratent les délais en haute saison, se disputent avec les clients sur ce qui avait été convenu et ne peuvent pas montrer à un prêteur ou à un gros client comment va l'entreprise. Ces outils simples transforment le savoir-faire en couture en un revenu stable.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants parlent la langue du cours comme deuxième langue",
      "Appareils : un téléphone simple ou un smartphone, souvent avec des données mobiles chères ; un cahier, un stylo et une calculatrice",
      "Argent : petits budgets ; aucun logiciel ni équipement coûteux n'est nécessaire",
      "Règles : les règles et les frais d'enregistrement d'une entreprise varient selon le pays et changent ; les apprenants vérifient auprès du registre de leur pays",
      "Temps : leçons de 4 à 6 minutes, qui tiennent entre deux clients"
    ],
    prerequisites: "Savoir coudre au moins un type de vêtement du début à la fin. Savoir faire des additions, des multiplications et des divisions simples."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Avec votre propre espace de couture, votre machine et vos outils", action: "inspecter un atelier de couture pour repérer les risques liés aux aiguilles, aux ciseaux, aux fers, à l'électricité et au feu, et les corriger", standard: "en trouvant et en corrigeant au moins trois risques" },
    { id: "O2", condition: "Face à un client qui veut faire coudre un vêtement", action: "prendre les mesures du client et remplir une fiche de commande avec le modèle, le tissu, le prix, l'avance et la date de livraison", standard: "avec toutes les parties remplies et relues au client" },
    { id: "O3", condition: "Avec les fournitures, le temps et les frais fixes d'un vêtement", action: "calculer le coût total du vêtement et fixer un prix qui le couvre avec un bénéfice", standard: "en comptant les fournitures, votre temps et les frais fixes, et en comparant avec le marché local" },
    { id: "O4", condition: "Avec vos commandes en cours et les heures où vous pouvez travailler", action: "planifier une semaine de commandes avec des dates de livraison réalistes", standard: "sans prendre plus de travail que vos heures ne le permettent, en gardant du temps pour les essayages et la haute saison" },
    { id: "O5", condition: "Avec une semaine d'avances, de paiements et de dépenses", action: "noter les entrées et les sorties d'argent dans un cahier de caisse et repérer les arnaques au mobile money", standard: "avec un solde juste et sans jamais partager de code PIN" },
    { id: "O6", condition: "Avec un vêtement terminé et un téléphone", action: "créer une publication ou un article de catalogue qui montre le vêtement, son prix et la façon de le commander", standard: "avec une photo nette et sans montrer les données privées d'un client sans son accord" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Des commandes qui rapportent",
      lessons: [
        {
          title: "Un atelier sûr et bien rangé",
          objectives: ["O1"],
          minutes: 5,
          goal: "Inspecter votre atelier pour repérer les risques et en corriger au moins trois.",
          text: [
            "Vos mains, vos yeux et votre dos sont votre entreprise. Une blessure peut arrêter votre travail pendant des semaines, et un incendie peut brûler le tissu de tous vos clients. Quelques habitudes vous protègent, vous et vos apprentis.",
            "Outils tranchants : gardez les doigts loin de l'aiguille et utilisez le pied presseur ; ne cousez jamais sur les épingles ; rangez ciseaux, lames et découd-vite au même endroit, pointe en bas ; gardez aiguilles et épingles dans une pelote ou une boîte, jamais dans la bouche. Jetez les aiguilles cassées dans une boîte fermée, pas par terre, là où passent les enfants et les clients.",
            "Chaleur et électricité : ne laissez jamais seul un fer chaud ou un fer à charbon, et posez-le là où il ne peut pas tomber ; gardez le tissu et le papier loin de lui. Vérifiez que les câbles de la machine et du fer n'ont pas de coupures ni de prises mal fixées. Ne surchargez pas une prise avec beaucoup de fiches. Débranchez machines et fers à la fermeture. Gardez près de la porte un seau de sable ou d'eau, ou un extincteur si vous pouvez.",
            "Votre corps : asseyez-vous le dos soutenu, avec la table à hauteur des coudes, travaillez avec une bonne lumière, et levez-vous pour vous étirer toutes les heures. Gardez les passages libres de rouleaux de tissu et de câbles pour que personne ne trébuche."
          ],
          steps: ["Faites lentement le tour de votre atelier.", "Cherchez les outils tranchants, les fers chauds, les câbles abîmés, les prises surchargées, les obstacles et le manque de lumière.", "Notez chaque risque trouvé.", "Corrigez-en trois aujourd'hui, par exemple une boîte à épingles, un support sûr pour le fer et des passages libres.", "Apprenez les mêmes règles à vos apprentis."],
          words: [["Pied presseur", "la pièce de la machine à coudre qui tient le tissu à plat sous l'aiguille."], ["Prise surchargée", "trop de fiches branchées sur une seule prise ; elle peut chauffer et provoquer un incendie."], ["Apprenti", "un jeune qui apprend le métier en travaillant avec vous."]],
          slides: [
            { title: "Votre corps, c'est votre entreprise", bullets: ["Une blessure peut arrêter le travail des semaines", "Un incendie peut brûler le tissu de tous vos clients", "Des habitudes simples vous protègent"] },
            { title: "Outils tranchants", bullets: ["Doigts loin de l'aiguille ; jamais coudre sur les épingles", "Ciseaux et lames au même endroit, pointe en bas", "Épingles dans une pelote ou une boîte, jamais dans la bouche"] },
            { title: "Chaleur et électricité", bullets: ["Ne laissez jamais seul un fer chaud ou un fer à charbon", "Vérifiez les câbles ; pas de prises surchargées", "Débranchez à la fermeture ; sable, eau ou extincteur près de la porte"] },
            { title: "Votre corps et votre espace", bullets: ["Dos soutenu, bonne lumière", "Levez-vous et étirez-vous toutes les heures", "Passages libres : pas de rouleaux de tissu ni de câbles par terre"] }
          ],
          tryIt: "Faites maintenant le tour de votre atelier. Notez chaque risque que vous voyez. Corrigez-en trois aujourd'hui et cochez-les sur votre liste.",
          youCanNow: "inspecter votre atelier pour repérer les risques liés aux outils tranchants, à la chaleur, à l'électricité et aux chutes, et les corriger.",
          quickCheck: [
            { objective: "O1", q: "Où garder les épingles pendant le travail ?", options: ["Dans une pelote ou une boîte", "Dans la bouche, pour les avoir sous la main", "Par terre à côté de la chaise", "Dans le rouleau de tissu"], answer: 0, why: "Une pelote ou une boîte garde les épingles loin de votre bouche, du sol et du tissu du client." },
            { objective: "O1", q: "Cinq fiches sont branchées sur une seule prise et elle est chaude. Que faites-vous ?", options: ["Continuer ; c'est normal", "En débrancher et les répartir, ou utiliser une rallonge sûre", "Verser de l'eau dessus pour la refroidir", "La couvrir avec un tissu"], answer: 1, why: "Une prise chaude et surchargée peut provoquer un incendie ; réduisez la charge et n'utilisez jamais d'eau près de l'électricité." }
          ]
        },
        {
          title: "Les mesures et la fiche de commande",
          objectives: ["O2"],
          minutes: 5,
          goal: "Prendre les mesures d'un client et remplir une fiche de commande complète.",
          text: [
            "Beaucoup de disputes avec les clients commencent parce que rien n'a été écrit. « J'ai dit manches longues. » « Vous avez dit vendredi. » « Je vous ai payé la moitié. » Une fiche de commande évite cela. C'est une page ou une carte pour chaque travail, avec une copie ou une photo pour le client.",
            "Une fiche de commande indique : le nom et le numéro de téléphone du client ; la date ; le modèle (un croquis ou une photo du modèle voulu) ; les mesures ; le tissu (qui l'apporte, combien de yards ou de mètres, un petit échantillon agrafé) ; le prix, l'avance payée et le reste à payer ; la date d'essayage et la date de livraison ; votre signature et celle du client.",
            "Prenez les mesures toujours de la même façon, dans le même ordre, avec un bon mètre ruban. Écrivez l'unité (cm ou pouces). Relisez les mesures et les détails au client avant son départ. Pour une commande d'aso ebi (tissu identique porté par un groupe à une fête) à Lagos, un kaba et slit (tenue deux pièces) à Kumasi ou un boubou pour la Tabaski à Dakar, la fiche est la même : le client et vous savez exactement ce qui a été convenu."
          ],
          steps: ["Écrivez le nom et le téléphone du client, et la date.", "Dessinez le modèle ou joignez une photo.", "Mesurez dans votre ordre habituel et écrivez l'unité.", "Notez les détails du tissu et agrafez un petit échantillon.", "Écrivez le prix, l'avance, le reste à payer, la date d'essayage et la date de livraison.", "Relisez tout, signez tous les deux, et donnez une copie au client ou laissez-le prendre une photo."],
          words: [["Fiche de commande", "un écrit qui décrit un travail : quoi, pour qui, combien et quand."], ["Avance", "l'argent payé avant de commencer le travail."], ["Reste à payer", "l'argent encore dû après l'avance."]],
          slides: [
            { title: "Pourquoi tout écrire", bullets: ["« J'ai dit manches longues. » « Vous avez dit vendredi. »", "Une fiche met fin à la dispute", "Une fiche par travail ; une copie pour le client"] },
            { title: "Ce que montre la fiche", bullets: ["Nom, téléphone, date ; croquis ou photo du modèle", "Mesures avec l'unité", "Détails du tissu et un petit échantillon"] },
            { title: "Argent et dates", bullets: ["Prix, avance payée, reste à payer", "Date d'essayage et date de livraison", "Signature des deux"] },
            { title: "Avant le départ du client", bullets: ["Relisez chaque détail", "Corrigez toute erreur tout de suite", "Le client garde une copie ou une photo"] }
          ],
          tryIt: "Dessinez votre propre fiche de commande sur une page, avec toutes les parties de cette leçon. Remplissez-la pour un ami ou un membre de la famille comme s'il commandait un vêtement, puis relisez-la-lui.",
          youCanNow: "prendre les mesures toujours de la même façon et remplir une fiche de commande sur laquelle le client et vous êtes d'accord.",
          quickCheck: [
            { objective: "O2", q: "Un client dit : « Vous ne m'avez jamais dit vendredi. » Qu'est-ce qui aurait évité cela ?", options: ["Une plus grande enseigne", "Coudre plus vite", "Une fiche de commande avec la date de livraison, signée par vous deux", "Faire payer moins cher"], answer: 2, why: "Une fiche signée avec la date de livraison montre ce qui a été convenu." },
            { objective: "O2", q: "Vous avez fini de mesurer. Que faites-vous avant le départ du client ?", options: ["Jeter le bout de papier", "Demander seulement le prix total", "Commencer à couper tout de suite", "Relire chaque détail et lui donner une copie ou une photo de la fiche"], answer: 3, why: "Relire permet de trouver les erreurs, et une copie veut dire que vous avez tous les deux le même écrit." }
          ]
        },
        {
          title: "Calculer le coût et le prix d'un vêtement",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculer le coût total d'un vêtement et fixer un prix qui laisse un bénéfice.",
          text: [
            "Beaucoup de tailleurs copient le prix de la boutique d'à côté. Mais si vos coûts sont plus élevés, vous travaillez peut-être pour rien. Calculez d'abord votre propre coût, puis décidez du prix.",
            "Fournitures : tout ce qui entre dans le vêtement si c'est vous qui l'achetez, comme la doublure, l'entoilage, le fil, la fermeture éclair, les boutons, le fil à broder et l'emballage. Si le client apporte le tissu, ne comptez pas le tissu, mais comptez tout le reste.",
            "Votre temps : le nombre d'heures que demande le vêtement (coupe, couture, essayage, finitions) multiplié par ce que vous voulez gagner par heure. Frais fixes : loyer, électricité ou carburant pour le groupe électrogène, réparations de la machine, aiguilles, données mobiles ; une part pour chaque vêtement. Une méthode simple : additionnez les frais fixes d'un mois et divisez par le nombre de vêtements que vous faites en un mois.",
            "Exemple (les montants sont seulement des exemples) : une robe de femme au Kenya. Fournitures KES 450, temps 4 heures à KES 200 = KES 800, frais fixes KES 250. Coût = KES 1 500. Ajoutez un bénéfice, par exemple 30 %, soit KES 450. Prix = KES 1 950. Comparez ensuite avec le marché. Si le prix du marché est beaucoup plus bas, cherchez une méthode moins chère ou un modèle plus simple. Ne baissez pas simplement votre prix en dessous du coût."
          ],
          steps: ["Faites la liste des fournitures d'un vêtement et additionnez-les.", "Multipliez les heures par ce que vous voulez gagner par heure.", "Ajoutez une part des frais fixes d'un mois.", "Additionnez les trois : c'est votre coût.", "Ajoutez un bénéfice pour obtenir votre prix.", "Comparez avec le marché et changez le modèle ou la méthode, pas seulement le bénéfice."],
          words: [["Coût", "tout l'argent et le temps qu'il faut pour faire un vêtement."], ["Frais fixes", "l'argent dépensé pour garder l'atelier ouvert, comme le loyer et l'électricité."], ["Bénéfice", "ce qui reste pour vous et pour l'entreprise une fois tous les coûts payés."], ["Marge", "le bénéfice que vous ajoutez au coût."]],
          slides: [
            { title: "D'abord le coût, ensuite le prix", bullets: ["Copier la boutique d'à côté peut vouloir dire travailler pour rien", "Connaissez votre propre coût"] },
            { title: "Les trois parties du coût", bullets: ["Fournitures : doublure, fil, fermeture, boutons, emballage", "Votre temps : heures x ce que vous voulez par heure", "Frais fixes : loyer, électricité, réparations, données mobiles"] },
            { title: "Exemple (KES, à titre d'exemple)", bullets: ["Fournitures 450 + temps 800 + frais fixes 250 = 1 500", "Ajoutez 30 % de bénéfice : 450", "Prix : KES 1 950"] },
            { title: "Si le marché est moins cher", bullets: ["Modèle plus simple ou méthode moins chère", "Trouvez des clients qui apprécient votre qualité", "Jamais de prix en dessous du coût"] }
          ],
          tryIt: "Choisissez le vêtement que vous faites le plus souvent. Calculez ses fournitures, votre temps et sa part des frais fixes. Ajoutez un bénéfice et écrivez le prix. Comparez-le avec ce que vous demandez aujourd'hui.",
          youCanNow: "calculer ce que vous coûte vraiment un vêtement et fixer un prix qui vous paie, vous et l'entreprise.",
          quickCheck: [
            { objective: "O3", q: "La cliente apporte son propre tissu. Que comptez-vous encore dans les fournitures ?", options: ["Rien du tout", "La doublure, le fil, la fermeture et les boutons que vous achetez", "Seulement le tissu", "Le transport de la cliente"], answer: 1, why: "Si vous achetez la doublure, le fil, la fermeture et les boutons, ce sont vos coûts, même si le tissu ne l'est pas." },
            { objective: "O3", q: "Fournitures GHS 60, temps GHS 90, frais fixes GHS 30. Quel est le coût avant bénéfice ? (Montants d'exemple.)", options: ["GHS 150", "GHS 120", "GHS 180", "GHS 90"], answer: 2, why: "60 + 90 + 30 = 180 ; le bénéfice s'ajoute à ce montant." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Des commandes qui rapportent",
        questions: [
          { objective: "O1", q: "Votre apprenti laisse le fer à charbon posé sur une pile de tissu pendant qu'il répond au téléphone. Que lui apprenez-vous ?", options: ["Un fer peut rester sur le tissu", "Retourner le fer face contre la table", "Ne jamais laisser seul un fer chaud, et le poser là où il ne peut pas tomber, loin du tissu", "Répondre plus vite au téléphone"], answer: 2, why: "Un fer chaud laissé sur le tissu ou à côté peut provoquer un incendie en quelques secondes." },
          { objective: "O2", q: "Lequel de ces éléments a sa place sur une fiche de commande ?", options: ["Le code PIN du client", "La date de livraison, le prix, l'avance et le reste à payer", "Les prix de votre voisin", "Le numéro de pièce d'identité du client"], answer: 1, why: "La fiche note le travail, l'argent et les dates ; les numéros privés n'y ont pas leur place." },
          { objective: "O2", q: "Pourquoi agrafer un petit échantillon de tissu à la fiche ?", options: ["Pour associer le bon tissu à la bonne commande", "Pour s'en servir comme pelote à épingles", "Parce que la loi l'exige", "Pour faire payer plus cher"], answer: 0, why: "Un échantillon évite les confusions quand les tissus de nombreux clients sont dans l'atelier." },
          { objective: "O3", q: "Votre voisin demande NGN 8 000 pour un modèle qui vous coûte NGN 9 000 à faire. Que faites-vous ? (Montants d'exemple.)", options: ["Demander NGN 7 500 pour gagner des clients", "Demander NGN 8 000 et perdre NGN 1 000 à chaque fois", "Ne plus jamais coudre ce modèle", "Chercher une méthode moins chère ou un modèle plus simple, et fixer un prix au-dessus de votre coût"], answer: 3, why: "Vendre en dessous du coût fait perdre de l'argent sur chaque vêtement ; changez plutôt la méthode ou le modèle." },
          { objective: "O3", q: "Comment calculer la part du loyer et de l'électricité de chaque vêtement ?", options: ["Deviner un chiffre", "Additionner les frais fixes d'un mois et diviser par le nombre de vêtements faits dans le mois", "Demander au client de payer le loyer", "Ne pas la compter ; c'est peu"], answer: 1, why: "Répartir les frais fixes du mois sur les vêtements du mois donne une part juste à chacun." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Gérer l'entreprise",
      lessons: [
        {
          title: "Planifier votre semaine et vos délais",
          objectives: ["O4"],
          minutes: 5,
          goal: "Planifier une semaine de commandes pour que chaque date de livraison tienne dans vos vraies heures.",
          text: [
            "Les périodes les plus chargées, comme Noël, l'Aïd, la Tabaski, Pâques, la rentrée scolaire et la saison des mariages, sont celles où les tailleurs perdent des clients en promettant trop. Un plan simple de la semaine vous aide à dire oui seulement à ce que vous pouvez finir.",
            "D'abord, comptez vos vraies heures de couture dans la semaine, sans le temps passé avec les clients, les achats de fournitures, les coupures de courant et le repos. Ensuite, écrivez combien d'heures demande chaque commande en cours (d'après votre calcul des coûts). Puis placez chaque commande sur un jour, la date de livraison la plus proche en premier, avec l'essayage avant les finitions. Gardez environ une heure sur cinq libre pour les imprévus, comme une coupure de courant ou une machine en panne.",
            "Quand la semaine est pleine, elle est pleine. Proposez la prochaine date libre, demandez l'avance pour réserver la place, ou dites non poliment. En haute saison, fixez une date limite pour les nouvelles commandes, par exemple deux semaines avant la Tabaski à Dakar ou avant Noël à Accra, et annoncez-la tôt aux clients sur votre statut et dans la boutique."
          ],
          steps: ["Comptez vos vraies heures de couture cette semaine.", "Faites la liste des commandes en cours avec les heures nécessaires et la date de livraison.", "Placez les commandes sur les jours, la date la plus proche en premier, l'essayage avant les finitions.", "Gardez environ une heure sur cinq libre pour les imprévus.", "Quand la semaine est pleine, proposez la prochaine date libre ou dites non poliment."],
          words: [["Date de livraison", "le jour où vous avez promis que le vêtement sera prêt."], ["Essayage", "le moment où le client essaie le vêtement pour que vous puissiez l'ajuster."], ["Date limite des commandes", "le dernier jour où vous acceptez de nouvelles commandes avant une fête chargée."]],
          slides: [
            { title: "La haute saison fait rater les promesses", bullets: ["Noël, Aïd, Tabaski, Pâques, mariages, rentrée scolaire", "Promettez seulement ce que vos heures permettent"] },
            { title: "Planifiez la semaine", bullets: ["Comptez vos vraies heures de couture", "Heures nécessaires pour chaque commande", "Date la plus proche en premier ; essayage avant finitions"] },
            { title: "Gardez du temps libre", bullets: ["Environ une heure sur cinq pour les imprévus", "Coupures de courant, machines en panne, jours de maladie"] },
            { title: "Quand la semaine est pleine", bullets: ["Proposez la prochaine date libre", "Une avance réserve la place", "Annoncez tôt votre date limite pour les commandes de fête"] }
          ],
          tryIt: "Écrivez vos vraies heures de couture pour la semaine prochaine. Faites la liste de vos commandes en cours avec les heures nécessaires et la date de livraison. Placez-les sur les jours. Une commande sera-t-elle en retard ? Décidez maintenant ce que vous direz à ce client.",
          youCanNow: "planifier une semaine de commandes qui tient dans vos heures et fixer une date limite des commandes en haute saison.",
          quickCheck: [
            { objective: "O4", q: "Vous avez 30 vraies heures de couture cette semaine et des commandes qui en demandent 40. Que faites-vous ?", options: ["Tout promettre quand même", "Coudre toute la nuit, chaque nuit", "Ignorer les dates de livraison", "Changer dès maintenant certaines dates avec les clients, ou ne plus prendre de commandes"], answer: 3, why: "Prévenir les clients tôt et ne pas prendre plus que vos heures ne le permettent protège vos promesses et votre réputation." },
            { objective: "O4", q: "Pourquoi garder environ une heure sur cinq libre dans votre plan ?", options: ["Pour les imprévus comme les coupures de courant ou une machine en panne", "Pour aller au marché", "Parce que les clients aiment attendre", "Ce n'est pas utile"], answer: 0, why: "Le temps libre absorbe les imprévus pour qu'ils ne retardent pas les commandes." }
          ]
        },
        {
          title: "Comptes, sécurité du mobile money et enregistrement",
          objectives: ["O5"],
          minutes: 6,
          goal: "Noter les entrées et les sorties d'argent pendant une semaine et repérer les arnaques au mobile money.",
          text: [
            "Séparez l'argent de l'entreprise et l'argent de la famille. Un cahier de caisse simple a quatre colonnes : date, motif, entrée, sortie. Notez chaque avance, chaque reste payé et chaque achat le jour même. En fin de semaine, additionnez les entrées, retirez les sorties, et comparez le résultat avec l'argent liquide et le mobile money que vous avez vraiment. En Côte d'Ivoire ou au Sénégal, vous pouvez écrire en XOF (franc CFA) ; au Cameroun, en XAF ; la méthode est la même.",
            "Le mobile money est rapide, et les escrocs le savent. Signaux d'alerte : un message qui dit qu'on vous a envoyé de l'argent « par erreur » et vous demande de le renvoyer (vérifiez d'abord votre vrai solde et demandez à votre opérateur d'annuler l'envoi ; ne renvoyez jamais vous-même) ; toute personne qui demande votre code PIN ou un code reçu sur votre téléphone ; un appel d'un « agent du service client » depuis un numéro ordinaire ; une grosse commande urgente d'un inconnu qui veut que vous payiez d'abord des « frais de livraison ». Un vrai opérateur de mobile money ne demande jamais votre code PIN.",
            "Enregistrer le nom de votre entreprise peut vous aider à ouvrir un compte bancaire professionnel, à répondre à des marchés d'écoles et d'entreprises, et à paraître sérieux aux yeux des clients. Au Kenya, c'est le Business Registration Service (service d'enregistrement des entreprises) via eCitizen (le portail de l'État) ; au Nigeria, la Corporate Affairs Commission (commission des affaires des sociétés) ; au Ghana, l'Office of the Registrar of Companies (registre des sociétés) ; au Sénégal, renseignez-vous auprès de l'APIX (agence de promotion des investissements). Les règles, les étapes et les frais changent : vérifiez sur le site ou au bureau officiel, et méfiez-vous des faux agents qui proposent un « enregistrement gratuit »."
          ],
          steps: ["Ouvrez un cahier ou une note sur le téléphone avec quatre colonnes : date, motif, entrée, sortie.", "Notez chaque avance, paiement et achat le jour même.", "En fin de semaine : total des entrées moins total des sorties.", "Comparez le résultat avec votre argent liquide et votre solde de mobile money réels.", "Ne partagez jamais votre code PIN ; vérifiez tout « envoi par erreur » auprès de votre opérateur avant de faire quoi que ce soit."],
          words: [["Cahier de caisse", "un écrit simple de l'argent qui entre et qui sort."], ["Code PIN", "votre numéro secret de mobile money ; vous seul devez le connaître."], ["Annulation", "quand l'opérateur rend l'argent envoyé à la mauvaise personne."], ["Enregistrement du nom commercial", "l'inscription du nom de votre entreprise sur la liste officielle de l'État."]],
          slides: [
            { title: "Un cahier de caisse simple", bullets: ["Date, motif, entrée, sortie", "Notez-le le jour même", "L'argent de l'entreprise séparé de celui de la famille"] },
            { title: "Vérifiez chaque semaine", bullets: ["Total des entrées moins total des sorties", "Comparez avec le liquide et le mobile money réels", "Trouvez l'écart tant que vous vous en souvenez"] },
            { title: "Signes d'arnaque au mobile money", bullets: ["« Envoyé par erreur, renvoyez-le s'il vous plaît »", "Toute personne qui demande votre code PIN ou un code", "« Service client » depuis un numéro ordinaire ; frais avant une grosse commande", "Un vrai opérateur ne demande jamais votre code PIN"] },
            { title: "Enregistrez le nom de votre entreprise", bullets: ["Kenya : BRS via eCitizen ; Nigeria : CAC", "Ghana : Registrar of Companies ; Sénégal : renseignez-vous à l'APIX", "Les règles et les frais changent : vérifiez sur le site officiel"] }
          ],
          sources: [KE_BRS, NG_CAC, GH_ORC],
          tryIt: "Commencez votre cahier de caisse aujourd'hui. Notez tous les montants des trois derniers jours dont vous vous souvenez. Puis écrivez le registre officiel de votre pays et une chose que vous allez y vérifier.",
          youCanNow: "tenir un cahier de caisse chaque semaine, repérer les arnaques au mobile money et savoir quel bureau enregistre les noms commerciaux dans votre pays.",
          quickCheck: [
            { objective: "O5", q: "Un SMS dit qu'on vous a envoyé KES 5 000 par erreur et vous demande de les renvoyer. Que faites-vous d'abord ?", options: ["Les renvoyer tout de suite", "Donner votre code PIN pour qu'ils corrigent", "Vérifier votre vrai solde et contacter votre opérateur par son numéro officiel", "Répondre avec votre numéro de pièce d'identité"], answer: 2, why: "Beaucoup de SMS d'« envoi par erreur » sont faux ; c'est l'opérateur qui fait les vraies annulations." },
            { objective: "O5", q: "En fin de semaine, votre cahier montre plus d'argent que vous n'en avez vraiment. Que faites-vous ?", options: ["L'ignorer", "Chercher un paiement ou un achat que vous avez oublié de noter", "Arracher la page", "Emprunter pour que ça corresponde"], answer: 1, why: "Un écart veut souvent dire que quelque chose n'a pas été noté ; cherchez-le tant que vous vous en souvenez." }
          ]
        },
        {
          title: "Montrer votre travail et trouver des clients",
          objectives: ["O6"],
          minutes: 5,
          goal: "Créer une publication ou un article de catalogue qui montre un vêtement terminé, son prix et la façon de le commander.",
          text: [
            "Votre meilleure publicité, c'est votre travail. Une photo nette d'un vêtement terminé, partagée sur votre statut WhatsApp, dans un catalogue WhatsApp Business, sur Facebook, Instagram ou TikTok, ou affichée sur le mur de votre boutique, attire de nouveaux clients. Une styliste à Casablanca peut montrer un caftan, et un tailleur à Kumasi une robe en kente (tissu tissé du Ghana), de la même façon.",
            "Une bonne photo : la lumière du jour, un fond uni, le vêtement entier, puis un gros plan sur un détail ou une finition. Si un client le porte, demandez-lui d'abord si vous pouvez partager la photo, et ne partagez jamais son nom, son numéro de téléphone ni ses mesures. Certains clients diront non ; respectez-le.",
            "Chaque publication dit ce que c'est, un prix ou un prix « à partir de », le délai, et comment commander (votre numéro ou « écrivez-moi »). Une liste de prix au mur ou en image sur votre téléphone aide aussi : cinq à dix de vos principaux vêtements avec leurs prix, calculés à partir de vos coûts. Pour limiter les données mobiles, partagez une bonne photo plutôt que beaucoup."
          ],
          steps: ["Choisissez un vêtement terminé.", "Prenez une photo à la lumière du jour sur un fond uni, plus un gros plan.", "Demandez l'accord si un client est sur la photo.", "Écrivez ce que c'est, le prix, le délai et comment commander.", "Publiez-la, ou ajoutez-la à votre catalogue ou à votre liste de prix."],
          words: [["Catalogue", "une liste de vos produits avec photos et prix, par exemple dans WhatsApp Business."], ["Liste de prix", "une liste de vos principaux vêtements et du prix de chacun sur commande."], ["Accord", "le client dit oui avant que vous partagiez sa photo."]],
          slides: [
            { title: "Votre travail est votre publicité", bullets: ["Statut ou catalogue WhatsApp, Facebook, Instagram, TikTok", "Ou affiché sur le mur de votre boutique"] },
            { title: "Une bonne photo", bullets: ["Lumière du jour, fond uni", "Le vêtement entier plus un gros plan", "Un client sur la photo ? Demandez d'abord"] },
            { title: "Ce que dit chaque publication", bullets: ["Ce que c'est", "Prix ou prix « à partir de » ; délai", "Comment commander"] },
            { title: "Protégez vos clients", bullets: ["Pas de noms, de numéros ni de mesures dans les publications", "S'ils disent non, ne partagez pas"] }
          ],
          tryIt: "Prenez la photo d'un vêtement terminé à la lumière du jour. Écrivez une publication avec ce que c'est, le prix tiré de votre calcul des coûts, le délai et comment commander. Partagez-la sur votre statut ou gardez-la pour votre catalogue.",
          youCanNow: "montrer votre travail avec une photo nette, un prix et la façon de commander, tout en protégeant la vie privée de vos clients.",
          quickCheck: [
            { objective: "O6", q: "Que doit contenir une publication sur votre vêtement ?", options: ["Les mesures du client", "Seulement une photo, rien d'autre", "Le prix que vous avez payé le fil", "Ce que c'est, un prix, le délai et comment commander"], answer: 3, why: "Les clients doivent savoir ce que c'est, combien ça coûte, quand ils peuvent l'avoir et comment commander." },
            { objective: "O6", q: "Vous voulez partager la photo d'une cliente qui porte votre robe. Que faites-vous ?", options: ["Lui demander d'abord, et ne partager ni son nom ni son numéro", "La publier avec son nom pour que les gens la contactent", "La publier ; c'est votre cliente", "Publier aussi ses mesures"], answer: 0, why: "La photo et les données d'une cliente lui appartiennent ; demandez d'abord et ne montrez pas ses données privées." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Gérer l'entreprise",
        questions: [
          { objective: "O4", q: "La Tabaski est dans trois semaines et votre semaine est déjà pleine. Un nouveau client veut un boubou. Que faites-vous ?", options: ["Le promettre pour la Tabaski quand même", "Proposer honnêtement la prochaine date libre, ou dire non poliment", "L'accepter et le confier à un aide non formé", "Prendre une avance et ne rien dire sur la date"], answer: 1, why: "Des dates honnêtes protègent votre réputation ; trop promettre en haute saison fait perdre des clients." },
          { objective: "O4", q: "Dans votre plan de la semaine, quelle commande passe en premier ?", options: ["Celle dont la date de livraison est la plus proche", "La plus facile", "Celle de votre ami", "Celle qui paie le plus"], answer: 0, why: "Commencer par la date de livraison la plus proche permet de tenir chaque promesse à temps." },
          { objective: "O5", q: "Une personne qui se présente comme le « service client du mobile money » vous demande votre code PIN pour réparer votre compte. Qu'est-ce qui est vrai ?", options: ["Vous devez le donner", "Donnez seulement la moitié du code", "Donnez-le s'il connaît votre nom", "Un vrai opérateur ne demande jamais votre code PIN ; raccrochez"], answer: 3, why: "Toute personne qui demande votre code PIN est un escroc, même si elle connaît votre nom." },
          { objective: "O5", q: "Pourquoi séparer l'argent de l'entreprise et l'argent de la famille ?", options: ["Pour voir si l'entreprise fait vraiment un bénéfice", "Parce que la banque le dit", "Pour que la famille ne mange pas", "Ça n'a pas d'importance"], answer: 0, why: "Si on les mélange, on ne voit pas si l'entreprise gagne ou perd de l'argent." },
          { objective: "O6", q: "Quelle photo montre le mieux votre travail ?", options: ["Prise la nuit au flash dans une pièce en désordre", "La moitié du vêtement sur un fond de marché chargé", "Lumière du jour, fond uni, le vêtement entier plus un gros plan", "La photo du travail de quelqu'un d'autre"], answer: 2, why: "Une bonne lumière, un fond uni et un gros plan montrent la qualité de votre travail." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gérer une entreprise de couture et de mode",
    questions: [
      { objective: "O1", q: "Où mettre les aiguilles cassées en toute sécurité ?", options: ["Par terre", "Dans une boîte fermée", "Dans le sac du client", "Dans votre poche"], answer: 1, why: "Une boîte fermée garde les aiguilles cassées loin des pieds, des mains et des enfants." },
      { objective: "O1", q: "Vous voyez qu'un câble de machine est coupé et que les fils apparaissent. Que faites-vous ?", options: ["L'entourer de tissu et continuer à coudre", "Continuer à l'utiliser avec prudence", "La débrancher et faire réparer ou remplacer le câble avant de l'utiliser", "Laisser l'apprenti l'utiliser à votre place"], answer: 2, why: "Un câble abîmé peut vous électrocuter ou provoquer un incendie ; arrêtez et réparez d'abord." },
      { objective: "O1", q: "Quelle habitude protège votre dos et vos yeux ?", options: ["Coudre dans un coin sombre", "Rester assis courbé pendant six heures", "Travailler seulement la nuit", "Une bonne lumière, le dos soutenu et des étirements toutes les heures"], answer: 3, why: "La lumière, la posture et les pauses évitent la fatigue pendant les longues journées de couture." },
      { objective: "O2", q: "Que met-on sur une fiche de commande ?", options: ["Modèle, mesures, tissu, prix, avance, reste à payer, date d'essayage et date de livraison", "Seulement le nom du client", "Seulement le prix", "Le code PIN bancaire du client"], answer: 0, why: "Une fiche complète note tout l'accord ; les numéros privés n'y figurent jamais." },
      { objective: "O2", q: "Pourquoi écrire l'unité (cm ou pouces) avec les mesures ?", options: ["C'est joli", "Pour que vous ou un aide ne coupiez pas à la mauvaise taille", "Le client le demande", "Ce n'est pas utile"], answer: 1, why: "Confondre centimètres et pouces gâche un vêtement." },
      { objective: "O2", q: "Une cliente dit qu'elle a payé plus que ce que montre la fiche. Qu'est-ce qui aide le plus ?", options: ["Crier", "Refuser de finir la robe", "La fiche signée et les lignes de votre cahier de caisse pour ce jour-là", "Demander au voisin"], answer: 2, why: "Des écrits signés montrent ce qui a été payé et quand." },
      { objective: "O2", q: "Avant le départ d'une cliente pour l'aso ebi, que faites-vous de la fiche de commande ?", options: ["La garder secrète", "La jeter après la coupe", "La remplir plus tard de mémoire", "La relire, la signer toutes les deux et lui donner une copie ou la laisser prendre une photo"], answer: 3, why: "Relire et partager la fiche veut dire que vous êtes d'accord sur les mêmes détails." },
      { objective: "O3", q: "Quelles sont les trois parties du coût d'un vêtement ?", options: ["Les fournitures, votre temps et les frais fixes", "Le tissu, le bénéfice et le transport", "Le loyer, le téléphone et la nourriture", "Seulement les fournitures"], answer: 0, why: "Fournitures, temps et frais fixes forment ensemble le vrai coût ; le bénéfice s'ajoute par-dessus." },
      { objective: "O3", q: "Le coût est de GHS 200 et vous ajoutez 25 % de bénéfice. Quel est le prix ? (Montants d'exemple.)", options: ["GHS 225", "GHS 250", "GHS 275", "GHS 200"], answer: 1, why: "25 % de 200 font 50, donc le prix est de 250." },
      { objective: "O3", q: "Pourquoi compter votre propre temps dans le coût ?", options: ["C'est inutile si la boutique vous appartient", "Seul le temps des apprentis compte", "Vos heures de travail valent de l'argent ; sans elles, vous travaillez gratuitement", "Les clients demandent à le voir"], answer: 2, why: "Si votre temps n'est pas dans le prix, l'entreprise ne vous paie pas." },
      { objective: "O3", q: "Votre prix est au-dessus du marché. Quelle est une bonne première étape ?", options: ["Descendre en dessous de votre coût", "Fermer l'entreprise", "Copier les modèles d'un autre tailleur", "Chercher un modèle plus simple ou une méthode moins chère, ou des clients qui apprécient votre qualité"], answer: 3, why: "Changez votre façon de faire ou vos clients avant de rogner sur votre coût." },
      { objective: "O4", q: "Quelle est la première étape pour planifier votre semaine ?", options: ["Compter vos vraies heures de couture", "Prendre toutes les commandes qui arrivent", "Acheter plus de tissu", "Publier sur les réseaux sociaux"], answer: 0, why: "Vous ne pouvez pas planifier les commandes avant de savoir combien d'heures vous avez vraiment." },
      { objective: "O4", q: "Pourquoi fixer une date limite des commandes avant Noël ou l'Aïd ?", options: ["Pour embêter les clients", "Pour n'accepter que ce que vous pouvez finir à temps", "Pour augmenter les prix", "C'est la loi"], answer: 1, why: "Une date limite protège vos promesses pendant les semaines les plus chargées." },
      { objective: "O4", q: "Où placer l'essayage dans votre plan ?", options: ["Après la date de livraison", "Ce n'est pas utile", "Avant les finitions, avec du temps pour ajuster", "À la même heure que la livraison"], answer: 2, why: "Un essayage avant les finitions laisse le temps de faire des retouches avant la date de livraison." },
      { objective: "O5", q: "Lequel est un signe d'arnaque au mobile money ?", options: ["Votre solde qui augmente après une vente", "Un reçu venant du numéro officiel de votre opérateur", "Un client qui paie le reste", "Un inconnu qui vous demande de payer des « frais de livraison » avant une grosse commande"], answer: 3, why: "Un inconnu qui demande d'abord des frais, c'est une arnaque courante." },
      { objective: "O5", q: "À quelle fréquence écrire dans votre cahier de caisse ?", options: ["Le jour même de chaque avance, paiement ou achat", "Une fois par an", "Seulement quand il y a un problème", "Jamais ; gardez tout en tête"], answer: 0, why: "Écrire le jour même garde les comptes justes et complets." },
      { objective: "O5", q: "Vous voulez enregistrer le nom de votre entreprise au Nigeria. Où vérifier les étapes et les frais actuels ?", options: ["Auprès d'un homme à l'arrêt de bus", "Sur le site ou au bureau officiel de la Corporate Affairs Commission", "Sur une page quelconque des réseaux sociaux", "Auprès de vos clients"], answer: 1, why: "Le registre officiel donne les règles et les frais actuels ; les faux agents sont nombreux." },
      { objective: "O6", q: "Que doit montrer une liste de prix ?", options: ["Les prix de vos concurrents", "Les noms des clients", "Vos principaux vêtements avec des prix fondés sur votre calcul des coûts", "Votre cahier de caisse"], answer: 2, why: "Une liste de prix fondée sur vos coûts dit aux clients à quoi s'attendre et protège votre bénéfice." },
      { objective: "O6", q: "Les données mobiles coûtent cher à vos clients. Comment publiez-vous ?", options: ["Envoyer vingt vidéos par jour", "Ne rien publier", "Envoyer toutes les photos prises", "Partager une photo nette avec le prix et la façon de commander"], answer: 3, why: "Une bonne photo avec des informations claires suffit et économise les données." },
      { objective: "O6", q: "Qu'est-ce qui ne doit jamais apparaître dans une publication sur le vêtement d'une cliente ?", options: ["Son nom, son numéro ou ses mesures sans son accord", "Le nom du modèle", "Le prix", "La façon de commander"], answer: 0, why: "Les données privées d'une cliente lui appartiennent ; ne les partagez jamais sans son accord." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Atelier sûr", objective: "O1", notYet: "Aucun risque noté, ou des risques notés mais aucun corrigé.", meets: "Au moins trois risques trouvés et corrigés, comme une boîte à épingles, un support sûr pour le fer et des passages libres.", exceeds: "Tous les risques notés et corrigés, et les règles apprises aux apprentis." },
      { name: "Fiche de commande", objective: "O2", notYet: "Il manque sur la fiche le prix, l'avance, le reste à payer ou la date de livraison.", meets: "La fiche a le modèle, les mesures avec unités, le tissu, le prix, l'avance, le reste à payer, la date d'essayage et la date de livraison, et la place pour les deux signatures.", exceeds: "Utilisée avec un vrai client, relue et partagée en copie ou en photo." },
      { name: "Liste de prix calculée", objective: "O3", notYet: "Les prix sont copiés ou devinés, sans coût calculé.", meets: "Au moins cinq vêtements, chacun avec fournitures, temps et frais fixes calculés et un prix au-dessus du coût.", exceeds: "Chaque prix est aussi comparé avec le marché local, avec une note sur ce qu'il faut changer s'il est trop élevé." },
      { name: "Plan de la semaine", objective: "O4", notYet: "Le plan prévoit plus d'heures de travail que d'heures disponibles, ou n'a pas de dates de livraison.", meets: "Commandes placées par date de livraison dans les vraies heures, avec l'essayage avant les finitions et un peu de temps libre.", exceeds: "Prévoit une date limite des commandes pour la prochaine haute saison et la façon d'en informer les clients." },
      { name: "Cahier de caisse", objective: "O5", notYet: "Aucun écrit, ou argent de l'entreprise et de la famille mélangés.", meets: "Une semaine d'avances, de paiements et de dépenses avec un solde juste, et la règle du code PIN écrite.", exceeds: "Le solde est comparé avec le liquide et le mobile money réels, et le registre du pays de l'apprenant est noté." },
      { name: "Montrer le travail", objective: "O6", notYet: "Pas de photo, ou une photo sans prix ni façon de commander.", meets: "Une photo nette à la lumière du jour avec ce que c'est, le prix, le délai et comment commander, sans données privées d'un client.", exceeds: "Ajoutée à un catalogue ou à une liste de prix, avec l'accord noté pour tout client présent sur la photo." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui utilisent une fiche de commande pour chaque travail dans les 30 jours (enquête de suivi)",
      "Apprenants qui augmentent ou corrigent au moins un prix après en avoir calculé le coût",
      "Moins de commandes en retard et de disputes avec les clients signalées à la prochaine haute saison",
      "Apprenants qui enregistrent un nom commercial ou ouvrent un compte professionnel dans les 6 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier, un stylo et une calculatrice (ou celle du téléphone)",
      "Un mètre ruban et l'atelier de l'apprenant à inspecter",
      "Un téléphone avec appareil photo pour la publication finale (un téléphone simple et des photos imprimées conviennent aussi)",
      "Environ 60 à 90 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Fonctionne bien avec les associations de tailleurs, les groupements de femmes et de jeunes, les centres de formation professionnelle et les programmes d'apprentissage ; faites le test de départ ensemble.",
      "Demandez aux apprenants d'apporter leurs vrais prix et une vraie commande ; c'est en calculant le coût de leur propre vêtement que la plupart découvrent qu'ils ne demandent pas assez.",
      "Utilisez la monnaie locale et les fêtes locales (Noël, Aïd, Tabaski, Pâques, saison des mariages) dans chaque exemple.",
      "Ne demandez jamais aux apprenants de montrer leur code PIN, leur solde ou leurs numéros privés au groupe ; entraînez-vous avec des montants d'exemple.",
      "Les règles et les frais d'enregistrement changent : vérifiez le site officiel du registre national avant la séance et ne partagez que ce qu'il indique.",
      "Notez la tâche finale avec la grille d'évaluation et faites un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
