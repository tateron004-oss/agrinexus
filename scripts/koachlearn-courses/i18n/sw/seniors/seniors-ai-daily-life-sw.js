"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-daily-life-sw",
  lang: "sw",
  translationOf: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "AI katika Maisha ya Kila Siku",
  skills: "Kutengeneza orodha ya mahitaji kwa AI, Kupanga milo rahisi, Kuweka vikumbusho kwa sauti, Kuongeza miadi kwenye kalenda, Kuelewa barua inayochanganya",
  outcome: "kutumia msaidizi wa AI na msaidizi wa sauti wa simu yako kupanga milo rahisi ya wiki moja, kuigeuza kuwa orodha ya mahitaji ya dukani, kuweka kikumbusho, na kupata maelezo ya barua inayochanganya kwa maneno rahisi.",
  about: [
    "Kozi hii ni kwa wazee wanaotaka teknolojia iwarahisishie kazi za kila siku kidogo: kununua mahitaji, kupika, kukumbuka miadi na kuelewa barua wanazopokea.",
    "Utatumia msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini, pamoja na msaidizi wa sauti ulio tayari kwenye simu yako (Siri kwenye iPhone, au Google Assistant au Gemini kwenye Android), kupanga milo, kutengeneza orodha, kuweka vikumbusho na kuelewa barua.",
    "Kila somo linachukua kama dakika tano. Nenda polepole, rudia unachohitaji, na ufanye kazi ya \"Jaribu sasa\" kila mara. Jaribio fupi la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Panga chakula cha jioni rahisi mara tatu kwa wiki ijayo ukitumia msaidizi wa AI, uombe orodha moja ya mahitaji kwa milo yote mitatu, weka kikumbusho kwenye simu cha kwenda kununua, na uongeze miadi moja halisi kwenye kalenda ya simu yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee, wengi wanaoishi peke yao au wawili kama mume na mke, wanaoshughulikia milo yao, ununuzi, miadi na barua zao wenyewe, na wanataka kazi za kila siku zichukue juhudi kidogo.",
    startingPoint: "Wana simu janja na wanaweza kupiga simu na kutuma ujumbe mfupi. Wengi hawajawahi kutumia msaidizi wa AI, msaidizi wa sauti wa simu, tahadhari za kalenda au app ya Notes.",
    gap: "Kupanga milo, kukumbuka miadi na kuelewa barua kutoka kampuni za bima au ofisi kunaweza kuchosha na kuleta wasiwasi. Kutumia msaidizi wa AI na zana zilizo ndani ya simu kwa kazi hizi kunapunguza juhudi na kuwasaidia wazee kujitegemea, ilimradi taarifa binafsi hazitolewi na barua muhimu zinathibitishwa na aliyezituma.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu janja yenye msaidizi wa sauti na app ya Calendar; menyu za iPhone na Android zinatofautiana",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa utulivu, na muda wa kufanya mazoezi",
      "Mlo maalum unatoka kwa daktari wa mwanafunzi, si kwa AI",
      "Faragha: hakuna majina, namba za akaunti, za Medicare au za Social Security katika prompts au picha za barua"
    ],
    prerequisites: "Kozi \"AI kwa Wazee: Kutumia Wasaidizi wa AI\" inasaidia kuanza nayo, lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuomba mawazo ya milo rahisi ukisema unampikia nani na watu wangapi, muda wako, unachopenda na unachopaswa kuepuka", standard: "ukipata mawazo matatu yanayofaa mahitaji yako na ushauri wa daktari wako" },
    { id: "O2", condition: "Ukipewa mawazo machache ya milo", action: "kupata orodha moja ya mahitaji iliyopangwa kwa sehemu za duka, bila vitu ulivyonavyo tayari", standard: "iliyohifadhiwa kwenye Notes, iliyochapishwa au iliyoandikwa" },
    { id: "O3", condition: "Ukitumia msaidizi wa sauti wa simu yako", action: "kuweka kikumbusho au kipima muda kwa kuongea, pamoja na siku na saa", standard: "na kuangalia kwenye skrini kwamba kimewekwa" },
    { id: "O4", condition: "Ukipewa miadi halisi", action: "kuiongeza kwenye kalenda ya simu yako pamoja na tahadhari", standard: "ikiwa na jina, tarehe na saa sahihi, na tahadhari kabla yake" },
    { id: "O5", condition: "Ukipewa barua inayochanganya kutoka kampuni ya bima, ya huduma (umeme, maji, gesi) au ofisi", action: "kupata maelezo yake kwa maneno rahisi bila kuweka taarifa yoyote binafsi", standard: "na kuthibitisha unachotakiwa kufanya kwa kupiga namba iliyochapishwa kwenye barua" }
  ],
  chapters: [
    {
      name: "Sura 1: Orodha, milo na ununuzi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga milo rahisi kwa AI",
          minutes: 5,
          goal: "Mwombe msaidizi wa AI mawazo machache ya milo rahisi yanayofaa mahitaji yako.",
          text: [
            "Kuamua cha kupika kila siku kunaweza kuchosha, hasa unapopikia mtu mmoja au wawili. Msaidizi wa AI anaweza kupendekeza mawazo kwa sekunde chache.",
            "Mwambie unachopenda, unapikia watu wangapi, muda na juhudi unazotaka kutumia, na chochote unachopaswa kuepuka. Kwa mfano: \"Ninapika kwa mtu mmoja. Nipendekezee vyakula vitatu rahisi vya jioni vinavyochukua chini ya dakika 30, vyenye viungo vichache, na chumvi kidogo.\"",
            "Kama daktari wako amekupa mlo maalum, fuata ushauri wa daktari wako. Msaidizi anaweza kutoa mawazo, lakini haijui afya yako."
          ],
          steps: ["Fungua msaidizi wako wa AI.", "Sema unapikia watu wangapi.", "Sema una muda gani na unachopenda.", "Sema chochote cha kuepuka, kama chumvi au sukari nyingi.", "Omba mawazo matatu."],
          words: [["Kiungo (ingredient)", "moja ya vyakula vinavyotumika katika mapishi."]],
          slides: [
            { title: "Acha AI ipendekeze milo", bullets: ["Mawazo kwa sekunde chache", "Inafaa unapopikia mtu mmoja au wawili"] },
            { title: "Iambie", bullets: ["Watu wangapi", "Muda gani", "Unachopenda na unachopaswa kuepuka"] },
            { title: "Daktari wako kwanza", bullets: ["Fuata mlo wowote aliokupa daktari wako", "AI haijui afya yako"] }
          ],
          tryIt: "Mwombe msaidizi wa AI vyakula vitatu rahisi vya jioni kwa wiki ijayo vinavyofaa jinsi unavyopenda kula. Andika vile vitatu unavyovipenda zaidi.",
          youCanNow: "kumwomba msaidizi wa AI mawazo ya milo yanayofaa mahitaji yako.",
          quickCheck: [
            { objective: "O1", q: "Nani anaamua mlo wako maalum kama unao?", options: ["Msaidizi wa AI", "Daktari wako", "Duka la vyakula", "Kipindi cha mapishi"], answer: 1, why: "Msaidizi anatoa mawazo lakini haijui afya yako; fuata ushauri wa daktari wako." },
            { objective: "O1", q: "Unapika kwa watu wawili na una nguvu kidogo jioni. Unaongeza nini kwenye ombi lako la milo?", options: ["\"Iwe ya haraka na rahisi, kwa watu wawili.\"", "Hakuna; sema tu \"chakula\"", "Namba yako ya Medicare", "\"Iwe ya kifahari.\""], answer: 0, why: "Kusema watu wangapi, na muda na juhudi unazotaka kutumia, kunaleta mawazo yanayokufaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kugeuza milo kuwa orodha ya mahitaji",
          minutes: 4,
          goal: "Pata orodha moja nadhifu ya mahitaji kwa milo kadhaa.",
          text: [
            "Ukishapata mawazo ya milo, mwombe msaidizi akutengenezee orodha moja ya mahitaji kwa milo yote. Hii inakuepusha kuandika kila mapishi peke yake.",
            "Mwombe aipange orodha kwa sehemu za duka, kama matunda na mboga, maziwa na vyakula vya makopo, ili upite dukani mara moja tu. Kisha mwambie vitu ulivyonavyo tayari nyumbani ili aviondoe.",
            "Unaweza kuchapisha orodha, kuinakili kwenye app ya Notes ya simu yako, au kuiandika tu kwenye karatasi. Tumia njia iliyo rahisi zaidi kwako."
          ],
          steps: ["Uliza: \"Nitengenezee orodha moja ya mahitaji kwa vyakula hivi vitatu vya jioni.\"", "Mwombe aipange orodha kwa sehemu za duka.", "Mwambie vitu ulivyonavyo tayari.", "Nakili orodha kwenye Notes, ichapishe, au iandike."],
          words: [["App ya Notes", "app kwenye simu yako ya kuandika na kuhifadhi maandishi mafupi na orodha."]],
          slides: [
            { title: "Orodha moja kwa milo yote", bullets: ["\"Nitengenezee orodha moja ya mahitaji kwa vyakula hivi vitatu vya jioni.\""] },
            { title: "Rahisisha ununuzi", bullets: ["Panga kwa sehemu za duka", "Ondoa vitu ulivyonavyo tayari"] },
            { title: "Hifadhi orodha yako", bullets: ["Nakili kwenye app ya Notes", "Ichapishe", "Au iandike kwenye karatasi"] }
          ],
          tryIt: "Mwombe msaidizi orodha moja ya mahitaji kwa vyakula vyako vitatu vya jioni, iliyopangwa kwa sehemu za duka. Mwambie vitu viwili ulivyonavyo tayari, na uhifadhi orodha ya mwisho.",
          youCanNow: "kugeuza mawazo ya milo kuwa orodha moja ya mahitaji inayolingana na jikoni yako.",
          quickCheck: [
            { objective: "O2", q: "Kupanga orodha kwa sehemu za duka kunamaanisha nini?", options: ["Kupanga vitu kuanzia cha bei nafuu hadi cha bei ghali", "Kuandika orodha mara mbili", "Kuweka vitu pamoja kulingana na mahali vilipo, kama maziwa au vyakula vya makopo", "Kuorodhesha mlo mmoja tu"], answer: 2, why: "Kupanga kwa sehemu kunakuwezesha kupita dukani mara moja tu." },
            { objective: "O2", q: "Una mchele na mayai nyumbani tayari. Unamwambia msaidizi nini?", options: ["Hakuna kitu", "Aongeze mchele na mayai zaidi", "Atengeneze mpango mpya wa milo", "Kwamba una mchele na mayai tayari, ili aviondoe"], answer: 3, why: "Kumwambia ulichonacho kunaondoa vitu hivyo kwenye orodha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutumia msaidizi wa sauti wa simu kwa vikumbusho",
          minutes: 6,
          goal: "Weka kikumbusho au kipima muda kwa kuongea na simu yako.",
          text: [
            "Simu nyingi zina msaidizi wa sauti ndani yake: Siri kwenye iPhone, na Google Assistant au Gemini kwenye simu nyingi za Android. Unaongea, na simu inafanya kazi rahisi, kama kuweka kikumbusho, kipima muda au kengele.",
            "Ili kuuanzisha, kwa kawaida unaweza kusema \"Hey Siri\" au \"Hey Google\", au kubonyeza na kushikilia kitufe cha pembeni au cha nyumbani (home). Kama haujawekwa, mwombe mwanafamilia akusaidie kuuwasha kwenye Settings.",
            "Kisha ongea waziwazi: \"Nikumbushe kwenda kununua vyakula Alhamisi saa 4 asubuhi (10 am).\" \"Weka kipima muda cha dakika 20.\" \"Nikumbushe kumpigia Ruth kesho saa 11 jioni (5 pm).\" Simu itakuambia au kukuonyesha kwamba kimewekwa."
          ],
          steps: ["Sema \"Hey Siri\" au \"Hey Google\", au bonyeza na ushikilie kitufe cha pembeni au cha nyumbani (home).", "Subiri sauti au mwanga kwenye skrini.", "Sema unachotaka, pamoja na siku na saa.", "Angalia skrini kuona kwamba kimewekwa."],
          words: [["Msaidizi wa sauti", "msaidizi aliye ndani ya simu yako anayefanya kazi rahisi unapoongea naye."], ["Kikumbusho", "ujumbe ambao simu yako inakuonyesha wakati unaouchagua."]],
          slides: [
            { title: "Simu yako inaweza kusikiliza", bullets: ["Siri kwenye iPhone", "Google Assistant au Gemini kwenye Android"] },
            { title: "Uamshe", bullets: ["Sema \"Hey Siri\" au \"Hey Google\"", "Au bonyeza na ushikilie kitufe cha pembeni au cha home"] },
            { title: "Sema unachohitaji", bullets: ["\"Nikumbushe kununua vyakula Alhamisi saa 4 asubuhi (10 am).\"", "\"Weka kipima muda cha dakika 20.\"", "Angalia skrini kuona kwamba kimewekwa"] }
          ],
          tryIt: "Tumia msaidizi wa sauti wa simu yako kuweka kikumbusho cha kwenda kununua vyakula siku na saa inayokufaa. Hakikisha kinaonekana kwenye skrini.",
          youCanNow: "kuweka kikumbusho au kipima muda kwa kuongea na simu yako.",
          quickCheck: [
            { objective: "O3", q: "Msaidizi wa sauti kwenye simu ni nini?", options: ["Mtu anayekupigia simu baadaye", "Msaidizi aliye ndani ya simu unayeongea naye, kama Siri au Google Assistant", "Kifaa cha kusaidia kusikia", "App ya ujumbe mfupi"], answer: 1, why: "Siri na Google Assistant hufanya kazi rahisi, kama vikumbusho na vipima muda, unapoongea." },
            { objective: "O3", q: "Unataka kukumbuka kumpigia dada yako kesho jioni. Unasema nini?", options: ["\"Piga.\"", "\"Dada.\"", "\"Nikumbushe kumpigia dada yangu kesho saa 12 jioni (6 pm).\"", "\"Kesho.\""], answer: 2, why: "Ombi lililo wazi lenye kazi, siku na saa linaweka kikumbusho chenye manufaa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Orodha, milo na ununuzi",
        questions: [
          { objective: "O1", q: "Unapaswa kumwambia msaidizi wa AI nini unapoomba mawazo ya milo?", options: ["Namba yako ya benki", "\"Chakula\" tu", "Watu wangapi, muda wako, unachopenda na unachopaswa kuepuka", "Nywila ya daktari wako"], answer: 2, why: "Maelezo hayo yanamsaidia kupendekeza milo inayokufaa." },
          { objective: "O1", q: "Daktari wako amekupa mlo wa chumvi kidogo, lakini AI inapendekeza chakula chenye chumvi nyingi. Unafanya nini?", options: ["Fuata ushauri wa daktari wako", "Fuata AI", "Acha kula", "Usijali wote wawili"], answer: 0, why: "Daktari wako anaijua afya yako; AI haijui." },
          { objective: "O2", q: "Kwa nini umwombe msaidizi apange orodha yako ya mahitaji kwa sehemu za duka?", options: ["Inafanya chakula kiwe nafuu", "Ni lazima", "Ili ichapishwe kwa rangi", "Ili upite dukani mara moja tu"], answer: 3, why: "Kupanga kwa sehemu kunafanya ununuzi uwe wa haraka." },
          { objective: "O3", q: "Kipi ni msaidizi wa sauti aliye ndani ya simu nyingi?", options: ["Kikokotoo", "Siri", "Kamera", "Tochi"], answer: 1, why: "Siri kwenye iPhone na Google Assistant au Gemini kwenye Android husikiliza maombi ya kuongea." },
          { objective: "O3", q: "Ombi gani la sauti litaweka kikumbusho chenye manufaa?", options: ["\"Ununuzi.\"", "\"Nikumbushe kwenda kununua Alhamisi saa 4 asubuhi (10 am).\"", "\"Habari.\"", "\"Simu.\""], answer: 1, why: "Linasema cha kukumbuka, siku na saa." }
        ]
      }
    },
    {
      name: "Sura 2: Miadi na makaratasi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuongeza miadi kwenye kalenda ya simu yako",
          minutes: 6,
          goal: "Ongeza miadi ya daktari kwenye kalenda ya simu yako pamoja na tahadhari.",
          text: [
            "Simu yako ina app ya Calendar (kalenda) inayoweza kuhifadhi miadi yako yote na kukuonya kabla ya kila mmoja. Hii inasaidia kwa ziara za daktari, kunyoa au kutengeneza nywele, na siku za kuzaliwa za familia.",
            "Njia rahisi zaidi ni kumwomba msaidizi wako wa sauti: \"Ongeza miadi na Dr. Lee tarehe 12 Mei saa 8 mchana (2 pm).\" Unaweza pia kufungua app ya Calendar, kugusa alama ya kujumlisha (+), kuandika jina, kuchagua tarehe na saa, na kugusa Add au Save.",
            "Weka tahadhari ili simu ikukumbushe mapema, kama siku moja kabla na saa moja kabla. Tafuta chaguo linaloitwa Alert au Notification unapoongeza tukio."
          ],
          steps: ["Fungua app ya Calendar, au mwombe msaidizi wako wa sauti.", "Gusa alama ya kujumlisha (+) kuongeza tukio.", "Andika jina, kama \"Uchunguzi kwa Dr. Lee\".", "Chagua tarehe na saa.", "Chagua tahadhari, kama siku 1 kabla.", "Gusa Add au Save."],
          words: [["App ya Calendar", "app kwenye simu yako inayohifadhi miadi yako kwa tarehe."], ["Tahadhari (alert)", "sauti au ujumbe ambao simu inakupa kabla ya miadi."]],
          slides: [
            { title: "Kalenda ya simu yako", bullets: ["Inahifadhi miadi yako yote", "Inakuonya kabla ya kila mmoja"] },
            { title: "Njia mbili za kuongeza", bullets: ["Mwombe msaidizi wako wa sauti", "Au fungua Calendar na uguse +"] },
            { title: "Jaza", bullets: ["Jina, tarehe na saa", "Chagua tahadhari, kama siku 1 kabla", "Gusa Add au Save"] }
          ],
          tryIt: "Ongeza miadi moja halisi au siku ya kuzaliwa ya mwanafamilia kwenye kalenda ya simu yako, pamoja na tahadhari siku moja kabla. Hakikisha inaonekana kwenye tarehe sahihi.",
          youCanNow: "kuongeza miadi kwenye kalenda ya simu yako na kupata kikumbusho kabla yake.",
          quickCheck: [
            { objective: "O4", q: "Tahadhari kwenye miadi ya kalenda inafanya nini?", options: ["Inafanya simu ikukumbushe kabla ya miadi", "Inafuta miadi", "Inampigia daktari simu kwa niaba yako", "Inaishiriki na watu usiowajua"], answer: 0, why: "Tahadhari inakuonya mapema, kama siku moja au saa moja kabla." },
            { objective: "O4", q: "Umepanga uchunguzi wa afya Jumanne ijayo. Hatua ya kwanza ya kuuongeza kwenye app ya Calendar ni ipi?", options: ["Zima simu yako", "Futa miadi ya zamani", "Jiandikie ujumbe mfupi", "Gusa alama ya kujumlisha (+) kuongeza tukio"], answer: 3, why: "Gusa alama ya kujumlisha, kisha andika jina na uchague tarehe, saa na tahadhari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupata maelezo ya barua inayochanganya",
          minutes: 5,
          goal: "Mwombe msaidizi wa AI akueleze barua inayochanganya kwa maneno rahisi, bila kutoa taarifa binafsi.",
          text: [
            "Barua kutoka kampuni za bima, kampuni za huduma (umeme, maji, gesi) au ofisi zinaweza kujaa maneno magumu. Msaidizi wa AI anaweza kuzieleza kwa lugha rahisi.",
            "Kwanza, funika au ondoa taarifa binafsi: majina, namba za akaunti, namba za Medicare au Social Security, na anwani yako. Kisha andika sehemu inayochanganya, au ieleze, na uulize: \"Nieleze hii kwa maneno rahisi. Kuna chochote ninachotakiwa kufanya?\"",
            "Baadhi ya wasaidizi wanakuruhusu kupiga picha ya ukurasa. Ukifanya hivyo, funika taarifa binafsi kabla ya kupiga picha. Kwa jambo lolote kuhusu pesa, mafao au afya, thibitisha unachotakiwa kufanya kwa kupiga namba iliyochapishwa kwenye barua yenyewe, au muulize mwanafamilia unayemwamini."
          ],
          steps: ["Funika au ondoa majina, namba na anwani yako.", "Andika au eleza sehemu inayochanganya tu.", "Uliza: \"Nieleze hii kwa maneno rahisi. Ninatakiwa kufanya nini?\"", "Thibitisha kwa kupiga namba iliyochapishwa kwenye barua."],
          words: [["Lugha rahisi", "maneno rahisi ya kila siku yanayoeleweka kwa urahisi."], ["Namba ya akaunti", "namba ya siri ambayo kampuni inatumia kwa akaunti yako; usiwahi kuipa AI."]],
          slides: [
            { title: "Barua ngumu, maneno rahisi", bullets: ["Bima, huduma (umeme, maji), ofisi", "AI inaweza kuzieleza kwa urahisi"] },
            { title: "Jilinde kwanza", bullets: ["Funika majina na namba za akaunti", "Ondoa namba za Medicare na Social Security", "Ondoa anwani yako"] },
            { title: "Uliza kisha thibitisha", bullets: ["\"Nieleze kwa maneno rahisi. Ninatakiwa kufanya nini?\"", "Piga namba iliyochapishwa kwenye barua kuthibitisha"] }
          ],
          tryIt: "Tafuta barua au bili yenye sentensi usiyoielewa vizuri. Ondoa taarifa zote binafsi, andika sentensi hiyo tu kwa msaidizi, na umwombe akueleze kwa maneno rahisi.",
          youCanNow: "kupata maelezo ya barua inayochanganya kwa maneno rahisi huku taarifa zako binafsi zikiwa salama.",
          quickCheck: [
            { objective: "O5", q: "Lugha rahisi ni nini?", options: ["Maneno rahisi ya kila siku", "Maneno ya kisheria", "Lugha ya kigeni", "Misimbo mifupi sana"], answer: 0, why: "Lugha rahisi ni maneno rahisi ya kila siku yanayoeleweka kwa urahisi." },
            { objective: "O5", q: "Unataka kupiga picha ya barua ya bima kwa ajili ya AI. Unafanya nini kwanza?", options: ["Kuifanya picha kuwa kubwa zaidi", "Kufunika jina lako, anwani na namba za akaunti", "Kuongeza namba yako ya Medicare ili iikague", "Kuituma kwa rafiki"], answer: 1, why: "Funika taarifa binafsi kabla ya kupiga picha." }
          ]
        },
        {
          objectives: ["O1","O2","O3"],
          title: "Kuunganisha yote: wiki yako, kwa urahisi zaidi",
          minutes: 5,
          goal: "Tumia AI na simu yako pamoja kupanga wiki.",
          text: [
            "Sasa una ujuzi kadhaa mdogo: kuomba mawazo ya milo, kutengeneza orodha, kuweka vikumbusho na kuongeza miadi. Ukiutumia pamoja, unaweza kupanga wiki nzima.",
            "Utaratibu rahisi: Jumapili, mwombe msaidizi vyakula vitatu vya jioni na orodha moja ya mahitaji. Weka kikumbusho cha siku yako ya kununua. Angalia kalenda yako kuona miadi ya wiki, na uongeze chochote kipya.",
            "Ifanye iwe rahisi. Tumia zana zinazokusaidia na uache zisizokusaidia. Orodha za karatasi bado zinafanya kazi vizuri, na kumwomba mwanafamilia msaada ni sawa kila wakati."
          ],
          steps: ["Mwombe msaidizi wa AI vyakula vitatu vya jioni.", "Omba orodha moja ya mahitaji.", "Weka kikumbusho cha siku yako ya kununua.", "Angalia kalenda yako na uongeze miadi mipya."],
          words: [["Utaratibu", "mfululizo wa hatua unazofanya kwa njia ileile kila mara."]],
          slides: [
            { title: "Utaratibu rahisi wa Jumapili", bullets: ["Vyakula vitatu vya jioni kutoka AI", "Orodha moja ya mahitaji", "Kikumbusho cha kwenda kununua"] },
            { title: "Angalia wiki yako", bullets: ["Tazama kalenda yako", "Ongeza chochote kipya pamoja na tahadhari"] },
            { title: "Ifanye iwe rahisi", bullets: ["Tumia kinachokusaidia", "Orodha za karatasi bado zinafanya kazi", "Omba msaada kwa familia wakati wowote"] }
          ],
          tryIt: "Kazi ya mwisho: panga vyakula vitatu rahisi vya jioni kwa wiki ijayo ukitumia msaidizi wa AI, omba orodha moja ya mahitaji, weka kikumbusho kwenye simu cha siku yako ya kununua, na uongeze miadi moja halisi kwenye kalenda yako.",
          youCanNow: "kutumia AI na simu yako pamoja kupanga milo, kununua mahitaji na kufuatilia miadi.",
          quickCheck: [
            { objective: "O1", q: "Zana zipi pamoja zinaweza kupanga wiki yako?", options: ["Kalenda ya karatasi tu", "Msaidizi wa AI tu", "Mawazo ya milo, orodha ya mahitaji, vikumbusho na kalenda yako", "Hakuna; ni vigumu mno"], answer: 2, why: "Ujuzi mdogo wa kozi hii unafanya kazi pamoja kupanga wiki nzima." },
            { objective: "O1", q: "Ni Jumapili. Hatua ya kwanza rahisi ya kupanga wiki yako ni ipi?", options: ["Kununua kila kitu dukani", "Kuzima vikumbusho vyote", "Kusoma barua za zamani", "Kumwomba msaidizi vyakula vitatu vya jioni na orodha moja ya mahitaji"], answer: 3, why: "Utaratibu unaanza na vyakula vitatu vya jioni na orodha moja, kisha kikumbusho na kuangalia kalenda." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Miadi na makaratasi",
        questions: [
          { objective: "O4", q: "Kwenye app ya Calendar, unagusa nini kuongeza miadi?", options: ["Kitufe cha sauti", "Kamera", "Alama ya betri", "Alama ya kujumlisha (+)"], answer: 3, why: "Alama ya kujumlisha inaongeza tukio jipya." },
          { objective: "O4", q: "Kwa nini uweke tahadhari kwenye miadi?", options: ["Ili simu ikukumbushe kabla yake", "Ili igharimu kidogo", "Ili daktari akupigie simu", "Inafuta tukio"], answer: 0, why: "Tahadhari inakuonya mapema." },
          { objective: "O5", q: "Kabla ya kuiuliza AI kuhusu barua, unapaswa:", options: ["Kuandika namba yako ya akaunti", "Kutuma barua nzima yenye jina lako", "Kufunika au kuondoa taarifa binafsi", "Kutoa namba yako ya Medicare"], answer: 2, why: "Taarifa binafsi hazipaswi kamwe kuingia kwa msaidizi wa AI." },
          { objective: "O5", q: "AI inaeleza barua kuhusu mafao yako. Unathibitishaje unachotakiwa kufanya?", options: ["Kuiamini AI kabisa", "Kutofanya chochote", "Kumuuliza mtu usiyemjua mtandaoni", "Kupiga namba iliyochapishwa kwenye barua"], answer: 3, why: "Ofisi iliyotuma barua ndiyo chanzo rasmi." },
          { objective: "O2", q: "Utaratibu mzuri wa Jumapili kutoka kozi hii ni upi?", options: ["Kufuta kalenda yako", "Kushiriki nywila zako", "Kupanga vyakula vya jioni, kutengeneza orodha, kuweka kikumbusho cha kununua, kuangalia kalenda yako", "Kununua simu mpya"], answer: 2, why: "Unaunganisha ujuzi wa kila somo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Maisha ya Kila Siku",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI anaweza kusaidia na milo kwa:", options: ["Kuipika", "Kupendekeza mawazo rahisi yanayokufaa", "Kukununulia vyakula", "Kuujua mlo wako kutoka kwa daktari wako"], answer: 1, why: "Anapendekeza mawazo unapomwambia unachohitaji." },
      { objective: "O1", q: "Ombi gani la milo liko wazi zaidi?", options: ["\"Ninapika kwa mtu mmoja. Nipendekezee vyakula vitatu rahisi vya jioni vyenye chumvi kidogo, chini ya dakika 30.\"", "\"chakula\"", "\"cha jioni?\"", "\"kula\""], answer: 0, why: "Linataja watu, muda, na cha kuepuka." },
      { objective: "O1", q: "Mlo wa daktari wako na wazo la AI vikitofautiana, fuata:", options: ["Daktari wako", "AI", "Kilicho rahisi zaidi", "Hakuna kati yao"], answer: 0, why: "Daktari wako anaijua afya yako." },
      { objective: "O2", q: "Kiungo (ingredient) ni:", options: ["Chombo cha jikoni", "Moja ya vyakula katika mapishi", "Duka", "App"], answer: 1, why: "Viungo ni vyakula vinavyotumika katika mapishi." },
      { objective: "O2", q: "Kupata orodha moja kwa milo mitatu, unauliza:", options: ["\"Nywila yangu ni ipi?\"", "\"Futa milo.\"", "\"Nitengenezee orodha moja ya mahitaji kwa vyakula hivi vitatu vya jioni.\"", "\"Lipigie duka simu.\""], answer: 2, why: "Msaidizi anaunganisha viungo vyote katika orodha moja." },
      { objective: "O2", q: "Kumwambia msaidizi ulichonacho nyumbani tayari kunamsaidia:", options: ["Kuchapisha kwa rangi", "Kukutoza kidogo", "Kuipigia familia yako simu", "Kuondoa vitu hivyo kwenye orodha"], answer: 3, why: "Anaondoa vitu ambavyo huhitaji kununua." },
      { objective: "O2", q: "App ya Notes inatumika kwa:", options: ["Kupiga picha", "Kupiga simu", "Kuandika na kuhifadhi maandishi mafupi na orodha", "Kucheza muziki"], answer: 2, why: "Notes inahifadhi orodha kwenye simu yako." },
      { objective: "O3", q: "Siri na Google Assistant ni:", options: ["Wasaidizi wa sauti walio ndani ya simu", "Maduka ya vyakula", "Madaktari", "Anwani za barua pepe"], answer: 0, why: "Wanafanya kazi rahisi unapoongea." },
      { objective: "O3", q: "Njia moja ya kumwamsha msaidizi wa sauti ni:", options: ["Kutikisa simu", "Kufungua kamera", "Kuzima simu", "Kusema \"Hey Siri\" au \"Hey Google\""], answer: 3, why: "Neno la kuamsha au kushikilia kitufe cha pembeni au cha home kunauanzisha." },
      { objective: "O3", q: "Ombi gani la kuongea linaweka kipima muda?", options: ["\"Kipima muda.\"", "\"Weka kipima muda cha dakika 20.\"", "\"Habari simu.\"", "\"Kupika.\""], answer: 1, why: "Linasema cha kufanya na kwa muda gani." },
      { objective: "O3", q: "Baada ya kuweka kikumbusho kwa sauti, unapaswa:", options: ["Kuzima simu", "Kuangalia skrini kuona kwamba kimewekwa", "Kufuta app", "Hakuna kitu"], answer: 1, why: "Kuangalia kunathibitisha kwamba kimewekwa sawasawa." },
      { objective: "O4", q: "App ya Calendar inakusaidia:", options: ["Kucheza michezo", "Kupiga picha", "Kutuma pesa", "Kuhifadhi miadi na kupata vikumbusho"], answer: 3, why: "Inahifadhi matukio kwa tarehe na inaweza kukupa tahadhari." },
      { objective: "O4", q: "Unapoongeza miadi, unajaza nini?", options: ["Jina, tarehe na saa", "Namba yako ya benki", "Nywila yako", "Namba yako ya Medicare"], answer: 0, why: "Jina, tarehe na saa ndivyo kalenda inavyohitaji." },
      { objective: "O4", q: "Tahadhari siku moja kabla ya miadi inamaanisha:", options: ["Miadi imefutwa", "Daktari atakupigia simu", "Simu yako inakukumbusha siku moja kabla", "Miadi inahamishwa"], answer: 2, why: "Tahadhari zinakuonya mapema." },
      { objective: "O4", q: "Unaweza pia kuongeza miadi kwa:", options: ["Kufungua kamera", "Kutuma barua kwa posta", "Kuzima simu", "Kumwomba msaidizi wako wa sauti"], answer: 3, why: "Wasaidizi wa sauti wanaweza kuongeza matukio kwenye kalenda." },
      { objective: "O5", q: "Kabla ya kuandika sehemu ya barua kwa AI, ondoa:", options: ["Maneno magumu", "Tarehe", "Majina, namba za akaunti na anwani yako", "Hakuna kitu"], answer: 2, why: "Taarifa binafsi haziingii kamwe kwenye AI." },
      { objective: "O5", q: "Ukipiga picha ya barua kwa ajili ya AI, kwanza unapaswa:", options: ["Kuwasha flash", "Kufunika taarifa binafsi", "Kuongeza nywila yako", "Kuandika namba yako ya Social Security juu yake"], answer: 1, why: "Kufunika taarifa kunalinda faragha yako." },
      { objective: "O5", q: "\"Lugha rahisi\" inamaanisha:", options: ["Maneno rahisi ya kila siku", "Lugha ya kigeni", "Maneno ya kisheria", "Msimbo wa kompyuta"], answer: 0, why: "Lugha rahisi inaeleweka kwa urahisi." },
      { objective: "O5", q: "Kuthibitisha barua ya mafao inakutaka ufanye nini, wewe:", options: ["Unapiga namba iliyochapishwa kwenye barua", "Unaiamini AI", "Unaiweka mtandaoni", "Unaipuuza"], answer: 0, why: "Aliyetuma barua ndiye chanzo rasmi." },
      { objective: "O2", q: "Kama zana haikusaidii, kozi inapendekeza:", options: ["Ununue simu mpya zaidi", "Uiache na utumie kinachofanya kazi, hata karatasi", "Uache kupanga", "Ushiriki nywila yako"], answer: 1, why: "Ifanye iwe rahisi na utumie kinachokusaidia." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      2,
      4,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mawazo ya milo yanayofaa",
        objective: "O1",
        notYet: "Ombi si wazi au milo haifai mahitaji yako.",
        meets: "Vyakula vitatu vya jioni vinavyolingana na idadi ya watu, muda wako, unachopenda na unachopaswa kuepuka.",
        exceeds: "Milo pia inafuata mlo wowote aliokupa daktari wako."
      },
      {
        name: "Orodha moja ya mahitaji",
        objective: "O2",
        notYet: "Hakuna orodha, au orodha tofauti kwa kila mlo.",
        meets: "Orodha moja kwa vyakula vyote vitatu vya jioni, iliyohifadhiwa kwenye Notes, iliyochapishwa au iliyoandikwa.",
        exceeds: "Imepangwa kwa sehemu za duka, na vitu ulivyonavyo tayari vimeondolewa."
      },
      {
        name: "Kikumbusho cha kununua",
        objective: "O3",
        notYet: "Hakuna kikumbusho, au hakina siku wala saa.",
        meets: "Kikumbusho kimewekwa pamoja na siku na saa, na kimeangaliwa kwenye skrini.",
        exceeds: "Kimewekwa kwa kuongea na msaidizi wa sauti."
      },
      {
        name: "Miadi kwenye kalenda",
        objective: "O4",
        notYet: "Hakuna miadi, au tarehe au saa si sahihi.",
        meets: "Miadi moja halisi yenye jina, tarehe na saa sahihi.",
        exceeds: "Ina tahadhari, kama siku moja kabla."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaoripoti kutumia vikumbusho au tahadhari za kalenda kwa miadi ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kukosa miadi michache au wasiwasi mdogo kuhusu milo na ununuzi",
      "Wanafunzi wanaoanza kozi nyingine ya Seniors and Technology ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye msaidizi wa sauti (Siri, Google Assistant au Gemini) na app ya Calendar",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Barua ya mfano isiyo na taarifa binafsi halisi, kwa mazoezi ya barua",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya utulivu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wasaidie wanafunzi kuwasha msaidizi wao wa sauti kwenye Settings kabla ya Somo la 3; mara nyingi umezimwa.",
      "Panga wanafunzi kwa aina ya simu (iPhone au Android) ili hatua za kwenye skrini zilingane.",
      "Tumia barua ya mfano kwa mazoezi; usiwahi kuwaomba wanafunzi watoe namba halisi za akaunti au za Medicare.",
      "Wakumbushe wanafunzi kwamba mlo maalum unatoka kwa daktari wao, na maswali ya mafao yanaenda kwenye namba iliyo kwenye barua.",
      "Pima kazi ya mwisho kwa rubric, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
