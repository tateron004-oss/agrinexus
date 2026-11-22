"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-learning-hobbies.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-learning-hobbies-sw",
  lang: "sw",
  translationOf: "seniors-ai-learning-hobbies",
  category: "Seniors and Technology",
  name: "AI kwa Kujifunza na Mambo ya Kupenda",
  skills: "Kuiomba AI ikufundishe hatua kwa hatua, Kujipima kwa maswali ya AI, Kutengeneza mpango wa kujifunza, Kupata video nzuri za kufundisha, Kutumia AI kwa mradi wa jambo unalopenda",
  outcome: "kutumia msaidizi wa AI kutengeneza mpango rahisi wa wiki mbili wa kujifunza jambo unalopenda, kuuacha ukufundishe na kukupima hatua kwa hatua, na kumaliza kipindi cha kwanza cha mazoezi.",
  about: [
    "Hakuna wakati ambao umechelewa kujifunza. Kozi hii ni ya wazee wanaotaka kuanza jambo jipya wanalopenda, kurudi kwenye jambo la zamani, au kujifunza kitu ambacho wamekuwa na hamu ya kukijua: bustani, historia ya familia, uchoraji, lugha mpya, ndege, muziki au historia.",
    "Utatumia msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini kama mwalimu mvumilivu asiyechoka kurudia. Utauomba ukufundishe kwa hatua ndogo, ukupime kwa maswali, upange mazoezi yako, na ukusaidie katika mradi halisi wa jambo unalopenda.",
    "Kila somo linachukua kama dakika tano. Fanya kazi ya \"Jaribu sasa\" kila mara; kazi hizo zinajenga mpango wako wa kujifunza. Kila sura inaishia na jaribio la maarifa, na kozi inaishia na mtihani wa maswali 20."
  ],
  finalTask: "Chagua jambo moja unalopenda au mada moja. Omba msaidizi wa AI mpango wa wiki mbili wa kujifunza wenye vipindi vifupi vya kila siku, uombe ukufundishe somo la kwanza hatua kwa hatua, uache ukupime kwa maswali matatu, na uandike jambo moja utakalofanyia mazoezi kesho.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee, mara nyingi waliostaafu, wenye muda zaidi ambao wanataka kujifunza kitu kipya au kurudi kwenye jambo wanalopenda: bustani, uchoraji, muziki, kazi za mikono, kutazama ndege au historia ya familia.",
    startingPoint: "Wanaweza kutumia simu, tableti au kompyuta kupiga simu, kutuma barua pepe na kufungua tovuti chache. Wengi hawajawahi kutumia msaidizi wa AI kama mwalimu wala kutafuta video za kufundisha kwenye YouTube.",
    gap: "Kujifunza jambo jipya unalopenda kunaweka akili hai na kunaleta urafiki, lakini madarasa yanaweza kuwa ghali, mbali au ya haraka mno. Msaidizi wa AI unaweza kufundisha kwa kasi ya mwanafunzi, kumpima na kumpangia mpango, ikiwa pia atakagua mambo ya usalama na hatauamini kwa kumbukumbu za familia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa, rahisi",
      "Vifaa: simu, tableti au kompyuta yenye intaneti; skrini kubwa inasaidia kwa video",
      "Muda: kama dakika 5 kwa kila somo, na vipindi vifupi vya mazoezi kila siku",
      "Nguvu na afya hutofautiana; mipango lazima iruhusu vipindi vifupi na siku za kupumzika",
      "Faragha: usiweke taarifa binafsi za ndugu walio hai ndani ya AI"
    ],
    prerequisites: "Kozi \"AI kwa Wazee: Kutumia Wasaidizi wa AI\" inasaidia kuanza nayo, lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuuomba ukufundishe mada hatua kwa hatua, ukisema unachojua tayari na kuuomba usubiri useme \"next\" (endelea)", standard: "ukipata hatua ndogo unazoweza kufuata kwa kasi yako" },
    { id: "O2", condition: "Baada ya somo fupi", action: "kuuomba msaidizi ukupime kwa swali moja moja na ueleze tena chochote ulichokosea", standard: "ukijibu angalau maswali 2 kati ya 3 kwa maneno yako mwenyewe" },
    { id: "O3", condition: "Ukipewa jambo unalopenda au mada inayokuvutia", action: "kuomba mpango wa wiki mbili wa kujifunza unaofaa muda wako, vifaa vyako na nguvu zako", standard: "wenye lengo moja dogo kwa kila siku, umeandikwa kwenye kalenda au karatasi" },
    { id: "O4", condition: "Ukipewa ujuzi ambao ni rahisi kujifunza kwa kutazama", action: "kutafuta kwenye YouTube video ya kufundisha wanaoanza na kuruka matangazo na viungo vya kujisajili", standard: "ukichagua video iliyo wazi kwa wanaoanza" },
    { id: "O5", condition: "Ukipewa mradi wa jambo unalopenda kama bustani au kitabu cha picha", action: "kuomba orodha ya vifaa na hatua rahisi, na kukagua mambo ya usalama kwenye lebo au chanzo cha kuaminika", standard: "kabla ya kununua au kutumia kitu chochote chenye hatari" },
    { id: "O6", condition: "Ukipewa kumbukumbu ya familia", action: "kuandika hadithi fupi ya familia kwa sauti yako kwa msaada wa AI, ukitafuta kumbukumbu rasmi kwenye tovuti za kuaminika badala ya AI", standard: "bila taarifa binafsi za ndugu walio hai" }
  ],
  chapters: [
    {
      name: "Sura 1: AI kama mwalimu wako mvumilivu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuiomba AI ikufundishe, hatua moja kwa wakati",
          minutes: 5,
          goal: "Omba msaidizi wa AI ukufundishe mada kwa hatua ndogo, zilizo wazi, kwa kasi yako.",
          text: [
            "Msaidizi wa AI unaweza kuwa kama mwalimu mvumilivu. Utaeleza jambo mara nyingi kadiri unavyohitaji, kwa njia nyingi kadiri unavyohitaji, na hauchoki kamwe na maswali.",
            "Uambie unachotaka kujifunza, unachojua tayari, na jinsi unavyopenda kujifunza. Kwa mfano: \"Nataka kuanza kutazama ndege katika uwanja wangu. Mimi ni mwanzilishi kabisa. Nifundishe mambo matatu ya kwanza ya kujua, moja moja, kwa sentensi fupi. Subiri niseme 'next' kabla ya kuendelea.\"",
            "Kuuomba usubiri useme \"next\" (endelea) kunaweka kila hatua kuwa ndogo, ili uweze kuijaribu au kuifikiria kabla ya kuendelea."
          ],
          steps: ["Sema unachotaka kujifunza.", "Sema unachojua tayari, hata kama ni hakuna kitu.", "Omba hatua fupi na rahisi.", "Uombe usubiri useme \"next\" (endelea)."],
          words: [["Mwalimu binafsi", "mwalimu anayemsaidia mtu mmoja kujifunza kwa kasi yake mwenyewe."]],
          slides: [
            { title: "Mwalimu mvumilivu", bullets: ["Anaeleza mara nyingi kadiri unavyohitaji", "Hachoki na maswali"] },
            { title: "Uambie", bullets: ["Unachotaka kujifunza", "Unachojua tayari", "Jinsi unavyopenda kujifunza"] },
            { title: "Weka hatua ziwe ndogo", bullets: ["\"Nifundishe jambo moja kwa wakati.\"", "\"Subiri niseme 'next'.\""] }
          ],
          tryIt: "Chagua mada unayotamani kuijua. Omba msaidizi ukufundishe mambo matatu ya kwanza ya kujua, moja moja, ukisubiri useme \"next\". Pitia yote matatu.",
          youCanNow: "kuomba msaidizi wa AI ukufundishe mada kwa hatua ndogo kwa kasi yako mwenyewe.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini msaidizi wa AI unaweza kuwa mwalimu mzuri?", options: ["Unajua kila kitu kukuhusu", "Unaeleza tena mara nyingi na kwa njia nyingi kadiri unavyohitaji, bila kuchoka", "Unakupa alama kama shuleni", "Unafanya kazi kwa watoto tu"], answer: 1, why: "Somo linasema msaidizi ni kama mwalimu mvumilivu asiyechoka na maswali." },
            { objective: "O1", q: "Unataka kujifunza kupiga harmonika na hujawahi kujaribu. Unauambia msaidizi nini?", options: ["\"Harmonika.\"", "\"Niambie kila kitu kuhusu muziki.\"", "\"Mimi ni mwanzilishi kabisa. Nifundishe mambo matatu ya kwanza, moja moja. Subiri niseme next.\"", "\"Nipigie wimbo.\""], answer: 2, why: "Kusema unachojua na kuomba hatua ndogo zinazosubiri \"next\" kunaweka mafunzo kwenye kasi yako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujipima kwa maswali ili ukumbuke zaidi",
          minutes: 4,
          goal: "Omba msaidizi wa AI ukupime kuhusu ulichojifunza sasa hivi.",
          text: [
            "Tunakumbuka zaidi tunapojaribu kukumbuka jambo, si tunaposoma tena tu. Jaribio fupi ni mojawapo ya njia bora za kufanya mafunzo mapya yakae akilini.",
            "Baada ya somo, uliza: \"Nipime kwa maswali matatu rahisi kuhusu ulichonifundisha sasa hivi. Uliza moja moja na uniambie kama nimepata sawa.\" Jibu kwa maneno yako mwenyewe. Ukikosea moja, uombe ueleze tena kwa njia tofauti.",
            "Jaribu jaribio hilo hilo tena siku inayofuata. Mazoezi kidogo yaliyogawanywa kwa siku kadhaa yanafanya kazi vizuri kuliko mengi kwa mara moja."
          ],
          steps: ["Maliza somo fupi.", "Omba maswali matatu rahisi, moja moja.", "Jibu kwa maneno yako mwenyewe.", "Omba maelezo mapya ya chochote ulichokosea.", "Rudia jaribio kesho."],
          words: [["Kukumbuka", "kurudisha jambo akilini kutoka kwenye kumbukumbu."]],
          slides: [
            { title: "Maswali yanakusaidia kukumbuka", bullets: ["Kukumbuka ni bora kuliko kusoma tena", "Kwa ufupi na mara kwa mara ni bora"] },
            { title: "Omba jaribio", bullets: ["\"Nipime kwa maswali matatu rahisi.\"", "\"Moja moja; niambie kama nimepata sawa.\""] },
            { title: "Umekosea moja?", bullets: ["Omba maelezo ya njia tofauti", "Jaribu tena kesho"] }
          ],
          tryIt: "Omba msaidizi ukupime kwa maswali matatu kuhusu ulichofundishwa katika Somo la 1. Yajibu moja moja.",
          youCanNow: "kutumia AI kujipima kwa maswali na kukumbuka zaidi unachojifunza.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini jaribio fupi linakusaidia kujifunza?", options: ["Kujaribu kukumbuka jambo kunakusaidia kulikumbuka", "Linafanya somo kuwa refu zaidi", "Linakupa alama kwa kumbukumbu zako", "Linachukua nafasi ya mazoezi"], answer: 0, why: "Tunakumbuka zaidi tunapojaribu kukumbuka jambo, si tunaposoma tena tu." },
            { objective: "O2", q: "Umekosea swali moja kuhusu sauti za ndege. Unafanya nini?", options: ["Unaacha kujifunza mada hiyo", "Unaruka na kuendelea", "Unamkasirikia msaidizi", "Unauomba ueleze sehemu hiyo tena kwa njia tofauti"], answer: 3, why: "Omba maelezo mapya ya chochote ulichokosea, kisha jaribu tena." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza mpango rahisi wa kujifunza",
          minutes: 5,
          goal: "Omba msaidizi wa AI mpango mfupi wa kujifunza unaowezekana.",
          text: [
            "Mpango unageuza \"siku moja\" kuwa \"leo\". Omba msaidizi mpango wa wiki mbili wenye vipindi vifupi vinavyofaa nguvu zako na ratiba yako.",
            "Kwa mfano: \"Nitengenezee mpango wa wiki mbili wa kujifunza uchoraji wa msingi wa rangi za maji. Naweza kufanya mazoezi dakika 20 kwa siku, siku tano kwa wiki. Nina seti ndogo ya rangi na karatasi. Kila siku iwe na lengo moja dogo tu.\"",
            "Pitia mpango na ubadilishe chochote kisichokufaa. Uombe ufanye siku ziwe rahisi zaidi, fupi zaidi, au uongeze siku za kupumzika. Kisha andika mpango kwenye kalenda yako au kwenye karatasi karibu na kiti chako."
          ],
          steps: ["Sema unachotaka kujifunza na kwa muda gani.", "Sema dakika ngapi na siku ngapi unaweza kufanya mazoezi.", "Sema vifaa ulivyo navyo tayari.", "Omba lengo moja dogo kwa kila siku.", "Rekebisha mpango, kisha uandike."],
          words: [["Mpango wa kujifunza", "orodha ya cha kufanyia mazoezi kila siku ili kufikia lengo."]],
          slides: [
            { title: "Kutoka siku moja hadi leo", bullets: ["Mpango mfupi unaowezekana", "Lengo moja dogo kila siku"] },
            { title: "Uambie msaidizi", bullets: ["Nini na kwa muda gani", "Dakika na siku unazoweza kufanya mazoezi", "Vifaa ulivyo navyo tayari"] },
            { title: "Ufanye ukufae", bullets: ["Omba siku rahisi au fupi zaidi", "Ongeza siku za kupumzika", "Uandike kwenye kalenda yako"] }
          ],
          tryIt: "Omba msaidizi mpango wa wiki mbili wa kujifunza mada yako, wenye lengo moja dogo kwa siku na muda unaoweza kutoa. Fanya badiliko moja ili ukufae zaidi, kisha andika siku tatu za kwanza.",
          youCanNow: "kutengeneza kwa AI mpango wa kujifunza unaowezekana, unaofaa muda wako na nguvu zako.",
          quickCheck: [
            { objective: "O3", q: "Mpango mzuri wa kujifunza unapaswa kuwa na nini kila siku?", options: ["Saa kadhaa za mazoezi", "Lengo moja dogo linalofaa muda wako", "Mtihani", "Jambo jipya la kupenda"], answer: 1, why: "Lengo moja dogo kwa siku linageuza \"siku moja\" kuwa \"leo\"." },
            { objective: "O3", q: "Mpango ambao AI ilikupa unakuchosha sana. Unafanya nini?", options: ["Unaacha jambo hilo unalopenda", "Unaufuata hivyo hivyo", "Unauomba ufanye siku ziwe fupi zaidi au uongeze siku za kupumzika", "Unaanza jambo jipya"], answer: 2, why: "Unaweza kuomba msaidizi ubadilishe mpango ili ufae nguvu zako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI kama mwalimu wako mvumilivu",
        questions: [
          { objective: "O1", q: "Kwa nini uombe msaidizi usubiri useme \"next\"?", options: ["Ili uache kufanya kazi", "Ili uwe wa haraka zaidi", "Ili kila hatua ibaki ndogo na uweze kuifikiria", "Inahitajika ili kuingia"], answer: 2, why: "Hatua ndogo kwa kasi yako ni rahisi zaidi kujifunza." },
          { objective: "O1", q: "Unapaswa kuuambia msaidizi nini unapotaka kujifunza kitu?", options: ["Unachotaka kujifunza, unachojua, na jinsi unavyopenda kujifunza", "Namba yako ya benki", "Neno moja tu", "Nywila yako"], answer: 0, why: "Maelezo haya yanausaidia kufundisha kwa kiwango sahihi." },
          { objective: "O2", q: "Ni nini kinakusaidia kukumbuka zaidi?", options: ["Kusoma ukurasa ule ule mara kumi", "Kujifunza kila kitu kwa siku moja", "Kutofanya mazoezi kamwe", "Kujibu jaribio fupi"], answer: 3, why: "Kukumbuka majibu kunafanya mafunzo yakae akilini." },
          { objective: "O2", q: "Umekosea swali la jaribio. Hatua nzuri inayofuata ni ipi?", options: ["Kuacha jambo unalopenda", "Kuuomba ueleze tena kwa njia tofauti", "Kufuta app", "Kuruka mada hiyo milele"], answer: 1, why: "Maelezo mapya mara nyingi yanakufanya uelewe." },
          { objective: "O3", q: "Mpango mzuri wa kujifunza una:", options: ["Saa kumi za kazi kwa siku", "Lengo moja dogo kwa siku linalofaa muda wako", "Hakuna siku kabisa", "Malengo makubwa tu"], answer: 1, why: "Malengo madogo yanayowezekana yanakufanya uendelee." }
        ]
      }
    },
    {
      name: "Sura 2: Kufurahia mambo unayopenda kwa AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata video nzuri za kufundisha",
          minutes: 5,
          goal: "Tafuta video ya kufundisha yenye msaada na uamue kama ni nzuri.",
          text: [
            "Ujuzi mwingine ni rahisi kujifunza kwa kutazama: mshono wa kufuma, kupogoa mawaridi, au kidole cha gitaa (chord). YouTube ina video za bure za kufundisha karibu kila jambo unalopenda.",
            "Kwanza omba msaidizi wa AI maneno mazuri ya kutafuta: \"Nitafute nini kwenye YouTube ili kujifunza mshono wa kufuma kwa wanaoanza?\" Kisha fungua YouTube, gusa kisanduku cha kutafuta (kioo cha kukuza), na uandike maneno hayo. Tafuta video zilizotengenezwa kwa wanaoanza, zenye vichwa vilivyo wazi na maoni yenye msaada.",
            "Unaweza kusimamisha, kurudi nyuma na kutazama tena mara nyingi upendavyo. Kuwa mwangalifu na matangazo na viungo vilivyo kwenye maelezo ya video vinavyokuomba ununue vitu au ujisajili; huvihitaji ili kujifunza."
          ],
          steps: ["Omba AI maneno mazuri ya kutafuta.", "Fungua YouTube na uguse kioo cha kukuza.", "Andika maneno na utafute video za wanaoanza.", "Simamisha na urudie mara nyingi kadiri unavyohitaji.", "Ruka matangazo na viungo vinavyokuomba ununue au ujisajili."],
          words: [["YouTube", "tovuti na app ya bure yenye video kuhusu karibu kila somo."], ["Kisanduku cha kutafuta", "mahali unapoandika maneno ili kupata kitu; mara nyingi kinaonyeshwa na kioo cha kukuza."]],
          slides: [
            { title: "Jifunze kwa kutazama", bullets: ["Kufuma, bustani, muziki na mengine", "Bure kwenye YouTube"] },
            { title: "Pata video nzuri", bullets: ["Omba AI maneno ya kutafuta", "Gusa kioo cha kukuza na uandike", "Chagua video za wanaoanza"] },
            { title: "Tazama kwa njia yako", bullets: ["Simamisha na urudie", "Ruka matangazo na viungo vya \"nunua sasa\""] }
          ],
          tryIt: "Uliza msaidizi wa AI utafute nini kwenye YouTube kwa siku ya kwanza ya mpango wako wa kujifunza. Itafute, tazama video moja ya wanaoanza, na uisimamishe angalau mara moja ili kujaribu hatua.",
          youCanNow: "kupata video ya wanaoanza yenye msaada na kujifunza kutoka kwayo kwa kasi yako mwenyewe.",
          quickCheck: [
            { objective: "O4", q: "Kioo cha kukuza kwenye YouTube kinafanya nini?", options: ["Kinakuza video", "Kinafungua kisanduku cha kutafuta", "Kinaongeza sauti", "Kinanunua video"], answer: 1, why: "Kioo cha kukuza ni kitufe cha kutafuta ambapo unaandika maneno yako." },
            { objective: "O4", q: "Video ya kufuma inaonyesha kiungo cha \"nunua kozi kamili\". Unafanya nini?", options: ["Unakiruka; hukihitaji ili kujifunza", "Unanunua mara moja", "Unaweka namba ya kadi yako ili kuona zaidi", "Unaacha kutazama video"], answer: 0, why: "Matangazo na viungo vinavyokuomba ununue au ujisajili havihitajiki ili kujifunza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutumia AI kwa mradi wa jambo unalopenda",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kupanga mradi halisi wa jambo unalopenda kuanzia mwanzo hadi mwisho.",
          text: [
            "AI inaweza kukusaidia kupanga mradi: bustani ndogo ya mboga, kitabu cha picha kwa siku ya kuzaliwa ya mjukuu, kitabu cha mapishi ya familia, au kiota cha ndege.",
            "Eleza mradi na uombe orodha ya vifaa na hatua: \"Nisaidie kutengeneza kitabu kidogo cha picha cha mwaka wa kwanza wa mjukuu wangu wa kike. Orodhesha vifaa na hatua. Iwe rahisi.\" Kwa bustani, ongeza eneo lako na msimu: \"Ninaishi Ohio na nina baraza lenye jua. Ni mboga gani tatu rahisi za kupanda kwenye vyungu msimu huu wa machipuko?\"",
            "Kwa jambo lolote la usalama, kama zana, kemikali au mimea inayoweza kudhuru wanyama vipenzi, kagua lebo au chanzo cha kuaminika kama duka la bustani la karibu au maktaba."
          ],
          steps: ["Eleza mradi na ni wa nani.", "Ongeza eneo lako, msimu au nafasi ikiwa ni muhimu.", "Omba orodha ya vifaa na hatua rahisi.", "Kagua mambo ya usalama kwenye lebo au chanzo cha kuaminika."],
          words: [["Orodha ya vifaa", "vitu unavyohitaji kukusanya kabla ya kuanza mradi."]],
          slides: [
            { title: "Panga mradi halisi", bullets: ["Bustani, kitabu cha picha, kitabu cha mapishi, kiota cha ndege"] },
            { title: "Omba", bullets: ["Orodha ya vifaa", "Hatua rahisi", "Mawazo yanayofaa eneo lako na msimu"] },
            { title: "Kaa salama", bullets: ["Kagua lebo za zana na kemikali", "Uliza duka la bustani au maktaba"] }
          ],
          tryIt: "Chagua mradi mdogo unaohusiana na mada yako. Omba msaidizi orodha ya vifaa na hatua rahisi, na uzungushie duara vifaa ulivyo navyo tayari.",
          youCanNow: "kupanga mradi wa jambo unalopenda kwa AI, kuanzia vifaa hadi hatua.",
          quickCheck: [
            { objective: "O5", q: "Orodha ya vifaa ni nini?", options: ["Orodha ya maduka yaliyo karibu nawe", "Risiti ya ununuzi", "Orodha ya marafiki wanaoweza kusaidia", "Vitu unavyohitaji kabla ya kuanza mradi"], answer: 3, why: "Orodha ya vifaa inaonyesha unachohitaji kabla ya kuanza." },
            { objective: "O5", q: "AI inapendekeza mmea kwa baraza lako, na una paka. Unafanya nini?", options: ["Unaununua mara moja", "Unauliza AI kama ina uhakika", "Unakagua kwa duka la bustani au lebo ya mmea kama ni salama kwa wanyama vipenzi", "Unapuuza swali"], answer: 2, why: "Mambo ya usalama, kama mimea inayoweza kudhuru wanyama vipenzi, yanakaguliwa kwenye lebo au chanzo cha kuaminika." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuchunguza historia na hadithi za familia",
          minutes: 5,
          goal: "Tumia AI kukusaidia kuandika hadithi ya familia ili uishiriki na wengine.",
          text: [
            "Wazee wengi wanapenda kuchunguza historia ya familia na kuwarithisha wajukuu hadithi. AI inaweza kukusaidia kugeuza kumbukumbu kuwa hadithi fupi ambayo wengine watafurahia.",
            "Iambie kumbukumbu kwa maneno yako mwenyewe: \"Baba yangu aliendesha duka la mikate Chicago miaka ya 1950. Nilimsaidia siku za Jumamosi. Nisaidie kuandika hii kama hadithi ya ukurasa mmoja kwa wajukuu wangu, kwa sauti yangu.\" Kisha fanya mabadiliko ili isikike kama wewe.",
            "AI haijui historia halisi ya familia yako, kwa hiyo usiiombe ijaze ukweli kuhusu mababu zako; inaweza kubuni. Kwa kumbukumbu rasmi, tovuti kama FamilySearch (bure) au dawati la msaada wa nasaba katika maktaba ya karibu ni mahali bora pa kutafuta. Usiweke taarifa binafsi za ndugu walio hai ndani ya AI."
          ],
          steps: ["Iambie AI kumbukumbu kwa maneno yako mwenyewe.", "Omba hadithi ya ukurasa mmoja kwa sauti yako.", "Badilisha chochote kisichosikika kama wewe.", "Tafuta kumbukumbu rasmi kwenye tovuti za kuaminika, si kwenye AI.", "Shiriki hadithi na familia."],
          words: [["Nasaba", "somo la historia ya familia na mababu."], ["Babu wa zamani", "mtu wa familia wa zamani sana, kama babu au bibi wa babu yako."]],
          slides: [
            { title: "Geuza kumbukumbu kuwa hadithi", bullets: ["Iambie AI kumbukumbu kwa maneno yako", "Omba hadithi fupi kwa sauti yako"] },
            { title: "Ukweli unatoka kwenye kumbukumbu rasmi", bullets: ["AI inaweza kubuni mambo ya familia", "Jaribu FamilySearch au maktaba yako"] },
            { title: "Ishiriki", bullets: ["Usiweke taarifa binafsi za ndugu walio hai", "Isome kwa sauti kwa wajukuu"] }
          ],
          tryIt: "Kazi ya mwisho: chagua jambo moja unalopenda au mada moja, omba msaidizi wa AI mpango wa wiki mbili, uache ukufundishe somo la kwanza hatua kwa hatua, uache ukupime kwa maswali matatu, na uandike jambo moja utakalofanyia mazoezi kesho.",
          youCanNow: "kutumia AI kujifunza, kupanga miradi ya mambo unayopenda na kuandika hadithi za familia.",
          quickCheck: [
            { objective: "O6", q: "Nasaba ni nini?", options: ["Somo la historia ya familia", "Aina ya bustani", "Mtindo wa uchoraji", "App ya video"], answer: 0, why: "Nasaba ni somo la historia ya familia." },
            { objective: "O6", q: "Unataka kujua bibi wa babu yako alizaliwa wapi. Unatafuta wapi?", options: ["Kuiomba AI ijaze", "Kukisia na kuandika kwenye hadithi", "Kuweka taarifa za ndugu zako mtandaoni", "FamilySearch au dawati la msaada wa nasaba la maktaba yako"], answer: 3, why: "AI inaweza kubuni mambo ya familia; kumbukumbu halisi ziko kwenye tovuti za kuaminika au maktaba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufurahia mambo unayopenda kwa AI",
        questions: [
          { objective: "O4", q: "AI inawezaje kukusaidia kupata video nzuri ya kufundisha?", options: ["Inafuta matangazo", "Inarekodi video", "Inailipia", "Inapendekeza maneno mazuri ya kutafuta"], answer: 3, why: "Maneno mazuri ya kutafuta yanaleta video bora." },
          { objective: "O4", q: "Kiungo kwenye maelezo ya video kinasema \"Nunua kozi kamili sasa\". Unakihitaji ili kujifunza?", options: ["Hapana, unaweza kukiruka", "Ndiyo, kila mara", "Ndiyo, ni lazima", "Mwishoni mwa wiki tu"], answer: 0, why: "Video za bure zinafundisha mengi; huhitaji kununua." },
          { objective: "O5", q: "Kwa mpango wa bustani ya mboga, unapaswa kuiambia AI nini?", options: ["Nywila yako", "Namba yako ya benki", "Eneo lako, msimu na nafasi", "Hakuna kitu"], answer: 2, why: "Eneo, msimu na nafasi vinaathiri kinachoota vizuri." },
          { objective: "O5", q: "AI inapendekeza dawa ya kunyunyizia bustani. Unakaguaje kama ni salama?", options: ["Kuiamini AI", "Kumuuliza mgeni", "Kunyunyizia zaidi", "Kusoma lebo au kuuliza duka la bustani"], answer: 3, why: "Mambo ya usalama yanapaswa kutoka kwenye lebo au vyanzo vya kuaminika." },
          { objective: "O6", q: "Kwa nini usiombe AI ukweli kuhusu babu na bibi za wazazi wako?", options: ["Inagharimu pesa", "Ni polepole mno", "Inaweza kuubuni", "Inaongea Kifaransa tu"], answer: 2, why: "AI haijui historia ya familia yako; kumbukumbu rasmi zinaijua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kujifunza na Mambo ya Kupenda",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI unaweza kuwa kama:", options: ["Daktari wako", "Mwalimu mvumilivu", "Benki yako", "Mfamasia"], answer: 1, why: "Unaeleza mambo mara nyingi kadiri unavyohitaji." },
      { objective: "O1", q: "Ombi lipi litakufundisha vizuri zaidi?", options: ["\"Mimi ni mwanzilishi. Nifundishe mambo matatu kuhusu ndege wa uwanjani, moja moja.\"", "\"ndege\"", "\"fundisha\"", "\"kila kitu\""], answer: 0, why: "Linasema mada, kiwango chako na kasi." },
      { objective: "O1", q: "Kusema \"subiri niseme next\" kunasaidia kwa:", options: ["Kuweka kila hatua ndogo", "Kuongeza sauti", "Kuzima kifaa", "Kulipa kidogo"], answer: 0, why: "Hatua ndogo zinakuruhusu kufikiri kabla ya kuendelea." },
      { objective: "O1", q: "Mwalimu binafsi ni:", options: ["Aina ya simu", "Mwalimu anayemsaidia mtu mmoja kwa kasi yake", "Mwisho wa jina la tovuti", "Video"], answer: 1, why: "Walimu binafsi wanafundisha mtu mmoja kwa wakati." },
      { objective: "O2", q: "Ni nini kinakusaidia kukumbuka mafunzo mapya?", options: ["Kujifunza yote kwa usiku mmoja", "Kutorudia kamwe", "Kujipima kwa maswali", "Kuruka mazoezi"], answer: 2, why: "Kukumbuka majibu kunaimarisha kumbukumbu." },
      { objective: "O2", q: "AI inapaswa kukupima vipi?", options: ["Bila kukuambia matokeo", "Maswali hamsini kwa mara moja", "Maswali magumu tu", "Swali moja kwa wakati na kukuambia kama umepata sawa"], answer: 3, why: "Moja kwa wakati na kuambiwa matokeo ni rahisi zaidi." },
      { objective: "O2", q: "Mazoezi yanafanya kazi vizuri zaidi yakiwa:", options: ["Mara moja kwa mwaka", "Yote kwa mara moja", "Mafupi na yaliyogawanywa kwa siku kadhaa", "Wakati umechoka tu"], answer: 2, why: "Mazoezi yaliyogawanywa yanasaidia kumbukumbu." },
      { objective: "O3", q: "Mpango mzuri wa kujifunza una:", options: ["Lengo moja dogo kila siku", "Hakuna malengo", "Saa nyingi za mazoezi kila siku", "Mtihani wa mwisho tu"], answer: 0, why: "Malengo madogo ya kila siku yanawezekana." },
      { objective: "O3", q: "Mpango ukionekana mgumu sana, unaweza:", options: ["Kufuta mpango", "Kuacha", "Kuufanya wote hivyo hivyo", "Kuiomba AI ifanye siku ziwe rahisi au iongeze siku za kupumzika"], answer: 3, why: "Mipango inapaswa kukufaa wewe." },
      { objective: "O3", q: "Unapaswa kuiambia AI nini unapoomba mpango?", options: ["Nywila yako", "Dakika na siku unazoweza kufanya mazoezi", "Namba yako ya benki", "Namba yako ya Medicare"], answer: 1, why: "Muda ulio nao unaunda mpango." },
      { objective: "O4", q: "Kioo cha kukuza kwenye YouTube ni:", options: ["Sauti", "Kitufe cha kutafuta", "Kitufe cha kuwasha", "Kamera"], answer: 1, why: "Kinafungua kisanduku cha kutafuta." },
      { objective: "O4", q: "Unapotazama video ya kufundisha unaweza:", options: ["Kutorudi nyuma", "Kutazama mara moja tu", "Kutoisimamisha", "Kusimamisha na kurudia mara nyingi upendavyo"], answer: 3, why: "Kusimamisha kunakuruhusu kujaribu kila hatua." },
      { objective: "O4", q: "Matangazo yanayokuomba ujisajili au ununue:", options: ["Hayahitajiki ili kujifunza", "Ni lazima", "Yanatoka serikalini", "Ni sehemu ya somo"], answer: 0, why: "Unaweza kujifunza bila hayo." },
      { objective: "O5", q: "Kwa mradi wa jambo unalopenda, AI inaweza kukupa:", options: ["Salio lako la benki", "Vifaa vyenyewe", "Orodha ya vifaa na hatua rahisi", "Barua ya daktari"], answer: 2, why: "Inaweza kupanga; wewe unakusanya na kufanya." },
      { objective: "O5", q: "Orodha ya vifaa ni:", options: ["Namba ya simu", "Risiti ya duka la vyakula", "Nywila", "Vitu unavyohitaji kabla ya kuanza"], answer: 3, why: "Inaorodhesha cha kukusanya." },
      { objective: "O5", q: "Mambo ya usalama kuhusu zana au kemikali yanapaswa kukaguliwa:", options: ["Kamwe", "Kwa AI tu", "Kwenye lebo au kwa chanzo cha kuaminika", "Kwa mgeni"], answer: 2, why: "Lebo na wataalamu wanaaminika." },
      { objective: "O6", q: "Nasaba ni:", options: ["Mmea wa bustani", "Somo la historia ya familia", "App ya simu", "Aina ya rangi"], answer: 1, why: "Nasaba inafuatilia mababu." },
      { objective: "O6", q: "AI inaweza kukusaidia na hadithi ya familia kwa:", options: ["Kugeuza kumbukumbu yako kuwa hadithi fupi kwa sauti yako", "Kujua siku za kuzaliwa za mababu zako", "Kutafuta anwani za ndugu zako", "Kutia sahihi hati"], answer: 0, why: "Inapanga maneno yako; wewe unaleta kumbukumbu." },
      { objective: "O6", q: "Unapaswa kutafuta wapi kumbukumbu halisi za familia?", options: ["FamilySearch au msaada wa nasaba wa maktaba yako", "Kwa AI tu", "Tangazo linalojitokeza ghafla", "Uvumi wa mitandao ya kijamii"], answer: 0, why: "Kumbukumbu zinatoka kwenye vyanzo vya kuaminika vya kumbukumbu." },
      { objective: "O6", q: "Unapaswa kuzuia nini kisiingie kwenye AI unapoandika hadithi za familia?", options: ["Rangi unayoipenda", "Taarifa binafsi za ndugu walio hai", "Jina la mnyama kipenzi", "Msimu"], answer: 1, why: "Taarifa binafsi za ndugu walio hai zinastahili kulindwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      7,
      10,
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
        name: "Mpango wa wiki mbili",
        objective: "O3",
        notYet: "Hakuna mpango, au mpango usiofaa muda wako au vifaa vyako.",
        meets: "Mpango wa wiki mbili wenye vipindi vifupi vya kila siku na lengo moja dogo kila siku.",
        exceeds: "Alirekebisha mpango kuongeza siku za kupumzika au siku rahisi, na akauandika."
      },
      {
        name: "Somo la kwanza hatua kwa hatua",
        objective: "O1",
        notYet: "Aliomba kila kitu kwa mara moja.",
        meets: "Aliomba msaidizi ufundishe somo la kwanza hatua kwa hatua kwa kasi yake.",
        exceeds: "Alisema anachojua tayari ili hatua zianze kwenye kiwango sahihi."
      },
      {
        name: "Alijipima kwa maswali",
        objective: "O2",
        notYet: "Aliruka jaribio.",
        meets: "Alijibu maswali matatu ya jaribio, moja moja, kwa maneno yake mwenyewe.",
        exceeds: "Aliomba maelezo mapya ya chochote alichokosea na akajaribu tena."
      },
      {
        name: "Mazoezi yanayofuata",
        objective: "O3",
        notYet: "Hakuna kilichoandikwa kwa ajili ya kesho.",
        meets: "Aliandika jambo moja la kufanyia mazoezi kesho.",
        exceeds: "Alichagua muda wake na akauweka kwenye kalenda yake."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wanafunzi ambao bado wanafanya mazoezi ya jambo wanalopenda katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaoshiriki mradi au hadithi ya familia na familia au kikundi",
      "Wanafunzi wanaoanza kozi nyingine ya Wazee na Teknolojia ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja, tableti au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini) na YouTube",
      "Karatasi na kalamu, au kalenda, kwa ajili ya mpango wa kujifunza",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya utulivu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwombe kila mwanafunzi achague jambo analolipenda kabla ya kipindi cha kwanza; linamfanya awe na hamasa.",
      "Onyesha YouTube kwenye skrini kubwa na uonyeshe matangazo na viungo vya kujisajili kabla wanafunzi hawajatafuta peke yao.",
      "Wakumbushe wanafunzi kukagua mambo ya usalama kuhusu zana, kemikali na mimea kwenye lebo au kwa duka la bustani.",
      "Kwa hadithi za familia, wakumbushe wanafunzi kwamba AI inaweza kubuni mambo ya familia na kwamba wanapaswa kulinda taarifa za ndugu walio hai.",
      "Pima kazi ya mwisho kwa rubriki, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
