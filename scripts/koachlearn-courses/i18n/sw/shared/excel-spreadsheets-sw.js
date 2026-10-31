"use strict";

// Koach Learn course (Swahili translation of shared/excel-spreadsheets.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Majina ya menyu na vitufe (Data, Insert, View, Share n.k.) yamebaki kwa Kiingereza kwa sababu ndivyo yanavyoonekana kwenye Excel na Google Sheets. Fomula zimebaki kama zilivyo.

module.exports = {
  id: "excel-spreadsheets-sw",
  lang: "sw",
  translationOf: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel na Lahajedwali kwa Kazi",
  skills: "Kuingiza na kupanga mwonekano wa data, Kuongeza jumla na wastani kwa SUM na AVERAGE, Kufanya maamuzi kwa IF, Kupanga na kuchuja, Kutengeneza chati rahisi, Kugandisha vichwa na kushiriki lahajedwali",
  outcome: "kutengeneza lahajedwali safi ya kazi katika Excel au Google Sheets: kuingiza data na kupanga mwonekano wake, kuongeza jumla na wastani kwa fomula, kuweka lebo kwenye mistari kwa IF, kupanga na kuchuja, kutengeneza chati rahisi, kugandisha mstari wa vichwa, na kuishiriki kwa usalama na mfanyakazi mwenzako.",
  about: [
    "Lahajedwali (spreadsheet) zinatumika karibu kila mahali pa kazi: duka linafuatilia mauzo, shirika lisilo la faida linafuatilia michango na saa za kujitolea, kiongozi wa kikundi anafuatilia zamu, na familia inafuatilia bajeti. Kuzijua vizuri ni ujuzi ambao waajiri wanautafuta.",
    "Kozi hii inafanya kazi katika Microsoft Excel (kwenye kompyuta, au bure kwenye wavuti katika office.com kwa akaunti ya Microsoft) na katika Google Sheets (bure kwa akaunti ya Google katika sheets.google.com). Fomula ni zile zile katika zote mbili. Menyu zikiwa na majina tofauti, somo linakuambia yote mawili au linaeleza kitendo.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" katika lahajedwali halisi. Utajenga lahajedwali moja ya mazoezi katika kozi nzima. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza lahajedwali ya \"Mauzo ya Wiki\" (au \"Saa za Kujitolea\" au \"Saa za Zamu\") yenye angalau mistari 8: vichwa kwa herufi nzito, pesa zikionyeshwa kama sarafu, jumla ya SUM na AVERAGE, safu ya IF inayoweka lebo kwenye kila mstari (kwa mfano \"Goal met\" au \"Below goal\"), data imepangwa kutoka kubwa hadi ndogo, kichujio kwenye mstari wa vichwa, chati ya safu, mstari wa juu umegandishwa, na faili imeshirikiwa na mtu mmoja kama mtazamaji (Viewer).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo, wafanyakazi wao, watafuta kazi na wajitolea wanaohitaji kufuatilia mauzo, saa, bidhaa au michango kazini. Wengi wameona lahajedwali lakini hawajawahi kutengeneza moja tangu mwanzo.",
    startingPoint: "Wanaweza kutumia kompyuta au simu, kuandika na kufungua kivinjari cha wavuti. Wanatumia kidogo au hawatumii kabisa fomula, kupanga, chati au mipangilio ya kushiriki.",
    gap: "Kazi nyingi na biashara ndogo zinatarajia ujuzi wa msingi wa lahajedwali, na kumbukumbu zilizowekwa kwenye karatasi au katika lahajedwali zenye fujo husababisha makosa. Kutengeneza lahajedwali safi yenye jumla, lebo, chati na kushiriki kwa usalama kunaokoa muda na kunamfanya mwanafunzi aajirike kwa urahisi zaidi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na hatua fupi",
      "Vifaa: kompyuta yenye Excel, Excel kwenye wavuti au Google Sheets inafaa zaidi; simu ni ngumu zaidi",
      "Muda: kama dakika 5 kwa kila somo pamoja na mazoezi ya vitendo",
      "Menyu zinatofautiana kidogo kati ya Excel na Google Sheets; zote zinaonyeshwa",
      "Faragha: hakuna nywila, namba za Social Security wala taarifa za benki katika mazoezi au lahajedwali zinazoshirikiwa"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwenye kompyuta wanaweza kuanza na kozi ya ujuzi wa msingi wa kompyuta."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Katika faili tupu ya Excel au Google Sheets", action: "kuingiza jedwali dogo lenye vichwa katika mstari wa 1 na kumbukumbu moja katika kila mstari", standard: "aina moja ya data katika kila safu" },
    { id: "O2", condition: "Ukipewa jedwali la data", action: "kupanga vichwa kwa herufi nzito, pesa kama sarafu na safu zitoshe", standard: "ili lisomeke wazi kwa kutazama mara moja" },
    { id: "O3", condition: "Ukipewa safu ya namba", action: "kuandika fomula za SUM, AVERAGE na za mistari na kuzinakili chini kwa kishikio cha kujaza (fill handle)", standard: "kwa majibu sahihi na bila ujumbe wa kosa" },
    { id: "O4", condition: "Ukipewa kanuni kama lengo la mauzo au saa 40", action: "kuandika fomula ya IF inayoweka lebo kwenye kila mstari", standard: "lebo sahihi kwenye kila mstari" },
    { id: "O5", condition: "Ukipewa jedwali lenye angalau mistari 8", action: "kupanga jedwali zima, kuongeza kichujio na kugandisha mstari wa vichwa", standard: "bila kuchanganya mistari yoyote" },
    { id: "O6", condition: "Ukipewa lebo na namba", action: "kutengeneza chati ya safu na kushiriki faili kwa ruhusa ya chini kabisa anayohitaji mtu", standard: "bila taarifa binafsi katika lahajedwali inayoshirikiwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujenga lahajedwali yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Seli, mistari, safu na kuingiza data",
          minutes: 5,
          goal: "Fungua lahajedwali mpya na uingize jedwali dogo la data lenye vichwa.",
          text: [
            "Lahajedwali ni gridi. Safu (columns) zinaenda juu na chini na zina herufi (A, B, C). Mistari (rows) inaenda kwa upana na ina namba (1, 2, 3). Kila kisanduku ni seli, inayoitwa kwa safu na mstari wake: seli ya juu kushoto ni A1. Faili moja inaweza kuwa na karatasi kadhaa, zinazoonekana kama vichupo chini.",
            "Kuingiza data, bofya seli, andika, kisha bonyeza Enter kushuka chini au Tab kwenda kulia. Weka vichwa katika mstari wa 1, kama Date, Item, Quantity na Price, na kumbukumbu moja katika kila mstari chini yake. Weka aina moja ya data katika kila safu: tarehe tu katika safu ya Date, namba tu katika Price.",
            "Kurekebisha seli, ibofye na uandike juu yake, au ibofye mara mbili kuhariri sehemu yake. Undo (Ctrl+Z kwenye Windows, Cmd+Z kwenye Mac) inarudisha badiliko lako la mwisho. Excel kwenye wavuti na Google Sheets zinahifadhi unapofanya kazi; katika Excel ya kompyuta, hifadhi mara kwa mara.",
            "Kuanza: katika Google Sheets, nenda sheets.google.com na uchague lahajedwali tupu. Katika Excel, fungua Excel (au Excel kwenye wavuti katika office.com) na uchague kitabu kipya tupu (blank workbook)."
          ],
          steps: ["Fungua lahajedwali tupu katika Google Sheets au Excel.", "Bofya seli A1 na uandike kichwa chako cha kwanza. Bonyeza Tab kwenda kulia.", "Andika vichwa vingine katika mstari wa 1.", "Ingiza kumbukumbu moja kwa kila mstari kuanzia mstari wa 2.", "Ipe faili jina wazi, kama \"Mauzo ya Wiki - Machi\"."],
          words: [["Seli (cell)", "kisanduku kimoja katika gridi, kinachoitwa kwa herufi ya safu na namba ya mstari, kama B3."], ["Kichwa (header)", "lebo iliyo juu ya safu inayosema kilichomo ndani yake."], ["Workbook", "faili ya Excel; inaweza kuwa na karatasi kadhaa."]],
          slides: [
            { title: "Gridi", bullets: ["Safu zina herufi; mistari ina namba", "Seli inaitwa kama A1 au B3", "Vichupo vya chini ni karatasi tofauti"] },
            { title: "Kuingiza data", bullets: ["Bofya, andika, kisha Enter (chini) au Tab (kulia)", "Vichwa katika mstari wa 1", "Kumbukumbu moja kwa mstari, aina moja ya data kwa safu"] },
            { title: "Kurekebisha na kuhifadhi", bullets: ["Andika juu ya seli au bofya mara mbili kuhariri", "Undo: Ctrl+Z (Windows) au Cmd+Z (Mac)", "Matoleo ya wavuti yanahifadhi unapoendelea"] }
          ],
          tryIt: "Fungua lahajedwali tupu. Katika mstari wa 1 andika vichwa Day, Item, Quantity, Price. Ingiza mistari 8 ya mauzo ya mazoezi (kwa mfano Mon, Coffee, 12, 3.50). Ipe faili jina \"Mauzo ya Mazoezi\".",
          youCanNow: "kufungua lahajedwali, kupata seli yoyote kwa jina lake, na kuingiza jedwali safi lenye vichwa.",
          quickCheck: [
            { objective: "O1", q: "Seli ni nini?", options: ["Safu nzima", "Kichupo kilicho chini ya faili", "Kisanduku kimoja katika gridi, kinachoitwa kwa safu na mstari wake", "Jina la faili"], answer: 2, why: "Kila kisanduku katika gridi ni seli, inayoitwa kwa herufi ya safu na namba ya mstari, kama A1." },
            { objective: "O1", q: "Unatengeneza orodha ya bei. Nini kinaingia katika safu ya Price?", options: ["Bei na majina ya bidhaa yamechanganywa", "Bei tu", "Bei na maelezo kuhusu kila mteja", "Chochote kinachotosha"], answer: 1, why: "Weka aina moja ya data katika kila safu, hivyo safu ya Price ina namba tu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanga mwonekano ili isomeke kwa urahisi",
          minutes: 4,
          goal: "Panga mwonekano wa vichwa, pesa na upana wa safu ili lahajedwali iwe wazi.",
          text: [
            "Kupanga mwonekano (formatting) kunabadilisha jinsi data inavyoonekana, si data yenyewe. Mwonekano mzuri unafanya lahajedwali isomeke kwa urahisi kwa kutazama mara moja.",
            "Fanya vichwa viwe kwa herufi nzito: chagua mstari wa 1 na ubofye kitufe cha B (Bold) kwenye upau wa zana, au bonyeza Ctrl+B (Cmd+B kwenye Mac). Unaweza pia kuongeza rangi ya kujaza kwenye mstari wa vichwa.",
            "Onyesha pesa kama sarafu: chagua safu ya Price, kisha fungua menyu ya muundo wa namba na uchague Currency. Katika Excel hii iko kwenye kichupo cha Home; katika Google Sheets iko chini ya Format, kisha Number, na pia kuna kitufe cha $ kwenye upau wa zana.",
            "Fanya safu zitoshe: bofya mara mbili mstari ulio kati ya herufi mbili za safu juu, na safu ya kushoto itabadilika ukubwa kutosha neno lake refu zaidi. Hii inafanya kazi katika Excel na Google Sheets."
          ],
          steps: ["Chagua mstari wa 1 kwa kubofya namba 1 upande wa kushoto.", "Bofya Bold (B) au bonyeza Ctrl+B.", "Chagua safu ya Price kwa kubofya herufi yake.", "Chagua Currency kutoka menyu ya muundo wa namba (Excel: kichupo cha Home; Sheets: Format > Number, au kitufe cha $).", "Bofya mara mbili mpaka kati ya herufi za safu ili upana ujirekebishe."],
          words: [["Kupanga mwonekano (formatting)", "kubadilisha jinsi data inavyoonekana (herufi nzito, rangi, sarafu) bila kubadilisha thamani."], ["Kuchagua (select)", "kubofya au kuburuta juu ya seli ili kuzichagua kabla ya kuzifanyia kitu."]],
          slides: [
            { title: "Mwonekano unabadilisha sura", bullets: ["Si thamani iliyo ndani", "Unafanya lahajedwali isomeke kwa urahisi"] },
            { title: "Vichwa kwa herufi nzito", bullets: ["Chagua mstari wa 1", "Bofya B au bonyeza Ctrl+B (Cmd+B kwenye Mac)", "Ongeza rangi ya kujaza ukipenda"] },
            { title: "Pesa kama sarafu", bullets: ["Chagua safu", "Excel: menyu ya muundo wa namba, kichupo cha Home", "Sheets: Format > Number, au kitufe cha $"] },
            { title: "Fanya safu zitoshe", bullets: ["Bofya mara mbili mstari kati ya herufi za safu", "Inafanya kazi katika Excel na Google Sheets"] }
          ],
          tryIt: "Katika lahajedwali yako ya Mauzo ya Mazoezi, fanya mstari wa 1 uwe wa herufi nzito wenye rangi nyepesi ya kujaza, onyesha safu ya Price kama sarafu, na urekebishe upana wa kila safu.",
          youCanNow: "kupanga mwonekano wa vichwa, pesa na upana wa safu ili lahajedwali iwe wazi na ya kitaalamu.",
          quickCheck: [
            { objective: "O2", q: "Kupanga mwonekano kunabadilisha nini?", options: ["Jinsi data inavyoonekana, si data yenyewe", "Namba zilizo katika seli zako", "Fomula katika lahajedwali yako", "Nani anaweza kufungua faili"], answer: 0, why: "Kupanga mwonekano kunabadilisha jinsi data inavyoonekana, kama herufi nzito au sarafu, si thamani yake." },
            { objective: "O2", q: "Safu ni nyembamba mno na inakata maandishi. Unafanya nini?", options: ["Futa maingizo marefu", "Fanya herufi ziwe ndogo sana", "Andika upya maandishi katika seli mbili", "Bofya mara mbili mstari kati ya herufi za safu juu"], answer: 3, why: "Kubofya mpaka mara mbili kunabadilisha ukubwa wa safu kutosha neno lake refu zaidi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jumla na wastani kwa SUM na AVERAGE",
          minutes: 5,
          goal: "Andika fomula za SUM na AVERAGE na unakili fomula chini ya safu.",
          text: [
            "Fomula daima inaanza na alama ya usawa (=). Inaweza kufanya hesabu kwa majina ya seli: =C2*D2 inazidisha idadi iliyo katika C2 kwa bei iliyo katika D2. Ukibadilisha C2, jibu linajisasisha lenyewe.",
            "SUM inajumlisha kundi la seli (range). Kundi linaandikwa seli ya kwanza, nukta mbili, seli ya mwisho: =SUM(E2:E9) inajumlisha E2 hadi E9. AVERAGE inatafuta wastani: =AVERAGE(E2:E9). Zote mbili zinafanya kazi kwa njia moja katika Excel na Google Sheets.",
            "Kunakili fomula chini ya safu, bofya seli yenye fomula, kisha buruta kisanduku kidogo kilicho kona yake ya chini kulia (kishikio cha kujaza, fill handle) kwenda chini. Majina ya seli yanabadilika kwa kila mstari: E2 inakuwa E3, E4 na kuendelea.",
            "Kagua kazi yako: fomula ikionyesha kosa kama #NAME? au #VALUE!, tafuta kosa la tahajia katika jina la kazi (function) au maandishi katika safu ya namba."
          ],
          steps: ["Katika E1 andika kichwa Total.", "Katika E2 andika =C2*D2 na ubonyeze Enter.", "Buruta kishikio cha kujaza kutoka E2 hadi mstari wa mwisho.", "Chini ya mstari wa mwisho, andika =SUM(E2:E9) kwa jumla kuu.", "Chini yake, andika =AVERAGE(E2:E9) kwa wastani wa mauzo."],
          words: [["Fomula", "hesabu katika seli inayoanza na = na inayojisasisha data ikibadilika."], ["Kundi la seli (range)", "kipande cha seli kinachoandikwa ya kwanza:ya mwisho, kama E2:E9."], ["Kishikio cha kujaza (fill handle)", "kisanduku kidogo kilicho chini kulia mwa seli iliyochaguliwa unachokiburuta kunakili."]],
          slides: [
            { title: "Fomula zinaanza na =", bullets: ["=C2*D2 inazidisha seli mbili", "Badilisha data na jibu linajisasisha"] },
            { title: "SUM na AVERAGE", bullets: ["=SUM(E2:E9) inajumlisha kundi la seli", "=AVERAGE(E2:E9) inatafuta wastani", "Sawa katika Excel na Google Sheets"] },
            { title: "Nakili fomula chini", bullets: ["Buruta kishikio cha kujaza kilicho kona ya seli", "Majina ya seli yanajirekebisha kwa kila mstari"] },
            { title: "Makosa", bullets: ["#NAME?: kagua tahajia", "#VALUE!: maandishi mahali pa namba"] }
          ],
          tryIt: "Katika lahajedwali yako, ongeza safu ya Total yenye =C2*D2 iliyonakiliwa chini, kisha ongeza jumla kuu kwa SUM na wastani wa mauzo kwa AVERAGE chini ya safu. Badilisha idadi moja na utazame jumla zikijisasisha.",
          youCanNow: "kuandika fomula za SUM na AVERAGE, kuzidisha seli, na kunakili fomula chini ya safu.",
          quickCheck: [
            { objective: "O3", q: "=C2*D2 inafanya nini?", options: ["Inajumlisha C2 na D2", "Inazidisha thamani ya C2 kwa thamani ya D2", "Inanakili C2 ndani ya D2", "Inaonyesha kosa"], answer: 1, why: "Alama * inazidisha, hivyo =C2*D2 inazidisha idadi kwa bei." },
            { objective: "O3", q: "Unahitaji jumla ya E2 hadi E9. Unaandika nini?", options: ["SUM E2 to E9", "=E2+E9", "=SUM(E2:E9)", "=TOTAL E2-E9"], answer: 2, why: "SUM inajumlisha kundi linaloandikwa seli ya kwanza, nukta mbili, seli ya mwisho, na kila fomula inaanza na =." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujenga lahajedwali yako",
        questions: [
          { objective: "O1", q: "Seli iliyo katika safu C, mstari wa 4 inaitwaje?", options: ["4C", "C4", "Mstari C", "Seli 34"], answer: 1, why: "Seli inaitwa kwa herufi ya safu yake, kisha namba ya mstari wake." },
          { objective: "O1", q: "Vichwa vyako viwekwe wapi?", options: ["Katika mstari wa 1, kimoja kwa kila safu", "Chini kabisa", "Katika seli zozote ovyo", "Katika faili tofauti"], answer: 0, why: "Vichwa katika mstari wa 1 vinaweka lebo kwa kila safu ya data iliyo chini." },
          { objective: "O2", q: "Unataka bei zionyeshwe na alama ya dola. Unafanya nini?", options: ["Andika $ kabla ya kila namba", "Fanya safu iwe ya herufi nzito", "Futa bei", "Chagua Currency kutoka menyu ya muundo wa namba"], answer: 3, why: "Muundo wa sarafu unaongeza alama na desimali kwa kila seli." },
          { objective: "O3", q: "Fomula ipi inajumlisha seli B2 hadi B10?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Fomula zinaanza na =, na kundi la seli linatumia nukta mbili." },
          { objective: "O3", q: "Nini kinatokea unapoburuta kishikio cha kujaza chini kutoka seli yenye =C2*D2?", options: ["Fomula inanakiliwa na kujirekebisha kwa kila mstari", "Seli inafutwa", "Kila mstari unapata =C2*D2 kama ilivyo", "Lahajedwali inashirikiwa"], answer: 0, why: "Majina ya seli yanabadilika mstari kwa mstari: C3*D3, C4*D4 na kuendelea." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi na data yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kufanya maamuzi kwa IF",
          minutes: 5,
          goal: "Andika fomula ya IF inayoweka lebo kwenye kila mstari kulingana na kanuni.",
          text: [
            "IF inakagua sharti na inaonyesha jibu moja likiwa kweli na jingine likiwa si kweli. Mpangilio ni =IF(jaribio, thamani ikiwa kweli, thamani ikiwa si kweli).",
            "Mifano: =IF(E2>=50,\"Goal met\",\"Below goal\") inaweka lebo kwenye mauzo. =IF(C2>40,\"Overtime\",\"Regular\") inaweka lebo kwenye saa za wiki. =IF(D2=\"\",\"Missing\",\"OK\") inaonyesha seli iliyo tupu. Majibu ya maandishi yanaingia ndani ya alama za nukuu mbili; namba haziingii.",
            "Alama za kulinganisha: > kubwa kuliko, < ndogo kuliko, >= kubwa kuliko au sawa na, <= ndogo kuliko au sawa na, = sawa na, <> si sawa na.",
            "IF inafanya kazi kwa njia moja katika Excel na Google Sheets. Mpangilio wa eneo la lahajedwali yako ukitumia koma kwa desimali, kitenganishi kinaweza kuwa nukta-mkato (;) badala ya koma; programu itakuonyesha mpangilio unapoandika."
          ],
          steps: ["Ongeza kichwa, kama Status, katika safu tupu inayofuata.", "Katika mstari wa 2 andika =IF(", "Andika jaribio, kama E2>=50, kisha koma.", "Andika jibu la kweli ndani ya nukuu, koma, jibu la si kweli ndani ya nukuu, na ).", "Bonyeza Enter na unakili fomula chini kwa kishikio cha kujaza."],
          words: [["IF", "kazi (function) inayoonyesha jibu moja jaribio likiwa kweli na jingine likiwa si kweli."], ["Sharti (condition)", "jaribio katika fomula ya IF, kama E2>=50."]],
          slides: [
            { title: "Mpangilio wa IF", bullets: ["=IF(jaribio, ikiwa kweli, ikiwa si kweli)", "Sawa katika Excel na Google Sheets"] },
            { title: "Mifano", bullets: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(C2>40,\"Overtime\",\"Regular\")", "Maandishi ndani ya nukuu mbili; namba bila nukuu"] },
            { title: "Alama za kulinganisha", bullets: ["> kubwa kuliko, < ndogo kuliko", ">= angalau, <= isiyozidi", "= sawa na, <> si sawa na"] }
          ],
          tryIt: "Ongeza safu ya Status kwenye lahajedwali yako yenye =IF(E2>=50,\"Goal met\",\"Below goal\") na uinakili chini. Badilisha jumla moja ili ivuke 50 na utazame lebo ikibadilika.",
          youCanNow: "kuandika fomula ya IF inayoweka lebo kwenye mistari yenyewe kulingana na kanuni.",
          quickCheck: [
            { objective: "O4", q: "Kazi ya IF inafanya nini?", options: ["Inajumlisha safu ya namba", "Inapanga jedwali", "Inatengeneza chati", "Inaonyesha jibu moja jaribio likiwa kweli na jingine likiwa si kweli"], answer: 3, why: "Mpangilio ni =IF(jaribio, thamani ikiwa kweli, thamani ikiwa si kweli)." },
            { objective: "O4", q: "Unataka kuweka lebo \"Goal met\" kwenye mauzo ya 50 au zaidi. Unaandika fomula ipi katika mstari wa 2?", options: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(E2<50,Goal met,Below goal)", "=SUM(E2>=50)", "=IF(\"Goal met\")"], answer: 0, why: "Jaribio E2>=50 linakuja kwanza, na majibu ya maandishi yanaingia ndani ya nukuu mbili." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga, kuchuja na kugandisha mstari wa vichwa",
          minutes: 5,
          goal: "Panga data yako, ichuje ili uone baadhi ya mistari tu, na ugandishe mstari wa vichwa.",
          text: [
            "Kupanga (sort) kunaweka mistari kwa mpangilio, kama mauzo makubwa zaidi kwanza au majina kutoka A hadi Z. Kuchuja (filter) kunaficha mistari usiyoihitaji sasa hivi, kama kuonyesha mistari ya \"Below goal\" tu. Hakuna kati ya hivi viwili kinachofuta data.",
            "Excel: bofya seli yoyote katika jedwali lako, nenda kichupo cha Data, na uchague Sort kuchagua safu na mpangilio, au uchague Filter kuongeza mishale ya kushuka kwenye mstari wa vichwa. Google Sheets: chagua data yako, fungua menyu ya Data na uchague Sort range (weka alama kwamba data ina mstari wa vichwa), au uchague Create a filter kuongeza mishale. Bofya mshale katika kichwa ili kupanga au kuweka alama kwenye thamani tu unazotaka kuona.",
            "Daima panga jedwali zima, si safu moja peke yake, la sivyo mistari itachanganyika. Kuchagua seli moja ndani ya jedwali katika Excel, au kundi zima katika Sheets, kunaweka mistari pamoja.",
            "Kugandisha (freeze) kunaweka mstari wa vichwa kwenye skrini unaposhuka chini kwenye orodha ndefu. Excel: kichupo cha View, Freeze Panes, kisha Freeze Top Row. Google Sheets: menyu ya View, Freeze, kisha 1 row."
          ],
          steps: ["Bofya ndani ya jedwali lako (Excel) au chagua jedwali zima (Sheets).", "Kupanga: Excel kichupo cha Data > Sort; Sheets Data > Sort range, yenye mstari wa vichwa.", "Kuchuja: Excel kichupo cha Data > Filter; Sheets Data > Create a filter.", "Tumia mshale ulio kwenye kichwa kuonyesha mistari unayotaka tu.", "Kugandisha: Excel View > Freeze Panes > Freeze Top Row; Sheets View > Freeze > 1 row."],
          words: [["Kupanga (sort)", "kuweka mistari kwa mpangilio kwa safu moja, huku kila mstari ukibaki pamoja."], ["Kuchuja (filter)", "kuficha mistari isiyolingana na unachochagua, bila kuifuta."], ["Kugandisha (freeze)", "kuweka mistari au safu kwenye skrini unaposogeza."]],
          slides: [
            { title: "Kupanga na kuchuja", bullets: ["Kupanga: weka mistari kwa mpangilio", "Kuchuja: onyesha mistari unayotaka tu", "Hakuna kinachofuta data"] },
            { title: "Katika Excel", bullets: ["Kichupo cha Data > Sort", "Kichupo cha Data > Filter kinaongeza mishale kwenye vichwa", "View > Freeze Panes > Freeze Top Row"] },
            { title: "Katika Google Sheets", bullets: ["Data > Sort range (data ina mstari wa vichwa)", "Data > Create a filter", "View > Freeze > 1 row"] },
            { title: "Weka mistari pamoja", bullets: ["Panga jedwali zima, kamwe si safu moja peke yake"] }
          ],
          tryIt: "Panga lahajedwali yako kwa Total kutoka kubwa hadi ndogo. Ongeza kichujio na uonyeshe mistari ya \"Below goal\" tu, kisha ondoa kichujio. Gandisha mstari wa juu na ushuke chini kukagua kwamba vichwa vinabaki.",
          youCanNow: "kupanga na kuchuja data kwa usalama na kugandisha mstari wa vichwa.",
          quickCheck: [
            { objective: "O5", q: "Kugandisha mstari wa vichwa kunafanya nini?", options: ["Kunafunga faili ili mtu yeyote asiweze kuhariri", "Kunaweka mstari wa vichwa kwenye skrini unaposhuka chini", "Kunafuta mistari iliyo chini", "Kunageuza kichwa kuwa bluu"], answer: 1, why: "Kugandisha kunaweka kichwa kionekane unaposogeza kwenye orodha ndefu." },
            { objective: "O5", q: "Unataka kuona mistari ya \"Below goal\" tu kwa sasa, bila kupoteza data yoyote. Unatumia nini?", options: ["Futa mistari mingine", "Panga safu moja peke yake", "Kichujio kwenye mstari wa vichwa", "Freeze Panes"], answer: 2, why: "Kichujio kinaficha mistari usiyoihitaji sasa hivi na hakifuti chochote." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutengeneza chati na kushiriki lahajedwali yako",
          minutes: 5,
          goal: "Tengeneza chati rahisi ya safu na ushiriki lahajedwali kwa ruhusa sahihi.",
          text: [
            "Chati inageuza namba kuwa picha. Chati ya safu (column chart) inafaa kulinganisha kiasi, kama mauzo kwa siku au saa za kujitolea kwa kila mtu.",
            "Chagua safu mbili: lebo (kama Day) na namba (kama Total), pamoja na vichwa. Kuchagua safu mbili zisizokaribiana, shikilia Ctrl (Cmd kwenye Mac) unapochagua ya pili. Excel: nenda kichupo cha Insert na uchague chati ya safu (au Recommended Charts). Google Sheets: fungua menyu ya Insert na uchague Chart; kihariri cha chati kinafunguka upande wa kulia, ambapo unaweza kuchagua Column chart. Bofya kichwa cha chati kukibadilisha jina.",
            "Kushiriki: katika Google Sheets, bofya kitufe cha Share juu kulia, andika barua pepe ya mtu, na uchague Viewer, Commenter au Editor. Katika Excel, faili lazima ihifadhiwe kwenye OneDrive au SharePoint; kisha bofya Share, ongeza barua pepe, na uchague kama anaweza kuhariri au kutazama tu.",
            "Shiriki kwa usalama: toa ruhusa ya chini kabisa anayohitaji mtu (kutazama tu kama anahitaji kusoma tu), na kamwe usiweke nywila, namba za Social Security au taarifa za benki katika lahajedwali inayoshirikiwa."
          ],
          steps: ["Chagua safu ya lebo na safu ya namba, pamoja na vichwa.", "Excel: kichupo cha Insert > chati ya safu. Sheets: Insert > Chart, kisha chagua Column chart.", "Badilisha jina la kichwa cha chati.", "Bofya Share, ongeza barua pepe ya mtu.", "Chagua kutazama tu isipokuwa anahitaji kuhariri, kisha tuma."],
          words: [["Chati ya safu (column chart)", "chati yenye nguzo zilizosimama, inayofaa kulinganisha kiasi."], ["Viewer (mtazamaji)", "mtu anayeweza kuona faili iliyoshirikiwa lakini hawezi kuibadilisha."], ["Editor (mhariri)", "mtu anayeweza kubadilisha faili iliyoshirikiwa."]],
          slides: [
            { title: "Chagua chati sahihi", bullets: ["Chati ya safu: linganisha kiasi", "Mfano: mauzo kwa siku, saa kwa kila mtu"] },
            { title: "Tengeneza chati", bullets: ["Chagua lebo na namba pamoja na vichwa", "Excel: kichupo cha Insert > chati ya safu", "Sheets: Insert > Chart > Column chart"] },
            { title: "Ishiriki", bullets: ["Bofya Share, ongeza barua pepe", "Chagua kutazama au kuhariri", "Faili za Excel lazima ziwe kwenye OneDrive au SharePoint"] },
            { title: "Shiriki kwa usalama", bullets: ["Toa ruhusa ya chini kabisa inayohitajika", "Hakuna nywila, namba za kitambulisho au za benki katika lahajedwali zinazoshirikiwa"] }
          ],
          tryIt: "Kazi ya mwisho: maliza lahajedwali yako yenye angalau mistari 8, vichwa vya herufi nzito, sarafu, SUM na AVERAGE, safu ya Status ya IF, iliyopangwa kutoka kubwa hadi ndogo, kichujio, chati ya safu ya Day na Total, na mstari wa juu umegandishwa. Kisha ishiriki na mtu mmoja kama mtazamaji (Viewer).",
          youCanNow: "kutengeneza chati ya safu kutoka kwa data yako na kushiriki lahajedwali kwa ruhusa sahihi.",
          quickCheck: [
            { objective: "O6", q: "Chati ipi inafaa kulinganisha kiasi, kama saa kwa kila mtu?", options: ["Chati ya safu", "Lahajedwali tupu", "Kichujio", "Mstari uliogandishwa"], answer: 0, why: "Somo linasema chati ya safu inafaa kulinganisha kiasi." },
            { objective: "O6", q: "Meneja wako anahitaji kusoma lahajedwali yako tu. Unampa ruhusa ipi unapoishiriki?", options: ["Editor", "Owner", "Yeyote mwenye kiungo anaweza kuhariri", "Viewer"], answer: 3, why: "Toa ruhusa ya chini kabisa anayohitaji mtu; kutazama tu kama anahitaji kusoma tu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi na data yako",
        questions: [
          { objective: "O4", q: "=IF(C2>40,\"Overtime\",\"Regular\") inaonyesha nini C2 ikiwa 45?", options: ["Regular", "45", "Overtime", "Kosa"], answer: 2, why: "45 ni kubwa kuliko 40, hivyo jibu la kweli linaonyeshwa." },
          { objective: "O4", q: "Katika fomula ya IF, majibu ya maandishi yanaingia wapi?", options: ["Ndani ya nukuu mbili", "Ndani ya mabano", "Baada ya alama #", "Popote pale hapana"], answer: 0, why: "Majibu ya maandishi lazima yawe ndani ya nukuu mbili." },
          { objective: "O5", q: "Kichujio kinafanya nini?", options: ["Kinafuta mistari", "Kinabadilisha namba", "Kinashiriki faili", "Kinaficha mistari isiyolingana, bila kuifuta"], answer: 3, why: "Kuchuja kunaficha mistari tu; ukikiondoa, inaonekana tena." },
          { objective: "O5", q: "Unawekaje mstari wa vichwa kwenye skrini katika Google Sheets?", options: ["Format > Bold", "View > Freeze > 1 row", "Insert > Chart", "Data > Sort range"], answer: 1, why: "Kugandisha mstari wa 1 kunauweka uonekane unaposogeza." },
          { objective: "O6", q: "Mjitolea anahitaji kusoma lahajedwali yako tu. Unampa ruhusa ipi?", options: ["Editor", "Owner", "Viewer", "Hakuna; mtumie nywila yako"], answer: 2, why: "Toa ruhusa ya chini kabisa anayohitaji mtu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Excel na Lahajedwali kwa Kazi",
    questions: [
      { objective: "O1", q: "Katika lahajedwali, safu zina lebo za:", options: ["Namba", "Herufi", "Rangi", "Tarehe"], answer: 1, why: "Safu zinatumia herufi; mistari inatumia namba." },
      { objective: "O1", q: "Kitufe kipi kinakupeleka seli moja kulia baada ya kuandika?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab inaenda kulia; Enter inashuka chini." },
      { objective: "O1", q: "Mpangilio upi ni bora kwa orodha ya michango?", options: ["Kila mchango katika faili tofauti", "Data yote katika seli moja", "Seli ovyo katika lahajedwali", "Vichwa katika mstari wa 1 na mchango mmoja kwa kila mstari"], answer: 3, why: "Kumbukumbu moja kwa kila mstari chini ya vichwa wazi kunafanya data itumike kwa urahisi." },
      { objective: "O1", q: "Umeandika namba isiyo sahihi. Njia ya haraka zaidi ya kurudisha badiliko lako la mwisho ni:", options: ["Funga faili", "Undo: Ctrl+Z (Cmd+Z kwenye Mac)", "Futa safu", "Anza faili mpya"], answer: 1, why: "Undo inarudisha kitendo chako cha mwisho." },
      { objective: "O2", q: "Kupanga namba kama sarafu:", options: ["Kunabadilisha jinsi inavyoonekana, si thamani yake", "Kunaongeza thamani mara mbili", "Kunafuta namba", "Kunaigeuza kuwa maandishi usiyoweza kujumlisha"], answer: 0, why: "Kupanga mwonekano kunabadilisha sura tu." },
      { objective: "O2", q: "Unafanyaje safu itoshe neno lake refu zaidi?", options: ["Andika nafasi tupu", "Futa kichwa", "Bofya mara mbili mstari kati ya herufi za safu", "Bonyeza Enter mara mbili"], answer: 2, why: "Kubofya mpaka mara mbili kunarekebisha upana wa safu wenyewe." },
      { objective: "O3", q: "Kila fomula inaanza na:", options: ["Alama ya kujumlisha tu", "Alama ya dola", "Herufi", "Alama ya usawa"], answer: 3, why: "Alama = inaiambia programu kwamba ni fomula." },
      { objective: "O3", q: "Ipi inatafuta wastani wa D2 hadi D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE yenye kundi la seli linaloandikwa ya kwanza:ya mwisho." },
      { objective: "O3", q: "Unabadilisha idadi inayotumiwa na fomula ya SUM. Nini kinatokea kwa jumla?", options: ["Hakuna kitu", "Inajisasisha yenyewe", "Inaonyesha kosa", "Inafutwa"], answer: 1, why: "Fomula zinahesabu upya data yake ikibadilika." },
      { objective: "O3", q: "Seli inaonyesha #NAME?. Sababu inayowezekana ni ipi?", options: ["Faili imeshirikiwa", "Safu ni ya herufi nzito", "Jina la kazi (function) limekosewa tahajia", "Lahajedwali imegandishwa"], answer: 2, why: "#NAME? kwa kawaida inamaanisha programu haitambui jina la kazi." },
      { objective: "O3", q: "Kishikio cha kujaza (fill handle) ni nini?", options: ["Menyu", "Kisanduku kidogo kilicho kona ya chini kulia ya seli kinachotumiwa kunakili", "Kitufe cha Share", "Aina ya chati"], answer: 1, why: "Kukiburuta kunanakili fomula na kurekebisha majina ya seli." },
      { objective: "O4", q: "Fomula ipi inaonyesha \"Missing\" D2 ikiwa tupu na \"OK\" isipokuwa tupu?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "Jaribio D2=\"\" linakagua seli iliyo tupu." },
      { objective: "O4", q: "<> inamaanisha nini katika fomula?", options: ["Kubwa kuliko", "Sawa na", "Ndogo kuliko", "Si sawa na"], answer: 3, why: "<> inamaanisha si sawa na." },
      { objective: "O5", q: "Katika Excel, Sort na Filter ziko wapi?", options: ["Kichupo cha File", "Kichupo cha Data", "Kichupo cha Help", "Kichupo cha Draw"], answer: 1, why: "Sort na Filter ziko kwenye kichupo cha Data cha Excel." },
      { objective: "O5", q: "Katika Google Sheets, unaongezaje mishale ya kichujio kwenye mstari wa vichwa?", options: ["Data > Create a filter", "Insert > Chart", "Format > Number", "File > Share"], answer: 0, why: "Create a filter inaongeza mishale kwenye kila kichwa." },
      { objective: "O5", q: "Kwa nini usipange kamwe safu moja tu ya jedwali?", options: ["Ni polepole mno", "Inafuta lahajedwali", "Mistari inachanganyika", "Inashiriki faili"], answer: 2, why: "Kupanga safu moja peke yake kunatenganisha thamani na sehemu nyingine ya mstari wake." },
      { objective: "O5", q: "Katika Excel, unawekaje mstari wa 1 uonekane unaposogeza?", options: ["Insert > Chart", "Home > Bold", "Data > Filter", "View > Freeze Panes > Freeze Top Row"], answer: 3, why: "Freeze Top Row inaweka kichwa kwenye skrini." },
      { objective: "O6", q: "Chati ipi ni bora kulinganisha mauzo kwa siku?", options: ["Chati ya safu", "Bila chati", "Chati isiyo na lebo", "Picha ya chati ya duara uliyoichora"], answer: 0, why: "Chati za safu zinalinganisha kiasi kando kwa kando." },
      { objective: "O6", q: "Katika Google Sheets, unaanzaje chati?", options: ["Data > Sort range", "Insert > Chart", "View > Freeze", "Format > Bold"], answer: 1, why: "Insert > Chart inafungua kihariri cha chati." },
      { objective: "O6", q: "Nini KAMWE kisiingie katika lahajedwali unayoishiriki?", options: ["Jumla za mauzo", "Majina ya bidhaa", "Nywila na namba za Social Security", "Tarehe"], answer: 2, why: "Namba za binafsi zinaweza kutumiwa vibaya faili ikishirikiwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Jedwali safi la data",
        objective: "O1",
        notYet: "Mistari chini ya 8, vichwa havipo, au data iliyochanganyika katika safu.",
        meets: "Vichwa katika mstari wa 1, angalau mistari 8, aina moja ya data kwa kila safu.",
        exceeds: "Faili na kichupo cha karatasi vina majina wazi."
      },
      {
        name: "Inasomeka kwa urahisi",
        objective: "O2",
        notYet: "Vichwa ni vya kawaida, pesa hazina muundo wa sarafu, au maandishi yamekatika.",
        meets: "Vichwa kwa herufi nzito, pesa zinaonyeshwa kama sarafu, safu zinatosha maingizo yake.",
        exceeds: "Mstari wa vichwa pia una rangi ya kujaza na lahajedwali inaonekana nadhifu."
      },
      {
        name: "Jumla na wastani",
        objective: "O3",
        notYet: "Jumla zimeandikwa kwa mkono au fomula inaonyesha kosa.",
        meets: "Jumla ya SUM na AVERAGE zinazotoa majibu sahihi.",
        exceeds: "Jumla za mistari zinatumia fomula iliyonakiliwa chini kwa kishikio cha kujaza."
      },
      {
        name: "Lebo za IF",
        objective: "O4",
        notYet: "Hakuna safu ya IF, au lebo si sahihi.",
        meets: "Safu ya IF inaweka lebo sahihi kwenye kila mstari, kama \"Goal met\" au \"Below goal\".",
        exceeds: "Anaweza kueleza jaribio na kubadilisha namba ya lengo ili kusasisha lebo."
      },
      {
        name: "Imepangwa, imechujwa na imegandishwa",
        objective: "O5",
        notYet: "Mistari imechanganyika, au kupanga, kichujio au kugandisha hakupo.",
        meets: "Data imepangwa kutoka kubwa hadi ndogo, kichujio kwenye mstari wa vichwa, na mstari wa juu umegandishwa.",
        exceeds: "Anaweza kutumia kichujio kuonyesha lebo moja tu kisha kukiondoa."
      },
      {
        name: "Chati na kushiriki kwa usalama",
        objective: "O6",
        notYet: "Hakuna chati, au imeshirikiwa kwa ruhusa ya kuhariri bila kufikiri au ikiwa na data binafsi.",
        meets: "Chati ya safu yenye kichwa, na faili imeshirikiwa na mtu mmoja kama mtazamaji (Viewer), bila data binafsi.",
        exceeds: "Anaweza kusema kwa nini alichagua kiwango hicho cha ruhusa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia lahajedwali kazini au katika biashara yao ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoorodhesha ujuzi wa lahajedwali katika CV (wasifu wa kazi) au wanaopata kazi inayoutumia",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye Excel, Excel kwenye wavuti au Google Sheets (bure kwa akaunti ya Google)",
      "Data ya mfano: wiki moja ya mauzo, saa za zamu au saa za kujitolea yenye angalau mistari 8",
      "Barua pepe ya mtu mmoja wa kushiriki naye lahajedwali iliyokamilika",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Onyesha kila hatua mara moja kwenye skrini kubwa katika Excel na Google Sheets, kisha waache wanafunzi wairudie.",
      "Wape wanafunzi data ya mfano iliyo tayari ili mtu yeyote asilazimike kutumia data halisi ya wateja au ya binafsi.",
      "Angalia wanafunzi wanaopanga safu moja peke yake; waambie warudishe (Undo) na wapange jedwali zima.",
      "Wakumbushe wanafunzi kushiriki kama Viewer isipokuwa mtu anahitaji kuhariri, na kamwe wasiweke nywila au namba za kitambulisho katika lahajedwali inayoshirikiwa.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
