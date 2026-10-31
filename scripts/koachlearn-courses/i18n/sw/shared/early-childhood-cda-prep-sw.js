"use strict";

// Koach Learn course (Swahili translation of shared/early-childhood-cda-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// The course stays about the US CDA Credential; US names (CDA, Council for Professional Recognition, Head Start, Pearson VUE, 911, Childhelp) are kept.

module.exports = {
  id: "early-childhood-cda-prep-sw",
  lang: "sw",
  translationOf: "early-childhood-cda-prep",
  category: "Workforce Development",
  name: "Elimu ya Awali ya Watoto na Maandalizi ya Cheti cha CDA",
  skills: "Kuorodhesha masharti ya CDA, Kuwaweka watoto salama na wenye afya, Kuripoti unyanyasaji unaoshukiwa, Kuandika maelezo ya uchunguzi, Kupanga shughuli ya kujifunza, Kutengeneza mpango wa CDA wenye tarehe",
  outcome: "kuanza safari yako kuelekea Cheti cha Child Development Associate (CDA): kuorodhesha kile Baraza linachotaka kwa mazingira yako ya kazi, kuwaweka watoto salama, kuandika maelezo ya uchunguzi yasiyo na upendeleo, kupanga shughuli ya kujifunza, na kugeuza yote kuwa mpango wenye tarehe wa mafunzo, uzoefu, portfolio, mtihani na ziara.",
  about: [
    "Vituo vya kulea watoto, programu za Head Start, shule za chekechea na nyumba za kulea watoto zinahitaji watu wazima wenye upendo na mafunzo. Cheti cha Child Development Associate (CDA), kinachotolewa na Council for Professional Recognition (Baraza la Utambuzi wa Kitaaluma), ndicho cheti cha kwanza kinachojulikana zaidi katika elimu ya awali ya watoto nchini Marekani.",
    "Kozi hii ni kwa wanaotafuta kazi, wazazi, vijana wazima, watu wanaorudi nyumbani kutoka gerezani na yeyote anayetaka kufanya kazi na watoto wadogo. Inakuandaa kwa njia ya CDA. Haitoi cheti, na haihesabiwi kama saa rasmi za mafunzo isipokuwa programu ikuambie hivyo.",
    "Utajifunza hatua za CDA, misingi ya usalama wa watoto na wajibu wa kuripoti, jinsi ya kumtazama mtoto na kuandika anachofanya, na jinsi ya kupanga shughuli rahisi. Unamaliza ukiwa na mpango wako mwenyewe wa CDA wenye tarehe halisi.",
    "Kila somo linachukua kama dakika tano, likiwa na kazi ya \"Jaribu sasa\" na maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza mpango wako mwenyewe wa maandalizi ya CDA kwenye karatasi au kwenye hati ya bure: mazingira yako ya kazi, mahali utakapopata saa 120 za mafunzo (zikiwa 10 au zaidi katika kila moja ya maeneo manane ya masomo), jinsi utakavyoandika saa zako za kazi, tarehe ya kuanza portfolio yako, tarehe unazolenga kwa mtihani na kwa Verification Visit, na mpango mmoja wa shughuli ulioandikwa kwa mtoto wa chekechea ambao unaweza kuingia kwenye portfolio yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wakubwa wanaotaka kufanya kazi ya kulea watoto, chekechea, Head Start au kulea watoto nyumbani nchini Marekani: wazazi, wanaotafuta kazi, wanaobadilisha kazi, wahamiaji, wenzi wa wanajeshi wastaafu na watu wanaorudi nyumbani kutoka gerezani. Wengi tayari wanalea watoto nyumbani lakini hawana mafunzo rasmi.",
    startingPoint: "Wanaweza kuwatunza watoto kila siku na kusoma maelekezo rahisi. Wengi hawajasikia kuhusu maeneo ya masomo ya CDA, portfolio au Verification Visit, na hawajawahi kuandika maelezo ya uchunguzi au mipango ya masomo.",
    gap: "Kazi nyingi za kulea watoto na sheria za leseni za majimbo zinataka mafunzo au cheti kama CDA. Wanafunzi wanahitaji kujua hatua halisi, kuwaweka watoto salama tangu siku ya kwanza, na kufanya mazoezi ya uandishi ambao portfolio na mtihani vinatarajia. Bila mpango, watu wanachukua mafunzo yasiyofaa, wanapoteza hesabu ya saa au wanaacha muda wa uzoefu wa miaka 3 na muda wa portfolio wa miezi 6 upite.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8)",
      "Vifaa: simu au kompyuta ya maktaba; kila kazi inaweza pia kufanywa kwenye karatasi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na familia",
      "Sheria hubadilika: masharti na ada za CDA zinakaguliwa kwenye cdacouncil.org; sheria za leseni na za wajibu wa kuripoti zinatofautiana kwa kila jimbo",
      "Faragha ya mtoto: maelezo ya mazoezi yanatumia majina ya kubuni au herufi ya kwanza ya jina tu, kamwe si picha au taarifa halisi za mtoto",
      "Ukaguzi wa historia ya mtu (background check) ni sehemu ya kazi ya kulea watoto; wanafunzi wenye rekodi ya uhalifu wakague sheria za jimbo lao"
    ],
    prerequisites: "Hakuna. Cheti cha kumaliza sekondari (high school diploma) au GED kinahitajika kabla ya kuomba CDA (au kuwa mwanafunzi wa mwaka wa tatu au wa nne katika programu ya ufundi ya elimu ya awali ya watoto ya shule ya sekondari)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia ukurasa wa Council for Professional Recognition wa mazingira yako ya kazi", action: "kuorodhesha hatua za elimu, uzoefu, portfolio, mtihani na Verification Visit za CDA", standard: "ukiwa na saa na vipindi vya muda sahihi" },
    { id: "O2", condition: "Ukipewa chumba cha kulea watoto au maelezo ya chumba hicho", action: "kukagua chumba kwa matatizo ya uangalizi, kunawa mikono, usingizi salama na hatari", standard: "ukipata angalau matatizo 4 kati ya 5 yaliyowekwa" },
    { id: "O3", condition: "Ukipewa hadithi ambapo mtoto anaweza kuwa anadhuriwa", action: "kueleza hatua za kuripoti unyanyasaji au utelekezaji unaoshukiwa", standard: "ukipiga 911 kwanza kama mtoto yuko hatarini, na ukifuata sheria ya jimbo na sera ya programu" },
    { id: "O4", condition: "Baada ya kumtazama mtoto akicheza kwa dakika tano", action: "kuandika maelezo ya uchunguzi yanayoandika tu ulichoona na kusikia", standard: "bila majina ya kumbandika wala makisio, na tarehe, saa na mahali vikiwemo" },
    { id: "O5", condition: "Ukipewa umri wa mtoto na kitu anachokipenda", action: "kuandika mpango mfupi wa shughuli wenye lengo, vifaa, hatua na tahadhari ya usalama", standard: "unaofaa umri wake na unaotaja eneo moja la masomo la CDA" },
    { id: "O6", condition: "Ukitumia kalenda yako mwenyewe", action: "kutengeneza mpango wa maandalizi ya CDA wenye tarehe, kutoka mafunzo hadi Verification Visit", standard: "unaoweka uzoefu ndani ya miaka 3 na portfolio ndani ya miezi 6 ya kuomba" }
  ],
  chapters: [
    {
      name: "Sura 1: Njia ya CDA na kuwaweka watoto salama",
      lessons: [
        {
          title: "CDA ni nini na hatua za kukipata",
          objectives: ["O1"],
          minutes: 6,
          goal: "Orodhesha hatua za kupata CDA katika mazingira yako ya kazi.",
          text: [
            "Cheti cha Child Development Associate (CDA) kinatolewa na Council for Professional Recognition. Kinaonyesha kwamba unaweza kutumia Viwango vya Umahiri vya CDA (CDA Competency Standards) katika kazi na watoto wadogo. Kuna njia za mazingira ya Preschool (chekechea), Infant-Toddler (watoto wachanga na wadogo), Family Child Care (kulea watoto nyumbani) na Home Visitor (mtembeleaji wa nyumbani), na kila moja ina ukurasa wake wa masharti.",
            "Kwa mazingira ya Preschool (watoto wa miaka 3 hadi 5 katika kituo), ukurasa wa Baraza unaorodhesha: cheti cha sekondari au GED (au kuwa mwanafunzi wa mwaka wa tatu au wa nne katika programu ya ufundi ya elimu ya awali ya watoto ya shule ya sekondari); saa 120 za mafunzo rasmi ya elimu ya awali, zikiwa angalau saa 10 katika kila moja ya maeneo manane ya masomo ya CDA; na saa 480 za kazi na watoto wa miaka 3 hadi 5 ndani ya miaka 3 kabla ya kuomba.",
            "Pia unaandaa portfolio ya kitaaluma ndani ya miezi 6 kabla ya kuomba na unachagua CDA Professional Development (PD) Specialist. Ombi lako likikubaliwa, unafanya mtihani wa CDA: kama maswali 65 kwenye kompyuta katika kituo cha mitihani cha Pearson VUE. Kisha PD Specialist anafanya Verification Visit: anapitia portfolio yako, anakutazama ukifanya kazi na watoto na anazungumza nawe kuhusu uwezo wako na mahali unapokua. Baraza pia linatoa uamuzi wa haraka bila ziara kwa baadhi ya matokeo ya mtihani; angalia ukurasa wake wa mabadiliko ya utaratibu.",
            "Ada, ufadhili wa masomo (scholarships) na sheria hubadilika. Kagua kiasi cha sasa kwenye cdacouncil.org, na umuulize mwajiri wako au jimbo lako kuhusu ufadhili kabla ya kulipa. Cheti kinadumu miaka 3 kisha kinahuishwa."
          ],
          steps: ["Chagua mazingira yako: Preschool, Infant-Toddler, Family Child Care au Home Visitor.", "Fungua ukurasa wa mazingira hayo kwenye cdacouncil.org na uandike masharti yake.", "Tafuta mafunzo yanayogusa maeneo yote manane ya masomo.", "Anza kuandika saa zako za kazi na watoto.", "Andaa portfolio yako, omba, fanya mtihani, kisha fanyiwa Verification Visit."],
          words: [["CDA", "Child Development Associate: cheti cha kitaifa cha Marekani kwa watu wanaofanya kazi na watoto wadogo."], ["Council for Professional Recognition", "shirika linalotoa cheti cha CDA (Baraza)."], ["Portfolio", "mkusanyiko wa maandishi na rasilimali zako mwenyewe unaoonyesha kazi yako na watoto na familia."], ["Verification Visit", "ziara ambapo PD Specialist anakutazama ukifanya kazi, anapitia portfolio yako na anazungumza nawe."], ["PD Specialist", "Professional Development Specialist: mtaalamu aliyeidhinishwa na Baraza kufanya ziara yako."]],
          slides: [
            { title: "CDA kwa mstari mmoja", bullets: ["Kinatolewa na Council for Professional Recognition", "Mazingira: Preschool, Infant-Toddler, Family Child Care, Home Visitor"] },
            { title: "Preschool: kabla ya kuomba", bullets: ["Cheti cha sekondari au GED (au programu ya elimu ya awali ya sekondari)", "Saa 120 za mafunzo, 10+ katika kila moja ya maeneo 8", "Saa 480 za kazi na watoto wa miaka 3-5 ndani ya miaka 3"] },
            { title: "Kisha", bullets: ["Portfolio imekamilika ndani ya miezi 6 ya kuomba", "Mtihani wa CDA katika kituo cha Pearson VUE", "Verification Visit na PD Specialist"] },
            { title: "Kagua kabla ya kulipa", bullets: ["Ada na sheria hubadilika: cdacouncil.org", "Uliza kuhusu ufadhili wa masomo", "Huisha kila baada ya miaka 3"] }
          ],
          sources: [
            { name: "CDA Council: Preschool pathway", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Learn about the CDA", url: "https://www.cdacouncil.org/en/about/learn-about-the-cda/" },
            { name: "CDA Council: Process updates", url: "https://www.cdacouncil.org/en/cda-process-updates/" },
            { name: "CDA Council: Find CDA scholarships", url: "https://www.cdacouncil.org/en/find-cda-scholarships/" },
            { name: "CDA Council: Renew CDA", url: "https://www.cdacouncil.org/en/renew-cda/" }
          ],
          tryIt: "Fungua ukurasa wa CDA Council wa mazingira unayoyataka (au tumia namba za somo hili kwa Preschool). Kwenye karatasi, andika hatua tano kwa mpangilio, na saa au kipindi cha muda kando ya kila moja.",
          youCanNow: "kuorodhesha hatua za kupata CDA kwa mazingira yako, pamoja na saa za mafunzo, saa za kazi na vipindi vya muda.",
          quickCheck: [
            { objective: "O1", q: "Kwa CDA ya Preschool, saa 120 za mafunzo zinagawanywaje?", options: ["Saa zote 120 katika somo moja unalopenda", "Angalau saa 10 katika kila moja ya maeneo manane ya masomo", "Saa za kazi na watoto tu", "Saa zozote 120 za video za mtandaoni"], answer: 1, why: "Baraza linataka saa 120 za mafunzo, zisizopungua 10 katika kila moja ya maeneo manane ya masomo." },
            { objective: "O1", q: "Nani anatoa Cheti cha CDA?", options: ["Ofisi ya magari ya jimbo lako", "Shule anayosoma mtoto wako", "Kituo chochote cha kulea watoto", "Council for Professional Recognition"], answer: 3, why: "Council for Professional Recognition ndilo linalotoa CDA; kozi au mwajiri anakusaidia tu kujiandaa." }
          ]
        },
        {
          title: "Chumba salama na chenye afya: leseni, uangalizi, kunawa mikono, usingizi salama",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kagua chumba cha kulea watoto kwa matatizo ya kawaida ya usalama na afya.",
          text: [
            "Kazi ya kulea watoto inapewa leseni na kila jimbo au eneo. Leseni inaweka sheria za chini za afya na usalama ambazo programu lazima izifuate, kama ukaguzi wa historia ya wafanyakazi, mafunzo ya afya na usalama, sifa za wafanyakazi na ukaguzi wa mahali. Uwiano (ratio) na sheria za mafunzo zinatofautiana kwa kila jimbo, kwa hiyo tafuta za jimbo lako kwenye childcare.gov.",
            "Uangalizi unakuja kwanza: unaweza kumwona na kumsikia kila mtoto, unawahesabu watoto mara kwa mara (hasa mnapohamia chumba kingine au kutoka nje), na kamwe huwaachi watoto peke yao.",
            "Kunawa mikono kunazuia vijidudu: nawa kwa sabuni na maji, ukisugua kwa angalau sekunde 20, baada ya choo au kubadilisha nepi, kabla ya kula au kushika chakula, na baada ya kucheza nje. Wasaidie watoto kunawa pia.",
            "Usingizi salama kwa watoto wachanga: mlaze mtoto chali (kwa mgongo) kila anapolala mchana na usiku, juu ya sehemu ngumu, tambarare na iliyo sawa yenye shuka la kubana tu. Weka mito, blanketi, vizuizi vya pembeni (bumpers) na wanasesere nje ya kitanda cha mtoto. Pia tafuta hatari: soketi za umeme, nyaya, vitu vidogo ambavyo mtoto mdogo anaweza kuvisonga, dawa za kusafishia zinazofikiwa, na milango ya dharura iliyozibwa."
          ],
          steps: ["Hesabu watoto na uhakikishe unaweza kuwaona na kuwasikia wote.", "Tafuta hatari: nyaya, soketi, vitu vidogo, kemikali, milango ya dharura iliyozibwa.", "Hakikisha mahali pa kunawa mikono pana sabuni na taulo, na kwamba watu wazima wanapatumia.", "Katika vyumba vya watoto wachanga: lala chali, sehemu ngumu na tambarare, hakuna kitu kitandani isipokuwa shuka la kubana.", "Rekebisha unachoweza sasa na umwambie msimamizi wako kuhusu vilivyobaki."],
          words: [["Leseni (licensing)", "sheria za chini za afya na usalama za jimbo ambazo programu lazima izifuate ili ifanye kazi kihalali."], ["Uwiano (ratio)", "idadi ya watoto ambao mtu mzima mmoja anaruhusiwa kuwatunza; unawekwa na jimbo na unatofautiana kwa umri."], ["Uangalizi", "kuweza kuwaona na kuwasikia watoto unaowatunza wakati wote."], ["Hatari ya kusonga", "kitu kidogo ambacho mtoto mdogo anaweza kukiweka mdomoni na kikamkaba."]],
          slides: [
            { title: "Leseni ni ya kila jimbo", bullets: ["Sheria za chini za afya na usalama", "Ukaguzi wa historia, mafunzo, ukaguzi wa mahali", "Tafuta jimbo lako kwenye childcare.gov"] },
            { title: "Angalia na hesabu", bullets: ["Mwone na umsikie kila mtoto", "Hesabu kila mnapohama", "Kamwe usiwaache watoto peke yao"] },
            { title: "Kunawa mikono", bullets: ["Sabuni na maji, sugua sekunde 20", "Baada ya choo au nepi, kabla ya chakula, baada ya kucheza nje"] },
            { title: "Usingizi salama kwa watoto wachanga", bullets: ["Chali (kwa mgongo), kila anapolala", "Sehemu ngumu, tambarare, sawa, shuka la kubana tu", "Hakuna mito, blanketi, bumpers wala wanasesere"] }
          ],
          sources: [
            { name: "Childcare.gov: How is child care regulated?", url: "https://childcare.gov/consumer-education/how-is-child-care-regulated" },
            { name: "Childcare.gov: State and territory resources", url: "https://childcare.gov/state-resources" },
            { name: "Safe to Sleep (NIH): Safe sleep environment", url: "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment" }
          ],
          tryIt: "Tembea katika chumba kimoja nyumbani (au jifikirie darasa). Orodhesha vitu vitano ambavyo ungekagua kwa usalama na afya, na uandike suluhisho moja kwa kila kimoja. Kisha tafuta ukurasa wa kulea watoto wa jimbo lako kwenye childcare.gov na uandike nani anatoa leseni za kulea watoto huko.",
          youCanNow: "kukagua chumba kwa matatizo ya uangalizi, kunawa mikono, usingizi salama na hatari, na kusema nani anatoa leseni za kulea watoto katika jimbo lako.",
          quickCheck: [
            { objective: "O2", q: "Mtoto mchanga amelala kitandani mwake. Mpangilio upi ni salama?", options: ["Kifudifudi (kwa tumbo) na blanketi laini", "Kwa ubavu na mto wa kumshikilia", "Chali (kwa mgongo), godoro gumu, shuka la kubana tu", "Chali pamoja na wanasesere wa kumfariji"], answer: 2, why: "Safe to Sleep inasema alale chali juu ya sehemu ngumu na tambarare yenye shuka la kubana tu." },
            { objective: "O2", q: "Kikundi chako kinaingia kutoka uwanja wa michezo. Unafanya nini kwanza?", options: ["Kuwahesabu watoto", "Kuanza shughuli inayofuata mara moja", "Kuangalia simu yako", "Kuwaacha waende chooni peke yao"], answer: 0, why: "Kuhesabu kila mnapohama kunahakikisha hakuna mtoto aliyeachwa nyuma." }
          ]
        },
        {
          title: "Kuwalinda watoto: wajibu wa kuripoti",
          objectives: ["O3"],
          minutes: 5,
          goal: "Eleza hatua za kuripoti unyanyasaji au utelekezaji wa mtoto unaoshukiwa.",
          text: [
            "Katika majimbo mengi, wafanyakazi wa kulea watoto ni wenye wajibu wa kuripoti (mandated reporters). Hii inamaanisha sheria inakutaka uripoti unapokuwa na sababu ya kushuku kwamba mtoto ananyanyaswa au anatelekezwa. Huhitaji ushahidi. Sheria ya kila jimbo inasema nani lazima aripoti na jinsi gani, na programu yako itakuwa na sera iliyoandikwa. Jifunze zote mbili kabla ya siku yako ya kwanza.",
            "Kama mtoto yuko hatarini sasa hivi, piga 911 kwanza. La sivyo, fuata utaratibu wa jimbo lako (mara nyingi ni namba ya simu ya jimbo ya kuripoti unyanyasaji wa watoto) na sera ya programu yako. Kama huna uhakika upige wapi, Childhelp National Child Abuse Hotline (1-800-422-4453) inaweza kusaidia.",
            "Kazi yako ni kuripoti, si kuchunguza. Usimuulize mtoto maswali tena na tena wala usiikabili familia. Mtoto akikuambia jambo, tulia, sikiliza, usiahidi kuliweka siri, na uandike maneno yake kamili, tarehe na saa. Liweke kuwa siri: shiriki tu na watu ambao sheria na sera yako vinasema."
          ],
          steps: ["Kama mtoto yuko hatarini sasa hivi, piga 911.", "Sikiliza kwa utulivu; usiahidi kuweka siri.", "Andika ulichoona au kusikia, neno kwa neno, pamoja na tarehe na saa.", "Ripoti kama sheria ya jimbo lako na sera ya programu vinavyotaka.", "Weka jambo hilo kuwa siri na usichunguze mwenyewe."],
          words: [["Mwenye wajibu wa kuripoti (mandated reporter)", "mtu ambaye sheria inamtaka aripoti unyanyasaji au utelekezaji wa mtoto unaoshukiwa."], ["Utelekezaji (neglect)", "kutompa mtoto matunzo ya msingi anayohitaji, kama chakula, usalama, uangalizi au matibabu."], ["Kushuku", "kuwa na sababu ya kufikiri kwamba jambo linaweza kuwa linatokea, bila ushahidi."]],
          slides: [
            { title: "Huenda una wajibu wa kuripoti", bullets: ["Majimbo mengi yanajumuisha wafanyakazi wa kulea watoto", "Unaripoti sababu ya kushuku, si ushahidi", "Jifunze sheria ya jimbo lako na sera ya programu"] },
            { title: "Hatari sasa hivi? Piga 911", bullets: ["Kisha fuata utaratibu wa jimbo lako wa kuripoti", "Huna uhakika? Childhelp: 1-800-422-4453"] },
            { title: "Ripoti, usichunguze", bullets: ["Sikiliza kwa utulivu; usiahidi siri", "Andika maneno kamili, tarehe na saa", "Shiriki tu kama sheria na sera zinavyosema"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: How to report child abuse and neglect", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Childcare.gov: Report a child care concern", url: "https://childcare.gov/health-and-safety-reporting" }
          ],
          tryIt: "Tafuta jinsi ya kuripoti unyanyasaji wa mtoto unaoshukiwa katika jimbo lako (tafuta jina la jimbo lako pamoja na \"report child abuse\" na utumie ukurasa wa .gov). Andika namba au tovuti kwenye kadi, na hatua tano za somo hili upande wa nyuma.",
          youCanNow: "kueleza hatua za kuripoti unyanyasaji au utelekezaji unaoshukiwa na kupata mahali pa kuripoti katika jimbo lako.",
          quickCheck: [
            { objective: "O3", q: "Mtoto anakuambia siri kuhusu kuumizwa nyumbani na anakuomba usimwambie mtu. Unasema nini?", options: ["\"Naahidi sitamwambia mtu yeyote.\"", "\"Una uhakika? Niambie tena.\"", "\"Lazima unatunga hilo.\"", "\"Asante kwa kuniambia. Ninahitaji kuwaambia watu wanaoweza kusaidia kukuweka salama.\""], answer: 3, why: "Unabaki mtulivu na kamwe huahidi siri, kwa sababu lazima uripoti." },
            { objective: "O3", q: "Unaona alama zinazokutia wasiwasi, lakini huna ushahidi. Mwenye wajibu wa kuripoti anafanya nini?", options: ["Kusubiri hadi kuwe na ushahidi", "Kuripoti kama sheria ya jimbo na sera ya programu vinavyotaka", "Kumpigia mzazi kuuliza kilichotokea", "Kupiga picha na kuziweka mtandaoni kuwaonya wengine"], answer: 1, why: "Sheria inakutaka uripoti sababu ya kushuku; kuchunguza ni kazi ya idara husika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Njia ya CDA na kuwaweka watoto salama",
        questions: [
          { objective: "O1", q: "Kwa CDA ya Preschool, unahitaji saa ngapi za kazi na watoto wa miaka 3 hadi 5, na ndani ya muda gani?", options: ["Saa 480 ndani ya miaka 3 kabla ya kuomba", "Saa 120 ndani ya mwaka 1", "Saa 1,000 wakati wowote", "Hakuna saa za kazi zinazohitajika"], answer: 0, why: "Ukurasa wa Preschool wa Baraza unaorodhesha saa 480 ndani ya miaka 3 kabla ya kuwasilisha ombi lako." },
          { objective: "O1", q: "Mtihani na Verification Visit vinafanyika kwa mpangilio gani?", options: ["Ziara inakuja kila mara kabla ya kuomba", "Vyote vinafanyika siku moja", "Mtihani unakuja kwanza, kisha ziara", "Hakuna kati ya hivyo ni sehemu ya CDA"], answer: 2, why: "Baada ya kukubaliwa unapanga mtihani; ziara inapangwa baada ya mtihani." },
          { objective: "O2", q: "Nani anaweka sheria za leseni za kulea watoto kama uwiano na mafunzo?", options: ["Wazazi wa kila mtoto", "Kila jimbo au eneo", "CDA Council", "Kila mwalimu"], answer: 1, why: "Leseni zinatolewa na majimbo na maeneo, kwa hiyo sheria zinatofautiana mahali hadi mahali." },
          { objective: "O2", q: "Ni hatari ipi unayopaswa kurekebisha katika chumba cha watoto wadogo?", options: ["Sarafu na shanga kwenye rafu ya chini", "Sabuni kwenye sinki", "Shuka la kubana kwenye godoro la kitanda cha mtoto", "Orodha ya namba za dharura karibu na mlango"], answer: 0, why: "Vitu vidogo ni hatari ya kusonga kwa watoto wadogo." },
          { objective: "O3", q: "Mtoto anafika akiwa na jeraha kubwa na yuko hatarini sasa hivi. Unafanya nini kwanza?", options: ["Kuliandika katika maelezo yako kwa wiki ijayo", "Kuwauliza marafiki wa mtoto kilichotokea", "Kusubiri msimamizi wako arudi kutoka chakula cha mchana", "Kupiga 911"], answer: 3, why: "Hatari ya sasa hivi inamaanisha piga 911 kwanza, kisha fuata utaratibu wa kuripoti." }
        ]
      }
    },
    {
      name: "Sura 2: Kufundisha, kuchunguza na mpango wako wa CDA",
      lessons: [
        {
          title: "Kutazama na kuandika: maelezo ya uchunguzi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Andika maelezo ya uchunguzi yanayoandika tu ulichoona na kusikia.",
          text: [
            "Kuchunguza na kuandika tabia za watoto ni moja ya maeneo manane ya masomo ya CDA. Walimu huwatazama watoto ili kujua kila mtoto anaweza kufanya nini, anapenda nini na anahitaji nini baadaye. Maelezo mazuri pia yanasaidia unapozungumza na familia.",
            "Maelezo mazuri hayana upendeleo (objective): yanasema ulichoona na kusikia, si unachofikiri kinamaanisha. Andika \"M. alipanga matofali sita, kisha akayaangusha na akacheka\" badala ya \"M. ni mtoto mwenye furaha na akili\". Majina ya kumbandika mtoto kama mvivu, mbaya, mwenye haya au mtukutu hayafai katika maelezo.",
            "Weka tarehe, saa, mahali na herufi ya kwanza ya jina la mtoto. Nukuu maneno kamili ya mtoto. Weka maelezo kuwa siri: yanamhusu mtoto halisi na ni mali ya programu."
          ],
          steps: ["Andika tarehe, saa, mahali na herufi ya kwanza ya jina la mtoto.", "Tazama kwa dakika chache.", "Andika vitendo na maneno kamili tu.", "Futa jina lolote la kumbandika au makisio.", "Ongeza swali moja au hatua inayofuata kwa mtoto, ukionyesha kuwa ni wazo lako."],
          words: [["Uchunguzi (observation)", "kumtazama mtoto kwa makini ili kujua anachoweza kufanya."], ["Bila upendeleo (objective)", "ukweli tu unaoweza kuona au kusikia, bila maoni."], ["Kumbukumbu fupi (anecdotal record)", "maelezo mafupi yaliyoandikwa kuhusu jambo moja mtoto alilofanya au kusema."]],
          slides: [
            { title: "Kwa nini tunachunguza", bullets: ["Kujua kila mtoto anaweza kufanya nini", "Kupanga kinachofuata", "Kushiriki ukweli na familia"] },
            { title: "Ukweli, si majina ya kumbandika", bullets: ["Ndiyo: \"alipanga matofali 6, akacheka\"", "Hapana: \"mwenye akili\", \"mwenye haya\", \"mbaya\"", "Nukuu maneno kamili ya mtoto"] },
            { title: "Kila maelezo yana", bullets: ["Tarehe, saa, mahali", "Herufi ya kwanza ya jina tu", "Yanawekwa siri"] }
          ],
          tryIt: "Mtazame mtoto unayemjua (kwa ruhusa ya mzazi), au video ya watoto, kwa dakika tano. Andika maelezo ya uchunguzi yenye tarehe, saa na mahali. Kisha zungushia duara neno lolote ambalo ni jina la kumbandika au makisio, na uliandike upya kama ukweli.",
          youCanNow: "kuandika maelezo ya uchunguzi ya haki, yasiyo na upendeleo wala majina ya kumbandika.",
          quickCheck: [
            { objective: "O4", q: "Sentensi ipi inafaa katika maelezo ya uchunguzi?", options: ["\"J. ni mtoto msumbufu.\"", "\"J. anaonekana mwenye huzuni leo.\"", "\"J. ana akili kuliko wengine.\"", "\"J. alisema 'zamu yangu' na akachukua lori jekundu kutoka kwa T.\""], answer: 3, why: "Inaandika tu kilichoonekana na kusikika, pamoja na maneno kamili ya mtoto." },
            { objective: "O4", q: "Kila maelezo ya uchunguzi yanapaswa kuwa na nini?", options: ["Tarehe, saa, mahali na herufi ya kwanza ya jina la mtoto", "Jina kamili la mtoto na anwani ya nyumbani", "Maoni yako kuhusu wazazi", "Picha ya mtoto iliyowekwa mtandaoni"], answer: 0, why: "Tarehe, saa, mahali na herufi ya kwanza vinatoa muktadha huku vikilinda faragha ya mtoto." }
          ]
        },
        {
          title: "Kupanga shughuli ya kujifunza",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andika mpango mfupi wa shughuli unaofaa umri wa mtoto.",
          text: [
            "Watoto wadogo hujifunza kwa kucheza. Shughuli nzuri inaanza na kile watoto wanachofurahia na kile wanachokaribia kuweza kufanya, ili iwe hatua ndogo ya kujinyoosha yenye furaha. Kukuza maendeleo ya kimwili na ya kiakili ya watoto ni moja ya maeneo manane ya masomo ya CDA, vivyo hivyo maendeleo ya kijamii na ya kihisia na kujenga mahusiano na familia.",
            "Mpango mfupi wa shughuli una sehemu sita: kikundi cha umri, lengo (watoto watafanya nini), vifaa, hatua, tahadhari ya usalama, na jinsi utakavyojua imefanikiwa. Mfano kwa watoto wa miaka 3 na 4: Lengo: kupanga majani kwa ukubwa. Vifaa: majani yaliyokusanywa nje, vikapu vitatu. Hatua: onyesha jani kubwa, la kati na dogo; watoto wanapanga; uliza \"Lipi ni kubwa zaidi?\" Usalama: nawa mikono baadaye, kagua vijiti vyenye ncha kali. Jinsi utakavyojua: watoto wanaweka majani mengi katika kikapu sahihi na wanatumia maneno kubwa na dogo.",
            "Panga kwa ajili ya kila mtoto: toa njia rahisi zaidi na njia ngumu zaidi ya kufanya shughuli, tumia maneno na picha, na zialike familia kutuma mawazo kutoka nyumbani. Hakikisha vifaa ni vikubwa vya kutosha ili visiwe hatari ya kusonga kwa umri huo."
          ],
          steps: ["Chagua kikundi cha umri na kitu kimoja ambacho watoto wanafurahia.", "Andika lengo moja ambalo watoto watafanya.", "Orodhesha vifaa salama, vya bure au vya bei nafuu.", "Andika hatua 3 hadi 5.", "Ongeza tahadhari ya usalama na jinsi utakavyojua imefanikiwa.", "Taja eneo la masomo la CDA ambalo shughuli inasaidia."],
          words: [["Inayofaa kimakuzi (developmentally appropriate)", "inafaa kile ambacho watoto wa umri huo kwa kawaida wanaweza kufanya, pamoja na hatua ndogo ya kujinyoosha."], ["Misuli midogo (fine motor)", "miondoko midogo ya mikono na vidole, kama kuokota au kukata."], ["Misuli mikubwa (gross motor)", "miondoko mikubwa ya mwili, kama kukimbia, kuruka au kupanda."]],
          slides: [
            { title: "Watoto hujifunza kwa kucheza", bullets: ["Anza na wanachofurahia", "Hatua ndogo ya kujinyoosha yenye furaha"] },
            { title: "Sehemu sita za mpango", bullets: ["Umri, lengo, vifaa", "Hatua, tahadhari ya usalama", "Jinsi utakavyojua imefanikiwa"] },
            { title: "Panga kwa ajili ya kila mtoto", bullets: ["Njia rahisi zaidi na ngumu zaidi", "Maneno na picha", "Mawazo kutoka kwa familia"] }
          ],
          tryIt: "Andika mpango wa shughuli wa ukurasa mmoja kwa watoto wa miaka 3 hadi 5 ukitumia vitu ulivyo navyo nyumbani (vikombe, soksi, karatasi, majani). Weka sehemu zote sita na utaje eneo la masomo la CDA ambalo shughuli inasaidia.",
          youCanNow: "kuandika mpango mfupi na salama wa shughuli unaofaa umri wa watoto na unaotaja eneo la masomo la CDA.",
          quickCheck: [
            { objective: "O5", q: "Lengo lipi linawafaa zaidi watoto wa miaka 3 na 4?", options: ["Kuandika aya nzima kuhusu majani", "Kupanga majani kuwa makubwa na madogo", "Kufanya hesabu ndefu za kugawanya kwa majani", "Kusoma kitabu cha sayansi peke yao"], answer: 1, why: "Kupanga kwa ukubwa ni hatua ndogo ya kujinyoosha yenye mchezo kwa watoto wa chekechea." },
            { objective: "O5", q: "Mpango wako kwa watoto wa miaka 3 unatumia shanga ndogo. Nini kinakosekana katika mpango?", options: ["Orodha ndefu zaidi ya hatua", "Lengo gumu zaidi", "Tahadhari ya usalama: shanga ni hatari ya kusonga, kwa hiyo tumia vitu vikubwa zaidi", "Shanga zaidi"], answer: 2, why: "Kila mpango unahitaji tahadhari ya usalama, na vitu vidogo ni hatari ya kusonga kwa watoto wadogo." }
          ]
        },
        {
          title: "Portfolio yako, mtihani, ziara na mpango wako",
          objectives: ["O6"],
          minutes: 6,
          goal: "Tengeneza mpango wa maandalizi ya CDA wenye tarehe, kutoka mafunzo hadi Verification Visit.",
          text: [
            "Portfolio ina maandishi na rasilimali zako mwenyewe kuhusu kazi yako na watoto na familia. Kitabu cha Baraza cha Competency Standards cha mazingira yako (kwa Preschool, toleo la kijani) kinaeleza hasa kile kinachoingia ndani yake. Pata kitabu mapema na ujaze portfolio unapoendelea; lazima ikamilike ndani ya miezi 6 ya kuomba.",
            "Panga kurudi nyuma kuanzia tarehe muhimu. Saa za kazi zinahesabiwa tu kama ziko ndani ya miaka 3 kabla ya ombi lako, kwa hiyo anza sasa daftari rahisi la saa: tarehe, mahali, umri wa watoto na saa, likisainiwa na msimamizi kama programu yako inaruhusu. Chagua mafunzo yanayogusa maeneo yote manane ya masomo na uhifadhi kila cheti.",
            "Jiandae kwa mtihani kwa kupitia maeneo manane ya masomo, kufanya mazoezi ya maswali ya hali halisi kama yale ya kozi hii, na kuweka nafasi katika kituo cha mitihani cha Pearson VUE baada ya kupata taarifa ya Ready to Schedule. Kabla ya Verification Visit, fanya mazoezi ya kuzungumza kuhusu uwezo wako na eneo moja unalokua ndani yake. Kagua kila ada na hatua kwenye cdacouncil.org, na uulize kuhusu ufadhili wa masomo."
          ],
          steps: ["Andika tarehe ya leo na mazingira yako ya kazi.", "Chagua programu ya mafunzo na tarehe unayolenga kumaliza saa 120.", "Anza daftari la saa za kazi na weka tarehe ya kufikia saa ambazo mazingira yako yanahitaji.", "Weka tarehe ya kuanza portfolio na tarehe ya kuomba ndani ya miezi 6 baada yake.", "Ongeza miezi unayolenga kwa mtihani na kwa Verification Visit.", "Weka tarehe hizo kwenye kalenda ya simu yako au kalenda ya karatasi."],
          words: [["Competency Standards book", "kitabu cha Baraza cha mazingira yako kinachoeleza portfolio na viwango."], ["Ready to Schedule notice", "ujumbe wa Baraza unaosema sasa unaweza kuweka nafasi ya mtihani au ziara yako."], ["Daftari la saa za kazi", "kumbukumbu ya tarehe na saa ulizofanya kazi na watoto."]],
          slides: [
            { title: "Portfolio yako", bullets: ["Pata kitabu cha Competency Standards cha mazingira yako", "Ijaze unapoendelea", "Ikamilishe ndani ya miezi 6 ya kuomba"] },
            { title: "Panga kurudi nyuma", bullets: ["Saa za kazi: ndani ya miaka 3 ya kuomba", "Mafunzo: maeneo yote 8, hifadhi vyeti", "Andika saa tangu siku ya kwanza"] },
            { title: "Mtihani na ziara", bullets: ["Pitia maeneo 8 ya masomo", "Weka nafasi Pearson VUE baada ya Ready to Schedule", "Fanya mazoezi ya kuzungumza kuhusu uwezo wako"] }
          ],
          sources: [
            { name: "CDA Council: Preschool pathway", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Educator pathways (all settings)", url: "https://www.cdacouncil.org/en/educator-pathways/" },
            { name: "Pearson VUE: CDA exam", url: "https://home.pearsonvue.com/cdaexam" }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wako wa maandalizi ya CDA wenye tarehe halisi za mafunzo, saa za kazi, portfolio, kuomba, mtihani na Verification Visit. Ambatisha mpango wako wa shughuli kutoka Somo la 5 kama kipande chako cha kwanza cha mtindo wa portfolio.",
          youCanNow: "kugeuza hatua za CDA kuwa mpango wako mwenyewe wenye tarehe, tayari kuanza.",
          quickCheck: [
            { objective: "O6", q: "Ulifanya kazi katika chekechea miaka minne iliyopita na unataka kuomba mwezi ujao. Unapaswa kukagua nini?", options: ["Hakuna; saa zote za zamani zinahesabiwa milele", "Kama bado unahitaji cheti cha sekondari", "Kama mtihani ni wa hiari", "Kama saa zako ziko ndani ya miaka 3 kabla ya ombi lako"], answer: 3, why: "Saa za uzoefu lazima ziwe ndani ya miaka 3 kabla ya kuwasilisha ombi lako." },
            { objective: "O6", q: "Unapaswa kuanza daftari lako la saa za kazi lini?", options: ["Sasa, tangu siku yako ya kwanza na watoto", "Baada ya kufaulu mtihani", "Baada ya Verification Visit tu", "Kamwe; Baraza linazihesabu kwa ajili yako"], answer: 0, why: "Daftari tangu siku ya kwanza linaweka saa na tarehe zako wazi unapoomba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufundisha, kuchunguza na mpango wako wa CDA",
        questions: [
          { objective: "O4", q: "Upi ni uchunguzi usio na upendeleo?", options: ["\"A. ni mvivu wakati wa kusafisha.\"", "\"A. alikaa kwenye zulia na kutazama wakati wengine wakiweka matofali mahali pake.\"", "\"A. hasaidii kamwe.\"", "\"A. ndiye msikilizaji mbaya kuliko wote.\""], answer: 1, why: "Inaeleza tu kilichoonekana, bila jina la kumbandika." },
          { objective: "O4", q: "Unapaswa kulinda faragha ya mtoto vipi katika maelezo yako?", options: ["Kuweka maelezo kwenye kikundi cha gumzo cha wazazi", "Kutumia jina kamili la mtoto na anwani", "Kutumia herufi ya kwanza ya jina na kuweka maelezo ndani ya programu", "Kuyashiriki na yeyote anayeuliza"], answer: 2, why: "Herufi za kwanza na kuweka maelezo ndani ya programu vinamlinda mtoto." },
          { objective: "O5", q: "Sehemu ipi inakuambia kama shughuli imefanikiwa?", options: ["Jinsi utakavyojua imefanikiwa", "Orodha ya vifaa", "Kikundi cha umri", "Kichwa"], answer: 0, why: "Kusema jinsi utakavyojua imefanikiwa kunakuwezesha kukagua lengo." },
          { objective: "O5", q: "Unapangaje kwa watoto wenye ujuzi tofauti katika shughuli moja?", options: ["Kumpa kila mtu toleo gumu zaidi", "Kuwaacha nje watoto wanaopata shida", "Kufanya shughuli mara moja tu kwa mwaka", "Kutoa njia rahisi zaidi na njia ngumu zaidi ya kuifanya"], answer: 3, why: "Matoleo rahisi na magumu zaidi yanamwezesha kila mtoto kushiriki na kujinyoosha kidogo." },
          { objective: "O6", q: "Portfolio ya CDA ya Preschool lazima iandaliwe ndani ya muda gani wa kuomba?", options: ["Miaka 3", "Miezi 6", "Wiki 1", "Miaka 10"], answer: 1, why: "Ukurasa wa Baraza unasema uandae portfolio ndani ya miezi 6 ya kuwasilisha ombi lako." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Elimu ya Awali ya Watoto na Maandalizi ya Cheti cha CDA",
    questions: [
      { objective: "O1", q: "Kozi hii inafanya nini kwa CDA yako?", options: ["Inatoa CDA", "Inachukua nafasi ya mtihani", "Inakuandaa; Baraza ndilo linalotoa cheti", "Inahesabiwa kama Verification Visit yako"], answer: 2, why: "Council for Professional Recognition ndilo linalotoa CDA; kozi hii inakuandaa." },
      { objective: "O1", q: "Saa zako 120 za mafunzo lazima zigusie maeneo mangapi ya masomo ya CDA?", options: ["Manane, angalau saa 10 kila moja", "Mawili", "Moja tu unalochagua", "Kumi na mbili, saa 5 kila moja"], answer: 0, why: "Baraza linataka angalau saa 10 katika kila moja ya maeneo manane ya masomo." },
      { objective: "O1", q: "Mtihani wa CDA unafanywa wapi?", options: ["Katika kituo chako cha kulea watoto", "Katika kituo cha mitihani cha Pearson VUE", "Katika ofisi ya leseni za udereva (DMV)", "Kwa simu"], answer: 1, why: "Mtihani wa CDA unafanywa kwa kompyuta katika kituo cha mitihani cha Pearson VUE." },
      { objective: "O1", q: "Nini kinatokea wakati wa Verification Visit?", options: ["Unalipa ada yako kwa pesa taslimu", "Unafanya mtihani wa maandishi", "Mzazi anakupa alama ya ufundishaji wako", "PD Specialist anapitia portfolio yako, anakutazama ukifanya kazi na anazungumza nawe"], answer: 3, why: "PD Specialist anapitia portfolio, anakutazama ukiwa na watoto na anafanya mazungumzo ya kutafakari pamoja nawe." },
      { objective: "O2", q: "Unaweza kupata wapi mawasiliano ya leseni za kulea watoto ya jimbo lako?", options: ["Kikundi cha mitandao ya kijamii", "Rasilimali za majimbo kwenye childcare.gov", "Blogu yoyote tu", "Mtihani wa CDA"], answer: 1, why: "Childcare.gov ina viungo vya rasilimali za kila jimbo na eneo." },
      { objective: "O2", q: "Unapaswa kusugua mikono kwa sabuni kwa muda gani?", options: ["Angalau sekunde 20", "Sekunde 2", "Tu kama inaonekana chafu", "Suuza kwa maji tu"], answer: 0, why: "Kusugua kwa sabuni kwa angalau sekunde 20 kunaondoa vijidudu." },
      { objective: "O2", q: "Nini kinafaa kuwa kitandani mwa mtoto mchanga wakati wa kulala?", options: ["Mto na blanketi", "Wanasesere", "Vizuizi vya pembeni (bumpers)", "Shuka la kubana tu juu ya godoro gumu na tambarare"], answer: 3, why: "Safe to Sleep inasema hakuna kitu kitandani isipokuwa shuka la kubana juu ya sehemu ngumu, tambarare na iliyo sawa." },
      { objective: "O2", q: "Uwiano (watoto wangapi kwa mtu mzima mmoja):", options: ["Ni sawa kila mahali", "Unachaguliwa na kila mwalimu", "Unawekwa na sheria za leseni za kila jimbo", "Unawekwa na wazazi"], answer: 2, why: "Majimbo yanaweka uwiano, na unatofautiana kwa jimbo na umri." },
      { objective: "O3", q: "Mwenye wajibu wa kuripoti lazima aripoti anapo:", options: ["Kuwa na ushahidi", "Kuwa na sababu ya kushuku unyanyasaji au utelekezaji", "Pata ruhusa kutoka kwa familia", "Maliza uchunguzi"], answer: 1, why: "Sheria inataka ripoti pale kuna sababu ya kushuku; huhitaji ushahidi." },
      { objective: "O3", q: "Kipi ni sehemu ya kazi YAKO baada ya mtoto kukuambia kuhusu madhara?", options: ["Kuandika maneno yake kamili, tarehe na saa", "Kumuuliza mtoto maswali mara nyingi", "Kumkabili mzazi", "Kuahidi kuweka siri"], answer: 0, why: "Unaandika ukweli na kuripoti; idara husika ndiyo inachunguza." },
      { objective: "O3", q: "Hujui pa kuripoti katika jimbo lako. Nani anaweza kusaidia?", options: ["Jirani", "Wanafunzi wenzake wa mtoto", "Childhelp National Child Abuse Hotline", "Hakuna, kwa hiyo unasubiri"], answer: 2, why: "Childhelp (1-800-422-4453) inakusaidia kufikia mahali sahihi; piga 911 kama mtoto yuko hatarini." },
      { objective: "O4", q: "Neno lipi HALIFAI katika maelezo ya uchunguzi?", options: ["\"alitembea\"", "\"alisema\"", "\"alipanga\"", "\"mtukutu\""], answer: 3, why: "\"Mtukutu\" ni jina la kumbandika mtoto; maelezo yanaandika vitendo na maneno." },
      { objective: "O4", q: "Kwa nini walimu huandika maelezo ya uchunguzi?", options: ["Kuwaadhibu watoto", "Kujua kila mtoto anaweza kufanya nini na kupanga hatua zinazofuata", "Kuyaweka mtandaoni", "Kulinganisha familia za watoto"], answer: 1, why: "Maelezo yanakusaidia kupanga na kushiriki ukweli na familia." },
      { objective: "O4", q: "Mtoto anasema, \"Nimetengeneza roketi!\" Unaliandikaje?", options: ["Andika maneno kamili ndani ya alama za kunukuu", "Andika \"mtoto ni mbunifu\"", "Liruke", "Andika unachofikiri alimaanisha"], answer: 0, why: "Kunukuu maneno kamili kunafanya maelezo yasiwe na upendeleo." },
      { objective: "O5", q: "Watoto wadogo hujifunza vizuri zaidi kupitia:", options: ["Mihadhara mirefu", "Karatasi za mazoezi siku nzima", "Mchezo wenye hatua ndogo ya kujinyoosha yenye furaha", "Kukaa kimya na kusubiri"], answer: 2, why: "Mchezo unaowanyoosha watoto kidogo ndiyo njia watoto wadogo hujifunza." },
      { objective: "O5", q: "Upi ni mpango kamili wa shughuli?", options: ["\"Fanyeni sanaa.\"", "\"Majani.\"", "\"Furahini.\"", "Umri, lengo, vifaa, hatua, tahadhari ya usalama, na jinsi utakavyojua imefanikiwa"], answer: 3, why: "Sehemu zote sita zinafanya mpango ambao mtu mwingine anaweza kuutumia." },
      { objective: "O5", q: "Kukimbia, kuruka na kupanda ni:", options: ["Ujuzi wa misuli mikubwa (gross motor)", "Ujuzi wa misuli midogo (fine motor)", "Ujuzi wa kusoma", "Ujuzi wa hesabu"], answer: 0, why: "Ujuzi wa misuli mikubwa unatumia misuli mikubwa ya mwili." },
      { objective: "O6", q: "Saa zako za uzoefu zinahesabiwa tu kama ziko ndani ya:", options: ["Miaka 10 kabla ya kuomba", "Miaka 3 kabla ya kuomba", "Mwezi 1 kabla ya kuomba", "Wakati wowote maishani mwako"], answer: 1, why: "Ukurasa wa Baraza unasema ndani ya miaka 3 kabla ya kuwasilisha ombi lako." },
      { objective: "O6", q: "Kitabu kipi kinaeleza kinachoingia kwenye portfolio yako?", options: ["Jarida lolote la malezi ya watoto", "Kitabu cha udereva cha jimbo lako", "Kitabu cha Baraza cha Competency Standards cha mazingira yako", "Kitabu cha mapishi"], answer: 2, why: "Kitabu cha Competency Standards cha mazingira yako kina maelekezo ya portfolio." },
      { objective: "O6", q: "Hatua ipi ya kwanza ni bora kwa mpango wako wa CDA?", options: ["Kuweka nafasi ya Verification Visit leo", "Kulipa kila ada kabla ya kukagua", "Kusubiri hadi uwe na saa 480, kisha ufikirie", "Kuchagua mazingira yako na kuandika tarehe za mafunzo, saa, portfolio, mtihani na ziara"], answer: 3, why: "Mpango wenye tarehe unaoanza na mazingira yako unakuweka ndani ya vipindi vya muda." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na uikague tena.",
    criteria: [
      { name: "Masharti sahihi", objective: "O1", notYet: "Hatua zinakosekana au saa na vipindi vya muda si sahihi.", meets: "Anaorodhesha kwa usahihi mazingira, saa 120 za mafunzo katika maeneo yote manane ya masomo, saa za kazi, portfolio, mtihani na ziara.", exceeds: "Pia anataja ada ya sasa, ufadhili mmoja wa kuomba na tarehe ya kuhuisha, vyote vimekaguliwa kwenye cdacouncil.org." },
      { name: "Mpango wenye tarehe", objective: "O6", notYet: "Hakuna tarehe, au tarehe zinavunja vipindi vya miaka 3 au miezi 6.", meets: "Tarehe halisi zinazolengwa kwa kila hatua zinazoweka uzoefu ndani ya miaka 3 na portfolio ndani ya miezi 6 ya kuomba.", exceeds: "Ina daftari la saa za kazi lililoanzishwa leo na vikumbusho vya kalenda." },
      { name: "Mpango wa shughuli", objective: "O5", notYet: "Unakosa lengo, tahadhari ya usalama au njia ya kukagua kama imefanikiwa.", meets: "Umri, lengo, vifaa, hatua, tahadhari ya usalama, jinsi utakavyojua imefanikiwa na eneo la masomo la CDA.", exceeds: "Anaongeza toleo rahisi zaidi na gumu zaidi na njia moja ya kuzishirikisha familia." },
      { name: "Kufikiria usalama", objective: "O2", notYet: "Shughuli au mpango unapuuza uangalizi, kunawa mikono au hatari za kusonga.", meets: "Tahadhari ya usalama inagusa uangalizi na hatari yoyote katika vifaa.", exceeds: "Anataja nani anatoa leseni za kulea watoto katika jimbo lake na mafunzo moja yanayotakiwa." },
      { name: "Tayari kuchunguza na kuripoti", objective: "O4", notYet: "Maelezo ya mfano yanatumia majina ya kumbandika, au hakuna mawasiliano ya kuripoti ya jimbo yaliyoandikwa.", meets: "Ina maelezo moja ya uchunguzi yasiyo na upendeleo na kadi ya mawasiliano ya kuripoti ya jimbo.", exceeds: "Maelezo yanaongoza kwenye hatua inayofuata iliyo wazi kwa mtoto, ikionyeshwa kuwa ni wazo la mwanafunzi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiandikisha katika mafunzo ya CDA yanayogusa maeneo manane ya masomo ndani ya siku 60",
      "Wanafunzi wanaoomba CDA, na wanaokipata, ndani ya miezi 12 hadi 18 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoajiriwa au kupandishwa cheo katika kazi ya kulea watoto, Head Start au chekechea ndani ya miezi 6",
      "Programu washirika zinaripoti wafanyakazi wapya wanaojua usingizi salama, uangalizi na wajibu wa kuripoti tangu siku ya kwanza"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ya kufungua cdacouncil.org na childcare.gov, au nakala zilizochapishwa za kurasa hizo",
      "Karatasi, kalamu na kalenda ya karatasi au ya simu",
      "Vitu vya kila siku kwa mpango wa shughuli (vikombe, soksi, karatasi, majani)",
      "Si lazima: kitabu cha Baraza cha Competency Standards cha mazingira ya mwanafunzi",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Kozi hii inawaandaa wanafunzi; haihesabiwi kama saa za mafunzo za CDA isipokuwa programu yako imepangwa kuzitoa. Waelekeze wanafunzi kwenye mafunzo yaliyoidhinishwa kwa saa 120.",
      "Kabla ya kufundisha, kagua masharti, ada na ufadhili wa CDA wa sasa kwenye cdacouncil.org, na sheria za jimbo lako za leseni na za wajibu wa kuripoti; hubadilika.",
      "Mazoezi ya uchunguzi: tumia video za watoto au mtoto wa mwanafunzi mwenyewe kwa ruhusa ya mzazi. Kamwe usikusanye picha au majina halisi ya watoto wa watu wengine.",
      "Wajibu wa kuripoti unaweza kuamsha kumbukumbu ngumu. Toa tahadhari kuhusu maudhui kabla ya Somo la 3, ruhusu mapumziko, na shiriki rasilimali za msaada za eneo lako.",
      "Wanafunzi wenye rekodi ya uhalifu: ukaguzi wa historia ni sehemu ya kazi ya kulea watoto. Wasaidie kutafuta sheria za jimbo lao na uwaunganishe na msaada wa kisheria badala ya kubahatisha.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
