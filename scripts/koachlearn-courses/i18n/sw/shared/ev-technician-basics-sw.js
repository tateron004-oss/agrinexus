"use strict";

// Koach Learn course (Swahili translation of shared/ev-technician-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Certification-prep course: it does not grant any certification. No high-voltage work.

module.exports = {
  id: "ev-technician-basics-sw",
  lang: "sw",
  translationOf: "ev-technician-basics",
  category: "Workforce Development",
  name: "Misingi ya Ufundi wa Magari ya Umeme (EV)",
  skills: "Kutaja sehemu za EV, Kufuata sheria za usalama wa umeme wa volteji kubwa, Kufanya hesabu za kuchaji, Kupanga huduma ya EV ya volteji ndogo, Kupanga njia ya vyeti vya ASE",
  outcome: "kueleza jinsi gari la umeme linavyofanya kazi, kufuata sheria za usalama wa volteji kubwa ambazo mfanyakazi mpya wa gereji lazima azishike, kukokotoa muda wa kuchaji kwa mazoezi, kupanga huduma ya kila siku ambayo EV inahitaji, na kuandika mpango wako wenye tarehe kuelekea vyeti vya ASE na kazi ya ufundi wa EV.",
  about: [
    "Kila mwaka kuna magari mengi zaidi ya umeme na hybrid barabarani, na gereji zinahitaji mafundi wanaoyaelewa. Kozi hii ni kwa wanaotafuta kazi, maveterani, vijana, watu ambao tayari wanatengeneza magari na yeyote anayevutiwa na kazi ya EV.",
    "Utajifunza sehemu kuu za EV, hatari za volteji kubwa na sheria zinazokulinda, jinsi kuchaji kunavyofanya kazi, kazi za huduma ambazo EV bado zinahitaji, na njia halisi ya vyeti: mitihani ya ASE A6 na A8, kisha mtihani wa L3 wa magari ya hybrid na ya umeme. Kozi hii inakuandaa. Haikupi cheti, na haikuombi kamwe kugusa sehemu za volteji kubwa. Kazi hiyo inajifunzwa tu katika mafunzo yaliyoidhinishwa, chini ya usimamizi, ukiwa na vifaa sahihi vya kujikinga.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwa karatasi, kalamu na kikokotoo cha simu. Kuna jaribio fupi baada ya kila somo na kila sura, na mtihani wa maswali 20 unafunga kozi. Somo la mwisho linajenga Mpango wako wa Kuanza Ufundi wa EV."
  ],
  finalTask: "Tengeneza Mpango wako wa Kuanza Ufundi wa EV wa ukurasa mmoja: (1) eleza kwa sentensi 3 hadi 4 jinsi EV inavyofanya kazi, ukitaja sehemu zake kuu; (2) andika sheria za usalama wa volteji kubwa utakazofuata kama mfanyakazi mpya wa gereji; (3) tatua hesabu mbili za mazoezi za muda wa kuchaji na uonyeshe kazi yako; (4) andika orodha ya kukagua ya huduma ya volteji ndogo kwa EV; (5) andika njia yako ya vyeti yenye tarehe halisi (programu ya mafunzo, ASE A6 na A8, kisha L3, na mafunzo yoyote ya mwajiri au ya mtengenezaji), pamoja na ukurasa rasmi wa kila hatua; na (6) andika sehemu ya \"Ujuzi wa EV\" yenye vipengele 3 kwa ajili ya CV yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotafuta kazi ya ujuzi katika huduma ya magari: wanaotafuta kazi, maveterani (wengi wana uzoefu wa magari au umeme), vijana, wahamiaji na mafundi wa sasa wa mafuta ya injini au matairi wanaotaka kupanda cheo. Baadhi wametengeneza magari ya petroli; wengi hawajawahi kufanya kazi kwenye EV.",
    startingPoint: "Wanaweza kufanya hesabu za msingi kwa kikokotoo na kusoma maelekezo mafupi. Baadhi wanajua injini za petroli na utunzaji wa msingi wa gari; wengi hawajui sehemu za EV, hatari za volteji kubwa wala vyeti ambavyo gereji zinaomba.",
    gap: "Gereji zinahitaji wafanyakazi wanaoweza kuhudumia EV kwa usalama na wanaojua wakati wa kusimama. Mfanyakazi mpya anayegusa sehemu za rangi ya chungwa za volteji kubwa bila mafunzo anaweza kufa. Wanafunzi wanahitaji maneno, sheria za usalama, kazi za kila siku za huduma ya EV na njia wazi ya vyeti ili waajiriwe na wapande cheo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8)",
      "Hakuna kazi ya mikono ya volteji kubwa katika kozi hii: usiguse kamwe nyaya za rangi ya chungwa, betri kubwa wala sehemu za ndani za chaja",
      "Zana za bure tu: karatasi, kalamu, kikokotoo cha simu na tovuti rasmi",
      "Sheria na ada za vyeti hubadilika: wanafunzi wanakagua ase.com na kurasa nyingine rasmi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na miadi"
    ],
    prerequisites: "Hakuna. Kozi \"Kazi za Ufundi Stadi\" na \"Misingi ya Usalama Kazini (OSHA)\" zinasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha au mchoro wa sehemu za EV", action: "kutaja sehemu kuu za gari la umeme na kusema kila moja inafanya nini", standard: "ukipata angalau sehemu 5 kati ya 6 sahihi" },
    { id: "O2", condition: "Ukipewa hali ya gereji yenye EV", action: "kuorodhesha hatari za volteji kubwa na sheria ya usalama kwa kila moja", standard: "ikiwemo \"usiguse nyaya za rangi ya chungwa wala betri kubwa bila mafunzo\" na lockout/tagout" },
    { id: "O3", condition: "Ukipewa namba za mazoezi za betri na chaja", action: "kukokotoa nishati inayohitajika na muda wa kuchaji", standard: "bila makosa ya hesabu, ukionyesha kazi yako" },
    { id: "O4", condition: "Ukipewa EV iliyoletwa kwa huduma ya kawaida", action: "kuandika orodha ya kukagua ya huduma ya volteji ndogo inayofuata taarifa za huduma za mtengenezaji", standard: "yenye angalau vipengele 6 sahihi na bila kazi za volteji kubwa" },
    { id: "O5", condition: "Ukitumia ase.com na kurasa nyingine rasmi", action: "kuorodhesha hatua za vyeti kuelekea kazi ya ufundi wa EV", standard: "ukitaja ukurasa wa chanzo kwa kila hatua" },
    { id: "O6", condition: "Ukitumia maelezo yako kutoka kozi hii", action: "kuandika Mpango wa Kuanza Ufundi wa EV wenye tarehe na sehemu ya ujuzi kwa CV", standard: "ukitimiza kila mstari wa rubriki" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi EV zinavyofanya kazi na jinsi ya kubaki salama",
      lessons: [
        {
          title: "Sehemu za gari la umeme",
          objectives: ["O1"],
          minutes: 5,
          goal: "Taja sehemu kuu za EV na useme kila moja inafanya nini.",
          text: [
            "Gari la umeme (EV) linaendeshwa kwa umeme uliohifadhiwa katika betri kubwa ya volteji kubwa, mara nyingi chini ya sakafu. Kwenye EV nyingi betri hii inafanya kazi kwa takriban volti 400 hadi 1,000. Hiyo ni zaidi sana ya soketi ya nyumbani, na inaweza kuua.",
            "Betri inahifadhi umeme wa DC. Inverter inaugeuza kuwa AC ambao mota ya umeme inatumia. Mota inazungusha magurudumu. Dereva anapopunguza mwendo, mota inafanya kazi kinyume kama jenereta na kurudisha baadhi ya nishati kwenye betri. Hii inaitwa regenerative braking.",
            "Chaja iliyo ndani ya gari (onboard charger) inageuza AC kutoka kituo cha kuchaji kuwa DC ili kujaza betri. DC-to-DC converter inashusha volteji kubwa ili kuchaji betri ya kawaida ya volti 12, ambayo bado inaendesha taa, redio na kompyuta za gari. Nyaya za volteji kubwa kwa kawaida ni za rangi ya chungwa inayong'aa.",
            "Hybrid (HEV) ina injini ya petroli na mota ya umeme yenye betri ndogo zaidi. Plug-in hybrid (PHEV) ina betri kubwa zaidi unayoweza kuchaji kutoka kwenye plagi, pamoja na injini ya petroli."
          ],
          words: [["EV (gari la umeme)", "gari linaloendeshwa kwa umeme tu kutoka kwenye betri."], ["Hybrid (HEV)", "gari lenye injini ya petroli na mota ya umeme ambalo halichomekwi kwenye plagi."], ["Plug-in hybrid (PHEV)", "hybrid yenye betri kubwa zaidi unayoweza kuchaji kutoka kwenye plagi."], ["Betri kubwa ya volteji kubwa", "betri kubwa inayoendesha mota; inaweza kuua."], ["Inverter", "sehemu inayogeuza DC kutoka betri kuwa AC kwa mota."], ["Regenerative braking", "kupunguza mwendo wa gari kwa kutumia mota kama jenereta, jambo linalorudisha nishati kwenye betri."], ["Onboard charger", "sehemu ndani ya gari inayogeuza AC kutoka chaja kuwa DC kwa betri."], ["DC-to-DC converter", "sehemu inayoshusha volteji kubwa ili kuchaji betri ya volti 12."]],
          slides: [
            { title: "Betri kubwa", bullets: ["Betri ya volteji kubwa, mara nyingi chini ya sakafu", "Mara nyingi takriban volti 400 hadi 1,000: inaua", "Nyaya za rangi ya chungwa zinabeba volteji kubwa"] },
            { title: "Kufanya gari lisogee", bullets: ["Inverter: DC ya betri kuwa AC ya mota", "Mota inazungusha magurudumu", "Regenerative braking inarudisha nishati"] },
            { title: "Kuchaji na betri ya volti 12", bullets: ["Onboard charger: AC kutoka kituo kuwa DC kwa betri kubwa", "DC-to-DC converter inachaji betri ya volti 12"] },
            { title: "EV, HEV, PHEV", bullets: ["EV: betri tu", "HEV: injini ya petroli pamoja na mota, bila plagi", "PHEV: betri kubwa zaidi unayochomeka, pamoja na injini ya petroli"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Maintenance and safety of electric vehicles", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Kwenye karatasi, chora gari rahisi likionekana kutoka ubavuni. Chora na uandike majina ya sehemu sita: betri kubwa ya volteji kubwa, inverter, mota ya umeme, onboard charger, DC-to-DC converter na betri ya volti 12. Chora nyaya za rangi ya chungwa kwa rangi tofauti. Karibu na kila sehemu, andika mstari mmoja kuhusu kazi yake.",
          youCanNow: "kutaja sehemu kuu za EV na kusema kila moja inafanya nini.",
          quickCheck: [
            { objective: "O1", q: "Nyaya za volteji kubwa kwenye EV kwa kawaida ni za rangi gani?", options: ["Nyeusi", "Kijani", "Chungwa", "Nyeupe"], answer: 2, why: "Nyaya za volteji kubwa kwa kawaida ni za rangi ya chungwa inayong'aa ili wafanyakazi waone hatari." },
            { objective: "O1", q: "Regenerative braking inafanya nini?", options: ["Inatumia mota kupunguza mwendo wa gari na kurudisha nishati kwenye betri", "Inaongeza mafuta ya breki yenyewe", "Inachaji gari kutoka tanki la petroli", "Inazima betri ya volti 12"], answer: 0, why: "Mota inafanya kazi kama jenereta wakati wa kupunguza mwendo, ikirudisha nishati kwenye betri." }
          ]
        },
        {
          title: "Usalama wa volteji kubwa: jua wakati wa kusimama",
          objectives: ["O2"],
          minutes: 6,
          goal: "Orodhesha hatari za volteji kubwa katika gereji na sheria ya usalama kwa kila moja.",
          text: [
            "Mfumo wa volteji kubwa unaweza kusababisha shoti ya umeme, kuungua na arc flash. Unaweza kubaki hatari hata baada ya gari kuzimwa, na betri iliyoharibika inaweza kuwaka moto, hata saa au siku kadhaa baadaye.",
            "Sheria ya kwanza kwa mfanyakazi mpya: usiguse nyaya za rangi ya chungwa, betri kubwa, wala sehemu yoyote yenye lebo ya onyo ya volteji kubwa. Ni mafundi waliofunzwa na walioruhusiwa tu wanaofanya kazi kwenye mfumo wa volteji kubwa. Wanafuata taarifa za huduma za mtengenezaji ili kuzima mfumo, kusubiri muda unaotajwa, na kupima kuhakikisha hakuna umeme.",
            "Mafundi waliofunzwa huvaa glavu za kuzuia umeme zilizokadiriwa kwa volteji hiyo, zinazokaguliwa kabla ya kila matumizi, na hutumia lockout/tagout ili mtu yeyote asiweze kuwasha umeme tena wakati wanafanya kazi. Sheria ya OSHA ya lockout/tagout ni 29 CFR 1910.147.",
            "Sheria nyingine za gereji bado zinatumika: inua gari tu kwenye sehemu za kuinulia zilizotajwa na mtengenezaji (betri kubwa iko chini), weka eneo wazi, na mwambie msimamizi kuhusu betri yoyote iliyoharibika, inayovuja, inayotoa moshi au yenye joto. Kaa mbali nayo na usijaribu kuitengeneza."
          ],
          steps: ["Tafuta nyaya za rangi ya chungwa na lebo za onyo za volteji kubwa.", "Usiziguse isipokuwa umefunzwa na umeruhusiwa.", "Inua gari tu kwenye sehemu za kuinulia za mtengenezaji.", "Ripoti betri yoyote iliyoharibika, yenye joto, inayotoa moshi au inayovuja, na uondoke karibu nayo.", "Mafundi waliofunzwa: zima, subiri, pima, fanya lockout/tagout, kufuata taarifa za huduma."],
          words: [["Shoti ya umeme", "jeraha linalotokea umeme unapopita mwilini mwako."], ["Arc flash", "mlipuko wa ghafla wa joto na mwanga unaotokea umeme unaporuka hewani."], ["Aliyeruhusiwa", "aliyepewa ruhusa na mwajiri wake kwa sababu ana mafunzo sahihi."], ["Glavu za kuzuia umeme", "glavu maalum za mpira zilizokadiriwa kukinga dhidi ya volteji fulani."], ["Lockout/tagout", "hatua za kuzima na kufunga umeme kwa kufuli na lebo ili mtu asiweze kuuwasha tena wakati kazi inafanyika."], ["Taarifa za huduma", "hatua rasmi za mtengenezaji za kutengeneza gari fulani."], ["Sehemu ya kuinulia", "mahali chini ya gari ambapo ni salama kuliinua."]],
          slides: [
            { title: "Hatari", bullets: ["Shoti, kuungua na arc flash", "Inaweza kubaki hatari baada ya gari kuzimwa", "Betri zilizoharibika zinaweza kuwaka moto baadaye"] },
            { title: "Sheria ya kwanza kwa wafanyakazi wapya", bullets: ["Usiguse nyaya za rangi ya chungwa wala betri kubwa", "Usiguse sehemu zenye lebo za volteji kubwa", "Mafundi waliofunzwa na walioruhusiwa tu ndio hufanya kazi hiyo"] },
            { title: "Jinsi mafundi waliofunzwa wanavyofanya kazi", bullets: ["Wanafuata taarifa za huduma za mtengenezaji", "Wanazima, wanasubiri, wanapima kuhakikisha hakuna umeme", "Glavu za kuzuia umeme zilizokadiriwa; lockout/tagout"] },
            { title: "Sheria za kila siku za gereji", bullets: ["Inua tu kwenye sehemu za kuinulia za mtengenezaji", "Ripoti betri zilizoharibika, zenye joto au zinazotoa moshi", "Ondoka karibu nayo; usijaribu kuitengeneza"] }
          ],
          sources: [
            { name: "OSHA: Control of hazardous energy (lockout/tagout)", url: "https://www.osha.gov/control-hazardous-energy" },
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: EV safety and emergency response", url: "https://afdc.energy.gov/vehicles/electric-maintenance" },
            { name: "U.S. Bureau of Labor Statistics: Automotive service technicians and mechanics", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Hali ya mazoezi: EV inaletwa baada ya ajali ndogo. Kuna mbonyeo chini ya gari karibu na betri na harufu kali. Mfanyakazi mwenzako anasema, \"Chomoa tu hiyo waya ya rangi ya chungwa ili tuliinue.\" Kwenye karatasi, tengeneza orodha ya safu mbili: Hatari na Ninachofanya. Andika angalau mistari minne.",
          youCanNow: "kutambua hatari za volteji kubwa katika gereji na kusema sheria ya usalama kwa kila moja, ikiwemo wakati wa kusimama na kumwita fundi aliyefunzwa.",
          quickCheck: [
            { objective: "O2", q: "Wewe ni mpya na unaona waya ya rangi ya chungwa chini ya gari unalofanyia kazi. Unafanya nini?", options: ["Unaichomoa ili kuwa salama", "Unaivuta pembeni", "Unaifunga kwa tepu", "Huigusi; unamwambia fundi aliyefunzwa"], answer: 3, why: "Nyaya za rangi ya chungwa zinabeba volteji kubwa; mafundi waliofunzwa na walioruhusiwa tu ndio hufanya kazi juu yake." },
            { objective: "O2", q: "Lockout/tagout ni kwa ajili ya nini?", options: ["Kufunga gereji usiku", "Kuhakikisha mtu yeyote hawezi kuwasha umeme tena wakati kazi inafanyika", "Kuweka lebo kwenye matairi ya kuhifadhi", "Kufungia funguo za mteja"], answer: 1, why: "Lockout/tagout inahakikisha umeme unabaki umezimwa wakati mtu anafanya kazi kwenye mfumo." }
          ]
        },
        {
          title: "Misingi ya kuchaji na hesabu za kuchaji (mazoezi tu)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kokotoa nishati inayohitajika na muda wa kuchaji kutokana na namba za mazoezi.",
          text: [
            "Marekani kuna viwango vitatu vya kawaida vya kuchaji. Level 1 inatumia soketi ya kawaida ya volti 120 na ni ya polepole. Level 2 inatumia volti 240 majumbani au volti 208 katika biashara nyingi; ndiyo chaja ya umma inayotumika zaidi. DC fast charging inapeleka DC moja kwa moja kwenye betri na ndiyo ya haraka zaidi.",
            "Plagi za kawaida ni J1772 (Level 1 na 2), CCS (J1772 pamoja na pini mbili za DC fast charging) na J3400, inayoitwa pia NACS, iliyotokana na muundo wa Tesla. Kufunga chaja nyumbani au kwenye biashara ni kazi ya umeme ya fundi umeme mwenye leseni.",
            "Ukubwa wa betri unapimwa kwa kilowatt-hours (kWh). Nguvu ya chaja inapimwa kwa kilowatts (kW). Fomula ya mazoezi: saa = kWh zinazohitajika / kW za chaja. Namba zote hapa ni za kubuni, kwa mazoezi tu. Kuchaji halisi kunapungua kasi betri inapokaribia kujaa, na upotevu wa nishati unaongeza muda."
          ],
          steps: ["Tafuta ukubwa wa betri kwa kWh.", "Kokotoa kiasi unachohitaji: kWh za betri x (asilimia ya kuongeza / 100).", "Gawanya kWh zinazohitajika kwa kW za chaja.", "Andika jibu kwa saa na useme ni makadirio."],
          words: [["Level 1", "kuchaji polepole kutoka soketi ya kawaida ya volti 120."], ["Level 2", "kuchaji kwa kasi zaidi kwa volti 240 au 208."], ["DC fast charging", "kuchaji kwa kasi zaidi kuliko yote, kukipeleka DC moja kwa moja kwenye betri."], ["Kilowatt-hour (kWh)", "kipimo cha nishati; ukubwa wa betri uko kwa kWh."], ["Kilowatt (kW)", "kipimo cha nguvu; kasi ya chaja iko kwa kW."], ["J1772, CCS, J3400 (NACS)", "majina ya plagi za kawaida za kuchaji EV nchini Marekani."]],
          slides: [
            { title: "Viwango vitatu vya kuchaji", bullets: ["Level 1: soketi ya volti 120, polepole", "Level 2: volti 240 au 208, chaja nyingi za umma", "DC fast: DC moja kwa moja kwenye betri"] },
            { title: "Plagi", bullets: ["J1772 kwa Level 1 na 2", "CCS inaongeza pini za DC fast", "J3400 (NACS), iliyotokana na muundo wa Tesla"] },
            { title: "Hesabu za kuchaji (mazoezi tu)", bullets: ["Saa = kWh zinazohitajika / kW za chaja", "Mfano: 60 kWh x 50% = 30 kWh; 30 / 7.5 kW = saa 4"] },
            { title: "Maisha halisi ni polepole zaidi", bullets: ["Kuchaji kunapungua kasi betri inapojaa", "Majibu ni makadirio", "Kufunga chaja ni kazi ya mafundi umeme wenye leseni"] }
          ],
          sources: [
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: Charging electric vehicles", url: "https://afdc.energy.gov/fuels/electricity-stations" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program (for licensed electricians)", url: "https://evitp.org/" }
          ],
          tryIt: "Mazoezi tu. Tatua kwenye karatasi na uonyeshe kazi yako: (a) Betri ya 80 kWh inatoka 20% hadi 80%. Hizo ni kWh ngapi? (b) Hiyo ingechukua muda gani kwenye chaja ya Level 2 ya 9.6 kW? (c) Betri ya 40 kWh inahitaji 10 kWh kwenye soketi ya Level 1 ya 1.25 kW. Saa ngapi? Majibu ya kujikagua: (a) 48 kWh, (b) saa 5, (c) saa 8.",
          youCanNow: "kutaja viwango vya kuchaji na plagi, na kukadiria muda wa kuchaji kutokana na namba za mazoezi.",
          quickCheck: [
            { objective: "O3", q: "Mazoezi tu: unahitaji 24 kWh na chaja inatoa 6 kW. Takriban muda gani?", options: ["Saa 2", "Saa 18", "Saa 4", "Saa 30"], answer: 2, why: "Saa = kWh / kW, kwa hiyo 24 / 6 = saa 4." },
            { objective: "O3", q: "Kiwango kipi cha kuchaji kinatumia soketi ya kawaida ya nyumbani ya volti 120?", options: ["Level 1", "Level 2", "DC fast charging", "J3400 tu"], answer: 0, why: "Level 1 inatumia soketi ya kawaida ya volti 120." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi EV zinavyofanya kazi na jinsi ya kubaki salama",
        questions: [
          { objective: "O1", q: "Sehemu ipi inageuza DC kutoka betri kuwa AC kwa mota?", options: ["Betri ya volti 12", "Inverter", "Pedi za breki", "Mlango wa tundu la kuchaji"], answer: 1, why: "Inverter inageuza DC ya betri kuwa AC kwa mota." },
          { objective: "O1", q: "DC-to-DC converter inafanya nini?", options: ["Inajaza betri kubwa kutoka ukutani", "Inazungusha magurudumu", "Inachaji betri ya volti 12 kutoka mfumo wa volteji kubwa", "Inapoza ndani ya gari"], answer: 2, why: "Inashusha volteji kubwa ili betri ya volti 12 ibaki na chaji." },
          { objective: "O2", q: "Gari limezimwa. Je, mfumo wa volteji kubwa ni salama kuugusa?", options: ["Ndiyo, kila wakati", "Ndiyo, kama redio imezimwa", "Ndiyo, baada ya dakika moja", "Si lazima; mafundi waliofunzwa tu hufuata hatua za kuzima na kupima"], answer: 3, why: "Volteji kubwa inaweza kubaki hatari baada ya gari kuzimwa; mafundi waliofunzwa huzima, husubiri na hupima kwanza." },
          { objective: "O2", q: "Betri chini ya gari ina joto na inatoa moshi. Unafanya nini?", options: ["Unaondoka karibu nayo na kumwambia msimamizi mara moja", "Unaimwagia maji wewe mwenyewe", "Unainua gari ili uangalie", "Unachomoa nyaya za rangi ya chungwa"], answer: 0, why: "Betri iliyoharibika inaweza kuwaka moto; ondoka karibu nayo na uripoti." },
          { objective: "O3", q: "Mazoezi tu: betri ya 60 kWh, ongeza 50%. Hizo ni kWh ngapi?", options: ["50 kWh", "110 kWh", "30 kWh", "10 kWh"], answer: 2, why: "60 x 50 / 100 = 30 kWh." }
        ]
      }
    },
    {
      name: "Sura 2: Kazi ya huduma na njia yako ya kupata kazi",
      lessons: [
        {
          title: "Kazi za kila siku za huduma ya EV",
          objectives: ["O4"],
          minutes: 5,
          goal: "Andika orodha ya kukagua ya huduma ya volteji ndogo kwa EV inayofuata taarifa za huduma za mtengenezaji.",
          text: [
            "EV zinahitaji utunzaji mdogo kuliko magari ya petroli: hakuna kubadilisha mafuta ya injini, plagi za cheche (spark plugs) wala bomba la moshi. Lakini bado zinahitaji huduma, na sehemu kubwa yake ni kazi ya volteji ndogo ambayo fundi mpya anaweza kujifunza.",
            "Matairi: EV mara nyingi ni nzito, kwa hiyo kagua upepo wa matairi, kina cha mistari ya tairi (tread) na uchakavu, na zungusha matairi kama mtengenezaji anavyosema. Breki: regenerative braking inamaanisha pedi zinachakaa polepole, lakini breki bado zinahitaji kukaguliwa, na sehemu zinazotumika kidogo zinaweza kupata kutu au kukwama. Kagua pia wipers, taa, sehemu za suspension na usukani, chujio la hewa la ndani ya gari na betri ya volti 12.",
            "Baadhi ya EV zinatumia kipozaji cha maji (coolant) kwa betri na vifaa vya elektroniki. Ukaguzi na ubadilishaji vinafuata ratiba na hatua za mtengenezaji; usifungue kamwe sehemu ya kupoza ya volteji kubwa isipokuwa umefunzwa.",
            "Tumia kila wakati taarifa za huduma za mtengenezaji kwa gari hilo hasa: ratiba, sehemu za kuinulia na hatua. Kazi ikigusa kitu chochote cha rangi ya chungwa au chenye lebo ya volteji kubwa, simama na umkabidhi fundi aliyefunzwa."
          ],
          steps: ["Tafuta taarifa za huduma za aina, modeli na mwaka hasa wa gari.", "Inua gari tu kwenye sehemu za kuinulia zilizoorodheshwa.", "Kagua matairi, breki, wipers, taa, suspension na usukani.", "Kagua chujio la hewa la ndani ya gari na betri ya volti 12.", "Kagua coolant kama taarifa za huduma zinavyosema tu.", "Simama na ukabidhi chochote cha rangi ya chungwa au chenye lebo ya volteji kubwa."],
          words: [["Volteji ndogo", "mifumo ya kawaida ya volti 12, kama taa na redio, ambayo ni salama zaidi kufanyia kazi."], ["Kuzungusha matairi", "kuhamisha matairi kwenda sehemu tofauti ili yachakae sawasawa."], ["Chujio la hewa la ndani ya gari", "chujio linalosafisha hewa inayoingia ndani ya gari."], ["Coolant (kipozaji)", "kimiminika kinachozuia sehemu zisipate joto kupita kiasi."], ["Ratiba ya huduma", "orodha ya mtengenezaji ya kinachokaguliwa na lini."]],
          slides: [
            { title: "Utunzaji mdogo, si sifuri", bullets: ["Hakuna kubadilisha mafuta, spark plugs wala bomba la moshi", "Bado inahitaji ukaguzi wa mara kwa mara"] },
            { title: "Matairi na breki", bullets: ["Magari mazito: kagua upepo, tread na uchakavu", "Breki zinachakaa polepole lakini zinaweza kupata kutu au kukwama", "Zungusha matairi kama mtengenezaji anavyosema"] },
            { title: "Ukaguzi mwingine", bullets: ["Wipers, taa, suspension, usukani", "Chujio la hewa la ndani na betri ya volti 12", "Coolant tu kufuata taarifa za huduma"] },
            { title: "Jua mpaka wako", bullets: ["Tumia taarifa za huduma za gari hilo hasa", "Inua tu kwenye sehemu zilizoorodheshwa", "Rangi ya chungwa au lebo ya volteji kubwa? Simama na ukabidhi"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Maintenance of electric vehicles", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Chagua modeli yoyote ya EV uliyowahi kuona. Kwenye karatasi, andika orodha ya kukagua yenye angalau vipengele 8 kwa ziara ya kawaida ya huduma. Weka alama LV (volteji ndogo, sawa kwako) au STOP (volteji kubwa, kabidhi) kwa kila kimoja. Kisha kagua: je, uliweka kitu chochote cha rangi ya chungwa kwenye safu ya LV? Kirekebishe kama uliweka.",
          youCanNow: "kuandika orodha ya kukagua ya huduma ya EV ya volteji ndogo na kusema kazi zipi za kumkabidhi fundi aliyefunzwa wa volteji kubwa.",
          quickCheck: [
            { objective: "O4", q: "Kazi ipi EV HAIHITAJI?", options: ["Kuzungusha matairi", "Kubadilisha mafuta ya injini", "Kukagua breki", "Kukagua chujio la hewa la ndani ya gari"], answer: 1, why: "Gari linalotumia betri tu halina mafuta ya injini ya kubadilisha." },
            { objective: "O4", q: "Unapata wapi sehemu sahihi za kuinulia na ratiba ya huduma ya EV?", options: ["Kukisia kutoka gari jingine", "Video ya mitandao ya kijamii", "Kumbukumbu ya mteja", "Taarifa za huduma za mtengenezaji kwa gari hilo hasa"], answer: 3, why: "Taarifa za huduma za mtengenezaji zina sehemu sahihi za kuinulia na ratiba." }
          ]
        },
        {
          title: "Vyeti na mafunzo kwa kazi ya EV",
          objectives: ["O5"],
          minutes: 5,
          goal: "Orodhesha hatua za vyeti kuelekea kazi ya ufundi wa EV, pamoja na chanzo rasmi cha kila moja.",
          text: [
            "Mafundi wengi wa magari wanaanza na programu ya mafunzo katika shule ya sekondari, chuo cha jamii (community college) au shule ya ufundi, au wanaanza kama mafundi wa mafuta ya injini au matairi na kujifunza kazini. Uanagenzi (apprenticeship) na programu za mafunzo za watengenezaji ni njia nyingine za kuingia.",
            "ASE (National Institute for Automotive Service Excellence) inatoa vyeti vya mafundi vinavyojulikana zaidi. Mtihani wake wa L3, Light Duty Hybrid/Electric Vehicle Specialist, unahusu kutambua matatizo ya mfumo wa betri, mfumo wa kuendesha, vifaa vya elektroniki vya nguvu na mengine. Kabla ya kujiandikisha kwa L3, lazima ufaulu A6 (Electrical/Electronic Systems) na A8 (Engine Performance). Cheti cha ASE pia kinahitaji uzoefu wa kazi ya mikono; kagua sheria za sasa kwenye ase.com.",
            "Watengenezaji wengi wa magari pia wanafundisha mafundi kuhusu EV zao wenyewe. Mafundi umeme wanaofunga chaja wanaweza kuchukua mafunzo ya EVITP, ambayo ni kwa mafundi umeme wenye leseni. Ada, sheria za mitihani na masharti ya uzoefu hubadilika, kwa hiyo kagua kila ukurasa rasmi kabla ya kulipa.",
            "Kozi hii inakuandaa kuanza. Haikupi cheti."
          ],
          steps: ["Tafuta programu za teknolojia ya magari na uanagenzi karibu nawe.", "Soma ukurasa wa ASE L3 na uandike masharti yake ya awali (A6 na A8).", "Soma sheria za ASE kuhusu uzoefu wa kazi.", "Uliza gereji na wauzaji wa magari wa karibu wanataka vyeti na mafunzo gani ya watengenezaji.", "Andika kila hatua, tarehe lengwa na ukurasa rasmi."],
          words: [["ASE", "National Institute for Automotive Service Excellence, taasisi inayotoa vyeti kwa mafundi wa magari nchini Marekani."], ["Cheti", "uthibitisho kwamba ulifaulu mtihani na ukatimiza masharti ya uzoefu."], ["Sharti la awali", "kitu unachopaswa kumaliza kabla ya kuanza hatua inayofuata."], ["Kutambua tatizo", "kugundua kipi kina hitilafu na kwa nini."], ["EVITP", "Electric Vehicle Infrastructure Training Program, inayofundisha mafundi umeme wenye leseni kufunga chaja."]],
          slides: [
            { title: "Njia za kuingia", bullets: ["Programu za magari za shule au chuo cha jamii", "Anza kama fundi wa mafuta ya injini au matairi", "Uanagenzi na mafunzo ya watengenezaji"] },
            { title: "Njia ya ASE kuelekea kazi ya EV", bullets: ["Faulu A6 Electrical/Electronic Systems", "Faulu A8 Engine Performance", "Kisha L3 Light Duty Hybrid/Electric Vehicle Specialist"] },
            { title: "Zaidi ya kujua", bullets: ["ASE pia inahitaji uzoefu wa kazi ya mikono", "Watengenezaji wanafundisha kuhusu EV zao wenyewe", "EVITP ni kwa mafundi umeme wenye leseni wanaofunga chaja"] },
            { title: "Kagua kabla ya kulipa", bullets: ["Sheria na ada hubadilika: tumia ase.com", "Andika kila hatua, tarehe na chanzo", "Kozi hii inakuandaa; haikupi cheti"] }
          ],
          sources: [
            { name: "ASE: L3 Light Duty Hybrid/Electric Vehicle Specialist test", url: "https://www.ase.com/tests/l3/" },
            { name: "ASE: Tests", url: "https://www.ase.com/tests" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program", url: "https://evitp.org/" },
            { name: "U.S. Bureau of Labor Statistics: How to become an automotive service technician", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Fungua ukurasa wa mtihani wa ASE L3. Andika mitihani miwili unayopaswa kufaulu kwanza na mada tatu ambazo L3 inahusu. Kisha tafuta programu ya teknolojia ya magari au uanagenzi karibu nawe na uandike jina lake na anwani yake ya wavuti.",
          youCanNow: "kutaja njia ya ASE kuelekea kazi ya EV (A6, A8, kisha L3), kusema inahitaji nini kingine, na kupata mafunzo karibu nawe kwenye kurasa rasmi.",
          quickCheck: [
            { objective: "O5", q: "Mtihani upi wa ASE ni wa mtaalamu wa magari ya hybrid na ya umeme?", options: ["A1", "L3", "A5", "T2"], answer: 1, why: "L3 ni mtihani wa ASE wa Light Duty Hybrid/Electric Vehicle Specialist." },
            { objective: "O5", q: "Lazima ufaulu nini kabla ya kujiandikisha kwa ASE L3?", options: ["A6 na A8", "Mtihani wa CDL", "Mtihani wa sayansi wa GED", "EPA Section 608"], answer: 0, why: "ASE inahitaji A6 Electrical/Electronic Systems na A8 Engine Performance kabla ya L3." }
          ]
        },
        {
          title: "Mpango wako wa Kuanza Ufundi wa EV",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika Mpango wa Kuanza Ufundi wa EV wenye tarehe na sehemu ya ujuzi kwa CV.",
          text: [
            "Sasa unganisha yote katika ukurasa mmoja unaoweza kuupeleka kwenye programu ya mafunzo, gereji au kwa muuzaji wa magari. Mpango wenye tarehe halisi unaonyesha uko makini.",
            "Mpango wako una sehemu sita: jinsi EV inavyofanya kazi kwa maneno yako; sheria zako za usalama wa volteji kubwa; hesabu mbili za mazoezi za kuchaji pamoja na kazi yako; orodha ya kukagua ya huduma ya volteji ndogo; njia yako ya vyeti yenye tarehe na vyanzo; na sehemu ya \"Ujuzi wa EV\" kwa CV.",
            "Kwa CV, andika mambo ya kweli unayoweza kufanya sasa, kwa vipengele vifupi vinavyoanza na neno la kitendo. Kwa mfano: \"Najua sehemu kuu za EV na za mfumo wa kuendesha wa hybrid.\" \"Nimefunzwa ufahamu wa usalama wa volteji kubwa: natambua nyaya za rangi ya chungwa na nasimama ili fundi aliyehitimu aje.\" \"Naweza kukadiria muda wa kuchaji kutokana na ukubwa wa betri na wa chaja.\" Ongeza kazi za zamani zinazosaidia: utunzaji wa magari, kazi ya matairi au mafuta ya injini, magari ya jeshi, msaidizi wa fundi umeme au vifaa vya ghala.",
            "Maveterani: ujuzi mwingi wa magari ya jeshi na wa umeme unahamishika. Uliza kituo cha ajira cha karibu kuhusu msaada wa mafunzo."
          ],
          steps: ["Andika maelezo yako ya sentensi 3 hadi 4 ya jinsi EV inavyofanya kazi.", "Andika sheria zako za usalama wa volteji kubwa.", "Ongeza hesabu mbili za mazoezi za kuchaji pamoja na kazi yako.", "Ongeza orodha yako ya kukagua ya huduma ya volteji ndogo.", "Andika njia yako ya vyeti yenye tarehe lengwa na kurasa za vyanzo.", "Andika vipengele 3 vya CV vinavyoanza na neno la kitendo."],
          words: [["CV (wasifu wa kazi)", "hati fupi inayoorodhesha ujuzi wako, kazi zako na mafunzo yako kwa waajiri."], ["Tarehe lengwa", "siku unayopanga kumaliza hatua fulani."], ["Kituo cha ajira", "ofisi ya umma ya bure inayosaidia watu kupata kazi na mafunzo; nyingi zinaitwa American Job Centers."]],
          slides: [
            { title: "Ukurasa mmoja, sehemu sita", bullets: ["Jinsi EV inavyofanya kazi; sheria za usalama", "Hesabu za kuchaji; orodha ya huduma", "Njia ya vyeti yenye tarehe; sehemu ya CV"] },
            { title: "Tarehe halisi", bullets: ["Unapoanza programu ya mafunzo", "Unapolenga kufaulu A6 na A8", "Unapolenga L3, baada ya uzoefu wa kazi"] },
            { title: "CV: Ujuzi wa EV", bullets: ["Vipengele vifupi vinavyoanza na neno la kitendo", "Mambo ya kweli tu unayoweza kufanya", "Ongeza kazi za zamani za magari, zana au umeme"] },
            { title: "Pata msaada", bullets: ["American Job Centers na huduma za maveterani", "Uliza gereji na wauzaji wa karibu wanataka nini"] }
          ],
          sources: [{ name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Kazi ya mwisho: tengeneza Mpango wako wa Kuanza Ufundi wa EV wa ukurasa mmoja wenye sehemu zote sita. Weka tarehe halisi karibu na kila hatua ya mafunzo na ya cheti, na anwani ya wavuti kwa kila sharti ulilokagua. Soma vipengele vya CV yako kwa sauti kana kwamba uko kwenye usaili.",
          youCanNow: "kuonyesha gereji au programu ya mafunzo mpango ulioandikwa wa kuanza kazi ya EV, wenye tarehe, vyanzo na sehemu ya ujuzi kwa CV.",
          quickCheck: [
            { objective: "O6", q: "Kipengele kipi ni bora zaidi cha CV kwa kazi ya mwanzo katika gereji ya EV?", options: ["\"Nina cheti cha ASE L3.\" (wakati huna)", "\"Mpenzi wa magari.\"", "\"Naweza kukadiria muda wa kuchaji kutokana na ukubwa wa betri na wa chaja.\"", "\"Napenda magari ya Tesla.\""], answer: 2, why: "Ni kweli na ni mahususi; usidai kamwe cheti usichokuwa nacho." },
            { objective: "O6", q: "Mpango wako unasema \"Pata cheti cha ASE.\" Nini kinaufanya uwe imara zaidi?", options: ["Kukiondoa", "Kukiandika kwa herufi kubwa", "Kuongeza jina la rafiki", "Kutaja A6, A8 na L3 pamoja na tarehe lengwa na ukurasa wa ase.com"], answer: 3, why: "Mitihani iliyotajwa, tarehe na chanzo rasmi vinageuza tamaa kuwa mpango." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kazi ya huduma na njia yako ya kupata kazi",
        questions: [
          { objective: "O4", q: "Kwa nini breki za EV bado zinahitaji kukaguliwa ingawa zinachakaa polepole?", options: ["Sehemu zinazotumika kidogo zinaweza kupata kutu au kukwama", "EV hazina breki", "Breki zinajaza betri kabisa", "Hazihitaji kukaguliwa kamwe"], answer: 0, why: "Regenerative braking inamaanisha matumizi kidogo, kwa hiyo sehemu za breki zinaweza kupata kutu au kukwama." },
          { objective: "O4", q: "Kwenye orodha yako ya huduma, kazi moja inahusu waya ya rangi ya chungwa. Unaiwekea alama gani?", options: ["LV, sawa kwangu", "Iruke na usimwambie mtu", "STOP: mkabidhi fundi aliyefunzwa wa volteji kubwa", "Ifanye haraka"], answer: 2, why: "Chochote cha rangi ya chungwa au chenye lebo ya volteji kubwa kinaenda kwa fundi aliyefunzwa na aliyeruhusiwa." },
          { objective: "O5", q: "Cheti cha ASE kinahitaji nini zaidi ya kufaulu mtihani?", options: ["Shahada ya chuo", "Uzoefu wa kazi ya mikono", "CDL", "Kumiliki EV"], answer: 1, why: "Cheti cha ASE kinahitaji uzoefu wa kazi pamoja na kufaulu mtihani." },
          { objective: "O5", q: "Mafunzo ya EVITP ya kufunga chaja ni kwa ajili ya nani?", options: ["Yeyote mwenye simu", "Wauzaji wa magari", "Wateja", "Mafundi umeme wenye leseni"], answer: 3, why: "EVITP inafundisha mafundi umeme wenye leseni wanaofunga chaja za EV." },
          { objective: "O6", q: "Kila hatua katika Mpango wako wa Kuanza Ufundi wa EV inapaswa kuwa na nini?", options: ["Tarehe lengwa na ukurasa rasmi ulioukagua", "Bei uliyokisia", "Sahihi ya rafiki", "Hakuna cha ziada"], answer: 0, why: "Tarehe na vyanzo vinafanya kila hatua iwe halisi na inayoweza kukaguliwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Ufundi wa Magari ya Umeme (EV)",
    questions: [
      { objective: "O1", q: "Betri kubwa ya volteji kubwa kwa kawaida inapatikana wapi kwenye EV?", options: ["Kwenye mfuniko wa buti", "Chini ya sakafu", "Nyuma ya redio", "Ndani ya usukani"], answer: 1, why: "Betri kubwa nyingi za EV ziko chini ya sakafu." },
      { objective: "O1", q: "Nini kinaendesha taa na redio kwenye EV?", options: ["Betri ya volti 12", "Matairi", "Waya ya kuchaji", "Tanki la petroli"], answer: 0, why: "Betri ya kawaida ya volti 12 bado inaendesha mifumo ya volteji ndogo." },
      { objective: "O1", q: "Plug-in hybrid (PHEV) ni nini?", options: ["Gari lisilo na betri", "Gari la petroli lenye chaja ya simu", "EV isiyo na mota", "Hybrid yenye betri kubwa zaidi unayoweza kuchaji kutoka kwenye plagi"], answer: 3, why: "PHEV ina injini ya petroli na betri kubwa zaidi inayochomekwa kwenye plagi." },
      { objective: "O1", q: "Sehemu ipi inageuza AC kutoka kituo cha kuchaji kuwa DC kwa betri?", options: ["Mota", "Pedi za breki", "Onboard charger", "Chujio la hewa la ndani ya gari"], answer: 2, why: "Onboard charger inageuza AC kutoka kituo kuwa DC kwa betri kubwa." },
      { objective: "O2", q: "Kama mfanyakazi mpya, sehemu ipi HUPASWI kamwe kuigusa bila mafunzo?", options: ["Wipers", "Nyaya za rangi ya chungwa za volteji kubwa", "Vifuniko vya valvu za matairi", "Chujio la hewa la ndani ya gari"], answer: 1, why: "Nyaya za rangi ya chungwa zinabeba volteji kubwa inayoua." },
      { objective: "O2", q: "Arc flash ni nini?", options: ["Mlipuko wa ghafla wa joto na mwanga unaotokea umeme unaporuka hewani", "Mpangilio wa taa za mbele", "Aina ya tairi", "Plagi ya kuchaji"], answer: 0, why: "Arc flash ni mlipuko wa umeme unaoweza kuunguza na kujeruhi." },
      { objective: "O2", q: "Kabla fundi aliyefunzwa hajafanya kazi kwenye volteji kubwa, anafanya nini?", options: ["Anaongeza sauti ya redio", "Anafungua boneti tu", "Anavaa glavu za pamba", "Anazima, anasubiri, anapima kuhakikisha hakuna umeme na anafanya lockout kufuata taarifa za huduma"], answer: 3, why: "Kuzima, kusubiri, kupima na lockout/tagout hufuata hatua za mtengenezaji." },
      { objective: "O2", q: "Unainua EV wapi kwenye lifti ya gereji?", options: ["Chini ya betri kubwa", "Popote palipo sawa", "Tu kwenye sehemu za kuinulia za mtengenezaji", "Kwa bampa"], answer: 2, why: "Betri iko chini; sehemu za kuinulia zilizoorodheshwa zinailinda betri na kukulinda wewe." },
      { objective: "O3", q: "Mazoezi tu: 36 kWh zinahitajika kwenye chaja ya 9 kW. Muda gani?", options: ["Saa 4", "Saa 45", "Saa 27", "Saa 3"], answer: 0, why: "36 / 9 = saa 4." },
      { objective: "O3", q: "Ukubwa wa betri unapimwa kwa:", options: ["Maili kwa galoni", "Kilowatt-hours (kWh)", "Pauni kwa inchi ya mraba", "Galoni"], answer: 1, why: "Nishati ya betri inapimwa kwa kilowatt-hours." },
      { objective: "O3", q: "Njia ipi kwa kawaida ni ya haraka zaidi ya kuchaji?", options: ["Level 1", "Level 2", "Waya ya kuwasha ya volti 12", "DC fast charging"], answer: 3, why: "DC fast charging inapeleka DC moja kwa moja kwenye betri kwa nguvu kubwa." },
      { objective: "O3", q: "Kwa nini jibu la muda wa kuchaji ni makadirio tu?", options: ["Chaja hazifanyi kazi kamwe", "Betri hazina ukubwa", "Kuchaji kunapungua kasi betri inapojaa, na kuna upotevu wa nishati", "kWh na kW zina maana moja"], answer: 2, why: "Kuchaji halisi kunapungua kasi karibu na kujaa na kunapoteza baadhi ya nishati." },
      { objective: "O4", q: "Kipi ni kipengele kizuri kwa orodha ya huduma ya EV?", options: ["Kagua upepo na tread ya matairi", "Badilisha mafuta ya injini", "Badilisha spark plugs", "Tengeneza bomba la moshi"], answer: 0, why: "EV zinahitaji ukaguzi wa matairi; hazina mafuta ya injini, spark plugs wala bomba la moshi." },
      { objective: "O4", q: "Kwa nini uangalie kwa makini uchakavu wa matairi kwenye EV?", options: ["EV hazina matairi", "EV mara nyingi ni nzito", "Matairi yanachaji betri", "Matairi ya EV hayachakai kamwe"], answer: 1, why: "Magari mazito yanaweza kuchakaza matairi haraka zaidi, kwa hiyo yakague mara kwa mara." },
      { objective: "O4", q: "Unapata wapi hatua sahihi za coolant kwa EV?", options: ["Kitabu chochote cha gari la petroli", "Kukisia", "Kumbukumbu ya mfanyakazi mwenzako", "Taarifa za huduma za mtengenezaji"], answer: 3, why: "Ukaguzi wa coolant wa kila EV unafuata taarifa za huduma za mtengenezaji wake." },
      { objective: "O5", q: "ASE inamaanisha nini?", options: ["Auto Sales Experts", "Association of Safe Electricians", "National Institute for Automotive Service Excellence", "American Solar Energy"], answer: 2, why: "ASE ni National Institute for Automotive Service Excellence." },
      { objective: "O5", q: "Unakagua wapi sheria na ada za sasa za mitihani ya ASE?", options: ["ase.com", "Chapisho la mitandao ya kijamii", "Tangazo la mauzo", "Maelezo ya zamani ya rafiki"], answer: 0, why: "Tovuti rasmi ya ASE ina sheria za sasa." },
      { objective: "O5", q: "Je, kozi hii inakupa cheti cha fundi wa EV?", options: ["Ndiyo, baada ya mtihani", "Hapana; inakuandaa, na vyeti vinatoka ASE na programu nyingine", "Ndiyo, ukimaliza kwa siku moja", "Kwa hybrid tu"], answer: 1, why: "Kozi inakuandaa; vyeti vinatoka ASE, watengenezaji na programu zilizoidhinishwa." },
      { objective: "O6", q: "Kipi kinafaa kuwa katika Mpango wako wa Kuanza Ufundi wa EV?", options: ["Nywila ya benki yako", "Cheti usichokuwa nacho", "Rangi za magari unazopenda", "Tarehe lengwa za A6, A8 na L3"], answer: 3, why: "Tarehe za kila hatua zinafanya mpango uwe halisi." },
      { objective: "O6", q: "Kipengele kizuri cha CV kinapaswa kuwa:", options: ["Kirefu na kisicho wazi", "Kuhusu ujuzi unaotumaini kujifunza", "Cha kweli, mahususi na kinachoanza na neno la kitendo", "Kilichonakiliwa kutoka kwa mgeni"], answer: 2, why: "Waajiri wanaamini vipengele vifupi, vya kweli na mahususi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari kuhusu EV?", from: [0, 3, 4, 7, 8, 10, 12, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Jinsi EV inavyofanya kazi", objective: "O1", notYet: "Anaacha betri kubwa au inverter, au anachanganya kazi zao.", meets: "Anataja betri kubwa, inverter, mota, onboard charger, DC-to-DC converter na betri ya volti 12, na anasema kila moja inafanya nini.", exceeds: "Pia anaeleza regenerative braking na tofauti kati ya EV, HEV na PHEV." },
      { name: "Sheria za usalama wa volteji kubwa", objective: "O2", notYet: "Hasemi kukaa mbali na nyaya za rangi ya chungwa na betri kubwa.", meets: "Anasema kutogusa sehemu za rangi ya chungwa au zenye lebo ya volteji kubwa bila mafunzo, kutumia sehemu za kuinulia za mtengenezaji, na kuripoti betri zilizoharibika.", exceeds: "Pia anaeleza kuzima, kusubiri, kupima na lockout/tagout, na nani anaruhusiwa kuvifanya." },
      { name: "Hesabu za kuchaji", objective: "O3", notYet: "Kosa la hesabu, au kazi haijaonyeshwa.", meets: "Hesabu zote mbili ni sahihi, na fomula na vipimo vimeonyeshwa.", exceeds: "Pia anasema kwa nini muda halisi utakuwa mrefu zaidi." },
      { name: "Orodha ya kukagua ya huduma", objective: "O4", notYet: "Ina kubadilisha mafuta ya injini au kazi ya volteji kubwa iliyowekwa kuwa sawa.", meets: "Angalau vipengele 6 sahihi vya volteji ndogo, na kazi za volteji kubwa zimewekwa alama STOP.", exceeds: "Anaandika kwamba kila kipengele kinafuata taarifa za huduma za mtengenezaji kwa gari hilo hasa." },
      { name: "Njia ya vyeti", objective: "O5", notYet: "Hakuna tarehe, au hatua hazina chanzo.", meets: "Anataja njia ya mafunzo na ASE A6, A8 na L3, kila moja ikiwa na tarehe lengwa na anwani ya wavuti.", exceeds: "Anaongeza programu ya mafunzo ya mtengenezaji au mwajiri wa karibu, na mpango wa akiba." },
      { name: "Sehemu ya CV", objective: "O6", notYet: "Vipengele havieleweki wazi au vinadai cheti ambacho mwanafunzi hana.", meets: "Vipengele vitatu vya kweli vinavyoanza na neno la kitendo na vinavyolingana na kazi ya gereji ya EV.", exceeds: "Anaunganisha kazi za zamani (utunzaji wa magari, magari ya jeshi, umeme) na kazi za EV." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiunga na programu ya teknolojia ya magari, uanagenzi au mafunzo ya mtengenezaji ndani ya siku 90",
      "Wanafunzi wanaofaulu ASE A6 au A8 ndani ya miezi 12 (wanajiripoti wenyewe)",
      "Wanafunzi walioajiriwa katika gereji au kazi ya huduma kwa muuzaji wa magari ndani ya miezi 6 (utafiti wa kufuatilia au ripoti ya mshirika)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye intaneti ya kusoma masomo na kukagua kurasa rasmi",
      "Karatasi, kalamu, kalamu za rangi na kikokotoo (kikokotoo cha simu kinatosha)",
      "Si lazima: picha iliyochapishwa ya sehemu za EV ya kuandika majina",
      "Takriban dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Hakuna anayegusa mfumo wa volteji kubwa wa gari katika kozi hii. Mkitembelea gereji au mkionyesha gari, fundi aliyefunzwa na aliyeruhusiwa anaongoza na wanafunzi wanaangalia tu.",
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi na mfanyie hesabu za kuchaji ubaoni.",
      "Waambie wanafunzi wafungue ukurasa wa ASE L3 papo hapo na watafute masharti ya awali wenyewe.",
      "Mwalike meneja wa huduma wa muuzaji wa magari wa karibu, mwalimu wa magari wa chuo cha jamii au fundi wa EV mwenye cheti cha ASE kuzungumza kuhusu kuajiri.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Waelekeze maveterani na watu wanaorudi kazini kwenye American Job Centers kwa msaada wa mafunzo."
    ]
  }
};
