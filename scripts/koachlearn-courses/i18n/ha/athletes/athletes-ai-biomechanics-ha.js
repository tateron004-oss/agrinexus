"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-biomechanics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-biomechanics-ha",
  lang: "ha",
  translationOf: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "Biomechanics (Kimiyyar Motsin Jiki) da AI",
  skills: "Bayanin kalmomin biomechanics na farko, Ɗaukar bidiyon motsi don nazari, Raba fasaha zuwa matakai, Amfani da kayan pose estimation da kallon hoto-hoto, Kwatanta salon motsi kafin da bayan canji tare da kocinku",
  outcome: "ɗaukar bidiyon motsi ɗaya na wasanku daga kusurwoyin da suka dace, raba shi zuwa matakai, amfani da kallon hoto-hoto (kuma, idan kun so, kayan pose estimation kyauta) don bayyana abu ɗaya na salon motsi, da haɗa kwatancen kafin da bayan da za ku duba tare da kocinku.",
  about: [
    "Biomechanics ita ce kimiyyar yadda jiki ke motsi. Wannan kwas ɗin na 'yan wasa da masu horarwa (koci) ne da ke son fahimtar salon motsi (technique) sosai ta amfani da kyamarar waya da kayan AI, a wasanni kamar gudu, tsalle, jifa, harbi, lilo da ƙwallo da ƙafa.",
    "Za ku koyi wasu muhimman kalmomi, ku ɗauki bidiyon motsi yadda ya kamata, ku raba shi zuwa matakai, sannan ku yi amfani da bidiyo a hankali (slow motion), kallon hoto-hoto da kayan AI na gano matsayin jiki don ganin abin da ke faruwa. Sannan za ku kwatanta kafin da bayan tare da kocinku.",
    "Wannan ilimi ne na gama-gari. Canjin salon motsi ya kamata ya fito daga kocinku, kuma tambayoyi game da ciwo, rauni ko komawa wasa suna zuwa ga mai kula da lafiyar 'yan wasa (athletic trainer), likitan gyaran jiki (physical therapist) ko likita. Kowane darasi yana ɗaukar kusan minti biyar tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi motsi ɗaya daga wasanku. Ku ɗauki bidiyonsa daga gefe da daga gaba, ku raba shi zuwa matakai, ku yi amfani da kallon hoto-hoto don bayyana abu ɗaya na salon motsi da hotunan allo (screenshots), ku yarda da umarni guda ɗaya (cue) tare da kocinku, ku yi atisaye da shi, sannan ku sake ɗaukar bidiyo bayan makonni biyu don kwatancen kafin da bayan gefe da gefe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da masu horarwa a wasanni kamar gudu, tsalle, jifa, harbi, lilo da ƙwallo da ƙafa, da ke son ganin salon motsi a sarari ta amfani da kyamarar waya da kayan AI kyauta.",
    startingPoint: "Suna iya ɗaukar bidiyo a waya su kalle shi. Yawancinsu ba su taɓa ɗaukar bidiyo don nazari ba, ko raba fasaha zuwa matakai, ko amfani da kayan pose estimation ba.",
    gap: "Salon motsi yana da wuyar gani a cikakken gudu, kuma bidiyon da aka ɗauka ba daidai ba, ko amincewa da lambobin manhaja fiye da kima, suna kai ga ra'ayoyi marasa daidai. Masu koyo suna buƙatar ɗaukar bidiyo yadda ya kamata, bayyana abu ɗaya da shaida, da duba canje-canje tare da kocinsu, don lokacin atisaye ya tafi kan gyaran da ya dace.",
    constraints: [
      "Kalmomi masu sauƙi; ana bayanin 'yan kalmomin fasaha a farkon amfani da su",
      "Na'urori: waya mai bidiyo a hankali (slow motion); manhajar pose kyauta ba dole ba ce",
      "Lokaci: kusan minti biyar a kowane darasi, da ɗaukar bidiyo a lokacin atisaye",
      "Ana buƙatar izini kafin ɗaukar bidiyon abokan wasa ko yara, kuma dole a duba sirrin manhajojin pose",
      "Ilimi na gama-gari kawai: canjin salon motsi daga koci yake, kuma ciwo ko rauni suna zuwa ga athletic trainer, likitan gyaran jiki ko likita"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da wani motsi daga wasanku", action: "bayanin kalmomin biomechanics na farko kamar kinetic chain, range of motion da center of mass", standard: "da misali daidai ga kowace kalma" },
    { id: "O2", condition: "Ta amfani da waya a lokacin atisaye", action: "ɗaukar bidiyon motsi daga gefe da daga gaba, da wuraren kyamara masu alama da bidiyo a hankali", standard: "da aƙalla maimaitawa uku a kowace kusurwa, da izinin duk wanda aka ɗauka" },
    { id: "O3", condition: "Idan kuna da bidiyon motsinku", action: "raba fasahar zuwa matakai da ɗaukar muhimmin hoto (key frame) mai suna ga kowane mataki", standard: "kocinku ya tabbatar da matakan" },
    { id: "O4", condition: "Idan kuna da kayan pose estimation ko sakamakonsa", action: "bayanin abin da pose estimation ke nunawa da faɗin abubuwan da za su iya sa ya yi kuskure", standard: "kuna ɗaukar kusurwoyinsa a matsayin ƙiyasi, ba ma'aunin ɗakin gwaji ba" },
    { id: "O5", condition: "Idan kuna da muhimman hotunanku", action: "bayyana abu ɗaya na salon motsi da kalmomi marasa hukunci tare da hotunan allo, da mayar da shi tambaya ga kocinku", standard: "kuna aiki kan abu ɗaya kawai a lokaci ɗaya" },
    { id: "O6", condition: "Bayan atisaye da umarnin koci na kusan makonni biyu", action: "haɗa kwatancen kafin da bayan gefe da gefe da aka ɗauka ta hanya ɗaya", standard: "kuna tsayawa ku nemi taimako idan canjin ya jawo ciwo" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ganin motsi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Biomechanics da kalmomi masu sauƙi",
          minutes: 5,
          goal: "Bayyana kalmomin biomechanics na farko guda biyar da misali daga wasanku.",
          text: [
            "Biomechanics tana duba yadda ƙarfi (force) da matsayin jiki ke haifar da motsi. Masu horarwa suna amfani da ita don sa salon motsi ya fi inganci da kuma rage haɗarin rauni.",
            "Kalmomi biyar masu amfani: Joint angle (kusurwar gaɓa: kusurwar gwiwa, kwankwaso ko gwiwar hannu). Range of motion (iyakar motsin gaɓa: yadda gaɓa ke iya motsawa). Center of mass (tsakiyar nauyin jiki: wurin da jikinku ke daidaituwa). Kinetic chain (sarkar ƙarfi: yadda ƙarfi ke wucewa daga ƙasa ta ƙafafu, kwankwaso, gangar jiki zuwa hannaye). Ground reaction force (turawar ƙasa: turawar da ƙasa ke mayar muku idan kun tura ta).",
            "Misali: a harbin tsalle (jump shot) na ƙwallon kwando, ƙarfi yana farawa a ƙafafunku, ya wuce ta kwankwaso da gangar jiki, ya ƙare ta hannu da wuyan hannu. Wannan shi ne kinetic chain. Mataimakin AI zai iya bayyana kowace kalma da misali daga wasanku."
          ],
          words: [["Biomechanics", "kimiyyar yadda ƙarfi da matsayin jiki ke haifar da motsi."], ["Kinetic chain (sarkar ƙarfi)", "yadda ƙarfi ke wucewa daga wani sashen jiki zuwa na gaba, kamar daga ƙafafu zuwa kwankwaso zuwa hannaye."], ["Center of mass (tsakiyar nauyi)", "wurin da jikinku ke daidaituwa."]],
          slides: [
            { title: "Biomechanics", bullets: ["Yadda ƙarfi da matsayin jiki ke haifar da motsi", "Salon motsi mafi inganci", "Rage haɗarin rauni"] },
            { title: "Muhimman kalmomi biyar", bullets: ["Joint angle, range of motion", "Center of mass", "Kinetic chain, ground reaction force"] },
            { title: "Misalin harbin tsalle (jump shot)", bullets: ["Ƙafafu -> kwankwaso -> gangar jiki -> hannu -> wuyan hannu", "Wannan shi ne kinetic chain"] }
          ],
          tryIt: "Ku zaɓi motsi ɗaya daga wasanku. Ku nemi mataimakin AI ya bayyana kinetic chain a cikinsa da kalmomi masu sauƙi. Ku rubuta shi da kalmominku cikin jimloli uku.",
          youCanNow: "bayanin kalmomin biomechanics na farko da misali daga wasanku.",
          quickCheck: [
            { objective: "O1", q: "Me range of motion ke bayyanawa?", options: ["Yadda gaɓa ke iya motsawa", "Saurin gudunku", "Nauyinku", "Tsawon lokacin atisayenku"], answer: 0, why: "Range of motion shi ne iyakar yadda gaɓa ke iya motsawa." },
            { objective: "O1", q: "Kuna son bayyana kinetic chain a harbin tsallenku. Me za ku bayyana?", options: ["Murɗa wuyan hannu kawai", "Yadda ƙarfi ke wucewa daga ƙafafu ta jiki zuwa ƙwallon", "Launin ƙwallon", "Yadda 'yan kallo ke ihu"], answer: 1, why: "Kinetic chain shi ne yadda ƙarfi ke wucewa daga wani sashen jiki zuwa na gaba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ɗaukar bidiyon motsi don nazari",
          minutes: 5,
          goal: "Ɗaukar bidiyon motsi daga kusurwoyin da suka dace don a iya nazarinsa.",
          text: [
            "Nazari yana buƙatar bidiyo mai kyau. Ku ɗauka daga gefe (don ganin kusurwoyin gaɓoɓi gaba da baya) da daga gaba ko baya (don ganin gwiwoyi suna shiga ciki, kwankwaso yana faɗuwa ko hannaye suna ketarawa). Ku sa kyamarar a kusan tsayin kwankwaso, ba ta girgiza, kuma da nisan da za a ga dukan jiki.",
            "Ku yi amfani da yanayin bidiyo a hankali (slow motion) na wayarku da haske mai kyau. Ku sa tufafin da ke nuna siffar jikinku, kuma ku sa alamar tef a ƙasa don ku iya ɗauka daga wuri ɗaya a gaba.",
            "Ku ɗauki maimaitawa (reps) da dama, ba ɗaya kawai ba, kuma ku ɗauka bayan kun yi ɗumi (warm-up). Ku nemi izini kafin ɗaukar bidiyon wasu, kuma ku bi dokokin ƙungiyarku."
          ],
          steps: ["Ku sa wayar a tsayin kwankwaso a kan tripod ko wurin tsayawa.", "Ku ɗauka daga gefe.", "Ku ɗauka daga gaba ko baya.", "Ku yi amfani da bidiyo a hankali da haske mai kyau.", "Ku sa alama a wurin kyamara da na ɗan wasa don gaba.", "Ku ɗauki maimaitawa uku zuwa biyar."],
          words: [["Sagittal view (kallon gefe)", "kallo daga gefe, wanda ke nuna motsi gaba da baya."], ["Frontal view (kallon gaba)", "kallo daga gaba ko baya, wanda ke nuna motsi gefe zuwa gefe."]],
          slides: [
            { title: "Kusurwoyi biyu", bullets: ["Gefe: kusurwoyin gaɓoɓi", "Gaba ko baya: gwiwoyi, kwankwaso, hannaye"] },
            { title: "Shirya kyamara", bullets: ["Tsayin kwankwaso, ba ta girgiza", "Dukan jiki a cikin hoto", "Bidiyo a hankali, haske mai kyau"] },
            { title: "Ta yadda za a maimaita", bullets: ["Alama a wurin kyamara da na ɗan wasa", "Maimaitawa uku zuwa biyar bayan ɗumi"] }
          ],
          tryIt: "Ku ɗauki bidiyon motsi ɗaya daga gefe da daga gaba, maimaitawa uku kowanne, da wayarku a tsayin kwankwaso da bidiyo a hankali a kunne. Ku sa alama a wuraren.",
          youCanNow: "ɗaukar bidiyon motsi yadda ya kamata don nazarin biomechanics.",
          quickCheck: [
            { objective: "O2", q: "Me kallon gefe ke nunawa mafi kyau?", options: ["Gwiwoyi suna shiga ciki", "'Yan kallo", "Motsi gaba da baya da kusurwoyin gaɓoɓi", "Sunan kamfanin takalminku"], answer: 2, why: "Kallon gefe yana nuna motsi gaba da baya da kusurwoyin gaɓoɓi a sarari." },
            { objective: "O2", q: "Kuna son ɗaukar bidiyon farawar gudun abokin wasanku. Me za ku fara yi?", options: ["Ku ɗauka ba tare da tambaya ba", "Ku saka shi a intanet nan take", "Ku zuƙo (zoom) daga nesa", "Ku nemi izininsa"], answer: 3, why: "Koyaushe ku nemi izini kafin ɗaukar bidiyon wasu mutane." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Raba fasaha zuwa matakai",
          minutes: 5,
          goal: "Raba motsinku zuwa matakai da nemo muhimman matsayi.",
          text: [
            "Yawancin fasahohin wasa suna da matakai (phases). Jifa: shiri (wind-up), taku, ja hannu baya, hanzari, saki, ci gaba bayan saki (follow-through). Farawar gudu: shiri (set), turawa, tuƙi, sauyawa. Tsalle: zuwa, dasa ƙafa, tashi, sama, saukowa.",
            "A kowane mataki, akwai muhimman matsayi (key positions) da masu horarwa ke dubawa: inda ƙafa ta sauka, kusurwar gwiwa a lokacin tashi, kusurwar gangar jiki a lokacin saki. Kocinku zai iya faɗa muku waɗanne ne suka fi muhimmanci a gare ku.",
            "Ku yi amfani da kallon hoto-hoto (frame by frame) a manhajar bidiyo ta wayarku ko a kayan bidiyo kyauta. Ku tsaya a muhimmin hoto na kowane mataki ku ɗauki hoton allo (screenshot). Ku nemi mataimakin AI ya jera matakan da aka saba na fasaharku, sannan ku tabbatar da su tare da kocinku."
          ],
          steps: ["Ku nemi AI matakan da aka saba na fasaharku.", "Ku tabbatar da matakan tare da kocinku.", "Ku wuce cikin bidiyonku hoto-hoto.", "Ku ɗauki hoton allo na muhimmin hoto a kowane mataki.", "Ku sa wa kowane hoton allo suna."],
          words: [["Mataki (phase)", "sashe ɗaya na motsi, kamar shiri (wind-up) ko saki."], ["Muhimmin matsayi (key position)", "matsayin jiki mai muhimmanci a wani lokaci."], ["Hoto-hoto (frame by frame)", "wucewa cikin bidiyo hoto ɗaya bayan ɗaya."]],
          slides: [
            { title: "Fasahohi suna da matakai", bullets: ["Jifa: daga shiri zuwa follow-through", "Farawar gudu: daga set zuwa sauyawa", "Tsalle: daga zuwa har saukowa"] },
            { title: "Muhimman matsayi", bullets: ["Saukar ƙafa", "Kusurwar gwiwa a lokacin tashi", "Kusurwar gangar jiki a lokacin saki"] },
            { title: "Hoto-hoto", bullets: ["Ku tsaya a kowane muhimmin hoto", "Hoton allo, ku sa masa suna", "Ku tabbatar da matakai tare da kocinku"] }
          ],
          tryIt: "Ku raba motsin da kuka ɗauka zuwa matakai. Ku ɗauki hoton allo ku sa wa muhimmin hoto ɗaya suna a kowane mataki.",
          youCanNow: "raba fasaha zuwa matakai da ɗaukar muhimman matsayinta.",
          quickCheck: [
            { objective: "O3", q: "Mene ne muhimmin hoto (key frame)?", options: ["Hoto ɗaya da ke nuna muhimmin matsayi a wani mataki", "Daƙiƙar farko ta kowane bidiyo", "Matatar bidiyo (filter)", "Shirin atisaye"], answer: 0, why: "Muhimmin hoto yana ɗaukar muhimmin matsayin wani mataki." },
            { objective: "O3", q: "AI ya ba da shawarar matakai huɗu na jifarku. Me za ku yi a gaba?", options: ["Ku yi amfani da su ba tare da dubawa ba", "Ku tabbatar da su tare da kocinku", "Ku goge bidiyonku", "Ku ƙara wasu matakai goma"], answer: 1, why: "Kocinku ne ke tabbatar da matakai da muhimman matsayi na wasanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ganin motsi",
        questions: [
          { objective: "O1", q: "Mene ne kinetic chain?", options: ["Sashen keke", "Na'urar ɗaga nauyi", "Yadda ƙarfi ke wucewa daga wani sashen jiki zuwa na gaba", "Wani nau'in takalmi"], answer: 2, why: "Ƙarfi yana gudana daga ƙafafu zuwa kwankwaso zuwa gangar jiki zuwa hannaye." },
          { objective: "O2", q: "Wace kusurwar kyamara ce ta fi nuna gwiwoyi suna shiga ciki?", options: ["Kallon gaba ko baya", "Kallon gefe kawai", "Daga sama kawai", "Kusa da fuska"], answer: 0, why: "Motsi gefe zuwa gefe yana fi bayyana daga gaba ko baya." },
          { objective: "O2", q: "A wane tsayi ya kamata kyamara ta kasance?", options: ["A ƙasa", "Sama da kanku", "Ko'ina", "Kusan tsayin kwankwaso"], answer: 3, why: "Tsayin kwankwaso yana rage karkacewar siffar jiki a hoto." },
          { objective: "O2", q: "Me yasa za a ɗauki maimaitawa da dama?", options: ["Don cika wurin ajiya", "Maimaitawa ɗaya ba lallai ta nuna yadda kuke yi kullum ba", "Doka ce", "Don ya yi tsawo"], answer: 1, why: "Maimaitawa da dama suna nuna ainihin yadda kuke motsi." },
          { objective: "O3", q: "Wane ne ya kamata ya tabbatar muku da matakai da muhimman matsayi?", options: ["Wani bidiyo kawai", "Kocinku", "Ɗan kallo", "Babu kowa"], answer: 1, why: "Kocinku ya san abin da ke da muhimmanci ga salon motsinku." }
        ]
      }
    },
    {
      name: "Babi na 2: Kayan AI da canji na gaske",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pose estimation: AI da ke gano gaɓoɓinku",
          minutes: 5,
          goal: "Bayyana abin da pose estimation ke yi da iyakokinsa.",
          text: [
            "Pose estimation (gano matsayin jiki) AI ne da ke nemo wuraren jiki, kamar kafaɗu, gwiwar hannu, kwankwaso, gwiwoyi da idon sawu, a hoto ko bidiyo, sannan ya haɗa su su zama siffar sanda (stick figure). Wasu manhajoji kuma suna ƙiyasta kusurwoyin gaɓoɓi.",
            "Waɗannan kayan suna da amfani wajen ganin matsayi da kwatanta maimaitawa, amma suna yin kuskure: tufafi masu faɗi, motsi mai sauri, dushewar hoto, rashin haske, wasu mutane a cikin hoto, ko wani sashen jiki da ya ɓoye a bayan wani na iya rikitar da su. Kusurwoyi daga bidiyon waya na 2D ƙiyasi ne, ba ma'aunin ɗakin gwaji ba.",
            "Idan kun gwada manhajar pose, ku duba ƙa'idar sirrinta (privacy policy), domin bidiyon jikinku bayanin sirri ne. Ga yara, sai iyaye sun amince. Koyaushe ku duba siffar sandar da ainihin bidiyon kafin ku amince da wata lamba."
          ],
          steps: ["Ku zaɓi gajeren bidiyo mai haske da sarari.", "Idan za ku yi amfani da manhajar pose, ku fara duba ƙa'idar sirrinta.", "Ku sa bidiyon a ciki ku kalli siffar sandar.", "Ku duba ko ta yi daidai da ainihin jiki a kowane muhimmin hoto.", "Ku ɗauki kusurwoyi a matsayin ƙiyasi."],
          words: [["Pose estimation (gano matsayin jiki)", "AI da ke nemo wuraren jiki a bidiyo ya zana siffar sanda."], ["Bidiyon 2D", "bidiyo mai faɗi daga kyamara ɗaya; ba zai iya auna zurfi daidai ba."]],
          slides: [
            { title: "Pose estimation", bullets: ["AI yana nemo kafaɗu, kwankwaso, gwiwoyi, idon sawu", "Yana zana siffar sanda", "Wasu manhajoji suna ƙiyasta kusurwoyi"] },
            { title: "Iyakoki", bullets: ["Dushewa, tufafi masu faɗi, rashin haske", "Sassan jiki da suka ɓoye", "Kusurwoyin 2D ƙiyasi ne"] },
            { title: "Ku yi amfani da shi lafiya", bullets: ["Ku duba ƙa'idar sirri", "Yara: sai iyaye sun amince", "Ku duba da ainihin bidiyon"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya bayyana yadda pose estimation ke aiki da hanyoyi uku da zai iya yin kuskure. Sannan ku kalli muhimman hotunanku ku rubuta inda kayan pose zai iya samun wahala.",
          youCanNow: "bayanin abin da pose estimation ke yi da dalilin da yasa lambobinsa ke buƙatar dubawa.",
          quickCheck: [
            { objective: "O4", q: "Me kayan pose estimation ke zanawa a kan bidiyo?", options: ["Jadawalin bugun zuciya", "Taswirar yanayi", "Siffar sanda a kan gaɓoɓin jiki", "Makin wasan"], answer: 2, why: "Pose estimation yana nemo wuraren jiki ya haɗa su su zama siffar sanda." },
            { objective: "O4", q: "Manhajar pose ta ce kusurwar gwiwarku digiri 143 ce a bidiyo mai dushewa. Me za ku yi?", options: ["Ku amince da ita daidai-daidai", "Ku raba ta a matsayin sakamakon ɗakin gwaji", "Ku canja salon motsinku nan take", "Ku ɗauke ta a matsayin ƙiyasi ku duba hoton da kanku"], answer: 3, why: "Dushewa da bidiyon waya ɗaya suna sa kusurwoyi su zama ƙiyasi, ba ma'auni ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bayyana abu ɗaya na salon motsi",
          minutes: 5,
          goal: "Bayyana abu ɗaya na salon motsi a sarari ta amfani da hotunan allonku.",
          text: [
            "Ku zaɓi abu ɗaya da za ku duba, ba goma ba. Misali: \"A lokacin tashi, gwiwata ta hagu tana lanƙwasa ƙasa da ta dama sosai.\" ko \"A lokacin saki, gwiwar hannuna tana ƙasa da kafaɗata.\"",
            "Ku bayyana shi da shaida: matakin, hoton allon, da abin da kuke gani idan aka kwatanta da wata maimaitawa ko da misalin da kocinku ya ba ku. Mataimakin AI zai iya taimaka muku rubuta bayani mai sarari, marar hukunci: \"Ka taimake ni in bayyana abin da nake gani a waɗannan muhimman hotuna biyu da kalmomi masu sauƙi, marasa hukunci.\" Kada ku nemi ya gano cuta (diagnosis) ko maganin ciwo.",
            "Ku kai shi ga kocinku a matsayin tambaya: \"Na lura da wannan. Shin abu ne da ya kamata mu yi aiki a kai? Wane umarni (cue) zan yi amfani da shi?\""
          ],
          steps: ["Ku zaɓi abu ɗaya na salon motsi.", "Ku zaɓi hotunan allon da ke nuna shi.", "Ku rubuta bayani marar hukunci tare da matakin.", "Ku tambayi kocinku ko yana da muhimmanci da wane umarni za ku yi amfani da shi."],
          words: [["Cue (umarni)", "gajeren umarni da ke taimaka muku canja motsi, kamar \"ɗaga ƙirji\"."], ["Bayani marar hukunci", "bayyana abin da kuke gani ba tare da yanke hukunci ko gano cuta ba."]],
          slides: [
            { title: "Abu ɗaya, ba goma ba", bullets: ["Misali: gwiwar hagu ba ta lanƙwasa sosai a lokacin tashi"] },
            { title: "Ku nuna shaida", bullets: ["Mataki da hoton allo", "Kwatantawa da wata maimaitawa ko misali", "Kalmomi marasa hukunci; babu gano cuta"] },
            { title: "Ku tambayi kocinku", bullets: ["\"Mu yi aiki a kan wannan?\"", "\"Wane umarni (cue) zan yi amfani da shi?\""] }
          ],
          tryIt: "Ku rubuta abu ɗaya na salon motsi cikin jimloli biyu marasa hukunci, tare da matakin da hotunan allo. Ku yi amfani da AI don ya fi sarari, sannan ku kai shi ga kocinku.",
          youCanNow: "bayyana abu ɗaya na salon motsi da shaida da mayar da shi tambaya ga kocinku.",
          quickCheck: [
            { objective: "O5", q: "Mene ne bayani marar hukunci na salon motsi?", options: ["Faɗin abin da kuke gani ba tare da gano cuta ba", "Faɗin sunan wani rauni", "Cewa ɗan wasan bai iya ba", "Hasashen dalilin ciwo"], answer: 0, why: "Bayani marar hukunci yana faɗin abin da ake gani kawai, ba tare da gano cuta ba." },
            { objective: "O5", q: "Kun ga abubuwa uku da kuke son gyarawa. Me za ku kai wa kocinku?", options: ["Dukansu uku a lokaci ɗaya", "Abu ɗaya tare da matakinsa da hotunan allo", "Babu komai sai bayan ƙarshen kakar wasa", "Sabon shirin atisaye daga AI"], answer: 1, why: "Aiki kan abu ɗaya a lokaci ɗaya yana sa canji ya fi bayyana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kafin da bayan: shin ya canja?",
          minutes: 5,
          goal: "Haɗa kwatance gefe da gefe don ganin ko salon motsi ya canja.",
          text: [
            "Bayan kun yi atisaye da umarnin kocinku na 'yan makonni, ku sake ɗaukar bidiyo daga wuraren da kuka sa alama, kusurwoyi iri ɗaya, haske iri ɗaya. Ku sa muhimman hotunan kafin da bayan gefe da gefe a cikin slide ko a shimfiɗar Canva.",
            "Ku duba muhimmin matsayi iri ɗaya a kowanne. Shin canjin yana nan? Yana nan a kowace maimaitawa ko a wasu kawai? Canji yana buƙatar maimaitawa masu yawa; ɗan ci gaba ma ci gaba ne.",
            "Idan canji ya jawo ciwo, ko wani motsi yana ciwo, ku tsaya ku faɗa wa athletic trainer ɗinku, likitan gyaran jiki ko likita. Aikin salon motsi bai kamata ya taɓa tilasta muku jure ciwo ba."
          ],
          steps: ["Ku sake ɗauka daga wurare da kusurwoyi iri ɗaya.", "Ku zaɓi muhimman hotuna iri ɗaya.", "Ku sa kafin da bayan gefe da gefe.", "Ku rubuta abin da ya canja da a maimaitawa nawa.", "Ku duba tare da kocinku; ku faɗi duk wani ciwo."],
          words: [["Gefe da gefe (side-by-side)", "hotuna ko bidiyo biyu da aka sa kusa da juna don kwatantawa."], ["Likitan gyaran jiki (physical therapist)", "ƙwararre mai lasisi da ke taimaka wa mutane su dawo da motsi bayan rauni."]],
          slides: [
            { title: "Shiri iri ɗaya", bullets: ["Wuraren alama iri ɗaya", "Kusurwoyi da haske iri ɗaya"] },
            { title: "Ku kwatanta", bullets: ["Muhimmin hoto iri ɗaya, gefe da gefe", "A kowace maimaitawa ko a wasu kawai?", "Ɗan ci gaba ma ana ƙirgawa"] },
            { title: "Tsaro", bullets: ["Ciwo? Ku tsaya", "Ku faɗa wa athletic trainer, likitan gyaran jiki (PT) ko likita"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi atisaye da umarnin kocinku, ku sake ɗaukar bidiyo bayan makonni biyu daga wurare iri ɗaya, sannan ku haɗa kwatancen kafin da bayan gefe da gefe don dubawa tare da kocinku.",
          youCanNow: "kwatanta salon motsi kafin da bayan cikin adalci da sanin lokacin da za ku tsaya saboda ciwo.",
          quickCheck: [
            { objective: "O6", q: "Me ke sa kwatancen kafin da bayan ya zama na adalci?", options: ["Ɗauka daga sababbin kusurwoyi kowane lokaci", "Amfani da haske daban", "Ɗauka daga wurare, kusurwoyi da haske iri ɗaya", "Amfani da mafi kyawun maimaitawa kawai"], answer: 2, why: "Salon motsi kaɗai ya kamata ya canja tsakanin bidiyon biyu." },
            { objective: "O6", q: "Sabon umarnin ya fara jawo muku ciwon kafaɗa. Me za ku yi?", options: ["Ku jure ku ci gaba", "Ku nemi AI ya gano cutar", "Ku ninka atisayen sau biyu", "Ku tsaya ku faɗa wa athletic trainer, likitan gyaran jiki ko likita"], answer: 3, why: "Ciwo dalili ne na tsayawa da ganin ƙwararre." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kayan AI da canji na gaske",
        questions: [
          { objective: "O4", q: "Me pose estimation ke yi?", options: ["Yana gano raunuka", "Yana rubuta shirye-shiryen atisaye", "Yana ƙirga mabiya", "Yana nemo wuraren jiki a bidiyo ya zana siffar sanda"], answer: 3, why: "Yana gano inda gaɓoɓi suke a hotuna." },
          { objective: "O4", q: "Wanne zai iya sa kayan pose ya yi kuskure?", options: ["Dushewa da tufafi masu faɗi", "Haske mai kyau", "Tufafi masu matsewa", "Bango mai sarari"], answer: 0, why: "Dushewa da tufafi masu faɗi suna ɓoye matsayin gaɓoɓi." },
          { objective: "O4", q: "Kusurwoyi daga bidiyon waya ɗaya:", options: ["Cikakku ne", "Gano cuta ne na likita", "Ƙiyasi ne, ba ma'aunin ɗakin gwaji ba", "Ba su da amfani"], answer: 2, why: "Bidiyon 2D ba zai iya auna zurfi daidai ba." },
          { objective: "O5", q: "Me ya kamata ku nemi AI idan kuna bayyana salon motsinku?", options: ["Ya gano ciwon gwiwarku", "Ya ba da magani", "Ya ƙi bin kocinku", "Taimako wajen bayyana abin da kuke gani da kalmomi marasa hukunci"], answer: 3, why: "Gano cuta da magani aikin ƙwararru ne." },
          { objective: "O6", q: "Sabon salon motsi yana jawo ciwo. Ku:", options: ["Ku jure ku ci gaba", "Ku tsaya ku faɗa wa athletic trainer, PT ko likita", "Ku yi watsi da shi", "Ku nemi AI maganin rage ciwo"], answer: 1, why: "Kada ku taɓa jure ciwo ku ci gaba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Biomechanics (Kimiyyar Motsin Jiki) da AI",
    questions: [
      { objective: "O1", q: "Biomechanics tana nazarin:", options: ["Kuɗin ƙungiya", "Kafofin sada zumunta", "Yadda ƙarfi da matsayin jiki ke haifar da motsi", "Zanen filin wasa"], answer: 2, why: "Ita ce kimiyyar motsi." },
      { objective: "O1", q: "Range of motion shi ne:", options: ["Yadda gaɓa ke iya motsawa", "Nisan da kuke gudu", "Allon maki", "Wani nau'in atisaye"], answer: 0, why: "Yana bayyana motsin gaɓa." },
      { objective: "O1", q: "Center of mass shi ne:", options: ["Wurin da jikinku ke daidaituwa", "Tsakiyar filin wasa", "Wurin motsa jiki (gym)", "Tsoka"], answer: 0, why: "Shi ne inda nauyinku ke daidaituwa." },
      { objective: "O1", q: "Ground reaction force shi ne:", options: ["Iska", "Hukunci a wasa", "Turawar da ƙasa ke mayarwa", "Dokar ƙungiya"], answer: 2, why: "Kuna tura ƙasa, ita kuma tana mayar muku." },
      { objective: "O1", q: "A harbin tsalle, ƙarfi yana farawa a:", options: ["Wuyan hannu", "Ƙafafu", "Idanu", "Ƙwallon"], answer: 1, why: "Kinetic chain yana farawa daga ƙasa zuwa sama." },
      { objective: "O2", q: "Kallon gefe yana nuna:", options: ["Fuska kawai", "Babu abin amfani", "'Yan kallo kawai", "Motsi gaba da baya da kusurwoyin gaɓoɓi"], answer: 3, why: "Wannan shi ne sagittal view." },
      { objective: "O2", q: "Me yasa za a sa alama a wuraren kyamara a ƙasa?", options: ["Don ado", "Doka ce", "Don ɗauka ta hanya ɗaya a gaba", "Don rikitar da wasu"], answer: 2, why: "Shiri iri ɗaya yana sa kwatance ya zama na adalci." },
      { objective: "O2", q: "Bidiyo a hankali (slow motion) yana taimaka muku:", options: ["Ajiye batir", "Ɓoye kurakurai", "Ƙara kiɗa", "Ganin motsi masu sauri a sarari"], answer: 3, why: "Yana nuna ƙananan abubuwa." },
      { objective: "O2", q: "Kafin ɗaukar bidiyon abokan wasa ya kamata ku:", options: ["Nemi izini", "Fara saka shi a intanet", "Ɗauka a ɓoye", "Ƙyale shi"], answer: 0, why: "Ku girmama sirri da dokokin ƙungiya." },
      { objective: "O3", q: "Mataki (phase) shi ne:", options: ["Wani lokacin wasa", "Sashe ɗaya na motsi", "Ƙungiya", "Waya"], answer: 1, why: "Fasahohi suna rabuwa zuwa matakai." },
      { objective: "O3", q: "Wanne ne matakin jifa?", options: ["Hutun rabin lokaci", "Lokacin hutu (timeout)", "Saki", "Zagayen sanyaya jiki"], answer: 2, why: "Saki matakin jifa ne." },
      { objective: "O3", q: "Kallon hoto-hoto yana nufin:", options: ["Wucewa cikin bidiyo hoto ɗaya bayan ɗaya", "Kallo da sauri sau biyu", "Tsallakewa zuwa ƙarshe", "Goge hotuna"], answer: 0, why: "Yana bar ku nemo muhimman matsayi." },
      { objective: "O3", q: "AI ya jera matakan fasaharku. A gaba ku:", options: ["Amince da su gaba ɗaya", "Saka su a intanet", "Ƙyale kocinku", "Tabbatar da su tare da kocinku"], answer: 3, why: "Masu horarwa ne ke tabbatar da abin da ke da muhimmanci." },
      { objective: "O4", q: "Pose estimation yana zana:", options: ["Tambari (logo)", "Siffar sanda a jikinku", "Taswira", "Jadawalin mabiya"], answer: 1, why: "Yana haɗa wuraren jikin da ya gano." },
      { objective: "O4", q: "Kafin amfani da manhajar pose, ku duba:", options: ["Launinta", "Ƙa'idar sirrinta", "Tambarinta", "Babu komai"], answer: 1, why: "Bidiyon jiki bayanin sirri ne." },
      { objective: "O5", q: "Abubuwa nawa na salon motsi ya kamata ku yi aiki a kai a lokaci ɗaya?", options: ["Ɗaya", "Goma", "Dukansu", "Babu ko ɗaya"], answer: 0, why: "Mai da hankali kan abu ɗaya yana sa canji ya fi sauƙi." },
      { objective: "O5", q: "Cue shi ne:", options: ["Gajeren umarni don canja motsi", "Sandar wasan billiard", "Maki", "Manhajar bidiyo"], answer: 0, why: "Umarni (cues) suna jagorantar canjin salon motsi." },
      { objective: "O5", q: "Bayani marar hukunci:", options: ["Yana yanke hukunci da tsanani", "Yana gano raunuka", "Yana bayyana abin da kuke gani ba tare da gano cuta ba", "Yana watsi da shaida"], answer: 2, why: "Ku tsaya kan abin da kuke gani." },
      { objective: "O6", q: "Bidiyon kafin da bayan ya kamata su yi amfani da:", options: ["Kusurwoyi daban kowane lokaci", "Kowane irin shiri", "Babu bidiyo", "Wurare, kusurwoyi da haske iri ɗaya"], answer: 3, why: "Shiri iri ɗaya yana sa kwatance ya zama na adalci." },
      { objective: "O6", q: "Wane ne ke taimaka wa mutane su dawo da motsi bayan rauni?", options: ["Ɗan kallo", "Likitan gyaran jiki (physical therapist)", "Manhajar AI", "Alƙalin wasa"], answer: 1, why: "Likitocin gyaran jiki suna da lasisi don wannan aikin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ɗaukar bidiyo",
        objective: "O2",
        notYet: "Kusurwa ɗaya kawai, ko kyamarar ta motsa, ko ta yi sama ko ƙasa da yawa.",
        meets: "Kallon gefe da na gaba a tsayin kwankwaso daga wuraren alama, maimaitawa uku kowanne.",
        exceeds: "Ya kuma rubuta wuraren, saitin bidiyo a hankali da hasken, ta yadda kowa zai iya maimaitawa."
      },
      {
        name: "Matakai da muhimman hotuna",
        objective: "O3",
        notYet: "Babu matakan, ko ba a sa musu suna ba.",
        meets: "Kowane mataki yana da muhimmin hoto mai suna, wanda koci ya tabbatar.",
        exceeds: "Muhimman hotuna daga maimaitawa da dama suna nuna matsayi iri ɗaya kowane lokaci."
      },
      {
        name: "Abu na salon motsi",
        objective: "O5",
        notYet: "Abubuwa da dama a lokaci ɗaya, ko kalmomin da ke gano cuta ko yanke hukunci.",
        meets: "Abu ɗaya cikin jimloli biyu marasa hukunci tare da matakinsa da hotunan allo.",
        exceeds: "An kuma mayar da shi tambaya mai sarari da koci ya amsa da umarni ɗaya."
      },
      {
        name: "Amfani da kayan aiki",
        objective: "O4",
        notYet: "An ɗauki lambobin manhaja a matsayin cikakken ma'auni.",
        meets: "Duk kusurwar kayan pose ana kiranta ƙiyasi kuma an duba ta da hoton.",
        exceeds: "Zai iya faɗin abin da ke cikin bidiyon da zai iya sa kayan ya yi kuskure."
      },
      {
        name: "Kafin da bayan",
        objective: "O6",
        notYet: "An ɗauki bidiyo na biyu ta wata hanya daban, ko ba a yi kwatance ba.",
        meets: "Kwatance gefe da gefe daga wurare, kusurwoyi da haske iri ɗaya.",
        exceeds: "Ya kuma rubuta abin da ya canja, abin da bai canja ba, da duk wani ciwo da aka faɗa wa wanda ya dace."
      }
    ]
  },
  evaluation: {
    results: [
      "'Yan wasa da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "'Yan wasa da suka nuna wa koci kwatancen kafin da bayan cikin kwanaki 30 (binciken biyo baya)",
      "Masu horarwa da suka ce tattaunawa game da salon motsi ta fi sarari da 'yan wasan da suka ɗauki kwas ɗin",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan wasa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai kyamara da bidiyo a hankali (slow motion)",
      "Tef ko mazugi (cones) don sa alama a wuraren kyamara",
      "Mataimakin AI kyauta; manhajar pose estimation kyauta ba dole ba ce",
      "Kusan minti 60 don darussa, gwaje-gwaje da jarabawa, da zaman ɗaukar bidiyo biyu da tazarar makonni biyu"
    ],
    facilitatorNotes: [
      "Ku yi ɗaukar bidiyo a matsayin atisayen rukuni: ɗan wasa ɗaya yana motsi, ɗaya yana ɗauka, ɗaya yana duba tsayin kyamara da wurinta.",
      "Ku sami izini a rubuce kafin ɗaukar bidiyon yara, kuma ku nisanta bidiyonsu daga manhajojin jama'a.",
      "Koci ya tabbatar da matakai da umarni (cues); kwas ɗin ba ya maye gurbin horarwa.",
      "Duk ɗan wasan da ya ce yana jin ciwo ya daina atisayen, a tura shi ga athletic trainer, likitan gyaran jiki ko likita.",
      "Ku ba da maki ga kwatancen ƙarshe da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
