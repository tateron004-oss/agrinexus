"use strict";

// Koach Learn course (Swahili translation of shared/online-safety-responsible-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "online-safety-responsible-ai-sw",
  lang: "sw",
  translationOf: "online-safety-responsible-ai",
  category: "Re-Entry",
  name: "Usalama Mtandaoni na Matumizi ya AI kwa Uwajibikaji",
  skills: "Kutengeneza nywila imara, Kuwasha uthibitisho wa hatua mbili, Kutambua ulaghai wa phishing na wa AI, Kuripoti ulaghai na wizi wa utambulisho, Kukagua AI kwa makosa na upendeleo, Kutumia AI kwa uaminifu shuleni na kazini",
  outcome: "kulinda akaunti zako kuu kwa kaulisiri imara na uthibitisho wa hatua mbili, kutambua na kuripoti ulaghai wa phishing, deepfake na ulaghai unaotumia AI, na kutumia zana za AI kwa uaminifu na haki, ukikagua majibu yake na kufuata sheria za shule au kazi.",
  about: [
    "Kuwa mtandaoni kunaleta hatari halisi: akaunti kuibiwa, ulaghai, na ujumbe bandia unaoonekana na kusikika kama wa kweli kwa sababu ya AI. Pia kunaleta maswali mapya: ni lini ni haki kutumia AI, na utajuaje kama jibu lake si sahihi au halina haki?",
    "Kozi hii ni kwa kila mtu: watu wanaorudi nyumbani kutoka gerezani na kuanza tena kutumia mtandao, vijana, maveterani (wanajeshi wa zamani), wanaotafuta kazi na wanajamii. Huhitaji uzoefu wowote wa teknolojia.",
    "Katika Sura 1 utajilinda. Katika Sura 2 utajifunza kutumia AI kwa uwajibikaji. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Kamilisha orodha yako binafsi ya usalama mtandaoni na matumizi ya AI kwa uwajibikaji: badilisha nywila ya barua pepe yako kuu kuwa kaulisiri imara, washa uthibitisho wa hatua mbili kwake, kagua simu na apps zako kama zina masasisho, andika sehemu tatu za kuripoti ulaghai, na andika kadi ya mistari mitano ya sheria zako binafsi za AI kuhusu faragha, kukagua majibu, uaminifu, haki na wakati wa kutotumia AI.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii). Wengi walikuwa mbali wakati simu janja, akaunti za mtandaoni na zana za AI zilibadilika, na sasa wanafungua akaunti za barua pepe, kazi na mafao, mara nyingi kwa mara ya kwanza.",
    startingPoint: "Wanaweza kupiga simu na kutuma ujumbe mfupi kwenye simu ya kawaida; baadhi wana akaunti mpya ya barua pepe na wamejaribu msaidizi wa AI. Wengi wanatumia nywila rahisi zile zile tena na tena, hawajatumia uthibitisho wa hatua mbili, na hawajaona ulaghai wa sauti au video za AI.",
    gap: "Watu wanaojenga upya maisha yao mara nyingi hulengwa na ulaghai unaoweza kuiba mafao, mishahara au utambulisho wao, na kutumia AI vibaya shuleni au kazini kunaweza kugharimu cheti au kazi. Wanafunzi wanahitaji kulinda akaunti zao, kutambua na kuripoti ulaghai, na kutumia AI kwa faragha, kwa uangalifu na kwa uaminifu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: huenda wana simu ya kawaida tu au kompyuta ya maktaba yenye muda mfupi",
      "Muda: masomo ya dakika 5 yanayoingia kati ya miadi na kazi",
      "Masharti ya baadhi ya parole au probation yanazuia matumizi ya intaneti; kila mwanafunzi anafuata masharti yake",
      "Hatari kubwa ya ulaghai na faragha: hakuna nywila halisi, namba za kesi wala namba za binafsi zinazotolewa katika zoezi lolote"
    ],
    prerequisites: "Hakuna. Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" ni kozi nzuri ya kwanza kwa wanafunzi wapya kwa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa akaunti yako kuu ya barua pepe", action: "kutengeneza kaulisiri imara, kuwasha uthibitisho wa hatua mbili na kukagua simu na apps zako kama zina masasisho", standard: "bila msaada, na misimbo ya akiba imehifadhiwa mahali pa siri" },
    { id: "O2", condition: "Ukipokea ujumbe au simu, hata ya sauti au video ya AI", action: "kutambua dalili za hatari za phishing na ulaghai unaotumia AI", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O3", condition: "Unapokutana na ulaghai au taarifa zako zikiibiwa", action: "kuorodhesha mahali pa kuuripoti na hatua za kwanza za kujilinda", standard: "ukitaja sehemu zote tatu za kuripoti za Marekani" },
    { id: "O4", condition: "Kabla ya kutuma prompt kwa zana ya AI", action: "kukagua prompt na kuondoa taarifa binafsi", standard: "bila kutoa nywila, namba za kitambulisho, kesi, benki au kadi" },
    { id: "O5", condition: "Ukipewa jibu la AI", action: "kulikagua kwa ukweli usio sahihi na upendeleo usio wa haki", standard: "kabla ya kulitumia" },
    { id: "O6", condition: "Shuleni, kazini au mtandaoni", action: "kufuata sheria za matumizi ya AI, kusema AI ilisaidiaje na kuchagua wakati wa kutotumia AI", standard: "katika kadi ya mistari mitano ya sheria zako binafsi za AI" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujilinda mtandaoni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nywila imara na uthibitisho wa hatua mbili",
          minutes: 5,
          goal: "Tengeneza kaulisiri imara na uwashe uthibitisho wa hatua mbili kwa barua pepe yako.",
          text: [
            "Barua pepe yako ndiyo ufunguo wa kila kitu: mtu akiingia ndani yake, anaweza kubadilisha nywila zako nyingine. Ilinde kwanza.",
            "Nywila imara ni ndefu na ya kipekee. Njia rahisi ni kaulisiri: maneno manne au zaidi yasiyohusiana, kama \"embe-mto-simba-taa\". Tumia nywila tofauti kwa kila akaunti muhimu. Kidhibiti nywila (password manager), kilichojengwa ndani ya simu na vivinjari vingi, kinaweza kukukumbukia.",
            "Washa uthibitisho wa hatua mbili, unaoitwa pia multifactor authentication au MFA. Baada ya nywila yako, unaingiza pia msimbo kutoka simu yako au unakubali ombi kwenye simu. Hata mtu akiiba nywila yako, bado hawezi kuingia. Shirika la Marekani la Usalama wa Mitandao na Miundombinu (CISA) linashauri nywila imara, MFA, kidhibiti nywila na kusasisha programu kila wakati."
          ],
          steps: ["Tengeneza kaulisiri ya maneno manne au zaidi yasiyohusiana.", "Badilisha nywila ya barua pepe yako kuwa kaulisiri hiyo.", "Fungua mipangilio ya usalama ya akaunti yako ya barua pepe.", "Washa uthibitisho wa hatua mbili (MFA) na ufuate hatua.", "Hifadhi misimbo ya akiba mahali salama na pa siri."],
          words: [["Kaulisiri (passphrase)", "nywila iliyotengenezwa kwa maneno kadhaa yasiyohusiana."], ["MFA / uthibitisho wa hatua mbili", "ukaguzi wa pili, kama msimbo wa simu, baada ya nywila yako."], ["Kidhibiti nywila (password manager)", "app salama inayohifadhi nywila zako."]],
          slides: [
            { title: "Linda barua pepe yako kwanza", bullets: ["Inaweza kubadilisha nywila za akaunti zako nyingine"] },
            { title: "Nywila imara", bullets: ["Ndefu na ya kipekee", "Maneno manne au zaidi yasiyohusiana", "Nywila tofauti kwa kila akaunti muhimu"] },
            { title: "Uthibitisho wa hatua mbili (MFA)", bullets: ["Nywila pamoja na msimbo wa simu au ombi la simu", "Unazuia mashambulizi mengi ya nywila zilizoibiwa", "Hifadhi misimbo ya akiba kwa usalama"] }
          ],
          sources: [{ name: "CISA: Cybersecurity Awareness and Secure Our World", url: "https://www.cisa.gov/secure-our-world" }],
          tryIt: "Badilisha nywila ya barua pepe yako kuu kuwa kaulisiri imara na uwashe uthibitisho wa hatua mbili. Kama huwezi kufanya hivyo sasa, andika hatua na uzifanye leo.",
          youCanNow: "kutengeneza kaulisiri imara na kulinda barua pepe yako kwa uthibitisho wa hatua mbili.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini ulinde akaunti yako ya barua pepe kwanza?", options: ["Ina picha nyingi zaidi", "Ndiyo ngumu zaidi kutumia", "Mtu aliye ndani ya barua pepe yako anaweza kubadilisha nywila zako nyingine", "Akaunti za barua pepe zinagharimu pesa"], answer: 2, why: "Barua pepe yako ni ufunguo wa akaunti nyingine, kwa sababu ujumbe wa kubadilisha nywila unakwenda huko." },
            { objective: "O1", q: "Nywila ya tovuti yako ya kazi ni sawa na nywila ya barua pepe yako. Unafanya nini?", options: ["Tengeneza kaulisiri imara tofauti kwa kila moja", "Iache; nywila moja ni rahisi zaidi", "Iandike kwenye kasha la simu yako", "Mpe rafiki aikumbuke"], answer: 0, why: "Tumia nywila tofauti kwa kila akaunti muhimu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutambua phishing na ulaghai unaotumia AI",
          minutes: 6,
          goal: "Tambua ujumbe wa phishing, simu bandia na deepfake kabla ya kubofya au kulipa.",
          text: [
            "Phishing ni ujumbe bandia, kwa barua pepe, ujumbe mfupi au mitandao ya kijamii, unaojaribu kukufanya ubofye kiungo, utoe taarifa au utume pesa. Tume ya Biashara ya Marekani (FTC) inataja dalili za kawaida: ujumbe usioutarajia kutoka kampuni unayoijua, madai ya tatizo kwenye akaunti yako au malipo, ombi la kuthibitisha taarifa binafsi, na kiungo cha \"kusasisha\" malipo yako.",
            "AI inafanya ulaghai uaminike zaidi. Walaghai wanaweza kuandika ujumbe usio na kosa, kutengeneza video bandia zinazoitwa deepfake na kunakili sauti ya mtu kutoka kipande kifupi cha sauti. Simu inaweza kusikika kama mjukuu wako, bosi wako au afisa wako wa parole.",
            "Dalili za hatari hazibadiliki: wanakuharakisha, wanakutisha, wanaomba kadi za zawadi (gift cards), kutuma pesa kwa wire transfer au crypto, au wanaomba msimbo uliotumwa kwenye simu yako. Simama. Usibofye. Wasiliana na mtu au kampuni hiyo kwa namba au tovuti unayojua tayari ni ya kweli."
          ],
          steps: ["Simama kidogo: ujumbe huu haukutarajiwa au una haraka?", "Usibofye viungo wala kufungua viambatisho.", "Angalia maombi ya pesa, kadi za zawadi, crypto au misimbo.", "Wasiliana na mtu au kampuni kwa namba unayoijua tayari.", "Uripoti kisha uufute."],
          words: [["Phishing", "ujumbe bandia unaojaribu kuiba taarifa au pesa."], ["Deepfake", "video, picha au sauti bandia iliyotengenezwa kwa AI ionekane au isikike kama ya kweli."], ["Kunakili sauti (voice cloning)", "kutumia AI kunakili sauti ya mtu."]],
          slides: [
            { title: "Dalili za phishing (FTC)", bullets: ["Ujumbe usiotarajiwa kutoka kampuni unayoijua", "\"Tatizo kwenye akaunti yako au malipo\"", "Unaombwa kuthibitisha taarifa au kubofya ili ulipe"] },
            { title: "AI inafanya ulaghai uaminike", bullets: ["Maandishi yasiyo na kosa", "Video za deepfake", "Sauti zilizonakiliwa za watu unaowajua"] },
            { title: "Dalili za hatari ni zile zile", bullets: ["Haraka au hofu", "Kadi za zawadi, wire transfer, crypto, misimbo ya simu", "Piga tena kwa namba unayoijua"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Pitia barua pepe na ujumbe wako mfupi utafute mmoja unaoweza kuwa phishing. Orodhesha dalili za hatari unazoziona. Pamoja na familia yako, kubalianeni neno la siri la kukagua simu za dharura.",
          youCanNow: "kutambua ulaghai wa phishing, deepfake na sauti iliyonakiliwa na kujibu kwa usalama.",
          quickCheck: [
            { objective: "O2", q: "Phishing ni nini?", options: ["Ujumbe salama kutoka benki yako", "Njia ya kuhifadhi nakala ya simu yako", "Aina ya nywila", "Ujumbe bandia unaojaribu kukufanya ubofye, utoe taarifa au utume pesa"], answer: 3, why: "Phishing ni ujumbe bandia unaojaribu kukudanganya." },
            { objective: "O2", q: "Simu inasikika kama afisa wako wa parole na inasema ulipe ada leo kwa wire transfer. Unafanya nini?", options: ["Lipa mara moja ili usipate matatizo", "Kata simu na upige ofisini kwa namba unayoijua tayari", "Wape msimbo uliotumwa kwenye simu yako", "Piga tena namba iliyokupigia"], answer: 1, why: "Sauti zinaweza kunakiliwa kwa AI; haraka na wire transfer ni dalili za hatari, kwa hiyo piga namba unayoijua." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuripoti ulaghai na kupona baada ya wizi wa utambulisho",
          minutes: 5,
          goal: "Orodhesha mahali pa kuripoti ulaghai na hatua za kwanza ikiwa taarifa zako zimeibiwa.",
          text: [
            "Kuripoti kunasaidia kuwazuia walaghai na kunaweza kukusaidia kupona. Nchini Marekani, FTC inasema tuma barua pepe za phishing kwa reportphishing@apwg.org, tuma ujumbe mfupi wa ulaghai kwa 7726 (SPAM), na uripoti udanganyifu kwenye ReportFraud.ftc.gov.",
            "Kama ulitoa namba ya Social Security (namba ya hifadhi ya jamii ya Marekani), ya kadi ya mkopo au ya akaunti ya benki, FTC inasema nenda IdentityTheft.gov upate hatua kulingana na kilichopotea. Fanya haraka: piga simu benki yako, badilisha nywila, na ufikirie fraud alert (tahadhari ya udanganyifu) au credit freeze (kufunga mikopo).",
            "Kama ulibofya kiungo kibaya, sasisha programu yako ya usalama, endesha ukaguzi (scan) na uondoe chochote inachokionyesha. Nje ya Marekani, ripoti kwa kitengo cha uhalifu wa mtandaoni cha polisi wa nchi yako au kwa shirika la kumlinda mlaji."
          ],
          steps: ["Barua pepe ya phishing: itume kwa reportphishing@apwg.org.", "Ujumbe mfupi wa ulaghai: utume kwa 7726.", "Udanganyifu: ripoti kwenye ReportFraud.ftc.gov.", "Taarifa zimeibiwa: fuata IdentityTheft.gov na upige simu benki yako.", "Ulibofya kiungo: sasisha programu ya usalama na ufanye scan."],
          words: [["Wizi wa utambulisho", "mtu anapotumia taarifa zako binafsi kujifanya kuwa wewe."], ["Credit freeze (kufunga mikopo)", "kufuli inayozuia mkopo mpya kufunguliwa kwa jina lako."]],
          slides: [
            { title: "Mahali pa kuripoti (Marekani)", bullets: ["Barua pepe za phishing: reportphishing@apwg.org", "Ujumbe mfupi wa ulaghai: tuma kwa 7726", "Udanganyifu: ReportFraud.ftc.gov"] },
            { title: "Taarifa zimeibiwa?", bullets: ["IdentityTheft.gov", "Piga simu benki yako", "Badilisha nywila; fikiria credit freeze"] },
            { title: "Ulibofya kiungo kibaya?", bullets: ["Sasisha programu ya usalama", "Endesha scan", "Ondoa inachokionyesha"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }, { name: "IdentityTheft.gov", url: "https://www.identitytheft.gov/" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Andika sehemu tatu za Marekani za kuripoti ulaghai (au zinazolingana nazo katika nchi yako) kwenye kadi au kwenye maelezo ya simu yako.",
          youCanNow: "kuripoti ulaghai na kuchukua hatua za kwanza baada ya wizi wa utambulisho.",
          quickCheck: [
            { objective: "O3", q: "FTC inasema uende wapi kama namba yako ya Social Security imeibiwa?", options: ["IdentityTheft.gov", "Tovuti yoyote yenye namba ya simu", "Kwa mtu aliyeiiba", "Kikundi cha mitandao ya kijamii"], answer: 0, why: "FTC inawaelekeza watu IdentityTheft.gov kupata hatua kulingana na kilichopotea." },
            { objective: "O3", q: "Ulitoa namba ya kadi yako ya benki kwa tovuti bandia. Unafanya nini kwanza?", options: ["Subiri uone kama kuna kitu kitatokea", "Andika kuhusu jambo hilo mtandaoni", "Piga simu benki yako mara moja na ubadilishe nywila zako", "Ipe tovuti hiyo PIN yako pia"], answer: 2, why: "Fanya haraka: piga simu benki yako na ubadilishe nywila." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujilinda mtandaoni",
        questions: [
          { objective: "O1", q: "Nywila ipi ni imara zaidi?", options: ["password123", "tarehe yako ya kuzaliwa", "embe-mto-simba-taa", "123456"], answer: 2, why: "Kaulisiri ndefu za maneno yasiyohusiana ni imara." },
          { objective: "O1", q: "Uthibitisho wa hatua mbili (MFA) unafanya nini?", options: ["Unaongeza ukaguzi wa pili, kama msimbo wa simu, baada ya nywila yako", "Unafanya nywila yako iwe fupi", "Unawapa marafiki nywila yako", "Unazima akaunti yako"], answer: 0, why: "Ukaguzi wa pili unawazuia washambulizi walio na nywila yako tu." },
          { objective: "O2", q: "Unapigiwa simu kwa sauti ya mjukuu wako akiomba kadi za zawadi sasa hivi. Unafanya nini?", options: ["Nunua kadi za zawadi haraka", "Wasomee namba yako ya benki", "Tuma crypto", "Kata simu na umpigie tena kwa namba unayoijua"], answer: 3, why: "Sauti zinaweza kunakiliwa kwa AI; piga tena kwa namba unayoijua." },
          { objective: "O2", q: "Deepfake ni nini?", options: ["Bwawa refu la kuogelea", "Video, picha au sauti bandia iliyotengenezwa kwa AI", "Nywila imara", "Taarifa halisi ya habari"], answer: 1, why: "Deepfake ni vitu bandia vilivyotengenezwa kwa AI vinavyoonekana au kusikika kama vya kweli." },
          { objective: "O3", q: "Nchini Marekani, FTC inasema ujumbe mfupi wa ulaghai utumwe wapi?", options: ["911", "7726 (SPAM)", "Kwa mlaghai", "Kwa watu walio kwenye simu yako"], answer: 1, why: "FTC inasema tuma ujumbe mfupi wa ulaghai kwa 7726." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI kwa uwajibikaji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kulinda faragha unapotumia AI",
          minutes: 5,
          goal: "Amua ni nini salama kuandika kwenye zana ya AI na nini si salama.",
          text: [
            "Unachoandika kwenye mazungumzo ya AI kinaweza kuhifadhiwa na, kulingana na zana na mipangilio, kutumiwa kuiboresha. Kichukulie kama kuongea mahali pa umma.",
            "Usiandike kamwe: nywila, namba za Social Security au kitambulisho, namba za benki au kadi, namba za kesi au za mfungwa, taarifa za afya zinazohusiana na jina lako, au taarifa za siri za watu wengine. Badala yake tumia vishika-nafasi kama \"[namba yangu]\" au maelezo ya jumla.",
            "Angalia kwenye mipangilio ya zana sehemu za faragha na udhibiti wa data, kama kuzima historia ya mazungumzo au kuzuia mazungumzo yako yasitumike kufundisha AI, pale inapowezekana. Shuleni au kazini, tumia tu zana za AI ambazo shule au mwajiri wako anaruhusu, na ufuate sheria zao kuhusu taarifa zinazoweza kuingizwa."
          ],
          steps: ["Soma prompt yako kabla ya kuituma.", "Ondoa namba za siri, majina na taarifa za afya.", "Tumia vishika-nafasi kama \"[namba yangu]\".", "Kagua mipangilio ya faragha ya zana.", "Shuleni au kazini, tumia zana zilizoruhusiwa tu."],
          words: [["Mipangilio ya faragha", "chaguo zinazodhibiti app inahifadhi na kushiriki nini kukuhusu."], ["Kishika-nafasi (placeholder)", "neno la kusimama badala ya taarifa halisi za siri, kama \"[namba yangu]\"."]],
          slides: [
            { title: "Mazungumzo ya AI si shajara", bullets: ["Unachoandika kinaweza kuhifadhiwa", "Kichukulie kama mahali pa umma"] },
            { title: "Usiandike kamwe", bullets: ["Nywila, SSN, namba za kitambulisho au kesi", "Namba za benki au kadi", "Taarifa za siri za watu wengine"] },
            { title: "Baki na udhibiti", bullets: ["Tumia vishika-nafasi", "Kagua mipangilio ya faragha", "Tumia zana zilizoruhusiwa shuleni au kazini"] }
          ],
          tryIt: "Fungua mipangilio ya msaidizi wa AI unaoutumia na utafute udhibiti wake wa faragha au data. Kisha andika upya prompt hii kwa usalama: \"SSN yangu ni 123-45-6789, nisaidie kujaza fomu hii.\"",
          youCanNow: "kuzuia taarifa za siri zisiingie kwenye zana za AI na kutumia mipangilio yao ya faragha.",
          quickCheck: [
            { objective: "O4", q: "Kuandika kwenye mazungumzo ya AI kunafanana zaidi na nini?", options: ["Kuandika kwenye shajara iliyofungwa", "Kuongea mahali pa umma", "Kuongea na wakili wako", "Kujinong'oneza mwenyewe"], answer: 1, why: "Unachoandika kinaweza kuhifadhiwa, kwa hiyo kichukulie kama kuongea hadharani." },
            { objective: "O4", q: "Unataka msaada wa AI kwa fomu ya makazi inayoomba namba yako ya kesi. Unaandika nini?", options: ["Namba yako halisi ya kesi", "Namba yako ya kesi na tarehe ya kuzaliwa", "Namba ya kesi ya rafiki yako", "Kishika-nafasi kama \"[namba yangu]\""], answer: 3, why: "Kishika-nafasi kinakupa msaada bila kutoa namba za siri." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua AI kwa makosa na upendeleo",
          minutes: 5,
          goal: "Kagua jibu la AI kwa makosa na upendeleo usio wa haki kabla ya kulitumia.",
          text: [
            "AI inaweza kukosea huku ikisikika na uhakika. Inaweza kubuni ukweli, nukuu, sheria au vyanzo, jambo linaloitwa hallucination (kubuni). Kagua kila wakati ukweli muhimu kwenye chanzo rasmi au cha kuaminika.",
            "AI pia inaweza kuwa na upendeleo: ilijifunza kutoka maandishi ya watu, ambayo yana dhana potofu zisizo za haki. Inaweza kuwaeleza wauguzi kama wanawake na wahandisi kama wanaume, au kuwatendea watu tofauti kwa sababu ya jina, umri, rangi, ulemavu au rekodi ya uhalifu. Katika kuajiri, kukopesha, makazi au shule, hilo linaweza kuleta madhara halisi.",
            "Ijaribu: uliza swali lile lile ukibadilisha jambo moja, kama jina tofauti, na ulinganishe majibu. Kama AI inawatendea watu bila haki, usitumie jibu hilo, na uliripoti kwa kitufe cha maoni (feedback) cha zana hiyo."
          ],
          steps: ["Tafuta ukweli ndani ya jibu na uukague kwenye chanzo cha kuaminika.", "Tafuta dhana potofu au mawazo yasiyo ya haki.", "Uliza tena ukibadilisha jambo moja na ulinganishe.", "Usitumie majibu yasiyo ya haki au yasiyo sahihi.", "Ripoti matatizo kwa kitufe cha maoni cha zana."],
          words: [["Hallucination (kubuni)", "AI inaposema jambo la uongo kana kwamba ni kweli."], ["Upendeleo (bias)", "kutendewa bila haki au kudhaniwa vibaya kwa kundi la watu."], ["Dhana potofu (stereotype)", "imani iliyorahisishwa kupita kiasi kuhusu kundi la watu."]],
          slides: [
            { title: "AI inaweza kukosea ikiwa na uhakika", bullets: ["Ukweli, nukuu na vyanzo vya kubuni", "Kagua yaliyo muhimu kwenye vyanzo vya kuaminika"] },
            { title: "AI inaweza kuwa na upendeleo", bullets: ["Ilijifunza kutoka maandishi ya watu", "Dhana potofu kuhusu jinsia, rangi, umri, rekodi za uhalifu", "Madhara halisi katika kuajiri, makazi, shule"] },
            { title: "Jaribu na uripoti", bullets: ["Badilisha jambo moja na ulinganishe", "Usitumie majibu yasiyo ya haki", "Tumia kitufe cha maoni"] }
          ],
          tryIt: "Muulize msaidizi wa AI \"eleza muuguzi wa kawaida na mhandisi wa kawaida.\" Tafuta dhana potofu. Kisha muombe aandike barua ya kumpendekeza \"Maria\" kwa kazi, na tena kwa \"James\" kwa taarifa zile zile, na ulinganishe.",
          youCanNow: "kukagua majibu ya AI kwa makosa na kuyajaribu kwa upendeleo usio wa haki.",
          quickCheck: [
            { objective: "O5", q: "Upendeleo wa AI ni nini?", options: ["AI inapofanya kazi polepole", "AI inapotumia maneno makubwa", "AI inapowatendea makundi ya watu bila haki au kutumia dhana potofu", "AI inapojibu kwa orodha"], answer: 2, why: "AI ilijifunza kutoka maandishi ya watu, kwa hiyo inaweza kurudia dhana potofu zisizo za haki." },
            { objective: "O5", q: "AI inakupa sheria kuhusu kupiga kura baada ya kuhukumiwa kwa kosa. Unafanya nini kabla ya kuitegemea?", options: ["Ikague kwenye chanzo rasmi au cha kuaminika", "Iamini kwa sababu inasikika na uhakika", "Washirikishe marafiki kwanza", "Iulize AI kama ina uhakika"], answer: 0, why: "AI inaweza kubuni sheria; kagua ukweli muhimu kwenye chanzo rasmi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutumia AI kwa uaminifu shuleni, kazini na mtandaoni",
          minutes: 5,
          goal: "Fuata sheria za matumizi ya AI na uwe mkweli kuhusu wakati ulipoitumia.",
          text: [
            "Sheria kuhusu AI zinatofautiana. Baadhi ya walimu wanaruhusu AI kwa kupata mawazo lakini si kwa kuandika; baadhi ya kazi zinaitaka; baadhi zinaikataza. Uliza au soma sheria kwanza. Kuwasilisha kazi ya AI kama yako mahali isiporuhusiwa ni udanganyifu na kunaweza kukugharimu alama, kazi au cheti.",
            "Kuwa mkweli. Kama AI ilikusaidia, sema ilisaidiaje pale inapohitajika: \"Nilitumia msaidizi wa AI kukagua sarufi.\" Usitumie kamwe AI kutengeneza maoni (reviews) bandia, nyaraka bandia, au picha au video za watu halisi bila ridhaa yao. Kutengeneza picha bandia za ngono au za kuaibisha za watu halisi kunaleta madhara na, katika sehemu nyingi, ni kinyume cha sheria.",
            "Jua wakati wa kutotumia AI: dharura (piga 911), maamuzi makubwa ya afya, sheria au pesa (ongea na mtaalamu), na jambo lolote ambalo usingependa maneno yako yahifadhiwe. Wewe ndiye unayewajibika kwa unachotuma au kuweka mtandaoni, hata kama AI ndiyo iliyoandika."
          ],
          steps: ["Soma au uliza kuhusu sheria za AI shuleni au kazini kwako.", "Tumia AI kwa njia zilizoruhusiwa tu.", "Sema AI ilisaidiaje pale inapohitajika.", "Usitengeneze kamwe vitu bandia vya watu halisi au nyaraka.", "Usitumie AI kwa dharura na maamuzi makubwa."],
          words: [["Uaminifu wa kitaaluma", "kufanya kazi yako mwenyewe na kutaja msaada uliotumia."], ["Ridhaa (consent)", "ruhusa ya mtu."]],
          slides: [
            { title: "Jua sheria", bullets: ["Sheria zinatofautiana kwa darasa na kazi", "Uliza au zisome kwanza", "Kuzivunja kunaweza kugharimu alama au kazi"] },
            { title: "Kuwa mkweli", bullets: ["Sema AI ilisaidiaje", "Hakuna maoni au nyaraka bandia", "Hakuna vitu bandia vya watu halisi bila ridhaa yao"] },
            { title: "Wakati wa kutotumia AI", bullets: ["Dharura: piga 911", "Maamuzi makubwa ya afya, sheria au pesa", "Wewe unawajibika kwa unachoweka mtandaoni"] }
          ],
          tryIt: "Kazi ya mwisho: maliza orodha yako ya usalama (kaulisiri, uthibitisho wa hatua mbili, masasisho, mahali pa kuripoti) na uandike kadi ya mistari mitano ya sheria zako binafsi za AI kuhusu faragha, kukagua majibu, uaminifu, haki na wakati wa kutotumia AI.",
          youCanNow: "kulinda akaunti zako, kuepuka na kuripoti ulaghai, na kutumia AI kwa usalama, uaminifu na haki.",
          quickCheck: [
            { objective: "O6", q: "Nani anawajibika kwa ujumbe unaouweka mtandaoni ulioandikwa na AI?", options: ["Kampuni ya AI", "Hakuna mtu", "Tovuti", "Wewe"], answer: 3, why: "Wewe unawajibika kwa unachotuma au kuweka mtandaoni, hata kama AI ndiyo iliyoandika." },
            { objective: "O6", q: "Programu yako ya mafunzo hairuhusu AI kwenye mtihani wa mwisho. Chaguo la uaminifu ni lipi?", options: ["Tumia AI kimya kimya", "Fuata sheria na ufanye mtihani mwenyewe", "Mwombe rafiki akutumie AI", "Nakili jibu la AI na ubadilishe maneno machache"], answer: 1, why: "Kutumia AI mahali isiporuhusiwa ni udanganyifu na kunaweza kukugharimu cheti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI kwa uwajibikaji",
        questions: [
          { objective: "O4", q: "Kipi ni salama kuandika kwa msaidizi wa AI?", options: ["Namba yako ya Social Security", "Nywila ya benki yako", "Historia ya matibabu ya rafiki yako", "\"Nisaidie kuandika ujumbe wa shukrani kwa msimamizi wangu wa kesi\""], answer: 3, why: "Maombi ya jumla yasiyo na taarifa za siri ni salama." },
          { objective: "O5", q: "Hallucination ya AI ni nini?", options: ["AI inaposema jambo la uongo kana kwamba ni kweli", "Ndoto", "Nywila imara", "Aina ya virusi"], answer: 0, why: "AI inaweza kubuni ukweli huku ikisikika na uhakika." },
          { objective: "O5", q: "Unawezaje kujaribu zana ya AI kama ina upendeleo?", options: ["Iamini", "Iulize kama ina upendeleo na uamini inachosema", "Uliza swali lile lile ukibadilisha jambo moja na ulinganishe", "Itumie usiku tu"], answer: 2, why: "Kubadilisha jambo moja kunaonyesha kama inawatendea watu tofauti." },
          { objective: "O6", q: "Mwalimu wako anaruhusu AI kwa kupata mawazo tu. Kipi ni cha uaminifu?", options: ["Ruhusu AI iandike insha nzima na useme ni yako", "Nakili insha ya AI ya rafiki", "Puuza sheria", "Itumie kupata mawazo, kisha uandike kazi mwenyewe"], answer: 3, why: "Fuata sheria za jinsi AI inavyoweza kutumika." },
          { objective: "O6", q: "Mtu ana dharura ya kiafya. Unafanya nini?", options: ["Uliza chatbot ya AI", "Andika mtandaoni", "Piga 911", "Subiri"], answer: 2, why: "Dharura zinahitaji huduma za dharura, si AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Usalama Mtandaoni na Matumizi ya AI kwa Uwajibikaji",
    questions: [
      { objective: "O1", q: "Ni akaunti ipi unapaswa kuilinda kwanza?", options: ["Akaunti ya mchezo", "Barua pepe yako", "Tovuti ya mapishi", "App ya hali ya hewa"], answer: 1, why: "Barua pepe inaweza kubadilisha nywila zako nyingine." },
      { objective: "O1", q: "Kaulisiri ni:", options: ["Nywila iliyotengenezwa kwa maneno kadhaa yasiyohusiana", "Jina lako na tarehe ya kuzaliwa", "Namba fupi", "Msimbo wa simu"], answer: 0, why: "Maneno yasiyohusiana yanatengeneza nywila ndefu na imara." },
      { objective: "O1", q: "Je, utumie nywila moja kila mahali?", options: ["Ndiyo, ni rahisi zaidi", "Kwa benki tu", "Hapana, tumia tofauti kwa kila akaunti muhimu", "Kwa barua pepe tu"], answer: 2, why: "Nywila moja ikiibiwa ingefungua kila kitu." },
      { objective: "O1", q: "Kidhibiti nywila:", options: ["Kinahifadhi nywila zako kwa usalama", "Kinazishiriki mtandaoni", "Kinakisia nywila za watu wengine", "Kinafuta akaunti zako"], answer: 0, why: "Kinakukumbukia nywila imara." },
      { objective: "O1", q: "Ni shirika gani la Marekani linashauri nywila imara, MFA na masasisho ya programu katika kampeni yake ya uelewa?", options: ["NASA", "Huduma ya Posta", "Huduma ya Hifadhi za Taifa", "CISA"], answer: 3, why: "CISA inaongoza uelewa wa usalama wa mitandao Marekani." },
      { objective: "O2", q: "Ujumbe mfupi usiotarajiwa unasema akaunti yako ya benki imefungwa na unatoa kiungo. Unapaswa:", options: ["Kubofya na kuingiza taarifa zako za kuingia", "Kutobofya; wasiliana na benki kwa namba unayoijua", "Kujibu kwa namba ya kadi yako", "Kuwatumia marafiki"], answer: 1, why: "Hii ni dalili ya kawaida ya phishing." },
      { objective: "O2", q: "Walaghai wanaoomba malipo kwa kadi za zawadi ni:", options: ["Kawaida kwa ofisi za serikali", "Dalili ya hatari ya ulaghai", "Njia salama ya kulipa bili", "Lazima kwa benki"], answer: 1, why: "Mashirika halisi hayaombi kadi za zawadi." },
      { objective: "O2", q: "Kunakili sauti (voice cloning) maana yake ni:", options: ["Kuimba kwaya", "Kurekodi ujumbe wako wa sauti", "Kuboresha simu", "Kutumia AI kunakili sauti ya mtu"], answer: 3, why: "Walaghai wanaweza kunakili sauti kutoka vipande vifupi vya sauti." },
      { objective: "O2", q: "Neno la siri la familia linakusaidia:", options: ["Kukagua kama simu ya dharura kweli ni ya familia", "Kufungua simu yako", "Kupata punguzo la bei", "Kubadilisha nywila"], answer: 0, why: "Sauti iliyonakiliwa haitajua neno la siri." },
      { objective: "O3", q: "Unaripoti wapi udanganyifu nchini Marekani?", options: ["Sehemu ya maoni", "Tovuti ya mlaghai", "ReportFraud.ftc.gov", "Mahali popote"], answer: 2, why: "FTC inakusanya ripoti za udanganyifu." },
      { objective: "O3", q: "Kama namba yako ya Social Security imeibiwa, FTC inakuelekeza:", options: ["Kikundi cha mitandao ya kijamii", "Chatbot ya AI", "Hakuna kitu", "IdentityTheft.gov"], answer: 3, why: "IdentityTheft.gov inatoa hatua za kupona." },
      { objective: "O3", q: "Credit freeze (kufunga mikopo):", options: ["Inafunga akaunti yako ya benki milele", "Inapoza kompyuta yako", "Inazuia mkopo mpya kufunguliwa kwa jina lako", "Inafuta historia yako ya mikopo"], answer: 2, why: "Inazuia wezi kufungua akaunti mpya." },
      { objective: "O3", q: "Ufanye nini kama ulibofya kiungo kibaya?", options: ["Usifanye chochote", "Sasisha programu ya usalama na ufanye scan", "Bofya viungo zaidi", "Tupa simu"], answer: 1, why: "Scan inapata na kuondoa programu hatari." },
      { objective: "O4", q: "Kuandika kwenye mazungumzo ya AI kunafanana zaidi na:", options: ["Kuongea mahali pa umma", "Kuandika kwenye shajara iliyofungwa", "Kufikiri kimya", "Kuongea na wakili"], answer: 0, why: "Mazungumzo yanaweza kuhifadhiwa, kwa hiyo kuwa mwangalifu." },
      { objective: "O4", q: "Badala ya kuandika namba yako ya kesi kwenye AI, tumia:", options: ["Namba halisi", "Nusu ya namba", "Kishika-nafasi kama \"[namba yangu]\"", "SSN yako"], answer: 2, why: "Vishika-nafasi vinalinda taarifa za siri." },
      { objective: "O5", q: "Upendeleo wa AI maana yake ni:", options: ["Kutendewa bila haki au kudhaniwa vibaya kwa makundi ya watu", "Jibu la haraka", "Jibu refu", "Aina ya nywila"], answer: 0, why: "AI inaweza kurudia dhana potofu zisizo za haki." },
      { objective: "O5", q: "Zana ya AI inampa mwombaji kazi alama ya chini kwa sababu ya jina lake tu. Unapaswa:", options: ["Kuitumia hata hivyo", "Kubadilisha jina la mwombaji", "Kuificha", "Kutotumia matokeo hayo na kuyaripoti"], answer: 3, why: "Matokeo ya AI yasiyo ya haki hayapaswi kutumika." },
      { objective: "O6", q: "Kama AI ilikusaidia na kazi yako na jambo hilo ni muhimu, unapaswa:", options: ["Kulificha", "Kusema AI ilisaidiaje", "Kudai uliifanya peke yako", "Kulaumu AI kwa makosa"], answer: 1, why: "Kuwa mkweli kuhusu matumizi ya AI kunajenga uaminifu." },
      { objective: "O6", q: "Kutengeneza kwa AI picha bandia ya kuaibisha ya mwanafunzi mwenzako halisi ni:", options: ["Mzaha usio na madhara", "Kunaleta madhara na ni kinyume cha sheria katika sehemu nyingi", "Lazima kwa shule", "Kuzuri kwa usalama"], answer: 1, why: "Vitu bandia vya watu halisi bila ridhaa yao vinaleta madhara halisi." },
      { objective: "O6", q: "Nani anawajibika kwa chapisho unaloshiriki lililoandikwa na AI?", options: ["AI", "Hakuna mtu", "Mtoa huduma ya intaneti", "Wewe"], answer: 3, why: "Wewe unawajibika kwa unachotuma au kuweka mtandaoni." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 5, 6, 9, 10, 14, 15, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Barua pepe imelindwa", objective: "O1", notYet: "Nywila ya barua pepe ni fupi au inatumika mahali pengine pia, au uthibitisho wa hatua mbili umezimwa.", meets: "Nywila ya barua pepe ni kaulisiri imara na uthibitisho wa hatua mbili umewashwa.", exceeds: "Misimbo ya akiba imehifadhiwa mahali pa siri na akaunti nyingine muhimu zina nywila zao wenyewe." },
      { name: "Masasisho yamekaguliwa", objective: "O1", notYet: "Simu na apps hazikukaguliwa kama zina masasisho.", meets: "Simu na apps zilikaguliwa na kusasishwa.", exceeds: "Masasisho ya kiotomatiki yamewashwa pale yanapopatikana." },
      { name: "Mahali pa kuripoti", objective: "O3", notYet: "Ameandika chini ya sehemu tatu za kuripoti.", meets: "Ameandika 7726 kwa ujumbe mfupi, reportphishing@apwg.org kwa barua pepe na ReportFraud.ftc.gov kwa udanganyifu.", exceeds: "Pia ameandika IdentityTheft.gov na hatua za kwanza ikiwa taarifa zimeibiwa." },
      { name: "Kadi ya sheria binafsi za AI", objective: "O6", notYet: "Chini ya mistari mitano, au hakuna mstari kuhusu faragha au uaminifu.", meets: "Mistari mitano kuhusu faragha, kukagua majibu, uaminifu, haki na wakati wa kutotumia AI.", exceeds: "Kila mstari una mfano halisi kutoka maisha ya mwanafunzi mwenyewe." },
      { name: "Faragha katika prompt", objective: "O4", notYet: "Kadi ya sheria au prompt za mazoezi zina namba za siri.", meets: "Hakuna namba za siri popote, na vishika-nafasi vimetumika.", exceeds: "Mwanafunzi alikagua mipangilio ya faragha ya zana yake ya AI." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kuwa uthibitisho wa hatua mbili bado umewashwa kwenye barua pepe yao baada ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kutambua na kuepuka ulaghai ndani ya siku 60",
      "Washirika wa kurudi katika jamii wanaripoti wateja wachache kupoteza pesa au akaunti kwa ulaghai"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya programu",
      "Uwezo wa kufungua mipangilio ya akaunti ya barua pepe ya mwanafunzi mwenyewe",
      "Simu inayoweza kupokea misimbo ya uthibitisho wa hatua mbili",
      "Karatasi na kalamu kwa orodha na kadi ya sheria binafsi za AI",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi, na kazi za \"Jaribu sasa\" zifanywe papo hapo.",
      "Usiwaombe wanafunzi kamwe kusema au kuonyesha nywila zao, namba za kesi au misimbo ya akiba; wanafanya mabadiliko kwa faragha.",
      "Onyesha mifano ya ujumbe wa ulaghai kwenye skrini na kikundi kitaje dalili za hatari kwa sauti.",
      "Wakumbushe wanafunzi walio kwenye parole au probation kufuata masharti yoyote kuhusu matumizi ya intaneti.",
      "Pima orodha ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
