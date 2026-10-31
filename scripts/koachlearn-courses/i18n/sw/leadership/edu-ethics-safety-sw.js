"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ethics-safety.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ethics-safety-sw",
  lang: "sw",
  translationOf: "edu-ethics-safety",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 7: Maadili, Usalama na AI ya Kuwajibika",
  skills: "Kutumia kanuni za maadili kwa AI shuleni, Kutambua hatari za upendeleo na usawa, Kulinda data za wanafunzi chini ya FERPA na COPPA, Kuchunguza wauzaji na mikataba, Kuandika miongozo ya matumizi ya kuwajibika, Kushughulikia matukio ya AI na deepfakes",
  outcome: "kuandika miongozo ya AI ya kuwajibika kwa shule au wilaya yako, inayohusu kanuni, faragha, usawa, matumizi ya wafanyakazi na wanafunzi, uchunguzi wa wauzaji na mpango wa kushughulikia matukio, na kuitumia kuchunguza zana halisi ya AI na tukio linaloweza kutokea.",
  about: [
    "Kozi hii ni kwa wakuu wa shule, viongozi wa wilaya, wafanyakazi wa teknolojia na faragha, washauri na walimu viongozi. Inaunganisha mambo ya maadili, faragha na usalama kutoka kozi zilizotangulia kuwa miongozo na taratibu ambazo shule yako inahitaji.",
    "Sura ya 1 inahusu kanuni: haki na usawa, uwazi, usimamizi wa binadamu, faragha na usalama, na jinsi zinavyoonekana katika matumizi halisi ya AI shuleni. Sura ya 2 inageuza kanuni kuwa vitendo: uchunguzi wa wauzaji, miongozo iliyoandikwa, na mpango wa jambo likienda vibaya, kama kuvuja kwa data au picha bandia ya mwanafunzi au mwalimu iliyotengenezwa na AI.",
    "Kozi hii inaeleza sheria kwa maneno rahisi ili ujue cha kuuliza; si ushauri wa kisheria. Wakili wa wilaya yako na afisa wa faragha ndio wenye neno la mwisho, na sheria za jimbo zinaweza kuongeza masharti. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Hii ni kozi ya 7 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  ],
  finalTask: "Andika miongozo ya kurasa mbili ya AI ya kuwajibika kwa shule au wilaya yako: kanuni tano kwa maneno rahisi, sheria za faragha (FERPA, COPPA, zana zilizoidhinishwa tu), ukaguzi wa usawa, kile wafanyakazi na wanafunzi wanaruhusiwa na wasichoruhusiwa kufanya, hatua za kuchunguza wauzaji, na mpango wa hatua sita wa kushughulikia matukio. Kisha ijaribu: chunguza zana moja halisi ya AI kwa hatua zako za wauzaji, na pitia tukio moja linaloweza kutokea (kwa mfano, picha bandia ya mwanafunzi iliyotengenezwa na AI ikisambazwa kwenye kikundi cha ujumbe) ukitumia mpango wako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakuu wa shule, viongozi wa wilaya, wafanyakazi wa teknolojia na faragha, washauri na walimu viongozi katika shule na wilaya za Marekani wanaoweka sheria za matumizi ya AI.",
    startingPoint: "Wanajua misingi ya AI, misingi ya FERPA na COPPA, uchunguzi wa zana na sheria za AI darasani kutoka kozi zilizotangulia. Shule au wilaya yao huenda haina miongozo iliyoandikwa ya AI ya kuwajibika wala mpango wa matukio.",
    gap: "Bila miongozo iliyoandikwa, maamuzi ya AI yanafanywa kesi kwa kesi, hatari za usawa hazikaguliwi, na shule hazijajiandaa jambo likienda vibaya, kama kuvuja kwa data au picha bandia ya mwanafunzi iliyotengenezwa na AI. Viongozi wanahitaji kanuni zilizo wazi, hatua za kuchunguza wauzaji, sheria za wafanyakazi na wanafunzi na mpango wa matukio.",
    constraints: [
      "Kozi inaeleza sheria kwa maneno rahisi na si ushauri wa kisheria; wakili wa wilaya na afisa wa faragha ndio wenye neno la mwisho",
      "Sheria za jimbo zinaweza kuongeza masharti, na sheria kuhusu picha zinazotengenezwa na AI zinabadilika haraka",
      "Hakuna data halisi wala picha halisi za wanafunzi katika mazoezi; mazoezi ya matukio yanatumia kesi za kubuni zinazoweza kutokea",
      "Picha za watoto hazisambazwi kamwe; wafanyakazi wanafuata maelekezo ya wakili na ya vyombo vya sheria",
      "Muda: masomo mafupi, na kuandika na kujaribu miongozo kunachukua muda zaidi"
    ],
    prerequisites: "Kozi ya 1 hadi 6 za AI kwa Viongozi wa Shule na Elimu zinapendekezwa, hasa kozi ya 1 na kozi ya 2."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa matumizi ya AI katika shule yako", action: "kutumia kanuni tano za AI ya kuwajibika kwa matumizi hayo", standard: "kwa sentensi moja kuhusu jinsi yanavyotimiza au kushindwa kila kanuni" },
    { id: "O2", condition: "Ukipewa zana ya AI inayowapa wanafunzi alama, inayowatia alama ya tahadhari au inayojirekebisha kwao", action: "kutambua mahali ambapo inaweza kutendea vikundi vya wanafunzi bila haki", standard: "ukiandika maswali matatu ya usawa kwa muuzaji na ukaguzi mmoja wa matokeo yako mwenyewe" },
    { id: "O3", condition: "Wafanyakazi wanapotumia zana za AI", action: "kutumia FERPA, COPPA na tabia za msingi za usalama", standard: "kwa tabia tano kwa maneno rahisi, kila moja na mfano wa kisichopaswa kufanywa" },
    { id: "O4", condition: "Kabla zana ya AI haijaidhinishwa", action: "kufanya uchunguzi wa muuzaji kutoka nyaraka za umma za zana hiyo", standard: "ukiorodhesha kile ambacho muuzaji lazima athibitishe katika mkataba uliosainiwa" },
    { id: "O5", condition: "Kwa maoni ya walimu, wanafunzi na familia", action: "kuandika rasimu ya miongozo ya AI ya kuwajibika yenye sheria za kinachoruhusiwa na kisichoruhusiwa kwa wafanyakazi na wanafunzi", standard: "ikiwa na angalau vipengele vinne halisi kila upande, vilivyokaguliwa dhidi ya sera ya wilaya na sheria ya jimbo pamoja na wakili" },
    { id: "O6", condition: "Ukipewa tukio la AI linaloweza kutokea kama deepfake au kuvuja kwa data", action: "kupitia mpango wa hatua sita wa kushughulikia matukio", standard: "ukianza na kumweka mwanafunzi salama na kumaliza kwa kusasisha miongozo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kanuni katika vitendo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kanuni tano za AI shuleni",
          minutes: 5,
          goal: "Taja kanuni tano za AI ya kuwajibika na uzitumie kwa mfano wa shule.",
          text: [
            "Mifumo mingi ya AI ya kuwajibika ina mawazo machache yanayofanana. Tano zinazofaa shule: Usimamizi wa binadamu: waelimishaji ndio wanaofanya maamuzi kuhusu wanafunzi; AI inatoa taarifa tu, haiamui kamwe. Haki na usawa: AI isiwaweke kikundi chochote cha wanafunzi katika hasara, na iongeze fursa. Faragha na usalama: kusanya na shiriki data ya wanafunzi kidogo iwezekanavyo, na uilinde.",
            "Uwazi: wanafunzi, wafanyakazi na familia wanajua lini na jinsi AI inavyotumiwa. Uwajibikaji: mtu mwenye jina anawajibika kwa kila zana ya AI na matokeo yake, na kuna njia ya kutoa wasiwasi.",
            "Kanuni hizi zinalingana na zile za barua ya Idara ya Elimu ya Marekani (Dear Colleague Letter) kuhusu AI ya Julai 22, 2025, ambayo, kama ilivyoripotiwa na K-12 Dive, inataka mipango ya AI inayoongozwa na waelimishaji, yenye maadili, inayofikiwa na wanafunzi wenye ulemavu, yenye uwazi katika kuanzishwa kwake na inayofuata sheria za faragha za serikali kuu. Kwa usimamizi wa hatari, Mfumo wa Usimamizi wa Hatari za AI wa NIST (AI Risk Management Framework: Govern, Map, Measure, Manage), ambao ni wa hiari, ni rejea ya bure."
          ],
          words: [["Usimamizi wa binadamu", "watu wanakagua na kuamua, na AI inatoa taarifa tu."], ["Usawa", "kuhakikisha kila mwanafunzi anapata anachohitaji ili afanikiwe."], ["Uwazi", "kuwa wazi kuhusu lini na jinsi AI inavyotumiwa."]],
          slides: [
            { title: "Kanuni tano", bullets: ["Usimamizi wa binadamu", "Haki na usawa", "Faragha na usalama", "Uwazi na uwajibikaji"] },
            { title: "Barua ya serikali kuu kuhusu AI, Julai 2025", bullets: ["Inaongozwa na waelimishaji na ina maadili", "Inafikiwa na wanafunzi wenye ulemavu", "Ina uwazi; inafuata sheria za faragha"] },
            { title: "Mfumo wa bure wa hatari", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Ni wa hiari; angalia nist.gov kwa mabadiliko"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Chukua matumizi moja ya AI katika shule yako (kwa mfano, programu ya kusoma inayojirekebisha kwa kila mwanafunzi). Andika sentensi moja kuhusu jinsi yanavyotimiza au kushindwa kila moja ya kanuni tano.",
          youCanNow: "kutumia kanuni tano za AI ya kuwajibika kwa matumizi halisi ya shule.",
          quickCheck: [
            { objective: "O1", q: "Kanuni ya uwazi inamaanisha nini?", options: ["Kuwa wazi kuhusu lini na jinsi AI inavyotumiwa", "Kutumia zana za AI za bure tu", "Kuiruhusu AI ifanye maamuzi hadharani", "Kushiriki data za wanafunzi na familia"], answer: 0, why: "Uwazi unamaanisha watu wanajua lini na jinsi AI inavyotumiwa." },
            { objective: "O1", q: "Programu ya kusoma inayojirekebisha inachagua kitabu kinachofuata cha kila mwanafunzi. Ungeuliza swali gani la kanuni?", options: ["Je, ndiyo programu ya bei nafuu zaidi?", "Je, ndiyo programu mpya zaidi?", "Je, walimu wanaweza kuona chaguo zake na kuzibadilisha?", "Je, ina vipengele vingi zaidi?"], answer: 2, why: "Usimamizi wa binadamu unamaanisha waelimishaji wanaamua na AI inatoa taarifa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hatari za upendeleo na usawa katika AI ya shule",
          minutes: 6,
          goal: "Tambua mahali ambapo matumizi ya AI shuleni yanaweza kutendea vikundi vya wanafunzi bila haki.",
          text: [
            "AI inajifunza kutoka kwa data, na data inaonyesha yaliyopita, pamoja na ukosefu wa haki. Shuleni, angalia sehemu nne. Vigunduzi: vigunduzi vya maandishi ya AI vinaweza kutia alama kazi ya uaminifu kimakosa, na maandishi ya wanafunzi wanaojifunza Kiingereza yanaweza kutiwa alama mara nyingi zaidi. Utabiri: alama za tahadhari ya mapema au za hatari zinaweza kuwapa wanafunzi lebo kwa kuzingatia mifumo inayohusiana na kipato, ulemavu au rangi.",
            "Kutenga viwango (tracking): programu zinazojirekebisha zinazoendelea kuwapa baadhi ya wanafunzi kazi rahisi zaidi zinaweza kupunguza fursa zao. Ufikiaji: msaada wa AI ukihitaji kifaa au intaneti nyumbani, wanafunzi wasio navyo wanabaki nyuma zaidi; zana isipofikika, wanafunzi wenye ulemavu wanafungiwa nje.",
            "Ukaguzi wa usawa: waulize wauzaji jinsi wanavyopima upendeleo na ufikiaji; angalia matokeo kwa kila kikundi cha wanafunzi katika data yako mwenyewe (ukilinda faragha); usitumie kamwe alama ya AI peke yake kwa maamuzi ya kupanga darasa, nidhamu au kustahiki; na hakikisha kila mwanafunzi anaweza kufikia zana hiyo akiwa shuleni."
          ],
          steps: ["Orodhesha matumizi ya AI yanayopanga, kutoa alama au kutia alama ya tahadhari kwa wanafunzi.", "Muulize muuzaji jinsi anavyopima upendeleo na ufikiaji.", "Kagua matokeo kwa kila kikundi, ukilinda faragha.", "Usitumie kamwe alama ya AI peke yake kwa maamuzi kuhusu wanafunzi.", "Hakikisha kila mwanafunzi anaweza kufikia zana akiwa shuleni."],
          words: [["Upendeleo wa algorithimu", "matokeo yasiyo ya haki kutoka mfumo wa AI, mara nyingi yaliyojifunzwa kutoka data ya zamani."], ["Alama ya hatari", "namba ambayo mfumo unampa mwanafunzi kutabiri tatizo, kama kuacha shule."], ["Kutenga viwango (tracking)", "kuwaweka wanafunzi katika viwango tofauti vya kazi, jambo linaloweza kupunguza fursa."]],
          slides: [
            { title: "Mahali upendeleo unapoonekana", bullets: ["Vigunduzi vinavyotia alama wanafunzi kimakosa", "Alama za hatari zinazohusiana na kipato, ulemavu, rangi", "Kutenga viwango kunakopunguza fursa"] },
            { title: "Ufikiaji ni usawa", bullets: ["Mapengo ya vifaa na intaneti nyumbani", "Zana zisizofikika kwa wenye ulemavu"] },
            { title: "Ukaguzi wa usawa", bullets: ["Waulize wauzaji kuhusu upimaji wa upendeleo na ufikiaji", "Kagua matokeo kwa kila kikundi", "Hakuna alama ya AI peke yake kwa maamuzi"] }
          ],
          tryIt: "Chagua zana moja ya AI inayowapa wanafunzi alama, inayowatia alama ya tahadhari au inayojirekebisha kwao katika shule yako. Andika maswali matatu ya usawa ambayo ungemuuliza muuzaji na ukaguzi mmoja ambao ungefanya kwa matokeo yako mwenyewe.",
          youCanNow: "kutambua hatari za usawa katika AI ya shule na kuweka ukaguzi unaotekelezeka.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini vigunduzi vya maandishi ya AI vinaweza kuleta wasiwasi wa usawa?", options: ["Ni ghali mno", "Vinaweza kutia alama maandishi ya wanafunzi wanaojifunza Kiingereza mara nyingi zaidi", "Vinafanya kazi kwenye simu tu", "Vinasahihisha polepole mno"], answer: 1, why: "Alama za makosa zisizo sawa zinawaangukia baadhi ya vikundi vya wanafunzi kuliko wengine." },
            { objective: "O2", q: "Zana inayojirekebisha inaweka kikundi kimoja cha wanafunzi kwenye kazi rahisi kwa miezi. Ungefanya nini?", options: ["Hakuna; zana inajua zaidi", "Kuzima AI yote shuleni", "Kuwahamishia wanafunzi hao shule nyingine", "Kukagua matokeo yako mwenyewe kwa kila kikundi na kumuuliza muuzaji jinsi zana inavyoamua"], answer: 3, why: "Kukagua matokeo kwa kila kikundi kunaonyesha kama zana inapunguza fursa kwa baadhi ya wanafunzi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Faragha na usalama: FERPA, COPPA na tabia nzuri",
          minutes: 6,
          goal: "Tumia FERPA, COPPA na tabia za msingi za usalama kwa zana za AI.",
          text: [
            "FERPA inalinda kumbukumbu za elimu za wanafunzi. Kwa kawaida shule zinahitaji idhini ili kutoa taarifa zinazomtambulisha mtu (PII) kutoka kumbukumbu hizo, isipokuwa katika hali fulani; muuzaji anaweza kufanya kazi kama afisa wa shule tu ikiwa anatoa huduma ya shule, yuko chini ya udhibiti wa moja kwa moja wa shule, na anafuata mipaka ya kushiriki tena. Wazazi wanaweza kukagua na kupitia kumbukumbu; haki hizo zinahamia kwa mwanafunzi akifikisha miaka 18 au akiwa chuoni.",
            "COPPA, inayosimamiwa na FTC (Tume ya Biashara ya Serikali Kuu ya Marekani), inalinda watoto walio chini ya miaka 13 mtandaoni. FTC inasema shule zinaweza kutoa idhini kwa niaba ya wazazi tu taarifa zikikusanywa kwa matumizi na manufaa ya shule na si kwa lengo lingine la kibiashara. FTC ilirekebisha Kanuni yake ya COPPA tarehe 22 Aprili 2025; angalia kurasa za FTC kwa masharti ya sasa.",
            "Tabia nzuri: kupunguza data (shiriki tu kile ambacho kazi inahitaji), zana zilizoidhinishwa tu, akaunti za wilaya zenye nywila imara na kuingia kwa hatua mbili, kutopakia kumbukumbu kwenye akaunti binafsi, na kujua umpigie nani data ikiwa huenda imevuja. Jimbo lako linaweza kuwa na sheria yake ya faragha ya wanafunzi; afisa wako wa faragha atajua."
          ],
          steps: ["Tumia zana zilizoidhinishwa tu kwa taarifa za wanafunzi.", "Shiriki data kidogo kabisa inayohitajika.", "Tumia akaunti za wilaya zenye kuingia kwa hatua mbili.", "Usipakie kamwe kumbukumbu kwenye akaunti binafsi.", "Jua umpigie nani kuhusu uvujaji unaowezekana."],
          words: [["Kupunguza data", "kukusanya na kushiriki data ambayo kazi inahitaji kweli tu."], ["Kuingia kwa hatua mbili", "kuingia kwa nywila pamoja na ukaguzi wa pili, kama msimbo kwenye simu yako."]],
          slides: [
            { title: "FERPA", bullets: ["Inalinda kumbukumbu za elimu", "Kwa kawaida idhini inahitajika kushiriki PII", "Wauzaji tu kama maafisa wa shule wanaodhibitiwa"] },
            { title: "COPPA", bullets: ["Chini ya miaka 13, inasimamiwa na FTC", "Idhini ya shule: matumizi ya shule tu, si biashara nyingine", "Kanuni ilirekebishwa 22 Aprili 2025"] },
            { title: "Tabia nzuri", bullets: ["Kupunguza data", "Zana zilizoidhinishwa, akaunti za wilaya, kuingia kwa hatua mbili", "Jua umpigie nani kuhusu uvujaji"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Andika tabia tano za faragha na usalama kwa wafanyakazi wako kwa maneno rahisi, kila moja na mfano mmoja wa kisichopaswa kufanywa.",
          youCanNow: "kutumia FERPA, COPPA na tabia za kila siku za usalama kwa matumizi ya AI ya wafanyakazi.",
          quickCheck: [
            { objective: "O3", q: "Kuingia kwa hatua mbili kunaongeza nini?", options: ["Ukaguzi wa pili, kama msimbo kwenye simu yako", "Nywila ya pili inayoandikwa mara mbili", "Zana ya pili ya AI", "Mfanyakazi wa pili wa kuingia kwa niaba yako"], answer: 0, why: "Ukaguzi wa pili unalinda akaunti hata nywila ikiibiwa." },
            { objective: "O3", q: "Mwalimu anataka kupakia orodha nzima ya darasa kwenye zana ya AI kwa kazi moja ndogo. Ungemshauri nini?", options: ["Aipakie; data zaidi inaleta matokeo bora", "Aipakie kwenye zana mbili ili kulinganisha", "Ashiriki tu kile ambacho kazi inahitaji, katika zana iliyoidhinishwa", "Amtumie muuzaji kwa barua pepe badala yake"], answer: 2, why: "Kupunguza data kunamaanisha kushiriki tu kile ambacho kazi inahitaji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kanuni katika vitendo",
        questions: [
          { objective: "O1", q: "Kanuni ipi inasema waelimishaji wanafanya maamuzi kuhusu wanafunzi na AI inatoa taarifa tu?", options: ["Uwazi", "Kupunguza data", "Usimamizi wa binadamu", "Kutenga viwango"], answer: 2, why: "Usimamizi wa binadamu unaacha maamuzi kwa waelimishaji." },
          { objective: "O1", q: "Zana ya tahadhari ya mapema inampa mwanafunzi alama ya juu ya hatari. Matumizi sahihi ni:", options: ["Kuitumia kama taarifa moja kwa waelimishaji wanaomjua pia mwanafunzi", "Kumpanga mwanafunzi moja kwa moja", "Kutangaza alama hadharani", "Kupuuza data zote"], answer: 0, why: "Hakuna alama ya AI peke yake inayopaswa kuamua." },
          { objective: "O2", q: "Kwa nini ufikiaji ni suala la usawa kwa zana za AI?", options: ["Ni watu wazima tu wanaotumia AI", "Si suala la usawa", "Ufikiaji unafanya zana kuwa polepole", "Wanafunzi wasio na vifaa, intaneti au zana zinazofikika wanabaki nyuma"], answer: 3, why: "Ufikiaji usio sawa unapanua mapengo." },
          { objective: "O3", q: "Kupunguza data kunamaanisha:", options: ["Kukusanya kadiri iwezekanavyo", "Kushiriki tu kile ambacho kazi inahitaji", "Kufuta data zote", "Kutumia herufi ndogo zaidi"], answer: 1, why: "Data kidogo inamaanisha hatari kidogo." },
          { objective: "O3", q: "Chini ya COPPA, shule inaweza kutoa idhini kwa niaba ya wazazi data ikikusanywa:", options: ["Kwa matangazo", "Kamwe", "Kwa sababu yoyote", "Kwa matumizi na manufaa ya shule, bila lengo lingine la kibiashara"], answer: 3, why: "Hilo ndilo sharti la FTC." }
        ]
      }
    },
    {
      name: "Sura 2: Miongozo, wauzaji na matukio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuchunguza wauzaji na mikataba",
          minutes: 5,
          goal: "Fanya uchunguzi wa muuzaji kabla zana ya AI haijaidhinishwa.",
          text: [
            "Kila zana ya AI itakayogusa taarifa za wanafunzi inahitaji uchunguzi kabla ya kuidhinishwa. Tumia orodha ya kukagua ya Model Terms of Service (Masharti ya Huduma ya Mfano) ya Ofisi ya Sera ya Faragha ya Wanafunzi (Student Privacy Policy Office) au ile ya wilaya yako. Maswali muhimu: data gani, nani anaimiliki, je, inatumiwa kwa matangazo au kufundisha AI, je, inaweza kufutwa ikiombwa, nani mwingine anaipokea, inalindwa vipi, na nini kinatokea ikivuja.",
            "Ongeza maswali maalum ya AI: AI inafanyaje kazi na mipaka yake ni ipi? Inapimwaje kwa usahihi, upendeleo na ufikiaji? Je, walimu wanaweza kuona matokeo yake na kuyabatilisha? Je, inahifadhi maandishi ya wanafunzi, na kwa muda gani?",
            "Pata ahadi katika mkataba uliosainiwa, si tu sera ya tovuti inayoweza kubadilika. Majimbo na wilaya nyingi zinatumia mikataba ya faragha ya data na wauzaji; afisa wako wa faragha au wakili atajua fomu sahihi."
          ],
          steps: ["Tumia orodha ya kukagua ya Model Terms of Service au ya wilaya yako.", "Uliza maswali maalum ya AI.", "Omba majibu ya maandishi.", "Pata ahadi katika mkataba uliosainiwa.", "Andika uamuzi na tarehe ya kupitia tena."],
          words: [["Mkataba wa faragha ya data", "mkataba uliosainiwa unaoweka jinsi muuzaji anavyoweza kutumia na kulinda data za wanafunzi."], ["Kubatilisha (override)", "mtu kubadilisha au kukataa kile ambacho AI imetoa."]],
          slides: [
            { title: "Maswali ya faragha", bullets: ["Data gani, nani anaimiliki", "Matangazo au kufundisha AI?", "Kufuta, kushiriki, usalama, uvujaji"] },
            { title: "Maswali ya AI", bullets: ["Jinsi inavyofanya kazi na mipaka yake", "Kupimwa kwa usahihi, upendeleo, ufikiaji", "Walimu wanaweza kubatilisha? Maandishi yanahifadhiwa muda gani?"] },
            { title: "Iweke kwa maandishi", bullets: ["Mkataba uliosainiwa, si ukurasa wa tovuti tu", "Muulize afisa wako wa faragha fomu inayofaa"] }
          ],
          sources: [{ name: "Privacy and Education Technology: Model Terms of Service checklist", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Fanya uchunguzi wa muuzaji kwa zana moja ya AI ambayo shule yako inatumia au inaitaka: jibu maswali ya faragha na ya AI kutoka nyaraka zake za umma, na orodhesha kile ambacho ungehitaji muuzaji athibitishe kwa maandishi.",
          youCanNow: "kuchunguza muuzaji wa AI kuhusu faragha, ubora wa AI na masharti ya mkataba kabla ya kuidhinisha.",
          quickCheck: [
            { objective: "O4", q: "Mkataba wa faragha ya data ni nini?", options: ["Ukurasa wa matangazo wa muuzaji", "Mkataba uliosainiwa kuhusu jinsi muuzaji anavyotumia na kulinda data za wanafunzi", "Fomu ambayo wanafunzi wanasaini", "Orodha ya tovuti zilizoidhinishwa"], answer: 1, why: "Mkataba uliosainiwa unamfunga muuzaji kwa ahadi zake." },
            { objective: "O4", q: "Tovuti ya muuzaji inasema haifundishi AI kamwe kwa data za wanafunzi. Ungefanya nini?", options: ["Kuidhinisha zana kwa msingi huo", "Kulipuuza", "Kuwauliza wanafunzi kama ni kweli", "Kupata ahadi hiyo katika mkataba uliosainiwa"], answer: 3, why: "Sera za tovuti zinaweza kubadilika; mkataba uliosainiwa haubadiliki wenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika miongozo ya AI ya kuwajibika",
          minutes: 6,
          goal: "Andika rasimu ya miongozo iliyo wazi kwa matumizi ya AI ya wafanyakazi na wanafunzi.",
          text: [
            "Miongozo inageuza kanuni kuwa sheria za kila siku. Iweke kama kurasa mbili na utumie maneno rahisi. Sehemu: lengo na kanuni; zana zilizoidhinishwa na jinsi ya kuomba mpya; sheria za faragha; kile wafanyakazi wanaruhusiwa na wasichoruhusiwa kufanya; kile wanafunzi wanaruhusiwa na wasichoruhusiwa kufanya (unganisha viwango vyako vya matumizi ya AI); uadilifu wa kitaaluma; uwazi kwa familia; na nani wa kuwasiliana naye.",
            "Tumia mifano halisi: \"Wafanyakazi wanaruhusiwa kutumia zana za AI zilizoidhinishwa kuandika rasimu za vifaa vya masomo na barua kwa familia. Wafanyakazi hawaruhusiwi kuingiza majina ya wanafunzi, alama, taarifa za IEP au 504, au kumbukumbu za nidhamu katika zana yoyote isiyoidhinishwa. Wafanyakazi hawaruhusiwi kutumia AI kufanya maamuzi ya kusahihisha na kutoa alama, kupanga darasa au nidhamu.\"",
            "Iandikeni pamoja na walimu, wanafunzi (kulingana na umri) na familia, ikaguliwe na wakili dhidi ya sera ya wilaya na sheria ya jimbo, na wekeni tarehe ya kuipitia tena. Miongozo ambayo hakuna aliyesaidia kuiandika ni miongozo ambayo hakuna anayeifuata."
          ],
          steps: ["Andika rasimu ya sehemu: kanuni, zana, faragha, wafanyakazi, wanafunzi, uadilifu, uwazi, mawasiliano.", "Ongeza mifano halisi ya kinachoruhusiwa / kisichoruhusiwa.", "Washirikishe walimu, wanafunzi na familia.", "Kagua na wakili dhidi ya sera na sheria ya jimbo.", "Ichapishe na weka tarehe ya kuipitia tena."],
          words: [["Miongozo", "sheria za vitendo zinazoeleza jinsi ya kufuata sera siku kwa siku."], ["Sera ya bodi", "sheria rasmi iliyopitishwa na bodi ya shule."]],
          slides: [
            { title: "Kurasa mbili, maneno rahisi", bullets: ["Kanuni, zana, faragha", "Kinachoruhusiwa / kisichoruhusiwa kwa wafanyakazi na wanafunzi", "Uadilifu, uwazi, mawasiliano"] },
            { title: "Mifano halisi", bullets: ["Inaruhusiwa: rasimu za vifaa katika zana zilizoidhinishwa", "Hairuhusiwi: data za wanafunzi katika zana zisizoidhinishwa", "Hairuhusiwi: maamuzi ya AI ya alama au nidhamu"] },
            { title: "Iandikeni pamoja", bullets: ["Walimu, wanafunzi, familia", "Wakili anakagua sera na sheria ya jimbo", "Wekeni tarehe ya kuipitia tena"] }
          ],
          tryIt: "Andika rasimu ya sehemu za \"kinachoruhusiwa / kisichoruhusiwa\" kwa wafanyakazi na wanafunzi katika miongozo yako, zikiwa na angalau vipengele vinne kila moja. Washirikishe walimu wawili na uandike mabadiliko yao.",
          youCanNow: "kuandika miongozo ya vitendo ya AI ya kuwajibika pamoja na watu watakaoifuata.",
          quickCheck: [
            { objective: "O5", q: "Nini kinafanya miongozo iwe na manufaa kwa wafanyakazi?", options: ["Mifano halisi ya kinachoruhusiwa na kisichoruhusiwa", "Lugha ndefu ya kisheria", "Orodha ya kila zana ya AI sokoni", "Bila mifano, ili wafanyakazi waamue"], answer: 0, why: "Mifano halisi inafanya sheria ziwe rahisi kufuata." },
            { objective: "O5", q: "Rasimu ya miongozo yako iko tayari. Nini kifanyike kabla haijapitishwa?", options: ["Kuiweka hadharani mara moja", "Kuomba chatbot ya AI iidhinishe", "Kupata maoni ya walimu, wanafunzi na familia na kuikagua dhidi ya sera na sheria pamoja na wakili", "Kuificha kwa wafanyakazi"], answer: 2, why: "Miongozo inahitaji maoni ya watu wanaohusika na ukaguzi wa kisheria." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Jambo likienda vibaya: kushughulikia matukio",
          minutes: 6,
          goal: "Panga hatua za tukio la AI, pamoja na kuvuja kwa data na deepfakes.",
          text: [
            "Panga kabla ya tukio. Matukio ya kawaida ya AI: data za wanafunzi kuingizwa katika zana isiyoidhinishwa; zana ya AI kuwapa wanafunzi taarifa zenye madhara au zisizo sahihi; na picha, sauti au video bandia za wanafunzi au wafanyakazi zilizotengenezwa na AI (deepfakes), ambazo zinaweza kuwa unyanyasaji na huenda zikawa uhalifu.",
            "Mpango wa hatua sita: 1) Weka salama: simamisha madhara (ondoa ufikiaji, simamisha zana kwa muda, msaidie mtu aliyeathirika). 2) Ripoti: kwa mkuu wa shule na mtu wa wilaya aliyetajwa katika miongozo yako. 3) Hifadhi: weka ushahidi kama wilaya yako inavyoelekeza (kwa picha za watoto, fuata maelekezo ya vyombo vya sheria na wakili; usizisambaze wala kuzinakili kamwe). 4) Tathmini: data gani au watu gani wameathirika. 5) Arifu: familia na wengine kama sheria na sera zinavyotaka. 6) Jifunze: rekebisha chanzo na usasishe miongozo.",
            "Kwa deepfakes na unyanyasaji, fuata taratibu zako za uonevu, unyanyasaji na Title IX na uwashirikishe wakili na, inapohitajika, vyombo vya sheria. Sheria kuhusu picha zinazotengenezwa na AI zinabadilika haraka katika ngazi ya serikali kuu na ya jimbo; wakili wako atajua zipi zinahusika."
          ],
          steps: ["Weka salama: simamisha madhara na msaidie mtu huyo.", "Ripoti kwa mkuu wa shule na mtu wa wilaya.", "Hifadhi ushahidi kama ulivyoelekezwa; usisambaze kamwe picha za watoto.", "Tathmini data gani au watu gani wameathirika.", "Arifu kama sheria na sera zinavyotaka; kisha jifunze na usasishe."],
          words: [["Kushughulikia matukio", "hatua zilizopangwa za kushughulikia jambo lililoenda vibaya."], ["Deepfake", "picha, sauti au video bandia iliyotengenezwa na AI ili ionekane halisi."], ["Title IX", "sheria ya serikali kuu ya Marekani inayokataza ubaguzi wa kijinsia katika elimu, pamoja na unyanyasaji wa kingono."]],
          slides: [
            { title: "Matukio ya kawaida ya AI", bullets: ["Data za wanafunzi katika zana isiyoidhinishwa", "Matokeo ya AI yenye madhara au yasiyo sahihi kwa wanafunzi", "Deepfakes za wanafunzi au wafanyakazi"] },
            { title: "Hatua sita", bullets: ["1 Weka salama  2 Ripoti  3 Hifadhi", "4 Tathmini  5 Arifu  6 Jifunze"] },
            { title: "Deepfakes na unyanyasaji", bullets: ["Fuata taratibu za uonevu, unyanyasaji, Title IX", "Usisambaze kamwe picha za watoto", "Mshirikishe wakili; sheria zinabadilika"] }
          ],
          tryIt: "Kazi ya mwisho: maliza miongozo yako ya kurasa mbili ya AI ya kuwajibika (kanuni, faragha, usawa, sheria za wafanyakazi na wanafunzi, hatua za wauzaji, mpango wa matukio wa hatua sita). Ijaribu kwa kuchunguza zana moja halisi na kupitia tukio moja linaloweza kutokea, ukiandika pengo lolote ulilopata.",
          youCanNow: "kuongoza AI ya kuwajibika katika shule yako kwa miongozo iliyo wazi, uchunguzi wa wauzaji na mpango wa matukio.",
          quickCheck: [
            { objective: "O6", q: "Hatua ya mwisho ya mpango wa matukio ni ipi?", options: ["Weka salama", "Jifunze: rekebisha chanzo na usasishe miongozo", "Arifu vyombo vya habari", "Futa kumbukumbu zote"], answer: 1, why: "Kujifunza kutoka kila tukio kunazuia lisitokee tena." },
            { objective: "O6", q: "Mfanyakazi anapokea picha bandia ya mwanafunzi iliyotengenezwa na AI. Afanye nini nayo?", options: ["Kuwatumia wenzake ili wajue", "Kuweka onyo pamoja na picha", "Kuifuta na kunyamaza", "Kutoisambaza, na kufuata maelekezo ya wakili na vyombo vya sheria kuhusu kuhifadhi ushahidi"], answer: 3, why: "Picha za watoto hazisambazwi kamwe; ushahidi unashughulikiwa kama wakili na vyombo vya sheria wanavyoshauri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Miongozo, wauzaji na matukio",
        questions: [
          { objective: "O4", q: "Kwa nini upate ahadi za muuzaji katika mkataba uliosainiwa?", options: ["Mikataba ni ya hiari", "Ni haraka zaidi", "Sera za tovuti zinaweza kubadilika", "Wauzaji wanapendelea hivyo"], answer: 2, why: "Masharti yaliyosainiwa yanamfunga muuzaji." },
          { objective: "O4", q: "Lipi ni swali maalum la AI kwa muuzaji?", options: ["Je, walimu wanaweza kuona matokeo ya AI na kuyabatilisha?", "Nembo ina rangi gani?", "Muuzaji ana wafanyakazi wangapi?", "Ofisi yao iko wapi?"], answer: 0, why: "Uwezo wa binadamu wa kubatilisha ni muhimu kwa usimamizi." },
          { objective: "O5", q: "Nani anapaswa kusaidia kuandika miongozo?", options: ["Muuzaji peke yake", "Walimu, wanafunzi na familia, ikikaguliwa na wakili", "Mkuu wa shule peke yake", "Zana ya AI peke yake"], answer: 1, why: "Miongozo ambayo watu walisaidia kuiandika ni miongozo ambayo watu wanaifuata." },
          { objective: "O6", q: "Mwanafunzi anaripoti picha bandia ya mwanafunzi mwenzake iliyotengenezwa na AI katika kikundi cha ujumbe. Hatua ya kwanza ni ipi?", options: ["Weka salama: simamisha madhara na msaidie mwanafunzi", "Kuwatumia wafanyakazi ili kuwaonyesha", "Kuipuuza", "Kuweka onyo pamoja na picha"], answer: 0, why: "Usalama kwanza; usisambaze picha kamwe." },
          { objective: "O6", q: "Hatua ya mwisho ya mpango wa matukio ni ipi?", options: ["Kulisahau", "Kumlaumu mwanafunzi", "Kufuta miongozo", "Jifunze: rekebisha chanzo na usasishe miongozo"], answer: 3, why: "Matukio yanapaswa kuboresha mfumo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 7: Maadili, Usalama na AI ya Kuwajibika",
    questions: [
      { objective: "O1", q: "Usimamizi wa binadamu unamaanisha:", options: ["AI inaamua; waelimishaji wanatazama", "Waelimishaji wanaamua; AI inatoa taarifa", "Hakuna anayeamua", "Wazazi wanaamua matumizi yote ya AI"], answer: 1, why: "Maamuzi kuhusu wanafunzi yanabaki kwa binadamu." },
      { objective: "O1", q: "Uwazi unamaanisha:", options: ["Kuficha matumizi ya AI", "Kutumia plastiki inayoonyesha", "Kuwa wazi kuhusu lini na jinsi AI inavyotumiwa", "Kushiriki data za wanafunzi"], answer: 2, why: "Watu wanapaswa kujua AI inapohusika." },
      { objective: "O1", q: "Uwajibikaji unamaanisha:", options: ["Hakuna anayewajibika", "AI ndiyo inayowajibika", "Mtu mwenye jina anawajibika kwa kila zana ya AI na matokeo yake", "Wauzaji wanaamua kila kitu"], answer: 2, why: "Lazima mtu awajibike kwa kila zana." },
      { objective: "O1", q: "Barua ya serikali kuu kuhusu AI ya Julai 2025 inataka AI iwe:", options: ["Inayoongozwa na waelimishaji, yenye maadili, inayofikika, yenye uwazi na inayofuata sheria za faragha", "Bila walimu", "Bila udhibiti", "Kwa shule za sekondari tu"], answer: 0, why: "Hizo ndizo kanuni ilizotaja." },
      { objective: "O1", q: "NIST AI RMF ni:", options: ["Jaribio la wanafunzi", "Sheria", "Programu ya kompyuta inayouzwa", "Mfumo wa hiari wa kusimamia hatari za AI"], answer: 3, why: "NIST inauelezea kuwa wa hiari." },
      { objective: "O2", q: "Vigunduzi vya maandishi ya AI vinaleta wasiwasi wa usawa kwa sababu:", options: ["Vina haki kila wakati", "Vinaweza kutia alama maandishi ya wanafunzi wanaojifunza Kiingereza mara nyingi zaidi", "Ni vya bure", "Havimtii alama mtu yeyote"], answer: 1, why: "Alama za makosa zinaweza kuangukia vikundi kwa njia isiyo sawa." },
      { objective: "O2", q: "Kutenga viwango kwa zana zinazojirekebisha kunaweza kuwa hatari pale:", options: ["Kinapotumiwa na walimu", "Kinapompa kila mwanafunzi changamoto", "Kinapozimwa", "Kinapowaweka baadhi ya wanafunzi kwenye kazi rahisi na kupunguza fursa"], answer: 3, why: "Kutenga viwango kunaweza kupunguza fursa." },
      { objective: "O2", q: "Alama ya hatari ya AI inapaswa kutumiwa:", options: ["Hadharani", "Kama uamuzi wa mwisho", "Kama taarifa moja, kamwe peke yake kwa maamuzi", "Bila kukaguliwa kamwe"], answer: 2, why: "Waelimishaji wanaipima pamoja na wanachojua." },
      { objective: "O3", q: "Chini ya FERPA, muuzaji anaweza kufanya kazi kama afisa wa shule tu ikiwa:", options: ["Anatoa huduma ya shule chini ya udhibiti wa moja kwa moja, na mipaka ya kushiriki tena", "Anajulikana sana", "Ni wa bure", "Ana ukurasa wa faragha"], answer: 0, why: "Hayo ndiyo masharti ya FERPA." },
      { objective: "O3", q: "COPPA inalinda watoto:", options: ["Walio chini ya miaka 16", "Walio chini ya miaka 13", "Walio chini ya miaka 18", "Walio zaidi ya miaka 13"], answer: 1, why: "FTC inasema walio chini ya miaka 13." },
      { objective: "O3", q: "FTC ilirekebisha Kanuni yake ya COPPA tarehe:", options: ["22 Aprili 2025", "1 Januari 1990", "27 Oktoba 2026", "4 Julai 2020"], answer: 0, why: "Maswali na Majibu ya FTC yanataja 22 Aprili 2025." },
      { objective: "O3", q: "Kuingia kwa hatua mbili kunaongeza:", options: ["Hakuna kitu", "Nywila ya pili kwenye karatasi", "Mtumiaji wa pili", "Ukaguzi wa pili, kama msimbo kwenye simu yako"], answer: 3, why: "Kunalinda akaunti nywila ikivuja." },
      { objective: "O4", q: "Orodha ya kukagua ya Model Terms of Service inatoka:", options: ["Kwa muuzaji", "Ofisi ya Sera ya Faragha ya Wanafunzi ya Idara ya Elimu", "Mtandao wa kijamii", "Tovuti ya habari"], answer: 1, why: "Imeorodheshwa kwenye studentprivacy.ed.gov." },
      { objective: "O4", q: "Mkataba wa faragha ya data ni:", options: ["Ahadi ya mwanafunzi", "Bango la tovuti", "Mkataba uliosainiwa kuhusu jinsi muuzaji anavyotumia na kulinda data za wanafunzi", "Nywila"], answer: 2, why: "Unamfunga muuzaji kwa maandishi." },
      { objective: "O5", q: "Miongozo mizuri ina:", options: ["Matangazo ya wauzaji", "Maadili ya jumla tu", "Mifano halisi ya kinachoruhusiwa / kisichoruhusiwa", "Majina ya wanafunzi"], answer: 2, why: "Mifano inafanya sheria zitumike." },
      { objective: "O5", q: "Miongozo inapaswa kukaguliwa dhidi ya:", options: ["Sera ya wilaya na sheria ya jimbo, pamoja na wakili", "Mitandao ya kijamii", "Blogu za wauzaji", "Hakuna kitu"], answer: 0, why: "Lazima ilingane na sheria na sera zilizopo." },
      { objective: "O6", q: "Deepfake ya mwanafunzi iliyotengenezwa na AI na kusambazwa mtandaoni inaweza kuwa:", options: ["Mradi wa shule", "Mzaha usio na madhara", "Halali kila wakati", "Unyanyasaji na huenda ikawa uhalifu"], answer: 3, why: "Ichukulie kama madhara makubwa." },
      { objective: "O6", q: "Unapohifadhi ushahidi unaohusu picha za watoto, wafanyakazi wanapaswa:", options: ["Kuwatumia wenzao", "Kufuata maelekezo ya wakili na vyombo vya sheria na kutozisambaza kamwe", "Kuziweka mtandaoni", "Kuzihifadhi kwenye simu binafsi"], answer: 1, why: "Kunakili picha kama hizo kunaweza chenyewe kuleta madhara au kuvunja sheria." },
      { objective: "O6", q: "Kuarifu familia baada ya tukio kunapaswa kufuata:", options: ["Maoni ya mitandao ya kijamii", "Chochote kilicho rahisi zaidi", "Hakuna kitu", "Sheria na sera ya wilaya"], answer: 3, why: "Wajibu wa kuarifu unatoka kwa sheria na sera." },
      { objective: "O6", q: "Sheria kuhusu picha zinazotengenezwa na AI:", options: ["Ni sawa katika kila jimbo", "Hazibadiliki kamwe", "Zinabadilika haraka; muulize wakili zipi zinahusika", "Hazihusu shule"], answer: 2, why: "Sheria za serikali kuu na za majimbo zinaendelea kubadilika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 5, 7, 8, 9, 12, 14, 16, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kanuni", objective: "O1", notYet: "Kanuni chini ya tano, au hazijaandikwa kwa maneno rahisi.", meets: "Kanuni tano kwa maneno rahisi.", exceeds: "Kila kanuni ina mfano mfupi wa shule." },
      { name: "Faragha na usawa", objective: "O3", notYet: "Sheria za faragha au ukaguzi wa usawa haupo.", meets: "Sheria za faragha (FERPA, COPPA, zana zilizoidhinishwa tu) na ukaguzi wa usawa vimejumuishwa.", exceeds: "Ukaguzi wa usawa unasema jinsi shule itakavyoangalia matokeo yake yenyewe kwa kila kikundi." },
      { name: "Sheria za wafanyakazi na wanafunzi", objective: "O5", notYet: "Hakuna sheria za kinachoruhusiwa na kisichoruhusiwa, au haziko wazi.", meets: "Inasema kile wafanyakazi na wanafunzi wanaruhusiwa na wasichoruhusiwa kufanya.", exceeds: "Walimu walipitia sheria na mabadiliko yao yakafanywa." },
      { name: "Uchunguzi wa wauzaji", objective: "O4", notYet: "Hakuna hatua za wauzaji, au hakuna zana halisi iliyochunguzwa.", meets: "Hatua za kuchunguza wauzaji, zilizojaribiwa kwa zana moja halisi ya AI.", exceeds: "Inaorodhesha kile ambacho muuzaji lazima athibitishe katika mkataba uliosainiwa." },
      { name: "Mpango wa matukio", objective: "O6", notYet: "Hatua chini ya sita, au haujajaribiwa kwa tukio.", meets: "Mpango wa matukio wa hatua sita, uliopitiwa kwa tukio moja linaloweza kutokea.", exceeds: "Unataja pengo lililopatikana katika zoezi na jinsi miongozo itakavyobadilika." }
    ]
  },
  evaluation: {
    results: [
      "Viongozi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Shule au wilaya zinazopitisha miongozo iliyoandikwa ya AI ya kuwajibika ndani ya siku 90 (utafiti wa kufuatilia)",
      "Zana za AI zilizochunguzwa kwa hatua za wauzaji kabla ya kuidhinishwa (utafiti wa kufuatilia)",
      "Shule ambazo zimefanya mazoezi ya mpango wa matukio na timu yao ya uongozi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Sera za sasa za wilaya yako za teknolojia, faragha na matumizi yanayokubalika",
      "Nyenzo ya Model Terms of Service kutoka studentprivacy.ed.gov",
      "Kesi ya kubuni ya tukio linaloweza kutokea kwa ajili ya zoezi",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kuandika na kujaribu miongozo"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha tumieni kanuni tano kwa zana moja ambayo kikundi kinaijua.",
      "Wakumbushe viongozi kwamba kozi si ushauri wa kisheria; mwalike wakili wa wilaya au afisa wa faragha kwenye kipindi cha miongozo.",
      "Fanyeni zoezi la tukio kama zoezi la mezani lenye majukumu; tumieni kesi za kubuni tu.",
      "Shughulikia mada ya deepfake kwa uangalifu; hakikisha washauri wanapatikana, na usionyeshe wala kushiriki kamwe picha za watoto.",
      "Pima kazi ya mwisho kwa rubriki, na mwombe kila timu itaje pengo moja ambalo zoezi lao lilipata."
    ]
  }
};
