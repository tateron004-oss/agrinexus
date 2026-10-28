"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-fundraising-grants.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-fundraising-grants-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "L'IA pour la collecte de fonds et les demandes de subvention",
  skills: "Trouver des possibilités de subvention, Lire les consignes des financeurs, Rédiger un exposé des besoins avec l'IA, Écrire des appels aux dons avec l'IA, Vérifier et personnaliser chaque brouillon",
  outcome: "trouver une subvention adaptée à votre programme, utiliser l'IA pour rédiger un exposé des besoins et une description du programme qui suivent les consignes du financeur, et écrire un e-mail d'appel aux dons, en vérifiant chaque fait et en gardant privées les informations des donateurs.",
  about: [
    "Ce cours s'adresse aux responsables, chargés de développement et bénévoles d'associations et d'organisations religieuses qui collectent des fonds et écrivent des demandes de subvention, souvent avec peu de temps et une petite équipe.",
    "Vous apprendrez où trouver des subventions, comment lire les consignes d'un financeur, comment utiliser l'IA pour rédiger les parties les plus courantes d'une demande et des appels aux dons, et comment vérifier et personnaliser chaque brouillon pour qu'il soit honnête et vous ressemble.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche pratique. L'IA rédige ; vous décidez, vérifiez et signez. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez une vraie possibilité de subvention adaptée à un de vos programmes. Avec l'IA, rédigez un exposé des besoins (environ 250 mots) et une description du programme qui suivent les consignes du financeur, en n'utilisant que des faits tirés de vos registres et des sources que vous avez vérifiées. Puis rédigez un e-mail d'appel aux dons de 150 mots pour le même programme, avec des cases à remplir à la place des détails des donateurs, et retouchez les deux pour qu'ils ressemblent à votre organisation.",
  chapters: [
    {
      name: "Chapitre 1 : Les subventions avec l'IA",
      lessons: [
        {
          title: "Trouver des subventions adaptées à votre mission",
          minutes: 5,
          goal: "Trouver au moins deux possibilités de subvention adaptées à un de vos programmes.",
          text: [
            "Les subventions viennent de trois sources principales : les pouvoirs publics (fédéral, État et local), les fondations privées et familiales, et les entreprises. Aux États-Unis, les subventions fédérales sont publiées sur Grants.gov. Chacune a un avis d'appel à financement, ou NOFO, avec une section qui dit qui est éligible.",
            "Pour demander des subventions fédérales américaines, votre organisation doit d'abord s'enregistrer comme entité sur SAM.gov, qui vous donne un identifiant unique d'entité (UEI). Grants.gov indique que l'enregistrement est gratuit. Cela peut prendre du temps, donc commencez tôt, et ne payez jamais une entreprise qui propose de vous enregistrer contre paiement.",
            "Pour les fondations, Candid (candid.org) permet de chercher des associations et des financeurs ; certaines fonctions demandent un abonnement payant, et beaucoup de bibliothèques publiques donnent accès. Pensez aussi à la fondation communautaire de votre région, aux entreprises locales et à votre réseau confessionnel. Hors des États-Unis, cherchez aussi les fonds publics de votre pays et les bailleurs internationaux."
          ],
          steps: ["Choisissez un programme qui a besoin de financement.", "Cherchez sur Grants.gov les possibilités fédérales dans ce domaine.", "Cherchez sur Candid et auprès de votre fondation communautaire des financeurs locaux.", "Lisez la section d'éligibilité de chaque possibilité.", "Notez-en deux qui conviennent, avec leurs dates limites."],
          words: [["Subvention", "de l'argent donné pour un but précis et qui n'a pas à être remboursé."], ["NOFO", "avis d'appel à financement : la description officielle d'une subvention fédérale américaine et de ses règles."], ["UEI", "identifiant unique d'entité : le numéro que SAM.gov donne à votre organisation pour les financements fédéraux."]],
          slides: [
            { title: "D'où viennent les subventions", bullets: ["Pouvoirs publics : fédéral, État, local", "Fondations", "Entreprises et réseaux confessionnels"] },
            { title: "Les subventions fédérales", bullets: ["Publiées sur Grants.gov", "Lisez la section d'éligibilité du NOFO", "Enregistrez-vous d'abord sur SAM.gov : c'est gratuit"] },
            { title: "Les fondations", bullets: ["Cherchez sur Candid (candid.org)", "Demandez l'accès à votre bibliothèque", "Pensez à votre fondation communautaire"] }
          ],
          sources: [
            { name: "Grants.gov : éligibilité aux subventions (en anglais)", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov : enregistrement des candidats (en anglais)", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Choisissez un de vos programmes. Trouvez deux possibilités de subvention adaptées, une publique (fédérale ou d'un État) et une d'une fondation ou locale. Écrivez sur une ligne le nom de chaque financeur, sa date limite et ses conditions d'éligibilité.",
          youCanNow: "trouver des subventions adaptées à votre mission et savoir quel enregistrement demandent les subventions fédérales."
        },
        {
          title: "Lire les consignes des financeurs avec l'aide de l'IA",
          minutes: 5,
          goal: "Transformer les consignes d'un financeur en liste de tout ce que vous devez envoyer.",
          text: [
            "Chaque financeur dit ce qu'il veut : les parties, les limites de mots, le format du budget, les pièces jointes et les dates limites. En oublier une peut vous éliminer avant que quiconque lise votre travail.",
            "Les consignes sont publiques, donc vous pouvez les coller dans un assistant d'IA et demander : \"Transforme ces consignes de subvention en liste de contrôle : chaque partie, sa limite de mots ou de pages, chaque pièce jointe et chaque date limite.\"",
            "Puis comparez la liste avec l'original. L'IA peut oublier un élément ou changer une date. Le document du financeur a toujours le dernier mot."
          ],
          steps: ["Copiez les consignes publiques du financeur.", "Demandez à l'IA une liste des parties, limites, pièces jointes et dates limites.", "Comparez la liste ligne par ligne avec l'original.", "Corrigez tout ce qui manque ou est faux."],
          words: [["Consignes", "les règles du financeur sur quoi envoyer et comment."], ["Pièce jointe", "un document en plus envoyé avec la demande, comme un budget ou la lettre de l'IRS (le fisc américain)."]],
          slides: [
            { title: "Les financeurs disent ce qu'ils veulent", bullets: ["Parties et limites de mots", "Format du budget et pièces jointes", "Dates limites"] },
            { title: "Demandez une liste à l'IA", bullets: ["Collez les consignes publiques", "Parties, limites, pièces jointes, dates limites"] },
            { title: "Vérifiez-la", bullets: ["Comparez ligne par ligne", "Le document du financeur a toujours le dernier mot"] }
          ],
          tryIt: "Prenez les consignes d'une de vos deux possibilités. Demandez une liste de contrôle à un assistant d'IA, puis comparez-la avec l'original et corrigez les erreurs.",
          youCanNow: "transformer les consignes d'un financeur en liste de contrôle exacte."
        },
        {
          title: "Rédiger un exposé des besoins et une description du programme",
          minutes: 6,
          goal: "Utiliser l'IA pour rédiger un exposé des besoins et une description du programme à partir de vos propres faits.",
          text: [
            "L'exposé des besoins dit quel problème vous traitez, qui est touché, et pourquoi maintenant. La description du programme dit ce que vous allez faire, pour qui, et ce qui va changer.",
            "Donnez vos faits à l'IA, pas une page blanche : \"En utilisant seulement ces faits, rédige un exposé des besoins de 250 mots pour une demande à [type de financeur] : [vos faits et statistiques avec leurs sources]. N'ajoute aucune statistique que je ne t'ai pas donnée.\"",
            "Puis retravaillez sérieusement. Ajoutez une vraie histoire (avec autorisation, sans détails qui identifient), reprenez les mots et les priorités du financeur, et assurez-vous que chaque chiffre vient de vos registres ou d'une source vérifiée. Beaucoup de financeurs demandent si l'IA a été utilisée ; répondez honnêtement."
          ],
          steps: ["Rassemblez vos faits : qui vous servez, chiffres, résultats, statistiques avec sources.", "Demandez à l'IA de rédiger avec seulement ces faits, dans la limite de mots.", "Ajoutez une vraie histoire avec autorisation et sans détails qui identifient.", "Reprenez les priorités et les mots du financeur.", "Retrouvez l'origine de chaque chiffre dans un registre ou une source."],
          words: [["Exposé des besoins", "la partie de la demande qui explique le problème et pourquoi il compte maintenant."], ["Description du programme", "la partie qui explique ce que vous allez faire et ce qui va changer."], ["Résultat", "le changement dans la vie des gens que votre programme vise."]],
          slides: [
            { title: "Deux parties essentielles", bullets: ["Besoins : le problème, qui, pourquoi maintenant", "Programme : ce que vous faites, pour qui, ce qui change"] },
            { title: "Donnez vos faits à l'IA", bullets: ["\"En utilisant seulement ces faits...\"", "\"N'ajoute aucune statistique que je ne t'ai pas donnée\"", "Respectez la limite de mots"] },
            { title: "Retravaillez sérieusement", bullets: ["Ajoutez une vraie histoire avec autorisation", "Reprenez les priorités du financeur", "Retrouvez l'origine de chaque chiffre"] },
            { title: "Soyez honnête", bullets: ["Répondez franchement si on vous demande si l'IA a servi"] }
          ],
          tryIt: "Rassemblez cinq faits sur un programme. Demandez à l'IA un exposé des besoins de 250 mots avec seulement ces faits. Marquez chaque chiffre et confirmez d'où il vient.",
          youCanNow: "rédiger avec l'IA l'exposé des besoins d'une demande de subvention à partir de vos propres faits vérifiés."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les subventions avec l'IA",
        questions: [
          { q: "Où sont publiées les possibilités de subventions fédérales américaines ?", options: ["Sur Grants.gov", "Dans un groupe sur les réseaux sociaux", "Dans vos courriers indésirables", "Dans l'annuaire"], answer: 0, why: "Grants.gov publie les possibilités de financement fédéral." },
          { q: "Une entreprise propose de vous enregistrer sur SAM.gov contre paiement. Que savez-vous ?", options: ["Vous devez payer", "L'enregistrement sur SAM.gov est gratuit, enregistrez-vous vous-même", "SAM.gov est facultatif", "Seules les entreprises peuvent s'enregistrer"], answer: 1, why: "Grants.gov indique que l'enregistrement est gratuit." },
          { q: "La liste de l'IA oublie une pièce jointe des consignes. Qui a raison ?", options: ["La liste", "Aucun des deux", "Les consignes du financeur", "Le plus court des deux"], answer: 2, why: "Le document du financeur a toujours le dernier mot." },
          { q: "Quelle demande vous protège des statistiques inventées ?", options: ["\"Écris un exposé des besoins.\"", "\"Rends-le impressionnant.\"", "\"Ajoute des chiffres forts.\"", "\"En utilisant seulement ces faits, rédige... N'ajoute aucune statistique que je ne t'ai pas donnée.\""], answer: 3, why: "Limiter l'IA à vos faits empêche les chiffres inventés." },
          { q: "Qu'explique un exposé des besoins ?", options: ["Le problème, qui est touché et pourquoi maintenant", "Les noms des membres du conseil", "Vos horaires de bureau", "La liste des donateurs"], answer: 0, why: "C'est le rôle de la partie sur les besoins." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les donateurs avec l'IA",
      lessons: [
        {
          title: "Écrire un appel aux dons avec l'IA",
          minutes: 5,
          goal: "Rédiger un court e-mail d'appel aux dons pour un programme.",
          text: [
            "Un bon appel est court et précis : une personne ou un besoin, ce que permet un don, et une demande claire. \"50 $ offrent une semaine de soutien scolaire après l'école\" marche mieux que \"merci de soutenir notre travail\", mais seulement si le chiffre est vrai.",
            "Demande : \"Écris un e-mail d'appel aux dons de 150 mots pour notre soutien scolaire après l'école. Raconte une courte histoire sur [un élève, sans nom], dis ce que permet [montant], et termine par une demande claire et un lien : [lien de don]. Ton chaleureux et plein d'espoir.\"",
            "Gardez les listes de donateurs, les noms et l'historique des dons hors de l'outil d'IA. Utilisez votre base de données de donateurs ou votre logiciel d'e-mail pour ajouter les noms une fois le brouillon terminé."
          ],
          steps: ["Choisissez un programme et un fait vrai sur \"ce que permet un don\".", "Demandez à l'IA un court appel avec une histoire, le fait sur le don et une demande.", "Vérifiez chaque montant avec votre budget.", "Ajoutez les noms par votre base de données de donateurs, pas par l'outil d'IA."],
          words: [["Appel aux dons", "une demande qui invite les gens à donner."], ["Appel à l'action", "la seule chose claire que vous demandez au lecteur de faire, comme \"Donnez aujourd'hui\"."]],
          slides: [
            { title: "Un appel fort", bullets: ["Une histoire ou un besoin", "Ce que permet un don : chiffres vrais seulement", "Une demande claire"] },
            { title: "La demande à l'IA", bullets: ["150 mots, chaleureux et plein d'espoir", "Une histoire sans nom", "Cases [montant] et [lien de don]"] },
            { title: "Gardez les donateurs privés", bullets: ["Pas de listes de donateurs dans l'IA", "Ajoutez les noms dans votre base de données"] }
          ],
          tryIt: "Rédigez avec l'IA un e-mail d'appel aux dons de 150 mots pour un programme. Vérifiez dans votre budget que le montant de \"ce que permet un don\" est vrai.",
          youCanNow: "rédiger avec l'IA un appel aux dons court et honnête."
        },
        {
          title: "Personnaliser les remerciements et les nouvelles",
          minutes: 4,
          goal: "Utiliser l'IA pour créer des modèles de remerciement et de nouvelles que vous personnalisez vous-même.",
          text: [
            "Les donateurs remerciés vite et informés de ce qu'a permis leur don sont plus enclins à donner de nouveau. L'IA peut vous aider à écrire des modèles pour différents donateurs : premiers donateurs, donateurs mensuels, bénévoles qui donnent aussi, et membres de la paroisse qui ont donné à une quête spéciale.",
            "Demandez : \"Écris trois courts modèles de remerciement : premier don, donateur mensuel et grand donateur. Chacun en moins de 100 mots, chaleureux, avec des cases [nom], [montant] et [programme] et une phrase d'impact.\"",
            "Remplissez les noms et les montants dans votre base de données de donateurs ou par publipostage. Ajoutez une ligne écrite à la main quand vous le pouvez. Les gens voient quand aucun humain n'est intervenu."
          ],
          steps: ["Listez les types de donateurs que vous remerciez.", "Demandez à l'IA un modèle pour chacun, avec des cases à remplir.", "Ajoutez à chacun une phrase d'impact vraie.", "Personnalisez dans votre base de données et ajoutez une ligne personnelle."],
          words: [["Modèle", "un brouillon réutilisable avec des cases à remplir."], ["Publipostage", "un outil qui remplit les noms et les détails dans une lettre pour beaucoup de personnes."], ["Fidélisation des donateurs", "garder les donateurs qui donnent année après année."]],
          slides: [
            { title: "Remerciez vite, montrez l'impact", bullets: ["Les donateurs remerciés donnent de nouveau", "Dites ce qu'a permis le don"] },
            { title: "Des modèles par type de donateur", bullets: ["Premier don, mensuel, grand donateur", "Moins de 100 mots avec des cases à remplir"] },
            { title: "Rendez-le personnel", bullets: ["Remplissez via votre base de données", "Ajoutez une ligne écrite à la main"] }
          ],
          tryIt: "Demandez à l'IA trois modèles de remerciement pour trois types de donateurs. Ajoutez à chacun une phrase d'impact vraie.",
          youCanNow: "créer des modèles de remerciement avec l'IA et les personnaliser en toute sécurité."
        },
        {
          title: "Vérifier, retoucher et rester honnête",
          minutes: 5,
          goal: "Faire une vérification finale de toute demande de subvention ou de tout appel avant l'envoi.",
          text: [
            "Avant que quoi que ce soit parte à un financeur ou un donateur, faites une vérification finale. Chaque chiffre vient d'un registre. Chaque affirmation est vraie. Chaque histoire a une autorisation. Les limites de mots sont respectées. Le texte ressemble à votre organisation, pas à un robot.",
            "Ne laissez jamais l'IA inventer des résultats, des partenaires ou des soutiens. Un financeur qui trouve une seule fausse affirmation pourrait ne plus jamais vous faire confiance.",
            "Lisez à voix haute, et demandez à un collègue qui connaît le programme de relire. Pour les affirmations juridiques ou fiscales, comme ce qui est déductible des impôts, vérifiez auprès de votre comptable ou des recommandations officielles de l'IRS (le fisc américain), ou de l'administration fiscale de votre pays."
          ],
          steps: ["Retrouvez l'origine de chaque chiffre dans un registre ou une source.", "Confirmez que chaque histoire a une autorisation et aucun détail qui identifie.", "Vérifiez les limites de mots et les parties exigées.", "Lisez à voix haute.", "Demandez à un collègue qui connaît le programme de relire."],
          words: [["Soutien (endossement)", "une déclaration publique de soutien d'une personne ou d'un groupe."], ["Déductible des impôts", "un don qu'un donateur peut soustraire de son revenu imposable selon les règles fiscales."]],
          slides: [
            { title: "Vérification finale", bullets: ["Chaque chiffre vient d'un registre", "Chaque histoire a une autorisation", "Limites de mots respectées"] },
            { title: "N'inventez jamais", bullets: ["Des résultats", "Des partenaires", "Des soutiens"] },
            { title: "Dernières étapes", bullets: ["Lisez à voix haute", "Un collègue relit", "Affirmations fiscales : comptable ou IRS"] }
          ],
          sources: [
            { name: "IRS : les dons de bienfaisance (en anglais)", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Tâche finale : pour une vraie possibilité de subvention, terminez votre exposé des besoins et une description du programme qui suivent les consignes, et terminez un appel aux dons de 150 mots pour le même programme. Faites la vérification finale sur les deux.",
          youCanNow: "produire avec l'aide de l'IA des parties de demande de subvention et des appels aux dons honnêtes et vérifiés."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les donateurs avec l'IA",
        questions: [
          { q: "Quelle phrase d'appel est la plus forte, si elle est vraie ?", options: ["\"Merci de soutenir notre travail.\"", "\"50 $ offrent une semaine de soutien scolaire après l'école.\"", "\"Nous avons besoin d'argent.\"", "\"Donnez si vous pouvez.\""], answer: 1, why: "Un impact précis et vrai aide les donateurs à voir ce que fait leur don." },
          { q: "Où ajoutez-vous les noms des donateurs dans les lettres de remerciement ?", options: ["En collant la liste des donateurs dans l'IA", "Sur les réseaux sociaux", "Dans votre base de données de donateurs ou par publipostage", "Nulle part"], answer: 2, why: "Garder les données des donateurs dans votre propre système protège leur vie privée." },
          { q: "L'IA ajoute un partenaire avec qui vous ne travaillez pas. Que faites-vous ?", options: ["Vous le gardez, ça sonne bien", "Vous demanderez au partenaire plus tard", "Vous l'écrivez plus petit", "Vous le retirez"], answer: 3, why: "Ne laissez jamais l'IA inventer des partenaires ou des soutiens." },
          { q: "Un brouillon dit que les dons sont déductibles des impôts. Où vérifier ?", options: ["Auprès d'un comptable ou des recommandations officielles de l'IRS", "Dans une autre discussion avec l'IA", "Auprès d'un donateur", "Nulle part"], answer: 0, why: "Les affirmations fiscales demandent une source officielle ou un professionnel." },
          { q: "Pourquoi demander à un collègue qui connaît le programme de relire ?", options: ["Pour partager la faute", "Il peut repérer des détails faux ou manquants", "Pour allonger le texte", "Ce n'est pas utile"], answer: 1, why: "Quelqu'un qui connaît le programme repère les erreurs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour la collecte de fonds et les demandes de subvention",
    questions: [
      { q: "Une subvention, c'est :", options: ["Un prêt", "Une facture d'impôts", "De l'argent pour un but précis qui n'a pas à être remboursé", "Une liste de donateurs"], answer: 2, why: "Les subventions ne se remboursent pas." },
      { q: "NOFO veut dire :", options: ["Nouveau bureau des opérations", "Forum ouvert des associations", "Avis d'obligation financière", "Avis d'appel à financement"], answer: 3, why: "Un NOFO décrit une subvention fédérale et ses règles." },
      { q: "Avant de demander une subvention fédérale américaine, votre organisation doit :", options: ["S'enregistrer comme entité sur SAM.gov", "Acheter une licence spéciale", "Engager un lobbyiste", "Payer des frais à Grants.gov"], answer: 0, why: "Grants.gov exige d'abord l'enregistrement sur SAM.gov." },
      { q: "SAM.gov donne à votre organisation :", options: ["Un ordinateur portable gratuit", "Un identifiant unique d'entité (UEI)", "Une subvention", "Un remboursement d'impôts"], answer: 1, why: "L'UEI identifie votre organisation pour les financements fédéraux." },
      { q: "Quel est un bon endroit pour chercher des fondations qui financent ?", options: ["Une application météo", "Un site d'achats", "Candid", "Un jeu"], answer: 2, why: "Candid répertorie les associations et les financeurs." },
      { q: "Où trouver dans un NOFO qui peut faire une demande ?", options: ["Dans le logo", "En bas de page", "Dans la couleur de la couverture", "Dans la section d'éligibilité"], answer: 3, why: "Chaque NOFO a une section d'éligibilité." },
      { q: "Pourquoi transformer les consignes en liste de contrôle ?", options: ["Oublier un seul élément peut vous éliminer", "Les financeurs aiment les listes", "Cela allonge la demande", "La loi l'exige"], answer: 0, why: "Une liste aide à tout envoyer." },
      { q: "La liste de l'IA et les consignes du financeur ne disent pas la même chose. Vous croyez :", options: ["L'IA", "Les consignes du financeur", "Le plus simple", "Aucun, vous devinez"], answer: 1, why: "Le document du financeur a le dernier mot." },
      { q: "La meilleure façon de commencer un exposé des besoins avec l'IA est de :", options: ["Lui demander d'inventer des chiffres forts", "Ne rien lui donner", "Lui donner vos faits et lui dire de ne pas ajouter de statistiques", "Coller les dossiers des bénéficiaires"], answer: 2, why: "Vos faits gardent le brouillon vrai." },
      { q: "Une description du programme explique :", options: ["Seulement votre numéro fiscal", "La météo", "Qui siège au conseil", "Ce que vous ferez, pour qui, et ce qui changera"], answer: 3, why: "C'est son rôle dans une demande de subvention." },
      { q: "Vous voulez inclure l'histoire d'un bénéficiaire. Il vous faut :", options: ["Une autorisation et aucun détail qui identifie", "Son nom complet et son adresse", "Rien", "Une photo de sa pièce d'identité"], answer: 0, why: "Les histoires demandent un consentement et le respect de la vie privée." },
      { q: "Un financeur demande si l'IA a été utilisée. Vous devez :", options: ["Dire non", "Répondre honnêtement", "Ignorer la question", "Demander à l'IA de répondre"], answer: 1, why: "L'honnêteté protège la confiance." },
      { q: "Un appel fort contient :", options: ["Dix demandes", "Aucune demande", "Une histoire, ce que permet un don et une demande claire", "Un long rapport annuel"], answer: 2, why: "Court et précis marche le mieux." },
      { q: "Qu'est-ce qu'un appel à l'action ?", options: ["Un appel téléphonique", "Un avis juridique", "Un vote du conseil", "La seule chose claire que vous demandez au lecteur de faire"], answer: 3, why: "Comme \"Donnez aujourd'hui\"." },
      { q: "Qu'est-ce qui ne doit JAMAIS aller dans un outil d'IA ?", options: ["Votre liste de donateurs avec l'historique des dons", "\"Rends-le plus chaleureux\"", "Le nom public du programme", "Une limite de mots"], answer: 0, why: "Les données des donateurs sont privées." },
      { q: "Pourquoi faire des modèles de remerciement par type de donateur ?", options: ["Pour économiser du papier", "Des donateurs différents ont besoin de messages différents", "Les donateurs l'exigent", "L'IA ne sait pas en écrire un"], answer: 1, why: "Les premiers donateurs et les donateurs mensuels n'ont pas la même relation avec vous." },
      { q: "Le publipostage, c'est :", options: ["La fusion de deux associations", "Des frais postaux", "Un outil qui remplit les noms dans des lettres pour beaucoup de personnes", "Un modèle d'IA"], answer: 2, why: "Il personnalise les lettres en dehors de l'outil d'IA." },
      { q: "Qu'est-ce qui rend un remerciement humain ?", options: ["Plus de cases à remplir", "Un modèle plus long", "L'envoyer en retard", "Une ligne personnelle écrite à la main"], answer: 3, why: "Les gens remarquent une vraie touche humaine." },
      { q: "Lors de la vérification finale, chaque chiffre doit :", options: ["Venir d'un registre ou d'une source", "Être arrondi au-dessus", "Être grand", "Venir de l'IA"], answer: 0, why: "Des chiffres vrais gardent la confiance." },
      { q: "Si un financeur trouve une seule fausse affirmation :", options: ["Rien ne se passe", "Il pourrait ne plus jamais vous faire confiance", "Il donne plus", "C'est normal"], answer: 1, why: "La confiance est difficile à reconstruire." }
    ]
  }
};
