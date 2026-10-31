"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-for-seniors.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-for-seniors-sw",
  lang: "sw",
  translationOf: "seniors-ai-for-seniors",
  category: "Seniors and Technology",
  name: "AI kwa Wazee: Kutumia Wasaidizi wa AI",
  skills: "Kufungua msaidizi wa AI wa bure, Kuandika au kusema swali, Kuomba majibu rahisi zaidi, Kukagua anachosema, Kulinda taarifa zako binafsi",
  outcome: "kufungua msaidizi wa AI wa bure kwenye simu, tableti au kompyuta yako, kumuuliza swali lililo wazi kwa kuandika au kwa kuongea, kumwomba aeleze kwa urahisi zaidi, na kukagua jibu kabla ya kulifanyia kazi.",
  about: [
    "Kozi hii ni kwa wazee ambao wamesikia kuhusu wasaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini na wanataka kujaribu mmoja, polepole na kwa usalama. Huhitaji uzoefu wowote.",
    "Utafungua msaidizi, utamuuliza maswali halisi kuhusu mambo ya maisha yako, kama mapishi, barua kutoka ofisi ya daktari au ujumbe wa siku ya kuzaliwa kwa mjukuu, na utajifunza kufanya majibu yake yawe wazi zaidi.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwa mwendo wako mwenyewe. Jaribio fupi la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Unaweza kurudia somo lolote mara nyingi kadiri unavyotaka."
  ],
  finalTask: "Tumia msaidizi wa AI kupanga mlo rahisi wa familia: omba mapishi rahisi kwa watu wanne, mwombe aweke hatua katika mistari mifupi yenye namba, uliza swali moja la kufuatilia, na ukague ukweli mmoja (kama joto la kupikia) kwenye tovuti unayoiamini au kwa mtu unayemwamini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee, mara nyingi waliostaafu, wanaotaka kutumia wasaidizi wapya wa AI kwa msaada wa kila siku: kadi na barua kwa familia, mambo wanayopenda kufanya, kueleza mambo na kutengeneza orodha. Baadhi wanaishi peke yao; wengi wana wajukuu wanaotumia zana hizi.",
    startingPoint: "Wanaweza kupiga simu na kutuma ujumbe mfupi, na wengi wanatumia barua pepe au tableti. Wengi hawajawahi kutumia msaidizi wa AI, na baadhi hawajiamini na apps, maandishi madogo au kuandika kwenye skrini.",
    gap: "Wasaidizi wa AI wanaweza kuokoa muda na kuwasaidia wazee kuendelea kuwasiliana na kujitegemea, lakini wazee pia wanalengwa na walaghai na wanaweza kupotoshwa na majibu yasiyo sahihi kuhusu afya au pesa. Wanahitaji kufungua msaidizi, kuuliza kwa uwazi, kufanya majibu yasomeke kwa urahisi, kukagua ukweli na kulinda taarifa binafsi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu, tableti au kompyuta; skrini ndogo na maandishi madogo yanaweza kuwa magumu kusoma",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa taratibu, pamoja na muda wa kufanya mazoezi",
      "Majibu kuhusu afya, dawa na pesa lazima yakaguliwe na daktari, mfamasia au chanzo rasmi",
      "Hatari kubwa ya ulaghai: hakuna namba za Social Security, Medicare, benki wala nywila katika prompt yoyote"
    ],
    prerequisites: "Hakuna. Wanafunzi wasiozoea skrini za kugusa wanaweza kumwomba mwanafamilia au msaidizi wa maktaba akae nao mara ya kwanza."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za kila siku", action: "kutambua kazi ambazo msaidizi wa AI anaweza kusaidia na zipi zinahitaji daktari, benki au mtu mwingine", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia simu, tableti au kompyuta yako", action: "kufungua msaidizi wa AI wa bure kutoka duka rasmi la apps au tovuti yake rasmi na kupata kisanduku cha ujumbe au kipaza sauti", standard: "bila msaada" },
    { id: "O3", condition: "Ukipewa hitaji halisi kutoka maisha yako", action: "kuandika au kusema prompt inayoeleza unachohitaji, hali yako na jinsi unavyotaka jibu", standard: "ili jibu la kwanza liwe na manufaa" },
    { id: "O4", condition: "Ukipewa jibu refu mno au gumu kusoma", action: "kuomba mabadiliko kwa maombi ya kufuatilia, moja baada ya jingine, ili liwe rahisi au fupi zaidi", standard: "hadi liwe rahisi kwako kusoma na kutumia" },
    { id: "O5", condition: "Ukipewa jibu la AI kuhusu afya, pesa, namba ya simu au tarehe", action: "kukagua ukweli huo kwenye tovuti rasmi, kwa daktari au mfamasia wako, au kwa mtu unayemwamini", standard: "kabla ya kulifanyia kazi" },
    { id: "O6", condition: "Unapoandika prompt au unapopokea simu au ujumbe wa haraka", action: "kuzuia taarifa binafsi zisiingie na kutambua dalili za hatari za ulaghai", standard: "bila kutoa namba za binafsi, nywila wala misimbo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kumfahamu msaidizi wako wa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Msaidizi wa AI ni nini",
          minutes: 4,
          goal: "Eleza kwa maneno yako mwenyewe kile msaidizi wa AI anachoweza na asichoweza kukufanyia.",
          text: [
            "Msaidizi wa AI ni programu ya kompyuta unayoweza kuongea nayo au kuiandikia kwa maneno ya kawaida, kana kwamba unamwandikia jirani mwema barua fupi. Unauliza swali, na baada ya sekunde chache inaandika jibu.",
            "Wasaidizi wa bure wanaojulikana ni pamoja na ChatGPT, Microsoft Copilot na Google Gemini. Ni hodari wa kueleza mambo kwa urahisi, kuandika rasimu ya kwanza ya kadi au barua, kutoa mawazo kwa jambo unalopenda kufanya, na kutengeneza orodha.",
            "Msaidizi si mtu, na si daktari, wakili wala benki yako. Haukujui, na unaweza kukosea hata unaposikika kuwa na uhakika sana. Wewe ndiye kiongozi: wewe unaamua cha kuuliza na cha kuamini."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu za kompyuta zinazoweza kufanya kazi kama kuandika au kujibu maswali."], ["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea."]],
          slides: [
            { title: "Msaidizi wa AI ni...", bullets: ["Programu ya kompyuta unayozungumza nayo", "Unauliza kwa maneno ya kawaida", "Inaandika jibu kwa sekunde chache"] },
            { title: "Inaweza kukusaidia", bullets: ["Kueleza neno gumu au barua kwa urahisi", "Kuandika rasimu ya kadi ya siku ya kuzaliwa au ya shukrani", "Kutoa mawazo ya mapishi, mambo unayopenda na safari"] },
            { title: "SI", bullets: ["Daktari, wakili au benki yako", "Sahihi kila wakati, hata unaposikika na uhakika", "Kiongozi: kiongozi ni wewe"] }
          ],
          tryIt: "Kwenye kipande cha karatasi, andika vitu vitatu ambavyo msaidizi wa AI anaweza kukusaidia mwezi huu, kwa mfano kadi kwa mjukuu, swali kuhusu mmea wa bustanini, au mapishi.",
          youCanNow: "kusema msaidizi wa AI ni nini, kutaja njia tatu anazoweza kukusaidia, na kueleza kwa nini bado unakagua anachosema.",
          quickCheck: [
            { objective: "O1", q: "Msaidizi wa AI ni hodari wa kazi gani?", options: ["Kuandika rasimu ya kwanza ya kadi ya siku ya kuzaliwa", "Kukupa majibu ya kipimo chako cha damu", "Kuhamisha pesa kutoka benki yako", "Kwenda kwa daktari kwa niaba yako"], answer: 0, why: "Wasaidizi ni hodari wa rasimu, mawazo na orodha; si daktari wala benki yako." },
            { objective: "O1", q: "Msaidizi wa AI anasikika na uhakika sana kuhusu sheria ya mafao yako. Unafanya nini?", options: ["Unamwamini kwa sababu anasikika na uhakika", "Unakumbuka kwamba anaweza kukosea, na unakagua na ofisi husika", "Unawaambia marafiki zako mara moja", "Unamwomba aahidi kwamba yuko sahihi"], answer: 1, why: "Wasaidizi wanaweza kukosea hata wanaposikika na uhakika, na wewe ndiye unaamua cha kuamini." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufungua msaidizi kwenye simu, tableti au kompyuta yako",
          minutes: 6,
          goal: "Fungua msaidizi wa AI wa bure na upate kisanduku unachoandikia au kuongea.",
          text: [
            "Unaweza kutumia msaidizi kwenye simu janja, tableti au kompyuta. Chagua kifaa unachostarehe nacho zaidi. Mjukuu, rafiki au msaidizi wa maktaba anaweza kukaa nawe mara ya kwanza.",
            "Kwenye simu au tableti: fungua duka la apps (Play Store kwenye Android, App Store kwenye iPhone na iPad). Gusa kisanduku cha kutafuta, andika jina la msaidizi, na usakinishe app iliyotengenezwa na kampuni halisi: OpenAI kwa ChatGPT, Microsoft kwa Copilot, Google kwa Gemini.",
            "Kwenye kompyuta: fungua kivinjari chako cha wavuti na uandike anwani kwa makini, kwa mfano chatgpt.com, copilot.microsoft.com au gemini.google.com. Baadhi zinakuruhusu kuanza bila akaunti; nyingine zinakuomba uingie (sign in).",
            "Tafuta kisanduku cha ujumbe, kwa kawaida karibu na chini ya skrini. Mara nyingi kinasema \"Ask anything\" au \"Message\". Apps nyingi pia zinaonyesha kipaza sauti kidogo unachoweza kugusa ili kuongea badala ya kuandika."
          ],
          steps: ["Chagua simu, tableti au kompyuta yako.", "Simu au tableti: sakinisha app rasmi kutoka duka la apps. Kompyuta: andika anwani ya tovuti kwenye kivinjari.", "Tafuta kisanduku cha ujumbe karibu na chini ya skrini.", "Tafuta kitufe cha kipaza sauti kama ungependa kuongea."],
          words: [["Duka la apps", "mahali rasmi kwenye simu au tableti pa kupata apps kwa usalama."], ["Kivinjari cha wavuti", "programu unayotumia kutembelea tovuti, kama Chrome, Edge au Safari."], ["Kitufe cha kipaza sauti", "picha ndogo ya kipaza sauti (microphone) unayogusa ili kuongea badala ya kuandika."]],
          slides: [
            { title: "Tumia kifaa unachostarehe nacho", bullets: ["Simu janja, tableti au kompyuta", "Mwombe mwanafamilia au mtunza maktaba akae nawe"] },
            { title: "Kwenye simu au tableti", bullets: ["Fungua duka rasmi la apps", "Tafuta jina la msaidizi", "Sakinisha app ya kampuni halisi"] },
            { title: "Kwenye kompyuta", bullets: ["Fungua kivinjari cha wavuti", "Andika chatgpt.com, copilot.microsoft.com au gemini.google.com", "Andika anwani kwa makini"] },
            { title: "Pata mahali pa kuzungumza", bullets: ["Kisanduku cha ujumbe karibu na chini", "Huenda kinasema \"Ask anything\"", "Kitufe cha kipaza sauti kinakuruhusu kuongea"] }
          ],
          tryIt: "Fungua msaidizi mmoja wa bure. Tafuta kisanduku cha ujumbe na uandike, au useme: Habari, mimi ni mgeni katika hili. Tafadhali jibu kwa sentensi fupi na rahisi. Soma jibu lake.",
          youCanNow: "kufungua msaidizi wa AI wa bure na kupata mahali pa kuandika au kusema swali lako.",
          quickCheck: [
            { objective: "O2", q: "Nani anatengeneza app halisi ya Microsoft Copilot?", options: ["Kampuni yoyote yenye jina linalofanana", "Google", "Microsoft", "OpenAI"], answer: 2, why: "Sakinisha app iliyotengenezwa na kampuni halisi: Microsoft kwa Copilot." },
            { objective: "O2", q: "Kuandika kwenye simu yako ni kugumu kwako. Unatafuta nini kwenye app ya msaidizi?", options: ["Alama ya betri", "Kitufe cha kamera", "Gia ya mipangilio", "Kipaza sauti kidogo unachoweza kugusa ili kuongea"], answer: 3, why: "Apps nyingi zinaonyesha kipaza sauti ili uweze kuongea badala ya kuandika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuuliza swali lililo wazi",
          minutes: 5,
          goal: "Andika au sema swali linaloleta jibu lenye manufaa mara ya kwanza.",
          text: [
            "Unachoandika au kusema kwa msaidizi kinaitwa prompt. Kadiri prompt inavyokuwa wazi, ndivyo jibu linavyokuwa bora.",
            "Prompt nzuri ina sehemu tatu: unachohitaji, kidogo kuhusu hali yako, na jinsi unavyotaka jibu. Kwa mfano: \"Mjukuu wangu wa kike anatimiza miaka 8 Jumamosi na anapenda farasi. Andika ujumbe mfupi wa siku ya kuzaliwa kutoka kwa Bibi. Tumia maneno rahisi.\"",
            "Prompt fupi mno, kama \"siku ya kuzaliwa\", inamfanya msaidizi abahatishe, na unapata jibu la jumla. Ni sawa kuandika sentensi chache. Chukua muda wako; msaidizi anakusubiri."
          ],
          steps: ["Sema unachohitaji.", "Ongeza kidogo kuhusu hali yako, bila taarifa binafsi.", "Sema jinsi unavyotaka jibu: fupi, maneno rahisi, hatua kubwa, au orodha."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI ili kuomba kitu."]],
          slides: [
            { title: "Prompt ni swali lako", bullets: ["Prompt iliyo wazi = jibu bora zaidi", "Fupi mno = jibu la jumla"] },
            { title: "Sehemu tatu za prompt nzuri", bullets: ["1. Unachohitaji", "2. Kidogo kuhusu hali yako", "3. Jinsi unavyotaka jibu"] },
            { title: "Mfano", bullets: ["\"Mjukuu wangu wa kike anatimiza miaka 8 na anapenda farasi.", "Andika ujumbe mfupi wa siku ya kuzaliwa kutoka kwa Bibi.", "Tumia maneno rahisi.\""] }
          ],
          tryIt: "Chagua kitu kimoja kutoka orodha yako ya Somo la 1. Andika prompt yenye sehemu zote tatu, uitume, na usome jibu polepole.",
          youCanNow: "kumuuliza msaidizi wa AI swali lililo wazi lenye unachohitaji, hali yako na jinsi unavyotaka jibu.",
          quickCheck: [
            { objective: "O3", q: "Prompt ni nini?", options: ["Kikumbusho kwenye kalenda yako", "Unachoandika au kusema kwa msaidizi", "Jibu analotoa msaidizi", "Nywila"], answer: 1, why: "Prompt ni ombi lako kwa msaidizi, kwa kuandika au kwa kuongea." },
            { objective: "O3", q: "Unataka barua fupi ya shukrani kwa jirani aliyekutengenezea uzio. Prompt ipi ni bora?", options: ["\"barua\"", "\"asante\"", "\"Andika chochote.\"", "\"Jirani yangu alinitengenezea uzio. Andika barua fupi ya shukrani yenye upendo kwa maneno rahisi.\""], answer: 3, why: "Inasema unachohitaji, hali yako na jinsi unavyotaka jibu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kumfahamu msaidizi wako wa AI",
        questions: [
          { objective: "O1", q: "Msaidizi wa AI ni nini?", options: ["Mtu katika kituo cha simu", "Aina ya televisheni", "Programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida", "Ofisi ya serikali"], answer: 2, why: "Msaidizi wa AI ni programu unayoiandikia au kuongea nayo, nayo inakuandikia majibu." },
          { objective: "O1", q: "Msaidizi anasikika na uhakika sana kuhusu swali la dawa. Unapaswa kufanya nini?", options: ["Kukagua na daktari au mfamasia wako", "Kufuata jibu mara moja", "Kuacha kutumia dawa zote", "Kumwambia jirani yako alifuate"], answer: 0, why: "AI inaweza kukosea hata inaposikika na uhakika; maswali ya afya yanaenda kwa daktari au mfamasia wako." },
          { objective: "O2", q: "Ni wapi mahali salama pa kupata app ya AI kwenye simu au tableti?", options: ["Kiungo katika ujumbe kutoka kwa mtu usiyemjua", "Tangazo linalojitokeza ghafla (pop-up)", "Tovuti yoyote", "Duka rasmi la apps, kutoka kampuni halisi"], answer: 3, why: "Duka rasmi la apps na app ya kampuni halisi ndiyo chaguo salama." },
          { objective: "O2", q: "Ungependa kuongea badala ya kuandika. Unatafuta nini?", options: ["Alama ya betri", "Kitufe cha kipaza sauti", "Kamera", "Kitufe cha sauti (volume)"], answer: 1, why: "Kitufe cha kipaza sauti kinakuruhusu kusema swali lako." },
          { objective: "O3", q: "Prompt ipi iko wazi zaidi?", options: ["\"siku ya kuzaliwa\"", "\"Mjukuu wangu wa kike anatimiza miaka 8 na anapenda farasi. Andika ujumbe mfupi wa siku ya kuzaliwa kutoka kwa Bibi kwa maneno rahisi.\"", "\"nisaidie\"", "\"kadi\""], answer: 1, why: "Inasema unachohitaji, hali yako na jinsi unavyotaka jibu." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata majibu mazuri kwa usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuomba jibu rahisi zaidi au fupi zaidi",
          minutes: 4,
          goal: "Tumia maswali ya kufuatilia ili jibu liwe rahisi kusoma na kutumia.",
          text: [
            "Huhitaji kamwe kukubali jibu la kwanza. Msaidizi anakumbuka ulichosema mapema katika mazungumzo hayo hayo, kwa hiyo unaweza kumwomba abadilishe jibu lake.",
            "Maombi ya kufuatilia yanayosaidia: \"Tafadhali tumia maneno rahisi zaidi.\" \"Lifupishe.\" \"Liweke katika hatua zenye namba.\" \"Eleza hatua ya 3 tena.\" \"Nipe mfano.\" \"Lifanye lisikike kwa upendo zaidi.\"",
            "Ukipata shida kusoma maandishi madogo, unaweza pia kukuza maandishi kwenye kifaa chako. Mwombe mwanafamilia akuonyeshe mpangilio wa ukubwa wa maandishi, au muulize msaidizi: \"Ninakuzaje maandishi kwenye iPhone yangu?\""
          ],
          steps: ["Soma jibu la kwanza polepole.", "Amua kitu gani kingelifanya kuwa bora.", "Omba badiliko hilo moja.", "Rudia hadi jibu likufae."],
          words: [["Swali la kufuatilia", "swali la pili linalojengwa juu ya jibu ulilopata."]],
          slides: [
            { title: "Jibu la kwanza ni rasimu tu", bullets: ["Unaweza kuomba mabadiliko", "Anakumbuka mazungumzo hayo hayo"] },
            { title: "Maombi ya kufuatilia yanayofanya kazi", bullets: ["\"Tafadhali tumia maneno rahisi zaidi.\"", "\"Lifupishe.\"", "\"Liweke katika hatua zenye namba.\"", "\"Eleza hatua ya 3 tena.\""] },
            { title: "Ni vigumu kusoma?", bullets: ["Kuza maandishi kwenye kifaa chako", "Muulize msaidizi jinsi ya kufanya hivyo", "Mwombe mwanafamilia akuonyeshe"] }
          ],
          tryIt: "Chukua jibu kutoka Somo la 3. Omba mabadiliko mawili, moja baada ya jingine, kama \"lifupishe\" kisha \"lifanye lisikike kwa upendo zaidi\". Linganisha jibu la kwanza na la mwisho.",
          youCanNow: "kuboresha jibu la AI kwa kuuliza maswali ya kufuatilia yaliyo wazi.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini unaweza kumwomba msaidizi abadilishe jibu lake?", options: ["Anakumbuka ulichosema mapema katika mazungumzo hayo hayo", "Lazima aanze upya kila mara", "Anasoma mawazo yako", "Anajibu mara moja tu"], answer: 0, why: "Katika mazungumzo hayo hayo msaidizi anakumbuka jumbe za awali, kwa hiyo unaweza kuomba mabadiliko." },
            { objective: "O4", q: "Jibu la mapishi ni aya moja ndefu. Unatuma nini baadaye?", options: ["\"Si sahihi.\"", "Hakuna; funga app", "\"Liweke katika hatua zenye namba.\"", "\"Lirefushe.\""], answer: 2, why: "Swali la kufuatilia lililo wazi linalotaja badiliko linafanya jibu liwe rahisi kutumia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua jibu kabla ya kulifanyia kazi",
          minutes: 5,
          goal: "Kagua jibu la AI kwa chanzo unachokiamini kabla ya kulitegemea.",
          text: [
            "Wasaidizi wa AI wakati mwingine hubuni mambo: namba ya simu isiyo sahihi, saa za duka, ukweli kuhusu dawa au sheria iliyobadilika. Hii inaitwa hallucination (kubuni).",
            "Kagua kila wakati chochote kuhusu afya yako, dawa, pesa, mafao kama Social Security au Medicare, tarehe, anwani na namba za simu. Kagua kwenye tovuti rasmi, kwa ofisi yenyewe, kwa daktari au mfamasia wako, au kwa mtu unayemwamini.",
            "Tabia nzuri ni kuuliza: \"Ninaweza kukagua hili wapi?\" Kisha tafuta ukurasa huo rasmi wewe mwenyewe. Tovuti rasmi za serikali ya Marekani zinaishia na .gov."
          ],
          steps: ["Tafuta ukweli katika jibu: namba, tarehe, majina, sheria.", "Uangalie kwenye tovuti rasmi au upige simu ofisini.", "Visipolingana, amini chanzo rasmi.", "Kwa afya na pesa, muulize pia daktari, mfamasia au mtu unayemwamini."],
          words: [["Hallucination (kubuni)", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], [".gov", "mwisho wa anwani za tovuti rasmi za serikali ya Marekani."]],
          slides: [
            { title: "AI inaweza kubuni mambo", bullets: ["Namba za simu au saa zisizo sahihi", "Sheria za zamani", "Ukweli usio sahihi kuhusu dawa"] },
            { title: "Kagua kila wakati", bullets: ["Afya na dawa", "Pesa na mafao", "Tarehe, anwani na namba za simu"] },
            { title: "Jinsi ya kukagua", bullets: ["Tovuti rasmi, mara nyingi inayoishia na .gov", "Piga simu ofisini", "Muulize daktari, mfamasia au mtu unayemwamini"] }
          ],
          tryIt: "Muulize msaidizi saa za kufunguliwa kwa maktaba ya eneo lako. Kisha kagua tovuti ya maktaba yenyewe au uipigie simu. Je, jibu lililingana?",
          youCanNow: "kutambua ukweli unaohitaji kukaguliwa na kuukagua kwa chanzo unachokiamini.",
          quickCheck: [
            { objective: "O5", q: "Hallucination katika AI ni nini?", options: ["Skrini inapokuwa giza", "App inapokuwa polepole", "Msaidizi anapoongea kwa sauti", "Msaidizi anapobuni kitu kinachosikika kuwa kweli"], answer: 3, why: "AI inaweza kubuni namba ya simu, saa za duka au sheria isiyo sahihi inayosikika kuwa halisi." },
            { objective: "O5", q: "Msaidizi anakuambia kiasi gani cha dawa unywe. Unafanya nini?", options: ["Kunywa kiasi hicho mara moja", "Kukagua na daktari au mfamasia wako kwanza", "Kuuliza AI nyingine", "Kuwashirikisha marafiki"], answer: 1, why: "Majibu kuhusu afya na dawa lazima yakaguliwe na daktari au mfamasia wako." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda taarifa zako binafsi",
          minutes: 5,
          goal: "Tumia msaidizi wa AI bila kutoa taarifa binafsi.",
          text: [
            "Usiandike kamwe taarifa binafsi kwa msaidizi wa AI: namba yako ya Social Security, namba ya Medicare, namba za benki au kadi, nywila, au anwani kamili ya nyumbani. Unaweza kupata msaada unaohitaji bila hizo. Andika \"[namba yangu]\" badala yake.",
            "Walaghai nao wanatumia AI. Wanaweza kuandika ujumbe unaoshawishi na hata kuiga sauti ya mjukuu kwenye simu. Kuwa mwangalifu na simu au ujumbe wowote unaokuharakisha, unaoomba pesa au kadi za zawadi (gift cards), au unaoomba msimbo uliotumwa kwenye simu yako.",
            "Kitu kikionekana si sawa, simama. Kata simu, na umpigie mtu huyo tena kwa namba ambayo tayari unajua ni halisi."
          ],
          steps: ["Kabla ya kutuma prompt, isome uone kama ina taarifa binafsi.", "Ibadilishe kwa kishika-nafasi kama \"[namba yangu]\".", "Chukulia kuharakishwa, kadi za zawadi na maombi ya msimbo kama dalili za hatari.", "Piga simu tena kwa namba ambayo tayari unaijua."],
          words: [["Taarifa binafsi", "maelezo ambayo yanaweza kumruhusu mtu kujifanya wewe au kuchukua pesa zako."], ["Kishika-nafasi", "neno la kusimama badala ya kitu halisi, kama \"[namba yangu]\"."]],
          slides: [
            { title: "Usiandike kamwe kwa AI", bullets: ["Namba za Social Security au Medicare", "Namba za benki au kadi", "Nywila"] },
            { title: "Tumia kishika-nafasi", bullets: ["Andika \"[namba yangu]\" badala yake", "Bado unapata msaada unaohitaji"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Wanakuharakisha", "Wanataka pesa au kadi za zawadi", "Wanaomba msimbo uliotumwa kwenye simu yako"] },
            { title: "Ukiwa na shaka", bullets: ["Simama", "Kata simu", "Piga tena kwa namba unayoijua kuwa halisi"] }
          ],
          tryIt: "Kazi ya mwisho: muulize msaidizi mapishi rahisi kwa watu wanne, mwombe aweke hatua katika mistari mifupi yenye namba, uliza swali moja la kufuatilia, na ukague ukweli mmoja, kama joto la kupikia, kwenye tovuti unayoiamini au kwa mtu unayemwamini.",
          youCanNow: "kutumia msaidizi wa AI kwa kazi halisi, kukagua jibu lake, na kulinda taarifa zako binafsi.",
          quickCheck: [
            { objective: "O6", q: "Kipi kati ya hivi hupaswi kamwe kuandika kwa msaidizi wa AI?", options: ["Namba yako ya Medicare", "Mapishi unayoyapenda", "Jina la ndege uliyemwona", "Swali kuhusu bustani yako"], answer: 0, why: "Namba za Medicare, Social Security na benki ni binafsi; tumia kishika-nafasi badala yake." },
            { objective: "O6", q: "Ujumbe unasema akaunti yako itafungwa leo usipotuma msimbo uliopokea sasa hivi. Unafanya nini?", options: ["Kutuma msimbo haraka", "Kujibu kwa namba yako ya benki", "Kutoutoa msimbo; kupigia kampuni kwa namba unayoijua", "Kuutuma kwa wajukuu wako"], answer: 2, why: "Kukuharakisha na kuomba msimbo ni dalili za hatari za ulaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata majibu mazuri kwa usalama",
        questions: [
          { objective: "O4", q: "Jibu linatumia maneno usiyoyaelewa. Unaandika nini?", options: ["\"Lirefushe.\"", "Namba yako ya Medicare", "Hakuna; funga app", "\"Tafadhali tumia maneno rahisi zaidi.\""], answer: 3, why: "Swali la kufuatilia linamwomba msaidizi abadilishe jibu lake." },
          { objective: "O5", q: "Kipi kati ya hivi unapaswa KILA WAKATI kukagua kwa chanzo unachokiamini?", options: ["Kiasi cha dawa cha kunywa", "Mzaha", "Shairi la siku ya kuzaliwa", "Orodha ya majina ya maua"], answer: 0, why: "Ukweli kuhusu afya na dawa lazima ukaguliwe na daktari au mfamasia wako." },
          { objective: "O5", q: "\"Hallucination\" katika AI ni nini?", options: ["Skrini inang'aa mno", "Aina ya app", "AI imeandika kitu kinachosikika kuwa kweli lakini kimebuniwa", "Intaneti ya polepole"], answer: 2, why: "AI inaweza kubuni ukweli unaosikika kuwa halisi." },
          { objective: "O6", q: "Unapaswa kuandika nini badala ya namba yako ya Medicare katika prompt?", options: ["Namba halisi", "Nusu ya namba", "Namba yako ya benki", "Kishika-nafasi kama \"[namba yangu]\""], answer: 3, why: "Kishika-nafasi kinakupatia msaada bila kutoa taarifa binafsi." },
          { objective: "O6", q: "Mpigaji anasikika kama mjukuu wako na anaomba kadi za zawadi sasa hivi. Unafanya nini?", options: ["Kuzinunua haraka", "Kumpa msimbo ulio kwenye simu yako", "Kukata simu na kumpigia mjukuu wako kwa namba unayoijua", "Kutuma maelezo ya benki yako"], answer: 2, why: "Walaghai wanaweza kuiga sauti; kuharakishwa na kadi za zawadi ni dalili za hatari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Wazee: Kutumia Wasaidizi wa AI",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI anaelezwa vizuri zaidi kama:", options: ["Mtu katika kituo cha simu", "Programu ya kompyuta unayozungumza nayo", "Kampuni ya simu", "Duka"], answer: 1, why: "Ni programu unayoiandikia au kuongea nayo." },
      { objective: "O1", q: "Lipi ni matumizi mazuri ya msaidizi wa AI?", options: ["Kuandika rasimu ya barua ya shukrani kwa rafiki", "Kuamua kiasi cha dawa yako", "Kukusainia karatasi", "Kujua salio la benki yako"], answer: 0, why: "Kuandika rasimu za barua na kadi ni moja ya uwezo wake." },
      { objective: "O1", q: "Nani ndiye kiongozi unapotumia msaidizi wa AI?", options: ["Wewe", "Kampuni ya simu", "AI", "Hakuna mtu"], answer: 0, why: "Wewe unaamua cha kuuliza na cha kuamini." },
      { objective: "O2", q: "Lipi ni msaidizi wa AI wa bure anayejulikana?", options: ["Kikokotoo", "Google Gemini", "Printa", "Rimoti"], answer: 1, why: "Gemini, ChatGPT na Copilot ni wasaidizi wa bure wanaojulikana." },
      { objective: "O2", q: "Mahali salama pa kupata app ya AI kwenye tableti ni:", options: ["Kiungo katika barua pepe kutoka kwa mtu usiyemjua", "Tangazo linalojitokeza ghafla (pop-up)", "Duka rasmi la apps", "Tovuti yoyote"], answer: 2, why: "Sakinisha kutoka duka rasmi la apps tu." },
      { objective: "O2", q: "Anwani ipi inafungua ChatGPT kwenye kompyuta?", options: ["chatgpt.gift", "chatgpt-prize.net", "free-chatgpt.win", "chatgpt.com"], answer: 3, why: "chatgpt.com ndiyo anwani rasmi." },
      { objective: "O2", q: "Kwa kawaida unaandika swali lako wapi?", options: ["Kwenye alama ya betri", "Kwenye saa", "Katika kisanduku cha ujumbe karibu na chini", "Katika kamera"], answer: 2, why: "Kisanduku cha ujumbe mara nyingi kinasema \"Ask anything\" au \"Message\"." },
      { objective: "O2", q: "Ungependa kusema swali lako. Unagusa:", options: ["Kitufe cha kipaza sauti", "Kamera", "Kitufe cha kuwasha", "Kitufe cha sauti (volume)"], answer: 0, why: "Kitufe cha kipaza sauti kinakuruhusu kuongea badala ya kuandika." },
      { objective: "O3", q: "Prompt ni nini?", options: ["Kengele ya kukumbusha", "Mwisho wa anwani ya tovuti", "Chaja ya simu", "Unachoandika au kusema kwa msaidizi"], answer: 3, why: "Prompt ni ombi lako kwa msaidizi." },
      { objective: "O3", q: "Prompt nzuri ina:", options: ["Neno moja tu", "Unachohitaji, hali yako, na jinsi unavyotaka jibu", "Nywila yako", "Namba yako ya Social Security"], answer: 1, why: "Sehemu hizo tatu zinaleta jibu lenye manufaa." },
      { objective: "O3", q: "Prompt ipi huenda ikaleta jibu lenye manufaa zaidi?", options: ["\"bustani\"", "\"Majani ya nyanya zangu yana madoa ya njano. Nini kinaweza kusababisha hili? Jibu kwa hatua fupi na rahisi.\"", "\"mimea\"", "\"nisaidie\""], answer: 1, why: "Inatoa hitaji, hali na muundo." },
      { objective: "O4", q: "Jibu la kwanza ni refu mno. Unaweza:", options: ["Kuzima kifaa", "Kulikubali tu", "Kulipa ili lirekebishwe", "Kuomba: \"Lifupishe.\""], answer: 3, why: "Maswali ya kufuatilia yanabadilisha jibu." },
      { objective: "O4", q: "Lipi ni swali la kufuatilia linalosaidia?", options: ["\"Liweke katika hatua zenye namba.\"", "\"Hii ndiyo namba ya kadi yangu.\"", "\"Futa simu yangu.\"", "\"Tuma pesa.\""], answer: 0, why: "Linaomba badiliko lililo wazi katika jibu." },
      { objective: "O4", q: "Maandishi kwenye skrini ni madogo mno. Unaweza kufanya nini?", options: ["Kukata tamaa", "Kununua simu mpya leo", "Kukuza maandishi katika mipangilio ya kifaa chako au kumwomba mtu akuonyeshe", "Kuandika nywila yako"], answer: 2, why: "Vifaa vina mpangilio wa ukubwa wa maandishi; mwanafamilia au msaidizi anaweza kukuonyesha jinsi." },
      { objective: "O5", q: "Msaidizi anakupa namba ya simu ya kliniki. Unapaswa:", options: ["Kuipa namba yako ya Medicare", "Kuipigia bila kukagua", "Kuiweka mtandaoni", "Kuikagua kwenye tovuti ya kliniki yenyewe au katika barua kutoka kliniki"], answer: 3, why: "AI inaweza kutoa namba zisizo sahihi; kagua chanzo rasmi." },
      { objective: "O5", q: "Tovuti rasmi za serikali ya Marekani zinaishia na:", options: [".win", ".gift", ".gov", ".xyz"], answer: 2, why: ".gov inatumiwa na tovuti za serikali ya Marekani." },
      { objective: "O5", q: "Kwa swali kuhusu dawa, mtu bora wa kuthibitisha jibu ni:", options: ["Mtu usiyemjua mtandaoni", "Daktari au mfamasia wako", "AI yenyewe", "Tangazo linalojitokeza ghafla (pop-up)"], answer: 1, why: "Ukweli kuhusu afya lazima ukaguliwe na mtaalamu." },
      { objective: "O6", q: "Kipi hupaswi KAMWE kuandika kwa msaidizi wa AI?", options: ["Namba ya kadi yako ya benki", "\"Nipe mfano.\"", "\"Tumia maneno rahisi zaidi.\"", "\"Lifanye lisikike kwa upendo zaidi.\""], answer: 0, why: "Namba za benki na kadi ni taarifa binafsi." },
      { objective: "O6", q: "Mtu anaomba msimbo uliotumwa kwa ujumbe kwenye simu yako sasa hivi. Unapaswa:", options: ["Kutoutoa kamwe", "Kuuweka mtandaoni", "Kumtumia kwa ujumbe", "Kumsomea"], answer: 0, why: "Msimbo huo unalinda akaunti yako; ofisi halisi haziuombi." },
      { objective: "O6", q: "Simu ikionekana si sawa, hatua salama zaidi ni:", options: ["Kuendelea kuongea", "Kukata simu na kupiga tena kwa namba unayoijua kuwa halisi", "Kuwapa anwani yako", "Kutuma malipo kidogo"], answer: 1, why: "Kupiga tena kwa namba unayoijua kunazuia ulaghai mwingi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 4, 9, 11, 14, 16, 17, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Alifungua msaidizi", objective: "O2", notYet: "Alihitaji mtu mwingine amfungulie msaidizi, au alitumia app au tovuti isiyo rasmi.", meets: "Alifungua msaidizi rasmi na akapata kisanduku cha ujumbe au kipaza sauti.", exceeds: "Anaweza kumwonyesha rafiki au mwanafamilia jinsi ya kumfungua." },
      { name: "Ombi lililo wazi", objective: "O3", notYet: "Prompt haiko wazi, kwa mfano \"mapishi\".", meets: "Aliomba mapishi rahisi kwa watu wanne, pamoja na hali yake na jinsi jibu linavyopaswa kuonekana.", exceeds: "Aliongeza maelezo kama chakula ambacho mtu hawezi kula, na jibu la kwanza lilikaribia kuwa tayari." },
      { name: "Alilifanya kuwa rahisi", objective: "O4", notYet: "Alitumia jibu la kwanza kama lilivyo, hata kama lilikuwa gumu kusoma.", meets: "Aliomba hatua fupi zenye namba na swali moja zaidi la kufuatilia.", exceeds: "Aliomba mabadiliko moja baada ya jingine na anaweza kusema kila moja lilirekebisha nini." },
      { name: "Ukweli umekaguliwa", objective: "O5", notYet: "Aliamini ukweli kama joto la kupikia bila kukagua.", meets: "Alikagua ukweli mmoja kwenye tovuti anayoiamini au kwa mtu anayemwamini.", exceeds: "Anaweza kusema alikagua wapi na kama ulilingana." },
      { name: "Taarifa binafsi zimezuiwa", objective: "O6", notYet: "Prompt ina namba ya binafsi, anwani au nywila.", meets: "Hakuna taarifa binafsi katika prompt yoyote.", exceeds: "Anaweza kutaja dalili mbili za hatari za ulaghai." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia msaidizi wa AI kwa kadi, barua, mapishi au swali ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kutambua na kuepuka simu au ujumbe wa ulaghai",
      "Wanafunzi wanaoanza kozi nyingine ya Wazee na Teknolojia ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja, tableti au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Miwani ya kusomea ikihitajika, na karatasi na kalamu kwa maelezo",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya taratibu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Nendeni polepole, na mpangie kila mwanafunzi msaidizi au mjukuu mara ya kwanza anapofungua app.",
      "Onyesha jinsi ya kukuza maandishi kwenye kifaa cha kila mwanafunzi kabla ya kuanza.",
      "Usiwaombe wanafunzi kamwe kuandika taarifa binafsi halisi; tumia vishika-nafasi kama [namba yangu].",
      "Wakumbushe wanafunzi kwamba majibu kuhusu afya, dawa na pesa lazima yakaguliwe na daktari, mfamasia au ofisi rasmi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
