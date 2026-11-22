"use strict";

// Koach Learn course (French translation of africa-life/afr-afcfta-cross-border-trade.js). See scripts/koachlearn-courses/README.md, "Translations".

const AFCFTA = { name: "Secrétariat de l'AfCFTA (ZLECAf) : à propos de l'AfCFTA (55 pays de l'UA, échanges depuis le 1er janvier 2021, Secrétariat à Accra)", url: "https://au-afcfta.org/about/" };
const GTI = { name: "Secrétariat de l'AfCFTA : Initiative de commerce guidé (lancée le 7 octobre 2022)", url: "https://au-afcfta.org/operational-instruments/guided-trade-initiative/" };
const ROO = { name: "Secrétariat de l'AfCFTA : règles d'origine (Annexe 2 et Manuel des règles d'origine)", url: "https://au-afcfta.org/operational-instruments/rules-of-origin/" };
const NTB = { name: "Mécanisme de l'AfCFTA pour signaler, suivre et éliminer les obstacles non tarifaires", url: "https://www.tradebarriers.africa/" };
const PAPSS = { name: "Système panafricain de paiement et de règlement (PAPSS)", url: "https://papss.com/" };
const ETLS = { name: "Schéma de libéralisation des échanges de la CEDEAO (SLE / ETLS), Commission de la CEDEAO", url: "https://etls.ecowas.int/" };
const COMESA = { name: "COMESA : commerce et douanes (y compris le Régime commercial simplifié pour les petits commerçants)", url: "https://www.comesa.int/trade-customs-division-2/" };

module.exports = {
  id: "afr-afcfta-cross-border-trade-fr",
  lang: "fr",
  translationOf: "afr-afcfta-cross-border-trade",
  category: "Africa: Life and Work",
  name: "Vendre de l'autre côté de la frontière : les petits commerçants et l'AfCFTA",
  skills: "Expliquer l'AfCFTA et les accords commerciaux régionaux, Préparer les papiers pour un passage officiel de la frontière, Calculer le coût d'un lot dans deux monnaies, Se faire payer en toute sécurité d'un pays à l'autre, Signaler les paiements non officiels et les obstacles au commerce",
  outcome: "préparer une vente légale, sûre et rentable dans un autre pays : vérifier les règles qui s'appliquent à vos marchandises, préparer les bons papiers, calculer le coût total et le prix dans les deux monnaies, choisir un moyen sûr de vous faire payer, et savoir quoi faire si quelqu'un vous demande un paiement non officiel.",
  about: [
    "Ce cours s'adresse aux petits commerçants, aux femmes du marché, aux artisans et aux petits fabricants de toute l'Afrique qui vendent, ou veulent vendre, dans un pays voisin : du beurre de karité de Tamale à Ouagadougou, du tissu de Lagos à Cotonou, des chaussures de Nairobi à Kampala ou des cosmétiques de Dakar à Bamako.",
    "Le chapitre 1 explique la Zone de libre-échange continentale africaine (AfCFTA selon son sigle anglais, ou ZLECAf) et les accords régionaux qui aident déjà les petits commerçants, ainsi que les papiers nécessaires à un passage officiel de la frontière. Le chapitre 2 parle d'argent : le coût total d'un lot, comment se faire payer en toute sécurité, et quoi faire face aux paiements non officiels et aux retards.",
    "Les droits de douane, les frais, les formulaires et les plafonds varient selon les pays et changent avec le temps. Ce cours ne donne aucun chiffre de droits ou de frais. Il vous dit à quel bureau vous adresser, et vous vérifiez avant de voyager. Tous les montants sont de simples exemples. Chaque leçon dure environ cinq minutes et se termine par une activité. Un contrôle rapide suit chaque leçon, un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Rédigez un plan de commerce transfrontalier d'une page pour un produit et un itinéraire (le vôtre, ou un exemple comme du beurre de karité de Tamale, au Ghana, à Ouagadougou, au Burkina Faso) : le produit et le poste frontière officiel, les règles que vous avez vérifiées et où, la liste des papiers que vous emporterez, le coût total et votre prix de vente dans les deux monnaies, comment vous serez payé et comment vous vous protégerez des arnaques, et ce que vous ferez et à qui vous le signalerez si quelqu'un vous demande un paiement non officiel.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits commerçants, femmes du marché, artisans et petits fabricants des villes et des zones frontalières de toute l'Afrique (Kenya, Nigeria, Ghana, Sénégal, Côte d'Ivoire, Burkina Faso, Cameroun et ailleurs) qui vendent ou veulent vendre dans un pays voisin.",
    startingPoint: "Beaucoup font déjà du commerce entre pays, souvent de manière informelle, en passant des marchandises aux postes frontières ou en passant par des transporteurs. Peu connaissent l'AfCFTA ou leur accord régional, les papiers qui donnent droit à des droits de douane réduits, la façon de calculer le coût d'un lot dans deux monnaies, ou l'endroit où signaler les paiements non officiels.",
    gap: "Les commerçants informels paient souvent des sommes non officielles, perdent des marchandises à la frontière, vendent à perte après le change et le transport, et tombent dans des arnaques au paiement. Connaître les règles, avoir les bons papiers, bien calculer ses coûts et signaler les obstacles leur permet de commercer légalement, de garder plus de bénéfice et de se développer.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme de commerce est expliqué",
      "Appareils : un téléphone Android simple avec des données chères ; une calculatrice et un cahier",
      "Les règles, les droits, les frais et les plafonds varient selon les pays et changent : les apprenants vérifient auprès des bureaux de douane et de commerce ; le cours ne donne aucun chiffre de droits ou de frais",
      "Sécurité de l'argent : on ne partage ni code PIN ni mot de passe ; aucun conseil en investissement",
      "Le cours est aussi traduit en français et en arabe, donc les exemples incluent des commerçants francophones et d'Afrique du Nord"
    ],
    prerequisites: "Savoir lire un peu et utiliser un téléphone. Les cours « Utiliser le mobile money en toute sécurité » et « Enregistrer et gérer une petite entreprise en Afrique » sont utiles mais pas obligatoires."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir de votre produit et du pays où vous voulez vendre", action: "expliquer ce que l'AfCFTA et votre accord commercial régional peuvent apporter à un petit commerçant et nommer les bureaux où vérifier les règles en vigueur", standard: "en nommant au moins deux bureaux ou sites web officiels" },
    { id: "O2", condition: "Avant de faire passer des marchandises par un poste frontière officiel", action: "dresser la liste des papiers et des étapes nécessaires pour vos marchandises, comme les reçus, une facture, une déclaration en douane et un certificat d'origine", standard: "en faisant vérifier chaque papier de la liste par la douane ou un bureau d'information commerciale" },
    { id: "O3", condition: "À partir des coûts d'un lot et d'un taux de change", action: "calculer le coût total par article et un prix de vente dans les deux monnaies", standard: "en incluant tous les coûts et un bénéfice, avec des calculs justes" },
    { id: "O4", condition: "Quand un acheteur d'un autre pays vous paie", action: "choisir un moyen sûr de recevoir l'argent et repérer les signes d'une arnaque au paiement", standard: "sans jamais partager un code PIN ni envoyer la marchandise avant que l'argent soit confirmé" },
    { id: "O5", condition: "Quand quelqu'un à la frontière ou près d'elle vous demande un paiement non officiel ou retient vos marchandises", action: "décrire les étapes sûres à suivre et signaler le problème comme un obstacle non tarifaire", standard: "en nommant le canal officiel de signalement et les faits à noter" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les règles et les papiers",
      lessons: [
        {
          title: "Ce que l'AfCFTA change pour un petit commerçant",
          objectives: ["O1"],
          minutes: 5,
          goal: "Expliquer avec vos propres mots ce qu'est l'AfCFTA et comment elle peut aider votre activité.",
          text: [
            "La Zone de libre-échange continentale africaine (AfCFTA selon son sigle anglais, aussi appelée ZLECAf) est un accord entre les 55 pays de l'Union africaine pour créer un grand marché d'environ 1,3 milliard de personnes. Les échanges dans ce cadre ont commencé le 1er janvier 2021. Son Secrétariat est à Accra, au Ghana.",
            "L'idée principale : avec le temps, les pays qui y ont adhéré baissent ou suppriment les droits d'importation sur les produits fabriqués dans les autres pays membres, et travaillent à supprimer d'autres obstacles, comme les longs retards et les papiers en trop. Pour obtenir le droit réduit, vos marchandises doivent « être originaires » d'un pays membre selon les règles d'origine. Les produits simplement achetés hors d'Afrique et revendus ne sont pas concernés.",
            "Tous les pays ne l'appliquent pas de la même façon ni au même rythme, et tous les produits ne sont pas encore couverts. L'Initiative de commerce guidé, lancée le 7 octobre 2022, a lancé de vrais échanges selon les règles de l'AfCFTA dans un groupe de pays. Donc, avant de compter sur un droit réduit, renseignez-vous auprès de votre administration des douanes, de votre ministère du Commerce ou de la chambre de commerce, et sur le site de l'AfCFTA.",
            "Même si l'AfCFTA ne fonctionne pas encore pour votre produit, les accords régionaux peuvent déjà vous aider. C'est la prochaine leçon."
          ],
          words: [["AfCFTA (ZLECAf)", "la Zone de libre-échange continentale africaine : un accord pour faire de l'Afrique un grand marché, avec des droits de douane plus bas et moins d'obstacles."], ["Droit d'importation (tarif douanier)", "une taxe qu'un pays fait payer sur les marchandises qui entrent depuis un autre pays."], ["Règles d'origine", "les règles qui décident de quel pays un produit « est originaire », pour qu'il puisse obtenir le droit réduit."]],
          slides: [
            { title: "Ce qu'est l'AfCFTA", bullets: ["55 pays de l'Union africaine, un grand marché", "Environ 1,3 milliard de personnes", "Échanges depuis le 1er janvier 2021 ; Secrétariat à Accra"] },
            { title: "Ce qu'elle peut faire pour vous", bullets: ["Droits d'importation réduits ou nuls sur les produits des pays membres", "Moins de retards et de papiers en trop avec le temps", "De plus grands marchés juste à côté"] },
            { title: "La condition", bullets: ["Les marchandises doivent respecter les règles d'origine", "Les pays l'appliquent à des rythmes différents", "Tous les produits ne sont pas encore couverts"] },
            { title: "Vérifiez avant de compter dessus", bullets: ["Votre administration des douanes", "Ministère du Commerce ou chambre de commerce", "au-afcfta.org"] }
          ],
          sources: [AFCFTA, GTI, ROO],
          tryIt: "Notez un produit que vous vendez ou pourriez vendre, et un pays voisin où vous pourriez le vendre. Puis notez deux endroits où vous vérifierez si l'AfCFTA réduit le droit sur ce produit.",
          youCanNow: "dire ce qu'est l'AfCFTA, comment elle peut aider un petit commerçant et où vérifier si elle s'applique à vos marchandises.",
          quickCheck: [
            { objective: "O1", q: "Quel est le but principal de l'AfCFTA pour les commerçants ?", options: ["Fixer les prix de toutes les marchandises en Afrique", "Réduire les droits et les obstacles sur les produits fabriqués dans les pays membres", "Créer une seule monnaie pour toute l'Afrique", "Supprimer tous les contrôles aux frontières"], answer: 1, why: "L'AfCFTA vise à réduire les droits et les obstacles sur les produits originaires des pays membres ; elle ne fixe pas les prix, ne crée pas de monnaie unique et ne supprime pas les contrôles." },
            { objective: "O1", q: "Un commerçant achète des coques de téléphone fabriquées hors d'Afrique et veut les revendre dans le pays voisin grâce à l'AfCFTA. Qu'est-ce qui est vrai ?", options: ["Il ne paiera jamais de droit", "L'AfCFTA ne couvre que la nourriture", "Il n'y a probablement pas droit, car les marchandises n'ont pas été fabriquées dans un pays membre", "Il n'a besoin d'aucun papier"], answer: 2, why: "Selon les règles d'origine, les produits simplement achetés hors d'Afrique et revendus ne sont pas originaires d'un pays membre." }
          ]
        },
        {
          title: "Les accords régionaux qui aident déjà les petits commerçants",
          objectives: ["O1"],
          minutes: 5,
          goal: "Trouver l'accord commercial régional de votre itinéraire et le bureau qui l'explique.",
          text: [
            "Avant l'AfCFTA, les communautés économiques régionales d'Afrique facilitaient déjà le commerce. En Afrique de l'Ouest, le Schéma de libéralisation des échanges de la CEDEAO (SLE, ou ETLS en anglais) permet aux produits agréés des pays de la CEDEAO de circuler entre les États membres avec des droits réduits ou sans droits. Le Sénégal, le Mali, la Côte d'Ivoire, le Ghana et le Nigeria sont tous membres de la CEDEAO.",
            "En Afrique de l'Est et australe, la Communauté d'Afrique de l'Est (EAC) et le COMESA (Marché commun de l'Afrique orientale et australe) ont des Régimes commerciaux simplifiés pour les petits commerçants. Ils permettent à de petits envois de produits figurant sur une liste de passer avec des papiers plus simples, comme un certificat d'origine simplifié. Certains postes frontières ont des bureaux d'information commerciale où des agents expliquent gratuitement les règles aux petits commerçants.",
            "Les plafonds de valeur, la liste des produits et les formulaires sont fixés par chaque accord et peuvent changer. Renseignez-vous au bureau de douane de votre poste frontière, au bureau d'information commerciale ou auprès de votre association de commerçants transfrontaliers. Notez ce qu'on vous dit, avec la date et le nom de l'agent.",
            "L'Afrique centrale (par exemple le Cameroun) et l'Afrique du Nord (par exemple le Maroc, l'Égypte et la Tunisie) ont aussi leurs propres accords régionaux. Demandez à votre administration des douanes lesquels s'appliquent à votre itinéraire."
          ],
          steps: ["Notez votre itinéraire : depuis quel pays, par quel poste frontière, vers quel pays.", "Trouvez la communauté régionale dont les deux pays font partie (par exemple CEDEAO, EAC ou COMESA).", "Demandez au bureau de douane, au bureau d'information commerciale ou à l'association de commerçants quel accord vos marchandises peuvent utiliser.", "Demandez : quels produits sont concernés, quel plafond de valeur s'applique, et quel formulaire ou certificat il vous faut.", "Notez les réponses avec la date et le nom de l'agent."],
          words: [["Communauté économique régionale", "un groupe de pays voisins qui travaillent ensemble sur le commerce, par exemple la CEDEAO, l'EAC ou le COMESA."], ["Régime commercial simplifié", "un dispositif de l'EAC ou du COMESA qui permet aux petits commerçants de passer de petites quantités de produits d'une liste avec des papiers plus simples."], ["Envoi", "un chargement ou un lot de marchandises que vous expédiez ou transportez."]],
          slides: [
            { title: "Les accords régionaux aident déjà", bullets: ["Afrique de l'Ouest : Schéma de libéralisation des échanges de la CEDEAO (SLE / ETLS)", "Afrique de l'Est et australe : Régimes commerciaux simplifiés de l'EAC et du COMESA", "Afrique centrale et du Nord : leurs propres accords"] },
            { title: "Des règles simplifiées pour les petits commerçants", bullets: ["Petites quantités de produits d'une liste", "Papiers plus simples, comme un certificat d'origine simplifié", "Bureaux d'information commerciale à certains postes frontières"] },
            { title: "Demandez, et notez", bullets: ["Quels produits sont concernés ? Quel plafond de valeur ?", "Quel formulaire ou certificat ?", "Notez la date et le nom de l'agent"] }
          ],
          sources: [ETLS, COMESA],
          tryIt: "Pour votre itinéraire de la leçon 1, notez la communauté régionale dont les deux pays font partie, et trois questions que vous poserez au bureau de douane ou au bureau d'information commerciale.",
          youCanNow: "trouver l'accord régional de votre itinéraire et poser les bonnes questions au bon bureau.",
          quickCheck: [
            { objective: "O1", q: "Quel accord s'applique le plus probablement à une commerçante qui transporte du beurre de karité du Ghana au Burkina Faso ?", options: ["Le Régime commercial simplifié du COMESA", "L'Union douanière de l'EAC", "Aucun accord", "Le Schéma de libéralisation des échanges de la CEDEAO"], answer: 3, why: "Le Ghana et le Burkina Faso sont tous deux dans la zone CEDEAO, en Afrique de l'Ouest : c'est donc le SLE qu'il faut demander." },
            { objective: "O1", q: "Vous voulez connaître le plafond de valeur d'un certificat simplifié sur votre itinéraire. Que faites-vous ?", options: ["Demander au bureau de douane ou au bureau d'information commerciale du poste frontière, et noter la réponse", "Deviner, car c'est pareil partout", "Demander au chauffeur du car", "Prendre le chiffre du passage d'un ami l'an dernier"], answer: 0, why: "Les plafonds varient selon l'accord et changent : c'est à la douane ou au bureau d'information commerciale qu'il faut demander." }
          ]
        },
        {
          title: "Les papiers à avoir à un poste frontière officiel",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dresser la liste des papiers et des étapes pour faire passer vos marchandises par un poste frontière officiel.",
          text: [
            "Passer par un poste frontière officiel vous protège. Vos marchandises sont enregistrées, vous pouvez demander des droits réduits grâce aux accords, et vous avez des preuves en cas de problème. Les marchandises passées en contrebande par des chemins non officiels peuvent être saisies, et vous n'avez aucune protection.",
            "Les papiers courants sont : votre pièce d'identité ou votre passeport ; un reçu ou une facture qui montre ce que vous avez acheté ou fabriqué et sa valeur ; une liste de vos marchandises (liste de colisage) ; une déclaration en douane, que l'agent ou un transitaire en douane vous aide à remplir ; et un certificat d'origine quand vous voulez un droit réduit. Les aliments, les plantes, les animaux, les médicaments et les cosmétiques peuvent aussi exiger un certificat sanitaire, phytosanitaire (santé des plantes) ou d'autorisation du produit.",
            "Certains produits sont limités ou interdits. Renseignez-vous avant d'acheter votre stock. Un transitaire peut vous aider pour les gros chargements, mais demandez toujours un reçu pour chaque paiement officiel, et gardez des copies de tous les papiers sur votre téléphone et sur papier.",
            "Exemple : Awa vend du savon artisanal de Dakar à Bamako. Elle demande au bureau de douane quels papiers il lui faut, obtient sa facture et un certificat d'origine, et garde une photo de chaque papier. À la frontière, elle paie seulement ce qui figure sur le reçu officiel."
          ],
          steps: ["Demandez à la douane quels papiers il faut pour vos marchandises, et si certaines sont limitées.", "Obtenez des reçus ou des factures pour vos marchandises, et faites une liste de colisage.", "Obtenez un certificat d'origine si vous voulez un droit réduit grâce à un accord.", "Renseignez-vous sur les certificats sanitaires, phytosanitaires ou de produit pour les aliments, les plantes, les animaux et les cosmétiques.", "Passez par le poste officiel, remplissez la déclaration en douane et gardez un reçu pour chaque paiement.", "Gardez une copie de chaque papier sur papier et en photo sur votre téléphone."],
          words: [["Déclaration en douane", "un formulaire qui indique à la douane quelles marchandises vous transportez et leur valeur."], ["Certificat d'origine", "un papier qui montre de quel pays viennent vos marchandises, pour obtenir un droit réduit."], ["Transitaire en douane", "une personne ou une entreprise agréée qui aide les commerçants à remplir les papiers de douane, contre paiement."], ["Certificat phytosanitaire", "un certificat de santé des plantes pour les plantes, les semences, les céréales, les fruits et les légumes."]],
          slides: [
            { title: "Pourquoi passer par le poste officiel", bullets: ["Marchandises enregistrées ; droits réduits possibles", "Des preuves en cas de problème", "Les marchandises de contrebande peuvent être saisies"] },
            { title: "Papiers courants", bullets: ["Pièce d'identité ou passeport ; reçu ou facture", "Liste de colisage ; déclaration en douane", "Certificat d'origine pour un droit réduit"] },
            { title: "Papiers en plus pour certains produits", bullets: ["Aliments, plantes, animaux : certificats sanitaires ou phytosanitaires", "Cosmétiques et médicaments : autorisation du produit", "Certains produits sont limités : renseignez-vous avant d'acheter"] },
            { title: "Protégez-vous", bullets: ["Un reçu pour chaque paiement officiel", "Des copies sur papier et en photo sur votre téléphone", "Un transitaire pour les gros chargements"] }
          ],
          sources: [ROO, ETLS],
          tryIt: "Faites une liste de contrôle des papiers pour votre produit et votre itinéraire : chaque papier dont vous pensez avoir besoin, avec une case à cocher quand la douane ou le bureau d'information commerciale l'a confirmé.",
          youCanNow: "dresser la liste des papiers et des étapes pour faire passer vos marchandises par un poste frontière officiel, et garder la preuve de chaque paiement.",
          quickCheck: [
            { objective: "O2", q: "Quel papier vous aide à demander un droit réduit grâce à un accord commercial ?", options: ["Un ticket de car", "Un certificat d'origine", "Un reçu de téléphone", "Un diplôme scolaire"], answer: 1, why: "Un certificat d'origine montre que les marchandises viennent d'un pays membre, et c'est de cela que dépend le droit réduit." },
            { objective: "O2", q: "Vous payez des frais à la douane. Que devez-vous recevoir ?", options: ["Rien ; les frais sont toujours informels", "Une poignée de main", "Un reçu officiel, que vous gardez", "La promesse de vous revoir la prochaine fois"], answer: 2, why: "Un reçu officiel prouve que les frais sont réels et vous protège en cas de problème." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les règles et les papiers",
        questions: [
          { objective: "O1", q: "Où devez-vous vérifier si l'AfCFTA réduit le droit sur votre produit ?", options: ["Dans une publication sur les réseaux sociaux", "Auprès du cousin de l'acheteur", "Auprès de votre administration des douanes et sur le site de l'AfCFTA", "Auprès de n'importe quel commerçant du marché"], answer: 2, why: "La douane et le Secrétariat de l'AfCFTA donnent la réponse officielle et à jour." },
          { objective: "O1", q: "Une commerçante transporte des chaussures de Nairobi à Kampala. Sur quel régime simplifié doit-elle se renseigner ?", options: ["Le Schéma de libéralisation des échanges de la CEDEAO", "Il n'en existe aucun en Afrique de l'Est", "Un régime européen", "Le Régime commercial simplifié de l'EAC ou du COMESA"], answer: 3, why: "Le Kenya et l'Ouganda sont en Afrique de l'Est, où l'EAC et le COMESA ont des régimes simplifiés pour les petits commerçants." },
          { objective: "O2", q: "Pourquoi un poste frontière officiel vaut-il mieux qu'un chemin de brousse ?", options: ["Vos marchandises sont enregistrées et vous pouvez demander des droits réduits et une protection", "C'est toujours plus rapide", "Personne ne contrôle rien", "C'est toujours gratuit"], answer: 0, why: "Les postes officiels enregistrent les marchandises, vous permettent d'utiliser les accords commerciaux et vous donnent des preuves et une protection." },
          { objective: "O2", q: "Kofi va transporter du poisson séché au Togo. De quel papier en plus pourrait-il avoir besoin ?", options: ["Un permis pour un camion qu'il ne conduit pas", "Un certificat sanitaire pour les aliments", "Un bulletin scolaire", "Rien de plus pour la nourriture"], answer: 1, why: "Les aliments et les produits animaux ou végétaux exigent souvent un certificat sanitaire ou phytosanitaire ; il doit se renseigner à la douane." },
          { objective: "O2", q: "Quelle est la meilleure façon de garder vos papiers ?", options: ["Seulement dans votre tête", "Les confier au transporteur", "Les jeter après la frontière", "Sur papier et en photo sur votre téléphone"], answer: 3, why: "Avec les deux copies, vous avez encore une preuve si l'une est perdue." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Argent, paiement et problèmes à la frontière",
      lessons: [
        {
          title: "Calculer le coût d'un lot dans deux monnaies",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculer le coût total par article et un prix de vente dans les deux monnaies.",
          text: [
            "Beaucoup de commerçants perdent de l'argent en vendant à l'étranger parce qu'ils ne comptent que le prix des marchandises. Comptez tout : les marchandises, l'emballage, le transport jusqu'à la frontière et au-delà, le chargement, les droits et frais officiels (vérifiés auprès de la douane), le transitaire, le stockage, votre téléphone et vos données, vos repas et votre logement pendant le voyage, et un petit supplément pour les pertes.",
            "Additionnez tous les coûts et divisez par le nombre d'articles que vous pouvez vraiment vendre. C'est votre coût par article. Ajoutez votre bénéfice pour obtenir un prix de vente. Puis convertissez-le dans la monnaie de l'acheteur au taux de change du jour, et vérifiez le prix de produits semblables sur ce marché.",
            "Exemple (les chiffres sont de simples exemples) : Ama achète et emballe 100 pots de beurre de karité à Tamale pour 2 000 GHS en tout. Le transport, le chargement et le logement coûtent 600 GHS. Frais officiels vérifiés à la douane : 200 GHS. Total 2 800 GHS, soit 28 GHS par pot. Elle ajoute 7 GHS de bénéfice : 35 GHS. Si le taux du jour était de 1 GHS = 40 XOF, cela fait 1 400 XOF par pot. Elle vérifie que les boutiques de Ouagadougou vendent des pots semblables à peu près à ce prix.",
            "Les taux de change bougent tous les jours. Vérifiez le taux le jour où vous vendez et le jour où vous changez l'argent, et mettez-vous d'accord avec votre acheteur sur la monnaie du prix."
          ],
          steps: ["Notez tous les coûts du lot, de l'achat à la vente.", "Additionnez-les pour obtenir le coût total.", "Divisez par le nombre d'articles que vous pouvez vraiment vendre : coût par article.", "Ajoutez votre bénéfice : prix de vente dans votre monnaie.", "Convertissez-le dans la monnaie de l'acheteur au taux du jour, et comparez avec le prix du marché là-bas."],
          words: [["Taux de change", "combien d'une monnaie on obtient pour une unité d'une autre, par exemple combien de XOF pour 1 GHS."], ["Coût par article", "le coût total d'un lot divisé par le nombre d'articles que vous pouvez vendre."], ["Coût rendu", "le coût total des marchandises une fois arrivées sur le marché de l'acheteur, transport et droits compris."]],
          slides: [
            { title: "Comptez tous les coûts", bullets: ["Marchandises, emballage, transport, chargement", "Droits et frais officiels, transitaire, stockage", "Téléphone, repas, logement, et un peu pour les pertes"] },
            { title: "Du coût au prix", bullets: ["Coût total / articles que vous pouvez vendre = coût par article", "Coût par article + bénéfice = prix de vente", "Puis convertissez dans la monnaie de l'acheteur"] },
            { title: "Exemple (chiffres donnés à titre d'exemple)", bullets: ["100 pots : 2 800 GHS en tout = 28 GHS chacun", "Plus 7 GHS de bénéfice = 35 GHS", "À 1 GHS = 40 XOF : 1 400 XOF par pot"] },
            { title: "Surveillez le taux", bullets: ["Les taux changent tous les jours", "Vérifiez le jour de la vente et du change", "Mettez-vous d'accord sur la monnaie avec l'acheteur"] }
          ],
          tryIt: "Calculez le coût d'un lot de votre produit pour votre itinéraire : notez tous les coûts, trouvez le coût par article, ajoutez votre bénéfice et écrivez le prix dans les deux monnaies au taux du jour.",
          youCanNow: "calculer le coût total par article d'un lot vendu à l'étranger et un prix de vente dans les deux monnaies.",
          quickCheck: [
            { objective: "O3", q: "Un lot de 50 sacs coûte 250 000 NGN au total, transport et frais compris. Quel est le coût par sac ?", options: ["500 NGN", "50 000 NGN", "2 500 NGN", "5 000 NGN"], answer: 3, why: "250 000 divisé par 50 sacs donne 5 000 par sac." },
            { objective: "O3", q: "Quel coût les commerçants oublient-ils le plus souvent ?", options: ["Leur propre logement, leurs repas et les pertes du voyage", "Le prix des marchandises", "Le prix de vente", "Le nombre d'articles"], answer: 0, why: "Les coûts du voyage, comme le logement, les repas et les pertes, s'oublient facilement et mangent le bénéfice." }
          ]
        },
        {
          title: "Se faire payer en toute sécurité d'un pays à l'autre",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choisir un moyen sûr de recevoir le paiement d'un acheteur d'un autre pays et repérer une arnaque au paiement.",
          text: [
            "L'argent liquide à la frontière est risqué : on peut vous voler, et changer de l'argent dans la rue peut vous donner un mauvais taux ou de faux billets. Il existe des moyens plus sûrs : un virement bancaire, un service de mobile money qui fait des transferts entre les pays de votre itinéraire, et des systèmes de paiement comme le PAPSS (Système panafricain de paiement et de règlement), qui permet à celui qui paie dans un pays africain de payer dans sa monnaie locale et à celui qui reçoit de recevoir dans la sienne, par les banques et les prestataires de paiement qui y ont adhéré. Demandez à votre banque ou à votre opérateur de mobile money ce qui fonctionne sur votre itinéraire et combien cela coûte.",
            "Avec un nouvel acheteur, demandez un acompte avant d'expédier, ou le paiement complet avant de remettre la marchandise. Vérifiez que l'argent est vraiment arrivé sur votre compte en consultant vous-même votre solde, et non en vous fiant à un message envoyé par l'acheteur.",
            "Signes d'une arnaque : un acheteur qui envoie un faux message ou une fausse capture d'écran « paiement reçu » ; quelqu'un qui dit avoir envoyé trop par erreur et vous demande de renvoyer la différence ; toute personne qui demande votre code PIN, votre mot de passe ou un code envoyé sur votre téléphone ; et un acheteur qui vous presse de livrer avant que vous ayez vérifié. Une vraie banque ou un vrai opérateur de mobile money ne vous demande jamais votre code PIN."
          ],
          steps: ["Mettez-vous d'accord par écrit sur le prix, la monnaie et le moyen de paiement.", "Demandez à un nouvel acheteur un acompte ou le paiement complet d'abord.", "Consultez vous-même votre solde pour confirmer que l'argent est arrivé.", "Seulement alors, remettez la marchandise et donnez un reçu.", "Ne partagez jamais votre code PIN, votre mot de passe ni un code envoyé sur votre téléphone."],
          words: [["PAPSS", "le Système panafricain de paiement et de règlement : il permet de faire des paiements entre pays africains en monnaies locales, par les banques et les prestataires de paiement qui y ont adhéré."], ["Acompte", "une partie du prix payée avant l'envoi de la marchandise."], ["Code PIN", "le numéro secret de votre carte bancaire ou de votre compte de mobile money. Ne le partagez jamais."]],
          slides: [
            { title: "Plus sûr que le liquide à la frontière", bullets: ["Virement bancaire", "Mobile money entre les pays de votre itinéraire", "PAPSS : payer et recevoir en monnaies locales via les banques"] },
            { title: "Soyez payé avant de livrer", bullets: ["Nouvel acheteur : acompte ou paiement complet d'abord", "Consultez vous-même votre solde", "Puis remettez la marchandise et donnez un reçu"] },
            { title: "Signes d'arnaque", bullets: ["Faux message ou fausse capture « paiement reçu »", "« J'ai envoyé trop, renvoyez-moi la différence »", "Demande votre code PIN ou un code ; vous presse"] },
            { title: "À retenir", bullets: ["Un vrai opérateur ne demande jamais votre code PIN", "Ne partagez jamais un code reçu sur votre téléphone"] }
          ],
          sources: [PAPSS],
          tryIt: "Écrivez en trois lignes la règle de paiement de votre activité : quel moyen vous acceptez, quand vous remettez la marchandise et comment vous vérifiez que l'argent est arrivé. Demandez à votre banque ou à votre opérateur de mobile money quel service entre pays fonctionne sur votre itinéraire.",
          youCanNow: "choisir un moyen sûr de vous faire payer par un acheteur d'un autre pays et repérer les signes d'une arnaque au paiement.",
          quickCheck: [
            { objective: "O4", q: "Un nouvel acheteur à Abidjan envoie une capture d'écran disant qu'il a payé. Que faites-vous avant d'envoyer la marchandise ?", options: ["Envoyer la marchandise tout de suite", "Consulter votre propre solde pour confirmer que l'argent est arrivé", "Lui demander une autre capture d'écran", "Lui envoyer votre code PIN pour qu'il vérifie"], answer: 1, why: "Les captures d'écran peuvent être fausses ; seul votre propre solde prouve que l'argent est arrivé." },
            { objective: "O4", q: "Un acheteur dit qu'il a envoyé trop et vous demande de renvoyer la différence. De quoi s'agit-il le plus probablement ?", options: ["D'un remboursement normal", "D'une erreur de la banque à corriger vite", "D'une arnaque courante : vérifiez votre solde et parlez à votre opérateur", "D'une taxe"], answer: 2, why: "« J'ai envoyé trop, renvoyez-moi la différence » est une arnaque bien connue ; vérifiez votre solde et appelez le numéro officiel de votre opérateur." }
          ]
        },
        {
          title: "Paiements non officiels, retards et votre plan de commerce",
          objectives: ["O5"],
          minutes: 6,
          goal: "Décrire les étapes sûres à suivre quand on vous demande un paiement non officiel, et le signaler comme un obstacle non tarifaire.",
          text: [
            "Un obstacle non tarifaire (ONT) est tout ce qui, en dehors d'un droit de douane, rend le commerce plus difficile : paiements non officiels aux barrages, longs retards, papiers qui ne sont pas prévus par les règles, ou marchandises retenues sans raison. L'AfCFTA a un système en ligne, tradebarriers.africa, où tout commerçant, y compris les commerçants informels, les femmes et les jeunes, peut signaler un ONT. Les signalements sont transmis aux points focaux nationaux et au Secrétariat de l'AfCFTA pour être suivis.",
            "Si quelqu'un vous demande de l'argent sans reçu : restez calme et poli, et pensez d'abord à votre sécurité. Demandez le montant officiel et un reçu. Demandez à parler au responsable du poste ou au bureau d'information commerciale. Ne vous disputez pas d'une manière qui vous met en danger.",
            "Ensuite, notez les faits : date, heure, lieu, ce qu'on vous a demandé, le montant, et tout nom ou numéro de matricule que vous avez vu. Signalez-le sur tradebarriers.africa (en ligne ou par son option sur téléphone mobile), au service des plaintes de votre administration des douanes, ou par votre association de commerçants. Les commerçantes victimes de harcèlement peuvent aussi demander de l'aide à leur association ou à un groupement de femmes commerçantes.",
            "Maintenant, rassemblez tout. Votre plan de commerce transfrontalier contient : le produit et le poste frontière, les règles vérifiées, vos papiers, votre coût et votre prix dans deux monnaies, comment vous êtes payé, et ce que vous ferez face aux paiements non officiels."
          ],
          steps: ["Restez calme et poli ; votre sécurité passe d'abord.", "Demandez le montant officiel et un reçu, ou le responsable du poste ou le bureau d'information commerciale.", "Notez les faits : date, heure, lieu, montant, nom ou numéro de matricule.", "Signalez-le sur tradebarriers.africa, à la douane ou par votre association de commerçants.", "Ajoutez ces étapes à votre plan de commerce transfrontalier."],
          words: [["Obstacle non tarifaire (ONT)", "tout ce qui, en dehors d'un droit de douane, rend le commerce plus difficile, comme les paiements non officiels, les longs retards ou les papiers en trop."], ["Point focal", "la personne ou le bureau, dans chaque pays, qui suit les signalements d'ONT."]],
          slides: [
            { title: "Qu'est-ce qu'un obstacle non tarifaire ?", bullets: ["Paiements non officiels aux barrages ou aux frontières", "Longs retards ; papiers non prévus par les règles", "Marchandises retenues sans raison"] },
            { title: "Si on vous demande de l'argent sans reçu", bullets: ["Restez calme et poli : la sécurité d'abord", "Demandez le montant officiel et un reçu", "Demandez le responsable du poste ou le bureau d'information commerciale"] },
            { title: "Notez, puis signalez", bullets: ["Date, heure, lieu, montant, nom ou matricule", "tradebarriers.africa : en ligne ou par téléphone", "Service des plaintes de la douane ou association de commerçants"] },
            { title: "Votre plan de commerce transfrontalier", bullets: ["Produit, itinéraire, règles vérifiées ; papiers", "Coût et prix dans deux monnaies", "Moyen de paiement ; que faire face aux paiements non officiels"] }
          ],
          sources: [NTB, AFCFTA],
          tryIt: "Rédigez votre plan de commerce transfrontalier d'une page, comme décrit dans la tâche finale. Ajoutez les faits que vous noteriez et l'endroit où vous signaleriez un paiement non officiel.",
          youCanNow: "réagir en sécurité à un paiement non officiel, le signaler comme un obstacle non tarifaire, et rédiger un plan complet de commerce transfrontalier.",
          quickCheck: [
            { objective: "O5", q: "Où un petit commerçant peut-il signaler un paiement non officiel à une frontière africaine ?", options: ["Sur tradebarriers.africa, à la douane ou à une association de commerçants", "Seulement sur les réseaux sociaux", "Nulle part ; on ne peut pas le signaler", "À la personne qui a demandé l'argent"], answer: 0, why: "Le système d'ONT de l'AfCFTA, le service des plaintes de la douane et les associations de commerçants sont les voies officielles." },
            { objective: "O5", q: "Que devez-vous noter après un paiement non officiel ?", options: ["Seulement ce que vous avez ressenti", "La date, l'heure, le lieu, le montant et tout nom ou numéro de matricule", "Rien ; oubliez", "Seulement le prix de vos marchandises"], answer: 1, why: "Des faits clairs donnent un signalement qui peut être suivi." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Argent, paiement et problèmes",
        questions: [
          { objective: "O3", q: "Le coût total du lot est de 300 000 XAF pour 60 articles. Vous ajoutez 1 000 XAF de bénéfice par article. Quel est le prix de vente ?", options: ["6 000 XAF", "5 000 XAF", "1 000 XAF", "7 000 XAF"], answer: 0, why: "300 000 / 60 = 5 000 de coût par article ; plus 1 000 de bénéfice = 6 000." },
          { objective: "O3", q: "Pourquoi vérifier le taux de change le jour où vous vendez ?", options: ["Les taux ne changent jamais", "C'est l'acheteur qui le fixe", "Les taux changent tous les jours et peuvent effacer votre bénéfice", "Ça ne concerne que les banques"], answer: 2, why: "Les taux de change bougent chaque jour, donc un ancien taux peut transformer un bénéfice en perte." },
          { objective: "O4", q: "Quelle demande doit vous faire arrêter tout de suite ?", options: ["« Je peux payer par virement bancaire ? »", "« Envoyez-moi un reçu. »", "« Quel est votre prix en XOF ? »", "« Donnez-moi le code que nous venons d'envoyer sur votre téléphone. »"], answer: 3, why: "Aucun vrai acheteur ni opérateur n'a besoin de votre code ou de votre code PIN ; le demander est un signe d'arnaque." },
          { objective: "O4", q: "Qu'est-ce que le PAPSS ?", options: ["Un formulaire de douane", "Un système de paiement entre pays africains en monnaies locales, par les banques et les prestataires", "Un modèle de téléphone portable", "Un poste frontière"], answer: 1, why: "Le PAPSS permet à celui qui paie de payer dans sa monnaie locale et à celui qui reçoit de recevoir dans la sienne, entre pays africains." },
          { objective: "O5", q: "Un agent vous demande de l'argent sans reçu. Quelle est la première étape la plus sûre ?", options: ["Rester calme, demander le montant officiel et un reçu, ou le responsable du poste", "Crier et refuser de bouger", "Traverser la frontière en courant", "Payer le double pour aller plus vite"], answer: 0, why: "Rester calme vous protège, et demander le reçu ou le responsable suit la voie officielle." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Vendre de l'autre côté de la frontière : les petits commerçants et l'AfCFTA",
    questions: [
      { objective: "O1", q: "Combien de pays de l'Union africaine font partie de l'AfCFTA ?", options: ["15", "55", "8", "100"], answer: 1, why: "L'AfCFTA réunit les 55 pays de l'Union africaine." },
      { objective: "O1", q: "Quand les échanges dans le cadre de l'AfCFTA ont-ils commencé ?", options: ["Le 1er janvier 2021", "Le 1er janvier 2000", "Ils n'ont pas commencé", "Le 1er janvier 2030"], answer: 0, why: "Les échanges dans le cadre de l'AfCFTA ont commencé le 1er janvier 2021." },
      { objective: "O1", q: "Qu'est-ce qui décide si vos marchandises peuvent obtenir le droit réduit de l'AfCFTA ?", options: ["La couleur de l'emballage", "La distance parcourue", "Les règles d'origine", "Le jour de la semaine"], answer: 2, why: "Les marchandises doivent respecter les règles d'origine, qui montrent qu'elles viennent d'un pays membre." },
      { objective: "O1", q: "Moussa vend des cosmétiques de Dakar à Bamako. Sur quel accord doit-il se renseigner en premier ?", options: ["Le Régime commercial simplifié de l'EAC", "Le Régime commercial simplifié du COMESA", "Un accord en Asie", "Le Schéma de libéralisation des échanges de la CEDEAO"], answer: 3, why: "Le Sénégal et le Mali sont membres de la CEDEAO : c'est donc le SLE qu'il faut demander." },
      { objective: "O1", q: "Qui peut expliquer les règles simplifiées pour les petits commerçants à certains postes frontières ?", options: ["Un agent du bureau d'information commerciale", "N'importe quel changeur", "Le receveur du car", "Un inconnu au téléphone"], answer: 0, why: "Les bureaux d'information commerciale de certains postes frontières expliquent les règles aux petits commerçants." },
      { objective: "O2", q: "Quelle liste montre les papiers courants pour un poste frontière officiel ?", options: ["Des photos de mariage et un journal intime", "Seulement un numéro de téléphone", "Pièce d'identité, facture ou reçu, liste de colisage, déclaration en douane", "Une lettre d'un ami"], answer: 2, why: "La pièce d'identité, une facture ou un reçu, une liste de colisage et une déclaration en douane sont les papiers courants." },
      { objective: "O2", q: "Avant d'acheter le stock à faire passer, que devez-vous demander à la douane ?", options: ["De quelle couleur doivent être les marchandises", "Si vos marchandises sont limitées et quels papiers il leur faut", "S'ils veulent en acheter", "Rien"], answer: 1, why: "Certains produits sont limités, et les papiers varient selon le produit : renseignez-vous d'abord." },
      { objective: "O2", q: "Grace transporte des tomates fraîches du Kenya en Tanzanie. De quel certificat pourrait-elle avoir besoin ?", options: ["Un diplôme universitaire", "Un acte de mariage", "Un permis de conduire", "Un certificat phytosanitaire (santé des plantes)"], answer: 3, why: "Les produits végétaux frais exigent souvent un certificat phytosanitaire ; elle doit se renseigner à la douane." },
      { objective: "O2", q: "Que fait un transitaire en douane ?", options: ["Il vous aide à remplir les papiers de douane, contre paiement", "Il vend vos marchandises à votre place", "Il change de l'argent dans la rue", "Il fixe le taux des droits"], answer: 0, why: "Un transitaire est agréé pour aider à remplir les papiers de douane, contre paiement." },
      { objective: "O3", q: "Quelle est la première étape pour calculer le coût d'un lot ?", options: ["Choisir un prix qui vous plaît", "Noter tous les coûts, de l'achat à la vente", "Copier le prix d'un voisin", "Changer de l'argent"], answer: 1, why: "On ne peut pas fixer un prix juste sans connaître tous les coûts." },
      { objective: "O3", q: "Coût total de 36 000 KES pour 120 paires de sandales. Quel est le coût par paire ?", options: ["30 KES", "3 000 KES", "300 KES", "120 KES"], answer: 2, why: "36 000 divisé par 120 donne 300." },
      { objective: "O3", q: "Le coût par article est de 20 GHS et le bénéfice de 5 GHS. Avec un taux d'exemple de 1 GHS = 40 XOF, quel est le prix en XOF ?", options: ["800 XOF", "200 XOF", "1 000 XOF", "25 XOF"], answer: 2, why: "20 GHS + 5 GHS = 25 GHS ; 25 x 40 = 1 000 XOF." },
      { objective: "O3", q: "Après avoir calculé votre prix, que devez-vous encore vérifier ?", options: ["La météo", "Le prix de produits semblables sur le marché de l'acheteur", "Rien", "Le téléphone de votre voisin"], answer: 1, why: "Comparer avec le marché montre si les acheteurs paieront votre prix." },
      { objective: "O4", q: "Un nouvel acheteur veut la marchandise tout de suite et promet de payer la semaine prochaine. Quelle est la solution la plus sûre ?", options: ["Demander un acompte ou le paiement complet d'abord", "Tout envoyer maintenant", "Donner votre code PIN en signe de confiance", "Envoyer le double"], answer: 0, why: "Avec un nouvel acheteur, un acompte ou le paiement complet d'abord protège votre marchandise." },
      { objective: "O4", q: "Comment savoir qu'un paiement est vraiment arrivé ?", options: ["L'acheteur le dit", "Une capture d'écran", "Un SMS d'un numéro inconnu", "Vous consultez votre propre solde"], answer: 3, why: "Seul votre propre solde confirme que l'argent est vraiment là." },
      { objective: "O4", q: "Qui vous demandera le code PIN de votre mobile money ?", options: ["Votre opérateur de mobile money", "Votre banque", "Aucun vrai opérateur : seulement les escrocs", "La douane"], answer: 2, why: "Un vrai opérateur ne demande jamais votre code PIN ; quiconque le demande est un escroc." },
      { objective: "O4", q: "Pourquoi est-il risqué de passer la frontière avec beaucoup d'argent liquide ?", options: ["Le liquide est toujours illégal", "Vol, mauvais taux dans la rue et faux billets", "On ne peut pas compter le liquide", "Les banques l'interdisent"], answer: 1, why: "Le liquide peut être volé, et les changeurs de rue peuvent donner un mauvais taux ou de faux billets." },
      { objective: "O5", q: "Lequel est un obstacle non tarifaire ?", options: ["Le droit d'importation officiel", "Des paiements non officiels à un barrage", "Le prix de vos marchandises", "Votre bénéfice"], answer: 1, why: "Un ONT est tout ce qui, en dehors d'un droit de douane, rend le commerce plus difficile, comme les paiements non officiels." },
      { objective: "O5", q: "Qui peut faire un signalement sur tradebarriers.africa ?", options: ["Seulement les grandes entreprises", "Seulement les gouvernements", "Seulement les hommes", "Tout commerçant, y compris les commerçants informels, les femmes et les jeunes"], answer: 3, why: "Le système est ouvert aux entreprises de toutes tailles, aux commerçants informels, aux femmes et aux jeunes." },
      { objective: "O5", q: "Un agent retient vos marchandises et demande de l'argent liquide sans reçu. Quel est le meilleur plan ?", options: ["Rester calme, demander le reçu ou le responsable, noter les faits et le signaler", "Laisser vos marchandises et rentrer chez vous", "Discuter fort jusqu'à ce qu'il abandonne", "Payer et ne jamais rien dire"], answer: 0, why: "Rester en sécurité, demander la voie officielle, noter les faits et signaler est le bon plan." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie de votre plan et réessayez.",
    criteria: [
      { name: "Règles vérifiées", objective: "O1", notYet: "Le plan ne dit rien des règles qui s'appliquent, ou repose sur une rumeur.", meets: "Le plan nomme l'accord régional ou la règle de l'AfCFTA pour l'itinéraire, et au moins deux bureaux ou sites web où vérifier.", exceeds: "Il note aussi ce qu'un bureau a répondu, avec la date et le nom de l'agent." },
      { name: "Liste des papiers", objective: "O2", notYet: "Pas de liste de papiers, ou seulement une pièce d'identité.", meets: "Une liste des papiers pour ce produit et cet itinéraire, avec une facture et une déclaration en douane, et un certificat d'origine si un droit réduit est demandé.", exceeds: "Il note aussi tout certificat sanitaire, phytosanitaire ou de produit, et la façon dont les copies sont gardées." },
      { name: "Coût total et prix", objective: "O3", notYet: "Seul le prix des marchandises est compté, ou les calculs sont faux.", meets: "Tous les coûts sont notés, le coût par article et le prix de vente sont justes, et le prix est donné dans les deux monnaies.", exceeds: "Il compare aussi le prix avec le marché de l'acheteur et prévoit une variation du taux de change." },
      { name: "Paiement sûr", objective: "O4", notYet: "La marchandise est remise avant la vérification du paiement, ou le plan prévoit de partager un code PIN.", meets: "Un moyen sûr est nommé, la marchandise n'est remise qu'après vérification du solde, et aucun code PIN n'est jamais partagé.", exceeds: "Il liste aussi les signes d'arnaque que le commerçant va surveiller." },
      { name: "Paiements non officiels", objective: "O5", notYet: "Pas de plan, ou le plan consiste à payer sans rien dire.", meets: "Les étapes sûres, les faits à noter et un canal officiel de signalement sont nommés.", exceeds: "Il nomme deux canaux de signalement et une association de commerçants pour le soutien." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir utilisé un poste frontière officiel et les bons papiers dans les 30 jours (enquête de suivi)",
      "Apprenants qui disent payer moins de sommes non officielles, ou qui font un signalement d'ONT, dans les 90 jours",
      "Apprenants qui disent avoir réalisé une vente à l'étranger avec le bénéfice prévu dans les 90 jours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone simple avec une calculatrice ; internet pour au-afcfta.org et tradebarriers.africa si possible",
      "Papier et stylo pour la liste de contrôle des papiers, le calcul des coûts et le plan de commerce",
      "Le taux de change du jour pour l'itinéraire de l'apprenant (auprès d'une banque ou de la banque centrale)",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Avant la séance, demandez au bureau de douane local ou au bureau d'information commerciale quels accords et quels papiers s'appliquent aux itinéraires de vos apprenants, pour pouvoir répondre aux questions ; ne citez jamais de chiffres de droits de mémoire.",
      "Dans une association de commerçants ou un groupe de marché : faites le test de départ ensemble, puis un chapitre par séance, avec des apprenants qui calculent le coût de leurs propres lots réels.",
      "Traitez les commerçants informels avec respect : le but est un commerce plus sûr, légal et rentable, pas de blâmer qui que ce soit.",
      "Ne demandez jamais aux apprenants de partager leur code PIN, leurs mots de passe ou leurs numéros de compte en classe.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
