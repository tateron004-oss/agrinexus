"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-clearing-record.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-clearing-record-sw",
  lang: "sw",
  translationOf: "reentry-clearing-record",
  category: "Re-Entry",
  name: "Kusafisha Rekodi Yako ya Uhalifu: Expungement na Nafuu ya Rekodi",
  skills: "Kupata nakala ya rekodi yako, Kuelewa maneno ya nafuu ya rekodi, Kupata msaada wa kisheria wa bure, Kuandaa faili la nafuu ya rekodi, Kutumia haki za kuajiriwa kwa nafasi ya haki",
  outcome: "kupata nakala ya rekodi yako ya uhalifu, kutaja aina za nafuu ya rekodi zinazoweza kufaa kesi zako, kupata msaada wa kisheria wa bure, na kuandaa karatasi unazohitaji kuomba nafuu kwa msaada huo.",
  about: [
    "Rekodi ya uhalifu inaweza kukufuata kwenye mahojiano ya kazi, maombi ya nyumba ya kupanga na shuleni. Katika majimbo mengi ya Marekani, ikiwemo California, sheria inawapa watu njia za kusafisha rekodi au kupunguza watu wanaoweza kuiona. Watu wengi wanaostahili hawaombi kamwe, kwa sababu hakuna aliyewaonyesha jinsi ya kufanya.",
    "Kozi hii inakuonyesha jinsi ya kupata nakala ya rekodi yako, maana ya maneno kama expungement, dismissal (kufutwa kwa hukumu), sealing (kufungiwa kwa rekodi) na certificate of rehabilitation, tofauti kati ya rekodi za serikali kuu (federal) na za jimbo, wapi pa kupata msaada wa kisheria wa bure, jinsi ya kuandaa karatasi zako, na kile Sheria ya Fair Chance ya California inasema kuhusu nafasi za kazi. Mifano inatumia California, na kila somo linakuambia wapi pa kukagua sheria za jimbo lako.",
    "Huu si ushauri wa kisheria. Sheria ni tofauti katika kila jimbo na zinabadilika. Tumia kozi hii kujiandaa, kisha pata msaada kutoka kwa wakili, ofisi ya msaada wa kisheria (legal aid) au kituo cha kujisaidia cha mahakama kabla ya kuwasilisha chochote.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi unayoifanya papo hapo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andaa mpango wa ukurasa mmoja wa nafuu ya rekodi: wapi utapata rekodi yako, kila kesi unayoijua (kaunti, mwaka, shtaka) na aina ya nafuu inayoweza kuifaa, msaada wa kisheria wa bure utakaowasiliana nao kwanza, karatasi utakazokusanya, na maelezo mafupi ya ukweli kuhusu mabadiliko yako ambayo unaweza kumpa mwajiri baada ya kupewa kazi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wenye rekodi ya uhalifu, wengi wakirudi nyumbani kutoka gerezani, ambao rekodi yao inawazuia kupata kazi, makazi au shule. Mifano inatumia California, pamoja na maelekezo ya kukagua sheria katika majimbo mengine.",
    startingPoint: "Wanakumbuka baadhi ya kesi zao. Wengi hawajawahi kuona rekodi yao rasmi, hawajui maneno ya nafuu ya rekodi, na hawajui wapi kuna msaada wa kisheria wa bure.",
    gap: "Watu wengi wanaostahili nafuu ya rekodi hawaombi kamwe kwa sababu hakuna aliyewaonyesha jinsi. Wanafunzi wanahitaji kupata rekodi yao, kutaja nafuu inayoweza kufaa, kupata msaada wa kisheria wa bure na kuandaa karatasi zao, ili wakili au kliniki iwawasilishie maombi na waweze kutetea haki zao wanapotafuta kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja au kompyuta ya maktaba yenye intaneti",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi na miadi",
      "Si ushauri wa kisheria: sheria zinatofautiana kwa kila jimbo na zinabadilika; wanafunzi wanapata msaada kutoka kwa wakili, legal aid au kituo cha kujisaidia cha mahakama kabla ya kuwasilisha",
      "Faragha: maelezo ya kesi hayawekwi kwenye zana za AI wala kwenye kompyuta za pamoja"
    ],
    prerequisites: "Hakuna. Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" inawasaidia wanafunzi ambao ni wapya katika kutafuta tovuti rasmi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia tovuti rasmi ya jimbo lako", action: "kuomba nakala ya rekodi yako ya uhalifu na kujua wapi pa kupata rekodi za serikali kuu (federal) na za mahakama", standard: "ukiandika jina la fomu, ada, msamaha wa ada na mahali karibu pa kuchukua alama za vidole" },
    { id: "O2", condition: "Ukipewa maneno ya nafuu ya rekodi", action: "kueleza tofauti kati ya expungement, sealing, set-aside au dismissal, certificate of rehabilitation na pardon (msamaha)", standard: "kwa sentensi moja rahisi na sahihi kwa kila moja" },
    { id: "O3", condition: "Ukipewa orodha ya kesi zako", action: "kutambua kama kila kesi ni ya serikali kuu au ya jimbo na kukagua kama nafuu ya moja kwa moja inaweza kuhusika", standard: "kila kesi ikiwa na alama yake na mpango wa kukagua rekodi yako mpya" },
    { id: "O4", condition: "Ukitumia vyanzo rasmi na vya mashirika yasiyo ya faida", action: "kupata sehemu mbili za bure zinazosaidia na nafuu ya rekodi na kuandaa maswali kwa simu ya kwanza", standard: "ukiwa na jina, namba ya simu, saa za kazi na maswali matatu kwa kila moja, bila huduma ya kulipia inayoahidi matokeo" },
    { id: "O5", condition: "Ukipewa kesi zako na ushahidi wa maisha yako ya sasa", action: "kuandaa faili la nafuu ya rekodi ambalo wakili au kliniki inaweza kulitumia", standard: "likiwa na kaunti, mwaka na shtaka la kila kesi, na orodha ya ushahidi ambao bado unahitajika" },
    { id: "O6", condition: "Ukitumia Sheria ya Fair Chance ya California", action: "kueleza ni lini mwajiri anaweza kukagua rekodi yako na kuandika maelezo mafupi ya mabadiliko yako", standard: "maelezo yakiwa ya kweli, mafupi na yanayosema ulichofanya tangu wakati huo" }
  ],
  chapters: [
    {
      name: "Sura 1: Ijue rekodi yako na njia ulizonazo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata nakala ya rekodi yako mwenyewe",
          minutes: 5,
          goal: "Omba nakala ya rekodi yako ya uhalifu ya jimbo na ujue wapi pa kupata rekodi zako za serikali kuu na za mahakama.",
          text: [
            "Huwezi kurekebisha usichokiona. Kabla ya kuomba nafuu yoyote ya rekodi, pata nakala ya rekodi yako. Inaonyesha kila kukamatwa na kila kesi, kaunti, tarehe na jinsi kila kesi ilivyoisha. Mara nyingi rekodi zina makosa au matokeo yaliyokosekana.",
            "Huko California, Idara ya Haki (Department of Justice, DOJ) ina huduma inayoitwa Record Review. Ukiishi California, unajaza fomu BCIA 8016RR, unachagua Record Review kama aina ya ombi, na unaipeleka kwenye kituo cha Live Scan ili uchukuliwe alama za vidole. DOJ inatoza ada ya $25 (kuna msamaha wa ada), na kituo cha Live Scan kinatoza ada yake. Ukiishi nje ya California, unatuma kwa posta fomu BCIA 8705 pamoja na kadi ya alama za vidole. Kagua oag.ca.gov kwa fomu na ada ya sasa.",
            "Rekodi yako inaweza kuwa katika sehemu zaidi ya moja. Rekodi ya jimbo inahusu kesi za jimbo. FBI (polisi wa serikali kuu ya Marekani) inaweka rekodi ya kitaifa inayoitwa Identity History Summary; kagua fbi.gov kujua jinsi ya kuiomba na ada ya sasa. Kila mahakama ya kaunti pia inaweka mafaili yake ya kesi, ambayo unaweza kuyaomba kwenye ofisi ya karani.",
            "Ukiona kosa kwenye rekodi yako ya California, DOJ inatuma pamoja na rekodi yako fomu inayoitwa BCIA 8706, Claim of Alleged Inaccuracy or Incompleteness (dai la kosa au upungufu). Unairudisha kwa posta pamoja na ushahidi."
          ],
          steps: ["Chagua rekodi unayohitaji kwanza: kwa kawaida ni rekodi yako ya jimbo.", "Huko California, jaza fomu BCIA 8016RR na uchague Record Review.", "Chukuliwa alama za vidole kwenye kituo cha Live Scan na ulipe ada, au uliza kuhusu msamaha wa ada.", "Rekodi ikifika, orodhesha kila kesi: kaunti, namba ya kesi kama imeonyeshwa, tarehe, shtaka na matokeo.", "Weka alama kwa chochote kinachoonekana si sahihi au kimekosekana, na uweke rekodi kwenye faili salama."],
          words: [["Rekodi ya uhalifu", "orodha rasmi ya kukamatwa kwako na kesi zako mahakamani inayowekwa na jimbo au FBI."], ["Live Scan", "mashine inayochukua alama zako za vidole kidijitali na kuzituma kwa jimbo."], ["Record Review", "huduma ya DOJ ya California inayokuruhusu kuona rekodi yako ya jimbo."], ["Disposition", "jinsi kesi ilivyoisha, kwa mfano ilifutwa, ulitiwa hatiani au uliachiliwa huru."]],
          slides: [
            { title: "Ione rekodi yako kwanza", bullets: ["Huwezi kurekebisha usichokiona", "Mara nyingi rekodi zina makosa au matokeo yaliyokosekana"] },
            { title: "Record Review ya California", bullets: ["Fomu BCIA 8016RR, chagua Record Review", "Alama za vidole kwenye kituo cha Live Scan", "Ada ya DOJ $25, msamaha wa ada upo; kagua oag.ca.gov"] },
            { title: "Sehemu nyingine rekodi yako ilipo", bullets: ["Identity History Summary ya FBI: kagua fbi.gov", "Mafaili ya mahakama ya kaunti: muulize karani"] },
            { title: "Umeona kosa?", bullets: ["California inatuma fomu BCIA 8706 pamoja na rekodi yako", "Irudishe kwa posta pamoja na ushahidi"] }
          ],
          sources: [
            { name: "California DOJ: Record Review (kuomba rekodi yako mwenyewe)", url: "https://oag.ca.gov/fingerprints/record-review" },
            { name: "California DOJ: Kuomba msamaha wa ada", url: "https://oag.ca.gov/fingerprints/record-review/fee-waiver" },
            { name: "FBI: Ukaguzi wa Identity History Summary", url: "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks" }
          ],
          tryIt: "Tafuta ukurasa rasmi ambapo jimbo lako linakuruhusu kuomba rekodi yako mwenyewe (huko California, Record Review kwenye oag.ca.gov). Andika jina la fomu, ada, kama kuna msamaha wa ada, na mahali karibu nawe pa kuchukua alama za vidole.",
          youCanNow: "kuomba nakala ya rekodi yako ya jimbo, kusema wapi rekodi zako za FBI na za mahakama zinawekwa, na kuona makosa ya kupinga.",
          quickCheck: [
            { objective: "O1", q: "Huko California, unahitaji kufanya nini ili kuona rekodi yako ya jimbo?", options: ["Kupiga simu kituo cha polisi", "Kujaza fomu ya Record Review ya DOJ na kuchukuliwa alama za vidole kwenye kituo cha Live Scan", "Kumwomba msaidizi wa AI aitafute", "Kulipa tovuti ya ukaguzi wa historia"], answer: 1, why: "Record Review ya DOJ ya California inatumia fomu na alama za vidole za Live Scan." },
            { objective: "O1", q: "Unapata rekodi yako na unaona kesi ambayo si yako. Utafanya nini?", options: ["Kuipuuza", "Kuiomba AI iifute", "Kusubiri hadi mwajiri aulize", "Kuipinga kwa fomu rasmi ya makosa"], answer: 3, why: "Kupata rekodi yako kunakuwezesha kuona makosa na kuyapinga rasmi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Maana ya maneno ya nafuu ya rekodi",
          minutes: 5,
          goal: "Eleza tofauti kati ya expungement, dismissal, sealing, set-aside, certificate of rehabilitation na pardon.",
          text: [
            "Watu husema expungement kwa karibu kila njia ya kusafisha rekodi, lakini maneno halisi na kazi yake ni tofauti katika kila jimbo. Kujua maneno haya kunakusaidia kuuliza maswali sahihi.",
            "Expungement kwa kawaida inamaanisha rekodi inafutwa au kuharibiwa. Sealing inamaanisha rekodi bado ipo lakini watu wengi, kama waajiri wengi na wenye nyumba, hawawezi kuiona. Set-aside au dismissal inamaanisha mahakama inafungua upya hukumu na kuifuta, kwa hiyo mara nyingi huhitaji tena kusema ulitiwa hatiani. Mahakama za California zinasema expungement halisi haipo California; kile watu wanachokiita expungement huko kwa kawaida ni dismissal.",
            "Certificate of rehabilitation ni amri ya mahakama inayosema umeishi maisha ya kufuata sheria tangu kifungo chako. Katika baadhi ya majimbo inaweza kusaidia kupata leseni au kuwa hatua kuelekea pardon. Pardon ni msamaha kutoka kwa gavana (kwa makosa ya jimbo) au Rais (kwa makosa ya serikali kuu).",
            "Hakuna kati ya hizi inayosafisha rekodi kabisa kwa kila jambo. Baadhi ya kazi za serikali, leseni, sheria za silaha na uhamiaji bado zinaangalia kesi za zamani. Wakili anaweza kukuambia kila njia inakufanyia nini."
          ],
          words: [["Expungement", "kufuta au kuharibu rekodi; mahali pengi neno hili linatumika kwa urahisi kwa usafishaji wowote wa rekodi."], ["Sealing", "rekodi bado ipo lakini watu wengi wa umma hawawezi kuiona."], ["Set-aside au dismissal", "mahakama inafungua upya hukumu na kuifuta."], ["Certificate of rehabilitation", "amri ya mahakama inayosema umeishi maisha ya kufuata sheria tangu kifungo chako."], ["Pardon", "msamaha rasmi kutoka kwa gavana au Rais."]],
          slides: [
            { title: "Lengo moja, maneno tofauti", bullets: ["Kila jimbo linatumia maneno yake", "Kuyajua kunakusaidia kuuliza maswali sahihi"] },
            { title: "Kufuta, kuficha au kutupilia mbali", bullets: ["Expungement: rekodi inafutwa", "Sealing: rekodi inafichwa kwa watu wengi", "Set-aside au dismissal: mahakama inafuta hukumu"] },
            { title: "Aina nyingine za nafuu", bullets: ["Certificate of rehabilitation: mahakama inasema umebadilika", "Pardon: msamaha kutoka kwa gavana au Rais"] },
            { title: "Mipaka", bullets: ["California: expungement halisi haipo", "Baadhi ya kazi, leseni na uhamiaji bado zinaona kesi za zamani", "Muulize wakili kila njia inakufanyia nini"] }
          ],
          sources: [
            { name: "Mwongozo wa Kujisaidia wa Mahakama za California: Kusafisha rekodi yako", url: "https://selfhelp.courts.ca.gov/clean-your-record" }
          ],
          tryIt: "Chora jedwali dogo lenye mistari mitano: expungement, sealing, set-aside au dismissal, certificate of rehabilitation, pardon. Kando ya kila moja, andika sentensi moja rahisi kuhusu kazi yake. Kisha andika swali moja kuhusu kesi yako la kumuuliza wakili.",
          youCanNow: "kueleza aina kuu za nafuu ya rekodi kwa maneno rahisi na kusema kwa nini bado unamuuliza wakili kila moja inakufanyia nini.",
          quickCheck: [
            { objective: "O2", q: "Sealing ya rekodi kwa kawaida inafanya nini?", options: ["Inaweka rekodi lakini inaificha kwa watu wengi", "Inaharibu kila nakala milele", "Inageuza kosa kubwa (felony) kuwa faini ndogo", "Inakupa pardon"], answer: 0, why: "Rekodi iliyofanyiwa sealing bado ipo, lakini watu wengi hawawezi kuiona." },
            { objective: "O2", q: "Huna uhakika ni nafuu ipi inafaa kesi yako. Utafanya nini?", options: ["Kuchagua yenye jina zuri zaidi", "Kuomba zote kwa wakati mmoja", "Kuandika swali lako na kumuuliza wakili au legal aid", "Kumuuliza rafiki aliyekuwa na kesi tofauti"], answer: 2, why: "Wakili au legal aid anaweza kusema ni nafuu ipi inafaa kesi yako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Serikali kuu, jimbo na Clean Slate ya California",
          minutes: 5,
          goal: "Sema kama kila kesi yako ni ya serikali kuu au ya jimbo na ukague kama nafuu ya moja kwa moja ya California tayari inaweza kuhusika.",
          text: [
            "Kila kesi ni ya mfumo uliokushtaki. Kesi ya jimbo ilipitia mahakama ya kaunti na inashughulikiwa kwa sheria za jimbo hilo. Kesi ya serikali kuu (federal) ilipitia Mahakama ya Wilaya ya Marekani (US District Court). Nafuu ya jimbo haiwezi kusafisha hukumu ya serikali kuu, na nafuu ya serikali kuu haisafishi hukumu za jimbo.",
            "Nafuu kwa hukumu za serikali kuu ni ndogo sana. Njia kuu ni pardon ya Rais. Ofisi ya Pardon Attorney ya Idara ya Haki ya Marekani (US Department of Justice) inapokea maombi ya pardon kutoka kwa watu wenye hukumu za serikali kuu waliomaliza kifungo chao.",
            "California ina sheria za Clean Slate. Kila mwezi DOJ ya California inakagua rekodi zake, inaweka alama kwa kukamatwa na hukumu zinazostahili kuwa zimepata nafuu, na inaziambia mahakama. Huhitaji kuwasilisha chochote kwa nafuu hii ya moja kwa moja, na DOJ haikuambii inapotokea. Sheria ya 2022, SB 731, iliongeza makosa makubwa (felonies) mengi zaidi kuanzia 2024.",
            "Nafuu ya moja kwa moja inapunguza watu wanaoweza kuona kesi, lakini haiifuti, haiifungii (seal) wala haiiharibu. Baadhi ya waajiri wanaotumia ukaguzi wa alama za vidole, kama polisi na shule, bado wanaweza kuiona. Ili kujua kama uliipata, omba rekodi yako mwenyewe. Kwa dismissal, sealing au kupunguzwa kwa shtaka, bado unawasilisha ombi mahakamani."
          ],
          steps: ["Kwa kila kesi kwenye rekodi yako, andika mahakama: mahakama ya kaunti ni jimbo, US District Court ni serikali kuu.", "Kwa kesi za serikali kuu, angalia ukurasa wa Ofisi ya Pardon Attorney.", "Huko California, kagua rekodi yako mpya ya DOJ kuona kama kuna maelezo kwamba nafuu ilitolewa.", "Orodhesha kesi ambazo bado zinahitaji ombi (petition) mahakamani."],
          words: [["Kesi ya serikali kuu (federal)", "kesi inayoshtakiwa na serikali kuu ya Marekani na kusikilizwa katika US District Court."], ["Kesi ya jimbo", "kesi inayoshtakiwa kwa sheria ya jimbo na kusikilizwa katika mahakama ya kaunti."], ["Clean Slate", "sheria zinazotoa nafuu ya rekodi ya aina fulani moja kwa moja, bila ombi."], ["Petition", "ombi la maandishi unalowasilisha kuiomba mahakama ifanye jambo."]],
          slides: [
            { title: "Serikali kuu au jimbo?", bullets: ["Mahakama ya kaunti = kesi ya jimbo", "US District Court = kesi ya serikali kuu", "Kila mfumo unasafisha kesi zake tu"] },
            { title: "Hukumu za serikali kuu", bullets: ["Nafuu ni ndogo sana", "Njia kuu: pardon ya Rais", "Ofisi ya Pardon Attorney, justice.gov/pardon"] },
            { title: "Clean Slate ya California", bullets: ["DOJ inakagua rekodi kila mwezi", "Hakuna ombi linalohitajika; DOJ haikuambii", "SB 731 iliongeza felonies zaidi kuanzia 2024"] },
            { title: "Kile nafuu ya moja kwa moja haifanyi", bullets: ["Haifuti, haifungii (seal) wala haiharibu kesi", "Baadhi ya ukaguzi wa alama za vidole bado unaiona", "Dismissal au sealing bado inahitaji ombi mahakamani"] }
          ],
          sources: [
            { name: "California DOJ: Nafuu ya rekodi ya moja kwa moja (Penal Code 851.93 na 1203.425)", url: "https://oag.ca.gov/fingerprints/automatic-record-relief-penal-code-sections-851.93-and-1203.425" },
            { name: "US DOJ Ofisi ya Pardon Attorney: Kuomba msamaha (clemency)", url: "https://www.justice.gov/pardon/apply-clemency" }
          ],
          tryIt: "Ukitumia rekodi yako au unachokumbuka, orodhesha kila kesi na uandike jimbo au serikali kuu kando yake. Ukiishi California, andika kama rekodi yako mpya ya DOJ inaonyesha nafuu ya moja kwa moja kwa kesi yoyote, au panga kuiomba ili ujue.",
          youCanNow: "kugawa kesi zako kuwa za serikali kuu na za jimbo, kueleza kile nafuu ya moja kwa moja ya California inafanya na isichofanya, na kuorodhesha kesi zipi bado zinahitaji ombi.",
          quickCheck: [
            { objective: "O3", q: "Kesi yako ilisikilizwa katika mahakama kuu ya kaunti (county superior court). Ni kesi ya aina gani?", options: ["Kesi ya serikali kuu", "Kesi ya jimbo", "Kesi ya kijeshi", "Kesi ya madai tu"], answer: 1, why: "Mahakama kuu za kaunti zinasikiliza kesi za jimbo." },
            { objective: "O3", q: "Unaishi California na unafikiri nafuu ya moja kwa moja inaweza kuhusu kesi ya zamani. Utafanya nini?", options: ["Kudhani ilisafishwa", "Kuwasilisha ombi la serikali kuu", "Kumwomba mwajiri akague", "Kuomba rekodi yako mpya ya DOJ na kutafuta maelezo ya nafuu"], answer: 3, why: "Rekodi yako mpya ya DOJ inaonyesha kama nafuu ya moja kwa moja ilitolewa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Ijue rekodi yako na njia ulizonazo",
        questions: [
          { objective: "O1", q: "Hatua ipi bora ya kwanza kabla ya kuomba nafuu ya rekodi?", options: ["Kumwambia kila mwajiri huna rekodi", "Kupata nakala ya rekodi yako mwenyewe", "Kulipa tovuti ifute rekodi yako", "Kusubiri mahakama ikupigie simu"], answer: 1, why: "Rekodi yako inaonyesha kila kesi na matokeo yake, kwa hiyo unajua cha kurekebisha na unaweza kuona makosa." },
          { objective: "O1", q: "Huko California, unaonaje rekodi yako ya jimbo?", options: ["Kumwomba rafiki aliye mahakamani", "Kutafuta jina lako kwenye mitandao ya kijamii", "Kupiga 911", "Kujaza fomu ya Record Review ya DOJ na kuchukuliwa alama za vidole kwenye kituo cha Live Scan"], answer: 3, why: "Record Review ya DOJ ya California inatumia fomu BCIA 8016RR na alama za vidole za Live Scan." },
          { objective: "O2", q: "Njia ipi inaweka rekodi lakini inaificha kwa watu wengi?", options: ["Sealing", "Tiketi ya barabarani", "Probation (kipindi cha uangalizi)", "Hati ya kukamatwa"], answer: 0, why: "Sealing inamaanisha rekodi bado ipo lakini watu wengi wa umma hawawezi kuiona." },
          { objective: "O3", q: "Hukumu yako pekee ni kutoka US District Court. Njia ipi inawezekana zaidi?", options: ["Dismissal ya California", "Programu ya Clean Slate ya kaunti", "Pardon ya Rais", "Kubadilisha cheti cha matokeo ya shule"], answer: 2, why: "Kesi ya US District Court ni ya serikali kuu, na nafuu ya jimbo haiwezi kuisafisha; njia kuu ni pardon ya Rais." },
          { objective: "O3", q: "Kipi ni kweli kuhusu nafuu ya rekodi ya moja kwa moja ya California?", options: ["Inafuta kesi kabisa", "Lazima uwasilishe ombi ili kuipata", "DOJ inakupigia simu ikimaliza", "Inapunguza watu wanaoweza kuona kesi lakini haiifuti"], answer: 3, why: "Nafuu ya moja kwa moja inaongeza maelezo yanayozuia kesi kuonyeshwa; kesi haifutwi wala kuharibiwa." }
        ]
      }
    },
    {
      name: "Sura 2: Pata msaada, jiandae na tumia haki zako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata msaada wa kisheria wa bure",
          minutes: 5,
          goal: "Pata sehemu mbili za bure zinazoweza kukusaidia na nafuu ya rekodi na ujiandae kwa simu ya kwanza.",
          text: [
            "Sheria za nafuu ya rekodi ni ngumu, na kosa linaweza kukugharimu miezi. Habari njema: msaada mwingi ni wa bure. Mwongozo wa kujisaidia wa mahakama za California una fomu ya Get started inayouliza maswali machache na kukupa maelekezo kwa hali yako, pamoja na ukurasa wa msaada wa kisheria.",
            "Sehemu ambazo mara nyingi zinasaidia bure ni pamoja na vituo vya kujisaidia vya mahakama, ofisi za legal aid, ofisi za public defender (kaunti kama 19 za California zina programu za kusafisha rekodi), kliniki za vyuo vya sheria, mashirika ya kurudi katika jamii, na kliniki za siku moja za clean slate. Huko California, huduma ya Clear My Record inawaunganisha watu na msaada wa kisheria katika baadhi ya kaunti.",
            "Kama wewe si raia wa Marekani, ongea na wakili wa uhamiaji kabla ya kuwasilisha chochote. Hatua za mahakama zinaweza kuathiri hali yako ya uhamiaji, na baadhi ya nafuu hazihesabiwi kwa mambo ya uhamiaji.",
            "Jihadhari na mtu yeyote anayeahidi kufuta rekodi yako kwa ada kubwa, anayehakikisha matokeo, au anayeomba malipo kabla ya kukuambia atafanya nini. Msaada halisi unakueleza njia zako kwanza."
          ],
          steps: ["Nenda kwenye tovuti ya kujisaidia ya mahakama ya jimbo lako (huko California, selfhelp.courts.ca.gov, Clean your record).", "Tafuta wasaidizi wawili wa bure: kituo cha kujisaidia, legal aid, programu ya public defender au kliniki ya clean slate.", "Andika namba yao ya simu, saa za kazi na wanachokuomba ulete.", "Andaa maswali matatu kabla ya kupiga simu.", "Kama wewe si raia, wasiliana kwanza na wakili wa uhamiaji."],
          words: [["Legal aid", "msaada wa kisheria wa bure kwa watu wenye kipato kidogo."], ["Public defender", "wakili wa serikali kwa watu wasioweza kulipa; wengi pia wana programu za kusafisha rekodi."], ["Kliniki ya clean slate", "tukio ambapo mawakili wa kujitolea wanasaidia watu kujaza karatasi za nafuu ya rekodi, kwa kawaida bure."]],
          slides: [
            { title: "Huhitaji kufanya hivi peke yako", bullets: ["Sheria ni ngumu; makosa yanapoteza muda", "Msaada mwingi ni wa bure"] },
            { title: "Sehemu za bure za kuuliza", bullets: ["Vituo vya kujisaidia vya mahakama na legal aid", "Programu za public defender za kusafisha rekodi", "Kliniki za vyuo vya sheria na kliniki za clean slate"] },
            { title: "Si raia wa Marekani?", bullets: ["Ongea kwanza na wakili wa uhamiaji", "Baadhi ya nafuu hazihesabiwi kwa uhamiaji"] },
            { title: "Dalili za hatari", bullets: ["Ada kubwa ya kufuta rekodi yako", "Matokeo yanayohakikishwa", "Lipa kwanza, maelezo baadaye"] }
          ],
          sources: [
            { name: "Mwongozo wa Kujisaidia wa Mahakama za California: Kusafisha rekodi yako", url: "https://selfhelp.courts.ca.gov/clean-your-record" },
            { name: "Mwongozo wa Kujisaidia wa Mahakama za California: Msaada wa kisheria wa kusafisha rekodi yako", url: "https://selfhelp.courts.ca.gov/clean-your-record/legal-help" }
          ],
          tryIt: "Tafuta wasaidizi wawili wa kisheria wa bure karibu nawe kwa nafuu ya rekodi. Kwa kila mmoja, andika jina, namba ya simu, saa za kazi na cha kuleta. Kisha andika maswali matatu utakayouliza, kama: Kesi zangu zipi zinaweza kusafishwa? Nafuu ya aina gani inafaa? Itachukua muda gani?",
          youCanNow: "kupata msaada wa kisheria wa bure kwa nafuu ya rekodi, kujiandaa kwa simu ya kwanza na kutambua ofa za kulipia zilizo dalili za hatari.",
          quickCheck: [
            { objective: "O4", q: "Ipi ni sehemu ya bure ya kutafuta msaada wa nafuu ya rekodi?", options: ["Tovuti inayohakikisha matokeo kwa ada kubwa", "Kituo cha kujisaidia cha mahakama", "Mgeni kwenye mitandao ya kijamii", "Ofisi ya dhamana (bail bond)"], answer: 1, why: "Vituo vya kujisaidia vya mahakama vinatoa msaada wa bure kwa fomu za mahakama." },
            { objective: "O4", q: "Mtu anaahidi kusafisha rekodi yako kwa uhakika ukilipa $1,000 leo. Utafanya nini?", options: ["Kuondoka na kuwasiliana na msaada wa kisheria wa bure badala yake", "Kulipa nusu sasa", "Kulipa kwa kadi ya zawadi (gift card)", "Kumpa maelezo ya kesi yako aikague"], answer: 0, why: "Ahadi za uhakika na ada kubwa za mapema ni dalili za hatari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujiandaa na kuwasilisha kwa msaada",
          minutes: 6,
          goal: "Andaa faili la nafuu ya rekodi ambalo wakili au kliniki inaweza kulitumia kukuwasilishia ombi.",
          text: [
            "Mawakili na kliniki wanaweza kukusaidia haraka zaidi ukifika ukiwa umejipanga. Andaa faili moja, la karatasi au la kidijitali, lenye kila kitu kuhusu kesi zako.",
            "Weka ndani: nakala ya rekodi yako; orodha ya kila kesi na kaunti, namba ya kesi, mwaka na shtaka; ushahidi kwamba ulimaliza probation, parole au programu; ushahidi wa faini, ada na fidia (restitution) zilizolipwa, au kiasi kinachodaiwa bado; na ushahidi wa maisha yako ya sasa, kama barua za kazi, vyeti, masomo, matibabu, kazi ya kujitolea na barua za kukuunga mkono.",
            "Msaidizi wako atachagua fomu sahihi, atazipeleka kwenye mahakama sahihi na atakuambia kama kuna usikilizwaji (hearing). Mwombe akueleze kila fomu kabla ya kusaini. Weka nakala za kila kitu kinachowasilishwa na uandike kila tarehe.",
            "Mahakama ikikupa nafuu, omba nakala ya amri (order). Baada ya miezi michache, omba rekodi yako tena ili uhakikishe imebadilishwa. Kama haijabadilishwa, wasiliana na msaidizi wako au karani wa mahakama."
          ],
          steps: ["Anzisha faili moja la nafuu ya rekodi yako.", "Ongeza rekodi yako na orodha ya kila kesi: kaunti, namba ya kesi, mwaka, shtaka.", "Ongeza ushahidi wa kumaliza probation, parole na programu, na wa faini zilizolipwa au zinazodaiwa.", "Ongeza ushahidi wa maisha yako ya sasa: kazi, shule, matibabu, kujitolea, barua za kukuunga mkono.", "Peleka faili kwa msaidizi wako; weka nakala za kila kilichowasilishwa na tarehe zote.", "Nafuu ikitolewa, weka amri na ukague rekodi yako tena baadaye."],
          words: [["Namba ya kesi", "namba ambayo mahakama inaipa kila kesi; inasaidia kupata faili haraka."], ["Restitution", "pesa ambazo mahakama inakuamuru umlipe mwathiriwa wa kosa."], ["Hearing", "kikao mahakamani ambapo jaji anasikiliza na kuamua."], ["Order", "uamuzi wa jaji ulioandikwa."]],
          slides: [
            { title: "Fika ukiwa umejipanga", bullets: ["Faili moja, la karatasi au la kidijitali", "Wasaidizi wanafanya kazi haraka karatasi zako zikiwa tayari"] },
            { title: "Kinachowekwa kwenye faili", bullets: ["Rekodi yako na orodha ya kila kesi", "Ushahidi kwamba probation, parole na programu zimekwisha", "Faini na restitution: zimelipwa au bado zinadaiwa"] },
            { title: "Ushahidi wa maisha yako ya sasa", bullets: ["Barua za kazi na hati za mshahara", "Vyeti, masomo, matibabu", "Kazi ya kujitolea na barua za kukuunga mkono"] },
            { title: "Baada ya kuwasilisha", bullets: ["Weka nakala na uandike kila tarehe", "Pata nakala ya amri ya jaji", "Kagua rekodi yako tena baada ya miezi michache"] }
          ],
          tryIt: "Anzisha faili lako la nafuu ya rekodi leo. Andika orodha ya kesi unazozijua (kaunti, mwaka, shtaka) na orodha ya ushahidi ambao bado unahitaji kukusanya. Weka nyota kando ya karatasi mbili za kwanza utakazopata wiki hii.",
          youCanNow: "kuandaa faili la nafuu ya rekodi, kufanya kazi na msaidizi kuwasilisha ombi, na kukagua baadaye kwamba rekodi yako imebadilishwa.",
          quickCheck: [
            { objective: "O5", q: "Namba ya kesi ni nini?", options: ["Namba yako ya Social Security", "Namba yako ya gerezani", "Namba ambayo mahakama inaipa kila kesi", "Namba yako ya simu"], answer: 2, why: "Kila kesi ya mahakama ina namba yake ya kesi." },
            { objective: "O5", q: "Mahakama imekupa nafuu. Utafanya nini baadaye?", options: ["Kutowaza kuhusu hilo tena kamwe", "Kuomba rekodi yako tena ili uhakikishe imebadilishwa", "Kuwaambia waajiri huna rekodi bila kukagua", "Kutupa faili lako"], answer: 1, why: "Kukagua rekodi yako tena kunahakikisha nafuu inaonekana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuajiriwa kwa nafasi ya haki na haki zako",
          minutes: 6,
          goal: "Eleza Sheria ya Fair Chance ya California na uandae maelezo mafupi ya mabadiliko yako kwa mwajiri.",
          text: [
            "Sheria ya Fair Chance ya California inahusu waajiri wa umma na waajiri binafsi wenye wafanyakazi watano au zaidi, pamoja na baadhi ya vighairi, kama kazi ambazo sheria inataka ukaguzi wa historia. Waajiri wengi wanaohusika hawawezi kuuliza kuhusu historia yako ya hukumu kwenye fomu ya maombi, kufanya ukaguzi wa historia, au kuweka matangazo yanayosema No Felons (hatuajiri waliotiwa hatiani kwa makosa makubwa), kabla ya kukupa kazi.",
            "Baada ya kukupa kazi kwa masharti (conditional job offer), wanaweza kufanya ukaguzi, lakini hawawezi kamwe kutumia kukamatwa kusikoleta hukumu (isipokuwa vighairi vichache), hukumu zilizofanyiwa sealing, dismissal au expungement, kesi zilizosafishwa baada ya programu ya diversion, au, mara nyingi, hukumu za zaidi ya miaka saba iliyopita. Hawawezi kukukataa kwa sababu tu una rekodi. Lazima waangalie hali yako na kazi yenyewe.",
            "Wakitaka kuiondoa ofa ya kazi, lazima wakuambie kwa maandishi, wakupe nakala ya ripoti na waorodheshe hukumu, na wakupe angalau siku tano za kazi kujibu kwa ushahidi wa mabadiliko yako, au kuonyesha kosa kwenye ripoti. Ukifikiri mwajiri amevunja sheria, unaweza kuwasiliana na California Civil Rights Department (Idara ya Haki za Kiraia ya California). Majimbo na miji mingine ina sheria zake, mara nyingi zinaitwa ban the box; kagua zako.",
            "Andaa sasa maelezo mafupi ya kweli: kilichotokea kwa sentensi moja, ulichofanya tangu wakati huo, na kwa nini uko tayari kwa kazi hii. Kusanya ushahidi, kama vyeti, programu ulizomaliza, barua za kukuunga mkono na barua ya bonding (dhamana ya mwajiri) kama unayo."
          ],
          steps: ["Kagua kama jimbo au mji wako una sheria ya fair chance au ban the box.", "Andika sentensi moja kuhusu kilichotokea, bila visingizio.", "Andika sentensi mbili au tatu kuhusu ulichofanya tangu wakati huo.", "Malizia kwa nini uko tayari kwa kazi hii.", "Kusanya ushahidi na uuweke pamoja na maelezo yako."],
          words: [["Fair Chance Act", "sheria ya California inayoweka mipaka ya lini na jinsi waajiri wanavyoweza kuangalia historia ya hukumu."], ["Conditional job offer", "ofa ya kazi inayotegemea jambo fulani, kama ukaguzi wa historia."], ["Ban the box", "sheria zinazoondoa swali la rekodi ya uhalifu kwenye fomu za maombi ya kazi."], ["Ushahidi wa mabadiliko (evidence of rehabilitation)", "ushahidi wa jinsi maisha yako yamebadilika, kama programu ulizomaliza na barua za kukuunga mkono."]],
          slides: [
            { title: "Kabla ya ofa ya kazi (California)", bullets: ["Inahusu waajiri wenye wafanyakazi 5 au zaidi", "Hakuna maswali ya hukumu kwenye fomu ya maombi", "Hakuna ukaguzi wa historia kabla ya ofa"] },
            { title: "Baada ya ofa ya kazi kwa masharti", bullets: ["Kukamatwa bila hukumu: hairuhusiwi (vighairi vichache)", "Kesi za sealing, dismissal au expungement: hairuhusiwi", "Hukumu nyingi za zaidi ya miaka 7: hairuhusiwi"] },
            { title: "Wakitaka kuiondoa ofa", bullets: ["Taarifa ya maandishi yenye ripoti na hukumu zimeorodheshwa", "Angalau siku 5 za kazi kwako kujibu", "Maswali: California Civil Rights Department"] },
            { title: "Maelezo yako ya mabadiliko", bullets: ["Sentensi moja: kilichotokea", "Mbili au tatu: ulichofanya tangu wakati huo", "Mwisho: kwa nini uko tayari kwa kazi hii"] }
          ],
          sources: [
            { name: "California Civil Rights Department: Fair Chance Act", url: "https://calcivilrights.ca.gov/fair-chance-act/" },
            { name: "California Civil Rights Department: Karatasi ya taarifa kuhusu Historia ya Uhalifu na Ajira (Juni 2025)", url: "https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2025/07/Fair-Chance-Act-Factsheet_English.pdf" }
          ],
          tryIt: "Kazi ya mwisho: andaa mpango wako wa ukurasa mmoja wa nafuu ya rekodi. Weka wapi utapata rekodi yako, kila kesi na nafuu inayoweza kuifaa, msaada wa kisheria wa bure utakaowasiliana nao kwanza, karatasi utakazokusanya, na maelezo yako mafupi ya mabadiliko kwa waajiri.",
          youCanNow: "kueleza haki zako za kuajiriwa kwa nafasi ya haki huko California, kujua sheria za jimbo lako, na kumjibu mwajiri kuhusu rekodi yako kwa maelezo mafupi ya kweli na ushahidi.",
          quickCheck: [
            { objective: "O6", q: "Chini ya Sheria ya Fair Chance ya California, waajiri wengi wanaohusika wanaweza kufanya ukaguzi wa historia lini?", options: ["Kabla ya mahojiano", "Kwenye fomu ya maombi ya kazi", "Kamwe", "Baada ya ofa ya kazi kwa masharti"], answer: 3, why: "Waajiri wanaohusika wanasubiri hadi baada ya ofa ya kazi kwa masharti ndipo wakague rekodi yako." },
            { objective: "O6", q: "Mwajiri anauliza kuhusu maisha yako ya zamani baada ya kukupa ofa. Utafanya nini?", options: ["Kutoa maelezo mafupi ya kweli kuhusu ulichofanya tangu wakati huo", "Kusimulia hadithi ndefu kuhusu kesi", "Kukataa kusema chochote na kuondoka", "Kusema huna rekodi"], answer: 0, why: "Maelezo mafupi ya kweli ya mabadiliko yako yanaonyesha uko tayari kwa kazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Pata msaada, jiandae na tumia haki zako",
        questions: [
          { objective: "O4", q: "Ipi ni dalili ya hatari mtu anapojitolea kusafisha rekodi yako?", options: ["Anakueleza njia zako kwanza", "Anafanya kazi katika kituo cha kujisaidia cha mahakama", "Anahakikisha matokeo na anataka ada kubwa mapema", "Anakuomba ulete rekodi yako"], answer: 2, why: "Ahadi za uhakika na ada kubwa za mapema ni dalili za ulaghai; msaada halisi unaeleza njia kwanza." },
          { objective: "O4", q: "Wewe si raia wa Marekani na unataka nafuu ya rekodi. Unapaswa kufanya nini kwanza?", options: ["Kuongea na wakili wa uhamiaji", "Kuwasilisha fomu peke yako mara moja", "Kuacha msaada wa kisheria", "Kumwomba rafiki akuwasilishie"], answer: 0, why: "Hatua za mahakama zinaweza kuathiri hali ya uhamiaji, kwa hiyo wakili wa uhamiaji akushauri kwanza." },
          { objective: "O5", q: "Kipi kinafaa kuwekwa kwenye faili lako la nafuu ya rekodi?", options: ["Nywila yako ya benki", "Ushahidi kwamba ulimaliza probation", "Taarifa zako za kuingia kwenye mitandao ya kijamii", "Ukurasa mtupu"], answer: 1, why: "Ushahidi wa kumaliza probation unasaidia kuonyesha unastahili na umefanya ulichoamriwa na mahakama." },
          { objective: "O6", q: "Chini ya Sheria ya Fair Chance ya California, waajiri wengi wanaohusika wanaweza kufanya ukaguzi wa historia lini?", options: ["Kabla hujaomba", "Wakati wa simu ya kwanza", "Kwenye tangazo la kazi", "Baada ya ofa ya kazi kwa masharti"], answer: 3, why: "Waajiri wengi wanaohusika lazima wasubiri hadi baada ya ofa ya kazi kwa masharti." },
          { objective: "O6", q: "Mwajiri anapanga kuiondoa ofa yako kwa sababu ya rekodi yako. Una muda gani kujibu huko California?", options: ["Hakuna muda kabisa", "Saa moja", "Angalau siku tano za kazi", "Mwaka mmoja"], answer: 2, why: "Mwajiri lazima akupe angalau siku tano za kazi kujibu kwa ushahidi au kuonyesha kosa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kusafisha Rekodi Yako ya Uhalifu: Expungement na Nafuu ya Rekodi",
    questions: [
      { objective: "O1", q: "Kwa nini upate nakala ya rekodi yako kwanza?", options: ["Ili uiweke mtandaoni", "Ili uone kila kesi na ugundue makosa", "Kwa sababu waajiri wanataka uionyeshe", "Haina faida"], answer: 1, why: "Rekodi yako inaonyesha kinachohitaji nafuu na inaweza kuwa na makosa ya kurekebisha." },
      { objective: "O1", q: "Huko California, mahali unapokwenda kuchukuliwa alama za vidole kwa Record Review ni:", options: ["Kituo cha Live Scan", "Benki", "Sanduku la posta", "Duka la kuuza magari"], answer: 0, why: "Record Review inatumia alama za vidole za Live Scan zinazochukuliwa kwenye vituo vya Live Scan." },
      { objective: "O1", q: "Unaona kosa kwenye rekodi yako ya DOJ ya California. Fomu ipi inalipinga?", options: ["Fomu ya maombi ya kazi", "FAFSA (fomu ya msaada wa karo)", "BCIA 8706, Claim of Alleged Inaccuracy or Incompleteness", "Fomu ya leseni ya udereva"], answer: 2, why: "DOJ inatuma BCIA 8706 pamoja na rekodi yako ili uweze kupinga makosa." },
      { objective: "O1", q: "Unaweza kuomba wapi rekodi yako ya kitaifa ya FBI?", options: ["Maktaba ya kaunti yako", "Tovuti ya mitandao ya kijamii", "Kwa mwenye nyumba yako", "Kwa FBI, kupitia fbi.gov"], answer: 3, why: "FBI inaweka Identity History Summary ya kitaifa; fbi.gov inaeleza jinsi ya kuiomba." },
      { objective: "O2", q: "Sealing ya rekodi kwa kawaida inamaanisha nini?", options: ["Rekodi bado ipo lakini watu wengi hawawezi kuiona", "Unarudi mahakamani kwa kesi mpya", "Unalipa faini tena", "Kesi inakuwa ndefu zaidi"], answer: 0, why: "Rekodi iliyofanyiwa sealing ipo lakini imefichwa kwa watu wengi wa umma." },
      { objective: "O2", q: "Set-aside au dismissal inamaanisha:", options: ["Unakamatwa tena", "Mahakama inafungua upya hukumu na kuifuta", "Alama zako za vidole zinafutwa", "Lazima uhamie jimbo jingine"], answer: 1, why: "Set-aside au dismissal ni mahakama kufuta hukumu ya zamani." },
      { objective: "O2", q: "Certificate of rehabilitation ni nini?", options: ["Cheti cha kumaliza sekondari", "Kibali cha kuegesha gari", "Amri ya mahakama inayosema umeishi maisha ya kufuata sheria tangu kifungo chako", "Mkataba wa kazi"], answer: 2, why: "Ni tamko rasmi la mahakama kwamba umebadilika." },
      { objective: "O2", q: "Kipi ni kweli kuhusu neno expungement huko California?", options: ["Kila mara inafuta kila rekodi", "Ni FBI pekee inayolitumia", "Ni programu ya serikali kuu", "Mahakama zinasema expungement halisi haipo huko"], answer: 3, why: "Mahakama za California zinasema expungement halisi haipo; nafuu ya kawaida ni dismissal." },
      { objective: "O3", q: "Kesi yako ilisikilizwa katika mahakama kuu ya kaunti. Ni:", options: ["Kesi ya jimbo", "Kesi ya serikali kuu", "Kesi ya kijeshi", "Kesi ya kabila (tribal)"], answer: 0, why: "Mahakama za kaunti zinasikiliza kesi za jimbo." },
      { objective: "O3", q: "Je, dismissal ya jimbo inaweza kusafisha hukumu ya serikali kuu?", options: ["Ndiyo, kila mara", "Ndiyo, ukilipa zaidi", "Hapana, kila mfumo unasafisha kesi zake tu", "Mwishoni mwa wiki tu"], answer: 2, why: "Nafuu ya jimbo haiwezi kusafisha hukumu ya serikali kuu." },
      { objective: "O3", q: "Unapataje nafuu ya moja kwa moja ya Clean Slate ya California?", options: ["Lazima uwasilishe ombi", "DOJ inaitoa kwa kesi zinazostahili bila ombi", "Unapiga 911", "Unamwomba mwajiri wako"], answer: 1, why: "DOJ inakagua rekodi kila mwezi na kutoa nafuu inayostahili moja kwa moja." },
      { objective: "O3", q: "Unawezaje kujua kama ulipata nafuu ya moja kwa moja huko California?", options: ["Kusubiri barua kutoka DOJ", "Kumuuliza jirani", "Kutafuta kwenye habari", "Kuomba rekodi yako ya DOJ na kutafuta maelezo ya nafuu"], answer: 3, why: "DOJ haiwaarifu watu, kwa hiyo unakagua rekodi yako mwenyewe." },
      { objective: "O4", q: "Ipi ni sehemu ya bure ya kutafuta msaada wa nafuu ya rekodi?", options: ["Kituo cha kujisaidia cha mahakama", "Tovuti inayohakikisha matokeo kwa ada kubwa", "Mgeni kwenye mitandao ya kijamii", "Duka la rehani (pawn shop)"], answer: 0, why: "Vituo vya kujisaidia vya mahakama, legal aid na programu za public defender mara nyingi husaidia bure." },
      { objective: "O4", q: "Kabla ya kumpigia simu msaidizi wa kisheria, hatua ya busara ni:", options: ["Kutupa karatasi zako", "Kuandika maswali matatu na kukusanya rekodi yako", "Kubahatisha namba za kesi zako", "Kusaini fomu tupu"], answer: 1, why: "Kujiandaa kunamsaidia msaidizi kufanya kazi haraka na kujibu maswali yako halisi." },
      { objective: "O5", q: "Namba ya kesi ni nini?", options: ["Namba yako ya simu", "Akaunti ya benki", "Namba ambayo mahakama inaipa kila kesi", "Saizi ya kiatu chako"], answer: 2, why: "Namba za kesi zinamsaidia msaidizi au karani kupata faili sahihi la mahakama." },
      { objective: "O5", q: "Baada ya mahakama kukupa nafuu, unapaswa kufanya nini baadaye?", options: ["Kutofanya chochote tena", "Kutupa amri", "Kutomwambia mtu", "Kuomba rekodi yako tena ili uhakikishe imebadilishwa"], answer: 3, why: "Rekodi hazibadilishwi kila mara, kwa hiyo unakagua na kurekebisha tatizo lolote." },
      { objective: "O5", q: "Kipi ni ushahidi mzuri wa maisha yako ya sasa?", options: ["Vyeti vya masomo na barua za kukuunga mkono", "Kitambulisho cha zamani cha jela", "Hundi tupu", "Orodha ya nywila zako"], answer: 0, why: "Vyeti na barua za kukuunga mkono ni ushahidi wa mabadiliko yako." },
      { objective: "O6", q: "Sheria ya Fair Chance ya California inawahusu waajiri gani?", options: ["Serikali ya jimbo tu", "Waajiri wa umma na waajiri binafsi wenye wafanyakazi watano au zaidi", "Waajiri wenye wafanyakazi 500 au zaidi tu", "Migahawa tu"], answer: 1, why: "Sheria inawahusu waajiri wa umma na waajiri binafsi wenye wafanyakazi watano au zaidi, pamoja na baadhi ya vighairi." },
      { objective: "O6", q: "Baada ya ofa ya kazi kwa masharti, mwajiri wa California hawezi KAMWE kutumia kipi?", options: ["Jaribio lako la ujuzi", "Watu wanaokudhamini kikazi (references)", "Hukumu iliyofutwa (dismissed)", "Tarehe yako ya kuanza kazi"], answer: 2, why: "Hukumu zilizofanyiwa sealing, dismissal au expungement haziruhusiwi kutumika." },
      { objective: "O6", q: "Maelezo mazuri ya mabadiliko kwa mwajiri:", options: ["Yanawalaumu wengine wote", "Yana kurasa tatu", "Yanasema kilichotokea kwa sentensi moja, ulichofanya tangu wakati huo, na kwa nini uko tayari", "Yanadanganya kuhusu rekodi"], answer: 2, why: "Maelezo mafupi, ya kweli na yanayolenga mabadiliko na utayari ndiyo bora." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      4,
      7,
      8,
      10,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kupata rekodi",
        objective: "O1",
        notYet: "Hakuna mpango, au anapanga kutumia tovuti binafsi ya ukaguzi wa historia.",
        meets: "Anataja sehemu rasmi ya kuomba rekodi na kituo cha alama za vidole.",
        exceeds: "Pia anaandika ada, msamaha wa ada na wapi pa kupata rekodi ya serikali kuu ikihitajika."
      },
      {
        name: "Kesi na nafuu inayowezekana",
        objective: "O3",
        notYet: "Kesi zimekosekana, au hakuna iliyoandikwa jimbo au serikali kuu.",
        meets: "Kila kesi inayojulikana ina kaunti, mwaka, shtaka, jimbo au serikali kuu, na aina ya nafuu inayowezekana.",
        exceeds: "Anaandika kesi zipi za kukagua kwa nafuu ya moja kwa moja na swali moja kwa wakili."
      },
      {
        name: "Msaada wa kisheria wa bure",
        objective: "O4",
        notYet: "Hakuna msaidizi aliyetajwa, au huduma ya kulipia inayohakikisha matokeo.",
        meets: "Msaidizi wa kisheria wa bure wa kuwasiliana naye kwanza, pamoja na namba ya simu na saa za kazi.",
        exceeds: "Msaidizi wa pili na maswali matatu ya kuuliza pia yameandikwa."
      },
      {
        name: "Karatasi za kukusanya",
        objective: "O5",
        notYet: "Hakuna orodha ya karatasi.",
        meets: "Orodha ya rekodi na ushahidi wa maisha ya sasa wa kukusanya.",
        exceeds: "Karatasi mbili za kwanza za kupata wiki hii zimewekewa nyota."
      },
      {
        name: "Maelezo ya mabadiliko",
        objective: "O6",
        notYet: "Hayapo, ni marefu mno, au si ya kweli.",
        meets: "Maelezo mafupi ya kweli: kilichotokea kwa sentensi moja, alichofanya tangu wakati huo, na kwa nini yuko tayari.",
        exceeds: "Ameyafanyia mazoezi kwa sauti na anataja ushahidi kama vyeti au barua za kumuunga mkono."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba nakala ya rekodi yao ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaowasiliana na msaada wa kisheria wa bure au kuomba nafuu ya rekodi ndani ya siku 90",
      "Wanafunzi wanaoripoti kupata ofa ya kazi au makazi baada ya kutumia maelezo yao ya mabadiliko"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti",
      "Karatasi na kalamu, au faili, kwa mpango na karatasi za nafuu ya rekodi",
      "Mawasiliano ya ofisi ya legal aid au kituo cha kujisaidia cha mahakama kilicho karibu",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kozi hii si ushauri wa kisheria; shirikiana na ofisi ya legal aid au kliniki na uwaalike kwenye kipindi ikiwezekana.",
      "Wanafunzi walio nje ya California watafute kurasa rasmi za jimbo lao; kuwa na viungo hivyo tayari.",
      "Wanafunzi wasieleze maelezo ya kesi zao kwa sauti katika kikundi wala kuyaandika kwenye AI; waache waandae orodha za kesi faraghani.",
      "Waambie wanafunzi ambao si raia wa Marekani waongee na wakili wa uhamiaji kabla ya kutafuta nafuu yoyote ya rekodi.",
      "Pima mpango kwa rubriki, na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
