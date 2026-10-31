"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-tech-skills-beginners.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-tech-skills-beginners-sw",
  lang: "sw",
  translationOf: "underserved-tech-skills-beginners",
  category: "Undeserved Community",
  name: "Ujuzi wa Teknolojia kwa Wanaoanza",
  skills: "Kutumia skrini ya kugusa na kipanya (mouse), Kuingia mtandaoni bure au kwa gharama ndogo, Kutafuta kwenye wavuti na kutambua tovuti za kuaminika, Kutuma barua pepe yenye kiambatisho, Kutengeneza nywila imara, Kuomba AI msaada wa teknolojia",
  outcome: "kutumia simu au kompyuta ya bure ya maktaba kuingia mtandaoni, kutafuta taarifa za kuaminika, kutuma barua pepe yenye picha au faili iliyoambatishwa, na kulinda akaunti yako kwa nywila imara.",
  about: [
    "Kozi hii ni kwa yeyote anayejiona mgeni au mwenye wasiwasi na teknolojia. Watu wengi hawakupata nafasi ya kujifunza, na hilo si tatizo. Tunaanza mwanzo kabisa na kwenda hatua moja ndogo kwa wakati.",
    "Utajizoeza kutumia skrini ya kugusa na kipanya, kupata njia za bure au za gharama ndogo za kuingia mtandaoni, kutafuta kwenye wavuti, kutofautisha tovuti ya kuaminika na ya hatari, kutuma barua pepe yenye kiambatisho, kutengeneza nywila imara na kuomba msaada kwa msaidizi wa AI wa bure unapokwama.",
    "Unaweza kutumia simu yako mwenyewe au kompyuta ya bure kwenye maktaba ya umma au kituo cha jamii. Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Kwenye simu au kompyuta ya maktaba, tafuta saa za kazi za maktaba yako ya umma kwenye tovuti yake rasmi, piga picha ya skrini (screenshot) au picha ya saa hizo, na uitume kwa barua pepe kwa mwanafamilia au rafiki pamoja na ujumbe mfupi wa adabu. Tumia akaunti iliyolindwa kwa nywila imara, na utoke (sign out) kama ulitumia kompyuta ya pamoja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika jamii zisizohudumiwa vya kutosha ambao ni wageni au wana wasiwasi na teknolojia: wazee, watu ambao hawakupata nafasi ya kujifunza, watu wanaorudi baada ya kukaa mbali kwa muda mrefu, na watu wanaozungumza lugha ya pili.",
    startingPoint: "Huenda wana simu ya kawaida ya kupiga simu. Wanatumia kidogo au hawatumii kabisa skrini za kugusa, kipanya, kibodi, utafutaji wa wavuti au barua pepe, na baadhi hawajawahi kufungua akaunti wala kutengeneza nywila.",
    gap: "Kazi, shule, kliniki na huduma za misaada sasa zinatarajia watu waingie mtandaoni, watafute taarifa na watume barua pepe. Wanafunzi wanahitaji ujuzi huu wa kwanza, pamoja na tabia salama za nywila na tovuti, ili wafanye kazi za kila siku bila kutegemea wengine wala kudanganywa na walaghai.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 4 hadi 5)",
      "Vifaa: huenda wana simu ya kawaida tu au kompyuta ya maktaba yenye muda mfupi",
      "Gharama: maeneo ya bure ya kuingia mtandaoni na barua pepe ya bure tu",
      "Faragha: hakuna nywila wala misimbo halisi inayoonyeshwa au kushirikiwa katika mazoezi; toka (sign out) kwenye kompyuta za pamoja",
      "Kasi: hatua moja ndogo kwa wakati, na mazoezi mengi kwa mikono yako mwenyewe"
    ],
    prerequisites: "Hakuna. Hii ni kozi ya kwanza kwa watu wapya katika teknolojia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwenye simu au kompyuta", action: "kugusa, kutelezesha kidole, kubofya, kusogeza ukurasa na kuandika, na kurekebisha kosa la kuandika", standard: "bila msaada" },
    { id: "O2", condition: "Mahali unapoishi", action: "kupata mahali pa bure pa kuingia mtandaoni, kuunganisha simu na Wi-Fi na kuangalia kama unastahili Lifeline", standard: "ukitaja mahali hapo na saa zake za kazi" },
    { id: "O3", condition: "Ukipewa kitu unachohitaji kutafuta", action: "kutafuta kwenye wavuti na kuchagua tokeo la kuaminika", standard: "ukiruka matangazo na kufunga kurasa zenye madirisha ibukizi au zawadi" },
    { id: "O4", condition: "Ukitumia akaunti ya barua pepe ya bure", action: "kutuma barua pepe yenye kichwa, ujumbe mfupi na picha au faili iliyoambatishwa", standard: "ukikagua anwani, ujumbe na kiambatisho kabla ya kutuma" },
    { id: "O5", condition: "Unapofungua au kutumia akaunti", action: "kutengeneza nywila imara na kulinda akaunti zako", standard: "bila kumpa mtu msimbo wowote na ukitoka kwenye kompyuta za pamoja" },
    { id: "O6", condition: "Unapokwama katika kazi ya teknolojia", action: "kuomba msaidizi wa AI wa bure hatua fupi na kueleza unachokiona hatua isipolingana", standard: "bila kuandika nywila, msimbo wala namba yoyote ya binafsi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuzoea teknolojia na kuingia mtandaoni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Skrini za kugusa, kipanya na kibodi",
          minutes: 5,
          goal: "Gusa, telezesha kidole, bofya, sogeza ukurasa na uandike kwenye simu au kompyuta.",
          text: [
            "Kwenye simu au tableti unatumia kidole chako. Gusa mara moja kufungua kitu. Telezesha kidole (swipe) kusogea juu, chini au pembeni. Bonyeza na ushikilie kuona machaguo zaidi.",
            "Kwenye kompyuta unatumia kipanya (mouse) au kibao cha kugusa (touchpad). Kisogeze ili kusogeza mshale kwenye skrini. Bofya kitufe cha kushoto mara moja kuchagua kitu. Bofya mara mbili kufungua baadhi ya faili. Zungusha gurudumu, au telezesha vidole viwili kwenye touchpad, kusogeza ukurasa.",
            "Kibodi inaandika herufi. Kitufe cha Shift kinaandika herufi kubwa. Backspace inafuta herufi iliyo kabla ya kishale. Enter inaanzisha mstari mpya au inatuma utafutaji."
          ],
          steps: ["Simu: gusa app kuifungua, telezesha kidole kusogeza ukurasa, bonyeza kitufe cha nyumbani au telezesha juu kurudi mwanzo.", "Kompyuta: sogeza kipanya, bofya mara moja kuchagua, sogeza ukurasa kwa gurudumu.", "Kibodi: andika jina lako la kwanza, tumia Shift kwa herufi kubwa, tumia Backspace kurekebisha kosa."],
          words: [["Kugusa (tap)", "kugusa skrini mara moja kwa haraka."], ["Kutelezesha (swipe)", "kutelezesha kidole chako juu ya skrini."], ["Kubofya (click)", "kubonyeza kitufe cha kipanya mara moja."], ["Kishale (cursor)", "mstari unaowaka na kuzima unaoonyesha maandishi yako yatatokea wapi."]],
          slides: [
            { title: "Kwenye simu au tableti", bullets: ["Gusa kufungua", "Telezesha kidole kusogea", "Bonyeza na ushikilie kwa machaguo zaidi"] },
            { title: "Kwenye kompyuta", bullets: ["Sogeza kipanya kusogeza mshale", "Bofya mara moja kuchagua", "Sogeza ukurasa kwa gurudumu au vidole viwili"] },
            { title: "Misingi ya kibodi", bullets: ["Shift: herufi kubwa", "Backspace: futa kosa", "Enter: mstari mpya au tafuta"] }
          ],
          tryIt: "Kwenye simu au kompyuta, fungua app au programu yoyote, sogeza ukurasa chini kisha juu, kisha andika jina lako la kwanza kwa herufi kubwa mwanzoni na urekebishe kosa moja kwa Backspace.",
          youCanNow: "kugusa, kutelezesha kidole, kubofya, kusogeza ukurasa na kuandika kwenye simu au kompyuta.",
          quickCheck: [
            { objective: "O1", q: "\"Kutelezesha kidole\" (swipe) kwenye simu kunamaanisha nini?", options: ["Kutelezesha kidole chako juu ya skrini", "Kugusa mara mbili kwa haraka", "Kubonyeza kitufe cha kuwasha", "Kutikisa simu"], answer: 0, why: "Kutelezesha ni kusogeza kidole chako ili kwenda juu, chini au pembeni." },
            { objective: "O1", q: "Unahitaji herufi kubwa mwanzoni mwa jina lako. Unashikilia kitufe gani?", options: ["Enter", "Shift", "Backspace", "Space"], answer: 1, why: "Kitufe cha Shift kinaandika herufi kubwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuingia mtandaoni bure au kwa gharama ndogo",
          minutes: 5,
          goal: "Pata mahali pamoja pa bure pa kuingia mtandaoni na ujue kuhusu punguzo la Lifeline.",
          text: [
            "Maktaba za umma zinatoa kompyuta za bure na Wi-Fi ya bure. Vituo vingi vya jamii, vituo vya ajira na baadhi ya migahawa pia vinatoa. Waulize wafanyakazi jinsi ya kujiandikisha kutumia kompyuta na unaweza kuitumia kwa muda gani.",
            "Lifeline ni programu ya serikali kuu ya Marekani (federal) inayopunguza gharama ya kila mwezi ya simu au intaneti kwa watu wenye kipato kidogo au wanaopata msaada kama SNAP au Medicaid. Punguzo la kawaida ni hadi $9.25 kwa mwezi. Unaomba kupitia getinternet.gov, kisha unawasiliana na kampuni ya simu au intaneti inayoshiriki. Kiasi na sheria vinaweza kubadilika, kwa hiyo angalia lifelinesupport.org kwa taarifa mpya.",
            "Kwenye Wi-Fi ya umma, usifanye mambo ya benki wala usiandike nywila za akaunti muhimu ukiweza kuepuka. Kamwe usiruhusu kompyuta ya pamoja ihifadhi nywila yako."
          ],
          steps: ["Piga simu au tembelea maktaba yako au kituo cha jamii na uulize kuhusu kompyuta za bure na Wi-Fi.", "Kuunganisha simu na Wi-Fi: fungua Settings, gusa Wi-Fi, chagua mtandao na uandike nywila kama ipo.", "Kama pesa ni chache, angalia kama unastahili Lifeline kwenye lifelinesupport.org."],
          words: [["Wi-Fi", "njia isiyo na waya ya kuunganishwa na intaneti."], ["Lifeline", "programu ya serikali kuu ya Marekani inayopunguza bili za simu au intaneti kwa watu wanaostahili."], ["Wi-Fi ya umma", "Wi-Fi ya bure inayotumiwa na watu wengi mahali pa umma."]],
          sources: [{ name: "Lifeline Support (USAC, chini ya usimamizi wa FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Maeneo ya bure ya kuingia mtandaoni", bullets: ["Kompyuta na Wi-Fi za maktaba ya umma", "Vituo vya jamii na vituo vya ajira", "Waulize wafanyakazi jinsi ya kujiandikisha"] },
            { title: "Lifeline inapunguza bili yako", bullets: ["Kwa kipato kidogo au SNAP, Medicaid na mengine", "Punguzo la kawaida hadi $9.25 kwa mwezi", "Omba kwenye getinternet.gov; angalia lifelinesupport.org"] },
            { title: "Usalama kwenye Wi-Fi ya umma", bullets: ["Epuka mambo ya benki kwenye Wi-Fi ya umma", "Usiruhusu kompyuta za pamoja zihifadhi nywila"] }
          ],
          tryIt: "Jua saa za maktaba au kituo cha jamii kilicho karibu nawe za kutumia kompyuta bure. Kama una simu, iunganishe na mtandao wa Wi-Fi kupitia Settings, kisha Wi-Fi.",
          youCanNow: "kupata mahali pa bure pa kuingia mtandaoni, kuunganisha na Wi-Fi na kujua wapi pa kuangalia bili ndogo zaidi ya intaneti.",
          quickCheck: [
            { objective: "O2", q: "Mbali na maktaba, ni wapi pengine mara nyingi unaweza kupata Wi-Fi ya bure?", options: ["Nyumbani tu", "Ndani ya chumba cha kuhifadhia pesa benki", "Vituo vya jamii na vituo vya ajira", "Hakuna mahali pengine"], answer: 2, why: "Vituo vingi vya jamii, vituo vya ajira na baadhi ya migahawa vinatoa Wi-Fi ya bure." },
            { objective: "O2", q: "Uko kwenye Wi-Fi ya bure ya mgahawa. Unapaswa kuepuka kufanya nini?", options: ["Kusoma habari", "Kuangalia hali ya hewa", "Kuangalia ratiba za basi", "Benki ya mtandaoni"], answer: 3, why: "Kwenye Wi-Fi ya umma, epuka mambo ya benki na kuandika nywila muhimu ukiweza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutafuta kwenye wavuti na kutambua tovuti za kuaminika",
          minutes: 5,
          goal: "Tafuta taarifa na uamue kama tovuti inaweza kuaminiwa.",
          text: [
            "Injini ya utafutaji (search engine) kama Google au Bing inakutafutia tovuti. Andika maneno machache muhimu, kama \"saa za maktaba ya Oakland\", kwenye kisanduku cha kutafuta na ubonyeze Enter.",
            "Si kila tokeo linaaminika. Matokeo yenye alama \"Sponsored\" au \"Ad\" ni matangazo ya kulipiwa. Tovuti rasmi za serikali ya Marekani zinaishia na .gov. Tafuta jina halisi la mahali hapo ndani ya anwani ya tovuti.",
            "Kuwa mwangalifu na tovuti zenye madirisha ibukizi (pop-ups) mengi, zinazosema umeshinda zawadi, zinazokuomba upakue kitu, au zinazoomba taarifa zako binafsi. Zifunge na urudi nyuma."
          ],
          steps: ["Fungua kivinjari (browser) na uandike maneno machache muhimu kwenye kisanduku cha kutafuta.", "Ruka matokeo yenye alama Sponsored au Ad.", "Chagua tokeo ambalo anwani yake inalingana na shirika halisi au inaishia na .gov.", "Funga ukurasa wowote wenye madirisha ibukizi, zawadi au maombi ya kupakua."],
          words: [["Injini ya utafutaji", "tovuti inayotafuta tovuti nyingine, kama Google au Bing."], ["Sponsored", "tangazo la kulipiwa linaloonyeshwa katika matokeo ya utafutaji."], ["Dirisha ibukizi (pop-up)", "dirisha linalotokea ghafla juu ya ukurasa."]],
          slides: [
            { title: "Jinsi ya kutafuta", bullets: ["Andika maneno machache muhimu", "Mfano: \"saa za maktaba ya Oakland\"", "Bonyeza Enter"] },
            { title: "Dalili za kuaminika", bullets: ["Haina alama Sponsored au Ad", "Anwani ina jina halisi", "Tovuti za serikali zinaishia na .gov"] },
            { title: "Dalili za hatari", bullets: ["Madirisha ibukizi mengi", "\"Umeshinda zawadi!\"", "Inakuomba upakue kitu au utoe taarifa binafsi"] }
          ],
          tryIt: "Tafuta saa za kazi za maktaba yako ya umma. Chagua tokeo kutoka tovuti ya maktaba yenyewe, si tangazo, na uandike saa hizo.",
          youCanNow: "kutafuta kwenye wavuti na kuchagua tovuti ya kuaminika.",
          quickCheck: [
            { objective: "O3", q: "Ni anwani gani ya tovuti ina uwezekano mkubwa wa kuwa tovuti rasmi ya ofisi ya serikali ya Marekani?", options: ["Inayoishia na .gov", "Yenye madirisha ibukizi mengi", "Yenye alama \"Sponsored\"", "Inayosema umeshinda zawadi"], answer: 0, why: "Tovuti rasmi za serikali ya Marekani kwa kawaida zinaishia na .gov." },
            { objective: "O3", q: "Unatafuta saa za kazi za kliniki yako. Tokeo la kwanza ni tangazo. Unafanya nini?", options: ["Bofya tangazo", "Liruke na uchague tovuti ya kliniki yenyewe", "Pakua kile linachotoa", "Andika nywila yako ndani yake"], answer: 1, why: "Matangazo ni matokeo ya kulipiwa; tovuti ya kliniki yenyewe inaaminika zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuzoea teknolojia na kuingia mtandaoni",
        questions: [
          { objective: "O1", q: "Kwenye simu, unafunguaje app?", options: ["Tikisa simu", "Igusa mara moja", "Bonyeza Backspace", "Zima simu"], answer: 1, why: "Kugusa mara moja kunafungua app." },
          { objective: "O1", q: "Kitufe gani kinafuta herufi iliyo kabla ya kishale?", options: ["Shift", "Enter", "Backspace", "Space"], answer: 2, why: "Backspace inaondoa herufi iliyo kabla ya kishale." },
          { objective: "O2", q: "Kwa kawaida unaweza kutumia kompyuta na Wi-Fi bure wapi?", options: ["Kwenye tangazo ibukizi", "Kwa muuzaji wa magari", "Ndani ya chumba cha kuhifadhia pesa benki", "Kwenye maktaba ya umma"], answer: 3, why: "Maktaba za umma zinatoa kompyuta na Wi-Fi bure." },
          { objective: "O2", q: "Lifeline ni nini?", options: ["Programu ya serikali kuu ya Marekani inayopunguza bili za simu au intaneti kwa watu wanaostahili", "Mchezo wa bure wa simu", "Aina ya virusi", "Injini ya utafutaji"], answer: 0, why: "Lifeline inatoa punguzo la kila mwezi kwa huduma ya simu au intaneti." },
          { objective: "O3", q: "Tokeo la utafutaji lina alama \"Sponsored\". Hiyo inamaanisha nini?", options: ["Ni tovuti ya serikali", "Ni tangazo la kulipiwa", "Daima ndilo jibu bora", "Ni barua pepe yako"], answer: 1, why: "Matokeo ya Sponsored ni matangazo." }
        ]
      }
    },
    {
      name: "Sura 2: Barua pepe, nywila na kupata msaada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutuma barua pepe yenye kiambatisho",
          minutes: 5,
          goal: "Andika na utume barua pepe yenye picha au faili iliyoambatishwa.",
          text: [
            "Barua pepe (email) inakuwezesha kutuma ujumbe na faili kwa mtu yeyote mwenye anwani ya barua pepe. Huduma za bure za barua pepe ni pamoja na Gmail na Outlook.com. Maktaba yako inaweza kukusaidia kufungua akaunti.",
            "Barua pepe ina sehemu nne: To (anwani ya barua pepe ya mtu), Subject (maneno machache yanayosema inahusu nini), ujumbe, na viambatisho (faili au picha unazoongeza). Alama ya pini ya karatasi (paper clip) kwa kawaida inamaanisha kuambatisha.",
            "Kabla ya kubonyeza Send, hakikisha anwani ni sahihi, soma ujumbe wako mara moja, na uhakikishe faili sahihi imeambatishwa."
          ],
          steps: ["Fungua barua pepe yako na uchague Compose au New message.", "Andika anwani ya mtu kwenye To.", "Andika kichwa kifupi kwenye Subject.", "Andika ujumbe mfupi wa adabu.", "Gusa au bofya pini ya karatasi, chagua picha au faili, kisha bonyeza Send."],
          words: [["Anwani ya barua pepe", "anwani kama name@example.com ambapo unapokea barua pepe."], ["Subject (kichwa)", "jina fupi la barua pepe."], ["Kiambatisho", "faili au picha inayotumwa pamoja na barua pepe."]],
          slides: [
            { title: "Sehemu nne za barua pepe", bullets: ["To: anwani yake ya barua pepe", "Subject: maneno machache", "Ujumbe", "Kiambatisho: faili au picha"] },
            { title: "Ambatisha faili", bullets: ["Tafuta alama ya pini ya karatasi", "Chagua picha au faili", "Subiri hadi imalize kuongezwa"] },
            { title: "Kabla ya kubonyeza Send", bullets: ["Anwani ni sahihi?", "Ujumbe unaeleweka?", "Faili sahihi imeambatishwa?"] }
          ],
          tryIt: "Tuma barua pepe kwa rafiki au mwanafamilia yenye kichwa \"Barua pepe ya mazoezi\", ujumbe wa mstari mmoja na picha moja iliyoambatishwa.",
          youCanNow: "kuandika na kutuma barua pepe yenye kiambatisho.",
          quickCheck: [
            { objective: "O4", q: "Katika barua pepe, nini kinaandikwa kwenye mstari wa To?", options: ["Nywila yako", "Kichwa", "Anwani ya barua pepe ya mtu", "Picha"], answer: 2, why: "Mstari wa To una anwani ya barua pepe ya mtu unayemwandikia." },
            { objective: "O4", q: "Umeandika barua pepe yako lakini umesahau picha. Unafanya nini kabla ya kutuma?", options: ["Ituma na utumaini", "Futa barua pepe", "Andika \"picha inakuja\"", "Bofya pini ya karatasi na uambatishe picha"], answer: 3, why: "Alama ya pini ya karatasi inaambatisha picha au faili kabla ya kubonyeza Send." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza nywila imara na kulinda akaunti",
          minutes: 5,
          goal: "Tengeneza nywila imara na ujue jinsi ya kulinda akaunti zako.",
          text: [
            "Nywila imara ni ndefu na ngumu kubahatisha. Njia moja rahisi: unganisha maneno matatu au manne yasiyohusiana pamoja na namba na alama, kama \"Blue-Taco-River-58\". Usitumie jina lako, tarehe yako ya kuzaliwa wala \"password123\".",
            "Tumia nywila tofauti kwa barua pepe yako na kwa akaunti nyingine. Barua pepe yako ndiyo ufunguo wa kubadilisha nywila za akaunti nyingine zote.",
            "Washa uthibitishaji wa hatua mbili (two-step verification) kama akaunti yako inautoa: baada ya nywila yako, unaandika pia msimbo unaotumwa kwenye simu yako. Kamwe usimpe msimbo huo mtu yeyote anayekupigia simu au kukutumia ujumbe, hata akisema anatoka kwenye kampuni hiyo."
          ],
          steps: ["Chagua maneno matatu au manne yasiyohusiana.", "Yaunganishe na uongeze namba na alama.", "Itumie kwa akaunti hii tu.", "Washa uthibitishaji wa hatua mbili katika mipangilio ya usalama ya akaunti yako.", "Kamwe usimpe mtu msimbo unaotumwa kwenye simu yako."],
          words: [["Nywila (password)", "neno au kifungu cha siri kinachokuruhusu wewe peke yako kuingia kwenye akaunti."], ["Uthibitishaji wa hatua mbili", "ukaguzi wa pili, kwa kawaida msimbo unaotumwa kwenye simu yako, baada ya nywila yako."]],
          slides: [
            { title: "Nywila imara", bullets: ["Ndefu: maneno matatu au manne yasiyohusiana", "Ongeza namba na alama", "Mtindo wa mfano: Blue-Taco-River-58"] },
            { title: "Epuka", bullets: ["Jina lako au tarehe yako ya kuzaliwa", "\"password123\"", "Nywila moja kila mahali"] },
            { title: "Uthibitishaji wa hatua mbili", bullets: ["Nywila pamoja na msimbo kwenye simu yako", "Uwashe katika mipangilio ya usalama", "Kamwe usimpe mtu yeyote msimbo huo"] }
          ],
          tryIt: "Buni nywila imara kwa kutumia maneno matatu yasiyohusiana, namba na alama. Usiitumie kama ilivyoandikwa hapa. Andika kidokezo, si nywila yenyewe, mahali salama nyumbani.",
          youCanNow: "kutengeneza nywila imara na kulinda akaunti yako kwa uthibitishaji wa hatua mbili.",
          quickCheck: [
            { objective: "O5", q: "Uthibitishaji wa hatua mbili ni nini?", options: ["Ukaguzi wa pili, kama msimbo kwenye simu yako", "Kuandika nywila yako mara mbili", "Akaunti mbili za barua pepe", "Jina la mtumiaji refu zaidi"], answer: 0, why: "Baada ya nywila yako, unaandika pia msimbo unaotumwa kwenye simu yako." },
            { objective: "O5", q: "Unataka nywila kwa barua pepe yako mpya. Ipi ni bora?", options: ["Tarehe yako ya kuzaliwa", "Maneno matatu yasiyohusiana yaliyounganishwa na namba na alama", "Jina lako la kwanza", "Nywila ile ile ya benki yako"], answer: 1, why: "Maneno marefu yasiyohusiana yenye namba na alama ni magumu kubahatisha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuomba msaidizi wa AI wa bure msaada wa teknolojia",
          minutes: 5,
          goal: "Tumia msaidizi wa AI wa bure kupata msaada wa hatua kwa hatua kwa tatizo la teknolojia.",
          text: [
            "Unapokwama, msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kueleza jinsi ya kufanya kitu, hatua kwa hatua, kwa maneno rahisi. Unaweza kumwandikia au kuongea naye.",
            "Sema una kifaa gani na unataka kufanya nini. Kwa mfano: \"Nina simu ya Android. Ninaambatishaje picha kwenye barua pepe katika Gmail? Nipe hatua fupi.\" Hatua ikiwa hailingani na skrini yako, mwambie unachokiona.",
            "Kamwe usiandike nywila, misimbo, namba za benki au namba yako ya Social Security (namba ya kitambulisho ya Marekani) kwenye AI. Na mfanyakazi wa maktaba pia ni mtu mzuri wa kumuuliza kila wakati."
          ],
          steps: ["Fungua msaidizi wa AI wa bure.", "Sema kifaa chako na unachotaka kufanya.", "Omba hatua fupi na rahisi.", "Hatua ikiwa hailingani, eleza unachokiona kwenye skrini yako."],
          words: [["Msaidizi wa AI", "programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida."], ["Kifaa", "simu, tableti au kompyuta."]],
          slides: [
            { title: "AI inaweza kuwa msaidizi wako wa teknolojia", bullets: ["Inaeleza hatua kwa maneno rahisi", "Unaweza kuandika au kuongea"] },
            { title: "Uliza kwa uwazi", bullets: ["Sema kifaa chako", "Sema unachotaka kufanya", "Omba hatua fupi"] },
            { title: "Kaa salama", bullets: ["Hakuna nywila, misimbo wala namba za benki", "Wafanyakazi wa maktaba wanaweza kusaidia pia"] }
          ],
          tryIt: "Kazi ya mwisho: tafuta saa za kazi za maktaba yako kwenye tovuti yake rasmi, piga picha ya skrini au picha, na uitume kwa barua pepe kwa mtu pamoja na ujumbe wa adabu. Ukikwama, omba msaidizi wa AI hatua. Toka (sign out) kama ulitumia kompyuta ya pamoja.",
          youCanNow: "kuingia mtandaoni, kupata taarifa za kuaminika, kuzituma kwa barua pepe na kupata msaada kwa usalama unapokwama.",
          quickCheck: [
            { objective: "O6", q: "Prompt yako ya kwanza ya msaada wa teknolojia inapaswa kusema mambo gani mawili?", options: ["Nywila yako na barua pepe yako", "Umri wako na anwani yako", "Kifaa chako na unachotaka kufanya", "Benki yako na msimbo wako"], answer: 2, why: "AI inahitaji kifaa chako na lengo lako ili ikupe hatua sahihi." },
            { objective: "O6", q: "AI inasema gusa \"Settings\" lakini huioni. Unafanya nini?", options: ["Kata tamaa", "Washa upya simu", "Iandikie AI nywila yako", "Iambie AI unachokiona kwenye skrini yako"], answer: 3, why: "Kueleza skrini yako kunasaidia AI ikupe hatua zinazolingana." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Barua pepe, nywila na kupata msaada",
        questions: [
          { objective: "O4", q: "Alama ya pini ya karatasi katika barua pepe kwa kawaida inafanya nini?", options: ["Inafuta barua pepe", "Inachapisha barua pepe", "Inaambatisha faili au picha", "Inabadilisha nywila yako"], answer: 2, why: "Pini ya karatasi inaongeza kiambatisho." },
          { objective: "O5", q: "Nywila ipi ni imara zaidi?", options: ["password123", "Tarehe yako ya kuzaliwa", "Jina lako la kwanza", "Maneno matatu yasiyohusiana yenye namba na alama"], answer: 3, why: "Nywila ndefu zisizohusiana ni ngumu kubahatisha." },
          { objective: "O5", q: "Mtu anakupigia simu akisema anatoka kwenye kampuni yako ya barua pepe na anaomba msimbo uliotumwa kwenye simu yako. Wewe:", options: ["Kamwe usiutoe na ukate simu", "Umsomee", "Umtumie kwa ujumbe", "Uuweke mtandaoni"], answer: 0, why: "Msimbo huo unalinda akaunti yako; kampuni halisi haziuombi." },
          { objective: "O5", q: "Kwa nini nywila ya barua pepe yako inapaswa kuwa tofauti na nywila zako nyingine?", options: ["Inaonekana nzuri zaidi", "Barua pepe inaweza kubadilisha nywila za akaunti zako nyingine", "Ni fupi zaidi", "Inatakiwa na sheria"], answer: 1, why: "Mtu akiingia kwenye barua pepe yako, anaweza kubadilisha nywila za akaunti nyingine." },
          { objective: "O6", q: "Ipi ni njia nzuri ya kuomba AI msaada wa teknolojia?", options: ["\"msaada\"", "\"Hii ni nywila yangu, rekebisha\"", "\"Nina simu ya Android. Ninaambatishaje picha katika Gmail? Hatua fupi.\"", "\"simu\""], answer: 2, why: "Inataja kifaa, kazi na jinsi unavyotaka jibu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujuzi wa Teknolojia kwa Wanaoanza",
    questions: [
      { objective: "O1", q: "Kusogea juu na chini kwenye ukurasa wa simu, wewe:", options: ["Unatelezesha kidole", "Unaitikisa", "Unabonyeza Shift", "Unaizima"], answer: 0, why: "Kutelezesha kidole kunasogeza skrini." },
      { objective: "O1", q: "Kwenye kompyuta, kubofya kitufe cha kushoto cha kipanya mara moja:", options: ["Kunaizima", "Kunachagua kitu", "Kunafuta kila kitu", "Kunachapisha ukurasa"], answer: 1, why: "Kubofya mara moja kunachagua kitu." },
      { objective: "O1", q: "Kishale kinaonyesha:", options: ["Saa", "Betri", "Maandishi yako yatatokea wapi", "Nywila yako"], answer: 2, why: "Mstari unaowaka na kuzima unaonyesha maandishi yataingia wapi." },
      { objective: "O2", q: "Kuunganisha simu na Wi-Fi, kwa kawaida unafungua:", options: ["Kamera", "Kikokotoo", "Mchezo", "Settings, kisha Wi-Fi"], answer: 3, why: "Mipangilio ya Wi-Fi iko ndani ya app ya Settings." },
      { objective: "O2", q: "Nani anaweza kuomba Lifeline?", options: ["Watu wenye kipato kidogo au wanaopata msaada kama SNAP au Medicaid", "Biashara tu", "Watu wenye umri zaidi ya miaka 90 tu", "Yeyote anayelipa ada"], answer: 0, why: "Lifeline inategemea kipato au kushiriki katika programu fulani za msaada." },
      { objective: "O2", q: "Unaangalia wapi kiasi na sheria mpya za Lifeline?", options: ["Ujumbe kutoka kwa mtu usiyemjua", "lifelinesupport.org", "Tangazo ibukizi", "Maoni kwenye mitandao ya kijamii"], answer: 1, why: "Lifeline Support ndiyo tovuti rasmi ya programu hiyo." },
      { objective: "O2", q: "Kwenye Wi-Fi ya umma, ni bora kuepuka:", options: ["Kusoma habari", "Kuangalia hali ya hewa", "Benki ya mtandaoni", "Kutafuta saa za maktaba"], answer: 2, why: "Kazi nyeti ni salama zaidi kwenye muunganisho wa binafsi." },
      { objective: "O3", q: "Injini ya utafutaji ni:", options: ["Kipuri cha gari", "App ya barua pepe", "Nywila", "Tovuti inayotafuta tovuti nyingine, kama Google au Bing"], answer: 3, why: "Injini za utafutaji zinakutafutia tovuti." },
      { objective: "O3", q: "Tovuti rasmi za serikali ya Marekani kwa kawaida zinaishia na:", options: [".gov", ".win", ".prize", ".xyz"], answer: 0, why: ".gov ni kwa tovuti za serikali ya Marekani." },
      { objective: "O3", q: "Ukurasa unasema \"Umeshinda zawadi! Pakua sasa!\" Unapaswa:", options: ["Kuipakua", "Kufunga ukurasa na kurudi nyuma", "Kuandika namba yako ya benki", "Kuushiriki na marafiki"], answer: 1, why: "Zawadi na maombi ya kupakua ni dalili za hatari." },
      { objective: "O4", q: "Katika barua pepe, Subject ni:", options: ["Anwani ya mtu", "Kiambatisho", "Maneno machache yanayosema barua pepe inahusu nini", "Nywila yako"], answer: 2, why: "Subject ni jina fupi la barua pepe." },
      { objective: "O4", q: "Kabla ya kubonyeza Send, unapaswa kukagua:", options: ["Hakuna kitu", "Aina ya herufi tu", "Hali ya hewa", "Anwani, ujumbe na kiambatisho"], answer: 3, why: "Ukaguzi wa haraka unazuia makosa." },
      { objective: "O4", q: "Ipi ni huduma ya bure ya barua pepe?", options: ["Gmail", "Mashine ya faksi", "Printa", "Router ya Wi-Fi"], answer: 0, why: "Gmail na Outlook.com ni huduma za bure za barua pepe." },
      { objective: "O5", q: "Nywila ipi ni dhaifu zaidi?", options: ["Blue-Taco-River-58", "password123", "Lamp!Garden!Seven!42", "Moon-Fork-Cactus-19"], answer: 1, why: "\"password123\" ni moja ya nywila zinazobahatishwa zaidi." },
      { objective: "O5", q: "Uthibitishaji wa hatua mbili unamaanisha:", options: ["Kuandika nywila yako mara mbili", "Watu wawili wanatumia akaunti moja", "Ukaguzi wa pili, kama msimbo kwenye simu yako", "Kutembea hatua mbili"], answer: 2, why: "Unaongeza ukaguzi wa pili baada ya nywila yako." },
      { objective: "O5", q: "Ukimaliza kwenye kompyuta ya maktaba, unapaswa:", options: ["Kuacha barua pepe yako wazi", "Kuhifadhi nywila yako", "Kuandika nywila yako kwenye kikaratasi cha kubandika", "Kutoka (sign out) na kufunga kivinjari"], answer: 3, why: "Kutoka kunamzuia mtu anayefuata asiingie kwenye akaunti yako." },
      { objective: "O6", q: "Ni kipi KAMWE usichoandika kwenye msaidizi wa AI?", options: ["Msimbo uliotumwa kwenye simu yako", "\"Ninaambatishaje picha?\"", "\"Nina iPhone\"", "\"Nipe hatua fupi\""], answer: 0, why: "Misimbo na nywila lazima zibaki siri." },
      { objective: "O6", q: "Hatua ya AI hailingani na skrini yako. Unapaswa:", options: ["Kukata tamaa", "Kuiambia unachokiona kwenye skrini yako", "Kuwasha upya intaneti", "Kuandika nywila yako"], answer: 1, why: "Kueleza skrini yako kunaisaidia ikupe hatua sahihi." },
      { objective: "O6", q: "Nani mwingine anaweza kukusaidia na teknolojia bure?", options: ["Tangazo ibukizi", "Mtu usiyemjua anayekutumia ujumbe", "Wafanyakazi wa maktaba", "Mtu anayeomba msimbo wako"], answer: 2, why: "Wafanyakazi wa maktaba huwasaidia watu na kompyuta kila siku." },
      { objective: "O6", q: "Prompt nzuri ya kwanza ya msaada wa teknolojia ina:", options: ["Namba yako ya benki", "Neno moja tu", "Namba yako ya Social Security", "Kifaa chako na unachotaka kufanya"], answer: 3, why: "Hiyo inaipa AI kile inachohitaji ili ikusaidie." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Utafutaji wa kuaminika",
        objective: "O3",
        notYet: "Alitumia tangazo au tovuti ambayo si ya maktaba yenyewe.",
        meets: "Alipata saa za kazi kwenye tovuti rasmi ya maktaba.",
        exceeds: "Anaweza kusema alijuaje kwamba tovuti ni rasmi."
      },
      {
        name: "Picha ya skrini au picha",
        objective: "O1",
        notYet: "Hakuna picha ya skrini wala picha ya saa za kazi.",
        meets: "Picha ya skrini au picha iliyo wazi inayoonyesha saa za kazi.",
        exceeds: "Aliipiga bila msaada."
      },
      {
        name: "Barua pepe imetumwa",
        objective: "O4",
        notYet: "Barua pepe haina kichwa, ujumbe au kiambatisho.",
        meets: "Imetumwa ikiwa na kichwa, ujumbe mfupi wa adabu na picha iliyoambatishwa.",
        exceeds: "Mpokeaji alithibitisha kwamba aliipata na aliweza kuona picha."
      },
      {
        name: "Usalama wa akaunti",
        objective: "O5",
        notYet: "Nywila dhaifu, au hakutoka kwenye kompyuta ya pamoja.",
        meets: "Akaunti ina nywila imara, na alitoka kwenye kompyuta yoyote ya pamoja.",
        exceeds: "Uthibitishaji wa hatua mbili umewashwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotuma barua pepe au kutafuta taarifa wenyewe ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba Lifeline au wanaoanza kutumia kompyuta za bure za maktaba",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja, au kompyuta ya maktaba au ya kituo cha jamii",
      "Akaunti ya barua pepe ya bure (Gmail au Outlook.com); wafanyakazi wa maktaba wanaweza kusaidia kuifungua",
      "Msaidizi wa AI wa bure kwa msaada wa teknolojia",
      "Karatasi na kalamu kwa maelezo na vidokezo vya nywila (si nywila yenyewe)",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Nendeni polepole na waache wanafunzi wafanye kila hatua kwa mikono yao wenyewe; usiwanyang'anye kipanya wala simu.",
      "Wawe na wafanyakazi tayari kuwasaidia wanafunzi kufungua akaunti ya barua pepe kabla ya Somo la 4.",
      "Kamwe usiwaombe wanafunzi waonyeshe au waseme nywila zao wala misimbo yao.",
      "Kabla wanafunzi hawajaondoka, hakikisha kila mmoja ametoka (sign out) kwenye kompyuta za pamoja.",
      "Pima kazi ya mwisho kwa rubriki, na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
