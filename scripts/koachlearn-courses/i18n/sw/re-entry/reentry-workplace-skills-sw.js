"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-workplace-skills.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-workplace-skills-sw",
  lang: "sw",
  translationOf: "reentry-workplace-skills",
  category: "Re-Entry",
  name: "Ujuzi wa Kazini na Kufanya Kazi kwa Ufanisi",
  skills: "Barua pepe na ujumbe wa kikazi, Kuzungumza na msimamizi, Kupanga na kupanga vipaumbele vya siku ya kazi, Kutumia nyaraka na ratiba za pamoja, Kupokea maoni na kushughulikia matatizo, Kufuata sheria za AI kazini",
  outcome: "kuandika ujumbe wazi wa kikazi kwa msimamizi kwa msaada wa AI, kupanga siku ya kazi na kuweka vipaumbele kwa orodha ya kazi, na kufuata sheria za mahali pako pa kazi kuhusu kutumia AI na kulinda taarifa za siri.",
  about: [
    "Kozi hii ni kwa watu wanaorudi nyumbani wanaoanza kazi, au wanaojiandaa kwa kazi. Siku hizi kazi nyingi zinaendeshwa kwa barua pepe, ujumbe mfupi, ratiba za pamoja na nyaraka za kompyuta, na nyingi zinatumia AI. Ujuzi huu unakusaidia kudumu kazini na kukua.",
    "Utafanya mazoezi ya ujumbe wa kikazi, kuzungumza na msimamizi, kupanga zamu yako, kutumia nyaraka na ratiba za pamoja, kupokea maoni, na kutumia AI kazini kwa njia sahihi.",
    "Kila somo linachukua kama dakika tano. Mifano inatoka katika kazi halisi za mwanzo: ghala, jikoni, dukani, usafi, ujenzi na ofisini. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Tumia msaidizi wa AI kuandika barua pepe au ujumbe mfupi wa kikazi kwa msimamizi ukiomba kubadilisha zamu moja, ukiwa na sababu na ukijitolea kusaidia kupata mtu wa kuchukua zamu hiyo. Ufanye usikike kama wewe na uhakikishe hauna taarifa za siri. Kisha tengeneza orodha ya kazi iliyopangwa kwa vipaumbele kwa siku halisi ya kazi au ya mazoezi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaoanza kazi au wanaojiandaa kwa kazi, mara nyingi kazi za mwanzo za ghala, jikoni, dukani, usafi, ujenzi au ofisini.",
    startingPoint: "Wanaweza kutuma ujumbe mfupi na kupiga simu. Hawana uzoefu mwingi wa barua pepe za kazi, ratiba za pamoja, nyaraka za pamoja au kutumia AI kazini. Baadhi hawajiamini wanapozungumza na msimamizi au wanapopokea maoni.",
    gap: "Siku hizi kazi zinaendeshwa kwa ujumbe, ratiba na nyaraka za pamoja, na nyingi zinatumia AI. Wanafunzi wanahitaji kuwasiliana kwa njia ya kikazi, kupanga zamu yao, kupokea maoni na kufuata sheria za AI na faragha ili wadumu kazini na wakue.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja, wakati mwingine kompyuta ya maktaba au ya kazini",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi na miadi",
      "Sheria za kazi: kila mwajiri anaweka sheria zake za AI na faragha",
      "Faragha: hakuna taarifa za siri za wateja, za kampuni au za binafsi katika zana yoyote ya AI"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hali halisi ya kazini", action: "kuandika barua pepe au ujumbe mfupi, wazi na wa kikazi kwa msaada wa AI", standard: "jambo kuu likiwa katika mstari wa kwanza, ukiwa na mwisho wa adabu na sauti yako mwenyewe" },
    { id: "O2", condition: "Ukipewa jambo la kuzungumza na msimamizi", action: "kuandaa na kufanya mazoezi ya mazungumzo mafupi ya heshima", standard: "jambo lako likiwa limeandikwa kwa sentensi moja na kufanyiwa mazoezi angalau mara moja" },
    { id: "O3", condition: "Ukipewa maoni au tatizo kazini", action: "kujibu kwa utulivu na kuripoti tatizo kwa mtu sahihi", standard: "ukieleza kilichotokea, lini na ulichofanya" },
    { id: "O4", condition: "Ukipewa orodha ya kazi za siku ya kazi", action: "kutengeneza orodha ya kazi iliyopangwa katika lazima, inafaa na inawezekana", standard: "kazi zenye muda wa mwisho leo zikiwa juu" },
    { id: "O5", condition: "Ukipewa kiungo cha ratiba au nyaraka ya pamoja", action: "kuifungua, kupata sehemu yako na kuongeza kitu", standard: "bila kubadilisha sehemu zisizo zako" },
    { id: "O6", condition: "Ukipewa sera ya AI ya mahali pako pa kazi", action: "kuchagua kazi gani unaruhusiwa kutumia AI na taarifa gani usiweke", standard: "bila kamwe kuweka taarifa za siri za wateja au za kampuni katika zana ya AI" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuwasiliana kazini",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika ujumbe wa kikazi",
          minutes: 5,
          goal: "Andika barua pepe au ujumbe mfupi, wazi na wa kikazi kwa mtu wa kazini.",
          text: [
            "Kazini, jinsi unavyoandika ni muhimu. Ujumbe wa kikazi ni mfupi, wa adabu na wazi: unasema unachohitaji katika mstari wa kwanza, unatoa sababu ikihitajika, na unamalizia kwa shukrani.",
            "Mpangilio rahisi: salamu, jambo kuu, maelezo moja au mawili, unachoomba, shukrani na jina lako. Kwa mfano: \"Habari Maria, ningependa kubadilisha zamu yangu ya Jumamosi iwe Jumapili wiki hii kwa sababu ya shughuli ya familia. Naweza kusaidia kupata mtu wa kuichukua. Asante, Andre.\"",
            "Msaidizi wa AI anaweza kusaidia: \"Fanya ujumbe huu kwa msimamizi wangu uwe wa kikazi zaidi lakini bado wa kirafiki.\" Kisha usome, ufanye usikike kama wewe, na uangalie tahajia ya majina. Kazini epuka lugha ya mtaani, herufi kubwa zote na emoji nyingi mno."
          ],
          steps: ["Anza kwa salamu na jina la mtu.", "Sema jambo lako katika mstari wa kwanza.", "Ongeza maelezo moja au mawili.", "Sema unachoomba.", "Malizia kwa shukrani na jina lako."],
          words: [["Wa kikazi", "njia ya heshima na wazi ambayo watu huwasiliana nayo kazini."], ["Msimamizi", "mtu anayeongoza kazi yako na ratiba yako."]],
          slides: [
            { title: "Mfupi, wa adabu, wazi", bullets: ["Jambo kuu kwanza", "Sababu ikihitajika", "Malizia kwa shukrani"] },
            { title: "Mpangilio rahisi", bullets: ["Salamu, jambo kuu, maelezo", "Unachoomba", "Shukrani na jina lako"] },
            { title: "AI inaweza kuuboresha", bullets: ["\"Ufanye uwe wa kikazi zaidi lakini wa kirafiki.\"", "Ufanye usikike kama wewe", "Bila lugha ya mtaani, herufi kubwa zote au emoji nyingi"] }
          ],
          tryIt: "Andika rasimu ya ujumbe kwa msimamizi ukiuliza swali kuhusu ratiba yako. Muombe msaidizi wa AI aufanye uwe wa kikazi zaidi lakini wa kirafiki, kisha fanya badiliko moja ili usikike kama wewe.",
          youCanNow: "kuandika ujumbe mfupi wa kikazi kwa mtu wa kazini.",
          quickCheck: [
            { objective: "O1", q: "Mstari wa kwanza wa ujumbe wa kazi unapaswa kufanya nini?", options: ["Kusema jambo kuu", "Kusimulia hadithi ndefu", "Kuomba msamaha mara nyingi", "Kuorodhesha kazi zako za zamani"], answer: 0, why: "Kuweka jambo kuu kwanza kunafanya ujumbe wa kazi usomeke haraka." },
            { objective: "O1", q: "AI imefanya ujumbe wako kwa msimamizi kuwa rasmi sana na mrefu. Ungefanya nini?", options: ["Kuutuma kama ulivyo", "Kuomba AI iurefushe zaidi", "Kuufupisha na kubadilisha maneno ili usikike kama wewe", "Kuutuma bila jina lako"], answer: 2, why: "Ujumbe mzuri wa kazi ni mfupi, wa adabu na kwa sauti yako mwenyewe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuzungumza na msimamizi wako",
          minutes: 5,
          goal: "Jiandae na fanya mazungumzo mafupi ya heshima na msimamizi.",
          text: [
            "Mambo mengine ni bora kuyasema ana kwa ana: kuomba msaada, kueleza kosa, au kuuliza kuhusu saa zaidi za kazi. Maandalizi kidogo yanarahisisha.",
            "Kabla hujazungumza, andika jambo lako kwa sentensi moja na kile unachotumaini kitatokea. Chagua wakati wa utulivu na uulize, \"Una dakika mbili?\" Ongea kwa uwazi, sikiliza kikamilifu, na urudie ulichosikia: \"Kwa hiyo unataka nimalize bidhaa zilizorudishwa kabla ya kujaza rafu. Nimeelewa.\"",
            "Unaweza kufanya mazoezi na AI: \"Jifanye wewe ni msimamizi wangu katika ghala. Nataka kuomba saa zaidi. Niulize maswali, kisha niambie nilivyofanya.\""
          ],
          steps: ["Andika jambo lako kwa sentensi moja.", "Chagua wakati wa utulivu na uulize kama ana dakika moja.", "Ongea kwa uwazi na sikiliza kikamilifu.", "Rudia ulichosikia.", "Ukipenda, fanya mazoezi kwanza na AI."],
          words: [["Kurudia ulichosikia", "kusema kwa maneno yako mwenyewe kile mtu alichokuambia, ili uhakikishe umeelewa."], ["Kuigiza (role-play)", "kufanya mazoezi ya mazungumzo kwa kuyaigiza."]],
          slides: [
            { title: "Mambo mengine husemwa ana kwa ana", bullets: ["Kuomba msaada", "Kueleza kosa", "Kuomba saa zaidi"] },
            { title: "Jinsi ya kufanya", bullets: ["Jambo lako kwa sentensi moja", "Chagua wakati wa utulivu", "Sikiliza, kisha rudia ulichosikia"] },
            { title: "Fanya mazoezi na AI", bullets: ["\"Jifanye wewe ni msimamizi wangu.\"", "Omba maoni juu ya ulivyofanya"] }
          ],
          tryIt: "Muombe msaidizi wa AI aigize kama msimamizi wako wakati unaomba saa zaidi. Fanya mazungumzo, kisha muombe vidokezo viwili vya kufanya vizuri zaidi.",
          youCanNow: "kujiandaa na kufanya mazungumzo ya heshima na msimamizi.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini uandike jambo lako kwa sentensi moja kabla ya kuzungumza na msimamizi?", options: ["Ili umsomee neno kwa neno", "Ili ujue hasa unachotaka kusema", "Ili uitume badala ya kuzungumza", "Ili uache mazungumzo"], answer: 1, why: "Sentensi moja wazi inakusaidia kubaki kwenye jambo lako katika mazungumzo." },
            { objective: "O2", q: "Msimamizi wako anaonekana ana shughuli nyingi na msongo. Ungefanya nini?", options: ["Kuanza kuongea mara moja", "Kutuma ujumbe wa hasira", "Kumwomba mfanyakazi mwenzako akuongelee", "Kusubiri wakati wa utulivu na kuuliza kama ana dakika moja"], answer: 3, why: "Wakati wa utulivu na kuuliza kwanza kunaonyesha heshima na kunaleta matokeo bora." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupokea maoni na kushughulikia matatizo",
          minutes: 5,
          goal: "Jibu maoni kwa utulivu na uripoti tatizo kwa njia sahihi.",
          text: [
            "Maoni ni taarifa kuhusu jinsi unavyofanya kazi. Hata yakiwa magumu kusikia, ndiyo njia watu wanavyoboreka na kuaminiwa kwa mambo zaidi. Sikiliza, sema asante, uliza swali kama kitu hakijaeleweka, na onyesha kuwa unalifanyia kazi.",
            "Matatizo hutokea: utachelewa, umefanya kosa, mashine imeharibika, mfanyakazi mwenzako analeta shida. Liripoti mapema, kwa mtu sahihi, kwa ukweli: kilichotokea, lini, na ulichofanya. \"Nimeangusha kasha la chupa za glasi katika njia namba 4 saa 8 mchana (2 pm). Nimezuia eneo hilo na nimeleta ufagio. Nimwambie nani kwa ajili ya hesabu ya bidhaa?\"",
            "Ukihisi hasira, vuta pumzi kabla ya kujibu. Unaweza kusema, \"Niache nilifikirie hilo kisha nitakurudia.\" Tumia AI kukusaidia kupanga jibu la utulivu, si kutuma jibu ukiwa na hasira."
          ],
          steps: ["Sikiliza bila kubishana.", "Sema asante na uliza maswali ikihitajika.", "Ripoti matatizo mapema, kwa ukweli.", "Vuta pumzi ukihisi hasira.", "Fuatilia ulichosema utafanya."],
          words: [["Maoni (feedback)", "taarifa kuhusu jinsi unavyofanya kazi, ili kukusaidia kuboreka."], ["Kuripoti", "kumwambia mtu sahihi kilichotokea."]],
          slides: [
            { title: "Maoni yanakusaidia kukua", bullets: ["Sikiliza, sema asante", "Uliza swali kama haijaeleweka", "Onyesha unalifanyia kazi"] },
            { title: "Ripoti matatizo mapema", bullets: ["Kwa mtu sahihi", "Nini, lini, ulichofanya"] },
            { title: "Baki mtulivu", bullets: ["Vuta pumzi", "\"Niache nifikirie kisha nitakurudia.\"", "Tumia AI kupanga jibu la utulivu"] }
          ],
          tryIt: "Muulize msaidizi wa AI: \"Msimamizi wangu amesema nahitaji kufanya kazi haraka zaidi kwenye mstari wa uzalishaji. Nisaidie kupanga jibu tulivu na chanya na njia mbili za kuboreka.\" Andika jibu ambalo ungetumia.",
          youCanNow: "kujibu maoni kwa utulivu na kuripoti tatizo kwa uwazi.",
          quickCheck: [
            { objective: "O3", q: "Maoni kazini ni nini?", options: ["Adhabu", "Taarifa kuhusu jinsi unavyofanya kazi", "Nyongeza ya mshahara", "Malalamiko ya mteja tu"], answer: 1, why: "Maoni ni taarifa kuhusu jinsi unavyofanya kazi ili uweze kuboreka." },
            { objective: "O3", q: "Umeangusha boksi na kuvunja kilichokuwa ndani. Ungefanya nini?", options: ["Kuficha na kutumaini hakuna atakayegundua", "Kumlaumu mfanyakazi mwenzako", "Kuripoti mapema kwa mtu sahihi kwa ukweli", "Kusubiri hadi mwisho wa wiki"], answer: 2, why: "Kuripoti mapema na kwa ukweli kunaonyesha uaminifu na kunasaidia kutatua tatizo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuwasiliana kazini",
        questions: [
          { objective: "O1", q: "Jambo kuu liwe wapi katika ujumbe wa kazi?", options: ["Popote pasipo", "Mwisho kabisa", "Katika mstari wa kwanza", "Katika ujumbe tofauti"], answer: 2, why: "Wasimamizi wenye shughuli nyingi husoma mstari wa kwanza kwanza." },
          { objective: "O1", q: "Upi ni wa kikazi zaidi?", options: ["\"Habari Maria, naweza kubadilisha Jumamosi iwe Jumapili wiki hii? Naweza kusaidia kupata mtu wa kuchukua zamu. Asante, Andre\"", "\"oya siji jmosi\"", "\"SIJI JUMAMOSI\"", "\"??\""], answer: 0, why: "Ni wa adabu, wazi na unatoa msaada." },
          { objective: "O2", q: "\"Kurudia ulichosikia\" maana yake nini?", options: ["Kuondoka", "Kusema kwa sauti zaidi", "Kubishana", "Kusema kwa maneno yako mwenyewe ulichosikia"], answer: 3, why: "Kunaonyesha umeelewa." },
          { objective: "O3", q: "Msimamizi wako anakupa maoni magumu. Jibu zuri la kwanza ni:", options: ["Kubishana mara moja", "Kusikiliza na kusema asante", "Kuacha kazi", "Kupuuza"], answer: 1, why: "Kusikiliza kunaonyesha unaweza kukua." },
          { objective: "O3", q: "Umevunja kitu kazini. Unafanya nini?", options: ["Kukificha", "Kuripoti mapema kwa mtu sahihi kwa ukweli", "Kumlaumu mfanyakazi mwenzako", "Kusubiri hadi mtu agundue"], answer: 1, why: "Ripoti za mapema na za ukweli hujenga uaminifu." }
        ]
      }
    },
    {
      name: "Sura 2: Kumaliza kazi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga siku yako ya kazi na kuweka vipaumbele",
          minutes: 5,
          goal: "Tengeneza orodha ya kazi na uweke kazi muhimu zaidi kwanza.",
          text: [
            "Orodha ya kazi inakuzuia kusahau kazi na inakusaidia kufanya zile muhimu zaidi kwanza. Hiyo inaitwa kuweka vipaumbele.",
            "Andika kila kazi. Kisha weka alama kwa kila moja: Lazima leo (muda wa mwisho, usalama, alichoomba msimamizi wako), Inafaa, na Inawezekana kama muda upo. Anza na kazi za lazima. Kama huna uhakika ni ipi muhimu zaidi, muulize msimamizi wako; hilo ni swali la busara, si udhaifu.",
            "AI inaweza kusaidia kupanga orodha: \"Hizi ni kazi zangu za zamu yangu katika duka la vyakula. Zipange kwa umuhimu na ueleze kwa nini.\" Linganisha mpangilio wake na alichosema msimamizi wako."
          ],
          steps: ["Andika kila kazi.", "Weka alama kwa kila moja: lazima, inafaa au inawezekana.", "Fanya kazi za lazima kwanza.", "Muulize msimamizi wako kama huna uhakika.", "Weka alama ya tiki kwa kazi unazomaliza."],
          words: [["Kuweka vipaumbele", "kuamua kazi zipi ni muhimu zaidi na kuzifanya kwanza."], ["Muda wa mwisho", "wakati ambao kitu lazima kiwe kimekamilika."]],
          slides: [
            { title: "Orodha ya kazi inasaidia", bullets: ["Hakuna kinachosahaulika", "Mambo muhimu kwanza"] },
            { title: "Lazima, inafaa, inawezekana", bullets: ["Lazima: muda wa mwisho, usalama, maombi ya msimamizi", "Inafaa: muhimu, haina haraka sana", "Inawezekana: kama muda upo"] },
            { title: "AI inaweza kuipanga", bullets: ["\"Panga kazi zangu kwa umuhimu.\"", "Linganisha na alichosema msimamizi"] }
          ],
          tryIt: "Andika kazi sita kutoka zamu halisi au ya kufikirika. Weka alama kwa kila moja: lazima, inafaa au inawezekana. Muombe msaidizi wa AI azipange, na ulinganishe na mpangilio wako.",
          youCanNow: "kupanga siku ya kazi na kufanya kazi muhimu zaidi kwanza.",
          quickCheck: [
            { objective: "O4", q: "Katika orodha ya lazima, inafaa, inawezekana, kazi zipi zinaenda chini ya \"lazima\"?", options: ["Kazi ambazo ni lazima zifanywe leo", "Kazi unazopenda zaidi", "Kazi rahisi zaidi", "Kazi za mwezi ujao"], answer: 0, why: "Kazi za lazima ni zile ambazo ni lazima zifanywe leo, mara nyingi zikiwa na muda wa mwisho." },
            { objective: "O4", q: "Kazi mbili zote zinaonekana za haraka na huna uhakika ipi ianze. Ungefanya nini?", options: ["Kufanya iliyo rahisi", "Kutofanya yoyote", "Kufanya zote nusu nusu", "Kumuuliza msimamizi wako ipi ni muhimu zaidi"], answer: 3, why: "Usipokuwa na uhakika kipi ni muhimu zaidi, unamuuliza msimamizi wako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ratiba na nyaraka za pamoja",
          minutes: 6,
          goal: "Fungua ratiba au nyaraka ya pamoja, tafuta sehemu yako, na uongeze kitu.",
          text: [
            "Kazi nyingi zinashiriki ratiba na nyaraka mtandaoni. Zamu zako zinaweza kuwa katika app ya ratiba anayochagua mwajiri wako; orodha za kukagua na fomu zinaweza kuwa katika Google Docs, Google Sheets, Microsoft Word au Excel.",
            "Mtu akishiriki nyaraka nawe, unapata kiungo kwa barua pepe au ujumbe mfupi. Kibonyeze, ingia (sign in) ukiombwa, na utafute sehemu yako. Unaweza kuandika ndani ya nyaraka, na wengine wanaona mabadiliko. Maoni (comment) yanakuruhusu kuuliza swali bila kubadilisha maandishi: chagua maneno na uchague Comment.",
            "Angalia app yako ya ratiba kila siku, na zamu ikibadilika, thibitisha na msimamizi wako. Kamwe usibadilishe kitu katika nyaraka ya pamoja ambacho si chako kubadilisha; uliza kwanza."
          ],
          steps: ["Bonyeza kiungo cha pamoja kutoka barua pepe au ujumbe mfupi.", "Ingia (sign in) ukiombwa.", "Tafuta sehemu yako ya nyaraka au ratiba.", "Andika taarifa yako, au ongeza maoni (comment) kuuliza swali.", "Angalia ratiba yako kila siku na uthibitishe mabadiliko."],
          words: [["Nyaraka ya pamoja", "faili la mtandaoni ambalo watu kadhaa wanaweza kulifungua na kulihariri."], ["Maoni (comment)", "dokezo linaloongezwa kando ya maandishi, linalotumika kuuliza au kujibu maswali."]],
          slides: [
            { title: "Kazi inashirikiwa mtandaoni", bullets: ["Ratiba katika app", "Docs na Sheets, Word na Excel"] },
            { title: "Kutumia nyaraka ya pamoja", bullets: ["Bonyeza kiungo, ingia", "Tafuta sehemu yako", "Andika, au ongeza maoni (comment)"] },
            { title: "Tabia nzuri", bullets: ["Angalia ratiba yako kila siku", "Thibitisha mabadiliko na msimamizi wako", "Badilisha kilicho chako tu"] }
          ],
          tryIt: "Tengeneza Google Doc au nyaraka ya Word ya bure inayoitwa \"Wiki yangu ya kazi\". Andika zamu zako za wiki moja, ongeza maoni (comment) moja kama swali, na ufanye mazoezi ya kuishiriki kwa kiungo na mwanafamilia au na wewe mwenyewe.",
          youCanNow: "kutumia ratiba na nyaraka za pamoja na kuongeza vitu ndani yake ipasavyo.",
          quickCheck: [
            { objective: "O5", q: "Kwa kawaida unaingiaje katika nyaraka ya pamoja?", options: ["Kwa kuinunua", "Kwa kiungo kilichotumwa kwa barua pepe au ujumbe mfupi", "Kwa kuichapisha", "Kwa kupiga simu kampuni"], answer: 1, why: "Nyaraka ikishirikiwa nawe, kwa kawaida unapata kiungo." },
            { objective: "O5", q: "Unaona kosa katika sehemu ya mfanyakazi mwenzako kwenye ratiba ya pamoja. Ungefanya nini?", options: ["Kulibadilisha mwenyewe", "Kufuta sehemu yake", "Kuongeza maoni (comment) au kumuuliza kuhusu hilo", "Kulipuuza milele"], answer: 2, why: "Hubadilishi sehemu zisizo zako; unaandika maoni au unauliza kwanza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutumia AI kazini kwa njia sahihi",
          minutes: 5,
          goal: "Fuata sheria za AI za mahali pako pa kazi na uweke taarifa za kampuni na za wateja kuwa siri.",
          text: [
            "Mahali pengi pa kazi panatumia AI, na pengi pana sheria kuihusu. Baadhi wanaruhusu zana fulani; wengine hawaruhusu AI kabisa kwa kazi fulani. Kila mara muulize msimamizi wako kinachoruhusiwa kabla ya kutumia AI kwa kazi.",
            "Kamwe usiweke taarifa za siri za kazi katika zana ya AI ya umma: majina ya wateja, anwani zao au taarifa za malipo, taarifa za wafanyakazi wenzako, bei au mipango isiyo ya umma, au nywila. Hilo linaweza kuvunja sheria za kampuni na sheria za nchi.",
            "Tumia AI kwa mambo kama kuboresha maandishi yako mwenyewe, kueleza neno, au kufanya mazoezi ya mazungumzo. Kagua inachosema, na uwe mkweli kama uliitumia kwa kitu unachokabidhi."
          ],
          steps: ["Muulize msimamizi wako matumizi gani ya AI yanaruhusiwa.", "Kamwe usiweke taarifa za siri za wateja, za wafanyakazi wenzako au za kampuni katika AI.", "Tumia AI kwa maandishi yako na kujifunza kwako.", "Kagua majibu yake.", "Kuwa mkweli kuhusu kuitumia."],
          words: [["Siri (confidential)", "taarifa za faragha ambazo hazipaswi kutolewa nje ya kampuni."], ["Sera (policy)", "sheria iliyoandikwa mahali pa kazi."]],
          slides: [
            { title: "Uliza kwanza", bullets: ["Mahali pa kazi pana sheria za AI", "Muulize msimamizi kinachoruhusiwa"] },
            { title: "Kamwe usiweke katika AI", bullets: ["Majina ya wateja au taarifa za malipo", "Taarifa za wafanyakazi wenzako", "Mipango ya kampuni, bei au nywila"] },
            { title: "Matumizi mazuri", bullets: ["Kuboresha maandishi yako mwenyewe", "Kueleza neno", "Kufanya mazoezi ya mazungumzo"] }
          ],
          tryIt: "Kazi ya mwisho: muombe msaidizi wa AI akusaidie kuandika ujumbe mfupi wa kikazi kwa msimamizi ukiomba kubadilisha zamu moja, ukiwa na sababu na ukijitolea kusaidia kupata mtu wa kuichukua. Ufanye usikike kama wewe na uhakikishe hauna taarifa za siri. Kisha tengeneza orodha ya kazi iliyopangwa kwa vipaumbele kwa siku ya kazi.",
          youCanNow: "kuwasiliana kwa njia ya kikazi, kupanga kazi yako, kutumia zana za pamoja, na kutumia AI kazini kwa njia sahihi.",
          quickCheck: [
            { objective: "O6", q: "Sera ya mahali pa kazi ni nini?", options: ["Sheria iliyoandikwa kazini", "Maoni ya mfanyakazi mwenzako", "Tathmini ya mteja", "Aina ya app ya ratiba"], answer: 0, why: "Sera ni sheria iliyoandikwa ambayo mahali pako pa kazi panatarajia uifuate." },
            { objective: "O6", q: "Unataka AI ikusaidie kujibu malalamiko ya mteja yenye namba yake ya simu. Ungefanya nini?", options: ["Kubandika yote katika zana ya AI ya umma", "Kuangalia sera ya AI na kuacha nje taarifa za mteja", "Kuweka malalamiko mtandaoni kuomba ushauri", "Kumtumia rafiki namba ya mteja"], answer: 1, why: "Fuata sheria za AI za mahali pako pa kazi na uweke taarifa za mteja kuwa siri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kumaliza kazi",
        questions: [
          { objective: "O4", q: "\"Kuweka vipaumbele\" maana yake nini?", options: ["Kufanya kazi bila mpangilio", "Kufanya kazi rahisi tu", "Kuruka kazi", "Kufanya kazi muhimu zaidi kwanza"], answer: 3, why: "Kuweka vipaumbele kunaweka kazi muhimu kwanza." },
          { objective: "O4", q: "Kazi ipi ni ya \"lazima leo\"?", options: ["Alichoomba msimamizi wako chenye muda wa mwisho leo", "Kitu unachoweza kufanya mwezi ujao", "Kupanga kabati lako kwa kujifurahisha", "Hakuna"], answer: 0, why: "Muda wa mwisho na maombi ya msimamizi yanakuja kwanza." },
          { objective: "O5", q: "Unataka kuuliza swali kuhusu mstari mmoja katika nyaraka ya pamoja. Wewe:", options: ["Unauandika upya bila kuuliza", "Unafuta mstari huo", "Unaongeza maoni (comment)", "Unaupuuza"], answer: 2, why: "Maoni yanauliza bila kubadilisha maandishi." },
          { objective: "O6", q: "Unaweza kubandika jina la mteja na namba ya kadi yake katika zana ya AI ya umma?", options: ["Tu kama AI inaomba", "Ndiyo, ili kuokoa muda", "Wikendi tu", "Hapana, kamwe"], answer: 3, why: "Taarifa za mteja ni siri." },
          { objective: "O6", q: "Kabla ya kutumia AI kwa kazi, unapaswa:", options: ["Kuificha", "Kudhani ni sawa tu", "Kumuuliza msimamizi wako kinachoruhusiwa", "Kutumia zana yoyote unayopenda"], answer: 2, why: "Mahali pa kazi pana sheria zao wenyewe za AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujuzi wa Kazini na Kufanya Kazi kwa Ufanisi",
    questions: [
      { objective: "O1", q: "Ujumbe wa kikazi ni:", options: ["Mrefu na wenye lugha ya mtaani", "Mfupi, wa adabu na wazi", "Wa herufi kubwa zote", "Wa emoji zaidi"], answer: 1, why: "Ujumbe wazi na wa heshima hufanya kazi vizuri zaidi." },
      { objective: "O1", q: "Ujumbe mzuri wa kazi unamalizika kwa:", options: ["Shukrani na jina lako", "Hakuna kitu", "Utani", "Namba yako ya Social Security"], answer: 0, why: "Shukrani na jina ni adabu na ni wazi." },
      { objective: "O1", q: "AI inaweza kusaidia ujumbe wa kazi kwa:", options: ["Kuufanya uwe wa kikazi zaidi huku ukibaki na sauti yako", "Kuutuma bila wewe kuusoma", "Kuongeza taarifa za siri", "Kuurefusha"], answer: 0, why: "AI inaboresha; wewe unakagua na kuufanya uwe wako." },
      { objective: "O2", q: "Msimamizi ni:", options: ["Mfanyakazi mwenzako wa ngazi yako", "Mtu anayeongoza kazi yako", "Mteja", "Dereva wa kusafirisha mizigo"], answer: 1, why: "Wasimamizi wanasimamia kazi na ratiba." },
      { objective: "O2", q: "Kabla ya kuzungumza na msimamizi, andika:", options: ["Hakuna kitu", "Hotuba ndefu", "Jambo lako kwa sentensi moja", "Malalamiko kuhusu wafanyakazi wenzako"], answer: 2, why: "Sentensi moja wazi inakuweka kwenye lengo." },
      { objective: "O2", q: "Wakati mzuri wa kuzungumza na msimamizi ni:", options: ["Kamwe", "Wakati wa msongamano wa kazi", "Akiwa na mteja", "Wakati wa utulivu, baada ya kuuliza kama ana dakika moja"], answer: 3, why: "Wakati wa utulivu huleta matokeo bora." },
      { objective: "O2", q: "Kuigiza na AI kunakusaidia:", options: ["Kupata nyongeza ya mshahara moja kwa moja", "Kuepuka mazungumzo yote", "Kufanya mazoezi ya mazungumzo kabla hayajatokea", "Kukosa kazini"], answer: 2, why: "Mazoezi yanajenga kujiamini." },
      { objective: "O3", q: "Maoni (feedback) ni:", options: ["Taarifa kuhusu jinsi unavyofanya kazi", "Adhabu", "Mshahara", "Ratiba"], answer: 0, why: "Maoni yanakusaidia kuboreka." },
      { objective: "O3", q: "Unaporipoti tatizo, eleza:", options: ["Uvumi", "Nani wa kulaumiwa", "Hakuna kitu", "Kilichotokea, lini, na ulichofanya"], answer: 3, why: "Ukweli husaidia kutatua tatizo." },
      { objective: "O3", q: "Ukihisi hasira kazini, jibu zuri ni:", options: ["Kupiga kelele", "\"Niache nilifikirie hilo kisha nitakurudia.\"", "Kuondoka kazini", "Kutuma ujumbe wa hasira"], answer: 1, why: "Kuchukua muda kunaweka mambo shwari." },
      { objective: "O4", q: "Muda wa mwisho ni:", options: ["Mapumziko", "Wakati ambao kitu lazima kiwe kimekamilika", "Siku ya kupumzika", "Tarehe ya mshahara"], answer: 1, why: "Muda wa mwisho unaonyesha kazi inatakiwa lini." },
      { objective: "O4", q: "Katika lazima, inafaa, inawezekana, unaanza na:", options: ["Chochote kinachofurahisha", "Inawezekana", "Inafaa", "Lazima"], answer: 3, why: "Kazi za lazima zinakuja kwanza." },
      { objective: "O4", q: "Kama huna uhakika kipi ni muhimu zaidi, wewe:", options: ["Unamuuliza msimamizi wako", "Unakisia na kutumaini", "Hufanyi chochote", "Unamuuliza mteja"], answer: 0, why: "Kuuliza ni busara, si udhaifu." },
      { objective: "O5", q: "Nyaraka ya pamoja ni:", options: ["Nywila", "Karatasi katika kabati lako", "Faili la mtandaoni ambalo watu kadhaa wanaweza kulihariri", "Shajara ya siri"], answer: 2, why: "Nyaraka za pamoja zinahaririwa pamoja." },
      { objective: "O5", q: "Nyaraka ikishirikiwa nawe, kwa kawaida unapata:", options: ["Hakuna kitu", "Barua kwa posta", "Simu tu", "Kiungo kwa barua pepe au ujumbe mfupi"], answer: 3, why: "Viungo vinafungua faili za pamoja." },
      { objective: "O5", q: "Je, ubadilishe sehemu za nyaraka ya pamoja zisizo zako?", options: ["Usiku tu", "Ndiyo, wakati wowote", "Hapana; uliza kwanza", "Ukichoka tu"], answer: 2, why: "Heshimu kazi ya wengine." },
      { objective: "O5", q: "Unapaswa kuangalia app yako ya ratiba mara ngapi?", options: ["Mara moja kwa mwaka", "Kila siku", "Kamwe", "Ukifukuzwa kazi tu"], answer: 1, why: "Zamu zinaweza kubadilika." },
      { objective: "O6", q: "Taarifa za \"siri\" (confidential) ni:", options: ["Za faragha na hazipaswi kutolewa nje ya kampuni", "Habari za umma", "Hali ya hewa", "Wimbo unaoupenda"], answer: 0, why: "Zinabaki ndani ya kampuni." },
      { objective: "O6", q: "Matumizi mazuri ya AI kazini, kama yanaruhusiwa, ni:", options: ["Kuboresha maandishi yako mwenyewe", "Kubandika taarifa za malipo za wateja", "Kushiriki anwani za wafanyakazi wenzako", "Kuweka mipango ya kampuni mtandaoni"], answer: 0, why: "Maandishi yako mwenyewe hayana taarifa za siri." },
      { objective: "O6", q: "\"Sera\" (policy) ya mahali pa kazi ni:", options: ["Aina ya bima tu", "Sheria iliyoandikwa kazini", "Mfanyakazi mwenzako", "Mapumziko ya chakula cha mchana"], answer: 1, why: "Sera zinaweka sheria za kazini, pamoja na kuhusu AI." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      7,
      8,
      10,
      11,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ombi lililo wazi",
        objective: "O1",
        notYet: "Ujumbe hausemi ni zamu ipi au kwa nini, au jambo kuu limefichika.",
        meets: "Mstari wa kwanza unaomba kubadilisha zamu iliyotajwa, ukiwa na sababu fupi.",
        exceeds: "Ni mfupi kiasi cha kusomwa kwa sekunde chache na unamalizika kwa shukrani na jina lako."
      },
      {
        name: "Kujitolea kusaidia",
        objective: "O1",
        notYet: "Hakuna kujitolea kusaidia kupata mtu wa kuchukua zamu.",
        meets: "Anajitolea kusaidia kupata mtu wa kuchukua zamu hiyo.",
        exceeds: "Anataja mfanyakazi mwenzake anayeweza kuchukua zamu au wakati wa kuzungumzia hilo."
      },
      {
        name: "Unasikika kama wewe, bila taarifa za siri",
        objective: "O6",
        notYet: "Unatumia maneno ambayo mwanafunzi hangeyasema, au una taarifa za siri.",
        meets: "Wa adabu, kwa maneno ya mwanafunzi mwenyewe, bila taarifa za siri.",
        exceeds: "Mwanafunzi alibadilisha mwenyewe baadhi ya maneno ya AI na anaweza kueleza kwa nini."
      },
      {
        name: "Orodha ya kazi yenye vipaumbele",
        objective: "O4",
        notYet: "Kazi hazina mpangilio, au kazi zenye muda wa mwisho haziko kwanza.",
        meets: "Kazi zimepangwa katika lazima, inafaa na inawezekana, kazi zenye muda wa mwisho leo zikiwa kwanza.",
        exceeds: "Pia inaonyesha nani wa kuuliza kama vipaumbele havieleweki."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa jedwali la tathmini)",
      "Wanafunzi ambao bado wameajiriwa siku 90 baada ya kuanza kazi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kutuma ujumbe wa kikazi au kutumia ratiba ya pamoja ndani ya siku 30",
      "Ripoti za waajiri au washirika wa programu za kurudi katika jamii kuhusu mawasiliano bora ya wahitimu wa programu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya programu",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Zana ya bure ya nyaraka au ratiba ya pamoja kwa mazoezi, kama Google Docs",
      "Karatasi na kalamu kwa orodha ya kazi",
      "Kama dakika 60 kwa jumla, kwa vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Baada ya Somo la 2, waache wanafunzi waigize mazungumzo na msimamizi wakiwa wawili wawili; kunajenga kujiamini haraka.",
      "Tumieni majina ya mazoezi na zamu za kubuni; kamwe si taarifa za siri za wateja au wafanyakazi wenzako halisi.",
      "Wakumbushe wanafunzi kwamba kila mwajiri ana sera yake ya AI na kwamba wanapaswa kuuliza kabla ya kutumia AI kazini.",
      "Andaa nyaraka moja ya pamoja ya mazoezi ili wanafunzi waongeze vitu bila kubadilisha sehemu za wengine.",
      "Pima kazi ya mwisho kwa jedwali la tathmini, na toa maoni juu ya mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
