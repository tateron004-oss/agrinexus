"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-team-sports.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-team-sports-sw",
  lang: "sw",
  translationOf: "athletes-ai-team-sports",
  category: "Athletes",
  name: "AI kwa Michezo ya Timu",
  skills: "Kufuatilia takwimu rahisi za timu, Kutafuta mifumo ya vikosi na michezo, Kuandika muhtasari wa upelelezi wa mpinzani kwa AI, Kupanga mawasiliano ya timu, Kulinda faragha ya wachezaji na haki",
  outcome: "kutumia jedwali la pamoja na msaidizi wa AI kufuatilia takwimu rahisi za timu, kupata mfumo mmoja wa kikosi au wa mchezo, kuandika muhtasari wa ukurasa mmoja wa upelelezi wa mpinzani, na kuushiriki na timu kwa njia inayolinda faragha ya wachezaji.",
  about: [
    "Kozi hii ni kwa makocha, mameneja wa timu, manahodha na wachambuzi wa timu katika mchezo wowote wa timu: mpira wa kikapu, mpira wa miguu (soka), voliboli, mpira wa Kimarekani, hoki, besiboli, softboli na mingine.",
    "Timu za kulipwa zina idara za uchambuzi wa takwimu. Wewe unaweza kufanya toleo rahisi kwa jedwali na msaidizi wa AI wa bure: fuatilia kinachojalisha, ona mifumo, peleleza wapinzani, na wasiliana kwa uwazi na wachezaji na familia zao.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Takwimu zinasaidia uamuzi wa kocha; hazichukui nafasi yake kamwe."
  ],
  finalTask: "Kwa timu yako, andaa jedwali la pamoja la takwimu kwa mechi au mazoezi matatu, tafuta mfumo mmoja wa kikosi au wa mchezo kwa msaada wa AI, andika muhtasari wa ukurasa mmoja wa upelelezi wa mpinzani halisi ukitumia video za mechi au matokeo yaliyo wazi kwa umma, na andika ujumbe wa timu unaoshiriki jambo kuu bila kufichua taarifa za faragha za mchezaji yeyote.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Makocha, mameneja wa timu, manahodha na wachambuzi wa timu katika mchezo wowote wa timu, kama mpira wa kikapu, soka, voliboli, mpira wa Kimarekani, hoki, besiboli na softboli.",
    startingPoint: "Wanaujua mchezo wao na timu yao vizuri na wanatumia simu janja, na labda jedwali. Wengi wanafuatilia takwimu chache au bila mpangilio, wanapeleleza kwa kumbukumbu, na hawajaweka sheria za kushiriki taarifa za wachezaji au kuzitumia na AI.",
    gap: "Bila takwimu na upelelezi wa kudumu, timu zinakosa mifumo ambayo ingeweza kubadilisha mazoezi na mipango ya mechi, na kushiriki ovyo kunaweza kufichua taarifa za faragha za wachezaji. Jedwali rahisi la pamoja, matumizi makini ya AI na sheria wazi za faragha husaidia timu kuboreka huku zikiwalinda wachezaji.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 8",
      "Simu au kompyuta yenye Google Sheets ya bure na msaidizi wa AI wa bure",
      "Kama dakika 60 za masomo pamoja na takwimu za mechi au mazoezi matatu",
      "Sheria za shule, ligi na klabu kuhusu taarifa za wanafunzi, apps zilizoidhinishwa, kubadilishana video na kuwasiliana na watoto",
      "Hakuna majina kamili, taarifa za afya, za masomo au za mawasiliano katika majedwali ya takwimu au zana za AI"
    ],
    prerequisites: "Hakuna. Kozi ya \"Uchambuzi wa Video na Akili ya Mchezo\" inasaidia kuweka alama kwenye video."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa utambulisho wa timu yako", action: "kuchagua takwimu tatu hadi tano za timu na kuandika maana iliyo wazi ya kila moja", standard: "kila takwimu ikiweza kukusanywa kila mechi na mtu mmoja akipewa jukumu la kuikusanya" },
    { id: "O2", condition: "Ukitumia Google Sheets", action: "kuandaa jedwali la pamoja la takwimu za timu lenye kichupo cha muhtasari na ruhusa salama", standard: "ruhusa ya kuhariri ikiwa kwa wafanyakazi wanaokusanya tu, wengine wakiweza kuona tu, lisiwe wazi kwa umma kamwe, na bila taarifa za matibabu, alama za masomo au mawasiliano" },
    { id: "O3", condition: "Ukipewa takwimu za angalau mechi au mazoezi matatu", action: "kutambua mfumo mmoja wa kikosi au wa mchezo kwa kupanga, kuchuja au kwa msaidizi wa AI", standard: "ukitumia namba za wachezaji au herufi za kwanza za majina tu, hesabu za AI zikikaguliwa, na sampuli ndogo zikichukuliwa kama maswali" },
    { id: "O4", condition: "Ukipewa matokeo yaliyo wazi kwa umma na video zinazoruhusiwa za mpinzani halisi", action: "kuandika muhtasari wa ukurasa mmoja wa upelelezi kuhusu mashambulizi yao, ulinzi wao, wachezaji wao muhimu na funguo tatu za kuwashinda", standard: "kila jambo likitoka katika maelezo yako mwenyewe na sheria za ligi za upelelezi zikifuatwa" },
    { id: "O5", condition: "Ukipewa takwimu zako na muhtasari wa upelelezi", action: "kuandika ujumbe mfupi wa timu wenye mambo makuu moja hadi matatu", standard: "ukitumwa kupitia njia ya timu iliyoidhinishwa, na maoni ya mchezaji mmoja mmoja yakibaki ya faragha" },
    { id: "O6", condition: "Kwa taarifa za timu yako", action: "kuandika sheria za taarifa za timu zinazolinda faragha ya wachezaji na kuweka maamuzi ya haki", standard: "zikihusu nini cha kukusanya, wapi pa kukihifadhi, nini kisiingie kwenye AI kamwe, nani anaidhinisha apps, na jinsi maamuzi yanavyoelezwa kwa wachezaji" }
  ],
  chapters: [
    {
      name: "Sura 1: Takwimu za timu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchagua takwimu za timu zinazojalisha",
          minutes: 5,
          goal: "Chagua takwimu tatu hadi tano za timu zinazoendana na jinsi timu yako inavyotaka kucheza.",
          text: [
            "Uchambuzi wa timu unaanza na utambulisho wa timu yako. Timu ya mpira wa kikapu inayoshambulia kwa kasi inajali pointi za mashambulizi ya kushtukiza na mipira inayopotea. Timu ya soka inayomiliki mpira inajali pasi zilizokamilika na mashuti kutoka ndani ya eneo la hatari. Timu ya voliboli inajali upokeaji wa serve na asilimia ya kushinda serve ya mpinzani (side-out).",
            "Chagua takwimu tatu hadi tano unazoweza kweli kukusanya kila mechi kwa watu ulio nao: meneja, mzazi wa kujitolea, mchezaji aliyeumia, au video baada ya mechi.",
            "Andika maana iliyo wazi ya kila takwimu ili kila mtu aihesabu kwa njia ileile: \"Mpira uliopotea ni umiliki wowote uliopotea bila kupiga shuti.\""
          ],
          steps: ["Andika utambulisho wa timu yako kwa sentensi moja.", "Orodhesha takwimu zinazoendana nao.", "Chagua tatu hadi tano unazoweza kukusanya kila mechi.", "Andika maana iliyo wazi ya kila moja.", "Mpe mtu jukumu la kuzikusanya."],
          words: [["Uchambuzi wa timu", "kutumia namba kuhusu timu ili kuelewa na kuboresha jinsi inavyocheza."], ["Maana (ufafanuzi)", "kanuni iliyo wazi ya kile hasa kinachohesabiwa."]],
          slides: [
            { title: "Anza na utambulisho", bullets: ["Shambulizi la kasi? Kumiliki mpira? Ulinzi kwanza?", "Takwimu zinazoendana na jinsi mnavyocheza"] },
            { title: "Chagua takwimu 3-5", bullets: ["Unazoweza kukusanya kila mechi", "Kwa watu ulio nao"] },
            { title: "Eleza maana ya kila moja", bullets: ["Kila mtu anahesabu kwa njia ileile", "Mpe mtu jukumu la kukusanya"] }
          ],
          tryIt: "Andika utambulisho wa timu yako kwa sentensi moja. Muombe msaidizi wa AI apendekeze takwimu zinazoendana nao, kisha chagua tatu hadi tano na uandike maana zake.",
          youCanNow: "kuchagua na kueleza maana ya takwimu za timu zinazoendana na jinsi timu yako inavyocheza.",
          quickCheck: [
            { objective: "O1", q: "Takwimu zipi zinafaa timu ya soka inayomiliki mpira?", options: ["Pasi zilizokamilika na mashuti kutoka ndani ya eneo la hatari", "Mipira ya adhabu (free throws)", "Upokeaji wa serve", "Home runs"], answer: 0, why: "Takwimu ziendane na jinsi timu yako inavyotaka kucheza." },
            { objective: "O1", q: "Wajitolea wawili wanahesabu mipira inayopotea kwa njia tofauti. Unafanya nini?", options: ["Kuchukua wastani wa namba zao", "Kuacha kufuatilia mipira inayopotea", "Kumwacha kila mmoja ahesabu kwa njia yake", "Kuandika maana moja iliyo wazi ambayo kila mtu anaitumia"], answer: 3, why: "Maana iliyo wazi inafanya kila mtu ahesabu kwa njia ileile." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Jedwali la pamoja la takwimu za timu",
          minutes: 5,
          goal: "Andaa Google Sheet ya pamoja ya takwimu za timu yenye ruhusa salama.",
          text: [
            "Tumia Google Sheet moja yenye kichupo kwa kila mechi, au jedwali moja refu lenye safu: Tarehe, Mpinzani, Robo au Seti, Kikosi, na takwimu zako. Kichupo cha muhtasari kinaweza kujumlisha msimu mzima.",
            "Lishiriki tu na wafanyakazi wa ukocha na mameneja wanaohitaji kuhariri. Tumia viungo vya kuona tu kwa wengine, na kamwe usiweke wazi kwa umma kwenye mtandao jedwali lenye taarifa za wachezaji.",
            "Weka takwimu za mechi tu katika jedwali hili. Usiweke maelezo ya matibabu, alama za masomo, taarifa za familia au namba za mawasiliano katika jedwali la takwimu za timu; hizo ni za mifumo rasmi ya shule yako yenye ulinzi sahihi wa faragha."
          ],
          steps: ["Unda Google Sheet yenye safu zilizo wazi.", "Ongeza kichupo cha muhtasari kwa jumla za msimu.", "Toa ruhusa ya kuhariri kwa wafanyakazi wanaokusanya tu.", "Wengine waone tu; kamwe lisiwe wazi kwa umma.", "Usiweke taarifa za matibabu, alama za masomo na mawasiliano."],
          words: [["Jedwali la pamoja", "jedwali (spreadsheet) ambalo watu kadhaa wanaweza kufungua, huku wewe ukidhibiti ruhusa."], ["Kuona tu (view-only)", "watu wanaweza kuona lakini hawawezi kubadilisha."]],
          slides: [
            { title: "Mpangilio wa jedwali", bullets: ["Tarehe, Mpinzani, Kipindi, Kikosi", "Takwimu zako 3-5", "Kichupo cha muhtasari wa msimu"] },
            { title: "Ruhusa", bullets: ["Kuhariri: wafanyakazi wanaokusanya", "Wengine: kuona tu", "Kamwe si wazi kwa umma"] },
            { title: "Usiweke", bullets: ["Maelezo ya matibabu", "Alama za masomo na taarifa za familia", "Namba za mawasiliano"] }
          ],
          tryIt: "Unda jedwali la takwimu za timu yako, ingiza mechi moja iliyopita kwa kumbukumbu au kutoka kwenye box score, na ukague mipangilio ya kushiriki.",
          youCanNow: "kuandaa jedwali la pamoja la takwimu za timu lenye ruhusa salama.",
          quickCheck: [
            { objective: "O2", q: "Kichupo cha muhtasari katika jedwali la timu kinafanya nini?", options: ["Kinahifadhi namba za simu za wachezaji", "Kinajumlisha msimu mzima", "Kinaficha takwimu", "Kinatuma ujumbe kwa wachezaji"], answer: 1, why: "Kichupo cha muhtasari kinaweza kujumlisha msimu kutoka kila mechi." },
            { objective: "O2", q: "Mzazi anaomba kiungo cha jedwali la takwimu za timu. Unashiriki nini?", options: ["Ruhusa ya kuhariri", "Kiungo kilicho wazi kwa umma mtandaoni", "Kiungo cha kuona tu, kama sheria zako zinaruhusu", "Folda nzima yenye maelezo ya matibabu"], answer: 2, why: "Watu wasiokusanya waone tu, na kamwe lisiwe wazi kwa umma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutafuta mifumo ya vikosi na michezo",
          minutes: 6,
          goal: "Tumia jedwali lako na msaidizi wa AI kuona mfumo mmoja wa kikosi au wa mchezo.",
          text: [
            "Baada ya mechi chache, tafuta mifumo: Vikosi vipi vinawazidi wapinzani kwa pointi? Tunapata shida katika robo au seti ipi? Aina ipi ya mchezo inaleta pointi nyingi zaidi?",
            "Tumia kupanga, vichujio au pivot table katika Google Sheets. Au nakili jedwali (ukitumia herufi za kwanza au namba za wachezaji badala ya majina kamili) kwenye msaidizi wa AI na uulize: \"Vikosi vipi vina tofauti bora ya pointi? Kipindi kipi ni dhaifu zaidi? Onyesha hesabu zako.\" Kagua hesabu zake dhidi ya jedwali.",
            "Sampuli ndogo zinapotosha. Kikosi kilichocheza dakika nne hakijathibitishwa. Chukulia mifumo kama maswali ya mazoezi na video, si majibu ya mwisho, na kocha ndiye anaamua."
          ],
          steps: ["Panga au chuja kwa kikosi na kipindi.", "Tumia namba au herufi za kwanza za wachezaji, si majina kamili, na AI.", "Iombe AI itafute mifumo na ionyeshe hesabu zake.", "Kagua hesabu zake.", "Geuza mfumo mmoja kuwa swali la mazoezi au video."],
          words: [["Tofauti ya pointi", "pointi zilizofungwa ukiondoa pointi zilizoruhusiwa."], ["Pivot table", "zana ya jedwali inayopanga makundi na kujumlisha takwimu, kama pointi kwa kila kikosi."], ["Ukubwa wa sampuli", "kiasi cha takwimu ulicho nacho; sampuli ndogo zinaweza kupotosha."]],
          slides: [
            { title: "Maswali ya mifumo", bullets: ["Vikosi vipi vinawazidi wapinzani?", "Kipindi kipi ni dhaifu zaidi?", "Aina ipi ya mchezo inafunga zaidi?"] },
            { title: "Zipate", bullets: ["Panga, chuja au tumia pivot table", "AI kwa herufi za kwanza, si majina kamili", "\"Onyesha hesabu zako\" kisha zikague"] },
            { title: "Kuwa makini", bullets: ["Sampuli ndogo zinapotosha", "Mifumo ni maswali", "Kocha ndiye anaamua"] }
          ],
          tryIt: "Ingiza angalau mechi mbili katika jedwali lako. Muombe msaidizi wa AI atafute kipindi au kikosi bora na kibaya zaidi na aonyeshe hesabu zake. Zikague na uandike swali moja la mazoezi.",
          youCanNow: "kutafuta mifumo ya vikosi na michezo na kuichukulia kama maswali kwa kocha.",
          quickCheck: [
            { objective: "O3", q: "Pamoja na kutafuta mifumo ya vikosi, unapaswa kuiomba AI ifanye nini?", options: ["Ionyeshe hesabu zake", "Ichague wachezaji wa kuanza", "Iwapange wachezaji hadharani", "Ibahatishe mechi zinazokosekana"], answer: 0, why: "Iombe AI ionyeshe hesabu zake ili uzikague dhidi ya jedwali." },
            { objective: "O3", q: "Kipindi chenu cha tatu ni dhaifu katika kila mechi hadi sasa. Unafanya nini na mfumo huu?", options: ["Kuiweka benchi timu nzima", "Kuuchapisha mtandaoni", "Kuupuuza", "Kuupeleka kwenye mazoezi na video kama swali kwa kocha"], answer: 3, why: "Chukulia mifumo kama maswali ya mazoezi na video; kocha ndiye anaamua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Takwimu za timu",
        questions: [
          { objective: "O1", q: "Uchambuzi wa timu unapaswa kuanzia wapi?", options: ["Chochote timu za kulipwa zinafuatilia", "Kila takwimu inayowezekana", "Utambulisho wa timu yako na jinsi mnavyotaka kucheza", "Namba za mitandao ya kijamii"], answer: 2, why: "Takwimu ziendane na mtindo wenu wa kucheza." },
          { objective: "O1", q: "Kwa nini uandike maana ya kila takwimu?", options: ["Ili kila mtu aihesabu kwa njia ileile", "Ili iwe ndefu zaidi", "Ili kuwachanganya wapinzani", "Haihitajiki"], answer: 0, why: "Kuhesabu kwa njia moja kunafanya takwimu ziaminike." },
          { objective: "O2", q: "Nani anapaswa kuwa na ruhusa ya kuhariri jedwali la takwimu za timu?", options: ["Kila mtu mtandaoni", "Makocha wa wapinzani", "Mashabiki", "Wafanyakazi wanaokusanya takwimu"], answer: 3, why: "Ruhusa ya kuhariri iwe kwa wanaoihitaji tu." },
          { objective: "O2", q: "Kipi KISIWEKWE katika jedwali la takwimu za timu?", options: ["Pointi kwa kila robo", "Maelezo ya matibabu ya mchezaji", "Mipira inayopotea", "Vikosi"], answer: 1, why: "Taarifa za matibabu ni za mifumo rasmi iliyolindwa." },
          { objective: "O3", q: "Kikosi kilicheza dakika nne na kilikuwa +6. Unapaswa:", options: ["Kukianzisha kila mechi", "Kukichukulia kama swali la kuchunguza zaidi", "Kupuuza takwimu zote", "Kukichapisha mtandaoni"], answer: 1, why: "Sampuli ndogo zinaweza kupotosha." }
        ]
      }
    },
    {
      name: "Sura 2: Upelelezi na mawasiliano",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kumpeleleza mpinzani kwa AI",
          minutes: 6,
          goal: "Andika muhtasari wa ukurasa mmoja wa upelelezi wa mpinzani kutoka kwa taarifa zilizo wazi kwa umma.",
          text: [
            "Upelelezi (scouting) ni kujifunza jinsi mpinzani anavyocheza kabla ya kukutana naye. Tumia vyanzo vilivyo wazi kwa umma: matokeo yaliyopita, box scores zilizochapishwa, kurasa za takwimu za ligi, na video za mechi ambazo timu yako inazo au zilizowekwa wazi kwa umma. Fuata sheria za ligi yako kuhusu kubadilishana video na upelelezi.",
            "Tazama ukiwa na maswali matatu: Wanafanya nini mara nyingi wakishambulia? Wanafanya nini mara nyingi wakilinda? Wachezaji wao muhimu ni nani, na wanapenda kufanya nini?",
            "Bandika maelezo yako kwenye msaidizi wa AI na uulize: \"Geuza maelezo haya ya upelelezi kuwa muhtasari wa ukurasa mmoja: mashambulizi yao, ulinzi, wachezaji muhimu, funguo tatu za kuwashinda. Vitone vifupi.\" Hakikisha kila jambo limetoka katika maelezo yako, si kubahatisha kwa AI."
          ],
          steps: ["Kusanya matokeo, takwimu na video zinazoruhusiwa zilizo wazi kwa umma.", "Tazama ukiwa na maswali matatu.", "Andika maelezo yenye muda kamili wa video.", "Iombe AI muhtasari wa ukurasa mmoja kutoka kwa maelezo yako tu.", "Kagua kila kitone dhidi ya maelezo yako."],
          words: [["Ripoti ya upelelezi", "muhtasari wa jinsi mpinzani anavyocheza na jinsi ya kumshinda."], ["Mwelekeo (tendency)", "kitu ambacho timu au mchezaji hufanya mara nyingi katika hali fulani."]],
          slides: [
            { title: "Vyanzo vilivyo wazi kwa umma", bullets: ["Matokeo na box scores", "Kurasa za takwimu za ligi", "Video za mechi zinazoruhusiwa"] },
            { title: "Maswali matatu", bullets: ["Mashambulizi yao", "Ulinzi wao", "Wachezaji muhimu na wanachopenda kufanya"] },
            { title: "Muhtasari wa AI", bullets: ["Kutoka kwa maelezo yako tu", "Funguo tatu za kuwashinda", "Kagua kila kitone"] }
          ],
          tryIt: "Chagua mpinzani halisi mtakayekutana naye. Kusanya taarifa zilizo wazi kwa umma, andika maelezo kwa maswali matatu, na tumia AI kutengeneza muhtasari wa ukurasa mmoja. Kagua kila kitone.",
          youCanNow: "kuandika muhtasari wa ukurasa mmoja wa upelelezi wa mpinzani kutoka vyanzo vilivyo wazi kwa umma kwa msaada wa AI.",
          quickCheck: [
            { objective: "O4", q: "Lipi ni mojawapo ya maswali matatu ya upelelezi?", options: ["Nembo ya timu yao (mascot) ni nini?", "Wanafanya nini mara nyingi wakishambulia?", "Wana mashabiki wangapi?", "Jezi zao ni rangi gani?"], answer: 1, why: "Tazama mashambulizi, ulinzi na wachezaji muhimu." },
            { objective: "O4", q: "Unataka video ya mpinzani ambayo haiko wazi kwa umma. Unafanya nini?", options: ["Kurekodi mazoezi yao kwa siri", "Kumwomba rafiki aliye katika timu yao akutumie", "Kufuata sheria za ligi yako za kubadilishana video", "Kutumia AI kubahatisha wanachofanya"], answer: 2, why: "Fuata sheria za ligi yako kuhusu kubadilishana video na upelelezi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mawasiliano ya timu yaliyo wazi",
          minutes: 5,
          goal: "Geuza takwimu na upelelezi kuwa ujumbe mfupi na wazi kwa timu.",
          text: [
            "Wachezaji hawahitaji kila namba. Wanahitaji mambo moja hadi matatu yaliyo wazi: \"Wanabana kila baada ya kufunga. Rusheni mpira katikati.\" Ujumbe mfupi unakumbukwa.",
            "Tumia AI kugeuza muhtasari wako kuwa matoleo tofauti: mazungumzo ya sekunde 30 chumbani mwa kubadilishia nguo, picha ya slaidi moja kwa kikao cha video, na ujumbe mfupi kwa app rasmi ya mawasiliano ya timu. Fuata sheria za shule yako kuhusu jinsi makocha wanavyowasiliana na wachezaji, hasa watoto.",
            "Sifu hadharani, rekebisha faraghani. Ujumbe wa timu unazungumzia timu, si makosa ya mchezaji mmoja."
          ],
          steps: ["Chagua mambo makuu moja hadi matatu.", "Iombe AI mazungumzo ya sekunde 30, slaidi moja na ujumbe mfupi.", "Tuma kupitia njia rasmi ya timu yako.", "Maoni ya mchezaji mmoja mmoja yabaki ya faragha."],
          words: [["Jambo kuu", "kitu kimoja ambacho wachezaji lazima wakumbuke."], ["Njia rasmi", "njia ya mawasiliano ambayo shule au klabu yako imeidhinisha kwa ujumbe wa timu."]],
          slides: [
            { title: "Kidogo ni bora", bullets: ["Mambo moja hadi matatu", "Ujumbe mfupi unakumbukwa"] },
            { title: "Matoleo matatu kwa AI", bullets: ["Mazungumzo ya sekunde 30 chumbani mwa kubadilishia nguo", "Picha ya slaidi moja", "Ujumbe mfupi wa timu"] },
            { title: "Heshima", bullets: ["Tumia njia rasmi", "Sifu hadharani, rekebisha faraghani"] }
          ],
          tryIt: "Chukua muhtasari wako wa upelelezi na utumie AI kutengeneza mazungumzo ya sekunde 30 na ujumbe wa timu wa sentensi tatu wenye mambo makuu yasiyozidi matatu.",
          youCanNow: "kugeuza takwimu kuwa ujumbe wa timu mfupi, wazi na wenye heshima.",
          quickCheck: [
            { objective: "O5", q: "Wachezaji wanahitaji nini kutoka kwa ujumbe wa timu?", options: ["Mambo moja hadi matatu yaliyo wazi", "Kila namba katika jedwali", "Ripoti ndefu", "Takwimu za timu nyingine"], answer: 0, why: "Ujumbe mfupi wenye mambo machache yaliyo wazi unakumbukwa." },
            { objective: "O5", q: "Mchezaji mmoja anarudia kosa lilelile. Unalishughulikiaje?", options: ["Kulitaja kwenye gumzo la timu", "Kulichapisha kwenye ukurasa wa timu", "Kulionyesha kwenye slaidi ya kikao cha video", "Kuzungumza na mchezaji faraghani"], answer: 3, why: "Sifu hadharani, rekebisha faraghani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faragha na haki katika takwimu za timu",
          minutes: 5,
          goal: "Weka sheria za taarifa za timu zinazowalinda wachezaji na kuweka maamuzi ya haki.",
          text: [
            "Taarifa za mchezaji ni za binafsi. Takwimu, video, na hasa taarifa za afya, za vifaa vinavyovaliwa mwilini na za masomo zinahitaji uangalifu. Kusanya tu unachohitaji, kihifadhi mahali palipoidhinishwa, na futa usichohitaji tena kulingana na sheria za shule yako.",
            "Usibandike majina kamili, taarifa za afya au mambo ya faragha kwenye zana za AI. Tumia namba au herufi za kwanza za majina. Shule na ligi nyingi zina sheria kuhusu taarifa za wanafunzi na apps zilizoidhinishwa; muulize mkurugenzi wa michezo wa shule yako.",
            "Haki: namba zinaweza kukosa mambo kama juhudi, uongozi au ulinzi usioonekana kwenye box score, na sampuli ndogo zinaweza kuwa si za haki kwa wachezaji wa benchi. Tumia takwimu kuuliza maswali bora, na waeleze wachezaji maamuzi kama binadamu."
          ],
          steps: ["Kusanya tu unachohitaji.", "Hifadhi mahali palipoidhinishwa.", "Tumia namba au herufi za kwanza na AI.", "Muulize mkurugenzi wa michezo kuhusu sheria za taarifa na apps.", "Waeleze wachezaji maamuzi kama binadamu."],
          words: [["Taarifa za wanafunzi", "taarifa kuhusu wanafunzi, ambazo shule lazima zizilinde."], ["Upendeleo (bias)", "ukosefu wa haki unaoweza kutokana na takwimu zisizokamilika au dhana."]],
          slides: [
            { title: "Taarifa za mchezaji ni za binafsi", bullets: ["Kusanya tu unachohitaji", "Mahali palipoidhinishwa tu", "Futa usichohitaji tena"] },
            { title: "Ukitumia AI", bullets: ["Namba au herufi za kwanza", "Hakuna taarifa za afya wala za faragha", "Kagua sheria za shule kuhusu apps"] },
            { title: "Haki", bullets: ["Namba zinakosa juhudi na uongozi", "Sampuli ndogo zinaweza kukosa haki", "Waeleze wachezaji maamuzi"] }
          ],
          tryIt: "Kazi ya mwisho: andika sheria tano za taarifa za timu, kisha maliza jedwali lako la takwimu, mfumo mmoja, muhtasari wako wa ukurasa mmoja wa upelelezi na ujumbe wa timu unaolinda faragha ya wachezaji.",
          youCanNow: "kutumia takwimu za timu kwa njia inayowalinda wachezaji na kuweka maamuzi ya haki.",
          quickCheck: [
            { objective: "O6", q: "Ufanye nini na taarifa za mchezaji usizozihitaji tena?", options: ["Kuzihifadhi milele", "Kuzifuta kulingana na sheria za shule yako", "Kuzishiriki na timu nyingine", "Kuzichapisha mtandaoni"], answer: 1, why: "Kusanya tu unachohitaji na ufute usichohitaji tena kwa sheria za shule yako." },
            { objective: "O6", q: "Mchezaji wa benchi ana namba mbaya kutoka dakika sita tu za kucheza. Kipi ni cha haki?", options: ["Kumwondoa kwenye timu", "Kushiriki takwimu zake na kila mtu", "Kuichukulia sampuli ndogo kwa uangalifu na kuzungumza naye kama binadamu", "Kutomchezesha tena kamwe"], answer: 2, why: "Sampuli ndogo zinaweza kukosa haki kwa wachezaji wa benchi; waeleze wachezaji maamuzi kama binadamu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Upelelezi na mawasiliano",
        questions: [
          { objective: "O4", q: "Kipi ni chanzo cha haki cha upelelezi?", options: ["Kurekodi kwa siri mazoezi yao yaliyofungwa", "Kudukua app yao", "Kuwaomba wachezaji wao nywila", "Box scores zilizo wazi kwa umma na video za mechi zinazoruhusiwa"], answer: 3, why: "Tumia vyanzo vilivyo wazi na vinavyoruhusiwa, ukifuata sheria za ligi." },
          { objective: "O4", q: "AI inaongeza jambo kuu ambalo haliko katika maelezo yako. Wewe:", options: ["Unaliondoa au unalikagua mwenyewe", "Unaliacha", "Unaliandika kwa herufi nzito", "Unaiambia timu ni kweli"], answer: 0, why: "Tumia tu kile ambacho maelezo yako yanaunga mkono." },
          { objective: "O5", q: "Ujumbe wa timu unapaswa kuwa na mambo makuu mangapi?", options: ["Ishirini", "Hakuna", "Moja hadi matatu", "Kila takwimu"], answer: 2, why: "Ujumbe mfupi unakumbukwa." },
          { objective: "O5", q: "Marekebisho ya mchezaji mmoja mmoja yafanyike wapi?", options: ["Kwenye gumzo la kikundi cha timu", "Kwenye mitandao ya kijamii", "Mbele ya mashabiki", "Faraghani"], answer: 3, why: "Sifu hadharani, rekebisha faraghani." },
          { objective: "O6", q: "Ubandike nini kwenye AI badala ya majina ya wachezaji?", options: ["Majina kamili na tarehe za kuzaliwa", "Namba au herufi za kwanza", "Maelezo ya matibabu", "Anwani za nyumbani"], answer: 1, why: "Hii inalinda faragha ya wachezaji." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Michezo ya Timu",
    questions: [
      { objective: "O1", q: "Uchambuzi wa timu una maana ya:", options: ["Kuhesabu mashabiki tu", "Kuchukua nafasi ya kocha", "Kutumia namba kuelewa na kuboresha jinsi timu inavyocheza", "Kuuza tiketi"], answer: 2, why: "Unasaidia maamuzi bora ya timu." },
      { objective: "O1", q: "Timu inayoshambulia kwa kasi inapaswa kufuatilia:", options: ["Pointi za mashambulizi ya kushtukiza na mipira inayopotea", "Rangi za jezi", "Muda wa basi", "Ukubwa wa umati"], answer: 0, why: "Hizo zinaendana na mtindo wa kushambulia kwa kasi." },
      { objective: "O1", q: "Unapaswa kuanza na takwimu ngapi za timu?", options: ["Tatu hadi tano", "Hamsini", "Hakuna", "Mia moja"], answer: 0, why: "Takwimu chache unazoweza kukusanya kila mechi." },
      { objective: "O1", q: "Nani anaweza kusaidia kukusanya takwimu?", options: ["Mwamuzi", "Mpinzani", "Meneja, mjitolea au mchezaji aliyeumia", "Hakuna mtu"], answer: 2, why: "Tumia watu ulio nao." },
      { objective: "O2", q: "Jedwali la takwimu za timu linapaswa kuwa:", options: ["Wazi kwa umma mtandaoni", "Limeshirikiwa tu na watu wanaolihitaji", "Limetumwa kwa barua pepe kwa wapinzani", "Limechapishwa kwa ajili ya mashabiki"], answer: 1, why: "Punguza ruhusa ili kuwalinda wachezaji." },
      { objective: "O2", q: "Ruhusa ya kuona tu ina maana watu:", options: ["Wanaweza kulifuta", "Wanaweza kuhariri kila kitu", "Hawawezi kulifungua", "Wanaweza kuona lakini hawawezi kubadilisha"], answer: 3, why: "Inalinda takwimu zako." },
      { objective: "O3", q: "Tofauti ya pointi ni:", options: ["Jumla ya pointi", "Mipira ya adhabu tu", "Pointi zilizofungwa ukiondoa pointi zilizoruhusiwa", "Idadi ya wafuasi wako"], answer: 2, why: "Inaonyesha jinsi kikosi kinavyofanya." },
      { objective: "O3", q: "Pivot table:", options: ["Ni aina ya zoezi", "Ni mbinu ya mpira wa kikapu", "Inafuta safu", "Inapanga makundi na kujumlisha takwimu"], answer: 3, why: "Inafupisha takwimu haraka." },
      { objective: "O3", q: "Ukiuliza AI kuhusu vikosi, iombe pia:", options: ["Ionyeshe hesabu zake", "Ichague wachezaji wa kuanza", "Ichapishe matokeo", "Ibahatishe"], answer: 0, why: "Unahitaji kukagua kazi yake." },
      { objective: "O3", q: "Mifumo kutoka kwa takwimu ni bora kuichukulia kama:", options: ["Majibu ya mwisho", "Maswali ya mazoezi na video", "Siri", "Machapisho ya mitandao ya kijamii"], answer: 1, why: "Takwimu zinasaidia uamuzi wa kocha." },
      { objective: "O4", q: "Ripoti ya upelelezi inafupisha:", options: ["Takwimu zako mwenyewe tu", "Vitafunio vya timu", "Jinsi mpinzani anavyocheza na jinsi ya kumshinda", "Majina ya waamuzi"], answer: 2, why: "Inaiandaa timu yako." },
      { objective: "O4", q: "Mwelekeo (tendency) ni:", options: ["Kitu ambacho timu hufanya mara nyingi katika hali fulani", "Mchezo wa mara moja", "Kanuni", "Matokeo"], answer: 0, why: "Mielekeo inasaidia kutabiri watakachofanya." },
      { objective: "O4", q: "Upelelezi unapaswa kufuata:", options: ["Hakuna sheria", "Matakwa ya mpinzani", "Mitindo ya mitandao ya kijamii", "Sheria za ligi yako kuhusu video na upelelezi"], answer: 3, why: "Ligi zinaweka sheria za haki za upelelezi." },
      { objective: "O4", q: "Muhtasari wa upelelezi wa AI unapaswa kutoka kwa:", options: ["Kubahatisha kwa AI", "Maelezo yako mwenyewe tu", "Uvumi", "Maoni ya mashabiki"], answer: 1, why: "Maelezo ndiyo ushahidi wako." },
      { objective: "O5", q: "Mazungumzo ya sekunde 30 chumbani mwa kubadilishia nguo yanapaswa kuwa na:", options: ["Kila takwimu", "Mambo makuu moja hadi matatu", "Hakuna jambo", "Slaidi kumi"], answer: 1, why: "Wachezaji wanakumbuka mambo machache yaliyo wazi." },
      { objective: "O5", q: "Makocha wanapaswa kuwasiliana na wachezaji kupitia:", options: ["App yoyote tu", "Akaunti za siri", "Maoni ya hadharani", "Njia iliyoidhinishwa na shule au klabu"], answer: 3, why: "Sheria zinawalinda watoto na makocha." },
      { objective: "O6", q: "Taarifa zipi zinahitaji uangalifu zaidi?", options: ["Taarifa za afya na za masomo", "Matokeo ya mwisho", "Tarehe za mechi", "Rangi za timu"], answer: 0, why: "Ni za faragha na zinalindwa." },
      { objective: "O6", q: "Nani anaweza kukuambia apps zipi shule yako inaruhusu kwa taarifa za wanafunzi?", options: ["Shabiki", "AI", "Mkurugenzi wa michezo", "Mpinzani"], answer: 2, why: "Shule zinaweka sheria za taarifa." },
      { objective: "O6", q: "Box scores zinaweza kukosa:", options: ["Pointi", "Rebounds", "Matokeo ya mwisho", "Juhudi, uongozi na ulinzi usio na mpira"], answer: 3, why: "Si kila kitu kinaonekana katika namba." },
      { objective: "O6", q: "Uamuzi unapotumia takwimu, makocha wanapaswa:", options: ["Kuuficha", "Kuwaeleza wachezaji kama binadamu", "Kulilaumu jedwali", "Kuuchapisha hadharani"], answer: 1, why: "Wachezaji wanastahili heshima na uwazi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      2,
      4,
      8,
      10,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Jedwali la takwimu",
        objective: "O2",
        notYet: "Chini ya mechi tatu, takwimu zisizo wazi, au kushiriki kusiko salama au taarifa za faragha ndani ya jedwali.",
        meets: "Takwimu tatu hadi tano zenye maana wazi kwa mechi au mazoezi matatu, kichupo cha muhtasari na ruhusa salama kulingana na jukumu.",
        exceeds: "Kila takwimu ina mtu aliyepewa jukumu na maana zake ziko kwenye kichupo ambacho kila mtu anaweza kusoma."
      },
      {
        name: "Mfumo uliopatikana",
        objective: "O3",
        notYet: "Hakuna mfumo, hesabu za AI hazikukaguliwa, au majina kamili yalitumika na AI.",
        meets: "Mfumo mmoja wa kikosi au wa mchezo wenye hesabu zilizokaguliwa, ukitumia namba au herufi za kwanza tu.",
        exceeds: "Inataja ukubwa wa sampuli na inageuza mfumo kuwa swali la mazoezi au video kwa kocha."
      },
      {
        name: "Muhtasari wa upelelezi",
        objective: "O4",
        notYet: "Mambo ambayo hayakutoka katika maelezo, au vyanzo nje ya sheria za ligi.",
        meets: "Ukurasa mmoja wenye mashambulizi, ulinzi, wachezaji muhimu na funguo tatu, kila jambo likitoka katika maelezo ya mwanafunzi na vyanzo vinavyoruhusiwa.",
        exceeds: "Una muda kamili wa video unaoonyesha kila jambo kuu."
      },
      {
        name: "Ujumbe wa timu na faragha",
        objective: "O5",
        notYet: "Mambo mengi mno, au kosa la mchezaji au taarifa zake za faragha zimeshirikiwa.",
        meets: "Mambo makuu moja hadi matatu yaliyotumwa kupitia njia iliyoidhinishwa bila taarifa za faragha za mchezaji.",
        exceeds: "Matoleo ya mazungumzo ya chumba cha kubadilishia nguo, slaidi na ujumbe, yote yakiheshimu faragha."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kazi ya mwisho na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Timu ambazo bado zinakusanya takwimu zao zilizoelezwa siku 30 baadaye (utafiti wa ufuatiliaji)",
      "Makocha wanaoripoti mabadiliko ya mazoezi au ya mpango wa mechi kutokana na mfumo au muhtasari wa upelelezi",
      "Timu zinazokubali sheria za faragha za taarifa zilizoandikwa na kuidhinishwa na mkurugenzi wa michezo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Akaunti ya Google ya bure kwa ajili ya Google Sheets",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Matokeo, box scores au video zinazoruhusiwa za mpinzani mmoja, zilizo wazi kwa umma",
      "Sheria za shule au ligi yako kuhusu taarifa za wanafunzi na apps zilizoidhinishwa",
      "Kama dakika 60 za masomo pamoja na takwimu za mechi au mazoezi matatu"
    ],
    facilitatorNotes: [
      "Hakikisha na mkurugenzi wa michezo ni apps zipi zimeidhinishwa kwa taarifa za wanafunzi kabla timu hazijaandaa majedwali.",
      "Onyesha jinsi ya kubadilisha majina kwa namba au herufi za kwanza kabla ya kubandika chochote kwenye AI.",
      "Wakumbushe wafanyakazi kwamba taarifa za afya, za masomo na za mawasiliano haziwekwi kamwe katika jedwali la takwimu.",
      "Fuata sheria za ligi kuhusu upelelezi na kubadilishana video; usirekodi mazoezi yaliyofungwa ya timu nyingine.",
      "Zungumzia haki: takwimu zinaanzisha maswali, kocha ndiye anaamua, na maamuzi yanaelezwa kwa wachezaji kama binadamu."
    ]
  }
};
