"use strict";

// Koach Learn course (shared), French translation of "AI in Finance". Shape and rules: ../../../README.md (Translations).
// Teaches money management for an organization with AI help; no investment advice; points to irs.gov and a professional for tax questions.

module.exports = {
  id: "ai-in-finance-fr",
  lang: "fr",
  translationOf: "ai-in-finance",
  category: "Small Business",
  name: "L'IA au service des finances",
  skills: "Protéger les données financières avec l'IA, Classer recettes et dépenses, Construire un budget mensuel, Comparer le budget au réel, Prévoir la trésorerie, Expliquer les chiffres",
  outcome: "utiliser un assistant d'IA et un tableur pour classer un mois de recettes et de dépenses, construire un budget et le comparer à ce qui s'est vraiment passé, établir une prévision de trésorerie sur 13 semaines et expliquer les résultats en mots simples, sans partager de données financières privées.",
  about: [
    "Les questions d'argent empêchent les propriétaires et les responsables d'associations de dormir : Pourra-t-on payer les salaires ? Où est passé l'argent ? Peut-on se permettre une nouvelle embauche ou un nouveau programme ? Les outils d'IA peuvent vous aider à organiser les chiffres, à construire des tableaux et à expliquer ce qu'ils veulent dire.",
    "Ce cours s'adresse aux propriétaires de petites entreprises, aux directeurs d'associations, aux trésoriers et aux aides-comptables en formation. Exemples : un food truck, une entreprise de nettoyage, une association sportive pour jeunes et le service d'aide alimentaire d'une église.",
    "Vous utiliserez des outils gratuits comme Google Sheets ou Excel avec ChatGPT, Microsoft Copilot ou Google Gemini. Vous vous exercerez avec des chiffres d'exemple ou nettoyés, jamais avec des numéros de compte. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant », un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours n'est pas un conseil fiscal, juridique ou d'investissement ; pour cela, consultez un professionnel agréé et, aux États-Unis, irs.gov (le site du fisc américain)."
  ],
  finalTask: "À partir d'un mois de transactions réelles ou d'exemple, dont tous les numéros de compte et les noms ont été retirés, construisez un tableau qui classe recettes et dépenses par catégorie, un tableau budget-réel avec les trois plus grands écarts expliqués, et une prévision de trésorerie sur 13 semaines avec la semaine la plus basse marquée. Rédigez ensuite un point financier de cinq phrases, en langage simple, pour un propriétaire, un associé ou un conseil d'administration.",
  chapters: [
    {
      name: "Chapitre 1 : Organiser l'argent",
      lessons: [
        {
          title: "Utiliser l'IA avec l'argent en toute sécurité",
          minutes: 5,
          goal: "Préparer des données financières pour obtenir l'aide de l'IA sans exposer de détails privés.",
          text: [
            "Les assistants d'IA sont doués pour les formules de tableur, le tri, la recherche de tendances et l'explication de termes comme « comptabilité d'engagement » ou « marge brute ». Ce ne sont pas des comptables : ils peuvent faire des erreurs de calcul et ne connaissent pas les règles fiscales de votre situation précise.",
            "Ne collez jamais de numéros de compte bancaire ou de carte, de codes bancaires, de mots de passe, de numéros de sécurité sociale ou d'identification fiscale, ni de noms de clients, de donateurs ou d'employés dans un outil d'IA grand public. Exportez plutôt les transactions dans un tableur, supprimez ces colonnes et remplacez les noms par des étiquettes générales comme « Client A » ou « Fournisseur 1 ».",
            "Vérifiez les calculs de l'IA avec le tableur lui-même. Demandez une formule à l'IA, laissez le tableur calculer, et contrôlez quelques totaux à la main. Pour les questions d'impôts, de paie et de droit, vérifiez auprès de l'administration fiscale (aux États-Unis, irs.gov et l'agence fiscale de votre État) ou d'un comptable agréé."
          ],
          steps: ["Exportez les transactions de votre banque ou de votre logiciel de comptabilité vers un tableur.", "Supprimez les numéros de compte et tout numéro d'identification.", "Remplacez les noms des personnes par des étiquettes comme « Client A ».", "Utilisez l'IA pour les formules et les explications, pas pour des réponses fiscales définitives.", "Contrôlez les calculs de l'IA avec le tableur."],
          words: [["Exporter", "enregistrer des informations d'un programme dans un fichier qu'un autre programme peut ouvrir."], ["Transaction", "un mouvement d'argent, entrant ou sortant, comme une vente ou une facture payée."]],
          slides: [
            { title: "L'IA est douée pour", bullets: ["Les formules de tableur et le tri", "Repérer des tendances", "Expliquer les termes financiers"] },
            { title: "Ne jamais coller dans l'IA", bullets: ["Numéros de compte, de carte ou codes bancaires", "Mots de passe, numéros de sécurité sociale ou fiscaux", "Noms de clients, de donateurs ou d'employés"] },
            { title: "Nettoyer, puis vérifier", bullets: ["Supprimer les numéros, étiqueter les noms", "Laisser le tableur calculer", "Impôts : administration fiscale ou comptable"] }
          ],
          tryIt: "Exportez ou saisissez 20 transactions d'un mois réel ou d'exemple dans un tableur. Retirez tous les numéros de compte et remplacez les noms par des étiquettes.",
          youCanNow: "préparer des données financières pour l'aide de l'IA sans exposer de détails privés."
        },
        {
          title: "Classer les recettes et les dépenses par catégorie",
          minutes: 5,
          goal: "Utiliser l'IA pour proposer des catégories et un tableur pour totaliser chacune.",
          text: [
            "Les catégories transforment une longue liste de transactions en une image claire. Catégories courantes pour une entreprise : ventes, coût des marchandises (ingrédients, fournitures pour les produits), loyer, salaires, marketing, logiciels, véhicule et carburant, assurances et frais. Les associations ajoutent souvent dons, subventions, coûts des programmes et frais de collecte de fonds.",
            "Collez les colonnes nettoyées de description et de montant dans un assistant d'IA et demandez : « Propose une catégorie pour chaque ligne à partir de cette liste : [vos catégories]. Rends-moi un tableau. » Recopiez ensuite le tableau dans votre feuille et corrigez les erreurs.",
            "Demandez à l'IA la formule pour totaliser chaque catégorie. Dans Google Sheets comme dans Excel en anglais, SUMIF additionne les montants qui correspondent à une étiquette, par exemple =SUMIF(C:C, \"Loyer\", D:D). Dans un tableur en français, la fonction s'appelle SOMME.SI et les virgules deviennent des points-virgules."
          ],
          steps: ["Écrivez votre liste de catégories.", "Demandez à l'IA de proposer une catégorie pour chaque transaction nettoyée.", "Collez les catégories dans votre feuille et corrigez les erreurs.", "Utilisez SUMIF (SOMME.SI) pour totaliser chaque catégorie.", "Vérifiez que les totaux des catégories font bien le total général."],
          words: [["Catégorie", "un groupe de transactions semblables, comme le loyer ou le marketing."], ["SUMIF (SOMME.SI)", "une formule de tableur qui additionne les montants qui remplissent une condition."], ["Coût des marchandises", "ce que vous dépensez pour fabriquer ou acheter les produits que vous vendez."]],
          slides: [
            { title: "Catégories courantes", bullets: ["Ventes, coût des marchandises, loyer, salaires", "Marketing, logiciels, carburant, assurances", "Associations : dons, subventions, programmes"] },
            { title: "L'IA propose, vous corrigez", bullets: ["Coller les descriptions et montants nettoyés", "Demander une catégorie tirée de votre liste", "Corriger celles qui sont fausses"] },
            { title: "Totaliser avec SUMIF", bullets: ["=SUMIF(C:C, \"Loyer\", D:D) ; en français : SOMME.SI", "Les totaux des catégories doivent égaler le total général"] }
          ],
          tryIt: "Faites proposer par l'IA des catégories pour vos 20 transactions nettoyées, corrigez-les et totalisez chaque catégorie avec SUMIF (SOMME.SI). Vérifiez que les totaux correspondent au total général.",
          youCanNow: "classer des transactions par catégorie et les totaliser avec une formule de tableur."
        },
        {
          title: "Construire un budget et le comparer au réel",
          minutes: 6,
          goal: "Construire un budget mensuel et un tableau budget-réel qui montre où vous vous écartez.",
          text: [
            "Un budget est votre plan d'entrées et de sorties d'argent pour une période. Le budget-réel compare le plan à ce qui s'est vraiment passé. La différence s'appelle l'écart.",
            "Préparez les colonnes : catégorie, budget, réel, écart (réel moins budget) et pourcentage d'écart. Demandez à l'IA : « Donne-moi les formules Google Sheets pour l'écart et le pourcentage d'écart. » Cherchez ensuite les plus grands écarts, en dollars et en pourcentage.",
            "Expliquez chaque grand écart en une phrase. « Le carburant a dépassé le budget de 300 $ parce que nous avons ajouté une deuxième tournée de livraison. » L'IA peut vous aider à formuler les explications, mais vous seul connaissez les vraies raisons."
          ],
          steps: ["Listez les catégories avec un montant budgété pour chacune.", "Reprenez les totaux réels de la leçon 2.", "Ajoutez écart = réel moins budget.", "Ajoutez pourcentage d'écart = écart divisé par budget.", "Expliquez les trois plus grands écarts en une phrase chacun."],
          words: [["Budget", "un plan de l'argent qui entre et qui sort."], ["Écart", "la différence entre le budget et ce qui s'est vraiment passé."]],
          slides: [
            { title: "Budget ou réel", bullets: ["Budget : le plan", "Réel : ce qui s'est passé", "Écart : la différence"] },
            { title: "Préparer le tableau", bullets: ["Catégorie, budget, réel", "Écart et pourcentage d'écart"] },
            { title: "Expliquer les gros écarts", bullets: ["Les trois plus grandes différences", "Une phrase chacune avec la vraie raison"] }
          ],
          tryIt: "Construisez un tableau budget-réel pour votre mois avec l'écart et le pourcentage d'écart. Expliquez les trois plus grands écarts en une phrase chacun.",
          youCanNow: "construire un budget, le comparer aux résultats réels et expliquer les différences."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Organiser l'argent",
        questions: [
          { q: "Que ne devez-vous JAMAIS coller dans un outil d'IA grand public ?", options: ["Une liste de catégories", "Un tableau de montants nettoyé", "Vos numéros de compte et codes bancaires", "Une question sur le sens du mot « écart »"], answer: 2, why: "Les numéros de compte sont des données financières privées." },
          { q: "L'IA donne un total qui semble faux. Que faites-vous ?", options: ["Laisser le tableur calculer et contrôler à la main", "Faire confiance à l'IA", "Supprimer les données", "L'envoyer au conseil"], answer: 0, why: "L'IA peut se tromper en calcul ; le tableur et un contrôle manuel confirment." },
          { q: "Que fait =SUMIF(C:C, \"Loyer\", D:D) ?", options: ["Elle supprime les lignes de loyer", "Elle compte les clients", "Elle trie par date", "Elle additionne les montants de la colonne D quand la colonne C indique Loyer"], answer: 3, why: "SUMIF additionne les montants qui remplissent une condition." },
          { q: "Le budget carburant était de 500 $ ; le réel est de 800 $. Quel est l'écart ?", options: ["1 300 $", "300 $ de dépassement", "300 $ d'économie", "500 $"], answer: 1, why: "Réel moins budget = 800 - 500 = 300 de dépassement." },
          { q: "Qui doit expliquer pourquoi un écart s'est produit ?", options: ["L'IA seule", "Vous, à partir de ce qui s'est vraiment passé", "Personne", "Un site web au hasard"], answer: 1, why: "Vous seul connaissez les vraies raisons derrière les chiffres." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier et expliquer",
      lessons: [
        {
          title: "Prévoir la trésorerie des 13 prochaines semaines",
          minutes: 6,
          goal: "Construire une prévision de trésorerie sur 13 semaines et trouver la semaine où l'argent est le plus serré.",
          text: [
            "Bénéfice et trésorerie, ce n'est pas la même chose. On peut être bénéficiaire sur le papier et pourtant manquer d'argent si les clients paient en retard ou si une grosse facture arrive. Une prévision de trésorerie montre quand l'argent entre et sort, semaine par semaine.",
            "Une prévision sur 13 semaines (environ trois mois) est un outil courant. Lignes : trésorerie de début, entrées (ventes, paiements, dons, subventions), sorties (salaires, loyer, fournisseurs, remboursements d'emprunt) et trésorerie de fin. La trésorerie de fin de chaque semaine devient la trésorerie de début de la semaine suivante.",
            "Demandez à l'IA de construire le modèle : « Crée un tableau de prévision de trésorerie sur 13 semaines pour Google Sheets, avec des formules où la trésorerie de fin de chaque semaine devient la trésorerie de début de la suivante. » Remplissez vos chiffres prévus, puis trouvez la semaine la plus basse. C'est le moment où vous devrez peut-être reporter un achat, relancer un paiement ou prévoir une ligne de crédit."
          ],
          steps: ["Demandez à l'IA un modèle de trésorerie sur 13 semaines avec formules.", "Saisissez le solde d'aujourd'hui comme trésorerie de début de la semaine 1.", "Saisissez les entrées et sorties prévues pour chaque semaine.", "Vérifiez que la trésorerie de fin passe à la semaine suivante.", "Marquez la semaine la plus basse et préparez-la."],
          words: [["Trésorerie (flux de trésorerie)", "le calendrier de l'argent qui entre et qui sort."], ["Prévision", "la meilleure estimation possible de chiffres futurs."], ["Ligne de crédit", "un montant fixé qu'une banque vous permet d'emprunter en cas de besoin."]],
          slides: [
            { title: "Bénéfice n'est pas trésorerie", bullets: ["Paiements en retard et grosses factures", "On peut manquer d'argent en étant bénéficiaire"] },
            { title: "Lignes de la prévision sur 13 semaines", bullets: ["Trésorerie de début", "Entrées et sorties", "La trésorerie de fin passe à la semaine suivante"] },
            { title: "Trouver la semaine la plus basse", bullets: ["Reporter un achat", "Relancer un paiement", "Prévoir un financement tôt"] }
          ],
          tryIt: "Construisez une prévision de trésorerie sur 13 semaines avec l'aide de l'IA. Remplissez-la avec des chiffres réels ou d'exemple et marquez la semaine la plus basse avec une action que vous feriez.",
          youCanNow: "construire une prévision de trésorerie sur 13 semaines et préparer la semaine la plus serrée."
        },
        {
          title: "Repérer les problèmes et la fraude avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA et des vérifications simples pour repérer les dépenses inhabituelles, les doublons et les arnaques.",
          text: [
            "L'IA et les tableurs peuvent signaler ce qu'une personne occupée ne voit pas : des paiements en double, un abonnement oublié, une hausse soudaine dans une catégorie, ou un fournisseur que vous ne connaissez pas.",
            "Demandez : « Regarde ce tableau nettoyé. Liste les doublons possibles, les montants inhabituels et les catégories qui ont beaucoup changé par rapport au mois dernier. » Puis examinez chaque point vous-même.",
            "Méfiez-vous des arnaques visant les entreprises et les associations : fausses factures, e-mails qui demandent de changer les coordonnées bancaires d'un fournisseur, et demandes de paiement urgentes qui semblent venir du patron. Confirmez toujours en appelant un numéro que vous connaissez déjà. Aux États-Unis, signalez la fraude sur ReportFraud.ftc.gov (le site de la FTC, l'agence fédérale de protection des consommateurs) ; ailleurs, auprès de l'autorité compétente de votre pays."
          ],
          steps: ["Demandez à l'IA de lister les doublons possibles et les montants inhabituels.", "Comparez les catégories au mois dernier.", "Examinez vous-même chaque alerte.", "Confirmez tout changement de coordonnées bancaires en appelant un numéro connu.", "Signalez la fraude à la FTC (ou à l'autorité de votre pays)."],
          words: [["Paiement en double", "payer deux fois la même facture."], ["Facture", "un document qui demande un paiement."], ["Fraude au paiement", "tromper quelqu'un pour qu'il envoie de l'argent au mauvais endroit."]],
          slides: [
            { title: "Ce que l'IA peut signaler", bullets: ["Paiements en double", "Abonnements oubliés", "Hausses soudaines ou fournisseurs inconnus"] },
            { title: "Arnaques visant les entreprises", bullets: ["Fausses factures", "« Merci de mettre à jour nos coordonnées bancaires »", "Demandes urgentes qui semblent venir du patron"] },
            { title: "Protéger l'argent", bullets: ["Appeler un numéro déjà connu", "Examiner chaque alerte", "Signaler sur ReportFraud.ftc.gov (États-Unis)"] }
          ],
          sources: [{ name: "FTC : ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }, { name: "FTC : reconnaître et éviter l'hameçonnage", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Demandez à l'IA d'examiner vos transactions nettoyées pour trouver doublons et montants inhabituels. Examinez chaque alerte et notez ce que vous avez trouvé.",
          youCanNow: "utiliser l'IA et des vérifications simples pour repérer les dépenses inhabituelles et les arnaques au paiement."
        },
        {
          title: "Expliquer les chiffres et bien conserver les documents",
          minutes: 5,
          goal: "Rédiger un point financier en langage simple et savoir combien de temps garder les documents.",
          text: [
            "Les propriétaires, associés et conseils d'administration ont besoin d'un point court et clair, pas d'un énorme tableau. Un bon point tient en cinq phrases : combien est entré, combien est sorti, le plus grand écart et sa raison, les perspectives de trésorerie tirées de votre prévision, et une décision ou une action nécessaire.",
            "Demandez à l'IA de transformer vos chiffres en brouillon, puis vérifiez chaque chiffre dans le tableur. Retirez tout ce que l'IA a ajouté qui n'est pas vrai.",
            "Conservez les documents. L'IRS (le fisc américain) dit de garder les documents qui justifient les revenus et les déductions jusqu'à la fin du délai de prescription de la déclaration, en général 3 ans, plus longtemps dans certains cas, et au moins 4 ans pour les documents sur les impôts liés aux salaires. Vérifiez sur irs.gov ou auprès d'un comptable pour votre situation ; hors des États-Unis, les délais dépendent de votre pays."
          ],
          steps: ["Écrivez cinq phrases : entrées, sorties, plus grand écart, perspectives de trésorerie, décision nécessaire.", "Faites améliorer la formulation par l'IA.", "Vérifiez chaque chiffre dans le tableur.", "Enregistrez le tableur et les reçus dans un dossier sûr et sauvegardé.", "Vérifiez sur irs.gov (ou auprès de votre administration fiscale) combien de temps les garder."],
          words: [["Conseil d'administration", "le groupe qui supervise une association ou une entreprise."], ["Délai de prescription", "le temps dont dispose l'administration fiscale pour contrôler ou modifier une déclaration."]],
          slides: [
            { title: "Un point en cinq phrases", bullets: ["Argent entré et argent sorti", "Plus grand écart et sa raison", "Perspectives de trésorerie et décision nécessaire"] },
            { title: "L'IA rédige, vous vérifiez", bullets: ["Vérifier chaque chiffre", "Retirer tout ce qui n'est pas vrai"] },
            { title: "Conserver les documents (IRS)", bullets: ["En général 3 ans ; plus dans certains cas", "Au moins 4 ans pour les impôts liés aux salaires", "Vérifier sur irs.gov ou auprès d'un comptable"] }
          ],
          sources: [{ name: "IRS : combien de temps garder les documents ?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Tâche finale : rédigez un point financier de cinq phrases à partir de votre mois classé, de votre tableau budget-réel et de votre prévision sur 13 semaines. Vérifiez chaque chiffre, puis enregistrez tous les fichiers dans un dossier sauvegardé.",
          youCanNow: "organiser, planifier et expliquer l'argent d'une organisation avec l'aide de l'IA tout en protégeant les données."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier et expliquer",
        questions: [
          { q: "Pourquoi une entreprise bénéficiaire peut-elle quand même manquer d'argent ?", options: ["Le bénéfice égale toujours la trésorerie", "Les banques gardent tous les bénéfices", "Cela ne peut pas arriver", "Les paiements arrivent en retard pendant que les factures tombent"], answer: 3, why: "Le calendrier des entrées et sorties compte." },
          { q: "Dans une prévision de trésorerie, la trésorerie de début de la semaine prochaine égale :", options: ["La trésorerie de fin de cette semaine", "Le bénéfice de l'an dernier", "Le budget", "Zéro"], answer: 0, why: "Chaque semaine se reporte sur la suivante." },
          { q: "Un e-mail d'un fournisseur vous demande d'envoyer les prochains paiements sur un nouveau compte bancaire. Que faites-vous ?", options: ["Le mettre à jour tout de suite", "Répondre avec vos identifiants bancaires", "Appeler le fournisseur à un numéro que vous connaissez déjà pour confirmer", "Le transférer à tout le personnel"], answer: 2, why: "Les demandes de changement de coordonnées bancaires sont une fraude courante." },
          { q: "Selon l'IRS, quelle est la durée générale de conservation des documents qui justifient une déclaration ?", options: ["Une semaine", "Ne jamais les garder", "Exactement 50 ans", "En général 3 ans, plus dans certains cas"], answer: 3, why: "Les consignes de l'IRS donnent 3 ans comme durée générale, avec des exceptions." },
          { q: "L'IA rédige un point financier pour le conseil. Que devez-vous faire avant de l'envoyer ?", options: ["L'envoyer sans le lire", "Ajouter des chiffres pour faire bonne impression", "Vérifier chaque chiffre dans le tableur", "Supprimer le tableur"], answer: 2, why: "L'IA peut se tromper de chiffres ; c'est vous qui vérifiez." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA au service des finances",
    questions: [
      { q: "Pour quoi l'IA est-elle douée dans le travail financier ?", options: ["Donner des décisions fiscales définitives", "Écrire des formules de tableur et expliquer des termes", "Garantir des rendements d'investissement", "Signer des documents bancaires"], answer: 1, why: "L'IA aide pour les formules et les explications, pas pour des réponses fiscales ou juridiques définitives." },
      { q: "Avant de coller des transactions dans l'IA, vous devez :", options: ["Retirer les numéros de compte et remplacer les noms par des étiquettes", "Ajouter votre mot de passe", "Inclure les numéros de téléphone des donateurs", "Ajouter les numéros de sécurité sociale"], answer: 0, why: "Des données nettoyées protègent la vie privée." },
      { q: "« Client A » à la place d'un vrai nom est :", options: ["Une faute de frappe", "Une catégorie", "Une étiquette qui protège la vie privée", "Un écart"], answer: 2, why: "Les étiquettes cachent les noms privés." },
      { q: "Où confirmer une question fiscale ?", options: ["Auprès de l'administration fiscale (irs.gov aux États-Unis) ou d'un comptable agréé", "Dans une publication sur les réseaux sociaux", "Seulement dans un chat d'IA", "Auprès d'un ami qui devine"], answer: 0, why: "Les sources officielles et les professionnels donnent des réponses fiscales fiables." },
      { q: "Laquelle est une catégorie de recettes typique d'une association ?", options: ["Coût des marchandises", "Carburant", "Loyer", "Subventions"], answer: 3, why: "Les subventions et les dons sont des recettes d'association." },
      { q: "Qu'est-ce qu'une transaction ?", options: ["Un type de budget", "Un mouvement d'argent entrant ou sortant", "Un formulaire fiscal", "Un mot de passe bancaire"], answer: 1, why: "Chaque vente ou paiement est une transaction." },
      { q: "Après que l'IA a proposé des catégories, vous devez :", options: ["Toutes les accepter", "Corriger celles qui sont fausses", "Supprimer la feuille", "Les envoyer aux clients"], answer: 1, why: "Les propositions de l'IA doivent être vérifiées." },
      { q: "Les totaux des catégories doivent :", options: ["Dépasser le total général", "Être au hasard", "Rester vides", "Faire le total général"], answer: 3, why: "Cette vérification repère les lignes oubliées ou comptées deux fois." },
      { q: "Un budget est :", options: ["Un plan de l'argent qui entre et qui sort", "Un compte bancaire", "Une déclaration d'impôts", "Un prêt"], answer: 0, why: "C'est le plan financier d'une période." },
      { q: "Budget marketing de 1 000 $ ; réel de 700 $. L'écart est de :", options: ["300 $ de dépassement", "1 700 $", "300 $ sous le budget", "700 $"], answer: 2, why: "700 - 1 000 = -300, donc 300 $ sous le budget." },
      { q: "Pourquoi expliquer chaque grand écart ?", options: ["Pour allonger le rapport", "Ce n'est jamais nécessaire", "Pour cacher des erreurs", "Pour que les décideurs sachent ce qui s'est passé et pourquoi"], answer: 3, why: "Les explications transforment les chiffres en décisions." },
      { q: "Combien de semaines couvre la prévision de trésorerie du cours ?", options: ["2", "13", "52", "100"], answer: 1, why: "Une prévision sur 13 semaines couvre environ trois mois." },
      { q: "La semaine la plus basse de votre prévision vous dit :", options: ["Votre bénéfice total", "Quand l'argent sera le plus serré, pour vous préparer", "Le montant de vos impôts", "Rien d'utile"], answer: 1, why: "Elle montre quand agir tôt." },
      { q: "Une ligne de crédit est :", options: ["Un montant fixé qu'une banque vous permet d'emprunter en cas de besoin", "Une ligne de tableur", "Un type de don", "Une déduction fiscale"], answer: 0, why: "Elle peut couvrir de courts manques de trésorerie." },
      { q: "Que peut aider à signaler l'IA dans vos transactions ?", options: ["Vos futurs gains au loto", "L'impôt exact que vous devez", "Des paiements en double possibles", "Les mots de passe des clients"], answer: 2, why: "L'IA peut repérer des schémas comme les doublons." },
      { q: "Un e-mail urgent qui semble venir de votre patron demande un virement aujourd'hui. Vous devez :", options: ["Confirmer par téléphone à un numéro que vous connaissez déjà", "L'envoyer immédiatement", "Répondre avec les coordonnées bancaires", "Ignorer le patron pour toujours"], answer: 0, why: "Les demandes de paiement urgentes sont une arnaque courante." },
      { q: "Où signaler une fraude aux États-Unis ?", options: ["Sur un forum au hasard", "À l'adresse e-mail de l'escroc", "Nulle part", "Sur ReportFraud.ftc.gov"], answer: 3, why: "La FTC recueille les signalements de fraude." },
      { q: "Un bon point financier pour un conseil d'administration, c'est :", options: ["Seulement le tableur brut", "Cinq phrases claires avec les chiffres clés et une décision", "Un rapport de 40 pages", "Aucun chiffre"], answer: 1, why: "Court et clair aide les gens à décider." },
      { q: "Selon l'IRS, les documents sur les impôts liés aux salaires doivent être gardés au moins :", options: ["1 mois", "4 ans", "1 an", "Aucune durée"], answer: 1, why: "L'IRS dit au moins 4 ans pour ces documents." },
      { q: "Ce cours donne des conseils d'investissement.", options: ["Vrai : achetez ce que l'IA suggère", "Vrai : placez toujours l'argent des subventions", "Vrai : l'IA choisit les actions", "Faux : consultez un professionnel agréé pour cela"], answer: 3, why: "Le cours enseigne la gestion de l'argent, pas le conseil en investissement." }
    ]
  }
};
