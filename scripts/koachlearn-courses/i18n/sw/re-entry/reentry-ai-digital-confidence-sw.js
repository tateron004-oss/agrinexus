"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-ai-digital-confidence.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-ai-digital-confidence-sw",
  lang: "sw",
  translationOf: "reentry-ai-digital-confidence",
  category: "Re-Entry",
  name: "Utangulizi wa AI na Kujiamini katika Teknolojia",
  skills: "Kufungua msaidizi wa AI wa bure, Kuuliza maswali yaliyo wazi, Kuboresha jibu, Kukagua jibu, Kulinda taarifa zako binafsi",
  outcome: "kutumia msaidizi wa AI wa bure kwenye simu au kompyuta ya maktaba kupata msaada kwa kazi ya kila siku: kuuliza swali lililo wazi, kuboresha jibu, kulikagua kabla ya kuliamini, na kutoweka taarifa zako binafsi ndani yake.",
  about: [
    "Huenda teknolojia imebadilika sana ukiwa mbali. Kozi hii inaanza mwanzo kabisa na inaenda hatua moja ndogo kwa wakati.",
    "Utajifunza msaidizi wa AI ni nini, jinsi ya kufungua mmoja bure, jinsi ya kuuomba msaada, jinsi ya kukagua unachoambiwa, na jinsi ya kulinda taarifa zako binafsi.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tumia msaidizi wa AI kuandika ujumbe mfupi wa adabu unaouliza biashara kama inaajiri watu. Uombe kwa maneno rahisi, omba badiliko moja la kuuboresha, hakikisha hauna taarifa binafsi, na uusome kwa sauti ili uhakikishe unasikika kama wewe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii). Wengi walikuwa mbali kwa miaka wakati simu janja na zana za AI zilibadilika; wengine hawajawahi kutumia simu janja. Umri unatofautiana sana, na wengi wanatafuta kazi na makazi na wanaungana tena na familia zao.",
    startingPoint: "Wanaweza kupiga simu na kutuma ujumbe mfupi kwenye simu ya kawaida. Wanatumia kidogo au hawatumii kabisa programu (apps), vivinjari vya wavuti au wasaidizi wa AI. Baadhi hawajiamini katika kusoma au katika teknolojia.",
    gap: "Waajiri, ofisi za makazi na huduma nyingine sasa zinatarajia watu wafanye mambo mtandaoni. Wanafunzi wanahitaji kutumia msaidizi wa AI wa bure kwa usalama kwa msaada wa kila siku (ujumbe, kueleza barua, orodha za kukagua) bila kudanganywa na majibu yasiyo sahihi au ulaghai. Kufanya hivi kunajenga kujiamini na kuharakisha utafutaji wa kazi na makazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: huenda wana simu ya kawaida tu au kompyuta ya maktaba yenye muda mfupi",
      "Muda: masomo ya dakika 4 hadi 5 yanayoingia kati ya miadi na kazi",
      "Masharti ya baadhi ya parole au probation yanazuia matumizi ya intaneti; kila mwanafunzi anafuata masharti yake",
      "Hatari kubwa ya ulaghai na faragha: hakuna namba halisi za binafsi katika zoezi lolote"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao hawajawahi kutumia skrini ya kugusa wanaweza kuanza na kozi \"Kutumia Simu Janja na Tableti\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi tano", action: "kutambua kazi za kila siku ambazo msaidizi wa AI anaweza kusaidia na zipi zinahitaji mtu au chanzo rasmi", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia simu au kompyuta ya maktaba", action: "kufungua msaidizi wa AI wa bure kutoka kwenye app au tovuti yake rasmi, kutuma ujumbe wa kwanza na kutoka (sign out) unapomaliza", standard: "bila msaada" },
    { id: "O3", condition: "Ukipewa kazi halisi kutoka maisha yako", action: "kuandika prompt inayosema unachohitaji, hali yako na jinsi unavyotaka jibu", standard: "ili jibu la kwanza liwe na manufaa" },
    { id: "O4", condition: "Ukipewa jibu la AI ambalo si sahihi kabisa", action: "kuomba mabadiliko kwa maswali ya kufuatilia, moja baada ya jingine", standard: "hadi liwe fupi, wazi na linalofaa hitaji lako, kwa majaribio yasiyozidi matatu" },
    { id: "O5", condition: "Ukipewa jibu la AI lenye ukweli kama namba ya simu, anwani au sheria", action: "kukagua ukweli huo kwenye tovuti rasmi (.gov au tovuti ya shirika lenyewe)", standard: "kabla ya kuutumia" },
    { id: "O6", condition: "Unapoandika prompt au unapopokea ujumbe wa haraka", action: "kuzuia taarifa binafsi zisiingie na kutambua dalili za hatari za ulaghai", standard: "bila kutoa namba za binafsi, nywila wala misimbo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuanza kutumia AI",
      lessons: [
        {
          title: "Msaidizi wa AI ni nini, na si nini",
          objectives: ["O1"],
          minutes: 4,
          goal: "Eleza kwa maneno yako mwenyewe kile msaidizi wa AI anachoweza na asichoweza kufanya.",
          text: [
            "Msaidizi wa AI ni programu ya kompyuta unayoweza kuiandikia au kuongea nayo kwa maneno ya kawaida. Unauliza swali, nayo inaandika jibu. Wanaojulikana na walio bure ni pamoja na ChatGPT, Microsoft Copilot na Google Gemini.",
            "Ulijifunza kutoka kwa maandishi mengi sana, kwa hiyo ni hodari wa kueleza mambo, kuandika rasimu, kutengeneza orodha na mipango, na kugeuza maneno magumu kuwa maneno rahisi.",
            "Si mtu, si wakili, si daktari wala si ofisi ya serikali. Haukujui, na unaweza kukosea hata unaposikika kuwa na uhakika. Wewe ndiye unayeongoza: wewe unaamua cha kuuliza, na wewe unaamua cha kuamini."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu, kama kuandika au kujibu maswali."], ["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea."]],
          slides: [
            { title: "Msaidizi wa AI ni...", bullets: ["Programu ya kompyuta unayozungumza nayo", "Unaandika au kusema swali kwa maneno ya kawaida", "Inaandika jibu kwa sekunde chache"] },
            { title: "Ni hodari wa", bullets: ["Kueleza mambo kwa maneno rahisi", "Kuandika rasimu: barua, ujumbe, CV (wasifu wa kazi)", "Kutengeneza orodha, mipango na ratiba"] },
            { title: "SI", bullets: ["Mtu, wakili, daktari au ofisi ya serikali", "Sahihi kila wakati, hata unaposikika na uhakika", "Kiongozi: kiongozi ni wewe"] }
          ],
          tryIt: "Andika vitu vitatu katika maisha yako ambavyo msaidizi wa AI anaweza kusaidia wiki hii, kwa mfano orodha ya mahitaji ya dukani, ujumbe kwa mwanafamilia, au kueleza barua uliyopokea.",
          youCanNow: "kusema msaidizi wa AI ni nini, kutaja vitu vitatu anavyoweza kusaidia, na kusema kwa nini bado unakagua anachokuambia.",
          quickCheck: [
            { objective: "O1", q: "Msaidizi wa AI anaweza kusaidia kazi gani?", options: ["Kuandika orodha ya mahitaji kutokana na milo unayopanga", "Kusaini fomu ya kisheria kwa niaba yako", "Kulipa bili zako kutoka benki yako", "Kwenda kwenye miadi yako kwa niaba yako"], answer: 0, why: "Msaidizi wa AI anaweza kuandika na kueleza mambo; hawezi kusaini, kulipa au kufika mahali kwa niaba yako." },
            { objective: "O1", q: "Msaidizi wa AI anakuambia tarehe ya mahakama. Kipi ni kweli?", options: ["Ni sahihi kila wakati kwa sababu ni kompyuta", "Inaweza kuwa si sahihi, kwa hiyo unakagua na mahakama", "Ni AI tu inayoweza kubadilisha tarehe", "Huna haja ya kuiandika"], answer: 1, why: "AI inaweza kusikika na uhakika na bado ikakosea; tarehe na sheria zinatoka ofisi rasmi." }
          ]
        },
        {
          title: "Kufungua msaidizi wa AI wa bure kwenye simu au kompyuta ya maktaba",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fungua msaidizi wa AI wa bure na upate kisanduku unachoandikia.",
          text: [
            "Unaweza kutumia msaidizi wa AI kwenye simu janja au kwenye kompyuta yoyote yenye intaneti, kama ile ya maktaba ya umma au kituo cha ajira.",
            "Kwenye simu: fungua duka la apps (Google Play kwenye Android, App Store kwenye iPhone), tafuta jina la msaidizi, na usakinishe app iliyotengenezwa na kampuni halisi (OpenAI kwa ChatGPT, Microsoft kwa Copilot, Google kwa Gemini). Sakinisha kutoka duka rasmi la apps tu.",
            "Kwenye kompyuta: fungua kivinjari cha wavuti na uandike anwani: chatgpt.com, copilot.microsoft.com au gemini.google.com. Baadhi zinakuruhusu kuzungumza bila akaunti; nyingine zinakuomba uingie (sign in).",
            "Kwenye kompyuta ya pamoja au ya maktaba, usikiruhusu kivinjari kuhifadhi nywila yako, na utoke (sign out) na ufunge kivinjari unapomaliza."
          ],
          steps: ["Chagua simu au kompyuta yenye intaneti.", "Simu: sakinisha app rasmi kutoka duka la apps. Kompyuta: andika anwani ya tovuti kwenye kivinjari.", "Tafuta kisanduku cha ujumbe karibu na chini ya skrini. Mara nyingi kinasema \"Ask anything\" au \"Message\".", "Kwenye kompyuta ya pamoja: toka (sign out) na ufunge kivinjari ukimaliza."],
          words: [["Kivinjari cha wavuti", "programu unayotumia kutembelea tovuti, kama Chrome, Edge au Safari."], ["Duka la apps", "mahali rasmi kwenye simu pa kupata apps kwa usalama."]],
          slides: [
            { title: "Unapoweza kuutumia", bullets: ["Simu janja yako", "Kompyuta ya maktaba ya umma", "Kompyuta ya kituo cha ajira au kituo cha kurudi katika jamii"] },
            { title: "Kwenye simu", bullets: ["Fungua duka rasmi la apps", "Tafuta jina la msaidizi", "Sakinisha app ya kampuni halisi"] },
            { title: "Kwenye kompyuta", bullets: ["Fungua kivinjari cha wavuti", "Andika chatgpt.com, copilot.microsoft.com au gemini.google.com", "Tafuta kisanduku cha ujumbe chini"] },
            { title: "Kwenye kompyuta ya pamoja", bullets: ["Usihifadhi nywila yako", "Toka (sign out) ukimaliza", "Funga kivinjari"] }
          ],
          tryIt: "Fungua msaidizi mmoja wa AI wa bure kwenye simu au kompyuta. Tafuta kisanduku cha ujumbe na uandike: Habari, ninajifunza kutumia AI. Soma jibu lake.",
          youCanNow: "kufungua msaidizi wa AI wa bure kwenye simu au kompyuta, kupata mahali pa kuandika, na kuondoka kwenye kompyuta ya pamoja kwa usalama.",
          quickCheck: [
            { objective: "O2", q: "Unataka app ya AI kwenye simu yako. Unaipata wapi?", options: ["Kiungo kwenye ujumbe kutoka kwa mtu usiyemjua", "Tovuti yoyote yenye kitufe cha kupakua bure", "Duka rasmi la apps, kutoka kampuni halisi", "Nakala ambayo rafiki anakutumia kwa ujumbe"], answer: 2, why: "Duka rasmi la apps na jina la kampuni halisi vinazuia apps bandia zisiingie kwenye simu yako." },
            { objective: "O2", q: "Umemaliza kutumia AI kwenye kompyuta ya maktaba. Unafanya nini kwanza?", options: ["Kuiacha wazi kwa mtu anayefuata", "Kuzima skrini tu", "Kuandika nywila yako kwenye karatasi", "Kutoka (sign out) na kufunga kivinjari"], answer: 3, why: "Kutoka na kufunga kivinjari kunamzuia mtu anayefuata kuingia kwenye mazungumzo na akaunti zako." }
          ]
        },
        {
          title: "Kuuliza swali lililo wazi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Andika ombi lililo wazi linaloleta jibu lenye manufaa mara ya kwanza.",
          text: [
            "Unachoandika kwa msaidizi wa AI kinaitwa prompt. Prompt iliyo wazi inaleta jibu bora zaidi.",
            "Prompt nzuri ina sehemu tatu: unachohitaji, kidogo kuhusu hali yako (bila taarifa binafsi), na jinsi unavyotaka jibu. Kwa mfano: \"Ninaanza kazi mpya ya ghala Jumatatu saa 1 asubuhi (7 am). Nitengenezee orodha rahisi ya kukagua kwa usiku uliotangulia. Tumia sentensi fupi.\"",
            "Prompt dhaifu ni fupi mno, kama \"vidokezo vya kazi\". Msaidizi analazimika kukisia unachomaanisha, kwa hiyo jibu linakuwa la jumla."
          ],
          steps: ["Sema unachohitaji.", "Ongeza kidogo kuhusu hali yako, bila taarifa binafsi.", "Sema jinsi unavyotaka jibu: fupi, maneno rahisi, hatua, orodha au jedwali."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI ili kuomba kitu."]],
          slides: [
            { title: "Prompt ni unachoandika", bullets: ["Prompt iliyo wazi = jibu bora", "Prompt fupi isiyo wazi = jibu la jumla"] },
            { title: "Sehemu tatu za prompt nzuri", bullets: ["1. Unachohitaji", "2. Kidogo kuhusu hali yako", "3. Jinsi unavyotaka jibu"] },
            { title: "Dhaifu dhidi ya wazi", bullets: ["Dhaifu: \"vidokezo vya kazi\"", "Wazi: \"Ninaanza kazi ya ghala Jumatatu saa 1 asubuhi (7 am).", "Nitengenezee orodha ya kukagua kwa usiku uliotangulia.", "Tumia sentensi fupi.\""] }
          ],
          tryIt: "Chagua kazi moja halisi kutoka orodha yako ya Somo la 1. Andika prompt yenye sehemu zote tatu, uitume, na usome jibu.",
          youCanNow: "kuandika prompt yenye unachohitaji, hali yako na jinsi unavyotaka jibu.",
          quickCheck: [
            { objective: "O3", q: "Prompt ipi ina sehemu zote tatu: unachohitaji, hali yako na jinsi unavyotaka jibu?", options: ["\"Nisaidie.\"", "\"Nina usaili wa kazi ya ghala Jumanne. Nipe maswali 5 ya kawaida katika orodha fupi.\"", "\"Andika orodha.\"", "\"Usaili.\""], answer: 1, why: "Inasema unachohitaji (maswali), hali yako (usaili wa ghala Jumanne) na muundo (orodha fupi ya 5)." },
            { objective: "O3", q: "Prompt yako inasema unachohitaji na hali yako. Nini kinakosekana?", options: ["Jinsi unavyotaka jibu, kama hatua fupi au orodha", "Jina lako kamili na tarehe ya kuzaliwa", "Ujumbe wa shukrani", "Hakuna; imekamilika"], answer: 0, why: "Kusema jinsi unavyotaka jibu (fupi, rahisi, hatua, orodha) ni sehemu ya tatu ya prompt iliyo wazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuanza kutumia AI",
        questions: [
          { objective: "O1", q: "Msaidizi wa AI ni nini?", options: ["Mtu anayejibu ujumbe wako", "Programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida", "Tovuti ya serikali", "Aina ya simu"], answer: 1, why: "Msaidizi wa AI ni programu ya kompyuta unayoiandikia au kuongea nayo; inaandika majibu." },
          { objective: "O1", q: "Msaidizi wa AI anasikika na uhakika sana kuhusu jibu. Ufanye nini?", options: ["Kuliamini, kwa sababu linasikika na uhakika", "Kutotumia AI tena kamwe", "Kumwomba rafiki akuamini kwa niaba yako", "Bado kulikagua, kwa sababu linaweza kuwa si sahihi"], answer: 3, why: "AI inaweza kukosea hata inaposikika na uhakika. Wewe ndiye unayeongoza na unakagua." },
          { objective: "O2", q: "Usakinishe app ya AI kwenye simu kutoka wapi?", options: ["Kutoka duka rasmi la apps, iliyotengenezwa na kampuni halisi", "Kutoka tovuti yoyote", "Kutoka kiungo kwenye ujumbe mfupi", "Kutoka tangazo linalojitokeza ghafla (pop-up)"], answer: 0, why: "Duka rasmi la apps na app ya kampuni halisi ndiyo chaguo salama." },
          { objective: "O2", q: "Ulitumia AI kwenye kompyuta ya maktaba. Unafanya nini ukimaliza?", options: ["Kuiacha wazi kwa mtu anayefuata", "Kuhifadhi nywila yako ili iwe haraka wakati ujao", "Kutoka (sign out) na kufunga kivinjari", "Kuzima intaneti ya maktaba"], answer: 2, why: "Kutoka na kufunga kivinjari kunamzuia mtu anayefuata kuingia kwenye akaunti yako." },
          { objective: "O3", q: "Prompt ipi iko wazi zaidi?", options: ["\"msaada\"", "\"vidokezo vya kazi\"", "\"Ninaanza kazi ya ghala Jumatatu saa 1 asubuhi (7 am). Tengeneza orodha ya kukagua kwa usiku uliotangulia kwa sentensi fupi.\"", "\"niambie kila kitu\""], answer: 2, why: "Inasema unachohitaji, hali yako, na jinsi unavyotaka jibu." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI kwa kujiamini",
      lessons: [
        {
          title: "Kuboresha jibu",
          objectives: ["O4"],
          minutes: 4,
          goal: "Uliza maswali ya kufuatilia ili kuboresha jibu.",
          text: [
            "Huna lazima ya kukubali jibu la kwanza. Msaidizi wa AI anakumbuka ulichosema mapema katika mazungumzo hayo hayo, kwa hiyo unaweza kumwomba abadilishe jibu lake.",
            "Maswali ya kufuatilia yenye manufaa: \"Lifupishe.\" \"Tumia maneno rahisi zaidi.\" \"Eleza hatua ya 2 zaidi.\" \"Nipe mfano.\" \"Liweke katika orodha.\" \"Lifanye lisikike la adabu zaidi.\"",
            "Mazungumzo yakipotoka, anza mazungumzo mapya na uandike prompt iliyo wazi zaidi."
          ],
          steps: ["Soma jibu la kwanza.", "Amua unachotaka kibadilishwe.", "Omba badiliko hilo moja.", "Rudia hadi jibu likufae."],
          words: [["Swali la kufuatilia", "swali la pili linalojengwa juu ya jibu ulilopata."]],
          slides: [
            { title: "Jibu la kwanza ni rasimu", bullets: ["Unaweza kuomba mabadiliko", "Linakumbuka mazungumzo hayo hayo"] },
            { title: "Maswali ya kufuatilia yanayofaa", bullets: ["\"Lifupishe.\"", "\"Tumia maneno rahisi zaidi.\"", "\"Eleza hatua ya 2 zaidi.\"", "\"Nipe mfano.\""] },
            { title: "Umepotoka?", bullets: ["Anza mazungumzo mapya", "Andika prompt iliyo wazi zaidi"] }
          ],
          tryIt: "Chukua jibu kutoka Somo la 3. Omba mabadiliko mawili, moja baada ya jingine, kama \"lifupishe\" kisha \"tumia maneno rahisi zaidi\". Linganisha jibu la kwanza na la mwisho.",
          youCanNow: "kuboresha jibu la AI kwa kuuliza maswali ya kufuatilia yaliyo wazi.",
          quickCheck: [
            { objective: "O4", q: "Jibu lina maneno magumu kusoma. Unatuma nini baadaye?", options: ["\"Si sahihi. Jaribu tena.\"", "Hakuna; funga app", "\"Lirefushe.\"", "\"Tumia maneno rahisi zaidi.\""], answer: 3, why: "Swali la kufuatilia lililo wazi linalosema badiliko unalotaka linarekebisha jibu bila kuanza upya." },
            { objective: "O4", q: "Kwa nini uombe mabadiliko moja baada ya jingine?", options: ["AI inaweza kusoma neno moja tu kwa wakati", "Unaweza kuona kila badiliko lilifanya nini", "Inagharimu pesa kidogo", "AI hukasirika na maombi marefu"], answer: 1, why: "Badiliko moja kwa wakati linakuonyesha ombi lipi lilifanya jibu kuwa bora." }
          ]
        },
        {
          title: "Kukagua jibu kabla ya kuliamini",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kagua jibu la AI ukilinganisha na chanzo cha kuaminika.",
          text: [
            "Wasaidizi wa AI wakati mwingine hubuni mambo, kama namba ya simu isiyo sahihi, ofisi ambayo haipo, sheria ya zamani au tarehe isiyo sahihi. Hii wakati mwingine inaitwa hallucination (kubuni mambo).",
            "Kagua kila wakati chochote kuhusu pesa, sheria, afya yako, mafao ya serikali, tarehe, anwani na namba za simu. Kagua na chanzo rasmi: tovuti ya serikali (anwani kwa kawaida inaishia na .gov), ofisi yenyewe, au mtu unayemwamini kama msimamizi wa kesi yako (case manager), mshauri wa kurudi katika jamii au mtunza maktaba.",
            "Tabia nzuri: muulize msaidizi \"Ninaweza kukagua hili wapi?\" kisha nenda mwenyewe kwenye ukurasa huo rasmi, badala ya kuamini kiungo bila kuangalia."
          ],
          steps: ["Tafuta ukweli ndani ya jibu: namba, tarehe, majina, sheria.", "Uangalie kwenye tovuti rasmi (mara nyingi inaishia na .gov) au piga simu ofisini.", "Visipolingana, amini chanzo rasmi.", "Kwa maamuzi makubwa, muulize pia mtu unayemwamini."],
          words: [["Hallucination", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], [".gov", "mwisho wa anwani za tovuti rasmi za serikali ya Marekani."]],
          slides: [
            { title: "AI inaweza kubuni mambo", bullets: ["Namba za simu au anwani zisizo sahihi", "Sheria za zamani au tarehe zisizo sahihi", "Ofisi ambazo hazipo"] },
            { title: "Kagua kila wakati", bullets: ["Pesa na mafao", "Sheria na kanuni", "Afya", "Tarehe, anwani, namba za simu"] },
            { title: "Jinsi ya kukagua", bullets: ["Tovuti rasmi, mara nyingi inaishia na .gov", "Piga simu ofisini", "Muulize msimamizi wa kesi au mtunza maktaba"] }
          ],
          tryIt: "Muulize msaidizi wa AI namba ya simu au tovuti ya ofisi halisi iliyo karibu nawe (kwa mfano ofisi ya magari na leseni za udereva ya jimbo lako). Kisha tafuta mwenyewe tovuti rasmi ya ofisi hiyo na uone kama jibu linalingana.",
          youCanNow: "kutambua ukweli unaohitaji kukaguliwa na kuukagua kwa chanzo rasmi.",
          quickCheck: [
            { objective: "O5", q: "AI inakupa namba ya simu ya ofisi ya magari na leseni. Unafanya nini?", options: ["Kutafuta namba kwenye tovuti rasmi ya ofisi na kulinganisha", "Kuipigia mara moja", "Kuisambaza mtandaoni", "Kuiuliza AI kama ina uhakika"], answer: 0, why: "Tovuti rasmi tu inaweza kuthibitisha namba; AI inaweza kubuni namba zinazoonekana halisi." },
            { objective: "O5", q: "Anwani ipi ya tovuti ina uwezekano mkubwa zaidi kuwa tovuti rasmi ya serikali ya Marekani?", options: ["dmv-help-now.com", "freegovforms.net", "dmv.ca.gov", "govservices.info"], answer: 2, why: "Tovuti rasmi za serikali ya Marekani kwa kawaida zinaishia na .gov." }
          ]
        },
        {
          title: "Kulinda taarifa zako binafsi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Tumia AI bila kutoa taarifa binafsi, na utambue ulaghai unaotumia AI.",
          text: [
            "Usiandike taarifa binafsi kwa msaidizi wa AI: namba yako ya Social Security (namba ya hifadhi ya jamii ya Marekani), namba za vitambulisho, namba za kesi au za mfungwa, nywila, namba za benki au kadi, au anwani kamili ya nyumbani. Unaweza kupata msaada unaohitaji bila hizo. Andika \"[namba yangu]\" badala yake.",
            "Walaghai pia wanatumia AI. Wanaweza kuandika ujumbe unaoonekana halisi na hata kuiga sauti ya mwanafamilia kwenye simu. Kuwa makini na ujumbe wowote unaokuharakisha, unaoomba pesa au kadi za zawadi (gift cards), au unaoomba msimbo uliotumwa kwenye simu yako.",
            "Kitu kikionekana si sawa, simama. Kata simu, na umpigie mtu huyo au ofisi hiyo kwa namba unayoijua tayari kuwa halisi."
          ],
          steps: ["Kabla ya kutuma prompt, isome uone kama ina taarifa binafsi na uziondoe.", "Tumia kishika-nafasi kama \"[namba yangu]\".", "Ujumbe wa haraka, maombi ya pesa na maombi ya msimbo ni dalili za hatari.", "Piga simu tena kwa namba unayoijua kuwa halisi."],
          words: [["Taarifa binafsi", "maelezo yanayoweza kumruhusu mtu kujifanya wewe au kuchukua pesa zako."], ["Ulaghai", "hila ya kuiba pesa au taarifa."]],
          slides: [
            { title: "Usiandike kamwe kwa AI", bullets: ["Namba za Social Security au vitambulisho", "Namba za kesi au za mfungwa", "Nywila, namba za benki au kadi"] },
            { title: "Tumia kishika-nafasi", bullets: ["Andika \"[namba yangu]\" badala yake", "Bado unapata msaada unaohitaji"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Wanakuharakisha", "Wanaomba pesa au kadi za zawadi", "Wanaomba msimbo uliotumwa kwenye simu yako"] },
            { title: "Ukiwa na shaka", bullets: ["Simama", "Kata simu", "Piga tena kwa namba unayoijua kuwa halisi"] }
          ],
          tryIt: "Kazi ya mwisho: tumia msaidizi wa AI kuandika ujumbe mfupi wa adabu unaouliza biashara kama inaajiri watu. Omba badiliko moja la kuuboresha, hakikisha hauna taarifa binafsi, na uusome kwa sauti.",
          youCanNow: "kutumia msaidizi wa AI kwa kazi halisi huku ukilinda taarifa zako binafsi, na kutambua dalili za ulaghai.",
          quickCheck: [
            { objective: "O6", q: "Fomu ya kazi inaomba namba yako ya Social Security na unataka msaada wa AI kuijaza. Unaandika nini?", options: ["Namba yako halisi ili AI iikague", "Namba yako ukibadilisha tarakimu moja", "Namba ya kadi yako ya benki badala yake", "Kishika-nafasi kama [namba yangu]"], answer: 3, why: "Kishika-nafasi kinaruhusu AI kusaidia maneno huku namba yako halisi ikibaki siri." },
            { objective: "O6", q: "Ujumbe unasema mafao yako yanasimama leo usipotuma msimbo uliotumiwa sasa hivi. Huu ni nini?", options: ["Ulaghai; usitoe msimbo kamwe", "Ujumbe wa kawaida kutoka ofisi yako", "Jaribio unalopaswa kufaulu", "Kikumbusho cha kusasisha simu yako"], answer: 0, why: "Kukuharakisha na kuomba msimbo ni dalili za hatari za ulaghai; ofisi halisi haziombi misimbo hii." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI kwa kujiamini",
        questions: [
          { objective: "O4", q: "Jibu la kwanza ni refu mno. Hatua bora inayofuata ni ipi?", options: ["Kuomba: \"Lifupishe\"", "Kukata tamaa", "Kulinakili hivyo hivyo", "Kuzima simu"], answer: 0, why: "Swali la kufuatilia linamwomba msaidizi abadilishe jibu lake." },
          { objective: "O5", q: "Kipi kati ya hivi unapaswa KILA WAKATI kukagua na chanzo rasmi?", options: ["Utani", "Orodha ya mahitaji ya dukani", "Shairi", "Namba ya simu ya ofisi ya serikali"], answer: 3, why: "Namba za simu, tarehe, pesa, sheria na mafao zinaweza kuwa si sahihi na lazima zikaguliwe." },
          { objective: "O5", q: "\"Hallucination\" inamaanisha nini tunapozungumza kuhusu AI?", options: ["AI imechoka", "AI imeandika kitu kinachosikika kuwa kweli lakini kimebuniwa", "Skrini imeharibika", "Aina ya app"], answer: 1, why: "AI inaweza kubuni ukweli unaosikika kuwa halisi." },
          { objective: "O6", q: "Uandike nini badala ya namba yako ya Social Security katika prompt?", options: ["Namba halisi", "Kishika-nafasi kama \"[namba yangu]\"", "Nusu ya namba", "Namba yako ya benki"], answer: 1, why: "Kishika-nafasi kinakuwezesha kupata msaada bila kutoa taarifa binafsi." },
          { objective: "O6", q: "Unapigiwa simu kwa sauti ya mwanafamilia akiomba kadi za zawadi mara moja. Unafanya nini?", options: ["Kununua kadi za zawadi haraka", "Kumpa msimbo kutoka kwenye simu yako", "Kutuma namba yako ya benki", "Kukata simu na kumpigia tena kwa namba unayoijua kuwa halisi"], answer: 3, why: "Walaghai wanaweza kuiga sauti. Kuharakishwa na kadi za zawadi ni dalili za hatari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa AI na Kujiamini katika Teknolojia",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI anaelezwa vizuri zaidi kama:", options: ["Programu ya kompyuta unayozungumza nayo", "Mfanyakazi wa serikali", "Kampuni ya simu", "Tovuti inayouza vitu tu"], answer: 0, why: "Ni programu unayoiandikia au kuongea nayo." },
      { objective: "O1", q: "Msaidizi wa AI ni hodari wa kazi ipi?", options: ["Kufanya maamuzi ya kisheria kwa niaba yako", "Kusaini nyaraka kwa niaba yako", "Kueleza barua ngumu kwa maneno rahisi", "Kujua historia yako ya binafsi"], answer: 2, why: "Kueleza kwa maneno rahisi ni moja ya uwezo wake." },
      { objective: "O1", q: "Nani anaongoza unapotumia msaidizi wa AI?", options: ["AI", "Duka la apps", "Wewe", "Hakuna mtu"], answer: 2, why: "Wewe unaamua cha kuuliza na cha kuamini." },
      { objective: "O2", q: "Kipi ni msaidizi wa AI wa bure anayejulikana?", options: ["Microsoft Copilot", "Kikokotoo", "Ujumbe mfupi", "Printa"], answer: 0, why: "Copilot, ChatGPT na Gemini ni wasaidizi wa bure wanaojulikana." },
      { objective: "O2", q: "Kwenye simu, mahali salama pa kupata app ya AI ni:", options: ["Kiungo kwenye ujumbe kutoka kwa mtu usiyemjua", "Tovuti yoyote", "Tangazo linalojitokeza ghafla (pop-up)", "Duka rasmi la apps"], answer: 3, why: "Sakinisha kutoka duka rasmi la apps tu." },
      { objective: "O2", q: "Anwani ipi ya tovuti inafungua msaidizi wa AI kwenye kompyuta?", options: ["myjob.gift", "copilot.microsoft.com", "freemoney.win", "hakuna kati ya hizi"], answer: 1, why: "copilot.microsoft.com ni anwani rasmi ya Microsoft kwa Copilot." },
      { objective: "O2", q: "Kwa kawaida unaandika swali lako wapi?", options: ["Upau wa anwani wa simu", "Kisanduku cha ujumbe karibu na chini ya skrini", "Alama ya betri", "Kamera"], answer: 1, why: "Kisanduku cha ujumbe mara nyingi kinasema \"Ask anything\" au \"Message\"." },
      { objective: "O2", q: "Baada ya kutumia kompyuta ya maktaba unapaswa:", options: ["Kuhifadhi nywila yako", "Kuandika nywila yako kwenye karatasi", "Kuacha akaunti yako wazi", "Kutoka (sign out) na kufunga kivinjari"], answer: 3, why: "Hii inalinda akaunti yako dhidi ya mtu anayefuata." },
      { objective: "O3", q: "Prompt ni nini?", options: ["Unachoandika au kusema kwa msaidizi wa AI", "Kengele ya kukumbusha", "Aina ya chaja ya simu", "Mwisho wa anwani ya tovuti"], answer: 0, why: "Prompt ni ombi lako kwa AI." },
      { objective: "O3", q: "Prompt nzuri ina:", options: ["Neno moja tu", "Namba yako ya Social Security", "Unachohitaji, hali yako, na jinsi unavyotaka jibu", "Nywila yako"], answer: 2, why: "Sehemu hizo tatu zinaleta jibu lenye manufaa." },
      { objective: "O3", q: "Prompt ipi huenda ikaleta jibu lenye manufaa zaidi?", options: ["\"wasifu\"", "\"nisaidie\"", "\"Nilifanya kazi miaka 3 jikoni. Nisaidie kuorodhesha ujuzi wangu kwa kazi ya mpishi kwa vipengele vifupi.\"", "\"vitu\""], answer: 2, why: "Inatoa hitaji, hali na muundo." },
      { objective: "O4", q: "Jibu la kwanza la AI si sahihi kabisa. Unaweza:", options: ["Kuuliza swali la kufuatilia ili kulibadilisha", "Kulikubali tu", "Kulipa ili lirekebishwe", "Kuwasha upya simu yako"], answer: 0, why: "Maswali ya kufuatilia kama \"tumia maneno rahisi zaidi\" yanaboresha jibu." },
      { objective: "O4", q: "Lipi ni swali zuri la kufuatilia?", options: ["\"Tuma pesa.\"", "\"Hii ndiyo namba yangu ya benki.\"", "\"Futa simu yangu.\"", "\"Eleza hatua ya 2 zaidi.\""], answer: 3, why: "Linaomba badiliko lililo wazi katika jibu." },
      { objective: "O4", q: "Mazungumzo yakipotoka, hatua nzuri ni:", options: ["Kuandika nywila yako", "Kuanza mazungumzo mapya kwa prompt iliyo wazi zaidi", "Kuendelea kurudia maneno yale yale", "Kutotumia AI tena kamwe"], answer: 1, why: "Mazungumzo mapya yenye prompt iliyo wazi zaidi kwa kawaida yanafanya kazi vizuri zaidi." },
      { objective: "O5", q: "AI inapokupa namba ya simu ya ofisi, unapaswa:", options: ["Kuipigia bila kukagua", "Kuikagua kwenye tovuti rasmi ya ofisi", "Kuiweka mtandaoni", "Kuipa namba yako ya kitambulisho"], answer: 1, why: "AI inaweza kutoa namba zisizo sahihi; kagua chanzo rasmi." },
      { objective: "O5", q: "Tovuti rasmi za serikali ya Marekani kwa kawaida zinaishia na:", options: [".xyz", ".win", ".gift", ".gov"], answer: 3, why: ".gov inatumiwa na tovuti za serikali ya Marekani." },
      { objective: "O6", q: "Kipi hupaswi KAMWE kuandika kwa msaidizi wa AI?", options: ["Namba ya kadi yako ya benki", "\"Lifupishe\"", "\"Nipe mfano\"", "\"Tumia maneno rahisi zaidi\""], answer: 0, why: "Namba za benki na kadi ni taarifa binafsi." },
      { objective: "O6", q: "Ujumbe unakuharakisha ulipe kwa kadi za zawadi. Huu ni:", options: ["Bili ya kawaida", "Nafasi ya kazi", "Dalili ya hatari ya ulaghai", "Sheria ya serikali"], answer: 2, why: "Kuharakishwa na kadi za zawadi ni dalili za kawaida za ulaghai." },
      { objective: "O6", q: "Mtu anaomba msimbo uliotumwa kwa ujumbe kwenye simu yako sasa hivi. Unapaswa:", options: ["Kumsomea", "Kuuweka mtandaoni", "Kutoutoa kamwe", "Kuwatumia marafiki"], answer: 2, why: "Msimbo huo unalinda akaunti yako. Ofisi halisi haziuombi." },
      { objective: "O6", q: "Kitu kikionekana si sawa kwenye simu, hatua salama zaidi ni:", options: ["Kukata simu na kupiga tena kwa namba unayoijua kuwa halisi", "Kuendelea kuongea", "Kuwapa anwani yako", "Kutuma malipo kidogo"], answer: 0, why: "Kupiga tena kwa namba unayoijua kunazuia ulaghai mwingi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ombi lililo wazi", objective: "O3", notYet: "Prompt haiko wazi, kwa mfano \"andika ujumbe\".", meets: "Prompt inasema unachohitaji, hali yako na jinsi unavyotaka jibu.", exceeds: "Pia inataja biashara na kazi, na jibu la kwanza linakaribia kuwa tayari." },
      { name: "Ameliboresha", objective: "O4", notYet: "Alitumia jibu la kwanza kama lilivyo.", meets: "Aliomba badiliko moja na ujumbe ukawa bora.", exceeds: "Aliomba mabadiliko mawili au zaidi, moja baada ya jingine, na anaweza kusema kila moja lilirekebisha nini." },
      { name: "Taarifa binafsi zimezuiwa", objective: "O6", notYet: "Prompt au ujumbe una namba ya binafsi, nywila, anwani au tarehe ya kuzaliwa.", meets: "Hakuna taarifa binafsi katika prompt wala katika ujumbe.", exceeds: "Alitumia kishika-nafasi kama [namba yangu ya simu] na akaijaza tu katika ujumbe anaoutuma mwenyewe." },
      { name: "Ukweli umekaguliwa", objective: "O5", notYet: "Jina la biashara, anwani au saa za kazi vilinakiliwa kutoka AI bila kukaguliwa.", meets: "Ukweli wowote kuhusu biashara ulikaguliwa kwenye tovuti yake yenyewe au orodha rasmi.", exceeds: "Anaweza kusema alikagua wapi." },
      { name: "Unasikika kama wewe", objective: "O1", notYet: "Ujumbe unatumia maneno ambayo mwanafunzi hangeyasema au hayaelewi.", meets: "Ukisomwa kwa sauti, ni wa adabu, mfupi na kwa maneno ya mwanafunzi mwenyewe.", exceeds: "Mwanafunzi alibadilisha baadhi ya maneno yeye mwenyewe ili usikike zaidi kama yeye." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ndani ya siku 30",
      "Wanafunzi wanaoripoti kutumia AI kwa maombi ya kazi, ujumbe au barua ndani ya siku 30 (utafiti wa kufuatilia)",
      "Washirika wa kurudi katika jamii wanaripoti maombi machache ya msaada kwa kazi za msingi za mtandaoni"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya programu",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Karatasi na kalamu kwa maelezo ya \"Jaribu sasa\"",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika maabara ya kompyuta au kituo cha kurudi katika jamii: fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi, na kazi za \"Jaribu sasa\" zifanywe papo hapo.",
      "Kabla wanafunzi hawajaondoka, hakikisha kila mmoja ametoka (sign out) kwenye kompyuta za pamoja.",
      "Usiwaombe wanafunzi kamwe kuandika taarifa binafsi halisi katika mazoezi; tumia vishika-nafasi kama [namba yangu].",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Wakumbushe wanafunzi walio kwenye parole au probation kufuata masharti yoyote kuhusu matumizi ya intaneti."
    ]
  }
};
