"use strict";

// Koach Learn course, French translation of shared/crypto-and-blockchain.js. Explains how crypto works and its risks; it does NOT recommend buying (README rule 6).
// Shape and rules: scripts/koachlearn-courses/README.md ("Translations"). US agency names (FTC, SEC, CFTC, FDIC, FBI, IC3) are kept and explained.

const FTC_CRYPTO = { name: "FTC (agence américaine de protection des consommateurs) : ce qu'il faut savoir sur les cryptomonnaies et les arnaques", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };

module.exports = {
  id: "crypto-and-blockchain-fr",
  lang: "fr",
  translationOf: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Comprendre les cryptomonnaies et la blockchain",
  skills: "Expliquer la blockchain avec des mots simples, Expliquer comment la crypto est envoyée et conservée, Nommer les risques, Repérer les arnaques à la crypto, Signaler une arnaque",
  outcome: "expliquer avec des mots simples comment fonctionnent une blockchain et une cryptomonnaie, nommer les principaux risques et comparer toute offre ou tout message lié à la crypto avec les signes d'alerte d'une arnaque, pour prendre vous-même une décision prudente et savoir où signaler une fraude.",
  about: [
    "On entend parler du Bitcoin et de la crypto aux informations, au travail, en famille et dans les publicités. Certaines personnes gagnent de l'argent ; beaucoup en perdent, et la crypto est l'un des moyens de paiement les plus demandés par les escrocs. Ce cours explique comment elle fonctionne pour que vous puissiez la comprendre et vous protéger, vous et vos proches.",
    "Au chapitre 1, vous apprenez ce qu'est une blockchain, ce qu'est une cryptomonnaie, et comment fonctionnent les portefeuilles et les clés. Au chapitre 2, vous apprenez les risques, les signes d'alerte des arnaques à la crypto et où signaler une fraude.",
    "Ce cours ne vous dit pas s'il faut acheter de la crypto. Ce n'est pas un conseil financier. Pour les décisions d'argent, parlez à un professionnel agréé que vous choisissez vous-même. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les exemples d'organismes viennent des États-Unis ; dans votre pays, cherchez l'autorité financière et le service de signalement des fraudes équivalents."
  ],
  finalTask: "Faites une « fiche de sécurité crypto » d'une page pour vous ou un proche : deux phrases sur ce que sont une blockchain et une cryptomonnaie, trois risques, quatre signes d'alerte d'une arnaque à la crypto et les sites officiels où signaler une fraude. Puis lisez une vraie publicité ou un vrai message sur la crypto (e-mail, SMS ou réseau social) et notez les signes d'alerte qu'il montre.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui entendent parler du Bitcoin et de la crypto aux informations, au travail, en famille et dans les publicités : seniors, leurs enfants adultes et aidants, jeunes qui découvrent les applications d'argent, et membres de la communauté qui veulent se protéger et protéger les autres.",
    startingPoint: "Ils savent utiliser un téléphone pour les messages, l'e-mail et les réseaux sociaux, et utilisent parfois une application bancaire ou une carte bancaire. La plupart ne savent pas dire ce qu'est une blockchain ou une phrase de récupération, en quoi la crypto diffère de l'argent à la banque, ni comment fonctionnent d'habitude les arnaques à la crypto.",
    gap: "La crypto est l'un des moyens de paiement les plus demandés par les escrocs, et les paiements en crypto ne peuvent en général pas être annulés. Les personnes qui ne la comprennent pas peuvent perdre leurs économies dans de faux investissements, des arnaques sentimentales, de faux agents de l'État et des arnaques à la récupération, ou partager une phrase de récupération et tout perdre.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de la crypto est expliqué avec une image du quotidien",
      "Appareils : un téléphone ou un ordinateur pour lire les pages officielles de mise en garde ; aucune application ni aucun compte crypto n'est nécessaire",
      "Temps : environ 5 minutes par leçon, environ 60 minutes au total",
      "Pas de conseil financier : le cours ne dit jamais aux apprenants d'acheter ou de vendre ; les décisions d'argent vont à un professionnel agréé choisi par l'apprenant",
      "Vie privée et sécurité : les apprenants ne partagent jamais une phrase de récupération ou une clé privée, et n'envoient jamais d'argent pendant les exercices"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec l'image du cahier partagé", action: "expliquer ce qu'est une blockchain, avec les mots bloc, chaîne et décentralisé", standard: "en deux ou trois phrases simples sans erreur sur la façon dont les registres sont tenus" },
    { id: "O2", condition: "Sans notes", action: "expliquer ce qu'est une cryptomonnaie et lister en quoi elle diffère de l'argent sur un compte bancaire assuré", standard: "en nommant au moins trois différences, dont le fait que les paiements en crypto ne peuvent en général pas être annulés" },
    { id: "O3", condition: "À partir des mots portefeuille, adresse publique, phrase de récupération et plateforme d'échange", action: "décrire ce qu'est chacun et identifier ceux qu'il ne faut jamais partager", standard: "en décrivant chacun correctement et en gardant toujours secrètes la phrase de récupération et la clé privée" },
    { id: "O4", condition: "Sans notes", action: "nommer les quatre principaux risques de la crypto et une façon de se protéger de chacun", standard: "en nommant correctement les quatre risques (prix, perte, entreprise et arnaque)" },
    { id: "O5", condition: "À partir d'une vraie publicité, d'un vrai message ou d'une vraie publication sur la crypto", action: "le comparer aux signes d'alerte d'une arnaque à la crypto et choisir une réaction sûre", standard: "en marquant chaque signe d'alerte qu'il montre et en choisissant de s'arrêter, de ne pas payer et d'en parler à une personne de confiance" },
    { id: "O6", condition: "À partir d'une arnaque à la crypto qui vous est arrivée ou est arrivée à un proche", action: "lister les endroits officiels où la signaler et les détails à noter", standard: "en nommant au moins deux sites officiels de signalement et au moins quatre détails à noter" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent la crypto et la blockchain",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est une blockchain",
          minutes: 5,
          goal: "Expliquer une blockchain avec des mots simples à l'aide d'une image simple.",
          text: [
            "Imaginez un cahier de paiements dont des milliers d'ordinateurs gardent chacun une copie. Toutes les quelques minutes, une nouvelle page de paiements est ajoutée. Chaque page est verrouillée à la précédente par une sorte d'empreinte mathématique : si quelqu'un modifie une ancienne page, toutes les autres copies montrent qu'elle ne correspond plus.",
            "Ce cahier partagé, c'est une blockchain (une « chaîne de blocs »). Chaque page est un bloc, et les pages sont enchaînées dans l'ordre. Aucune banque ni entreprise ne garde seule le cahier : c'est le réseau d'ordinateurs qui le fait. On dit que c'est décentralisé.",
            "Grâce à ce système, un paiement inscrit dans la blockchain est très difficile à modifier ou à annuler. La plupart des blockchains sont aussi publiques : tout le monde peut consulter les paiements, même si les noms des personnes ne sont pas affichés."
          ],
          words: [["Blockchain", "un registre partagé des transactions, gardé par beaucoup d'ordinateurs, où chaque nouveau bloc est relié au précédent."], ["Bloc", "un groupe de transactions ajoutées ensemble à la blockchain."], ["Décentralisé", "géré par un réseau de nombreux ordinateurs au lieu d'une seule banque ou entreprise."], ["Registre", "un relevé des paiements, comme un livre de comptes."]],
          slides: [
            { title: "Imaginez un cahier partagé", bullets: ["Des milliers d'ordinateurs en gardent une copie", "De nouvelles pages de paiements sont ajoutées souvent", "Chaque page est verrouillée à la précédente"] },
            { title: "Les mots de la blockchain", bullets: ["Bloc = une page de paiements", "Chaîne = les pages reliées dans l'ordre", "Décentralisé = aucune banque seule aux commandes"] },
            { title: "Ce que cela veut dire pour vous", bullets: ["Les paiements sont très difficiles à modifier ou annuler", "La plupart des blockchains sont des registres publics"] }
          ],
          tryIt: "Expliquez une blockchain à quelqu'un (ou à voix haute pour vous-même) avec l'image du cahier partagé. Utilisez les mots bloc, chaîne et décentralisé.",
          youCanNow: "expliquer ce qu'est une blockchain et pourquoi ses registres sont difficiles à modifier.",
          quickCheck: [
            { objective: "O1", q: "Dans l'image du cahier partagé, qu'est-ce qu'un bloc ?", options: ["Le cahier entier", "La banque à qui appartient le cahier", "Une page de paiements ajoutée au cahier", "Un mot de passe pour le cahier"], answer: 2, why: "Chaque page de paiements est un bloc, et les pages sont enchaînées dans l'ordre." },
            { objective: "O1", q: "Quelqu'un vous dit qu'il peut modifier discrètement un ancien paiement sur une blockchain publique. Qu'en pensez-vous ?", options: ["C'est très peu probable, parce que les autres copies ne correspondraient plus", "C'est facile, parce qu'une seule entreprise tient le cahier", "C'est normal, parce que les blockchains sont privées", "C'est vrai, parce que les blocs ne sont pas liés"], answer: 0, why: "Chaque bloc est verrouillé au précédent, donc une page modifiée ne correspondrait plus aux autres copies." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ce qu'est une cryptomonnaie",
          minutes: 5,
          goal: "Expliquer ce qu'est une cryptomonnaie et en quoi elle diffère de l'argent à la banque.",
          text: [
            "Une cryptomonnaie (crypto) est de l'argent numérique inscrit sur une blockchain. Le Bitcoin a été la première ; il en existe maintenant des milliers, comme l'Ether. Un stablecoin est une sorte de crypto conçue pour rester proche de la valeur d'une monnaie ordinaire comme le dollar américain, mais il peut quand même s'effondrer.",
            "La crypto n'est pas émise par un État, et son prix monte et descend selon ce que les gens sont prêts à payer. Les prix peuvent beaucoup monter ou baisser en une seule journée.",
            "Les paiements en crypto ne sont pas comme les paiements par carte. La FTC, l'agence américaine de protection des consommateurs, explique que les paiements en crypto n'ont pas les protections légales des cartes de crédit et de débit, et qu'on ne peut généralement pas les annuler. L'argent en crypto n'est pas non plus comme l'argent sur un compte bancaire assuré."
          ],
          words: [["Cryptomonnaie (crypto)", "de l'argent numérique inscrit sur une blockchain, comme le Bitcoin ou l'Ether."], ["Stablecoin", "une crypto conçue pour rester proche de la valeur d'une monnaie ordinaire, comme le dollar américain."], ["Volatil", "se dit d'un prix qui peut beaucoup monter ou baisser, très vite."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "La crypto, c'est...", bullets: ["De l'argent numérique inscrit sur une blockchain", "Le Bitcoin a été le premier ; l'Ether en est un autre", "Les stablecoins visent la valeur d'une monnaie comme le dollar"] },
            { title: "Pas comme l'argent à la banque", bullets: ["Pas émise par un État", "Le prix peut beaucoup bouger en une journée"] },
            { title: "Pas comme un paiement par carte", bullets: ["Pas les protections légales des cartes (FTC)", "En général, impossible à annuler"] }
          ],
          tryIt: "Écrivez trois différences entre payer avec une carte de débit et payer en crypto. Vérifiez votre réponse avec la page de la FTC dans les sources de cette leçon.",
          youCanNow: "expliquer ce qu'est une cryptomonnaie et en quoi elle diffère de l'argent à la banque et des paiements par carte.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une cryptomonnaie ?", options: ["Des billets émis par un État", "De l'argent numérique enregistré sur une blockchain", "Un compte d'épargne dans une banque", "Une carte cadeau d'un magasin"], answer: 1, why: "La crypto est de l'argent numérique enregistré sur une blockchain, pas émis par un État." },
            { objective: "O2", q: "Un vendeur vous demande de payer en crypto plutôt qu'avec votre carte bancaire. Que devez-vous garder en tête ?", options: ["La crypto a plus de protection légale qu'une carte", "Les paiements en crypto sont toujours faciles à annuler", "La crypto est assurée comme un compte bancaire", "Les paiements en crypto ne peuvent en général pas être annulés si quelque chose tourne mal"], answer: 3, why: "La FTC dit que les paiements en crypto n'ont pas les protections des cartes et ne peuvent en général pas être annulés." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Portefeuilles, clés et plateformes d'échange",
          minutes: 5,
          goal: "Expliquer comment la crypto est conservée et envoyée, et ce qu'il ne faut jamais partager.",
          text: [
            "La crypto se garde dans un portefeuille (wallet) : une application, un site ou un petit appareil qui contient vos clés. L'adresse publique est comme un numéro de compte que vous pouvez donner pour qu'on vous envoie de la crypto. La clé privée, souvent présentée sous forme de phrase de récupération (une liste de 12 ou 24 mots), est comme le passe-partout. Celui qui l'a contrôle la crypto.",
            "Ne partagez jamais une phrase de récupération ou une clé privée avec personne : ni le service client, ni un « assistant », ni une application, ni un assistant IA. Une vraie entreprise ne la demandera jamais. Si vous la perdez, la crypto peut être perdue pour toujours.",
            "Une plateforme d'échange est une entreprise où l'on achète, vend et garde de la crypto. Ces plateformes peuvent être piratées ou faire faillite. Aux États-Unis, vérifiez si une entreprise est enregistrée et lisez les plaintes avant de lui faire confiance ; des autorités comme la SEC et la CFTC (les régulateurs américains des marchés financiers) publient des mises en garde."
          ],
          words: [["Portefeuille (wallet)", "une application ou un appareil qui contient les clés de votre crypto."], ["Adresse publique", "un code que les autres utilisent pour vous envoyer de la crypto, comme un numéro de compte."], ["Clé privée / phrase de récupération", "le secret qui contrôle la crypto ; ne le partagez jamais."], ["Plateforme d'échange", "une entreprise où l'on achète, vend et garde de la crypto."]],
          sources: [FTC_CRYPTO, { name: "SEC (régulateur américain des marchés) : envoyer un signalement ou une plainte", url: "https://www.sec.gov/tcr" }, { name: "CFTC (régulateur américain des marchés à terme) : déposer une plainte", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Portefeuille et clés", bullets: ["Portefeuille = application ou appareil qui contient vos clés", "Adresse publique = comme un numéro de compte", "Clé privée / phrase de récupération = le passe-partout"] },
            { title: "Ne partagez jamais", bullets: ["Votre phrase de récupération ou votre clé privée", "Ni au service client, ni aux « assistants », ni aux applis, ni à l'IA", "Les vraies entreprises ne la demandent jamais"] },
            { title: "Les plateformes d'échange", bullets: ["Des entreprises pour acheter, vendre et garder de la crypto", "Elles peuvent être piratées ou fermer", "Lisez d'abord les plaintes et les mises en garde des autorités"] }
          ],
          tryIt: "Écrivez une phrase pour chaque point : ce qu'est une adresse publique, ce qu'est une phrase de récupération, et ce que vous répondriez si un « agent du service client » vous demandait votre phrase de récupération.",
          youCanNow: "expliquer comment la crypto est conservée et envoyée, et pourquoi une phrase de récupération ne doit jamais être partagée.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une phrase de récupération ?", options: ["Un mot gentil que vous envoyez avec un paiement", "Le nom d'une plateforme d'échange", "Votre adresse publique", "Une liste de 12 ou 24 mots qui contrôle votre crypto"], answer: 3, why: "Celui qui a la phrase de récupération contrôle la crypto, comme avec un passe-partout." },
            { objective: "O3", q: "Un ami veut vous envoyer de la crypto et vous demande quoi utiliser. Que lui donnez-vous ?", options: ["Votre phrase de récupération", "Votre clé privée", "Votre adresse publique", "Le code PIN de votre carte bancaire"], answer: 2, why: "L'adresse publique est comme un numéro de compte : on peut la partager sans danger pour recevoir de la crypto." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent la crypto et la blockchain",
        questions: [
          { objective: "O1", q: "Quelle image décrit le mieux une blockchain ?", options: ["La liste de contacts d'un téléphone", "Le tableur privé d'une seule banque", "Un chèque en papier", "Un cahier de paiements partagé dont beaucoup d'ordinateurs gardent chacun une copie"], answer: 3, why: "Une blockchain est un registre partagé gardé par beaucoup d'ordinateurs." },
          { objective: "O1", q: "Pourquoi est-il difficile de modifier un ancien registre sur une blockchain ?", options: ["Il est imprimé sur papier", "Un juge le surveille", "Chaque bloc est relié au précédent, donc une modification ne correspond plus aux autres copies", "Il est effacé chaque jour"], answer: 2, why: "Les blocs reliés et les nombreuses copies font apparaître les modifications." },
          { objective: "O2", q: "Que dit la FTC des paiements en crypto par rapport aux cartes de crédit ?", options: ["Ils sont mieux protégés", "C'est pareil", "Ils n'ont pas les mêmes protections légales et ne peuvent généralement pas être annulés", "Ils sont toujours assurés"], answer: 2, why: "La FTC prévient que les paiements en crypto n'ont pas les protections des cartes." },
          { objective: "O2", q: "Qu'est-ce qu'un stablecoin ?", options: ["Une pièce en métal", "Un type de portefeuille", "Un bon d'épargne de l'État", "Une crypto conçue pour rester proche d'une monnaie comme le dollar"], answer: 3, why: "Les stablecoins visent la valeur d'une monnaie ordinaire, mais ils peuvent quand même s'effondrer." },
          { objective: "O3", q: "Quelqu'un du « support du portefeuille » demande votre phrase de récupération de 12 mots pour régler un problème. Que faites-vous ?", options: ["La donner pour qu'il puisse aider", "En donner la moitié", "La taper dans une IA pour la vérifier", "Refuser ; les vraies entreprises ne la demandent jamais"], answer: 3, why: "Celui qui a la phrase de récupération contrôle la crypto." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Risques, arnaques et signalement",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les vrais risques",
          minutes: 5,
          goal: "Nommer les principaux risques liés au fait de détenir ou de recevoir de la crypto.",
          text: [
            "Risque de prix : le prix de la crypto peut chuter fortement, et personne ne peut promettre qu'il remontera. Ne mettez jamais l'argent dont vous avez besoin pour le loyer, la nourriture, les factures ou les médicaments.",
            "Risque de perte : si vous perdez votre phrase de récupération, ou si vous envoyez de la crypto à la mauvaise adresse, elle est généralement perdue. Les paiements ne peuvent généralement pas être annulés.",
            "Risque lié à l'entreprise : les plateformes et les applications peuvent être piratées ou fermer. La FDIC, l'organisme américain qui garantit les dépôts bancaires, indique que la crypto n'est pas couverte par sa garantie, qui ne couvre que les dépôts dans les banques assurées. Risque d'arnaque : la crypto est le moyen de paiement préféré des escrocs, parce qu'elle est rapide et difficile à récupérer.",
            "Ce cours ne vous dit pas s'il faut acheter. Si vous y pensez, parlez à un professionnel de la finance agréé que vous choisissez vous-même, et lisez d'abord les mises en garde officielles."
          ],
          words: [["Risque", "la possibilité de perdre de l'argent ou que quelque chose tourne mal."], ["Garantie de la FDIC", "la protection de l'État américain pour l'argent déposé sur des comptes bancaires assurés ; elle ne couvre pas la crypto."]],
          sources: [FTC_CRYPTO, { name: "FDIC (garantie américaine des dépôts) : comprendre l'assurance des dépôts", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Risque de prix", bullets: ["Les prix peuvent chuter fortement", "Jamais l'argent du loyer, de la nourriture, des factures ou des médicaments"] },
            { title: "Risque de perte", bullets: ["Phrase de récupération perdue = crypto perdue", "Mauvaise adresse ou arnaque = généralement perdu"] },
            { title: "Risques liés à l'entreprise et aux arnaques", bullets: ["Applis et plateformes peuvent être piratées ou fermer", "La crypto n'est pas garantie par la FDIC", "Les escrocs adorent les paiements en crypto"] },
            { title: "Ce n'est pas un conseil", bullets: ["Ce cours ne dit pas d'acheter ou de vendre", "Parlez à un professionnel agréé de votre choix"] }
          ],
          tryIt: "Écrivez les quatre risques avec vos mots : prix, perte, entreprise et arnaque. Pour chacun, écrivez une façon de se protéger.",
          youCanNow: "nommer les principaux risques de la crypto et expliquer pourquoi l'argent dont on a besoin ne doit jamais être mis en danger.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que le risque de prix avec la crypto ?", options: ["Le prix peut chuter fortement et personne ne peut promettre qu'il remontera", "Le prix est fixé par l'État", "Le prix ne fait que monter avec le temps", "Le prix est le même que celui du dollar chaque jour"], answer: 0, why: "Les prix de la crypto peuvent chuter fortement : n'y mettez jamais l'argent dont vous avez besoin pour vos factures." },
            { objective: "O4", q: "Votre cousin veut mettre l'argent du loyer de ce mois dans la crypto. Que lui dites-vous ?", options: ["Vas-y ; les prix remontent toujours", "N'utilise pas l'argent dont tu as besoin pour le loyer, la nourriture, les factures ou les médicaments", "Mets-le sur une plateforme d'échange, car elles sont assurées", "Envoie-le vite avant que le prix change"], answer: 1, why: "Les prix peuvent beaucoup baisser, donc l'argent des besoins de base ne doit jamais aller dans la crypto." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Repérer les arnaques à la crypto",
          minutes: 5,
          goal: "Comparer une offre ou un message lié à la crypto avec les signes d'alerte d'une arnaque.",
          text: [
            "La FTC liste les signes des arnaques à la crypto. Seuls les escrocs exigent un paiement en crypto, surtout à l'avance ou pour « protéger » votre argent. Seuls les escrocs garantissent des profits ou des gains importants et rapides. Les recommandations de célébrités peuvent être fausses.",
            "Méfiez-vous d'un nouvel ami en ligne ou d'un partenaire amoureux qui commence à donner des conseils d'investissement ou demande de la crypto. Méfiez-vous des appels ou SMS qui prétendent venir d'une administration, d'une banque ou d'un fournisseur d'énergie et disent que vous devez de l'argent ou que votre compte est bloqué et qu'il faut payer en crypto ou à un distributeur de crypto.",
            "Méfiez-vous aussi des emplois qui demandent de payer des frais en crypto, et des e-mails qui menacent de révéler des choses privées si vous ne payez pas en crypto. Quand vous voyez l'un de ces signes, arrêtez-vous. Ne payez pas, ne cliquez pas, et parlez-en à une personne de confiance."
          ],
          steps: ["Vous demande-t-on de payer en crypto ou d'utiliser un distributeur de crypto ?", "Vous promet-on des profits garantis ou rapides ?", "Le message vient-il d'un nouvel ami en ligne, d'un contact amoureux ou d'un inconnu ?", "Vous presse-t-on ou vous menace-t-on ?", "Un seul oui : arrêtez, ne payez pas et vérifiez avec une personne de confiance."],
          words: [["Arnaque", "une ruse pour voler de l'argent ou des informations."], ["Distributeur de crypto", "une machine qui transforme de l'argent liquide en crypto ; les escrocs disent souvent aux victimes d'en utiliser une."], ["Arnaque sentimentale", "une arnaque où quelqu'un crée une relation en ligne pour obtenir de l'argent."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Seuls les escrocs...", bullets: ["Exigent un paiement en crypto", "Garantissent des profits ou des gains rapides", "Utilisent de fausses recommandations de célébrités"] },
            { title: "Méfiez-vous de", bullets: ["Nouveaux amis en ligne qui donnent des conseils d'investissement", "Appels de « l'administration » ou de « la banque » pour payer en crypto", "Emplois qui demandent des frais en crypto"] },
            { title: "Quand vous en repérez une", bullets: ["Arrêtez-vous", "Ne payez pas, ne cliquez pas", "Parlez-en à une personne de confiance"] }
          ],
          tryIt: "Trouvez une publicité, un message ou une publication sur la crypto. Passez les cinq questions de vérification et notez chaque signe d'alerte qu'il montre.",
          youCanNow: "comparer une offre ou un message lié à la crypto avec les signes d'alerte et vous arrêter avant de payer.",
          quickCheck: [
            { objective: "O5", q: "Lequel de ces éléments est un signe d'alerte d'une arnaque à la crypto ?", options: ["Une lettre de la banque que vous avez demandée", "Un ami qui explique ce qu'est une blockchain", "Une demande de payer d'avance en crypto pour protéger votre argent", "Un article de presse sur le prix du Bitcoin"], answer: 2, why: "Seuls les escrocs exigent un paiement d'avance en crypto ou pour « protéger » votre argent." },
            { objective: "O5", q: "Un SMS dit que votre compte bancaire est bloqué et que vous devez payer aujourd'hui à un distributeur de crypto. Que faites-vous ?", options: ["Aller tout de suite au distributeur de crypto", "Répondre avec votre numéro de compte", "Cliquer sur le lien du SMS pour vérifier", "Vous arrêter, ne pas payer ni cliquer, et en parler à une personne de confiance"], answer: 3, why: "Dire que vous devez de l'argent à payer en crypto est un signe d'arnaque : arrêtez-vous et ne payez pas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Signaler une fraude et aider les autres",
          minutes: 5,
          goal: "Lister où signaler une arnaque à la crypto et ce qu'il faut noter.",
          text: [
            "Si vous ou un proche avez été visé, signalez-le. Aux États-Unis, la FTC indique ces endroits : la FTC sur ReportFraud.ftc.gov, la CFTC sur cftc.gov/complaint, la SEC sur sec.gov/tcr, le centre des plaintes pour la cybercriminalité du FBI (IC3) sur ic3.gov, et la plateforme ou l'application de crypto utilisée pour envoyer l'argent. Dans un autre pays, signalez-le à la police et à l'autorité financière nationale.",
            "Notez ce qui s'est passé : les dates, le montant, l'adresse du portefeuille ou l'identifiant de la transaction, les noms et numéros de téléphone utilisés par l'escroc, et des captures d'écran des messages. N'envoyez plus d'argent à quelqu'un qui promet de « récupérer » votre crypto perdue ; c'est souvent une deuxième arnaque.",
            "Parlez des arnaques avec votre famille et vos amis, surtout les proches âgés et les jeunes qui découvrent les applications d'argent. Une courte conversation peut éviter une perte."
          ],
          steps: ["Arrêtez tout paiement et tout contact avec l'escroc.", "Notez les dates, les montants, les adresses de portefeuille, les identifiants de transaction, les noms et les numéros.", "Gardez des captures d'écran.", "Signalez sur ReportFraud.ftc.gov et ic3.gov, plus la SEC ou la CFTC s'il s'agissait d'un investissement.", "Prévenez la plateforme ou l'application que vous avez utilisée.", "Ignorez quiconque propose de récupérer votre argent contre des frais."],
          words: [["Identifiant de transaction", "le code qui identifie un paiement en crypto sur la blockchain."], ["IC3", "le centre des plaintes pour la cybercriminalité du FBI, qui reçoit les signalements de crimes en ligne."], ["Arnaque à la récupération", "une deuxième arnaque qui promet de récupérer votre argent perdu contre des frais."]],
          sources: [FTC_CRYPTO, { name: "FTC : ReportFraud (signaler une fraude)", url: "https://reportfraud.ftc.gov" }, { name: "FBI : centre des plaintes pour la cybercriminalité (IC3)", url: "https://www.ic3.gov" }, { name: "SEC (régulateur américain des marchés) : envoyer un signalement ou une plainte", url: "https://www.sec.gov/tcr" }, { name: "CFTC (régulateur américain des marchés à terme) : déposer une plainte", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Où signaler (États-Unis)", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr ou cftc.gov/complaint pour les investissements", "La plateforme ou l'application utilisée"] },
            { title: "Notez tout", bullets: ["Dates et montants", "Adresse du portefeuille et identifiant de transaction", "Noms, numéros, captures d'écran"] },
            { title: "Attention aux arnaques à la récupération", bullets: ["Personne d'honnête ne fait payer pour « récupérer » de la crypto", "Ne payez pas une deuxième fois"] }
          ],
          tryIt: "Tâche finale : faites votre fiche de sécurité crypto d'une page (ce que sont la blockchain et la crypto, trois risques, quatre signes d'arnaque, où signaler). Puis notez les signes d'alerte d'une vraie publicité ou d'un vrai message sur la crypto.",
          youCanNow: "signaler une arnaque à la crypto aux bons endroits et aider votre famille et vos amis à l'éviter.",
          quickCheck: [
            { objective: "O6", q: "Lequel de ces endroits est un lieu officiel pour signaler une fraude à la crypto aux États-Unis ?", options: ["Un commentaire sous la publication de l'escroc sur un réseau social", "Le centre de plaintes du FBI pour la criminalité sur internet, sur ic3.gov", "Un inconnu qui dit pouvoir récupérer votre argent", "Un groupe de discussion sur la crypto"], answer: 1, why: "L'IC3, sur ic3.gov, est l'un des endroits officiels que la FTC indique pour signaler." },
            { objective: "O6", q: "Votre voisine a été victime d'une arnaque et veut la signaler. Que l'aidez-vous à faire d'abord ?", options: ["Noter les dates, les montants, l'adresse du portefeuille ou l'identifiant de transaction, et garder des captures d'écran", "Supprimer tous les messages de l'escroc", "Payer un service de récupération pour retrouver l'argent", "Envoyer plus de crypto à l'escroc pour fermer le compte"], answer: 0, why: "Ces détails aident les agences et la plateforme d'échange à donner suite au signalement." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Risques, arnaques et signalement",
        questions: [
          { objective: "O4", q: "Quel argent ne faut-il jamais mettre dans la crypto ?", options: ["L'argent fictif d'un jeu", "L'argent que vous pouvez vous permettre de perdre, après conseil", "L'argent dont vous avez besoin pour le loyer, la nourriture ou les médicaments", "Il n'y a jamais aucun risque"], answer: 2, why: "Les variations de prix peuvent vous faire perdre l'argent dont vous avez besoin." },
          { objective: "O4", q: "Selon la FDIC, la crypto est :", options: ["Entièrement garantie par la FDIC", "Garantie seulement le week-end", "Non couverte par la garantie des dépôts de la FDIC", "Garantie si elle est achetée sur un téléphone"], answer: 2, why: "La garantie des dépôts de la FDIC ne couvre pas la crypto." },
          { objective: "O5", q: "Un homme au téléphone dit qu'il est de l'administration et que vous devez payer une amende à un distributeur de crypto aujourd'hui. C'est :", options: ["Un paiement normal à l'administration", "Un remboursement d'impôts", "Une règle bancaire", "Un signe d'alerte d'arnaque"], answer: 3, why: "Seuls les escrocs exigent un paiement en crypto." },
          { objective: "O5", q: "Un nouvel ami en ligne promet des profits garantis si vous investissez dans la crypto. Que faites-vous ?", options: ["Investir un peu pour essayer", "Envoyer votre phrase de récupération", "Demander une plus grande garantie", "Arrêter ; les profits garantis sont un signe d'arnaque"], answer: 3, why: "Seuls les escrocs garantissent des profits." },
          { objective: "O6", q: "Après avoir perdu de l'argent dans une arnaque à la crypto, quelqu'un propose de le récupérer contre des frais. C'est probablement :", options: ["Une arnaque à la récupération", "Le FBI", "Votre banque", "Un remboursement"], answer: 0, why: "Payer des frais pour récupérer de la crypto est une deuxième arnaque courante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Comprendre les cryptomonnaies et la blockchain",
    questions: [
      { objective: "O1", q: "Une blockchain est :", options: ["Un registre partagé des transactions gardé par beaucoup d'ordinateurs", "Un type d'antivol de vélo", "Le fichier secret d'une entreprise", "Un reçu en papier"], answer: 0, why: "Beaucoup d'ordinateurs gardent des copies du même registre relié." },
      { objective: "O1", q: "Dans une blockchain, un « bloc » est :", options: ["Un groupe de transactions ajoutées ensemble", "Un mot de passe", "Un distributeur de crypto", "Une agence bancaire"], answer: 0, why: "Chaque bloc contient un groupe de transactions." },
      { objective: "O1", q: "« Décentralisé » veut dire :", options: ["Géré par une seule banque", "Fermé le week-end", "Géré par un réseau de nombreux ordinateurs au lieu d'une seule entreprise", "Réservé aux États"], answer: 2, why: "Aucune entreprise ne garde seule le registre." },
      { objective: "O1", q: "La plupart des blockchains sont :", options: ["Secrètes et cachées", "Effacées chaque année", "Imprimées dans les journaux", "Des registres publics que tout le monde peut consulter"], answer: 3, why: "Tout le monde peut consulter les transactions, même si les noms ne sont pas affichés." },
      { objective: "O2", q: "Le Bitcoin est un exemple de :", options: ["Carte de crédit", "Compte bancaire", "Cryptomonnaie", "Stablecoin géré par l'État"], answer: 2, why: "Le Bitcoin a été la première cryptomonnaie." },
      { objective: "O2", q: "On dit que les prix de la crypto sont volatils parce qu'ils :", options: ["Ne changent jamais", "Ne font que monter", "Sont fixés par la loi", "Peuvent beaucoup monter ou baisser très vite"], answer: 3, why: "Volatil veut dire des changements de prix importants et rapides." },
      { objective: "O2", q: "Si vous payez un escroc en crypto, la FTC dit que vous :", options: ["Pouvez toujours annuler", "Ne pouvez généralement pas annuler le paiement", "Serez remboursé par la banque", "Êtes assuré"], answer: 1, why: "Les paiements en crypto ne peuvent généralement pas être annulés." },
      { objective: "O3", q: "Un portefeuille de crypto est :", options: ["Un portefeuille en cuir", "Une application ou un appareil qui contient les clés de votre crypto", "Un compte bancaire", "Le bureau d'une plateforme d'échange"], answer: 1, why: "Les portefeuilles contiennent les clés qui contrôlent la crypto." },
      { objective: "O3", q: "Que pouvez-vous donner sans danger à quelqu'un qui va vous envoyer de la crypto ?", options: ["Votre adresse publique", "Votre phrase de récupération", "Votre clé privée", "Le mot de passe de votre banque"], answer: 0, why: "L'adresse publique est comme un numéro de compte." },
      { objective: "O3", q: "Qui contrôle la crypto d'un portefeuille ?", options: ["L'opérateur téléphonique", "Celui qui a la clé privée ou la phrase de récupération", "L'État", "La personne qui a l'adresse publique"], answer: 1, why: "La clé privée est le passe-partout." },
      { objective: "O3", q: "Une plateforme d'échange est :", options: ["Une entreprise où l'on achète, vend et garde de la crypto", "Un bureau de l'administration", "Un type de bloc de blockchain", "Une phrase de récupération"], answer: 0, why: "Les plateformes d'échange sont des entreprises pour échanger et garder de la crypto." },
      { objective: "O4", q: "Quel est un risque lié à l'entreprise avec la crypto ?", options: ["La plateforme peut être piratée ou fermer", "Le prix est fixe", "Elle est garantie par la FDIC", "Elle ne peut pas être volée"], answer: 0, why: "Les plateformes et les applications peuvent être piratées ou faire faillite." },
      { objective: "O4", q: "Ce cours vous dit-il d'acheter de la crypto ?", options: ["Oui, toujours", "Oui, mais seulement du Bitcoin", "Non ; pour les décisions d'argent, parlez à un professionnel agréé de votre choix", "Oui, avec l'argent du loyer"], answer: 2, why: "Le cours explique comment fonctionne la crypto et ses risques ; ce n'est pas un conseil." },
      { objective: "O4", q: "Vous envoyez de la crypto à la mauvaise adresse. Que se passe-t-il généralement ?", options: ["Elle revient automatiquement", "Elle est généralement perdue", "La banque la rembourse", "La FTC la renvoie"], answer: 1, why: "Les paiements sur la blockchain ne peuvent généralement pas être annulés." },
      { objective: "O5", q: "Lequel est un signe d'alerte d'une arnaque à la crypto ?", options: ["Une promesse de profits garantis", "Une liste de prix claire", "Un magasin qui accepte les cartes", "Un reçu par e-mail"], answer: 0, why: "Seuls les escrocs garantissent des profits." },
      { objective: "O5", q: "Une personne d'une application de rencontre, que vous n'avez jamais vue, vous demande d'investir dans la crypto. C'est :", options: ["Le grand amour", "Un signe courant d'arnaque sentimentale", "Une exigence de la banque", "Une règle fiscale"], answer: 1, why: "Les nouveaux contacts en ligne qui poussent vers la crypto sont un signe d'arnaque." },
      { objective: "O5", q: "Une offre d'emploi dit que vous devez payer des frais de formation en crypto. Vous devez :", options: ["Payer vite", "Arrêter ; un emploi qui exige des frais en crypto est un signe d'arnaque", "Payer la moitié", "Envoyer plutôt votre phrase de récupération"], answer: 1, why: "La FTC cite les emplois avec frais en crypto comme un signe d'arnaque." },
      { objective: "O6", q: "Où pouvez-vous signaler une fraude à la crypto aux États-Unis ?", options: ["ReportFraud.ftc.gov et ic3.gov", "Un groupe quelconque sur les réseaux sociaux", "La ligne d'aide de l'escroc", "Nulle part"], answer: 0, why: "La FTC et l'IC3 du FBI reçoivent les signalements de fraude." },
      { objective: "O6", q: "Que devez-vous noter après une arnaque ?", options: ["Rien", "Les dates, les montants, l'adresse du portefeuille, l'identifiant de transaction et des captures d'écran", "Seulement votre mot de passe", "Votre phrase de récupération"], answer: 1, why: "Ces détails aident les enquêteurs." },
      { objective: "O6", q: "La meilleure façon de protéger un proche des arnaques à la crypto est de :", options: ["Ne jamais en parler", "Lui expliquer les signes d'alerte et où signaler", "Lui donner votre phrase de récupération", "Lui dire d'investir vite"], answer: 1, why: "Une courte conversation sur les signes d'alerte peut éviter une perte." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie de la fiche et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Ce que sont la blockchain et la crypto",
        objective: "O1",
        notYet: "Les deux phrases manquent, sont fausses ou sont copiées sans explication.",
        meets: "Deux phrases simples disent correctement ce que sont une blockchain et une cryptomonnaie.",
        exceeds: "Dit aussi pourquoi les paiements en crypto sont difficiles à annuler."
      },
      {
        name: "Trois risques",
        objective: "O4",
        notYet: "Moins de trois risques, ou un risque est faux.",
        meets: "Trois risques justes parmi le prix, la perte, l'entreprise et l'arnaque.",
        exceeds: "Chaque risque a une façon de se protéger."
      },
      {
        name: "Clés et phrase de récupération",
        objective: "O3",
        notYet: "La fiche ne dit pas de garder secrète la phrase de récupération, ou dit qu'on peut la partager.",
        meets: "La fiche dit de ne jamais partager la phrase de récupération ou la clé privée avec personne.",
        exceeds: "Dit aussi que l'adresse publique est la seule chose qu'on peut partager sans danger pour recevoir de la crypto."
      },
      {
        name: "Quatre signes d'alerte d'arnaque",
        objective: "O5",
        notYet: "Moins de quatre signes, ou un signe est faux.",
        meets: "Quatre signes d'alerte justes, et la vraie publicité ou le vrai message est marqué avec chaque signe qu'il montre.",
        exceeds: "Écrit aussi la réaction sûre : s'arrêter, ne pas payer ni cliquer, et en parler à une personne de confiance."
      },
      {
        name: "Où signaler",
        objective: "O6",
        notYet: "Aucun endroit officiel de signalement, ou un endroit non officiel.",
        meets: "Au moins deux endroits officiels de signalement, comme ReportFraud.ftc.gov et ic3.gov.",
        exceeds: "Liste aussi les détails à noter et met en garde contre les arnaques à la récupération."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille de la fiche de sécurité crypto",
      "Apprenants qui disent avoir repéré et ignoré un message ou un appel d'arnaque à la crypto dans les 30 jours après le cours (enquête de suivi)",
      "Apprenants qui partagent la fiche de sécurité ou les signes d'alerte avec un membre de leur famille ou un ami",
      "Les programmes partenaires signalent moins de membres qui perdent de l'argent dans des arnaques à la crypto, ou plus d'arnaques signalées aux sites officiels"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour lire les pages officielles de mise en garde (FTC, FDIC, SEC, CFTC)",
      "Du papier et un stylo, ou une application de documents, pour la fiche de sécurité crypto d'une page",
      "Une vraie publicité, un vrai message ou une vraie publication sur la crypto à examiner (les captures d'écran conviennent)",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Dites dès le début que le cours n'est pas un conseil financier et ne dit à personne d'acheter ou de vendre de la crypto ; renvoyez les questions d'argent vers un professionnel agréé choisi par l'apprenant.",
      "Ne demandez jamais aux apprenants d'ouvrir une application crypto, de connecter un portefeuille ou de taper une phrase de récupération en classe, même pour s'exercer.",
      "Apportez quelques exemples imprimés ou en capture d'écran de vrais messages d'arnaque pour que les apprenants qui n'en ont pas puissent quand même faire la vérification des signes d'alerte.",
      "Certains apprenants ont peut-être perdu de l'argent dans une arnaque ; gardez un ton sans reproche et montrez-leur comment la signaler.",
      "Invitez les apprenants à venir avec un proche, surtout un parent âgé ou un jeune qui découvre les applications d'argent, et faites faire la fiche de sécurité en binôme."
    ]
  }
};
