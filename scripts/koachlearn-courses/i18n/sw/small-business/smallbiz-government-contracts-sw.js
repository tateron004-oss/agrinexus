"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-government-contracts.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// US-specific course: US agencies, sites and California rules are kept by name; only the explanations are translated.

module.exports = {
  id: "smallbiz-government-contracts-sw",
  lang: "sw",
  translationOf: "smallbiz-government-contracts",
  category: "Small Business",
  name: "Kushinda Zabuni za Serikali",
  skills: "Kujisajili katika SAM.gov, Kuchagua namba za NAICS, Kutumia vyeti vya SBA na vya California, Kutafuta fursa za zabuni, Kusoma tangazo la zabuni, Kuandika taarifa ya uwezo",
  outcome: "kusajili biashara yako ili iuzie serikali, kuchagua namba zako za NAICS, kutafuta fursa za zabuni zinazokufaa, kusoma tangazo la zabuni ili uamue kama utashindana, na kuandika taarifa ya uwezo ya ukurasa mmoja.",
  about: [
    "Serikali ya shirikisho, ya jimbo na za mitaa hununua karibu kila kitu: usafi, upishi, ujenzi, utunzaji wa bustani, uchapishaji, IT, mafunzo, usafirishaji kwa malori na zaidi. Sehemu ya ununuzi huo imetengwa kwa biashara ndogo, na sehemu nyingine kwa biashara ndogo zenye vyeti, kama zinazomilikiwa na wanawake au na wanajeshi wastaafu (veterans).",
    "Kozi hii inakupitisha katika hatua kwa mpangilio: kujisajili katika SAM.gov na kupata Unique Entity ID yako, kuchagua namba za NAICS, kuelewa vyeti vya SBA na vyeti vya California vya Small Business na DVBE, kutafuta fursa, kusoma tangazo la zabuni, na kuandika taarifa ya uwezo unayoweza kuwatumia wanunuzi.",
    "Kanuni, viwango na tovuti hubadilika. Kila somo linaonyesha ukurasa rasmi wa kukagua. Msaada wa bure unapatikana kutoka APEX Accelerators, ofisi za wilaya za SBA na Small Business Development Centers; huhitaji kumlipa mtu yeyote ili ujisajili.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi unayoifanya mara moja. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika taarifa ya uwezo ya ukurasa mmoja kwa biashara yako yenye sehemu nne: uwezo mkuu, kazi za awali, kinachokutofautisha, na taarifa za kampuni (jina rasmi, UEI, namba za NAICS, vyeti, njia za kuwasiliana). Kisha tafuta fursa moja halisi katika SAM.gov au Cal eProcure inayolingana na namba ya NAICS iliyo kwenye taarifa yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo, wengi wao wa jamii za wachache, wanawake na wanajeshi wastaafu huko California, wanaouza huduma au bidhaa kama usafi, upishi, ujenzi, utunzaji wa bustani, uchapishaji, IT, mafunzo au usafirishaji kwa malori, na wanaotaka kuiuzia serikali ya shirikisho, ya jimbo na za mitaa.",
    startingPoint: "Wanaendesha biashara inayofanya kazi yenye wateja na wanazijua huduma zao vizuri. Wengi hawajawahi kujisajili katika SAM.gov, kutafuta namba ya NAICS wala kusoma tangazo la zabuni la serikali.",
    gap: "Wanunuzi wa serikali hutumia pesa nyingi kwa biashara ndogo na zenye vyeti, lakini hatua za usajili, namba na matangazo marefu ya zabuni huwazuia wamiliki wengi, na kampuni za ulaghai hutoza pesa kwa usajili ulio bure. Wanafunzi wanahitaji kujisajili wenyewe bure, kutafuta zabuni zinazowafaa, kuamua lini kushindana na kuitambulisha biashara yao kwa taarifa ya uwezo.",
    constraints: [
      "Kanuni, viwango vya ukubwa na masharti ya vyeti hubadilika; wanafunzi wanakagua SAM.gov, SBA na California Department of General Services",
      "Faragha: taarifa za benki na EIN zinaingizwa katika SAM.gov tu, kamwe si katika zana ya AI wala barua pepe",
      "Hatari ya ulaghai: ofa zinazoonekana rasmi za kukusajili au kuhuisha usajili kwa malipo",
      "Muda: kama dakika 60 kwa jumla, pamoja na muda wa usajili halisi",
      "Maneno rahisi kwa wamiliki ambao ni wapya katika ununuzi wa serikali"
    ],
    prerequisites: "Biashara iliyosajiliwa yenye jina rasmi, anwani na EIN au namba ya kodi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiwa na jina rasmi la biashara yako, anwani, EIN na taarifa za benki", action: "kusajili biashara yako katika SAM.gov mwenyewe na kupata UEI", standard: "bure, ukihuisha kila siku 365 na kupuuza ofa za usajili wa kulipia" },
    { id: "O2", condition: "Ukitumia ukurasa wa NAICS wa Census na Size Standards Tool ya SBA", action: "kuchagua namba kuu ya NAICS na kukagua kama biashara yako inahesabiwa kuwa ndogo kwa namba hiyo", standard: "namba ikilingana na huduma yako kuu" },
    { id: "O3", condition: "Ukipewa kanuni za msingi za vyeti vya SBA na vya California", action: "kutambua vyeti ambavyo biashara yako inaweza kustahili na mahali pa kuviomba", standard: "ukitaja tovuti sahihi kwa kila kimoja" },
    { id: "O4", condition: "Ukitumia SAM.gov na Cal eProcure", action: "kutafuta na kuhifadhi utafutaji wa fursa zinazolingana na namba zako za NAICS", standard: "ili fursa mpya zinazolingana zikufikie kwa barua pepe" },
    { id: "O5", condition: "Ukipewa tangazo la zabuni", action: "kupata maelezo ya kazi, maelekezo, vigezo vya tathmini na tarehe ya mwisho, na kuamua kama utashindana", standard: "ukijibu kila swali la kushindana au kutoshindana" },
    { id: "O6", condition: "Kwa wanunuzi wa serikali na wakandarasi wakuu", action: "kuandika taarifa ya uwezo ya ukurasa mmoja yenye uwezo mkuu, kazi za awali, vinavyokutofautisha na taarifa za kampuni", standard: "bila namba za siri kama taarifa za benki au EIN" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa kuiuzia serikali",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kujisajili katika SAM.gov na kupata UEI",
          minutes: 6,
          goal: "Kusanya unachohitaji na usajili biashara yako katika SAM.gov mwenyewe, bure.",
          text: [
            "SAM.gov (System for Award Management) ni tovuti rasmi ya serikali ya Marekani ya kufanya biashara na mashirika ya shirikisho. Ili kushindana na kushinda zabuni za shirikisho, biashara yako lazima isajiliwe hapo. Usajili unakupa Unique Entity ID (UEI), namba ya herufi na tarakimu 12 inayotambulisha biashara yako.",
            "Unaweza kuomba UEI peke yake bila usajili kamili, lakini ukiwa na UEI peke yake huwezi kuomba moja kwa moja tuzo za shirikisho. Kwa zabuni, kamilisha usajili kamili. Lazima uuhuishe kila siku 365 ili ubaki hai.",
            "Kujisajili katika SAM.gov ni bure. Baadhi ya kampuni hutuma barua pepe au barua zinazoonekana rasmi zikijitolea kukusajili au kuhuisha usajili wako kwa malipo, au zikionya kwamba usajili wako unakaribia kuisha. Hulazimiki kamwe kuwalipa. Jisajili katika sam.gov tu, na upate msaada wa bure kutoka APEX Accelerator ukikwama.",
            "Kabla hujaanza, kusanya jina rasmi la biashara yako na anwani halisi kama IRS inavyozo, Employer Identification Number (EIN) au namba ya kodi, na taarifa za benki za kupokea malipo. Ziandike katika SAM.gov yenyewe tu, kamwe si katika zana ya AI wala barua pepe."
          ],
          steps: ["Kusanya jina rasmi la biashara yako, anwani halisi, EIN na taarifa za benki.", "Nenda sam.gov na utengeneze akaunti ya kuingia.", "Chagua kusajili biashara yako, si kupata UEI tu.", "Jibu kila sehemu; jina la biashara na anwani lazima vilingane na rekodi za IRS.", "Andika UEI yako na tarehe usajili wako unapoisha.", "Weka kikumbusho cha kuhuisha kabla ya siku 365."],
          words: [["SAM.gov", "System for Award Management, tovuti ya shirikisho ambapo biashara hujisajili ili kuiuzia serikali."], ["UEI", "Unique Entity ID: namba ya herufi na tarakimu 12 inayotambulisha biashara yako kwa serikali."], ["EIN", "Employer Identification Number: namba ya kodi ya biashara yako kutoka IRS."], ["APEX Accelerator", "kituo cha ushauri cha bure kinachosaidia biashara kuiuzia serikali."]],
          slides: [
            { title: "SAM.gov ndio mlango wa kuingia", bullets: ["Jisajili ili kushindana katika zabuni za shirikisho", "Unapata Unique Entity ID ya herufi na tarakimu 12", "Huisha kila siku 365"] },
            { title: "UEI peke yake au usajili kamili", bullets: ["UEI peke yake: huwezi kuomba tuzo", "Usajili kamili: unahitajika kwa zabuni"] },
            { title: "Ni bure", bullets: ["Puuza ofa za kulipia za kukusajili au kuhuisha", "Jisajili katika sam.gov tu", "Msaada wa bure: APEX Accelerators"] },
            { title: "Kuwa navyo tayari", bullets: ["Jina rasmi na anwani vinavyolingana na IRS", "EIN au namba ya kodi na taarifa za benki", "Viandike katika SAM.gov tu"] }
          ],
          sources: [
            { name: "SAM.gov: Usajili wa biashara (Entity registration)", url: "https://sam.gov/content/entity-registration" },
            { name: "SBA: Masharti ya msingi ya zabuni za serikali", url: "https://www.sba.gov/federal-contracting/contracting-guide/basic-requirements" }
          ],
          tryIt: "Tengeneza orodha ya kukagua ya usajili wa SAM.gov kwa biashara yako: jina rasmi, anwani halisi, EIN, taarifa za benki, mtu wa kuwasiliana naye. Weka alama kwa vile ulivyo navyo tayari. Kama tayari umesajiliwa, angalia tarehe usajili wako unapoisha na uweke kikumbusho cha kuhuisha.",
          youCanNow: "kujiandaa na kukamilisha usajili wa bure wa SAM.gov, kueleza UEI ni nini, na kutambua ulaghai wa usajili wa kulipia.",
          quickCheck: [
            { objective: "O1", q: "Jina rasmi na anwani yako katika SAM.gov lazima vilingane na nini?", options: ["Kile IRS inacho kuhusu biashara yako", "Ukurasa wako wa mitandao ya kijamii", "Nembo yako", "Anwani yako binafsi ya kupokea barua"], answer: 0, why: "Jina rasmi na anwani yako lazima vilingane kabisa na vya IRS." },
            { objective: "O1", q: "Umekwama katika hatua ya usajili wa SAM.gov. Unaweza kupata msaada wa bure wapi?", options: ["Kampuni iliyokutumia barua pepe ikitoa msaada kwa $300", "APEX Accelerator", "Zana ya AI, kwa kubandika taarifa zako za benki", "Popote; lazima umlipe mtu"], answer: 1, why: "APEX Accelerators hutoa msaada wa bure; hulazimiki kamwe kulipa ili ujisajili." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuchagua namba za NAICS na kukagua ukubwa wako",
          minutes: 5,
          goal: "Chagua namba kuu ya NAICS na ukague kama biashara yako inahesabiwa kuwa ndogo kwa namba hiyo.",
          text: [
            "Namba za NAICS (North American Industry Classification System) hupanga biashara kulingana na kile zinachouza. Kila zabuni ya serikali hupewa namba moja ya NAICS, na wanunuzi hutafuta biashara kwa namba. Kwa mfano, kuna namba za huduma za usafi wa majengo, uchapishaji wa kibiashara na usanifu wa mifumo ya kompyuta.",
            "Tafuta namba katika ukurasa wa NAICS wa US Census Bureau (census.gov/naics) kwa kuandika maneno yanayoeleza kazi yako. Chagua namba moja kuu kwa huduma yako kuu na uongeze nyingine kwa vitu vingine unavyouza.",
            "Kila namba ya NAICS ina kiwango cha ukubwa: ukubwa wa juu kabisa biashara inaweza kuwa nao na bado ihesabiwe kuwa ndogo kwa namba hiyo, kupimwa kwa mapato ya mwaka au idadi ya wafanyakazi. Watengenezaji wengi wenye wafanyakazi 500 au chini, na wasio watengenezaji wengi wenye wastani wa chini ya $7.5 milioni kwa mwaka, huhesabiwa kuwa wadogo, lakini inatofautiana. Kagua yako kwa Size Standards Tool ya SBA.",
            "Kuwa mdogo kwa namba fulani kunakuruhusu kushindana katika zabuni zilizotengwa kwa biashara ndogo chini ya namba hiyo."
          ],
          steps: ["Orodhesha unachouza kwa maneno rahisi.", "Tafuta katika census.gov/naics namba zinazolingana.", "Chagua namba moja kuu na nyingine mbili au tatu.", "Kagua kila namba kwa Size Standards Tool ya SBA.", "Ongeza namba hizo kwenye usajili wako wa SAM.gov."],
          words: [["Namba ya NAICS", "namba inayoeleza aina ya biashara uliyo nayo."], ["Namba kuu ya NAICS", "namba ya bidhaa au huduma yako kuu."], ["Kiwango cha ukubwa", "ukubwa wa juu kabisa biashara inaweza kuwa nao na bado ihesabiwe kuwa ndogo kwa namba ya NAICS."], ["Zabuni iliyotengwa (set-aside)", "zabuni ambayo biashara fulani tu, kama biashara ndogo, zinaweza kushindana."]],
          slides: [
            { title: "Namba za NAICS hufanya nini", bullets: ["Hupanga biashara kwa kile zinachouza", "Kila zabuni ina namba moja", "Wanunuzi hutafuta biashara kwa namba"] },
            { title: "Kutafuta namba zako", bullets: ["Tafuta katika census.gov/naics", "Namba moja kuu kwa huduma yako kuu", "Ongeza namba za vitu vingine unavyouza"] },
            { title: "Viwango vya ukubwa", bullets: ["Kila namba ina kikomo cha biashara ndogo", "Kwa mapato ya mwaka au idadi ya wafanyakazi", "Kagua kwa Size Standards Tool ya SBA"] }
          ],
          sources: [
            { name: "SBA: Viwango vya ukubwa (Size standards)", url: "https://www.sba.gov/federal-contracting/contracting-guide/size-standards" },
            { name: "US Census Bureau: NAICS", url: "https://www.census.gov/naics/" }
          ],
          tryIt: "Tafuta katika census.gov/naics huduma yako kuu na uandike namba yako kuu ya NAICS na nyingine mbili. Kisha kagua moja yao katika Size Standards Tool ya SBA na uandike kama biashara yako inahesabiwa kuwa ndogo.",
          youCanNow: "kuchagua namba za NAICS kwa biashara yako na kukagua kama unahesabiwa kuwa mdogo kwa kila moja.",
          quickCheck: [
            { objective: "O2", q: "Kila zabuni ya serikali hupewa namba ngapi za NAICS?", options: ["Hakuna", "Kumi", "Moja", "Kadiri mshindani anavyotaka"], answer: 2, why: "Kila zabuni hupewa namba moja ya NAICS, na wanunuzi hutafuta kwa namba." },
            { objective: "O2", q: "Unaendesha kampuni ya usafi ambayo pia inauza vifaa kidogo. Unachaguaje namba?", options: ["Chagua namba moja bila mpango", "Chagua namba ya vifaa tu", "Acha namba; wanunuzi hutafuta kwa jina", "Chagua usafi kama namba kuu na uongeze nyingine kwa vingine unavyouza"], answer: 3, why: "Chagua namba moja kuu kwa huduma yako kuu na uongeze nyingine kwa vitu vingine unavyouza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Vyeti vya SBA na vya California",
          minutes: 6,
          goal: "Amua ni vyeti gani vya shirikisho na vya California ambavyo biashara yako inaweza kustahili.",
          text: [
            "Vyeti vinakuruhusu kushindana katika zabuni zilizotengwa kwa biashara ndogo fulani. Vyeti vya shirikisho huombwa katika certifications.sba.gov. Kila kimoja kina kanuni zake; haya ni ya msingi tu, kwa hiyo kagua kurasa za SBA kwa orodha kamili.",
            "8(a) Business Development: kwa biashara ndogo zinazomilikiwa na kuongozwa angalau 51% na raia wa Marekani wenye hali duni kijamii na kiuchumi, wenye vikomo vya utajiri binafsi, mapato na mali, kwa kawaida miaka miwili ya biashara, na programu ya mara moja ya hadi miaka tisa. HUBZone: ofisi yako kuu iko katika HUBZone (Historically Underutilized Business Zone) na angalau 35% ya wafanyakazi wanaishi katika eneo kama hilo. Women-Owned Small Business (WOSB): inamilikiwa na kuongozwa angalau 51% na wanawake raia wa Marekani; serikali inalenga kutoa 5% ya pesa za zabuni kwa WOSB. Zinazomilikiwa na wanajeshi wastaafu (VOSB) na na wanajeshi wastaafu wenye ulemavu uliotokana na huduma (SDVOSB): zinathibitishwa na programu ya VetCert ya SBA tangu 2023.",
            "California ina vyeti vyake kutoka Office of Small Business and DVBE Services ya Department of General Services, vinavyoombwa katika Cal eProcure. Small Business (SB): inamilikiwa kwa kujitegemea, ofisi kuu iko California, na, pamoja na kampuni zake shirika, ina wafanyakazi 100 au chini na wastani wa mapato ghafi ya mwaka wa $19 milioni au chini (au mtengenezaji mwenye wafanyakazi 100 au chini). Disabled Veteran Business Enterprise (DVBE): inamilikiwa na kusimamiwa angalau 51% na wanajeshi wastaafu wenye ulemavu uliotokana na huduma wa angalau 10%.",
            "Miji mingi, kaunti na wilaya za shule pia hukubali vyeti vya jimbo. Uliza APEX Accelerator ni vipi vinavyokufaa."
          ],
          words: [["8(a)", "programu ya SBA kwa biashara ndogo zinazomilikiwa na watu wenye hali duni kijamii na kiuchumi."], ["HUBZone", "Historically Underutilized Business Zone, eneo lililosahaulika kibiashara; biashara zilizoko huko zinaweza kupata msaada wa zabuni."], ["WOSB", "Women-Owned Small Business: biashara ndogo inayomilikiwa na wanawake."], ["SDVOSB", "Service-Disabled Veteran-Owned Small Business: biashara ndogo inayomilikiwa na mwanajeshi mstaafu mwenye ulemavu uliotokana na huduma."], ["DVBE", "Disabled Veteran Business Enterprise, cheti cha California kwa biashara za wanajeshi wastaafu wenye ulemavu."]],
          slides: [
            { title: "Kwa nini upate cheti", bullets: ["Shindana katika zabuni zilizotengwa kwa biashara fulani", "Shirikisho: certifications.sba.gov"] },
            { title: "Vyeti vya shirikisho", bullets: ["8(a): wamiliki wenye hali duni, hadi miaka 9", "HUBZone: ofisi ndani ya eneo, 35% ya wafanyakazi wanaishi humo", "WOSB: 51% ya wanawake; VOSB/SDVOSB: VetCert ya SBA"] },
            { title: "Vyeti vya California", bullets: ["Omba katika Cal eProcure (DGS)", "SB: ofisi CA, wafanyakazi 100 au chini, mapato hadi $19M", "DVBE: 51% inamilikiwa na wanajeshi wastaafu wenye ulemavu"] },
            { title: "Pata msaada wa bure", bullets: ["APEX Accelerators", "Ofisi za wilaya za SBA", "Kagua kanuni kamili za kila programu"] }
          ],
          sources: [
            { name: "SBA: Programu ya 8(a) Business Development", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
            { name: "SBA: Programu ya HUBZone", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program" },
            { name: "SBA: Programu ya Women-Owned Small Business", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contract-program" },
            { name: "SBA: Msaada wa zabuni kwa wanajeshi wastaafu (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "California DGS: Kuomba cheti cha Small Business na DVBE", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" }
          ],
          tryIt: "Tengeneza jedwali la vyeti sita vya somo hili (8(a), HUBZone, WOSB, VOSB au SDVOSB, SB ya California, DVBE ya California). Kwa kila kimoja, andika ndiyo, labda au hapana kwa biashara yako, na kanuni moja inayoamua. Zungushia duara kile utakachokichunguza kwanza.",
          youCanNow: "kutaja vyeti vikuu vya SBA na vya California, kukagua vipi biashara yako inaweza kustahili, na kujua mahali pa kuviomba.",
          quickCheck: [
            { objective: "O3", q: "Unaomba wapi vyeti vya shirikisho vya SBA?", options: ["certifications.sba.gov", "census.gov/naics", "Ofisi yoyote ya kaunti", "Tovuti binafsi inayotoza malipo"], answer: 0, why: "Vyeti vya shirikisho huombwa katika certifications.sba.gov." },
            { objective: "O3", q: "Wewe ni mwanajeshi mstaafu mwenye ulemavu unayemiliki biashara huko California. Uchunguze cheti gani cha jimbo?", options: ["HUBZone", "DVBE kupitia Cal eProcure", "WOSB", "Hakuna; California haina vyeti"], answer: 1, why: "DVBE ya California ni kwa biashara zinazomilikiwa na kusimamiwa angalau 51% na wanajeshi wastaafu wenye ulemavu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa kuiuzia serikali",
        questions: [
          { objective: "O1", q: "Unapata nini unapojisajili katika SAM.gov?", options: ["Mkopo wa benki", "Unique Entity ID (UEI)", "Zabuni ya uhakika", "Leseni ya biashara"], answer: 1, why: "Usajili wa SAM.gov unaipa biashara yako Unique Entity ID ya herufi na tarakimu 12." },
          { objective: "O1", q: "Kampuni inakutumia barua pepe ikisema itahuisha usajili wako wa SAM.gov kwa $500. Unafanya nini?", options: ["Lipa haraka kabla haujaisha", "Watumie EIN yako na taarifa za benki", "Jibu kwa nenosiri lako", "Ipuuze na uhuishe mwenyewe bure katika sam.gov"], answer: 3, why: "Usajili wa SAM.gov ni bure; hulazimiki kamwe kumlipa mtu mwingine." },
          { objective: "O1", q: "Lazima uhuishe usajili wako wa SAM.gov mara ngapi?", options: ["Kila siku 365", "Kila miaka 10", "Kamwe", "Kila wiki"], answer: 0, why: "SAM.gov inasema lazima uhuishe kila siku 365 ili ubaki hai." },
          { objective: "O2", q: "Namba ya NAICS inaeleza nini?", options: ["Akaunti yako ya benki", "Anwani ya nyumbani kwako", "Aina ya biashara uliyo nayo na unachouza", "Alama yako ya mikopo"], answer: 2, why: "Namba za NAICS hupanga biashara kwa bidhaa au huduma zao." },
          { objective: "O3", q: "Ofisi yako kuu iko katika HUBZone na 40% ya wafanyakazi wako wanaishi katika eneo kama hilo. Uchunguze cheti gani?", options: ["WOSB", "DVBE", "8(a) tu", "HUBZone"], answer: 3, why: "HUBZone inahitaji ofisi kuu ndani ya HUBZone na angalau 35% ya wafanyakazi wakiishi katika eneo kama hilo." }
        ]
      }
    },
    {
      name: "Sura 2: Kutafuta na kushinda zabuni",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutafuta fursa",
          minutes: 5,
          goal: "Tafuta katika SAM.gov na Cal eProcure fursa zinazolingana na namba zako za NAICS na uhifadhi utafutaji.",
          text: [
            "Mashirika ya shirikisho hutangaza fursa za zabuni katika SAM.gov. Tafuta katika Contract Opportunities kwa namba yako ya NAICS, jimbo lako na aina ya zabuni iliyotengwa, kama biashara ndogo, 8(a), HUBZone, WOSB au SDVOSB. Hifadhi utafutaji wako ili fursa mpya zinazolingana zikufikie kwa barua pepe.",
            "Mashirika ya jimbo la California hutangaza zabuni katika Cal eProcure (caleprocure.ca.gov). Jisajili huko, ongeza maneno muhimu na namba za bidhaa za UNSPSC kwenye wasifu wako, na uwashe arifa. Cal eProcure pia inaonyesha idara zilinunua nini zamani na kwa bei gani, jambo linalokusaidia kupanga bei zako.",
            "Huhitaji kushinda zabuni kubwa kwanza. Biashara ndogo nyingi huanza kama wakandarasi wadogo wa wakandarasi wakuu wakubwa. Idara za California zina SB/DVBE Advocates wanaosaidia biashara zenye vyeti, na APEX Accelerators hukusaidia kupata zabuni bure.",
            "Tafuta fursa zinazolingana na kile unachokifanya vizuri tayari, katika eneo unaloweza kuhudumia, na kwa ukubwa unaoweza kuubeba."
          ],
          steps: ["Katika SAM.gov, tafuta Contract Opportunities kwa namba yako ya NAICS na jimbo.", "Chuja kwa zabuni zilizotengwa unazostahili.", "Hifadhi utafutaji ili fursa mpya zikufikie kwa barua pepe.", "Jisajili katika Cal eProcure na uongeze maneno muhimu na namba za UNSPSC kwa arifa.", "Wasiliana na APEX Accelerator au SB/DVBE Advocate upate fursa."],
          words: [["Fursa ya zabuni", "tangazo linalosema serikali inataka kununua kitu."], ["Mkandarasi mkuu", "biashara inayoshika mkataba na serikali."], ["Mkandarasi mdogo", "biashara inayoajiriwa na mkandarasi mkuu kufanya sehemu ya kazi."], ["UNSPSC", "namba ya bidhaa na huduma inayotumiwa na mfumo wa zabuni wa California."]],
          slides: [
            { title: "Shirikisho: SAM.gov", bullets: ["Tafuta Contract Opportunities kwa NAICS na jimbo", "Chuja kwa zabuni zilizotengwa unazostahili", "Hifadhi utafutaji upate arifa kwa barua pepe"] },
            { title: "California: Cal eProcure", bullets: ["Jisajili na uongeze maneno muhimu na namba za UNSPSC", "Washa arifa za zabuni", "Ona manunuzi na bei za zamani"] },
            { title: "Anza pale unapoweza kushinda", bullets: ["Kuwa mkandarasi mdogo wa mkandarasi mkuu", "SB/DVBE Advocates na APEX Accelerators husaidia", "Linganisha ujuzi wako, eneo na ukubwa"] }
          ],
          sources: [
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "California DGS: Jinsi ya kufanya biashara na Jimbo la California", url: "https://www.dgs.ca.gov/PD/Resources/Page-Content/Procurement-Division-Resources-List-Folder/How-to-do-business-with-the-state-of-California" },
            { name: "Cal eProcure: Tafuta fursa za zabuni", url: "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx" }
          ],
          tryIt: "Tafuta katika Contract Opportunities ya SAM.gov kwa kutumia namba yako kuu ya NAICS na jimbo lako. Andika fursa mbili: shirika, wanachotaka, aina ya zabuni iliyotengwa na tarehe ya mwisho. Hifadhi utafutaji.",
          youCanNow: "kutafuta fursa za zabuni za shirikisho na za California zinazolingana na namba zako na kuweka arifa.",
          quickCheck: [
            { objective: "O4", q: "Mashirika ya jimbo la California hutangaza zabuni wapi?", options: ["SAM.gov tu", "Mitandao ya kijamii", "Cal eProcure", "Census Bureau"], answer: 2, why: "Mashirika ya jimbo la California hutangaza zabuni katika Cal eProcure." },
            { objective: "O4", q: "Unapata zabuni kubwa sana iliyo mbali na eneo lako ambayo usingeweza kuibeba. Unafanya nini?", options: ["Shindana hata hivyo", "Iombe AI ikushindanie", "Nakili ofa ya kampuni nyingine", "Tafuta fursa zinazolingana na unachofanya vizuri kwa ukubwa unaoweza kuubeba"], answer: 3, why: "Tafuta kazi unayoifanya vizuri, katika eneo unaloweza kuhudumia, kwa ukubwa unaoweza kuubeba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusoma tangazo la zabuni",
          minutes: 6,
          goal: "Soma sehemu muhimu za tangazo la zabuni na uamue kama utashindana.",
          text: [
            "Tangazo la zabuni (solicitation) ni ombi la serikali la kupokea ofa. Linaweza kuitwa Request for Quote (RFQ), Request for Proposal (RFP) au Invitation for Bid (IFB). Yanaweza kuwa marefu, lakini kwanza unahitaji kupata sehemu chache tu muhimu.",
            "Pata hizi: maelezo ya kazi (statement of work, kazi wanayotaka ifanyike), maelekezo (nini cha kutuma na jinsi gani), vigezo vya tathmini (jinsi watakavyochagua mshindi, kama bei ya chini kabisa au thamani bora), tarehe na saa ya mwisho, tarehe ya mwisho ya maswali, na jina la afisa wa mikataba. Pia angalia marekebisho (amendments), yaani mabadiliko yanayotangazwa baadaye.",
            "Kisha amua kushindana au kutoshindana. Uliza: Je, tunaweza kufanya kazi hii vizuri? Je, tunatimiza kila sharti, kama leseni, bima na aina ya zabuni iliyotengwa? Je, tunaweza kukamilisha kwa wakati na kwa bei ambayo bado inatupa faida? Je, tuna kazi za zamani zinazofanana za kuonyesha?",
            "Kukosa agizo moja, kama kikomo cha kurasa au fomu inayohitajika, kunaweza kufanya ofa ikataliwe. Tengeneza orodha ya kukagua kutoka kwenye maelekezo na uweke alama kwa kila kipengele kabla ya kutuma. Msaidizi wa AI anaweza kukusaidia kufupisha tangazo refu la umma, lakini lazima usome maelekezo halisi wewe mwenyewe."
          ],
          steps: ["Pata maelezo ya kazi, maelekezo na vigezo vya tathmini.", "Andika tarehe na saa ya mwisho, tarehe ya mwisho ya maswali na afisa wa mikataba.", "Angalia kama kuna marekebisho.", "Jibu maswali manne ya kushindana au kutoshindana.", "Ukishindana, geuza maelekezo kuwa orodha ya kukagua na uweke alama kwa kila kipengele."],
          words: [["Tangazo la zabuni (solicitation)", "ombi la serikali la kupokea ofa, kama RFQ, RFP au IFB."], ["Maelezo ya kazi (statement of work)", "sehemu inayosema hasa kazi gani inatakiwa."], ["Vigezo vya tathmini", "jinsi serikali itakavyochagua mshindi."], ["Marekebisho (amendment)", "badiliko la tangazo la zabuni linalotangazwa baada ya tangazo la kwanza."], ["Afisa wa mikataba", "mtu wa serikali mwenye mamlaka ya kusaini mkataba."]],
          slides: [
            { title: "Majina utakayoyaona", bullets: ["RFQ: Request for Quote (ombi la bei)", "RFP: Request for Proposal (ombi la pendekezo)", "IFB: Invitation for Bid (mwaliko wa zabuni)"] },
            { title: "Pata sehemu hizi kwanza", bullets: ["Maelezo ya kazi na maelekezo", "Vigezo vya tathmini", "Tarehe ya mwisho, mwisho wa maswali, marekebisho"] },
            { title: "Kushindana au kutoshindana?", bullets: ["Tunaweza kuifanya vizuri?", "Tunatimiza kila sharti?", "Tunaweza kukamilisha kwa wakati na faida? Kazi za zamani?"] },
            { title: "Fuata kila agizo", bullets: ["Kukosa moja kunaweza kukufanya ukataliwe", "Tengeneza orodha ya kukagua na uweke alama kwa kila kipengele"] }
          ],
          tryIt: "Fungua moja ya fursa ulizopata katika somo lililopita. Andika maelezo ya kazi kwa sentensi moja, vigezo vya tathmini, tarehe na saa ya mwisho, na tarehe ya mwisho ya maswali. Kisha jibu maswali manne ya kushindana au kutoshindana na uamue.",
          youCanNow: "kupata sehemu muhimu za tangazo la zabuni na kufanya uamuzi ulio wazi wa kushindana au kutoshindana.",
          quickCheck: [
            { objective: "O5", q: "Lipi ni jina jingine la tangazo la zabuni?", options: ["Request for Proposal (RFP)", "Taarifa ya uwezo", "UEI", "Kiwango cha ukubwa"], answer: 0, why: "Tangazo la zabuni linaweza kuitwa RFQ, RFP au IFB." },
            { objective: "O5", q: "Maelekezo yanaweka kikomo cha kurasa 10. Unafanya nini?", options: ["Tuma kurasa 15 ili uonyeshe zaidi", "Iweke kwenye orodha yako ya kukagua na uweke alama kabla ya kutuma", "Iache AI iamue urefu", "Ipuuze; ni pendekezo tu"], answer: 1, why: "Kukosa agizo moja, kama kikomo cha kurasa, kunaweza kufanya ofa yako ikataliwe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika taarifa ya uwezo",
          minutes: 6,
          goal: "Andika taarifa ya uwezo ya ukurasa mmoja inayomweleza mnunuzi unachofanya na jinsi ya kukufikia.",
          text: [
            "Taarifa ya uwezo (capability statement) ni muhtasari wa ukurasa mmoja wa biashara yako kwa wanunuzi wa serikali na wakandarasi wakuu. Unaituma unapokutana na wanunuzi, kwenye matukio ya kuwafikia wafanyabiashara, na unapojitambulisha kwa afisa wa mikataba au SB/DVBE Advocate.",
            "Ina sehemu nne. Uwezo mkuu: unachofanya vizuri zaidi, kwa vitone vifupi. Kazi za awali: kazi mbili au tatu ulizofanya, pamoja na aina ya mteja, ulichofanya na matokeo. Vinavyokutofautisha: kinachokufanya uwe tofauti, kama kasi, ujuzi maalum au kuwepo katika eneo husika. Taarifa za kampuni: jina rasmi, UEI, namba ya CAGE kama unayo, namba za NAICS, vyeti, na njia za kuwasiliana.",
            "Iwe ukurasa mmoja tu, rahisi kupitia kwa haraka, ikiwa na nembo yako na njia za kuwasiliana juu. Tumia maneno ya mnunuzi kutoka kwenye maelezo ya kazi pale yanapofaa. Tengeneza toleo kwa kila aina ya mnunuzi kama unauza huduma tofauti.",
            "Msaidizi wa AI anaweza kukusaidia kufupisha vitone au kuvifanya viwe wazi zaidi. Usibandike namba za siri kama taarifa zako za benki au EIN; UEI na namba za NAICS ni sawa kuonyesha."
          ],
          steps: ["Andika uwezo mkuu tatu hadi tano kama vitone vifupi.", "Ongeza mifano miwili au mitatu ya kazi za awali: aina ya mteja, kazi, matokeo.", "Andika vitu viwili au vitatu vinavyokutofautisha.", "Ongeza taarifa za kampuni: jina rasmi, UEI, namba ya CAGE, namba za NAICS, vyeti na njia za kuwasiliana.", "Iweke katika ukurasa mmoja na uihifadhi kama PDF."],
          words: [["Taarifa ya uwezo", "muhtasari wa ukurasa mmoja wa biashara yako kwa wanunuzi wa serikali."], ["Uwezo mkuu", "vitu ambavyo biashara yako inafanya vizuri zaidi."], ["Kazi za awali", "kazi ulizofanya zamani zinazoonyesha kwamba unaweza kukamilisha kazi."], ["Kinachokutofautisha", "kitu kinachoifanya biashara yako iwe tofauti na nyingine."], ["Namba ya CAGE", "namba inayotambulisha biashara zinazofanya kazi kwa serikali, hutolewa pamoja na usajili wa SAM."]],
          slides: [
            { title: "Ni nini", bullets: ["Ukurasa mmoja kuhusu biashara yako", "Kwa wanunuzi wa serikali na wakandarasi wakuu", "Ituma unapojitambulisha"] },
            { title: "Sehemu nne", bullets: ["Uwezo mkuu", "Kazi za awali", "Vinavyokutofautisha", "Taarifa za kampuni: UEI, NAICS, vyeti, mawasiliano"] },
            { title: "Ifanye rahisi kupitia", bullets: ["Ukurasa mmoja, nembo na mawasiliano juu", "Tumia maneno ya mnunuzi yanapofaa", "Toleo kwa kila aina ya mnunuzi"] },
            { title: "Kutumia AI kuiboresha", bullets: ["Fupisha vitone na uvifanye wazi", "Hakuna taarifa za benki wala EIN katika prompt", "UEI na namba za NAICS ni sawa kuonyesha"] }
          ],
          tryIt: "Kazi ya mwisho: andika taarifa yako ya uwezo ya ukurasa mmoja yenye uwezo mkuu, kazi za awali, vinavyokutofautisha na taarifa za kampuni. Kisha tafuta fursa moja halisi katika SAM.gov au Cal eProcure inayolingana na namba ya NAICS iliyo kwenye taarifa yako na uandike jina lake na tarehe ya mwisho.",
          youCanNow: "kuandika taarifa ya uwezo ya ukurasa mmoja na kuilinganisha na fursa halisi za serikali.",
          quickCheck: [
            { objective: "O6", q: "Taarifa ya uwezo inapaswa kuwa ndefu kiasi gani?", options: ["Kurasa kumi", "Ndefu kadiri iwezekanavyo", "Ukurasa mmoja", "Sentensi moja"], answer: 2, why: "Ni muhtasari wa ukurasa mmoja ulio rahisi kupitia." },
            { objective: "O6", q: "Unaandika sehemu ya taarifa za kampuni. Unaacha nini?", options: ["UEI yako", "Namba zako za NAICS", "Njia zako za kuwasiliana", "Taarifa zako za benki na EIN"], answer: 3, why: "UEI na namba za NAICS ni sawa kuonyesha; namba za siri kama taarifa za benki na EIN si sawa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutafuta na kushinda zabuni",
        questions: [
          { objective: "O4", q: "Mashirika ya shirikisho hutangaza fursa za zabuni wapi?", options: ["SAM.gov", "Mtandao wa kijamii", "Tovuti ya benki yako", "DMV"], answer: 0, why: "Fursa za zabuni za shirikisho hutangazwa katika SAM.gov." },
          { objective: "O5", q: "Sehemu gani ya tangazo la zabuni inakuambia jinsi mshindi atakavyochaguliwa?", options: ["Ukurasa wa mbele", "Vigezo vya tathmini", "Nembo ya shirika", "Namba za kurasa"], answer: 1, why: "Vigezo vya tathmini vinaeleza jinsi ofa zinavyopimwa." },
          { objective: "O5", q: "Huwezi kukamilisha kazi kufikia tarehe inayotakiwa. Uamuzi wa busara ni upi?", options: ["Shindana hata hivyo na utumaini", "Ahidi kisha uchelewe", "Amua kutoshindana katika hii", "Puuza tarehe"], answer: 2, why: "Kama huwezi kutimiza sharti muhimu, kutoshindana kunalinda sifa yako." },
          { objective: "O6", q: "Kipi kinafaa katika sehemu ya taarifa za kampuni ya taarifa ya uwezo?", options: ["Namba ya akaunti yako ya benki", "EIN yako", "Nenosiri lako", "UEI yako na namba za NAICS"], answer: 3, why: "UEI, namba za NAICS, vyeti na njia za kuwasiliana husaidia wanunuzi kukupata na kukukagua." },
          { objective: "O6", q: "Ni njia ipi nzuri kwa biashara ndogo mpya kuanza?", options: ["Kushindana katika zabuni kubwa kabisa tu", "Kuwa mkandarasi mdogo wa mkandarasi mkuu", "Kumlipa mtu akushindie zabuni", "Kusubiri serikali ikupigie simu"], answer: 1, why: "Kuwa mkandarasi mdogo hujenga kazi za awali kwa hatari ndogo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kushinda Zabuni za Serikali",
    questions: [
      { objective: "O1", q: "SAM.gov ni nini?", options: ["Tovuti ya shirikisho ambapo biashara hujisajili ili kuiuzia serikali", "Programu ya mikopo", "Fomu ya kodi", "Tovuti ya jimbo tu"], answer: 0, why: "SAM.gov ni System for Award Management." },
      { objective: "O1", q: "UEI ina herufi na tarakimu ngapi?", options: ["4", "12", "20", "100"], answer: 1, why: "UEI ni namba ya herufi na tarakimu 12." },
      { objective: "O1", q: "Ukiwa na UEI peke yake bila usajili kamili:", options: ["Unaweza kushinda zabuni yoyote", "Unalipwa moja kwa moja", "Huwezi kuomba moja kwa moja tuzo za shirikisho", "Umepata cheti cha 8(a)"], answer: 2, why: "SAM.gov inasema UEI peke yake haikuruhusu kuomba tuzo za shirikisho." },
      { objective: "O1", q: "Usajili wa SAM.gov unagharimu kiasi gani?", options: ["$500", "$99 kwa mwaka", "Asilimia ya kila zabuni", "Hakuna; ni bure"], answer: 3, why: "Usajili ni bure; puuza ofa za kulipia za kukusajili." },
      { objective: "O1", q: "Unapaswa kuandika taarifa zako za benki za SAM.gov wapi?", options: ["Katika SAM.gov yenyewe tu", "Katika msaidizi wa AI", "Katika barua pepe kwa mtu usiyemjua", "Kwenye mitandao ya kijamii"], answer: 0, why: "Taarifa za siri zinaingizwa katika tovuti rasmi tu." },
      { objective: "O2", q: "Unaweza kutafuta namba za NAICS wapi?", options: ["Blogu yoyote", "census.gov/naics", "Kamera ya simu yako", "Ujumbe mfupi"], answer: 1, why: "US Census Bureau ndiyo inayochapisha namba za NAICS." },
      { objective: "O2", q: "Kiwango cha ukubwa kinakuambia:", options: ["Ukubwa wa nembo yako", "Ofisi yako lazima iwe kubwa kiasi gani", "Ukubwa wa juu kabisa unaoweza kuwa nao na bado uhesabiwe kuwa mdogo kwa namba ya NAICS", "Zabuni ngapi unaweza kushinda"], answer: 2, why: "Viwango vya ukubwa huweka kikomo cha biashara ndogo kwa kila namba ya NAICS." },
      { objective: "O2", q: "Zabuni iliyotengwa (set-aside) ni:", options: ["Marejesho ya kodi", "Mkopo", "Faini ya kuchelewa", "Zabuni ambayo biashara fulani tu zinaweza kushindana"], answer: 3, why: "Zabuni zilizotengwa huhifadhiwa kwa makundi kama biashara ndogo." },
      { objective: "O3", q: "Unaomba wapi vyeti vya shirikisho vya SBA kama WOSB na VetCert?", options: ["certifications.sba.gov", "Kwa mshauri wa kulipia tu", "Maktaba ya kaunti yako", "irs.gov"], answer: 0, why: "Vyeti vya SBA huombwa katika certifications.sba.gov." },
      { objective: "O3", q: "Cheti kipi ni kwa biashara zinazomilikiwa na kuongozwa angalau 51% na wanawake raia wa Marekani?", options: ["HUBZone", "WOSB", "DVBE", "8(a) tu"], answer: 1, why: "WOSB maana yake ni Women-Owned Small Business, biashara ndogo inayomilikiwa na wanawake." },
      { objective: "O3", q: "Nani sasa anathibitisha biashara ndogo zinazomilikiwa na wanajeshi wastaafu na wanajeshi wastaafu wenye ulemavu kwa zabuni za shirikisho?", options: ["IRS", "Mji wako", "SBA, kupitia VetCert", "Hakuna"], answer: 2, why: "Programu ya VetCert ya SBA ilichukua kazi ya kuthibitisha mwaka 2023." },
      { objective: "O3", q: "Unaomba wapi cheti cha California cha Small Business na DVBE?", options: ["SAM.gov", "FBI", "Benki", "Cal eProcure, kupitia Department of General Services"], answer: 3, why: "Cheti cha SB na DVBE cha California hufanywa kupitia Cal eProcure." },
      { objective: "O3", q: "DVBE ya California lazima imilikiwe angalau 51% na:", options: ["Wanajeshi wastaafu wenye ulemavu", "Marafiki wa wanajeshi wastaafu", "Wawekezaji wa nje ya jimbo", "Wafanyakazi wa serikali"], answer: 0, why: "DVBE zinamilikiwa na kusimamiwa angalau 51% na wanajeshi wastaafu wenye ulemavu." },
      { objective: "O4", q: "Unawezaje kupata fursa mpya za SAM.gov zikitumwa kwako?", options: ["Piga simu kila shirika kila siku", "Hifadhi utafutaji wako ili fursa zinazolingana zije kwa barua pepe", "Lipia arifa", "Huwezi"], answer: 1, why: "Utafutaji uliohifadhiwa hutuma fursa mpya zinazolingana kwa barua pepe." },
      { objective: "O6", q: "Mkandarasi mkuu ni:", options: ["Mfanyakazi wa serikali", "Benki", "Biashara inayoshika mkataba na serikali", "Cheti"], answer: 2, why: "Mkandarasi mkuu anashika mkataba na anaweza kuajiri wakandarasi wadogo." },
      { objective: "O4", q: "Nani anaweza kukusaidia kupata zabuni bure?", options: ["Kampuni inayotoza malipo ili ikusajili", "Mtu usiyemjua mtandaoni", "Hakuna", "APEX Accelerator"], answer: 3, why: "APEX Accelerators hutoa msaada wa bure kuhusu zabuni za serikali." },
      { objective: "O5", q: "Marekebisho (amendment) ya tangazo la zabuni ni nini?", options: ["Badiliko linalotangazwa baada ya tangazo la kwanza", "Nembo ya kampuni yako", "Fomu ya kodi", "Pesa iliyowekwa benki"], answer: 0, why: "Marekebisho hubadilisha tangazo la zabuni, kwa hiyo yaangalie kila wakati." },
      { objective: "O5", q: "Sehemu ipi inasema hasa kazi gani inatakiwa?", options: ["Tarehe ya mwisho", "Maelezo ya kazi (statement of work)", "Cheo cha afisa wa mikataba", "Anwani ya shirika"], answer: 1, why: "Maelezo ya kazi yanaeleza kazi inayotakiwa." },
      { objective: "O5", q: "Kwa nini ugeuze maelekezo ya tangazo la zabuni kuwa orodha ya kukagua?", options: ["Ili liwe refu zaidi", "Ili uruke hatua", "Kukosa agizo moja kunaweza kufanya ofa yako ikataliwe", "Inatakiwa na SAM.gov"], answer: 2, why: "Orodha ya kukagua inakusaidia kutimiza kila agizo." },
      { objective: "O6", q: "Kipi ni sehemu ya taarifa ya uwezo?", options: ["Nenosiri lako la benki", "Anwani ya nyumbani kwako tu", "Historia ya kurasa kumi", "Kazi za awali"], answer: 3, why: "Kazi za awali zinawaonyesha wanunuzi kwamba unaweza kukamilisha kazi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 5, 9, 13, 17, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Uwezo mkuu", objective: "O6", notYet: "Haiko wazi au haipo, kwa mfano \"tunafanya kila kitu\".", meets: "Vitone vifupi vya kile biashara inachofanya vizuri zaidi.", exceeds: "Inatumia maneno ya mnunuzi kutoka maelezo ya kazi pale yanapofaa." },
      { name: "Kazi za awali", objective: "O6", notYet: "Hakuna kazi za zamani, au kazi bila matokeo.", meets: "Kazi mbili au tatu zenye aina ya mteja, kilichofanyika na matokeo.", exceeds: "Inachagua kazi zinazofanana zaidi na kazi wanazotaka wanunuzi wa serikali." },
      { name: "Vinavyotofautisha", objective: "O6", notYet: "Hakuna kinachoitofautisha biashara.", meets: "Inasema wazi kinachoifanya biashara iwe tofauti.", exceeds: "Inaunga mkono kila hoja kwa ukweli kutoka kazi halisi, kama kasi au kuwepo katika eneo husika." },
      { name: "Taarifa za kampuni", objective: "O2", notYet: "Haina UEI au namba za NAICS, au inaonyesha taarifa za benki au EIN.", meets: "Jina rasmi, UEI, namba za NAICS, vyeti na njia za kuwasiliana, bila namba za siri.", exceeds: "Namba kuu ya NAICS imekaguliwa dhidi ya kiwango cha ukubwa." },
      { name: "Fursa inayolingana", objective: "O4", notYet: "Hakuna fursa iliyopatikana, au hailingani na namba ya NAICS iliyo kwenye taarifa.", meets: "Fursa moja halisi katika SAM.gov au Cal eProcure inayolingana na namba ya NAICS iliyo kwenye taarifa.", exceeds: "Utafutaji umehifadhiwa na uamuzi wa kushindana au kutoshindana umeandikwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kipimo cha tathmini)",
      "Biashara zenye usajili hai wa SAM.gov ndani ya siku 60 (utafiti wa ufuatiliaji)",
      "Biashara zinazoomba cheti cha SBA au cha California, au zinazotuma zabuni ya kwanza au ofa ya ukandarasi mdogo",
      "Zabuni au kazi za ukandarasi mdogo zilizoshindwa ndani ya miezi 12, kama zinavyoripotiwa na wanafunzi au washirika"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Jina rasmi la biashara yako, anwani, EIN na taarifa za benki, zinazoandikwa katika SAM.gov tu",
      "Msaidizi wa AI wa bure wa kufupisha vitone vya taarifa ya uwezo",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kukamilisha usajili halisi"
    ],
    facilitatorNotes: [
      "Shirikiana na APEX Accelerator au SB/DVBE Advocate wa eneo lenu ili kujibu maswali ya usajili na vyeti.",
      "Onyesha mfano halisi wa barua pepe ya ulaghai wa usajili wa kulipia ili wanafunzi waweze kuitambua.",
      "Wakumbushe wanafunzi wasiandike kamwe taarifa za benki au EIN yao katika zana ya AI wala barua pepe.",
      "Tumia tangazo halisi la zabuni la umma kwa zoezi la kushindana au kutoshindana, na wanafunzi watengeneze pamoja orodha ya kukagua ya maelekezo.",
      "Pima kazi ya mwisho kwa kipimo cha tathmini, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
