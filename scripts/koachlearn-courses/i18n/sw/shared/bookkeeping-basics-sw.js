"use strict";

// Koach Learn course (Swahili translation of shared/bookkeeping-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "bookkeeping-basics-sw",
  lang: "sw",
  translationOf: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Misingi ya Utunzaji wa Hesabu",
  skills: "Kuandika mapato na matumizi, Kutunza risiti, Kutenganisha pesa za biashara na pesa binafsi, Kutengeneza leja kwenye spreadsheet, Kulinganisha hesabu zako na benki, Kusoma taarifa ya faida na hasara",
  outcome: "kutunza leja rahisi ya spreadsheet ya mapato na matumizi ya biashara yako pamoja na risiti zinazoithibitisha, kuilinganisha na taarifa ya benki au ya pesa za simu, na kusoma taarifa ya faida na hasara ya mwezi mmoja ili kuona kama ulipata faida.",
  about: [
    "Kozi hii ni kwa yeyote anayeendesha kitu chenye pesa zinazoingia na kutoka: msusi wa nywele, kibanda cha chakula, biashara ya usafi, kanisa au shirika lisilo la faida la vijana, mkulima anayeuza mayai au mboga, au mtu mwenye biashara ndogo ya pembeni mtandaoni.",
    "Utajifunza kuandika kila mauzo na kila gharama, kutunza risiti zinazozithibitisha, kutenganisha pesa za biashara na pesa binafsi, kutengeneza leja rahisi kwenye spreadsheet ya bure, kuikagua kila mwezi, na kusoma taarifa rahisi ya faida na hasara.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" unayoifanya kwa namba zako mwenyewe au kwa mfano. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Utunzaji wa hesabu ni kumbukumbu tu. Kwa maswali ya kodi na sheria, ongea na mhasibu au mtaalamu wa kodi."
  ],
  finalTask: "Tengeneza leja kwenye spreadsheet na uandike miamala ya biashara ya mwezi mmoja, halisi au ya mfano (angalau 10), kila mmoja ukiwa na tarehe, maelezo, kundi, kiasi na namba ya risiti. Linganisha leja na taarifa yako ya benki au ya pesa za simu, kisha tengeneza taarifa ya faida na hasara ya mwezi mmoja inayoonyesha jumla ya mapato, matumizi kwa kila kundi, na faida au hasara.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaoendesha kitu chenye pesa zinazoingia na kutoka: wamiliki wa biashara ndogo, wauzaji wa sokoni, wakulima wanaouza mazao, biashara za pembeni mtandaoni, na watunza hazina wa makanisa au mashirika madogo yasiyo ya faida. Wengi wanatunza hesabu kichwani, kwenye sanduku la pesa au kwenye akaunti moja binafsi.",
    startingPoint: "Wanaweza kushughulikia pesa taslimu na pesa za simu au akaunti ya benki, na wanaweza kufungua simu au kompyuta. Wachache wanatunza kumbukumbu za maandishi, na wengi hawajawahi kutumia fomula ya spreadsheet.",
    gap: "Bila kumbukumbu hawawezi kujua kama biashara inapata faida, bidhaa zipi zinalipa, au waonyeshe nini kwa mkopeshaji, mtoaji wa ruzuku au ofisi ya kodi. Leja rahisi yenye risiti, ukaguzi wa kila mwezi dhidi ya taarifa ya benki, na taarifa ya faida na hasara ya mwezi mmoja vinaziba pengo hilo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; namba zinabaki rahisi",
      "Vifaa: simu au kompyuta ya pamoja yenye spreadsheet ya bure (Google Sheets au Excel)",
      "Muda: kama dakika 5 kwa kila somo, pamoja na mazoezi kwa namba zao wenyewe au kwa mfano",
      "Faragha: hakuna namba za akaunti za benki wala taarifa binafsi za wateja zinazobandikwa kwenye zana za AI",
      "Sheria za kodi zinatofautiana kati ya nchi; kozi inafundisha kutunza kumbukumbu na inapeleka maswali ya kodi kwa mhasibu"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwenye spreadsheet wanaweza kusaidiwa kwanza na kozi \"Excel na Spreadsheets\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya pesa zinazoingia na kutoka katika biashara au shirika lisilo la faida", action: "kutambua vitu vipi ni mapato na vipi ni matumizi", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa mauzo na manunuzi ya wiki moja", action: "kutunza risiti, ankara au karatasi ya mauzo ya siku yenye namba kama uthibitisho wa kila muamala", standard: "ili kila mstari wa leja uwe na namba ya risiti unayoweza kuipata" },
    { id: "O3", condition: "Ukitumia akaunti tofauti ya biashara, till au pochi ya pesa za simu", action: "kutenganisha pesa za biashara na pesa binafsi na kuandika malipo yako mwenyewe kama mchoto wa mmiliki", standard: "bila matumizi binafsi kuchanganywa katika kumbukumbu za biashara" },
    { id: "O4", condition: "Ukitumia spreadsheet ya bure kama Google Sheets au Excel", action: "kutengeneza leja yenye safu saba, makundi yasiyobadilika na fomula ya salio linaloendelea", standard: "ili salio libadilike sahihi baada ya kila mstari" },
    { id: "O5", condition: "Ukipewa leja yako na taarifa ya mwezi mmoja ya benki au ya pesa za simu", action: "kulinganisha leja na taarifa na kurekebisha tofauti zozote", standard: "hadi salio zilingane, ukizingatia pesa taslimu na malipo ambayo bado hayajapita" },
    { id: "O6", condition: "Ukipewa miamala ya mwezi mmoja kwenye leja", action: "kutengeneza taarifa ya faida na hasara kwa SUMIF na kueleza inaonyesha nini", standard: "kwa jumla sahihi na sentensi mbili za kweli kuhusu matokeo" }
  ],
  chapters: [
    {
      name: "Sura 1: Tunza kumbukumbu nzuri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Utunzaji wa hesabu ni nini na kwa nini ni muhimu",
          minutes: 4,
          goal: "Eleza utunzaji wa hesabu unaandika nini na utaje aina mbili za pesa unazofuatilia.",
          text: [
            "Utunzaji wa hesabu ni kuandika kila mara pesa zinapoingia au kutoka katika biashara yako, mahali pamoja, kwa mpangilio. Si hesabu ngumu. Ni tabia.",
            "Pesa zinazoingia ni mapato: mauzo, malipo kutoka kwa wateja, ada, na kwa shirika lisilo la faida, michango na ruzuku. Pesa zinazotoka ni matumizi: vifaa, kodi ya pango, mafuta, mbegu, simu, matangazo, mishahara.",
            "IRS (ofisi ya kodi ya Marekani) inasema kumbukumbu nzuri zinakusaidia kufuatilia maendeleo ya biashara yako na kuandaa ritani zako za kodi. Pia zinaonyesha gharama zipi unaweza kutoa (kupunguza) kwenye kodi. Kumbukumbu safi zinakusaidia kupata mkopo, kuomba ruzuku, kujibu swali la ofisi ya kodi, na kuona bidhaa au huduma zipi kweli zinaleta faida.",
            "Mfano: mama mmoja anauza mikate na keki kwenye soko la wikendi. Anadhani anafanya vizuri kwa sababu sanduku la pesa limejaa. Anapoandika unga, siagi, maboksi na ada ya soko, anagundua kwamba keki ndogo zinaleta faida lakini mkate unarudisha gharama yake kwa shida. Sasa anaweza kuamua aoke nini."
          ],
          words: [["Utunzaji wa hesabu", "kutunza kumbukumbu ya maandishi ya pesa zote zinazoingia na kutoka katika biashara."], ["Mapato", "pesa zinazoingia: mauzo, ada, michango, ruzuku."], ["Matumizi", "pesa zinazotumika kuendesha biashara, kama vifaa, kodi ya pango na mafuta."], ["Kutoa kwenye kodi (deduct)", "kupunguza gharama ya biashara inayoruhusiwa unapohesabu kodi unayodaiwa."]],
          slides: [
            { title: "Utunzaji wa hesabu ni tabia", bullets: ["Andika pesa zote zinazoingia na kutoka", "Mahali pamoja, kwa mpangilio", "Si hesabu ngumu"] },
            { title: "Aina mbili za pesa", bullets: ["Mapato: mauzo, ada, michango, ruzuku", "Matumizi: vifaa, kodi ya pango, mafuta, mbegu, mishahara"] },
            { title: "Kwa nini ni muhimu", bullets: ["Uone biashara inavyoendelea kweli", "Kuandaa kodi na kuonyesha gharama zinazotolewa", "Kupata mikopo na ruzuku; kujibu maswali"] }
          ],
          sources: [{ name: "IRS: Utunzaji wa kumbukumbu kwa biashara ndogo", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Fikiria biashara yako, au moja ungependa kuianzisha. Andika aina tano za mapato au pesa zinazoingia, na aina nane za matumizi au pesa zinazotoka, ambazo ingekuwa nazo.",
          youCanNow: "kusema utunzaji wa hesabu ni nini, kugawa pesa kuwa mapato na matumizi, na kueleza kwa nini kumbukumbu ni muhimu.",
          quickCheck: [
            { objective: "O1", q: "Utunzaji wa hesabu ni nini?", options: ["Kuandika kila mara pesa zinapoingia au kutoka, mahali pamoja, kwa mpangilio", "Kufanya hesabu ngumu mara moja kwa mwaka", "Kuwasilisha ritani yako ya kodi", "Kuhesabu sanduku la pesa usiku"], answer: 0, why: "Somo linasema utunzaji wa hesabu ni tabia ya kuandika kila pesa inayoingia na kutoka, kwa mpangilio." },
            { objective: "O1", q: "Mwokaji anadhani anafanya vizuri kwa sababu sanduku la pesa limejaa. Nini kingemwonyesha bidhaa zipi kweli zinaleta faida?", options: ["Kuhesabu pesa tena", "Kuwauliza wateja wanapenda nini", "Kuandika gharama zake, kama unga, maboksi na ada ya soko, kando ya mauzo yake", "Kupandisha kila bei"], answer: 2, why: "Kuandika gharama kando ya mauzo kulionyesha kwamba keki ndogo zinaleta faida wakati mkate unarudisha gharama yake kwa shida." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutunza risiti na uthibitisho mwingine",
          minutes: 5,
          goal: "Weka mfumo rahisi wa kutunza kila risiti na ankara.",
          text: [
            "Kila kitu unachoandika katika hesabu zako kinapaswa kuwa na uthibitisho nyuma yake. IRS inaviita nyaraka za kuthibitisha. Kwa mauzo ni pamoja na vitabu vya risiti, ankara, karatasi za mashine ya kuuzia na kumbukumbu za kuweka pesa benki. Kwa manunuzi na matumizi ni pamoja na risiti, ankara, taarifa za kadi na kumbukumbu za malipo ya kielektroniki.",
            "Risiti za karatasi hufifia na kupotea. Mfumo rahisi: piga picha kila risiti siku ile ile, ipe namba, na uihifadhi kwenye folda ya mwezi huo, kwa mfano 2026-10. Weka karatasi kwenye bahasha yenye mwezi huo huo. Andika namba ya risiti kwenye leja yako, ili uweze kupata uthibitisho wa mstari wowote.",
            "Muda wa kutunza kumbukumbu: IRS inasema uzitunze kwa muda wote ambao huenda ukahitaji kuthibitisha mapato au gharama zilizotolewa kwenye ritani ya kodi. Kwa ritani nyingi za Marekani ni miaka 3, lakini baadhi ya hali ni ndefu zaidi, kama angalau miaka 4 kwa kumbukumbu za kodi za ajira. Kagua ukurasa wa IRS kwa hali yako. Nje ya Marekani, kagua mamlaka ya kodi ya nchi yako, kama Mamlaka ya Mapato Kenya (KRA), au muulize mhasibu.",
            "Kwa mauzo ya pesa taslimu bila risiti, kama mayai yanayouzwa getini mwa shamba, andika karatasi rahisi ya mauzo ya siku: tarehe, ulichouza, idadi, na jumla. Karatasi hiyo ndiyo uthibitisho wako."
          ],
          steps: ["Tengeneza folda moja kwa kila mwezi kwenye simu au kompyuta yako, na bahasha moja kwa kila mwezi kwa karatasi.", "Piga picha kila risiti siku ile ile.", "Ipe kila risiti namba na uiandike kwenye karatasi.", "Andika mauzo ya pesa taslimu kwenye karatasi ya mauzo ya siku.", "Tunza kumbukumbu kwa muda ambao mamlaka yako ya kodi inasema, au muulize mhasibu."],
          words: [["Risiti", "kumbukumbu ya karatasi au ya kielektroniki kwamba ulilipa au ulilipwa."], ["Ankara (invoice)", "bili unayomtumia mteja, au unayopokea kutoka kwa msambazaji, inayoorodhesha kilichouzwa na bei."], ["Nyaraka za kuthibitisha", "uthibitisho nyuma ya kumbukumbu katika hesabu zako, kama risiti, ankara au taarifa ya benki."]],
          slides: [
            { title: "Kila kitu kinahitaji uthibitisho", bullets: ["Mauzo: ankara, vitabu vya risiti, kumbukumbu za kuweka pesa benki", "Gharama: risiti, ankara, taarifa za kadi"] },
            { title: "Mfumo rahisi wa risiti", bullets: ["Piga picha siku ile ile", "Ipe namba na uiweke kwenye folda ya mwezi", "Andika namba kwenye leja yako"] },
            { title: "Mauzo ya taslimu bila risiti", bullets: ["Tunza karatasi ya mauzo ya siku", "Tarehe, bidhaa, idadi, jumla"] },
            { title: "Muda wa kutunza kumbukumbu", bullets: ["Marekani: mara nyingi miaka 3, baadhi ya hali zaidi", "Kumbukumbu za kodi za ajira: angalau miaka 4", "Kagua irs.gov, mamlaka yako ya kodi au mhasibu"] }
          ],
          sources: [
            { name: "IRS: Kumbukumbu za aina gani nitunze", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS: Nitunze kumbukumbu kwa muda gani?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Tengeneza folda ya risiti ya mwezi huu kwenye simu au kompyuta yako. Piga picha risiti tatu ulizonazo (za biashara au za kila siku kwa mazoezi), zipe namba 1, 2 na 3, na uzihifadhi kwenye folda.",
          youCanNow: "kutunza, kuweka namba na kupanga risiti ili kila kumbukumbu katika hesabu zako iwe na uthibitisho nyuma yake.",
          quickCheck: [
            { objective: "O2", q: "IRS inaziitaje risiti, ankara na kumbukumbu za kuweka pesa benki?", options: ["Ritani za kodi", "Nyaraka za kuthibitisha", "Leja", "Taarifa za faida na hasara"], answer: 1, why: "IRS inaziita karatasi zinazothibitisha kila kumbukumbu nyaraka za kuthibitisha." },
            { objective: "O2", q: "Umetoka kulipia vifaa na kupewa risiti ya karatasi. Unafanya nini siku ile ile?", options: ["Kuiweka mfukoni kwa baadaye", "Kuitupa ukishakumbuka kiasi", "Kuandika kiasi mkononi mwako", "Kuipiga picha, kuipa namba na kuihifadhi kwenye folda ya mwezi huu"], answer: 3, why: "Kupiga picha na kuipa risiti namba siku ile ile kunaizuia kufifia au kupotea." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Kutenganisha pesa za biashara na pesa binafsi",
          minutes: 5,
          goal: "Weka mahali tofauti pa pesa za biashara na ujilipe kwa makusudi.",
          text: [
            "Pesa za biashara na pesa binafsi zikichanganywa kwenye akaunti moja au pochi moja, huwezi kujua kama biashara inapata faida. Chakula cha mchana cha biashara, ununuzi wa chakula cha familia na oda ya vifaa vyote vinaonekana sawa.",
            "Fungua akaunti tofauti ya biashara: akaunti ya biashara ya benki au ya chama cha ushirika cha akiba na mikopo (SACCO), au akaunti tofauti ya pesa za simu au till inayotumika kwa biashara tu. Weka kila mauzo ndani yake. Lipa kila gharama ya biashara kutoka humo.",
            "Unapohitaji pesa kwa ajili yako mwenyewe, hamisha kiasi maalum kutoka akaunti ya biashara kwenda akaunti yako binafsi, na ukiandike kama mchoto wa mmiliki au malipo yako. Hiyo si gharama ya biashara; ni wewe kuchukua faida. Ukilipa gharama ya biashara kwa pesa binafsi, iandike kwenye leja na utunze risiti.",
            "Mashirika yasiyo ya faida yana hatua moja zaidi: mfadhili akitoa pesa kwa kusudi moja, kama programu ya michezo ya vijana, ifuatilie ili itumike kwa kusudi hilo. Safu moja rahisi au kundi moja kwa ajili yake linatosha kuanza."
          ],
          steps: ["Fungua akaunti tofauti ya biashara, till au pochi ya pesa za simu.", "Weka mauzo yote na michango yote ndani yake.", "Lipa gharama zote za biashara kutoka humo.", "Jilipe kwa kuhamisha kiasi maalum, na ukiandike kama mchoto wa mmiliki.", "Ukitumia pesa binafsi kwa biashara, iandike na utunze risiti."],
          words: [["Mchoto wa mmiliki (owner's draw)", "pesa ambazo mmiliki anachukua kutoka kwenye biashara kwa matumizi binafsi. Si gharama ya biashara."], ["Kuchanganya pesa", "kuweka pesa za biashara na pesa binafsi kwenye akaunti moja."], ["Mchango wenye masharti", "zawadi ambayo mfadhili anasema lazima itumike kwa kusudi fulani."]],
          slides: [
            { title: "Pesa zilizochanganywa huficha ukweli", bullets: ["Huwezi kujua kama biashara inapata faida", "Gharama binafsi na za biashara zinaonekana sawa"] },
            { title: "Ipe biashara pesa zake yenyewe", bullets: ["Akaunti tofauti ya benki, SACCO au pesa za simu", "Mauzo yote yanaingia, gharama zote za biashara zinatoka"] },
            { title: "Jilipe kwa makusudi", bullets: ["Hamisha kiasi maalum kwenda akaunti yako binafsi", "Kiandike kama mchoto wa mmiliki, si gharama"] },
            { title: "Mashirika yasiyo ya faida", bullets: ["Fuatilia zawadi zilizotolewa kwa kusudi fulani", "Zitumie kwa kusudi hilo"] }
          ],
          sources: [{ name: "IRS: Utunzaji wa kumbukumbu kwa biashara ndogo", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Angalia malipo 10 ya mwisho kutoka akaunti au pochi unayotumia kwa biashara yako (au ya kwako binafsi, kwa mazoezi). Weka alama B kwa biashara au P kwa binafsi kwa kila moja. Andika jinsi utakavyozitenganisha kuanzia sasa.",
          youCanNow: "kutenganisha pesa za biashara na pesa binafsi na kujilipa kwa njia unayoweza kuifuatilia.",
          quickCheck: [
            { objective: "O1", q: "Mchoto wa mmiliki ni nini?", options: ["Gharama ya biashara", "Mkopo kutoka benki", "Pesa unazohamisha kutoka biashara kwenda kwako, zinazotoka kwenye faida", "Mchango kwa biashara"], answer: 2, why: "Mchoto wa mmiliki ni wewe kuchukua faida; si gharama ya biashara." },
            { objective: "O1", q: "Unaendesha biashara yako kutoka akaunti yako binafsi na huwezi kujua kama inapata faida. Rekebisho la kwanza ni lipi?", options: ["Kufungua akaunti tofauti au till ya pesa za simu kwa biashara tu", "Kutumia kidogo kwa chakula cha nyumbani", "Kuacha kutunza risiti", "Kutumia pesa taslimu tu"], answer: 0, why: "Akaunti tofauti inatenganisha pesa za biashara, ili uone biashara inapata na kutumia kiasi gani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Tunza kumbukumbu nzuri",
        questions: [
          { objective: "O1", q: "Kipi ni matumizi kwa shamba dogo?", options: ["Pesa kutokana na kuuza nyanya", "Ruzuku kutoka kwa mfadhili", "Malipo ya mteja", "Mbegu na mbolea"], answer: 3, why: "Matumizi ni gharama za kuendesha biashara, kama mbegu na mbolea." },
          { objective: "O1", q: "Kwa mujibu wa IRS, kumbukumbu nzuri zinakusaidia:", options: ["Kutowahi kulipa kodi", "Kufuatilia maendeleo ya biashara yako na kuandaa ritani za kodi", "Kuacha kuandika risiti", "Kupata vifaa bure"], answer: 1, why: "IRS inasema kumbukumbu zinakusaidia kufuatilia biashara yako na kuandaa ritani zako." },
          { objective: "O2", q: "Unauza mayai kwa pesa taslimu bila risiti. Uthibitisho wako ni nini?", options: ["Karatasi ya mauzo ya siku yenye tarehe, bidhaa, idadi na jumla", "Kumbukumbu yako kichwani", "Hakuna kinachohitajika", "Picha ya kuku wako"], answer: 0, why: "Karatasi ya mauzo ya siku iliyoandikwa inaweka kumbukumbu ya mauzo ya taslimu." },
          { objective: "O2", q: "Kwa nini uandike namba ya risiti kwenye leja yako?", options: ["Inafanya leja ionekane ndefu zaidi", "Benki inaitaka", "Ili uweze kupata uthibitisho wa mstari wowote", "Inabadilisha jumla"], answer: 2, why: "Namba zinaunganisha kila kumbukumbu na uthibitisho wake." },
          { objective: "O3", q: "Unahamisha pesa kutoka akaunti ya biashara kwenda akaunti yako binafsi ili ujilipe. Unaziandikaje?", options: ["Kama gharama ya biashara", "Kama mchoto wa mmiliki", "Kama mauzo", "Huziandiki"], answer: 1, why: "Pesa anazochukua mmiliki ni mchoto wa mmiliki, si gharama ya biashara." }
        ]
      }
    },
    {
      name: "Sura 2: Leja yako na faida yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza leja rahisi kwenye spreadsheet",
          minutes: 6,
          goal: "Tengeneza leja kwenye spreadsheet ya bure yenye safu sahihi na salio linaloendelea.",
          text: [
            "Leja ni orodha ya kila pesa inayoingia na kutoka, mstari mmoja kwa kila muamala. Spreadsheet ya bure kama Google Sheets au Microsoft Excel inafanya kazi vizuri, na inakujumlishia namba.",
            "Tumia safu saba: Tarehe, Maelezo, Kundi, Pesa zinazoingia, Pesa zinazotoka, Salio, Namba ya risiti. Weka salio lako la kuanzia kwenye mstari wa kwanza. Kwenye kisanduku cha Salio cha mstari unaofuata, andika fomula inayochukua salio la juu, inaongeza pesa zinazoingia na kutoa pesa zinazotoka. Kwa mfano, ikiwa Salio ni safu F, Pesa zinazoingia ni D na Pesa zinazotoka ni E, mstari wa 3 ungekuwa =F2+D3-E3. Nakili fomula hiyo kwenda chini.",
            "Chagua orodha fupi ya makundi na utumie maneno yale yale kila mara, kwa mfano: Mauzo, Michango, Vifaa, Kodi ya pango, Mafuta, Simu, Matangazo, Mishahara, Mchoto wa mmiliki. Maneno yale yale yanarahisisha kujumlisha kila kundi baadaye.",
            "Msaidizi wa AI anaweza kukusaidia kutengeneza karatasi: muombe akueleze fomula au apendekeze makundi kwa aina ya biashara yako. Usibandike namba za akaunti za benki wala taarifa binafsi za wateja."
          ],
          steps: ["Fungua spreadsheet mpya tupu, ipe jina, kwa mfano \"Leja 2026\", na kipe kichupo cha kwanza jina Ledger.", "Andika vichwa vya safu: Tarehe, Maelezo, Kundi, Pesa zinazoingia, Pesa zinazotoka, Salio, Namba ya risiti.", "Weka salio lako la kuanzia kwenye safu ya Salio ya mstari wa 2.", "Kwenye mstari wa 3 wa Salio, andika =F2+D3-E3 na uinakili kwenda chini.", "Andika orodha yako ya makundi pembeni au kwenye kichupo cha pili, na utumie maneno hayo tu."],
          words: [["Leja", "orodha ya kila pesa inayoingia na kutoka, mstari mmoja kwa kila muamala."], ["Muamala", "mara moja pesa zinapohama: mauzo, malipo, manunuzi."], ["Fomula", "hesabu ndani ya kisanduku cha spreadsheet inayoanza na =."], ["Kundi", "jina linaloweka pamoja pesa zinazofanana, kama Mafuta au Vifaa."]],
          slides: [
            { title: "Leja: mstari mmoja kwa kila muamala", bullets: ["Kila pesa inayoingia na inayotoka", "Spreadsheet ya bure inafanya kujumlisha"] },
            { title: "Safu saba", bullets: ["Tarehe, Maelezo, Kundi", "Pesa zinazoingia, Pesa zinazotoka", "Salio, Namba ya risiti"] },
            { title: "Salio linaloendelea", bullets: ["Anza na salio lako la kuanzia", "Mstari unaofuata: =F2+D3-E3", "Nakili fomula kwenda chini"] },
            { title: "Maneno yale yale ya makundi kila mara", bullets: ["Mauzo, Michango, Vifaa, Kodi ya pango, Mafuta", "Simu, Matangazo, Mishahara, Mchoto wa mmiliki"] }
          ],
          tryIt: "Tengeneza leja sasa kwenye Google Sheets au Excel yenye safu saba, salio la kuanzia na fomula ya salio linaloendelea. Andika miamala mitatu ya wiki hii, halisi au ya mfano, na uhakikishe salio linabadilika sahihi.",
          youCanNow: "kutengeneza leja ya spreadsheet yenye makundi na salio linaloendelea.",
          quickCheck: [
            { objective: "O4", q: "Kwenye leja, kila mstari una nini?", options: ["Mwezi mzima", "Muamala mmoja", "Jina na anwani ya mteja mmoja", "Jumla ya kundi moja"], answer: 1, why: "Leja inaorodhesha kila pesa inayoingia na kutoka, mstari mmoja kwa kila muamala." },
            { objective: "O4", q: "Uliandika \"vifaa\" wiki moja na \"malighafi\" wiki iliyofuata kwa gharama zile zile. Ufanye nini?", options: ["Kubaki na maneno yote mawili", "Kufuta mistari hiyo", "Kuyabadilisha kuwa neno moja la kundi na kutumia neno hilo tu kuanzia sasa", "Kuongeza safu mpya kwa kila neno"], answer: 2, why: "Kutumia maneno yale yale ya makundi kila mara kunarahisisha kujumlisha kila kundi baadaye." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika kila wiki na kulinganisha na benki",
          minutes: 5,
          goal: "Weka leja ikiwa ya kisasa na uilinganishe na taarifa yako ya benki au ya pesa za simu.",
          text: [
            "Utunzaji wa hesabu unafanya kazi vizuri zaidi kama tabia ndogo ya kila wiki, kwa mfano dakika 20 kila Jumatatu asubuhi. Kusanya risiti, karatasi za mauzo na ankara za wiki, na uandike kila moja kama mstari kwenye leja pamoja na kundi lake na namba ya risiti.",
            "Mara moja kwa mwezi, linganisha leja yako na taarifa yako ya benki, SACCO au pesa za simu. Hii inaitwa kupatanisha hesabu. Weka alama kwenye kila mstari wa taarifa unaolingana na mstari kwenye leja yako. Chochote kilicho kwenye taarifa lakini hakipo kwenye leja yako, kama ada ya benki au malipo ya mteja uliyosahau, kinaongezwa. Chochote kilicho kwenye leja yako lakini hakipo kwenye taarifa huenda ni pesa taslimu, au kosa la kurekebisha.",
            "Mwishoni, salio kwenye leja yako linapaswa kulingana na salio la taarifa, baada ya kuzingatia pesa taslimu ulizoshika na malipo ambayo bado hayajapita. Kama halilingani, tafuta mstari uliokosekana, namba iliyoandikwa mara mbili, au tarakimu zilizobadilishana nafasi, kama 54 iliyoandikwa 45.",
            "Mfano: leja ya shirika lisilo la faida la mpira wa miguu wa vijana iko chini kwa dola 15 kuliko benki. Mtunza hazina anagundua mchango wa dola 15 ulioingia kupitia app ya simu na haukuandikwa kamwe, anauongeza, na sasa zinalingana."
          ],
          steps: ["Chagua wakati wa kila wiki wa kusasisha leja.", "Andika kila risiti, karatasi ya mauzo na ankara pamoja na kundi na namba ya risiti.", "Mara moja kwa mwezi, pata taarifa yako ya benki au ya pesa za simu.", "Weka alama kwenye kila mstari wa taarifa unaolingana na leja; ongeza yoyote iliyokosekana.", "Linganisha salio. Kama zinatofautiana, tafuta mistari iliyokosekana, iliyorudiwa au tarakimu zilizobadilishana."],
          words: [["Kupatanisha hesabu (reconcile)", "kukagua kumbukumbu zako dhidi ya taarifa ya benki au ya pesa za simu na kurekebisha tofauti."], ["Taarifa (statement)", "orodha ya miamala ambayo benki au mtoa huduma wa pesa za simu anakupa kwa kipindi fulani."], ["Kupita (cleared)", "malipo yanapokamilika na kuonekana kwenye taarifa."]],
          slides: [
            { title: "Tabia ya kila wiki", bullets: ["Kama dakika 20, siku ile ile kila wiki", "Andika risiti, karatasi za mauzo na ankara"] },
            { title: "Patanisha hesabu mara moja kwa mwezi", bullets: ["Pata taarifa ya benki au ya pesa za simu", "Weka alama kwenye kila mstari unaolingana", "Ongeza kilichokosekana, kama ada"] },
            { title: "Zisipolingana", bullets: ["Mstari uliokosekana", "Namba iliyoandikwa mara mbili", "Tarakimu zilizobadilishana: 54 iliyoandikwa 45"] }
          ],
          tryIt: "Pakua au fungua taarifa ya mwezi uliopita ya akaunti yako ya biashara au ya pesa za simu (au ya kwako binafsi, kwa mazoezi). Chagua mistari mitano ya taarifa na uhakikishe kila mmoja upo kwenye leja yako. Ongeza yoyote iliyokosekana.",
          youCanNow: "kuweka leja yako ikiwa ya kisasa kila wiki na kuipatanisha na taarifa yako kila mwezi.",
          quickCheck: [
            { objective: "O5", q: "Kupatanisha hesabu kunamaanisha nini?", options: ["Kutengeneza bajeti ya mwezi ujao", "Kulipa bili zako zote", "Kuandika leja mpya", "Kulinganisha leja yako na taarifa yako ya benki au ya pesa za simu"], answer: 3, why: "Kupatanisha ni kuweka alama kwenye kila mstari wa taarifa dhidi ya leja yako na kurekebisha kilichokosekana." },
            { objective: "O5", q: "Malipo ya mteja yapo kwenye taarifa yako lakini hayapo kwenye leja yako. Unafanya nini?", options: ["Kuyaongeza kwenye leja", "Kuyapuuza", "Kuyafuta kwenye taarifa", "Kusubiri hadi mwaka ujao"], answer: 0, why: "Chochote kilicho kwenye taarifa na kimekosekana kwenye leja kinaongezwa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kusoma taarifa rahisi ya faida na hasara",
          minutes: 6,
          goal: "Tengeneza taarifa ya faida na hasara ya mwezi mmoja kutoka kwenye leja yako na useme inakuambia nini.",
          text: [
            "Taarifa ya faida na hasara, pia inaitwa P&L au taarifa ya mapato, ni muhtasari mfupi wa kipindi kama mwezi. Inaonyesha jumla ya mapato, jumla ya matumizi kwa kila kundi, na tofauti yake. Mapato kutoa matumizi ni faida. Matumizi yakiwa makubwa zaidi, ni hasara.",
            "Unaweza kuitengeneza kutoka kwenye leja yako. Kwenye kichupo kipya, orodhesha kila kundi. Kando ya kila moja, tumia fomula ya SUMIF kujumlisha kundi hilo. Kwa mfano, =SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E) inajumlisha kila kiasi cha Pesa zinazotoka ambacho kundi lake ni Supplies (Vifaa), ikiwa kichupo cha leja yako kinaitwa Ledger (safu C ni Kundi na safu E ni Pesa zinazotoka). Ukiandika makundi kwa Kiswahili, badilisha neno lililo ndani ya alama za nukuu liwe neno lako la kundi. Jumlisha makundi ya mapato, jumlisha makundi ya matumizi, na utoe. Mchoto wa mmiliki si gharama, kwa hiyo usiuweke kwenye matumizi.",
            "Kisha isome. Ulipata faida? Gharama ipi ni kubwa zaidi? Imeongezeka tangu mwezi uliopita? Kwa shamba, je mwezi wa mavuno ulifidia miezi ya mauzo madogo? Kwa shirika lisilo la faida, je gharama za programu zilibaki ndani ya ruzuku?",
            "Taarifa ya faida na hasara inakuambia biashara inaendeleaje. Si ritani yako ya kodi. Sheria za kodi zinaamua nini kinahesabiwa na lini, na zinatofautiana kati ya nchi. Peleka leja yako, risiti na taarifa ya faida na hasara kwa mhasibu au mtaalamu wa kodi kwa ajili ya kodi."
          ],
          steps: ["Ongeza kichupo kipya kinachoitwa P&L na uorodheshe makundi yako.", "Kando ya kila kundi, tumia SUMIF kulijumlisha kutoka kwenye leja.", "Jumlisha makundi ya mapato na makundi ya matumizi (bila mchoto wa mmiliki).", "Toa: mapato kutoa matumizi = faida au hasara.", "Andika sentensi mbili kuhusu kile namba zinakuambia."],
          words: [["Taarifa ya faida na hasara (P&L)", "muhtasari wa mapato, matumizi na faida au hasara kwa kipindi fulani."], ["Faida", "kinachobaki mapato yanapokuwa makubwa kuliko matumizi."], ["Hasara", "matumizi yanapokuwa makubwa kuliko mapato."], ["SUMIF", "fomula ya spreadsheet inayojumlisha mistari tu inayolingana na jina fulani."]],
          slides: [
            { title: "Faida na hasara kwa mstari mmoja", bullets: ["Mapato kutoa matumizi = faida", "Matumizi ni makubwa zaidi? Hiyo ni hasara"] },
            { title: "Itengeneze kutoka kwenye leja yako", bullets: ["Orodhesha makundi kwenye kichupo kipya", "Tumia SUMIF kujumlisha kila moja", "Usiweke mchoto wa mmiliki kwenye matumizi"] },
            { title: "Isome", bullets: ["Faida au hasara?", "Gharama kubwa zaidi? Inaongezeka?", "Miezi mizuri ilifidia miezi ya mauzo madogo?"] },
            { title: "Si ritani ya kodi", bullets: ["Sheria za kodi zinaamua nini kinahesabiwa", "Peleka kumbukumbu zako kwa mhasibu"] }
          ],
          sources: [{ name: "IRS: Utunzaji wa kumbukumbu kwa biashara ndogo", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Kazi ya mwisho: andika angalau miamala 10 halisi au ya mfano ya mwezi mmoja kwenye leja yako, pamoja na makundi na namba za risiti, na uilinganishe na taarifa. Kisha tengeneza kichupo cha P&L kwa SUMIF, tafuta faida au hasara yako, na uandike sentensi mbili kuhusu inachokuambia.",
          youCanNow: "kutengeneza na kusoma taarifa ya faida na hasara ya mwezi mmoja kutoka kwenye leja yako mwenyewe.",
          quickCheck: [
            { objective: "O6", q: "Mapato kutoa matumizi kunaitwaje mapato yakiwa makubwa zaidi?", options: ["Mchoto wa mmiliki", "Hasara", "Faida", "Salio"], answer: 2, why: "Mapato kutoa matumizi ni faida; matumizi yakiwa makubwa zaidi, ni hasara." },
            { objective: "O6", q: "Unatengeneza taarifa yako ya faida na hasara. Mchoto wa mmiliki unaenda wapi?", options: ["Kwenye kundi kubwa zaidi la matumizi", "Kwenye mapato", "Kwenye vifaa", "Usiuweke kwenye matumizi"], answer: 3, why: "Mchoto wa mmiliki si gharama ya biashara, kwa hiyo haukai kwenye matumizi ya P&L." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Leja yako na faida yako",
        questions: [
          { objective: "O4", q: "Seti ipi ya safu inatengeneza leja rahisi nzuri?", options: ["Tarehe, Maelezo, Kundi, Pesa zinazoingia, Pesa zinazotoka, Salio, Namba ya risiti", "Jina, Siku ya kuzaliwa, Burudani", "Jumla tu", "Nywila ya mteja na namba ya kadi"], answer: 0, why: "Safu hizi zinaandika kila muamala na kuuunganisha na uthibitisho wake." },
          { objective: "O4", q: "Kwa nini utumie maneno yale yale ya makundi kila mara?", options: ["Vinginevyo spreadsheet haitafunguka", "Ili leja iwe na rangi", "Ili uweze kujumlisha kila kundi baadaye", "Kwa sababu benki inataka hivyo"], answer: 2, why: "Maneno yanayolingana yanaruhusu SUMIF kujumlisha kila kundi sahihi." },
          { objective: "O5", q: "Leja yako iko chini kwa dola 15 kuliko taarifa ya benki. Unatafuta nini kwanza?", options: ["Benki mpya", "App mpya ya spreadsheet", "Hakuna; tofauti ndogo hazijalishi kamwe", "Pesa iliyowekwa au malipo yaliyo kwenye taarifa lakini hayapo kwenye leja"], answer: 3, why: "Tofauti kwa kawaida inamaanisha mstari uliokosekana, uliorudiwa au ulioandikwa vibaya." },
          { objective: "O6", q: "Mapato ni 2,000, matumizi ni 1,500, na mchoto wa mmiliki ni 300. Faida ni kiasi gani?", options: ["200", "500", "3,800", "1,500"], answer: 1, why: "Faida ni mapato kutoa matumizi: 2,000 - 1,500 = 500. Mchoto wa mmiliki si gharama." },
          { objective: "O6", q: "Unapaswa kuongea na nani kuhusu kodi zako?", options: ["Mhasibu au mtaalamu wa kodi", "Mtu usiyemjua kwenye maoni ya mtandaoni", "Hakuna; taarifa ya faida na hasara ndiyo ritani yako ya kodi", "Wateja wako"], answer: 0, why: "Taarifa ya faida na hasara si ritani ya kodi; mhasibu anazijua sheria za kodi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Utunzaji wa Hesabu",
    questions: [
      { objective: "O1", q: "Utunzaji wa hesabu unamaanisha:", options: ["Kusoma vitabu kuhusu biashara", "Kukisia faida yako mwishoni mwa mwaka", "Kuandika pesa zote zinazoingia na kutoka", "Kuandika shajara"], answer: 2, why: "Utunzaji wa hesabu unaandika kila pesa inayoingia na kutoka." },
      { objective: "O1", q: "Kwa shirika lisilo la faida, kipi ni mapato?", options: ["Mchango", "Kodi ya pango ya ofisi", "Vitafunio kwa wanaojitolea", "Wino wa printa"], answer: 0, why: "Michango na ruzuku ni pesa zinazoingia." },
      { objective: "O2", q: "Kipi ni mfano wa hati ya kuthibitisha gharama?", options: ["Ujumbe kutoka kwa rafiki", "Kadi ya biashara", "Orodha yako ya mambo ya kufanya", "Risiti au ankara"], answer: 3, why: "IRS inaorodhesha risiti, ankara na taarifa kama uthibitisho wa matumizi." },
      { objective: "O2", q: "Njia rahisi zaidi ya kuzuia risiti za karatasi zisififie au kupotea ni ipi?", options: ["Kuziweka mfukoni", "Kuzipiga picha na kuzihifadhi siku ile ile", "Kuzitupa baada ya wiki moja", "Kuwapa wateja"], answer: 1, why: "Picha ya siku ile ile, iliyohifadhiwa kwa mwezi, inaweka uthibitisho salama." },
      { objective: "O2", q: "Kwa ritani nyingi za kodi za Marekani, kanuni ya msingi ya IRS ni kutunza kumbukumbu kwa:", options: ["Wiki 1", "Miaka 3, zaidi katika baadhi ya hali", "Mwezi 1", "Kamwe; kumbukumbu hazihitajiki"], answer: 1, why: "IRS inasema miaka 3 katika hali nyingi, na vipindi virefu zaidi katika baadhi ya hali." },
      { objective: "O2", q: "Kumbukumbu za kodi za ajira zinapaswa kutunzwa kwa angalau:", options: ["Mwezi 1", "Mwaka 1", "Miaka 4", "Siku 10"], answer: 2, why: "IRS inasema angalau miaka 4 baada ya kodi kudaiwa au kulipwa." },
      { objective: "O3", q: "Kwa nini utunze pesa za biashara kwenye akaunti au pochi yake yenyewe?", options: ["Ili uweze kujua kama biashara inapata faida", "Kwa sababu kuchanganya pesa kunafurahisha", "Ili uache kutunza risiti", "Kuficha mauzo"], answer: 0, why: "Pesa zilizochanganywa zinaficha biashara inavyoendelea kweli." },
      { objective: "O3", q: "Ulilipia vifaa vya biashara kwa kadi yako binafsi. Unafanya nini?", options: ["Kusahau", "Kuiandika kama mauzo", "Kutupa risiti", "Kuiandika kwenye leja na kutunza risiti"], answer: 3, why: "Kuiandika kunaweka hesabu kamili na uthibitisho salama." },
      { objective: "O3", q: "Mfadhili anatoa pesa kwa ajili ya programu ya michezo ya vijana tu. Shirika lisilo la faida linapaswa:", options: ["Kuzitumia kwa chochote", "Kuzirudisha mara moja", "Kutoziandika", "Kuzifuatilia ili zitumike kwa programu hiyo"], answer: 3, why: "Zawadi zenye masharti lazima zifuatiliwe na zitumike kwa kusudi lake." },
      { objective: "O4", q: "Leja ina:", options: ["Ukurasa mmoja kwa kila mteja", "Mstari mmoja kwa kila muamala", "Jumla ya mwaka tu", "Matumizi tu"], answer: 1, why: "Kila mauzo, malipo au manunuzi ni mstari wake." },
      { objective: "O4", q: "Kwenye spreadsheet, fomula inaanza na:", options: ["#", "$", "=", "?"], answer: 2, why: "Fomula za spreadsheet zinaanza na alama ya sawa." },
      { objective: "O4", q: "Salio ni safu F, Pesa zinazoingia D, Pesa zinazotoka E. Salio linaloendelea katika mstari wa 3 ni:", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Chukua salio la juu, ongeza pesa zinazoingia na utoe pesa zinazotoka." },
      { objective: "O5", q: "Tabia nzuri ya kuweka hesabu ziwe za kisasa ni ipi?", options: ["Kusasisha mara moja kwa wiki kwa wakati maalum", "Kusasisha tu ofisi ya kodi inapoandika", "Kusasisha mara moja kila baada ya miaka kadhaa", "Kutosasisha kamwe"], answer: 0, why: "Tabia fupi ya kila wiki inaweka kumbukumbu kamili na rahisi." },
      { objective: "O5", q: "Kupatanisha hesabu kunamaanisha:", options: ["Kupatana na mteja", "Kufuta risiti za zamani", "Kulinganisha leja yako na taarifa ya benki au ya pesa za simu", "Kufungua akaunti mpya"], answer: 2, why: "Kupatanisha kunatafuta na kurekebisha tofauti kati ya hesabu zako na taarifa." },
      { objective: "O5", q: "Ada ya benki ipo kwenye taarifa lakini haipo kwenye leja yako. Unapaswa:", options: ["Kuipuuza", "Kuiongeza kwenye leja", "Kufunga akaunti", "Kufuta taarifa"], answer: 1, why: "Chochote halisi kilicho kwenye taarifa kinapaswa kuwa kwenye leja." },
      { objective: "O5", q: "Uliandika 45 badala ya 54. Kosa la aina hii ni:", options: ["Mstari uliokosekana", "Mstari ulioandikwa mara mbili", "Kundi jipya", "Tarakimu zilizobadilishana nafasi"], answer: 3, why: "Tarakimu zilizobadilishana ni sababu ya kawaida hesabu kutolingana." },
      { objective: "O6", q: "Taarifa ya faida na hasara inaonyesha:", options: ["Salio lako la benki tu", "Majina ya wateja wako", "Mapato, matumizi na tofauti yake kwa kipindi fulani", "Alama yako ya mkopo"], answer: 2, why: "P&L inafupisha mapato, matumizi na faida au hasara." },
      { objective: "O6", q: "Fomula ipi inajumlisha viasi vyote vya Supplies (Vifaa) kutoka kwenye leja?", options: ["=SUM(Supplies)", "=Supplies+1", "=AVERAGE(C:C)", "=SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E)"], answer: 3, why: "SUMIF inajumlisha tu mistari ambayo kundi lake ni Supplies." },
      { objective: "O6", q: "Matumizi ni makubwa kuliko mapato mwezi huu. Hiyo ni:", options: ["Hasara", "Faida", "Mchoto wa mmiliki", "Risiti"], answer: 0, why: "Matumizi yakiwa makubwa kuliko mapato, matokeo ni hasara." },
      { objective: "O6", q: "Taarifa yako ya faida na hasara iko tayari. Je, ndiyo ritani yako ya kodi?", options: ["Ndiyo, ipeleke ofisi ya kodi kama ilivyo", "Hapana; peleka kumbukumbu zako kwa mhasibu kwa ajili ya kodi", "Ndiyo, kama inaonyesha faida", "Kwa mashirika yasiyo ya faida tu"], answer: 1, why: "Sheria za kodi zinaamua nini kinahesabiwa; mhasibu anaweza kuandaa kodi zako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      2,
      6,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Leja imetengenezwa",
        objective: "O4",
        notYet: "Safu zimekosekana au salio halibadiliki.",
        meets: "Safu zote saba, salio la kuanzia na salio linaloendelea lililo sahihi baada ya kila mstari.",
        exceeds: "Pia ina orodha ya makundi isiyobadilika kwenye kichupo chake, inayotumika kwa maneno yale yale kila mara."
      },
      {
        name: "Mapato na matumizi yamepangwa",
        objective: "O1",
        notYet: "Baadhi ya mistari iko kwenye kundi lisilo sahihi au haina kundi.",
        meets: "Angalau miamala 10, kila mmoja ukiwa na kundi sahihi la mapato au matumizi.",
        exceeds: "Mchoto wa mmiliki na pesa zozote binafsi zilizotumika kwa biashara zimeandikwa kwa njia sahihi."
      },
      {
        name: "Uthibitisho kwa kila mstari",
        objective: "O2",
        notYet: "Baadhi ya mistari haina namba ya risiti wala uthibitisho.",
        meets: "Kila mstari una namba ya risiti inayolingana na risiti au karatasi ya mauzo iliyohifadhiwa.",
        exceeds: "Risiti ziko kwenye folda ya mwezi na karatasi zimetunzwa kwenye bahasha inayolingana."
      },
      {
        name: "Imelinganishwa na taarifa",
        objective: "O5",
        notYet: "Leja haikulinganishwa na taarifa.",
        meets: "Mistari ya taarifa iliwekewa alama, mistari iliyokosekana iliongezwa, na salio zinalingana au tofauti imeelezwa.",
        exceeds: "Anaweza kutaja kila tofauti iliyopatikana na jinsi ilivyorekebishwa."
      },
      {
        name: "Taarifa ya faida na hasara imesomwa",
        objective: "O6",
        notYet: "Hakuna P&L, au jumla si sahihi.",
        meets: "P&L yenye jumla za SUMIF, bila mchoto wa mmiliki, na faida au hasara imeonyeshwa.",
        exceeds: "Sentensi mbili zilizo wazi zinasema namba zinamaanisha nini na jambo moja la kubadilisha mwezi ujao."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi ambao bado wanasasisha leja yao kila wiki na kupatanisha hesabu kila mwezi katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaotumia kumbukumbu zao kuomba mkopo au ruzuku, au kuzipeleka kwa mhasibu wakati wa kodi",
      "Wanafunzi wanaoanza kozi nyingine ya biashara ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye spreadsheet ya bure: Google Sheets au Microsoft Excel",
      "Risiti za mwezi mmoja, halisi au za mfano, na taarifa ya benki au ya pesa za simu (au ya mfano)",
      "Kamera ya simu kwa picha za risiti, na bahasha kwa risiti za karatasi",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Andaa mwezi wa mfano wa miamala na taarifa ya mfano kwa wanafunzi wasiotaka kutumia namba zao wenyewe.",
      "Tengenezeni leja na fomula ya salio linaloendelea pamoja kwenye skrini moja, kisha waache wanafunzi wainakili.",
      "Wakumbushe wanafunzi wasibandike namba za akaunti wala taarifa za wateja kwenye zana za AI au skrini za pamoja.",
      "Usitoe ushauri wa kodi; peleka maswali ya kodi kwa mhasibu au mamlaka ya kodi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
