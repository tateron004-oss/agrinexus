"use strict";

// Koach Learn course (Swahili translation of workforce/workforce-ai-problem-solving.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "workforce-ai-problem-solving-sw",
  lang: "sw",
  translationOf: "workforce-ai-problem-solving",
  category: "Workforce Development",
  name: "AI kwa Kutatua Matatizo na Kufanya Maamuzi",
  skills: "Kueleza tatizo kwa uwazi, Kupata chanzo cha tatizo kwa \"Kwa nini\" 5, Kupata machaguo kwa msaada wa AI, Kulinganisha machaguo kwa jedwali la uamuzi, Kukagua hoja za AI, Kuwasilisha pendekezo",
  outcome: "kutatua tatizo halisi kazini hatua kwa hatua ukitumia AI kama mwenzako wa kufikiri: kuandika maelezo ya tatizo yaliyo wazi, kupata chanzo chake kwa \"Kwa nini\" 5, kuorodhesha machaguo, kuyalinganisha katika jedwali la uamuzi, kukagua hoja za AI, na kumpa meneja wako pendekezo la ukurasa mmoja.",
  about: [
    "Kozi hii ni ya wafanyakazi na watafuta kazi wanaotaka kuwa mtu anayetatua matatizo, si anayeyaripoti tu: viongozi wa ghala na maduka, wasaidizi katika huduma za afya, wafanyakazi wa ofisi, huduma kwa wateja na mafundi. Kutatua matatizo ni moja ya ujuzi ambao waajiri wanautafuta zaidi.",
    "Utajifunza njia rahisi inayofanya kazi kwa tatizo lolote, kuanzia foleni ndefu kwenye kaunta ya malipo hadi mizigo inayochelewa au utaratibu unaochanganya. Msaidizi wa AI anakusaidia kuuliza maswali bora, kufikiria machaguo na kupanga mawazo yako. Wewe unaleta ukweli na wewe unafanya uamuzi.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Usiweke taarifa za siri za kampuni au za wateja kwenye zana za AI, na fuata kanuni za mahali pako pa kazi."
  ],
  finalTask: "Chagua tatizo halisi kazini (au mfano unaofanana na hali halisi) na uandike pendekezo la ukurasa mmoja: maelezo ya tatizo yenye ukweli, chanzo cha tatizo kwa \"Kwa nini\" 5, angalau machaguo manne (baadhi kutoka AI), jedwali la uamuzi lenye vigezo vyenye uzito, maelezo ya ulichokagua katika hoja za AI, na pendekezo lako pamoja na hatua za kwanza na jinsi utakavyopima mafanikio.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi na watafuta kazi wanaotaka kuwa mtu anayetatua matatizo, si anayeyaripoti tu: viongozi wa ghala na maduka, wasaidizi katika huduma za afya, wafanyakazi wa ofisi, huduma kwa wateja na mafundi.",
    startingPoint: "Wanaona matatizo kazini na mara nyingi wana mawazo, na wanaweza kutumia simu janja au kompyuta. Wengi hawajawahi kutumia njia yenye mpangilio kama \"Kwa nini\" 5 au jedwali la uamuzi, na wachache wametumia AI kama mwenzao wa kufikiri au wamekagua hoja zake.",
    gap: "Kutatua matatizo ni moja ya ujuzi ambao waajiri wanautafuta zaidi, lakini malalamiko yasiyo na ukweli na suluhisho zisizojua chanzo mara chache hukubaliwa. Wanafunzi wanahitaji njia ya hatua kwa hatua, kuanzia maelezo ya tatizo hadi pendekezo, inayotumia AI kupanua mawazo yao huku wakikagua hoja zake na kubaki wenye uamuzi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; njia zinaonyeshwa hatua kwa hatua",
      "Vifaa: kompyuta au simu janja; spreadsheet ya bure inasaidia kwa jedwali la uamuzi",
      "Faragha na sera: hakuna taarifa za siri za wateja kwenye zana za AI; kanuni za AI za mahali pa kazi zinatangulia",
      "Ukweli: namba, kanuni na sera kutoka AI zinakaguliwa kwa data halisi, chanzo rasmi au meneja",
      "Muda: masomo ya kama dakika 5; kukusanya ukweli kuhusu tatizo halisi kunaweza kuchukua wiki moja"
    ],
    prerequisites: "Hakuna. Kozi \"Essential AI Tools for the Workplace\" (zana muhimu za AI kazini) inasaidia wanafunzi ambao ni wapya kwa wasaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa lalamiko lisilo wazi kazini", action: "kuandika maelezo ya tatizo yaliyo wazi na yenye ukweli, huku AI ikikuuliza maswali ya kuyaboresha", standard: "yakisema nini, wapi, lini, ukubwa wake na kwa nini ni muhimu" },
    { id: "O2", condition: "Ukipewa maelezo ya tatizo", action: "kutumia \"Kwa nini\" 5 kupata chanzo cha tatizo", standard: "na kila chanzo ambacho AI inapendekeza kikaguliwe kwa ukweli au kwa wafanyakazi wenzako" },
    { id: "O3", condition: "Ukipewa chanzo cha tatizo", action: "kutengeneza orodha ya suluhisho zinazowezekana kwa kutumia AI, wafanyakazi wenzako na uzoefu wako", standard: "ukibaki na angalau manne yanayofaa, pamoja na \"kutobadilisha chochote\"" },
    { id: "O4", condition: "Ukipewa angalau machaguo manne", action: "kulinganisha machaguo katika jedwali la uamuzi lenye vigezo vyenye uzito", standard: "uzito na alama zikiwekwa na wewe na jumla zikiwa sahihi" },
    { id: "O5", condition: "Ukipewa hoja za AI kuhusu machaguo yako", action: "kukagua hoja hizo kutafuta namba za kubuni na kanuni zisizokaguliwa, na kuiomba AI itoe hoja za upande wa pili", standard: "ukiandika angalau vitu viwili ulivyothibitisha" },
    { id: "O6", condition: "Ukitumia uchambuzi wako", action: "kuandika pendekezo la ukurasa mmoja lenye hatua za kwanza, jaribio dogo na kipimo cha mafanikio", standard: "hoja kuu ikiwa katika mistari ya kwanza na likiwa na sehemu zote saba" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuelewa tatizo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika maelezo ya tatizo yaliyo wazi",
          minutes: 5,
          goal: "Geuza lalamiko lisilo wazi kuwa maelezo ya tatizo yaliyo wazi na yenye ukweli.",
          text: [
            "\"Mambo yamevurugika\" si tatizo unaloweza kulitatua. Maelezo ya tatizo yaliyo wazi yanasema nini kinatokea, wapi, lini, ukubwa wake, na kwa nini ni muhimu. Mfano: \"Siku za kazi jioni kuanzia 5 pm hadi 7 pm, wateja wanasubiri wastani wa dakika 12 kwenye kaunta ya malipo, na tunapata malalamiko kama 5 kwa wiki.\"",
            "Tumia ukweli unaoweza kuona au kuhesabu: saa, namba, mara ngapi. Kama huna namba, zikusanye kwa wiki moja.",
            "AI inaweza kusaidia: \"Haya ni maelezo yangu ya awali. Niulize maswali matano yatakayoyafanya kuwa maelezo ya tatizo yaliyo wazi zaidi.\" Kujibu maswali hayo mara nyingi kunakuonyesha unachohitaji kujua kweli."
          ],
          steps: ["Andika tatizo kwa maneno yako mwenyewe.", "Ongeza nini, wapi, lini, ukubwa wake na kwa nini ni muhimu.", "Badilisha makisio kwa hesabu au vipimo.", "Iombe AI maswali ya kuyaboresha, kisha andika upya."],
          words: [["Maelezo ya tatizo", "maelezo mafupi ya tatizo yenye ukweli tu (kwa Kiingereza: problem statement)."], ["Data", "ukweli na namba unazoweza kuhesabu au kupima."]],
          slides: [
            { title: "Si wazi dhidi ya wazi", bullets: ["Si wazi: \"Mambo yamevurugika\"", "Wazi: nini, wapi, lini, ukubwa wake, kwa nini ni muhimu"] },
            { title: "Mfano", bullets: ["Siku za kazi, 5-7 pm", "Wastani wa dakika 12 za kusubiri kwenye malipo", "Malalamiko kama 5 kwa wiki"] },
            { title: "Yaboreshe kwa AI", bullets: ["\"Niulize maswali matano ili haya yawe wazi zaidi\"", "Jibu kwa ukweli, kisha andika upya"] }
          ],
          tryIt: "Chagua tatizo halisi au la mfano kazini. Andika maelezo ya awali, iombe AI maswali matano ya kuyaboresha, yajibu, na uandike upya kama maelezo ya tatizo yaliyo wazi.",
          youCanNow: "kuandika maelezo ya tatizo yaliyo wazi na yenye ukweli.",
          quickCheck: [
            { objective: "O1", q: "Maelezo ya tatizo yaliyo wazi yana nini?", options: ["Nani wa kulaumiwa", "Nini, wapi, lini, ukubwa wake na kwa nini ni muhimu", "Hisia zako tu kuhusu tatizo", "Suluhisho unalotaka tayari"], answer: 1, why: "Maelezo yaliyo wazi yanaeleza ukweli wa tatizo, si lawama wala suluhisho." },
            { objective: "O1", q: "Ujumbe wako unasema \"Mizigo huchelewa kila mara.\" Unafanya nini kinachofuata?", options: ["Mtumie meneja wako kama ulivyo", "Ongeza neno \"sana\" kusisitiza", "Walaumu madereva", "Jibu maswali ya AI ya kuboresha na uongeze ukweli kama siku zipi na imechelewa kiasi gani"], answer: 3, why: "Maswali ya kuboresha yanageuza lalamiko lisilo wazi kuwa ukweli unaoweza kuufanyia kazi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata chanzo cha tatizo kwa \"Kwa nini\" 5",
          minutes: 5,
          goal: "Tumia \"Kwa nini\" 5 kupata chanzo kilicho nyuma ya tatizo.",
          text: [
            "Ukirekebisha dalili tu, tatizo linarudi. \"Kwa nini\" 5 (kwa Kiingereza: 5 Whys) inakusaidia kuchimba hadi chanzo cha tatizo: uliza \"Kwa nini?\" kuhusu tatizo, kisha uliza \"Kwa nini?\" kuhusu jibu hilo, mara tano hivi.",
            "Mfano: Foleni ndefu kwenye malipo. Kwa nini? Kaunta moja tu iko wazi 5 pm. Kwa nini? Zamu ya mhudumu wa kaunta inaisha 5 pm. Kwa nini? Ratiba ilitengenezwa kwa ajili ya msongamano wa asubuhi. Kwa nini? Hakuna aliyeangalia mauzo ya jioni ilipotengenezwa. Chanzo: ratiba hailingani na mahitaji ya jioni.",
            "AI inaweza kupendekeza \"kwa nini\" ambazo hukuzifikiria, lakini ni wewe na wafanyakazi wenzako tu mnaojua zipi ni kweli. Kagua kila jibu kwa ukweli au kwa kuwauliza watu wanaofanya kazi hiyo."
          ],
          steps: ["Andika maelezo ya tatizo juu.", "Uliza \"Kwa nini?\" na uandike jibu.", "Uliza \"Kwa nini?\" kuhusu jibu hilo; rudia mara tano hivi.", "Kagua kila jibu kwa ukweli au kwa wafanyakazi wenzako.", "Zungushia duara chanzo cha tatizo."],
          words: [["Chanzo cha tatizo", "sababu ya ndani zaidi inayofanya tatizo litokee (kwa Kiingereza: root cause)."], ["Dalili", "ishara ya tatizo, si chanzo chake."], ["\"Kwa nini\" 5", "njia ya kuuliza \"kwa nini?\" mara kadhaa ili kupata chanzo cha tatizo."]],
          slides: [
            { title: "Dalili dhidi ya chanzo", bullets: ["Ukirekebisha dalili: tatizo linarudi", "Ukirekebisha chanzo: tatizo linaondoka"] },
            { title: "Uliza \"Kwa nini?\" mara tano hivi", bullets: ["Foleni ndefu -> kaunta moja iko wazi", "-> zamu inaisha 5 pm -> ratiba ni ya asubuhi", "Chanzo: ratiba hailingani na mahitaji ya jioni"] },
            { title: "AI inapendekeza, wewe unathibitisha", bullets: ["AI inaweza kutoa \"kwa nini\" zinazowezekana", "Kagua kila moja kwa ukweli au wafanyakazi wenzako"] }
          ],
          tryIt: "Fanya \"Kwa nini\" 5 kwa tatizo lako. Iombe AI vyanzo vingine vinavyowezekana, kisha kagua vipi ni kweli kwa ukweli au kwa mfanyakazi mwenzako. Zungushia duara chanzo cha tatizo.",
          youCanNow: "kupata chanzo cha tatizo kwa kutumia \"Kwa nini\" 5.",
          quickCheck: [
            { objective: "O2", q: "Kuna tofauti gani kati ya dalili na chanzo cha tatizo?", options: ["Dalili ni ishara ya tatizo; chanzo ni sababu ya ndani zaidi inayofanya litokee", "Zina maana moja", "Dalili ni kubwa zaidi kila wakati", "Chanzo ni kile ambacho wateja wanalalamikia"], answer: 0, why: "Ukirekebisha dalili tu, tatizo linarudi; chanzo ndicho kinachofanya litokee." },
            { objective: "O2", q: "AI inapendekeza kwamba chanzo ni \"wafanyakazi hawajali\". Huna uhakika. Unafanya nini?", options: ["Kiandike kama chanzo", "Mwambie meneja wako kwamba wafanyakazi hawajali", "Kikague kwa ukweli au kwa wafanyakazi wenzako kabla ya kukikubali", "Acha \"Kwa nini\" 5"], answer: 2, why: "Mapendekezo ya AI ni mawazo ya kukagua, si vyanzo vilivyothibitishwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata machaguo kwa msaada wa AI",
          minutes: 5,
          goal: "Tengeneza orodha ya angalau suluhisho manne yanayowezekana, ukitumia AI kupanua mawazo yako.",
          text: [
            "Watu wengi wanaruka kwenye suluhisho la kwanza. Maamuzi bora yanatokana na kulinganisha machaguo kadhaa. Lenga angalau machaguo manne, pamoja na \"kutobadilisha chochote\" kama kipimo cha kuanzia.",
            "Iombe AI ichangie mawazo: \"Chanzo cha tatizo ni kwamba ratiba yetu hailingani na mahitaji ya jioni katika duka dogo la vyakula. Nipe suluhisho nane zinazowezekana, kuanzia za bei nafuu na za haraka hadi mabadiliko makubwa.\" Inaweza kupendekeza mawazo kama kuhamisha muda wa mapumziko, kaunta ya kujilipia mwenyewe, au kuwafundisha wapanga bidhaa kazi ya kaunta.",
            "Futa mawazo yasiyofaa mahali pako pa kazi au ambayo hayawezi kukubaliwa kamwe, na uongeze mawazo ya wafanyakazi wenzako. Watu wanaofanya kazi hiyo mara nyingi wana mawazo bora zaidi."
          ],
          steps: ["Andika chanzo cha tatizo.", "Iombe AI machaguo sita hadi nane, kuanzia madogo hadi makubwa.", "Futa yasiyofaa.", "Ongeza mawazo ya wafanyakazi wenzako.", "Baki na angalau manne, pamoja na \"kutobadilisha chochote\"."],
          words: [["Chaguo", "suluhisho moja linalowezekana (wingi: machaguo)."], ["Kuchangia mawazo", "kuorodhesha mawazo mengi haraka bila kuyahukumu bado (kwa Kiingereza: brainstorm)."], ["Kipimo cha kuanzia", "kinachotokea usipobadilisha chochote (kwa Kiingereza: baseline)."]],
          slides: [
            { title: "Usiishie kwenye wazo la kwanza", bullets: ["Linganisha angalau machaguo manne", "Weka pia \"kutobadilisha chochote\""] },
            { title: "AI inapanua mawazo yako", bullets: ["Ipe chanzo cha tatizo", "Omba machaguo kuanzia madogo hadi makubwa"] },
            { title: "Yafanye yawe halisi", bullets: ["Futa mawazo yasiyofaa", "Ongeza mawazo ya wafanyakazi wenzako", "Wanaofanya kazi mara nyingi wanajua zaidi"] }
          ],
          tryIt: "Iombe AI machaguo nane ya kurekebisha chanzo cha tatizo lako. Futa yasiyofaa, ongeza moja kutoka kwa mfanyakazi mwenzako au uzoefu wako, na ubaki na angalau manne.",
          youCanNow: "kupata na kupunguza orodha ya machaguo yanayowezekana kwa msaada wa AI.",
          quickCheck: [
            { objective: "O3", q: "Kuchangia mawazo kuna maana gani?", options: ["Kuchagua wazo la kwanza", "Kuhukumu kila wazo mara unapolisikia", "Kumuuliza meneja wako tu", "Kuorodhesha mawazo mengi haraka bila kuyahukumu bado"], answer: 3, why: "Kuchangia mawazo kunakusanya mawazo mengi kwanza; unayahukumu baadaye." },
            { objective: "O3", q: "AI inakupa machaguo nane, na mawili yanahitaji bajeti ambayo duka lako halina. Unafanya nini?", options: ["Yaweke yote", "Futa yasiyofaa na uongeze moja kutoka kwa mfanyakazi mwenzako", "Chagua la bei ghali zaidi", "Iombe AI mengine 50"], answer: 1, why: "Unabaki na machaguo yanayofaa mahali pako pa kazi na unaongeza mawazo ya watu wanaofanya kazi hiyo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuelewa tatizo",
        questions: [
          { objective: "O1", q: "Ni maelezo yapi ya tatizo yaliyo wazi zaidi?", options: ["\"Mambo yamevurugika.\"", "\"Siku za kazi 5-7 pm, kusubiri kwenye malipo ni wastani wa dakika 12 na tunapata malalamiko kama 5 kwa wiki.\"", "\"Wateja wanaudhi.\"", "\"Rekebisha.\""], answer: 1, why: "Yanasema nini, lini, ukubwa wake na kwa nini ni muhimu." },
          { objective: "O2", q: "Chanzo cha tatizo ni nini?", options: ["Lalamiko", "Kitu cha kwanza unachokiona", "Mmea", "Sababu ya ndani zaidi inayofanya tatizo litokee"], answer: 3, why: "Ukirekebisha chanzo, tatizo halirudi." },
          { objective: "O2", q: "Katika \"Kwa nini\" 5, AI inapendekeza chanzo. Unafanya nini?", options: ["Kikague kwa ukweli au kwa wafanyakazi wenzako", "Kikubali", "Puuza mawazo yote ya AI", "Mlaumu mtu"], answer: 0, why: "Ukweli tu ndio unaothibitisha chanzo." },
          { objective: "O3", q: "Kwa nini uweke \"kutobadilisha chochote\" kama chaguo?", options: ["Kinatakiwa kisheria", "Ni bora kila wakati", "Kinatoa kipimo cha kuanzia cha kulinganisha", "Hakina manufaa kamwe"], answer: 2, why: "Kipimo cha kuanzia kinaonyesha kila badiliko linaleta faida gani." },
          { objective: "O3", q: "Ni nani mara nyingi ana mawazo bora ya kurekebisha tatizo la kazini?", options: ["Marafiki wa wateja", "AI peke yake", "Watu wanaofanya kazi hiyo", "Hakuna"], answer: 2, why: "Wanaofanya kazi wanajua undani wake." }
        ]
      }
    },
    {
      name: "Sura 2: Kuamua na kupendekeza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kulinganisha machaguo kwa jedwali la uamuzi",
          minutes: 6,
          goal: "Wapa machaguo alama kwa vigezo vyenye uzito katika jedwali la uamuzi.",
          text: [
            "Jedwali la uamuzi (kwa Kiingereza: decision matrix) ni jedwali linalolinganisha machaguo kwa haki. Machaguo yanakwenda chini upande wa kushoto; vigezo vinakwenda juu. Vigezo vya kawaida: gharama, muda wa kuanzisha, jinsi linavyorekebisha chanzo cha tatizo, athari kwa wateja, athari kwa wafanyakazi wenzako, na hatari.",
            "Mpe kila kigezo uzito (1 hadi 3) kulingana na umuhimu wake, mpe kila chaguo alama 1 hadi 5 kwa kila kigezo, zidisha alama kwa uzito, kisha jumlisha. Jumla kubwa zaidi ni chaguo lenye nguvu, si mshindi wa moja kwa moja.",
            "Unaweza kuiomba AI itengeneze jedwali tupu au spreadsheet yenye fomula. Wewe unachagua uzito na alama kulingana na ukweli na kile ambacho mahali pako pa kazi panathamini. Kisha jiulize: je, mshindi ana mantiki? Kama hapana, kagua alama zako."
          ],
          steps: ["Orodhesha machaguo yako upande wa kushoto.", "Chagua vigezo vinne hadi sita na umpe kila kimoja uzito 1-3.", "Mpe kila chaguo alama 1-5 kwa kila kigezo.", "Zidisha alama x uzito kisha jumlisha.", "Hakikisha matokeo yana mantiki."],
          words: [["Jedwali la uamuzi", "jedwali linalowapa machaguo alama kwa vigezo."], ["Vigezo", "mambo unayotumia kupima machaguo, kama gharama au hatari."], ["Uzito", "umuhimu wa kigezo kimoja ukilinganisha na vingine."]],
          slides: [
            { title: "Tengeneza jedwali", bullets: ["Machaguo upande wa kushoto", "Vigezo juu", "Gharama, muda, kurekebisha chanzo, watu, hatari"] },
            { title: "Weka alama", bullets: ["Mpe kila kigezo uzito 1-3", "Mpe kila chaguo alama 1-5", "Alama x uzito, kisha jumlisha"] },
            { title: "Wewe unaamua", bullets: ["AI inaweza kutengeneza jedwali", "Wewe unachagua uzito na alama", "Je, mshindi ana mantiki?"] }
          ],
          tryIt: "Tengeneza jedwali la uamuzi kwa machaguo yako manne lenye angalau vigezo vinne vyenye uzito. Tumia AI kutengeneza jedwali au spreadsheet, kisha jaza alama wewe mwenyewe na uzijumlishe.",
          youCanNow: "kulinganisha machaguo kwa haki kwa jedwali la uamuzi lenye uzito.",
          quickCheck: [
            { objective: "O4", q: "Katika jedwali la uamuzi, kigezo ni nini?", options: ["Jibu la mwisho", "Moja ya machaguo", "Kitu unachotumia kupima machaguo, kama gharama au usalama", "Mtu anayeamua"], answer: 2, why: "Vigezo ni mambo unayotumia kumpa kila chaguo alama." },
            { objective: "O4", q: "Chaguo B lina alama 3 kwa kasi (uzito 2) na 5 kwa gharama (uzito 1). Jumla yake kwa vigezo hivi viwili ni ngapi?", options: ["11", "8", "15", "10"], answer: 0, why: "Zidisha kila alama kwa uzito wake kisha jumlisha: 3 x 2 + 5 x 1 = 11." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua hoja za AI",
          minutes: 5,
          goal: "Tambua makosa ya kawaida katika hoja za AI kabla ya kuzitegemea.",
          text: [
            "AI inaweza kusikika na uhakika na bado ikakosea. Matatizo ya kawaida: ukweli au namba za kubuni, makosa ya hesabu, mawazo yanayopuuza kanuni au bajeti ya mahali pako pa kazi, na kusahau upande wa watu (ari ya wafanyakazi, usalama, haki).",
            "Iombe AI ionyeshe hoja zake: \"Eleza hatua kwa hatua kwa nini uliweka chaguo B kuwa la kwanza.\" Kisha iombe itetee upande wa pili: \"Ni sababu zipi zenye nguvu zaidi za KUTOCHAGUA chaguo B?\" Hii mara nyingi inaonyesha udhaifu.",
            "Kagua namba wewe mwenyewe, kagua kanuni au sera yoyote kwa chanzo rasmi au kwa meneja wako, na umwombe mfanyakazi mwenzako maoni yake ya haraka. Andika ulichokagua; kinafanya pendekezo lako liwe na nguvu zaidi."
          ],
          steps: ["Iombe AI ieleze hoja zake hatua kwa hatua.", "Omba hoja zenye nguvu zaidi dhidi ya chaguo lake.", "Kagua upya namba na hesabu wewe mwenyewe.", "Kagua kanuni kwa chanzo rasmi au kwa meneja wako.", "Pata maoni ya haraka ya mfanyakazi mwenzako na uandike ulichokagua."],
          words: [["Hoja", "hatua za kufikiri zinazoleta hitimisho."], ["Mtetezi wa upande wa pili", "mtu anayetetea upande mwingine makusudi ili kupima wazo (kwa Kiingereza: devil's advocate)."]],
          slides: [
            { title: "Uhakika si usahihi", bullets: ["Ukweli au namba za kubuni", "Makosa ya hesabu", "Kusahau kanuni, bajeti au upande wa watu"] },
            { title: "Pima hoja", bullets: ["\"Eleza hatua kwa hatua\"", "\"Ni sababu zipi za KUTOCHAGUA hili?\""] },
            { title: "Kagua na uandike", bullets: ["Kagua upya namba wewe mwenyewe", "Kanuni: chanzo rasmi au meneja", "Maoni ya mwenzako; andika ulichokagua"] }
          ],
          tryIt: "Iulize AI ingechagua chaguo lipi kati ya yako na kwa nini. Kisha omba hoja zenye nguvu zaidi dhidi yake. Kagua upya namba moja na uandike vitu viwili ulivyothibitisha.",
          youCanNow: "kupima hoja za AI na kugundua makosa kabla ya kuzitegemea.",
          quickCheck: [
            { objective: "O5", q: "Ni tatizo gani la kawaida katika hoja za AI?", options: ["Inakataa kujibu kila wakati", "Namba za kubuni zinazosikika kama za kweli", "Inatumia vyanzo rasmi tu", "Haiwezi kuandika majedwali"], answer: 1, why: "AI inaweza kubuni namba zinazosikika sahihi, kwa hiyo unazikagua upya." },
            { objective: "O5", q: "AI inasema sera ya kampuni inaruhusu muda wa ziada kwa suluhisho lako. Unafanya nini?", options: ["Iweke katika pendekezo lako", "Chukulia kuwa ni kweli", "Iulize AI kama ina uhakika", "Kagua sera hiyo kwa chanzo rasmi au kwa meneja wako"], answer: 3, why: "Kanuni na sera zinatoka chanzo rasmi au kwa meneja wako, si kwa AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwasilisha pendekezo lako",
          minutes: 5,
          goal: "Andika pendekezo la ukurasa mmoja ambalo meneja wako anaweza kulifanyia kazi.",
          text: [
            "Mameneja wanakubali mapendekezo mafupi yaliyo wazi. Tumia mpangilio huu: Tatizo (sentensi moja au mbili zenye ukweli), Chanzo cha tatizo, Machaguo yaliyofikiriwa, Pendekezo na sababu, Hatua za kwanza, Jinsi tutakavyopima mafanikio, Hatari na jinsi ya kuzishughulikia.",
            "Liweke kwenye ukurasa mmoja. Iombe AI ifupishe rasimu yako: \"Fanya hili liwe pendekezo la ukurasa mmoja kwa meneja wangu, hoja kuu kwanza, kwa maneno rahisi.\" Kisha hakikisha kila ukweli na namba vinalingana na kazi yako.",
            "Toa jaribio dogo kwanza: \"Tujaribu kwa wiki mbili jioni za Jumanne na Alhamisi na tupime muda wa kusubiri.\" Jaribio dogo linaloweza kupimwa ni rahisi kukubaliwa na linathibitisha wazo lako."
          ],
          steps: ["Andika sehemu zote saba.", "Anza na pendekezo lako katika mistari ya kwanza.", "Iombe AI ilifupishe hadi ukurasa mmoja.", "Kagua kila ukweli na namba.", "Pendekeza jaribio dogo linaloweza kupimwa."],
          words: [["Pendekezo", "chaguo unalopendekeza na sababu zake."], ["Jaribio", "kujaribu badiliko kwa muda mfupi na kwa kiwango kidogo."], ["Kipimo cha mafanikio", "namba inayoonyesha kama badiliko lilifanya kazi."]],
          slides: [
            { title: "Mpangilio wa ukurasa mmoja", bullets: ["Tatizo na chanzo chake", "Machaguo na pendekezo", "Hatua za kwanza, kipimo cha mafanikio, hatari"] },
            { title: "Fanya iwe rahisi kukubali", bullets: ["Hoja kuu kwanza, ukurasa mmoja", "AI inafupisha; wewe unakagua ukweli"] },
            { title: "Pendekeza jaribio dogo", bullets: ["\"Wiki mbili, jioni mbili kwa wiki\"", "Pima matokeo", "Rahisi kukubaliwa; linathibitisha wazo"] }
          ],
          tryIt: "Kazi ya mwisho: andika pendekezo lako la ukurasa mmoja lenye sehemu zote saba, ukiambatisha \"Kwa nini\" 5 na jedwali la uamuzi, maelezo ya ulichokagua katika hoja za AI, na jaribio dogo lenye kipimo cha mafanikio.",
          youCanNow: "kutatua tatizo la kazini hatua kwa hatua na kuwasilisha pendekezo ambalo meneja wako anaweza kulifanyia kazi.",
          quickCheck: [
            { objective: "O6", q: "Kipimo cha mafanikio ni nini?", options: ["Namba inayoonyesha kama badiliko lilifanya kazi", "Urefu wa ripoti yako", "Watu wangapi walipenda wazo", "Kukubali kwa meneja wako"], answer: 0, why: "Kipimo cha mafanikio ni namba unayofuatilia kuthibitisha kwamba badiliko lilifanya kazi." },
            { objective: "O6", q: "Meneja wako ana dakika mbili. Unaanzaje pendekezo lako la ukurasa mmoja?", options: ["Kwa historia ya tatizo", "Kwa orodha ya kila mtu uliyezungumza naye", "Kwa pendekezo lako na hatua ya kwanza, katika mistari ya kwanza", "Kwa jedwali la uamuzi"], answer: 2, why: "Kuweka hoja kuu kwanza kunamruhusu meneja mwenye shughuli nyingi kulifanyia kazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuamua na kupendekeza",
        questions: [
          { objective: "O4", q: "Katika jedwali la uamuzi, uzito ni nini?", options: ["Umuhimu wa kigezo", "Uzito wa sanduku", "Alama ya chaguo", "Nywila"], answer: 0, why: "Uzito unaonyesha umuhimu." },
          { objective: "O4", q: "Chaguo A lina alama 4 kwa gharama (uzito 3) na 2 kwa hatari (uzito 2). Jumla yake kwa vigezo hivi viwili ni:", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { objective: "O5", q: "Njia nzuri ya kupima chaguo la AI ni kuiuliza:", options: ["\"Una uhakika?\" tu", "\"Ni sababu zipi zenye nguvu zaidi za KUTOCHAGUA hili?\"", "Hakuna kitu", "\"Nichagulie\""], answer: 1, why: "Kutetea upande wa pili kunaonyesha udhaifu." },
          { objective: "O6", q: "Hoja kuu ya pendekezo inapaswa kuwekwa wapi?", options: ["Katika mistari ya kwanza", "Mwisho kabisa", "Katika tanbihi ya chini", "Popote pale"], answer: 0, why: "Mameneja wanasoma mwanzo kwanza." },
          { objective: "O6", q: "Kwa nini upendekeze jaribio dogo?", options: ["Kwa sababu linagharimu zaidi", "Ili kuchelewesha uamuzi milele", "Ni rahisi kukubaliwa na linathibitisha wazo", "Halina manufaa"], answer: 2, why: "Majaribio madogo yanayopimika yanapunguza hatari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kutatua Matatizo na Kufanya Maamuzi",
    questions: [
      { objective: "O1", q: "Maelezo ya tatizo yaliyo wazi yana:", options: ["Lalamiko tu", "Nini, wapi, lini, ukubwa wake na kwa nini ni muhimu", "Mtu wa kulaumiwa", "Suluhisho"], answer: 1, why: "Sehemu hizo zinafanya tatizo liweze kutatuliwa." },
      { objective: "O1", q: "Kama huna namba kuhusu tatizo, unapaswa:", options: ["Kuiomba AI izibuni", "Kukisia", "Kukata tamaa", "Kukusanya baadhi kwa wiki moja"], answer: 3, why: "Ukweli ni bora kuliko makisio." },
      { objective: "O1", q: "AI inawezaje kusaidia na maelezo ya tatizo?", options: ["Haiwezi kusaidia", "Kwa kubuni ukweli", "Kwa kukuamulia", "Kwa kukuuliza maswali ya kuyaboresha"], answer: 3, why: "Maswali mazuri yanaonyesha unachohitaji." },
      { objective: "O2", q: "Dalili ni:", options: ["Chanzo cha tatizo", "Ishara ya tatizo, si chanzo chake", "Suluhisho", "Zana"], answer: 1, why: "Dalili zinaelekeza kwenye vyanzo vya ndani zaidi." },
      { objective: "O2", q: "Katika \"Kwa nini\" 5, unauliza \"Kwa nini?\" kuhusu:", options: ["Mara hamsini", "Mara moja tu", "Kila jibu, mara tano hivi", "Hakuna kitu"], answer: 2, why: "Kila \"kwa nini\" inachimba ndani zaidi." },
      { objective: "O2", q: "Katika mfano wa kaunta ya malipo, chanzo cha tatizo kilikuwa:", options: ["Ratiba haikulingana na mahitaji ya jioni", "Wateja walikuwa wazito", "Kaunta zilikuwa za zamani", "Mvua ilikuwa inanyesha"], answer: 0, why: "Ratiba ilitengenezwa kwa ajili ya asubuhi." },
      { objective: "O3", q: "Unapaswa kulinganisha angalau machaguo mangapi?", options: ["Hakuna", "Moja", "Manne, pamoja na kutobadilisha chochote", "Wazo la kwanza la AI tu"], answer: 2, why: "Kulinganisha machaguo kadhaa kunaleta maamuzi bora." },
      { objective: "O3", q: "Kuchangia mawazo ni:", options: ["Kuorodhesha mawazo mengi haraka bila kuyahukumu bado", "Kuamua haraka", "Kubishana", "Kuandika ripoti"], answer: 0, why: "Kuhukumu kunakuja baadaye." },
      { objective: "O3", q: "AI inapendekeza wazo ambalo mahali pako pa kazi hapawezi kulikubali kamwe. Wewe:", options: ["Unalisisitiza", "Unalifuta", "Unalificha", "Unalilipia mwenyewe"], answer: 1, why: "Baki na machaguo yanayowezekana." },
      { objective: "O4", q: "Ni kipi kigezo cha kawaida cha jedwali la uamuzi?", options: ["Hali ya hewa kesho", "Rangi unayoipenda", "Namba ya bahati", "Gharama"], answer: 3, why: "Gharama ni kigezo muhimu." },
      { objective: "O4", q: "Alama katika jedwali la kozi hii ni kuanzia:", options: ["1 hadi 5", "1 hadi 100", "A hadi Z", "0 hadi 1 tu"], answer: 0, why: "Kipimo rahisi cha 1-5." },
      { objective: "O4", q: "Jumla kubwa zaidi katika jedwali ni:", options: ["Haina manufaa", "Jibu la moja kwa moja", "Si sahihi kila wakati", "Chaguo lenye nguvu, ambalo bado unahakikisha lina mantiki"], answer: 3, why: "Hakikisha matokeo yana mantiki." },
      { objective: "O4", q: "Nani anachagua uzito na alama?", options: ["Namba ya kubahatisha", "AI peke yake", "Wewe, kulingana na ukweli na kile mahali pako pa kazi panathamini", "Hakuna"], answer: 2, why: "Uamuzi unabaki kwako." },
      { objective: "O5", q: "Ni tatizo gani la kawaida katika hoja za AI?", options: ["Kuwa makini kupita kiasi kila wakati", "Namba za kubuni", "Kukataa kuandika", "Hesabu kamili bila kosa"], answer: 1, why: "AI inaweza kubuni takwimu." },
      { objective: "O5", q: "Kanuni na sera katika jibu la AI zinapaswa kukaguliwa kwa:", options: ["Hakuna mtu", "AI nyingine tu", "Uvumi", "Chanzo rasmi au meneja wako"], answer: 3, why: "Kanuni zinahitaji chanzo chenye mamlaka." },
      { objective: "O5", q: "Kwa nini uandike ulichokagua?", options: ["Haina manufaa", "Kujaza nafasi", "Kunafanya pendekezo lako liwe na nguvu zaidi", "Kuilaumu AI"], answer: 2, why: "Kunaonyesha kazi ya uangalifu." },
      { objective: "O5", q: "Ni kipi kisichopaswa kuwekwa kamwe kwenye zana ya AI wakati wa kutatua tatizo?", options: ["Taarifa za siri za wateja", "Maelezo ya jumla ya tatizo", "Orodha yako ya machaguo", "Majina ya vigezo"], answer: 0, why: "Taarifa za siri zinabaki nje." },
      { objective: "O6", q: "Pendekezo la ukurasa mmoja lina:", options: ["Maoni yako tu", "Tatizo, chanzo, machaguo, pendekezo, hatua za kwanza, kipimo, hatari", "Kila barua pepe uliyotuma", "Nywila"], answer: 1, why: "Sehemu hizo zinafanya liweze kufanyiwa kazi." },
      { objective: "O6", q: "Kipimo cha mafanikio ni:", options: ["Mshahara wako", "Namba inayoonyesha kama badiliko lilifanya kazi", "Pongezi", "Makisio"], answer: 1, why: "Vipimo vinathibitisha matokeo." },
      { objective: "O6", q: "Ni jaribio gani bora kupendekeza?", options: ["Wiki mbili jioni mbili kwa wiki, ukipima muda wa kusubiri", "Kubadilisha kila kitu milele mara moja", "Bila jaribio na bila kipimo", "Badiliko la siri"], answer: 0, why: "Majaribio madogo yanayopimwa ni rahisi kukubaliwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 4, 6, 9, 11, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maelezo ya tatizo", objective: "O1", notYet: "Maelezo si wazi au hayana ukweli.", meets: "Yanasema nini, wapi, lini, ukubwa wake na kwa nini ni muhimu, kwa ukweli.", exceeds: "Yana namba ambazo mwanafunzi alizikusanya mwenyewe." },
      { name: "Chanzo cha tatizo", objective: "O2", notYet: "Hakuna \"Kwa nini\" 5, au chanzo kilichukuliwa kutoka AI bila kukaguliwa.", meets: "Mfululizo wa \"Kwa nini\" 5 hadi chanzo kilichokaguliwa kwa ukweli au kwa wafanyakazi wenzake.", exceeds: "Inaonyesha vyanzo vipi vilivyopendekezwa na AI viliondolewa na kwa nini." },
      { name: "Machaguo na jedwali", objective: "O4", notYet: "Chini ya machaguo manne, au hakuna jedwali lenye uzito.", meets: "Angalau machaguo manne pamoja na kutobadilisha chochote, yamepewa alama katika jedwali lenye angalau vigezo vinne vyenye uzito na jumla sahihi.", exceeds: "Mwanafunzi anaeleza kwa nini uzito unafaa mahali pake pa kazi." },
      { name: "Hoja za AI zimekaguliwa", objective: "O5", notYet: "Hakuna maelezo ya kilichokaguliwa.", meets: "Maelezo ya angalau vitu viwili vilivyothibitishwa katika hoja za AI, na hakuna taarifa za siri zilizotumika.", exceeds: "Ina hoja zenye nguvu zaidi dhidi ya chaguo lililochaguliwa na jibu kwa hoja hizo." },
      { name: "Pendekezo", objective: "O6", notYet: "Hoja kuu imefichika, au hatua na kipimo havipo.", meets: "Ukurasa mmoja wenye hoja kuu kwanza, hatua za kwanza, jaribio dogo na kipimo cha mafanikio.", exceeds: "Linaorodhesha hatari na jinsi zitakavyoshughulikiwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaowasilisha pendekezo lao kwa meneja ndani ya siku 30 (utafiti wa kufuatilia)",
      "Mapendekezo yanayoleta jaribio au badiliko kazini",
      "Wanafunzi wanaoripoti kupandishwa cheo, nafasi ya uongozi au kazi mpya ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini, au zana ambayo mahali pa kazi pameikubali",
      "Spreadsheet ya bure (Google Sheets au Microsoft Excel online) au karatasi kwa jedwali la uamuzi",
      "Tatizo halisi la kazini au mfano unaofanana na hali halisi, kama muda wa kusubiri kwenye kaunta ya malipo",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kukusanya ukweli kuhusu tatizo halisi"
    ],
    facilitatorNotes: [
      "Toa tatizo la mfano la pamoja kwa wanafunzi wasioweza kutumia tatizo halisi, ili kila mtu afanye mazoezi ya kila hatua.",
      "Waache vikundi vidogo vifanye \"Kwa nini\" 5 pamoja; watu wanaofanya kazi hiyo mara nyingi huona chanzo cha tatizo kwanza.",
      "Hakikisha hakuna taarifa za siri za wateja zinazoingia kwenye zana za AI wakati wa mazoezi.",
      "Waache wanafunzi wawasilishe pendekezo lao la ukurasa mmoja kwa dakika mbili kwa mwenzao anayeigiza kama meneja.",
      "Pima pendekezo kwa rubriki, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
