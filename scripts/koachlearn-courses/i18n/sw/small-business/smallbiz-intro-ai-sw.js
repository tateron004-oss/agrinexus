"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-intro-ai-sw",
  lang: "sw",
  translationOf: "smallbiz-intro-ai",
  category: "Small Business",
  name: "Utangulizi wa AI kwa Biashara Ndogo",
  skills: "Kueleza AI inavyoweza kusaidia biashara, Kutambua kazi zinazookoa muda, Kuandika prompt ya biashara, Kukagua na kuhariri rasimu za AI, Kulinda taarifa za wateja na za biashara",
  outcome: "kutumia msaidizi wa AI wa bure kumaliza kazi moja halisi ya biashara yako, kama tangazo kwa wateja, maelezo ya bidhaa au orodha ya kazi za wiki: kuandika prompt iliyo wazi yenye taarifa za biashara yako, kuboresha rasimu, kukagua kila ukweli, na kutoweka taarifa za siri ndani yake.",
  about: [
    "Kozi hii ni kwa wamiliki wa biashara ndogo ambao wamesikia kuhusu AI lakini hawajaitumia sana: wenye maduka, wenye migahawa na magari ya kuuza chakula, vinyozi na wasusi, wasafishaji, mafundi wa ujenzi na biashara za nyumbani. Wanafunzi wetu wengi ni wamiliki wa biashara kwa mara ya kwanza na wa jamii za wachache, wanaoendesha kila kitu wenyewe.",
    "Utajifunza msaidizi wa AI ni nini, kazi zipi za biashara yako anaweza kuharakisha, jinsi ya kumwomba msaada kwa kutumia taarifa za biashara yako, jinsi ya kukagua kazi yake, na jinsi ya kulinda taarifa za wateja wako.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwa kutumia biashara yako mwenyewe. Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Chagua kazi moja halisi ya biashara yako wiki hii (tangazo la saa mpya za kazi, maelezo ya bidhaa, jibu kwa mteja, au orodha ya kazi). Tumia msaidizi wa AI wa bure kuiandaa: andika prompt yenye taarifa za biashara yako, omba angalau badiliko moja, kagua kila ukweli (bei, saa, anwani) wewe mwenyewe, ondoa taarifa yoyote ya siri, na uitumie katika biashara yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo ambao wamesikia kuhusu AI lakini hawajaitumia sana: wenye maduka, migahawa na magari ya kuuza chakula, vinyozi na wasusi, wasafishaji, mafundi wa ujenzi na biashara za nyumbani. Wengi ni wamiliki kwa mara ya kwanza na wa jamii za wachache, wanaoendesha kila kitu wenyewe.",
    startingPoint: "Wanaendesha biashara yao kila siku na wanatumia simu kwa kupiga, kutuma ujumbe na mitandao ya kijamii. Wanatumia kidogo au hawatumii kabisa wasaidizi wa AI, na hawana uhakika ni nini salama kushiriki nao.",
    gap: "Wamiliki wanaofanya kila kitu wenyewe hutumia saa nyingi kwa kazi za kuandika kama matangazo, majibu na maelezo. Wanahitaji kutumia msaidizi wa AI wa bure kumaliza kazi halisi haraka zaidi huku wakikagua kila ukweli na kulinda taarifa za wateja, ili waokoe muda bila kuharibu sifa yao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu janja au kompyuta, mara nyingi inatumika kati ya mteja mmoja na mwingine",
      "Muda: masomo ya kama dakika 5 yanayoingia katika siku ya kazi yenye shughuli nyingi",
      "Kanuni: kodi, leseni na mambo ya kisheria yanapelekwa kwa watu na vyanzo rasmi, si kwa AI",
      "Faragha: hakuna majina ya wateja, namba za simu, namba za kadi wala taarifa za siri za biashara katika zana za AI"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mifano ya kazi za biashara", action: "kueleza kile msaidizi wa AI anachoweza na asichoweza kufanya kwa biashara ndogo", standard: "ukitaja kwamba anaandika rasimu na anajua taarifa za biashara yako tu ukimwambia" },
    { id: "O2", condition: "Ukipewa kazi za biashara yako", action: "kuorodhesha kazi ambazo AI inaweza kuharakisha na kazi zinazohitaji watu au vyanzo rasmi", standard: "ukiwa na angalau kazi tano za \"Jaribu na AI\" na kazi tatu za \"Watu na vyanzo rasmi\"" },
    { id: "O3", condition: "Ukipewa kazi halisi ya biashara", action: "kuandika prompt yenye taarifa za biashara yako na jinsi jibu linavyopaswa kuonekana", standard: "ili jibu la kwanza lifae biashara yako" },
    { id: "O4", condition: "Ukipewa rasimu ya kwanza ya AI", action: "kuomba mabadiliko moja baada ya jingine na kuhariri toleo la mwisho kwa maneno yako mwenyewe", standard: "hadi iwe kitu ambacho ungekitumia kweli" },
    { id: "O5", condition: "Ukipewa rasimu ya AI kwa ajili ya wateja", action: "kukagua kila ukweli na ahadi kabla ya kuibandika, kuichapisha au kuituma", standard: "bei, saa, anwani na ahadi zikiwa zimekaguliwa na chochote kisicho sahihi kikiwa kimerekebishwa au kuondolewa" },
    { id: "O6", condition: "Unapotumia AI kwa biashara yako", action: "kutoweka taarifa za siri za wateja na za biashara ndani ya AI na kutambua ulaghai wa malipo", standard: "ukitumia vishika-nafasi na kukagua maombi ya malipo ya haraka kwa namba unayoijua tayari" }
  ],
  chapters: [
    {
      name: "Sura 1: AI inachoweza kufanya kwa biashara yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Msaidizi wa AI ni nini, kwa lugha ya biashara",
          minutes: 4,
          goal: "Eleza kile msaidizi wa AI anachoweza na asichoweza kufanya kwa biashara ndogo.",
          text: [
            "Msaidizi wa AI ni programu ya kompyuta unayoweza kuiandikia au kuongea nayo kwa maneno ya kawaida. Unaomba kitu, nayo inakuandikia kwa sekunde chache. Wanaojulikana na walio bure ni pamoja na ChatGPT, Microsoft Copilot na Google Gemini.",
            "Ifikirie kama msaidizi wa haraka wa kuandika na kufikiri. Inaweza kuandika rasimu ya kipeperushi, maelezo ya chakula kwenye menyu, jibu kwa maoni ya mteja, mpangilio wa orodha ya bei, chapisho la mitandao ya kijamii au orodha ya kukagua ya kufungua duka.",
            "Si mhasibu wako, wakili wako wala mbia wako. Haijui bei zako, wateja wako wala mji wako usipoiambia, na inaweza kukosea huku ikisikika na uhakika. Wewe unabaki kuwa mmiliki: wewe unaamua cha kutumia."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu, kama kuandika."], ["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea, kama ChatGPT, Copilot au Gemini."], ["Rasimu", "toleo la kwanza ambalo utalikagua na kulibadilisha."]],
          slides: [
            { title: "Msaidizi wa AI ni...", bullets: ["Programu unayozungumza nayo kwa maneno ya kawaida", "Msaidizi wa haraka wa kuandika na kufikiri", "Za bure: ChatGPT, Copilot, Gemini"] },
            { title: "Katika biashara ndogo inaweza kuandika", bullets: ["Vipeperushi, matangazo na machapisho ya mitandao", "Maelezo ya menyu na ya bidhaa", "Majibu kwa wateja na kwa maoni yao", "Orodha za kukagua na ratiba"] },
            { title: "SI", bullets: ["Mhasibu wako, wakili wako au mbia wako", "Inajua bei zako tu ukiziambia", "Sahihi kila wakati: wewe ndiye mmiliki"] }
          ],
          tryIt: "Andika kazi tatu za kuandika ulizofanya kwa biashara yako mwezi uliopita, kwa mfano tangazo, ujumbe kwa mteja, au orodha ya bei. Zungushia duara ile iliyochukua muda mrefu zaidi.",
          youCanNow: "kusema msaidizi wa AI ni nini na kutaja kazi za kuandika katika biashara yako anazoweza kusaidia.",
          quickCheck: [
            { objective: "O1", q: "Msaidizi wa AI anapata wapi bei na saa za kazi za biashara yako?", options: ["Anazitafuta katika benki yako", "Anazijua kila wakati", "Kutoka kwako, unapomwambia", "Kutoka kwenye simu za wateja wako"], answer: 2, why: "Msaidizi wa AI anajua taarifa za biashara yako tu ukimpa." },
            { objective: "O1", q: "AI imeandika tangazo kwa duka lako. Nani anaamua kama litumike?", options: ["Kampuni ya AI", "Wewe, mmiliki", "Wateja wako", "Hakuna; linajibandika lenyewe"], answer: 1, why: "Wewe unawajibika kwa kila kitu ambacho biashara yako inatoa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutafuta kazi zinazofaa kumpa AI",
          minutes: 5,
          goal: "Tengeneza orodha ya kazi katika biashara yako ambazo AI inaweza kuharakisha, na zile isizopaswa kugusa.",
          text: [
            "Kazi nzuri za AI ni zile zinazojirudia, za kuandika na zenye hatari ndogo: kujibu maswali yale yale, kueleza bidhaa, kuandika machapisho, kutengeneza ratiba na orodha za kukagua, kufupisha barua pepe ndefu au kugeuza maandishi yaliyochanganyika kuwa orodha safi.",
            "Weka AI mbali na maamuzi ya mwisho kuhusu pesa, kodi, mikataba, kuajiri na kufukuza kazi, kanuni za afya na usalama, na chochote cha kisheria. Inaweza kukusaidia kuandaa maswali ya kumuuliza mhasibu wako, lakini yenyewe si mhasibu.",
            "Kipimo rahisi: kama kosa lingekuwa rahisi kuliona na kulirekebisha, AI inaweza kusaidia. Kama kosa lingekugharimu pesa, imani ya mteja au faini, mtu analikagua, na wewe unakagua chanzo rasmi."
          ],
          steps: ["Orodhesha kazi unazofanya kila wiki.", "Weka alama kwa kila moja: inajirudia? ya kuandika? hatari ndogo?", "Weka kazi zenye \"ndiyo\" tatu kwenye orodha ya \"Jaribu na AI\".", "Weka maamuzi ya pesa, sheria na usalama kwenye orodha ya \"Watu na vyanzo rasmi\"."],
          words: [["Kazi yenye hatari ndogo", "kazi ambayo kosa ni rahisi kuliona na kulirekebisha."], ["Kazi inayojirudia", "kitu unachofanya tena na tena, kama kujibu swali lile lile."]],
          slides: [
            { title: "Kazi nzuri za AI", bullets: ["Zinazojirudia: maswali yale yale kila siku", "Za kuandika: machapisho, maelezo, majibu", "Hatari ndogo: makosa ni rahisi kuyaona"] },
            { title: "Ziache kwa watu na vyanzo rasmi", bullets: ["Pesa, kodi na mikataba", "Kuajiri na kufukuza kazi", "Kanuni za afya, usalama na sheria"] },
            { title: "Kipimo cha haraka", bullets: ["Rahisi kuona na kurekebisha? AI inaweza kusaidia", "Inaweza kugharimu pesa, imani au faini? Mtu anakagua"] }
          ],
          tryIt: "Tengeneza orodha mbili kwa biashara yako: \"Jaribu na AI\" (angalau kazi tano) na \"Watu na vyanzo rasmi\" (angalau tatu).",
          youCanNow: "kugawa kazi za biashara yako kuwa zile AI inaweza kusaidia na zile ambazo lazima zifanywe na watu.",
          quickCheck: [
            { objective: "O2", q: "Kazi ipi inafaa kwa AI?", options: ["Kuamua jinsi ya kulipa kodi zako", "Kusaini mkataba wa kukodisha", "Kuchagua aina ya leseni ya biashara", "Kuandika jibu lile lile kwa swali la kawaida la wateja"], answer: 3, why: "Kazi zinazojirudia, za kuandika na zenye hatari ndogo zinafaa kumpa AI." },
            { objective: "O2", q: "Unahitaji kujua kibali gani gari lako la kuuza chakula linahitaji. Ungefanya nini?", options: ["Kukagua tovuti au ofisi rasmi ya serikali", "Kutumia chochote AI inachosema", "Kumuuliza mteja", "Kubahatisha na kurekebisha baadaye"], answer: 0, why: "Kosa linaweza kugharimu faini, kwa hiyo mtu anakagua chanzo rasmi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika prompt ya biashara iliyo wazi",
          minutes: 5,
          goal: "Andika prompt yenye taarifa za biashara yako ili jibu lifae biashara yako.",
          text: [
            "Unachoandika kwa msaidizi wa AI kinaitwa prompt. Kadiri anavyojua zaidi kuhusu biashara yako, ndivyo jibu linavyofaa zaidi. Prompt nzuri ya biashara ina sehemu nne: wewe ni nani, unahitaji nini, ni kwa ajili ya nani, na inapaswa kuonekanaje.",
            "Mfano: \"Nina mgahawa mdogo wa vyakula vya Karibiani mjini Fresno. Andika tangazo fupi la mlangoni linalosema tunafunga saa 2 usiku (8 pm) Jumapili kuanzia Mei 5. Kwa sauti ya kirafiki, chini ya maneno 30.\"",
            "Prompt dhaifu kama \"andika tangazo\" inamfanya AI abahatishe. Ongeza taarifa zako halisi: aina ya biashara yako, mji wako, saa zako za kazi, mtindo wako. Acha nje taarifa za siri kama namba za benki au namba ya simu ya mteja."
          ],
          steps: ["Wewe ni nani: aina ya biashara yako na mahali ilipo.", "Unahitaji nini: kitu chenyewe hasa.", "Ni kwa ajili ya nani: wateja, wafanyakazi, msambazaji.", "Inapaswa kuonekanaje: urefu, sauti, orodha au aya."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI kuomba kitu."], ["Sauti (tone)", "jinsi maandishi yanavyosikika: ya kirafiki, rasmi, ya kufurahisha."]],
          slides: [
            { title: "Sehemu nne za prompt ya biashara", bullets: ["1. Wewe ni nani", "2. Unahitaji nini", "3. Ni kwa ajili ya nani", "4. Inapaswa kuonekanaje"] },
            { title: "Mfano", bullets: ["\"Nina mgahawa mdogo wa vyakula vya Karibiani mjini Fresno.", "Andika tangazo la mlangoni: tunafunga 8 pm Jumapili kuanzia Mei 5.", "Sauti ya kirafiki, chini ya maneno 30.\""] },
            { title: "Dhaifu dhidi ya wazi", bullets: ["Dhaifu: \"andika tangazo\"", "Wazi: biashara yako, taarifa, mtindo", "Kamwe: namba za benki au namba za simu za wateja"] }
          ],
          tryIt: "Chagua kazi moja kutoka orodha yako ya \"Jaribu na AI\". Andika prompt yenye sehemu zote nne, itume kwa msaidizi wa AI wa bure, na usome jibu.",
          youCanNow: "kuandika prompt ya biashara yenye wewe ni nani, unahitaji nini, ni kwa ajili ya nani na inapaswa kuonekanaje.",
          quickCheck: [
            { objective: "O3", q: "Prompt ni nini?", options: ["Bili kutoka kampuni ya AI", "Unachoandika kuomba AI kitu", "Tangazo dirishani kwako", "Maoni ya mteja"], answer: 1, why: "Prompt ni ombi lako kwa AI." },
            { objective: "O3", q: "Unataka tangazo kuhusu saa za kazi za sikukuu. Ungeandika prompt ipi?", options: ["\"Tengeneza tangazo.\"", "\"Saa.\"", "\"Nina duka la mikate mjini Fresno. Andika tangazo fupi: tumefunga Alhamisi kwa sababu ya sikukuu. Kirafiki, chini ya maneno 20.\"", "\"Andika kitu kizuri.\""], answer: 2, why: "Aina ya biashara, mji, kazi na mtindo vinampa AI anachohitaji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI inachoweza kufanya kwa biashara yako",
        questions: [
          { objective: "O1", q: "Msaidizi wa AI ni nini?", options: ["Mfanyakazi mpya", "Programu unayozungumza nayo inayoandika rasimu", "Benki", "Mashine ya kutunza fedha dukani"], answer: 1, why: "Ni programu ya kompyuta unayoiandikia au kuongea nayo." },
          { objective: "O2", q: "Kazi ipi ni nzuri kumpa msaidizi wa AI?", options: ["Kuamua kama usaini mkataba wa kukodisha", "Kumfukuza mfanyakazi kazi", "Kulipa kodi zako peke yako", "Kuandika rasimu ya maelezo ya bidhaa"], answer: 3, why: "Maelezo ya bidhaa ni ya kuandika, yanajirudia na yana hatari ndogo." },
          { objective: "O2", q: "Kosa linaweza kukugharimu faini. Unafanya nini?", options: ["Mtu alikague dhidi ya chanzo rasmi", "Kuiacha AI iamue", "Kulipuuza", "Kuuliza AI mara mbili"], answer: 0, why: "Kazi zenye hatari kubwa zinahitaji mtu na chanzo rasmi." },
          { objective: "O3", q: "Prompt ipi ya biashara iko wazi zaidi?", options: ["\"tangazo\"", "\"saidia biashara yangu\"", "\"Nina kinyozi mjini Oakland. Andika tangazo fupi: tumefunga Jumatatu Julai 4. Kirafiki, chini ya maneno 25.\"", "\"andika kitu\""], answer: 2, why: "Inasema wewe ni nani, unahitaji nini, ni kwa ajili ya nani na inapaswa kuonekanaje." },
          { objective: "O6", q: "Kipi unapaswa kukiacha nje ya prompt?", options: ["Aina ya biashara yako", "Mji wako", "Namba ya simu ya mteja", "Sauti unayotaka"], answer: 2, why: "Taarifa za siri za wateja zinabaki nje ya zana za AI." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI kwa usalama na vizuri",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuboresha rasimu",
          minutes: 4,
          goal: "Tumia maombi ya kufuatilia kugeuza rasimu ya kwanza kuwa kitu ambacho ungekitumia kweli.",
          text: [
            "Jibu la kwanza ni rasimu. Katika mazungumzo hayo hayo, msaidizi anakumbuka ulichoomba, kwa hiyo unaweza kumwambia abadilishe nini.",
            "Maombi ya kufuatilia yanayofaa kwa biashara: \"Lifupishe.\" \"Lisikike la upole zaidi.\" \"Ongeza saa zetu za kazi.\" \"Nipe matoleo matatu.\" \"Liandike pia kwa Kihispania.\" \"Tumia maneno rahisi zaidi.\"",
            "Kisha lifanye kuwa lako. Badilisha maneno ili yasikike kama wewe na duka lako. Wateja wanaijua sauti yako; toleo la mwisho linapaswa kuwa nayo pia."
          ],
          steps: ["Soma rasimu kwa sauti.", "Chagua kitu kimoja cha kubadilisha na ukiombe.", "Rudia hadi ifae.", "Hariri toleo la mwisho kwa maneno yako mwenyewe."],
          words: [["Ombi la kufuatilia", "ombi la pili linalojenga juu ya jibu ulilopata."], ["Toleo", "mojawapo ya njia kadhaa za kuandika kitu kile kile."]],
          slides: [
            { title: "Jibu la kwanza ni rasimu", bullets: ["Mazungumzo yanakumbuka ombi lako", "Omba badiliko moja kwa wakati"] },
            { title: "Maombi ya kufuatilia kwa biashara", bullets: ["\"Lifupishe.\" \"Lisikike la upole zaidi.\"", "\"Nipe matoleo matatu.\"", "\"Liandike pia kwa Kihispania.\""] },
            { title: "Lifanye kuwa lako", bullets: ["Lisome kwa sauti", "Badilisha maneno yasikike kama wewe", "Wateja wanaijua sauti yako"] }
          ],
          tryIt: "Chukua jibu kutoka Somo la 3. Omba mabadiliko mawili, moja baada ya jingine, kisha hariri toleo la mwisho ili lisikike kama wewe.",
          youCanNow: "kuboresha rasimu ya AI kwa maombi ya kufuatilia na kuifanya isikike kama biashara yako.",
          quickCheck: [
            { objective: "O4", q: "Unapaswa kulichukuliaje jibu la kwanza la AI?", options: ["Kama rasimu unayoweza kuiboresha", "Kama kazi iliyokamilika", "Kama ukweli usioweza kuubadilisha", "Kama kitu cha kubandika mara moja"], answer: 0, why: "Jibu la kwanza ni rasimu unayoiunda kwa maombi ya kufuatilia." },
            { objective: "O4", q: "Maelezo ya bidhaa ya AI ni mazuri lakini yanasikika magumu. Ungefanya nini?", options: ["Kuyatumia kama yalivyo", "Kuanza upya na zana mpya ya AI", "Kuomba mabadiliko mengi katika ujumbe mmoja mrefu", "Kuomba badiliko moja, kisha kuyahariri kwa maneno yako"], answer: 3, why: "Badiliko moja kwa wakati pamoja na uhariri wako yanafanya yasikike kama wewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua ukweli kabla wateja hawajauona",
          minutes: 5,
          goal: "Kagua kila ukweli katika rasimu ya AI kabla ya kuibandika, kuichapisha au kuituma.",
          text: [
            "AI inaweza kubuni mambo: bei isiyo sahihi, saa zisizo sahihi, punguzo la bei ambalo hukuwahi kupanga, au kanuni isiyokuwepo. Hii inaitwa hallucination (kubuni). Ikiingia kwenye tangazo au tovuti yako, wateja watakushikilia kwa hilo.",
            "Kabla ya kutumia chochote, kagua: bei, tarehe na saa, anwani na simu yako, ahadi (\"usafirishaji bure\", \"imehakikishwa\"), na kanuni yoyote kuhusu leseni, kodi au afya. Linganisha na kumbukumbu zako mwenyewe.",
            "Kwa kanuni na sheria, AI si chanzo. Kagua tovuti rasmi ya serikali (mara nyingi inaishia na .gov) au muulize mhasibu wako, ofisi ya mji wako au mshauri wa bure wa biashara ndogo kama SCORE au Small Business Development Center (kituo cha kuendeleza biashara ndogo)."
          ],
          steps: ["Pigia mstari kila namba, tarehe, jina na ahadi.", "Kagua kila moja dhidi ya kumbukumbu zako.", "Kagua kanuni au sheria yoyote kwenye ukurasa rasmi wa .gov.", "Futa ahadi yoyote ambayo hukupanga kuitoa."],
          words: [["Hallucination (kubuni)", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], ["Chanzo rasmi", "ofisi ya serikali au kampuni ambayo kweli inaweka kanuni au bei."]],
          slides: [
            { title: "AI inaweza kubuni mambo", bullets: ["Bei au saa zisizo sahihi", "Punguzo au ahadi ambazo hukuwahi kupanga", "Kanuni zisizokuwepo"] },
            { title: "Kagua kabla wateja hawajaona", bullets: ["Bei, tarehe, saa", "Anwani na simu", "Ahadi kama \"bure\" au \"imehakikishwa\""] },
            { title: "Kanuni na sheria", bullets: ["Kagua ukurasa rasmi wa .gov", "Muulize mhasibu wako au ofisi ya mji", "Msaada wa bure: SCORE au SBDC"] }
          ],
          tryIt: "Muombe msaidizi wa AI aandike aya fupi ya \"Kuhusu sisi\" kwa biashara yako. Pigia mstari kila ukweli na ahadi ndani yake, kagua kila moja, na urekebishe au ufute kisicho sahihi.",
          youCanNow: "kutafuta na kukagua kila ukweli na ahadi katika rasimu ya AI kabla wateja hawajaiona.",
          quickCheck: [
            { objective: "O5", q: "Hallucination ya AI ni nini?", options: ["Picha angavu ambayo AI inatengeneza", "Ukweli uliobuniwa unaosikika kuwa kweli", "Jibu la polepole", "Kosa la tahajia"], answer: 1, why: "AI inaweza kubuni ukweli unaosikika halisi, kwa hiyo unaukagua." },
            { objective: "O5", q: "\"Kuhusu sisi\" ya AI inasema duka lako lilifunguliwa mwaka 1995, lakini lilifunguliwa 2015. Ungefanya nini?", options: ["Kuiacha; wateja hawataona", "Kuiuliza AI kama ina uhakika", "Kurekebisha mwaka kabla ya kuibandika", "Kufuta aya nzima"], answer: 2, why: "Kila ukweli katika rasimu kwa ajili ya wateja lazima ukaguliwe na urekebishwe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda taarifa za wateja na za biashara",
          minutes: 5,
          goal: "Tumia AI kwa biashara yako bila kushiriki taarifa za siri za wateja au za biashara.",
          text: [
            "Usibandike taarifa za siri kwenye msaidizi wa AI: majina ya wateja pamoja na namba zao za simu au anwani, namba za kadi au za benki, nywila, namba za Social Security (namba ya hifadhi ya jamii ya Marekani) za wafanyakazi, au taarifa za siri za afya. Unaweza kupata msaada unaouhitaji bila hizo. Andika \"[jina la mteja]\" badala yake.",
            "Soma mipangilio ya faragha ya zana unayotumia. Baadhi ya zana zinakuruhusu kuzima uhifadhi wa mazungumzo yako kwa ajili ya mafunzo. Matoleo ya biashara ya baadhi ya zana yanatoa ulinzi zaidi; kagua ukurasa rasmi wa kampuni kabla ya kutegemea hilo.",
            "Walaghai nao wanatumia AI: ankara bandia, barua pepe bandia za wasambazaji na simu bandia. Ujumbe ukikuharakisha ulipe au ubadilishe taarifa za benki, simama na umpigie msambazaji kwa namba unayoijua tayari."
          ],
          steps: ["Kabla ya kutuma prompt, isome kutafuta taarifa za siri.", "Zibadilishe kwa vishika-nafasi kama \"[jina la mteja]\".", "Kagua mipangilio ya faragha ya zana.", "Piga simu kwa namba unayoijua kabla ya kulipa ombi lolote la haraka."],
          words: [["Kishika-nafasi", "kitu cha kushikilia nafasi kama \"[jina la mteja]\" kinachotumika badala ya taarifa halisi za siri."], ["Mipangilio ya faragha", "machaguo katika zana kuhusu inachohifadhi na jinsi inavyotumia taarifa zako."]],
          slides: [
            { title: "Kamwe usibandike kwenye AI", bullets: ["Namba za simu na anwani za wateja", "Namba za kadi, za benki na nywila", "Namba za utambulisho za wafanyakazi au taarifa za siri za afya"] },
            { title: "Tumia vishika-nafasi", bullets: ["\"[jina la mteja]\" badala ya jina halisi", "Bado unapata msaada unaouhitaji"] },
            { title: "Mipangilio na ulaghai", bullets: ["Kagua mipangilio ya faragha ya zana", "Ankara bandia na barua pepe bandia za wasambazaji ni za kawaida", "Piga simu kwa namba unayoijua kabla ya kulipa"] }
          ],
          tryIt: "Kazi ya mwisho: chagua kazi moja halisi ya biashara yako wiki hii. Tumia msaidizi wa AI wa bure kuiandaa kwa prompt yenye sehemu nne, omba angalau badiliko moja, kagua kila ukweli wewe mwenyewe, ondoa taarifa yoyote ya siri, na uitumie.",
          youCanNow: "kutumia AI kwa kazi halisi ya biashara huku ukilinda taarifa za wateja na za biashara.",
          quickCheck: [
            { objective: "O6", q: "Kishika-nafasi ni nini?", options: ["Kitu cha kushikilia nafasi kama \"[jina la mteja]\"", "Namba halisi ya simu ya mteja", "Nywila", "Aina ya zana ya AI"], answer: 0, why: "Vishika-nafasi vinakuwezesha kupata msaada bila kushiriki taarifa za siri." },
            { objective: "O6", q: "Mtu anapiga simu na kusema lazima ulipe ankara iliyochelewa leo kwa kadi za zawadi (gift cards). Ungefanya nini?", options: ["Kulipa haraka ili kuepuka matatizo", "Kumpa namba ya kadi yako badala yake", "Kuiomba AI ilipe", "Kukata simu na kumpigia msambazaji kwa namba unayoijua tayari"], answer: 3, why: "Maombi ya haraka ya kulipa kwa kadi za zawadi ni dalili ya hatari ya ulaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI kwa usalama na vizuri",
        questions: [
          { objective: "O4", q: "Tangazo la AI ni refu mno. Unaomba nini?", options: ["\"Lifupishe.\"", "\"Futa akaunti yangu.\"", "\"Ongeza namba yangu ya benki.\"", "Hakuna; lichapishe"], answer: 0, why: "Ombi la kufuatilia linaomba badiliko unalotaka." },
          { objective: "O5", q: "Rasimu ya AI inasema \"Usafirishaji bure kwa oda zote\" lakini hukuwahi kutoa hilo. Unafanya nini?", options: ["Kuiacha; inasikika vizuri", "Kuiuliza AI kama ni kweli", "Kuibandika uone", "Kufuta ahadi hiyo kabla ya kutumia rasimu"], answer: 3, why: "Wateja wanaweza kukushikilia kwa ahadi zilizo kwenye tangazo au tovuti yako." },
          { objective: "O5", q: "Unakagua wapi kanuni kuhusu leseni za biashara?", options: ["Jibu la AI", "Tovuti au ofisi rasmi ya serikali", "Chapisho la mitandao ya kijamii", "Mshindani wako"], answer: 1, why: "Kanuni zinatoka kwenye chanzo rasmi." },
          { objective: "O6", q: "Unaandika nini badala ya jina halisi na simu ya mteja?", options: ["Kishika-nafasi kama \"[jina la mteja]\"", "Taarifa halisi", "Namba ya kadi yake", "Hakuna; acha AI milele"], answer: 0, why: "Vishika-nafasi vinazuia taarifa za siri zisiingie." },
          { objective: "O6", q: "Barua pepe \"kutoka kwa msambazaji wako\" inasema ulipe kwenye akaunti mpya ya benki leo. Unafanya nini?", options: ["Kulipa mara moja", "Kujibu kwa nywila yako", "Kumpigia msambazaji kwa namba unayoijua tayari", "Kuituma kwa wateja"], answer: 2, why: "Mabadiliko ya haraka ya malipo ni ulaghai wa kawaida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa AI kwa Biashara Ndogo",
    questions: [
      { objective: "O1", q: "Kipi ni msaidizi wa AI wa bure?", options: ["Mashine ya kutunza fedha dukani", "Microsoft Copilot", "Kisoma-msimbo wa bidhaa (barcode)", "Mashine ya kuchapisha risiti"], answer: 1, why: "Copilot, ChatGPT na Gemini ni wasaidizi wanaojulikana." },
      { objective: "O1", q: "Msaidizi wa AI anajua bei zako:", options: ["Kila wakati", "Kutoka mji wako", "Kutoka benki yako", "Tu ukimwambia"], answer: 3, why: "Hajui biashara yako usipomwambia." },
      { objective: "O1", q: "Nani anafanya uamuzi wa mwisho kuhusu kazi ya AI kwa biashara yako?", options: ["AI", "Wateja wako", "Duka la apps", "Wewe, mmiliki"], answer: 3, why: "Wewe unabaki mmiliki na unaamua cha kutumia." },
      { objective: "O2", q: "Ipi ni kazi inayojirudia, ya kuandika na yenye hatari ndogo?", options: ["Kusaini mkataba wa kukodisha", "Kujibu swali lile lile la wateja kila siku", "Kulipa kodi za mishahara", "Kuchagua wakili"], answer: 1, why: "Majibu ya kuandika yanayojirudia ni kazi nzuri za AI." },
      { objective: "O2", q: "Kipi kinafaa kwenye orodha ya \"Watu na vyanzo rasmi\"?", options: ["Machapisho ya mitandao ya kijamii", "Maelezo ya menyu", "Maamuzi ya kodi", "Orodha za kukagua za kufungua duka"], answer: 2, why: "Maamuzi ya pesa na kodi yanahitaji watu na vyanzo rasmi." },
      { objective: "O2", q: "Kipimo cha haraka kinasema AI inaweza kusaidia kosa likiwa:", options: ["Rahisi kuona na kurekebisha", "La gharama", "La kisheria", "Lililofichika"], answer: 0, why: "Kazi zenye hatari ndogo ni salama kujaribu na AI." },
      { objective: "O3", q: "Prompt ni nini?", options: ["Risiti", "Ada ya kuchelewa", "Unachoandika kuomba AI kitu", "Usafirishaji"], answer: 2, why: "Prompt ni ombi lako." },
      { objective: "O3", q: "Sehemu ipi inamwambia AI mtindo unaoutaka?", options: ["Inapaswa kuonekanaje", "Wewe ni nani", "Benki yako", "Nywila yako"], answer: 0, why: "\"Inapaswa kuonekanaje\" inahusu urefu na sauti." },
      { objective: "O3", q: "Kwa nini uongeze aina ya biashara yako na mji kwenye prompt?", options: ["Ili iwe polepole", "Ili jibu lifae biashara yako", "Inatakiwa kisheria", "Ili AI ikutoze pesa"], answer: 1, why: "Taarifa zinafanya jibu lifae." },
      { objective: "O4", q: "Jibu la kwanza la AI ni bora kulichukulia kama:", options: ["La mwisho", "Sheria", "Mkataba", "Rasimu"], answer: 3, why: "Unaliboresha na kulikagua kabla ya kulitumia." },
      { objective: "O4", q: "Ombi lipi la kufuatilia linasaidia wateja wanaozungumza Kihispania?", options: ["\"Liandike pia kwa Kihispania.\"", "\"Ongeza nywila yangu.\"", "\"Lirefushe.\"", "\"Lifute.\""], answer: 0, why: "AI inaweza kuandika rasimu kwa lugha nyingine; mzungumzaji fasaha akague." },
      { objective: "O4", q: "Kwa nini uhariri toleo la mwisho kwa maneno yako mwenyewe?", options: ["Halina manufaa", "Kuficha makosa", "Kulirefusha", "Ili lisikike kama wewe na biashara yako"], answer: 3, why: "Wateja wanaijua sauti yako." },
      { objective: "O5", q: "Hallucination ya AI ni nini?", options: ["Tatizo la skrini", "Intaneti ya polepole", "Ukweli uliobuniwa unaosikika kuwa kweli", "Aina ya app"], answer: 2, why: "AI inaweza kubuni ukweli." },
      { objective: "O5", q: "Lazima ukague nini kabla ya kubandika rasimu ya AI?", options: ["Tahajia tu", "Bei, saa, anwani na ahadi", "Hakuna kitu", "Aina ya herufi tu"], answer: 1, why: "Ukweli au ahadi zisizo sahihi zinaharibu imani." },
      { objective: "O5", q: "Washauri wa bure wa biashara ndogo ni pamoja na:", options: ["AI yenyewe", "Matangazo yanayojitokeza", "Majukwaa yoyote ya mtandaoni", "SCORE na Small Business Development Centers"], answer: 3, why: "SCORE na SBDC zinatoa ushauri wa bure." },
      { objective: "O6", q: "Kipi KAMWE usikibandike kwenye zana ya AI?", options: ["\"Lifanye la kirafiki zaidi\"", "Aina ya biashara yako", "Namba ya kadi ya mteja", "Saa zako za kufungua"], answer: 2, why: "Namba za kadi ni za siri." },
      { objective: "O6", q: "Kishika-nafasi ni:", options: ["Kitu cha kushikilia nafasi kama \"[jina la mteja]\"", "Namba halisi ya simu", "Nywila", "Bei"], answer: 0, why: "Vishika-nafasi vinasimama badala ya taarifa za siri." },
      { objective: "O6", q: "Kabla ya kutegemea ahadi za faragha za zana, unapaswa:", options: ["Kubahatisha", "Kukagua mipangilio yake na ukurasa rasmi wa kampuni", "Kumuuliza mteja", "Kupuuza faragha"], answer: 1, why: "Mipangilio na kurasa rasmi zinasema zana inahifadhi nini." },
      { objective: "O6", q: "Mtu anakupigia simu akikuharakisha ulipe \"ankara iliyochelewa\" kwa kadi za zawadi. Hii ni:", options: ["Biashara ya kawaida", "Dalili ya hatari ya ulaghai", "Kanuni ya kodi", "Punguzo la bei"], answer: 1, why: "Kuharakisha na kadi za zawadi ni dalili za ulaghai." },
      { objective: "O6", q: "Njia bora ya kukagua ombi la haraka la malipo kutoka kwa msambazaji ni:", options: ["Kumpigia msambazaji kwa namba unayoijua tayari", "Kujibu barua pepe ile ile", "Kulipa nusu", "Kuiuliza AI"], answer: 0, why: "Namba unayoijua inakufikisha kwa msambazaji halisi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 4, 6, 8, 9, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Prompt ya biashara iliyo wazi", objective: "O3", notYet: "Prompt haiko wazi, kwa mfano \"tengeneza tangazo\".", meets: "Prompt ina aina ya biashara yako, kazi, taarifa zako na jinsi inavyopaswa kuonekana.", exceeds: "Jibu la kwanza lilikaribia kuwa tayari kwa sababu prompt ilikuwa wazi sana." },
      { name: "Ameiboresha", objective: "O4", notYet: "Alitumia rasimu ya kwanza kama ilivyo.", meets: "Aliomba angalau badiliko moja na akahariri matokeo yasikike kama yeye.", exceeds: "Aliomba mabadiliko mawili au zaidi, moja baada ya jingine, na anaweza kusema kila moja lilirekebisha nini." },
      { name: "Ukweli umekaguliwa", objective: "O5", notYet: "Bei, saa, anwani au ahadi haikukaguliwa.", meets: "Kila ukweli na ahadi vilikaguliwa na kurekebishwa au kuondolewa kama si sahihi.", exceeds: "Anaweza kusema kila ukweli ulikaguliwa wapi." },
      { name: "Taarifa za siri zimezuiwa", objective: "O6", notYet: "Prompt ina jina la mteja, namba au taarifa nyingine ya siri.", meets: "Hakuna taarifa za siri za wateja wala za biashara katika prompt.", exceeds: "Alitumia vishika-nafasi na akavijaza tu katika toleo la mwisho." },
      { name: "Imetumika", objective: "O2", notYet: "Kazi si kazi halisi ya biashara, au haikutumika.", meets: "Kazi halisi ya biashara ilikamilika na ikatumika.", exceeds: "Mmiliki alichagua kazi kutoka orodha ya \"Jaribu na AI\" na akaandika muda uliookolewa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kipimo cha tathmini)",
      "Wamiliki wanaoripoti kutumia AI kwa angalau kazi moja ya biashara kila wiki (utafiti wa ufuatiliaji wa siku 30)",
      "Wamiliki wanaoripoti muda uliookolewa kwenye kazi za kuandika (utafiti wa ufuatiliaji)",
      "Wamiliki wanaoanza kozi nyingine ya biashara ndogo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Kazi moja halisi ya biashara kwa wiki hii, kama tangazo au jibu kwa mteja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Muombe kila mmiliki alete kazi moja halisi ili kazi ya mwisho imwokolee muda mara moja.",
      "Kamwe wamiliki wasiandike majina halisi ya wateja, namba au taarifa za kadi; fanyeni mazoezi kwa vishika-nafasi.",
      "Peleka maswali ya kodi, leseni na sheria kwenye vyanzo rasmi, SCORE au Small Business Development Center.",
      "Unganisha wamiliki wa aina tofauti za biashara ili waone njia nyingi zaidi za kutumia AI.",
      "Pima kazi ya mwisho kwa kipimo cha tathmini, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
