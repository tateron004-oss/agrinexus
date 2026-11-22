"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-youth-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-youth-mentoring-sw",
  lang: "sw",
  translationOf: "underserved-ai-youth-mentoring",
  category: "Undeserved Community",
  name: "AI kwa Ulezi wa Vijana",
  skills: "Kufuata kanuni za usalama katika ulezi wa watoto, Kupanga kikao cha ulezi kwa AI, Kuuliza maswali mazuri na kusikiliza, Kufundisha matumizi ya AI ya uaminifu shuleni, Kuchunguza kazi pamoja, Kufuatilia maendeleo ya kijana",
  outcome: "kupanga na kuongoza kikao salama cha ulezi cha dakika 45 na kijana, ukitumia msaidizi wa AI wa bure kuandaa shughuli na maswali, na kumwonyesha kijana wako jinsi ya kutumia AI kwa uaminifu kwa malengo ya shule na kazi.",
  about: [
    "Vijana katika kila mtaa hufanya vizuri zaidi wanapokuwa na mtu mzima anayewajali upande wao. Kozi hii ni kwa walezi (mentors) wa kujitolea katika makanisa, vituo vya jamii, shule, ligi za michezo na programu za vijana, pamoja na walezi ambao ni wapya kwa teknolojia.",
    "Utajifunza kanuni za usalama zinazowalinda vijana na wewe pia, jinsi ya kupanga kikao kwa msaidizi wa AI wa bure, jinsi ya kuuliza maswali yanayofungua mazungumzo ya kweli, jinsi ya kumsaidia kijana wako kutumia AI kwa uaminifu shuleni, na jinsi ya kuchunguza kazi na kufuatilia maendeleo pamoja.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" inayojenga mpango halisi wa kikao. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Fuata kila wakati sera za programu yako ya ulezi; zinatangulia kitu chochote katika kozi hii."
  ],
  finalTask: "Andika na uongoze (au igiza na mtu mzima mwingine) mpango wa kikao cha ulezi cha dakika 45 uliotengenezwa kwa msaada wa msaidizi wa AI wa bure: lengo, swali la kuanzia, shughuli moja, maswali matatu ya wazi, onyesho fupi la matumizi ya AI ya uaminifu kwa kazi za shule au kazi za baadaye, na maelezo ya maendeleo ya mstari mmoja. Mpango lazima ufuate kanuni za usalama za programu yako na usiwe na taarifa binafsi za kijana.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walezi wa kujitolea katika jamii zisizohudumiwa vya kutosha, katika makanisa, vituo vya jamii, shule, ligi za michezo na programu za vijana, pamoja na walezi ambao ni wapya kwa teknolojia.",
    startingPoint: "Wanawajali vijana na huenda wamelea watoto au kufundisha michezo, lakini hawajafunzwa kuhusu usalama wa ulezi, maswali ya wazi wala kupanga kikao. Wengi wametumia AI kidogo na hawana uhakika jinsi vijana wanavyopaswa kuitumia shuleni.",
    gap: "Vijana hufanya vizuri zaidi wakiwa na mtu mzima anayewajali, lakini walezi wanahitaji tabia salama, mpango kwa kila kikao na njia ya kuongoza matumizi ya AI ya uaminifu kwa shule na kazi. Bila haya, vikao vinapoteza mwelekeo, faragha inawekwa hatarini, na vijana wanaweza kutumia AI vibaya.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 7)",
      "Vifaa: simu janja au kompyuta ya programu",
      "Sera ya programu inatangulia: ukaguzi wa historia, kukutana hadharani, mawasiliano yaliyoidhinishwa na hatua za kuripoti",
      "Faragha: hakuna jina la kijana, shule, picha wala hadithi za binafsi katika AI au katika maelezo yasiyolindwa",
      "Shule na zana za AI zina kanuni zao na mipaka ya umri, zinazokaguliwa na mwalimu na mzazi au mlezi"
    ],
    prerequisites: "Ukaguzi wa historia na mafunzo ya programu yako ya ulezi. Wanafunzi ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Uwezeshaji wa Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kila unapokutana na kijana", action: "kufuata kanuni za usalama za programu yako na hatua za kuchukua kijana akikuambia kuhusu madhara", standard: "ukitaja angalau kanuni tano na hatua za kuripoti bila msaada" },
    { id: "O2", condition: "Ukitumia msaidizi wa AI wa bure", action: "kupanga kikao cha dakika 45 chenye mwanzo, shughuli, mazungumzo na hatua zinazofuata", standard: "ukiipa AI taarifa za jumla tu na kukagua mpango kwa usalama, gharama na kufaa" },
    { id: "O3", condition: "Katika mazungumzo na kijana", action: "kuuliza maswali ya wazi na kurudia ulichosikia kabla ya kutoa ushauri", standard: "ukitumia angalau maswali matatu ya wazi kwa maneno yako mwenyewe" },
    { id: "O4", condition: "Kijana anapotumia AI kwa shule", action: "kuonyesha matumizi ya AI ya uaminifu kueleza, kuuliza maswali ya mazoezi na kutoa maoni, na kukagua majibu yake", standard: "ukifuata kanuni za shule na za zana, na bila kuwasilisha kamwe kazi ya AI" },
    { id: "O5", condition: "Ukijua mambo anayopenda kijana", action: "kuchunguza kazi kwa AI na kukagua moja kwenye bls.gov/ooh", standard: "ukimaliza na hatua moja ndogo inayofuata na tarehe" },
    { id: "O6", condition: "Baada ya kila kikao", action: "kuandika maelezo mafupi ya binafsi ya maendeleo na kusherehekea mafanikio", standard: "ukitumia herufi za kwanza za jina tu na bila kubandika kamwe maelezo katika AI" }
  ],
  chapters: [
    {
      name: "Sura 1: Ulezi salama na imara kwa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kazi ya mlezi na kanuni za usalama",
          minutes: 5,
          goal: "Taja kanuni za usalama utakazofuata kila unapokutana na kijana.",
          text: [
            "Mlezi (mentor) ni mtu mzima anayeaminika anayesikiliza, anayetia moyo na kumsaidia kijana kuweka na kufikia malengo. Wewe si mzazi wake, mwalimu wake wala mtaalamu wa tiba ya akili; wewe ni kiongozi thabiti anayejali.",
            "Programu zinawalinda vijana na walezi kwa kanuni. Kanuni za kawaida: ukaguzi wa historia kabla ya kuanza, kukutana hadharani au mahali palipoidhinishwa, mtu mzima mwingine karibu badala ya kuwa peke yako na kijana, mawasiliano kupitia njia zilizoidhinishwa tu, na kutotoa kamwe usafiri, zawadi au pesa isipokuwa programu yako inaruhusu. Sera ya programu yako ndiyo kanuni ya kufuata.",
            "Kijana akikuambia kwamba anaumizwa au yuko hatarini, tulia, sikiliza, usiahidi kutunza siri, na fuata mara moja hatua za kuripoti za programu yako. Katika dharura piga 911. Namba ya Childhelp National Child Abuse Hotline (simu ya msaada ya Marekani kuhusu unyanyasaji wa watoto) ni (800) 422-4453."
          ],
          steps: ["Kamilisha ukaguzi wa historia na mafunzo ya programu yako.", "Kutana hadharani au mahali palipoidhinishwa tu, mtu mzima mwingine akiwa karibu.", "Tumia njia zilizoidhinishwa tu kuwasiliana na kijana wako.", "Kijana akikuambia kuhusu madhara: sikiliza, usiahidi siri, fuata hatua za kuripoti."],
          words: [["Mlezi (mentor)", "mtu mzima anayeaminika anayemwongoza na kumtia moyo kijana."], ["Kijana unayemlea (mentee)", "kijana anayelelewa na mlezi."], ["Ukaguzi wa historia", "ukaguzi wa kumbukumbu za mtu kabla hajafanya kazi na vijana."]],
          sources: [{ name: "Childhelp National Child Abuse Hotline", url: "https://www.childhelphotline.org/" }, { name: "MENTOR: Elements of Effective Practice for Mentoring", url: "https://www.mentoring.org/resource/elements-of-effective-practice-for-mentoring/" }],
          slides: [
            { title: "Mlezi ni", bullets: ["Mtu mzima anayeaminika na anayejali", "Msikilizaji na mtia moyo", "Si mzazi, mwalimu wala mtaalamu wa tiba ya akili"] },
            { title: "Kanuni za kawaida za usalama", bullets: ["Ukaguzi wa historia kwanza", "Hadharani au mahali palipoidhinishwa, mtu mzima mwingine karibu", "Mawasiliano yaliyoidhinishwa tu; hakuna usafiri wala zawadi bila ruhusa"] },
            { title: "Kijana akisema anaumizwa", bullets: ["Tulia na usikilize", "Usiahidi kutunza siri", "Fuata hatua za kuripoti; dharura: 911"] },
            { title: "Sera ya programu yako inatangulia", bullets: ["Simu ya msaada ya Childhelp: (800) 422-4453"] }
          ],
          tryIt: "Tafuta sera ya ulezi ya programu yako (au muulize mratibu). Andika kanuni tano utakazofuata kila unapokutana na kijana wako.",
          youCanNow: "kueleza kazi ya mlezi na kanuni za usalama unazofuata.",
          quickCheck: [
            { objective: "O1", q: "Kazi ya mlezi ni ipi?", options: ["Kiongozi thabiti anayejali, anayesikiliza na kutia moyo", "Mzazi wa kuchukua nafasi", "Mtaalamu wa tiba ya akili", "Mwalimu anayetoa alama"], answer: 0, why: "Mlezi ni kiongozi mtu mzima anayeaminika, si mzazi, mwalimu wala mtaalamu wa tiba." },
            { objective: "O1", q: "Kijana wako anaomba umpeleke nyumbani kwa gari baada ya kikao. Unafanya nini?", options: ["Mpeleke; ni wema", "Fuata sera ya programu yako kuhusu usafiri", "Mwambie aifanye siri", "Mwache atembee peke yake usiku"], answer: 1, why: "Usitoe kamwe usafiri isipokuwa programu yako inaruhusu; sera ndiyo kanuni." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanga kikao kwa AI",
          minutes: 5,
          goal: "Tumia msaidizi wa AI wa bure kupanga kikao cha dakika 45 chenye lengo wazi.",
          text: [
            "Kikao kizuri kina sehemu nne: mwanzo wa kuchangamsha (dakika 5), shughuli (dakika 20), mazungumzo kuhusu mlichojifunza (dakika 15) na mpango wa wakati ujao (dakika 5).",
            "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kupendekeza shughuli. Mweleze kijana kwa maneno ya jumla tu: kundi la umri, anachopenda na lengo. Mfano: \"Panga kikao cha ulezi cha dakika 45 kwa kijana wa miaka 14 anayependa mpira wa kikapu na anataka kupandisha alama ya hesabu. Weka mwanzo wa kuchangamsha, shughuli ya gharama ndogo na maswali matatu.\"",
            "Usiipe AI kamwe jina la kijana, shule, anwani, picha, matatizo ya familia au chochote alichokuambia kwa siri. Kisha kagua mpango: Je, ni salama, ni bure au wa bei nafuu, na unamfaa kijana huyu?"
          ],
          steps: ["Chagua lengo moja kwa kikao.", "Mweleze kijana kwa maneno ya jumla tu: umri, anachopenda, lengo.", "Iombe AI mwanzo wa kuchangamsha, shughuli na maswali.", "Kagua mpango kwa usalama, gharama na kufaa, na ubadilishe kisichofaa."],
          words: [["Kikao", "mkutano mmoja kati ya mlezi na kijana."], ["Mwanzo wa kuchangamsha", "mwanzo mfupi na rahisi unaowasaidia watu kutulia."]],
          slides: [
            { title: "Kikao cha dakika 45", bullets: ["Mwanzo wa kuchangamsha: dakika 5", "Shughuli: dakika 20", "Mazungumzo: dakika 15; hatua zinazofuata: 5"] },
            { title: "Iulize AI kwa taarifa za jumla", bullets: ["Kundi la umri, anachopenda, lengo", "Omba mwanzo, shughuli, maswali"] },
            { title: "Usiishirikishe AI kamwe", bullets: ["Jina, shule, anwani au picha", "Matatizo ya familia au chochote kilichosemwa kwa siri"] },
            { title: "Kagua mpango", bullets: ["Ni salama?", "Ni bure au wa gharama ndogo?", "Unamfaa kijana huyu?"] }
          ],
          tryIt: "Iombe AI ipange kikao cha dakika 45 kwa kijana unayemlea au ambaye unaweza kumlea, ukitumia taarifa za jumla tu. Badilisha sehemu moja ili ifae zaidi.",
          youCanNow: "kupanga kikao cha ulezi kwa AI huku ukilinda faragha ya kijana.",
          quickCheck: [
            { objective: "O2", q: "Shughuli inachukua muda gani katika mpango wa kikao cha dakika 45?", options: ["Dakika 5", "Dakika 10", "Dakika 20", "Dakika 40"], answer: 2, why: "Mpango ni mwanzo wa dakika 5, shughuli ya dakika 20, mazungumzo ya dakika 15 na hatua zinazofuata za dakika 5." },
            { objective: "O2", q: "AI inapendekeza safari ya kulipia kwenda kwenye bustani ya michezo kwa kikao chako. Unafanya nini?", options: ["Iweke nafasi", "Iombe familia ya kijana ilipe", "Itumie kama ilivyo", "Ibadilishe kuwa shughuli ya bure au ya gharama ndogo inayofaa"], answer: 3, why: "Unakagua mpango wa AI kwa usalama, gharama na kufaa, na kubadilisha kisichofaa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuuliza maswali mazuri na kusikiliza kwa kweli",
          minutes: 5,
          goal: "Andika maswali matatu ya wazi na ujizoeze kusikiliza bila kukimbilia kurekebisha.",
          text: [
            "Maswali yaliyofungwa hupata majibu ya neno moja: \"Shule ilikuwa nzuri?\" \"Ndiyo.\" Maswali ya wazi yanakaribisha jibu la kweli: \"Ni sehemu gani ilikuwa bora zaidi wiki hii?\" \"Ni kitu gani unataka kukifanya vizuri zaidi?\"",
            "Kusikiliza ni muhimu kuliko kuongea. Mtazame, weka simu yako mbali, tikisa kichwa, na rudia ulichosikia: \"Kwa hiyo mtihani wa hesabu ulionekana si wa haki kwa sababu ulisoma sura isiyo sahihi?\" Usikimbilie kurekebisha kila kitu; muulize anafikiri anaweza kujaribu nini.",
            "AI inaweza kupendekeza njia za kuanzisha mazungumzo kwa hali na mapendeleo tofauti. Iombe maswali kumi ya wazi kwa kijana anayependa muziki, kisha chagua matatu yanayosikika zaidi kama wewe."
          ],
          steps: ["Badilisha maswali yaliyofungwa kuwa ya wazi.", "Weka simu yako mbali na umpe usikivu wako wote.", "Rudia ulichosikia.", "Muulize anafikiri anaweza kujaribu nini kabla ya kutoa ushauri."],
          words: [["Swali la wazi", "swali lisiloweza kujibiwa kwa ndiyo au hapana."], ["Kusikiliza kwa makini", "kusikiliza kwa karibu na kurudia ulichosikia."]],
          slides: [
            { title: "Swali lililofungwa na la wazi", bullets: ["Lililofungwa: \"Shule ilikuwa nzuri?\"", "La wazi: \"Ni sehemu gani ilikuwa bora zaidi wiki hii?\""] },
            { title: "Sikiliza kwa kweli", bullets: ["Simu mbali, macho juu", "Tikisa kichwa na urudie", "Uliza anachoweza kujaribu kabla ya kushauri"] },
            { title: "AI kwa njia za kuanzisha mazungumzo", bullets: ["Omba maswali kumi ya wazi", "Chagua matatu yanayosikika kama wewe"] }
          ],
          tryIt: "Iombe AI maswali kumi ya wazi kwa kijana mwenye burudani unayoifahamu. Chagua matatu, na uyaandike upya kwa maneno yako mwenyewe.",
          youCanNow: "kuuliza maswali ya wazi na kusikiliza kwa njia inayowasaidia vijana kuongea.",
          quickCheck: [
            { objective: "O3", q: "Swali la wazi ni lipi?", options: ["Swali linalokaribisha jibu la kweli, si ndiyo au hapana tu", "Swali lenye jibu moja tu sahihi", "Swali kuhusu alama tu", "Swali linaloulizwa kwa sauti kubwa"], answer: 0, why: "Maswali ya wazi yanawakaribisha vijana kushiriki zaidi ya neno moja." },
            { objective: "O3", q: "Kijana wako anasema mazoezi yalikuwa mabaya sana. Unasema nini kwanza?", options: ["\"Acha tu timu.\"", "\"Kwa hiyo mazoezi yalikuwa magumu sana leo. Nini kilitokea?\"", "\"Mimi nimekuwa na siku mbaya zaidi.\"", "\"Tuongee kuhusu jambo jingine.\""], answer: 1, why: "Kurudia ulichosikia na kuuliza zaidi kunaonyesha unasikiliza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Ulezi salama na imara kwa AI",
        questions: [
          { objective: "O1", q: "Ipi ni kanuni ya kawaida ya usalama katika ulezi?", options: ["Kukutana peke yenu ndani ya gari lako", "Kukutana hadharani au mahali palipoidhinishwa, mtu mzima mwingine akiwa karibu", "Kutumiana ujumbe wa siri usiku sana", "Kutoa pesa unapoombwa"], answer: 1, why: "Mahali pa hadhara au palipoidhinishwa, mtu mzima mwingine akiwa karibu, huwalinda wote." },
          { objective: "O1", q: "Kijana wako anakuambia kwamba mtu nyumbani anamuumiza na anakuomba uitunze siri. Wewe:", options: ["Unaahidi kutunza siri", "Unapuuza", "Unasikiliza, huahidi siri, na unafuata hatua za kuripoti za programu yako", "Unaandika kuhusu jambo hilo mtandaoni"], answer: 2, why: "Usalama unatangulia; fuata hatua za kuripoti mara moja." },
          { objective: "O2", q: "Ni taarifa ipi ni sawa kuipa AI unapopanga kikao?", options: ["Jina kamili la kijana", "Shule yake na anwani yake", "Hadithi aliyokuambia kwa siri", "\"Kijana wa miaka 14 anayependa mpira wa kikapu\""], answer: 3, why: "Taarifa za jumla kama umri na anachopenda zinatosha." },
          { objective: "O3", q: "Ipi ni swali la wazi?", options: ["\"Ni kitu gani unataka kukifanya vizuri zaidi?\"", "\"Shule ilikuwa nzuri?\"", "\"Umechoka?\"", "\"Umekula?\""], answer: 0, why: "Haliwezi kujibiwa kwa ndiyo au hapana." },
          { objective: "O3", q: "Kijana wako amehuzunika kuhusu alama. Hatua nzuri ya kwanza ni:", options: ["Kumwambia hasa afanye nini", "Kusikiliza na kurudia ulichosikia", "Kuangalia simu yako", "Kubadilisha mada"], answer: 1, why: "Kusikiliza kwanza kunamsaidia ajisikie amesikilizwa na alifikirie jambo hilo." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwasaidia vijana kutumia AI vizuri",
      lessons: [
        {
          objectives: ["O4"],
          title: "Matumizi ya AI ya uaminifu shuleni",
          minutes: 5,
          goal: "Mwonyeshe kijana jinsi ya kutumia AI kama mwalimu msaidizi, si kumfanyia kazi yake.",
          text: [
            "Wanafunzi wengi tayari wanatumia AI. Shule zina kanuni tofauti: baadhi zinairuhusu kwa kazi fulani, baadhi haziruhusu. Kagua kila wakati kanuni za shule na za mwalimu kwanza. Zana nyingi za AI pia zina kanuni za umri wa chini na huenda zikahitaji ruhusa ya mzazi au mlezi kwa vijana; kagua masharti ya kila zana pamoja na mzazi au mlezi.",
            "Matumizi ya uaminifu yanamaanisha AI inakusaidia kujifunza, si kwamba inakufanyia kazi. Matumizi mazuri: \"Nieleze sehemu (fractions) kama nina miaka 12.\" \"Niulize maswali kuhusu maneno haya ya msamiati.\" \"Nipe maoni kuhusu aya yangu, lakini usiiandike upya.\" Kunakili majibu ya AI na kuyawasilisha kama yako ni udanganyifu.",
            "Wafundishe kuikagua AI pia. Inaweza kukosea. Linganisha na kitabu cha kiada, maelezo ya darasani au mwalimu."
          ],
          steps: ["Kagua kanuni za AI za shule na za mwalimu.", "Kagua kanuni za umri za zana pamoja na mzazi au mlezi.", "Tumia AI kueleza, kuuliza maswali ya mazoezi au kutoa maoni.", "Usiwasilishe kamwe kazi ya AI kama yako.", "Kagua majibu kwa kulinganisha na vifaa vya darasani."],
          words: [["Mwalimu msaidizi", "mtu au kitu kinachokusaidia kujifunza, si kukufanyia kazi."], ["Udanganyifu", "kuwasilisha kazi isiyo yako kana kwamba ni yako."]],
          slides: [
            { title: "Kanuni kwanza", bullets: ["Kanuni za AI za shule na mwalimu", "Mipaka ya umri ya zana na ruhusa ya mzazi"] },
            { title: "AI kama mwalimu msaidizi", bullets: ["\"Nieleze sehemu (fractions) kama nina miaka 12\"", "\"Niulize maswali kuhusu maneno haya\"", "\"Nipe maoni, usiiandike upya\""] },
            { title: "Si sawa", bullets: ["Kunakili majibu ya AI kama yako", "Kuiamini AI bila kukagua"] }
          ],
          tryIt: "Pamoja na kijana wako (au peke yako kwa mazoezi), iombe AI ieleze mada moja ya shule kwa maneno rahisi kisha ikuulize maswali matatu. Kagua jibu moja kwa kulinganisha na kitabu cha kiada au maelezo ya darasani.",
          youCanNow: "kumwonyesha kijana jinsi ya kutumia AI kwa uaminifu kama msaidizi wa kusoma.",
          quickCheck: [
            { objective: "O4", q: "Ipi ni ombi zuri kwa AI kwa ajili ya shule?", options: ["\"Niandikie insha yangu.\"", "\"Nifanyie kazi yangu ya nyumbani ya hesabu.\"", "\"Nipe maoni kuhusu aya yangu, lakini usiiandike upya.\"", "\"Jibu maswali ya mtihani.\""], answer: 2, why: "Kuomba maoni kunamsaidia mwanafunzi kujifunza huku akifanya kazi yake mwenyewe." },
            { objective: "O4", q: "Kijana wako wa miaka 12 anataka kujisajili kwenye zana ya AI. Unafanya nini kwanza?", options: ["Kumsajili kwa barua pepe yako", "Kumwambia adanganye umri wake", "Kuruka kanuni za shule", "Kukagua kanuni za umri za zana pamoja na mzazi au mlezi"], answer: 3, why: "Zana nyingi za AI zina kanuni za umri zinazohitaji ukaguzi wa mzazi au mlezi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuchunguza kazi na malengo pamoja",
          minutes: 5,
          goal: "Tumia AI na tovuti rasmi kuchunguza kazi moja pamoja na kijana wako.",
          text: [
            "Mara nyingi vijana wanazijua tu kazi wanazoziona karibu yao. Kuchunguza kazi kunafungua milango. Anza na anachokipenda: michezo ya video, muziki, michezo, kutengeneza vitu, kusaidia watu, kuchora.",
            "Iulize AI: \"Orodhesha kazi tano kwa kijana anayependa michezo ya video na sanaa. Kwa kila moja, sema kazi hiyo ni nini kwa sentensi moja na nini cha kusomea.\" Kisha tafuteni kazi moja pamoja kwenye Occupational Outlook Handbook katika bls.gov/ooh, mwongozo wa bure wa serikali ya Marekani, kukagua mshahara wake, mafunzo na matarajio ya kazi.",
            "Geuza anachopenda kuwa lengo dogo: kujiunga na klabu, kuchukua darasa la bure katika maktaba, kuongea na mtu anayefanya kazi hiyo, au kujaribu somo la bure mtandaoni."
          ],
          steps: ["Uliza kuhusu anachokipenda.", "Iombe AI kazi tano zinazohusiana.", "Tafuteni moja pamoja kwenye bls.gov/ooh.", "Wekeni hatua moja ndogo inayofuata na tarehe."],
          words: [["Kazi (career)", "aina ya kazi mtu anayoifanya kwa miaka mingi."], ["Matarajio ya kazi", "jinsi kazi inavyotarajiwa kukua kwa kasi."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          slides: [
            { title: "Anza na anachokipenda", bullets: ["Michezo ya video, muziki, michezo", "Kutengeneza vitu, kusaidia watu, sanaa"] },
            { title: "Chunguza kwa AI, kagua kwa chanzo rasmi", bullets: ["Iombe AI kazi tano zinazohusiana", "Kagua moja kwenye bls.gov/ooh: mshahara, mafunzo, matarajio"] },
            { title: "Hatua moja ndogo inayofuata", bullets: ["Jiunge na klabu au darasa la bure", "Ongea na mtu anayefanya kazi hiyo", "Weka tarehe"] }
          ],
          tryIt: "Chagua jambo unalopenda (lako au la kijana wako). Iombe AI kazi tano zinazohusiana, kagua moja kwenye bls.gov/ooh, na uandike hatua moja ndogo inayofuata na tarehe.",
          youCanNow: "kumsaidia kijana kuchunguza kazi na kuweka hatua ndogo halisi inayofuata.",
          quickCheck: [
            { objective: "O5", q: "Occupational Outlook Handbook inaonyesha nini kuhusu kazi?", options: ["Mshahara, mafunzo na matarajio ya kazi", "Nafasi za kazi karibu nawe tu", "Kazi za watu maarufu", "Alama za shule"], answer: 0, why: "Handbook katika bls.gov/ooh inaonyesha mshahara wa kazi, mafunzo na matarajio." },
            { objective: "O5", q: "Kijana wako anapenda kuchora na AI inataja mbunifu wa michoro (graphic designer). Hatua nzuri inayofuata ni ipi?", options: ["Kumwambia si kazi ya kweli", "Kuweka hatua moja ndogo, kama darasa la bure maktabani, na tarehe", "Kumchagulia kazi nyingine", "Kusubiri hadi amalize shule"], answer: 1, why: "Kugeuza anachopenda kuwa hatua ndogo yenye tarehe kunajenga kasi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufuatilia maendeleo na kuunganisha yote",
          minutes: 5,
          goal: "Weka maelezo rahisi ya binafsi ya maendeleo na umalize mpango wako wa kikao.",
          text: [
            "Maelezo mafupi yanakusaidia kukumbuka malengo na kusherehekea mafanikio. Baada ya kila kikao, andika mstari mmoja au miwili: lengo, mlichofanya, mafanikio moja na hatua inayofuata. Tumia majina ya kwanza au herufi za kwanza tu, na weka maelezo mahali ambapo programu yako inasema.",
            "Sherehekea maendeleo, hata hatua ndogo: alama iliyopanda, ombi lililokamilika, kufika kwa wakati. Vijana hukumbuka mtu mzima alipoona juhudi zao.",
            "Usibandike maelezo kuhusu kijana katika AI. Ukitaka msaada, uliza kwa maneno ya jumla: \"Ni njia gani za kufurahisha za kusherehekea kijana aliyepandisha alama?\""
          ],
          steps: ["Baada ya kila kikao, andika lengo, mlichofanya, mafanikio moja na hatua inayofuata.", "Tumia herufi za kwanza tu na uhifadhi maelezo mahali programu yako inaposema.", "Sherehekea mafanikio madogo.", "Iulize AI maswali ya jumla tu, kamwe si kuhusu kijana fulani."],
          words: [["Maelezo ya maendeleo", "kumbukumbu fupi ya kilichotokea na kinachofuata."]],
          slides: [
            { title: "Maelezo rahisi ya maendeleo", bullets: ["Lengo na mlichofanya", "Mafanikio moja na hatua inayofuata", "Herufi za kwanza tu; hifadhi kama programu yako inavyosema"] },
            { title: "Sherehekea mafanikio madogo", bullets: ["Alama iliyopanda", "Ombi lililokamilika", "Kufika kwa wakati"] },
            { title: "Usiweke maelezo katika AI", bullets: ["Uliza maswali ya jumla tu", "Kamwe si kuhusu kijana fulani"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa kikao cha dakika 45 kwa msaada wa AI: lengo, mwanzo wa kuchangamsha, shughuli, maswali matatu ya wazi, onyesho la matumizi ya AI ya uaminifu kwa shule au kazi, na maelezo ya maendeleo ya mstari mmoja. Ukague dhidi ya kanuni za usalama za programu yako, kisha uuongoze au uigize na mtu mzima mwingine.",
          youCanNow: "kupanga, kuongoza na kufuatilia vikao salama vya ulezi vinavyowasaidia vijana kutumia AI vizuri.",
          quickCheck: [
            { objective: "O6", q: "Unapaswa kumtaja kijana wako vipi katika maelezo ya maendeleo?", options: ["Jina kamili na shule", "Jina kamili na anwani", "Herufi za kwanza au jina la kwanza tu", "Namba yake ya simu"], answer: 2, why: "Herufi za kwanza au jina la kwanza tu huweka taarifa za kijana kuwa za faragha." },
            { objective: "O6", q: "Unataka mawazo ya kusherehekea alama bora ya kijana wako. Unaiuliza AI nini?", options: ["Kubandika maelezo yako yote ya kikao", "Kuweka jina lake na shule yake", "Kupakia ripoti yake ya shule", "Kuuliza swali la jumla kuhusu kusherehekea kijana aliyepandisha alama"], answer: 3, why: "Iulize AI maswali ya jumla tu, kamwe si kuhusu kijana fulani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwasaidia vijana kutumia AI vizuri",
        questions: [
          { objective: "O4", q: "Kabla kijana wako hajatumia AI kwa kazi ya nyumbani, kagua:", options: ["Hakuna kitu", "Hali ya hewa tu", "Kanuni za AI za shule na za mwalimu", "Mitandao yake ya kijamii"], answer: 2, why: "Shule zina kanuni tofauti za AI; zikague kwanza." },
          { objective: "O4", q: "Ipi ni matumizi ya AI ya uaminifu shuleni?", options: ["Kunakili insha ya AI", "Kuiacha AI ifanye kazi ya nyumbani ya hesabu", "Kuwasilisha kazi ya AI kama yako", "\"Niulize maswali kuhusu maneno haya ya msamiati\""], answer: 3, why: "Kutumia AI kufanya mazoezi kunakusaidia kujifunza." },
          { objective: "O5", q: "AI inaorodhesha kazi kwa kijana wako. Unakagua mshahara na mafunzo vipi?", options: ["Kutafuta kwenye bls.gov/ooh", "Kuiamini AI", "Kumuuliza mgeni mtandaoni", "Kuruka hatua hiyo"], answer: 0, why: "Occupational Outlook Handbook ndicho chanzo rasmi." },
          { objective: "O6", q: "Ni maelezo yapi ya maendeleo yaliyo bora zaidi?", options: ["Jina kamili, shule na matatizo ya familia", "\"J.: lengo kupandisha alama ya hesabu; tulifanya mazoezi ya sehemu; mafanikio: B kwenye jaribio; ijayo: mpango wa kusoma.\"", "Hakuna kitu kabisa", "Picha iliyowekwa mtandaoni"], answer: 1, why: "Ni mafupi, yanatumia herufi za kwanza na yanaandika lengo, mafanikio na hatua inayofuata." },
          { objective: "O6", q: "Je, unaweza kubandika maelezo yako kuhusu kijana katika AI ili upate ushauri?", options: ["Ndiyo, kila wakati", "Tu kama ni mafupi", "Hapana; uliza maswali ya jumla tu", "Ndiyo, pamoja na picha yake"], answer: 2, why: "Taarifa kuhusu kijana zinabaki kuwa za faragha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Ulezi wa Vijana",
    questions: [
      { objective: "O1", q: "Mlezi anaelezwa vizuri zaidi kama:", options: ["Mtu mzima anayeaminika anayesikiliza na kutia moyo", "Bosi wa kijana", "Mtaalamu wa tiba ya akili", "Mwalimu anayetoa alama"], answer: 0, why: "Walezi ni viongozi wanaojali, si wazazi, walimu wala wataalamu wa tiba." },
      { objective: "O1", q: "Kanuni za nani zinatangulia unapolea kijana?", options: ["Za AI", "Sera ya programu yako ya ulezi", "Za marafiki zako", "Za mitandao ya kijamii"], answer: 1, why: "Fuata kila wakati sera ya programu yako." },
      { objective: "O1", q: "Ni kipi kwa kawaida kinahitajika kabla ya kuwalea vijana?", options: ["Zawadi kwa kijana", "Gari", "Ukaguzi wa historia", "Akaunti ya mitandao ya kijamii"], answer: 2, why: "Programu kwa kawaida zinahitaji ukaguzi wa historia." },
      { objective: "O1", q: "Katika dharura inayohusu usalama wa kijana, wewe:", options: ["Unasubiri hadi wiki ijayo", "Unaandika mtandaoni", "Unaiuliza AI", "Unapiga 911"], answer: 3, why: "Dharura zinahitaji msaada wa haraka." },
      { objective: "O1", q: "Ni namba ipi inafikia Childhelp National Child Abuse Hotline?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "Simu ya msaada ya Childhelp ni (800) 422-4453." },
      { objective: "O2", q: "Kikao kizuri cha ulezi kina:", options: ["Muda wa simu tu", "Mwanzo wa kuchangamsha, shughuli, mazungumzo na hatua zinazofuata", "Hakuna mpango", "Mtihani"], answer: 1, why: "Sehemu hizi nne zinakipa kikao umbo." },
      { objective: "O2", q: "Ni kipi ni salama kuiambia AI unapopanga?", options: ["Anwani ya kijana", "Jina la shule yake", "Kundi la umri, anachopenda na lengo", "Kitu alichokuambia kwa siri"], answer: 2, why: "Taarifa za jumla zinatosha kupanga." },
      { objective: "O2", q: "Baada ya AI kupendekeza mpango wa kikao, unapaswa:", options: ["Kuutumia bila kuusoma", "Kuushiriki kwenye mitandao ya kijamii", "Kuongeza jina la kijana", "Kukagua kwamba ni salama, wa gharama ndogo na unamfaa kijana"], answer: 3, why: "Wewe unamjua kijana; AI haimjui." },
      { objective: "O3", q: "Ipi ni swali lililofungwa?", options: ["\"Shule ilikuwa nzuri?\"", "\"Nini kilikuchekesha wiki hii?\"", "\"Ungebadilisha nini kuhusu siku yako?\"", "\"Unataka kujifunza nini baadaye?\""], answer: 0, why: "Linaweza kujibiwa kwa ndiyo au hapana." },
      { objective: "O3", q: "Kusikiliza kwa makini kunamaanisha:", options: ["Kuangalia simu yako wakati anaongea", "Kusikiliza kwa karibu na kurudia ulichosikia", "Kuongea kuliko yeye", "Kurekebisha kila tatizo mara moja"], answer: 1, why: "Kurudia kunaonyesha umeelewa." },
      { objective: "O3", q: "Kabla ya kutoa ushauri, inasaidia:", options: ["Kumaliza kikao", "Kubadilisha mada", "Kumuuliza anafikiri anaweza kujaribu nini", "Kuiuliza AI kumhusu kwa jina"], answer: 2, why: "Mawazo yake mwenyewe yanajenga kujiamini." },
      { objective: "O3", q: "AI inaweza kumsaidia mlezi kwa nini?", options: ["Kutunza siri", "Kufanya maamuzi ya usalama", "Kuchukua nafasi ya mlezi", "Kupendekeza njia za kuanzisha mazungumzo"], answer: 3, why: "AI inaweza kupendekeza maswali; wewe unachagua na kuongoza." },
      { objective: "O4", q: "Kabla kijana hajajisajili kwenye zana ya AI, kagua:", options: ["Kanuni za umri za zana, pamoja na mzazi au mlezi", "Hakuna kitu", "Rangi tu", "Marafiki wangapi wanaitumia"], answer: 0, why: "Zana nyingi zina mipaka ya umri na zinahitaji ruhusa ya mzazi kwa vijana." },
      { objective: "O4", q: "Kuwasilisha insha ya AI kama yako ni:", options: ["Sawa", "Udanganyifu", "Lazima", "Kusoma"], answer: 1, why: "Kazi lazima iwe yako mwenyewe." },
      { objective: "O4", q: "Ipi ni ombi zuri kwa AI la kusomea?", options: ["\"Niandikie insha\"", "\"Nifanyie kazi zangu zote za nyumbani\"", "\"Nieleze sehemu (fractions) kama nina miaka 12, kisha uniulize maswali\"", "\"Jibu mtihani wangu\""], answer: 2, why: "Linatumia AI kama mwalimu msaidizi." },
      { objective: "O4", q: "AI inampa kijana wako jibu linalopingana na kitabu cha kiada. Anapaswa:", options: ["Kuiamini AI", "Kupuuza vyote viwili", "Kubadilisha kitabu cha kiada", "Kukagua kwa maelezo ya darasani au kwa mwalimu"], answer: 3, why: "AI inaweza kukosea; kagua kwa vifaa vya darasani." },
      { objective: "O5", q: "Njia nzuri ya kuanza kuchunguza kazi ni:", options: ["Kumuuliza kijana anachokipenda", "Kumchagulia kazi", "Kuchagua kazi yenye mshahara mkubwa zaidi tu", "Kuruka hatua hii"], answer: 0, why: "Mambo anayopenda yanaelekeza kwenye kazi atakazozijali." },
      { objective: "O5", q: "Mwongozo rasmi wa bure kuhusu mishahara na mafunzo ya kazi ni:", options: ["Tangazo linalojitokeza ghafla", "Occupational Outlook Handbook katika bls.gov/ooh", "Video ya mitandao ya kijamii", "Ujumbe kutoka kwa mgeni"], answer: 1, why: "Unaendeshwa na U.S. Bureau of Labor Statistics (ofisi ya takwimu za kazi ya Marekani)." },
      { objective: "O6", q: "Maelezo ya maendeleo yanapaswa kutumia:", options: ["Majina kamili na anwani", "Picha", "Herufi za kwanza na lengo, mafanikio na hatua inayofuata", "Siri za familia"], answer: 2, why: "Maelezo mafupi yenye herufi za kwanza hulinda faragha." },
      { objective: "O6", q: "Kwa nini kusherehekea mafanikio madogo?", options: ["Ni lazima kisheria", "Ili kuandika mtandaoni", "Kunachukua nafasi ya malengo", "Vijana hukumbuka mtu mzima alipoona juhudi zao"], answer: 3, why: "Kuona maendeleo kunajenga hamasa na uaminifu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 5, 6, 8, 9, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa kikao", objective: "O2", notYet: "Unakosa lengo, mwanzo wa kuchangamsha au shughuli, au hautoshei dakika 45.", meets: "Lengo, mwanzo wa kuchangamsha, shughuli, mazungumzo na hatua zinazofuata vinavyotoshea dakika 45.", exceeds: "Alibadilisha mpango wa AI ili ufae mambo anayopenda kijana na uwe wa gharama ndogo." },
      { name: "Maswali ya wazi", objective: "O3", notYet: "Chini ya maswali matatu, au maswali ya ndiyo au hapana.", meets: "Maswali matatu ya wazi kwa maneno ya mlezi mwenyewe.", exceeds: "Ina mpango wa kurudia anachosema kijana." },
      { name: "Onyesho la AI ya uaminifu", objective: "O4", notYet: "Katika onyesho AI inafanya kazi, au kanuni za shule zinarukwa.", meets: "Inaonyesha AI ikieleza au ikiuliza maswali ya mazoezi, na kukagua jibu moja kwa vifaa vya darasani.", exceeds: "Pia inahusisha kanuni za umri za zana na kanuni za AI za shule." },
      { name: "Maelezo ya maendeleo", objective: "O6", notYet: "Hakuna maelezo, au yanatumia jina kamili au taarifa binafsi.", meets: "Mstari mmoja wenye herufi za kwanza, lengo, mafanikio na hatua inayofuata.", exceeds: "Inataja mahali maelezo yatakapohifadhiwa kulingana na kanuni za programu." },
      { name: "Usalama na faragha", objective: "O1", notYet: "Mpango unavunja kanuni ya usalama ya programu au una taarifa binafsi za kijana.", meets: "Unafuata kanuni za usalama za programu na hauna taarifa binafsi.", exceeds: "Unaorodhesha hatua za kuripoti ambazo mlezi angefuata kama kijana angesema anaumizwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Walezi wanaoongoza angalau vikao vinne vilivyopangwa ndani ya siku 60 (utafiti wa kufuatilia)",
      "Vijana wanaoweka na kufikia hatua ya shule au ya kazi, kama inavyoripotiwa na programu",
      "Programu zinazoripoti kutokuwa na tukio lolote la usalama au faragha miongoni mwa walezi waliofunzwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta ya programu",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Sera ya ulezi na usalama ya programu",
      "Karatasi kwa mpango wa kikao na maelezo ya maendeleo",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Anza na sera ya usalama ya programu yako na hatua zake za kuripoti; kozi hii haichukui nafasi yake.",
      "Waambie walezi waigize kikao na mtu mzima mwingine, si na kijana, wakati wa mafunzo.",
      "Hakikisha hakuna prompt wala maelezo yenye jina la kijana, shule, picha au hadithi za binafsi.",
      "Shiriki namba za mawasiliano za eneo lako za kuripoti na simu ya msaada ya Childhelp, na uwakumbushe walezi kupiga 911 wakati wa dharura.",
      "Pima kazi ya mwisho kwa rubriki, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
