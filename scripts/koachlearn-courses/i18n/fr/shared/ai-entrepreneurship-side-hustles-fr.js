"use strict";

// Koach Learn course (shared), French translation of "Entrepreneurship and Side Hustles with AI". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-entrepreneurship-side-hustles-fr",
  lang: "fr",
  translationOf: "ai-entrepreneurship-side-hustles",
  category: "Re-Entry",
  name: "Entrepreneuriat et activités d'appoint avec l'IA",
  skills: "Choisir une activité d'appoint selon ses compétences, Vérifier les règles et les autorisations, Tester la demande à petit prix, Fixer le prix de son service, Rédiger son offre et un prospectus avec l'IA, Suivre l'argent et les impôts",
  outcome: "choisir une activité d'appoint qui correspond à vos compétences et à vos règles, tester si les gens paieront, fixer un prix, utiliser l'IA pour rédiger votre offre et un prospectus ou une publication, et suivre chaque dollar qui entre et qui sort pour être prêt au moment des impôts.",
  about: [
    "Une activité d'appoint est un petit moyen de gagner de l'argent en plus, à votre compte : coiffure, ménage, entretien de jardins, aide aux déménagements, cuisine, nettoyage de voitures, soutien scolaire, vente d'objets faits main ou petites réparations. Beaucoup de personnes qui sortent de prison s'en servent pour se faire un revenu et reprendre confiance pendant qu'elles cherchent un emploi, ou comme un premier pas vers leur propre entreprise.",
    "Les assistants d'IA comme ChatGPT, Microsoft Copilot et Google Gemini peuvent vous aider gratuitement à choisir une idée, à fixer un prix, à rédiger votre offre et à faire une publicité simple.",
    "Ce cours est court et pratique : le but est votre premier client payant. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Vérifiez les conditions de votre libération conditionnelle ou de votre mise à l'épreuve avant de lancer toute activité, et demandez à votre agent si vous n'êtes pas sûr."
  ],
  finalTask: "Choisissez une activité d'appoint et créez une fiche de lancement d'une page : le service et à qui il s'adresse, les règles ou autorisations que vous avez vérifiées (et où), votre prix et comment vous l'avez calculé, une courte offre rédigée avec l'aide de l'IA, un prospectus ou une publication, une liste de cinq personnes ou endroits à prévenir, et un carnet de caisse simple prêt pour votre première vente.",
  chapters: [
    {
      name: "Chapitre 1 : Choisir et tester votre activité",
      lessons: [
        {
          title: "Choisir une activité d'appoint selon vos compétences",
          minutes: 5,
          goal: "Lister des idées d'activité d'appoint adaptées à vos compétences, votre temps et votre argent.",
          text: [
            "La meilleure première activité d'appoint utilise des compétences que vous avez déjà, demande peu d'argent pour démarrer et s'adapte à votre emploi du temps. Si vous avez cuisiné en détention, pensez à la préparation de repas ou à l'aide pour un traiteur. Si vous avez fait de l'entretien, pensez aux petites réparations ou au jardinage. Si on vous demande toujours de coiffer, commencez par là.",
            "Demandez des idées à l'IA : « Je suis doué pour la cuisine et le ménage, j'ai environ 10 heures par semaine, pas de voiture, et moins de 100 $ pour démarrer. Propose 10 activités d'appoint que je pourrais lancer dans mon quartier. » Barrez ensuite celles qui ne vous conviennent pas.",
            "Vérifiez d'abord vos règles. Les conditions de libération conditionnelle ou de mise à l'épreuve peuvent limiter certains travaux, les déplacements ou le maniement d'argent liquide. Certains métiers, comme la coiffure, l'esthétique, l'électricité ou le bâtiment, demandent une licence de l'État aux États-Unis (ailleurs, un diplôme ou une autorisation). Certaines licences tiennent compte du casier judiciaire ; le site de l'organisme qui délivre les licences dans votre État explique ses règles."
          ],
          steps: ["Listez vos compétences, votre temps par semaine et votre argent de départ.", "Demandez à l'IA dix idées adaptées.", "Barrez les idées qui ne collent pas à votre vie.", "Vérifiez les conditions de votre libération conditionnelle ou mise à l'épreuve.", "Vérifiez si le travail demande une licence de l'État."],
          words: [["Activité d'appoint", "un petit moyen de gagner de l'argent à votre compte, souvent à temps partiel."], ["Licence", "une autorisation officielle de l'État ou de la ville pour exercer certains métiers."]],
          slides: [
            { title: "Une bonne première activité", bullets: ["Utilise des compétences que vous avez", "Peu d'argent pour démarrer", "S'adapte à votre emploi du temps"] },
            { title: "Demander des idées à l'IA", bullets: ["Donner vos compétences, temps, argent, transport", "Demander dix idées", "Barrer ce qui ne convient pas"] },
            { title: "Vérifier d'abord les règles", bullets: ["Conditions de libération ou de mise à l'épreuve", "Licences de l'État pour certains métiers", "Le site de l'organisme des licences"] }
          ],
          tryIt: "Demandez à l'IA dix idées d'activité d'appoint à partir de vos vraies compétences, de votre temps et de votre budget. Choisissez vos deux préférées et notez pour chacune les règles ou licences à vérifier.",
          youCanNow: "choisir des idées d'activité d'appoint adaptées à vos compétences et savoir quelles règles vérifier."
        },
        {
          title: "Tester si les gens paieront",
          minutes: 5,
          goal: "Tester la demande pour votre idée en une semaine sans dépenser d'argent.",
          text: [
            "Avant d'acheter du matériel, vérifiez que les gens en veulent. Parlez à dix personnes qui pourraient être clientes : voisins, membres de l'église, amis de la famille, personnes de votre centre de réinsertion. Demandez : « Paieriez-vous quelqu'un pour [service] ? À quelle fréquence ? Combien vous attendriez-vous à payer ? »",
            "Regardez autour de vous : d'autres le font-ils déjà près de chez vous ? C'est une bonne nouvelle : cela veut dire que les gens paient pour ce service. Demandez à l'IA : « De quoi les clients se plaignent-ils le plus souvent pour [service] ? » Régler ces plaintes peut faire votre différence.",
            "Proposez un ou deux travaux à un prix de départ juste à des personnes que vous connaissez, et demandez-leur un avis honnête et, si elles sont satisfaites, un court témoignage ou une recommandation."
          ],
          steps: ["Parlez à dix clients possibles.", "Demandez s'ils paieraient, à quelle fréquence et combien.", "Cherchez d'autres personnes qui le font près de chez vous.", "Demandez à l'IA de quoi les clients se plaignent le plus.", "Faites un ou deux travaux de départ et demandez un avis."],
          words: [["Demande", "le nombre de personnes qui veulent quelque chose et qui paieront pour l'avoir."], ["Recommandation", "quand un client satisfait vous envoie un nouveau client."]],
          slides: [
            { title: "Demander avant d'acheter", bullets: ["Parler à dix clients possibles", "Paieraient-ils ? À quelle fréquence ? Combien ?"] },
            { title: "Regarder autour de soi", bullets: ["D'autres le font = les gens paient", "Demander à l'IA les plaintes fréquentes", "Les régler pour se distinguer"] },
            { title: "Travaux de départ", bullets: ["Un ou deux travaux à un prix juste", "Demander un avis", "Demander des recommandations aux clients satisfaits"] }
          ],
          tryIt: "Écrivez les trois questions que vous poserez, puis parlez à au moins cinq clients possibles cette semaine. Notez ce qu'ils ont dit.",
          youCanNow: "tester si les gens paieront avant de dépenser de l'argent."
        },
        {
          title: "Fixer votre prix",
          minutes: 5,
          goal: "Fixer un prix qui couvre les coûts, vous paie correctement et correspond au marché.",
          text: [
            "Un prix doit couvrir trois choses : vos coûts (produits, bus ou essence, téléphone), votre temps, et un petit supplément à mettre de côté ou pour grandir. Un prix trop bas semble rassurant, mais il peut vous faire travailler presque pour rien.",
            "Exemple : nettoyer un appartement prend 3 heures et 10 $ de produits. Si vous voulez 20 $ de l'heure pour votre temps, cela fait 60 $ plus 10 $, donc environ 70 $. Vérifiez ensuite : combien prennent les autres près de chez vous ? Ajustez à la hausse ou à la baisse.",
            "Demandez à l'IA de vérifier vos calculs et de proposer des formules : « Je fais le ménage d'appartements. Mes coûts sont de 10 $ par travail, je veux 20 $ de l'heure, un travail prend 3 heures. Propose un prix de base, un prix pour un grand nettoyage et une réduction hebdomadaire. » Revérifiez ses calculs vous-même."
          ],
          steps: ["Additionnez les coûts par travail.", "Décidez combien vaut votre heure et multipliez par les heures.", "Ajoutez coûts et temps.", "Comparez avec les autres près de chez vous.", "Demandez à l'IA de proposer des formules, puis vérifiez les calculs."],
          words: [["Coût", "l'argent que vous dépensez pour faire le travail."], ["Formule", "un ensemble de services vendus ensemble à un seul prix."]],
          slides: [
            { title: "Un prix couvre", bullets: ["Les coûts : produits, déplacements, téléphone", "Votre temps", "Un petit supplément à mettre de côté"] },
            { title: "Faire le calcul", bullets: ["3 heures x 20 $ = 60 $", "+ 10 $ de produits = environ 70 $", "Comparer avec les autres près de chez vous"] },
            { title: "Utiliser l'IA pour les formules", bullets: ["Base, complète, réduction pour les habitués", "Revérifier les calculs de l'IA"] }
          ],
          tryIt: "Calculez votre prix pour un travail de votre activité d'appoint : coûts, temps et comparaison avec le marché. Demandez à l'IA de proposer deux formules et vérifiez les calculs.",
          youCanNow: "fixer un prix juste à partir des coûts, du temps et du marché."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir et tester votre activité",
        questions: [
          { q: "Qu'est-ce qui fait une bonne première activité d'appoint ?", options: ["Elle coûte des milliers pour démarrer", "Elle demande une compétence que vous n'avez pas", "Elle utilise vos compétences, demande peu d'argent et s'adapte à votre temps", "Elle exige un grand bureau"], answer: 2, why: "Un faible coût et vos compétences facilitent le démarrage." },
          { q: "Avant de démarrer, une personne en libération conditionnelle doit :", options: ["Vérifier ses conditions et demander à son agent en cas de doute", "Ignorer ses conditions", "Lancer n'importe quoi tout de suite", "Seulement demander à un ami"], answer: 0, why: "Les conditions peuvent limiter certains travaux." },
          { q: "Où vérifier si un métier comme la coiffure demande une licence ?", options: ["Dans une vidéo au hasard", "Dans une supposition de l'IA", "Auprès d'un voisin", "Sur le site de l'organisme des licences de votre État"], answer: 3, why: "Ce sont ces organismes qui fixent les règles des licences." },
          { q: "D'autres proposent déjà votre service dans votre quartier. Cela veut dire :", options: ["Vous devez abandonner", "Les gens paient pour ce service, donc il y a une demande", "C'est illégal", "Personne n'en veut"], answer: 1, why: "Les entreprises existantes montrent que les clients paient." },
          { q: "Un travail prend 2 heures, vous voulez 25 $ de l'heure et les produits coûtent 5 $. Un prix de base juste est d'environ :", options: ["5 $", "27 $", "55 $", "250 $"], answer: 2, why: "2 x 25 $ + 5 $ = 55 $." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Lancer et faire tourner l'activité",
      lessons: [
        {
          title: "Rédiger votre offre et un prospectus avec l'IA",
          minutes: 5,
          goal: "Rédiger une offre claire et faire un prospectus ou une publication avec l'aide de l'IA.",
          text: [
            "Une offre dit ce que vous faites, pour qui, le prix et comment réserver. Exemple : « Ménage d'appartements dans le quartier Est. Ménage simple 70 $, grand nettoyage 110 $. Fiable, soigneux, références disponibles. Envoyez un SMS au [téléphone] pour réserver. »",
            "Demandez à l'IA : « Écris trois courtes versions d'une offre pour mon [service] à [quartier] au prix de [prix]. Aimable et digne de confiance. Moins de 40 mots. » Choisissez celle qui vous ressemble le plus, et retirez tout ce qui n'est pas vrai, comme « agréé et assuré » si ce n'est pas le cas.",
            "Faites un prospectus ou une publication avec l'offre gratuite de Canva ou avec Google Docs. Mettez un titre clair, deux ou trois avantages, le prix et comment vous contacter. Utilisez si possible un numéro de téléphone séparé pour l'activité ou un numéro gratuit pour les SMS, et ne publiez jamais votre adresse personnelle."
          ],
          steps: ["Écrivez quoi, pour qui, le prix et comment réserver.", "Demandez à l'IA trois courtes versions.", "Choisissez-en une et retirez tout ce qui n'est pas vrai.", "Faites un prospectus ou une publication avec titre, avantages, prix et contact.", "Gardez votre adresse personnelle privée."],
          words: [["Offre", "une phrase claire qui dit ce que vous vendez, pour qui, et à quel prix."], ["Prospectus", "une publicité d'une page, imprimée ou numérique."]],
          slides: [
            { title: "Une offre claire", bullets: ["Ce que vous faites et pour qui", "Le prix", "Comment réserver"] },
            { title: "Laisser l'IA aider", bullets: ["Demander trois courtes versions", "Choisir celle qui vous ressemble", "Retirer tout ce qui n'est pas vrai"] },
            { title: "Prospectus ou publication", bullets: ["Titre, avantages, prix, contact", "Canva ou Google Docs", "Jamais votre adresse personnelle"] }
          ],
          tryIt: "Utilisez l'IA pour écrire trois versions de votre offre, choisissez-en une et faites avec un prospectus ou une publication.",
          youCanNow: "rédiger une offre honnête et faire un prospectus ou une publication simple avec l'aide de l'IA."
        },
        {
          title: "Trouver vos premiers clients en sécurité",
          minutes: 5,
          goal: "Trouver vos premiers clients grâce à des personnes et des lieux de confiance, et travailler en sécurité.",
          text: [
            "Vos premiers clients viennent en général de personnes qui vous connaissent : famille, amis, église, programme de réinsertion, anciens collègues. Dites chaque jour à cinq personnes ce que vous faites et donnez-leur un prospectus ou envoyez votre publication.",
            "Affichez sur les panneaux de quartier : bibliothèques, laveries, centres communautaires et groupes locaux en ligne, en suivant les règles de chaque endroit. Demandez à chaque client satisfait un avis ou d'en parler à un ami.",
            "Restez en sécurité. Rencontrez les nouveaux clients d'abord dans un lieu public ou venez accompagné. Faites-vous payer de la façon convenue, et soyez prudent avec les applications : n'acceptez jamais un paiement trop élevé avec une demande de renvoyer la différence, c'est une arnaque courante. Notez ce que comprend chaque travail avant de commencer pour éviter toute confusion."
          ],
          steps: ["Parlez de votre service à cinq personnes par jour.", "Affichez sur les panneaux de quartier et dans les groupes locaux.", "Demandez aux clients satisfaits des avis et des recommandations.", "Convenez par écrit de ce que comprend chaque travail et de son prix.", "Méfiez-vous des arnaques au trop-perçu."],
          words: [["Bouche-à-oreille", "des clients qui parlent de vous à d'autres personnes."], ["Arnaque au trop-perçu", "une ruse où quelqu'un paie trop et vous demande de renvoyer la différence, puis son paiement est rejeté."]],
          slides: [
            { title: "Les premiers clients", bullets: ["Famille, amis, église, programmes", "En parler à cinq personnes par jour"] },
            { title: "Faire passer le mot", bullets: ["Bibliothèque, laverie, panneaux de quartier", "Groupes locaux en ligne", "Avis et recommandations"] },
            { title: "Rester en sécurité", bullets: ["Rencontrer en public ou venir accompagné", "Convenir du travail et du prix par écrit", "Ne jamais renvoyer un trop-perçu"] }
          ],
          sources: [{ name: "FTC : arnaques aux faux chèques", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams" }],
          tryIt: "Écrivez une liste de 15 personnes ou endroits à prévenir de votre activité. Contactez-en cinq aujourd'hui avec votre prospectus ou votre publication.",
          youCanNow: "trouver vos premiers clients grâce à des personnes et des lieux de confiance, tout en restant en sécurité."
        },
        {
          title: "Suivre l'argent et se préparer aux impôts",
          minutes: 6,
          goal: "Tenir un carnet de caisse simple et connaître les bases des impôts sur une activité d'appoint.",
          text: [
            "Suivez chaque dollar dès le premier jour. Un carnet de caisse simple dans Google Sheets ou un cahier : date, client (prénom ou étiquette), travail, argent entré, argent sorti, et à quoi a servi l'argent sorti. Gardez les reçus des produits, dans un dossier ou en photo sur votre téléphone.",
            "Aux États-Unis, les revenus d'une activité d'appoint sont imposables, même en liquide et même pour de petites sommes. Les travailleurs indépendants peuvent devoir la taxe sur le travail indépendant (self-employment tax) et payer des acomptes d'impôt pendant l'année. Les règles et les seuils changent ; consultez irs.gov (le site du fisc américain) ou un programme d'aide fiscale gratuite comme VITA avant la période des impôts. Ailleurs, renseignez-vous auprès de l'administration fiscale de votre pays.",
            "Si vous grandissez, vous voudrez peut-être un compte bancaire professionnel, l'enregistrement d'un nom commercial auprès de votre ville ou État, ou un EIN. L'IRS dit qu'un EIN est gratuit auprès de l'IRS ; méfiez-vous des sites qui le font payer. L'IA peut vous aider à créer le carnet de caisse et à expliquer les mots fiscaux, mais pour vos vrais impôts, utilisez irs.gov ou un professionnel de la fiscalité."
          ],
          steps: ["Créez un carnet de caisse : date, étiquette client, travail, entrée, sortie, motif.", "Gardez chaque reçu.", "Additionnez vos revenus et vos coûts chaque mois.", "Mettez de côté une partie de chaque paiement pour les impôts.", "Consultez irs.gov ou un programme d'aide fiscale gratuite avant la période des impôts."],
          words: [["Self-employment tax", "aux États-Unis, les cotisations de sécurité sociale et d'assurance maladie (Social Security et Medicare) des personnes qui travaillent à leur compte."], ["EIN", "Employer Identification Number : un numéro fiscal fédéral américain pour une entreprise."], ["VITA", "Volunteer Income Tax Assistance : une aide fiscale gratuite soutenue par l'IRS pour les personnes qui y ont droit."]],
          slides: [
            { title: "Suivre chaque dollar", bullets: ["Date, étiquette client, travail", "Argent entré et argent sorti", "Garder chaque reçu"] },
            { title: "Impôts (États-Unis)", bullets: ["Les revenus d'appoint sont imposables, le liquide aussi", "Self-employment tax et acomptes possibles", "Voir irs.gov ou l'aide gratuite VITA"] },
            { title: "Quand l'activité grandit", bullets: ["Compte bancaire professionnel", "Enregistrer un nom auprès de la ville ou de l'État", "L'EIN est gratuit auprès de l'IRS"] }
          ],
          sources: [{ name: "IRS : obtenir un Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS : gérer les impôts de l'économie des petits boulots", url: "https://www.irs.gov/businesses/gig-economy-tax-center" }, { name: "IRS : préparation gratuite des déclarations (VITA)", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }],
          tryIt: "Tâche finale : créez votre carnet de caisse et terminez votre fiche de lancement d'une page : service, règles vérifiées, prix, offre, prospectus ou publication, cinq personnes ou endroits à prévenir, et le carnet de caisse prêt pour votre première vente.",
          youCanNow: "lancer une activité d'appoint avec l'aide de l'IA, trouver des clients en sécurité et suivre votre argent pour les impôts."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Lancer et faire tourner l'activité",
        questions: [
          { q: "Qu'est-ce qui a sa place dans une offre claire ?", options: ["Votre adresse personnelle", "Votre numéro de sécurité sociale", "Une fausse licence", "Ce que vous faites, pour qui, le prix et comment réserver"], answer: 3, why: "Ces quatre parties rendent une offre claire." },
          { q: "L'IA écrit « agréé et assuré » mais ce n'est pas votre cas. Que faites-vous ?", options: ["Le retirer", "Le garder", "L'écrire en plus gros", "Ajouter « primé »"], answer: 0, why: "N'affirmez jamais ce qui n'est pas vrai." },
          { q: "Un client vous paie 200 $ pour un travail à 70 $ et vous demande de renvoyer 130 $. C'est probablement :", options: ["Un pourboire généreux", "Une opération bancaire normale", "Une arnaque au trop-perçu", "Un remboursement d'impôt"], answer: 2, why: "Les demandes de renvoi d'un trop-perçu sont une arnaque courante." },
          { q: "Aux États-Unis, les revenus d'appoint en liquide sont-ils imposables ?", options: ["Non, le liquide n'est jamais imposé", "Seulement au-delà d'un million", "Seulement certains mois", "Oui"], answer: 3, why: "Tous les revenus, y compris en liquide, sont imposables." },
          { q: "Combien l'IRS fait-il payer un EIN ?", options: ["500 $", "50 $ par mois", "Rien ; il est gratuit auprès de l'IRS", "Cela dépend du site"], answer: 2, why: "L'IRS dit que les EIN sont gratuits ; méfiez-vous des sites payants." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Entrepreneuriat et activités d'appoint avec l'IA",
    questions: [
      { q: "Une activité d'appoint est :", options: ["Un emploi public à plein temps", "Un petit moyen de gagner de l'argent à votre compte, souvent à temps partiel", "Un prêt", "Une arnaque"], answer: 1, why: "C'est un petit travail qu'on mène soi-même." },
      { q: "Quelle est une bonne activité d'appoint pour quelqu'un qui a cuisiné dans une grande cuisine ?", options: ["Préparer des repas pour les voisins", "Faire de l'électricité sans licence", "Spéculer en bourse", "Vendre des médicaments"], answer: 0, why: "Elle utilise des compétences existantes et demande peu d'argent." },
      { q: "Quand vous demandez à l'IA des idées d'activité d'appoint, dites-lui :", options: ["Votre numéro de dossier", "Vos identifiants bancaires", "Vos compétences, votre temps, votre argent et votre transport", "Rien"], answer: 2, why: "De vraies limites donnent des idées réalistes." },
      { q: "Certaines licences d'État tiennent compte du casier judiciaire. Où sont les règles ?", options: ["Sur le site de l'organisme des licences de l'État", "Dans un groupe sur les réseaux sociaux", "Sur un prospectus", "Dans un seul chat d'IA"], answer: 0, why: "Les organismes de licences publient leurs règles." },
      { q: "À combien de clients possibles le cours conseille-t-il de parler ?", options: ["Un", "Zéro", "Mille", "Dix"], answer: 3, why: "Dix conversations montrent la vraie demande." },
      { q: "La demande désigne :", options: ["Combien vous voulez gagner", "Le nombre de personnes qui veulent quelque chose et paieront", "Une décision de justice", "Un prix"], answer: 1, why: "La demande, ce sont les clients prêts à payer." },
      { q: "Demander à l'IA de quoi se plaignent les clients vous aide à :", options: ["Copier les prix des concurrents", "Trouver comment vous distinguer", "Éviter les clients", "Sauter le test"], answer: 1, why: "Régler les plaintes fréquentes est un avantage." },
      { q: "Un prix doit couvrir :", options: ["Seulement les produits", "Seulement ce que les amis veulent payer", "Rien", "Les coûts, votre temps et un petit supplément"], answer: 3, why: "Les trois vous permettent de durer." },
      { q: "3 heures à 20 $ plus 10 $ de produits, cela fait :", options: ["33 $", "60 $", "70 $", "200 $"], answer: 2, why: "3 x 20 = 60, plus 10 = 70." },
      { q: "Une formule est :", options: ["Un colis par la poste", "Un formulaire fiscal", "Un ensemble de services vendus ensemble à un seul prix", "Un prêt"], answer: 2, why: "Les formules facilitent le choix." },
      { q: "Après que l'IA a proposé des prix, vous devez :", options: ["Les accepter les yeux fermés", "Tripler tous les prix", "Ignorer le marché", "Revérifier les calculs vous-même"], answer: 3, why: "L'IA peut faire des erreurs de calcul." },
      { q: "Qu'est-ce qu'il ne faut jamais mettre sur un prospectus ?", options: ["Votre prix", "Votre service", "Votre adresse personnelle", "Comment réserver"], answer: 2, why: "Gardez votre adresse personnelle privée." },
      { q: "Quel outil gratuit pouvez-vous utiliser pour faire un prospectus ?", options: ["Seulement une imprimerie payante", "L'offre gratuite de Canva ou Google Docs", "Un formulaire fiscal", "Une application bancaire"], answer: 1, why: "Les deux sont gratuits et faciles." },
      { q: "Vos premiers clients viennent en général :", options: ["De personnes qui vous connaissent", "De publicités payantes à la télé", "D'inconnus à l'étranger", "De nulle part"], answer: 0, why: "La confiance commence par votre entourage." },
      { q: "Pour une première rencontre avec un nouveau client, il est plus sûr de :", options: ["Aller seul la nuit dans un lieu inconnu", "Donner d'abord votre adresse", "Se retrouver dans un lieu public ou venir accompagné", "Ne pas convenir du travail"], answer: 2, why: "La sécurité d'abord avec les nouvelles personnes." },
      { q: "Écrire ce que comprend chaque travail aide à :", options: ["Éviter la confusion sur le travail et le prix", "Allonger les travaux", "Éviter de payer des impôts", "Rien"], answer: 0, why: "Des accords clairs évitent les litiges." },
      { q: "Un carnet de caisse contient :", options: ["Les mots de passe des clients", "Votre numéro de sécurité sociale", "Seulement l'argent entré", "Date, étiquette client, travail, argent entré, argent sorti"], answer: 3, why: "Il faut les entrées et les sorties." },
      { q: "Pourquoi garder les reçus des produits ?", options: ["Pour les jeter plus tard", "Pour suivre les coûts et justifier vos dossiers fiscaux", "Pour décorer", "Ils ne servent à rien"], answer: 1, why: "Les reçus justifient vos coûts." },
      { q: "Où obtenir une aide fiscale gratuite si vous y avez droit (États-Unis) ?", options: ["Sur un site au hasard qui fait payer les EIN", "Auprès de VITA, par l'IRS", "Auprès d'un escroc", "Nulle part"], answer: 1, why: "VITA offre une aide fiscale gratuite aux personnes qui y ont droit." },
      { q: "L'IA explique la self-employment tax. Pour vos vrais impôts, vous devez :", options: ["Faire entièrement confiance à l'IA", "Ne pas déclarer", "Demander à un inconnu en ligne", "Consulter irs.gov ou un professionnel de la fiscalité"], answer: 3, why: "Les règles fiscales changent et dépendent de votre situation." }
    ]
  }
};
