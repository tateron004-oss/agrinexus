"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-data-analytics-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-data-analytics-tools-sw",
  lang: "sw",
  translationOf: "underserved-data-analytics-tools",
  category: "Undeserved Community",
  name: "Utangulizi wa Zana na Mbinu za Uchambuzi wa Data",
  skills: "Kuandaa spreadsheet safi, Kupanga na kuchuja data, Kutumia SUM na AVERAGE, Kutengeneza chati, Kutumia AI kueleza fomula, Kueleza matokeo kwa maneno rahisi",
  outcome: "kuweka taarifa halisi kwenye spreadsheet ya bure (Google Sheets au Excel for the web), kuzipanga na kuzichuja, kupata jumla na wastani kwa fomula, kutengeneza chati, na kueleza inachoonyesha kwa sentensi mbili rahisi.",
  about: [
    "Uchambuzi wa data ni kutumia taarifa kujibu swali. Benki ya chakula inataka kujua siku yenye watu wengi zaidi. Familia inataka kujua pesa zake zinakwenda wapi. Ligi ya vijana inataka kujua watoto wangapi walikuja kila wiki. Unaweza kujibu maswali kama haya kwa zana za bure.",
    "Katika kozi hii utatumia spreadsheet ya bure, Google Sheets au Excel for the web, kwenye simu, kompyuta ya nyumbani au kompyuta ya maktaba. Utaingiza data, utaipanga na kuichuja, utatumia fomula rahisi, utatengeneza chati, na utatumia msaidizi wa AI wa bure kukusaidia unapokwama.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\" inayojenga spreadsheet ile ile, hatua kwa hatua. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza spreadsheet ya data halisi au ya mazoezi ya mwezi mmoja (kwa mfano idadi ya watu waliofika benki ya chakula kila siku, au matumizi ya familia kwa aina). Ipange, ichuje, ongeza jumla kwa SUM na wastani kwa AVERAGE, tengeneza chati, na andika sentensi mbili rahisi zinazosema data inaonyesha nini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana katika jamii zisizohudumiwa vya kutosha wanaotaka ujuzi wa kompyuta unaohitajika kazini, au wanaohitaji kufuatilia namba za familia, benki ya chakula, kanisa, ligi ya vijana au shirika dogo lisilo la faida.",
    startingPoint: "Wanaweza kutumia simu na labda kompyuta kuvinjari mtandao. Wengi hawajawahi kutumia spreadsheet, kuandika fomula au kutengeneza chati, na baadhi hawajiamini katika hesabu.",
    gap: "Ujuzi wa spreadsheet unaombwa katika kazi nyingi za ofisini, madukani na mashirika yasiyo ya faida, na vikundi vya jamii vinahitaji kuonyesha maana ya namba zao. Wanafunzi wanahitaji kuingiza data safi, kupanga, kuchuja, kupata jumla, kutengeneza chati na kuieleza, kwa zana za bure na wakilinda taarifa za watu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: kompyuta ya maktaba au ya nyumbani ni bora zaidi; app ya simu inafaa kwa spreadsheet ndogo",
      "Gharama: Google Sheets au Excel for the web ya bure, kwa akaunti ya bure",
      "Faragha: hakuna majina, namba za simu wala namba za akaunti za watu halisi zinazobandikwa kwenye AI",
      "Kiwango cha hesabu: kujumlisha na kutafuta wastani tu; spreadsheet inafanya hesabu"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao hawajawahi kutumia kipanya (mouse) au kibodi ya kompyuta wanaweza kwanza kusoma kozi ya ujuzi wa msingi wa kompyuta."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa jambo unalojali nyumbani, kazini au katika jamii yako", action: "kuandika swali moja lililo wazi ambalo data inaweza kujibu na kuorodhesha data unayohitaji", standard: "likianza na lipi, ngapi au kiasi gani" },
    { id: "O2", condition: "Ukitumia Google Sheets au Excel for the web", action: "kutengeneza spreadsheet yenye vichwa vilivyo wazi na kuingiza data safi", standard: "kichwa kimoja kwa kila safu wima katika mstari wa 1 na rekodi moja kwa kila mstari, angalau mistari kumi" },
    { id: "O3", condition: "Ukipewa spreadsheet ya data", action: "kupanga safu wima kutoka kubwa hadi ndogo na kuchuja ili kuonyesha baadhi ya mistari tu", standard: "kisha kuondoa kichujio ili mistari yote irudi" },
    { id: "O4", condition: "Ukipewa safu wima ya namba", action: "kupata jumla kwa SUM na wastani kwa AVERAGE", standard: "ukitumia range sahihi ili zote mbili zibadilike namba ikibadilika" },
    { id: "O5", condition: "Ukipewa data yako na msaidizi wa AI wa bure", action: "kutengeneza chati yenye kichwa kilicho wazi na kuomba AI ieleze fomula au kosa", standard: "ukichagua aina sahihi ya chati na bila kubandika data ya binafsi" },
    { id: "O6", condition: "Spreadsheet yako ikiwa imekamilika", action: "kuandika sentensi mbili rahisi zinazojibu swali lako, kukagua kazi yako na kuishiriki kwa usalama", standard: "ukiwa na namba inayounga mkono jibu na ukiishiriki tu na watu wanaoihitaji" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuandaa data yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Uchambuzi wa data ni nini, na kuuliza swali zuri",
          minutes: 4,
          goal: "Andika swali moja lililo wazi ambalo data inaweza kujibu.",
          text: [
            "Data ni taarifa unazoweza kuhesabu au kuorodhesha: tarehe, kiasi, majina ya mahali, idadi ya wageni. Uchambuzi ni kuangalia data hiyo ili kujibu swali.",
            "Kila mradi mzuri unaanza na swali lililo wazi. \"Ni siku gani ya wiki benki yetu ya chakula inapata wageni wengi zaidi?\" ni swali lililo wazi. \"Niambie kuhusu benki ya chakula\" si wazi.",
            "Swali lililo wazi linakuambia data gani ukusanye. Ili kupata siku yenye watu wengi zaidi, unahitaji tarehe na idadi ya wageni kwa kila siku."
          ],
          steps: ["Chagua jambo unalojali: familia, kazi, shule au jamii.", "Andika swali moja linaloanza na lipi, ngapi au kiasi gani.", "Orodhesha data unayohitaji kulijibu."],
          words: [["Data", "taarifa unazoweza kuhesabu au kuorodhesha, kama tarehe, kiasi au majina."], ["Uchambuzi", "kuangalia data ili kujibu swali."]],
          slides: [
            { title: "Data na uchambuzi", bullets: ["Data: taarifa unazoweza kuhesabu au kuorodhesha", "Uchambuzi: kutumia data kujibu swali"] },
            { title: "Anza na swali lililo wazi", bullets: ["Wazi: \"Siku gani inapata wageni wengi zaidi?\"", "Si wazi: \"Niambie kuhusu benki ya chakula\""] },
            { title: "Swali linakuambia ukusanye nini", bullets: ["Siku yenye watu wengi? Unahitaji tarehe na idadi ya wageni", "Gharama kubwa zaidi? Unahitaji aina za matumizi na kiasi"] }
          ],
          tryIt: "Andika swali moja lililo wazi kuhusu familia yako, kazi, shule au jamii ambalo namba zinaweza kujibu. Chini yake, orodhesha aina mbili au tatu za data utakazohitaji.",
          youCanNow: "kuandika swali lililo wazi na kutaja data inayohitajika kulijibu.",
          quickCheck: [
            { objective: "O1", q: "Data ni nini?", options: ["Taarifa unazoweza kuhesabu au kuorodhesha", "Namba za taarifa ya benki tu", "Aina ya kompyuta", "Tovuti"], answer: 0, why: "Data ni taarifa kama tarehe, kiasi, mahali na idadi ya wageni." },
            { objective: "O1", q: "Kanisa lako linataka kujua kama watu wengi zaidi huja wakati wa baridi. Unahitaji data gani?", options: ["Namba ya simu ya mchungaji", "Tarehe na idadi ya watu katika kila ibada", "Rangi ya jengo", "Hakuna; kisia tu"], answer: 1, why: "Swali lililo wazi linakuambia ukusanye tarehe na idadi kwa kila ibada." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufungua spreadsheet ya bure na kuingiza data",
          minutes: 5,
          goal: "Tengeneza spreadsheet yenye vichwa vya safu wima vilivyo wazi na data yako.",
          text: [
            "Spreadsheet ni gridi ya visanduku vinavyoitwa seli. Safu wima zinakwenda juu na chini na zina herufi (A, B, C). Mistari inakwenda kando na ina namba (1, 2, 3). Seli B2 iko katika safu wima B, mstari wa 2.",
            "Chaguo za bure: Google Sheets kwenye sheets.google.com kwa akaunti ya Google ya bure, au Excel for the web kwenye office.com kwa akaunti ya Microsoft ya bure. Zote zinafanya kazi kwenye kivinjari cha wavuti na kama app za simu.",
            "Weka data safi: kichwa kimoja kwa kila safu wima katika mstari wa 1 (kama Tarehe, Siku, Wageni), mstari mmoja kwa kila rekodi, na namba zimeandikwa kama namba tu bila maneno ya ziada. Data safi inafanya kila hatua inayofuata iwe rahisi."
          ],
          steps: ["Fungua sheets.google.com au office.com na uanze spreadsheet tupu.", "Ipe faili jina lililo wazi.", "Andika kichwa katika kila safu wima ya mstari wa 1.", "Ingiza rekodi moja kwa kila mstari chini ya vichwa."],
          words: [["Spreadsheet", "gridi ya mistari na safu wima ya kufanyia kazi namba na orodha."], ["Seli", "kisanduku kimoja katika spreadsheet, kinachoitwa kwa herufi ya safu wima na namba ya mstari, kama B2."], ["Kichwa", "jina lililo juu ya safu wima."]],
          slides: [
            { title: "Spreadsheet ni gridi", bullets: ["Safu wima zina herufi: A, B, C", "Mistari ina namba: 1, 2, 3", "Seli B2 = safu wima B, mstari wa 2"] },
            { title: "Zana za spreadsheet za bure", bullets: ["Google Sheets: sheets.google.com", "Excel for the web: office.com", "Zote zinafanya kazi kwenye kompyuta ya maktaba au simu"] },
            { title: "Weka data safi", bullets: ["Kichwa kimoja kwa kila safu wima katika mstari wa 1", "Rekodi moja kwa kila mstari", "Namba kama namba tu"] }
          ],
          tryIt: "Fungua spreadsheet ya bure. Tengeneza vichwa vitatu kwa ajili ya swali lako (kwa mfano Tarehe, Siku, Wageni) na uingize angalau mistari kumi ya data halisi au ya mazoezi.",
          youCanNow: "kuanza spreadsheet ya bure na kuingiza data safi chini ya vichwa vilivyo wazi.",
          quickCheck: [
            { objective: "O2", q: "Katika spreadsheet, mistari inaitwa kwa nini?", options: ["Herufi", "Rangi", "Namba", "Majina"], answer: 2, why: "Mistari inakwenda kando na ina namba; safu wima zina herufi." },
            { objective: "O2", q: "Uliandika \"kama watu 40\" katika safu wima ya Wageni. Ubadilishe nini?", options: ["Hakuna", "Ongeza maneno zaidi", "Yafanye kuwa herufi nzito", "Andika 40 tu kama namba"], answer: 3, why: "Data safi inatumia namba tu ili spreadsheet iweze kuzifanyia hesabu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga na kuchuja",
          minutes: 5,
          goal: "Panga data yako kutoka kubwa hadi ndogo na uichuje ili kuonyesha baadhi ya mistari tu.",
          text: [
            "Kupanga (sort) kunaweka mistari kwa mpangilio, kama kutoka kubwa hadi ndogo. Kupanga safu wima ya Wageni kutoka kubwa hadi ndogo kunaweka siku yenye watu wengi zaidi juu.",
            "Kuchuja (filter) kunaficha mistari usiyoihitaji sasa hivi. Unaweza kuchuja safu wima ya Siku ili kuonyesha Jumamosi tu. Kuchuja hakufuti chochote; unaweza kukizima na mistari yote inarudi.",
            "Katika Google Sheets na Excel for the web, kupanga na kuchuja kuko kwenye menyu ya Data au kichupo cha Data. Usipovipata, muulize msaidizi wa AI wa bure: \"Ninapangaje safu wima kutoka kubwa hadi ndogo katika Google Sheets?\""
          ],
          steps: ["Bofya seli yoyote katika data yako.", "Fungua menyu ya Data au kichupo cha Data na uwashe kichujio.", "Tumia kishale kidogo kwenye kichwa kupanga kutoka kubwa hadi ndogo.", "Tumia kishale kwenye kichwa kingine kuonyesha baadhi ya thamani tu, kisha ondoa kichujio."],
          words: [["Kupanga (sort)", "kuweka mistari kwa mpangilio, kama kubwa hadi ndogo au A hadi Z."], ["Kuchuja (filter)", "kuonyesha tu mistari inayolingana na unachochagua, bila kufuta mingine."]],
          slides: [
            { title: "Kupanga: weka mistari kwa mpangilio", bullets: ["Kubwa hadi ndogo inaweka thamani ya juu kwanza", "A hadi Z inapanga majina kwa mpangilio"] },
            { title: "Kuchuja: onyesha unachohitaji tu", bullets: ["Mfano: Jumamosi tu", "Hakuna kinachofutwa", "Kizime na mistari yote inarudi"] },
            { title: "Wapi pa kuvipata", bullets: ["Menyu ya Data au kichupo cha Data", "Umekwama? Uliza AI jinsi ya kufanya, kwa zana yako"] }
          ],
          tryIt: "Panga safu wima yako kuu ya namba kutoka kubwa hadi ndogo na uandike mstari wa juu. Kisha chuja ili kuonyesha aina moja tu ya mistari, na uondoe kichujio.",
          youCanNow: "kupanga na kuchuja spreadsheet ili kupata unachotafuta.",
          quickCheck: [
            { objective: "O3", q: "Kupanga kunafanya nini?", options: ["Kunaweka mistari kwa mpangilio, kama kubwa hadi ndogo", "Kunafuta mistari usiyoihitaji", "Kunajumlisha safu wima", "Kunatengeneza chati"], answer: 0, why: "Kupanga kunaweka mistari kwa mpangilio, kama namba kubwa zaidi kwanza." },
            { objective: "O3", q: "Unataka kuona mistari ya Jumatatu tu. Unatumia nini?", options: ["SUM", "Kichujio kwenye safu wima ya Siku", "Chati ya duara", "Futa mistari mingine"], answer: 1, why: "Kichujio kinaficha mistari usiyoihitaji bila kuifuta." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuandaa data yako",
        questions: [
          { objective: "O1", q: "Lipi ni swali la data lililo wazi zaidi?", options: ["\"Niambie kuhusu benki ya chakula\"", "\"Vitu?\"", "\"Ni siku gani ya wiki benki ya chakula inapata wageni wengi zaidi?\"", "\"Data tafadhali\""], answer: 2, why: "Linasema hasa unachotafuta, kwa hiyo unajua data gani ukusanye." },
          { objective: "O2", q: "Seli C4 ni nini?", options: ["Kisanduku katika safu wima C, mstari wa 4", "Faili ya nne", "Mstari C, safu wima 4", "Namba ya simu"], answer: 0, why: "Seli zinaitwa kwa herufi ya safu wima, kisha namba ya mstari." },
          { objective: "O2", q: "Vichwa vya safu wima viwekwe wapi?", options: ["Chini kabisa", "Mstari wa 1, kichwa kimoja kwa kila safu wima", "Katika faili nyingine", "Popote"], answer: 1, why: "Vichwa katika mstari wa 1 vinaweka data safi na rahisi kupanga." },
          { objective: "O3", q: "Unachuja ili kuonyesha Jumamosi tu. Nini kinatokea kwa mistari mingine?", options: ["Inafutwa milele", "Inahamia faili mpya", "Inageuka kuwa chati", "Inafichwa na inarudi ukiondoa kichujio"], answer: 3, why: "Kuchuja kunaficha mistari; hakuifuti." },
          { objective: "O3", q: "Unataka siku yenye watu wengi zaidi iwe juu. Unafanya nini?", options: ["Panga safu wima ya wageni kutoka kubwa hadi ndogo", "Futa mistari mingine", "Badilisha jina la faili", "Fanya maandishi kuwa herufi nzito"], answer: 0, why: "Kupanga kutoka kubwa hadi ndogo kunaweka namba ya juu zaidi kwanza." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata na kushiriki majibu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fomula: SUM na AVERAGE",
          minutes: 5,
          goal: "Tumia SUM kupata jumla ya safu wima na AVERAGE kupata wastani wake.",
          text: [
            "Fomula ni agizo dogo linalokufanyia hesabu. Kila fomula inaanza na alama ya sawa (=).",
            "=SUM(C2:C31) inajumlisha kila namba kutoka seli C2 hadi seli C31. =AVERAGE(C2:C31) inapata wastani wa namba hizo. C2:C31 inaitwa range: seli zote kutoka C2 kushuka hadi C31.",
            "Ukibadilisha namba katika safu wima, jumla na wastani vinabadilika vyenyewe. Hiyo ndiyo nguvu ya spreadsheet: hakuna kuhesabu upya kwa mkono."
          ],
          steps: ["Bofya seli tupu chini ya safu wima yako ya namba.", "Andika =SUM( kisha seli ya kwanza, nukta mbili, na seli ya mwisho, kisha ).", "Bonyeza Enter kuona jumla.", "Katika seli nyingine tupu, fanya hivyo hivyo kwa =AVERAGE( ... )."],
          words: [["Fomula", "agizo linaloanza na = na linalofanya hesabu katika spreadsheet."], ["Range", "kundi la seli, linaloandikwa kama C2:C31."], ["Wastani", "jumla ikigawanywa kwa idadi ya namba zilizopo."]],
          slides: [
            { title: "Fomula zinaanza na =", bullets: ["Zinakufanyia hesabu", "Zinabadilika namba zikibadilika"] },
            { title: "Fomula mbili za kujua", bullets: ["=SUM(C2:C31) inazijumlisha zote", "=AVERAGE(C2:C31) inapata wastani"] },
            { title: "Range ni nini?", bullets: ["C2:C31 maana yake C2 kushuka hadi C31", "Seli ya kwanza, nukta mbili, seli ya mwisho"] }
          ],
          tryIt: "Chini ya safu wima yako ya namba, ongeza jumla kwa =SUM na wastani kwa =AVERAGE. Badilisha namba moja na utazame zote mbili zikibadilika.",
          youCanNow: "kupata jumla na wastani wa safu wima kwa SUM na AVERAGE.",
          quickCheck: [
            { objective: "O4", q: "Range kama B2:B20 ni nini?", options: ["Seli moja tu", "Aina ya chati", "Seli zote kutoka B2 kushuka hadi B20", "Jina la faili"], answer: 2, why: "Range ni kila seli kutoka ya kwanza hadi ya mwisho, zikiunganishwa kwa nukta mbili." },
            { objective: "O4", q: "Unataka jumla ya matumizi katika D2 hadi D15. Unaandika nini?", options: ["SUM D2 D15", "=AVERAGE(D2:D15)", "=D2+D15", "=SUM(D2:D15)"], answer: 3, why: "=SUM(D2:D15) inajumlisha kila namba kutoka D2 hadi D15." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza chati, na AI kama msaidizi wako",
          minutes: 5,
          goal: "Tengeneza chati rahisi na utumie AI kueleza fomula au kurekebisha kosa.",
          text: [
            "Chati inageuza namba kuwa picha. Chati ya nguzo inalinganisha kiasi, kama wageni kwa kila siku. Chati ya mstari inaonyesha mabadiliko kwa muda. Chati ya duara inaonyesha sehemu za kitu kizima, kama matumizi kwa aina.",
            "Ili kuitengeneza, chagua vichwa na data yako, kisha weka chati kutoka menyu ya Insert au kichupo cha Insert. Badilisha kichwa chake kiseme chati inaonyesha nini.",
            "Msaidizi wa AI wa bure anaweza kueleza fomula na makosa. Andika fomula au kosa kisha uulize: \"Eleza hii kwa maneno rahisi na jinsi ya kuirekebisha.\" Usibandike data ya binafsi kama majina, anwani au namba za akaunti; badala yake eleza safu wima."
          ],
          steps: ["Chagua vichwa na data unayotaka kuonyesha.", "Fungua menyu ya Insert au kichupo cha Insert na uchague Chart.", "Chagua chati ya nguzo, ya mstari au ya duara.", "Ipe chati kichwa kilicho wazi."],
          words: [["Chati ya nguzo (bar chart)", "chati inayolinganisha kiasi kwa nguzo."], ["Chati ya mstari (line chart)", "chati inayoonyesha mabadiliko kwa muda."], ["Chati ya duara (pie chart)", "duara linaloonyesha sehemu za kitu kizima."]],
          slides: [
            { title: "Chagua chati sahihi", bullets: ["Nguzo: linganisha kiasi", "Mstari: mabadiliko kwa muda", "Duara: sehemu za kitu kizima"] },
            { title: "Tengeneza chati", bullets: ["Chagua vichwa na data", "Insert, kisha Chart", "Ipe kichwa kilicho wazi"] },
            { title: "AI kama msaidizi wako", bullets: ["Iombe ieleze fomula au kosa", "Eleza safu wima; usibandike data ya binafsi"] }
          ],
          tryIt: "Tengeneza chati ya nguzo au ya mstari ya data yako na uipe kichwa kilicho wazi. Kisha muulize msaidizi wa AI aeleze =AVERAGE(C2:C31) inafanya nini kwa maneno rahisi.",
          youCanNow: "kutengeneza chati na kutumia AI kuelewa fomula bila kushiriki data ya binafsi.",
          quickCheck: [
            { objective: "O5", q: "Chati ipi inalinganisha kiasi, kama wageni kwa kila siku?", options: ["Chati ya nguzo", "Chati ya mstari", "Chati ya duara", "Hakuna chati"], answer: 0, why: "Chati ya nguzo inalinganisha kiasi kando kwa kando." },
            { objective: "O5", q: "Fomula yako inaonyesha kosa na spreadsheet ina majina ya wateja. Unabandika nini kwenye AI?", options: ["Spreadsheet nzima", "Fomula na maelezo ya safu wima", "Namba za simu za wateja", "Nywila ya akaunti yako"], answer: 1, why: "Eleza safu wima na ubandike fomula, si data ya binafsi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kueleza data inaonyesha nini",
          minutes: 5,
          goal: "Andika sentensi mbili rahisi zinazojibu swali lako na ushiriki spreadsheet kwa usalama.",
          text: [
            "Kazi yako haijakamilika hadi mtu mwingine aielewe. Andika sentensi mbili: moja yenye jibu, nyingine yenye namba inayoliunga mkono. Kwa mfano: \"Jumamosi ndiyo siku yetu yenye watu wengi zaidi. Tulikuwa na wastani wa wageni 64 siku za Jumamosi, ukilinganisha na 38 siku nyingine.\"",
            "Kagua kazi yako kabla ya kuishiriki. Tafuta makosa ya kuandika namba, mistari tupu na jumla zinazoonekana kubwa mno au ndogo mno. Kitu kikionekana si sawa, huenda si sawa kweli.",
            "Ili kushiriki, tumia kitufe cha Share na uchague nani anaweza kuiona. Kwa data kuhusu watu, ishiriki tu na wanaoihitaji, na ondoa majina au namba za simu kama hazihitajiki."
          ],
          steps: ["Andika sentensi moja yenye jibu la swali lako.", "Andika sentensi moja yenye namba inayoliunga mkono.", "Kagua makosa ya kuandika, mistari tupu na jumla zisizo za kawaida.", "Shiriki tu na watu wanaoihitaji."],
          words: [["Matokeo", "kile data inachoonyesha, kikielezwa kwa maneno rahisi."]],
          slides: [
            { title: "Sema inaonyesha nini", bullets: ["Sentensi ya 1: jibu", "Sentensi ya 2: namba inayoliunga mkono"] },
            { title: "Kagua kabla ya kushiriki", bullets: ["Makosa ya kuandika namba", "Mistari tupu", "Jumla zinazoonekana kubwa mno au ndogo mno"] },
            { title: "Shiriki kwa usalama", bullets: ["Tumia kitufe cha Share", "Watu wanaoihitaji tu", "Ondoa majina au namba za simu kama hazihitajiki"] }
          ],
          tryIt: "Kazi ya mwisho: maliza spreadsheet yako kwa kupanga, kichujio, SUM, AVERAGE na chati. Andika sentensi mbili rahisi zinazojibu swali lako, kagua kazi yako, na uishiriki na mtu mmoja.",
          youCanNow: "kugeuza data kuwa matokeo yaliyo wazi na yaliyokaguliwa, na kuyashiriki kwa usalama.",
          quickCheck: [
            { objective: "O6", q: "Matokeo mazuri yana sehemu zipi mbili?", options: ["Kichwa na rangi", "Chati na fomula", "Jibu na namba inayoliunga mkono", "Jina na namba ya simu"], answer: 2, why: "Sentensi moja inatoa jibu na nyingine inatoa namba inayoliunga mkono." },
            { objective: "O6", q: "Wastani wa wageni kwa siku unaonyesha 4,200, lakini benki ya chakula ni ndogo. Unafanya nini?", options: ["Ishiriki mara moja", "Futa spreadsheet", "Ikadirie kuwa 4,000", "Kagua makosa ya kuandika, mistari tupu na range ya fomula"], answer: 3, why: "Namba inayoonekana si sawa huenda si sawa kweli, kwa hiyo kagua kazi yako kwanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata na kushiriki majibu",
        questions: [
          { objective: "O4", q: "Kila fomula ya spreadsheet inaanza na:", options: ["Alama ya dola", "Alama ya kuuliza", "Herufi", "Alama ya sawa (=)"], answer: 3, why: "Fomula zinaanza na =." },
          { objective: "O4", q: "=SUM(B2:B10) inafanya nini?", options: ["Inajumlisha namba kutoka B2 hadi B10", "Inapata wastani", "Inapanga safu wima", "Inatengeneza chati"], answer: 0, why: "SUM inajumlisha kila namba katika range." },
          { objective: "O5", q: "Chati ipi inaonyesha vizuri zaidi mabadiliko kwa muda?", options: ["Chati ya duara", "Chati ya mstari", "Hakuna chati", "Picha"], answer: 1, why: "Chati za mstari zinaonyesha jinsi kitu kinavyobadilika kwa muda." },
          { objective: "O5", q: "Unataka AI ieleze kosa katika spreadsheet yenye majina na namba za simu za wateja. Ufanye nini?", options: ["Bandika kila kitu", "Bandika namba za simu tu", "Eleza safu wima na ubandike fomula, si data ya binafsi", "Kata tamaa"], answer: 2, why: "Unaweza kupata msaada bila kushiriki taarifa za binafsi." },
          { objective: "O6", q: "Matokeo yapi ni bora zaidi kushiriki?", options: ["\"Jumamosi ina watu wengi zaidi. Tulikuwa na wastani wa wageni 64 siku za Jumamosi na 38 siku nyingine.\"", "\"Namba.\"", "\"Ni chati.\"", "\"Angalia spreadsheet.\""], answer: 0, why: "Yanatoa jibu na namba inayoliunga mkono." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Zana na Mbinu za Uchambuzi wa Data",
    questions: [
      { objective: "O1", q: "Uchambuzi wa data maana yake:", options: ["Kufuta faili za zamani", "Kutumia data kujibu swali", "Kununua kompyuta", "Kuandika haraka"], answer: 1, why: "Uchambuzi ni kuangalia data ili kupata jibu." },
      { objective: "O1", q: "Kwa nini uanze na swali lililo wazi?", options: ["Linakuambia data gani ukusanye", "Linafanya faili iwe kubwa zaidi", "Halihitajiki", "Linaficha data"], answer: 0, why: "Swali linaamua data unayohitaji." },
      { objective: "O1", q: "Ili kujua aina gani ya matumizi inagharimu zaidi, unahitaji:", options: ["Tarehe tu", "Nywila yako", "Aina za matumizi na kiasi", "Namba za simu"], answer: 2, why: "Aina na kiasi vinakuwezesha kulinganisha gharama." },
      { objective: "O2", q: "Ipi ni zana ya spreadsheet ya bure?", options: ["Saa yenye kikokotoo", "Daftari la karatasi", "Tangazo linalojitokeza ghafla", "Google Sheets"], answer: 3, why: "Google Sheets ni bure kwa akaunti ya Google; Excel for the web ni bure kwa akaunti ya Microsoft." },
      { objective: "O2", q: "Katika spreadsheet, safu wima zinaitwa kwa:", options: ["Herufi", "Namba", "Rangi", "Emoji"], answer: 0, why: "Safu wima ni A, B, C; mistari ni 1, 2, 3." },
      { objective: "O2", q: "Ipi ni data safi?", options: ["Vichwa vingi katika seli moja", "\"kama 20 hivi\" katika seli ya namba", "Kichwa kimoja kwa kila safu wima na namba tu", "Mistari tupu kati ya kila rekodi"], answer: 2, why: "Data safi ina vichwa vilivyo wazi na namba tu." },
      { objective: "O3", q: "Kupanga kutoka kubwa hadi ndogo kunaweka:", options: ["Namba ndogo zaidi kwanza", "Namba kubwa zaidi kwanza", "Mistari bila mpangilio", "Kila kitu katika chati"], answer: 1, why: "Kubwa hadi ndogo inaanza na thamani kubwa zaidi." },
      { objective: "O3", q: "Kuchuja safu wima:", options: ["Kunafuta mistari milele", "Kunatuma spreadsheet kwa barua pepe", "Kunabadilisha namba", "Kunaficha mistari isiyolingana, bila kuifuta"], answer: 3, why: "Vichujio vinaficha mistari tu hadi uviondoe." },
      { objective: "O3", q: "Kupanga na kuchuja kwa kawaida hupatikana wapi?", options: ["Menyu ya Data au kichupo cha Data", "Kitufe cha Print", "Pipa la taka", "Jina la faili"], answer: 0, why: "Zana zote mbili zinaviweka chini ya Data." },
      { objective: "O4", q: "=AVERAGE(C2:C31) inapata nini?", options: ["Namba kubwa zaidi", "Wastani wa C2 hadi C31", "Idadi ya mistari", "Thamani ya kwanza"], answer: 1, why: "AVERAGE inagawanya jumla kwa idadi ya namba zilizopo." },
      { objective: "O4", q: "Katika C2:C31, nukta mbili maana yake:", options: ["Gawanya", "Simama", "Kuanzia C2 hadi C31", "Zidisha"], answer: 2, why: "Nukta mbili zinatengeneza range ya seli." },
      { objective: "O4", q: "Unabadilisha namba katika safu wima. Jumla ya SUM:", options: ["Inabaki ile ile milele", "Inapotea", "Inageuka kuwa maandishi", "Inabadilika yenyewe"], answer: 3, why: "Fomula zinahesabu upya data ikibadilika." },
      { objective: "O5", q: "Chati ipi inalinganisha kiasi, kama wageni kwa kila siku?", options: ["Chati ya nguzo", "Chati ya duara ya kitu kimoja", "Hakuna chati", "Ramani"], answer: 0, why: "Chati za nguzo zinalinganisha kiasi kando kwa kando." },
      { objective: "O5", q: "Chati ipi inaonyesha sehemu za kitu kizima, kama matumizi kwa aina?", options: ["Chati ya mstari", "Chati ya duara", "Jedwali la tarehe", "Kichwa"], answer: 1, why: "Chati za duara zinaonyesha jinsi kitu kizima kinavyogawanywa." },
      { objective: "O5", q: "Ili kutengeneza chati, kwanza:", options: ["Unafuta vichwa", "Unafunga faili", "Unachagua vichwa na data", "Unabadilisha mtindo wa herufi"], answer: 2, why: "Chati inahitaji kujua data gani ionyeshe." },
      { objective: "O5", q: "Nini HUPASWI kubandika kwenye msaidizi wa AI?", options: ["Fomula", "Ujumbe wa kosa", "Maelezo ya safu wima zako", "Majina na namba za simu za watu unaowahudumia"], answer: 3, why: "Taarifa za binafsi zinapaswa kubaki siri." },
      { objective: "O6", q: "Matokeo mazuri yana:", options: ["Jibu na namba inayoliunga mkono", "Chati tu", "Hakuna namba", "Nywila yako"], answer: 0, why: "Sentensi mbili: jibu na ushahidi." },
      { objective: "O6", q: "Jumla yako inaonekana kubwa mno. Unafanya nini?", options: ["Ishiriki hivyo hivyo", "Kagua makosa ya kuandika, mistari tupu na range ya fomula", "Futa faili", "Fanya herufi ziwe ndogo zaidi"], answer: 1, why: "Jumla zisizo za kawaida mara nyingi zinamaanisha kuna kosa la kutafuta." },
      { objective: "O6", q: "Unaposhiriki spreadsheet kuhusu watu, unapaswa:", options: ["Kuiweka hadharani", "Kuishiriki na kila mtu unayemjua", "Kuishiriki tu na wanaoihitaji na kuondoa maelezo yasiyohitajika", "Kuichapisha na kuiacha wazi"], answer: 2, why: "Kushiriki kidogo kunalinda taarifa za watu." },
      { objective: "O2", q: "Zana ipi ya bure inakuwezesha kutumia Excel kwenye kivinjari cha wavuti?", options: ["Excel for the web kwenye office.com", "Mashine ya faksi", "Ujumbe mfupi", "Kadi ya zawadi"], answer: 0, why: "Excel for the web ni bure kwa akaunti ya Microsoft." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      6,
      9,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Data safi",
        objective: "O2",
        notYet: "Vichwa vinakosekana, maneno na namba zimechanganywa, au mistari ni chini ya kumi.",
        meets: "Kichwa kimoja kwa kila safu wima, rekodi moja kwa kila mstari, namba tu kwa data ya mwezi mmoja.",
        exceeds: "Faili ina jina lililo wazi na data haihitaji kurekebishwa."
      },
      {
        name: "Kupanga na kuchuja",
        objective: "O3",
        notYet: "Data haijapangwa wala kuchujwa.",
        meets: "Safu wima kuu ya namba imepangwa kutoka kubwa hadi ndogo, na kichujio kimetumika na kuondolewa.",
        exceeds: "Anaweza kusema kupanga na kuchuja kulionyesha nini."
      },
      {
        name: "SUM na AVERAGE",
        objective: "O4",
        notYet: "Fomula hazipo au zinatumia range isiyo sahihi.",
        meets: "SUM na AVERAGE sahihi kwenye safu wima ya namba.",
        exceeds: "Anaonyesha kwamba zote mbili zinabadilika namba ikibadilishwa."
      },
      {
        name: "Chati",
        objective: "O5",
        notYet: "Hakuna chati, au aina isiyo sahihi na bila kichwa.",
        meets: "Chati ya aina sahihi yenye kichwa kilicho wazi.",
        exceeds: "Chati inafanya jibu la swali lionekane kwa urahisi."
      },
      {
        name: "Matokeo kwa sentensi mbili",
        objective: "O6",
        notYet: "Hakuna jibu, au hakuna namba ya kuliunga mkono.",
        meets: "Sentensi moja yenye jibu na moja yenye namba inayoliunga mkono.",
        exceeds: "Kazi ilikaguliwa na kushirikiwa tu na watu wanaoihitaji."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaotumia spreadsheet kwa familia yao, kazi au kikundi cha jamii ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoorodhesha ujuzi wa spreadsheet kwenye wasifu (CV) au wanaopata kazi ya ofisini ndani ya siku 90",
      "Washirika wa jamii wanaripoti kutumia spreadsheet na chati zilizotengenezwa na wanafunzi katika ripoti au mikutano"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti (ya maktaba au ya nyumbani); app ya simu inafaa kwa spreadsheet ndogo",
      "Akaunti ya bure ya Google au Microsoft kwa ajili ya Google Sheets au Excel for the web",
      "Data halisi au ya mazoezi ya mwezi mmoja, kama wageni wa benki ya chakula au matumizi kwa aina",
      "Msaidizi wa AI wa bure wa kueleza fomula na makosa",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Toa seti ya data ya mazoezi kwa wanafunzi wasio na data yao wenyewe.",
      "Onyesha kupanga, kuchuja na SUM moja kwa moja kwenye projekta kabla wanafunzi hawajajaribu.",
      "Wakumbushe wanafunzi wasibandike kamwe majina, namba za simu au namba za akaunti kwenye AI; badala yake waeleze safu wima.",
      "Weka wanafunzi wapya kwa kompyuta pamoja na mwenzao mwenye uzoefu zaidi.",
      "Pima kazi ya mwisho kwa rubric, na utoe maoni juu ya mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
