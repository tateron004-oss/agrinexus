"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/lead-coaching-mentoring.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "lead-coaching-mentoring-ha",
  lang: "ha",
  translationOf: "lead-coaching-mentoring",
  category: "Leadership Development",
  name: "Horarwa (Coaching) da Jagoranci (Mentoring)",
  skills: "Bambance horarwa da jagoranci, Saurara sosai, Yin tambayoyi masu ƙarfi, Gudanar da tattaunawar GROW, Kafa burin ci gaba, Yarjejeniyar jagoranci da bin diddigin ci gaba",
  outcome: "gudanar da tattaunawar horarwa da tsarin GROW ta hanyar saurara sosai da tambayoyi a buɗe, taimaka wa wani ya kafa burin ci gaba a sarari, yarda da yadda dangantakar jagoranci za ta yi aiki, da bin diddigin ci gabansa a tsawon lokaci.",
  about: [
    "Wannan kwas ɗin na duk wanda ke taimaka wa wasu su girma ne: manajoji, shugabannin ƙungiya, malamai, masu horarwa, fastoci da limamai, shugabannin matasa, da ƙwararrun ma'aikata da ke jagorantar sababbi.",
    "Horarwa da jagoranci ƙwarewa ce da za a iya koya ta hanyar aiki. Za ku koyi bambancinsu, yadda ake saurara har mutane su ji an fahimce su, yadda ake yin tambayoyin da ke taimaka wa mutane su yi tunani, yadda ake gudanar da tattaunawa da tsarin GROW, da yadda ake kafa burin ci gaba da bin diddiginsa.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Idan za ku iya, ku nemi abokin atisaye (abokin aiki, aboki ko wani a iyali) don ayyukan \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gudanar da tattaunawar horarwa ta minti 20 da abokin atisaye ta amfani da GROW. Ku fi saurara fiye da magana, kuma ku yi aƙalla tambayoyi biyar a buɗe. Tare, ku rubuta burinsa na ci gaba a sarari kuma mai aunawa, yarjejeniyar jagoranci ta sakin layi ɗaya (sau nawa za ku haɗu, ta yaya, har tsawon wane lokaci, me zai zama sirri), da jadawalin bin diddigi mai sauƙi mai ranakun ganawa uku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin ƙungiya, masu kula da ma'aikata, manajoji, malamai, shugabannin al'umma da na ƙungiyoyin sa-kai, da ƙwararrun ma'aikata da ke son horar da wasu ko jagorantarsu.",
    startingPoint: "Ana yawan neman taimakonsu, kuma yawanci suna amsawa da ba da shawara. Kaɗan ne suka taɓa yin atisayen saurara sosai, tambayoyi a buɗe, tattaunawar horarwa mai tsari ko yarjejeniyar jagoranci a rubuce.",
    gap: "Ba da amsoshi kullum yana sa mutane su dogara ga wasu, kuma yana rasa ainihin abin da suke buƙata. Shugabanni suna buƙatar saurara, yin tambayoyi a buɗe, jagorantar tattaunawa da GROW, taimakawa wajen kafa burin ci gaba a sarari da bin diddigin ci gaba, don mutanen da suke taimakawa su koyi yin tunani da kansu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Lokaci: gajerun darussa, da tattaunawar atisaye ta minti 20",
      "Ana buƙatar abokin atisaye don aikin ƙarshe",
      "Sirri: abin da aka faɗa a horarwa da jagoranci yana zama sirri sai dai idan an yarda da wani abu dabam",
      "Ana faɗin umarnin tsaro kai tsaye, ba ta hanyar horarwa ba"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gudanar da Ƙungiyar Aiki\" zai taimaka a tare da wannan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku yanayin da wani ke buƙatar taimako", action: "zaɓar ko yana buƙatar horarwa, jagoranci ko faɗa masa kai tsaye", standard: "kuna samun aƙalla yanayi 4 cikin 5 daidai" },
    { id: "O2", condition: "A cikin tattaunawa", action: "saurara ba tare da katse magana ba, da taƙaita abin da kuka ji", standard: "har mutumin ya yarda kun fahimta ko ya gyara ku" },
    { id: "O3", condition: "Idan wani ya nemi shawararku", action: "yin tambayoyi a buɗe da ke farawa da \"me\" ko \"ta yaya\" maimakon ba da shawara", standard: "kuna yin aƙalla tambayoyi biyar a buɗe a tattaunawa ɗaya" },
    { id: "O4", condition: "A tattaunawar horarwa ta minti 20", action: "jagorantar tattaunawar ta matakan Goal, Reality, Options da Will", standard: "kuna ƙarewa da mataki na farko, rana, da maki na alƙawari" },
    { id: "O5", condition: "Idan an ba ku burin ƙara wata ƙwarewa", action: "rubuta burin ci gaba a sarari tare da ƙananan matakan koyo", standard: "yana faɗin me, nawa da zuwa yaushe, kuma mutumin ne mai burin" },
    { id: "O6", condition: "Lokacin fara dangantakar jagoranci", action: "rubuta yarjejeniyar jagoranci ta sakin layi ɗaya da jadawalin bin diddigi mai ranakun ganawa uku", standard: "tana ƙunshe da sau nawa, ta yaya, har tsawon wane lokaci da me zai zama sirri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tattaunawar horarwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Horarwa da jagoranci: mene ne bambancinsu?",
          minutes: 4,
          goal: "Zaɓar ko wani yanayi yana buƙatar horarwa, jagoranci ko faɗa kawai.",
          text: [
            "Horarwa (coaching) tana taimaka wa mutum ya sami amsoshinsa da kansa ta hanyar tambayoyi da saurara. Mai horarwa ba sai ya fi sanin aikin ba; wanda ake horarwa ne ke yin yawancin tunanin. Tana aiki sosai idan mutum yana da ƙwarewa ko ilimi amma ya maƙale, ko yana buƙatar ƙara hikimarsa ta yanke shawara.",
            "Jagoranci (mentoring) dangantaka ce mai tsawo inda wanda ya fi ƙwarewa yake raba shawarwari, labarai, sanayya da darussan da ya koya. Sau da yawa mai jagoranci yana aiki a fanni ɗaya. Yana aiki sosai don zaɓin sana'a, koyon \"yadda abubuwa ke tafiya a zahiri\" da gina sanayya.",
            "Wani lokaci babu ɗayansu da ya dace, sai dai ku faɗa kawai. Sabon ma'aikaci da ke shirin yin kuskuren tsaro yana buƙatar umarni, ba tambayoyi ba. Shugabanni nagari suna canjawa tsakanin faɗa, horarwa da jagoranci gwargwadon abin da mutumin ke buƙata."
          ],
          words: [["Horarwa (coaching)", "taimaka wa wani ya sami amsoshinsa da kansa ta hanyar tambayoyi da saurara."], ["Jagoranci (mentoring)", "dangantaka mai tsawo inda wanda ya fi ƙwarewa yake raba shawarwari da darussa."], ["Wanda ake jagoranta (mentee)", "mutumin da ake masa jagoranci."], ["Wanda ake horarwa (coachee)", "mutumin da ake masa horarwa."]],
          slides: [
            { title: "Horarwa", bullets: ["Tambayoyi da saurara", "Mutumin ne ke yin tunani", "Tana da kyau idan ya maƙale ko yana ƙara hikima"] },
            { title: "Jagoranci", bullets: ["Dangantaka mai tsawo", "Ana raba ƙwarewa, shawarwari da sanayya", "Yana da kyau don sana'a da yadda abubuwa ke tafiya"] },
            { title: "Wani lokaci, ku faɗa kawai", bullets: ["Haɗarin tsaro", "Sabon aiki gaba ɗaya", "Ku canja salo don ya dace da buƙata"] }
          ],
          tryIt: "Ku rubuta yanayi uku na gaske daga aikinku ko rayuwarku inda wani ya nemi taimakonku. Ga kowanne, ku rubuta ko horarwa, jagoranci ko faɗa ne zai fi taimakawa, da dalili.",
          youCanNow: "bambance horarwa da jagoranci, da zaɓar hanyar da ta dace da wani yanayi.",
          quickCheck: [
            { objective: "O1", q: "Mene ne jagoranci (mentoring)?", options: ["Umarnin tsaro na sau ɗaya", "Dangantaka mai tsawo inda wanda ya fi ƙwarewa yake raba shawarwari da darussa", "Yin tambayoyin e ko a'a kawai", "Kimanta aikin ma'aikaci"], answer: 1, why: "Jagoranci yana raba ƙwarewa a tsawon lokaci, sau da yawa a fanni ɗaya." },
            { objective: "O1", q: "Wani a ƙungiyarku yana son sanin yadda ake samun ƙarin girma a zahiri a fanninku. Wace hanya ce ta fi dacewa?", options: ["Ku ce ya karanta ƙa'idar shi kaɗai", "Ku horar da shi da tambayoyi kawai", "Ku yi watsi da shi har lokacin kimantawa", "Ku jagorance shi ta hanyar raba ƙwarewarku da sanayyarku"], answer: 3, why: "Jagoranci ya dace da zaɓin sana'a da koyon yadda abubuwa ke tafiya a zahiri." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Saurara har mutane su ji an fahimce su",
          minutes: 5,
          goal: "Saurara sosai, da nuna kun fahimta ta hanyar taƙaitawa.",
          text: [
            "Yawancinmu muna saurara ne yayin da muke shirya abin da za mu faɗa a gaba. A horarwa, wannan yana kawo cikas. Saurara sosai na nufin ba wa ɗayan mutum dukkan hankalinku: waya a ajiye, idanunku a kansa, ba katse magana, kuma ba shiga da naku labarin ba.",
            "Ku nuna kuna saurara. Ku gyaɗa kai, ku ce \"ci gaba\", kuma bayan 'yan mintuna ku taƙaita: \"Abin da nake ji shi ne kuna son jagorantar aikin, amma kuna damuwa cewa ƙungiyar ba za ta bi ku ba. Haka ne?\" Taƙaitawa mai kyau tana bar mutumin ya ji tunaninsa da kansa, kuma ya gyara ku idan kun yi kuskure.",
            "Ku saurari ji da abubuwan da mutum ke darajawa, ba gaskiyar abubuwa kaɗai ba: \"Kamar kun gaji da wannan\" ko \"Kamar adalci yana da muhimmanci sosai a gare ku.\" Ku saba da shiru. Sau da yawa ɗan shiru yana zuwa kafin mafi kyawun ra'ayin mutumin."
          ],
          steps: ["Ku ajiye wayarku ku fuskanci mutumin.", "Kada ku katse magana ko ku shiga da naku labarin.", "Ku ƙarfafa shi: ku gyaɗa kai, ku ce \"ci gaba\".", "Ku taƙaita abin da kuka ji ku tambaya ko daidai ne.", "Ku faɗi ji da kuka lura da shi.", "Ku bar shiru ya kasance."],
          words: [["Saurara mai himma (active listening)", "saurara da dukkan hankali da nuna kun fahimta, misali ta hanyar taƙaitawa."], ["Taƙaitawa", "maimaita manyan abubuwa a takaice da kalmominku."]],
          slides: [
            { title: "Saurara sosai", bullets: ["Waya a ajiye, idanu a kansa", "Ba katse magana", "Ba shiga da naku labarin"] },
            { title: "Ku nuna kuna saurara", bullets: ["Ku gyaɗa kai, ku ce \"ci gaba\"", "Ku taƙaita: \"Abin da nake ji shi ne...\"", "Ku tambaya: \"Haka ne?\""] },
            { title: "Ku saurara zuwa ciki", bullets: ["Ku ji ji da abin da yake darajawa, ba gaskiya kaɗai ba", "Ku bar shiru: ra'ayoyi masu kyau sukan biyo baya"] }
          ],
          tryIt: "Ku nemi abokin atisaye ya yi magana na minti uku game da wani abu da yake son ingantawa. Kada ku ba da shawara. Sannan ku taƙaita abin da kuka ji a jimloli biyu, ku tambaya: \"Na fahimta daidai?\"",
          youCanNow: "saurara da dukkan hankali da taƙaitawa don ɗayan mutum ya ji an fahimce shi.",
          quickCheck: [
            { objective: "O2", q: "Me ke kawo cikas ga saurara sosai?", options: ["Shirya abin da za ku faɗa a gaba", "Gyaɗa kai", "Taƙaitawa", "Barin shiru"], answer: 0, why: "Idan kuna shirya amsarku, ba kwa saurara sosai." },
            { objective: "O2", q: "Yayin da wani ke magana game da matsala, kun tuna wani labari makamancinsa naku. Me za ku yi?", options: ["Ku faɗi labarinku nan take", "Ku katse shi don ba da shawara", "Ku ci gaba da saurara ku taƙaita abin da ya faɗa", "Ku duba wayarku"], answer: 2, why: "Saurara sosai na nufin ba shiga da naku labarin ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin tambayoyi masu ƙarfi",
          minutes: 5,
          goal: "Mayar da shawara zuwa tambayoyi a buɗe da ke taimaka wa mutane su yi tunani da kansu.",
          text: [
            "Tambaya mai ƙarfi a buɗe take (ba za a iya amsa ta da e ko a'a ba), gajeriya ce, kuma game da tunanin ɗayan mutum ce. Sau da yawa tana farawa da \"me\" ko \"ta yaya\": \"Yaya nasara za ta kasance?\" \"Me kuka riga kuka gwada?\" \"Me ke hana ku a zahiri?\"",
            "Ku yi hankali da shawarar da aka ɓoye a cikin tambaya, kamar \"Kun taɓa tunanin kiran ta?\" Wannan ra'ayinku ne, ba nasa ba. Ku kuma yi hankali da tambayoyin \"me yasa\", domin suna iya yin kama da zargi. \"Me ya kai ku ga haka?\" yawanci ya fi laushi fiye da \"Me yasa kuka yi haka?\"",
            "Wata tambaya mai ƙarfi ita ce \"Me kuma?\" Tana taimaka wa mutane su wuce amsarsu ta farko. Ku yi tambaya ɗaya a lokaci ɗaya, sannan ku tsaya ku saurara."
          ],
          steps: ["Ku fara da \"me\" ko \"ta yaya\".", "Ku sa ta gajarta kuma game da tunaninsa.", "Ku guji shawarar da aka ɓoye a cikin tambaya.", "Ku sauya \"me yasa\" zuwa \"me ya kai ku ga...\".", "Ku tambaya \"Me kuma?\"", "Ku yi tambaya ɗaya, sannan ku tsaya ku saurara."],
          words: [["Tambaya a buɗe", "tambayar da ba za a iya amsa ta da e ko a'a kawai ba."], ["Tambaya a rufe", "tambayar da ake amsawa da e, a'a ko wani abu ɗaya kawai."]],
          slides: [
            { title: "Tambayoyi masu ƙarfi suna", bullets: ["A buɗe, gajeru", "Game da tunaninsa", "Sau da yawa suna farawa da \"me\" ko \"ta yaya\""] },
            { title: "Misalai", bullets: ["\"Yaya nasara za ta kasance?\"", "\"Me kuka riga kuka gwada?\"", "\"Me ke hana ku a zahiri?\"", "\"Me kuma?\""] },
            { title: "Ku yi hankali da", bullets: ["Shawarar da aka ɓoye a cikin tambaya", "Tambayoyin \"me yasa\" masu kama da zargi", "Yin tambayoyi biyu a lokaci ɗaya"] }
          ],
          tryIt: "Ku rubuta shawarwari uku da kuke yawan ba mutane. Ku mayar da kowace zuwa tambaya a buɗe. Misali, \"Ya kamata ku tambayi shugabanku\" ta zama \"Wa zai iya taimaka muku da wannan?\"",
          youCanNow: "yin gajerun tambayoyi a buɗe da ke taimaka wa mutane su sami amsoshinsu da kansu.",
          quickCheck: [
            { objective: "O3", q: "Me ke sa tambaya ta zama \"a buɗe\"?", options: ["Tana da tsawo sosai", "Ba za a iya amsa ta da e ko a'a ba", "Tana ɗauke da shawararku", "Tana farawa da \"me yasa\""], answer: 1, why: "Tambayoyi a buɗe suna gayyatar mutum ya yi tunani ya yi bayani." },
            { objective: "O3", q: "Kuna son ba da ra'ayinku, \"Ku yi magana da mai kula da ku.\" Ta yaya za ku mayar da shi tambayar horarwa?", options: ["\"Kun taɓa tunanin yin magana da mai kula da ku?\"", "\"Me yasa ba ku yi magana da mai kula da ku ba?\"", "\"Ya kamata ku yi magana da mai kula da ku.\"", "\"Wa zai iya taimaka muku da wannan?\""], answer: 3, why: "Tambaya a buɗe tana bar shi ya sami ra'ayin da kansa; sauran shawara ne ko zargi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tattaunawar horarwa",
        questions: [
          { objective: "O1", q: "A horarwa, wa ke yin yawancin tunanin?", options: ["Mai horarwa", "Wanda ake horarwa", "Shugaba", "Littafi"], answer: 1, why: "Horarwa tana taimaka wa mutum ya sami amsoshinsa da kansa." },
          { objective: "O1", q: "Sabon ma'aikaci yana shirin amfani da inji ta hanyar da ba ta da aminci. Wace hanya ce ta fi dacewa?", options: ["Doguwar tattaunawar horarwa", "Yarjejeniyar jagoranci", "Ku faɗa masa a sarari yadda zai yi lafiya", "Ku tambaya \"Me kuma?\""], answer: 2, why: "Haɗarin tsaro yana buƙatar umarni a sarari." },
          { objective: "O2", q: "Wace ce taƙaitawa mai kyau yayin saurara?", options: ["\"Ni ma wannan ya taɓa faruwa da ni...\"", "\"Ku bar aikin kawai.\"", "\"Ko ma dai menene, mu ci gaba.\"", "\"Don haka kuna son jagorantar aikin amma kuna damuwa ƙungiyar ba za ta bi ku ba. Haka ne?\""], answer: 3, why: "Tana maimaita manyan abubuwansa kuma tana duba ko kun fahimta." },
          { objective: "O3", q: "Wace ce tambaya a buɗe?", options: ["\"Me kuka riga kuka gwada?\"", "\"Kun kira ta?\"", "\"Yau Talata ce?\"", "\"Kun gama?\""], answer: 0, why: "Ba za a iya amsa ta da e ko a'a ba." },
          { objective: "O3", q: "\"Kun taɓa tunanin kiran ta?\" matsala ce domin:", options: ["Ta yi tsawo sosai", "Shawara ce da aka ɓoye a cikin tambaya", "Ta yi buɗe sosai", "Game da ji take"], answer: 1, why: "Tana kawo ra'ayinku maimakon fito da nasa." }
        ]
      }
    },
    {
      name: "Babi na 2: Ci gaba mai ɗorewa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gudanar da tattaunawa da tsarin GROW",
          minutes: 6,
          goal: "Jagorantar tattaunawar horarwa ta matakan Goal, Reality, Options da Will.",
          text: [
            "GROW taswira ce mai sauƙi, da ake amfani da ita sosai, don tattaunawar horarwa. Sunayen matakan da Turanci suke. G shi ne Goal (buri): me yake so daga wannan tattaunawa da kuma a nan gaba? R shi ne Reality (halin da ake ciki): me ke faruwa yanzu, me ya riga ya gwada? O shi ne Options (zaɓuɓɓuka): me zai iya yi? W shi ne Will (niyya, ko hanyar gaba): me zai yi, kuma yaushe?",
            "Ku ɗauki lokaci a kan Reality kafin ku garzaya zuwa Options. Sau da yawa mutum yana ganin amsar da zarar halin da ake ciki ya fito fili. A Options, ku nemi ra'ayoyi da dama, da \"me kuma?\", kafin a zaɓa. Idan kuna da ra'ayi, kuna iya ba da shi a ƙarshe, a matsayin zaɓi ɗaya cikin da yawa.",
            "Ku ƙare da alƙawari a sarari: \"Mene ne matakinku na farko, kuma yaushe za ku yi shi?\" Ku tambayi yadda ya tabbata daga 1 zuwa 10. Idan ya yi ƙasa, ku tambayi me zai sa ya ƙaru."
          ],
          steps: ["Goal: \"Me kuke so ku samu daga wannan tattaunawa?\"", "Reality: \"Me ke faruwa yanzu? Me kuka gwada?\"", "Options: \"Me za ku iya yi? Me kuma?\"", "Will: \"Me za ku yi, kuma zuwa yaushe?\"", "Duba alƙawari: \"Yaya kuka tabbata, daga 1 zuwa 10?\""],
          words: [["Tsarin GROW", "taswirar horarwa mai matakai huɗu: Goal (buri), Reality (halin da ake ciki), Options (zaɓuɓɓuka), Will (niyya)."], ["Alƙawari", "yin alƙawari a sarari na ɗaukar wani takamaiman mataki zuwa wani lokaci."]],
          slides: [
            { title: "Tsarin GROW", bullets: ["Goal (buri): me kuke so?", "Reality (halin da ake ciki): me ke faruwa yanzu?", "Options (zaɓuɓɓuka): me za ku iya yi?", "Will (niyya): me za ku yi, zuwa yaushe?"] },
            { title: "Ku ɗauki lokaci a kan Reality", bullets: ["Amsar sau da yawa tana bayyana idan komai ya fito fili", "Kada ku garzaya zuwa mafita"] },
            { title: "Zaɓuɓɓuka, sannan alƙawari", bullets: ["Ku nemi ra'ayoyi da dama, da \"me kuma?\"", "Ku ba da ra'ayinku a ƙarshe, a matsayin zaɓi ɗaya", "\"Yaya kuka tabbata, daga 1 zuwa 10?\""] }
          ],
          tryIt: "Ku rubuta tambayar GROW ɗaya ga kowane mataki a kan kati. Tare da abokin atisaye, ku yi tattaunawar GROW ta minti 15 game da abin da yake son ingantawa. Ku ƙare da matakinsa na farko da rana.",
          youCanNow: "jagorantar tattaunawar horarwa daga buri zuwa mataki na gaba a sarari da aka yi alƙawari a kai, ta amfani da GROW.",
          quickCheck: [
            { objective: "O4", q: "A GROW, me harafin O yake nufi?", options: ["Options (zaɓuɓɓuka)", "Outcome (sakamako)", "Order (umarni)", "Opinion (ra'ayi)"], answer: 0, why: "GROW shi ne Goal, Reality, Options, Will." },
            { objective: "O4", q: "Bayan minti goma, mutumin ya faɗi zaɓi ɗaya kawai. Me za ku tambaya?", options: ["\"Wannan ce amsarku ta ƙarshe?\"", "\"Ga abin da ni zan yi.\"", "\"Me kuma?\"", "\"Me yasa ɗaya kawai?\""], answer: 2, why: "\"Me kuma?\" tana taimaka wa mutane su wuce amsarsu ta farko." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kafa burin ci gaba",
          minutes: 5,
          goal: "Taimaka wa wani ya mayar da fata zuwa burin ci gaba a sarari kuma mai aunawa.",
          text: [
            "Burin ci gaba game da ƙara wata ƙwarewa ne, ba gama wani aiki kawai ba. \"Ƙware a magana\" fata ne. Buri a sarari yana faɗin me, nawa da zuwa yaushe: \"Jagorantar taron ƙungiya na ranar Litinin ni kaɗai, makonni uku a jere, kafin ƙarshen Maris.\"",
            "Mutane da yawa suna amfani da SMART don duba buri: Specific (takamaimai), Measurable (mai aunawa), Achievable (mai yiwuwa), Relevant (mai dacewa) da Time-bound (mai ƙayyadadden lokaci). Mutumin ne ya kamata ya mallaki burin. Ku tambayi abin da yake son ƙarawa, da dalilin da yasa yake da muhimmanci a gare shi, kafin ku ƙara abin da aikin ke buƙata.",
            "Ku raba burin zuwa ƙananan matakan koyo: abin da za a karanta ko a kalla, wanda za a kalli yana aiki ko a bi shi (shadowing), damar yin atisaye, da wanda zai ba da ra'ayi (feedback). Yawancin ci gaba yana zuwa daga aikatawa, ba daga kwasa-kwasai kaɗai ba."
          ],
          steps: ["Ku tambayi abin da yake son ƙarawa da dalilin da yasa yake da muhimmanci.", "Ku rubuta shi a matsayin me, nawa, zuwa yaushe.", "Ku duba shi da SMART.", "Ku jera matakan koyo: karatu, kallon wani, atisaye, samun ra'ayi.", "Ku yarda kan mataki na farko."],
          words: [["Burin ci gaba", "burin ƙara wata ƙwarewa ko iyawa."], ["SMART", "duba buri: Specific (takamaimai), Measurable (mai aunawa), Achievable (mai yiwuwa), Relevant (mai dacewa), Time-bound (mai ƙayyadadden lokaci)."], ["Shadowing (bin wani)", "koyo ta hanyar kallon wani yana yin aikin."]],
          slides: [
            { title: "Fata da buri", bullets: ["Fata: \"Ƙware a magana\"", "Buri: \"Jagorantar taron Litinin ni kaɗai, makonni 3 a jere, kafin ƙarshen Maris\""] },
            { title: "Ku duba shi da SMART", bullets: ["Specific da Measurable (takamaimai, mai aunawa)", "Achievable da Relevant (mai yiwuwa, mai dacewa)", "Time-bound (mai ƙayyadadden lokaci)"] },
            { title: "Burinsa, dalilansa", bullets: ["Ku tambayi abin da yake son ƙarawa", "Ku tambayi dalilin da yasa yake da muhimmanci a gare shi"] },
            { title: "Matakan koyo", bullets: ["Karatu ko kallo", "Bin wani yana aiki", "Atisaye", "Samun ra'ayi (feedback)"] }
          ],
          tryIt: "Tare da abokin atisaye, ku mayar da fata ɗaya zuwa burin ci gaba na SMART. Sannan ku jera matakan koyo uku, ciki har da aƙalla damar yin atisaye ɗaya.",
          youCanNow: "taimaka wa wani ya rubuta burin ci gaba a sarari da matakan koyo don cimma shi.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne fata maimakon burin ci gaba a sarari?", options: ["\"Gabatar da rahoton wata ni kaɗai a taruka biyu kafin Yuni\"", "\"Ƙware a magana\"", "\"Gudanar da bayanin tsaro guda uku ni kaɗai kafin ƙarshen kwata\"", "\"Horar da sababbin ma'aikata biyu a kan injin karɓar kuɗi kafin 1 ga Mayu\""], answer: 1, why: "Buri a sarari yana faɗin me, nawa da zuwa yaushe; fata ba ya faɗi." },
            { objective: "O5", q: "Wanda kuke jagoranta yana son ƙware a hulɗa da abokan ciniki masu fushi. Wane matakin koyo za ku fara ƙarawa?", options: ["Doguwar kwas ta intanet kawai", "Babu komai har shekara mai zuwa", "Ya bi ƙwararren abokin aiki yana aiki, sannan ya yi atisaye tare da samun ra'ayi", "Karanta tarihin kamfanin"], answer: 2, why: "Yawancin ci gaba yana zuwa daga aikatawa da atisaye tare da samun ra'ayi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yarjejeniyar jagoranci da bin diddigin ci gaba",
          minutes: 5,
          goal: "Rubuta yarjejeniyar jagoranci mai sauƙi da jadawalin bin diddigin ci gaban wani.",
          text: [
            "Dangantakar jagoranci tana aiki mafi kyau idan akwai gajeriyar yarjejeniya a farko. Ku yarda kan manufa, sau nawa za ku haɗu (misali sau ɗaya a wata har tsawon watanni shida), ta yaya (ido da ido, ta waya ko bidiyo), me zai zama sirri, wa ke tsara abin da za a tattauna (yawanci wanda ake jagoranta), da yadda kowanne zai iya kawo ƙarshensa cikin ladabi.",
            "Ku bi diddigin ci gaba don ku duka ku ga ana samun ci gaba. Jadawalin bin diddigi mai sauƙi zai iya zama takarda ko spreadsheet (teburin lissafi) da ake rabawa, mai burin, matakan koyo, ranakun ganawa, abin da aka gwada, abin da aka koya, da mataki na gaba. Ku yi murna da ci gaba, ko da ƙananan matakai ne.",
            "A kowace ganawa, ku sake duba burin, ku tambayi me ya tafi daidai da me ya yi wuya, ku yarda kan mataki na gaba. A ƙarshe, ku duba tare abin da ya canja, ku yi magana game da abin da ke tafe: sabon buri, sabon mai jagoranci, ko shi kansa ya zama mai jagorantar wasu."
          ],
          steps: ["Ku yarda kan manufa, sau nawa, ta yaya, da har tsawon wane lokaci.", "Ku yarda kan abin da zai zama sirri da wa ke tsara abin da za a tattauna.", "Ku yarda kan yadda kowanne zai iya kawo ƙarshensa cikin ladabi.", "Ku shirya jadawalin bin diddigi: buri, matakai, ranaku, abin da aka koya, mataki na gaba.", "A kowace ganawa: sake dubawa, tunani, mataki na gaba.", "A ƙarshe, ku duba abin da ya canja da abin da ke tafe."],
          words: [["Yarjejeniyar jagoranci", "gajeriyar fahimta a rubuce game da yadda dangantakar jagoranci za ta yi aiki."], ["Jadawalin bin diddigi (tracker)", "rikodi mai sauƙi na ci gaba zuwa ga buri, tare da ranaku."], ["Ganawa (check-in)", "taron da aka shirya don duba ci gaba."]],
          slides: [
            { title: "Yarjejeniyar jagoranci", bullets: ["Manufa, sau nawa, ta yaya, har yaushe", "Abin da zai zama sirri", "Wanda ake jagoranta ne yawanci ke tsara abin tattaunawa", "Yadda za a ƙare cikin ladabi"] },
            { title: "Jadawalin bin diddigi mai sauƙi", bullets: ["Buri da matakan koyo", "Ranakun ganawa", "Abin da aka gwada da aka koya, mataki na gaba"] },
            { title: "Kowace ganawa", bullets: ["Ku sake duba burin", "Me ya tafi daidai? Me ya yi wuya?", "Ku yarda kan mataki na gaba; ku yi murna da ci gaba"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi tattaunawar GROW ta minti 20 da abokin atisaye. Sannan ku rubuta tare burinsa na ci gaba na SMART, yarjejeniyar jagoranci ta sakin layi ɗaya, da jadawalin bin diddigi mai ranakun ganawa uku.",
          youCanNow: "kafa dangantakar jagoranci da yarjejeniya a sarari, da bin diddigin ci gaban wani a tsawon lokaci.",
          quickCheck: [
            { objective: "O6", q: "Wa ke yawan tsara abin da za a tattauna a taron jagoranci?", options: ["Manajan mai jagoranci", "Mai jagoranci", "Sashen kula da ma'aikata", "Wanda ake jagoranta"], answer: 3, why: "Wanda ake jagoranta ne yawanci ke tsarawa, domin ci gabansa ne." },
            { objective: "O6", q: "A wata ganawa, wanda kuke jagoranta ya ɗan ci gaba kaɗan. Me za ku yi?", options: ["Ku yi murna da shi ku yarda kan mataki na gaba", "Ku ce bai isa ba", "Ku tsallaka zuwa sabon buri", "Ku soke ganawa ta gaba"], answer: 0, why: "Murna da ƙaramin ci gaba yana ƙarfafa mutane." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ci gaba mai ɗorewa",
        questions: [
          { objective: "O4", q: "Me harafin R a GROW yake nufi?", options: ["Results (sakamako)", "Rules (ƙa'idoji)", "Reward (lada)", "Reality (halin da ake ciki)"], answer: 3, why: "Reality: abin da ke faruwa yanzu." },
          { objective: "O4", q: "Yaushe ya kamata ku ba da ra'ayinku a matakin Options?", options: ["Da farko, don kada ya ɓata lokaci", "A ƙarshe, a matsayin zaɓi ɗaya cikin da yawa", "Ba a taɓa ba, ko kaɗan", "A rubuce kawai"], answer: 1, why: "Ba da shi a ƙarshe yana sa tunaninsa ya zo da farko." },
          { objective: "O5", q: "Wanne ne burin ci gaba a sarari?", options: ["\"Zama shugaba nagari\"", "\"Ƙara ƙoƙari\"", "\"Jagorantar taron Litinin ni kaɗai makonni uku a jere kafin ƙarshen Maris\"", "\"Koyon abubuwa\""], answer: 2, why: "Yana faɗin me, nawa da zuwa yaushe." },
          { objective: "O6", q: "Wa ke yawan tsara abin da za a tattauna a taron jagoranci?", options: ["Wanda ake jagoranta", "Shugaban mai jagoranci", "Sashen kula da ma'aikata (HR)", "Babu kowa"], answer: 0, why: "Dangantakar don ci gaban wanda ake jagoranta ne." },
          { objective: "O6", q: "Me jadawalin bin diddigin ci gaba mai sauƙi ke ƙunshe da shi?", options: ["Ra'ayoyin mai jagoranci kawai", "Kalmomin sirri", "Babu abin da aka rubuta", "Burin, matakai, ranakun ganawa, abin da aka koya da mataki na gaba"], answer: 3, why: "Waɗannan suna bar mutanen biyu su ga ci gaba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Horarwa (Coaching) da Jagoranci (Mentoring)",
    questions: [
      { objective: "O1", q: "Horarwa galibi game da:", options: ["Faɗa wa mutane abin da za su yi", "Taimaka wa mutane su sami amsoshinsu ta hanyar tambayoyi da saurara", "Raba kyaututtuka", "Duba halartar aiki"], answer: 1, why: "Wanda ake horarwa ne ke yin tunanin." },
      { objective: "O1", q: "Jagoranci yawanci:", options: ["Umarni na sau ɗaya ne", "Jarabawa ce", "Dangantaka ce mai tsawo inda ake raba ƙwarewa", "Hukunci ne"], answer: 2, why: "Masu jagoranci suna raba ƙwarewa a tsawon lokaci." },
      { objective: "O1", q: "Ƙwararren ma'aikaci ya maƙale wajen zaɓi tsakanin hanyoyi biyu masu kyau. Me ya fi dacewa?", options: ["Horarwa", "Faɗa masa amsar", "Yin watsi da shi", "Gargaɗi a rubuce"], answer: 0, why: "Yana da ƙwarewar; horarwa tana taimaka masa ya yi amfani da hikimarsa." },
      { objective: "O2", q: "Saurara sosai na nufin:", options: ["Duba wayarku yayin da yake magana", "Shirya amsarku", "Faɗin naku labarin nan take", "Ba da dukkan hankalinku, ba tare da katse magana ba"], answer: 3, why: "Hankali ba tare da katse magana ba yana taimaka wa mutane su yi tunani." },
      { objective: "O2", q: "Me yasa za ku taƙaita abin da kuka ji?", options: ["Don a kawo ƙarshen tattaunawa", "Don ya ji tunaninsa kuma ya iya gyara ku", "Don nuna kun fi shi wayo", "Don canja maganar"], answer: 1, why: "Taƙaitawa tana duba fahimta kuma tana taimakawa wajen tunani." },
      { objective: "O2", q: "Mutumin ya yi shiru bayan wata tambaya. Ya kamata ku:", options: ["Cike shirun da shawara", "Yi ƙarin tambayoyi uku", "Bar shirun ya kasance; ra'ayi mai kyau sau da yawa yana biyo baya", "Kawo ƙarshen taron"], answer: 2, why: "Shiru yana ba mutane damar yin tunani." },
      { objective: "O3", q: "Wace ce tambayar horarwa mafi ƙarfi?", options: ["\"Kun yi shi?\"", "\"Ai wannan a fili yake, ko?\"", "\"Me yasa za ku yi haka?\"", "\"Me ke hana ku a zahiri?\""], answer: 3, why: "A buɗe take kuma tana kaiwa ga ainihin matsalar." },
      { objective: "O3", q: "Hanya mafi laushi ta tambayar \"Me yasa kuka yi haka?\" ita ce:", options: ["\"Me ya kai ku ga haka?\"", "\"Wa ya ce ku yi haka?\"", "\"Da gaske kuke?\"", "\"Ba ku san abin da ya fi ba?\""], answer: 0, why: "Tana bincika tunani ba tare da kama da zargi ba." },
      { objective: "O3", q: "Tambayar \"Me kuma?\" tana taimaka wa mutane su:", options: ["Daina magana", "Wuce amsarsu ta farko", "Yarda da ku", "Ji kamar ana zarginsu"], answer: 1, why: "Amsoshin farko ba safai ne su kaɗai ba." },
      { objective: "O4", q: "GROW yana nufin:", options: ["Grade, Review, Order, Wait", "Give, Rest, Own, Win", "Goal, Reality, Options, Will", "Growth, Rules, Outcome, Work"], answer: 2, why: "Goal, Reality, Options, Will (buri, halin da ake ciki, zaɓuɓɓuka, niyya ko hanyar gaba)." },
      { objective: "O4", q: "Wace tambayar GROW ce ta matakin Will?", options: ["\"Me za ku yi, kuma zuwa yaushe?\"", "\"Me ke faruwa yanzu?\"", "\"Me kuke so daga wannan tattaunawa?\"", "\"Me za ku iya yi?\""], answer: 0, why: "Will game da alƙawarin ɗaukar mataki ne." },
      { objective: "O4", q: "Wani ya ba alƙawarinsa maki 4 cikin 10. Kuna tambaya:", options: ["\"Me yasa ya yi ƙasa haka?\"", "Babu komai", "\"Ku yi shi kawai duk da haka.\"", "\"Me zai sa ya ƙaru?\""], answer: 3, why: "Yana taimaka masa ya kawar da abin da ke riƙe shi." },
      { objective: "O4", q: "Me yasa za a ɗauki lokaci a kan Reality kafin Options?", options: ["Yana cike lokaci", "Amsar sau da yawa tana bayyana idan halin da ake ciki ya fito fili", "Zaɓuɓɓuka ba su da amfani ko kaɗan", "Don a nemo wanda za a zarga"], answer: 1, why: "Fahimtar halin yanzu tana kawo zaɓuɓɓuka mafi kyau." },
      { objective: "O5", q: "SMART yana nufin:", options: ["Simple, Modern, Active, Ready, True", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strong, Many, Able, Real, Total", "Short, Main, All, Right, Today"], answer: 1, why: "Waɗannan dubawa biyar suna sa buri ya fito a sarari." },
      { objective: "O5", q: "Wa ya kamata ya mallaki burin ci gaba?", options: ["Mutumin da ke girma", "Manaja kaɗai", "Lauyan kamfani", "Babu kowa"], answer: 0, why: "Mutane suna riƙe alƙawari ga burin da suka mallaka." },
      { objective: "O5", q: "Daga ina yawancin ci gaba yake zuwa?", options: ["Karatu kaɗai", "Takardun shaida kaɗai", "Aikatawa da atisaye, tare da samun ra'ayi", "Jira"], answer: 2, why: "Atisaye tare da samun ra'ayi yana gina ƙwarewa." },
      { objective: "O6", q: "Yarjejeniyar jagoranci ya kamata ta ƙunshi:", options: ["Albashin mai jagoranci", "Sau nawa za ku haɗu, me zai zama sirri da yadda za a ƙare cikin ladabi", "Ranar farawa kaɗai", "Jerin kurakuran wanda ake jagoranta"], answer: 1, why: "Sharuɗɗa a sarari suna hana ruɗani daga baya." },
      { objective: "O6", q: "A kowace ganawar jagoranci, ya kamata ku:", options: ["Fara sabon buri kowane lokaci", "Yi magana game da kanku kaɗai", "Soke ta idan abubuwa suna tafiya daidai", "Sake duba burin, ku yi tunani, ku yarda kan mataki na gaba"], answer: 3, why: "Dubawa a kai a kai tana sa ci gaba ya kasance kan hanya." },
      { objective: "O6", q: "Me yasa za a yi murna da ƙaramin ci gaba?", options: ["Yana ƙarfafa mutane", "Yana maye gurbin burin", "Doka ta wajabta shi", "Yana kawo ƙarshen dangantakar"], answer: 0, why: "Ganin ci gaba yana sa mutane su ci gaba." },
      { objective: "O6", q: "A ƙarshen dangantakar jagoranci, mataki mai kyau shi ne:", options: ["Daina magana", "Ɓoye jadawalin bin diddigi", "Duba abin da ya canja da yin magana game da abin da ke tafe", "Sake farawa daga farko"], answer: 2, why: "Dubawa tana rufe abu da kyau kuma tana nuna matakin ci gaba na gaba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 2, 3, 6, 9, 10, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Saurara",
        objective: "O2",
        notYet: "Ya fi abokin atisaye magana, ko ya yawaita katse magana.",
        meets: "Ya fi saurara fiye da magana, kuma ya taƙaita aƙalla sau ɗaya.",
        exceeds: "Ya faɗi wani ji ko abin da abokin yake darajawa da ya ji, kuma abokin ya yarda."
      },
      {
        name: "Tambayoyi a buɗe",
        objective: "O3",
        notYet: "Tambayoyi a buɗe ƙasa da biyar, ko yawanci shawara.",
        meets: "Aƙalla tambayoyi biyar a buɗe, ɗaya bayan ɗaya.",
        exceeds: "Ya yi amfani da \"Me kuma?\" kuma ya guji tambayoyin \"me yasa\" masu zargi."
      },
      {
        name: "Tattaunawar GROW",
        objective: "O4",
        notYet: "Ya tsallake wani mataki ko ya garzaya kai tsaye zuwa shawara.",
        meets: "Ya bi Goal, Reality, Options da Will, kuma ya ƙare da mataki na farko da rana.",
        exceeds: "Ya nemi maki na alƙawari daga 1 zuwa 10 da abin da zai sa ya ƙaru."
      },
      {
        name: "Burin ci gaba",
        objective: "O5",
        notYet: "Burin fata ne, kamar \"ƙware a magana\".",
        meets: "Buri a sarari da ke faɗin me, nawa da zuwa yaushe, kuma abokin atisaye ne ya mallake shi.",
        exceeds: "An raba shi zuwa ƙananan matakan koyo tare da atisaye da samun ra'ayi."
      },
      {
        name: "Yarjejeniya da jadawalin bin diddigi",
        objective: "O6",
        notYet: "Babu yarjejeniya ko jadawalin bin diddigi.",
        meets: "Yarjejeniya ta sakin layi ɗaya (sau nawa, ta yaya, har yaushe, me zai zama sirri) da jadawalin bin diddigi mai ranakun ganawa uku.",
        exceeds: "Tana kuma faɗin yadda kowanne zai iya kawo ƙarshenta cikin ladabi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka fara dangantakar horarwa ko jagoranci cikin kwanaki 30 (binciken biyo baya)",
      "Waɗanda ake jagoranta da suka cimma burinsu na ci gaba a ranar da aka ƙayyade",
      "Masu koyo da suka ɗauki wani kwas na shugabanci na Koach Learn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don kallon darussan",
      "Abokin atisaye don tattaunawar minti 20",
      "Takarda ko takardar da ake rabawa a intanet don buri, yarjejeniya da jadawalin bin diddigi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bibbiyu don atisayen GROW; su musanya matsayin mai horarwa da wanda ake horarwa.",
      "Ku sa mutum na uku ya zama mai kallo da ke ƙirga tambayoyi a buɗe da taƙaitawa.",
      "Ku nemi abokan atisaye su yi amfani da buri na gaske amma maras haɗari, kuma su ajiye abin da aka faɗa a sirri.",
      "Ku tunatar da masu koyo cewa kurakuran tsaro suna buƙatar faɗa kai tsaye, ba horarwa ba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
