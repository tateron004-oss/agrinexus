"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SOS_LLC = { name: "Secretary of State wa California: Kampuni za Dhima ya Kikomo, LLC (fomu na ada, kwa Kiingereza)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "Secretary of State wa California: Mashirika, corporations (fomu na ada, kwa Kiingereza)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "Secretary of State wa California: bizfile Online", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board: Kampuni ya dhima ya kikomo, LLC (kwa Kiingereza)", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board: Mashirika, corporations (kwa Kiingereza)", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board: Mwongozo wa aina za kawaida za umiliki wa biashara (FTB 1123, kwa Kiingereza)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA: Vibali na leseni (kwa Kiingereza)", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA: Kupata kibali cha muuzaji, seller's permit (maswali yanayoulizwa mara nyingi, kwa Kiingereza)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS: Pata Namba ya Utambulisho wa Mwajiri, EIN (kwa Kiingereza)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold: msaada wa vibali vya California (kwa Kiingereza)", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD: Hatua ya 1, jisajili kama mwajiri (kwa Kiingereza)", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "County Clerk wa Kaunti ya Los Angeles: masharti ya Jina la Biashara la Kubuni, FBN (kaunti ya mfano, kwa Kiingereza)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "Ofisi ya Mtetezi wa Biashara Ndogo ya California: Anzisha biashara yako (kwa Kiingereza)", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup-sw",
  lang: "sw",
  translationOf: "smallbiz-california-setup",
  category: "Small Business",
  name: "Kuanzisha Biashara Ndogo California, Pamoja na Gharama",
  skills: "Kuchagua muundo wa biashara, Kusajili biashara kwa jimbo na kaunti, Kupata EIN na kibali cha muuzaji, Kutafuta vibali vya eneo lako, Kuandaa jedwali la gharama za kuanza na tarehe za mwisho",
  outcome: "kuandaa mpango wa ukurasa mmoja wa kuanzisha biashara yako mwenyewe California: muundo utakaotumia, kila usajili na kibali unachohitaji kwa mpangilio sahihi, ofisi rasmi ya kila kimoja, gharama ya kila kimoja (au mahali pa kuitafuta), na tarehe za mwisho ambazo hupaswi kuzikosa.",
  about: [
    "Kozi hii ni ya watu wanaoanzisha biashara ndogo California: gari la kuuza chakula (food truck), saluni ya nywele, huduma ya usafi, duka la mtaani, duka la mtandaoni au mkate wa kuoka nyumbani. Wanafunzi wetu wengi wanaanzisha biashara kwa mara ya kwanza, wengi ni wa jamii za wachache, na wengi wanafanya hivi bila wakili.",
    "Utajifunza hatua za kuanzisha biashara kwa mpangilio: chagua muundo, sajili jina, pata namba ya kodi ya serikali kuu bure, pata kibali cha muuzaji ukiuza bidhaa, tafuta vibali vya jiji na kaunti, na panga kodi na fomu za kila mwaka za jimbo. Kila ada ya jimbo katika kozi hii ilikaguliwa kwenye ukurasa rasmi wa serikali, na kila somo linaorodhesha kurasa hizo.",
    "Ada na sheria hubadilika. Kabla ya kulipa chochote, fungua ukurasa rasmi ulioorodheshwa katika somo na ukague namba ya sasa. Ada za jiji na kaunti zinatofautiana kila mahali, kwa hiyo kozi hii inakuonyesha mahali pa kuzitafuta badala ya kubahatisha. Kwa hali yako mwenyewe, mshauri wa bure wa SCORE, Kituo cha Kukuza Biashara Ndogo (SBDC) au mtaalamu wa kodi anaweza kukusaidia.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi hizo zinajenga mpango wako mwenyewe wa kuanzisha biashara."
  ],
  finalTask: "Andaa mpango wa ukurasa mmoja wa kuanzisha biashara yako wenye safu tano: Hatua, Ofisi (pamoja na tovuti rasmi), Gharama (au \"tafuta kwenye ...\"), Tarehe ya mwisho, Imekamilika. Weka muundo wako, usajili wa jina, EIN, kibali cha muuzaji (au kwa nini hukihitaji), leseni ya biashara ya jiji, vibali maalum vyovyote ambavyo CalGold inaorodhesha kwa aina ya biashara yako, na kodi ya $800 ya kila mwaka pamoja na Statement of Information ukianzisha LLC au shirika (corporation).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaoanzisha biashara ndogo California, kama gari la kuuza chakula, saluni ya nywele, huduma ya usafi, duka la mtaani, duka la mtandaoni au mkate wa kuoka nyumbani. Wengi wanaanzisha biashara kwa mara ya kwanza, ni wa jamii za wachache, na wanafanya hivi bila wakili.",
    startingPoint: "Wana wazo la biashara na wanaweza kutumia simu au kompyuta kufungua tovuti. Wengi hawajui hatua za kuanzisha biashara, ofisi inayoshughulikia kila hatua, ada za jimbo ni kiasi gani, wala fomu na kodi za kila mwaka zinazoambatana na kila muundo.",
    gap: "Kukosa usajili, kibali au fomu ya kila mwaka kunaweza kuleta faini na adhabu, na tovuti za kulipia zinazofanana na zile rasmi zinatoza pesa nyingi kwa huduma za bure. Wanafunzi wanahitaji mpango wenye kila hatua kwa mpangilio, ofisi rasmi, gharama na tarehe ya mwisho, ili waanze kihalali na wapange bajeti sahihi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta yenye intaneti ili kufungua kurasa rasmi za .gov",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kuendesha au kupanga biashara",
      "Ada na sheria hubadilika, na ada za jiji na kaunti zinatofautiana; wanafunzi wanakagua kila ukurasa rasmi kabla ya kulipa",
      "Si ushauri wa kisheria wala wa kodi; faragha: namba ya Social Security inaandikwa tu kwenye fomu rasmi ya IRS"
    ],
    prerequisites: "Hakuna. Kozi \"Utangulizi wa AI kwa Biashara Ndogo\" inasaidia kama wanafunzi wanataka kutumia AI kupanga mpango wao."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wazo lako la biashara, wamiliki na hatari zake", action: "kuchagua muundo wa biashara na kuorodhesha gharama ya kuuanzisha", standard: "ukiwa na sababu moja ya chaguo lako na ada imekaguliwa kwenye ukurasa wa Secretary of State" },
    { id: "O2", condition: "Ukipewa jina la biashara yako na muundo wake", action: "kutafuta jinsi ya kusajili jina la biashara yako", standard: "ukiwa umeandika katika mpango wako ofisi sahihi, ukurasa wake wa ada na sheria ya kuchapisha tangazo" },
    { id: "O3", condition: "Ukipewa aina ya biashara yako", action: "kuamua kama unahitaji kibali cha muuzaji na kuorodhesha jinsi ya kupata EIN bure", standard: "ukitaja IRS na CDTFA kama ofisi husika na bila kutumia huduma ya kulipia ya EIN" },
    { id: "O4", condition: "Ukitumia CalGold na tovuti ya jiji lako", action: "kuorodhesha vibali vya eneo lako ambavyo biashara yako inahitaji", standard: "pamoja na tovuti ya kila ofisi na ada au mahali pa kuitafuta" },
    { id: "O5", condition: "Ukipewa muundo wako na mipango yako ya kuajiri", action: "kuorodhesha gharama za kila mwaka za jimbo na tarehe za mwisho", standard: "pamoja na kodi ya $800, Statement of Information na usajili wa EDD pale zinapohusika, kila kimoja kikiwa kimekaguliwa kwenye ukurasa rasmi" },
    { id: "O6", condition: "Ukipewa kila hatua kutoka kozi hii", action: "kuandaa mpango wa ukurasa mmoja wenye hatua kwa mpangilio, ofisi, gharama na tarehe za mwisho", standard: "kila gharama ikiwa imekaguliwa kwenye ukurasa rasmi au imeandikwa \"tafuta kwenye\" pamoja na mahali" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua na kusajili biashara yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchagua muundo wa biashara",
          minutes: 6,
          goal: "Chagua muundo wa biashara unaofaa biashara yako leo, na ujue gharama ya kuuanzisha.",
          text: [
            "Muundo wa biashara ni umbo la kisheria la biashara yako. Machaguo ya kawaida zaidi kwa biashara ndogo ni biashara ya mtu mmoja (sole proprietorship), ubia wa kawaida (general partnership), kampuni ya dhima ya kikomo (LLC) na shirika (corporation).",
            "Biashara ya mtu mmoja ni mtu mmoja anayefanya biashara. Huwasilishi fomu za kuanzisha kwa Secretary of State wa California, kwa hiyo hakuna ada ya jimbo ya kuanzisha. Lakini kisheria wewe na biashara ni kitu kimoja: biashara ikidaiwa pesa au ikishtakiwa, mali zako binafsi zinaweza kuwa hatarini. Ubia ni wazo hilohilo lakini na wamiliki wawili au zaidi.",
            "LLC au shirika ni chombo cha kisheria kinachojitegemea. Unakianzisha kwa kuwasilisha fomu kwa Secretary of State wa California. Secretary of State anaorodhesha ada ya Articles of Organization za LLC (Fomu LLC-1) kuwa $70, na ya Articles of Incorporation za shirika la kawaida la hisa (Fomu ARTS-GS) kuwa $100. LLC au shirika linaweza kusaidia kulinda mali zako binafsi dhidi ya madeni ya biashara, lakini linagharimu zaidi kila mwaka (Somo la 6).",
            "Hakuna jibu moja sahihi. Huduma ya usafi ya mtu mmoja inayoanza tu inaweza kuanza kama biashara ya mtu mmoja; mgahawa wenye mkataba wa kukodi, wafanyakazi na hatari zaidi mara nyingi unaanzisha LLC au shirika. Zungumza na mshauri wa bure wa SBDC, mshauri wa SCORE au mtaalamu wa kodi kabla ya kuamua."
          ],
          steps: ["Andika nani anamiliki biashara na ina hatari kiasi gani (mkataba wa kukodi, wafanyakazi, wateja wanaofika, mikopo).", "Soma Mwongozo wa FTB wa aina za kawaida za umiliki.", "Linganisha gharama za kila mwaka, si ada ya kuanzisha tu.", "Chagua muundo, na muulize mshauri kama huna uhakika."],
          words: [["Muundo wa biashara", "umbo la kisheria la biashara, kama biashara ya mtu mmoja, LLC au shirika."], ["Biashara ya mtu mmoja (sole proprietorship)", "biashara inayomilikiwa na mtu mmoja, ambayo kisheria haijatengana na mmiliki wake."], ["LLC", "limited liability company (kampuni ya dhima ya kikomo): biashara iliyosajiliwa na jimbo, inayojitegemea mbali na wamiliki wake."], ["Dhima (liability)", "kuwajibika kisheria kwa deni au kwa madhara."]],
          slides: [
            { title: "Miundo minne ya kawaida", bullets: ["Biashara ya mtu mmoja (mmiliki mmoja)", "Ubia wa kawaida (wamiliki wawili au zaidi)", "Kampuni ya dhima ya kikomo (LLC)", "Shirika (corporation)"] },
            { title: "Biashara ya mtu mmoja au ubia", bullets: ["Hakuna fomu ya kuanzisha kwa Secretary of State", "Kisheria wewe na biashara ni kitu kimoja", "Mali zako binafsi zinaweza kuwa hatarini"] },
            { title: "LLC au shirika", bullets: ["Linaanzishwa kwa kuwasilisha fomu kwa Secretary of State", "LLC-1: $70. Shirika la hisa ARTS-GS: $100", "Linajitegemea mbali na wewe, lakini linagharimu zaidi kila mwaka"] },
            { title: "Kuchagua", bullets: ["Fikiria hatari: kukodi, wafanyakazi, wateja, mikopo", "Linganisha gharama za kila mwaka, si ada za kuanzisha tu", "Uliza mshauri wa bure wa SBDC au SCORE"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Anza mpango wako. Juu kabisa andika wazo lako la biashara, nani anaimiliki, na hatari zake kubwa zaidi. Kisha andika muundo ambao ungechagua leo na sababu moja.",
          youCanNow: "kutaja miundo ya kawaida ya biashara, kusema gharama ya kuanzisha LLC au shirika kwa jimbo, na kuchagua mmoja kwa biashara yako.",
          quickCheck: [
            { objective: "O1", q: "Muundo upi hauhitaji kuwasilisha fomu za kuanzisha kwa Secretary of State wa California?", options: ["LLC", "Shirika (corporation)", "Biashara ya mtu mmoja", "Shirika lisilo la faida"], answer: 2, why: "Biashara ya mtu mmoja haiwasilishi fomu za kuanzisha kwa Secretary of State." },
            { objective: "O1", q: "Unataka kuanzisha LLC na unaona ada mtandaoni. Ungefanya nini kabla ya kulipa?", options: ["Kukagua ada ya sasa kwenye ukurasa rasmi wa Secretary of State", "Kulipa tovuti ya kwanza inayotokea", "Kumuuliza rafiki alilipa kiasi gani miaka iliyopita", "Kutumia chochote AI inachosema"], answer: 0, why: "Ada hubadilika, kwa hiyo unakagua ukurasa rasmi kabla ya kulipa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuipa biashara yako jina na kulisajili",
          minutes: 5,
          goal: "Sajili jina la biashara yako kwa njia sahihi kwa muundo wako.",
          text: [
            "LLC au shirika linasajili jina lake linapowasilisha fomu zake za kuanzisha kwa Secretary of State. Unaweza kuwasilisha mtandaoni kwenye bizfile Online (bizfileonline.sos.ca.gov). Kwanza tafuta jina hilo hapo uone kama biashara nyingine tayari inalitumia.",
            "Ukifanya biashara kwa jina ambalo si jina lako la kisheria, unawasilisha taarifa ya Jina la Biashara la Kubuni (Fictitious Business Name, FBN), pia inayoitwa DBA (\"doing business as\", yaani \"anayefanya biashara kama\"), kwa county clerk (karani wa kaunti) wa kaunti ambako biashara yako iko. Kwa mfano, Maria Lopez akiendesha \"Sunrise Tamales\", anawasilisha FBN. LLC inayotumia jina tofauti na lile lililosajiliwa pia inawasilisha FBN.",
            "Ada ya FBN inawekwa na kila kaunti, kwa hiyo itafute kwenye tovuti ya county clerk wako. Kaunti pia zinakutaka uchapishe FBN katika gazeti la eneo lako mara moja kwa wiki kwa wiki nne, kwa kawaida ukianza ndani ya siku 30 baada ya kuwasilisha, kisha uwasilishe uthibitisho wa kuchapisha. Kagua sheria kamili za kaunti yako."
          ],
          steps: ["Tafuta wazo lako la jina kwenye bizfile Online.", "LLC au shirika: wasilisha fomu za kuanzisha kwenye bizfile Online.", "Ukitumia jina ambalo si jina lako la kisheria: wasilisha FBN kwa county clerk wako.", "Chapisha FBN katika gazeti kama kaunti yako inavyotaka, na uwasilishe uthibitisho.", "Andika kila hatua, ofisi yake na gharama yake katika mpango wako."],
          words: [["Jina la Biashara la Kubuni (FBN)", "jina la biashara ambalo si jina la kisheria la mmiliki; pia linaitwa DBA."], ["DBA", "\"doing business as\" (anayefanya biashara kama): jina ambalo biashara inatumia mbele ya umma."], ["County clerk", "ofisi ya kaunti inayopokea taarifa za FBN na kumbukumbu nyingine za umma."]],
          slides: [
            { title: "LLC au shirika", bullets: ["Jina linasajiliwa unapolianzisha", "Wasilisha mtandaoni kwenye bizfileonline.sos.ca.gov", "Kwanza tafuta jina"] },
            { title: "Jina la Biashara la Kubuni (DBA)", bullets: ["Kwa jina ambalo si jina lako la kisheria", "Linawasilishwa kwa county clerk wako", "Mfano: Maria Lopez anafanya biashara kama Sunrise Tamales"] },
            { title: "Gharama za FBN na kuchapisha", bullets: ["Ada inawekwa na kila kaunti: kagua tovuti yake", "Chapisha katika gazeti la eneo mara moja kwa wiki kwa wiki 4", "Kisha wasilisha uthibitisho; kagua tarehe za mwisho za kaunti yako"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Tafuta jina la biashara yako kwenye bizfile Online. Kisha tafuta ukurasa wa FBN wa county clerk wako na uandike ada ya kuwasilisha na sheria ya kuchapisha katika mpango wako.",
          youCanNow: "kukagua kama jina la biashara liko huru, na kusema lini unahitaji Jina la Biashara la Kubuni na mahali pa kuliwasilisha.",
          quickCheck: [
            { objective: "O2", q: "DBA ni nini?", options: ["Fomu ya kodi", "Leseni ya biashara", "Aina ya LLC", "Jina ambalo biashara inatumia mbele ya umma, kama si jina la kisheria la mmiliki"], answer: 3, why: "DBA ni jina la umma la biashara linalotofautiana na jina la kisheria la mmiliki." },
            { objective: "O2", q: "Umewasilisha Jina la Biashara la Kubuni kwa kaunti yako. Kuna uwezekano mkubwa ungefanya nini baadaye?", options: ["Hakuna kingine", "Kulichapisha katika gazeti la eneo kama kaunti yako inavyotaka", "Kuliwasilisha tena kwa IRS", "Kusubiri miaka mitano"], answer: 1, why: "Kaunti nyingi za California zinakutaka uchapishe FBN katika gazeti la eneo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata EIN yako bure na kibali cha muuzaji",
          minutes: 5,
          goal: "Omba EIN kutoka IRS na uamue kama unahitaji kibali cha muuzaji cha California.",
          text: [
            "EIN (Employer Identification Number, Namba ya Utambulisho wa Mwajiri) ni namba ya kodi ya biashara yako kwa serikali kuu ya Marekani. LLC, mashirika, ubia na biashara yoyote yenye wafanyakazi zinahitaji EIN; mtu anayefanya biashara peke yake bila wafanyakazi anaweza kutumia namba yake mwenyewe, lakini mara nyingi anapata EIN ili kutenganisha biashara na mambo binafsi. IRS inasema hulazimiki kamwe kulipa ada kwa EIN. Omba kwenye irs.gov, na uwe mwangalifu na tovuti zinazotoza pesa kwa ajili yake.",
            "Kibali cha muuzaji (seller's permit) kinatoka kwa Idara ya Kodi na Ada ya California (CDTFA). Ukiuza au kukodisha bidhaa ambazo kwa kawaida zinatozwa kodi California, unakihitaji, na lazima ukionyeshe mahali unapofanyia biashara. Duka, boutique, gari la kuuza chakula na mgahawa kwa kawaida vinakihitaji. Huduma tupu, kama usafi wa nyumba au kufundisha masomo ya ziada, mara nyingi haikihitaji, lakini kagua.",
            "CDTFA inasema hakuna ada ya kibali cha muuzaji, lakini inaweza kuomba amana ya dhamana (security deposit), na inaamua kiasi chake unapoomba. Ukiuza mahali pamoja kwa siku 90 au chini, kama kibanda cha msimu, huenda ukahitaji kibali cha muda cha muuzaji badala yake. Jisajili mtandaoni kupitia CDTFA."
          ],
          steps: ["Nenda irs.gov na utafute \"apply for an EIN\".", "Omba mtandaoni kwa kikao kimoja na uhifadhi barua ya uthibitisho.", "Amua kama unauza bidhaa zinazotozwa kodi.", "Kama ndiyo, jisajili kwa kibali cha muuzaji kwenye cdtfa.ca.gov.", "Onyesha kibali mahali unapofanyia biashara."],
          words: [["EIN", "Employer Identification Number: namba ya bure ya kodi ya biashara kwa serikali kuu, kutoka IRS."], ["Kibali cha muuzaji (seller's permit)", "kibali cha California, kutoka CDTFA, cha kuuza bidhaa zinazotozwa kodi na kukusanya kodi ya mauzo."], ["CDTFA", "California Department of Tax and Fee Administration (Idara ya Kodi na Ada ya California)."], ["Amana ya dhamana (security deposit)", "pesa ambazo CDTFA inaweza kushikilia endapo kodi ya mauzo haitalipwa baadaye."]],
          slides: [
            { title: "EIN: namba ya kodi ya biashara yako", bullets: ["Kutoka IRS, kwenye irs.gov", "Bure kila wakati: IRS haitozi kamwe pesa kwa EIN", "Kuwa mwangalifu na tovuti zinazotoza ada"] },
            { title: "Kibali cha muuzaji: nani anakihitaji", bullets: ["Anayeuza au kukodisha bidhaa zinazotozwa kodi California", "Maduka, magari ya chakula, migahawa kwa kawaida wanakihitaji", "Huduma tupu mara nyingi hazikihitaji: kagua"] },
            { title: "Kibali cha muuzaji: gharama", bullets: ["Hakuna ada ya kuomba (CDTFA)", "CDTFA inaweza kuomba amana ya dhamana", "Unauza kwa siku 90 au chini? Uliza kuhusu kibali cha muda"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Ongeza mistari miwili katika mpango wako: EIN (IRS, bure, omba kwenye irs.gov) na kibali cha muuzaji (CDTFA, hakuna ada, huenda amana) au maelezo yanayosema kwa nini hukihitaji. Usiandike namba yako ya Social Security popote isipokuwa kwenye fomu rasmi ya IRS.",
          youCanNow: "kuomba EIN bure kwenye tovuti rasmi ya IRS na kuamua kama biashara yako inahitaji kibali cha muuzaji.",
          quickCheck: [
            { objective: "O3", q: "Ofisi gani inatoa vibali vya muuzaji vya California?", options: ["IRS", "County clerk wako", "CDTFA", "Secretary of State"], answer: 2, why: "Idara ya Kodi na Ada ya California (CDTFA) inatoa vibali vya muuzaji." },
            { objective: "O3", q: "Unapanga kuuza bidhaa kwenye soko la sikukuu kwa wiki chache tu. Ungefanya nini?", options: ["Kuiuliza CDTFA kuhusu kibali cha muda cha muuzaji", "Kuacha vibali kwa sababu ni muda mfupi", "Kupata EIN badala yake", "Kulipa tovuti binafsi kwa kibali"], answer: 0, why: "Wauzaji wa muda mfupi wanaweza kuiuliza CDTFA kuhusu kibali cha muda cha muuzaji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua na kusajili biashara yako",
        questions: [
          { objective: "O1", q: "Secretary of State anaorodhesha ada gani kwa Articles of Organization za LLC (Fomu LLC-1)?", options: ["$800", "$70", "$20", "Bure"], answer: 1, why: "Ukurasa wa fomu za LLC wa Secretary of State unaorodhesha Fomu LLC-1 kwa $70." },
          { objective: "O1", q: "Kevin anaendesha biashara ya kutunza bustani kama biashara ya mtu mmoja. Kipi ni kweli?", options: ["Lazima alipe $100 kwa Secretary of State kuianzisha", "Hawezi kutumia jina la biashara", "Lazima aanzishe shirika kwanza", "Hawasilishi fomu za kuanzisha kwa Secretary of State"], answer: 3, why: "Biashara za mtu mmoja haziwasilishi fomu za kuanzisha kwa Secretary of State." },
          { objective: "O2", q: "Maria Lopez anauza chakula kama \"Sunrise Tamales\". Anawasilisha Jina lake la Biashara la Kubuni wapi?", options: ["Kwa county clerk wake", "CDTFA", "IRS", "Franchise Tax Board"], answer: 0, why: "Taarifa za FBN zinawasilishwa kwa county clerk wa kaunti ambako biashara iko." },
          { objective: "O3", q: "Tovuti inakuomba $150 ili ikupatie EIN. Unafanya nini?", options: ["Unalipa; ni haraka zaidi", "Unatumia EIN ya rafiki", "Unaomba bure kwenye irs.gov badala yake", "Unaacha EIN milele"], answer: 2, why: "IRS inasema hulazimiki kamwe kulipa ada kwa EIN." },
          { objective: "O3", q: "Biashara ipi ina uwezekano mkubwa zaidi wa kuhitaji kibali cha muuzaji cha California?", options: ["Huduma ya usafi wa nyumba", "Huduma ya kufundisha masomo ya ziada", "Boutique inayouza nguo", "Huduma ya kutunza hesabu"], answer: 2, why: "Kuuza bidhaa zinazotozwa kodi, kama nguo, kunahitaji kibali cha muuzaji." }
        ]
      }
    },
    {
      name: "Sura 2: Vibali vya eneo lako, gharama za kila mwaka na mpango wako",
      lessons: [
        {
          objectives: ["O4","O6"],
          title: "Kutafuta vibali vya jiji na kaunti yako",
          minutes: 5,
          goal: "Tumia CalGold na tovuti ya jiji lako kuorodhesha vibali vya eneo lako ambavyo biashara yako inahitaji.",
          text: [
            "Majiji mengi yanataka leseni ya biashara au cheti cha kodi ya biashara (business tax certificate), hata kwa biashara ya nyumbani. Gharama inawekwa na kila jiji (au na kaunti, kama uko nje ya jiji) na mara nyingi inategemea aina ya biashara yako au mapato yako. Itafute kwenye tovuti ya jiji lako au piga simu ofisi ya jiji (city hall).",
            "Baadhi ya biashara zinahitaji vibali maalum. Mgahawa au gari la kuuza chakula linahitaji kibali cha afya kutoka idara ya afya ya mazingira ya kaunti. Mkate wa kuoka nyumbani huenda ukahitaji usajili au kibali cha cottage food (chakula cha kutengenezwa nyumbani) kutoka kaunti. Saluni inahitaji leseni za bodi ya jimbo kwa wafanyakazi. Maeneo mengi pia yanahitaji ukaguzi wa matumizi ya ardhi (zoning), ukaguzi wa moto au kibali cha bango.",
            "CalGold (calgold.ca.gov) ni zana ya bure ya jimbo inayokusaidia kupata taarifa za vibali. Unachagua jiji au kaunti yako na aina ya biashara yako, nayo inaorodhesha ofisi husika na jinsi ya kuzifikia. CalGold haitoi vibali, na inasema bado inajengwa, kwa hiyo piga simu ofisi husika kuthibitisha."
          ],
          steps: ["Fungua calgold.ca.gov.", "Chagua jiji au kaunti yako.", "Chagua aina ya biashara yako (au \"General Business Information\").", "Andika kila kibali na ofisi inayokitoa.", "Tembelea au piga simu kila ofisi kuthibitisha ada na jinsi ya kuomba."],
          words: [["Leseni ya biashara", "ruhusa ya jiji au kaunti ya kuendesha biashara hapo; wakati mwingine inaitwa cheti cha kodi ya biashara."], ["Zoning", "sheria za eneo kuhusu aina ya biashara inayoweza kufanya kazi kwenye anwani fulani."], ["CalGold", "tovuti ya bure ya California inayoorodhesha taarifa za vibali kwa mahali na aina ya biashara."]],
          slides: [
            { title: "Leseni ya biashara ya jiji", bullets: ["Majiji mengi yanaitaka, hata nyumbani", "Ada inawekwa na kila jiji au kaunti", "Kagua tovuti ya jiji lako au piga simu city hall"] },
            { title: "Vibali maalum", bullets: ["Chakula: kibali cha afya ya mazingira cha kaunti", "Mkate wa kuoka nyumbani: sheria za cottage food za kaunti", "Vibali vya zoning, ukaguzi wa moto na mabango"] },
            { title: "Tumia CalGold", bullets: ["calgold.ca.gov: chagua jiji na aina ya biashara", "Inaorodhesha ofisi; haitoi vibali", "Piga simu kila ofisi kuthibitisha ada"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Tumia CalGold kwa jiji lako na aina ya biashara yako. Ongeza kila kibali inachoorodhesha katika mpango wako, pamoja na tovuti ya ofisi husika. Kwa kila kimoja, andika ada au \"tafuta kwenye\" pamoja na mahali.",
          youCanNow: "kutafuta vibali vya jiji na kaunti ambavyo biashara yako inahitaji na ofisi inayotoa kila kimoja.",
          quickCheck: [
            { objective: "O4", q: "CalGold inafanya nini?", options: ["Inatoa kila kibali unachohitaji", "Inakusanya kodi zako", "Inaanzisha LLC yako", "Inaorodhesha taarifa za vibali na ofisi kwa jiji lako na aina ya biashara yako"], answer: 3, why: "CalGold inaorodhesha vibali na ofisi, lakini haivitoi." },
            { objective: "O4", q: "CalGold inaorodhesha kibali kwa gari lako la kuuza chakula. Ungefanya nini baadaye?", options: ["Kudhani tayari unacho", "Kuwasiliana na ofisi iliyoorodheshwa kuthibitisha ada na kuomba", "Kuiomba AI ikuombee", "Kusubiri hadi mkaguzi aje"], answer: 1, why: "CalGold haitoi vibali, kwa hiyo unawasiliana na kila ofisi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gharama za kila mwaka: kodi ya $800, fomu na mishahara",
          minutes: 6,
          goal: "Orodhesha gharama za kila mwaka za jimbo na tarehe za mwisho zinazoambatana na muundo wako.",
          text: [
            "LLC: Franchise Tax Board (FTB) inasema kila LLC inayofanya biashara au iliyoanzishwa California lazima ilipe kodi ya kila mwaka ya $800, kila mwaka, hadi LLC ifutwe, hata kama haifanyi biashara yoyote. Malipo ya kwanza yanatakiwa kufikia siku ya 15 ya mwezi wa 4 baada ya kuwasilisha fomu kwa Secretary of State. LLC zinazopata zaidi ya $250,000 pia zinalipa ada ya LLC. Msamaha wa mwaka wa kwanza uliokuwepo kwa 2021 hadi 2023 hautumiki tena.",
            "Mashirika: FTB inasema mashirika yanalipa kodi ya chini ya franchise ya $800, lakini mashirika yaliyoanzishwa karibuni hayalazimiki kulipa kiwango hicho cha chini katika mwaka wao wa kwanza wa kodi. Bado yanaweza kudaiwa kodi ya mapato na lazima yalipe malipo ya makadirio.",
            "Statement of Information (Taarifa ya Maelezo): LLC na mashirika yanaiwasilisha kwa Secretary of State. Statement of Information ya LLC (LLC-12) ni $20, inatakiwa ndani ya siku 90 baada ya kuanzisha na kila miaka miwili baadaye. Ya shirika la hisa (SI-550) ni $25. Kuikosa kunaweza kuleta adhabu.",
            "Kuajiri wafanyakazi: jisajili na Employment Development Department (EDD) ndani ya siku 15 baada ya kulipa zaidi ya $100 za mishahara katika robo mwaka. Sheria za mishahara zina maelezo mengi, kwa hiyo wamiliki wengi wanatumia huduma ya mishahara au mtaalamu wa kodi."
          ],
          words: [["Franchise Tax Board (FTB)", "ofisi ya kodi ya jimbo la California kwa kodi ya mapato na kodi ya franchise."], ["Kodi ya kila mwaka", "kodi ya $800 ambayo kila LLC ya California inalipa kila mwaka."], ["Statement of Information", "fomu fupi ambayo LLC na mashirika yanawasilisha kwa Secretary of State ili maelezo yao yawe ya sasa."], ["EDD", "Employment Development Department: ofisi ya jimbo ya kodi za mishahara na waajiri."]],
          slides: [
            { title: "LLC: $800 kila mwaka", bullets: ["Inatakiwa kufikia siku ya 15 ya mwezi wa 4 baada ya kuanzisha", "Inadaiwa hata bila mauzo, hadi uifute", "Mapato zaidi ya $250,000: pia ada ya LLC"] },
            { title: "Shirika: kiwango cha chini $800", bullets: ["Kodi ya chini ya franchise: $800", "Hailazimiki katika mwaka wa kwanza wa kodi", "Malipo ya makadirio bado yanaweza kutakiwa"] },
            { title: "Statement of Information", bullets: ["LLC (LLC-12): $20, ndani ya siku 90, kisha kila miaka 2", "Shirika la hisa (SI-550): $25", "Kuikosa kunaweza kuleta adhabu"] },
            { title: "Kuajiri wafanyakazi", bullets: ["Jisajili na EDD ndani ya siku 15", "Baada ya kulipa zaidi ya $100 za mishahara katika robo mwaka", "Fikiria huduma ya mishahara au mtaalamu wa kodi"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Ongeza katika mpango wako mistari ya kila mwaka inayolingana na muundo wako: kodi ya $800 na tarehe yake ya mwisho, Statement of Information na ada yake, na usajili wa EDD kama utaajiri. Fungua kila ukurasa rasmi na ukague namba kabla ya kuiandika.",
          youCanNow: "kuorodhesha gharama za kila mwaka za jimbo na tarehe za mwisho kwa muundo wako na kusema ofisi gani inakusanya kila moja.",
          quickCheck: [
            { objective: "O5", q: "Baada ya ile ya kwanza, LLC inawasilisha Statement of Information mara ngapi?", options: ["Kila mwezi", "Kila miaka mitano", "Mara moja tu", "Kila miaka miwili"], answer: 3, why: "Baada ya ile ya kwanza, LLC inawasilisha Statement of Information kila miaka miwili." },
            { objective: "O5", q: "LLC yako haikupata pesa yoyote mwaka huu. Ungepanga nini?", options: ["Hakuna, kwa kuwa hakukuwa na biashara", "Kufuta mpango wa kodi", "Kodi ya kila mwaka ya $800 bado inadaiwa hadi LLC ifutwe", "Kodi ya serikali kuu tu"], answer: 2, why: "LLC inadaiwa kodi ya kila mwaka ya $800 hadi ifutwe, hata bila biashara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuunganisha yote: mpango wako na bajeti",
          minutes: 5,
          goal: "Andaa mpango wa ukurasa mmoja wenye hatua kwa mpangilio, ofisi, gharama na tarehe za mwisho.",
          text: [
            "Sasa weka yote kwenye ukurasa mmoja. Mpangilio ni muhimu: chagua muundo, anzisha LLC au shirika (kama lipo), pata EIN, wasilisha FBN (kama inahitajika), pata kibali cha muuzaji (kama kinahitajika), kisha pata vibali vya jiji na kaunti. Vibali vingi vinaomba EIN yako au namba ya usajili wa chombo chako (entity number), kwa hiyo fanya hayo kwanza.",
            "Jumlisha gharama unazozijua, na uweke alama kwa zile ambazo bado unahitaji kuzitafuta. Mfano wa gari la kuuza chakula lenye LLC: LLC-1 $70, Statement of Information $20, EIN bure, kibali cha muuzaji bila ada (huenda amana), kodi ya kila mwaka $800, pamoja na kibali cha afya cha kaunti, leseni ya jiji na ada za FBN ambazo unazitafuta katika eneo lako.",
            "Msaidizi wa AI anaweza kukusaidia kupanga jedwali na kutengeneza orodha ya kukagua, lakini anaweza kukosea kuhusu ada na tarehe. Tumia ukurasa rasmi kila wakati kwa namba. Usiandike namba yako ya Social Security, taarifa za benki wala nywila katika zana ya AI. Ukimaliza, onyesha mpango kwa mshauri wa bure wa SBDC au mtaalamu wa kodi."
          ],
          steps: ["Orodhesha hatua kwa mpangilio.", "Ongeza ofisi na tovuti rasmi ya kila moja.", "Ongeza gharama kutoka ukurasa rasmi, au \"tafuta kwenye ...\".", "Ongeza tarehe ya mwisho ya kila kitu cha kila mwaka.", "Jumlisha gharama zinazojulikana na uonyeshe mpango kwa mshauri."],
          words: [["Gharama za kuanza", "pesa unazotumia mara moja kufungua biashara."], ["Gharama zinazojirudia", "gharama unazolipa tena kila mwaka, kama kodi ya $800."]],
          slides: [
            { title: "Mpangilio", bullets: ["1. Muundo  2. Anzisha LLC au shirika", "3. EIN  4. FBN kama inahitajika  5. Kibali cha muuzaji", "6. Vibali vya jiji na kaunti"] },
            { title: "Mfano: gari la chakula lenye LLC", bullets: ["LLC-1 $70; Statement of Information $20", "EIN bure; kibali cha muuzaji bila ada", "Kodi ya kila mwaka $800; ada za eneo: zitafute"] },
            { title: "Kutumia AI kwa usalama hapa", bullets: ["AI inaweza kupanga jedwali lako na orodha ya kukagua", "Pata kila ada na tarehe kutoka ukurasa rasmi", "Usiandike kamwe SSN yako, taarifa za benki wala nywila"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa ukurasa mmoja wenye safu tano: Hatua, Ofisi (tovuti), Gharama, Tarehe ya mwisho, Imekamilika. Jaza kila mstari kutoka kozi hii, jumlisha gharama zinazojulikana, na uweke alama kwa kila ada ya eneo ambayo bado unahitaji kuitafuta.",
          youCanNow: "kuandaa na kutumia mpango kamili wa kuanzisha biashara California.",
          quickCheck: [
            { objective: "O6", q: "Kwa kawaida unapaswa kufanya hatua hizi kwa mpangilio gani?", options: ["Chagua muundo, uanzishe, pata EIN, kisha vibali vya eneo", "Vibali vya eneo, kisha chagua muundo", "Pata EIN kabla ya kuchagua jina au muundo, kisha uanzishe mwishoni", "Mpangilio wowote ni sawa"], answer: 0, why: "Kila hatua inategemea ile iliyotangulia, kuanzia na muundo." },
            { objective: "O6", q: "Bado hujui ada ya leseni ya biashara ya jiji lako. Ungeandika nini katika mpango wako?", options: ["Kubahatisha", "Sifuri", "\"Tafuta kwenye\" pamoja na tovuti rasmi ya jiji", "Ada ya jiji jingine"], answer: 2, why: "Ada za eneo zinatofautiana, kwa hiyo unaandika mahali pa kuzitafuta badala ya kubahatisha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Vibali vya eneo lako, gharama za kila mwaka na mpango wako",
        questions: [
          { objective: "O4", q: "CalGold inafanya nini?", options: ["Inaorodhesha taarifa za vibali na ofisi kwa jiji lako na aina ya biashara yako", "Inatoa leseni yako ya biashara", "Inakusanya kodi ya $800", "Inakupa EIN"], answer: 0, why: "CalGold inatafuta taarifa za vibali; haitoi vibali." },
          { objective: "O4", q: "Nani anaweka ada ya leseni ya biashara ya jiji?", options: ["IRS", "Secretary of State", "CDTFA", "Kila jiji au kaunti"], answer: 3, why: "Ada za leseni za eneo zinawekwa na kila jiji au kaunti." },
          { objective: "O5", q: "LLC haikufanya biashara yoyote mwaka huu. Je, inadaiwa kodi ya kila mwaka ya $800?", options: ["Hapana, ila tu kama ilipata pesa", "Ndiyo, hadi LLC ifutwe", "Katika mwaka wa kwanza tu", "Kama ina wafanyakazi tu"], answer: 1, why: "FTB inasema kodi ya kila mwaka inadaiwa hata kama LLC haifanyi biashara, hadi ifutwe." },
          { objective: "O5", q: "Statement of Information ya kwanza ya LLC inatakiwa lini?", options: ["Ndani ya siku 90 baada ya kuanzisha", "Kila mwezi", "Inapofungwa tu", "Ndani ya miaka 10"], answer: 0, why: "Secretary of State anasema inatakiwa ndani ya siku 90 baada ya kusajili na kila miaka miwili baadaye." },
          { objective: "O5", q: "Utaajiri mfanyakazi wako wa kwanza. Unajisajili na ofisi gani?", options: ["CalGold", "County clerk", "EDD", "DMV"], answer: 2, why: "Waajiri wanajisajili na EDD ndani ya siku 15 baada ya kulipa zaidi ya $100 za mishahara katika robo mwaka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuanzisha Biashara Ndogo California, Pamoja na Gharama",
    questions: [
      { objective: "O1", q: "Muundo upi hauhitaji kuwasilisha fomu za kuanzisha kwa Secretary of State wa California?", options: ["LLC", "Biashara ya mtu mmoja", "Shirika (corporation)", "Shirika lisilo la faida"], answer: 1, why: "Biashara za mtu mmoja haziwasilishi fomu za kuanzisha kwa Secretary of State." },
      { objective: "O1", q: "Sababu kuu moja ya wamiliki kuanzisha LLC ni ipi?", options: ["Ni bure kila wakati", "Inachukua nafasi ya vibali vyote", "Inaondoa kodi zote", "Inaweza kusaidia kutenganisha mali binafsi na madeni ya biashara"], answer: 3, why: "LLC ni chombo cha kisheria kinachojitegemea ambacho kinaweza kusaidia kumlinda mmiliki." },
      { objective: "O1", q: "Ada ya Secretary of State kwa Articles of Incorporation za shirika la kawaida la hisa (ARTS-GS) ni:", options: ["$20", "$70", "$100", "$800"], answer: 2, why: "Secretary of State anaorodhesha ARTS-GS kwa $100." },
      { objective: "O1", q: "Unawasilisha fomu za kuanzisha LLC mtandaoni wapi?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "bizfile Online ni tovuti ya Secretary of State ya kuwasilisha fomu." },
      { objective: "O2", q: "DBA ni nini?", options: ["Fomu ya kodi", "Aina ya kibali cha chakula", "Jina ambalo biashara inatumia mbele ya umma, kama si jina la kisheria la mmiliki", "Akaunti ya benki"], answer: 2, why: "DBA maana yake \"doing business as\" (anayefanya biashara kama); inawasilishwa kama Jina la Biashara la Kubuni." },
      { objective: "O2", q: "Baada ya kuwasilisha FBN, kaunti nyingi za California pia zinakutaka:", options: ["Uichapishe katika gazeti la eneo kwa wiki nne", "Ulipe IRS", "Upate kibali cha muuzaji", "Uanzishe LLC"], answer: 0, why: "Kaunti zinataka FBN ichapishwe mara moja kwa wiki kwa wiki nne." },
      { objective: "O2", q: "Unapaswa kutafuta ada ya FBN ya kaunti yako wapi?", options: ["Kwa msaidizi wa AI", "Kwa IRS", "Kwenye tovuti ya county clerk wako", "Kwenye chapisho la mitandao ya kijamii"], answer: 2, why: "Kila kaunti inaweka ada yake ya FBN." },
      { objective: "O3", q: "IRS inatoza kiasi gani kwa EIN?", options: ["Hakuna", "$70", "$50", "$800"], answer: 0, why: "IRS inasema hulazimiki kamwe kulipa ada kwa EIN." },
      { objective: "O3", q: "Ofisi gani inatoa vibali vya muuzaji vya California?", options: ["FTB", "CDTFA", "EDD", "County clerk"], answer: 1, why: "Idara ya Kodi na Ada ya California (CDTFA) inatoa vibali vya muuzaji." },
      { objective: "O3", q: "CDTFA inaweza kuomba nini unapopata kibali cha muuzaji, ingawa hakuna ada?", options: ["Fomu ya shirika", "Nywila ya benki yako", "Tangazo la gazeti", "Amana ya dhamana"], answer: 3, why: "CDTFA inasema inaweza kutaka amana ya dhamana." },
      { objective: "O3", q: "Kibanda cha msimu cha kuuza maboga kinauza mahali pamoja kwa wiki sita. Mmiliki anapaswa kuiuliza CDTFA kuhusu nini?", options: ["Kibali cha muda cha muuzaji", "EIN", "FBN", "Statement of Information"], answer: 0, why: "Mauzo mahali pamoja kwa siku 90 au chini huenda yakahitaji kibali cha muda cha muuzaji." },
      { objective: "O4", q: "Gari la kuuza chakula kwa kawaida linahitaji kibali cha afya kutoka:", options: ["IRS", "EDD", "Secretary of State", "Idara ya afya ya mazingira ya kaunti"], answer: 3, why: "Biashara za chakula zinapata vibali vya afya kutoka idara ya afya ya mazingira ya kaunti." },
      { objective: "O6", q: "CalGold inasema haitoi vibali. Kwa hiyo baada ya kuitumia unapaswa:", options: ["Kupuuza orodha", "Kuilipa CalGold", "Kuwasiliana na kila ofisi iliyoorodheshwa kuthibitisha ada na kuomba", "Kuiomba AI ikuombee"], answer: 2, why: "CalGold inaorodhesha ofisi; unaomba kwa kila moja." },
      { objective: "O4", q: "Biashara ya kufundisha masomo ya ziada nyumbani huenda bado inahitaji:", options: ["Kibali cha muuzaji", "Leseni ya biashara ya jiji au cheti cha kodi", "Kibali cha afya", "Leseni ya pombe"], answer: 1, why: "Majiji mengi yanataka leseni ya biashara, hata kwa biashara za nyumbani." },
      { objective: "O5", q: "Kodi ya kila mwaka ya LLC ya California ni kiasi gani?", options: ["$20", "$70", "$250", "$800"], answer: 3, why: "FTB inasema kila LLC lazima ilipe kodi ya kila mwaka ya $800." },
      { objective: "O5", q: "Kodi ya kwanza ya kila mwaka ya $800 ya LLC inatakiwa lini?", options: ["Ila tu inapopata $250,000", "Kamwe katika mwaka wa kwanza", "Kufikia siku ya 15 ya mwezi wa 4 baada ya kuwasilisha kwa Secretary of State", "Tarehe 31 Desemba"], answer: 2, why: "FTB inatoa siku ya 15 ya mwezi wa 4 baada ya kuwasilisha." },
      { objective: "O5", q: "Shirika jipya katika mwaka wake wa kwanza wa kodi:", options: ["Halilazimiki kulipa kodi ya chini ya franchise ya $800", "Linalipa $1,600", "Halilipi kodi kamwe", "Lazima lilipe ada ya LLC"], answer: 0, why: "FTB inasema mashirika yaliyoanzishwa karibuni hayalazimiki kulipa kiwango cha chini katika mwaka wao wa kwanza wa kodi." },
      { objective: "O5", q: "Baada ya ile ya kwanza, LLC inawasilisha Statement of Information mara ngapi?", options: ["Kila mwezi", "Kila miaka miwili", "Kila miaka kumi", "Kamwe"], answer: 1, why: "Secretary of State anasema kila miaka miwili baada ya ile ya kwanza." },
      { objective: "O6", q: "Kwa kawaida unapaswa kufanya haya kwa mpangilio gani?", options: ["Leseni ya jiji, kisha anzisha LLC, kisha chagua muundo", "Chagua muundo, uanzishe, pata EIN, kisha vibali vya eneo", "Kibali cha muuzaji, kisha EIN, kisha muundo", "Mpangilio wowote ni sawa"], answer: 1, why: "Vibali vingi vinaomba EIN yako na namba ya usajili wa chombo, kwa hiyo anzisha na upate EIN kwanza." },
      { objective: "O6", q: "Msaidizi wa AI anakuambia ada ya FBN katika kaunti yako. Unafanya nini?", options: ["Unaikagua kwanza kwenye ukurasa rasmi wa county clerk wako", "Unaiweka katika mpango bila kukagua", "Unalipa zana ya AI", "Unaandika SSN yako ili kupata jibu bora"], answer: 0, why: "AI inaweza kukosea; ada zinatoka kwenye ukurasa rasmi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 4, 7, 8, 11, 12, 14, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Muundo na jina", objective: "O1", notYet: "Hakuna muundo uliochaguliwa, au usajili wa jina haupo.", meets: "Muundo pamoja na sababu, na usajili sahihi wa jina na ofisi yake.", exceeds: "Pia anataja sheria ya kuchapisha FBN kama inahusika." },
      { name: "EIN na kibali cha muuzaji", objective: "O3", notYet: "Havipo, au anatumia huduma ya kulipia ya EIN.", meets: "EIN kutoka irs.gov bila gharama, na mstari wa kibali cha muuzaji au sababu ya kutokihitaji.", exceeds: "Anataja uwezekano wa amana ya dhamana ya CDTFA." },
      { name: "Vibali vya eneo", objective: "O4", notYet: "Hakuna leseni ya jiji wala vibali vya CalGold vilivyoorodheshwa.", meets: "Leseni ya biashara ya jiji na kila kibali cha CalGold, kila kimoja na tovuti ya ofisi yake.", exceeds: "Kila ada ya eneo imejazwa kutoka ukurasa rasmi." },
      { name: "Gharama za kila mwaka na tarehe za mwisho", objective: "O5", notYet: "Kodi ya $800 au Statement of Information haipo kwa LLC au shirika.", meets: "Mistari ya kila mwaka inayolingana na muundo, pamoja na tarehe za mwisho.", exceeds: "Inajumuisha usajili wa EDD kama ataajiri, na kila namba imekaguliwa kwenye ukurasa rasmi." },
      { name: "Mpango kwa mpangilio pamoja na gharama", objective: "O6", notYet: "Hatua hazina mpangilio, au gharama zimebahatishwa.", meets: "Safu tano zimejazwa kwa mpangilio, gharama zinazojulikana zimejumlishwa na ada zisizojulikana zimeandikwa \"tafuta kwenye\".", exceeds: "Kila tovuti rasmi imeorodheshwa na safu ya Imekamilika inatumika." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaokamilisha angalau usajili au kibali kimoja ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaofungua biashara yao kihalali ndani ya miezi 6",
      "Wanafunzi wanaokutana na mshauri wa SCORE au wa SBDC ndani ya siku 60"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Karatasi, au jedwali la bure (spreadsheet), kwa mpango wa safu tano",
      "Kurasa rasmi zilizoorodheshwa katika kila somo: bizfile Online, irs.gov, CDTFA, CalGold, FTB na EDD",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kabla ya kila kipindi, fungua kurasa rasmi na ukague kama ada za jimbo katika kozi bado ni za sasa.",
      "Tafuta kurasa za county clerk wa eneo lako na za leseni ya biashara ya jiji ili uwaonyeshe wanafunzi tovuti halisi za eneo lao.",
      "Usiwaombe kamwe wanafunzi kuandika namba ya Social Security kwenye skrini ya pamoja; maombi ya EIN yanafanywa tu kwenye irs.gov, kwa faragha.",
      "Kozi hii si ushauri wa kisheria wala wa kodi; mwalike mshauri wa SCORE, mshauri wa SBDC au mtaalamu wa kodi kwa maswali kuhusu hali ya mwanafunzi mwenyewe.",
      "Pima mpango wa kuanzisha biashara kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
