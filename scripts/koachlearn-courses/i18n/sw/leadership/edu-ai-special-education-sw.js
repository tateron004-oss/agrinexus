"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-special-education.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-special-education-sw",
  lang: "sw",
  translationOf: "edu-ai-special-education",
  category: "Leadership Development",
  name: "AI katika Elimu Maalum",
  skills: "Kujua wapi AI inafaa na wapi haifai katika elimu maalum, Kutengeneza matoleo ya vifaa vinavyofikika kwa urahisi, Kujenga vielelezo vya picha na kazi zilizogawanywa, Kuandika maelezo ya lugha rahisi kwa familia, Kulinda taarifa za IEP na 504, Kuweka kanuni za timu",
  outcome: "kutumia AI kufanya vifaa vya darasani vifikike kwa urahisi zaidi (matoleo ya lugha rahisi, hatua zilizogawanywa, ratiba za picha na mazoezi ya viwango kadhaa), na kueleza taratibu za elimu maalum kwa familia kwa maneno rahisi, huku kila uamuzi wa IEP na 504 na taarifa zote za wanafunzi zikibaki kwa timu.",
  about: [
    "Kozi hii ni kwa walimu wa elimu maalum, walimu wa elimu ya kawaida wanaofundisha wanafunzi wenye ulemavu, watoa huduma zinazohusiana (related services), waratibu na wakuu wa shule. AI inaweza kuokoa muda katika kurekebisha vifaa na kueleza taratibu. Haipaswi kamwe kuandika au kuamua yaliyomo katika IEP au mpango wa 504 wa mwanafunzi.",
    "Sura ya 1 inaweka mipaka (kile IDEA inachotaka kutoka kwa timu, na kwa nini AI haiwezi kuchukua nafasi hiyo) na inafanya mazoezi ya kutengeneza vifaa vinavyofikika. Sura ya 2 inahusu mawasiliano na familia, kulinda taarifa za wanafunzi, na kanuni ambazo timu yako itafuata.",
    "Kozi hii inaeleza sheria kwa maneno rahisi ili ujue cha kuuliza; si ushauri wa kisheria. Mkurugenzi wa elimu maalum wa wilaya yako na mwanasheria wake ndio wenye neno la mwisho. Fanya mazoezi kwa vifaa vya kubuni au vya jumla tu. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza kifurushi cha ufikivu kwa somo moja la jumla (bila taarifa za mwanafunzi): toleo la lugha rahisi la usomaji mkuu, kazi iliyogawanywa katika vipande vyenye namba pamoja na orodha ya kukagua, ratiba ya picha ya somo, na mazoezi ya viwango viwili; pamoja na ukurasa mmoja wa maelezo ya lugha rahisi kwa familia kuhusu hatua ya jumla ya elimu maalum (kwa mfano, \"kinachotokea katika mkutano wa kila mwaka wa IEP\"). Kagua usahihi wa kila kitu, na uandike kanuni tano za timu kuhusu matumizi ya AI katika elimu maalum.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu wa elimu maalum, walimu wa elimu ya kawaida wanaofundisha wanafunzi wenye ulemavu, watoa huduma zinazohusiana, waratibu na wakuu wa shule katika shule za Marekani.",
    startingPoint: "Wanarekebisha vifaa na kueleza taratibu za elimu maalum kwa mkono, jambo linalochukua muda mwingi. Huenda wamejaribu AI lakini hawana uhakika inafaa wapi chini ya IDEA na Section 504, na jinsi ya kulinda taarifa za IEP na 504.",
    gap: "AI inaweza kuokoa muda kwa vifaa vinavyofikika na maelezo ya lugha rahisi kwa familia, lakini haipaswi kamwe kuandika au kuamua yaliyomo katika IEP au 504 ya mwanafunzi, na taarifa za wanafunzi ni nyeti sana. Walimu wanahitaji kutumia AI kwa kazi sahihi, kukagua inachotoa na kufuata kanuni za timu zilizo wazi.",
    constraints: [
      "Kozi inaeleza sheria kwa maneno rahisi na si ushauri wa kisheria; mkurugenzi wa elimu maalum wa wilaya na mwanasheria ndio wenye neno la mwisho",
      "Fanya mazoezi kwa vifaa vya kubuni au vya jumla tu; hakuna taarifa za mwanafunzi katika zana yoyote ya AI isiyoidhinishwa",
      "Maamuzi ya IEP na 504 na marekebisho yanayotakiwa (accommodations) yanabaki kwa timu na yanatolewa kama yalivyoandikwa",
      "Vifaa vya familia vinabaki vya jumla na vinakaguliwa dhidi ya vifaa vya wilaya; tafsiri zinakaguliwa na wazungumzaji wenye sifa",
      "Muda: masomo mafupi yanayoingia katika siku ya kufundisha"
    ],
    prerequisites: "Hakuna. Kozi \"AI for School and Educational Leaders 2: AI Tools for Educators\" ni mwanzo mzuri."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za elimu maalum", action: "kupanga kila kazi katika \"AI inaweza kusaidia\" au \"timu pekee\"", standard: "ukiweka kila uamuzi wa IEP na 504 kwa timu" },
    { id: "O2", condition: "Ukipewa usomaji na kazi ya jumla", action: "kutengeneza kwa AI toleo la lugha rahisi na orodha ya kukagua ya kazi iliyogawanywa", standard: "ukilinganisha kila moja na asili na kurekebisha kila ukweli ulioachwa au uliobadilishwa" },
    { id: "O3", condition: "Kwa somo moja la jumla", action: "kutengeneza ratiba ya picha na mazoezi ya viwango viwili", standard: "kila picha ikiwa na alt text, kila jibu likiwa limekaguliwa, na marekebisho yanayotakiwa bado yakitolewa kama yalivyoandikwa" },
    { id: "O4", condition: "Ukipewa hatua ya jumla ya elimu maalum", action: "kuandika ukurasa mmoja wa maelezo ya lugha rahisi kwa familia", standard: "yaliyokaguliwa dhidi ya vifaa rasmi vya wilaya yako na kusomwa na mwenzako kuangalia mtindo wa lugha" },
    { id: "O5", condition: "Wafanyakazi wanapotaka msaada wa AI kuhusu taarifa za elimu maalum", action: "kuchagua njia salama ya kupata msaada bila kutoa maelezo ya IEP, 504 au tathmini", standard: "ukitumia zana zilizoidhinishwa tu, kwa taarifa chache zaidi zinazohitajika" },
    { id: "O6", condition: "Kwa timu yako", action: "kuandika kanuni tano za timu kuhusu matumizi ya AI katika elimu maalum", standard: "kila moja ikiwa na mfano, na zikishirikiwa na walimu, wasaidizi wa walimu (paraprofessionals) na watoa huduma zinazohusiana" }
  ],
  chapters: [
    {
      name: "Sura 1: Mipaka na vifaa vinavyofikika",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wapi AI inafaa, na wapi haifai",
          minutes: 6,
          goal: "Eleza AI inaweza kusaidia nini katika elimu maalum na nini kinabaki kwa timu ya IEP.",
          text: [
            "Sheria ya Individuals with Disabilities Education Act (IDEA) ya Marekani inataka watoto wenye ulemavu wanaostahili wapate elimu ya umma ya bure na inayofaa (FAPE). Chini ya Part B, inayohusu umri wa miaka 3 hadi 21, huduma zinaandikwa katika Individualized Education Program (IEP), mpango unaotengenezwa na timu inayojumuisha wazazi wa mtoto na wafanyakazi wa shule. Part C inahusu huduma za mapema kwa watoto wachanga na wadogo. Mipango ya Section 504 ni njia nyingine tofauti kwa baadhi ya wanafunzi wenye ulemavu.",
            "Haya ni maamuzi ya kila mtoto peke yake, ya kisheria, na ya timu, yanayotegemea tathmini na kumjua mtoto. AI haiwezi kuhudhuria mkutano, haimjui mtoto, na inaweza kutoa maudhui ya jumla au yasiyo sahihi. Kwa hiyo AI isiandike viwango vya sasa (present levels), malengo, huduma, marekebisho wala mahali pa kusomea (placement), na kile AI inachotoa kisitumike kamwe kuamua kama mtoto anastahili.",
            "Mahali AI inaposaidia: kurekebisha vifaa vya jumla vya darasani, kutengeneza mazoezi ya viwango kadhaa, kutengeneza vielelezo vya picha, kuandaa maelezo ya jumla ya taratibu kwa familia, na kupanga ratiba yako na violezo vya makaratasi yako (bila taarifa za wanafunzi)."
          ],
          words: [["IDEA", "sheria ya serikali kuu ya Marekani inayotaka elimu ya umma ya bure na inayofaa kwa watoto wenye ulemavu wanaostahili."], ["FAPE", "free appropriate public education (elimu ya umma ya bure na inayofaa): kile IDEA inachowahakikishia wanafunzi wanaostahili."], ["IEP", "Individualized Education Program: mpango ulioandikwa wa huduma za elimu maalum za mwanafunzi, unaotengenezwa na timu inayojumuisha wazazi."], ["Mpango wa Section 504", "mpango unaotoa marekebisho kwa mwanafunzi mwenye ulemavu chini ya sheria nyingine ya serikali kuu."]],
          slides: [
            { title: "IDEA inataka nini", bullets: ["FAPE kwa watoto wenye ulemavu wanaostahili", "Part B: umri wa miaka 3 hadi 21, kupitia IEP", "IEP inatengenezwa na timu inayojumuisha wazazi"] },
            { title: "AI HAIFANYI", bullets: ["Kuandika malengo, huduma au marekebisho", "Kuamua kama anastahili au mahali pa kusomea", "Kuchukua nafasi ya timu inayomjua mtoto"] },
            { title: "AI INAWEZA kusaidia", bullets: ["Kurekebisha vifaa vya jumla", "Mazoezi ya viwango kadhaa; vielelezo vya picha", "Maelezo ya jumla kwa familia"] }
          ],
          sources: [{ name: "US Department of Education: Annual Report to Congress on IDEA (Part B ages 3 through 21)", url: "https://sites.ed.gov/idea/2021-individuals-with-disabilities-education-act-annual-report-to-congress/" }, { name: "NCLD: Individuals with Disabilities Education Act", url: "https://ncld.org/understand-the-issues/learn-the-law/individuals-with-disabilities-education-act" }],
          tryIt: "Tengeneza safu mbili: \"AI inaweza kusaidia\" na \"Timu pekee\". Weka angalau kazi kumi za elimu maalum kutoka wiki yako katika safu sahihi.",
          youCanNow: "kuweka mstari ulio wazi kati ya kazi ambazo AI inaweza kusaidia na maamuzi ya timu ya IEP.",
          quickCheck: [
            { objective: "O1", q: "Nani anatengeneza IEP ya mwanafunzi?", options: ["Zana ya AI iliyoidhinishwa na wilaya", "Timu inayojumuisha wazazi na wafanyakazi wa shule", "Mkuu wa shule peke yake", "Mwalimu wa elimu ya kawaida wa mwanafunzi peke yake"], answer: 1, why: "IEP inatengenezwa na timu inayojumuisha wazazi." },
            { objective: "O1", q: "Mwenzako anaiomba AI ipendekeze marekebisho ambayo mwanafunzi apewe. Ungesema nini?", options: ["Wazo zuri; tumia orodha yake", "Omba zana nyingine ya AI ikague", "Maamuzi ya marekebisho ni ya timu ya IEP au 504, si ya AI", "Tumia orodha ya AI kwa wanafunzi wadogo tu"], answer: 2, why: "Maamuzi ya IEP na 504 yanabaki kwa timu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Matoleo ya lugha rahisi na kazi zilizogawanywa",
          minutes: 5,
          goal: "Tumia AI kutengeneza toleo la lugha rahisi la usomaji na kugawanya kazi katika vipande.",
          text: [
            "Wanafunzi wengi wanasaidiwa na maandishi yanayobaki na mawazo yale yale lakini ni rahisi kusoma: sentensi fupi, maneno ya kawaida, maneno muhimu yaliyoelezwa, vichwa vya habari na vitone. Prompt: \"Andika upya kifungu hiki kwa kiwango cha kusoma cha darasa la 3 hivi. Baki na kila ukweli muhimu na maneno haya ya msamiati: [orodha]. Tumia sentensi fupi na vichwa vya habari. Ongeza kisanduku kinachoeleza kila neno la msamiati.\"",
            "Kugawanya (chunking) ni kuvunja kazi yenye hatua nyingi kuwa hatua ndogo zenye namba pamoja na orodha ya kukagua. Prompt: \"Gawanya kazi hii katika hatua 5 hadi 8 zenye namba, kitendo kimoja kwa kila hatua, kisanduku cha kuweka alama kwa kila moja na muda unaokadiriwa.\"",
            "Linganisha kila toleo na asili: AI wakati mwingine huacha au kubadilisha ukweli inaporahisisha. Baki na mawazo ya kiwango cha darasa; kurahisisha usomaji hakupaswi kushusha lengo la kujifunza."
          ],
          steps: ["Bandika kifungu au kazi ya jumla (bila taarifa za mwanafunzi).", "Omba toleo la lugha rahisi, likibaki na ukweli muhimu na msamiati.", "Omba vipande vyenye namba, visanduku vya alama na muda.", "Linganisha na asili; rekebisha ukweli ulioachwa au uliobadilishwa.", "Baki na lengo lile lile la kujifunza."],
          words: [["Lugha rahisi", "uandishi ulio wazi wenye sentensi fupi na maneno ya kawaida."], ["Kugawanya (chunking)", "kuvunja kazi kuwa hatua ndogo zinazoweza kufanyika."]],
          slides: [
            { title: "Toleo la lugha rahisi", bullets: ["Mawazo yale yale, usomaji rahisi zaidi", "Sentensi fupi, maneno ya kawaida, vichwa vya habari", "Baki na msamiati muhimu, pamoja na maana zake"] },
            { title: "Gawanya kazi", bullets: ["Hatua 5-8 zenye namba", "Kitendo kimoja kwa kila hatua", "Kisanduku cha alama na muda kwa kila moja"] },
            { title: "Linganisha na asili", bullets: ["Kurahisisha kunaweza kuacha ukweli", "Lengo lile lile la kujifunza"] }
          ],
          tryIt: "Chukua usomaji na kazi ya jumla kutoka somo linalokuja. Tengeneza kwa AI toleo la lugha rahisi na orodha ya kukagua iliyogawanywa, kisha linganisha kila moja na asili na urekebishe makosa yoyote.",
          youCanNow: "kutengeneza matoleo sahihi ya lugha rahisi na yaliyogawanywa ya vifaa vya darasa.",
          quickCheck: [
            { objective: "O2", q: "Lugha rahisi ni nini?", options: ["Sentensi fupi na maneno ya kawaida yanayobaki na mawazo yale yale", "Maandishi mafupi yenye mawazo machache", "Maandishi yasiyo na alama za uakifishaji", "Tafsiri kwenda lugha nyingine"], answer: 0, why: "Lugha rahisi inafanya maandishi yawe rahisi kusoma bila kubadilisha yaliyomo." },
            { objective: "O2", q: "Orodha ya kukagua iliyogawanywa na AI imeruka hatua moja ya kazi. Unafanya nini?", options: ["Kuitumia; wanafunzi watajua wenyewe", "Kuondoa hatua hiyo kwenye kazi", "Kuwaomba wanafunzi watafute hatua iliyokosekana", "Kuilinganisha na kazi ya asili na kuongeza hatua iliyokosekana"], answer: 3, why: "Kulinganisha na asili kunagundua hatua na ukweli ulioachwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Vielelezo vya picha na mazoezi ya viwango kadhaa",
          minutes: 5,
          goal: "Tengeneza ratiba ya picha na mazoezi ya viwango viwili kwa somo.",
          text: [
            "Ratiba za picha na vielelezo vya picha vinawasaidia wanafunzi wengi kujua kinachokuja na cha kufanya. AI inaweza kuandaa maneno ya ratiba ya picha (\"1. Kuchangamsha, dakika 5; 2. Somo fupi...\") na kupendekeza alama rahisi (icons); zana kama Canva zinaweza kuipanga. Kwa picha, hakikisha ziko wazi, zina heshima na zinalingana na maneno.",
            "Mazoezi ya viwango kadhaa yanamwezesha kila mwanafunzi kufanyia kazi ujuzi ule ule: iombe AI seti yenye msaada zaidi (mfano uliotatuliwa kwanza, hatua chache, benki ya maneno) na seti ya kiwango cha darasa. Kagua kila jibu.",
            "Kumbuka kwamba marekebisho yaliyoandikwa katika IEP au mpango wa 504 wa mwanafunzi lazima yatolewe kama yalivyoandikwa; vifaa vyako vinaongeza msaada kwa kila mtu lakini havichukui nafasi ya marekebisho yanayotakiwa. Kagua pia ufikivu: herufi zinazosomeka, tofauti nzuri ya rangi (contrast), alt text kwa picha, na maandishi yanayofanya kazi na text-to-speech."
          ],
          steps: ["Andaa maneno ya ratiba ya picha kwa AI.", "Ipange kwa alama zilizo wazi na zenye heshima.", "Omba mazoezi yenye msaada zaidi na ya kiwango cha darasa.", "Kagua kila jibu.", "Kagua ufikivu: herufi, tofauti ya rangi, alt text, text-to-speech."],
          words: [["Ratiba ya picha", "orodha ya picha na maneno ya kitakachotokea, kwa mpangilio."], ["Alt text", "maelezo mafupi ya maandishi ya picha kwa watu wanaotumia programu za kusoma skrini (screen readers)."], ["Text-to-speech", "teknolojia inayosoma maandishi kwa sauti."]],
          slides: [
            { title: "Ratiba za picha", bullets: ["AI inaandaa hatua na muda", "Panga kwa alama zilizo wazi na zenye heshima"] },
            { title: "Mazoezi ya viwango viwili", bullets: ["Msaada zaidi: mfano uliotatuliwa, benki ya maneno", "Kiwango cha darasa: ujuzi ule ule", "Kagua kila jibu"] },
            { title: "Ufikivu na marekebisho", bullets: ["Herufi zinazosomeka, tofauti ya rangi, alt text", "Inafanya kazi na text-to-speech", "Marekebisho yanayotakiwa bado yanatumika"] }
          ],
          tryIt: "Tengeneza ratiba ya picha kwa somo moja na mazoezi ya viwango viwili kwa ujuzi wake mkuu. Ongeza alt text kwa kila picha na ukague kila jibu.",
          youCanNow: "kutengeneza vielelezo vya picha na mazoezi ya viwango yanayofanya masomo yafikike kwa urahisi zaidi.",
          quickCheck: [
            { objective: "O3", q: "Ratiba ya picha inaonyesha nini?", options: ["Alama za wanafunzi", "Kalenda ya mwalimu", "Kitakachotokea, kwa mpangilio, kwa picha na maneno", "Mpangilio wa viti"], answer: 2, why: "Ratiba za picha zinawasaidia wanafunzi kujua kinachofuata." },
            { objective: "O3", q: "Mazoezi yako ya viwango viwili yana benki ya maneno, lakini IEP ya mwanafunzi inataka muda wa ziada. Nini kinatumika?", options: ["Toa muda wa ziada kama ulivyoandikwa katika IEP", "Benki ya maneno inachukua nafasi ya muda wa ziada", "Iulize AI msaada upi ni bora", "Tumia muda wa ziada kwenye mitihani tu"], answer: 0, why: "Marekebisho yanayotakiwa na IEP lazima yatolewe kama yalivyoandikwa, hata ukiongeza misaada mingine." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mipaka na vifaa vinavyofikika",
        questions: [
          { objective: "O1", q: "Chini ya IDEA Part B, huduma za elimu maalum kwa wanafunzi wanaostahili wenye umri wa miaka 3 hadi 21 zinaandikwa katika:", options: ["Ripoti ya maendeleo", "Muhtasari wa AI", "IEP inayotengenezwa na timu inayojumuisha wazazi", "Jarida la habari"], answer: 2, why: "IEP ni mpango ulioandikwa wa timu." },
          { objective: "O1", q: "Kazi ipi AI HAIPASWI kufanya?", options: ["Kuandika malengo ya IEP ya mwanafunzi", "Kutengeneza toleo la lugha rahisi la usomaji wa jumla", "Kuandaa ratiba ya picha", "Kutengeneza mazoezi ya viwango viwili"], answer: 0, why: "Yaliyomo katika IEP ni uamuzi wa timu." },
          { objective: "O2", q: "AI imerahisisha kifungu cha sayansi na ikabadilisha ukweli mmoja. Unapaswa kufanya nini?", options: ["Kukitumia hata hivyo", "Kufuta asili", "Kukirahisisha zaidi", "Kulinganisha na asili na kurekebisha"], answer: 3, why: "Kurahisisha kunaweza kuleta makosa." },
          { objective: "O3", q: "Alt text ni nini?", options: ["Aina nyingine ya herufi", "Maelezo ya maandishi ya picha kwa programu za kusoma skrini", "Mtihani mbadala", "Ujumbe mfupi wa simu"], answer: 1, why: "Alt text inafanya picha zifikike." },
          { objective: "O3", q: "Vifaa vyako vya viwango vinatoa msaada zaidi. Je, marekebisho yanayotakiwa na IEP bado yanatumika?", options: ["Hapana, vifaa vinachukua nafasi yake", "Siku za mitihani tu", "Ikiwa wazazi wataomba tu", "Ndiyo, lazima yatolewe kama yalivyoandikwa"], answer: 3, why: "Marekebisho yanayotakiwa hayabadilishwi." }
        ]
      }
    },
    {
      name: "Sura 2: Familia, faragha na kanuni za timu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kueleza taratibu kwa familia kwa maneno rahisi",
          minutes: 5,
          goal: "Andaa maelezo ya lugha rahisi kwa familia kuhusu hatua ya jumla ya elimu maalum.",
          text: [
            "Makaratasi ya elimu maalum yamejaa maneno ambayo familia huenda hazijui: tathmini (evaluation), kustahili (eligibility), viwango vya sasa (present levels), mazingira yenye vikwazo vichache zaidi (least restrictive environment), kinga za kiutaratibu (procedural safeguards). AI ni hodari wa kuandaa maelezo ya jumla ya lugha rahisi ya maneno haya na ya kinachotokea katika kila hatua.",
            "Prompt: \"Mweleze mzazi, kwa Kiingereza rahisi katika kiwango cha kusoma cha darasa la 6 hivi, kinachotokea katika mkutano wa kila mwaka wa IEP: nani anahudhuria, nini kinajadiliwa, anaweza kuuliza nini, na jinsi ya kujiandaa. Mtindo wa upole na heshima. Chini ya maneno 400.\" Kisha yakague dhidi ya taratibu za wilaya yako na vifaa rasmi, kwa sababu AI inaweza kueleza utaratibu wa jimbo lingine au kukosea maelezo.",
            "Yaweke ya jumla. Usitumie AI kuandika chochote kuhusu mtoto fulani. Toa tafsiri zilizokaguliwa na wazungumzaji wenye sifa, na kumbuka kwamba taarifa rasmi ya wilaya yako ya kinga za kiutaratibu ndiyo hati ya kisheria; maelezo yako yanasaidia familia kuielewa, hayaichukui nafasi."
          ],
          steps: ["Chagua hatua au neno la jumla ambalo familia huuliza.", "Omba maelezo ya lugha rahisi, ukitaja mtindo na urefu.", "Yakague dhidi ya taratibu za wilaya na vifaa rasmi.", "Yaweke ya jumla: hakuna mtoto fulani.", "Toa tafsiri zilizokaguliwa; elekeza kwenye taarifa rasmi."],
          words: [["Kinga za kiutaratibu (procedural safeguards)", "haki walizonazo wazazi katika elimu maalum, zinazoelezwa katika taarifa rasmi."], ["Mazingira yenye vikwazo vichache zaidi (least restrictive environment)", "wazo la IDEA kwamba wanafunzi wenye ulemavu wajifunze pamoja na wenzao wasio na ulemavu kadiri inavyofaa."]],
          slides: [
            { title: "Maneno magumu ambayo familia hukutana nayo", bullets: ["Tathmini, kustahili, viwango vya sasa", "Mazingira yenye vikwazo vichache zaidi", "Kinga za kiutaratibu"] },
            { title: "Maelezo ya jumla", bullets: ["Lugha rahisi, mtindo wa upole, mafupi", "Nani anahudhuria, nini kinatokea, jinsi ya kujiandaa", "Kagua dhidi ya taratibu za wilaya"] },
            { title: "Yaweke ya jumla", bullets: ["Hakuna chochote kuhusu mtoto fulani", "Tafsiri zilizokaguliwa", "Taarifa rasmi inabaki kuwa hati ya kisheria"] }
          ],
          tryIt: "Andaa ukurasa mmoja wa maelezo ya lugha rahisi kwa familia kuhusu hatua moja ya jumla ya elimu maalum, yakague dhidi ya vifaa vya wilaya yako, na umwombe mwenzako ayasome kuangalia mtindo wa lugha.",
          youCanNow: "kuzisaidia familia kuelewa taratibu za elimu maalum kwa maelezo yaliyo wazi na yaliyokaguliwa.",
          quickCheck: [
            { objective: "O4", q: "Maelezo kwa familia yaliyotengenezwa kwa AI yanapaswa kuhusu nini?", options: ["Tathmini ya mtoto fulani", "Hatua ya jumla, si mtoto fulani", "Maoni ya mwalimu kuhusu familia", "Bajeti ya wilaya"], answer: 1, why: "Maelezo kwa familia yanabaki ya jumla ili taarifa za mwanafunzi zisiingie kwenye AI." },
            { objective: "O4", q: "Maelezo ya AI kuhusu mkutano wa kila mwaka wa IEP yanatofautiana na vifaa vya wilaya yako. Ungefanya nini?", options: ["Kushiriki toleo la AI kwa kuwa liko wazi zaidi", "Kushiriki yote mawili na kuziacha familia zichague", "Kuiuliza AI lipi ni sahihi", "Kuyarekebisha yalingane na taratibu za wilaya kabla ya kuyashiriki"], answer: 3, why: "Taratibu za wilaya na taarifa rasmi ndizo chanzo, si AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kulinda taarifa za IEP na 504",
          minutes: 5,
          goal: "Tumia kanuni za faragha kwa taarifa za elimu maalum na zana za AI.",
          text: [
            "IEP, mipango ya 504, tathmini, taarifa za ulemavu na maelezo yanayohusiana ni sehemu ya kumbukumbu za elimu za mwanafunzi, zinalindwa na sheria ya FERPA, na ni miongoni mwa taarifa nyeti zaidi ambazo shule inazo. Kutoa taarifa zinazomtambulisha mtu kutoka kwenye kumbukumbu hizo kwa kampuni ya nje kwa kawaida kunahitaji idhini, isipokuwa kama kuna ruhusa maalum ya kisheria (exception).",
            "Kanuni kwa wafanyakazi: usibandike kamwe yaliyomo katika IEP au 504, matokeo ya tathmini, utambuzi wa ugonjwa (diagnoses), mipango ya tabia au majina katika zana za AI zisizoidhinishwa. Ikiwa wilaya yako imeidhinisha zana ya AI kwa kazi ya elimu maalum, itumie tu kama makubaliano yanavyoruhusu, na bado utumie taarifa chache zaidi zinazohitajika.",
            "Kuwa makini na zana za AI za kuandika kumbukumbu za mikutano (note-takers) na kurekodi katika mikutano kuhusu wanafunzi: mikutano ya IEP isirekodiwe wala kuandikwa na zana zisizoidhinishwa. Mkurugenzi wako wa elimu maalum na afisa wa faragha wanaweza kukuambia wilaya na jimbo lako vinaruhusu nini."
          ],
          steps: ["Chukulia taarifa za IEP, 504, tathmini na ulemavu kuwa nyeti sana.", "Usiziweke kamwe katika zana za AI zisizoidhinishwa.", "Tumia zana zilizoidhinishwa kama makubaliano yanavyoruhusu tu.", "Tumia taarifa chache zaidi zinazohitajika.", "Hakuna kurekodi wala maelezo ya AI yasiyoidhinishwa katika mikutano ya wanafunzi."],
          words: [["Kumbukumbu ya elimu", "kumbukumbu inayomhusu mwanafunzi moja kwa moja na inayohifadhiwa na shule."], ["Taarifa nyeti", "taarifa zinazoweza kuleta madhara makubwa zikitolewa, kama maelezo ya ulemavu au afya."]],
          slides: [
            { title: "Miongoni mwa kumbukumbu nyeti zaidi", bullets: ["IEP, mipango ya 504, tathmini", "Utambuzi wa ugonjwa, mipango ya tabia", "Zinalindwa na FERPA"] },
            { title: "Kanuni kwa wafanyakazi", bullets: ["Kamwe katika zana za AI zisizoidhinishwa", "Zana zilizoidhinishwa kama makubaliano yanavyoruhusu tu", "Taarifa chache zaidi zinazohitajika"] },
            { title: "Mikutano kuhusu wanafunzi", bullets: ["Hakuna kurekodi wala maelezo ya AI yasiyoidhinishwa", "Muulize mkurugenzi wako na afisa wa faragha"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Andika mifano mitatu halisi ya taarifa za elimu maalum ambazo wafanyakazi wanaweza kushawishika kubandika katika AI, na kwa kila mmoja, njia salama ya kupata msaada ule ule bila taarifa hizo.",
          youCanNow: "kulinda taarifa za IEP, 504 na ulemavu wakati zana za AI zinatumika.",
          quickCheck: [
            { objective: "O5", q: "Sheria ipi inalinda IEP na kumbukumbu za tathmini kama kumbukumbu za elimu?", options: ["FERPA", "COPPA pekee", "Hakuna sheria", "Sheria ya hakimiliki"], answer: 0, why: "IEP na tathmini ni kumbukumbu za elimu zinazolindwa na FERPA." },
            { objective: "O5", q: "Mwalimu anataka AI iandike upya mpango wa tabia ili uwe wazi zaidi. Njia salama ni ipi?", options: ["Kubandika mpango katika chatbot ya bure", "Kuondoa jina lakini kubaki na utambuzi wa ugonjwa", "Kuomba msaada kwa mfano wa jumla wa kubuni, au kutumia zana iliyoidhinishwa kama makubaliano yanavyoruhusu", "Kumtumia rafiki anayetumia AI kwa barua pepe"], answer: 2, why: "Mipango ya tabia na utambuzi wa ugonjwa haviingii kamwe katika zana zisizoidhinishwa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kanuni za timu kuhusu AI katika elimu maalum",
          minutes: 6,
          goal: "Andika kanuni tano za timu zilizo wazi na uzionyeshe kwa vitendo pamoja na wenzako.",
          text: [
            "Timu yako inahitaji kanuni za pamoja, zilizoandikwa. Tano zinazohusu hali nyingi: 1) AI kamwe haiandiki wala kuamua yaliyomo katika IEP au 504, kustahili au mahali pa kusomea. 2) Hakuna taarifa za mwanafunzi katika zana zisizoidhinishwa. 3) Kila kifaa kilichotengenezwa kwa AI kinakaguliwa usahihi na ufikivu kabla wanafunzi hawajakiona. 4) Misaada ya AI kamwe haichukui nafasi ya marekebisho yanayotakiwa. 5) Maelezo kwa familia ni ya jumla, yamekaguliwa dhidi ya vifaa rasmi, na yametafsiriwa na wazungumzaji wenye sifa.",
            "Zishirikini katika mkutano wa timu, pamoja na mifano ya kinachoruhusiwa na kisichoruhusiwa. Karibisheni maswali kutoka kwa wasaidizi wa walimu na watoa huduma zinazohusiana, ambao mara nyingi huachwa nje ya miongozo ya AI.",
            "Kusanyeni prompts na vifaa vizuri katika folda ya pamoja ili muda uliookolewa uifikie timu nzima, na pitieni kanuni kila mwaka pamoja na mkurugenzi wenu wa elimu maalum."
          ],
          steps: ["Andika kanuni tano kwa maneno rahisi.", "Ongeza mfano kwa kila moja.", "Zishiriki katika mkutano wa timu, pamoja na wasaidizi wa walimu.", "Anzisha folda ya pamoja ya prompts na vifaa vizuri.", "Zipitie kila mwaka pamoja na mkurugenzi wa elimu maalum."],
          words: [["Msaidizi wa mwalimu (paraprofessional)", "mfanyakazi wa shule anayewasaidia wanafunzi na walimu, mara nyingi katika elimu maalum."], ["Huduma zinazohusiana (related services)", "misaada kama tiba ya usemi, tiba ya kazi (occupational therapy) au tiba ya viungo inayomsaidia mwanafunzi kunufaika na elimu maalum."]],
          slides: [
            { title: "Kanuni tano za timu", bullets: ["1 Hakuna AI katika maamuzi ya IEP au 504", "2 Hakuna taarifa za mwanafunzi katika zana zisizoidhinishwa", "3 Kagua usahihi na ufikivu", "4 Marekebisho bado yanatumika; 5 Maandishi ya familia yamekaguliwa"] },
            { title: "Zishirikini vizuri", bullets: ["Mifano ya kinachoruhusiwa na kisichoruhusiwa", "Wajumuishe wasaidizi wa walimu na watoa tiba"] },
            { title: "Shirikini manufaa", bullets: ["Folda ya pamoja ya prompts na vifaa", "Pitieni kila mwaka"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kifurushi chako cha ufikivu (usomaji wa lugha rahisi, orodha ya kukagua iliyogawanywa, ratiba ya picha, mazoezi ya viwango viwili), andika ukurasa wako mmoja wa maelezo kwa familia, kagua kila kitu, na uandike kanuni tano za AI za timu yako, kila moja ikiwa na mfano.",
          youCanNow: "kutumia AI kufanya vifaa vya elimu maalum vifikike kwa urahisi zaidi huku ukiwalinda wanafunzi na kuacha maamuzi kwa timu.",
          quickCheck: [
            { objective: "O6", q: "Nani ana neno la mwisho kuhusu kanuni za elimu maalum za wilaya yako?", options: ["Kampuni inayouza AI", "Mkurugenzi wa elimu maalum na mwanasheria", "Kila mwalimu", "Kikundi cha wazazi"], answer: 1, why: "Viongozi wa wilaya na mwanasheria wanaamua jinsi kanuni zinavyotumika mahali hapo." },
            { objective: "O6", q: "Umeandika kanuni tano za AI. Unaisaidiaje timu nzima kuzitumia?", options: ["Kuzishiriki na walimu, wasaidizi wa walimu na watoa huduma zinazohusiana, pamoja na mifano", "Kuzituma kwa wakuu wa shule pekee kwa barua pepe", "Kuziweka katika mafaili yako mwenyewe", "Kuzibandika mara moja na kutozipitia tena kamwe"], answer: 0, why: "Kila anayefanya kazi na wanafunzi anahitaji kanuni na mifano." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Familia, faragha na kanuni za timu",
        questions: [
          { objective: "O4", q: "AI imeandaa maelezo kwa familia kuhusu utaratibu wa IEP. Kabla ya kuyashiriki, unapaswa:", options: ["Kuyatuma kama yalivyo", "Kuongeza jina la mwanafunzi", "Kuyakagua dhidi ya taratibu za wilaya yako na vifaa rasmi", "Kuondoa vichwa vyote vya habari"], answer: 2, why: "AI inaweza kueleza utaratibu wa jimbo lingine au kukosea maelezo." },
          { objective: "O4", q: "Hati ipi inabaki kuwa tamko la kisheria la haki za wazazi?", options: ["Taarifa rasmi ya wilaya ya kinga za kiutaratibu", "Maelezo yako ya AI", "Jarida la habari", "Ujumbe mfupi wa simu"], answer: 0, why: "Maelezo yanasaidia familia kuelewa taarifa rasmi." },
          { objective: "O5", q: "Mwalimu anataka AI ifupishe ripoti ya tathmini ya mwanafunzi katika zana ya bure. Jibu bora?", options: ["Endelea", "Hapana: matokeo ya tathmini ni kumbukumbu nyeti za elimu; usitumie zana zisizoidhinishwa", "Ukurasa wa kwanza tu", "Ikiwa tu inaonekana haina jina"], answer: 1, why: "Tathmini zinalindwa na ni nyeti sana." },
          { objective: "O5", q: "Je, zana ya AI ya kuandika kumbukumbu isiyoidhinishwa irekodi mkutano wa IEP?", options: ["Hapana", "Ndiyo, inaokoa muda", "Nusu ya mkutano tu", "Ikiwa kampuni inakubali tu"], answer: 0, why: "Mikutano ya wanafunzi haipaswi kurekodiwa na zana zisizoidhinishwa." },
          { objective: "O6", q: "Nani ajumuishwe wakati wa kushiriki kanuni za AI za timu?", options: ["Walimu pekee", "Kampuni za AI pekee", "Mkuu wa shule pekee", "Walimu, wasaidizi wa walimu na watoa huduma zinazohusiana"], answer: 3, why: "Kila anayewasaidia wanafunzi anahitaji kanuni." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Elimu Maalum",
    questions: [
      { objective: "O1", q: "IDEA inawahakikishia watoto wenye ulemavu wanaostahili:", options: ["Kompyuta mpakato ya bure", "Elimu ya umma ya bure na inayofaa", "Ada ya shule binafsi", "Ufundishaji wa AI"], answer: 1, why: "FAPE ndiyo ahadi kuu ya IDEA." },
      { objective: "O1", q: "Part B ya IDEA inahusu watoto wanaostahili wenye umri wa:", options: ["Miaka 13 hadi 18 tu", "Kuzaliwa hadi miaka 2 tu", "Miaka 3 hadi 21", "Watu wazima tu"], answer: 2, why: "Part B inahudumia umri wa miaka 3 hadi 21; Part C inahudumia watoto wachanga na wadogo." },
      { objective: "O1", q: "Nani anatengeneza IEP?", options: ["Mkuu wa shule peke yake", "Zana ya AI", "Timu inayojumuisha wazazi na wafanyakazi wa shule", "Kampuni ya nje"], answer: 2, why: "IEP ni uamuzi wa timu." },
      { objective: "O1", q: "Mpango wa Section 504 unatoa:", options: ["Marekebisho kwa mwanafunzi mwenye ulemavu chini ya sheria nyingine ya serikali kuu", "Alama ya darasa", "Safari ya masomo", "Leseni ya zana"], answer: 0, why: "504 ni njia tofauti na IDEA." },
      { objective: "O2", q: "Ipi ni kazi nzuri kwa AI?", options: ["Kuchagua mahali pa kusomea", "Kuandika malengo ya IEP", "Kuamua kama mwanafunzi anastahili", "Toleo la lugha rahisi la usomaji wa jumla"], answer: 3, why: "Kurekebisha vifaa vya jumla ni matumizi salama." },
      { objective: "O2", q: "Lugha rahisi inamaanisha:", options: ["Mawazo machache", "Sentensi fupi na maneno ya kawaida, mawazo yale yale", "Hakuna msamiati", "Matarajio ya chini"], answer: 1, why: "Usomaji rahisi zaidi, lengo lile lile la kujifunza." },
      { objective: "O2", q: "Kugawanya kazi kunamaanisha:", options: ["Kuisahihisha", "Kuifanya iwe ndefu zaidi", "Kuiondoa", "Kuivunja kuwa hatua ndogo zenye namba"], answer: 3, why: "Hatua ndogo zinafanya kazi ziweze kufanyika." },
      { objective: "O2", q: "Baada ya AI kurahisisha maandishi, kagua kwamba:", options: ["Yana picha zaidi", "Ni marefu zaidi", "Hakuna ukweli muhimu ulioachwa au kubadilishwa", "Yanasikika rasmi"], answer: 2, why: "Kurahisisha kunaweza kuleta makosa." },
      { objective: "O3", q: "Ratiba ya picha inaonyesha:", options: ["Kitakachotokea, kwa mpangilio, kwa picha na maneno", "Njia za basi", "Ripoti za maendeleo", "Mishahara ya wafanyakazi"], answer: 0, why: "Inawasaidia wanafunzi kujua kinachofuata." },
      { objective: "O3", q: "Text-to-speech:", options: ["Inaandika insha", "Inasoma maandishi kwa sauti", "Inasahihisha kazi", "Inatafsiri maneno yanayosemwa"], answer: 1, why: "Inawasaidia wanafunzi wanaonufaika kwa kusikia maandishi." },
      { objective: "O3", q: "Mazoezi yenye msaada zaidi yanaweza kuwa na:", options: ["Mfano uliotatuliwa na benki ya maneno", "Mawazo machache", "Mtihani mgumu zaidi", "Hakuna maelekezo"], answer: 0, why: "Misaada hii inawasaidia wanafunzi kufikia ujuzi ule ule." },
      { objective: "O3", q: "Marekebisho yanayotakiwa na IEP:", options: ["Yanatumika kwenye mitihani tu", "Yanaweza kubadilishwa na vifaa vya AI", "Ni ya hiari", "Lazima yatolewe kama yalivyoandikwa"], answer: 3, why: "Yanatakiwa kisheria." },
      { objective: "O4", q: "Maelezo kwa familia yanapaswa kuwa:", options: ["Kuhusu mwanafunzi mmoja aliyetajwa kwa jina", "Ya jumla, si kuhusu mtoto fulani", "Yameandikwa kwa Kiingereza tu", "Yametumwa bila kukaguliwa"], answer: 1, why: "Weka taarifa za wanafunzi nje ya AI." },
      { objective: "O4", q: "Tafsiri kwa familia zinapaswa:", options: ["Kurukwa", "Kuwa matokeo ya AI yasiyokaguliwa", "Kukaguliwa na wazungumzaji wenye sifa", "Kufanywa na wanafunzi"], answer: 2, why: "Familia zinahitaji taarifa sahihi." },
      { objective: "O5", q: "IEP na tathmini zinalindwa na:", options: ["Hakuna sheria", "Hakimiliki pekee", "FERPA", "Sheria ya barabarani"], answer: 2, why: "Ni kumbukumbu za elimu." },
      { objective: "O5", q: "Utambuzi wa ugonjwa na mipango ya tabia katika zana ya AI isiyoidhinishwa:", options: ["Haviruhusiwi kamwe", "Ni sawa vikiwa vifupi", "Ni sawa siku za mwisho wa wiki", "Vinatakiwa"], answer: 0, why: "Ni nyeti sana." },
      { objective: "O5", q: "Wakiwa na zana ya AI iliyoidhinishwa kwa elimu maalum, wafanyakazi wanapaswa:", options: ["Kuacha kukagua", "Kupakia kila kitu", "Kushirikiana majina ya kuingia na nywila", "Kuitumia kama makubaliano yanavyoruhusu tu, kwa taarifa chache zaidi"], answer: 3, why: "Makubaliano na kutumia taarifa chache bado vinatumika." },
      { objective: "O1", q: "Mazingira yenye vikwazo vichache zaidi yanamaanisha wanafunzi wenye ulemavu wanajifunza:", options: ["Peke yao kila wakati", "Pamoja na wenzao wasio na ulemavu kadiri inavyofaa", "Mtandaoni tu", "Nyumbani tu"], answer: 1, why: "Ni wazo kuu la IDEA." },
      { objective: "O6", q: "Nani ana neno la mwisho kuhusu kanuni za elimu maalum za wilaya yako?", options: ["Mwanafunzi", "Chatbot", "Kampuni ya nje", "Mkurugenzi wa elimu maalum na mwanasheria"], answer: 3, why: "Watu wenye sifa ndio wanaoamua." },
      { objective: "O6", q: "Folda ya pamoja ya prompts na vifaa vizuri inasaidia:", options: ["Kushiriki taarifa za wanafunzi", "Kuficha vifaa", "Muda uliookolewa uifikie timu nzima", "Kuchukua nafasi ya timu ya IEP"], answer: 2, why: "Kushirikiana kunazidisha manufaa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      6,
      7,
      8,
      11,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Usomaji wa lugha rahisi na vipande",
        objective: "O2",
        notYet: "Ukweli umeachwa au umebadilishwa, au kazi haijagawanywa.",
        meets: "Toleo la lugha rahisi na orodha ya kukagua yenye vipande vyenye namba, vyote vimekaguliwa dhidi ya asili.",
        exceeds: "Anaandika ni makosa gani AI ilifanya na jinsi yalivyorekebishwa."
      },
      {
        name: "Ratiba ya picha na mazoezi",
        objective: "O3",
        notYet: "Ratiba au kiwango kimoja cha mazoezi kinakosekana, au majibu hayakukaguliwa.",
        meets: "Ratiba ya picha na mazoezi ya viwango viwili, kila jibu likiwa limekaguliwa.",
        exceeds: "Kila picha ina alt text, na misaada kama mifano iliyotatuliwa au benki za maneno imejumuishwa."
      },
      {
        name: "Maelezo kwa familia",
        objective: "O4",
        notYet: "Yanahusu mtoto fulani, au hayakukaguliwa dhidi ya vifaa vya wilaya.",
        meets: "Ukurasa mmoja wa maelezo ya lugha rahisi ya hatua ya jumla, uliokaguliwa usahihi.",
        exceeds: "Mwenzake aliyasoma kuangalia mtindo wa lugha, na yanaelekeza familia kwenye taarifa rasmi ya kinga za kiutaratibu."
      },
      {
        name: "Hakuna taarifa za mwanafunzi",
        objective: "O5",
        notYet: "Taarifa yoyote ya mwanafunzi inaonekana katika kifurushi au prompts.",
        meets: "Kifurushi chote kinatumia vifaa vya jumla au vya kubuni tu.",
        exceeds: "Kinajumuisha njia salama za kupata msaada wa AI bila kutoa maelezo ya mwanafunzi."
      },
      {
        name: "Kanuni za timu",
        objective: "O6",
        notYet: "Kanuni chini ya tano, au kanuni zinazoruhusu AI kuamua yaliyomo katika IEP au 504.",
        meets: "Kanuni tano zilizo wazi za matumizi ya AI katika elimu maalum.",
        exceeds: "Kila kanuni ina mfano na inaacha kila uamuzi wa IEP na 504 kwa timu."
      }
    ]
  },
  evaluation: {
    results: [
      "Walimu wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Walimu wanaoripoti kutumia vifaa vinavyofikika vilivyotengenezwa kwa AI katika somo ndani ya siku 30 (utafiti wa kufuatilia)",
      "Timu za elimu maalum zinazoweka kanuni za AI zilizoandikwa ndani ya siku 60 (utafiti wa kufuatilia)",
      "Matukio yaliyoripotiwa ya taarifa za wanafunzi kuingizwa katika zana zisizoidhinishwa (lengo: hakuna)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na msaidizi wa AI ulioidhinishwa na wilaya",
      "Usomaji na kazi ya jumla kutoka somo linalokuja (bila taarifa za mwanafunzi)",
      "Vifaa rasmi vya wilaya yako kwa familia na taarifa ya kinga za kiutaratibu",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha pangeni kazi za \"AI inaweza kusaidia\" na \"timu pekee\" kama kikundi.",
      "Tumieni vifaa vya kubuni au vya jumla tu; msibandike kamwe IEP, mipango ya 504, tathmini au mipango ya tabia katika zana zisizoidhinishwa.",
      "Wakumbushe washiriki kwamba kozi si ushauri wa kisheria; mkaribishe mkurugenzi wa elimu maalum apitie kanuni za timu.",
      "Washiriki wasome maelezo ya familia ya wenzao kuangalia mtindo wa lugha na usahihi.",
      "Pima kazi ya mwisho kwa rubriki, na hakikisha hakuna taarifa ya mwanafunzi inayoonekana popote katika kifurushi."
    ]
  }
};
