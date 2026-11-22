"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-va-benefits-gi-bill.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Kozi hii ni kuhusu Marekani: majina ya VA, fomu na tovuti yanabaki kama yalivyo kwa Kiingereza.

module.exports = {
  id: "veterans-va-benefits-gi-bill-sw",
  lang: "sw",
  translationOf: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "Mafao ya VA na GI Bill",
  skills: "Kuandaa nyaraka zako, Kuwasilisha dai la ulemavu, Kuomba huduma ya afya ya VA, Kuelewa GI Bill, Kuomba mafao ya elimu, Kupata msaada wa bure kutoka kwa VSO aliyeidhinishwa",
  outcome: "kutengeneza na kuanza mpango wa vitendo wa mafao ya VA: kukusanya nyaraka zako, kuomba fidia ya ulemavu, huduma ya afya au GI Bill kwa njia sahihi, na kupata msaada wa bure kutoka kwa Veterans Service Officer aliyeidhinishwa na VA badala ya kumlipa mtu akuwasilishie.",
  about: [
    "Kozi hii ni kwa maveterani (waliowahi kuwa wanajeshi wa Marekani), wanajeshi wanaojiandaa kuacha jeshi, na wanafamilia wanaowasaidia. Maveterani wengi hawaombi kamwe mafao waliyoyastahili, au wanasubiri miaka mingi, kwa sababu mchakato unaonekana kuchanganya.",
    "Utakusanya karatasi ambazo VA (Idara ya Masuala ya Maveterani ya Marekani) inaomba, utajifunza njia za kuwasilisha dai la ulemavu na kuomba huduma ya afya, utajifunza GI Bill inaweza kulipia nini na jinsi ya kuiomba, na utampata mwakilishi wa bure aliyeidhinishwa na VA akusaidie. Pia utajifunza dalili za hatari za watu wanaotoza pesa ili kuwasilisha madai.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Sheria, fomu na muda wa kushughulikia maombi ya VA hubadilika, kwa hiyo hakikisha maelezo kwenye va.gov au kwa mwakilishi aliyeidhinishwa kabla ya kuwasilisha."
  ],
  finalTask: "Tengeneza mpango wako wa vitendo wa mafao ya VA: (1) orodha ya kukagua nyaraka zako, ukianza na DD214 yako; (2) kila fao utakaloomba (fidia ya ulemavu, huduma ya afya, elimu) na jinsi utakavyoliomba; (3) ukitumia GI Bill, programu ipi, shule au mafunzo yapi, na unachohitaji kwa ajili yake; (4) jina na mawasiliano ya mwakilishi au VSO aliyeidhinishwa na VA uliyempata kwa zana ya utafutaji ya VA; (5) dalili tatu za hatari za mtu ambaye hapaswi kulipwa ili kuwasilisha dai lako. Kisha chukua hatua ya kwanza kwa fao moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Maveterani, wanajeshi wanaojiandaa kuacha jeshi, na wanafamilia wanaowasaidia. Wengi hawajawahi kuomba mafao waliyoyastahili, au wamesubiri miaka mingi kwa sababu mchakato unaonekana kuchanganya.",
    startingPoint: "Wanaweza kutumia simu au kompyuta, na wana DD214 yao au wanaweza kuiomba. Wengi hawajui fomu zipi za kutumia, jinsi ya kulinda tarehe ya kuanza ya dai, jinsi programu za GI Bill zinavyotofautiana, au kwamba msaada wa mwakilishi aliyeidhinishwa ni bure.",
    gap: "Maveterani wanapoteza pesa na huduma kwa kutoomba, kwa kukosa tarehe za mwisho, au kwa kuwalipa watu wasiopaswa kutoza ili kuwasilisha. Wanafunzi wanahitaji mpango wa vitendo ulio wazi: nyaraka tayari, njia sahihi ya kuomba kila fao, mpango wa GI Bill, na mwakilishi wa bure aliyeidhinishwa na VA.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno ya VA yanaelezwa",
      "Vifaa: simu au kompyuta; maombi ya karatasi pia yanaelezwa",
      "Faragha: hakuna namba za Social Security, maelezo ya afya wala taarifa za kuingia va.gov katika chatbot za AI au kwa wasaidizi wasioidhinishwa",
      "Fomu, sheria na namba za simu hubadilika, kwa hiyo wanafunzi wanazihakikisha kwenye va.gov kabla ya kuchukua hatua",
      "Maamuzi ya afya na ya kisheria yanapelekwa kwa VA au kwa mwakilishi aliyeidhinishwa, si kwa kozi hii"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kabla ya kuomba fao lolote la VA", action: "kukusanya nyaraka ambazo VA inaomba, ukianza na DD214 yako, na kuorodhesha mafao unayoweza kuomba", standard: "nyaraka zinazokosekana zikiwa zimewekwa alama na nakala zikiwa zimehifadhiwa mahali salama" },
    { id: "O2", condition: "Kwa magonjwa au hali unazodhani zinahusiana na huduma yako jeshini", action: "kuchagua jinsi utakavyowasilisha dai la ulemavu na kuorodhesha ushahidi kwa kila hali", standard: "ukitumia njia rasmi ya kuwasilisha na ukilinda tarehe yako ya kuanza" },
    { id: "O3", condition: "Ukitumia orodha ya kukagua ya mazoezi", action: "kuandaa taarifa za ombi la huduma ya afya ya VA (10-10EZ) na kuchagua jinsi utakavyoomba", standard: "historia ya huduma, mfiduo wa hatari, bima na kipato vikiwa vimewekwa alama kuwa tayari au bado vinahitajika" },
    { id: "O4", condition: "Ukipewa lengo lako la kazi", action: "kueleza programu kuu za GI Bill na aina mbili za mafunzo ambazo zinaweza kulipia", standard: "ukitaja mafunzo yanayofaa lengo lako" },
    { id: "O5", condition: "Ukipewa shule mbili au programu mbili za mafunzo", action: "kuzilinganisha katika GI Bill Comparison Tool na kupanga ombi lako la fao la elimu", standard: "ukiwa na mambo mawili ya kweli kuhusu kila moja na ombi lako likiwa limekaguliwa kabla ya kuwasilisha" },
    { id: "O6", condition: "Unapotaka msaada kwa dai", action: "kumpata mwakilishi wa bure aliyeidhinishwa na VA na kutambua dalili za hatari za mtu asiyepaswa kulipwa", standard: "ukiwa umeandika jina na mawasiliano ya mwakilishi na dalili tatu za hatari" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuomba mafao ya VA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kujiandaa: nyaraka zako na orodha ya mafao yako",
          minutes: 5,
          goal: "Kusanya nyaraka ambazo VA inaomba na uorodheshe mafao unayoweza kuomba.",
          text: [
            "Mafao ya VA ni vitu ulivyovistahili kupitia huduma yako jeshini. Yanayojulikana ni pamoja na fidia ya ulemavu (malipo ya kila mwezi kwa hali zilizosababishwa au kuzidishwa na huduma jeshini), huduma ya afya ya VA, mafao ya elimu kama GI Bill, na Veteran Readiness and Employment (msaada wa kujiandaa kwa kazi). Kuna mengine, kama msaada wa mkopo wa nyumba, pensheni na mafao ya mazishi. Kila moja lina sheria zake.",
            "Karatasi muhimu zaidi ni DD214 yako au nyaraka nyingine za kuacha jeshi. VA inaitumia kuthibitisha huduma yako. Weka nakala mahali salama. Ukiikosa yako, va.gov inaeleza jinsi ya kuomba kumbukumbu zako za kijeshi.",
            "Vitu vingine ambavyo VA inaweza kuomba: namba yako ya Social Security, maelezo ya benki kwa malipo ya moja kwa moja (direct deposit), kumbukumbu zako za matibabu na majina ya madaktari wako, taarifa kuhusu mwenzi wako na wategemezi, kadi za bima, na kipato chako cha mwaka uliopita kwa baadhi ya maamuzi ya huduma ya afya.",
            "Fungua akaunti ya kuingia (sign-in) kwenye va.gov ili uweze kuomba mtandaoni, kupakia nyaraka na kuangalia hali ya ombi. Tumia tovuti rasmi tu. Usimpe mtu yeyote taarifa zako za kuingia, na usiandike kamwe namba yako ya Social Security au maelezo ya afya yako katika chatbot ya AI."
          ],
          steps: ["Tafuta DD214 yako au karatasi nyingine za kuacha jeshi na utengeneze nakala.", "Kusanya kumbukumbu za matibabu na orodha ya madaktari wako.", "Andika mafao unayotaka kuangalia: ulemavu, huduma ya afya, elimu, mengine.", "Fungua akaunti ya kuingia kwenye va.gov.", "Weka kila kitu katika folda moja."],
          words: [["DD214", "nyaraka inayoonyesha huduma yako jeshini na jinsi ulivyoacha jeshi."], ["Fidia ya ulemavu (disability compensation)", "malipo ya kila mwezi yasiyotozwa kodi kwa hali zilizosababishwa au kuzidishwa na huduma jeshini."], ["Mtegemezi (dependent)", "mwenzi, mtoto au mwanafamilia mwingine anayekutegemea."]],
          slides: [
            { title: "Mafao uliyoyastahili", bullets: ["Fidia ya ulemavu", "Huduma ya afya ya VA", "Elimu: GI Bill", "Veteran Readiness and Employment, na mengine"] },
            { title: "Karatasi yako muhimu zaidi", bullets: ["DD214 au karatasi nyingine za kuacha jeshi", "Weka nakala mahali salama", "Umeipoteza? va.gov inaeleza jinsi ya kuomba kumbukumbu"] },
            { title: "Vitu vingine VA inaweza kuomba", bullets: ["Kumbukumbu za matibabu na madaktari", "Maelezo ya mwenzi na wategemezi", "Maelezo ya benki kwa direct deposit"] },
            { title: "Akaunti yako ya va.gov", bullets: ["Omba, pakia na angalia hali mtandaoni", "Tumia tovuti rasmi tu", "Usimpe mtu yeyote taarifa zako za kuingia"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Tengeneza folda (ya karatasi au folda salama kwenye kompyuta yako mwenyewe) na uweke ndani yake, au uorodheshe kinachokosekana: DD214 yako, kumbukumbu za matibabu, orodha ya madaktari wako na maelezo ya wategemezi wako. Andika mafao unayotaka kuangalia.",
          youCanNow: "kukusanya nyaraka ambazo VA inaomba na kuorodhesha mafao unayoweza kuomba.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini uweke nakala za DD214 yako mahali salama?", options: ["Ili uweze kuiweka mtandaoni", "Ili AI iweze kuisoma", "VA inaitumia kuthibitisha huduma yako, na utaihitaji tena", "Inaisha muda baada ya mwaka mmoja"], answer: 2, why: "DD214 yako inathibitisha huduma yako kwa mafao mengi, kwa hiyo weka nakala salama." },
            { objective: "O1", q: "Unataka chatbot ya AI ikusaidie kuelewa mafao yako. Unaacha nini nje?", options: ["Namba yako ya Social Security na maelezo ya afya yako", "Jina la fao", "Neno \"veteran\"", "Swali lako"], answer: 0, why: "Namba za binafsi na maelezo ya afya haziwekwi kamwe katika chatbot ya AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuwasilisha dai la fidia ya ulemavu",
          minutes: 6,
          goal: "Chagua jinsi utakavyowasilisha dai la ulemavu na ulinde tarehe yako ya kuanza.",
          text: [
            "Unaweza kuwasilisha dai la ulemavu mtandaoni kwenye va.gov, kwa posta ukitumia VA Form 21-526EZ, ana kwa ana katika ofisi ya kanda ya VA, au kwa msaada wa mwakilishi aliyeidhinishwa. VA inasema kuanza fomu ya mtandaoni kunaweka tarehe yako ya kuanza kutumika (effective date) moja kwa moja.",
            "Tarehe yako ya kuanza kutumika ni muhimu kwa sababu inaweza kuamua malipo yanaanza kuhesabiwa lini. Ukianza mtandaoni, VA itatumia tarehe uliyoanza kama tarehe ya dai lako, ilimradi umalize ndani ya siku 365. Ukiwasilisha kwa karatasi, unaweza kwanza kuwasilisha taarifa ya nia ya kuwasilisha (intent to file) ili kushikilia tarehe inayowezekana ya kuanza kutumika wakati unakusanya ushahidi.",
            "Ushahidi ndio unaofanikisha au kuangusha dai. VA inakagua DD214 yako au karatasi za kuacha jeshi na kumbukumbu zako za matibabu ukiwa jeshini. Ongeza ulicho nacho: kumbukumbu za daktari binafsi, na maelezo kutoka kwako au kwa watu walioona jinsi hali hiyo inavyokuathiri. Orodhesha kila hali unayoamini inahusiana na huduma yako jeshini.",
            "Baada ya kuwasilisha, VA inaweza kupanga uchunguzi (exam). Nenda. Angalia hali ya dai lako kwenye va.gov. VA inatangaza muda wake wa wastani wa kushughulikia madai, ambao hubadilika, kwa hiyo angalia va.gov kwa namba ya sasa. Usipokubaliana na uamuzi, kuna njia za kuomba mapitio; mwakilishi aliyeidhinishwa anaweza kusaidia."
          ],
          steps: ["Amua jinsi ya kuwasilisha: mtandaoni, kwa posta (VA Form 21-526EZ), ana kwa ana, au kwa mwakilishi aliyeidhinishwa.", "Ukiwasilisha mtandaoni, anza fomu ili kuweka tarehe yako, na umalize ndani ya siku 365.", "Ukiwasilisha kwa karatasi, fikiria kuwasilisha intent to file kwanza.", "Orodhesha kila hali na ukusanye ushahidi wako.", "Nenda kwenye uchunguzi wowote wa VA na uangalie hali kwenye va.gov."],
          words: [["Tarehe ya kuanza kutumika (effective date)", "tarehe ambayo VA inatumia kuamua malipo ya fao lako yanaanza kuhesabiwa lini."], ["Nia ya kuwasilisha (intent to file)", "taarifa kwa VA kwamba unapanga kuwasilisha dai, ambayo inaweza kushikilia tarehe yako ya kuanza kutumika wakati unakusanya ushahidi."], ["Ushahidi", "kumbukumbu na maelezo yanayounga mkono dai lako."], ["Uhusiano na huduma (service connection)", "kiungo kati ya hali ya afya na huduma yako jeshini."]],
          slides: [
            { title: "Njia nne za kuwasilisha", bullets: ["Mtandaoni kwenye va.gov", "Kwa posta: VA Form 21-526EZ", "Ana kwa ana katika ofisi ya kanda ya VA", "Kwa mwakilishi aliyeidhinishwa"] },
            { title: "Linda tarehe yako ya kuanza", bullets: ["Mtandaoni: tarehe ya kuanza inahesabika ukimaliza ndani ya siku 365", "Karatasi: fikiria intent to file kwanza"] },
            { title: "Ushahidi unashinda madai", bullets: ["DD214 na kumbukumbu za matibabu ukiwa jeshini", "Kumbukumbu za daktari binafsi", "Maelezo kutoka kwako na kwa mashahidi"] },
            { title: "Baada ya kuwasilisha", bullets: ["Nenda kwenye uchunguzi wako wa VA", "Angalia hali kwenye va.gov", "Hukubaliani? Muulize mwakilishi aliyeidhinishwa kuhusu mapitio"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Andika kila hali ya afya unayodhani huenda inahusiana na huduma yako jeshini. Karibu na kila moja, andika ushahidi mmoja ulio nao au unaoweza kuupata. Kisha amua utawasilisha kwa njia ipi na uiandike juu kabisa.",
          youCanNow: "kuchagua jinsi ya kuwasilisha dai la ulemavu, kulinda tarehe yako ya kuanza kutumika na kukusanya ushahidi kwa kila hali.",
          quickCheck: [
            { objective: "O2", q: "Ipi ni njia rasmi ya kuwasilisha dai la ulemavu?", options: ["Kumtumia ujumbe mgeni anayejitolea kusaidia", "Kuweka kwenye kikundi cha mitandao ya kijamii", "Kutuma barua pepe kwa kampuni inayotoza asilimia", "Mtandaoni kwenye va.gov"], answer: 3, why: "Kuwasilisha mtandaoni kwenye va.gov ni mojawapo ya njia rasmi za VA." },
            { objective: "O2", q: "Umeorodhesha tatizo la goti kutoka jeshini. Unaandika nini karibu nalo?", options: ["Hakuna; VA itapata kila kitu", "Ushahidi mmoja, kama kumbukumbu za matibabu ya jeshini au za daktari", "Kukisia kiwango chako cha ulemavu", "Nywila yako ya va.gov"], answer: 1, why: "Kila hali inahitaji ushahidi, kama kumbukumbu za matibabu ya jeshini au za daktari." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuomba huduma ya afya ya VA",
          minutes: 4,
          goal: "Omba huduma ya afya ya VA ukiwa na taarifa sahihi tayari.",
          text: [
            "Huduma ya afya ya VA ni ombi tofauti na fidia ya ulemavu. Unaomba kwa VA Form 10-10EZ, Application for Health Benefits (ombi la mafao ya afya).",
            "Unaweza kuomba mtandaoni kwenye va.gov, kwa simu kupitia namba ya msaada ya mafao ya afya ya VA 877-222-8387 (VA inasema ni Jumatatu hadi Ijumaa, saa 8:00 a.m. hadi 8:00 p.m. kwa saa za Eastern), kwa posta, au ana kwa ana katika kituo cha matibabu au kliniki ya VA. Mwakilishi aliyeidhinishwa pia anaweza kusaidia.",
            "Kuwa na tayari: DD214 yako na historia ya huduma, pamoja na mfiduo wowote wa vitu vya sumu au hatari; namba za Social Security zako, za mwenzi wako na za wategemezi wanaostahili; kadi zako za bima, pamoja na Medicare au bima ya kazini; na kipato cha kaya yako cha mwaka uliopita. VA inasema unaweza kuacha kipato, lakini huenda ikakihitaji kuamua ombi lako.",
            "Mfano: Mwanajeshi wa Marine aliyehudumu ng'ambo ana pumu na anataka daktari wa huduma ya msingi. Anaomba huduma ya afya mtandaoni wiki ile ile anayowasilisha dai lake la ulemavu, anaorodhesha historia yake ya mfiduo, na anapanga miadi yake ya kwanza mara anapoandikishwa."
          ],
          steps: ["Kusanya DD214 yako, historia ya mfiduo, namba za Social Security na kadi za bima.", "Andika kipato cha kaya cha mwaka uliopita.", "Omba mtandaoni kwenye va.gov, kwa simu 877-222-8387, kwa posta, au ana kwa ana.", "Subiri uamuzi wa VA na upange miadi yako ya kwanza."],
          words: [["VA Form 10-10EZ", "ombi la mafao ya afya ya VA."], ["Mfiduo wa sumu (toxic exposure)", "kugusana wakati wa huduma jeshini na vitu vyenye madhara kama mashimo ya kuchoma taka (burn pits), kemikali au mionzi."]],
          slides: [
            { title: "Ombi tofauti", bullets: ["Huduma ya afya si sawa na dai la ulemavu", "Fomu: VA Form 10-10EZ"] },
            { title: "Njia za kuomba", bullets: ["Mtandaoni kwenye va.gov", "Simu: 877-222-8387", "Posta, au ana kwa ana katika kituo cha VA"] },
            { title: "Kuwa na tayari", bullets: ["DD214 na historia ya mfiduo", "Namba za Social Security na kadi za bima", "Kipato cha kaya cha mwaka uliopita"] }
          ],
          sources: [{ name: "VA: How to apply for VA health care", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Jaza orodha ya kukagua ya mazoezi kwa 10-10EZ: DD214 (unayo au huna), historia ya mfiduo, kadi za bima, kipato cha kaya cha mwaka uliopita. Weka alama kwa ulicho nacho na unachohitaji bado, na uchague jinsi utakavyoomba.",
          youCanNow: "kuomba huduma ya afya ya VA ukiwa na taarifa sahihi na kujua njia za kuomba.",
          quickCheck: [
            { objective: "O3", q: "VA Form 10-10EZ ni kwa ajili ya nini?", options: ["Kuwasilisha dai la ulemavu", "Kuomba huduma ya afya ya VA", "Kuomba GI Bill", "Kuchagua VSO"], answer: 1, why: "10-10EZ ni ombi la huduma ya afya ya VA." },
            { objective: "O3", q: "Unajaza orodha yako ya kukagua ya huduma ya afya. Unaweka nini kuhusu huduma yako jeshini?", options: ["Hakuna chochote kuhusu huduma yako", "Cheo chako tu", "Kambi unayoipenda tu", "Historia ya huduma yako, pamoja na mfiduo wowote wa vitu vya sumu au hatari"], answer: 3, why: "VA inauliza kuhusu historia ya huduma yako na mfiduo unapoomba huduma ya afya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuomba mafao ya VA",
        questions: [
          { objective: "O1", q: "VA inatumia nyaraka ipi kuthibitisha huduma yako?", options: ["Leseni yako ya udereva", "Hati ya mshahara kutoka kazi ya kiraia", "DD214 yako au karatasi nyingine za kuacha jeshi", "Kadi ya uanachama wa ukumbi wa mazoezi"], answer: 2, why: "VA inakagua DD214 yako au nyaraka za kuacha jeshi." },
          { objective: "O2", q: "Umeanza dai la ulemavu mtandaoni lakini unahitaji muda kupata kumbukumbu. Una muda gani kumaliza na kubaki na tarehe yako ya kuanza?", options: ["Siku 365", "Siku 7", "Siku 30", "Hakuna tarehe ya kuanza"], answer: 0, why: "VA inasema tarehe uliyoanza inahesabika ukimaliza ndani ya siku 365." },
          { objective: "O2", q: "VA Form 21-526EZ ni kwa ajili ya nini?", options: ["Kuomba GI Bill", "Kuomba huduma ya afya ya VA", "Kubadilisha anwani yako", "Kuomba fidia ya ulemavu kwa posta"], answer: 3, why: "Ni Application for Disability Compensation (ombi la fidia ya ulemavu)." },
          { objective: "O3", q: "Fomu ipi inatumika kuomba huduma ya afya ya VA?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "W-2"], answer: 1, why: "10-10EZ ni Application for Health Benefits (ombi la mafao ya afya)." },
          { objective: "O2", q: "Unawasilisha dai la ulemavu. Unapaswa pia kufanya nini?", options: ["Kwenda kwenye uchunguzi wowote wa VA uliopangiwa", "Kupuuza barua za VA", "Kumlipa mtu aharakishe", "Kuwasilisha dai lile lile mara nyingi"], answer: 0, why: "Uchunguzi ni sehemu ya uamuzi; kuukosa kunaweza kudhuru dai lako." }
        ]
      }
    },
    {
      name: "Sura 2: GI Bill na msaada wa bure",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuelewa GI Bill",
          minutes: 5,
          goal: "Taja programu kuu za GI Bill na uorodheshe zinachoweza kulipia.",
          text: [
            "GI Bill inasaidia kulipia shule na mafunzo. Programu kuu leo ni Post-9/11 GI Bill (Chapter 33), kwa watu waliohudumu jeshini kwa kazi ya kudumu (active duty) baada ya Septemba 10, 2001. Inaweza kusaidia kulipia shule na gharama wakati unajifunza kazi.",
            "Programu nyingine ni pamoja na Montgomery GI Bill Active Duty (Chapter 30) na Montgomery GI Bill Selected Reserve (Chapter 1606) kwa wanachama wa Reserve na National Guard (vikosi vya akiba). Ipi unaweza kutumia inategemea huduma yako.",
            "GI Bill si kwa chuo kikuu cha miaka minne tu. VA inaorodhesha matumizi kama shahada ya kwanza na shahada za juu, programu zisizo za shahada ya chuo, mafunzo kazini na uanagenzi, mitihani ya leseni na vyeti, mafunzo ya urubani, kujifunza mtandaoni na mengine. Yellow Ribbon Program inaweza kusaidia kulipia ada ambayo Post-9/11 GI Bill hailipii, katika shule zinazoshiriki.",
            "Baadhi ya wanajeshi wanaweza kuhamisha mafao ya Post-9/11 ambayo hawajayatumia kwa mwenzi au watoto. Kama tayari una mafao ya Post-9/11, angalia umebaki na kiasi gani kwenye GI Bill Statement of Benefits (taarifa ya mafao) kwenye va.gov."
          ],
          words: [["GI Bill", "mafao ya elimu ya VA yanayosaidia kulipia shule au mafunzo."], ["Post-9/11 GI Bill", "GI Bill kwa watu waliohudumu kwa active duty baada ya Septemba 10, 2001 (Chapter 33)."], ["Yellow Ribbon Program", "programu inayoweza kulipia ada ambayo Post-9/11 GI Bill hailipii, katika shule zinazoshiriki."], ["Uanagenzi (apprenticeship)", "mafunzo ya kazini yenye malipo kwa ajili ya ufundi wenye ujuzi."]],
          slides: [
            { title: "Programu kuu za GI Bill", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "Si chuo kikuu tu", bullets: ["Shahada na programu zisizo za chuo", "Uanagenzi na mafunzo kazini", "Mitihani ya leseni na vyeti"] },
            { title: "Msaada wa ziada", bullets: ["Yellow Ribbon: ada ambayo GI Bill hailipii", "Kuhamisha kwa mwenzi au watoto, kwa baadhi"] },
            { title: "Angalia umebaki na kiasi gani", bullets: ["GI Bill Statement of Benefits kwenye va.gov"] }
          ],
          sources: [{ name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Andika kazi unayoitaka. Kisha andika aina mbili za mafunzo yanayokubalika kwa GI Bill yanayoweza kukufikisha huko, kwa mfano uanagenzi wa fundi umeme na programu ya cheti, au shahada na mtihani wa leseni.",
          youCanNow: "kutaja programu kuu za GI Bill na kulinganisha mafunzo yanayokubalika kwa GI Bill na lengo la kazi.",
          quickCheck: [
            { objective: "O4", q: "Post-9/11 GI Bill pia inaitwaje?", options: ["Chapter 33", "Form 10-10EZ", "VetCert", "Chapter 1"], answer: 0, why: "Post-9/11 GI Bill ni Chapter 33." },
            { objective: "O4", q: "Unataka kuwa fundi umeme bila shahada ya miaka minne. Unaandika nini katika mpango wako?", options: ["GI Bill inalipia shahada tu", "Kuachana na GI Bill", "Uanagenzi au mafunzo kazini ambayo GI Bill inaweza kusaidia", "Kulipia kila kitu mwenyewe"], answer: 2, why: "GI Bill inaweza kusaidia uanagenzi na mafunzo kazini, si shahada tu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuomba GI Bill na kuchagua shule",
          minutes: 5,
          goal: "Omba mafao ya elimu na ulinganishe shule kabla ya kujiandikisha.",
          text: [
            "Omba mafao ya elimu mtandaoni kwenye va.gov. Ukiomba kwa posta, tumia VA Form 22-1990, Application for VA Education Benefits (ombi la mafao ya elimu ya VA), kwa Post-9/11 GI Bill na programu za Montgomery GI Bill. Wanafamilia wanaotumia mafao yaliyohamishwa wanatumia fomu tofauti, VA Form 22-1990e.",
            "Kuwa na tayari: namba yako ya Social Security, maelezo ya benki kwa direct deposit, historia yako ya elimu na ya jeshi, na maelezo ya msingi kuhusu shule au programu ya mafunzo. VA inasema huwezi kubadilisha ombi baada ya kuliwasilisha, kwa hiyo likague kwanza.",
            "VA inasema inachukua kama siku 30 kwa wastani kushughulikia madai ya elimu, lakini angalia va.gov kwa muda wa sasa. Ukikubaliwa, VA inatuma Certificate of Eligibility (cheti cha kustahili). Mpe nakala afisa wa shule anayethibitisha (certifying official), ambaye mara nyingi yuko katika ofisi ya huduma za maveterani au za kijeshi.",
            "Kabla ya kujiandikisha, linganisha shule kwa GI Bill Comparison Tool ya VA kwenye va.gov, na uulize shule kuhusu gharama, matokeo ya ajira na kama inashiriki katika Yellow Ribbon. Kuwa mwangalifu na shule zinazokushinikiza ujiandikishe haraka."
          ],
          steps: ["Chagua programu yako na shule au mafunzo.", "Ilinganishe kwa GI Bill Comparison Tool kwenye va.gov.", "Kusanya namba yako ya Social Security, maelezo ya benki, historia ya elimu na ya jeshi.", "Omba mtandaoni, au kwa posta kwa VA Form 22-1990.", "Mpe afisa wa shule anayethibitisha Certificate of Eligibility yako."],
          words: [["Certificate of Eligibility (COE)", "barua ya VA inayoonyesha una fao lipi la elimu na kiasi gani."], ["Afisa wa shule anayethibitisha (school certifying official)", "mtu katika shule anayeiambia VA kwamba umejiandikisha."], ["VA Form 22-1990", "ombi la mafao ya elimu ya VA (Application for VA Education Benefits)."]],
          slides: [
            { title: "Jinsi ya kuomba", bullets: ["Mtandaoni kwenye va.gov", "Kwa posta: VA Form 22-1990", "Familia wanaotumia mafao yaliyohamishwa: 22-1990e"] },
            { title: "Kuwa na tayari", bullets: ["Namba ya Social Security na maelezo ya benki", "Historia ya elimu na ya jeshi", "Maelezo ya shule au programu"] },
            { title: "Baada ya kuomba", bullets: ["Kama siku 30 kwa wastani; angalia va.gov", "Unapata Certificate of Eligibility", "Mpe afisa wa shule anayethibitisha"] },
            { title: "Linganisha kabla ya kujiandikisha", bullets: ["GI Bill Comparison Tool kwenye va.gov", "Uliza kuhusu gharama, matokeo ya ajira, Yellow Ribbon", "Ondoka ukishinikizwa kusaini haraka"] }
          ],
          sources: [
            { name: "VA: How to apply for the GI Bill and related benefits", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA: GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Chagua shule mbili au programu mbili za mafunzo kwa lengo lako la kazi. Tafuta kila moja katika GI Bill Comparison Tool kwenye va.gov, na uandike mambo mawili ya kweli kuhusu kila moja na swali moja ambalo ungeuliza ofisi yake ya maveterani.",
          youCanNow: "kuomba mafao ya GI Bill, kulinganisha shule kabla ya kujiandikisha na kutumia Certificate of Eligibility yako.",
          quickCheck: [
            { objective: "O5", q: "GI Bill Comparison Tool inakusaidia kufanya nini?", options: ["Kuwasilisha dai la ulemavu", "Kumpata VSO", "Kulinganisha shule na programu za mafunzo kabla ya kujiandikisha", "Kubadilisha GI Bill yako baada ya kuwasilisha"], answer: 2, why: "Comparison Tool inaonyesha mambo ya kweli kuhusu shule na programu ili uweze kuzilinganisha." },
            { objective: "O5", q: "Umemaliza ombi lako la GI Bill. Unafanya nini kabla ya kuliwasilisha?", options: ["Kulikagua kwa makini, kwa sababu huwezi kulibadilisha baada ya kuwasilisha", "Kuliwasilisha haraka na kulirekebisha baadaye", "Kumwomba mgeni aliwasilishe", "Kuacha nafasi wazi"], answer: 0, why: "Huwezi kubadilisha ombi baada ya kuliwasilisha, kwa hiyo likague kwanza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupata msaada wa bure, na kuepuka watu wanaotoza ili kuwasilisha",
          minutes: 5,
          goal: "Mpate mwakilishi wa bure aliyeidhinishwa na VA na utambue watu wasiopaswa kulipwa.",
          text: [
            "Huhitaji kuwasilisha peke yako. VA inaidhinisha aina tatu za wawakilishi: wawakilishi wa Veterans Service Organization (VSO, shirika la huduma kwa maveterani), mawakili na mawakala wa madai (claims agents). VA inasema huduma za mwakilishi wa VSO aliyeidhinishwa kwa dai lako ni bure kila wakati. Wanaweza kusaidia kukusanya ushahidi, kuwasilisha dai, kuomba mapitio ya uamuzi na kuzungumza na VA kwa niaba yako. Majimbo na kaunti nyingi pia zina maafisa wa huduma kwa maveterani.",
            "Mpate mmoja kwa zana ya VA, \"Find a VA-accredited representative or VSO\", kwenye va.gov. VA inasema hakikisha mtu yeyote anayekusaidia na dai lako ameidhinishwa kabla ya kumchagua.",
            "Mawakili na mawakala wa madai wanaweza kutoza ada, lakini VA inasema ni baada tu ya VA kuamua dai lako la kwanza, na kwa makubaliano ya ada yaliyosainiwa tu. Hiyo inamaanisha mtu yeyote anayekutoza ili kuwasilisha dai lako la kwanza, au anayeahidi kiwango cha juu zaidi kwa ada, ni dalili ya hatari. Baadhi ya watu wasioidhinishwa, wanaoitwa wakati mwingine \"claim sharks\" (papa wa madai), huomba sehemu ya malipo yako ya nyuma ya baadaye, taarifa zako za kuingia au ada za mapema.",
            "Usimpe mtu yeyote kamwe taarifa zako za kuingia va.gov. Ukiamini mwakilishi alifanya vibaya au alitoza ada isiyo ya haki, unaweza kuwasiliana na Office of General Counsel ya VA (ofisi ya mshauri mkuu wa sheria), na lazima uchukue hatua haraka kwa migogoro ya ada."
          ],
          steps: ["Fungua zana ya VA \"Find a VA-accredited representative or VSO\" kwenye va.gov.", "Tafuta karibu nawe na uchague mwakilishi wa VSO (bure).", "Hakikisha ameidhinishwa kabla ya kumpa chochote.", "Usilipe kamwe ili kuwasilisha dai la kwanza, na usitoe kamwe taarifa zako za kuingia va.gov.", "Ripoti matatizo kwa Office of General Counsel ya VA."],
          words: [["VSO", "Veterans Service Organization: kikundi ambacho wawakilishi wake walioidhinishwa wanasaidia maveterani na madai bure."], ["Aliyeidhinishwa (accredited)", "aliyekubaliwa na VA kusaidia na madai ya VA."], ["Claim shark (papa wa madai)", "mtu au kampuni isiyoidhinishwa inayowatoza maveterani pesa ili kuwasilisha madai."]],
          slides: [
            { title: "Msaada wa bure upo", bullets: ["Wawakilishi wa VSO walioidhinishwa ni bure kila wakati", "Wanakusanya ushahidi, wanawasilisha na kuzungumza na VA"] },
            { title: "Mpate mmoja", bullets: ["Zana ya VA: Find a VA-accredited representative", "Kagua kama ameidhinishwa kabla ya kuchagua"] },
            { title: "Dalili za hatari", bullets: ["Anatoza ili kuwasilisha dai lako la kwanza", "Anaahidi kiwango cha juu zaidi kwa ada", "Anataka taarifa zako za kuingia va.gov au sehemu ya malipo ya nyuma"] },
            { title: "Jilinde", bullets: ["Usitoe kamwe taarifa zako za kuingia va.gov", "Ripoti matatizo kwa Office of General Counsel ya VA"] }
          ],
          sources: [
            { name: "VA: Accredited representative FAQs", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA: Find a VA-accredited representative or VSO", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Kazi ya mwisho: tumia zana ya VA \"Find a VA-accredited representative or VSO\" kumpata mwakilishi mmoja wa bure karibu nawe na uandike jina lake na jinsi ya kumfikia. Kisha maliza mpango wako wa vitendo wa mafao ya VA kwa orodha ya kukagua nyaraka, mafao utakayoomba na jinsi, mpango wako wa GI Bill kama unao, na dalili tatu za hatari za claim sharks. Chukua hatua ya kwanza kwa fao moja.",
          youCanNow: "kumpata VSO wa bure aliyeidhinishwa, kutambua watu wasiopaswa kulipwa ili kuwasilisha, na kuanza mpango wako wa vitendo wa mafao ya VA.",
          quickCheck: [
            { objective: "O6", q: "VA inamwidhinisha nani kusaidia na madai?", options: ["Mtu yeyote mwenye tovuti", "Kampuni yoyote inayotangaza kwa maveterani", "Marafiki waliowahi kuwasilisha", "Wawakilishi wa VSO, mawakili na mawakala wa madai"], answer: 3, why: "VA inaidhinisha wawakilishi wa VSO, mawakili na mawakala wa madai." },
            { objective: "O6", q: "Msaidizi anasema atawasilisha dai lako la kwanza haraka ukimpa taarifa zako za kuingia va.gov. Unafanya nini?", options: ["Kumpa ili kuokoa muda", "Kukataa, na kumpata mwakilishi wa bure aliyeidhinishwa kwa zana ya utafutaji ya VA", "Kumpa nywila yako tu", "Kumlipa kwanza"], answer: 1, why: "Usitoe kamwe taarifa zako za kuingia; msaada wa bure wa walioidhinishwa unapatikana kupitia zana ya utafutaji ya VA." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: GI Bill na msaada wa bure",
        questions: [
          { objective: "O4", q: "Post-9/11 GI Bill ni kwa ajili ya nani?", options: ["Mtu yeyote anayeishi Marekani", "Maafisa tu", "Wenzi tu", "Watu waliohudumu kwa active duty baada ya Septemba 10, 2001"], answer: 3, why: "VA inasema Post-9/11 GI Bill ni kwa huduma ya active duty baada ya Septemba 10, 2001." },
          { objective: "O4", q: "Kipi kati ya hivi GI Bill inaweza kusaidia kulipia?", options: ["Mkopo wa gari", "Uanagenzi au mtihani wa leseni", "Kodi ya nyumba kwa wazazi wako", "Bili yako ya simu"], answer: 1, why: "VA inaorodhesha uanagenzi, mafunzo kazini na mitihani ya leseni kati ya matumizi ya GI Bill." },
          { objective: "O5", q: "Baada ya kukubaliwa kwa GI Bill, nani anapata nakala ya Certificate of Eligibility yako?", options: ["Mwandikishaji wa jeshi (recruiter)", "Mwenye nyumba wako", "Afisa wa shule yako anayethibitisha", "Hakuna mtu"], answer: 2, why: "Afisa wa shule anayethibitisha anaitumia kuripoti kwa VA kwamba umejiandikisha." },
          { objective: "O6", q: "Mwakilishi wa VSO aliyeidhinishwa anatoza kiasi gani kukusaidia na dai lako?", options: ["Hakuna; ni bure kila wakati", "Sehemu ya malipo yako ya nyuma", "Ada kabla ya kuwasilisha", "Malipo ya mwezi mmoja"], answer: 0, why: "VA inasema huduma za wawakilishi wa VSO walioidhinishwa ni bure kila wakati." },
          { objective: "O6", q: "Kampuni inajitolea kuwasilisha dai lako la kwanza la ulemavu kwa 20% ya malipo yako ya nyuma. Hii ni nini?", options: ["Ada ya kawaida ya VA", "Programu ya VA", "Dalili ya hatari; tumia VSO wa bure aliyeidhinishwa badala yake", "Inatakiwa kisheria"], answer: 2, why: "Ada zinaruhusiwa tu baada ya VA kuamua dai la kwanza, kwa makubaliano yaliyosainiwa, na kwa mawakili au mawakala walioidhinishwa tu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mafao ya VA na GI Bill",
    questions: [
      { objective: "O2", q: "Fidia ya ulemavu ni nini?", options: ["Kadi ya zawadi ya mara moja", "Malipo ya kila mwezi kwa hali zilizosababishwa au kuzidishwa na huduma jeshini", "Mkopo wa shule", "Nafasi ya kazi"], answer: 1, why: "Inawalipa maveterani kwa hali zinazohusiana na huduma jeshini." },
      { objective: "O1", q: "Unapaswa kufanya nini na DD214 yako?", options: ["Kuweka nakala mahali salama", "Kuitupa baada ya kuacha jeshi", "Kuiweka mtandaoni", "Kumpa nakala halisi yeyote anayeiomba"], answer: 0, why: "VA inaitumia kuthibitisha huduma yako, kwa hiyo iweke salama." },
      { objective: "O1", q: "Unapaswa kuomba mafao ya VA mtandaoni wapi?", options: ["Tovuti yoyote yenye bendera", "Kiungo katika ujumbe mfupi", "Tovuti rasmi va.gov", "Ukurasa wa mitandao ya kijamii"], answer: 2, why: "Tumia tovuti rasmi ya VA tu." },
      { objective: "O1", q: "Hupaswi KAMWE kuandika nini katika chatbot ya AI?", options: ["\"Eleza effective date ni nini\"", "\"Nisaidie kuorodhesha maswali kwa VSO wangu\"", "\"GI Bill ni nini?\"", "Namba yako ya Social Security au maelezo ya afya yako"], answer: 3, why: "Weka taarifa binafsi nje ya zana za AI." },
      { objective: "O2", q: "Ipi SI mojawapo ya njia za kuwasilisha dai la ulemavu?", options: ["Mtandaoni kwenye va.gov", "Kwa posta kwa VA Form 21-526EZ", "Ana kwa ana katika ofisi ya kanda ya VA", "Kwa kumtumia ujumbe mgeni anayejitolea kusaidia"], answer: 3, why: "Wasilisha mtandaoni, kwa posta, ana kwa ana au kwa mwakilishi aliyeidhinishwa." },
      { objective: "O2", q: "Unapanga kuwasilisha kwa karatasi lakini unahitaji muda kukusanya ushahidi. Nini kinaweza kusaidia kulinda tarehe yako ya kuanza kutumika?", options: ["Intent to file (nia ya kuwasilisha)", "Kusubiri miaka michache", "Kutowasilisha chochote", "Kumpigia claim shark"], answer: 0, why: "Intent to file inaweza kushikilia tarehe inayowezekana ya kuanza kutumika." },
      { objective: "O2", q: "Kipi ni ushahidi mzuri kwa dai la ulemavu?", options: ["Kukisia VA inataka nini", "Kumbukumbu za matibabu ya jeshini na za daktari", "Chapisho la mitandao ya kijamii", "Uamuzi wa dai la rafiki"], answer: 1, why: "Kumbukumbu na maelezo ya mashahidi yanaunga mkono dai lako." },
      { objective: "O2", q: "VA inapanga uchunguzi kwa dai lako. Unapaswa:", options: ["Kuuruka", "Kumtuma mtu mwingine", "Kwenda", "Kumwomba claim shark aende"], answer: 2, why: "Uchunguzi ni sehemu ya uamuzi." },
      { objective: "O3", q: "Huduma ya afya ya VA inatumia ombi lipi?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "DD214"], answer: 0, why: "10-10EZ ni Application for Health Benefits (ombi la mafao ya afya)." },
      { objective: "O3", q: "Unapoomba huduma ya afya ya VA, unapaswa kuweka nini kuhusu huduma yako jeshini?", options: ["Cheo chako tu", "Hakuna chochote", "Kambi unayoipenda", "Historia ya huduma yako, pamoja na mfiduo wowote wa vitu vya sumu au hatari"], answer: 3, why: "VA inaomba historia ya huduma na mfiduo." },
      { objective: "O3", q: "VA inaorodhesha namba gani ya simu kwa msaada wa kuomba huduma ya afya?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "VA inaorodhesha 877-222-8387 kwa namba ya msaada ya mafao ya afya." },
      { objective: "O4", q: "Post-9/11 GI Bill pia inaitwa:", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "DD214"], answer: 1, why: "Post-9/11 GI Bill ni Chapter 33." },
      { objective: "O4", q: "Veterani anataka kuwa fundi umeme bila shahada ya miaka minne. GI Bill inaweza kusaidia?", options: ["Hapana, inalipia chuo kikuu cha miaka minne tu", "Ndiyo, inaweza kusaidia uanagenzi na mafunzo kazini", "Ikiwa tu atahamia nchi ya nje", "Kwa maafisa tu"], answer: 1, why: "VA inaorodhesha uanagenzi na mafunzo kazini kati ya matumizi ya GI Bill." },
      { objective: "O4", q: "Yellow Ribbon Program inaweza:", options: ["Kulipia kodi ya nyumba yako", "Kuchukua nafasi ya DD214 yako", "Kuharakisha madai ya ulemavu", "Kusaidia kulipia ada ambayo Post-9/11 GI Bill hailipii, katika shule zinazoshiriki"], answer: 3, why: "Yellow Ribbon inasaidia ada iliyozidi kile GI Bill inachokilipia." },
      { objective: "O5", q: "Ukiomba GI Bill kwa posta, unatumia fomu ipi?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "Fomu ya kodi"], answer: 0, why: "VA Form 22-1990 ni Application for VA Education Benefits (ombi la mafao ya elimu ya VA)." },
      { objective: "O5", q: "Kabla ya kujiandikisha katika shule kwa GI Bill, unapaswa:", options: ["Kujiandikisha siku ile ile mwandikishaji anapopiga simu", "Kuacha kulinganisha", "Kuilinganisha kwa GI Bill Comparison Tool na kuuliza kuhusu gharama na matokeo ya ajira", "Kulipa amana kabla ya kusoma chochote"], answer: 2, why: "Kulinganisha kwanza kunalinda mafao yako." },
      { objective: "O5", q: "Unaweza kubadilisha ombi lako la GI Bill baada ya kuliwasilisha?", options: ["Ndiyo, wakati wowote", "Ndiyo, kwa kupiga simu shuleni", "Wikendi tu", "Hapana, kwa hiyo likague kabla ya kuwasilisha"], answer: 3, why: "VA inasema huwezi kufanya mabadiliko baada ya kuwasilisha." },
      { objective: "O6", q: "Kipi kati ya hivi kimeidhinishwa na VA kusaidia na madai?", options: ["Wawakilishi wa VSO, mawakili na mawakala wa madai", "Tovuti yoyote", "Mtu yeyote aliyehudumu jeshini", "Wauzaji wa magari"], answer: 0, why: "Office of General Counsel ya VA inaidhinisha aina hizi tatu." },
      { objective: "O6", q: "Wakili au wakala wa madai aliyeidhinishwa anaweza kutoza ada lini?", options: ["Kabla ya kuwasilisha dai lako la kwanza", "Baada tu ya VA kuamua dai lako la kwanza na kwa makubaliano ya ada yaliyosainiwa", "Wakati wowote anaotaka", "Kamwe chini ya sheria yoyote"], answer: 1, why: "VA inasema ada zinaweza kuja tu baada ya uamuzi wa kwanza, kwa makubaliano yaliyosainiwa." },
      { objective: "O6", q: "Mtu anayekusaidia na dai lako anaomba taarifa zako za kuingia va.gov. Unapaswa:", options: ["Kumpa ili afanye kazi haraka", "Kumwandikia kwenye kikaratasi", "Kukataa; usitoe kamwe taarifa zako za kuingia", "Kuzibadilisha ziwe rahisi zaidi"], answer: 2, why: "Usimpe mtu yeyote kamwe taarifa zako za kuingia va.gov." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 5, 8, 9, 12, 15, 18, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Orodha ya kukagua nyaraka", objective: "O1", notYet: "Hakuna orodha, au DD214 haimo.", meets: "Orodha inayoanza na DD214, nyaraka zinazokosekana zikiwa zimewekwa alama.", exceeds: "Inaonyesha kila nyaraka imehifadhiwa wapi na jinsi ya kupata zinazokosekana." },
      { name: "Mafao na jinsi ya kuomba", objective: "O2", notYet: "Mafao yameorodheshwa bila jinsi ya kuomba.", meets: "Kila fao (fidia ya ulemavu, huduma ya afya, elimu) na njia rasmi ya kuliomba.", exceeds: "Inaonyesha jinsi mwanafunzi atakavyolinda tarehe ya kuanza au fomu atakayotumia." },
      { name: "Mpango wa GI Bill", objective: "O5", notYet: "Hakuna programu wala shule iliyotajwa, kama mwanafunzi atatumia GI Bill.", meets: "Programu, shule au mafunzo, na kinachohitajika kwa ajili yake.", exceeds: "Machaguo mawili yamelinganishwa katika GI Bill Comparison Tool." },
      { name: "Msaada wa bure wa aliyeidhinishwa", objective: "O6", notYet: "Hakuna mwakilishi, au kampuni ya kulipwa isiyoidhinishwa.", meets: "Jina na mawasiliano ya mwakilishi au VSO aliyeidhinishwa na VA kutoka zana ya utafutaji ya VA.", exceeds: "Mwanafunzi amewasiliana naye au amepanga miadi." },
      { name: "Dalili za hatari za claim sharks", objective: "O6", notYet: "Chini ya dalili tatu za hatari.", meets: "Dalili tatu za hatari za mtu asiyepaswa kulipwa ili kuwasilisha.", exceeds: "Mwanafunzi anaeleza lini wakili au wakala wa madai aliyeidhinishwa anaweza kutoza." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaowasilisha angalau ombi moja la VA au intent to file ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaowasiliana na mwakilishi au VSO wa bure aliyeidhinishwa ndani ya siku 30",
      "Wanafunzi wanaojiandikisha katika mafunzo yanayolipiwa na GI Bill ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Folda (ya karatasi, au folda salama kwenye kompyuta ya mwanafunzi mwenyewe) kwa nyaraka",
      "DD214 ya mwanafunzi au karatasi nyingine za kuacha jeshi, kama anazo",
      "Tovuti ya bure va.gov, pamoja na GI Bill Comparison Tool na utafutaji wa mwakilishi aliyeidhinishwa",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Usikusanye wala usiangalie kamwe DD214, kumbukumbu za matibabu au namba za Social Security za wanafunzi; wanafunzi wanabaki na folda zao wenyewe.",
      "Mwalike VSO aliyeidhinishwa na VA kwenye kipindi cha mwisho ili wanafunzi wakutane na msaada wa bure ana kwa ana.",
      "Hakikisha fomu, namba za simu na sheria kwenye va.gov wakati wa kipindi, kwa sababu zinaweza kubadilika.",
      "Usitoe ushauri kuhusu maswali ya afya au ya kisheria; yapeleke kwa VA au kwa mwakilishi aliyeidhinishwa.",
      "Pima mpango wa vitendo kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
