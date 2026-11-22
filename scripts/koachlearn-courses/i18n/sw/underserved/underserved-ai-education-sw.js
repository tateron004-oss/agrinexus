"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-education.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-education-sw",
  lang: "sw",
  translationOf: "underserved-ai-education",
  category: "Undeserved Community",
  name: "AI kwa Elimu na Kujifunza",
  skills: "Kutumia AI kama mwalimu mvumilivu, Kutengeneza maswali ya mazoezi, Kupata tovuti za bure za kujifunzia, Kupanga ratiba ya kusoma, Kumsaidia mtoto kujifunza bila kumfanyia kazi",
  outcome: "kutumia msaidizi wa AI wa bure na tovuti ya bure ya kujifunzia kujifunza jambo jipya: kuelezwa wazo gumu, kufanya mazoezi kwa maswali yaliyotengenezwa na AI, na kufuata ratiba rahisi ya kusoma ya wiki mbili uliyojiandalia mwenyewe.",
  about: [
    "Hujachelewa kamwe kujifunza. Huenda unataka kumaliza diploma, kuboresha Kiingereza chako, kujifunza ujuzi wa kazi, au kuendana na kazi za nyumbani za mtoto wako. Zana za AI za bure zinaweza kuwa mwalimu mvumilivu asiyechoka na maswali yako.",
    "Utajifunza kuiomba AI ikueleze mambo kwa kiwango chako, ikutengenezee maswali ya mazoezi, kupata tovuti za bure za kujifunzia, kupanga ratiba ya kusoma inayofaa maisha yenye shughuli nyingi, na kumsaidia mtoto kujifunza bila AI kumfanyia kazi za nyumbani.",
    "Kila somo linachukua kama dakika tano, na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa mwishoni mwa kila sura, na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Chagua jambo moja unalotaka kujifunza. Andaa ratiba ya kusoma ya wiki mbili pamoja na msaidizi wa AI, inayotumia tovuti moja ya bure ya kujifunzia (kama Khan Academy au LearnFree) kwa dakika 20 kwa siku. Kisha iombe AI maswali matano ya mazoezi kuhusu mada ya kwanza, uyajibu mwenyewe, na ukague majibu yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika jamii zisizohudumiwa vya kutosha wanaotaka kujifunza jambo jipya: watu wanaomalizia diploma, wanaoboresha Kiingereza, wanaojifunza ujuzi wa kazi, au wanaowasaidia watoto wao na kazi za nyumbani. Wengi wanafanya kazi, wanalea watoto au wanatunza familia.",
    startingPoint: "Wanaweza kutumia simu na intaneti kidogo. Baadhi walipata wakati mgumu shuleni au waliacha shule mapema, na wachache wametumia msaidizi wa AI au tovuti ya bure ya kujifunzia kusoma.",
    gap: "Zana za AI za bure na tovuti za kujifunzia zinaweza kuwa kama mwalimu mvumilivu, lakini wanafunzi hawajui jinsi ya kuomba maelezo kwa kiwango chao, kufanya mazoezi badala ya kusoma tena tu, au kupanga ratiba ya kusoma inayofaa maisha yenye shughuli nyingi. Bila hili, wengi wanaacha malengo ya kujifunza ambayo yangesaidia kazi zao na familia zao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja au kompyuta ya maktaba",
      "Muda: kusoma kwa muda mfupi kila siku, mara nyingi dakika 20 au chini",
      "AI inaweza kukosea katika hesabu na ukweli; wanafunzi wanakagua hatua na vyanzo vinavyoaminika",
      "Shule zina sheria zao kuhusu AI, na zana nyingi za AI zina kikomo cha umri kwa watoto"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Uwezeshaji wa Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wazo unaloona ni gumu", action: "kuomba msaidizi wa AI akueleze kwa kiwango chako kwa mfano wa maisha ya kila siku, na kusema sehemu ipi bado inakuchanganya", standard: "hadi uweze kulieleza tena kwa maneno yako mwenyewe" },
    { id: "O2", condition: "Baada ya kujifunza wazo", action: "kuomba msaidizi wa AI maswali ya mazoezi moja baada ya jingine, kuyajibu mwenyewe na kukagua majibu", standard: "ukijibu kabla ya kuangalia na ukikagua jibu lolote linaloonekana si sahihi" },
    { id: "O3", condition: "Ukipewa ujuzi unaotaka kujifunza", action: "kupata kozi ya bure kwenye tovuti ya kujifunzia au kwenye maktaba yako", standard: "ukifungua somo lake la kwanza" },
    { id: "O4", condition: "Ukizingatia muda halisi ulio nao kila wiki", action: "kuandaa ratiba ya kusoma ya wiki mbili pamoja na msaidizi wa AI ukitumia tovuti moja ya bure ya kujifunzia", standard: "yenye mada moja ndogo kwa siku, siku za kupumzika, na ratiba ikiwekwa mahali utakapoiona" },
    { id: "O5", condition: "Ukipewa mada ya kazi ya nyumbani ya mtoto", action: "kutumia msaidizi wa AI akueleze wazo ili uweze kulifundisha, bila kumpa mtoto majibu", standard: "ukifuata sheria za shule kuhusu AI" },
    { id: "O6", condition: "Mwishoni mwa wiki ya kusoma", action: "kukagua maendeleo yako kwa jaribio fupi na kurekebisha ratiba yako", standard: "ukirudia kila mada uliyokosea" }
  ],
  chapters: [
    {
      name: "Sura 1: AI kama mwalimu wako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuelezwa wazo gumu kwa kiwango chako",
          minutes: 5,
          goal: "Omba msaidizi wa AI akueleze wazo gumu kwa njia unayoielewa.",
          text: [
            "Mwalimu binafsi (tutor) ni mtu anayekueleza mambo wewe peke yako. Msaidizi wa AI wa bure anaweza kuwa kama mwalimu binafsi mvumilivu. Unaweza kuuliza swali lile lile mara nyingi, na hakuhukumu.",
            "Mwambie kiwango chako: \"Nieleze sehemu (fractions) kama mtu anayeanza tu\" au \"Nieleze kwa mfano wa kupika.\" Mifano ya kila siku kutoka maisha yako inasaidia mawazo kukaa akilini.",
            "Kama bado inakuchanganya, sema sehemu ambayo huielewi: \"Naelewa sehemu ya kwanza, lakini sielewi kwa nini tunageuza sehemu ya pili.\""
          ],
          steps: ["Taja wazo unalotaka kujifunza.", "Iambie AI kiwango chako na uombe mfano wa kila siku.", "Soma jibu polepole.", "Sema hasa sehemu ipi bado inakuchanganya na uulize tena."],
          words: [["Mwalimu binafsi (tutor)", "mwalimu anayemsaidia mtu mmoja kwa wakati."], ["Mfano", "jambo la maisha halisi linaloonyesha jinsi wazo linavyofanya kazi."]],
          slides: [
            { title: "AI inaweza kuwa mwalimu mvumilivu", bullets: ["Uliza mara nyingi kadiri unavyohitaji", "Haikuhukumu"] },
            { title: "Iambie kiwango chako", bullets: ["\"Nieleze kama mtu anayeanza tu\"", "\"Tumia mfano wa kupika au wa kazini\""] },
            { title: "Bado umechanganyikiwa?", bullets: ["Sema sehemu ipi huielewi", "Omba mfano tofauti"] }
          ],
          tryIt: "Chagua wazo moja ambalo daima uliliona gumu (asilimia, kanuni ya sarufi, jinsi riba inavyofanya kazi). Omba msaidizi wa AI akueleze kwa kiwango cha mwanzo kwa mfano kutoka maisha yako ya kila siku.",
          youCanNow: "kuelezwa wazo gumu kwa kiwango chako na kuuliza maswali ya kufuatilia hadi lieleweke.",
          quickCheck: [
            { objective: "O1", q: "Mwalimu binafsi (tutor) ni nini?", options: ["Mtu anayekueleza mambo wewe peke yako", "Mtihani unaofanya shuleni", "Aina ya kikokotoo", "Jengo la shule"], answer: 0, why: "Mwalimu binafsi humsaidia mtu mmoja kujifunza, na msaidizi wa AI anaweza kuwa kama mwalimu mvumilivu." },
            { objective: "O1", q: "Unaelewa sehemu ya kwanza ya maelezo lakini si ya pili. Unauliza nini?", options: ["\"Nieleze kila kitu tena.\"", "\"Naelewa sehemu ya kwanza, lakini sielewi kwa nini tunageuza sehemu ya pili.\"", "\"Haidhuru.\"", "\"Nipe jibu.\""], answer: 1, why: "Kusema hasa sehemu inayochanganya kunaisaidia AI kueleza sehemu hiyo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufanya mazoezi kwa maswali yaliyotengenezwa na AI",
          minutes: 5,
          goal: "Omba msaidizi wa AI akuulize maswali na akague majibu yako.",
          text: [
            "Kusoma si sawa na kujifunza. Unakumbuka zaidi unapofanya mazoezi: kujibu maswali kunaufanya ubongo wako kulitoa wazo tena.",
            "Uliza: \"Nipe maswali matano ya mazoezi kuhusu asilimia, moja baada ya jingine. Subiri jibu langu, kisha uniambie kama niko sahihi na kwa nini.\"",
            "AI inaweza kukosea katika hesabu na ukweli. Jibu likionekana si sahihi, iombe ikuonyeshe hatua, au kagua kwenye tovuti ya kujifunzia inayoaminika au kwa mwalimu."
          ],
          steps: ["Omba maswali machache, moja baada ya jingine.", "Jibu kila moja mwenyewe kabla ya kutafuta chochote.", "Iombe AI ikague jibu lako na ieleze.", "Jibu lake likionekana si sahihi, iombe ikuonyeshe hatua au kagua chanzo kingine."],
          words: [["Swali la mazoezi", "swali unalojibu ili likusaidie kukumbuka na kupima ulichojifunza."]],
          slides: [
            { title: "Mazoezi ni bora kuliko kusoma tena", bullets: ["Kujibu kunatoa wazo kutoka kumbukumbu yako", "Unakumbuka zaidi"] },
            { title: "Iombe AI ikuulize maswali", bullets: ["\"Nipe maswali matano, moja baada ya jingine\"", "\"Subiri jibu langu, kisha ueleze\""] },
            { title: "AI nayo inaweza kukosea", bullets: ["Iombe ikuonyeshe hatua", "Kagua kwenye tovuti ya kujifunzia au kwa mwalimu"] }
          ],
          tryIt: "Omba msaidizi wa AI maswali matatu ya mazoezi kuhusu wazo la Somo la 1, moja baada ya jingine. Jibu kila moja kabla haijakuambia jibu.",
          youCanNow: "kutumia msaidizi wa AI kujipima kwa maswali na kukagua unachojifunza.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini uombe maswali ya mazoezi moja baada ya jingine?", options: ["AI inaweza kuandika moja tu", "Inagharimu kidogo", "Unajibu kila moja kabla ya kuona linalofuata", "Inafanya maswali kuwa magumu zaidi"], answer: 2, why: "Moja baada ya jingine kunakuwezesha kujibu kila swali mwenyewe kabla ya kuendelea." },
            { objective: "O2", q: "AI inasema 25% ya 80 ni 25. Unafanya nini?", options: ["Unakubali", "Unaacha kufanya mazoezi", "Unafuta mazungumzo", "Unaiomba ikuonyeshe hatua au unakagua chanzo kingine"], answer: 3, why: "AI inaweza kukosea hesabu, kwa hiyo unaomba hatua au unakagua chanzo kinachoaminika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata tovuti za bure za kujifunzia",
          minutes: 4,
          goal: "Pata tovuti ya bure ya kujifunzia yenye masomo ya ujuzi unaoutaka.",
          text: [
            "AI ni msaidizi mzuri, lakini inafaa zaidi ikitumika pamoja na masomo halisi. Tovuti za bure za kujifunzia zinakupa kozi zilizopangwa kwa mpangilio, zenye video na mazoezi.",
            "Khan Academy ni shirika lisilo la faida lenye kozi za bure za hesabu, sayansi, kusoma, uchumi, kompyuta na maandalizi ya mitihani. LearnFree ina masomo ya bure ya kujisomea kwa kasi yako kuhusu kompyuta, Microsoft Office, zana za Google, kutafuta kazi, misingi ya pesa, kusoma na hesabu.",
            "Maktaba ya umma iliyo karibu nawe pia inaweza kutoa madarasa ya bure, mwalimu binafsi au akaunti za kujifunza mtandaoni. Kama unafikiria kwenda chuo, uliza ofisi ya msaada wa kifedha (financial aid) ya chuo kuhusu msaada wa kulipa, au angalia studentaid.gov, tovuti rasmi ya Wizara ya Elimu ya Marekani."
          ],
          steps: ["Amua ujuzi unaotaka kujifunza.", "Utafute kwenye Khan Academy au LearnFree.", "Chagua kozi na uangalie somo lake la kwanza.", "Uliza maktaba yako inatoa madarasa gani ya bure au mwalimu binafsi."],
          words: [["Kwa kasi yako (self-paced)", "unaenda kwa mwendo wako mwenyewe, wakati wowote wa siku."], ["Shirika lisilo la faida", "shirika linalofanya kazi kwa ajili ya lengo, si kupata pesa kwa ajili ya wamiliki."]],
          sources: [
            { name: "Khan Academy: Kuhusu", url: "https://www.khanacademy.org/about" },
            { name: "LearnFree (masomo ya bure ya kujisomea kwa kasi yako)", url: "https://www.learnfree.org/en/" },
            { name: "Federal Student Aid (Wizara ya Elimu ya Marekani)", url: "https://studentaid.gov/" }
          ],
          slides: [
            { title: "Tumia AI pamoja na masomo halisi", bullets: ["Kozi zilizopangwa kwa mpangilio", "Video na mazoezi"] },
            { title: "Tovuti za bure za kujifunzia", bullets: ["Khan Academy: hesabu, sayansi, kusoma, maandalizi ya mitihani", "LearnFree: kompyuta, kazi, pesa, kusoma, hesabu"] },
            { title: "Msaada zaidi wa bure", bullets: ["Madarasa na mwalimu binafsi maktabani", "Maswali ya pesa za chuo: ofisi ya msaada wa kifedha ya chuo au studentaid.gov"] }
          ],
          tryIt: "Nenda Khan Academy au LearnFree na utafute kozi moja ya ujuzi unaoutaka. Fungua somo la kwanza na uandike jina lake.",
          youCanNow: "kupata tovuti ya bure ya kujifunzia yenye kozi ya ujuzi unaoutaka.",
          quickCheck: [
            { objective: "O3", q: "LearnFree inatoa nini?", options: ["Masomo ya bure kuhusu kompyuta, kutafuta kazi, misingi ya pesa, kusoma na hesabu", "Shahada za chuo za kulipia", "Simu za bure", "Kutafutiwa kazi tu"], answer: 0, why: "LearnFree ina masomo ya bure ya kujisomea kwa kasi yako kuhusu ujuzi wa kila siku." },
            { objective: "O3", q: "Unataka msaada wa bure wa ana kwa ana ili usome vizuri zaidi. Unauliza wapi?", options: ["Kwa muuzaji wa magari", "Maktaba yako ya umma", "Tangazo la mitandao ya kijamii", "Benki"], answer: 1, why: "Maktaba za umma mara nyingi hutoa madarasa ya bure, mwalimu binafsi au akaunti za kujifunza mtandaoni." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI kama mwalimu wako",
        questions: [
          { objective: "O1", q: "Maelezo ya AI ni magumu mno. Uombe nini?", options: ["Hakuna; kata tamaa", "\"Nieleze kama mtu anayeanza tu, kwa mfano wa kupika.\"", "\"Tumia maneno magumu zaidi.\"", "\"Yafanye marefu zaidi.\""], answer: 1, why: "Kuiambia kiwango chako na kuomba mfano wa kila siku kunafanya maelezo yawe wazi zaidi." },
          { objective: "O2", q: "Kwa nini kufanya mazoezi kwa maswali kunasaidia zaidi kuliko kusoma tena?", options: ["Ni haraka zaidi kuruka", "Inaonekana nzuri zaidi", "Kujibu kunaufanya ubongo kulitoa wazo tena, kwa hiyo unakumbuka zaidi", "Inagharimu kidogo"], answer: 2, why: "Mazoezi yanaimarisha kumbukumbu." },
          { objective: "O2", q: "AI inasema jibu lako la hesabu si sahihi, lakini wewe unaona ni sahihi. Unafanya nini?", options: ["Unaiomba ikuonyeshe hatua, au unakagua chanzo kingine", "Unaiamini AI kila wakati", "Unaacha kujifunza hesabu", "Unafuta app"], answer: 0, why: "AI inaweza kukosea hesabu; kukagua hatua kunaonyesha nani yuko sahihi." },
          { objective: "O3", q: "Ipi ni tovuti ya bure ya kujifunzia ya shirika lisilo la faida?", options: ["Tovuti ya manunuzi", "App ya mitandao ya kijamii", "Duka la michezo ya video", "Khan Academy"], answer: 3, why: "Khan Academy ni tovuti ya bure ya kujifunzia ya shirika lisilo la faida." },
          { objective: "O3", q: "\"Kwa kasi yako\" (self-paced) maana yake nini?", options: ["Lazima umalize kwa siku moja", "Unaenda kwa mwendo wako mwenyewe", "Mwalimu anapanga kila wakati", "Unalipa kwa kila dakika"], answer: 1, why: "Masomo ya kwa kasi yako yanaendana na ratiba yako mwenyewe." }
        ]
      }
    },
    {
      name: "Sura 2: Kujifunza kunakoendana na maisha yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga ratiba ya kusoma inayofaa maisha yenye shughuli nyingi",
          minutes: 5,
          goal: "Andaa ratiba rahisi ya kusoma ya wiki mbili pamoja na msaidizi wa AI.",
          text: [
            "Watu wazima wengi wanajifunza huku wakifanya kazi, wakilea watoto na wakitunza familia. Kusoma kwa muda mfupi kila siku kunafanya kazi vizuri kuliko vipindi virefu usivyoweza kuendelea navyo.",
            "Iombe AI ratiba inayoendana na wiki yako halisi: \"Ninafanya kazi jioni na nina dakika 20 kila asubuhi. Niandalie ratiba ya wiki mbili ya kujifunza misingi ya Excel kwa LearnFree. Mada moja ndogo kwa siku, na siku moja ya kupumzika kila wiki.\"",
            "Weka ratiba mahali utakapoiona: kwenye kalenda ya simu yako, kwenye friji, au kwenye daftari. Weka alama kila siku unapomaliza."
          ],
          steps: ["Chagua ujuzi mmoja na tovuti moja ya bure ya kujifunzia.", "Iambie AI una muda kiasi gani na lini.", "Omba ratiba ya wiki mbili yenye mada moja ndogo kwa siku na siku za kupumzika.", "Iweke kwenye kalenda yako au friji na uweke alama kila siku."],
          words: [["Ratiba ya kusoma", "mpango unaoonyesha utajifunza nini na lini."]],
          slides: [
            { title: "Kidogo kidogo kila siku kunashinda", bullets: ["Dakika 20 kwa siku ni bora kuliko saa 3 mara moja", "Panga kwa kuzingatia kazi na familia"] },
            { title: "Iombe AI ratiba", bullets: ["Ujuzi wako na tovuti ya kujifunzia", "Muda ulio nao na lini", "Mada moja ndogo kwa siku, na siku za kupumzika"] },
            { title: "Iweke mahali unapoiona", bullets: ["Kalenda ya simu, friji au daftari", "Weka alama kila siku"] }
          ],
          tryIt: "Omba msaidizi wa AI akuandalie ratiba ya kusoma ya wiki mbili kwa ajili ya kozi uliyoipata katika Somo la 3, kulingana na muda halisi ulio nao kila siku.",
          youCanNow: "kupanga ratiba ya kusoma inayoendana na wiki yako halisi.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini vipindi vifupi vya kusoma kila siku vinawafaa watu wazima wenye shughuli nyingi?", options: ["Daima ni rahisi zaidi", "Havihitaji ratiba", "Unaweza kuendelea navyo kila siku", "Vinachukua nafasi ya mazoezi"], answer: 2, why: "Vipindi vifupi vinaendana na wiki halisi, kwa hiyo unaendelea badala ya kukata tamaa." },
            { objective: "O4", q: "Una dakika 15 tu wakati wa chakula cha mchana. Unaiambia AI nini unapoomba ratiba?", options: ["Hakuna kuhusu muda wako", "Kwamba unaweza kusoma saa 3 kwa siku", "Somo tu", "Kwamba una dakika 15 wakati wa chakula cha mchana kila siku"], answer: 3, why: "Kuiambia AI muda wako halisi kunaiwezesha kuandaa ratiba unayoweza kuifuata." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kumsaidia mtoto kujifunza bila kumfanyia kazi",
          minutes: 5,
          goal: "Tumia AI kumsaidia mtoto kuelewa kazi ya nyumbani badala ya kumpa majibu.",
          text: [
            "AI inaweza kukusaidia kumsaidia mtoto wako, hata katika masomo ambayo hukuwahi kujifunza au umesahau. Jambo muhimu ni kuitumia kueleza, si kufanya kazi ya nyumbani.",
            "Shule zina sheria kuhusu AI. Nyingi haziruhusu wanafunzi kuwasilisha kazi iliyoandikwa na AI. Muulize mwalimu wa mtoto wako sheria ni zipi. Pia angalia kikomo cha umri: zana nyingi za AI ni za watu wenye miaka 13 au zaidi, na baadhi zinahitaji ruhusa ya mzazi kwa vijana; soma masharti ya zana hiyo.",
            "Prompt nzuri kwa wazazi: \"Nieleze jinsi ya kupata eneo la mstatili ili nimfundishe mtoto wangu wa miaka 10. Usinipe jibu la swali hili.\" Au: \"Nipe maswali matatu rahisi ya kukagua kama mtoto wangu anaelewa.\""
          ],
          steps: ["Soma kazi ya nyumbani pamoja na mtoto wako.", "Iombe AI ikueleze wazo wewe, si kutatua swali.", "Mweleze mtoto wako kwa maneno yako mwenyewe.", "Mwache mtoto afanye kazi; tumia maswali yaliyotengenezwa na AI kukagua kama anaelewa.", "Fuata sheria za shule kuhusu matumizi ya AI."],
          words: [["Masharti (terms)", "sheria unazokubali unapotumia app au tovuti, pamoja na kikomo cha umri."]],
          slides: [
            { title: "Eleza, usifanye", bullets: ["Tumia AI kuelewa wazo wewe mwenyewe", "Mtoto wako anafanya kazi"] },
            { title: "Fuata sheria", bullets: ["Muulize mwalimu kuhusu sheria za AI", "Zana nyingi za AI ni za miaka 13 na zaidi", "Soma masharti ya zana hiyo"] },
            { title: "Prompt kwa wazazi", bullets: ["\"Nieleze hili ili nimfundishe mtoto wangu wa miaka 10\"", "\"Usinipe jibu\"", "\"Nipe maswali matatu rahisi ya kukagua\""] }
          ],
          tryIt: "Chukua mada moja ya kazi ya nyumbani (au mada ya darasa la mtoto wako). Iombe AI ikueleze ili uweze kuifundisha, bila kutatua swali. Andika jinsi ungeieleza kwa maneno yako mwenyewe.",
          youCanNow: "kutumia AI kumsaidia mtoto kujifunza huku ukifuata sheria za shule na kazi ikibaki kuwa yake.",
          quickCheck: [
            { objective: "O5", q: "Sheria kuu ya kutumia AI na kazi ya nyumbani ya mtoto ni ipi?", options: ["Itumie kueleza, si kufanya kazi", "Iache iandike jibu lote", "Itumie kwenye mitihani tu", "Usiangalie kazi ya nyumbani kamwe"], answer: 0, why: "AI inapaswa kukusaidia kueleza wazo; mtoto wako bado anafanya kazi." },
            { objective: "O5", q: "Mtoto wako wa miaka 11 anataka kutumia zana ya AI peke yake. Unakagua nini kwanza?", options: ["Rangi zake", "Kikomo chake cha umri na masharti, na sheria za shule kuhusu AI", "Inaandika kwa kasi gani", "Kama ina michezo"], answer: 1, why: "Zana nyingi za AI ni za miaka 13 na zaidi, na shule zina sheria zao." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuendelea na mpango na kukagua maendeleo yako",
          minutes: 5,
          goal: "Kagua maendeleo yako mwenyewe na urekebishe ratiba yako.",
          text: [
            "Baada ya wiki moja, angalia nyuma. Ulisoma siku zipi? Unaweza kufanya nini sasa ambacho hukuweza kufanya kabla? Mafanikio madogo yanahesabika.",
            "Iombe AI ikuulize maswali kuhusu wiki nzima: \"Nilisoma mada hizi tano. Nipe swali moja kwa kila moja.\" Maswali unayokosea yanakuonyesha nini cha kurudia.",
            "Kama ratiba ilikuwa nzito mno, ipunguze. Kama ilikuwa rahisi, ongeza kidogo. Ratiba inayobadilika bado ni ratiba."
          ],
          steps: ["Hesabu siku ulizosoma.", "Iombe AI swali moja kwa kila mada uliyosoma.", "Weka alama kwa uliyokosea na uyarudie.", "Punguza au ongeza ratiba ili iendane na maisha yako."],
          words: [["Maendeleo", "umbali uliopiga kuelekea lengo lako."], ["Kurudia", "kupitia jambo tena ili ulikumbuke vizuri zaidi."]],
          slides: [
            { title: "Angalia nyuma kila wiki", bullets: ["Ulisoma siku zipi?", "Unaweza kufanya nini sasa?", "Mafanikio madogo yanahesabika"] },
            { title: "Jipime kwa wiki nzima", bullets: ["Swali moja kwa kila mada", "Maswali uliyokosea yanaonyesha cha kurudia"] },
            { title: "Rekebisha ratiba yako", bullets: ["Nzito mno? Ipunguze", "Rahisi mno? Ongeza kidogo"] }
          ],
          tryIt: "Kazi ya mwisho: andaa ratiba yako ya kusoma ya wiki mbili pamoja na msaidizi wa AI na tovuti moja ya bure ya kujifunzia, kisha omba maswali matano ya mazoezi kuhusu mada ya kwanza, uyajibu mwenyewe, na ukague majibu yako.",
          youCanNow: "kujifunza ujuzi mpya kwa ratiba ya kusoma, masomo ya bure na mazoezi ya AI, na kurekebisha unapoendelea.",
          quickCheck: [
            { objective: "O6", q: "Maswali unayokosea kwenye jaribio la kila wiki yanakuonyesha nini?", options: ["Kwamba uache", "Kwamba AI imekosea", "Nini cha kurudia baadaye", "Kwamba ratiba ilikuwa kamili"], answer: 2, why: "Maswali uliyokosea yanaonyesha mada za kurudia." },
            { objective: "O6", q: "Ratiba yako ilionekana rahisi mno wiki hii. Unafanya nini?", options: ["Unaacha kusoma", "Unaanza somo jipya", "Hufanyi chochote", "Unaongeza kidogo kwenye ratiba"], answer: 3, why: "Ratiba inapaswa kubadilika ili ikufae; kama ni rahisi, ongeza kidogo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujifunza kunakoendana na maisha yako",
        questions: [
          { objective: "O4", q: "Ratiba ipi ya kusoma ina uwezekano mkubwa wa kumfaa mzazi mwenye shughuli nyingi?", options: ["Saa tatu kila usiku", "Dakika 20 kwa siku na siku za kupumzika", "Wakati wa likizo tu", "Hakuna ratiba kabisa"], answer: 1, why: "Kusoma kwa muda mfupi kila siku kunaendana na maisha yenye shughuli nyingi." },
          { objective: "O4", q: "Uiambie AI nini unapoomba ratiba ya kusoma?", options: ["Nywila yako", "Taarifa za benki yako", "Ujuzi, tovuti na muda ulio nao", "Hakuna"], answer: 2, why: "Taarifa hizo zinaifanya ratiba iendane na wiki yako halisi." },
          { objective: "O5", q: "Mtoto wako ana kazi ya nyumbani ya hesabu. Njia bora ya kutumia AI ni ipi?", options: ["Iombe ikueleze wazo ili uweze kulifundisha", "Iombe imwandikie mtoto wako majibu", "Nakili majibu kwenye kazi ya nyumbani", "Puuza kazi ya nyumbani"], answer: 0, why: "Kutumia AI kueleza kunabakiza kujifunza na kazi kwa mtoto wako." },
          { objective: "O5", q: "Unapata wapi sheria za shule kuhusu AI?", options: ["Kwenye chapisho la mitandao ya kijamii", "Kwa AI yenyewe", "Kwa mtu usiyemjua mtandaoni", "Muulize mwalimu au shule"], answer: 3, why: "Kila shule inaweka sheria zake." },
          { objective: "O6", q: "Jaribio lako la kila wiki linaonyesha ulikosea mada mbili. Nini kinafuata?", options: ["Kuacha", "Kurudia mada hizo mbili", "Kuziruka milele", "Kuanza ujuzi mpya"], answer: 1, why: "Maswali uliyokosea yanaonyesha cha kurudia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Elimu na Kujifunza",
    questions: [
      { objective: "O1", q: "Mwalimu binafsi (tutor) ni:", options: ["Mtu anayemsaidia mtu mmoja kujifunza", "Aina ya kompyuta", "Mtihani", "Jengo la shule"], answer: 0, why: "Mwalimu binafsi anamfundisha mtu mmoja peke yake." },
      { objective: "O1", q: "Ili upate maelezo yaliyo wazi zaidi, iambie AI:", options: ["Anwani yako", "Kiwango chako na uombe mfano wa kila siku", "Itumie maneno magumu zaidi", "Hakuna"], answer: 1, why: "Kiwango chako na mfano vinafanya maelezo yawe wazi zaidi." },
      { objective: "O1", q: "Unaelewa sehemu ya jibu lakini si yote. Sema:", options: ["\"Haidhuru.\"", "\"Lifanye refu zaidi.\"", "Sehemu ipi hasa inakuchanganya", "\"Tumia namba zaidi.\""], answer: 2, why: "Kutaja sehemu inayochanganya kunaleta maelezo bora ya kufuatilia." },
      { objective: "O1", q: "Kwa nini mwalimu mvumilivu wa AI ni msaada?", options: ["Anasahihisha kazi zako za shule", "Anakupa diploma", "Unalipa pesa kwa kila swali", "Unaweza kuuliza swali lile lile mara nyingi"], answer: 3, why: "Hachoki wala hakuhukumu." },
      { objective: "O2", q: "Prompt ipi inaifanya AI ikuulize maswali vizuri?", options: ["\"Nipe maswali matano, moja baada ya jingine, na ukague majibu yangu.\"", "\"Niambie majibu yote.\"", "\"Maswali.\"", "\"Nifanyie mtihani wangu.\""], answer: 0, why: "Moja baada ya jingine, pamoja na kukagua, ndiyo mazoezi halisi." },
      { objective: "O2", q: "Kabla AI haijakuambia jibu, unapaswa:", options: ["Kulitafuta", "Kulijibu mwenyewe", "Kuliruka", "Kufunga mazungumzo"], answer: 1, why: "Kujibu kwanza ndiko kunakofanya mazoezi yafanye kazi." },
      { objective: "O2", q: "Jibu la hesabu la AI likionekana si sahihi:", options: ["Liamini hata hivyo", "Acha kujifunza", "Iombe ikuonyeshe hatua au kagua chanzo kingine", "Mripoti rafiki yako"], answer: 2, why: "AI inaweza kukosea hesabu." },
      { objective: "O3", q: "Khan Academy ni:", options: ["Chuo cha kulipia", "Mchezo", "Duka", "Tovuti ya bure ya kujifunzia ya shirika lisilo la faida"], answer: 3, why: "Inatoa kozi za bure kama shirika lisilo la faida." },
      { objective: "O3", q: "LearnFree inatoa masomo ya bure kuhusu:", options: ["Kompyuta, kutafuta kazi, misingi ya pesa, kusoma na hesabu", "Kupika tu", "Michezo tu", "Hakuna kitu kwa watu wazima"], answer: 0, why: "LearnFree inashughulikia ujuzi mwingi wa kila siku na wa kazi." },
      { objective: "O3", q: "Wapi kwingine unaweza kupata madarasa ya bure au mwalimu binafsi?", options: ["Mahali pa kuosha magari", "Maktaba yako ya umma", "Ukumbi wa benki", "Tangazo linalojitokeza ghafla"], answer: 1, why: "Maktaba mara nyingi hutoa madarasa ya bure na mwalimu binafsi." },
      { objective: "O3", q: "Kwa maswali kuhusu kulipia chuo, unaweza kuangalia wapi?", options: ["Tovuti yoyote isiyojulikana inayoomba ada", "Ujumbe kutoka kwa mtu usiyemjua", "Ofisi ya msaada wa kifedha ya chuo au studentaid.gov", "Mchezo wa video"], answer: 2, why: "Hivyo ndivyo vyanzo rasmi." },
      { objective: "O4", q: "Ratiba nzuri ya kusoma kwa watu wazima wengi ni:", options: ["Saa tano kila Jumapili", "Wakati wowote unapojisikia", "Yote kwa usiku mmoja", "Kusoma kwa muda mfupi kila siku na siku za kupumzika"], answer: 3, why: "Kusoma kwa muda mfupi kila siku ni rahisi kuendelea nako." },
      { objective: "O4", q: "Unapaswa kuweka ratiba yako ya kusoma wapi?", options: ["Mahali utakapoiona, kama kalenda au friji", "Imefichwa ndani ya droo", "Kichwani mwako tu", "Kwenye pipa la taka"], answer: 0, why: "Kuiona kunakukumbusha kusoma." },
      { objective: "O4", q: "Unapoomba AI ratiba ya kusoma, weka:", options: ["Namba yako ya Social Security", "Muda ulio nao kweli na lini", "PIN ya benki yako", "Anwani yako kamili"], answer: 1, why: "Muda wako halisi unaleta ratiba unayoweza kuifuata." },
      { objective: "O5", q: "Zana nyingi za AI zina kikomo cha umri cha:", options: ["Miaka 5 na zaidi", "Miaka 10 na zaidi", "Miaka 13 na zaidi, wakati mwingine kwa ruhusa ya mzazi", "Hakuna kikomo kamwe"], answer: 2, why: "Zana nyingi za AI ni za miaka 13 na zaidi; kagua masharti ya kila zana." },
      { objective: "O5", q: "Ukitumia AI na kazi ya nyumbani ya mtoto wako, AI inapaswa:", options: ["Kuandika kazi ya nyumbani", "Kufanya mtihani", "Kumtumia mwalimu barua pepe kwa niaba yako", "Kueleza wazo, si kufanya kazi"], answer: 3, why: "Kueleza kunabakiza kujifunza kwa mtoto wako." },
      { objective: "O5", q: "Prompt ipi ni nzuri kwa mzazi?", options: ["\"Nieleze hili ili nimfundishe mtoto wangu wa miaka 10. Usinipe jibu.\"", "\"Mfanyie mtoto wangu kazi ya nyumbani.\"", "\"Andika insha.\"", "\"Nipe majibu yote.\""], answer: 0, why: "Inaomba maelezo, si majibu." },
      { objective: "O6", q: "Mwishoni mwa wiki ya kusoma, unapaswa:", options: ["Kufuta maelezo yako", "Kuangalia nyuma ulichofanya na kujipima kwa maswali", "Kuanza upya kutoka sifuri", "Kuacha kusoma"], answer: 1, why: "Kuangalia nyuma kunaonyesha maendeleo na cha kurudia." },
      { objective: "O6", q: "Ratiba yako ilikuwa nzito mno kwa wiki yako. Unafanya nini?", options: ["Unaacha", "Unajisikia vibaya", "Unaipunguza", "Unaiongeza mara mbili"], answer: 2, why: "Ratiba inapaswa kuendana na maisha yako; kuirekebisha ni kawaida." },
      { objective: "O2", q: "Katika kazi ya mwisho, baada ya AI kukupa maswali matano ya mazoezi, wewe:", options: ["Unanakili majibu yake", "Unayaruka", "Unayashiriki mtandaoni", "Unayajibu mwenyewe, kisha unakagua majibu yako"], answer: 3, why: "Kujibu mwenyewe na kukagua kunathibitisha kujifunza." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      7,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Tovuti ya bure ya kujifunzia",
        objective: "O3",
        notYet: "Hakuna tovuti ya kujifunzia, au ni ya kulipia.",
        meets: "Anataja tovuti moja ya bure ya kujifunzia na kozi au masomo aliyotumia.",
        exceeds: "Pia anataja darasa la bure au mwalimu binafsi maktabani."
      },
      {
        name: "Ratiba ya wiki mbili",
        objective: "O4",
        notYet: "Hakuna ratiba, au ratiba isiyoendana na muda halisi wa mwanafunzi.",
        meets: "Wiki mbili, kama dakika 20 kwa siku, mada moja ndogo kwa siku, na siku za kupumzika.",
        exceeds: "Imewekwa kwenye kalenda au friji na siku zimewekewa alama."
      },
      {
        name: "Maswali ya mazoezi",
        objective: "O2",
        notYet: "Aliangalia majibu kwanza, au hakujibu maswali.",
        meets: "Maswali matano yamejibiwa kabla ya kukagua, na kila moja limekaguliwa.",
        exceeds: "Aliiomba AI ionyeshe hatua kwa jibu lolote lililoonekana si sahihi."
      },
      {
        name: "Kukagua maendeleo",
        objective: "O6",
        notYet: "Hakuangalia nyuma maswali aliyokosea.",
        meets: "Anaorodhesha maswali aliyokosea na cha kurudia.",
        exceeds: "Anasema jinsi ratiba itakavyobadilika kulingana na matokeo."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofuata ratiba yao ya kusoma kwa angalau siku 10 kati ya 14 (utafiti wa kufuatilia)",
      "Wanafunzi wanaojiandikisha katika kozi ya bure, darasa la GED au la Kiingereza, au programu ya chuo ndani ya siku 90",
      "Wazazi wanaoripoti kumsaidia mtoto na kazi ya nyumbani wakitumia AI kueleza, si kujibu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya kituo cha jamii",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Tovuti ya bure ya kujifunzia kama Khan Academy au LearnFree",
      "Daftari au kalenda kwa ajili ya ratiba ya kusoma",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Anza kwa kumuuliza kila mwanafunzi anataka kujifunza nini, na tumia ujuzi huo katika kila zoezi.",
      "Onyesha jinsi ya kuomba maelezo rahisi zaidi; wanafunzi wengi wanaona aibu kuuliza tena.",
      "Kwa wazazi, sisitiza kwamba AI inaeleza na mtoto anafanya kazi, na kwamba sheria za shule zinatangulia.",
      "Wasiliana nao baada ya wiki moja kuona nani aliendelea na ratiba yake, na uwasaidie kuipunguza au kuiongeza.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
