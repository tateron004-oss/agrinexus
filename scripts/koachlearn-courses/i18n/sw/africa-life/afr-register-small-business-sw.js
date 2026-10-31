"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-register-small-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BRS = { name: "Business Registration Service (BRS), Kenya: sajili biashara yako mtandaoni kupitia eCitizen", url: "https://brs.go.ke/" };
const CAC = { name: "Corporate Affairs Commission (CAC), Nigeria: usajili wa kampuni, jina la biashara na wadhamini waliosajiliwa (tovuti icrp.cac.gov.ng)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Office of the Registrar of Companies (ORC), Ghana: majina ya biashara, kampuni, kuhuisha (pamoja na kwa *222#) na ritani za mwaka", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Senegal: wakala wa kukuza uwekezaji na ofisi ya huduma zote za kuanzisha biashara", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Côte d'Ivoire: kituo cha kukuza uwekezaji na ofisi ya huduma zote za kuanzisha biashara", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA: Shirika la Kuoanisha Sheria za Biashara Afrika (nchi wanachama 17)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Morocco: tovuti ya hadhi ya auto-entrepreneur (mjasiriamali binafsi)", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Kenya Revenue Authority (KRA): kuhusu KRA PIN (ipate kwenye iTax)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Nigeria Revenue Service (NRS): mamlaka ya kodi ya serikali kuu ya Nigeria", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Ghana Revenue Authority (GRA): kujisajili kwa TIN au PIN ya Ghana Card; Mpango wa Kodi Uliorekebishwa (Modified Taxation Scheme) kwa biashara ndogo", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Nigeria: msaada kwa biashara ndogo sana, ndogo na za kati (usajili wa bure, SME Digital Academy)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business-sw",
  lang: "sw",
  translationOf: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Kusajili na Kuendesha Biashara Ndogo Afrika",
  skills: "Kuchagua aina ya biashara, Kutafuta ofisi rasmi ya usajili, Kuandaa orodha ya usajili, Kupata namba ya kodi na vibali vya eneo, Kuweka daftari rahisi la pesa, Kupanga kuhuisha na ritani",
  outcome: "kuifanya biashara yako ndogo iwe rasmi na kuiweka katika mpangilio: kuchagua aina sahihi ya biashara, kutafuta ofisi rasmi ya usajili ya nchi yako, kuandaa kila kitu unachohitaji kusajili, kujua namba ya kodi na vibali vinavyokuhusu, kuweka daftari rahisi la pesa, na kupanga kuhuisha na ritani zako za kila mwaka.",
  about: [
    "Biashara nyingi ndogo Afrika zinaendeshwa bila kusajiliwa. Hilo linaweza kufanya kazi kwa muda, lakini usajili unaweza kufungua milango: akaunti ya benki kwa jina la biashara, mikataba na kampuni na serikali, akaunti za masoko ya mtandaoni, mikopo na baadhi ya programu za msaada. Kozi hii ni kwa wafanyabiashara, mafundi, wenye saluni, wapishi wa shughuli, washonaji na yeyote mwenye biashara ya pembeni nchini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco na kote Afrika.",
    "Utachagua aina ya biashara inayokufaa, utatafuta ofisi rasmi ya usajili ya nchi yako na kuepuka mawakala bandia, utaandaa orodha ya usajili, utajua namba ya kodi na vibali vya eneo vinavyokuhusu, utaweka daftari rahisi la pesa, na utatengeneza kalenda ya kuhuisha na ritani za kila mwaka.",
    "Kila somo linachukua kama dakika tano na linamalizika kwa kazi ya \"Jaribu sasa\" kwa biashara yako mwenyewe. Sheria, fomu na ada zinabadilika na zinatofautiana kwa nchi, kwa hiyo kozi inataja ofisi na inakuonyesha jinsi ya kukagua. Haitoi ada wala ushauri wa kisheria; kwa uamuzi mkubwa, uliza ofisi ya usajili, kituo cha msaada wa biashara, au mhasibu au wakili mwenye sifa."
  ],
  finalTask: "Tengeneza orodha ya usajili kwa biashara yako mwenyewe: aina ya biashara uliyochagua na kwa nini, ofisi rasmi ya usajili na tovuti yake, majina matatu ya kuchagua, nyaraka na taarifa unazohitaji, namba ya kodi na vibali vya eneo vinavyokuhusu (na mahali ulipokagua), jinsi utakavyoweka daftari lako la pesa, na kalenda ya mwaka ya kuhuisha na ritani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wenye biashara ndogo na zisizo rasmi kote Afrika: wafanyabiashara wa sokoni, mafundi, washonaji, wasusi, wapishi wa shughuli, mafundi magari, wauzaji wa mtandaoni na vijana wanaoanza, nchini Kenya, Nigeria, Ghana, Afrika Magharibi na Kati inayozungumza Kifaransa, na Afrika Kaskazini.",
    startingPoint: "Wanaendesha biashara kila siku na wanashughulikia pesa taslimu na pesa za simu. Wengi hawajasajili, hawajui ofisi ipi ya kutumia, wanachanganya pesa za biashara na za nyumbani, na wanaweka kumbukumbu chache za maandishi. Baadhi wamewalipa mawakala bandia au wamesikia ushauri unaochanganya.",
    gap: "Bila usajili na kumbukumbu rahisi, biashara nyingi ndogo haziwezi kufungua akaunti ya benki ya biashara, kupata mikataba, kuuza kwenye baadhi ya masoko ya mtandaoni au kuomba msaada. Nyingine zinasajili mara moja kisha zinachelewa kuhuisha au kuwasilisha ritani na kulipa adhabu. Wanafunzi wanahitaji kuchagua aina ya biashara, kusajili kupitia njia rasmi, kujua namba ya kodi na vibali vinavyowahusu, na kuweka kumbukumbu na tarehe zao katika mpangilio.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanazungumza Kiswahili au Kiingereza kama lugha ya pili (kozi inapatikana pia kwa lugha nyingine)",
      "Vifaa: simu ya kawaida, wakati mwingine kompyuta ya cyber café (mgahawa wa intaneti); bando ni ghali",
      "Sheria: aina za biashara, ada, kodi na vibali vinatofautiana kwa nchi na vinabadilika; kozi haitoi ada wala tarehe za mwisho na daima inaelekeza kwa ofisi rasmi",
      "Usalama: mawakala na tovuti bandia za usajili zipo; wanafunzi wanatumia tovuti rasmi tu na hawashiriki nywila wala PIN kamwe",
      "Si ushauri wa kisheria wala wa kodi: wanafunzi wanakagua na ofisi ya usajili, mamlaka ya kodi au mtaalamu mwenye sifa kwa hali yao"
    ],
    prerequisites: "Kuendesha au kupanga biashara ndogo. Kujumlisha na kutoa kwa msingi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukijua ukubwa, wamiliki na hatari za biashara yako", action: "kuchagua aina ya biashara, kama jina la biashara la mmiliki pekee au kampuni ya dhima ndogo, na kuandika kwa nini inafaa", standard: "ukitaja faida moja na wajibu mmoja wa aina uliyochagua" },
    { id: "O2", condition: "Ukijua nchi unayofanyia biashara", action: "kutambua ofisi rasmi ya usajili wa biashara na kufungua tovuti yake rasmi au kufika ofisini kwake", standard: "bila kutumia wakala asiye rasmi wala tovuti inayoiga" },
    { id: "O3", condition: "Kabla ya kuanza usajili", action: "kuandaa orodha ya usajili yenye majina matatu ya kuchagua, taarifa za wamiliki, shughuli ya biashara, anwani na nyaraka", standard: "ili maombi yajazwe kwa kikao kimoja" },
    { id: "O4", condition: "Kwa biashara yako na mji wako", action: "kuorodhesha namba ya kodi, kibali cha biashara cha eneo na kibali chochote cha sekta vinavyokuhusu, na mahali pa kupata kila kimoja", standard: "ofisi rasmi ikiwa imekaguliwa kwa kila kimoja" },
    { id: "O5", condition: "Katika wiki moja ya biashara", action: "kuandika kila mauzo na kila gharama katika daftari rahisi la pesa, likiwa tofauti na pesa za nyumbani", standard: "pesa zilizoingia na zilizotoka wiki hiyo zikihesabika sawa" },
    { id: "O6", condition: "Biashara yako ikishasajiliwa", action: "kuandaa kalenda ya mwaka ya kuhuisha, ritani na tarehe za vibali", standard: "kila tarehe ikiwa imekaguliwa kwenye tovuti rasmi na ukumbusho umewekwa kabla yake" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua na kusajili",
      lessons: [
        {
          title: "Kwa nini usajili, na aina gani ya biashara inakufaa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua aina ya biashara inayofaa biashara yako na uandike kwa nini.",
          text: [
            "Kusajili kunaiambia serikali kwamba biashara yako ipo na kunaipa jina rasmi. Faida zinaweza kuwa akaunti ya benki ya biashara, mikataba na kampuni na serikali, kuuza kwenye baadhi ya masoko ya mtandaoni, kuaminiwa na wateja, na kuomba mikopo na programu za msaada. Wajibu unaweza kuwa kuweka kumbukumbu, kuhuisha, kuwasilisha ritani na kulipa kodi.",
            "Aina za kawaida: mmiliki pekee (mmiliki mmoja, mara nyingi husajiliwa kama jina la biashara); ubia (wamiliki wawili au zaidi wanaogawana faida na madeni); na kampuni ya dhima ndogo (mtu wa kisheria anayejitegemea, kwa hiyo nyumba na akiba za wamiliki zinalindwa zaidi dhidi ya madeni ya biashara, lakini kuna makaratasi mengi zaidi). Majina yanatofautiana kwa nchi: Nigeria na Ghana zinasajili majina ya biashara na kampuni; nchini Kenya, Business Registration Service inashughulikia majina ya biashara na kampuni.",
            "Katika nchi 17 za OHADA, zikiwemo Senegal, Côte d'Ivoire, Cameroon, Mali, Burkina Faso na DR Congo, sheria za biashara ni za pamoja. Mfanyabiashara mdogo anaweza kujisajili kama biashara ya mtu binafsi (entreprise individuelle) au kuanzisha kampuni kama SARL. Nchini Morocco, wauzaji wengi wadogo wanatumia hadhi ya auto-entrepreneur.",
            "Wafanyabiashara wengi wa sokoni na mafundi wanaanza kama mmiliki pekee au jina la biashara. Kampuni inaweza kufaa ukiwa na washirika, mikataba mikubwa zaidi au hatari kubwa zaidi. Kwa uamuzi mkubwa, uliza ofisi ya usajili au mhasibu au wakili mwenye sifa."
          ],
          steps: ["Andika nani anamiliki biashara: wewe peke yako, au pamoja na wengine.", "Andika hatari kubwa zaidi: madeni, majeraha, mikataba mikubwa.", "Linganisha jina la biashara (mmiliki pekee), ubia na kampuni.", "Chagua moja na uandike faida moja na wajibu mmoja."],
          words: [["Mmiliki pekee", "biashara inayomilikiwa na kuendeshwa na mtu mmoja, anayewajibika yeye binafsi kwa madeni yake."], ["Kampuni ya dhima ndogo", "biashara ambayo ni mtu wa kisheria peke yake, kwa hiyo mali binafsi za wamiliki zinalindwa zaidi dhidi ya madeni yake."], ["OHADA", "shirika la nchi 17 za Afrika zinazotumia sheria zilezile za biashara, hasa Afrika Magharibi na Kati."]],
          slides: [
            { title: "Kwa nini usajili?", bullets: ["Akaunti ya benki ya biashara na mikataba", "Masoko ya mtandaoni, mikopo na programu za msaada", "Kuaminiwa na wateja", "Wajibu: kumbukumbu, kuhuisha, ritani, kodi"] },
            { title: "Aina tatu za kawaida", bullets: ["Mmiliki pekee / jina la biashara: mmiliki mmoja", "Ubia: wamiliki wawili au zaidi", "Kampuni ya dhima ndogo: mtu wa kisheria peke yake, makaratasi zaidi"] },
            { title: "Afrika ya Kifaransa na Afrika Kaskazini", bullets: ["Nchi 17 za OHADA zina sheria za biashara za pamoja", "Entreprise individuelle au kampuni kama SARL", "Morocco: hadhi ya auto-entrepreneur"] },
            { title: "Kuchagua", bullets: ["Wafanyabiashara wengi wadogo wanaanza na jina la biashara", "Kampuni: washirika, mikataba mikubwa, hatari kubwa", "Uamuzi mkubwa? Uliza ofisi ya usajili au mtaalamu"] }
          ],
          tryIt: "Andika wamiliki wa biashara yako na hatari yake kubwa zaidi. Kisha chagua aina ya biashara na uandike faida moja na wajibu mmoja wa aina hiyo.",
          youCanNow: "kulinganisha aina za kawaida za biashara na kuchagua inayofaa biashara yako.",
          quickCheck: [
            { objective: "O1", q: "Fatima anauza vitambaa peke yake sokoni Kano. Wafanyabiashara wengi kama yeye wanaanza na aina gani?", options: ["Kampuni kubwa ya umma", "Jina la biashara kama mmiliki pekee", "Wakala wa serikali", "Shirika la hisani"], answer: 1, why: "Mmiliki mmoja mwenye biashara ndogo kwa kawaida anaanza na jina la biashara." },
            { objective: "O1", q: "Ni sababu gani moja kuu ya kuchagua kampuni ya dhima ndogo?", options: ["Haina makaratasi", "Hailipi kodi kamwe", "Inalinda zaidi mali binafsi za wamiliki dhidi ya madeni ya biashara", "Haiwezi kufungua akaunti ya benki"], answer: 2, why: "Kampuni ni mtu wa kisheria anayejitegemea, na hilo linapunguza hatari binafsi ya wamiliki." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Kutafuta ofisi rasmi ya usajili, na kuepuka mawakala bandia",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tafuta ofisi rasmi ya usajili wa biashara ya nchi yako na ufungue tovuti yake rasmi.",
          text: [
            "Kila nchi ina ofisi rasmi inayosajili biashara. Kenya: Business Registration Service (BRS), mtandaoni kupitia eCitizen. Nigeria: Corporate Affairs Commission (CAC). Ghana: Office of the Registrar of Companies (ORC). Senegal: APIX, ofisi ya huduma zote za kuanzisha biashara. Côte d'Ivoire: CEPICI. Nchini Morocco, hadhi ya auto-entrepreneur ina tovuti yake ya kitaifa.",
            "Tumia tovuti au ofisi rasmi tu. Tovuti rasmi za serikali mara nyingi zinamalizika kwa kiishio cha serikali ya nchi, kama .go.ke, .gov.ng au .gov.gh. Tovuti zinazoiga na watu wanaotoa usajili wa \"haraka\" au wa \"bure\" zipo; tovuti ya BRS ya Kenya yenyewe inaonya kuhusu ofa bandia za usajili wa \"bure\".",
            "Unaweza kumlipa wakala aliyeidhinishwa au wakili akusaidie, lakini hakikisha ni wa kweli, omba risiti rasmi, na hakikisha biashara imesajiliwa kwa jina lako. Usimpe mtu yeyote kamwe nywila yako ya eCitizen, CAC au akaunti nyingine, wala msimbo wa mara moja uliotumwa kwenye simu yako.",
            "Tovuti isipofunguka, jaribu tena baadaye au tembelea ofisi ya usajili au kituo cha huduma za serikali. Usimlipe mtu usiyemjua badala yake."
          ],
          steps: ["Andika ofisi ya usajili ya nchi yako kutoka orodha ya somo hili.", "Andika anwani yake wewe mwenyewe; usibonyeze viungo kutoka ujumbe usiojulikana.", "Kagua kiishio cha anwani, kama .go.ke, .gov.ng au .gov.gh.", "Ukitumia wakala, hakikisha ni wa kweli na upate risiti rasmi.", "Usishiriki kamwe nywila yako wala msimbo wa mara moja."],
          words: [["Ofisi ya usajili", "ofisi ya serikali inayoandika na kuhifadhi taarifa za biashara na kampuni."], ["Tovuti inayoiga", "tovuti bandia iliyotengenezwa ifanane na ya rasmi, mara nyingi ili kuchukua pesa zako."], ["Msimbo wa mara moja", "msimbo mfupi unaotumwa kwenye simu yako kuthibitisha ni wewe; usiushiriki kamwe."]],
          slides: [
            { title: "Ofisi rasmi za usajili", bullets: ["Kenya: BRS kupitia eCitizen", "Nigeria: Corporate Affairs Commission (CAC)", "Ghana: Registrar of Companies (ORC)", "Senegal: APIX; Côte d'Ivoire: CEPICI"] },
            { title: "Tumia tovuti rasmi tu", bullets: ["Andika anwani wewe mwenyewe", "Kagua viishio kama .go.ke, .gov.ng, .gov.gh", "Jihadhari na ofa za usajili wa \"haraka\" au wa \"bure\""] },
            { title: "Ukitumia wakala", bullets: ["Hakikisha ni wa kweli", "Pata risiti rasmi", "Biashara lazima iwe kwa jina LAKO"] },
            { title: "Usishiriki kamwe", bullets: ["Nywila ya akaunti yako", "Msimbo wa mara moja uliotumwa kwenye simu yako"] }
          ],
          tryIt: "Tafuta ofisi ya usajili wa biashara ya nchi yako. Andika anwani ya tovuti yake wewe mwenyewe, kagua kiishio, na uandike anwani hiyo na huduma moja inayoorodhesha.",
          youCanNow: "kutafuta ofisi rasmi ya usajili wa biashara ya nchi yako na kutofautisha tovuti halisi na bandia.",
          quickCheck: [
            { objective: "O2", q: "Nchini Nigeria unasajili jina la biashara wapi?", options: ["Corporate Affairs Commission (CAC)", "Kikundi cha WhatsApp", "Benki yoyote", "Kituo cha polisi"], answer: 0, why: "CAC inasajili majina ya biashara, kampuni na wadhamini waliosajiliwa nchini Nigeria." },
            { objective: "O2", q: "Ujumbe unatoa \"usajili wa biashara wa bure kwa saa 1\" kupitia kiungo. Unafanya nini?", options: ["Bonyeza na ulipe haraka", "Tuma nywila yako", "Watumie marafiki", "Puuza kiungo na uandike anwani rasmi ya ofisi ya usajili wewe mwenyewe"], answer: 3, why: "Ofa bandia zinatumia viungo; tovuti rasmi unayoiandika wewe mwenyewe ni salama." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Kuandaa orodha yako ya usajili",
          objectives: ["O3"],
          minutes: 5,
          goal: "Andaa orodha ya usajili ili uweze kuomba kwa kikao kimoja.",
          text: [
            "Fomu za mtandaoni zinaweza kuisha muda, na bando linagharimu pesa. Andaa kila kitu kwanza, kisha uombe kwa kikao kimoja.",
            "Ofisi nyingi za usajili zinaomba vitu vinavyofanana: majina matatu ya biashara yanayowezekana (endapo chaguo lako la kwanza limeshachukuliwa; BRS ya Kenya inaomba machaguo matatu), majina kamili ya wamiliki na taarifa za kitambulisho cha taifa au pasipoti, simu na barua pepe, anwani au mahali pa biashara, maelezo mafupi ya shughuli ya biashara, na wakati mwingine picha ya pasipoti au sahihi. Kampuni inahitaji pia wakurugenzi, wanahisa na kanuni zake. Orodha kamili iko kwenye tovuti ya ofisi ya usajili.",
            "Chagua majina yaliyo wazi, ambayo hayatumiwi tayari na mtu mwingine, na yasiyoiga chapa maarufu. Mfano: Kofi wa Takoradi anaorodhesha \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" na \"Sea Gold Fish Supplies\".",
            "Andika ada inayoonyeshwa kwenye tovuti rasmi wakati unapoomba, na jinsi ya kulipa. Hifadhi kila risiti na cheti cha usajili, kwa karatasi na kama picha mahali salama."
          ],
          steps: ["Andika majina matatu ya kuchagua.", "Orodhesha majina ya wamiliki, taarifa za kitambulisho, simu na barua pepe.", "Andika anwani au mahali na shughuli ya biashara.", "Soma orodha ya ofisi ya usajili yenyewe kwa nyaraka za ziada.", "Andika ada ya sasa na njia ya kulipa kutoka tovuti rasmi.", "Omba kwa kikao kimoja na uhifadhi kila risiti na cheti."],
          words: [["Kutafuta / kuhifadhi jina", "kukagua kwamba jina la biashara halijachukuliwa na kulishikilia kwa ajili yako wakati unasajili."], ["Cheti cha usajili", "karatasi rasmi inayoonyesha kwamba biashara yako imesajiliwa."], ["Mkurugenzi", "mtu anayeongoza kampuni na ana wajibu wa kisheria kwake."]],
          slides: [
            { title: "Andaa kwanza, omba mara moja", bullets: ["Fomu zinaweza kuisha muda", "Bando linagharimu pesa", "Kuwa na kila kitu tayari"] },
            { title: "Kwa kawaida wanaomba", bullets: ["Majina matatu ya kuchagua", "Majina ya wamiliki, kitambulisho, simu na barua pepe", "Anwani na shughuli ya biashara", "Kampuni: wakurugenzi na wanahisa"] },
            { title: "Majina mazuri", bullets: ["Yaliyo wazi na yasiyotumiwa tayari", "Usiige chapa maarufu", "Kagua orodha ya ofisi ya usajili yenyewe"] },
            { title: "Baada ya kuomba", bullets: ["Andika ada kutoka tovuti rasmi", "Hifadhi kila risiti", "Hifadhi cheti, kwa karatasi na picha"] }
          ],
          tryIt: "Andika orodha yako ya usajili: majina matatu ya kuchagua, taarifa za wamiliki (bila kuandika namba yako ya kitambulisho mahali popote pa pamoja), anwani, shughuli ya biashara, nyaraka, na tovuti ya ofisi ya usajili.",
          youCanNow: "kuandaa orodha ya usajili ili uweze kuomba kwa kikao kimoja.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uandae majina matatu ya biashara ya kuchagua?", options: ["Sheria inataka biashara tatu", "Endapo chaguo lako la kwanza limeshachukuliwa", "Kuwachanganya mawakala bandia", "Kulipa kodi kidogo"], answer: 1, why: "Jina lako la kwanza likiwa limechukuliwa, chaguo linalofuata linakuokoa na maombi ya pili." },
            { objective: "O3", q: "Unapata wapi nyaraka kamili zinazohitajika na ofisi yako ya usajili?", options: ["Kumbukumbu za jirani", "Maoni kwenye mitandao ya kijamii", "Tovuti rasmi ya ofisi ya usajili au ofisi yenyewe", "Tangazo la wakala usiyemjua"], answer: 2, why: "Masharti yanabadilika, na ni ofisi ya usajili tu yenye uhakika." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua na kusajili",
        questions: [
          { objective: "O1", q: "Marafiki wawili wanafungua biashara ya upishi wa shughuli pamoja na kugawana faida. Hii inafanana zaidi na aina gani?", options: ["Mmiliki pekee", "Wakala wa serikali", "Ubia au kampuni", "Shirika la hisani"], answer: 2, why: "Wamiliki wawili au zaidi wanaogawana faida ni ubia, au wanaweza kuanzisha kampuni." },
          { objective: "O1", q: "Nchini Senegal na Côte d'Ivoire, sheria za biashara zinatoka:", options: ["Kanuni za kila mji peke yake", "OHADA, inayoshirikiwa na nchi 17", "Soko la mtandaoni unalouzia", "Benki yako"], answer: 1, why: "Sheria za biashara za pamoja za OHADA zinatumika katika nchi wanachama wake." },
          { objective: "O2", q: "Kiishio kipi cha anwani ya tovuti ni ishara ya tovuti ya serikali ya Kenya?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Tovuti za serikali ya Kenya kwa kawaida zinamalizika kwa .go.ke." },
          { objective: "O2", q: "Wakala anajitolea kusajili biashara yako. Lazima ukague nini?", options: ["Kwamba ana ofisi nzuri", "Kwamba ni wa haraka", "Kwamba anapokea pesa taslimu tu", "Kwamba ni wa kweli, anatoa risiti rasmi na anaisajili kwa jina lako"], answer: 3, why: "Wakala wa kweli, risiti rasmi na jina lako mwenyewe kwenye biashara vinakulinda." },
          { objective: "O3", q: "Baada ya kusajili, unapaswa kuhifadhi nini?", options: ["Hakuna kitu", "Ujumbe mfupi tu", "Cheti cha usajili na kila risiti, kwa karatasi na kama picha", "Ahadi ya wakala"], answer: 2, why: "Utahitaji cheti na risiti kwa benki, kuhuisha na mikataba." }
        ]
      }
    },
    {
      name: "Sura 2: Kuiendesha ipasavyo",
      lessons: [
        {
          title: "Namba ya kodi na vibali vya eneo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Orodhesha namba ya kodi na vibali ambavyo biashara yako inahitaji na mahali pa kupata kila kimoja.",
          text: [
            "Kusajili jina mara nyingi ni hatua ya kwanza tu. Biashara nyingi zinahitaji pia namba ya utambulisho wa kodi, kibali cha biashara cha eneo, na, kwa aina fulani za kazi, kibali cha sekta.",
            "Namba ya kodi: nchini Kenya, KRA PIN kutoka Kenya Revenue Authority, unayoipata kwenye iTax; inahitajika kwa usajili wa biashara na shughuli nyingine nyingi. Nchini Nigeria, mamlaka ya kodi ya serikali kuu ni Nigeria Revenue Service (NRS), na kila jimbo lina huduma yake ya mapato ya ndani. Nchini Ghana, Ghana Revenue Authority inatumia TIN yako au PIN ya Ghana Card, na inaorodhesha Mpango wa Kodi Uliorekebishwa (Modified Taxation Scheme) kwa biashara ndogo. Uliza ofisi ya kodi ni kodi ipi ya biashara ndogo inayokuhusu.",
            "Kibali cha eneo: miji na kaunti nyingi zinahitaji kibali cha biashara, kinachohuishwa mara kwa mara. Nchini Kenya kinatoka serikali ya kaunti yako; nchini Nigeria kutoka serikali ya jimbo au serikali ya mtaa; nchini Ghana kutoka baraza la wilaya au manispaa. Vibali vya sekta: wauzaji wa chakula, saluni, kliniki, usafiri na wengine wanaweza kuhitaji cheti cha afya au leseni kutoka chombo cha sekta.",
            "Uliza kwenye ofisi ya serikali ya eneo au kituo cha msaada wa biashara kama SMEDAN nchini Nigeria. Andika kila sharti, ofisi na tarehe uliyokagua. Kitambulisho chako cha taifa au namba ya kodi ni siri: usiviweke mtandaoni wala kuwatumia watu usiowajua."
          ],
          steps: ["Tafuta mamlaka yako ya kodi na uulize biashara ndogo inapataje namba ya kodi.", "Uliza kaunti, jimbo, serikali ya mtaa au baraza lako kuhusu kibali cha biashara.", "Uliza kama aina yako ya kazi inahitaji cheti cha afya au leseni ya sekta.", "Andika kila kimoja, ofisi, na tarehe uliyokagua."],
          words: [["Namba ya utambulisho wa kodi (TIN)", "namba ambayo ofisi ya kodi inakupa ili uwasilishe ritani na kulipa kodi; nchini Kenya ni KRA PIN."], ["Kibali cha biashara", "ruhusa kutoka serikali ya eneo lako ya kuendesha biashara katika eneo hilo."], ["Kibali cha sekta", "leseni kwa aina fulani za kazi, kama chakula, afya au usafiri."]],
          slides: [
            { title: "Baada ya jina: makagua matatu zaidi", bullets: ["Namba ya kodi", "Kibali cha biashara cha eneo", "Kibali cha sekta kwa aina fulani za kazi"] },
            { title: "Namba za kodi", bullets: ["Kenya: KRA PIN kwenye iTax", "Nigeria: Nigeria Revenue Service na huduma ya mapato ya jimbo", "Ghana: GRA, TIN au PIN ya Ghana Card"] },
            { title: "Vibali vya eneo na vya sekta", bullets: ["Kaunti, jimbo, serikali ya mtaa au baraza", "Chakula, saluni, usafiri vinaweza kuhitaji zaidi", "Uliza kituo cha msaada wa biashara"] },
            { title: "Iandike", bullets: ["Kila sharti na ofisi yake", "Tarehe uliyokagua", "Weka siri kitambulisho na namba ya kodi"] }
          ],
          tryIt: "Tengeneza jedwali la mistari mitatu: namba ya kodi, kibali cha eneo, kibali cha sekta. Kwa kila kimoja, andika ofisi, tovuti yake au anwani, na kama kinakuhusu. Kagua angalau kimoja na ofisi husika wiki hii.",
          youCanNow: "kuorodhesha namba ya kodi na vibali ambavyo biashara yako inahitaji na ofisi ya kila kimoja.",
          quickCheck: [
            { objective: "O4", q: "Nchini Kenya, unapataje KRA PIN?", options: ["Kutoka kamati ya soko", "Kwenye iTax, kutoka Kenya Revenue Authority", "Kutoka meneja wa benki yako", "Kutoka wakala wa WhatsApp"], answer: 1, why: "KRA inatoa PIN kupitia mfumo wake wa iTax." },
            { objective: "O4", q: "Grace anafungua kibanda cha chakula Accra. Mbali na usajili, anapaswa kuuliza kuhusu nini?", options: ["Hakuna kingine", "Leseni ya udereva", "Kibali cha biashara na cheti chochote cha chakula au afya", "Pasipoti"], answer: 2, why: "Vibali vya eneo na masharti ya usalama wa chakula mara nyingi yanawahusu wauzaji wa chakula." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "Daftari rahisi la pesa: kutenganisha pesa za biashara",
          objectives: ["O5"],
          minutes: 5,
          goal: "Andika kila mauzo na kila gharama katika daftari rahisi la pesa kwa wiki moja.",
          text: [
            "Kumbukumbu zinaonyesha kama kweli unapata pesa. Zinasaidia pia kwa kodi, mikopo na kuhuisha. Anza kwa urahisi: daftari au ukurasa wa maelezo kwenye simu.",
            "Daftari la pesa lina safu nne: tarehe, kilichotokea, pesa zilizoingia, pesa zilizotoka. Andika kila mauzo na kila gharama siku hiyohiyo, pamoja na pesa za simu. Mwisho wa siku au wiki, jumlisha pesa zilizoingia, jumlisha pesa zilizotoka, na utoe moja kutoka nyingine. Mfano kutoka Douala: Jumatatu, Paul anauza vifuniko 12 vya simu kwa 24,000 XAF na ananunua bidhaa kwa 15,000 XAF; pesa zilizoingia ukitoa pesa zilizotoka ni 9,000 XAF (namba za mfano).",
            "Tenganisha pesa za biashara na pesa za nyumbani. Ukichukua pesa kwa chakula au ada ya shule, iandike kama \"mmiliki alichukua\" ili uione. Laini au akaunti tofauti ya pesa za simu kwa biashara inafanya hili kuwa rahisi. Hifadhi risiti kwenye bahasha au zipige picha."
          ],
          steps: ["Chora safu nne: tarehe, kilichotokea, pesa zilizoingia, pesa zilizotoka.", "Andika kila mauzo na gharama siku hiyohiyo.", "Andika pesa unazochukua kwa nyumbani kama \"mmiliki alichukua\".", "Mwisho wa wiki, jumlisha kila safu na utafute tofauti.", "Hifadhi risiti kwenye bahasha au kama picha."],
          words: [["Daftari la pesa", "kumbukumbu rahisi ya pesa zinazoingia kwenye biashara na zinazotoka."], ["Mmiliki alichukua (drawings)", "pesa ambazo mmiliki anachukua kutoka biashara kwa matumizi yake binafsi."]],
          slides: [
            { title: "Kwa nini uweke kumbukumbu", bullets: ["Kuona kama kweli unapata pesa", "Zinahitajika kwa kodi, mikopo na kuhuisha"] },
            { title: "Safu nne", bullets: ["Tarehe", "Kilichotokea", "Pesa zilizoingia", "Pesa zilizotoka"] },
            { title: "Tenganisha pesa za biashara", bullets: ["Andika matumizi ya nyumbani kama \"mmiliki alichukua\"", "Laini tofauti ya pesa za simu inasaidia", "Hifadhi risiti au picha zake"] }
          ],
          tryIt: "Anza daftari la pesa leo. Andika kila mauzo na kila gharama kwa wiki moja, pamoja na pesa unazochukua kwa nyumbani. Siku ya mwisho, jumlisha kila safu na uandike tofauti.",
          youCanNow: "kuweka daftari rahisi la pesa na kutenganisha pesa za biashara na pesa za nyumbani.",
          quickCheck: [
            { objective: "O5", q: "Safu nne za daftari rahisi la pesa ni zipi?", options: ["Tarehe, kilichotokea, pesa zilizoingia, pesa zilizotoka", "Jina, umri, mji, simu", "Bei, rangi, ukubwa, chapa", "Jumatatu hadi Alhamisi"], answer: 0, why: "Safu hizi nne zinaonyesha kila mwendo wa pesa." },
            { objective: "O5", q: "Unachukua 2,000 NGN kutoka biashara kwa chakula nyumbani. Unaandika nini?", options: ["Hakuna kitu", "Mauzo", "Mteja mpya", "\"Mmiliki alichukua 2,000 NGN\" kwenye pesa zilizotoka"], answer: 3, why: "Kuandika kile mmiliki anachukua kunaweka kumbukumbu kuwa za kweli." }
          ]
        },
        {
          title: "Kubaki umesajiliwa: kuhuisha, ritani na kalenda ya mwaka",
          objectives: ["O6"],
          minutes: 5,
          goal: "Andaa kalenda ya mwaka ya kuhuisha, ritani na tarehe za vibali.",
          text: [
            "Kusajili mara moja si mwisho. Biashara nyingi lazima zihuishe usajili, ziwasilishe ritani za mwaka au ritani za kodi, na zihuishe vibali vya eneo. Kukosa tarehe kunaweza kuleta adhabu au kupoteza usajili.",
            "Mifano: ORC ya Ghana inasema ritani za mwaka zinahitajika kwa kampuni zote zilizosajiliwa, na majina ya biashara yanaweza kuhuishwa mtandaoni, pamoja na kwa kupiga *222#. CAC ya Nigeria inasimamia ritani za mwaka. KRA ya Kenya inatarajia ritani kutoka kwa watu wenye wajibu wa kodi. Vibali vya eneo mara nyingi vinadumu kwa mwaka mmoja. Tarehe kamili na ada zinatofautiana, kwa hiyo kagua kila kimoja kwenye tovuti rasmi au ofisini.",
            "Tengeneza kalenda ya mwaka: andika kila wajibu, ofisi, mwezi unaotakiwa na tarehe uliyokagua. Weka ukumbusho kwenye simu yako mwezi mmoja kabla. Weka daftari lako la pesa likiwa la kisasa, kwa sababu ritani zinatumia namba hizo.",
            "Kama huna uhakika ni nini kinakuhusu, uliza ofisi ya usajili, ofisi ya kodi, kituo cha msaada wa biashara au mhasibu mwenye sifa. Mtu akikupigia simu akisema usajili wako utafutwa leo usipomlipa sasa hivi, kagua na ofisi ya usajili wewe mwenyewe kwanza."
          ],
          steps: ["Orodhesha kila wajibu: kuhuisha, ritani ya mwaka, ritani ya kodi, kuhuisha kibali.", "Kagua kila tarehe na ofisi kwenye tovuti rasmi.", "Ziandike katika kalenda ya miezi 12.", "Weka ukumbusho wa simu mwezi mmoja kabla ya kila tarehe.", "Kagua madai ya malipo ya haraka na ofisi ya usajili wewe mwenyewe."],
          words: [["Ritani ya mwaka", "taarifa ya kila mwaka kwa ofisi ya usajili kwamba biashara yako bado ipo na taarifa zake ni sahihi."], ["Kuhuisha", "kulipa au kuwasilisha tena ili usajili au kibali kiendelee kuwa halali."], ["Adhabu", "faini kwa kuchelewa au kuvunja kanuni."]],
          slides: [
            { title: "Usajili si mwisho", bullets: ["Kuhuisha na ritani za mwaka", "Ritani za kodi", "Kuhuisha vibali vya eneo"] },
            { title: "Mifano", bullets: ["ORC ya Ghana: ritani za mwaka kwa kampuni; huisha majina kwa *222#", "CAC ya Nigeria: ritani za mwaka", "KRA ya Kenya: ritani ukiwa na wajibu wa kodi"] },
            { title: "Kalenda yako ya mwaka", bullets: ["Wajibu, ofisi, mwezi unaotakiwa", "Tarehe uliyokagua", "Ukumbusho wa simu mwezi mmoja kabla"] },
            { title: "Kaa salama", bullets: ["Huna uhakika? Uliza ofisi au mhasibu", "Simu za haraka za \"lipa sasa\": kagua na ofisi ya usajili wewe mwenyewe"] }
          ],
          tryIt: "Kazi ya mwisho: kusanya orodha yako ya usajili yenye aina ya biashara, ofisi ya usajili, majina ya kuchagua, nyaraka, namba ya kodi na vibali, mpango wa daftari la pesa na kalenda ya miezi 12 ya kuhuisha na ritani ukiwa umeweka vikumbusho.",
          youCanNow: "kupanga kuhuisha na ritani zako za kila mwaka ili biashara yako ibaki imesajiliwa na katika hali nzuri.",
          quickCheck: [
            { objective: "O6", q: "Unapaswa kuweka ukumbusho wa kuhuisha lini?", options: ["Baada ya tarehe kupita", "Kamwe", "Kama mwezi mmoja kabla ya tarehe inayotakiwa", "Mtu akikupigia simu tu"], answer: 2, why: "Ukumbusho mwezi mmoja kabla unakupa muda wa kujiandaa na kulipa." },
            { objective: "O6", q: "Mtu anakupigia simu akisema biashara yako itafutwa leo usipomlipa sasa hivi. Unafanya nini?", options: ["Kagua na ofisi ya usajili wewe mwenyewe kabla ya kumlipa mtu yeyote", "Mlipe haraka", "Tuma nywila yako", "Funga biashara"], answer: 0, why: "Madai ya malipo ya haraka ni dalili ya ulaghai; ofisi ya usajili yenyewe inaweza kukuambia hali yako." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuiendesha ipasavyo",
        questions: [
          { objective: "O4", q: "Mbali na kusajili jina, biashara nyingi zinahitaji pia:", options: ["Namba ya kodi na kibali cha biashara cha eneo", "Hakuna kitu kabisa", "Simu mpya", "Akaunti ya soko la mtandaoni"], answer: 0, why: "Namba za kodi na vibali vya eneo ni tofauti na usajili wa jina." },
          { objective: "O4", q: "Nchini Kenya unauliza kuhusu kibali cha biashara wapi?", options: ["Wakala wa pesa za simu", "Serikali ya kaunti yako", "Shule", "Kituo cha redio"], answer: 1, why: "Kaunti za Kenya zinatoa vibali vya biashara kwa eneo lao." },
          { objective: "O5", q: "Kwa nini utenganishe pesa za biashara na pesa za nyumbani?", options: ["Inafurahisha zaidi", "Ili benki ikulipe", "Ili uweze kuona kama biashara kweli inapata pesa", "Ili usilipe kodi"], answer: 2, why: "Kuchanganya pesa kunaficha kama biashara inapata faida." },
          { objective: "O5", q: "Wiki yako inaonyesha pesa zilizoingia 40,000 KES na pesa zilizotoka 31,000 KES. Tofauti ni:", options: ["71,000 KES", "31,000 KES", "40,000 KES", "9,000 KES"], answer: 3, why: "40,000 ukitoa 31,000 ni 9,000." },
          { objective: "O6", q: "Ritani ya mwaka ni nini?", options: ["Taarifa ya kila mwaka kwa ofisi ya usajili kwamba biashara na taarifa zake ni za sasa", "Kurudishiwa pesa na wateja", "Likizo", "Mkopo wa benki"], answer: 0, why: "Ritani za mwaka zinaweka kumbukumbu za ofisi ya usajili kuhusu biashara yako zikiwa za kisasa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kusajili na Kuendesha Biashara Ndogo Afrika",
    questions: [
      { objective: "O1", q: "Ipi ni faida ya kusajili biashara?", options: ["Kutolipa kodi kamwe", "Kufungua akaunti ya benki ya biashara na kupata mikataba", "Hakuna kumbukumbu zinazohitajika", "Hakuna wajibu wowote"], answer: 1, why: "Usajili unafungua akaunti za benki, mikataba na programu, pamoja na wajibu pia." },
      { objective: "O1", q: "Mmiliki pekee ni:", options: ["Biashara inayomilikiwa na mtu mmoja", "Ofisi ya serikali", "Kampuni yenye wanahisa wengi", "Kikundi cha akiba"], answer: 0, why: "Mmiliki mmoja, anayewajibika yeye binafsi kwa biashara." },
      { objective: "O1", q: "Wauzaji wengi wadogo nchini Morocco wanatumia:", options: ["Kampuni ya umma", "SARL ya OHADA tu", "Hadhi ya auto-entrepreneur", "Kutosajili kamwe"], answer: 2, why: "Morocco ina hadhi ya auto-entrepreneur kwa shughuli ndogo." },
      { objective: "O1", q: "Unapaswa kumuuliza nani kabla ya uamuzi mkubwa kuhusu aina ya biashara yako?", options: ["Mtu usiyemjua mtandaoni", "Hakuna mtu", "Muuzaji sokoni", "Ofisi ya usajili au mhasibu au wakili mwenye sifa"], answer: 3, why: "Ofisi ya usajili au mtaalamu anaweza kukushauri kuhusu hali yako mwenyewe." },
      { objective: "O2", q: "Nchini Ghana, majina ya biashara yanasajiliwa na:", options: ["Office of the Registrar of Companies (ORC)", "Ghana Revenue Authority peke yake", "Wakala wa pesa za simu", "Kanisa"], answer: 0, why: "ORC inasajili majina ya biashara na kampuni nchini Ghana." },
      { objective: "O2", q: "Nchini Kenya, unasajili biashara mtandaoni kupitia:", options: ["Ukurasa wa Facebook", "eCitizen, pamoja na Business Registration Service", "Kikundi binafsi cha WhatsApp", "App ya benki yako"], answer: 1, why: "Usajili wa BRS unafanywa mtandaoni kupitia eCitizen." },
      { objective: "O2", q: "Ipi ni njia salama zaidi ya kufikia tovuti ya ofisi ya usajili?", options: ["Bonyeza kiungo katika ujumbe usiojulikana", "Tumia tangazo linalojitokeza ghafla", "Andika anwani rasmi wewe mwenyewe na ukague kiishio", "Mwombe mtu usiyemjua akufanyie kwa nywila yako"], answer: 2, why: "Kuandika anwani wewe mwenyewe kunakuepusha na tovuti zinazoiga." },
      { objective: "O3", q: "Kabla ya kuanza usajili wa mtandaoni, unapaswa:", options: ["Kuandaa majina, taarifa na nyaraka zote kwanza", "Kuanza na kutumaini mazuri", "Kumpa wakala nywila yako", "Kumlipa mtu usiyemjua"], answer: 0, why: "Kuwa tayari kunakuwezesha kumaliza kwa kikao kimoja na kuokoa bando." },
      { objective: "O3", q: "Jina zuri la biashara ni:", options: ["Nakala ya chapa maarufu", "Lililo wazi na lisilotumiwa tayari na biashara nyingine", "Refu sana na gumu kuandika", "Sawa na la jirani yako"], answer: 1, why: "Jina lililo wazi na lisilotumiwa lina nafasi kubwa zaidi ya kukubaliwa." },
      { objective: "O3", q: "Unapata ada ya sasa ya usajili wapi?", options: ["Bango la zamani", "Uvumi", "Kukisia kwako", "Tovuti rasmi ya ofisi ya usajili au ofisi yenyewe"], answer: 3, why: "Ada zinabadilika, kwa hiyo chanzo rasmi ndicho pekee chenye uhakika." },
      { objective: "O4", q: "KRA PIN ni:", options: ["PIN ya pesa za simu", "Nywila ya kushiriki na wengine", "Namba ya utambulisho wa kodi ya Kenya", "Kibali cha biashara"], answer: 2, why: "KRA PIN ni namba yako ya kodi kwa Kenya Revenue Authority." },
      { objective: "O4", q: "Mamlaka ya kodi ya serikali kuu ya Nigeria ni:", options: ["Nigeria Revenue Service (NRS)", "Corporate Affairs Commission", "SMEDAN", "Chama cha soko cha eneo lako"], answer: 0, why: "NRS ni mamlaka ya kodi ya serikali kuu ya Nigeria; majimbo yana huduma zao za mapato." },
      { objective: "O4", q: "Saluni au kibanda cha chakula kinaweza pia kuhitaji:", options: ["Leseni ya rubani", "Hakuna kingine", "Shahada ya chuo kikuu", "Cheti cha afya au leseni ya sekta"], answer: 3, why: "Baadhi ya aina za kazi zinahitaji vibali vya sekta kwa ajili ya afya na usalama." },
      { objective: "O5", q: "Daftari la pesa linaandika:", options: ["Siku za kuzaliwa za wateja", "Pesa zilizoingia na zilizotoka, pamoja na tarehe", "Mauzo makubwa tu", "Mikopo ya benki tu"], answer: 1, why: "Linaandika kila mwendo wa pesa, pamoja na tarehe na kilichotokea." },
      { objective: "O5", q: "Unapaswa kuandika mauzo katika daftari la pesa lini?", options: ["Mara moja kwa mwaka", "Unapokumbuka tu", "Siku hiyohiyo", "Kamwe kwa pesa za simu"], answer: 2, why: "Kuandika siku hiyohiyo kunaweka kumbukumbu kamili na za kweli." },
      { objective: "O5", q: "Pesa unazochukua kutoka biashara kwa ada ya shule zinaandikwa kama:", options: ["\"Mmiliki alichukua\" kwenye pesa zilizotoka", "Mauzo", "Hakuna kitu", "Zawadi kutoka kwa mteja"], answer: 0, why: "Kuandika kile mmiliki anachukua kunaweka pesa za biashara na za nyumbani wazi." },
      { objective: "O6", q: "ORC ya Ghana inaruhusu majina ya biashara kuhuishwa:", options: ["Ana kwa ana nje ya nchi tu", "Kamwe", "Mtandaoni, pamoja na kwa kupiga *222#", "Kupitia wakala wa WhatsApp"], answer: 2, why: "ORC inasema kuhuisha kunaweza kufanywa mtandaoni na kwa *222#." },
      { objective: "O6", q: "Kalenda ya mwaka ya wajibu inaorodhesha:", options: ["Sikukuu tu", "Anwani za wateja", "Mechi za mpira", "Kila kuhuisha, ritani na kibali, ofisi yake na mwezi unaotakiwa"], answer: 3, why: "Kalenda moja inaweka kila wajibu na tarehe mbele ya macho yako." },
      { objective: "O6", q: "Kukosa kuhuisha au ritani ya mwaka kunaweza kusababisha:", options: ["Zawadi ya bure", "Adhabu au kupoteza usajili", "Bei za chini", "Hakuna kitu kamwe"], answer: 1, why: "Kuchelewa kuwasilisha kunaweza kuleta faini au kuondolewa kwenye daftari la usajili." },
      { objective: "O6", q: "Kabla ya kila tarehe inayotakiwa unapaswa:", options: ["Kukagua tarehe kwenye tovuti rasmi na kuweka ukumbusho", "Kusubiri mtu akupigie simu kukukumbusha", "Kumlipa yeyote anayeomba", "Kupuuza"], answer: 0, why: "Kukagua rasmi na kuweka ukumbusho kunakuweka kwa wakati na salama dhidi ya ulaghai." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Aina ya biashara", objective: "O1", notYet: "Hakuna aina iliyochaguliwa, au hakuna sababu iliyotolewa.", meets: "Aina imechaguliwa pamoja na faida moja na wajibu mmoja, ikifaa wamiliki na hatari.", exceeds: "Analinganisha aina mbili na kusema lini biashara inaweza kubadilisha aina." },
      { name: "Ofisi rasmi ya usajili", objective: "O2", notYet: "Hakuna ofisi ya usajili iliyotajwa, au tovuti au wakala asiye rasmi.", meets: "Ofisi rasmi sahihi ya usajili na tovuti yake rasmi au anwani ya ofisi.", exceeds: "Pia anaeleza jinsi ya kutambua tovuti au wakala bandia." },
      { name: "Orodha ya usajili", objective: "O3", notYet: "Yanakosekana majina ya kuchagua, taarifa za wamiliki au shughuli.", meets: "Majina matatu, taarifa za wamiliki, anwani, shughuli, nyaraka na ada kutoka tovuti rasmi.", exceeds: "Pia anataja nyaraka ambazo kampuni ingehitaji, au mahali pa kuhifadhi cheti kwa usalama." },
      { name: "Namba ya kodi na vibali", objective: "O4", notYet: "Hakuna namba ya kodi wala kibali kilichoorodheshwa, au hakuna ofisi iliyotajwa.", meets: "Namba ya kodi, kibali cha eneo na kibali chochote cha sekta, kila kimoja na ofisi yake na tarehe ya kukagua.", exceeds: "Angalau kimoja kilithibitishwa na ofisi ana kwa ana au kwa simu." },
      { name: "Daftari la pesa", objective: "O5", notYet: "Hakuna daftari la pesa, au pesa za biashara na za nyumbani zimechanganywa.", meets: "Kumbukumbu za wiki moja zenye safu nne, maingizo ya \"mmiliki alichukua\" na jumla sahihi za wiki.", exceeds: "Laini au akaunti tofauti ya pesa za biashara na risiti zimehifadhiwa." },
      { name: "Kalenda ya mwaka", objective: "O6", notYet: "Hakuna kalenda, au tarehe zimekisiwa.", meets: "Kalenda ya miezi 12 ya kuhuisha, ritani na vibali, pamoja na ofisi, tarehe zilizokaguliwa na vikumbusho vimewekwa.", exceeds: "Anaeleza amuulize nani (ofisi ya usajili, ofisi ya kodi au mhasibu) kwa kila wajibu." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaosajili biashara yao au kibali ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoweka daftari la pesa kwa angalau wiki nne baada ya kozi",
      "Wanafunzi wanaofungua akaunti ya benki au ya pesa za simu ya biashara, wanaopata mkataba au wanaojiunga na programu ya msaada ndani ya miezi sita"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya cyber café yenye intaneti",
      "Daftari kwa orodha ya usajili, daftari la pesa na kalenda",
      "Anwani za tovuti rasmi za ofisi yako ya usajili, mamlaka ya kodi na serikali ya eneo",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na wiki moja ya mazoezi ya daftari la pesa"
    ],
    facilitatorNotes: [
      "Kabla ya kozi, tafuta ofisi ya usajili, mamlaka ya kodi na ofisi ya vibali vya eneo kwa nchi na mji wako kwenye tovuti zao rasmi, na uchapishe anwani zao.",
      "Usikusanye kamwe namba za vitambulisho, nywila au namba za kodi za wanafunzi; orodha zinataja kinachohitajika, si namba zenyewe.",
      "Mwalike mtu kutoka ofisi ya usajili, kituo cha msaada wa biashara (kwa mfano SMEDAN nchini Nigeria) au mhasibu wa eneo ajibu maswali.",
      "Usitaje ada wala tarehe za mwisho kutoka kumbukumbu yako; waonyeshe wanafunzi jinsi ya kuzikagua kwenye tovuti rasmi.",
      "Pima kazi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
