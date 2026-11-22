"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-student-ai-literacy.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-student-ai-literacy-ha",
  lang: "ha",
  translationOf: "edu-student-ai-literacy",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makaranta da na Ilimi 5: Koyon Ɗalibai da Ilimin AI",
  skills: "Bayyana ilimin AI ga ɗalibai, Koyar da darasin ilimin AI a aikace, Amfani da AI a matsayin abokin koyo, Saita matakan amfani da AI a aji, Koya wa ɗalibai su bayyana amfani da AI, Kiyaye lafiyar ɗalibai",
  outcome: "koya wa ɗalibai su fahimci AI, su yi masa tambayoyi, kuma su yi amfani da shi bisa gaskiya: gabatar da darasin ilimin AI na minti 30, saita matakan amfani da AI a sarari ga ayyukan aji, koya wa ɗalibai su faɗi yadda suka yi amfani da AI, da bayyana dokokin tsaro ga ɗalibai da iyalansu.",
  about: [
    "Wannan kwas na malamai ne, ma'aikatan ɗakin karatu da na kafofin watsa labarai, masu ba da shawara, masu horar da wasanni da shugabannin makaranta da ke tsara yadda ɗalibai ke koyo da AI da kuma game da AI. Ɗalibai sun riga sun fara amfani da AI; ilimin AI yana taimaka musu su yi amfani da shi don su koya, ba don su tsallake koyo ba.",
    "Babi na 1 yana bayyana ilimin AI, yana ba ku darasi a aikace don koyar da shi, kuma yana nuna yadda ake amfani da AI a matsayin abokin koyo da ke yin tambayoyi maimakon ba da amsoshi. Babi na 2 yana saita dokokin aji: matakan amfani da AI ga ayyuka, bayyanawa, tsaro da sirri, da tsari ga dukan makarantar.",
    "Amfanin ɗalibai da kowane kayan AI ya dogara ne kan amincewar gundumar makarantunku (district), dokokin shekaru na kayan, kuma ga yara 'yan ƙasa da shekara 13, dokar COPPA (dokar Amurka da ke kare sirrin yara a intanet). Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Wannan shi ne kwas na 5 cikin 8 na AI ga Shugabannin Makaranta da na Ilimi."
  ],
  finalTask: "Ku shirya kunshin ilimin AI na ɗalibai don aji ɗaya: tsarin darasi na minti 30 inda ɗalibai za su gwada kayan AI (ko su kalli malami yana nunawa), su gano kuskure su tattauna son kai (bias); ma'aunin amfani da AI a aji mai matakai biyar tare da misalin aiki a kowane mataki; tsarin bayyanawa na layi ɗaya da ɗalibai za su yi amfani da shi; da wasiƙa ta rabin shafi ga iyalai da ke bayyana abin da ɗalibai za su koya da dokokin tsaro.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malamai, ma'aikatan ɗakin karatu da na kafofin watsa labarai, masu ba da shawara, masu horar da wasanni da shugabannin makaranta a makarantun Amurka da ke tsara yadda ɗalibai ke koyo da AI da kuma game da AI.",
    startingPoint: "Sun san tushen AI, dokokin sirrin ɗalibai da yadda ake tantance kayan aiki daga kwas na baya. Ɗalibai a makarantarsu sun riga sun fara amfani da AI, amma babu hanya ɗaya da kowa ke bi don koyar da ilimin AI, saita dokoki ga ayyuka ko neman ɗalibai su bayyana amfani da AI.",
    gap: "Ba tare da ilimin AI ba, ɗalibai suna amfani da AI don tsallake koyo, suna amincewa da amsoshi marasa daidai ko masu son kai, kuma suna bayyana bayanan sirri. Malamai suna buƙatar koya wa ɗalibai su fahimci AI su kuma yi masa tambayoyi, su saita matakan amfani da bayyanawa a sarari, kuma su bayyana dokokin tsaro ga ɗalibai da iyalai.",
    constraints: [
      "Amfanin ɗalibai da kowane kayan AI ya dogara ne kan amincewar gunduma, dokokin shekaru na kayan, kuma ga yara 'yan ƙasa da shekara 13, dokar COPPA",
      "Ƙananan ɗalibai za su iya koyo ta hanyar malami yana nunawa da ayyuka ba tare da na'ura ba, ba tare da asusu ba",
      "Ɗalibai ba sa taɓa bayar da cikakken suna, adireshi ko kalmar sirri ga AI",
      "Kayan AI suna canjawa, don haka ana gwada tambayoyin darasi da aka shirya jim kaɗan kafin a koyar",
      "Lokaci: gajerun darussa da suka dace da ranar makaranta, da darasin ɗalibai na minti 30"
    ],
    prerequisites: "Ana ba da shawarar \"AI for School and Educational Leaders 2: AI Tools for Educators\" (AI ga Shugabannin Makaranta da na Ilimi 2: Kayan AI ga Malamai)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ga aji ɗaya da kuke koyarwa", action: "bayyana ƙwarewa huɗu na ilimin AI na ɗalibai da kalmomin da ɗalibai za su fahimta", standard: "tare da misali ɗaya ga kowace ƙwarewa" },
    { id: "O2", condition: "Ta amfani da kayan da aka amince da shi ko malami yana nunawa", action: "tsara darasi na minti 30 inda ɗalibai za su gwada AI, su gano kuskure, su tattauna son kai", standard: "tare da tambayoyi biyar da aka shirya aka gwada tun kafin lokaci, ciki har da ɗaya da AI ke kuskure a kai" },
    { id: "O3", condition: "Kan wani darasi da kuke koyarwa", action: "rubuta prompt na abokin koyo da ke sa AI ya yi tambayoyi maimakon ba da amsoshi", standard: "kuma ku bayyana dalilin da yasa suke taimaka wa ɗalibi ya koyi fiye da prompt na injin amsa" },
    { id: "O4", condition: "Idan aka ba ku ayyukan da ke tafe", action: "sanya wa kowane aiki mataki a kan ma'aunin amfani da AI mai matakai biyar", standard: "tare da dalili da ke da alaƙa da manufar koyo" },
    { id: "O5", condition: "Idan ɗalibai suna amfani da AI a aikin da aka yarda", action: "koyar da tsarin bayyana amfani da AI na layi ɗaya", standard: "mai faɗin sunan kayan, abin da ya yi, ranar, da abin da ɗalibin ya yi" },
    { id: "O6", condition: "Ga ɗalibai da iyalai", action: "bayyana dokokin tsaron AI na ɗalibai da tsara ilimin AI a dukan ajujuwa", standard: "a wasiƙa ta rabin shafi ga iyalai da ke ambaton kayan da ake amfani da su, dalili, da dokokin tsaro" }
  ],
  chapters: [
    {
      name: "Babi na 1: Koya wa ɗalibai game da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ma'anar ilimin AI ga ɗalibai",
          minutes: 5,
          goal: "Bayyana ilimin AI a matsayin ƙwarewa huɗu na ɗalibai da za ku iya koyarwa.",
          text: [
            "Ilimin AI shi ne sanin isasshe game da AI don amfani da shi da kyau, yi masa tambayoyi, da yin zaɓi mai kyau game da shi. Ga ɗalibai, ya ƙunshi ƙwarewa huɗu. Fahimta: AI yana hasashen amsoshin da suka fi yiwuwa daga tsarin abubuwa (patterns); ba ya tunani ko sani kamar mutum. Tambaya: AI yana iya yin kuskure, ƙirƙirar abu ko nuna son kai, don haka ku duba shi.",
            "Amfani: yin tambayoyi a sarari, amfani da AI don koyo (bayani, gwada ni, ba ni ra'ayi) ba don guje wa koyo ba, da bin dokokin aji. Yanke shawara: tunani game da sirri, adalci da gaskiya, kamar abin da za a bayar, aikin wane ne, da lokacin da bai kamata a yi amfani da AI ko kaɗan ba.",
            "Aji yana da muhimmanci. Ƙananan ɗalibai za su iya koyon ra'ayoyin ta hanyar malami yana nunawa da ayyuka ba tare da na'ura ba, ba tare da asusu ba. Manyan ɗalibai za su iya amfani da kayan da aka amince da su kai tsaye ƙarƙashin dokoki masu sarari."
          ],
          words: [["Ilimin AI (AI literacy)", "sanin isasshe game da AI don amfani da shi da kyau, yi masa tambayoyi, da yin zaɓi mai kyau."], ["Aiki ba tare da na'ura ba (unplugged)", "darasi game da fasaha da ba ya amfani da kowace na'ura."]],
          slides: [
            { title: "Ƙwarewa huɗu na ɗalibai", bullets: ["Fahimta: AI yana hasashe daga tsarin abubuwa", "Tambaya: yana iya yin kuskure ko nuna son kai", "Ku yi amfani da shi don koyo; ku yanke shawara cikin hikima"] },
            { title: "Amfani don koyo, ba don tsallakewa ba", bullets: ["\"Ka bayyana shi ta wata hanya\"", "\"Ka gwada ni\"", "\"Ka ba ni ra'ayi kan daftarina\""] },
            { title: "Bisa aji", bullets: ["Ƙanana: malami yana nunawa, ba tare da na'ura ba", "Manya: kayan da aka amince, dokoki masu sarari"] }
          ],
          tryIt: "Ku rubuta ƙwarewa huɗu na ilimin AI da kalmomin da ɗalibanku za su fahimta, ga aji ɗaya da kuke koyarwa, tare da misali ɗaya ga kowace.",
          youCanNow: "bayyana ilimin AI a matsayin ƙwarewa huɗu na ɗalibai da ake iya koyarwa.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ilimin AI?", options: ["Sanin yadda ake gina shirye-shiryen AI", "Sanin isasshe game da AI don amfani da shi da kyau, yi masa tambayoyi, da zaɓi cikin hikima", "Karanta littattafai game da mutum-mutumi (robot)", "Rubutu da sauri"], answer: 1, why: "Ilimin AI game da amfani da AI da kyau da yi masa tambayoyi ne, ba game da rubuta shiri (code) ba." },
            { objective: "O1", q: "Ɗalibanku na aji 2 ba su da asusun AI. Ta yaya za ku koyar da ilimin AI?", options: ["Ku jira har sai sun kai sakandare", "Ku sa su yi rajista da asusun iyaye", "Ku yi amfani da malami yana nunawa da ayyuka ba tare da na'ura ba", "Ku tsallake batun"], answer: 2, why: "Nunawa da ayyuka ba tare da na'ura ba suna koyar da ilimin AI ba tare da asusun ɗalibai ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Darasin ilimin AI a aikace",
          minutes: 6,
          goal: "Tsara darasi na minti 30 inda ɗalibai za su gwada AI su gano kurakuransa.",
          text: [
            "Ɗalibai suna koyon iyakokin AI mafi kyau idan sun gan su. Tsari: jan hankali (minti 5): ku tambaya \"Shin AI koyaushe daidai yake?\" ku sa a jefa ƙuri'a. Bincike (minti 15): bibbiyu, ko ta hanyar malami yana nunawa, ku yi wa kayan AI tambayoyin da kuka shirya, ciki har da ɗaya da yake kuskure ko ƙirƙira (majiyar bogi, wata tambayar lissafi mai wayo, ko wani bayani na yankinku).",
            "Tabbatarwa (minti 5): ɗalibai suna duba amsoshin da littafin karatu, wani shafin intanet amintacce ko malami. Tattauna son kai (minti 5): ku nemi kayan ya bayyana \"masanin kimiyya\" ko \"ma'aikaciyar jinya\" sau da yawa, ku lura da tsarin da ke maimaituwa; ku tattauna daga ina wannan tsarin ya fito.",
            "Ku rufe da tikitin fita (exit ticket): \"Ku faɗi abu ɗaya da AI ke da kyau a kai, da dalili ɗaya na duba shi.\" Ku gwada tambayoyinku da kuka shirya kafin aji, domin kayan AI suna canjawa kuma suna iya gyara kurakurai ko su yi sababbi."
          ],
          steps: ["Jan hankali: ƙuri'ar \"Shin AI koyaushe daidai yake?\"", "Bincike: tambayoyin da aka shirya, ciki har da ɗaya da yake kuskure a kai.", "Tabbatarwa da majiyoyi amintattu.", "Tattauna son kai da gwajin bayyana mutum.", "Tikitin fita; ku gwada tambayoyinku kafin aji."],
          words: [["Tabbatarwa (fact-check)", "duba wani bayani da majiya amintacciya."], ["Son kai (bias)", "tsari marar adalci, kamar koyaushe bayyana wani aiki a matsayin na wani irin mutum kawai."]],
          slides: [
            { title: "Darasi na minti 30", bullets: ["Jan hankali: shin AI koyaushe daidai yake?", "Bincike: tambayoyin da aka shirya", "Tabbatarwa, tattauna son kai, tikitin fita"] },
            { title: "Ku nuna kuskure na gaske", bullets: ["Majiyar bogi ko tambayar lissafi mai wayo", "Bayani na yankinku da wataƙila bai sani ba", "Ku gwada tambayoyinku kafin aji"] },
            { title: "Gano son kai", bullets: ["Ku nemi ya bayyana \"masanin kimiyya\" sau da yawa", "Ku lura da tsari; ku tattauna daga inda ya fito"] }
          ],
          tryIt: "Ku shirya tambayoyi biyar don darasin, ciki har da aƙalla ɗaya da AI ke kuskure a kai. Ku gwada su a kayan da aka amince da shi, ku rubuta amsoshin da za ku yi amfani da su.",
          youCanNow: "tsara darasi a aikace da ke koya wa ɗalibai su yi wa AI tambayoyi.",
          quickCheck: [
            { objective: "O2", q: "Da me ɗalibai ke duba amsoshin AI a darasin aikace?", options: ["Littafin karatu, shafin intanet amintacce ko malami", "Wani kayan AI", "Hasashen abokin aji", "Babu komai; suna amincewa da amsar farko"], answer: 0, why: "Majiyoyi amintattu suna bar ɗalibai su gano kurakuran AI da kansu." },
            { objective: "O2", q: "Tambayar da kuka shirya don nuna kuskuren AI yanzu tana samun amsa daidai. Me za ku yi?", options: ["Ku faɗa wa ɗalibai cewa AI ba ya taɓa kuskure", "Ku yi amfani da ita duk da haka ku yi kamar ba daidai ba ce", "Ku soke darasin", "Ku gwada wasu tambayoyi har sai kun sami wadda AI ke kuskure a kai, ku rubuta amsoshin"], answer: 3, why: "Kayan AI suna canjawa, don haka ku gwada tambayoyi jim kaɗan kafin darasin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI a matsayin abokin koyo, ba injin amsa ba",
          minutes: 5,
          goal: "Koya wa ɗalibai prompt da ke sa AI ya taimaka musu su yi tunani.",
          text: [
            "Kayan ɗaya zai iya yi wa ɗalibi tunani ko ya taimaka masa ya yi tunani. Bambancin yana cikin prompt (umarni). Injin amsa: \"Ka rubuta mini sakin layi game da musabbabin Yaƙin Basasar Amurka.\" Abokin koyo: \"Ka yi mini tambayoyi ɗaya bayan ɗaya don in gano musabbabin da kaina, kuma kada ka ba ni amsar.\"",
            "Ku koyar da prompt uku na abokin koyo: \"Ka bayyana wannan ta wata hanya, tare da misali\"; \"Ka gwada ni kan wannan ka faɗa mini inda na yi kuskure\"; \"Ga daftarina. Ka ba ni ƙarfi biyu da abu ɗaya da zan inganta, amma kada ka sake rubuta shi.\"",
            "Wasu kayan ilimi an gina su don koyarwa ta wannan hanya. Da kowane kaya, ya kamata ɗalibai su tabbatar da bayanai, kuma aikin da suke mikawa ya zama tunaninsu, kamar yadda matakin amfani da AI na aji ya yarda."
          ],
          steps: ["Ku nuna prompt na injin amsa da sakamakonsa.", "Ku nuna prompt na abokin koyo da sakamakonsa.", "Ku koyar da prompt uku na abokin koyo.", "Ku sa ɗalibai su yi atisaye kan darasin yau.", "Tunatarwa: ku tabbatar da bayanai; ku mika tunaninku."],
          words: [["Prompt na abokin koyo", "prompt da ke neman AI ya taimaka muku ku yi tunani maimakon ya yi aikin."], ["Tambayoyin Socrates (Socratic questioning)", "koyarwa ta hanyar yin tambayoyi da ke jagorantar mai koyo ya gano amsar da hankalinsa."]],
          slides: [
            { title: "Kayan ɗaya, prompt daban", bullets: ["Injin amsa: \"Ka rubuta mini sakin layi\"", "Abokin koyo: \"Ka yi mini tambayoyi, kada ka faɗa mini\""] },
            { title: "Prompt uku na abokin koyo", bullets: ["\"Ka bayyana shi ta wata hanya, tare da misali\"", "\"Ka gwada ni ka faɗa mini inda na yi kuskure\"", "\"Ƙarfi biyu, gyara ɗaya, ba sake rubutawa\""] },
            { title: "Har yanzu aikin ɗalibi ne", bullets: ["Ku tabbatar da bayanai", "Ku mika tunaninku"] }
          ],
          tryIt: "Ku gwada prompt na injin amsa da prompt na abokin koyo kan wani darasi da kuke koyarwa. Ku rubuta wanne zai taimaka wa ɗalibi ya koyi fiye, da dalili.",
          youCanNow: "koya wa ɗalibai su yi amfani da AI don taimaka wa tunaninsu, ba don maye gurbinsa ba.",
          quickCheck: [
            { objective: "O3", q: "Mene ne prompt na injin amsa?", options: ["Prompt da ke neman AI ya gwada ku", "Prompt da ke neman AI ya yi muku aikin", "Prompt da ke neman alamu (hints)", "Prompt da ke neman AI ya bayyana kurakuranku"], answer: 1, why: "Prompt na injin amsa yana tsallake tunanin da aikin ke ginawa." },
            { objective: "O3", q: "Wani ɗalibi yana son taimakon AI don yin karatun jarabawa. Wane prompt za ku koya masa?", options: ["\"Ka ba ni dukan amsoshin.\"", "\"Ka rubuta mini bayanan karatuna.\"", "\"Ka yi mini aikin gida.\"", "\"Ka gwada ni tambaya ɗaya bayan ɗaya ka faɗa mini inda na yi kuskure.\""], answer: 3, why: "Prompt na abokin koyo yana sa ɗalibi ya ci gaba da tunani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Koya wa ɗalibai game da AI",
        questions: [
          { objective: "O1", q: "Wanne ne ɗaya daga cikin ƙwarewa huɗu na ilimin AI na ɗalibai?", options: ["Haddace sunayen kamfanonin AI", "Rubutu da sauri", "Tambaya: AI yana iya yin kuskure ko nuna son kai", "Guje wa duk wata fasaha"], answer: 2, why: "Yi wa AI tambayoyi shi ne tushen ilimin AI." },
          { objective: "O1", q: "Ta yaya ƙananan ɗalibai za su koyi ilimin AI ba tare da asusu ba?", options: ["Malami yana nunawa da ayyuka ba tare da na'ura ba", "Ba za su iya ba", "Ta amfani da kalmar sirrin iyaye", "Yin rajista da shekarun ƙarya"], answer: 0, why: "Nunawa da darussa ba tare da na'ura ba suna koyar da ra'ayoyin lafiya." },
          { objective: "O2", q: "Me yasa za ku gwada tambayoyin da kuka shirya kafin darasi?", options: ["Don ya yi tsawo", "Doka ce", "Ɗalibai sun fi so", "Kayan AI suna canjawa kuma suna iya gyara kurakurai ko su yi sababbi"], answer: 3, why: "Kuskuren da kuka shirya zai iya daina bayyana." },
          { objective: "O3", q: "Wanne ne prompt na abokin koyo?", options: ["\"Ka rubuta mini maƙala.\"", "\"Ka yi mini tambayoyi ɗaya bayan ɗaya; kada ka ba da amsar.\"", "\"Ka yi mini aikin gida.\"", "\"Ka ba ni amsoshin.\""], answer: 1, why: "Yana taimaka wa tunani maimakon maye gurbinsa." },
          { objective: "O2", q: "Neman AI ya bayyana \"ma'aikaciyar jinya\" sau da yawa yana taimaka wa ɗalibai su lura da:", options: ["Rubutun kalmomi", "Farashi", "Sauri", "Son kai a cikin tsarin abubuwa"], answer: 3, why: "Tsarin da ke maimaituwa zai iya bayyana son kai." }
        ]
      }
    },
    {
      name: "Babi na 2: Dokoki, tsaro da tsari ga dukan makaranta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Matakan amfani da AI ga ayyuka",
          minutes: 6,
          goal: "Saita ma'aunin amfani da AI mai matakai biyar ku sanya wa ayyuka mataki da shi.",
          text: [
            "Ɗalibai suna buƙatar sanin, ga kowane aiki, irin amfanin AI da aka yarda. Ma'auni mai sauƙi na matakai biyar: Mataki na 0, babu AI. Mataki na 1, AI don ra'ayoyi kawai (ku tattara ra'ayoyi, sannan ku yi aiki da kanku). Mataki na 2, AI don ra'ayi kan aiki (kan daftarinku; ku ne kuke yin canje-canje). Mataki na 3, AI a matsayin abokin aiki (kuna iya amfani da sassan da AI ya yi, da alama da bayani). Mataki na 4, binciken AI (amfani da AI shi ne manufar aikin).",
            "Ku sanya wa kowane aiki matakinsa, ku bayyana dalili: aikin mataki na 0 yana iya gina ƙwarewar da dole ɗalibai su mallaka da kansu, kamar rubuta sakin layi a lokacin da aka ƙayyade ko lissafi a ka. Aikin mataki na 2 yana gina ƙwarewar gyaran rubutu.",
            "Ku yi amfani da ma'auni ɗaya a dukan makaranta don kada ɗalibai su fuskanci dokoki daban a kowane aji. Akwai nau'o'i da yawa na ma'aunin tantance AI da aka wallafa; ku daidaita ɗaya ko ku rubuta naku tare da ma'aikatanku."
          ],
          steps: ["Ku amince da ma'auni mai matakai biyar tare da ma'aikata.", "Ku sanya wa kowane aiki matakinsa.", "Ku bayyana dalilin da yasa matakin ya dace da manufar koyo.", "Ku liƙa ma'aunin a aji da kuma a intanet.", "Ku yi amfani da ma'auni ɗaya a dukan makaranta."],
          words: [["Matakin amfani da AI", "alamar da ke faɗa wa ɗalibai yawan AI da za su iya amfani da shi a wani aiki."], ["Abokin aiki (collaborator)", "wani (ko wani abu) da ke aiki tare da ku a kan wani aiki."]],
          slides: [
            { title: "Matakai biyar na amfani da AI", bullets: ["0 Babu AI; 1 Ra'ayoyi kawai", "2 Ra'ayi kan daftarinku", "3 Abokin aiki, da alama da bayani", "4 Binciken AI"] },
            { title: "Ku sanya wa kowane aiki mataki", bullets: ["Ku faɗi matakin", "Ku faɗi dalilin da yasa ya dace da manufar koyo"] },
            { title: "Ma'auni ɗaya, dukan makaranta", bullets: ["Dokoki iri ɗaya a kowane aji", "Ku daidaita ma'aunin da aka wallafa tare da ma'aikata"] }
          ],
          tryIt: "Ku rubuta ma'aunin matakai biyar da kalmomin da ɗalibai za su fahimta. Sannan ku sanya wa ayyukanku biyar da ke tafe mataki, tare da dalili na layi ɗaya.",
          youCanNow: "faɗa wa ɗalibai a sarari yawan AI da za su iya amfani da shi a kowane aiki, da dalili.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar Mataki na 0 a ma'aunin amfani da AI?", options: ["Ba za a yi amfani da AI ba", "An yarda da kowane amfani da AI", "AI zai iya rubuta daftarin farko", "AI zai iya ba da maki ga aikin"], answer: 0, why: "Mataki na 0 na ayyukan da dole ɗalibai su nuna tunaninsu ba tare da AI ba ne." },
            { objective: "O4", q: "Manufar wani aiki ita ce yin atisayen rubuta daftarin farko shi kaɗai. Wane mataki ya dace?", options: ["Matakin abokin aiki, AI yana rubuta wasu sassa", "Babu mataki; a bar ɗalibai su yanke", "Ƙaramin mataki kamar babu AI, tare da dalili da ke da alaƙa da wannan manufar", "Mataki mafi girma, don ɗalibai su koyi kayan"], answer: 2, why: "Ya kamata matakin ya dace da manufar koyo, tare da dalili da ɗalibai za su gani." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faɗin yadda kuka yi amfani da AI",
          minutes: 5,
          goal: "Koya wa ɗalibai hanya mai sauƙi ta bayyana da ambaton amfani da AI.",
          text: [
            "Gaskiya game da AI ƙwarewa ce. Idan an yarda da AI, ya kamata ɗalibai su faɗi yadda suka yi amfani da shi. Bayyanawa ta layi ɗaya tana aiki ga yawancin ayyuka: \"Na yi amfani da [kaya] don [abu] a ranar [rana]. Ni kuma na [abin da na yi da shi].\" Misali: \"Na yi amfani da Gemini don ya gwada ni kan kalmomi a ranar 3 ga Maris. Na rubuta dukan amsoshin da kaina.\"",
            "Don ayyukan bincike, manyan ɗalibai za su iya bin salon ambaton majiya (citation) da makarantarku ke amfani da shi; jagororin salo kamar MLA da APA suna wallafa jagora kan ambaton kayan AI a shafukansu na intanet. AI ba majiyar bayanai amintacciya ba ce, don haka dole ɗalibai su nemo ainihin majiyar su ambace ta.",
            "Ku ɗauki bayyanawa ta gaskiya a matsayin abu mai kyau. Ɗaliban da ke faɗin abin da suka yi da AI suna koyon gaskiya da riƙon amana; kada ku hukunta bayyanawa ta gaskiya na amfanin da aka yarda."
          ],
          steps: ["Ku koyar da bayyanawa ta layi ɗaya.", "Ku nuna misali da aikinku da AI ya taimaka.", "Don bincike, ku yi amfani da jagorar salon ambaton majiya na makarantarku.", "Ku buƙaci ainihin majiyoyi don bayanai.", "Ku yaba bayyanawa ta gaskiya."],
          words: [["Bayyanawa (disclosure)", "faɗin a fili yadda kuka yi amfani da AI."], ["Ambaton majiya (citation)", "rubutu da ke faɗa wa mai karatu inda bayani ya fito."]],
          slides: [
            { title: "Bayyanawa ta layi ɗaya", bullets: ["\"Na yi amfani da [kaya] don [abu] a ranar [rana].\"", "\"Ni kuma na [abin da na yi da shi].\""] },
            { title: "Ayyukan bincike", bullets: ["Ku yi amfani da salon ambaton majiya na makarantarku", "AI ba majiyar bayanai ba ce", "Ku nemo ainihin majiya ku ambace ta"] },
            { title: "Ku ba da lada ga gaskiya", bullets: ["Ku nuna misali da kanku", "Kada ku taɓa hukunta bayyanawa ta gaskiya na amfanin da aka yarda"] }
          ],
          tryIt: "Ku rubuta layin bayyanawa don wani abu da kuka yi amfani da AI a kai a wannan makon. Sannan ku rubuta umarnin da za ku ba ɗalibai kan yadda za su bayyana amfani da AI.",
          youCanNow: "koya wa ɗalibai su bayyana da ambaton amfani da AI bisa gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Me ya kamata bayyanawar AI ta layi ɗaya ta ƙunsa?", options: ["Kalmar \"AI\" kaɗai", "Kayan, abin da ya yi, ranar, da abin da ɗalibin ya yi", "Kalmar sirrin ɗalibin", "Maki"], answer: 1, why: "Cikakken layi yana nuna daidai yadda aka yi amfani da AI." },
            { objective: "O5", q: "Wani ɗalibi ya bayyana a gaskiya amfanin AI da aka yarda a aikinsa. Yaya za ku mayar da martani?", options: ["Ku ɗauki bayyanawar a matsayin abu mai kyau", "Ku rage masa maki", "Ku kai rahotonsa a matsayin satar amsa", "Ku yi watsi da ita"], answer: 0, why: "Bayyanawa ta gaskiya ita ce al'adar da kuke so, don haka ya kamata a yi maraba da ita." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye lafiyar ɗalibai, da tsari ga dukan makaranta",
          minutes: 6,
          goal: "Koyar da dokokin tsaron ɗalibai da tsara ilimin AI a dukan ajujuwa.",
          text: [
            "Ku koya wa ɗalibai dokokin tsaro huɗu. Kada ku bayar da bayanan sirri (cikakken suna, adireshi, makaranta, hotuna, kalmomin sirri) ga kayan AI. Ku yi amfani da kayan da makaranta ta amince da su kaɗai, bisa dokokin shekaru da ke cikin sharuɗɗan kayan. AI zai iya ƙirƙirar hotuna, muryoyi da bidiyo na bogi (deepfakes): ku yi hankali da abin da kuke yarda da shi, kuma kada ku taɓa yin na bogi na mutane na gaske. Ku yi magana da babban mutum amintacce idan hira da AI ta ɓata muku rai, ta zama marar aminci ko ta nemi sirri.",
            "Ga yara 'yan ƙasa da shekara 13, dokar COPPA tana aiki kan hidimomin intanet; hukumar FTC (hukumar kasuwanci ta tarayyar Amurka) ta ce makaranta za ta iya ba da izini a madadin iyaye ne kawai idan hidimar tana tattara bayanai don amfani da amfanin makarantar, ba tare da wata manufar kasuwanci ba. Gundumarku ce ke yanke wane kaya ɗalibai za su iya amfani da shi; ku faɗa wa iyalai waɗanne ne da dalili.",
            "Ku tsara ilimin AI bisa rukunin ajujuwa, don kowace shekara ta gina kan wadda ta gabace ta: ajujuwan farko suna koyon mene ne AI ta hanyar nunawa; manyan ajujuwan firamare suna atisayen yin tambayoyi da tabbatar da bayanai; ƙaramar sakandare tana ƙara son kai, bayyanawa da amfani da abokin koyo; babbar sakandare tana ƙara ɗabi'a, sana'o'i da ƙirƙira bisa gaskiya. Ku raba tsarin da iyalai."
          ],
          steps: ["Ku koyar da dokokin tsaro huɗu.", "Ku tabbatar da kayan da aka amince da dokokin shekaru; ga 'yan ƙasa da 13, izinin COPPA.", "Ku faɗa wa iyalai kayan da ake amfani da su da dalili.", "Ku tsara ƙwarewar ilimin AI bisa rukunin ajujuwa.", "Ku raba tsarin da iyalai."],
          words: [["Deepfake", "hoto, murya ko bidiyo na bogi da aka yi da AI don ya yi kama da na gaske."], ["Rukunin ajujuwa (grade band)", "rukunin ajujuwa da ke tare, kamar K-2 ko 6-8."]],
          slides: [
            { title: "Dokokin tsaron ɗalibai huɗu", bullets: ["Babu bayanan sirri", "Kayan da aka amince kaɗai, bisa dokokin shekaru", "Ku yi hankali da deepfakes; kada ku taɓa yin na bogi na mutane na gaske", "Ku faɗa wa babban mutum amintacce"] },
            { title: "'Yan ƙasa da 13: COPPA", bullets: ["Izinin makaranta don amfanin makaranta kaɗai", "Babu wata manufar kasuwanci", "Ku faɗa wa iyalai waɗanne kaya da dalili"] },
            { title: "Tsari bisa rukunin ajujuwa", bullets: ["Farko: mene ne AI", "Manyan firamare: tambaya da tabbatarwa", "Sakandare: son kai, bayyanawa, ɗabi'a"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions (Bin dokar COPPA: tambayoyin da ake yawan yi)", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Aikin ƙarshe: ku haɗa kunshin ilimin AI na ɗalibai don aji ɗaya: tsarin darasi na minti 30, ma'aunin amfani da AI mai matakai biyar tare da misalin aiki a kowane mataki, tsarin bayyanawa na layi ɗaya, da wasiƙa ta rabin shafi ga iyalai da ke ɗauke da dokokin tsaro.",
          youCanNow: "jagorantar ilimin AI na ɗalibai da darasi, matakan amfani masu sarari, bayyanawa ta gaskiya da dokokin tsaro da iyalai ke fahimta.",
          quickCheck: [
            { objective: "O6", q: "Mene ne deepfake?", options: ["Fayil na kwamfuta da ya lalace", "Kalmar sirri mai ƙarfi", "Hoto, murya ko bidiyo na bogi da aka yi da AI", "Wani nau'in injin bincike"], answer: 2, why: "Deepfakes abubuwan bogi ne da AI ya yi, shi yasa ɗalibai ba sa taɓa yin na bogi na mutane na gaske." },
            { objective: "O6", q: "Wani ɗalibi ya ce hira da AI ta ɓata masa rai. Me ya kamata a koya masa ya yi?", options: ["Ya ci gaba da hira har sai ta tsaya", "Ya goge manhajar kuma kada ya faɗa wa kowa", "Ya saka batun a intanet", "Ya faɗa wa babban mutum amintacce"], answer: 3, why: "Faɗa wa babban mutum amintacce ɗaya ne daga cikin dokokin tsaron ɗalibai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Dokoki, tsaro da tsari ga dukan makaranta",
        questions: [
          { objective: "O4", q: "A aikin Mataki na 2 (ra'ayi kan aiki), ɗalibai za su iya:", options: ["Sa AI ya rubuta dukan aikin", "Kada su yi amfani da AI ko kaɗan", "Samun ra'ayin AI kan daftarinsu, su kuma yi canje-canjen da kansu", "Kwafar rubutun AI ba tare da alama ba"], answer: 2, why: "Mataki na 2 ra'ayi ne kan aikin ɗalibin da kansa." },
          { objective: "O4", q: "Me yasa za a yi amfani da ma'aunin amfani da AI ɗaya a dukan makaranta?", options: ["Ɗalibai suna fuskantar dokoki iri ɗaya a kowane aji", "Ya fi arha", "Yana hana AI", "Masu sayar da kayan suna buƙata"], answer: 0, why: "Daidaito yana hana ruɗani." },
          { objective: "O5", q: "Wani ɗalibi ya bayyana a gaskiya amfanin AI da aka yarda. Ya kamata ku:", options: ["Rage maki", "Ɗauki bayyanawar a matsayin abu mai kyau", "Kai rahotonsa", "Yi watsi da ita"], answer: 1, why: "Bayyanawa ta gaskiya riƙon amana ne a aikace." },
          { objective: "O6", q: "Wanne ne ɗaya daga cikin dokokin tsaron ɗalibai huɗu?", options: ["Kada ku taɓa yin na bogi na mutane na gaske", "Ku bayar da adireshinku don samun amsoshi mafi kyau", "Ku yi amfani da kowace manhaja da kuka samu", "Ku ɓoye hirarrakin da suka ɓata muku rai"], answer: 0, why: "Deepfakes na mutane na gaske na iya jawo cutarwa." },
          { objective: "O6", q: "Ga ɗalibai 'yan ƙasa da shekara 13, wace doka ce ke aiki kan hidimomin intanet?", options: ["Babu", "Dokar hanya", "Haƙƙin mallaka kawai", "COPPA"], answer: 3, why: "COPPA tana kare yara 'yan ƙasa da shekara 13 a intanet." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makaranta da na Ilimi 5: Koyon Ɗalibai da Ilimin AI",
    questions: [
      { objective: "O1", q: "Ilimin AI yana nufin:", options: ["Iya gina AI", "Sanin isasshe game da AI don amfani da shi da kyau, yi masa tambayoyi, da zaɓi cikin hikima", "Rashin amfani da AI har abada", "Rubutu da sauri"], answer: 1, why: "Fahimta ne tare da hikimar yanke shawara." },
      { objective: "O1", q: "Ya kamata ɗalibai su fahimci cewa AI:", options: ["Ya san komai", "Yana tunani kamar mutum", "Yana hasashen amsoshin da suka fi yiwuwa daga tsarin abubuwa", "Ba ya taɓa kuskure"], answer: 2, why: "Wannan yana bayyana ƙarfinsa da kurakuransa." },
      { objective: "O1", q: "Aiki ba tare da na'ura ba (unplugged):", options: ["Ɗaukewar wutar lantarki ne", "Yana buƙatar kwamfutar tafi-da-gidanka", "Yana koyarwa game da fasaha ba tare da na'urori ba", "Bidiyo ne"], answer: 2, why: "Ya dace da ƙananan ɗalibai." },
      { objective: "O2", q: "A darasin aikace, ɗalibai suna tabbatar da amsoshin AI da:", options: ["Littafin karatu, shafin intanet amintacce ko malami", "Wani AI kawai", "Hasashen aboki", "Babu komai"], answer: 0, why: "Majiyoyi amintattu suna bayyana kurakurai." },
      { objective: "O2", q: "Tambaya mai kyau da aka shirya don darasin ita ce wadda:", options: ["Ta yi tsawo sosai", "Kowa ya sani", "Ba ta da amsa", "AI ke kuskure a kai ko ya ƙirƙira"], answer: 3, why: "Ganin kuskure yana koyar da al'adar dubawa." },
      { objective: "O2", q: "Gwajin bayyana mutum yana taimaka wa ɗalibai su ga:", options: ["Kurakuran rubutun kalmomi", "Son kai", "Farashi", "Sauri"], answer: 1, why: "Tsarin da ke maimaituwa yana bayyana son kai." },
      { objective: "O3", q: "\"Ka gwada ni ka faɗa mini inda na yi kuskure\" shi ne:", options: ["Kalmar sirri", "Satar amsa", "Prompt na injin amsa", "Prompt na abokin koyo"], answer: 3, why: "Yana taimaka wa koyo." },
      { objective: "O3", q: "\"Ka rubuta mini sakin layina\" yana mayar da AI:", options: ["Mai tabbatar da bayanai", "Malamin koyarwa na musamman", "Injin amsa", "Malami"], answer: 2, why: "Yana maye gurbin tunanin ɗalibi." },
      { objective: "O4", q: "Mataki na 0 a ma'aunin amfani da AI yana nufin:", options: ["Babu AI", "AI don komai", "Ra'ayi kan aiki kawai", "Ra'ayoyi kawai"], answer: 0, why: "Wasu ƙwarewa dole a gina su ba tare da taimako ba." },
      { objective: "O4", q: "Mataki na 3 (abokin aiki) yana buƙatar ɗalibai su:", options: ["Ɓoye amfani da AI", "Sanya alama da bayani kan sassan da AI ya yi", "Kada su yi amfani da AI", "Bar AI ya ba da maki"], answer: 1, why: "Bayyanawa a fili ita ce sharaɗin." },
      { objective: "O4", q: "Matakin AI na kowane aiki ya kamata ya zo da:", options: ["Dalili da ke da alaƙa da manufar koyo", "Farashi", "Kalmar sirri", "Babu bayani"], answer: 0, why: "Ɗalibai suna bin dokokin da suka fahimta." },
      { objective: "O5", q: "Bayyanawar AI ta layi ɗaya ta ƙunshi:", options: ["Babu komai", "Adireshin ɗalibin", "Farashin kayan", "Kayan, abin da ya yi, ranar, da abin da ɗalibin ya yi"], answer: 3, why: "Tana sa amfani da AI ya zama a fili." },
      { objective: "O5", q: "Don bincike, ya kamata a ambaci bayanai daga:", options: ["Hirar AI kawai", "Ainihin majiya", "Abin da aka tuna", "Jita-jita"], answer: 1, why: "AI ba majiyar bayanai amintacciya ba ce." },
      { objective: "O5", q: "Ana samun jagora kan ambaton AI a salon MLA ko APA:", options: ["Babu inda", "A cikin amsar AI kawai", "A shafukan intanet na jagororin salon da kansu", "A kafofin sada zumunta"], answer: 2, why: "Jagororin salo suna wallafa nasu jagora." },
      { objective: "O6", q: "Kada ɗalibai su taɓa bayar wa AI:", options: ["Batun atisaye", "Tambayar lissafi", "Cikakken sunansu, adireshi da kalmomin sirri", "Kalmar ƙamus"], answer: 2, why: "Bayanan sirri suna zama a sirri." },
      { objective: "O6", q: "Deepfake shi ne:", options: ["Hoto, murya ko bidiyo na bogi da aka yi da AI", "Kogin wanka mai zurfi", "Doguwar maƙala", "Kalmar sirri mai tsaro"], answer: 0, why: "AI zai iya yin abubuwan bogi da suke kama da na gaske." },
      { objective: "O6", q: "Idan hira da AI ta ɓata wa ɗalibai rai, ya kamata su:", options: ["Bayar da bayanan sirri", "Ɓoye ta", "Ci gaba da hira", "Faɗa wa babban mutum amintacce"], answer: 3, why: "Manya za su iya taimakawa wajen kiyaye lafiyar ɗalibai." },
      { objective: "O6", q: "Ana samun mafi ƙarancin shekaru na kayan AI a cikin:", options: ["Abin da abokin aiki ya tuna", "Sharuɗɗan kowane kaya na yanzu", "Jadawalin abincin makaranta", "Littafin karatu na 2010"], answer: 1, why: "Kowane kaya yana saita kuma yana sabunta nasa dokokin." },
      { objective: "O6", q: "Tsari bisa rukunin ajujuwa yana nufin:", options: ["Sakandare kaɗai ke koyon AI", "Darasi ɗaya ga kowane shekaru", "Babu tsari", "Ƙwarewar ilimin AI da ke ginuwa shekara bayan shekara"], answer: 3, why: "Ya kamata ƙwarewa su ginu a cikin ajujuwa." },
      { objective: "O6", q: "Ya kamata a faɗa wa iyalai:", options: ["Sai bayan matsala ta faru", "Babu komai", "Waɗanne kayan AI ake amfani da su, dalili, da dokokin tsaro", "Farashin kayan kawai"], answer: 2, why: "Bayyanawa a fili tana gina amana da goyon baya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Darasi a aikace",
        objective: "O2",
        notYet: "Ɗalibai ba sa gwada AI, ba sa gano kuskure kuma ba sa tattauna son kai.",
        meets: "Tsari na minti 30 inda ɗalibai ke gwada kayan AI ko kallon nunawa, su gano kuskure su tattauna son kai.",
        exceeds: "An gwada tambayoyin da aka shirya tun kafin lokaci kuma sun dace da ajin."
      },
      {
        name: "Ma'aunin amfani da AI",
        objective: "O4",
        notYet: "Matakai ƙasa da biyar, ko matakai ba tare da misalan ayyuka ba.",
        meets: "Ma'auni mai matakai biyar tare da misalin aiki a kowane mataki.",
        exceeds: "Kowane misali yana da dalili da ke da alaƙa da manufar koyo."
      },
      {
        name: "Tsarin bayyanawa",
        objective: "O5",
        notYet: "Babu tsarin bayyanawa, ko yana rasa muhimman sassa.",
        meets: "Tsari na layi ɗaya da ɗalibai za su yi amfani da shi don faɗin yadda suka yi amfani da AI.",
        exceeds: "Ya haɗa da kayan, abin da ya yi, ranar, da abin da ɗalibin ya yi, tare da misali."
      },
      {
        name: "Wasiƙar iyalai da tsaro",
        objective: "O6",
        notYet: "Babu wasiƙa ga iyalai, ko dokokin tsaro ba sa ciki.",
        meets: "Wasiƙa ta rabin shafi da ke bayyana abin da ɗalibai za su koya da dokokin tsaro.",
        exceeds: "Tana kuma faɗin kayan da ake amfani da su da dalili, da kalmomi masu sauƙi ga iyalai."
      },
      {
        name: "Ƙwarewar ilimin AI da ɗalibai ke fahimta",
        objective: "O1",
        notYet: "Kunshin ba ya koya wa ɗalibai su yi wa AI tambayoyi.",
        meets: "Darasin yana koya wa ɗalibai cewa AI yana iya yin kuskure ko nuna son kai, da yadda ake duba shi.",
        exceeds: "Yana amfani da prompt na abokin koyo don AI ya taimaka wa ɗalibai su yi tunani."
      }
    ]
  },
  evaluation: {
    results: [
      "Malaman da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ajujuwan da suka koyar da darasin ilimin AI na minti 30 cikin kwanaki 30 (binciken biyo baya)",
      "Makarantun da ke amfani da ma'aunin amfani da AI ɗaya a ayyuka (binciken biyo baya)",
      "Iyalan da suka sami wasiƙa kan amfanin AI na ɗalibai da tsaro"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da kayan AI da gunduma ta amince da shi don amfanin ɗalibai ko don nunawa",
      "Jerin ayyukan da ke tafe na aji ɗaya",
      "Takarda don ayyuka ba tare da na'ura ba tare da ƙananan ɗalibai",
      "Kusan minti 60 gaba ɗaya, da darasin ɗalibai na minti 30"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku gudanar da darasin aikace inda ma'aikata ke zama ɗalibai.",
      "Ku duba kayan da gunduma ta amince da su da dokokin shekaru na kowane kaya kafin kowane ɗalibi ya yi amfani da shi; ku yi amfani da malami yana nunawa ga yara 'yan ƙasa da shekara 13 inda ake buƙata.",
      "Ku amince da ma'aunin amfani da AI ɗaya a dukan makaranta don ɗalibai su fuskanci dokoki iri ɗaya.",
      "Ku tunatar da ma'aikata su yi maraba da bayyanawa ta gaskiya maimakon hukunta ta.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku duba wasiƙar iyalai don ganin tana da kalmomi masu sauƙi."
    ]
  }
};
