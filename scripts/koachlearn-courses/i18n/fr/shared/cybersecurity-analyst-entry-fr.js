"use strict";

// Koach Learn course (French translation of shared/cybersecurity-analyst-entry.js). See scripts/koachlearn-courses/README.md, "Translations".

const SEC = { name: "Certification CompTIA Security+ (page officielle)", url: "https://www.comptia.org/en-us/certifications/security/" };
const V7 = { name: "Détails de l'examen CompTIA Security+ V7 (SY0-701)", url: "https://www.comptia.org/en-us/certifications/security/v7/" };
const V8 = { name: "Détails de l'examen CompTIA Security+ V8 (SY0-801)", url: "https://www.comptia.org/en-us/certifications/security/v8/" };
const CISA = { name: "CISA : bonnes pratiques de cybersécurité", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" };

module.exports = {
  id: "cybersecurity-analyst-entry-fr",
  lang: "fr",
  translationOf: "cybersecurity-analyst-entry",
  category: "Workforce Development",
  name: "Cybersécurité pour débutants (préparation à CompTIA Security+)",
  skills: "Utiliser la triade CIA, Évaluer le risque, Choisir des mesures de sécurité, Renforcer un ordinateur, Analyser des journaux, Suivre les étapes de réponse aux incidents",
  outcome: "penser et travailler comme un analyste de sécurité débutant : classer un problème selon la triade CIA, évaluer un risque et choisir une mesure de sécurité, renforcer votre propre ordinateur, repérer les signaux d'alerte dans un journal de connexions, suivre les étapes de réponse aux incidents et suivre votre propre plan daté pour l'examen CompTIA Security+.",
  about: [
    "Les analystes de sécurité protègent les ordinateurs, les comptes et les données d'une organisation. Ils surveillent les signaux d'alerte, vérifient les réglages et réagissent quand quelque chose ne va pas. CompTIA Security+ est l'une des certifications les plus connues pour débuter dans ce métier (CompTIA est une association du secteur informatique qui délivre des certifications).",
    "Ce cours vous prépare à Security+. Il ne vous donne pas la certification ; c'est CompTIA qui la délivre quand vous réussissez l'examen. L'examen change fin 2026 : la leçon 1 vous montre comment choisir la bonne version et où vérifier les informations à jour.",
    "Tout est défensif ici. Vous vous entraînez uniquement sur votre propre ordinateur et vos propres comptes, et sur des journaux inventés dans les leçons. Ne testez, n'analysez et ne vous connectez jamais à des systèmes qui ne vous appartiennent pas ou pour lesquels vous n'avez pas d'autorisation écrite : cela peut être un délit.",
    "Si vous débutez en sécurité, suivez d'abord « Introduction à la cybersécurité ». Ce cours traite des mots de passe, de l'authentification multifacteur et de l'hameçonnage pour vos propres comptes ; ce cours-ci s'appuie dessus pour le travail."
  ],
  finalTask: "Constituez votre portfolio de départ en sécurité : (1) une liste de renforcement pour votre propre ordinateur, avec chaque réglage vérifié et son résultat ; (2) une courte note d'incident sur le journal d'entraînement de la leçon 5 : ce que vous avez vu, pourquoi c'est suspect, son impact sur la triade CIA et son niveau de risque, et les étapes de réponse à l'incident que vous suivriez ; et (3) votre plan d'étude et d'examen Security+ : la version de l'examen que vous passerez et pourquoi, une date cible, chaque domaine avec son poids et vos heures d'étude par semaine.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes qui visent un premier emploi en sécurité : demandeurs d'emploi, anciens militaires (beaucoup avec une habilitation de sécurité ou une expérience en informatique), personnes en reconversion et techniciens de support informatique qui veulent évoluer. Profils variés ; la plupart utilisent un ordinateur tous les jours mais n'ont jamais travaillé en sécurité.",
    startingPoint: "Connaissent les bases de la sécurité personnelle (mots de passe, authentification multifacteur, hameçonnage) ou peuvent les acquérir avec « Introduction à la cybersécurité ». N'ont jamais lu de journaux, évalué de risque ni suivi une procédure d'incident. Peu savent comment l'examen Security+ est organisé ni qu'il est en train de changer.",
    gap: "Les postes de débutant en sécurité demandent des réflexes d'analyste : classer les problèmes, juger les risques, vérifier les réglages, lire les journaux et suivre calmement les étapes en cas d'incident. Les apprenants ont aussi besoin d'un plan clair et daté pour la bonne version de Security+, afin de ne pas réviser pour un examen qui va être retiré.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme est expliqué",
      "Uniquement défensif : entraînement sur votre propre appareil et sur des données inventées ; aucune analyse ni aucun test des systèmes d'autrui",
      "Appareils : un ordinateur Windows ou Mac ; certains réglages demandent un compte administrateur, donc les ordinateurs de bibliothèque peuvent ne pas les afficher",
      "Temps : leçons de 4 à 6 minutes",
      "L'examen change fin 2026 : les apprenants doivent vérifier sur comptia.org la version, les dates et le prix"
    ],
    prerequisites: "Être à l'aise avec un ordinateur et avec la sécurité de base des comptes. Il est utile de suivre d'abord « Introduction à la cybersécurité » et « Les bases du support informatique (préparation à CompTIA A+) »."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir d'un court scénario de sécurité", action: "classer la partie de la triade CIA (confidentialité, intégrité ou disponibilité) qui est touchée", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "Face à une menace pour une organisation", action: "évaluer son risque selon la probabilité et l'impact, et choisir un type de mesure pour le réduire", standard: "en justifiant l'évaluation et la mesure choisie" },
    { id: "O3", condition: "Sur votre propre ordinateur Windows ou Mac", action: "vérifier et noter les réglages des mises à jour, du pare-feu, de l'antivirus, du type de compte, du verrouillage d'écran et du chiffrement du disque", standard: "en vérifiant chaque point et en notant chaque faiblesse" },
    { id: "O4", condition: "À partir d'un court journal de connexions", action: "signaler les entrées suspectes et expliquer pourquoi chacune est suspecte", standard: "en trouvant chaque échec de connexion répété et la réussite anormale qui suit" },
    { id: "O5", condition: "Face à un scénario d'incident de sécurité", action: "lister dans l'ordre les étapes de réponse aux incidents et écrire une action pour chacune", standard: "sans oublier d'étape et en conservant les preuves" },
    { id: "O6", condition: "À l'aide des pages officielles de CompTIA Security+", action: "rédiger un plan d'étude et d'examen qui indique la version de l'examen et une date cible", standard: "en couvrant chaque domaine avec son poids et le temps d'étude par semaine" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Penser comme un analyste de sécurité",
      lessons: [
        {
          title: "Le métier d'analyste et l'examen Security+",
          objectives: ["O6"],
          minutes: 6,
          goal: "Choisir la bonne version de l'examen Security+ pour votre date d'examen et lister ses domaines.",
          text: [
            "Les premiers emplois en sécurité sont, par exemple, analyste de sécurité, analyste SOC (centre des opérations de sécurité) et administrateur de la sécurité ou des systèmes. Les analystes surveillent les alertes et les journaux, vérifient que les systèmes sont bien configurés et aident à répondre aux incidents. Beaucoup commencent au support informatique et évoluent ensuite.",
            "CompTIA délivre Security+ quand vous réussissez un examen. Lors de notre vérification en octobre 2026, l'examen comptait jusqu'à 90 questions en 90 minutes, à choix multiples et basées sur des mises en situation. CompTIA recommande Network+ et environ deux ans d'expérience en sécurité ou en administration de systèmes, mais présente cela comme une expérience recommandée.",
            "L'examen change. La version 7 (SY0-701) est disponible maintenant ; son examen en anglais devait être retiré le 11 juin 2027. La version 8 (SY0-801) était attendue vers le 17 novembre 2026. Si votre date d'examen est bien avancée en 2027, révisez pour la V8. Si vous passez l'examen bientôt, la V7 peut convenir. Vérifiez les pages officielles : les dates peuvent changer.",
            "Chaque version comporte cinq domaines avec un poids. Dans les deux, les opérations de sécurité forment le plus grand domaine (environ 27 à 28 pour cent). Votre temps d'étude doit suivre les poids."
          ],
          steps: ["Ouvrez la page officielle de Security+ et les pages des examens V7 et V8.", "Choisissez votre date d'examen cible.", "Choisissez la version qui sera proposée à cette date.", "Notez son code d'examen, ses cinq domaines et leurs poids.", "Vérifiez le prix actuel et les options de passage sur le site officiel."],
          words: [["SOC", "centre des opérations de sécurité : l'équipe qui surveille les systèmes d'une organisation pour repérer les attaques."], ["Analyste de sécurité", "une personne qui surveille, vérifie et traite les problèmes de sécurité."], ["Version de l'examen", "une version de l'examen avec son propre code et ses propres sujets ; les anciennes versions sont retirées."], ["Retrait", "le moment où une version de l'examen n'est plus proposée."]],
          slides: [
            { title: "Premiers emplois en sécurité", bullets: ["Analyste de sécurité ou analyste SOC", "Administrateur de la sécurité ou des systèmes", "Beaucoup commencent au support informatique"] },
            { title: "Security+ en bref (vérifié en oct. 2026)", bullets: ["Un examen, jusqu'à 90 questions, 90 minutes", "Choix multiples et mises en situation", "CompTIA la délivre ; ce cours vous prépare"] },
            { title: "Choisissez votre version", bullets: ["V7 = SY0-701 : retrait prévu en anglais le 11 juin 2027", "V8 = SY0-801 : attendue vers le 17 novembre 2026", "Choisissez la version selon votre date d'examen"] },
            { title: "Révisez selon les poids", bullets: ["Cinq domaines par version", "Les opérations de sécurité sont le plus grand", "Vérifiez comptia.org avant de réserver"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Choisissez un mois cible pour l'examen. À l'aide des pages officielles, choisissez la V7 ou la V8 et écrivez une phrase qui explique pourquoi. Puis listez les cinq domaines de cette version avec leurs poids et entourez le plus grand.",
          youCanNow: "dire ce que fait un analyste de sécurité débutant, choisir la bonne version de Security+ pour votre date d'examen et lister ses domaines.",
          quickCheck: [
            { objective: "O6", q: "Vous prévoyez de passer l'examen fin 2027. Pour quelle version devez-vous réviser ?", options: ["La V7 (SY0-701), parce qu'elle est plus ancienne", "N'importe laquelle ; elles sont identiques", "La V8 (SY0-801), parce que la V7 en anglais doit être retirée en juin 2027", "Aucune ; passez seulement A+"], answer: 2, why: "Révisez pour la version qui sera encore proposée à votre date d'examen ; vérifiez les pages officielles." },
            { objective: "O6", q: "Qui délivre la certification Security+ ?", options: ["CompTIA, quand vous réussissez l'examen", "Ce cours", "Votre employeur", "N'importe quel site web de sécurité"], answer: 0, why: "C'est CompTIA qui délivre Security+ ; ce cours vous prépare à l'examen." }
          ]
        },
        {
          title: "La triade CIA, les menaces, les vulnérabilités et le risque",
          objectives: ["O1", "O2"],
          minutes: 6,
          goal: "Classer un problème de sécurité avec la triade CIA et évaluer son risque.",
          text: [
            "La sécurité protège trois choses, appelées la triade CIA (d'après les mots anglais). Confidentialité : seules les bonnes personnes peuvent voir les données. Intégrité : les données sont exactes et ne sont pas modifiées sans autorisation. Disponibilité : les systèmes et les données fonctionnent quand les gens en ont besoin.",
            "Exemples : un ordinateur portable volé avec des fichiers clients touche la confidentialité. Quelqu'un qui modifie les montants de la paie touche l'intégrité. Un rançongiciel qui bloque tous les fichiers, ou un site web mis hors ligne, touche la disponibilité.",
            "Une menace est ce qui pourrait causer un dommage (un voleur, un escroc, une tempête). Une vulnérabilité est une faiblesse qu'elle pourrait exploiter (un ordinateur pas à jour, un mot de passe faible, une porte non verrouillée). Le risque, c'est la probabilité du dommage multipliée par sa gravité (l'impact).",
            "Les analystes évaluent souvent le risque sur une grille simple : probabilité faible, moyenne ou forte, et impact faible, moyen ou fort. Ce qui a une forte probabilité et un fort impact passe en tête de liste."
          ],
          steps: ["Nommez ce qui pourrait être touché.", "Demandez-vous : est-ce que cela touche la confidentialité, l'intégrité ou la disponibilité ?", "Nommez la menace et la vulnérabilité.", "Évaluez la probabilité : faible, moyenne ou forte.", "Évaluez l'impact : faible, moyen ou fort.", "Placez en premier les risques fort-fort."],
          words: [["Triade CIA", "confidentialité, intégrité et disponibilité : les trois objectifs de la sécurité."], ["Menace", "quelque chose ou quelqu'un qui pourrait causer un dommage."], ["Vulnérabilité", "une faiblesse qu'une menace pourrait exploiter."], ["Risque", "la probabilité d'un dommage et sa gravité."], ["Rançongiciel", "logiciel malveillant qui bloque les fichiers et exige un paiement (en anglais, ransomware)."]],
          slides: [
            { title: "La triade CIA", bullets: ["Confidentialité : seules les bonnes personnes voient", "Intégrité : les données restent exactes", "Disponibilité : ça marche quand il faut"] },
            { title: "Exemples", bullets: ["Portable volé avec des fichiers : confidentialité", "Montants de paie modifiés : intégrité", "Rançongiciel, site hors ligne : disponibilité"] },
            { title: "Menace, vulnérabilité, risque", bullets: ["Menace : ce qui pourrait causer un dommage", "Vulnérabilité : la faiblesse", "Risque : probabilité et impact ensemble"] },
            { title: "Évaluez-le", bullets: ["Probabilité : faible, moyenne, forte", "Impact : faible, moyen, fort", "Fort et fort passent en premier"] }
          ],
          tryIt: "Pour une petite entreprise que vous connaissez (une boutique de quartier, le bureau d'une église, l'accueil d'une clinique), listez trois choses qui pourraient mal tourner. Pour chacune, écrivez la partie de la triade CIA touchée, la menace, la vulnérabilité, et une évaluation de la probabilité et de l'impact.",
          youCanNow: "classer un problème de sécurité selon la triade CIA et évaluer son risque par la probabilité et l'impact.",
          quickCheck: [
            { objective: "O1", q: "Quelqu'un modifie les montants des factures sans autorisation. Quelle partie de la triade CIA est touchée ?", options: ["La confidentialité", "La disponibilité", "Aucune", "L'intégrité"], answer: 3, why: "L'intégrité signifie que les données restent exactes ; une modification non autorisée la brise." },
            { objective: "O2", q: "Un ordinateur de bureau n'a pas été mis à jour depuis un an. En termes de risque, les mises à jour manquantes sont :", options: ["Une menace", "Une vulnérabilité", "Une mesure de sécurité", "Un incident"], answer: 1, why: "Une mise à jour manquante est une faiblesse qu'une menace pourrait exploiter." }
          ]
        },
        {
          title: "Les mesures de sécurité et le moindre privilège",
          objectives: ["O2"],
          minutes: 5,
          goal: "Choisir un type de mesure de sécurité pour réduire un risque donné.",
          text: [
            "Une mesure de sécurité (en anglais, control) est tout ce qui réduit le risque. Security+ classe les mesures de deux façons. Par catégorie : techniques (un pare-feu, le chiffrement, l'authentification multifacteur), de gestion (politiques, évaluations des risques), opérationnelles (formation, gardiens, procédures suivies par les gens) et physiques (serrures, badges, caméras).",
            "Selon ce qu'elles font : les mesures préventives arrêtent une attaque (une serrure, l'authentification multifacteur). Les mesures de détection la repèrent (une caméra, des alertes dans les journaux). Les mesures correctives réparent après coup (restaurer depuis une sauvegarde). Les mesures dissuasives découragent l'attaque (un panneau d'avertissement). Les mesures compensatoires remplacent la mesure principale quand elle n'est pas possible.",
            "Une règle clé est le moindre privilège : donner à chaque personne uniquement les accès dont elle a besoin pour son travail, pas plus. Un caissier n'a pas besoin d'accéder à la paie. Si un compte est piraté, le moindre privilège limite les dégâts.",
            "Une bonne défense utilise plusieurs couches : si l'une cède, une autre protège encore (défense en profondeur)."
          ],
          words: [["Mesure de sécurité", "tout ce qui réduit un risque."], ["Préventive / de détection / corrective", "des mesures qui arrêtent, repèrent ou réparent un problème de sécurité."], ["Moindre privilège", "donner à chaque personne uniquement les accès dont son travail a besoin."], ["Défense en profondeur", "utiliser plusieurs couches de protection."], ["Pare-feu", "un outil qui autorise ou bloque le trafic réseau selon des règles (en anglais, firewall)."]],
          slides: [
            { title: "Catégories de mesures", bullets: ["Techniques : pare-feu, chiffrement, MFA (authentification multifacteur)", "De gestion : politiques, évaluations des risques", "Opérationnelles : formation, procédures", "Physiques : serrures, badges, caméras"] },
            { title: "Ce que font les mesures", bullets: ["Préventives : elles arrêtent", "De détection : elles repèrent", "Correctives : elles réparent après", "Dissuasives et compensatoires"] },
            { title: "Moindre privilège", bullets: ["Uniquement les accès utiles au travail", "Limite les dégâts si un compte est piraté"] },
            { title: "Défense en profondeur", bullets: ["Plusieurs couches", "Si l'une cède, une autre protège encore"] }
          ],
          sources: [V7, V8],
          tryIt: "Reprenez les trois risques de la leçon 2. Pour chacun, choisissez une mesure. Écrivez sa catégorie (technique, de gestion, opérationnelle ou physique) et ce qu'elle fait (préventive, de détection ou corrective). Puis écrivez une règle de moindre privilège pour cette entreprise.",
          youCanNow: "choisir une mesure pour un risque, nommer sa catégorie et son type, et appliquer le moindre privilège.",
          quickCheck: [
            { objective: "O2", q: "Une caméra de sécurité qui enregistre qui entre est surtout quel type de mesure ?", options: ["De détection", "Corrective", "De gestion", "Compensatoire"], answer: 0, why: "Les caméras repèrent et enregistrent les événements : ce sont des mesures de détection (et physiques)." },
            { objective: "O2", q: "Un nouveau caissier demande l'accès au système de paie. Selon le moindre privilège, vous :", options: ["Lui donnez un accès administrateur complet, par sécurité", "Lui donnez votre propre mot de passe", "Lui donnez l'accès seulement si son travail en a vraiment besoin", "Donnez à tout le monde l'accès à tout"], answer: 2, why: "Le moindre privilège n'accorde que les accès dont un poste a besoin." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Penser comme un analyste de sécurité",
        questions: [
          { objective: "O1", q: "Le site de prise de rendez-vous d'une clinique est hors ligne pendant une journée. Quelle partie de la triade CIA est touchée ?", options: ["La confidentialité", "L'intégrité", "La disponibilité", "Aucune"], answer: 2, why: "Les gens n'ont pas pu utiliser le système quand ils en avaient besoin : disponibilité." },
          { objective: "O1", q: "Un employé envoie par e-mail une liste de clients à la mauvaise personne, hors de l'entreprise. Quelle partie de la triade CIA est touchée ?", options: ["La confidentialité", "La disponibilité", "L'intégrité", "Le moindre privilège"], answer: 0, why: "Les données ont été vues par quelqu'un qui ne devait pas les voir." },
          { objective: "O2", q: "Quel risque faut-il en général traiter en premier ?", options: ["Probabilité faible, impact faible", "Probabilité faible, impact moyen", "Probabilité moyenne, impact faible", "Probabilité forte, impact fort"], answer: 3, why: "Une forte probabilité et un fort impact font le risque le plus grave." },
          { objective: "O2", q: "Restaurer des fichiers depuis une sauvegarde après un rançongiciel est quel type de mesure ?", options: ["Dissuasive", "Corrective", "Préventive", "De gestion"], answer: 1, why: "Les mesures correctives réparent après un événement." },
          { objective: "O6", q: "Dans les deux versions de Security+, quel domaine a le poids le plus élevé ?", options: ["Concepts généraux de sécurité", "Gestion du programme de sécurité", "Opérations de sécurité", "Architecture de sécurité"], answer: 2, why: "Les opérations de sécurité pèsent environ 27 à 28 pour cent dans les deux versions." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les opérations de sécurité en pratique",
      lessons: [
        {
          title: "Renforcer votre propre ordinateur",
          objectives: ["O3"],
          minutes: 6,
          goal: "Vérifier et noter les principaux réglages de sécurité de votre propre ordinateur.",
          text: [
            "Renforcer un système (en anglais, hardening), c'est le rendre plus difficile à attaquer en activant des protections et en désactivant ce qui ne sert pas. Les analystes vérifient cela chaque jour sur les ordinateurs de l'entreprise. Entraînez-vous uniquement sur votre propre ordinateur.",
            "Vérifiez six choses. Mises à jour : sont-elles installées ? Pare-feu : est-il activé ? Antivirus : est-il activé et à jour (Microsoft Defender est intégré à Windows ; les Mac ont une protection intégrée contre les logiciels malveillants) ? Type de compte : utilisez-vous un compte standard au quotidien, et le compte administrateur seulement quand il le faut ? Verrouillage d'écran : l'écran se verrouille-t-il après quelques minutes et demande-t-il un mot de passe ou un code PIN ? Chiffrement du disque : est-il activé (BitLocker ou Chiffrement de l'appareil sur beaucoup d'ordinateurs Windows, FileVault sur Mac) ?",
            "Sous Windows, cherchez dans Paramètres les sections Windows Update et Comptes, et ouvrez Sécurité Windows pour le pare-feu et la protection antivirus. Sur Mac, cherchez dans Réglages Système : Mise à jour de logiciels, Réseau > Coupe-feu, Utilisateurs et groupes, Écran verrouillé, et Confidentialité et sécurité > FileVault. Les noms des menus peuvent changer selon les versions ; utilisez la recherche des réglages si vous ne trouvez pas.",
            "Si vous activez le chiffrement du disque, enregistrez d'abord la clé de récupération dans un endroit sûr et hors ligne. Sans elle, vous pouvez perdre vos fichiers. Si vous n'êtes pas sûr, notez-le comme une faiblesse et demandez de l'aide au lieu de le faire."
          ],
          steps: ["Mises à jour : vérifiez et installez.", "Pare-feu : confirmez qu'il est activé.", "Antivirus : confirmez qu'il est activé et à jour.", "Compte : notez si votre compte de tous les jours est standard ou administrateur.", "Verrouillage d'écran : réglez-le pour qu'il se verrouille après quelques minutes.", "Chiffrement du disque : vérifiez s'il est activé ; enregistrez la clé de récupération avant de l'activer.", "Notez chaque résultat et chaque faiblesse."],
          words: [["Renforcement", "rendre un système plus difficile à attaquer en activant des protections et en retirant ce qui ne sert pas (en anglais, hardening)."], ["Chiffrement du disque", "brouiller tout le contenu d'un disque pour qu'un voleur ne puisse pas le lire sans la clé."], ["Clé de récupération", "un long code qui déverrouille un disque chiffré si vous ne pouvez pas vous connecter."], ["Configuration de référence", "les réglages sûrs standard que chaque ordinateur d'une organisation doit avoir (en anglais, baseline)."]],
          slides: [
            { title: "Le renforcement", bullets: ["Activez les protections", "Désactivez ce qui ne sert pas", "Uniquement sur votre propre ordinateur"] },
            { title: "Vérifiez six choses", bullets: ["Mises à jour, pare-feu, antivirus", "Compte standard au quotidien", "Verrouillage d'écran et chiffrement du disque"] },
            { title: "Où regarder", bullets: ["Windows : Paramètres et Sécurité Windows", "Mac : Réglages Système, Confidentialité et sécurité", "Les noms des menus changent : utilisez la recherche"] },
            { title: "Prudence avec le chiffrement", bullets: ["Enregistrez d'abord la clé de récupération, hors ligne", "Pas sûr ? Notez-le comme faiblesse et demandez de l'aide"] }
          ],
          sources: [CISA],
          tryIt: "Sur votre propre ordinateur, vérifiez les six points. Faites un tableau à trois colonnes : réglage, ce que vous avez trouvé, ce qu'il faut corriger. C'est la partie 1 de votre tâche finale.",
          youCanNow: "vérifier les principaux réglages de sécurité d'un ordinateur et noter les faiblesses, comme un analyste vérifie une configuration de référence.",
          quickCheck: [
            { objective: "O3", q: "Avant d'activer le chiffrement du disque, que devez-vous faire ?", options: ["Désactiver le pare-feu", "Enregistrer la clé de récupération dans un endroit sûr et hors ligne", "Supprimer vos fichiers", "Partager votre mot de passe"], answer: 1, why: "Sans la clé de récupération, vous pourriez perdre l'accès à vos propres fichiers." },
            { objective: "O3", q: "Quel compte devez-vous utiliser pour le travail de tous les jours ?", options: ["Un compte administrateur", "Un compte partagé sans mot de passe", "Un compte invité avec vos fichiers", "Un compte standard"], answer: 3, why: "Un compte standard limite ce que les logiciels malveillants ou les erreurs peuvent modifier." }
          ]
        },
        {
          title: "Lire les journaux et repérer une activité suspecte",
          objectives: ["O4"],
          minutes: 6,
          goal: "Signaler les entrées suspectes d'un journal de connexions et dire pourquoi.",
          text: [
            "Un journal (en anglais, log) est une liste d'événements enregistrés par un système, chacun avec son heure. Les analystes lisent les journaux de connexion pour repérer les attaques. Sous Windows, l'Observateur d'événements garde un journal Sécurité (il faut un compte administrateur pour le voir) ; les échecs de connexion apparaissent sous l'événement 4625 et les réussites sous l'événement 4624. Ici, nous utilisons plutôt un journal inventé.",
            "Journal d'entraînement (inventé) : 02:14:01 FAILED user=jlopez from 203.0.113.50. 02:14:03 FAILED user=jlopez from 203.0.113.50. 02:14:05 FAILED user=jlopez from 203.0.113.50. 02:14:07 FAILED user=jlopez from 203.0.113.50. 02:14:09 SUCCESS user=jlopez from 203.0.113.50. 08:02:30 SUCCESS user=mchen from 10.0.0.12. (FAILED = échec, SUCCESS = réussite.)",
            "Signaux d'alerte : beaucoup d'échecs de connexion en quelques secondes (quelqu'un essaie de deviner le mot de passe), puis une réussite depuis la même adresse (il a peut-être deviné juste). Aussi : des heures inhabituelles (2 h du matin pour quelqu'un qui travaille de 9 h à 17 h), des connexions depuis un lieu inhabituel, et un même compte connecté depuis deux lieux très éloignés à peu d'intervalle.",
            "Votre rôle est de remarquer, noter et signaler, pas de contre-attaquer. Écrivez ce que vous avez vu, les heures, le compte et l'adresse, et transmettez-le selon la procédure de votre équipe."
          ],
          steps: ["Lisez chaque ligne : heure, résultat, compte, adresse.", "Cherchez beaucoup d'échecs en peu de temps.", "Cherchez une réussite juste après des échecs depuis la même adresse.", "Cherchez des heures ou des lieux inhabituels.", "Notez chaque ligne suspecte et pourquoi.", "Signalez-la ; n'essayez jamais d'entrer vous-même dans l'autre système."],
          words: [["Journal", "une liste horodatée des événements enregistrés par un système (en anglais, log)."], ["Observateur d'événements", "l'outil de Windows pour lire les journaux du système et de sécurité."], ["Force brute", "deviner un mot de passe en essayant très vite beaucoup de possibilités."], ["Indicateur", "un indice dans les données que quelque chose de grave se passe peut-être."]],
          slides: [
            { title: "Les journaux racontent l'histoire", bullets: ["Chaque ligne : heure, événement, compte, adresse", "Windows : Observateur d'événements, journal Sécurité", "4625 = échec de connexion, 4624 = réussite"] },
            { title: "Signaux d'alerte", bullets: ["Beaucoup d'échecs en quelques secondes", "Puis une réussite depuis la même adresse", "Heures ou lieux inhabituels"] },
            { title: "Dans le journal d'entraînement", bullets: ["4 échecs pour jlopez en 8 secondes à 2 h 14 du matin", "Puis une réussite depuis la même adresse", "mchen à 8 h 02 semble normal"] },
            { title: "Votre rôle", bullets: ["Remarquer, noter, signaler", "Ne jamais contre-attaquer ni forcer l'entrée"] }
          ],
          tryIt: "Recopiez le journal d'entraînement sur papier. Entourez chaque ligne suspecte et écrivez pourquoi. Évaluez le risque (probabilité et impact) et la partie de la triade CIA menacée. Gardez cela pour la partie 2 de votre tâche finale.",
          youCanNow: "lire un journal de connexions, signaler les entrées suspectes et expliquer pourquoi elles comptent.",
          quickCheck: [
            { objective: "O4", q: "Dans le journal d'entraînement, quelle ligne est la plus inquiétante ?", options: ["La réussite de jlopez à 02:14:09, juste après quatre échecs", "La réussite de mchen à 08:02:30", "Seulement le premier échec de connexion", "Aucune ; les échecs de connexion sont toujours normaux"], answer: 0, why: "Une réussite juste après des échecs rapides depuis la même adresse laisse penser que le mot de passe a été deviné." },
            { objective: "O4", q: "Vous trouvez des signes d'attaque dans un journal. Que faites-vous ?", options: ["Pirater l'ordinateur de l'attaquant en retour", "L'ignorer jusqu'au matin", "Supprimer le journal", "Noter les détails et les signaler selon la procédure de votre équipe"], answer: 3, why: "Les analystes notent et signalent ; contre-attaquer est illégal et supprimer les journaux détruit les preuves." }
          ]
        },
        {
          title: "La réponse aux incidents, et votre plan Security+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Lister les étapes de réponse aux incidents pour un scénario et rédiger un plan d'étude daté pour Security+.",
          text: [
            "Un incident est un événement de sécurité qui cause un dommage ou menace d'en causer. Les organisations suivent des étapes fixes pour que chacun reste calme. Security+ utilise : préparation, détection, analyse, confinement, éradication, rétablissement et retour d'expérience.",
            "Pour la connexion de jlopez : préparation (l'équipe a déjà un plan et des contacts) ; détection (vous repérez les lignes du journal) ; analyse (confirmez que c'est réel : jlopez s'est-il connecté à 2 h du matin ?) ; confinement (bloquez le compte et fermez ses sessions) ; éradication (changez le mot de passe, activez l'authentification multifacteur, retirez tout ce que l'attaquant a mis en place) ; rétablissement (redonnez à jlopez un accès sûr et surveillez le compte) ; retour d'expérience (qu'est-ce qui aurait empêché cela ?).",
            "Conservez les preuves : ne supprimez pas les journaux et n'effacez pas un ordinateur avant que votre équipe le dise. Notez les heures et les actions au fur et à mesure. Faites votre rapport à la personne indiquée par votre procédure.",
            "Planifiez maintenant votre examen. Utilisez la version choisie à la leçon 1. Fixez une date cible. Donnez plus de semaines aux domaines les plus grands. Entraînez-vous avec les objectifs officiels de l'examen, vos propres notes de renforcement et de journaux, et les contrôles de ce cours. Choisissez un nombre d'heures par semaine qui convient à votre vie. Avant de réserver, vérifiez le prix et les options de passage sur la page officielle, et demandez aux programmes d'emploi, d'anciens militaires ou de réinsertion s'ils aident à payer les frais."
          ],
          steps: ["Préparation : connaissez le plan et qui appeler.", "Détection : remarquez les signaux d'alerte.", "Analyse : confirmez que c'est réel et sa gravité.", "Confinement : empêchez que cela s'étende.", "Éradication : supprimez la cause.", "Rétablissement : revenez à la normale et surveillez.", "Retour d'expérience : notez ce qu'il faut changer.", "Plan : version, date cible, domaines et poids, heures par semaine."],
          words: [["Incident", "un événement de sécurité qui cause un dommage ou menace d'en causer."], ["Confinement", "empêcher un incident de s'étendre."], ["Éradication", "supprimer la cause d'un incident."], ["Preuves", "journaux, fichiers et notes qui montrent ce qui s'est passé ; il faut les conserver."]],
          slides: [
            { title: "Les étapes de réponse aux incidents", bullets: ["Préparation, détection, analyse", "Confinement, éradication, rétablissement", "Retour d'expérience"] },
            { title: "Le cas jlopez", bullets: ["Confirmez avec l'utilisateur", "Bloquez le compte ; changez le mot de passe ; activez la MFA", "Rendez l'accès et surveillez le compte"] },
            { title: "Conservez les preuves", bullets: ["Ne supprimez pas les journaux, n'effacez pas les appareils trop tôt", "Notez les heures et les actions au fur et à mesure"] },
            { title: "Votre plan Security+", bullets: ["Version et date cible", "Domaines avec poids ; plus de semaines pour les grands", "Heures par semaine ; vérifiez le prix sur comptia.org"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Tâche finale : rassemblez votre tableau de renforcement (leçon 4), une note d'incident sur le journal de jlopez avec son impact sur la triade CIA, son niveau de risque et une action pour chaque étape de réponse, et votre plan Security+ avec la version, la date cible, les domaines et leurs poids, et les heures par semaine.",
          youCanNow: "suivre les étapes de réponse aux incidents sur un cas réaliste et suivre votre propre plan daté vers Security+.",
          quickCheck: [
            { objective: "O5", q: "Vous confirmez qu'un compte a été piraté. Quelle est l'étape suivante ?", options: ["Le retour d'expérience", "Le confinement : bloquer le compte et fermer ses sessions", "Le rétablissement", "La préparation"], answer: 1, why: "Après la détection et l'analyse, on confine l'incident pour qu'il ne s'étende pas." },
            { objective: "O6", q: "Que doit contenir un plan d'étude pour Security+ ?", options: ["Seulement le mot « Security+ »", "Une liste d'outils de piratage à essayer sur les autres", "La version de l'examen, une date cible, les domaines avec leurs poids et les heures par semaine", "Vos mots de passe"], answer: 2, why: "Un plan indique la bonne version, une date, quoi réviser et quand." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les opérations de sécurité en pratique",
        questions: [
          { objective: "O3", q: "Lequel de ces gestes fait partie du renforcement d'un ordinateur ?", options: ["Désactiver les mises à jour", "Activer le pare-feu et le verrouillage d'écran", "Utiliser un compte administrateur pour tout", "Partager la clé de récupération en ligne"], answer: 1, why: "Le renforcement active des protections comme le pare-feu et le verrouillage d'écran." },
          { objective: "O4", q: "Dix échecs de connexion pour un compte en cinq secondes, depuis la même adresse, signifient le plus probablement :", options: ["L'utilisateur a oublié de charger son téléphone", "Du trafic normal", "Une erreur d'imprimante", "Quelqu'un essaie de deviner le mot de passe"], answer: 3, why: "Beaucoup d'échecs rapides sont le signe d'une attaque par force brute." },
          { objective: "O4", q: "Sous Windows, quel outil permet de lire le journal Sécurité ?", options: ["L'Observateur d'événements", "Paint", "Seulement le Bloc-notes", "La calculatrice"], answer: 0, why: "L'Observateur d'événements affiche les journaux de Windows, dont le journal Sécurité." },
          { objective: "O5", q: "Quelle étape vient juste après le confinement ?", options: ["La détection", "La préparation", "L'éradication", "L'analyse"], answer: 2, why: "Après avoir stoppé la propagation, on supprime la cause : l'éradication." },
          { objective: "O5", q: "Pendant un incident, pourquoi faut-il garder les journaux et ne pas effacer l'ordinateur tout de suite ?", options: ["Les journaux sont des preuves de ce qui s'est passé", "Effacer est toujours illégal", "Les journaux rendent l'ordinateur plus rapide", "Cela n'a pas d'importance"], answer: 0, why: "Les journaux et les appareils sont des preuves ; l'équipe décide quand on peut nettoyer sans risque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Cybersécurité pour débutants (préparation à CompTIA Security+)",
    questions: [
      { objective: "O6", q: "Quel est le code de l'examen Security+ V8 ?", options: ["SY0-701", "220-1201", "SY0-801", "DA0-002"], answer: 2, why: "La V8 est SY0-801 ; la V7 est SY0-701." },
      { objective: "O6", q: "Pourquoi vérifier la page officielle de CompTIA avant de réserver ?", options: ["Les versions, les dates et les prix de l'examen peuvent changer", "C'est le seul endroit avec des outils de piratage pour s'entraîner", "Elle délivre le certificat gratuitement", "Ce n'est pas nécessaire"], answer: 0, why: "Les versions sont retirées et les prix changent ; la page officielle est à jour." },
      { objective: "O6", q: "Quel domaine doit recevoir le plus de temps d'étude dans un plan Security+ ?", options: ["Le plus petit", "Les opérations de sécurité, le plus grand", "Aucun ; révisez au hasard", "Seulement le domaine que vous aimez"], answer: 1, why: "Le plus grand domaine a le plus de questions." },
      { objective: "O1", q: "Un rançongiciel bloque tous les fichiers d'un bureau. Quelle partie de la triade CIA est la plus touchée ?", options: ["La confidentialité", "L'intégrité", "Le moindre privilège", "La disponibilité"], answer: 3, why: "Les gens ne peuvent pas utiliser leurs fichiers : disponibilité." },
      { objective: "O1", q: "La confidentialité signifie :", options: ["Les systèmes fonctionnent quand il le faut", "Seules les bonnes personnes peuvent voir les données", "Les données sont sauvegardées", "Les données sont imprimées"], answer: 1, why: "La confidentialité tient les données loin des personnes qui ne doivent pas les voir." },
      { objective: "O1", q: "Un élève modifie sa note dans le système de l'école. Quelle partie de la triade CIA est touchée ?", options: ["L'intégrité", "La disponibilité", "La confidentialité", "La dissuasion"], answer: 0, why: "Les données ont été modifiées sans autorisation, elles ne sont donc plus exactes." },
      { objective: "O2", q: "Un mot de passe faible sur un compte administrateur est :", options: ["Une menace", "Une mesure de sécurité", "Une vulnérabilité", "Une clé de récupération"], answer: 2, why: "C'est une faiblesse qu'un attaquant pourrait exploiter." },
      { objective: "O2", q: "L'authentification multifacteur à la connexion est surtout :", options: ["Une mesure corrective", "Une mesure de détection", "Un panneau dissuasif", "Une mesure technique préventive"], answer: 3, why: "Elle empêche beaucoup de piratages de comptes avant qu'ils arrivent, grâce à la technologie." },
      { objective: "O2", q: "On évalue le risque selon :", options: ["La probabilité et l'impact", "La taille de l'écran", "Le nombre d'ordinateurs", "L'âge du bureau"], answer: 0, why: "Le risque combine la probabilité d'un dommage et sa gravité." },
      { objective: "O2", q: "Une politique écrite qui dit qui peut accéder aux fichiers clients appartient à quelle catégorie de mesures ?", options: ["Physique", "De gestion", "Technique", "Corrective"], answer: 1, why: "Les politiques et les décisions sur les risques sont des mesures de gestion." },
      { objective: "O3", q: "Quel outil est intégré à Windows pour la protection antivirus ?", options: ["Microsoft Defender dans Sécurité Windows", "L'Observateur d'événements", "Paint", "Seulement le Planificateur de tâches"], answer: 0, why: "Microsoft Defender est l'antivirus intégré dans Sécurité Windows." },
      { objective: "O3", q: "Sur un Mac, FileVault sert à :", options: ["Écouter de la musique", "Envoyer des e-mails", "Chiffrer le disque", "Imprimer"], answer: 2, why: "FileVault chiffre le disque du Mac." },
      { objective: "O3", q: "Où devez-vous vous entraîner au renforcement ?", options: ["Sur l'ordinateur d'un voisin", "Sur votre propre ordinateur", "Sur le serveur de votre ancien travail", "Sur n'importe quel réseau Wi-Fi public"], answer: 1, why: "Entraînez-vous seulement sur des appareils qui vous appartiennent ou que vous avez l'autorisation écrite d'utiliser." },
      { objective: "O4", q: "Qu'est-ce qu'un journal (log) ?", options: ["Une liste de mots de passe", "Un type de virus", "Une règle de pare-feu", "Une liste horodatée des événements enregistrés par un système"], answer: 3, why: "Les journaux enregistrent les événements avec leur heure pour que les analystes voient ce qui s'est passé." },
      { objective: "O4", q: "Quelle connexion est la plus inhabituelle pour un employé de bureau qui travaille de 9 h à 17 h ?", options: ["8 h 55 depuis le réseau du bureau", "12 h 30 depuis le réseau du bureau", "3 h 10 du matin depuis un autre pays", "16 h 45 depuis le réseau du bureau"], answer: 2, why: "Les heures et les lieux inhabituels sont des signaux d'alerte." },
      { objective: "O4", q: "L'événement Windows 4625 signifie :", options: ["Un échec de connexion", "Une connexion réussie", "Une tâche d'impression", "Une mise à jour logicielle"], answer: 0, why: "4625 est un échec de connexion ; 4624 est une connexion réussie." },
      { objective: "O5", q: "Quelle est la PREMIÈRE étape de la réponse aux incidents ?", options: ["Le rétablissement", "La préparation", "L'éradication", "Le retour d'expérience"], answer: 1, why: "La préparation vient en premier : les plans et les contacts sont prêts avant un incident." },
      { objective: "O5", q: "Changer le mot de passe et retirer ce que l'attaquant a mis en place, c'est :", options: ["La détection", "La préparation", "Le retour d'expérience", "L'éradication"], answer: 3, why: "L'éradication supprime la cause de l'incident." },
      { objective: "O5", q: "Une fois le compte de nouveau sûr, l'équipe se réunit pour se demander ce qui aurait empêché l'attaque. C'est :", options: ["Le retour d'expérience", "Le confinement", "La détection", "L'analyse"], answer: 0, why: "Le retour d'expérience est la dernière étape : s'améliorer pour que cela ne se reproduise pas." },
      { objective: "O5", q: "Vous repérez une attaque venant d'une adresse extérieure. Que ne devez-vous PAS faire ?", options: ["Noter les heures", "La signaler à votre équipe", "Essayer d'entrer dans l'ordinateur de l'attaquant", "Conserver les journaux"], answer: 2, why: "Contre-attaquer est illégal et ne fait pas partie du rôle d'analyste ; notez et signalez." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 6, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Tableau de renforcement", objective: "O3", notYet: "Certains des six réglages ne sont pas vérifiés.", meets: "Les six réglages sont vérifiés sur votre propre ordinateur, avec les résultats et les faiblesses.", exceeds: "Chaque faiblesse a une correction et une raison, et le plan pour la clé de récupération est écrit." },
      { name: "Analyse du journal", objective: "O4", notYet: "Ne repère pas les échecs rapides ou la réussite qui suit.", meets: "Signale chaque ligne suspecte et dit pourquoi.", exceeds: "Décrit aussi à quoi ressemble la normale et quelles données en plus le confirmeraient." },
      { name: "Triade CIA et risque", objective: "O1", notYet: "Aucune partie de la triade CIA n'est nommée, ou c'est la mauvaise.", meets: "Nomme la partie de la triade CIA menacée et donne une évaluation de la probabilité et de l'impact avec une raison.", exceeds: "Explique comment le risque changerait si une mesure était ajoutée." },
      { name: "Mesures de sécurité", objective: "O2", notYet: "Aucune mesure, ou une mesure qui ne correspond pas au risque.", meets: "Nomme au moins une mesure adaptée, avec sa catégorie et son type.", exceeds: "Utilise des mesures en couches et une règle de moindre privilège." },
      { name: "Étapes de l'incident", objective: "O5", notYet: "Des étapes manquent ou sont dans le désordre, ou des preuves ont été détruites.", meets: "Les sept étapes dans l'ordre, chacune avec une action, et les preuves conservées.", exceeds: "Indique qui est prévenu à chaque étape et comment le retour d'expérience changerait l'organisation." },
      { name: "Plan d'étude et d'examen", objective: "O6", notYet: "Pas de version ni de date, ou des domaines manquent.", meets: "Indique V7 ou V8 avec une raison, une date cible, chaque domaine avec son poids et les heures par semaine.", exceeds: "Donne plus de semaines aux domaines les plus lourds et indique où vérifier le prix et obtenir de l'aide pour les frais." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui réservent ou réussissent Security+ dans les 6 mois (enquête de suivi)",
      "Apprenants qui postulent à un emploi en sécurité, en SOC ou en informatique, ou qui en commencent un, dans les 6 mois",
      "Apprenants qui disent avoir corrigé au moins une faiblesse de sécurité à la maison ou au travail dans les 30 jours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un ordinateur Windows ou Mac qui appartient à l'apprenant ou qu'il a le droit de modifier (certains réglages demandent un compte administrateur)",
      "Papier et stylo, ou un document, pour les tableaux, la note d'incident et le plan",
      "Les pages officielles de CompTIA Security+ V7 et V8",
      "Environ 90 minutes au total, en courtes séances, plus du temps d'étude régulier pour l'examen"
    ],
    facilitatorNotes: [
      "Rappelez la règle au début de chaque séance : uniquement défensif, uniquement sur ses propres appareils et des données inventées ; tester les systèmes d'autrui sans autorisation écrite peut être un délit.",
      "Vérifiez les pages officielles de Security+ avant chaque groupe ; les dates de retrait de la V7 et de lancement de la V8 peuvent changer.",
      "Sur les ordinateurs partagés d'une salle informatique, les apprenants peuvent ne pas voir certains réglages ; laissez-les faire la leçon 4 chez eux ou sous forme de démonstration.",
      "Animez la leçon 6 comme un exercice sur table : une personne lit le journal, le groupe passe à voix haute chaque étape de la réponse.",
      "Rappelez aux apprenants que ce cours les prépare mais ne délivre pas Security+ ; orientez-les vers les programmes locaux qui aident à payer l'examen.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
