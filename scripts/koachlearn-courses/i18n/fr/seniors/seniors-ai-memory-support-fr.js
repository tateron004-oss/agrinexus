"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-memory-support.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Not medical advice, as in the English: worrying memory changes are for a doctor; MedlinePlus is the trusted source named.

module.exports = {
  id: "seniors-ai-memory-support-fr",
  lang: "fr",
  translationOf: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "L'IA pour soutenir la mémoire",
  skills: "Noter rappels et notes à la voix, Utiliser des photos comme aide-mémoire, Faire des listes de contrôle avec l'IA, Résumer rendez-vous et appels, Mettre en place une routine quotidienne pour la mémoire",
  outcome: "installer sur votre téléphone une boîte à outils simple pour la mémoire : rappels vocaux, liste de notes, photos aide-mémoire et liste de contrôle faite par l'IA, et l'utiliser dans une routine quotidienne.",
  about: [
    "Tout le monde oublie des choses : où la voiture est garée, si la cuisinière est éteinte, ce qu'a dit le médecin. Ce cours s'adresse aux personnes âgées, et aux proches qui les aident, qui veulent des outils simples pour se souvenir plus facilement des choses du quotidien.",
    "Vous utiliserez l'assistant vocal de votre téléphone, les notes, l'appareil photo et un assistant IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini pour noter des rappels, tenir des listes, faire des listes de contrôle et résumer ce qui a été dit lors de rendez-vous.",
    "Ces outils soutiennent la mémoire ; ils ne diagnostiquent et ne soignent rien. Si vous ou votre famille êtes inquiets de changements de mémoire, parlez-en à votre médecin. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Construisez votre boîte à outils pour la mémoire : créez deux rappels vocaux répétés, commencez une note « Choses à retenir », prenez une photo aide-mémoire (comme l'endroit où vous êtes garé ou une étiquette dont vous avez besoin), demandez à l'IA une liste de contrôle « avant de sortir de la maison », et utilisez le tout pendant une journée entière.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées qui remarquent des oublis du quotidien, comme les rendez-vous, les noms, l'endroit où elles se sont garées ou ce qu'a dit le médecin, et qui veulent des outils simples pour rester organisées et autonomes. Certaines sont aidées par des proches aidants.",
    startingPoint: "Elles ont un smartphone et savent appeler et envoyer des SMS. Beaucoup comptent sur des notes en papier ou sur leur seule mémoire, et n'ont jamais utilisé de rappels vocaux, de notes épinglées, d'albums photo ou de listes de contrôle faites par l'IA.",
    gap: "Oublier des rendez-vous, des médicaments ou ce qui a été dit pendant une visite cause du stress et peut toucher la santé et la sécurité. Une boîte à outils simple sur le téléphone, utilisée chaque jour, aide les seniors à se souvenir de plus de choses et à rester autonomes, à condition de garder les numéros privés hors des notes et des photos et de parler à un médecin des changements de mémoire inquiétants.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : un smartphone avec un assistant vocal, Notes ou Google Keep, et un appareil photo",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille, puis une journée complète d'exercice",
      "Santé : le cours aide la mémoire de tous les jours ; les changements inquiétants vont au médecin",
      "Vie privée : aucun mot de passe, numéro bancaire ou de Social Security dans les notes, les photos ou les consignes données à l'IA"
    ],
    prerequisites: "Aucun. « L'IA au quotidien » est un cours utile en complément."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Dès que vous pensez à quelque chose à faire", action: "créer un rappel vocal qui dit quoi et quand, avec « tous les » pour les rappels qui se répètent", standard: "et le marquer comme fait une fois terminé" },
    { id: "O2", condition: "Avec Notes ou Google Keep", action: "garder une note épinglée « Choses à retenir » et la compléter en tapant ou à la voix", standard: "sans aucun mot de passe ni numéro privé dedans" },
    { id: "O3", condition: "À partir d'une chose à retenir, comme l'endroit où vous vous êtes garé", action: "prendre une photo aide-mémoire et la retrouver dans vos photos récentes ou dans un album", standard: "sans photographier de cartes ou de documents privés" },
    { id: "O4", condition: "À partir d'une tâche que vous faites souvent", action: "demander à l'IA une courte liste de contrôle, l'adapter à votre vie et la placer là où vous la verrez", standard: "avec environ huit éléments simples au maximum" },
    { id: "O5", condition: "Après un rendez-vous ou un appel important", action: "transformer vos notes en un court résumé et une liste de choses à faire avec l'aide de l'IA", standard: "en retirant les informations privées et en confirmant avec le cabinet ou le service ce qui n'est pas clair" },
    { id: "O6", condition: "Chaque jour", action: "suivre une routine simple pour la mémoire, avec une vérification le matin et le soir", standard: "et parler à votre médecin des changements de mémoire qui vous inquiètent" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Noter ce dont vous devez vous souvenir",
      lessons: [
        {
          objectives: ["O1"],
          title: "Des rappels vocaux dès que vous y pensez",
          minutes: 5,
          goal: "Noter un rappel à la voix avant de l'oublier.",
          text: [
            "Le meilleur moment pour noter un rappel, c'est l'instant où vous y pensez. L'assistant vocal de votre téléphone (Siri sur iPhone, Google Assistant ou Gemini sur Android) rend cela rapide : rien à taper, pas de stylo à chercher.",
            "Dites : « Rappelle-moi d'appeler la pharmacie demain à 10 h. » « Rappelle-moi d'arroser les plantes tous les lundis. » « Rappelle-moi de prendre mon parapluie quand je sors » marche sur certains téléphones, qui peuvent faire un rappel selon le lieu.",
            "Quand le rappel apparaît, faites la chose ou touchez pour le reporter. Marquez-le comme fait une fois terminé, pour que votre liste reste claire."
          ],
          steps: ["Réveillez votre assistant vocal.", "Dites « Rappelle-moi de... » avec quoi et quand.", "Utilisez « tous les » pour les rappels répétés.", "Quand il apparaît, faites-le ou reportez-le.", "Marquez-le comme fait."],
          words: [["Reporter (snooze)", "retarder un rappel pour qu'il revienne un peu plus tard."], ["Rappel répété", "un rappel qui revient selon un calendrier, comme tous les lundis."]],
          slides: [
            { title: "Notez-le tout de suite", bullets: ["Dès que vous y pensez", "Rien à taper, pas de stylo"] },
            { title: "Dites-le", bullets: ["« Rappelle-moi d'appeler la pharmacie à 10 h. »", "« Rappelle-moi d'arroser les plantes tous les lundis. »"] },
            { title: "Quand il apparaît", bullets: ["Faites-le, ou reportez-le", "Marquez-le comme fait"] }
          ],
          tryIt: "Créez deux rappels à la voix : un pour demain et un qui se répète chaque semaine.",
          youCanNow: "noter à la voix des rappels uniques et des rappels répétés.",
          quickCheck: [
            { objective: "O1", q: "Que fait le bouton Reporter sur un rappel ?", options: ["Il le supprime", "Il le retarde un peu pour qu'il revienne", "Il le marque comme fait", "Il l'envoie à la famille"], answer: 1, why: "Reporter retarde un peu le rappel ; marquez-le comme fait quand vous avez terminé." },
            { objective: "O1", q: "En faisant la cuisine, vous vous rappelez que vous devez appeler la banque demain. Que faites-vous ?", options: ["Espérer vous en souvenir", "L'écrire plus tard sur une serviette", "Dire à votre téléphone : « Rappelle-moi d'appeler la banque demain à 10 h. »", "Appeler la banque maintenant, en pleine nuit"], answer: 2, why: "Créez un rappel dès que vous y pensez, à la voix, avec quoi et quand." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Une note pour les choses à retenir",
          minutes: 5,
          goal: "Tenir une note « Choses à retenir » sur votre téléphone et la compléter à la voix.",
          text: [
            "Certaines choses ne sont pas liées à une heure : le nom du nouveau voisin, le livre qu'un ami a conseillé, l'endroit où vous avez rangé le double des clés. Leur place est dans une note.",
            "Ouvrez l'application Notes (ou Google Keep sur beaucoup de téléphones Android) et créez une note appelée « Choses à retenir ». Épinglez-la en haut si votre application le permet. Vous pouvez la compléter en tapant ou en touchant le micro du clavier et en parlant.",
            "Gardez la note simple : une ligne par chose, la plus récente en haut. Ne gardez jamais de mots de passe, de numéros de compte ni de numéros de sécurité sociale dans une simple note."
          ],
          steps: ["Ouvrez Notes ou Google Keep.", "Créez une note nommée « Choses à retenir ».", "Épinglez-la en haut si possible.", "Ajoutez des éléments en tapant ou avec le micro du clavier.", "Gardez les numéros privés en dehors."],
          words: [["Application Notes", "une application pour écrire et garder des notes sur votre téléphone."], ["Épingler", "garder un élément en haut d'une liste pour le trouver facilement."]],
          slides: [
            { title: "Pas lié à une heure ?", bullets: ["Le nom d'un voisin", "Un livre à lire", "L'endroit du double des clés"] },
            { title: "Créez votre note", bullets: ["Notes ou Google Keep", "Nommez-la « Choses à retenir »", "Épinglez-la en haut"] },
            { title: "Simple et sûre", bullets: ["Une ligne par chose", "Utilisez le micro du clavier", "Ni mots de passe ni numéros de compte"] }
          ],
          tryIt: "Créez une note « Choses à retenir » et ajoutez trois éléments, dont au moins un en parlant avec le micro du clavier.",
          youCanNow: "tenir une liste de notes des choses à retenir et la compléter à la voix.",
          quickCheck: [
            { objective: "O2", q: "Que fait le fait d'épingler une note ?", options: ["Il la garde en haut de vos notes", "Il la verrouille avec un mot de passe", "Il la supprime au bout d'un jour", "Il la partage avec la famille"], answer: 0, why: "Épingler garde votre note « Choses à retenir » en haut, là où vous la trouvez." },
            { objective: "O2", q: "Un ami vous conseille un livre pendant que vous êtes dehors. Où le notez-vous ?", options: ["Dans un rappel à heure fixe", "Dans l'application de votre banque", "Nulle part ; vous vous en souviendrez", "Dans votre note « Choses à retenir »"], answer: 3, why: "Les choses qui ne sont pas liées à une heure, comme le titre d'un livre, vont dans votre note." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Les photos comme aide-mémoire",
          minutes: 4,
          goal: "Utiliser votre appareil photo pour retenir où sont les choses et ce qu'elles indiquent.",
          text: [
            "Une photo rapide peut se souvenir à votre place. Photographiez le panneau ou le numéro de niveau de votre place de parking, l'intérieur du réfrigérateur avant les courses, l'étiquette d'une ampoule à remplacer, ou les boutons de la cuisinière fermés avant de sortir.",
            "Pour les retrouver ensuite, créez un album « Aide-mémoire » dans votre application Photos, ou regardez simplement vos photos les plus récentes. Supprimez-les quand vous n'en avez plus besoin.",
            "Ne photographiez pas pour cela des documents privés comme votre carte bancaire ou votre carte de sécurité sociale ; si votre téléphone est perdu, ces photos pourraient être utilisées à mauvais escient."
          ],
          steps: ["Prenez une photo rapide de la chose à retenir.", "Regardez les photos récentes, ou gardez un album « Aide-mémoire ».", "Supprimez ces photos une fois inutiles.", "Ne photographiez pas de cartes ou de documents privés."],
          words: [["Aide-mémoire", "tout ce qui aide à se souvenir, comme une note, une alarme ou une photo."]],
          slides: [
            { title: "Laissez l'appareil photo se souvenir", bullets: ["La place de parking", "L'intérieur du réfrigérateur", "Une étiquette utile", "Les boutons de la cuisinière fermés"] },
            { title: "Les retrouver ensuite", bullets: ["Regardez les photos récentes", "Ou un album « Aide-mémoire »", "Supprimez-les une fois inutiles"] },
            { title: "Restez prudent", bullets: ["Pas de photos de cartes bancaires ou d'identité"] }
          ],
          tryIt: "Prenez aujourd'hui une photo aide-mémoire, par exemple l'intérieur de votre réfrigérateur ou l'endroit où vous êtes garé. Retrouvez-la dans vos photos une heure plus tard.",
          youCanNow: "utiliser des photos pour retenir où sont les choses et ce qu'elles indiquent.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi ne pas garder une photo de votre carte bancaire comme aide-mémoire ?", options: ["Les photos de cartes sont floues", "Si vous perdez votre téléphone, la photo pourrait être mal utilisée", "Elle prend trop de place", "La banque n'autorise pas les photos"], answer: 1, why: "Les photos de cartes privées pourraient être mal utilisées si le téléphone est perdu." },
            { objective: "O3", q: "Vous vous garez au niveau 3 d'un grand parking. Quel est un moyen rapide de vous en souvenir ?", options: ["Prendre en photo le panneau du niveau", "L'écrire dans un SMS à un inconnu", "Compter les voitures", "Laisser la voiture ouverte"], answer: 0, why: "Une photo rapide du panneau du parking s'en souvient à votre place." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Noter ce dont vous devez vous souvenir",
        questions: [
          { objective: "O1", q: "Quel est le meilleur moment pour noter un rappel ?", options: ["Seulement le dimanche", "La semaine prochaine", "L'instant où vous y pensez", "Jamais"], answer: 2, why: "Noter tout de suite évite d'oublier." },
          { objective: "O1", q: "Quelle demande à voix haute crée un rappel chaque semaine ?", options: ["« Rappelle-moi d'arroser les plantes tous les lundis. »", "« Plantes. »", "« Lundi. »", "« Arroser. »"], answer: 0, why: "« Tous les » le fait se répéter." },
          { objective: "O2", q: "Où noter le nom d'un nouveau voisin ?", options: ["Dans un SMS à des inconnus", "Dans un champ de mot de passe", "Nulle part", "Dans votre note « Choses à retenir »"], answer: 3, why: "Les notes gardent ce qui n'est pas lié à une heure." },
          { objective: "O2", q: "Que ne faut-il JAMAIS mettre dans une simple note ?", options: ["Un titre de livre", "Des mots de passe et numéros de compte", "Le nom d'un voisin", "Une recette"], answer: 1, why: "Une simple note n'est pas sûre pour des numéros privés." },
          { objective: "O3", q: "Laquelle est une bonne photo aide-mémoire ?", options: ["Votre carte bancaire", "Le panneau du niveau de parking", "Votre carte de sécurité sociale", "Votre mot de passe"], answer: 1, why: "On ne photographie pas des cartes privées pour s'en souvenir." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Routines et aides de l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Des listes de contrôle faites avec l'IA",
          minutes: 5,
          goal: "Demander à l'IA une courte liste de contrôle pour une tâche que vous faites souvent.",
          text: [
            "Les listes de contrôle aident tout le monde, des pilotes aux médecins. Un assistant IA peut en faire une pour n'importe quelle tâche habituelle : sortir de la maison, se préparer pour un voyage ou la veille d'un rendez-vous.",
            "Demandez : « Fais-moi une courte liste de contrôle pour sortir de la maison : huit points au maximum, avec des mots simples. » Puis adaptez-la à votre maison : « Ajoute : vérifier la porte de derrière. Retire : nourrir le chat. »",
            "Imprimez-la et collez-la près de la porte, ou gardez-la dans vos Notes. Une liste de contrôle n'aide que si elle est là où vous la verrez au bon moment."
          ],
          steps: ["Choisissez une tâche que vous faites souvent.", "Demandez à l'IA une courte liste de contrôle avec des mots simples.", "Ajoutez ou retirez des points selon votre vie.", "Mettez-la là où vous la verrez au bon moment."],
          words: [["Liste de contrôle", "une liste d'étapes que l'on coche une par une."]],
          slides: [
            { title: "Les listes de contrôle aident tout le monde", bullets: ["Sortir de la maison", "Se préparer pour un voyage", "La veille d'un rendez-vous"] },
            { title: "Demandez à l'IA", bullets: ["« Une courte liste, huit points au maximum »", "Puis ajoutez ou retirez des points"] },
            { title: "Au bon endroit", bullets: ["Collez-la près de la porte", "Ou gardez-la dans Notes"] }
          ],
          tryIt: "Demandez à un assistant IA une liste de contrôle « avant de sortir de la maison » de huit points au maximum. Adaptez-la à votre maison, puis imprimez-la ou enregistrez-la.",
          youCanNow: "faire avec l'IA une liste de contrôle personnelle et la mettre là où elle aide.",
          quickCheck: [
            { objective: "O4", q: "Quand une liste de contrôle aide-t-elle le plus ?", options: ["Quand elle est enregistrée là où vous ne regardez jamais", "Quand elle est très longue", "Quand elle est là où vous la verrez au bon moment", "Quand seule l'IA peut la lire"], answer: 2, why: "Une liste de contrôle n'aide que si vous la voyez au bon moment, par exemple près de la porte." },
            { objective: "O4", q: "La liste de l'IA dit « nourrir le chat » mais vous n'avez pas de chat. Que faites-vous ?", options: ["Prendre un chat", "Demander une nouvelle liste chaque jour", "Ignorer toute la liste", "Enlever cet élément et ajouter ceux dont vous avez besoin"], answer: 3, why: "Modifiez la liste de contrôle pour qu'elle corresponde à votre maison." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Se souvenir de ce qui a été dit en rendez-vous",
          minutes: 5,
          goal: "Noter les points clés d'un rendez-vous ou d'un appel et en faire un résumé clair.",
          text: [
            "On oublie facilement ce qu'a dit le médecin, l'avocat ou le réparateur. Apportez une liste écrite de questions et notez les réponses, ou demandez à un proche de venir prendre des notes.",
            "Ensuite, tapez vos notes en vrac dans un assistant IA, sans noms, dates de naissance ni numéros de compte, et demandez : « Transforme ces notes en un court résumé avec la liste de ce que je dois faire. » Enregistrez le résumé dans Notes.",
            "Si quelque chose n'est pas clair, appelez le cabinet pour confirmer. Beaucoup de cabinets médicaux publient aussi un résumé de la visite sur leur portail patient. Certaines personnes demandent si elles peuvent enregistrer la visite sur leur téléphone ; demandez toujours la permission d'abord."
          ],
          steps: ["Apportez une liste de questions et notez les réponses.", "Venez avec un proche si possible.", "Tapez vos notes en vrac dans l'IA, sans détails privés.", "Demandez un résumé et une liste de choses à faire.", "Confirmez auprès du cabinet tout ce qui n'est pas clair."],
          words: [["Résumé", "une version courte des points principaux."], ["Portail patient", "un site ou une application où votre cabinet médical partage les comptes rendus et les résultats."]],
          slides: [
            { title: "Notez sur le moment", bullets: ["Apportez vos questions, notez les réponses", "Venez avec un proche"] },
            { title: "Laissez l'IA mettre en ordre", bullets: ["Tapez vos notes sans détails privés", "Demandez un résumé et une liste à faire", "Enregistrez-le dans Notes"] },
            { title: "Confirmez", bullets: ["Appelez le cabinet si c'est flou", "Consultez le portail patient", "Demandez avant d'enregistrer quelqu'un"] }
          ],
          tryIt: "Écrivez trois notes en vrac d'un appel ou d'un rendez-vous récent (sans noms ni numéros). Demandez à un assistant IA d'en faire un court résumé avec une liste de choses à faire, et enregistrez-le.",
          youCanNow: "noter et résumer ce qui a été dit lors d'un rendez-vous ou d'un appel.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un portail patient ?", options: ["Une porte de l'hôpital", "Un site ou une application où le cabinet de votre médecin peut partager les notes de visite", "Une pharmacie", "Un assistant IA"], answer: 1, why: "Beaucoup de cabinets médicaux mettent un résumé de la visite dans leur portail patient." },
            { objective: "O5", q: "Vous voulez enregistrer sur votre téléphone ce que dit le médecin. Que faites-vous d'abord ?", options: ["Demander la permission", "Cacher le téléphone", "Enregistrer sans rien dire", "Publier l'enregistrement en ligne"], answer: 0, why: "Demandez toujours la permission avant d'enregistrer une visite." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Une routine quotidienne pour la mémoire",
          minutes: 5,
          goal: "Réunir vos outils de mémoire dans une routine quotidienne simple.",
          text: [
            "Les outils marchent mieux quand ils deviennent une habitude. Une routine quotidienne simple : le matin, regardez les rappels et le calendrier du jour. Pendant la journée, notez rappels et notes dès que vous y pensez. Avant d'aller au lit, regardez les rappels du lendemain et votre note « Choses à retenir ».",
            "Rangez les choses aux mêmes endroits chaque jour : clés, lunettes et téléphone dans un bol près de la porte. Une balise de localisation sur vos clés (comme un AirTag d'Apple ou un Tile) peut vous aider à les retrouver avec votre téléphone.",
            "Soyez indulgent avec vous-même. Oublier certaines choses est normal. Si vous ou votre famille remarquez des changements de mémoire inquiétants, comme vous perdre dans des lieux familiers ou avoir du mal avec les tâches du quotidien, parlez-en à votre médecin. MedlinePlus (medlineplus.gov) a des informations fiables sur la mémoire, surtout en anglais."
          ],
          steps: ["Le matin : regardez rappels et calendrier.", "Dans la journée : notez rappels et notes tout de suite.", "Le soir : regardez le lendemain et votre note.", "Gardez clés, lunettes et téléphone au même endroit.", "Parlez à votre médecin des changements inquiétants."],
          words: [["Balise de localisation", "un petit appareil sur des clés ou un sac que votre téléphone peut retrouver."]],
          slides: [
            { title: "Une routine quotidienne simple", bullets: ["Le matin : rappels et calendrier", "Dans la journée : notez tout de suite", "Le soir : regardez le lendemain"] },
            { title: "Le même endroit chaque jour", bullets: ["Clés, lunettes, téléphone dans un bol", "Une balise aide à retrouver les clés"] },
            { title: "Soyez indulgent avec vous-même", bullets: ["Oublier certaines choses est normal", "Inquiet ? Parlez-en à votre médecin", "MedlinePlus a des informations fiables"] }
          ],
          sources: [{ name: "MedlinePlus (National Library of Medicine, en anglais)", url: "https://medlineplus.gov/" }],
          tryIt: "Tâche finale : construisez votre boîte à outils pour la mémoire (deux rappels vocaux répétés, une note « Choses à retenir », une photo aide-mémoire et une liste de contrôle « avant de sortir de la maison » faite par l'IA) et utilisez le tout pendant une journée entière, avec la vérification du matin et du soir.",
          youCanNow: "utiliser rappels, notes, photos, listes de contrôle et résumés de l'IA dans une routine quotidienne qui soutient votre mémoire.",
          quickCheck: [
            { objective: "O6", q: "Quelle est une bonne habitude du soir pour la mémoire ?", options: ["Supprimer tous les rappels", "Éteindre votre téléphone pendant une semaine", "Regarder les rappels du lendemain et votre note « Choses à retenir »", "Écrire une nouvelle liste de contrôle chaque soir"], answer: 2, why: "Avant de vous coucher, regardez les rappels du lendemain et votre note." },
            { objective: "O6", q: "Vous perdez sans cesse vos lunettes dans la maison. Quelle habitude simple aide ?", options: ["Acheter de nouvelles lunettes chaque semaine", "Garder les clés, les lunettes et le téléphone dans un même bol près de la porte", "Arrêter de porter des lunettes", "Demander à l'IA où elles sont"], answer: 1, why: "Ranger les choses au même endroit chaque jour vous permet de savoir où elles sont." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Routines et aides de l'IA",
        questions: [
          { objective: "O4", q: "Où mettre une liste de contrôle « avant de sortir » ?", options: ["Nulle part", "Dans un tiroir", "Dans le coffre de la voiture", "Près de la porte, là où vous la verrez"], answer: 3, why: "Une liste de contrôle aide quand on la voit au bon moment." },
          { objective: "O5", q: "Avant de taper des notes de rendez-vous dans une IA, retirez :", options: ["Les noms, dates de naissance et numéros de compte", "Les choses à faire", "Le mot « médecin »", "Rien"], answer: 0, why: "Les détails privés restent hors de l'IA." },
          { objective: "O5", q: "Avant d'enregistrer une conversation lors d'un rendez-vous, vous devez :", options: ["Enregistrer en secret", "Cacher le téléphone", "Demander la permission", "La publier en ligne"], answer: 2, why: "Demandez toujours avant d'enregistrer quelqu'un." },
          { objective: "O6", q: "Une bonne habitude du soir est de :", options: ["Partager vos mots de passe", "Supprimer tous les rappels", "Éteindre le téléphone pendant une semaine", "Regarder les rappels du lendemain et votre note"], answer: 3, why: "Cela vous prépare pour le jour suivant." },
          { objective: "O6", q: "Vous remarquez que vous vous êtes perdu dans un lieu familier. Que faire ?", options: ["L'ignorer", "Demander un diagnostic à l'IA", "En parler à votre médecin", "Acheter un complément alimentaire en ligne"], answer: 2, why: "Les changements de mémoire inquiétants doivent être vus par un médecin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour soutenir la mémoire",
    questions: [
      { objective: "O1", q: "Pourquoi noter un rappel tout de suite ?", options: ["Cela économise la batterie", "Pour ne pas l'oublier", "C'est obligatoire", "Cela coûte moins cher"], answer: 1, why: "Le moment passe vite." },
      { objective: "O1", q: "« Reporter » un rappel veut dire :", options: ["Le retarder un peu", "Le supprimer", "Le partager", "L'imprimer"], answer: 0, why: "Reporter le fait revenir plus tard." },
      { objective: "O1", q: "Quels mots font se répéter un rappel ?", options: ["« tous les »", "« peut-être »", "« une fois »", "« jamais »"], answer: 0, why: "« Tous les lundis » se répète chaque semaine." },
      { objective: "O1", q: "Quand vous avez fini ce que demandait un rappel, vous devez :", options: ["Le laisser pour toujours", "Le marquer comme fait", "Le recréer", "Supprimer l'application"], answer: 1, why: "Le marquer comme fait garde la liste claire." },
      { objective: "O2", q: "Une liste de notes est idéale pour :", options: ["Les numéros de compte", "Les mots de passe", "Les choses non liées à une heure", "Les numéros de sécurité sociale"], answer: 2, why: "Les notes gardent noms, idées et emplacements." },
      { objective: "O2", q: "Épingler une note :", options: ["Verrouille votre téléphone", "La supprime", "La rend publique", "La garde en haut"], answer: 3, why: "Les notes épinglées sont faciles à trouver." },
      { objective: "O2", q: "Pour compléter une note sans taper, utilisez :", options: ["Le bouton du volume", "L'appareil photo", "Le micro du clavier", "La lampe torche"], answer: 2, why: "Le micro écrit ce que vous dites." },
      { objective: "O3", q: "Une bonne photo aide-mémoire est :", options: ["L'intérieur du réfrigérateur avant les courses", "Votre carte bancaire", "La page de votre passeport", "Votre code secret"], answer: 0, why: "On ne photographie pas des documents privés pour s'en souvenir." },
      { objective: "O3", q: "Quand les photos aide-mémoire ne servent plus :", options: ["Envoyez-les à des inconnus", "Publiez-les", "Imprimez-les toutes", "Supprimez-les"], answer: 3, why: "Les supprimer garde vos photos en ordre et privées." },
      { objective: "O4", q: "Une liste de contrôle, c'est :", options: ["Un relevé bancaire", "Une liste d'étapes que l'on coche", "Un mot de passe", "Un téléphone"], answer: 1, why: "Les listes de contrôle guident les routines." },
      { objective: "O4", q: "Une bonne demande de liste de contrôle à l'IA est :", options: ["« liste »", "« Une courte liste de contrôle pour sortir de la maison, huit points au maximum, mots simples. »", "« trucs »", "« aide »"], answer: 1, why: "Elle donne la tâche, la longueur et le style." },
      { objective: "O4", q: "Une fois la liste faite par l'IA, vous devez :", options: ["Partager votre mot de passe", "L'utiliser telle quelle quoi qu'il arrive", "La supprimer", "L'adapter à votre maison"], answer: 3, why: "Chaque maison est différente." },
      { objective: "O5", q: "Lors d'un rendez-vous médical, un proche peut aider en :", options: ["Prenant des notes", "Répondant à votre place sans demander", "Partageant vos mots de passe", "Enregistrant en secret"], answer: 0, why: "Une deuxième oreille retient davantage." },
      { objective: "O5", q: "L'IA peut transformer des notes en vrac en :", options: ["Ordonnance", "Diagnostic", "Court résumé avec une liste de choses à faire", "Décision de justice"], answer: 2, why: "Résumer est un point fort ; diagnostiquer, non." },
      { objective: "O5", q: "Un portail patient, c'est :", options: ["Une banque", "La porte d'un hôpital", "Un arrêt de bus", "Un site ou une application où votre médecin partage les comptes rendus"], answer: 3, why: "Les portails partagent résumés de visite et résultats." },
      { objective: "O5", q: "Si un résumé n'est pas clair, vous devez :", options: ["L'ignorer", "Deviner", "Appeler le cabinet pour confirmer", "Demander à un inconnu en ligne"], answer: 2, why: "Le cabinet est la source fiable." },
      { objective: "O6", q: "La vérification du matin comprend :", options: ["Changer vos mots de passe", "Les rappels et le calendrier du jour", "Supprimer des notes", "Acheter un nouveau téléphone"], answer: 1, why: "Elle prépare votre journée." },
      { objective: "O6", q: "Garder clés, lunettes et téléphone dans un bol aide parce que :", options: ["Vous savez toujours où ils sont", "C'est joli", "Cela les recharge", "C'est obligatoire"], answer: 0, why: "Même endroit, moins de recherches." },
      { objective: "O6", q: "Une balise de localisation sur vos clés vous permet de :", options: ["Les retrouver avec votre téléphone", "Ouvrir n'importe quelle porte", "Démarrer la voiture à distance", "Payer des factures"], answer: 0, why: "Votre téléphone peut localiser la balise." },
      { objective: "O6", q: "Où trouver des informations fiables sur la mémoire ?", options: ["Dans une publicité", "Sur MedlinePlus (medlineplus.gov) et auprès de votre médecin", "Chez un vendeur de compléments", "Dans une rumeur sur les réseaux sociaux"], answer: 1, why: "MedlinePlus est un site de santé public et gratuit." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Rappels vocaux",
        objective: "O1",
        notYet: "Moins de deux rappels, ou ils ne se répètent pas.",
        meets: "Deux rappels qui se répètent, créés à la voix, chacun avec quoi et quand.",
        exceeds: "Vous les avez marqués comme faits ou reportés au fil de la journée."
      },
      {
        name: "Note « Choses à retenir »",
        objective: "O2",
        notYet: "Pas de note, ou elle contient des mots de passe ou des numéros privés.",
        meets: "Une note « Choses à retenir » avec au moins un élément et aucun numéro privé.",
        exceeds: "La note est épinglée et un élément a été ajouté à la voix."
      },
      {
        name: "Photo aide-mémoire",
        objective: "O3",
        notYet: "Pas de photo, ou la photo d'une carte ou d'un document privé.",
        meets: "Une photo aide-mémoire utile, comme l'endroit où vous vous êtes garé ou une étiquette.",
        exceeds: "Enregistrée dans un album « Aide-mémoire » et supprimée quand elle ne sert plus."
      },
      {
        name: "Liste de contrôle pour sortir de chez soi",
        objective: "O4",
        notYet: "Pas de liste, ou elle ne correspond pas à votre maison.",
        meets: "Une courte liste faite par l'IA, adaptée à votre maison et placée là où vous la verrez.",
        exceeds: "Vous avez utilisé la liste chaque fois que vous êtes sorti de chez vous ce jour-là."
      },
      {
        name: "Utilisé pendant une journée complète",
        objective: "O6",
        notYet: "Les outils sont prêts mais n'ont pas été utilisés.",
        meets: "La boîte à outils a été utilisée pendant une journée complète, avec une vérification le matin et le soir.",
        exceeds: "Vous pouvez dire quel outil a le plus aidé et ce qu'il faut changer."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui utilisent encore leur routine pour la mémoire et leurs rappels au suivi à 30 jours",
      "Apprenants qui disent manquer moins de rendez-vous ou moins s'inquiéter d'oublier",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec un assistant vocal, Notes ou Google Keep, et un appareil photo",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Une imprimante, ou du papier et du ruban adhésif, pour la liste de contrôle (facultatif)",
      "Environ 60 minutes au total, en courtes séances tranquilles, plus une journée complète d'exercice"
    ],
    facilitatorNotes: [
      "Gardez un ton chaleureux et pratique ; oublier certaines choses est normal et il n'y a pas de honte à cela.",
      "Aidez les apprenants à activer leur assistant vocal et à trouver le micro du clavier avant la leçon 1.",
      "Rappelez aux apprenants de ne jamais mettre de mots de passe ni de numéros privés dans les notes, les photos ou les consignes données à l'IA.",
      "N'évaluez pas la santé de la mémoire ; encouragez les apprenants ou les proches inquiets à en parler à un médecin.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
